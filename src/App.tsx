import { useState } from "react";
import { TGradesData } from "./types/TGradesData";
import AddGradesForm from "./components/AddGradesForm/AddGradesForm";
import GradesTable from "./components/GradesTable/GradesTable";
import CourseSearchForm from "./components/CourseSearchForm/CourseSearchForm";

export default function App() {
  const [searchCourseVal, setSearchCourseVal] = useState<string>("");
  const [gradesFormData, setGradesFormData] = useState<TGradesData>({
    courseNumb: "",
    courseName: "",
    courseUnits: 0,
    courseGrade: 0,
  });
  const [gradesList, setGradesList] = useState<TGradesData[] | []>([
    {
      courseNumb: "IT001",
      courseName: "Computer Programming 1",
      courseUnits: 5,
      courseGrade: 3.0,
    },
    {
      courseNumb: "CS001",
      courseName: "Introduction to Computing",
      courseUnits: 5,
      courseGrade: 3.5,
    },
    {
      courseNumb: "GE001",
      courseName: "Philosophy",
      courseUnits: 3,
      courseGrade: 2,
    },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (
      name === "courseName" ||
      name === "courseNumb" ||
      name === "courseUnits" ||
      name === "courseGrade"
    ) {
      setGradesFormData((oldVal) => {
        return {
          ...oldVal,
          [name]: value,
        };
      });
    }

    if (name === "searchCourse") {
      setSearchCourseVal(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setGradesList((oldVal) => {
      return [gradesFormData, ...oldVal];
    });

    setGradesFormData({
      courseNumb: "",
      courseName: "",
      courseUnits: 0,
      courseGrade: 0,
    });
  };

  return (
    <main className="flex h-screen min-h-[500px] w-full flex-col items-center justify-center bg-black">
      <section className="flex flex-row items-start justify-center gap-8 2xl:w-[1536px]">
        <AddGradesForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          courseNumbValue={gradesFormData.courseNumb}
          courseNameValue={gradesFormData.courseName}
          courseUnitsValue={gradesFormData.courseUnits}
        />

        <div className="flex flex-col gap-4 2xl:w-[40%]">
          <CourseSearchForm value={searchCourseVal} onChange={handleChange} />
          <GradesTable
            gradesList={gradesList}
            searchCourseValue={searchCourseVal}
          />
        </div>
      </section>
    </main>
  );
}
