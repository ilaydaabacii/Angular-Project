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
  searchText :IProduct= {"id": null , "pakettipi": '' , "paketURL":'',  "paketadi":'' , "fiyat":null, "imgURL":'' , "aciklama":'' }
  products: IProduct[] = [
    {
       "id": 1,
       "pakettipi": "kocluk",
       "paketURL": "vip-whatsapp-koclugu",
       "paketadi": "VIP Whatsapp Koçluğu",
       "fiyat": 2500.00,
       "imgURL": "vip-whatsapp-koclugu.jpg",
       "aciklama": "30 günlük VIP whatsapp koçluğunda Çapkın Centilmen ile whatsapp üzerinden eğitim alırsınız. 30 günlük paketin fiyatı diğerine nazaran daha yüksek olsa da gün açısından bakıldığında daha hesaplı ve daha uzun eğitim almanıza olanak sağlar."
    },
    {
     "id": 2,
     "paketURL": "ileri-seviye-whatsapp-koclugu",
     "pakettipi": "kocluk",
     "paketadi": "İleri Seviye Whatsapp Koçluğu",
     "fiyat": 1500.00,
     "imgURL": "ileri-seviye-whatsapp-koclugu.jpg",
     "aciklama": "10 günlük ileri seviye whatsapp koçluğunda Çapkın Centilmen ile whatsapp üzerinden eğitim alırsınız. 10 günlük paket düşük bütçeye sahip olanlar için fiyat-performans paketidir. "
    },
    {
     "id": 13,
     "pakettipi": "kocluk",
     "paketURL": "60-dakika-telefon-gorusmesi",
     "paketadi": "60 Dakika Telefon Görüşmesi",
     "fiyat": 150.00,
     "imgURL": "60-dakika-telefon-gorusmesi.jpg",
     "aciklama": "Birebir telefon görüşmesi, koçluk gerektirmeyecek kadar kısa lakin önemli kişisel sorunlarınıza birlikte çözüm üretebileceğimiz hizmet stilidir. 60 dakika boyunca bana sorunlarınızı aktarıp, görüşümü ve ilgili konuda ne yapmanız gerektiği hakkında bilgi alabilirsiniz."
    },
    {
     "id": 14,
     "pakettipi": "kocluk",
     "paketURL": "saha-egitimi-1-gun-",
     "paketadi": "Saha Eğitimi (1 Gün)",
     "fiyat": 150.00,
     "imgURL": "saha-egitimi-1-gun- (1).jpg",
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
