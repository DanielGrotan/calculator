import { Dispatch, SetStateAction } from "react";

type Props = {
  expression: string[];
  setExpression: Dispatch<SetStateAction<string[]>>;
  currentNumber: string;
  setCurrentNumber: Dispatch<SetStateAction<string>>;
};

export default function CommaButton({
  expression,
  setExpression,
  currentNumber,
  setCurrentNumber,
}: Props) {
  const handleClick = () => {
    if (/\./.test(currentNumber)) return;

    const newNumber = currentNumber + ".";

    setCurrentNumber(newNumber);

    const lastChar = expression.slice(-1)[0];
    const newExpression = expression.slice();

    if (
      lastChar === "/" ||
      lastChar === "*" ||
      lastChar === "-" ||
      lastChar === "+" ||
      lastChar === undefined
    ) {
      newExpression.push(newNumber);
    } else {
      newExpression[newExpression.length - 1] = newNumber;
    }

    setExpression(newExpression);
  };

  return (
    <button onClick={handleClick} className="button">
      .
    </button>
  );
}
