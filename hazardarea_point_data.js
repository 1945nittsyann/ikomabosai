var overMap = new overMapInfo;
overMap.layerNum = 2;
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
layIniData[0].name = '生駒市境界';
layIniData[0].shape = 'polygon';
layIniData[0].zindex = 0;
layIniData[0].obj_Num = 1;
layIniData[0].lineColor = '#000000';
layIniData[0].lineWidth = 3;
layIniData[0].pointObjectRadius = 3;
layIniData[0].opacity = 0.2;
layIniData[0].visible = true;
layIniData[0].legendVisible = false;
layIniData[0].mappingData = 0;
layIniData[0].encodedPoints = [
 '{qyrEuqk{XSU?yBcBwB?WS}DSiASW?WSU??oA_Ee@aBg@m@?o@oA_ESeASW?WcBwBcB?g@n@?dASVSVS?QZ??SWSV??g@o@S???SWS????o@f@aBRW?eASo@_Do@oAm@g@?g@o@OAi@o@g@?SVe@?g@n@SWg@VSVSWS?e@o@?Wd@oCRWg@eA?Wz@eAR?bByB?Wd@m@?o@S[_D?{@VoAn@{@VOVoAeA{@WSWoA?SVSWSVS?SeAe@qFSeASW?Wg@o@e@Wi@VS?SV??cBVg@n@cBl@SVe@?SWoAeAwBaBg@UwBaBg@W{@m@oAiAS?SW{@?OX{@?g@n@y@?sAVy@Vg@Ty@VSVoA?cBWSWkC?SVg@?SWRU?WRo@RW?oCz@eAf@l@?vBRVf@WRUd@iA?Wz@m@R?f@l@?vBf@VRVf@?f@WReARo@RWh@?RVtB?z@WP[nA?RVz@?RWz@?z@hAnA?RW?Wg@}A?o@RWR?PdAf@|ARhARVf@aBRwBRW?m@d@o@?W{@iAsB@cBwBS?g@m@ST?hA{@dAg@?{@VSVcB?UWaB?g@n@S?g@n@{@?SVaB?oAWcBW{@o@S?{@eA{@aB?WOeASW?wHRW?m@RWf@VR?z@dARn@SdASV?n@PZ?VnA|Az@VRVlF?RWbB?d@o@Ro@?USaBSW?Wg@m@cBo@y@WoAW{@m@y@s@S?SW?m@z@iA{@eAf@o@R?nAWnAo@RWd@?z@eA?wBUW?oI|@oCRoCRo@RoCRm@RW?aBg@m@SVS?kCbDS?g@m@e@?SVcBTSU?eAz@eAR?|CaBnA}A?WcBwBS?y@o@kCgDiC?SW{@W{@?SVoAn@{@VmF?SWoAWcBWkC?SVSWcB?SVsD?SWw@Ag@m@S?oAiAwBwBg@W{@o@sDvE?VcBnCy@|ASr@mFvHgElFS?oAhAsDtE?VSVSV?n@ORg@xB_D|DS?wBhA{@n@STkC?SU{@Wg@Wy@WS?g@o@{@?{@hA?Ve@l@?n@oApFg@xD?`Be@l@?hASVSdASnCSvBShAg@~DSl@SxBUdA?Ve@dAaGvHAdARV?|AcBvBoA?SUoAo@{@We@WwB?g@n@S?g@n@aL?g@o@S?SWg@?e@n@?lFRVf@vBf@hAg@l@{@?SUg@?g@l@?VmF|GS?e@n@SWS?oA}Ag@?SWcB?SVmATmFVcBVmAVqFXwBVcB?SWg@?SVS?{CfDSTShA{@dAoA?SVwBVaG?SWS?{@m@{@o@cG?SV{@VS?c@l@?VoA|AqD?SVqD?SWcB?SVSW}@hAS?oA|AsD?SUoAWeEo@oAWy@?SV?n@RV?|Ad@n@R?RTz@Vz@Vx@hA?Tz@hA?n@RVST?pFRVRl@?n@f@n@?VRT?n@h@r@?VRTRhAz@nCRhA?dAf@n@?vBRVRrB?|AoA`BS?SV{@ToAVcBVS?_D~D?VeElFS?SVsDdAg@xBe@hASVSvBShASl@SfDS?yEdGf@l@R?z@hA?Vz@nCSVSdA?n@RVbB?RW`GWz@WvB?RVR?f@n@?TRVRhA~FXnAl@f@?z@hA?VRV?l@f@n@R?RVhCVbBTz@Vx@hA?VRl@d@n@f@?f@o@h@???RVRW??RVRW??R?RW?m@SW?Wg@o@?m@{@iA?m@SWRW?gDf@o@??R?RW??nA?RU??RTR?RVz@Vd@Vz@????VRVR?RW??R?RVtBTvGn@nAVbB?RWlFoCf@?d@o@R?RUbB?RTd@?f@n@f@?RVf@VnAVbBTnAVtBhAnA?RWR?nA}A?Wz@iAz@?RVvB?RWz@W~C}AlF}AnAWbBWdHARVvBn@R?bBvB?VRTf@nC?Vf@n@R?RVvBVz@VR?z@dAlA?RVR?d@WRVRWjC?RVbB?d@n@???TTV??UV?nCTV?VUZSvB?V{@dA{@?SVO?oA|A?n@SV?Vg@dASn@uBfDRVPhARhARV?l@RVRhAf@vBvBjCR?z@n@z@l@vBn@hC?RWfEwBv@UR?z@o@RURTR?RURTz@Vf@?f@n@?Vf@l@?hARVRdAnAn@f@?RWnAWfCSdEo@vBWz@W~Cs@nA?z@eAR?bBwBf@?f@o@d@?RWf@Wz@UvBiARVRWd@WnAWz@WnAU`GWf@?RVRWR?RVhH?RWvBWbBWnAWf@Wz@Uf@Wf@?f@o@R?xEoCx@WnAo@z@UR?d@o@f@?R[`GoCf@o@f@?f@m@bB?RVR?vB|Af@Vz@l@nAn@lA`B?VRVf@nCSVRV?n@g@|A?|ARVSZ?Vf@dARhA?VpDtER?z@n@z@VR?z@dAR?bBxB?TnAxBrDtEN?z@n@RVz@VR?z@l@f@Vz@n@bBvB?VRn@d@dAz@`BvBfDrDvER?hCfD?Vz@|AnAnCx@vBR`B?bDSVe@|G?hARV?l@f@n@?VRn@bBnCRl@f@hARn@tBnCR?bB|ARVz@Vd@Zz@TnAVtBVf@?jHfJR?hCnCbB|AnAhAbB|AvBnC??g@n@RVR?RW??nA|AtG?RWd@W??nAVRVbB?nAW|CWz@UpDWRWR?TVRWvBVjAVfETjCVnAVRVjP?bBWnAWRWf@?nA}A?WRWR?z@eAf@iA?WrBqCR?f@m@f@?~Co@x@WbBeAvBaBpD}Dz@WfEWRWnAVf@VnAVvBl@NVjC?bBWnAm@f@?f@o@R?d@o@f@?RWx@?f@n@f@?`D|ARVf@?f@n@f@?z@VvBV`BVz@TRVnAhAR?RVf@?z@dA?VRVAZR?bBvB??SVRTRU??R?RTR?nAhAz@n@z@VnATv@TpDVz@Vf@?f@n@R?d@TvBxBrDnCnAdAvB`BRTnAVpDVvBVz@Vf@VhC?RWR?RW??R?RVRW?WSW???WReARW?}ASWRW?wBSW?uKRaBRwBRgDRm@RiARWz@}AbBgDbBwB?yBSURWSiAUsBSWg@eA?WSW?}AR[?iAf@m@?o@f@o@?WReARo@R}Ah@iAf@eAjC_E?Wz@eAtGgDR?f@o@d@?d@s@z@Uz@W`BiAR?f@o@RVRWzEhGR?h@o@d@?f@Wx@Wf@Uz@WbBWRoCRiARW?eGg@m@S?SWSVS?uGWSW{@?e@o@S?U[?WjCcDSWRWSW?WRW?wBf@o@SU?WhCgDnAiAz@m@lAo@R?f@o@d@?T[R?z@eA?WR}ARiARWf@eA?Wz@iAnAeAf@WR?d@o@?URW?oCSW?aBRoCReARwBRaBf@oCRm@z@}GRiAR}ARo@RW?}ASW?}Ag@o@?s@SeASgDSW?gDRW?}Ae@o@?WSeAg@iAg@eA?WcBwBRWd@iAnAwBz@oC?WSeASW?oIz@wERU?Wf@o@?o@bBwBnAm@x@o@bBo@RW?[e@m@S?g@o@?WSeASo@SW?eAg@o@?s@S}ASW?}Ag@o@SeASiASo@e@}AAs@g@m@?WcBwBkC?STkC?oA}Ag@iA?U{@iAS?w@USW}C?{@VSVcBeAS?g@o@{@?wBo@oA?wBn@aBdAS?oA`B{@?oAo@SWg@?g@m@iCaBe@m@i@?SWg@?SVg@?g@l@g@?{@VqDvBS?g@n@g@?g@n@mAl@wBxBS?g@l@oA?SVg@?QYS???wBm@SWwBWmAWSVSWSVwBn@?Tg@n@g@?SWoAW{@Ug@WsBo@oAWS?SV{@VS?oA|AoA?SWcB?SV{@VSWg@?g@m@STSUS?g@TkA`B?Vg@dAShA?l@iCfD?Vi@|Ag@n@S?SWgE?{@hA?Vg@l@oA?OVSWwB?SVS?SWSV{@VS?g@n@?Vy@dAg@?SZoAVg@V{@TS?oAhA{@n@oATwBn@g@?g@n@S?OVg@?{@dAg@?SVg@V_D?SW{@Wg@WoA?SVoAVg@V{@VsBXoATcBV{@VwBVy@Vg@?cBvB?Vy@|ASn@i@fA{@hAS?SVoAV{@TSUSTSUsDW}Co@{@WeEm@sD?STsDhAOA_DfDe@VSTS?g@n@{@?SVS?SWg@?g@o@g@US?e@o@?WoA}AS?SW{@?e@o@cB?SVoA?SWy@m@}@[SWg@?e@n@?|AS|AShASvBShAS|A}@vB?VuBnCg@?iCWSWg@?g@V{@VSV{@WSWS?{@eA?Wg@o@?s@g@m@?o@g@}ASaBSW?mLR}ARW?oISUe@iAg@}A?WcBaB'
];
layIniData[0].selectedMappingData = ['生駒市域\tCAT\tpaint'];
layIniData[0].legend = [
 '#FFFFFF\t生駒市境界'
];
layIniData[0].selectedInfoData = [];
layIniData[0].objData = [
  '生駒市境界\t0\t1\t0'
];
layIniData[1] = new layIniInfo();
layIniData[1].name = '土砂災害危険個所';
layIniData[1].shape = 'point';
layIniData[1].zindex = 1;
layIniData[1].obj_Num = 123;
layIniData[1].lineColor = '#000000';
layIniData[1].lineWidth = 1;
layIniData[1].pointObjectRadius = 1.5;
layIniData[1].opacity = 0.8;
layIniData[1].visible = true;
layIniData[1].legendVisible = true;
layIniData[1].mappingData = 0;
layIniData[1].selectedMappingData = ['危険箇所種別\tCAT\tpaint'];
layIniData[1].legend = [
 '#FF0000\t土石流危険渓流氾濫開始点'
];
layIniData[1].selectedInfoData = ['備考\tSTR\t'];
layIniData[1].objData = [
  '1882\t135.7127\t34.77299\t0\t生駒ＫⅡ 2',
  '1883\t135.7149\t34.77399\t0\t生駒ＫⅡ 1',
  '1884\t135.7164\t34.77684\t0\t生駒J 1',
  '1885\t135.7244\t34.7721\t0\t生駒J 6',
  '1886\t135.7241\t34.77141\t0\t生駒J 6',
  '1887\t135.715\t34.76575\t0\t生駒J 3',
  '1888\t135.7108\t34.76445\t0\t生駒J 2',
  '1889\t135.7136\t34.7637\t0\t生駒ＫⅡ 4',
  '1890\t135.7122\t34.76311\t0\t生駒ＫⅡ 3',
  '1891\t135.7215\t34.76321\t0\t生駒ＫⅡ 5',
  '1892\t135.7227\t34.76039\t0\t生駒J 12',
  '1893\t135.729\t34.76667\t0\t生駒J 7',
  '1894\t135.7291\t34.766\t0\t生駒J 8',
  '1895\t135.7293\t34.76443\t0\t生駒J 9',
  '1898\t135.7254\t34.76707\t0\t生駒ＫⅡ 6',
  '1899\t135.7274\t34.76795\t0\t生駒ＫⅡ 7',
  '1900\t135.7287\t34.76266\t0\t生駒J 10',
  '1901\t135.7162\t34.75884\t0\t生駒J 4',
  '1902\t135.7179\t34.7583\t0\t生駒J 5',
  '1903\t135.7116\t34.75574\t0\t生駒ＫⅡ 12',
  '1904\t135.7252\t34.75937\t0\t生駒J 13',
  '1905\t135.7296\t34.76106\t0\t生駒ＫⅡ 8',
  '1906\t135.7309\t34.75842\t0\t生駒ＫⅡ 9',
  '1907\t135.7233\t34.7561\t0\t生駒ＫⅡ 11',
  '1908\t135.7319\t34.7555\t0\t生駒ＫⅡ 10',
  '1909\t135.7325\t34.75351\t0\t生駒J 11',
  '1911\t135.7023\t34.74781\t0\t生駒J 22',
  '1912\t135.7026\t34.74474\t0\t生駒J 23',
  '1913\t135.7148\t34.75011\t0\t生駒ＫⅡ 13',
  '1914\t135.7114\t34.74659\t0\t生駒ＫⅠ 1',
  '1915\t135.7118\t34.74387\t0\t生駒ＫⅠ 2',
  '1916\t135.7017\t34.74196\t0\t生駒ＫⅠ 3',
  '1917\t135.7018\t34.74013\t0\t生駒ＫⅡ 21',
  '1918\t135.7224\t34.74419\t0\t生駒ＫⅡ 14',
  '1919\t135.7253\t34.74385\t0\t生駒J 15',
  '1920\t135.735\t34.74509\t0\t生駒J 18',
  '1921\t135.7369\t34.74622\t0\t生駒J 17',
  '1923\t135.7414\t34.74503\t0\t生駒J 19',
  '1924\t135.7415\t34.7425\t0\t生駒J 20',
  '1925\t135.743\t34.73045\t0\t生駒ＫⅡ 16',
  '1926\t135.7036\t34.73401\t0\t生駒ＫⅡ 22',
  '1927\t135.7417\t34.73796\t0\t生駒ＫⅡ 15',
  '1928\t135.7299\t34.73218\t0\t生駒ＫⅡ 19',
  '1929\t135.7254\t34.72932\t0\t生駒ＫⅡ 20',
  '1930\t135.7168\t34.72717\t0\t生駒ＫⅡ 26',
  '1931\t135.7057\t34.72707\t0\t生駒ＫⅡ 23',
  '1932\t135.707\t34.72385\t0\t生駒ＫⅡ 24',
  '1933\t135.7112\t34.72212\t0\t生駒ＫⅡ 25',
  '1934\t135.7177\t34.72321\t0\t生駒ＫⅡ 27',
  '1935\t135.7455\t34.72699\t0\t生駒ＫⅡ 18',
  '1936\t135.7278\t34.71905\t0\t生駒ＫⅡ 28',
  '1937\t135.7181\t34.71736\t0\t生駒ＫⅡ 29',
  '1938\t135.713\t34.71745\t0\t生駒J 25',
  '1939\t135.706\t34.71477\t0\t生駒ＫⅡ 30',
  '1940\t135.7152\t34.71115\t0\t生駒ＫⅠ 4',
  '1941\t135.7153\t34.70917\t0\t生駒ＫⅠ 5',
  '1942\t135.683\t34.70853\t0\t生駒J 26',
  '1943\t135.687\t34.70925\t0\t生駒ＫⅡ 31',
  '1944\t135.6889\t34.70658\t0\t生駒ＫⅠ 13',
  '1945\t135.7075\t34.71073\t0\t生駒ＫⅠ 6',
  '1946\t135.7104\t34.70818\t0\t生駒ＫⅠ 7',
  '1947\t135.7105\t34.7055\t0\t生駒ＫⅠ 8',
  '1948\t135.7102\t34.70375\t0\t生駒ＫⅠ 9',
  '1949\t135.7118\t34.70284\t0\t生駒ＫⅠ 10',
  '1950\t135.7118\t34.67855\t0\t生駒ＫⅡ 36',
  '1951\t135.7195\t34.68072\t0\t生駒ＫⅠ 26',
  '1952\t135.7204\t34.6781\t0\t生駒ＫⅠ 27',
  '1953\t135.7209\t34.67661\t0\t生駒ＫⅠ 28',
  '1954\t135.7199\t34.67162\t0\t生駒ＫⅠ 30',
  '1955\t135.6892\t34.69585\t0\t生駒ＫⅠ 16',
  '1956\t135.6908\t34.69144\t0\t生駒ＫⅠ 19',
  '1957\t135.6857\t34.68927\t0\t生駒ＫⅠ 20',
  '1958\t135.713\t34.69877\t0\t生駒ＫⅠ 11',
  '1959\t135.7148\t34.69709\t0\t生駒ＫⅡ 32',
  '1960\t135.6991\t34.67466\t0\t生駒ＫⅡ 37',
  '1961\t135.7014\t34.67284\t0\t生駒ＫⅠ 25ａ',
  '1962\t135.7181\t34.68731\t0\t生駒ＫⅡ 34',
  '1963\t135.7179\t34.68437\t0\t生駒ＫⅡ 35',
  '1964\t135.7216\t34.66451\t0\t生駒J 31',
  '1965\t135.7145\t34.66505\t0\t生駒J 30',
  '1966\t135.7126\t34.66291\t0\t生駒ＫⅡ 44',
  '1974\t135.7149\t34.65004\t0\t生駒J 33',
  '1975\t135.7146\t34.64954\t0\t生駒J 33',
  '1977\t135.7011\t34.65567\t0\t生駒ＫⅠ 38',
  '1992\t135.6873\t34.67405\t0\t生駒ＫⅠ 25ｂ',
  '1993\t135.7126\t34.66158\t0\t生駒J 32',
  '2010\t135.6888\t34.70365\t0\t生駒J 27',
  '2011\t135.6885\t34.70412\t0\t生駒J 27',
  '2012\t135.6895\t34.69714\t0\t生駒ＫⅠ 15',
  '2013\t135.6823\t34.67268\t0\t生駒ＫⅠ 31',
  '2014\t135.6874\t34.66943\t0\t生駒ＫⅠ 35',
  '2015\t135.6864\t34.66832\t0\t生駒ＫⅡ 38',
  '2016\t135.6849\t34.66771\t0\t生駒ＫⅡ 39',
  '2017\t135.6817\t34.66948\t0\t生駒ＫⅠ 34',
  '2018\t135.6807\t34.66817\t0\t生駒ＫⅡ 40',
  '2019\t135.6789\t34.66912\t0\t生駒ＫⅠ 33',
  '2020\t135.6782\t34.66861\t0\t生駒ＫⅠ 32',
  '2021\t135.6766\t34.66622\t0\t生駒ＫⅡ 41',
  '2022\t135.6798\t34.66476\t0\t生駒J 28',
  '2023\t135.6917\t34.66414\t0\t生駒ＫⅡ 43',
  '2024\t135.6993\t34.66022\t0\t生駒ＫⅠ 36',
  '2025\t135.6973\t34.65725\t0\t生駒ＫⅠ 37',
  '2038\t135.7151\t34.66234\t0\t生駒ＫⅡ 45',
  '2039\t135.7164\t34.65776\t0\t生駒ＫⅠ 42',
  '2040\t135.7178\t34.66199\t0\t生駒ＫⅠ 39',
  '2041\t135.7172\t34.65603\t0\t生駒ＫⅠ 43',
  '2042\t135.7192\t34.66074\t0\t生駒ＫⅠ 40',
  '2058\t135.7165\t34.65324\t0\t生駒ＫⅠ 44',
  '2059\t135.7156\t34.65152\t0\t生駒ＫⅠ 44',
  '2095\t135.6868\t34.6825\t0\t生駒ＫⅠ 21',
  '2096\t135.6979\t34.68182\t0\t生駒ＫⅠ 22',
  '2097\t135.6955\t34.67664\t0\t生駒ＫⅠ 23',
  '2098\t135.6986\t34.67589\t0\t生駒ＫⅠ 24',
  '2099\t135.7215\t34.67562\t0\t生駒ＫⅠ 29',
  '2100\t135.7216\t34.67521\t0\t生駒ＫⅠ 29',
  '2101\t135.7139\t34.69565\t0\t生駒ＫⅡ 33',
  '2102\t135.7139\t34.69433\t0\t生駒ＫⅠ 12',
  '2103\t135.6892\t34.69452\t0\t生駒ＫⅠ 17',
  '2104\t135.6891\t34.69215\t0\t生駒ＫⅠ 18',
  '2105\t135.6877\t34.70258\t0\t生駒ＫⅠ 14',
  '3358\t135.6901\t34.6646\t0\t生駒ＫⅡ 42',
  '3359\t135.7164\t34.66002\t0\t生駒ＫⅠ 41',
  '3363\t135.7476\t34.72765\t0\t生駒ＫⅡ 17'
];
