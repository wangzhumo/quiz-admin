import type { CommonTabProps } from '@/pages/quizzes/create/types'
import QuizzesFooter from '@/components/quizzesFooter'
import { Badge, Card } from 'antd'
import { useState } from 'react'
import { useQuizzesCreatedStore } from '@/pages/quizzes/create/store'
import CalculateSumComponent from '@/pages/quizzes/create/components/calc/CalculateSumComponent'
import CalcCustomComponent from '@/pages/quizzes/create/components/calc/CalcCustomComponent'

export type CalcType = 'Sum' | 'Custom'
function CalculateTab(props: CommonTabProps) {
  const questions = useQuizzesCreatedStore(state => state.questions)
  const results = useQuizzesCreatedStore(state => state.results)
  const calculate = useQuizzesCreatedStore(state => state.calculate)
  const [calcType, setCalcType] = useState<CalcType>('Sum')

  return (
    <div className='w-full h-full flex flex-col mt-6 pb-14  pt-4 gap-5'>
      <span className='text-lg'>Calculate Type</span>
      <div className='flex-row flex gap-10'>
        <Badge.Ribbon
          color={calcType === 'Sum' ? '#f87171' : 'transparent'}
          text={calcType === 'Sum' ? 'Choose' : null}
        >
          <Card title='Sum' size='small' onClick={e => setCalcType('Sum')}>
            Calculation of scores for all questions in the survey questionnaire.
          </Card>
        </Badge.Ribbon>
        <Badge.Ribbon
          color={calcType === 'Custom' ? '#f87171' : 'transparent'}
          text={calcType === 'Custom' ? 'Choose' : null}
        >
          <Card
            title='Custom'
            size='small'
            onClick={e => setCalcType('Custom')}
          >
            Customized calculation scoring method through JavaScript script
            execution.{' '}
          </Card>
        </Badge.Ribbon>
      </div>
      <CalculateSumComponent
        className={calcType === 'Sum' ? '' : 'hidden'}
        question={questions}
        result={results}
        calculate={calculate}
      />
      <CalcCustomComponent
        className={calcType === 'Custom' ? '' : 'hidden'}
        question={questions}
        result={results}
        calculate={calculate}
      />
      <QuizzesFooter {...props} onPageClick={props.onChangePage} />
    </div>
  )
}

export default CalculateTab
