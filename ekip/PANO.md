# ŞEF PANO P011 | 19 Kasım 2026

**ACTIVE policy:** Ömer'in 19 Kasım TXT talimatı kabul. P010 [immutable](https://github.com/SinsiVinci/Nexowire-fork/blob/9869f29270278d8e8e07ea4042b7793917bce164/ekip/PANO.md) tarihsel. Eski KNN dosyaları P007/P008/P009'da kaldı; ilk mesajda P011/V008 oku, K01 öncelikli.

**Owner #1160:** `151c6a89a493ca72906d39262456d72367cb6fa0` Draft, 319 changed path, **5/6 workflow success**, [General CI 44512743805](https://github.com/Naveax/Nexowire/actions/runs/44512743805) son kontrolde IN_PROGRESS. **#1228:** `4802faa06edca1f531a52cac56476d6b8573df91` ayrı Draft, 33 portable/184 PASS Node22 ve Node24; [CI 44513480838](https://github.com/Naveax/Nexowire/actions/runs/44513480838) IN_PROGRESS. İkisinin de main merge/release/physical kabulü YOK. Main `52d452f717d891eeaf4c2b9aff3c6e1ea68369b0` değişmedi.

**#1205:** 650 TS, eski glob 43 seçti/607 bu komutta atlandı. Diğer CI workflow yürütmelerini dosya bazında birleştirmeden 607 NOT_RUN veya 650 PASS deme.

