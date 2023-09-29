import { TGradesData } from "../types/TGradesData";

export const gradesListFilterer = (
  gradesList: any[],
  searchCourseValue: string,
) => {
  const filteredList = gradesList.filter(
    (val: TGradesData) =>
      val.courseName.toLowerCase().includes(searchCourseValue.toLowerCase()) ||
      val.courseNumb
        .toLocaleLowerCase()
        .includes(searchCourseValue.toLowerCase()),
  );

  return filteredList;
};
