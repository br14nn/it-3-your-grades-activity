import CustomTd from "./CustomTd";

type TGradesTableProps = {
  gradesList: any[];
};

export default function GradesTable({ gradesList }: TGradesTableProps) {
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
      <tbody>
        {gradesList.map((val, idx) => (
          <tr key={`${val.courseNumb}-${idx}`}>
            <CustomTd>{val.courseNumb}</CustomTd>
            <CustomTd>{val.courseName}</CustomTd>
            <CustomTd>{val.courseUnits}</CustomTd>
            {parseFloat(val.courseGrade) === 4.0 && <CustomTd>A</CustomTd>}
            {parseFloat(val.courseGrade) === 3.5 && <CustomTd>B+</CustomTd>}
            {parseFloat(val.courseGrade) === 3.0 && <CustomTd>B</CustomTd>}
            {parseFloat(val.courseGrade) === 2.5 && <CustomTd>C+</CustomTd>}
            {parseFloat(val.courseGrade) === 2.0 && <CustomTd>C</CustomTd>}
            {parseFloat(val.courseGrade) === 1.0 && <CustomTd>D</CustomTd>}
            {parseFloat(val.courseGrade) === 0.0 && (
              <CustomTd className="text-red-600">F</CustomTd>
            )}
          </tr>
        ))}
      </tbody>
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
