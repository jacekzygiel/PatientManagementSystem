import {dependentAddedMostRecently} from "@functions";
import {testPatientA, testPatientNoDependents} from "@testData";

describe('Dependent added most recently', () => {
    test('should return the most recently added dependent', () => {
        expect(dependentAddedMostRecently(testPatientA)).toEqual(testPatientA.dependents[4]);
    });

    test('should return null if no dependents are present', () => {
        expect(dependentAddedMostRecently(testPatientNoDependents)).toBeNull();
    });
})
