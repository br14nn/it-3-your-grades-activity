import CustomInput from "./components/CustomInput/CustomInput";

export default function App() {
  return (
    <main className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <section className="flex flex-row">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-white" htmlFor="courseNumb">
              Course No.
            </label>
            <CustomInput id="courseNumb" type="number" />
          </div>

          <div className="flex flex-col">
            <label className="text-white" htmlFor="courseName">
              Course Name
            </label>
            <CustomInput id="courseName" type="text" />
          </div>

          <div className="flex flex-col">
            <label className="text-white" htmlFor="units">
              Units
            </label>
            <CustomInput id="units" type="number" />
          </div>
        </form>

        <table className="text-white">
          <thead>
            <tr>
              <td>Course No.</td>
              <td>Course Name</td>
              <td>Units</td>
              <td>Grade</td>
            </tr>
          </thead>
        </table>
      </section>
    </main>
  );
}
