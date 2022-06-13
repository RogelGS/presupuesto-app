import { Egress } from "./egress.model";

export class EgressService {
    egresses: Egress[] = [
        new Egress("Renta Depto", 900),
        new Egress("Ropa", 200)
    ]

    deleteItem(egress: Egress) {
        const index: number = this.egresses.indexOf(egress);
        this.egresses.splice(index, 1);
    }
}