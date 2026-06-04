// ===================== FOOD DB (per 100g) =====================
// kcal追加: タンパク質4, 脂質9, 炭水化物4 で近似 or 実測値
const BUILTIN_FOOD_DB={
  'ご飯':             {kcal:168, protein:2.5, fat:0.3, fiber:0.3, vitC:0,   vitD:0,   zinc:0.6, dha:0,    vitA:0,    betaC:0,    vitB1:0.02,vitB2:0.02,vitE:0.1, vitK:0,   ca:3,   k:29,  p:34,  fe:0.1, salt:0, toushitsu:36.8, sugar:0.1, purine:25.9, satfat:0.1},
  'おにぎり':         {kcal:179, protein:2.7, fat:0.5, fiber:0.4, vitC:0,   vitD:0,   zinc:0.5, dha:0,    vitA:0,    betaC:0,    vitB1:0.03,vitB2:0.02,vitE:0.1, vitK:0,   ca:6,   k:33,  p:38,  fe:0.2, salt:0.5, toushitsu:39.0, sugar:0.3, purine:26, sugarEst:1, satfat:0.1},
  '白米（生）':       {kcal:356, protein:6.1, fat:0.9, fiber:0.5, vitC:0,   vitD:0,   zinc:1.4, dha:0,    vitA:0,    betaC:0,    vitB1:0.08,vitB2:0.02,vitE:0.5, vitK:0,   ca:5,   k:89,  p:95,  fe:0.8, salt:0, toushitsu:77.1, sugar:0, purine:25.9, satfat:0.3},
  '玄米（炊いたもの）':{kcal:165,protein:2.8, fat:1.0, fiber:1.4, vitC:0,   vitD:0,   zinc:0.8, dha:0,    vitA:0,    betaC:0,    vitB1:0.16,vitB2:0.02,vitE:0.5, vitK:0,   ca:7,   k:95,  p:130, fe:0.6, salt:0, toushitsu:34.2, sugar:0.4, purine:37.4, satfat:0.2},
  '食パン':           {kcal:264, protein:8.9, fat:4.4, fiber:2.3, vitC:0,   vitD:0,   zinc:0.8, dha:0,    vitA:0,    betaC:0,    vitB1:0.09,vitB2:0.06,vitE:0.4, vitK:3,   ca:29,  k:97,  p:90,  fe:0.6, salt:1.2, toushitsu:44.1, sugar:3.8, purine:4.4, satfat:1.5},
  'フランスパン':     {kcal:279, protein:9.4, fat:1.3, fiber:2.7, vitC:0,   vitD:0,   zinc:0.8, dha:0,    vitA:0,    betaC:0,    vitB1:0.11,vitB2:0.05,vitE:0.3, vitK:7,   ca:16,  k:110, p:78,  fe:0.9, salt:1.6, toushitsu:54.8, sugar:1.3, purine:4.4, sugarEst:1, satfat:0.3},
  'ロールパン':       {kcal:316, protein:9.0, fat:9.0, fiber:2.0, vitC:0,   vitD:0,   zinc:0.7, dha:0,    vitA:3,    betaC:0,    vitB1:0.10,vitB2:0.07,vitE:0.5, vitK:10,  ca:43,  k:97,  p:97,  fe:0.9, salt:1.2, toushitsu:46.6, sugar:5.0, purine:4.4, satfat:2.0},
  'パスタ（乾）':     {kcal:379, protein:12.2,fat:1.8, fiber:2.7, vitC:0,   vitD:0,   zinc:1.2, dha:0,    vitA:0,    betaC:0,    vitB1:0.18,vitB2:0.06,vitE:0.5, vitK:0,   ca:17,  k:200, p:140, fe:1.7, salt:0, toushitsu:70.7, sugar:2.6, purine:6.8, satfat:0.4},
  'パスタ（茹で）':   {kcal:165, protein:5.8, fat:0.9, fiber:1.5, vitC:0,   vitD:0,   zinc:0.6, dha:0,    vitA:0,    betaC:0,    vitB1:0.06,vitB2:0.02,vitE:0.2, vitK:0,   ca:7,   k:14,  p:60,  fe:0.6, salt:0.5, toushitsu:30.7, sugar:1.0, purine:6.8, satfat:0.2},
  'うどん（茹で）':   {kcal:105, protein:2.6, fat:0.4, fiber:1.3, vitC:0,   vitD:0,   zinc:0.2, dha:0,    vitA:0,    betaC:0,    vitB1:0.02,vitB2:0.01,vitE:0,   vitK:0,   ca:9,   k:9,   p:18,  fe:0.2, salt:0.3, toushitsu:20.3, sugar:0.4, purine:12.1, satfat:0.1},
  'そば（茹で）':     {kcal:132, protein:4.8, fat:1.0, fiber:2.0, vitC:0,   vitD:0,   zinc:0.5, dha:0,    vitA:0,    betaC:0,    vitB1:0.06,vitB2:0.03,vitE:0.4, vitK:4,   ca:15,  k:34,  p:73,  fe:1.1, salt:0, toushitsu:24.0, sugar:0.5, purine:7.7, satfat:0.1},
  'ラーメン（茹で）': {kcal:149, protein:5.0, fat:0.6, fiber:1.3, vitC:0,   vitD:0,   zinc:0.4, dha:0,    vitA:0,    betaC:0,    vitB1:0.05,vitB2:0.02,vitE:0.1, vitK:0,   ca:11,  k:54,  p:50,  fe:0.5, salt:0.2, toushitsu:27.9, sugar:0.5, purine:20, sugarEst:1, satfat:0.2},
  'そうめん（茹で）': {kcal:127, protein:3.5, fat:0.4, fiber:0.9, vitC:0,   vitD:0,   zinc:0.2, dha:0,    vitA:0,    betaC:0,    vitB1:0.02,vitB2:0.01,vitE:0,   vitK:0,   ca:10,  k:7,   p:25,  fe:0.2, salt:0.2, toushitsu:24.9, sugar:0.3, purine:6.8, satfat:0.1},
  'じゃがいも':       {kcal:76,  protein:1.8, fat:0.1, fiber:1.3, vitC:28,  vitD:0,   zinc:0.3, dha:0,    vitA:0,    betaC:0,    vitB1:0.09,vitB2:0.03,vitE:0.1, vitK:0,   ca:3,   k:410, p:47,  fe:0.4, salt:0, toushitsu:16.0, sugar:0.8, purine:6.5, satfat:0},
  'さつまいも':       {kcal:132, protein:1.2, fat:0.2, fiber:2.8, vitC:29,  vitD:0,   zinc:0.3, dha:0,    vitA:1,    betaC:17,   vitB1:0.10,vitB2:0.04,vitE:1.5, vitK:0,   ca:36,  k:480, p:47,  fe:0.6, salt:0, toushitsu:29.1, sugar:9.0, purine:17.0, satfat:0},
  'とうもろこし':     {kcal:92,  protein:3.6, fat:1.7, fiber:3.0, vitC:8,   vitD:0,   zinc:1.0, dha:0,    vitA:2,    betaC:18,   vitB1:0.15,vitB2:0.10,vitE:0.5, vitK:0,   ca:3,   k:290, p:100, fe:0.8, salt:0, toushitsu:15.6, sugar:3.5, purine:11.7, satfat:0.1},
  // 肉類
  '鶏胸肉':           {kcal:105, protein:23.3,fat:1.9, fiber:0,   vitC:3,   vitD:0.1, zinc:0.7, dha:0.01, vitA:18,   betaC:0,    vitB1:0.12,vitB2:0.11,vitE:0.3, vitK:17,  ca:5,   k:360, p:220, fe:0.3, salt:0.1, toushitsu:0.1, sugar:0, purine:141.2, satfat:1.5},
  '鶏もも肉':         {kcal:190, protein:17.3,fat:14.2,fiber:0,   vitC:3,   vitD:0.4, zinc:1.6, dha:0.03, vitA:62,   betaC:6,    vitB1:0.10,vitB2:0.15,vitE:0.4, vitK:55,  ca:5,   k:300, p:170, fe:0.9, salt:0.2, toushitsu:0, sugar:0, purine:122.9, satfat:4.4},
  '鶏手羽':           {kcal:189, protein:17.8,fat:15.2,fiber:0,   vitC:2,   vitD:0.2, zinc:1.2, dha:0.02, vitA:48,   betaC:0,    vitB1:0.06,vitB2:0.12,vitE:0.4, vitK:33,  ca:20,  k:250, p:130, fe:0.5, salt:0.2, toushitsu:0, sugar:0, purine:137.5, satfat:3.6},
  '鶏ひき肉':         {kcal:171, protein:17.5,fat:12.0,fiber:0,   vitC:3,   vitD:0.3, zinc:1.5, dha:0.02, vitA:50,   betaC:0,    vitB1:0.10,vitB2:0.16,vitE:0.3, vitK:28,  ca:7,   k:280, p:160, fe:0.9, salt:0.1, toushitsu:0, sugar:0, purine:130, satfat:3.3},
  '豚こま肉':         {kcal:171, protein:18.5,fat:10.1,fiber:0,   vitC:1,   vitD:0.1, zinc:2.7, dha:0.02, vitA:6,    betaC:0,    vitB1:0.90,vitB2:0.23,vitE:0.3, vitK:1,   ca:6,   k:310, p:180, fe:1.0, salt:0.1, toushitsu:0.1, sugar:0, purine:90, satfat:3.6},
  '豚ロース':         {kcal:248, protein:19.3,fat:19.2,fiber:0,   vitC:1,   vitD:0.1, zinc:2.0, dha:0.03, vitA:5,    betaC:0,    vitB1:0.69,vitB2:0.20,vitE:0.5, vitK:1,   ca:4,   k:360, p:200, fe:0.8, salt:0.1, toushitsu:0.2, sugar:0, purine:90.9, satfat:7.8},
  '豚バラ肉':         {kcal:366, protein:14.4,fat:35.4,fiber:0,   vitC:1,   vitD:0.1, zinc:1.8, dha:0.02, vitA:5,    betaC:0,    vitB1:0.54,vitB2:0.14,vitE:0.4, vitK:0,   ca:4,   k:250, p:130, fe:0.6, salt:0.1, toushitsu:0.1, sugar:0, purine:75.8, satfat:14.6},
  '豚ひき肉':         {kcal:209, protein:17.7,fat:17.2,fiber:0,   vitC:1,   vitD:0.1, zinc:2.9, dha:0.02, vitA:5,    betaC:0,    vitB1:0.73,vitB2:0.23,vitE:0.3, vitK:0,   ca:6,   k:280, p:170, fe:1.0, salt:0.1, toushitsu:0.1, sugar:0, purine:90, satfat:6.2},
  '牛もも肉':         {kcal:196, protein:19.2,fat:13.3,fiber:0,   vitC:1,   vitD:0,   zinc:4.4, dha:0.01, vitA:4,    betaC:0,    vitB1:0.10,vitB2:0.23,vitE:0.4, vitK:6,   ca:5,   k:340, p:190, fe:2.6, salt:0.1, toushitsu:0.4, sugar:0, purine:110.8, satfat:5.1},
  '牛ひき肉':         {kcal:251, protein:17.1,fat:21.1,fiber:0,   vitC:1,   vitD:0,   zinc:4.4, dha:0.02, vitA:4,    betaC:0,    vitB1:0.05,vitB2:0.16,vitE:0.3, vitK:4,   ca:6,   k:290, p:160, fe:2.4, salt:0.2, toushitsu:0.3, sugar:0, purine:95, satfat:7.3},
  '牛ロース':         {kcal:380, protein:16.5,fat:32.9,fiber:0,   vitC:1,   vitD:0,   zinc:4.0, dha:0.03, vitA:5,    betaC:0,    vitB1:0.08,vitB2:0.17,vitE:0.5, vitK:12,  ca:4,   k:290, p:150, fe:2.0, salt:0.1, toushitsu:0.1, sugar:0, purine:85, satfat:11.0},
  '鶏レバー':         {kcal:100, protein:18.9,fat:3.1, fiber:0,   vitC:20,  vitD:0.1, zinc:3.3, dha:0.01, vitA:14000,betaC:0,    vitB1:0.38,vitB2:1.80,vitE:0.6, vitK:1,   ca:5,   k:330, p:300, fe:9.0, salt:0.2, toushitsu:0.6, sugar:0, purine:312.2, satfat:0.7},
  '豚レバー':         {kcal:114, protein:20.4,fat:3.4, fiber:0,   vitC:20,  vitD:1.3, zinc:6.9, dha:0,    vitA:13000,betaC:0,    vitB1:0.34,vitB2:3.60,vitE:0.3, vitK:1,   ca:5,   k:290, p:340, fe:13.0, salt:0.1, toushitsu:2.5, sugar:0, purine:284.8, satfat:0.8},
  '牛レバー':         {kcal:119, protein:19.6,fat:3.7, fiber:0,   vitC:30,  vitD:0.3, zinc:3.8, dha:0.02, vitA:1100, betaC:0,    vitB1:0.22,vitB2:3.00,vitE:0.4, vitK:1,   ca:5,   k:300, p:330, fe:4.0, salt:0.1, toushitsu:3.7, sugar:0, purine:219.8, satfat:0.9},
  'ベーコン':         {kcal:400, protein:12.9,fat:39.1,fiber:0,   vitC:0,   vitD:0.4, zinc:1.5, dha:0.05, vitA:6,    betaC:0,    vitB1:0.47,vitB2:0.12,vitE:0.6, vitK:0,   ca:6,   k:230, p:180, fe:0.4, salt:2.0, toushitsu:0.3, sugar:0.2, purine:74.8, satfat:14.8},
  'ソーセージ':       {kcal:321, protein:11.5,fat:28.5,fiber:0,   vitC:0,   vitD:0.3, zinc:1.5, dha:0.05, vitA:6,    betaC:0,    vitB1:0.40,vitB2:0.10,vitE:0.6, vitK:0,   ca:6,   k:180, p:150, fe:0.5, salt:1.9, toushitsu:3.3, sugar:1.0, purine:45.5, satfat:10.2},
  'ハム':             {kcal:211, protein:18.6,fat:14.5,fiber:0,   vitC:0,   vitD:0.2, zinc:1.8, dha:0.03, vitA:5,    betaC:0,    vitB1:0.60,vitB2:0.18,vitE:0.3, vitK:0,   ca:7,   k:260, p:190, fe:0.8, salt:2.3, toushitsu:1.3, sugar:0.9, purine:74.2, satfat:4.4},
  // 魚介類
  '鮭':               {kcal:124, protein:22.3,fat:4.1, fiber:0,   vitC:0,   vitD:32.0,zinc:0.6, dha:0.82, vitA:11,   betaC:0,    vitB1:0.23,vitB2:0.21,vitE:1.5, vitK:1,   ca:14,  k:350, p:260, fe:0.5, salt:0.2, toushitsu:0.1, sugar:0, purine:119.3, satfat:1.0},
  '鯖缶':             {kcal:174, protein:20.9,fat:10.7,fiber:0,   vitC:0,   vitD:11.0,zinc:1.5, dha:1.78, vitA:20,   betaC:0,    vitB1:0.03,vitB2:0.30,vitE:2.5, vitK:0,   ca:260, k:230, p:230, fe:2.0, salt:0.9, toushitsu:0.2, sugar:0, purine:122.1, satfat:2.4},
  '鯖（生）':         {kcal:211, protein:20.6,fat:16.8,fiber:0,   vitC:0,   vitD:11.0,zinc:1.3, dha:1.78, vitA:37,   betaC:0,    vitB1:0.21,vitB2:0.31,vitE:2.5, vitK:0,   ca:5,   k:320, p:220, fe:1.2, salt:0.3, toushitsu:0.3, sugar:0, purine:122.1, satfat:4.6},
  'まぐろ（赤身）':   {kcal:115, protein:26.4,fat:1.4, fiber:0,   vitC:2,   vitD:5.0, zinc:0.5, dha:0.12, vitA:5,    betaC:0,    vitB1:0.10,vitB2:0.09,vitE:0.3, vitK:2,   ca:5,   k:380, p:270, fe:1.1, salt:0.1, toushitsu:0.1, sugar:0, purine:157.4, satfat:0.25},
  'まぐろ（トロ）':   {kcal:308, protein:20.1,fat:27.5,fiber:0,   vitC:0,   vitD:18.0,zinc:0.6, dha:3.20, vitA:71,   betaC:0,    vitB1:0.10,vitB2:0.08,vitE:1.2, vitK:0,   ca:7,   k:230, p:230, fe:1.4, salt:0.2, toushitsu:0.1, sugar:0, purine:90, satfat:5.9},
  'ツナ缶（油漬け）': {kcal:265, protein:17.7,fat:21.7,fiber:0,   vitC:0,   vitD:4.0, zinc:0.5, dha:0.16, vitA:6,    betaC:0,    vitB1:0.04,vitB2:0.08,vitE:1.9, vitK:9,   ca:4,   k:230, p:180, fe:0.5, salt:0.9, toushitsu:0.1, sugar:0, purine:116.9, satfat:2.8},
  'ツナ缶（水煮）':   {kcal:70,  protein:16.0,fat:0.7, fiber:0,   vitC:0,   vitD:4.0, zinc:0.5, dha:0.16, vitA:6,    betaC:0,    vitB1:0.04,vitB2:0.08,vitE:1.0, vitK:9,   ca:4,   k:230, p:180, fe:0.5, salt:0.7, toushitsu:0.1, sugar:0, purine:116.9, satfat:0.1},
  'さばみそ煮缶':     {kcal:210, protein:16.3,fat:9.9, fiber:0,   vitC:0,   vitD:8.0, zinc:1.4, dha:1.20, vitA:20,   betaC:0,    vitB1:0.05,vitB2:0.25,vitE:2.0, vitK:0,   ca:160, k:200, p:200, fe:1.8, salt:1.1, toushitsu:6.6, sugar:5.0, purine:120, sugarEst:1, satfat:3.3},
  'さんま':           {kcal:287, protein:18.1,fat:25.6,fiber:0,   vitC:0,   vitD:16.0,zinc:1.0, dha:2.20, vitA:13,   betaC:0,    vitB1:0.01,vitB2:0.26,vitE:1.6, vitK:0,   ca:28,  k:200, p:180, fe:1.4, salt:0.4, toushitsu:0.1, sugar:0, purine:154.9, satfat:4.7},
  'いわし':           {kcal:156, protein:19.2,fat:9.2,fiber:0,   vitC:0,   vitD:32.0,zinc:2.0, dha:1.30, vitA:17,   betaC:0,    vitB1:0.03,vitB2:0.39,vitE:1.2, vitK:0,   ca:74,  k:270, p:230, fe:2.1, salt:0.2, toushitsu:0.2, sugar:0, purine:210.4, satfat:2.6},
  'ぶり':             {kcal:222, protein:21.4,fat:17.6,fiber:0,   vitC:2,   vitD:8.0, zinc:0.7, dha:1.78, vitA:50,   betaC:0,    vitB1:0.23,vitB2:0.36,vitE:2.0, vitK:0,   ca:5,   k:380, p:130, fe:1.3, salt:0.1, toushitsu:0.3, sugar:0, purine:120.8, satfat:4.4},
  'あじ':             {kcal:112, protein:19.7,fat:4.5, fiber:0,   vitC:0,   vitD:8.9, zinc:0.7, dha:0.62, vitA:7,    betaC:0,    vitB1:0.13,vitB2:0.20,vitE:0.6, vitK:0,   ca:66,  k:360, p:220, fe:0.6, salt:0.3, toushitsu:0.1, sugar:0, purine:165.3, satfat:1.1},
  'えび':             {kcal:82,  protein:21.7,fat:0.6, fiber:0,   vitC:0,   vitD:0,   zinc:1.6, dha:0.14, vitA:0,    betaC:0,    vitB1:0.11,vitB2:0.03,vitE:2.0, vitK:0,   ca:67,  k:280, p:220, fe:0.3, salt:0.4, toushitsu:0, sugar:0, purine:192.3, satfat:0.1},
  'いか':             {kcal:76,  protein:17.9,fat:0.8, fiber:0,   vitC:0,   vitD:0,   zinc:1.6, dha:0.27, vitA:13,   betaC:0,    vitB1:0.05,vitB2:0.05,vitE:2.1, vitK:0,   ca:11,  k:300, p:250, fe:0.1, salt:0.5, toushitsu:0.1, sugar:0, purine:186.8, satfat:0.2},
  'たこ':             {kcal:70,  protein:16.4,fat:0.7, fiber:0,   vitC:0,   vitD:0,   zinc:1.8, dha:0.18, vitA:0,    betaC:0,    vitB1:0.03,vitB2:0.09,vitE:1.9, vitK:0,   ca:16,  k:290, p:160, fe:0.6, salt:0.6, toushitsu:0.1, sugar:0, purine:137.3, satfat:0.1},
  'しらす干し':       {kcal:113, protein:23.1,fat:1.6, fiber:0,   vitC:0,   vitD:61.0,zinc:1.1, dha:0.11, vitA:0,    betaC:0,    vitB1:0.02,vitB2:0.05,vitE:0.8, vitK:0,   ca:520, k:470, p:460, fe:0.5, salt:4.2, toushitsu:0.1, sugar:0, purine:250, satfat:0.3},
  '鮭缶':             {kcal:156, protein:21.2,fat:8.1, fiber:0,   vitC:0,   vitD:18.0,zinc:0.7, dha:0.65, vitA:15,   betaC:0,    vitB1:0.04,vitB2:0.14,vitE:1.4, vitK:0,   ca:180, k:270, p:340, fe:0.6, salt:0.6, toushitsu:0.1, sugar:0, purine:132.9, satfat:2.0},
  // 卵・乳製品
  '卵':               {kcal:151, protein:12.3,fat:10.3,fiber:0,   vitC:0,   vitD:2.5, zinc:1.3, dha:0.08, vitA:150,  betaC:0,    vitB1:0.06,vitB2:0.37,vitE:1.1, vitK:11,  ca:46,  k:130, p:180, fe:1.5, salt:0.4, toushitsu:0.4, sugar:0.3, purine:0.0, satfat:3.1},
  'ヨーグルト':       {kcal:62,  protein:4.3, fat:3.0, fiber:0,   vitC:1,   vitD:0,   zinc:0.4, dha:0,    vitA:33,   betaC:0,    vitB1:0.04,vitB2:0.14,vitE:0.1, vitK:1,   ca:120, k:170, p:100, fe:0.1, salt:0.1, toushitsu:4.9, sugar:4.9, purine:5.2, satfat:1.8},
  'ギリシャヨーグルト':{kcal:85, protein:9.0, fat:4.2, fiber:0,   vitC:1,   vitD:0,   zinc:0.5, dha:0,    vitA:25,   betaC:0,    vitB1:0.03,vitB2:0.25,vitE:0.1, vitK:1,   ca:100, k:140, p:110, fe:0.1, salt:0.1, toushitsu:4.0, sugar:4.0, purine:5.2, sugarEst:1, satfat:2.0},
  '牛乳':             {kcal:61,  protein:3.3, fat:3.8, fiber:0,   vitC:1,   vitD:0.3, zinc:0.4, dha:0.01, vitA:38,   betaC:0,    vitB1:0.04,vitB2:0.15,vitE:0.1, vitK:2,   ca:110, k:150, p:93,  fe:0, salt:0.1, toushitsu:4.8, sugar:4.7, purine:0.16, satfat:2.3},
  'チーズ（プロセス）':{kcal:339,protein:22.7,fat:26.0,fiber:0,   vitC:0,   vitD:0.2, zinc:3.2, dha:0,    vitA:260,  betaC:0,    vitB1:0.03,vitB2:0.38,vitE:0.6, vitK:3,   ca:630, k:65,  p:500, fe:0.3, salt:2.8, toushitsu:1.3, sugar:0, purine:6.0, satfat:16.0},
  'カッテージチーズ': {kcal:105, protein:13.3,fat:4.5, fiber:0,   vitC:0,   vitD:0,   zinc:0.4, dha:0,    vitA:37,   betaC:0,    vitB1:0.04,vitB2:0.22,vitE:0,   vitK:1,   ca:55,  k:85,  p:160, fe:0.1, salt:1.0, toushitsu:1.9, sugar:1.9, purine:6, satfat:2.7},
  '生クリーム':       {kcal:433, protein:2.0, fat:45.0,fiber:0,   vitC:0,   vitD:0.6, zinc:0.2, dha:0,    vitA:170,  betaC:0,    vitB1:0.02,vitB2:0.07,vitE:0.3, vitK:3,   ca:60,  k:80,  p:70,  fe:0, salt:0.1, toushitsu:6.5, sugar:3.1, purine:0.3, satfat:27.6},
  // 大豆製品
  '納豆':             {kcal:200, protein:16.5,fat:10.0,fiber:6.7, vitC:0,   vitD:0,   zinc:1.9, dha:0,    vitA:0,    betaC:0,    vitB1:0.07,vitB2:0.56,vitE:0.8, vitK:600, ca:90,  k:660, p:190, fe:3.3, salt:0, toushitsu:5.4, sugar:0, purine:113.9, satfat:1.5},
  '豆腐':             {kcal:73,  protein:6.6, fat:4.2, fiber:0.3, vitC:0,   vitD:0,   zinc:0.6, dha:0,    vitA:0,    betaC:0,    vitB1:0.11,vitB2:0.04,vitE:0.1, vitK:0,   ca:75,  k:140, p:88,  fe:1.5, salt:0, toushitsu:1.2, sugar:0, purine:31.1, satfat:0.8},
  '豆乳':             {kcal:46,  protein:3.6, fat:2.0, fiber:0.2, vitC:0,   vitD:0,   zinc:0.3, dha:0,    vitA:0,    betaC:0,    vitB1:0.12,vitB2:0.03,vitE:2.2, vitK:15,  ca:15,  k:190, p:49,  fe:1.2, salt:0, toushitsu:2.9, sugar:2.9, purine:20, satfat:0.5},
  '枝豆':             {kcal:135, protein:11.5,fat:6.1, fiber:5.0, vitC:27,  vitD:0,   zinc:1.4, dha:0,    vitA:0,    betaC:0,    vitB1:0.31,vitB2:0.15,vitE:0.7, vitK:43,  ca:76,  k:590, p:170, fe:2.5, salt:0, toushitsu:3.8, sugar:0.8, purine:47.9, satfat:0.8},
  '大豆（茹で）':     {kcal:176, protein:16.0,fat:9.8, fiber:8.5, vitC:0,   vitD:0,   zinc:2.0, dha:0,    vitA:0,    betaC:0,    vitB1:0.22,vitB2:0.09,vitE:1.7, vitK:28,  ca:70,  k:570, p:190, fe:2.2, salt:0, toushitsu:0, sugar:0, purine:50, satfat:1.3},
  '厚揚げ':           {kcal:150, protein:10.7,fat:11.3,fiber:0.7, vitC:0,   vitD:0,   zinc:0.9, dha:0,    vitA:0,    betaC:0,    vitB1:0.08,vitB2:0.04,vitE:0.2, vitK:0,   ca:240, k:120, p:150, fe:2.6, salt:0, toushitsu:0.2, sugar:0, purine:30, satfat:1.6},
  '油揚げ':           {kcal:410, protein:15.3,fat:34.4,fiber:1.3, vitC:0,   vitD:0,   zinc:1.3, dha:0,    vitA:0,    betaC:0,    vitB1:0.07,vitB2:0.03,vitE:0.6, vitK:0,   ca:300, k:59,  p:200, fe:3.2, salt:0, toushitsu:0, sugar:0, purine:30, satfat:3.9},
  // 野菜類（葉菜・茎菜）
  'ほうれん草':       {kcal:20,  protein:2.2, fat:0.4, fiber:2.8, vitC:35,  vitD:0,   zinc:0.7, dha:0,    vitA:350,  betaC:4200, vitB1:0.11,vitB2:0.20,vitE:2.1, vitK:270, ca:49,  k:690, p:47,  fe:2.0, salt:0, toushitsu:0.3, sugar:0.3, purine:51.4, satfat:0},
  '小松菜':           {kcal:14,  protein:1.5, fat:0.2, fiber:1.9, vitC:39,  vitD:0,   zinc:0.2, dha:0,    vitA:260,  betaC:3100, vitB1:0.09,vitB2:0.13,vitE:0.9, vitK:210, ca:170, k:500, p:45,  fe:2.8, salt:0, toushitsu:0.5, sugar:0.3, purine:10.6, satfat:0},
  'ブロッコリー':     {kcal:33,  protein:4.3, fat:0.5, fiber:4.4, vitC:120, vitD:0,   zinc:0.7, dha:0,    vitA:67,   betaC:800,  vitB1:0.17,vitB2:0.23,vitE:2.4, vitK:120, ca:38,  k:360, p:89,  fe:1.0, salt:0, toushitsu:2.2, sugar:1.4, purine:61.9, satfat:0},
  'トマト':           {kcal:19,  protein:0.7, fat:0.1, fiber:1.0, vitC:15,  vitD:0,   zinc:0.1, dha:0,    vitA:45,   betaC:540,  vitB1:0.05,vitB2:0.02,vitE:0.9, vitK:4,   ca:7,   k:210, p:26,  fe:0.2, salt:0, toushitsu:3.7, sugar:3.7, purine:6.5, satfat:0},
  'ミニトマト':       {kcal:30,  protein:1.1, fat:0.1, fiber:1.4, vitC:32,  vitD:0,   zinc:0.1, dha:0,    vitA:68,   betaC:820,  vitB1:0.07,vitB2:0.05,vitE:0.9, vitK:5,   ca:12,  k:290, p:40,  fe:0.4, salt:0, toushitsu:5.8, sugar:5.6, purine:3.1, satfat:0},
  '人参':             {kcal:39,  protein:0.7, fat:0.2, fiber:2.8, vitC:6,   vitD:0,   zinc:0.2, dha:0,    vitA:720,  betaC:8600, vitB1:0.07,vitB2:0.06,vitE:0.5, vitK:10,  ca:28,  k:270, p:26,  fe:0.2, salt:0.1, toushitsu:6.5, sugar:5.8, purine:2.2, satfat:0},
  'キャベツ':         {kcal:23,  protein:1.3, fat:0.2, fiber:1.8, vitC:41,  vitD:0,   zinc:0.2, dha:0,    vitA:4,    betaC:49,   vitB1:0.04,vitB2:0.03,vitE:0.1, vitK:78,  ca:43,  k:200, p:27,  fe:0.3, salt:0, toushitsu:3.4, sugar:3.4, purine:3.2, satfat:0},
  'もやし':           {kcal:14,  protein:1.7, fat:0.1, fiber:1.3, vitC:8,   vitD:0,   zinc:0.3, dha:0,    vitA:0,    betaC:0,    vitB1:0.04,vitB2:0.02,vitE:0.1, vitK:0,   ca:10,  k:69,  p:31,  fe:0.3, salt:0, toushitsu:1.3, sugar:0.5, purine:35.0, satfat:0},
  'わかめ':           {kcal:16,  protein:1.9, fat:0.6, fiber:3.6, vitC:15,  vitD:0,   zinc:0.3, dha:0,    vitA:0,    betaC:0,    vitB1:0.08,vitB2:0.15,vitE:0.1, vitK:66,  ca:100, k:730, p:80,  fe:0.7, salt:1.5, toushitsu:2.2, sugar:0, purine:30, satfat:0},
  '玉ねぎ':           {kcal:37,  protein:1.0, fat:0.1, fiber:1.5, vitC:8,   vitD:0,   zinc:0.2, dha:0,    vitA:1,    betaC:1,    vitB1:0.04,vitB2:0.01,vitE:0.2, vitK:0,   ca:21,  k:150, p:33,  fe:0.2, salt:0, toushitsu:6.9, sugar:6.9, purine:2.3, satfat:0},
  'にんにく':         {kcal:136, protein:6.4, fat:0.9, fiber:6.2, vitC:12,  vitD:0,   zinc:0.9, dha:0,    vitA:0,    betaC:0,    vitB1:0.19,vitB2:0.07,vitE:0.5, vitK:1,   ca:14,  k:510, p:150, fe:0.8, salt:0, toushitsu:21.3, sugar:1.0, purine:17.0, satfat:0},
  'しょうが':         {kcal:30,  protein:0.9, fat:0.3, fiber:2.1, vitC:2,   vitD:0,   zinc:0.1, dha:0,    vitA:0,    betaC:0,    vitB1:0.03,vitB2:0.02,vitE:0.1, vitK:0,   ca:12,  k:270, p:25,  fe:0.5, salt:0, toushitsu:4.5, sugar:0.5, purine:2.3, satfat:0},
  'ねぎ（長ねぎ）':   {kcal:34,  protein:1.4, fat:0.1, fiber:2.5, vitC:14,  vitD:0,   zinc:0.3, dha:0,    vitA:1,    betaC:17,   vitB1:0.05,vitB2:0.04,vitE:0.2, vitK:52,  ca:36,  k:200, p:27,  fe:0.3, salt:0, toushitsu:5.8, sugar:4.1, purine:41.4, satfat:0},
  '大根':             {kcal:18,  protein:0.5, fat:0.1, fiber:1.4, vitC:11,  vitD:0,   zinc:0.2, dha:0,    vitA:0,    betaC:0,    vitB1:0.02,vitB2:0.02,vitE:0,   vitK:0,   ca:24,  k:230, p:18,  fe:0.2, salt:0, toushitsu:2.7, sugar:2.7, purine:1.7, satfat:0},
  'なす':             {kcal:22,  protein:1.1, fat:0.1, fiber:2.2, vitC:4,   vitD:0,   zinc:0.2, dha:0,    vitA:1,    betaC:10,   vitB1:0.05,vitB2:0.05,vitE:0.3, vitK:10,  ca:18,  k:220, p:30,  fe:0.3, salt:0, toushitsu:2.9, sugar:2.6, purine:50.7, satfat:0},
  'ピーマン':         {kcal:22,  protein:0.9, fat:0.2, fiber:2.3, vitC:76,  vitD:0,   zinc:0.2, dha:0,    vitA:33,   betaC:400,  vitB1:0.03,vitB2:0.03,vitE:0.8, vitK:20,  ca:11,  k:190, p:22,  fe:0.4, salt:0, toushitsu:2.8, sugar:2.8, purine:2.4, satfat:0},
  'パプリカ（赤）':   {kcal:30,  protein:1.0, fat:0.2, fiber:1.6, vitC:170, vitD:0,   zinc:0.2, dha:0,    vitA:88,   betaC:1100, vitB1:0.06,vitB2:0.14,vitE:4.3, vitK:7,   ca:7,   k:210, p:22,  fe:0.4, salt:0, toushitsu:5.6, sugar:5.6, purine:1.0, satfat:0},
  'きゅうり':         {kcal:14,  protein:1.0, fat:0.1, fiber:1.1, vitC:14,  vitD:0,   zinc:0.2, dha:0,    vitA:28,   betaC:330,  vitB1:0.03,vitB2:0.03,vitE:0.3, vitK:34,  ca:26,  k:200, p:36,  fe:0.3, salt:0, toushitsu:1.9, sugar:1.9, purine:9.4, satfat:0},
  'ごぼう':           {kcal:65,  protein:1.8, fat:0.1, fiber:5.7, vitC:3,   vitD:0,   zinc:0.8, dha:0,    vitA:0,    betaC:0,    vitB1:0.05,vitB2:0.04,vitE:0.5, vitK:0,   ca:46,  k:320, p:62,  fe:0.7, salt:0, toushitsu:9.7, sugar:1.1, purine:30, sugarEst:1, satfat:0},
  'れんこん':         {kcal:66,  protein:1.9, fat:0.1, fiber:2.0, vitC:48,  vitD:0,   zinc:0.3, dha:0,    vitA:0,    betaC:0,    vitB1:0.10,vitB2:0.01,vitE:0.6, vitK:1,   ca:20,  k:240, p:74,  fe:0.5, salt:0.1, toushitsu:13.5, sugar:0.5, purine:15, sugarEst:1, satfat:0},
  'アスパラガス':     {kcal:22,  protein:2.6, fat:0.2, fiber:1.8, vitC:15,  vitD:0,   zinc:0.5, dha:0,    vitA:36,   betaC:440,  vitB1:0.14,vitB2:0.15,vitE:1.5, vitK:43,  ca:19,  k:270, p:60,  fe:0.7, salt:0, toushitsu:2.1, sugar:1.8, purine:32.8, satfat:0},
  'セロリ':           {kcal:15,  protein:1.0, fat:0.1, fiber:1.5, vitC:7,   vitD:0,   zinc:0.2, dha:0,    vitA:1,    betaC:8,    vitB1:0.03,vitB2:0.03,vitE:0.2, vitK:37,  ca:39,  k:410, p:39,  fe:0.2, salt:0.1, toushitsu:2.1, sugar:1.4, purine:5, sugarEst:1, satfat:0},
  // きのこ類
  'しいたけ':         {kcal:25,  protein:3.0, fat:0.4, fiber:4.2, vitC:0,   vitD:0.4, zinc:0.6, dha:0,    vitA:0,    betaC:0,    vitB1:0.10,vitB2:0.22,vitE:0,   vitK:0,   ca:2,   k:290, p:95,  fe:0.4, salt:0, toushitsu:2.2, sugar:0, purine:20.8, satfat:0},
  'しめじ':           {kcal:26,  protein:2.7, fat:0.5, fiber:3.7, vitC:0,   vitD:0.5, zinc:0.6, dha:0,    vitA:0,    betaC:0,    vitB1:0.15,vitB2:0.17,vitE:0,   vitK:0,   ca:2,   k:370, p:100, fe:0.5, salt:0, toushitsu:1.1, sugar:0, purine:20.8, satfat:0},
  'えのき':           {kcal:34,  protein:2.7, fat:0.2, fiber:3.9, vitC:0,   vitD:0.9, zinc:0.6, dha:0,    vitA:0,    betaC:0,    vitB1:0.22,vitB2:0.18,vitE:0,   vitK:0,   ca:0,   k:340, p:110, fe:1.1, salt:0, toushitsu:3.7, sugar:0, purine:49.4, satfat:0},
  'まいたけ':         {kcal:22,  protein:2.0, fat:0.5, fiber:3.5, vitC:0,   vitD:4.9, zinc:0.7, dha:0,    vitA:0,    betaC:0,    vitB1:0.24,vitB2:0.19,vitE:0,   vitK:0,   ca:0,   k:230, p:54,  fe:0.2, salt:0, toushitsu:0.9, sugar:0, purine:98.5, satfat:0},
  'エリンギ':         {kcal:31,  protein:2.8, fat:0.4, fiber:4.3, vitC:0,   vitD:0.6, zinc:0.7, dha:0,    vitA:0,    betaC:0,    vitB1:0.14,vitB2:0.22,vitE:0,   vitK:0,   ca:0,   k:340, p:87,  fe:0.4, salt:0, toushitsu:1.7, sugar:0, purine:13.4, satfat:0},
  // 果物類
  'ブルーベリー':     {kcal:49,  protein:0.5, fat:0.1, fiber:3.3, vitC:9,   vitD:0,   zinc:0.1, dha:0,    vitA:0,    betaC:0,    vitB1:0.02,vitB2:0.03,vitE:1.7, vitK:19,  ca:8,   k:70,  p:9,   fe:0.1, salt:0, toushitsu:9.6, sugar:9.6, purine:2.0, sugarEst:1, satfat:0},
  'バナナ':           {kcal:86,  protein:1.1, fat:0.2, fiber:1.1, vitC:16,  vitD:0,   zinc:0.2, dha:0,    vitA:0,    betaC:0,    vitB1:0.05,vitB2:0.04,vitE:0.5, vitK:0,   ca:6,   k:360, p:27,  fe:0.3, salt:0, toushitsu:21.4, sugar:18.0, purine:3.0, satfat:0},
  'りんご':           {kcal:57,  protein:0.2, fat:0.1, fiber:1.5, vitC:6,   vitD:0,   zinc:0,   dha:0,    vitA:1,    betaC:14,   vitB1:0.02,vitB2:0.01,vitE:0.4, vitK:4,   ca:4,   k:120, p:12,  fe:0.1, salt:0, toushitsu:14.7, sugar:13.0, purine:1.5, sugarEst:1, satfat:0},
  'みかん':           {kcal:49,  protein:0.7, fat:0.1, fiber:1.0, vitC:35,  vitD:0,   zinc:0.1, dha:0,    vitA:15,   betaC:180,  vitB1:0.10,vitB2:0.03,vitE:0.3, vitK:0,   ca:21,  k:130, p:15,  fe:0.2, salt:0, toushitsu:11.0, sugar:9.0, purine:1.7, satfat:0},
  'いちご':           {kcal:34,  protein:0.9, fat:0.1, fiber:1.4, vitC:62,  vitD:0,   zinc:0.2, dha:0,    vitA:0,    betaC:2,    vitB1:0.03,vitB2:0.02,vitE:0.4, vitK:9,   ca:17,  k:170, p:31,  fe:0.3, salt:0, toushitsu:7.1, sugar:6.0, purine:2.1, satfat:0},
  'キウイフルーツ':   {kcal:53,  protein:1.0, fat:0.1, fiber:2.5, vitC:69,  vitD:0,   zinc:0.1, dha:0,    vitA:4,    betaC:50,   vitB1:0.01,vitB2:0.02,vitE:1.3, vitK:37,  ca:26,  k:290, p:32,  fe:0.3, salt:0, toushitsu:10.9, sugar:9.0, purine:1.8, satfat:0},
  'アボカド':         {kcal:187, protein:2.5, fat:17.5,fiber:5.6, vitC:15,  vitD:0,   zinc:0.7, dha:0,    vitA:7,    betaC:84,   vitB1:0.10,vitB2:0.21,vitE:3.3, vitK:21,  ca:9,   k:720, p:55,  fe:0.6, salt:0, toushitsu:2.3, sugar:0.9, purine:18.4, satfat:3.0},
  'グレープフルーツ': {kcal:40,  protein:0.9, fat:0.1, fiber:0.6, vitC:36,  vitD:0,   zinc:0.1, dha:0,    vitA:0,    betaC:0,    vitB1:0.07,vitB2:0.03,vitE:0.3, vitK:0,   ca:15,  k:140, p:17,  fe:0.1, salt:0, toushitsu:9.0, sugar:8.0, purine:2, sugarEst:1, satfat:0},
  'もも':             {kcal:40,  protein:0.6, fat:0.1, fiber:1.3, vitC:8,   vitD:0,   zinc:0.1, dha:0,    vitA:0,    betaC:0,    vitB1:0.01,vitB2:0.01,vitE:0.7, vitK:6,   ca:4,   k:180, p:18,  fe:0.1, salt:0, toushitsu:8.9, sugar:8.5, purine:2, sugarEst:1, satfat:0},
  'ぶどう':           {kcal:59,  protein:0.4, fat:0.1, fiber:0.5, vitC:2,   vitD:0,   zinc:0.1, dha:0,    vitA:1,    betaC:11,   vitB1:0.04,vitB2:0.01,vitE:0.4, vitK:8,   ca:6,   k:130, p:15,  fe:0.1, salt:0, toushitsu:16.4, sugar:15.0, purine:2, sugarEst:1, satfat:0},
  // ナッツ・種実類
  'ミックスナッツ':   {kcal:617, protein:15.7,fat:51.0,fiber:6.2, vitC:0,   vitD:0,   zinc:2.7, dha:0.07, vitA:0,    betaC:0,    vitB1:0.25,vitB2:0.10,vitE:7.0, vitK:1,   ca:76,  k:560, p:370, fe:2.5, salt:0.3, toushitsu:13.8, sugar:3.0, purine:30, sugarEst:1, satfat:6.0},
  'アーモンド':       {kcal:609, protein:19.6,fat:51.8,fiber:10.1,vitC:0,   vitD:0,   zinc:3.7, dha:0,    vitA:0,    betaC:0,    vitB1:0.20,vitB2:0.92,vitE:28.8,vitK:0,   ca:260, k:740, p:480, fe:3.6, salt:0, toushitsu:10.8, sugar:4.2, purine:31.4, satfat:4.0},
  'クルミ':           {kcal:713, protein:14.6,fat:68.8,fiber:7.5, vitC:0,   vitD:0,   zinc:2.6, dha:2.30, vitA:0,    betaC:0,    vitB1:0.26,vitB2:0.09,vitE:1.2, vitK:3,   ca:85,  k:540, p:280, fe:2.6, salt:0, toushitsu:4.2, sugar:2.6, purine:19.6, satfat:6.9},
  'カシューナッツ':   {kcal:576, protein:19.8,fat:47.6,fiber:6.7, vitC:0,   vitD:0,   zinc:5.4, dha:0,    vitA:0,    betaC:0,    vitB1:0.54,vitB2:0.18,vitE:1.0, vitK:32,  ca:38,  k:590, p:490, fe:5.0, salt:0.2, toushitsu:20.0, sugar:5.0, purine:30, sugarEst:1, satfat:9.4},
  'ピーナッツ':       {kcal:613, protein:25.4,fat:49.4,fiber:7.4, vitC:0,   vitD:0,   zinc:3.2, dha:0,    vitA:0,    betaC:0,    vitB1:0.85,vitB2:0.10,vitE:11.0,vitK:0,   ca:50,  k:760, p:390, fe:1.7, salt:0, toushitsu:12.2, sugar:4.0, purine:49.1, satfat:4.0},
  'ゴマ':             {kcal:605, protein:20.3,fat:54.2,fiber:10.8,vitC:0,   vitD:0,   zinc:5.9, dha:0,    vitA:0,    betaC:0,    vitB1:0.49,vitB2:0.25,vitE:0.4, vitK:10,  ca:1200,k:400, p:560, fe:9.9, salt:0, toushitsu:7.7, sugar:0.8, purine:36.3, satfat:7.6},
  // 調味料・油脂
  '味噌':             {kcal:192, protein:12.5,fat:6.0, fiber:4.9, vitC:0,   vitD:0,   zinc:1.1, dha:0,    vitA:0,    betaC:0,    vitB1:0.03,vitB2:0.10,vitE:0.1, vitK:19,  ca:100, k:380, p:130, fe:4.0, salt:12.4, toushitsu:17.0, sugar:11.0, purine:55, sugarEst:1, satfat:1.0},
  'しょうゆ':         {kcal:71,  protein:7.7, fat:0,   fiber:0,   vitC:0,   vitD:0,   zinc:0.9, dha:0,    vitA:0,    betaC:0,    vitB1:0.05,vitB2:0.17,vitE:0,   vitK:0,   ca:27,  k:930, p:160, fe:2.7, salt:14.5, toushitsu:7.9, sugar:1.6, purine:45.2, sugarEst:1, satfat:0},
  'オリーブオイル':   {kcal:921, protein:0,   fat:100, fiber:0,   vitC:0,   vitD:0,   zinc:0,   dha:0,    vitA:0,    betaC:0,    vitB1:0,   vitB2:0,   vitE:7.4, vitK:62,  ca:0,   k:0,   p:0,   fe:0.1, salt:0, toushitsu:0, sugar:0, purine:0, satfat:13.3},
  'ごま油':           {kcal:921, protein:0,   fat:100, fiber:0,   vitC:0,   vitD:0,   zinc:0,   dha:0,    vitA:0,    betaC:0,    vitB1:0,   vitB2:0,   vitE:0.4, vitK:7,   ca:0,   k:0,   p:0,   fe:0.2, salt:0, toushitsu:0, sugar:0, purine:0, satfat:15.0},
  'バター':           {kcal:745, protein:0.6, fat:81.0,fiber:0,   vitC:0,   vitD:0.6, zinc:0.1, dha:0,    vitA:500,  betaC:0,    vitB1:0.01,vitB2:0.03,vitE:1.5, vitK:8,   ca:15,  k:26,  p:23,  fe:0.1, salt:1.9, toushitsu:0.2, sugar:0.2, purine:0.0, satfat:50.5},
  'マヨネーズ':       {kcal:703, protein:1.5, fat:75.3,fiber:0,   vitC:0,   vitD:1.8, zinc:0.2, dha:0,    vitA:60,   betaC:0,    vitB1:0.01,vitB2:0.03,vitE:10.7,vitK:98,  ca:17,  k:17,  p:36,  fe:0.4, salt:1.9, toushitsu:3.6, sugar:2.0, purine:0.6, sugarEst:1, satfat:6.1},
  'ケチャップ':       {kcal:119, protein:1.7, fat:0.2, fiber:2.1, vitC:8,   vitD:0,   zinc:0.1, dha:0,    vitA:30,   betaC:360,  vitB1:0.07,vitB2:0.07,vitE:2.3, vitK:9,   ca:14,  k:440, p:30,  fe:0.4, salt:3.1, toushitsu:25.5, sugar:24.0, purine:10.5, satfat:0},
  'みりん':           {kcal:241, protein:0.3, fat:0,   fiber:0,   vitC:0,   vitD:0,   zinc:0,   dha:0,    vitA:0,    betaC:0,    vitB1:0,   vitB2:0.01,vitE:0,   vitK:0,   ca:2,   k:33,  p:7,   fe:0.1, salt:0, toushitsu:43.2, sugar:26.0, purine:1.2, sugarEst:1, satfat:0},
  'はちみつ':         {kcal:294, protein:0.2, fat:0,   fiber:0,   vitC:1,   vitD:0,   zinc:0.1, dha:0,    vitA:0,    betaC:0,    vitB1:0,   vitB2:0.01,vitE:0.1, vitK:0,   ca:2,   k:65,  p:4,   fe:0.1, salt:0, toushitsu:81.9, sugar:79.0, purine:0.9, satfat:0},
  // 海藻・その他
  'のり（焼き）':     {kcal:188, protein:41.4,fat:3.7, fiber:36.0,vitC:210, vitD:0,   zinc:3.7, dha:0.50, vitA:2300, betaC:27000,vitB1:1.21,vitB2:2.68,vitE:4.6, vitK:2600,ca:140, k:2400,p:700, fe:11.4, salt:1.3, toushitsu:8.3, sugar:0, purine:591.7, satfat:0},
  'こんにゃく':       {kcal:5,   protein:0.1, fat:0,   fiber:2.9, vitC:0,   vitD:0,   zinc:0.1, dha:0,    vitA:0,    betaC:0,    vitB1:0,   vitB2:0,   vitE:0,   vitK:0,   ca:43,  k:33,  p:5,   fe:0.4, salt:0, toushitsu:0, sugar:0, purine:0.3, satfat:0},
  'きゅうりのぬか漬け':{kcal:17, protein:1.2, fat:0.1, fiber:1.6, vitC:9,   vitD:0,   zinc:0.3, dha:0,    vitA:24,   betaC:290,  vitB1:0.06,vitB2:0.05,vitE:0.2, vitK:31,  ca:31,  k:610, p:43,  fe:0.4, salt:5.3, toushitsu:4.6, sugar:2.0, purine:9.4, sugarEst:1, satfat:0},
  'キムチ':           {kcal:46,  protein:2.8, fat:0.3, fiber:2.7, vitC:23,  vitD:0,   zinc:0.3, dha:0,    vitA:37,   betaC:450,  vitB1:0.05,vitB2:0.07,vitE:0.6, vitK:60,  ca:55,  k:510, p:46,  fe:0.8, salt:2.2, toushitsu:2.7, sugar:2.7, purine:10, sugarEst:1, satfat:0},
  // 炭水化物・加工食品追加
  'オートミール':     {kcal:380, protein:13.7,fat:5.7, fiber:9.4, vitC:0,   vitD:0,   zinc:2.9, dha:0,    vitA:0,    betaC:0,    vitB1:0.20,vitB2:0.05,vitE:0.6, vitK:2,   ca:47,  k:260, p:370, fe:3.9, salt:0, toushitsu:59.7, sugar:1.0, purine:35.0, satfat:1.2},
  'グラノーラ':       {kcal:429, protein:8.2, fat:14.0,fiber:5.0, vitC:0,   vitD:0,   zinc:1.5, dha:0,    vitA:0,    betaC:0,    vitB1:0.17,vitB2:0.07,vitE:1.2, vitK:3,   ca:39,  k:240, p:160, fe:2.4, salt:0.4, toushitsu:59.0, sugar:20.0, purine:35, sugarEst:1, satfat:2.5},
  'コーンフレーク':   {kcal:381, protein:7.8, fat:1.7, fiber:2.4, vitC:0,   vitD:0,   zinc:0.4, dha:0,    vitA:0,    betaC:0,    vitB1:0.29,vitB2:0.10,vitE:0.3, vitK:0,   ca:7,   k:95,  p:82,  fe:0.5, salt:2.1, toushitsu:81.2, sugar:8.0, purine:20, sugarEst:1, satfat:0.1},
  'もち':             {kcal:235, protein:4.7, fat:0.8, fiber:0.5, vitC:0,   vitD:0,   zinc:0.9, dha:0,    vitA:0,    betaC:0,    vitB1:0.04,vitB2:0.02,vitE:0.2, vitK:0,   ca:4,   k:32,  p:55,  fe:0.2, salt:0, toushitsu:50.3, sugar:0.2, purine:25, sugarEst:1, satfat:0.1},
  'チャーハン':       {kcal:194, protein:4.5, fat:6.2, fiber:0.5, vitC:0,   vitD:0,   zinc:0.7, dha:0,    vitA:13,   betaC:0,    vitB1:0.05,vitB2:0.04,vitE:0.4, vitK:5,   ca:10,  k:75,  p:65,  fe:0.4, salt:1.0, toushitsu:29.5, sugar:2.0, purine:30, sugarEst:1, satfat:1.5},
  '雑炊（鶏）':       {kcal:68,  protein:3.2, fat:0.8, fiber:0.3, vitC:1,   vitD:0,   zinc:0.4, dha:0,    vitA:5,    betaC:0,    vitB1:0.04,vitB2:0.04,vitE:0.1, vitK:2,   ca:8,   k:85,  p:45,  fe:0.3, salt:0.8, toushitsu:14.7, sugar:1.0, purine:30, sugarEst:1, satfat:0.3},
  'ピザ生地':         {kcal:280, protein:8.0, fat:3.0, fiber:2.2, vitC:0,   vitD:0,   zinc:0.7, dha:0,    vitA:0,    betaC:0,    vitB1:0.14,vitB2:0.06,vitE:0.3, vitK:0,   ca:17,  k:90,  p:90,  fe:0.9, salt:1.3, toushitsu:45.8, sugar:3.0, purine:10, sugarEst:1, satfat:1.0},
  // 加工食品
  'ちくわ':           {kcal:121, protein:12.2,fat:2.0, fiber:0,   vitC:0,   vitD:0,   zinc:0.5, dha:0.04, vitA:4,    betaC:0,    vitB1:0.02,vitB2:0.03,vitE:0.4, vitK:0,   ca:15,  k:120, p:120, fe:0.5, salt:2.1, toushitsu:13.5, sugar:6.0, purine:47.7, sugarEst:1, satfat:0.5},
  'かまぼこ':         {kcal:95,  protein:12.0,fat:0.9, fiber:0,   vitC:0,   vitD:0,   zinc:0.3, dha:0.02, vitA:1,    betaC:0,    vitB1:0.01,vitB2:0.02,vitE:0.4, vitK:0,   ca:25,  k:110, p:100, fe:0.3, salt:2.5, toushitsu:9.7, sugar:6.0, purine:26.4, sugarEst:1, satfat:0.2},
  'さつま揚げ':       {kcal:139, protein:12.5,fat:3.7, fiber:0,   vitC:0,   vitD:0,   zinc:0.6, dha:0.03, vitA:1,    betaC:0,    vitB1:0.09,vitB2:0.05,vitE:0.7, vitK:0,   ca:60,  k:96,  p:100, fe:0.6, salt:1.9, toushitsu:13.9, sugar:5.0, purine:21.4, sugarEst:1, satfat:0.8},
  '豆腐そうめん':     {kcal:56,  protein:5.0, fat:2.8, fiber:0.3, vitC:0,   vitD:0,   zinc:0.4, dha:0,    vitA:0,    betaC:0,    vitB1:0.05,vitB2:0.02,vitE:0.1, vitK:0,   ca:50,  k:100, p:60,  fe:0.8, salt:0.3, toushitsu:3.7, sugar:0, purine:25, sugarEst:1, satfat:0.5},
  'プロテインバー':   {kcal:220, protein:20.0,fat:7.0, fiber:3.0, vitC:0,   vitD:0,   zinc:1.5, dha:0,    vitA:0,    betaC:0,    vitB1:0.10,vitB2:0.10,vitE:0,   vitK:0,   ca:80,  k:150, p:180, fe:1.0, salt:0.4, toushitsu:22.0, sugar:15.0, purine:10, sugarEst:1, satfat:5.0},
  'プロテイン（WP）': {kcal:380, protein:75.0,fat:5.0, fiber:1.5, vitC:0,   vitD:0,   zinc:1.8, dha:0,    vitA:0,    betaC:0,    vitB1:0.10,vitB2:0.20,vitE:0,   vitK:0,   ca:150, k:300, p:700, fe:1.5, salt:0.6, toushitsu:3.5, sugar:2.0, purine:30, sugarEst:1, satfat:1.0},
  // 野菜追加
  'かぼちゃ':         {kcal:91,  protein:1.9, fat:0.3, fiber:3.5, vitC:43,  vitD:0,   zinc:0.4, dha:0,    vitA:67,   betaC:800,  vitB1:0.07,vitB2:0.09,vitE:4.9, vitK:17,  ca:15,  k:450, p:43,  fe:0.5, salt:0, toushitsu:17.1, sugar:9.0, purine:56.6, satfat:0},
  '白菜':             {kcal:14,  protein:0.8, fat:0.1, fiber:1.3, vitC:19,  vitD:0,   zinc:0.1, dha:0,    vitA:1,    betaC:18,   vitB1:0.03,vitB2:0.03,vitE:0.2, vitK:59,  ca:43,  k:220, p:33,  fe:0.3, salt:0, toushitsu:1.9, sugar:1.9, purine:7.0, satfat:0},
  '水菜':             {kcal:23,  protein:2.2, fat:0.1, fiber:3.0, vitC:55,  vitD:0,   zinc:0.3, dha:0,    vitA:130,  betaC:1500, vitB1:0.08,vitB2:0.15,vitE:1.8, vitK:210, ca:210, k:480, p:64,  fe:2.1, salt:0.1, toushitsu:1.8, sugar:1.2, purine:20.2, satfat:0},
  '里芋':             {kcal:58,  protein:1.5, fat:0.1, fiber:2.3, vitC:6,   vitD:0,   zinc:0.3, dha:0,    vitA:0,    betaC:5,    vitB1:0.07,vitB2:0.02,vitE:0.6, vitK:1,   ca:10,  k:560, p:55,  fe:0.5, salt:0, toushitsu:10.8, sugar:0.8, purine:20, sugarEst:1, satfat:0},
  'かいわれ大根':     {kcal:21,  protein:2.1, fat:0.5, fiber:1.9, vitC:47,  vitD:0,   zinc:0.3, dha:0,    vitA:130,  betaC:1500, vitB1:0.07,vitB2:0.13,vitE:2.1, vitK:200, ca:54,  k:99,  p:61,  fe:0.5, salt:0, toushitsu:1.4, sugar:1.0, purine:73.2, satfat:0},
  'ルッコラ':         {kcal:19,  protein:1.6, fat:0.4, fiber:1.6, vitC:66,  vitD:0,   zinc:0.5, dha:0,    vitA:160,  betaC:1900, vitB1:0.10,vitB2:0.12,vitE:1.5, vitK:109, ca:160, k:460, p:52,  fe:1.4, salt:0, toushitsu:1.5, sugar:0.5, purine:30, sugarEst:1, satfat:0},
  'サニーレタス':     {kcal:16,  protein:1.4, fat:0.2, fiber:1.8, vitC:31,  vitD:0,   zinc:0.3, dha:0,    vitA:290,  betaC:3500, vitB1:0.10,vitB2:0.10,vitE:1.3, vitK:160, ca:66,  k:410, p:31,  fe:1.8, salt:0, toushitsu:1.4, sugar:1.0, purine:5, sugarEst:1, satfat:0},
  'レタス':           {kcal:12,  protein:0.6, fat:0.1, fiber:1.1, vitC:5,   vitD:0,   zinc:0.2, dha:0,    vitA:20,   betaC:240,  vitB1:0.05,vitB2:0.03,vitE:0.3, vitK:29,  ca:19,  k:200, p:22,  fe:0.3, salt:0, toushitsu:1.7, sugar:1.7, purine:4.6, satfat:0},
  // 果物追加
  'レモン（果汁）':   {kcal:26,  protein:0.4, fat:0.2, fiber:0.4, vitC:50,  vitD:0,   zinc:0.1, dha:0,    vitA:0,    betaC:0,    vitB1:0.04,vitB2:0.02,vitE:0.2, vitK:0,   ca:7,   k:100, p:9,   fe:0.1, salt:0, toushitsu:8.2, sugar:2.0, purine:2, sugarEst:1, satfat:0},
  'オレンジ':         {kcal:46,  protein:1.0, fat:0.1, fiber:1.0, vitC:60,  vitD:0,   zinc:0.1, dha:0,    vitA:1,    betaC:12,   vitB1:0.10,vitB2:0.04,vitE:0.4, vitK:0,   ca:24,  k:140, p:24,  fe:0.3, salt:0, toushitsu:10.8, sugar:9.0, purine:2, satfat:0},
  'スイカ':           {kcal:37,  protein:0.6, fat:0.1, fiber:0.3, vitC:10,  vitD:0,   zinc:0.1, dha:0,    vitA:17,   betaC:200,  vitB1:0.03,vitB2:0.02,vitE:0.1, vitK:0,   ca:4,   k:120, p:8,   fe:0.2, salt:0, toushitsu:9.2, sugar:9.0, purine:1, sugarEst:1, satfat:0},
  '柿':               {kcal:63,  protein:0.4, fat:0.2, fiber:1.6, vitC:70,  vitD:0,   zinc:0.1, dha:0,    vitA:34,   betaC:420,  vitB1:0.03,vitB2:0.02,vitE:0.1, vitK:7,   ca:9,   k:170, p:14,  fe:0.2, salt:0, toushitsu:14.3, sugar:13.0, purine:2, sugarEst:1, satfat:0},
  '梨':               {kcal:43,  protein:0.3, fat:0.1, fiber:0.9, vitC:3,   vitD:0,   zinc:0.1, dha:0,    vitA:0,    betaC:0,    vitB1:0.02,vitB2:0.01,vitE:0.1, vitK:7,   ca:2,   k:140, p:11,  fe:0.1, salt:0, toushitsu:10.4, sugar:9.0, purine:1, sugarEst:1, satfat:0},
  'マンゴー':         {kcal:68,  protein:0.6, fat:0.1, fiber:1.3, vitC:20,  vitD:0,   zinc:0.1, dha:0,    vitA:51,   betaC:610,  vitB1:0.04,vitB2:0.06,vitE:1.8, vitK:0,   ca:15,  k:170, p:12,  fe:0.2, salt:0, toushitsu:15.6, sugar:14.0, purine:2, sugarEst:1, satfat:0},
  'パイナップル':     {kcal:54,  protein:0.6, fat:0.1, fiber:1.5, vitC:35,  vitD:0,   zinc:0.1, dha:0,    vitA:1,    betaC:14,   vitB1:0.09,vitB2:0.02,vitE:0.1, vitK:0,   ca:11,  k:150, p:9,   fe:0.3, salt:0, toushitsu:11.9, sugar:11.9, purine:2, sugarEst:1, satfat:0},
  // 飲み物
  '豆乳（調整）':     {kcal:64,  protein:3.2, fat:3.6, fiber:0.3, vitC:0,   vitD:0,   zinc:0.3, dha:0,    vitA:0,    betaC:0,    vitB1:0.08,vitB2:0.02,vitE:3.0, vitK:19,  ca:31,  k:170, p:44,  fe:1.2, salt:0.1, toushitsu:4.5, sugar:3.5, purine:20, satfat:0.8},
  '低脂肪牛乳':       {kcal:42,  protein:3.8, fat:1.0, fiber:0,   vitC:0,   vitD:0.2, zinc:0.4, dha:0,    vitA:16,   betaC:0,    vitB1:0.04,vitB2:0.17,vitE:0.1, vitK:2,   ca:130, k:160, p:100, fe:0, salt:0.2, toushitsu:5.5, sugar:5.5, purine:0.15, satfat:0.7},
  'オレンジジュース': {kcal:42,  protein:0.6, fat:0.1, fiber:0.1, vitC:42,  vitD:0,   zinc:0.1, dha:0,    vitA:1,    betaC:13,   vitB1:0.08,vitB2:0.02,vitE:0.1, vitK:0,   ca:10,  k:180, p:13,  fe:0.1, salt:0, toushitsu:10.9, sugar:9.0, purine:1.1, satfat:0},
  // 肉類追加（八訂増補2023）
  '鶏もも肉（皮なし）': {kcal:113, protein:19.0,fat:5.0, fiber:0,   vitC:3,   vitD:0.4, zinc:1.8, dha:0.07, vitA:16,   betaC:0,    vitB1:0.12,vitB2:0.19,vitE:0.4, vitK:23,  ca:5,   k:320, p:190, fe:0.6, salt:0.2, toushitsu:0, sugar:0, purine:122.9, satfat:1.4},
  '鶏ささみ':           {kcal:98, protein:23.9,fat:0.8, fiber:0,   vitC:3,   vitD:0.1, zinc:0.6, dha:0,    vitA:4,    betaC:0,    vitB1:0.10,vitB2:0.11,vitE:0.2, vitK:14,  ca:4,   k:430, p:220, fe:0.2, salt:0.1, toushitsu:0.1, sugar:0, purine:153.9, satfat:0.2},
  '豚ヒレ':             {kcal:118, protein:22.2,fat:3.7, fiber:0,   vitC:1,   vitD:0.1, zinc:2.2, dha:0.01, vitA:3,    betaC:0,    vitB1:1.32,vitB2:0.26,vitE:0.5, vitK:0,   ca:4,   k:410, p:230, fe:1.0, salt:0.1, toushitsu:0.3, sugar:0, purine:119.7, satfat:1.3},
  '豚肩ロース':         {kcal:237, protein:18.5,fat:17.1,fiber:0,   vitC:1,   vitD:0.1, zinc:3.0, dha:0.02, vitA:5,    betaC:0,    vitB1:0.63,vitB2:0.23,vitE:0.4, vitK:1,   ca:5,   k:330, p:180, fe:1.1, salt:0.1, toushitsu:0.2, sugar:0, purine:95.1, satfat:7.3},
  '牛バラ肉':           {kcal:472, protein:11.0,fat:44.4,fiber:0,   vitC:1,   vitD:0,   zinc:3.2, dha:0.05, vitA:4,    betaC:0,    vitB1:0.04,vitB2:0.09,vitE:0.3, vitK:6,   ca:4,   k:210, p:100, fe:1.4, salt:0.1, toushitsu:0.1, sugar:0, purine:77.4, satfat:13.0},
  '牛肩ロース':         {kcal:270, protein:17.1,fat:22.3,fiber:0,   vitC:1,   vitD:0,   zinc:4.4, dha:0.04, vitA:5,    betaC:0,    vitB1:0.08,vitB2:0.18,vitE:0.4, vitK:9,   ca:5,   k:310, p:160, fe:2.4, salt:0.1, toushitsu:0.2, sugar:0, purine:90.2, satfat:11.0},
  'ラム肉（もも）':     {kcal:164, protein:20.0,fat:10.3,fiber:0,   vitC:1,   vitD:0,   zinc:3.7, dha:0.05, vitA:5,    betaC:0,    vitB1:0.13,vitB2:0.23,vitE:0.3, vitK:2,   ca:10,  k:320, p:200, fe:2.0, salt:0.2, toushitsu:0.2, sugar:0, purine:93.5, satfat:5.7},
  // 魚介類追加
  'かつお（生）':       {kcal:108, protein:25.8,fat:0.5, fiber:0,   vitC:0,   vitD:4.0, zinc:0.8, dha:0.10, vitA:5,    betaC:0,    vitB1:0.13,vitB2:0.17,vitE:0.9, vitK:1,   ca:11,  k:430, p:280, fe:1.9, salt:0.1, toushitsu:0.1, sugar:0, purine:211.4, satfat:0.2},
  'かき（生）':         {kcal:58,  protein:6.9, fat:1.4, fiber:0,   vitC:4,   vitD:1.0, zinc:13.2,dha:0.44, vitA:32,   betaC:0,    vitB1:0.07,vitB2:0.14,vitE:1.4, vitK:0,   ca:88,  k:190, p:100, fe:2.1, salt:1.2, toushitsu:4.9, sugar:0, purine:184.5, satfat:0.4},
  'あさり':             {kcal:27,  protein:6.0, fat:0.3, fiber:0,   vitC:2,   vitD:0,   zinc:1.0, dha:0.03, vitA:6,    betaC:0,    vitB1:0.02,vitB2:0.16,vitE:0.4, vitK:0,   ca:66,  k:140, p:85,  fe:3.8, salt:2.2, toushitsu:0.4, sugar:0, purine:145.5, satfat:0.0},
  'しじみ':             {kcal:54,  protein:7.5, fat:1.4, fiber:0,   vitC:1,   vitD:0,   zinc:2.1, dha:0.09, vitA:47,   betaC:0,    vitB1:0.02,vitB2:0.44,vitE:0.7, vitK:0,   ca:240, k:83,  p:120, fe:5.3, salt:0.4, toushitsu:4.5, sugar:0, purine:120, satfat:0.2},
  'ほたて（生）':       {kcal:66,  protein:13.5,fat:0.9, fiber:0,   vitC:3,   vitD:0,   zinc:2.7, dha:0.12, vitA:5,    betaC:0,    vitB1:0.05,vitB2:0.29,vitE:1.0, vitK:0,   ca:22,  k:310, p:210, fe:2.2, salt:0.8, toushitsu:1.5, sugar:0, purine:104.9, satfat:0.2},
  'たら（生）':         {kcal:72,  protein:17.6,fat:0.2, fiber:0,   vitC:0,   vitD:1.0, zinc:0.5, dha:0.17, vitA:10,   betaC:0,    vitB1:0.10,vitB2:0.10,vitE:1.0, vitK:1,   ca:32,  k:350, p:230, fe:0.2, salt:0.3, toushitsu:0.1, sugar:0, purine:98.0, satfat:0.0},
  'うなぎ（蒲焼き）':   {kcal:285, protein:23.0,fat:19.3,fiber:0,   vitC:0,   vitD:18.0,zinc:2.7, dha:1.33, vitA:1500, betaC:0,    vitB1:0.75,vitB2:0.74,vitE:4.9, vitK:0,   ca:150, k:300, p:300, fe:0.8, salt:1.3, toushitsu:3.1, sugar:3.0, purine:92.1, sugarEst:1, satfat:5.3},
  'たらこ':             {kcal:131, protein:24.0,fat:4.7, fiber:0,   vitC:0,   vitD:1.0, zinc:3.0, dha:0.25, vitA:35,   betaC:0,    vitB1:0.71,vitB2:0.43,vitE:7.1, vitK:0,   ca:24,  k:300, p:390, fe:2.3, salt:4.6, toushitsu:0.4, sugar:0, purine:120.7, satfat:0.7},
  'さわら':             {kcal:161, protein:20.1,fat:9.7, fiber:0,   vitC:1,   vitD:7.0, zinc:0.8, dha:0.90, vitA:12,   betaC:0,    vitB1:0.09,vitB2:0.26,vitE:2.2, vitK:0,   ca:13,  k:490, p:220, fe:1.0, salt:0.2, toushitsu:0.1, sugar:0, purine:139.3, satfat:2.5},
  'いわし缶（水煮）':   {kcal:168, protein:20.3,fat:9.3, fiber:0,   vitC:0,   vitD:11.0,zinc:2.1, dha:1.47, vitA:15,   betaC:0,    vitB1:0.04,vitB2:0.28,vitE:1.9, vitK:0,   ca:280, k:230, p:290, fe:3.5, salt:0.7, toushitsu:0.1, sugar:0, purine:200, satfat:2.0},
  // 豆類追加
  '木綿豆腐':           {kcal:80,  protein:7.0, fat:4.9, fiber:0.4, vitC:0,   vitD:0,   zinc:0.6, dha:0,    vitA:0,    betaC:0,    vitB1:0.11,vitB2:0.04,vitE:0.1, vitK:0,   ca:93,  k:150, p:99,  fe:1.5, salt:0, toushitsu:1.1, sugar:0, purine:31.1, satfat:0.8},
  '絹ごし豆腐':         {kcal:62,  protein:5.3, fat:3.5, fiber:0.3, vitC:0,   vitD:0,   zinc:0.5, dha:0,    vitA:0,    betaC:0,    vitB1:0.10,vitB2:0.04,vitE:0.1, vitK:0,   ca:75,  k:150, p:80,  fe:1.2, salt:0, toushitsu:1.7, sugar:0, purine:28, satfat:0.6},
  '高野豆腐（水戻し）': {kcal:150, protein:15.9,fat:10.2,fiber:0.8, vitC:0,   vitD:0,   zinc:1.4, dha:0,    vitA:0,    betaC:0,    vitB1:0.02,vitB2:0.03,vitE:0.1, vitK:0,   ca:630, k:13,  p:270, fe:3.4, salt:0.1, toushitsu:0.3, sugar:0, purine:50, satfat:1.6},
  'おから（生）':       {kcal:111, protein:6.1, fat:3.6, fiber:11.5,vitC:0,   vitD:0,   zinc:0.6, dha:0,    vitA:0,    betaC:0,    vitB1:0.11,vitB2:0.03,vitE:0.5, vitK:9,   ca:81,  k:350, p:99,  fe:1.3, salt:0, toushitsu:2.3, sugar:0, purine:48.6, satfat:0.5},
  'ひよこ豆（茹で）':   {kcal:149, protein:9.5, fat:3.0, fiber:11.6,vitC:0,   vitD:0,   zinc:1.5, dha:0,    vitA:0,    betaC:0,    vitB1:0.16,vitB2:0.06,vitE:0.7, vitK:9,   ca:45,  k:350, p:150, fe:2.6, salt:0, toushitsu:15.8, sugar:0, purine:26.1, satfat:0.2},
  'レンズ豆（茹で）':   {kcal:120, protein:9.3, fat:0.7, fiber:9.0, vitC:0,   vitD:0,   zinc:1.2, dha:0,    vitA:0,    betaC:0,    vitB1:0.20,vitB2:0.07,vitE:0.1, vitK:4,   ca:13,  k:310, p:160, fe:3.3, salt:0, toushitsu:20.1, sugar:0, purine:30, satfat:0.1},
  '小豆（茹で）':       {kcal:143, protein:8.9, fat:1.0, fiber:11.8,vitC:0,   vitD:0,   zinc:1.6, dha:0,    vitA:0,    betaC:0,    vitB1:0.15,vitB2:0.06,vitE:0.1, vitK:5,   ca:27,  k:430, p:130, fe:1.5, salt:0, toushitsu:13.8, sugar:0, purine:30, satfat:0.1},
  // 野菜追加
  'チンゲン菜':         {kcal:13,  protein:1.0, fat:0.1, fiber:1.2, vitC:24,  vitD:0,   zinc:0.3, dha:0,    vitA:100,  betaC:1200, vitB1:0.03,vitB2:0.07,vitE:0.7, vitK:130, ca:100, k:260, p:27,  fe:1.1, salt:0.1, toushitsu:0.8, sugar:0.8, purine:15, sugarEst:1, satfat:0},
  'にら':               {kcal:33,  protein:1.7, fat:0.3, fiber:2.7, vitC:19,  vitD:0,   zinc:0.4, dha:0,    vitA:290,  betaC:3500, vitB1:0.06,vitB2:0.13,vitE:2.5, vitK:180, ca:48,  k:510, p:42,  fe:0.7, salt:0, toushitsu:1.3, sugar:1.3, purine:25, sugarEst:1, satfat:0},
  'オクラ':             {kcal:30,  protein:2.1, fat:0.2, fiber:5.2, vitC:11,  vitD:0,   zinc:0.6, dha:0,    vitA:56,   betaC:670,  vitB1:0.09,vitB2:0.09,vitE:1.2, vitK:71,  ca:92,  k:280, p:58,  fe:0.5, salt:0, toushitsu:1.4, sugar:1.4, purine:39.5, satfat:0},
  '春菊':               {kcal:22,  protein:2.3, fat:0.3, fiber:3.2, vitC:19,  vitD:0,   zinc:0.2, dha:0,    vitA:380,  betaC:4500, vitB1:0.10,vitB2:0.16,vitE:1.7, vitK:250, ca:120, k:460, p:44,  fe:1.7, salt:0.2, toushitsu:0.7, sugar:0.7, purine:25, sugarEst:1, satfat:0},
  'もろへいや':         {kcal:38,  protein:4.8, fat:0.5, fiber:5.9, vitC:65,  vitD:0,   zinc:0.6, dha:0,    vitA:840,  betaC:10000,vitB1:0.18,vitB2:0.42,vitE:6.5, vitK:640, ca:260, k:530, p:110, fe:1.0, salt:0, toushitsu:0.4, sugar:0.1, purine:40, satfat:0},
  '菜の花':             {kcal:33,  protein:4.4, fat:0.2, fiber:4.2, vitC:130, vitD:0,   zinc:0.7, dha:0,    vitA:180,  betaC:2200, vitB1:0.16,vitB2:0.28,vitE:3.0, vitK:250, ca:160, k:390, p:86,  fe:2.9, salt:0, toushitsu:1.6, sugar:1.6, purine:40, sugarEst:1, satfat:0},
  'しそ（大葉）':       {kcal:37,  protein:3.9, fat:0.1, fiber:7.3, vitC:26,  vitD:0,   zinc:1.3, dha:0,    vitA:880,  betaC:11000,vitB1:0.13,vitB2:0.34,vitE:3.9, vitK:690, ca:230, k:500, p:70,  fe:1.7, salt:0, toushitsu:0.2, sugar:0, purine:41.4, satfat:0},
  'カリフラワー':       {kcal:27,  protein:3.0, fat:0.1, fiber:2.9, vitC:81,  vitD:0,   zinc:0.6, dha:0,    vitA:0,    betaC:0,    vitB1:0.06,vitB2:0.11,vitE:0.2, vitK:17,  ca:24,  k:410, p:68,  fe:0.6, salt:0, toushitsu:2.3, sugar:2.0, purine:57.2, satfat:0},
  'ズッキーニ':         {kcal:14,  protein:1.3, fat:0.1, fiber:1.3, vitC:20,  vitD:0,   zinc:0.4, dha:0,    vitA:22,   betaC:260,  vitB1:0.05,vitB2:0.05,vitE:0.1, vitK:6,   ca:24,  k:320, p:37,  fe:0.5, salt:0, toushitsu:1.5, sugar:1.5, purine:13.1, satfat:0},
  '長芋':               {kcal:65,  protein:2.2, fat:0.3, fiber:1.0, vitC:6,   vitD:0,   zinc:0.4, dha:0,    vitA:0,    betaC:0,    vitB1:0.10,vitB2:0.02,vitE:0.2, vitK:0,   ca:17,  k:430, p:27,  fe:0.4, salt:0, toushitsu:12.9, sugar:2.6, purine:10, sugarEst:1, satfat:0},
  'しらたき':           {kcal:7,   protein:0.2, fat:0,   fiber:3.0, vitC:0,   vitD:0,   zinc:0.1, dha:0,    vitA:0,    betaC:0,    vitB1:0,   vitB2:0,   vitE:0,   vitK:0,   ca:75,  k:12,  p:5,   fe:0.5, salt:0, toushitsu:0, sugar:0, purine:0.3, satfat:0},
  'そら豆（生）':       {kcal:102, protein:10.9,fat:0.2, fiber:2.6, vitC:23,  vitD:0,   zinc:1.4, dha:0,    vitA:0,    betaC:0,    vitB1:0.30,vitB2:0.20,vitE:0.5, vitK:5,   ca:22,  k:440, p:220, fe:2.3, salt:0, toushitsu:12.9, sugar:0.6, purine:35.5, satfat:0.1},
  // きのこ追加
  'なめこ':             {kcal:15,  protein:1.7, fat:0.3, fiber:3.4, vitC:0,   vitD:0.3, zinc:0.5, dha:0,    vitA:0,    betaC:0,    vitB1:0.07,vitB2:0.12,vitE:0,   vitK:0,   ca:5,   k:240, p:54,  fe:0.7, salt:0, toushitsu:2.0, sugar:0, purine:28.5, satfat:0},
  'マッシュルーム':     {kcal:17,  protein:2.9, fat:0.3, fiber:2.0, vitC:0,   vitD:0.3, zinc:0.4, dha:0,    vitA:0,    betaC:0,    vitB1:0.10,vitB2:0.29,vitE:0,   vitK:0,   ca:3,   k:350, p:100, fe:0.3, salt:0, toushitsu:0.1, sugar:0, purine:49.5, satfat:0},
  '干しシイタケ（乾）': {kcal:258, protein:19.3,fat:3.7, fiber:41.0,vitC:0,   vitD:12.7,zinc:2.3, dha:0,    vitA:0,    betaC:0,    vitB1:0.54,vitB2:1.75,vitE:0,   vitK:0,   ca:13,  k:2100,p:290, fe:2.1, salt:0, toushitsu:21.5, sugar:2.0, purine:379.5, satfat:0},
  // 海藻追加
  'ひじき（乾）':       {kcal:149, protein:9.2, fat:3.2, fiber:51.8,vitC:0,   vitD:0,   zinc:1.0, dha:0,    vitA:0,    betaC:0,    vitB1:0.09,vitB2:0.42,vitE:0,   vitK:0,   ca:1000,k:4400,p:93,  fe:6.2, salt:4.7, toushitsu:6.6, sugar:0, purine:132.8, satfat:0},
  'めかぶ':             {kcal:15,  protein:0.9, fat:0.6, fiber:3.4, vitC:14,  vitD:0,   zinc:0.2, dha:0,    vitA:0,    betaC:0,    vitB1:0.04,vitB2:0.10,vitE:0.6, vitK:160, ca:100, k:270, p:36,  fe:0.7, salt:0.4, toushitsu:0, sugar:0, purine:30, satfat:0},
  'もずく（塩抜き）':   {kcal:4,   protein:0.3, fat:0.1, fiber:1.4, vitC:0,   vitD:0,   zinc:0.1, dha:0,    vitA:0,    betaC:0,    vitB1:0.01,vitB2:0.01,vitE:0.1, vitK:51,  ca:22,  k:2,   p:7,   fe:0.1, salt:0.2, toushitsu:0, sugar:0, purine:10, satfat:0},
  // 乳製品追加
  'クリームチーズ':     {kcal:346, protein:8.2, fat:33.0,fiber:0,   vitC:0,   vitD:0.2, zinc:0.6, dha:0,    vitA:250,  betaC:0,    vitB1:0.03,vitB2:0.22,vitE:0.5, vitK:3,   ca:70,  k:60,  p:85,  fe:0.1, salt:0.7, toushitsu:2.3, sugar:2.3, purine:6, satfat:20.3},
  'パルメザンチーズ':   {kcal:475, protein:44.0,fat:30.8,fiber:0,   vitC:0,   vitD:0.2, zinc:5.3, dha:0,    vitA:240,  betaC:0,    vitB1:0.05,vitB2:0.40,vitE:0.6, vitK:2,   ca:1300,k:92,  p:870, fe:0.4, salt:3.8, toushitsu:1.9, sugar:0, purine:12.9, satfat:18.2},
  // 調味料追加
  'サラダ油':           {kcal:921, protein:0,   fat:100, fiber:0,   vitC:0,   vitD:0,   zinc:0,   dha:0,    vitA:0,    betaC:0,    vitB1:0,   vitB2:0,   vitE:9.2, vitK:160, ca:0,   k:0,   p:0,   fe:0, salt:0, toushitsu:0, sugar:0, purine:0, satfat:10.6},
  '砂糖（上白糖）':     {kcal:384, protein:0,   fat:0,   fiber:0,   vitC:0,   vitD:0,   zinc:0,   dha:0,    vitA:0,    betaC:0,    vitB1:0,   vitB2:0,   vitE:0,   vitK:0,   ca:1,   k:2,   p:0,   fe:0.01, salt:0, toushitsu:99.3, sugar:99.3, purine:0, satfat:0},
  '酢':                 {kcal:25,  protein:0.1, fat:0,   fiber:0,   vitC:0,   vitD:0,   zinc:0,   dha:0,    vitA:0,    betaC:0,    vitB1:0,   vitB2:0,   vitE:0,   vitK:0,   ca:5,   k:47,  p:9,   fe:0.1, salt:0, toushitsu:2.4, sugar:0, purine:1, satfat:0},
  'オイスターソース':   {kcal:107, protein:7.7, fat:0.3, fiber:0,   vitC:0,   vitD:0,   zinc:1.5, dha:0,    vitA:0,    betaC:0,    vitB1:0.03,vitB2:0.13,vitE:0,   vitK:0,   ca:37,  k:160, p:87,  fe:3.5, salt:11.4, toushitsu:18.1, sugar:15.0, purine:30, sugarEst:1, satfat:0},
  'ウスターソース':     {kcal:117, protein:1.0, fat:0.1, fiber:0.5, vitC:0,   vitD:0,   zinc:0.1, dha:0,    vitA:1,    betaC:8,    vitB1:0.04,vitB2:0.02,vitE:0,   vitK:0,   ca:42,  k:350, p:31,  fe:1.2, salt:8.5, toushitsu:26.6, sugar:10.0, purine:10, sugarEst:1, satfat:0},
  '豆板醤':             {kcal:49,  protein:2.1, fat:2.3, fiber:2.0, vitC:0,   vitD:0,   zinc:0.2, dha:0,    vitA:14,   betaC:170,  vitB1:0.04,vitB2:0.06,vitE:0.4, vitK:0,   ca:25,  k:210, p:35,  fe:0.7, salt:17.8, toushitsu:5.9, sugar:3.0, purine:15, sugarEst:1, satfat:0.8},
  // 穀類追加
  '全粒粉パン':         {kcal:253, protein:9.1, fat:2.5, fiber:4.5, vitC:0,   vitD:0,   zinc:1.6, dha:0,    vitA:0,    betaC:0,    vitB1:0.27,vitB2:0.07,vitE:0.7, vitK:2,   ca:29,  k:210, p:160, fe:1.7, salt:1.2, toushitsu:41.0, sugar:4.0, purine:10, sugarEst:1, satfat:1.0},
  '春雨（乾）':         {kcal:344, protein:0.2, fat:0.1, fiber:1.0, vitC:0,   vitD:0,   zinc:0.1, dha:0,    vitA:0,    betaC:0,    vitB1:0,   vitB2:0,   vitE:0,   vitK:0,   ca:20,  k:12,  p:8,   fe:0.6, salt:0, toushitsu:84.4, sugar:0, purine:0.6, satfat:0},
  'クロワッサン':       {kcal:448, protein:7.9, fat:26.8,fiber:1.8, vitC:0,   vitD:0.1, zinc:0.7, dha:0,    vitA:38,   betaC:0,    vitB1:0.09,vitB2:0.07,vitE:0.7, vitK:14,  ca:47,  k:110, p:81,  fe:0.7, salt:1.2, toushitsu:49.7, sugar:6.0, purine:5, sugarEst:1, satfat:12.2},
  // 加工食品追加
  'コーン（缶詰）':     {kcal:77,  protein:2.3, fat:0.5, fiber:3.3, vitC:8,   vitD:0,   zinc:0.4, dha:0,    vitA:2,    betaC:22,   vitB1:0.03,vitB2:0.02,vitE:0.5, vitK:0,   ca:2,   k:150, p:55,  fe:0.3, salt:0.5, toushitsu:14.5, sugar:5.0, purine:12, sugarEst:1, satfat:0.1},
  'トマト缶（ホール）': {kcal:20,  protein:0.9, fat:0.2, fiber:1.3, vitC:15,  vitD:0,   zinc:0.2, dha:0,    vitA:22,   betaC:260,  vitB1:0.07,vitB2:0.04,vitE:0.7, vitK:6,   ca:9,   k:260, p:27,  fe:0.4, salt:0, toushitsu:2.7, sugar:2.7, purine:6.5, satfat:0},
  // 肉類（皮なし追加）八訂増補2023
  '鶏胸肉（皮なし）':         {kcal:105, protein:23.3,fat:1.9, fiber:0,   vitC:3,   vitD:0.1, zinc:0.7, dha:0.01, vitA:9,    betaC:0,    vitB1:0.10,vitB2:0.11,vitE:0.3, vitK:16,  ca:4,   k:370, p:220, fe:0.3, salt:0.1, toushitsu:0.1, sugar:0, purine:141.2, satfat:0.4},
  // ブランド食品（公式記載値優先 / 記載なし項目は八訂一般値で補完 / 100g換算）
  // 明治ブルガリアヨーグルト LB81プレーン脂肪0: 公式kcal/protein/fat/Ca + 低脂肪ヨーグルト一般値補完
  'ブルガリアヨーグルト脂肪0':    {kcal:41,  protein:4.1, fat:0,   fiber:0,   vitC:1,   vitD:0,   zinc:0.4, dha:0,    vitA:3,    betaC:0,    vitB1:0.04,vitB2:0.14,vitE:0.1, vitK:1,   ca:125, k:170, p:100, fe:0.1, salt:0.14, toushitsu:5.7, sugar:5.2, purine:5.2, sugarEst:1, satfat:0},
  // タカノフーズ おかめ仕立てミニ3（西）: 公式45gを100g換算 / ビタミン等は八訂納豆一般値補完
  'おかめ仕立てミニ3（西）':      {kcal:184, protein:15.6,fat:9.6, fiber:6.9, vitC:0,   vitD:0,   zinc:1.9, dha:0,    vitA:0,    betaC:0,    vitB1:0.07,vitB2:0.56,vitE:0.8, vitK:600, ca:90,  k:660, p:190, fe:3.3, salt:0, toushitsu:5.2, sugar:0, purine:113.9, satfat:1.5},
  // トップバリュ かつお水煮缶: 公式70gを100g換算 / ビタミン等は八訂かつお水煮缶一般値補完
  'トップバリュかつお水煮缶':     {kcal:71,  protein:16.7,fat:0.6, fiber:0,   vitC:0,   vitD:3.0, zinc:0.7, dha:0.08, vitA:4,    betaC:0,    vitB1:0.08,vitB2:0.11,vitE:0.6, vitK:0,   ca:6,   k:240, p:160, fe:1.4, salt:1.1, toushitsu:0.1, sugar:0, purine:211, satfat:0.2},
  // トップバリュ まぐろ水煮缶: 公式70gを100g換算 / ビタミン等は八訂まぐろ水煮缶一般値補完
  'トップバリュまぐろ水煮缶':     {kcal:76,  protein:18.4,fat:0.1, fiber:0.3, vitC:0,   vitD:4.0, zinc:0.5, dha:0.16, vitA:6,    betaC:0,    vitB1:0.04,vitB2:0.08,vitE:1.0, vitK:9,   ca:4,   k:230, p:180, fe:0.5, salt:0.9, toushitsu:0, sugar:0, purine:116.9, satfat:0.1},
  // キョクヨー いわし蒲焼缶: 公式60g（液汁除く）を100g換算 / ビタミン等は八訂いわし味付け缶一般値補完
  'キョクヨーいわし蒲焼缶':       {kcal:185, protein:20.2,fat:8.3, fiber:0,   vitC:0,   vitD:15.0,zinc:1.7, dha:0.88, vitA:13,   betaC:0,    vitB1:0.05,vitB2:0.32,vitE:1.4, vitK:0,   ca:250, k:250, p:280, fe:2.1, salt:1.5, toushitsu:11.0, sugar:6.0, purine:210, sugarEst:1, satfat:2.0},
  // サプリメント
  'ULBO Platinum':               {kcal:0,   protein:0, fat:0,   fiber:0, vitC:0,   vitD:0,   zinc:14.0,dha:0,    vitA:0,    betaC:0, vitB1:0,   vitB2:0,   vitE:0,  vitK:0,  ca:0,  k:0,  p:0,  fe:0, salt:0, toushitsu:0, sugar:0, purine:0, satfat:0},
  // DHC ビタミンBミックス: 2粒=1日分 → 1粒あたりで登録（朝夜で合計2粒=1日分になる）
  'DHC ビタミンBミックス':       {kcal:0.8, protein:0, fat:0,   fiber:0, vitC:0,   vitD:0,   zinc:0,   dha:0,    vitA:0,    betaC:0, vitB1:20,  vitB2:15,  vitE:0,  vitK:0,  ca:0,  k:0,  p:0,  fe:0, salt:0, toushitsu:0, sugar:0, purine:0, satfat:0},
  // DHC ビタミンCハードカプセル: 2粒=1日分(C1000mg) → 1粒あたり C500mg
  'DHC ビタミンCハードカプセル': {kcal:2.25,protein:0, fat:0,   fiber:0, vitC:500, vitD:0,   zinc:0,   dha:0,    vitA:0,    betaC:0, vitB1:0,   vitB2:1.0, vitE:0,  vitK:0,  ca:0,  k:0,  p:0,  fe:0, salt:0, toushitsu:0, sugar:0, purine:0, satfat:0},
};

