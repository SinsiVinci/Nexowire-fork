# ŞEF HAFIZASI — S005 | 2026-11-07 (Europe/Istanbul)

## Bu ŞEF DEVAM: iki kullanıcı turunun sonucu
- S004'ten bu yana fork `ekip` geçmişinde **67 yeni commit**, K01–K20 **20/20** güncel kayıt dosyası okundu. Adım sayıları K01–K09 ve K12/K13/K15/K17–K19=4; K10/K11/K16=5; K14/K20=6. Hepsi P004/V003 kullandı.
- P004 T-255…T-374 toplam **104/120 (%86,7) yerel/source QA teslim**, 16 kısmi/bağımlı. Kaynak PR başka; canlı cihaz ve owner kabulü ayrı. Önceki birleşmiş işler bu sayaca eklenmedi. Yeni P005 120 görev başlangıcı 0/120; 20 ajan için 6'şar ayrık paket, ayrıca 20 yeni HAVUZ, 4 eski boş HAVUZ.
- HAVUZ T375–394 **16 ayrı geçerli sahiplik, 4 sahipsiz**. T379 K11/K12 → K11; T382 K04/K05 → K04; T383 K06/K07 → K06; T385 K02/K16/K20 → K02. Kaybedenlerin bağımsız QA/PR kanıtı saklı, T-ID çift puan yok. A004 arşivinde liste.
- **Gerçek upstream sonuç:** K11 [#1102](https://github.com/Naveax/Nexowire/pull/1102) exact HEAD `86f1224ccdc9252c98131de187ad40985a0752ac`, PR CI 7/7 success, en az 3 dosyalık diff ve targeted test incelendi, draft→ready, **squash merge succeeded**: upstream main `b5a3f8840517d65ecbd6a018699c4c8bdde09987`. Fork main aynı SHA'ya `force:false`, expected old SHA `4e7db16f4233048a956664bef6b607781eb63fb7` ile fast-forward edildi. **Yeni main push CI son snapshot: 6/7 success, browser-live running.** Bu kaynak-only S5 bilinmezlik düzeltmesi; #487/#539 issue hâlâ açık, canlı ölçüm değil.
- 32 yeni kaynak PR #1099…#1130; #1102 merge sonrası 31 Draft. 14 diğerinde exact-HEAD CI 7/7 yeşil; **test discovery bulgusu** yüzünden 31'i toplu merge etmedim. K13 #1112: 52 delegated test, 43 directly/wildcard accounted, bazı yeni `.mjs`/nested `.ts` keşfi kanıtlanmamış; `.github/workflows/ci.yml` Ömer #1096 sahibinde. K13 sadece kendi izinli `delegated-noncore.yml` ve scripts yolunu düzeltecek. K20 #1118 hosted Node22 FAIL + browser cancelled; K20 aktif T509 hata çözümü.
- K01 #1114 boş pairingId/token RED ve K04 #1104 admin 401/403 owner adayına karşı 4/6 FAIL: source owner #1068. Bağımsız test/kanıt var, ama owner kaynak değiştirilmedi, çözülmüş değil. K10 Chromium socket EPERM, fiziksel Windows/iki-PC/provider soak NOT_RUN; bu yüzden kapanış yok.
- Ömer'in #1096 CORE/Broker/SQLite Hub/Connection v2, #1068 web entegrasyonu dosyaları protected. Aynı dosyada iki ajan yazmıyor; K16 `src/agent/process-manager.ts` read-only, K13 `.github/workflows/ci.yml` read-only. Ömer ile yalnız somut SHA/path merge çakışmasında Onur aracılığıyla temas, beklemeden diğer işlere geç.

## Yeni öncelik ve yürütme kararı
1. CI doğruluk açığını K13 T467...T472'de; K20 hosted FAIL'i T509'da ilk ele al. Yanlış yeşil kabulü durdurmak hedef; özellik işlerini tümden durdurma.
2. K01/K04 gerçek RED'leri owner #1068'le kaynak çatışması olmadan dar negatif test + öneri yap, güvenli source değişikliği owner main'e girince uygula. K16 Windows #540 yalnız bağımsız test; fiziksel kabul farklı.
3. Her KNN P005'te bir aktif + 5 kuyruk, sonra sahipsiz T515–534 havuz, 4 eski kalan T376/T386/T391/T392. T-ID ve dosya sahibi kontrolü, her adımda main HEAD ve PR check güncelliği.
4. ŞEF sonraki devamda KNN değişmiş raporları ve PR exact SHA/CI üzerinden okur; uygun noncore PR için gerçek eklenmiş testlerin çalıştığı ve owner kaynak çakışmasının olmadığı kanıtlanırsa merge eder; main CI izler, fork main FF. Çakışmalı/RED işleri owner'a not ve bağımsız görev yönlendirme.
5. #1006 üzerinden ana kabul izi PANO/SEF/PR bağlantılarıyla sürdürülür, job NOT_RUN/fiziksel beklenti başarı diye yazılmaz; #1006 issue kapatılmaz.
6. Onur'dan yalnız 20 sekmeye aynı worker V002, sonra kısa ŞEF DEVAM promptu; teknik iş için başka insan şartı yok. Ürünün tümü için ETA ve gerçek % kesin değil (22 açık issue/owner/cihaz), yalnız P004 yerel iş ilerlemesi %86,7.

---

# ŞEF HAFIZASI — S004 | 2026-11-07 (Europe/Istanbul)

## Ömer'den gelen koordinasyon ve doğrulama
- Onur üzerinden Ömer'in ajanından ortak plan teyidi alındı. **K01–K20 P003/P004 iş dağılımı korunacak**, öncelik #540, #588, #539, #485, #487. 120 yeni T-255…T-374 **ayrı sayaç: 0 yeni tamamlandı**. Eski merged işleri yeni tamam sayma.
- [#1096](https://github.com/Naveax/Nexowire/pull/1096): **open Draft/NO-GO**, exact HEAD `02bf1004646620198719a7f441e7d8ce870f4d38`; `main@4e7db16f4233048a956664bef6b607781eb63fb7` baz. **310 dosya** değişti. Değişen yollar KNN'nin P003'te izinli kod/test/docs alanlarından hiçbirine doğrudan karşılık gelmedi; ama `src/agent/process-manager.ts` (#540 core) ve `.github/workflows/ci.yml` (#1006 CI) içeriyor ve owner yönetimindedir. K01–K04 için ayrıca #1068 web çakışması sürer.
- Owner beyanı: `60/60` yerel PASS, Windows Node22/24 PASS ve Work-PC CORE/Hub/Agent çalışıyor. Bunlar owner'ın ilettiği bilgilerdir; ŞEF canlı cihazı/yerel testleri fiziksel yeniden yapmadı. GitHub exact #1096 checks: **17 success, 6 skipped, 1 in_progress browser-live** (24 toplam); mevcut çalışma olduğundan **yeniden dispatch yapılmadı**. Source/CI PASS olsa da üretim kabulüne eşit değildir.
- Owner isteği: aynı SHA için tekrar CI başlatma; gerçek cihaz gerekiyorsa bitmiş sayma; CORE/Broker/auth/SQLite değiştirme; çakışma varsa merge yerine GitHub kanıtı ile haberleş; yeni gereksiz kısıtlar ekleme. PANO P004 ve PROTOKOL V003 bu **hedefli koordinasyon** notlarını eklendi, **tek bir yeni T-ID değişmedi**.
- #1006 açık; henüz P004 yeni tamamlanan görev bulunmadığından issue'ya 'bitti' yorumu yazılmadı. Tamamlandıkça her görev için issue numarası, PR/commit, exact-head CI ve canlı kabul durumu ayrı kanıt olarak takip edilecek.
- Önceki main, fork main ve ekip HEAD P003'ün doğrulanan `main@4e7db16f...`, `ekip@7ebb1628...` bilgileridir. Bu S004 değişikliği yalnız ekip yönetim dosyalarını değiştirir; upstream `main` veya #1096'ya dokunulmadı.
- **Sonraki ŞEF DEVAM:** P004 sonrasını ve KNN raporlarını oku, 120 yeni görevden kanıtlı bitenlerin sayısını güncelle, #1096/#1068 çakışmasını yeniden değerlendir, #1006 takip bağlantılarını hazırla.

## S003 tarihî kayıt (içeriği aşağıdadır)
# ŞEF HAFIZASI — S003 | 2026-11-07 (Europe/Istanbul)

## Bu ŞEF DEVAM'da ne yapıldı?
- Okunan son ekip HEAD: `7fe64eedf09981afb28dacbcbd3509097be19eb7`, S002 baz `de78d759f1eda21c1e8ac34f2dc80c61f5cec769`den **34 commit** ileride. Değişenler yalnız **K01…K20 durum dosyaları**; hiçbir KNN kaydı ŞEF tarafından değiştirilmedi.
- **20/20 köle gerçek rapor yazdı.** K16 sessizlik giderildi: Adım 3, test PR #1041 açılmış (sonradan upstream tarafından kapalı-unmerged), 32/32 yerel test beyanı; kabul edilen main kaynak ayrıştırılacak. K20 Adım 4, K14 Adım 4. Diğerleri Adım 2/3. **Kayıtlar 1 Kasım çevresinde**, 7 Kasım'da yeniden çalıştıklarına dair kanıt yok.
- T-235 çakışması: K02 ve K07 aynı ID'yi üstlenmiş. PROTOKOL'ün küçük numara kuralına göre **K02 sahibi**; K07'nin #1034 teslimi tarihsel ve ayrı PR olarak kalır, T-235 ikinci kez sayılmaz.
- K09 T-179–184 **yerel WIP, uzakta yok**; tekrar teslim sayılmaz. K13 T-201 dal/workflow stratejisi engelli, K18 T-223 CSV başka sahibin alanı. K01/K03/K04/K10/K12/K15 fiziksel browser/cihaz kabulü açık; CI action_required/0-job PASS değildir.
- `Naveax/Nexowire` üzerinde **SinsiVinci write collaborator** doğrulandı; fork `main` eski `93b6df33ef58610dcfdf3584bfe774e5afa7df4d`den upstream `4e7db16f4233048a956664bef6b607781eb63fb7`ye **27 commit / 201 dosya, non-force fast-forward, expected SHA** ile eşitlendi. Bu tek repo senkronu kod PR'ı değildir.
- **22 açık issue** okundu; #260 artık kapalı. Açıklar: #1006, #1001, #974, #812, #780, #617, #588, #587, #540, #539, #487, #486, #485, #484, #482, #481, #402, #323, #322, #271, #269, #265.
- 36 SinsiVinci kaynak PR'ının **6'sı açık Draft** (#1010, #1011, #1015, #1016, #1030, #1035), **30'u closed unmerged**. SinsiVinci kaynaklarından bir kısmı owner birleşimleri [#1054](https://github.com/Naveax/Nexowire/pull/1054), #1055, #1057, #1058, #1059, #1061, #1063, [#1066](https://github.com/Naveax/Nexowire/pull/1066), [#1070](https://github.com/Naveax/Nexowire/pull/1070), [#1071](https://github.com/Naveax/Nexowire/pull/1071) ile **main'e girdi**; bu PR'ların merged_at bilgisi doğrudan doğrulandı.
- [#1068](https://github.com/Naveax/Nexowire/pull/1068) **open Draft**, K01–K04'ün kaynak UI işlerini ve CI gate'ini toparlıyor. Owner'ın müdahalesi süresince K01–K04 web/CSS kaynaklarında çakışma YASAK; öncelik bağımsız test/denetim. PR başlığında source-only/no production kapsamı korunmalı.

## Öncelik kararları ve savunması
1. **P1 gerçek zarar/risk:** [#540](https://github.com/Naveax/Nexowire/issues/540) Windows ProcessManager taskkill sonucunun descendant ölümü olmadan başarı söylemesi; 11/11 test PASS olsa bile asılı süreç var. K16 izole negatif/rapor, K20 kabul denetimi. Gerçek process kill/kontrol yetkisi Ömer'in CORE/native güvenlik alanı; bizim kaynak patch yok.
2. **P1 aktarım güvenilirliği:** [#588](https://github.com/Naveax/Nexowire/issues/588) >~220KB sorunu, güvenli resumable/verify. K19/K18 offline kullanıcı/ölçüm QA; dosya hash, reassembly, authorization/WAL çekirdeğine girilmez.
3. **Hızlı gerçek noncore düzeltme:** [#539](https://github.com/Naveax/Nexowire/issues/539) R01/R11/R17/R18/R22'de yanlış başarı/hata ayrımı, environment doctor ve ekran. K01–K05/K08/K10/K13/K15/K16/K20 işlenecek, **ayrı dosya sahipliği**.
4. **Kullanım ve kanıt:** [#485](https://github.com/Naveax/Nexowire/issues/485) kuruluma yönelik docs/UI; [#487](https://github.com/Naveax/Nexowire/issues/487) gerçek fatura değil offline maliyet/kapasite; [#1006](https://github.com/Naveax/Nexowire/issues/1006) CI/PR darboğazı. #812 yalnız read-only UI teşhisi.
5. **Kritik rezervasyon:** #1001, #974, #587, #617, #402, #323, #322, #271, #486, #484, #269, #265, #780'in sandbox/auth tarafı ve #1006 release/doğrudan CORE. #271 [#481](https://github.com/Naveax/Nexowire/issues/481)'deki owner **ON HOLD**; kullanıcının genel 'hataları düzeltin' isteği özel hold'u kaldırmıyor.
6. **Bitiş tanımı:** Repo write izni olsa da otomatik merge yok. Önce owner aktif PR ve source SHA kontrolü, sonra yalıtılmış test, exact-head hosted CI, profesyonel PR ve main sonrası kanıt; fiziksel kabul ayrı. Bir issue **kapalı değilse açık kalır**, "yerel test PASS" tek başına kapanış değil.

## Plan sürümü ve takip
- PANO **P003**: K01…K20 için her biri **1 aktif + 5 kuyruk**, toplam **120 yeni tekil görev T-255…T-374**. **HAVUZ 20 sahipsiz T-375…T-394**. Eski tarihî T-ID'ler tekrar kullanılmadı; P002 tamamları A003 özetinde, kısmi işler kayıt ve PANO'da. PROTOKOL **V002**: issue-öncelik, write yetkisi, owner çakışması, merge ve issue kapanış şartları.
- Hedef kilometre taşları M2 üç tekrar üretilebilir kanıt, M3 en az bir gerçek CI yeşil noncore PR, M4 main birleşme. 22 issue'nun tamamı için ETA **bilinmiyor**; ilk küçük bağımsız teslim **1–3 iş günü tahmin, koşullu**.
- **Bir sonraki ŞEF DEVAM:** P003 sonrasındaki commitleri karşılaştır, KNN numaraları + issue etiketini kontrol et, #1068 merge/CI durumunu ve altı açık source PR'ın semantik farkını tekrar hesapla; proof ile tamamlanan T-ID'leri A004'e taşı, 20 kuyruğu yenile. Ömer'in kritik açık PR'larına çarpmayı denetle.
- **ONUR'un yapacağı:** Aynı sabit KÖLE MESAJI'nı 20 sekmeye yapıştır; yetki için Ömer'e tekrar Discord yazma.

## Tarihsel S002 referansı
Aşağıdaki kayıt önceki snapshot'tır; S003'te doğrulanan güncel write/merge/issue durumu üstündür.

# ŞEF HAFIZASI — S002 | 2026-11-01 (Europe/Istanbul)

## Son ŞEF DEVAM snapshot'ı
- Son işlenen `ekip` commit'i: `d85cc5b71296d0a7d18de8bbd80fc76c50970fe3` (K20 T-129 kayıt güncellemesi). S001 kuruluş commit'i `a5830f817cab945990c53ac55fc12f1bac736dc3`.
- Son kontrol: 30 yeni `ekip` commit'i, K01–K15 ve K17–K20 kayıtları güncellendi; **K16 Adım 0 tek sessiz dosya**. ŞEF, hiçbir KNN durum dosyasını yeniden yazmadı.
- Pano P002; PROTOKOL V001 değişmedi; ARSIV A002. Eski P001'in tamamlanan T-xxx'leri arşivlendi, her KNN için **1 aktif + 5 kuyruk**, yeni 20 maddelik havuz ayrıldı.
- Eski 120 atamadan **103 BITTI-YEREL** (yani kod/test/doküman ve PR/commit raporlandı); 17 açık/kısmi/engel. Eski havuzdan **10 BITTI-YEREL**. 113 T-ID arşivde. Bu oran ürünün veya CI'nın tamamlanması değildir; tüm yerel testler ŞEF tarafından bağımsız yeniden çalıştırılmadı.

## Tam olarak ne değişti?
- Yeni upstream PR serisi [#1010](https://github.com/Naveax/Nexowire/pull/1010)–[#1032](https://github.com/Naveax/Nexowire/pull/1032): **23/23 open Draft, 0 merged** (GitHub PR metadata yeniden okundu). UI: connect, CSS, panel, admin; offline DOM/QA/test; Windows/self-host/MCP belgeleri; S5 sentetik ölçüm; PR review/CI tooling. Gerçek kod ve test commit'leri var, yalnız yazılı durum raporu değil.
- Önceki destek PR'ları #997–#1000 da Draft; upstream fork CI action_required/0-job engeli devam ediyor. Bu test geçişi değildir.
- Fork [PR #1](https://github.com/SinsiVinci/Nexowire-fork/pull/1) K13 workflow: exact SHA `50844fb0c7d8e82adbbf6dbd5c1a36a474c903c0`; [run 41327364795](https://github.com/SinsiVinci/Nexowire-fork/actions/runs/41327364795) 3/3 gerçek job başarı (Linux Node22/24, Windows Node24; npm ci, delegated static, typecheck, build). Browser/cihaz/CORE/release değil.
- Fork ve upstream `main` ikisi de `93b6df33ef58610dcfdf3584bfe774e5afa7df4d`; yeni senkron gerekmedi. Upstream repo metadata `push:false`, fork push:true (S001).

## Kararlar, gerekçeler, kritik yol
1. **Fork PR #1 şimdilik birleştirilmedi.** Workflow ve runner kodu yalnız K13 dalında. Temiz upstream `main`den açılmış diğer `kNN` dallarının checkout'unda `scripts/delegated/k13/**` yok; workflow baz dalda olup PR head'de gerekli yardımcı scriptler olmadığında fail ya da yanlış kapsam çıkabilir. Ayrıca fork-only workflow fork main'e merge edilirse fork main upstream'den ayrışır; S001/P001 güvenli fast-forward protokolü ile uyumu tasarlanmalı. K13 T-200...204 bunları test/çözümle ele alacak. Kanıt olmadan otomatik merge yok.
2. **K16 sessiz:** Onur sekmeye bakacak. 19 diğer köle iş yapmış; K16'nın test/kod teslimi olmadı.
3. **Sahiplik havuzu çatışması önlendi:** K02→121; K07→122; K08→123; K09→124; K05→125; K13→128; K20→129; K11→131; K10→134; K14→140. Hepsi özgün kayıt/PR bağlandı. KNN'lerin sonraki havuz planları stale idi; kalan T-126/127/130/132/133/135/136/137/138/139 P002'de birer kişiye doğrudan atandı. T-235..254 yeni havuz.
4. **K15→K03 bağımlılık:** PR #1026 içindeki aynı adla device button erişilebilir isim TODO'su. K03/PR #1016 kaynak kodu değiştirebilir, K15 sadece test yapar. K05→K04 `web/admin.html` hata paneli bildirimi source bulgusu, K04 sahibi.
5. **K03 genel npm test** denemesi exit 130/yarıda kaldı; yerel 8/8 ve typecheck/build PASS tüm repo testi PASS sayılmaz.
6. **K12 T-071 CSV sözleşmesi** mevcut benchmarklarda CSV yok; JSON mevcut. CSV uydurulmayacak, JSON negatif testleriyle ilerle.
7. **K14 T-084 merge-readiness engeli** upstream CI/maintainer review olmadan kapatılmaz. K14 T-132 PR-overlap ve yeni upstream Draft taramalarıyla çalışmaya devam eder.
8. **Gerçek cihaz/browser/provider/Cloudflare/CORE** kabulü yapılmadı; bu ekibin kritik alan yetkisi yok.
9. M2 ilk upstream merge hâlâ yok; ilerleme oranını 'ürün %86' diye yazma. ETA için gözlenen gerçek merge süresi yok. Onur'un tek insan işi Write yetkisi istemek ve K16 sekmesine bakmak; upstream Actions onayı repo maintainer'a ait.

## Sonraki ŞEF DEVAM
- Son görülen `ekip` commit'i `d85cc5b712...`; takipte yeni head'i ve diff'i oku, yalnız yeni değişen KNN'leri işle. PANO/SEF/ARSIV ŞEF commit'ini işlenmiş rapor sanma.
- Öncelik K13 T-200 CI cross-branch tasarımı, K03/K15/K04 UX regresyon bağımlılıkları ve en değerli yeni non-core kod testi.
- Yeni PR'ların Draft/open durumunu ve **her yeni exact HEAD'deki** gerçek run/job sonuçlarını ayrıca doğrula. İlk güvenli küçük upstream merge'den önce CI kapısı yokmuş gibi davranma.
- Yeni 20 havuz görevinin claim kayıtları ve KNN kuyruk doluluğu, tek sahiplik çatışmaları; biten her task T-ID'yi ayrı ARSIV satırına taşı.

---

## Önceki şef snapshot'ı (S001, tarihsel; mevcut durum üstte)


## Durum ve son okuma
- Kurulum sebebi: kullanıcı "ŞEF DEVAM"; `ekip` dalı ve `ekip/SEF.md` bulunmadı, sıfırdan başlatıldı.
- Son bilinen koordinasyon HEAD'i: ilk kurulum commit'i (bu dosya ile birlikte); sonraki DEVAM'da `ekip` commit geçmişinden işlenecek.
- Pano sürümü: P001. Protokol: V001. Son okunan KNN raporu: kuruluş boş şablonları; **hiçbir iş veya rapor tamamlanmış değil**.
- Kural: yalnız kanıtlı kod/test, yanlış tamamlanma oranı yok. ŞEF her seferinde fark kayıtları + PR'ları takip edecek.

## GitHub erişim ve senkron
- Kimlik: `SinsiVinci`; fork `SinsiVinci/Nexowire-fork` `admin/push:true`.
- Upstream `Naveax/Nexowire` `pull:true`, `push:false`; collaborator permission uç noktası 403 verdi, fakat repo metadata push false kesin. Ömer'e kendiliğinden yazı gönderme, Onur için Discord metni PANO'da.
- Önceki fork `main`: `a19a228dc6f19fd484cf935e941a00ea625233f8`. Upstream `main`: `93b6df33ef58610dcfdf3584bfe774e5afa7df4d` (2026-11-01 kontrolü).
- Compare: upstream +38 commit, behind=0; fork `main` non-force, SHA lease ile `93b6df33ef58610dcfdf3584bfe774e5afa7df4d`'ye fast-forward edildi.
- `ekip` dalı güncellenmiş fork `main`den açıldı. `ekip` hiçbir koşulda upstream PR/merge hedefi değildir.

## Açık upstream iş ve kararlar
- Açık issue araması: **23 issue**; önemli kritik kökler [#1006](https://github.com/Naveax/Nexowire/issues/1006), [#1001](https://github.com/Naveax/Nexowire/issues/1001), [#974](https://github.com/Naveax/Nexowire/issues/974). Çoğu CORE, auth, billing, güvenlik/release niteliğinde, ekip için doğrudan çalışma yetkisi YOK. Bu sayı tek arama anının snapshot'ıdır.
- Açık PR envanteri en az 100 ve çok sayıda Draft; örnek aktif upstream kritik PR'lar #1009, #1007, #1005, #1004, #1003, #995, #989, #996, #985. Dosyalarını KNN şeritleri değiştiremez.
- Ömer'in ana dala kaynak olarak yeni birleştirdikleri: [#986](https://github.com/Naveax/Nexowire/pull/986), [#1002](https://github.com/Naveax/Nexowire/pull/1002), [#994](https://github.com/Naveax/Nexowire/pull/994). Main güncel `93b6...`; CORE hâlâ üretim NO-GO, fiziksel kanıt eksik.
- Önceki destek PR'ları: [#1000](https://github.com/Naveax/Nexowire/pull/1000) K/S1 docs, [#998](https://github.com/Naveax/Nexowire/pull/998) S2/S3 statik UI, [#997](https://github.com/Naveax/Nexowire/pull/997) S4/S5 ölçüm, [#999](https://github.com/Naveax/Nexowire/pull/999) R/REL. Hepsi Draft. `action_required` ve jobs=[] görüldü; **GitHub CI PASS değildir**. Önceki yerel 81/81 raporu kanıt sınırı açısından bağımsız yeniden doğrulanmadı. K14 bu PR'ları yeni main'e göre inceler.
- [#1006](https://github.com/Naveax/Nexowire/issues/1006) issue kaydı, birleştirilmiş main CI `41252418555` üzerinde Node 24 startup concurrency hatasından sonra [#1009](https://github.com/Naveax/Nexowire/pull/1009) düzeltme adayı açıldığını gösteriyor. Ömer'in CORE alanı, bizim iş değil.
- Sonuç: non-core UI/doküman/offline QA ile işe başlamak; fork güvenli CI ve entegrasyon şeritlerine öncelik. Source işlerine sahte PASS vermemek.

## 20 tek-sahipli alan ve kapasite
- K01–K04 web ekranları/CSS; K05 erişilebilirlik QA; K06–K09 docs; K10 tarayıcı QA; K11 S5 maliyet; K12 loopback benchmark; K13 CI; K14 entegrasyon; K15 cihaz UX QA; K16 doctor; K17 registry/meta; K18 transport metrics; K19 aktarım UX QA; K20 test bakım.
- PANO: 20 aktif + 100 sıradaki görev (her KNN'de 5) + 20 havuz = **140 tanımlı**. Yalnız ilk 120 atanan yüzde hesabında. Yeni iş başlamadan gitmiş değil.
- Teslim kriteri: her biten iş için exact SHA/PR, gerçek test sonucu, upstream merge ayrı durum.
- Yeni görevlerin projeye girme ETA'sı 20 gerçek iş örneği ve CI takibi olmadan **bilinmiyor**. 2 gün garanti verme.

## Açık riskler ve karar gerekçeleri
1. Fork `main` gerideydi; yalnız fast-forward ile senkronlandı. `ekip` ve kod dalları asla karıştırılmayacak.
2. Upstream push false; Ömer'den Write yetkisi istemek Onur'un tek seferlik işi. Yetki yokken PR yolu çalışmaya devam eder.
3. 20 sekme kaynakta henüz çalışmadı. Her sahada ilk gerçek test PR'ına kadar ilerleme %0.
4. CI action_required ve ana main CI belirsizliği; yalnız gerçek job sonucu kabul edilir.
5. Kritik CORE/WAL/release/secret/ödeme ve gerçek cihazlar mutasyona kapalı. Her şüpheli dosya önce kontrol.
6. Ortak ekip dalı asenkron rapor güncellemesi ref yarışına açık; SHA conflict fetch+retry; force yok.
7. PANO alan paylaşımı `web/styles.css` yalnız K02, UI diğerleri bu dosyayı değiştiremez.
8. Önceki destek PR'ları 4 Draft, yeni iş açarken tekrar etmeme.

## Sonraki ŞEF DEVAM kontrolü
- `ekip` HEAD ve commit diff; KNN dosyalarından en son değişenleri oku, BITTI kanıtını doğrula.
- K14 senkron/PR ve K13 workflow durumunu önce değerlendir.
- Pano görevleri, havuz claim ve yeni öneri/çakışmaları çöz.
- Aktif 20×6 işleri projeye girecek küçük değişikliklere ayrıştır; 10 işten sonra hız/ETA hesapla.
