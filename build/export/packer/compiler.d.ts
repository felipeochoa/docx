/// <reference types="node" />
import * as archiver from "archiver";
import * as express from "express";
import { Writable } from "stream";
import { File } from "../../file";
export declare class Compiler {
    private readonly file;
    protected archive: archiver.Archiver;
    private readonly formatter;
    constructor(file: File);
    compile(output: Writable | express.Response): Promise<void>;
}
