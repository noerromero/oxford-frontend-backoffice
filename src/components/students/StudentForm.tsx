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
            htmlFor="dni"
          >
            DNI:
          </label>
          <input
            id="dni"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="44987676"
            name="dni"
            defaultValue={student?.dni}
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="birthday"
          >
            Fecha de nacimiento:
          </label>
          <input
            id="birthday"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="07/12/1990"
            name="birthday"
            defaultValue={student?.birthday}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="name"
        >
          Nombre:
        </label>
        <input
          id="name"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Juan Esteban"
          name="name"
          defaultValue={student?.name}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="surname"
          >
            Apellido paterno:
          </label>
          <input
            id="surname"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Gomez"
            name="surname"
            defaultValue={student?.surname}
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="secondSurname"
          >
            Apellido materno:
          </label>
          <input
            id="secondSurname"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Perez"
            name="secondSurname"
            defaultValue={student?.secondSurname}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          id="email"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="ej. juanperez43@gmail.com"
          name="email"
          defaultValue={student?.email}
        />
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="phone"
          >
            Telefono fijo:
          </label>
          <input
            id="phone"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="01-2056345"
            name="phone"
            defaultValue={student?.phone}
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="cellphone"
          >
            Celular:
          </label>
          <input
            id="cellphone"
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="987571654"
            name="cellphone"
            defaultValue={student?.cellphone}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="academicInstitution"
        >
          Institucion educativa:
        </label>
        <input
          id="academicInstitution"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Universidad Nacional de Ingenieria"
          name="academicInstitution"
          defaultValue={student?.academicInstitution}
        />
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="workplace"
        >
          Centro laboral:
        </label>
        <input
          id="workplace"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Banco de la Nacion"
          name="workplace"
          defaultValue={student?.workplace}
        />
      </div>

      <div className="mb-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="englishCertificate"
        >
          Certificacion de ingles:
        </label>
        <input
          id="englishCertificate"
          type="text"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="TOEFL"
          name="englishCertificate"
          defaultValue={student?.englishCertificate}
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
            placeholder="Lima"
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
            placeholder="Lima"
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
          htmlFor="comment"
        >
          Comentario:
        </label>
        <textarea
          id="comment"
          rows={5}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Alumno destacado en ingles avanzado"
          name="comment"
          defaultValue={student?.comment}
        />
      </div>

      <input
            id="addressId"
            type="hidden"
            name="addressId"
            defaultValue={student?.address?.id}
          />
    </>
  );
}
