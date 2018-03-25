var overMap = new overMapInfo;
overMap.layerNum = 4;
overMap.maxZoom = -1;
overMap.legendFont = "13px 'メイリオ','ＭＳ Ｐゴシック'";
overMap.latlngVisible = true;
overMap.addMapTypeCJ4 = false;
overMap.addMapTypeCJ4ORTHO = false;
overMap.addMapTypeNLII1 = false;
overMap.addMapTypeNLII4 = false;
overMap.addMapTypeTOHO1 = false;
overMap.addMapTypeTOHO2 = false;
overMap.addMapTypeGSIMap = false;
overMap.addMapTypeOSMap = false;
overMap.mapWidth = 650;
overMap.mapHeight = 500;
overMap.top = 0;
overMap.left = 5;
overMap.titleHeight = 30;
overMap.sideBarWidth = 150;
overMap.screenLayerStrings ='レイヤ: ' ;
overMap.screenMissingValueStrings = '欠損値';
overMap.screenOpacityStrings = '透過度:';
overMap.screenOneLayerStrings = '表示/非表示';
overMap.screenLegendVisibilityStrings = '凡例表示';
overMap.circleMDplusText = '正の値';
overMap.circleMDminusText = '負の値';
layIniData = new Array();
layIniData[0] = new layIniInfo();
layIniData[0].name = '消防施設';
layIniData[0].shape = 'point';
layIniData[0].zindex = 0;
layIniData[0].obj_Num = 11;
layIniData[0].lineColor = '#000000';
layIniData[0].lineWidth = 1;
layIniData[0].pointObjectRadius = 3;
layIniData[0].opacity = 0.8;
layIniData[0].visible = true;
layIniData[0].legendVisible = true;
layIniData[0].mappingData = 0;
layIniData[0].selectedMappingData = ['分類\tCAT\tpaint'];
layIniData[0].legend = [
 '#FF00FF\t消防施設'
];
layIniData[0].selectedInfoData = ['住所\tSTR\t','電話番号\tSTR\t','FAX番号\tSTR\t'];
layIniData[0].objData = [
  '消防本部\t135.7075\t34.69186\t0\t山崎町4-10\t0743-73-0119\t0743-73-0111',
  '消防署\t135.7078\t34.69198\t0\t山崎町4-10\t0743-73-0119\t0743-73-0111',
  '北分署\t135.7301\t34.72908\t0\t北大和4丁目22番地6\t0743-79-0119\t0743-79-0191',
  '南分署\t135.707\t34.66689\t0\t小瀬町8-1\t0743-76-0119\t0743-76-0112',
  '消防団本部\t135.7076\t34.69174\t0\t山崎町\t\n\t\n',
  '消防団機動第1分団\t135.6952\t34.6923\t0\t元町1丁目\t\n\t\n',
  '消防団機動第2分団\t135.7051\t34.71053\t0\t小明町\t\n\t\n',
  '消防団機動第3分団\t135.7069\t34.66697\t0\t小瀬町\t\n\t\n',
  '消防団機動第4分団\t135.7221\t34.73776\t0\t高山町\t\n\t\n',
  '消防団機動第4分団・庄田\t135.7206\t34.75381\t0\t高山町\t\n\t\n',
  '消防防災備蓄庫\t135.7145\t34.71431\t0\tあすか野北2丁目\t\n\t\n'
];
layIniData[1] = new layIniInfo();
layIniData[1].name = '警察署';
layIniData[1].shape = 'point';
layIniData[1].zindex = 1;
layIniData[1].obj_Num = 12;
layIniData[1].lineColor = '#000000';
layIniData[1].lineWidth = 1;
layIniData[1].pointObjectRadius = 3;
layIniData[1].opacity = 0.8;
layIniData[1].visible = true;
layIniData[1].legendVisible = true;
layIniData[1].mappingData = 0;
layIniData[1].selectedMappingData = ['分類\tCAT\tpaint'];
layIniData[1].legend = [
 '#FFFF00\t警察署'
];
layIniData[1].selectedInfoData = ['住所\tSTR\t','電話番号\tSTR\t','FAX番号\tSTR\t'];
layIniData[1].objData = [
  '生駒警察署\t135.6978\t34.6991\t0\t東松ケ丘6-20\t0743-74-0110\t\n',
  '白庭台駅前交番\t135.7168\t34.72157\t0\t白庭台6丁目12-2\t0743-78-3079\t\n',
  '小瀬交番\t135.7088\t34.66519\t0\t小瀬町697\t0743-77-8020\t\n',
  '近鉄生駒駅前交番\t135.6964\t34.69248\t0\t元町1丁目10-1\t0743-74-3913\t\n',
  '鹿ノ台交番\t135.7486\t34.73419\t0\t鹿ノ台南2丁目3-4\t0743-78-7677\t\n',
  '東生駒交番\t135.7102\t34.69108\t0\t東生駒1丁目5\t0743-74-3853\t\n',
  '門前駐在所\t135.689\t34.68555\t0\t門前町8- 1\t0743-74-1844\t\n',
  '湯舟駐在所\t135.7015\t34.68594\t0\t緑ケ丘1425- 59\t0743-74-4023\t\n',
  '生駒台駐在所\t135.7007\t34.70451\t0\t生駒台北162-2\t0743-74-6900\t\n',
  '北田原駐在所\t135.7021\t34.72851\t0\t北田原町2234-1\t0743-78-0202\t\n',
  '高山駐在所\t135.721\t34.74555\t0\t高山町12699-3\t0743-78-0172\t\n',
  '萩の台駐在所\t135.7111\t34.65764\t0\t萩の台2丁目2-4\t0743-77-7773\t\n'
];
layIniData[2] = new layIniInfo();
layIniData[2].name = '医療機関';
layIniData[2].shape = 'point';
layIniData[2].zindex = 2;
layIniData[2].obj_Num = 10;
layIniData[2].lineColor = '#000000';
layIniData[2].lineWidth = 1;
layIniData[2].pointObjectRadius = 3;
layIniData[2].opacity = 0.8;
layIniData[2].visible = true;
layIniData[2].legendVisible = true;
layIniData[2].mappingData = 0;
layIniData[2].selectedMappingData = ['分類\tCAT\tpaint'];
layIniData[2].legend = [
 '#00FFFF\t医療機関'
];
layIniData[2].selectedInfoData = ['住所\tSTR\t','電話番号\tSTR\t','FAX番号\tSTR\t'];
layIniData[2].objData = [
  '生駒市立病院\t135.7112\t34.69094\t0\t東生駒1丁目6番地2\t0743-72-1111\t\n',
  '西奈良中央病院\t135.7496\t34.70296\t0\t奈良市鶴舞西町1-15\t0742-43-3333\t\n',
  '奈良西部病院\t135.7211\t34.68757\t0\t奈良市三碓町2143-1\t0742-51-8700\t\n',
  '白庭病院\t135.7172\t34.72088\t0\t白庭台6丁目10-1\t0743-70-0022\t\n',
  '近畿大学医学部奈良病院\t135.7151\t34.65111\t0\t乙田町1248-1\t0743-77-0880\t\n',
  '倉病院\t135.6987\t34.69173\t0\t本町1-7\t0743-73-4888\t\n',
  '田口クリニック\t135.7073\t34.67006\t0\t有里町31\t0743-76-7117\t\n',
  '阪奈中央病院\t135.6973\t34.70654\t0\t俵口町741\t0743-74-8660\t\n',
  '東生駒病院\t135.7082\t34.69958\t0\t辻町4-1\t0743-75-0011\t\n',
  '休日夜間応急診療所\t135.6993\t34.69271\t0\t東新町1-3、セラビーいこま内\t0743-75-0111\t\n'
];
layIniData[3] = new layIniInfo();
layIniData[3].name = '学校施設';
layIniData[3].shape = 'point';
layIniData[3].zindex = 3;
layIniData[3].obj_Num = 24;
layIniData[3].lineColor = '#000000';
layIniData[3].lineWidth = 1;
layIniData[3].pointObjectRadius = 3;
layIniData[3].opacity = 0.8;
layIniData[3].visible = true;
layIniData[3].legendVisible = true;
layIniData[3].mappingData = 0;
layIniData[3].selectedMappingData = ['分類\tCAT\tpaint'];
layIniData[3].legend = [
 '#0000FF\t学校施設'
];
layIniData[3].selectedInfoData = ['住所\tSTR\t','電話番号\tSTR\t','FAX番号\tSTR\t'];
layIniData[3].objData = [
  '生駒小学校\t135.7063\t34.69157\t0\t山崎町4-44\t0743-73-4378\t0743-74-6061',
  '生駒南小学校\t135.7058\t34.6657\t0\t萩原町335\t0743-77-8021\t0743-76-7206',
  '生駒北小学校\t135.7231\t34.74124\t0\t高山町12595\t0743-78-1100\t0743-78-8819',
  '生駒台小学校\t135.7027\t34.70943\t0\t新生駒台1-33\t0743-75-0075\t0743-74-6083',
  '生駒東小学校\t135.7159\t34.68044\t0\t東生駒4丁目398-110\t0743-74-3572\t0743-74-6112',
  '真弓小学校\t135.726\t34.71993\t0\t真弓1丁目11-15\t0743-78-4326\t0743-78-8823',
  '俵口小学校\t135.6893\t34.70597\t0\t俵口町614-1\t0743-74-8832\t0743-74-6126',
  '鹿ノ台小学校\t135.7467\t34.73454\t0\t鹿ノ台西1丁目5-2\t0743-78-6282\t0743-78-8824',
  '桜ヶ丘小学校\t135.7052\t34.69858\t0\t桜ケ丘7-15\t0743-75-1980\t0743-74-6127',
  'あすか野小学校\t135.717\t34.70988\t0\tあすか野南2丁目5-1\t0743-78-6208\t0743-78-8825',
  '壱分小学校\t135.7158\t34.67201\t0\t壱分町356-1\t0743-76-8615\t0743-76-7221',
  '生駒南第二小学校\t135.7078\t34.65443\t0\t小平尾町927\t0743-77-6780\t0743-76-7255',
  '生駒中学校\t135.6942\t34.69883\t0\t西松ケ丘9-19\t0743-75-0071\t0743-74-6146',
  '生駒南中学校\t135.7061\t34.66682\t0\t萩原町90\t0743-77-8121\t0743-76-7262',
  '生駒北中学校\t135.7217\t34.73892\t0\t高山町6794\t0743-78-1116\t0743-78-8833',
  '緑ヶ丘中学校\t135.6991\t34.68279\t0\t緑ケ丘2232\t0743-74-8833\t0743-74-6149',
  '鹿ノ台中学校\t135.7479\t34.73336\t0\t鹿ノ台南2丁目16\t0743-78-7231\t0743-78-8832',
  '上中学校\t135.7168\t34.72545\t0\t上町3000\t0743-78-4140\t0743-78-8826',
  '光明中学校\t135.7083\t34.71177\t0\t小明町55\t0743-74-7447\t0743-74-6152',
  '大瀬中学校\t135.7179\t34.66629\t0\t小瀬町911-1\t0743-77-7891\t0743-76-7295',
  '生駒高等学校\t135.7134\t34.67169\t0\t壱分町532- 1\t0743-77-8084\t0743-76-5210',
  '奈良北高等学校\t135.7259\t34.71545\t0\t上町4600\t0743-78-3081\t0743-78-3192',
  '奈良先端科学技術大学院大学\t135.7342\t34.73201\t0\t高山町8916-5\t0743-72-5023\t0743-72-5011',
  '学校給食センター\t135.7121\t34.70834\t0\t小明町1787-28\t0743-73-3141\t0743-74-6168'
];
