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
);if(EmWiApp.abl)throw new Error("The unit file 'WidgetSet.js' included twice!");
EmWiApp.abl=(function(){var B=EmWiApp;var C={};
var AD=[0,0,150,50];var A0=[0,50];var AT=[150,50];var DG=[150,0];var DV=[0,0];
C.CC={GK:null,GC:null,GF:null,GE:null,GD:null,IM:0xFFFFFFFF,Mf:function(E){if(this.
GK===E)return;this.GK=E;B.ow([this,this.Gq],this);},Mb:function(E){if(this.IM===
E)return;this.IM=E;B.ow([this,this.Gq],this);},L9:function(E){if(this.GC===E)return;
this.GC=E;B.ow([this,this.Gq],this);},Ma:function(E){if(this.GF===E)return;this.
GF=E;B.ow([this,this.Gq],this);},L$:function(E){if(this.GE===E)return;this.GE=E;
B.ow([this,this.Gq],this);},L_:function(E){if(this.GD===E)return;this.GD=E;B.ow([
this,this.Gq],this);},_Init:function(aArg){C.H7._Init.call(this,aArg);this.__proto__=
C.CC;},_Mark:function(D){var A;C.H7._Mark.call(this,D);if((A=this.GK)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.GC)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.GF)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.GE)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.GD)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"WidgetSet::PushButtonConfig"
};C.H7={Gq:function(An){B.vv(this,0);},_Init:function(aArg){this.__proto__=C.H7;
B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);},Q:null,_cycle:
0,_observers:null,_className:"WidgetSet::WidgetConfig"};C.C2={Co:null,CY:null,BJ:
null,EU:null,CB:null,BB:null,BC:null,HP:B.jm,J$:0,Z:function(E){var A;if(!!this.
BJ){var K9=[E[2]-E[0],E[3]-E[1]];var EM=K9;if(EM[0]<0)EM=[0,EM[1]];if(EM[1]<0)EM=[
EM[0],0];var CH=B.aaj(EM,K9);if(!!CH[0]){var Ce=((this.DB&0x4)===0x4);var Cf=((this.
DB&0x8)===0x8);if(Ce&&!Cf)E=B.aaQ(E,E[2]+CH[0]);else if(!Ce&&Cf)E=[].concat(E[0]-
CH[0],E.slice(1,4));else{E=[].concat(E[0]-((CH[0]/2)|0),E.slice(1,4));E=B.aaQ(E,
E[0]+EM[0]);}}if(!!CH[1]){var Cg=((this.DB&0x10)===0x10);var Cd=((this.DB&0x20)===
0x20);if(Cg&&!Cd)E=[].concat(E.slice(0,3),E[3]+CH[1]);else if(!Cg&&Cd)E=B.aaS(E,
E[1]-CH[1]);else{E=B.aaS(E,E[1]-((CH[1]/2)|0));E=[].concat(E.slice(0,3),E[1]+EM[
1]);}}}B.Core.K.Z.call(this,E);},H4:function(Ha){var A;B.Core.K.H4.call(this,Ha);
var Lk=!!this.BJ&&(((!!this.BJ.GD||!!this.BJ.GE)||!!this.BJ.GF)||!!this.BJ.GC);var
Ll=(!!this.BJ&&(this.HP!==B.jm))&&!!this.BJ.GK;var Ke=false;var T=[0,0,(A=this.M
)[2]-A[0],A[3]-A[1]];if(Lk&&!this.CY){this.CY=B._NewObject(B.abg.B2,0);this.At(this.
CY,0);Ke=true;}else if(!Lk&&!!this.CY){this.HY(this.CY);this.CY=null;}if(Ll&&!this.
Co){this.Co=B._NewObject(B.abg.Text,0);this.At(this.Co,0);Ke=true;this.Co.L8(true
);}else if(!Ll&&!!this.Co){this.HY(this.Co);this.Co=null;}if(Ke){if(!!this.CY)this.
HZ(this.CY);if(!!this.Co)this.HZ(this.Co);}var Nv=((Ha&0x10)===0x10);var Nw=((Ha&
0x40)===0x40);var Nx=((this.BC.Down&&this.BC.DR)||this.BB.Down)||this.CB.BH;if(!
!this.CY){var bitmap;var HB;var Ax=T;if(!Nv){bitmap=this.BJ.GE;HB=0xFFFFFFFF;}else
if(Nx){bitmap=this.BJ.GC;HB=this.BJ.IM;}else if(Nw){bitmap=this.BJ.GF;HB=0xFFFFFFFF;
}else{bitmap=this.BJ.GD;HB=0xFFFFFFFF;}this.CY.FU(true);this.CY.Ao(HB);this.CY.Mc(
0);this.CY.C1(bitmap);this.CY.Z(Ax);}if(!!this.Co){this.Co.Z([T[0],T[1],T[2],T[3
]]);this.Co.GN(0x12);this.Co.Mq(true);this.Co.L7(true);this.Co.Ed(this.BJ.GK);this.
Co.Bk(this.HP);this.Co.Ao(0xFF000000);}},J9:function(An){var Lm=this.BB.Eu;this.
BB.Eu=149;if(!Lm&&!!this.BB.Eu)this.AR(0x4,0x0);if(!!Lm&&!this.BB.Eu)this.AR(0x0
,0x4);if(!!this.BJ)this.Z(this.M);this.Dc();},NI:function(An){this.Dc();B.ow(this.
EU,this);},NQ:function(An){var FG=0;if(!!this.BJ)FG=50;this.BC.BK(true);this.Dc(
);if(((this.BB.Ap-this.J$)|0)>=FG)B.ow(this.EU,this);else{this.CB.I5(FG-((this.BB.
Ap-this.J$)|0));this.CB.BK(true);}},NO:function(An){this.BC.BK(false);this.Dc();
if(this.CB.BH){B.ow(this.EU,this);this.CB.BK(false);}this.J$=this.BB.Ap;},NL:function(
An){this.Dc();},NH:function(An){this.Dc();},NR:function(An){var FG=0;if(!!this.BJ
)FG=50;this.BB.BH=true;if(!this.BC.DR)return;if(this.BC.BG)return;if(this.BC.Bp>=
FG)B.ow(this.EU,this);else{this.CB.I5(FG-this.BC.Bp);this.CB.BK(true);}},NP:function(
An){this.BB.BH=false;if(this.CB.BH){B.ow(this.EU,this);this.CB.BK(false);}},KQ:function(
E){if(this.HP===E)return;this.HP=E;this.Dc();},KK:function(E){if(this.BJ===E)return;
if(!!this.BJ)B.zl([this,this.J9],this.BJ,0);this.BJ=E;if(!!E)B.y_([this,this.J9]
,E,0);B.ow([this,this.J9],this);},_Init:function(aArg){B.Core.K._Init.call(this,
aArg);B.Core.Timer._Init.call(this.CB={Q:this},0);B.Core.ET._Init.call(this.BB={
Q:this},0);B.Core.AS._Init.call(this.BC={Q:this},0);this.__proto__=C.C2;this.Z(AD
);this.CB.GO(0);this.CB.I5(50);this.BB.Eu=149;this.BC.I7(0x3F);this.BC.Fl(A0);this.
BC.Fk(AT);this.BC.Fj(DG);this.BC.Fi(DV);this.BC.Mk(16);this.BC.Mg(100);this.At(this.
BC,0);this.CB.Fn=[this,this.NI];this.BB.DU=[this,this.NQ];this.BB.Ec=[this,this.
NO];this.BC.I2=[this,this.NL];this.BC.IY=[this,this.NH];this.BC.DU=[this,this.NR
];this.BC.Ec=[this,this.NP];},_Done:function(){this.__proto__=B.Core.K;this.CB._Done(
);this.BB._Done();this.BC._Done();B.Core.K._Done.call(this);},_ReInit:function(){
B.Core.K._ReInit.call(this);this.CB._ReInit();this.BB._ReInit();this.BC._ReInit(
);},_Mark:function(D){var A;B.Core.K._Mark.call(this,D);if((A=this.Co)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.CY)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.BJ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.EU)&&((A=A[0])._cycle!=D)
)A._Mark(A._cycle=D);if((A=this.CB)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BB).
_cycle!=D)A._Mark(A._cycle=D);if((A=this.BC)._cycle!=D)A._Mark(A._cycle=D);},_className:
"WidgetSet::PushButton"};
C._Init=function(){C.CC.__proto__=C.H7;C.C2.__proto__=B.Core.K;};C._ReInit=function(
){};C.Bs=function(D){};return C;})();

/* Embedded Wizard */