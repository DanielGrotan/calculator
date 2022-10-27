import * as math from "mathjs";
import { Dispatch, SetStateAction } from "react";

type Props = {
  expression: string[];
  setExpression: Dispatch<SetStateAction<string[]>>;
  setCurrentNumber: Dispatch<SetStateAction<string>>;
};

export default function EvaluateButton({
  expression,
  setExpression,
  setCurrentNumber,
}: Props) {
  const handleClick = () => {
    let expression_string = expression.join("");

    const lastChar = expression.slice(-1)[0];

    if (
      lastChar === "/" ||
      lastChar === "*" ||
      lastChar === "-" ||
      lastChar === "+"
    ) {
      expression_string += "0";
    }

    const result = math.evaluate(expression_string).toString();

    setExpression(result === undefined ? ["0"] : [result]);
    setCurrentNumber(result === undefined ? "0" : result);
  };

  return (
    <button
      onClick={handleClick}
      className="button bg-blue-700 hover:bg-blue-800">
      =
    </button>
  );
}
