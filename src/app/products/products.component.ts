import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IProduct } from '../Models/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  find(arg0: (i: any) => boolean): IProduct {
    throw new Error('Method not implemented.');
  }
  getProductById(arg0: any) {
    throw new Error('Method not implemented.');
  }


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
     },
    {
     "id": 4,
     "paketURL": "capkin-kitap-seti",
     "pakettipi": "kitap",
     "paketadi": "Çapkın Kitap Seti",
     "fiyat": 1400.00,
     "indirimlifiyat": 800.00,
     "imgURL": "capkin-kitap-seti.jpg",
     "aciklama": "8 adet kitap içerir. Kitaplar dijital üründür."
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
     },
    {
     "id": 7,
     "pakettipi": "kitap",
     "paketURL": "mutlu-yasamin-formulu-serisi",
     "paketadi": "Mutlu Yaşamın Formülü 3",
     "fiyat": 220.00,
     "indirimlifiyat": 170.00,
     "imgURL": "mutlu-yasamin-formulu-3.jpg",
     "aciklama": "Bu kitapta tamamen ikili iletişim taktikleri ve etkileyici erkek olmak hakkında bilgiler verilmiştir. İnsanların davranışlarını anlama, yorumlama ve bu davranışlar karşısında neler yapabileceğiniz aktarılmıştır."
    },
    {
     "id": 8,
     "pakettipi": "kitap",
     "paketURL": "yatagin-efendisi",
     "paketadi": "Yatağın Efendisi",
     "fiyat": 220.00,
     "indirimlifiyat": 160.00,
     "imgURL": "yatagin-efendisi.jpg",
     "aciklama": "Cinselliğe hiç adım atmadınız mı ya da yatakta daha iyi olmak mı istiyorsunuz? Kadını orgazma götüren bütün etkenler hakkında hem bilimsel hem de uygulamalı metotları öğrenebileceksiniz."
    },
    {
     "id": 9,
     "pakettipi": "kitap",
     "paketURL": "sosyal-medya-ile-kadinlari-etkileyin",
     "paketadi": "Sosyal Medya ile Kadınları Etkileyin",
     "fiyat": 220.00,
     "indirimlifiyat": 160.00,
     "imgURL": "sosyal-medya-ile-kadinlari-etkileyin.jpg",
     "aciklama": "Gündelik yoğunluğu sebebiyle gerçek hayatta kadınlarla tanışmaya vakit bulamayan veya gerçek hayatta kadınların karşısına çıkmak konusunda sorun yaşayan, sosyal baskıyı yenemeyen herkes için uygundur."
    },
    {
     "id": 10,
     "pakettipi": "kitap",
     "paketURL": "laf-cambazligi",
     "paketadi": "Laf Cambazlığı",
     "fiyat": 220.00,
     "indirimlifiyat": 160.00,
     "imgURL": "laf-cambazligi.jpg",
     "aciklama": "Bu kitap ile sen de bu %1'lik dilimdeki erkeklerden birisi olabilirsin. Kadınlarla konuşmanın inceliklerini ve kelimelerinle kadını baştan çıkartmayı öğren!"
    },
    {
     "id": 11,
     "pakettipi": "kitap",
     "paketURL": "zengin-ya-da-yakisikli-olmaniza-gerek-yok",
     "paketadi": "Zengin ya da Yakışıklı Olmanıza Gerek Yok",
     "fiyat": 210.00,
     "indirimlifiyat": 150.00,
     "imgURL": "zengin-ya-da-yakisikli-olmaniza-gerek-yok (1).jpg",
     "aciklama": "Zengin ya da yakışıklı olmadığını düşünerek kadınlarla etkileşim kuramayan ve daha iyi bir hayat yaşayamayan herkes için bu kitabı yazıyorum. Vereceğim bilgiler ışığında artık siz de çekici bulduğunuz kadınlarla rahatlıkla iletişim kurabilir seviyeye geleceksiniz."
    },
    {
     "id": 12,
     "pakettipi": "kitap",
     "paketURL": "tehlikeli-manipulasyon-taktikleri",
     "paketadi": "Tehlikeli Manipülasyon Taktikleri",
     "fiyat": 210.00,
     "indirimlifiyat": 150.00,
     "imgURL": "tehlikeli-manipulasyon-taktikleri (1).jpg",
     "aciklama": "Bu kitapta yer alan bilgiler, yanlış kullanımda karşı tarafta ciddi zararlara yol açabilir."
    },
    {
     "id": 13,
     "pakettipi": "kitap",
     "paketURL": "mutlu-yasamin-formulu-2",
     "paketadi": "Mutlu Yaşamın Formülü 2",
     "fiyat": 210.00,
     "indirimlifiyat": 150.00,
     "imgURL": "mutlu-yasamin-formulu-2 (1).jpg",
     "aciklama": "Üst düzey yöneticiler, siyasetçiler, askerler ve ajanlar gibi özel olarak yetiştirilen insanlara senelerdir öğretilen teknikleri sizler için kadın-erkek ilişkisinde ve günlük hayatınızda aktif olarak nasıl kullanacağınızı anlattığım bu kitabım ile öğrendiklerinizi anında uygulayıp sonuç alabilirsiniz. "
    },
    {
     "id": 14,
     "pakettipi": "kitap",
     "paketURL": "mutlu-yasamin-formulu",
     "paketadi": "Mutlu Yaşamın Formülü",
     "fiyat": 210.00,
     "indirimlifiyat": 150.00,
     "imgURL": "mutlu-yasamin-formulu (1).jpg",
     "aciklama": "Kadın-erkek ilişkilerindeki en önemli meselenin enerji ve erkeğin başarısından geçtiğinden bahsediyoruz."
    },
    {
     "id": 15,
     "pakettipi": "kitap",
     "paketURL": "gercek-hayatta-kadinlari-etkileyin-kocluga-ozel-",
     "paketadi": "Gerçek Hayatta Kadınları Etkileyin (Koçluğa Özel)",
     "fiyat": 210.00,
     "indirimlifiyat": 150.00,
     "imgURL": "gercek-hayatta-kadinlari-etkileyin.jpg",
     "aciklama": "Bu kitap, karışık terimlerden arındırılmış ve herkesin anlayabileceği net bir dille yazılmıştır. Kitapta yer alan bilgiler, senelerdir süregelen bilgi ve deneyimlere dayanmaktadır. "
    }
 ];


 sort(headerName:string){
  this.orderHeader=headerName;
 }


 
  constructor() {}
  ngOnInit(): void {}

  
}

