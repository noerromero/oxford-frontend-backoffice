import { Student } from "../../types"

type StudentFormProps = {
    student?: Student
}

export default function StudentForm({student} : StudentFormProps) {
  return (
    <>
        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="studentDni"
            >DNI:</label>
            <input 
                id="studentDni"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="DNI del estudiante"
                name="studentDni"
                defaultValue={student?.studentDni}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="studentName"
            >Nombre:</label>
            <input 
                id="studentName"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Nombre del estudiante"
                name="studentName"
                defaultValue={student?.studentName}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="studentSurname"
            >Apellido paterno:</label>
            <input 
                id="studentSurname"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="studentSurname"
                defaultValue={student?.studentSurname}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="studentSecondSurname"
            >Apellido materno:</label>
            <input 
                id="studentSecondSurname"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="studentSecondSurname"
                defaultValue={student?.studentSecondSurname}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="studentEmail"
            >Email:</label>
            <input 
                id="studentEmail"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="studentEmail"
                defaultValue={student?.studentEmail}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="studentPhone"
            >Telefono fijo:</label>
            <input 
                id="studentPhone"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="studentPhone"
                defaultValue={student?.studentPhone}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="studentBirthdate"
            >Fecha de nacimiento:</label>
            <input 
                id="studentBirthdate"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="studentBirthdate"
                defaultValue={student?.studentBirthdate}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="studentCellphone"
            >Celular:</label>
            <input 
                id="studentCellphone"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="studentCellphone"
                defaultValue={student?.studentCellphone}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="studentAcademicInstitution"
            >Institucion educativa:</label>
            <input 
                id="studentAcademicInstitution"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="studentAcademicInstitution"
                defaultValue={student?.studentAcademicInstitution}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="studentWorkplace"
            >Centro laboral:</label>
            <input 
                id="studentWorkplace"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="studentWorkplace"
                defaultValue={student?.studentWorkplace}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="studentEnglishCertification"
            >Certificacion de ingles:</label>
            <input 
                id="studentEnglishCertification"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="studentEnglishCertification"
                defaultValue={student?.studentEnglishCertification}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="studentComment"
            >Comentario:</label>
            <input 
                id="studentComment"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="studentComment"
                defaultValue={student?.studentComment}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="street"
            >Calle:</label>
            <input 
                id="street"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="street"
                defaultValue={student?.address?.street}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="neighborhood"
            >Sector:</label>
            <input 
                id="neighborhood"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="neighborhood"
                defaultValue={student?.address?.neighborhood}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="city"
            >Ciudad:</label>
            <input 
                id="city"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="city"
                defaultValue={student?.address?.city}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="state"
            >Provincia:</label>
            <input 
                id="state"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="state"
                defaultValue={student?.address?.state}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="reference"
            >Referencia:</label>
            <input 
                id="reference"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="reference"
                defaultValue={student?.address?.reference}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="legalRepresentativeName"
            >Nombre del representante legal:</label>
            <input 
                id="legalRepresentativeName"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="legalRepresentativeName"
                defaultValue={student?.legalRepresentative?.name}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="legalRepresentativeSurname"
            >Apellido del representante legal:</label>
            <input 
                id="legalRepresentativeSurname"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="legalRepresentativeSurname"
                defaultValue={student?.legalRepresentative?.surname}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="legalRepresentativeSecondSurname"
            >Apellido materno del representante legal:</label>
            <input 
                id="legalRepresentativeSecondSurname"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="legalRepresentativeSecondSurname"
                defaultValue={student?.legalRepresentative?.secondSurname}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="legalRepresentativePhone"
            >Telefono del representante legal:</label>
            <input 
                id="legalRepresentativePhone"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="legalRepresentativePhone"
                defaultValue={student?.legalRepresentative?.phone}
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="legalRepresentativeCellphone"
            >Celular del representante legal:</label>
            <input 
                id="legalRepresentativeCellphone"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Apellido del estudiante"
                name="legalRepresentativeCellphone"
                defaultValue={student?.legalRepresentative?.cellphone}
            />
        </div>
    
    </>
  )
}
