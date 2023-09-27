type TCustomInputProps = {
  className?: string;
  id?: string;
  type: React.HTMLInputTypeAttribute;
};

export default function CustomInput({
  className,
  id,
  type,
}: TCustomInputProps) {
  return <input className={`${className}`} id={id} type={type} />;
}
