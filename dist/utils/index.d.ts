export declare const getAbsolutePath: (filePath: string) => string;
export declare const mkdir: (dir: string) => void;
export declare const cwdPath: (...args: any[]) => string;
export declare const deleteAll: (path: string) => void;
/**
 * Download template from remote
 *
 * @param {*} repo
 * @param {*} dest
 * @returns
 */
export declare function downloadTemplate(repo: string, dest: string): Promise<unknown>;
