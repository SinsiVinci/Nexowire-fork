# NEXOWIRE EKİP PANOSU — P007
Tarih: 2026-11-08 (Europe/Istanbul) | PROTOKOL V006 | 59 açık PR teslim önceliği

## Yönetim kararı
- **YENİ PR AÇMA: DURDU. UPSTREAM MAIN MERGE: ÖMER'İN AÇIK ONAYINA KADAR DURDU.** Mevcut PR dalında güvenli düzeltmeler/kanıt sürer. Issue close, canlı servis/cihaz/DB, release/deploy da yok.
## Hedef / kritik yol / gerçek ilerleme
- [59 açık PR'ın exact SHA, CI, dosya denetimi](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/PR_DENETIM_20261108.md): SinsiVinci tarafından açılmış **91 toplam PR; 59 açık Draft, 32 kapalı veya birleşmiş**. Açık 59'un **48'i generic 7/7 yeşil**, **5'i CI FAIL**, **6'sı 0-job**; 59/59 envanterli, fakat yeni testlerin hosted keşfi ve gerçek cihaz kabulü ayrıca gerekiyor. Bu kontrolde Ömer tarafından onaylanan **0 birleşim**, upstream main değiştirilmedi.
 - Öncelik sırası **CI #1149/#1152** → **59 PR temizliği #1153** → **arayüz #1068** → **aktarım #588/#1151** → **Skill #1150** → **S5 #487**. Yedi delege testi required CI'da seçilmemiş; K20 sabit 41 kapısı 55/55 TAP'ı dahi job FAIL yapıyor. Ana ci.yml / CORE/Broker/Agent/Hub/SQLite/auth owner #1096 ve web source owner #1068, sadece salt-okunur. K13 delegated-noncore.yml tek sahip.
 - P006 T-535…T-654 önceki 120 görevdir, P006 20/20 ajan kayıtları güncellendi; P006 tüm 120 iş için nihai kabul yok (K01/03/04/09/12/16/17/20 kaynak/owner engeller). K06 T667, K15 T666, K18 T672 havuz katkıları tek kredi. P007 **D-001…D-120 = mevcut 59 PR için 120 bitiriş kontrolü**, yeni özellik veya yeni PR sayısı DEĞİL; eski teslim metrikleri ARSIV A006.
 - **Kalan süre:** CI sahibinin #1096 ve UI #1068 kararlarına, gerçek iki-PC ve sağlayıcı ölçümüne bağımlı; güvenilir gün/saat tahmini yok. Yerel model/QA geçişi ürün yüzdesi değildir. En kısa yol: önce 5 fail + 6 no-job, sonra 48 yeşilin gerçekten çalıştırılmamış nested testleri ve owner onayı.

## Teslim akışı
1. PR exact-head + diff + owner çatışma kontrolü; gerekirse aynı mevcut PR'a commit.
2. Yerel test ve nested dosyanın hosted workflow'da gerçekten çağrıldığı kanıtı ayrı; 0 fail/cancelled/skipped/todo; aynı SHA CI tekrar tetiklenmez.
3. Fiziksel Windows/2-PC/provider gereksinimi varsa NOT_RUN; tamamlandı ilan etme.
4. ŞEF tek entegrasyon raporunda Ömer'in açık merge kararını bekler; birleşim ve issue kapatma YOK.

## Sahiplik / her KNN'nin AKTİF ve en az 5 KUYRUK görevi
Kendi kayıt dosyana D kimliği, mevcut PR, exact commit, komut, local/hosted/physical sonucu yaz. Her D maddesinin bitti tanımı: kanıt linki veya dürüst NOT_RUN/owner bağımlılığı. Başkasının dosyasına dokunma.

### K01 — Bağlantı ve pairing UI
- **Mevcut PR sahipliği:** [#1011](https://github.com/Naveax/Nexowire/pull/1011), [#1114](https://github.com/Naveax/Nexowire/pull/1114). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-001:** Eski #1011 web/connect dosyalarının owner #1068 ile satır çakışması; benzersiz regresyonu #1114'te koru.
- **KUYRUK (5):**
  - D-002: PairingId/token boşluğu ve 429/503 RED testini #1114 exact HEAD'de tekrar üret.
  - D-003: 401/403 olumsuz bağlantı ekranı negatiflerini sadece K01 QA/test alanında tamamla.
  - D-004: #1011 0-job ve #1114 generic CI ile yeni test keşfini ayır.
  - D-005: Owner #1068'e minimum connect-state kaynak düzeltmesi için dosya/test önerisi hazırla.
  - D-006: Gerçek browser/cihaz pairing NOT_RUN teslim kararını ve PR kapatma önerisini kaydet.

### K02 — Mobil tasarım ve ekran kanıtı
- **Mevcut PR sahipliği:** [#1010](https://github.com/Naveax/Nexowire/pull/1010), [#1101](https://github.com/Naveax/Nexowire/pull/1101), [#1126](https://github.com/Naveax/Nexowire/pull/1126), [#1131](https://github.com/Naveax/Nexowire/pull/1131), [#1138](https://github.com/Naveax/Nexowire/pull/1138). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-007:** Eski #1010 web/styles.css owner #1068 overlap kontrolü; yazma yok.
- **KUYRUK (5):**
  - D-008: #1101/#1126/#1131/#1138 fixture/test tekrarı ve farklı kapsam analizi.
  - D-009: #1138 12/12 gerçek local screenshot fail-closed QA tekrarı.
  - D-010: Dört güncel PR exact SHA, genel CI run ve nested discovery envanteri.
  - D-011: Mobil viewport/touch/keyboard gerçek tarayıcı koşulu ve NOT_RUN kanıt planı.
  - D-012: #1010 benzersiz test taşıma/0-job kapanış önerisi; yeni PR yok.

### K03 — Dashboard ve Bridge durumları
- **Mevcut PR sahipliği:** [#1016](https://github.com/Naveax/Nexowire/pull/1016), [#1103](https://github.com/Naveax/Nexowire/pull/1103), [#1143](https://github.com/Naveax/Nexowire/pull/1143). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-013:** Eski #1016 web/app.js/index #1068 kaynak overlap tespiti.
- **KUYRUK (5):**
  - D-014: P005 T-407/T-408 bağlı+0 cihaz ve claimed→queued RED'i owner HEAD'de tekrar üret.
  - D-015: #1103 K03 HTTP503/401 invalid-receipt negatifleri test/QA üzerinde.
  - D-016: #1143 fixture ile gerçek Bridge transport farkını kaydet.
  - D-017: #1016 0-job vs #1103/#1143 exact CI ve nested keşfi ayır.
  - D-018: #1068 sonrası kabul ve gerçek Windows/mobile/NVDA NOT_RUN teslim paketi.

### K04 — Admin UI ve WSL arızası
- **Mevcut PR sahipliği:** [#1015](https://github.com/Naveax/Nexowire/pull/1015), [#1104](https://github.com/Naveax/Nexowire/pull/1104), [#1120](https://github.com/Naveax/Nexowire/pull/1120), [#1133](https://github.com/Naveax/Nexowire/pull/1133), [#1144](https://github.com/Naveax/Nexowire/pull/1144). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-019:** #1120 run 42411741316 WSL2 FAIL job 128521158395 kanıt/log erişimini salt-okunur denetle.
- **KUYRUK (5):**
  - D-020: Eski #1015 web/admin overlap #1068 hunk/test karşılaştırması.
  - D-021: #1104 401/403 yanlış yeşil state RED bulgusunu güncel owner'da test et.
  - D-022: #1133/#1144 K04 negatif ve erişilebilirlik QA testlerini tekrar çalıştır.
  - D-023: K04 PR'larındaki test tekrarları, CI SHA/run, nested discovery sınıflaması.
  - D-024: Owner #1068 düzeltme talebi ve gerçek Windows/mobil/NVDA NOT_RUN kanıtı.

### K05 — Erişilebilirlik ve hata geri bildirimi
- **Mevcut PR sahipliği:** [#1115](https://github.com/Naveax/Nexowire/pull/1115), [#1122](https://github.com/Naveax/Nexowire/pull/1122), [#1132](https://github.com/Naveax/Nexowire/pull/1132), [#1146](https://github.com/Naveax/Nexowire/pull/1146). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-025:** #1115/#1122 açıklama issue auto-close risk düzeltmesini teyit et.
- **KUYRUK (5):**
  - D-026: #1115/#1122/#1132/#1146 aynı erişilebilirlik fixture kapsamını tekilleştir.
  - D-027: #1132/#1146 aria-live ve sessiz hata paneli negatiflerini tekrar çalıştır.
  - D-028: K02 touch ve K04 admin ihtiyaçları için yalnız kendi QA alanında gereksinim kanıtı.
  - D-029: Dört PR exact SHA, generic CI, nested discovery ve yerel test sayısı.
  - D-030: NVDA, screen-reader, gerçek mobil NOT_RUN kabul; owner kaynağına dokunma.

### K06 — Kurulum ve Windows rehberleri
- **Mevcut PR sahipliği:** [#1108](https://github.com/Naveax/Nexowire/pull/1108), [#1129](https://github.com/Naveax/Nexowire/pull/1129). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-031:** #1108/#1129 yinelenen URL/sürüm/fixture dosyası kontrolü.
- **KUYRUK (5):**
  - D-032: #1108 imza/SmartScreen/download linklerinin güncel kaynak doğrulaması.
  - D-033: #1129 kendi Windows QA negatiflerini koştur, TODO'ları PASS yapma.
  - D-034: İki PR exact SHA/genel CI ve nested test coverage listesi.
  - D-035: Gerçek installer/Windows/cihaz kabulü NOT_RUN kanıt planı.
  - D-036: Yalnız var olan #1108/#1129 test/docs dalında kırık bağlantıyı düzelt.

### K07 — Self-host bağlantı rehberleri
- **Mevcut PR sahipliği:** [#1100](https://github.com/Naveax/Nexowire/pull/1100), [#1125](https://github.com/Naveax/Nexowire/pull/1125). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-037:** #1100 açıklamasında auto-close metadata düzeldi mi SHA bozulmadan kontrol.
- **KUYRUK (5):**
  - D-038: #1100/#1125 aynı bağlantı kurulum dokümanı ve benzersiz test envanteri.
  - D-039: Yanlış URL/offline/yeniden bağlantı negatiflerini kendi testlerinde doğrula.
  - D-040: #1125 yeni nested .mjs hosted keşif açığını K13'e linkle.
  - D-041: #1100/#1125 exact CI vs 22/22 local test kanıtı ayrımı.
  - D-042: Tailscale/Cloudflare/gerçek Windows/2PC NOT_RUN kayıt paketi.

### K08 — MCP ve Bridge yardımcı testleri
- **Mevcut PR sahipliği:** [#1035](https://github.com/Naveax/Nexowire/pull/1035), [#1106](https://github.com/Naveax/Nexowire/pull/1106), [#1128](https://github.com/Naveax/Nexowire/pull/1128). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-043:** #1035 0-job PR ile #1106/#1128 kapsam/mükerrer testi karşılaştır.
- **KUYRUK (5):**
  - D-044: #1106 MCP docs/testleri güncel main'e göre koştur, auth değişimi yok.
  - D-045: #1128 Bridge fixture vs #1068 gerçek kaynak farkında RED üret.
  - D-046: Üç PR exact SHA, generic CI ve nested discovery doğrulaması.
  - D-047: Gerçek Hub/Agent/provider izinlerinin NOT_RUN bağımlılık notu.
  - D-048: #1035 benzersiz test taşıma veya kapatma önerisi; kendin kapatma.

### K09 — QA izleme ve issue delilleri
- **Mevcut PR sahipliği:** [#1099](https://github.com/Naveax/Nexowire/pull/1099), [#1127](https://github.com/Naveax/Nexowire/pull/1127), [#1137](https://github.com/Naveax/Nexowire/pull/1137), [#1145](https://github.com/Naveax/Nexowire/pull/1145). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-049:** #1099/#1127/#1137/#1145 main'de daha önce birleşen dosya tekrarı denetimi.
- **KUYRUK (5):**
  - D-050: #1145 issue #487 yanlış kapanışını tespit eden QA regresyonları.
  - D-051: Source-only vs generic CI vs gerçek kabul ifadelerini K09 raporunda ayır.
  - D-052: Dört PR exact SHA/run/CI ve test-keşif tablo kanıtı.
  - D-053: Owner #1096/#1068 ve #1006 kalan kabul gereksinimi.
  - D-054: #487 S5 gerçek kapasite/sağlayıcı maliyetini sentetikten ayır.

### K10 — Tarayıcı denetimi ve ekran kanıtı
- **Mevcut PR sahipliği:** [#1116](https://github.com/Naveax/Nexowire/pull/1116), [#1142](https://github.com/Naveax/Nexowire/pull/1142). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-055:** #1116/#1142 browser-live CI job yeni K10 testleri gerçekten çalıştırıyor mu bak.
- **KUYRUK (5):**
  - D-056: #1142 offline smoke ve CI discovery audit testlerini aynı SHA'da tekrar koş.
  - D-057: #1068 dashboard üç durum testi için source/fixture karşılaştırması.
  - D-058: #1116/#1142 mükerrer test, benzersiz özellik envanteri.
  - D-059: Gerçek Playwright/screenshot/klavye koşulları ve NOT_RUN sınırı.
  - D-060: Mevcut #1142 QA/test dalında eksikleri bitir; yeni PR yok.

### K11 — S5 maliyet ve kullanım modeli
- **Mevcut PR sahipliği:** [#1148](https://github.com/Naveax/Nexowire/pull/1148). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-061:** #1148 içeriğini merge edilmiş #1135 ile blob/test bazında kıyasla.
- **KUYRUK (5):**
  - D-062: #487 simülasyon başarısızlığı için negatif maliyet testlerini tekrar üret.
  - D-063: #1148 yeni testlerinin gerçek hosted discovery delili.
  - D-064: K12 dosya sahibiyle çakışmadan 10 işletme/ücretsiz varsayımının delil seviyesi.
  - D-065: Gerçek provider faturası ve 24s soak NOT_RUN kabul şablonu.
  - D-066: Tek #1148 PR dalını güncelleyip SHA+run+komutlu teslim paketi.

### K12 — S5 kapasite ve ölçüm
- **Mevcut PR sahipliği:** [#1109](https://github.com/Naveax/Nexowire/pull/1109). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-067:** #1109 30/30 local test ile required CI keşif farkını doğrula.
- **KUYRUK (5):**
  - D-068: Loopback/yerel kapasite vs 24s gerçek provider ölçüm farkları.
  - D-069: K11 ile dosya sahibi çakışmadan maliyet CSV şeması.
  - D-070: #1109 sentetik ölçekleme negatiflerini çalıştır.
  - D-071: K13'e eksik K12 dosya adlarını ver, ana ci.yml değişimi yok.
  - D-072: #1109 exact SHA/genel CI/physical NOT_RUN kararını raporla.

### K13 — Yedi delege testi ve CI
- **Mevcut PR sahipliği:** [#1112](https://github.com/Naveax/Nexowire/pull/1112), [#1134](https://github.com/Naveax/Nexowire/pull/1134), [#1149](https://github.com/Naveax/Nexowire/pull/1149). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-073:** #1149 yedi eksik test path'ini 55 main dosyası ve gerçek ci.yml çağrısıyla doğrula.
- **KUYRUK (5):**
  - D-074: #1134/#1149 aynı delegated-noncore.yml dosyası hunklarını tekilleştir.
  - D-075: Fork aux run 42485485796 2/2 job ve 33/33 explicit test, 11/11 negatif gate kanıtı.
  - D-076: #1149 kendi workflow/test dosyalarında yedi testin fail-closed seçimini doğrula.
  - D-077: #1096 owner'a K20 sabit41 dinamik test sayısı önerisi ve exact path listesi.
  - D-078: #1112/#1134/#1149 benzersiz kapsam, bağımlılık, exact SHA ve CI teslim.

### K14 — 59 PR entegrasyon ve temizliği
- **Mevcut PR sahipliği:** [#1117](https://github.com/Naveax/Nexowire/pull/1117), [#1123](https://github.com/Naveax/Nexowire/pull/1123), [#1140](https://github.com/Naveax/Nexowire/pull/1140), [#1153](https://github.com/Naveax/Nexowire/pull/1153). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-079:** #1153'ün 42'lik eski snapshotını 59 açık PR'ın güncel SHA/CI verisiyle aynı PR'da düzelt.
- **KUYRUK (5):**
  - D-080: 59 PR'ı hazır aday/CI başarısız/0-job/owner bağımlı olarak ayrıştır.
  - D-081: Beş PR (#1100,#1101,#1115,#1121,#1122) açıklaması nötr mü kontrol.
  - D-082: #1134/#1149 ve dört eski UI/#1068 gerçek dosya çakışmasını raporla.
  - D-083: #1117/#1123/#1140/#1153 içeriksel mükerrerliği test bazında belirle.
  - D-084: #1006 için merge yapılmadan owner onayı bekleyen tek exact kanıt paketi.

### K15 — Cihaz pairing izinleri UI
- **Mevcut PR sahipliği:** [#1110](https://github.com/Naveax/Nexowire/pull/1110). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-085:** #1110 main 12 PASS/8 TODO, owner 18 PASS/2 TODO ayrımını yeniden doğrula.
- **KUYRUK (5):**
  - D-086: Yetki reddi ve 0 cihaz state #1068 owner kaynaklarında RED kanıtı.
  - D-087: Gerçek browser/keyboard/native grant NOT_RUN kabul sınırı.
  - D-088: K13'e K15 nested QA dosya listesi ve exact CI kanıtı.
  - D-089: Yalnız K15 test/docs negatiflerinde kalan boşlukları doldur.
  - D-090: #1110 mevcut PR teslim özeti SHA/run ve owner entegrasyon talebi.

### K16 — Windows subprocess cleanup
- **Mevcut PR sahipliği:** [#1105](https://github.com/Naveax/Nexowire/pull/1105), [#1121](https://github.com/Naveax/Nexowire/pull/1121). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-091:** #1105/#1121 değişen yolları #540 owner #1096 process-manager ile karşılaştır, salt-okunur.
- **KUYRUK (5):**
  - D-092: Child PID orphan, taskkill, tekrar stop negatif testlerini K16 alanında koştur.
  - D-093: #1121 auto-close metadata riskini ve issue #540 OPEN durumunu kontrol.
  - D-094: #1105/#1121 genel CI vs Windows yeni test keşfi ayrımı.
  - D-095: #1096 owner'a minimum process-manager düzeltme ve kanıt notu.
  - D-096: Gerçek Windows Node22/24 child process NOT_RUN bırak, kaynak değişimi yok.

### K17 — Skill katalog ve symlink güvenliği
- **Mevcut PR sahipliği:** [#1030](https://github.com/Naveax/Nexowire/pull/1030), [#1113](https://github.com/Naveax/Nexowire/pull/1113), [#1150](https://github.com/Naveax/Nexowire/pull/1150). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-097:** #1150 symlink ile katalog dışı SKILL.md okuma davranışını güvenli temp dizinde yeniden üret.
- **KUYRUK (5):**
  - D-098: #1030 0-job ve registry/manifest korunan diff'i #1113/#1150 ile karşılaştır.
  - D-099: #1150 18/18 QA PASS'in güvenlik açığını düzeltmediğini açıklıkla kanıtla.
  - D-100: #1113/#1150 exact CI ve nested dosya keşfi doğrulaması.
  - D-101: Windows/Linux/macOS gerçek fs/symlink uyumunu NOT_RUN olarak raporla.
  - D-102: Owner'a canonical path/allowlist test önerisi, yeni PR yok.

### K18 — ACK, SHA ve kesintili aktarım
- **Mevcut PR sahipliği:** [#1107](https://github.com/Naveax/Nexowire/pull/1107), [#1119](https://github.com/Naveax/Nexowire/pull/1119), [#1139](https://github.com/Naveax/Nexowire/pull/1139), [#1151](https://github.com/Naveax/Nexowire/pull/1151). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-103:** #1151 HEAD/run 42485886835 ve local ACK loss negative fixture kanıtını sabitle.
- **KUYRUK (5):**
  - D-104: 225281 byte ve 1MiB yerel testlerini tekrar çalıştır, canlı kabul deme.
  - D-105: Sender/receiver bağımsız SHA256 ve resume sayaçları negatiflerini test et.
  - D-106: 256MiB+ parçalı aktarımın RAM bütçeli fixture planı, Agent/Hub'a yazma yok.
  - D-107: #1107/#1119/#1139/#1151 tekrarlanan ve benzersiz testleri ayır.
  - D-108: Mevcut #1151 dalında boşluk kapat, iki-PC fiziksel NOT_RUN kaydı.

### K19 — 220KB sınırı ve transfer UX
- **Mevcut PR sahipliği:** [#1111](https://github.com/Naveax/Nexowire/pull/1111), [#1124](https://github.com/Naveax/Nexowire/pull/1124), [#1136](https://github.com/Naveax/Nexowire/pull/1136), [#1147](https://github.com/Naveax/Nexowire/pull/1147). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-109:** #588 220KiB/256MiB kaynak sınırını owner #1096/main read-only katman bazında araştır.
- **KUYRUK (5):**
  - D-110: #1147 sender bytes/hash ve receiver ACK testlerini local tekrar et.
  - D-111: #1111/#1124 221KiB ve 1MiB fixture kapsamı/tekrarı.
  - D-112: #1136 nested CI eksik test dosya adları + exact SHA/run.
  - D-113: ACK loss, reconnect, 256MiB+ ve receiver SHA mismatch gerçek 2PC kabul planı.
  - D-114: Yalnız K19 QA/docs ve #1147 mevcut dal; Agent/Hub kaynak değişimi yok.

### K20 — Sabit41 CI kırığı ve PR kabul
- **Mevcut PR sahipliği:** [#1118](https://github.com/Naveax/Nexowire/pull/1118), [#1130](https://github.com/Naveax/Nexowire/pull/1130), [#1141](https://github.com/Naveax/Nexowire/pull/1141), [#1152](https://github.com/Naveax/Nexowire/pull/1152). Yeni PR açılmaz; korunan kaynak owner'da.
- **AKTİF D-115:** #1152 run 42486164254 job 128748383018: 55/55 TAP PASS ama sabit41 yüzünden CI FAIL kanıtı.
- **KUYRUK (5):**
  - D-116: #1118 50/50, #1130 48/48, #1141 52/52 TAP ve CI FAIL/CANCELLED ayrımı.
  - D-117: #1152 K20 scripts/tests/docs negatif sayım testlerini güncelle, ana ci.yml dokunulmaz.
  - D-118: #1120 WSL2 FAIL nedeninin sabit41 ile ilgisiz ayrı teşhisi.
  - D-119: #1096 owner'a dinamik toplam=pass>0, fail/skipped/todo 0 ve 7 keşif dosyası önerisi.
  - D-120: Dört K20 PR'ın mükerrer kanıtı, exact SHA/CI ve Ömer onayı bekleyen rapor.

## HAVUZ — D-121…D-140, sahipsiz ve PR açmadan yapılacak kanıt denetimleri
HAVUZ'u almadan önce 19 kişinin KNN kaydında ÜSTLENDİM var mı kontrol et; önce kendi durumuna claim commit, sonra işe başla. Aynı D kimliği iki kişiye geçerse küçük numara sürdürür. Havuza düşen iş yalnız salt-okunur test/QA raporudur, kod sahibinin yolunu değiştirmez.
- **D-121:** 7/7 generic CI'nin çağırmadığı bir nested test için tam dosya adı kanıtını bul. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-122:** Açık PR ile main'e zaten eklenmiş dosyanın birebir SHA tekrarını bul. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-123:** PR açıklamalarında issue auto-close olumsuz anahtar sözcüklerini güvenli yeniden tara. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-124:** Owner #1096 ci.yml sabit41 eşitlik güncellemesi var mı read-only kontrol. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-125:** Owner #1068 yeni HEAD ile dört eski UI PR'ın dosya hunk farkı. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-126:** #1120 WSL2 job logs/artifact erişilebilir mi read-only incele. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-127:** #1134/#1149 delegated workflow test listesi çakışmasını denetle. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-128:** #588 256MiB+ streaming RAM/timeout test planına somut kabul koşulu ekle. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-129:** #487 gerçek maliyet ölçümü vs simülasyon kanıt boşluğu. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-130:** browser-live isimli genel job'ın gerçek screenshot kanıtı var mı sorgula. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-131:** WSL/Windows gerçek native testi ile Linux mock arasındaki farkı sınıflandır. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-132:** Symlink regresyonunun PASS olup güvenlik bug OPEN kalması için açıklama testi. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-133:** #1149 yedi missing delegated testin explicit path adlarını tekrar doğrula. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-134:** Altı 0-job PR'da güncel workflow ve eski Draft/branch ilişkisini ara. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-135:** İki mevcut PR arasında aynı test yardımcı kodunu hash ile tanımla. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-136:** #1153 artık 59 open sayıyor mu, güncel PR mevcut dalı denetle. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-137:** Fiziksel iki-PC transfer kabulünde istenecek ACK/hash/byte kanıt şablonu. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-138:** UI 401/403/429/503 hata durumları için ortak negatif fixture sözleşmesi. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-139:** 59 PR exact HEAD ve CI run kimliklerinin güncelliğini yeniden karşılaştır. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.
- **D-140:** Ömer'e tek teslimde owner entegrasyon isteklerinin link/kanıt tamlığını denetle. Sadece mevcut ilgili PR sahibine kanıt aktar; yeni PR açma.

## Projeye gidecekler — Ömer onayı olmadan beklet
- CI: K13 [#1149](https://github.com/Naveax/Nexowire/pull/1149), K20 [#1152](https://github.com/Naveax/Nexowire/pull/1152) + #1118/#1130/#1141. Ana .github/workflows/ci.yml değişikliği Ömer #1096.
- Entegrasyon: K14 [#1153](https://github.com/Naveax/Nexowire/pull/1153); #1134/#1149 birbirinin workflow dosyasına giriyor. K01–K04 eski #1011/#1010/#1016/#1015 web kaynakları owner #1068 ile çakışıyor.
- UI: K01–K05/K15 mevcut PR'lar; gerçek browser/401/403/pairing düzeltmesi owner #1068'e bağlı.
- Transfer: K18 [#1151](https://github.com/Naveax/Nexowire/pull/1151), K19 #1147; iki-PC/256MiB+ test NOT_RUN.
- Skill: K17 [#1150](https://github.com/Naveax/Nexowire/pull/1150); symlink kaynak açığı OPEN.
- S5: K11 #1148, K12 #1109; gerçek sağlayıcı/24h maliyet ve kapasite NOT_RUN.

## ONUR'UN LİSTESİ
1. Her K01–K20 sekmesine mevcut **KÖLE MESAJI V002**'yi yapıştır. Ajanlar V006/P007'ye geçer. Tek tek özel talimat gerekmez.
2. Sonraki döngüde yalnız **ŞEF DEVAM** gönder. Şu an GitHub'a elle kod veya PR değişimi yapman gerekmiyor.
3. Gerektiğinde Ömer'e tek cümleyle ilet: “#1152 TAP 55/55 PASS ama ci.yml sabit 41 yüzünden CI FAIL; #1149 yedi eksik testi ayrı yardımcı runner'da 33/33 PASS. Ana CI ve #1068 web source sende; bizim 59 açık PR'ı birleştirme iznini bekleyerek mevcut dallarda kapatıyoruz.”

## Bağlantılar
[PROTOKOL V006](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/PROTOKOL.md) · [SEF S007](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/SEF.md) · [ARSIV A006](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/ARSIV.md) · [59 PR denetimi](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/PR_DENETIM_20261108.md)
