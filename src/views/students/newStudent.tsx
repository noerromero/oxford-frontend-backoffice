import {
  Link,
  Form,
  useActionData,
  ActionFunctionArgs,
  redirect,
} from "react-router-dom";
import GeneralErrorMessage from "../../components/shared/Error/GeneralErrorMessage";
import { addStudent } from "../../services/students/StudentService";
import StudentForm from "../../components/students/StudentForm";

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }
  if (error.length) {
    return error;
  }
  await addStudent(data);

  return redirect("/");
}

export default function NewStudent() {
  const error = useActionData() as string;

  return (
    <>
      <div className="flex justify-between px-8 py-6">
        <h3 className="text-xl font-black text-slate-500 uppercase">
          Formulario de estudiante
        </h3>
        <Link
          to="/oxford/students"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Volver
        </Link>
      </div>

      {error && <GeneralErrorMessage>{error}</GeneralErrorMessage>}

      <Form className="mx-auto max-w-lg" method="POST">
        <StudentForm />

        <input
          type="submit"
          className=" mb-8 mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar"
        />
      </Form>
    </>
  );
}
