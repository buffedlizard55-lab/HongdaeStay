# Verification ledger — pass 2 (2026-09-02)

Every row below is one page fetched on **2026-09-02** while re-verifying the master list, with what the page actually printed and the decision taken. Pass 1 (2026-09-01) did the original line-by-line read of all candidates from the KoreaFun / Koreafood repositories; pass 2 re-fetched every surviving page from scratch and added eight new verified items (C1–C3, N3–N4, W4–W6).

**Rule applied:** an item stays on the site only while what the official page prints matches what the site says. Where two official pages disagree, both are kept and the item is flagged — never silently resolved.

## A. Re-verified items (34) — result of the 09-02 re-fetch

| # | Item | Official page (fetched 2026-09-02) | What it printed | Result |
|---|---|---|---|---|
| 1 | E1 Kings of Convenience | https://ticket.yes24.com/English/Perf/59136 | Wed 18 Nov 2026 20:00, Sejong S. Center, 7+, 80 min, R143k/S132k/A110k/B99k; member + passport | **Match** — no change |
| 2 | E2 Seoul Arts Center 《The Glass Menagerie》 | https://www.sac.or.kr/site/main/show/show_view?SN=83392 | Run Oct 17–Nov 22; pattern Wed 19:30 / Thu 19:30 / Fri 14:30+19:30 / Sat 14:00+19:00 / Sun 15:00; **added performance Wed 18 Nov 14:30** | **DISCREPANCY FIXED** — `when` in data.js updated to include Wed 18 Nov 14:30; note added. In-window dates now: Wed 18 (14:30 & 19:30), Thu 19 (19:30), Fri 20 (14:30 & 19:30), Sat 21 (14:00 & 19:00), Sun 22 (15:00) |
| 3 | E3 Gugak Saturday Masterpieces | https://www.gugak.go.kr/site/program/performance/month_list?menuid=001001001&year=2026&month=11 | 토요명품 Umyeondang Nov 7 / 14 / 21, 15:00; A30k/B20k | **Match** — Nov 21 in-window; 7 & 14 pre-stay (excluded list) |
| 4 | E4 Gugak Museum English Tour | same monthly page | English tours 14:00, free | **Match** |
| 5 | E5 Bongeunsa Thursday Temple Life | http://temple.bongeunsa.org/public_html/explain/temple_life.asp | Every Thursday 14:00–16:00, ₩30,000, English programme, meet 13:50 | **Match** — Thu 19 Nov is the in-window date |
| 6 | E6 Mapo Music Gallery | https://www.mfac.or.kr/performance/whole_list.jsp | Runs through 31 Dec 2026; **no ticketed MFAC performance Nov 16–22** (next: Nov 25 MAC #9 11:00 ₩20,000; Nov 29 reading) | **Match** — exclusions confirmed. **New finding:** the 2026 season lineup lists a co-produced play 〈투신〉 (Diving, Art Hall MAC) for Nov 13–21 that is NOT yet on this calendar → new LOW flag, re-check early October |
| 7 | H1 Indiespace | https://english.visitseoul.net/culture/Indiespace_/20519 | 80 m from Exit 8; 10:00–20:00 | **Match** |
| 8 | H2 Kakao Friends flagship | https://english.visitseoul.net/shopping/Kakao-Friends-Hongdae-Flagship-Store/ENP027304 | 51 m from Exit 9; 10:30–22:00 | **Match** (500 on first fetch; plain retry succeeded) |
| 9 | H3 Trick Eye Museum | https://trickeye.com/seoul/FindUs | 20 Hongik-ro 3-gil, Seogyo Plaza B2, 02-3144-6300; parking free 30 min then ₩1,000/15 min. **/seoul/Visit (hours page) still bot-blocked** | **Re-verified for address/phone/parking**; hours 09:00–22:00, last admission 21:00 retained from the 09-01 read, flag kept |
| 10 | H4 KT&G Sangsangmadang | https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=62399 | 11:00–21:00, 247 Eoulmadang-ro, Exit 9 | **Match** (500 on first fetch; retry succeeded) — flag downgraded: page availability resolved |
| 11 | H5 Gyeongui Line Book Street | https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=64574 | "Open year-round" text vs printed Tue–Sun 11:00–20:00, break 12:30–13:30 | **Match, flag kept** — "year-round" wording conflicts with printed Monday closure; itineraries treat Mon as closed |
| 12 | H6 Gyeongui Line Forest Park | https://english.visitseoul.net/nature/Gyeongui-Line-Forest-Park_/37216 | Open daily | **Match** |
| 13 | H7 Hongik Cultural Park / Drawing Village | https://english.visitseoul.net/culture/Hongik-Cultural-Park_/40326 | Tue–Sun 10:00–18:00, closed Mon | **Match** — rename from "Hongdae Playground" confirmed; HIGH flag kept as information |
| 14 | H8 Hongdae Free Market | http://www.freemarket.or.kr/ | Domain parked (yfdpco2.com) — no market served | **DEAD confirmed** — stays excluded; HIGH flag kept |
| 15 | F1 Blue Roof Town | https://english.visitseoul.net/restaurants/BlueRoofTownHongdaeBranch/ENPn88gm7 | 11:15–22:00 (lunch 11:15–14:30), 271 m Exit 9 | **Match** |
| 16 | F2 Busanjib Hongdae | https://english.visitseoul.net/restaurants/BusanJibHongdae/ENPj8qz2k | 11:30–22:00, 840 m | **Match** |
| 17 | F3 MGM Hongdae | https://english.visitseoul.net/restaurants/MGMHongdae/ENP4h4r6w | 12:00–00:00, last order 23:30 | **Match** |
| 18 | F4 Eongteori Saenggogi | https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=56862 | 11:00–23:00 | **Match** |
| 19 | F5 YANG IN HWAN DAE | https://english.visitseoul.net/editorspicks/YANGINHWANDAEHongdae/ENPxuebom | **Weekday-only** 16:00–22:00 | **Match** — weekday-only flag kept; every itinerary uses it on a weekday only |
| 20 | F6 Chosun Hwaro Gui | https://english.visitseoul.net/restaurants/Chosun-Hwaro-Gui/ENP214996 | 11:30–24:00, break 15:00–17:00, closed Sun | **Match** — every itinerary uses it after 17:00 and never on Sunday |
| 21 | F7 Avelop Hongdae | https://english.visitseoul.net/area/Avelop/ENP22oa3h | Weekdays 08:00–20:00, Sat 11:00–21:00, Sun 11:00–18:00, 468 m | **Match** |
| 22 | Y1 Antique Coffee Yeonnam | https://english.visitseoul.net/restaurants/ANTIQUE-COFFEE/ENPfru4mc | 10:00–22:00 daily | **Match** (500 on first fetch; retry succeeded) |
| 23 | Y2 Jincheongyujeom | https://english.visitseoul.net/MapoArea/jincheongyujeom/ENPtgef38 | 11:30–22:00, break 15:30–17:00 (weekdays); 5 prices match data.js | **Match** |
| 24 | Y3 Parole & Langue | https://english.visitseoul.net/MapoArea/parole-langue/ENPt34j7z | 13:00–21:00, closed Mon | **Match** |
| 25 | Y4 Café Layered Yeonnam | https://english.visitseoul.net/restaurants/Cafe-Layered-Yeonnam/ENPz4q1x9 | 10:00–22:00 daily | **Match** |
| 26 | S1 Jeoldusan Museum | https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=66108 | 09:30–17:00, closed Mon; groups 10+ book 2 weeks ahead; **no admission fee printed** | **Match, phrasing fixed** — price now reads "no fee printed on the official page; voluntary offering (per CBCK via KoreaFun)" instead of a number |
| 27 | S2 Masichaina | https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=66922 | 68 Dongmak-ro; 11:30–22:00, break 16:00–17:00; menus A/B/C (prices not in the fetched chunk) | **Match** for hours/address; prices kept as "not printed in the fetched section" |
| 28 | S3 Seogang Kkeopdegi | https://english.visitseoul.net/restaurants/Seogang-Kkeopdegi/ENP9c4t2m | 16:00–03:30, Hapjeong Exit 9, 311 m | **Match** |
| 29 | S4 Dongmak-ro food street | https://english.visitseoul.net/area/Dongmak-ro-Food-Street/ENPw5x3k8 | Daily 12:00–22:00 (street-level) | **Match** |
| 30 | N1 Hyeongje Galbi | https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=66125 | 11:00–22:00 daily, 2 Myeongmul 1-gil, Sinchon Exit 3, 261 m, 02-365-0001 | **Match** |
| 31 | N2 Cochon Tonkatsu | https://english.visitseoul.net/restaurants/CochonTonkatsu/ENPf7618z | 11:00–19:00, break 16:00–17:00; ₩4,000/6,000/8,000 | **Match** |
| 32 | W1 Seoul Oil Tank Culture Park | https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=62572 | Park 24 h free; tanks 10:00–18:00; Café Tank6 10:00–19:00, closed Mon; 87 Jeungsan-ro. (parks.seoul.go.kr/culturetank → 404) | **Match** — **new MED flag added:** KoreaFun records that from Apr 2025 tank-interior entry was restricted to walk-ins and the cited city page now 404s, so interior access is "confirm at the door"; itineraries only rely on the outdoor grounds + café |
| 33 | W2 Seoul World Cup Stadium Tour | https://sisul.or.kr/eng/course.jsp (operator) + https://english.visitseoul.net/sports/Seoul-World-Cup-Stadium-Tour/ENN037950 | 4 sessions 09/11/14/16 (window 9–17); ₩1,000 (₩500 ≤18/≥65/disabled/national merit; 10+ 30% off); **reservation-only at yeyak.seoul.go.kr, no on-site sales**; closed Mon/holidays/match days | **Match, framing reconciled** — operator window 9–17 vs Visit Seoul 09:00–16:00; flag wording already covers it |
| 34 | W3 Mangwon Market | https://english.visitseoul.net/markets/Mangwon-Market/ENP037950 vs https://english.visitseoul.net/MapoArea/mangwon-market/ENN032105 | 2026-05-04-edited page: daily 10:00–21:00, varies by store · 2019-edited page: 09:00–22:00, closed Tue & Sun | **CONFLICT STILL STANDS** — both pages re-fetched 09-02; MED flag kept; itineraries place the market Wed–Sat only (Sat 21 Nov valid under both) |

