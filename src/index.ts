import { dependentAddedMostRecently, adultDependentAddedMostRecently, underageDependentsReportGenerator } from '@functions';

import { testPatientA, testPatientB } from '@testData';

function main() {
    // Example use of the functions
    console.log("Most Recently Added Dependent:", dependentAddedMostRecently(testPatientA));
    console.log("Last Adult Dependent Added:", adultDependentAddedMostRecently(testPatientA));
    console.log("Underage Dependents Report:", underageDependentsReportGenerator([testPatientA, testPatientB]));
}

main();
