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
* Version  : 12.05
* Profile  : ESP32_WebGL
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.abj)throw new Error("The unit file 'Components.js' included twice!"
);EmWiApp.abj=(function(){var B=EmWiApp;var C={};
var AD="g";var A0=" lb ";var AT=[0,0,240,240];var DG=[12,11,229,230];var DV=[65,157
,176,195];var G2="Zero";var Ji=[83,48,158,86];var Jj="Unit";var Jk=[42,95,198,146
];var H8="100 g";var H9="Speed";var Jl="State";var Jm="0xE0";var Jn="Weight";var
G3="PIR";var Jo="Temp";var Jp=[16,48,224,198];var Jq=[62,13,162,43];var Jr="ENG";
var Js=[47,45,193,196];var Jt=[29,42,207,80];var Ju=[29,89,207,127];var Jv=[29,142
,207,180];var Jw="\u2103";var Jx=":";var Jy=[24,263,202,301];var G4=[83,42,202,72
];var Jz="60 \u2103";var JA=[83,95,202,125];var JB="2";var Mx=[83,148,202,178];var
My="04:28";var Mz=[34,43,76,82];var MA=[34,92,76,131];var MB=[34,142,76,181];var
MC=[30,37];var MD=[214,37];var ME=[214,79];var MF=[30,79];var MG=[31,90];var MH=[
215,90];var MI=[215,132];var MJ=[31,132];var MK=[32,142];var ML=[216,142];var MM=[
216,184];var MN=[32,184];var MO=[81,66,160,174];var KZ=[81,66,82,67];var MP=[0,0
,208,30];var MQ=[0,0,88,30];var MR=[88,0,208,30];var MS="0 RPM";var MT="Spnge Cake";
var MU="Dough Kneading";var MV="Dough Proving";var MW="Choc. Melting";var MX="Swiss Meringue";
var G5="More...";var MY=[52,59,185,179];var MZ=[0,60,240,180];var M0=[70,10,170,
40];var M1="Preset";var M2="Is pressed";var K0=[0,0,240,40];var M3=[34,5,218,35];
var M4="Text";var M5=[183,8,208,32];var M6=[0,0];var M7=[239,0];var M8=[239,39];
var M9=[0,39];var M_=[0,0,75,14];var M$=[1,1,11,11];var Na=[30,1,40,11];var Nb=[
60,1,70,11];
C.Kh={I_:null,I9:null,Ab:null,Ar:null,C2:null,CC:null,Ey:null,Ef:null,H6:1000,H3:
0,Mp:function(E){if(this.H6===E)return;this.H6=E;this.Kd(this);},Bd:function(aArg
){this.Kd(this);},N0:function(An){var A;(A=this.I_)?A[1].call(A[0],this):null;},
NX:function(An){var A;(A=this.I9)?A[1].call(A[0],this):null;},Mo:function(E){if(
this.H3===E)return;this.H3=E;this.Kd(this);},Nt:function(NA){var Ny=NA/454;return Ny;
},Kd:function(An){if(!this.H3)this.Ef.Bk(this.H6.toFixed()+AD);else{var Nr=this.
Nt(this.H6);this.Ef.Bk(B.aap(Nr,1,1)+A0);}},_Init:function(aArg){B.Core.K._Init.
call(this,aArg);B.abg.Ab._Init.call(this.Ab={Q:this},0);B.abg.Ar._Init.call(this.
Ar={Q:this},0);B.abl.C2._Init.call(this.C2={Q:this},0);B.abl.CC._Init.call(this.
CC={Q:this},0);B.abl.C2._Init.call(this.Ey={Q:this},0);B.abg.Text._Init.call(this.
Ef={Q:this},0);this.__proto__=C.Kh;this.Z(AT);this.Ab.Z(AT);this.Ab.Ao(0xFF000000
);this.Ar.Z(DG);this.Ar.FV(true);this.C2.Z(DV);this.C2.KQ(G2);this.CC.Mb(0x64FFFFFF
);this.Ey.Z(Ji);this.Ey.KQ(Jj);this.Ef.Z(Jk);this.Ef.Bk(H8);this.At(this.Ab,0);this.
At(this.Ar,0);this.At(this.C2,0);this.At(this.Ey,0);this.At(this.Ef,0);this.Ar.C1(
B.zW(B.abi.Ki));this.C2.EU=[this,this.N0];this.C2.KK(this.CC);this.CC.Mf(B.zW(B.
eV.Fh));this.CC.L9(B.zW(B.abi.Gk));this.CC.Ma(B.zW(B.abi.Gk));this.CC.L$(B.zW(B.
abi.Gk));this.CC.L_(B.zW(B.abi.Gk));this.Ey.EU=[this,this.NX];this.Ey.KK(this.CC
);this.Ef.Ed(B.zW(B.eV.IX));this.Bd(aArg);},_Done:function(){this.__proto__=B.Core.
K;this.Ab._Done();this.Ar._Done();this.C2._Done();this.CC._Done();this.Ey._Done(
);this.Ef._Done();B.Core.K._Done.call(this);},_ReInit:function(){B.Core.K._ReInit.
call(this);this.Ab._ReInit();this.Ar._ReInit();this.C2._ReInit();this.CC._ReInit(
);this.Ey._ReInit();this.Ef._ReInit();},_Mark:function(D){var A;B.Core.K._Mark.call(
this,D);if((A=this.I_)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.I9)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ab)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.Ar)._cycle!=D)A._Mark(A._cycle=D);if((A=this.C2)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.CC)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Ey)._cycle!=
D)A._Mark(A._cycle=D);if((A=this.Ef)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Components::scale_"};C.IL={Ab:null,AK:null,Text:null,Timer:null,Bd:function(aArg
){},DT:function(An){var A;var JY=this.AK.Ex;var Ck=(C.HK.isPrototypeOf(A=this.AK.
AO)?A:null);if(!Ck)return;switch(JY){case 0:{Ck.C5.Bk(H9);Ck.C6.Bk(B._GetAutoObject(
B.Application.Device).Gy.toFixed());}break;case 1:{Ck.C5.Bk(Jl);Ck.C6.Bk(Jm);}break;
case 2:{Ck.C5.Bk(Jn);Ck.C6.Bk(B._GetAutoObject(B.Application.Device).Gg.toFixed(
));}break;case 3:{Ck.C5.Bk(G3);Ck.C6.Bk(B._GetAutoObject(B.Application.Device).GT.
toFixed());}break;case 4:{Ck.C5.Bk(Jo);Ck.C6.Bk(B._GetAutoObject(B.Application.Device
).GL.toFixed());}break;default:;}Ck.Z(B.aaN(Ck.M,[(A=this.AK.M)[2]-A[0],this.AK.
D$]));},NV:function(An){this.AK.LX(0,this.AK.DC-1);},_Init:function(aArg){B.Core.
K._Init.call(this,aArg);B.abg.Ab._Init.call(this.Ab={Q:this},0);B.Core.AK._Init.
call(this.AK={Q:this},0);B.abg.Text._Init.call(this.Text={Q:this},0);B.Core.Timer.
_Init.call(this.Timer={Q:this},0);this.__proto__=C.IL;this.Z(AT);this.Ab.Z(AT);this.
Ab.Ao(0xFF000000);this.AK.Z(Jp);this.AK.KP(30);this.AK.KR(5);this.AK.KO(C.HK);this.
Text.Z(Jq);this.Text.Bk(Jr);this.Timer.GO(100);this.Timer.BK(true);this.At(this.
Ab,0);this.At(this.AK,0);this.At(this.Text,0);this.AK.DT=[this,this.DT];this.Text.
Ed(B.zW(B.eV.Fh));this.Timer.Fn=[this,this.NV];this.Bd(aArg);},_Done:function(){
this.__proto__=B.Core.K;this.Ab._Done();this.AK._Done();this.Text._Done();this.Timer.
_Done();B.Core.K._Done.call(this);},_ReInit:function(){B.Core.K._ReInit.call(this
);this.Ab._ReInit();this.AK._ReInit();this.Text._ReInit();this.Timer._ReInit();}
,_Mark:function(D){var A;B.Core.K._Mark.call(this,D);if((A=this.Ab)._cycle!=D)A.
_Mark(A._cycle=D);if((A=this.AK)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Text).
_cycle!=D)A._Mark(A._cycle=D);if((A=this.Timer)._cycle!=D)A._Mark(A._cycle=D);},
_className:"Components::EngInfo"};C.Je={B0:null,Gd:null,Gf:null,Bd:function(aArg
){this.Lo(this);this.Ln(this);},NY:function(An){if(!B._GetAutoObject(B.Application.
Device).G1)B._GetAutoObject(B.Application.Device).HV(1);else B._GetAutoObject(B.
Application.Device).HV(0);},N1:function(An){},Lo:function(An){this.B0.Mp(B._GetAutoObject(
B.Application.Device).Gg);},Ln:function(An){this.B0.Mo(B._GetAutoObject(B.Application.
Device).G1);},_Init:function(aArg){B.Core.K._Init.call(this,aArg);C.Kh._Init.call(
this.B0={Q:this},0);B.Core.BI._Init.call(this.Gd={Q:this},0);B.Core.BI._Init.call(
this.Gf={Q:this},0);this.__proto__=C.Je;var A;this.Z(AT);this.B0.Z(AT);this.At(this.
B0,0);this.B0.I_=[this,this.N1];this.B0.I9=[this,this.NY];this.Gd.Eb=[this,this.
Ln];this.Gd.EV([A=B._GetAutoObject(B.Application.Device),A.KI,A.HV]);this.Gf.Eb=[
this,this.Lo];this.Gf.EV([A=B._GetAutoObject(B.Application.Device),A.KJ,A.KS]);this.
Bd(aArg);},_Done:function(){this.__proto__=B.Core.K;this.B0._Done();this.Gd._Done(
);this.Gf._Done();B.Core.K._Done.call(this);},_ReInit:function(){B.Core.K._ReInit.
call(this);this.B0._ReInit();this.Gd._ReInit();this.Gf._ReInit();},_Mark:function(
D){var A;B.Core.K._Mark.call(this,D);if((A=this.B0)._cycle!=D)A._Mark(A._cycle=D
);if((A=this.Gd)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Gf)._cycle!=D)A._Mark(
A._cycle=D);},_className:"Components::Scale"};C.IQ={Ab:null,Ar:null,_Init:function(
aArg){B.Core.K._Init.call(this,aArg);B.abg.Ab._Init.call(this.Ab={Q:this},0);B.abg.
Ar._Init.call(this.Ar={Q:this},0);this.__proto__=C.IQ;this.Z(AT);this.Ab.Z(AT);this.
Ab.Ao(0xFF000000);this.Ar.Z(Js);this.Ar.FV(true);this.At(this.Ab,0);this.At(this.
Ar,0);this.Ar.C1(B.zW(B.abi.JS));},_Done:function(){this.__proto__=B.Core.K;this.
Ab._Done();this.Ar._Done();B.Core.K._Done.call(this);},_ReInit:function(){B.Core.
K._ReInit.call(this);this.Ab._ReInit();this.Ar._ReInit();},_Mark:function(D){var
A;B.Core.K._Mark.call(this,D);if((A=this.Ab)._cycle!=D)A._Mark(A._cycle=D);if((A=
this.Ar)._cycle!=D)A._Mark(A._cycle=D);},_className:"Components::HeadLifted"};C.
HH={Ab:null,B2:null,C4:null,Df:null,Dg:null,DA:null,DP:null,DQ:null,AS:null,Dd:null
,De:null,BI:null,FY:null,FZ:null,BB:null,FR:null,FS:null,F0:null,Ea:0,Bd:function(
aArg){this.Hp(this);},I6:function(E){if(this.Ea===E)return;this.Ea=E;switch(E){case
0:{this.B2.EW(false);this.DA.Ao(0xFFFFFFFF);this.DP.Ao(0xFFFFFFFF);this.DQ.Ao(0xFFFFFFFF
);this.C4.Ao(0xFFFFFFFF);this.Df.Ao(0xFFFFFFFF);this.Dg.Ao(0xFFFFFFFF);}break;case
1:{this.B2.EW(true);this.DA.Ao(0xFF000000);this.DP.Ao(0xFFFFFFFF);this.DQ.Ao(0xFFFFFFFF
);this.C4.Ao(0xFF000000);this.Df.Ao(0xFFFFFFFF);this.Dg.Ao(0xFFFFFFFF);this.B2.Z(
Jt);}break;case 2:{this.B2.EW(true);this.DA.Ao(0xFFFFFFFF);this.DP.Ao(0xFF000000
);this.DQ.Ao(0xFFFFFFFF);this.C4.Ao(0xFFFFFFFF);this.Df.Ao(0xFF000000);this.Dg.Ao(
0xFFFFFFFF);this.B2.Z(Ju);}break;case 3:{this.B2.EW(true);this.DA.Ao(0xFFFFFFFF);
this.DP.Ao(0xFFFFFFFF);this.DQ.Ao(0xFF000000);this.C4.Ao(0xFFFFFFFF);this.Df.Ao(
0xFFFFFFFF);this.Dg.Ao(0xFF000000);this.B2.Z(Jv);}break;default:;}},Ho:function(
An){if(An===this.AS){if(!this.AS.BG)this.I6(1);}else if(An===this.Dd){if(!this.Dd.
BG)this.I6(2);}else if((An===this.De)&&!this.De.BG)this.I6(3);},Hp:function(An){
this.C4.Bk(B._GetAutoObject(B.Application.Device).Ga.toFixed()+Jw);this.Df.Bk(B.
_GetAutoObject(B.Application.Device).F$.toFixed());this.Dg.Bk((B.aaq((B._GetAutoObject(
B.Application.Device).EA/60)|0,2,10)+Jx)+B.aaq(B._GetAutoObject(B.Application.Device
).EA%60,2,10));if(B._GetAutoObject(B.Application.Device).F_)this.Ab.Ao(0xFF76BBCF
);else this.Ab.Ao(0xFF000000);if(!B._GetAutoObject(B.Application.Device).EA)B._GetAutoObject(
B.Application.Device).FX(false);},NZ:function(An){var A;var A_,Di;if(!this.Ea)return;
if(this.Ea===1)(A_=B._GetAutoObject(B.Application.Device),A_.HU(A_.Ga+5));else if(
this.Ea===2)(A_=B._GetAutoObject(B.Application.Device),Di=A_.F$+1,A_.HT((Di&0x80
)?Di|0xFFFFFF00:Di&0xFF));else if(this.Ea===3)(A_=B._GetAutoObject(B.Application.
Device),A_.GP(A_.EA+10));},NG:function(An){var A;var A_,Di;if(!this.Ea)return;if(
this.Ea===1)(A_=B._GetAutoObject(B.Application.Device),Di=A_.Ga-1,A_.HU((Di<0)?Di+
0x100000000:Di));else if(this.Ea===2)(A_=B._GetAutoObject(B.Application.Device),
Di=A_.F$-1,A_.HT((Di&0x80)?Di|0xFFFFFF00:Di&0xFF));else if(this.Ea===3)(A_=B._GetAutoObject(
B.Application.Device),A_.GP(A_.EA-10));},NT:function(An){B._GetAutoObject(B.Application.
Device).FX(!B._GetAutoObject(B.Application.Device).F_);},_Init:function(aArg){B.
Core.K._Init.call(this,aArg);B.abg.Ab._Init.call(this.Ab={Q:this},0);B.abg.B2._Init.
call(this.B2={Q:this},0);B.abg.Text._Init.call(this.C4={Q:this},0);B.abg.Text._Init.
call(this.Df={Q:this},0);B.abg.Text._Init.call(this.Dg={Q:this},0);B.abg.Ar._Init.
call(this.DA={Q:this},0);B.abg.Ar._Init.call(this.DP={Q:this},0);B.abg.Ar._Init.
call(this.DQ={Q:this},0);B.Core.AS._Init.call(this.AS={Q:this},0);B.Core.AS._Init.
call(this.Dd={Q:this},0);B.Core.AS._Init.call(this.De={Q:this},0);B.Core.BI._Init.
call(this.BI={Q:this},0);B.Core.BI._Init.call(this.FY={Q:this},0);B.Core.BI._Init.
call(this.FZ={Q:this},0);B.Core.ET._Init.call(this.BB={Q:this},0);B.Core.ET._Init.
call(this.FR={Q:this},0);B.Core.ET._Init.call(this.FS={Q:this},0);B.Core.BI._Init.
call(this.F0={Q:this},0);this.__proto__=C.HH;var A;this.Z(AT);this.Ab.Z(AT);this.
Ab.Ao(0xFF000000);this.B2.Z(Jy);this.C4.Z(G4);this.C4.Bk(Jz);this.C4.Ao(0xFFFFFFFF
);this.Df.Z(JA);this.Df.Bk(JB);this.Dg.Z(Mx);this.Dg.Bk(My);this.DA.Z(Mz);this.DA.
Ao(0xFFFFFFFF);this.DP.Z(MA);this.DQ.Z(MB);this.AS.Fl(MC);this.AS.Fk(MD);this.AS.
Fj(ME);this.AS.Fi(MF);this.AS.BN=0xF;this.Dd.Fl(MG);this.Dd.Fk(MH);this.Dd.Fj(MI
);this.Dd.Fi(MJ);this.Dd.BN=0xF;this.De.Fl(MK);this.De.Fk(ML);this.De.Fj(MM);this.
De.Fi(MN);this.De.BN=0xF;this.BB.Eu=4;this.FR.Eu=5;this.FS.Eu=131;this.At(this.Ab
,0);this.At(this.B2,0);this.At(this.C4,0);this.At(this.Df,0);this.At(this.Dg,0);
this.At(this.DA,0);this.At(this.DP,0);this.At(this.DQ,0);this.At(this.AS,0);this.
At(this.Dd,0);this.At(this.De,0);this.B2.C1(B.zW(B.abn.Jd));this.C4.Ed(B.zW(B.eV.
GM));this.Df.Ed(B.zW(B.eV.GM));this.Dg.Ed(B.zW(B.eV.GM));this.DA.C1(B.zW(B.abi.Km
));this.DP.C1(B.zW(B.abi.Kj));this.DQ.C1(B.zW(B.abi.Kl));this.AS.DU=[this,this.Ho
];this.Dd.DU=[this,this.Ho];this.De.DU=[this,this.Ho];this.BI.Eb=[this,this.Hp];
this.BI.EV([A=B._GetAutoObject(B.Application.Device),A.KF,A.HT]);this.FY.Eb=[this
,this.Hp];this.FY.EV([A=B._GetAutoObject(B.Application.Device),A.KG,A.HU]);this.
FZ.Eb=[this,this.Hp];this.FZ.EV([A=B._GetAutoObject(B.Application.Device),A.KH,A.
GP]);this.BB.Ec=[this,this.NZ];this.FR.Ec=[this,this.NG];this.FS.Ec=[this,this.NT
];this.F0.Eb=[this,this.Hp];this.F0.EV([A=B._GetAutoObject(B.Application.Device)
,A.I0,A.FX]);this.Bd(aArg);},_Done:function(){this.__proto__=B.Core.K;this.Ab._Done(
);this.B2._Done();this.C4._Done();this.Df._Done();this.Dg._Done();this.DA._Done(
);this.DP._Done();this.DQ._Done();this.AS._Done();this.Dd._Done();this.De._Done(
);this.BI._Done();this.FY._Done();this.FZ._Done();this.BB._Done();this.FR._Done(
);this.FS._Done();this.F0._Done();B.Core.K._Done.call(this);},_ReInit:function(){
B.Core.K._ReInit.call(this);this.Ab._ReInit();this.B2._ReInit();this.C4._ReInit(
);this.Df._ReInit();this.Dg._ReInit();this.DA._ReInit();this.DP._ReInit();this.DQ.
_ReInit();this.AS._ReInit();this.Dd._ReInit();this.De._ReInit();this.BI._ReInit(
);this.FY._ReInit();this.FZ._ReInit();this.BB._ReInit();this.FR._ReInit();this.FS.
_ReInit();this.F0._ReInit();},_Mark:function(D){var A;B.Core.K._Mark.call(this,D
);if((A=this.Ab)._cycle!=D)A._Mark(A._cycle=D);if((A=this.B2)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.C4)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Df)._cycle!=
D)A._Mark(A._cycle=D);if((A=this.Dg)._cycle!=D)A._Mark(A._cycle=D);if((A=this.DA
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.DP)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.DQ)._cycle!=D)A._Mark(A._cycle=D);if((A=this.AS)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.Dd)._cycle!=D)A._Mark(A._cycle=D);if((A=this.De)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.BI)._cycle!=D)A._Mark(A._cycle=D);if((A=this.FY)._cycle!=
D)A._Mark(A._cycle=D);if((A=this.FZ)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BB
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.FR)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.FS)._cycle!=D)A._Mark(A._cycle=D);if((A=this.F0)._cycle!=D)A._Mark(A._cycle=
D);},_className:"Components::Control"};C.Jg={Ab:null,CD:null,Ar:null,Timer:null,
Bd:function(aArg){},NE:function(An){this.Timer.BK(true);},NW:function(An){this.Timer.
BK(false);this.I.IH(this,null,null,null,null,null,false);},_Init:function(aArg){
B.Core.K._Init.call(this,aArg);B.abg.Ab._Init.call(this.Ab={Q:this},0);B.abk.CD.
_Init.call(this.CD={Q:this},0);B.abg.Ar._Init.call(this.Ar={Q:this},0);B.Core.Timer.
_Init.call(this.Timer={Q:this},0);this.__proto__=C.Jg;var A;this.Z(AT);this.Ab.Z(
AT);this.Ab.Ao(0xFF000000);this.CD.Mn(23);this.CD.Mi(1);this.CD.Me(1000);this.CD.
BK(true);this.CD.G0=MO;this.CD.GZ=KZ;this.Ar.Z(KZ);this.Ar.GN(0x9);this.Timer.GO(
500);this.At(this.Ab,0);this.At(this.Ar,0);this.CD.IZ=[this,this.NE];this.CD.DD=[
A=this.Ar,A.L2,A.Nc];this.Ar.C1(B.zW(B.abi.IU));this.Timer.Fn=[this,this.NW];this.
Bd(aArg);},_Done:function(){this.__proto__=B.Core.K;this.Ab._Done();this.CD._Done(
);this.Ar._Done();this.Timer._Done();B.Core.K._Done.call(this);},_ReInit:function(
){B.Core.K._ReInit.call(this);this.Ab._ReInit();this.CD._ReInit();this.Ar._ReInit(
);this.Timer._ReInit();},_Mark:function(D){var A;B.Core.K._Mark.call(this,D);if((
A=this.Ab)._cycle!=D)A._Mark(A._cycle=D);if((A=this.CD)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.Ar)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Timer)._cycle!=D)A._Mark(
A._cycle=D);},_className:"Components::Splash"};C.HK={C5:null,C6:null,_Init:function(
aArg){B.Core.K._Init.call(this,aArg);B.abg.Text._Init.call(this.C5={Q:this},0);B.
abg.Text._Init.call(this.C6={Q:this},0);this.__proto__=C.HK;this.Z(MP);this.C5.Z(
MQ);this.C5.GN(0x14);this.C5.Bk(H9);this.C6.Z(MR);this.C6.Bk(MS);this.C6.Ao(0xFF00FF00
);this.At(this.C5,0);this.At(this.C6,0);this.C5.Ed(B.zW(B.eV.Fh));this.C6.Ed(B.zW(
B.eV.Fh));},_Done:function(){this.__proto__=B.Core.K;this.C5._Done();this.C6._Done(
);B.Core.K._Done.call(this);},_ReInit:function(){B.Core.K._ReInit.call(this);this.
C5._ReInit();this.C6._ReInit();},_Mark:function(D){var A;B.Core.K._Mark.call(this
,D);if((A=this.C5)._cycle!=D)A._Mark(A._cycle=D);if((A=this.C6)._cycle!=D)A._Mark(
A._cycle=D);},_className:"Components::ENGItemClass"};C.HW={Ab:null,DE:null,AK:null
,Text:null,Array:B.aan(10,B.jm,{0:MT,1:MU,2:MV,3:MW,4:MX,5:G5,6:G5,7:G5,8:G5,9:G5
}),DT:function(An){var A;var JY=this.AK.Ex;var Ck=(C.HX.isPrototypeOf(A=this.AK.
AO)?A:null);if(!Ck)return;Ck.Text.Bk(this.Array.Get(JY));Ck.Z(B.aaN(Ck.M,[(A=this.
AK.M)[2]-A[0],this.AK.D$]));},_Init:function(aArg){B.Core.K._Init.call(this,aArg
);B.abg.Ab._Init.call(this.Ab={Q:this},0);B.Core.DE._Init.call(this.DE={Q:this},
0);B.Core.AK._Init.call(this.AK={Q:this},0);B.abg.Text._Init.call(this.Text={Q:this
},0);(this.Array=[]).__proto__=C.HW.Array;this.__proto__=C.HW;this.Z(AT);this.Ab.
Z(AT);this.Ab.Ao(0xFF000000);this.DE.Z(MY);this.DE.Md(0.01);this.AK.Z(MZ);this.AK.
KP(40);this.AK.KR(10);this.AK.KO(C.HX);this.Text.Z(M0);this.Text.Bk(M1);this.At(
this.Ab,0);this.At(this.DE,0);this.At(this.AK,0);this.At(this.Text,0);this.AK.DT=[
this,this.DT];this.AK.Mm(this.DE);this.Text.Ed(B.zW(B.eV.Fh));},_Done:function(){
this.__proto__=B.Core.K;this.Ab._Done();this.DE._Done();this.AK._Done();this.Text.
_Done();B.Core.K._Done.call(this);},_ReInit:function(){B.Core.K._ReInit.call(this
);this.Ab._ReInit();this.DE._ReInit();this.AK._ReInit();this.Text._ReInit();},_Mark:
function(D){var A;B.Core.K._Mark.call(this,D);if((A=this.Ab)._cycle!=D)A._Mark(A.
_cycle=D);if((A=this.DE)._cycle!=D)A._Mark(A._cycle=D);if((A=this.AK)._cycle!=D)
A._Mark(A._cycle=D);if((A=this.Text)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Components::Preset"};C.HX={Ar:null,Text:null,ES:null,AS:null,Ho:function(An){B.
aa8("%s",M2);},_Init:function(aArg){B.Core.K._Init.call(this,aArg);B.abg.Ar._Init.
call(this.Ar={Q:this},0);B.abg.Text._Init.call(this.Text={Q:this},0);B.abg.Ar._Init.
call(this.ES={Q:this},0);B.Core.AS._Init.call(this.AS={Q:this},0);this.__proto__=
C.HX;this.Z(K0);this.Ar.Z(K0);this.Text.Z(M3);this.Text.GN(0x11);this.Text.Bk(M4
);this.Text.Ao(0xFF000000);this.ES.Z(M5);this.ES.FV(true);this.AS.Fl(M6);this.AS.
Fk(M7);this.AS.Fj(M8);this.AS.Fi(M9);this.AS.BN=0x3F;this.At(this.Ar,0);this.At(
this.Text,0);this.At(this.ES,0);this.At(this.AS,0);this.Ar.C1(B.zW(B.abi.Kb));this.
Text.Ed(B.zW(B.eV.IW));this.ES.C1(B.zW(B.abi.JT));this.AS.DU=[this,this.Ho];},_Done:
function(){this.__proto__=B.Core.K;this.Ar._Done();this.Text._Done();this.ES._Done(
);this.AS._Done();B.Core.K._Done.call(this);},_ReInit:function(){B.Core.K._ReInit.
call(this);this.Ar._ReInit();this.Text._ReInit();this.ES._ReInit();this.AS._ReInit(
);},_Mark:function(D){var A;B.Core.K._Mark.call(this,D);if((A=this.Ar)._cycle!=D
)A._Mark(A._cycle=D);if((A=this.Text)._cycle!=D)A._Mark(A._cycle=D);if((A=this.ES
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.AS)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Components::PresetItemClass"};C.CT={CJ:null,CK:null,CL:null,II:-1,Bd:function(aArg
){this.FW(1);},FW:function(E){if(this.II===E)return;this.II=E;switch(this.II){case
0:{this.CJ.Ao((this.CJ.Bg&0x00FFFFFF)|(125<<24));this.CK.Ao((this.CK.Bg&0x00FFFFFF
)|(125<<24));this.CL.Ao((this.CL.Bg&0x00FFFFFF)|(125<<24));}break;case 1:{this.CJ.
Ao((this.CJ.Bg&0x00FFFFFF)|(255<<24));this.CK.Ao((this.CK.Bg&0x00FFFFFF)|(125<<24
));this.CL.Ao((this.CL.Bg&0x00FFFFFF)|(125<<24));}break;case 2:{this.CJ.Ao((this.
CJ.Bg&0x00FFFFFF)|(125<<24));this.CK.Ao((this.CK.Bg&0x00FFFFFF)|(255<<24));this.
CL.Ao((this.CL.Bg&0x00FFFFFF)|(125<<24));}break;case 3:{this.CJ.Ao((this.CJ.Bg&0x00FFFFFF
)|(125<<24));this.CK.Ao((this.CK.Bg&0x00FFFFFF)|(125<<24));this.CL.Ao((this.CL.Bg&
0x00FFFFFF)|(255<<24));}break;default:;}},_Init:function(aArg){B.Core.K._Init.call(
this,aArg);B.abg.Ar._Init.call(this.CJ={Q:this},0);B.abg.Ar._Init.call(this.CK={
Q:this},0);B.abg.Ar._Init.call(this.CL={Q:this},0);this.__proto__=C.CT;this.Z(M_
);this.CJ.Z(M$);this.CJ.FV(true);this.CK.Z(Na);this.CK.FV(true);this.CL.Z(Nb);this.
CL.FV(true);this.At(this.CJ,0);this.At(this.CK,0);this.At(this.CL,0);this.CJ.C1(
B.zW(B.abi.Hd));this.CK.C1(B.zW(B.abi.Hd));this.CL.C1(B.zW(B.abi.Hd));this.Bd(aArg
);},_Done:function(){this.__proto__=B.Core.K;this.CJ._Done();this.CK._Done();this.
CL._Done();B.Core.K._Done.call(this);},_ReInit:function(){B.Core.K._ReInit.call(
this);this.CJ._ReInit();this.CK._ReInit();this.CL._ReInit();},_Mark:function(D){
var A;B.Core.K._Mark.call(this,D);if((A=this.CJ)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.CK)._cycle!=D)A._Mark(A._cycle=D);if((A=this.CL)._cycle!=D)A._Mark(A._cycle=
D);},_className:"Components::Dots"};
C._Init=function(){C.Kh.__proto__=B.Core.K;C.IL.__proto__=B.Core.K;C.Je.__proto__=
B.Core.K;C.IQ.__proto__=B.Core.K;C.HH.__proto__=B.Core.K;C.Jg.__proto__=B.Core.K;
C.HK.__proto__=B.Core.K;C.HW.__proto__=B.Core.K;C.HX.__proto__=B.Core.K;C.CT.__proto__=
B.Core.K;};C._ReInit=function(){};C.Bs=function(D){};return C;})();

/* Embedded Wizard */