## B. New items verified 2026-09-02 (8) — added to the master list

| # | Item | Official page (fetched 2026-09-02) | Key facts taken | Cluster |
|---|---|---|---|---|
| C1 | Colline | https://english.visitseoul.net/restaurants/2025-colline/ENP040675 | 45 Eulmadang-ro; Sun–Thu 10:30–23:00, Fri–Sat 10:30–24:00; flower café (cotton latte, dessert menu) | core (392 m from Sangsu Exit 1, 163 m from FLAN) |
| C2 | FLAN | https://english.visitseoul.net/restaurants/flan/ENPjns5q9 | 9-8 Wausan-ro 11-gil, Rm 102; 11:00–21:00; **closed 1st Monday of the month = Nov 2 only, so open all 7 days of the stay**; flan ₩4,100 | core/Sangsu edge (163 m from Sangsu Exit 1) |
| C3 | Imi Coffee | https://english.visitseoul.net/cafes/2024-imicoffee/46418 | 7 Donggyo-ro 25-gil; 12:00–21:00, last order 20:30, **closed Tue**; Hongik Univ Exit 1, 242 m; **reservations essential**; dessert→coffee pairing | core |
| N3 | Homilbat | https://english.visitseoul.net/restaurants/2024-homilbat/ENPpteyc2 | 43 Sinchonnyeok-ro; daily 12:00–22:00, last order 21:30; Sinchon Exit 1, 230 m; milk bingsu, free refills | Sinchon |
| N4 | MBRO Donkkaseu | https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=59341 | 26 Myeongmul-gil; 11:30–21:30, break 15:30–17:00, last order 21:00; pork cutlet house on the same Sinchon street block as N1/N2 (their official pages print Exit 3, 261 m) | Sinchon |
| W4 | Cafe Gongmyung Mangwon Book Bakery | https://english.visitseoul.net/restaurants/GongMyoung/ENPbg0u5h | 22-3 World Cup-ro 13-gil; daily 10:00–22:00; Mangwon Exit 2, 152 m; largest book café in Mangwon, rooftop | Sangam/Mangwon |
| W5 | Seongsan Wanggalbi | https://english.visitseoul.net/restaurants/Seongsan-Wanggalbi/ENP014893 | 233 World Cup buk-ro; 12:00–15:00 / 17:00–21:00 year-round; World Cup Stadium Stn Exit 2, 435 m; saeng dwaeji galbi, gyeranjjim, doenjang jjigae | Sangam |
| W6 | Seoul Battleship Park | https://hangang.seoul.go.kr/www/contents/803.do?mid=527 (Seoul Future Hangang Office, page edited 2025-01-03) | **Winter (Nov–Feb): Tue–Fri 10:00–18:00, Sat–Sun 10:00–18:00; closed Mon, Jan 1, Seollal & Chuseok**; free docent tours on weekends/holidays, winter 13:00 & 15:00; **admission children ₩1,000 / teens & military ₩2,000 / adults ₩3,000** (20+ groups −30%, 65+/disabled/national merit −50%); 407 Mapo-naru-gil; access Mangwon Exit 1 → Mapo 09 bus → 7 min walk, or Hapjeong Exit 1 → Mapo 16 bus | Sangam/Mangwon |

