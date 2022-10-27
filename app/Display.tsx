type Props = {
  expression: string[];
  currentNumber: string;
};

export default function Display({ expression, currentNumber }: Props) {
  return (
    <div className="bg-gray-200 w-full min-h-[6rem] text-right px-4 flex flex-col justify-center rounded-lg whitespace-nowrap overflow-x-auto">
      <div className="text-2xl">{expression.join(" ")}</div>
      <div className="text-4xl font-bold">{currentNumber}</div>
    </div>
  );
}
