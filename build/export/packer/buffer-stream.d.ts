/// <reference types="node" />
import { Writable } from "stream";
export declare class BufferStream extends Writable {
    private readonly data;
    constructor();
    _write(chunk: any, _: string, next: (err?: Error) => void): void;
    end(cb?: Function): void;
    readonly Buffer: Buffer;
}
