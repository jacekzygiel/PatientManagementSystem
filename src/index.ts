import { dependentAddedMostRecently, adultDependentAddedMostRecently, underageDependentsReportGenerator } from '@functions/index';

import { testPatientA, testPatientB } from '@testData/index';

function main() {
    // Example use of the functions
    console.log("Most Recently Added Dependent:", dependentAddedMostRecently(testPatientA));
    console.log("Last Adult Dependent Added:", adultDependentAddedMostRecently(testPatientA));
    console.log("Underage Dependents Report:", underageDependentsReportGenerator([testPatientA, testPatientB]));
}

main();
