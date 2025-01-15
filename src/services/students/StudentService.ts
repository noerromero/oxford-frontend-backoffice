import { safeParse } from 'valibot';
import axios from 'axios';
import { DraftStudentSchema, Student, StudentsSchema, StudentSchema } from "../../types/students";

type StudentData = {
    [k: string]: FormDataEntryValue;
}

export async function addStudent(data : StudentData) {
    try {
        const studentServiceData = await getDataForm(data, false, undefined);
        const url = `${import.meta.env.VITE_API_URL}/api/students`;
        await axios.post(url, studentServiceData);
        
    } catch (error) {
        console.log(error)
    }
}

export async function getStudents() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/students`
        const { data } = await axios(url)
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
        const { data } = await axios(url);
        const result = safeParse(StudentSchema, data.data);
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
        const studentServiceData = await getDataForm(data, true, id);
        const url = `${import.meta.env.VITE_API_URL}/api/students`
        await axios.put(url, studentServiceData)
        
    } catch (error) {
        console.log(error)
    }
}

export async function getDataForm(data : StudentData, editMode: boolean, id?: Student['id']): Promise<object> {
    const result = safeParse(DraftStudentSchema, {
        dni: data.dni,
        name: data.name,
        surname: data.surname,
        secondSurname: data.secondSurname,
        email: data.email,
        phone: data.phone,
        birthday: data.birthday,
        cellphone: data.cellphone,
        academicInstitution: data.academicInstitution,
        workplace: data.workplace,
        englishCertificate: data.englishCertificate,
        comment: data.comment,
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
        const studentServiceData = {
            id: editMode ? id : crypto.randomUUID().toString(),
            dni: result.output.dni,
            name: result.output.name,
            surname: result.output.surname,
            secondSurname: result.output.secondSurname,
            email: result.output.email,
            phone: result.output.phone,
            birthday: result.output.birthday,
            cellphone: result.output.cellphone,
            academicInstitution: result.output.academicInstitution,
            workplace: result.output.workplace,
            englishCertificate: result.output.englishCertificate,
            comment: result.output.comment,
            address: {
                id: editMode ? data.addressId : crypto.randomUUID().toString(),
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
        return studentServiceData;
    }
    else {
        throw new Error('Invalid data')
    }
}