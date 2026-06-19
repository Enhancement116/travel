const itinerary = [
  {
    day: 'Day 1',
    date: '9/15',
    badge: '抵達日',
    title: '金浦機場落地到忠武路住宿',
    summary: '從金浦入境後先辦交通卡、搭 AREX 與地鐵到 G3 Hotel，再去明洞和晚餐行程。',
    routeMeta: ['氣候同行卡：KRW 15,000 / 人', 'Tmoney：KRW 5,000 / 人', '交通票價多為 KRW 1,550 / 人', 'Olive Young：KRW 150,800', '退稅：KRW 9,000', '刷卡：KRW 176,500', '乙支路店用餐：KRW 79,000（刷卡）'],
    costSummary: {
      title: 'Day 1 固定支出統整',
      total: 'KRW 284,500',
      netTotal: 'KRW 275,500',
      note: '交通卡已另外單獨列出，單趟票價不納入 Day 1 固定支出統整；退稅已另外扣除，並併入原 Day 2 宵夜。',
      items: [
        { label: '交通卡', value: 'KRW 20,000', detail: '氣候同行卡 + Tmoney' },
        { label: '乙支路店用餐', value: 'KRW 79,000', detail: '刷卡' },
        { label: 'Olive Young', value: 'KRW 150,800', detail: '刷卡前消費金額' },
        { label: '宵夜外送 bhc', value: 'KRW 34,700', detail: '刷卡（由 Day 2 調整併入）' },
        { label: '退稅', value: '- KRW 9,000', detail: '已回收金額' }
      ]
    },
    highlights: [
      '出發前先在台灣換 USD 4,000 + KRW 40,000。',
      '跟隨地上藍色標誌 AREX，橘色為直達、藍色為普通。',
      '首站先到 GS25 辦 Tmoney 與氣候同行卡，再轉到首爾站與 G3 Hotel。',
      '到韓國一品香時再把 USD 4,000 換成 KRW 5,500,000。',
      '一品香換完後直接去乙支路店用餐，費用為 KRW 79,000，刷卡。'
    ],
    steps: [
      {
        title: '金浦機場落地 / 匯兌準備',
        type: '入境 / 交通卡',
        details: ['出發前先在台灣換：USD 4,000 + KRW 40,000', '17:40 抵達，19:00 出關', '機場推車最遠可推至此', '金浦機場 -> GS25 Tmoney、氣候同行卡 -> 首爾站 -> G3 Hotel']
      },
      {
        title: 'G3 Hotel -> 一品香',
        type: '地鐵 / 步行',
        details: ['走路時間：2 分鐘', '上車：忠武路 4 號線', '下車：明洞站', '票價：KRW 1,550 / 人', '搭乘時間：1 分鐘', '走路時間：7 分鐘']
      },
      {
        title: '一品香 -> 黃牛 pungcheon 淡水鰻魚 / sukseongdo 乙支路店',
        type: '晚餐路線',
        details: ['走路時間：9 分鐘', '上車：乙支路入口站 6 號出口 2 號線', '下車：乙支路3街站 1 號出口', '搭乘時間：1 分鐘', '走路時間：2 分鐘']
      },
      {
        title: '吃食 -> G3 Hotel',
        type: '返回住宿',
        details: ['走路時間：5 分鐘', '上車：乙支路3街站 1 號出口 3 號線', '下車：忠武路站 6 號出口', '搭乘時間：1 分鐘', '走路時間：3 分鐘']
      },
      {
        title: 'G3 Hotel -> APM',
        type: '夜間行程',
        details: ['走路時間：2 分鐘', '上車：忠武路站 6 號出口 4 號線', '下車：東大門歷史文化公園站 10 號出口', '票價：KRW 1,550 / 人', '搭乘時間：2 分鐘', '搭乘 APM 接駁車（需先掃 QR CODE）']
      },
      {
        title: 'APM -> G3 Hotel',
        type: '回程',
        details: ['Uber']
      }
    ]
  },
  {
    day: 'Day 2',
    date: '9/16',
    badge: '視力與購物',
    title: '廣藏市場、眼科、Hannam 眼鏡店',
    summary: '早上去廣藏市場，下午安排眼科與 Hannam 眼鏡店，最後接上和平餐廳。',
    routeMeta: ['廣藏市場 13:00 左右撤退', '明目眼科 14:30', '多段換乘，請預留步行銜接時間', '含原 Day 3 宵夜外送炸雞 KRW 38,000'],
    costSummary: {
      title: 'Day 2 刷卡 / 現金統整',
      total: 'KRW 6,327,800',
      netTotal: '現金 KRW 5,070,000 + 刷卡 KRW 1,257,800',
      note: '此日依你提供內容統整；眼科費用分成現金與刷卡兩筆，明洞衣服已用實際刷卡金額 KRW 112,800 計算，並改列原 Day 3 宵夜外送炸雞 KRW 38,000。',
      items: [
        { label: '眼科費用 - 現金', value: 'KRW 5,000,000', detail: '眼科現金支付' },
        { label: '眼科費用 - 刷卡', value: 'KRW 1,100,000', detail: '眼科刷卡支付' },
        { label: '風川鰻魚', value: 'KRW 70,000', detail: '現金' },
        { label: '西瓜汁', value: 'KRW 6,000', detail: '刷卡' },
        { label: '明洞衣服', value: 'KRW 112,800', detail: '原價 KRW 119,800，退稅 KRW 7,000，實際刷卡' },
        { label: '宵夜外送炸雞', value: 'KRW 38,000', detail: '刷卡（由 Day 3 調整併入）' }
      ]
    },
    highlights: [
      '這一天的交通最碎，轉乘很多，建議抓寬鬆時間。',
      '廣藏市場後直接接明目眼科，然後再往新沙 / 漢江鎮方向移動。',
      'Lash Eyewear Hannam 改為風川鰻魚，並以刷卡 KRW 70,000 計算。',
      '明洞衣服原價 KRW 119,800，退稅 KRW 7,000，實刷 KRW 112,800。',
      '原 Day 3 宵夜外送炸雞 KRW 38,000 已改列至 Day 2。'
    ],
    steps: [
      {
        title: 'G3 Hotel -> 廣藏市場',
        type: '市場行程',
        details: ['走路時間：3 分鐘', '上車：忠武路站 6 號出口 3 號線', '下車：鍾路3街站 3 號線', '搭乘時間：2 分鐘', '走路換乘：3 分鐘', '上車：鍾路3街站 1 號線', '下車：鍾路5街站 7 號出口', '搭乘時間：1 分鐘', '走路時間：1 分鐘']
      },
      {
        title: '廣藏市場 -> 明目眼科',
        type: '醫療 / 預約',
        details: ['廣藏市場（13.撤退）', '上車：鍾路5街站 7 號出口 1 號線', '下車：鷺梁津站', '搭乘時間：17 分鐘', '走路換乘：8 分鐘', '上車：鷺梁津站 9 號線', '下車：新論峴站 8 號出口', '搭乘時間：10 分鐘', '走路時間：1 分鐘', '眼科花費：現金 KRW 5,000,000 + 刷卡 KRW 1,100,000']
      },
      {
        title: '明目眼科 -> Lash Eyewear Hannam',
        type: '眼鏡店',
        details: ['走路時間：2 分鐘', '上車：新論峴站 8 號出口新盆唐線', '下車：新沙站', '搭乘時間：3 分鐘', '走路換乘：4 分鐘', '上車：新沙站 3 號線', '下車：藥水站', '搭乘時間：7 分鐘', '走路換乘：2 分鐘', '上車：藥水站 6 號線', '下車：漢江鎮站 1 號出口', '票價：2550/人', '搭乘時間：3 分鐘', '走路時間：5 分鐘']
      },
      {
        title: 'Lash Eyewear Hannam -> 黃金 Peace Hannam',
        type: '步行銜接',
        details: ['走路時間：7 分鐘']
      },
      {
        title: '黃金 Peace Hannam -> 黃牛 pungcheon 淡水鰻魚 / sukseongdo 乙支路店',
        type: '晚餐路線',
        details: ['走路時間：8 分鐘', '上車：漢江鎮站 3 號出口 6 號線', '下車：藥水站', '搭乘時間：3 分鐘', '走路換乘：3 分鐘', '上車：藥水站 3 號線', '下車：乙支路3街站 1 號出口', '搭乘時間：4 分鐘', '走路時間：5 分鐘']
      },
      {
        title: '吃食 -> 明洞街',
        type: '晚間行程',
        details: ['走路時間：2 分鐘', '上車：乙支路3街站 1 號出口 2 號線', '下車：乙支路入口站 6 號出口', '搭乘時間：1 分鐘', '走路時間：8 分鐘']
      },
      {
        title: '明洞站 4 號線 -> G3 Hotel',
        type: '回程',
        details: ['上車：明洞站 4 號線', '下車：忠武路站 6 號出口', '搭乘時間：1 分鐘', '走路時間：2 分鐘']
      }
    ]
  },
  {
    day: 'Day 3',
    date: '9/17',
    badge: '弘大 / 百貨',
    title: '上水、樂天百貨、明洞往返',
    summary: '以 G3 Hotel 為中樞，安排弘大上水站與樂天百貨公司總店，再回明洞與飯店。',
    routeMeta: ['刷卡：KRW 580,790', '現金：KRW 245,000', '退稅：KRW 30,000', '合計淨支出：KRW 825,790'],
    costSummary: {
      title: 'Day 3 刷卡 / 現金統整',
      total: 'KRW 855,790',
      netTotal: '現金 KRW 245,000 + 刷卡 KRW 580,790',
      note: 'DAY 3 依你提供的順序重排為 8-1-2-3-4-5-6-11-12-7-9；有退稅的品項以實際刷卡金額計入，總退稅合計 KRW 30,000。原 Day 3 宵夜 KRW 38,000 已調整到 Day 2，並新增炸雞 KRW 30,900。',
      items: [
        { label: '午餐：望遠市場辣椒', value: 'KRW 19,500', detail: '刷卡' },
        { label: '飲品', value: 'KRW 3,700', detail: '刷卡' },
        { label: '咖啡廳', value: 'KRW 25,400', detail: '刷卡' },
        { label: 'BLUE ELEPENT', value: 'KRW 89,800', detail: '原價 KRW 94,800，退稅 KRW 5,000，實刷' },
        { label: 'ck', value: 'KRW 122,000', detail: '原價 KRW 130,000，退稅 KRW 8,000，實刷' },
        { label: '服飾', value: 'KRW 50,000', detail: '原價 KRW 55,000，退稅 KRW 5,000，實刷' },
        { label: 'MMLG', value: 'KRW 209,490', detail: '原價 KRW 221,490，退稅 KRW 12,000，實刷' },
        { label: '晚餐：生韓牛 / 桌邊代烤', value: 'KRW 46,000', detail: '生韓牛 KRW 30,000 刷卡 + 桌邊代烤 KRW 16,000 現金' },
        { label: '東大門服飾', value: 'KRW 229,000', detail: '85,000 + 36,000 + 72,000 + 36,000，皆現金' },
        { label: '宵夜外送炸雞', value: 'KRW 30,900', detail: '刷卡（由 Day 4 指定列入 Day 3）' }
      ]
    },
    highlights: [
      '這一天重複回到 G3 Hotel，行程較像往返式路線。',
      'Lotte 百貨公司總店後接 Gunja 大韓肥腸明洞店。'
    ],
    steps: [
      {
        title: 'G3 Hotel -> 弘大上水站',
        type: '上午外出',
        details: ['走路時間：3 分鐘', '上車：忠武路站 6 號出口 3 號線', '下車：藥水站', '搭乘時間：3 分鐘', '走路換乘：5 分鐘', '上車：藥水站 6 號線', '下車：上水站 1 號出口', '搭乘時間：18 分鐘']
      },
      {
        title: '弘大上水站 -> G3 Hotel',
        type: '回程',
        details: ['上車：上水站 6 號線', '下車：藥水站', '搭乘時間：18 分鐘', '走路換乘：6 分鐘', '上車：藥水站 3 號線', '下車：忠武路站 6 號出口', '搭乘時間：3 分鐘', '走路時間：3 分鐘']
      },
      {
        title: 'G3 Hotel -> Lotte 百貨公司總店',
        type: '百貨 / 購物',
        details: ['走路時間：3 分鐘', '上車：忠武路站 6 號出口 3 號線', '下車：乙支路3街站', '搭乘時間：1 分鐘', '走路換乘：5 分鐘', '上車：乙支路3街站 2 號線', '下車：乙支路入口站 7 號出口', '搭乘時間：2 分鐘']
      },
      {
        title: 'Lotte 百貨公司總店 -> Gunja 大韓肥腸明洞店',
        type: '晚餐',
        details: ['走路時間：8 分鐘', '明洞站 -> G3 Hotel', '上車：明洞站 4 號線', '下車：忠武路站 6 號出口', '搭乘時間：1 分鐘', '走路時間：2 分鐘']
      }
    ]
  },
  {
    day: 'Day 4',
    date: '9/18',
    badge: '醫療 / 景福宮',
    title: '眼科、醬蟹、景福宮與甜點',
    summary: '早上先看眼科，再接醬蟹、景福宮和下午的 bakery / bakery-like 甜點行程。',
    routeMeta: ['G3 Hotel 9:30 出門', '明目眼科 10:30', '景福宮與甜點行程需抓步行時間', '刷卡：KRW 560,300', '退稅：KRW 16,000'],
    costSummary: {
      title: 'Day 4 刷卡 / 退稅統整',
      total: 'KRW 576,300',
      netTotal: '刷卡 KRW 560,300',
      note: 'Day 4 全部以刷卡記錄，含藥膏、醬蟹、ADIDAS、三筆 Olive Young、晚餐 Muguok 與宵夜外送豬蹄；退稅合計 KRW 16,000。',
      items: [
        { label: '藥膏', value: 'KRW 27,000', detail: '刷卡' },
        { label: '午餐醬蟹', value: 'KRW 145,000', detail: '刷卡' },
        { label: 'ADIDAS', value: 'KRW 132,000', detail: '原價 KRW 139,000，退稅 KRW 7,000，實刷' },
        { label: 'OLIVE YOUNG #1', value: 'KRW 28,400', detail: '原價 KRW 30,400，退稅 KRW 2,000，實刷' },
        { label: '晚餐 Muguok', value: 'KRW 80,000', detail: '刷卡' },
        { label: 'OLIVE YOUNG #2', value: 'KRW 70,800', detail: '原價 KRW 75,800，退稅 KRW 5,000，實刷' },
        { label: 'OLIVE YOUNG #3', value: 'KRW 37,000', detail: '原價 KRW 39,000，退稅 KRW 2,000，實刷' },
        { label: '消夜外送豬蹄', value: 'KRW 40,100', detail: '刷卡' }
      ]
    },
    highlights: [
      '明目眼科後接 Han 女士醬蟹，再前往景福宮。',
      '後半段有 Muguok 與 Artist Bakery 兩個吃食點。',
      'Day 4 列入藥膏、醬蟹、ADIDAS、Olive Young 三筆與宵夜外送豬蹄。'
    ],
    steps: [
      {
        title: 'G3 Hotel -> 明目眼科',
        type: '早診',
        details: ['G3 Hotel（9.30 出門）', '走路時間：3 分鐘', '上車：忠武路站 6 號出口 3 號線', '下車：新沙站', '搭乘時間：11 分鐘', '走路換乘：3 分鐘', '上車：新沙站新盆唐線', '下車：新論峴站 8 號出口', '票價：2550/人', '搭乘時間：2 分鐘', '走路時間：2 分鐘']
      },
      {
        title: '明目眼科 -> Han 女士醬蟹',
        type: '午餐',
        details: ['走路時間：2 分鐘', '上車：新沙站新盆唐線', '下車：江南站', '搭乘時間：1 分鐘', '走路換乘：8 分鐘', '上車：江南站 2 號線', '下車：瑞草站 1 號出口', '票價：2550/人', '搭乘時間：4 分鐘', '走路時間：3 分鐘']
      },
      {
        title: '吃食 -> 景福宮',
        type: '景點',
        details: ['走路時間：7 分鐘', '上車：首爾教育大學站 9 號出口 3 號線', '下車：景福宮站 4 號出口', '搭乘時間：24 分鐘', '走路時間：7 分鐘']
      },
      {
        title: '景福宮 -> Muguok',
        type: '晚餐前後',
        details: ['走路時間：8 分鐘']
      },
      {
        title: '吃食 -> Artist Bakery',
        type: '甜點',
        details: ['走路時間：7 分鐘']
      },
      {
        title: '吃食 -> G3 Hotel',
        type: '回程',
        details: []
      }
    ]
  },
  {
    day: 'Day 5',
    date: '9/19',
    badge: '返程日',
    title: '首爾站到仁川機場',
    summary: '最後一天從飯店回首爾站，再轉往仁川機場，辦理退稅與 SES 快速通關。',
    routeMeta: ['需先換 AREX 直達車票', '辦理業務：退稅', 'SES 快速通關', 'Day 5 皆為刷卡', '仁川機場免稅店酒：USD 96（刷卡）', '仁川機場免稅店伴手禮：USD 35（刷卡）', '仁川機場免稅店合計：USD 131（刷卡）', '兩人機票來回：NTD 14,219（刷卡）', '兩人住宿 1 房 4 晚：NTD 17,289（刷卡）'],
    costSummary: {
      title: 'Day 5 返程消費統整',
      total: 'USD 131 + NTD 31,508',
      netTotal: '刷卡 USD 131 + NTD 31,508',
      note: 'Day 5 皆為刷卡，含仁川機場免稅店兩項消費，以及兩人機票來回與兩人住宿 1 房 4 晚。',
      items: [
        { label: '仁川機場免稅店酒', value: 'USD 96', detail: 'USD 48 * 2，刷卡' },
        { label: '仁川機場免稅店伴手禮', value: 'USD 35', detail: '刷卡' },
        { label: '兩人機票來回', value: 'NTD 14,219', detail: '刷卡' },
        { label: '兩人住宿（1 房 4 晚）', value: 'NTD 17,289', detail: '刷卡' }
      ]
    },
    highlights: [
      '這一天不安排觀光，重點在順利銜接機場交通。',
      '首爾站段落只要確認 AREX 車票與時間即可。',
      '仁川機場免稅店新增消費：酒 USD 48 * 2、伴手禮 USD 35。',
      'Day 5 補入兩人機票來回 NTD 14,219 與兩人住宿 1 房 4 晚 NTD 17,289，皆刷卡。'
    ],
    steps: [
      {
        title: 'G3 Hotel -> 首爾站',
        type: '飯店退房後移動',
        details: ['走路時間：2 分鐘', '上車：忠武路站 6 號出口 4 號線', '下車：首爾站', '票價：1550/人', '搭乘時間：4 分鐘']
      },
      {
        title: '首爾站 -> 仁川機場',
        type: '返國',
        details: ['走路', '需先換 AREX 直達車票', '辦理業務：退稅', 'SES 快速通關', '仁川機場免稅店酒：USD 48 * 2，刷卡', '仁川機場免稅店伴手禮：USD 35，刷卡']
      }
    ]
  }
];

