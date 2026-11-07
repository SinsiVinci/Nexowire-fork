# NEXOWIRE EKİP PANOSU — P004
Tarih: 2026-11-07 (Europe/Istanbul) | ŞEF: SinsiVinci/Nexowire-fork `ekip`
Kaynak: [22 açık sorun](https://github.com/Naveax/Nexowire/issues) · [hedef main](https://github.com/Naveax/Nexowire/tree/main) · [ekip protokolü](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/PROTOKOL.md)

## ÖMER–ŞEF ÇALIŞMA MUTABAKATI — 2026-11-07
- **P004'teki görev kimlikleri ve sahipler K01–K20 için aynen devam eder:** T-255…T-374 (**120 ayrı yeni görev**), HAVUZ T-375…T-394 (**20 yedek**). P004'te görev tamamlanması eklenmedi; ilerleme **0/120 yeni görev**. Daha önce birleştirilmiş #1066/#1070/#1071 kaynak işleri bu paydaya ve paya GİRMEZ.
- **Ömer'in çalışma dalı:** [#1096](https://github.com/Naveax/Nexowire/pull/1096) açık Draft, exact HEAD `02bf1004646620198719a7f441e7d8ce870f4d38`, 310 değişen dosya. CORE, Broker, Windows Agent, SQLite Hub ve Connection v2 koordinasyonu Ömer'in. Özellikle `src/agent/process-manager.ts` (**#540 kaynak çözümü**) ve `.github/workflows/ci.yml` bu PR'da değiştiğinden kölelerin bu dosyaları düzenlemesi YASAK; bağımsız KNN test/doküman çalışması devam eder.
- KNN P004'teki kendi dosya alanlarıyla **#1096 doğrudan path çakışması göstermiyor** (310 dosyanın listesi karşılaştırıldı); ancak `#1068` hâlâ açık Draft olduğu için K01–K04 web/CSS source çakışması uyarısı korunur. Çakışma tespit edilirse hiçbir dalı zorla merge etme; KNN raporunda iki PR, iki SHA ve dosya yoluyla ŞEF'e ilet, ŞEF Onur üzerinden Ömer'e kısa bilgi verir.
- **Owner kabul bildirimi:** Ömer'in iletisinde #1096 için **60/60 yerel PASS**, Windows Node 22/24 kabulü PASS, canlı Work-PC CORE + Hub + Agent çalışıyor bilgisi var. **Bu iletinin yerel 60/60 ve cihaz iddiaları ŞEF tarafından fiziksel olarak tekrar çalıştırılmadı.** GitHub exact-HEAD #1096 check-runs ilk sayfada **17 success, 6 skipped, 1 in_progress** (browser-live) gözlendi. Taslak/NO-GO ve tamamlanmamış test varken üretim kabulü veya genel PASS ilan etme.
- **CI tekrarını önle:** Önce PR exact commit SHA'sı, ilgili workflow run/check'in devam edip etmediği ve gerçek job sonuçlarını oku. Aynı SHA için koşu zaten başladıysa yeniden dispatch etme; eski SHA'nın PASS'i yeni SHA için kanıt değildir. `skipped` = `PASS` değil; canlı cihaz gerekli ise `NOT_RUN/WAITING_PHYSICAL` kullan.
- **#1006 ortak kanıt yolu:** Yeni bir T-ID ancak ilgili gerçek issue #540/#588/#539/#485/#487 alt problemi, kaynak commit/PR, test komutu, exact SHA ve CI/cihaz kabul sınırlarıyla tamamlandığında #1006 takip kayıtlarına **aynı kanıtı bağlanabilir biçimde** aktarılacak. Şu anda yeni P004 işi bitmediği için #1006'ya sahte bitiş yorumu yazılmadı. #1006 mevcut P0 release NO-GO şartları sürer.
- **Öncelik:** Gerçek hatayı kanıtla, güvenli koda düzeltme yap, tekrar test et. Çekirdek dışı özellik geliştirmeyi gereksiz durdurma; yeni genel yasak yok. Ömer'in native/CORE/auth/SQLite alanları ise mevcut sahiplik sınırında kalır.

## Hedef, ilerleme, kritik yol, süre
- **Yeni odak: Ömer'in açık sorunları.** 2026-11-07 anlık envanterinde **22 açık issue** var. Bunların bir bölümü şemsiye işler ve büyük bölümü doğrudan güvenlik/CORE/Windows yetki alanı. Bütün 22'yi 20 bağımsız kod görevi gibi saymak YANLIŞTIR.
- **İlerleme göstergesi:** issue odaklı yeni P004 alt işleri **0/120 doğrulanmış tamam** (yeni atama). Açık 22 issue'nun **0'ı bu incelemede yeni kapatıldı**; ürün genel yüzde ilerlemesi bilinmiyor. Önceki P001/P002 yerel işler ve upstream koordinatör birleşmeleri arşivde: gerçek ürün kaynak ilerlemesi vardır; tek başına issue kapanışı değildir.
- **20/20** köle kayıt dosyası P002'den sonra yazıldı (K16 Adım 3 dahil). 34 kayıt commit'i işlendi; köle raporları 1 Kasım kaynaklı, 7 Kasım'da yeni çalışma henüz kanıtlanmadı.
- **Yetki:** `SinsiVinci` hedefte **write**. Fork `main`, 7 Kasım'da upstream `main@4e7db16f4233048a956664bef6b607781eb63fb7` noktasına **27 commit, yalnız fast-forward** ile eşitlendi. Kaynak değişince önce yeni HEAD'i yeniden doğrula.
- **Eski PR gerçeği:** 36 köle kaynak PR'ından **6 açık Draft** (#1010, #1011, #1015, #1016, #1030, #1035); **30 kapalı, doğrudan merge edilmedi**. Fakat ilgili kaynakların bir kısmı Ömer'in #1054/#1055/#1057/#1058/#1059/#1061/#1063/#1066/#1070/#1071 birleşmeleriyle gerçek `main`e taşındı. Özellikle UI kaynakları için owner [#1068](https://github.com/Naveax/Nexowire/pull/1068) hâlâ **açık Draft**. Kapalı kaynak PR'ı otomatik kayıp ya da tamamlandı sayma; içerik/sha karşılaştır.
- **Kilometre taşları:** M0 22 issue ve mevcut PR/owner ayrımı ✓; M1 20 güvenli iş alanı ve P004 ✓; M2 ilk üç gerçek sorun için tekrar üretilebilir hata kanıtı ☐; M3 ilk küçük non-core düzeltme PR'ı exact-HEAD CI yeşil ☐; M4 ana dala güvenli birleşme + ilgili issue kabulü ☐.
- **Kritik yol:** #540 Windows süreç ağacı, #588 büyük dosya aktarımı, #539 yanlış başarı/teşhis gösterimi; owner'ın kritik koduna çarpmadan izole test/UX iyileştirme. #1006 etrafındaki gerçek CI ve #1068 UI entegrasyonu bekleyen bağımlılıklar.
- **ETA:** Yeni ekibin ilk bağımsız test/düzeltme paketine **1–3 iş günü tahmini** (20 sohbet yeniden çalışırsa, izinli kod alanları ve CI yeşilse). Açık 22 issue'nun tamamının kapanış süresi **ölçülemez**: fiziksel Windows, CORE/authorization ve deploy kabulü Ömer'in ayrı alanıdır. Bu bir söz değil.

## Öncelikli hata analizi ve karar
| Sıra | Issue | Somut problem | Bizim güvenli teslimimiz | Kritik kod sahibi / gerçek kapanış |
|---|---|---|---|---|
| P1 | [#540](https://github.com/Naveax/Nexowire/issues/540) | Windows'ta `taskkill` başarılı görünürken alt süreç canlı kalabiliyor; 11 test PASS olsa bile süreç kapanmıyor. | K16 izole negatif test, K20 tekrar/kanıt, UI için yanlış başarı kaydı. | ProcessManager/native yaşam döngüsü Ömer; gerçek Windows süreç çıkışı kanıtı gerekli. |
| P1 | [#588](https://github.com/Naveax/Nexowire/issues/588) | Yaklaşık 220 KB üzeri dosyada aktarım tıkanması; devam/tekrar ve veri bütünlüğü. | K19 aktarım kullanıcı sonuç testi, K18 güvenilir sayımlar; kırılma matrisi. | Hash, artifact, yetki, güvenli resumable aktarım çekirdeği Ömer. |
| P1 | [#539](https://github.com/Naveax/Nexowire/issues/539) | 22 güvenilirlik alt sorunu; özellikle R01 hata kaynağı, R11 doğru ekran, R17 ortam teşhisi, R18 süreç durumu, R22 doğrulama. | UI hataları, doküman, bağımsız negatif test ve CI kanıtı. | R02/03/04/05/09/10/14/15/19/20 gibi çekirdek/izin alt işleri Ömer. |
| P2 | [#485](https://github.com/Naveax/Nexowire/issues/485) | Tek tık kurulum ve eşleştirme sırasında kullanıcıya doğru yardım/hata metni. | K01/K02/K06/K07/K10 görünüm, kurulum anlatımı ve test. | Gerçek imzalı kurucu/cihaz enrollment Ömer; #269 da korumalı. |
| P2 | [#487](https://github.com/Naveax/Nexowire/issues/487) | Ölçek, adil kullanım, maliyet ve uzun dönem kabulü. | K11/K12/K18 offline ölçüm/kaynak doğrulama; #1070'daki teslimleri tekrar üretmeme. | Gerçek servis/ödeme/kapasite kabulü Ömer. |
| GATE | [#1006](https://github.com/Naveax/Nexowire/issues/1006) | Açık PR ve CI kanıtı, canlı cihaz ve release NO-GO durumları. | K13/K14/K20 SHA, test işi ve merge risk denetimi. | Canlı CORE/release/onay ayrı; 'action_required' PASS değildir. |

## Çalışılmayacak kritik sorunlar
- **Doğrudan müdahale yasak:** #1001 (native journal/PID), #974 (WAL başlangıç), #587 (geri alma/veri bütünlüğü), #617/#323/#322 (ayrıcalıklı Windows/CORE), #402 (ekran izolasyonu), #486/#484 (ödeme/kota/kimlik), #265 (canlı yönlendirici), #269 (kurucu imza), #812'nin gerçek izin hesabı, #780'in Git sandbox/CORE güvenlik kısmı, #482'nin kritik S1–S4 kısımları.
- **#271 özel ON HOLD:** #481 owner handoff içindeki açık durdurma kararı geçerli; ACL değişimi yapma.
- Kritik issue'ları **salt-okunur izlemek serbest**, ama kapanmış saymak, issue kapatmak veya Ömer'in aktif PR dosyasını değiştirmek yasak. Ömer'in yeni açık Draft'ları #1068, #1080, #1085, #1086–#1096 ve diğerleriyle çakışma kontrolü zorunlu.

## Uygulama sırası ve tek sahiplik
1. Her köle PROTOKOL V002 + PANO P004 + kendi KNN kaydını okur, current upstream HEAD ve ilgili issue/PR'ı tekrar kontrol eder. Eski görevleri korur ama **P004 yeni AKTİF ve KUYRUK** önceliklidir. Birleştirilmiş eski içerik tekrar yazılmaz.
2. Bir dosyanın tek yazarı vardır. K01–K04 web kaynakları **#1068 ile örtüştüğünden** mevcut durumda önce sadece inceleme/test; owner tamamlayınca eksik davranış kalmışsa düzeltme. K13 `ci.yml`ye dokunmaz. K11 CSV ile K18 JSON sahipliği ayrıdır.
3. Her işte: hata örneği → en küçük güvenli değişiklik/test → aynı commit için test ve CI → PR → hedefte SHA/dosya karşılaştırması → gerçek kabul. `BITTI-YEREL` issue kapandı demek değildir.
4. 1 aktif + **5 derin kuyruk**; bekleyen bağımlılığa takılınca sonraki bağımsız işi yap. Kod dalı fork'ta `kNN/konu`, doğrudan **güncel upstream main**den; `ekip` dalına asla kod taşıma. Görevin tek sahibi PANO'daki KNN.
5. Yazma izni var diye korumayı/CI'yı atlama. **Sadece non-core, çakışmasız, gerçek job'ları başarılı ve incelemesi bitmiş PR** ana dala gidebilir. Ömer'in aktif bütünleştirme PR'larını otomatik merge etme. Karar ŞEF tarafından tek tek kayıtlanır.

## KÖLELER — her görev için kimlik / sahip / bitiş
Genel **bitti tanımı:** İlgili issue'ya bağlı somut test/kod/belge farkı, kaynak PR/commit, exact-HEAD test sonucu, gerekirse CI ve gerçek cihaz `NOT_RUN`; yetki sınırı içinde kalması. T-255…T-374 yeni, P001/P002 T-ID'leri yeniden kullanılmaz.

### K01 — Bağlanma ekranı ve hata açıklığı
- ROL/ALAN: `web/connect.html, web/connect.js; test/delegated/k01/** (yalnız sunum)`
- İLGİLİ ISSUE: #485, #539/R01. SAHİPLİK/BAĞIMLILIK: #1068 owner entegrasyonu sonuçlanana dek aynı web dosyalarını değiştirme.
- **AKTİF: T-255** — #485/#539: güncel main ile #1011 ve #1068 bağlanma ekranının farkını salt-okunur incele; yalnız eksik kullanıcı hatasını kanıtla [YENİ]
- **KUYRUK (5):**
  - T-256 — #485: kopan bağlantıda 'bağlı' etiketinin kalmaması için bağımsız UI negatif test paketi [YENİ]
  - T-257 — #539/R01: iptal, zaman aşımı, geçersiz adres ve erişilemeyen servis mesajlarını ayrı sunum testiyle doğrula [YENİ]
  - T-258 — #485: tekrar denemede çift tıklama ve eski cevap yarışı için tarayıcı-olmayan regresyon [YENİ]
  - T-259 — #539/R11: bağlantı sonucu UNKNOWN ise 'başarılı' yazmayan ekran durum matrisi [YENİ]
  - T-260 — #485: gerçek tarayıcı olursa dar ekran/odak/görüntü kabulünü kanıtla; yoksa NOT_RUN [YENİ]

### K02 — Dar ekran ve ortak görünüm
- ROL/ALAN: `web/styles.css; test/delegated/k02/**`
- İLGİLİ ISSUE: #485, #539/R11. SAHİPLİK/BAĞIMLILIK: #1068 web/CSS PR'ı aktif: aynı CSS yolu üzerinde yeni kodu beklet.
- **AKTİF: T-261** — #485: #1010 CSS kapsamının #1068 ile ana dala taşınıp taşınmadığını SHA bazında karşılaştır [YENİ]
- **KUYRUK (5):**
  - T-262 — #539/R11: 320/375/768 pikselde taşma/uzun hata metni için yalnız K02 testlerine regresyon ekle [YENİ]
  - T-263 — #485: dar ekranda ekran okuyucu odağı ve görünür odak sınırlarının CSS testini ekle [YENİ]
  - T-264 — #539: %200/%400 yakınlaştırmada uzun cihaz adı/URL için offline görünüm testi [YENİ]
  - T-265 — #485: renk kontrastı ve azaltılmış hareket tercihi için CSS negatif senaryo [YENİ]
  - T-266 — #539: #1068 sonrası gerçek tarayıcıyla dört görünüm ekran kanıtı; yoksa NOT_RUN [YENİ]

### K03 — Ana panelde doğru durum
- ROL/ALAN: `web/index.html, web/app.js (yalnız UI); test/delegated/k03/**`
- İLGİLİ ISSUE: #539/R11/R18, #812. SAHİPLİK/BAĞIMLILIK: #1068 K03 paneline dokunuyor: sonucu gözlemeden aynı yolları değiştirme; #812 yetki hesabına dokunma.
- **AKTİF: T-267** — #539: #1016/#1068 durum ekranı değişikliklerinin current main'e girip girmediğini kanıtla [YENİ]
- **KUYRUK (5):**
  - T-268 — #539/R18: devam ediyor/başarılı/başarısız/bilinmiyor durumlarını aynı ekranda ayıran negatif test [YENİ]
  - T-269 — #812: yerel izin ile fiilî kontrol uyumsuzluğunda yanlış kesinlik vermeyen yalnız görünüm fixture'ı [YENİ]
  - T-270 — #539: gecikmiş cevap yeni cihazın durumunu ezmesin diye yarış testini güncelle [YENİ]
  - T-271 — #539: 401 sonrası önceki müşterinin sayısının ekranda kalmaması regresyonu [YENİ]
  - T-272 — #539: tarayıcı/klavye ile cihaz kartları ve erişilebilir ad kabulü, mümkün değilse NOT_RUN [YENİ]

### K04 — Yönetim ekranında güvenilir göstergeler
- ROL/ALAN: `web/admin.html, web/admin.js (sunum); test/delegated/k04/**`
- İLGİLİ ISSUE: #539/R11/R18. SAHİPLİK/BAĞIMLILIK: #1068 K04 admin dosyalarına dokunuyor; entegrasyon sonucu netleşene kadar test ve denetim.
- **AKTİF: T-273** — #539: #1015/#1068 yönetim ekranındaki durum geri bildirimlerinin ana dalda eşini kontrol et [YENİ]
- **KUYRUK (5):**
  - T-274 — #539/R11: bozuk/eksik/negatif sayacı asla sağlıklı sistem saymayan negatif test [YENİ]
  - T-275 — #539/R18: tamamlandı/çalışıyor/bilinmiyor etiketlerinde yanıltıcı başarı tespiti [YENİ]
  - T-276 — #539: bağlantı hatası ve yenileme sırasında eski ölçüm değerlerini temiz gösteren test [YENİ]
  - T-277 — #539: idari ekran uzun tablo/etiket ve küçük ekran semantik kontrolü [YENİ]
  - T-278 — #539: klavye/ekran okuyucu gerçek kabulü; Windows/NVDA yoksa NOT_RUN [YENİ]

### K05 — Bağımsız erişilebilirlik kontrolü
- ROL/ALAN: `test/delegated/k05/**; scripts/delegated/k05/**; docs/delegated/qa-accessibility-k05/**`
- İLGİLİ ISSUE: #539/R11, #485. SAHİPLİK/BAĞIMLILIK: K01–K04 kaynak dosyalarını düzeltme; yalnız negatif test ve bulgu kaydı.
- **AKTİF: T-279** — #539: #1068 web arayüzündeki hata/duyuru alanlarını bağımsız K05 taramasıyla ölç [YENİ]
- **KUYRUK (5):**
  - T-280 — #485: bağlanma/onboarding klavye akışını HTML örnekleriyle negatif test et [YENİ]
  - T-281 — #539: yinelenen cihaz ve düğme isimleri için erişilebilir ad tekilliği kontrolü [YENİ]
  - T-282 — #539: dinamik panel rol/status/alert alanlarının gerçek hata metniyle eşleşme testi [YENİ]
  - T-283 — #485: dar ekran ve uzun dil metinleri için okunabilirlik kontrol matrisi [YENİ]
  - T-284 — #539: raporlanan bulguları tekil sahibi K01–K04'e bağlantılı olarak ilet; kaynak kodlarına dokunma [YENİ]

### K06 — Windows kurulumunun anlaşılır olması
- ROL/ALAN: `docs/INSTALL_WINDOWS.md, docs/CHATGPT_INSTALL_PROMPT.md; test/delegated/k06/**`
- İLGİLİ ISSUE: #485, #269. SAHİPLİK/BAĞIMLILIK: #269 imza/installer/deploy kodu yasak; #1066 ile taşınan eski belgeyi tekrar üretme.
- **AKTİF: T-285** — #485: #1066 sonrasında mevcut Windows kurulum belge durumunu gerçek main ile eşleştir [YENİ]
- **KUYRUK (5):**
  - T-286 — #485: kurulumda 'oluştur/bağla' başarısızlığını güvenli ve doğrulanabilir adımlarla belge testine bağla [YENİ]
  - T-287 — #485: Windows/ChatGPT hesap karışıklığında teşhis karar ağacını salt-okunur yaz [YENİ]
  - T-288 — #269: imzalı kurucu iddiasını gerçek yayın kanıtından ayıran belge negatif testi [YENİ]
  - T-289 — #485: kurucu güncelleme/yedekleme belgelerinde olmayan otomatik onarım vaadini temizle [YENİ]
  - T-290 — #485: okunamayan sayfa içi bağlantı ve desteklenen sürüm bilgisi için kılavuz testi [YENİ]

### K07 — Kendi sunucusunu kullananların rehberi
- ROL/ALAN: `docs/SELF_HOST.md, docs/DEPLOYMENT_ONBOARDING.md; test/delegated/k07/**`
- İLGİLİ ISSUE: #485, #539/R17. SAHİPLİK/BAĞIMLILIK: Cloudflare, canlı tünel ve yetki yönetimi yasağı; #1066 içeriklerini tekrarlama.
- **AKTİF: T-291** — #485: #1066 entegre edilmiş self-host belge parçasını SHA ile doğrula [YENİ]
- **KUYRUK (5):**
  - T-292 — #539/R17: desteklenen işletim sistemi/opsiyonel araç ayrımını belgeye doğru yansıt [YENİ]
  - T-293 — #485: localhost ve dış bağlantı adresini karıştırmayan kurulum negatif testi [YENİ]
  - T-294 — #539: kurulum sonrası salt-okunur sağlık kontrol komutları için belge doğrulaması [YENİ]
  - T-295 — #485: güvenlik etkisi olan komutları kullanıcı onayı gerektirir diye doğru işaretle [YENİ]
  - T-296 — #539: ortam yoksa denenen örnekler için NOT_RUN/UNKNOWN sınırlarını netleştir [YENİ]

### K08 — Bilgisayarla bağlantı hata sözlüğü
- ROL/ALAN: `docs/ARCHITECTURE.md, docs/MCP_SURFACE.md; test/delegated/k08/**`
- İLGİLİ ISSUE: #539/R01/R13/R18, #812. SAHİPLİK/BAĞIMLILIK: Kimlik, MCP tool yetkisi, secret ve güvenlik cevabı değiştirme; salt-okunur örnek.
- **AKTİF: T-297** — #539: #1066 MCP belge birleşmesini main üzerinde tekrar doğrula [YENİ]
- **KUYRUK (5):**
  - T-298 — #539/R01: hata kaynağı, kullanıcı mesajı ve destek kanıtı arasındaki farkı test örneğiyle eşleştir [YENİ]
  - T-299 — #539/R13: sağlayıcı ret cevabını yetki onayı gibi göstermeyen örnek sözleşme yaz [YENİ]
  - T-300 — #539/R18: 'çalışıyor/sonuç bilinmiyor/tamamlandı' durum sözlüğünü tutarlı yap [YENİ]
  - T-301 — #812: yerel-gözlemlenen durum ile gerçek yetki kaynağı ayrımını dokümanda belirt [YENİ]
  - T-302 — #539: MCP örneklerinin güncel şema ve isimlerle eşleşmesini kendi testiyle doğrula [YENİ]

### K09 — Sorunların ürün yol haritası
- ROL/ALAN: `ROADMAP.md, docs/SCALE_V2_ROADMAP.md; test/delegated/k09/**`
- İLGİLİ ISSUE: #539, #481, #780, #482. SAHİPLİK/BAĞIMLILIK: #780 Git sandbox ve güvenlik çekirdeğine girme; yalnız yol haritası/kanıt.
- **AKTİF: T-303** — #539: 22 açık issue içindeki 22 güvenilirlik alt başlığını mükerrer olmadan yol haritasına bağla [YENİ]
- **KUYRUK (5):**
  - T-304 — #481: eski master handoff ile güncel kapatılmış issue ve PR'ların uyumsuz noktalarını bul [YENİ]
  - T-305 — #780: coding-agent kullanıcıya görünen fakat güvenlik dışı eksikleri kanıta göre ayır [YENİ]
  - T-306 — #482: S1–S5 tamamlandı iddialarını source-only/CI/physical kabul aşamalarına ayır [YENİ]
  - T-307 — #539: K09 eski P002 yerel WIP'i baştan yayımlama; main'de mevcut kaynakla farkı kontrol et [YENİ]
  - T-308 — #539: yol haritasındaki bitmiş iddiasını gerçek birleşmiş commit/CI verisine bağla [YENİ]

### K10 — Gerçek tarayıcıdan bağımsız ekran denetimi
- ROL/ALAN: `web/README.md; scripts/delegated/k10/**; test/delegated/k10/**; docs/delegated/browser-evidence-k10/**`
- İLGİLİ ISSUE: #539/R11, #485, #812. SAHİPLİK/BAĞIMLILIK: Sistem izinlerini veya tarayıcı güvenliğini aşma; gerçek sonuç olmadan PASS deme.
- **AKTİF: T-309** — #539: #1068 kaynaklarına karşı bağımsız gerçek tarayıcı koşusu mümkün mü kontrol et [YENİ]
- **KUYRUK (5):**
  - T-310 — #485: bağlantı akışı için üç kullanıcı durumu ekran görüntüsü kanıt seti [YENİ]
  - T-311 — #812: konsol izin göstergelerinin çelişkili durumunu salt-okunur tarayıcı senaryosuna dök [YENİ]
  - T-312 — #539: ekran görüntüsü yokken PASS raporlamayı reddeden test [YENİ]
  - T-313 — #539: tarayıcı fixture'ında dosya yolu/kaynak sızdırma negatifleri [YENİ]
  - T-314 — #485: Windows ve dar ekran gerçek uygulama gözlemi; ortam yoksa NOT_RUN [YENİ]

### K11 — Kapasite ve maliyetin doğru hesaplanması
- ROL/ALAN: `scripts/report-s5-cost-matrix.ts; src/ops/scale-s5-cost-envelope.ts (offline); test/delegated/k11/**`
- İLGİLİ ISSUE: #487, #539/R12. SAHİPLİK/BAĞIMLILIK: Faturalama, gerçek plan fiyatı veya ödeme hesabına müdahale yok.
- **AKTİF: T-315** — #487: #1070'deki K11 test ve rapor içeriklerinin main üzerindeki exact eşini doğrula [YENİ]
- **KUYRUK (5):**
  - T-316 — #487: fiyat teklifi eksikken maliyeti sıfır saymayan offline regresyon [YENİ]
  - T-317 — #487: farklı para birimlerini kıyaslamada yanıltıcı toplam üretmeme testi [YENİ]
  - T-318 — #539/R12: ölçümsüz kapasite için 'UNKNOWN' ve gerekçe alanı testleri [YENİ]
  - T-319 — #487: günlük kullanım, sınır aşımı ve bozuk veride rapor güvenilirliği paketi [YENİ]
  - T-320 — #487: gerçek sağlayıcı maliyeti ölçülmediğinde PASS iddiası yapmayan örnek rapor [YENİ]

### K12 — Yük ve bağlantı dayanıklılık denemeleri
- ROL/ALAN: `scripts/bench-s5-loopback-ws-capacity.ts; scripts/bench-s5-loopback-reconnect-storm.ts; test/delegated/k12/**`
- İLGİLİ ISSUE: #487, #539/R12/R06. SAHİPLİK/BAĞIMLILIK: Yalnız sınırlı localhost deneyi; üretim servisleri/CORE yok; K18 CSV koduna girme.
- **AKTİF: T-321** — #487: #1070 içinde taşınmış K12 testlerini current main'de yeniden çalıştır [YENİ]
- **KUYRUK (5):**
  - T-322 — #539/R06: tekrar bağlanma fırtınasında sonlandırma ve kaynak bırakma negatifleri [YENİ]
  - T-323 — #487: az örnekli ölçümde yüzde dilim raporlarının yanlış kesinlik üretmemesi [YENİ]
  - T-324 — #487: benchmark iptal/timeout olunca açık soket kalmaması kontrolü [YENİ]
  - T-325 — #487: CSV üretimi başka sahibin dosyasındaysa yalnız JSON kanıtını üret ve bağımlılığı raporla [YENİ]
  - T-326 — #539/R12: yerel yük testinin gerçek müşteri kapasitesi olmadığını gösteren kabul verisi [YENİ]

### K13 — Otomatik kontrollerin güvenilirliği
- ROL/ALAN: `.github/workflows/delegated-noncore.yml; scripts/delegated/k13/**; test/delegated/k13/**`
- İLGİLİ ISSUE: #1006, #539/R22. SAHİPLİK/BAĞIMLILIK: Ömer'in .github/workflows/ci.yml dosyasında aktif #1068 değişikliği var; çakışma/secret/yetki genişletme yasak.
- **AKTİF: T-327** — #1006: güncel main CI'da ilk 20 ekip testinin gerçekten keşfedildiğini read-only denetle [YENİ]
- **KUYRUK (5):**
  - T-328 — #539/R22: bitmiş ama 0-job olan koşuları yanlış başarı saymayan K13 aracı [YENİ]
  - T-329 — #1006: 22/24 Node ve Windows sonuçlarının aynı commit üstünde olma şartını test et [YENİ]
  - T-330 — #539: offline/gerçek cihaz/yayın kanıtını ayrı tutan CI rapor biçimi [YENİ]
  - T-331 — #1006: fork CI betiklerini upstream ile çakışmadan çalıştırma tasarımını sınayıp belgele [YENİ]
  - T-332 — #1006: kritik olmayan PR için yeşil CI ile reddedilmiş/kapanmış CI'yı kesin ayır [YENİ]

### K14 — Fork eşitlemesi ve çakışmasız birleştirme
- ROL/ALAN: `scripts/delegated/k14/**; docs/delegated/integration-k14/**`
- İLGİLİ ISSUE: #1006, #539/R22. SAHİPLİK/BAĞIMLILIK: Source PR #1068 ve Ömer'in aktif kod dalları üzerinde değişiklik/merge yok; salt-okunur inceleme.
- **AKTİF: T-333** — #1006: açık kalan altı SinsiVinci PR'ının #1068 ve main ile tekrarlarını raporla [YENİ]
- **KUYRUK (5):**
  - T-334 — #1006: 30 kapanmış Draft'ın hangi birleşmiş üst PR'a geçtiğini SHA/PR ile haritala [YENİ]
  - T-335 — #539: 201 dosyalı yeni upstream farkı sonrası korumalı dosya çakışmalarını denetle [YENİ]
  - T-336 — #1006: fork main senkronu için yalnız fast-forward ve expected SHA doğrula [YENİ]
  - T-337 — #539: gerçek CI 7/7 sonucu olan, fakat hâlâ taslak kalan PR listesini ayrı işaretle [YENİ]
  - T-338 — #1006: ŞEF'e küçük güvenli PR önerisi sun; merge ve issue kapatma yetkisini otomatik kullanma [YENİ]

### K15 — Doğru cihazın seçildiğini kanıtlama
- ROL/ALAN: `test/delegated/k15/**; docs/delegated/device-ux-k15/**`
- İLGİLİ ISSUE: #539/R11, #812, #485. SAHİPLİK/BAĞIMLILIK: Auth veya cihaz seçimi gerçek yetkisini değiştirme; K03'ün panel koduna dokunma.
- **AKTİF: T-339** — #539: #1068 ana dal entegrasyonu sonrası iki aynı adlı cihaz negatif testini tekrar çalıştır [YENİ]
- **KUYRUK (5):**
  - T-340 — #812: gösterilen erişim etiketinin gerçek izin kanıtı olmadığını ayıran test [YENİ]
  - T-341 — #539: çevrimdışı/çevrimiçi/bilinmiyor cihaz kartı durum testi [YENİ]
  - T-342 — #485: ilk kurulumda cihaz seçilmemişse yanlış başarıyı önleyen görünüm testi [YENİ]
  - T-343 — #539: erişilebilir cihaz adı, kimlik ayrımı ve listede sıralama negatifleri [YENİ]
  - T-344 — #539: K03 kaynak bulgularını kendi dosyasında kanıtla, sahibine yönlendir [YENİ]

### K16 — Ortam sağlığı ve Windows durdurma kanıtı
- ROL/ALAN: `src/diagnostics/environment-doctor.ts (salt-okunur); scripts/run-environment-doctor.ts (salt-okunur); test/delegated/k16/**`
- İLGİLİ ISSUE: #539/R17, #540. SAHİPLİK/BAĞIMLILIK: #540 ProcessManager/native process kill kodu yasak; canlı makineye veya gerçek sürece test çalıştırma.
- **AKTİF: T-345** — #539/R17: kapatılan #1041 testinin #105x birleşmesiyle main'e aktarılıp aktarılmadığını kontrol et [YENİ]
- **KUYRUK (5):**
  - T-346 — #540: Windows taskkill 0 olmayan çıkış kodu için izole test fixture'ı ve beklenen sözleşme çıkar [YENİ]
  - T-347 — #540: alt süreç canlı kalırken 'başarı' denmemesini offline testle göster; PROD/gerçek PID yok [YENİ]
  - T-348 — #539: environment doctor çıktısında fiziksel test gerekliliğini koruyan negatif test [YENİ]
  - T-349 — #539: secret içeren hata çıktısının maskelenmesini sentetik testle doğrula [YENİ]
  - T-350 — #540: tam Windows kabulünde hangi kanıtların gerektiğini dosya sahibi için raporla [YENİ]

### K17 — Beceri kataloğunun tutarlılığı
- ROL/ALAN: `src/skills/manifest.ts, src/skills/registry.ts (yalnız meta); test/delegated/k17/**`
- İLGİLİ ISSUE: #780, #539/R17. SAHİPLİK/BAĞIMLILIK: #780 sandbox/izin/sahiplik çekirdeğine dokunma; #1030 OPEN Draft önce main farkını kontrol et.
- **AKTİF: T-351** — #780: #1030 open PR'ın current main ile tekrarlı testlerini ayır ve inceleme notu çıkar [YENİ]
- **KUYRUK (5):**
  - T-352 — #539: skill açıklamasında platform destek durumu bilinmiyorsa yanlış destek vaadini engelle [YENİ]
  - T-353 — #780: bozuk manifest alanları ve çift anahtarlı kayıt için meta negatifleri [YENİ]
  - T-354 — #780: katalog içindeki symlink/dizin dışı referansların salt-okunur taraması [YENİ]
  - T-355 — #539: metadata değişikliğinin yetki kapsamını büyütmediğini gösteren test [YENİ]
  - T-356 — #780: açık PR #1080 sandbox sahibinin dosyalarına değmeden yalnız statik katalog eksiklerini raporla [YENİ]

### K18 — Aktarım ölçümlerini dürüst raporlama
- ROL/ALAN: `src/ops/scale-transport-metrics.ts (offline); scripts/report-s5-measured-scenarios.ts; test/delegated/k18/**`
- İLGİLİ ISSUE: #487, #588, #539/R12. SAHİPLİK/BAĞIMLILIK: #588 veri bütünlüğü/aktarım çekirdeği değiştirme; K11 CSV üretimine dokunma.
- **AKTİF: T-357** — #487: #1070'e giren K18 metrik testlerinin main üzerinde exact karşılığını denetle [YENİ]
- **KUYRUK (5):**
  - T-358 — #588: büyük dosya senaryosunda yanlış 100% aktarım göstergesini sentetik ölçümle yakala [YENİ]
  - T-359 — #487: JSON metriklerde NaN/Infinity/negatif değeri UNKNOWN yapma sınır testi [YENİ]
  - T-360 — #539/R12: olmayan gerçek kapasite ölçümü için güven aralığı uydurmama testi [YENİ]
  - T-361 — #487: CSV bağımlılığı K11 ise yalnız kendi JSON alanında kanıt üret ve devret [YENİ]
  - T-362 — #588: kesinti sırasında gönderilen/alınan/teyit edilen baytları ayrı sayan offline fixture [YENİ]

### K19 — Dosya aktarımı kullanıcı deneyimi
- ROL/ALAN: `test/delegated/k19/**; docs/delegated/file-ux-k19/**`
- İLGİLİ ISSUE: #588, #539/R15. SAHİPLİK/BAĞIMLILIK: Transfer, yetki, hash, artifact, WAL kodu yasak; gerçek iki-PC denemesi owner-gated.
- **AKTİF: T-363** — #588: 220 KB üstünde başlayan büyük dosya başarısızlığını güvenli ve tekrarlanabilir salt-okunur matrise dök [YENİ]
- **KUYRUK (5):**
  - T-364 — #588: kesinti sonrası yeniden dene/UNKNOWN/bekle durumları için örnek kullanıcı metni testi [YENİ]
  - T-365 — #588: overwrite talebinde yanlış izin varsaymayan hata senaryosu testi [YENİ]
  - T-366 — #539/R15: kullanıcıya 'tamamlandı' göstermek için gereken bağımsız doğrulama kanıtını tanımla [YENİ]
  - T-367 — #588: Unicode/çok uzun dosya adı ve boyut bilgisi için test fixture'ı [YENİ]
  - T-368 — #588: gerçek iki cihaz/Windows kabulü olmadan çözülmüş demeyen kontrol listesi [YENİ]

### K20 — Sorun takibi ve kanıt denetimi
- ROL/ALAN: `scripts/delegated/k20/**; test/delegated/k20/**; docs/delegated/maintenance-k20/**`
- İLGİLİ ISSUE: #539, #540, #1006, #481. SAHİPLİK/BAĞIMLILIK: Ömer'in issue'larını ve kapanışlarını izinsiz değiştirme; kod üretimi denetim araçlarıyla sınırlı.
- **AKTİF: T-369** — #539: 22 açık issue'yu alt iş/tekil P0/şemsiye olarak güncel kaynakla sınıflandır [YENİ]
- **KUYRUK (5):**
  - T-370 — #540: Windows süreç kalıntısı hatasının kabul ölçütlerini kayıttaki kanıta göre ayrı raporla [YENİ]
  - T-371 — #1006: upstream PR birleşme/kapalı/superseded ayrımını GitHub API'da doğru işleyen test [YENİ]
  - T-372 — #539: 20 işçinin iş-issue eşleşmesi ile tekrarlı atanmış dosyayı raporla [YENİ]
  - T-373 — #481: eski handoff talimatlarında açıkça ON HOLD olan #271'in yanlışlıkla tekrar görevlendirilmesini engelle [YENİ]
  - T-374 — #1006: kabul edilmeyen fiziksel cihaz/CI sonucunun DONE sayılmasına karşı negatif kontrol [YENİ]

## HAVUZ — 20 sahipsiz, güvenli fikir (T-375…T-394)
Aynı işte iki kişi olursa PROTOKOL claim kuralı; önce diğer 19 durum dosyasını kontrol et. Havuz işi ancak kendi izinli dosya/alanında yapılabilir; aksi hâlde öneri kaydı bırak.
- **T-375** · #539 · İşlem durumlarının Türkçe kullanıcı sözlüğünde açık kalan tutarsızlıklarını yalnız docs/delegated altında fixture ile öner. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-376** · #540 · Gerçek Windows süreç ağacı kabulünde exit code / torun PID / sahiplik kanıtı bulunabilirliği için salt-okunur şablon. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-377** · #588 · Büyük dosya aktarımındaki gerçek sürüm sınırlarını kaynak kodu değiştirmeden kararlı biçimde listele. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-378** · #485 · Yeni kullanıcı hata mesajlarının sahte URL/sır yankılamadığını özgün negatif fixture ile doğrula. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-379** · #487 · Gerçek sağlayıcı fiyatı yokken sentetik özetin yanlış ticari sayı üretmediği sınır kontrolü. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-380** · #539 · Eski hata ekranlarında 'başarılı' sözcüğünün kaynak/kanıt eşleşmesi için bağımsız arama raporu. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-381** · #1006 · Açık PR'larda exact HEAD ile CI sonuçlarının aynı bağlamdan geldiğini kontrol eden salt-okunur veri seti. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-382** · #539 · Tekrarlanan UI testlerinin tek ana-dal sürümünde çalıştığını kontrol eden bağımsız test. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-383** · #485 · Onboarding rehberlerinde ölü/değişmiş sürüm bağlantılarının kaynağa dayalı raporu. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-384** · #487 · Ölçüm sütunlarındaki KB/MiB ayrımını belgeleyen doğrulama fikstürü. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-385** · #539 · Farklı işletim sisteminde NOT_RUN ile FAIL ayrımını kalite testine bağla. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-386** · #588 · Aktarımda dosya adına özel karakter içeren test örneği ve açık kabul matrisi. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-387** · #540 · Alt süreç canlı kalıyorsa ana süreç çıkışıyla false PASS karşı örneğini sahiplik ihlalsiz belgele. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-388** · #539 · Açık issue ve ilgili kapalı PR eşleşmesinde source-only / live kanıt ayrımı testi. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-389** · #485 · Daha önce işe yaramayan kullanıcı eşleştirme hatasında belgelenmiş kurtarma adımları testi. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-390** · #1006 · GitHub 100+ PR sayfalamasında sessiz eksik sonuç veren rapor aracına bağımsız negatif. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-391** · #539 · Yarıda kalan işlemde 'succeeded' etiketi göstermeyen örnek kullanıcı metinleri. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-392** · #487 · İnternet erişimi gerektirmeyen sınırlı benchmark örnek raporunun iddia sınırı. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-393** · #780 · Skill katalog kullanıcı açıklamalarının gerçek mevcut yeteneği aşmadığı kaynak raporu. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.
- **T-394** · #539 · Yanlış cihaz seçimi ve yetki durumu karışıklığının ayrı negatif senaryo matrisi. Sahip: BOŞ. Bitti: ilgili izole negatif test/doküman + PR + sonuç.

## ÖNCEKİ İŞLERİN DEVİR DURUMU
- P002'de tamamlandığı yalnız köle tarafından raporlanan işler [ARSIV A003](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/ARSIV.md)'te; downstream alınanlar source-tree karşılaştırmasıyla belirtildi.
- **Eski kısmi/engel:** T-006 (tarayıcı), T-016/017 (panel gerçek görünüm), T-021/022 (admin gerçek görünüm), T-059 (browser), T-071 (K18 CSV bağımlılığı), T-084 (CI/PR), T-086 (cihaz QA), T-133/142/143 (kısmi sunum), T-201 (CI dal yapısı), T-223 (K18 JSON bitmiş, K11 CSV), T-231 (eski kaynak artık main'e gelmiş olabilir), T-179–184 (K09 yerel WIP). Bunlar **silinmedi**, ilgili KNN kaydında izlenecek; yeni issue görevlerinin önüne geçmez.
- T-235 K02 ve K07 tarafından çakışmalı sahiplenilmiş: **K02 küçük numara sahibi**, K07'nin #1034 test çıktısı tarihsel kalır ve T-235 olarak bir daha işlenmez.

## PROJEYE GİDECEKLER — kontrol listesi
- **Açık özgün ekibin Draft'ları:** [#1010](https://github.com/Naveax/Nexowire/pull/1010), [#1011](https://github.com/Naveax/Nexowire/pull/1011), [#1015](https://github.com/Naveax/Nexowire/pull/1015), [#1016](https://github.com/Naveax/Nexowire/pull/1016): bunların hedef dosyaları [owner #1068](https://github.com/Naveax/Nexowire/pull/1068) içinde; K01–K04/K14 **bekleyen değişiklik karşılaştırması** yapar, eski dalları zorla birleştirmez.
- **Açık özgün QA Draft'ları:** [#1030](https://github.com/Naveax/Nexowire/pull/1030) (K17), [#1035](https://github.com/Naveax/Nexowire/pull/1035) (K08): main'e zaten giren testleri ayıkla, bağımsız kalan kanıtı tekrar çalıştır, exact-head yeşil olmadan merge yok.
- **Main'e owner koordinasyonuyla giren tanımlı parçalar:** [#1066](https://github.com/Naveax/Nexowire/pull/1066) (K06/07/08 belgeleri), [#1070](https://github.com/Naveax/Nexowire/pull/1070) (K11/12/18 S5), [#1071](https://github.com/Naveax/Nexowire/pull/1071) (K09), ayrıca #1054/#1055/#1057/#1058/#1059/#1061/#1063 çeşitli QA. Bu işler için ikinci PR üretme.
- **P004 yeni PR'lar:** Her yeni görev, hangi açık issue'nun hangi alt sorununun yanıtı olduğunu PR metninde profesyonel şekilde belirtecek; yalnız kaynak PR = hata çözümü değil, gerekiyorsa issue açık kalacak.

## ONUR'UN LİSTESİ
1. **20 köle sekmesini aynı ortak KÖLE MESAJI ile dolaştır.** Her biri P004 ve PROTOKOL V002'yi okuyarak yeni issue odağında ilerleyecek; ayrı mesaj hazırlamana gerek yok.
2. **Ek yetki istemen gerekmiyor.** `SinsiVinci` hedef repo için `write`. Ömer'e soru/Discord mesajı veya fiziksel Windows testi bugün ekibin ilerlemesinin önkoşulu değil. Gerçek makine kabulü gerektiğinde ayrıca raporlanacak.
