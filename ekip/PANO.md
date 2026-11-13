# NEXOWIRE ŞEF PANO — P009 / 13 Kasım 2026

**YÖNETİM KARARI / ÇİFTE İŞ DENETİMİ:** Ömer'in #1068'i K01–K04 dört eski UI source PR'ının 15 dosyasını içeriyor; kaynakları ikinci kez yazmayın. #1068 Draft, main'e girmedi. K06–K09 tarihsel doküman ve S5 çalışmalarının bir bölümü #1066/#1070/#1071 ve #1102/#1135 aracılığıyla ana projeye daha önce alınmış; bunlara yeni iş puanı yazmayın. K01–K20 P008 20 güncel durum kaydı okundu; 20/20 ekip kaydı P008 commit'i sonrası değişti. **20 yeni commit**, fakat ürün teslimi sıfır.

**ANA DAL:** Naveax main 52d452f717d891eeaf4c2b9aff3c6e1ea68369b0 (8 Kasım'dan beri sabit); fork ekip okuma HEAD 1bfe59d552f5bd3f5a5b359a4660f2a7122e1ae1. Ömer'in 13 Kasım **#1160** entegrasyonu (HEAD 5efab6c7...) izolasyon branch'inde, **3/3 CI workflow success**, ancak Draft/NO-GO ve main'de değil; #1201 korunan SYSTEM visibility belge düzeltmesi child PR, CI kontrol anında in_progress. #1096 (CORE, 321 changed files), #1068 (UI, 18 files) hâlâ Draft, protected; #1161/#1164 kritik owner issue. Yeni 24. issue iddiası 13 Kasım sorgusunda doğrulanmadı; GitHub son listede **23 open issue**.

**BİZİM 59 AÇIK PR:** 12 Kasım'da **14 exact HEAD değişti**. Önceki 48 GREEN/5 FAIL/6 zero-job panosu ESKİ. Yeni CI'da #1145 CANCELLED macOS job → workflow FAIL, #1147 **TS2532** tip hatası ile 6 jobs FAIL + 1 cancelled, #1152 79/79 TAP ama CI exit1. #1147 mevcut dalında dar TypeScript byte-index düzeltmesi **556c294570f4e30fd7fd8b1c457f472c0de2268c** ile yapıldı; yeni run **43422654887 IN_PROGRESS, henüz PASS değil**. Güncel snapshot: **46 genel green / 6 fail / 6 zero-job / 1 running** (59). Diğer 6 FAIL: #1118, #1120, #1130, #1141, #1145, #1152. Düzeltme sonrası yeni #1147 bitene dek bu sayı geçicidir.

**GERÇEK İLERLEME:** 20 ajan rapor/QA üretti, fakat 8 Kasım'dan sonra **0 upstream main merge**. Genel CI green, özgün nested testin çalışması veya fiziksel cihaz acceptance değildir. Ömer'in #1160 source CI başarısı bizim PR'larımızın main'e girdiği anlamına gelmez. Bir işin owner tarafından yapıldığını görünce yeni kod yazmak YASAK; yalnız kaynak-hata RED, test ve entegrasyon açığı kaldıysa çalışın.

**SERT KURAL:** PROTOKOL V006 ve Ömer'in açık onay gerektiren freeze'i sürer. Yeni PR yok; açık tekil Ömer izni olmadan upstream main merge/issue close yok. Owner CORE/Broker/SQLite/auth/CI/web source ve gerçek cihaz yok. Sadece mevcut kendi PR dalında izinli test/docs. Sahte success/duplicate rapor puanlanmaz.

## P009 20 ajan / 1 AKTİF + 5 gerçek KUYRUK (Q-141…Q-260)

### K01 | Bağlantı/pairing | mevcut #1114
**AKTİF Q-141:** #1068 dört gerçek RED'i satır/fixture ile owner'a ilet; aynı source SHA'da karşıla.
**KUYRUK (5):**
- Q-142: PR #1114 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-143: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-144: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-145: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-146: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K02 | CSS/PNG QA | mevcut #1138
**AKTİF Q-147:** PNG CRC/IEND negatifini gerçek test adıyla CI'da doğrula; #1010→#1068 tekrar koduna girme.
**KUYRUK (5):**
- Q-148: PR #1138 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-149: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-150: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-151: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-152: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K03 | Bridge dashboard | mevcut #1143
**AKTİF Q-153:** Boş requestId/başarı metni üç gerçek RED'i owner #1068 düzeltmesinde izle.
**KUYRUK (5):**
- Q-154: PR #1143 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-155: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-156: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-157: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-158: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K04 | Admin denied/WSL | mevcut #1120
**AKTİF Q-159:** WSL2 eski log 404 için yeni SHA'sız kesin neden iddia etme; 401/403 owner #1068 RED.
**KUYRUK (5):**
- Q-160: PR #1120 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-161: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-162: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-163: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-164: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K05 | A11y/CI discovery | mevcut #1146
**AKTİF Q-165:** #1115/#1122/#1132→#1146 blob ve özgün assertion kaybını karşılaştır.
**KUYRUK (5):**
- Q-166: PR #1146 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-167: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-168: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-169: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-170: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K06 | Windows kurulum belgeleri | mevcut #1108/#1129
**AKTİF Q-171:** #1066'da birleşmiş dokümanı kopyalama; yalnız yeni bozuk link/gerçek setup eksiğini kanıtla.
**KUYRUK (5):**
- Q-172: PR #1108/#1129 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-173: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-174: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-175: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-176: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K07 | Self-host/onboarding | mevcut #1125
**AKTİF Q-177:** #1066 dokümana girmiş eski içerikle tekrarları ayır, yeni nested testin hosted koşusunu kanıtla.
**KUYRUK (5):**
- Q-178: PR #1125 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-179: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-180: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-181: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-182: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K08 | MCP docs/error provenance | mevcut #1106
**AKTİF Q-183:** Ömer CORE/Agent kaynak dokümanını kopyalama; #539 hata kaynağı/UNKNOWN test bağımsızlığı.
**KUYRUK (5):**
- Q-184: PR #1106 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-185: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-186: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-187: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-188: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K09 | Issue kanıt/PR konsolidasyon | mevcut #1145
**AKTİF Q-189:** 12 Kasım CI macOS-agent-lifecycle-live CANCELLED, sebebi ve exact-run kabulü denetle.
**KUYRUK (5):**
- Q-190: PR #1145 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-191: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-192: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-193: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-194: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K10 | Gerçek browser görsel QA | mevcut #1142
**AKTİF Q-195:** Host browser-live PASS ile ürün ekran PNG artefaktı ayrımı; fiziksel real-browser NO_GO.
**KUYRUK (5):**
- Q-196: PR #1142 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-197: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-198: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-199: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-200: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K11 | S5 maliyet kalibrasyonu | mevcut #1148
**AKTİF Q-201:** #1135 main'de olduğundan eski düzeltmeyi tekrar etme; gerçek fatura karşılaştırmasını UNKNOWN tut.
**KUYRUK (5):**
- Q-202: PR #1148 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-203: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-204: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-205: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-206: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K12 | S5 performans | mevcut #1109
**AKTİF Q-207:** Kapasite/soak sentetiğini gerçek provider performansına eşitleme; dört nested test explicit CI.
**KUYRUK (5):**
- Q-208: PR #1109 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-209: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-210: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-211: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-212: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K13 | Ana CI eksik test keşfi | mevcut #1149
**AKTİF Q-213:** Yedi missing testin ana required CI/owner #1096'da gerçek çağrısını öncelikle kanıtla.
**KUYRUK (5):**
- Q-214: PR #1149 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-215: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-216: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-217: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-218: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K14 | PR teslim/çakışma | mevcut #1153
**AKTİF Q-219:** 59 open PR, 14 changed SHA ve owner #1160 integration değişimleriyle çakışma/duplicate raporunu yenile.
**KUYRUK (5):**
- Q-220: PR #1153 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-221: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-222: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-223: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-224: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K15 | Cihaz/izin UX | mevcut #1110
**AKTİF Q-225:** #1068 12/15 blob equality + 3 evolved; üç TODO ve 403→200 doğru durumunu doğrula.
**KUYRUK (5):**
- Q-226: PR #1110 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-227: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-228: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-229: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-230: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K16 | Windows taskkill | mevcut #1105
**AKTİF Q-231:** Gerçek Work-PC process child PID kanıtı NO_GO; owner #1160'nın Windows path'lerine dokunma.
**KUYRUK (5):**
- Q-232: PR #1105 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-233: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-234: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-235: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-236: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K17 | Skills symlink güvenliği | mevcut #1150
**AKTİF Q-237:** Validate→read symlink TOCTOU pozitif yeniden üretim security-fix değil; owner düzeltme/red.
**KUYRUK (5):**
- Q-238: PR #1150 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-239: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-240: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-241: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-242: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K18 | Transfer ACK/SHA | mevcut #1151
**AKTİF Q-243:** #588 tek logical sender→receiver ACK+SHA; 256MiB+ fiziksel NOT_RUN, eski manuel PASS'ı koru.
**KUYRUK (5):**
- Q-244: PR #1151 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-245: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-246: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-247: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-248: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K19 | Transfer UX + TS derleme | mevcut #1147
**AKTİF Q-249:** #1147 @556c294 TypeScript TS2532 düzeltmesinin exact SHA CI sonucu; kırmızıysa yalnız yeni neden.
**KUYRUK (5):**
- Q-250: PR #1147 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-251: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-252: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-253: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-254: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

### K20 | CI doğruluk/evidence | mevcut #1152
**AKTİF Q-255:** 79/79 TAP PASS ama step exit1; sabit41 gate/CI sayımının negatifini ve owner #1096 fix'i ayır.
**KUYRUK (5):**
- Q-256: PR #1152 için güncel exact HEAD/changed-files ve owner #1096/#1068/#1160 ile gerçek örtüşmeyi doğrula.
- Q-257: Yalnız kendi test/docs alanında gerçekten eksik bir negatif regresyonu düzelt; sırf görev dolsun diye test çoğaltma.
- Q-258: Kaynağın tekil local test komutu ve GitHub job logundan explicit nested çağrı var mı belirt; green ≠ keşif.
- Q-259: Önceki PR'lardaki benzersiz kod/test, Git blob, assertions ve aktif PR'da aktarım durumunu karşılaştır.
- Q-260: Fiziksel browser/Windows/iki-PC/provider şartı için PASS, FAIL, NOT_RUN ayır; owner'a tek satırlık teslim kararı çıkar.

## P009 SAHİPSİZ POOL Q-261…Q-280 (20 read-only sonuç işi)
Claim önce 19 başka KNN kaydını kontrol et, çift claim küçük KNN'ye; hiçbir havuz işi yeni PR, owner source veya canlı test yetkisi vermez.
- **Q-261:** #1160 üç yeşil workflow HEAD commit doğruluğu, child #1201 için yeniden devralma YOK.
- **Q-262:** #1201 child CI ile branch filter skipped ayrımını doğrula.
- **Q-263:** #1161 protected SYSTEM task visibility access-denied ≠ installed=false özlü owner raporu.
- **Q-264:** #1164 elevated Windows stage gerçek fiziksel kabul şartları owner'a.
- **Q-265:** #1068 15 source blobdan K01/K04 birebir, K02/K03 EVOLVED olanları tek matriste.
- **Q-266:** #1147 TypeScript TS2532 197. satır orijinal kırmızı run ve yeni commit karşılaştırması.
- **Q-267:** #1147 yeni 43422654887 run sonucunda bağımsız real nested test callsite.
- **Q-268:** #1152 79/79 TAP vs exit1 owner min41 workflow farkı.
- **Q-269:** #1145 macOS-agent-lifecycle job CANCELLED kökü ve branch HEAD.
- **Q-270:** #1149 fork aux 4/4 vs required main coverage ayrımı.
- **Q-271:** #1134→#1149 sekiz file ve benzersiz assertions değişimi.
- **Q-272:** #1126→#1138 PNG validator testleri ve fixture blob eşitliği.
- **Q-273:** #1099/#1127/#1137→#1145 gerçek içerik farkı.
- **Q-274:** #1115/#1122/#1132→#1146 false-positive regression korunması.
- **Q-275:** #1030 skill registry kaynak değişimleri owner security scope.
- **Q-276:** #588 HTTP413 ingress katmanı UNKNOWN, paket/buffer sınırı owner'a.
- **Q-277:** #540 Windows child PID postcondition gerçek cihaz yoksa NO_GO.
- **Q-278:** #487 tahmini VPS/sunucu fiyatı gerçek invoice değil.
- **Q-279:** #1006 59 PR current CI envanterini exact SHA ile yenile.
- **Q-280:** #269 signer/release asset sha gerçek setup signing değildir.

## Öncelik ve insan kapısı
1. K19 #1147 yeni CI sonucu ve K09 #1145 macOS cancelled kökü; K20 #1152 sabit41, K13 #1149 missing nested test.
2. 8 subset PR ikilisi önce SHA/blob/assertion semantiğiyle temizlenir. Ömer #1068 15 kaynak blob sahipliği açık; dört eski source PR ile kör merge yapılmaz.
3. Ömer'den gereken: #1096 main ci.yml nested coverage, #1068 source RED çözümü, #1160 gerçek elevated/DPAPI/SQLite SYSTEM fiziksel kabul, **yazılı PR merge sırası/onayı**. Onur sadece 20 sekmeyi V002 mesajıyla çalıştırır ve Ömer'e bu 4 maddelik kapıyı iletir.

## P008 eski kayıt (tarihsel, artık görev emri DEĞİL)

# NEXOWIRE EKİP PANOSU — P008
Tarih: 2026-11-09 (Europe/Istanbul) | PROTOKOL V006 | 59 açık PR teslim/doğrulama

## Hedef, kritik yol ve güncel gerçek ilerleme
- **Yeni PR açma: DURDU. Ömer'in açık onayı olmadan upstream main merge, issue close, release/deploy/canlı cihaz müdahalesi YOK.** Ajanlar yalnız mevcut PR dallarında kendi test/docs/izinli kaynaklarını iyileştirir.
- P007 sonrası **86 ekip commit ve 20/20 KNN güncel kayıt**. **18/59 PR yeni HEAD**; 91 toplam / 59 açık Draft / 32 kapanmış-birleşmiş. Upstream ve fork main aynı: 52d452f717d891eeaf4c2b9aff3c6e1ea68369b0. **Bu kontrol aralığında main'e yeni PR girmedi**.
- **59/59 PR tam denetim (%100 envanter)**, 48 generic CI 7/7 green; **5 FAILED** (#1118/#1120/#1130/#1141/#1152), **6 0-job** (#1010/#1011/#1015/#1016/#1030/#1035). 48 green = 48 gerçek nested/physical kabul değil. [Tüm 59 güncel SHA, CI run, dosya ve owner](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/PR_DENETIM_20261109.md).
- **CI kritik yol:** #1152 latest TAP **78/78 PASS**, ancak main sabit 41 kontrolü yüzünden [42528172259](https://github.com/Naveax/Nexowire/actions/runs/42528172259) Node24 CI FAIL; K13 #1149 fork aux [42527882187](https://github.com/SinsiVinci/Nexowire-fork/actions/runs/42527882187) 4/4 jobs + 33/33 yedi explicit test; upstream generic 7/7 ama yeni nested required CI kanıtı değil. Ömer #1096 staging dynamic min41 yaptı; **7 eksikten 3 K11 dosyası staging'de çağrılıyor, 4 eksik**; upstream main'de halen 7 eksik.
- **Öncelik:** CI (#1149/#1152) → 8 PR kapsama çifti + #1153 PR temizliği → UI #1068 → dosya aktarımı #588 → Skill #1150 → S5 #487. CI beklerken kendi dalındaki bağımsız işe geç.
- **PR tekrarı:** #1099/#1127/#1137 → #1145; #1115/#1122/#1132 → #1146; #1126 → #1138; #1134 → #1149 = **8 tam changed-file PATH subset adayı**. İçerik/blob/test eşdeğerliği kanıtlanmadan kapatılmaz. Eski #1010/#1011/#1015/#1016 **tüm** changed paths owner #1068 ile overlap; source merge yok.
- **Kritik owner alanları:** Ömer #1096 CORE/Broker/Agent/Hub/SQLite/ana ci.yml, #1068 web source; yeni [#1161](https://github.com/Naveax/Nexowire/issues/1161) SYSTEM Hub protected SQLite ve [#1164](https://github.com/Naveax/Nexowire/issues/1164) elevated Windows stage P0 da owner'da. Başkasının dosyasına ve canlı makineye dokunma.
- **#588 kanıt nüansı:** Work-PC'de tek ~230KiB request HTTP413 gözlenmiş; tarihsel 221KiB/1MiB **manuel dört/on altı parçalı gerçek iki-PC hash** PASS kaydı var. Ancak tek mantıksal komutla otomatik ACK/reconnect/256MiB+ gerçek iki cihaz **NOT_RUN**. İlerlemeyi şişirme.
- **Tahmini kalan:** Owner'ın dört CI test yolunu çağırması, #1068 UI RED düzeltmeleri, gerçek Windows/iki-PC/provider kabulü bilinmiyor; dürüst gün/saat tahmini yapılamaz. 86 commit proje/ürün % değildir.

## P007 işlerinin kapanışı ve tek sahipli HAVUZ kararı
- Önceki D-001…D-120 test/yerel kanıt çıktıları A007'de tarihsel durumuyla kaydedildi; hiçbir D tamamlanması upstream merge veya gerçek cihaz kabulü sayılmadı. **D-121…D-140 havuzu doldu; eski D işleri yeniden üstlenilmesin.**
- **Kanonik D havuz sahipliği (küçük KNN tek kredi):** D121 K11 · D122 K06 · D123 K08 · D124 K20 · D125 K15 · D126 K08 · D127 K08 · D128 K20 · D129 K11 · D130 K07 · D131 K16 · D132 K10 · D133 K06 · D134 K08 · D135 K20 · D136 K17 · D137 K06 · D138 K05 · D139 K14 · D140 K17. Rakip claim (K07 D133, K17 D123, K19 D140, K14 D126/129/137, K20 D129/132/136/137/139) ikinci kredi değildir; benzersiz kanıt korunur.

## Yeni R-001…R-120: 20 kişi × AKTİF 1 + KUYRUK 5
R kimlikleri **yeni ürün/PR değil, mevcut 59 açık PR'ın teslim dosyası ve test kapısıdır.** Her R için kendi KNN kaydına exact PR HEAD, test komutu/pozitif-negatif, hosted actual file discovery ve gerçek cihaz NOT_RUN/owner bağımlılığı konur. Başka ajanın dosyası yazılmaz.

### K01 — Bağlantı ve pairing UI
- **Sahipli açık PR:** [#1011](https://github.com/Naveax/Nexowire/pull/1011), [#1114](https://github.com/Naveax/Nexowire/pull/1114). Test/docs alanının tek sahibi K01; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-001:** #1114 son HEAD sonrası dört owner-source RED için #1068'e patch-ready test kanıtı; nested hosted NOT_RUN.
- **KUYRUK (5):**
  - R-002: Mevcut PR (#1011, #1114) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-003: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-004: PR exact HEAD (#1011@6e740dfe, #1114@edd73b57) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-005: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-006: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K02 — Mobil CSS ve screenshot QA
- **Sahipli açık PR:** [#1010](https://github.com/Naveax/Nexowire/pull/1010), [#1101](https://github.com/Naveax/Nexowire/pull/1101), [#1126](https://github.com/Naveax/Nexowire/pull/1126), [#1131](https://github.com/Naveax/Nexowire/pull/1131), [#1138](https://github.com/Naveax/Nexowire/pull/1138). Test/docs alanının tek sahibi K02; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-007:** #1126→#1138 üç changed-path kapsama, #1010→#1068 owner overlap; güncel screenshot false-PASS yeniden denetimi.
- **KUYRUK (5):**
  - R-008: Mevcut PR (#1010, #1101, #1126, #1131, #1138) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-009: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-010: PR exact HEAD (#1010@3f6a226e, #1101@3d4408e8, #1126@332e211e, #1131@a6706472, #1138@8eb86056) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-011: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-012: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K03 — Dashboard ve Bridge state
- **Sahipli açık PR:** [#1016](https://github.com/Naveax/Nexowire/pull/1016), [#1103](https://github.com/Naveax/Nexowire/pull/1103), [#1143](https://github.com/Naveax/Nexowire/pull/1143). Test/docs alanının tek sahibi K03; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-013:** #1143 son HEAD'de 1 PASS/3 gerçek kaynak RED; boş requestId owner #1068 düzeltme talebini somutlaştır.
- **KUYRUK (5):**
  - R-014: Mevcut PR (#1016, #1103, #1143) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-015: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-016: PR exact HEAD (#1016@96fa340b, #1103@4d581bef, #1143@ba838a28) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-017: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-018: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K04 — Admin UI ve WSL
- **Sahipli açık PR:** [#1015](https://github.com/Naveax/Nexowire/pull/1015), [#1104](https://github.com/Naveax/Nexowire/pull/1104), [#1120](https://github.com/Naveax/Nexowire/pull/1120), [#1133](https://github.com/Naveax/Nexowire/pull/1133), [#1144](https://github.com/Naveax/Nexowire/pull/1144). Test/docs alanının tek sahibi K04; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-019:** #1120 WSL2 FAIL log 404 ve UI 401/403 kaynak RED; owner #1068/runner kanıt talebini ayrı tut.
- **KUYRUK (5):**
  - R-020: Mevcut PR (#1015, #1104, #1120, #1133, #1144) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-021: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-022: PR exact HEAD (#1015@2d448f69, #1104@247be5e2, #1120@f6ae93d8, #1133@98beceaf, #1144@bece6bfe) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-023: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-024: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K05 — Erişilebilirlik
- **Sahipli açık PR:** [#1115](https://github.com/Naveax/Nexowire/pull/1115), [#1122](https://github.com/Naveax/Nexowire/pull/1122), [#1132](https://github.com/Naveax/Nexowire/pull/1132), [#1146](https://github.com/Naveax/Nexowire/pull/1146). Test/docs alanının tek sahibi K05; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-025:** #1115/#1122/#1132 tüm path'leri #1146 içine girmiş; yeni false-green discovery düzeltmesinin korunmasını kanıtla.
- **KUYRUK (5):**
  - R-026: Mevcut PR (#1115, #1122, #1132, #1146) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-027: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-028: PR exact HEAD (#1115@2a74d9d2, #1122@aaa96bde, #1132@1f1d912b, #1146@152da103) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-029: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-030: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K06 — Windows kurulum ve gerçek kanıt
- **Sahipli açık PR:** [#1108](https://github.com/Naveax/Nexowire/pull/1108), [#1129](https://github.com/Naveax/Nexowire/pull/1129). Test/docs alanının tek sahibi K06; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-031:** #588 221KiB/1MiB tarihsel manuel iki-PC hash PASS ile tek logical otomatik ACK NOT_RUN ayrımını kanıtla; D133 tek sahibi K06.
- **KUYRUK (5):**
  - R-032: Mevcut PR (#1108, #1129) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-033: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-034: PR exact HEAD (#1108@85cee522, #1129@eb89ea72) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-035: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-036: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K07 — Self-host dokümantasyon
- **Sahipli açık PR:** [#1100](https://github.com/Naveax/Nexowire/pull/1100), [#1125](https://github.com/Naveax/Nexowire/pull/1125). Test/docs alanının tek sahibi K07; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-037:** #1100/#1125 offline rehber kapsamı ve hosted nested test yolları; D133 kanonik K06, K07 ikinci kredi istemez.
- **KUYRUK (5):**
  - R-038: Mevcut PR (#1100, #1125) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-039: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-040: PR exact HEAD (#1100@6d8a555c, #1125@fdea20a8) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-041: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-042: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K08 — MCP/Bridge offline QA
- **Sahipli açık PR:** [#1035](https://github.com/Naveax/Nexowire/pull/1035), [#1106](https://github.com/Naveax/Nexowire/pull/1106), [#1128](https://github.com/Naveax/Nexowire/pull/1128). Test/docs alanının tek sahibi K08; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-043:** #1035 0-job PR özgün testleri ve #1106/#1128 sınırları; D123 ve D126 havuz kanıtını owner'a aktar.
- **KUYRUK (5):**
  - R-044: Mevcut PR (#1035, #1106, #1128) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-045: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-046: PR exact HEAD (#1035@e0de0062, #1106@c9b574b1, #1128@5f2b654d) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-047: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-048: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K09 — Issue/reliability kanıt
- **Sahipli açık PR:** [#1099](https://github.com/Naveax/Nexowire/pull/1099), [#1127](https://github.com/Naveax/Nexowire/pull/1127), [#1137](https://github.com/Naveax/Nexowire/pull/1137), [#1145](https://github.com/Naveax/Nexowire/pull/1145). Test/docs alanının tek sahibi K09; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-049:** #1099/#1127/#1137 tam changed-path kapsama → #1145; üç eski PR'ın benzersiz test değerini kontrol.
- **KUYRUK (5):**
  - R-050: Mevcut PR (#1099, #1127, #1137, #1145) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-051: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-052: PR exact HEAD (#1099@2ae40bd3, #1127@32f76f57, #1137@4869fe31, #1145@eb719a45) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-053: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-054: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K10 — Tarayıcı/evidence QA
- **Sahipli açık PR:** [#1116](https://github.com/Naveax/Nexowire/pull/1116), [#1142](https://github.com/Naveax/Nexowire/pull/1142). Test/docs alanının tek sahibi K10; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-055:** #1116/#1142 generic browser-live ile gerçek screenshot yeni nested QA arasındaki kanıt farkı; EPERM NOT_RUN.
- **KUYRUK (5):**
  - R-056: Mevcut PR (#1116, #1142) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-057: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-058: PR exact HEAD (#1116@6642a138, #1142@fa7659a5) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-059: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-060: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K11 — S5 fiyat/maliyet
- **Sahipli açık PR:** [#1148](https://github.com/Naveax/Nexowire/pull/1148). Test/docs alanının tek sahibi K11; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-061:** #1148 generic CI ve owner #1096 staging'deki 3 K11 explicit test 70/70; gerçek faturayı simülasyondan ayır.
- **KUYRUK (5):**
  - R-062: Mevcut PR (#1148) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-063: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-064: PR exact HEAD (#1148@5b0f98c2) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-065: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-066: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K12 — S5 kapasite/soak
- **Sahipli açık PR:** [#1109](https://github.com/Naveax/Nexowire/pull/1109). Test/docs alanının tek sahibi K12; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-067:** #1109 30/30 local testin owner staging üç K11 testinden farklı ve required K12 nested hâlâ NOT_RUN.
- **KUYRUK (5):**
  - R-068: Mevcut PR (#1109) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-069: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-070: PR exact HEAD (#1109@d14a24c5) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-071: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-072: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K13 — CI test keşfi
- **Sahipli açık PR:** [#1112](https://github.com/Naveax/Nexowire/pull/1112), [#1134](https://github.com/Naveax/Nexowire/pull/1134), [#1149](https://github.com/Naveax/Nexowire/pull/1149). Test/docs alanının tek sahibi K13; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-073:** #1149 aux 4/4 + upstream generic 7/7; #1134 sekiz path içinde; owner #1096 dört missing path tam adı.
- **KUYRUK (5):**
  - R-074: Mevcut PR (#1112, #1134, #1149) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-075: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-076: PR exact HEAD (#1112@3ca2cd12, #1134@ec640fc1, #1149@27c9065c) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-077: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-078: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K14 — 59 PR entegrasyon
- **Sahipli açık PR:** [#1117](https://github.com/Naveax/Nexowire/pull/1117), [#1123](https://github.com/Naveax/Nexowire/pull/1123), [#1140](https://github.com/Naveax/Nexowire/pull/1140), [#1153](https://github.com/Naveax/Nexowire/pull/1153). Test/docs alanının tek sahibi K14; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-079:** #1153 HEAD güncel 59 PR raporu, sekiz tam path-subset tekrar adayı, 4 eski UI PR/#1068 overlap; merge yok.
- **KUYRUK (5):**
  - R-080: Mevcut PR (#1117, #1123, #1140, #1153) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-081: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-082: PR exact HEAD (#1117@822b4247, #1123@eed5becc, #1140@ec1f38d8, #1153@dd52f8bd) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-083: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-084: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K15 — Cihaz seçme UI
- **Sahipli açık PR:** [#1110](https://github.com/Naveax/Nexowire/pull/1110). Test/docs alanının tek sahibi K15; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-085:** #1110 ana/owner kaynak TODO/RED ve Chromium EPERM gerçek screenshot NOT_RUN; owner #1068.
- **KUYRUK (5):**
  - R-086: Mevcut PR (#1110) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-087: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-088: PR exact HEAD (#1110@ba97e46c) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-089: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-090: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K16 — Windows subprocess
- **Sahipli açık PR:** [#1105](https://github.com/Naveax/Nexowire/pull/1105), [#1121](https://github.com/Naveax/Nexowire/pull/1121). Test/docs alanının tek sahibi K16; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-091:** #1105 güncel 24/24 yerel sentetik, owner #1096 process-manager, gerçek Work-PC child PID NOT_RUN.
- **KUYRUK (5):**
  - R-092: Mevcut PR (#1105, #1121) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-093: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-094: PR exact HEAD (#1105@16528379, #1121@1b97d634) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-095: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-096: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K17 — Skill symlink
- **Sahipli açık PR:** [#1030](https://github.com/Naveax/Nexowire/pull/1030), [#1113](https://github.com/Naveax/Nexowire/pull/1113), [#1150](https://github.com/Naveax/Nexowire/pull/1150). Test/docs alanının tek sahibi K17; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-097:** #1150 validate→read path swap bug reproduksiyonu sürüyor; #1030 0-job core kaynak owner; D140 tek sahibi K17.
- **KUYRUK (5):**
  - R-098: Mevcut PR (#1030, #1113, #1150) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-099: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-100: PR exact HEAD (#1030@bc97cd84, #1113@079cef00, #1150@bf6d5c6e) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-101: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-102: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K18 — ACK/SHA büyük aktarım
- **Sahipli açık PR:** [#1107](https://github.com/Naveax/Nexowire/pull/1107), [#1119](https://github.com/Naveax/Nexowire/pull/1119), [#1139](https://github.com/Naveax/Nexowire/pull/1139), [#1151](https://github.com/Naveax/Nexowire/pull/1151). Test/docs alanının tek sahibi K18; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-103:** #1151 local ACK loss fixture, gerçek manuel 221KiB/1MiB fiziksel tarihçe, otomatik 256MiB+ NOT_RUN.
- **KUYRUK (5):**
  - R-104: Mevcut PR (#1107, #1119, #1139, #1151) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-105: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-106: PR exact HEAD (#1107@fed3b1c6, #1119@6515f377, #1139@51d84004, #1151@a2b45393) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-107: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-108: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K19 — Transfer UX ve sınır
- **Sahipli açık PR:** [#1111](https://github.com/Naveax/Nexowire/pull/1111), [#1124](https://github.com/Naveax/Nexowire/pull/1124), [#1136](https://github.com/Naveax/Nexowire/pull/1136), [#1147](https://github.com/Naveax/Nexowire/pull/1147). Test/docs alanının tek sahibi K19; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-109:** #1147 generic green, 220KB request HTTP413 kök katman UNKNOWN, gerçek tek istekte resume NOT_RUN; D140 K17 tek sahibi.
- **KUYRUK (5):**
  - R-110: Mevcut PR (#1111, #1124, #1136, #1147) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-111: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-112: PR exact HEAD (#1111@c5119a65, #1124@4d1a3dc3, #1136@ed5fa137, #1147@65fca6c6) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-113: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-114: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

### K20 — K20 CI kırık koşular
- **Sahipli açık PR:** [#1118](https://github.com/Naveax/Nexowire/pull/1118), [#1130](https://github.com/Naveax/Nexowire/pull/1130), [#1141](https://github.com/Naveax/Nexowire/pull/1141), [#1152](https://github.com/Naveax/Nexowire/pull/1152). Test/docs alanının tek sahibi K20; owner #1096/#1068 kaynaklarına salt-okunur.
- **AKTİF R-115:** #1152 run 42528172259 Node24 FAIL; log 78/78 TAP PASS ama main sabit41; #1096 staged dynamic min41 yaması.
- **KUYRUK (5):**
  - R-116: Mevcut PR (#1118, #1130, #1141, #1152) değişen dosya ve test diff'lerini P008 main/owner HEAD'e karşı karşılaştır; path-subset varsa blob/hunk ve benzersiz test analizi.
  - R-117: Bu rolün gerçek kaynak hatasını veya CI coverage boşluğunu **aynı kaynak SHA** üzerinde yeniden üret; sadece kendi izinli test/docs yolunda eksik negatif regresyonu tamamla.
  - R-118: PR exact HEAD (#1118@d51d9d4c, #1130@8a5bc56e, #1141@a13dd68d, #1152@b17c4dea) için Node22/24 genel CI run ve **yeni nested test dosyası gerçekten çalıştı mı** job loguyla doğrula; aynı SHA CI tekrar dispatch etme.
  - R-119: Mevcut PR'lar arasında mükerrer test/helpers ve geçmişte main'e girmiş içerikleri sınıflandır; benzersiz test silmeden tek mevcut PR'a toplama kararı hazırla.
  - R-120: Bu rolün gerçek browser/Windows/iki-PC/provider/skill-security kabul koşullarını PASS ile NOT_RUN'dan ayır; Ömer'in owner kaynak düzeltmesi gerekiyorsa dosya+test+SHA talebini son teslim paketine yaz.

## HAVUZ R-121…R-140 (20 yeni sahipsiz, yalnız read-only kanıt)
İş seçimi: önce kendi AKTİF ve KUYRUK, sonra havuz. Claim öncesi diğer 19 durum dosyasını oku, kendi kayıt dosyana önce ÜSTLENDİM ve commit; çifte claim'de küçük KNN kazanır. Havuz yeni PR ya da korunan kaynak yetkisi vermez.
- **R-121:** Staging #1096 dynamic min41 test gate'in negatif cancelled/skipped/fail koşullarını salt-okunur doğrula. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-122:** Staging #1096 dört missing nested test path'inin gerçek CI job callsite yerlerini denetle. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-123:** Main .github/workflows/ci.yml halen sabit41 diyor mu exact blob ve line ile kanıtla. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-124:** #1152 78/78 TAP ve CI exit1'in aynı job/sha günlüğünde oluştuğunu doğrula. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-125:** #1149 fork aux 4/4 job'da Node22/24 yedi testin aynı checkout ile gerçek çağrısını bul. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-126:** #1134 8/8 dosya #1149 içinde ve hunk/blob eşdeğerliğini test et. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-127:** #1115/#1122/#1132 test assertion sayıları #1146 içinde korundu mu bak. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-128:** #1099/#1127/#1137 eski QA testleri #1145 içinde aynı assert kapsamını koruyor mu bak. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-129:** #1126 üç path #1138 içinde, beklenmeyen diff kaybı var mı read-only incele. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-130:** #1010/#1011/#1015/#1016 owner #1068'de test paths ile kod bloblarını ayrı karşılaştır. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-131:** #1120 WSL2 step status in_progress ama job failure anomalisinin event/attempt kanıtını ara. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-132:** #588 owner 221KiB/1MiB fiziksel manuel-parça HASH yorum linklerinin tarihlerinin doğrulaması. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-133:** #588 tek logical command 256MiB+ otomatik aktarım NOT_RUN kabul kapısı için ölçüm şeması. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-134:** #1150 validate/read symlink katalog dışı okuma bug'a owner canonical handle düzeltme test kriteri. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-135:** #487 24 saat gerçek provider fatura/kapasite ile localhost tahminin ölçüm farkı. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-136:** #1142 browser-live generic CI ile gerçek PNG/screenshot artifact ayrımına kanıt. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-137:** #1161 owner SYSTEM Hub SQLite P0 aktif dosya çakışma read-only riski. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-138:** #1164 owner Windows elevated stage P0 ve #540 eski taskkill ayrımı. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-139:** 59 PR tüm exact HEAD/run ID delta ve iş sahipliği tek tablo consistency denetimi. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.
- **R-140:** Ömer'e #1006 son teslimde dört missing path, sekiz PR subset ve iki yeni P0 konusunda link kontrolü. **Bitti:** kaynak linki ve ilgili PR sahibine not; merge/issue close YOK.

## PROJEYE GİDECEKLER — ÖMER'İN AÇIK ONAYI BEKLENİYOR
- CI/teslim: K13 #1149 (fork aux gerçek, required yedi missing), K20 #1152 ve #1118/#1130/#1141 (CI FAIL); source fix sahibi #1096.
- PR konsolidasyon: K14 #1153; sekiz full-path-subset ve dört owner #1068 UI overlap, sadece test korunursa inceleme adayı.
- UI K01-K05/K15: 401/403/429, blank pairing/requestId RED, gerçek tarayıcı/Windows NOT_RUN.
- Aktarım K18 #1151/K19 #1147: local ACK/SHA var; tarihsel manuel fiziksel kanıt ≠ yeni otomatik tek logical receiver kabul.
- Skill K17 #1150: symlink bug OPEN; S5 K11 #1148/K12 #1109: gerçek provider faturası/24s NOT_RUN.
- #1161/#1164 owner P0 alanına **kesinlikle kodla girilmez**.

## ONUR'UN LİSTESİ
1. KÖLE MESAJI V002'yi 20 sekmeye tekrar yapıştır; PROTOKOL V006/PANO P008 güncel görevleri otomatik verir.
2. Sonraki döngü bitince tek ŞEF DEVAM gönder. GitHub'da elle kod/merge yapma. Ömer açık onay verene kadar teslim PR'ları Draft kalabilir.

## Kayıtlar
[PROTOKOL V006](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/PROTOKOL.md) · [SEF S008](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/SEF.md) · [ARSIV A007](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/ARSIV.md) · [59 PR denetim 9 Kasım](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/PR_DENETIM_20261109.md)
