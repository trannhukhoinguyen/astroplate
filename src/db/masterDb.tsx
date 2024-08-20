const masterDb = [
  {
    id: 100,
    name_en: 'Gaofeng Yuanmiao',
    name_es: 'Gaofeng Yuanmiao',
    name_de: 'Gaofeng Yuanmiao',
    name_fr: 'Gaofeng Yuanmiao',
    name_vi: 'Cao Phong Nguyên Diệu',
    name_ru: 'Gaofeng Yuanmiao',
    name_zh: '高峰原妙',
    name_ja: 'Kōhō Genmyō',
    name_ko: 'Kobong Wŏnmyo',
    name_ar: 'Gaofeng Yuanmiao',
    country: 'China',
place: ' mountain',
    teacher: '',
    successor: 'Zhongfeng Mingben',
    disciples: ['Zhongfeng Mingben'],
    image: 'https://terebess.hu/zen/mesterek/woodcut/55.jpg'
  },
  {
    id: 101,
    name_en: 'Zhongfeng Mingben',
    name_es: 'Zhongfeng Mingben',
    name_de: 'Zhongfeng Mingben',
    name_fr: 'Zhongfeng Mingben',
    name_vi: 'Trung Phong Minh Bản',
    name_ru: 'Zhongfeng Mingben',
    name_zh: '中峰明本',
    name_ja: 'Zhongfeng Mingben',
    name_ko: 'Zhongfeng Mingben',
    name_ar: 'Zhongfeng Mingben',
    country: 'China',
place: ' mountain',
    teacher: 'Gaofeng Yuanmiao',
    successor: '',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg'
  },  
{
    id: 1,
    name_en: 'Mahakasyapa',
    name_es: 'Mahakasyapa',
    name_de: 'Mahakasyapa',
    name_fr: 'Mahakasyapa',
    name_vi: 'Ma-Ha-Ca-Diếp',
    name_ru: 'Mahakasyapa',
    name_zh: 'Mahakasyapa',
    name_ja: 'Mahakasyapa',
    name_ko: 'Mahakasyapa',
    name_ar: 'Mahakasyapa',
    country: 'India',
place: ' mountain',
    teacher: 'Shakyamuni Buddha',
    successor: 'Ananda',
    disciples: [],
    dimage: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg'
  },
  {
    id: 2,
    name_en: 'Ananda',
    name_es: 'Ananda',
    name_de: 'Ananda',
    name_fr: 'Ananda',
    name_vi: 'A-Nan',
    name_ru: 'Ananda',
    name_zh: 'Ananda',
    name_ja: 'Ananda',
    name_ko: 'Ananda',
    name_ar: 'Ananda',
    country: 'India',
place: ' mountain',
    teacher: 'Mahakasyapa',
    successor: 'Sanakavasa',
    disciples: [],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg'
  },
  {
    id: 3,
    name_en: 'Sanakavasa'
    name_es: 'Sanakavasa',
    name_de: 'Sanakavasa',
    name_fr: 'Sanakavasa',
    name_vi: 'Thương-Na-Hòa-Tu',
    name_ru: 'Sanakavasa',
    name_zh: 'Sanakavasa',
    name_ja: 'Sanakavasa',
    name_ko: 'Sanakavasa',
    name_ar: 'Sanakavasa',
    country: 'India',
place: ' mountain',
    teacher: 'Ananda',
    successor: 'Upagupta',
    disciples: [],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 4,
    name_en: 'Upagupta',
    name_es: 'Upagupta',
    name_de: 'Upagupta',
    name_fr: 'Upagupta',
    name_vi: 'Ưu-Ba-Cúc-Đa',
    name_ru: 'Upagupta',
    name_zh: 'Upagupta',
    name_ja: 'Upagupta',
    name_ko: 'Upagupta',
    name_ar: 'Upagupta',
    country: 'India',
place: ' mountain',
    teacher: 'Sanakavasa',
    successor: 'Dhrtaka',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 5,
    name_en: 'Dhrtaka',
    name_es: 'Dhrtaka',
    name_de: 'Dhrtaka',
    name_fr: 'Dhrtaka',
    name_vi: 'Đề-Đa-Ca',
    name_ru: 'Dhrtaka',
    name_zh: 'Dhrtaka',
    name_ja: 'Dhrtaka',
    name_ko: 'Dhrtaka',
    name_ar: 'Dhrtaka',
    country: 'India',
place: ' mountain',
    teacher: 'Upagupta',
    successor: 'Miccaka',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
{
    id: 6,
    name_en: 'Miccaka',
    name_es: 'Miccaka',
    name_de: 'Miccaka',
    name_fr: 'Miccaka',
    name_vi: 'Di-Dá-Ca',
    name_ru: 'Miccaka',
    name_zh: 'Miccaka',
    name_ja: 'Miccaka',
    name_ko: 'Miccaka',
    name_ar: 'Miccaka',
    country: 'India',
place: ' mountain',
    teacher: 'Dhrtaka',
    successor: 'Vasumitra',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
{
    id: 7,
    name_en: 'Vasumitra',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Bà-Tu-Mật',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Miccaka',
    successor: 'Buddhanandi',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 8,
    name_en: 'Buddhanandi',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Phật-Đà-Nan-Đề',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Vasumitra',
    successor: 'Buddhamitra',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 9,
    name_en: 'Buddhamitra',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Phục-Đà-Mật-Đa',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: ''Buddhanandi',
    successor: 'Parsvika',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 10,
    name_en: 'Parsvika',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Hiếp-Tôn-Giả',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Buddhamitra',
    successor: 'Punyayasas',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 11,
    name_en: 'Punyayasas',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Phú-Na-Dạ-Xa',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Parsvika',
    successor: 'Asvaghosha',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 12,
    name_en: 'Asvaghosha',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Mã-Minh',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Punyayasas'
    successor: 'Kapimala',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 13,
    name_en: 'Kapimala',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Ca-Tỳ-Ma-La',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Asvaghosha',
    successor: 'Nagarjuna',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 14,
    name_en: 'Nagarjuna',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Long-Thọ',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Kapimala',
    successor: 'Kanadeva',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 15,
    name_en: 'Kanadeva',
    name_es: 'Kanadeva',
    name_de: 'Kanadeva',
    name_fr: 'Kanadeva',
    name_vi: 'Ca-Na-Đề-Bà',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Nagarjuna',
    successor: 'Rahulata',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
{
    id: 16,
    name_en: 'Rahulata',
    name_es: 'Rahulata',
    name_de: 'Rahulata',
    name_fr: 'Rahulata',
    name_vi: 'La-Hầu-La-Đa',
    name_ru: 'Rahulata',
    name_zh: 'Rahulata',
    name_ja: 'Rahulata',
    name_ko: 'Rahulata',
    name_ar: 'Rahulata',
    country: 'India',
place: ' mountain',
    teacher: 'Kanadeva',
    successor: 'Sanghanandi',
    disciples: [],
    dimage: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg'
  },
  {
    id: 17,
    name_en: 'Sanghanandi',
    name_es: 'Sanghanandi',
    name_de: 'Sanghanandi',
    name_fr: 'Sanghanandi',
    name_vi: 'Tăng Già Nan Đề',
    name_ru: 'Sanghanandi',
    name_zh: 'Sanghanandi',
    name_ja: 'Sanghanandi',
    name_ko: 'Sanghanandi',
    name_ar: 'Sanghanandi',
    country: 'India',
place: ' mountain',
    teacher: 'Rahulata',
    successor: 'Gayasata',
    disciples: [],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg'
  },
  {
    id: 18,
    name_en: 'Gayasata'
    name_es: 'Gayasata',
    name_de: 'Gayasata',
    name_fr: 'Gayasata',
    name_vi: 'Già Da Xá Đa',
    name_ru: 'Gayasata',
    name_zh: 'Gayasata',
    name_ja: 'Gayasata',
    name_ko: 'Gayasata',
    name_ar: 'Gayasata',
    country: 'India',
place: ' mountain',
    teacher: 'Sanghanandi',
    successor: 'Kumarata',
    disciples: [],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 19,
    name_en: 'Kumarata',
    name_es: 'Kumarata',
    name_de: 'Kumarata',
    name_fr: 'Kumarata',
    name_vi: 'Cưu-Ma-La-Đa',
    name_ru: 'Kumarata',
    name_zh: 'Kumarata',
    name_ja: 'Kumarata',
    name_ko: 'Kumarata',
    name_ar: 'Kumarata',
    country: 'India',
place: ' mountain',
    teacher: 'Gayasata',
    successor: 'Jayata',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 20,
    name_en: 'Jayata',
    name_es: 'Jayata',
    name_de: 'Jayata',
    name_fr: 'Jayata',
    name_vi: 'Xà Dạ Đa',
    name_ru: 'Jayata',
    name_zh: 'Jayata',
    name_ja: 'Jayata',
    name_ko: 'Jayata',
    name_ar: 'Jayata',
    country: 'India',
place: ' mountain',
    teacher: 'Kumarata',
    successor: 'Vasubandhu',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
{
    id: 21,
    name_en: 'Vasubandhu',
    name_es: 'Vasubandhu',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Bà-Tu-Bàn-Đầu',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Jayata',
    successor: 'Manorhita',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
{
    id: 22,
    name_en: 'Manorhita',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Ma-Noa-La',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Vasubandhu',
    successor: 'Haklena',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 23,
    name_en: 'Haklena',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Hạc-Lặc-Na',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Manorhita',
    successor: 'Aryasimha',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 24,
    name_en: 'Aryasimha',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Sư-Tử',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: ''Haklena',
    successor: 'Basiasita',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 25,
    name_en: 'Basiasita',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Bà-Xá-Tư-Đa',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Aryasimha',
    successor: 'Punyamitra',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 26,
    name_en: 'Punyamitra',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Bất-Như-Mật-Đa',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Basiasita',
    successor: 'Prajnatara',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 27,
    name_en: 'Prajnatara',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Bát-Nhã-Đa-La',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Punyamitra'
    successor: 'Bodhidharma',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 28,
    name_en: 'Bodhidharma',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Bồ-Đề-Đạt-Ma',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'India',
place: ' mountain',
    teacher: 'Prajnatara',
    successor: 'Nagarjuna',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 29,
    name_en: 'Huệ Khả',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Huệ Khả',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Bodhidharma',
    successor: 'Kanadeva',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 30,
    name_en: 'Tăng Xán',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Tăng Xán',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Nagarjuna',
    successor: '',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
{
    id: 31,
    name_en: 'Đạo Tín',
    name_es: 'Mahakasyapa',
    name_de: 'Mahakasyapa',
    name_fr: 'Mahakasyapa',
    name_vi: 'Đạo Tín',
    name_ru: 'Mahakasyapa',
    name_zh: 'Mahakasyapa',
    name_ja: 'Mahakasyapa',
    name_ko: 'Mahakasyapa',
    name_ar: 'Mahakasyapa',
    country: 'China',
place: ' mountain',
    teacher: 'Shakyamuni Buddha',
    successor: 'Ananda',
    disciples: [],
    dimage: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg'
  },
  {
    id: 32,
    name_en: 'Hoằng Nhẫn',
    name_es: 'Ananda',
    name_de: 'Ananda',
    name_fr: 'Ananda',
    name_vi: 'Hoằng Nhẫn',
    name_ru: 'Ananda',
    name_zh: 'Ananda',
    name_ja: 'Ananda',
    name_ko: 'Ananda',
    name_ar: 'Ananda',
    country: 'China',
place: ' mountain',
    teacher: 'Mahakasyapa',
    successor: 'Sanakavasa',
    disciples: [],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg'
  },
  {
    id: 33,
    name_en: 'Huệ Năng'
    name_es: 'Sanakavasa',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Huệ Năng',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
    place: ' mountain',
    teacher: 'Ananda',
    successor: 'Upagupta',
    disciples: [],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 34,
    name_en: 'Upagupta',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Thanh Nguyên Hành Tư',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
    place: 'Thanh Nguyên mountain',
    teacher: 'Sanakavasa',
    successor: 'Dhrtaka',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 35,
    name_en: 'Dhrtaka',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Hoài-Nhượng ở Nam Nhạc',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
    place: 'Nam Nhạc mountain',
    teacher: 'Upagupta',
    successor: 'Miccaka',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
{
    id: 36,
    name_en: 'Miccaka',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Pháp-Hải',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Dhrtaka',
    successor: 'Vasumitra',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
{
    id: 37,
    name_en: 'Vasumitra',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Bà-Tu-Mật',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Miccaka',
    successor: 'Buddhanandi',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 38,
    name_en: 'Buddhanandi',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Phật-Đà-Nan-Đề',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Vasumitra',
    successor: 'Buddhamitra',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 39,
    name_en: 'Buddhamitra',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Phục-Đà-Mật-Đa',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: ''Buddhanandi',
    successor: 'Parsvika',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 40,
    name_en: 'Parsvika',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Hiếp-Tôn-Giả',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Buddhamitra',
    successor: 'Punyayasas',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 41,
    name_en: 'Punyayasas',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Phú-Na-Dạ-Xa',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Parsvika',
    successor: 'Asvaghosha',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 42,
    name_en: 'Asvaghosha',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Mã-Minh',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Punyayasas'
    successor: 'Kapimala',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 43,
    name_en: 'Kapimala',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Ca-Tỳ-Ma-La',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Asvaghosha',
    successor: 'Nagarjuna',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 44,
    name_en: 'Nagarjuna',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Long-Thọ',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Kapimala',
    successor: 'Kanadeva',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
  {
    id: 45,
    name_en: 'Kanadeva',
    name_es: 'Peter 1',
    name_de: 'Peter 1',
    name_fr: 'Peter 1',
    name_vi: 'Ca-Na-Đề-Bà',
    name_ru: 'Peter 1',
    name_zh: 'Peter 1',
    name_ja: 'Peter 1',
    name_ko: 'Peter 1',
    name_ar: 'Peter 1',
    country: 'China',
place: ' mountain',
    teacher: 'Nagarjuna',
    successor: '',
    disciples: [''],
    image: 'https://terebess.hu/zen/mesterek/Zhongfeng_Mingben.jpg',
  },
]
export default masterDb;
