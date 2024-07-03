import { Rate } from "antd";

export enum RatingType {
  Default = 1,
  Num = 2
}

export interface RatingComponentProps {
  count: number
  type: RatingType
  content?: string[]
}

function RatingComponent(props: RatingComponentProps) {
  const ratingElement = () => {
    if (props.type === RatingType.Num) {
      return (
        <Rate
          rootClassName='w-full flex justify-between'
          allowClear
          count={props.count}
          defaultValue={0}
          disabled
          character={({ index = 0 }) => index + 1}
        />
      )
    } else {
      return (
        <Rate
          rootClassName='w-full flex justify-between'
          allowClear
          defaultValue={0}
          disabled
          count={props.count}
        />
      )
    }
  }
  return (
    <div className='flex flex-col'>
      <div className='flex'>
        {props.content?.map((item, index) => (
          <div
            className={`flex-1 flex   ${index === 0 ? 'justify-start' : index === props.count - 1 ? 'justify-end' : 'justify-center'}`}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <hr className="my-5 h-[1px] border-t-0 bg-white/10" />
      {ratingElement()}
    </div>
  )
}

export default RatingComponent
