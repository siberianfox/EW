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
* Profile  : ESP32_WebGL
* Platform : Tara.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.Application)throw new Error("The unit file 'Application.js' included twice!"
);EmWiApp.Application=(function(){var B=EmWiApp;var C={};
var AA=[0,0,240,320];var A0="power on";var B8="power off";var BW="switches on";var
D3="switches off";var E3="buzzer beep ";var Ch=": ";var E4="Active";var Ey="Inactive";
var E5="Start Test";var FO="Skip";var GO="Stop";var GP=[8,123,59,163];var GQ=[8,
224,59,258];var E6=[0,37,240,67];var GR="Motor Tester";var GS=[90,115,236,171];var
E7="00: 00: 00";var GT=[90,219,236,263];var GU=[43,267,197,309];var FP=[3,0,97,40
];var GV=[70,134,87,152];var Jl=[70,232,87,250];var Jm=[34,34];var Jn=[177,5,240
,35];var Jo="Setting";var Jp=[23,23];var Jq=[8,175,59,213];var Jr=[90,166,236,222
];var Js=[70,185,87,203];var H2=[8,74,61,100];var Jt="AC";var Ju=[70,78,87,96];var
Jv=[87,72,153,102];
C.Iy={CZ:null,Bz:function(aArg){this.CZ.Ja(B._NewObject(C.Home,0));},_Init:function(
aArg){B.Core.Root._Init.call(this,aArg);C.CZ._Init.call(this.CZ={L:this},0);this.
__proto__=C.Iy;this.S(AA);this.CZ.S(AA);this.Ai(this.CZ,0);this.Bz(aArg);},_Done:
function(){this.__proto__=B.Core.Root;this.CZ._Done();B.Core.Root._Done.call(this
);},_ReInit:function(){B.Core.Root._ReInit.call(this);this.CZ._ReInit();},_Mark:
function(E){var A;B.Core.Root._Mark.call(this,E);if((A=this.CZ)._cycle!=E)A._Mark(
A._cycle=E);},_className:"Application::Application"};C.Fw={_class:function(){return B.
uP.BM;},0:{Data:function(){return B.uX;},Cache:[],_this:null}};C.Dd={_class:function(
){return B.uP.BM;},0:{Data:function(){return B.uY;},Cache:[],_this:null}};C.ES={
GN:1000,FN:1000,Error:0,DB:1,Dz:3,Dt:3,Fp:false,GB:function(D){if(this.Dt===D)return;
this.Dt=D;{}B.t4([this,this.Gw,this.GB],0);},UpdateMotorTime:function(BH){if(BH!==
this.Dt){this.Dt=BH;B.t4([this,this.Gw,this.GB],0);}},GD:function(D){if(this.Dz===
D)return;this.Dz=D;{}B.t4([this,this.Gx,this.GD],0);},UpdateTestTime:function(BH
){if(BH!==this.Dz){this.Dz=BH;B.t4([this,this.Gx,this.GD],0);}},Gh:function(Ik){
if(Ik)B.uF("%s",A0);else B.uF("%s",B8);return;},Gi:function(Ik){if(Ik)B.uF("%s",
BW);else B.uF("%s",D3);return;},GF:function(D){if(this.DB===D)return;this.DB=D;{
}B.t4([this,this.Gy,this.GF],0);},UpdateWaitTime:function(BH){if(BH!==this.DB){this.
DB=BH;B.t4([this,this.Gy,this.GF],0);}},LK:function(){return false;},Hv:function(
D){if(this.Error===D)return;this.Error=D;{}B.t4([this,this.Ht,this.Hv],0);},UpdateError:
function(BH){if(BH!==this.Error){this.Error=BH;B.t4([this,this.Ht,this.Hv],0);}}
,I4:function(D){if(this.Fp===D)return;this.Fp=D;{}B.t4([this,this.I1,this.I4],0);
},UpdateACstatus:function(BH){if(BH!==this.Fp){this.Fp=BH;B.t4([this,this.I1,this.
I4],0);}},Ma:function(N9,N_){return false;},Ly:function(Ik,M1){B.uF("%s",E3+M1.toFixed(
));return 0;},L$:function(N$){return 0;},Ky:function(D){if(this.FN===D)return;this.
FN=D;{}B.t4([this,this.Ku,this.Ky],0);},UpdateProperty:function(BH){if(BH!==this.
FN){this.FN=BH;B.t4([this,this.Ku,this.Ky],0);}},Kx:function(D){if(this.GN===D)return;
this.GN=D;{}B.t4([this,this.Kt,this.Kx],0);},UpdateProperty1:function(BH){if(BH!==
this.GN){this.GN=BH;B.t4([this,this.Kt,this.Kx],0);}},Gw:function(){return this.
Dt;},Gx:function(){return this.Dz;},Gy:function(){return this.DB;},Ht:function(){
return this.Error;},I1:function(){return this.Fp;},Ku:function(){return this.FN;
},Kt:function(){return this.GN;},_Init:function(aArg){B.uV.ES._Init.call(this,aArg
);this.__proto__=C.ES;},_className:"Application::DeviceClass"};C.Device={_Init:function(
){C.ES._Init.call(this,0);},_variants:function(){return this;},_this:null};C.CZ={
HY:null,Ja:function(D){if(this.HY===D)return;if(!D)this.Ke(this.HY,null,null,null
,null,null,false);this.HY=D;if(!!D)this.KC(D,null,null,null,null,null,null,null,
null,null,false);},_Init:function(aArg){B.Core.O._Init.call(this,aArg);this.__proto__=
C.CZ;this.S(AA);},_Mark:function(E){var A;B.Core.O._Mark.call(this,E);if((A=this.
HY)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Application::Container"};C.
Home={Device:null,Aw:null,Be:null,Em:null,AC:null,Du:null,DA:null,BV:null,En:null
,CF:null,CJ:null,X:null,Dy:null,W:null,Af:null,Ct:null,Cw:null,Eo:null,DC:null,Br:
null,Cx:null,Text:null,C_:null,C$:null,Fv:null,CL:null,Fq:null,FF:null,FG:null,FE:
null,Es:null,Et:null,D0:null,FH:0,FA:0,FJ:0,DZ:0,Bz:function(aArg){var A;this.Bp(
this.BV);this.GA(B._GetAutoObject(C.Device).Dt);this.GC(B._GetAutoObject(C.Device
).Dz);this.GE(B._GetAutoObject(C.Device).DB);B.sN([this,this.J3],[A=B._GetAutoObject(
C.Device),A.Gw,A.GB],0);B.sN([this,this.J3],[A=B._GetAutoObject(C.Device),A.Gx,A.
GD],0);B.sN([this,this.J3],[A=B._GetAutoObject(C.Device),A.Gy,A.GF],0);},MT:function(
Ak){if((this.Af.AF===4)||(this.Af.AF===5)){if(this.BG===this.BV)this.Bp(this.Dy);
else this.Bp(this.BV);}},L3:function(Ak){this.KA(B._NewObject(B.uU.HZ,0),null,null
,null,null,null,null,null,null,false);},L4:function(Ak){switch(this.DZ){case 0:{
B._GetAutoObject(C.Device).Gi(false);this.Et.AN(true);}break;case 1:{this.Ct.AN(
false);this.GA(0);this.K_(this);}break;case 2:{this.Cx.AN(false);this.GE(0);this.
Lb(this);}break;case 3:{this.Cw.AN(false);this.GC(0);this.K$(this);}break;default:;
}},K_:function(Ak){if(this.D0.Bo===true)return;if(B._GetAutoObject(C.Device).L$(
B._GetAutoObject(C.Device).FN)===-1){B._GetAutoObject(C.Device).UpdateError(2);B.
_GetAutoObject(C.Device).Gh(false);B._GetAutoObject(C.Device).Gi(false);this.Dv(
0);return;}B._GetAutoObject(C.Device).Gh(false);this.D0.AN(true);},K$:function(Ak
){B._GetAutoObject(C.Device).Gh(false);B._GetAutoObject(C.Device).Gi(false);this.
Es.AN(true);},GC:function(D){if(this.FH===D)return;this.FH=D;this.DA.Bq((((B.t1((
this.FH/3600)|0,2,0)+Ch)+B.t1(((this.FH%3600)/60)|0,2,0))+Ch)+B.t1(this.FH%60,2,
0));},GA:function(D){if(this.FA===D)return;this.FA=D;this.Du.Bq((((B.t1((this.FA
/3600)|0,2,0)+Ch)+B.t1(((this.FA%3600)/60)|0,2,0))+Ch)+B.t1(this.FA%60,2,0));},Lb:
function(Ak){if(B._GetAutoObject(C.Device).LK()){B._GetAutoObject(C.Device).UpdateError(
3);B._GetAutoObject(C.Device).Gh(false);B._GetAutoObject(C.Device).Gi(false);this.
Dv(0);return;}B._GetAutoObject(C.Device).Gi(true);this.Dv(3);},GE:function(D){if(
this.FJ===D)return;this.FJ=D;this.DC.Bq((((B.t1((this.FJ/3600)|0,2,0)+Ch)+B.t1(((
this.FJ%3600)/60)|0,2,0))+Ch)+B.t1(this.FJ%60,2,0));},J3:function(Ak){if(!this.DZ
){this.GA(B._GetAutoObject(C.Device).Dt);this.GC(B._GetAutoObject(C.Device).Dz);
this.GE(B._GetAutoObject(C.Device).DB);}},ME:function(Ak){if(!B._GetAutoObject(C.
Device).Error){this.CL.Ja(null);this.Bp(this.BV);}else{this.CL.Ja(B._NewObject(B.
uU.CL,0));this.Bp(this.CL);}},MB:function(Ak){if(B._GetAutoObject(C.Device).Fp){
this.C_.An(B.uR.Green);this.C$.Bq(E4);}else{this.C_.An(B.uR.Red);this.C$.Bq(Ey);
}},MP:function(Ak){switch(this.DZ){case 0:{this.CF.An(B.uR.Red);this.Br.An(B.uR.
Red);this.CJ.An(B.uR.Red);}break;case 1:{this.CF.An(B.uR.Green);this.Br.An(B.uR.
Red);this.CJ.An(B.uR.Red);}break;case 2:{this.CF.An(B.uR.Red);this.Br.An(B.uR.Green
);this.CJ.An(B.uR.Red);}break;case 3:{this.CF.An(B.uR.Red);this.Br.An(B.uR.Red);
this.CJ.An(B.uR.Green);}break;default:;}},Dv:function(D){if(this.DZ===D)return;this.
DZ=D;B.t4([this,this.Hu,this.Dv],0);},MQ:function(Ak){switch(this.DZ){case 0:{this.
Cw.AN(false);this.Cx.AN(false);this.Ct.AN(false);this.GA(B._GetAutoObject(C.Device
).Dt);this.GC(B._GetAutoObject(C.Device).Dz);this.GE(B._GetAutoObject(C.Device).
DB);}break;case 1:{this.Ct.GM=B._GetAutoObject(C.Device).Dt;this.Ct.E2=0;this.Ct.
I6(B._GetAutoObject(C.Device).Dt*1000);this.Ct.AN(true);}break;case 2:{this.Cx.GM=
B._GetAutoObject(C.Device).DB;this.Cx.E2=0;this.Cx.I6(B._GetAutoObject(C.Device).
DB*1000);this.Cx.AN(true);}break;case 3:{this.Cw.GM=B._GetAutoObject(C.Device).Dz;
this.Cw.E2=0;this.Cw.I6(B._GetAutoObject(C.Device).Dz*1000);this.Cw.AN(true);}break;
default:;}},MR:function(Ak){switch(this.DZ){case 0:this.BV.DW(E5);break;case 1:this.
BV.DW(FO);break;case 2:this.BV.DW(FO);break;case 3:this.BV.DW(GO);break;default:;
}},MS:function(Ak){this.Dv(0);this.Es.AN(false);B._GetAutoObject(C.Device).Ly(true
,500);},MO:function(Ak){B._GetAutoObject(C.Device).Gh(true);this.Dv(1);this.Et.AN(
false);},MU:function(Ak){this.Dv(2);this.D0.AN(false);},Hu:function(){return this.
DZ;},LN:function(){return this.FH;},LM:function(){return this.FA;},LO:function(){
return this.FJ;},_Init:function(aArg){B.Core.O._Init.call(this,aArg);B.uO.Aw._Init.
call(this.Aw={L:this},0);B.uO.Be._Init.call(this.Be={L:this},0);B.uO.Be._Init.call(
this.Em={L:this},0);B.uO.Text._Init.call(this.AC={L:this},0);B.uO.Text._Init.call(
this.Du={L:this},0);B.uO.Text._Init.call(this.DA={L:this},0);B.uQ.E0._Init.call(
this.BV={L:this},0);B.uO.Be._Init.call(this.En={L:this},0);B.uO.Be._Init.call(this.
CF={L:this},0);B.uO.Be._Init.call(this.CJ={L:this},0);B.uQ.FD._Init.call(this.X={
L:this},0);B.uQ.E0._Init.call(this.Dy={L:this},0);B.uQ.FD._Init.call(this.W={L:this
},0);B.Core.DS._Init.call(this.Af={L:this},0);B.uT.Gq._Init.call(this.Ct={L:this
},0);B.uT.Gq._Init.call(this.Cw={L:this},0);B.uO.Be._Init.call(this.Eo={L:this},
0);B.uO.Text._Init.call(this.DC={L:this},0);B.uO.Be._Init.call(this.Br={L:this},
0);B.uT.Gq._Init.call(this.Cx={L:this},0);B.uO.Text._Init.call(this.Text={L:this
},0);B.uO.Be._Init.call(this.C_={L:this},0);B.uO.Text._Init.call(this.C$={L:this
},0);B.Core.EZ._Init.call(this.Fv={L:this},0);C.CZ._Init.call(this.CL={L:this},0
);B.Core.EZ._Init.call(this.Fq={L:this},0);B.Core.EZ._Init.call(this.FF={L:this}
,0);B.Core.EZ._Init.call(this.FG={L:this},0);B.Core.EZ._Init.call(this.FE={L:this
},0);B.Core.Timer._Init.call(this.Es={L:this},0);B.Core.Timer._Init.call(this.Et={
L:this},0);B.Core.Timer._Init.call(this.D0={L:this},0);this.__proto__=C.Home;var
A;this.S(AA);this.Aw.S(AA);this.Aw.An(0xFFD1E0DF);this.Be.S(GP);this.Be.Cu(0x92);
this.Em.S(GQ);this.Em.Cu(0x92);this.AC.S(E6);this.AC.Bq(GR);this.AC.An(0xFF000000
);this.Du.S(GS);this.Du.Bq(E7);this.Du.An(0xFF000000);this.DA.S(GT);this.DA.Bq(E7
);this.DA.An(0xFF000000);this.BV.S(GU);this.BV.DW(E5);this.En.S(FP);this.En.Cu(0x92
);this.CF.S(GV);this.CF.An(B.uR.Red);this.CF.Cu(0x92);this.CJ.S(Jl);this.CJ.An(B.
uR.Red);this.CJ.Cu(0x92);this.X.HK(131);this.X.HL(0xFFFFFFFF);this.X.HO(0xFF04D101
);this.X.HN(0xFFABABA8);this.X.HM(0xFF706E6C);this.X.HQ(6);this.X.HT(6);this.X.HS(
6);this.X.HR(6);this.X.HJ(0xAAABABA8);this.X.HI(0xFF706E6C);this.X.HE(6);this.X.
HH(6);this.X.HG(6);this.X.HF(6);this.X.HA(3);this.X.HD(2);this.X.HC(0);this.X.HB(
1);this.X.HU(Jm);this.Dy.S(Jn);this.Dy.DW(Jo);this.W.HK(131);this.W.HL(0xFFFFFFFF
);this.W.HO(0xFF04D101);this.W.HN(0xFFABABA8);this.W.HM(0xFF706E6C);this.W.HQ(4);
this.W.HT(4);this.W.HS(4);this.W.HR(4);this.W.HJ(0xAAABABA8);this.W.HI(0xFF706E6C
);this.W.HE(4);this.W.HH(4);this.W.HG(4);this.W.HF(4);this.W.HA(3);this.W.HD(2);
this.W.HC(0);this.W.HB(1);this.W.HU(Jp);this.Ct.I8(1);this.Ct.E2=0;this.Cw.I8(1);
this.Cw.E2=0;this.Eo.S(Jq);this.Eo.Cu(0x92);this.DC.S(Jr);this.DC.Bq(E7);this.DC.
An(0xFF000000);this.Br.S(Js);this.Br.An(B.uR.Red);this.Br.Cu(0x92);this.Cx.I8(1);
this.Cx.E2=0;this.Text.S(H2);this.Text.Bq(Jt);this.Text.An(0xFF000000);this.C_.S(
Ju);this.C_.An(B.uR.Red);this.C_.Cu(0x92);this.C$.S(Jv);this.C$.Bq(Ey);this.C$.An(
0xFF000000);this.CL.S(AA);this.Es.FC(500);this.Et.FC(200);this.D0.FC(200);this.Ai(
this.Aw,0);this.Ai(this.Be,0);this.Ai(this.Em,0);this.Ai(this.AC,0);this.Ai(this.
Du,0);this.Ai(this.DA,0);this.Ai(this.BV,0);this.Ai(this.En,0);this.Ai(this.CF,0
);this.Ai(this.CJ,0);this.Ai(this.Dy,0);this.Ai(this.Eo,0);this.Ai(this.DC,0);this.
Ai(this.Br,0);this.Ai(this.Text,0);this.Ai(this.C_,0);this.Ai(this.C$,0);this.Ai(
this.CL,0);this.Be.Cg(B.tv(B.uS.JU));this.Em.Cg(B.tv(B.uS.JV));this.AC.CG(B.tv(B.
uP.Ek));this.Du.CG(B.tv(C.Fw));this.DA.CG(B.tv(C.Fw));this.BV.DU=[this,this.L4];
this.BV.Gz(this.X);this.En.Cg(B.tv(B.uS.JS));this.CF.Cg(B.tv(B.uS.EB));this.CJ.Cg(
B.tv(B.uS.EB));this.X.HP(B.tv(B.uP.Ek));this.X.Hw(B.tv(B.uQ.Dw));this.X.Hz(B.tv(
B.uQ.Dw));this.X.Hy(B.tv(B.uQ.Dw));this.X.Hx(B.tv(B.uQ.Dw));this.Dy.DU=[this,this.
L3];this.Dy.Gz(this.W);this.W.HP(B.tv(B.uP.Dd));this.W.Hw(B.tv(B.uQ.Dx));this.W.
Hz(B.tv(B.uQ.Dx));this.W.Hy(B.tv(B.uQ.Dx));this.W.Hx(B.tv(B.uQ.Dx));this.Af.Dh=[
this,this.MT];this.Ct.Gv=[this,this.K_];this.Ct.Cv=[this,this.LM,this.GA];this.Cw.
Gv=[this,this.K$];this.Cw.Cv=[this,this.LN,this.GC];this.Eo.Cg(B.tv(B.uS.Hp));this.
DC.CG(B.tv(C.Fw));this.Br.Cg(B.tv(B.uS.EB));this.Cx.Gv=[this,this.Lb];this.Cx.Cv=[
this,this.LO,this.GE];this.Device=B._GetAutoObject(C.Device);this.Text.CG(B.tv(C.
Dd));this.C_.Cg(B.tv(B.uS.EB));this.C$.CG(B.tv(C.Dd));this.Fv.Eq=[this,this.ME];
this.Fv.Er([A=B._GetAutoObject(C.Device),A.Ht,A.Hv]);this.Fq.Eq=[this,this.MB];this.
Fq.Er([A=B._GetAutoObject(C.Device),A.I1,A.I4]);this.FF.Eq=[this,this.MP];this.FF.
Er([this,this.Hu,this.Dv]);this.FG.Eq=[this,this.MQ];this.FG.Er([this,this.Hu,this.
Dv]);this.FE.Eq=[this,this.MR];this.FE.Er([this,this.Hu,this.Dv]);this.Es.EY=[this
,this.MS];this.Et.EY=[this,this.MO];this.D0.EY=[this,this.MU];this.Bz(aArg);},_Done:
function(){this.__proto__=B.Core.O;this.Aw._Done();this.Be._Done();this.Em._Done(
);this.AC._Done();this.Du._Done();this.DA._Done();this.BV._Done();this.En._Done(
);this.CF._Done();this.CJ._Done();this.X._Done();this.Dy._Done();this.W._Done();
this.Af._Done();this.Ct._Done();this.Cw._Done();this.Eo._Done();this.DC._Done();
this.Br._Done();this.Cx._Done();this.Text._Done();this.C_._Done();this.C$._Done(
);this.Fv._Done();this.CL._Done();this.Fq._Done();this.FF._Done();this.FG._Done(
);this.FE._Done();this.Es._Done();this.Et._Done();this.D0._Done();B.Core.O._Done.
call(this);},_ReInit:function(){B.Core.O._ReInit.call(this);this.Aw._ReInit();this.
Be._ReInit();this.Em._ReInit();this.AC._ReInit();this.Du._ReInit();this.DA._ReInit(
);this.BV._ReInit();this.En._ReInit();this.CF._ReInit();this.CJ._ReInit();this.X.
_ReInit();this.Dy._ReInit();this.W._ReInit();this.Af._ReInit();this.Ct._ReInit();
this.Cw._ReInit();this.Eo._ReInit();this.DC._ReInit();this.Br._ReInit();this.Cx.
_ReInit();this.Text._ReInit();this.C_._ReInit();this.C$._ReInit();this.Fv._ReInit(
);this.CL._ReInit();this.Fq._ReInit();this.FF._ReInit();this.FG._ReInit();this.FE.
_ReInit();this.Es._ReInit();this.Et._ReInit();this.D0._ReInit();},_Mark:function(
E){var A;B.Core.O._Mark.call(this,E);if((A=this.Device)&&(A._cycle!=E))A._Mark(A.
_cycle=E);if((A=this.Aw)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Be)._cycle!=E)
A._Mark(A._cycle=E);if((A=this.Em)._cycle!=E)A._Mark(A._cycle=E);if((A=this.AC).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.Du)._cycle!=E)A._Mark(A._cycle=E);if((A=
this.DA)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BV)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.En)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CF)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.CJ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.X)._cycle!=E
)A._Mark(A._cycle=E);if((A=this.Dy)._cycle!=E)A._Mark(A._cycle=E);if((A=this.W).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.Af)._cycle!=E)A._Mark(A._cycle=E);if((A=
this.Ct)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cw)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Eo)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DC)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Br)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cx)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Text)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
C_)._cycle!=E)A._Mark(A._cycle=E);if((A=this.C$)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Fv)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CL)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Fq)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FF)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.FG)._cycle!=E)A._Mark(A._cycle=E);if((A=this.FE)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Es)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Et
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D0)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Application::Home"};
C._Init=function(){C.Iy.__proto__=B.Core.Root;C.ES.__proto__=B.uV.ES;C.CZ.__proto__=
B.Core.O;C.Home.__proto__=B.Core.O;};C._ReInit=function(){var A;if((A=C.Device._this
))A._ReInit();};C.Bs=function(E){var A;if((A=C.Fw[0]._this)&&(A._cycle!=E))A._Done(
C.Fw[0]._this=null);if((A=C.Dd[0]._this)&&(A._cycle!=E))A._Done(C.Dd[0]._this=null
);if((A=C.Device._this)&&(A._cycle!=E))A._Done(C.Device._this=null);};return C;}
)();

/* Embedded Wizard */