import CustomInput from "../CustomInput/CustomInput";
import GradesRadioInput from "./GradesRadioInput";

type TAddGradesFormProps = {
  onChange: React.ChangeEventHandler;
};

export default function AddGradesForm({ onChange }: TAddGradesFormProps) {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="text-white" htmlFor="courseNumb">
          Course No.
        </label>
        <CustomInput
          className="px-2 leading-none"
          id="courseNumb"
          name="courseNumb"
          type="text"
          onChange={onChange}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-white" htmlFor="courseName">
          Course Name
        </label>
        <CustomInput
          className="px-2 leading-none"
          id="courseName"
          name="courseName"
          type="text"
          onChange={onChange}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-white" htmlFor="units">
          Units
        </label>
        <CustomInput
          className="px-2 leading-none"
          id="units"
          name="courseUnits"
          type="number"
          onChange={onChange}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-white">Grade</label>

        <div className="grid grid-cols-2">
          <GradesRadioInput
            id="gradeA"
            name="courseGrade"
            value={4.0}
            label="A"
            onChange={onChange}
          />
          <GradesRadioInput
            id="gradeB+"
            name="courseGrade"
            value={3.5}
            label="B+"
            onChange={onChange}
          />
          <GradesRadioInput
            id="gradeB"
            name="courseGrade"
            value={3.0}
            label="B"
            onChange={onChange}
          />
          <GradesRadioInput
            id="gradeC+"
            name="courseGrade"
            value={2.5}
            label="C+"
            onChange={onChange}
          />
          <GradesRadioInput
            id="gradeC"
            name="courseGrade"
            value={2.0}
            label="C"
            onChange={onChange}
          />
          <GradesRadioInput
            id="gradeD"
            name="courseGrade"
            value={1.0}
            label="D"
            onChange={onChange}
          />
          <GradesRadioInput
            id="gradeF"
            name="courseGrade"
            value={0.0}
            label="F"
            onChange={onChange}
          />
        </div>
      </div>

      <button className="rounded bg-green-800 text-white" type="submit">
        Submit
      </button>
    </form>
  );
}
