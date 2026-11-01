# NEXOWIRE EKİP PANOSU — P001
Tarih: 2026-11-01 (Europe/Istanbul). Kaynak: Naveax/Nexowire `main` `93b6df33ef58610dcfdf3584bfe774e5afa7df4d`. Son kontrol: ilk kurulum.

## Hedef, kapsam, ilerleme
- Hedef: güvenlik sınırlarına/CORE'a girmeden çalışır non-core kod, UI, test, ölçüm ve doküman iyileştirmelerini küçük PR'larla hedef projeye akıtmak.
- Kilometre taşları: M0 ekip alanı ve 20 sahipli kuyruk (kuruldu); M1 fork CI kanıtı + ilk 5 doğrulanmış değişiklik; M2 ilk 10 anlamlı non-core PR; M3 düzenli merge akışı.
- Kritik yol: yazma yetkisi yok; hedef CI fork `action_required` ve yeni main CI kırmızı olabilir. Güvenli fork CI, küçük PR, manuel upstream merge yolu öncelikli.
- İlerleme: **0/120 yeni iş (%0)**; kurulum bu sayaçta sayılmaz. Bu sayı bütün Nexowire ürününün tamamlanma yüzdesi değildir.
- Tahmini kalan: veri yok / dürüstçe hesaplanamıyor. İlk 10 PR'ın süre ve CI verisinden sonra tahmin oluşturulacak; 2 gün başarı garantisi yok.
- Durum kodları: BEKLIYOR, AKTIF, BITTI, ENGEL, ONERI, DIS_ENGEL. Tamamlandı: ilgili kod/çıktı linki + gerçek test/CI sonucu + kalan sınır kayıtta olmalı.