const statGrid = document.getElementById('statGrid');
const dayNav = document.getElementById('dayNav');
const dayDateLabel = document.getElementById('dayDateLabel');
const dayTitle = document.getElementById('dayTitle');
const daySummary = document.getElementById('daySummary');
const dayBadge = document.getElementById('dayBadge');
const routeMeta = document.getElementById('routeMeta');
const costCard = document.getElementById('costCard');
const costTitle = document.getElementById('costTitle');
const costTotal = document.getElementById('costTotal');
const costGrid = document.getElementById('costGrid');
const costNote = document.getElementById('costNote');
const timeline = document.getElementById('timeline');

const stats = [
  { label: '總天數', value: '5' },
  { label: '核心住宿', value: 'G3 Hotel' },
  { label: '主要城市區域', value: '明洞 / 江南 / 弘大 / 景福宮' },
  { label: '機+酒', value: 'NTD 14,219 + 17,289 = 31,508' },
  { label: '現金 KRW', value: 'KRW 5,335,000' },
  { label: '刷卡 KRW', value: 'KRW 2,654,390' },
  { label: '刷卡 USD', value: 'USD 131' }
];

function renderStats() {
  statGrid.innerHTML = stats.map((stat) => `
    <div class="stat">
      <span>${stat.label}</span>
      <span class="value">${stat.value}</span>
    </div>
  `).join('');
}

