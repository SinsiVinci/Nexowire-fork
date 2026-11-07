# NEXOWIRE EKİBİ PROTOKOLÜ — V003
Tarih: 2026-11-07 (Europe/Istanbul)
ŞEF tarafından yönetilen iş: `SinsiVinci/Nexowire-fork` içindeki `ekip` dalında yalnız `ekip/`.
Bu dosya ve PANO ilk kurulumda oluşturuldu. Her ajan kendisine atanan işi gerçek kod/test çıktısı ile tamamlar; sadece metin raporu ilerleme sayılmaz.

## Kimlik, hedef ve öncelik
- ONUR, `SinsiVinci` kullanıcısıdır; tek insan taşıyıcıdır. ÖMER, `Naveax` ve upstream proje sahibidir. Birbirleri değildir.
- ŞEF'in yazabildiği tek ekip kayıtları: `ekip/PROTOKOL.md`, `ekip/PANO.md`, `ekip/SEF.md`, `ekip/ARSIV.md`. İlk kuruluş dışında `ekip/durum/KNN.md` dosyasına **yalnız KNN** yazar.
- Her KNN yeni sohbetin ilk adımında PROTOKOL'ü tamamen okur; her sonraki adımda **en güncel PANO ve kendi durum dosyasını** okur; PROTOKOL sürümü değiştiyse tekrar tamamını okur. Başka ajan mesajını beklemez.
- KNN kayıtları birbirlerine görünür, ancak diğerinin kaydını güncellemek veya silmek yasak.

## Kritik sınır — yazma YASAK
Kritik sahibi Ömer ve upstream ajanlarıdır. Şüphede kritik sayılır; sadece okuma ve talep/öneri kaydı:
1. CORE yürütme/aktivasyon, doğal/native yürütme kimliği, yetki ve platform kontrolleri; `src/core/**`, `src/security/**`, `src/agent/native-agent*`, `src/agent/privileged-broker*`, `src/agent/operation-journal*`, `src/agent/guardian*`, `src/protocol/*core*`.
2. Kimlik doğrulama/yetkilendirme, izinler, OAuth, tokens, session, tool admission; `src/product/*oauth*`, `src/hub/*auth*`, `src/mcp/*auth*`, `src/security/**` ve bu işlevlere dokunan herhangi başka dosya.
3. Broker, native servis, Windows korumalı görev/ACL, WAL/DB/SHM, veri bütünlüğü çekirdeği, anti-replay/idempotency mutation sınırları.
4. Ödeme/fiyatlandırma tahsilatı, billing, secret, GitHub CI secret, Cloudflare gerçek tüneli/hesabı, kimlik doğrulayıcı üretimi.
5. Release/deploy/tag/kurucu üretimi, dağıtım, gerçek cihaz/hesap bağlantısı, yaşayan Hub/Agent/Broker, gerçek admin/UAC izinleri.
6. Ömer'in aktif PR'larının/dallarının dosyaları; güncel remote değişimlerini önce kontrol et. Yazdığı dosyalara çakışmalı PR hazırlama.
İzinli görünen `web/app.js`, `web/admin.js`, `src/diagnostics/**`, `src/skills/**` ve `src/ops/**` içinde de yukarıdaki güvenlik/izin davranışlarına DOKUNMA. UI metni, görsel sunum, offline rapor ve test fixture ile sınırla. Yeni bir güvenlik açığını test etmek, mevcut korumayı gevşetme izni değildir.


