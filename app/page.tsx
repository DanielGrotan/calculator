"use client";

import { useState } from "react";
import BackspaceButton from "./buttons/BackspaceButton";
import ClearButton from "./buttons/ClearButton";
import ClearEntryButton from "./buttons/ClearEntryButton";
import CommaButton from "./buttons/CommaButton";
import EvaluateButton from "./buttons/EvaluateButton";
import NegateButton from "./buttons/NegateButton";
import NumberButton from "./buttons/NumberButton";
import OperatorButton from "./buttons/OperatorButton";
import Display from "./Display";

type Props = {};

export default function Home({}: Props) {
  const [expression, setExpression] = useState<string[]>([]);
  const [currentNumber, setCurrentNumber] = useState("0");

  return (
    <div className="h-screen flex flex-col justify-center mx-auto max-w-screen-lg gap-4 p-8">
      <Display expression={expression} currentNumber={currentNumber} />
      <div className="grid grid-cols-4 gap-2">
        <ClearEntryButton
          expression={expression}
          setExpression={setExpression}
          setCurrentNumber={setCurrentNumber}
        />
        <ClearButton
          setExpression={setExpression}
          setCurrentNumber={setCurrentNumber}
        />
        <BackspaceButton
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <OperatorButton
          operator="/"
          expression={expression}
          setExpression={setExpression}
          setCurrentNumber={setCurrentNumber}
        />
        <NumberButton
          value="7"
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <NumberButton
          value="8"
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <NumberButton
          value="9"
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <OperatorButton
          operator="*"
          expression={expression}
          setExpression={setExpression}
          setCurrentNumber={setCurrentNumber}
        />
        <NumberButton
          value="4"
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <NumberButton
          value="5"
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <NumberButton
          value="6"
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <OperatorButton
          operator="-"
          expression={expression}
          setExpression={setExpression}
          setCurrentNumber={setCurrentNumber}
        />
        <NumberButton
          value="1"
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <NumberButton
          value="2"
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <NumberButton
          value="3"
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <OperatorButton
          operator="+"
          expression={expression}
          setExpression={setExpression}
          setCurrentNumber={setCurrentNumber}
        />
        <NegateButton
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <NumberButton
          value="0"
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <CommaButton
          expression={expression}
          setExpression={setExpression}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
        <EvaluateButton
          expression={expression}
          setExpression={setExpression}
          setCurrentNumber={setCurrentNumber}
        />
      </div>
    </div>
  );
}
