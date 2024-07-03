import type { OptionCommonProps } from "./types";
import { RatingViewComponent } from "@/pages/quizzes/create/components/viewer/OptionsViewComponent";

const RatingComponent = (props: OptionCommonProps) => {
 return (
  <div>
    <RatingViewComponent  question={props.question} className={''}></RatingViewComponent>
  </div>
 );
};

export default RatingComponent;