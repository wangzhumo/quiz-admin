import type { CalculateComponentProps } from "./types";

function CalcCustomComponent(props: CalculateComponentProps) {
  return (
    <div className={`${props.className} `}>
      <span className='text-lg'>Scripts</span>
      <div className='mockup-code bg-black-main border-1 border-black/50 mt-4'>

      </div>
    </div>
  )
}

export default CalcCustomComponent;