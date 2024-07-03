import type { MouseEvent, ReactNode } from 'react'
import { QuestionType } from '../../types'

interface OptionTypeComponentProps {
  title: string
  icon: ReactNode
  desc: string
  onClick: () => void
}

function OptionTypeComponent(props: OptionTypeComponentProps) {
  const onDivClick = (_: MouseEvent<HTMLDivElement>) => {
    props.onClick()
  }

  return (
    <div
      className='flex-col  flex bg-black-second rounded-lg p-3 cursor-pointer'
      onClick={onDivClick}
    >
      <div className='flex flex-row gap-2 items-center'>
        {props.icon}
        <span className=' text-lg'>{props.title}</span>
      </div>
      <span className='text-secondary text-sm break-all'>{props.desc}</span>
    </div>
  )
}

export interface OptionsTypeComponentProps {
  onOptionTypeComponentClick: (type: QuestionType) => void
}

function OptionsTypeComponent(props: OptionsTypeComponentProps) {
  return (
    <div className='flex flex-row gap-5 text-xl mb-3 mt-4 font-medium w-[600px] pl-3 pr-3'>
      <OptionTypeComponent
        title={'True Or False'}
        icon={
          <svg
            className='size-6'
            viewBox='0 0 1024 1024'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            p-id='53166'
            width='256'
            height='256'
          >
            <path
              d='M877.454222 146.545778a34.133333 34.133333 0 0 1 3.982222 43.52l-3.982222 4.721778-682.666666 682.666666a34.133333 34.133333 0 0 1-52.224-43.52l3.982222-4.721778 682.666666-682.666666a34.133333 34.133333 0 0 1 48.241778 0z m-232.277333 451.128889l4.721778 3.982222L739.555556 691.2l89.656888-89.6a34.133333 34.133333 0 0 1 52.224 43.52l-3.982222 4.721778L787.911111 739.555556l89.6 89.656888a34.133333 34.133333 0 0 1-43.52 52.224l-4.721778-3.982222L739.555556 787.911111l-89.656889 89.6a34.133333 34.133333 0 0 1-52.224-43.52l3.982222-4.721778L691.2 739.555556l-89.6-89.656889a34.133333 34.133333 0 0 1 43.52-52.224z m-109.056-451.128889a34.133333 34.133333 0 0 1 3.982222 43.52l-3.982222 4.721778-227.555556 227.555555a34.133333 34.133333 0 0 1-43.52 3.982222l-4.721777-3.982222-113.777778-113.777778a34.133333 34.133333 0 0 1 43.52-52.224l4.721778 3.982223L284.444444 349.866667l203.434667-203.377778a34.133333 34.133333 0 0 1 48.241778 0z'
              fill='#ffffff'
              p-id='53167'
            ></path>
          </svg>
        }
        desc={'Is consistent with the description in question.'}
        onClick={() =>
          props.onOptionTypeComponentClick(QuestionType.TrueOrFalse)
        }
      />
      <OptionTypeComponent
        title={'Level Option'}
        icon={
          <svg
            className='size-6'
            viewBox='0 0 1024 1024'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            p-id='58423'
            width='256'
            height='256'
          >
            <path
              d='M202.666667 192c-78.933333 0-140.8 64-140.8 140.8 0 78.933333 64 140.8 140.8 140.8 78.933333 0 140.8-64 140.8-140.8 0-78.933333-64-140.8-140.8-140.8z m87.466666 140.8c0 49.066667-40.533333 89.6-89.6 89.6-49.066667 0-89.6-40.533333-89.6-89.6 0-49.066667 40.533333-89.6 89.6-89.6 51.2 0 89.6 40.533333 89.6 89.6zM202.666667 550.4c-78.933333 0-140.8 64-140.8 140.8 0 78.933333 64 140.8 140.8 140.8 78.933333 0 140.8-64 140.8-140.8 0-76.8-64-140.8-140.8-140.8z m87.466666 140.8c0 49.066667-40.533333 89.6-89.6 89.6-49.066667 0-89.6-40.533333-89.6-89.6 0-49.066667 40.533333-89.6 89.6-89.6 51.2 2.133333 89.6 40.533333 89.6 89.6zM433.066667 177.066667h531.2v53.333333H433.066667z'
              fill='#ffffff'
              p-id='58424'
            ></path>
            <path
              d='M433.066667 381.866667h366.933333v53.333333H433.066667z'
              fill='#ffffff'
              p-id='58425'
            ></path>
            <path
              d='M174.933333 439.466667h53.333334v142.933333H174.933333zM174.933333 800h53.333334v142.933333H174.933333zM174.933333 81.066667h53.333334v142.933333H174.933333z'
              fill='#ffffff'
              p-id='58426'
            ></path>
            <path
              d='M433.066667 795.733333h366.933333v53.333334H433.066667z'
              fill='#ffffff'
              p-id='58427'
            ></path>
            <path
              d='M433.066667 588.8h531.2v53.333333H433.066667z'
              fill='#ffffff'
              p-id='58428'
            ></path>
          </svg>
        }
        desc={'Similarity with description in question.'}
        onClick={() => props.onOptionTypeComponentClick(QuestionType.Rating)}
      />
      <OptionTypeComponent
        title={'Custom Option'}
        icon={
          <svg
            className='size-6'
            viewBox='0 0 1024 1024'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            p-id='59848'
            width='256'
            height='256'
          >
            <path
              d='M739.555556 193.991111L830.008889 284.444444l-512 512H227.555556v-90.453333l512-512m0-67.128889a31.857778 31.857778 0 0 0-22.755556 9.102222l-537.031111 537.6a31.857778 31.857778 0 0 0-9.102222 22.755556v125.724444a31.857778 31.857778 0 0 0 31.857777 31.857778h125.724445a31.857778 31.857778 0 0 0 22.755555-9.102222L887.466667 307.2a31.857778 31.857778 0 0 0 0-44.942222L762.311111 136.533333a31.857778 31.857778 0 0 0-22.755555-9.102222zM881.777778 910.222222h-796.444445a28.444444 28.444444 0 0 0 0 56.888889h796.444445a28.444444 28.444444 0 0 0 0-56.888889z'
              fill='#ffffff'
              p-id='59849'
            ></path>
          </svg>
        }
        desc={'Options and content can be defined by oneself.'}
        onClick={() => props.onOptionTypeComponentClick(QuestionType.Matching)}
      />
    </div>
  )
}

export { OptionTypeComponent, OptionsTypeComponent }
