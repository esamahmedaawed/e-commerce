import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit {
  id:any;
  data:any={};

 

constructor(private routs:ActivatedRoute,private service:ProductsService){
  this.id = this.routs.snapshot.paramMap.get('id');
}
ngOnInit(): void {
  this.getproductbyis();
}


getproductbyis(){
  this.service.getproducrbyid(this.id).subscribe((res:any) => { this.data=res})
}

gotopro(){
  this.id=0 ? this.id : +this.id+1;
  this.service.getproducrbyid(this.id).subscribe((res:any) => { this.data=res})
  console.log(+this.id)


}
gotopr(){
  console.log(this.id)
  if(this.id>1){
    this.id = +this.id-1
  }else{
    this.id = this.id
  }
  this.service.getproducrbyid(this.id).subscribe((res:any) => { this.data=res})
  console.log(this.id)
}
}
