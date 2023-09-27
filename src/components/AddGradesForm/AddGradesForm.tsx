import CustomInput from "../CustomInput/CustomInput";
import GradesRadioInput from "./GradesRadioInput";
import { useState } from "react";

type TGradesForm = {
  courseNumb: number;
  courseName: string;
  courseUnits: number;
  courseGrade: number;
};

export default function AddGradesForm() {
  const [addGradesForm, setAddGradesForm] = useState<TGradesForm>({
    courseNumb: 0,
    courseName: "",
    courseUnits: 0,
    courseGrade: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setAddGradesForm((oldVal) => {
      return {
        ...oldVal,
        [name]: value,
      };
    });

    console.log(addGradesForm);
  };

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="text-white" htmlFor="courseNumb">
          Course No.
        </label>
        <CustomInput id="courseNumb" name="courseNumb" type="number" onChange={handleChange} />
      </div>

      <div className="flex flex-col">
        <label className="text-white" htmlFor="courseName">
          Course Name
        </label>
        <CustomInput id="courseName" name="courseName" type="text" onChange={handleChange} />
      </div>

      <div className="flex flex-col">
        <label className="text-white" htmlFor="units">
          Units
        </label>
        <CustomInput id="units" name="courseUnits" type="number" onChange={handleChange} />
      </div>

      <div className="flex flex-col">
        <label className="text-white">Grade</label>

        <div className="grid grid-cols-2">
          <GradesRadioInput
            id="gradeA"
            name="courseGrade"
            value={4.0}
            label="A"
            onChange={handleChange}
          />
          <GradesRadioInput
            id="gradeB+"
            name="courseGrade"
            value={3.5}
            label="B+"
            onChange={handleChange}
          />
          <GradesRadioInput
            id="gradeB"
            name="courseGrade"
            value={3.0}
            label="B"
            onChange={handleChange}
          />
          <GradesRadioInput
            id="gradeC+"
            name="courseGrade"
            value={2.5}
            label="C+"
            onChange={handleChange}
          />
          <GradesRadioInput
            id="gradeC"
            name="courseGrade"
            value={2.0}
            label="C"
            onChange={handleChange}
          />
          <GradesRadioInput
            id="gradeD"
            name="courseGrade"
            value={1.0}
            label="D"
            onChange={handleChange}
          />
          <GradesRadioInput
            id="gradeF"
            name="courseGrade"
            value={0.0}
            label="F"
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
}
