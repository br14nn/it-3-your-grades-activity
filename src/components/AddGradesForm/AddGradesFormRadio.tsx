type TGradesRadioInputProps = {
  id: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: number;
  label: string;
};

export default function GradesRadioInput({
  id,
  name,
  onChange,
  value,
  label,
}: TGradesRadioInputProps) {
  return (
    <div className="flex flex-row gap-2">
      <input
        type="radio"
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        required={true}
      />
      <label className="text-white" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