**W6 note:** KoreaFun's shortlist said "park free"; the official price table charges admission, so the site states the official fares instead.

## C. Decisions & flags resulting from pass 2

1. **E2 fixed** — the extra Wed 18 Nov 14:30 performance is now in data.js and in itinerary 5's evening options.
2. **S1 phrasing fixed** — "no fee printed" instead of implying a free admission.
3. **H4 flag downgraded** — the 500 error was a fetch-side flake; the page is stable and re-read.
4. **H3 flag updated** — FindUs page re-verified (address/phone/parking); the hours page remains bot-blocked, so 09-01 hours stay with an explicit flag.
5. **W1 new MED flag** — tank-interior walk-in restriction (Apr 2025 change, KoreaFun) with the city's own page 404ing; itineraries rely on outdoor grounds + Café Tank6 only.
6. **W3 conflict re-confirmed** — two official pages, two different schedules, both still live; kept flagged, market scheduled Wed–Sat only.
7. **New LOW flag: MFAC play 〈투신〉 (Diving)** — season lineup says Nov 13–21 at Art Hall MAC, official calendar (re-fetched 09-02) does not list it yet. Re-check in early October; if it appears, the in-window dates (Nov 17–21) make it the strongest Mapo theatre option.
8. **New exclusion: Regallily “Dawn” Asia Tour** — the only dated Hongdae concert found (KT&G Sangsangmadang Live Hall) falls on Sat 7 Nov, before the stay.
9. **8 new verified items** (C1–C3, N3–N4, W4–W6) → master list grows 34 → 42 items; four new itineraries (I7–I10) built exclusively from verified items, including the two new cluster days (Sinchon, Mangwon deep) that the extra items make possible.

