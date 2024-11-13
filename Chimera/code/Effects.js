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
);if(EmWiApp.abk)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
abk=(function(){var B=EmWiApp;var C={};
var AD=[0,0,100,100];var A0="Trying to remove a fader from a task, which is actually running";
var AT="The fader doesn\'t belong to this task";var DG="Trying to add a fader to a task, which is actually running";
var DV="The fader belongs already to a task";
C.HL={B1:null,timer:null,IZ:null,JK:0,FI:0,EF:0,D1:0,Ds:0,AL:0,AY:0,DS:0,Ew:0,Fo:
0,BH:false,Kn:false,LD:false,CS:function(An){var A;if(!this.timer)return;if(!this.
FI){this.FI=1;this.JK=this.FI;this.AY=this.timer.Ap;this.AL=0;this.Ds=-1;}var Cr;
if((this.FI>0)&&(this.JK>0))Cr=this.N3();else if((this.FI<0)&&(this.JK<0))Cr=this.
N6();else if(this.FI>0)Cr=this.N4();else Cr=this.N5();if(Cr){this.BK(false);(A=this.
IZ)?A[1].call(A[0],this):null;}},IC:function(H){if(!this.B1&&(((this.Fo===19)||(
this.Fo===20))||(this.Fo===21))){var FJ=0.5;var G;this.B1=B._NewObject(C.H1,0);this.
B1.Cm.Set(0,1);this.B1.EY.Set(0,1);for(G=1;G<4;G=G+1){this.B1.Cm.Set(G,this.B1.Cm.
Get(G-1)*0.707107);this.B1.EY.Set(G,this.B1.EY.Get(G-1)*0.5);FJ=FJ+this.B1.Cm.Get(
G);}var Nu=1/FJ;this.B1.Cm.Set(0,0.5);FJ=0;for(G=0;G<4;G=G+1){this.B1.Cm.Set(G,this.
B1.Cm.Get(G)*Nu);FJ=FJ+this.B1.Cm.Get(G);}this.B1.Cm.Set(4,this.B1.Cm.Get(4)+(1-
FJ));}switch(this.Fo){case 1:H=Math.pow(H,3);break;case 2:{H=1-H;H=1-Math.pow(H,
3);}break;case 3:{H=H*2;if(H<1)H=Math.pow(H,3)/2;else{H=2-H;H=(2-Math.pow(H,3))*
0.5;}}break;case 4:H=(Math.pow(2.718,3*H)-1)/19.0793;break;case 5:{H=1-H;H=1-((Math.
pow(2.718,3*H)-1)/19.0793);}break;case 6:{H=H*2;if(H<1)H=((Math.pow(2.718,3*H)-1
)/19.0793)/2;else{H=2-H;H=(2-((Math.pow(2.718,3*H)-1)/19.0793))*0.5;}}break;case
7:H=1-Math.cos((H*90)*B.kw);break;case 8:H=Math.sin((H*90)*B.kw);break;case 9:{H=
H*2;if(H<1){H=1-Math.cos((H*90)*B.kw);H=H*0.5;}else{H=2-H;H=1-Math.cos((H*90)*B.
kw);H=(2-H)*0.5;}}break;case 10:H=1-Math.sqrt(1-(H*H));break;case 11:{H=1-H;H=Math.
sqrt(1-(H*H));}break;case 12:{H=H*2;if(H<1){H=1-Math.sqrt(1-(H*H));H=H*0.5;}else{
H=2-H;H=1-Math.sqrt(1-(H*H));H=(2-H)*0.5;}}break;case 13:H=((H*H)*H)-((H*0.5)*Math.
sin((H*180)*B.kw));break;case 14:{H=1-H;H=((H*H)*H)-((H*0.5)*Math.sin((H*180)*B.
kw));H=1-H;}break;case 15:{H=H*2;if(H<1){H=((H*H)*H)-((H*0.5)*Math.sin((H*180)*B.
kw));H=H*0.5;}else{H=2-H;H=((H*H)*H)-((H*0.5)*Math.sin((H*180)*B.kw));H=(2-H)*0.5;
}}break;case 16:H=((H*H)*H)*Math.sin(((H*90)*13)*B.kw);break;case 17:{H=1-H;H=1-(((
H*H)*H)*Math.sin(((H*90)*13)*B.kw));}break;case 18:{H=H*2;if(H<1){H=((H*H)*H)*Math.
sin(((H*90)*13)*B.kw);H=H*0.5;}else{H=2-H;H=((H*H)*H)*Math.sin(((H*90)*13)*B.kw);
H=(2-H)*0.5;}}break;case 19:{var D3=this.B1;var G=0;var D9=0;var Cy=D3.Cm.Get(0);
var Cn=1-H;while(Cn>Cy){G=G+1;D9=Cy;Cy=Cy+D3.Cm.Get(G);}H=(Cn-D9)/(Cy-D9);if(!G)
H=1-(H*H);else{H=(2*H)-1;H=D3.EY.Get(G)*(1-(H*H));}}break;case 20:{var D3=this.B1;
var G=0;var D9=0;var Cy=D3.Cm.Get(0);while(H>Cy){G=G+1;D9=Cy;Cy=Cy+D3.Cm.Get(G);
}H=(H-D9)/(Cy-D9);if(!G)H=H*H;else{H=(2*H)-1;H=1-(D3.EY.Get(G)*(1-(H*H)));}}break;
case 21:{var D3=this.B1;var G=0;var D9=0;var Cy=D3.Cm.Get(0);var Cj=H*2;var Cn=Cj-
1;if(Cj<1)Cn=-Cn;while(Cn>Cy){G=G+1;D9=Cy;Cy=Cy+D3.Cm.Get(G);}Cn=(Cn-D9)/(Cy-D9);
if(!G)Cn=Cn*Cn;else{Cn=(2*Cn)-1;Cn=1-(D3.EY.Get(G)*(1-(Cn*Cn)));}if(Cj<1)H=0.5*(
1-Cn);else H=0.5*(1+Cn);}break;default:if(this.Kn){var Cj=H;var Hl=1-Cj;H=((Hl*Cj
)*(this.D1+1))+(Cj*Cj);}else if(this.LD){var Cj=H;var Hl=1-Cj;var K$=Cj*Cj;var NB=
Hl*Hl;H=(((NB*Cj)*(this.D1+1))+((Hl*K$)*(this.EF+2)))+(K$*Cj);}}this.Kr(H);},N6:
function(){var Af=(this.timer.Ap-this.AY)|0;if(Af<0)Af=-Af;var CX=this.Ew;var Dw=
this.Ew+1000;var Cr=false;var A3=this.Ds;if(!this.AL&&(Af>=Dw)){this.AL=1;Af=Af-
Dw;this.AY=this.AY+Dw;}if((this.AL>0)&&(Af>=1000)){var By=(Af/1000)|0;this.AL=this.
AL+By;Af=Af-(By*1000);this.AY=this.AY+(By*1000);}if((this.AL>2)&&!this.DS)this.AL=
1;if(this.AL>0)CX=0;if((this.AL>=this.DS)&&(this.DS>0)){Cr=true;A3=0;}else if(Af>=
CX)A3=1-((Af-CX)*0.001);else if(A3>=0)A3=0;if(A3!==this.Ds){this.Ds=A3;this.IC(A3
);}return Cr;},N5:function(){var Af=(this.AY-this.timer.Ap)|0;var CX=this.Ew;var
Dw=this.Ew+1000;var Cr=false;var A3=this.Ds;if((this.AL>1)&&(Af<0)){var By=(((-Af+
1000)-1)/1000)|0;if((this.AL-By)<=0)By=this.AL-1;this.AL=this.AL-By;Af=Af+(By*1000
);this.AY=this.AY+(By*1000);}if(((this.AL===1)&&(Af<0))&&(this.DS>0)){this.AL=0;
Af=Af+Dw;this.AY=this.AY+Dw;}if(((this.AL===1)&&(Af<0))&&!this.DS){var By=(((-Af+
1000)-1)/1000)|0;Af=Af+(By*1000);this.AY=this.AY+(By*1000);}if(this.AL>0)CX=0;if(
Af<0){Cr=true;A3=1;}else if(Af>=CX)A3=1-((Af-CX)*0.001);else if(A3>=0)A3=1;if(A3
!==this.Ds){this.Ds=A3;this.IC(A3);}return Cr;},N4:function(){var Af=(this.AY-this.
timer.Ap)|0;var CX=this.Ew;var Dw=this.Ew+1000;var Cr=false;var A3=this.Ds;if((this.
AL>1)&&(Af<0)){var By=(((-Af+1000)-1)/1000)|0;if((this.AL-By)<=0)By=this.AL-1;this.
AL=this.AL-By;Af=Af+(By*1000);this.AY=this.AY+(By*1000);}if(((this.AL===1)&&(Af<
0))&&(this.DS>0)){this.AL=0;Af=Af+Dw;this.AY=this.AY+Dw;}if(((this.AL===1)&&(Af<
0))&&!this.DS){var By=(((-Af+1000)-1)/1000)|0;Af=Af+(By*1000);this.AY=this.AY+(By
*1000);}if(this.AL>0)CX=0;if(Af<0){Cr=true;A3=0;}else if(Af>=CX)A3=(Af-CX)*0.001;
else if(A3>=0)A3=0;if(A3!==this.Ds){this.Ds=A3;this.IC(A3);}return Cr;},N3:function(
){var Af=(this.timer.Ap-this.AY)|0;if(Af<0)Af=-Af;var CX=this.Ew;var Dw=this.Ew+
1000;var Cr=false;var A3=this.Ds;if(!this.AL&&(Af>=Dw)){this.AL=1;Af=Af-Dw;this.
AY=this.AY+Dw;}if((this.AL>0)&&(Af>=1000)){var By=(Af/1000)|0;this.AL=this.AL+By;
Af=Af-(By*1000);this.AY=this.AY+(By*1000);}if((this.AL>2)&&!this.DS)this.AL=1;if(
this.AL>0)CX=0;if((this.AL>=this.DS)&&(this.DS>0)){Cr=true;A3=1;}else if(Af>=CX)
A3=(Af-CX)*0.001;else if(A3>=0)A3=1;if(A3!==this.Ds){this.Ds=A3;this.IC(A3);}return Cr;
},Mn:function(E){if(this.Fo===E)return;this.Fo=E;this.B1=null;switch(E){case 24:{
this.D1=-1.1;this.EF=1.1;}break;case 22:{this.D1=-1;this.EF=-2;}break;case 23:{this.
D1=2;this.EF=1;}break;case 25:{this.D1=1.1;this.EF=-1.1;}break;case 0:{this.D1=0;
this.EF=0;}break;default:{this.D1=0;this.EF=0;}}this.Kn=(this.D1===this.EF)&&!!this.
D1;this.LD=!this.Kn&&(this.D1!==this.EF);},Mi:function(E){if(E<0)E=0;this.DS=E;}
,Me:function(E){if(E<0)E=0;this.Ew=E;},BK:function(E){if(this.BH===E)return;this.
BH=E;if(!E&&!!this.timer){B.zl([this,this.CS],this.timer,0);this.timer=null;}if(
E){this.timer=B._GetAutoObject(C.Fg);B.y_([this,this.CS],this.timer,0);this.FI=0;
B.ow([this,this.CS],this);}},Kr:function(G_){},_Init:function(aArg){this.__proto__=
C.HL;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.B1)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.IZ)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);},Q:null
,_cycle:0,_observers:null,_className:"Effects::Effect"};C.CD={DD:null,KY:B.vx,G0:
AD,GZ:B.vx,Kr:function(G_){var A_;var V=this.GZ[0];var W=this.GZ[1];var X=this.GZ[
2];var Y=this.GZ[3];V=V+(Math.round((this.G0[0]-V)*G_)|0);W=W+(Math.round((this.
G0[1]-W)*G_)|0);X=X+(Math.round((this.G0[2]-X)*G_)|0);Y=Y+(Math.round((this.G0[3
]-Y)*G_)|0);this.KY=[V,W,X,Y];if(!!this.DD)(A_=this.DD,A_[2].call(A_[0],this.KY)
);},_Init:function(aArg){C.HL._Init.call(this,aArg);this.__proto__=C.CD;},_Mark:
function(D){var A;C.HL._Mark.call(this,D);if((A=this.DD)&&((A=A[0])._cycle!=D))A.
_Mark(A._cycle=D);},_className:"Effects::RectEffect"};C.IN={C$:null,U:null,O:null
,I:null,K:null,Iq:null,J8:null,I1:null,DF:true,BH:true,KX:true,Kq:false,Ks:true,
Jc:true,Ja:true,Fe:function(){if(!!this.C$)this.C$.Fe();},Kz:function(){return true;
},KD:function(){},GQ:function(){this.Fe();},_Init:function(aArg){this.__proto__=
C.IN;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.C$)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.U)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Iq)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.J8)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.I1)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=
D);},Q:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Ge={KT:B.vw,
Lb:false,Kz:function(){return this.Lb;},KD:function(){if(!this.DF&&!!this.K.I)this.
K.EW(false);if((!this.DF&&this.Ja)&&!!this.K.I)this.K.I.HY(this.K);if(!this.BH)this.
K.BK(false);},GQ:function(){if(this.BH)this.K.BK(true);if((this.DF||this.Kq)&&!this.
K.I){this.K.EW(false);this.I.At(this.K,0);}if(this.DF&&this.Jc)this.K.I.HZ(this.
K);if(this.DF&&this.Ks)this.K.I.CU(this.K);if(this.DF&&!this.KX)this.K.Z(B.aaM(this.
K.M,this.KT));if(this.DF){this.K.I8(255);this.K.EW(true);}if(!this.DF&&(this.I.B$===
this.K))this.I.CU(null);this.Lb=true;this.Fe();},_Init:function(aArg){C.IN._Init.
call(this,aArg);this.__proto__=C.Ge;},_className:"Effects::VisibilityFader"};C.H2={
ER:function(){return null;},EQ:function(){return null;},HJ:function(){return this.
ER();},HI:function(){return this.EQ();},_Init:function(aArg){this.__proto__=C.H2;
B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);},Q:null,_cycle:
0,_observers:null,_className:"Effects::Transition"};C.Jf={ER:function(){var Ae=B.
_NewObject(C.Ge,0);Ae.DF=true;Ae.BH=true;Ae.Ks=false;Ae.Jc=true;Ae.KX=false;Ae.I1=[
this,this.NJ];return Ae;},EQ:function(){var Ae=B._NewObject(C.Ge,0);Ae.DF=false;
Ae.BH=false;Ae.Ja=true;return Ae;},HJ:function(){var Ae=C.H2.HJ.call(this);Ae.Jc=
false;Ae.BH=true;return Ae;},HI:function(){var Ae=B._NewObject(C.Ge,0);Ae.DF=false;
Ae.BH=true;Ae.Kq=true;Ae.Ja=false;return Ae;},NJ:function(An){var A;var Ae=(C.Ge.
isPrototypeOf(An)?An:null);var AA=[0,0,(A=Ae.I.M)[2]-A[0],A[3]-A[1]];var BW=[(A=
Ae.K.M)[2]-A[0],A[3]-A[1]];var AC=AA.slice(0,2);AC=[(AA[0]+(((AA[2]-AA[0])/2)|0)
)-((BW[0]/2)|0),AC[1]];AC=[AC[0],(AA[1]+(((AA[3]-AA[1])/2)|0))-((BW[1]/2)|0)];Ae.
KT=AC;},_Init:function(aArg){C.H2._Init.call(this,aArg);this.__proto__=C.Jf;},_className:
"Effects::ShowHideTransition"};C.Fo={O1:0,O_:1,Pa:2,O$:3,OK:4,OM:5,OL:6,Pp:7,Pr:
8,Pq:9,Oy:10,OA:11,Oz:12,On:13,Op:14,Oo:15,OG:16,OI:17,OH:18,Ov:19,Ox:20,Ow:21,OE:
22,ON:23,OD:24,OO:25,OB:26};C.IJ={Trigger:function(){B.Core.Timer.Trigger.call(this
);B.vv(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=
C.IJ;},_className:"Effects::EffectTimerClass"};C.Fg={_Init:function(){C.IJ._Init.
call(this,0);this.GO(15);this.BK(true);},_variants:function(){return this;},_this:
null};C.H1={Cm:B.aan(12,0,null),EY:B.aan(12,0,null),_Init:function(aArg){(this.Cm=[
]).__proto__=C.H1.Cm;(this.EY=[]).__proto__=C.H1.EY;this.__proto__=C.H1;B.hJ++;}
,_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);},Q:null,_cycle:0,_observers:
null,_className:"Effects::TimingList"};C.HM={AB:null,Aq:null,KC:function(G$){var
Ae=this.Aq;while(!!Ae){Ae.KD();Ae.K.F=Ae.K.F&~0x40000;Ae=Ae.O;}Ae=this.Aq;while(
!!Ae){B.ow(Ae.J8,Ae);Ae=Ae.O;}},KB:function(G$){var Ae=this.Aq;while(!!Ae){B.ow(
Ae.Iq,Ae);Ae=Ae.O;}this.Aq=null;this.AB=null;},GQ:function(G$){var A;if(!this.Aq
)this.Fe();var Ae=this.Aq;while(!!Ae){Ae.K.F=(Ae.K.F|0x40000)&~0x20000;Ae.K.FE=null;
Ae=Ae.O;}Ae=this.Aq;while(!!Ae){(A=Ae.I1)?A[1].call(A[0],Ae):null;Ae.GQ();Ae=Ae.
O;}},Fe:function(){var Ae=this.Aq;while(!!Ae&&Ae.Kz())Ae=Ae.O;if(!Ae)B.Core.GY.Fe.
call(this);},Ms:function(AI){if(!AI)return;if(this.IS())throw new Error(A0);if(AI.
C$!==this)throw new Error(AT);if(!!AI.O)AI.O.U=AI.U;else this.AB=AI.U;if(!!AI.U)
AI.U.O=AI.O;else this.Aq=AI.O;AI.C$=null;AI.O=null;AI.U=null;if(!!AI.K)AI.K.FE=null;
B.ow(AI.Iq,AI);if(!this.Aq)this.Kt();},Kp:function(AI){if(!AI)return;if(this.IS(
))throw new Error(DG);if(!!AI.C$)throw new Error(DV);AI.U=this.AB;AI.O=null;if(!
!this.AB)this.AB.O=AI;else this.Aq=AI;this.AB=AI;AI.C$=this;},_Init:function(aArg
){B.Core.GY._Init.call(this,aArg);this.__proto__=C.HM;},_Mark:function(D){var A;
B.Core.GY._Mark.call(this,D);if((A=this.AB)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Aq)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::FaderTask"};
C.GX={_Init:function(){C.Jf._Init.call(this,0);},_variants:function(){return this;
},_this:null};
C._Init=function(){C.CD.__proto__=C.HL;C.Ge.__proto__=C.IN;C.Jf.__proto__=C.H2;C.
IJ.__proto__=B.Core.Timer;C.HM.__proto__=B.Core.GY;};C._ReInit=function(){var A;
if((A=C.Fg._this))A._ReInit();if((A=C.GX._this))A._ReInit();};C.Bs=function(D){var
A;if((A=C.Fg._this)&&(A._cycle!=D))A._Done(C.Fg._this=null);if((A=C.GX._this)&&(
A._cycle!=D))A._Done(C.GX._this=null);};return C;})();

/* Embedded Wizard */