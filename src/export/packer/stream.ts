import { PassThrough, Readable } from "stream";
import { File } from "../../file";
import { Compiler } from "./compiler";
import { IPacker } from "./packer";

export class StreamPacker implements IPacker {
    private readonly compiler: Compiler;

    constructor(file: File) {
        this.compiler = new Compiler(file);
    }

    public pack(): Readable {
        const pipe = new PassThrough();
        this.compiler.compile(pipe);
        return pipe;
    }
}
