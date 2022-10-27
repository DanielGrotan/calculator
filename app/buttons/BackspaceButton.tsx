import { Dispatch, SetStateAction } from "react";

type Props = {
  expression: string[];
  setExpression: Dispatch<SetStateAction<string[]>>;
  currentNumber: string;
  setCurrentNumber: Dispatch<SetStateAction<string>>;
};

export default function BackspaceButton({
  expression,
  setExpression,
  currentNumber,
  setCurrentNumber,
}: Props) {
  const handleClick = () => {
    setCurrentNumber(
      currentNumber.length === 1 ? "0" : currentNumber.slice(0, -1)
    );

    const lastChar = expression.slice(-1)[0];

    if (
      lastChar === "/" ||
      lastChar === "x" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === undefined
    )
      return;

    const newExpression = expression.slice();
    newExpression[newExpression.length - 1] =
      lastChar.length === 1 ? "0" : lastChar.slice(0, -1);

    setExpression(newExpression);
  };

  return (
    <button onClick={handleClick} className="button button-accent">
      ⌫
    </button>
  );
}
