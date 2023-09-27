import { useState } from "react";
import AddGradesForm from "./components/AddGradesForm/AddGradesForm";
import GradesTable from "./components/GradesTable/GradesTable";

type TGradesForm = {
  courseNumb: number;
  courseName: string;
  courseUnits: number;
  courseGrade: number;
};

type TGradesList = {
  courseNumb: string;
  courseName: string;
  courseUnits: number;
  courseGrade: number;
};

export default function App() {
  const [addGradesForm, setAddGradesForm] = useState<TGradesForm>({
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
      courseGrade: 3.5,
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
      <section className="flex flex-row gap-4 2xl:w-[1536px]">
        <AddGradesForm onChange={handleChange} />

        <GradesTable gradesList={gradesList} />
      </section>
    </main>
  );
}
