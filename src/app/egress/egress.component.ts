import { Component, Input, OnInit } from '@angular/core';
import { EgressService } from './agress.service';
import { Egress } from './egress.model';

@Component({
  selector: 'app-egress',
  templateUrl: './egress.component.html',
  styleUrls: ['./egress.component.css']
})
export class EgressComponent implements OnInit {

  egresses: Egress[] = [];

  @Input() entryTotal: number;

  constructor(private egressService: EgressService) { }

  ngOnInit(): void {
    this.egresses = this.egressService.egresses;
  }

  deleteItem(egress: Egress) {
    this.egressService.deleteItem(egress);
  }

  PorcentCalculator(egress: Egress) {
    return egress.value / this.entryTotal;
  }

}
