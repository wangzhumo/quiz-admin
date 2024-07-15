import { Fragment } from "react";
import type { CalcMatchRule, CalcMatchRuleType, Calculate, ResultItem } from "@/pages/quizzes/create/types";
import { useQuizzesCreatedStore } from "@/pages/quizzes/create/store";
import { produce } from "immer";
import { Button, InputNumber } from "antd";
import CheckUtils from "@/utils/checkutils";

export interface EditRuleProps {
  result?: ResultItem
  calculate: Calculate
}

const ruleToChar: Record<CalcMatchRuleType, string> = {
  eq: '=',
  gr: '>',
  gre: '≧',
  le: '<',
  lee: '≦'
}

function EditRuleComponent(props: EditRuleProps) {
  const match = props.calculate.match.find(
    v => v.resultOrder === props.result?.order
  )

  const updateCalculate = useQuizzesCreatedStore(state => state.updateCalculate)
  const onInputNumber = (
    rule: CalcMatchRule,
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    // lose focus
    const findIndex = props.calculate.match.findIndex(
      v => v.resultOrder === props.result?.order
    )
    if (findIndex < 0) {
      // this match is empty
      return
    }
    const inputValue = event.target.value
    if (!CheckUtils.isNumeric(inputValue)) {
      return
    }
    const inputNum = Number.parseFloat(inputValue)
    // check value diff
    if (rule.value === inputNum) {
      return
    }
    updateCalculate({
      ...props.calculate,
      match: produce(props.calculate.match, draft => {
        draft[findIndex].rules[rule.order] = {
          ...rule,
          value: inputNum
        }
        return draft
      })
    })
  }

  const onKbdClick = (type: CalcMatchRuleType) => {
    // add item
    const findIndex = props.calculate.match.findIndex(
      v => v.resultOrder === props.result?.order
    )
    if (findIndex < 0) {
      // this match is empty
      return
    }
    updateCalculate(
      produce(props.calculate, draft => {
        draft.match[findIndex].rules.push({
          order: draft.match[findIndex].rules.length,
          mode: type,
          value: 0
        })
        return draft
      })
    )
  }

  return (
    <Fragment>
      {props.result ? (
        <div className='p-3 mt-6 bg-black/50 rounded-lg flex flex-col w-80 gap-2'>
          <div className='flex flex-row gap-4'>
            <div onClick={e => onKbdClick('eq')}>
              <kbd className='kbd'>{ruleToChar.eq}</kbd>
            </div>
            <div onClick={e => onKbdClick('le')}>
              <kbd className='kbd'>{ruleToChar.le}</kbd>
            </div>
            <div onClick={e => onKbdClick('lee')}>
              <kbd className='kbd'>{ruleToChar.lee}</kbd>
            </div>
            <div onClick={e => onKbdClick('gr')}>
              <kbd className='kbd'>{ruleToChar.gr}</kbd>
            </div>
            <div onClick={e => onKbdClick('gre')}>
              <kbd className='kbd'>{ruleToChar.gre}</kbd>
            </div>
          </div>
          <span>{props.result.name}</span>
          {match ? (
            <div className='flex flex-col gap-2'>
              {match.rules.map(rule => {
                return (
                  <div
                    key={`${match.resultOrder}-${rule.order}`}
                    className='flex gap-2'
                  >
                    <kbd className='kbd'>{ruleToChar[rule.mode]}</kbd>
                    <InputNumber
                      size={'small'}
                      key={`input-${match.resultOrder}-${rule.order}`}
                      defaultValue={rule.value}
                      onBlur={e => onInputNumber(rule, e)}
                    ></InputNumber>
                  </div>
                )
              })}
              <Button size={'small'} type={'link'}>
                Save
              </Button>
            </div>
          ) : (
            <Fragment />
          )}
        </div>
      ) : (
        <div>Has Empty</div>
      )}
    </Fragment>
  )
}

export default EditRuleComponent
