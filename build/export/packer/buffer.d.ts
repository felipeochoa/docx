/// <reference types="node" />
import { File } from "../../file";
import { IPacker } from "./packer";
export declare class BufferPacker implements IPacker {
    private readonly packer;
    constructor(file: File);
    pack(): Promise<Buffer>;
}