const NUT_KEYS=['kcal','protein','fat','satfat','fiber','vitC','vitD','zinc','dha','vitA','betaC','vitB1','vitB2','vitE','vitK','ca','fe','k','p','salt','toushitsu','sugar','purine'];
const NUT_ZERO=()=>Object.fromEntries(NUT_KEYS.map(k=>[k,0]));

function getFoodDB(){
  const custom=JSON.parse(localStorage.getItem('customFoodDB')||'{}');
  return Object.assign({},BUILTIN_FOOD_DB,custom);
}
function getCustomFoodDB(){return JSON.parse(localStorage.getItem('customFoodDB')||'{}');}
function saveCustomFoodDB(db){localStorage.setItem('customFoodDB',JSON.stringify(db));}

function calcNutrientFromItem(item){
  const db=getFoodDB();
  const key=item.foodKey||item.name;
  const row=db[key];
  if(!row) return {...NUT_ZERO(),protein:item.protein||0};
  const f=item.isSuppl?1:(item.amount||100)/100;
  const r={};
  NUT_KEYS.forEach(k=>{r[k]=+((row[k]||0)*f).toFixed(3);});
  return r;
}

function aggregateNutrients(dateKey){
  const s=getStateForDate(dateKey);
  const totals=NUT_ZERO();
  Object.values(master.daily).flat().forEach(function(item){
    if(s.daily[item.id]){
      var n=calcNutrientFromItem(getEffectiveItem(item,dateKey));
      NUT_KEYS.forEach(function(k){totals[k]=+(totals[k]+(n[k]||0)).toFixed(3);});
    }
  });
  (s.manual||[]).forEach(function(m){
    if(m.nuts)NUT_KEYS.forEach(function(k){totals[k]=+(totals[k]+(m.nuts[k]||0)).toFixed(3);});
  });
  return totals;
}

