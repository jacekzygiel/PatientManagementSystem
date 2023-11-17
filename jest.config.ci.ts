// jest.config.ci.js
import {pathsToModuleNameMapper} from "ts-jest";

const {compilerOptions} = require('./tsconfig');

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
    reporters: [
        "default", // keep the default reporter
        ["jest-junit", {
            "outputDirectory": "tests-reports",
            "outputName": "junit.xml"
        }]
    ],
};