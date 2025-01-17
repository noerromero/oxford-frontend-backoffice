import { object, string, InferOutput, array } from 'valibot'
import * as v from "valibot";

export const LegalRepresentativeSchema = object({
    name: string(),
    surname: string(),
    secondSurname: string(),
    phone: string(),
    cellphone: string(),
});

export const DraftStudentSchema = v.object({
    dni: v.pipe(
        v.string('DNI inválido'),
        v.nonEmpty("Debe ingresar un DNI")
    ),
    name: v.pipe(
        v.string('Nombre inválido'),
        v.nonEmpty("Debe ingresar un nombre")
    ),
    surname: v.pipe(
        v.string('Apellido inválido'),
        v.nonEmpty("Debe ingresar un apellido")
    ),
    secondSurname: v.string('Segundo apellido inválido'),
    email: v.optional(
        v.pipe(
            v.string('Email inválido'),
            v.custom((value) => {
                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return false;
                }
                return true;
            }, "Email no contiene el formato correcto")
        )
    ),
    phone: v.string('Teléfono inválido'),
    birthday: v.pipe(
        v.string('Fecha de nacimiento inválida'),
        v.nonEmpty("Debe ingresar una fecha de nacimiento")
    ),
    cellphone: v.string('Celular inválido'),
    academicInstitution: v.string('Institución académica inválida'),
    workplace: v.string('Lugar de trabajo inválido'),
    englishCertificate: v.string('Certificado de inglés inválido'),
    comment: v.string('Comentario inválido'),
    street: v.pipe(
        v.string('Calle inválida'),
        v.nonEmpty("Debe ingresar una calle")
    ),
    neighborhood: v.string('Colonia inválida'),
    city: v.pipe(
        v.string('Ciudad inválida'),
        v.nonEmpty("Debe ingresar una ciudad")
    ),
    state: v.pipe(
        v.string('Estado inválido'),
        v.nonEmpty("Debe ingresar una provincia")
    ),
    reference: v.string('Referencia inválida'),
    legalRepresentativeName: v.string('Nombre del representante legal inválido'),
    legalRepresentativeSurname: v.string('Apellido del representante legal inválido'),
    legalRepresentativeSecondSurname: v.string('Segundo apellido del representante legal inválido'),
    legalRepresentativePhone: v.string('Teléfono del representante legal inválido'),
    legalRepresentativeCellphone: v.string('Celular del representante legal inválido'),
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
