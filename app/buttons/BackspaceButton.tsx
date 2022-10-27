import { Dispatch, SetStateAction } from "react";

type Props = {
  currentNumber: string;
  setCurrentNumber: Dispatch<SetStateAction<string>>;
};

export default function BackspaceButton({
  currentNumber,
  setCurrentNumber,
}: Props) {
  const handleClick = () => {
    setCurrentNumber(
      currentNumber.length === 1 ? "0" : currentNumber.slice(0, -1)
    );
  };

  return (
    <button onClick={handleClick} className="button button-accent">
      ⌫
    </button>
  );
}
