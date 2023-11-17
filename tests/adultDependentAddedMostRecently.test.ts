import {adultDependentAddedMostRecently} from "@functions";
import {testPatientA, testPatientNoAdultDependents} from "@testData";

describe('Adult Dependent Added Most Recently', () => {
    test('should return the most recently added adult dependent', () => {
        expect(adultDependentAddedMostRecently(testPatientA)).toEqual(testPatientA.dependents[3])
    })

    test('should return null if no adult dependents are present', () => {
        expect(adultDependentAddedMostRecently(testPatientNoAdultDependents)).toBeNull();
    });
})
