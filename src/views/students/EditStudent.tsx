import { useActionData, useLoaderData, Link, Form } from "react-router-dom"
import { Student } from "../../types"
import ErrorMessage from "../../components/shared/ErrorMessage"
import StudentForm from "../../components/students/StudentForm"

export default function EditStudent() {
    const student = useLoaderData() as Student
    const error = useActionData() as string

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Editar Producto</h2>
                <Link
                    to="/"
                    className='rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'
                >
                    Volver
                </Link>
            </div>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Form
                className="mt-10"  
                method='POST'
            >
            
                <StudentForm 
                    student={student}
                />

                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Guardar Cambios"
                />
            </Form>
        
        </>
    )
}
