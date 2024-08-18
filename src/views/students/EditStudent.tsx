import { useActionData, useLoaderData, Link, Form, LoaderFunctionArgs, ActionFunctionArgs, redirect } from "react-router-dom"
import { Student } from "../../types"
import ErrorMessage from "../../components/shared/ErrorMessage"
import StudentForm from "../../components/students/StudentForm"
import { getStudentById, updateStudent } from "../../services/students/StudentService"

export async function loader({params} : LoaderFunctionArgs) {
    if(params.id !== undefined) {
        const student = await getStudentById(params.id)
        if(!student) {
            return redirect('/')
        }
        return student
    }
}

export async function action({request, params} : ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())
    //let error = ''
    // if(Object.values(data).includes('')) {
    //     error = 'Todos los campos son obligatorios'
    // }
    // if(error.length) {
    //     return error
    // }
    
    if(params.id !== undefined) {
        await updateStudent(data, params.id)
        return redirect('/')
    }
}

export default function EditStudent() {
    const student = useLoaderData() as Student
    const error = useActionData() as string

    console.log(student)
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
                className="mx-auto max-w-lg"  
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
