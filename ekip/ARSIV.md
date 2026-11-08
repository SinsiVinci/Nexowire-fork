# ARŞİV — A005 | 2026-11-08

## P005 (ilk köle çalıştırması) — ayrı ilerleme sayacı
- Son [ŞEF S005](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/SEF.md) commit'i `5cb864e99773f79637c00fe3b18e8afe78724a7d` sonrası **23 yeni ekip commit'i**, **19 güncellenen KNN raporu** okundu. **K03 değişmedi:** P004/Adım 4, dolayısıyla yeni P005 işlerine başlanmamış; K03 kuyruğu korundu.
- P005 **T-395…T-514: 92/120 (%76,7) yerel/source/test/QA teslim**, 28 kısmi/bağımlı/NOT_RUN. **Bu sayı ana dalda merge veya gerçek cihaz/işlevsel kabul sayısı değildir.** P004 eski 104/120 iş ayrı arşivlendi; yeni P006 0/120 başlatıldı.
- P005 HAVUZ'dan **T-523 K02**: gerçek screenshot olmadığında `NOT_RUN` işaretleyen QA, yerel 9/9 ve [#1138](https://github.com/Naveax/Nexowire/pull/1138); hosted yeni test keşfi ve gerçek tarayıcı screenshot hâlâ NOT_RUN. Diğer 19 havuz kimliği sahipsiz, P006'ya taşındı.
- 12 yeni PR #1131…#1142 açık Draft; kaynaklar kendi izinli dosyalarında. **Yeni kaynak-yazım teslimleriyle test keşfi/CI/cihaz kabulünü asla tek satırda PASS sayma.**
- **Ana projeye gerçek yeni merge:** K11 [#1135](https://github.com/Naveax/Nexowire/pull/1135) exact head `1267ea14554cca3545e962b1bbdec57487994a99` 7/7 hosted CI PASS; açıklama ve üç dosya incelendi, seçili 57/57 S5 testinin local PASS kanıtı. Upstream squash merge `52d452f717d891eeaf4c2b9aff3c6e1ea68369b0`; fork `main` güvenli fast-forward. Sub-cent modeled costs düzeltildi; #487 provider/physical/24h kabulü **yapılmadı**.
- **İstenmeyen issue kapanışı düzeltildi:** [#1135](https://github.com/Naveax/Nexowire/pull/1135) PR metnindeki negated kapanış anahtar sözcüğü GitHub tarafından yanlışlıkla işlenip [#487](https://github.com/Naveax/Nexowire/issues/487) otomatik kapatıldı; ŞEF issue'yu **reopened** yaptı ve PR açıklamasını nötrleştirdi. **#487 OPEN** tekrar doğrulandı. Canlı kabul olmadığı için kapatmak kesinlikle doğru değildi.

### P005 görev kimlikleri — yalnız yerel/source QA bitti
- **K01:** T-395, T-396, T-397 (**3**); kaynak [#1114](https://github.com/Naveax/Nexowire/pull/1114). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K02:** T-401, T-402 (**2**); kaynak [#1131](https://github.com/Naveax/Nexowire/pull/1131), [#1138](https://github.com/Naveax/Nexowire/pull/1138). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K03:** P005 teslim yok (**0**); kaynak [#1103](https://github.com/Naveax/Nexowire/pull/1103). P004'ten beri rapor gelmedi, P005 yeni işleri korunuyor.
- **K04:** T-413, T-414, T-415 (**3**); kaynak [#1104](https://github.com/Naveax/Nexowire/pull/1104), [#1120](https://github.com/Naveax/Nexowire/pull/1120), [#1133](https://github.com/Naveax/Nexowire/pull/1133). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K05:** T-419, T-420, T-421, T-422, T-423, T-424 (**6**); kaynak [#1115](https://github.com/Naveax/Nexowire/pull/1115), [#1122](https://github.com/Naveax/Nexowire/pull/1122), [#1132](https://github.com/Naveax/Nexowire/pull/1132). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K06:** T-425, T-426, T-427, T-428, T-429 (**5**); kaynak [#1108](https://github.com/Naveax/Nexowire/pull/1108), [#1129](https://github.com/Naveax/Nexowire/pull/1129). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K07:** T-431, T-432, T-433, T-434, T-435 (**5**); kaynak [#1100](https://github.com/Naveax/Nexowire/pull/1100), [#1125](https://github.com/Naveax/Nexowire/pull/1125). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K08:** T-437, T-438, T-439, T-440, T-441, T-442 (**6**); kaynak [#1106](https://github.com/Naveax/Nexowire/pull/1106), [#1128](https://github.com/Naveax/Nexowire/pull/1128). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K09:** T-443, T-444, T-446 (**3**); kaynak [#1099](https://github.com/Naveax/Nexowire/pull/1099), [#1127](https://github.com/Naveax/Nexowire/pull/1127), [#1137](https://github.com/Naveax/Nexowire/pull/1137). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K10:** T-449, T-450, T-452, T-454 (**4**); kaynak [#1116](https://github.com/Naveax/Nexowire/pull/1116), [#1142](https://github.com/Naveax/Nexowire/pull/1142). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K11:** T-456, T-457, T-458, T-459, T-460 (**5**); kaynak [#1102](https://github.com/Naveax/Nexowire/pull/1102), [#1135](https://github.com/Naveax/Nexowire/pull/1135). #1135 main'e alındı; diğer K11 kapsamı hosted/provider kabulü değil.
- **K12:** T-462, T-463, T-464, T-466 (**4**); kaynak [#1109](https://github.com/Naveax/Nexowire/pull/1109). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K13:** T-467, T-468, T-469, T-470, T-471, T-472 (**6**); kaynak [#1112](https://github.com/Naveax/Nexowire/pull/1112), [#1134](https://github.com/Naveax/Nexowire/pull/1134). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K14:** T-473, T-474, T-475, T-476, T-477, T-478 (**6**); kaynak [#1117](https://github.com/Naveax/Nexowire/pull/1117), [#1123](https://github.com/Naveax/Nexowire/pull/1123), [#1140](https://github.com/Naveax/Nexowire/pull/1140). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K15:** T-479, T-480, T-481, T-482, T-483, T-484 (**6**); kaynak [#1110](https://github.com/Naveax/Nexowire/pull/1110). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K16:** T-485, T-486, T-487, T-488, T-489 (**5**); kaynak [#1105](https://github.com/Naveax/Nexowire/pull/1105), [#1121](https://github.com/Naveax/Nexowire/pull/1121). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K17:** T-491, T-492, T-493, T-494, T-495, T-496 (**6**); kaynak [#1113](https://github.com/Naveax/Nexowire/pull/1113). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K18:** T-497, T-498, T-499, T-500, T-501 (**5**); kaynak [#1107](https://github.com/Naveax/Nexowire/pull/1107), [#1119](https://github.com/Naveax/Nexowire/pull/1119), [#1139](https://github.com/Naveax/Nexowire/pull/1139). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K19:** T-503, T-504, T-505, T-506, T-507, T-508 (**6**); kaynak [#1111](https://github.com/Naveax/Nexowire/pull/1111), [#1124](https://github.com/Naveax/Nexowire/pull/1124), [#1136](https://github.com/Naveax/Nexowire/pull/1136). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.
- **K20:** T-509, T-510, T-511, T-512, T-513, T-514 (**6**); kaynak [#1118](https://github.com/Naveax/Nexowire/pull/1118), [#1130](https://github.com/Naveax/Nexowire/pull/1130), [#1141](https://github.com/Naveax/Nexowire/pull/1141). CI ve fiziksel kabulü KNN raporuna göre ayrı kontrol et.

### P005 henüz tamamlanmayan 28 görev — A005'te BITTI sayılmadı
- T-398, T-399, T-400, T-403, T-404, T-405, T-406, T-407, T-408, T-409, T-410, T-411, T-412, T-416, T-417, T-418, T-430, T-436, T-445, T-447, T-448, T-451, T-453, T-455, T-461, T-465, T-490, T-502.
- **K01** 429 RED/#1068 owner/gerçek browser; **K02** long-Unicode CSS/source RED, Chromium NOT_RUN; **K03** P005 hiçbir görev denenmedi; **K04** 401/403 RED, owner #1068/Windows; **K06/K07** real release/source ve #1068; **K09** kaynak-historik gate kısmi; **K10** browser screenshot; **K11/K12** main-push CI/CSV ölçümü/test discovery; **K16** Windows canlı process; **K18** sonraki metrik test. Tamamlanma kanıtı gelmeden otomatik kapama yok.

### CI ve owner bekleyen gerçek riskler
- K13 [#1134](https://github.com/Naveax/Nexowire/pull/1134) ayrı fork `delegated-noncore.yml` kaynak CI **4/4 hosted PASS**, K09/K16 seçili testleri Node22/24 üzerinde **12/12 PASS** ama ana required CI'da **6 delegated test seçilmiyor**; bu scope `NOT_PROVEN`.
- [#1118](https://github.com/Naveax/Nexowire/pull/1118) Node22 FAIL, [#1130](https://github.com/Naveax/Nexowire/pull/1130) Node24 FAIL, [#1141](https://github.com/Naveax/Nexowire/pull/1141) Node22 FAIL, [#1120](https://github.com/Naveax/Nexowire/pull/1120) WSL2 FAIL. Bazı durumlarda yerel TAP 48–50 PASS ile korunmuş `ci.yml` sabit test sayısı 41 çakışıyor; owner #1096 workflow code protected.
- [#1068](https://github.com/Naveax/Nexowire/pull/1068) web owner ve [#1096](https://github.com/Naveax/Nexowire/pull/1096) CORE/Broker/SQLite owner açık. K01 pairingId/token/429 ve K04 admin 401/403 gerçek RED owner source değiştirilmeden kapanmaz. Fiziksel Work-PC/gerçek Agent-Hub/provider 24h soak NOT_RUN.

---

# ARŞİV — A004 | 2026-11-07

## P004 iki köle çalıştırması: teslim ve açıklar
- **104/120** P004 görev kimliği ilgili KNN tarafından **yerel kaynak/test/doküman seviyesinde** teslim olarak kaydedildi. **Bunlar ana proje/cihaz kabulü değildir**; dosya ve PR kanıtı KNN'nin kendi raporunda. Geriye kalan 16 kimlik P005 görev bölümlerinde açık/bağımlı olarak taşındı.
- [PR #1102](https://github.com/Naveax/Nexowire/pull/1102) (K11) 7/7 exact-head PR CI başarısından sonra ŞEF tarafından **upstream main'e squash MERGED**; `b5a3f8840517d65ecbd6a018699c4c8bdde09987`, kaynak kapasite iddiasını UNKNOWN olarak ayırır. Canlı S5 ölçüm kabulü değildir.
- Son kontrol S004'ten beri **67 commit** ve 20/20 KNN raporu okundu; P004 120 yeni görev sayacı önceki 0/120'den yerel 104/120'ye ulaştı. P004 HAVUZ 16/20 benzersiz sahiplenildi. Ana projede bu döngüde 1 non-core PR merge edildi; issue kapatma yok.

### KNN başına P004 yerel teslim kimlikleri (kayıt/PR kanıtıyla)
- **K01:** T-255, T-258, T-259 (3); [#1114](https://github.com/Naveax/Nexowire/pull/1114). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K02:** T-261, T-262, T-263, T-264, T-265 (5); [#1101](https://github.com/Naveax/Nexowire/pull/1101), [#1126](https://github.com/Naveax/Nexowire/pull/1126). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K03:** T-267, T-268, T-269 (3); [#1103](https://github.com/Naveax/Nexowire/pull/1103). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K04:** T-273, T-274, T-276 (3); [#1104](https://github.com/Naveax/Nexowire/pull/1104), [#1120](https://github.com/Naveax/Nexowire/pull/1120). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K05:** T-279, T-280, T-281, T-282, T-283, T-284 (6); [#1115](https://github.com/Naveax/Nexowire/pull/1115), [#1122](https://github.com/Naveax/Nexowire/pull/1122). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K06:** T-285, T-286, T-287, T-288, T-289, T-290 (6); [#1108](https://github.com/Naveax/Nexowire/pull/1108), [#1129](https://github.com/Naveax/Nexowire/pull/1129). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K07:** T-291, T-292, T-293, T-294, T-295, T-296 (6); [#1100](https://github.com/Naveax/Nexowire/pull/1100), [#1125](https://github.com/Naveax/Nexowire/pull/1125). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K08:** T-297, T-298, T-299, T-300, T-301, T-302 (6); [#1106](https://github.com/Naveax/Nexowire/pull/1106), [#1128](https://github.com/Naveax/Nexowire/pull/1128). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K09:** T-303, T-305, T-306, T-307, T-308 (5); [#1099](https://github.com/Naveax/Nexowire/pull/1099), [#1127](https://github.com/Naveax/Nexowire/pull/1127). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K10:** T-312, T-313 (2); [#1116](https://github.com/Naveax/Nexowire/pull/1116). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K11:** T-315, T-316, T-317, T-318, T-319, T-320 (6); [#1102](https://github.com/Naveax/Nexowire/pull/1102). #1102 upstream main'e girdi, diğerleri kaynak QA seviyesinde.
- **K12:** T-321, T-322, T-323, T-324, T-325, T-326 (6); [#1109](https://github.com/Naveax/Nexowire/pull/1109). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K13:** T-327, T-328, T-329, T-330, T-331, T-332 (6); [#1112](https://github.com/Naveax/Nexowire/pull/1112). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K14:** T-333, T-334, T-335, T-336, T-337, T-338 (6); [#1117](https://github.com/Naveax/Nexowire/pull/1117), [#1123](https://github.com/Naveax/Nexowire/pull/1123). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K15:** T-340, T-341, T-342, T-343, T-344 (5); [#1110](https://github.com/Naveax/Nexowire/pull/1110). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K16:** T-345, T-346, T-347, T-348, T-349, T-350 (6); [#1105](https://github.com/Naveax/Nexowire/pull/1105), [#1121](https://github.com/Naveax/Nexowire/pull/1121). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K17:** T-351, T-352, T-353, T-354, T-355, T-356 (6); [#1113](https://github.com/Naveax/Nexowire/pull/1113). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K18:** T-357, T-358, T-359, T-360, T-361, T-362 (6); [#1107](https://github.com/Naveax/Nexowire/pull/1107), [#1119](https://github.com/Naveax/Nexowire/pull/1119). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K19:** T-363, T-364, T-365, T-366, T-367, T-368 (6); [#1111](https://github.com/Naveax/Nexowire/pull/1111), [#1124](https://github.com/Naveax/Nexowire/pull/1124). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.
- **K20:** T-369, T-370, T-371, T-372, T-373, T-374 (6); [#1118](https://github.com/Naveax/Nexowire/pull/1118), [#1130](https://github.com/Naveax/Nexowire/pull/1130). Teslim düzeyi kaynak/yerel, hosted ve gerçek cihaz sonucunu PR/KNN kaydında ayrı oku.

### Tamamlanmadı / bağımlı (16 kimlik — arşivde TAMAMLANDI sayılmıyor)
- T-256, T-257, T-260, T-266, T-270, T-271, T-272, T-275, T-277, T-278, T-304, T-309, T-310, T-311, T-314, T-339.
- Sebepler KNN bazında P005 **Önceki açık** alanında: owner #1068 web bekleme, K01 pairingId/token RED, K04 admin 401/403 RED, K10 Chromium socket EPERM, K12 tarihsel CSV/cihaz, fiziksel Windows/provider NOT_RUN. Bunları P005 yeni teslim sayacına ekleme.

### P004 HAVUZ: 16 benzersiz sahip, 4 boş
- **T-375** → **K08**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1106](https://github.com/Naveax/Nexowire/pull/1106), [#1128](https://github.com/Naveax/Nexowire/pull/1128).
- **T-377** → **K19**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1111](https://github.com/Naveax/Nexowire/pull/1111), [#1124](https://github.com/Naveax/Nexowire/pull/1124).
- **T-378** → **K06**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1108](https://github.com/Naveax/Nexowire/pull/1108), [#1129](https://github.com/Naveax/Nexowire/pull/1129).
- **T-379** → **K11**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1102](https://github.com/Naveax/Nexowire/pull/1102).
- **T-380** → **K08**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1106](https://github.com/Naveax/Nexowire/pull/1106), [#1128](https://github.com/Naveax/Nexowire/pull/1128).
- **T-381** → **K20**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1118](https://github.com/Naveax/Nexowire/pull/1118), [#1130](https://github.com/Naveax/Nexowire/pull/1130).
- **T-382** → **K04**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1104](https://github.com/Naveax/Nexowire/pull/1104), [#1120](https://github.com/Naveax/Nexowire/pull/1120).
- **T-383** → **K06**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1108](https://github.com/Naveax/Nexowire/pull/1108), [#1129](https://github.com/Naveax/Nexowire/pull/1129).
- **T-384** → **K18**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1107](https://github.com/Naveax/Nexowire/pull/1107), [#1119](https://github.com/Naveax/Nexowire/pull/1119).
- **T-385** → **K02**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1101](https://github.com/Naveax/Nexowire/pull/1101), [#1126](https://github.com/Naveax/Nexowire/pull/1126).
- **T-387** → **K16**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1105](https://github.com/Naveax/Nexowire/pull/1105), [#1121](https://github.com/Naveax/Nexowire/pull/1121).
- **T-388** → **K20**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1118](https://github.com/Naveax/Nexowire/pull/1118), [#1130](https://github.com/Naveax/Nexowire/pull/1130).
- **T-389** → **K07**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1100](https://github.com/Naveax/Nexowire/pull/1100), [#1125](https://github.com/Naveax/Nexowire/pull/1125).
- **T-390** → **K14**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1117](https://github.com/Naveax/Nexowire/pull/1117), [#1123](https://github.com/Naveax/Nexowire/pull/1123).
- **T-393** → **K17**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1113](https://github.com/Naveax/Nexowire/pull/1113).
- **T-394** → **K15**; yerel/QA kanıtı ilgili KNN durum dosyasında. [#1110](https://github.com/Naveax/Nexowire/pull/1110).

**Boş kalan:** T-376, T-386, T-391, T-392 (P005 HAVUZ'a taşındı).

**Çifte sahiplenme çözümü — küçük numara tek asıl sahibi:**
- T-379: K11 devam, K12 ek testi ayrı kanıt olarak korunur.
- T-382: K04 devam, K05 #1122 ayrı test kanıtı.
- T-383: K06 devam, K07 #1125 ayrı doküman QA.
- T-385: K02 devam, K16 #1121 ve K20 #1130 ayrı QA kanıtı.

### Kabulde açık bulgular (bitmiş sayılmaz)
- K01 [#1114](https://github.com/Naveax/Nexowire/pull/1114): boş/whitespace pairingId/token kontrolü gerçek owner web kaynakta RED; K04 [#1104](https://github.com/Naveax/Nexowire/pull/1104): admin 401/403 owner adayına karşı 4/6 test FAIL.
- K13 [#1112](https://github.com/Naveax/Nexowire/pull/1112): ana CI 52 delegated testinin 43'ü doğrudan/kalıp kapsama, kalanları gerçek çalışma kanıtı yok; exact SHA 7/7 genel CI tek başına yeterli değil.
- K20 [#1118](https://github.com/Naveax/Nexowire/pull/1118): Node22 hosted CI FAIL, browser job cancelled. Gerçek Windows, iki bilgisayar ve provider/soak acceptance NOT_RUN.
- 32 yeni fork PR'nın yalnız biri (#1102) upstream main'e merge edildi, kalan 31 Draft açık; bunlar üretime kabul değil.

---

# ARŞİV — A003 | 2026-11-07

## P002 sonrası doğrulanmış kayıt özeti
- ŞEF, son S002 snapshot'ından sonra 34 ekip commit'ini ve 20 KNN raporunu okudu. Aşağıda **köle tarafından raporlanan yerel teslimler** ve açık kısımlar var; tüm testleri ŞEF bağımsız çalıştırmadı. Source PR kapalı/CI yarıda/yerel PASS = fiziksel veya issue kabulü değildir.
- 36 SinsiVinci PR'ının **30'u closed ve doğrudan merged_at=null**, **6'sı açık Draft** (#1010/#1011/#1015/#1016/#1030/#1035). Ama kaynak test/docs'un belli parçaları Ömer'in birleşmiş koordinatör PR'larında gerçek main'e alındı: #1054, #1055, #1057, #1058, #1059, #1061, #1063, #1066, #1070, #1071. Özellikle #1066 K06/07/08; #1070 K11/12/18; #1071 K09. Aktarımın tamlığını PR/fark SHA'sı belirler.
- **T-235 çakışma düzeltmesi:** K02 ve K07 kayıtlarında görünür. PROTOKOL küçük numara kuralına göre K02 sahibi; K07 artefaktı ayrı tarihî QA'dır, bu ID ikinci teslim sayılmaz. K09 T-179–184 uzakta WIP, 'BITTI' denmedi.
- P003'ün yeni issue görevleri T-255'ten başlar; aşağıdaki eski T-ID'ler tekrar kullanılmaz.

| Köle | P002 teslim/kısmi ID kaydı | Kaynak PR | Kanıtın sınırı |
|---|---|---|---|
| K01 | T-138, T-141, T-144; T-142/T-143 kısmi | #1011 | Ekran negatifleri; gerçek OAuth/browser NOT_RUN |
| K02 | T-145–T-150, T-235 | #1010, #1033 | 17/17 ve 12/12 offline test raporlandı; T-235 tek sahip |
| K03 | T-151–T-153 (yerel kapsam); T-133 kısmi | #1016 | 13/13 offline; gerçek klavye/viewport NOT_RUN |
| K04 | T-154, T-155, T-157, T-238; T-156 uygulanamaz | #1015, #1037 | Admin kayıtları ve fixture; NVDA/gerçek mobil NOT_RUN |
| K05 | T-136, T-158–T-162, T-253 | #1019 | HTML erişilebilirlik negatif testleri, gerçek okuyucu NOT_RUN |
| K06 | T-137, T-163–T-167 | #1018 | Windows kurulum dokümanı/testleri; imza ve kurulum canlı değil |
| K07 | T-168–T-173; T-235 ÇAKIŞMA, K02 sahibi | #1013, #1034 | Self-host doküman QA; #1034 ayrı artefakt ama T-235 ikinci kez sayılmıyor |
| K08 | T-135, T-174–T-178, T-249 | #1014, #1035 | MCP yüzey/yanıt QA; #1035 hâlâ açık Draft |
| K09 | T-179–T-184 yerel WIP, ARŞİV YOK | #1017, #1028 | Uzaktan yayımlanmadığı için bitmiş sayılmadı |
| K10 | T-126, T-185–T-188, T-239; T-059 fiziksel açık | #1020 | Offline browser kanıt taslağı; gerçek screenshot NOT_RUN |
| K11 | T-189–T-194, T-242 | #1029 | Maliyet/CSV 8 yeni offline test; #1070 owner birleşimi |
| K12 | T-195–T-199, T-252; T-071 CSV açık | #1024 | Loopback QA, gerçek provider yükü değil; #1070 birleşimi |
| K13 | T-130, T-200, T-202–T-204; T-201 kısmi | fork #1 | 3-job fork CI yalnız kendi exact SHA; upstream farklı |
| K14 | T-132, T-205–T-209, T-254; T-084 dış CI/PR açık | #1022 | 32 sentetik PR denetim testi; gerçek merge kararı değil |
| K15 | T-210–T-214, T-246; T-086 kabul açık | #1026 | İsim/cihaz kartı offline test; #1068 kaynak bağımlı |
| K16 | T-091–T-096 yerel kabul; source PR closed | #1041 | 32/32 yerel test beyanı; upstream taşınma/cihaz kanıtı ayrı |
| K17 | T-215–T-220, T-244 | #1030, #1038 | Metadata QA; #1030 açık Draft, symlink TODO açık |
| K18 | T-107, T-108, T-139, T-221, T-222; T-223 JSON kısmi | #1023 | Metrik QA; CSV K11 bağımlı; #1070 birleşimi |
| K19 | T-224–T-229, T-245 | #1025, #1040 | Aktarım UX/UNKNOWN kuralı offline; gerçek iki-PC NOT_RUN |
| K20 | T-127, T-230, T-232–T-234, T-241; T-231 açık | #1031, #1036, #1039 | Issue/CI kanıt denetimi; main üstündeki kaynak yeniden kontrol edilmeli |

## İleriye devredilen eski engeller
T-006, T-016, T-017, T-021, T-022, T-059, T-071, T-084, T-086, T-133, T-142, T-143, T-201, T-223, T-231 ve K09'un T-179–184 yerel WIP işleri eski kayıtlarında korunur; P003 bunları yeni güvenli issue işleriyle değiştirir. Hâlâ soruna hizmet ediyorlarsa owner ile bağımlılık olarak izlenir.

## TARİHSEL A002 — eski gün bilgileri bugüne ilişkin değildir

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