## 7 Kasım ISSUE ODAĞI — V002 EK KURALLARI
- Öncelik sırası değişti: [açık Nexowire issue'ları](https://github.com/Naveax/Nexowire/issues) incelenir ve **PANO P003'teki yeni AKTİF görevlere** odaklanılır. Eski P001/P002 yarım işleri kayıtlarında korunur ama otomatik öne geçmez; main'e zaten girmiş içerik ikinci kez uygulanmaz.
- **Bir issue = bir işçi değildir.** #539 şemsiyesi gibi birden çok alt sorun vardır; T-ID tek, dar kapsamlı, tek sahibi olan görevi ifade eder. Kayda `Issue: #NNN / alt başlık`, `main SHA`, `Owner PR çakışma kontrolü`, `Doğrulama: yerel/hosted/fiziksel/NOT_RUN` alanlarını ekle.
- Güncel öncelikler: #540 Windows alt süreç durdurma, #588 büyük dosya aktarımı (korunan çekirdeğe **yalnız salt-okunur QA**), #539 R01/R11/R17/R18/R22, #485 kullanıcının kurulumu, #487 offline S5, #1006 CI. #271 owner kararına göre **ON HOLD**. CORE journal/WAL, auth, billing, release ve canlı cihaz yalnız owner'ın işi.
- **Kritik alanda hata bulunursa:** kendi test/docs alanında tekrarlanabilir kanıt ve risk notu yaz; kaynak korunan kodu değiştirme. Bu durum tüm sekmeyi durdurmaz, kuyruktan diğer güvenli işe geç.
- **Issue kapatma eşikleri:** kaynağı düzelttik ve izole test PASS ilk aşamadır; exact-HEAD CI yeşil, main'de merge ve sorunun kendi kabulü (gerekirse gerçek Windows/cihaz) ayrı aşamalardır. Kapatma kararı sadece yeterli kanıtla ŞEF tarafından değerlendirilir; P0 owner kapısını atlama. `Fixed in source` ≠ `resolved on installed device`.
- Fork `main` 7 Kasım'da upstream `4e7db16f4233048a956664bef6b607781eb63fb7`ye fast-forward edildi. Bu SHA kalıcı kabul değil, **her adımda HEAD'i yeniden al**. Kod dalını daima güncel upstream ana daldan aç; eski dalına güncel ana dalı körlemesine zorla yazma.
- **İnsan işi:** yalnız Onur'un tek mesajı 20 köleye yapıştırması. Ek collaborator talebi gerekmez. Yeni fiziksel cihaz/owner onayı gibi gerçek dış bağımlılık varsa kayıt dosyasına ve ŞEF'e yaz; geri kalan işleri sürdür.

## 2026-11-07 Ömer koordinasyon teyidi — V003
- PANO P004'te **K01–K20 T-255…T-374 değişmedi**; görevler mevcut sırayla ilerler. #540/#588/#539/#485/#487 odak; önceden birleşen işler yeni 120 sayacına eklenmez.
- Owner'ın aktif [#1096](https://github.com/Naveax/Nexowire/pull/1096) CORE/Broker/SQLite Hub/Connection v2 entegrasyonuna kaynak kod ekleme. `src/agent/process-manager.ts` ve `.github/workflows/ci.yml` de #1096 yol listesinde; K16 testleri kendi dizininde, K13 yalnız kendi `delegated-noncore.yml` dosyasında çalışır. `#1068` web UI entegrasyonu açıkken K01–K04 kaynak çakışmasına girme, yeni bağımsız test üretmeye devam et.
- Her görevde *bulgu → tekrar üretim → minimum düzeltme → aynı kaynak sürümünde tekrar test* sırasını koru; gerçek kod yerine gereksiz sentetik belge çoğaltma. Kritik kaynak hatası bulunursa test ve kaynak kanıtıyla owner'a yönlendir; başka görevine devam et.
- Bir CI run/check **aynı exact SHA için zaten başlamışsa yeniden başlatma**; 0-job, skipped, pending ve NOT_RUN sonucunu yeşil sayma. Yerel 60/60 owner bildirimi kendi kodun için CI/cihaz kabulü yerine geçmez.
- Yeni T-ID bitince durum dosyasında ilgili issue, kod commit ve PR, test komutu/sonuç, workflow run, canlı cihaz gerekirse NOT_RUN, ana dal kabul bilgisi bulunsun. ŞEF bunları #1006 ana kabul izine bağlar; PR sahibi kendi başına kritik owner PR'ını merge etmez.
- Karşı tarafa mesaj gerektiğinde **sadece gerçek yol çakışması, iki PR ve SHA, önerilen çözüm** kaydet. ŞEF Onur üzerinden iletir. Gereksiz onay ve yeni engeller üretme.

## Üstlenme ve öncelik
1. `PANO` içindeki **AKTİF** görevi yap; BITTI/bağımlı/engel ise sıradaki hazır **KUYRUK** görevi.
2. Kuyruk bittiyse **HAVUZ** listesini incele. Önce diğer 19 kayıt dosyasındaki `ÜSTLENDİM: T-xxx` satırlarını oku. Boşsa kendi kaydına `ÜSTLENDİM: T-xxx` yazıp **ekip** dalına önce bunu kaydet. Sahiplenme çakışırsa küçük numaralı KNN işi sürdürür; büyük numaralı durup başka iş alır. ŞEF pano sahipliğini bir sonraki kontrolde netleştirir.
3. Havuz da bittiyse kendi alanında en değerli, kritik olmayan iş için **ÖNERİ:** satırı yaz; ŞEF PANO'ya görev atamadan farklı ajanla çakışacak değişiklik yapma.
4. Bağımlılık çözülmemişse veya başka kişinin dosyası gerekiyorsa bekleme; sıradaki bağımsız göreve geç. İstek ve bağlı görevleri kendi kaydına yaz.
5. Her görevde tek sahip; izinli yol listesi dışında içerik değiştirme. Tek dosyaya iki owner kesinlikle atanmaz. `web/styles.css` sahibi yalnız K02; diğerleri CSS ihtiyacını kayda yazar.
6. İlerleme beyanı için sahte PASS/merge/donanım testi yok; test çalışmadıysa `NOT_RUN`.

## Repo, dal, commit ve PR
- Upstream: `Naveax/Nexowire` → `main`. Kod çalışma fork'u: `SinsiVinci/Nexowire-fork`.
- KNN kod dalı: `kNN/<kisa-konu>` (örn. `k07/docs-self-host`) — **yalnız upstream güncel `main` commit'inden** açılır. Şu an referans başlangıç upstream `93b6df33ef58610dcfdf3584bfe774e5afa7df4d`; her adım öncesi güncelliğini tekrar sorgula. Fork `main` güvenli fast-forward ile upstream'e alınmış olabilir; asla force push/reset yapma.
- `ekip` dalı sadece `ekip/**` dosyalarını değiştirmek içindir. Kod, test, .github workflow, prototip, hatta yarım kod **asla ekip dalına** girmez. Bir kod dalında ise `ekip/**` içeriği bulunmamalıdır; `ekip`den code branch açma/merge etme.
- Kod üzerinde küçük mantıksal commit yap: `fix(ui): ...`, `test(qa): ...`, `docs: ...`, `ci: ...` (sade ve profesyonel, ekip içi lakapları upstream'e taşıma; ilgili açık issue numarasını PR açıklamasında belirt). Yarım iş bile kendi **kod dalında** commitlenir; test sonucunu kayda `WIP / NOT_RUN` diye yaz.
- Rapor için ikinci çalışma ağacı/API ile `ekip/durum/KNN.md` güncellenir, `ekip` ref'ine normal fast-forward ile commitlenir. Ortak ref eşzamanlı değiştiyse yeniden fetch edip **yalnız kendi raporunu** yeniden uygula; asla force push, `--ours` ile toplu silme, overwrite veya checkout edilen dal değişimi yapma.
- **7 Kasım doğrulaması: `SinsiVinci`, `Naveax/Nexowire` üzerinde `write` yetkisine sahip.** Çalışma dalları yine fork'ta kalır; fork kod dalından upstream `main`e PR aç. Yazma izni doğrudan CORE değişimi, zorla merge, koruma atlama ya da owner'ın işine müdahale izni değildir. Yalnız testleri geçen küçük non-core değişikliği PR'a koy.
- Birleştirme kuralları: aynı exact-HEAD CI gerçekten job çalışmış ve başarılı olacak; bağımsız değişiklikler çakışmayacak; kritik bileşenlerin sahipleri etkilenmeyecek; repo yetkisi, gözden geçirme ve koruma kurallarına uy. **Write olsa bile CI atlatma, branch protection zorlaması, Ömer'in aktif Draft'ını merge etme yok.** Birleştirme/issue kapatma işini ŞEF PANO/SEF'de ayrı karar olarak kaydeder; köle kendi başına upstream'i değiştirmez. `action_required` veya jobs=[] PASS değildir.
- K14 fork `main` senkronunun sahibidir: upstream HEAD ile fork HEAD'i compare et; yalnız **fast-forward**, `force:false`, expected SHA lease; git belirsizse ŞEF'e yaz ve güncelleme yapma. Upstream ve aktif PR durumunu izler.
- K13 CI sahibidir. Fork test workflow'larında `permissions: contents: read`, secret yok, `pull_request_target` yok, untrusted kodu yazma erişimli token ile çalıştırma yok. Gerçek ağ/hesap/Windows cihaz kabulünü CI smoke diye sunma.
- Aynı path üzerinde upstream yeni işi varsa ilgili görev `ENGEL` sayılır; bağımsız yeni dosyada test yazılabilir, upstream değişikliği tersine çevrilmez.

## Test kalitesi ve risk sınırı
- Değişiklik ölçeğine göre test: tek davranış + negatif; `npm ci`, `npm run typecheck`, `npm test`, `npm run build` gerektiği kadar çalıştır. Canlı Agent/Hub/Broker, açık internete servis, gerçek Cloudflare/OAuth/billing, production DB ve iki-PC testleri varsayılan yasak.
- HTML/CSS testlerinde statik/DOM PASS gerçek tarayıcı, klavye, ekran görüntüsü, Windows kabulü anlamına gelmez. Eksik kanıt açık `NOT_RUN` olur. Playwright yoksa günlerce aynı kurulumu zorlayarak çevrimiçi tüketim yapma; fork runner alternatifi kullan.
- Sentetik performans fiyatı gerçek provider fatura kanıtı değildir. Ölçüm yoksa `UNKNOWN`; NaN/Infinity/negative/mixed currency/duration testleri istisna oluşturur.
- Önceki destek ve KNN PR'larına yeniden başlamadan **güncel `main`, PR state/merged_at, owner koordinasyon PR'sı ve dosya blob SHA** karşılaştır. 7 Kasım anlık durumda 36 SinsiVinci PR'ından yalnız #1010/#1011/#1015/#1016/#1030/#1035 açık Draft; 30 kaynak PR kapalı-unmerged iken bir bölümü owner PR #1054–#1071 üzerinden main'e taşındı. Kapalı source PR'ı körlemesine yeniden açma/kopyalama. Owner #1068, K01–K04 web dosyalarını entegre ediyor; kod çakışmasın.
- GitHub izin veya güvenlik blokunu atlatma; doğru izin verilene kadar başka bağımsız görev yap.

## Kayıt dosyası biçimi (her adım, kendi dosyan)
```md
# KNN — [ROL]
Adım: 1
Okunan pano: P001
Okunan protokol: V001
Aktif görev: T-xxx — durum (AKTIF/BITTI/ENGEL)
Yapıldı: somut kaynak/kod değişikliği ve açıklaması
Kanıt: https://github.com/.../commit/<sha> veya PR + gerçek test adı/sonucu
Kod dalı ve exact HEAD: kNN/konu / <sha>
Şimdi: sonraki T-xxx, somut hamle
Engel: yok / çözüm yolu / kimin dosyası
ÖNERİ: ... (yoksa boş)
ÜSTLENDİM: T-xxx (yalnız havuz için)
```
- Adımı bir artır; test komutu/CI URL'sini ve `NOT_RUN` durumunu açık yaz. Değişiklik yapılmadıysa nedenini belirt. Bir adım için rapor uzunluğu sınırsız olabilir; sohbet yalnız 3 satırlık özettir.
- Bu sohbette ilk defa açıldıysan numaranla `ekip/durum/KNN.md` oku; kaldığın kod dalını ve son exact SHA'yı oradan bul, işi yinelemeden sürdür.

## ŞEF — sürekli kontrol
- ŞEF her "ŞEF DEVAM"da ekip dalında yeni commit/kayıt değişikliği arar; yalnız değişen raporları okur, kanıtı değerlendirir, BITTI'yi ARSIV'e taşır, PANO sürümünü bir artırır, SEF kararları/takibi kaydeder.
- ŞEF tekrarı ve çakışmayı çözer; durum raporunu üretim ilerlemesi sanmaz. Her an hızlı kölenin kuyruk+havuzda bağımsız işi olur.
- ŞEF yazar alanları korunur; ajanlar PROTOKOL/PANO/SEF/ARSIV'i değiştirmez. Ekip dalı upstream'e PR açılmaz.