let _targetsCache=null,_targetsCacheKey='';
function getCachedTargets(p){
  const k=JSON.stringify(p);
  if(k!==_targetsCacheKey){_targetsCache=calcTargets(p);_targetsCacheKey=k;}
  return _targetsCache;
}

// ===================== TARGETS（厚労省2025年版・目的別調整対応）=====================
function calcTargets(p){
  const m=p.sex==='male';
  const bmr=m?13.397*p.weight+4.799*p.height-5.677*p.age+88.362
              :9.247*p.weight+3.098*p.height-4.330*p.age+447.593;
  const af={sedentary:1.2,light:1.375,moderate:1.55,active:1.725,vactive:1.9};
  let tdee=Math.round(bmr*(af[p.activity]||1.55));
  
  // メイン目的による基準値調整
  const goalMain=p.goalMain||'maintain';
  const mainCfg=GOAL_MAIN_CONFIG[goalMain]||GOAL_MAIN_CONFIG.maintain;
  const adjustedTdee=Math.round(tdee*mainCfg.kcalMul);
  const proteinTarget=Math.round(p.weight*mainCfg.proteinPerKg);
  
  // 基準値（日本人の食事摂取基準2025年版・18-29歳成人）
  const base={
    kcal:   {t:adjustedTdee,            ul:Math.round(adjustedTdee*1.5),unit:'kcal', label:'カロリー',    color:'#E07A2F', pri:0,  useDisplayAsUL:true},
    protein:{t:proteinTarget,           ul:Math.round(p.weight*3.1),unit:'g', label:'タンパク質',  color:'#2D6A4F', pri:1,  ul_note:'過剰摂取基準なし（目安）'},
    fat:    {t:Math.round(adjustedTdee*0.25/9), ul:Math.round(adjustedTdee*0.30/9),unit:'g', label:'脂質',color:'#F59E0B', pri:2,  ul_note:'目標量の上限（20-30%E）'},
    satfat: {t:Math.round(adjustedTdee*0.07/9), ul:Math.round(adjustedTdee*0.07/9), unit:'g', label:'飽和脂肪酸', color:'#B45309', pri:2.3, limit:true, ul_note:'2025年版目標量 7%エネルギー比以下'},
    salt:   {t:m?7.5:6.5,               ul:m?7.5:6.5,             unit:'g',    label:'食塩相当量',  color:'#0891B2', pri:2.5, limit:true, ul_note:'2025年版目標量（男7.5/女6.5g未満）'},
    toushitsu:{t:Math.max(0,Math.round((adjustedTdee-proteinTarget*4-Math.round(adjustedTdee*0.25/9)*9)/4)), ul:99999, unit:'g', label:'糖質',color:'#8B5CF6', pri:2.6, info:true, ul_note:'参考値（残りエネルギーを炭水化物で満たした場合の目安）'},
    sugar:  {t:Math.round(adjustedTdee*0.10/4), ul:Math.round(adjustedTdee*0.10/4), unit:'g', label:'糖類',color:'#EC4899', pri:11.5, limit:true, ul_note:'WHO目標 遊離糖<10%E（理想<5%E）'},
    purine: {t:400,                      ul:400,                   unit:'mg',   label:'プリン体',    color:'#DC2626', pri:11.7, limit:true, ul_note:'高尿酸血症・痛風ガイドライン 400mg/日以下'},
    fiber:  {t:m?20:18,                 ul:99999,                 unit:'g',    label:'食物繊維',    color:'#8B5E3C', pri:3},
    dha:    {t:m?2.2:1.7,               ul:99999,                 unit:'g',    label:'n-3脂肪酸',   color:'#C0392B', pri:4},
    vitA:   {t:m?850:650,               ul:2700,                  unit:'μgRAE',label:'ビタミンA',   color:'#D97706', pri:5},
    betaC:  {t:m?5400:5100,             ul:99999,                 unit:'μg',   label:'β-カロテン',  color:'#FBBF24', pri:6},
    vitC:   {t:100,                     ul:99999,                 unit:'mg',   label:'ビタミンC',   color:'#2196A6', pri:7},
    vitD:   {t:9.0,                     ul:100,                   unit:'μg',   label:'ビタミンD',   color:'#F4A261', pri:8},
    vitE:   {t:m?6.5:5.0,               ul:m?800:650,             unit:'mg',   label:'ビタミンE',   color:'#34D399', pri:9},
    vitK:   {t:150,                     ul:99999,                 unit:'μg',   label:'ビタミンK',   color:'#6EE7B7', pri:10},
    vitB1:  {t:m?1.1:0.8,               ul:99999,                 unit:'mg',   label:'ビタミンB1',  color:'#A78BFA', pri:11},
    vitB2:  {t:m?1.6:1.2,               ul:99999,                 unit:'mg',   label:'ビタミンB2',  color:'#C4B5FD', pri:12},
    zinc:   {t:m?9:7.5,                 ul:m?40:35,               unit:'mg',   label:'亜鉛',        color:'#5C4B8A', pri:13},
    ca:     {t:m?800:650,               ul:2500,                  unit:'mg',   label:'カルシウム',   color:'#0EA5E9', pri:14},
    fe:     {t:m?7.0:10.5,              ul:99999,                 unit:'mg',   label:'鉄分',        color:'#DC2626', pri:15},
    k:      {t:m?3000:2600,             ul:99999,                 unit:'mg',   label:'カリウム',     color:'#7C3AED', pri:16},
    p:      {t:m?1000:800,              ul:3000,                  unit:'mg',   label:'リン',         color:'#64748B', pri:17},
  };
  
  // サブ目的による調整（最大値採用）
  const goalSubs=p.goalSubs||[];
  const multMap={};   // 栄養素 → 最大倍率
  const reasonMap={}; // 栄養素 → 適用された目的のラベルリスト
  goalSubs.forEach(function(subKey){
    const cfg=GOAL_SUB_CONFIG[subKey];
    if(!cfg)return;
    Object.entries(cfg.mult).forEach(function(e){
      const nutKey=e[0], mul=e[1];
      // 最大値採用
      if(!multMap[nutKey]||mul>multMap[nutKey]){
        multMap[nutKey]=mul;
      }
      if(!reasonMap[nutKey])reasonMap[nutKey]=[];
      reasonMap[nutKey].push(cfg.label);
    });
  });
  
  // 倍率を適用＋ULチェック
  Object.entries(multMap).forEach(function(e){
    const nutKey=e[0], mul=e[1];
    if(!base[nutKey])return;
    const newT=Math.round(base[nutKey].t*mul*10)/10;
    // UL の90%でキャップ（安全マージン）
    const ul=base[nutKey].ul;
    base[nutKey].t = (ul<99999&&newT>ul*0.9) ? Math.round(ul*0.9*10)/10 : newT;
    base[nutKey].goalAdjusted=true;
    base[nutKey].goalReason=reasonMap[nutKey];
    base[nutKey].goalMul=mul;
  });
  
  // メタ情報
  base._goalMain=goalMain;
  base._goalSubs=goalSubs;

  // 塩分（減塩）調整：目的による"引き締め"のみ（最も厳しい=最小値を採用）
  // 根拠: 健康改善＝WHO/2025年版重症化予防6.0g、内臓脂肪＝メタボは塩感受性が高い(Lancet 2009)
  // ※運動・増量目的での塩分増量は科学的根拠がないため設定しない
  var saltMin=base.salt.t;
  var saltReasons=[];
  if(mainCfg.saltMax && mainCfg.saltMax<saltMin){saltMin=mainCfg.saltMax;saltReasons.push(mainCfg.label);}
  goalSubs.forEach(function(sk){
    var c=GOAL_SUB_CONFIG[sk];
    if(c&&c.saltMax&&c.saltMax<saltMin){saltMin=c.saltMax;}
    if(c&&c.saltMax&&c.saltMax<=base.salt.t){if(saltReasons.indexOf(c.label)<0)saltReasons.push(c.label);}
  });
  if(saltMin<base.salt.t){
    base.salt.t=saltMin;
    base.salt.ul=saltMin;
    base.salt.goalAdjusted=true;
    base.salt.goalReason=saltReasons;
    base.salt.saltReduced=true;
  }

  return base;
}

