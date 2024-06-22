import { AiTwotoneMessage  } from "react-icons/ai"
import { Popover } from "antd";
export interface QuizAppBarProps {
  onClick: () => void
  open?: boolean
}

function QuizAppBar(props: QuizAppBarProps) {
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
    <div className='navbar bg-white h-20'>
      <div className='navbar-end flex-1 gap-10'>
        <div role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <AiTwotoneMessage size={30} />
            <span className="badge badge-sm indicator-item bg-red-500 border-0 text-white">8</span>
          </div>
        </div>
        <Popover content={avatarOptions}>
          <div className='flex space-x-3'>
            <div className='avatar'>
              <div className='w-12 rounded-full'>
                {/* biome-ignore lint/a11y/useAltText: <explanation> */}
                <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
              </div>
            </div>
            <div className='flex flex-col justify-center items-start content-center'>
              <div className='text-sm  focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white'>
                UserName
              </div>
              <div className='text-xs font-light	 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white'>
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
