type TCustomInputProps = {
  className?: string;
  id?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: React.HTMLInputTypeAttribute;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
};

export default function CustomInput({
  className,
  id,
  name,
  type,
  onChange,
  value,
  placeholder,
}: TCustomInputProps) {
  return (
    <input
      className={`${className} default-input-style h-fit`}
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
}