**39 PR:** 5 exact OWNER_PORTED, 9 evolved OWNER_PORTED_REVIEW, 6 CI_REPAIR, 19 UNIQUE_FIX_ADAYI. [Tam kanıt matrisi](https://github.com/SinsiVinci/Nexowire-fork/blob/ekip/ekip/PR_SINIFLANDIRMA_20261119.md). UNIQUE_FIX_ADAYI != kanıtlı fix. #1160'a kod port edildi ise başka ajan aynı test/kodu ikinci kez üretmez. Owner'ın açık onayı olmadan yeni PR, close, main merge yok.

**K01–K20: her biri 1 aktif + 5 sıra, W-421..W-540.**

### K01 | 429 Retry-After / bağlantı
**Aktif W-421:** K01 hâlâ P008: güncel owner web/connect.js üzerinde 429/401/403 RED var mı, V002 ile baştan kontrol et
**Kuyruk (5):**
- W-422: #1114 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-423: Kendi 429 retry-after / bağlantı alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-424: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-425: Bağlantı UI ve pairing fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-426: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K02 | mobile CSS / gerçek PNG
**Aktif W-427:** #1138 owner'a taşındı; #1101 iki benzersiz QA yolunun viewport davranışını doğrula
**Kuyruk (5):**
- W-428: #1101 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-429: Kendi mobile css / gerçek png alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-430: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-431: Mobil/klavye/zoom fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-432: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K03 | Bridge requestId / dashboard
**Aktif W-433:** #1143 kapandı; whitespace-only requestId ve pending/UNKNOWN owner #1160 üzerinde yeniden üret
**Kuyruk (5):**
- W-434: #1103 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-435: Kendi bridge requestid / dashboard alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-436: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-437: Bridge ekran durumu fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-438: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K04 | admin 401/403 / stale state
**Aktif W-439:** #1133/#1144 kapandı; #1160 admin JS 401/403/503 ve 403→200 akışında RED/PASS test et
**Kuyruk (5):**
- W-440: #1104 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-441: Kendi admin 401/403 / stale state alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-442: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-443: Gerçek admin/Windows fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-444: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K05 | A11y assertion/owner port
**Aktif W-445:** 13 yoldan 9 exact 4 evolved; özgün negatif assertion kaybını kanıtla
**Kuyruk (5):**
- W-446: #1146 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-447: Kendi a11y assertion/owner port alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-448: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-449: NVDA/keyboard/zoom fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-450: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K06 | installer sürüm/sha
**Aktif W-451:** Yayımlanan latest v1.0.8 ve v1.0.9-exp.0 owner çalışma sürümünü ayır
**Kuyruk (5):**
- W-452: kapalı #1108/#1129 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-453: Kendi installer sürüm/sha alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-454: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-455: Gerçek Windows kurulum/rollback fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-456: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K07 | self-host/CURRENT_USER vs SYSTEM
**Aktif W-457:** Üç yolda owner EVOLVED: selfhost belgelerinin SYSTEM/DPAPI riskini gizleyip gizlemediğini incele
**Kuyruk (5):**
- W-458: #1100 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-459: Kendi self-host/current_user vs system alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-460: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-461: Reboot/DPAPI kurulum fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-462: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K08 | MCP denied/UNKNOWN
**Aktif W-463:** MCP hata kaynağı karşılaştırması; #1035 TODO güvenlik engeli ve 0-job ayrımı
**Kuyruk (5):**
- W-464: #1106 ve #1035 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-465: Kendi mcp denied/unknown alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-466: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-467: Canlı MCP/Cloudflare fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-468: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K09 | roadmap/issue CI kanıtı
**Aktif W-469:** 12 exact, 2 owner-absent dosyadaki benzersiz negatif kanıtın değerini belirle
**Kuyruk (5):**
- W-470: #1145 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-471: Kendi roadmap/issue ci kanıtı alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-472: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-473: Yayımlı sürüm iddiası fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-474: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K10 | browser/screenshot
**Aktif W-475:** 4 exact 1 evolved; screenshot negatif assertion kaybı ve gerçek PNG artefaktını kontrol et
**Kuyruk (5):**
- W-476: #1142 ve #1116 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-477: Kendi browser/screenshot alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-478: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-479: Gerçek browser/NVDA fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-480: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K11 | S5 fiyat/UNKNOWN
**Aktif W-481:** 2/2 owner exact: K14'e superseded kapanış kanıtı ver, kod yazma
**Kuyruk (5):**
- W-482: #1148 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-483: Kendi s5 fiyat/unknown alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-484: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-485: Provider fatura/24h fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-486: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K12 | S5 loopback cleanup
**Aktif W-487:** İki evolved benchmark + dört owner-absent testte kapanış/AbortSignal gerçek bug var mı
**Kuyruk (5):**
- W-488: #1109 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-489: Kendi s5 loopback cleanup alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-490: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-491: Gerçek provider soak fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-492: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K13 | CI file-level union
**Aktif W-493:** #1160 650 tracked/43 default/607 omit ile #1228 33 portable dosyayı SHA bazında yürütme birleştirme planı
**Kuyruk (5):**
- W-494: #1134/#1205 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-495: Kendi ci file-level union alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-496: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-497: CI içindeki yürütme kanıtı fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-498: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K14 | 39 PR gerçek sınıflandırma
**Aktif W-499:** 5 exact, 9 evolved, 6 CI, 19 unique adayı 39 PR source/CI owner teslim listesine çevir
**Kuyruk (5):**
- W-500: #1153 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-501: Kendi 39 pr gerçek sınıflandırma alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-502: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-503: Owner close/merge onayı fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-504: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K15 | yanlış cihaz/yetki
**Aktif W-505:** #1110 sekiz owner-absent QA yolunun son #1160 UI üzerinde yanlış cihaz/403 RED olup olmadığını kontrol et
**Kuyruk (5):**
- W-506: #1110 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-507: Kendi yanlış cihaz/yetki alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-508: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-509: İki gerçek cihaz fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-510: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K16 | Windows taskkill / SYSTEM
**Aktif W-511:** #1105 owner-port ve #1121 unique descendant testini owner #1160 code ile eşleştir
**Kuyruk (5):**
- W-512: #1121 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-513: Kendi windows taskkill / system alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-514: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-515: SYSTEM/DPAPI/SQLite fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-516: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K17 | Skill symlink/race
**Aktif W-517:** #1160 registry realpath/lstat/açık handle korumasını yeni source'da doğrula; eski bug fikrini kör kabul etme
**Kuyruk (5):**
- W-518: #1150/#1030 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-519: Kendi skill symlink/race alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-520: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-521: OS gerçek symlink fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-522: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K18 | transfer + maliyet kanıtı
**Aktif W-523:** #1139 iki dosya exact, diğer benzersiz unit testi/virtual ACK real behavior'dan ayır
**Kuyruk (5):**
- W-524: #1139/#1119/#1107 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-525: Kendi transfer + maliyet kanıtı alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-526: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-527: Gerçek 2-PC ACK fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-528: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K19 | dosya aktarımı >256 MiB
**Aktif W-529:** #1147 owner-port ve #1136 unique CI testi; HTTP413/receiver-SHA ile gerçek 2-PC arasında kanıt farkı
**Kuyruk (5):**
- W-530: #1136, kapalı #1147 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-531: Kendi dosya aktarımı >256 mib alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-532: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-533: Gerçek iki-PC 256MiB+ fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-534: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

### K20 | CI FAIL/0-job
**Aktif W-535:** Dört CI fail: 80/52/48/50 TAP PASS fakat sabit41 gate exit1; iki job0 nedeni ayrıca UNVERIFIED
**Kuyruk (5):**
- W-536: #1152/#1141/#1130/#1118/#1030/#1035 exact HEAD/changed-path/owner `151c6a89a493` source blob ve SHA eşdeğerliği çıkar.
- W-537: Kendi ci fail/0-job alanında son #1160 source ile gerçek RED mi, owner-port mu? Kanıtlı negatif fixture bul; gereksiz test üretme.
- W-538: Exact PR CI run+job'da kendi testin gerçekten seçilmiş mi, TAP exit ve SKIP/TODO ayrımını yaz.
- W-539: CI exact run ve TAP fiziksel kanıtı yoksa PHYSICAL_NOT_RUN, çevrimdışı/local testten gerçek kabul çıkarma.
- W-540: OWNER_PORTED / UNIQUE_FIX_ADAYI / CI_REPAIR / NO_DELTA kararını, etkileyen SHA ve owner'a gereken dar işlemle kendi KNN kaydına yaz.

## Sahipsiz pool W-541..W-560
- W-541: #1160 yeni altı workflow'un current exact SHA audit'i
- W-542: #1228 33-file portable source SHA reviewed ledger
- W-543: #1205 root 574 testten kaç dosya ayrı exact workflow'da gerçekten koştu
- W-544: #1205 immediate 43, deep 33 için explicit proof listesi
- W-545: #1161 protected state root ACL ve SQLite cutover NO-GO
- W-546: #1160 LocalMachine DPAPI owned physical acceptance
- W-547: #1160 gerçek Broker authority/CORE privilege physical kabul
- W-548: #588 220KiB HTTP413 katman sınırı kanıtı
- W-549: #588 256MiB+ authenticated two-device ACK/SHA
- W-550: #485 signed installer ve rollback gerçek Windows
- W-551: #1146 changed dört accessibility assertion diff
- W-552: #1150 evolved Skill symlink test diff
- W-553: #1100 selfhost owner evolved source güvenlik uyarısı
- W-554: #1145 iki owner-absent CI evidence negative
- W-555: #1109 2 benchmark evolved ve 4 unique test
- W-556: #1110 device UX 8 owner-absent/real RED
- W-557: #1152 80 TAP fixed41 failure ve gerçek exit1
- W-558: #1141 52 TAP fixed41 failure
- W-559: #1130 48 TAP fixed41 failure
- W-560: #1118 50 TAP fixed41 failure

**Havuz sahipliği:** Önce 19 KNN kaydını kontrol et. Havuz yazma veya yeni PR izni değil. Main CI, CORE, Windows, Hub, Broker, auth, SQLite, production owner'dadır. Yalnız var olan açık kendi PR dalında gerçek benzersiz hata izole edilirse test/docs düzelt; KAPALI PR'a yazma. Owner tekil izin olmadan source merge/PR close yok. Fiziksel SYSTEM cutover sadece yetkili yürütücü tarafından.
