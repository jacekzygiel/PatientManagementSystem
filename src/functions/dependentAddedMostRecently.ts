import {Dependent, Patient} from "@model";

export function dependentAddedMostRecently(patient: Patient): Dependent | null {
    if (!patient.dependents || patient.dependents.length === 0) {
        return null;
    }
    return patient.dependents.reduce((latest: Dependent, dependent: Dependent) =>
        new Date(latest.added) < new Date(dependent.added) ? dependent : latest);
}
