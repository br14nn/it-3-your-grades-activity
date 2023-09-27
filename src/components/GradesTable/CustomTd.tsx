type TCustomTdProps = {
  children: React.ReactNode;
};

export default function CustomTd({ children }: TCustomTdProps) {
  return <td className="border px-2">{children}</td>;
}
