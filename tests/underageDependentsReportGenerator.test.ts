import {underageDependentsReportGenerator} from "@functions";
import {testPatientA, testPatientB, testPatientNoDependents} from "@testData";

describe('Underage dependents report', () => {
    test('should generate report with correct data', () => {
        let expectedOutput = "Mazur, Tomasz - Marcel Mazur(12), Kaja Mazur(10), Patrycja Mazur(5)\n" +
            "Nowak, Jan - Tomasz Nowak(17), Julia Nowak(13)"

        expect(underageDependentsReportGenerator([testPatientA, testPatientB]))
            .toEqual(expectedOutput)
    });

    test('should generate report for patient without dependents', () => {
        expect(underageDependentsReportGenerator([testPatientNoDependents])).toEqual("Cabaj, Martyna - ")
    });
})
