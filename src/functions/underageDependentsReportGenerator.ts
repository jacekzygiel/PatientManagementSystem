import {Patient} from "@model";

export function underageDependentsReportGenerator(patients: Patient[]): string {
    return patients.map(patient => {
        const underAgeDependents = patient.dependents
            .filter(dependent => dependent.age < 18)
            .map(dependent => `${dependent.name}(${dependent.age})`)
            .join(', ');

        return `${patient.name.split(" ")[1]}, ${patient.name.split(" ")[0]} - ${underAgeDependents}`;
    }).join('\n');
}
