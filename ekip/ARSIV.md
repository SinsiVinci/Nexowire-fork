# ARŞİV — A002 | 2026-11-01

## Kanıt ve kabul sınırı
- Bu arşivdeki `BITTI-YEREL` yalnız ilgili görevde raporlanan kod, doküman veya sentetik test teslimidir. İşlerin hiçbirinin upstream merge/production kabulü yoktur.
- 103/120 önceden atanmış görev ve 10/20 önceki HAVUZ görevi (toplam **113 ID**) arşivlendi. Bunların tamamını ŞEF bağımsız olarak tekrar çalıştırmadı; kayıtlardaki exact commit/PR ve yerel test beyanlarını kaynağa bağladı.
- Upstream yeni PR'lar #1010–#1032: son kontrol anında `open`, `draft:true`, `merged:false`. `action_required`, sıfır job veya `NOT_RUN` asla CI PASS değildir.
- K13 fork PR #1 exact HEAD `50844fb0...`: [run 41327364795](https://github.com/SinsiVinci/Nexowire-fork/actions/runs/41327364795) üç gerçek job (Linux22, Linux24, Windows24) success. Fiziksel Windows/browse/MCP/CORE anlamına gelmez.
- K01 T-006; K03 T-016/017; K04 T-021/022; K10 T-059; K12 T-071; K14 T-084; K15 T-086; K16 T-091..096; K18 T-107/108 **arşivlenmedi**.

