import CustomInput from "../CustomInput/CustomInput";

type TGradesRadioInputProps = {
  id: string;
  name: string;
  value: number;
  label: string;
};

export default function GradesRadioInput({ id, name, value, label }: TGradesRadioInputProps) {
  return (
    <div className="flex flex-row gap-2">
      <CustomInput type="radio" name={name} id={id} value={value} />
      <label className="text-white" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
