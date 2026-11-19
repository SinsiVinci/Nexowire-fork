# ŞEF PANO P013 | 19 Kasım 2026

**Durum:** [Naveax main](https://github.com/Naveax/Nexowire/commit/52d452f717d891eeaf4c2b9aff3c6e1ea68369b0) 52d452f717d891eeaf4c2b9aff3c6e1ea68369b0 değişmedi. Owner [#1160](https://github.com/Naveax/Nexowire/pull/1160) 81028bf643e3dc3cb5b0ab3f9c609c239732a413 OPEN/DRAFT, main'e MERGED DEĞİL. Yeni owner [#1235](https://github.com/Naveax/Nexowire/pull/1235) Scale Worker overflow OPEN/DRAFT, bu alana müdahale yok.

**İlerleme ve delil:** P012'den beri 69 ekip kayıt commit'i / K01–K20 20 dosya güncel; 69 ürün düzeltmesi değildir. K20 source audit 2 bugfix, K04 admin concurrency RED, K09 invalid issue RED fix, K19 false-CI fix, K13 651 tracked TS SHA envanteri. Yalnız K13 34 portable per-file PASS receipt ve yedi önceden eksik delegated testin Node22/24 required 409 TAP yürütmesini kanıtladı. #1205 default glob 44/651 seçti; 607 o komutta seçilmedi. 651 PASS demek YANLIŞ. İşçi değerlendirme: ekip/DEGERLENDIRME_20261119.md.

**Kritik yol:** Owner UI source RED çözümü → testlerin SHA/run/job/TAP dosya bazında doğrulanması → yalnız owner gerçek Windows/SYSTEM/SQLite/DPAPI ve #588 2-PC kabulü → main/release. Güvenilir ürün tamamlanma yüzdesi veya kalan gün hesabı yok. [CI 44576357852](https://github.com/Naveax/Nexowire/actions/runs/44576357852) owner exact SHA için SUCCESS, bu Work-PC fiziksel kabulü değildir. #1161 ve #588 gerçek cihaz NOT_RUN, #487 24h provider fatura UNKNOWN, #485 gerçek installer rollback NOT_RUN.

**Yönetim:** P012 W421–W580 artık tarihsel/superseded; hepsini BİTTİ sayma. P013 20 görevli × (1 AKTİF + 5 KUYRUK) W581–700 ve sahipsiz W701–724. Aynı SHA üzerinde aynı kanıtı her mesajda tekrar raporlama: yalnız yeni RED, fix, code commit, CI sonucu değişirse KNN güncelle. Kendi alanı harici dosyaya ve protected owner core'a dokunma. Başka kölenin işini üstlenmeden önce 19 KNN'yi tarayıp sahipsiz claim'i kayıt dosyana yaz.

**Yetki:** SinsiVinci write izni var, ancak Ömer'in tekil yazılı izin kuralı nedeniyle yeni PR, PR/issue close, main merge, force push, release/deploy/tag YOK. CORE/Broker/authorization/SQLite/native/SYSTEM/DPAPI/Cloudflare/payment/secret/protected CI owner-only. Kendi OPEN QA/docs PR'ında gerçek RED varsa minimum fix + test serbest, owner-ported/kapalı PR değişmez.

## 20 işçinin optimize görevleri

### K01 | Bağlantı ve pairing
**AKTİF W-581:** #1114: owner 403-null ve 200-null gerçek kaynak RED negatiflerini tek çalışır QA testinde doğrula
**KUYRUK (5):**
- W-582: 401/403/429/503 hata durumlarını ayrı testle
- W-583: JSON null, boş object ve geçerli yanıtı birbirinden ayır
- W-584: Gizli error metninin UI'ye taşınmasını fail closed test et
- W-585: Açık PR test dosyasında dar minimum düzeltme ve exit kodu kaydet
- W-586: Owner için web/connect.js satır/bug kanıtını teslim et

### K02 | Mobil CSS ve PNG
**AKTİF W-587:** #1101: tekil gerçek mobil overflow RED bul, port edilmiş testi kopyalama
**KUYRUK (5):**
- W-588: 320/375px Unicode pill sarılmasını test et
- W-589: Boş IDAT/CRC negatifini sahte PNG kabulünden ayır
- W-590: Gerçek browser screenshot artefaktı yoksa NOT_RUN de
- W-591: Zoom ve forced-colors odak davranışını izole test et
- W-592: CI'da yeni testin explicit çağrısını göster

### K03 | Dashboard/Bridge
**AKTİF W-593:** #1230/#1232 portundan sonra kalan farklı Bridge pending/UNKNOWN RED ara
**KUYRUK (5):**
- W-594: Whitespace-only requestId yanlış ilerleme negatifini test et
- W-595: Farklı cihaz ACK ile yanlış applied iddiasını reddet
- W-596: Console grant ekranında offline/live farkını test et
- W-597: Açık K03 test dalı varsa only new RED fixture ekle
- W-598: Yeni RED yoksa NO_DELTA, havuzdan farklı iş al

### K04 | Admin güvenilirliği
**AKTİF W-599:** #1104: 200/403 eşzamanlı geç yanıt yarışı owner source 0/2 RED'i patch-ready kanıtla
**KUYRUK (5):**
- W-600: Eski 403 ve yeni 200 ters sıra regresyonu test et
- W-601: 401/403/503 sahte body/statusText redaksiyon negatifini koru
- W-602: Admin concurrency iki yeni testin CI 44609496987 gerçek çağrısını doğrula
- W-603: Owner web/admin.js için last-request-wins minimal değişiklik taslağı ver
- W-604: KPI/aria-busy ve gerçek browser kabulünü ayrı fişle

### K05 | Erişilebilirlik
**AKTİF W-605:** İç içe install-content/copy-status aria-live bulgusunu kullanıcıya etkili eşsiz testle doğrula
**KUYRUK (5):**
- W-606: K01 ile dosya çakışmadan canlı bölge negatif fixture oluştur
- W-607: K05 45/45 hosted testinin düzeltme değil algılama olduğunu ayır
- W-608: Dört evolved assertion içinde eksik yeni negatif ara
- W-609: Keyboard focus ve zoom durumunu izole DOM ile ölç
- W-610: Gerçek NVDA olmadığı sürece erişilebilirlik kabulü verme

### K06 | Kurulum ve sürüm
**AKTİF W-611:** #1231 aday ile v1.0.8 yayın installer SHA/PowerShell 5.1 ayrımında belge RED ara
**KUYRUK (5):**
- W-612: Resmi kurulum URL ve pin sürümünü karşılaştır
- W-613: Yanlış SHA indirme yönlendirmesini negatif testle yakala
- W-614: Hatalı ZIP çıkarma sırası için safe belge fixture oluştur
- W-615: Node 22/24 docs testini exact HEAD'e bağla
- W-616: Gerçek temiz Windows kurulumunu PHYSICAL_NOT_RUN tut

### K07 | Self-host belgeleri
**AKTİF W-617:** #1100 W572 CurrentUser vs SYSTEM uyarısını gerçek docs/test kabulüne bağla
**KUYRUK (5):**
- W-618: SYSTEM LocalMachine DPAPI yanlış eşitlik önerisini negatif testle reddet
- W-619: 32/32 hosted docs TAP'i yeni PR exact SHA'da kontrol et
- W-620: Kritik SQLite migration'ı kullanıcı docsundan ayrı tut
- W-621: Eksik tekil self-host geri dönüş senaryosunu fixture ile test et
- W-622: Yeni bug yoksa kopya rapor üretme, havuzdan işe geç

### K08 | MCP redaksiyon
**AKTİF W-623:** #1106 denial/cookie origin kaynak RED'ini protected koda dokunmadan izole test et
**KUYRUK (5):**
- W-624: 403 izinsiz ile ağ kesintisi yanlış sınıfını ayır
- W-625: #1035 zero-job/test.todo'yu PASS yazma
- W-626: Yanıt gövdesi gizli canary sızıntısını offline test et
- W-627: İzinli K08 açık PR varsa dar fixture düzelt
- W-628: Owner'a kaynak SHA/negatif ve CI boşluğunu teslim et

### K09 | Issue doğruluk
**AKTİF W-629:** #1145 invalid issue-ID kaynak fix'i owner exact kaynakla karşılaştır ve eksik negatifini teslim et
**KUYRUK (5):**
- W-630: Geçersiz -7 ve uygunsuz timestamp testlerini koru
- W-631: Yeni ID fix'i üzerinde yerel 7/7 testi tekrar bağla
- W-632: CI 44605826854 success ile nested testin seçilmesini ayır
- W-633: Sahte issue closed durumunun yeni bir mutantını test et
- W-634: Owner'a iki dosyalık minimal port önerisi oluştur

### K10 | Browser QA güvenliği
**AKTİF W-635:** #1116 owner browser-visual-smoke file:// dış root izin RED'ini negatif fixture ile doğrula
**KUYRUK (5):**
- W-636: Raw error.message CANARY sızıntısını ayrı test et
- W-637: Realpath symlink dış kaçışı src değiştirmeden test et
- W-638: Owner-ported K10 suite ile yeni benzersiz testi ayır
- W-639: Gerçek Chromium PNG sonucu yoksa SCREENSHOT_NOT_RUN
- W-640: Owner için iki bug'ın dar fix + test planını üret

### K11 | S5 maliyet
**AKTİF W-641:** #487 provider fatura UNKNOWN ile sentetik kapasite başarı iddiası farklılığında yeni RED ara
**KUYRUK (5):**
- W-642: Cost-report exact port kodunu tekrar üretme
- W-643: Subcent/CSV sahte sıfır kuralını fixture ile denetle
- W-644: 24h soak gerçek receipt yoksa PASS verme
- W-645: Node22/24 exact unit test farkı varsa düzelt
- W-646: Benzersiz bulgu yoksa havuzdan farklı S5 işine geç

### K12 | S5 loopback
**AKTİF W-647:** #1109 AbortSignal/teardown 4 unported testi gerçek Node ortamında çalıştır
**KUYRUK (5):**
- W-648: ws/tsx modül eksikliğini mevcut hosted ortamla aş
- W-649: Late socket ACK/reconnect yanlış tamamlandı negatifini sınama
- W-650: İki benchmark evolved dosyanın gerçek semantik farkını ayır
- W-651: Diverged 4 ahead/2 behind riski owner'a kanıtla
- W-652: Gerçek provider 24h ve fiziksel cihazı NOT_RUN tut

### K13 | CI kapsamı
**AKTİF W-653:** #1205: 651 tracked dosyanın 34 file receipt ve 439 kanıtsız dosya durumunu makine-okunur kanıta dönüştür
**KUYRUK (5):**
- W-654: Yedi eski eksik testin Node22/24 409 TAP'ini tekrar iş yazmadan kapat
- W-655: CLI'da anılan 152 dosyayı TAP receipt yokken PASS sayma
- W-656: Gerçek per-file execution proof için eksik alanları modelle
- W-657: K20 foreign-run audit alanıyla çakışmadan kendi CI testini düzelt
- W-658: Güncel owner SHA için 651 satırlık rapor yerine kısa actionable özet sun

### K14 | PR entegrasyon
**AKTİF W-659:** 38 açık SinsiVinci PR için owner exact/evolved/absent kararlarından gerçek benzersiz 5 adayı seç
**KUYRUK (5):**
- W-660: Kapalı #1103 owner-exact 2 yolunu tekrar iş listesine sokma
- W-661: 6 CI_REPAIR PR için gerçek job sırasını kontrol et
- W-662: 18 path-only adaydan semantik duplicate olanları ele
- W-663: En güvenli üç test/docs PR için kanıtlı owner review paketi hazırla
- W-664: Owner açık izni yokken main merge/PR close yapma

### K15 | Cihaz UX
**AKTİF W-665:** #1110 gerçek owner HTTP403'ün offline diye sunulmasını kaynak/fixture ile RED kanıtla
**KUYRUK (5):**
- W-666: Stale 'Bağlı' label fixture'ını güncel 'Cihaz çevrimiçi' ile düzelt
- W-667: 0 cihaz ile yanlış cihaz ayrımını negative test et
- W-668: 23 V8 izole fixture'ın Node suite ile farkını kapat
- W-669: Kendi açık #1110 test alanında dar commit varsa CI bağla
- W-670: Gerçek 2-PC/grant testini PHYSICAL_NOT_RUN tut

### K16 | Windows testleri
**AKTİF W-671:** #1121 owner'da absent 6 platform-status testinin benzersiz yanlış-yeşil vakasını kanıtla
**KUYRUK (5):**
- W-672: #1105 exact-ported 4 dosyayı tekrar yazma
- W-673: Windows hosted taskkill child regression job'unu aynı SHA ile doğrula
- W-674: Synthetic/real Work-PC PID sonucu ayrımını koru
- W-675: K16 test-only yolunda mevcut PR'a dar negatif ekle
- W-676: Owner'a test seçimi ve gerçek fiziksel kabul farkını teslim et

### K17 | Skill symlink QA
**AKTİF W-677:** #1150 lstat/realpath owner korumasına rağmen kalan gerçek race bug RED varsa ispatla
**KUYRUK (5):**
- W-678: Path-swap handle identity negatifini sahte PASS'den ayır
- W-679: Yeni case owner testinde zaten var mı exact blobla kontrol et
- W-680: Linux/macOS izole filesystem testini mümkünse çalıştır
- W-681: Windows reparse/SYSTEM güvenlik koduna dokunma
- W-682: RED yoksa NO_DELTA ve skill metadata havuz işi al

### K18 | Transfer metrik
**AKTİF W-683:** #1119 bytes KB/KiB ve UNKNOWN owner absent negatifinin gerçek rapor etkisini test et
**KUYRUK (5):**
- W-684: #1107 evolved source ve absent QA arasındaki yeni farkı bul
- W-685: #1139/#1151 owner exact testini tekrarlama
- W-686: Sahte ACK ile gerçek receiver SHA'yı ayır
- W-687: Kap 64MiB/256MiB farklılıklarını gerçek source kanıtla
- W-688: Yeni unit yanlış-yeşil varsa izinli K18 test PR'ında düzelt

### K19 | Transfer/CI kanıtı
**AKTİF W-689:** #1136 echo sahte test keşfi fix c6c3128 exact CI 44609222768 sonucunu kanıtla
**KUYRUK (5):**
- W-690: #588 ilk HTTP413 hatasının katmanını trace olmadan uydurma
- W-691: 256MiB+ gerçek 2-PC tek gönderim NO-GO'yu koru
- W-692: Yanlış yorum/echo komutunu gerçek CI sayan yeni parser mutantı ara
- W-693: K18 byte unit dosyalarına dokunma
- W-694: Mevcut #1136 PR'ında benzersiz RED testi ve owner inceleme fişi tut

### K20 | CI TAP doğruluğu
**AKTİF W-695:** #1152 strict run/attempt/headSHA ve cancelled/unsafe TAP fix'ini 82/82 exact job ile owner'a teslim et
**KUYRUK (5):**
- W-696: CI 44609751252 fixed41 FAIL/Node22 CANCELLED durumunu kesin kaydet
- W-697: Foreign-run metadata yanlış-yeşil negatifini dar test et
- W-698: Missing/duplicate/unsafe TAP footer negatifini koru
- W-699: K13 full suite coverage alanına müdahale etme
- W-700: Owner'a #1152 minimum source-ported QA patch ve CI gate ihtiyacı ver

## Sahipsiz güvenli havuz W701–W724
- W-701: Bağlantı 403 null body: source negative minimal owner handoff
- W-702: Admin 403↔200 stale response browser fake DOM repro
- W-703: Mobile screenshot PNG receipt + non-empty IDAT
- W-704: K05 aria-live nested DOM negative assertion
- W-705: Stable v1.0.8 latest installer hash link source review
- W-706: Same-user SYSTEM migration docs false-safe negative
- W-707: MCP 403 origin vs transport denial redaction
- W-708: K09 invalid timestamp negative on owner exact source
- W-709: K10 file:// external path route leak negative
- W-710: K11 synthetic bill source false-zero test
- W-711: K12 AbortSignal teardown socket race
- W-712: K13 root 574 test manifest independent proof
- W-713: K13 explicit file selected not-run reconciliation
- W-714: K14 old fixed59 PR count stale gating test
- W-715: K15 wrong-device 403 UI wording negative
- W-716: K16 Windows child PID terminal proof hosted
- W-717: K17 stale symlink handle fixture on disposable FS
- W-718: K18 KiB byte-counter overflow negative
- W-719: K19 HTTP413 first boundary read-only mapping
- W-720: K20 run-attempt mismatch fixture
- W-721: K20 duplicate/cancelled TAP summary canary
- W-722: Keyboard focus isolated viewport fixture
- W-723: MCP secret redaction source-only fixture
- W-724: PR evidence stale HEAD-merge guard fixture

## Projeye gidecekler
K20 [#1152](https://github.com/Naveax/Nexowire/pull/1152) 63cb871d: 82 TAP PASS ama eski fixed41 CI FAIL; K04 [#1104](https://github.com/Naveax/Nexowire/pull/1104) 90f28d78: local 5/5 + 6/6, hosted CI pending; K09 [#1145](https://github.com/Naveax/Nexowire/pull/1145) 17953c24: genel CI SUCCESS ancak unique testin owner entegrasyonundaki yürütmesi ayrı; K19 [#1136](https://github.com/Naveax/Nexowire/pull/1136) c6c3128c: local 12 PASS, CI pending; K07 [#1100](https://github.com/Naveax/Nexowire/pull/1100) 18cf22ab: docs + test 32 TAP. Bu PR'lar açık, main'e **bu kontrolde 0 kod merge**. PR dışındaki Ömer #1160 integration başarıları main değildir.

## Onur'un listesi
Sadece değişmeyen KÖLE MESAJI'nı K01–K20 sekmelerine yeniden yapıştır. Rapor taşıma yok. Gerçek Work-PC/secret/SYSTEM erişimi veya release işi atanmıyor.

## Tarihsel referans
[P012](https://github.com/SinsiVinci/Nexowire-fork/blob/0e7a78091ce43720a94a011e9d0009e7cf6cada3/ekip/PANO.md) ve A012 kayıtları eski işleri korur. Açık blokajlar P013'e göre yeniden seçildi.
