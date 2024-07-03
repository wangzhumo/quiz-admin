import { RainbowUnderlineToggle } from '@/components/rainbowToggle'
import { MessageKeys } from '@/locales'
import { QuestionsTab } from '@/pages/quizzes/create/Questions'
import OverviewTab from '@/pages/quizzes/create/overview'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import styled from './create.module.css'

const CreateQuizzesPage = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const tabLabels = [
    <FormattedMessage id={MessageKeys.quizzes.create.baseTab} />,
    <FormattedMessage id={MessageKeys.quizzes.create.questionTab} />,
    <FormattedMessage id={MessageKeys.quizzes.create.resultTab} />
  ]
  const onTabChanged = (key: number) => {
    setTabIndex(key)
  }

  return (
    <div className='flex flex-col items-center w-full h-full'>
      <div className='relative top-[10.5rem] border-t-1 border-line w-full'></div>
      <div className='w-[900px]'>
        <span className='text-3xl font-medium mt-8 inline-block'>
          New Quizzes
        </span>
        <Tabs
          onSelect={(index, last, evnet) => onTabChanged(index)}
          selectedIndex={tabIndex}
        >
          <TabList className={styled.tabPageContainer}>
            {tabLabels.map((_, index) => {
              const id = `tab${index}`
              return (
                <Tab key={id} className={styled.tabPageItemStyle}>
                  <RainbowUnderlineToggle
                    key={String(index)}
                    classNames={styled.tabFontStyle}
                    text={tabLabels[index]}
                    isSelected={index === tabIndex}
                  />
                </Tab>
              )
            })}
          </TabList>
          <TabPanel id={'panel-0'} key={'panel-0'}>
            <OverviewTab count={3} index={0} onChangePage={onTabChanged} />
          </TabPanel>
          <TabPanel id={'panel-1'} key={'panel-1'}>
            <QuestionsTab count={3} index={1} onChangePage={onTabChanged} />
          </TabPanel>
          <TabPanel id={'panel-2'} key={'panel-2'}>
            <div className='w-full h-screen bg-purple-100 mt-6'>Tab - 2</div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default CreateQuizzesPage
