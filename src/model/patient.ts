import {Dependent} from "@model";

export type Patient = {
    name: string;
    age: number;
    dependents: Dependent[];
};
