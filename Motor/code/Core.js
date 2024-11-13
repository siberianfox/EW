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
);if(EmWiApp.Core)throw new Error("The unit file 'Core.js' included twice!");EmWiApp.
Core=(function(){var B=EmWiApp;var C={};
var AA=[0,0];var A0=[0,0,0,0];var B8="The view does not belong to this group";var
BW="The dialog component is already presented";var D3="The dialog component is actually not presented";
var E3="No fader to perform the fade-in/out operation";var Ch="Trying to use the same fader twice";
var E4="Trying to fade-in/out a group which belongs to another owner";var Ey="No view to restack";
var E5="View is not in this group";var FO="No view to remove";var GO="No view to add";
var GP="View already in a group";var GQ="Recursive invalidate during active update cycle.";
var E6=[-8,-8,9,9];var GR="The method RestackTop() is not available in Core::VerticalList.";
var GS="The method Remove() is not available in Core::VerticalList.";var E7="The method Add() is not available in Core::VerticalList.";
var GT=[0,0,170,120];var GU="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var FP="Trying to cancel a task not belonging to this queue!";
var GV="Trying to enqueue a task twice!";
C.Ao={P:null,R:null,G:null,Aq:null,F:0x103,CE:0x14,Ga:function(I,FT){},I7:function(
D){var A;var DH=D^this.CE;if(!DH)return;this.CE=D;if(!!this.Aq&&!((this.F&0x400)===
0x400)){this.G.F=this.G.F|0x5000;B.lz([A=this.G,A.BF],this);this.G.Ab([0,0,(A=this.
G.Q)[2]-A[0],A[3]-A[1]]);}if(!!this.Aq&&((this.F&0x400)===0x400)){this.Aq.EK.F=this.
Aq.EK.F|0x1000;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.BF],this);}},Kh:function(
){var U=this.G;while(!!U){var Lj=(C.Root.isPrototypeOf(U)?U:null);if(!!Lj)return Lj;
U=U.G;}return null;},Cr:function(AE,aClip,aOffset,As,aBlend){},Bt:function(Al){return null;
},Fs:function(Ap,M,B9,FQ,FU){return null;},Gg:function(I,BA){return AA;},Gu:function(
aOffset,FS){},GetExtent:function(){return A0;},AM:function(D5,E9){var A;if(((this.
F&0x200)===0x200))D5=D5&~0x400;var JX=(this.F&~E9)|D5;var EC=JX^this.F;this.F=JX;
if(!!this.G&&!!(EC&0x14)){var KW=((this.F&0x14)===0x14);if(KW&&!this.G.BG)this.G.
Bp(this);if(!KW&&(this.G.BG===this))this.G.Bp(this.G.IM(this,0x14));}if(!!this.G&&
!!(EC&0x403))this.G.Ab(this.GetExtent());if(((!!this.Aq&&!!this.G)&&((JX&0x400)===
0x400))&&((EC&0x1)===0x1)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=
this.G,A.BF],this);}if(!!this.G&&((EC&0x400)===0x400)){this.Aq=null;this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.BF],this);}},_Init:function(aArg
){this.__proto__=C.Ao;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.P)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.R)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.G)&&(A._cycle!=E)
)A._Mark(A._cycle=E);if((A=this.Aq)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Core::View"};C.Fz={AD:B.qK,AW:B.qK,Ga:function(I,FT){var N=B._NewObject(C.Hr,0);
this.Aq=null;N.Bx=this.getExtent();N.Ac=I;N.EK=FT;N.Ed=this.AW;N.Ee=this.AD;this.
Aq=N;},Gg:function(I,BA){var A;var Az=this.CE;var N=(C.Hr.isPrototypeOf(A=this.Aq
)?A:null);var x1=N.Bx[0];var y1=N.Bx[1];var x2=N.Bx[2];var y2=N.Bx[3];var A9=[I[
2]-I[0],I[3]-I[1]];var Ah=x2-x1;var Ad=y2-y1;var tmp;if(!BA){var BL=[(A=N.Ac)[2]-
A[0],A[3]-A[1]];x1=x1-N.Ac[0];y1=y1-N.Ac[1];if(BL[0]!==A9[0]){var A6=((Az&0x4)===
0x4);var A7=((Az&0x8)===0x8);var B3=((Az&0x1)===0x1);if(!A6&&(B3||!A7))x1=((x1*A9[
0])/BL[0])|0;if(!A7&&(B3||!A6)){x2=x2-N.Ac[0];x2=((x2*A9[0])/BL[0])|0;x2=x2-A9[0
];}else x2=x2-N.Ac[2];x1=x1+I[0];x2=x2+I[2];if(!B3){if(A6&&!A7)x2=x1+Ah;else if(
!A6&&A7)x1=x2-Ah;else{x1=x1+((((x2-x1)-Ah)/2)|0);x2=x1+Ah;}}}else{x2=x2-N.Ac[2];
x1=x1+I[0];x2=x2+I[2];}if(BL[1]!==A9[1]){var A8=((Az&0x10)===0x10);var A5=((Az&0x20
)===0x20);var B4=((Az&0x2)===0x2);if(!A8&&(B4||!A5))y1=((y1*A9[1])/BL[1])|0;if(!
A5&&(B4||!A8)){y2=y2-N.Ac[1];y2=((y2*A9[1])/BL[1])|0;y2=y2-A9[1];}else y2=y2-N.Ac[
3];y1=y1+I[1];y2=y2+I[3];if(!B4){if(A8&&!A5)y2=y1+Ad;else if(!A8&&A5)y1=y2-Ad;else{
y1=y1+((((y2-y1)-Ad)/2)|0);y2=y1+Ad;}}}else{y2=y2-N.Ac[3];y1=y1+I[1];y2=y2+I[3];
}}else{switch(BA){case 3:{x1=I[0];x2=x1+Ah;}break;case 4:{x2=I[2];x1=x2-Ah;}break;
case 1:{y1=I[1];y2=y1+Ad;}break;case 2:{y2=I[3];y1=y2-Ad;}break;default:;}if((BA===
3)||(BA===4)){var A8=((Az&0x10)===0x10);var A5=((Az&0x20)===0x20);var B4=((Az&0x2
)===0x2);if(B4){y1=I[1];y2=I[3];}else if(A8&&!A5){y1=I[1];y2=y1+Ad;}else if(A5&&
!A8){y2=I[3];y1=y2-Ad;}else{y1=I[1]+((((I[3]-I[1])-Ad)/2)|0);y2=y1+Ad;}}if((BA===
1)||(BA===2)){var A6=((Az&0x4)===0x4);var A7=((Az&0x8)===0x8);var B3=((Az&0x1)===
0x1);if(B3){x1=I[0];x2=I[2];}else if(A6&&!A7){x1=I[0];x2=x1+Ah;}else if(A7&&!A6){
x2=I[2];x1=x2-Ah;}else{x1=I[0]+((((I[2]-I[0])-Ah)/2)|0);x2=x1+Ah;}}}N.isEmpty=(x1>=
x2)||(y1>=y2);Ah=x2-x1;Ad=y2-y1;if(N.Ee[0]<N.Ed[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(
N.Ee[1]<N.Ed[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=
y1;if(((this.F&0x100)===0x100)){this.AW=[x1,y1];this.AD=[x2,y2];}else{this.EW([x1
,y1]);this.EX([x2,y2]);this.Aq=N;}return[Ah,Ad];},Gu:function(aOffset,FS){if(FS){
this.AW=B.tV(this.AW,aOffset);this.AD=B.tV(this.AD,aOffset);}else{this.EW(B.tV(this.
AW,aOffset));this.EX(B.tV(this.AD,aOffset));}},GetExtent:function(){if(!!this.Aq&&
this.Aq.isEmpty)return A0;return this.getExtent();},getExtent:function(){var x1=
this.AW[0];var y1=this.AW[1];var x2=this.AD[0];var y2=this.AD[1];var Ah=x2-x1;var
Ad=y2-y1;var tmp;if(Ah<0)Ah=-Ah;if(Ad<0)Ad=-Ad;if(Ah>=Ad){if(x2>x1)x2=x2-1;if(x2<
x1)x2=x2+1;}if(Ad>=Ah){if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;
x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},EX:function(D){
var A;if(B.tH(D,this.AD))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.
GetExtent());this.Aq=null;this.AD=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(
this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===
0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.BF],this);
}},EW:function(D){var A;if(B.tH(D,this.AW))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.Ab(this.GetExtent());this.Aq=null;this.AW=D;if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ab(this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.
G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.
G,A.BF],this);}},_Init:function(aArg){C.Ao._Init.call(this,aArg);this.__proto__=
C.Fz;},_className:"Core::LineView"};C.GI={Bu:B.qK,BQ:B.qK,AD:B.qK,AW:B.qK,Ga:function(
I,FT){var N=B._NewObject(C.Hs,0);this.Aq=null;N.Bx=this.GetExtent();N.Ac=I;N.EK=
FT;N.Ed=this.AW;N.Ee=this.AD;N.G$=this.BQ;N.Ha=this.Bu;this.Aq=N;},Gg:function(I
,BA){var A;var Az=this.CE;var N=(C.Hs.isPrototypeOf(A=this.Aq)?A:null);var x1=N.
Bx[0];var y1=N.Bx[1];var x2=N.Bx[2];var y2=N.Bx[3];var A9=[I[2]-I[0],I[3]-I[1]];
var Ah=x2-x1;var Ad=y2-y1;if(!BA){var BL=[(A=N.Ac)[2]-A[0],A[3]-A[1]];x1=x1-N.Ac[
0];y1=y1-N.Ac[1];if(BL[0]!==A9[0]){var A6=((Az&0x4)===0x4);var A7=((Az&0x8)===0x8
);var B3=((Az&0x1)===0x1);if(!A6&&(B3||!A7))x1=((x1*A9[0])/BL[0])|0;if(!A7&&(B3||
!A6)){x2=x2-N.Ac[0];x2=((x2*A9[0])/BL[0])|0;x2=x2-A9[0];}else x2=x2-N.Ac[2];x1=x1+
I[0];x2=x2+I[2];if(!B3){if(A6&&!A7)x2=x1+Ah;else if(!A6&&A7)x1=x2-Ah;else{x1=x1+((((
x2-x1)-Ah)/2)|0);x2=x1+Ah;}}}else{x2=x2-N.Ac[2];x1=x1+I[0];x2=x2+I[2];}if(BL[1]!==
A9[1]){var A8=((Az&0x10)===0x10);var A5=((Az&0x20)===0x20);var B4=((Az&0x2)===0x2
);if(!A8&&(B4||!A5))y1=((y1*A9[1])/BL[1])|0;if(!A5&&(B4||!A8)){y2=y2-N.Ac[1];y2=((
y2*A9[1])/BL[1])|0;y2=y2-A9[1];}else y2=y2-N.Ac[3];y1=y1+I[1];y2=y2+I[3];if(!B4){
if(A8&&!A5)y2=y1+Ad;else if(!A8&&A5)y1=y2-Ad;else{y1=y1+((((y2-y1)-Ad)/2)|0);y2=
y1+Ad;}}}else{y2=y2-N.Ac[3];y1=y1+I[1];y2=y2+I[3];}}else{switch(BA){case 3:{x1=I[
0];x2=x1+Ah;}break;case 4:{x2=I[2];x1=x2-Ah;}break;case 1:{y1=I[1];y2=y1+Ad;}break;
case 2:{y2=I[3];y1=y2-Ad;}break;default:;}if((BA===3)||(BA===4)){var A8=((Az&0x10
)===0x10);var A5=((Az&0x20)===0x20);var B4=((Az&0x2)===0x2);if(B4){y1=I[1];y2=I[
3];}else if(A8&&!A5){y1=I[1];y2=y1+Ad;}else if(A5&&!A8){y2=I[3];y1=y2-Ad;}else{y1=
I[1]+((((I[3]-I[1])-Ad)/2)|0);y2=y1+Ad;}}if((BA===1)||(BA===2)){var A6=((Az&0x4)===
0x4);var A7=((Az&0x8)===0x8);var B3=((Az&0x1)===0x1);if(B3){x1=I[0];x2=I[2];}else
if(A6&&!A7){x1=I[0];x2=x1+Ah;}else if(A7&&!A6){x2=I[2];x1=x2-Ah;}else{x1=I[0]+((((
I[2]-I[0])-Ah)/2)|0);x2=x1+Ah;}}}N.isEmpty=(x1>=x2)||(y1>=y2);Ah=(x2-x1)-1;Ad=(y2-
y1)-1;var D9=N.Bx[0];var D_=N.Bx[1];var DJ=(N.Bx[2]-D9)-1;var DI=(N.Bx[3]-D_)-1;
if(!DJ)DJ=1;if(!DI)DI=1;if(((this.F&0x100)===0x100)){this.AW=[x1+((((N.Ed[0]-D9)
*Ah)/DJ)|0),y1+((((N.Ed[1]-D_)*Ad)/DI)|0)];this.AD=[x1+((((N.Ee[0]-D9)*Ah)/DJ)|0
),y1+((((N.Ee[1]-D_)*Ad)/DI)|0)];this.BQ=[x1+((((N.G$[0]-D9)*Ah)/DJ)|0),y1+((((N.
G$[1]-D_)*Ad)/DI)|0)];this.Bu=[x1+((((N.Ha[0]-D9)*Ah)/DJ)|0),y1+((((N.Ha[1]-D_)*
Ad)/DI)|0)];}else{this.EW([x1+((((N.Ed[0]-D9)*Ah)/DJ)|0),y1+((((N.Ed[1]-D_)*Ad)/
DI)|0)]);this.EX([x1+((((N.Ee[0]-D9)*Ah)/DJ)|0),y1+((((N.Ee[1]-D_)*Ad)/DI)|0)]);
this.I_([x1+((((N.G$[0]-D9)*Ah)/DJ)|0),y1+((((N.G$[1]-D_)*Ad)/DI)|0)]);this.I$([
x1+((((N.Ha[0]-D9)*Ah)/DJ)|0),y1+((((N.Ha[1]-D_)*Ad)/DI)|0)]);this.Aq=N;}return[
Ah+1,Ad+1];},Gu:function(aOffset,FS){if(FS){this.AW=B.tV(this.AW,aOffset);this.AD=
B.tV(this.AD,aOffset);this.BQ=B.tV(this.BQ,aOffset);this.Bu=B.tV(this.Bu,aOffset
);}else{this.EW(B.tV(this.AW,aOffset));this.EX(B.tV(this.AD,aOffset));this.I_(B.
tV(this.BQ,aOffset));this.I$(B.tV(this.Bu,aOffset));}},GetExtent:function(){if(!
!this.Aq&&this.Aq.isEmpty)return A0;var x1=this.AW[0];var y1=this.AW[1];var x2=this.
BQ[0];var y2=this.BQ[1];if((((this.Bu[0]!==x1)||(this.AD[1]!==y1))||(this.AD[0]!==
x2))||(this.Bu[1]!==y2)){if(this.AD[0]<x1)x1=this.AD[0];if(this.BQ[0]<x1)x1=this.
BQ[0];if(this.Bu[0]<x1)x1=this.Bu[0];if(this.AD[1]<y1)y1=this.AD[1];if(this.BQ[1
]<y1)y1=this.BQ[1];if(this.Bu[1]<y1)y1=this.Bu[1];if(this.AW[0]>x2)x2=this.AW[0];
if(this.AD[0]>x2)x2=this.AD[0];if(this.Bu[0]>x2)x2=this.Bu[0];if(this.AW[1]>y2)y2=
this.AW[1];if(this.AD[1]>y2)y2=this.AD[1];if(this.Bu[1]>y2)y2=this.Bu[1];}else{var
tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,
x2+1,y2+1];},I$:function(D){var A;if(B.tH(D,this.Bu))return;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ab(this.GetExtent());this.Aq=null;this.Bu=D;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ab(this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400
))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;
B.lz([A=this.G,A.BF],this);}},I_:function(D){var A;if(B.tH(D,this.BQ))return;if(
!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());this.Aq=null;this.BQ=
D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());if((!!this.G&&((
this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.lz([A=this.G,A.BF],this);}},EX:function(D){var A;if(B.tH(D
,this.AD))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());this.
Aq=null;this.AD=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());
if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.BF],this);}},EW:function(D){var
A;if(B.tH(D,this.AW))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent(
));this.Aq=null;this.AW=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.BF],this);}},IR:function(
E$){var AI=B.tY(4,B.qK,null);var K=0;var AL=3;var JJ=false;var JK=false;AI.Set(0
,this.AW);AI.Set(1,this.AD);AI.Set(2,this.BQ);AI.Set(3,this.Bu);while(K<4){var Lp=
AI.Get(K)[0];var Ix=AI.Get(K)[1];var M4=AI.Get(AL)[0];var J9=AI.Get(AL)[1];if(((
Ix>E$[1])!==(J9>E$[1]))||((Ix<E$[1])!==(J9<E$[1]))){var Lr=((((M4-Lp)*(E$[1]-Ix)
)/(J9-Ix))|0)+Lp;if(E$[0]>Lr)JJ=!JJ;if(E$[0]<Lr)JK=!JK;}AL=K;K=K+1;}return JJ||JK;
},LH:function(){return((((this.AW[0]===this.Bu[0])&&(this.AD[0]===this.BQ[0]))&&(
this.AW[1]===this.AD[1]))&&(this.BQ[1]===this.Bu[1]))||((((this.AW[0]===this.AD[
0])&&(this.BQ[0]===this.Bu[0]))&&(this.AW[1]===this.Bu[1]))&&(this.AD[1]===this.
BQ[1]));},_Init:function(aArg){C.Ao._Init.call(this,aArg);this.__proto__=C.GI;},
_className:"Core::QuadView"};C.A4={Q:B.qL,Ga:function(I,FT){var N=B._NewObject(C.
Fy,0);N.Bx=this.Q;N.Ac=I;N.EK=FT;this.Aq=N;},Gg:function(I,BA){var A;var Az=this.
CE;var N=this.Aq;var x1=N.Bx[0];var y1=N.Bx[1];var x2=N.Bx[2];var y2=N.Bx[3];var
A9=[I[2]-I[0],I[3]-I[1]];var Ah=x2-x1;var Ad=y2-y1;if(!BA){var BL=[(A=N.Ac)[2]-A[
0],A[3]-A[1]];x1=x1-N.Ac[0];y1=y1-N.Ac[1];if(BL[0]!==A9[0]){var A6=((Az&0x4)===0x4
);var A7=((Az&0x8)===0x8);var B3=((Az&0x1)===0x1);if(!A6&&(B3||!A7))x1=((x1*A9[0
])/BL[0])|0;if(!A7&&(B3||!A6)){x2=x2-N.Ac[0];x2=((x2*A9[0])/BL[0])|0;x2=x2-A9[0];
}else x2=x2-N.Ac[2];x1=x1+I[0];x2=x2+I[2];if(!B3){if(A6&&!A7)x2=x1+Ah;else if(!A6&&
A7)x1=x2-Ah;else{x1=x1+((((x2-x1)-Ah)/2)|0);x2=x1+Ah;}}}else{x2=x2-N.Ac[2];x1=x1+
I[0];x2=x2+I[2];}if(BL[1]!==A9[1]){var A8=((Az&0x10)===0x10);var A5=((Az&0x20)===
0x20);var B4=((Az&0x2)===0x2);if(!A8&&(B4||!A5))y1=((y1*A9[1])/BL[1])|0;if(!A5&&(
B4||!A8)){y2=y2-N.Ac[1];y2=((y2*A9[1])/BL[1])|0;y2=y2-A9[1];}else y2=y2-N.Ac[3];
y1=y1+I[1];y2=y2+I[3];if(!B4){if(A8&&!A5)y2=y1+Ad;else if(!A8&&A5)y1=y2-Ad;else{
y1=y1+((((y2-y1)-Ad)/2)|0);y2=y1+Ad;}}}else{y2=y2-N.Ac[3];y1=y1+I[1];y2=y2+I[3];
}}else{switch(BA){case 3:{x1=I[0];x2=x1+Ah;}break;case 4:{x2=I[2];x1=x2-Ah;}break;
case 1:{y1=I[1];y2=y1+Ad;}break;case 2:{y2=I[3];y1=y2-Ad;}break;default:;}if((BA===
3)||(BA===4)){var A8=((Az&0x10)===0x10);var A5=((Az&0x20)===0x20);var B4=((Az&0x2
)===0x2);if(B4){y1=I[1];y2=I[3];}else if(A8&&!A5){y1=I[1];y2=y1+Ad;}else if(A5&&
!A8){y2=I[3];y1=y2-Ad;}else{y1=I[1]+((((I[3]-I[1])-Ad)/2)|0);y2=y1+Ad;}}if((BA===
1)||(BA===2)){var A6=((Az&0x4)===0x4);var A7=((Az&0x8)===0x8);var B3=((Az&0x1)===
0x1);if(B3){x1=I[0];x2=I[2];}else if(A6&&!A7){x1=I[0];x2=x1+Ah;}else if(A7&&!A6){
x2=I[2];x1=x2-Ah;}else{x1=I[0]+((((I[2]-I[0])-Ah)/2)|0);x2=x1+Ah;}}}N.isEmpty=(x1>=
x2)||(y1>=y2);if(((this.F&0x100)===0x100))this.Q=[x1,y1,x2,y2];else{this.S([x1,y1
,x2,y2]);this.Aq=N;}return[x2-x1,y2-y1];},Gu:function(aOffset,FS){if(FS)this.Q=B.
tX(this.Q,aOffset);else this.S(B.tX(this.Q,aOffset));},GetExtent:function(){return this.
Q;},S:function(D){var A;if(B.tI(D,this.Q))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.Ab(this.Q);this.Aq=null;this.Q=D;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ab(this.Q);if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000
)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.BF],this);}},_Init:
function(aArg){C.Ao._Init.call(this,aArg);this.__proto__=C.A4;},_className:"Core::RectView"
};C.O={Ae:null,Aj:null,Ii:null,AY:null,CS:null,Fk:null,BG:null,GH:255,Bz:function(
aArg){this.CD();},Cr:function(AE,aClip,aOffset,As,aBlend){var A;As=((As+1)*this.
GH)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.Mw(AE,aClip,B.tV(aOffset,this.Q.
slice(0,2)),As,aBlend);},Fs:function(Ap,M,B9,FQ,FU){var A;var H=this.Aj;var Fd=null;
var Ag=A0;var Cb=null;var JR=!!this.CS&&(!!this.CS.B_||!!this.CS.Ae);if(((A=B.it(
Ap,this.Q))[0]>=A[2])||(A[1]>=A[3]))return null;Ap=B.tW(Ap,this.Q.slice(0,2));while(
!!H){if(((H.F&0x400)===0x400)&&!Cb){Cb=H.R;while(!!Cb&&!((Cb.F&0x200)===0x200))Cb=
Cb.R;if(!!Cb)Ag=B.it(Ap,Cb.GetExtent());else Ag=A0;}if(Cb===H){Cb=null;Ag=A0;}if((((((
H.F&0x8)===0x8)&&((H.F&0x10)===0x10))&&!((H.F&0x40000)===0x40000))&&!((H.F&0x20000
)===0x20000))&&(!((H.F&0x10000)===0x10000)||((this.AY.AB===H)&&!JR))){var Bx=H.GetExtent(
);var Id=FQ;var Fc=null;if(Id===H)Id=null;if(((H.F&0x400)===0x400)){if(!(((A=B.it(
Bx,Ag))[0]>=A[2])||(A[1]>=A[3])))Fc=H.Fs(Ag,M,B9,Id,FU);}else if(!(((A=B.it(Bx,Ap
))[0]>=A[2])||(A[1]>=A[3]))||(FQ===H))Fc=H.Fs(Ap,M,B9,Id,FU);H=H.R;if(!!Fc){if(!
Fd||((Fc.Gj<Fd.Gj)&&(Fc.Gj>=0)))Fd=Fc;if(!Fc.Gj)H=null;}}else H=H.R;}return Fd;}
,AM:function(D5,E9){var A;var Mz=this.F;C.A4.AM.call(this,D5,E9);var EC=this.F^Mz;
if(!!this.BG&&((EC&0x40)===0x40)){if(((this.F&0x40)===0x40))this.BG.AM(0x40,0x0);
else this.BG.AM(0x0,0x40);}if(!!this.AY&&((EC&0x40)===0x40)){if(((this.F&0x40)===
0x40)&&((this.AY.AB.F&0x14)===0x14))this.AY.AB.AM(0x40,0x0);else this.AY.AB.AM(0x0
,0x40);}if(!!EC){this.F=this.F|0x8000;B.lz([this,this.BF],this);}},S:function(D){
var A;if(B.tI(D,this.Q))return;var EJ=[(A=this.Q)[2]-A[0],A[3]-A[1]];var JW=[D[2
]-D[0],D[3]-D[1]];var Ge=!B.tH(EJ,JW);C.A4.S.call(this,D);if((Ge&&(EJ[0]>0))&&(EJ[
1]>0)){var Ac=[].concat(AA,EJ);var H=this.Ae;while(!!H){if((!H.Aq&&(H.CE!==0x14)
)&&!((H.F&0x400)===0x400))H.Ga(Ac,null);H=H.P;}}if(Ge){this.F=this.F|0x5000;B.lz([
this,this.BF],this);}},Lg:function(Al){var K3=(C.KeyEvent.isPrototypeOf(Al)?Al:null
);var C7=this.Ii;if(!K3)return null;while(!!C7&&(!C7.Bo||!C7.Bt(K3)))C7=C7.P;return C7;
},Mw:function(AE,aClip,aOffset,As,aBlend){var A;var H=this.Ae;var KP=A0;var Le=true;
this.LB(AE,aClip,aOffset,As,aBlend);while(!!H){if(((H.F&0x200)===0x200)){var Ld=(
C.HV.isPrototypeOf(H)?H:null);KP=B.it(aClip,B.tX(Ld.Q,aOffset));Le=((Ld.F&0x1)===
0x1);}if(((H.F&0x1)===0x1)){if(((H.F&0x400)===0x400)){if(Le){var Ag=B.it(B.tX(H.
GetExtent(),aOffset),KP);if(!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3])))H.Cr(AE,Ag,aOffset
,As,aBlend);}}else{var Ag=B.it(B.tX(H.GetExtent(),aOffset),aClip);if(!((Ag[0]>=Ag[
2])||(Ag[1]>=Ag[3])))H.Cr(AE,Ag,aOffset,As,aBlend);}}H=H.P;}this.LE(AE,aClip,aOffset
,As,aBlend);},MV:function(){var A;var JH=((this.F&0x1000)===0x1000);var Eb=[0,0,(
A=this.Q)[2]-A[0],A[3]-A[1]];var DK=false;var F_=A0;var JF=A0;var H=this.Aj;var Cb=
null;while(!!H){if(((H.F&0x800)===0x800)){DK=true;H.F=H.F&~0x800;}if(DK&&((H.F&0x200
)===0x200))DK=false;H=H.R;}DK=false;H=this.Ae;if(JH){this.F=this.F&~0x1000;JH=!((
Eb[0]>=Eb[2])||(Eb[1]>=Eb[3]));}this.F=this.F|0x2000;while(!!H){if(((H.F&0x400)===
0x400)){if(!!H.Aq&&(H.Aq.EK!==Cb))H.Aq=null;if((!H.Aq&&DK)&&(H.CE!==0x14))H.Ga(JF
,Cb);}if(!!H.Aq){if(JH&&!((H.F&0x400)===0x400))H.Gg(Eb,0);if(DK&&((H.F&0x400)===
0x400))H.Gg(JF,0);}if(((H.F&0x200)===0x200)){DK=((H.F&0x1000)===0x1000);Cb=(C.HV.
isPrototypeOf(H)?H:null);if(DK){H.F=H.F&~0x1000;F_=Cb.Q;JF=F_;DK=!((F_[0]>=F_[2]
)||(F_[1]>=F_[3]));}if(DK)this.Ab(Cb.Q);}H=H.P;}this.F=this.F&~0x2000;this.KE([Eb[
2]-Eb[0],Eb[3]-Eb[1]]);},BF:function(Ak){var A;var M3=((this.F&0x1000)===0x1000);
if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.MV();}if(((this.F&0x8000
)===0x8000)||M3){this.F=this.F&~0x8000;this.GL(this.F);}},Bp:function(D){var A;if(
!!D&&(D.G!==this))throw new Error(B8);if(!!D&&!((D.F&0x14)===0x14))D=null;if(!!D&&((
D.F&0x10000)===0x10000))D=null;if(D===this.BG)return;if(!!this.BG)this.BG.AM(0x0
,0x60);this.BG=D;if(!!D){if(((this.F&0x40)===0x40))D.AM(0x60,0x0);else D.AM(0x20
,0x0);}},AN:function(D){if(D)this.AM(0x10,0x0);else this.AM(0x0,0x10);},I9:function(
D){var A;if(D>255)D=255;if(D<0)D=0;if(D===this.GH)return;this.GH=D;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ab(this.Q);},CH:function(D){if(D)this.AM(0x1,0x0);else
this.AM(0x0,0x1);},LE:function(AE,aClip,aOffset,As,aBlend){},LB:function(AE,aClip
,aOffset,As,aBlend){},GetMinimalSize:function(){return AA;},KC:function(Bi,Cl,D4
,Dj,Dk,G0,C6,DF,Ck,Ci,Cj){var A;if(!this.AY){this.KA(Bi,Cl,D4,Dj,Dk,null,null,Ck
,Ci,Cj);return;}var EI=this.AY;var Bk=EI.P;if(((Bi.F&0x10000)===0x10000)&&(this.
AY.AB!==Bi))throw new Error(BW);var Dn=B._NewObject(C.IB,0);var Ca=EI.Ca;var Cd=
null;var By=null;if(!!Bk){Cd=Bk.Cd;By=Bk.By;}if(!!Bk&&!!EI.Fj)Cd=EI.Fj;if(!!Bk&&
!!C6)By=C6;if(!!G0)Ca=G0;if(!Cl)Cl=B._GetAutoObject(B.uT.GJ);if(!D4)D4=Cl;if(!Dk
)Dk=Dj;if(!Dj)Dj=Dk;Dn.Ca=D4;Dn.By=Dj;Dn.Cd=Dk;Dn.Fj=DF;Dn.AB=Bi;Dn.P=this.AY.P;
this.AY.P=null;this.AY=Dn;if(this.BG===Bi)this.Bp(null);EI.AB.AM(0x0,0x10040);if(((
this.F&0x40)===0x40)&&((Bi.F&0x4)===0x4))Bi.AM(0x10040,0x0);else Bi.AM(0x10000,0x0
);if(!!By){this.BT(Bk.AB,By.Hh(),null,null,Cj);this.BT(EI.AB,Ca.Eg(),null,null,true
);this.BT(Dn.AB,Cl.Eh(),Ck,Ci,true);}else if(!!Cd){this.BT(Bk.AB,Cd.Hi(),null,null
,Cj);this.BT(EI.AB,Ca.Eg(),null,null,true);this.BT(Dn.AB,Cl.Eh(),Ck,Ci,true);}else
if(!!Ca){this.BT(EI.AB,Ca.Eg(),null,null,Cj);this.BT(Dn.AB,Cl.Eh(),Ck,Ci,true);}
else this.BT(Dn.AB,Cl.Eh(),Ck,Ci,Cj);},Ke:function(Bi,G0,C6,DF,Ck,Ci,Cj){var A;if(
!this.AY)return;if(!Bi)return;var Ba=this.AY;var Bk=this.AY.P;var Gd=null;while((
!!Ba&&(Ba.AB!==Bi))&&!!Ba.P){Gd=Ba;Ba=Bk;Bk=Ba.P;}if(!Ba||(Ba.AB!==Bi))throw new
Error(D3);if(!Gd){this.AY=Bk;Ba.P=null;}else{Gd.P=Bk;Ba.P=null;}Ba.AB.AM(0x0,0x10040
);if(((((this.F&0x40)===0x40)&&!!Bk)&&!Gd)&&((Bk.AB.F&0x4)===0x4))Bk.AB.AM(0x40,
0x0);var Ca=Ba.Ca;var Cd=null;var By=null;if(!!Bk)Cd=Bk.Cd;if(!!Bk&&!!Ba.Fj)Cd=Ba.
Fj;if(!!Bk&&!!DF)Cd=DF;if(!!Gd&&!!Bk)By=Bk.By;if((!!Gd&&!!Bk)&&!!C6)By=C6;if(!!G0
)Ca=G0;if(!!By){this.BT(Bk.AB,By.Hh(),null,null,Cj);this.BT(Ba.AB,Ca.Eg(),Ck,Ci,
true);}else if(!!Cd){this.BT(Bk.AB,Cd.Hi(),null,null,Cj);this.BT(Ba.AB,Ca.Eg(),Ck
,Ci,true);}else this.BT(Ba.AB,Ca.Eg(),Ck,Ci,Cj);},KA:function(Bi,Cl,D4,Dj,Dk,C6,
DF,Ck,Ci,Cj){var A;if(!Bi)return;if(!!this.AY&&(this.AY.AB===Bi)){this.KC(Bi,Cl,
D4,Dj,Dk,null,C6,DF,Ck,Ci,Cj);return;}if(((Bi.F&0x10000)===0x10000))throw new Error(
BW);var Ba=B._NewObject(C.IB,0);if(!!this.AY&&!this.AY.By){if(!DF)DF=C6;if(!C6)C6=
DF;}var By=null;if(!!this.AY)By=this.AY.By;if(!!this.AY&&!!C6)By=C6;if(!Cl)Cl=B.
_GetAutoObject(B.uT.GJ);if(!D4)D4=Cl;if(!Dk)Dk=Dj;if(!Dj)Dj=Dk;Ba.Ca=D4;Ba.By=Dj;
Ba.Cd=Dk;Ba.Fj=DF;if(this.BG===Bi)this.Bp(null);if(!!this.AY)this.AY.AB.AM(0x0,0x40
);if(((this.F&0x40)===0x40)&&((Bi.F&0x4)===0x4))Bi.AM(0x10040,0x0);else Bi.AM(0x10000
,0x0);Ba.AB=Bi;Ba.P=this.AY;this.AY=Ba;if(!!By){this.BT(this.AY.P.AB,By.Hh(),null
,null,Cj);this.BT(Bi,Cl.Eh(),Ck,Ci,true);}else this.BT(Bi,Cl.Eh(),Ck,Ci,Cj);},DispatchEvent:
function(Al){var A;var H=this.BG;var U=(C.O.isPrototypeOf(H)?H:null);var AV=null;
var JR=!!this.CS&&(!!this.CS.B_||!!this.CS.Ae);if(!!H&&((((H.F&0x10000)===0x10000
)||((H.F&0x40000)===0x40000))||((H.F&0x20000)===0x20000))){H=null;U=null;}if(!!this.
AY&&!JR)AV=this.AY.AB.DispatchEvent(Al);if(!AV&&!!U)AV=U.DispatchEvent(Al);else if(
!AV&&!!H)AV=H.Bt(Al);if(!AV)AV=this.Bt(Al);if(!AV)AV=this.Lg(Al);return AV;},BroadcastEventAtPosition:
function(Al,KI,aFilter){var A;var H=this.Aj;var AV=null;while(!!H&&!AV){if((!aFilter||((
A=aFilter)&&((H.F&A)===A)))&&B.qH(H.GetExtent(),KI)){var U=(C.O.isPrototypeOf(H)?
H:null);if(!!U)AV=U.BroadcastEventAtPosition(Al,B.tU(KI,U.Q.slice(0,2)),aFilter);
else AV=H.Bt(Al);}H=H.R;}if(!AV)AV=this.Bt(Al);return AV;},BroadcastEvent:function(
Al,aFilter){var A;var H=this.Aj;var AV=null;while(!!H&&!AV){if(!aFilter||((A=aFilter
)&&((H.F&A)===A))){var U=(C.O.isPrototypeOf(H)?H:null);if(!!U)AV=U.BroadcastEvent(
Al,aFilter);else AV=H.Bt(Al);}H=H.R;}if(!AV)AV=this.Bt(Al);if(!AV)AV=this.Lg(Al);
return AV;},KE:function(aSize){},GL:function(Fa){},CD:function(){this.F=this.F|0x8000;
B.lz([this,this.BF],this);},Ab:function(Ap){var A;var U=this;while(!!U&&!((Ap[0]>=
Ap[2])||(Ap[1]>=Ap[3]))){if(!U.G&&(U!==this)){U.Ab(Ap);return;}if(!((U.F&0x1)===
0x1))return;Ap=B.it(B.tX(Ap,U.Q.slice(0,2)),U.Q);U=U.G;}},IM:function(J,aFilter){
var A;if(!J||(J.G!==this))return null;var EH=J.P;var EM=J.R;var G9=0x10000;if(((
aFilter&0x10000)===0x10000))G9=0x0;while(!!EH||!!EM){if((!!EH&&(!aFilter||((A=aFilter
)&&((EH.F&A)===A))))&&(!G9||!((A=G9)&&((EH.F&A)===A))))return EH;if((!!EM&&(!aFilter||((
A=aFilter)&&((EM.F&A)===A))))&&(!G9||!((A=G9)&&((EM.F&A)===A))))return EM;if(!!EH
)EH=EH.P;if(!!EM)EM=EM.R;}return null;},BT:function(DD,Ay,Ck,Ci,Cj){var A;if(!DD
)return;if(!Ay)throw new Error(E3);if((!!Ay.O||!!Ay.G)||!!Ay.CA)throw new Error(
Ch);if(!!DD.G&&(DD.G!==this))throw new Error(E4);if(!this.CS)this.CS=B._NewObject(
C.KD,0);Ay.G=this;Ay.O=DD;Ay.Il=Ci;Ay.JZ=Ck;if(!!DD.Fk)DD.Fk.CA.L6(DD.Fk);DD.Fk=
Ay;DD.F=DD.F|0x20000;if((Cj&&!!this.CS.Aj)&&!this.CS.Aj.IQ())(B.uT.Hm.isPrototypeOf(
A=this.CS.Aj)?A:null).J_(Ay);else{var CA=B._NewObject(B.uT.Hm,0);CA.J_(Ay);this.
CS.L_(CA,false);}},HX:function(J){var A;if(!J)throw new Error(Ey);if(J.G!==this)
throw new Error(E5);if(!J.P)return;var FV=this.Aj;if(((FV===J)||!FV)||(FV.P===J)
)return;if(((J.F&0x401)===0x401)){if(!!J.R&&!!J.Aq)J.R.F=J.R.F|0x800;J.F=J.F|0x800;
this.F=this.F|0x4000;B.lz([this,this.BF],this);}if(((J.F&0x200)===0x200)){if(!!J.
R)J.R.F=J.R.F|0x800;this.F=this.F|0x4000;B.lz([this,this.BF],this);}if(!!J.R)J.R.
P=J.P;else this.Ae=J.P;J.P.R=J.R;J.R=FV;J.P=FV.P;FV.P=J;if(!!J.P)J.P.R=J;else this.
Aj=J;if(((J.F&0x1)===0x1))this.Ab(J.GetExtent());},HW:function(J){var A;if(!J)throw new
Error(FO);if(J.G!==this)throw new Error(E5);if((((J.F&0x401)===0x401)&&!!J.R)&&!
!J.Aq){J.R.F=J.R.F|0x800;this.F=this.F|0x4000;B.lz([this,this.BF],this);}if(((J.
F&0x200)===0x200)){if(!!J.R)J.R.F=J.R.F|0x800;this.F=this.F|0x4000;B.lz([this,this.
BF],this);}J.Aq=null;if(this.BG===J)this.Bp(this.IM(J,0x14));if(!!J.R)J.R.P=J.P;
if(!!J.P)J.P.R=J.R;if(this.Ae===J)this.Ae=J.P;if(this.Aj===J)this.Aj=J.R;J.G=null;
J.P=null;J.R=null;if(((J.F&0x1)===0x1))this.Ab(J.GetExtent());},Ai:function(J,E_
){var A;if(!J)throw new Error(GO);if(!!J.G)throw new Error(GP);var D6=null;if((E_<
0)&&!!this.Aj){D6=this.Aj;E_=E_+1;}while(((E_<0)&&!!D6)&&!!D6.R){D6=D6.R;E_=E_+1;
}if(!D6){J.G=this;J.R=this.Aj;if(!!this.Aj)this.Aj.P=J;if(!this.Ae)this.Ae=J;this.
Aj=J;}else{J.G=this;J.R=D6.R;J.P=D6;D6.R=J;if(!!J.R)J.R.P=J;else this.Ae=J;}if(((
J.F&0x1)===0x1))this.Ab(J.GetExtent());if(((!this.BG&&((J.F&0x4)===0x4))&&((J.F&
0x10)===0x10))&&!((J.F&0x10000)===0x10000))this.Bp(J);if(((J.F&0x401)===0x401)){
J.F=J.F|0x800;this.F=this.F|0x4000;B.lz([this,this.BF],this);}if(((J.F&0x200)===
0x200)){J.F=J.F|0x800;this.F=this.F|0x4000;B.lz([this,this.BF],this);}},_Init:function(
aArg){C.A4._Init.call(this,aArg);this.__proto__=C.O;this.F=0x1F;this.Bz(aArg);},
_Mark:function(E){var A;C.A4._Mark.call(this,E);if((A=this.Ae)&&(A._cycle!=E))A.
_Mark(A._cycle=E);if((A=this.Aj)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ii
)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.AY)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.CS)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Fk)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.BG)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:
"Core::Group"};C.Root={Cc:null,AG:B.tY(10,null,null),FY:null,D8:null,He:0,AX:0,BB:
B.tY(10,0,null),Ic:B.tY(10,B.qL,null),CQ:B.tY(10,0,null),DG:B.tY(10,B.qK,null),F0:
B.tY(10,0,null),D7:B.tY(10,B.qK,null),CP:B.tY(10,B.qK,null),B$:B.tY(10,B.qK,null
),Dl:B.tY(10,B.qK,null),Am:0,If:0,Ie:0,BO:B.tY(4,0,null),Bm:B.tY(4,B.qL,null),Bl:
0,G7:0,Gc:0,JI:true,Kh:function(){return this;},Cr:function(AE,aClip,aOffset,As,
aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.jO;if(!fullScreenUpdate)AE.
IL(aClip,B.tX(B.tX(aClip,aOffset),this.Q.slice(0,2)),0x00000000,0x00000000,0x00000000
,0x00000000,false);C.O.Cr.call(this,AE,aClip,aOffset,As,aBlend);},AM:function(D5
,E9){var A;C.O.AM.call(this,D5,E9);if(!this.G&&(((D5&0x1)===0x1)||((E9&0x1)===0x1
)))this.Ab([0,0,(A=this.Q)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((D5&0x2)===0x2)||((
E9&0x2)===0x2)))this.Ab([0,0,(A=this.Q)[2]-A[0],A[3]-A[1]]);},Bp:function(D){if((
D!==null)||!D)C.O.Bp.call(this,D);},I9:function(D){var A;var MA=this.GH;C.O.I9.call(
this,D);if(((MA!==this.GH)&&!this.G)&&((this.F&0x1)===0x1))this.Ab([0,0,(A=this.
Q)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(Al){if(!!Al){Al.Gs=!!this.AX;if(
!!this.AX)Al.AK=this.AX;}var AV;AV=C.O.DispatchEvent.call(this,Al);this.AX=0;return AV;
},BroadcastEvent:function(Al,aFilter){if(!!Al){Al.Gs=!!this.AX;if(!!this.AX)Al.AK=
this.AX;}var AV=C.O.BroadcastEvent.call(this,Al,aFilter);this.AX=0;return AV;},Ab:
function(Ap){var A;if(this.He>0)throw new Error(GQ);var fullScreenUpdate=false;fullScreenUpdate=
B.jO;if(fullScreenUpdate)Ap=[0,0,(A=this.Q)[2]-A[0],A[3]-A[1]];if(!!this.G){C.O.
Ab.call(this,Ap);return;}Ap=B.it(B.tX(Ap,this.Q.slice(0,2)),this.Q);if((Ap[0]>=Ap[
2])||(Ap[1]>=Ap[3]))return;var K;for(K=0;K<this.Bl;K=K+1)if(!(((A=B.it(this.Bm.Get(
K),Ap))[0]>=A[2])||(A[1]>=A[3]))){this.Bm.Set(K,B.q5(this.Bm.Get(K),Ap));this.BO.
Set(K,B.tr(this.Bm.Get(K)));return;}if(this.Bl<3){this.Bm.Set(this.Bl,Ap);this.BO.
Set(this.Bl,B.tr(Ap));this.Bl=this.Bl+1;return;}var AL;var B0;var G6=0;var G8=0;
var KK=2147483647;this.Bm.Set(this.Bl,Ap);this.BO.Set(this.Bl,B.tr(Ap));for(AL=0;
AL<=this.Bl;AL=AL+1)for(B0=AL+1;B0<=this.Bl;B0=B0+1){var Iw=B.tr(B.q5(this.Bm.Get(
AL),this.Bm.Get(B0)));var Lf=((Iw<<8)/(this.BO.Get(AL)+this.BO.Get(B0)))|0;if(Lf<
KK){KK=Lf;G6=AL;G8=B0;}}this.Bm.Set(G6,B.q5(this.Bm.Get(G6),this.Bm.Get(G8)));this.
BO.Set(G6,B.tr(this.Bm.Get(G6)));if(G8!==this.Bl){this.Bm.Set(G8,this.Bm.Get(this.
Bl));this.BO.Set(G8,this.BO.Get(this.Bl));}},Mu:function(){var BC=B._NewObject(C.
Hk,0);BC.Gs=!!this.AX;if(!!this.AX)BC.AK=this.AX;return BC;},Fb:function(){var BC=
B._NewObject(C.Hj,0);BC.Gs=!!this.AX;if(!!this.AX)BC.AK=this.AX;return BC;},FZ:function(
){var BC=B._NewObject(C.Iz,0);BC.Gs=!!this.AX;if(!!this.AX)BC.AK=this.AX;return BC;
},Mv:function(Ak){var K;var Fd=false;for(K=0;K<10;K=K+1)if(!!this.AG.Get(K)){var
Ar=this.B$.Get(K);var U=this.AG.Get(K).G;while(!!U&&(U!==this)){Ar=B.tU(Ar,U.Q.slice(
0,2));U=U.G;}if(!U&&(this.AG.Get(K)!==this)){var tmp=this.AG.Get(K);this.Am=K;this.
AG.Set(K,null);tmp.Bt(this.Fb().InitializeUp(K,this.D7.Get(K),this.DG.Get(K),this.
CQ.Get(K),this.BB.Get(K)+1,this.CP.Get(K),false,this.B$.Get(K),this.Dl.Get(K)));
this.BroadcastEvent(this.FZ().InitializeUp(K,this.BB.Get(K)+1,false,tmp,this.B$.
Get(K)),0x18);}else{this.CQ.Set(K,(this.D8.AK-this.F0.Get(K))|0);if(this.CQ.Get(
K)<10)this.CQ.Set(K,10);this.Am=K;this.AG.Get(K).Bt(this.Fb().InitializeHold(K,Ar
,this.DG.Get(K),this.CQ.Get(K),this.BB.Get(K)+1,this.CP.Get(K),this.B$.Get(K),this.
Dl.Get(K)));Fd=true;}}if(!Fd)this.D8.AN(false);},GetFPS:function(){var ticksCount=
0;var KX=0;ticksCount=((new Date).getTime()-B.qG)|0;if(!!this.If&&(ticksCount>this.
If))KX=((this.Ie*1000)/((ticksCount-this.If)|0))|0;this.Ie=0;this.If=ticksCount;
return KX;},Update:function(){var A;if(!this.FY)this.FY=B._NewObject(B.Graphics.
Canvas,0);this.FY.Kv([(A=this.Q)[2]-A[0],A[3]-A[1]]);this.FY.Update();return this.
UpdateGE20(this.FY);},UpdateGE20:function(AE){if(!this.BeginUpdate())return A0;var
DO=this.UpdateCanvas(AE,AA);this.EndUpdate();return DO;},EndUpdate:function(){if(
this.Bl>0){this.Ie=this.Ie+1;this.Bl=0;}},UpdateCanvas:function(AE,aOffset){var A;
var DO=A0;var Mn=[].concat(aOffset,B.tV(AE.FrameSize,aOffset));var K;var AL=this.
Bl;this.He=this.He+1;for(K=0;(K<AL)&&(K<4);K=K+1)if(this.BO.Get(K)>0){this.Cr(AE
,B.tW(this.Bm.Get(K),aOffset),[-aOffset[0],-aOffset[1]],255,true);DO=B.q5(DO,B.it(
Mn,this.Bm.Get(K)));}else AL=AL+1;this.He=this.He-1;if(!((DO[0]>=DO[2])||(DO[1]>=
DO[3])))return B.tW(DO,aOffset);else return DO;},GetUpdateRegion:function(H3){var
K;var AL=this.Bl;if(H3<0)return A0;for(K=0;(K<AL)&&(K<4);K=K+1)if(!this.BO.Get(K
)){AL=AL+1;H3=H3+1;}else if(K===H3)return this.Bm.Get(K);return A0;},BeginUpdate:
function(){var K;var AL;var B0;for(AL=0;AL<(this.Bl-1);AL=AL+1)if(this.BO.Get(AL
)>0)for(B0=AL+1;B0<this.Bl;B0=B0+1)if(this.BO.Get(B0)>0){var Iw=B.tr(B.q5(this.Bm.
Get(AL),this.Bm.Get(B0)));if(((Iw-this.BO.Get(AL))-this.BO.Get(B0))<0){this.Bm.Set(
AL,B.q5(this.Bm.Get(AL),this.Bm.Get(B0)));this.BO.Set(AL,Iw);this.BO.Set(B0,0);}
}for(K=this.Bl-1;K>=0;K=K-1)if(!this.BO.Get(K))this.Bl=this.Bl-1;return this.Bl;
},DoesNeedUpdate:function(){if(this.Bl>0)return true;return false;},Initialize:function(
aSize){this.S([].concat(AA,aSize));if(this.JI)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Ab(this.Q);return this;},SetRootFocus:function(Jx){if(Jx===this.JI)return false;
this.JI=Jx;if(!Jx)this.AM(0x0,0x40);else this.AM(0x40,0x0);return true;},SetUserInputTimestamp:
function(Mj){this.AX=Mj;},DriveKeyboardHitting:function(A_,GW,C4){var A;var J5=!
!this.Cc;if(!!this.Cc&&((!C4||(this.G7!==A_))||(this.Gc!==GW))){var BC=null;var H=(
C.Ao.isPrototypeOf(A=this.Cc)?A:null);var C7=(C.DS.isPrototypeOf(A=this.Cc)?A:null
);if(!!this.G7)BC=B._NewObject(C.KeyEvent,0).Initialize(this.G7,false);if(this.Gc
!==0x00)BC=B._NewObject(C.KeyEvent,0).Initialize2(this.Gc,false);if(!!C7)C7.Bt(BC
);else if(!!H)H.Bt(BC);this.G7=0;this.Gc=0x00;this.Cc=null;}if(!!this.Cc){var BC=
null;var H=(C.Ao.isPrototypeOf(A=this.Cc)?A:null);var C7=(C.DS.isPrototypeOf(A=this.
Cc)?A:null);if(!!A_)BC=B._NewObject(C.KeyEvent,0).Initialize(A_,true);if(this.Gc
!==0x00)BC=B._NewObject(C.KeyEvent,0).Initialize2(GW,true);if(!!C7)C7.Bt(BC);else
if(!!H)H.Bt(BC);}if(!this.Cc&&C4){if(!!A_)this.Cc=this.DispatchEvent(B._NewObject(
C.KeyEvent,0).Initialize(A_,true));if(GW!==0x00)this.Cc=this.DispatchEvent(B._NewObject(
C.KeyEvent,0).Initialize2(GW,true));if(!(C.DS.isPrototypeOf(A=this.Cc)?A:null)&&
!(C.Ao.isPrototypeOf(A=this.Cc)?A:null))this.Cc=null;this.G7=A_;this.Gc=GW;J5=J5||
!!this.Cc;}this.AX=0;return J5;},DriveCursorMovement:function(Bv){return this.DriveMultiTouchMovement(
this.Am,Bv);},DriveMultiTouchMovement:function(M,Bv){if((M<0)||(M>9)){this.AX=0;
return false;}var Cp=B.tU(Bv,this.B$.Get(M));this.B$.Set(M,Bv);if(!this.AG.Get(M
)||B.tH(Cp,AA)){this.AX=0;return false;}var Ar=Bv;var U=this.AG.Get(M).G;while(!
!U&&(U!==this)){Ar=B.tU(Ar,U.Q.slice(0,2));U=U.G;}if(!U&&(this.AG.Get(M)!==this)
){var tmp=this.AG.Get(M);this.Am=M;this.AG.Set(M,null);tmp.Bt(this.Fb().InitializeUp(
M,this.D7.Get(M),this.DG.Get(M),this.CQ.Get(M),this.BB.Get(M)+1,this.CP.Get(M),false
,this.B$.Get(M),this.Dl.Get(M)));this.BroadcastEvent(this.FZ().InitializeUp(M,this.
BB.Get(M)+1,false,tmp,Bv),0x18);}else{this.D7.Set(M,Ar);this.Am=M;this.AG.Get(M).
Bt(this.Mu().Initialize(M,Ar,this.DG.Get(M),Cp,this.CQ.Get(M),this.BB.Get(M)+1,this.
CP.Get(M),Bv,this.Dl.Get(M)));}this.AX=0;return true;},DriveCursorHitting:function(
C4,M,Bv){return this.DriveMultiTouchHitting(C4,M,Bv);},DriveMultiTouchHitting:function(
C4,M,Bv){if((M<0)||(M>9)){this.AX=0;return false;}var ticksCount=this.AX;if(!ticksCount
)ticksCount=((new Date).getTime()-B.qG)|0;var M0=this.AX;this.DriveMultiTouchMovement(
M,Bv);Bv=this.B$.Get(M);this.AX=M0;if(C4)this.Dl.Set(M,Bv);if(C4&&!this.AG.Get(M
)){var CT;var Ar=Bv;if(B.qH(this.Ic.Get(M),Bv)&&((ticksCount-this.F0.Get(M))<=250
))this.BB.Set(M,this.BB.Get(M)+1);else this.BB.Set(M,0);this.Ic.Set(M,B.tX(E6,Bv
));this.F0.Set(M,ticksCount);CT=this.Fs(B.tX(E6,Bv),M,this.BB.Get(M)+1,null,0x0);
if(!!CT){this.BroadcastEvent(this.FZ().InitializeDown(M,this.BB.Get(M)+1,false,CT.
Ao,Bv),0x18);this.AG.Set(M,CT.Ao);this.CP.Set(M,CT.DT);}else{this.AG.Set(M,null);
this.CP.Set(M,AA);this.AX=0;return false;}var U=CT.Ao.G;while(!!U&&(U!==this)){Ar=
B.tU(Ar,U.Q.slice(0,2));U=U.G;}this.DG.Set(M,Ar);this.D7.Set(M,Ar);this.CQ.Set(M
,0);this.D8.AN(true);this.Am=M;this.AG.Get(M).Bt(this.Fb().InitializeDown(M,Ar,this.
BB.Get(M)+1,this.CP.Get(M),false,Bv));this.AX=0;return true;}if(!C4&&!!this.AG.Get(
M)){var Ar=Bv;var U=this.AG.Get(M).G;while(!!U&&(U!==this)){Ar=B.tU(Ar,U.Q.slice(
0,2));U=U.G;}if(!U)Ar=this.D7.Get(M);this.Am=M;var tmp=this.AG.Get(M);this.AG.Set(
M,null);tmp.Bt(this.Fb().InitializeUp(M,Ar,this.DG.Get(M),this.CQ.Get(M),this.BB.
Get(M)+1,this.CP.Get(M),false,Bv,this.Dl.Get(M)));this.BroadcastEvent(this.FZ().
InitializeUp(M,this.BB.Get(M)+1,false,tmp,Bv),0x18);this.AX=0;return true;}this.
AX=0;return false;},L7:function(DE,KH,FU){if(DE===this)DE=null;if(!this.AG.Get(this.
Am))return;var CT;CT=this.Fs(B.tX(E6,this.B$.Get(this.Am)),this.Am,1,DE,FU);if(!
!CT&&(this.AG.Get(this.Am)!==CT.Ao))this.Kd(CT.Ao,CT.DT);if(!CT&&(this.AG.Get(this.
Am)!==KH))this.Kd(KH,AA);},Kd:function(DE,CM){if(!this.AG.Get(this.Am)||(this.AG.
Get(this.Am)===DE))return;var tmp=this.AG.Get(this.Am);this.AG.Set(this.Am,null);
tmp.Bt(this.Fb().InitializeUp(this.Am,this.D7.Get(this.Am),this.DG.Get(this.Am),
this.CQ.Get(this.Am),this.BB.Get(this.Am)+1,this.CP.Get(this.Am),true,this.B$.Get(
this.Am),this.Dl.Get(this.Am)));this.BroadcastEvent(this.FZ().InitializeUp(this.
Am,this.BB.Get(this.Am)+1,true,tmp,this.B$.Get(this.Am)),0x18);var Ar=this.B$.Get(
this.Am);var U=null;if(!!DE)U=DE.G;while(!!U&&(U!==this)){Ar=B.tU(Ar,U.Q.slice(0
,2));U=U.G;}if(!U&&(DE!==this)){this.AG.Set(this.Am,null);return;}this.BroadcastEvent(
this.FZ().InitializeDown(this.Am,this.BB.Get(this.Am)+1,true,DE,this.B$.Get(this.
Am)),0x18);var ticksCount=0;ticksCount=((new Date).getTime()-B.qG)|0;this.AG.Set(
this.Am,DE);this.CP.Set(this.Am,CM);this.DG.Set(this.Am,Ar);this.D7.Set(this.Am,
Ar);this.BB.Set(this.Am,0);this.CQ.Set(this.Am,0);this.F0.Set(this.Am,ticksCount
);this.Dl.Set(this.Am,this.B$.Get(this.Am));this.AG.Get(this.Am).Bt(this.Fb().InitializeDown(
this.Am,Ar,this.BB.Get(this.Am)+1,this.CP.Get(this.Am),true,this.Dl.Get(this.Am)
));},_Init:function(aArg){C.O._Init.call(this,aArg);C.Timer._Init.call(this.D8={
L:this},0);(this.AG=[]).__proto__=C.Root.AG;(this.BB=[]).__proto__=C.Root.BB;(this.
Ic=[]).__proto__=C.Root.Ic;(this.CQ=[]).__proto__=C.Root.CQ;(this.DG=[]).__proto__=
C.Root.DG;(this.F0=[]).__proto__=C.Root.F0;(this.D7=[]).__proto__=C.Root.D7;(this.
CP=[]).__proto__=C.Root.CP;(this.B$=[]).__proto__=C.Root.B$;(this.Dl=[]).__proto__=
C.Root.Dl;(this.BO=[]).__proto__=C.Root.BO;(this.Bm=[]).__proto__=C.Root.Bm;this.
__proto__=C.Root;this.F=0x7F;this.D8.FC(50);this.D8.EY=[this,this.Mv];},_Done:function(
){this.__proto__=C.O;this.D8._Done();C.O._Done.call(this);},_ReInit:function(){C.
O._ReInit.call(this);this.D8._ReInit();},_Mark:function(E){var A;C.O._Mark.call(
this,E);if((A=this.Cc)&&(A._cycle!=E))A._Mark(A._cycle=E);B.tQ(this.AG,E);if((A=
this.FY)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.D8)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Core::Root"};C.Event={AK:0,Gs:false,Bz:function(aArg){this.AK=this.
Ho();},Ho:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.qG)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=C.Event;this.Bz(aArg);B.gx++;},_Done:function(
){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Core::Event"};C.KeyEvent={AF:0,Av:0,Down:false,Initialize2:function(A_,C4){this.
AF=0;this.Av=A_;this.Down=C4;if((A_>=0x30)&&(A_<=0x39))this.AF=(10+A_)-48;if((A_>=
0x41)&&(A_<=0x5A))this.AF=(105+A_)-65;if((A_>=0x61)&&(A_<=0x7A))this.AF=(105+A_)-
97;if(A_===0x20)this.AF=131;if(!this.AF)switch(A_){case 0x2B:this.AF=132;break;case
0x2D:this.AF=133;break;case 0x2A:this.AF=134;break;case 0x2F:this.AF=135;break;case
0x3D:this.AF=136;break;case 0x2E:this.AF=137;break;case 0x2C:this.AF=138;break;case
0x3A:this.AF=139;break;case 0x3B:this.AF=140;break;default:;}return this;},Initialize:
function(A_,C4){this.AF=A_;this.Down=C4;this.Av=0x00;var JC=A_-10;var JB=A_-105;
if((JC>=0)&&(JC<=9))this.Av=(48+JC)&0xFFFF;if((JB>=0)&&(JB<=25))this.Av=(65+JB)&
0xFFFF;if(A_===131)this.Av=0x20;if(this.Av===0x00)switch(A_){case 132:this.Av=0x2B;
break;case 133:this.Av=0x2D;break;case 134:this.Av=0x2A;break;case 135:this.Av=0x2F;
break;case 136:this.Av=0x3D;break;case 137:this.Av=0x2E;break;case 138:this.Av=0x2C;
break;case 139:this.Av=0x3A;break;case 140:this.Av=0x3B;break;default:;}return this;
},LJ:function(KG){switch(KG){case 141:return((this.Av>=0x41)&&(this.Av<=0x5A))||((
this.Av>=0x61)&&(this.Av<=0x7A));case 142:return(((this.Av>=0x41)&&(this.Av<=0x5A
))||((this.Av>=0x61)&&(this.Av<=0x7A)))||((this.Av>=0x30)&&(this.Av<=0x39));case
143:return(this.Av>=0x30)&&(this.Av<=0x39);case 144:return(((this.Av>=0x41)&&(this.
Av<=0x46))||((this.Av>=0x61)&&(this.Av<=0x66)))||((this.Av>=0x30)&&(this.Av<=0x39
));case 145:return this.Av!==0x00;case 146:return(this.Av===0x00)&&!!this.AF;case
147:return(((this.AF===6)||(this.AF===7))||(this.AF===4))||(this.AF===5);case 148:
return(this.Av!==0x00)||!!this.AF;default:;}return KG===this.AF;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.Iz={Jk:null,El:B.qK,CI:0,BP:0,Down:false,Db:false,InitializeUp:function(M,B9
,E8,Jz,C5){this.Down=false;this.BP=M;this.CI=B9;this.El=C5;this.Jk=Jz;this.Db=E8;
return this;},InitializeDown:function(M,B9,E8,Jz,C5){this.Down=true;this.BP=M;this.
CI=B9;this.El=C5;this.Jk=Jz;this.Db=E8;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Iz;},_Mark:function(E){var A;C.Event._Mark.
call(this,E);if((A=this.Jk)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};C.Hj={Gp:B.qK,El:B.qK,CI:0,BU:0,Ds:B.qK,C0:B.qK,BP:0,Down:false,Db:false,InitializeHold:
function(M,Ez,GY,GZ,B9,CM,C5,GX){this.Down=true;this.BP=M;this.C0=B.tV(Ez,CM);this.
Ds=B.tV(GY,CM);this.BU=GZ;this.CI=B9;this.El=C5;this.Gp=GX;return this;},InitializeUp:
function(M,Ez,GY,GZ,B9,CM,E8,C5,GX){this.Down=false;this.BP=M;this.C0=B.tV(Ez,CM
);this.Ds=B.tV(GY,CM);this.BU=GZ;this.CI=B9;this.Db=E8;this.El=C5;this.Gp=GX;return this;
},InitializeDown:function(M,Ez,B9,CM,E8,C5){this.Down=true;this.BP=M;this.C0=B.tV(
Ez,CM);this.Ds=B.tV(Ez,CM);this.BU=0;this.CI=B9;this.Db=E8;this.El=C5;this.Gp=C5;
return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Hj;},_className:"Core::CursorEvent"};C.Hk={Gp:B.qK,El:B.qK,CI:0,BU:0,DT:B.qK,Ds:
B.qK,C0:B.qK,BP:0,Initialize:function(M,Ez,GY,aOffset,GZ,Mi,CM,C5,GX){this.BP=M;
this.C0=B.tV(Ez,CM);this.Ds=B.tV(GY,CM);this.DT=aOffset;this.BU=GZ;this.CI=Mi;this.
El=C5;this.Gp=GX;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg
);this.__proto__=C.Hk;},_className:"Core::DragEvent"};C.HV={Cr:function(AE,aClip
,aOffset,As,aBlend){},S:function(D){var A;if(B.tI(D,this.Q))return;var EJ=[(A=this.
Q)[2]-A[0],A[3]-A[1]];var JW=[D[2]-D[0],D[3]-D[1]];var Ge=!B.tH(EJ,JW);var Cp=B.
tU(D.slice(0,2),this.Q.slice(0,2));if(!B.tH(Cp,AA)&&!Ge){var H=this.P;while(!!H&&
!((H.F&0x200)===0x200)){if(((H.F&0x400)===0x400)){var tmp=((H.F&0x100)===0x100);
H.Gu(Cp,tmp);}H=H.P;}}if((Ge&&(EJ[0]>0))&&(EJ[1]>0)){var Ac=this.Q;var H=this.P;
while(!!H&&!((H.F&0x200)===0x200)){if(((H.F&0x400)===0x400)){if(!!H.Aq&&(H.Aq.EK
!==this))H.Aq=null;if(!H.Aq&&(H.CE!==0x14))H.Ga(Ac,this);}H=H.P;}}C.A4.S.call(this
,D);if(!!this.G&&Ge){this.F=this.F|0x1000;if(!((this.G.F&0x2000)===0x2000)){this.
G.F=this.G.F|0x4000;B.lz([A=this.G,A.BF],this);}}},_Init:function(aArg){C.A4._Init.
call(this,aArg);this.__proto__=C.HV;this.F=0x203;},_className:"Core::Outline"};C.
Bg={EF:B.tY(8,null,null),Ao:null,DV:null,Cq:-1,B6:0,BK:0,DR:-1,DY:-1,Cs:24,Dg:0,
EU:null,K4:false,DispatchEvent:function(Al){var A;var result=null;if(((this.DY>=
0)&&(this.DY<this.Dg))&&!this.BG){this.DR=this.DY;this.Ao=(C.Ao.isPrototypeOf(A=
B._NewObject(this.EU,0))?A:null);if(!!this.Aj)this.Aj.P=this.Ao;else this.Ae=this.
Ao;this.Ao.R=this.Aj;this.Aj=this.Ao;this.Ao.G=this;(A=this.DV)?A[1].call(A[0],this
):null;var U=(C.O.isPrototypeOf(A=this.Ao)?A:null);if(!!U)result=U.DispatchEvent(
Al);else result=this.Ao.Bt(Al);if(!!this.Ao.R)this.Ao.R.P=null;else this.Ae=null;
this.Aj=this.Ao.R;this.Ao.R=null;this.Ao.G=null;this.Ao=null;}if(!result)result=
C.O.DispatchEvent.call(this,Al);return result;},GL:function(Fa){var A;if(!this.EU
)return;this.K4=true;var Co;var Ce=((((A=this.Q)[3]-A[1])-1)/this.Cs)|0;var Ib=(((((
A=this.Q)[3]-A[1])+this.Cs)-1)/this.Cs)|0;if(Ib<1)Ib=1;var H_=(Ib/2)|0;var H$=(Ib
/3)|0;if(!H_)H_=1;if(!H$)H$=1;if(0<this.B6){Co=0-H_;Ce=Ce+H$;}else if(Ce>this.Cq
){Co=0-H$;Ce=Ce+H_;}else{Co=this.B6;Ce=this.Cq;}if(Co>=this.Dg){Co=0;Ce=-1;}else
if(Ce<0){Co=0;Ce=-1;}if(Ce>=this.Dg)Ce=this.Dg-1;if(Co<0)Co=0;var Iq=this.B6;var
Ir=this.Cq;var JP=0;var JQ=-1;if(Co>Iq)Iq=Co;if(Ce<Ir)Ir=Ce;if(Iq<=Ir){while((this.
Cq<Ce)&&(this.B6<Iq)){this.In();this.KR();}while((this.B6>Co)&&(this.Cq>Ir)){this.
Lh();this.KQ();}}else{this.Cq=(this.Cq-this.B6)+Co;this.B6=Co;JP=this.B6;JQ=this.
Cq;}while(this.B6<Co)this.In();while(this.Cq>Ce)this.Lh();while(this.B6>Co)this.
KQ();while(this.Cq<Ce)this.KR();var Aa=this.Ae;var BR=this.B6;var Ar=[0,BR*this.
Cs];var Ad=(A=this.Q)[3]-A[1];var KY=this.Cs;var KU=null;while(!!Aa){var G_=B.tU(
Ar,Aa.GetExtent().slice(0,2));var JN=Ar[1];var JO=Ar[1]+KY;var EE=BR;if(!B.tH(G_
,AA))Aa.Gu(G_,true);if(((((EE>=0)&&(EE<=-1))||((BR>=JP)&&(BR<=JQ)))&&(JN<Ad))&&(
JO>0)){this.Ao=Aa;this.DR=EE;(A=this.DV)?A[1].call(A[0],this):null;}Aa=Aa.P;BR=BR+
1;Ar=[Ar[0],Ar[1]+this.Cs];}BR=this.B6;Aa=this.Ae;Ar=[0,BR*this.Cs];while(!!Aa){
var JN=Ar[1];var JO=Ar[1]+KY;var EE=BR;if((((EE>=0)&&(EE<=-1))||((BR>=JP)&&(BR<=
JQ)))&&!((JN<Ad)&&(JO>0))){this.Ao=Aa;this.DR=EE;(A=this.DV)?A[1].call(A[0],this
):null;}if(EE===this.DY)KU=Aa;Aa=Aa.P;BR=BR+1;Ar=[Ar[0],Ar[1]+this.Cs];}this.Ao=
null;this.DR=-1;this.Bp(KU);this.K4=false;},IM:function(J,aFilter){return null;}
,HX:function(J){throw new Error(GR);},HW:function(J){throw new Error(GS);},Ai:function(
J,E_){throw new Error(E7);},Lh:function(){var Aa=this.Aj;if(!Aa)return null;if(Aa===
this.BG)this.Bp(null);this.Cq=this.Cq-1;if(!!Aa.R)Aa.R.P=null;else this.Ae=null;
this.Aj=Aa.R;Aa.R=null;Aa.G=null;Aa.Aq=null;if(this.BK<8){this.EF.Set(this.BK,Aa
);this.BK=this.BK+1;}return Aa;},KR:function(){var A;var Aa=null;if(!this.BK){Aa=(
C.Ao.isPrototypeOf(A=B._NewObject(this.EU,0))?A:null);Aa.I7(0x1D);}else{this.BK=
this.BK-1;Aa=this.EF.Get(this.BK);}this.Cq=this.Cq+1;var Lo=this.Cq;this.DR=Lo;this.
Ao=Aa;(A=this.DV)?A[1].call(A[0],this):null;this.Ao=null;this.DR=-1;if(!!this.Aj
)this.Aj.P=Aa;Aa.G=this;Aa.R=this.Aj;this.Aj=Aa;if(!this.Ae)this.Ae=Aa;if(Lo===this.
DY)this.Bp(Aa);return Aa;},Mo:function(){while(this.BK>0){this.BK=this.BK-1;this.
EF.Set(this.BK,null);}},In:function(){var Aa=this.Ae;if(!Aa)return null;if(Aa===
this.BG)this.Bp(null);this.B6=this.B6+1;if(!!Aa.P)Aa.P.R=null;else this.Aj=null;
this.Ae=Aa.P;Aa.P=null;Aa.G=null;Aa.Aq=null;if(this.BK<8){this.EF.Set(this.BK,Aa
);this.BK=this.BK+1;}return Aa;},KQ:function(){var A;var Aa=null;if(!this.BK){Aa=(
C.Ao.isPrototypeOf(A=B._NewObject(this.EU,0))?A:null);Aa.I7(0x1D);}else{this.BK=
this.BK-1;Aa=this.EF.Get(this.BK);}this.B6=this.B6-1;var Ln=this.B6;this.DR=Ln;this.
Ao=Aa;(A=this.DV)?A[1].call(A[0],this):null;this.Ao=null;this.DR=-1;if(!!this.Ae
)this.Ae.R=Aa;Aa.G=this;Aa.P=this.Ae;this.Ae=Aa;if(!this.Aj)this.Aj=Aa;if(Ln===this.
DY)this.Bp(Aa);return Aa;},Kw:function(D){if(D<0)D=-1;if(D===this.DY)return;this.
DY=D;this.CD();},LV:function(D){var A;if(D<1)D=1;if(D===this.Cs)return;this.Cs=D;
while(!!this.In());this.CD();this.Ab([0,0,(A=this.Q)[2]-A[0],A[3]-A[1]]);},LX:function(
D){var A;if(D<0)D=0;if(D===this.Dg)return;var Ag=[0,0,(A=this.Q)[2]-A[0],A[3]-A[
1]];if(D>this.Dg){Ag=B.uq(Ag,this.Dg*this.Cs);Ag=[].concat(Ag.slice(0,3),D*this.
Cs);}else{Ag=B.uq(Ag,D*this.Cs);Ag=[].concat(Ag.slice(0,3),this.Dg*this.Cs);}this.
Dg=D;this.CD();this.Ab(Ag);},LU:function(D){var A;if(D===this.EU)return;this.EU=
D;while(!!this.In());this.Mo();this.CD();this.Ab([0,0,(A=this.Q)[2]-A[0],A[3]-A[
1]]);},_Init:function(aArg){C.O._Init.call(this,aArg);(this.EF=[]).__proto__=C.Bg.
EF;this.__proto__=C.Bg;this.S(GT);this.EU=B.uO.Text;},_Mark:function(E){var A;C.
O._Mark.call(this,E);B.tQ(this.EF,E);if((A=this.Ao)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.DV)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::VerticalList"
};C.Ji={I3:null,I0:null,EV:null,Dh:null,A1:0,BP:0,AK:0,CI:0,BU:0,DT:B.qK,Ds:B.qK
,C0:B.qK,L8:8,Kp:1,Down:false,Ep:false,Db:false,Cr:function(AE,aClip,aOffset,As,
aBlend){},Bt:function(Al){var A;var AS=(C.Hj.isPrototypeOf(Al)?Al:null);var CR=(
C.Hk.isPrototypeOf(Al)?Al:null);var Ig=this.Ep;var Im;var F$;var Lm;var EN;var KT;
if(!AS&&!CR)return null;Im=(!!AS&&AS.Down)&&!AS.BU;F$=(!!AS&&AS.Down)&&(AS.BU>0);
Lm=(!!AS&&AS.Down)&&(AS.BU>50);EN=!!AS&&!AS.Down;KT=!!CR;if(Im){var JY=0;var G4;
this.A1=this.A1|(1<<AS.BP);for(G4=this.A1&4095;G4>0;G4=G4>>1)if(!!(G4&1))JY=JY+1;
if(JY===1)this.A1=(this.A1|16777216)|(4096<<AS.BP);}if(EN)this.A1=(this.A1&~(1<<
AS.BP))|33554432;if(Lm&&(this.A1<16777216))this.A1=this.A1|67108864;if(EN&&AS.Db
)this.A1=this.A1|67108864;if(EN&&!(this.A1&16777215))this.A1=0;if(F$&&(this.A1>=
67108864))this.Kh().L7(null,null,0x0);if((F$&&!!(this.A1&16777216))&&!!(this.A1&
33554432)){F$=false;EN=true;}if(!!AS&&!(this.A1&(4096<<AS.BP)))return this;if(!!
CR&&!(this.A1&(4096<<CR.BP)))return this;if(EN&&!(this.A1&16777216))return this;
if(((Im||KT)||F$)&&((this.A1<16777216)||(this.A1>=33554432)))return this;if(EN)this.
A1=this.A1&3758100479;if(EN&&!(this.A1&16777215))this.A1=0;if(!!AS){this.Down=Im||
F$;this.Ep=this.IR(AS.C0);this.Ds=AS.Ds;this.C0=AS.C0;this.DT=AA;this.BU=AS.BU;this.
CI=AS.CI;this.Db=AS.Db;this.BP=AS.BP;this.AK=AS.AK;if(AS.Down&&!AS.BU)Ig=false;}
if(!!CR){this.Down=true;this.Ep=this.IR(CR.C0);this.Ds=CR.Ds;this.C0=CR.C0;this.
DT=CR.DT;this.BU=CR.BU;this.CI=CR.CI;this.BP=CR.BP;this.Db=false;this.AK=CR.AK;}
if((!!AS&&this.Down)&&!this.BU)(A=this.Dh)?A[1].call(A[0],this):null;if((this.Down&&
this.Ep)&&!Ig)(A=this.I0)?A[1].call(A[0],this):null;if(((this.Down&&!this.Ep)&&Ig
)||((!this.Down&&this.Ep)&&Ig))(A=this.I3)?A[1].call(A[0],this):null;if(!!AS&&!this.
Down)(A=this.EV)?A[1].call(A[0],this):null;return this;},Fs:function(Ap,M,B9,FQ,
FU){var A;if(!!FQ&&(FQ!==this))return null;if((B9<1)||(B9>this.Kp))return null;if(
this.A1>=33554432)return null;if((this.A1>=16777216)&&!(this.A1&(4096<<M)))return null;
if(this.LH()){var BD=B.it(Ap,this.GetExtent());if(!((BD[0]>=BD[2])||(BD[1]>=BD[3
]))){var EA=B.ts(Ap);var Cp=AA;if(EA[0]<BD[0])Cp=[BD[0]-EA[0],Cp[1]];if(EA[0]>=BD[
2])Cp=[(BD[2]-EA[0])-1,Cp[1]];if(EA[1]<BD[1])Cp=[Cp[0],BD[1]-EA[1]];if(EA[1]>=BD[
3])Cp=[Cp[0],(BD[3]-EA[1])-1];return B._NewObject(C.IA,0).Initialize(this,Cp);}}
else{var AI=B.tY(9,B.qK,null);var K;AI.Set(0,B.ts(Ap));AI.Set(1,AI.Get(0));AI.Set(
2,AI.Get(0));AI.Set(3,AI.Get(0));AI.Set(4,AI.Get(0));AI.Set(1,[Ap[0],AI.Get(1)[1
]]);AI.Set(2,[AI.Get(2)[0],Ap[1]]);AI.Set(3,[Ap[2],AI.Get(3)[1]]);AI.Set(4,[AI.Get(
4)[0],Ap[3]]);AI.Set(5,Ap.slice(0,2));AI.Set(6,[Ap[2],Ap[1]]);AI.Set(7,[Ap[0],Ap[
3]]);AI.Set(8,Ap.slice(2,4));for(K=0;K<9;K=K+1)if(this.IR(AI.Get(K)))return B._NewObject(
C.IA,0).Initialize(this,B.tU(AI.Get(K),AI.Get(0)));}return null;},LY:function(D){
if(D<1)D=1;this.L8=D;},LW:function(D){if(D<1)D=1;this.Kp=D;},AN:function(D){if(D
)this.AM(0x10,0x0);else this.AM(0x0,0x10);},_Init:function(aArg){C.GI._Init.call(
this,aArg);this.__proto__=C.Ji;this.F=0x11B;},_Mark:function(E){var A;C.GI._Mark.
call(this,E);if((A=this.I3)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.
I0)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.EV)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Dh)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
},_className:"Core::SimpleTouchHandler"};C.DS={P:null,EV:null,Dh:null,Fl:0,AK:0,
KB:0,ET:148,AF:0,Av:0,Bo:true,Down:false,Je:false,Fr:false,Bz:function(aArg){var
A;var AB=(C.O.isPrototypeOf(A=this.L)?A:null);if(!AB)throw new Error(GU);this.P=
AB.Ii;AB.Ii=this;},Bt:function(Al){var A;if(!!Al&&Al.LJ(this.ET)){this.Down=Al.Down;
this.AF=Al.AF;this.Av=Al.Av;this.AK=Al.AK;this.Fr=false;if(Al.Down){this.KB=this.
Fl;this.Je=this.Fl>0;if(!this.Je)(A=this.Dh)?A[1].call(A[0],this):null;if(!this.
Fr)this.Fl=this.Fl+1;return!this.Fr;}if(!Al.Down){this.Je=this.Fl>1;this.KB=this.
Fl-1;this.Fl=0;(A=this.EV)?A[1].call(A[0],this):null;return!this.Fr;}}return false;
},_Init:function(aArg){this.__proto__=C.DS;this.Bz(aArg);B.gx++;},_Done:function(
){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.P)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.EV)&&((A=A[0])._cycle!=E
))A._Mark(A._cycle=E);if((A=this.Dh)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((
A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};C.IA={Ao:null,Gj:0,DT:B.qK,Initialize:function(J,aOffset
){this.Ao=J;this.DT=aOffset;this.Gj=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=C.IA;B.gx++;},_Done:function(
){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.Ao)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(
A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.Fy={
EK:null,Bx:B.qL,Ac:B.qL,isEmpty:false,_Init:function(aArg){this.__proto__=C.Fy;B.
gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.EK)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L
)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};C.Hr={Ee:B.qK,Ed:B.qK,_Init:function(aArg){C.Fy._Init.call(
this,aArg);this.__proto__=C.Hr;},_className:"Core::LayoutLineContext"};C.Hs={Ha:
B.qK,G$:B.qK,Ee:B.qK,Ed:B.qK,_Init:function(aArg){C.Fy._Init.call(this,aArg);this.
__proto__=C.Hs;},_className:"Core::LayoutQuadContext"};C.IB={AB:null,P:null,Ca:null
,Cd:null,By:null,Fj:null,_Init:function(aArg){this.__proto__=C.IB;B.gx++;},_Done:
function(){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.AB)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.P)&&(A._cycle!=E)
)A._Mark(A._cycle=E);if((A=this.Ca)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
Cd)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.By)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Fj)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E
))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Core::DialogContext"
};C.KD={B_:null,Aj:null,Ae:null,K1:false,Ms:function(){if(!this.B_)return;var CA=
this.B_;this.B_.Cz=null;this.B_=null;B.lz([this,this.J1],this);CA.Kr(this);},MC:
function(Ak){if(!!this.B_)return;if(!this.Ae)return;this.B_=this.Ae;this.Ae=this.
Ae.P;if(!!this.Ae)this.Ae.R=null;else this.Aj=null;this.B_.P=null;this.K1=true;this.
B_.GG(this);this.K1=false;},MJ:function(Ak){B.lz([this,this.MC],this);},MI:function(
Ak){B.lz([this,this.MJ],this);},J1:function(Ak){B.lz([this,this.MI],this);},Lz:function(
A2){if(!A2||!A2.Cz)return;if(A2.Cz!==this)throw new Error(FP);var Lq=false;if(this.
B_===A2){this.B_=null;Lq=true;B.lz([this,this.J1],this);}else{if(!!A2.P)A2.P.R=A2.
R;else this.Aj=A2.R;if(!!A2.R)A2.R.P=A2.P;else this.Ae=A2.P;A2.R=null;A2.P=null;
}A2.Cz=null;if(Lq)A2.Kq(this);},L_:function(A2,Mm){if(!A2)return;if(!!A2.Cz)throw new
Error(GV);A2.Cz=this;if(Mm){A2.P=this.Ae;if(!!this.Ae)this.Ae.R=A2;else this.Aj=
A2;this.Ae=A2;}else{A2.R=this.Aj;if(!!this.Aj)this.Aj.P=A2;else this.Ae=A2;this.
Aj=A2;}if(!this.B_)B.lz([this,this.J1],this);},_Init:function(aArg){this.__proto__=
C.KD;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.B_)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.Aj)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ae)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:
null,_className:"Core::TaskQueue"};C.GK={Cz:null,R:null,P:null,Kr:function(G1){}
,Kq:function(G1){},GG:function(G1){this.Kc();},ER:function(){if(!!this.Cz&&(this.
Cz.B_===this))this.Cz.Ms();},Kc:function(){if(!!this.Cz)this.Cz.Lz(this);},IQ:function(
){return!!this.Cz&&(this.Cz.B_===this);},_Init:function(aArg){this.__proto__=C.GK;
B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.Cz)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.R
)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.P)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:
null,_className:"Core::Task"};C.DX={resource:null,Dc:function(){this.resource=null;
},Bz:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=C.DX;
this.Bz(aArg);B.gx++;},_Done:function(){this.Dc();this.__proto__=null;B.gx--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Core::Resource"};C.Timer={EY:null
,timer:null,AK:0,Period:1000,Hg:0,Bo:false,Dc:function(){var tmp=this.timer;if(!
!tmp)tmp.DestroyTimer();this.timer=null;},Ip:function(aBegin,aPeriod){if(aBegin<
0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>
0)))tmp=B.sX(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin
,aPeriod);}this.timer=tmp;},FC:function(D){if(D<0)D=0;if(D===this.Period)return;
this.Period=D;if(this.Bo)this.Ip(this.Hg,D);},I5:function(D){if(D<0)D=0;if(D===this.
Hg)return;this.Hg=D;if(this.Bo)this.Ip(D,this.Period);},AN:function(D){if(D===this.
Bo)return;this.Bo=D;if(D)this.Ip(this.Hg,this.Period);else this.Ip(0,0);this.AK=
this.Ho();},Ho:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.qG
)|0;return ticksCount;},Trigger:function(){var A;this.AK=this.Ho();if(!this.Period
)this.AN(false);(A=this.EY)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=C.Timer;B.gx++;},_Done:function(){this.Dc();this.__proto__=null;B.gx--;
},_ReInit:function(){},_Mark:function(E){var A;if((A=this.EY)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Core::Timer"};C.EZ={Eq:null,Cv:null,K9:function(
Ak){var A;(A=this.Eq)?A[1].call(A[0],this):null;},Er:function(D){if(B.tJ(this.Cv
,D))return;if(!!this.Cv)B.s0([this,this.K9],this.Cv,0);this.Cv=D;if(!!this.Cv)B.
sN([this,this.K9],this.Cv,0);},_Init:function(aArg){this.__proto__=C.EZ;B.gx++;}
,_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(
E){var A;if((A=this.Eq)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Cv)&&((
A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};C.N3={
C3:0x1,Nb:0x2,Nm:0x4,N1:0x8,Bo:0x10,NT:0x20,Nn:0x40,Nx:0x80,Nl:0x100,Ns:0x200,Nj:
0x400,NG:0x800,KE:0x1000,N2:0x2000,NE:0x4000,NF:0x8000,Nh:0x10000,ND:0x20000,NQ:
0x40000};C.CE={NH:0x1,NI:0x2,M_:0x4,M$:0x8,Na:0x10,M9:0x20};C.Np={NA:0,NY:1,Nd:2
,Nt:3,NK:4,NZ:5,N0:6,Ne:7,Nf:8,Nv:9,Nu:10,NM:11,NL:12};C.KeyCode={NoKey:0,Ok:1,Exit:
2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:12,
Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:21,Blue:22,
Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:
34,F10:35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:40,Home:41
,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48,Hide:49,Play:
50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:
59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:
70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:
78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,User1:86,User2:87
,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94,User10:95,User11:
96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:102,User18:103,User19:
104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:
113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:
122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:
131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136,Period:137,Comma:138,Colon:
139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:
144,CharacterKeys:145,ControlKeys:146,CursorKeys:147,AnyKey:148,Enter:149,Escape:
150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:
157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163
,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:
170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176
,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,
CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:
189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196
,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:
203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208
,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:
214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:
219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:
224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:
229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:
234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:
239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:
244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:
249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:
254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:
259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:
264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:268
,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:272
,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
279,AltF6:280,AltF7:281,AltF8:282,AltF9:283,AltF10:284,AltEnter:285,AltEscape:286
,AltUp:287,AltDown:288,AltLeft:289,AltRight:290,AltPageUp:291,AltPageDown:292,AltBackspace:
293,AltInsert:294,AltDelete:295,AltHome:296,AltEnd:297,AltTab:298,AltShiftF1:299
,AltShiftF2:300,AltShiftF3:301,AltShiftF4:302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:
305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:308,AltShiftEnter:309,AltShiftEscape:
310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:313,AltShiftRight:314,AltShiftPageUp:
315,AltShiftPageDown:316,AltShiftBackspace:317,AltShiftInsert:318,AltShiftDelete:
319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:322,ShiftF1:323,ShiftF2:324,ShiftF3:
325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:329,ShiftF8:330,ShiftF9:331,ShiftF10:
332,ShiftEnter:333,ShiftEscape:334,ShiftUp:335,ShiftDown:336,ShiftLeft:337,ShiftRight:
338,ShiftPageUp:339,ShiftPageDown:340,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.NJ={N8:0x1,N5:0x2,N6:0x4,N7:0x8,Nw:
0x10,No:0x20};
C._Init=function(){C.Fz.__proto__=C.Ao;C.GI.__proto__=C.Ao;C.A4.__proto__=C.Ao;C.
O.__proto__=C.A4;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.Iz.__proto__=
C.Event;C.Hj.__proto__=C.Event;C.Hk.__proto__=C.Event;C.HV.__proto__=C.A4;C.Bg.__proto__=
C.O;C.Ji.__proto__=C.GI;C.Hr.__proto__=C.Fy;C.Hs.__proto__=C.Fy;};C._ReInit=function(
){};C.Bs=function(E){};return C;})();

/* Embedded Wizard */