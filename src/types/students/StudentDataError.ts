export class StudentDataError {

    constructor(
        generic?: string,
        dni?: string[],
        birthday?: string[],
        firstName?: string[],
        surname?: string[],
        street?: string[],
        city?: string[],
        state?: string[]
    ) {
        this.generic = generic;
        this.dni = dni;
        this.birthday = birthday;
        this.firstName = firstName;
        this.surname = surname;
        this.street = street;
        this.city = city;
        this.state = state;
    }

    generic?: string;
    dni?: string[];
    birthday?: string[];
    firstName?: string[];
    surname?: string[];
    street?: string[];
    city?: string[];
    state?: string[];
}