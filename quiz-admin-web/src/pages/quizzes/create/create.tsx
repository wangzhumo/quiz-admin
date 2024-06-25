import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { MessageKeys } from '@/locales'
import { FormattedMessage } from "react-intl";
import { RainbowUnderlineToggle } from '@/components/rainbowToggle'
import styled from "./create.module.css"
import { useState } from 'react'
import OverviewTab from "@/pages/quizzes/create/overview";
const CreateQuizzesPage = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const tabLabels = [
    <FormattedMessage id={MessageKeys.quizzes.create.baseTab} />,
    <FormattedMessage id={MessageKeys.quizzes.create.questionTab} />,
    <FormattedMessage id={MessageKeys.quizzes.create.resultTab} />,
  ]
  const onTabChanged = (key: number) => {
    setTabIndex(key)
  }
  const tabItems = tabLabels.map((_, index) => {
    const id = `tab${index}`
    return (
      <Tab key={id} className={styled.tabPageItemStyle}>
        <RainbowUnderlineToggle
          key={index}
          classNames={styled.tabFontStyle}
          text={tabLabels[index]}
          isSelected={index === tabIndex}
        />
      </Tab>
    )
  })

  const tabPanels = [
    <TabPanel id={'tab-0'} >
      <OverviewTab />
    </TabPanel>,
    <TabPanel id={'tab-1'} >
      <div className="w-full h-screen bg-purple-100 mt-6">Tab - 1</div>
    </TabPanel>,
    <TabPanel id={'tab-2'} >
      <div className="w-full h-screen bg-purple-100 mt-6">Tab - 2</div>
    </TabPanel>
  ]


  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className='relative top-[10.5rem] border-t-1 border-line w-full'></div>
      <div className="w-[900px]">
        <span className="text-3xl font-medium mt-8 inline-block">New Quizzes</span>
        <Tabs onSelect={(index, last, evnet) => onTabChanged(index)}
          selectedIndex={tabIndex}>
          <TabList className={styled.tabPageContainer}>{tabItems}</TabList>
          {tabPanels}
        </Tabs>
      </div>
    </div>
  )
}

export default CreateQuizzesPage
