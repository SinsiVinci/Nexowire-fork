# NEXOWIRE EKİP PANOSU — P002
Tarih: 2026-11-01 (Europe/Istanbul) | Son okunan `ekip` HEAD: `d85cc5b71296d0a7d18de8bbd80fc76c50970fe3` | Upstream ve fork `main`: `93b6df33ef58610dcfdf3584bfe774e5afa7df4d`.

## Hedef / ilerleme / süre
- Hedef: kritik CORE/auth/Broker/WAL/güvenlik/ödeme/release dışındaki gerçek kod/test/UI/dokümanı küçük, kanıtlı PR'larla Nexowire'a aktarmak.
- **103/120 atanmış iş** için kod/yerel test teslimi raporlandı (**%85,8 yerel backlog ilerlemesi**); eski 17 iş kısmi/açık/engelli. **10/20** havuz işi de yerel teslim. Bu oran ürünün tamamlanma oranı veya upstream kabulü değildir.
- **#1010–#1032 arasındaki 23 yeni upstream PR'ın tamamı açık Draft ve birleştirilmemiş.** Yeni ekibin upstream `main`e giren kodu: **0 PR**. 4 eski destek Draft #997–#1000 ayrıca açık.
- **Fork CI ilerlemesi:** [PR #1](https://github.com/SinsiVinci/Nexowire-fork/pull/1) exact HEAD `50844fb0...` için [run 41327364795](https://github.com/SinsiVinci/Nexowire-fork/actions/runs/41327364795) 3 gerçek job success (Linux Node 22/24, Windows Node 24). Bu yalnız offline/source check; browser, gerçek Windows cihaz, CORE veya deploy kabulü değildir.
- Kilometre taşları: M0 ekip/20 alan ✓; M1 gerçek fork CI adayı + 23 kod PR ✓ (upstream kabul değil); M2 ilk 3 güvenle birleşmiş non-core PR ☐; M3 sürekli exact-HEAD CI+merge ☐.
- **Kritik yol:** upstream yazma yetkisi yok (`push:false`); upstream fork workflow'ları çoğunlukla `action_required / jobs=[]`. Fork CI'nın başka temiz upstream-tabanlı `kNN` dallarında eksiksiz çalışması ayrıca kanıtlanmalı (K13).
- **ETA:** upstream merge/CI izinleri ve fiziksel tarayıcı kabulü zamanı ölçülmediği için güvenilir kalan süre henüz yok. 2 gün garanti değil.
- **Sessiz sekme:** K16 Adım 0, tek güncellenmeyen kayıt. Onur K16'ya ortak mesajı tekrar gönderebilir.

## Genel çalışma sözleşmesi
- ARSIV'deki BITTI yalnız **yerel kapsam teslimi**; ilgili PR hâlâ Draft. Kod/uyum CI'sı ve fiziki kabul başka aşamadır, sahte PASS yok.
- Her dosyanın tek yazarı, başkasının alanına girme; `ekip` dalına kod yok, sadece KNN kendi durum dosyasını günceller. ŞEF bu PANO/SEF/ARSIV'i yazar.
- Öncelik aktif → kuyruk → sahipsiz havuz; kısmi tarayıcı/CI engelleri varsa diğer bağımsız işe geç. P002 ile doğrudan atanan T-126/127/130/132/133/135/136/137/138/139 artık HAVUZ değildir.
- Görev bitiş kanıtı: exact commit/PR linki, gerçek test sonucu (ve NOT_RUN sınırı), sahibin kaynak kapsamı. CI izin engeline rağmen yeni bağımsız kod/test üretilir.

## SAHİPLER / AKTİF / KUYRUK
### K01 — Bağlantı akışı UI
- ROL/ALAN: web/connect.html, web/connect.js; test/delegated/k01/**
- AKTİF: **T-006** — Bağlantı sayfasında başarısız/başarılı görüntü kanıtı ve e2e bekleyenleri kaydet [KISMEN/ENGEL]
- KUYRUK (5):
  - T-138 — Kullanıcı tarafı hata durumlarında offline smoke fixtures [BEKLIYOR]
  - T-141 — Bağlantı hatası sonrası tek odak/duyuru döngüsü için negatif fixture ekle [BEKLIYOR]
  - T-142 — OAuth iptali ile yeniden denemede yanlış 'bağlandı' görünümünü test et [BEKLIYOR]
  - T-143 — Uzun hata bağlantıları ve ekran daralmasında DOM semantiklerini doğrula [BEKLIYOR]
  - T-144 — Sunucu timeout ile kullanıcı iptali mesajlarını ayıran statik regresyon yaz [BEKLIYOR]
- SON TESLİM: [#1011](https://github.com/Naveax/Nexowire/pull/1011) · 8/8 VM, typecheck/build PASS; browser NOT_RUN
- BAĞIMLILIK/ENGEL: T-006 için gerçek browser/screenshot yok; diğer offline işe geç
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K01 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K01.md). Bağımlıysa başka işe geç.

### K02 — Genel responsive CSS
- ROL/ALAN: web/styles.css; test/delegated/k02/**
- AKTİF: **T-145** — 320/375/768px görünüm kurallarının yatay taşma negatiflerini artır [BEKLIYOR]
- KUYRUK (5):
  - T-146 — Uzun Unicode cihaz adı ve URL için CSS wrap regresyonu yaz [BEKLIYOR]
  - T-147 — Yüksek kontrast/klavye focus-visible CSS kontrolünü kuvvetlendir [BEKLIYOR]
  - T-148 — Zoom %200/%400 altında layout sözleşmesini raporla [BEKLIYOR]
  - T-149 — Hareket azaltma tercihine saygı ve spinner state CSS testi ekle [BEKLIYOR]
  - T-150 — Global CSS tekrarlayan selector temizliği için davranış eşdeğerliği testi yaz [BEKLIYOR]
- SON TESLİM: [#1010](https://github.com/Naveax/Nexowire/pull/1010), [#1012](https://github.com/Naveax/Nexowire/pull/1012) · 11/11 CSS statik PASS; browser NOT_RUN
- BAĞIMLILIK/ENGEL: K03 mobil layout gözlemini takip et
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K02 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K02.md). Bağımlıysa başka işe geç.

### K03 — Ana panel sunumu
- ROL/ALAN: web/index.html, web/app.js (yalnız UI); test/delegated/k03/**
- AKTİF: **T-016** — Panelde klavye odak ilerleme ve semantik etiketleri düzelt [KISMEN/ENGEL]
- KUYRUK (5):
  - T-017 — Uzun cihaz adı ve hata mesajı için görünüm regresyonu ekle [KISMEN/ENGEL]
  - T-133 — Bağlantı işlemi kullanıcıya özel veri sızdırmadan gösterilir mi: statik QA [BEKLIYOR]
  - T-151 — Gecikmiş API yanıtının yeni cihaz durumunu ezmediği VM testi ekle [BEKLIYOR]
  - T-152 — Tekrarlı cihaz kartlarında erişilebilir adların benzersizliğini K15 sözleşmesiyle doğrula [BEKLIYOR]
  - T-153 — 401→yeniden giriş→başarı durumunda eski kullanım sayısının gizli kaldığını test et [BEKLIYOR]
- SON TESLİM: [#1016](https://github.com/Naveax/Nexowire/pull/1016) · 8/8 VM, typecheck/build PASS; tam npm test yarıda ve browser NOT_RUN
- BAĞIMLILIK/ENGEL: T-016/T-017 gerçek viewport ve K02 CSS bağımlı
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K03 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K03.md). Bağımlıysa başka işe geç.

### K04 — Yönetim ekranı sunumu
- ROL/ALAN: web/admin.html, web/admin.js (yalnız görsel/erişilebilirlik); test/delegated/k04/**
- AKTİF: **T-021** — Uzun kayıt ve dar viewport gösterimini iyileştir [KISMEN/ENGEL]
- KUYRUK (5):
  - T-022 — Yönetim ekranında canlı durum bildirimi erişilebilirliğini artır [KISMEN/ENGEL]
  - T-154 — Görünmez admin hata paneli bulgusunu K05 negative testine göre düzelt [BEKLIYOR]
  - T-155 — Yüklenme/hata/yenileme sırasında admin sayaçlarının yanlış başarı üretmemesini test et [BEKLIYOR]
  - T-156 — Dar ekranda admin tablo başlığı ve durum hücresi semantiğini doğrula [BEKLIYOR]
  - T-157 — Şüpheli boş admin verisini yetki başarı sonucu gibi sunmamayı statik test et [BEKLIYOR]
- SON TESLİM: [#1015](https://github.com/Naveax/Nexowire/pull/1015) · 6/6 DOM PASS; 320/375px, NVDA NOT_RUN
- BAĞIMLILIK/ENGEL: T-021/T-022 gerçek screen-reader/mobil yok; K05 hata paneli bulgusu
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K04 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K04.md). Bağımlıysa başka işe geç.

### K05 — Erişilebilirlik bağımsız QA
- ROL/ALAN: test/delegated/k05/**; scripts/delegated/k05/**; docs/delegated/qa-accessibility-k05/**
- AKTİF: **T-136** — Test hata mesajlarında fixture path normalizasyonu [BEKLIYOR]
- KUYRUK (5):
  - T-158 — Tekrarlı role=status/alert bölgeleri için yalancı PASS'i engelleyen negatif ekle [BEKLIYOR]
  - T-159 — Long-label ile input ilişkisinde normalize Unicode testleri üret [BEKLIYOR]
  - T-160 — Disabled kontrol üzerinde erişilebilir isim ve odak testi yaz [BEKLIYOR]
  - T-161 — Dinamik panel yapısında DOM ID tekilliğini offline regresyonla koru [BEKLIYOR]
  - T-162 — K02/K04 bulgularını sahiplik ihlali yapmadan okunabilir QA raporuna bağla [BEKLIYOR]
- SON TESLİM: [#1019](https://github.com/Naveax/Nexowire/pull/1019), [#1027](https://github.com/Naveax/Nexowire/pull/1027) · 14/14+8/8 statik PASS; K04 admin-error bulgusu açık
- BAĞIMLILIK/ENGEL: K04 admin-error ve K02 touch bulguları diğer sahiplerin alanı
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K05 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K05.md). Bağımlıysa başka işe geç.

### K06 — Windows kurulum belgeleri
- ROL/ALAN: docs/INSTALL_WINDOWS.md, docs/CHATGPT_INSTALL_PROMPT.md; test/delegated/k06/**
- AKTİF: **T-137** — README link adları ve hedefleri doğruluk raporu [BEKLIYOR]
- KUYRUK (5):
  - T-163 — Kurulumda GitHub/ChatGPT hesap uyuşmazlığı için kısa hata kılavuzu ekle [BEKLIYOR]
  - T-164 — Kurucu uzantısı ve Windows SmartScreen yardımını güvenlik politikasıyla hizala [BEKLIYOR]
  - T-165 — MCP giriş adresi ile kontrol panelinin ayrımını bir örnekle sabitle [BEKLIYOR]
  - T-166 — Yerel kurulum/Cloudflare canlı kabulün sınırlarını yeni kullanıcıya açıkla [BEKLIYOR]
  - T-167 — Windows 10/11 kurulum belgesindeki bozuk anchor ve komutları test et [BEKLIYOR]
- SON TESLİM: [#1018](https://github.com/Naveax/Nexowire/pull/1018) · 4/4 doküman PASS; Windows/OAuth NOT_RUN
- BAĞIMLILIK/ENGEL: Windows/OAuth cihaz kabulü yok
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K06 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K06.md). Bağımlıysa başka işe geç.

### K07 — Self-host belgeleri
- ROL/ALAN: docs/SELF_HOST.md, docs/DEPLOYMENT_ONBOARDING.md; test/delegated/k07/**
- AKTİF: **T-168** — Self-host örneklerinde localhost/hosted URL karışıklığını belge testine bağla [BEKLIYOR]
- KUYRUK (5):
  - T-169 — Windows/macOS/Linux destek düzeyini gereksiz vaat olmadan matrise dök [BEKLIYOR]
  - T-170 — Bağlantı kesintisi sonrası manuel kurtarma salt-okunur komutlarını doğrula [BEKLIYOR]
  - T-171 — İlk çalıştırma kimlik bilgisi saklama yönergelerinin gizlilik denetimini yap [BEKLIYOR]
  - T-172 — Sistem izinlerini değiştiren komut örneklerini risk etiketiyle ayır [BEKLIYOR]
  - T-173 — Geliştirici ve son kullanıcı yönergeleri arasında tekrarı azaltan link testi yaz [BEKLIYOR]
- SON TESLİM: [#1013](https://github.com/Naveax/Nexowire/pull/1013) · 8/8 komut/docs PASS; gerçek self-host NOT_RUN
- BAĞIMLILIK/ENGEL: Canlı self-host/OS kabulü yok
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K07 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K07.md). Bağımlıysa başka işe geç.

### K08 — Mimari ve MCP dokümanları
- ROL/ALAN: docs/ARCHITECTURE.md, docs/MCP_SURFACE.md; test/delegated/k08/**
- AKTİF: **T-135** — Doküman code fence dil ve komut biçimi tutarlılık testi [BEKLIYOR]
- KUYRUK (5):
  - T-174 — MCP output status terimlerini sözleşme örneğiyle eşleştir [BEKLIYOR]
  - T-175 — İşlem iptali/UNKNOWN ifadesini kullanıcı metninde yanlış başarıdan ayır [BEKLIYOR]
  - T-176 — read-only tool vs mutation tool belgelerinde izin uyarısı doğrula [BEKLIYOR]
  - T-177 — MCP contract JSON ile Markdown yüzey isimlerini statik karşılaştır [BEKLIYOR]
  - T-178 — Mimari link ve code sample'larda eskimiş endpoint sınıflandırması yap [BEKLIYOR]
- SON TESLİM: [#1014](https://github.com/Naveax/Nexowire/pull/1014), [#1021](https://github.com/Naveax/Nexowire/pull/1021) · 3/3+5/5 sözleşme PASS; MCP NOT_RUN
- BAĞIMLILIK/ENGEL: Gerçek MCP yok, upstream CI 0-job
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K08 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K08.md). Bağımlıysa başka işe geç.

### K09 — Ürün yol haritası
- ROL/ALAN: ROADMAP.md, docs/SCALE_V2_ROADMAP.md; test/delegated/k09/**
- AKTİF: **T-179** — Güncel upstream PR'larından non-core özellik durumunu kaynakla eşleyen offline rapor yaz [BEKLIYOR]
- KUYRUK (5):
  - T-180 — v1.0.8 yayın kanıtı ile main üzerindeki source-only yenilikleri ayır [BEKLIYOR]
  - T-181 — ROADMAP içindeki 'tamamlandı' iddiaları için PR merge kanıtı denetimi ekle [BEKLIYOR]
  - T-182 — Kullanıcı görünürlüğü/cihaz kurulumu önceliklerini testle izlenir hâle getir [BEKLIYOR]
  - T-183 — Issue #539 non-core alt başlıklarını yinelenmeyen işlere ayır [BEKLIYOR]
  - T-184 — SCALE v2 senaryolarında rakamsal maliyet/kapasite iddialarını evidence gate'e bağla [BEKLIYOR]
- SON TESLİM: [#1017](https://github.com/Naveax/Nexowire/pull/1017), [#1028](https://github.com/Naveax/Nexowire/pull/1028) · 4/4+5/5 belge testi PASS; CI 0-job
- BAĞIMLILIK/ENGEL: Kaynak sürüm iddiaları yalnız statik kanıt
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K09 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K09.md). Bağımlıysa başka işe geç.

### K10 — Tarayıcı görünüm QA
- ROL/ALAN: web/README.md; scripts/delegated/k10/**; test/delegated/k10/**
- AKTİF: **T-059** — Tarayıcı varsa ekran görüntüsünü doğrulayan kontrollü runner ekle [KISMEN/ENGEL]
- KUYRUK (5):
  - T-126 — Çevrimdışı örnek ekran durumları snapshot seti [BEKLIYOR]
  - T-185 — Browser yokken screenshot raporu kesin NOT_RUN döndüren negatif test ekle [BEKLIYOR]
  - T-186 — Fixture tab odak hedeflerinin gerçek browser gerektiren taraflarını JSON'da ayır [BEKLIYOR]
  - T-187 — Farklı viewport sonuçları için bozulmamış PNG boyut kontrolü yaz [BEKLIYOR]
  - T-188 — Statik runner'ın local asset path traversal engelini test et [BEKLIYOR]
- SON TESLİM: [#1020](https://github.com/Naveax/Nexowire/pull/1020) · 10/10+34/34 statik PASS; Playwright NOT_RUN
- BAĞIMLILIK/ENGEL: Playwright yok; screenshot NOT_RUN
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K10 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K10.md). Bağımlıysa başka işe geç.

### K11 — S5 offline maliyet raporları
- ROL/ALAN: scripts/report-s5-cost-matrix.ts; src/ops/scale-s5-cost-envelope.ts (yalnız offline model); test/delegated/k11/**
- AKTİF: **T-189** — Ücretsiz/sıfır fiyat ile eksik fiyatın ayrımını regresyonla sabitle [BEKLIYOR]
- KUYRUK (5):
  - T-190 — USD/TL para birimi karışıklığında yanlış toplam üretmeyen test ekle [BEKLIYOR]
  - T-191 — Birim dönüşümünde KB/MiB ve zaman pencere ölçeklerini sınır test et [BEKLIYOR]
  - T-192 — Eşik aşımında `UNKNOWN`/safeguard kararını offline raporda ayır [BEKLIYOR]
  - T-193 — Negatif/Infinity girdi için CSV rapor başlıklarını koruyan test yaz [BEKLIYOR]
  - T-194 — S5 cost envelope modelinde false confidence cümlelerini kaynak kanıtına bağla [BEKLIYOR]
- SON TESLİM: [#1029](https://github.com/Naveax/Nexowire/pull/1029) · 8/8+3/3 offline, typecheck/build PASS; provider faturası UNKNOWN
- BAĞIMLILIK/ENGEL: Gerçek provider fiyatı ve fatura yok
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K11 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K11.md). Bağımlıysa başka işe geç.

### K12 — S5 loopback performans testleri
- ROL/ALAN: scripts/bench-s5-loopback-ws-capacity.ts, scripts/bench-s5-loopback-reconnect-storm.ts; test/delegated/k12/**
- AKTİF: **T-071** — Benchmark sonucu JSON/CSV deterministikliği için smoke ekle [KISMEN/ENGEL]
- KUYRUK (5):
  - T-195 — JSON latency schema boş/tek örnek deterministikliğini negatif testle artır [BEKLIYOR]
  - T-196 — Benchmark abort sırasında açık websocket sayısının sıfırlanmasını test et [BEKLIYOR]
  - T-197 — Çok küçük zaman aşımında resource cleanup leak regresyonu ekle [BEKLIYOR]
  - T-198 — Aynı loopback workload iki tekrarında çıktının ölçüm türünü sabitle [BEKLIYOR]
  - T-199 — Sentetik koşuldan gerçek provider kapasitesi çıkarımını engelleyen test yaz [BEKLIYOR]
- SON TESLİM: [#1024](https://github.com/Naveax/Nexowire/pull/1024) · 20/20 sentetik PASS; CSV sözleşmesi yok
- BAĞIMLILIK/ENGEL: T-071 CSV yok; JSON smoke tamam, gerçek soak yok
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K12 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K12.md). Bağımlıysa başka işe geç.

### K13 — Fork CI ve test altyapısı
- ROL/ALAN: .github/workflows/delegated-noncore.yml (yeni); scripts/delegated/k13/**; test/delegated/k13/**
- AKTİF: **T-200** — Fork PR testleri head branch'de K13 scriptleri yoksa erken ve açık hata veren tasarım yap [BEKLIYOR]
- KUYRUK (5):
  - T-130 — Yanlışlıkla sır içeren test fixture'larını statik tarama [BEKLIYOR]
  - T-201 — Fork ana dalını upstream'den ayrıştırmadan CI çalıştırma stratejisi/provası oluştur [BEKLIYOR]
  - T-202 — Exact-head CI özetleyicinin 100+ job sayfalama eksiğini negatif test et [BEKLIYOR]
  - T-203 — Fork workflow PR izin matrisi ve pull_request_target yasağını testle pekiştir [BEKLIYOR]
  - T-204 — Runner Node 22/24/Windows sonuçları tek exact SHA'da değilse PASS'i reddet [BEKLIYOR]
- SON TESLİM: [fork PR #1](https://github.com/SinsiVinci/Nexowire-fork/pull/1) · fork PR #1 exact HEAD 3/3 gerçek CI job PASS (Linux 22/24+Windows 24)
- BAĞIMLILIK/ENGEL: Fork PR #1 diğer temiz upstream dallarında çalışır mı kanıtı yok; önce T-200
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K13 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K13.md). Bağımlıysa başka işe geç.

### K14 — Fork eşitleme ve PR entegrasyonu
- ROL/ALAN: scripts/delegated/k14/**; docs/delegated/integration-k14/** (başka kaynak dosya yok)
- AKTİF: **T-132** — Aynı sorunun farklı PR'larda tekrarı raporlayıcı [BEKLIYOR]
- KUYRUK (5):
  - T-205 — Açık yeni non-core PR'lar için aynı-path ve semantik çakışma raporu oluştur [BEKLIYOR]
  - T-206 — #1010–#1032 PR'larının main sonrası merge riskini read-only karşılaştır [BEKLIYOR]
  - T-207 — CI gerçekten 0-job ise merge-ready bayrağını kapatan entegrasyon testi yaz [BEKLIYOR]
  - T-208 — Fork özel CI PR #1 ile upstream main senkron stratejisini karşılaştır [BEKLIYOR]
  - T-209 — T-084 için gözlemlenebilir merge gate otomatik rapor tablosunu güncelle [BEKLIYOR]
- **T-084** — yeşil CI/review kanıtı olmadan **DIŞ ENGEL**; beklemek yerine T-132 ve yeni işleri yap.
- SON TESLİM: [#1022](https://github.com/Naveax/Nexowire/pull/1022) · 14/14 read-only entegrasyon testi PASS, upstream CI 0-job
- BAĞIMLILIK/ENGEL: T-084 upstream exact CI/review olmadan ENGEL
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K14 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K14.md). Bağımlıysa başka işe geç.

### K15 — Cihaz seçimi kullanıcı deneyimi
- ROL/ALAN: test/delegated/k15/**; docs/delegated/device-ux-k15/** (routing/auth koda dokunma)
- AKTİF: **T-086** — Yanlış cihaz seçimini önleyen UI etiket testlerini yaz [KISMEN/ENGEL]
- KUYRUK (5):
  - T-210 — K03 cihaz-adı accessible name düzeltmesini read-only testle yeniden tara [BEKLIYOR]
  - T-211 — İki aynı adlı cihazın kimlik ayrımı için negatif fixture ekle [BEKLIYOR]
  - T-212 — Offline cihaz ekran kartında yanlış 'online' etiketine regresyon yaz [BEKLIYOR]
  - T-213 — Cihaz listesi boş/yükleniyor/hata erişilebilirlik durumlarını test et [BEKLIYOR]
  - T-214 — Cihaz seçim durumunun auth yetkisi yerine geçmediğini raporla [BEKLIYOR]
- SON TESLİM: [#1026](https://github.com/Naveax/Nexowire/pull/1026) · 8 test PASS+1 TODO; K03 UI bağımlı
- BAĞIMLILIK/ENGEL: T-086 accessible name 1 TODO; K03 UI bağımlı
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K15 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K15.md). Bağımlıysa başka işe geç.

### K16 — Ortam teşhis çıktıları
- ROL/ALAN: src/diagnostics/environment-doctor.ts, scripts/run-environment-doctor.ts (salt-okunur); test/delegated/k16/**
- AKTİF: **T-091** — Doctor mevcut rapor biçimlerini ve çıkış kodlarını sabitleyen test ekle [KISMEN/ENGEL]
- KUYRUK (5):
  - T-092 — Hata durumunda gizli bilgi maskesini test et [KISMEN/ENGEL]
  - T-093 — Eksik isteğe bağlı araçta yanlış sağlıklı durumu engelle [KISMEN/ENGEL]
  - T-094 — Windows/Linux farklılıklarını gerçek dışı PASS üretmeden sınıflandır [KISMEN/ENGEL]
  - T-095 — JSON çıktı deterministikliği ve kaçış testini ekle [KISMEN/ENGEL]
  - T-096 — Teşhis komutlarının yan etkisiz olmasını doğrulayan negatif test yaz [KISMEN/ENGEL]
- SON TESLİM: yok · Adım 0; hiçbir değişiklik, NOT_RUN
- BAĞIMLILIK/ENGEL: K16 sessiz, sekme kontrolü gerekli
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K16 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K16.md). Bağımlıysa başka işe geç.

### K17 — Beceri kayıt/meta kalite
- ROL/ALAN: src/skills/manifest.ts, src/skills/registry.ts (yetki genişletme yasak); test/delegated/k17/**
- AKTİF: **T-215** — SKILL manifest frontmatter boş değer ve çift anahtar negatiflerini artır [BEKLIYOR]
- KUYRUK (5):
  - T-216 — Dizin dışı/bozuk referans ve symlink yolu için test üret [BEKLIYOR]
  - T-217 — Katalog isim çakışmasında kayıt sırası deterministikliğini doğrula [BEKLIYOR]
  - T-218 — Skill açıklamalarında platform desteği yoksa bilinmiyor dilini koru [BEKLIYOR]
  - T-219 — Registry meta değişiminin capability yetkisini artırmadığını test et [BEKLIYOR]
  - T-220 — Katalog README üretimine ihtiyaç varsa yalnız statik çıktıyı tasarla [BEKLIYOR]
- SON TESLİM: [#1030](https://github.com/Naveax/Nexowire/pull/1030) · 18 yerel test PASS, typecheck/build PASS
- BAĞIMLILIK/ENGEL: Yetki genişletme yasak, gerçek güvenlik kabulü yok
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K17 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K17.md). Bağımlıysa başka işe geç.

### K18 — Taşıma ve kapasite metrikleri
- ROL/ALAN: src/ops/scale-transport-metrics.ts, scripts/report-s5-measured-scenarios.ts (offline); test/delegated/k18/**
- AKTİF: **T-107** — Percentile örnek sınırlarının testini ekle [KISMEN/ENGEL]
- KUYRUK (5):
  - T-108 — Ölçüm yokken kapasite tahmini kesinleştirmeyen rapor sözleşmesi yaz [KISMEN/ENGEL]
  - T-139 — Yalnız test için tutarlı örnek telemetri veri seti [BEKLIYOR]
  - T-221 — Metrik örnek setinde monoton olmayan sayaç geçişini işaretle [BEKLIYOR]
  - T-222 — Tür/birim karışıklığı raporunda UNKNOWN kalmasını sınır testiyle doğrula [BEKLIYOR]
  - T-223 — S5 CSV/JSON çıkışında NaN/Infinity'nin yanlış sıfıra dönmesini engelle [BEKLIYOR]
- SON TESLİM: [#1023](https://github.com/Naveax/Nexowire/pull/1023) · 11 offline test PASS, typecheck/build PASS; percentile açık
- BAĞIMLILIK/ENGEL: T-107/T-108 ölçüm/percentile açık
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K18 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K18.md). Bağımlıysa başka işe geç.

### K19 — Dosya aktarımı UX/QA
- ROL/ALAN: test/delegated/k19/**; docs/delegated/file-ux-k19/** (artifact/WAL/authorization koda dokunma)
- AKTİF: **T-224** — Dosya aktarımı yarıda kalınca kullanıcı durumunu UNKNOWN tutan test örneği ekle [BEKLIYOR]
- KUYRUK (5):
  - T-225 — Çakışan hedef dosyada overwrite olmadan hata metni sözleşmesini güçlendir [BEKLIYOR]
  - T-226 — Kısmi transfer sonrası retry UI ifadesini tahmin olarak işaretle [BEKLIYOR]
  - T-227 — Uzun/Unicode dosya adı görünümü için offline test tasarla [BEKLIYOR]
  - T-228 — İki-PC gerçek test matrisinde ayrı hesap/izin gerekliliklerini belgele [BEKLIYOR]
  - T-229 — Artifact saklama ve temizleme metinlerini güvenli kabul kriterleriyle eşleştir [BEKLIYOR]
- SON TESLİM: [#1025](https://github.com/Naveax/Nexowire/pull/1025) · 16/16 sentetik PASS; fiziksel iki-PC NOT_RUN
- BAĞIMLILIK/ENGEL: Gerçek MCP/2-PC/Windows NOT_RUN
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K19 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K19.md). Bağımlıysa başka işe geç.

### K20 — Test/issue bakım ve kalite
- ROL/ALAN: scripts/delegated/k20/**; test/delegated/k20/**; docs/delegated/maintenance-k20/**
- AKTİF: **T-127** — Sayfa içi yardım bağlantılarını takip eden statik test [BEKLIYOR]
- KUYRUK (5):
  - T-230 — PR kanıt raporu başlıklarında exact SHA ve CI iş sayısını zorunlu kıl [BEKLIYOR]
  - T-231 — Doküman link audit'inin symlink/anchor negatiflerini genişlet [BEKLIYOR]
  - T-232 — Repo test dosyası keşfinin sessiz glob eksiklerini bildiren araç yaz [BEKLIYOR]
  - T-233 — Kaynak kod yerine yalnız ekip raporu değiştiren boş PR'ları işaretle [BEKLIYOR]
  - T-234 — Offline regresyon kataloğuna hata riski ve kullanıcı senaryosu eşlemesi ekle [BEKLIYOR]
- SON TESLİM: [#1031](https://github.com/Naveax/Nexowire/pull/1031), [#1032](https://github.com/Naveax/Nexowire/pull/1032) · 6 test dosyası PASS; tam npm NOT_RUN
- BAĞIMLILIK/ENGEL: Upstream CI, tam npm ve gerçek cihaz kabulü eksik
- BİTTİ TANIMI: ilgili izinli dosyada tekrar üretilebilir test/gerçek düzeltme, exact SHA ve açık kanıt sınırı; [K20 kayıt](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/durum/K20.md). Bağımlıysa başka işe geç.

## HAVUZ — P002 (sahipsiz 20 iş)
KNN kendi kuyruğu bitince diğer 19 rapordaki ÜSTLENDİM'leri okuyup kendi raporuna yazar; çakışmada küçük KNN sahibi olur. Yalnız yeni `test/delegated/pool-kNN/**` veya `scripts/delegated/pool-kNN/**` alanı kullanılır. Kritik code/secret değişikliği yok.
- T-235 — Şüpheli URL örnekleri için güvenli kullanıcı dili kontrolü [SAHİPSİZ]
- T-236 — CSS yüksek kontrast/zoom negatif fixture [SAHİPSİZ]
- T-237 — Kurulum yardım sayfaları arasında dil tutarlılığı [SAHİPSİZ]
- T-238 — Delegated test runner'da atlanan uzantı negatif testi [SAHİPSİZ]
- T-239 — Gerçek browser kanıtı olmayan ekranların envanteri [SAHİPSİZ]
- T-240 — Ürün özelliği ile PR/merge kanıtı eşlemesi [SAHİPSİZ]
- T-241 — Read-only GitHub pagination/truncated sonuç testi [SAHİPSİZ]
- T-242 — JSON/CSV birim dönüşümü kanonik fixture [SAHİPSİZ]
- T-243 — Windows dokümanlarında riskli yükseltme komutu uyarısı [SAHİPSİZ]
- T-244 — Markdown duplicate heading/anchor regresyonu [SAHİPSİZ]
- T-245 — Sahte gerçek cihaz PASS etiketi taraması [SAHİPSİZ]
- T-246 — Device list error aria-live fixture [SAHİPSİZ]
- T-247 — Connect UI hata dili sözlüğü [SAHİPSİZ]
- T-248 — CI eski SHA/job sonucu regresyonu [SAHİPSİZ]
- T-249 — MCP örnek yanıtında maskeleme testi [SAHİPSİZ]
- T-250 — Tekrarlı iş ve dosya sahipliği otomatik raporu [SAHİPSİZ]
- T-251 — README ve INSTALL_WINDOWS link stale testi [SAHİPSİZ]
- T-252 — Metrik raporlarında sıfır ile UNKNOWN ayrımı [SAHİPSİZ]
- T-253 — Offline UI touch hedefi kayıt formatı [SAHİPSİZ]
- T-254 — Açıklama-only PR ile kod/test PR ayrımı [SAHİPSİZ]

## PROJEYE GİDECEKLER
- **Yeni 23 Draft upstream PR (tamamı unmerged):**
  - K01: [#1011](https://github.com/Naveax/Nexowire/pull/1011)
  - K02: [#1010](https://github.com/Naveax/Nexowire/pull/1010), [#1012](https://github.com/Naveax/Nexowire/pull/1012)
  - K03: [#1016](https://github.com/Naveax/Nexowire/pull/1016)
  - K04: [#1015](https://github.com/Naveax/Nexowire/pull/1015)
  - K05: [#1019](https://github.com/Naveax/Nexowire/pull/1019), [#1027](https://github.com/Naveax/Nexowire/pull/1027)
  - K06: [#1018](https://github.com/Naveax/Nexowire/pull/1018)
  - K07: [#1013](https://github.com/Naveax/Nexowire/pull/1013)
  - K08: [#1014](https://github.com/Naveax/Nexowire/pull/1014), [#1021](https://github.com/Naveax/Nexowire/pull/1021)
  - K09: [#1017](https://github.com/Naveax/Nexowire/pull/1017), [#1028](https://github.com/Naveax/Nexowire/pull/1028)
  - K10: [#1020](https://github.com/Naveax/Nexowire/pull/1020)
  - K11: [#1029](https://github.com/Naveax/Nexowire/pull/1029)
  - K12: [#1024](https://github.com/Naveax/Nexowire/pull/1024)
  - K14: [#1022](https://github.com/Naveax/Nexowire/pull/1022)
  - K15: [#1026](https://github.com/Naveax/Nexowire/pull/1026)
  - K17: [#1030](https://github.com/Naveax/Nexowire/pull/1030)
  - K18: [#1023](https://github.com/Naveax/Nexowire/pull/1023)
  - K19: [#1025](https://github.com/Naveax/Nexowire/pull/1025)
  - K20: [#1031](https://github.com/Naveax/Nexowire/pull/1031), [#1032](https://github.com/Naveax/Nexowire/pull/1032)
- Önceki destek Draft'lar [#997](https://github.com/Naveax/Nexowire/pull/997), [#998](https://github.com/Naveax/Nexowire/pull/998), [#999](https://github.com/Naveax/Nexowire/pull/999), [#1000](https://github.com/Naveax/Nexowire/pull/1000): CI `action_required`, ilgili kaynakların kabul sınırları açık.
- Fork-only CI [PR #1](https://github.com/SinsiVinci/Nexowire-fork/pull/1): 3 job yeşil ama Draft; temiz kod dallarında test runner eksikliği ve fork `main`in upstream fast-forward senkronuna etkisi çözülmeden birleştirme.
- Ömer'in kritik aktif PR'ları #1003/#1009/#1007/#1005/#995/#989; korumalı kaynak ve canlı cihazlara dokunma.

## ONUR'UN LİSTESİ
1. K16 sekmesine ortak KÖLE MESAJI'nı gönder; diğer 19 sekme P002'yi okuyarak otomatik devam eder.
2. Ömer'e bir kez Discord'dan: `Ömer, SinsiVinci hesabına Naveax/Nexowire için Write collaborator yetkisi verebilir misin? Kritik CORE/auth/ödeme/release alanlarına girmeden, testleri geçen non-core PR'ları CI yeşilken birleştirmek istiyorum. Yetki yoksa fork PR'larından çalışmaya devam edeceğim.`
3. Upstream fork PR Actions onayını yalnız repo yetkilisi diff/izinleri inceledikten sonra yapabilir; onay CI PASS değildir. Onur'un yetkisi henüz yok; işin diğer kısmı fork CI'da devam.
