/*import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectService } from '../select.service';
import { Country } from '../country';
import { State } from '../state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
quan = 0;
  constructor(public Router: Router) { }

  ngOnInit(): void {

  }

  addValue(){
    this.quan = this.quan +=1; 
  }
  subValue(){
    this.quan -=1; 
  }


}

    
                                <button id="sub" (click)=subValue()>-</button>
                                <label for="">{{quan}}</label>
                                <button type="submit" id="add" (click)="addValue()">+</button>*/