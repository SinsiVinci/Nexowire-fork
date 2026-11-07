# NEXOWIRE EKİP PANOSU — P005
Tarih: 2026-11-07 (Europe/Istanbul) | ŞEF: SinsiVinci/Nexowire-fork `ekip` | Protokol: V004

## Hedef ve kilometre taşları
- Tek hedef: [Naveax/Nexowire açık issue'ları](https://github.com/Naveax/Nexowire/issues) üzerinden **gerçek hataları tekrarla → düzelt → yeniden test et → güvenli PR ile ana projeye geçir**. Öncelik: #540 Windows alt süreç sonlandırma ·  #588 >220KB dosya aktarımı ·  #539 güvenilirlik/gerçek durum ·  #485 kurulum ve bağlantı ·  #487 offline kapasite ve maliyet ·  #1006 kabul/CI kayıtları.
- Ömer'in **[#1096](https://github.com/Naveax/Nexowire/pull/1096) Windows CORE/Broker/SQLite Hub/Connection v2** ve **[#1068](https://github.com/Naveax/Nexowire/pull/1068) web entegrasyonu** aktif. Bu kaynaklarda ŞEF ekibi değişiklik yapmaz. `src/agent/process-manager.ts` ve `.github/workflows/ci.yml` de korunur. #271 ON HOLD.
- 20/20 durum dosyası P004/V003 üzerinden iki kullanıcı turunda güncellendi; ŞEF, son S004'ten beri **67 yeni ekip commit'i** okudu. P004 T-255…T-374 **104/120 (%86,7) yerel/kaynak teslim, 16 açık veya kısmi**. Bu oran **ürünün tamamlanma oranı DEĞİL** ve canlı Windows/provider kabulü anlamına gelmez.
- P004 HAVUZ 20 görevinden **16 benzersiz sahiplenilmiş** (yerel/QA teslim), 4 sahipsiz kaldı: T-376, T-386, T-391, T-392. Dört çoklu sahiplenme çözüldü; asıl sahiplik kanıtı A004 arşivinde.
- **Ana projeye geçen:** [#1102](https://github.com/Naveax/Nexowire/pull/1102) `b5a3f8840517d65ecbd6a018699c4c8bdde09987` squash merge (S5 kapasite UNKNOWN etiketi); PR exact HEAD **7/7 CI PASS**. Fork `main` upstream ile aynı SHA'ya fast-forward edildi. **Main push CI: 6/7 PASS, browser-live hâlen in_progress** (son kontrol); bu issue #487/#539'un tamamen çözüldüğü iddiası değildir.
- P004 çevriminde 32 yeni kaynak PR doğdu: #1099…#1130; #1102 merge, **31 açık Draft**. 14 diğer PR'da exact SHA üzerinde 7/7 CI yeşil görüldü; bazı eklenen iç içe testler ana CI tarafından keşfedilmediğinden **toplu merge yok**. [#1118](https://github.com/Naveax/Nexowire/pull/1118) Node22 CI FAIL (browser cancelled); K20 bu hatanın sahibi.
- **Açık somut RED/engel:** K01 [#1114](https://github.com/Naveax/Nexowire/pull/1114) boş pairingId/token; K04 [#1104](https://github.com/Naveax/Nexowire/pull/1104) admin 401/403 (owner adayına göre 4/6 test başarısız); K13 [#1112](https://github.com/Naveax/Nexowire/pull/1112) ana CI test keşfi (52 delegated testten 43 doğrudan/kalıp kapsama, kalanların keşfi doğrulanmadı); K20 [#1118](https://github.com/Naveax/Nexowire/pull/1118) Node22 CI FAIL; gerçek cihaz/Windows R15/S5 acceptance NOT_RUN. Bunların hiçbiri çözüldü diye işaretlenmedi.
- Yeni dönem: **P005 T-395…T-514 = 120 yeni ayrık görev** (her kölede 1 aktif + 5 kuyruk), **HAVUZ T-515…T-534 = 20 sahipsiz yedek**. Başlangıç P005 tamamlanma 0/120. P004'ün geçmiş 104 işi P005 sayacına ekleme. Toplam Nexowire ilerleme yüzdesi ve bitiş zamanı güvenilir biçimde ölçülemiyor; 22 açık issue ve owner/cihaz bağımlılıkları var.

## Yönetim / kabul ilkeleri
1. **Test sonucu üç ayrı seviye:** yerel kaynak/VM; exact commit hosted CI; gerçek cihaz/provider fiziksel kabul. Özellikle CI yeşil olsa bile yeni test keşfi doğrulanmamışsa ilgili kapsam `NOT_RUN` kalır.
2. Kod tek sahibi olan yollarda hazırlanır. KNN aktif görev → bu bölümdeki 5 kuyruk → sahipsiz HAVUZ; bağımlı görevde beklemek yok. Başka kişinin dosyasına dokunma.
3. PR ve issue kapanışı ŞEF gözetiminde, yalnız gerçek kanıtla; yeni kullanıcı kısıtları/owner CORE değişiklikleri uydurma. Başka PR'ların tarihsel PASS'ini yeni HEAD PASS'ine taşıma.
4. Bir havuz görevini talep edenler diğer 19 KNN raporunu okur, önce kendi kaydına `ÜSTLENDİM` yazar, tekrar kontrol eder. Çakışmada **küçük KNN** kazanır. Aynı T-ID iki kere bitmiş sayılmaz.
5. Dosya alanı sahipliği ve görev sırası PROTOKOL V004'tedir. Ömer'in #1096/#1068 çalışmalarında aynı kaynak varsa bağımsız test üret; iki tarafı çatıştıracak birleştirme yapma.

## KÖLELER — TEK SAHİPLİK / AKTİF / 5'Lİ KUYRUK

### K01 — Bağlantı ekranı — gerçek hata
- **ROL/ALAN:** web/connect.html, web/connect.js (yalnız #1068 tamamlanınca); test/delegated/k01/**.
- **ODAK / ISSUE:** #485 #539. **Önceki açık:** T-256/257 kısmi; T-260 gerçek browser ENGEL. Boş pairingId/token RED #1114, owner #1068.
- **ÇAKIŞMA SINIRI:** Ömer #1068 web source'a dokunurken yalnız K01 test/fixture; issue #485 source eksikliği owner'a iletilecek.
- **ÖNCEKİ PR KANITI:** [#1114](https://github.com/Naveax/Nexowire/pull/1114); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-395:** #485: #1114 boş/whitespace pairingId+token RED senaryolarını #1068 current HEAD'e göre tek hatalı ve tek doğru örnek olarak sabitle, owner'a en küçük değişiklik notu çıkar. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-396:** #539: aynı bağlantı denemesinde stale 401 ile yeni pairing cevabının yarışını gerçek `connect.js` işleviyle tekrar üret ve kendi testinde düzeltme öner.
  2. **T-397:** #485: başarılı pairing iddiasından önce callback/provenance olumsuz durumlarını kullanıcıya gösteren sunumun negatif testlerini ekle.
  3. **T-398:** #539: 403/429/retry-after ve terminal hesap reddi mesajlarını aynı metin gibi göstermeyen K01 test paketi.
  4. **T-399:** #485: #1068 main'e girdikten sonra K01 kaynak ekranında kanıtlanan hatayı sadece kendi web yollarında düzelt, VM testleriyle tekrar doğrula.
  5. **T-400:** #485: hosted tarayıcıda 375/768px odak/yeniden dene görüntüsü kanıtı üret, ortam yoksa NOT_RUN.

### K02 — Küçük ekran/kullanılabilirlik
- **ROL/ALAN:** web/styles.css (owner #1068 sonrası); test/delegated/k02/**.
- **ODAK / ISSUE:** #485 #539. **Önceki açık:** T-266 canlı Chromium/screenshot NOT_RUN; T-385 havuz sahibi K02.
- **ÇAKIŞMA SINIRI:** #1068 CSS yolu owner tarafından açıkken salt-okunur test; #1126 CI kontrolü.
- **ÖNCEKİ PR KANITI:** [#1101](https://github.com/Naveax/Nexowire/pull/1101), [#1126](https://github.com/Naveax/Nexowire/pull/1126); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-401:** #539: #1126 exact CI ve test keşfini kontrol et; platform bazında `NOT_RUN` ile başarısızlığı ayıran K02 regresyonunda gerçek negatif kanıt. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-402:** #485: #1068 CSS adayında 320/375/768/zoom 200%/400% görünüm taşmalarını DOM ölçümüne uygun test paketi olarak sabitle.
  2. **T-403:** #539: K01'in hata metinlerinde uzun Unicode adres/cihaz ismi ve CSS wrap kırılmasını bağımsız K02 testinde tekrar üret.
  3. **T-404:** #485: focus-visible/high-contrast/reduced-motion kurallarında gerçekten yanlış sunum bulursan #1068 sonrası yalnız styles.css'de düzelt.
  4. **T-405:** #539: ekranda büyütme ile başarı/UNKNOWN mesajının saklanmasını önleyen responsive regresyon.
  5. **T-406:** #485: hosted gerçek browser ekran ölçümü ve ekran görüntüsü kanıtı, yoksa kaynak/NOT_RUN olarak açık bırak.

### K03 — Panelde doğru işlem sonucu
- **ROL/ALAN:** web/index.html, web/app.js (owner #1068 sonrasında); test/delegated/k03/**.
- **ODAK / ISSUE:** #539 #812. **Önceki açık:** T-270/271 #1068 kaynak kabulü, T-272 gerçek görsel/NVDA beklemede.
- **ÇAKIŞMA SINIRI:** K08 Türkçe status-copy çelişki kanıtı T-375/#1128; owner #1068 web source'u henüz açık.
- **ÖNCEKİ PR KANITI:** [#1103](https://github.com/Naveax/Nexowire/pull/1103); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-407:** #539/R18: K08 #1128'in gösterdiği Türkçe başarı/UNKNOWN durum dili çelişkisini gerçek `render()` fonksiyonunda negatif regresyonla sabitle. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-408:** #539: out-of-order `succeeded`/`queued`/`UNKNOWN` durumlarının eski ekrana geri düşmesini K03 panel QA ile yakala.
  2. **T-409:** #812: localGrant false iken effective input kanıtını yanlış yetki onayı saymayan kullanıcı durumu sözleşmesi ekle.
  3. **T-410:** #539: K15 aynı adlı cihaz seçim etiketlerinden gelen erişilebilirlik bulgusunu K03 panel testine bağla.
  4. **T-411:** #539: #1068 birleşirse eksik sunum hatasını yalnız K03 kaynak yolunda minimal fix + testle kapat.
  5. **T-412:** #539: sahici tarayıcı/klavye/ekran okuyucu kabulünü K10 kanıtıyla eşleştir, yoksa NOT_RUN.

### K04 — Admin hata ve yetki sunumu
- **ROL/ALAN:** web/admin.html, web/admin.js (owner #1068 sonrası); test/delegated/k04/**.
- **ODAK / ISSUE:** #539 #485. **Önceki açık:** T-275 401/403 RED owner #1068'de 4/6, T-277/278 fiziksel erişilebilirlik açık; T-382 havuz sahibi K04.
- **ÇAKIŞMA SINIRI:** Admin web source #1068 sahibinde; K05 #1122 aynı ID T-382 duplicate (K04 wins).
- **ÖNCEKİ PR KANITI:** [#1104](https://github.com/Naveax/Nexowire/pull/1104), [#1120](https://github.com/Naveax/Nexowire/pull/1120); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-413:** #539/R11: owner #1068 admin 401/403 olayındaki 4/6 FAIL bulgusunu tek kararlı negatif test ve kaynak/ekran etkisiyle raporla. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-414:** #539: stale yönetim sayaçlarının 401 sonrası yanlış başarı göstermesine karşı UI fixture güçlendir.
  2. **T-415:** #539: role=alert/status ve dinamik admin kayıtlarının erişilebilir metin döngüsünü K05 bulgularıyla çapraz test et.
  3. **T-416:** #539: #1120 tek checkout 56/56 doğrulayıcıyı owner #1068 adayında gerçek çalıştırabilirlik için test et, yoksa NOT_RUN.
  4. **T-417:** #539: #1068 birleşirse admin yanlış durum metnini yalnız kendi web yolunda düzelt, bağımsız K05 regresyonunu koş.
  5. **T-418:** #485: dar ekran/klavye ile yönetim hata görünürlüğünün hosted browser kanıtını topla.

### K05 — Bağımsız arayüz kalite
- **ROL/ALAN:** test/delegated/k05/**; scripts/delegated/k05/**; docs/delegated/qa-accessibility-k05/**.
- **ODAK / ISSUE:** #539 #485. **Önceki açık:** T-382 çakışma K04 sahibi; K05 #1122 ayrı QA kanıtı, T-279..284 local bitti.
- **ÇAKIŞMA SINIRI:** K01–K04 web source'a yazma, aynı pool T-ID için küçük numara kuralı.
- **ÖNCEKİ PR KANITI:** [#1115](https://github.com/Naveax/Nexowire/pull/1115), [#1122](https://github.com/Naveax/Nexowire/pull/1122); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-419:** #539: K05 #1115/#1122 testlerinin CI'da gerçekten çağrılıp çağrılmadığını K13 keşif raporuyla çapraz kanıtla. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-420:** #539: #1068 admin 401/403 sorunu için ekran okuyucuya giden alert metninde yanlış başarı negatifi üret.
  2. **T-421:** #485: bağlantı ekranında boş alan/hatalı adres/iptal sonrası odak kaybı için bağımsız erişilebilirlik fixture'ları.
  3. **T-422:** #539: iki aynı adlı cihazın erişilebilir etiketinin benzersizliğini K03/K15 adaylarında test et.
  4. **T-423:** #539: source-only taramanın gerçek NVDA/Chromium kabulü gibi sunulmasını reddeden kanıt şeması.
  5. **T-424:** #539: K01–K04 sahiplerine tek tek dosya/PR/SHA ile en yüksek etkili üç somut bulgu önerisi yaz.

### K06 — Windows kurulum hataları
- **ROL/ALAN:** docs/INSTALL_WINDOWS.md, docs/CHATGPT_INSTALL_PROMPT.md; test/delegated/k06/**.
- **ODAK / ISSUE:** #485 #269. **Önceki açık:** T-383 küçük numara K06; K07 #1125 ayrı belge QA, T-378 K06.
- **ÇAKIŞMA SINIRI:** İmzalı installer/release dosyaları protected; K07 docs yolları ayrı.
- **ÖNCEKİ PR KANITI:** [#1108](https://github.com/Naveax/Nexowire/pull/1108), [#1129](https://github.com/Naveax/Nexowire/pull/1129); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-425:** #485: #1129'da yakalanan gerçek connect-page hata mesajı ile kurulum rehberi arasındaki farkı K06 izinli belgelerde düzelt ve test et. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-426:** #485: #1108/#1129 içeriklerinin aynı başlık/anchor ve doğru kurtarma yolunu koruduğunu tek source checkout'ta kanıtla.
  2. **T-427:** #485: `Oluştur`/`BAĞLA` hata örneklerinde sır/token/özel URL yankılanmasını negatif fixture ile engelle.
  3. **T-428:** #269: v1.0.8 `.cmd` checksum ile gerçek imzalı native helper kabulünü dürüstçe ayıran metin denetimi.
  4. **T-429:** #485: Windows 10/11 ve SmartScreen adımlarında hiçbir izinsiz admin/UAC çağrısı önermeyen salt-okunur kurulum kontrolü.
  5. **T-430:** #485: yayın dosyası linklerini güncel GitHub release meta ile doğrula, canlı kurulum gerektireni NOT_RUN bırak.

### K07 — Self-host bağlantı rehberi
- **ROL/ALAN:** docs/SELF_HOST.md, docs/DEPLOYMENT_ONBOARDING.md; test/delegated/k07/**.
- **ODAK / ISSUE:** #485 #539. **Önceki açık:** T-383 K06 sahibi; K07 #1125 bağımsız doküman QA, T-389 K07.
- **ÇAKIŞMA SINIRI:** K06 Windows dokümanına dokunma; Cloudflare/secret üretme veya deploy yapma.
- **ÖNCEKİ PR KANITI:** [#1100](https://github.com/Naveax/Nexowire/pull/1100), [#1125](https://github.com/Naveax/Nexowire/pull/1125); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-431:** #485: #1125 bağlantı/sürüm rehberi QA'sının #1100 ile tek PR'da çakışmadan nasıl taşınacağını incele ve kendi iki dokümanında eksikleri düzelt. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-432:** #539/R17: USB/WSL/Python/CUDA/Ollama/Hyper-V isteğe bağlı önkoşul matrisi için negatif test ve platform farkı.
  2. **T-433:** #485: doğrulanmış self-host URL ile sakıncalı uzak URL yazımının kullanıcıya gösterilen farkını belge örnekleriyle sabitle.
  3. **T-434:** #485: başarısız pairing sonrası güvenli geri dönüş adımlarını canlı secret taşımadan doğrulayan test.
  4. **T-435:** #539: salt-okunur Environment Doctor komutlarının gerçek kaynak yönlendirmeleriyle link/syntax eşitliği.
  5. **T-436:** #485: #1068 entegrasyonu sonrası rehberde değişmiş UI adlarını kaynak/test farkıyla düzelt.

### K08 — MCP hata ve durum sözlüğü
- **ROL/ALAN:** docs/ARCHITECTURE.md, docs/MCP_SURFACE.md; test/delegated/k08/**.
- **ODAK / ISSUE:** #539 #812. **Önceki açık:** K08 T-375/T-380 havuz sahibi; #1128 gerçek Türkçe status-copy bulgusu K03'e devredilecek.
- **ÇAKIŞMA SINIRI:** web/app.js owner K03/#1068; K08 salt-okunur QA ve MCP belgeleri.
- **ÖNCEKİ PR KANITI:** [#1106](https://github.com/Naveax/Nexowire/pull/1106), [#1128](https://github.com/Naveax/Nexowire/pull/1128); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-437:** #539/R18: #1128 kaynak `render()` Türkçe statü çelişkisini K03'e dosya/satır/SHA ve önerilen metinle teslim et. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-438:** #539/R01: upstream provider reddi, Agent offline ve yerel politika izin reddini tek karar tablosunda gerçek MCP şemasıyla karşılaştır.
  2. **T-439:** #539: `UNKNOWN` terminal işlem sonucunun `succeeded` metniyle karışmadığını belge/test negatifleriyle kanıtla.
  3. **T-440:** #812: console local grant gösterimi ile gerçek yetki kanıtı ayrımını MCP yüzey örneklerinde koru.
  4. **T-441:** #539/R13: reddedilmiş provider cevabında otomatik bypass/yeniden deneme önermeyen belge testleri.
  5. **T-442:** #539: main'e giren yeni MCP tool şemalarıyla iki K08 dokümanının doğruluk kontrolünü yenile.

### K09 — Sorun ve yol haritası gerçekliği
- **ROL/ALAN:** ROADMAP.md, docs/SCALE_V2_ROADMAP.md; test/delegated/k09/**.
- **ODAK / ISSUE:** #539 #481 #780 #482. **Önceki açık:** T-304 tarihsel handoff kısmi, diğer T303/305-308 source teslim; #1099/#1127 Draft.
- **ÇAKIŞMA SINIRI:** CORE/sandbox uygulamasına girme, tarihsel belgeleri yanlış final sayma.
- **ÖNCEKİ PR KANITI:** [#1099](https://github.com/Naveax/Nexowire/pull/1099), [#1127](https://github.com/Naveax/Nexowire/pull/1127); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-443:** #539: #1099/#1127 yeni ve eski 22 güvenilirlik alt işini bugünkü main'de gerçek issue/PR sonuçlarına bağlayan kaynak testi. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-444:** #481: 14 Ekim handoff'undaki daha önce kapanmış #260 ve ON HOLD #271 durumlarını yanlış görev yapılmadan güncel yol haritasında ayır.
  2. **T-445:** #780: coding-agent'ın kullanıcıya görünen iş akışından yalnız koruma dışı eksikleri delilli aday listesine dönüştür.
  3. **T-446:** #482: S1–S5 için source merged/CI hosted/physical/release kabulünü ayrı sütunda izleyen markdown doğrulama.
  4. **T-447:** #539: diğer KNN'den gelen geçerli somut hataları yol haritasına aynı işi tekrar etmeden kaynak bağlantısıyla ekle.
  5. **T-448:** #539: yol haritasında 'bitti' yazan ama açık issue kalan satırları güçlü negatif testle işaretle.

### K10 — Browser ve görsel kabul
- **ROL/ALAN:** web/README.md; scripts/delegated/k10/**; test/delegated/k10/**; docs/delegated/browser-evidence-k10/**.
- **ODAK / ISSUE:** #539 #485 #812. **Önceki açık:** T-309/310/311/314 gerçek tarayıcı ve Windows kabul bekliyor; Chromium socket EPERM.
- **ÇAKIŞMA SINIRI:** Owner .github/workflows/ci.yml'ye dokunma; K13 ile hosted güvenli test mekanizması öner.
- **ÖNCEKİ PR KANITI:** [#1116](https://github.com/Naveax/Nexowire/pull/1116); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-449:** #485: local Chromium EPERM engeline karşı mevcut hosted `browser-live` koşusunun gerçekten K10 üç durum ekranını test edip etmediğini kanıtla. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-450:** #539: fork safe runner üzerinde yalnız K10 test yollarını kullanan üç state screenshot/PNG-SHA-256 doğrulaması tasarla.
  2. **T-451:** #812: local grant ve observed input uyuşmazlığını gerçek kullanıcı ekranında yanlış etiket yapmadan gösteren test senaryosu.
  3. **T-452:** #539: tarayıcı çıktısı farklı eski PR SHAsından gelirse aynı exact-head kabulünü reddeden negatif QA.
  4. **T-453:** #485: Chrome 375/768/desktop metin taşma ve odak navigasyon matrisi için hosted gerçek artefakt üretme yolu.
  5. **T-454:** #539: Chromium çalışmadıysa çalıştı saymadan bağımsız DOM testinden hangi sorunun geçerli kaldığını raporla.

### K11 — S5 maliyet kodu ve ölçümsüz kapasite
- **ROL/ALAN:** scripts/report-s5-cost-matrix.ts, src/ops/scale-s5-cost-envelope.ts (offline); test/delegated/k11/**.
- **ODAK / ISSUE:** #487 #539. **Önceki açık:** #1102 ana dalda MERGED b5a3f884; main push CI devam, provider/canlı cihaz açık. T-379 K11 tek sahibi.
- **ÇAKIŞMA SINIRI:** Billing/gerçek tahsilat değil, yalnız offline model; K12 T-379 bağımsız ek test ama kredi K11.
- **ÖNCEKİ PR KANITI:** [#1102](https://github.com/Naveax/Nexowire/pull/1102) (merge edilmiş, tekrar yapma); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-455:** #487: merged #1102 yeni `main` commit ve otomatik main-push CI tamamlanmasını exact SHA ile doğrula, provider kabulü açık tut. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-456:** #539/R12: kapasiteEvidence `UNKNOWN` alanını JSON/CSV tüketicileri bozmadı mı diye K11 testinde tekrar üret.
  2. **T-457:** #487: eksik sağlayıcı teklifinde hiçbir müşteri fatura toplamının sıfır kabul edilmediğini örnek raporda test et.
  3. **T-458:** #487: ölçülen completion metriği olmadan hosted WSS kapasitesine sayı veren yeni kaynak alanlarını negatif regresyonla yakala.
  4. **T-459:** #487: yanlış birim/para/küsurat/NaN maliyet durumlarında gerçek kodda hata bulursan dar düzeltme ve geri dönüş testi.
  5. **T-460:** #487: yeni maliyet modeli PR'ı olacaksa K18/K12 dosyalarına girmeden exact-head CI ve source/prod ayrımını belgele.

### K12 — Bağlantı yük/iptal dayanıklılığı
- **ROL/ALAN:** scripts/bench-s5-loopback-ws-capacity.ts, scripts/bench-s5-loopback-reconnect-storm.ts; test/delegated/k12/**.
- **ODAK / ISSUE:** #487 #539. **Önceki açık:** T-071 K11 CSV emitter bağımlılığı; T-379 K11 havuz kredisi, K12 ek testi kalır; #1109 CI 6/7+pending.
- **ÇAKIŞMA SINIRI:** Yalnız bounded localhost; gerçek provider veya global CI değiştirme.
- **ÖNCEKİ PR KANITI:** [#1109](https://github.com/Naveax/Nexowire/pull/1109); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-461:** #487: #1109 current exact-head CI bitince test gerçekten keşfedilmiş mi K13 ile doğrula; kendi son değişikliklerini bozmadan düzelt. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-462:** #539/R06: reconnect ikinci turunda abort sırasında socket/queue sızıntısını gerçek localhost testinde tekrarla ve minimize et.
  2. **T-463:** #487: tek örnek p95/p99'u gerçek kapasite kabulü sanmayan ölçüm şemasını her benchmark çıktısında doğrula.
  3. **T-464:** #487: cancel/timeout ile aldatıcı sukses counters farkını negatif test ve gerekiyorsa K12 kaynak düzeltmesiyle sabitle.
  4. **T-465:** #487: CSV-only T-071 bağımlılığını K11'e ayrı kaynak talebi olarak yaz, JSON sözleşmesini koru.
  5. **T-466:** #539/R12: uzun yaşayan bağlantının ölçümü olmayan süre/ölçek tahminini UNKNOWN yapan ek gerçek davranış regresyonu.

### K13 — CI gerçek test keşfi ve kanıt
- **ROL/ALAN:** .github/workflows/delegated-noncore.yml; scripts/delegated/k13/**; test/delegated/k13/**.
- **ODAK / ISSUE:** #1006 #539. **Önceki açık:** T-327 nested tests main CI keşif açığı açık; #1112 exact 7/7 ama hedef test keşfi kanıtlanmadı.
- **ÇAKIŞMA SINIRI:** Owner #1096 `.github/workflows/ci.yml` path; ŞEF/K14 bunu owner'a kanıtla taşır.
- **ÖNCEKİ PR KANITI:** [#1112](https://github.com/Naveax/Nexowire/pull/1112); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-467:** #1006: main CI'da gerçekten çağrılmayan K09 `.test.mjs` ve nested TS dosyaları için tam liste ve yanlış-yeşil örneği çıkar. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-468:** #1006: owner CI dosyasını değiştirmeden güvenli delegated-noncore.yml runner'ında açık PR exact SHA test-discovery paketi çalıştır.
  2. **T-469:** #539/R22: #1112'de düzeltilen stale PR HEAD, yanlış run_id ve boş requiredJobs pozitif negatiflerini hosted run ile doğrula.
  3. **T-470:** #1006: 31 Draft source PR içinde yeşil ama ek testleri keşfedilmemiş ilk üç aday için açık kanıt filtresi oluştur.
  4. **T-471:** #539: main push ve PR workflow job'larının aynı exact SHA olmayabileceğini ayıran rapor kontratını işleyen test.
  5. **T-472:** #1006: PR başına otomatik yeniden dispatch olmadan açık P005 entegre test listesini K14'e ver.

### K14 — Güvenli PR entegrasyonu
- **ROL/ALAN:** scripts/delegated/k14/**; docs/delegated/integration-k14/**.
- **ODAK / ISSUE:** #1006 #539. **Önceki açık:** #1102 merged; 31 Draft P004 PR açık; #1068 ve #1096 owner PR'ları aktif; T-390 havuz sahibi.
- **ÇAKIŞMA SINIRI:** Upstream merge/CI dispatch için ŞEF kararını bekle, K14 salt-okunur karşılaştırma; protected source'a dokunma.
- **ÖNCEKİ PR KANITI:** [#1117](https://github.com/Naveax/Nexowire/pull/1117), [#1123](https://github.com/Naveax/Nexowire/pull/1123); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-473:** #1006: #1102 merge sonrası b5a3f884 yeni main üzerinde 31 Draft PR'ı tekrar/çatışma/baz SHA bakımından yeniden sınıflandır. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-474:** #1006: exact-head 7/7 yeşil 14 PR'dan gerçekten yeni testlerini çalıştıran ilk üç güvenli noncore adayı belirle.
  2. **T-475:** #1006: #1118 failing CI ve diğer pending adayları merge-ready dışına atan kesin durum raporu.
  3. **T-476:** #1006: #1068 web ve #1096 CORE dosya yol haritalarını yeni main sonrası compare et, owner haberleşme listesi üret.
  4. **T-477:** #539: K13 test keşfi açığını çözmeden '7/7 tüm yeni testler geçti' denmesini engelleyen PR özeti.
  5. **T-478:** #1006: gereksiz ayrı PR yığılmasını azaltmak için yalnız çakışmasız test/doküman paketlerinin mantıklı birleştirme planı.

### K15 — Cihaz seçimi güvenilirliği
- **ROL/ALAN:** test/delegated/k15/**; docs/delegated/device-ux-k15/**.
- **ODAK / ISSUE:** #539 #812 #485. **Önceki açık:** T-339 #1068 main merge bağımlı, diğer T-340..344 source, T-394 K15 havuz sahibi.
- **ÇAKIŞMA SINIRI:** K03 web/app.js owner #1068; K15 yalnız QA.
- **ÖNCEKİ PR KANITI:** [#1110](https://github.com/Naveax/Nexowire/pull/1110); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-479:** #539: #1110 CI/current main ile #1068 adayındaki aynı adlı cihaz erişilebilir etiket farkını tekrar doğrula. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-480:** #812: yerel grant false/true ile etkin input kanıtını birbiri yerine koymayan yeni veri matrisi ve UI negatif.
  2. **T-481:** #539: çevrimdışı/online/UNKNOWN cihaz kartına sahte 'ready' vermeyen kaynak regresyon.
  3. **T-482:** #485: ilk eşleştirmede cihaz seçilmemişken otomatik yanlış hedef işlem başlatmama testleri.
  4. **T-483:** #539: K03 owner panelinde aynı ad/uzun Unicode/cihaz sıralama değişikliği bug'ını kanıt linkiyle bildir.
  5. **T-484:** #539: K10 hosted browser kabulünden test edilebilir cihaz kartı noktalarını kendi QA raporunda ayır.

### K16 — Windows process sonlandırma kanıtı
- **ROL/ALAN:** src/diagnostics/environment-doctor.ts (read-only); scripts/run-environment-doctor.ts (read-only); test/delegated/k16/**.
- **ODAK / ISSUE:** #540 #539. **Önceki açık:** T-345..350/T-387 source test bitti; #1105 owner Windows fiziksel, T-385 K02 daha küçük owner.
- **ÇAKIŞMA SINIRI:** Ömer #1096 `src/agent/process-manager.ts` değiştiriyor; K16 bu kaynakta patch yok.
- **ÖNCEKİ PR KANITI:** [#1105](https://github.com/Naveax/Nexowire/pull/1105), [#1121](https://github.com/Naveax/Nexowire/pull/1121); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-485:** #540: #1105 HEAD'de root exited/grandchild alive sahte başarı negatiflerinin hosted Windows Node22/24 gerçek job'da yürütülebilirliğini kanıtla. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-486:** #540: `taskkill` exit!=0, PID reuse, child alive ve 128 exit alanlarında false PASS'i reddeden bağımsız fixture'ları büyüt.
  2. **T-487:** #540: gerçek Work-PC kabulü için process tree, owner PID identity ve Job readback kanıtını owner'a anlaşılır matrise bağla.
  3. **T-488:** #539/R17: Environment Doctor CLI secret maskesi ve Windows/Linux NOT_RUN ayrımının main ile uyumunu tekrar test et.
  4. **T-489:** #540: K16 #1121 T-385 duplicate kaydını K02'ye bırak; kendi QA kodunu koruyarak yeni benzersiz issue görevi seç.
  5. **T-490:** #540: owner #1096 süreci düzeltirse güncel main'de ilgili K16 testlerini koş, fiziksel şartlar sağlanmadan issue kapatma.

### K17 — Beceri kayıt hataları
- **ROL/ALAN:** src/skills/manifest.ts, src/skills/registry.ts (yalnız metadata); test/delegated/k17/**.
- **ODAK / ISSUE:** #780 #539. **Önceki açık:** T-351–356, T-393 source QA bitti; #1030 eski source Draft, #1080 sandbox owner.
- **ÇAKIŞMA SINIRI:** Sandbox/izin genişletme yasak; kaynak parser değişecekse #1030 ile duplicate kontrol.
- **ÖNCEKİ PR KANITI:** [#1113](https://github.com/Naveax/Nexowire/pull/1113); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-491:** #780: #1113 hosted exact-head CI ve #1030 eski PR arasındaki tekrarlı metadata testlerini ayıkla. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-492:** #780: platform vaadi olmadan Windows/macOS/Linux destekli gösterme hatasını kaynak manifest örneğiyle tekrar üret.
  2. **T-493:** #780: symlink/dizin dışına kaçış meta taramasında gerçek güvenlik koduna geçmeden negatif QA raporu.
  3. **T-494:** #539: bozuk frontmatter anahtarlarının kullanıcıya yanlış yetenek sunumunu önleyen test ve varsa dar parser düzeltmesi.
  4. **T-495:** #780: #1080 Git sandbox security sahibinin path'ine dokunmadan skill katalog kaynak doğruluğunu denetle.
  5. **T-496:** #780: eski #1030 ile yeni #1113 bağımsız testlerinin birlikte çalıştığı bir konsolide kaynak kanıtı.

### K18 — Transfer ölçüm güvenilirliği
- **ROL/ALAN:** src/ops/scale-transport-metrics.ts, scripts/report-s5-measured-scenarios.ts; test/delegated/k18/**.
- **ODAK / ISSUE:** #487 #588 #539. **Önceki açık:** T-357–362, T-384 local bitti; #1107 ve #1119 Draft, CSV K11.
- **ÇAKIŞMA SINIRI:** Hash/transfer/WAL authorization çekirdeği Ömer; K19 UX QA ayrı.
- **ÖNCEKİ PR KANITI:** [#1107](https://github.com/Naveax/Nexowire/pull/1107), [#1119](https://github.com/Naveax/Nexowire/pull/1119); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-497:** #487: #1119/1107 exact CI ve yeni main #1102 kapasite alanı ile metrik rapor type uyumunu test et. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-498:** #588: sent/received/verified byte eşitliğinde ACK kaybı sonrası yanlış 100% üretmeyen negatif QA.
  2. **T-499:** #487: KB/KiB/MiB ve süre türleri karışınca parse false-zero yerine UNKNOWN üreten gerçek metrik kodu testi.
  3. **T-500:** #539/R12: boş/sentetik p95 kapasite çıktısına sahte gerçek sağlayıcı güven aralığı atamama kontrolü.
  4. **T-501:** #588: >220KiB kesinti/tekrar local fixture setini K19'suç testlerinden bağımsız ölçüm katında tekrarla.
  5. **T-502:** #487: K11 CSV raporuna girmeden kendi JSON metrics source'unda gerçek hata bulursan kod+regresyon düzeltmesi.

### K19 — Büyük dosya UX/doğrulama
- **ROL/ALAN:** test/delegated/k19/**; docs/delegated/file-ux-k19/**.
- **ODAK / ISSUE:** #588 #539. **Önceki açık:** T-363–368 ve T-377 source bitti; gerçek iki-PC/#588 OPEN; PR #1111/#1124.
- **ÇAKIŞMA SINIRI:** Transfer hash/parça birleştirme/yetki source protected; K18 metrics farklı.
- **ÖNCEKİ PR KANITI:** [#1111](https://github.com/Naveax/Nexowire/pull/1111), [#1124](https://github.com/Naveax/Nexowire/pull/1124); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-503:** #588: #1111/#1124 kaynak testlerinin 221KiB/1MiB > boyut karşı örneklerini güncel main ve exact CI'da yeniden çalıştır. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-504:** #588: yerel file-copy QA ile gerçek iki-PC/Hub transfer çözümünü açıkça ayıran kabul matrisi.
  2. **T-505:** #588: cut/retry/duplicate destination ve overwrite yok durumlarında 'UNKNOWN' metnini kanıtlayan UX negatifleri.
  3. **T-506:** #539/R15: ACTUAL written bytes ve independent digest readback olmadan tamamlandı demeyen referans model test.
  4. **T-507:** #588: uzun Unicode/special karakter dosya adında kopyalama ekranının yanlış kaynak yolunu göstermemesi testi.
  5. **T-508:** #588: fiziksel iki-PC owner değerlendirmesi için en küçük 220KB başarısızlık tarifini PR/issue bağıyla hazırla.

### K20 — CI hatası/issue ilerleme yönetimi
- **ROL/ALAN:** scripts/delegated/k20/**; test/delegated/k20/**; docs/delegated/maintenance-k20/**.
- **ODAK / ISSUE:** #1006 #539 #540. **Önceki açık:** #1118 exact HEAD CI `test (22)` FAIL; T-381/388 K20, T-385 K02 sahibi. #1130 pending.
- **ÇAKIŞMA SINIRI:** K13 CI workflow source'una ve owner #1096 yetki koduna dokunma.
- **ÖNCEKİ PR KANITI:** [#1118](https://github.com/Naveax/Nexowire/pull/1118), [#1130](https://github.com/Naveax/Nexowire/pull/1130); kaynak/test seviyesi, cihaz ayrı.
- **AKTİF T-509:** #1006: #1118 Node22 CI failure logunu exact-head read-only incele, K20 kendi test/scripts kaynak hatasını yeniden üretip dar fix + re-test yap. **Bitti:** yeniden üretim + dar çözüm veya owner-açık test kanıtı + exact SHA/test/PR kaydı; fiziksel kabul gerekirse NOT_RUN.
- **KUYRUK (5):** Her birinin bitiş ölçütü: commit/PR + yeniden üretim/negatif test + doğru yerel/hosted/fiziksel sonuç ayrımı.
  1. **T-510:** #1006: 32 yeni PR'da source-only, 7/7 run, test discovery ve fiziksel kabul ayrımını yeniden raporlayan araç.
  2. **T-511:** #539: T-385 duplicate claim'ini K02'ye bırakıp K20 #1130'un benzersiz CI evidence araçlarını doğrula.
  3. **T-512:** #1006: owner #1096 ve #1068 güncel HEAD değiştikçe GitHub PR lineage ve SHA kaymasını yanlış PASS'e çevirmeyen negatif.
  4. **T-513:** #540: K16 Windows sonlandırma kanıtının yalnız source/test olduğunu issue kayıtlarında otomatik sınıflandır.
  5. **T-514:** #1006: P005 120 yeni görev ve 20 bağımsız dosya alanı için küçük sahiplik/çakışma audit yaz.

## HAVUZ — SAHİPSİZ / BAĞIMSIZ YEDEKLER
Eski P004 HAVUZ'dan henüz alınmamış: **T-376, T-386, T-391, T-392**. Eski tanımlar P004 git geçmişinde; küçük KNN ilk geçerli sahip. Yeni yedekler aşağıdadır; tümü **şu an sahipsiz**, tek sahip yalnız kayıtla alınır. Görev tanımı kendi alanında salt-okunur analiz, test/fixture veya izinli kaynak düzeltmesi olarak sınırlandırılır; başkasının dosyasına el sürülmez.

- **T-515:** #485: yeni kurulum sayfasındaki gerçek başarısız bağlantı örneklerinden biri için, ilgili tek sahipli test alanında yeniden üretim ve negatif doğrulama. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-516:** #539: bağlantı durumunun bir kez başarılı ardından reddedilen yanıtında eski yeşil durum kalıp kalmadığını doğrula (yalnız kendi test yolu). **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-517:** #539: 401 ile 403'ün kullanıcıya aynı hata gibi görünmesini owner'ın en güncel arayüzünde delillendir, kaynak owner'a bırak. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-518:** #539: büyük ekran/telefon odak sırası ve yeniden deneme düğmesinin gerçek tarayıcı kanıtı. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-519:** #485: Windows yönergesindeki link/kurulum önkoşulu uyumsuzluğunu gerçek ana dal üzerinden yeniden test et. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-520:** #485: self-host yönergesindeki sağlıklı/bozuk bağlantı adımlarını iki bağımsız offline örnekte test et. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-521:** #539: MCP'de UNKNOWN, FAILED ve APPLIED durum metinlerinin aynı anlamı vermediğini örnekle. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-522:** #539: tarihsel yol haritasındaki kapanmış iş ile bugünkü açık issue arasındaki kaynak doğruluğunu denetle. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-523:** #539: Playwright yerine hosted tarayıcı ekran çıktısı edinilemiyorsa NOT_RUN ispat formatı ve fail-closed denetimi. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-524:** #487: kapasite bilinmiyor çıktısının CSV/JSON kaydında belirsiz kalmasını tekrardan doğrulayan regresyon. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-525:** #487: loopback yük verisinin canlı sağlayıcı sonucu sanılmasını önleyen tek negatif test. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-526:** #1006: main CI test keşfi devre dışıyken kaynak PR'ı yeşil sayılmaması için bir negatif kontrol. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-527:** #1006: aynı exact HEAD için 7/7 CI, eksik test keşfi ve gerçek cihaz NOT_RUN farklarının PR raporuna işlenmesi. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-528:** #1006: sayfalanan çok sayıdaki PR'da aynı PR iki defa puanlanmadığını taze kaynak üstünde sınama. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-529:** #539: cihaz seçimi aynı isimde iki aday döndürdüğünde doğru yanlış başarı durumu kontrolü. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-530:** #540: Windows olmayan ortamda taskkill başlatılamamasının kill başarısı diye sayılmaması regresyonu. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-531:** #780: beceri manifestinin bilinmeyen platformda çalıştı iddiası üretmediği negatif örnek. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-532:** #588: 220KB üstü yerel transferde gönderildi fakat teslim alındı kanıtı gelmedi durumunu ayrıştıran test. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-533:** #588: büyük dosya gösteriminde KB/KiB ve eksik checksum kanıtı kullanıcı mesajı QA. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.
- **T-534:** #1006: fail olan job yanında altı yeşil job varsa bütün PR'ın başarısız sınıflandırılması regresyonu. **Bitti:** kaynak sürümü ve issue bağlantısı, öncesi/sonrası test, PR ya da owner'a somut RED raporu.

## PROJEYE GİDECEKLER — PR VE TEST KANITI
| KNN | Bu çevrimin PR'ları | Şimdiki karar |
|---|---|---|
| K01 | [#1114](https://github.com/Naveax/Nexowire/pull/1114) | #1068 web owner ile kaynak çakışmasın; yeni bağımsız QA |
| K02 | [#1101](https://github.com/Naveax/Nexowire/pull/1101), [#1126](https://github.com/Naveax/Nexowire/pull/1126) | #1068 web owner ile kaynak çakışmasın; yeni bağımsız QA |
| K03 | [#1103](https://github.com/Naveax/Nexowire/pull/1103) | #1068 web owner ile kaynak çakışmasın; yeni bağımsız QA |
| K04 | [#1104](https://github.com/Naveax/Nexowire/pull/1104), [#1120](https://github.com/Naveax/Nexowire/pull/1120) | #1068 web owner ile kaynak çakışmasın; yeni bağımsız QA |
| K05 | [#1115](https://github.com/Naveax/Nexowire/pull/1115), [#1122](https://github.com/Naveax/Nexowire/pull/1122) | Açık Draft; exact HEAD/test keşfi ve dosya çakışması doğrulanmadan birleştirme yok |
| K06 | [#1108](https://github.com/Naveax/Nexowire/pull/1108), [#1129](https://github.com/Naveax/Nexowire/pull/1129) | Açık Draft; exact HEAD/test keşfi ve dosya çakışması doğrulanmadan birleştirme yok |
| K07 | [#1100](https://github.com/Naveax/Nexowire/pull/1100), [#1125](https://github.com/Naveax/Nexowire/pull/1125) | Açık Draft; exact HEAD/test keşfi ve dosya çakışması doğrulanmadan birleştirme yok |
| K08 | [#1106](https://github.com/Naveax/Nexowire/pull/1106), [#1128](https://github.com/Naveax/Nexowire/pull/1128) | Açık Draft; exact HEAD/test keşfi ve dosya çakışması doğrulanmadan birleştirme yok |
| K09 | [#1099](https://github.com/Naveax/Nexowire/pull/1099), [#1127](https://github.com/Naveax/Nexowire/pull/1127) | Açık Draft; exact HEAD/test keşfi ve dosya çakışması doğrulanmadan birleştirme yok |
| K10 | [#1116](https://github.com/Naveax/Nexowire/pull/1116) | Açık Draft; exact HEAD/test keşfi ve dosya çakışması doğrulanmadan birleştirme yok |
| K11 | [#1102](https://github.com/Naveax/Nexowire/pull/1102) | #1102 main'e MERGED; yeni P005 işleri ayrı PR'da |
| K12 | [#1109](https://github.com/Naveax/Nexowire/pull/1109) | Açık Draft; exact HEAD/test keşfi ve dosya çakışması doğrulanmadan birleştirme yok |
| K13 | [#1112](https://github.com/Naveax/Nexowire/pull/1112) | Keşif açığını gerçek koşan testle gider; genel 7/7 tek başına yeterli değil |
| K14 | [#1117](https://github.com/Naveax/Nexowire/pull/1117), [#1123](https://github.com/Naveax/Nexowire/pull/1123) | Açık Draft; exact HEAD/test keşfi ve dosya çakışması doğrulanmadan birleştirme yok |
| K15 | [#1110](https://github.com/Naveax/Nexowire/pull/1110) | #1068 web owner ile kaynak çakışmasın; yeni bağımsız QA |
| K16 | [#1105](https://github.com/Naveax/Nexowire/pull/1105), [#1121](https://github.com/Naveax/Nexowire/pull/1121) | #1096 process-manager korumalı; yalnız test/QA |
| K17 | [#1113](https://github.com/Naveax/Nexowire/pull/1113) | Açık Draft; exact HEAD/test keşfi ve dosya çakışması doğrulanmadan birleştirme yok |
| K18 | [#1107](https://github.com/Naveax/Nexowire/pull/1107), [#1119](https://github.com/Naveax/Nexowire/pull/1119) | Açık Draft; exact HEAD/test keşfi ve dosya çakışması doğrulanmadan birleştirme yok |
| K19 | [#1111](https://github.com/Naveax/Nexowire/pull/1111), [#1124](https://github.com/Naveax/Nexowire/pull/1124) | Açık Draft; exact HEAD/test keşfi ve dosya çakışması doğrulanmadan birleştirme yok |
| K20 | [#1118](https://github.com/Naveax/Nexowire/pull/1118), [#1130](https://github.com/Naveax/Nexowire/pull/1130) | #1118 CI FAIL, önce düzelt; #1130 incele |

## ONUR'UN LİSTESİ — YALNIZ İNSANIN YAPACAĞI
1. Aynı **KÖLE MESAJI V002**'yi 20 sekmeye, numaralarını koruyarak gönder (tur sayısı eşit olmak zorunda değil). Köle raporunu ŞEF'e taşıma; KNN dosyalarına kaydeder.
2. Sekmeleri dolaştıktan sonra ŞEF'e kısa **ŞEF DEVAM** promptunu gönder. Ek onay veya Ömer'den collaborator istemek gerekmiyor.
3. Fiziksel cihaz/Windows testleri kişisel makine/izin gerektirirse, ŞEF yalnız gerçekten kaçınılmaz insan adımını burada ayrıca tarif eder; sırf NOT_RUN diye sekmeleri bekletme.

## Arşiv / şef hafızası
- Eski biten ve sahiplenilen T-255…T-394 kayıtları [ARSIV A004](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/ARSIV.md)'te, karar gerekçeleri [SEF S005](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/SEF.md)'tedir. Eski görev tanımlarını görmek için `P004` commit geçmişi.
