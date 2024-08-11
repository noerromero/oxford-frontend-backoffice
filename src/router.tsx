import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Students from './views/students/Students';
import NewStudent, { action as newStudentAction }  from './views/students/newStudent';

export const router = createBrowserRouter([
    {
        path : '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Students />
            },
            {
                path: 'students/new',
                element: <NewStudent />,
                action: newStudentAction
            }
        ]
    }
]);
