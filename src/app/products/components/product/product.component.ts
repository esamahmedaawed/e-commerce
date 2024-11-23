import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,SharedModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  @Input() data:any={};
  @Output() item= new EventEmitter()
  addbutton:boolean=false;
  amount:number=1;
ngOnInit(): void {
  
}
add(){
  this.item.emit({item:this.data , quantity:this.amount });
}
}
