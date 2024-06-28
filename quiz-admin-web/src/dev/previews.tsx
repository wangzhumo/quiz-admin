import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from './palette'
import MainLayout from "@/pages/main/main";
import CreateQuizzesPage from "@/pages/quizzes/create/create";

const ComponentPreviews = () => {
  return <Previews palette={<PaletteTree />}>
    <ComponentPreview path="/ComponentPreviews">
      <ComponentPreviews />
    </ComponentPreview>
    <ComponentPreview path="/MainLayout">
      <MainLayout />
    </ComponentPreview>
    <ComponentPreview path="/CreateQuizzesPage">
      <CreateQuizzesPage />
    </ComponentPreview>
  </Previews>
}

export default ComponentPreviews
