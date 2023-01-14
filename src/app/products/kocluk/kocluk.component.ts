import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';

@Component({
  selector: 'app-kocluk',
  templateUrl: './kocluk.component.html',
  styleUrls: ['./kocluk.component.css']
})
export class KoclukComponent implements OnInit {
  orderHeader:string="";
  p: string|number|undefined;
  searchText :IProduct= {"id": null , "indirimlifiyat": null ,"pakettipi": '' , "paketURL":'',  "paketadi":'' , "fiyat":null, "imgURL":'' , "aciklama":'' }
  products: IProduct[] = [
    {
       "id": 1,
       "pakettipi": "kocluk",
       "paketURL": "vip-whatsapp-koclugu",
       "paketadi": "VIP Whatsapp Koçluğu",
       "fiyat": 3100.00,
       "indirimlifiyat": 2590.00,
       "imgURL": "vip-kocluk-30-gun-.jpg",
       "aciklama": "30 günlük VIP whatsapp koçluğunda Çapkın Centilmen ile whatsapp üzerinden eğitim alırsınız. 30 günlük paketin fiyatı diğerine nazaran daha yüksek olsa da gün açısından bakıldığında daha hesaplı ve daha uzun eğitim almanıza olanak sağlar."
    },
    {
      "id": 5,
      "pakettipi": "kocluk",
      "paketURL": "seans-ozel-gorusme-40-dk-",
      "paketadi": "Seans Özel Görüşme (40 DK)",
      "fiyat": 300.00,
      "indirimlifiyat": 200.00,
      "imgURL": "seans-ozel-gorusme-40-dk-.jpg",
      "aciklama": "Birebir telefon görüşmesi, koçluk gerektirmeyecek kadar kısa lakin önemli kişisel sorunlarınıza birlikte çözüm üretebileceğimiz hizmet stilidir. 60 dakika boyunca bana sorunlarınızı aktarıp, görüşümü ve ilgili konuda ne yapmanız gerektiği hakkında bilgi alabilirsiniz."
     },
     {
      "id": 6,
      "pakettipi": "kocluk",
      "paketURL": "saha-yuz-yuze-gorusme-1-gun-",
      "paketadi": "Saha Yüz Yüze Görüşme (1 Gün)",
      "fiyat": 2000.00,
      "indirimlifiyat": 950.00,
      "imgURL": "saha-yuz-yuze-gorusme-1-gun-.jpg",
      "aciklama": "Günümüzde sosyal medya üzerinden bir kadına onlarca belki de yüzlerce erkek mesaj atıyor. Çekici bulduğumuz bir kadına mesaj attığımızda, mesajımızın diğer mesajlar arasında kaybolması ve görülmeme durumu olabiliyor. Gerçek hayatta böyle bir şey yoktur dostlarım. İsterse milyonlarca takipçisi olsun, karşısına çıktığınızda o an sadece siz varsınız!"
     }
 ];


 sort(headerName:string){
  this.orderHeader=headerName;
 }

  constructor() { }

  ngOnInit(): void {
  }

}
