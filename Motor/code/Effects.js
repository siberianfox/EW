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
);if(EmWiApp.uT)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
uT=(function(){var B=EmWiApp;var C={};
var AA="Trying to remove a fader from a task, which is actually running";var A0="The fader doesn\'t belong to this task";
var B8="Trying to add a fader to a task, which is actually running";var BW="The fader belongs already to a task";
C.Hl={timer:null,Gv:null,JE:0,Fn:0,G5:0.001000,CU:0,AH:0,AJ:0,Df:0,DQ:1000,Bo:false
,CX:function(Ak){var A;if(!this.timer)return;if(!this.Fn){this.Fn=1;this.JE=this.
Fn;this.AJ=this.timer.AK;this.AH=0;this.CU=-1.000000;}var BZ;if((this.Fn>0)&&(this.
JE>0))BZ=this.MW();else if((this.Fn<0)&&(this.JE<0))BZ=this.MZ();else if(this.Fn>
0)BZ=this.MX();else BZ=this.MY();if(BZ){this.AN(false);(A=this.Gv)?A[1].call(A[0
],this):null;}},Iv:function(Mh){this.Ka(Mh);},MZ:function(){var V=(this.timer.AK-
this.AJ)|0;if(V<0)V=-V;var CW=this.DQ;var A3=this.DQ;var BZ=false;var AU=this.CU;
if(!this.AH&&(V>=CW)){this.AH=1;V=V-CW;this.AJ=this.AJ+CW;}if((this.AH>0)&&(V>=A3
)){var A$=(V/A3)|0;this.AH=this.AH+A$;V=V-(A$*A3);this.AJ=this.AJ+(A$*A3);}if((this.
AH>2)&&!this.Df)this.AH=1;if((this.AH>=this.Df)&&(this.Df>0)){BZ=true;AU=0.000000;
}else if(V>=0)AU=1.000000-(V*this.G5);else if(AU>=0.000000)AU=0.000000;if(AU!==this.
CU){this.CU=AU;this.Iv(AU);}return BZ;},MY:function(){var V=(this.AJ-this.timer.
AK)|0;var CW=this.DQ;var A3=this.DQ;var BZ=false;var AU=this.CU;if((this.AH>1)&&(
V<0)){var A$=(((-V+A3)-1)/A3)|0;if((this.AH-A$)<=0)A$=this.AH-1;this.AH=this.AH-
A$;V=V+(A$*A3);this.AJ=this.AJ+(A$*A3);}if(((this.AH===1)&&(V<0))&&(this.Df>0)){
this.AH=0;V=V+CW;this.AJ=this.AJ+CW;}if(((this.AH===1)&&(V<0))&&!this.Df){var A$=(((-
V+A3)-1)/A3)|0;V=V+(A$*A3);this.AJ=this.AJ+(A$*A3);}if(V<0){BZ=true;AU=1.000000;
}else if(V>=0)AU=1.000000-(V*this.G5);else if(AU>=0.000000)AU=1.000000;if(AU!==this.
CU){this.CU=AU;this.Iv(AU);}return BZ;},MX:function(){var V=(this.AJ-this.timer.
AK)|0;var CW=this.DQ;var A3=this.DQ;var BZ=false;var AU=this.CU;if((this.AH>1)&&(
V<0)){var A$=(((-V+A3)-1)/A3)|0;if((this.AH-A$)<=0)A$=this.AH-1;this.AH=this.AH-
A$;V=V+(A$*A3);this.AJ=this.AJ+(A$*A3);}if(((this.AH===1)&&(V<0))&&(this.Df>0)){
this.AH=0;V=V+CW;this.AJ=this.AJ+CW;}if(((this.AH===1)&&(V<0))&&!this.Df){var A$=(((-
V+A3)-1)/A3)|0;V=V+(A$*A3);this.AJ=this.AJ+(A$*A3);}if(V<0){BZ=true;AU=0.000000;
}else if(V>=0)AU=V*this.G5;else if(AU>=0.000000)AU=0.000000;if(AU!==this.CU){this.
CU=AU;this.Iv(AU);}return BZ;},MW:function(){var V=(this.timer.AK-this.AJ)|0;if(
V<0)V=-V;var CW=this.DQ;var A3=this.DQ;var BZ=false;var AU=this.CU;if(!this.AH&&(
V>=CW)){this.AH=1;V=V-CW;this.AJ=this.AJ+CW;}if((this.AH>0)&&(V>=A3)){var A$=(V/
A3)|0;this.AH=this.AH+A$;V=V-(A$*A3);this.AJ=this.AJ+(A$*A3);}if((this.AH>2)&&!this.
Df)this.AH=1;if((this.AH>=this.Df)&&(this.Df>0)){BZ=true;AU=1.000000;}else if(V>=
0)AU=V*this.G5;else if(AU>=0.000000)AU=1.000000;if(AU!==this.CU){this.CU=AU;this.
Iv(AU);}return BZ;},I8:function(D){if(D<0)D=0;this.Df=D;},I6:function(D){if(D<15
)D=15;this.DQ=D;this.G5=1.000000/D;},AN:function(D){if(this.Bo===D)return;this.Bo=
D;if(!D&&!!this.timer){B.sY([this,this.CX],this.timer,0);this.timer=null;}if(D){
this.timer=B._GetAutoObject(C.Ft);B.sL([this,this.CX],this.timer,0);this.Fn=0;B.
lz([this,this.CX],this);}},Ka:function(KJ){},_Init:function(aArg){this.__proto__=
C.Hl;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((
A=this.Gv)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E
))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.Gq={Cv:null,CK:0,E2:255,GM:0,Ka:function(KJ){var Bh;this.CK=this.GM+(Math.round((
this.E2-this.GM)*KJ)|0);if(!!this.Cv)(Bh=this.Cv,Bh[2].call(Bh[0],this.CK));},_Init:
function(aArg){C.Hl._Init.call(this,aArg);this.__proto__=C.Gq;},_Mark:function(E
){var A;C.Hl._Mark.call(this,E);if((A=this.Cv)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=
E);},_className:"Effects::Int32Effect"};C.IK={CA:null,R:null,P:null,G:null,O:null
,Il:null,JZ:null,I2:null,C3:true,Bo:true,KF:true,J$:false,Kb:true,Jf:true,Jd:true
,ER:function(){if(!!this.CA)this.CA.ER();},Ko:function(){return true;},Ks:function(
){},GG:function(){this.ER();},_Init:function(aArg){this.__proto__=C.IK;B.gx++;},
_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(
E){var A;if((A=this.CA)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.R)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.P)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.O)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Il)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.
JZ)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.I2)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Effects::Fader"};C.FI={Kz:B.qK,KV:false,Ko:
function(){return this.KV;},Ks:function(){if(!this.C3&&!!this.O.G)this.O.CH(false
);if((!this.C3&&this.Jd)&&!!this.O.G)this.O.G.HW(this.O);if(!this.Bo)this.O.AN(false
);},GG:function(){if(this.Bo)this.O.AN(true);if((this.C3||this.J$)&&!this.O.G){this.
O.CH(false);this.G.Ai(this.O,0);}if(this.C3&&this.Jf)this.O.G.HX(this.O);if(this.
C3&&this.Kb)this.O.G.Bp(this.O);if(this.C3&&!this.KF)this.O.S(B.uk(this.O.Q,this.
Kz));if(this.C3){this.O.I9(255);this.O.CH(true);}if(!this.C3&&(this.G.BG===this.
O))this.G.Bp(null);this.KV=true;this.ER();},_Init:function(aArg){C.IK._Init.call(
this,aArg);this.__proto__=C.FI;},_className:"Effects::VisibilityFader"};C.H0={Eh:
function(){return null;},Eg:function(){return null;},Hi:function(){return this.Eh(
);},Hh:function(){return this.Eg();},_Init:function(aArg){this.__proto__=C.H0;B.
gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:
0,_observers:null,_className:"Effects::Transition"};C.Jh={Eh:function(){var T=B.
_NewObject(C.FI,0);T.C3=true;T.Bo=true;T.Kb=false;T.Jf=true;T.KF=false;T.I2=[this
,this.MG];return T;},Eg:function(){var T=B._NewObject(C.FI,0);T.C3=false;T.Bo=false;
T.Jd=true;return T;},Hi:function(){var T=C.H0.Hi.call(this);T.Jf=false;T.Bo=true;
return T;},Hh:function(){var T=B._NewObject(C.FI,0);T.C3=false;T.Bo=true;T.J$=true;
T.Jd=false;return T;},MG:function(Ak){var A;var T=(C.FI.isPrototypeOf(Ak)?Ak:null
);var Ac=[0,0,(A=T.G.Q)[2]-A[0],A[3]-A[1]];var BE=[(A=T.O.Q)[2]-A[0],A[3]-A[1]];
var Ar=Ac.slice(0,2);Ar=[(Ac[0]+(((Ac[2]-Ac[0])/2)|0))-((BE[0]/2)|0),Ar[1]];Ar=[
Ar[0],(Ac[1]+(((Ac[3]-Ac[1])/2)|0))-((BE[1]/2)|0)];T.Kz=Ar;},_Init:function(aArg
){C.H0._Init.call(this,aArg);this.__proto__=C.Jh;},_className:"Effects::ShowHideTransition"
};C.IE={Trigger:function(){B.Core.Timer.Trigger.call(this);B.qJ(this,0);},_Init:
function(aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=C.IE;},_className:
"Effects::EffectTimerClass"};C.Ft={_Init:function(){C.IE._Init.call(this,0);this.
FC(15);this.AN(true);},_variants:function(){return this;},_this:null};C.Hm={Aj:null
,Ae:null,Kr:function(G1){var T=this.Ae;while(!!T){T.Ks();T.O.F=T.O.F&~0x40000;T=
T.P;}T=this.Ae;while(!!T){B.lz(T.JZ,T);T=T.P;}},Kq:function(G1){var T=this.Ae;while(
!!T){B.lz(T.Il,T);T=T.P;}this.Ae=null;this.Aj=null;},GG:function(G1){var A;if(!this.
Ae)this.ER();var T=this.Ae;while(!!T){T.O.F=(T.O.F|0x40000)&~0x20000;T.O.Fk=null;
T=T.P;}T=this.Ae;while(!!T){(A=T.I2)?A[1].call(A[0],T):null;T.GG();T=T.P;}},ER:function(
){var T=this.Ae;while(!!T&&T.Ko())T=T.P;if(!T)B.Core.GK.ER.call(this);},L6:function(
Ay){if(!Ay)return;if(this.IQ())throw new Error(AA);if(Ay.CA!==this)throw new Error(
A0);if(!!Ay.P)Ay.P.R=Ay.R;else this.Aj=Ay.R;if(!!Ay.R)Ay.R.P=Ay.P;else this.Ae=Ay.
P;Ay.CA=null;Ay.P=null;Ay.R=null;if(!!Ay.O)Ay.O.Fk=null;B.lz(Ay.Il,Ay);if(!this.
Ae)this.Kc();},J_:function(Ay){if(!Ay)return;if(this.IQ())throw new Error(B8);if(
!!Ay.CA)throw new Error(BW);Ay.R=this.Aj;Ay.P=null;if(!!this.Aj)this.Aj.P=Ay;else
this.Ae=Ay;this.Aj=Ay;Ay.CA=this;},_Init:function(aArg){B.Core.GK._Init.call(this
,aArg);this.__proto__=C.Hm;},_Mark:function(E){var A;B.Core.GK._Mark.call(this,E
);if((A=this.Aj)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ae)&&(A._cycle!=E
))A._Mark(A._cycle=E);},_className:"Effects::FaderTask"};C.GJ={_Init:function(){
C.Jh._Init.call(this,0);},_variants:function(){return this;},_this:null};
C._Init=function(){C.Gq.__proto__=C.Hl;C.FI.__proto__=C.IK;C.Jh.__proto__=C.H0;C.
IE.__proto__=B.Core.Timer;C.Hm.__proto__=B.Core.GK;};C._ReInit=function(){var A;
if((A=C.Ft._this))A._ReInit();if((A=C.GJ._this))A._ReInit();};C.Bs=function(E){var
A;if((A=C.Ft._this)&&(A._cycle!=E))A._Done(C.Ft._this=null);if((A=C.GJ._this)&&(
A._cycle!=E))A._Done(C.GJ._this=null);};return C;})();

/* Embedded Wizard */