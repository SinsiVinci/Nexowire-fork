# PR_DENETIM_20261118 — 18 Kasım 2026, P010

## Değişim / metodoloji
- P009 gözlem 13 Kasım: 59 SinsiVinci OPEN. Şimdi: **39 OPEN; 20 CLOSED without direct GitHub merge** (16 Kasım owner cleanup); owner #1068 ve #1096 da closed-unmerged. **Bu source'ların bazıları owner #1160 içinde taşınmış**, yalnız path overlap tümünü doğrulamaz. Main `52d452f717d891eeaf4c2b9aff3c6e1ea68369b0` değişmedi.
- Fork `ekip` P009 commit 8d42d036… sonrası 25 commit ve 19 KNN dosyası değişti; K01 P008. KNN raporu source/local/hosted/physical tek metrikte birleştirilmez.
- Open 39 PR için exact PR HEAD, o SHA'ya bağlı en son Actions workflow run id ve genel conclusion okundu. Bu tablo **workflow seviyesidir**: "SUCCESS" içindeki nested testlerin tamamının gerçekten çalıştığı veya fiziksel cihazın kabul ettiği anlamına gelmez. GitHub HEAD değiştikçe tablo tekrar doğrulanır.

| PR | HEAD ilk 8 | Actions run | Genel CI |
|---|---|---|---|
| [#1153](https://github.com/Naveax/Nexowire/pull/1153) | `bd19bdb6` | [43751410287](https://github.com/Naveax/Nexowire/actions/runs/43751410287) | SUCCESS |
| [#1152](https://github.com/Naveax/Nexowire/pull/1152) | `ae2e951c` | [43751269378](https://github.com/Naveax/Nexowire/actions/runs/43751269378) | FAILURE |
| [#1150](https://github.com/Naveax/Nexowire/pull/1150) | `94c70d5e` | [43751019362](https://github.com/Naveax/Nexowire/actions/runs/43751019362) | SUCCESS |
| [#1148](https://github.com/Naveax/Nexowire/pull/1148) | `f4881199` | [43751103563](https://github.com/Naveax/Nexowire/actions/runs/43751103563) | SUCCESS |
| [#1146](https://github.com/Naveax/Nexowire/pull/1146) | `fb5311b4` | [43751021953](https://github.com/Naveax/Nexowire/actions/runs/43751021953) | SUCCESS |
| [#1145](https://github.com/Naveax/Nexowire/pull/1145) | `e86e963d` | [43751049473](https://github.com/Naveax/Nexowire/actions/runs/43751049473) | SUCCESS |
| [#1142](https://github.com/Naveax/Nexowire/pull/1142) | `c7b24e90` | [43751048690](https://github.com/Naveax/Nexowire/actions/runs/43751048690) | SUCCESS |
| [#1141](https://github.com/Naveax/Nexowire/pull/1141) | `a13dd68d` | [42474379692](https://github.com/Naveax/Nexowire/actions/runs/42474379692) | FAILURE |
| [#1140](https://github.com/Naveax/Nexowire/pull/1140) | `ec1f38d8` | [42474586650](https://github.com/Naveax/Nexowire/actions/runs/42474586650) | SUCCESS |
| [#1139](https://github.com/Naveax/Nexowire/pull/1139) | `51d84004` | [42474146267](https://github.com/Naveax/Nexowire/actions/runs/42474146267) | SUCCESS |
| [#1137](https://github.com/Naveax/Nexowire/pull/1137) | `4869fe31` | [42474070651](https://github.com/Naveax/Nexowire/actions/runs/42474070651) | SUCCESS |
| [#1136](https://github.com/Naveax/Nexowire/pull/1136) | `ed5fa137` | [42474024855](https://github.com/Naveax/Nexowire/actions/runs/42474024855) | SUCCESS |
| [#1134](https://github.com/Naveax/Nexowire/pull/1134) | `ec640fc1` | [42474504806](https://github.com/Naveax/Nexowire/actions/runs/42474504806) | SUCCESS |
| [#1132](https://github.com/Naveax/Nexowire/pull/1132) | `1f1d912b` | [42473898223](https://github.com/Naveax/Nexowire/actions/runs/42473898223) | SUCCESS |
| [#1130](https://github.com/Naveax/Nexowire/pull/1130) | `8a5bc56e` | [42412252743](https://github.com/Naveax/Nexowire/actions/runs/42412252743) | FAILURE |
| [#1128](https://github.com/Naveax/Nexowire/pull/1128) | `5f2b654d` | [42411934421](https://github.com/Naveax/Nexowire/actions/runs/42411934421) | SUCCESS |
| [#1127](https://github.com/Naveax/Nexowire/pull/1127) | `32f76f57` | [42411927416](https://github.com/Naveax/Nexowire/actions/runs/42411927416) | SUCCESS |
| [#1126](https://github.com/Naveax/Nexowire/pull/1126) | `332e211e` | [42412128181](https://github.com/Naveax/Nexowire/actions/runs/42412128181) | SUCCESS |
| [#1122](https://github.com/Naveax/Nexowire/pull/1122) | `aaa96bde` | [42411789831](https://github.com/Naveax/Nexowire/actions/runs/42411789831) | SUCCESS |
| [#1121](https://github.com/Naveax/Nexowire/pull/1121) | `1b97d634` | [42411781654](https://github.com/Naveax/Nexowire/actions/runs/42411781654) | SUCCESS |
| [#1119](https://github.com/Naveax/Nexowire/pull/1119) | `6515f377` | [42411734969](https://github.com/Naveax/Nexowire/actions/runs/42411734969) | SUCCESS |
| [#1118](https://github.com/Naveax/Nexowire/pull/1118) | `d51d9d4c` | [42411030903](https://github.com/Naveax/Nexowire/actions/runs/42411030903) | FAILURE |
| [#1117](https://github.com/Naveax/Nexowire/pull/1117) | `822b4247` | [42410614643](https://github.com/Naveax/Nexowire/actions/runs/42410614643) | SUCCESS |
| [#1116](https://github.com/Naveax/Nexowire/pull/1116) | `6642a138` | [42514827400](https://github.com/Naveax/Nexowire/actions/runs/42514827400) | SUCCESS |
| [#1115](https://github.com/Naveax/Nexowire/pull/1115) | `2a74d9d2` | [42410556545](https://github.com/Naveax/Nexowire/actions/runs/42410556545) | SUCCESS |
| [#1114](https://github.com/Naveax/Nexowire/pull/1114) | `7b4b2c75` | [43285226036](https://github.com/Naveax/Nexowire/actions/runs/43285226036) | SUCCESS |
| [#1113](https://github.com/Naveax/Nexowire/pull/1113) | `079cef00` | [42474111487](https://github.com/Naveax/Nexowire/actions/runs/42474111487) | SUCCESS |
| [#1112](https://github.com/Naveax/Nexowire/pull/1112) | `3ca2cd12` | [42411620884](https://github.com/Naveax/Nexowire/actions/runs/42411620884) | SUCCESS |
| [#1111](https://github.com/Naveax/Nexowire/pull/1111) | `c5119a65` | [42410254755](https://github.com/Naveax/Nexowire/actions/runs/42410254755) | SUCCESS |
| [#1110](https://github.com/Naveax/Nexowire/pull/1110) | `39ffb0c7` | [43751196755](https://github.com/Naveax/Nexowire/actions/runs/43751196755) | SUCCESS |
| [#1109](https://github.com/Naveax/Nexowire/pull/1109) | `d14a24c5` | [42485197012](https://github.com/Naveax/Nexowire/actions/runs/42485197012) | SUCCESS |
| [#1107](https://github.com/Naveax/Nexowire/pull/1107) | `fed3b1c6` | [42410160885](https://github.com/Naveax/Nexowire/actions/runs/42410160885) | SUCCESS |
| [#1106](https://github.com/Naveax/Nexowire/pull/1106) | `da7b04aa` | [43751127747](https://github.com/Naveax/Nexowire/actions/runs/43751127747) | SUCCESS |
| [#1104](https://github.com/Naveax/Nexowire/pull/1104) | `247be5e2` | [42410125818](https://github.com/Naveax/Nexowire/actions/runs/42410125818) | SUCCESS |
| [#1103](https://github.com/Naveax/Nexowire/pull/1103) | `4d581bef` | [42500656198](https://github.com/Naveax/Nexowire/actions/runs/42500656198) | SUCCESS |
| [#1101](https://github.com/Naveax/Nexowire/pull/1101) | `3d4408e8` | [42410091949](https://github.com/Naveax/Nexowire/actions/runs/42410091949) | SUCCESS |
| [#1100](https://github.com/Naveax/Nexowire/pull/1100) | `6d8a555c` | [42485195932](https://github.com/Naveax/Nexowire/actions/runs/42485195932) | SUCCESS |
| [#1035](https://github.com/Naveax/Nexowire/pull/1035) | `e0de0062` | [41338306321](https://github.com/Naveax/Nexowire/actions/runs/41338306321) | ZERO_JOB |
| [#1030](https://github.com/Naveax/Nexowire/pull/1030) | `bc97cd84` | [41338216468](https://github.com/Naveax/Nexowire/actions/runs/41338216468) | ZERO_JOB |

## Somut portlar / geriye kalan
- Owner [#1068](https://github.com/Naveax/Nexowire/pull/1068) K01–K04 UI source port: 18 path #1160'da, 15 exact/3 evolved owner açıklamasıyla; kaynak Draft kapatıldı, main MERGED değil.
- Owner [#1149 comment](https://github.com/Naveax/Nexowire/pull/1149) yedi nested testin source-scoped integration port'unu ve 27/27 + 33/33 local kabulünü not etmiş; #1149 kapalı, no main merge.
- Owner [#1147 comment](https://github.com/Naveax/Nexowire/pull/1147), [#1151](https://github.com/Naveax/Nexowire/pull/1151), [#1138](https://github.com/Naveax/Nexowire/pull/1138), [#1108](https://github.com/Naveax/Nexowire/pull/1108) kapanışlarında taşınan dosya/blobs ve fiziksel NO_GO bilgisi var. Kapalı PR yeni kod hedefi değildir.
- 18 Kasım cross-ref changed-path: #1146 13/13, #1148 2/2, #1142 5/5, #1150 2/2, #1139 2/2, #1134 8/8, #1153 20/20 owner #1160 ile **PATH OVERLAP**; blob eşitliği ayrıca gerekir. Bağımsız Git blob read: #1148 2/2 EXACT, #1139 2/2 EXACT, #1142 seçilen 2/2 EXACT, #1150 doc EXACT / test EVOLVED. Bu durum #1146/#1153'ün bütün içeriği byte-identical demek değildir. #1145 12/14 path, iki benzersiz kanıt dosyası.
- K01 #1114 (3 unique), K02 #1101 (2 unique), K03 #1103 (2 unique), K04 #1104 (3 unique), K08 #1106 (15 unique), K12 #1109 (6 unique), K15 #1110 (8 unique), K16 #1121 (1 unique), K19 #1136 (2 unique) gibi OPEN PR'lar için owner #1160'dan `changed-path diff` eksikliği **aynı davranışın çözülmediğini kanıtlamaz**; gerçek kaynak testi gerekir.

## #1205 — test keşfinin en kritik bağımsız bulgusu
- Owner #1160 exact HEAD `10420aa6399cd8c9ae3a2360132e7007656898b4`. [Test Discovery Inventory run 44167664875](https://github.com/Naveax/Nexowire/actions/runs/44167664875), Ubuntu Node24 job 134337948038 çıktı: **649 tracked** TS test files; **574 root**, **42 one-directory**, **33 deeper**. `node --test --import tsx test/**/*.test.ts` default shell glob'unu globstar olmadan kullanan yol **42** seçer, **607** tracked .test.ts bu default çağrıda yok. Bu fail closed *coverage discovery* bulgusudur. Diğer 5 workflow exact HEAD SUCCESS: General CI 44167664680, Release 44167664266, AI-03 44167664288, Portable Root 44167664432, Discovery 44167664875. Portable Root onaylı subset, 649/649 kabul değil.
- #1205 owner riskine bağımsız QA/rapor yap; ana `.github/workflows/ci.yml` sahibi Ömer. Gerçek Windows SYSTEM cutover #1161 açık. #1160 Draft main değil; hiçbiri fiziksel/production GO değildir.

## Önerilen entegrasyon kararı (şimdilik sadece taslak)
1. Owner #1160 313 changed paths ve ported QA'nın exact blob/CI karşılaştırmasını sürdür. 39 open PR'ın gerçekten ayrı dosyası olanları, host tests named callsite ve owner acceptance var ise değerlendir. Aynı dosya/semantik düzeyinde source'ları tekrar üretmeyin.
2. Owner açık yazılı PR listesi/onayı olmadan hiçbir upstream main merge, issue close veya PR close yok. Kapatma önerisi merge demek değil.
3. Yayımlanan latest `v1.0.8` (2026-10-30). `v1.0.9-exp.0` #1226 yalnız integration branch, kullanıcıya release olarak anlatma.