## Yerel kapsamı teslim edilen görevler
### K01 — Bağlantı akışı UI | 5 teslim
- Yerel test/kanıt sınırı: 8/8 VM, typecheck/build PASS; browser NOT_RUN
- PR'lar: [#1011](https://github.com/Naveax/Nexowire/pull/1011) (HEAD `ccbaaff77587`). Hepsi merge edilmedi.
- **T-001** — Bağlanma ekranındaki kullanıcı durumlarını haritala ve tekrarlanabilir statik durum testi ekle · BITTI-YEREL · [#1011](https://github.com/Naveax/Nexowire/pull/1011) · CI/gerçek kabul ayrı.
- **T-002** — Bağlantı hatasında anlaşılır geri bildirim ve yeniden deneme UI durumlarını düzelt · BITTI-YEREL · [#1011](https://github.com/Naveax/Nexowire/pull/1011) · CI/gerçek kabul ayrı.
- **T-003** — Yükleme sırasında düğme devre dışı / çift tık regresyonunu ekle · BITTI-YEREL · [#1011](https://github.com/Naveax/Nexowire/pull/1011) · CI/gerçek kabul ayrı.
- **T-004** — Bağlanma ekranı odak sırası ve aria-live hatalarını iyileştir · BITTI-YEREL · [#1011](https://github.com/Naveax/Nexowire/pull/1011) · CI/gerçek kabul ayrı.
- **T-005** — Dar ekran bağlantı akışını DOM/CSS testleriyle güvenceye al · BITTI-YEREL · [#1011](https://github.com/Naveax/Nexowire/pull/1011) · CI/gerçek kabul ayrı.

### K02 — Genel responsive CSS | 7 teslim
- Yerel test/kanıt sınırı: 11/11 CSS statik PASS; browser NOT_RUN
- PR'lar: [#1010](https://github.com/Naveax/Nexowire/pull/1010) (HEAD `8a02cbe79436`), [#1012](https://github.com/Naveax/Nexowire/pull/1012) (HEAD `1121a9660645`). Hepsi merge edilmedi.
- **T-007** — CSS kırılma noktalarını ve taşma risklerini tarayıp regresyon testi ekle · BITTI-YEREL · [#1010](https://github.com/Naveax/Nexowire/pull/1010) · CI/gerçek kabul ayrı.
- **T-008** — Mobil menü/panel yatay taşma hatalarını düzelt · BITTI-YEREL · [#1010](https://github.com/Naveax/Nexowire/pull/1010) · CI/gerçek kabul ayrı.
- **T-009** — Form odak halkalarını yüksek kontrastta görünür kıl · BITTI-YEREL · [#1010](https://github.com/Naveax/Nexowire/pull/1010) · CI/gerçek kabul ayrı.
- **T-010** — Küçük ekranlarda uzun durum mesajı/kod kesilmesini gider · BITTI-YEREL · [#1010](https://github.com/Naveax/Nexowire/pull/1010) · CI/gerçek kabul ayrı.
- **T-011** — Ortak button disabled/loading stil sözleşmesini tekilleştir · BITTI-YEREL · [#1010](https://github.com/Naveax/Nexowire/pull/1010) · CI/gerçek kabul ayrı.
- **T-012** — CSS selector ölü kod ve tekrarları güvenli biçimde sadeleştir · BITTI-YEREL · [#1010](https://github.com/Naveax/Nexowire/pull/1010) · CI/gerçek kabul ayrı.
- **T-121** — Yeni başlayanlar için adım adım cihaz-bağlantı hata kılavuzu · BITTI-YEREL · [#1012](https://github.com/Naveax/Nexowire/pull/1012) · CI/gerçek kabul ayrı.

### K03 — Ana panel sunumu | 4 teslim
- Yerel test/kanıt sınırı: 8/8 VM, typecheck/build PASS; tam npm test yarıda ve browser NOT_RUN
- PR'lar: [#1016](https://github.com/Naveax/Nexowire/pull/1016) (HEAD `adc9987a6e09`). Hepsi merge edilmedi.
- **T-013** — Ana panelin görünür durum ve boş liste öğelerini statik testle doğrula · BITTI-YEREL · [#1016](https://github.com/Naveax/Nexowire/pull/1016) · CI/gerçek kabul ayrı.
- **T-014** — Cihaz yok/çevrimdışı/hata hâlleri için dürüst durum metinleri düzelt · BITTI-YEREL · [#1016](https://github.com/Naveax/Nexowire/pull/1016) · CI/gerçek kabul ayrı.
- **T-015** — Listeleme yüklenirken ekran okuyucu durumunu iyileştir · BITTI-YEREL · [#1016](https://github.com/Naveax/Nexowire/pull/1016) · CI/gerçek kabul ayrı.
- **T-018** — Ana panel arayüz davranışını işlevsel statik smoke ile koru · BITTI-YEREL · [#1016](https://github.com/Naveax/Nexowire/pull/1016) · CI/gerçek kabul ayrı.

### K04 — Yönetim ekranı sunumu | 4 teslim
- Yerel test/kanıt sınırı: 6/6 DOM PASS; 320/375px, NVDA NOT_RUN
- PR'lar: [#1015](https://github.com/Naveax/Nexowire/pull/1015) (HEAD `72659bf8d17d`). Hepsi merge edilmedi.
- **T-019** — Yönetim ekranının semantik etiket ve tablo başlıklarını denetle · BITTI-YEREL · [#1015](https://github.com/Naveax/Nexowire/pull/1015) · CI/gerçek kabul ayrı.
- **T-020** — Statik boş/hata durumuna yönelik DOM testleri ekle · BITTI-YEREL · [#1015](https://github.com/Naveax/Nexowire/pull/1015) · CI/gerçek kabul ayrı.
- **T-023** — Görsel unsurların auth/izin değişmediğini negatif testle teyit et · BITTI-YEREL · [#1015](https://github.com/Naveax/Nexowire/pull/1015) · CI/gerçek kabul ayrı.
- **T-024** — Arayüz durumlarını belgeleyip gerçek yönetici hesabı gerektirenleri ayır · BITTI-YEREL · [#1015](https://github.com/Naveax/Nexowire/pull/1015) · CI/gerçek kabul ayrı.

### K05 — Erişilebilirlik bağımsız QA | 7 teslim
- Yerel test/kanıt sınırı: 14/14+8/8 statik PASS; K04 admin-error bulgusu açık
- PR'lar: [#1019](https://github.com/Naveax/Nexowire/pull/1019) (HEAD `5843b9c6fbfe`), [#1027](https://github.com/Naveax/Nexowire/pull/1027) (HEAD `014e2f17c300`). Hepsi merge edilmedi.
- **T-025** — Web ekranlarında otomatik label-for ve accessible name taraması yaz · BITTI-YEREL · [#1019](https://github.com/Naveax/Nexowire/pull/1019) · CI/gerçek kabul ayrı.
- **T-026** — Klavye ile erişilemeyen etkileşimler için regresyon kontrolü ekle · BITTI-YEREL · [#1019](https://github.com/Naveax/Nexowire/pull/1019) · CI/gerçek kabul ayrı.
- **T-027** — aria-live ve durum mesajı semantik denetimi ekle · BITTI-YEREL · [#1019](https://github.com/Naveax/Nexowire/pull/1019) · CI/gerçek kabul ayrı.
- **T-028** — Hata metni/id eşleşmelerini statik doğrulama aracı yaz · BITTI-YEREL · [#1019](https://github.com/Naveax/Nexowire/pull/1019) · CI/gerçek kabul ayrı.
- **T-029** — Dokunmatik hedef ve viewport kontrollerini test listesine al · BITTI-YEREL · [#1019](https://github.com/Naveax/Nexowire/pull/1019) · CI/gerçek kabul ayrı.
- **T-030** — Erişilebilirlik test matrisi ve gerçek tarayıcı kanıtı boşluklarını yayımla · BITTI-YEREL · [#1019](https://github.com/Naveax/Nexowire/pull/1019) · CI/gerçek kabul ayrı.
- **T-125** — HTML lang, viewport, title ve erişilebilir meta kontrolü · BITTI-YEREL · [#1027](https://github.com/Naveax/Nexowire/pull/1027) · CI/gerçek kabul ayrı.

### K06 — Windows kurulum belgeleri | 6 teslim
- Yerel test/kanıt sınırı: 4/4 doküman PASS; Windows/OAuth NOT_RUN
- PR'lar: [#1018](https://github.com/Naveax/Nexowire/pull/1018) (HEAD `53667dfdcee6`). Hepsi merge edilmedi.
- **T-031** — Kurulum README bağlantılarını ve adımlarını güncel gerçekle karşılaştır · BITTI-YEREL · [#1018](https://github.com/Naveax/Nexowire/pull/1018) · CI/gerçek kabul ayrı.
- **T-032** — ChatGPT MCP URL ile kontrol paneli URL karışıklığını açıklığa kavuştur · BITTI-YEREL · [#1018](https://github.com/Naveax/Nexowire/pull/1018) · CI/gerçek kabul ayrı.
- **T-033** — Bağla butonu başarısızlığında güvenli kurtarma adımı ekle · BITTI-YEREL · [#1018](https://github.com/Naveax/Nexowire/pull/1018) · CI/gerçek kabul ayrı.
- **T-034** — Windows indirme adı/uzantısı hata rehberini netleştir · BITTI-YEREL · [#1018](https://github.com/Naveax/Nexowire/pull/1018) · CI/gerçek kabul ayrı.
- **T-035** — Kullanıcıdan secret istemeyen kurulum kontrol listesi oluştur · BITTI-YEREL · [#1018](https://github.com/Naveax/Nexowire/pull/1018) · CI/gerçek kabul ayrı.
- **T-036** — Doküman iç linklerini ve ankrajları statik testle doğrula · BITTI-YEREL · [#1018](https://github.com/Naveax/Nexowire/pull/1018) · CI/gerçek kabul ayrı.

### K07 — Self-host belgeleri | 7 teslim
- Yerel test/kanıt sınırı: 8/8 komut/docs PASS; gerçek self-host NOT_RUN
- PR'lar: [#1013](https://github.com/Naveax/Nexowire/pull/1013) (HEAD `2c9253e92923`). Hepsi merge edilmedi.
- **T-037** — Self-host ön koşullarını varsayımsız belgele ve bağlantıları denetle · BITTI-YEREL · [#1013](https://github.com/Naveax/Nexowire/pull/1013) · CI/gerçek kabul ayrı.
- **T-038** — Kurulum ve normal kullanıcı yolunu açıkça ayır · BITTI-YEREL · [#1013](https://github.com/Naveax/Nexowire/pull/1013) · CI/gerçek kabul ayrı.
- **T-039** — Hata ayıklama adımlarını salt-okunur komutlarla güçlendir · BITTI-YEREL · [#1013](https://github.com/Naveax/Nexowire/pull/1013) · CI/gerçek kabul ayrı.
- **T-040** — Örnek değişkenlerde sır sızıntısı riskine karşı doküman testi ekle · BITTI-YEREL · [#1013](https://github.com/Naveax/Nexowire/pull/1013) · CI/gerçek kabul ayrı.
- **T-041** — Platform farklarını (Windows/Linux) doğrulanabilir biçimde yaz · BITTI-YEREL · [#1013](https://github.com/Naveax/Nexowire/pull/1013) · CI/gerçek kabul ayrı.
- **T-042** — Self-host belgeleri için offline link ve komut smoke kontrolleri ekle · BITTI-YEREL · [#1013](https://github.com/Naveax/Nexowire/pull/1013) · CI/gerçek kabul ayrı.
- **T-122** — Windows ve Linux geliştirici komutu doğrulama matrisi · BITTI-YEREL · [#1013](https://github.com/Naveax/Nexowire/pull/1013) · CI/gerçek kabul ayrı.

### K08 — Mimari ve MCP dokümanları | 7 teslim
- Yerel test/kanıt sınırı: 3/3+5/5 sözleşme PASS; MCP NOT_RUN
- PR'lar: [#1014](https://github.com/Naveax/Nexowire/pull/1014) (HEAD `b3e40ed6e45b`), [#1021](https://github.com/Naveax/Nexowire/pull/1021) (HEAD `8ea0cf13b4cb`). Hepsi merge edilmedi.
- **T-043** — MCP yüzeyi adlarını gerçek read-only sözleşmeyle eşleştir · BITTI-YEREL · [#1014](https://github.com/Naveax/Nexowire/pull/1014) · CI/gerçek kabul ayrı.
- **T-044** — Mimari şemadaki bileşen bağlantılarında kaynak tutarlılığı kontrol et · BITTI-YEREL · [#1014](https://github.com/Naveax/Nexowire/pull/1014) · CI/gerçek kabul ayrı.
- **T-045** — Agent/Hub/ChatGPT akışına yeni başlayan için kısa açıklama ekle · BITTI-YEREL · [#1014](https://github.com/Naveax/Nexowire/pull/1014) · CI/gerçek kabul ayrı.
- **T-046** — Belgede güvenlik yetkisi varmış izlenimi veren ifadeleri düzelt · BITTI-YEREL · [#1014](https://github.com/Naveax/Nexowire/pull/1014) · CI/gerçek kabul ayrı.
- **T-047** — Dökümana örnek hata/UNKNOWN terimleri sözlüğü ekle · BITTI-YEREL · [#1014](https://github.com/Naveax/Nexowire/pull/1014) · CI/gerçek kabul ayrı.
- **T-048** — Belge bağlantı/başlık doğrulama testi ekle · BITTI-YEREL · [#1014](https://github.com/Naveax/Nexowire/pull/1014) · CI/gerçek kabul ayrı.
- **T-123** — MCP hata mesajları için statik kullanıcı dili QA · BITTI-YEREL · [#1021](https://github.com/Naveax/Nexowire/pull/1021) · CI/gerçek kabul ayrı.

### K09 — Ürün yol haritası | 7 teslim
- Yerel test/kanıt sınırı: 4/4+5/5 belge testi PASS; CI 0-job
- PR'lar: [#1017](https://github.com/Naveax/Nexowire/pull/1017) (HEAD `1791b8c471d5`), [#1028](https://github.com/Naveax/Nexowire/pull/1028) (HEAD `ec9784fff519`). Hepsi merge edilmedi.
- **T-049** — Yol haritasında plan/uygulandı/kanıt yok ayrımını netleştir · BITTI-YEREL · [#1017](https://github.com/Naveax/Nexowire/pull/1017) · CI/gerçek kabul ayrı.
- **T-050** — Aktif PR'ları ürün özellikleriyle çakışmasız eşleştir · BITTI-YEREL · [#1017](https://github.com/Naveax/Nexowire/pull/1017) · CI/gerçek kabul ayrı.
- **T-051** — Özelliklerin kullanıcıya dönük kabul tanımlarını somutlaştır · BITTI-YEREL · [#1017](https://github.com/Naveax/Nexowire/pull/1017) · CI/gerçek kabul ayrı.
- **T-052** — Hedef sürüm iddialarını yayımlanmış sürümden ayır · BITTI-YEREL · [#1017](https://github.com/Naveax/Nexowire/pull/1017) · CI/gerçek kabul ayrı.
- **T-053** — Metrik ve UX önceliği için güncel bağımlılık tablosu ekle · BITTI-YEREL · [#1017](https://github.com/Naveax/Nexowire/pull/1017) · CI/gerçek kabul ayrı.
- **T-054** — Yol haritasına kanıtsız tamamlandı ifadesi regresyon taraması koy · BITTI-YEREL · [#1017](https://github.com/Naveax/Nexowire/pull/1017) · CI/gerçek kabul ayrı.
- **T-124** — Dokümanlarda eskimiş sürüm referansları raporu · BITTI-YEREL · [#1028](https://github.com/Naveax/Nexowire/pull/1028) · CI/gerçek kabul ayrı.

### K10 — Tarayıcı görünüm QA | 6 teslim
- Yerel test/kanıt sınırı: 10/10+34/34 statik PASS; Playwright NOT_RUN
- PR'lar: [#1020](https://github.com/Naveax/Nexowire/pull/1020) (HEAD `6b44959410af`). Hepsi merge edilmedi.
- **T-055** — Statik web sayfaları için offline smoke çalıştırıcısı yaz · BITTI-YEREL · [#1020](https://github.com/Naveax/Nexowire/pull/1020) · CI/gerçek kabul ayrı.
- **T-056** — 375px/768px/desktop görünüm senaryoları üret · BITTI-YEREL · [#1020](https://github.com/Naveax/Nexowire/pull/1020) · CI/gerçek kabul ayrı.
- **T-057** — Odak ve görsel taşma test kanıt formatını tasarla · BITTI-YEREL · [#1020](https://github.com/Naveax/Nexowire/pull/1020) · CI/gerçek kabul ayrı.
- **T-058** — Connect/main/admin farklı durum fixture'larını tanımla · BITTI-YEREL · [#1020](https://github.com/Naveax/Nexowire/pull/1020) · CI/gerçek kabul ayrı.
- **T-060** — Tarayıcı yokken PASS ilan etmeyen CI rapor sözleşmesini oluştur · BITTI-YEREL · [#1020](https://github.com/Naveax/Nexowire/pull/1020) · CI/gerçek kabul ayrı.
- **T-134** — Tarayıcı screenshot kanıtı ile sentetik PASS ayrımı şablonu · BITTI-YEREL · [#1020](https://github.com/Naveax/Nexowire/pull/1020) · CI/gerçek kabul ayrı.

### K11 — S5 offline maliyet raporları | 7 teslim
- Yerel test/kanıt sınırı: 8/8+3/3 offline, typecheck/build PASS; provider faturası UNKNOWN
- PR'lar: [#1029](https://github.com/Naveax/Nexowire/pull/1029) (HEAD `919da8e9a99e`). Hepsi merge edilmedi.
- **T-061** — Maliyet raporu boş/fiyat yok girişlerinde UNKNOWN üretsin: test ekle · BITTI-YEREL · [#1029](https://github.com/Naveax/Nexowire/pull/1029) · CI/gerçek kabul ayrı.
- **T-062** — NaN/Infinity/negatif maliyet için fail-closed rapor testi yaz · BITTI-YEREL · [#1029](https://github.com/Naveax/Nexowire/pull/1029) · CI/gerçek kabul ayrı.
- **T-063** — Karışık para birimi/birim girdi kontrolünü güçlendir · BITTI-YEREL · [#1029](https://github.com/Naveax/Nexowire/pull/1029) · CI/gerçek kabul ayrı.
- **T-064** — CSV kaçışları ve başlık kararlılığını regresyonla doğrula · BITTI-YEREL · [#1029](https://github.com/Naveax/Nexowire/pull/1029) · CI/gerçek kabul ayrı.
- **T-065** — Kullanıcı başına ve toplam maliyet raporu formülünü test et · BITTI-YEREL · [#1029](https://github.com/Naveax/Nexowire/pull/1029) · CI/gerçek kabul ayrı.
- **T-066** — Gerçek provider faturası olmayan sonuçları simülasyon diye etiketle · BITTI-YEREL · [#1029](https://github.com/Naveax/Nexowire/pull/1029) · CI/gerçek kabul ayrı.
- **T-131** — Örnek CSV çıktısı için locale/birim hata testi · BITTI-YEREL · [#1029](https://github.com/Naveax/Nexowire/pull/1029) · CI/gerçek kabul ayrı.

### K12 — S5 loopback performans testleri | 5 teslim
- Yerel test/kanıt sınırı: 20/20 sentetik PASS; CSV sözleşmesi yok
- PR'lar: [#1024](https://github.com/Naveax/Nexowire/pull/1024) (HEAD `3f947c46375a`). Hepsi merge edilmedi.
- **T-067** — Loopback WS kapasite benchmark'ının ölçüm/kayıt formatını doğrula · BITTI-YEREL · [#1024](https://github.com/Naveax/Nexowire/pull/1024) · CI/gerçek kabul ayrı.
- **T-068** — Reconnect storm benchmark'ın sınırlı ve iptal edilebilir çalışmasını test et · BITTI-YEREL · [#1024](https://github.com/Naveax/Nexowire/pull/1024) · CI/gerçek kabul ayrı.
- **T-069** — Soğuk/tek örnek percentile hesaplamasını negatif testle doğrula · BITTI-YEREL · [#1024](https://github.com/Naveax/Nexowire/pull/1024) · CI/gerçek kabul ayrı.
- **T-070** — Sıfır/negatif süre ve bozuk örnekleri reddeden test ekle · BITTI-YEREL · [#1024](https://github.com/Naveax/Nexowire/pull/1024) · CI/gerçek kabul ayrı.
- **T-072** — Gerçek ağ/sağlayıcı kabulüyle sentetik kapasiteyi açıkça ayır · BITTI-YEREL · [#1024](https://github.com/Naveax/Nexowire/pull/1024) · CI/gerçek kabul ayrı.

### K13 — Fork CI ve test altyapısı | 7 teslim
- Yerel test/kanıt sınırı: fork PR #1 exact HEAD 3/3 gerçek CI job PASS (Linux 22/24+Windows 24)
- PR'lar: [Fork PR #1](https://github.com/SinsiVinci/Nexowire-fork/pull/1). Hepsi merge edilmedi.
- **T-073** — Salt-okunur, secretsiz non-core PR CI workflow'u oluştur · BITTI-YEREL · [Fork PR #1](https://github.com/SinsiVinci/Nexowire-fork/pull/1) · CI/gerçek kabul ayrı.
- **T-074** — Node 22/24 typecheck/build/test ayrımını güvenli kur · BITTI-YEREL · [Fork PR #1](https://github.com/SinsiVinci/Nexowire-fork/pull/1) · CI/gerçek kabul ayrı.
- **T-075** — HTML/DOM statik testlerini fork'ta workflow'a bağla · BITTI-YEREL · [Fork PR #1](https://github.com/SinsiVinci/Nexowire-fork/pull/1) · CI/gerçek kabul ayrı.
- **T-076** — Windows-latest sentetik UI smoke matrisi oluştur · BITTI-YEREL · [Fork PR #1](https://github.com/SinsiVinci/Nexowire-fork/pull/1) · CI/gerçek kabul ayrı.
- **T-077** — CI job/run/HEAD kanıtlarını otomatik özetleyen script ekle · BITTI-YEREL · [Fork PR #1](https://github.com/SinsiVinci/Nexowire-fork/pull/1) · CI/gerçek kabul ayrı.
- **T-078** — Fork CI yetki ve action_required engeli için negatif doğrulama ekle · BITTI-YEREL · [Fork PR #1](https://github.com/SinsiVinci/Nexowire-fork/pull/1) · CI/gerçek kabul ayrı.
- **T-128** — Eski CI action_required run'ları salt okunur takip aracı · BITTI-YEREL · [Fork PR #1](https://github.com/SinsiVinci/Nexowire-fork/pull/1) · CI/gerçek kabul ayrı.

### K14 — Fork eşitleme ve PR entegrasyonu | 6 teslim
- Yerel test/kanıt sınırı: 14/14 read-only entegrasyon testi PASS, upstream CI 0-job
- PR'lar: [#1022](https://github.com/Naveax/Nexowire/pull/1022) (HEAD `69452d1776dd`). Hepsi merge edilmedi.
- **T-079** — Güncel upstream/fork HEAD farkı için read-only rapor üret · BITTI-YEREL · [#1022](https://github.com/Naveax/Nexowire/pull/1022) · CI/gerçek kabul ayrı.
- **T-080** — Açık non-core PR sahiplik ve dosya çakışmalarını tarayan script yaz · BITTI-YEREL · [#1022](https://github.com/Naveax/Nexowire/pull/1022) · CI/gerçek kabul ayrı.
- **T-081** — Destek PR #997-#1000 için merge öncesi dosya-kapsam tablosu hazırla · BITTI-YEREL · [#1022](https://github.com/Naveax/Nexowire/pull/1022) · CI/gerçek kabul ayrı.
- **T-082** — GitHub CI exact SHA ve jobs boşluklarını raporla · BITTI-YEREL · [#1022](https://github.com/Naveax/Nexowire/pull/1022) · CI/gerçek kabul ayrı.
- **T-083** — Güncel main'e göre non-core PR rebase risklerini salt-okunur ölç · BITTI-YEREL · [#1022](https://github.com/Naveax/Nexowire/pull/1022) · CI/gerçek kabul ayrı.
- **T-140** — Kendi çalışma dalının diff/CI kabul özetini çıkaran araç · BITTI-YEREL · [#1022](https://github.com/Naveax/Nexowire/pull/1022) · CI/gerçek kabul ayrı.

### K15 — Cihaz seçimi kullanıcı deneyimi | 5 teslim
- Yerel test/kanıt sınırı: 8 test PASS+1 TODO; K03 UI bağımlı
- PR'lar: [#1026](https://github.com/Naveax/Nexowire/pull/1026) (HEAD `0876648a4e03`). Hepsi merge edilmedi.
- **T-085** — Cihaz listeleme ve yok durumları için sözleşme envanteri çıkar · BITTI-YEREL · [#1026](https://github.com/Naveax/Nexowire/pull/1026) · CI/gerçek kabul ayrı.
- **T-087** — Çevrimdışı cihazın çevrimiçi görünmesini reddeden test oluştur · BITTI-YEREL · [#1026](https://github.com/Naveax/Nexowire/pull/1026) · CI/gerçek kabul ayrı.
- **T-088** — Birden çok cihaz için açıklayıcı seçim metnini tasarla · BITTI-YEREL · [#1026](https://github.com/Naveax/Nexowire/pull/1026) · CI/gerçek kabul ayrı.
- **T-089** — Uzun/Unicode cihaz adlarının ekran gösterimini test et · BITTI-YEREL · [#1026](https://github.com/Naveax/Nexowire/pull/1026) · CI/gerçek kabul ayrı.
- **T-090** — Yetki değiştirmeyen cihaz seçim UX önerisi ve kanıt hazırla · BITTI-YEREL · [#1026](https://github.com/Naveax/Nexowire/pull/1026) · CI/gerçek kabul ayrı.

### K17 — Beceri kayıt/meta kalite | 6 teslim
- Yerel test/kanıt sınırı: 18 yerel test PASS, typecheck/build PASS
- PR'lar: [#1030](https://github.com/Naveax/Nexowire/pull/1030) (HEAD `08e9d233fd80`). Hepsi merge edilmedi.
- **T-097** — Beceri manifesti yol/başlık tutarlılığını test et · BITTI-YEREL · [#1030](https://github.com/Naveax/Nexowire/pull/1030) · CI/gerçek kabul ayrı.
- **T-098** — Bozuk veya yinelenen beceri adı için test ekle · BITTI-YEREL · [#1030](https://github.com/Naveax/Nexowire/pull/1030) · CI/gerçek kabul ayrı.
- **T-099** — Registry açıklamaları/örnek alanları için şema kalite raporu oluştur · BITTI-YEREL · [#1030](https://github.com/Naveax/Nexowire/pull/1030) · CI/gerçek kabul ayrı.
- **T-100** — Yetkisiz yürütme önerisi içeren belge kalıplarını negatif testle işaretle · BITTI-YEREL · [#1030](https://github.com/Naveax/Nexowire/pull/1030) · CI/gerçek kabul ayrı.
- **T-101** — Mevcut skill kataloğu için statik link doğrulama aracı yap · BITTI-YEREL · [#1030](https://github.com/Naveax/Nexowire/pull/1030) · CI/gerçek kabul ayrı.
- **T-102** — Registry değişikliği gerekiyorsa güvenlik sınırını koruyarak yalnız meta düzelt · BITTI-YEREL · [#1030](https://github.com/Naveax/Nexowire/pull/1030) · CI/gerçek kabul ayrı.

### K18 — Taşıma ve kapasite metrikleri | 4 teslim
- Yerel test/kanıt sınırı: 11 offline test PASS, typecheck/build PASS; percentile açık
- PR'lar: [#1023](https://github.com/Naveax/Nexowire/pull/1023) (HEAD `c292d2bbb8ea`). Hepsi merge edilmedi.
- **T-103** — Taşıma metriği boş ve tek örnek rapor testleri ekle · BITTI-YEREL · [#1023](https://github.com/Naveax/Nexowire/pull/1023) · CI/gerçek kabul ayrı.
- **T-104** — Düşen/eksik sayaçlar için UNKNOWN sınıflandırması yap · BITTI-YEREL · [#1023](https://github.com/Naveax/Nexowire/pull/1023) · CI/gerçek kabul ayrı.
- **T-105** — Çakışan birim ve sayaç adlarını doğrulayan parser testi ekle · BITTI-YEREL · [#1023](https://github.com/Naveax/Nexowire/pull/1023) · CI/gerçek kabul ayrı.
- **T-106** — Rapor çıkışının stabil sırası/formatını regresyonla sabitle · BITTI-YEREL · [#1023](https://github.com/Naveax/Nexowire/pull/1023) · CI/gerçek kabul ayrı.

### K19 — Dosya aktarımı UX/QA | 6 teslim
- Yerel test/kanıt sınırı: 16/16 sentetik PASS; fiziksel iki-PC NOT_RUN
- PR'lar: [#1025](https://github.com/Naveax/Nexowire/pull/1025) (HEAD `ef520df5f216`). Hepsi merge edilmedi.
- **T-109** — Dosya transferi kullanıcı durumlarının sözleşme envanterini çıkar · BITTI-YEREL · [#1025](https://github.com/Naveax/Nexowire/pull/1025) · CI/gerçek kabul ayrı.
- **T-110** — Büyük dosya ilerleme metninin sahte tamamlandı vermediğini test et · BITTI-YEREL · [#1025](https://github.com/Naveax/Nexowire/pull/1025) · CI/gerçek kabul ayrı.
- **T-111** — Kesilen transferin kullanıcıya UNKNOWN görünmesi için test tasarla · BITTI-YEREL · [#1025](https://github.com/Naveax/Nexowire/pull/1025) · CI/gerçek kabul ayrı.
- **T-112** — Aynı isimli dosyada çakışma arayüzünü incele · BITTI-YEREL · [#1025](https://github.com/Naveax/Nexowire/pull/1025) · CI/gerçek kabul ayrı.
- **T-113** — Tekrar denemede veri kaybını gizlemeyen kabul matrisi oluştur · BITTI-YEREL · [#1025](https://github.com/Naveax/Nexowire/pull/1025) · CI/gerçek kabul ayrı.
- **T-114** — Offline testlerin gerçek iki cihaz kabulü olmadığını kanıt sayfasında ayır · BITTI-YEREL · [#1025](https://github.com/Naveax/Nexowire/pull/1025) · CI/gerçek kabul ayrı.

### K20 — Test/issue bakım ve kalite | 7 teslim
- Yerel test/kanıt sınırı: 6 test dosyası PASS; tam npm NOT_RUN
- PR'lar: [#1031](https://github.com/Naveax/Nexowire/pull/1031) (HEAD `99a76109e69e`), [#1032](https://github.com/Naveax/Nexowire/pull/1032) (HEAD `85c4a2bf7f34`). Hepsi merge edilmedi.
- **T-115** — Açık issue'lardan non-core iş adaylarını tekrarsız sınıflandır · BITTI-YEREL · [#1031](https://github.com/Naveax/Nexowire/pull/1031) · CI/gerçek kabul ayrı.
- **T-116** — Repo içi kırık doküman bağlantıları için offline test aracı ekle · BITTI-YEREL · [#1031](https://github.com/Naveax/Nexowire/pull/1031) · CI/gerçek kabul ayrı.
- **T-117** — Birim test dosyası adlarıyla sahiplik/çakışma envanteri üret · BITTI-YEREL · [#1031](https://github.com/Naveax/Nexowire/pull/1031) · CI/gerçek kabul ayrı.
- **T-118** — Typecheck/build/test komutlarının başarısızlık ayrımını kontrol et · BITTI-YEREL · [#1031](https://github.com/Naveax/Nexowire/pull/1031) · CI/gerçek kabul ayrı.
- **T-119** — PR incelemesi için küçük kanıt özeti şablonunu otomatik üret · BITTI-YEREL · [#1031](https://github.com/Naveax/Nexowire/pull/1031) · CI/gerçek kabul ayrı.
- **T-120** — Tamamlanan non-core işlerin kullanım senaryosu regresyon listesini tut · BITTI-YEREL · [#1031](https://github.com/Naveax/Nexowire/pull/1031) · CI/gerçek kabul ayrı.
- **T-129** — PR etiketleri ve açıklamalarında güvenlik kapsamı tespiti raporu · BITTI-YEREL · [#1032](https://github.com/Naveax/Nexowire/pull/1032) · CI/gerçek kabul ayrı.

## Altyapı kuruluşu (T-xxx görevi değildir)
- 2026-11-01: fork `main` upstream `93b6df33ef58610dcfdf3584bfe774e5afa7df4d`ye +38 commit fast-forward ile geldi; `ekip` dalı ve P001/V001/S001 kuruldu. Kod teslimi sayılmadı.
