import { Component, OnInit } from '@angular/core';
import {people} from "./duty.constants";

export interface Testimony {
  name: string; // имя владельца
  house: number; // Номер участка
  balance: string; // Баланс
  desc: string // Является ли должником
}
@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {

  public testimony: Testimony[] = people;
  constructor() { }

  ngOnInit(): void {
  }


}