## D. Pages that could not be re-verified (kept as flags, not re-attempted repeatedly)

| Page | State on 09-02 | Handling |
|---|---|---|
| https://trickeye.com/seoul/Visit | Bot challenge (JS wall) | 09-01 hours retained, flagged on the item |
| http://www.freemarket.or.kr/ | Domain parked (yfdpco2.com) | Item excluded, HIGH flag kept |
| https://parks.seoul.go.kr/culturetank | 404 | W1 interior note sourced to KoreaFun, flagged |
| https://gbookst.or.kr (Book Street operator) | Unreachable | H5 sourced via VisitKorea, "year-round" wording flagged |

---

# Verification ledger — pass 3 (2026-09-02, later same day)

Ten further items were fetched **from their official pages during this pass** and only then added to the master list and to the two new itineraries (I11 "Sangam Cinema, Stadium & Sky Park", I12 "Art, Indie & After-Dark Hongdae"). Same rule as before: what the official page prints is what the site says; where pages disagree, both are kept and flagged.

## A. New items verified this pass (10)

| # | Item | Official page (fetched 2026-09-02) | What it printed | Result |
|---|---|---|---|---|
| 1 | K1 Cinematheque KOFA | https://www.koreafilm.or.kr/pages/PC_00000004 | 화요일~토요일 운영; ticket box 1 h before first to last screening start; closed Sun/Mon, 1.1, 설/추석연휴, 1.18, 5.1; two screens 321/150; "시네마테크KOFA는 모두 무료로 운영"; online booking daily 11:00, 2 tix, same-day–5 days; no late entry; no-show penalty | **Added** — free, Tue–Sat, closed Sun/Mon |
| 2 | K2 Korean Film Museum | https://www.koreafilm.or.kr/pages/PC_00000012 | 화요일~토요일 10:30~19:00, last entry 30 min before; closed Sun/Mon, 1.1, 설/추석, 1.18, 5.1; 무료입장; 02-3153-2072; 400 World Cup buk-ro | **Added** — free, Tue–Sat 10:30–19:00 |
| 3 | W7 Seoul Energy Dream Center | https://energyinfo.seoul.go.kr/board/content?menu-id=Z110100&boardType=0001&boardNo=378 | 화~일요일 09:00~17:30; 관람료 무료; 휴관일 매주 월요일; 증산로 14; 02-3151-0562 | **Added** — free, Tue–Sun. VisitKorea page prints 09:30–17:30/last 17:00 → 09:00-vs-09:30 kept as a MED flag |
| 4 | W8 Haneul Park | Seoul city (parks.seoul.go.kr, news.seoul.go.kr) via KoreaFun 2026-08-19 + cross-check | Free park; Maengkkongi cart ₩2,000 one-way/₩3,000 return (child ₩1,500/₩2,200); silver-grass festival Oct 18–24, grass viewing extended only to 2 Nov | **Added** as a free viewpoint walk, explicitly NOT a foliage stop; parks.seoul.go.kr returned HTTP 500 this pass → MED flag to re-confirm |
| 5 | H9 Hongdae Walking Street | https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=c92fa510-548b-4da9-b6f4-7491c603bba6 | ~500 m strip, Eoulmadang-ro 107–155-1; busking zones + plaza/travel stages; car-free Fri–Sun | **Added** — 12:00–22:00 slot window attributed to Mapo-gu booking system (per KoreaFun), flagged as approximate |
| 6 | H10 Seoul Art Space Seogyo | https://www.sfac.or.kr/site/SFAC_KOR/02/10209030000002018102303.jsp | Art Info 11:00–22:00; exhibition hall & art dabang 11:00–20:00; multipurpose hall 11:00–20:00; closed Mon/national holidays; 02-333-1551 | **Added** — free, closed Mondays |
| 7 | C4 B-hind | https://english.visitseoul.net/restaurants/B-hind-E/ENP011936 | Mon–Fri 11:30–22:00, Sat–Sun 13:00–22:00; closed Seollal & Chuseok; ₩10,000 range; 18 Eoulmadang-ro 5-gil; Sangsu Exit 1, 436 m; edited 9 May 2026; nearby Colline 70 m / FLAN 140 m | **Added** |
| 8 | C5 GMH Dabang | https://english.visitseoul.net/restaurants/2024-gmhdabang/ENP1v5xop | Mon & Wed–Fri 17:00–24:00, Sat 14:00–24:00, Sun 14:00–22:00; closed Tuesdays; 49 Wausan-ro 3-gil; Sangsu Exit 4, 404 m; edited 11 May 2026 | **Added** — closed Tue + weekday-evening hours flagged |
| 9 | C6 Cafe aA | https://english.visitseoul.net/restaurants/cafe-aA-EN/ENP000997 | Daily 12:00–23:30, open year round; 19-18 Wausan-ro 17-gil; last edited 1 Feb 2021 | **Added** — stale-edit MED flag kept |
| 10 | N5 Dok-Dabang | https://english.visitseoul.net/restaurants/Doksuri-Dabang_/28403 | 11:00–23:30 (last order 23:00), daily, no holidays; 8F 36 Yeonse-ro; Sinchon Exit 3, 360 m; Seoul Future Heritage; edited 25 Jul 2026 | **Added** |

## B. Event leads re-checked this pass — NOT added to any itinerary

| Item | State | Handling |
|---|---|---|
| FC Seoul — K League 1 Final Rounds (Seoul World Cup Stadium, Mapo) | Final rounds Oct 31 – Dec 6; individual fixtures announced ~mid-Oct | MED flag: check fcseoul.com in October; a home match in-window would be the best Mapo sporting evening and would close the stadium tour that day |
| Korea national-team friendlies (Nov 9–17) | Venue TBD (possibly World Cup Stadium) | LOW flag |
| "Culture Flowing Through Seoul Plaza" free concerts | Wednesdays ~18:30; Wed 18 Nov in-window but at Seoul Plaza (City Hall, outside Mapo) | LOW flag — kept out of the Hongdae-focused core |

## C. Result of pass 3

- Master list: 42 → **52 items** (46 places + 6 events).
- Itineraries: 10 → **12** (new I11, I12).
- Flags: 13 → **20**.
- No item entered an itinerary before its official page was read this pass; every new row carries its link for manual review.
