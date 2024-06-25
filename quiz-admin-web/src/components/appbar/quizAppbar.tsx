import { AiTwotoneMessage  } from "react-icons/ai"
import { Popover } from "antd";
import SliderHeaderComponent from "@/components/slider/sliderHeader";
export interface QuizAppBarProps {
  onClick: () => void
  open?: boolean
}

function QuizAppBar(props: QuizAppBarProps) {
  const handleDrawerOpen = () => {}
  const avatarOptions = (
    <>
      <div className="p-3">
        <div className="block rounded-lg py-2 px-3 transition hover:bg-black/5">
          <p className="hover:font-semibold text-gray-800">Insights</p>
        </div>
        <div className="block rounded-lg py-2 px-3 transition hover:bg-black/5">
          <p className="hover:font-semibold text-gray-800">Automations</p>
        </div>
        <div className="block rounded-lg py-2 px-3 transition hover:bg-black/5">
          <p className="hover:font-semibold text-gray-800">Reports</p>
        </div>
      </div>
      <div className="p-3">
        <div className="block rounded-lg py-2 px-3 transition hover:bg-black/5">
          <p className="hover:font-semibold  text-gray-800">Documentation</p>
        </div>
      </div>
    </>
  );
  return (
    <div className='navbar h-20 w-full border-b-1 border-line fixed bg-black-main z-40'>
      <div className="navbar-start">
        <SliderHeaderComponent onClick={handleDrawerOpen} />
      </div>
      <div className='navbar-end w-full gap-10'>
        <div role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <AiTwotoneMessage size={30} />
            <span className="badge badge-sm indicator-item bg-red-500 border-0 text-white">8</span>
          </div>
        </div>
        <Popover content={avatarOptions}>
          <div className='flex space-x-3 text-white'>
            <div className='avatar'>
              <div className='w-12 rounded-full'>
                <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
              </div>
            </div>
            <div className='flex flex-col justify-center items-start content-center'>
              <div className='text-sm'>
                UserName
              </div>
              <div className='text-xs font-light'>
                Admin
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  )
}

export default QuizAppBar
