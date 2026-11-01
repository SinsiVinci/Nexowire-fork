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
