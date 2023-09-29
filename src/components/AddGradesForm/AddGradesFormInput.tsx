import CustomInput from "../CustomInput/CustomInput";

type TAddGradesFormInputProps = {
  id?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number;
  label?: string;
  onChange?: React.ChangeEventHandler;
};

export default function AddGradesFormInput({
  id,
  type = "text",
  value,
  label,
  onChange,
}: TAddGradesFormInputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-white" htmlFor={id}>
        {label}
      </label>
      <CustomInput
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={true}
        min={1}
        max={5}
      />
    </div>
  );
}
