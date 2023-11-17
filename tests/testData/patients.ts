import {Patient} from "@model";

export const testPatientA: Patient = {
    name: "Tomasz Mazur",
    age: 37,
    dependents: [
        {name: "Magda Mazur", age: 36, added: new Date("2019-01-16")},
        {name: "Marcel Mazur", age: 12, added: new Date("2019-01-16")},
        {name: "Kaja Mazur", age: 10, added: new Date("2020-10-12")},
        {name: "Euzebiusz Mazur", age: 20, added: new Date("2021-05-20")},
        {name: "Patrycja Mazur", age: 5, added: new Date("2022-10-16")},
    ]
};

export const testPatientB: Patient = {
    name: "Jan Nowak",
    age: 45,
    dependents: [
        {name: "Zenon Nowak", age: 46, added: new Date("2018-03-25")},
        {name: "Maria Nowak", age: 20, added: new Date("2018-03-25")},
        {name: "Tomasz Nowak", age: 17, added: new Date("2021-06-15")},
        {name: "Julia Nowak", age: 13, added: new Date("2021-09-01")}
    ]
};

export const testPatientNoAdultDependents = {
    name: "Marek Kowalski",
    age: 55,
    dependents: [
        {name: "Maurycy Kowalski", age: 12, added: new Date("2019-01-16")},
        {name: "Monika Kowalska", age: 10, added: new Date("2020-10-12")},
        {name: "Patryk Kowalski", age: 5, added: new Date("2022-10-16")},
    ]
};

export const testPatientNoDependents = {
    name: "Martyna Cabaj",
    age: 55,
    dependents: []
};
