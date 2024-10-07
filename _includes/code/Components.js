/*******************************************************************************
*
* E M B E D D E D   W I Z A R D   P R O J E C T
*
*                                                Copyright (c) TARA Systems GmbH
*                                    written by Paul Banach and Manfred Schweyer
*
********************************************************************************
*
* This file was generated automatically by Embedded Wizard Studio.
*
* Please do not make any modifications of this file! The modifications are lost
* when the file is generated again by Embedded Wizard Studio!
*
* The template of this heading text can be found in the file 'head.ewt' in the
* directory 'Platforms' of your Embedded Wizard installation directory. If you
* wish to adapt this text, please copy the template file 'head.ewt' into your
* project directory and edit the copy only. Please avoid any modifications of
* the original template file!
*
* Version  : 11.00
* Profile  : WebGL
* Platform : Tara.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.uT)throw new Error("The unit file 'Components.js' included twice!");
EmWiApp.uT=(function(){var B=EmWiApp;var D={};
var BN=[16,16];var AZ=[8,8];var Ao=[81,157,161,216];var CW=[94,176,147,215];var Fz=[
0,0,240,240];var He=[0,0,240,213];var Cw=[0,14];var H_=[240,240];var Hf=[38,48,216
,188];var Hg=[26,60,30,180];var Jx=[207,185,217,186];var FA="Version";var Fc=[0,
0,178,35];var Fd=[158,9,174,26];var LF=[18,5,160,32];var Om="Wifi";var Gt=[1,10,
17,26];var Oo=[178,32];var Op=[0,32];var Oq=[71,2,178,32];var LG=[-1,0];var Ni=[
0,0,32,30];var Nj=[0,2,32,28];var Or=[10,2,20,12];var Jy=[20,2,30,12];var Gu=[0,
0,136,65];var Nk=[0,49,30,65];var QA=[32,37,56,65];var SE=[58,24,83,65];var SF=[
84,11,109,65];var SG=[111,0,135,65];var SH="\u2109";var QB="\u2103";var Os=".";var
Ot=[49,67,130,163];var QC=[129,86,151,120];var SI=[157,87,184,121];var Nl=[130,125
,174,169];var SJ=[67,72,129,148];var Ou=[128,88,145,115];var SK=[151,89,173,116];
var Ov=[130,115,158,143];var SL=[48,67,105,134];var SM=[105,82,120,106];var SN=[
125,82,144,106];var SO="5";var SP=".0";var SQ=[157,92,184,126];var SR="--";var QD=
"h";var QE="m";var QF=" ";var SS=[0,0,172,109];var Jz=[0,0,173,109];var KF=[7,0,
172,70];var ST=[0,64,172,97];var SU="3h 15m";var SV=[17,19,50,51];var SW=[33,32];
var SX=[0,0,104,34];var SY=[72,0,104,30];var SZ=[36,2,68,34];var Nm=[0,0,32,32];
var QG=[0,0,56,32];var S0=[0,0,165,150];var S1=[3,15,55,47];var S2=[115,10,164,50
];var S3=[30,51,62,71];var S4=[108,51,140,71];var S5=[70,63,98,79];var S6=[74,69
,79,74];var S7=[82,69,87,74];var S8=[90,69,95,74];var S9=[68,85,100,117];var S_=[
55,18,115,54];var S$=[0,0,0,0];var Ta="L0";var QH=[0,0,60,35];var Tb=[0,0,60,36];
var QI=[0,0,4,120];var Tc=[0,0,4,44];
D.Cg={Y4:null,Y3:null,HM:null,Ap:null,BC:null,O:null,Timer:null,G4:null,Cc:0,W$:false
,My:false,At:function(aArg){var A;B.sN([this,this.YJ],[A=B._GetAutoObject(B.Application.
Device),A.YT,A.Y_],0);B.sN([this,this.YJ],[A=B._GetAutoObject(B.Application.Device
),A.Kj,A.Km],0);B.sN([this,this.Lu],[A=B._GetAutoObject(B.Application.Device),A.
YW,A.ZA],0);this.YJ(this);this.Lu(this);},BJ:function(AN){var A;var Ch;B.Core.J.
BJ.call(this,AN);if(!((AN&0x20)===0x20))this.My=false;this.Ap.BO.R5(0xFFFFFFFF);
this.Ap.BO.R3(0xFFFFFFFF);this.Ap.BO.R6(0xFFFFFFFF);this.Ap.BO.R4(0xFFFFFFFF);this.
Ap.Co.R5(0xFFFFFFFF);this.Ap.Co.R3(0xFFFFFFFF);this.Ap.Co.R6(0xFFFFFFFF);this.Ap.
Co.R4(0xFFFFFFFF);if(this.My){this.Ap.N.PZ(null);this.Ap.N.N7(B.uU.Vv);this.Ap.N.
Kn(B.uU.Vv);(Ch=this.Ap.N,Ch.Kn((Ch.M9&0x00FFFFFF)|(121<<24)));}else if((B._GetAutoObject(
B.Application.Device).KD===5.000000)&&(this.Cc!==2)){this.Ap.N.PZ(null);this.Ap.
N.N7(B.uU.Ady);this.Ap.N.Kn(B.uU.Ady);(Ch=this.Ap.N,Ch.Kn((Ch.M9&0x00FFFFFF)|(121<<
24)));}else if(!this.Cc){this.Ap.N.PZ(null);this.Ap.N.N7(0xFFFFFFFF);this.Ap.N.Kn(
0x98FFFFFF);this.Ap.BO.R5(0xFF99BFA0);this.Ap.BO.R3(0xFFD5D821);this.Ap.BO.R6(0xFF539EDE
);this.Ap.BO.R4(B.uU.Ah8);this.Ap.Co.R5(this.Ap.BO.Ul);this.Ap.Co.R3(this.Ap.BO.
Ui);this.Ap.Co.R6(this.Ap.BO.Um);this.Ap.Co.R4(this.Ap.BO.Uj);}else if(this.Cc===
2){this.Ap.N.PZ(null);this.Ap.N.N7(B.uU.Vw);this.Ap.N.Kn(B.uU.Vw);(Ch=this.Ap.N,
Ch.Kn((Ch.M9&0x00FFFFFF)|(121<<24)));}else{this.Ap.N.PZ(null);this.Ap.N.N7(B.uU.
B$);this.Ap.N.Kn(B.uU.B$);(Ch=this.Ap.N,Ch.Kn((Ch.M9&0x00FFFFFF)|(121<<24)));}if(((
AN&0x20)===0x20)){this.Ap.N.U$(B.tv(B.uP.VC));this.Ap.N.R$(BN);if(!this.My){this.
Ap.N.N7(B.uU.Vv);this.Ap.BO.R5(0xFFFFFFFF);this.Ap.BO.R3(0xFFFFFFFF);this.Ap.BO.
R6(0xFFFFFFFF);this.Ap.BO.R4(0xFFFFFFFF);}}else{this.Ap.N.U$(B.tv(B.uP.Sl));this.
Ap.N.R$(AZ);}},Ey:function(E){if(this.Cc===E)return;this.Cc=E;this.AO();},Adw:function(
P){var A;if(this.O.AA===131){this.Timer.Aw(true);this.Ap.N.U$(B.tv(B.uP.Z9));this.
Ap.N.R$(BN);this.My=!this.My;if(!this.My)(A=this.HM)?A[1].call(A[0],this):null;}
if(!this.My){this.O.GR=true;return;}if(this.O.AA===4)(A=this.Y4)?A[1].call(A[0],
this):null;else if(this.O.AA===5)(A=this.Y3)?A[1].call(A[0],this):null;},N9:function(
P){this.Timer.Aw(false);this.AO();},YJ:function(P){if(B._GetAutoObject(B.Application.
Device).Cd){this.Ey(2);this.G4.Ah(true);}else if(B._GetAutoObject(B.Application.
Device).B$){this.Ey(1);this.G4.Ah(false);}else{this.Ey(0);this.G4.Ah(false);}},Lu:
function(P){this.AO();},PW:function(E){if(this.W$===E)return;this.W$=E;if(this.W$
)this.G4.H(Ao);else this.G4.H(CW);},_Init:function(aArg){B.Core.J._Init.call(this
,aArg);D.Wv._Init.call(this.Ap={G:this},0);B.uR.UB._Init.call(this.BC={G:this},0
);B.Core.Bc._Init.call(this.O={G:this},0);B.Core.Timer._Init.call(this.Timer={G:
this},0);B.uO.K._Init.call(this.G4={G:this},0);this.__proto__=D.Cg;this.H(Fz);this.
Ap.H(He);this.Ap.Ll(255);this.Ap.R_(46);this.Ap.FX(0);this.BC.AeE(false);this.BC.
AeD(2000);this.BC.Ae8(true);this.BC.Ae9(17.000000);this.BC.Ae7(98.000000);this.BC.
Ai_(true);this.BC.Ai$(17.000000);this.BC.Ai9(98.000000);this.BC.Aeq(-45.000000);
this.BC.Aer(225.000000);this.BC.Aet(false);this.BC.Aes(98.000000);this.BC.R$(BN);
this.BC.Ad$(Cw);this.BC.Afe(H_);this.Cc=0;this.Timer.DI(200);this.G4.H(CW);this.
G4.Au(0xD2);this.G4.Ah(false);this.I(this.Ap,0);this.I(this.G4,0);this.Ap.CK(this.
BC);this.BC.U$(B.tv(B.uP.VC));this.BC.PZ(B.tv(B.uP.Xl));this.O.Az=[this,this.Adw
];this.O.ID=[this,this.Adw];this.Timer.Ds=[this,this.N9];this.G4.Q(B.tv(B.uP.CL)
);this.At(aArg);},_Done:function(){this.__proto__=B.Core.J;this.Ap._Done();this.
BC._Done();this.O._Done();this.Timer._Done();this.G4._Done();B.Core.J._Done.call(
this);},_ReInit:function(){B.Core.J._ReInit.call(this);this.Ap._ReInit();this.BC.
_ReInit();this.O._ReInit();this.Timer._ReInit();this.G4._ReInit();},_Mark:function(
C){var A;B.Core.J._Mark.call(this,C);if((A=this.Y4)&&((A=A[0])._cycle!=C))A._Mark(
A._cycle=C);if((A=this.Y3)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.
HM)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.Ap)._cycle!=C)A._Mark(A.
_cycle=C);if((A=this.BC)._cycle!=C)A._Mark(A._cycle=C);if((A=this.O)._cycle!=C)A.
_Mark(A._cycle=C);if((A=this.Timer)._cycle!=C)A._Mark(A._cycle=C);if((A=this.G4).
_cycle!=C)A._Mark(A._cycle=C);},_className:"Components::Temperature_Dial"};D.Fw={
C8:B.tY(11,null,null),A4:null,O:null,Qk:null,Qm:null,Ng:null,K4:null,Ls:null,MX:
null,Lt:null,Ka:null,J6:null,MA:null,Lz:null,K8:null,Fv:null,W:null,ET:null,H5:null
,Oa:function(){this.A4.UH(0,this.A4.DT-1);},BJ:function(AN){var A;B.Core.J.BJ.call(
this,AN);if(!((AN&0x20)===0x20))this.A4.IG(-1);},IE:function(P){var A;var Hm=this.
A4.Kf;var Cr=(D.PL.isPrototypeOf(A=this.A4.Bo)?A:null);if(!Cr)return;Cr.Text.V(this.
C8.Get(Hm).BI);Cr.Text.Aj(this.C8.Get(Hm).Bj);Cr.AT.Aj(this.C8.Get(Hm).Bj);Cr.Text.
Af(this.C8.Get(Hm).A8);Cr.AT.Af(this.C8.Get(Hm).A8);Cr.K.Ah(this.C8.Get(Hm).Adt);
Cr.T.Ah(this.C8.Get(Hm).Adx);if(this.C8.Get(Hm).Qt===3)Cr.AT.V(B._GetAutoObject(
B.Application.Device).ET);else Cr.AT.V(B.hr);if(this.C8.Get(Hm).Qt===2){if(B._GetAutoObject(
B.Application.Device).HX)Cr.K.Q(B.tv(B.uP.XM));else Cr.K.Q(B.tv(B.uP.Xe));}else if(
this.C8.Get(Hm).Qt===1){if(!B._GetAutoObject(B.Application.Device).El)Cr.K.Q(B.tv(
B.uP.X4));else Cr.K.Q(B.tv(B.uP.X5));}else Cr.K.Q(B.tv(B.uP.HF));if(!B.lp)Cr.UP=
this.C8.Get(Hm).Z6;else if(B.lp===1)Cr.UP=this.C8.Get(Hm).Qg;if(!!Cr.UP)Cr.Aef(true
);else Cr.Aef(false);Cr.H(B.ul(Cr.S,[(A=this.A4.S)[2]-A[0],this.A4.Eg]));},Br:function(
P){var A;if(this.O.AA===5){var Acn=this.Afv(0);if(!Acn)this.O.GR=true;}else if(this.
O.AA===4){var Acn=this.Afv(1);if(!Acn)this.O.GR=true;}else if(this.O.AA===131)(A=
this.C8.Get(this.A4.Fu).Br)?A[1].call(A[0],this):null;else this.O.GR=true;},Afv:
function(OH){var A;if(OH===1){if(this.A4.Fu>=(this.A4.DT-2))return false;this.A4.
IG(this.A4.Fu+1);if(this.A4.Fu>=(this.A4.DT-2)){this.A4.IG(this.A4.DT-2);this.A4.
Ry(this.A4.DT-1,true,null,null);}else this.A4.Ry(this.A4.Fu,true,null,null);}else{
if(!this.A4.Fu)return false;this.A4.IG(this.A4.Fu-1);this.A4.Ry(this.A4.Fu,true,
null,null);}this.Fv.Z$((this.A4.Bq/-245.000000)*100);return true;},AjK:function(
P){this.L.DK(B._NewObject(B.uV.AaN,0),null,null,null,null,null,null,null,null,false
);},AhF:function(P){this.L.DK(B._NewObject(B.uV.Cd,0),null,null,null,null,null,null
,null,null,false);},AjI:function(P){if(B._GetAutoObject(B.Application.Device).Jq
)this.L.DK(B._NewObject(B.uV.Aap,0),null,null,null,null,null,null,null,null,false
);else this.L.DK(B._NewObject(B.uV.G_,0),null,null,null,null,null,null,null,null
,false);},AjD:function(P){B._GetAutoObject(B.Application.Device).Vu(!B._GetAutoObject(
B.Application.Device).El);},Ajp:function(P){this.L.DK(B._NewObject(B.uV.Power,0)
,null,null,null,null,null,null,null,null,false);},AjE:function(P){B._GetAutoObject(
B.Application.Device).VJ(!B._GetAutoObject(B.Application.Device).HX);},Acy:function(
P){this.A4.UH(0,this.A4.DT-1);},AhK:function(P){this.L.DK(B._NewObject(B.uV.Display
,0),null,null,null,null,null,null,null,null,false);},AhC:function(P){this.L.DK(B.
_NewObject(B.uV.Hy,0),null,null,null,null,null,null,null,null,false);},Ah5:function(
P){this.L.DK(B._NewObject(B.uV.UL,0),null,null,null,null,null,null,null,null,false
);},AhH:function(P){this.L.DK(B._NewObject(B.uV.Js,0),null,null,null,null,null,null
,null,null,false);},Ajy:function(){this.A4.IG(0);this.A4.Ry(this.A4.Fu,true,null
,null);this.Fv.Z$((this.A4.Bq/-245.000000)*100);},Ajz:function(){this.A4.IG(this.
A4.DT-2);this.A4.Ry(this.A4.DT-1,true,null,null);this.Fv.Z$((this.A4.Bq/-245.000000
)*100);},_Init:function(aArg){B.Core.J._Init.call(this,aArg);B.Core.A4._Init.call(
this.A4={G:this},0);B.Core.Bc._Init.call(this.O={G:this},0);B.Core.AI._Init.call(
this.Qk={G:this},0);B.Core.AI._Init.call(this.Qm={G:this},0);D.IA._Init.call(this.
Ng={G:this},0);D.IA._Init.call(this.K4={G:this},0);D.IA._Init.call(this.Ls={G:this
},0);D.IA._Init.call(this.MX={G:this},0);D.IA._Init.call(this.Lt={G:this},0);D.IA.
_Init.call(this.Ka={G:this},0);D.IA._Init.call(this.J6={G:this},0);D.IA._Init.call(
this.MA={G:this},0);D.IA._Init.call(this.Lz={G:this},0);D.IA._Init.call(this.K8={
G:this},0);D.Fv._Init.call(this.Fv={G:this},0);B.uO.W._Init.call(this.W={G:this}
,0);D.IA._Init.call(this.ET={G:this},0);B.Core.AI._Init.call(this.H5={G:this},0);(
this.C8=[]).__proto__=D.Fw.C8;this.__proto__=D.Fw;var A;this.H(Fz);this.A4.H(Hf);
this.A4.IG(0);this.A4.Aej(35);this.A4.Aev(11);this.A4.Aei(D.PL);this.O.By=148;this.
Ng.BI=B.tB(B.uS.Nf);this.K4.Qg=-20;this.K4.BI=B.tB(B.uS.Ac5);this.Ls.Qt=1;this.Ls.
BI=B.tB(B.uS.El);this.MX.BI=B.tB(B.uS.Afq);this.Lt.Qt=2;this.Lt.BI=B.tB(B.uS.AfA
);this.Ka.Z6=-50;this.Ka.Qg=-85;this.Ka.BI=B.tB(B.uS.Display);this.J6.Z6=-60;this.
J6.Qg=-105;this.J6.BI=B.tB(B.uS.Hy);this.MA.BI=B.tB(B.uS.UM);this.Lz.Qg=-18;this.
Lz.BI=B.tB(B.uS.AfB);this.K8.Qg=-18;this.K8.BI=B.tB(B.uS.Ac9);this.Fv.H(Hg);this.
W.H(Jx);this.W.Aj(0xFF000000);this.ET.Qt=3;this.ET.BI=FA;this.ET.Bj=B.uU.Vv;this.
ET.Adx=false;this.ET.Adt=false;this.I(this.A4,0);this.I(this.Fv,0);this.I(this.W
,0);this.A4.IE=[this,this.IE];this.A4.Zx(null);this.O.Az=[this,this.Br];this.Qk.
AH=[this,this.Acy];this.Qk.A3([A=B._GetAutoObject(B.Application.Device),A.AdW,A.
AeB]);this.Qm.AH=[this,this.Acy];this.Qm.A3([A=B._GetAutoObject(B.Application.Device
),A.UY,A.Ve]);this.Ng.Br=[this,this.AjK];this.K4.Br=[this,this.AhF];this.Ls.Br=[
this,this.AjD];this.MX.Br=[this,this.Ajp];this.Lt.Br=[this,this.AjE];this.Ka.Br=[
this,this.AhK];this.J6.Br=[this,this.AhC];this.MA.Br=[this,this.Ah5];this.Lz.Br=[
this,this.AjI];this.C8.Set(0,this.Ls);this.C8.Set(1,this.J6);this.C8.Set(2,this.
Lz);this.C8.Set(3,this.K8);this.C8.Set(4,this.MX);this.C8.Set(5,this.Ng);this.C8.
Set(6,this.Lt);this.C8.Set(7,this.Ka);this.C8.Set(8,this.MA);this.C8.Set(9,this.
K4);this.C8.Set(10,this.ET);this.K8.Br=[this,this.AhH];this.ET.A8=B.tv(B.ec.YG);
this.H5.AH=[this,this.Acy];this.H5.A3([A=B._GetAutoObject(B.Application.Device),
A.YY,A.ZE]);},_Done:function(){this.__proto__=B.Core.J;this.A4._Done();this.O._Done(
);this.Qk._Done();this.Qm._Done();this.Ng._Done();this.K4._Done();this.Ls._Done(
);this.MX._Done();this.Lt._Done();this.Ka._Done();this.J6._Done();this.MA._Done(
);this.Lz._Done();this.K8._Done();this.Fv._Done();this.W._Done();this.ET._Done();
this.H5._Done();B.Core.J._Done.call(this);},_ReInit:function(){B.Core.J._ReInit.
call(this);this.A4._ReInit();this.O._ReInit();this.Qk._ReInit();this.Qm._ReInit(
);this.Ng._ReInit();this.K4._ReInit();this.Ls._ReInit();this.MX._ReInit();this.Lt.
_ReInit();this.Ka._ReInit();this.J6._ReInit();this.MA._ReInit();this.Lz._ReInit(
);this.K8._ReInit();this.Fv._ReInit();this.W._ReInit();this.ET._ReInit();this.H5.
_ReInit();this.Ng.BI=B.tB(B.uS.Nf);this.K4.BI=B.tB(B.uS.Ac5);this.Ls.BI=B.tB(B.uS.
El);this.MX.BI=B.tB(B.uS.Afq);this.Lt.BI=B.tB(B.uS.AfA);this.Ka.BI=B.tB(B.uS.Display
);this.J6.BI=B.tB(B.uS.Hy);this.MA.BI=B.tB(B.uS.UM);this.Lz.BI=B.tB(B.uS.AfB);this.
K8.BI=B.tB(B.uS.Ac9);this.Oa();},_Mark:function(C){var A;B.Core.J._Mark.call(this
,C);B.tQ(this.C8,C);if((A=this.A4)._cycle!=C)A._Mark(A._cycle=C);if((A=this.O)._cycle
!=C)A._Mark(A._cycle=C);if((A=this.Qk)._cycle!=C)A._Mark(A._cycle=C);if((A=this.
Qm)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Ng)._cycle!=C)A._Mark(A._cycle=C);if((
A=this.K4)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Ls)._cycle!=C)A._Mark(A._cycle=
C);if((A=this.MX)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Lt)._cycle!=C)A._Mark(
A._cycle=C);if((A=this.Ka)._cycle!=C)A._Mark(A._cycle=C);if((A=this.J6)._cycle!=
C)A._Mark(A._cycle=C);if((A=this.MA)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Lz
)._cycle!=C)A._Mark(A._cycle=C);if((A=this.K8)._cycle!=C)A._Mark(A._cycle=C);if((
A=this.Fv)._cycle!=C)A._Mark(A._cycle=C);if((A=this.W)._cycle!=C)A._Mark(A._cycle=
C);if((A=this.ET)._cycle!=C)A._Mark(A._cycle=C);if((A=this.H5)._cycle!=C)A._Mark(
A._cycle=C);},_className:"Components::Setting_List"};D.PL={K:null,Text:null,Mc:null
,T:null,Timer:null,AT:null,UP:-20,RQ:false,Xt:false,Oa:function(){this.Text.C_([
0,this.Text.Bq[1]]);},At:function(aArg){if(this.Xt)this.Timer.Aw(true);},BJ:function(
AN){var A;B.Core.J.BJ.call(this,AN);if(((AN&0x20)===0x20)){this.Mc.Q(B.tv(B.uP.I_
));this.Text.H([].concat(20,this.Text.S.slice(1,4)));}else{this.Mc.Q(null);this.
Text.H([].concat(2,this.Text.S.slice(1,4)));this.Text.C_([0,this.Text.Bq[1]]);}}
,KS:function(P){var A;var Ch;if(!((this.M&0x20)===0x20))return;if(this.RQ){if(this.
Text.Bq[0]<0)(Ch=this.Text.Bq,this.Text.C_([Ch[0]+1,Ch[1]]));else this.RQ=!this.
RQ;}else if(this.Text.Bq[0]>this.UP)(Ch=this.Text.Bq,this.Text.C_([Ch[0]-1,Ch[1]
]));else this.RQ=!this.RQ;},Aef:function(E){if(this.Xt===E)return;this.Xt=E;if(E
)this.Timer.Aw(true);else{this.Timer.Aw(false);this.Text.C_([0,this.Text.Bq[1]]);
}},_Init:function(aArg){B.Core.J._Init.call(this,aArg);B.uO.K._Init.call(this.K={
G:this},0);B.uO.Text._Init.call(this.Text={G:this},0);B.uO.K._Init.call(this.Mc={
G:this},0);B.uO.T._Init.call(this.T={G:this},0);B.Core.Timer._Init.call(this.Timer={
G:this},0);B.uO.Text._Init.call(this.AT={G:this},0);this.__proto__=D.PL;this.H(Fc
);this.K.H(Fd);this.K.B1(true);this.Text.H(LF);this.Text.Au(0x11);this.Text.V(Om
);this.Mc.H(Gt);this.T.AP(Oo);this.T.AS(Op);this.T.G1(1);this.Timer.DI(70);this.
Timer.Aw(false);this.AT.H(Oq);this.AT.C_(LG);this.AT.Au(0x14);this.AT.V(B.hr);this.
I(this.K,0);this.I(this.Text,0);this.I(this.Mc,0);this.I(this.T,0);this.I(this.AT
,0);this.K.Q(B.tv(B.uP.HF));this.Text.Af(B.tv(B.ec.A1));this.Mc.Q(null);this.Timer.
Ds=[this,this.KS];this.AT.Af(B.tv(B.ec.A1));this.At(aArg);},_Done:function(){this.
__proto__=B.Core.J;this.K._Done();this.Text._Done();this.Mc._Done();this.T._Done(
);this.Timer._Done();this.AT._Done();B.Core.J._Done.call(this);},_ReInit:function(
){B.Core.J._ReInit.call(this);this.K._ReInit();this.Text._ReInit();this.Mc._ReInit(
);this.T._ReInit();this.Timer._ReInit();this.AT._ReInit();this.Oa();},_Mark:function(
C){var A;B.Core.J._Mark.call(this,C);if((A=this.K)._cycle!=C)A._Mark(A._cycle=C);
if((A=this.Text)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Mc)._cycle!=C)A._Mark(
A._cycle=C);if((A=this.T)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Timer)._cycle
!=C)A._Mark(A._cycle=C);if((A=this.AT)._cycle!=C)A._Mark(A._cycle=C);},_className:
"Components::List_Class"};D.H7={Array:B.tY(6,null,null),Nb:null,K5:null,Timer:null
,K9:null,Pm:null,Aai:5,At:function(aArg){this.AfD(this);},BJ:function(AN){B.Core.
J.BJ.call(this,AN);this.Nb.Q(this.Array.Get(this.Aai));},Ai7:function(E){if(this.
Aai===E)return;if(E>5)return;this.Aai=E;this.AO();},N9:function(P){this.K5.Ah(false
);this.Timer.Aw(false);},AfD:function(P){if(!B._GetAutoObject(B.Application.Device
).RX)this.K9.Ah(true);else this.K9.Ah(false);},_Init:function(aArg){B.Core.J._Init.
call(this,aArg);B.uO.K._Init.call(this.Nb={G:this},0);B.uO.K._Init.call(this.K5={
G:this},0);B.Core.Timer._Init.call(this.Timer={G:this},0);B.uO.K._Init.call(this.
K9={G:this},0);B.Core.AI._Init.call(this.Pm={G:this},0);(this.Array=[]).__proto__=
D.H7.Array;this.__proto__=D.H7;var A;this.H(Ni);this.Nb.H(Nj);this.K5.H(Or);this.
K5.Ah(false);this.K9.H(Jy);this.I(this.Nb,0);this.I(this.K5,0);this.I(this.K9,0);
this.Nb.Q(B.tv(B.uP.VN));this.Array.Set(0,B.tv(B.uP.AaT));this.Array.Set(1,B.tv(
B.uP.AaX));this.Array.Set(2,B.tv(B.uP.AaW));this.Array.Set(3,B.tv(B.uP.AaU));this.
Array.Set(4,B.tv(B.uP.AaV));this.Array.Set(5,B.tv(B.uP.VN));this.K5.Q(B.tv(B.uP.
X1));this.Timer.Ds=[this,this.N9];this.K9.Q(B.tv(B.uP.Ab2));this.Pm.AH=[this,this.
AfD];this.Pm.A3([A=B._GetAutoObject(B.Application.Device),A.AdQ,A.Aeo]);this.At(
aArg);},_Done:function(){this.__proto__=B.Core.J;this.Nb._Done();this.K5._Done();
this.Timer._Done();this.K9._Done();this.Pm._Done();B.Core.J._Done.call(this);},_ReInit:
function(){B.Core.J._ReInit.call(this);this.Nb._ReInit();this.K5._ReInit();this.
Timer._ReInit();this.K9._ReInit();this.Pm._ReInit();},_Mark:function(C){var A;B.
Core.J._Mark.call(this,C);B.tQ(this.Array,C);if((A=this.Nb)._cycle!=C)A._Mark(A.
_cycle=C);if((A=this.K5)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Timer)._cycle!=
C)A._Mark(A._cycle=C);if((A=this.K9)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Pm
)._cycle!=C)A._Mark(A._cycle=C);},_className:"Components::WiFi_Icon"};D.Power={HJ:
B.tY(5,null,null),Fr:B.tY(5,null,null),Kp:null,Kq:null,Kr:null,Ks:null,Kt:null,HS:
null,BJ:function(AN){B.Core.J.BJ.call(this,AN);var Q5=B._GetAutoObject(B.Application.
Device).HR-1;this.Kp.Q(this.Fr.Get(0));this.Kq.Q(((Q5>0)?this.Fr.Get(1):this.HJ.
Get(1)));this.Kr.Q(((Q5>1)?this.Fr.Get(2):this.HJ.Get(2)));this.Ks.Q(((Q5>2)?this.
Fr.Get(3):this.HJ.Get(3)));this.Kt.Q(((Q5>3)?this.Fr.Get(4):this.HJ.Get(4)));},Am2:
function(P){this.AO();},_Init:function(aArg){B.Core.J._Init.call(this,aArg);B.uO.
K._Init.call(this.Kp={G:this},0);B.uO.K._Init.call(this.Kq={G:this},0);B.uO.K._Init.
call(this.Kr={G:this},0);B.uO.K._Init.call(this.Ks={G:this},0);B.uO.K._Init.call(
this.Kt={G:this},0);B.Core.AI._Init.call(this.HS={G:this},0);(this.HJ=[]).__proto__=
D.Power.HJ;(this.Fr=[]).__proto__=D.Power.Fr;this.__proto__=D.Power;var A;this.H(
Gu);this.Kp.H(Nk);this.Kp.B1(false);this.Kp.Au(0x0);this.Kq.H(QA);this.Kq.B1(false
);this.Kq.Au(0x0);this.Kr.H(SE);this.Kr.B1(false);this.Kr.Au(0x0);this.Ks.H(SF);
this.Ks.B1(false);this.Ks.Au(0x0);this.Kt.H(SG);this.Kt.B1(false);this.Kt.Au(0x0
);this.I(this.Kp,0);this.I(this.Kq,0);this.I(this.Kr,0);this.I(this.Ks,0);this.I(
this.Kt,0);this.HJ.Set(0,B.tv(B.uP.YD));this.HJ.Set(1,B.tv(B.uP.YE));this.HJ.Set(
2,B.tv(B.uP.YF));this.HJ.Set(3,B.tv(B.uP.YB));this.HJ.Set(4,B.tv(B.uP.YC));this.
Fr.Set(0,B.tv(B.uP.Yy));this.Fr.Set(1,B.tv(B.uP.Yz));this.Fr.Set(2,B.tv(B.uP.YA)
);this.Fr.Set(3,B.tv(B.uP.Yw));this.Fr.Set(4,B.tv(B.uP.Yx));this.Kp.Q(this.HJ.Get(
0));this.Kq.Q(this.Fr.Get(1));this.Kr.Q(this.Fr.Get(2));this.Ks.Q(this.Fr.Get(3)
);this.Kt.Q(this.Fr.Get(4));this.HS.AH=[this,this.Am2];this.HS.A3([A=B._GetAutoObject(
B.Application.Device),A.YV,A.Zu]);},_Done:function(){this.__proto__=B.Core.J;this.
Kp._Done();this.Kq._Done();this.Kr._Done();this.Ks._Done();this.Kt._Done();this.
HS._Done();B.Core.J._Done.call(this);},_ReInit:function(){B.Core.J._ReInit.call(
this);this.Kp._ReInit();this.Kq._ReInit();this.Kr._ReInit();this.Ks._ReInit();this.
Kt._ReInit();this.HS._ReInit();},_Mark:function(C){var A;B.Core.J._Mark.call(this
,C);B.tQ(this.HJ,C);B.tQ(this.Fr,C);if((A=this.Kp)._cycle!=C)A._Mark(A._cycle=C);
if((A=this.Kq)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Kr)._cycle!=C)A._Mark(A.
_cycle=C);if((A=this.Ks)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Kt)._cycle!=C)
A._Mark(A._cycle=C);if((A=this.HS)._cycle!=C)A._Mark(A._cycle=C);},_className:"Components::Power"
};D.EB={FV:null,Go:null,F_:null,Qn:null,EO:null,G$:5.000000,Aae:0,At:function(aArg
){this.N5(3);this.AO();},BJ:function(AN){B.Core.J.BJ.call(this,AN);if(B._GetAutoObject(
B.Application.Device).KD===5.000000)this.EO.Ah(true);else this.EO.Ah(false);if(B.
_GetAutoObject(B.Application.Device).HX)this.F_.V(SH);else this.F_.V(QB);this.FV.
V((((A=this.G$)&0x8000)?A|0xFFFF0000:A&0xFFFF).toFixed());this.Go.V(Os+((((A=(this.
G$*10))&0x8000)?A|0xFFFF0000:A&0xFFFF)%10).toFixed());},Qh:function(AnD){this.G$=
AnD;this.AO();},Am_:function(P){this.AO();},N5:function(E){if(this.Aae===E)return;
this.Aae=E;switch(this.Aae){case 0:case 3:{this.FV.H(Ot);this.Go.H(QC);this.F_.H(
SI);this.EO.H(Nl);this.FV.Af(B.tv(B.ec.RZ));this.Go.Af(B.tv(B.ec.HK));this.F_.Af(
B.tv(B.ec.HK));}break;case 2:{this.FV.H(SJ);this.Go.H(Ou);this.F_.H(SK);this.EO.
H(Ov);this.FV.Af(B.tv(B.ec.YI));this.Go.Af(B.tv(B.ec.A1));this.F_.Af(B.tv(B.ec.A1
));}break;case 1:{this.FV.H(SL);this.Go.H(SM);this.F_.H(SN);this.EO.H(Ov);this.FV.
Af(B.tv(B.ec.YH));this.Go.Af(B.tv(B.ec.MS));this.F_.Af(B.tv(B.ec.MS));}break;default:;
}},_Init:function(aArg){B.Core.J._Init.call(this,aArg);B.uO.Text._Init.call(this.
FV={G:this},0);B.uO.Text._Init.call(this.Go={G:this},0);B.uO.Text._Init.call(this.
F_={G:this},0);B.Core.AI._Init.call(this.Qn={G:this},0);B.uO.K._Init.call(this.EO={
G:this},0);this.__proto__=D.EB;var A;this.H(Fz);this.FV.H(Ot);this.FV.Au(0x14);this.
FV.V(SO);this.Go.H(QC);this.Go.V(SP);this.F_.H(SQ);this.F_.V(QB);this.EO.H(Nl);this.
EO.B1(false);this.EO.Au(0xD2);this.EO.Ah(false);this.I(this.FV,0);this.I(this.Go
,0);this.I(this.F_,0);this.I(this.EO,0);this.FV.Af(B.tv(B.ec.RZ));this.Go.Af(B.tv(
B.ec.HK));this.F_.Af(B.tv(B.ec.HK));this.Qn.AH=[this,this.Am_];this.Qn.A3([A=B._GetAutoObject(
B.Application.Device),A.UY,A.Ve]);this.EO.Q(B.tv(B.uP.EO));this.At(aArg);},_Done:
function(){this.__proto__=B.Core.J;this.FV._Done();this.Go._Done();this.F_._Done(
);this.Qn._Done();this.EO._Done();B.Core.J._Done.call(this);},_ReInit:function(){
B.Core.J._ReInit.call(this);this.FV._ReInit();this.Go._ReInit();this.F_._ReInit(
);this.Qn._ReInit();this.EO._ReInit();},_Mark:function(C){var A;B.Core.J._Mark.call(
this,C);if((A=this.FV)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Go)._cycle!=C)A.
_Mark(A._cycle=C);if((A=this.F_)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Qn)._cycle
!=C)A._Mark(A._cycle=C);if((A=this.EO)._cycle!=C)A._Mark(A._cycle=C);},_className:
"Components::Temperature_Text"};D.Bk={Qd:null,R2:null,HL:null,W:null,B8:null,Text:
null,O:null,BT:null,Do:null,N$:null,Uo:0,BJ:function(AN){var A;B.Core.J.BJ.call(
this,AN);this.Do.Q(this.Qd);if(((AN&0x40)===0x40))this.Ad(this.B8);else this.Ad(
null);},E7:function(P){var A;var Hu=this.B8.Dk();var AD=B.hr;var EI;this.Do.H(B.
un(this.Do.S,((this.B8.Adj()[0]-Math.ceil(((A=this.Do.S)[2]-A[0])/2.000000))|0)+
this.Uo));if(!Hu){this.Text.V(SR);return;}if(!!((Hu/4)|0))AD=((Hu/4)|0).toFixed(
)+QD;EI=B.t1((Hu%4)*15,2,10)+QE;this.Text.V((AD+QF)+EI);},AfT:function(DB){this.
E7(DB);},Jd:function(P){var A;if(!this.B8.Dk())return;(A=this.R2)?A[1].call(A[0]
,this):null;return;},Adg:function(){return this.B8.Dk();},AjA:function(Qh){this.
B8.FX(Qh);},Aez:function(E){if(this.Qd===E)return;this.Qd=E;this.AO();},C9:function(
P){var Hu=this.B8.Dk();if(!Hu)B.lz(this.HL,this);},Ain:function(E){if(this.Uo===
E)return;this.Uo=E;},_Init:function(aArg){B.Core.J._Init.call(this,aArg);B.uO.W.
_Init.call(this.W={G:this},0);B.uR.B8._Init.call(this.B8={G:this},0);B.uO.Text._Init.
call(this.Text={G:this},0);B.Core.Bc._Init.call(this.O={G:this},0);B.uR.UE._Init.
call(this.BT={G:this},0);B.uO.K._Init.call(this.Do={G:this},0);B.Graphics.Canvas.
_Init.call(this.N$={G:this},0);this.__proto__=D.Bk;this.H(SS);this.W.H(Jz);this.
W.Aj(0xFF000000);this.B8.H(KF);this.B8.R_(32);this.B8.Ai2(0);this.B8.FX(0);this.
Text.H(ST);this.Text.V(SU);this.O.By=131;this.BT.Aen(10);this.BT.Aem(500);this.BT.
Ael(4);this.BT.Aek(5);this.BT.AeO(0);this.BT.AeK(0);this.BT.AeN(0);this.BT.AeM(0
);this.BT.AeL(0);this.BT.Ae_(0x4CFFFFFF);this.BT.Afb(0x4CFFFFFF);this.BT.Afa(0x4CFFFFFF
);this.BT.Ae$(0x4CFFFFFF);this.BT.Ae3(0);this.BT.Ae6(0);this.BT.Ae5(0);this.BT.Ae4(
0);this.BT.AeX(0xFFB9B000);this.BT.AeY(0xFFB9B000);this.BT.AeT(0);this.BT.AeW(0);
this.BT.AeV(0);this.BT.AeU(0);this.Do.H(SV);this.Do.B1(true);this.N$.PX(SW);this.
I(this.W,0);this.I(this.B8,0);this.I(this.Text,0);this.I(this.Do,0);this.B8.E7=[
this,this.AfT];this.B8.HL=[this,this.C9];this.B8.Jf=[this,this.AfT];this.B8.CK(this.
BT);this.Text.Af(B.tv(B.ec.UT));this.O.Az=[this,this.Jd];this.BT.AeG(B.tv(B.uP.Lr
));this.BT.AeJ(B.tv(B.uP.Lr));this.BT.AeI(this.N$);this.BT.AeH(this.N$);this.BT.
AeZ(B.tv(B.uP.KV));this.BT.Ae2(B.tv(B.uP.KV));this.BT.Ae1(B.tv(B.uP.KV));this.BT.
Ae0(B.tv(B.uP.KV));this.BT.AeP(B.tv(B.uP.KV));this.BT.AeS(B.tv(B.uP.KV));this.BT.
AeR(B.tv(B.uP.KV));this.BT.AeQ(B.tv(B.uP.KV));this.Qd=B.tv(B.uP.Rg);this.Do.Q(this.
Qd);},_Done:function(){this.__proto__=B.Core.J;this.W._Done();this.B8._Done();this.
Text._Done();this.O._Done();this.BT._Done();this.Do._Done();this.N$._Done();B.Core.
J._Done.call(this);},_ReInit:function(){B.Core.J._ReInit.call(this);this.W._ReInit(
);this.B8._ReInit();this.Text._ReInit();this.O._ReInit();this.BT._ReInit();this.
Do._ReInit();this.N$._ReInit();},_Mark:function(C){var A;B.Core.J._Mark.call(this
,C);if((A=this.Qd)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.R2)&&((A=A[0]).
_cycle!=C))A._Mark(A._cycle=C);if((A=this.HL)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=
C);if((A=this.W)._cycle!=C)A._Mark(A._cycle=C);if((A=this.B8)._cycle!=C)A._Mark(
A._cycle=C);if((A=this.Text)._cycle!=C)A._Mark(A._cycle=C);if((A=this.O)._cycle!=
C)A._Mark(A._cycle=C);if((A=this.BT)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Do
)._cycle!=C)A._Mark(A._cycle=C);if((A=this.N$)._cycle!=C)A._Mark(A._cycle=C);},_className:
"Components::TimerSlider"};D.KA={Pg:null,EC:null,H9:null,Qw:null,PM:null,I9:null
,FU:null,H7:null,PN:null,Qq:null,At:function(aArg){this.TP(this);this.WB(this);this.
Acr(this);},TP:function(P){if((B._GetAutoObject(B.Application.Device).Jq&&!!B._GetAutoObject(
B.Application.Device).G_)&&B._GetAutoObject(B.Application.Device).Cd)this.I9.Q(B.
tv(B.uP.Rg));else if(B._GetAutoObject(B.Application.Device).SA)this.I9.Q(B.tv(B.
uP.Rm));else this.I9.Q(null);},WB:function(P){this.H7.Ai7(B._GetAutoObject(B.Application.
Device).Oj);},Acr:function(P){var A;if(B._GetAutoObject(B.Application.Device).Cd
){this.FU.Q(B.tv(B.uP.PO));this.FU.Au(this.FU.Es|0x80);}else{this.FU.Au(this.FU.
Es&~0x80);if(B._GetAutoObject(B.Application.Device).Mn)this.FU.Q(B.tv(B.uP.UG));
else this.FU.Q(null);}},_Init:function(aArg){B.Core.J._Init.call(this,aArg);B.Core.
AI._Init.call(this.Pg={G:this},0);B.Core.AI._Init.call(this.EC={G:this},0);B.Core.
AI._Init.call(this.H9={G:this},0);B.Core.AI._Init.call(this.Qw={G:this},0);B.Core.
AI._Init.call(this.PM={G:this},0);B.uO.K._Init.call(this.I9={G:this},0);B.uO.K._Init.
call(this.FU={G:this},0);D.H7._Init.call(this.H7={G:this},0);B.Core.AI._Init.call(
this.PN={G:this},0);B.Core.AI._Init.call(this.Qq={G:this},0);this.__proto__=D.KA;
var A;this.H(SX);this.I9.H(Ni);this.I9.Au(0x12);this.FU.H(SY);this.FU.Au(0x12);this.
FU.GY(0);this.H7.H(SZ);this.H7.Ah(true);this.I(this.I9,0);this.I(this.FU,0);this.
I(this.H7,0);this.Pg.AH=[this,this.Acr];this.Pg.A3([A=B._GetAutoObject(B.Application.
Device),A.YS,A.Y7]);this.EC.AH=[this,this.TP];this.EC.A3([A=B._GetAutoObject(B.Application.
Device),A.R1,A.Sb]);this.H9.AH=[this,this.WB];this.H9.A3([A=B._GetAutoObject(B.Application.
Device),A.YZ,A.ZF]);this.Qw.AH=[this,this.TP];this.Qw.A3([A=B._GetAutoObject(B.Application.
Device),A.AdY,A.Afc]);this.PM.AH=[this,this.Acr];this.PM.A3([A=B._GetAutoObject(
B.Application.Device),A.Kj,A.Km]);this.I9.Q(B.tv(B.uP.Rm));this.FU.Q(B.tv(B.uP.UG
));this.PN.AH=[this,this.TP];this.PN.A3([A=B._GetAutoObject(B.Application.Device
),A.Kj,A.Km]);this.Qq.AH=[this,this.TP];this.Qq.A3([A=B._GetAutoObject(B.Application.
Device),A.UZ,A.Vf]);this.At(aArg);},_Done:function(){this.__proto__=B.Core.J;this.
Pg._Done();this.EC._Done();this.H9._Done();this.Qw._Done();this.PM._Done();this.
I9._Done();this.FU._Done();this.H7._Done();this.PN._Done();this.Qq._Done();B.Core.
J._Done.call(this);},_ReInit:function(){B.Core.J._ReInit.call(this);this.Pg._ReInit(
);this.EC._ReInit();this.H9._ReInit();this.Qw._ReInit();this.PM._ReInit();this.I9.
_ReInit();this.FU._ReInit();this.H7._ReInit();this.PN._ReInit();this.Qq._ReInit(
);},_Mark:function(C){var A;B.Core.J._Mark.call(this,C);if((A=this.Pg)._cycle!=C
)A._Mark(A._cycle=C);if((A=this.EC)._cycle!=C)A._Mark(A._cycle=C);if((A=this.H9).
_cycle!=C)A._Mark(A._cycle=C);if((A=this.Qw)._cycle!=C)A._Mark(A._cycle=C);if((A=
this.PM)._cycle!=C)A._Mark(A._cycle=C);if((A=this.I9)._cycle!=C)A._Mark(A._cycle=
C);if((A=this.FU)._cycle!=C)A._Mark(A._cycle=C);if((A=this.H7)._cycle!=C)A._Mark(
A._cycle=C);if((A=this.PN)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Qq)._cycle!=
C)A._Mark(A._cycle=C);},_className:"Components::StatusBoard"};D.CG={Do:null,Lr:null
,Vp:null,Vq:null,CJ:null,Jm:null,Hw:null,Iw:null,O:null,Timer:null,M4:null,BJ:function(
AN){var A;B.Core.J.BJ.call(this,AN);if(!((AN&0x1)===0x1)){this.Iw.Q(null);this.Hw.
Q(null);this.Jm.Q(null);return;}if(((AN&0x40)===0x40))this.Jm.Q(this.Lr);else this.
Jm.Q(this.Vp);this.Iw.Q(this.Do);this.Hw.Q(this.Vq);},Aig:function(P){if(this.O.
AA===131){if(this.Timer.B7===true)return;this.Timer.Aw(true);this.Hw.Ah(true);}else
this.O.GR=true;},N9:function(P){this.Hw.Ah(false);this.Timer.Aw(false);this.M4.Aw(
true);},G0:function(E){if(this.Vp===E)return;this.Vp=E;this.AO();},Cv:function(E
){if(this.Do===E)return;this.Do=E;this.AO();},Anb:function(P){var A;this.M4.Aw(false
);(A=this.CJ)?A[1].call(A[0],this):null;},_Init:function(aArg){B.Core.J._Init.call(
this,aArg);B.uO.K._Init.call(this.Jm={G:this},0);B.uO.K._Init.call(this.Hw={G:this
},0);B.uO.K._Init.call(this.Iw={G:this},0);B.Core.Bc._Init.call(this.O={G:this},
0);B.Core.Timer._Init.call(this.Timer={G:this},0);B.Core.Timer._Init.call(this.M4={
G:this},0);this.__proto__=D.CG;this.H(Nm);this.Jm.GZ(0x3);this.Jm.H(Nm);this.Hw.
GZ(0x3);this.Hw.H(Nm);this.Hw.Ah(false);this.Iw.GZ(0x3);this.Iw.H(Nm);this.Timer.
DI(100);this.M4.DI(100);this.I(this.Jm,0);this.I(this.Hw,0);this.I(this.Iw,0);this.
Do=B.tv(B.uP.ZS);this.Lr=B.tv(B.uP.Lr);this.Vq=B.tv(B.uP.Z_);this.Jm.Q(B.tv(B.uP.
HF));this.Hw.Q(this.Vq);this.Iw.Q(this.Do);this.O.Az=[this,this.Aig];this.Timer.
Ds=[this,this.N9];this.M4.Ds=[this,this.Anb];},_Done:function(){this.__proto__=B.
Core.J;this.Jm._Done();this.Hw._Done();this.Iw._Done();this.O._Done();this.Timer.
_Done();this.M4._Done();B.Core.J._Done.call(this);},_ReInit:function(){B.Core.J.
_ReInit.call(this);this.Jm._ReInit();this.Hw._ReInit();this.Iw._ReInit();this.O.
_ReInit();this.Timer._ReInit();this.M4._ReInit();},_Mark:function(C){var A;B.Core.
J._Mark.call(this,C);if((A=this.Do)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.
Lr)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.Vp)&&(A._cycle!=C))A._Mark(A._cycle=
C);if((A=this.Vq)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.CJ)&&((A=A[0])._cycle
!=C))A._Mark(A._cycle=C);if((A=this.Jm)._cycle!=C)A._Mark(A._cycle=C);if((A=this.
Hw)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Iw)._cycle!=C)A._Mark(A._cycle=C);if((
A=this.O)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Timer)._cycle!=C)A._Mark(A._cycle=
C);if((A=this.M4)._cycle!=C)A._Mark(A._cycle=C);},_className:"Components::Button"
};D.Aad={Y0:null,Y1:null,YM:null,YN:null,Zy:null,K:null,O:null,Ba:false,BJ:function(
AN){var A;if(((AN&0x40)===0x40)){if(this.Ba)this.K.Q(this.Y1);else this.K.Q(this.
YN);}else if(this.Ba)this.K.Q(this.Y0);else this.K.Q(this.YM);},Bz:function(E){if(
this.Ba===E)return;this.Ba=E;this.AO();},Jd:function(P){var A;(A=this.Zy)?A[1].call(
A[0],this):null;},_Init:function(aArg){B.Core.J._Init.call(this,aArg);B.uO.K._Init.
call(this.K={G:this},0);B.Core.Bc._Init.call(this.O={G:this},0);this.__proto__=D.
Aad;this.H(QG);this.K.H(QG);this.O.By=131;this.I(this.K,0);this.K.Q(B.tv(B.uQ.Uu
));this.Y0=B.tv(B.uP.On);this.Y1=B.tv(B.uP.ZJ);this.YM=B.tv(B.uP.YL);this.YN=B.tv(
B.uP.YO);this.O.Az=[this,this.Jd];},_Done:function(){this.__proto__=B.Core.J;this.
K._Done();this.O._Done();B.Core.J._Done.call(this);},_ReInit:function(){B.Core.J.
_ReInit.call(this);this.K._ReInit();this.O._ReInit();},_Mark:function(C){var A;B.
Core.J._Mark.call(this,C);if((A=this.Y0)&&(A._cycle!=C))A._Mark(A._cycle=C);if((
A=this.Y1)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.YM)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.YN)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.Zy)&&((
A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.K)._cycle!=C)A._Mark(A._cycle=
C);if((A=this.O)._cycle!=C)A._Mark(A._cycle=C);},_className:"Components::SimpleSwitch"
};D.Ha={NT:null,Fb:null,Iz:null,IJ:null,FZ:null,CR:null,CS:null,CT:null,Timer:null
,D4:null,E_:null,O:null,H9:null,Aah:2,HC:0,At:function(aArg){this.Ad(this.E_);},
BJ:function(AN){B.Core.J.BJ.call(this,AN);this.CR.Ah(false);this.CS.Ah(false);this.
CT.Ah(false);this.FZ.Ah(false);switch(this.Aah){case 0:{this.FZ.Q(null);this.Iz.
Q(null);this.IJ.Q(null);this.Fb.Q(B.tv(B.uP.AaS));this.D4.Ah(false);if(this.BY===
this.D4)this.Ad(this.E_);this.E_.Bz(false);}break;case 1:{this.FZ.Ah(true);this.
FZ.Q(B.tv(B.uP.UF));this.Iz.Q(B.tv(B.uP.Un));this.IJ.Q(B.tv(B.uP.Po));this.Fb.Q(
B.tv(B.uP.Oi));this.D4.Ah(true);this.D4.Cv(B.tv(B.uP.RP));this.E_.Bz(true);}break;
case 2:{this.CR.Ah(true);this.CS.Ah(true);this.CT.Ah(true);this.Iz.Q(B.tv(B.uP.Rr
));this.IJ.Q(B.tv(B.uP.Po));this.Fb.Q(B.tv(B.uP.Oi));this.D4.Ah(false);if(this.BY===
this.D4)this.Ad(this.E_);this.E_.Bz(true);}break;case 3:{this.FZ.Ah(true);this.FZ.
Q(B.tv(B.uP.X3));this.Iz.Q(B.tv(B.uP.Rr));this.IJ.Q(B.tv(B.uP.Po));this.Fb.Q(B.tv(
B.uP.Oi));this.D4.Ah(true);this.D4.Cv(B.tv(B.uP.HG));this.E_.Bz(true);}break;case
4:{this.FZ.Ah(true);this.FZ.Q(B.tv(B.uP.X2));this.Iz.Q(B.tv(B.uP.Rr));this.IJ.Q(
B.tv(B.uP.Xg));switch(B._GetAutoObject(B.Application.Device).Oj){case 0:this.Fb.
Q(B.tv(B.uP.Oi));break;case 1:this.Fb.Q(B.tv(B.uP.Oi));break;case 2:this.Fb.Q(B.
tv(B.uP.AaL));break;case 3:this.Fb.Q(B.tv(B.uP.AaJ));break;case 4:this.Fb.Q(B.tv(
B.uP.AaK));break;case 5:this.Fb.Q(B.tv(B.uP.AaR));break;default:;}this.D4.Ah(true
);this.D4.Cv(B.tv(B.uP.HG));this.E_.Bz(true);}break;default:;}},Zz:function(E){if(
this.Aah===E)return;this.Aah=E;this.AO();},N9:function(P){this.CR.Aj((this.CR.Bj&
0x00FFFFFF)|(90<<24));this.CS.Aj((this.CS.Bj&0x00FFFFFF)|(90<<24));this.CT.Aj((this.
CT.Bj&0x00FFFFFF)|(90<<24));switch(this.HC){case 0:{this.CR.Aj((this.CR.Bj&0x00FFFFFF
)|(255<<24));this.HC=1;}break;case 1:{this.CS.Aj((this.CS.Bj&0x00FFFFFF)|(255<<24
));this.HC=2;}break;case 2:{this.CT.Aj((this.CT.Bj&0x00FFFFFF)|(255<<24));this.HC=
0;}break;default:this.HC=0;}},Jd:function(P){if(this.O.AA===4){if((this.BY===this.
E_)&&this.D4.Kl())this.Ad(this.D4);else this.O.GR=true;}else if(this.O.AA===5){if(
this.BY!==this.E_)this.Ad(this.E_);else this.O.GR=true;}else this.O.GR=true;},Aje:
function(P){if(!B._GetAutoObject(B.Application.Device).Jw)B._GetAutoObject(B.Application.
Device).SD(true);else B._GetAutoObject(B.Application.Device).SD(false);},Ah_:function(
P){if((B._GetAutoObject(B.Application.Device).Jw===3)||(B._GetAutoObject(B.Application.
Device).Jw===4))B._GetAutoObject(B.Application.Device).Uv();else if(B._GetAutoObject(
B.Application.Device).Jw===1)B._GetAutoObject(B.Application.Device).US();},WB:function(
P){this.AO();},_Init:function(aArg){B.Core.J._Init.call(this,aArg);B.uO.K._Init.
call(this.NT={G:this},0);B.uO.K._Init.call(this.Fb={G:this},0);B.uO.K._Init.call(
this.Iz={G:this},0);B.uO.K._Init.call(this.IJ={G:this},0);B.uO.K._Init.call(this.
FZ={G:this},0);B.uO.K._Init.call(this.CR={G:this},0);B.uO.K._Init.call(this.CS={
G:this},0);B.uO.K._Init.call(this.CT={G:this},0);B.Core.Timer._Init.call(this.Timer={
G:this},0);D.CG._Init.call(this.D4={G:this},0);D.Aad._Init.call(this.E_={G:this}
,0);B.Core.Bc._Init.call(this.O={G:this},0);B.Core.AI._Init.call(this.H9={G:this
},0);this.__proto__=D.Ha;var A;this.H(S0);this.NT.H(S1);this.Fb.H(S2);this.Fb.Au(
0x92);this.Iz.H(S3);this.IJ.H(S4);this.FZ.H(S5);this.FZ.Ah(false);this.CR.GZ(0x14
);this.CR.H(S6);this.CR.Au(0x1D2);this.CS.GZ(0x14);this.CS.H(S7);this.CS.Au(0x1D2
);this.CT.GZ(0x14);this.CT.H(S8);this.CT.Au(0x1D2);this.Timer.DI(500);this.Timer.
Aw(true);this.D4.H(S9);this.D4.Ah(true);this.E_.H(S_);this.I(this.NT,0);this.I(this.
Fb,0);this.I(this.Iz,0);this.I(this.IJ,0);this.I(this.FZ,0);this.I(this.CR,0);this.
I(this.CS,0);this.I(this.CT,0);this.I(this.D4,0);this.I(this.E_,0);this.NT.Q(B.tv(
B.uP.X0));this.Fb.Q(B.tv(B.uP.X6));this.Iz.Q(B.tv(B.uP.Un));this.IJ.Q(B.tv(B.uP.
Po));this.FZ.Q(B.tv(B.uP.UF));this.CR.Q(B.tv(B.uP.MV));this.CS.Q(B.tv(B.uP.MV));
this.CT.Q(B.tv(B.uP.MV));this.Timer.Ds=[this,this.N9];this.D4.Cv(B.tv(B.uP.RP));
this.D4.G0(B.tv(B.uP.FY));this.D4.CJ=[this,this.Ah_];this.E_.Zy=[this,this.Aje];
this.O.Az=[this,this.Jd];this.H9.AH=[this,this.WB];this.H9.A3([A=B._GetAutoObject(
B.Application.Device),A.YZ,A.ZF]);this.At(aArg);},_Done:function(){this.__proto__=
B.Core.J;this.NT._Done();this.Fb._Done();this.Iz._Done();this.IJ._Done();this.FZ.
_Done();this.CR._Done();this.CS._Done();this.CT._Done();this.Timer._Done();this.
D4._Done();this.E_._Done();this.O._Done();this.H9._Done();B.Core.J._Done.call(this
);},_ReInit:function(){B.Core.J._ReInit.call(this);this.NT._ReInit();this.Fb._ReInit(
);this.Iz._ReInit();this.IJ._ReInit();this.FZ._ReInit();this.CR._ReInit();this.CS.
_ReInit();this.CT._ReInit();this.Timer._ReInit();this.D4._ReInit();this.E_._ReInit(
);this.O._ReInit();this.H9._ReInit();},_Mark:function(C){var A;B.Core.J._Mark.call(
this,C);if((A=this.NT)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Fb)._cycle!=C)A.
_Mark(A._cycle=C);if((A=this.Iz)._cycle!=C)A._Mark(A._cycle=C);if((A=this.IJ)._cycle
!=C)A._Mark(A._cycle=C);if((A=this.FZ)._cycle!=C)A._Mark(A._cycle=C);if((A=this.
CR)._cycle!=C)A._Mark(A._cycle=C);if((A=this.CS)._cycle!=C)A._Mark(A._cycle=C);if((
A=this.CT)._cycle!=C)A._Mark(A._cycle=C);if((A=this.Timer)._cycle!=C)A._Mark(A._cycle=
C);if((A=this.D4)._cycle!=C)A._Mark(A._cycle=C);if((A=this.E_)._cycle!=C)A._Mark(
A._cycle=C);if((A=this.O)._cycle!=C)A._Mark(A._cycle=C);if((A=this.H9)._cycle!=C
)A._Mark(A._cycle=C);},_className:"Components::WiFiStatus"};D.Wu={TR:function(P){
},_Init:function(aArg){B.Graphics.O_._Init.call(this,aArg);this.__proto__=D.Wu;}
,_className:"Components::myarch"};D.Wv={GF:null,FM:null,BJ:function(AN){var A;var
TK=!!this.N&&!!this.N.Oc;var TH=!!this.N&&!!this.N.N1;var TI=!!this.N&&(this.N.M8>
0.000000);var TJ=!!this.N&&(this.N.M_>0.000000);var DA=false;var X=[0,0,(A=this.
S)[2]-A[0],A[3]-A[1]];if(TK&&!this.CY){this.CY=B._NewObject(B.uO.K,0);this.I(this.
CY,0);DA=true;}else if(!TK&&!!this.CY){this.EA(this.CY);this.CY=null;}if(TH&&!this.
CF){this.CF=B._NewObject(B.uO.VL,0);this.I(this.CF,0);DA=true;}else if(!TH&&!!this.
CF){this.EA(this.CF);this.CF=null;}if(TI&&!this.GF){this.GF=B._NewObject(D.Wu,0);
this.BO=B._NewObject(B.uO.Mx,0);this.I(this.BO,0);this.BO.Vb(this.GF);this.BO.U8(
1);DA=true;}else if(!TI&&!!this.GF){this.EA(this.BO);this.BO=null;this.GF=null;}
if(TJ&&!this.FM){this.FM=B._NewObject(D.Wu,0);this.Co=B._NewObject(B.uO.Mx,0);this.
I(this.Co,0);this.Co.Vb(this.FM);this.Co.U8(1);DA=true;}else if(!TJ&&!!this.FM){
this.EA(this.Co);this.Co=null;this.FM=null;}if(DA){if(!!this.CY)this.E8(this.CY);
if(!!this.BO)this.E8(this.BO);if(!!this.Co)this.E8(this.Co);if(!!this.CF)this.E8(
this.CF);}if(!!this.CY){this.CY.Q(this.N.Oc);this.CY.Aj(0xFFFFFFFF);this.CY.H(X);
this.CY.E5(true);this.CY.GY(0);}if(!!this.CF){var Bg=B._NewObject(B.Graphics.SC,
0);Bg.Vn(0.000000,0.000000,-this.Cm);if(this.N.PU!==0.000000)Bg.AfC(this.N.PU,0.000000
,0.000000);if(!this.N.UR)Bg.Vn(0.000000,0.000000,this.Cm);this.CF.N6(this.N.UQ);
this.CF.Q(this.N.N1);this.CF.Aj(0xFFFFFFFF);this.CF.E5(true);this.CF.GY(0);this.
CF.VK(B.tV(B.ts(X),this.N.Mp),Bg);}if(!!this.BO){this.BO.H(X);this.BO.Va(B.tV(B.
ts(X),this.N.Mp));this.BO.Aj(this.N.VE);}if(!!this.Co){this.Co.H(X);this.Co.Va(B.
tV(B.ts(X),this.N.Mp));this.Co.Aj(this.N.M9);}if(!!this.GF){this.GF.Ey(2);this.GF.
U9(this.N.VF-(this.N.M8*0.500000));this.GF.Vc(this.GF.UX()+this.N.M8);this.GF.Vd(-
this.N.PT);this.GF.U3(-this.Cm);if(this.N.VG)this.GF.Ey(4);else this.GF.Ey(2);}if(
!!this.FM){this.FM.Ey(2);this.FM.U9(this.N.VH-(this.N.M_*0.500000));this.FM.Vc(this.
FM.UX()+this.N.M_);this.FM.Vd(-this.Cm);this.FM.U3(-this.N.PS);if(this.N.Qs&&this.
N.Qr)this.FM.Ey(3);else if(this.N.Qs)this.FM.Ey(4);else if(this.N.Qr)this.FM.Ey(
5);else this.FM.Ey(2);}},Ag5:function(P){var Ic=135.000000;var LP=45.000000;var Ho=
this.Cm;var Mk=0;if(!!this.N){Ic=this.N.PT;LP=this.N.PS;Mk=this.N.Vx;}if(this.W1&&
!!this.Cu){this.Cm=Ic;Ho=this.Cm;this.W1=false;}if(!!this.Cu)Ho=((this.Dk()*(LP-
Ic))/this.Cu)+Ic;if(Ho===this.Cm)return;this.E3(this.Cm,Ho);this.CU.Aw(false);if((
Mk<=0)||(LP===Ic)){this.Cm=Ho;this.AO();return;}var L_=(Ho-this.Cm)/(LP-Ic);if(L_<
0.000000)L_=-L_;if(this.N.Vy)this.CU.P0(14);else this.CU.P0(23);this.CU.Fx=this.
Cm;this.CU.Fy=Ho;this.CU.R7((10+((Mk/2)|0))+((((Mk*L_)|0)/2)|0));this.CU.Aw(true
);},AgY:function(P){this.E3(this.Cm,this.CU.G$);this.Cm=this.CU.G$;this.AO();},E3:
function(Cm,Q2){var A;var V9=Cm;var V8=Q2;if(Math.abs(Cm-Q2)<0.001000)return;while(
V9<0.000000)V9+=365.000000;while(V8<0.000000)V8+=365.000000;var x1=120.000000+(90.000000
*Math.cos(V9*B.iq));var y1=120.000000-(90.000000*Math.sin(V9*B.iq));var x2=120.000000+(
90.000000*Math.cos(V8*B.iq));var y2=120.000000-(90.000000*Math.sin(V8*B.iq));var
CC=this.Ajr(x1,y1,x2,y2);if(this.Ah6(Cm,Q2))CC=[].concat(this.S[0],CC.slice(1,4)
);if(this.Ajv(Cm,Q2))CC=B.uo(CC,this.S[2]);if(this.AjJ(Cm,Q2))CC=B.uq(CC,this.S[
1]);if(this.AhL(Cm,Q2))CC=[].concat(CC.slice(0,3),this.S[3]);this.L.As(CC);return;
},Ajr:function(x1,y1,x2,y2){var CC=S$;var AmA=Math.max(x1,x2);var AmC=Math.min(x1
,x2);var AmB=Math.max(y1,y2);var AmD=Math.min(y1,y2);CC=[].concat(AmC|0,CC.slice(
1,4));CC=B.uq(CC,AmD|0);CC=B.uo(CC,AmA|0);CC=[].concat(CC.slice(0,3),AmB|0);CC=[
].concat(Math.max(0,CC[0]-30),CC.slice(1,4));CC=B.uq(CC,Math.max(0,CC[1]-30));CC=
B.uo(CC,Math.min(this.L.S[2],CC[2]+30));CC=[].concat(CC.slice(0,3),Math.min(this.
L.S[3],CC[3]+30));return CC;},Ah6:function(LN,LO){var Tv=Math.max(LN,LO);var T3=
Math.min(LN,LO);if((Tv>180.000000)&&(T3<180.000000))return true;return false;},Ajv:
function(LN,LO){var Tv=Math.max(LN,LO);var T3=Math.min(LN,LO);if((T3<0.000000)&&(
Tv>0.000000))return true;return false;},AjJ:function(LN,LO){var Tv=Math.max(LN,LO
);var T3=Math.min(LN,LO);if((Tv>90.000000)&&(T3<90.000000))return true;return false;
},AhL:function(LN,LO){return false;},_Init:function(aArg){B.uR.Ap._Init.call(this
,aArg);this.__proto__=D.Wv;},_Mark:function(C){var A;B.uR.Ap._Mark.call(this,C);
if((A=this.GF)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.FM)&&(A._cycle!=C))
A._Mark(A._cycle=C);},_className:"Components::mygauge"};D.Qi={Az:null,E1:null,Text:
null,O:null,String:Ta,DD:false,At:function(aArg){this.Text.V(this.String);},BJ:function(
AN){var A;B.Core.J.BJ.call(this,AN);if(((AN&0x40)===0x40)){this.E1.Aj(0xFFFFFFFF
);this.Text.Aj(0xFF000000);}else{this.E1.Aj(0xFF000000);this.Text.Aj(0xFFFFFFFF);
}if(this.DD){this.E1.Aj(0xFF1EC90F);this.Text.Aj(0xFFFFFFFF);}},V:function(E){if(
this.String===E)return;this.String=E;this.Text.V(this.String);},Ca:function(E){if(
this.DD===E)return;this.DD=E;this.AO();},Jd:function(P){var A;this.Ca(!this.DD);(
A=this.Az)?A[1].call(A[0],this):null;},_Init:function(aArg){B.Core.J._Init.call(
this,aArg);B.uO.W._Init.call(this.E1={G:this},0);B.uO.Text._Init.call(this.Text={
G:this},0);B.Core.Bc._Init.call(this.O={G:this},0);this.__proto__=D.Qi;this.H(QH
);this.E1.H(Tb);this.Text.H(QH);this.Text.V(this.String);this.Text.Aj(0xFF000000
);this.O.By=131;this.I(this.E1,0);this.I(this.Text,0);this.Text.Af(B.tv(B.ec.A1)
);this.O.Az=[this,this.Jd];this.At(aArg);},_Done:function(){this.__proto__=B.Core.
J;this.E1._Done();this.Text._Done();this.O._Done();B.Core.J._Done.call(this);},_ReInit:
function(){B.Core.J._ReInit.call(this);this.E1._ReInit();this.Text._ReInit();this.
O._ReInit();},_Mark:function(C){var A;B.Core.J._Mark.call(this,C);if((A=this.Az)&&((
A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.E1)._cycle!=C)A._Mark(A._cycle=
C);if((A=this.Text)._cycle!=C)A._Mark(A._cycle=C);if((A=this.O)._cycle!=C)A._Mark(
A._cycle=C);},_className:"Components::SimpleButton"};D.Pb={Rs:null,DD:false,BJ:function(
AN){D.CG.BJ.call(this,AN);if(this.DD)this.Iw.Q(this.Rs);else this.Iw.Q(this.Do);
},U2:function(E){if(this.Rs===E)return;this.Rs=E;this.AO();},Ca:function(E){if(this.
DD===E)return;this.DD=E;this.AO();},_Init:function(aArg){D.CG._Init.call(this,aArg
);this.__proto__=D.Pb;this.Rs=this.Do;},_Mark:function(C){var A;D.CG._Mark.call(
this,C);if((A=this.Rs)&&(A._cycle!=C))A._Mark(A._cycle=C);},_className:"Components::ButtonWithActiveCover"
};D.Aaq={E7:function(P){var A;this.Do.H(B.un(this.Do.S,((this.B8.Adj()[0]-Math.ceil(((
A=this.Do.S)[2]-A[0])/2.000000))|0)+this.Uo));},AjB:function(aArg){var A;var Hu=
aArg;var AD=B.hr;var EI;var OP;var TE;OP=(Hu/3600)|0;TE=((A=(Math.ceil((Hu%3600)
/60.000000)|0))<0)?A+0x100000000:A;this.Text.V(B.hr);if(!!OP){AD=OP.toFixed()+QD;
this.Text.V(AD+QF);}EI=TE.toFixed()+QE;this.Text.V(this.Text.String+EI);this.Do.
Ah(true);},_Init:function(aArg){D.Bk._Init.call(this,aArg);this.__proto__=D.Aaq;
},_className:"Components::TimerOffSliderActive"};D.IA={A8:null,Br:null,BI:B.hr,Z6:
0,Qg:0,Bj:0xFFFFFFFF,Qt:0,Adt:true,Adx:true,_Init:function(aArg){this.__proto__=
D.IA;this.A8=B.tv(B.ec.A1);B.gx++;},_Done:function(){this.__proto__=null;B.gx--;
},_ReInit:function(){},_Mark:function(C){var A;if((A=this.A8)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.Br)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.
G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:null,_className:
"Components::ListParameter"};D.Fv={E1:null,Is:null,DF:null,Z$:function(AcF){var A;
if(AcF>100.000000)return true;var Amz=((A=this.S)[3]-A[1])-((A=this.Is.S)[3]-A[1
]);this.DF.Fx=this.Is.S;this.DF.Fy=this.Is.S;this.DF.Fy=B.up(this.DF.Fy,((Amz*AcF
)/100.000000)|0);this.DF.Aw(false);this.DF.Aw(true);return false;},_Init:function(
aArg){B.Core.J._Init.call(this,aArg);B.uO.K._Init.call(this.E1={G:this},0);B.uO.
K._Init.call(this.Is={G:this},0);B.uX.ZU._Init.call(this.DF={G:this},0);this.__proto__=
D.Fv;var A;this.H(QI);this.E1.H(QI);this.E1.B1(true);this.Is.H(Tc);this.Is.B1(true
);this.DF.P0(0);this.DF.Zt(1);this.DF.R7(300);this.I(this.E1,0);this.I(this.Is,0
);this.E1.Q(B.tv(B.uP.Aab));this.Is.Q(B.tv(B.uP.Fv));this.DF.Dl=[A=this.Is,A.Aic
,A.AlV];},_Done:function(){this.__proto__=B.Core.J;this.E1._Done();this.Is._Done(
);this.DF._Done();B.Core.J._Done.call(this);},_ReInit:function(){B.Core.J._ReInit.
call(this);this.E1._ReInit();this.Is._ReInit();this.DF._ReInit();},_Mark:function(
C){var A;B.Core.J._Mark.call(this,C);if((A=this.E1)._cycle!=C)A._Mark(A._cycle=C
);if((A=this.Is)._cycle!=C)A._Mark(A._cycle=C);if((A=this.DF)._cycle!=C)A._Mark(
A._cycle=C);},_className:"Components::SettingSlider"};D.Apm={Apv:0,Api:1,AoH:2,AoB:
3};
D._Init=function(){D.Cg.__proto__=B.Core.J;D.Fw.__proto__=B.Core.J;D.PL.__proto__=
B.Core.J;D.H7.__proto__=B.Core.J;D.Power.__proto__=B.Core.J;D.EB.__proto__=B.Core.
J;D.Bk.__proto__=B.Core.J;D.KA.__proto__=B.Core.J;D.CG.__proto__=B.Core.J;D.Aad.
__proto__=B.Core.J;D.Ha.__proto__=B.Core.J;D.Wu.__proto__=B.Graphics.O_;D.Wv.__proto__=
B.uR.Ap;D.Qi.__proto__=B.Core.J;D.Pb.__proto__=D.CG;D.Aaq.__proto__=D.Bk;D.Fv.__proto__=
B.Core.J;};D._ReInit=function(){};D.Cl=function(C){};return D;})();

/* Embedded Wizard */