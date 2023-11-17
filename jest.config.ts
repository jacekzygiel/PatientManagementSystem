// jest.config.js
import {pathsToModuleNameMapper} from "ts-jest";

const {compilerOptions} = require('./tsconfig');

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
    reporters: [
        "default", // keep the default reporter
        ["jest-html-reporter", {
            pageTitle: "Test Report",
            outputPath: "./tests-reports/report.html", // specify the output path
        }]
    ],
};