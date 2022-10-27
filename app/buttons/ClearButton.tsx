import { Dispatch, SetStateAction } from "react";

type Props = {
  setExpression: Dispatch<SetStateAction<string[]>>;
  setCurrentNumber: Dispatch<SetStateAction<string>>;
};

export default function ClearButton({
  setExpression,
  setCurrentNumber,
}: Props) {
  const handleClick = () => {
    setExpression([]);
    setCurrentNumber("0");
  };

  return (
    <button onClick={handleClick} className="button button-accent">
      C
    </button>
  );
}
