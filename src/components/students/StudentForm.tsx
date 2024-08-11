import { Student } from "../../types";

type StudentFormProps = {
  student?: Student;
};

export default function StudentForm({ student }: StudentFormProps) {
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="studentDni"
          >
            DNI:
          </label>
          <input
            id="studentDni"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="44987676"
            name="studentDni"
            defaultValue={student?.dni}
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="studentBirthdate"
          >
            Fecha de nacimiento:
          </label>
          <input
            id="studentBirthdate"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="07/12/1990"
            name="studentBirthdate"
            defaultValue={student?.birthdate}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="studentName"
        >
          Nombre:
        </label>
        <input
          id="studentName"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Juan Esteban"
          name="studentName"
          defaultValue={student?.name}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="studentSurname"
          >
            Apellido paterno:
          </label>
          <input
            id="studentSurname"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Gomez"
            name="studentSurname"
            defaultValue={student?.surname}
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="studentSecondSurname"
          >
            Apellido materno:
          </label>
          <input
            id="studentSecondSurname"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Perez"
            name="studentSecondSurname"
            defaultValue={student?.secondSurname}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="studentEmail"
        >
          Email:
        </label>
        <input
          id="studentEmail"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="ej. juanperez43@gmail.com"
          name="studentEmail"
          defaultValue={student?.email}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="studentPhone"
          >
            Telefono fijo:
          </label>
          <input
            id="studentPhone"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="01-2056345"
            name="studentPhone"
            defaultValue={student?.phone}
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="studentCellphone"
          >
            Celular:
          </label>
          <input
            id="studentCellphone"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="987571654"
            name="studentCellphone"
            defaultValue={student?.cellphone}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="studentAcademicInstitution"
        >
          Institucion educativa:
        </label>
        <input
          id="studentAcademicInstitution"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Universidad Nacional de Ingenieria"
          name="studentAcademicInstitution"
          defaultValue={student?.academicInstitution}
        />
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="studentWorkplace"
        >
          Centro laboral:
        </label>
        <input
          id="studentWorkplace"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Banco de la Nacion"
          name="studentWorkplace"
          defaultValue={student?.workplace}
        />
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="studentEnglishCertification"
        >
          Certificacion de ingles:
        </label>
        <input
          id="studentEnglishCertification"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="TOEFL"
          name="studentEnglishCertification"
          defaultValue={student?.englishCertification}
        />
      </div>

      <div>
        <h3 className="text-m font-black text-slate-500 uppercase">
          Direccion
        </h3>
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="street"
        >
          Calle:
        </label>
        <input
          id="street"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Av. Los Pinos 123"
          name="street"
          defaultValue={student?.address?.street}
        />
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="neighborhood"
        >
          Sector:
        </label>
        <input
          id="neighborhood"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Urb. Los Parques"
          name="neighborhood"
          defaultValue={student?.address?.neighborhood}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="city"
          >
            Ciudad:
          </label>
          <input
            id="city"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Apellido del estudiante"
            name="city"
            defaultValue={student?.address?.city}
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="state"
          >
            Provincia:
          </label>
          <input
            id="state"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Apellido del estudiante"
            name="state"
            defaultValue={student?.address?.state}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="reference"
        >
          Referencia:
        </label>
        <input
          id="reference"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Frente al estadio de la ciudad"
          name="reference"
          defaultValue={student?.address?.reference}
        />
      </div>

      <div>
        <h3 className="text-m font-black text-slate-500 uppercase">
          Representante legal
        </h3>
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="legalRepresentativeName"
        >
          Nombre:
        </label>
        <input
          id="legalRepresentativeName"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Alberto"
          name="legalRepresentativeName"
          defaultValue={student?.legalRepresentative?.name}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="legalRepresentativeSurname"
          >
            Apellido paterno:
          </label>
          <input
            id="legalRepresentativeSurname"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Gomez"
            name="legalRepresentativeSurname"
            defaultValue={student?.legalRepresentative?.surname}
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="legalRepresentativeSecondSurname"
          >
            Apellido materno:
          </label>
          <input
            id="legalRepresentativeSecondSurname"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Peralta"
            name="legalRepresentativeSecondSurname"
            defaultValue={student?.legalRepresentative?.secondSurname}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="legalRepresentativePhone"
          >
            Telefono fijo:
          </label>
          <input
            id="legalRepresentativePhone"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="01-2056345"
            name="legalRepresentativePhone"
            defaultValue={student?.legalRepresentative?.phone}
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="legalRepresentativeCellphone"
          >
            Celular:
          </label>
          <input
            id="legalRepresentativeCellphone"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="978654321"
            name="legalRepresentativeCellphone"
            defaultValue={student?.legalRepresentative?.cellphone}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="studentComment"
        >
          Comentario:
        </label>
        <textarea
          id="studentComment"
          rows={5}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Alumno destacado en ingles avanzado"
          name="studentComment"
          defaultValue={student?.comment}
        />
      </div>
    </>
  );
}
