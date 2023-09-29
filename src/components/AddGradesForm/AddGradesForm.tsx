import CustomButton from "../CustomButton/CustomButton";
import AddGradesFormInput from "./AddGradesFormInput";
import AddGradesFormRadio from "./AddGradesFormRadio";

type TAddGradesFormProps = {
  onSubmit: React.FormEventHandler;
  onChange: React.ChangeEventHandler;
  courseNumbValue: string;
  courseNameValue: string;
  courseUnitsValue: number;
};

export default function AddGradesForm({
  onSubmit,
  onChange,
  courseNumbValue,
  courseNameValue,
  courseUnitsValue,
}: TAddGradesFormProps) {
  return (
    <form
      className="flex h-fit flex-col gap-4 rounded-lg bg-gray-500 p-4"
      onSubmit={onSubmit}
    >
      <AddGradesFormInput
        label="Course No."
        id="courseNumb"
        type="text"
        value={courseNumbValue}
        onChange={onChange}
      />

      <AddGradesFormInput
        label="Course Name"
        id="courseName"
        type="text"
        value={courseNameValue}
        onChange={onChange}
      />

      <AddGradesFormInput
        label="Units"
        id="courseUnits"
        type="number"
        value={courseUnitsValue}
        onChange={onChange}
      />

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
