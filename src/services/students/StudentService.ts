import { safeParse } from 'valibot';
import axios from 'axios';
import { DraftStudentSchema, StudentsSchema } from "../../types";

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
            studentEnglishCertification: data.englishCertification,
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
                englishCertification: result.output.studentEnglishCertification,
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