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
layIniData[0].name = '標高';
layIniData[0].shape = 'point';
layIniData[0].zindex = 0;
layIniData[0].obj_Num = 72;
layIniData[0].lineColor = '#000000';
layIniData[0].lineWidth = 1;
layIniData[0].pointObjectRadius = 3;
layIniData[0].opacity = 0.8;
layIniData[0].visible = true;
layIniData[0].legendVisible = true;
layIniData[0].mappingData = 0;
layIniData[0].selectedMappingData = ['標高\t(m)\tpaint'];
layIniData[0].legend = [
 '#FF0000\t#FF00FF\t#FFFF00\t#00FFFF\t#0000FF\t300\t240\t180\t120'
];
layIniData[0].selectedInfoData = ['水系域\tCAT\t'];
layIniData[0].objData = [
  '1-269\t135.7076\t34.66956\t119\t大和川',
  '1-270\t135.7101\t34.66359\t109\t大和川',
  '1-366\t135.7258\t34.75661\t179\t大和川',
  '1-367\t135.7211\t34.75274\t172\t大和川',
  '1-370\t135.7169\t34.67201\t140\t大和川',
  '1-371\t135.7079\t34.67034\t114\t大和川',
  '1-372\t135.7025\t34.68083\t119\t大和川',
  '1-373\t135.705\t34.67939\t119\t大和川',
  '1-567\t135.747\t34.7423\t117\t淀川',
  '1-569\t135.7309\t34.75808\t210\t大和川',
  '1-628\t135.7118\t34.73996\t159\t淀川',
  '1-669\t135.6955\t34.67051\t166\t大和川',
  '1-670\t135.6997\t34.66978\t135\t大和川',
  '1-694\t135.7244\t34.65498\t265\t大和川',
  '1-695\t135.7121\t34.65904\t119\t大和川',
  '1-703\t135.7034\t34.7176\t149\t淀川',
  '1-704\t135.6907\t34.67691\t281\t大和川',
  '1-705\t135.719\t34.67496\t146\t大和川',
  '1-706\t135.6961\t34.67525\t199\t大和川',
  '1-709\t135.6944\t34.71176\t154\t大和川',
  '1-710\t135.6984\t34.70433\t151\t大和川',
  '1-713\t135.7059\t34.70641\t144\t大和川',
  '1-714\t135.7072\t34.68715\t124\t大和川',
  '1-781\t135.6868\t34.67436\t345\t大和川',
  '1-782\t135.6973\t34.67194\t158\t大和川',
  '1-784\t135.6823\t34.6669\t299\t大和川',
  '1-785\t135.7282\t34.72956\t123\t淀川',
  '1-786\t135.7381\t34.7289\t100\t淀川',
  '1-1234\t135.6978\t34.69978\t134\t大和川',
  '1-1235\t135.7339\t34.74613\t177\t大和川',
  '1-1236\t135.7224\t34.74015\t148\t大和川',
  '1-1320\t135.692\t34.70393\t158\t大和川',
  '1-1321\t135.692\t34.69845\t175\t大和川',
  '1-1322\t135.7057\t34.70989\t153\t大和川',
  '1-1323\t135.7201\t34.67112\t146\t大和川',
  '1-1324\t135.6936\t34.65028\t126\t大和川',
  '1-1330\t135.7253\t34.73567\t150\t大和川',
  '1-1331\t135.7219\t34.73415\t139\t大和川',
  '1-1568\t135.7255\t34.76458\t206\t大和川',
  '1-3258\t135.7199\t34.72614\t129\t大和川',
  '1-3259\t135.725\t34.71301\t122\t大和川',
  '1-3260\t135.7079\t34.67174\t114\t大和川',
  '1-3261\t135.7093\t34.6601\t109\t大和川',
  '1-3262\t135.7066\t34.65866\t107\t大和川',
  '1-3263\t135.7189\t34.72639\t130\t大和川',
  '1-3264\t135.7514\t34.72813\t79\t淀川',
  '1-3265\t135.7554\t34.73127\t79\t淀川',
  '1-3266\t135.719\t34.75122\t167\t大和川',
  '1-3267\t135.7206\t34.74627\t158\t大和川',
  '1-3268\t135.7174\t34.75291\t169\t大和川',
  '1-3269\t135.7173\t34.7631\t222\t大和川',
  '1-3270\t135.6998\t34.73668\t134\t淀川',
  '1-3272\t135.725\t34.74864\t170\t大和川',
  '1-3273\t135.7265\t34.73719\t154\t大和川',
  '1-3274\t135.6806\t34.70065\t299\t大和川',
  '1-3275\t135.7372\t34.72528\t119\t淀川',
  '1-3276\t135.6833\t34.69572\t302\t大和川',
  '1-3277\t135.7149\t34.77338\t245\t大和川',
  '1-3278\t135.7193\t34.7691\t229\t大和川',
  '1-3279\t135.713\t34.76973\t255\t大和川',
  '1-3280\t135.7177\t34.66087\t178\t大和川',
  '1-3281\t135.7219\t34.66975\t158\t大和川',
  '1-3282\t135.6927\t34.6567\t171\t大和川',
  '1-3284\t135.7348\t34.74642\t177\t大和川',
  '1-3285\t135.7124\t34.75187\t185\t大和川',
  '1-3286\t135.7215\t34.70684\t129\t大和川',
  '1-3584\t135.6921\t34.6788\t284\t大和川',
  '1-3585\t135.6939\t34.67655\t207\t大和川',
  '1-3586\t135.6986\t34.67975\t139\t大和川',
  '1-3604\t135.7345\t34.72951\t109\t淀川',
  '1-3605\t135.7423\t34.72829\t125\t淀川',
  '1-3606\t135.7432\t34.7286\t99\t淀川'
];
layIniData[1] = new layIniInfo();
layIniData[1].name = '河川名';
layIniData[1].shape = 'line';
layIniData[1].zindex = 1;
layIniData[1].obj_Num = 77;
layIniData[1].lineColor = '#000000';
layIniData[1].lineWidth = 4;
layIniData[1].pointObjectRadius = 1;
layIniData[1].opacity = 0.8;
layIniData[1].visible = true;
layIniData[1].legendVisible = true;
layIniData[1].mappingData = 0;
layIniData[1].encodedPoints = [
 'i{zrEoxk{Xt@s@t@u@d@s@t@gBd@iAXu@nBcEvAoCl@cAd@u@@CZi@dAuAh@m@b@Wh@UfA]h@OhC_AnB_An@a@vFgDn@]xFiDl@[n@]^Ib@It@?xATvB`@~Ch@xB`@hDjAlAZ~CdA~@Vl@Tf@HtAC|@I~@Uh@Q',
 'wtyrEkbk{XECE?kBg@OE[OKK[]][g@g@OEq@U]EYBWDgB?c@EqBi@o@[]EyA]e@C]BOIm@m@]UKEGO?}@COOQs@]QUe@SO?YKKi@Ss@IU',
 '_jprEugi{X@NR~@Xx@Tb@HZHZ?`@EVEJKNaAh@UTE?SVy@t@cAdA_@ZGD',
 'enbsEoii{X[a@eA}AAEw@iAOWIWCOAEIi@Em@?UGQAc@A]CqA?UEu@CQEs@Ag@AO?y@HeALy@@CB}@',
 'clasEyum{XN\\HZBTFPDZFP@P@\\',
 'ijasEyom{XHx@Bh@BhBBV@r@MjAQlB?JCf@Bh@Hn@Bl@?`DDl@Jb@L`@LVZb@l@n@n@r@N?NKD?n@f@NJN?JEf@m@DCB?pBfBZZt@n@`@b@LJ`BfBNTTVdAzAp@dAdBnC@B`@l@x@tAL\\NPb@vATbAn@fDHf@',
 'wm_sEoyf{Xm@a@',
 'k{orEqne{XD{ARc@n@_ANUN]Ba@Bu@Au@C]e@cC@_AC]e@cAKi@Eg@EWIQg@s@SO_A[MKEOIg@o@{ACKDgBA]B?A]EOe@m@_@a@MQO]Oa@Og@MOi@a@Y[KWCK?u@H_ACOaAkAIUAa@Ac@Ga@IS?y@Ba@Ai@My@Eg@?_AB[GcAC[?a@j@eARa@BQAg@BUZa@^u@Tg@Ha@@K',
 '}lrrE_ek{XKZWVCDOZUr@Kt@Qf@OPUJk@JIDMZKPEJk@\\',
 'ourrEoyj{XQNSHUDQD{@jAMVW`BCJSb@CT?b@AdAGn@W|@?`@JZj@t@BB',
 'a{rrEmej{XFBVBxCJ`@JXJTTJ\\?bBLt@R`@ZZx@r@DN?t@DP@HH\\?ZCJEDk@r@Uf@IZO~@Ah@@T|@vC?HENWr@K`@XjEOh@g@jAKl@Cb@ENEx@?dCPZXhABf@',
 '{yesEmtj{X\\JTDVCfC}BdBg@bCHnBf@jDbDvGjGlCfDt@}Bl@Qd@WN[HQBW?g@Co@HMNO`Ai@HKXu@t@qATa@`@u@PUDEh@[`@KNQt@iBNa@HELIPCt@Pj@H|BD`CHT?`@BdBC~@Il@Cx@Kb@E|@ElANd@HTDD?jAV`AN^Dp@Dz@?pAEbBIH?`Ai@ZO',
 'c{qrEsmc{XAWBKHKRc@DO?QD_AHUROFI?Ki@c@CCGUA]GUUg@COAi@BId@WHK?[EOKIa@?ECEEGSCg@EOKw@@QN]@I?o@CWYqACU@WTg@BQCUA]BKVc@DG@?BI\\[^[JWFa@H[BEDI\\QJQ?a@GWGa@?WAWCa@Ea@Ea@?[HKRCb@IHKBWDKLQHIHCN?t@ZXHDOH]^wANs@BcAB[H]Xu@Fi@@s@B[F]J[H]BU?i@Em@Qo@g@oAM[?UHOZu@DQBg@B_AFK`@g@HO?UWi@U}@A[Vs@BEBW?][u@]o@o@oAMUIUEWCy@Hi@?[[eAE[?cADQt@kA\\u@JQ?g@AC?UCO?_ABCBoAAK_AuCB[J]Ra@DQ?m@Cc@@o@DO^c@VUZUHUFg@@gBBU^mB??CWEQCWD[n@aBVs@BCH[Nu@DUBa@Ey@?U?]BcAPgBCoAAQ',
 'muprE{jj{XAD@BDf@Lt@Lf@N`@JPJZ@NCPUh@?JDTTh@^hARh@Zb@t@x@Tb@Nb@Nt@DhA\\PCTETOh@Qx@?`@DZ\\t@X\\LJ^P',
 'y}esEmmi{XFuAGcAa@cASs@?WB[ZkA@KLeA\\u@Nc@DU@W?O@W?i@AK?eABy@CQGUUaBA[@Kd@_ARi@Ju@d@cA',
 'stfsEgyi{XRId@i@PUR]h@eALKTIx@?`ABXELEh@a@v@m@NKPm@FUH[FK|@kADKSuABQLm@\\eCNmAFu@BOJ[PQ^Qb@EN?RH^Zd@x@HJTN',
 'ssbsE{_k{Xd@dADNHTd@|@|AtCJPHN|@h@`@P',
 'gowrEksc{XVeA[}B_@m@OOUWS[M[UWQc@AEg@_AEKm@oA}@_A[i@[_AG]?s@\\qABEXcANkA@?Hs@?}ACo@Qu@O_AOs@o@cAOa@Qo@Qc@oAuAO[GQGK',
 'i`xrEwie{XYs@I]Qy@K]k@aBa@cAi@oAc@s@OOU]KWEKIUCWAg@Oc@IUEE_AaBEK@[DUXeA?c@DKLKTODKBOBWZ_AFU@I?Q',
 '_h}rEedn{Xe@Uq@Oa@?g@JOB_@JOJQNIN]b@KD[Hw@N{@?EBO?MISKICaBC]IMKUa@E]@mBGUUQSW?K',
 'anxrEacc{XBOHoA?]Og@Sa@KKYIGEm@g@KKGU@c@Lo@Fc@?a@KiAAi@KoAC}@@a@?eAQkAC]CiACc@Mm@CIEQAc@NeA@i@EWY]AEMI_@a@K[Ic@?KOs@IWMQWOaAOKEOQEQCWCiBEc@E[Ss@IUY]EK??Iy@I}@GW[s@M]Sc@]}@KW',
 'qbyrEwie{XSo@K]?ERsB@[Lu@Xs@B?DWBO?a@CQGQEQKs@McAGg@EKI[]cBIuAB]HWj@s@FUD[BOCi@Oy@w@yBK]AI',
 'aeyrEwqf{X@El@WFCx@Qb@EJ?PDZPFJDZ?nBBh@DVLb@TVf@N^B`Di@XILI`@WJEdA?TC@Ch@K~@KrAUPCPE',
 '}h_sEczk{XPl@DJX`@f@x@j@n@PZLZTbA?Z@x@N`@DHBDTh@P\\\\pARhA',
 '_zasEkxk{X?HHh@ZpA@?F`@PjAJl@?VQ\\QtA?J@JDNb@h@DBHN|@bAjBbB@B|@h@`At@DBNJ?BZ\\Vh@',
 'yv|rEoog{XcATO?MKAIc@kAo@qA]m@UOWEWB_@Hk@\\u@Z[POTINSf@EZO`@MNs@b@QHUDw@DG?SHeAl@i@Z{@\\m@Z_A`@UD]?o@E_@?o@JKHeAt@OHMD}An@w@Z_Al@i@?iAC[D}@Ti@TyCpAQDu@PsBEuAE]Ew@QaA]i@O_@EgA?k@BiANU?CBK@cAZaAf@',
 'go_sEqzf{Xo@\\}Ab@o@TcAZc@Pm@b@e@h@cA|@gAr@cAn@g@T{@VoBZ]JeAn@YJYDYBo@Cc@EWKmA[u@Kc@?_@Jy@f@KNAHQl@',
 'ktdsEahj{XrB[~Ay@@CjDKt@kA~A[`@BhABhDJfBDjAx@tAVf@P|@VX?l@DpDBn@Ix@OnC_AHCl@?^JdAn@x@\\~@NF?L?t@B',
 'm__sEsdk{XHBt@H|@DpFDP?DCjDx@LB~Bt@jD`BvBhADDp@\\`Ah@JDbAZRDd@HpA?|AQh@E`AQTCTEL?',
 'ekasEq|j{XHCd@JNBNDZ?d@EdAQjJaCpFuAtA[BChHaBNE',
 '}d`sEugk{XXEPI^EnAEn@BpCCjDOhC?f@B~@PnATtEjAjANt@DJ?',
 'utbsE_ij{XBCTCZKZUX]v@y@dA{Af@]?C~@}@',
 'cjbsE{rj{Xp@Cp@Qx@]^Kj@Ch@I`C}@HIzAm@PQPKbB]fAa@l@Ox@E~C?HB',
 's~}rEijn{XRKNUDKBy@BODgFBKDg@DeARgBh@m@JW?KE[]_ACO@]Nm@',
 'yz}rEsdo{X@E@]G[IK_@i@IUGc@',
 'w|}rEejo{X?E?UXcABQ@C@E?OFs@FmBBQ?{AE]Cs@?_ACWECKOSEe@WIKIg@?m@Ba@H[Lm@DQj@mBZu@h@wAXkAF[DUDKFKVWFKHQHQ?O?QE[Yu@EKWm@UaAI[I[',
 'yy}rE_}p{XCQKUUUg@c@QQSUcAaAe@g@gAeAgCeCo@s@YUe@m@Yc@OWU}@COQ}A',
 '}n}rEcrj{Xh@EDCFUCoAA}A',
 'shxrEinf{XJKf@u@d@o@LUFKj@s@LQf@i@`@eAHO\\UNIb@EXIVKp@u@@EZa@nDcDX]Vs@\\kANa@b@a@NK^OhAUdAIx@?ZD^NPB`AEd@?t@UxAc@Za@f@OdBCt@?b@K^OZOR[Ti@RWTQt@UZK|@m@^Qd@Ud@QPEdBo@b@Q\\INCx@Q^K\\[NQ^o@Pa@|@iCt@wBN]',
 'szrrEekf{XD_ABi@A[?}@Do@@[Ai@Ka@Uy@Ec@Cm@?IEs@Y[o@uCIS_@oAEIe@KaBa@ICCEe@wASy@WuAK_AEy@AeCF_ALiANs@Tu@f@kARUj@c@tCi@\\CXg@h@y@Ju@ViC?[',
 'sgprE_eh{XVJ^DVB^?p@OvCs@rGoAnBQf@B|@H|@PnBr@ZTr@r@XVTJb@Hr@Hl@?t@IZQHWTwCl@iERs@Rc@JOJIZI^?\\Jf@Z`@b@h@n@Tn@Bb@A`@Kb@UVo@ZSVM`@C\\H`@LPXNRHRCXEXWpA{ATQd@KhAQXHPVl@jA`@x@Pt@Rb@DJ\\`@@?LDZ?RE\\QZQJQTg@NOl@U\\I\\KRKZWbAkAHCNHZZHPHTP|@Xt@t@fBNVLDn@CHCX?XBHDl@TbBbAh@`@TP^rBRn@NjAVZd@BnA?h@VJZB`@If@W\\[NCJ@TRf@R\\xAnBTTXh@',
 'kyrrEqmh{XtAKlABfAJl@J',
 'sprrEcmh{XTDx@ThA\\',
 'wkrrEikh{X\\NzAZjANlAD~@BbBIbBQdCo@fAc@dAs@vA{A~AaBd@s@fCwCRQ',
 'mfqrEc{h{Xf@i@bAi@h@Ob@C~@?x@HbAPvBh@dAf@x@p@d@f@Xf@HZ',
 'uyurEuhh{XFJn@VvAt@tA|@TNh@Vl@Hl@BxAY`Cu@~@Uz@E|@D|@?r@Ex@Qn@U|@Ep@H|@n@zAfBr@n@rBlBt@b@p@T',
 'spprEavh{XJ\\\\fBb@nB|@zCb@|@RTf@\\r@\\',
 'eitrEg{g{X`@Ir@Ob@]jAcBx@gB^y@b@m@`@Qr@[|@EtAEvAVt@JrAId@EdDm@hDo@^I|B]r@OrB]l@E',
 'km}rEoxj{Xp@K~BQxB]pAQj@I~AWhBc@r@Wj@U|DiB~B}ApE{Ct@i@d@[bDyBl@c@x@Wl@Oz@BnBD\\?xAN|AJr@?dAO~@QxBo@xAc@~@a@j@[\\Ul@i@',
 'gnorE_wc{XQcC?qDCeCL}@^y@Ho@?y@EkAe@qAs@_CM}@N[X]TEx@D`@i@n@oANQ\\Uv@QPKz@o@XK@?p@C`AKPO\\y@PUl@a@XU@OEKECWKu@a@_@g@O[CU?WBOHQb@[~@c@XE\\?r@PL?HCZWTU~@oA^[VO',
 'gsnrEyse{Xr@i@?CFE|@o@PKAKQyB?]@ILQXEd@IJGTUb@m@PQfBm@~@c@x@[LBB?tAt@XBRIf@Et@KV?NDHTLt@Dh@JZRVRJNDXBVEd@Up@c@d@Qx@WFCJETMR]BI?Q@oAF[N]PWZUZUTIREnABb@Ch@KZO^o@BEBCn@cAz@wABCn@c@DE',
 'cmrrEazf{XACYm@Ui@I[?[BUBUH[Mi@Y[U]EWPu@TmBHo@Gm@Gg@Co@FwBKy@?cAMc@?o@Fo@Pu@LeABi@CwAJg@l@eAl@oC',
 's}dsEo{k{X`BiA~ACjC`@~AJb@DdA?x@UTIb@a@fA_A`A}@lAs@^EV?b@JXPd@ZVJ~ABdBDn@HZJ^TZZ\\h@Zh@X\\ZNXDhA_A',
 'ygzrEs_h{XfDcAvBChCIhCEbCl@',
 'wb~rEmll{X?]AQCu@Dc@NeAH_AAs@Ma@U[EICy@CUCEGa@?m@BU?m@?OFo@b@}@Hu@VaBHm@@{AGm@_@kAE]A[BU',
 'mb~rEmsm{XHeABg@CaBB_CD}@BUVoBX_AH]@QJo@BQHOJE',
 'isqrEmra{Xc@_A[kAKg@_@u@Q{AH_AIcAEs@By@CqAKgB?uA@sF^sF^oCWs@EUWy@EQe@}A?CQm@IOUm@WcA',
 'wisrEkid{XfAsBDUNa@n@sB\\qA?i@McAEQEWAUEW@m@@QBuA@CBu@BQBOHqAFo@H]F[BORm@\\m@b@kABOD]?g@?i@CaBC]I}BIi@?s@D[T_ARc@T}@Zy@HKJUTQB?`@g@HWVuA',
 'aryrE{`h{XfBN@Cv@Kv@?TDTINEn@I\\INKVWRKp@Uf@KXID?xA[t@WrAQnA_@x@a@p@Qb@KZOXI`@Qt@Uh@KxAa@D?RBVJZ?r@Qd@IJENK~@}AJO?CTa@@CNUzBKdA?H?d@DlA~@b@f@LZJ`@N`@RPVPVNZ?VENIHIR]T[PKXKXEVIzA]f@[j@g@d@Wb@KrAQh@Kr@QRCdEbAb@JPDfATl@HHD~@Jr@J~@DhANbAJvCV`ANnANxBpCX`@',
 'oszrEeye{XLiAZs@Ny@Dc@Ga@Ea@Ga@@o@Ls@h@}Al@gBZQ^Kf@IXOd@o@^o@\\o@l@m@bAqAd@i@V?|Ab@z@f@\\\\h@n@Xl@f@n@p@\\f@Jf@?l@Hz@Pn@H^?`AChAQr@[fCkA',
 'iosrEwcf{XiDo@{@o@k@m@U]Mm@c@y@Wi@KkAUs@c@iAc@oAYwAIi@c@{A_@u@q@kA[[][g@[_@[i@Ue@Qg@]_A[o@g@c@c@uAi@',
 'omsrEsrj{XbGpA`A|@d@dAT~@Tf@l@h@~@h@l@PZ?',
 'oetrE{je{XH{ACa@Q]UQ[[m@_AUu@Cc@Ui@m@o@Pg@^Jb@BPU?i@SuAMi@Mi@UmBFkAGeCMsB?{AIy@',
 'mktrEesf{XUQi@OEEY?KH[\\UJODu@?}AOIEEWI}@B]B[Hc@@]Ca@B[Jo@?a@G]U_A?QFKr@c@p@o@LWF[?y@EoABa@',
 'ertrEykg{X?IBQRo@N]HUNg@Js@@]Ns@@a@Ci@EW?OBINEdCK\\WNW',
 '_x{rEmqg{XiAkAo@B]Ho@ZI?aBV_AVeATSV}@B_@OWIm@[]WQCwHnA',
 'sporEwtk{XQbBQ`BXnAIjAt@|AlAnBTlBUnByA|Bm@|BElDkBbEkC`BkCbCkBzAg@rBc@|ECJo@`DQt@EPSx@ETIPuAl@GDCD',
 'uqrrE{_f{XH}@Ho@B[R[TO`@Ql@UhAqATiAE}@E}AGa@@qAJcAEu@k@Wg@i@',
 'wc`sEyei{XlAx@h@h@`@dAH|@~EpAb@vAT~@PdA^pA^t@PnAMbBu@fBCzAHt@Xt@f@~@Nt@BrB?jASfBPVTZXh@LZ@V?f@El@?NZ~@Vn@BDRr@DVRlBBh@Bx@?jC',
 '_ucsE}|l{XG~@TjAx@|BB|BM|Ct@vBfAbEp@nBt@f@',
 'ykcsEc}k{XtA?xBa@bBP`CdAnAfBx@pCt@|Df@lDj@jCFPr@lB',
 'kr`sEuap{XRc@^]T]Rm@HW?wADWReAHu@',
 'ob|rEexo{XMwAi@iAUcBiAcBe@kAMqAOoDCeA}Au@{@uAm@W{@Uu@m@]?}@\\sAvAcADcAQk@g@cAcBm@}@}ACM?S?KBKBKPMNG?G?e@Cw@CoAEi@Ci@C[EKCw@][KQIi@Ey@Cc@K_@O',
 'mr_sEyal{Xt@PNVNBpA\\VJVVJJt@nATh@',
 'uysrEsae{XEkCXyBV}DTuADwB',
 'mwsrEcve{XFkEmAeCcAuAa@US[OWAo@AW_@s@e@Qi@Bk@BaBaBe@eAW[UQo@Og@cA',
 'yz}rEsdo{XGEKKYIiAo@GWNWr@s@'
];
layIniData[1].selectedMappingData = ['区間種別\tCAT\tpaint'];
layIniData[1].legend = [
 '#000000\t#0000FF\t#00FFFF\t不明\t１級指定区間\t指定区間外'
];
layIniData[1].selectedInfoData = ['水系域\tCAT\t','河川コード\tCAT\t','河川名\tSTR\t','原典資料\tCAT\t'];
layIniData[1].objData = [
  '2-171\t0\t1\t1\t大和川\t8606030067\t富雄川\t数値地図25000',
  '2-536\t1\t1\t0\t大和川\t8606030000\t名称不明\t数値地図25000',
  '2-537\t2\t1\t2\t大和川\t8606030054\t乙田川\t数値地図25000',
  '2-538\t3\t1\t0\t大和川\t8606030000\t名称不明\t数値地図25000',
  '2-539\t4\t1\t0\t大和川\t8606030072\t中村川\t数値地図25000',
  '2-540\t5\t1\t1\t大和川\t8606030072\t中村川\t数値地図25000',
  '2-541\t6\t1\t2\t淀川\t8606040000\t戎川\t数値地図25000',
  '2-542\t7\t1\t1\t大和川\t8606030053\t大谷川\t数値地図25000',
  '2-543\t8\t1\t0\t大和川\t8606030057\t別院川\t数値地図25000',
  '2-544\t9\t1\t1\t大和川\t8606030057\t別院川\t数値地図25000',
  '2-545\t10\t1\t1\t大和川\t8606030057\t別院川\t数値地図25000',
  '2-546\t11\t1\t1\t大和川\t8606030067\t富雄川\t数値地図25000',
  '2-547\t12\t1\t1\t大和川\t8606030055\t神田川\t数値地図25000',
  '2-548\t13\t1\t0\t大和川\t8606030000\t名称不明\t数値地図25000',
  '2-549\t14\t1\t0\t大和川\t8606030000\t名称不明\t数値地図25000',
  '2-550\t15\t1\t0\t大和川\t8606030000\t名称不明\t数値地図25000',
  '2-551\t16\t1\t1\t大和川\t8606030067\t富雄川\t数値地図25000',
  '2-552\t17\t1\t0\t大和川\t8606030060\tモチ川\t数値地図25000',
  '2-553\t18\t1\t1\t大和川\t8606030060\tモチ川\t数値地図25000',
  '2-554\t19\t1\t0\t淀川\t8606040000\t名称不明\t数値地図25000',
  '2-555\t20\t1\t0\t大和川\t8606030061\t薬師堂川\t数値地図25000',
  '2-556\t21\t1\t1\t大和川\t8606030061\t薬師堂川\t数値地図25000',
  '2-557\t22\t1\t1\t大和川\t8606030047\t竜田川\t数値地図25000',
  '2-558\t23\t1\t1\t大和川\t8606030210\t尾谷川\t数値地図25000',
  '2-559\t24\t1\t0\t大和川\t8606030000\t名称不明\t数値地図25000',
  '2-560\t25\t1\t1\t淀川\t8606040145\t天野川\t数値地図25000',
  '2-561\t26\t1\t1\t淀川\t8606040145\t天野川\t数値地図25000',
  '2-563\t27\t1\t2\t大和川\t8606030000\t名称不明\t河川基盤地図25000',
  '2-564\t28\t1\t1\t大和川\t8606030067\t富雄川\t数値地図25000',
  '2-565\t29\t1\t1\t大和川\t8606030067\t富雄川\t数値地図25000',
  '2-566\t30\t1\t1\t大和川\t8606030067\t富雄川\t数値地図25000',
  '2-567\t31\t1\t2\t大和川\t8606030000\t名称不明\t数値地図25000',
  '2-568\t32\t1\t1\t大和川\t8606030067\t富雄川\t数値地図25000',
  '2-569\t33\t1\t1\t淀川\t8606040409\t山田川\t数値地図25000',
  '2-570\t34\t1\t1\t淀川\t8606040409\t山田川\t数値地図25000',
  '2-571\t35\t1\t1\t淀川\t8606040409\t山田川\t数値地図25000',
  '2-572\t36\t1\t1\t淀川\t8606040409\t山田川\t数値地図25000',
  '2-573\t37\t1\t0\t大和川\t8606030000\t名称不明\t数値地図25000',
  '2-574\t38\t1\t1\t大和川\t8606030047\t竜田川\t数値地図25000',
  '2-575\t39\t1\t1\t大和川\t8606030209\t文珠川\t数値地図25000',
  '2-576\t40\t1\t1\t大和川\t8606030047\t竜田川\t数値地図25000',
  '2-577\t41\t1\t1\t大和川\t8606030047\t竜田川\t数値地図25000',
  '2-578\t42\t1\t1\t大和川\t8606030047\t竜田川\t数値地図25000',
  '2-579\t43\t1\t1\t大和川\t8606030047\t竜田川\t数値地図25000',
  '2-580\t44\t1\t1\t大和川\t8606030047\t竜田川\t数値地図25000',
  '2-581\t45\t1\t1\t大和川\t8606030047\t竜田川\t数値地図25000',
  '2-582\t46\t1\t1\t大和川\t8606030047\t竜田川\t数値地図25000',
  '2-583\t47\t1\t1\t大和川\t8606030047\t竜田川\t数値地図25000',
  '2-584\t48\t1\t1\t大和川\t8606030067\t富雄川\t数値地図25000',
  '2-684\t49\t1\t0\t大和川\t8606030052\t擽原川\t数値地図25000',
  '2-685\t50\t1\t1\t大和川\t8606030052\t擽原川\t数値地図25000',
  '2-2899\t51\t1\t1\t大和川\t8606030056\t有里川\t河川基盤地図25000',
  '2-2962\t52\t1\t1\t大和川\t8606030073\t美の原川\t管内図（縮尺50000以下）',
  '2-3048\t53\t1\t2\t大和川\t8606030059\t東生駒川\t管内図（縮尺50000以下）',
  '2-3301\t54\t1\t0\t淀川\t8606040409\t山田川\t数値地図25000',
  '2-3302\t55\t1\t1\t淀川\t8606040409\t山田川\t数値地図25000',
  '2-3303\t56\t1\t0\t大和川\t8606030055\t神田川\t数値地図25000',
  '2-3304\t57\t1\t0\t大和川\t8606030209\t文珠川\t数値地図25000',
  '2-3346\t58\t1\t1\t大和川\t8606030059\t東生駒川\t数値地図25000',
  '2-3351\t59\t1\t1\t大和川\t8606030047\t竜田川\t河川基盤地図25000',
  '2-3354\t60\t1\t1\t大和川\t8606030211\t宮後川\t河川基盤地図25000',
  '2-3355\t61\t1\t0\t大和川\t8606030000\t名称不明\t河川基盤地図25000',
  '2-3356\t62\t1\t0\t大和川\t8606030000\t名称不明\t河川基盤地図25000',
  '2-3357\t63\t1\t1\t大和川\t8606030058\t出合川\t河川基盤地図25000',
  '2-3358\t64\t1\t1\t大和川\t8606030058\t出合川\t数値地図25000',
  '2-3359\t65\t1\t1\t淀川\t8606040158\t宮の前川\t数値地図25000',
  '2-3364\t66\t1\t2\t大和川\t8606030054\t乙田川\t河川基盤地図25000',
  '2-3382\t67\t1\t0\t大和川\t8606030056\t有里川\t河川基盤地図25000',
  '2-3418\t68\t1\t1\t淀川\t8606040157\t穴虫川\t河川基盤地図25000',
  '2-3439\t69\t1\t0\t大和川\t8606030000\t名称不明\t河川基盤地図25000',
  '2-3440\t70\t1\t1\t大和川\t8606030073\t美の原川\t河川基盤地図25000',
  '2-3441\t71\t1\t0\t淀川\t8606040000\t名称不明\t数値地図25000',
  '2-3585\t72\t1\t0\t淀川\t8606040000\t名称不明\t数値地図25000',
  '2-3587\t73\t1\t0\t大和川\t8606030210\t尾谷川\t河川基盤地図25000',
  '2-3588\t74\t1\t0\t大和川\t8606030058\t出合川\t管内図（縮尺50000以下）',
  '2-3589\t75\t1\t1\t大和川\t8606030058\t出合川\t管内図（縮尺50000以下）',
  '2-3596\t76\t1\t0\t淀川\t8606040000\t名称不明\t数値地図25000'
];
