type NumberDataProps = {
  // key: string;
  number: string;
  label: string;
};

export const NumberData = ({ number, label }: NumberDataProps) => {
  return (
    <div
      // key={key}
      className="w-full max-w-[160px] pr-1 flex flex-col items-start justify-start gap-2 border-r border-border last:border-none"
    >
      <span className="font-[500] text-[44px] text-dark">{number}</span>
      <span className="">{label}</span>
    </div>
  );
};
