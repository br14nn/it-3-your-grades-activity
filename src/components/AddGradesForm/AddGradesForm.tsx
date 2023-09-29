import CustomButton from "../CustomButton/CustomButton";
import AddGradesFormInput from "./AddGradesFormInput";
import AddGradesFormRadio from "./AddGradesFormRadio";

type TAddGradesFormProps = {
  onChange: React.ChangeEventHandler;
};

export default function AddGradesForm({ onChange }: TAddGradesFormProps) {
  return (
    <form className="flex flex-col gap-4">
      <AddGradesFormInput
        label="Course No."
        id="courseNumb"
        onChange={onChange}
      />

      <AddGradesFormInput
        label="Course Name"
        id="courseName"
        onChange={onChange}
      />

      <AddGradesFormInput label="Units" id="courseUnits" onChange={onChange} />

      <div className="flex flex-col">
        <label className="text-white">Grade</label>

        <div className="grid grid-cols-2">
          <AddGradesFormRadio
            id="gradeA"
            name="courseGrade"
            value={4.0}
            label="A"
            onChange={onChange}
          />
          <AddGradesFormRadio
            id="gradeB+"
            name="courseGrade"
            value={3.5}
            label="B+"
            onChange={onChange}
          />
          <AddGradesFormRadio
            id="gradeB"
            name="courseGrade"
            value={3.0}
            label="B"
            onChange={onChange}
          />
          <AddGradesFormRadio
            id="gradeC+"
            name="courseGrade"
            value={2.5}
            label="C+"
            onChange={onChange}
          />
          <AddGradesFormRadio
            id="gradeC"
            name="courseGrade"
            value={2.0}
            label="C"
            onChange={onChange}
          />
          <AddGradesFormRadio
            id="gradeD"
            name="courseGrade"
            value={1.0}
            label="D"
            onChange={onChange}
          />
          <AddGradesFormRadio
            id="gradeF"
            name="courseGrade"
            value={0.0}
            label="F"
            onChange={onChange}
          />
        </div>
      </div>

      <CustomButton className="bg-yellow-400" type="submit">
        Add Grade
      </CustomButton>
    </form>
  );
}
