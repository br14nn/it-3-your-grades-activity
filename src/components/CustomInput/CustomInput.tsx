type TCustomInputProps = {
  className?: string;
  id?: string;
  name?: string;
  type: React.HTMLInputTypeAttribute;
  value?: string | number | readonly string[] | undefined;
};

export default function CustomInput({ className, id, name, type, value }: TCustomInputProps) {
  return <input className={`${className}`} id={id} name={name} type={type} value={value} />;
}
