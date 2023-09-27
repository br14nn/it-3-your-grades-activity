import { useState } from "react";
import AddGradesForm from "./components/AddGradesForm/AddGradesForm";
import GradesTable from "./components/GradesTable/GradesTable";

type TGradesList = {
  courseNumb: string;
  courseName: string;
  courseUnits: number;
  courseGrade: number;
};

export default function App() {
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
      courseGrade: 3.5,
    },
  ]);
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-black">
      <section className="flex flex-row gap-4 2xl:w-[1536px]">
        <AddGradesForm />

        <GradesTable gradesList={gradesList} />
      </section>
    </main>
  );
}
