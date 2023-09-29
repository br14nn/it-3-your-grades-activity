import { useState } from "react";
import AddGradesForm from "./components/AddGradesForm/AddGradesForm";
import GradesTable from "./components/GradesTable/GradesTable";
import { TGradesData } from "./types/TGradesData";
import CourseSearchForm from "./components/CourseSearchForm/CourseSearchForm";

export default function App() {
  const [gradesFormData, setGradesFormData] = useState<TGradesData>({
    courseNumb: "",
    courseName: "",
    courseUnits: 0,
    courseGrade: 0,
  });

  const [gradesList, setGradesList] = useState<TGradesData[] | []>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setGradesFormData((oldVal) => {
      return {
        ...oldVal,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setGradesList((oldVal) => {
      return [gradesFormData, ...oldVal];
    });
  };

  return (
    <main className="flex h-screen min-h-[500px] w-full flex-col items-center justify-center bg-black">
      <section className="flex flex-row items-start justify-center gap-8 2xl:w-[1536px]">
        <AddGradesForm onSubmit={handleSubmit} onChange={handleChange} />

        <div className="flex flex-col gap-4 2xl:w-[40%]">
          <CourseSearchForm />
          <GradesTable gradesList={gradesList} />
        </div>
      </section>
    </main>
  );
}
