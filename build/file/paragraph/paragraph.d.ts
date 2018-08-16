import { Image } from "../../file/media";
import { Num } from "../../file/numbering/num";
import { XmlComponent } from "../../file/xml-components";
import { ISpacingProperties } from "./formatting/spacing";
import { Bookmark, Hyperlink } from "./links";
import { PictureRun, Run, TextRun } from "./run";
export declare class Paragraph extends XmlComponent {
    private readonly properties;
    constructor(text?: string);
    addRun(run: Run): Paragraph;
    addHyperLink(hyperlink: Hyperlink): Paragraph;
    addBookmark(bookmark: Bookmark): Paragraph;
    createTextRun(text: string): TextRun;
    addImage(image: Image): PictureRun;
    heading1(): Paragraph;
    heading2(): Paragraph;
    heading3(): Paragraph;
    heading4(): Paragraph;
    heading5(): Paragraph;
    heading6(): Paragraph;
    title(): Paragraph;
    center(): Paragraph;
    left(): Paragraph;
    right(): Paragraph;
    start(): Paragraph;
    end(): Paragraph;
    distribute(): Paragraph;
    justified(): Paragraph;
    thematicBreak(): Paragraph;
    pageBreak(): Paragraph;
    pageBreakBefore(): Paragraph;
    maxRightTabStop(): Paragraph;
    leftTabStop(position: number): Paragraph;
    rightTabStop(position: number): Paragraph;
    centerTabStop(position: number): Paragraph;
    bullet(indentLevel?: number): Paragraph;
    setNumbering(numbering: Num, indentLevel: number): Paragraph;
    setCustomNumbering(numberId: number, indentLevel: number): Paragraph;
    style(styleId: string): Paragraph;
    indent(attrs: object): Paragraph;
    spacing(params: ISpacingProperties): Paragraph;
    keepNext(): Paragraph;
    keepLines(): Paragraph;
    referenceFootnote(id: number): Paragraph;
    addRunToFront(run: Run): Paragraph;
    bidirectional(): Paragraph;
}
