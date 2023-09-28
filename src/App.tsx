import { useState } from "react";
import AddGradesForm from "./components/AddGradesForm/AddGradesForm";
import GradesTable from "./components/GradesTable/GradesTable";
import { TAddGradesForm } from "./types/TAddGradesForm";
import { TGradesList } from "./types/TGradesList";
import CustomInput from "./components/CustomInput/CustomInput";

export default function App() {
  const [addGradesForm, setAddGradesForm] = useState<TAddGradesForm>({
    courseNumb: 0,
    courseName: "",
    courseUnits: 0,
    courseGrade: 0,
  });

  const [gradesList, setGradesList] = useState<TGradesList[]>([
    {
      courseNumb: "IT001",
      courseName: "IT Elective 1",
      courseUnits: 3,
      courseGrade: 4.0,
    },
    {
      courseNumb: "GE001",
      courseName: "Purposive Communication",
      courseUnits: 2,
      courseGrade: 3.0,
    },
    {
      courseNumb: "IT002",
      courseName: "IT Elective 3",
      courseUnits: 3,
      courseGrade: 0,
    },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setAddGradesForm((oldVal) => {
      return {
        ...oldVal,
        [name]: value,
      };
    });
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-black">
      <section className="flex flex-row items-start justify-center gap-4 2xl:w-[1536px]">
        <AddGradesForm onChange={handleChange} />

        <div className="flex flex-col gap-4">
          <CustomInput
            className="w-1/2"
            id="searchCourse"
            name="searchCourse"
            type="text"
            placeholder="Search Course"
          />
          <GradesTable gradesList={gradesList} />
        </div>
      </section>
    </main>
  );
}
