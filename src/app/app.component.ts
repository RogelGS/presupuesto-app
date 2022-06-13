import { Component } from '@angular/core';
import { EgressService } from './egress/agress.service';
import { Egress } from './egress/egress.model';
import { Entry } from './entry/entry.model';
import { EntryService } from './entry/entry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  entries: Entry[] = [];
  egresses: Egress[] = [];

  constructor(private entryService: EntryService, private egressService: EgressService) {
    this.entries = entryService.entries;
    this.egresses = egressService.egresses;
  }

  getEntryTotal() {
    let entryTotal: number = 0;
    this.entries.forEach(entry => {
      entryTotal += entry.value;
    })

    return entryTotal;
  }

  getEgressTotal() {
    let egressTotal: number = 0;
    this.egresses.forEach(agress => {
      egressTotal += agress.value;
    })

    return egressTotal;
  }

  getPorcentTotal() {
    return this.getEgressTotal() / this.getEntryTotal();
  }

  getBudgetTotal() {
    return this.getEntryTotal() - this.getEgressTotal();
  }
}
