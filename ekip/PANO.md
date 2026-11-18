# NEXOWIRE EKİP PANOSU — P010 | 18 Kasım 2026

> Yalnız burası AKTİF görev panosudur. Eski P009 ve daha önceki görev emirleri tarihsel kayıttır: [P009'ı immutable commit'te oku](https://github.com/SinsiVinci/Nexowire-fork/blob/8d42d036e4d7e333f50c101cd57433ba2d520869/ekip/PANO.md). KNN kayıtları değiştirilmedi; işçi güncel PROTOKOL V007'yi okur.

## ŞEF KARARI — GERÇEK TESLİM, YENİ TEKRAR YOK
- **Çift iş gerçek:** 16 Kasım'da **20 SinsiVinci PR closed-unmerged**, ayrıca owner #1068 (eski UI) ve #1096 (eski CORE) closed-unmerged. Bu kodların ilgili parçalarının owner'ın [#1160](https://github.com/Naveax/Nexowire/pull/1160) entegrasyonuna taşındığı kimi dosya düzeyinde kanıtlandı; **ama #1160 Draft ve ana dalda değil**. Owner-ported ≠ shipped.
- **Anlık değişmezler:** upstream/fork main `52d452f717d891eeaf4c2b9aff3c6e1ea68369b0` (8 Kasım); 13 Kasım P009 commit'inden beri ekip dalında **25 yalnız durum commit'i / K02–K20 19/20 güncellendi**. K01 hâlâ P008, ilk öncelik K01 güncellemesi. Bu dönem **0 upstream main merge**.
- 39 açık SinsiVinci PR = 33 exact-head genel CI SUCCESS, 4 FAILURE (#1152/#1141/#1130/#1118), 2 action_required/zero-job (#1030/#1035). Bu genel job sonucu, tüm nested testlerin çalışması değildir. [Tam 39 satırlı kaynak denetimi](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/PR_DENETIM_20261118.md).
- **En önemli yeni risk #1205:** owner #1160 exact HEAD `10420aa6399cd8c9ae3a2360132e7007656898b4`, [Test Discovery Inventory run 44167664875](https://github.com/Naveax/Nexowire/actions/runs/44167664875) 649 tracked TS test dosyası buluyor; eski `npm test` `test/**/*.test.ts` kabuk glob'u yalnız 42 dosyayı kapsıyor, **607 dosyayı default komutla seçmiyor**. **Bu 607 test FAIL demek değil; default yoldan NOT_RUN/ayrı kanıt gerekli.** Owner ayrıca ayrı Portable Root Smoke ve Test Discovery Inventory workflow ekledi. Test kapsamı %100 değil.
- **Owner #1160** exact 10420aa6399cd8c9ae3a2360132e7007656898b4: [CI 44167664680](https://github.com/Naveax/Nexowire/actions/runs/44167664680), [Release Readiness 44167664266](https://github.com/Naveax/Nexowire/actions/runs/44167664266), [AI-03 44167664288](https://github.com/Naveax/Nexowire/actions/runs/44167664288), [Portable Root 44167664432](https://github.com/Naveax/Nexowire/actions/runs/44167664432), [Discovery 44167664875](https://github.com/Naveax/Nexowire/actions/runs/44167664875) **5 workflow SUCCESS**; tam 649 test ve gerçek SYSTEM/DPAPI/SQLite cutover, 2-PC >256MiB ve provider S5 kabulü **NO-GO**. #1161 owner fiziksel gate OPEN. Son yayımlanan resmî release **v1.0.8**; v1.0.9-exp.0 hazırlığı başka integration branch'inde, published latest değil.
- Ömer'in 8 Kasım onay kuralı geçerli: **yeni PR açmak, upstream main'e merge, issue close, owner CODE/auth/SQLite/ana ci.yml, canlı cihaz/üretim sistemine müdahale YOK**. Değişiklik gerekirse yalnız mevcut **AÇIK** kendi PR'ına ve izinli test/docs dosyasına, gerçekten benzersiz hata varsa. KAPALI PR dalına kod itme, açma kararı ŞEF/Ömer'e.
- **DUR KURALI:** Bir test/QA dokümanı owner #1160'da byte-identical veya semantik eşdeğerse yeni benzer test yazma. `OWNER_PORTED / PR_OPEN_DUPLICATE / MAIN_NOT_MERGED / PHYSICAL_NOT_RUN` olarak işaretle, benzersiz kalan göreve geç. Tüm altı sıra doğrulandıysa yeni iş uydurma; bir sonraki güncel panoya kadar kaynak-risk izlemesi yeterli. PR sayısı veya görev kutusu başarı ölçütü değil.

## P010 K01–K20 | Her biri 1 aktif + 5 kuyruk (N-281…N-400)

### K01 | Bağlantı/429 UI
**Bağlam:** Açık #1114; K01 dosyası hâlâ P008. Eski #1011 ve #1068 kapalı.
**AKTİF N-281:** #1160'ın güncel web/connect.js kaynak davranışında 429 Retry-After (boş/bozuk değer) hâlâ RED mi? Mevcut #1114 ile tek SHA'da tekrar üret, owner'a farkı bildir.
**KUYRUK (5):**
- **N-282:** #1114 üç özgün dosyasının #1160 dosya/blob eşdeğerliğini kontrol et; path farklıysa gerçekten ayrı kabul gerekçesi yaz
- **N-283:** 401/403/503/pairing retry için ana main ile #1160 source'u karşılaştır; bir testte tek gerçek davranış farkı göster
- **N-284:** #1114 exact-head hosted CI'da kendi testlerinin adının fiilen çağrılıp çağrılmadığını kanıtla
- **N-285:** Gerçek browser ekran görüntüsü/klavye/375px/Windows eksiklerini NOT_RUN bırak; sentetik ekranı gerçek diye sunma
- **N-286:** Yalnız kalan RED varsa #1114 izinli testini düzelt; yoksa supersession/owner kabul raporu ver ve kod eklemeyi durdur

### K02 | CSS ve görüntü doğrulama
**Bağlam:** Açık #1101; #1138 kapandı, 7/7 path owner #1160 içinde; önceki offline PNG fixture tekrarlanmaz.
**AKTİF N-287:** #1138 kapanışındaki 7 dosya ile #1160 eşdeğerliğini ve #1101'in gerçekten ayrı iki dosyasını belirle.
**KUYRUK (5):**
- **N-288:** #1101'in 2 test/evidence yolunu #1160 ve main ile karşılaştır; ilk kez yayımlanan davranış var mı
- **N-289:** 320/375/768px ve 200% zoom gerçek browser screenshot kanıtı mevcut mu; yoksa NOT_RUN kaydet
- **N-290:** Kapanmış #1010/owner #1068 CSS'nin #1160 güncel CSS'ye nasıl taşındığını SHA ile denetle
- **N-291:** #1101'in exact-head CI test discovery kanıtını Node22/24 job adından değil TAP'ten oku
- **N-292:** Yeni kaynak düzeltmesi gerektiren somut mobil taşma yoksa yeni CSS/test üretme; kabul dosyasını kapatılabilir olarak bildir

### K03 | Dashboard/Bridge durum
**Bağlam:** Açık #1103; #1143 ve #1016 kapandı, main'e doğrudan merge edilmedi.
**AKTİF N-293:** Whitespace-only requestId ve pending→unknown durumlarının #1160 web/app.js üzerinde gerçekten RED kalıp kalmadığını tespit et.
**KUYRUK (5):**
- **N-294:** #1143'teki benzersiz requestId regresyonunun #1160 test listesinde varlığını ve blob farkını doğrula
- **N-295:** 401/403 sonrası eski başarı göstergesi temizleniyor mu: değiştirilmemiş kaynakta gerçek negatif göster
- **N-296:** Yanlış cihaz/folder seçimi ve boş requestId için yalnız owner sunum source patch önerisi hazırla
- **N-297:** #1103 iki benzersiz testinin required CI exact-head çağrısını doğrula
- **N-298:** Owner #1160 üzerinde PASS çıkan bug'ı tekrar üretme; kalan gerçek RED yoksa PR kararını K14'e ilet

### K04 | Admin/WSL2
**Bağlam:** Açık #1104; #1120/#1133/#1144 ve kaynak #1015 kapandı.
**AKTİF N-299:** #1160 admin 401/403 denial ve eski başarı pill'i için owner JS üzerinde tek güvenilir RED/PASS matrisi üret.
**KUYRUK (5):**
- **N-300:** #1104 testlerini #1160 kaynak ve eski #1068 ile ayır; aynı testin kopyasını yazma
- **N-301:** Kapanmış #1120 WSL2 FAIL nedeninin mevcut runner'da tekrarı var mı, yoksa stale UNKNOWN olarak işaretle
- **N-302:** 403 response içindeki sentetik canary'nin kullanıcıya sızmadığını var olan testte doğrula
- **N-303:** 403→pending→200 geçişi için gerçekten tek SHA'da named test yürütme kanıtı bul
- **N-304:** Gerçek browser/NVDA veya fiziksel admin privilege yoksa PASS çıkarma; owner kararını bildir

### K05 | A11y ve test keşfi
**Bağlam:** Açık #1146; 13/13 changed path #1160 içinde.
**AKTİF N-305:** #1146'nın 13 dosyasını #1160 ile tam Git blob ve assertion eşdeğerliği açısından sınıflandır; mükerrerlik kanıtını bitir.
**KUYRUK (5):**
- **N-306:** Eski #1115 ve #1122 dosyalarının #1146'daki orijinal negatiflerini koruyup korumadığını kontrol et
- **N-307:** #1132'nin gelişmiş 2 dosyasındaki tüm eski assertion'lar #1160'da var mı analiz et
- **N-308:** Host 37/37 K05 lane ve genel CI'nin named test kapsamını exact SHA üzerinden karşılaştır
- **N-309:** Gerçek NVDA/keyboard/zoom kabulünü TEST_EDİLMEDİ olarak, benzetimden ayrı raporla
- **N-310:** Tam eşdeğerse yalnız owner'a #1146 supersession öner; yeni doküman ve PR açma

### K06 | Kurulum ve yayın doğruluğu
**Bağlam:** Eski #1108/#1129 kapalı; bağımsız açık K06 PR kalmadı.
**AKTİF N-311:** Yayımlanmış latest v1.0.8 ile #1160 içindeki v1.0.9-exp.0 hazırlığını ayır; internette dağıtılmayan kurucuyu kurulabilir diye önermeyi engelle.
**KUYRUK (5):**
- **N-312:** #1108 sekiz kaynağının #1160'a port edildiğine dair owner blob kanıtını kontrol et
- **N-313:** Download/installer SHA, imza ve kaynak URL denetimini gerçek published asset ile eşleştir
- **N-314:** Kullanıcıya görünen pairing rehberinde hâlâ v1.0.7 veya sahte kesin link var mı salt-okunur bul
- **N-315:** Windows clean-user setup ve rollback için gerçek fiziksel koşu yoksa NOT_RUN yaz
- **N-316:** Açık K06 PR olmadığından yeni PR oluşturma; tek gerçek kaynak uyumsuzluğunu #1006/owner'a teslim et

### K07 | Self-host dokümanları
**Bağlam:** Açık #1100; #1125 kapandı.
**AKTİF N-317:** #1100'ın üç özgün doc/test yolunun main ve #1160'daki geçerli kurulumla çelişip çelişmediğini belirle.
**KUYRUK (5):**
- **N-318:** Node>=22 ve self-host CurrentUser ile SYSTEM v2 arasındaki farklı komutları kesin sınırla
- **N-319:** OAuth/cihaz pairing/Cloudflare dokümanında canlı secret veya riskli komut önerisi var mı denetle
- **N-320:** #1125'in owner'a taşınan eşsiz regresyonunu #1160 ile Git blob bazında karşılaştır
- **N-321:** #1100 testinin required CI'da explicit çağrısını ve fiziksel Windows'un NOT_RUN olduğunu ayır
- **N-322:** Gerçek doküman farkı kalmadıysa source kopyası yapma; owner'a merge/supersession kararı bildir

### K08 | MCP sözleşme ve hata kökeni
**Bağlam:** Açık #1106 ve testsiz #1035; #1160 ile doğrudan changed-path örtüşmesi yok.
**AKTİF N-323:** #1106 MCP v1 error provenance ile güncel #1160 control-plane source arasındaki belge/uygulama farklarını yalnız read-only doğrula.
**KUYRUK (5):**
- **N-324:** 401/403/503/UNKNOWN sınıflarının kullanıcıya verdiği yanlış anlamı tek doğrulanabilir örnekle açıkla
- **N-325:** #1035 0-job action_required; eski SHA'yı PASS kabul etme ve CI gerekçesini ayrı raporla
- **N-326:** #1106 15 yolun main'de zaten birleşmiş/kapanmış K08 belgesi olup olmadığını SHA ile denetle
- **N-327:** Owner CORE/auth code'a dokunmadan docs yerinde ise yalnız benzersiz sınıflandırma negatifine odaklan
- **N-328:** API gerçek cihaz/prod MCP sağlamıyorsa tüm fonksiyonel kabulü NOT_RUN tut

### K09 | PR/roadmap kanıt temizliği
**Bağlam:** Açık #1145; 14 changed path'ten 12'si owner #1160'da.
**AKTİF N-329:** #1145'te #1160 tarafından kapsanmayan iki CI-evidence dosyasının gerçekten benzersiz assertion içerip içermediğini denetle.
**KUYRUK (5):**
- **N-330:** #1099 kapanışını source port olduğundan emin olarak arşivle; tekrar PR açma
- **N-331:** #1127/#1137→#1145 overlap için yalnız file path değil blob ve test adı karşılaştır
- **N-332:** #1145 son exact-head 43751049473 SUCCESS; 12 Kasım CANCELLED koşusunu tarihsel olarak ayrı kaydet
- **N-333:** Roadmap'te 'yayınlandı' ve 'denendi' iddialarını gerçek main/release ile karşılaştır
- **N-334:** İki özgün dosya da owner'da çözülmüşse eski PR'ları temizleme önerisi üret, kod tekrarı yapma

### K10 | Browser/PNG kabul
**Bağlam:** Açık #1142/#1116; #1142 beş yolun beşi #1160'da.
**AKTİF N-335:** #1142'nin 5 source blob'unu #1160 ile ve gerçek screenshot artefaktı gereksinimiyle karşılaştır; sentetik yeniden yazmayı durdur.
**KUYRUK (5):**
- **N-336:** #1116'da owner branch'ine taşınmayan gerçekten benzersiz source/capture testi var mı belirle
- **N-337:** Hosted browser-live job ile persisted PNG artefaktı arasındaki farkı run/artifact ID ile kanıtla
- **N-338:** 320/375/768px keyboard/viewport kabulü gerçek Chromium olmadan PASS yazma
- **N-339:** #1142 exact HEAD success olsa da nested suite çağrısını doğrula
- **N-340:** Kalan ekran bug'ı yoksa otomatik screenshot fixture çoğaltma; K14'e kapatma öner

### K11 | S5 maliyet sınırları
**Bağlam:** Açık #1148; 2/2 changed path #1160'da birebir aynı blob.
**AKTİF N-341:** #1148'in iki testinin #1160'da byte-identical olduğunu teyit ederek duplicate kapanış önerisini hazırla; test kopyalama yok.
**KUYRUK (5):**
- **N-342:** #1102 ve #1135 ana main'e daha önce merged, bug'ı geri getirmeden farkı not et
- **N-343:** Provider maliyetini simüle fiyat tablosuyla eşitleyen gerçeksiz PASS ifadelerini temizle
- **N-344:** 24h gerçek fatura/metrik kaydı yoksa NOT_RUN olarak koru
- **N-345:** CI Node22/24 1148 tests named çağrılmış mı exact HEAD üzerinden sorgula
- **N-346:** Kapasite planlama için sahibinden alınması gereken üç ölçümü tek teknik kabul notuna çevir

### K12 | S5 loopback performans
**Bağlam:** Açık #1109; 6 özgün changed path #1160 ile şu an doğrudan örtüşmüyor.
**AKTİF N-347:** #1109'un önceki #1070 main entegrasyonundan sonra gerçekten özgün kapanış/soket sızıntısı düzeltmesi içerdiğini kaynak farkıyla kanıtla.
**KUYRUK (5):**
- **N-348:** Loopback bağlantı-sonu cleanup 500ms bekleme davranışını negatifle tekrar üret
- **N-349:** İptal/AbortSignal çift cleanup'ın yeni branch'de regresyon yapıp yapmadığını kontrol et
- **N-350:** Node22/24 named K12 nested test keşfinin #1160 root smoke ile ilişkisini göster
- **N-351:** Gerçek sağlayıcı, 24h soak ve kullanıcı kapasitesi ayrı NOT_RUN bırak
- **N-352:** İspatlanmış kaynak düzeltmesi yoksa yeni sentetik benchmark dosyası üretme

### K13 | CI keşif sahipliği
**Bağlam:** Açık #1134; #1149 kapandı ve #1160'a port edildi.
**AKTİF N-353:** #1205: #1160'da 649 tracked TS dosyası, eski npm test glob 42 eşleşme, 607 default-omitted; 19-file explicit delegated lane'i ve root smoke'u ayrı sınıflandır.
**KUYRUK (5):**
- **N-354:** #1134 sekiz dosyasının #1160 ile tam Git blob eşitlik/farkını incele
- **N-355:** #1149 7 testinin 13 Kasım owner integration sonrası hangilerinin explicit hosted çalıştığını exact run'da doğrula
- **N-356:** Discovery Inventory SUCCESS bir test çalıştırma değildir; eksik 607 sayacı yanlış PASS üretmesin
- **N-357:** CI manifest/callsite düzeltme önerisini owner'a ver; ana ci.yml sahibi Ömer, dokunma
- **N-358:** Yeni CI dosyası veya PR açmadan kaynak gerçek kapsama farkı kalmadıysa supersession kararı ver

### K14 | 39 PR ve owner entegrasyon
**Bağlam:** Açık #1153; 20/20 changed path #1160'da.
**AKTİF N-359:** 39 açık / 20 kapalı kaynak PR'ın issue-owner/source-port haritasını güncel SHA'larla tek kanonik teslim raporuna bağla.
**KUYRUK (5):**
- **N-360:** #1153 20 dosyasının owner #1160 blob eşdeğerliğini ve açıklama tekrarını denetle
- **N-361:** #1160 aktif 313 changed path; kapalı #1068/#1096 ve 20 bizim kaynak için ported→not-main statüsü koru
- **N-362:** #1205 607 omitted ile 5 başarılı workflow'ün farklı anlamlarını tek SHA'da netleştir
- **N-363:** 39 PR: 33 general green/4 failed/2 zero-job; her FAIL exact run id/eksik owner görevini sınıflandır
- **N-364:** Ömer onayı için merge, close, physical kabul sırası öner; onay gelmeden işlem yapma

### K15 | Cihaz durumu UX
**Bağlam:** Açık #1110; 8 changed path owner #1160'da doğrudan yok.
**AKTİF N-365:** #1110'ın 403→200 stale-success ve yanlış cihaz seçimi negatiflerini güncel #1160 UI source'ta yeniden çalıştırılabilir biçimde ayır.
**KUYRUK (5):**
- **N-366:** 12 PASS/10 TODO eski main, 19 PASS/3 TODO eski #1068 test sonucu güncel #1160 için otomatik geçerli değildir
- **N-367:** Çift cihaz adı/ID kontrolü hatasını yetki veya API değişmeden göster
- **N-368:** #1110 unique test path'lerinde gerçekten yeni behavior gap var mı kontrol et
- **N-369:** Required CI 43751196755 genel success ama nested K15 adına kanıt bul
- **N-370:** Browser/gerçek paired device yoksa fiziksel kabule geçirme

### K16 | Windows taskkill negatifleri
**Bağlam:** Açık #1121; #1105 kapandı, owner'a port edilmiş olabilir.
**AKTİF N-371:** #1105 closure kaynaklarının #1160'a taşınmasını ve #1121 tek dosyanın halen ayrı test olup olmadığını kontrol et.
**KUYRUK (5):**
- **N-372:** Taskkill exit0 sonrası grandchild alive olayı sentetik/physical farkıyla raporla
- **N-373:** Gerçek Windows tree kill postcondition sahibi #1160, protected process-manager koduna girme
- **N-374:** #1121 exact-head CI'da nested K16 named çağrı var mı doğrula
- **N-375:** #1161 protected SYSTEM/SQLite cutover ile yanlış Windows PASS çakışması olmadığını kontrol et
- **N-376:** Güncel fiziksel child PID kanıtı yoksa #540 açık kalmalı; yeniden test fixture kopyalama

### K17 | Skill registry güvenliği
**Bağlam:** Açık #1150 ve 0-job #1030; #1150 2/2 yol owner #1160'da ama bir test blob'u EVOLVED.
**AKTİF N-377:** #1150 symlink validate→read TOCTOU davranışı güncel #1160'da güvenli hâle geldi mi, benign bug repro ile actual fix'i kesin ayır.
**KUYRUK (5):**
- **N-378:** Owner'da değişmiş tek K17 test blob'unun yeni/eksik assertion farkını incele
- **N-379:** Manifest/path swap ve katalog-dışı okuma için owner'a fail-closed beklentisini kanıtla
- **N-380:** #1030 testsiz action_required eski SHA için PASS iddiası yok
- **N-381:** Windows/Linux gerçek symlink/hardlink acceptance henüz yapılmadıysa NOT_RUN
- **N-382:** Korunan registry/security koduna dokunma; fix yoksa tek teknik owner handoff çıkar

### K18 | Aktarım ve kapasite kanıtı
**Bağlam:** Açık #1139/#1119/#1107; #1151 kapandı ve owner'a port edildi.
**AKTİF N-383:** #1139 iki changed path'inin #1160 içinde byte-identical olduğunu doğrulayarak aynı testleri ikinci kez yazma.
**KUYRUK (5):**
- **N-384:** Kapalı #1151'in 4 dosyasının #1160'a port gerekçesini exact SHA ile kontrol et
- **N-385:** ACK kaybı sonrası receiver-readback ve sender reported success ayrımını koru
- **N-386:** 256 MiB+ gerçek iki-PC automatic transfer testine dair physical kanıt yoksa NOT_RUN
- **N-387:** #1119 / #1107 hâlâ özgün kalan offline metrics varsa owner subtree ile karşılaştır
- **N-388:** Gerçek provider usage/fairness kapasitesi simülasyondan çıkmaz; Owner onay ihtiyacını bildir

### K19 | Gerçek dosya aktarım riski
**Bağlam:** Açık #1136/#1111; #1147 kapandı, 3 kaynak dosyası owner #1160'a port edildi.
**AKTİF N-389:** #1147'nin TS2532 düzeltmesi dahil 3 kaynak dosyasının owner #1160 blob/semantik port kanıtını ve exact HEAD CI durumunu doğrula.
**KUYRUK (5):**
- **N-390:** #588 HTTP413 ~230KiB hangi katmandan geliyor; kanıtsız '220KB agent limiti' deme
- **N-391:** #1136 iki özgün QA yolunun #1160 strict 103+ lane dışında hala değer taşıyıp taşımadığını gör
- **N-392:** Receiver ACK/SHA256 güveni için gerçek iki cihaz tam uçtan uca test yoksa NO_GO koru
- **N-393:** Tek logical request 256MiB+ ve resume/retry basamağını tarihsel manuel bounded 221KiB testinden ayır
- **N-394:** Owner'da karşılığı bulunan testler için tekrar PR/dosya yapma; kapanış önerisini K14'e yaz

### K20 | CI ve sorun kanıtı
**Bağlam:** Açık #1152, #1118, #1130, #1141; dördü genel CI failure.
**AKTİF N-395:** #1152 exact run 43751269378 CI FAIL nedenini Node loguyla ayır; 79/79 eski TAP varsayımını yeni HEAD'e taşımadan owner #1205 ile ilişkilendir.
**KUYRUK (5):**
- **N-396:** #1118 run 42411030903 CI FAIL root step ve fixed41 nedeni ayrı kanıtla
- **N-397:** #1130 run 42412252743 CI FAIL, Node22/24 exact log + neden; skipped/zero-job PASS değil
- **N-398:** #1141 run 42474379692 CI FAIL; asıl source hatası mı gate mi kanıtla
- **N-399:** #1205 649 tracked/42 legacy glob/607 default omitted ve root smoke named execution raporunu doğrula
- **N-400:** Owner #1160 5/5 workflow success ama 649/649 test PASS değil; #1006'ya gerçek coverage kararı teslim et

## Sahipsiz havuz N-401…N-420 | yalnız tek defalık read-only denetim
Havuz işi alacak köle önceden **19 başka KNN kaydını** kontrol eder; aynı kimliğe tek sahip. Başka KNN dosyasını değiştirmek yasak. Havuz yeni PR veya extra kod izni vermez.
- **N-401:** CI #1205 default test glob'unun 607 omitted dosya sayısını owner exact SHA source receipt'e bağla
- **N-402:** #1160 parent 5 workflow success ile fiziksel SYSTEM NO_GO ayrımını tek kaynak cümlesine indir
- **N-403:** #1068 kapalı 18 path'in 15 exact/3 evolved owner port kanıtını incele
- **N-404:** #1096 kapandı; 321 eski changed-path ile #1160'nın 313 güncel path'ini semantik değil yalnız scope bakımından karşılaştır
- **N-405:** 16 Kasım kapanan 20 SinsiVinci PR'ı closed-unmerged ve owner-ported kanıtına göre üç sınıfa ayır
- **N-406:** #1148 exact 2/2 blob match owner's #1160 için supersession kararını doğrula
- **N-407:** #1139 exact 2/2 blob match owner's #1160 için supersession kararını doğrula
- **N-408:** #1142 5/5 changed-path owner #1160; byte eşdeğerliğini bitir
- **N-409:** #1150 changed K17 test blob-u source/owner diff; güvenlik regresyonunu silme
- **N-410:** #1153 20/20 path owner #1160; yeni negative assertion kaybını kontrol et
- **N-411:** #1145 12/14 path owner #1160; iki özgün kalan QA teslim kararını çıkar
- **N-412:** #1109 6/6 unique benchmark path için prior #1070 main test tekrarını ayır
- **N-413:** #1134 8/8 path owner; auxiliary CI ve main required lane farkını kanıtla
- **N-414:** #1030 zero-job: security fix olduğu iddiasını reddeden issue-kanıt eşlemesi
- **N-415:** #1035 zero-job: MCP synthetic redaction testleri gerçek host dış kabul değildir
- **N-416:** #1149 closed owner-ported 7 missing nested testin #1205 explicit/omitted durumunu yeniden test et
- **N-417:** #1147 closed owner-ported üç dosya ve TS2532 fix kanıtını koru
- **N-418:** #1138 closed/ported 7 path ve gerçek browser PNG artefaktı yoksa açık kalan test
- **N-419:** #1161 controlled protected SYSTEM/SQLite cutover fiziki Work-PC owner kabulü
- **N-420:** #1226 experimental packaging PR non-main branch merge; published latest v1.0.8 ile karıştırma

## Ömer/Onur karar kapıları
1. **Ömer:** #1160'daki taşınan source listesinin kabulünü; #1205 için default `npm test` ile explicit root/nested kapsam ve kaç NOT_RUN kaldığını; #1161 gerçek SYSTEM/SQLite/DPAPI Windows onayını belirler.
2. **Ömer:** 39 open PR için `owner-ported/superseded` olanları onaylayıp kapatma/merge sırasını yazılı karara bağlar. ŞEF onaysız merge/close yapmaz.
3. **Onur:** K01 sekmesine özellikle V002 mesajını gönder (P008'de kalmış). Sonra K02–K20 ve tur sonunda ŞEF DEVAM.
