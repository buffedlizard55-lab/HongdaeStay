/* HongdaeStay — verified data
 * Every record below was opened and read on its official page during the
 * verification pass dated 2026-09-01 (see `verifiedOn`). Nothing is inferred.
 * status: "confirmed" = dated 2026 event confirmed in-window on an official page
 *         "verified"  = place/venue; hours + address read off an official page
 *         "recheck"   = real, but at least one field could not be confirmed
 *         "closed"    = do not plan
 */
window.HS = (function () {
  const STAY = {
    hotel: "Mercure Ambassador Seoul Hongdae",
    address: "144 Yanghwa-ro, Mapo-gu, Seoul 04050",
    geo: "37.555135, 126.922511",
    phone: "+82 2-3774-1101",
    station: "Hongik Univ. Station (Line 2 · AREX · Gyeongui–Jungang) — Exit 9",
    walk: "2-minute walk from the station (hotel description); AREX 5-minute walk",
    checkin: "Monday, November 16, 2026 — from 15:00",
    checkout: "Sunday, November 22, 2026 — by 12:00",
    breakfast: "Breakfast buffet 07:00–10:00 (last entry 09:30)",
    facilities: "270 rooms · restaurant & bar · fitness center · coin laundry · free Wi-Fi · 100% non-smoking",
    src: [
      ["Accor official hotel page (B696)", "https://all.accor.com/hotel/B696/index.en.shtml"]
    ],
    verifiedOn: "2026-09-02"
  };

  /* ---------------- CLUSTERS ---------------- */
  const CLUSTERS = {
    core: { name: "Hongdae core", note: "Everything walkable from the hotel — Hongik Univ. Station exits 1/3/6/8/9. No subway needed.", color: "#c0392b" },
    yeonnam: { name: "Yeonnam-dong", note: "North of the hotel along Gyeongui Line Forest Park. Hongik Univ. Exit 3 then 380–840 m on foot.", color: "#8e44ad" },
    sangsu: { name: "Sangsu / Hapjeong", note: "South-west of the hotel. Walkable in 15–25 min along Wausan-ro / Yanghwa-ro, or one stop on Line 2/6.", color: "#16a085" },
    sinchon: { name: "Sinchon", note: "One stop east on Line 2 (Hongik Univ. → Sinchon), or ~20 min walk.", color: "#2980b9" },
    sangam: { name: "World Cup Park / Sangam", note: "Line 6 from Hapjeong — World Cup Stadium, Mangwon and Digital Media City (the film archive). A short hop out; each of the three stops is a cluster for part of a day.", color: "#e67e22" },
    away: { name: "Ticketed outings (outside Mapo)", note: "Only used for dated, confirmed shows. Each is a single-destination evening or half-day.", color: "#7f8c8d" }
  };

  /* ---------------- DATED EVENTS IN WINDOW ---------------- */
  const EVENTS = [
    {
      id: "E1", status: "confirmed", cluster: "away",
      name: "Kings of Convenience — “SJF at the Theater 2026”",
      when: "Wed 18 Nov 2026 · 20:00",
      detail: "Sejong Center (Gwanghwamun). Running time 80 minutes. Age limit 7 and over. Booking requires a YES24 account with passport identity verification.",
      price: "R ₩143,000 / S ₩132,000 / A ₩110,000 / B ₩99,000",
      transit: "Hongik Univ. → Line 2 → transfer Line 5 → Gwanghwamun. Single destination; nothing else scheduled that evening.",
      src: [["YES24 Ticket — official English booking page (Perf 59136)", "https://ticket.yes24.com/English/Perf/59136"]],
      verifiedOn: "2026-09-02",
      readsAs: "Page prints: Date Nov 18 2026 · Venue Sejong Center · Age 7+ · Time 80 minutes · R/S/A/B prices as listed."
    },
    {
      id: "E2", status: "confirmed", cluster: "away",
      name: "Seoul Arts Center — 《The Glass Menagerie》 (유리동물원)",
      when: "In-window performances: Wed 18 Nov 14:30 & 19:30 · Thu 19 Nov 19:30 · Fri 20 Nov 14:30 & 19:30 · Sat 21 Nov 14:00 & 19:00 · Sun 22 Nov 15:00",
      detail: "CJ Towol Theater, Seoul Arts Center (Seocho). Run 2026-10-17 → 2026-11-22. Korean language. 120 minutes. Elementary-school age and above. No Monday/Tuesday performances.",
      price: "R ₩99,000 / S ₩77,000 / A ₩55,000 / OP ₩99,000",
      transit: "Seocho. Single-destination outing; ~45–55 min each way from Hongdae.",
      src: [["Seoul Arts Center official production page (SN=83392)", "https://www.sac.or.kr/site/main/show/show_view?SN=83392"]],
      verifiedOn: "2026-09-02",
      readsAs: "Page prints: 기간 2026-10-17 ~ 2026-11-22 · 시간 수,목 19:30, 금 14:30/19:30, 토 14:00/19:00, 일 15:00 (*11월 18일(수) 14:30) | 월,화 공연없음 · 장소 CJ 토월극장 · 관람시간 120분 · R 99,000 / S 77,000 / A 55,000 / OP 99,000. NOTE (re-check 2026-09-02): the printed weekday pattern means Wed 18 Nov has BOTH the regular 19:30 slot AND the added 14:30 matinee — the first pass had listed only the matinee.",
    },
    {
      id: "E3", status: "confirmed", cluster: "away",
      name: "National Gugak Center — 2026 토요명품 (Saturday Masterpieces)",
      when: "Sat 21 Nov 2026 · 15:00",
      detail: "Umyeondang hall, National Gugak Center (Seocho). Listed on the official November 2026 monthly schedule as performance_id 37050.",
      price: "A ₩30,000 / B ₩20,000",
      transit: "Seocho. Pairs on the same campus with the Gugak Museum English tour at 14:00 (E4).",
      src: [
        ["National Gugak Center — November 2026 monthly schedule", "https://www.gugak.go.kr/site/program/performance/month_list?menuid=001001001&year=2026&month=11"],
        ["Performance detail (id 37050)", "https://www.gugak.go.kr/site/program/performance/detail?menuid=001001001&performance_id=37050"]
      ],
      verifiedOn: "2026-09-02",
      readsAs: "November 2026 list prints three Saturday dates: Nov 7, Nov 14, Nov 21 — all 15:00, 우면당, A석 30,000원 / B석 20,000원. Nov 21 is the only one inside the stay."
    },
    {
      id: "E4", status: "confirmed", cluster: "away",
      name: "Gugak Museum — English Tour",
      when: "Sat 21 Nov 2026 · 14:00",
      detail: "국악박물관, same Seocho campus as E3. Listed on the official November 2026 schedule as performance_id 37733.",
      price: "No price printed on the official listing (museum entry is free)",
      transit: "Immediately before the 15:00 토요명품 concert — same site, no travel between the two.",
      src: [
        ["National Gugak Center — November 2026 monthly schedule", "https://www.gugak.go.kr/site/program/performance/month_list?menuid=001001001&year=2026&month=11"],
        ["English Tours detail (id 37733)", "https://www.gugak.go.kr/site/program/performance/detail?menuid=001001001&performance_id=37733"]
      ],
      verifiedOn: "2026-09-02",
      readsAs: "November 2026 list prints [Gugak Museum] English Tours on Nov 7, Nov 14, Nov 21, each 14:00, 국악박물관, no price field filled."
    },
    {
      id: "E5", status: "confirmed", cluster: "away",
      name: "Bongeunsa — Thursday Temple Life (English)",
      when: "Thu 19 Nov 2026 · 14:00–16:00",
      detail: "Weekly English-language programme for foreign visitors. 14:00–15:00 temple tour · 15:00–15:30 tea ceremony · 15:30–16:00 gold-ink sutra copying. Arrive at the foreigner information desk on the left of the Bongeunsa entrance by 13:50. Walk-in registration or website booking.",
      price: "₩30,000",
      transit: "Gangnam / COEX. Single-destination half-day; can be followed by an SAC evening show (both south of the river).",
      src: [["Bongeunsa Templestay — Temple Life official page", "http://temple.bongeunsa.org/public_html/explain/temple_life.asp"]],
      verifiedOn: "2026-09-02",
      readsAs: "Page prints 목요 템플라이프(외국인): 일정 매주 목요일 오후 2시~4시 · 대상 외국인 · 참가비 3만원 · 진행언어 영어 · 오후 1시 50분까지 봉은사 입구 좌측 외국인 안내소."
    },
    {
      id: "E6", status: "confirmed", cluster: "core",
      name: "Mapo Music Gallery (마포 뮤직 갤러리)",
      when: "Open through 31 Dec 2026 — open every day of the stay",
      detail: "Free exhibition in Gallery MAC at Mapo Art Center, 28 Daeheung-ro 20-gil. Hours 10:00–18:00 (the official listing adds that hours may change at the centre's discretion).",
      price: "Free admission (무료입장)",
      transit: "Mapo Art Center is in Daeheung-dong — Line 6 Daeheung / Gongdeok side, not walkable from the hotel.",
      src: [["Mapo Foundation for Arts and Culture — performance/exhibition schedule", "https://www.mfac.or.kr/performance/whole_list.jsp"]],
      verifiedOn: "2026-09-02",
      readsAs: "Schedule prints 마포 뮤직 갤러리(Mapo Music Gallery) · 기간 2026.04.10 ~ 2026.12.31 · 시간 10:00-18:00 · 장소 갤러리맥 · 가격 무료입장."
    }
  ];

  /* ---------------- PLACES ---------------- */
  const PLACES = [
    /* ---- HONGDAE CORE ---- */
    {
      id: "H1", status: "verified", cluster: "core", type: "Culture",
      name: "Indiespace (인디스페이스)",
      addr: "8F, 176 Yanghwa-ro, Mapo-gu (Wise Park)",
      walk: "Hongik Univ. Station Exit 8, 80 m — the closest cultural venue to the hotel",
      hours: "10:00–20:00, daily, open 365 days a year",
      price: "Per screening",
      note: "Korea's first independent cinema; screens Korean independent films. Programme is Korean-language — check subtitles before booking.",
      src: [["Visit Seoul — Indiespace (ENP040673)", "https://english.visitseoul.net/entertainment/Indiespace/ENP040673"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "H2", status: "verified", cluster: "core", type: "Shopping",
      name: "Kakao Friends Hongdae Flagship",
      addr: "162 Yanghwa-ro, Mapo-gu",
      walk: "Hongik Univ. Station Exit 8, 51 m — ~2 min from the hotel",
      hours: "Daily 10:30–22:00, open year round",
      price: "Free to browse",
      note: "Three-floor character flagship. Good rainy-hour filler right next to the hotel.",
      src: [["Visit Seoul — Kakao Friends Hongdae Flagship (ENP027304)", "https://english.visitseoul.net/shopping/Kakao-Friends-Hongdae-Flagship-Store/ENP027304"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "H3", status: "verified", cluster: "core", type: "Attraction",
      name: "Trick Eye Museum Seoul",
      addr: "B2, Seogyo Plaza, 20 Hongik-ro 3-gil, Mapo-gu",
      walk: "Hongik Univ. Station Exit 9, then ~150 m straight and into the side street (official directions page)",
      hours: "09:00–22:00, last admission 21:00, open every day of the year (연중무휴)",
      price: "⚠️ Not printed on the official site — buy at the door or via the official ticket channel",
      note: "AR trick-art museum. Longest opening hours of anything in the cluster, so it absorbs a late afternoon or a rainy evening.",
      src: [
        ["Trickeye official — opening hours page", "https://www.trickeye.com/seoul/Visit"],
        ["Trickeye official — directions page", "https://www.trickeye.com/seoul/FindUs"]
      ],
      verifiedOn: "2026-09-02",
      flag: "Re-check 2026-09-02: the directions page loaded and re-confirmed the address (Seogyo Plaza B2, 20 Hongik-ro 3-gil) and the Exit-9 walking route. The hours page sat behind a bot check on both days; the 09:00–22:00 / last admission 21:00 / open year-round figures were read from that official hours page during the first pass (2026-09-01). Worth a final look at the door."
    },
    {
      id: "H4", status: "verified", cluster: "core", type: "Culture",
      name: "KT&G Sangsangmadang Hongdae",
      addr: "65 Eoulmadang-ro, Mapo-gu",
      walk: "In the Hongdae core, ~10 min on foot from the hotel (official page gives Hapjeong Exit 3, 760 m)",
      hours: "11:00–21:00, daily, open year round",
      price: "Free to browse; cinema and live-hall events ticketed separately",
      note: "Seven-floor culture complex: design shop, gallery, art-house cinema, basement live hall.",
      src: [["Visit Seoul — KT&G Sangsang Madang (ENP024561)", "https://english.visitseoul.net/area/KT-G-Sangsang-Madang-en/ENP024561"]],
      verifiedOn: "2026-09-02",
      flag: "First pass (2026-09-01): the page returned HTTP 500 on direct fetch and hours were read via search. Re-check 2026-09-02: page loaded normally and printed the same hours (11:00 a.m.–9:00 p.m., daily, open year-round) and address (65 Eoulmadang-ro; Hapjeong Exit 3, 760 m). Flag downgraded — no action needed."
    },
    {
      id: "H5", status: "verified", cluster: "core", type: "Walk",
      name: "Gyeongui Line Book Street (경의선책거리)",
      addr: "35 Wausan-ro 37-gil, Mapo-gu — ~250 m of old trackbed from Hongik Univ. Station Exit 6 to Wau Bridge",
      walk: "Exit 6 — under 5 min from the hotel",
      hours: "11:00–20:00, break 12:30–13:30. Official listing states: open all year round.",
      price: "Free",
      note: "Independent bookshops, children's bookshops, specialist shops and small galleries in glass pavilions along the park.",
      src: [["VisitKorea — G-line Book Street (vcontsId 64574)", "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=64574"]],
      verifiedOn: "2026-09-02",
      flag: "Some secondary guides say the pavilions close on Mondays. The official VisitKorea listing says open all year with a 12:30–13:30 break. Treated as a stroll, not a fixed appointment."
    },
    {
      id: "H6", status: "verified", cluster: "core", type: "Walk",
      name: "Gyeongui Line Forest Park (경의선숲길 / Yeontral Park)",
      addr: "188 Yanghwa-ro, Mapo-gu (Aekyung Tower reference point)",
      walk: "Hongik Univ. Station Exit 3, 447 m",
      hours: "Open park — no closing time published",
      price: "Free",
      note: "6.3 km linear park on the old railway. The Yeonnam-dong stretch (Yeontral Park) is the long green spine that links the Hongdae core to the Yeonnam cafés.",
      src: [["Visit Seoul — Gyeongui Line Forest Park (37216)", "https://english.visitseoul.net/nature/Gyeongui-Line-Forest-Park_/37216"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "H7", status: "recheck", cluster: "core", type: "Park",
      name: "Hongik Cultural Park / “Drawing Village” (홍익문화공원, formerly Hongdae Playground)",
      addr: "19-3 Wausan-ro 21-gil, Mapo-gu",
      walk: "Line 6 Sangsu Station Exit 1, 549 m (official); ~8–10 min from the hotel",
      hours: "10:00–18:00 · Tue–Sun · CLOSED MONDAYS",
      price: "Free admission",
      note: "Reopened December 2025 after environmental improvement works, merged with Red Road and rebranded “Drawing Village”, with a creative centre and shared studios.",
      src: [["Visit Seoul — Hongik Cultural Park (ENP011070), edited 8 Jul 2026", "https://english.visitseoul.net/area/Hongdae-Playground/ENP011070"]],
      verifiedOn: "2026-09-02",
      flag: "IMPORTANT CHANGE. This site is no longer described as an always-open playground: the official page now prints staffed hours 10:00–18:00 and a Monday closure. Check-in day (Mon 16 Nov) is a Monday — treated as closed in every itinerary."
    },
    {
      id: "H8", status: "recheck", cluster: "core", type: "Market",
      name: "Hongdae Free Market (홍대앞 예술시장 프리마켓)",
      addr: "Hongik Cultural Park, 19-3 Wausan-ro 21-gil, Mapo-gu",
      walk: "~8–10 min from the hotel",
      hours: "Historically Saturdays 13:00–18:00, March–November only",
      price: "Free",
      note: "Original-work-only outdoor artist market running since 2002, with an afternoon stage.",
      src: [
        ["Organiser site freemarket.or.kr — DOMAIN NO LONGER SERVES THE MARKET (parked page) as checked 2026-09-01", "http://www.freemarket.or.kr/"],
        ["Visit Seoul — Hongik Cultural Park, the venue", "https://english.visitseoul.net/area/Hongdae-Playground/ENP011070"]
      ],
      verifiedOn: "2026-09-02",
      flag: "NOT CONFIRMED FOR NOV 2026 — DO NOT PLAN AROUND IT. The organiser's own domain no longer resolves to the market, the venue has been rebranded, and TripAdvisor's listing carries a “reported permanently closed” notice. Re-checked 2026-09-02: freemarket.or.kr still serves only a parked/blocked page, so nothing has changed. Sat 21 Nov is left as a walk-past, never as the anchor of a day."
    },
    {
      id: "H9", status: "verified", cluster: "core", type: "Walk / street performance",
      name: "Hongdae Walking Street & Busking Zones (홍대 걷고싶은거리)",
      addr: "Eoulmadang-ro 107–155-1, Seogyo-dong, Mapo-gu — ~500 m pedestrian strip",
      walk: "Hongik Univ. Station Exit 9 — straight ahead, under 2 min from the hotel",
      hours: "Busking slots 12:00–22:00 in two-hour blocks (Mapo-gu booking system); busiest Fri–Sun evenings; the street is car-free Fri–Sun",
      price: "Free to watch",
      note: "Official busking zones, a plaza stage, a travel stage and a meeting square built by the city in 2016–17 so street performers could play legally. Dance crews, bands and solo singers; density peaks Friday–Sunday evening.",
      src: [["Korea Tourism Organization — Hongdae Walking Street (500 m strip, zones, car-free Fri–Sun)", "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=c92fa510-548b-4da9-b6f4-7491c603bba6"]],
      verifiedOn: "2026-09-02",
      flag: "The KTO page (re-fetched 2026-09-02) confirms the ~500 m strip, the numbered busking zones, the plaza/travel stages and the Friday–Sunday car-free rule. The 12:00–22:00 two-hour-block slot window comes from Mapo-gu's zone-booking system as recorded in the KoreaFun repo (enquiries 02-3153-8663) — treat times as approximate; the street is a stroll, never a fixed appointment."
    },
    {
      id: "H10", status: "verified", cluster: "core", type: "Culture / art space",
      name: "Seoul Art Space Seogyo (서교예술실험센터)",
      addr: "Eoulmadang-ro 5-gil, Seogyo-dong, Mapo-gu",
      walk: "Sangsu / Hongdae core — a few minutes' walk from the busking street",
      hours: "Art Info kiosk 11:00–22:00 · exhibition hall & art dabang 11:00–20:00 · multipurpose hall 11:00–20:00 · CLOSED MONDAYS and national holidays",
      price: "Free (programme-dependent; a working art space, not a museum)",
      note: "Seoul Foundation for Arts & Culture's experimental art space in a former ward office: exhibitions, screenings, workshops and forums, plus an outdoor Art Info kiosk listing what is on across Hongdae's independent spaces. What is showing changes constantly — treat as a short check, not a destination. Enquiries 02-333-1551.",
      src: [["Seoul Foundation for Arts and Culture — Seoul Art Space Seogyo facility page", "https://www.sfac.or.kr/site/SFAC_KOR/02/10209030000002018102303.jsp"]],
      verifiedOn: "2026-09-02",
      flag: "Closed Mondays — never scheduled for Mon 16 Nov."
    },
    /* ---- HONGDAE CORE — FOOD ---- */
    {
      id: "F1", status: "verified", cluster: "core", type: "Korean BBQ",
      name: "Blue Roof Town Hongdae Branch",
      addr: "1F, 128 Yanghwa-ro, Mapo-gu",
      walk: "Hongik Univ. Station Exit 9, 271 m — the closest sit-down BBQ to the hotel",
      hours: "11:15–22:00, daily, open year-round",
      price: "Price range printed as ₩30,000",
      note: "Suwon wang galbi and LA galbi; LA-Koreatown styling; English-speaking staff; free wine corkage; step-free access path.",
      src: [["Visit Seoul — Blue Roof Town Hongdae Branch (ENPn88gm7)", "https://english.visitseoul.net/restaurants/BlueRoofTownHongdaeBranch/ENPn88gm7"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "F2", status: "verified", cluster: "core", type: "Korean-Chinese",
      name: "Busanjib Hongdae",
      addr: "2F, 100-6 Eoulmadang-ro, Mapo-gu",
      walk: "~5 min from the hotel, in the Eoulmadang-ro block",
      hours: "11:30–22:00 (last order 21:00)",
      price: "Jjajangmyeon ₩14,000 · LA Galbi ₩38,000",
      note: "Hongdae branch of the Myeongdong Busanjip. Official page: halal ingredients, but alcohol is not sold and there is no Muslim cook on site.",
      src: [["Visit Seoul — Busanjib Hongdae (ENPwpiwpw)", "https://english.visitseoul.net/restaurants/Busanjib-HongdaeKR/ENPwpiwpw"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "F3", status: "verified", cluster: "core", type: "Korean BBQ",
      name: "MGM Hongdae Branch",
      addr: "1F, 8 World Cup buk-ro 4-gil, Mapo-gu",
      walk: "Hongik Univ. Station Exit 1, 379 m",
      hours: "Daily 12:00–00:00 (last order 23:30)",
      price: "Price range printed as ₩20,000",
      note: "Samgyeopsal, galbi and moksal grilled on a cauldron lid, often with minari; staff grill for you. Latest-closing sit-down option in the core — the safe post-show dinner.",
      src: [["Visit Seoul — MGM Hongdae Branch (ENPtojamy)", "https://english.visitseoul.net/MapoArea/2024-MGM/ENPtojamy"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "F4", status: "verified", cluster: "core", type: "Korean BBQ (all-you-can-eat)",
      name: "Eongteori Saenggogi Hongdae (엉터리생고기 홍대)",
      addr: "118 Eoulmadang-ro, Mapo-gu",
      walk: "~6 min from the hotel",
      hours: "11:00–23:00, open all year round",
      price: "Not printed on the official listing",
      note: "All-you-can-eat grilled beef and pork with a salad bar; free rice refills. Cards accepted.",
      src: [["VisitKorea — Eongteori Saenggogi Hongdae (vcontsId 56862)", "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=56862"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "F5", status: "recheck", cluster: "core", type: "Grilled lamb (halal-certified lamb)",
      name: "YANG IN HWAN DAE Hongdae",
      addr: "1F, 86 Wausan-ro 29ga-gil, Mapo-gu",
      walk: "~7 min from the hotel (200 m from Busanjib Hongdae per the official “nearby” list)",
      hours: "Monday to Friday 16:00–22:00 (last order 21:00). Holidays: none.",
      price: "French Rack ₩35,000 · Shoulder Rack ₩33,000",
      note: "Marinated lamb barbecue with halal-certified lamb; alcohol is sold; no Muslim cook on site.",
      src: [["Visit Seoul — YANG IN HWAN DAE Hongdae (ENPxuebom)", "https://english.visitseoul.net/editorspicks/YANGINHWANDAEHongdae/ENPxuebom"]],
      verifiedOn: "2026-09-02",
      flag: "Only Monday–Friday hours are printed. Weekend opening is unknown — every itinerary places it on a weekday (Tue/Wed/Thu/Fri) only."
    },
    {
      id: "F6", status: "verified", cluster: "core", type: "Korean BBQ",
      name: "Chosun Hwaro Gui (조선화로구이)",
      addr: "5 World Cup buk-ro, Mapo-gu (Seogyo-dong)",
      walk: "Hongdae core, ~8 min from the hotel",
      hours: "11:30–24:00 · break 15:00–17:00 · last order 23:30 · CLOSED SUNDAYS",
      price: "Not printed on the official listing",
      note: "Charcoal grill using 1++ Korean beef and domestic pork; boneless Korean galbi is the printed signature.",
      src: [["VisitKorea — Chosun Hwaro Gui (vcontsId 214996)", "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=214996"]],
      verifiedOn: "2026-09-02",
      flag: "Closed Sundays — never scheduled for Sun 22 Nov, and never inside its 15:00–17:00 break."
    },
    {
      id: "F7", status: "verified", cluster: "core", type: "Bakery café",
      name: "Avelop Hongdae Flagship",
      addr: "6 Yanghwa-ro 15an-gil, Mapo-gu",
      walk: "Hongik Univ. Station Exit 1, 468 m",
      hours: "Mon–Fri 08:00–20:00 · Sat–Sun 11:00–21:00",
      price: "Not printed on the official listing",
      note: "Bakery café inside a 1972 house by the architect Kim Chung-up; all bread baked fresh daily. The only cluster café that opens at 08:00 on weekdays — the early-breakfast option.",
      src: [["Visit Seoul — Avelop Hongdae Flagship (ENP22oa3h)", "https://english.visitseoul.net/area/Avelop/ENP22oa3h"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "C1", status: "verified", cluster: "core", type: "Flower café",
      name: "Colline",
      addr: "45 Eulmadang-ro, Mapo-gu",
      walk: "Hongdae core — on the Eoulmadang-ro block, ~10–15 min walk from the hotel (official page: Sangsu Station Exit 1, 392 m)",
      hours: "Sun–Thu 10:30–23:00 · Fri–Sat 10:30–24:00 · daily",
      price: "Price range printed as ₩10,000",
      note: "Café and flower shop run as one; signature is the cotton-latte (latte topped with giant cotton candy). Open late every day of the stay.",
      src: [["Visit Seoul — Colline (ENP040675)", "https://english.visitseoul.net/restaurants/Colline/ENP040675"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "C2", status: "verified", cluster: "core", type: "French dessert",
      name: "FLAN",
      addr: "Room 102, 9-8 Wausan-ro 11-gil, Mapo-gu",
      walk: "Sangsu Station Exit 1, 163 m (official); ~15 min walk from the hotel",
      hours: "11:00–21:00, daily · CLOSED the first Monday of every month (Nov 2026: Mon 2 Nov — outside the stay)",
      price: "Flan ₩4,100 · Sablé Breton ₩2,200 · Vanilla Milk ₩3,600 · Seasonal flan from ₩4,000",
      note: "French flan specialist in the Sangsu side-streets. Open the whole stay — the monthly closure falls on Mon 2 Nov, before check-in.",
      src: [["Visit Seoul — FLAN (ENPjns5q9)", "https://english.visitseoul.net/restaurants/FLAN/ENPjns5q9"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "C3", status: "verified", cluster: "core", type: "Dessert & coffee pairing",
      name: "Imi Coffee",
      addr: "1F, 7 Donggyo-ro 25-gil, Mapo-gu",
      walk: "Hongik Univ. Station Exit 1, 242 m (official) — in the core",
      hours: "12:00–21:00 (last order 20:30) · CLOSED TUESDAYS (operating days Wed–Mon)",
      price: "Not printed on the official listing",
      note: "You pick the dessert, the roaster matches the coffee. The official page says reservations are essential — no phone is printed; use Instagram @imi.coffee.",
      src: [["Visit Seoul — Imi Coffee (46418)", "https://english.visitseoul.net/restaurants/2024-imicoffee_/46418"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "C4", status: "verified", cluster: "core", type: "Café / dessert",
      name: "B-hind",
      addr: "18 Eoulmadang-ro 5-gil, Mapo-gu",
      walk: "Sangsu Station Exit 1, 436 m (official) — 70 m from Colline and 140 m from FLAN per the official nearby list",
      hours: "Mon–Fri 11:30–22:00 · Sat–Sun 13:00–22:00 · closed Seollal & Chuseok",
      price: "Price range printed as ₩10,000",
      note: "Affogato al caffè (Molinari-bean espresso over vanilla ice cream) is the printed signature. Comfortable, couple-friendly café that often holds a flea market.",
      src: [["Visit Seoul — B-hind (ENP011936), edited 9 May 2026", "https://english.visitseoul.net/restaurants/B-hind-E/ENP011936"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "C5", status: "verified", cluster: "core", type: "Café / wine saloon",
      name: "GMH Dabang",
      addr: "49 Wausan-ro 3-gil, Mapo-gu",
      walk: "Sangsu Station Exit 4, 404 m (official)",
      hours: "Mon & Wed–Fri 17:00–24:00 · Sat 14:00–24:00 · Sun 14:00–22:00 · CLOSED TUESDAYS",
      price: "Not printed on the official listing",
      note: "Café by day, wine saloon by night — 200+ wines with tasting guidance. A Hongdae-artist favourite and a quiet date spot; weekdays open only from 17:00.",
      src: [["Visit Seoul — GMH Dabang (ENP1v5xop), edited 11 May 2026", "https://english.visitseoul.net/restaurants/2024-gmhdabang/ENP1v5xop"]],
      verifiedOn: "2026-09-02",
      flag: "Closed Tuesdays and weekday-evening-only hours (Mon & Wed–Fri from 17:00). Never scheduled on a Tuesday, and only after 17:00 on weekdays."
    },
    {
      id: "C6", status: "verified", cluster: "core", type: "Museum café",
      name: "Cafe aA",
      addr: "19-18 Wausan-ro 17-gil, Mapo-gu (Agio Building)",
      walk: "Sangsu Station Exit 1 (official) — 90 m from Colline and 140 m from FLAN per the official nearby list",
      hours: "Daily 12:00–23:30 · open year round",
      price: "Not printed on the official listing",
      note: "Museum café with a furniture showroom on the 1st floor; spacious antique interior.",
      src: [["Visit Seoul — Cafe aA (ENP000997)", "https://english.visitseoul.net/restaurants/cafe-aA-EN/ENP000997"]],
      verifiedOn: "2026-09-02",
      flag: "The official Visit Seoul page was last edited 1 Feb 2021 — the hours (daily 12:00–23:30) may be stale. Confirm on the day; never used as a day's only stop."
    },
    /* ---- YEONNAM ---- */
    {
      id: "Y1", status: "verified", cluster: "yeonnam", type: "Café",
      name: "Antique Coffee Yeonnam Branch",
      addr: "1F, 25-1 Yeonhui-ro, Mapo-gu",
      walk: "Hongik Univ. Station Exit 3, 384 m — the first café you reach walking into Yeonnam",
      hours: "Daily 10:00–22:00",
      price: "Not printed on the official listing",
      note: "Dirty & Cream coffee, cherry chocolat cake, Dirty & Cream croissant are the printed signatures. This Yeonnam branch only.",
      src: [["Visit Seoul — Antique Coffee Yeonnam Branch (ENPfru4mc)", "https://english.visitseoul.net/restaurants/ANTIQUE-COFFEE/ENPfru4mc"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "Y2", status: "verified", cluster: "yeonnam", type: "Contemporary Korean",
      name: "Jincheongyujeom (진천유점)",
      addr: "27 Donggyo-ro 46-gil, Mapo-gu",
      walk: "Hongik Univ. Station Exit 3, 571 m",
      hours: "11:30–22:00, daily · weekday break 15:30–17:00",
      price: "Perilla Oil Makguksu ₩10,500 · Seasonal Bibimbap ₩13,000 · Gangdoenjang Ssambap ₩14,000 · Beef Tartare Gamtae Gimbap ₩16,000 · Grilled Mackerel & Bracken Risotto ₩16,000",
      note: "Sesame and perilla oils pressed in-store each morning. Reservations via the Naver link on the official page. The best-value verified sit-down lunch in the Yeonnam cluster.",
      src: [["Visit Seoul — Jincheongyujeom (ENPtgef38)", "https://english.visitseoul.net/MapoArea/jincheongyujeom/ENPtgef38"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "Y3", status: "verified", cluster: "yeonnam", type: "Dessert café",
      name: "Parole & Langue",
      addr: "8 Seongmisan-ro 29an-gil, Mapo-gu",
      walk: "Hongik Univ. Station Exit 3, 821 m",
      hours: "13:00–21:00 · CLOSED EVERY MONDAY",
      price: "Not printed on the official listing",
      note: "Square signature pies in a converted house at the edge of Yeonnam. There is a queue; the official page notes a reservation system with English, Chinese and Japanese options.",
      src: [["Visit Seoul — Parole & Langue (ENP0p4bkd)", "https://english.visitseoul.net/restaurants/Parole-Langue/ENP0p4bkd"]],
      verifiedOn: "2026-09-02",
      flag: "Closed Mondays — never scheduled for Mon 16 Nov."
    },
    {
      id: "Y4", status: "verified", cluster: "yeonnam", type: "Bakery café",
      name: "Café Layered Yeonnam",
      addr: "223-20 Yeonnam-dong, Mapo-gu",
      walk: "Hongik Univ. Station Exit 3, 838 m — 120 m from Parole & Langue per the official nearby list",
      hours: "Daily 10:00–22:00",
      price: "Not printed on the official listing",
      note: "Scones and cakes; window seats and a terrace on the 2nd and 3rd floors. This Yeonnam location only.",
      src: [["Visit Seoul — Café Layered Yeonnam (48856)", "https://english.visitseoul.net/restaurants/Caf%C3%A9%20Layered%20Yeonnam_/48856"]],
      verifiedOn: "2026-09-02"
    },
    /* ---- SANGSU / HAPJEONG ---- */
    {
      id: "S1", status: "verified", cluster: "sangsu", type: "Museum / memorial",
      name: "Korean Catholic Martyrs' Museum, Jeoldusan Martyrs' Shrine",
      addr: "Jeoldusan, Hapjeong-dong, Mapo-gu (riverside cliff above the Han)",
      walk: "Hapjeong Station — one stop from Hongik Univ. on Line 2, or a 20–25 min riverside walk",
      hours: "Museum daily 09:30–17:00 · CLOSED MONDAYS. The shrine grounds themselves are open.",
      price: "No fee printed on the official Visit Seoul listing; the shrine's own page (CBCK, per the KoreaFun repo's 2026-08-19 review) records a voluntary offering. Groups of 10+ must book two weeks ahead.",
      note: "Quiet, sober site over the river. The single best low-energy morning in the Hapjeong cluster.",
      src: [
        ["Visit Seoul — Korean Catholic Martyrs' Museum (29433)", "https://english.visitseoul.net/attractions/Korean-Catholic-Martyrs%E2%80%99-Museum_/29433"],
        ["VisitKorea — Jeoldusan Martyrs' Shrine (vcontsId 107565)", "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=107565"]
      ],
      verifiedOn: "2026-09-02",
      flag: "Closed Mondays — never scheduled for Mon 16 Nov."
    },
    {
      id: "S2", status: "verified", cluster: "sangsu", type: "Korean-Chinese",
      name: "Masichaina (맛이차이나)",
      addr: "68 Dongmak-ro, Mapo-gu (Sangsu / Hapjeong)",
      walk: "One stop from Hongik Univ., or ~15 min walk down Wausan-ro",
      hours: "Mon–Sun 11:30–22:00 · break 16:00–17:00 · open all year round",
      price: "Not printed on the official listing (set menus A/B/C)",
      note: "Hotel-style Korean-Chinese from a former hotel chef; open kitchen. Jjajangmyeon and oyster jjamppong are on the printed menu.",
      src: [["VisitKorea — Masichaina (vcontsId 66922)", "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=66922"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "S3", status: "verified", cluster: "sangsu", type: "Korean BBQ (pork rind)",
      name: "Seogang Kkeopdegi (서강껍데기)",
      addr: "36 World Cup-ro, Mapo-gu",
      walk: "Hapjeong Station Exit 9, 311 m",
      hours: "16:00–03:30 (next day) · open year round",
      price: "Not printed on the official listing",
      note: "Pork rind and grilled pork; a long-standing Hapjeong late-night. Opens at 16:00 — evening only.",
      src: [["Visit Seoul — Seogang Kkeopdegi (ENP012289)", "https://english.visitseoul.net/restaurants/Seogang-Kkeopdegi/ENP012289"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "S4", status: "verified", cluster: "sangsu", type: "Korean BBQ",
      name: "Jamdubong The Nine",
      addr: "352-6 Hapjeong-dong, Mapo-gu",
      walk: "Hapjeong Station Exit 7, 804 m",
      hours: "Daily 12:00–22:00",
      price: "Not printed on the official listing",
      note: "Barbecue in a former Han River dock building; samgyeopsal and tteokgalbi are the printed signatures.",
      src: [["Visit Seoul — Jamdubong The Nine (ENPuv9y9f)", "https://english.visitseoul.net/restaurants/the9bongbong/ENPuv9y9f"]],
      verifiedOn: "2026-09-02"
    },
    /* ---- SINCHON ---- */
    {
      id: "N1", status: "verified", cluster: "sinchon", type: "Galbi",
      name: "Hyeongje Galbi (형제갈비)",
      addr: "2 Myeongmul 1-gil, Seodaemun-gu",
      walk: "Sinchon Station Exit 3, 261 m — one stop from Hongik Univ. on Line 2",
      hours: "Daily 11:00–22:00 · closed Seollal & Chuseok only",
      price: "Not printed on the official listing",
      note: "Nearly 40 years old; charcoal beef ribs, plus dolsot bibimbap and galbitang. Staff grill for you; floors are split by menu.",
      src: [["Visit Seoul — Hyeongje Galbi (ENP011643)", "https://english.visitseoul.net/restaurants/Hyeongje-Galbi/ENP011643"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "N2", status: "verified", cluster: "sinchon", type: "Tonkatsu",
      name: "Cochon Tonkatsu",
      addr: "2 Myeongmul 1-gil, Seodaemun-gu — same address block as Hyeongje Galbi",
      walk: "Sinchon Station Exit 3, 261 m",
      hours: "11:00–19:00 · break 16:00–17:00",
      price: "Tonkatsu ₩4,000 · True Cochon tonkatsu ₩6,000 · Real Cochon tonkatsu ₩8,000",
      note: "One-item shop: tonkatsu with rice, soup and salad. The cheapest verified sit-down meal on this whole list.",
      src: [["Visit Seoul — Cochon Tonkatsu (ENPf7618z)", "https://english.visitseoul.net/restaurants/CochonTonkatsu/ENPf7618z"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "N3", status: "verified", cluster: "sinchon", type: "Bingsu (shaved ice)",
      name: "Homilbat",
      addr: "43 Sinchonnyeok-ro, Seodaemun-gu",
      walk: "Sinchon Station Exit 1, 230 m (official) — between Ewha and Sinchon",
      hours: "Daily 12:00–22:00 (last order 21:30)",
      price: "Not printed on the official listing (the page stresses affordable prices)",
      note: "Ten-year bingsu shop; signature is soft milk bingsu topped with fresh red beans and rice cakes, with free refills of the topping. The natural dessert stop on any Sinchon day.",
      src: [["Visit Seoul — Homilbat (ENPpteyc2)", "https://english.visitseoul.net/restaurants/2024-homilbat/ENPpteyc2"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "N4", status: "verified", cluster: "sinchon", type: "Pork cutlet",
      name: "MBRO Donkkaseu (엠브로돈까스)",
      addr: "26 Myeongmul-gil, Seodaemun-gu — Myeongmul Street, the Sinchon shopping street",
      walk: "Sinchon; the verified neighbours Hyeongje Galbi (N1) and Cochon Tonkatsu (N2) sit at 2 Myeongmul 1-gil, Sinchon Station Exit 3, 261 m per their official pages",
      hours: "11:30–21:30 (break 15:30–17:00, last order 21:00) · no closing day printed",
      price: "Not printed on the official listing",
      note: "Japanese-style pork cutlet house; the printed mains are pork cutlet and spicy chewy noodles. The lunch alternative in the Sinchon cluster.",
      src: [["VisitKorea — MBRO Donkkaseu (vcontsId 59341)", "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=59341"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "N5", status: "verified", cluster: "sinchon", type: "Dabang / café",
      name: "Dok-Dabang (독수리다방)",
      addr: "8F, 36 Yeonse-ro, Seodaemun-gu",
      walk: "Sinchon Station Exit 3, 360 m (official)",
      hours: "11:00–23:30 (last order 23:00) · daily · no holidays printed",
      price: "Not printed on the official listing",
      note: "A 1971 dabang that became a student dormitory and meeting place in the 1970s–80s, closed in 2005 and reopened in 2013 by the founder's grandson. A designated Seoul Future Heritage, with old photos and a note board.",
      src: [["Visit Seoul — Dok-Dabang (28403), edited 25 Jul 2026", "https://english.visitseoul.net/restaurants/Doksuri-Dabang_/28403"]],
      verifiedOn: "2026-09-02"
    },
    /* ---- SANGAM / WORLD CUP PARK ---- */
    {
      id: "W1", status: "verified", cluster: "sangam", type: "Park / architecture",
      name: "Oil Tank Culture Park (문화비축기지)",
      addr: "87 Jeungsan-ro, Mapo-gu",
      walk: "Line 6 World Cup Stadium Station",
      hours: "Park open 24 hours · Tanks T1–T6 10:00–18:00 · Café Tank6 10:00–19:00. Exhibition halls and Café Tank6 closed Mondays.",
      price: "Free",
      note: "Six decommissioned oil tanks from 1976 turned into performance, exhibition and community spaces; opened to the public in 2017.",
      src: [["VisitKorea — Oil Tank Culture Park (vcontsId 62572)", "https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=62572"]],
      verifiedOn: "2026-09-02",
      flag: "Exhibition halls and Café Tank6 closed Mondays — never scheduled for Mon 16 Nov. Re-check 2026-09-02: the official KTO listing above still prints park 24 h / tanks 10:00–18:00 / café 10:00–19:00 and free entry. CAUTION: the KoreaFun repo's 2026-08-19 review reported that since April 2025 the T1–T6 interiors are a licensed-use facility (walk-in access restricted; docent space tour Tue/Thu/Fri/Sat 10:00 & 15:00), citing the city's parks.seoul.go.kr page — that city URL now returns 404, so treat interior access as “confirm at the door”. Itineraries only rely on the outdoor park, Café Tank6 and the documented Monday closure."
    },
    {
      id: "W2", status: "verified", cluster: "sangam", type: "Tour",
      name: "Seoul World Cup Stadium Tour",
      addr: "240 World Cup-ro, Mapo-gu",
      walk: "Line 6 World Cup Stadium Station Exit 1, 69 m",
      hours: "Four tours per day: 09:00 · 11:00 · 14:00 · 16:00. About 1 hour each. Closed Mondays, national holidays, Labour Day and match days.",
      price: "₩1,000 adults · ₩500 for under-18s, 65+, disabled visitors and national-merit holders · 30% group discount (10+)",
      note: "Route: tour lobby → main stadium → FC Seoul locker & warm-up rooms → 2002 World Cup locker & warm-up rooms → video room → history exhibit → gift shop.",
      src: [
        ["Seoul Facilities Corporation — official stadium tour page", "https://www.sisul.or.kr/open_content/worldcup/guidance/course.jsp"],
        ["Seoul public service reservation — stadium tour booking", "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S251229135612718733"],
        ["Visit Seoul — Seoul World Cup Stadium (ENP002101)", "https://english.visitseoul.net/entertainment/Seoul-World-Cup-Stadium/ENP002101"]
      ],
      verifiedOn: "2026-09-02",
      flag: "BOOK AHEAD. The operator's page states 현장예매는 불가 — walk-up ticket purchase is not possible; you must reserve through Seoul's public service reservation site, then pay on site. The operator page and the Visit Seoul page also print slightly different session windows (9–17 vs 9–16); the four session times above are from the operator."
    },
    {
      id: "W3", status: "recheck", cluster: "sangam", type: "Market",
      name: "Mangwon Market (망원시장)",
      addr: "27 Poeun-ro 6-gil, Mapo-gu",
      walk: "Line 6 Mangwon Station",
      hours: "Daily 10:00–21:00, varies by store (Visit Seoul market page)",
      price: "Free to walk",
      note: "40-year-old traditional market; dakgangjeong, croquettes and street snacks.",
      src: [
        ["Visit Seoul — Mangwon Market (ENP037950)", "https://english.visitseoul.net/shopping/Mangwon-Market/ENP037950"],
        ["Visit Seoul — traditional markets feature (ENN032105)", "https://english.visitseoul.net/tours/Munch-and-Chew-Taste-and-Enjoy-Korean-Traditional-Markets/ENN032105"]
      ],
      verifiedOn: "2026-09-02",
      flag: "TWO OFFICIAL PAGES DISAGREE. The Mangwon Market listing (edited May 2026) says daily 10:00–21:00 varies by store; Visit Seoul's own markets feature (edited 2019) says 09:00–22:00 closed Tuesdays and Sundays. Re-checked both pages 2026-09-02 — the conflict still stands, so itineraries only place the market on a Wednesday–Saturday, and never as the only thing planned."
    },
    {
      id: "W4", status: "verified", cluster: "sangam", type: "Book café",
      name: "Cafe Gongmyung Mangwon Book Bakery",
      addr: "22-3 World Cup-ro 13-gil, Mapo-gu",
      walk: "Mangwon Station Exit 2, 152 m (official) — inside the Mangwon cluster, a short walk from the market",
      hours: "Daily 10:00–22:00",
      price: "Not printed on the official listing",
      note: "Largest book café in Mangwon-dong; bakery goods baked each morning, rooftop and terrace. The natural long-stop on the Mangwon market side of the World Cup Park day.",
      src: [["Visit Seoul — Cafe Gongmyung Mangwon Book Bakery (ENPbg0u5h)", "https://english.visitseoul.net/restaurants/GongMyoung/ENPbg0u5h"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "W5", status: "verified", cluster: "sangam", type: "Grilled pork ribs",
      name: "Seongsan Wanggalbi",
      addr: "233 World Cup buk-ro, Mapo-gu",
      walk: "World Cup Stadium Station (Seongsan) Exit 2, 435 m (official) — the lunch option for the stadium-cluster day",
      hours: "12:00–15:00 · 17:00–21:00 · open all year round",
      price: "Not printed on the official listing",
      note: "Fresh pork short ribs (saeng dwaeji galbi) with gyeranjjim and doenjang jjigae as printed accompaniments. Sits between the stadium and the oil tanks, so the cluster day needs no further travel for lunch.",
      src: [["Visit Seoul — Seongsan Wanggalbi (ENP014893)", "https://english.visitseoul.net/restaurants/Seongsan-Wanggalbi/ENP014893"]],
      verifiedOn: "2026-09-02"
    },
    {
      id: "W6", status: "verified", cluster: "sangam", type: "Museum / ship park",
      name: "Seoul Battleship Park (서울함공원)",
      addr: "407 Mapo-naru-gil, Mangwon Hangang Park, Mapo-gu",
      walk: "Line 6 Mangwon Station Exit 1 → Mapo 09 bus → “Hangang Park entrance” stop, 7 min on foot (official); or Hapjeong Station Exit 1 → Mapo 16 bus, 7 min on foot",
      hours: "Winter (Nov–Feb): Tue–Fri 10:00–18:00, Sat–Sun 10:00–18:00. Closed Mondays, Jan 1, Seollal & Chuseok day. Free docent tour weekends & holidays: 13:00 / 15:00 in winter.",
      price: "₩3,000 adult (19+) · ₩2,000 teen (13–18) & military · ₩1,000 child (6–12); groups 20+ get 30% off; 50% off for 65+, disabled, national-merit holders",
      note: "Walk-through decommissioned naval park: the 1,900-ton frigate ROKS Seoul, a 150-ton patrol boat and a 175-ton Dolphin-class submarine, plus a rooftop library. The submarine is a genuine squeeze. November is winter hours, and Saturday 21 Nov has free docent tours at 13:00 and 15:00.",
      src: [
        ["Seoul Future Hangang Office — Seoul Battleship Park (official hours, fares, docent times)", "https://hangang.seoul.go.kr/www/contents/803.do?mid=527"],
        ["Seoul Battleship Park official site", "https://seoulbattleshippark.com/"]
      ],
      verifiedOn: "2026-09-02"
    },
    {
      id: "W7", status: "verified", cluster: "sangam", type: "Museum / architecture",
      name: "Seoul Energy Dream Center (서울에너지드림센터)",
      addr: "14 Jeungsan-ro, Mapo-gu (Peace Park, Sangam)",
      walk: "World Cup Stadium Station (Line 6) Exit 1, ~1 km / 15 min walk through Peace Park",
      hours: "Tue–Sun 09:00–17:30 · CLOSED MONDAYS",
      price: "Free (some hands-on programmes charge for materials)",
      note: "Korea's first zero-energy public building, a spiral design by Berlin architects, with hands-on exhibits on energy, climate and renewables. ~40 min for the exhibition; docent tours bookable up to two days ahead. Enquiries 02-3151-0562.",
      src: [
        ["Seoul Metropolitan Government energy portal — Seoul Energy Dream Center notice (hours, free, Monday closure)", "https://energyinfo.seoul.go.kr/board/content?menu-id=Z110100&boardType=0001&boardNo=378"],
        ["VisitKorea — Seoul Energy Dream Center (address, hours, fares)", "https://access.visitkorea.or.kr/ms/detail.do?cotId=c32b848d-3b48-4e72-8030-2da73e98a77e"]
      ],
      verifiedOn: "2026-09-02",
      flag: "Two official pages differ on the opening time: the city energy-portal notice prints 09:00–17:30 (Tue–Sun), VisitKorea prints 09:30–17:30 with last entry 17:00 and also closes 1 Jan, Seollal & Chuseok and 12 Dec. Arrive after 09:30 to be safe."
    },
    {
      id: "W8", status: "verified", cluster: "sangam", type: "Park / viewpoint",
      name: "Haneul Park (하늘공원) — Sky Park",
      addr: "95 Haneulgongwon-ro, Mapo-gu (World Cup Park)",
      walk: "World Cup Stadium Station (Line 6) Exit 1, ~10 min to the park entrance, then the Maengkkongi cart or 291 steps to the plateau",
      hours: "Open park, free; seasonal hours (November roughly 06:30–19:00 — confirm on parks.seoul.go.kr). Maengkkongi electric cart roughly 09:00–19:00.",
      price: "Park free · Maengkkongi cart ₩2,000 one-way / ₩3,000 return (child/senior/disabled ₩1,500 / ₩2,200), tickets at the Nanjicheon Park ticket booth",
      note: "98 m-high plateau built over a capped landfill — the highest of the five World Cup parks, with wide city and Namsan views. IMPORTANT for November: the silver-grass festival is October (2025: Oct 18–24) and the city extended grass-field viewing only to 2 Nov, so by 16–22 Nov expect a mostly cleared plateau — treat this as a free viewpoint walk, not a foliage stop.",
      src: [
        ["Seoul city — World Cup Park / Haneul Park (parks.seoul.go.kr)", "https://parks.seoul.go.kr/"],
        ["Seoul city — 24th Seoul Eoksae (silver grass) Festival notice (dates + cart fares)", "https://news.seoul.go.kr/env/archives/564833"]
      ],
      verifiedOn: "2026-09-02",
      flag: "parks.seoul.go.kr returned HTTP 500 on this pass, so the Maengkkongi cart fares (₩2,000/₩3,000) are carried from the Seoul city Eoksae-festival notice and the KoreaFun repo's 2026-08-19 read, not from a page fetched today; the fares are also consistent across Seoul city posts. Re-confirm the cart and park hours on parks.seoul.go.kr nearer the date."
    },
    {
      id: "K1", status: "verified", cluster: "sangam", type: "Cinema (free screenings)",
      name: "Cinematheque KOFA (시네마테크KOFA)",
      addr: "400 World Cup buk-ro, Mapo-gu (Korean Film Archive, Sangam / DMC)",
      walk: "Line 6 Digital Media City Station Exit 2 → bus 771/6715/7711/7730 to Nuritkum Square·MBC (5 min), or AREX Exit 9 ~15 min walk",
      hours: "Tue–Sat · ticket box opens 1 h before the first screening, closes at the last screening's start · CLOSED Sun, Mon, 1 Jan, Seollal & Chuseok, 18 Jan, 1 May",
      price: "All screenings free",
      note: "Two-screen national archive cinema (321 + 150 seats): restored Korean classics, retrospectives, festival and independent film. Online booking daily from 11:00 (2 tickets/person, same-day to 5 days ahead) or on-site from 1 h before the first show. No late entry — screenings start on time. Many titles are Korean-language; check each film's page for subtitles. Enquiries 02-3153-2075 / 2077.",
      src: [
        ["Cinematheque KOFA — official visitor guide (free, Tue–Sat, booking rules)", "https://www.koreafilm.or.kr/pages/PC_00000004"],
        ["Cinematheque KOFA — screening calendar", "https://www.koreafilm.or.kr/cinematheque/schedule"]
      ],
      verifiedOn: "2026-09-02",
      flag: "Closed Sundays and Mondays, and no late entry. Schedule only Tue–Sat; always check the film's language before booking."
    },
    {
      id: "K2", status: "verified", cluster: "sangam", type: "Museum",
      name: "Korean Film Museum (한국영화박물관)",
      addr: "400 World Cup buk-ro, Mapo-gu (Korean Film Archive, Sangam / DMC) — same building as Cinematheque KOFA",
      walk: "As for Cinematheque KOFA — same address, same campus",
      hours: "Tue–Sat 10:30–19:00 (last entry 18:30) · CLOSED Sun, Mon, 1 Jan, Seollal & Chuseok, 18 Jan, 1 May",
      price: "Free",
      note: "100+ years of Korean cinema across 14 permanent sections plus special exhibitions; opened 2008 and registered a national museum in 2015. A film library with free viewing booths shares the building. Free 2-hour parking. Enquiries 02-3153-2072.",
      src: [
        ["Korean Film Museum — official visitor guide (hours, free, closures)", "https://www.koreafilm.or.kr/pages/PC_00000012"],
        ["Korean Film Museum — permanent exhibition", "https://www.koreafilm.or.kr/pages/PC_00000241"]
      ],
      verifiedOn: "2026-09-02"
    }
  ];

  /* ---------------- OUT OF WINDOW / DO NOT PLAN ---------------- */
  const EXCLUDED = [
    { name: "MAC Morning Concert #9, Mapo Art Center", why: "Wed 25 Nov 2026 — three days after check-out.", src: ["https://www.mfac.or.kr/performance/whole_list.jsp"] },
    { name: "《공놀이클럽의 사계절 체홉: 갈매기》 reading, Mapo Art Center", why: "Sun 29 Nov 2026 — after check-out.", src: ["https://www.mfac.or.kr/performance/whole_list.jsp"] },
    { name: "National Gugak Center 토요명품 on Nov 7 and Nov 14", why: "Both Saturdays fall before check-in. Only Nov 21 is inside the stay.", src: ["https://www.gugak.go.kr/site/program/performance/month_list?menuid=001001001&year=2026&month=11"] },
    { name: "Gugak Museum English Tour on Nov 7 and Nov 14", why: "Before check-in. Only Nov 21 is inside the stay.", src: ["https://www.gugak.go.kr/site/program/performance/month_list?menuid=001001001&year=2026&month=11"] },
    { name: "Mapo Art Center — everything else in the Nov 2026 calendar", why: "The official schedule shows no ticketed MFAC performance at all between Nov 16 and Nov 22. Only the free Mapo Music Gallery is running.", src: ["https://www.mfac.or.kr/performance/whole_list.jsp"] },
    { name: "Hongdae Free Market as a planned activity", why: "Organiser domain no longer serves the market; venue rebranded; no 2026 season calendar on any official page. Downgraded to “walk past and see”.", src: ["http://www.freemarket.or.kr/"] },
    { name: "Regallily “Dawn” Asia Tour — KT&G Sangsangmadang Hongdae Live Hall", why: "Sat 7 Nov 2026 — nine days before check-in. The only dated Hongdae-concert candidate that was found, and it is outside the stay.", src: ["https://github.com/karagemop466-tech/KoreaFun"] }
  ];

  /* ---------------- ITINERARIES ---------------- */
  // pace: relax | moderate | busy
  const ITINS = [
    {
      id: "I1",
      name: "Zero-Transit Hongdae",
      tagline: "Six days without ever needing a subway ticket.",
      best: "Travellers who want to unpack once and walk everywhere.",
      transitDays: 0,
      summary: "Every single item is inside the Hongdae core or the Yeonnam-dong strip that runs off the end of Gyeongui Line Forest Park. Longest walk on any day is about 840 m. No dated ticketed event is included, so nothing can be missed.",
      days: [
        { date: "Mon 16 Nov", pace: "relax", title: "Arrive & settle",
          items: [
            ["15:00", "Check in at the hotel, 144 Yanghwa-ro (Exit 9)", null],
            ["16:00", "Kakao Friends Hongdae Flagship — 51 m from the station exit, open to 22:00", "H2"],
            ["17:30", "Dinner: Blue Roof Town Hongdae Branch — 271 m, open to 22:00", "F1"],
            ["19:30", "Slow loop of the Eoulmadang-ro block and back", null]
          ],
          note: "Monday closures respected: Hongik Cultural Park, Parole & Langue, Jeoldusan museum, Oil Tank exhibition halls and the stadium tour are all shut today and appear on no Monday in any itinerary." },
        { date: "Tue 17 Nov", pace: "moderate", title: "Books, park, Yeonnam",
          items: [
            ["08:00", "Breakfast at Avelop Hongdae Flagship (opens 08:00 on weekdays)", "F7"],
            ["11:00", "Gyeongui Line Book Street — opens 11:00 (break 12:30–13:30)", "H5"],
            ["13:30", "Lunch: Jincheongyujeom, Yeonnam — arrive before the 15:30 weekday break", "Y2"],
            ["15:00", "Walk the Yeontral Park stretch of Gyeongui Line Forest Park", "H6"],
            ["16:30", "Coffee at Antique Coffee Yeonnam", "Y1"],
            ["18:30", "Dinner: YANG IN HWAN DAE (weekday-only hours, opens 16:00)", "F5"]
          ] },
        { date: "Wed 18 Nov", pace: "relax", title: "Culture complex day",
          items: [
            ["11:00", "KT&G Sangsangmadang — opens 11:00; design shop and gallery floors", "H4"],
            ["13:00", "Lunch: Busanjib Hongdae (last order 21:00, no alcohol)", "F2"],
            ["15:00", "Hongik Cultural Park / Drawing Village — open Tue–Sun 10:00–18:00", "H7"],
            ["17:00", "Café Layered Yeonnam or Parole & Langue (both open today)", "Y4"],
            ["19:30", "Dinner: Chosun Hwaro Gui — after its 15:00–17:00 break", "F6"]
          ] },
        { date: "Thu 19 Nov", pace: "relax", title: "Slow morning, film evening",
          items: [
            ["10:00", "Long unhurried walk up the forest park and back", "H6"],
            ["12:30", "Lunch: Eongteori Saenggogi (all-you-can-eat, 11:00–23:00)", "F4"],
            ["15:00", "Rest at the hotel — pool of free afternoon deliberately left empty", null],
            ["18:00", "Indiespace — 80 m from Exit 8, open to 20:00", "H1"],
            ["20:30", "Late dinner: MGM Hongdae (last order 23:30)", "F3"]
          ] },
        { date: "Fri 20 Nov", pace: "moderate", title: "Yeonnam deep cut",
          items: [
            ["10:00", "Antique Coffee Yeonnam for the first coffee", "Y1"],
            ["11:30", "Yeonnam back alleys on foot — Donggyo-ro 46-gil and Seongmisan-ro", null],
            ["13:00", "Lunch: Jincheongyujeom (second visit; different menu)", "Y2"],
            ["15:00", "Parole & Langue — opens 13:00, closed Mondays but open today", "Y3"],
            ["18:00", "Dinner: YANG IN HWAN DAE or Blue Roof Town", "F5"]
          ] },
        { date: "Sat 21 Nov", pace: "moderate", title: "Saturday in the core",
          items: [
            ["11:00", "Avelop (Sat opens 11:00) then Gyeongui Line Book Street", "F7"],
            ["13:00", "Walk past Hongik Cultural Park — if the Free Market is running it will be here; it is NOT confirmed for 2026, so nothing is planned around it", "H8"],
            ["14:00", "Lunch: Busanjib Hongdae", "F2"],
            ["16:00", "Trick Eye Museum — open to 22:00, last admission 21:00", "H3"],
            ["19:00", "Dinner: MGM Hongdae", "F3"]
          ] },
        { date: "Sun 22 Nov", pace: "relax", title: "Check out",
          items: [
            ["08:00", "Hotel breakfast (07:00–10:00, last entry 09:30)", null],
            ["10:00", "Final walk on the forest park", "H6"],
            ["12:00", "Check out — 12:00 is the hotel's stated latest time", null]
          ],
          note: "Chosun Hwaro Gui is closed Sundays and is not scheduled today." }
      ]
    },
    {
      id: "I2",
      name: "Slow Hongdae & Yeonnam",
      tagline: "The rest-heavy version — two anchors a day, nothing before 10:00.",
      best: "A stay where the point is the neighbourhood, not the checklist.",
      transitDays: 0,
      summary: "Same zero-transit footprint as Itinerary 1, but each day carries at most two fixed items and every afternoon has a deliberate empty block. Cafés do the heavy lifting.",
      days: [
        { date: "Mon 16 Nov", pace: "relax", title: "Arrive",
          items: [
            ["15:00", "Check in", null],
            ["17:00", "Dinner: Busanjib Hongdae (5 min walk)", "F2"],
            ["19:00", "Nothing scheduled", null]
          ] },
        { date: "Tue 17 Nov", pace: "relax", title: "One café, one park",
          items: [
            ["10:30", "Antique Coffee Yeonnam", "Y1"],
            ["12:00", "Forest park, Yeonnam stretch", "H6"],
            ["18:00", "Dinner: Blue Roof Town", "F1"]
          ] },
        { date: "Wed 18 Nov", pace: "relax", title: "Books and a long lunch",
          items: [
            ["11:00", "Gyeongui Line Book Street", "H5"],
            ["13:30", "Lunch: Jincheongyujeom (before the 15:30 break)", "Y2"],
            ["19:00", "Dinner: Eongteori Saenggogi", "F4"]
          ] },
        { date: "Thu 19 Nov", pace: "relax", title: "Pie and a film",
          items: [
            ["13:00", "Parole & Langue opens 13:00", "Y3"],
            ["16:00", "Café Layered Yeonnam, 120 m away", "Y4"],
            ["18:30", "Indiespace", "H1"]
          ] },
        { date: "Fri 20 Nov", pace: "relax", title: "Design floor day",
          items: [
            ["11:00", "KT&G Sangsangmadang", "H4"],
            ["13:00", "Lunch: Busanjib Hongdae", "F2"],
            ["18:00", "Dinner: YANG IN HWAN DAE (weekday hours)", "F5"]
          ] },
        { date: "Sat 21 Nov", pace: "relax", title: "Trick art and a late dinner",
          items: [
            ["12:00", "Hongik Cultural Park / Drawing Village", "H7"],
            ["15:00", "Trick Eye Museum", "H3"],
            ["19:30", "Dinner: MGM Hongdae", "F3"]
          ] },
        { date: "Sun 22 Nov", pace: "relax", title: "Check out",
          items: [
            ["09:00", "Breakfast at the hotel", null],
            ["12:00", "Check out", null]
          ] }
      ]
    },
    {
      id: "I3",
      name: "Mapo Riverside & Sangam",
      tagline: "Two cluster days out west, the rest on foot in Hongdae.",
      best: "Travellers who want landmarks without crossing the city.",
      transitDays: 2,
      summary: "Only two days leave the walking radius, and each of those stays inside a single cluster: one Hapjeong/riverside day and one World Cup Park day. Everything else is the Hongdae core.",
      days: [
        { date: "Mon 16 Nov", pace: "relax", title: "Arrive",
          items: [
            ["15:00", "Check in", null],
            ["17:00", "Dinner: Blue Roof Town", "F1"],
            ["19:00", "Kakao Friends flagship, open to 22:00", "H2"]
          ] },
        { date: "Tue 17 Nov", pace: "moderate", title: "Hapjeong / riverside cluster",
          items: [
            ["10:00", "Walk or one stop to Hapjeong", null],
            ["10:30", "Korean Catholic Martyrs' Museum, Jeoldusan — 09:30–17:00, open today", "S1"],
            ["12:30", "Lunch: Masichaina — arrive before the 16:00 break", "S2"],
            ["15:00", "Han River side of Hapjeong on foot", null],
            ["17:00", "Dinner: Jamdubong The Nine (12:00–22:00) or Seogang Kkeopdegi from 16:00", "S4"]
          ],
          note: "Every stop today is inside Hapjeong; no further transit after the single hop out." },
        { date: "Wed 18 Nov", pace: "relax", title: "Back in the core",
          items: [
            ["11:00", "KT&G Sangsangmadang", "H4"],
            ["13:00", "Lunch: Busanjib Hongdae", "F2"],
            ["16:00", "Gyeongui Line Book Street and the forest park", "H5"],
            ["19:00", "Dinner: Chosun Hwaro Gui (after the 15:00–17:00 break)", "F6"]
          ] },
        { date: "Thu 19 Nov", pace: "busy", title: "World Cup Park cluster",
          items: [
            ["09:00", "Line 6 to World Cup Stadium Station", null],
            ["09:00", "Stadium Tour, session 1 — RESERVE IN ADVANCE, no walk-up sales", "W2"],
            ["10:30", "Oil Tank Culture Park — tanks open 10:00–18:00, walk over from the stadium", "W1"],
            ["13:00", "Café Tank6 (10:00–19:00) or on to Mangwon", "W1"],
            ["14:30", "Mangwon Market — open on a Thursday under either published schedule", "W3"],
            ["18:00", "Back to Hongdae; dinner MGM Hongdae", "F3"]
          ] },
        { date: "Fri 20 Nov", pace: "relax", title: "Recovery day",
          items: [
            ["10:00", "Forest park walk", "H6"],
            ["12:30", "Lunch: Eongteori Saenggogi", "F4"],
            ["15:00", "Free block", null],
            ["18:00", "Dinner: YANG IN HWAN DAE", "F5"]
          ] },
        { date: "Sat 21 Nov", pace: "moderate", title: "Core Saturday",
          items: [
            ["11:00", "Hongik Cultural Park / Drawing Village", "H7"],
            ["13:00", "Lunch: Busanjib Hongdae", "F2"],
            ["15:30", "Trick Eye Museum", "H3"],
            ["19:00", "Dinner: Blue Roof Town", "F1"]
          ] },
        { date: "Sun 22 Nov", pace: "relax", title: "Check out",
          items: [["09:00", "Breakfast", null], ["12:00", "Check out", null]] }
      ]
    },
    {
      id: "I4",
      name: "Food-Forward Hongdae",
      tagline: "Every meal from the verified list, clustered so no meal needs transit.",
      best: "Two travellers eating their way through Mapo.",
      transitDays: 1,
      summary: "Built backwards from opening hours: breaks, last orders and closed days decide the order. The only day that leaves the walking radius is the Sinchon lunch pair, which is one stop away and sits at a single address.",
      days: [
        { date: "Mon 16 Nov", pace: "relax", title: "First dinner",
          items: [
            ["15:00", "Check in", null],
            ["18:00", "Blue Roof Town — Suwon wang galbi, LA galbi, ₩30,000 band", "F1"]
          ] },
        { date: "Tue 17 Nov", pace: "moderate", title: "Chinese-Korean and lamb",
          items: [
            ["11:30", "Lunch: Busanjib Hongdae — jjajangmyeon ₩14,000", "F2"],
            ["15:00", "Walk it off on the forest park", "H6"],
            ["18:00", "Dinner: YANG IN HWAN DAE — French rack ₩35,000 (weekday hours only)", "F5"]
          ] },
        { date: "Wed 18 Nov", pace: "moderate", title: "Sinchon lunch pair",
          items: [
            ["11:30", "One stop to Sinchon; lunch at Cochon Tonkatsu — ₩4,000–₩8,000, closes 19:00 with a 16:00 break", "N2"],
            ["13:30", "Coffee in Sinchon", null],
            ["17:30", "Back to Hongdae; dinner at Hyeongje Galbi is also possible at the same Sinchon address — or return for Chosun Hwaro Gui after 17:00", "F6"]
          ],
          note: "Both Sinchon restaurants share 2 Myeongmul 1-gil — zero walking between them." },
        { date: "Thu 19 Nov", pace: "relax", title: "All-you-can-eat day",
          items: [
            ["12:00", "Lunch: Eongteori Saenggogi — AYCE, salad bar, free rice refills", "F4"],
            ["16:00", "Antique Coffee Yeonnam", "Y1"],
            ["20:00", "Late dinner: MGM Hongdae — cauldron-lid grill, last order 23:30", "F3"]
          ] },
        { date: "Fri 20 Nov", pace: "moderate", title: "Yeonnam table",
          items: [
            ["12:00", "Lunch: Jincheongyujeom — perilla oil makguksu ₩10,500", "Y2"],
            ["14:30", "Parole & Langue for pie", "Y3"],
            ["19:00", "Dinner: Chosun Hwaro Gui — 1++ Korean beef, last order 23:30", "F6"]
          ] },
        { date: "Sat 21 Nov", pace: "moderate", title: "Hapjeong late night",
          items: [
            ["12:00", "Lunch: Masichaina, Sangsu — before the 16:00 break", "S2"],
            ["15:00", "Walk back along the river", null],
            ["18:00", "Dinner: Seogang Kkeopdegi, Hapjeong Exit 9 — opens 16:00, runs to 03:30", "S3"]
          ] },
        { date: "Sun 22 Nov", pace: "relax", title: "Last breakfast",
          items: [
            ["09:00", "Hotel breakfast, last entry 09:30", null],
            ["10:30", "Café Layered Yeonnam opens 10:00 if you want one more", "Y4"],
            ["12:00", "Check out", null]
          ],
          note: "Chosun Hwaro Gui closed Sundays; YANG IN HWAN DAE weekend hours unknown — neither is scheduled today." }
      ]
    },
    {
      id: "I5",
      name: "Concerts & Stages",
      tagline: "All three confirmed ticketed events, each on its own evening.",
      best: "Travellers who booked tickets and want the days around them kept light.",
      transitDays: 3,
      summary: "The only itinerary that leaves Mapo more than twice — because three separate confirmed shows sit on three different dates. Each outing is a single destination, and the day before and after each is deliberately quiet and walkable.",
      days: [
        { date: "Mon 16 Nov", pace: "relax", title: "Arrive",
          items: [["15:00", "Check in", null], ["18:00", "Dinner: Blue Roof Town", "F1"]] },
        { date: "Tue 17 Nov", pace: "relax", title: "Quiet before the shows",
          items: [
            ["11:00", "Gyeongui Line Book Street", "H5"],
            ["13:00", "Lunch: Busanjib Hongdae", "F2"],
            ["18:00", "Dinner: YANG IN HWAN DAE", "F5"]
          ] },
        { date: "Wed 18 Nov", pace: "busy", title: "Kings of Convenience at Sejong Center",
          items: [
            ["12:00", "Light lunch in Hongdae: Eongteori Saenggogi", "F4"],
            ["18:00", "Travel to Gwanghwamun — Line 2 then Line 5", null],
            ["20:00", "Kings of Convenience, SJF at the Theater — 80 minutes, ends ~21:20", "E1"],
            ["22:00", "Back in Hongdae; MGM Hongdae takes a last order at 23:30", "F3"]
          ],
          note: "Nothing else is scheduled today. The Glass Menagerie also plays a 14:30 matinee today, but stacking both is a 4-hour transit day and is not recommended." },
        { date: "Thu 19 Nov", pace: "busy", title: "Bongeunsa, then the Glass Menagerie",
          items: [
            ["13:50", "Arrive at the Bongeunsa foreigner information desk", "E5"],
            ["14:00", "Thursday Temple Life in English — tour, tea ceremony, sutra copying. ₩30,000", "E5"],
            ["16:00", "Early dinner in the Gangnam/Seocho area", null],
            ["19:30", "《The Glass Menagerie》, CJ Towol Theater, SAC — 120 min, Korean language", "E2"]
          ],
          note: "Both stops are south of the river and close to each other, so this is one geographic cluster, not two trips. Skip the play if the temple afternoon is enough." },
        { date: "Fri 20 Nov", pace: "relax", title: "Recovery in the core",
          items: [
            ["11:00", "Forest park and Yeonnam", "H6"],
            ["13:00", "Lunch: Jincheongyujeom", "Y2"],
            ["19:00", "Dinner: Chosun Hwaro Gui", "F6"]
          ] },
        { date: "Sat 21 Nov", pace: "busy", title: "Gugak double bill in Seocho",
          items: [
            ["12:30", "Travel to the National Gugak Center", null],
            ["14:00", "Gugak Museum English Tour — free", "E4"],
            ["15:00", "2026 토요명품 in Umyeondang — A ₩30,000 / B ₩20,000", "E3"],
            ["18:00", "Back to Hongdae; dinner MGM Hongdae", "F3"]
          ],
          note: "Museum tour and concert are on the same campus — no travel between them." },
        { date: "Sun 22 Nov", pace: "relax", title: "Check out",
          items: [
            ["09:00", "Breakfast", null],
            ["12:00", "Check out", null]
          ],
          note: "The Glass Menagerie also has a 15:00 show today, after check-out — only worth it if your flight is late and you can leave bags at the hotel." }
      ]
    },
    {
      id: "I6",
      name: "The Balanced Six",
      tagline: "Two busy days, two moderate, two relaxed — the default recommendation.",
      best: "Two travellers who want one big night, one landmark day, and plenty of nothing.",
      transitDays: 2,
      summary: "One ticketed evening (Kings of Convenience), one cluster day out west (World Cup Park), and four days entirely on foot in Hongdae and Yeonnam. Pace alternates deliberately so no two demanding days sit back to back.",
      days: [
        { date: "Mon 16 Nov", pace: "relax", title: "Arrive & settle",
          items: [
            ["15:00", "Check in", null],
            ["16:30", "Kakao Friends flagship, 51 m from the exit", "H2"],
            ["18:00", "Dinner: Blue Roof Town, 271 m", "F1"]
          ] },
        { date: "Tue 17 Nov", pace: "moderate", title: "Core + Yeonnam",
          items: [
            ["08:00", "Breakfast: Avelop (weekday 08:00 opening)", "F7"],
            ["11:00", "Gyeongui Line Book Street", "H5"],
            ["13:00", "Lunch: Jincheongyujeom", "Y2"],
            ["15:30", "Forest park to Antique Coffee Yeonnam", "Y1"],
            ["18:30", "Dinner: YANG IN HWAN DAE", "F5"]
          ] },
        { date: "Wed 18 Nov", pace: "busy", title: "Concert night",
          items: [
            ["12:00", "Lunch: Busanjib Hongdae", "F2"],
            ["14:00", "KT&G Sangsangmadang", "H4"],
            ["18:00", "Travel to Gwanghwamun", null],
            ["20:00", "Kings of Convenience — 80 min", "E1"],
            ["22:00", "Late dinner: MGM Hongdae", "F3"]
          ] },
        { date: "Thu 19 Nov", pace: "relax", title: "Deliberate nothing day",
          items: [
            ["11:00", "Forest park", "H6"],
            ["12:30", "Lunch: Eongteori Saenggogi", "F4"],
            ["15:00", "Free block", null],
            ["18:00", "Indiespace, 80 m from Exit 8", "H1"]
          ] },
        { date: "Fri 20 Nov", pace: "busy", title: "World Cup Park cluster",
          items: [
            ["10:30", "Line 6 to World Cup Stadium", null],
            ["11:00", "Stadium Tour, session 2 — reserve in advance", "W2"],
            ["12:30", "Oil Tank Culture Park + Café Tank6", "W1"],
            ["15:00", "Mangwon Market", "W3"],
            ["19:00", "Back to Hongdae; dinner Chosun Hwaro Gui", "F6"]
          ] },
        { date: "Sat 21 Nov", pace: "moderate", title: "Saturday on foot",
          items: [
            ["11:00", "Hongik Cultural Park / Drawing Village", "H7"],
            ["13:00", "Lunch: Masichaina in Sangsu, or Busanjib in the core", "F2"],
            ["16:00", "Trick Eye Museum", "H3"],
            ["19:30", "Dinner: Blue Roof Town", "F1"]
          ] },
        { date: "Sun 22 Nov", pace: "relax", title: "Check out",
          items: [
            ["08:30", "Breakfast, last entry 09:30", null],
            ["10:00", "Final forest park walk", "H6"],
            ["12:00", "Check out", null]
          ] }
      ]
    },
    {
      id: "I7",
      name: "Sinchon & the Student Quarter",
      tagline: "Two one-stop cluster days in Sinchon, four walkable days at home.",
      best: "Travellers who want the other side of the station — student streets, cutlet shops and bingsu — without a long commute.",
      transitDays: 2,
      summary: "Sinchon is one stop east on Line 2 (or a 20-minute walk), and both verified sit-downs sit on the same street block off Sinchon Station Exit 3, so each Sinchon day is really one destination with a lunch and a dinner at the same address. The in-between days stay entirely in the Hongdae core and Yeonnam.",
      days: [
        { date: "Mon 16 Nov", pace: "relax", title: "Arrive",
          items: [
            ["15:00", "Check in", null],
            ["16:30", "Kakao Friends Hongdae Flagship — 51 m from the exit, open to 22:00", "H2"],
            ["18:00", "Dinner: Busanjib Hongdae (11:30–22:00)", "F2"]
          ] },
        { date: "Tue 17 Nov", pace: "relax", title: "Yeonnam warm-up",
          items: [
            ["10:30", "Antique Coffee Yeonnam — opens 10:00", "Y1"],
            ["12:30", "Walk the forest park, Yeonnam stretch", "H6"],
            ["15:30", "FLAN, Sangsu side-streets — 11:00–21:00, open the whole stay", "C2"],
            ["18:30", "Dinner: Eongteori Saenggogi (all-you-can-eat, 11:00–23:00)", "F4"]
          ] },
        { date: "Wed 18 Nov", pace: "moderate", title: "Full Sinchon day",
          items: [
            ["11:30", "One stop to Sinchon; lunch at MBRO Donkkaseu — opens 11:30 (break 15:30–17:00)", "N4"],
            ["14:00", "Myeongmul Street and Sinchon student shops on foot", null],
            ["18:30", "Dinner: Hyeongje Galbi — 20 m from MBRO per the official nearby list, daily 11:00–22:00", "N1"],
            ["21:00", "One stop back to Hongdae", null]
          ],
          note: "Both restaurants sit on the same street block (2 Myeongmul 1-gil / Myeongmul-gil, Sinchon Stn Exit 3, 261 m per the official pages) — zero travel between lunch and dinner." },
        { date: "Thu 19 Nov", pace: "relax", title: "Pie and a film",
          items: [
            ["13:00", "Parole & Langue — opens 13:00, closed Mondays but open today", "Y3"],
            ["16:00", "Café Layered Yeonnam — 120 m away per the official nearby list", "Y4"],
            ["18:30", "Indiespace — 80 m from Exit 8, screens to 20:00", "H1"],
            ["20:00", "Late dinner: MGM Hongdae (last order 23:30)", "F3"]
          ] },
        { date: "Fri 20 Nov", pace: "moderate", title: "Sinchon snacks, Hongdae night",
          items: [
            ["12:00", "One stop to Sinchon; Cochon Tonkatsu — ₩4,000–8,000, closes 19:00 with a 16:00 break", "N2"],
            ["14:00", "Homilbat milk bingsu — daily 12:00–22:00, Exit 1, 230 m", "N3"],
            ["16:30", "Back to Hongdae (one stop, or ~20 min walk)", null],
            ["18:00", "Dinner: Chosun Hwaro Gui — after its 15:00–17:00 break, closed Sundays", "F6"]
          ] },
        { date: "Sat 21 Nov", pace: "moderate", title: "Saturday in the core",
          items: [
            ["11:00", "Avelop (Sat opens 11:00) — 468 m from the hotel", "F7"],
            ["12:30", "Hongik Cultural Park / Drawing Village — open Tue–Sun 10:00–18:00", "H7"],
            ["15:30", "Trick Eye Museum — open to 22:00, last admission 21:00", "H3"],
            ["19:00", "Dinner: Blue Roof Town (11:15–22:00)", "F1"]
          ] },
        { date: "Sun 22 Nov", pace: "relax", title: "Check out",
          items: [
            ["08:30", "Hotel breakfast — last entry 09:30", null],
            ["10:00", "Final forest park walk", "H6"],
            ["12:00", "Check out", null]
          ] }
      ]
    },
    {
      id: "I8",
      name: "Sangam Deep — Stadium, Ships & Market",
      tagline: "Two cluster days out west: the World Cup Park day and the Mangwon market day.",
      best: "Travellers who want the landmarks of Mapo — stadium, oil tanks, warships, market — with everything else on foot.",
      transitDays: 2,
      summary: "Only two days leave the walking radius, and each is a single cluster with no backtracking: Tuesday takes the World Cup Stadium → Oil Tank Park → Seongsan lunch → Battleship Park line in one sweep, and Saturday does Mangwon Market → book café → Drawing Village. The other five days are Hongdae, Yeonnam and the Sangsu/Hapjeong walking strip.",
      days: [
        { date: "Mon 16 Nov", pace: "relax", title: "Arrive",
          items: [
            ["15:00", "Check in", null],
            ["17:00", "Dinner: Blue Roof Town — 271 m from the hotel", "F1"],
            ["19:30", "Kakao Friends flagship, open to 22:00", "H2"]
          ] },
        { date: "Tue 17 Nov", pace: "busy", title: "World Cup Park cluster day",
          items: [
            ["09:00", "Line 6 to World Cup Stadium Station", null],
            ["09:00", "Stadium Tour, session 1 of 09:00/11:00/14:00/16:00 — RESERVE IN ADVANCE, no walk-up sales (₩1,000)", "W2"],
            ["10:30", "Oil Tank Culture Park, outdoor grounds — park is 24 h, free; tank-interior access: confirm at the door", "W1"],
            ["12:00", "Lunch: Seongsan Wanggalbi — 12:00–15:00 session, 435 m from the stadium station exit", "W5"],
            ["15:00", "One stop to Mangwon; Seoul Battleship Park — winter hours Tue–Sun 10:00–18:00, ₩3,000 adult, bus + 7 min walk from Exit 1", "W6"],
            ["17:30", "Line 6 back to Hongdae (park closes 18:00 — board by 17:30)", null],
            ["19:30", "Dinner: MGM Hongdae (12:00–00:00, last order 23:30)", "F3"]
          ],
          note: "Every stop today is inside the World Cup Park / Mangwon cluster — the only transit is the round trip in and out. Mangwon Market is deliberately NOT on this Tuesday: one official page says the market closes Tuesdays, so it goes on Saturday instead." },
        { date: "Wed 18 Nov", pace: "relax", title: "Recovery in the core",
          items: [
            ["11:00", "KT&G Sangsangmadang — opens 11:00, design shop and gallery floors", "H4"],
            ["13:00", "Lunch: Busanjib Hongdae", "F2"],
            ["16:00", "Gyeongui Line Book Street and forest park (11:00–20:00, break 12:30–13:30)", "H5"],
            ["19:00", "Dinner: Chosun Hwaro Gui — after the 15:00–17:00 break", "F6"]
          ] },
        { date: "Thu 19 Nov", pace: "relax", title: "Yeonnam recovery",
          items: [
            ["10:30", "Antique Coffee Yeonnam", "Y1"],
            ["12:30", "Lunch: Jincheongyujeom — before the 15:30 weekday break", "Y2"],
            ["15:00", "Forest park walk", "H6"],
            ["18:00", "Dinner: YANG IN HWAN DAE — weekday hours 16:00–22:00", "F5"]
          ] },
        { date: "Fri 20 Nov", pace: "moderate", title: "Sangsu → Hapjeong walking strip",
          items: [
            ["11:00", "FLAN — 163 m from Sangsu Station Exit 1, opens 11:00", "C2"],
            ["12:30", "Lunch: Masichaina — 15-min walk, before the 16:00 break", "S2"],
            ["15:00", "Colline flower café — 392 m from Sangsu Exit 1, open to 23:00", "C1"],
            ["18:00", "Dinner: Seogang Kkeopdegi — Hapjeong Exit 9, 311 m; opens 16:00, runs to 03:30", "S3"]
          ],
          note: "One continuous strip south of the core — the cluster note covers it as a 15–25 min walk along Wausan-ro / Yanghwa-ro. No subway needed." },
        { date: "Sat 21 Nov", pace: "busy", title: "Mangwon market + book café + Drawing Village",
          items: [
            ["10:30", "Line 6 to Mangwon", null],
            ["11:00", "Mangwon Market — open Saturdays under BOTH official pages", "W3"],
            ["13:00", "Cafe Gongmyung Mangwon Book Bakery — 152 m from Mangwon Exit 2, daily 10:00–22:00", "W4"],
            ["15:00", "Line 6 back to Hongik Univ.", null],
            ["15:30", "Hongik Cultural Park / Drawing Village — open to 18:00", "H7"],
            ["19:00", "Dinner: Blue Roof Town", "F1"]
          ] },
        { date: "Sun 22 Nov", pace: "relax", title: "Check out",
          items: [
            ["08:30", "Breakfast — last entry 09:30", null],
            ["10:00", "Final forest park walk", "H6"],
            ["12:00", "Check out", null]
          ] }
      ]
    },
    {
      id: "I9",
      name: "Cafés & Desserts",
      tagline: "A pastry-first week: pies, bingsu, flan and a bingsu hop in Sinchon.",
      best: "Two travellers whose plan is coffee, cake and one bingsu at a time.",
      transitDays: 1,
      summary: "Built around the eight verified cafés and dessert spots: six walkable from the hotel (Avelop, Colline, FLAN, Imi Coffee, Antique Coffee, Parole & Langue, Café Layered) plus the Sinchon hop, where Homilbat's milk bingsu and MBRO's cutlet sit on the same street block. Every day ends at a verified table.",
      days: [
        { date: "Mon 16 Nov", pace: "relax", title: "Arrive & bake",
          items: [
            ["15:00", "Check in", null],
            ["16:00", "Avelop — weekday hours 08:00–20:00, 468 m from the hotel", "F7"],
            ["18:00", "Dinner: Busanjib Hongdae", "F2"]
          ] },
        { date: "Tue 17 Nov", pace: "relax", title: "Yeonnam dessert trail",
          items: [
            ["10:00", "Antique Coffee Yeonnam — opens 10:00, Dirty & Cream on the printed menu", "Y1"],
            ["13:00", "Lunch: Jincheongyujeom — before the 15:30 weekday break", "Y2"],
            ["15:30", "Colline — cotton latte, open Sun–Thu 10:30–23:00", "C1"],
            ["17:30", "FLAN — flan ₩4,100, until 21:00", "C2"],
            ["19:30", "Dinner: Eongteori Saenggogi", "F4"]
          ] },
        { date: "Wed 18 Nov", pace: "moderate", title: "Paired desserts & pies",
          items: [
            ["11:00", "Gyeongui Line Book Street — opens 11:00", "H5"],
            ["12:30", "Imi Coffee — pick the dessert, the roaster matches the coffee; CLOSED TUESDAYS, open today; reservation essential", "C3"],
            ["15:00", "Parole & Langue — signature square pies, opens 13:00", "Y3"],
            ["17:00", "Café Layered Yeonnam — 10:00–22:00", "Y4"],
            ["19:30", "Dinner: Chosun Hwaro Gui — after the 15:00–17:00 break", "F6"]
          ] },
        { date: "Thu 19 Nov", pace: "moderate", title: "Sinchon dessert hop",
          items: [
            ["12:00", "One stop to Sinchon; Homilbat — milk bingsu with free red-bean refills, daily 12:00–22:00", "N3"],
            ["14:00", "Lunch: MBRO Donkkaseu — 11:30–21:30, before the 15:30 break; same street block", "N4"],
            ["16:30", "Walk back to Hongdae", null],
            ["18:00", "KT&G Sangsangmadang — design shop and gallery floors, open to 21:00", "H4"],
            ["20:00", "Dinner: MGM Hongdae (last order 23:30)", "F3"]
          ],
          note: "The only transit day — one stop each way, one street block for both stops." },
        { date: "Fri 20 Nov", pace: "relax", title: "Slow core day",
          items: [
            ["10:30", "Forest park walk", "H6"],
            ["12:30", "Lunch: Blue Roof Town — 11:15–22:00", "F1"],
            ["15:00", "Free block", null],
            ["17:00", "Colline — Fri–Sat hours 10:30–24:00", "C1"],
            ["19:00", "Dinner: YANG IN HWAN DAE — weekday hours, closes 22:00", "F5"]
          ] },
        { date: "Sat 21 Nov", pace: "moderate", title: "Saturday pastry loop",
          items: [
            ["11:00", "Avelop (Sat opens 11:00)", "F7"],
            ["12:30", "Hongik Cultural Park / Drawing Village", "H7"],
            ["15:00", "Trick Eye Museum — open to 22:00, last admission 21:00", "H3"],
            ["18:00", "Dinner: MGM Hongdae", "F3"],
            ["20:00", "FLAN for a second flan — open until 21:00", "C2"]
          ] },
        { date: "Sun 22 Nov", pace: "relax", title: "Check out",
          items: [
            ["08:30", "Hotel breakfast — last entry 09:30", null],
            ["10:00", "Café Layered Yeonnam — one last scone (daily 10:00–22:00)", "Y4"],
            ["12:00", "Check out", null]
          ] }
      ]
    },
    {
      id: "I10",
      name: "Rainy-Day & Indoor Plan",
      tagline: "The whole week rearranged for grey Seoul — museums, film and covered streets.",
      best: "A backup week if November shows its cold, wet side. Zero transit days; longest exposure to the weather is a park stroll you can abort.",
      transitDays: 0,
      summary: "Every fixed stop is indoors: Trick Eye, Kakao, KT&G's gallery and art-house cinema, Indiespace, the Drawing Village creative centre, and the glass pavilions of the Book Street. The forest park appears only as optional morning walks you can skip entirely. Meals all sit under a roof within 270 m–840 m of the hotel door.",
      days: [
        { date: "Mon 16 Nov", pace: "relax", title: "Arrive, then indoors",
          items: [
            ["15:00", "Check in", null],
            ["16:30", "Kakao Friends flagship — 51 m from the exit, open to 22:00", "H2"],
            ["18:30", "Dinner: Blue Roof Town — 271 m", "F1"]
          ] },
        { date: "Tue 17 Nov", pace: "moderate", title: "Museum + complex + grill",
          items: [
            ["10:00", "Trick Eye Museum — 09:00–22:00, last admission 21:00", "H3"],
            ["12:30", "Lunch: Busanjib Hongdae (11:30–22:00)", "F2"],
            ["15:00", "KT&G Sangsangmadang — gallery and art-house cinema floors", "H4"],
            ["18:30", "Dinner: Eongteori Saenggogi (11:00–23:00)", "F4"]
          ] },
        { date: "Wed 18 Nov", pace: "moderate", title: "Covered streets + film",
          items: [
            ["11:00", "Avelop — weekday 08:00–20:00, 468 m", "F7"],
            ["12:30", "Lunch: Jincheongyujeom — before the 15:30 break", "Y2"],
            ["15:00", "Book Street glass pavilions — mostly covered, open to 20:00", "H5"],
            ["18:00", "Indiespace film — 80 m from Exit 8, screens to 20:00", "H1"],
            ["20:15", "Late dinner: MGM Hongdae (to 00:00)", "F3"]
          ] },
        { date: "Thu 19 Nov", pace: "relax", title: "Café hop, zero rain",
          items: [
            ["10:30", "Antique Coffee Yeonnam", "Y1"],
            ["13:00", "Parole & Langue — opens 13:00, closed Mondays", "Y3"],
            ["15:30", "Colline — flower café, open to 23:00", "C1"],
            ["18:00", "Dinner: Chosun Hwaro Gui — after the 15:00–17:00 break", "F6"]
          ] },
        { date: "Fri 20 Nov", pace: "moderate", title: "Sangsu side-streets indoors",
          items: [
            ["11:00", "FLAN — opens 11:00, 163 m from Sangsu Exit 1", "C2"],
            ["13:00", "Lunch: Masichaina — open kitchen, ~15 min walk, before the 16:00 break", "S2"],
            ["15:30", "Imi Coffee — dessert-coffee pairing, 242 m from Exit 1; CLOSED TUESDAYS, open today", "C3"],
            ["18:00", "Dinner: YANG IN HWAN DAE — weekday 16:00–22:00", "F5"]
          ] },
        { date: "Sat 21 Nov", pace: "moderate", title: "Indoor Saturday",
          items: [
            ["11:00", "Avelop (Sat 11:00–21:00)", "F7"],
            ["12:30", "Hongik Cultural Park — creative centre and shared studios", "H7"],
            ["15:00", "Free block — Trick Eye is open to 22:00 if you want a second visit", "H3"],
            ["19:00", "Dinner: Blue Roof Town", "F1"]
          ] },
        { date: "Sun 22 Nov", pace: "relax", title: "Check out",
          items: [
            ["08:30", "Hotel breakfast — last entry 09:30", null],
            ["10:00", "Slow loop of the covered Eoulmadang-ro block", null],
            ["12:00", "Check out", null]
          ] }
      ]
    },
    {
      id: "I11",
      name: "Sangam Cinema, Stadium & Sky Park",
      tagline: "Two out-west cluster days — the film archive and the stadium parks — the rest on foot in Hongdae.",
      best: "Travellers who want the free national film archive plus the stadium-and-park landmarks, without ever crossing the river.",
      transitDays: 2,
      summary: "Two days leave the walking radius, and each stays inside one cluster on Line 6: a World Cup Park / stadium day (stadium tour, zero-energy centre, Haneul Park, oil tanks) and a Digital Media City / Mangwon film-archive day. Every other day is the walkable Hongdae core.",
      days: [
        { date: "Mon 16 Nov", pace: "relax", title: "Arrive & busking stroll",
          items: [
            ["15:00", "Check in at the hotel, 144 Yanghwa-ro (Exit 9)", null],
            ["16:00", "Kakao Friends Hongdae Flagship — 51 m, open to 22:00", "H2"],
            ["18:00", "Dinner: Blue Roof Town Hongdae Branch — 271 m, open to 22:00", "F1"],
            ["19:30", "Hongdae Walking Street — first busking stroll (Exit 9, straight ahead)", "H9"]
          ],
          note: "Monday closures respected today: Seoul Art Space Seogyo, the Film Museum and Cinematheque KOFA (closed Sun/Mon), the Energy Dream Center, Oil Tank exhibition halls and the stadium tour are all shut and appear on no Monday in this itinerary." },
        { date: "Tue 17 Nov", pace: "busy", title: "World Cup Park & stadium day (Line 6)",
          items: [
            ["09:00", "Line 6 to World Cup Stadium Station (one ride out)", null],
            ["09:00", "Seoul World Cup Stadium Tour, session 1 — RESERVE IN ADVANCE, no walk-up sales", "W2"],
            ["11:00", "Seoul Energy Dream Center — Tue–Sun 09:00–17:30, free", "W7"],
            ["13:00", "Haneul Park — Maengkkongi cart up (₩2,000/₩3,000), city views", "W8"],
            ["15:00", "Oil Tank Culture Park — outdoor grounds + Café Tank6 (10:00–19:00)", "W1"],
            ["17:30", "Dinner: Seongsan Wanggalbi — 17:00–21:00, 435 m from the stadium", "W5"]
          ],
          note: "Every stop today sits inside the World Cup Park cluster — no further transit after the single Line 6 ride out. Silver-grass note: Haneul Park's October festival has ended, so this is a viewpoint walk, not a foliage stop." },
        { date: "Wed 18 Nov", pace: "busy", title: "Film archive & Mangwon day (Line 6)",
          items: [
            ["10:00", "Line 6 to Digital Media City (DMC)", null],
            ["10:30", "Korean Film Museum — Tue–Sat 10:30–19:00, free", "K2"],
            ["13:00", "Lunch: Mangwon Market — one stop back on Line 6, open Wed under either schedule", "W3"],
            ["15:00", "Cafe Gongmyung Mangwon Book Bakery — 152 m from Mangwon Station", "W4"],
            ["16:00", "Seoul Battleship Park — winter hours to 18:00, ₩3,000 adult", "W6"],
            ["19:00", "Cinematheque KOFA free screening — back at DMC, book from 11:00", "K1"]
          ],
          note: "DMC and Mangwon are one stop apart, so today has two short Line-6 hops (DMC→Mangwon→DMC). Every stop is otherwise on foot within each cluster. Check the screening's language before booking — many KOFA titles are Korean-only." },
        { date: "Thu 19 Nov", pace: "relax", title: "Recovery day in the core",
          items: [
            ["10:00", "Long walk up Gyeongui Line Forest Park and back", "H6"],
            ["12:30", "Lunch: Eongteori Saenggogi (all-you-can-eat, 11:00–23:00)", "F4"],
            ["15:00", "Rest at the hotel — afternoon deliberately left empty", null],
            ["18:00", "Indiespace — 80 m from Exit 8, open to 20:00", "H1"],
            ["20:30", "Late dinner: MGM Hongdae (last order 23:30)", "F3"]
          ] },
        { date: "Fri 20 Nov", pace: "moderate", title: "Art, cafés & after-dark Friday",
          items: [
            ["11:00", "Seoul Art Space Seogyo — Art Info kiosk 11:00–22:00, free", "H10"],
            ["12:30", "Lunch: Busanjib Hongdae (last order 21:00, no alcohol)", "F2"],
            ["14:30", "B-hind affogato — 70 m from Colline; or FLAN next door", "C4"],
            ["16:00", "KT&G Sangsangmadang — design shop and gallery floors", "H4"],
            ["19:00", "Hongdae Walking Street — car-free Friday, busking at its fullest", "H9"],
            ["21:00", "GMH Dabang — wine saloon, open to 24:00 on Friday", "C5"]
          ] },
        { date: "Sat 21 Nov", pace: "relax", title: "Easy Saturday",
          items: [
            ["11:00", "Avelop Hongdae Flagship (Sat opens 11:00)", "F7"],
            ["12:30", "Hongik Cultural Park / Drawing Village — Tue–Sun 10:00–18:00", "H7"],
            ["15:00", "Colline — flower café, cotton latte", "C1"],
            ["18:00", "Dinner: MGM Hongdae or Chosun Hwaro Gui (after 17:00 break)", "F3"]
          ] },
        { date: "Sun 22 Nov", pace: "relax", title: "Check out",
          items: [
            ["08:00", "Hotel breakfast (07:00–10:00, last entry 09:30)", null],
            ["10:00", "Final walk on the forest park", "H6"],
            ["12:00", "Check out — 12:00 is the hotel's stated latest time", null]
          ],
          note: "Chosun Hwaro Gui is closed Sundays and is not scheduled today." }
      ]
    },
    {
      id: "I12",
      name: "Art, Indie & After-Dark Hongdae",
      tagline: "The week for galleries, busking, cafés and late nights — every stop on foot.",
      best: "Two travellers who want the creative Hongdae — art spaces, indie cinema, street performance and wine — with no transit at all.",
      transitDays: 0,
      summary: "A zero-transit week built from the art and night-time side of the verified list: the SFAC art space, the official busking street, indie cinema, three Sangsu cafés and the latest-closing restaurants. Nothing is scheduled before 10:00 and most days end after dark.",
      days: [
        { date: "Mon 16 Nov", pace: "relax", title: "Arrive",
          items: [
            ["15:00", "Check in at the hotel (Exit 9)", null],
            ["17:00", "Dinner: Busanjib Hongdae (5 min walk)", "F2"],
            ["19:00", "First busking stroll on the Walking Street", "H9"]
          ] },
        { date: "Tue 17 Nov", pace: "moderate", title: "Art & design day",
          items: [
            ["11:00", "Seoul Art Space Seogyo — open Tue, free", "H10"],
            ["12:30", "Lunch: Masichaina — Korean-Chinese, arrive before the 16:00 break", "S2"],
            ["14:30", "B-hind — affogato al caffè (Mon–Fri from 11:30)", "C4"],
            ["16:00", "KT&G Sangsangmadang — design shop and gallery floors", "H4"],
            ["19:00", "Dinner: Chosun Hwaro Gui — after its 15:00–17:00 break", "F6"]
          ],
          note: "GMH Dabang is closed Tuesdays, so the wine saloon is not today." },
        { date: "Wed 18 Nov", pace: "moderate", title: "Cafés, flan & a film",
          items: [
            ["11:00", "FLAN — French flan shop, opens 11:00", "C2"],
            ["12:30", "Lunch: Eongteori Saenggogi (Eoulmadang-ro, 11:00–23:00)", "F4"],
            ["14:30", "Colline — flower café (Sun–Thu to 23:00)", "C1"],
            ["16:00", "Cafe aA — museum café, daily 12:00–23:30", "C6"],
            ["18:30", "Indiespace — indie film, 80 m from Exit 8", "H1"],
            ["20:30", "Late dinner: MGM Hongdae (last order 23:30)", "F3"]
          ] },
        { date: "Thu 19 Nov", pace: "moderate", title: "Yeonnam café day",
          items: [
            ["10:30", "Antique Coffee Yeonnam — first coffee", "Y1"],
            ["12:30", "Lunch: Jincheongyujeom — before the 15:30 weekday break", "Y2"],
            ["15:00", "Parole & Langue — square pies, opens 13:00, open today", "Y3"],
            ["17:00", "Café Layered Yeonnam — 120 m further on", "Y4"],
            ["19:00", "Dinner: YANG IN HWAN DAE (weekday hours 16:00–22:00)", "F5"]
          ] },
        { date: "Fri 20 Nov", pace: "busy", title: "After-dark Friday",
          items: [
            ["11:00", "Hongik Cultural Park / Drawing Village — Tue–Sun 10:00–18:00", "H7"],
            ["13:00", "Lunch: Blue Roof Town Hongdae Branch", "F1"],
            ["15:00", "Trick Eye Museum — open to 22:00, last admission 21:00", "H3"],
            ["17:00", "Hongdae Walking Street — car-free Friday, busking peaks", "H9"],
            ["19:30", "Dinner: Seogang Kkeopdegi (opens 16:00) — pork rind, Hapjeong side", "S3"],
            ["21:30", "GMH Dabang — wine saloon, open to 24:00", "C5"]
          ] },
        { date: "Sat 21 Nov", pace: "moderate", title: "Saturday markets & stages",
          items: [
            ["11:00", "Avelop Hongdae Flagship (Sat opens 11:00)", "F7"],
            ["12:30", "Walk past Hongik Cultural Park — if the Free Market is running it is here; it is NOT confirmed for 2026", "H8"],
            ["14:00", "Lunch: Busanjib Hongdae", "F2"],
            ["16:00", "Hongdae Walking Street — Saturday busking in full swing", "H9"],
            ["18:30", "Dinner: Chosun Hwaro Gui — after the 17:00 break", "F6"]
          ] },
        { date: "Sun 22 Nov", pace: "relax", title: "Check out",
          items: [
            ["08:30", "Hotel breakfast — last entry 09:30", null],
            ["10:00", "Final walk on the forest park", "H6"],
            ["12:00", "Check out", null]
          ] }
      ]
    }
  ];

  /* ---------------- FLAGS ---------------- */
  const FLAGS = [
    { level: "high", item: "Hongdae Free Market", text: "Not confirmed for the 2026 season. The organiser domain freemarket.or.kr no longer serves the market (it resolves to a parked search page), the venue has been rebranded, and TripAdvisor's listing shows a “reported permanently closed” notice. Removed as a planned activity everywhere; kept only as “walk past on Saturday and see”.", src: [["freemarket.or.kr as fetched 2026-09-01", "http://www.freemarket.or.kr/"]] },
    { level: "high", item: "Hongik Cultural Park (old “Hongdae Playground”)", text: "The site changed. Visit Seoul's page, edited 8 Jul 2026, states it was rebuilt in December 2025 and reopened as “Drawing Village”, now with hours 10:00–18:00, Tue–Sun, closed Mondays. Any guide still describing it as a 24-hour playground is out of date.", src: [["Visit Seoul ENP011070", "https://english.visitseoul.net/area/Hongdae-Playground/ENP011070"]] },
    { level: "high", item: "Seoul World Cup Stadium Tour", text: "Advance reservation is mandatory — the operator's page states 현장예매는 불가 (no on-the-day ticket sales). Book via Seoul's public service reservation site; payment is then taken on site. Tour is closed Mondays and on match days.", src: [["Seoul Facilities Corporation", "https://www.sisul.or.kr/open_content/worldcup/guidance/course.jsp"], ["Booking", "https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S251229135612718733"]] },
    { level: "med", item: "YANG IN HWAN DAE Hongdae", text: "Only Monday–Friday 16:00–22:00 is printed on the official page. Weekend hours are unknown, so it is scheduled on weekdays only.", src: [["Visit Seoul ENPxuebom", "https://english.visitseoul.net/editorspicks/YANGINHWANDAEHongdae/ENPxuebom"]] },
    { level: "med", item: "Mangwon Market", text: "Two official Visit Seoul pages disagree: the market listing says daily 10:00–21:00; the traditional-markets feature says 09:00–22:00, closed Tuesdays and Sundays. Scheduled only Wed–Sat and never as a day's only activity.", src: [["Market listing", "https://english.visitseoul.net/shopping/Mangwon-Market/ENP037950"], ["Markets feature", "https://english.visitseoul.net/tours/Munch-and-Chew-Taste-and-Enjoy-Korean-Traditional-Markets/ENN032105"]] },
    { level: "med", item: "Trick Eye Museum admission price", text: "The official site publishes hours (09:00–22:00, last admission 21:00, open year round) but no price on the hours or directions pages. Third-party prices circulate at ₩12,000–₩15,000; none of them is official, so no price is quoted here.", src: [["Trickeye hours page", "https://www.trickeye.com/seoul/Visit"]] },
    { level: "med", item: "Gyeongui Line Book Street Monday opening", text: "VisitKorea's official listing says open all year round, 11:00–20:00 with a 12:30–13:30 break. Several travel guides claim a Monday closure. It is only ever used as a stroll, never a fixed appointment.", src: [["VisitKorea 64574", "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=64574"]] },
    { level: "med", item: "KT&G Sangsangmadang page availability", text: "The Visit Seoul detail page returned HTTP 500 on direct fetch during the verification pass. Hours (11:00–21:00 daily, year round) and the address were read from the same official page as served through search. Worth a look at the door.", src: [["Visit Seoul ENP024561", "https://english.visitseoul.net/area/KT-G-Sangsang-Madang-en/ENP024561"]] },
    { level: "low", item: "Kings of Convenience booking", text: "YES24 requires a registered account with passport identity verification before purchase. Do this before the ticket you want sells out, not on the night.", src: [["YES24 Perf 59136", "https://ticket.yes24.com/English/Perf/59136"]] },
    { level: "low", item: "《The Glass Menagerie》 language", text: "Korean-language production, 120 minutes, no interval printed. Elementary-school age and above. Not recommended if neither traveller reads Korean.", src: [["SAC SN=83392", "https://www.sac.or.kr/site/main/show/show_view?SN=83392"]] },
    { level: "low", item: "Mapo Art Center in the stay window", text: "There is no ticketed MFAC performance at all between Nov 16 and Nov 22 on the official calendar. The next ones are Nov 25 and Nov 29, both after check-out. Only the free Mapo Music Gallery runs during the stay.", src: [["MFAC schedule", "https://www.mfac.or.kr/performance/whole_list.jsp"]] },
    { level: "low", item: "Mapo Art Center play 〈투신〉 (Diving) — season-lineup only", text: "The KoreaFun repo records a co-produced play 〈투신〉 (Geukgongjakso Mabangjin, dir. Go Sun-woong) announced for Nov 13–21, 2026 at Art Hall MAC in the foundation's 2026 season lineup. As of the 2026-09-02 fetch of the official calendar it is NOT yet listed with times or prices, so it cannot be scheduled. If it appears on the official calendar in October, the in-window dates (Tue 17 – Sat 21 Nov) would make it the strongest Mapo theatre option of the stay — re-check then.", src: [["MFAC official calendar (negative evidence, fetched 2026-09-02)", "https://www.mfac.or.kr/performance/whole_list.jsp"], ["KoreaFun repo — KoreaFun/audit + seoul-districts.md entry 9", "https://github.com/karagemop466-tech/KoreaFun"], ["Season-lineup announcement (corroboration only)", "http://www.thepreview.co.kr/news/articleView.html?idxno=12022"]] },
    { level: "low", item: "Hotel check-out", text: "Accor's official page states check-in from 15:00 and check-out up to 12:00. Sunday 22 Nov is planned around a 12:00 hard stop.", src: [["Accor B696", "https://all.accor.com/hotel/B696/index.en.shtml"]] },
    { level: "med", item: "FC Seoul — K League 1 Final Rounds at Seoul World Cup Stadium", text: "The final rounds run Oct 31 – Dec 6, 2026, and FC Seoul play their home matches at the World Cup Stadium, ~15 min from the hotel on Line 6. Individual fixtures are only announced around mid-October, so NO in-window home match is confirmed yet. If a home game lands on 16–22 Nov it would be the best Mapo sporting evening of the stay — but it is not scheduled in any itinerary, and a match day also closes the stadium tour (W2). Re-check fcseoul.com / kleague.com in October.", src: [["K League official", "https://www.kleague.com"], ["FC Seoul official", "https://www.fcseoul.com"]] },
    { level: "low", item: "Korea national-team friendlies (Nov 9–17 window)", text: "The November FIFA window carries two Korea friendlies; the venue is not yet fixed and could be Seoul World Cup Stadium. If announced for the stadium inside the stay it would affect the stadium tour on that day. Watch kfa.or.kr.", src: [["Korea Football Association", "https://www.kfa.or.kr"]] },
    { level: "low", item: "“Culture Flowing Through Seoul Plaza” — free Wednesday concerts", text: "Free outdoor concerts on Wednesdays (~18:30) through the season; Wed 18 Nov falls inside the stay. The stage is Seoul Plaza at City Hall — a cross-city trip, so it is kept out of the Hongdae-focused core and listed here for anyone willing to cross the city that evening.", src: [["Seoul festival calendar", "https://festival.seoul.go.kr"]] },
    { level: "med", item: "Haneul Park silver grass in mid-November", text: "The silver-grass (eoksae) festival is October (2025: Oct 18–24) and the city extended the grass-field viewing only to 2 Nov. By 16–22 Nov the plateau is expected to be mostly cleared — Haneul Park is kept as a free city-viewpoint walk (cart up / steps), not a foliage stop. Also, parks.seoul.go.kr returned HTTP 500 on this pass, so park/cart hours should be re-confirmed nearer the date.", src: [["Seoul Eoksae Festival notice", "https://news.seoul.go.kr/env/archives/564833"]] },
    { level: "med", item: "Cafe aA opening hours may be stale", text: "The official Visit Seoul page was last edited 1 Feb 2021. The printed hours (daily 12:00–23:30) are carried as-is but should be confirmed the morning you go; it is never a day's only stop.", src: [["Visit Seoul ENP000997", "https://english.visitseoul.net/restaurants/cafe-aA-EN/ENP000997"]] },
    { level: "med", item: "Seoul Energy Dream Center opening time", text: "The city energy-portal notice prints 09:00–17:30 (Tue–Sun); VisitKorea prints 09:30–17:30 with last entry 17:00. Arrive after 09:30 and you are safe under either.", src: [["Seoul energy portal", "https://energyinfo.seoul.go.kr/board/content?menu-id=Z110100&boardType=0001&boardNo=378"], ["VisitKorea", "https://access.visitkorea.or.kr/ms/detail.do?cotId=c32b848d-3b48-4e72-8030-2da73e98a77e"]] },
    { level: "low", item: "Cinematheque KOFA — free but plan the evening", text: "Screenings are free but ticketed: online booking opens 11:00 (2 per person) and there is no late entry. It is closed Sundays and Mondays, and many titles are Korean-language — check the individual film's page for subtitles before booking.", src: [["Cinematheque KOFA visitor guide", "https://www.koreafilm.or.kr/pages/PC_00000004"]] }
  ];

  const VERIFIED_ON = "2026-09-01 initial verification of all items · 2026-09-02 full re-verification (every page re-fetched) + 8 new items (C1–C3, N3–N4, W4–W6) · 2026-09-02 pass 3: 10 further items verified line-by-line from official pages (Cinematheque KOFA, Korean Film Museum, Energy Dream Center, Haneul Park, Hongdae Walking Street, Seoul Art Space Seogyo, B-hind, GMH Dabang, Cafe aA, Dok-Dabang) and two new itineraries (I11, I12)";
  return { STAY, CLUSTERS, EVENTS, PLACES, ITINS, FLAGS, EXCLUDED, VERIFIED_ON };
})();
