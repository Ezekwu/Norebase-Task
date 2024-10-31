import UiButton from "./UiButton";
import UiIcon from "./UiIcon";

interface Props {
  isNextVisible: boolean;
  isPrevVisible: boolean;
  increaseStartIndex: () => void;
  decreaseStartIndex: () => void;
}

export default function UiPaginator({ isNextVisible, isPrevVisible, decreaseStartIndex, increaseStartIndex}:Props) {
  return (
    <section className="flex justify-between">
      <div>
        {isPrevVisible && <UiButton onClick={decreaseStartIndex}><UiIcon icon="ArrowLeft" size="20"/>Previous</UiButton>}
      </div>
      <div>
        {isNextVisible && <UiButton onClick={increaseStartIndex}>Next<UiIcon icon="ArrowRight" size="20"/></UiButton>}
      </div>
    </section>
  )
}