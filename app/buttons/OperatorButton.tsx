import { Dispatch, SetStateAction } from "react";

type Props = {
  operator: string;
  expression: string[];
  setExpression: Dispatch<SetStateAction<string[]>>;
  setCurrentNumber: Dispatch<SetStateAction<string>>;
};

export default function OperatorButton({
  operator,
  expression,
  setExpression,
  setCurrentNumber,
}: Props) {
  const handleClick = () => {
    setCurrentNumber("0");

    if (expression.length === 0) {
      setExpression(["0", operator]);
      return;
    }

    const lastChar = expression.slice(-1)[0];

    if (
      lastChar === "/" ||
      lastChar === "*" ||
      lastChar === "-" ||
      lastChar === "+"
    ) {
      const newExpression = expression.slice(0, -1);
      newExpression.push(operator);
      setExpression(newExpression);
      return;
    }

    const newExpression = expression.slice();
    newExpression.push(operator);
    setExpression(newExpression);
  };

  return (
    <button onClick={handleClick} className="button button-accent">
      {operator}
    </button>
  );
}