function renderNavigation(selectedIndex) {
  dayNav.innerHTML = itinerary.map((entry, index) => `
    <button class="${index === selectedIndex ? 'active' : ''}" data-index="${index}" type="button" aria-pressed="${index === selectedIndex}">
      <strong>${entry.day}</strong>
      <small>${entry.date}</small>
    </button>
  `).join('');
}

function renderDay(index) {
  const day = itinerary[index];
  dayDateLabel.textContent = `${day.date} · ${day.day}`;
  dayTitle.textContent = day.title;
  daySummary.textContent = day.summary;
  dayBadge.textContent = day.badge;

  routeMeta.innerHTML = day.routeMeta.map((item) => `<span class="meta-pill">${item}</span>`).join('');

  if (day.costSummary) {
    costCard.hidden = false;
    costTitle.textContent = day.costSummary.title;
    costTotal.textContent = `合計 ${day.costSummary.total} / 淨支出 ${day.costSummary.netTotal}`;
    costGrid.innerHTML = day.costSummary.items.map((item) => `
      <div class="cost-item">
        <div>
          <strong>${item.label}</strong>
          <span>${item.detail}</span>
        </div>
        <strong>${item.value}</strong>
      </div>
    `).join('');
    costNote.textContent = day.costSummary.note;
  } else {
    costCard.hidden = true;
    costTitle.textContent = '';
    costTotal.textContent = '';
    costGrid.innerHTML = '';
    costNote.textContent = '';
  }

  timeline.innerHTML = day.steps.map((step) => `
    <section class="route-card">
      <div class="route-head">
        <h3 class="route-title">${step.title}</h3>
        <span class="route-type">${step.type}</span>
      </div>
      ${step.details.length ? `<ul class="route-details">${step.details.map((detail) => `<li>${detail}</li>`).join('')}</ul>` : '<ul class="route-details"><li>尚未填入更細的步驟內容。</li></ul>'}
    </section>
  `).join('');

  renderNavigation(index);
}

dayNav.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-index]');
  if (!button) return;
  renderDay(Number(button.dataset.index));
});

renderStats();
renderDay(0);