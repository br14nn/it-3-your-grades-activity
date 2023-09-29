import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import { BsSearch } from "react-icons/bs";

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
      className="w-[40%] leading-none 2xl:w-[45%]"
      id="searchCourse"
      name="searchCourse"
      type="text"
      placeholder="Search Course"
      value={value}
      onChange={onChange}
    />
  );
}
