# restaurantProject
[for English](https://github.com/ezranbayantemur/restaurantProject/blob/master/README.md)
## Bilgi
Bu proje bir **React Native** çalışma örneğidir. 

Restoran menü projesinin bir prototipi diyebiliriz. Müşteri uygulama üzerinden restorandaki bütün kategorileri, yiyecekleri, yiyecek ücretlerini, yiyecek detaylarını (allerjen içeriklerin olup olmadığını kontrol etmek için) inceleyebilir. Kullanıcı müşterilerine göstermek için birden fazla kategori ve yiyecek ekleyebilir. Yiyecek bilgisi için kullanıcı (Yönetici Panelinden) yiyecek detayı, yiyecek fotoğrafı, yiyecek ücreti ekleyebilir. Bununla birlikte kullanıcı vitrinde göstermek için yiyecek seçebilir.

<p align="center">
  <img src="https://github.com/ezranbayantemur/restaurantProject/blob/master/gifs/tr.gif" width="360" height="574" />
</p>

*Test cihazı Samsung Galaxy Tab A SM-T287*

## Kullanılan Paketler
- `react-native-router-flux` Bütün uygulama toplamda üç view (ekran)'dan oluşuyor. `src/pages`.
- `react-native-swiper` vitrin için.
- `firebase` veritabanı desteği için.

Veri depolaması için Firestore kullandım çünkü hızlı ve neredeyse veri depolaması için ücret almıyor ( [Firebase ücretlendirmesi için](https://firebase.google.com/pricing) ). 
Bu proje için Firestore bütün verileri "categories" ve "foods" adında iki tane koleksiyonda NoSQL veri tipinde tutmakta. Bütün yiyecekler/içecekler "foods" koleksiyonunda saklanıyor. Uygulamanın ilk açılışında vitrin ve kategori listesi verileri Firestore'dan çekiliyor. Herhangi bir kategori seçildiğinde ilişkili bütün yiyecekler (*category id'si seçilen kategorinin id'si ile aynı olan bütün yiyecekler*) ekranda gösteriliyor. Eğer müşteri bir yiyeceğe tıklarsa, detay sayfası seçilen yiyeceğin bilgisini ekranda gösteriyor.


React Native için oldukça temel bir örnek fakat geliştirilebilir. Veri yapılandırmasını özel olduğu için kaldırdım fakat veri bağlantı fonksiyonları hala durmakta. Aynı zamanda yapıyı izah etmesi için olabilidiğince açıklayıcı yorum satırları ekledim.

### Not
Google Firebase'in (Cloud Firestore ve Cloud Storage) 5.0.3 versiyonunu kullandım. Son versiyon React Native'in 0.55.4'üncü versiyonunda hata veriyor. Uygulamayı Windows üzerinde yaptım ve şu anlık React Native'in son versiyonu Windows'ta çalışmıyor.

(Yönetici Paneli eklenecek)

Daha fazla özellik yakın zamanda eklenecek.

Eğer herhangi bir sorunuz ya da tavsiyeniz varsa [issue](https://github.com/ezranbayantemur/restaurantProject/issues/new) açmaktan çekinmeyin.

**Görüşmek üzere !**
