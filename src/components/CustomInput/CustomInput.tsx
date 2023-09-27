type TCustomInputProps = {
  className?: string;
  id?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: React.HTMLInputTypeAttribute;
  value?: string | number | readonly string[] | undefined;
};

export default function CustomInput({
  className,
  id,
  name,
  type,
  onChange,
  value,
}: TCustomInputProps) {
  return (
    <input
      className={`${className}`}
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
}
