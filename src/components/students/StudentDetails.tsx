import { useNavigate } from "react-router-dom";
import { Student } from "../../types/students";

type StudentDetailsProps = {
  student: Student;
};

export default function StudentDetails({ student }: StudentDetailsProps) {
  const navigate = useNavigate();

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{student.completeName}</td>
      <td className="p-3 text-lg text-gray-800">{student.dni}</td>
      <td className="p-3 text-lg text-gray-800">{student.email}</td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => navigate(`${student.id}/edit`)}
            className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
          >
            Editar
          </button>
        </div>
      </td>
    </tr>
  );
}
