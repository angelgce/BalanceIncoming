import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html'
})
export class CalendarioComponent  {

  days: String[] = ['Su','Mo','Tu','We','Th','Fr','Sa'];
  constructor() { }


}
