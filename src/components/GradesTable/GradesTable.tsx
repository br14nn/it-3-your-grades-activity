import CustomTd from "./CustomTd";
import { TGradesData } from "../../types/TGradesData";

type TGradesTableProps = {
  gradesList: any[];
  searchCourseValue: string;
};

export default function GradesTable({
  gradesList,
  searchCourseValue,
}: TGradesTableProps) {
  const gradeListRenderer = () => {
    const filteredValue = gradesList
      .filter(
        (val: TGradesData) =>
          val.courseName
            .toLowerCase()
            .includes(searchCourseValue.toLowerCase()) ||
          val.courseNumb
            .toLocaleLowerCase()
            .includes(searchCourseValue.toLowerCase()),
      )
      .map((val, idx) => {
        const grade = parseFloat(val.courseGrade);

        return (
          <tr key={`${val.courseNumb}-${idx}`}>
            <CustomTd>{val.courseNumb}</CustomTd>
            <CustomTd>{val.courseName}</CustomTd>
            <CustomTd>{val.courseUnits}</CustomTd>
            {grade === 4.0 ? (
              <CustomTd>A</CustomTd>
            ) : grade === 3.5 ? (
              <CustomTd>B+</CustomTd>
            ) : grade === 3.0 ? (
              <CustomTd>B</CustomTd>
            ) : grade === 2.5 ? (
              <CustomTd>C+</CustomTd>
            ) : grade === 2.0 ? (
              <CustomTd>C</CustomTd>
            ) : grade === 1.0 ? (
              <CustomTd>D</CustomTd>
            ) : (
              grade === 0.0 && <CustomTd className="text-red-600">F</CustomTd>
            )}
          </tr>
        );
      });

    return filteredValue;
  };

  return (
    <table className="h-fit text-white">
      <thead>
        <tr className="bg-blue-900 font-bold">
          <CustomTd className="min-w-[150px]">Course No.</CustomTd>
          <CustomTd className="min-w-[300px]">Course Name</CustomTd>
          <CustomTd className="min-w-[50px]">Units</CustomTd>
          <CustomTd className="min-w-[50px]">Grade</CustomTd>
        </tr>
      </thead>
      <tbody>{gradeListRenderer()}</tbody>
      <tfoot>
        <tr className="bg-blue-950">
          <td
            className="border border-white px-2 text-end font-bold"
            colSpan={3}
          >
            Total QPI
          </td>
          <td className="border text-center">0</td>
        </tr>
      </tfoot>
    </table>
  );
}
