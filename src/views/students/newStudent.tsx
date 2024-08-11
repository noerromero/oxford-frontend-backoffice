import { Link, Form, useActionData, ActionFunctionArgs, redirect  } from 'react-router-dom';
import ErrorMessage from '../../components/shared/ErrorMessage';
import { addStudent } from '../../services/students/StudentService';
import StudentForm from '../../components/students/StudentForm';

export async function action({request}: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData())
    console.log(data);
    let error = ''
    if(Object.values(data).includes('')) {
        error = 'Todos los campos son obligatorios'
    }
    if(error.length) {
        return error
    }
    await addStudent(data)
    
    return redirect('/')
}

export default function NewStudent() {
    const error = useActionData() as string

    return (
        <>
            <div className='flex justify-between'>
                <h2 className='text-4xl font-black text-slate-500'>Registrar Estudiante</h2>
                <Link
                    to="/"
                    className='rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'>
                    Volver
                </Link>
            </div>
            
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Form
                className="mt-10"  
                method='POST'
            >

                <StudentForm />

                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Registrar"
                />
            </Form>
        </>
    )
}