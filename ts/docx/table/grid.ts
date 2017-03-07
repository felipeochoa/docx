import {XmlComponent, Attributes} from "../xml-components";


export class TableGrid extends XmlComponent {
    private cols: Array<GridCol>;
    constructor(cols: Array<GridCol>) {
        super('w:tblGrid');
        this.cols = cols;
        cols.forEach(col => this.root.push(col));
    }

    clearVariables(): void {
        this.cols.forEach(col => col.clearVariables());
        delete this.cols;
    }
}


export class GridCol extends XmlComponent {
    constructor(width?: number) {
        super('w:gridCol');
        this.root.push(new Attributes({w: width.toString()}))
    }
}
