type TCustomTdProps = {
  className?: string;
  children: React.ReactNode;
};

export default function CustomTd({ className, children }: TCustomTdProps) {
  return <td className={`${className} border px-2`}>{children}</td>;
}
