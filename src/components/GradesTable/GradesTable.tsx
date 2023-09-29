import CustomTd from "./CustomTd";
import { gradesListFilterer } from "../../utils/gradesListFilterer";
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
    const filteredList = gradesListFilterer(gradesList, searchCourseValue).map(
      (val, idx) => {
        const grade = parseFloat(val.courseGrade);

        return (
          <tr key={`${val.courseNumb}-${idx}`}>
            <CustomTd>{val.courseNumb}</CustomTd>
            <CustomTd>{val.courseName}</CustomTd>
            <CustomTd>{val.courseUnits}</CustomTd>
            {grade === 4.0 ? (
              <CustomTd className="font-bold">A</CustomTd>
            ) : grade === 3.5 ? (
              <CustomTd className="font-bold">B+</CustomTd>
            ) : grade === 3.0 ? (
              <CustomTd className="font-bold">B</CustomTd>
            ) : grade === 2.5 ? (
              <CustomTd className="font-bold">C+</CustomTd>
            ) : grade === 2.0 ? (
              <CustomTd className="font-bold">C</CustomTd>
            ) : grade === 1.0 ? (
              <CustomTd className="font-bold">D</CustomTd>
            ) : (
              grade === 0.0 && (
                <CustomTd className="font-bold text-red-600">F</CustomTd>
              )
            )}
          </tr>
        );
      },
    );

    return filteredList;
  };

  const qpiCalculation = () => {
    const gradeSum = gradesListFilterer(gradesList, searchCourseValue).reduce(
      (acc: number, filteredData: TGradesData) => {
        return (
          parseFloat(filteredData.courseGrade.toString()) *
            parseFloat(filteredData.courseUnits.toString()) +
          acc
        );
      },
      0,
    );

    const totalUnits = gradesListFilterer(gradesList, searchCourseValue).reduce(
      (acc: number, fiteredData: TGradesData) => {
        return parseFloat(fiteredData.courseUnits.toString()) + acc;
      },
      0,
    );

    return (gradeSum / totalUnits).toFixed(2);
  };

  return (
    <table className="h-fit w-full text-white">
      <thead>
        <tr className="bg-blue-900 font-bold">
          <CustomTd className="w-[20%] py-4">Course No.</CustomTd>
          <CustomTd className="w-[50%] py-4">Course Name</CustomTd>
          <CustomTd className="w-[15%] py-4">Units</CustomTd>
          <CustomTd className="w-[15%] py-4">Grade</CustomTd>
        </tr>
      </thead>
      <tbody>{gradeListRenderer()}</tbody>
      <tfoot>
        <tr className="bg-blue-950">
          <td
            className="border border-white px-2 py-2 text-end font-bold"
            colSpan={3}
          >
            Total QPI
          </td>
          <td className="border py-2 text-center font-bold">
            {qpiCalculation() !== "NaN" && qpiCalculation()}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
