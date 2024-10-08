import { object, string, InferOutput, array } from 'valibot'

export const LegalRepresentativeSchema = object({
    name: string(),
    surname: string(),
    secondSurname: string(),
    phone: string(),
    cellphone: string(),
});

export const DraftStudentSchema = object({
    dni: string(),
    studentName: string(),
    studentSurname: string(),
    studentSecondSurname: string(),
    studentEmail: string(),
    studentPhone: string(),
    studentBirthday: string(),
    studentCellphone: string(),
    studentAcademicInstitution: string(),
    studentWorkplace: string(),
    studentEnglishCertificate: string(),
    studentComment: string(),
    street: string(),
    neighborhood: string(),
    city: string(),
    state: string(),
    reference: string(),
    legalRepresentativeName: string(),
    legalRepresentativeSurname: string(),
    legalRepresentativeSecondSurname: string(),
    legalRepresentativePhone: string(),
    legalRepresentativeCellphone: string(),
});

export const AddressSchema = object({
    id: string(),
    street: string(),
    neighborhood: string(),
    city: string(),
    state: string(),
    reference: string(),
});

export const StudentSchema = object({
    id: string(),
    dni: string(),
    name: string(),
    surname: string(),
    secondSurname: string(),
    completeName: string(),
    email: string(),
    phone: string(),
    birthday: string(),
    cellphone: string(),
    academicInstitution: string(),
    workplace: string(),
    englishCertificate: string(),
    comment: string(),
    address: AddressSchema,
    legalRepresentative: LegalRepresentativeSchema,
});


export const StudentsSchema = array(StudentSchema)
export type Student = InferOutput<typeof StudentSchema>
