# Patient Management System

## Description
This project is a Patient Management System designed to handle and process patient and dependent data in
a healthcare context. It provides functionalities to track patients and their dependents,
including identifying the most recently added dependent, finding the last adult dependent added,
and generating a report of underage dependents. 
The project is built using TypeScript, offering strong typing and developer-friendly tooling.

## Installation

### Prerequisites
- Node.js (Version 18.1.0 or above)
- TypeScript (Version 5.2.2 or above)
- npm

### Setup
Clone the repository and install the dependencies:
```bash
git clone https://your-repository-url
cd your-project-directory
npm install
```

## Usage
The system is designed to manage patient and dependent data. Here are some common commands:


Compile TypeScript files to JavaScript:
```bash
tsc
```
Run the compiled JavaScript file:
```bash
node dist/index.js
```
For development, you can run TypeScript files directly using ts-node:

```bash
npx ts-node src/index.ts
```

## Testing
The project uses Jest for testing, providing a robust framework for testing TypeScript code. 

### Test execution
To run tests:
```bash
npm tests
```
To run test for CI:
```bash
npm run tests:ci
```

To run tests for specific function:
```bash
    npm tests:recentDependent
    npm tests:lastAdult
    npm tests:underageDependentReport
```

Test files are located in the tests directory and can be identified by the .test.ts suffix.
Test data is located in test/testData directory.

### Test Reporters
There are two test reporters available:
- jest-html-reporter - generates test report in html format, which is human-readable. 
Used while running tests with `npm run test`
- jest-junit - generate test report in XML format. XML report is more sufficient for CI/CD systems.
  Used while running tests with `npm run test:ci`

## Features
Dependent Tracking:
- Recent Dependent Identification: Find the most recently added dependent for a given patient.
- Adult Dependent Identification: Determine the last adult dependent added to a patient's record.
- Underage Dependent Report Generation: Generate reports listing all underage dependents for each patient.


