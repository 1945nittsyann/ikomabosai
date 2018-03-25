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
 'obbsEghh{X`@H`BHj@BdATXJNVR|@Ll@?t@Ix@CdA[hAUZsAvAqBvB_@n@{A|B{@hC_@zEv@lDh@|A~@fBXx@RjCPb@d@\\|@Hn@Dz@Jj@Eb@C`@I^]l@g@f@]bBm@n@]l@i@b@]bAYr@Eh@Jh@Nz@l@d@VXf@V`@L\\Dn@Jx@Dr@HZJ\\^b@XNLBD?\\DZEJ?h@[|@Wl@Kb@H~@Nz@Jf@DN?r@?^Oz@UxAm@z@Qx@Kr@Ol@a@x@a@t@c@|B}Ad@g@d@[f@WZId@Iv@Uf@[lAo@RKt@c@\\OVOLEXEJCJCXC~@?l@NHJLN^`@J?RKv@Uj@IZB`ANLBxBV`@Dl@Kx@OtAa@FCdAg@nAi@PI~@UpAD`@El@a@j@Uz@[FChDuA??ZElAEv@Ux@[bAg@bDiAVKnAm@x@WTQLQDa@Dg@B[Vg@d@a@l@W~@c@h@C`@Tl@hAz@dCXTf@CFCZBV`@N`@HDXVb@VZl@JTFPP`@H~@Rt@Rl@ZhAG\\W`@IZ?DCr@Jn@R~@Nx@Rn@Th@^x@f@n@f@r@Zh@b@Vr@`@v@\\b@TVBNCPCJBNDXV^n@Rf@fAfBb@r@Vb@FR|@tAb@b@Tt@r@xBVh@BD@DVl@TNFD~@b@t@f@f@Vd@VJDDPPf@Zx@Rn@BHXb@Fh@Rn@Tr@\\f@p@l@BBZTj@`@^VLJJTB`@DXVPBBf@Zh@\\VNRZRVLNr@Z^\\f@\\P\\`@Tv@Pb@TRPDNCb@E`@Yl@Gx@Bx@N|@\\rBDV?BLbAB|@C~@KtC?t@Ar@D^N\\Vb@`@x@Xr@Zr@\\l@h@l@p@l@^`@n@ZPVRZ|@`B`@h@XZVHb@JL?RDVDl@PBB`A`@h@Nl@Vp@f@h@n@b@n@Xh@nAjAp@VtAr@bBhAb@l@b@b@p@~@Zn@Jx@Ph@Xf@NVRNJH`@Dl@Eb@JDDPPVl@b@zA^tA^nATVn@ZVJZJf@E\\a@\\a@|@Up@?f@JZZ^\\NEJE|As@ZQZOrAo@TKr@Wn@K\\?jAPv@J|BVlAJdDVt@H|@ZlAn@r@\\VB`@BJBd@IzCQpAVdAB`@?fAD??t@En@C~ACP?tAEPy@XW`@a@d@]h@]x@y@Zg@xA}AFKT[pAeBl@c@Za@tBu@h@Ql@WbAg@X?TCr@?l@O~AeAh@c@x@cCJ[r@KxAQ~@OFC`@EfC\\bAHf@BxDVvBHv@Db@?^DHERETKXOFE~AeALIJEx@Ur@I~@DX?BBnB`BrAvAh@b@NTb@`@RPp@n@`@DDB\\HJ?RDNBHBDBP?RDPBPBVD~@N|@N@?JDnAr@b@\\`AjAhApAz@|@\\Vx@x@TTbAh@vBx@l@Jh@BrAQn@DPDNH|@hAxAtAb@`@XPlCvBfApAvA`Bn@r@h@NH???\\?n@I??L?v@?RDdANVDLDx@JZCXEVEnAf@`Bx@~At@\\D`@?|@UnBkAdAcAZg@Mu@i@cDOeAAy@Ag@Iy@?wAD}@D]Cy@WcAI]AIUeAEy@By@Hu@?CXiAhB}Fb@oA^u@RKRUXg@ZcAPoAAQSkAK[Cc@c@wBIm@?K?UT{Al@iCRgBFc@NeAJsAPm@ZwAFg@@]Eg@Ic@Cg@@MB[HWTQ~@[VKd@KpBeAtAi@BCNIbDaBfEsBvAcAz@c@^Kb@IbAUl@IH?`@?lAJh@TXDXB`@Eh@[\\QP]PeADeAFy@BIJi@Ba@@IHKNEn@Ah@]b@u@?WMWWCs@He@?iAEgAKq@Oy@U[WMKe@g@Ui@Fs@R[l@[f@WZm@RqAHc@VwB@[ReAPm@HKZc@dAy@r@c@\\Iz@In@Q^Qf@g@~@g@l@[ZWXy@P_ABQJc@Hg@Dg@HkAB[LWZUb@[XQZUVUXu@VeAFa@J[FU@o@C]MqAMo@C_ADu@h@sB|@yB^mAv@qCd@iCN}ADa@Ha@@EB[Dg@Ba@NsABo@Bg@CmDCg@E}@OiDCWMiAUcBCm@?}@?a@Ac@D]?a@OUm@g@k@a@_@Uq@]UWC[@c@\\wA`@iA`@u@\\U`@U^i@h@qAJm@Di@Ks@[oA]kA_@eAOm@CWC[@y@Ji@Z}ADiA@cBB[NW^OfCg@XQZo@b@_AT]XUb@IJCEa@g@sFCIa@qAeAiDK[}@iCaAoCa@kAKi@?EU{AUeAMi@S]Yg@e@a@cAWu@IyAAGBu@HOICUCE?s@Eu@a@}@]Oc@?aAV[HYEoAa@}A@QIEICIMQYa@k@QyAQ{Bg@}@CoAQMDS`@On@Sl@OP[BkACk@B}@NyAKYEm@P[OUm@o@s@O]Wg@W[K]Mm@S[i@QK?s@I_@BQJ_@h@c@f@m@NcAVg@Zc@f@MNcA~@]Nk@Jw@?e@Ne@f@yBbC{@|@m@Vy@T}@?o@Om@W{@m@o@O{AQU?U?G?WCa@f@i@\\sB?YJi@~@c@x@ED??[Pe@Bg@I_@U}BqAIEsBiAw@g@m@Hc@Pm@f@a@f@i@?kABYEe@Qc@Ku@IYDYHi@P[Jc@BSIYUi@[SCIBQBQl@If@[dCYr@c@Vc@ZQ\\ENS~@I~@Or@Mr@[n@SPU?q@Q_@Qc@Oi@KYCG?SJm@Ta@`@UTSTa@Pu@H[?_@Ca@Ja@TO@_AIg@C_@?UJITy@vBK\\YN[Uc@g@]UWCe@P]Pg@ZoAb@aBx@An@NVA\\_@V[TYP_@Hm@D{ADMBc@P[\\[`@oA`B]P]He@CSCs@i@QKGIYQYUg@U]EW?i@Jq@Pe@V_@HiAHc@Nk@C_@He@Hk@Dw@Ti@Pg@Nk@ZeA`@m@\\[Bc@?m@Dc@JoA`D[J_@Tc@\\[\\i@h@e@l@_@Vg@@_@E_@CoBIQD]Ei@EKHUPk@Tc@DI?OB_A?_@Es@]u@i@c@D[N]?_@Wa@Ui@]s@a@[Cg@Hy@\\QJUVe@ZEDIHOJcCfBGB_@\\o@h@]l@_@`@UJk@VeAQu@Oe@Ke@Qk@c@KKk@][g@CKIc@Go@M]SQ}@Q[?O?KHOJm@\\e@ZUH_@Ea@Kc@g@Og@M]MQo@][Kc@Jo@vBGb@En@I`@ENU~BYfBUfDSx@Sh@Oh@?BQVSPo@Hs@G]?oA]s@OA?EB_@TIf@W`@WZ]Nm@BYI]ESKKEYOKU[u@Qa@SWOg@Ec@T[HUIm@Km@Qa@Qm@KKCIUKk@c@YWYc@Ic@V}@BOFm@DU@OJm@Hi@ZmB??D]?c@Fg@H]?CFURkABa@?c@Dc@Fg@?iA@[CkAAg@Ca@CUEUSE[HWBEBUBm@Jm@y@iBwBRUFW?[Mg@]QUQ_@KICi@QOQEg@@o@Bm@D{A?_AEo@O]y@iBI}@Ao@?g@c@iBYkAAi@C?g@C]E_@c@QWEu@Hg@Rm@Po@@UGa@k@OOIUESIUIWIWEMEQBa@T]PIPGNUb@Yn@O|@_@l@W`@M`@MHYCaAu@[c@Fu@Jy@Jm@@m@AWIs@]Wo@DQIQKWa@WU[K_@]]UYWc@_AUa@Sa@c@QUBKHWPm@\\c@T_@?a@O][O]Ec@Fc@DINUl@K@C\\EHQC]Oc@OOiAOCEOQCy@T]d@WN]HIFEl@[JQVg@d@]FORi@eAJMBUDU?E?KBMBUB_AJSB[VQJ[Ca@KWKGCq@WBOU][c@UKs@EkAN[O]OWUMo@OcCI]Eg@Bi@?}@AQGQYIe@EYCs@Pm@Ni@PUDa@Ja@Vm@\\q@b@[JUBQIEK_@WQW_@Ws@_AQQc@g@_@]e@Ke@I[UYWUg@Sc@_A}AeAmBa@UYE[?k@\\[Va@PiATc@Je@ZOZWZ[J]?y@Ii@DYCi@Dm@?OOe@Ui@EC?O?g@HqA\\WBs@?g@IJeANqCH]Nm@X]XC^JTPDJ@n@Hh@h@n@`@ZJDBBLOBi@Ey@Dg@t@O`@I^ELHN\\Dt@Sb@QTK`@BZPNZJb@BZDp@PT?TKDa@Gc@SWSc@Qa@K{@AKHKJDLZTJF?TCd@EZP`@t@TT@?X?f@WHKCa@Eg@Oo@EUDIf@D`@HDPE\\JPb@Jj@?LKVOh@]p@WZCd@QX]Xc@ROZ?jACd@N|@T~@VZI`@WXW\\WD[As@KQa@E]JYCUQOWa@EUE[B[De@Bg@?SQB[F[?UYUC?]W_@K[?SHIZ?DA`@DZEx@[`@g@PK?o@U]CC?k@Na@Hc@EYI[WSQQBOPGDW\\Ub@e@h@QTa@Ne@Ds@Ka@Ci@?_@BW?s@Ka@EYEQCuAOWUMg@Em@J]Xa@Ri@H]BEGm@S]e@i@[y@?EIc@Sa@Uc@Gc@Ng@Ns@D[Hm@Na@X]NGVDJNHTZn@RZd@|@|@hBXh@PVbCxBb@Tf@Dh@EdAs@ZWNKHIR[Fs@g@i@GIOWCQ?i@Fu@@a@EQKUYCUBWN]KCm@Yg@YIY?U\\IHOJOJc@?]I_B]k@KS]Is@DWXa@^OZOPIXE?Ug@IeAIc@OIc@X[j@Ih@Nn@Nb@JZJREB?^[^c@R]Tg@LEDn@B`@ZTVBZUDa@Fs@Co@Im@SmBCa@Ac@@WHm@Ca@Ba@Bc@Hu@Gu@K}A?K???KTiALm@HOJUHUb@y@@?^eANo@J]H_AEa@Kg@MOOBKJGHCN??A?Y|@g@dASh@KNA?CCKIGQYeAMEKCOIOIMBKNKh@Gb@g@BaBBG?Ai@Cg@?U?WVQVULg@TONATCRCPCtAa@~Ay@FE\\KP[AEOEe@B_@CC?UKO[Ui@Q]WWYUWQG[Io@Q[MUOKa@OYKSOc@BG?UCSEYEENS\\EHIHcAr@a@Ve@JUDM?GCQEu@g@g@[c@Qm@Oa@EgAOWCY?iABy@?e@B{ABcB?qBCi@B[BM?UBwAH]C_@Km@c@[a@S[Ya@MWSs@Og@M[SWe@a@[E}@Ea@?QDUN[`@Oh@Qh@M\\s@n@i@h@Wr@Ub@[b@S`@eBhB[`@S`@Gn@SnASr@u@r@gBzAo@l@SZCDa@h@_@h@iAbA[Z]b@Sb@St@m@lB??e@|A[|@UZUNK?MBUD}@^YVa@b@m@n@UVy@hAg@`@]P{@Pm@Cs@IWE[Io@Wc@UYQa@U_@Qa@E]?SJWT_@\\o@~@Yh@OPy@vBOh@?r@ChB]dAu@pDM~@APKzAe@dAKr@a@~DIh@EPMdAWjCAx@ChAE~@UbAe@Zk@Pm@Ha@Ve@r@Yr@g@dCKf@Kh@G`@g@bCEB??o@Tm@E{@Qi@o@m@a@s@?{@NI?q@NWZ_@HyAI{A[uCCwCCkBDTfFZbC`@~BLjAFx@A\\CBCHOPSB}AO]OIEaBQKCK?QFETSr@}@xBa@b@[Zi@N_@?[O_Ai@}@c@MIA?q@Qq@ECCs@DeA\\s@\\a@H_AKs@Js@P{@TY?w@Kg@BcC~@i@JiA?o@OcA]gA[]C[Ji@f@m@l@i@ZITC\\Gl@SZs@\\y@x@c@Tm@POBcATK?o@D_ADsB?g@CUOc@m@WOc@EeBVY?g@Ko@a@k@Wm@Cw@JA?w@N[Ze@r@c@f@a@PiATmADqABi@?yAVw@Hk@Bi@I}Ba@u@?m@Dc@TEBGDgAx@yAt@_@DW?_A[kAOo@Cm@H]Nu@r@w@r@`@VbAl@xAn@|Ax@dA|AXx@J\\R`@RPDXEf@I`@O`@E\\D\\HVXdAPZn@zAn@xBJZ^hAZ~@l@~BT`BNzABb@@`@IzAKl@Sr@e@l@e@f@MJc@b@c@`@s@\\m@TYVi@n@]b@u@b@c@b@s@hAy@jA[`@_@T}@f@eATw@NeA\\y@Ta@VYf@g@dA[n@I\\Ib@Ef@DZBVPhBBdAEn@Ql@[x@o@~@eAbAKPo@r@y@h@CJ@h@@HJx@HTFDNT\\Ph@Pd@ZHPEdACl@D\\JZRPd@Tb@?\\Ej@Wj@]^Ix@CjBPr@Hz@JN?ZBP?V?vAf@`@PtD|Ar@\\b@HNPRZd@t@PVHJRPb@ZZN\\TRHDB|@\\bC|@x@\\ZZb@l@VJRDVE|Ay@t@m@HWCWIg@Sm@g@cAOc@EQAK?O?]Jo@v@gDNa@RO\\EVHd@TbBhBh@b@d@VjEhA`@Pf@Hf@?RCd@Ej@I|@ClABn@Jb@PHBl@Hv@Bp@Ez@WlAc@vAa@r@EjAEfDH|DPz@D^CB?PEHCf@KZUz@eAx@oAj@iAPCbA|@n@`@l@`@bDxBRHRCj@W|@o@^YDE~@i@b@Ob@KnBQz@Ot@WxAW`CK~AE~ACrAN|@V^P@?ZTVHTf@Rb@Rr@H~@FVZt@T`@HJ`@\\`@Z~Af@x@P|@ZTNJPFNHPVBn@HlAJ'
];
layIniData[0].selectedMappingData = ['生駒市概況\tCAT\tpaint'];
layIniData[0].legend = [
 '#FFFFFF\t'
];
layIniData[0].selectedInfoData = ['東西8km、南北15km、海抜77～642m、面積53km2、人口12万人\tCAT\t'];
layIniData[0].objData = [
  '\t0\t1\t0\t'
];
layIniData[1] = new layIniInfo();
layIniData[1].name = '避難所';
layIniData[1].shape = 'point';
layIniData[1].zindex = 1;
layIniData[1].obj_Num = 34;
layIniData[1].lineColor = '#000000';
layIniData[1].lineWidth = 1;
layIniData[1].pointObjectRadius = 3;
layIniData[1].opacity = 0.8;
layIniData[1].visible = true;
layIniData[1].legendVisible = true;
layIniData[1].mappingData = 0;
layIniData[1].selectedMappingData = ['収容可能人数\t(人)\tpaint'];
layIniData[1].legend = [
 '#FF0000\t#FF00FF\t#00FFFF\t#0000FF\t1,500\t1,000\t  500'
];
layIniData[1].selectedInfoData = ['避難所\tCAT\t','緊急避難場所\tCAT\t','災害区分（地震）\tCAT\t','災害区分（土砂）\tCAT\t','所在地\tSTR\t','電話番号\tSTR\t','防災コンテナ\tCAT\t','救護所\tCAT\t','無線機\tCAT\t','飲料水用耐震貯水槽\tCAT\t','特設公衆電話\tCAT\t','災害時用Wi-fi\tCAT\t'];
layIniData[1].objData = [
  '生駒市立生駒北小学校\t135.7231\t34.74124\t1370\t○\t○\t○\t○\t奈良県生駒市高山町12595番地\t0743-78-1100\t無\t無\t有\t無\t有\t有',
  '生駒市立生駒北中学校\t135.7226\t34.74068\t0\t○\t○\t○\t○\t奈良県生駒市高山町6794番地\t0743-78-1116\t\n\t\n\t\n\t\n\t\n\t\n',
  '生駒市生駒北スポーツセンター体育館\t135.7105\t34.77044\t760\t○\t○\t○\t○\t奈良県生駒市高山町166番地2\t0743-85-6606\t無\t無\t有\t無\t有\t無',
  '生駒市立鹿ノ台小学校\t135.7467\t34.73454\t1550\t○\t○\t○\t○\t奈良県生駒市鹿ノ台西1丁目5番地2\t0743-78-6282\t無\t無\t有\t有\t有\t有',
  '生駒市立鹿ノ台中学校\t135.7479\t34.73336\t1530\t○\t○\t○\t○\t奈良県生駒市鹿ノ台南2丁目16番地\t0743-78-7231\t有\t有\t有\t無\t有\t有',
  '鹿ノ台ふれあいホール\t135.749\t34.73393\t220\t○\t○\t○\t○\t奈良県生駒市鹿ノ台南2丁目3番地3\t0743-78-7966\t無\t無\t有\t無\t有\t有',
  '生駒市北大和体育館\t135.7351\t34.72144\t160\t○\t○\t○\t○\t奈良県生駒市北大和3丁目5077番地\t0743-78-1617\t有\t無\t有\t無\t有\t有',
  '生駒市立真弓小学校\t135.726\t34.71993\t1840\t○\t○\t○\t○\t奈良県生駒市真弓1丁目11番15号\t0743-78-4326\t無\t無\t有\t無\t有\t有',
  '生駒市立上中学校\t135.7168\t34.72545\t2260\t○\t○\t○\t○\t奈良県生駒市上町3000番地\t0743-78-4140\t有\t有\t有\t無\t有\t有',
  '北コミュニティセンターISTAはばたき\t135.7232\t34.71817\t2170\t○\t○\t○\t○\t奈良県生駒市上町1543番地\t0743-71-3331\t無\t無\t有\t無\t有\t有',
  '生駒市立あすか野小学校\t135.717\t34.70988\t1540\t○\t○\t○\t○\t奈良県生駒市あすか野南2丁目5番1号\t0743-78-6208\t有\t無\t有\t無\t有\t有',
  '生駒市立生駒台小学校\t135.7027\t34.70943\t1730\t○\t○\t○\t○\t奈良県生駒市新生駒台1番33号\t0743-75-0075\t無\t無\t有\t有\t有\t有',
  '生駒市立光明中学校\t135.7083\t34.71177\t1530\t○\t○\t○\t○\t奈良県生駒市小明町55番地\t0743-74-7447\t有\t有\t有\t無\t有\t有',
  '生駒市総合公園体育館\t135.7107\t34.71175\t800\t○\t○\t○\t○\t奈良県生駒市小明町1807番地1\t0743-74-7710\t無\t無\t有\t無\t有\t有',
  '生駒市立俵口小学校\t135.6893\t34.70597\t1900\t○\t○\t○\t○\t奈良県生駒市俵口町614番地1\t0743-74-8832\t無\t無\t有\t無\t有\t有',
  '生駒市立生駒中学校\t135.6942\t34.69883\t2040\t○\t○\t○\t×\t奈良県生駒市西松ヶ丘9番19号\t0743-75-0071\t有\t有\t有\t有\t有\t有',
  '生駒市立桜ヶ丘小学校\t135.7052\t34.69858\t1580\t○\t○\t○\t○\t奈良県生駒市桜ヶ丘7番15号\t0743-75-1980\t有\t無\t有\t無\t有\t有',
  '生駒市図書会館\t135.7085\t34.69639\t1030\t○\t○\t○\t○\t奈良県生駒市辻町238番地\t0743-75-5000\t無\t無\t有\t無\t有\t有',
  '生駒市立生駒小学校\t135.7063\t34.69157\t2240\t○\t○\t○\t○\t奈良県生駒市山崎町4番44号\t0743-73-4378\t無\t無\t有\t無\t有\t有',
  'たけまるホール\t135.6967\t34.69394\t980\t○\t○\t○\t○\t奈良県生駒市北新町9番28号\t0743-75-0101\t無\t無\t有\t無\t有\t有',
  '芸術会館　美楽来\t135.6949\t34.69687\t0\t×\t○\t○\t○\t奈良県生駒市西松ヶ丘2-20\t0743-74-1101\t\n\t\n\t\n\t\n\t\n\t\n',
  '生駒市市民体育館\t135.6902\t34.68786\t1120\t○\t○\t○\t○\t奈良県生駒市門前町9番20号\t0743-74-4701\t無\t無\t有\t無\t有\t有',
  '生駒市コミュニティセンター\t135.6987\t34.69205\t310\t○\t○\t○\t○\t奈良県生駒市元町1丁目6番12号\t0743-73-0500\t無\t無\t有\t無\t有\t有',
  '生駒市立生駒東小学校\t135.7159\t34.68044\t1670\t○\t○\t○\t○\t奈良県生駒市東生駒4丁目398番地110\t0743-74-3572\t有\t無\t有\t有\t有\t有',
  '生駒市立緑ヶ丘中学校\t135.6991\t34.68279\t1950\t○\t○\t○\t○\t奈良県生駒市緑ヶ丘2232番地\t0743-74-8833\t有\t有\t有\t無\t有\t有',
  '生駒市立壱分小学校\t135.7158\t34.67201\t1580\t○\t○\t○\t○\t奈良県生駒市壱分町356番地1\t0743-76-8615\t無\t無\t有\t無\t有\t有',
  '生駒市立大瀬中学校\t135.7179\t34.66629\t1730\t○\t○\t○\t○\t奈良県生駒市小瀬町911番地1\t0743-77-7891\t有\t有\t有\t無\t有\t有',
  '生駒市立生駒南小学校\t135.7059\t34.66545\t1480\t○\t○\t○\t○\t奈良県生駒市萩原町335番地\t0743-77-8021\t無\t無\t有\t無\t有\t有',
  '生駒市立生駒南中学校\t135.7063\t34.66707\t1520\t○\t○\t○\t○\t奈良県生駒市萩原町90番地\t0743-77-8121\t有\t有\t有\t無\t有\t有',
  'むかいやま公園体育館\t135.6965\t34.66332\t250\t○\t○\t○\t○\t奈良県生駒市萩原町673番地\t0743-77-0330\t無\t無\t有\t無\t有\t有',
  '南コミュニティセンターせせらぎ\t135.7068\t34.66626\t1270\t○\t○\t○\t○\t奈良県生駒市小瀬町18番地\t0743-77-0001\t無\t無\t有\t有\t有\t有',
  '生駒市立生駒南第二小学校\t135.7078\t34.65443\t1400\t○\t○\t○\t○\t奈良県生駒市小平尾町927番地\t0743-77-6780\t無\t無\t有\t無\t有\t有',
  '生駒市井出山体育館\t135.7071\t34.65295\t170\t○\t○\t○\t○\t奈良県生駒市小平尾町1766番地1\t0743-76-6091\t無\t無\t有\t無\t有\t有',
  '生駒市小平尾南体育館\t135.7034\t34.6581\t170\t○\t○\t○\t○\t奈良県生駒市小平尾町1629番地\t0743-77-7785\t無\t無\t有\t無\t有\t有'
];
