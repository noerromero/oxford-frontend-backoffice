import { Link, useLoaderData } from "react-router-dom";
import { getStudents } from "../../services/students/StudentService";
import { Student } from "../../types";
import StudentDetails from "../../components/students/StudentDetails";

export async function loader() {
  const students = await getStudents();
  return students;
}

export default function Students() {
  const data = useLoaderData() as Student[];

  return (
    <>
      <div className="flex justify-between px-8 py-8">
        <h2 className="text-4xl font-black text-slate-500">Estudiantes</h2>
        <Link
          to="new"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Agregar Estudiante
        </Link>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">DNI</th>
              <th className="p-2">Email</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => (
              <StudentDetails key={student.id} student={student} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
