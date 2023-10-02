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
  const [gradesList, setGradesList] = useState<TGradesData[] | []>([]);

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

    e.currentTarget.reset();
    setGradesFormData({
      courseNumb: "",
      courseName: "",
      courseUnits: 0,
      courseGrade: 0,
    });
  };

  return (
    <main className="flex h-full w-full min-w-[500px] overflow-hidden overflow-y-auto bg-black p-12 sm:p-24">
      <section className="flex h-fit w-full flex-col items-start justify-center gap-8 lg:flex-row ">
        <AddGradesForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          courseNumbValue={gradesFormData.courseNumb}
          courseNameValue={gradesFormData.courseName}
          courseUnitsValue={gradesFormData.courseUnits}
        />

        <div className="flex w-full max-w-[768px] flex-col gap-4">
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
