# NEXOWIRE EKİP PANOSU — P006
Tarih: 2026-11-08 (Europe/Istanbul) | ŞEF: SinsiVinci/Nexowire-fork `ekip` | PROTOKOL V005

## Hedef, önemli yol ve ölçülebilir sonuç
- [Nexowire açık sorunları](https://github.com/Naveax/Nexowire/issues): **22 açık issue**. Odak sırası: **[#540](https://github.com/Naveax/Nexowire/issues/540) Windows process cleanup**, **[#588](https://github.com/Naveax/Nexowire/issues/588) büyük dosya**, **[#539](https://github.com/Naveax/Nexowire/issues/539) güvenilirlik**, **[#485](https://github.com/Naveax/Nexowire/issues/485) onboarding**, **[#487](https://github.com/Naveax/Nexowire/issues/487) S5 kapasite/maliyet** ve **[#1006](https://github.com/Naveax/Nexowire/issues/1006) gerçek CI**. Bunlar farklı kabul koşullarıdır; genel bir test PASS tüm issue'yu kapatmaz.
- **Bir önceki dönem (P005):** K01–K20 için 23 yeni ekip commit'i, **19/20 güncel durum** (K03 hâlâ P004). P005 T-395…T-514: **92/120 (%76,7) kaynak/yerel QA teslim**, 28 kısmi/bağımlı; sadece yeni kaynak testleri geçmesi tüm ürünün bitmesi değildir. P005 HAVUZ T-523 K02 yerel teslim; 19 diğer T-515…T-534 sahipsiz.
- P004'ten devralınan ve A004'te kayıtlı **104/120 önceki yerel teslim**, P005 92/120 ile **karıştırılmaz**. Yeni **P006 T-535…T-654 = 120 ayrı görev**, başlangıç 0/120. K03'ün P005 T-407…T-412 aktif kuyruğu korunur; onun altı yeni P006 işi önce yalnız **yedek sıra** olur. Diğer 19 kişinin P006 aktif + 5 kuyruğu hazır. Yeni HAVUZ T-655…T-674 = 20 sahipsiz; önceki 19 boş görev de görünür.
- **Projeye gerçekten giren:** [#1102](https://github.com/Naveax/Nexowire/pull/1102) — upstream `b5a3f884`, S5 hosted kapasiteyi UNKNOWN olarak ayırır; **bu ŞEF DEVAM'da [#1135](https://github.com/Naveax/Nexowire/pull/1135)** — upstream `52d452f717d891eeaf4c2b9aff3c6e1ea68369b0`, pozitif sub-cent offline projeksiyonlarını sıfırlamaz, güvenli hassasiyet sınırı. #1135 exact PR HEAD **7/7 CI başarılı**, açıkça çağrılan S5 seçili testler **57/57 yerel PASS**. **Main push CI son anlık kontrol 6/7 success, browser-live in_progress**; sunucu/cihaz/gerçek provider kabulü değil. Fork `main` upstream ile aynı SHA'ya force olmadan FF.
- **İyi yakalanan otomatik kapanış:** [#1135](https://github.com/Naveax/Nexowire/pull/1135) PR açıklamasında geçen **“cannot close #487”**, GitHub tarafından kapanış komutu sayılarak #487'yi yanlışlıkla kapattı. **Anında yeniden açıldı**, PR açıklamasındaki tetikleyici ifade değiştirildi, issue **OPEN** doğrulandı. PR merge, issue kapatma yetkisi anlamına gelmez.
- Bu dönem 12 yeni kaynak PR #1131…#1142 açıldı; **#1099…#1142 içindeki 42 PR hâlâ Draft** (#1102/#1135 merged). #1141 Node22 CI FAIL, #1118 Node22 CI FAIL, #1130 Node24 CI FAIL, #1120 WSL2 FAIL; #1134 K13 ayrı fork auxiliary CI **4/4 hosted jobs PASS**, ancak ana `.github/workflows/ci.yml` içine alınmamış **altı delegated test** hâlâ ana CI'de keşfedilmiş sayılmaz. Diğer PR'da 7/7 job success yeni testlerin otomatik çalıştığına delil değildir.
- **Kritik dosya kilidi:** Ömer [#1096](https://github.com/Naveax/Nexowire/pull/1096) (CORE/Broker/SQLite/Windows) HEAD `e879ecb8e70a0e798c73c6028400b11e3e8bb4e7`, [#1068](https://github.com/Naveax/Nexowire/pull/1068) (web) HEAD `94d38799e9e4b50fe84f7924e6fc84f90aeba090` açık. Bu alanlara ve `.github/workflows/ci.yml` / `src/agent/process-manager.ts` kaynaklarına müdahale yok. **K01 429/pairing RED, K04 admin 401/403 RED** owner kaynak kabulünü bekliyor; K10 browser, K16 Windows, K18/K19 gerçek Agent-Hub, K11/K12 provider soak kabulü NOT_RUN.
- **Kritik yol:** K13 gerçek test discovery/CI; K20 ve K04 başarısız CI; K01/K04 gerçek owner web RED; K16 #540 ve K19 #588 uçtan uca kanıt. Bu işlerden birinde blok varsa başka bağımsız göreve geç. **Ürün genel ilerleme % ve kesin bitiş süresi mevcut kanıtla ölçülemez**; 22 issue, owner ve fiziksel kabul bağımlılıkları var.

## Çalışma ve kabul kuralları
1. Her KNN her adımda PANO ve kendi durumunu, protokol sürümü değiştiyse V005'i okur. **Sadece kendi dosya yollarına** dokunur. Aktif → 5 kuyruk → uygun sahipsiz HAVUZ.
2. Önce hata kırmızı olarak tekrarlanır, dar düzeltme yapılır, aynı kaynak revizyonunda yeniden test edilir. Kritik/owner kaynak için bağımsız negatif test + exact HEAD/owner notu yaz; owner kodunu değiştirme. Kaynak düzeyi, exact HEAD hosted CI, fiziksel/Windows/provider sonuçlarını **ayrı** kaydet. `NOT_RUN` meşrudur.
3. Havuz claim için diğer 19 KNN kaydı öncesinde ve bitişten önce tekrar okunur; `ÜSTLENDİM` önce kayda commit. Çakışmada küçük KNN tek kredi; çift PR'da farklı QA saklanabilir.
4. ŞEF, CI gerçekten değişen testleri seçip çalıştırdıysa, gerekli 7/7 job sonucu geçerse, owner ile path çakışması ve yanlış issue auto-close tetikleyicisi yoksa güvenli noncore PR'ı birleştirir. Aksi hâlde doğrulama ekler, *toplu merge yok*. Aynı SHA için yeni CI dispatch yok.

## TEK SAHİPLİ KNN GÖREVLERİ — 1 AKTİF + EN AZ 5 KUYRUK

### K01 — #485/#539 bağlantı ekranında gerçek hatalar
- **ROL/ALAN:** web/connect.html, web/connect.js (yalnız #1068 tamamlanınca); test/delegated/k01/**.
- **ÇAKIŞMA:** Ömer #1068 web source'a dokunurken yalnız K01 test/fixture; issue #485 source eksikliği owner'a iletilecek.
- **P005 GERİDEKİ:** T-398, T-399, T-400 (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1114](https://github.com/Naveax/Nexowire/pull/1114).
- **AKTİF T-535:** #485: #1114 opt-in RED boş ve whitespace pairingId/token vakasının owner #1068 güncel HEAD'inde minimal reprodüksiyonunu ve geri dönüş koşulunu sabitle. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-536:** #539: HTTP 429 Retry-After ile 503 bağlantı yok mesajının yanlış birleşmesini tek ekran durum testiyle kırmızıdan yeşile taşı (yalnız izinli test yolu).
  2. **T-537:** #485: bağlantı sürüm farkında v1.0.7/v1.0.8 kurulum çağrısının yanlış CTA üretmediğini kanıtla; K06 belge değişikliği talebini kayda yaz.
  3. **T-538:** #539: iki art arda pairing isteğinde öncekinin geç yanıtının yeni başarıyı ezmediği negatif test.
  4. **T-539:** #485: pairing hatasında token/kimlik bilgisinin DOM hata metnine sızmadığını uzun Unicode örneğiyle denetle.
  5. **T-540:** #485: owner #1068 main'e girdikten sonra K01 kaynak düzeltmesini kendi web yolunda uygula ve hosted/görsel test kanıtını ayrı yaz.

### K02 — #485/#539 küçük ekran CSS ve gerçek tarayıcı
- **ROL/ALAN:** web/styles.css (owner #1068 sonrası); test/delegated/k02/**.
- **ÇAKIŞMA:** #1068 CSS yolu owner tarafından açıkken salt-okunur test; #1126 CI kontrolü.
- **P005 GERİDEKİ:** T-403, T-404, T-405, T-406 (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1131](https://github.com/Naveax/Nexowire/pull/1131), [#1138](https://github.com/Naveax/Nexowire/pull/1138).
- **AKTİF T-541:** #539: #1131 gerçek long-Unicode overflow RED için web/styles.css tek sahipli minimal çözümü owner #1068 kaynak geçince uygula. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-542:** #485: 320/375/768/1024 genişlikte bağlama butonunun odak ve sarma düzenini headless gerçek ekranla çalıştır; yoksa NOT_RUN.
  2. **T-543:** #539: #1138 sahte aynı screenshot/hash kanıtını yetersiz sayan negatif regresyonu CI keşfine bağla.
  3. **T-544:** #485: mobil kurulumu tamamlamayan kullanıcının hata/kurtarma eyleminin ekran dışına çıkmadığı bağımsız ölçüm fixture.
  4. **T-545:** #539: kullanıcı tercihli reduced-motion ve klavye odak çerçevesi CSS birleşim çatışması analizi, K02 yolu dışına çıkma.
  5. **T-546:** #1006: #1131/#1138 exact-head ve nested test gerçekten çağrıldı ayrımını kaydet, kayıpsa ilgili test çalışma adımını kendi dalında ekle.

### K03 — #539/#812 dashboard ve gerçek durum
- **ROL/ALAN:** web/index.html, web/app.js (owner #1068 sonrasında); test/delegated/k03/**.
- **ÇAKIŞMA:** K08 Türkçe status-copy çelişki kanıtı T-375/#1128; owner #1068 web source'u henüz açık.
- **P005 GERİDEKİ:** T-407, T-408, T-409, T-410, T-411, T-412 (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1103](https://github.com/Naveax/Nexowire/pull/1103).
- **AKTİF (korundu): T-407** — P005 eski K03 görevini sürdür; #1068 owner kaynaklarına dokunmadan bağımsız kaynak/test doğrulaması.
- **KUYRUK (korundu, 5):** T-408, T-409, T-410, T-411, T-412 (P005 tanımları önceki PANO commit geçmişinde; kendi kayıt dosyası hâlâ P004, değişmedi).
- **EK KUYRUK (P006, henüz aktif değil):**
  1. **T-547:** #539: #1103 Bridge pending/applied/failed/unknown negatiflerini owner #1068 main HEAD'ine karşı tekrar üret, yeni K03 testlerinde açık RED bırak.
  2. **T-548:** #539: iki aynı isimli cihazın görev satırlarında birbirinden ayırt edilmesi ve stale status cevabının yeşile dönmemesi testi.
  3. **T-549:** #812: FULL/CORE uygulanmış görünüm ile fiili cihaz izni farklıysa yalnız bilgilendirme UI testini owner kaynakta doğrula (yetki sistemi değişmesin).
  4. **T-550:** #539: Promise iptal/yeniden deneme yarışında başarısız işlemin tamamlandı rozeti almadığını source/VM testle.
  5. **T-551:** #485: ekran okuyucu için sayfa yüklenmesi ve toast duyurusunda iki ardışık mesaj kaybı testi.
  6. **T-552:** #1006: #1068 web owner entegrasyonundan sonra K03 testlerini exact SHA/CI ve gerçek browser ayrımıyla raporla.

### K04 — #539 admin 401/403 gerçek RED
- **ROL/ALAN:** web/admin.html, web/admin.js (owner #1068 sonrası); test/delegated/k04/**.
- **ÇAKIŞMA:** Admin web source #1068 sahibinde; K05 #1122 aynı ID T-382 duplicate (K04 wins).
- **P005 GERİDEKİ:** T-416, T-417, T-418 (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1104](https://github.com/Naveax/Nexowire/pull/1104), [#1120](https://github.com/Naveax/Nexowire/pull/1120), [#1133](https://github.com/Naveax/Nexowire/pull/1133).
- **AKTİF T-553:** #539: #1104/#1133 admin 401/403 transport-offline yanlış sınıflamasını owner #1068 HEAD üzerinde tekrar üret, en küçük düzeltmeyi owner'a bırak. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-554:** #539: admin stale success işaretinin 401 sonrası kalmadığını K04 özgün testinde negatif doğrula.
  2. **T-555:** #1006: #1120 WSL2 CI başarısızlığının K04 yeni testini mi yoksa owner CI kaynak farkını mı gösterdiğini exact-run loguyla ayır.
  3. **T-556:** #539: 403 yetki reddinde hassas token/stack bilgisi UI'da görünmediği kaynak-only QA.
  4. **T-557:** #485: yeniden giriş/tekrar deneme akışında gerçekten yetki verildi sanılmaması erişilebilir metin kontrolü.
  5. **T-558:** #539: #1068 web kaynağı main'e girince sahip olunan admin UI yüzeyinde RED'i düzelt ve gerçek test sonucu yaz.

### K05 — #539 arayüz erişilebilirliği bağımsız kalite
- **ROL/ALAN:** test/delegated/k05/**; scripts/delegated/k05/**; docs/delegated/qa-accessibility-k05/**.
- **ÇAKIŞMA:** K01–K04 web source'a yazma, aynı pool T-ID için küçük numara kuralı.
- **P005 GERİDEKİ:** yok (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1115](https://github.com/Naveax/Nexowire/pull/1115), [#1122](https://github.com/Naveax/Nexowire/pull/1122), [#1132](https://github.com/Naveax/Nexowire/pull/1132).
- **AKTİF T-559:** #539: K01/K04 RED 429/401/403 durumlarını ekran okuyucu metninde tek anlama indirgeyen regresyonu önle. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-560:** #539: K03 aynı adlı cihaz listesi ve K15 kimlik belirsizliği için bağımsız erişilebilir ad negatif kontrolü.
  2. **T-561:** #485: web kurulumunda 320/375/768px form-hata/odak sıralama fixture'ının gerçek browser gerektiren kısmını açıkça ayır.
  3. **T-562:** #1006: #1132 farklı PR source-head testleri karıştırılınca sahte PASS olmasını engelleyen K05 kanıt ayrıştırıcı.
  4. **T-563:** #539: çok uzun Türkçe hata bildiriminde düğme metninin erişilemez olmaması test fixture.
  5. **T-564:** #485: owner #1068 kaynak değişirse K05 bağımsız QA'yı tek exact HEAD üzerinde yeniden koştur, dosya çakışmasına girme.

### K06 — #485 Windows kurulumu ve sürüm uyuşmazlığı
- **ROL/ALAN:** docs/INSTALL_WINDOWS.md, docs/CHATGPT_INSTALL_PROMPT.md; test/delegated/k06/**.
- **ÇAKIŞMA:** İmzalı installer/release dosyaları protected; K07 docs yolları ayrı.
- **P005 GERİDEKİ:** T-430 (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1108](https://github.com/Naveax/Nexowire/pull/1108), [#1129](https://github.com/Naveax/Nexowire/pull/1129).
- **AKTİF T-565:** #485: README v1.0.8 resmi helper ile web v1.0.7 tarihsel yönerge uyumsuzluğunu K06 belgelerinde açık yönlendirmeyle düzelt. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-566:** #269: kurulum rehberinde imza/SmartScreen doğrulanmadığında başarı vaat eden metni gider, release üretme.
  2. **T-567:** #485: OAuth/pairing/recovery adımlarını üç bağımsız kullanıcı hatası için yeniden üretilebilir belge kabul testine bağla.
  3. **T-568:** #485: Windows kullanıcı akışında CMD/PowerShell gerekmesi iddiası varsa mevcut kaynakla doğrula ve sahte tek-tık PASS'i çıkar.
  4. **T-569:** #1006: docs link/provenance negatif kontrolünü değişen README SHA'sına bağla, hatalı linkte FAIL olsun.
  5. **T-570:** #485: yeni kullanıcı için özet kurulum hata karar ağacını kendi belgelerinde sadeleştir, gerçek fiziksel kurulum NOT_RUN yaz.

### K07 — #485 self-host güvenli kurulum dokümanı
- **ROL/ALAN:** docs/SELF_HOST.md, docs/DEPLOYMENT_ONBOARDING.md; test/delegated/k07/**.
- **ÇAKIŞMA:** K06 Windows dokümanına dokunma; Cloudflare/secret üretme veya deploy yapma.
- **P005 GERİDEKİ:** T-436 (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1100](https://github.com/Naveax/Nexowire/pull/1100), [#1125](https://github.com/Naveax/Nexowire/pull/1125).
- **AKTİF T-571:** #485: #1100/#1125 tarihsel sürüm bağlantılarında bozuk güncel release URL tanıtımını kaynakla yeniden doğrula. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-572:** #485: başarısız pairing'den iyileşme için kimlik bilgisi sızdırmayan açık self-host adımları ve negatif belge testi.
  2. **T-573:** #539: browser ve Hub/Agent durumları karıştığında kullanıcıya yanlış online garantisi vermeyen doküman fixture.
  3. **T-574:** #1006: #1100'ın yeni exact HEAD'in CI/aux keşif durumu ve gerçek canlı bağlantı kabulünü bağımsız ayır.
  4. **T-575:** #485: Windows ve Linux self-host adımlarında sahip izni gerektiren işlemi normal otomatik kurulum gibi sunma.
  5. **T-576:** #485: owner #1068 main'e girerse web ile SELF_HOST/DEPLOYMENT_ONBOARDING rehberindeki adımların gerçeğe uygunluğunu tekrar test et.

### K08 — #539 MCP durum belgeleri
- **ROL/ALAN:** docs/ARCHITECTURE.md, docs/MCP_SURFACE.md; test/delegated/k08/**.
- **ÇAKIŞMA:** web/app.js owner K03/#1068; K08 salt-okunur QA ve MCP belgeleri.
- **P005 GERİDEKİ:** yok (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1106](https://github.com/Naveax/Nexowire/pull/1106), [#1128](https://github.com/Naveax/Nexowire/pull/1128).
- **AKTİF T-577:** #539: UNKNOWN/FAILED/APPLIED biçiminin Bridge/Hub/devices sayfalarında birbiriyle çelişen üç mesajını K08 belgelerinde düzelt. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-578:** #539: #1128 sentetik Türkçe durum çakışmasını K03/K04 owner kaynakta tekrar eden minimal belge+test örneğiyle sabitle.
  2. **T-579:** #812: gerçek cihaz izin kanıtı olmayan status successful mesajlarının doküman içinde 'doğrulandı' yazmasını önle.
  3. **T-580:** #1006: K08 nested yeni .mjs testinin hosted keşfedilip keşfedilmediğini exact HEAD çıktı ile kanıtla.
  4. **T-581:** #539: MCP başarısızlık semantiğinde 401/403/429/503 ile transport ve uygulama sonucunu ayrı anlatan örnekler.
  5. **T-582:** #539: yeni #1068 sürümünde MCP yüzey sözlüğü değiştiyse sadece K08 doküman alanında düzelt.

### K09 — #539 issue durumu ve yol haritası
- **ROL/ALAN:** ROADMAP.md, docs/SCALE_V2_ROADMAP.md; test/delegated/k09/**.
- **ÇAKIŞMA:** CORE/sandbox uygulamasına girme, tarihsel belgeleri yanlış final sayma.
- **P005 GERİDEKİ:** T-445, T-447, T-448 (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1099](https://github.com/Naveax/Nexowire/pull/1099), [#1127](https://github.com/Naveax/Nexowire/pull/1127), [#1137](https://github.com/Naveax/Nexowire/pull/1137).
- **AKTİF T-583:** #539: 22 açık issue önceki snapshot'a karşı güncel state farkını izleyip gerçekten kapanan/yeniden açılanları kaynaklı raporla. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-584:** #1006: otomatik PR issue kapanışı için 'cannot close #487' gibi negasyon tetikleyicisini read-only güvenilirlik kaydı olarak doğrula.
  2. **T-585:** #539: P005 partial 28 görevin gerçek ürün RED vs test kanıtı açığı ayrımını yol haritasında göster.
  3. **T-586:** #481/#482: S1–S5 stage kapıları için main code ile sentetik plan işaretlerinin karışmadığı minimum regresyon.
  4. **T-587:** #780: kodlama ajanı açık epic ve owner bakım dalına ait eski PR'ların kaynak doğruluğunu koru, yeni özellik uydurma.
  5. **T-588:** #539: issue kapanışlarını sadece gerçek kabul koşulu olduğu dosya bazında kontrol eden K09 kendi test paketi.

### K10 — #539 tarayıcı kanıtının gerçekliği
- **ROL/ALAN:** web/README.md; scripts/delegated/k10/**; test/delegated/k10/**; docs/delegated/browser-evidence-k10/**.
- **ÇAKIŞMA:** Owner .github/workflows/ci.yml'ye dokunma; K13 ile hosted güvenli test mekanizması öner.
- **P005 GERİDEKİ:** T-451, T-453 (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1116](https://github.com/Naveax/Nexowire/pull/1116), [#1142](https://github.com/Naveax/Nexowire/pull/1142).
- **AKTİF T-589:** #539: #1142 browser-live job gerçekte hangi sayfayı açıp ekran görüntüsü üretiyor anlamlı kaynak/çıktı incelemesi. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-590:** #485: auth/pairing olmayan offline fixture'ı gerçek pairing başarı ekranı sanmayı reddeden K10 test kontratı.
  2. **T-591:** #539: ekran görüntüsü PNG dosyaları aynı byte içeriyorsa 3 ayrı durumun PASS olmaması negatif regresyon.
  3. **T-592:** #539: 320/375/768/1024px gerçek screenshot istendiğinde environment yoksa NOT_RUN kanıtı saklayan runner.
  4. **T-593:** #1006: browser-live 7/7 yeşil fakat ilgili yeni testleri çağırmadıysa genel PASS ve yeni-kapsam NOT_RUN ayrımı.
  5. **T-594:** #485: #1068 owner web HTML'i main'e girdikten sonra K01/K04 browser akışını yetkili tarayıcıda kanıtla, yoksa bağımsız QA'ya geç.

### K11 — #487 offline S5 maliyet ve kesinlik
- **ROL/ALAN:** scripts/report-s5-cost-matrix.ts, src/ops/scale-s5-cost-envelope.ts (offline); test/delegated/k11/**.
- **ÇAKIŞMA:** Billing/gerçek tahsilat değil, yalnız offline model; K12 T-379 bağımsız ek test ama kredi K11.
- **P005 GERİDEKİ:** T-455 (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1102](https://github.com/Naveax/Nexowire/pull/1102), [#1135](https://github.com/Naveax/Nexowire/pull/1135).
- **AKTİF T-595:** #487: #1135 merge SHA 52d452f ile yeni sub-cent davranışının main kaynak ve seçili CI testindeki 57/57 kapsamını tekrar kontrol et. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-596:** #487: 0, küçük pozitif ve yüksek ama finite USD projeksiyonlarının doğru yuvarlanmasını model testinde hassasiyetle doğrula.
  2. **T-597:** #539: S5 gerçek invoice/hosted capacity UNKNOWN iken offline projection CSV'nin açık etiketi koruduğunu test et.
  3. **T-598:** #1006: issue #487 otomatik kapanıp tekrar açılma nedeninin 'cannot close #487' PR açıklaması olduğuna ilişkin regresyonu K11 CI evidence notuna ekle.
  4. **T-599:** #487: K12 sentetik reconnect ve K18 transfer metriklerini gerçek provider faturasına dönüştürmeyen parser kontrolü.
  5. **T-600:** #487: yeni K11 kod dalını güncel main üzerinden açıp kabul dışındaki rapor regresyonlarını bitir, fiziksel maliyet/soak NOT_RUN.

### K12 — #487 S5 loopback dayanıklılığı
- **ROL/ALAN:** scripts/bench-s5-loopback-ws-capacity.ts, scripts/bench-s5-loopback-reconnect-storm.ts; test/delegated/k12/**.
- **ÇAKIŞMA:** Yalnız bounded localhost; gerçek provider veya global CI değiştirme.
- **P005 GERİDEKİ:** T-461, T-465 (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1109](https://github.com/Naveax/Nexowire/pull/1109).
- **AKTİF T-601:** #487: #1109 yeni nested reconnect .test.ts dosyaları K13 aux CI'de çağrılmadıysa işin bunu açık söyleyerek kapsamını toparla. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-602:** #487: 3 art arda reconnect ve iptal sırasında duplicate completed id oluşmadığını sentetik loopback ölçüm testi.
  2. **T-603:** #487: 16/32/64 socket tekrarında ölçülmeyen hosted concurrency sonucu üretmeyen rapor denetimi.
  3. **T-604:** #539: kapanıştan sonra açık timer/WS soketlerinin test prosesini asılı bırakması sorununu dar teardown regresyonuyla düzelt.
  4. **T-605:** #487: CSV ölçüm formatı K11/K18 sahipliğinde ise sadece K12 fixture ve schema talebi üret, sahipliğe girme.
  5. **T-606:** #487: gerçek provider/24h soak gerektiren acceptance için gerekli kanıt türlerini açık bırak, diğer yerel reconnect hata testlerini bitir.

### K13 — #1006 gerçek CI keşfi ve negatif kanıt
- **ROL/ALAN:** .github/workflows/delegated-noncore.yml; scripts/delegated/k13/**; test/delegated/k13/**.
- **ÇAKIŞMA:** Owner #1096 `.github/workflows/ci.yml` path; ŞEF/K14 bunu owner'a kanıtla taşır.
- **P005 GERİDEKİ:** yok (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1112](https://github.com/Naveax/Nexowire/pull/1112), [#1134](https://github.com/Naveax/Nexowire/pull/1134).
- **AKTİF T-607:** #1006: #1134 aux 4/4 hosted discovery delilini tam 54 test envanterine uygulayıp main CI'de eksik kalan altı test yolunu yeni SHA ile belirle. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-608:** #1006: owner #1096 ci.yml kaynak dosyasına dokunmadan K13 fork-only runner'da K11/K17/K19 eksik nested dosyaları gerçekten çalıştır.
  2. **T-609:** #1006: #1118/#1130/#1141 41 sabit Node22 gate FAIL'ini actual TAP sayısı ve exact HEAD ile yeniden üret, owner'a minimal değişiklik kanıtı yaz.
  3. **T-610:** #1006: hosted 7/7 yeşil ama yeni nested test NOT_RUN sınıflamasının yanlışlıkla PASS'a dönüşmesini regresyonla engelle.
  4. **T-611:** #1006: #1134 aux job checkout pinned SHA ile PR source HEAD başka olduğunda kanıt birleştirmeyi reddeden kod/test.
  5. **T-612:** #1006: source HEAD güncellenirse job re-run başlatmadan tek exact SHA ve selected-test-list kanıtıyla PR kabul kararını raporla.

### K14 — #1006 güvenli entegrasyon ve issue kapanışı
- **ROL/ALAN:** scripts/delegated/k14/**; docs/delegated/integration-k14/**.
- **ÇAKIŞMA:** Upstream merge/CI dispatch için ŞEF kararını bekle, K14 salt-okunur karşılaştırma; protected source'a dokunma.
- **P005 GERİDEKİ:** yok (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1117](https://github.com/Naveax/Nexowire/pull/1117), [#1123](https://github.com/Naveax/Nexowire/pull/1123), [#1140](https://github.com/Naveax/Nexowire/pull/1140).
- **AKTİF T-613:** #1006: #1135 merge sonrası #487'nin yanlış otomatik kapanmasının kök nedenini ve reopen kaydını K14 entegrasyon denetimine ekle. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-614:** #1006: PR açıklamasında 'cannot close #NNN' dahil negasyon kapanış kelimesi varsa merge öncesi warning üreten testsiz yapma, K14 özgün testle kanıtla.
  2. **T-615:** #1006: 42 açık yeni kaynak PR için exact HEAD, required CI ve nested test keşfi matrisi güncelle; issue kapanışını bu listeyle karıştırma.
  3. **T-616:** #1006: #1096 ve #1068 aktif owner PR dosyalarıyla çakışan source PR'ları otomatik 'review required' sınıfına al.
  4. **T-617:** #539: #1118/#1130/#1141 hosted CI fail ve #1120 WSL fail durumlarını 7/7 green gibi sunan araca negatif regresyon.
  5. **T-618:** #1006: diğer KNN'ye ait güvenli PR'ları salt-okunur filtrele; kaynak değişikliği, merge ve fork FF kararını ŞEF'e delille öner.

### K15 — #539 cihaz seçimi ve kimlik yanlışlığı
- **ROL/ALAN:** test/delegated/k15/**; docs/delegated/device-ux-k15/**.
- **ÇAKIŞMA:** K03 web/app.js owner #1068; K15 yalnız QA.
- **P005 GERİDEKİ:** yok (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1110](https://github.com/Naveax/Nexowire/pull/1110).
- **AKTİF T-619:** #539: #1110 current main'de çift aynı isimli device/folder listesinde ordinal etiketlerin stale response ile karışmasını test et. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-620:** #812: selected device gösterimi ile gerçek console authorization birbirinden farklıysa UI 'tamamlandı' yazmasın sözleşme kontrolü.
  2. **T-621:** #485: pairing sonrası device listesi boş ise belirsiz başarı yerine kullanıcıya doğru kurtarma mesajı QA.
  3. **T-622:** #539: selected folder ID/name mismatch ve ambiguous folder sıralamasında yanlış cihaz hedeflemenin negatif testi.
  4. **T-623:** #1006: K15 nested testler CI'da yürütülmediyse yerel/hosted kanıtlarını ayrıştır, owner #1068'e not.
  5. **T-624:** #539: #1068 main'e girince K15 sahipli testlerini yeniden koş; yapısal UI kaynak çakışmasını beklemeksizin diğer negatiflere geç.

### K16 — #540 Windows alt süreç sonlandırma kanıtı
- **ROL/ALAN:** src/diagnostics/environment-doctor.ts (read-only); scripts/run-environment-doctor.ts (read-only); test/delegated/k16/**.
- **ÇAKIŞMA:** Ömer #1096 `src/agent/process-manager.ts` değiştiriyor; K16 bu kaynakta patch yok.
- **P005 GERİDEKİ:** T-490 (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1105](https://github.com/Naveax/Nexowire/pull/1105), [#1121](https://github.com/Naveax/Nexowire/pull/1121).
- **AKTİF T-625:** #540: ProcessManager taskkill exit 0 sonuçları descendant PID readback olmadan confirmed success sınıflandırılmamalı K16 negatif testi. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-626:** #540: root-gone, child-alive ve access-denied varyasyonlarını gerçek Windows olmadan VM/sahte process testine ayır.
  2. **T-627:** #539: #1105/#1121 exact-HEAD CI yeşil olsa bile K16 nested test keşfedilmemişse NOT_RUN etiketi koru.
  3. **T-628:** #540: protected src/agent/process-manager.ts ile .github/workflows/ci.yml yalnız oku; owner #1096 değişikliğini geçmiş source ile kıyasla.
  4. **T-629:** #540: gerçek Windows postcondition planında owned descendants ve leaked processes test protokolünü K16 kendi QA klasörüne yaz.
  5. **T-630:** #540: CI ve salt-okunur kaynak kanıtlarıyla owner'a minimal risk repro ilet, fiziksel Work-PC kabulünü ŞEF'e açık bildir.

### K17 — #780 beceri katalog kalite sınırı
- **ROL/ALAN:** src/skills/manifest.ts, src/skills/registry.ts (yalnız metadata); test/delegated/k17/**.
- **ÇAKIŞMA:** Sandbox/izin genişletme yasak; kaynak parser değişecekse #1030 ile duplicate kontrol.
- **P005 GERİDEKİ:** yok (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1113](https://github.com/Naveax/Nexowire/pull/1113).
- **AKTİF T-631:** #780: SkillRegistry metadata platform/manifest kontrollerini gerçek current main source üzerinden dar negatif testle sabitle. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-632:** #539: test edilmeyen direct-load symlink kaçışının QA dökümünde PASS gibi gösterilmemesini regresyon.
  2. **T-633:** #780: Windows/linux ve install paths ayrımında elle çalıştırılmamış komuta NOT_RUN işareti koy.
  3. **T-634:** #1006: #1113 güncel exact HEAD K17 nested test keşfi ve genel job 7/7 farkını kayıtla.
  4. **T-635:** #780: önceki #1030/owner sandbox değişiklikleriyle K17 metadata dosyası SHA çatışması varsa sadece QA dosyası kullan.
  5. **T-636:** #780: kaynak metaveri doğruluğu için bir case-sensitive name ve valid manifest regresyonu, güvenlik sandbox koduna dokunma.

### K18 — #588 transfer kanıtı ve S5 metrik doğruluğu
- **ROL/ALAN:** src/ops/scale-transport-metrics.ts, scripts/report-s5-measured-scenarios.ts; test/delegated/k18/**.
- **ÇAKIŞMA:** Hash/transfer/WAL authorization çekirdeği Ömer; K19 UX QA ayrı.
- **P005 GERİDEKİ:** T-502 (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1107](https://github.com/Naveax/Nexowire/pull/1107), [#1119](https://github.com/Naveax/Nexowire/pull/1119), [#1139](https://github.com/Naveax/Nexowire/pull/1139).
- **AKTİF T-637:** #588: #1139 ACK loss ve wrong prefix ACK negatiflerini current main'de gerçekten seçili koşmuş test çıktısıyla doğrula. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-638:** #588: local artifact copy 225281-byte fixture'ın fiziksel Agent/Hub transfer kanıtından ayrı kaldığı rapor sınıflaması.
  2. **T-639:** #539: K18 ölçümde p50/p95/99 ve sentetik peak socket değerlerinin hosted throughput sanılmasını engelle.
  3. **T-640:** #487: maliyet quote #1135 ile kapasite UNKNOWN flag'i korunup ölçümsüz raporda yanlış sayı yazılmadığı cross-regresyon.
  4. **T-641:** #588: digest-readback olmadan 'complete' sayan local adapter bulursan sadece K18 izinli offline sınıflayıcıda düzelt.
  5. **T-642:** #1006: #1107/#1119/#1139 nested TS test discovery ve exact-head hosted job ayrımını makinece denetle.

### K19 — #588 büyük dosya aktarımı kullanıcı kanıtı
- **ROL/ALAN:** test/delegated/k19/**; docs/delegated/file-ux-k19/**.
- **ÇAKIŞMA:** Transfer hash/parça birleştirme/yetki source protected; K18 metrics farklı.
- **P005 GERİDEKİ:** yok (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1111](https://github.com/Naveax/Nexowire/pull/1111), [#1124](https://github.com/Naveax/Nexowire/pull/1124), [#1136](https://github.com/Naveax/Nexowire/pull/1136).
- **AKTİF T-643:** #588: 220KB üstü local başarılı yazma ile karşı tarafın alıp uygulaması arasındaki eksik receipt kanıtını K19 minimal fixture ile göster. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-644:** #588: 1MiB+ kopyada tek başına sha256 hash olmasının final receiver acknowledgement olmadığı negatif test.
  2. **T-645:** #539: UI UNKNOWN / transfer complete / same-name existing file durumlarının doğru sınırı K19 doküman QA.
  3. **T-646:** #1006: #1136 hosted exact HEAD 7/7 yeşil olmasının yeni nested K19 testini çalıştırmadığını test listesine yaz.
  4. **T-647:** #588: file transfer yüzde 100 görüntüsünün owner uçtan uca acknowledgement yoksa 'doğrulanmadı' durumunda kalması UX bağımsız test.
  5. **T-648:** #588: canlı iki Windows-PC ve gerçek Agent/Hub için fiziksel kabul matrisi hazırla; gerçek cihaz testini yapmadan PASS deme.

### K20 — #1006 hosted CI false-pass ve issue sağlığı
- **ROL/ALAN:** scripts/delegated/k20/**; test/delegated/k20/**; docs/delegated/maintenance-k20/**.
- **ÇAKIŞMA:** K13 CI workflow source'una ve owner #1096 yetki koduna dokunma.
- **P005 GERİDEKİ:** yok (kısmi/owner/fiziksel; tamamlama koşulu karşılanınca tekrar işle, sessizce kapatma). **Son PR kanıtı:** [#1118](https://github.com/Naveax/Nexowire/pull/1118), [#1130](https://github.com/Naveax/Nexowire/pull/1130), [#1141](https://github.com/Naveax/Nexowire/pull/1141).
- **AKTİF T-649:** #1006: #1118/#1130/#1141 Node22 fixed 41-test gate FAIL durumunun test sayısı değişikliğiyle ilişkisini yeniden üret, source owner #1096'ya delil hazırla. **Bitiş:** exact kaynak/PR, önce/sonra test, açık kapsam kabulü.
- **KUYRUK (5):** Her işin ölçütü kendi izinli kaynak/testte somut değişiklik veya açık RED kanıtı, commit/PR ve doğru yerel/CI/cihaz durumu.
  1. **T-650:** #1006: yeni P006 120 görev ve önceki P005 92 source-QA teslimi 28 açık ayrımını audit edip sıfır çift görev kredisi kontrolü.
  2. **T-651:** #1006: #1135 merge sonrası #487 issue auto-close/reopen olayını durum değişiminde false RESOLVED üretmeyen regresyona ekle.
  3. **T-652:** #539: K14 42 açık Draft PR sayfalama denetimini K20 bağımsız issue listesiyle karşılaştır.
  4. **T-653:** #1006: sadece genel 7/7 job ve 0 yeni test keşfi varsa PR'ı kabul edilebilir saymayan CLI regresyonu.
  5. **T-654:** #1006: exact HEAD değişen PR'a eski CI run'ını yapıştırmayan ve fiziksel test NOT_RUN'u koruyan K20 rapor/araç düzeltmesi.

## HAVUZ — SAHİPSİZ YEDEKLER
- **P005'ten kalan 19 sahipsiz:** T-515, T-516, T-517, T-518, T-519, T-520, T-521, T-522, T-524, T-525, T-526, T-527, T-528, T-529, T-530, T-531, T-532, T-533, T-534 (T-523 K02 yerel teslim edildi; ayrıntılar A005'te). Eski görev tanımı P005 commit geçmişinde; owner yol kısıtları hâlâ geçerli.
- **P006 yeni 20 sahipsiz:**
  - **T-655:** #485: boş pairingId/token test fixture'ının doğru reddedilmesi için owner HEAD'e bağlanmış min kaynak repro. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-656:** #539: HTTP 429 ile 503 mesajının aynı UI statüsüne dönüşmesi negatif kontrol. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-657:** #539: admin 401/403 response ile stale-success badge çakışmasının tek source-fixture negatif testi. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-658:** #1006: 41 sabit test sayacıyla genişleyen TAP sonuçlarının çelişkisini fail-closed kanıtla. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-659:** #540: taskkill success bildirimi sonrası çocuk PID yaşarken source-only testin PASS yazmaması. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-660:** #588: 225KB üzeri dosya receiver-ack olmadan yüzde 100 diye raporlanmasının reddi. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-661:** #487: S5 sub-cent gerçek maliyet değil projection olduğunu gösteren regresyon. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-662:** #1006: PR açıklamasında negated 'cannot close #487' otomatik issue kapanışı tetikleyicisi için denetim. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-663:** #485: mevcut Windows kurulum linkinin yayın sürümüyle uyumu — yalnız belge/source kontrol. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-664:** #485: self-host kullanıcı kurulumunda pairing kurtarma yolunun doküman olarak yeniden test edilmesi. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-665:** #539: MCP UNKNOWN ve FAILED kavramlarını farklı gösteren sözlük QA. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-666:** #539: aynı isimli iki cihazda başlık/id eşleşmezliği kaynak negatif fixture. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-667:** #1006: browser-live CI yeşilken ilgili sayfa/screenshot açılmadığını fail-closed ayır. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-668:** #487: loopback reconnect storm raporunun gerçek provider soak olarak kullanılmadığı gate. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-669:** #1006: yeni nested K19/K17 testlerinin fork auxiliary runner'da açık komutla koşturulması. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-670:** #539: web klavye focus ve ARIA live-region uzun Türkçe hata metinlerini ayrıştıran test. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-671:** #780: manifest platform desteği raporunda symlink güvenlik TODO'sunun kapatılmış gibi görünmemesi. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-672:** #588: final ACK kaybından sonra hash/readback gerekliliğini local testle sabitle. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-673:** #1006: çok sayfalı 42 Draft PR listesinin eksiksiz sayılıp sayılmadığını negatif testle denetle. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.
  - **T-674:** #539: 320px mobil pairing hata metninde buton sarma/erişilebilirlik negatif fixture. **Bitti:** benzersiz issue/fail/pass/source kanıtı + kendi yolunda commit/PR; canlı gerekirse NOT_RUN.

## PROJEYE GİDECEKLER
- **MAIN'e girdi:** [#1102](https://github.com/Naveax/Nexowire/pull/1102) (`b5a3f884`), [#1135](https://github.com/Naveax/Nexowire/pull/1135) (`52d452f`). Her ikisi source-fix; #487/#539 fiziksel/provider kabulü değil.
- **CI keşfi/owner-gated incelemede:** [#1134](https://github.com/Naveax/Nexowire/pull/1134) (fork auxiliary dört hosted job başarılı, ana CI eksik), [#1140](https://github.com/Naveax/Nexowire/pull/1140) (PR denetim), [#1131](https://github.com/Naveax/Nexowire/pull/1131), [#1133](https://github.com/Naveax/Nexowire/pull/1133), [#1136](https://github.com/Naveax/Nexowire/pull/1136), [#1139](https://github.com/Naveax/Nexowire/pull/1139), [#1142](https://github.com/Naveax/Nexowire/pull/1142) ve diğer KNN PR'ları. Bunlar PR HEAD ve yeni test keşfi ayrıca doğrulanmadan topluca merge edilmez.
- **CI kırmızı ve engelli:** [#1118](https://github.com/Naveax/Nexowire/pull/1118), [#1130](https://github.com/Naveax/Nexowire/pull/1130), [#1141](https://github.com/Naveax/Nexowire/pull/1141) (Node sürümü test gate sayısı), [#1120](https://github.com/Naveax/Nexowire/pull/1120) (WSL2). K20/K04 düzeltme testleri ayrı; owner workflow'u #1096 korumalıdır.
- **#1006 merkezi kabul bağlantısı:** [issue #1006](https://github.com/Naveax/Nexowire/issues/1006). S005/S006, A005 ve PR kanıtları burada takip edilir; issue ve fiziki kabul kendiliğinden kapanmaz.

## ONUR'UN LİSTESİ — SADECE İNSAN İŞİ
1. Aynı KÖLE MESAJI V002'yi numaralarını koruyarak 20 sekmeye gönder; cevapları taşıma, raporlar KNN dosyasında.
2. **K03 sessiz:** son raporu hâlâ P004/Adım 4. Öncelikle K03 sekmesini açıp sabit V002 mesajını gönder; kayıt güncellenemiyorsa numarasıyla yeni K03 sohbeti başlat.
3. Sekmeler ilerleyince kısa ŞEF DEVAM'ı gönder. Owner CORE/billing/release veya gerçek Work-PC testi için şu an yeni insan izni istenmiyor; kabul NOT_RUN açık kalır.

## Kayıtlar
[PROTOKOL V005](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/PROTOKOL.md) · [ARSIV A005](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/ARSIV.md) · [SEF S006](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/SEF.md)