## Şeritler ve açık kapılar
- K01–K04 web görsel katmanları; K05 ve K10 yalnız QA. Her dosyada tek yazarlık; farklı ekranın CSS'sini K02 yönetir.
- K06–K09 doküman ve deneyim; K11–K12 ve K18 offline ölçüm; K13 CI; K14 Git entegrasyon; K15–K17 ve K19–K20 özel test/yardımcı araç.
- `#1000`, `#999`, `#998`, `#997`: mevcut Draft destek PR'ları. Otomatik birleştirme yok, son HEAD CI `action_required`; yapılan sentetik test gerçek browser/Windows kabulü değil.
- `#1009`, `#1007`, `#1005`, `#1004`, `#1003`, `#995`, `#989`: Ömer/CORE ekip alanları. Dosyalarına dokunma; güncel aktif PR'ları K14 kontrol eder.
- Upstream issue [#1006](https://github.com/Naveax/Nexowire/issues/1006): P0/CORE/kontrol kapıları açık. [#1001](https://github.com/Naveax/Nexowire/issues/1001), [#974](https://github.com/Naveax/Nexowire/issues/974) fiziksel kabul bekler; burada yalnız takip.

## K01 — Bağlantı akışı UI
- ROL/ALAN: web/connect.html, web/connect.js; test/delegated/k01/**
- AKTİF: **T-001** — Bağlanma ekranındaki kullanıcı durumlarını haritala ve tekrarlanabilir statik durum testi ekle [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-002 — Bağlantı hatasında anlaşılır geri bildirim ve yeniden deneme UI durumlarını düzelt [BEKLIYOR]
  - T-003 — Yükleme sırasında düğme devre dışı / çift tık regresyonunu ekle [BEKLIYOR]
  - T-004 — Bağlanma ekranı odak sırası ve aria-live hatalarını iyileştir [BEKLIYOR]
  - T-005 — Dar ekran bağlantı akışını DOM/CSS testleriyle güvenceye al [BEKLIYOR]
  - T-006 — Bağlantı sayfasında başarısız/başarılı görüntü kanıtı ve e2e bekleyenleri kaydet [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K02 — Genel responsive CSS
- ROL/ALAN: web/styles.css; test/delegated/k02/**
- AKTİF: **T-007** — CSS kırılma noktalarını ve taşma risklerini tarayıp regresyon testi ekle [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-008 — Mobil menü/panel yatay taşma hatalarını düzelt [BEKLIYOR]
  - T-009 — Form odak halkalarını yüksek kontrastta görünür kıl [BEKLIYOR]
  - T-010 — Küçük ekranlarda uzun durum mesajı/kod kesilmesini gider [BEKLIYOR]
  - T-011 — Ortak button disabled/loading stil sözleşmesini tekilleştir [BEKLIYOR]
  - T-012 — CSS selector ölü kod ve tekrarları güvenli biçimde sadeleştir [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K03 — Ana panel sunumu
- ROL/ALAN: web/index.html, web/app.js (yalnız UI); test/delegated/k03/**
- AKTİF: **T-013** — Ana panelin görünür durum ve boş liste öğelerini statik testle doğrula [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-014 — Cihaz yok/çevrimdışı/hata hâlleri için dürüst durum metinleri düzelt [BEKLIYOR]
  - T-015 — Listeleme yüklenirken ekran okuyucu durumunu iyileştir [BEKLIYOR]
  - T-016 — Panelde klavye odak ilerleme ve semantik etiketleri düzelt [BEKLIYOR]
  - T-017 — Uzun cihaz adı ve hata mesajı için görünüm regresyonu ekle [BEKLIYOR]
  - T-018 — Ana panel arayüz davranışını işlevsel statik smoke ile koru [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K04 — Yönetim ekranı sunumu
- ROL/ALAN: web/admin.html, web/admin.js (yalnız görsel/erişilebilirlik); test/delegated/k04/**
- AKTİF: **T-019** — Yönetim ekranının semantik etiket ve tablo başlıklarını denetle [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-020 — Statik boş/hata durumuna yönelik DOM testleri ekle [BEKLIYOR]
  - T-021 — Uzun kayıt ve dar viewport gösterimini iyileştir [BEKLIYOR]
  - T-022 — Yönetim ekranında canlı durum bildirimi erişilebilirliğini artır [BEKLIYOR]
  - T-023 — Görsel unsurların auth/izin değişmediğini negatif testle teyit et [BEKLIYOR]
  - T-024 — Arayüz durumlarını belgeleyip gerçek yönetici hesabı gerektirenleri ayır [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K05 — Erişilebilirlik bağımsız QA
- ROL/ALAN: test/delegated/k05/**; scripts/delegated/k05/**; docs/delegated/qa-accessibility-k05/**
- AKTİF: **T-025** — Web ekranlarında otomatik label-for ve accessible name taraması yaz [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-026 — Klavye ile erişilemeyen etkileşimler için regresyon kontrolü ekle [BEKLIYOR]
  - T-027 — aria-live ve durum mesajı semantik denetimi ekle [BEKLIYOR]
  - T-028 — Hata metni/id eşleşmelerini statik doğrulama aracı yaz [BEKLIYOR]
  - T-029 — Dokunmatik hedef ve viewport kontrollerini test listesine al [BEKLIYOR]
  - T-030 — Erişilebilirlik test matrisi ve gerçek tarayıcı kanıtı boşluklarını yayımla [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K06 — Windows kurulum belgeleri
- ROL/ALAN: docs/INSTALL_WINDOWS.md, docs/CHATGPT_INSTALL_PROMPT.md; test/delegated/k06/**
- AKTİF: **T-031** — Kurulum README bağlantılarını ve adımlarını güncel gerçekle karşılaştır [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-032 — ChatGPT MCP URL ile kontrol paneli URL karışıklığını açıklığa kavuştur [BEKLIYOR]
  - T-033 — Bağla butonu başarısızlığında güvenli kurtarma adımı ekle [BEKLIYOR]
  - T-034 — Windows indirme adı/uzantısı hata rehberini netleştir [BEKLIYOR]
  - T-035 — Kullanıcıdan secret istemeyen kurulum kontrol listesi oluştur [BEKLIYOR]
  - T-036 — Doküman iç linklerini ve ankrajları statik testle doğrula [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K07 — Self-host belgeleri
- ROL/ALAN: docs/SELF_HOST.md, docs/DEPLOYMENT_ONBOARDING.md; test/delegated/k07/**
- AKTİF: **T-037** — Self-host ön koşullarını varsayımsız belgele ve bağlantıları denetle [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-038 — Kurulum ve normal kullanıcı yolunu açıkça ayır [BEKLIYOR]
  - T-039 — Hata ayıklama adımlarını salt-okunur komutlarla güçlendir [BEKLIYOR]
  - T-040 — Örnek değişkenlerde sır sızıntısı riskine karşı doküman testi ekle [BEKLIYOR]
  - T-041 — Platform farklarını (Windows/Linux) doğrulanabilir biçimde yaz [BEKLIYOR]
  - T-042 — Self-host belgeleri için offline link ve komut smoke kontrolleri ekle [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K08 — Mimari ve MCP dokümanları
- ROL/ALAN: docs/ARCHITECTURE.md, docs/MCP_SURFACE.md; test/delegated/k08/**
- AKTİF: **T-043** — MCP yüzeyi adlarını gerçek read-only sözleşmeyle eşleştir [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-044 — Mimari şemadaki bileşen bağlantılarında kaynak tutarlılığı kontrol et [BEKLIYOR]
  - T-045 — Agent/Hub/ChatGPT akışına yeni başlayan için kısa açıklama ekle [BEKLIYOR]
  - T-046 — Belgede güvenlik yetkisi varmış izlenimi veren ifadeleri düzelt [BEKLIYOR]
  - T-047 — Dökümana örnek hata/UNKNOWN terimleri sözlüğü ekle [BEKLIYOR]
  - T-048 — Belge bağlantı/başlık doğrulama testi ekle [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K09 — Ürün yol haritası
- ROL/ALAN: ROADMAP.md, docs/SCALE_V2_ROADMAP.md; test/delegated/k09/**
- AKTİF: **T-049** — Yol haritasında plan/uygulandı/kanıt yok ayrımını netleştir [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-050 — Aktif PR'ları ürün özellikleriyle çakışmasız eşleştir [BEKLIYOR]
  - T-051 — Özelliklerin kullanıcıya dönük kabul tanımlarını somutlaştır [BEKLIYOR]
  - T-052 — Hedef sürüm iddialarını yayımlanmış sürümden ayır [BEKLIYOR]
  - T-053 — Metrik ve UX önceliği için güncel bağımlılık tablosu ekle [BEKLIYOR]
  - T-054 — Yol haritasına kanıtsız tamamlandı ifadesi regresyon taraması koy [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K10 — Tarayıcı görünüm QA
- ROL/ALAN: web/README.md; scripts/delegated/k10/**; test/delegated/k10/**
- AKTİF: **T-055** — Statik web sayfaları için offline smoke çalıştırıcısı yaz [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-056 — 375px/768px/desktop görünüm senaryoları üret [BEKLIYOR]
  - T-057 — Odak ve görsel taşma test kanıt formatını tasarla [BEKLIYOR]
  - T-058 — Connect/main/admin farklı durum fixture'larını tanımla [BEKLIYOR]
  - T-059 — Tarayıcı varsa ekran görüntüsünü doğrulayan kontrollü runner ekle [BEKLIYOR]
  - T-060 — Tarayıcı yokken PASS ilan etmeyen CI rapor sözleşmesini oluştur [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K11 — S5 offline maliyet raporları
- ROL/ALAN: scripts/report-s5-cost-matrix.ts; src/ops/scale-s5-cost-envelope.ts (yalnız offline model); test/delegated/k11/**
- AKTİF: **T-061** — Maliyet raporu boş/fiyat yok girişlerinde UNKNOWN üretsin: test ekle [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-062 — NaN/Infinity/negatif maliyet için fail-closed rapor testi yaz [BEKLIYOR]
  - T-063 — Karışık para birimi/birim girdi kontrolünü güçlendir [BEKLIYOR]
  - T-064 — CSV kaçışları ve başlık kararlılığını regresyonla doğrula [BEKLIYOR]
  - T-065 — Kullanıcı başına ve toplam maliyet raporu formülünü test et [BEKLIYOR]
  - T-066 — Gerçek provider faturası olmayan sonuçları simülasyon diye etiketle [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K12 — S5 loopback performans testleri
- ROL/ALAN: scripts/bench-s5-loopback-ws-capacity.ts, scripts/bench-s5-loopback-reconnect-storm.ts; test/delegated/k12/**
- AKTİF: **T-067** — Loopback WS kapasite benchmark'ının ölçüm/kayıt formatını doğrula [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-068 — Reconnect storm benchmark'ın sınırlı ve iptal edilebilir çalışmasını test et [BEKLIYOR]
  - T-069 — Soğuk/tek örnek percentile hesaplamasını negatif testle doğrula [BEKLIYOR]
  - T-070 — Sıfır/negatif süre ve bozuk örnekleri reddeden test ekle [BEKLIYOR]
  - T-071 — Benchmark sonucu JSON/CSV deterministikliği için smoke ekle [BEKLIYOR]
  - T-072 — Gerçek ağ/sağlayıcı kabulüyle sentetik kapasiteyi açıkça ayır [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K13 — Fork CI ve test altyapısı
- ROL/ALAN: .github/workflows/delegated-noncore.yml (yeni); scripts/delegated/k13/**; test/delegated/k13/**
- AKTİF: **T-073** — Salt-okunur, secretsiz non-core PR CI workflow'u oluştur [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-074 — Node 22/24 typecheck/build/test ayrımını güvenli kur [BEKLIYOR]
  - T-075 — HTML/DOM statik testlerini fork'ta workflow'a bağla [BEKLIYOR]
  - T-076 — Windows-latest sentetik UI smoke matrisi oluştur [BEKLIYOR]
  - T-077 — CI job/run/HEAD kanıtlarını otomatik özetleyen script ekle [BEKLIYOR]
  - T-078 — Fork CI yetki ve action_required engeli için negatif doğrulama ekle [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K14 — Fork eşitleme ve PR entegrasyonu
- ROL/ALAN: scripts/delegated/k14/**; docs/delegated/integration-k14/** (başka kaynak dosya yok)
- AKTİF: **T-079** — Güncel upstream/fork HEAD farkı için read-only rapor üret [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-080 — Açık non-core PR sahiplik ve dosya çakışmalarını tarayan script yaz [BEKLIYOR]
  - T-081 — Destek PR #997-#1000 için merge öncesi dosya-kapsam tablosu hazırla [BEKLIYOR]
  - T-082 — GitHub CI exact SHA ve jobs boşluklarını raporla [BEKLIYOR]
  - T-083 — Güncel main'e göre non-core PR rebase risklerini salt-okunur ölç [BEKLIYOR]
  - T-084 — Yeşil non-core PR'lar için kanıtlı merge/sıra önerisi çıkar [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K15 — Cihaz seçimi kullanıcı deneyimi
- ROL/ALAN: test/delegated/k15/**; docs/delegated/device-ux-k15/** (routing/auth koda dokunma)
- AKTİF: **T-085** — Cihaz listeleme ve yok durumları için sözleşme envanteri çıkar [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-086 — Yanlış cihaz seçimini önleyen UI etiket testlerini yaz [BEKLIYOR]
  - T-087 — Çevrimdışı cihazın çevrimiçi görünmesini reddeden test oluştur [BEKLIYOR]
  - T-088 — Birden çok cihaz için açıklayıcı seçim metnini tasarla [BEKLIYOR]
  - T-089 — Uzun/Unicode cihaz adlarının ekran gösterimini test et [BEKLIYOR]
  - T-090 — Yetki değiştirmeyen cihaz seçim UX önerisi ve kanıt hazırla [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K16 — Ortam teşhis çıktıları
- ROL/ALAN: src/diagnostics/environment-doctor.ts, scripts/run-environment-doctor.ts (salt-okunur); test/delegated/k16/**
- AKTİF: **T-091** — Doctor mevcut rapor biçimlerini ve çıkış kodlarını sabitleyen test ekle [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-092 — Hata durumunda gizli bilgi maskesini test et [BEKLIYOR]
  - T-093 — Eksik isteğe bağlı araçta yanlış sağlıklı durumu engelle [BEKLIYOR]
  - T-094 — Windows/Linux farklılıklarını gerçek dışı PASS üretmeden sınıflandır [BEKLIYOR]
  - T-095 — JSON çıktı deterministikliği ve kaçış testini ekle [BEKLIYOR]
  - T-096 — Teşhis komutlarının yan etkisiz olmasını doğrulayan negatif test yaz [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K17 — Beceri kayıt/meta kalite
- ROL/ALAN: src/skills/manifest.ts, src/skills/registry.ts (yetki genişletme yasak); test/delegated/k17/**
- AKTİF: **T-097** — Beceri manifesti yol/başlık tutarlılığını test et [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-098 — Bozuk veya yinelenen beceri adı için test ekle [BEKLIYOR]
  - T-099 — Registry açıklamaları/örnek alanları için şema kalite raporu oluştur [BEKLIYOR]
  - T-100 — Yetkisiz yürütme önerisi içeren belge kalıplarını negatif testle işaretle [BEKLIYOR]
  - T-101 — Mevcut skill kataloğu için statik link doğrulama aracı yap [BEKLIYOR]
  - T-102 — Registry değişikliği gerekiyorsa güvenlik sınırını koruyarak yalnız meta düzelt [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K18 — Taşıma ve kapasite metrikleri
- ROL/ALAN: src/ops/scale-transport-metrics.ts, scripts/report-s5-measured-scenarios.ts (offline); test/delegated/k18/**
- AKTİF: **T-103** — Taşıma metriği boş ve tek örnek rapor testleri ekle [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-104 — Düşen/eksik sayaçlar için UNKNOWN sınıflandırması yap [BEKLIYOR]
  - T-105 — Çakışan birim ve sayaç adlarını doğrulayan parser testi ekle [BEKLIYOR]
  - T-106 — Rapor çıkışının stabil sırası/formatını regresyonla sabitle [BEKLIYOR]
  - T-107 — Percentile örnek sınırlarının testini ekle [BEKLIYOR]
  - T-108 — Ölçüm yokken kapasite tahmini kesinleştirmeyen rapor sözleşmesi yaz [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K19 — Dosya aktarımı UX/QA
- ROL/ALAN: test/delegated/k19/**; docs/delegated/file-ux-k19/** (artifact/WAL/authorization koda dokunma)
- AKTİF: **T-109** — Dosya transferi kullanıcı durumlarının sözleşme envanterini çıkar [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-110 — Büyük dosya ilerleme metninin sahte tamamlandı vermediğini test et [BEKLIYOR]
  - T-111 — Kesilen transferin kullanıcıya UNKNOWN görünmesi için test tasarla [BEKLIYOR]
  - T-112 — Aynı isimli dosyada çakışma arayüzünü incele [BEKLIYOR]
  - T-113 — Tekrar denemede veri kaybını gizlemeyen kabul matrisi oluştur [BEKLIYOR]
  - T-114 — Offline testlerin gerçek iki cihaz kabulü olmadığını kanıt sayfasında ayır [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## K20 — Test/issue bakım ve kalite
- ROL/ALAN: scripts/delegated/k20/**; test/delegated/k20/**; docs/delegated/maintenance-k20/**
- AKTİF: **T-115** — Açık issue'lardan non-core iş adaylarını tekrarsız sınıflandır [BEKLIYOR]
- KUYRUK (sırayla; en az 5):
  - T-116 — Repo içi kırık doküman bağlantıları için offline test aracı ekle [BEKLIYOR]
  - T-117 — Birim test dosyası adlarıyla sahiplik/çakışma envanteri üret [BEKLIYOR]
  - T-118 — Typecheck/build/test komutlarının başarısızlık ayrımını kontrol et [BEKLIYOR]
  - T-119 — PR incelemesi için küçük kanıt özeti şablonunu otomatik üret [BEKLIYOR]
  - T-120 — Tamamlanan non-core işlerin kullanım senaryosu regresyon listesini tut [BEKLIYOR]
- BİTTİ TANIMI (bu 6 işin her biri): yalnız sahip olunan dosyada gerçek değişiklik veya gerekçeli 'değişiklik gerekmiyor'; bağlantılı commit/PR, tekrarlanabilir test çıktısı, yanıltıcı PASS olmaması. Bağımlılık: önceki görevde eklenen fixture/araç varsa onu kullan; başka şerit/CORE bağımlıysa yeni işe geç.

## HAVUZ — henüz sahipsiz
Yalnız yukarıdaki görevler tamamlanmışsa ve açık bağımlılık yoksa sahiplen. `kxx` son eki üstlenen KNN ile değişir; önce kendi durumuna `ÜSTLENDİM: T-xxx` yaz, sonra kodla. Başka KNN ile dosya çakışırsa dur; yeni klasör kullan.
- T-121 — Yeni başlayanlar için adım adım cihaz-bağlantı hata kılavuzu · yalnız yeni docs/delegated/newcomer-kxx/** · [SAHİPSİZ]
- T-122 — Windows ve Linux geliştirici komutu doğrulama matrisi · yalnız yeni test/delegated/platform-kxx/** · [SAHİPSİZ]
- T-123 — MCP hata mesajları için statik kullanıcı dili QA · yalnız yeni test/delegated/mcp-ux-kxx/** · [SAHİPSİZ]
- T-124 — Dokümanlarda eskimiş sürüm referansları raporu · yalnız yeni scripts/delegated/versions-kxx/** · [SAHİPSİZ]
- T-125 — HTML lang, viewport, title ve erişilebilir meta kontrolü · yalnız yeni test/delegated/html-meta-kxx/** · [SAHİPSİZ]
- T-126 — Çevrimdışı örnek ekran durumları snapshot seti · yalnız yeni test/delegated/ui-snapshots-kxx/** · [SAHİPSİZ]
- T-127 — Sayfa içi yardım bağlantılarını takip eden statik test · yalnız yeni scripts/delegated/help-links-kxx/** · [SAHİPSİZ]
- T-128 — Eski CI action_required run'ları salt okunur takip aracı · yalnız yeni scripts/delegated/ci-watch-kxx/** · [SAHİPSİZ]
- T-129 — PR etiketleri ve açıklamalarında güvenlik kapsamı tespiti raporu · yalnız yeni docs/delegated/pr-triage-kxx/** · [SAHİPSİZ]
- T-130 — Yanlışlıkla sır içeren test fixture'larını statik tarama · yalnız yeni test/delegated/fixture-audit-kxx/** · [SAHİPSİZ]
- T-131 — Örnek CSV çıktısı için locale/birim hata testi · yalnız yeni test/delegated/csv-units-kxx/** · [SAHİPSİZ]
- T-132 — Aynı sorunun farklı PR'larda tekrarı raporlayıcı · yalnız yeni scripts/delegated/pr-overlap-kxx/** · [SAHİPSİZ]
- T-133 — Bağlantı işlemi kullanıcıya özel veri sızdırmadan gösterilir mi: statik QA · yalnız yeni test/delegated/status-privacy-kxx/** · [SAHİPSİZ]
- T-134 — Tarayıcı screenshot kanıtı ile sentetik PASS ayrımı şablonu · yalnız yeni docs/delegated/browser-evidence-kxx/** · [SAHİPSİZ]
- T-135 — Doküman code fence dil ve komut biçimi tutarlılık testi · yalnız yeni test/delegated/docs-fences-kxx/** · [SAHİPSİZ]
- T-136 — Test hata mesajlarında fixture path normalizasyonu · yalnız yeni test/delegated/qa-path-kxx/** · [SAHİPSİZ]
- T-137 — README link adları ve hedefleri doğruluk raporu · yalnız yeni scripts/delegated/readme-links-kxx/** · [SAHİPSİZ]
- T-138 — Kullanıcı tarafı hata durumlarında offline smoke fixtures · yalnız yeni test/delegated/error-fixtures-kxx/** · [SAHİPSİZ]
- T-139 — Yalnız test için tutarlı örnek telemetri veri seti · yalnız yeni test/delegated/telemetry-fixtures-kxx/** · [SAHİPSİZ]
- T-140 — Kendi çalışma dalının diff/CI kabul özetini çıkaran araç · yalnız yeni scripts/delegated/pr-summary-kxx/** · [SAHİPSİZ]

## PROJEYE GİDECEKLER
- Eski destek PR'ları: [#1000](https://github.com/Naveax/Nexowire/pull/1000), [#998](https://github.com/Naveax/Nexowire/pull/998), [#997](https://github.com/Naveax/Nexowire/pull/997), [#999](https://github.com/Naveax/Nexowire/pull/999) — Draft ve kabul edilmemiş, K14 inceleyecek; CI job kanıtı olmadan merge yok.
- Yeni T-001...T-140 işleri: ilk doğrulanmış ve çakışmasız kodla KNN kendi fork dalından Naveax/main'e profesyonel PR açar; PR numarası henüz YOK. Kritik alan değişirse PR açmadan ŞEF'e bildirilir.

## ONUR'UN LİSTESİ
1. Ömer'den `Naveax/Nexowire` için **collaborator / Write** iste; henüz `push:false`. Discord metni: `Ömer, Nexowire'da kritik alanlara girmeden testleri geçen UI, doküman ve non-core düzeltmeleri kendim birleştirebilmem için SinsiVinci hesabına Write collaborator yetkisi verebilir misin? CORE, ödeme, auth ve release alanlarına dokunmayacağım. Yetki olmazsa fork üzerinden PR açarak devam edeceğim.`
2. Her K01–K20 sekmesinin en başına numarasını ekleyip ortak KÖLE MESAJI'nı yapıştır; cevap taşımana gerek yok. Asıl raporlar `ekip/durum/KNN.md`.
3. GitHub Actions'ta fork PR'larının bekleyen workflow onayını yalnız diff ve izinleri kontrol ettikten sonra projede yetkili kişinin yapabileceğini bil. Onur'da upstream yetkisi yok; CI sonucunu yeşil varsayma.

## Süreç notları
- ŞEF yalnız PROTOKOL/PANO/SEF/ARSIV yazar, kuruluş dışında KNN raporlarını değiştirmez.
- Pano sürümü bir ŞEF DEVAM'da artar; köleler raporlarında okudukları sürümü kaydeder. Pano görev devri tek sahiplik ilkesine bağlıdır.
