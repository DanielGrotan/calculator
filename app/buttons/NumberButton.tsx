import { Dispatch, SetStateAction } from "react";

type Props = {
  value: string;
  expression: string[];
  setExpression: Dispatch<SetStateAction<string[]>>;
  currentNumber: string;
  setCurrentNumber: Dispatch<SetStateAction<string>>;
};

export default function NumberButton({
  value,
  expression,
  setExpression,
  currentNumber,
  setCurrentNumber,
}: Props) {
  const handleClick = () => {
    if (currentNumber === "0") {
      setCurrentNumber(value);
    } else {
      setCurrentNumber(currentNumber + value);
    }

    if (expression.length === 0) {
      setExpression([value]);
      return;
    }

    let char = expression.slice(-1)[0];
    const newExpression = expression.slice();

    if (char === "0") {
      newExpression[newExpression.length - 1] = value;
    } else if (char === "/" || char === "*" || char === "-" || char === "+") {
      newExpression.push(value);
    } else {
      char += value;
      newExpression[newExpression.length - 1] = char;
    }

    setExpression(newExpression);
  };

  return (
    <button onClick={handleClick} className="button">
      {value}
    </button>
  );
}