// ===================== DEFAULTS =====================
const DEFAULT_DAILY={
  morning:[
    {id:'m1', name:'ヨーグルト',   foodKey:'ヨーグルト',   amount:100,detail:'ブルガリア脂肪0 100g',protein:4.3},
    {id:'m1b',name:'ブルーベリー', foodKey:'ブルーベリー', amount:40, detail:'冷凍 40g',protein:0.2},
    {id:'m2', name:'ミックスナッツ',foodKey:'ミックスナッツ',amount:25,detail:'素焼き 25g',protein:3.9},
    {id:'m3', name:'牛乳',         foodKey:'牛乳',         amount:150,detail:'150ml',protein:5.0},
  ],
  noon:[
    {id:'n1',name:'枝豆',   foodKey:'枝豆',   amount:100,detail:'冷凍 100g',protein:11.5},
    {id:'n2',name:'鶏胸肉', foodKey:'鶏胸肉', amount:150,detail:'150g',protein:35.0},
    {id:'n3',name:'白米',   foodKey:'ご飯',   amount:150,detail:'炊いたもの 150g',protein:3.8},
  ],
  evening:[
    {id:'e1', name:'卵①',        foodKey:'卵',        amount:60, detail:'1個（約60g）',protein:7.4},
    {id:'e1b',name:'卵②',        foodKey:'卵',        amount:60, detail:'1個（約60g）',protein:7.4},
    {id:'e2', name:'鶏もも肉',   foodKey:'鶏もも肉',   amount:150,detail:'150g',protein:26.0},
    {id:'e3', name:'豚こま',     foodKey:'豚こま肉',   amount:150,detail:'150g',protein:27.8},
    {id:'e3b',name:'豆腐',       foodKey:'豆腐',       amount:150,detail:'150g',protein:9.9},
    {id:'e4', name:'ほうれん草', foodKey:'ほうれん草', amount:100,detail:'冷凍 100g',protein:2.2},
    {id:'e4b',name:'小松菜',     foodKey:'小松菜',     amount:100,detail:'冷凍 100g',protein:1.5},
    {id:'e5', name:'ブロッコリー',foodKey:'ブロッコリー',amount:50, detail:'冷凍 50g',protein:2.2},
    {id:'e6', name:'納豆',       foodKey:'納豆',       amount:45, detail:'1パック（45g）',protein:7.4},
    {id:'e7', name:'味噌汁',     foodKey:'味噌',       amount:18, detail:'味噌 大さじ1',protein:2.3},
  ],
  suppl:[
    {id:'s1', name:'ULBO Platinum',         foodKey:'ULBO Platinum',              isSuppl:true,amount:1,detail:'6粒/日（亜鉛14mg・シトルリン800mg・アルギニン500mg）',protein:0},
    {id:'s2a',name:'DHC Bミックス（朝）',   foodKey:'DHC ビタミンBミックス',       isSuppl:true,amount:1,detail:'朝1錠（B1 20mg・B2 15mg・他）',protein:0},
    {id:'s2b',name:'DHC Bミックス（夜）',   foodKey:'DHC ビタミンBミックス',       isSuppl:true,amount:1,detail:'夜1錠（B1 20mg・B2 15mg・他）',protein:0},
    {id:'s3a',name:'DHC ビタミンC（朝）',   foodKey:'DHC ビタミンCハードカプセル', isSuppl:true,amount:1,detail:'朝1粒（ビタミンC 500mg）',protein:0},
    {id:'s3b',name:'DHC ビタミンC（夜）',   foodKey:'DHC ビタミンCハードカプセル', isSuppl:true,amount:1,detail:'夜1粒（ビタミンC 500mg）',protein:0},
  ],
};
const DEFAULT_WEEKLY=[
  {id:'w2',name:'鮭',      foodKey:'鮭',      amount:80, detail:'1切れ(80g)',        target:2,unit:'回'},
  {id:'w3',name:'鯖缶',    foodKey:'鯖缶',    amount:190,detail:'1缶(190g)',         target:2,unit:'缶'},
  {id:'w4',name:'人参',    foodKey:'人参',    amount:150,detail:'1本(150g)',         target:3,unit:'本'},
  {id:'w5',name:'鶏レバー',foodKey:'鶏レバー',amount:100,detail:'100g（月2回）',     target:2,unit:'回/月'},
];
const DEFAULT_PROFILE={sex:'male',age:27,weight:68,height:174,activity:'moderate',goalMain:'maintain',goalSubs:[]};

// 目的別の栄養素調整係数（科学的根拠あり、最大値採用で重複処理）
// メイン目的：カロリー・タンパク質の基準を直接変更
// 参考：ISSN Position Stand 2017, ACSM, 厚労省食事摂取基準2025年版
const GOAL_MAIN_CONFIG={
  cut:      {label:'体重減少',     emoji:'🏃', kcalMul:0.85, proteinPerKg:2.3, note:'カロリー-15%、タンパク質増（リーンマス維持）'},
  fatloss:  {label:'体脂肪を減らす', emoji:'🔥', kcalMul:0.85, proteinPerKg:2.3, note:'カロリー-15%、タンパク質最大（除脂肪量を守り脂肪を落とす）'},
  bulk:     {label:'筋肉を増やす', emoji:'💪', kcalMul:1.10, proteinPerKg:1.8, note:'カロリー+10%、タンパク質増（筋肥大）'},
  maintain: {label:'体重維持',     emoji:'⚖️', kcalMul:1.00, proteinPerKg:1.4, note:'維持カロリー、活動レベルに応じた標準量'},
  health:   {label:'健康改善',     emoji:'🩺', kcalMul:1.00, proteinPerKg:1.2, saltMax:6.0, note:'維持カロリー、ACSM一般推奨量。減塩目標6.0g（重症化予防）'}
};

// サブ目的：特定栄養素を増量（栄養素キー → 倍率）
// 同じ栄養素が複数目的で増量される場合は最大値を採用
const GOAL_SUB_CONFIG={
  sexual:    {label:'男性機能向上', emoji:'💚', mult:{zinc:1.15, vitD:1.20, dha:1.20}},
  skin:      {label:'美肌',         emoji:'✨', mult:{vitC:1.30, vitE:1.20, zinc:1.15, vitA:1.15}},
  energy:    {label:'疲労回復',     emoji:'⚡', mult:{vitB1:1.20, vitB2:1.20, fe:1.15}},
  immune:    {label:'免疫力強化',   emoji:'🛡', mult:{vitC:1.30, vitD:1.30, zinc:1.15, vitA:1.15}},
  gut:       {label:'腸内環境改善', emoji:'🌿', mult:{fiber:1.20, ca:1.10}},
  visceral:  {label:'内臓脂肪対策', emoji:'📉', mult:{fiber:1.30, dha:1.20}, saltMax:6.0}
};

// ===================== STORAGE =====================
function loadMaster(){
  try{
    const s=localStorage.getItem('nm_v10');
    if(s){
      const parsed=JSON.parse(s);
      // データ整合性チェック：daily/weekly/profileが揃っているか
      if(parsed&&parsed.daily&&parsed.weekly&&parsed.profile
        &&parsed.daily.morning&&parsed.daily.noon&&parsed.daily.evening&&parsed.daily.suppl){
        return parsed;
      }
    }
  }catch(e){
    console.error('loadMaster parse error',e);
  }
  // 失敗 or 不完全 → デフォルトを返す
  return {
    daily:JSON.parse(JSON.stringify(DEFAULT_DAILY)),
    weekly:JSON.parse(JSON.stringify(DEFAULT_WEEKLY)),
    profile:JSON.parse(JSON.stringify(DEFAULT_PROFILE))
  };
}
function saveMaster(){
  try{localStorage.setItem('nm_v10',JSON.stringify(master));}
  catch(e){console.error('saveMaster error',e);}
}

// state は日付別に保存: stateDB[dateKey] = {daily:{id:bool}, manual:[...]}
function loadStateDB(){
  try{return JSON.parse(localStorage.getItem('nsdb_v10')||'{}');}
  catch(e){return {};}
}
function saveStateDB(){
  try{localStorage.setItem('nsdb_v10',JSON.stringify(stateDB));}
  catch(e){console.error('saveStateDB error',e);}
}

function getStateForDate(dateKey){
  if(!stateDB[dateKey])stateDB[dateKey]={daily:{},manual:[]};
  if(!stateDB[dateKey].manual)stateDB[dateKey].manual=[];
  if(!stateDB[dateKey].daily)stateDB[dateKey].daily={};
  return stateDB[dateKey];
}

// 週間食材の自動加算エントリーで最後に追加されたものを探す
function findLastWeeklyAutoIdx(s,weeklyId){
  if(!s.manual)return -1;
  for(let i=s.manual.length-1;i>=0;i--){
    if(s.manual[i]._weeklyAuto&&s.manual[i]._weeklyId===weeklyId)return i;
  }
  return -1;
}

function loadHistory(){
  try{return JSON.parse(localStorage.getItem('nh_v10')||'{}');}
  catch(e){return {};}
}
function saveHistory(){
  try{localStorage.setItem('nh_v10',JSON.stringify(hist));}
  catch(e){console.error('saveHistory error',e);}
}

// ===================== WAIST (ウエスト管理) =====================
function loadWaist(){
  try{return JSON.parse(localStorage.getItem('nw_v10')||'{}');}
  catch(e){return {};}
}
function saveWaistData(){
  try{localStorage.setItem('nw_v10',JSON.stringify(waistData));}
  catch(e){console.error('saveWaist error',e);}
}

let master=loadMaster(), stateDB=loadStateDB(), hist=loadHistory();
let waistData=loadWaist();
let _nutrientShowAll=false, _calY=new Date().getFullYear(), _calM=new Date().getMonth();
let _selDay=null, _histPeriod='week', _graphNut='kcal';
let _masterSearch='';

// 表示中の日付 (毎日タブ)
let _viewDate=fmtDate(new Date());

