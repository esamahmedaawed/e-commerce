import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from "../../../shared/compoents/spinner/spinner.component";
import { SelectComponent } from '../../../shared/compoents/select/select.component';
import { ProductComponent } from "../product/product.component";
import { RouterLinkActive, RouterOutlet, RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, SelectComponent, ProductComponent,RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit  {
  products:any[]=[];
  categories:any[]=[];
  cartproducts:any[]=[];
  srcomage:string="all.jpg";
constructor(private service:ProductsService){}
  ngOnInit(): void {
    this.getproducts();
    this.getcategories();
    }
    getproducts(){
      this.service.getAllProducts().subscribe((res:any)=>{this.products = res;});
    }
      getcategories(){
      this.service.getAllcategories().subscribe((res:any)=>{
        this.categories = res;});
    }
    filltercatrgroies(event:any){
     let value = event.target.value;
     this.srcomage=value+".jpg";
     console.log(this.srcomage);
     (value=='all') ? this.getproducts() : this.getProductsCategory(value);
    }
    getProductsCategory(keyword:string){
      this.service.getProductsByCategories(keyword).subscribe((res:any) =>{this.products=res;});
    }
    addtocart(event:any){
      if ("cart" in localStorage){
        this.cartproducts = JSON.parse(localStorage.getItem("cart")!);
        let exist =this.cartproducts.find(item => item.item.id === event.item.id)
        if(exist){
          alert("Product already in cart");
        }else{
          this.cartproducts.push(event);
          localStorage.setItem("cart",JSON.stringify( this.cartproducts));      
        }
      }else{
        this.cartproducts.push(event);
        localStorage.setItem("cart",JSON.stringify( this.cartproducts));
      }
    }

}
