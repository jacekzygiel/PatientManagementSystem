import {Dependent, Patient} from "@model";

export function adultDependentAddedMostRecently(patient: Patient): Dependent | null {
    if (!patient.dependents || patient.dependents.length === 0) {
        return null;
    }
    const adults = patient.dependents.filter(dependent => dependent.age > 18);
    if (adults.length === 0) {
        return null;
    }
    return adults.reduce((latest: Dependent, adult: Dependent) =>
        new Date(latest.added) < new Date(adult.added) ? adult : latest);
}
