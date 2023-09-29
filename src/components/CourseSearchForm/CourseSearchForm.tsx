import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import { BsSearch } from "react-icons/bs";

type TCourseSearchFormProps = {
  onSubmit?: React.FormEventHandler;
};

export default function CourseSearchForm({ onSubmit }: TCourseSearchFormProps) {
  return (
    <form className="flex flex-row gap-4" onSubmit={onSubmit}>
      <CustomInput
        className="w-[35%] leading-none 2xl:w-[40%]"
        id="searchCourse"
        name="searchCourse"
        type="text"
        placeholder="Search Course"
      />
      <CustomButton
        className="flex flex-row items-center justify-center gap-2"
        type="submit"
      >
        Search
        <BsSearch />
      </CustomButton>
    </form>
  );
}
