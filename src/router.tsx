import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Students, {loader as studentLoader} from './views/students/Students';
import NewStudent, { action as newStudentAction }  from './views/students/newStudent';

export const router = createBrowserRouter([
    {
        path : '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Students />,
                loader: studentLoader
            },
            {
                path: 'students/new',
                element: <NewStudent />,
                action: newStudentAction
            }
        ]
    }
]);
