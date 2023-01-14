import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';

@Component({
  selector: 'app-egitim',
  templateUrl: './egitim.component.html',
  styleUrls: ['./egitim.component.css']
})
export class EgitimComponent implements OnInit {
  orderHeader:string="";
  p: string|number|undefined;
  searchText :IProduct= {"id": null , "indirimlifiyat": null ,"pakettipi": '' , "paketURL":'',  "paketadi":'' , "fiyat":null, "imgURL":'' , "aciklama":'' }
  products: IProduct[] = [
    {
     "id": 2,
     "paketURL": "centilmen-special-v1",
     "pakettipi": "egitim",
     "paketadi": "Special V1",
     "fiyat": 1500.00,
     "indirimlifiyat": 650.00,
     "imgURL": "specialv1.jpg",
     "aciklama": "Sokakta gördüğün o çok güzel kadının yanındaki erkek sen olabilirsin. "
    },
    {
      "id": 3,
      "paketURL": "centilmen-special-v2",
      "pakettipi": "egitim",
      "paketadi": "Special V2",
      "fiyat": 1500.00,
      "indirimlifiyat": 650.00,
      "imgURL": "specialv2.jpg",
      "aciklama": "çok yakında "
     }
 ];


 sort(headerName:string){
  this.orderHeader=headerName;
 }

  constructor() { }

  ngOnInit(): void {
  }

}
