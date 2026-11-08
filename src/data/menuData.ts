export interface MenuItem {
  id: string;
  name: string;
  category: 'mie-ayam' | 'cemilan' | 'minuman' | 'kopi';
  price: number;
  priceNote?: string; // for variants like Es / Hot if base price differs
  description: string;
  isSpecial?: boolean;
  specialBadgeText?: string;
  image?: string;
  hasTempOptions?: boolean; // Es vs Hot
  tempPrices?: { es: number; hot: number };
  hasSpicyOptions?: boolean; // Tahu Kocek Level 0-5
  hasMilkOptions?: boolean; // Coklat vs Putih
}

export const MENU_CATEGORIES = [
  { id: 'all', name: 'Semua Menu', icon: 'UtensilsCrossed' },
  { id: 'mie-ayam', name: 'Mie Ayam', icon: 'Soup' },
  { id: 'cemilan', name: 'Cemilan', icon: 'Cookie' },
  { id: 'minuman', name: 'Minuman Segar', icon: 'CupSoda' },
  { id: 'kopi', name: 'Kopi Tubruk', icon: 'Coffee' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // --- MIE AYAM ---
  {
    id: 'mie-ayam-komplit',
    name: 'Mie Ayam Komplit',
    category: 'mie-ayam',
    price: 10000,
    description: 'Mie kenyal gurih dengan topping ayam semur istimewa, 2 bakso sapi lembut, pangsit goreng renyah, caisim segar, dan kuah kaldu terpisah.',
    isSpecial: true,
    specialBadgeText: 'MENU SPESIAL KEDAI PIKUL',
    image: '/src/assets/images/mie_ayam_komplit_dish_1794120889365.jpg',
  },
  {
    id: 'mie-ayam-original',
    name: 'Mie Ayam Original',
    category: 'mie-ayam',
    price: 8000,
    description: 'Mie ayam klasik porsi mantap bertabur cincangan ayam kecap bumbu rempah gurih lezat dan sayuran hijau segar.',
    image: '/src/assets/images/hero_mie_ayam_bowl_1794120888502.jpg',
  },
  {
    id: 'mie-goreng-instan',
    name: 'Mie Goreng Instan',
    category: 'mie-ayam',
    price: 6000,
    description: 'Mie goreng instan favorit dengan tingkat kematangan pas, disajikan hangat dengan taburan bawang goreng harum.',
  },
  {
    id: 'mie-kuah-instan',
    name: 'Mie Kuah Instan',
    category: 'mie-ayam',
    price: 6000,
    description: 'Mie rebus kuah gurih hangat, berpadu bumbu kaya rasa, sangat cocok untuk mengisi perut kapan saja.',
  },
  {
    id: 'mie-instan-telor',
    name: 'Mie Instan + Telor',
    category: 'mie-ayam',
    price: 9000,
    description: 'Mie instan favorit (goreng/kuah) disajikan dengan tambahan telur ceplok atau rebus setengah matang yang nikmat.',
  },

  // --- CEMILAN ---
  {
    id: 'tahu-walik',
    name: 'Tahu Walik',
    category: 'cemilan',
    price: 5000,
    description: 'Tahu pong dibalik dengan isian adonan ayam krispi di luar empuk di dalam, disajikan dengan cocolan petis & cabai rawit hijau.',
    image: '/src/assets/images/tahu_walik_cemilan_1794120890349.jpg',
  },
  {
    id: 'tahu-petis',
    name: 'Tahu Petis',
    category: 'cemilan',
    price: 5000,
    description: 'Tahu goreng hangat lembut bertabur bumbu petis udang hitam khas Jawa Timur yang legit, manis, dan gurih pedas.',
  },
  {
    id: 'tahu-kocek',
    name: 'Tahu Kocek (Level 0-5)',
    category: 'cemilan',
    price: 5000,
    description: 'Tahu goreng hangat yang dikocek/diulek bersama racikan cabai rawit segar dengan tingkat kepedasan dari Level 0 hingga Level 5!',
    hasSpicyOptions: true,
  },
  {
    id: 'siomay-goreng',
    name: 'Siomay Goreng',
    category: 'cemilan',
    price: 6000,
    description: 'Siomay goreng renyah di luar kenyal di dalam, disajikan dengan saus sambal khas Kedai Pikul yang menggoda.',
  },
  {
    id: 'siomay-kuah',
    name: 'Siomay Kuah',
    category: 'cemilan',
    price: 6000,
    description: 'Siomay lembut dalam semangkuk kuah kaldu panas kaya rasa, bertabur daun bawang dan seledri segar.',
  },
  {
    id: 'kentang-goreng',
    name: 'Kentang Goreng',
    category: 'cemilan',
    price: 6000,
    description: 'Kentang stik goreng renyah bertabur bumbu tabur gurih, camilan santai paling pas untuk nongkrong.',
  },
  {
    id: 'nugget-goreng',
    name: 'Nugget Goreng',
    category: 'cemilan',
    price: 6000,
    description: 'Nugget ayam goreng keemasan renyah di luar dan juicy di dalam, lengkap dengan cocolan saus tomat dan sambal.',
  },
  {
    id: 'sosis-goreng',
    name: 'Sosis Goreng',
    category: 'cemilan',
    price: 6000,
    description: 'Sosis daging sapi pilihan yang digoreng mekar dengan rasa gurih nagih.',
  },
  {
    id: 'mix-platter',
    name: 'Mix Platter',
    category: 'cemilan',
    price: 10000,
    description: 'Porsi puas berisi kombinasi kentang goreng, nugget, sosis, dan siomay dalam satu piring untuk dinikmati bersama teman.',
  },

  // --- MINUMAN ---
  {
    id: 'teh',
    name: 'Teh',
    category: 'minuman',
    price: 3000,
    priceNote: 'Es Rp3.000 / Hot Rp3.000',
    description: 'Seduhan teh wangi melati khas Nusantara, tersedia disajikan dingin segar atau hangat menenangkan.',
    hasTempOptions: true,
    tempPrices: { es: 3000, hot: 3000 },
    image: '/src/assets/images/minuman_segar_kopi_1794120890050.jpg',
  },
  {
    id: 'temulawak',
    name: 'Temulawak',
    category: 'minuman',
    price: 3000,
    priceNote: 'Es Rp3.000 / Hot Rp3.000',
    description: 'Minuman herbal tradisional temulawak segar pelepas dahaga dan penambah stamina tubuh.',
    hasTempOptions: true,
    tempPrices: { es: 3000, hot: 3000 },
  },
  {
    id: 'jeruk-peras',
    name: 'Jeruk Peras',
    category: 'minuman',
    price: 4000,
    priceNote: 'Es Rp4.000 / Hot Rp4.000',
    description: 'Perasan jeruk segar asli kaya vitamin C dengan sensasi manis asam menyegarkan tenggorokan.',
    hasTempOptions: true,
    tempPrices: { es: 4000, hot: 4000 },
  },
  {
    id: 'milo',
    name: 'Milo',
    category: 'minuman',
    price: 5000,
    priceNote: 'Es Rp5.000 / Hot Rp5.000',
    description: 'Coklat malt Milo yang creamy, kental, dan kaya energi, favorit santai semua usia.',
    hasTempOptions: true,
    tempPrices: { es: 5000, hot: 5000 },
  },
  {
    id: 'susu',
    name: 'Susu Coklat/Putih',
    category: 'minuman',
    price: 4000,
    priceNote: 'Es Rp4.000 / Hot Rp4.000',
    description: 'Pilihan susu manis nikmat varian coklat pekat atau putih creamy, nikmat hangat maupun dingin.',
    hasTempOptions: true,
    hasMilkOptions: true,
    tempPrices: { es: 4000, hot: 4000 },
  },
  {
    id: 'nutrisari',
    name: 'Nutrisari',
    category: 'minuman',
    price: 3000,
    priceNote: 'Es Rp3.000 / Hot Rp3.000',
    description: 'Minuman rasa buah jeruk manis segar bervitamin, siap menyegarkan harimu.',
    hasTempOptions: true,
    tempPrices: { es: 3000, hot: 3000 },
  },
  {
    id: 'goodday-cappuccino',
    name: 'Goodday Cappuccino',
    category: 'minuman',
    price: 5000,
    priceNote: 'Es Rp5.000 / Hot Rp4.000',
    description: 'Kopi cappuccino manis lembut dengan taburan choco granule harum, bikin suasana ngobrol makin rileks.',
    hasTempOptions: true,
    tempPrices: { es: 5000, hot: 4000 },
  },

  // --- KOPI TUBRUK ---
  {
    id: 'kopi-robusta',
    name: 'Kopi Robusta',
    category: 'kopi',
    price: 6000,
    description: 'Kopi tubruk robusta murni dengan body tebal, aroma harum kuat, dan rasa pahit mantap pembakar semangat.',
    image: '/src/assets/images/minuman_segar_kopi_1794120890050.jpg',
  },
  {
    id: 'kopi-arabika',
    name: 'Kopi Arabika',
    category: 'kopi',
    price: 9000,
    description: 'Kopi tubruk arabika istimewa dengan aroma wangi floral, rasa kompleks yang halus, dan keasaman seimbang.',
  },
];

export const FORMAT_RUPIAH = (number: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};

export const WA_PHONE_NUMBER = '6281331611961';
export const DISPLAY_PHONE_NUMBER = '081331611961';
export const SOCIAL_HANDLE = '@KedaiPikul';
