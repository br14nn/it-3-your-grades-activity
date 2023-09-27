import AddGradesForm from "./components/AddGradesForm/AddGradesForm";

export default function App() {
  return (
    <main className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <section className="flex flex-row 2xl:w-[1536px]">
        <AddGradesForm />

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
