import { NodePlopAPI } from "plop";
export default function (plop: NodePlopAPI): void;
export declare type PlopList = PlopItem[];
export declare type PlopItem = {
    name?: string;
    description?: string;
    isGeneral: boolean;
    templateFiles?: string[];
    children?: PlopItem[];
    isFolder?: string;
    suffix?: string;
};
