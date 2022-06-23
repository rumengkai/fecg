import { NodePlopAPI } from "plop";
export default function (plop: NodePlopAPI): void;
export declare type PlopList = PlopItem[];
export declare type PlopItem = {
    name?: string;
    description?: string;
    templateFiles?: string[];
    children?: PlopItem[];
};
