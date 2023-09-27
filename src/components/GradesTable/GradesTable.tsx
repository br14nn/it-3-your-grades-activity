import CustomTd from "./CustomTd";

type TGradesTableProps = {
  gradesList: any[];
};

export default function GradesTable({ gradesList }: TGradesTableProps) {
  return (
    <table className="h-fit text-white">
      <thead>
        <tr className="bg-blue-900 font-bold">
          <CustomTd>Course No.</CustomTd>
          <CustomTd>Course Name</CustomTd>
          <CustomTd>Units</CustomTd>
          <CustomTd>Grade</CustomTd>
        </tr>
      </thead>
      <tbody>
        <tr>
          <CustomTd>IT001</CustomTd>
          <CustomTd>Computer Programming 1</CustomTd>
          <CustomTd>5</CustomTd>
          <CustomTd>A</CustomTd>
        </tr>
      </tbody>
    </table>
  );
}
