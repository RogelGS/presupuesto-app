import { Entry } from "./entry.model";

export class EntryService {
    entries: Entry[] = [
        new Entry("Salario", 4000),
        new Entry("Venta de coche", 500)
    ];

    delete(entry: Entry) {
        const index: number = this.entries.indexOf(entry);
        this.entries.splice(index, 1);
    }
}