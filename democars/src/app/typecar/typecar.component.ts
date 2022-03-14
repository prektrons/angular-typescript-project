import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typecar',
  templateUrl: './typecar.component.html',
  styleUrls: ['./typecar.component.css']
})
export class TypecarComponent implements OnInit {
 
  Sedan = [{ ModelName: "City",
  CompanyName: "Honda"} ];
  SUV =  [ { ModelName: "Thar",
  CompanyName: "Mahindra"}] ;
  Small = [{ ModelName: "WagonR",
  CompanyName: "Maruti"} ];

  Sedan1 = { ModelName: "City",
  CompanyName: "Honda"} ;
  SUV1 =  { ModelName: "Thar",
  CompanyName: "Mahindra"} ;
  Small1 = { ModelName: "WagonR",
  CompanyName: "Maruti"} ;
  constructor() { }

  ngOnInit(): void {
  }

}
