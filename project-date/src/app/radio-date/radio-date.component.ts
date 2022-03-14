import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from './item';
import { ITEMS } from './mock-data';

@Component({
  selector: 'app-radio-date',
  templateUrl: './radio-date.component.html',
  styleUrls: ['./radio-date.component.css']
})
export class RadioDateComponent implements OnInit {

  isVisible: any;
  isSelected: boolean = true;
  
  title = 'app';
  radioSel:any;
  radioSelected:String;
  radioSelectedString!: String;
  itemsList: Item[] = ITEMS;
  constructor() {
    this.itemsList = ITEMS;
    this.radioSelected = "item_3";
    this.getSelecteditem();
   }

  getSelecteditem(){
    this.radioSel = ITEMS.find(Item => Item.value === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }

  onItemChange(item: any){
    this.getSelecteditem();
  }
  ngOnInit(): void {
  }

}
