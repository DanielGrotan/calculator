import { Dispatch, SetStateAction } from "react";

type Props = {
  expression: string[];
  setExpression: Dispatch<SetStateAction<string[]>>;
  setCurrentNumber: Dispatch<SetStateAction<string>>;
};

export default function ClearEntryButton({
  expression,
  setExpression,
  setCurrentNumber,
}: Props) {
  const handleClick = () => {
    setCurrentNumber("0");

    for (let i = expression.length - 1; i >= 0; i--) {
      const char = expression[i];
      if (char === "/" || char === "x" || char === "-" || char === "+") {
        setExpression(expression.slice(0, i));
        return;
      }
    }
    setExpression([]);
  };

  return (
    <button onClick={handleClick} className="button button-accent">
      CE
    </button>
  );
}
