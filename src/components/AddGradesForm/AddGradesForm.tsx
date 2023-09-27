import CustomInput from "../CustomInput/CustomInput";
import GradesRadioInput from "./GradesRadioInput";
import { useState } from "react";

type TRecordGradesForm = {
  courseNumb: number;
  courseName: string;
  courseUnits: number;
  courseGrade: number;
};

export default function AddGradesForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="text-white" htmlFor="courseNumb">
          Course No.
        </label>
        <CustomInput id="courseNumb" name="courseNumb" type="number" />
      </div>

      <div className="flex flex-col">
        <label className="text-white" htmlFor="courseName">
          Course Name
        </label>
        <CustomInput id="courseName" name="courseName" type="text" />
      </div>

      <div className="flex flex-col">
        <label className="text-white" htmlFor="units">
          Units
        </label>
        <CustomInput id="units" name="courseUnits" type="number" />
      </div>

      <div className="flex flex-col">
        <label className="text-white">Grade</label>

        <div className="grid grid-cols-2">
          <GradesRadioInput id="gradeA" name="courseGrade" value={4.0} label="A" />
          <GradesRadioInput id="gradeB+" name="courseGrade" value={3.5} label="B+" />
          <GradesRadioInput id="gradeB" name="courseGrade" value={3.0} label="B" />
          <GradesRadioInput id="gradeC+" name="courseGrade" value={2.5} label="C+" />
          <GradesRadioInput id="gradeC" name="courseGrade" value={2.0} label="C" />
          <GradesRadioInput id="gradeD" name="courseGrade" value={1.0} label="D" />
          <GradesRadioInput id="gradeF" name="courseGrade" value={0.0} label="F" />
        </div>
      </div>
    </form>
  );
}
