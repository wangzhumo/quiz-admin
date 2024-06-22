import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Outlet } from 'react-router-dom'
import QuizAppBar from '@/components/appbar/quizAppbar'
import SliderHeaderComponent from '@/components/slider/sliderHeader'
import SliderComponent from '@/components/slider/slider'

const MainLayout = () => {
  const handleDrawerOpen = () => {}
  return (
    <main className='flex bg-neutral-100 text-gray-800 w-screen'>
      <aside className='w-60  bg-white'>
        <SliderHeaderComponent onClick={handleDrawerOpen} />
        <SliderComponent />
      </aside>
      <div className='flex flex-grow flex-col'>
        <QuizAppBar onClick={handleDrawerOpen} />
        <Outlet />
      </div>
    </main>
  )
}

export default MainLayout
