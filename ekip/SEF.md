# ŞEF HAFIZASI — 2026-11-01 / S001

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
