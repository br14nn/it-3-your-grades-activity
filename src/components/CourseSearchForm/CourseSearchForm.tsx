import CustomInput from "../CustomInput/CustomInput";

type TCourseSearchFormProps = {
  value?: string;
  onChange?: React.ChangeEventHandler;
};

export default function CourseSearchForm({
  value,
  onChange,
}: TCourseSearchFormProps) {
  return (
    <CustomInput
      className="w-[50%] leading-none"
      id="searchCourse"
      name="searchCourse"
      type="text"
      placeholder="Search Course"
      value={value}
      onChange={onChange}
    />
  );
}
