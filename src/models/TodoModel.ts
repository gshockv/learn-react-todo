
export class TodoModel {
    
    constructor(
        private _rowNumber: number,
        private _description: string,
        private _assigned: string) {

    }

    get rowNumber(): number {
        return this._rowNumber;
    }
        
    set rowNumder(value: number) {
        this._rowNumber = value;
    }

    get rowDescription(): string {
        return this._description;
    }

    set rowDescription(value: string) {
        this._description = value;
    }

    get rowAssigned(): string {
        return this._assigned;
    }

    set rowAssigned(value: string) {
        this._assigned = value;
    }
}
