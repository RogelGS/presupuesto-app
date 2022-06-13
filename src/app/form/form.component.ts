import { Component, OnInit } from '@angular/core';
import { EgressService } from '../egress/agress.service';
import { Egress } from '../egress/egress.model';
import { Entry } from '../entry/entry.model';
import { EntryService } from '../entry/entry.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  type: string = '+';
  inputDescription: string;
  inputValue: number;

  constructor(private entryService: EntryService, private egressService: EgressService) { }

  ngOnInit(): void {
  }

  operationType(event) {
    this.type = event.target.value;
    console.log(this.type);
  }

  addValue() {
    if (this.type === "+") {
      this.entryService.entries.push(new Entry(this.inputDescription, this.inputValue));
    } else {
      this.egressService.egresses.push(new Egress(this.inputDescription, this.inputValue));
    }
  }

}
