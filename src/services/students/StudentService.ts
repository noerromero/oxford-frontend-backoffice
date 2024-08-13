import { safeParse } from 'valibot';
import axios from 'axios';
import { DraftStudentSchema, Student, StudentsSchema, StudentSchema } from "../../types";

type StudentData = {
    [k: string]: FormDataEntryValue;
}

export async function addStudent(data : StudentData) {
    try {
        console.log(data);
        const result = safeParse(DraftStudentSchema, {
            dni: data.dni,
            studentName: data.name,
            studentSurname: data.surname,
            studentSecondSurname: data.secondSurname,
            studentEmail: data.email,
            studentPhone: data.phone,
            studentBirthdate: data.birthdate,
            studentCellphone: data.cellphone,
            studentAcademicInstitution: data.academicInstitution,
            studentWorkplace: data.workplace,
            studentEnglishCertificate: data.englishCertificate,
            studentComment: data.comment,
            street: data.street,
            neighborhood: data.neighborhood,
            city: data.city,
            state: data.state,
            reference: data.reference,
            legalRepresentativeName: data.legalRepresentativeName,
            legalRepresentativeSurname: data.legalRepresentativeSurname,
            legalRepresentativeSecondSurname: data.legalRepresentativeSecondSurname,
            legalRepresentativePhone: data.legalRepresentativePhone,
            legalRepresentativeCellphone: data.legalRepresentativeCellphone,
        });
        console.log(result);
        if(result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/students`;
            const studentServiceData = {
                id: crypto.randomUUID().toString(),
                dni: result.output.dni,
                name: result.output.studentName,
                surname: result.output.studentSurname,
                secondSurname: result.output.studentSecondSurname,
                email: result.output.studentEmail,
                phone: result.output.studentPhone,
                birthdate: result.output.studentBirthdate,
                cellphone: result.output.studentCellphone,
                academicInstitution: result.output.studentAcademicInstitution,
                workplace: result.output.studentWorkplace,
                englishCertificate: result.output.studentEnglishCertificate,
                comment: result.output.studentComment,
                address: {
                    id: crypto.randomUUID().toString(),
                    street: result.output.street,
                    neighborhood: result.output.neighborhood,
                    city: result.output.city,
                    state: result.output.state,
                    reference: result.output.reference,
                },
                legalRepresentative: {
                    name: result.output.legalRepresentativeName,
                    surname: result.output.legalRepresentativeSurname,
                    secondSurname: result.output.legalRepresentativeSecondSurname,
                    phone: result.output.legalRepresentativePhone,
                    cellphone: result.output.legalRepresentativeCellphone,
                }
            };
            console.log(studentServiceData);
            await axios.post(url, studentServiceData);
        } else {
            throw new Error('Invalid data')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getStudents() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/students`
        const { data } = await axios(url)
        const result = safeParse(StudentsSchema, data.data)
        if(result.success) {
            return result.output
        } else {
            throw new Error('Hubo un error...')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getStudentById(id : Student['id']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/students/${id}`
        const { data } = await axios(url)
        const result = safeParse(StudentSchema, data.data)
        if(result.success) {
            return result.output
        } else {
            throw new Error('Hubo un error...')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function updateStudent(data : StudentData, id: Student['id']) {
    try {
        const result = safeParse(StudentSchema, {
            id: id,
            dni: data.dni,
                name: data.studentName,
                surname: data.studentSurname,
                secondSurname: data.studentSecondSurname,
                email: data.studentEmail,
                phone: data.studentPhone,
                birthdate: data.studentBirthdate,
                cellphone: data.studentCellphone,
                academicInstitution: data.studentAcademicInstitution,
                workplace: data.studentWorkplace,
                englishCertificate: data.studentEnglishCertificate,
                comment: data.studentComment,
                address: {
                    id: crypto.randomUUID().toString(),
                    street: data.street,
                    neighborhood: data.neighborhood,
                    city: data.city,
                    state: data.state,
                    reference: data.reference,
                },
                legalRepresentative: {
                    name: data.legalRepresentativeName,
                    surname: data.legalRepresentativeSurname,
                    secondSurname: data.legalRepresentativeSecondSurname,
                    phone: data.legalRepresentativePhone,
                    cellphone: data.legalRepresentativeCellphone,
                }
        })
       
        if(result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/students/${id}`
            await axios.put(url, result.output)
        }
    } catch (error) {
        console.log(error)
    }
}