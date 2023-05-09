import { HttpClient } from '@angular/common/http';
import { HttpServicesService } from './../../Services/http-services.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/Interface/products';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  Product:any;
  value:any[]=[]
  category = ['Men', 'Women', 'Kids'];
  selectedCategory!: string;
  showNotification=false;
  userId:any=localStorage.getItem('UID')
  selectedImage!:File;
  constructor(private activatedRoute:ActivatedRoute,private ProdServ:DashboardService,private route:Router,private http:HttpServicesService,private httpClient:HttpClient) { }

  ngOnInit(): void {
  }


  onFileSelected(event:any) {
    this.selectedImage=<File>event.target.files[0]
  }


  submit(data:any){
    const formData=new FormData();
    formData.append('description',data.description),
    formData.append('title',data.title),
    formData.append('price',data.price),
    formData.append('category',this.selectedCategory),
    formData.append('image',this.selectedImage),
    formData.append('user_id',this.userId),
    console.log(formData)
    this.httpClient.post<any>(`${this.http.testUrl}/add`,formData).subscribe(
      (res)=>{
        console.log(res)
      }
    );
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.showNotification=true;
    setTimeout(() => {
      this.showNotification=false;
      this.route.navigate([`dashboard/${this.userId}/dashboard`])
    }, 2000);
  }

}
