import { safeParse } from 'valibot';
import axios from 'axios';
import { DraftStudentSchema } from "../../types";

type StudentData = {
    [k: string]: FormDataEntryValue;
}

export async function addStudent(data : StudentData) {
    try {
        const result = safeParse(DraftStudentSchema, {
            studentDni: data.studentDni,
            studentName: data.studentName,
            studentSurname: data.studentSurname,
            studentSecondSurname: data.studentSecondSurname,
            studentEmail: data.studentEmail,
            studentPhone: data.studentPhone,
            studentBirthdate: data.studentBirthdate,
            studentCellphone: data.studentCellphone,
            studentAcademicInstitution: data.studentAcademicInstitution,
            studentWorkplace: data.studentWorkplace,
            studentEnglishCertification: data.studentEnglishCertification,
            studentComment: data.studentComment,
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
        if(result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/students`;
            const studentServiceData = {
                studentId: crypto.randomUUID().toString(),
                studentDni: result.output.studentDni,
                studentName: result.output.studentName,
                studentSurname: result.output.studentSurname,
                studentSecondSurname: result.output.studentSecondSurname,
                studentEmail: result.output.studentEmail,
                studentPhone: result.output.studentPhone,
                studentBirthdate: result.output.studentBirthdate,
                studentCellphone: result.output.studentCellphone,
                studentAcademicInstitution: result.output.studentAcademicInstitution,
                studentWorkplace: result.output.studentWorkplace,
                studentEnglishCertification: result.output.studentEnglishCertification,
                studentComment: result.output.studentComment,
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