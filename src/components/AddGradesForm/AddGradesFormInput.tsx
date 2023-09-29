import CustomInput from "../CustomInput/CustomInput";

type TAddGradesFormInputProps = {
  id?: string;
  label?: string;
  onChange?: React.ChangeEventHandler;
};

export default function AddGradesFormInput({
  id,
  label,
  onChange,
}: TAddGradesFormInputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-white" htmlFor={id}>
        {label}
      </label>
      <CustomInput id={id} name={id} type="text" onChange={onChange} />
    </div>
  );
}