function fmtDate(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function todayKey(){return fmtDate(new Date());}
function isToday(dateKey){return dateKey===todayKey();}
function parseDateKey(k){const p=k.split('-');return new Date(+p[0],+p[1]-1,+p[2]);}
function dispDate(k){const d=parseDateKey(k);const days=['日','月','火','水','木','金','土'];return (d.getMonth()+1)+'月'+d.getDate()+'日（'+days[d.getDay()]+'）';}

// ===================== SNAPSHOT =====================
function saveSnapshot(dateKey){
  const s=getStateForDate(dateKey);
  const allItems=Object.values(master.daily).flat();
  const total=allItems.length;
  const checked=allItems.filter(i=>!!s.daily[i.id]);
  const pct=total>0?Math.round(checked.length/total*100):0;
  const nuts=NUT_ZERO();
  checked.forEach(item=>{const n=calcNutrientFromItem(getEffectiveItem(item,dateKey));NUT_KEYS.forEach(k=>{nuts[k]=+(nuts[k]+(n[k]||0)).toFixed(3);});});
  (s.manual||[]).forEach(m=>{if(m.nuts)NUT_KEYS.forEach(k=>{nuts[k]=+(nuts[k]+(m.nuts[k]||0)).toFixed(3);});});
  // 食材の名前・量を当日時点でスナップショット保存（デフォルト変更後も過去表示が変わらないように）
  const itemSnap={};
  allItems.forEach(function(item){
    const effItem=getEffectiveItem(item,dateKey);
    itemSnap[item.id]={name:effItem.name,detail:effItem.detail,amount:effItem.amount,foodKey:effItem.foodKey};
  });
  hist[dateKey]={pct,nutrients:nuts,checkedCount:checked.length,totalCount:total,itemSnap:itemSnap};
  saveHistory();
}

// ===================== RENDER DAILY =====================
function renderDailyDateBar(){
  const d=parseDateKey(_viewDate);
  const days=['日','月','火','水','木','金','土'];
  document.getElementById('dailyDateVal').textContent=
    d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日（'+days[d.getDay()]+'）';
  const note=document.getElementById('daily-past-note');
  if(!isToday(_viewDate)){
    note.innerHTML='<div style="background:var(--accent2);color:#fff;font-size:11px;font-weight:600;padding:7px 12px;border-radius:8px;margin-bottom:10px;text-align:center">📅 過去の記録を編集中</div>';
  } else {note.innerHTML='';}
  // next ボタン：未来は無効
  const nextBtn=document.querySelector('[data-action="date-next"]');
  if(nextBtn)nextBtn.style.opacity=isToday(_viewDate)?'0.3':'1';
}

function renderDaily(){
  renderDailyDateBar();
  const s=getStateForDate(_viewDate);
  ['morning','noon','evening','suppl'].forEach(sec=>{
    // master.daily[sec] が存在しない場合は空配列にフォールバック
    if(!master.daily[sec])master.daily[sec]=[];
    const items=master.daily[sec];
    const listEl=document.getElementById('list-'+sec);
    const cEl=document.getElementById('count-'+sec);
    if(!listEl||!cEl)return;
    let checked=0;
    listEl.innerHTML=items.map(item=>{
      const effItem=getEffectiveItem?getEffectiveItem(item,_viewDate):item;
      const isChecked=!!s.daily[item.id];
      if(isChecked)checked++;
      const n=calcNutrientFromItem(effItem);
      const kcalLabel=n.kcal>0?n.kcal.toFixed(0)+'kcal':'';
      const hasOverride=s.itemOverrides&&s.itemOverrides[item.id];
      return '<div class="food-item'+(isChecked?' checked':'')+'" data-sec="'+sec+'" data-id="'+item.id+'">'
        +'<div class="drag-handle" data-action="drag-handle"><span></span><span></span><span></span></div>'
        +'<div class="checkbox" data-action="toggle" data-id="'+item.id+'"><span class="checkmark">✓</span></div>'
        +'<div class="food-info" data-action="toggle" data-id="'+item.id+'">'
        +'<div class="food-name">'+effItem.name+(hasOverride?'<span class="override-badge">当日編集</span>':'')+'</div>'
        +'<div class="food-detail">'+effItem.detail+'</div>'
        +'</div>'
        +(kcalLabel?'<div class="food-kcal">'+kcalLabel+'</div>':'')
        +'<button class="edit-btn" data-action="edit-daily" data-sec="'+sec+'" data-id="'+item.id+'">✎</button>'
        +'</div>';
    }).join('');
    cEl.textContent=checked+'/'+items.length;
    // 一括チェックボタンの表示更新
    const bulkBtn=document.querySelector('[data-action="bulk-check"][data-sec="'+sec+'"]');
    if(bulkBtn){
      const allChk=items.length>0&&checked===items.length;
      bulkBtn.textContent=allChk?'全解除':'全チェック';
      if(allChk)bulkBtn.classList.add('all-checked');
      else bulkBtn.classList.remove('all-checked');
    }
  });
  renderManualList();
  updateProgress();
  renderNutrients();
  try{renderSynergyTipDaily();}catch(e){}
  // ドラッグ並び替えを再初期化（DOM再生成後）
  setTimeout(initDragSort, 0);
}

function renderManualList(){
  const s=getStateForDate(_viewDate);
  const items=s.manual||[];
  const listEl=document.getElementById('list-manual');
  const cEl=document.getElementById('count-manual');
  if(!items.length){listEl.style.display='none';cEl.textContent='';return;}
  listEl.style.display='block';
  const tLabel={morning:'朝・間食',noon:'昼食',evening:'夕食',snack:'間食'};
  const tClass={morning:'timing-morning',noon:'timing-noon',evening:'timing-evening',snack:'timing-snack'};
  const _targets=getCachedTargets(master.profile||DEFAULT_PROFILE);
  const _favs=loadFavorites()||[];
  listEl.innerHTML=items.map((m,i)=>{
    const tags=NUT_KEYS.filter(k=>m.nuts&&m.nuts[k]>0).slice(0,4).map(k=>{
      const t=_targets[k];
      return t?'<span class="manual-nut-tag">'+t.label+' '+(m.nuts[k])+t.unit+'</span>':'';
    }).join('');
    const isFav=_favs.some(f=>f.name===m.name);
    return '<div class="manual-item">'
      +'<span class="manual-timing-badge '+(tClass[m.timing]||'timing-snack')+'">'+(tLabel[m.timing]||m.timing)+'</span>'
      +'<div class="manual-info">'
      +'<div class="manual-name">'+m.name+'</div>'
      +(m.ingredients?'<div class="manual-detail">食材：'+m.ingredients+'</div>':'')
      +(m.memo?'<div class="manual-detail">'+m.memo+'</div>':'')
      +(tags?'<div class="manual-nuts">'+tags+'</div>':'')
      +'</div>'
      +'<button class="edit-btn" style="font-size:13px" data-action="toggle-fav-manual" data-idx="'+i+'" title="お気に入り">'+(isFav?'⭐':'☆')+'</button>'
      +'<button class="edit-btn" data-action="del-manual" data-idx="'+i+'">🗑</button>'
      +'</div>';
  }).join('');
  cEl.textContent=items.length+'件';
}

// 「どちらか1つでOK」のペア定義（id同士）
const EITHER_PAIRS=[
  ['e2','e3'],   // 鶏もも肉 or 豚こま
  ['e4','e4b'], // ほうれん草 or 小松菜
];

function updateProgress(){
  // 当日のみ進捗バーに反映
  const s=getStateForDate(todayKey());
  const all=Object.values(master.daily).flat();
  // ペアのIDセット作成
  const pairedIds=new Set();
  EITHER_PAIRS.forEach(p=>p.forEach(id=>pairedIds.add(id)));
  // ペア以外のアイテム数
  let total=all.filter(i=>!pairedIds.has(i.id)).length;
  let chk=all.filter(i=>!pairedIds.has(i.id)&&!!s.daily[i.id]).length;
  // ペアごとに「どちらかあれば1」として加算
  EITHER_PAIRS.forEach(pair=>{
    // ペアの食材が両方マスタに存在する場合のみカウント対象
    const exists=pair.every(id=>all.some(i=>i.id===id));
    if(!exists)return;
    total+=1;
    if(pair.some(id=>s.daily[id]))chk+=1;
  });
  document.getElementById('progressBar').style.width=(total>0?chk/total*100:0)+'%';
  document.getElementById('progressText').textContent=chk+' / '+total;
}

// 週キー: 月曜04:00基準で「その週の月曜の日付」を返す
function getCurrentWeekKey(){
  const n=new Date();
  // 04:00より前は前日扱い（深夜帯対策）
  if(n.getHours()<4)n.setDate(n.getDate()-1);
  // 月曜日に巻き戻し（getDayは日=0,月=1,...土=6）
  const dow=n.getDay();
  const diff=dow===0?-6:1-dow; // 月曜にする差分
  n.setDate(n.getDate()+diff);
  return fmtDate(n);
}

// ===================== RENDER WEEKLY =====================
function renderWeekly(){
  const list=document.getElementById('list-weekly');
  const cEl=document.getElementById('count-weekly');
  if(!list||!cEl)return;
  let done=0;
  const weekKey=getCurrentWeekKey();
  // 今週月〜日の日付キーを取得
  const weekStart=parseDateKey(weekKey);
  const weekDayKeys=[];
  for(let i=0;i<7;i++){const d=new Date(weekStart);d.setDate(weekStart.getDate()+i);weekDayKeys.push(fmtDate(d));}
  const dayLabels=['月','火','水','木','金','土','日'];
  list.innerHTML=master.weekly.map(item=>{
    const s=getStateForDate(weekKey);
    if(!s.weekly)s.weekly={};
    const cnt=s.weekly[item.id]||0;
    if(cnt>=item.target)done++;
    const isDone=cnt>=item.target,isOver=cnt>item.target;
    // 曜日ごとにmanual記録があるかチェック
    const dayDots=weekDayKeys.map((dk,i)=>{
      const ds=getStateForDate(dk);
      const has=(ds.manual||[]).some(m=>m._weeklyAuto&&m._weeklyId===item.id);
      return '<span class="'+(has?'wk-dot wk-dot-on':'wk-dot wk-dot-off')+'" title="'+dayLabels[i]+'曜"></span>';
    }).join('');
    return '<div class="weekly-item">'
      +'<div class="weekly-info">'
      +'<div class="weekly-name">'+item.name+'</div>'
      +'<div class="weekly-target">'+item.detail+' ／ 目標: '+item.target+item.unit+'</div>'
      +'<div class="weekly-day-dots">'+dayDots+'</div>'
      +'</div>'
      +'<div class="weekly-counter">'
      +'<button class="counter-btn counter-minus" data-action="weekly-dec" data-id="'+item.id+'">−</button>'
      +'<div class="counter-value'+(isDone?' counter-done':'')+(isOver?' counter-over':'')+'">'+cnt+'<span style="font-size:9px;color:var(--text3)">/'+(item.target)+'</span></div>'
      +'<button class="counter-btn counter-plus" data-action="weekly-inc" data-id="'+item.id+'">＋</button>'
      +'</div>'
      +'<button class="edit-btn" style="margin-left:5px" data-action="edit-weekly" data-id="'+item.id+'">✎</button>'
      +'</div>';
  }).join('');
  cEl.textContent=done+'/'+master.weekly.length+' 達成';
}

// ===================== RENDER NUTRIENTS =====================
function renderNutrients(){
  const p=master.profile;
  const aL={sedentary:'座位中心',light:'軽い運動',moderate:'適度な運動',active:'活発な運動',vactive:'非常に活発'};
  const bw=document.getElementById('profile-banner-wrap');
  bw.innerHTML=p&&p.weight?
    '<div class="profile-banner set" data-action="profile"><div class="profile-left"><div class="profile-label">プロフィール</div>'
    +'<div class="profile-val">'+(p.sex==='male'?'男性':'女性')+' '+p.age+'歳 ／ '+p.height+'cm '+p.weight+'kg ／ '+(aL[p.activity]||'')+'</div></div><div class="profile-edit">編集 ›</div></div>'
    :'<div class="profile-banner" data-action="profile"><div class="profile-left"><div class="profile-label">プロフィール未設定</div><div class="profile-unset">タップして設定 →</div></div></div>';

  const targets=calcTargets(p||DEFAULT_PROFILE);
  const totals=aggregateNutrients(_viewDate);

  // 目的バッジ表示
  var goalBadgeHTML='';
  if(targets._goalMain){
    var mainCfg=GOAL_MAIN_CONFIG[targets._goalMain];
    var subs=(targets._goalSubs||[]).map(function(s){
      var c=GOAL_SUB_CONFIG[s];
      return c?c.emoji+' '+c.label:'';
    }).filter(Boolean);
    if(mainCfg){
      goalBadgeHTML='<div class="goal-badge">'
        +'<div class="goal-badge-main">🎯 目的: <strong>'+mainCfg.emoji+' '+mainCfg.label+'</strong>'
        +(subs.length?' + '+subs.join(' + '):'')+'</div>'
        +'<div class="goal-badge-note">'+mainCfg.note+'</div>'
        +'</div>';
    }
  }

  // ③ 過剰摂取警告: 過去3日間で連続過剰摂取チェック（厚労省UL基準）
  var excessAlertHTML='';
  var warnKeys=[];
  Object.entries(targets).forEach(function(e){
    var key=e[0],t=e[1];
    if(key.startsWith('_'))return; // メタ情報スキップ
    if(!t.ul||t.ul>=99999)return;
    var days3=[],now=new Date();
    for(var i=1;i<=3;i++){var d=new Date(now);d.setDate(d.getDate()-i);days3.push(fmtDate(d));}
    var overCount=days3.filter(function(dk){var r=hist[dk];return r&&r.nutrients&&(r.nutrients[key]||0)>t.ul;}).length;
    if(overCount>=2){warnKeys.push(t.label);}
  });
  if(warnKeys.length){
    excessAlertHTML='<div class="excess-alert"><div class="excess-alert-title">⚠️ 過剰摂取が続いています</div>'
      +warnKeys.join('・')+'が複数日にわたって耐容上限量を超えています。食事内容を見直してください。</div>';
  }

  const sorted=Object.entries(targets).filter(function(e){return !e[0].startsWith('_');}).sort(function(a,b){
    if(_nutrientSort==='asc'){
      const aSpecial=(a[1].limit||a[1].info)?1:0;
      const bSpecial=(b[1].limit||b[1].info)?1:0;
      if(aSpecial!==bSpecial)return aSpecial-bSpecial;
      const aPct=a[1].t>0?(totals[a[0]]||0)/a[1].t:1;
      const bPct=b[1].t>0?(totals[b[0]]||0)/b[1].t:1;
      return aPct-bPct;
    }
    return a[1].pri-b[1].pri;
  });
  function makeCards(entries){
    return entries.map(function(e){
      var key=e[0],t=e[1];
      var cur=totals[key]||0;
      // 参考型（糖質など）：良し悪しの判定をせず数値と目安だけ中立表示
      if(t.info){
        var iPct=t.t>0?Math.min(100,(cur/t.t)*100):0;
        return '<div class="nutrient-card">'
          +'<div class="nutrient-name">'+t.label+'<span class="goal-adj-badge" title="参考値（目安）">参考</span></div>'
          +'<div class="nutrient-values"><span class="nutrient-current">'+cur.toFixed(1)+'</span>'
          +'<span class="nutrient-sep">/</span><span class="nutrient-target-val">'+t.t+'</span>'
          +'<span class="nutrient-unit">'+t.unit+'</span></div>'
          +'<div class="nutrient-bar-wrap"><div class="nutrient-bar" style="width:'+iPct+'%;background:'+t.color+'"></div></div>'
          +'<div class="nutrient-status">目安に対して '+(t.t>0?Math.round(cur/t.t*100):0)+'%</div></div>';
      }
      // 制限型（塩分など）：少ないほど良い＝上限に対する使用率を表示
      if(t.limit){
        var lim=t.t;
        var usePct=Math.min(100,(cur/lim)*100);
        var over=cur>lim;
        var near=!over&&cur>lim*0.8;
        var lcls=over?'nutrient-card over':near?'nutrient-card warn':'nutrient-card';
        var lcolor=over?'var(--danger)':near?'var(--accent2)':t.color;
        var lstatus=over?('🔴 超過 +'+(cur-lim).toFixed(1)+t.unit):(near?('🟡 上限の80%超え'):('✅ 範囲内（あと'+(lim-cur).toFixed(1)+t.unit+'）'));
        var lbadge=t.saltReduced
          ? '<span class="goal-adj-badge" title="'+((t.goalReason||[]).join('・'))+'のため減塩目標">↓'+t.t+'g</span>'
          : '<span class="goal-adj-badge" title="少ないほど良い指標">上限</span>';
        return '<div class="'+lcls+'">'
          +'<div class="nutrient-name">'+t.label+lbadge+'</div>'
          +'<div class="nutrient-values"><span class="nutrient-current">'+cur.toFixed(1)+'</span>'
          +'<span class="nutrient-sep">/</span><span class="nutrient-target-val">'+lim+'</span>'
          +'<span class="nutrient-unit">'+t.unit+'</span></div>'
          +'<div class="nutrient-bar-wrap"><div class="nutrient-bar" style="width:'+usePct+'%;background:'+lcolor+'"></div></div>'
          +'<div class="nutrient-status">'+lstatus+'</div></div>';
      }
      var cur=totals[key]||0;
      var pct=Math.min(100,(cur/t.t)*100);
      // ③ 過剰摂取判定: カロリーは表示目標値ベース、他は厚労省UL基準
      var ulVal=t.ul||99999;
      var isOver=ulVal<99999&&cur>ulVal;
      var isWarn=ulVal<99999&&!isOver&&cur>ulVal*0.8;
      var isDone=cur>=t.t;
      var cardCls=isOver?'nutrient-card over':isWarn?'nutrient-card warn':'nutrient-card';
      var overLabel=isOver?('🔴 上限超え(UL:'+ulVal+t.unit+')'): isWarn?('🟡 上限の80%超え(UL:'+ulVal+t.unit+')'):'';
      var status=overLabel||(isDone?'✅ 達成':'あと '+(t.t-cur).toFixed(1)+t.unit);
      var barColor=isOver?'var(--danger)':isWarn?'var(--accent2)':t.color;
      // 目的調整バッジ
      var adjBadge='';
      if(t.goalAdjusted){
        var pctUp=Math.round((t.goalMul-1)*100);
        var reason=(t.goalReason||[]).join('・');
        adjBadge='<span class="goal-adj-badge" title="'+reason+'のため">+'+pctUp+'%</span>';
      }
      return '<div class="'+cardCls+'">'
        +'<div class="nutrient-name">'+t.label+adjBadge+'</div>'
        +'<div class="nutrient-values"><span class="nutrient-current">'+cur.toFixed(key==='kcal'?0:1)+'</span>'
        +'<span class="nutrient-sep">/</span><span class="nutrient-target-val">'+t.t+'</span>'
        +'<span class="nutrient-unit">'+t.unit+'</span></div>'
        +'<div class="nutrient-bar-wrap"><div class="nutrient-bar" style="width:'+pct+'%;background:'+barColor+'"></div></div>'
        +'<div class="nutrient-status">'+status+'</div></div>';
    }).join('');
  }
  const primary=sorted.slice(0,10),secondary=sorted.slice(10);
  const ge=document.getElementById('nutrient-groups');
  // シナジーtip
  var synergyTip=getSynergyTip(totals,targets);
  var synergyHTML=synergyTip
    ?'<div style="background:linear-gradient(135deg,#F0FAF5,#E8F8EF);border:1.5px solid #52B788;border-radius:10px;padding:9px 12px;font-size:11px;color:#1B4332;line-height:1.6;margin-bottom:10px">'+synergyTip+'</div>'
    :'';
  // プリセットバー
  var presetHTML='<div id="preset-bar" style="display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;margin-bottom:10px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>';
  ge.innerHTML=presetHTML+goalBadgeHTML+synergyHTML+excessAlertHTML+'<div class="nutrient-grid">'+makeCards(primary)+'</div>'
    +'<div id="secondary-group" style="display:'+(_nutrientShowAll?'block':'none')+'">'
    +'<div class="nutrient-grid" style="margin-top:9px">'+makeCards(secondary)+'</div></div>';
  document.getElementById('show-more-wrap').innerHTML=
    '<button class="show-more-btn" data-action="toggle-more">'+(_nutrientShowAll?'▲ 折りたたむ':'▼ すべて表示（残り'+secondary.length+'項目）')+'</button>';
  renderPresetBar();
}

// ===================== HISTORY =====================
function getPeriodDays(){
  const now=new Date();
  if(_histPeriod==='week')return Array.from({length:7},(_,i)=>{const d=new Date(now);d.setDate(d.getDate()-(6-i));return fmtDate(d);});
  if(_histPeriod==='year')return Array.from({length:365},(_,i)=>{const d=new Date(now);d.setDate(d.getDate()-(364-i));return fmtDate(d);});
  return Object.keys(hist).sort();
}
function calcStreak(){
  let s=0;const d=new Date();
  for(let i=0;i<9999;i++){const k=fmtDate(d);if(hist[k]&&hist[k].pct>=50){s++;d.setDate(d.getDate()-1);}else break;}
  return s;
}
function renderHistStats(){
  const days=getPeriodDays();
  const recs=days.map(d=>hist[d]).filter(Boolean);
  if(!recs.length){document.getElementById('hist-stats').innerHTML='<div class="reset-info" style="margin-bottom:12px">記録がまだありません</div>';return;}
  const avg=Math.round(recs.reduce((s,r)=>s+r.pct,0)/recs.length);
  const max=Math.max(...recs.map(r=>r.pct));
  document.getElementById('hist-stats').innerHTML='<div class="stat-grid">'
    +'<div class="stat-card"><div class="stat-label">平均達成率</div><div class="stat-val">'+avg+'<span class="stat-unit">%</span></div></div>'
    +'<div class="stat-card"><div class="stat-label">最高達成率</div><div class="stat-val">'+max+'<span class="stat-unit">%</span></div></div>'
    +'<div class="stat-card"><div class="stat-label">連続日数</div><div class="stat-val">'+calcStreak()+'<span class="stat-unit">日</span></div></div>'
    +'</div>';
}

// ===================== SUMMARY =====================
function renderSummary(){
  const wrap=document.getElementById('hist-summary');
  if(!wrap)return;
  const targets=getCachedTargets(master.profile||DEFAULT_PROFILE);
  // 今日のサマリー（その日の実測値をライブ集計）
  const sToday=getStateForDate(todayKey());
  const todayTotals=aggregateNutrients(todayKey());
  const todayHasData=Object.values(sToday.daily||{}).some(Boolean)||(sToday.manual||[]).length>0;
  // 期間（今週/今年/通算）サマリー
  const days=getPeriodDays();
  const periodRecs=days.map(function(d){return hist[d];}).filter(Boolean);
  const periodLabel={week:'今週',year:'今年',all:'通算'}[_histPeriod]||'';
  var html='';
  if(todayHasData)html+=summaryCardHtml([{nutrients:todayTotals}],'今日',targets,false);
  if(periodRecs.length)html+=summaryCardHtml(periodRecs,periodLabel,targets,true);
  if(!html)html='<div class="summary-empty">まだ記録がありません</div>';
  wrap.innerHTML=html;
}
const PRAISE_POOLS={
  perfect:['🌟 完璧！プロアスリート顔負けの食生活です','✨ パーフェクト！理想を超えた栄養バランスです','🏆 殿堂入りレベルの食生活！この調子をキープ！','👑 栄養素マスター認定！すべて完璧に揃ってます','💎 ダイヤモンド級！栄養学的に完璧な食事です'],
  excellent:['🎉 素晴らしい！理想的な食事ができています','🌈 ほぼ完璧！この食生活なら体調も絶好調のはず','⭐ エクセレント！栄養バランスがほぼ完璧','🎯 ハイレベル！意識の高い食事ができてます','💪 文句なし！プロ並みの栄養管理ができています'],
  great:['👏 バランスが取れています！もう少しで完璧','🌿 健康的な食生活が定着してきました','✅ 栄養バランス良好！この調子で継続を','🏃 順調に成長中！惜しいところまできてます','🎶 良いリズム！栄養面でも整ってきています'],
  good:['🌱 順調！習慣化されてきていますね','💚 良い感じ！継続できていてすごい','🔆 着実に栄養バランスが整ってきています','🌸 一歩ずつ前進！この調子で続けましょう','🌻 まずまず！次の目標に向けて頑張りましょう'],
  starting:['🌿 少しずつ習慣化されてきています','☘️ スタートは順調！継続が力になります','🌱 良い兆し！焦らず続けていきましょう','🌷 はじめの一歩！小さな積み重ねが大事です'],
  initial:['🌱 一歩ずつ前進しましょう！','💫 まずは記録する習慣から。続けることが大切','🍀 始まったばかり！焦らず一歩ずつ']
};
function pickPraise(pool){return pool[Math.floor(Math.random()*pool.length)];}

function calcNutStats(recs,targets){
  const nutStats=[];
  Object.entries(targets).forEach(function(e){
    const key=e[0],t=e[1];
    if(key.startsWith('_'))return;
    var sum=0,count=0,overCount=0;
    recs.forEach(function(r){
      if(r.nutrients&&r.nutrients[key]!==undefined){
        sum+=r.nutrients[key];count++;
        if(t.ul<99999&&r.nutrients[key]>t.ul)overCount++;
      }
    });
    if(count===0)return;
    const avg=sum/count;
    const pct=t.t>0?(avg/t.t*100):0;
    nutStats.push({key,label:t.label,unit:t.unit,avg,pct,target:t.t,ul:t.ul,overCount,daysRecorded:count,limit:!!t.limit,info:!!t.info});
  });
  return nutStats;
}

function collectImprovementTips(worst3,overWarn,goodCount,avgPct,streakNum){
  const tips=[];
  const advices={
    'protein':'タンパク質：鶏胸肉・卵・納豆・豆腐を増やしてみては？',
    'fiber':'食物繊維：野菜・きのこ・海藻を一品追加してみては？',
    'vitC':'ビタミンC：ブロッコリー・パプリカ・キウイがおすすめ',
    'vitD':'ビタミンD：鮭・鯖缶・卵黄を週2回以上摂りましょう',
    'vitA':'ビタミンA：にんじん・ほうれん草・鶏レバーが効果的',
    'vitE':'ビタミンE：ナッツ類・アボカドがおすすめ',
    'vitK':'ビタミンK：納豆・小松菜・ほうれん草を意識的に',
    'vitB1':'ビタミンB1：豚肉・玄米・大豆製品が豊富',
    'vitB2':'ビタミンB2：レバー・卵・乳製品で補給を',
    'zinc':'亜鉛：牡蠣・牛肉・チーズ・ナッツがおすすめ',
    'ca':'カルシウム：乳製品・小魚・小松菜を増やしましょう',
    'fe':'鉄分：レバー・赤身肉・ほうれん草・大豆製品が効果的',
    'k':'カリウム：バナナ・芋類・葉物野菜を意識して',
    'p':'リン：肉・魚・乳製品から自然に摂取できます',
    'dha':'n-3脂肪酸：青魚（鯖・鮭・いわし）を週2-3回',
    'betaC':'β-カロテン：緑黄色野菜（にんじん・かぼちゃ）を増やして',
    'fat':'脂質：オリーブオイル・ナッツ・魚から良質なものを',
    'kcal':'カロリー：間食やプロテインで補給を'
  };
  worst3.forEach(function(n){
    if(n.pct>=80)return;
    if(advices[n.key])tips.push(advices[n.key]);
  });
  if(overWarn.length)tips.unshift('⚠️ '+overWarn.map(function(n){return n.label;}).join('・')+'が複数日上限超え。食事内容を見直しましょう。');
  const streakPraises={30:'🏅 30日連続達成！習慣として完全に身についてます',21:'🎖 3週間連続！科学的にも習慣化された証拠です',14:'🌟 2週間連続記録中！素晴らしい継続力',7:'⭐ 1週間連続！習慣化への第一歩です',3:'🔥 3日連続！継続のコツを掴んできました'};
  if(goodCount>=15)tips.unshift(pickPraise(PRAISE_POOLS.perfect));
  else if(goodCount>=12)tips.unshift(pickPraise(PRAISE_POOLS.excellent));
  else if(goodCount>=9)tips.unshift(pickPraise(PRAISE_POOLS.great));
  else if(goodCount>=6)tips.unshift(pickPraise(PRAISE_POOLS.good));
  else if(goodCount>=3)tips.unshift(pickPraise(PRAISE_POOLS.starting));
  else if(goodCount>=1)tips.unshift(pickPraise(PRAISE_POOLS.initial));
  if(streakNum>=30)tips.unshift(streakPraises[30]);
  else if(streakNum>=21)tips.unshift(streakPraises[21]);
  else if(streakNum>=14)tips.unshift(streakPraises[14]);
  else if(streakNum>=7)tips.unshift(streakPraises[7]);
  else if(streakNum>=3)tips.unshift(streakPraises[3]);
  if(overWarn.length===0&&avgPct>=80){
    const noOverPraises=['✨ 過剰摂取もなくバランス◎！理想的な食事','🎊 上限超過ゼロ＆高達成率！完璧な節度ある食生活','💚 適量を守れてます！長く続けられる食生活'];
    tips.unshift(pickPraise(noOverPraises));
  }
  return tips;
}

function summaryCardHtml(recs,periodLabel,targets,showStreak){
  const nutStats=calcNutStats(recs,targets);
  const achieveStats=nutStats.filter(function(n){return !n.limit&&!n.info;});
  const overRanking=nutStats.map(function(n){
    if(n.key==='kcal'||n.key==='protein'||n.info)return null;
    var ceiling=null,kind='';
    if(n.limit){ceiling=n.target;kind='上限';}
    else if(n.key==='fat'){ceiling=n.ul;kind='脂質目標上限';}
    else if(n.ul&&n.ul<99999){ceiling=n.ul;kind='耐容上限';}
    if(ceiling===null||n.avg<=ceiling)return null;
    return {label:n.label,avg:n.avg,unit:n.unit,ceiling:ceiling,kind:kind,overPct:(n.avg/ceiling-1)*100};
  }).filter(Boolean).sort(function(a,b){return b.overPct-a.overPct;});
  const sortedByPct=achieveStats.slice().sort(function(a,b){return b.pct-a.pct;});
  const top3=sortedByPct.slice(0,3);
  const worst3=sortedByPct.slice().sort(function(a,b){return a.pct-b.pct;}).slice(0,3);
  const overWarn=nutStats.filter(function(n){return n.overCount>=2;});
  const goodCount=achieveStats.filter(function(n){return n.pct>=100;}).length;
  const avgPct=recs.reduce(function(s,r){return s+r.pct;},0)/recs.length;
  const streakNum=calcStreak();
  const tips=collectImprovementTips(worst3,overWarn,goodCount,avgPct,streakNum);

  function rowHtml(n,rank,cls){
    const pctDisp=n.pct>=100?'達成':Math.round(n.pct)+'%';
    const valDisp=n.avg<10?n.avg.toFixed(1):Math.round(n.avg);
    return '<div class="summary-row '+cls+'">'
      +'<span class="summary-rank">'+rank+'</span>'
      +'<span class="summary-name">'+n.label+'</span>'
      +'<span class="summary-value">'+valDisp+n.unit+' / '+pctDisp+'</span>'
      +'</div>';
  }

  const streak=calcStreak();
  let html='<div class="summary-card">'
    +'<div class="summary-title">📊 '+periodLabel+'のサマリー</div>';
  if(showStreak&&streak>=2){
    html+='<div class="summary-streak">'
      +'<span style="font-size:24px">🔥</span>'
      +'<div><div class="summary-streak-num">'+streak+'日連続</div>'
      +'<div class="summary-streak-label">記録継続中！習慣化されてきてます</div></div>'
      +'</div>';
  }
  html+='<div class="summary-section">'
    +'<div class="summary-section-title">🏆 達成率トップ3</div>'
    +top3.map(function(n,i){return rowHtml(n,i+1,'good');}).join('')
    +'</div>';
  html+='<div class="summary-section">'
    +'<div class="summary-section-title">⚠️ 注意したい栄養素</div>'
    +worst3.map(function(n,i){return rowHtml(n,i+1,n.pct<50?'over':'warn');}).join('')
    +'</div>';
  html+='<div class="summary-section">'
    +'<div class="summary-section-title">🔴 過剰な栄養素ランキング</div>';
  if(overRanking.length){
    html+=overRanking.map(function(n,i){
      const valDisp=n.avg<10?n.avg.toFixed(1):Math.round(n.avg);
      const ceilDisp=n.ceiling<10?n.ceiling.toFixed(1):Math.round(n.ceiling);
      return '<div class="summary-row over">'
        +'<span class="summary-rank">'+(i+1)+'</span>'
        +'<span class="summary-name">'+n.label+'<span style="font-size:10px;color:var(--text3)"> ('+n.kind+')</span></span>'
        +'<span class="summary-value">'+valDisp+n.unit+' / '+ceilDisp+n.unit+'（+'+Math.round(n.overPct)+'%）</span>'
        +'</div>';
    }).join('');
  }else{
    html+='<div class="summary-tip">✅ 上限を超えた栄養素はありません</div>';
  }
  html+='</div>';
  if(tips.length){
    html+='<div class="summary-section">'
      +'<div class="summary-section-title">💡 改善のヒント</div>'
      +tips.slice(0,4).map(function(t){return '<div class="summary-tip">'+t+'</div>';}).join('')
      +'</div>';
  }
  html+='</div>';
  return html;
}
function renderCalendar(){
  const now=new Date(),todayStr=todayKey();
  document.getElementById('cal-title').textContent=_calY+'年'+(_calM+1)+'月';
  const first=new Date(_calY,_calM,1).getDay();
  const days=new Date(_calY,_calM+1,0).getDate();
  let html=Array(first).fill('<div class="cal-day empty"></div>').join('');
  for(let d=1;d<=days;d++){
    const key=_calY+'-'+String(_calM+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    const rec=hist[key];
    const isFuture=key>todayStr;
    let cls='no-data';
    if(isFuture)cls='future';
    else if(rec)cls=rec.pct>=80?'high':rec.pct>=50?'mid':'low';
    const isT=key===todayStr?'today':'';
    const isSel=key===_selDay?'selected':'';
    const action=isFuture?'':'sel-day';
    html+='<div class="cal-day '+cls+' '+isT+' '+isSel+'"'+(action?' data-action="'+action+'" data-day="'+key+'"':'')+'>'+d+'</div>';
  }
  document.getElementById('cal-days').innerHTML=html;
}

function renderDayEditPanel(key){
  const wrap=document.getElementById('day-edit-wrap');
  const s=getStateForDate(key);
  const secLabels={morning:'朝・間食',noon:'昼食',evening:'夜食',suppl:'サプリメント'};
  const secDots={morning:'var(--morning)',noon:'var(--noon)',evening:'var(--evening)',suppl:'var(--suppl)'};

  let rows='';
  Object.entries(master.daily).forEach(([sec,items])=>{
    rows+='<div class="day-section-header" style="color:'+secDots[sec]+'">'+secLabels[sec]+'</div>';
    rows+=items.map(item=>{
      const on=!!s.daily[item.id];
      // 過去日はスナップショットの食材名・量を優先表示（デフォルト変更の影響を受けない）
      const snap=hist[key]&&hist[key].itemSnap&&hist[key].itemSnap[item.id];
      const dispItem=(!isToday(key)&&snap)?snap:getEffectiveItem(item,key);
      return '<div class="day-food-row">'
        +'<div class="day-food-chk'+(on?' on':'')+'" data-action="hist-toggle" data-day="'+key+'" data-id="'+item.id+'"></div>'
        +'<span class="day-food-name">'+dispItem.name+'</span>'
        +'<span class="day-food-sec">'+dispItem.detail+'</span>'
        +'</div>';
    }).join('');
  });

  // manual entries for this day
  const manuals=s.manual||[];
  if(manuals.length){
    rows+='<div class="day-section-header" style="color:#94A3B8">手動記録</div>';
    rows+=manuals.map((m,i)=>'<div class="day-food-row">'
      +'<span class="day-food-name">'+m.name+'</span>'
      +'<button class="edit-btn" data-action="hist-del-manual" data-day="'+key+'" data-idx="'+i+'" style="width:22px;height:22px;font-size:11px">🗑</button>'
      +'</div>').join('');
  }

  wrap.innerHTML='<div class="day-edit-panel">'
    +'<div class="day-edit-title">📅 '+dispDate(key)+(isToday(key)?'　<span style="font-size:11px;color:var(--accent)">(今日)</span>':'')+'</div>'
    +rows
    +'<button class="manual-entry-btn" data-action="add-manual-hist" data-day="'+key+'" style="margin-top:10px">✏️ 手動で食事を追加</button>'
    +'</div>';
}

function renderDayDetail(key){
  const rec=hist[key],wrap=document.getElementById('day-detail-wrap');
  if(!rec){wrap.innerHTML='';return;}
  const targets=getCachedTargets(master.profile||DEFAULT_PROFILE);
  const rows=Object.entries(targets).filter(([k,t])=>!k.startsWith('_')).slice(0,10).map(([k,t])=>{
    const cur=rec.nutrients[k]||0;
    const pct=Math.min(100,(cur/t.t)*100);
    return '<div class="day-nutrient-row"><div class="day-nut-name">'+t.label+'</div>'
      +'<div class="day-nut-val">'+cur.toFixed(1)+t.unit+'</div>'
      +'<div class="day-nut-bar-wrap"><div class="day-nut-bar" style="width:'+pct+'%;background:'+t.color+'"></div></div></div>';
  }).join('');
  wrap.innerHTML='<div class="day-detail"><div class="day-detail-title">達成率 '+rec.pct+'%</div>'+rows+'</div>';
}

function renderGraphSel(){
  const targets=getCachedTargets(master.profile||DEFAULT_PROFILE);
  const keys=['kcal','protein','vitC','vitD','zinc','fiber','dha','vitA','vitB1','vitB2','ca','fe','k'];
  document.getElementById('graph-sel').innerHTML=keys.map(k=>{
    const t=targets[k];if(!t)return'';
    return '<button class="graph-sel-btn'+(_graphNut===k?' active':'')+'" data-action="graph-sel" data-nut="'+k+'">'+t.label+'</button>';
  }).join('');
}
function renderGraph(){
  renderGraphSel();
  const targets=getCachedTargets(master.profile||DEFAULT_PROFILE);
  const t=targets[_graphNut];if(!t)return;
  const days=getPeriodDays().slice(-14);
  const canvas=document.getElementById('graphCanvas');
  const ctx=canvas.getContext('2d');
  const dpr=window.devicePixelRatio||1;
  const W=canvas.offsetWidth||300,H=canvas.offsetHeight||150;
  canvas.width=W*dpr;canvas.height=H*dpr;ctx.scale(dpr,dpr);ctx.clearRect(0,0,W,H);
  const vals=days.map(function(d){var r=hist[d];return (r&&r.nutrients&&r.nutrients[_graphNut])||0;});
  const maxVal=Math.max(t.t*1.2,...vals,0.1);
  const pad={l:40,r:12,t:18,b:28},gW=W-pad.l-pad.r,gH=H-pad.t-pad.b;
  // グリッド
  [0,.5,1].forEach(f=>{
    const y=pad.t+gH*(1-f);
    ctx.beginPath();ctx.strokeStyle='#E5E0D8';ctx.lineWidth=1;ctx.moveTo(pad.l,y);ctx.lineTo(W-pad.r,y);ctx.stroke();
    ctx.fillStyle='#A09A94';ctx.font='9px ui-monospace,monospace';ctx.textAlign='right';
    ctx.fillText((maxVal*f).toFixed(f===1?0:1),pad.l-3,y+3);
  });
  // 目標ライン（カラーラベルバッジ付き）
  const ty=pad.t+gH*(1-t.t/maxVal);
  ctx.save();
  ctx.beginPath();ctx.setLineDash([5,3]);ctx.strokeStyle=t.color;ctx.lineWidth=1.5;ctx.globalAlpha=0.75;
  ctx.moveTo(pad.l,ty);ctx.lineTo(W-pad.r,ty);ctx.stroke();
  ctx.setLineDash([]);ctx.globalAlpha=1;
  // ラベルバッジ
  const badgeW=26,badgeH=12;
  ctx.fillStyle=t.color;
  ctx.beginPath();ctx.roundRect?ctx.roundRect(W-pad.r-badgeW,ty-badgeH/2,badgeW,badgeH,3):ctx.fillRect(W-pad.r-badgeW,ty-badgeH/2,badgeW,badgeH);
  ctx.fill();
  ctx.fillStyle='#fff';ctx.font='bold 8px -apple-system,sans-serif';ctx.textAlign='center';
  ctx.fillText('目標',W-pad.r-badgeW/2,ty+4);
  ctx.restore();
  if(!days.length)return;
  const step=gW/days.length,bW=Math.max(4,step*.6);
  // バー（達成日濃色・未達淡色）
  vals.forEach((v,i)=>{
    const achieved=v>=t.t;
    ctx.fillStyle=achieved?t.color+'99':t.color+'22';
    const bH=gH*(v/maxVal);
    ctx.fillRect(pad.l+step*i+step/2-bW/2,pad.t+gH-bH,bW,bH);
  });
  // 折れ線
  ctx.beginPath();ctx.strokeStyle=t.color;ctx.lineWidth=2;ctx.lineJoin='round';
  vals.forEach((v,i)=>{const x=pad.l+step*i+step/2,y=pad.t+gH*(1-v/maxVal);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});
  ctx.stroke();
  // ドット（達成日は大きく）
  vals.forEach((v,i)=>{
    const x=pad.l+step*i+step/2,y=pad.t+gH*(1-v/maxVal);
    ctx.fillStyle=v>=t.t?t.color:'#C8C0B8';
    ctx.beginPath();ctx.arc(x,y,v>=t.t?3.5:2,0,Math.PI*2);ctx.fill();
  });
  ctx.fillStyle='#A09A94';ctx.font='9px -apple-system,sans-serif';ctx.textAlign='center';
  const s2=Math.max(1,Math.ceil(days.length/5));
  days.forEach((d,i)=>{if(i%s2===0||i===days.length-1){const x=pad.l+step*i+step/2;const pts=d.split('-');ctx.fillText(pts[1]+'/'+pts[2],x,H-pad.b+14);}});
}

// ===================== WAIST RENDER =====================
function waistSortedKeys(){
  return Object.keys(waistData).filter(function(k){return typeof waistData[k]==='number';}).sort();
}
function renderWaist(){
  const wrap=document.getElementById('waist-card');
  if(!wrap)return;
  const keys=waistSortedKeys();
  let html='<div class="waist-head"><div class="waist-title">📏 ウエスト</div>'
    +'<button class="waist-rec-btn" data-action="waist-record">記録する</button></div>';
  if(!keys.length){
    html+='<div class="waist-empty">まだ記録がありません。<br>「記録する」から今週の数値を入れてみましょう。</div>';
    wrap.innerHTML=html;return;
  }
  const latestKey=keys[keys.length-1];
  const latest=waistData[latestKey];
  // 直近測定からの経過日数（週1リマインド）
  const daysSince=Math.floor((parseDateKey(todayKey())-parseDateKey(latestKey))/86400000);
  if(daysSince>=7){
    html+='<div class="waist-remind">⏰ 前回測定から'+daysSince+'日。そろそろ今週の記録を！</div>';
  }
  // 最新値＋前回比
  html+='<div class="waist-latest"><span class="waist-latest-val">'+latest.toFixed(1)+'</span><span class="waist-latest-unit">cm</span>';
  if(keys.length>=2){
    const prev=waistData[keys[keys.length-2]];
    const diff=+(latest-prev).toFixed(1);
    let cls='waist-chg-flat',txt='±0.0';
    if(diff<0){cls='waist-chg-down';txt='▼'+Math.abs(diff).toFixed(1);}
    else if(diff>0){cls='waist-chg-up';txt='▲'+diff.toFixed(1);}
    html+='<span class="waist-latest-chg '+cls+'">'+txt+' cm</span>';
  }
  html+='</div>';
  html+='<div class="waist-latest-date">最新：'+dispDate(latestKey)+'</div>';
  // グラフ
  html+='<div class="waist-graph-wrap"><canvas id="waistGraph" class="waist-graph"></canvas></div>';
  // 直近記録リスト（最新6件、新しい順）
  html+='<div class="waist-list"><div class="waist-list-title">記録履歴（タップで編集・削除）</div>';
  const recent=keys.slice(-6).reverse();
  recent.forEach(function(k,idx){
    const v=waistData[k];
    // この行の1つ前（古い方）との差
    const realIdx=keys.indexOf(k);
    let diffTxt='';
    if(realIdx>0){
      const d=+(v-waistData[keys[realIdx-1]]).toFixed(1);
      diffTxt=(d>0?'+':'')+d.toFixed(1)+'cm';
    }
    html+='<div class="waist-row" data-action="waist-edit" data-key="'+k+'">'
      +'<span class="waist-row-date">'+dispDate(k)+'</span>'
      +'<span class="waist-row-val">'+v.toFixed(1)+' cm</span>'
      +'<span class="waist-row-diff">'+diffTxt+'</span></div>';
  });
  html+='</div>';
  wrap.innerHTML=html;
  drawWaistGraph();
}
function drawWaistGraph(){
  const canvas=document.getElementById('waistGraph');
  if(!canvas)return;
  const keys=waistSortedKeys().slice(-12);
  const ctx=canvas.getContext('2d');
  const dpr=window.devicePixelRatio||1;
  const W=canvas.offsetWidth||300,H=canvas.offsetHeight||130;
  canvas.width=W*dpr;canvas.height=H*dpr;ctx.scale(dpr,dpr);ctx.clearRect(0,0,W,H);
  if(keys.length<1)return;
  const vals=keys.map(function(k){return waistData[k];});
  let mn=Math.min.apply(null,vals),mx=Math.max.apply(null,vals);
  if(mx-mn<2){const c=(mx+mn)/2;mn=c-1.5;mx=c+1.5;}
  const range=mx-mn,pad={l:34,r:10,t:12,b:24},gW=W-pad.l-pad.r,gH=H-pad.t-pad.b;
  // グリッド（3本）
  [0,.5,1].forEach(function(f){
    const y=pad.t+gH*f;
    ctx.beginPath();ctx.strokeStyle='#E5E0D8';ctx.lineWidth=1;ctx.moveTo(pad.l,y);ctx.lineTo(W-pad.r,y);ctx.stroke();
    ctx.fillStyle='#A09A94';ctx.font='9px ui-monospace,monospace';ctx.textAlign='right';
    ctx.fillText((mx-range*f).toFixed(1),pad.l-3,y+3);
  });
  if(keys.length===1){
    const x=pad.l+gW/2,y=pad.t+gH*(1-(vals[0]-mn)/range);
    ctx.fillStyle='#2D6A4F';ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#A09A94';ctx.font='9px -apple-system,sans-serif';ctx.textAlign='center';
    const pts=keys[0].split('-');ctx.fillText(pts[1]+'/'+pts[2],x,H-pad.b+14);
    return;
  }
  const step=gW/(keys.length-1);
  // 面塗り
  ctx.beginPath();
  vals.forEach(function(v,i){const x=pad.l+step*i,y=pad.t+gH*(1-(v-mn)/range);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});
  ctx.lineTo(pad.l+step*(keys.length-1),pad.t+gH);ctx.lineTo(pad.l,pad.t+gH);ctx.closePath();
  ctx.fillStyle='rgba(45,106,79,.10)';ctx.fill();
  // 線
  ctx.beginPath();ctx.strokeStyle='#2D6A4F';ctx.lineWidth=2;ctx.lineJoin='round';
  vals.forEach(function(v,i){const x=pad.l+step*i,y=pad.t+gH*(1-(v-mn)/range);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});
  ctx.stroke();
  // 点
  vals.forEach(function(v,i){const x=pad.l+step*i,y=pad.t+gH*(1-(v-mn)/range);ctx.fillStyle='#2D6A4F';ctx.beginPath();ctx.arc(x,y,2.5,0,Math.PI*2);ctx.fill();});
  // x軸ラベル
  ctx.fillStyle='#A09A94';ctx.font='9px -apple-system,sans-serif';ctx.textAlign='center';
  const s2=Math.max(1,Math.ceil(keys.length/5));
  keys.forEach(function(k,i){if(i%s2===0||i===keys.length-1){const x=pad.l+step*i;const pts=k.split('-');ctx.fillText(pts[1]+'/'+pts[2],x,H-pad.b+14);}});
}
function openWaistModal(editKey){
  const today=todayKey();
  const dateVal=editKey||today;
  const existing=editKey?waistData[editKey]:'';
  const keys=waistSortedKeys();
  const lastVal=keys.length?waistData[keys[keys.length-1]]:'';
  let body='<div class="form-group"><label class="form-label">測定日</label>'
    +'<input class="form-input" id="waist-date" type="date" value="'+dateVal+'" max="'+today+'"></div>'
    +'<div class="form-group"><label class="form-label">ウエスト (cm)</label>'
    +'<input class="form-input" id="waist-val" type="number" inputmode="decimal" min="30" max="200" step="0.1" placeholder="'+(lastVal||'例: 78.5')+'" value="'+existing+'"></div>'
    +'<div style="font-size:11px;color:var(--text3);margin-bottom:12px;padding:8px;background:var(--surface2);border-radius:8px">💡 同じ日に再記録すると上書きされます。週1回、同じ条件（朝・起床後など）で測ると変化が分かりやすいです。</div>'
    +'<button class="btn-primary" data-action="waist-save">保存する</button>';
  if(editKey){
    body+='<button class="btn-danger" data-action="waist-delete" data-key="'+editKey+'">🗑 この記録を削除</button>';
  }
  openModal(editKey?'ウエストを編集':'ウエストを記録', body);
}
function doSaveWaist(){
  const dk=document.getElementById('waist-date').value;
  const v=parseFloat(document.getElementById('waist-val').value);
  if(!dk){alert('測定日を選んでください');return;}
  if(isNaN(v)||v<=0){alert('ウエストの数値を入力してください');return;}
  if(v<30||v>200){alert('30〜200cmの範囲で入力してください');return;}
  waistData[dk]=+v.toFixed(1);
  saveWaistData();closeModal();renderWaist();showBanner('📏 ウエストを記録しました');
}
function doDeleteWaist(key){
  closeModal();
  confirmDo('この記録（'+dispDate(key)+'）を削除しますか？',function(){
    delete waistData[key];
    saveWaistData();renderWaist();showBanner('🗑 削除しました');
  });
}

// ===================== MASTER =====================
function renderMaster(){
  const custom=getCustomFoodDB();
  const db=getFoodDB();
  const cEl=document.getElementById('count-master');
  const listEl=document.getElementById('list-master');
  const q=_masterSearch.toLowerCase();
  const entries=Object.entries(db).filter(([k])=>!q||k.toLowerCase().includes(q));
  cEl.textContent=Object.keys(db).length+'件';
  if(!entries.length){listEl.innerHTML='<div style="padding:16px;text-align:center;color:var(--text3);font-size:13px">該当なし</div>';return;}
  listEl.innerHTML=entries.map(([name,row])=>{
    const isCustom=!!custom[name];
    return '<div class="master-item">'
      +'<div class="master-info">'
      +'<div class="master-name">'+name+(isCustom?' <span style="font-size:9px;background:var(--accent-light);color:var(--accent);padding:1px 5px;border-radius:3px;font-weight:600">カスタム</span>':'')+'</div>'
      +'<div class="master-detail">タンパク質'+row.protein+'g ／ 脂質'+row.fat+'g ／ '+row.kcal+'kcal (per100g)</div>'
      +'</div>'
      +(isCustom?'<button class="edit-btn" data-action="edit-master" data-name="'+encodeURIComponent(name)+'">✎</button>':'')
      +'</div>';
  }).join('');
}

// ===================== MODAL =====================
function openModal(title,body){
  document.getElementById('modalTitle').textContent=title;
  document.getElementById('modalBody').innerHTML=body;
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModal(){document.getElementById('modalOverlay').classList.remove('open');}
function genId(p){return p+'_'+Date.now();}

// ① インクリメンタルサーチ用HTML生成
function foodSearchHTML(currentVal, inputId, dropdownId){
  const escaped=(currentVal||'').replace(/"/g,'&quot;');
  return '<div class="food-search-wrap">'
    +'<input class="food-search-input" id="'+inputId+'" placeholder="食材名を入力して検索..." value="'+escaped+'" autocomplete="off">'
    +'<div class="food-search-dropdown" id="'+dropdownId+'"></div>'
    +'</div>';
}

function bindFoodSearch(inputId, dropdownId, onSelect){
  // モーダルのアニメーション完了を待つため少し遅延
  function attach(){
    var inp=document.getElementById(inputId);
    var drop=document.getElementById(dropdownId);
    if(!inp||!drop){
      // 要素がまだなければリトライ
      setTimeout(attach,100);
      return;
    }

    function renderList(){
      var q=(inp.value||'').trim().toLowerCase();
      var db=getFoodDB();
      var keys=Object.keys(db);
      var filtered;
      if(q.length>0){
        filtered=keys.filter(function(k){return k.toLowerCase().indexOf(q)!==-1;});
      }else{
        filtered=keys.slice(0,20);
      }
      if(filtered.length===0){
        drop.innerHTML='<div style="padding:14px;color:var(--text3);font-size:13px;text-align:center">該当する食材なし</div>';
        drop.classList.add('open');
        return;
      }
      var html='';
      for(var i=0;i<Math.min(30,filtered.length);i++){
        var k=filtered[i];
        html+='<div class="food-search-item" data-foodkey="'+k.replace(/"/g,'&quot;')+'">'+k+'</div>';
      }
      drop.innerHTML=html;
      drop.classList.add('open');
    }

    // 候補選択（mousedown/touchstartどちらでも反応）
    function handleSelect(e){
      var item=e.target.closest('.food-search-item');
      if(!item)return;
      e.preventDefault();
      e.stopPropagation();
      var key=item.dataset.foodkey;
      inp.value=key;
      drop.classList.remove('open');
      if(onSelect)onSelect(key);
    }
    drop.addEventListener('mousedown', handleSelect);
    drop.addEventListener('touchstart', handleSelect, {passive:false});

    // 入力監視：複数イベントを併用
    inp.addEventListener('input', renderList);
    inp.addEventListener('keyup', renderList);
    inp.addEventListener('change', renderList);
    inp.addEventListener('compositionupdate', renderList);
    inp.addEventListener('compositionend', renderList);
    inp.addEventListener('focus', renderList);
    inp.addEventListener('click', renderList);

    // blurで閉じる（候補クリック前に閉じないようdelay）
    inp.addEventListener('blur', function(){
      setTimeout(function(){drop.classList.remove('open');},300);
    });
  }
  setTimeout(attach,200);
}

// Daily 追加（食材名入力＝栄養検索を統合）
function doAddDaily(sec){
  const lbl={morning:'朝・間食',noon:'昼食',evening:'夜食',suppl:'サプリメント'};
  const isS=sec==='suppl';
  openModal(lbl[sec]+'に追加',
    '<div class="form-group"><label class="form-label">食材名 *</label>'
    +'<div class="food-search-wrap">'
    +'<input class="food-search-input" id="fi-name" placeholder="例：鶏胸肉、卵、ご飯..." autocomplete="off">'
    +'<div class="food-search-dropdown" id="fi-name-drop"></div>'
    +'</div>'
    +'<div style="font-size:11px;color:var(--text3);margin-top:5px">候補から選ぶと栄養データを自動参照します</div></div>'
    +'<input type="hidden" id="fi-foodkey-inp" value="">'
    +'<div class="form-group"><label class="form-label">'+(isS?'回数':'量 (g)')+'</label><input class="form-input" id="fi-amount" type="number" min="0" step="1" placeholder="'+(isS?'1':'100')+'"'+(isS?' value="1" readonly':'')+'></div>'
    +'<div class="form-group"><label class="form-label">メモ</label><input class="form-input" id="fi-detail" placeholder="例：1切れ、冷凍など"></div>'
    +'<button class="btn-primary" data-action="save-add-daily" data-sec="'+sec+'">追加する</button>');
  bindFoodSearch('fi-name','fi-name-drop', function(key){
    // 候補選択時、隠しフィールドのfoodKeyにセット
    document.getElementById('fi-foodkey-inp').value=key;
  });
}
function doSaveAddDaily(sec){
  const name=document.getElementById('fi-name').value.trim();if(!name){alert('食材名を入力してください');return;}
  // foodKeyは選択した候補があればそれ、なければ食材名と同じ
  const foodKey=document.getElementById('fi-foodkey-inp').value.trim()||name;
  const amount=parseFloat(document.getElementById('fi-amount').value)||100;
  const detail=document.getElementById('fi-detail').value.trim()||amount+'g';
  const isSuppl=sec==='suppl';
  const n=calcNutrientFromItem({foodKey,amount,isSuppl});
  master.daily[sec].push({id:genId(sec[0]),name,foodKey,amount,detail,isSuppl,protein:n.protein});
  saveMaster();closeModal();renderDaily();showBanner('✅ '+name+' を追加しました');
}

// Daily 編集（インクリメンタルサーチ版）
function doEditDaily(sec,id){
  const item=master.daily[sec].find(i=>i.id===id);if(!item)return;
  const escName=(item.name||'').replace(/"/g,'&quot;');
  const escDetail=(item.detail||'').replace(/"/g,'&quot;');
  const escFoodKey=(item.foodKey||item.name||'').replace(/"/g,'&quot;');
  openModal('食材を編集',
    '<div class="form-group"><label class="form-label">食材名 *</label>'
    +'<div class="food-search-wrap">'
    +'<input class="food-search-input" id="fi-name" value="'+escName+'" placeholder="例：鶏胸肉、卵、ご飯..." autocomplete="off">'
    +'<div class="food-search-dropdown" id="fi-name-drop"></div>'
    +'</div>'
    +'<div style="font-size:11px;color:var(--text3);margin-top:5px">参照中: <strong>'+escFoodKey+'</strong></div></div>'
    +'<input type="hidden" id="fi-foodkey-inp" value="'+escFoodKey+'">'
    +'<div class="form-group"><label class="form-label">'+(item.isSuppl?'回数':'量 (g)')+'</label><input class="form-input" id="fi-amount" type="number" min="0" step="1" value="'+(item.amount||100)+'"'+(item.isSuppl?' readonly':'')+'></div>'
    +'<div class="form-group"><label class="form-label">メモ</label><input class="form-input" id="fi-detail" value="'+escDetail+'"></div>'
    +'<div style="font-size:11px;color:var(--text3);margin-bottom:8px;padding:8px;background:var(--surface2);border-radius:8px">💡 <strong>当日分を更新</strong>：今日だけ変更（デフォルトはそのまま）<br>📌 <strong>デフォルトを変更</strong>：明日以降も含め永続的に変更</div>'
    +'<button class="btn-primary" data-action="save-edit-daily" data-sec="'+sec+'" data-id="'+id+'">当日分を更新</button>'
    +'<button class="btn-default-update" data-action="save-edit-daily-default" data-sec="'+sec+'" data-id="'+id+'">📌 デフォルトを変更</button>'
    +'<button class="btn-danger" data-action="del-daily" data-sec="'+sec+'" data-id="'+id+'">🗑 この食材を削除</button>');
  bindFoodSearch('fi-name','fi-name-drop', function(key){
    document.getElementById('fi-foodkey-inp').value=key;
  });
}
function doSaveEditDaily(sec,id){
  const name=document.getElementById('fi-name').value.trim();if(!name){alert('食材名を入力してください');return;}
  const foodKey=document.getElementById('fi-foodkey-inp').value.trim()||name;
  const amount=parseFloat(document.getElementById('fi-amount').value)||100;
  const detail=document.getElementById('fi-detail').value.trim()||amount+'g';
  // ④ 当日のみに適用: stateDBの当日分にitemOverridesとして保存
  const dk=_viewDate;
  const s=getStateForDate(dk);
  if(!s.itemOverrides)s.itemOverrides={};
  s.itemOverrides[id]={name,foodKey,amount,detail};
  saveStateDB();saveSnapshot(dk);closeModal();renderDaily();showBanner('✅ 当日分を更新しました');
}
function doSaveEditDailyDefault(sec,id){
  const name=document.getElementById('fi-name').value.trim();if(!name){alert('食材名を入力してください');return;}
  const foodKey=document.getElementById('fi-foodkey-inp').value.trim()||name;
  const amount=parseFloat(document.getElementById('fi-amount').value)||100;
  const detail=document.getElementById('fi-detail').value.trim()||amount+'g';
  const item=master.daily[sec].find(i=>i.id===id);
  if(!item){alert('食材が見つかりません');return;}
  item.name=name;item.foodKey=foodKey;item.amount=amount;item.detail=detail;
  const n=calcNutrientFromItem({foodKey,amount,isSuppl:item.isSuppl});
  item.protein=n.protein;
  // 当日のオーバーライドが残っている場合は削除（デフォルトと同期）
  const dk=_viewDate;
  const s=getStateForDate(dk);
  if(s.itemOverrides&&s.itemOverrides[id])delete s.itemOverrides[id];
  saveMaster();saveStateDB();saveSnapshot(dk);closeModal();renderDaily();showBanner('📌 デフォルトを変更しました（以降も反映）');
}
function doDelDaily(sec,id){
  closeModal();
  confirmDo('この食材を削除しますか？', function(){
    master.daily[sec]=master.daily[sec].filter(i=>i.id!==id);
    Object.keys(stateDB).forEach(dk=>{if(stateDB[dk].daily)delete stateDB[dk].daily[id];});
    saveMaster();saveStateDB();renderDaily();showBanner('🗑 削除しました');
  });
}

function nutInputsHTML(vals){
  const targets=getCachedTargets(master.profile||DEFAULT_PROFILE);
  return NUT_KEYS.map(k=>{
    const t=targets[k];if(!t)return'';
    return '<div class="nut-input-item"><div class="nut-input-label">'+t.label+'</div>'
      +'<div class="nut-input-wrap"><input class="nut-input" id="mn-'+k+'" type="number" min="0" step="0.1" value="'+(vals&&vals[k]?vals[k]:0)+'">'
      +'<span class="nut-unit">'+t.unit+'</span></div></div>';
  }).join('');
}
function readNutInputs(){
  const nuts=NUT_ZERO();
  NUT_KEYS.forEach(k=>{const el=document.getElementById('mn-'+k);if(el)nuts[k]=parseFloat(el.value)||0;});
  return nuts;
}
// ④ 当日のitemOverridesを考慮した食材情報取得
function getEffectiveItem(item,dateKey){
  const s=getStateForDate(dateKey);
  const ov=s.itemOverrides&&s.itemOverrides[item.id];
  if(ov)return Object.assign({},item,ov);
  return item;
}
function doAddWeekly(){
  openModal('週間食材を追加',
    '<div class="form-group"><label class="form-label">食材名 *</label>'
    +'<div class="food-search-wrap">'
    +'<input class="food-search-input" id="wi-name" placeholder="例：納豆、鮭、鯖缶..." autocomplete="off">'
    +'<div class="food-search-dropdown" id="wi-name-drop"></div>'
    +'</div></div>'
    +'<input type="hidden" id="wi-foodkey-inp" value="">'
    +'<div class="form-row">'
    +'<div class="form-group"><label class="form-label">1回あたりの量 (g)</label><input class="form-input" id="wi-amount" type="number" min="0" step="1" placeholder="100"></div>'
    +'<div class="form-group"><label class="form-label">メモ表示</label><input class="form-input" id="wi-detail" placeholder="例：1切れ"></div>'
    +'</div>'
    +'<div class="form-row">'
    +'<div class="form-group"><label class="form-label">目標回数 *</label><input class="form-input" id="wi-target" type="number" min="1" step="1" placeholder="3"></div>'
    +'<div class="form-group"><label class="form-label">単位</label><input class="form-input" id="wi-unit" placeholder="回"></div>'
    +'</div>'
    +'<div style="font-size:11px;color:var(--text3);margin-bottom:12px;padding:8px;background:var(--surface2);border-radius:8px">💡 ＋ボタンを押すと、設定した量分の栄養素が今日の記録に自動加算されます</div>'
    +'<button class="btn-primary" data-action="save-add-weekly">追加する</button>');
  bindFoodSearch('wi-name','wi-name-drop',function(key){
    document.getElementById('wi-foodkey-inp').value=key;
  });
}
function doSaveAddWeekly(){
  const name=document.getElementById('wi-name').value.trim();if(!name){alert('食材名を入力してください');return;}
  const foodKey=document.getElementById('wi-foodkey-inp').value.trim()||name;
  const amount=parseFloat(document.getElementById('wi-amount').value)||100;
  master.weekly.push({
    id:genId('w'),name,foodKey,amount,
    detail:document.getElementById('wi-detail').value.trim()||amount+'g',
    target:parseInt(document.getElementById('wi-target').value)||1,
    unit:document.getElementById('wi-unit').value.trim()||'回'
  });
  saveMaster();closeModal();renderWeekly();showBanner('✅ '+name+' を追加しました');
}
function doEditWeekly(id){
  const item=master.weekly.find(i=>i.id===id);if(!item)return;
  const escName=(item.name||'').replace(/"/g,'&quot;');
  const escDetail=(item.detail||'').replace(/"/g,'&quot;');
  const escFoodKey=(item.foodKey||item.name||'').replace(/"/g,'&quot;');
  openModal('週間食材を編集',
    '<div class="form-group"><label class="form-label">食材名 *</label>'
    +'<div class="food-search-wrap">'
    +'<input class="food-search-input" id="wi-name" value="'+escName+'" autocomplete="off">'
    +'<div class="food-search-dropdown" id="wi-name-drop"></div>'
    +'</div>'
    +'<div style="font-size:11px;color:var(--text3);margin-top:5px">参照中: <strong>'+escFoodKey+'</strong></div></div>'
    +'<input type="hidden" id="wi-foodkey-inp" value="'+escFoodKey+'">'
    +'<div class="form-row">'
    +'<div class="form-group"><label class="form-label">1回あたりの量 (g)</label><input class="form-input" id="wi-amount" type="number" min="0" step="1" value="'+(item.amount||100)+'"></div>'
    +'<div class="form-group"><label class="form-label">メモ表示</label><input class="form-input" id="wi-detail" value="'+escDetail+'"></div>'
    +'</div>'
    +'<div class="form-row">'
    +'<div class="form-group"><label class="form-label">目標回数 *</label><input class="form-input" id="wi-target" type="number" min="1" value="'+item.target+'"></div>'
    +'<div class="form-group"><label class="form-label">単位</label><input class="form-input" id="wi-unit" value="'+(item.unit||'回')+'"></div>'
    +'</div>'
    +'<div style="font-size:11px;color:var(--text3);margin-bottom:12px;padding:8px;background:var(--surface2);border-radius:8px">💡 ＋ボタンで設定した量分の栄養素が今日の記録に自動加算されます</div>'
    +'<button class="btn-primary" data-action="save-edit-weekly" data-id="'+id+'">保存する</button>'
    +'<button class="btn-danger" data-action="del-weekly" data-id="'+id+'">🗑 この食材を削除</button>');
  bindFoodSearch('wi-name','wi-name-drop',function(key){
    document.getElementById('wi-foodkey-inp').value=key;
  });
}
function doSaveEditWeekly(id){
  const name=document.getElementById('wi-name').value.trim();if(!name){alert('食材名を入力してください');return;}
  const item=master.weekly.find(i=>i.id===id);
  item.name=name;
  item.foodKey=document.getElementById('wi-foodkey-inp').value.trim()||name;
  item.amount=parseFloat(document.getElementById('wi-amount').value)||100;
  item.detail=document.getElementById('wi-detail').value.trim()||item.amount+'g';
  item.target=parseInt(document.getElementById('wi-target').value)||1;
  item.unit=document.getElementById('wi-unit').value.trim()||'回';
  saveMaster();closeModal();renderWeekly();showBanner('✅ 変更を保存しました');
}
function doDelWeekly(id){
  closeModal();
  confirmDo('この食材を削除しますか？', function(){
    master.weekly=master.weekly.filter(i=>i.id!==id);
    saveMaster();renderWeekly();showBanner('🗑 削除しました');
  });
}

// Manual entry (日付指定)
function doAddManual(dateKey){
  const dk=dateKey||_viewDate;
  const recentFoods=getRecentFoods();
  const favs=loadFavorites();
  let shortcutHTML='';
  if(favs.length){
    shortcutHTML+='<div style="margin-bottom:12px">'
      +'<div style="font-size:11px;font-weight:700;color:var(--text2);margin-bottom:5px">⭐ お気に入り</div>'
      +'<div style="display:flex;flex-wrap:wrap;gap:5px">'
      +favs.map((f,i)=>'<button style="font-size:11px;padding:4px 8px;background:var(--surface2);border:1px solid var(--border);border-radius:6px;cursor:pointer;color:var(--text1)" data-action="quick-fav" data-favidx="'+i+'">'+f.name+'</button>').join('')
      +'</div></div>';
  }
  if(recentFoods.length){
    shortcutHTML+='<div style="margin-bottom:12px">'
      +'<div style="font-size:11px;font-weight:700;color:var(--text2);margin-bottom:5px">🕐 最近の記録</div>'
      +'<div style="display:flex;flex-wrap:wrap;gap:5px">'
      +recentFoods.map(f=>'<button style="font-size:11px;padding:4px 8px;background:var(--surface2);border:1px solid var(--border);border-radius:6px;cursor:pointer;color:var(--text1)" data-action="quick-recent" data-rname="'+encodeURIComponent(f.name)+'">'+f.name+'<span style="color:var(--text3);font-size:9px"> ×'+f.cnt+'</span></button>').join('')
      +'</div></div>';
  }
  openModal(dispDate(dk)+'の食事を記録',
    shortcutHTML
    +'<div class="form-group"><label class="form-label">料理名 *</label><input class="form-input" id="mn-name" placeholder="例：野菜炒め、チキンカレー"></div>'
    +'<div class="form-group"><label class="form-label">食材名（任意）</label><input class="form-input" id="mn-ingredients" placeholder="例：豚肉、キャベツ、もやし"></div>'
    +'<div class="form-group"><label class="form-label">食べたタイミング</label>'
    +'<select class="form-select" id="mn-timing">'
    +'<option value="morning">朝・間食</option><option value="noon">昼食</option>'
    +'<option value="evening" selected>夕食</option><option value="snack">間食</option>'
    +'</select></div>'
    +'<div class="form-group"><label class="form-label">栄養素（わかる範囲で入力）</label>'
    +'<div class="nut-input-grid">'+nutInputsHTML(null)+'</div></div>'
    +'<div class="form-group"><label class="form-label">メモ</label><input class="form-input" id="mn-memo" placeholder="例：外食、自炊"></div>'
    +'<div style="display:flex;gap:8px;margin-top:4px">'
    +'<button class="btn-primary" style="flex:1" data-action="save-manual" data-day="'+dk+'">記録する</button>'
    +'<button class="btn-default-update" style="flex:0 0 auto;padding:10px 12px" data-action="save-fav-manual" data-day="'+dk+'" title="お気に入りに追加して記録">⭐ 保存</button>'
    +'</div>');
}

function doSaveManual(dk){
  const name=document.getElementById('mn-name').value.trim();if(!name){alert('料理名を入力してください');return;}
  const nuts=readNutInputs();
  const entry={id:genId('m'),name,ingredients:document.getElementById('mn-ingredients').value.trim(),timing:document.getElementById('mn-timing').value,memo:document.getElementById('mn-memo').value.trim(),nuts};
  const s=getStateForDate(dk);
  if(!s.manual)s.manual=[];
  s.manual.push(entry);
  saveStateDB();saveSnapshot(dk);closeModal();
  if(dk===_viewDate){renderManualList();renderNutrients();}
  if(_selDay===dk){renderDayEditPanel(dk);renderDayDetail(dk);}
  renderCalendar();
  showBanner('✅ '+name+' を記録しました');
}
function doDelManual(idx,dk){
  const dateKey=dk||_viewDate;
  confirmDo('この記録を削除しますか？', function(){
    const s=getStateForDate(dateKey);
    s.manual.splice(idx,1);
    saveStateDB();saveSnapshot(dateKey);
    if(dateKey===_viewDate){renderManualList();renderNutrients();}
    if(_selDay===dateKey){renderDayEditPanel(dateKey);renderDayDetail(dateKey);}
    renderCalendar();
    showBanner('🗑 削除しました');
  });
}

// Master
function doAddMaster(){
  openModal('食材を追加（100gあたり）',
    '<div class="form-group"><label class="form-label">食材名 *</label><input class="form-input" id="ms-name" placeholder="例：さつまいも"></div>'
    +'<div class="form-group"><label class="form-label">基本栄養素</label>'
    +'<div class="form-row-3">'
    +'<div class="form-group"><label class="form-label">カロリー(kcal)</label><input class="form-input" id="ms-kcal" type="number" min="0" value="0"></div>'
    +'<div class="form-group"><label class="form-label">タンパク質(g)</label><input class="form-input" id="ms-protein" type="number" min="0" step="0.1" value="0"></div>'
    +'<div class="form-group"><label class="form-label">脂質(g)</label><input class="form-input" id="ms-fat" type="number" min="0" step="0.1" value="0"></div>'
    +'</div></div>'
    +'<div class="form-group"><label class="form-label">その他（省略可）</label>'
    +'<div class="nut-input-grid">'+nutInputsHTML(null)+'</div></div>'
    +'<button class="btn-primary" data-action="save-add-master">追加する</button>');
}
function doSaveAddMaster(){
  const name=document.getElementById('ms-name').value.trim();if(!name){alert('食材名を入力してください');return;}
  const nuts=readNutInputs();
  nuts.kcal=parseFloat(document.getElementById('ms-kcal').value)||0;
  nuts.protein=parseFloat(document.getElementById('ms-protein').value)||0;
  nuts.fat=parseFloat(document.getElementById('ms-fat').value)||0;
  const custom=getCustomFoodDB();
  custom[name]=nuts;
  saveCustomFoodDB(custom);closeModal();renderMaster();showBanner('✅ '+name+' を追加しました');
}
function doEditMaster(name){
  const db=getFoodDB();
  const row=db[name]||{};
  openModal(name+' を編集（100gあたり）',
    '<div class="form-group"><label class="form-label">基本栄養素</label>'
    +'<div class="form-row-3">'
    +'<div class="form-group"><label class="form-label">カロリー(kcal)</label><input class="form-input" id="ms-kcal" type="number" min="0" value="'+(row.kcal||0)+'"></div>'
    +'<div class="form-group"><label class="form-label">タンパク質(g)</label><input class="form-input" id="ms-protein" type="number" min="0" step="0.1" value="'+(row.protein||0)+'"></div>'
    +'<div class="form-group"><label class="form-label">脂質(g)</label><input class="form-input" id="ms-fat" type="number" min="0" step="0.1" value="'+(row.fat||0)+'"></div>'
    +'</div></div>'
    +'<div class="form-group"><label class="form-label">その他</label>'
    +'<div class="nut-input-grid">'+nutInputsHTML(row)+'</div></div>'
    +'<button class="btn-primary" data-action="save-edit-master" data-name="'+encodeURIComponent(name)+'">保存する</button>'
    +'<button class="btn-danger" data-action="del-master" data-name="'+encodeURIComponent(name)+'">🗑 この食材を削除</button>');
}
function doSaveEditMaster(name){
  const nuts=readNutInputs();
  nuts.kcal=parseFloat(document.getElementById('ms-kcal').value)||0;
  nuts.protein=parseFloat(document.getElementById('ms-protein').value)||0;
  nuts.fat=parseFloat(document.getElementById('ms-fat').value)||0;
  const custom=getCustomFoodDB();
  custom[name]=nuts;saveCustomFoodDB(custom);closeModal();renderMaster();showBanner('✅ 変更を保存しました');
}
function doDelMaster(name){
  closeModal();
  confirmDo(name+' を削除しますか？', function(){
    const custom=getCustomFoodDB();
    delete custom[name];saveCustomFoodDB(custom);renderMaster();showBanner('🗑 削除しました');
  });
}

// Profile
let _selAct=master.profile.activity||'moderate';
let _selGoalMain=master.profile.goalMain||'maintain';
let _selGoalSubs=(master.profile.goalSubs||[]).slice();
function doProfile(){
  _selAct=master.profile.activity||'moderate';
  _selGoalMain=master.profile.goalMain||'maintain';
  _selGoalSubs=(master.profile.goalSubs||[]).slice();
  const p=master.profile;
  const acts=[{key:'sedentary',l:'座位中心',s:'デスクワーク中心'},{key:'light',l:'軽い運動',s:'週1〜2回'},{key:'moderate',l:'適度な運動',s:'週3〜5回'},{key:'active',l:'活発な運動',s:'週6〜7回'},{key:'vactive',l:'非常に活発',s:'肉体労働'}];
  const currentMain=_selGoalMain;
  const currentSubs=_selGoalSubs;
  const mainBtns=Object.entries(GOAL_MAIN_CONFIG).map(function(e){
    const k=e[0],c=e[1];
    return '<button class="activity-btn'+(k===currentMain?' active':'')+'" data-action="sel-goal-main" data-key="'+k+'">'
      +'<div style="font-weight:600">'+c.emoji+' '+c.label+'</div>'
      +'<div style="font-size:10px;color:var(--text3)">'+c.note+'</div></button>';
  }).join('');
  const subBtns=Object.entries(GOAL_SUB_CONFIG).map(function(e){
    const k=e[0],c=e[1];
    const isOn=currentSubs.indexOf(k)>=0;
    return '<button class="activity-btn'+(isOn?' active':'')+'" data-action="sel-goal-sub" data-key="'+k+'">'
      +'<div style="font-weight:600">'+c.emoji+' '+c.label+'</div></button>';
  }).join('');
  openModal('プロフィール設定',
    '<div class="form-group"><label class="form-label">性別</label>'
    +'<select class="form-select" id="pf-sex"><option value="male"'+(p.sex==='male'?' selected':'')+'>男性</option><option value="female"'+(p.sex==='female'?' selected':'')+'>女性</option></select></div>'
    +'<div class="form-row">'
    +'<div class="form-group"><label class="form-label">年齢</label><input class="form-input" id="pf-age" type="number" min="15" max="99" value="'+(p.age||'')+'" placeholder="27"></div>'
    +'<div class="form-group"><label class="form-label">体重 (kg)</label><input class="form-input" id="pf-weight" type="number" min="30" max="200" value="'+(p.weight||'')+'" placeholder="68"></div>'
    +'</div>'
    +'<div class="form-group"><label class="form-label">身長 (cm)</label><input class="form-input" id="pf-height" type="number" min="100" max="250" value="'+(p.height||'')+'" placeholder="174"></div>'
    +'<div class="form-group"><label class="form-label">身体活動レベル</label>'
    +'<div class="activity-grid">'+acts.map(a=>'<button class="activity-btn'+(a.key===_selAct?' active':'')+'" data-action="sel-act" data-key="'+a.key+'"><div style="font-weight:600">'+a.l+'</div><div style="font-size:10px;color:var(--text3)">'+a.s+'</div></button>').join('')+'</div></div>'
    +'<div class="form-group"><label class="form-label">🎯 メイン目的（1つ選択）</label>'
    +'<div class="activity-grid">'+mainBtns+'</div></div>'
    +'<div class="form-group"><label class="form-label">✨ サブ目的（複数選択可）</label>'
    +'<div class="activity-grid">'+subBtns+'</div>'
    +'<div style="font-size:10px;color:var(--text3);margin-top:6px;line-height:1.6">同じ栄養素が複数目的で増量される場合、最大値を採用します。<br>科学的根拠：ISSN Position Stand 2017、日本人の食事摂取基準2025年版</div></div>'
    +'<button class="btn-primary" data-action="save-profile">保存して栄養目標を更新</button>');
}
function doSaveProfile(){
  const age=parseInt(document.getElementById('pf-age').value);
  const weight=parseFloat(document.getElementById('pf-weight').value);
  const height=parseFloat(document.getElementById('pf-height').value);
  if(!age||!weight||!height){alert('年齢・体重・身長を入力してください');return;}
  master.profile={
    sex:document.getElementById('pf-sex').value,
    age,weight,height,
    activity:_selAct,
    goalMain:_selGoalMain,
    goalSubs:_selGoalSubs.slice()
  };
  _targetsCacheKey='';saveMaster();closeModal();renderNutrients();showBanner('✅ プロフィールを更新しました');
}

// ===================== DRAG & DROP SORT =====================
var _drag={el:null,sec:null,startIdx:-1,overIdx:-1};

function initDragSort(){
  ['morning','noon','evening','suppl'].forEach(function(sec){
    var listEl=document.getElementById('list-'+sec);
    if(!listEl)return;
    // タッチイベントをハンドルに委任
    listEl.addEventListener('touchstart',function(e){
      var handle=e.target.closest('[data-action="drag-handle"]');
      if(!handle)return;
      var item=handle.closest('.food-item');
      if(!item)return;
      _drag.el=item;
      _drag.sec=sec;
      _drag.startIdx=Array.from(listEl.querySelectorAll('.food-item')).indexOf(item);
      item.classList.add('dragging');
      e.preventDefault();
    },{passive:false});

    listEl.addEventListener('touchmove',function(e){
      if(!_drag.el||_drag.sec!==sec)return;
      e.preventDefault();
      var touch=e.touches[0];
      var items=Array.from(listEl.querySelectorAll('.food-item:not(.dragging)'));
      items.forEach(function(it){it.classList.remove('drag-over');});
      var target=document.elementFromPoint(touch.clientX,touch.clientY);
      if(!target)return;
      var overItem=target.closest('.food-item');
      if(overItem&&overItem!==_drag.el){
        overItem.classList.add('drag-over');
        _drag.overIdx=Array.from(listEl.querySelectorAll('.food-item')).indexOf(overItem);
      }
    },{passive:false});

    listEl.addEventListener('touchend',function(e){
      if(!_drag.el||_drag.sec!==sec)return;
      _drag.el.classList.remove('dragging');
      Array.from(listEl.querySelectorAll('.food-item')).forEach(function(it){it.classList.remove('drag-over');});
      if(_drag.overIdx>=0&&_drag.overIdx!==_drag.startIdx){
        var arr=master.daily[sec];
        var moved=arr.splice(_drag.startIdx,1)[0];
        var insertAt=_drag.overIdx>_drag.startIdx?_drag.overIdx-1:_drag.overIdx;
        arr.splice(insertAt,0,moved);
        saveMaster();renderDaily();
      }
      _drag={el:null,sec:null,startIdx:-1,overIdx:-1};
    });
  });
}

// ===================== CONFIRM MODAL =====================
function confirmDo(msg, callback) {
  const overlay = document.getElementById('confirmOverlay');
  document.getElementById('confirmMsg').textContent = msg;
  overlay.classList.add('open');
  document.getElementById('confirmOkBtn').onclick = function() {
    overlay.classList.remove('open');
    callback();
  };
  document.getElementById('confirmCancelBtn').onclick = function() {
    overlay.classList.remove('open');
  };
}

// ===================== EVENT DELEGATION =====================
function doToggle(el){
  const s=getStateForDate(_viewDate);
  s.daily[el.dataset.id]=!s.daily[el.dataset.id];
  saveStateDB();saveSnapshot(_viewDate);renderDaily();
}
function doBulkCheck(el){
  const sec=el.dataset.sec;
  const items=master.daily[sec]||[];
  if(!items.length)return;
  const s=getStateForDate(_viewDate);
  const allChecked=items.every(item=>!!s.daily[item.id]);
  items.forEach(item=>{s.daily[item.id]=!allChecked;});
  saveStateDB();saveSnapshot(_viewDate);renderDaily();
  showBanner(allChecked?'⬜️ '+sec+' を全解除':'✅ '+sec+' を全チェック');
}
function doWeeklyDec(el){
  const dk=todayKey(),weekKey=getCurrentWeekKey();
  const sw=getStateForDate(weekKey);if(!sw.weekly)sw.weekly={};
  const sd=getStateForDate(dk);
  const id=el.dataset.id,cur=sw.weekly[id]||0,next=Math.max(0,cur-1);
  sw.weekly[id]=next;
  if(cur>next){const idx=findLastWeeklyAutoIdx(sd,id);if(idx>=0)sd.manual.splice(idx,1);}
  saveStateDB();saveSnapshot(dk);renderWeekly();
  if(_viewDate===dk){renderDaily();renderNutrients();}
}
function doWeeklyInc(el){
  const dk=todayKey(),weekKey=getCurrentWeekKey();
  const sw=getStateForDate(weekKey);if(!sw.weekly)sw.weekly={};
  const sd=getStateForDate(dk);
  const id=el.dataset.id,item=master.weekly.find(i=>i.id===id);
  const cur=sw.weekly[id]||0,next=cur+1;
  sw.weekly[id]=next;
  if(item&&item.foodKey&&item.amount){
    const nuts=calcNutrientFromItem({foodKey:item.foodKey,amount:item.amount});
    const entry={id:'wauto_'+Date.now()+'_'+Math.random().toString(36).slice(2,8),name:item.name+' '+(item.amount)+'g',ingredients:'',timing:'noon',memo:'週間食材（自動加算）',nuts:nuts,_weeklyAuto:true,_weeklyId:id};
    if(!sd.manual)sd.manual=[];
    sd.manual.push(entry);
  }
  saveStateDB();saveSnapshot(dk);
  if(item&&next>=item.target&&cur<item.target)showBanner('✅ '+item.name+' 週の目標達成！');
  renderWeekly();
  if(_viewDate===dk){renderDaily();renderNutrients();}
}
function doQuickFav(el){
  const idx=parseInt(el.dataset.favidx);
  const fav=loadFavorites()[idx];
  if(fav){
    const n=document.getElementById('mn-name');if(n)n.value=fav.name;
    const ing=document.getElementById('mn-ingredients');if(ing)ing.value=fav.ingredients||'';
    const mem=document.getElementById('mn-memo');if(mem)mem.value=fav.memo||'';
    const tim=document.getElementById('mn-timing');if(tim)tim.value=fav.timing||'evening';
    if(fav.nuts)NUT_KEYS.forEach(k=>{const e2=document.getElementById('mn-'+k);if(e2)e2.value=fav.nuts[k]||0;});
    showBanner('✅ お気に入りから読み込みました');
  }
}
function doQuickRecent(el){
  const n=document.getElementById('mn-name');if(n)n.value=decodeURIComponent(el.dataset.rname||'');
}
function doToggleFavManual(el){
  const s=getStateForDate(_viewDate);
  const m=(s.manual||[])[parseInt(el.dataset.idx)];
  if(m){toggleFavorite(m);renderManualList();}
}
function doHistToggle(el){
  const dk=el.dataset.day,s=getStateForDate(dk);
  s.daily[el.dataset.id]=!s.daily[el.dataset.id];
  saveStateDB();saveSnapshot(dk);renderDayEditPanel(dk);renderDayDetail(dk);renderCalendar();
  if(dk===_viewDate)renderDaily();
}
function doSelAct(el){
  _selAct=el.dataset.key;
  document.querySelectorAll('[data-action="sel-act"]').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
}
function doSelGoalMain(el){
  _selGoalMain=el.dataset.key;
  document.querySelectorAll('[data-action="sel-goal-main"]').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
}
function doSelGoalSub(el){
  const key=el.dataset.key;
  const idx=_selGoalSubs.indexOf(key);
  if(idx>=0){_selGoalSubs.splice(idx,1);el.classList.remove('active');}
  else{_selGoalSubs.push(key);el.classList.add('active');}
}
function doOpenMaster(){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('tab-master').classList.add('active');
  renderMaster();window.scrollTo(0,0);
}
function doCloseMaster(){
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('tab-daily').classList.add('active');
  document.querySelector('[data-tab="daily"]').classList.add('active');
  window.scrollTo(0,0);
}
function doDatePrev(){
  const d=parseDateKey(_viewDate);d.setDate(d.getDate()-1);_viewDate=fmtDate(d);renderDaily();renderNutrients();
}
function doDateNext(){
  if(isToday(_viewDate))return;
  const d=parseDateKey(_viewDate);d.setDate(d.getDate()+1);
  if(fmtDate(d)>todayKey())return;
  _viewDate=fmtDate(d);renderDaily();renderNutrients();
}
function doDateToday(){_viewDate=todayKey();renderDaily();renderNutrients();}
function doSelDay(el){_selDay=el.dataset.day;renderCalendar();renderDayEditPanel(_selDay);renderDayDetail(_selDay);}
function doGraphSel(el){_graphNut=el.dataset.nut;renderGraph();}

document.addEventListener('click',function(e){
  const el=e.target.closest('[data-action]');if(!el)return;
  const a=el.dataset.action;
  const actionMap={
    'toggle':doToggle,
    'bulk-check':doBulkCheck,
    'add-daily':function(el){doAddDaily(el.dataset.sec);},
    'save-add-daily':function(el){doSaveAddDaily(el.dataset.sec);},
    'edit-daily':function(el){doEditDaily(el.dataset.sec,el.dataset.id);},
    'save-edit-daily':function(el){doSaveEditDaily(el.dataset.sec,el.dataset.id);},
    'save-edit-daily-default':function(el){doSaveEditDailyDefault(el.dataset.sec,el.dataset.id);},
    'del-daily':function(el){doDelDaily(el.dataset.sec,el.dataset.id);},
    'add-weekly':doAddWeekly,
    'save-add-weekly':doSaveAddWeekly,
    'edit-weekly':function(el){doEditWeekly(el.dataset.id);},
    'save-edit-weekly':function(el){doSaveEditWeekly(el.dataset.id);},
    'del-weekly':function(el){doDelWeekly(el.dataset.id);},
    'weekly-dec':doWeeklyDec,
    'weekly-inc':doWeeklyInc,
    'add-manual':function(el){doAddManual(_viewDate);},
    'add-manual-hist':function(el){doAddManual(el.dataset.day);},
    'save-manual':function(el){doSaveManual(el.dataset.day);},
    'del-manual':function(el){doDelManual(parseInt(el.dataset.idx),el.dataset.day);},
    'quick-fav':doQuickFav,
    'quick-recent':doQuickRecent,
    'toggle-fav-manual':doToggleFavManual,
    'save-fav-manual':function(el){doSaveFavManual(el.dataset.day);},
    'apply-preset':function(el){applyPreset(el.dataset.preset);},
    'hist-toggle':doHistToggle,
    'hist-del-manual':function(el){doDelManual(parseInt(el.dataset.idx),el.dataset.day);},
    'waist-record':function(){openWaistModal(null);},
    'waist-edit':function(el){openWaistModal(el.dataset.key);},
    'waist-save':doSaveWaist,
    'waist-delete':function(el){doDeleteWaist(el.dataset.key);},
    'profile':doProfile,
    'sel-act':doSelAct,
    'sel-goal-main':doSelGoalMain,
    'sel-goal-sub':doSelGoalSub,
    'save-profile':doSaveProfile,
    'toggle-more':function(){_nutrientShowAll=!_nutrientShowAll;renderNutrients();},
    'reset':doReset,
    'reset-defaults':doResetDefaults,
    'open-master':doOpenMaster,
    'close-master':doCloseMaster,
    'sel-day':doSelDay,
    'graph-sel':doGraphSel,
    'date-prev':doDatePrev,
    'date-next':doDateNext,
    'date-today':doDateToday,
    'add-master':doAddMaster,
    'save-add-master':doSaveAddMaster,
    'edit-master':function(el){doEditMaster(decodeURIComponent(el.dataset.name));},
    'save-edit-master':function(el){doSaveEditMaster(decodeURIComponent(el.dataset.name));},
    'del-master':function(el){doDelMaster(decodeURIComponent(el.dataset.name));},
    'master-search':function(){},
    'gen-nutrition-report':function(){handleGenReport('nutrition');},
    'gen-meal-report':function(){handleGenReport('meal');},
    'gen-daily-report':function(){handleGenReport('daily');},
    'import-ai-json':importAIJson,
    'confirm-ai-import':confirmAIImport
  };
  const handler=actionMap[a];
  if(handler)handler(el);
});

// Prompt copy buttons (using data-prompt)
document.addEventListener('click',function(e){
  var btn=e.target.closest('[data-prompt]');
  if(btn)copyPrompt(btn.dataset.prompt);
  // AI copy report button
  if(e.target.id==='ai-copy-report-btn')copyReport();
});

document.getElementById('masterSearch').addEventListener('input',function(){
  _masterSearch=this.value;renderMaster();
});

// Tabs
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click',function(){
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    this.classList.add('active');
    const t=this.dataset.tab;
    document.getElementById('tab-'+t).classList.add('active');
    if(t==='daily'){renderDaily();renderWeekly();}
    if(t==='nutrient')renderNutrients();
    if(t==='history'){renderHistStats();renderSummary();renderWaist();renderCalendar();renderGraph();if(_selDay){renderDayEditPanel(_selDay);renderDayDetail(_selDay);}}
  });
});

// Period tabs
document.querySelectorAll('.period-tab').forEach(tab=>{
  tab.addEventListener('click',function(){
    document.querySelectorAll('.period-tab').forEach(t=>t.classList.remove('active'));
    this.classList.add('active');_histPeriod=this.dataset.period;
    renderHistStats();renderSummary();renderGraph();
  });
});

// Cal nav
document.getElementById('calPrev').addEventListener('click',()=>{_calM--;if(_calM<0){_calM=11;_calY--;}renderCalendar();});
document.getElementById('calNext').addEventListener('click',()=>{_calM++;if(_calM>11){_calM=0;_calY++;}renderCalendar();});

// Modal
document.getElementById('modalCloseBtn').addEventListener('click',closeModal);
document.getElementById('modalOverlay').addEventListener('click',function(e){if(e.target===this)closeModal();});

function doReset(){
  confirmDo('今日のチェックをリセットしますか？', function(){
    const dk=todayKey();
    stateDB[dk]={daily:{},manual:[]};
    saveStateDB();_viewDate=dk;renderDaily();showBanner('🔄 リセットしました');
  });
}
function doResetDefaults(){
  confirmDo('デフォルト食材を初期設定に戻しますか？\n（編集した食材リストは全てリセットされます）', function(){
    master.daily=JSON.parse(JSON.stringify(DEFAULT_DAILY));
    master.weekly=JSON.parse(JSON.stringify(DEFAULT_WEEKLY));
    saveMaster();renderDaily();renderWeekly();showBanner('↩️ 初期設定に戻しました');
  });
}

function showBanner(msg){
  const el=document.getElementById('banner');el.textContent=msg;el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2500);
}
function updateDate(){
  const d=new Date(),days=['日','月','火','水','木','金','土'];
  document.getElementById('headerDate').innerHTML=d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日（'+days[d.getDay()]+'）<br>'+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
}

// ===================== ★ 新機能 ★ =====================

// ソート状態
var _nutrientSort='default';
function setNutrientSort(mode){
  _nutrientSort=mode;
  var db=document.getElementById('sort-default-btn');
  var ab=document.getElementById('sort-asc-btn');
  if(db)db.classList.toggle('active',mode==='default');
  if(ab)ab.classList.toggle('active',mode==='asc');
  renderNutrients();
}

// プリセット定義
var GOAL_PRESETS={
  default: {label:'標準',     emoji:'📋', main:'maintain', subs:[]},
  diet:    {label:'脂質制限', emoji:'🥗', main:'fatloss',  subs:['visceral']},
  muscle:  {label:'筋トレ期', emoji:'💪', main:'bulk',     subs:['sexual','energy']},
  gout:    {label:'痛風ケア', emoji:'🔵', main:'health',   subs:['gut']},
  immune:  {label:'免疫強化', emoji:'🛡', main:'health',   subs:['immune']},
};
function renderPresetBar(){
  var el=document.getElementById('preset-bar');
  if(!el)return;
  var cur=master.profile;
  el.innerHTML=Object.entries(GOAL_PRESETS).map(function(e){
    var k=e[0],p=e[1];
    var isActive=cur.goalMain===p.main&&JSON.stringify((cur.goalSubs||[]).slice().sort())===JSON.stringify(p.subs.slice().sort());
    return '<button class="preset-btn'+(isActive?' active':'')+'" data-action="apply-preset" data-preset="'+k+'">'+p.emoji+'<br><span>'+p.label+'</span></button>';
  }).join('');
}
function applyPreset(key){
  var p=GOAL_PRESETS[key];if(!p)return;
  master.profile.goalMain=p.main;
  master.profile.goalSubs=p.subs.slice();
  saveMaster();renderPresetBar();renderNutrients();
  showBanner('✅ プリセット「'+p.emoji+' '+p.label+'」を適用しました');
}

// シナジールール
var SYNERGY_RULES=[
  {needs:['fe'],     helpers:['vitC'],    tip:'💡 鉄分を摂る日はビタミンCも！吸収率が約2倍になります'},
  {needs:['vitD'],   helpers:['ca'],      tip:'💡 カルシウムはビタミンDがあると骨への吸収率が大幅UP'},
  {needs:['vitA'],   helpers:['fat'],     tip:'💡 ビタミンAは脂溶性。良質な油と一緒に摂ると吸収アップ'},
  {needs:['vitE'],   helpers:['vitC'],    tip:'💡 ビタミンEはビタミンCと組み合わせると抗酸化効果が持続'},
  {needs:['betaC'],  helpers:['fat'],     tip:'💡 β-カロテンは炒め物にすると吸収率が10倍以上に'},
  {needs:['zinc'],   helpers:['protein'], tip:'💡 亜鉛はタンパク質と一緒に摂ると利用効率が高まります'},
  {needs:['vitB1'],  helpers:['vitB2'],   tip:'💡 ビタミンB1とB2は相乗効果あり。疲労回復に効果的'},
  {needs:['dha'],    helpers:['vitE'],    tip:'💡 DHAはビタミンEと合わせると酸化防止で効果が持続'},
];
function getSynergyTip(totals,targets){
  var lowKeys=Object.entries(targets)
    .filter(function(e){var k=e[0],t=e[1];return !k.startsWith('_')&&!t.limit&&!t.info&&t.t>0&&(totals[k]||0)/t.t<0.7;})
    .map(function(e){return e[0];});
  if(!lowKeys.length)return null;
  for(var i=0;i<SYNERGY_RULES.length;i++){
    var rule=SYNERGY_RULES[i];
    if(rule.needs.every(function(k){return lowKeys.indexOf(k)>=0;}))return rule.tip;
  }
  return null;
}

// ウィークポイント通知
function renderWeakPointBanner(){
  var banner=document.getElementById('weak-point-banner');
  var listEl=document.getElementById('weak-point-list');
  if(!banner||!listEl)return;
  var targets=getCachedTargets(master.profile||DEFAULT_PROFILE);
  var now=new Date();
  var past3=[];
  for(var i=1;i<=3;i++){var d=new Date(now);d.setDate(d.getDate()-i);past3.push(fmtDate(d));}
  var recs=past3.map(function(k){return hist[k];}).filter(Boolean);
  if(recs.length<2){banner.style.display='none';return;}
  var chronic=[];
  Object.entries(targets).forEach(function(e){
    var k=e[0],t=e[1];
    if(k.startsWith('_')||t.limit||t.info)return;
    var lowCount=recs.filter(function(r){var cur=r.nutrients&&r.nutrients[k]||0;return t.t>0&&cur/t.t<0.6;}).length;
    if(lowCount>=2){
      var avg=recs.reduce(function(s,r){return s+(r.nutrients&&r.nutrients[k]||0);},0)/recs.length;
      chronic.push({label:t.label,pct:Math.round(avg/t.t*100),unit:t.unit,avg:avg.toFixed(1)});
    }
  });
  if(!chronic.length){banner.style.display='none';return;}
  chronic.sort(function(a,b){return a.pct-b.pct;});
  listEl.innerHTML=chronic.slice(0,4).map(function(n){
    return '<span style="display:inline-block;background:#FFF0C0;border:1px solid #F0C040;border-radius:6px;padding:2px 8px;margin:2px 3px 2px 0;font-size:11px">'
      +'<strong>'+n.label+'</strong> 平均'+n.avg+n.unit+' <span style="color:#B07800">('+n.pct+'%)</span></span>';
  }).join('');
  banner.style.display='block';
}

// シナジーtip（毎日タブ用）
function renderSynergyTipDaily(){
  var el=document.getElementById('synergy-tip-daily');
  if(!el)return;
  var targets=getCachedTargets(master.profile||DEFAULT_PROFILE);
  var totals=aggregateNutrients(_viewDate);
  var tip=getSynergyTip(totals,targets);
  el.innerHTML=tip?'<div style="background:linear-gradient(135deg,#F0FAF5,#E8F8EF);border:1.5px solid #52B788;border-radius:10px;padding:9px 12px;font-size:11px;color:#1B4332;line-height:1.6;margin-bottom:10px">'+tip+'</div>':'';
}

// お気に入り
function loadFavorites(){try{return JSON.parse(localStorage.getItem('nm_favs_v1')||'[]');}catch(e){return[];}}
function saveFavorites(favs){try{localStorage.setItem('nm_favs_v1',JSON.stringify(favs));}catch(e){}}
function toggleFavorite(entry){
  var favs=loadFavorites();
  var idx=favs.findIndex(function(f){return f.name===entry.name;});
  if(idx>=0){favs.splice(idx,1);showBanner('☆ お気に入りから削除しました');}
  else{
    favs.unshift({name:entry.name,ingredients:entry.ingredients||'',timing:entry.timing||'evening',nuts:entry.nuts,memo:entry.memo||''});
    if(favs.length>10)favs=favs.slice(0,10);
    showBanner('⭐ お気に入りに追加しました');
  }
  saveFavorites(favs);
}
function doSaveFavManual(dk){
  var name=document.getElementById('mn-name').value.trim();if(!name){alert('料理名を入力してください');return;}
  var nuts=readNutInputs();
  var entry={id:genId('m'),name:name,ingredients:document.getElementById('mn-ingredients').value.trim(),timing:document.getElementById('mn-timing').value,memo:document.getElementById('mn-memo').value.trim(),nuts:nuts};
  toggleFavorite(entry);
  var s=getStateForDate(dk);
  if(!s.manual)s.manual=[];
  s.manual.push(entry);
  saveStateDB();saveSnapshot(dk);closeModal();
  if(dk===_viewDate){renderManualList();renderNutrients();}
  if(_selDay===dk){renderDayEditPanel(dk);renderDayDetail(dk);}
  renderCalendar();
}

// 最近使った食材（過去14日のmanual）
function getRecentFoods(){
  var counts={};
  var now=new Date();
  for(var i=0;i<14;i++){
    var dk=fmtDate(new Date(now.getTime()-i*86400000));
    var s=getStateForDate(dk);
    (s.manual||[]).forEach(function(m){if(!m._weeklyAuto&&m.name)counts[m.name]=(counts[m.name]||0)+1;});
  }
  return Object.entries(counts).sort(function(a,b){return b[1]-a[1];}).slice(0,5).map(function(e){return {name:e[0],cnt:e[1]};});
}

// ===================== ★ END 新機能 ★ =====================

// ===================== INIT =====================
try{
  // 最優先：日付表示と毎日タブ（初期表示タブ）のみ
  updateDate();
  renderDaily();
  // 残りは次フレームで遅延描画（体感速度UP）
  requestAnimationFrame(function(){
    try{
      renderWeekly();
      renderWeakPointBanner();
      renderSynergyTipDaily();
      initDragSort();
      setInterval(updateDate,30000);
    }catch(e){console.error('Deferred init error:',e);}
  });
}catch(initErr){
  console.error('Init error:',initErr);
  // 致命的エラー → masterを初期化して再試行
  master={
    daily:JSON.parse(JSON.stringify(DEFAULT_DAILY)),
    weekly:JSON.parse(JSON.stringify(DEFAULT_WEEKLY)),
    profile:JSON.parse(JSON.stringify(DEFAULT_PROFILE))
  };
  saveMaster();
  try{
    updateDate();
    renderDaily();renderWeekly();
    initDragSort();
    showBanner('⚠️ データを修復しました');
  }catch(e2){
    document.body.innerHTML='<div style="padding:40px;text-align:center;font-family:sans-serif"><h2>エラー</h2><p>アプリの初期化に失敗しました。<br>ブラウザのキャッシュ・データをクリアして再読み込みしてください。</p><p style="color:#999;font-size:11px">'+(e2.message||'')+'</p></div>';
  }
}
setInterval(()=>{
  const n=new Date();
  // 04:00ちょうどに日付切替（_viewDateが昨日のままなら今日に更新）
  if(n.getHours()===4&&n.getMinutes()===0){
    const newToday=fmtDate(n);
    if(_viewDate!==newToday){
      _viewDate=newToday;
      try{renderDaily();renderWeekly();}catch(e){}
      showBanner('🌅 新しい1日が始まりました');
    }
  }
},60000);
window.addEventListener('resize',()=>{if(document.getElementById('tab-history').classList.contains('active')){renderGraph();drawWaistGraph();}});

// ===================== AI連携機能 =====================

// ---- プロンプトテンプレート生成 ----
function computeLowNuts(totals,targets){
  const lowNuts=[];
  Object.entries(targets).forEach(function(e){
    const k=e[0],t=e[1];
    if(k.startsWith('_'))return;
    if(t.limit||t.info)return;
    const cur=totals[k]||0;
    const pct=t.t>0?(cur/t.t*100):100;
    if(pct<70)lowNuts.push({label:t.label,cur:cur,target:t.t,unit:t.unit,pct:Math.round(pct)});
  });
  lowNuts.sort(function(a,b){return a.pct-b.pct;});
  return lowNuts;
}

function buildPromptContext(){
  const p=master.profile||DEFAULT_PROFILE;
  const targets=calcTargets(p);
  const totals=aggregateNutrients(todayKey());

  const aL={sedentary:'座位中心（デスクワーク）',light:'軽い運動（週1〜2回）',moderate:'適度な運動（週3〜5回）',active:'活発な運動（週6〜7回）',vactive:'非常に活発（肉体労働）'};
  const mainCfg=GOAL_MAIN_CONFIG[p.goalMain||'maintain'];
  const subs=(p.goalSubs||[]).map(function(k){const c=GOAL_SUB_CONFIG[k];return c?c.label:'';}).filter(Boolean);

  const lowNuts=computeLowNuts(totals,targets);

  return {p,targets,totals,aL,mainCfg,subs,lowNuts};
}

const PROMPT_TEMPLATES={
  nutrition_advice:function(){
    const ctx=buildPromptContext();
    const p=ctx.p;
    const shortfall=ctx.lowNuts.slice(0,5).map(function(n){
      return '・'+n.label+': '+n.cur.toFixed(1)+n.unit+' / 目標'+n.target+n.unit+' ('+n.pct+'%)';
    }).join('\n');
    return '私は栄養管理アプリで食事を記録している'+p.age+'歳'+(p.sex==='male'?'男性':'女性')+'\n'
      +'体重'+p.weight+'kg・身長'+p.height+'cm・活動量: '+(ctx.aL[p.activity]||'')+'\n'
      +'目的: '+(ctx.mainCfg?ctx.mainCfg.label:'体重維持')+(ctx.subs.length?' + '+ctx.subs.join('・'):'')+'\n\n'
      +'【今日の不足栄養素】\n'+shortfall+'\n\n'
      +'上記の不足栄養素を補うために、具体的な食材・料理を3〜5つ教えてください。'
      +'食べやすく、実践しやすいものをお願いします。\n'
      +'パーソナルトレーナーとして、目標・体型を踏まえた率直なアドバイスをお願いします。';
  },
  meal_eval:function(){
    const ctx=buildPromptContext();
    const p=ctx.p;
    const s=getStateForDate(todayKey());
    const foods=[];
    Object.values(master.daily).flat().forEach(function(item){
      if(s.daily[item.id])foods.push(getEffectiveItem(item,todayKey()).name+'（'+getEffectiveItem(item,todayKey()).detail+'）');
    });
    (s.manual||[]).forEach(function(m){foods.push(m.name+(m.ingredients?' ['+m.ingredients+']':''));});
    const nutsLines=['kcal','protein','fat','toushitsu','salt','sugar','purine','fiber'].map(function(k){
      const t=ctx.targets[k];if(!t)return '';
      const cur=ctx.totals[k]||0;
      if(t.info)return t.label+': '+cur.toFixed(1)+t.unit+'（目安'+t.t+t.unit+'）';
      if(t.limit){
        const st=cur>t.t?'超過':'範囲内';
        return t.label+'（上限）: '+cur.toFixed(1)+t.unit+' / '+t.t+t.unit+' '+st;
      }
      const pct=t.t>0?Math.round(cur/t.t*100):0;
      return t.label+': '+cur.toFixed(1)+t.unit+' / '+t.t+t.unit+' ('+pct+'%)';
    }).filter(Boolean).join('\n');
    return '今日の食事記録です。評価とアドバイスをお願いします。\n\n'
      +'【プロフィール】'+p.age+'歳 '+(p.sex==='male'?'男性':'女性')+' '
      +(ctx.mainCfg?ctx.mainCfg.label:'体重維持')+'目的\n\n'
      +'【食べたもの】\n'+foods.map(f=>'・'+f).join('\n')+'\n\n'
      +'【栄養素摂取状況】\n'+nutsLines+'\n\n'
      +'栄養学的な観点と健康目標の観点で、良かった点・改善すべき点を教えてください。\n'
      +'パーソナルトレーナーとして、褒めるだけでなく正直なフィードバックをお願いします。';
  },
  recipe_nuts:function(){
    return '以下の料理・食品の栄養素を教えてください。\n\n'
      +'━━━━━━━━━━━━━━━━━━━━━━\n'
      +'【回答前に必ず確認すること】\n'
      +'━━━━━━━━━━━━━━━━━━━━━━\n'
      +'以下のいずれかに当てはまる場合は、JSONを返す前に必ず質問してください。\n\n'
      +'A）ブランド名・製品名が不明または曖昧な場合\n'
      +'   → 「ブランド名・製品名を教えてください」\n'
      +'   → 例：「スパゲッティ」→「バリラ No.5 ですか？マ・マーですか？」\n'
      +'   → 公式栄養表示が使える製品（市販品・缶詰・加工食品）は特に重要\n\n'
      +'B）コンビニ・ファストフード・チェーン飲食店の料理の場合\n'
      +'   → 「お店名とメニュー名を教えてください」\n'
      +'   → 例：「牛丼」→「吉野家・すき家・松屋のどちらですか？並盛ですか？」\n\n'
      +'C）手料理で食材・量が不明な場合\n'
      +'   → 「主な食材と大まかな量を教えてください」\n'
      +'   → 例：「野菜炒め」→「食材（豚肉何g、キャベツ何g等）を教えてください」\n\n'
      +'D）量（グラム数・個数・杯数）が未指定の場合\n'
      +'   → 「何g / 何個 / 何人前 食べましたか？」\n\n'
      +'━━━━━━━━━━━━━━━━━━━━━━\n'
      +'【栄養値の算出ルール（厳守）】\n'
      +'━━━━━━━━━━━━━━━━━━━━━━\n'
      +'1. メーカー公式の栄養表示（パッケージ記載値）を最優先で使用する\n'
      +'2. 公式値がない微量栄養素のみ、文部科学省「日本食品標準成分表（八訂）増補2023年版」で補完する\n'
      +'   ※プリン体(purine, mg)は八訂に無いため、痛風・尿酸財団等の値で推定し purine_est とする\n'
      +'   ※糖類(sugar, g)が不明な場合は推定し sugar_est とする\n'
      +'3. 公式値がある栄養素 → キー名そのまま（例: "kcal": 320）\n'
      +'   推定・補完値 → キー名末尾に _est を付ける（例: "vitD_est": 2.1）\n'
      +'4. PFCとkcalの整合性を必ず検算する\n'
      +'   計算式: protein×4 + fat×9 + carb×4 ≒ kcal（±5%以内）\n'
      +'   ※ carb = 食物繊維込みの総炭水化物量\n'
      +'   誤差が5%を超える場合は糖アルコール等を考慮して補正し、理由をkcal_checkに記載\n'
      +'5. 複数食材の場合はingredientsに「食材名 重量g」形式で全食材を列挙する\n\n'
      +'━━━━━━━━━━━━━━━━━━━━━━\n'
      +'【回答フォーマット（JSONのみ。説明文・コードブロック記号は一切不要）】\n'
      +'━━━━━━━━━━━━━━━━━━━━━━\n'
      +'{\n'
      +'  "name": "料理・食品名",\n'
      +'  "timing": "morning / noon / evening / snack のいずれか",\n'
      +'  "source": "算出根拠（例：バリラ公式表示＋八訂補完）",\n'
      +'  "ingredients": "食材と量（例：鶏胸肉150g、ご飯200g）",\n'
      +'  "kcal": 0,\n'
      +'  "protein": 0,\n'
      +'  "fat": 0,\n'
      +'  "carb": 0,\n'
      +'  "fiber": 0,\n'
      +'  "sugar": 0,\n'
      +'  "salt": 0,\n'
      +'  "purine": 0,\n'
      +'  "vitC": 0,\n'
      +'  "vitD": 0,\n'
      +'  "zinc": 0,\n'
      +'  "dha": 0,\n'
      +'  "vitA": 0,\n'
      +'  "betaC": 0,\n'
      +'  "vitB1": 0,\n'
      +'  "vitB2": 0,\n'
      +'  "vitE": 0,\n'
      +'  "vitK": 0,\n'
      +'  "ca": 0,\n'
      +'  "fe": 0,\n'
      +'  "k": 0,\n'
      +'  "p": 0,\n'
      +'  "kcal_check": "43.3×4 + 37.7×9 + 160.5×4 = 1155.7kcal（誤差1.7%）のように記載"\n'
      +'}\n\n'
      +'※ 推定値のキーは _est を付けること（例: "vitD_est": 2.1）\n'
      +'※ 公式値がある場合は _est を付けない（例: "kcal": 320）\n\n'
      +'料理名・食品名（製品名・ブランド・量もわかれば記載）：\n[ここに入力]';
  },
  weekly_review:function(){
    const ctx=buildPromptContext();
    const p=ctx.p;
    const days=Array.from({length:7},function(_,i){const d=new Date();d.setDate(d.getDate()-(6-i));return fmtDate(d);});
    const recs=days.map(function(d){return hist[d];}).filter(Boolean);
    const avgPct=recs.length?Math.round(recs.reduce(function(s,r){return s+r.pct;},0)/recs.length):0;
    const nutAvgs={};
    NUT_KEYS.forEach(function(k){
      var sum=0,cnt=0;
      recs.forEach(function(r){if(r.nutrients&&r.nutrients[k]!==undefined){sum+=r.nutrients[k];cnt++;}});
      nutAvgs[k]=cnt?sum/cnt:0;
    });
    const topLow=NUT_KEYS.map(function(k){
      const t=ctx.targets[k];if(!t||k.startsWith('_'))return null;
      if(t.limit||t.info)return null; // 上限型・参考型は「不足」対象外
      const pct=t.t>0?(nutAvgs[k]||0)/t.t*100:100;
      return {key:k,label:t.label,avg:nutAvgs[k]||0,unit:t.unit,target:t.t,pct:Math.round(pct)};
    }).filter(Boolean).sort(function(a,b){return a.pct-b.pct;}).slice(0,5);
    // 上限型（塩分・糖類・プリン体）で平均が目標を超過しているもの
    const topOver=NUT_KEYS.map(function(k){
      const t=ctx.targets[k];if(!t||k.startsWith('_')||!t.limit)return null;
      const avg=nutAvgs[k]||0;
      if(avg<=t.t)return null;
      return {label:t.label,avg:avg,unit:t.unit,target:t.t,over:avg-t.t};
    }).filter(Boolean).sort(function(a,b){return b.over-a.over;});
    const overBlock=topOver.length
      ? '【⚠️ 過剰ぎみの項目（上限超過・週平均）】\n'
        +topOver.map(function(n){return '・'+n.label+': 平均'+n.avg.toFixed(1)+n.unit+' / 上限'+n.target+n.unit+'（+'+n.over.toFixed(1)+n.unit+'超過）';}).join('\n')+'\n\n'
      : '';
    return '【週間食事記録】過去7日間のサマリーです。改善提案をお願いします。\n\n'
      +'【プロフィール】'+p.age+'歳 '+(p.sex==='male'?'男性':'女性')+' '
      +'体重'+p.weight+'kg / '+(ctx.mainCfg?ctx.mainCfg.label:'体重維持')+'目的\n\n'
      +'平均達成率: '+avgPct+'%\n\n'
      +'【特に不足しがちな栄養素（週平均）】\n'
      +topLow.map(function(n){return '・'+n.label+': 平均'+n.avg.toFixed(1)+n.unit+' / 目標'+n.target+n.unit+' ('+n.pct+'%)';}).join('\n')+'\n\n'
      +overBlock
      +'週間の傾向を踏まえて、継続すべき良い習慣と、改善すべき課題を教えてください。\n'
      +'具体的な食材・食べ方の変更提案もお願いします。';
  }
};

function copyPrompt(type){
  const fn=PROMPT_TEMPLATES[type];
  if(!fn)return;
  const text=fn();
  navigator.clipboard.writeText(text).then(function(){
    const badge=document.getElementById('badge-'+type);
    const btn=document.querySelector('[data-prompt="'+type+'"]');
    if(badge){badge.textContent='✅ コピー済み';badge.classList.add('done');}
    if(btn)btn.classList.add('copied');
    showBanner('📋 プロンプトをコピーしました');
    setTimeout(function(){
      if(badge){badge.textContent='コピー';badge.classList.remove('done');}
      if(btn)btn.classList.remove('copied');
    },3000);
  }).catch(function(){
    // フォールバック
    const ta=document.createElement('textarea');
    ta.value=text;ta.style.position='fixed';ta.style.opacity='0';
    document.body.appendChild(ta);ta.select();document.execCommand('copy');
    document.body.removeChild(ta);
    showBanner('📋 プロンプトをコピーしました');
  });
}

// ---- レポート生成 ----
function generateNutritionReport(){
  const ctx=buildPromptContext();
  const p=ctx.p;
  const lines=['📊 栄養摂取状況レポート','='.repeat(28),''];
  const d=new Date();
  lines.push('📅 記録日: '+d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日');
  lines.push('');
  lines.push('【プロフィール】');
  lines.push((p.sex==='male'?'男性':'女性')+' '+p.age+'歳 / 身長'+p.height+'cm 体重'+p.weight+'kg');
  lines.push('活動量: '+(ctx.aL[p.activity]||''));
  lines.push('目的: '+(ctx.mainCfg?ctx.mainCfg.label:'体重維持')+(ctx.subs.length?' + '+ctx.subs.join('・'):''));
  lines.push('');
  lines.push('【栄養素摂取状況】');
  Object.entries(ctx.targets).forEach(function(e){
    const k=e[0],t=e[1];
    if(k.startsWith('_'))return;
    const cur=ctx.totals[k]||0;
    if(t.info){
      lines.push('▫️ '+t.label+': '+cur.toFixed(1)+t.unit+'（目安'+t.t+t.unit+'）');
      return;
    }
    if(t.limit){
      const overL=cur>t.t;
      const nearL=!overL&&cur>t.t*0.8;
      const markL=overL?'🔴':nearL?'🟡':'✅';
      const stL=overL?('超過 +'+(cur-t.t).toFixed(1)+t.unit):'範囲内';
      lines.push(markL+' '+t.label+'（上限）: '+cur.toFixed(1)+t.unit+' / '+t.t+t.unit+' '+stL);
      return;
    }
    const pct=t.t>0?Math.round(cur/t.t*100):0;
    const bar=pct>=100?'✅':pct>=70?'🟡':'🔴';
    lines.push(bar+' '+t.label+': '+cur.toFixed(1)+t.unit+' / '+t.t+t.unit+' ('+pct+'%)');
  });
  lines.push('');
  lines.push('【特に不足している栄養素TOP5】');
  ctx.lowNuts.slice(0,5).forEach(function(n){
    lines.push('⚠️ '+n.label+': '+n.pct+'% 達成 (あと'+(n.target-n.cur).toFixed(1)+n.unit+')');
  });
  // 過剰の要注意：上限型(目標超過)・脂質(30%E超)・UL設定栄養素(UL超過)。たんぱく質は公式上限なしで除外
  const overList=[];
  Object.entries(ctx.targets).forEach(function(e){
    const k=e[0],t=e[1];
    if(k.startsWith('_')||k==='kcal'||k==='protein'||t.info)return;
    const cur=ctx.totals[k]||0;
    var ceiling=null,kind='';
    if(t.limit){ceiling=t.t;kind='上限';}
    else if(k==='fat'){ceiling=t.ul;kind='脂質目標上限';}
    else if(t.ul&&t.ul<99999){ceiling=t.ul;kind='耐容上限';}
    if(ceiling!==null&&cur>ceiling)overList.push({label:t.label,cur:cur,t:ceiling,unit:t.unit,kind:kind,over:cur-ceiling});
  });
  if(overList.length){
    lines.push('');
    lines.push('【⚠️ 過剰な栄養素】');
    overList.sort(function(a,b){return (b.over/b.t)-(a.over/a.t);}).forEach(function(n){
      lines.push('🔴 '+n.label+'（'+n.kind+'）: '+n.cur.toFixed(1)+n.unit+' / '+n.t+n.unit+'（+'+n.over.toFixed(1)+n.unit+'超過）');
    });
  }
  return lines.join('\n');
}

function generateDailyFoodReport(){
  const ctx=buildPromptContext();
  const p=ctx.p;
  const targets=ctx.targets;
  const dk=todayKey();
  const s=getStateForDate(dk);
  const secLabels={morning:'朝・間食',noon:'昼食',evening:'夕食',suppl:'サプリメント'};
  const lines=['📋 食べたものの評価レポート','='.repeat(28),''];
  lines.push('※「毎日タブでチェックした食材」＋「週間タブで食べた分」＋「手動記録」＝実際に食べたものの分析です。');
  lines.push('対象日: '+dk);
  lines.push('');
  lines.push('【プロフィール / 目的】');
  lines.push((p.sex==='male'?'男性':'女性')+' '+p.age+'歳 / '+p.height+'cm '+p.weight+'kg / '+(ctx.aL[p.activity]||''));
  lines.push('目的: '+(ctx.mainCfg?ctx.mainCfg.label:'体重維持')+(ctx.subs.length?' + '+ctx.subs.join('・'):''));
  lines.push('');
  const dayTotals=NUT_ZERO();
  const highSalt=[], highFat=[], highPurine=[];
  let eatenCount=0;
  Object.entries(master.daily).forEach(function(e){
    const sec=e[0],items=e[1];
    const eaten=items.filter(function(item){return s.daily&&s.daily[item.id];});
    if(!eaten.length)return;
    lines.push('【'+secLabels[sec]+'】');
    eaten.forEach(function(item){
      const eff=getEffectiveItem(item,dk);
      const n=calcNutrientFromItem(eff);
      NUT_KEYS.forEach(function(k){dayTotals[k]=+(dayTotals[k]+(n[k]||0)).toFixed(3);});
      eatenCount++;
      lines.push('・'+eff.name+' ('+eff.detail+') → '
        +n.kcal.toFixed(0)+'kcal / P'+n.protein.toFixed(1)+'g / 脂質'+n.fat.toFixed(1)+'g / 糖質'+(n.toushitsu||0).toFixed(1)+'g / 塩分'+(n.salt||0).toFixed(2)+'g / プリン体'+(n.purine||0).toFixed(0)+'mg');
      if((n.salt||0)>=1.0)highSalt.push({name:eff.name,salt:n.salt});
      if((n.fat||0)>=15)highFat.push({name:eff.name,fat:n.fat});
      if((n.purine||0)>=100)highPurine.push({name:eff.name,purine:n.purine});
    });
    lines.push('');
  });
  if(s.manual&&s.manual.length){
    lines.push('【週間食材・手動記録】');
    s.manual.forEach(function(m){
      const n=m.nuts||{};
      NUT_KEYS.forEach(function(k){dayTotals[k]=+(dayTotals[k]+(n[k]||0)).toFixed(3);});
      eatenCount++;
      lines.push('・'+m.name+(m._weeklyAuto?'（週間）':'')+' → '
        +(n.kcal||0).toFixed(0)+'kcal / P'+(n.protein||0).toFixed(1)+'g / 脂質'+(n.fat||0).toFixed(1)+'g / 糖質'+(n.toushitsu||0).toFixed(1)+'g / 塩分'+(n.salt||0).toFixed(2)+'g / プリン体'+(n.purine||0).toFixed(0)+'mg');
      if((n.salt||0)>=1.0)highSalt.push({name:m.name,salt:(n.salt||0)});
      if((n.fat||0)>=15)highFat.push({name:m.name,fat:(n.fat||0)});
      if((n.purine||0)>=100)highPurine.push({name:m.name,purine:(n.purine||0)});
    });
    lines.push('');
  }
  if(eatenCount===0){
    lines.push('⚠️ まだ食べた記録がありません。');
    lines.push('毎日タブで食べた食材にチェックを入れ、週間タブで食べた分は「＋」を押してから生成してください。');
    return lines.join('\n');
  }
  lines.push('【食べたものの合計 vs 目標】');
  ['kcal','protein','fat','satfat','toushitsu','salt','sugar','purine','fiber','dha','vitC','vitD','zinc','ca','fe'].forEach(function(k){
    const t=targets[k];if(!t)return;
    const cur=dayTotals[k]||0;
    if(t.info){
      lines.push('▫️ '+t.label+': '+cur.toFixed(1)+t.unit+'（目安'+t.t+t.unit+'）');
    }else if(t.limit){
      const mark=cur>t.t?'🔴超過':cur>t.t*0.8?'🟡':'✅';
      lines.push(mark+' '+t.label+'（上限）: '+cur.toFixed(1)+t.unit+' / '+t.t+t.unit);
    }else{
      const pct=t.t>0?Math.round(cur/t.t*100):0;
      const mark=pct>=100?'✅':pct>=70?'🟡':'🔴';
      lines.push(mark+' '+t.label+': '+cur.toFixed(1)+t.unit+' / '+t.t+t.unit+' ('+pct+'%)');
    }
  });
  lines.push('');
  if(highSalt.length){
    lines.push('【塩分が多めの食材（1g以上）】');
    highSalt.sort(function(a,b){return b.salt-a.salt;}).forEach(function(x){
      lines.push('⚠️ '+x.name+': '+x.salt.toFixed(2)+'g');
    });
    lines.push('');
  }
  if(highFat.length){
    lines.push('【脂質が多めの食材（15g以上）】');
    highFat.sort(function(a,b){return b.fat-a.fat;}).forEach(function(x){
      lines.push('⚠️ '+x.name+': '+x.fat.toFixed(1)+'g');
    });
    lines.push('');
  }
  if(highPurine.length){
    lines.push('【プリン体が多めの食材（100mg以上）】');
    highPurine.sort(function(a,b){return b.purine-a.purine;}).forEach(function(x){
      lines.push('⚠️ '+x.name+': '+x.purine.toFixed(0)+'mg');
    });
    lines.push('');
  }
  lines.push('='.repeat(28));
  lines.push('【AIへの相談】');
  lines.push('上記は私がこの日に実際に食べたものとその栄養分析です。');
  lines.push('目的（'+(ctx.mainCfg?ctx.mainCfg.label:'体重維持')+'）の観点から、良い点・不足や過剰のリスク・具体的な改善案（追加/置き換え/減らす食材）を教えてください。');
  lines.push('栄養成分は日本食品標準成分表(八訂)＋プリン体は痛風・尿酸財団データ、目標は日本人の食事摂取基準2025年版に基づいています。糖類の一部は推定値です。');
  return lines.join('\n');
}


function generateMealReport(){
  const ctx=buildPromptContext();
  const p=ctx.p;
  const s=getStateForDate(todayKey());
  const d=new Date();
  const lines=['🍽️ 食事記録レポート','='.repeat(28),''];
  lines.push('📅 '+d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日');
  lines.push('');
  const secLabels={morning:'朝・間食',noon:'昼食',evening:'夕食',suppl:'サプリメント'};
  Object.entries(master.daily).forEach(function(e){
    const sec=e[0],items=e[1];
    const checked=items.filter(function(item){return !!s.daily[item.id];});
    const all=items.length;
    lines.push('【'+secLabels[sec]+' '+checked.length+'/'+all+'】');
    checked.forEach(function(item){
      const eff=getEffectiveItem(item,todayKey());
      const n=calcNutrientFromItem(eff);
      lines.push('✓ '+eff.name+' ('+eff.detail+')'+
        (n.kcal>0?' | '+n.kcal.toFixed(0)+'kcal':'')+
        (n.protein>0?' P:'+n.protein.toFixed(1)+'g':''));
    });
    const unchecked=items.filter(function(item){return !s.daily[item.id];});
    unchecked.forEach(function(item){
      lines.push('☐ '+item.name+' ('+item.detail+')');
    });
    lines.push('');
  });
  if((s.manual||[]).length){
    lines.push('【手動記録】');
    (s.manual||[]).forEach(function(m){
      lines.push('✓ '+m.name+(m.ingredients?' ['+m.ingredients+']':''));
      if(m.nuts&&m.nuts.kcal>0)lines.push('  → '+m.nuts.kcal+'kcal / タンパク質'+m.nuts.protein+'g');
    });
    lines.push('');
  }
  lines.push('【今日の栄養素合計（主要）】');
  var kline=['kcal','protein','fat','toushitsu','fiber','salt','sugar','purine'].map(function(k){
    const t=ctx.targets[k];if(!t)return '';
    return t.label+' '+(ctx.totals[k]||0).toFixed(1)+t.unit;
  }).filter(Boolean).join(' / ');
  lines.push(kline);
  return lines.join('\n');
}

// ---- JSONインポート（モジュール変数で管理）----
var _pendingAIEntry = null;

function importAIJson(){
  try{
    var rawEl = document.getElementById('ai-json-input');
    var previewEl = document.getElementById('ai-import-preview');
    if(!rawEl || !previewEl){
      alert('画面の読み込みが完了していません。タブを切り替えてからもう一度お試しください。');
      return;
    }

    var raw = rawEl.value.trim();
    if(!raw){ alert('JSONを貼り付けてください'); return; }

    // ```json ... ``` や余分テキストを除去してJSON部分だけ抽出
    var match = raw.match(/\{[\s\S]*\}/);
    if(!match){
      alert('JSON形式が見つかりませんでした。\n{ ... } の形式で貼り付けてください');
      return;
    }

    // スマートクォート・全角記号などを正規化（ChatGPT/iOSコピペ対策）
    var cleaned = match[0]
      .replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]/g, '"')  // 各種ダブルクォート→"
      .replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]/g, "'")  // 各種シングルクォート→'
      .replace(/\u3000/g, ' ')                                   // 全角スペース→半角
      .replace(/[\uFF0C]/g, ',')                                 // 全角カンマ→半角（数値区切り誤り対策）
      .replace(/[\uFF1A]/g, ':')                                 // 全角コロン→半角
      .replace(/,(\s*[}\]])/g, '$1');                            // 末尾カンマ除去

    var data;
    try{ data = JSON.parse(cleaned); }
    catch(e){
      alert('JSONの解析に失敗しました。\n\n考えられる原因：\n・引用符が特殊文字（" "）になっている\n・コードブロック記号（```）が含まれている\n\nエラー詳細：' + e.message);
      return;
    }

    var name    = data.name || 'AIから追加した料理';
    var fallbackEl = document.getElementById('ai-timing-fallback');
    var timing  = data.timing || (fallbackEl ? fallbackEl.value : 'evening');
    var nuts    = NUT_ZERO();
    var estCount = 0;

    // 公式値（key）→ そのまま / 推定値（key_est）→ _estを除いて取込み
    NUT_KEYS.forEach(function(k){
      if(data[k] !== undefined){
        nuts[k] = parseFloat(data[k]) || 0;
      } else if(data[k + '_est'] !== undefined){
        nuts[k] = parseFloat(data[k + '_est']) || 0;
        if(nuts[k] > 0) estCount++;
      }
    });
    // 糖質(toushitsu)=炭水化物(carb)−食物繊維(fiber)。AIはcarbで返すため変換
    if(nuts.toushitsu === 0){
      var carbVal = parseFloat(data.carb !== undefined ? data.carb : data.carb_est) || 0;
      if(carbVal > 0) nuts.toushitsu = +Math.max(0, carbVal - (nuts.fiber||0)).toFixed(1);
    }

    var source      = data.source      || '';
    var ingredients = data.ingredients || '';
    var kcalCheck   = data.kcal_check  || '';
    var memo = 'AI入力' + (source ? ' / ' + source : '') + (kcalCheck ? ' / 検算:' + kcalCheck : '');

    // エントリ確定（モジュール変数に保存）
    _pendingAIEntry = {
      id: genId('ai'), name: name, ingredients: ingredients,
      timing: timing, memo: memo, nuts: nuts
    };

    // プレビュー構築
    var timingLabel = ({morning:'朝・間食', noon:'昼食', evening:'夕食', snack:'間食'})[timing] || timing;
    var targets = getCachedTargets(master.profile || DEFAULT_PROFILE);
    var topNuts = '';
    var shown = 0;
    for(var i = 0; i < NUT_KEYS.length && shown < 8; i++){
      var k = NUT_KEYS[i];
      if(nuts[k] > 0){
        var t = targets[k];
        if(t){
          var isEst = (data[k] === undefined && data[k+'_est'] !== undefined);
          topNuts += '<span class="ai-preview-nut' + (isEst ? ' ai-nut-est' : '') + '">'
            + t.label + ' ' + nuts[k] + t.unit + (isEst ? ' *' : '') + '</span>';
          shown++;
        }
      }
    }

    var estNote = estCount > 0
      ? '<div class="ai-est-note">* 推定値 ' + estCount + '項目（食品標準成分表補完）</div>'
      : '<div class="ai-est-note ai-est-ok">✅ 全値がメーカー公式表示</div>';

    var kcalLine = nuts.kcal > 0
      ? '<div style="font-size:13px;font-weight:600;margin:4px 0">▶ ' + nuts.kcal + 'kcal　P:' + nuts.protein.toFixed(1) + 'g　F:' + nuts.fat.toFixed(1) + 'g</div>'
      : '';
    var checkLine = kcalCheck
      ? '<div style="font-size:10px;color:var(--text3);margin-bottom:4px">🔢 ' + kcalCheck + '</div>'
      : '';

    // data-actionを使い、innerHTML後のgetElementById依存を排除
    previewEl.innerHTML =
      '<div class="ai-preview-card">'
      + '<div class="preview-name">' + name + '</div>'
      + '<div style="font-size:11px;color:var(--text2);margin-bottom:4px">' + timingLabel + (ingredients ? '　' + ingredients : '') + '</div>'
      + kcalLine
      + checkLine
      + '<div class="ai-preview-nuts">' + topNuts + '</div>'
      + estNote
      + '<button class="btn-primary" data-action="confirm-ai-import" onclick="confirmAIImport()" style="margin-top:12px">📥 今日の記録に追加する</button>'
      + '</div>';

    previewEl.style.display = 'block';
    previewEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showBanner('✅ JSONを読み込みました。内容を確認して追加してください');

  } catch(err){
    alert('エラーが発生しました：\n' + err.message);
    console.error('importAIJson error:', err);
  }
}

function confirmAIImport(){
  if(!_pendingAIEntry){ alert('先にJSONを読み込んでください'); return; }
  try{
    var entry = _pendingAIEntry;
    var dk = todayKey();
    var s = getStateForDate(dk);
    if(!s.manual) s.manual = [];
    s.manual.push(entry);
    saveStateDB();
    saveSnapshot(dk);
    _pendingAIEntry = null;

    var previewEl = document.getElementById('ai-import-preview');
    if(previewEl) previewEl.style.display = 'none';
    var inputEl = document.getElementById('ai-json-input');
    if(inputEl) inputEl.value = '';

    if(_viewDate === dk){ renderManualList(); renderNutrients(); }
    renderCalendar();
    showBanner('✅ ' + entry.name + ' を今日の記録に追加しました');
  } catch(err){
    alert('追加中にエラーが発生しました：\n' + err.message);
    console.error('confirmAIImport error:', err);
  }
}

// ---- 出力ボタン ----
function handleGenReport(type){
  const wrap=document.getElementById('ai-report-wrap');
  const label=document.getElementById('ai-report-label');
  const text=document.getElementById('ai-report-text');
  wrap.style.display='block';
  if(type==='nutrition'){
    label.textContent='💊 栄養摂取状況レポート';
    text.value=generateNutritionReport();
  }else if(type==='daily'){
    label.textContent='📋 食べたものの評価レポート';
    text.value=generateDailyFoodReport();
  }else{
    label.textContent='🍽️ 食事記録レポート';
    text.value=generateMealReport();
  }
  wrap.scrollIntoView({behavior:'smooth',block:'nearest'});
  document.getElementById('ai-copy-report-btn').textContent='📋 全文コピー';
  document.getElementById('ai-copy-report-btn').classList.remove('done');
}

function copyReport(){
  const text=document.getElementById('ai-report-text').value;
  navigator.clipboard.writeText(text).then(function(){
    const btn=document.getElementById('ai-copy-report-btn');
    btn.textContent='✅ コピー済み';btn.classList.add('done');
    showBanner('📋 レポートをコピーしました');
    setTimeout(function(){btn.textContent='📋 全文コピー';btn.classList.remove('done');},3000);
  }).catch(function(){
    document.getElementById('ai-report-text').select();
    document.execCommand('copy');
    showBanner('📋 レポートをコピーしました');
  });
}

// AI連携タブのイベントをdelegationに追加
// （既存のdocument.addEventListener('click',...) 内で処理）
