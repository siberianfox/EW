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
* Profile  : Profile
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.abl)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
abl=(function(){var B=EmWiApp;var C={};
var A6="Trying to remove a fader from a task, which is actually running";var A2="The fader doesn\'t belong to this task";
var Dm="Trying to add a fader to a task, which is actually running";var Dn="The fader belongs already to a task";
C.Lv={timer:null,Hz:null,OY:0,Iw:0,KY:0.001,Ed:0,AX:0,A_:0,Di:0,DT:1000,A8:false,
CU:function(N){var A;if(!this.timer)return;if(!this.Iw){this.Iw=1;this.OY=this.Iw;
this.A_=this.timer.Ax;this.AX=0;this.Ed=-1;}var Cs;if((this.Iw>0)&&(this.OY>0))Cs=
this.WF();else if((this.Iw<0)&&(this.OY<0))Cs=this.WI();else if(this.Iw>0)Cs=this.
WG();else Cs=this.WH();if(Cs){this.Av(false);(A=this.Hz)?A[1].call(A[0],this):null;
}},MS:function(Vz){this.PE(Vz);},WI:function(){var Af=(this.timer.Ax-this.A_)|0;
if(Af<0)Af=-Af;var Dv=this.DT;var Br=this.DT;var Cs=false;var Bo=this.Ed;if(!this.
AX&&(Af>=Dv)){this.AX=1;Af=Af-Dv;this.A_=this.A_+Dv;}if((this.AX>0)&&(Af>=Br)){var
BH=(Af/Br)|0;this.AX=this.AX+BH;Af=Af-(BH*Br);this.A_=this.A_+(BH*Br);}if((this.
AX>2)&&!this.Di)this.AX=1;if((this.AX>=this.Di)&&(this.Di>0)){Cs=true;Bo=0;}else
if(Af>=0)Bo=1-(Af*this.KY);else if(Bo>=0)Bo=0;if(Bo!==this.Ed){this.Ed=Bo;this.MS(
Bo);}return Cs;},WH:function(){var Af=(this.A_-this.timer.Ax)|0;var Dv=this.DT;var
Br=this.DT;var Cs=false;var Bo=this.Ed;if((this.AX>1)&&(Af<0)){var BH=(((-Af+Br)-
1)/Br)|0;if((this.AX-BH)<=0)BH=this.AX-1;this.AX=this.AX-BH;Af=Af+(BH*Br);this.A_=
this.A_+(BH*Br);}if(((this.AX===1)&&(Af<0))&&(this.Di>0)){this.AX=0;Af=Af+Dv;this.
A_=this.A_+Dv;}if(((this.AX===1)&&(Af<0))&&!this.Di){var BH=(((-Af+Br)-1)/Br)|0;
Af=Af+(BH*Br);this.A_=this.A_+(BH*Br);}if(Af<0){Cs=true;Bo=1;}else if(Af>=0)Bo=1-(
Af*this.KY);else if(Bo>=0)Bo=1;if(Bo!==this.Ed){this.Ed=Bo;this.MS(Bo);}return Cs;
},WG:function(){var Af=(this.A_-this.timer.Ax)|0;var Dv=this.DT;var Br=this.DT;var
Cs=false;var Bo=this.Ed;if((this.AX>1)&&(Af<0)){var BH=(((-Af+Br)-1)/Br)|0;if((this.
AX-BH)<=0)BH=this.AX-1;this.AX=this.AX-BH;Af=Af+(BH*Br);this.A_=this.A_+(BH*Br);
}if(((this.AX===1)&&(Af<0))&&(this.Di>0)){this.AX=0;Af=Af+Dv;this.A_=this.A_+Dv;
}if(((this.AX===1)&&(Af<0))&&!this.Di){var BH=(((-Af+Br)-1)/Br)|0;Af=Af+(BH*Br);
this.A_=this.A_+(BH*Br);}if(Af<0){Cs=true;Bo=0;}else if(Af>=0)Bo=Af*this.KY;else
if(Bo>=0)Bo=0;if(Bo!==this.Ed){this.Ed=Bo;this.MS(Bo);}return Cs;},WF:function(){
var Af=(this.timer.Ax-this.A_)|0;if(Af<0)Af=-Af;var Dv=this.DT;var Br=this.DT;var
Cs=false;var Bo=this.Ed;if(!this.AX&&(Af>=Dv)){this.AX=1;Af=Af-Dv;this.A_=this.A_+
Dv;}if((this.AX>0)&&(Af>=Br)){var BH=(Af/Br)|0;this.AX=this.AX+BH;Af=Af-(BH*Br);
this.A_=this.A_+(BH*Br);}if((this.AX>2)&&!this.Di)this.AX=1;if((this.AX>=this.Di
)&&(this.Di>0)){Cs=true;Bo=1;}else if(Af>=0)Bo=Af*this.KY;else if(Bo>=0)Bo=1;if(
Bo!==this.Ed){this.Ed=Bo;this.MS(Bo);}return Cs;},Oa:function(E){if(E<0)E=0;this.
Di=E;},LP:function(E){if(E<15)E=15;this.DT=E;this.KY=1/E;},Av:function(E){if(this.
A8===E)return;this.A8=E;if(!E&&!!this.timer){B.zl([this,this.CU],this.timer,0);this.
timer=null;}if(E){this.timer=B._GetAutoObject(C.GO);B.y_([this,this.CU],this.timer
,0);this.Iw=0;B.ow([this,this.CU],this);}},PE:function(QR){},_Init:function(aArg
){this.__proto__=C.Lv;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Hz)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.H)&&(
A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.DI={CN:null,I6:0,Ky:255,PE:function(QR){var Au;this.I6=Math.round(this.Ky*QR
)|0;if(!!this.CN)(Au=this.CN,Au[2].call(Au[0],this.I6));},_Init:function(aArg){C.
Lv._Init.call(this,aArg);this.__proto__=C.DI;},_Mark:function(D){var A;C.Lv._Mark.
call(this,D);if((A=this.CN)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Effects::Int32Effect"};C.Dy={timer:null,Hz:null,CN:null,AX:0,A_:0,Di:0,DT:1000,
Nr:1000,A8:false,Qx:false,Ky:true,CU:function(N){var A;var Au;if(!this.timer)return;
if(this.AX<0){this.A_=this.timer.Ax;this.AX=0;}var Af=(this.timer.Ax-this.A_)|0;
var Dv=this.DT;var Br=this.Nr+this.DT;var OW=0;var EA=this.AX;if(!EA&&(Af>=Dv)){
EA=1;Af=Af-Dv;}if((EA>0)&&(Af>=Br)){var BH=(Af/Br)|0;Af=Af-(BH*Br);EA=EA+BH;}if((
EA>2)&&!this.Di)EA=1;if(EA!==this.AX){this.A_=this.timer.Ax-(((A=Af)<0)?A+0x100000000:
A);this.AX=EA;}if(EA>0)OW=this.Nr;var Cs=(EA>=this.Di)&&(this.Di>0);if(!!this.CN
){if(!Cs&&(Af>=OW))(Au=this.CN,Au[2].call(Au[0],this.Qx));if(Cs||((Af<OW)&&(EA>0
)))(Au=this.CN,Au[2].call(Au[0],this.Ky));}if(Cs){this.Av(false);(A=this.Hz)?A[1
].call(A[0],this):null;}},Oa:function(E){if(E<0)E=0;this.Di=E;},LP:function(E){if(
E<100)E=100;this.DT=E;},S2:function(E){if(E<0)E=0;this.Nr=E;},Av:function(E){if(
this.A8===E)return;this.A8=E;if(!E&&!!this.timer){B.zl([this,this.CU],this.timer
,0);this.timer=null;}if(E){this.timer=B._GetAutoObject(C.GO);B.y_([this,this.CU]
,this.timer,0);this.AX=-1;}},Tv:function(N){this.Av(false);},Qq:function(N){if(this.
A8)this.Av(false);this.Av(true);},_Init:function(aArg){this.__proto__=C.Dy;B.hJ++;
},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Hz)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CN)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:
null,_className:"Effects::BoolEffect"};C.Nn={C0:null,An:null,Ac:null,I:null,P:null
,MH:null,Pf:null,N7:null,Ev:true,A8:true,Qw:true,PD:false,PF:true,Om:true,Ol:true
,GH:function(){if(!!this.C0)this.C0.GH();},P2:function(){return true;},P9:function(
){},IY:function(){this.GH();},_Init:function(aArg){this.__proto__=C.Nn;B.hJ++;},
_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.C0)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.An)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.P)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.MH)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Pf)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.N7)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null
,_cycle:0,_observers:null,_className:"Effects::Fader"};C.I7={Qn:B.vw,QZ:false,P2:
function(){return this.QZ;},P9:function(){if(!this.Ev&&!!this.P.I)this.P.AQ(false
);if((!this.Ev&&this.Ol)&&!!this.P.I)this.P.I.GW(this.P);if(!this.A8)this.P.Av(false
);},IY:function(){if(this.A8)this.P.Av(true);if((this.Ev||this.PD)&&!this.P.I){this.
P.AQ(false);this.I.M(this.P,0);}if(this.Ev&&this.Om)this.P.I.Ks(this.P);if(this.
Ev&&this.PF)this.P.I.CX(this.P);if(this.Ev&&!this.Qw)this.P.K(B.aaM(this.P.R,this.
Qn));if(this.Ev){this.P.Kc(255);this.P.AQ(true);}if(!this.Ev&&(this.I.C4===this.
P))this.I.CX(null);this.QZ=true;this.GH();},_Init:function(aArg){C.Nn._Init.call(
this,aArg);this.__proto__=C.I7;},_className:"Effects::VisibilityFader"};C.L1={GK:
function(){return null;},GJ:function(){return null;},Lu:function(){return this.GK(
);},Lt:function(){return this.GJ();},_Init:function(aArg){this.__proto__=C.L1;B.
hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:
0,_observers:null,_className:"Effects::Transition"};C.Op={GK:function(){var Ap=B.
_NewObject(C.I7,0);Ap.Ev=true;Ap.A8=true;Ap.PF=false;Ap.Om=true;Ap.Qw=false;Ap.N7=[
this,this.Wi];return Ap;},GJ:function(){var Ap=B._NewObject(C.I7,0);Ap.Ev=false;
Ap.A8=false;Ap.Ol=true;return Ap;},Lu:function(){var Ap=C.L1.Lu.call(this);Ap.Om=
false;Ap.A8=true;return Ap;},Lt:function(){var Ap=B._NewObject(C.I7,0);Ap.Ev=false;
Ap.A8=true;Ap.PD=true;Ap.Ol=false;return Ap;},Wi:function(N){var A;var Ap=(C.I7.
isPrototypeOf(N)?N:null);var Aj=[0,0,(A=Ap.I.R)[2]-A[0],A[3]-A[1]];var Cd=[(A=Ap.
P.R)[2]-A[0],A[3]-A[1]];var pos=Aj.slice(0,2);pos=[(Aj[0]+(((Aj[2]-Aj[0])/2)|0))-((
Cd[0]/2)|0),pos[1]];pos=[pos[0],(Aj[1]+(((Aj[3]-Aj[1])/2)|0))-((Cd[1]/2)|0)];Ap.
Qn=pos;},_Init:function(aArg){C.L1._Init.call(this,aArg);this.__proto__=C.Op;},_className:
"Effects::ShowHideTransition"};C.M_={Trigger:function(){B.Core.Timer.Trigger.call(
this);B.vv(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this,aArg);this.
__proto__=C.M_;},_className:"Effects::EffectTimerClass"};C.GO={_Init:function(){
C.M_._Init.call(this,0);this.Eq(15);this.Av(true);},_variants:function(){return this;
},_this:null};C.Lw={Bb:null,AK:null,P8:function(Jh){var Ap=this.AK;while(!!Ap){Ap.
P9();Ap.P.G=Ap.P.G&~0x40000;Ap=Ap.Ac;}Ap=this.AK;while(!!Ap){B.ow(Ap.Pf,Ap);Ap=Ap.
Ac;}},P7:function(Jh){var Ap=this.AK;while(!!Ap){B.ow(Ap.MH,Ap);Ap=Ap.Ac;}this.AK=
null;this.Bb=null;},IY:function(Jh){var A;if(!this.AK)this.GH();var Ap=this.AK;while(
!!Ap){Ap.P.G=(Ap.P.G|0x40000)&~0x20000;Ap.P.Iq=null;Ap=Ap.Ac;}Ap=this.AK;while(!
!Ap){(A=Ap.N7)?A[1].call(A[0],Ap):null;Ap.IY();Ap=Ap.Ac;}},GH:function(){var Ap=
this.AK;while(!!Ap&&Ap.P2())Ap=Ap.Ac;if(!Ap)B.Core.GY.GH.call(this);},Tt:function(
A7){if(!A7)return;if(this.Ns())throw new Error(A6);if(A7.C0!==this)throw new Error(
A2);if(!!A7.Ac)A7.Ac.An=A7.An;else this.Bb=A7.An;if(!!A7.An)A7.An.Ac=A7.Ac;else this.
AK=A7.Ac;A7.C0=null;A7.Ac=null;A7.An=null;if(!!A7.P)A7.P.Iq=null;B.ow(A7.MH,A7);
if(!this.AK)this.PG();},PC:function(A7){if(!A7)return;if(this.Ns())throw new Error(
Dm);if(!!A7.C0)throw new Error(Dn);A7.An=this.Bb;A7.Ac=null;if(!!this.Bb)this.Bb.
Ac=A7;else this.AK=A7;this.Bb=A7;A7.C0=this;},_Init:function(aArg){B.Core.GY._Init.
call(this,aArg);this.__proto__=C.Lw;},_Mark:function(D){var A;B.Core.GY._Mark.call(
this,D);if((A=this.Bb)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AK)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Effects::FaderTask"};C.Kv={_Init:function(
){C.Op._Init.call(this,0);},_variants:function(){return this;},_this:null};
C._Init=function(){C.DI.__proto__=C.Lv;C.I7.__proto__=C.Nn;C.Op.__proto__=C.L1;C.
M_.__proto__=B.Core.Timer;C.Lw.__proto__=B.Core.GY;};C._ReInit=function(){var A;
if((A=C.GO._this))A._ReInit();if((A=C.Kv._this))A._ReInit();};C.CO=function(D){var
A;if((A=C.GO._this)&&(A._cycle!=D))A._Done(C.GO._this=null);if((A=C.Kv._this)&&(
A._cycle!=D))A._Done(C.Kv._this=null);};return C;})();

/* Embedded Wizard */