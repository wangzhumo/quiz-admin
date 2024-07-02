import MainLayout from '@/pages/main/main'
import { QuestionCommonOperate } from '@/pages/quizzes/create/components/editor/QuestionCommonOperate'
import CreateQuizzesPage from '@/pages/quizzes/create/create'
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path='/ComponentPreviews'>
        <ComponentPreviews />
      </ComponentPreview>
      <ComponentPreview path='/MainLayout'>
        <MainLayout />
      </ComponentPreview>
      <ComponentPreview path='/CreateQuizzesPage'>
        <CreateQuizzesPage />
      </ComponentPreview>
      <ComponentPreview path='/QuestionCommonOperate'>
        <QuestionCommonOperate />
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews
