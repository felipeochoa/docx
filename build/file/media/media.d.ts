/// <reference types="node" />
import { File } from "../file";
import { IMediaData } from "./data";
import { Image } from "./image";
export declare class Media {
    static addImage(file: File, filePath: string): Image;
    static addImageFromBuffer(file: File, buffer: Buffer, width?: number, height?: number): Image;
    private static generateId;
    private readonly map;
    constructor();
    getMedia(key: string): IMediaData;
    addMedia(filePath: string, referenceId: number): IMediaData;
    addMediaFromBuffer(fileName: string, buffer: Buffer, referenceId: number, width?: number, height?: number): IMediaData;
    private createMedia;
    readonly Array: IMediaData[];
}
