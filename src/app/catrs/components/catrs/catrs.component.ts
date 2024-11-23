import { Component,OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-catrs',
  standalone: true,
  imports: [SharedModule,CommonModule],
  templateUrl: './catrs.component.html',
  styleUrl: './catrs.component.css'
})
export class CatrsComponent implements OnInit  {
  constructor(){}
  cartprodicts:any[]=[]
  total:number = 0;
ngOnInit(): void {
  this.getCartproduct();
}
getCartproduct(){
  if ("cart" in localStorage){
    this.cartprodicts = JSON.parse(localStorage.getItem("cart")!) ;
  }
  this.gettotal()

  console.log(this.cartprodicts)
}
gettotal(){
  this.total = 0;
  for(let x in this.cartprodicts){
    this.total += this.cartprodicts[x].item.price * this.cartprodicts[x].quantity;
  }
}
updatdata(index:any){
  this.gettotal()
localStorage.setItem("cart" , JSON.stringify(this.cartprodicts))
}
delet(index:number){
  this.cartprodicts.splice(index, 1)
  localStorage.setItem("cart" , JSON.stringify(this.cartprodicts))
  this.gettotal()
}
}
