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
);if(EmWiApp.Core)throw new Error("The unit file 'Core.js' included twice!");EmWiApp.
Core=(function(){var B=EmWiApp;var D={};
var AQ=[0,0];var AO=[0,0,0,0];var CU="The view does not belong to this group";var
CV="The dialog component is already presented";var EA="The dialog component is actually not presented";
var EB="No fader to perform the fade-in/out operation";var EC="Trying to use the same fader twice";
var Gz="Trying to fade-in/out a group which belongs to another owner";var IA="No view to restack";
var Hu="View is not in this group";var LH="No view to remove";var LI="No view to add";
var LJ="View already in a group";var LK="Recursive invalidate during active update cycle.";
var IB=[-8,-8,9,9];var JN=[0,0,1,1];var LL="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var Hv="Trying to cancel a task not belonging to this queue!";
var LM="Trying to enqueue a task twice!";
D.BY={U:null,Af:null,G:null,AE:null,F:0x103,CE:0x14,HK:function(L,HB){},Go:function(
C){var A;var BI=C^this.CE;if(!BI)return;this.CE=C;if(!!this.AE&&!((this.F&0x400)===
0x400)){this.G.F=this.G.F|0x5000;B.ow([A=this.G,A.Ce],this);this.G.Ak([0,0,(A=this.
G.J)[2]-A[0],A[3]-A[1]]);}if(!!this.AE&&((this.F&0x400)===0x400)){this.AE.FW.F=this.
AE.FW.F|0x1000;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Ce],this);}},Gj:function(
){var Ad=this.G;while(!!Ad){var CQ=(D.Root.isPrototypeOf(Ad)?Ad:null);if(!!CQ)return CQ;
Ad=Ad.G;}return null;},C6:function(AM,aClip,aOffset,AA,aBlend){},Bb:function(An){
return null;},DU:function(Ai,O,Cp,D3,D7,D6){return null;},HU:function(Ai){return Ai;
},HV:function(L,B_){return AQ;},G_:function(aOffset,Hz){},GetExtent:function(){return AO;
},AV:function(Fc,GB){var A;if(((this.F&0x200)===0x200))Fc=Fc&~0x400;var Md=(this.
F&~GB)|Fc;var FP=Md^this.F;this.F=Md;if(!!this.G&&!!(FP&0x14)){var NB=((this.F&0x14
)===0x14);if(NB&&!this.G.CC)this.G.DZ(this);if(!NB&&(this.G.CC===this))this.G.DZ(
this.G.ME(this,0x14));}if(!!this.G&&!!(FP&0x403))this.G.Ak(this.GetExtent());if(((
!!this.AE&&!!this.G)&&((Md&0x400)===0x400))&&((FP&0x1)===0x1)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Ce],this);}if(!!this.G&&((FP&0x400)===
0x400)){this.AE=null;this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G
,A.Ce],this);}},_Init:function(aArg){this.__proto__=D.BY;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.U)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Af)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.AE)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.I)&&(A._cycle!=E))A._Mark(A._cycle=E);
},I:null,_cycle:0,_observers:null,_className:"Core::View"};D.G9={AL:B.vw,AK:B.vw
,HK:function(L,HB){var R=B._NewObject(D.Jz,0);this.AE=null;R.BK=this.getExtent();
R.Aa=L;R.FW=HB;R.Fn=this.AK;R.Fo=this.AL;this.AE=R;},HV:function(L,B_){var A;var
Ax=this.CE;var R=(D.Jz.isPrototypeOf(A=this.AE)?A:null);var x1=R.BK[0];var y1=R.
BK[1];var x2=R.BK[2];var y2=R.BK[3];var Bx=[L[2]-L[0],L[3]-L[1]];var w=x2-x1;var
h=y2-y1;var tmp;if(!B_){var Cj=[(A=R.Aa)[2]-A[0],A[3]-A[1]];x1=x1-R.Aa[0];y1=y1-
R.Aa[1];if(Cj[0]!==Bx[0]){var A3=((Ax&0x4)===0x4);var A4=((Ax&0x8)===0x8);var CO=((
Ax&0x1)===0x1);if(!A3&&(CO||!A4))x1=((x1*Bx[0])/Cj[0])|0;if(!A4&&(CO||!A3)){x2=x2-
R.Aa[0];x2=((x2*Bx[0])/Cj[0])|0;x2=x2-Bx[0];}else x2=x2-R.Aa[2];x1=x1+L[0];x2=x2+
L[2];if(!CO){if(A3&&!A4)x2=x1+w;else if(!A3&&A4)x1=x2-w;else{x1=x1+((((x2-x1)-w)
/2)|0);x2=x1+w;}}}else{x2=x2-R.Aa[2];x1=x1+L[0];x2=x2+L[2];}if(Cj[1]!==Bx[1]){var
A5=((Ax&0x10)===0x10);var A2=((Ax&0x20)===0x20);var CP=((Ax&0x2)===0x2);if(!A5&&(
CP||!A2))y1=((y1*Bx[1])/Cj[1])|0;if(!A2&&(CP||!A5)){y2=y2-R.Aa[1];y2=((y2*Bx[1])
/Cj[1])|0;y2=y2-Bx[1];}else y2=y2-R.Aa[3];y1=y1+L[1];y2=y2+L[3];if(!CP){if(A5&&!
A2)y2=y1+h;else if(!A5&&A2)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+h;}}}else{
y2=y2-R.Aa[3];y1=y1+L[1];y2=y2+L[3];}}else{switch(B_){case 3:{x1=L[0];x2=x1+w;}break;
case 4:{x2=L[2];x1=x2-w;}break;case 1:{y1=L[1];y2=y1+h;}break;case 2:{y2=L[3];y1=
y2-h;}break;default:;}if((B_===3)||(B_===4)){var A5=((Ax&0x10)===0x10);var A2=((
Ax&0x20)===0x20);var CP=((Ax&0x2)===0x2);if(CP){y1=L[1];y2=L[3];}else if(A5&&!A2
){y1=L[1];y2=y1+h;}else if(A2&&!A5){y2=L[3];y1=y2-h;}else{y1=L[1]+((((L[3]-L[1])-
h)/2)|0);y2=y1+h;}}if((B_===1)||(B_===2)){var A3=((Ax&0x4)===0x4);var A4=((Ax&0x8
)===0x8);var CO=((Ax&0x1)===0x1);if(CO){x1=L[0];x2=L[2];}else if(A3&&!A4){x1=L[0
];x2=x1+w;}else if(A4&&!A3){x2=L[2];x1=x2-w;}else{x1=L[0]+((((L[2]-L[0])-w)/2)|0
);x2=x1+w;}}}R.isEmpty=(x1>=x2)||(y1>=y2);w=x2-x1;h=y2-y1;if(R.Fo[0]<R.Fn[0]){tmp=
x1;x1=x2-1;x2=tmp-1;}if(R.Fo[1]<R.Fn[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1
)x2=x1;if((y2-y1)===1)y2=y1;if(((this.F&0x100)===0x100)){this.AK=[x1,y1];this.AL=[
x2,y2];}else{this.B3([x1,y1]);this.BX([x2,y2]);this.AE=R;}return[w,h];},G_:function(
aOffset,Hz){if(Hz){this.AK=B.aak(this.AK,aOffset);this.AL=B.aak(this.AL,aOffset);
}else{this.B3(B.aak(this.AK,aOffset));this.BX(B.aak(this.AL,aOffset));}},GetExtent:
function(){if(!!this.AE&&this.AE.isEmpty)return AO;return this.getExtent();},getExtent:
function(){var x1=this.AK[0];var y1=this.AK[1];var x2=this.AL[0];var y2=this.AL[
1];var w=x2-x1;var h=y2-y1;var tmp;if(w<0)w=-w;if(h<0)h=-h;if(w>=h){if(x2>x1)x2=
x2-1;if(x2<x1)x2=x2+1;}if(h>=w){if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=
x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},BX:function(
C){var A;if(B.z8(C,this.AL))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.
GetExtent());this.AE=null;this.AL=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(
this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===
0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Ce],this);
}},B3:function(C){var A;if(B.z8(C,this.AK))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.Ak(this.GetExtent());this.AE=null;this.AK=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ak(this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.
G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.
G,A.Ce],this);}},_Init:function(aArg){D.BY._Init.call(this,aArg);this.__proto__=
D.G9;},_className:"Core::LineView"};D.D2={BN:B.vw,B9:B.vw,AL:B.vw,AK:B.vw,HK:function(
L,HB){var R=B._NewObject(D.JA,0);this.AE=null;R.BK=this.GetExtent();R.Aa=L;R.FW=
HB;R.Fn=this.AK;R.Fo=this.AL;R.Ja=this.B9;R.Jb=this.BN;this.AE=R;},HV:function(L
,B_){var A;var Ax=this.CE;var R=(D.JA.isPrototypeOf(A=this.AE)?A:null);var x1=R.
BK[0];var y1=R.BK[1];var x2=R.BK[2];var y2=R.BK[3];var Bx=[L[2]-L[0],L[3]-L[1]];
var w=x2-x1;var h=y2-y1;if(!B_){var Cj=[(A=R.Aa)[2]-A[0],A[3]-A[1]];x1=x1-R.Aa[0
];y1=y1-R.Aa[1];if(Cj[0]!==Bx[0]){var A3=((Ax&0x4)===0x4);var A4=((Ax&0x8)===0x8
);var CO=((Ax&0x1)===0x1);if(!A3&&(CO||!A4))x1=((x1*Bx[0])/Cj[0])|0;if(!A4&&(CO||
!A3)){x2=x2-R.Aa[0];x2=((x2*Bx[0])/Cj[0])|0;x2=x2-Bx[0];}else x2=x2-R.Aa[2];x1=x1+
L[0];x2=x2+L[2];if(!CO){if(A3&&!A4)x2=x1+w;else if(!A3&&A4)x1=x2-w;else{x1=x1+((((
x2-x1)-w)/2)|0);x2=x1+w;}}}else{x2=x2-R.Aa[2];x1=x1+L[0];x2=x2+L[2];}if(Cj[1]!==
Bx[1]){var A5=((Ax&0x10)===0x10);var A2=((Ax&0x20)===0x20);var CP=((Ax&0x2)===0x2
);if(!A5&&(CP||!A2))y1=((y1*Bx[1])/Cj[1])|0;if(!A2&&(CP||!A5)){y2=y2-R.Aa[1];y2=((
y2*Bx[1])/Cj[1])|0;y2=y2-Bx[1];}else y2=y2-R.Aa[3];y1=y1+L[1];y2=y2+L[3];if(!CP){
if(A5&&!A2)y2=y1+h;else if(!A5&&A2)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+
h;}}}else{y2=y2-R.Aa[3];y1=y1+L[1];y2=y2+L[3];}}else{switch(B_){case 3:{x1=L[0];
x2=x1+w;}break;case 4:{x2=L[2];x1=x2-w;}break;case 1:{y1=L[1];y2=y1+h;}break;case
2:{y2=L[3];y1=y2-h;}break;default:;}if((B_===3)||(B_===4)){var A5=((Ax&0x10)===0x10
);var A2=((Ax&0x20)===0x20);var CP=((Ax&0x2)===0x2);if(CP){y1=L[1];y2=L[3];}else
if(A5&&!A2){y1=L[1];y2=y1+h;}else if(A2&&!A5){y2=L[3];y1=y2-h;}else{y1=L[1]+((((
L[3]-L[1])-h)/2)|0);y2=y1+h;}}if((B_===1)||(B_===2)){var A3=((Ax&0x4)===0x4);var
A4=((Ax&0x8)===0x8);var CO=((Ax&0x1)===0x1);if(CO){x1=L[0];x2=L[2];}else if(A3&&
!A4){x1=L[0];x2=x1+w;}else if(A4&&!A3){x2=L[2];x1=x2-w;}else{x1=L[0]+((((L[2]-L[
0])-w)/2)|0);x2=x1+w;}}}R.isEmpty=(x1>=x2)||(y1>=y2);w=(x2-x1)-1;h=(y2-y1)-1;var
Fg=R.BK[0];var Fh=R.BK[1];var EL=(R.BK[2]-Fg)-1;var EK=(R.BK[3]-Fh)-1;if(!EL)EL=
1;if(!EK)EK=1;if(((this.F&0x100)===0x100)){this.AK=[x1+((((R.Fn[0]-Fg)*w)/EL)|0)
,y1+((((R.Fn[1]-Fh)*h)/EK)|0)];this.AL=[x1+((((R.Fo[0]-Fg)*w)/EL)|0),y1+((((R.Fo[
1]-Fh)*h)/EK)|0)];this.B9=[x1+((((R.Ja[0]-Fg)*w)/EL)|0),y1+((((R.Ja[1]-Fh)*h)/EK
)|0)];this.BN=[x1+((((R.Jb[0]-Fg)*w)/EL)|0),y1+((((R.Jb[1]-Fh)*h)/EK)|0)];}else{
this.B3([x1+((((R.Fn[0]-Fg)*w)/EL)|0),y1+((((R.Fn[1]-Fh)*h)/EK)|0)]);this.BX([x1+((((
R.Fo[0]-Fg)*w)/EL)|0),y1+((((R.Fo[1]-Fh)*h)/EK)|0)]);this.D0([x1+((((R.Ja[0]-Fg)
*w)/EL)|0),y1+((((R.Ja[1]-Fh)*h)/EK)|0)]);this.Es([x1+((((R.Jb[0]-Fg)*w)/EL)|0),
y1+((((R.Jb[1]-Fh)*h)/EK)|0)]);this.AE=R;}return[w+1,h+1];},G_:function(aOffset,
Hz){if(Hz){this.AK=B.aak(this.AK,aOffset);this.AL=B.aak(this.AL,aOffset);this.B9=
B.aak(this.B9,aOffset);this.BN=B.aak(this.BN,aOffset);}else{this.B3(B.aak(this.AK
,aOffset));this.BX(B.aak(this.AL,aOffset));this.D0(B.aak(this.B9,aOffset));this.
Es(B.aak(this.BN,aOffset));}},GetExtent:function(){if(!!this.AE&&this.AE.isEmpty
)return AO;var x1=this.AK[0];var y1=this.AK[1];var x2=this.B9[0];var y2=this.B9[
1];if((((this.BN[0]!==x1)||(this.AL[1]!==y1))||(this.AL[0]!==x2))||(this.BN[1]!==
y2)){if(this.AL[0]<x1)x1=this.AL[0];if(this.B9[0]<x1)x1=this.B9[0];if(this.BN[0]<
x1)x1=this.BN[0];if(this.AL[1]<y1)y1=this.AL[1];if(this.B9[1]<y1)y1=this.B9[1];if(
this.BN[1]<y1)y1=this.BN[1];if(this.AK[0]>x2)x2=this.AK[0];if(this.AL[0]>x2)x2=this.
AL[0];if(this.BN[0]>x2)x2=this.BN[0];if(this.AK[1]>y2)y2=this.AK[1];if(this.AL[1
]>y2)y2=this.AL[1];if(this.BN[1]>y2)y2=this.BN[1];}else{var tmp;if(x2<x1){tmp=x1;
x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},Es:function(
C){var A;if(B.z8(C,this.BN))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.
GetExtent());this.AE=null;this.BN=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(
this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===
0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Ce],this);
}},D0:function(C){var A;if(B.z8(C,this.B9))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.Ak(this.GetExtent());this.AE=null;this.B9=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ak(this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.
G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.
G,A.Ce],this);}},BX:function(C){var A;if(B.z8(C,this.AL))return;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ak(this.GetExtent());this.AE=null;this.AL=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ak(this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400
))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;
B.ow([A=this.G,A.Ce],this);}},B3:function(C){var A;if(B.z8(C,this.AK))return;if(
!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.GetExtent());this.AE=null;this.AK=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.GetExtent());if((!!this.G&&((
this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.ow([A=this.G,A.Ce],this);}},K5:function(Cf){var A1=B.aan(4
,B.vw,null);var i=0;var j=3;var L7=false;var L8=false;A1.Set(0,this.AK);A1.Set(1
,this.AL);A1.Set(2,this.B9);A1.Set(3,this.BN);while(i<4){var Oh=A1.Get(i)[0];var
Kx=A1.Get(i)[1];var Se=A1.Get(j)[0];var Ms=A1.Get(j)[1];if(((Kx>Cf[1])!==(Ms>Cf[
1]))||((Kx<Cf[1])!==(Ms<Cf[1]))){var x=((((Se-Oh)*(Cf[1]-Kx))/(Ms-Kx))|0)+Oh;if(
Cf[0]>x)L7=!L7;if(Cf[0]<x)L8=!L8;}j=i;i=i+1;}return L7||L8;},OA:function(){return((((
this.AK[0]===this.BN[0])&&(this.AL[0]===this.B9[0]))&&(this.AK[1]===this.AL[1]))&&(
this.B9[1]===this.BN[1]))||((((this.AK[0]===this.AL[0])&&(this.B9[0]===this.BN[0
]))&&(this.AK[1]===this.BN[1]))&&(this.AL[1]===this.B9[1]));},_Init:function(aArg
){D.BY._Init.call(this,aArg);this.__proto__=D.D2;},_className:"Core::QuadView"};
D.Bt={J:B.vx,HK:function(L,HB){var R=B._NewObject(D.G8,0);R.BK=this.J;R.Aa=L;R.FW=
HB;this.AE=R;},HV:function(L,B_){var A;var Ax=this.CE;var R=this.AE;var x1=R.BK[
0];var y1=R.BK[1];var x2=R.BK[2];var y2=R.BK[3];var Bx=[L[2]-L[0],L[3]-L[1]];var
w=x2-x1;var h=y2-y1;if(!B_){var Cj=[(A=R.Aa)[2]-A[0],A[3]-A[1]];x1=x1-R.Aa[0];y1=
y1-R.Aa[1];if(Cj[0]!==Bx[0]){var A3=((Ax&0x4)===0x4);var A4=((Ax&0x8)===0x8);var
CO=((Ax&0x1)===0x1);if(!A3&&(CO||!A4))x1=((x1*Bx[0])/Cj[0])|0;if(!A4&&(CO||!A3)){
x2=x2-R.Aa[0];x2=((x2*Bx[0])/Cj[0])|0;x2=x2-Bx[0];}else x2=x2-R.Aa[2];x1=x1+L[0];
x2=x2+L[2];if(!CO){if(A3&&!A4)x2=x1+w;else if(!A3&&A4)x1=x2-w;else{x1=x1+((((x2-
x1)-w)/2)|0);x2=x1+w;}}}else{x2=x2-R.Aa[2];x1=x1+L[0];x2=x2+L[2];}if(Cj[1]!==Bx[
1]){var A5=((Ax&0x10)===0x10);var A2=((Ax&0x20)===0x20);var CP=((Ax&0x2)===0x2);
if(!A5&&(CP||!A2))y1=((y1*Bx[1])/Cj[1])|0;if(!A2&&(CP||!A5)){y2=y2-R.Aa[1];y2=((
y2*Bx[1])/Cj[1])|0;y2=y2-Bx[1];}else y2=y2-R.Aa[3];y1=y1+L[1];y2=y2+L[3];if(!CP){
if(A5&&!A2)y2=y1+h;else if(!A5&&A2)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+
h;}}}else{y2=y2-R.Aa[3];y1=y1+L[1];y2=y2+L[3];}}else{switch(B_){case 3:{x1=L[0];
x2=x1+w;}break;case 4:{x2=L[2];x1=x2-w;}break;case 1:{y1=L[1];y2=y1+h;}break;case
2:{y2=L[3];y1=y2-h;}break;default:;}if((B_===3)||(B_===4)){var A5=((Ax&0x10)===0x10
);var A2=((Ax&0x20)===0x20);var CP=((Ax&0x2)===0x2);if(CP){y1=L[1];y2=L[3];}else
if(A5&&!A2){y1=L[1];y2=y1+h;}else if(A2&&!A5){y2=L[3];y1=y2-h;}else{y1=L[1]+((((
L[3]-L[1])-h)/2)|0);y2=y1+h;}}if((B_===1)||(B_===2)){var A3=((Ax&0x4)===0x4);var
A4=((Ax&0x8)===0x8);var CO=((Ax&0x1)===0x1);if(CO){x1=L[0];x2=L[2];}else if(A3&&
!A4){x1=L[0];x2=x1+w;}else if(A4&&!A3){x2=L[2];x1=x2-w;}else{x1=L[0]+((((L[2]-L[
0])-w)/2)|0);x2=x1+w;}}}R.isEmpty=(x1>=x2)||(y1>=y2);if(((this.F&0x100)===0x100)
)this.J=[x1,y1,x2,y2];else{this.S([x1,y1,x2,y2]);this.AE=R;}return[x2-x1,y2-y1];
},G_:function(aOffset,Hz){if(Hz)this.J=B.aam(this.J,aOffset);else this.S(B.aam(this.
J,aOffset));},GetExtent:function(){return this.J;},S:function(C){var A;if(B.z9(C
,this.J))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.J);this.AE=null;
this.J=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.J);if((!!this.G&&((this.
F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=
this.G.F|0x4000;B.ow([A=this.G,A.Ce],this);}},_Init:function(aArg){D.BY._Init.call(
this,aArg);this.__proto__=D.Bt;},_className:"Core::RectView"};D.M={AH:null,AY:null
,Kf:null,Bc:null,Be:null,DB:null,GY:null,CC:null,EY:255,BC:function(aArg){this.Cl(
);},C6:function(AM,aClip,aOffset,AA,aBlend){var A;AA=((AA+1)*this.EY)>>8;aBlend=
aBlend&&((this.F&0x2)===0x2);if(!this.Bc||(AM.AB===this))this.Nz(AM,aClip,B.aak(
aOffset,this.J.slice(0,2)),AA,aBlend);else{var Bn=255|(255<<8)|(255<<16)|((AA&0xFF
)<<24);this.Bc.Update();AM.MB(aClip,this.Bc,0,B.aam(this.J,aOffset),AQ,Bn,Bn,Bn,
Bn,aBlend);}},DU:function(Ai,O,Cp,D3,D7,D6){var A;var H=this.AY;var GI=null;var K=
AO;var CZ=null;var Mb=!!this.DB&&(!!this.DB.CW||!!this.DB.AH);if(((A=B.kz(Ai,this.
J))[0]>=A[2])||(A[1]>=A[3]))return null;Ai=B.aal(Ai,this.J.slice(0,2));if(!!D7){
H=D7;while(!!H&&(H.G!==this))H=H.G;}while(!!H){if(((H.F&0x400)===0x400)&&!CZ){CZ=
H.Af;while(!!CZ&&!((CZ.F&0x200)===0x200))CZ=CZ.Af;if(!!CZ)K=B.kz(Ai,CZ.GetExtent(
));else K=AO;}if(CZ===H){CZ=null;K=AO;}if((((((H.F&0x8)===0x8)&&((H.F&0x10)===0x10
))&&!((H.F&0x40000)===0x40000))&&!((H.F&0x20000)===0x20000))&&(!((H.F&0x10000)===
0x10000)||((this.Be.AB===H)&&!Mb))){var BK=H.GetExtent();var J9=D3;var GE=null;if(
J9===H)J9=null;if(((H.F&0x400)===0x400)){if(!(((A=B.kz(BK,K))[0]>=A[2])||(A[1]>=
A[3])))GE=H.DU(K,O,Cp,J9,D7,D6);}else if(!(((A=B.kz(BK,Ai))[0]>=A[2])||(A[1]>=A[
3]))||(D3===H))GE=H.DU(Ai,O,Cp,J9,D7,D6);H=H.Af;if(!!GE){if(!GI||((GE.HZ<GI.HZ)&&(
GE.HZ>=0)))GI=GE;if(!GE.HZ)H=null;}}else H=H.Af;D7=null;}return GI;},HU:function(
Ai){var A;var Bl;var H=this.AH;var IO=AO;var I_=true;var result=(Ai=Bl=B.aal(Ai,
this.J.slice(0,2)),Bl);while(!!H){if(((H.F&0x200)===0x200)){var I9=(D.Iq.isPrototypeOf(
H)?H:null);IO=B.kz(Ai,I9.J);I_=((I9.F&0x1)===0x1);}if(((H.F&0x1)===0x1)){if(((H.
F&0x400)===0x400)){if(I_){var K=B.kz(H.GetExtent(),IO);if(!((K[0]>=K[2])||(K[1]>=
K[3])))result=B.vS(result,H.HU(K));}}else{var K=B.kz(H.GetExtent(),Ai);if(!((K[0
]>=K[2])||(K[1]>=K[3])))result=B.vS(result,H.HU(K));}}H=H.U;}return B.kz(B.aam(result
,this.J.slice(0,2)),this.J);},AV:function(Fc,GB){var A;var RH=this.F;D.Bt.AV.call(
this,Fc,GB);var FP=this.F^RH;if(!!this.CC&&((FP&0x40)===0x40)){if(((this.F&0x40)===
0x40))this.CC.AV(0x40,0x0);else this.CC.AV(0x0,0x40);}if(!!this.Be&&((FP&0x40)===
0x40)){if(((this.F&0x40)===0x40)&&((this.Be.AB.F&0x14)===0x14))this.Be.AB.AV(0x40
,0x0);else this.Be.AB.AV(0x0,0x40);}if(!!FP){this.F=this.F|0x8000;B.ow([this,this.
Ce],this);}},S:function(C){var A;if(B.z9(C,this.J))return;var FV=[(A=this.J)[2]-
A[0],A[3]-A[1]];var Kg=[C[2]-C[0],C[3]-C[1]];var G1=!B.z8(FV,Kg);if(G1&&!!this.Bc
){this.Bc.Im(Kg);B.vv(this,0);B.vv(this.Bc,0);}D.Bt.S.call(this,C);if((G1&&(FV[0
]>0))&&(FV[1]>0)){var Aa=[].concat(AQ,FV);var H=this.AH;while(!!H){if((!H.AE&&(H.
CE!==0x14))&&!((H.F&0x400)===0x400))H.HK(Aa,null);H=H.U;}}if(G1){this.F=this.F|0x5000;
B.ow([this,this.Ce],this);}},N_:function(An){var NP=(D.KeyEvent.isPrototypeOf(An
)?An:null);var DQ=this.Kf;if(!NP)return null;while(!!DQ&&(!DQ.AW||!DQ.Bb(NP)))DQ=
DQ.U;return DQ;},Sa:function(T){if(!!this.Bc){this.Bc.AB=this;var K=B.aal(this.HU(
B.aam(this.Bc.Dt,this.J.slice(0,2))),this.J.slice(0,2));this.Bc.Js(K,K,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.Nz(this.Bc,K,AQ,255,true);this.Bc.
AB=null;}},Nz:function(AM,aClip,aOffset,AA,aBlend){var A;var H=this.AH;var IO=AO;
var I_=true;this.Ot(AM,aClip,aOffset,AA,aBlend);while(!!H){if(((H.F&0x200)===0x200
)){var I9=(D.Iq.isPrototypeOf(H)?H:null);IO=B.kz(aClip,B.aam(I9.J,aOffset));I_=((
I9.F&0x1)===0x1);}if(((H.F&0x1)===0x1)){if(((H.F&0x400)===0x400)){if(I_){var K=B.
kz(B.aam(H.GetExtent(),aOffset),IO);if(!((K[0]>=K[2])||(K[1]>=K[3])))H.C6(AM,K,aOffset
,AA,aBlend);}}else{var K=B.kz(B.aam(H.GetExtent(),aOffset),aClip);if(!((K[0]>=K[
2])||(K[1]>=K[3])))H.C6(AM,K,aOffset,AA,aBlend);}}H=H.U;}this.Ov(AM,aClip,aOffset
,AA,aBlend);},RX:function(){var A;var L5=((this.F&0x1000)===0x1000);var Fk=[0,0,(
A=this.J)[2]-A[0],A[3]-A[1]];var EM=false;var HI=AO;var L3=AO;var H=this.AY;var CZ=
null;while(!!H){if(((H.F&0x800)===0x800)){EM=true;H.F=H.F&~0x800;}if(EM&&((H.F&0x200
)===0x200))EM=false;H=H.Af;}EM=false;H=this.AH;if(L5){this.F=this.F&~0x1000;L5=!((
Fk[0]>=Fk[2])||(Fk[1]>=Fk[3]));}this.F=this.F|0x2000;while(!!H){if(((H.F&0x400)===
0x400)){if(!!H.AE&&(H.AE.FW!==CZ))H.AE=null;if((!H.AE&&EM)&&(H.CE!==0x14))H.HK(L3
,CZ);}if(!!H.AE){if(L5&&!((H.F&0x400)===0x400))H.HV(Fk,0);if(EM&&((H.F&0x400)===
0x400))H.HV(L3,0);}if(((H.F&0x200)===0x200)){EM=((H.F&0x1000)===0x1000);CZ=(D.Iq.
isPrototypeOf(H)?H:null);if(EM){H.F=H.F&~0x1000;HI=CZ.J;L3=HI;EM=!((HI[0]>=HI[2]
)||(HI[1]>=HI[3]));}if(EM)this.Ak(CZ.J);}H=H.U;}this.F=this.F&~0x2000;this.Nd([Fk[
2]-Fk[0],Fk[3]-Fk[1]]);},Ce:function(T){var A;var Sc=((this.F&0x1000)===0x1000);
if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.RX();}if(((this.F&0x8000
)===0x8000)||Sc){this.F=this.F&~0x8000;this.Fa(this.F);}},DZ:function(C){var A;if(
!!C&&(C.G!==this))throw new Error(CU);if(!!C&&!((C.F&0x14)===0x14))C=null;if(!!C&&((
C.F&0x10000)===0x10000))C=null;if(C===this.CC)return;if(!!this.CC)this.CC.AV(0x0
,0x60);this.CC=C;if(!!C){if(((this.F&0x40)===0x40))C.AV(0x60,0x0);else C.AV(0x20
,0x0);}},Il:function(C){var A;if(!!this.Bc===C)return;if(C){this.Bc=B._NewObject(
B.Graphics.Canvas,0);this.Bc.Im([(A=this.J)[2]-A[0],A[3]-A[1]]);this.Bc.JD=[this
,this.Sa];}else{this.Bc.JD=null;this.Bc.Im(AQ);this.Bc=null;}if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ak(this.J);B.vv(this,0);},A0:function(C){if(C)this.AV(0x10,
0x0);else this.AV(0x0,0x10);},In:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(
C===this.EY)return;this.EY=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.J);
},A6:function(C){if(C)this.AV(0x1,0x0);else this.AV(0x0,0x1);},Ov:function(AM,aClip
,aOffset,AA,aBlend){},Ot:function(AM,aClip,aOffset,AA,aBlend){},GetMinimalSize:function(
){return AQ;},Nb:function(BO,Db,Fb,D4,D5,II,DO,EF,Da,C_,C$){var A;if(!this.Be){this.
P0(BO,Db,Fb,D4,D5,null,null,Da,C_,C$);return;}var FU=this.Be;var BU=FU.U;if(((BO.
F&0x10000)===0x10000)&&(this.Be.AB!==BO))throw new Error(CV);var Ek=B._NewObject(
D.KL,0);var CY=FU.CY;var C4=null;var B6=null;if(!!BU){C4=BU.C4;B6=BU.B6;}if(!!BU&&
!!FU.GX)C4=FU.GX;if(!!BU&&!!DO)B6=DO;if(!!II)CY=II;if(!Db)Db=B._GetAutoObject(B.
abl.Iu);if(!Fb)Fb=Db;if(!D5)D5=D4;if(!D4)D4=D5;Ek.CY=Fb;Ek.B6=D4;Ek.C4=D5;Ek.GX=
EF;Ek.AB=BO;Ek.U=this.Be.U;this.Be.U=null;this.Be=Ek;if(this.CC===BO)this.DZ(null
);FU.AB.AV(0x0,0x10040);if(((this.F&0x40)===0x40)&&((BO.F&0x4)===0x4))BO.AV(0x10040
,0x0);else BO.AV(0x10000,0x0);if(!!B6){this.CB(BU.AB,B6.Jo(),null,null,C$);this.
CB(FU.AB,CY.Fw(),null,null,true);this.CB(Ek.AB,Db.Fx(),Da,C_,true);}else if(!!C4
){this.CB(BU.AB,C4.Jp(),null,null,C$);this.CB(FU.AB,CY.Fw(),null,null,true);this.
CB(Ek.AB,Db.Fx(),Da,C_,true);}else if(!!CY){this.CB(FU.AB,CY.Fw(),null,null,C$);
this.CB(Ek.AB,Db.Fx(),Da,C_,true);}else this.CB(Ek.AB,Db.Fx(),Da,C_,C$);},Os:function(
BO,II,DO,EF,Da,C_,C$){var A;if(!this.Be)return;if(!BO)return;var BJ=this.Be;var BU=
this.Be.U;var HN=null;while((!!BJ&&(BJ.AB!==BO))&&!!BJ.U){HN=BJ;BJ=BU;BU=BJ.U;}if(
!BJ||(BJ.AB!==BO))throw new Error(EA);if(!HN){this.Be=BU;BJ.U=null;}else{HN.U=BU;
BJ.U=null;}BJ.AB.AV(0x0,0x10040);if(((((this.F&0x40)===0x40)&&!!BU)&&!HN)&&((BU.
AB.F&0x4)===0x4))BU.AB.AV(0x40,0x0);var CY=BJ.CY;var C4=null;var B6=null;if(!!BU
)C4=BU.C4;if(!!BU&&!!BJ.GX)C4=BJ.GX;if(!!BU&&!!EF)C4=EF;if(!!HN&&!!BU)B6=BU.B6;if((
!!HN&&!!BU)&&!!DO)B6=DO;if(!!II)CY=II;if(!!B6){this.CB(BU.AB,B6.Jo(),null,null,C$
);this.CB(BJ.AB,CY.Fw(),Da,C_,true);}else if(!!C4){this.CB(BU.AB,C4.Jp(),null,null
,C$);this.CB(BJ.AB,CY.Fw(),Da,C_,true);}else this.CB(BJ.AB,CY.Fw(),Da,C_,C$);},P0:
function(BO,Db,Fb,D4,D5,DO,EF,Da,C_,C$){var A;if(!BO)return;if(!!this.Be&&(this.
Be.AB===BO)){this.Nb(BO,Db,Fb,D4,D5,null,DO,EF,Da,C_,C$);return;}if(((BO.F&0x10000
)===0x10000))throw new Error(CV);var BJ=B._NewObject(D.KL,0);if(!!this.Be&&!this.
Be.B6){if(!EF)EF=DO;if(!DO)DO=EF;}var B6=null;if(!!this.Be)B6=this.Be.B6;if(!!this.
Be&&!!DO)B6=DO;if(!Db)Db=B._GetAutoObject(B.abl.Iu);if(!Fb)Fb=Db;if(!D5)D5=D4;if(
!D4)D4=D5;BJ.CY=Fb;BJ.B6=D4;BJ.C4=D5;BJ.GX=EF;if(this.CC===BO)this.DZ(null);if(!
!this.Be)this.Be.AB.AV(0x0,0x40);if(((this.F&0x40)===0x40)&&((BO.F&0x4)===0x4))BO.
AV(0x10040,0x0);else BO.AV(0x10000,0x0);BJ.AB=BO;BJ.U=this.Be;this.Be=BJ;if(!!B6
){this.CB(this.Be.U.AB,B6.Jo(),null,null,C$);this.CB(BO,Db.Fx(),Da,C_,true);}else
this.CB(BO,Db.Fx(),Da,C_,C$);},Lm:function(){var A;if(((this.F&0x40)===0x40))return;
if(((this.F&0x80)===0x80))return;if(((this.F&0x10000)===0x10000)){if(!!this.G)this.
G.Lm();return;}if(!!this.G&&(this.G.CC!==this))this.G.DZ(this);if(!!this.G)this.
G.Lm();},OB:function(CH){var A;return(A=CH)&&((this.F&A)===A);},MW:function(Cf){
var tmp=this;while(!!tmp){Cf=B.aaj(Cf,tmp.J.slice(0,2));tmp=tmp.G;}return Cf;},DispatchEvent:
function(An){var A;var H=this.CC;var Ad=(D.M.isPrototypeOf(H)?H:null);var A9=null;
var Mb=!!this.DB&&(!!this.DB.CW||!!this.DB.AH);if(!!H&&((((H.F&0x10000)===0x10000
)||((H.F&0x40000)===0x40000))||((H.F&0x20000)===0x20000))){H=null;Ad=null;}if(!!
this.Be&&!Mb)A9=this.Be.AB.DispatchEvent(An);if(!A9&&!!Ad)A9=Ad.DispatchEvent(An
);else if(!A9&&!!H)A9=H.Bb(An);if(!A9)A9=this.Bb(An);if(!A9)A9=this.N_(An);return A9;
},BroadcastEventAtPosition:function(An,Nr,aFilter){var A;var H=this.AY;var A9=null;
while(!!H&&!A9){if((!aFilter||((A=aFilter)&&((H.F&A)===A)))&&B.vt(H.GetExtent(),
Nr)){var Ad=(D.M.isPrototypeOf(H)?H:null);if(!!Ad)A9=Ad.BroadcastEventAtPosition(
An,B.aaj(Nr,Ad.J.slice(0,2)),aFilter);else A9=H.Bb(An);}H=H.Af;}if(!A9)A9=this.Bb(
An);return A9;},BroadcastEvent:function(An,aFilter){var A;var H=this.AY;var A9=null;
while(!!H&&!A9){if(!aFilter||((A=aFilter)&&((H.F&A)===A))){var Ad=(D.M.isPrototypeOf(
H)?H:null);if(!!Ad)A9=Ad.BroadcastEvent(An,aFilter);else A9=H.Bb(An);}H=H.Af;}if(
!A9)A9=this.Bb(An);if(!A9)A9=this.N_(An);return A9;},Nd:function(aSize){},Fa:function(
CH){},Cl:function(){this.F=this.F|0x8000;B.ow([this,this.Ce],this);},Ak:function(
Ai){var A;var Ad=this;while(!!Ad&&!((Ai[0]>=Ai[2])||(Ai[1]>=Ai[3]))){var HD=Ad.Bc;
if(!Ad.G&&(Ad!==this)){Ad.Ak(Ai);return;}if(!!HD){var RF=HD.Dt;HD.Dt=B.vS(HD.Dt,
Ai);if(!B.z9(RF,HD.Dt)){B.vv(Ad,0);B.vv(HD,0);}}if(!((Ad.F&0x1)===0x1))return;Ai=
B.kz(B.aam(Ai,Ad.J.slice(0,2)),Ad.J);Ad=Ad.G;}},ME:function(P,aFilter){var A;if(
!P||(P.G!==this))return null;var FT=P.U;var FY=P.Af;var I3=0x10000;if(((aFilter&
0x10000)===0x10000))I3=0x0;while(!!FT||!!FY){if((!!FT&&(!aFilter||((A=aFilter)&&((
FT.F&A)===A))))&&(!I3||!((A=I3)&&((FT.F&A)===A))))return FT;if((!!FY&&(!aFilter||((
A=aFilter)&&((FY.F&A)===A))))&&(!I3||!((A=I3)&&((FY.F&A)===A))))return FY;if(!!FT
)FT=FT.U;if(!!FY)FY=FY.Af;}return null;},CB:function(ED,AP,Da,C_,C$){var A;if(!ED
)return;if(!AP)throw new Error(EB);if((!!AP.M||!!AP.G)||!!AP.Dl)throw new Error(
EC);if(!!ED.G&&(ED.G!==this))throw new Error(Gz);if(!this.DB)this.DB=B._NewObject(
D.Nc,0);AP.G=this;AP.M=ED;AP.Ki=C_;AP.Me=Da;if(!!ED.GY)ED.GY.Dl.P2(ED.GY);ED.GY=
AP;ED.F=ED.F|0x20000;if((C$&&!!this.DB.AY)&&!this.DB.AY.K4())(B.abl.Jr.isPrototypeOf(
A=this.DB.AY)?A:null).Mv(AP);else{var Dl=B._NewObject(B.abl.Jr,0);Dl.Mv(AP);this.
DB.P4(Dl,false);}},Ir:function(P){var A;if(!P)throw new Error(IA);if(P.G!==this)
throw new Error(Hu);if(!P.U)return;var HC=this.AY;if(((HC===P)||!HC)||(HC.U===P)
)return;if(((P.F&0x401)===0x401)){if(!!P.Af&&!!P.AE)P.Af.F=P.Af.F|0x800;P.F=P.F|
0x800;this.F=this.F|0x4000;B.ow([this,this.Ce],this);}if(((P.F&0x200)===0x200)){
if(!!P.Af)P.Af.F=P.Af.F|0x800;this.F=this.F|0x4000;B.ow([this,this.Ce],this);}if(
!!P.Af)P.Af.U=P.U;else this.AH=P.U;P.U.Af=P.Af;P.Af=HC;P.U=HC.U;HC.U=P;if(!!P.U)
P.U.Af=P;else this.AY=P;if(((P.F&0x1)===0x1))this.Ak(P.GetExtent());},Gr:function(
P){var A;if(!P)throw new Error(LH);if(P.G!==this)throw new Error(Hu);if((((P.F&0x401
)===0x401)&&!!P.Af)&&!!P.AE){P.Af.F=P.Af.F|0x800;this.F=this.F|0x4000;B.ow([this
,this.Ce],this);}if(((P.F&0x200)===0x200)){if(!!P.Af)P.Af.F=P.Af.F|0x800;this.F=
this.F|0x4000;B.ow([this,this.Ce],this);}P.AE=null;if(this.CC===P)this.DZ(this.ME(
P,0x14));if(!!P.Af)P.Af.U=P.U;if(!!P.U)P.U.Af=P.Af;if(this.AH===P)this.AH=P.U;if(
this.AY===P)this.AY=P.Af;P.G=null;P.U=null;P.Af=null;if(((P.F&0x1)===0x1))this.Ak(
P.GetExtent());},W:function(P,HA){var A;if(!P)throw new Error(LI);if(!!P.G)throw new
Error(LJ);var Fd=null;if((HA<0)&&!!this.AY){Fd=this.AY;HA=HA+1;}while(((HA<0)&&!
!Fd)&&!!Fd.Af){Fd=Fd.Af;HA=HA+1;}if(!Fd){P.G=this;P.Af=this.AY;if(!!this.AY)this.
AY.U=P;if(!this.AH)this.AH=P;this.AY=P;}else{P.G=this;P.Af=Fd.Af;P.U=Fd;Fd.Af=P;
if(!!P.Af)P.Af.U=P;else this.AH=P;}if(((P.F&0x1)===0x1))this.Ak(P.GetExtent());if(((
!this.CC&&((P.F&0x4)===0x4))&&((P.F&0x10)===0x10))&&!((P.F&0x10000)===0x10000))this.
DZ(P);if(((P.F&0x401)===0x401)){P.F=P.F|0x800;this.F=this.F|0x4000;B.ow([this,this.
Ce],this);}if(((P.F&0x200)===0x200)){P.F=P.F|0x800;this.F=this.F|0x4000;B.ow([this
,this.Ce],this);}},_Init:function(aArg){D.Bt._Init.call(this,aArg);this.__proto__=
D.M;this.F=0x1F;this.BC(aArg);},_Mark:function(E){var A;D.Bt._Mark.call(this,E);
if((A=this.AH)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.AY)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.Kf)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
Bc)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Be)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.DB)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.GY)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.CC)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:
"Core::Group"};D.Root={C1:null,AD:B.aan(10,null,null),HE:null,Ff:null,Jh:0,Bd:0,
B$:B.aan(10,0,null),J7:B.aan(10,B.vx,null),DA:B.aan(10,0,null),EJ:B.aan(10,B.vw,
null),HG:B.aan(10,0,null),Fe:B.aan(10,B.vw,null),Dz:B.aan(10,B.vw,null),CX:B.aan(
10,B.vw,null),D_:B.aan(10,B.vw,null),Av:0,Kc:0,Kb:0,Ct:B.aan(4,0,null),BA:B.aan(
4,B.vx,null),Bz:0,IY:0,HL:0,L6:true,BC:function(aArg){if(!!!this.I){var obj=this;
B.aaG(obj);}},Gj:function(){return this;},C6:function(AM,aClip,aOffset,AA,aBlend
){var fullScreenUpdate=false;fullScreenUpdate=B.mr;if(!fullScreenUpdate)AM.Js(aClip
,B.aam(B.aam(aClip,aOffset),this.J.slice(0,2)),0x00000000,0x00000000,0x00000000,
0x00000000,false);D.M.C6.call(this,AM,aClip,aOffset,AA,aBlend);},AV:function(Fc,
GB){var A;D.M.AV.call(this,Fc,GB);if(!this.G&&(((Fc&0x1)===0x1)||((GB&0x1)===0x1
)))this.Ak([0,0,(A=this.J)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((Fc&0x2)===0x2)||((
GB&0x2)===0x2)))this.Ak([0,0,(A=this.J)[2]-A[0],A[3]-A[1]]);},DZ:function(C){if((
C!==null)||!C)D.M.DZ.call(this,C);},Il:function(C){var A;var RE=this.Bc;D.M.Il.call(
this,C);if(((RE!==this.Bc)&&!this.G)&&((this.F&0x1)===0x1))this.Ak([0,0,(A=this.
J)[2]-A[0],A[3]-A[1]]);},In:function(C){var A;var RI=this.EY;D.M.In.call(this,C);
if(((RI!==this.EY)&&!this.G)&&((this.F&0x1)===0x1))this.Ak([0,0,(A=this.J)[2]-A[
0],A[3]-A[1]]);},DispatchEvent:function(An){if(!!An){An.Id=!!this.Bd;if(!!this.Bd
)An.Am=this.Bd;}var A9;A9=D.M.DispatchEvent.call(this,An);this.Bd=0;return A9;},
BroadcastEvent:function(An,aFilter){if(!!An){An.Id=!!this.Bd;if(!!this.Bd)An.Am=
this.Bd;}var A9=D.M.BroadcastEvent.call(this,An,aFilter);this.Bd=0;return A9;},Ak:
function(Ai){var A;if(this.Jh>0)throw new Error(LK);if(!!this.Bc&&!this.G){if(((
A=this.Bc.Dt)[0]>=A[2])||(A[1]>=A[3])){B.vv(this,0);B.vv(this.Bc,0);}this.Bc.Dt=
B.vS(this.Bc.Dt,Ai);}var fullScreenUpdate=false;fullScreenUpdate=B.mr;if(fullScreenUpdate
)Ai=[0,0,(A=this.J)[2]-A[0],A[3]-A[1]];if(!!this.G){D.M.Ak.call(this,Ai);return;
}Ai=B.kz(B.aam(Ai,this.J.slice(0,2)),this.J);if((Ai[0]>=Ai[2])||(Ai[1]>=Ai[3]))return;
var i;for(i=0;i<this.Bz;i=i+1)if(!(((A=B.kz(this.BA.Get(i),Ai))[0]>=A[2])||(A[1]>=
A[3]))){this.BA.Set(i,B.vS(this.BA.Get(i),Ai));this.Ct.Set(i,B.zS(this.BA.Get(i)
));return;}if(this.Bz<3){this.BA.Set(this.Bz,Ai);this.Ct.Set(this.Bz,B.zS(Ai));this.
Bz=this.Bz+1;return;}var j;var C0;var IX=0;var IZ=0;var Nt=2147483647;this.BA.Set(
this.Bz,Ai);this.Ct.Set(this.Bz,B.zS(Ai));for(j=0;j<=this.Bz;j=j+1)for(C0=j+1;C0<=
this.Bz;C0=C0+1){var Kv=B.zS(B.vS(this.BA.Get(j),this.BA.Get(C0)));var N9=((Kv<<
8)/(this.Ct.Get(j)+this.Ct.Get(C0)))|0;if(N9<Nt){Nt=N9;IX=j;IZ=C0;}}this.BA.Set(
IX,B.vS(this.BA.Get(IX),this.BA.Get(IZ)));this.Ct.Set(IX,B.zS(this.BA.Get(IX)));
if(IZ!==this.Bz){this.BA.Set(IZ,this.BA.Get(this.Bz));this.Ct.Set(IZ,this.Ct.Get(
this.Bz));}},Ru:function(){var Cb=B._NewObject(D.G5,0);Cb.Id=!!this.Bd;if(!!this.
Bd)Cb.Am=this.Bd;return Cb;},GD:function(){var Cb=B._NewObject(D.Ep,0);Cb.Id=!!this.
Bd;if(!!this.Bd)Cb.Am=this.Bd;return Cb;},HF:function(){var Cb=B._NewObject(D.HX
,0);Cb.Id=!!this.Bd;if(!!this.Bd)Cb.Am=this.Bd;return Cb;},Rv:function(T){var i;
var GI=false;for(i=0;i<10;i=i+1)if(!!this.AD.Get(i)){var pos=this.CX.Get(i);var Ad=
this.AD.Get(i).G;while(!!Ad&&(Ad!==this)){pos=B.aaj(pos,Ad.J.slice(0,2));Ad=Ad.G;
}if(!Ad&&(this.AD.Get(i)!==this)){var tmp=this.AD.Get(i);this.Av=i;this.AD.Set(i
,null);tmp.Bb(this.GD().InitializeUp(i,this.Fe.Get(i),this.EJ.Get(i),this.DA.Get(
i),this.B$.Get(i)+1,this.Dz.Get(i),false,this.CX.Get(i),this.D_.Get(i)));this.BroadcastEvent(
this.HF().InitializeUp(i,this.B$.Get(i)+1,false,tmp,this.CX.Get(i)),0x18);}else{
this.DA.Set(i,(this.Ff.Am-this.HG.Get(i))|0);if(this.DA.Get(i)<10)this.DA.Set(i,
10);this.Av=i;this.AD.Get(i).Bb(this.GD().InitializeHold(i,pos,this.EJ.Get(i),this.
DA.Get(i),this.B$.Get(i)+1,this.Dz.Get(i),this.CX.Get(i),this.D_.Get(i)));GI=true;
}}if(!GI)this.Ff.A0(false);},GetFPS:function(){var ticksCount=0;var NC=0;ticksCount=((
new Date).getTime()-B.vs)|0;if(!!this.Kc&&(ticksCount>this.Kc))NC=((this.Kb*1000
)/((ticksCount-this.Kc)|0))|0;this.Kb=0;this.Kc=ticksCount;return NC;},Update:function(
){var A;if(!this.HE)this.HE=B._NewObject(B.Graphics.Canvas,0);this.HE.Im([(A=this.
J)[2]-A[0],A[3]-A[1]]);this.HE.Update();return this.UpdateGE20(this.HE);},UpdateGE20:
function(AM){if(!this.BeginUpdate())return AO;var ET=this.UpdateCanvas(AM,AQ);this.
EndUpdate();return ET;},EndUpdate:function(){if(this.Bz>0){this.Kb=this.Kb+1;this.
Bz=0;}},UpdateCanvas:function(AM,aOffset){var A;var ET=AO;var Rp=[].concat(aOffset
,B.aak(AM.FrameSize,aOffset));var i;var j=this.Bz;this.Jh=this.Jh+1;AM.AB=this;for(
i=0;(i<j)&&(i<4);i=i+1)if(this.Ct.Get(i)>0){this.C6(AM,B.aal(this.BA.Get(i),aOffset
),[-aOffset[0],-aOffset[1]],255,true);ET=B.vS(ET,B.kz(Rp,this.BA.Get(i)));}else j=
j+1;AM.AB=null;this.Jh=this.Jh-1;if(!((ET[0]>=ET[2])||(ET[1]>=ET[3])))return B.aal(
ET,aOffset);else return ET;},GetUpdateRegion:function(JQ){var i;var j=this.Bz;if(
JQ<0)return AO;for(i=0;(i<j)&&(i<4);i=i+1)if(!this.Ct.Get(i)){j=j+1;JQ=JQ+1;}else
if(i===JQ)return this.BA.Get(i);return AO;},BeginUpdate:function(){var A;var i;if(
!!this.Bz&&!B.z9(this.BA.Get(0),[0,0,(A=this.J)[2]-A[0],A[3]-A[1]])){var Of=B.aan(
3,B.vx,null);var Oe=this.Bz;for(i=0;i<Oe;i++)Of.Set(i,this.BA.Get(i));for(i=0;i<
Oe;i++){var N$=B.aam(Of.Get(i),this.J.slice(0,2));var Oa=this.HU(N$);if(!B.z9(N$
,Oa))this.Ak(B.aal(Oa,this.J.slice(0,2)));}}var j;var C0;for(j=0;j<(this.Bz-1);j++
)if(this.Ct.Get(j)>0)for(C0=j+1;C0<this.Bz;C0++)if(this.Ct.Get(C0)>0){var Kv=B.zS(
B.vS(this.BA.Get(j),this.BA.Get(C0)));if(((Kv-this.Ct.Get(j))-this.Ct.Get(C0))<0
){this.BA.Set(j,B.vS(this.BA.Get(j),this.BA.Get(C0)));this.Ct.Set(j,Kv);this.Ct.
Set(C0,0);}}for(i=this.Bz-1;i>=0;i--)if(!this.Ct.Get(i))this.Bz=this.Bz-1;return this.
Bz;},DoesNeedUpdate:function(){if(this.Bz>0)return true;return false;},Initialize:
function(aSize){this.S([].concat(AQ,aSize));if(this.L6)this.F=this.F|0x60;else this.
F=this.F|0x20;this.Ak(this.J);return this;},SetRootFocus:function(LO){if(LO===this.
L6)return false;this.L6=LO;if(!LO)this.AV(0x0,0x40);else this.AV(0x40,0x0);return true;
},SetUserInputTimestamp:function(Rf){this.Bd=Rf;},DriveKeyboardHitting:function(
BG,IE,DM){var A;var Ml=!!this.C1;if(!!this.C1&&((!DM||(this.IY!==BG))||(this.HL!==
IE))){var Cb=null;var H=(D.BY.isPrototypeOf(A=this.C1)?A:null);var DQ=(D.Du.isPrototypeOf(
A=this.C1)?A:null);if(!!this.IY)Cb=B._NewObject(D.KeyEvent,0).Initialize(this.IY
,false);if(this.HL!==0x00)Cb=B._NewObject(D.KeyEvent,0).Initialize2(this.HL,false
);if(!!DQ)DQ.Bb(Cb);else if(!!H)H.Bb(Cb);this.IY=0;this.HL=0x00;this.C1=null;}if(
!!this.C1){var Cb=null;var H=(D.BY.isPrototypeOf(A=this.C1)?A:null);var DQ=(D.Du.
isPrototypeOf(A=this.C1)?A:null);if(!!BG)Cb=B._NewObject(D.KeyEvent,0).Initialize(
BG,true);if(this.HL!==0x00)Cb=B._NewObject(D.KeyEvent,0).Initialize2(IE,true);if(
!!DQ)DQ.Bb(Cb);else if(!!H)H.Bb(Cb);}if(!this.C1&&DM){if(!!BG)this.C1=this.DispatchEvent(
B._NewObject(D.KeyEvent,0).Initialize(BG,true));if(IE!==0x00)this.C1=this.DispatchEvent(
B._NewObject(D.KeyEvent,0).Initialize2(IE,true));if(!(D.Du.isPrototypeOf(A=this.
C1)?A:null)&&!(D.BY.isPrototypeOf(A=this.C1)?A:null))this.C1=null;this.IY=BG;this.
HL=IE;Ml=Ml||!!this.C1;}this.Bd=0;return Ml;},DriveCursorMovement:function(BH){return this.
DriveMultiTouchMovement(this.Av,BH);},DriveMultiTouchMovement:function(O,BH){if((
O<0)||(O>9)){this.Bd=0;return false;}var AU=B.aaj(BH,this.CX.Get(O));this.CX.Set(
O,BH);if(!this.AD.Get(O)||B.z8(AU,AQ)){this.Bd=0;return false;}var pos=BH;var Ad=
this.AD.Get(O).G;while(!!Ad&&(Ad!==this)){pos=B.aaj(pos,Ad.J.slice(0,2));Ad=Ad.G;
}if(!Ad&&(this.AD.Get(O)!==this)){var tmp=this.AD.Get(O);this.Av=O;this.AD.Set(O
,null);tmp.Bb(this.GD().InitializeUp(O,this.Fe.Get(O),this.EJ.Get(O),this.DA.Get(
O),this.B$.Get(O)+1,this.Dz.Get(O),false,this.CX.Get(O),this.D_.Get(O)));this.BroadcastEvent(
this.HF().InitializeUp(O,this.B$.Get(O)+1,false,tmp,BH),0x18);}else{this.Fe.Set(
O,pos);this.Av=O;this.AD.Get(O).Bb(this.Ru().Initialize(O,pos,this.EJ.Get(O),AU,
this.DA.Get(O),this.B$.Get(O)+1,this.Dz.Get(O),BH,this.D_.Get(O)));}this.Bd=0;return true;
},DriveCursorHitting:function(DM,O,BH){return this.DriveMultiTouchHitting(DM,O,BH
);},DriveMultiTouchHitting:function(DM,O,BH){if((O<0)||(O>9)){this.Bd=0;return false;
}var ticksCount=this.Bd;if(!ticksCount)ticksCount=((new Date).getTime()-B.vs)|0;
var R4=this.Bd;this.DriveMultiTouchMovement(O,BH);BH=this.CX.Get(O);this.Bd=R4;if(
DM)this.D_.Set(O,BH);if(DM&&!this.AD.Get(O)){var By;var pos=BH;if(B.vt(this.J7.Get(
O),BH)&&((ticksCount-this.HG.Get(O))<=250))this.B$.Set(O,this.B$.Get(O)+1);else this.
B$.Set(O,0);this.J7.Set(O,B.aam(IB,BH));this.HG.Set(O,ticksCount);By=this.DU(B.aam(
IB,BH),O,this.B$.Get(O)+1,null,null,0x0);if(!!By){this.BroadcastEvent(this.HF().
InitializeDown(O,this.B$.Get(O)+1,false,By.BY,BH),0x18);this.AD.Set(O,By.BY);this.
Dz.Set(O,By.As);}else{this.AD.Set(O,null);this.Dz.Set(O,AQ);this.Bd=0;return false;
}var Ad=By.BY.G;while(!!Ad&&(Ad!==this)){pos=B.aaj(pos,Ad.J.slice(0,2));Ad=Ad.G;
}this.EJ.Set(O,pos);this.Fe.Set(O,pos);this.DA.Set(O,0);this.Ff.A0(true);this.Av=
O;this.AD.Get(O).Bb(this.GD().InitializeDown(O,pos,this.B$.Get(O)+1,this.Dz.Get(
O),false,BH));this.Bd=0;return true;}if(!DM&&!!this.AD.Get(O)){var pos=BH;var Ad=
this.AD.Get(O).G;while(!!Ad&&(Ad!==this)){pos=B.aaj(pos,Ad.J.slice(0,2));Ad=Ad.G;
}if(!Ad)pos=this.Fe.Get(O);this.Av=O;var tmp=this.AD.Get(O);this.AD.Set(O,null);
tmp.Bb(this.GD().InitializeUp(O,pos,this.EJ.Get(O),this.DA.Get(O),this.B$.Get(O)+
1,this.Dz.Get(O),false,BH,this.D_.Get(O)));this.BroadcastEvent(this.HF().InitializeUp(
O,this.B$.Get(O)+1,false,tmp,BH),0x18);this.Bd=0;return true;}this.Bd=0;return false;
},LD:function(EE,Nq,D7,D6){if(EE===this)EE=null;if(!this.AD.Get(this.Av))return;
var By;By=this.DU(B.aam(IB,this.CX.Get(this.Av)),this.Av,1,EE,D7,D6);if(!!By&&(this.
AD.Get(this.Av)!==By.BY))this.KK(By.BY,By.As);if(!By&&(this.AD.Get(this.Av)!==Nq
))this.KK(Nq,AQ);},KK:function(EE,Dw){if(!this.AD.Get(this.Av)||(this.AD.Get(this.
Av)===EE))return;var tmp=this.AD.Get(this.Av);this.AD.Set(this.Av,null);tmp.Bb(this.
GD().InitializeUp(this.Av,this.Fe.Get(this.Av),this.EJ.Get(this.Av),this.DA.Get(
this.Av),this.B$.Get(this.Av)+1,this.Dz.Get(this.Av),true,this.CX.Get(this.Av),this.
D_.Get(this.Av)));this.BroadcastEvent(this.HF().InitializeUp(this.Av,this.B$.Get(
this.Av)+1,true,tmp,this.CX.Get(this.Av)),0x18);var pos=this.CX.Get(this.Av);var
Ad=null;if(!!EE)Ad=EE.G;while(!!Ad&&(Ad!==this)){pos=B.aaj(pos,Ad.J.slice(0,2));
Ad=Ad.G;}if(!Ad&&(EE!==this)){this.AD.Set(this.Av,null);return;}this.BroadcastEvent(
this.HF().InitializeDown(this.Av,this.B$.Get(this.Av)+1,true,EE,this.CX.Get(this.
Av)),0x18);var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;this.AD.Set(
this.Av,EE);this.Dz.Set(this.Av,Dw);this.EJ.Set(this.Av,pos);this.Fe.Set(this.Av
,pos);this.B$.Set(this.Av,0);this.DA.Set(this.Av,0);this.HG.Set(this.Av,ticksCount
);this.D_.Set(this.Av,this.CX.Get(this.Av));this.AD.Get(this.Av).Bb(this.GD().InitializeDown(
this.Av,pos,this.B$.Get(this.Av)+1,this.Dz.Get(this.Av),true,this.D_.Get(this.Av
)));},_Init:function(aArg){D.M._Init.call(this,aArg);D.Timer._Init.call(this.Ff={
I:this},0);(this.AD=[]).__proto__=D.Root.AD;(this.B$=[]).__proto__=D.Root.B$;(this.
J7=[]).__proto__=D.Root.J7;(this.DA=[]).__proto__=D.Root.DA;(this.EJ=[]).__proto__=
D.Root.EJ;(this.HG=[]).__proto__=D.Root.HG;(this.Fe=[]).__proto__=D.Root.Fe;(this.
Dz=[]).__proto__=D.Root.Dz;(this.CX=[]).__proto__=D.Root.CX;(this.D_=[]).__proto__=
D.Root.D_;(this.Ct=[]).__proto__=D.Root.Ct;(this.BA=[]).__proto__=D.Root.BA;this.
__proto__=D.Root;this.F=0x7F;this.Ff.Hc(10);this.Ff.Gp=[this,this.Rv];this.BC(aArg
);},_Done:function(){this.__proto__=D.M;this.Ff._Done();D.M._Done.call(this);},_ReInit:
function(){D.M._ReInit.call(this);this.Ff._ReInit();},_Mark:function(E){var A;D.
M._Mark.call(this,E);if((A=this.C1)&&(A._cycle!=E))A._Mark(A._cycle=E);B.aaf(this.
AD,E);if((A=this.HE)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ff)._cycle!=E
)A._Mark(A._cycle=E);},_className:"Core::Root"};D.Event={Am:0,Id:false,BC:function(
aArg){this.Am=this.Jv();},Jv:function(){var ticksCount=0;ticksCount=((new Date).
getTime()-B.vs)|0;return ticksCount;},_Init:function(aArg){this.__proto__=D.Event;
this.BC(aArg);B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.I)&&(A._cycle!=E))A._Mark(A._cycle=E);},I:
null,_cycle:0,_observers:null,_className:"Core::Event"};D.KeyEvent={AZ:0,AF:0,Down:
false,Initialize2:function(BG,DM){this.AZ=0;this.AF=BG;this.Down=DM;if((BG>=0x30
)&&(BG<=0x39))this.AZ=(10+BG)-48;if((BG>=0x41)&&(BG<=0x5A))this.AZ=(105+BG)-65;if((
BG>=0x61)&&(BG<=0x7A))this.AZ=(105+BG)-97;if(BG===0x20)this.AZ=131;if(!this.AZ)switch(
BG){case 0x2B:this.AZ=132;break;case 0x2D:this.AZ=133;break;case 0x2A:this.AZ=134;
break;case 0x2F:this.AZ=135;break;case 0x3D:this.AZ=136;break;case 0x2E:this.AZ=
137;break;case 0x2C:this.AZ=138;break;case 0x3A:this.AZ=139;break;case 0x3B:this.
AZ=140;break;default:;}return this;},Initialize:function(BG,DM){this.AZ=BG;this.
Down=DM;this.AF=0x00;var LW=BG-10;var LU=BG-105;if((LW>=0)&&(LW<=9))this.AF=(48+
LW)&0xFFFF;if((LU>=0)&&(LU<=25))this.AF=(65+LU)&0xFFFF;if(BG===131)this.AF=0x20;
if(this.AF===0x00)switch(BG){case 132:this.AF=0x2B;break;case 133:this.AF=0x2D;break;
case 134:this.AF=0x2A;break;case 135:this.AF=0x2F;break;case 136:this.AF=0x3D;break;
case 137:this.AF=0x2E;break;case 138:this.AF=0x2C;break;case 139:this.AF=0x3A;break;
case 140:this.AF=0x3B;break;default:;}return this;},OD:function(Np){switch(Np){case
141:return((this.AF>=0x41)&&(this.AF<=0x5A))||((this.AF>=0x61)&&(this.AF<=0x7A));
case 142:return(((this.AF>=0x41)&&(this.AF<=0x5A))||((this.AF>=0x61)&&(this.AF<=
0x7A)))||((this.AF>=0x30)&&(this.AF<=0x39));case 143:return(this.AF>=0x30)&&(this.
AF<=0x39);case 144:return(((this.AF>=0x41)&&(this.AF<=0x46))||((this.AF>=0x61)&&(
this.AF<=0x66)))||((this.AF>=0x30)&&(this.AF<=0x39));case 145:return this.AF!==0x00;
case 146:return(this.AF===0x00)&&!!this.AZ;case 147:return(((this.AZ===6)||(this.
AZ===7))||(this.AZ===4))||(this.AZ===5);case 148:return(this.AF!==0x00)||!!this.
AZ;default:;}return Np===this.AZ;},_Init:function(aArg){D.Event._Init.call(this,
aArg);this.__proto__=D.KeyEvent;},_className:"Core::KeyEvent"};D.HX={Iw:null,B1:
B.vw,Cm:0,Bi:0,Down:false,CA:false,InitializeUp:function(O,Cp,GA,LQ,DN){this.Down=
false;this.Bi=O;this.Cm=Cp;this.B1=DN;this.Iw=LQ;this.CA=GA;return this;},InitializeDown:
function(O,Cp,GA,LQ,DN){this.Down=true;this.Bi=O;this.Cm=Cp;this.B1=DN;this.Iw=LQ;
this.CA=GA;return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.
__proto__=D.HX;},_Mark:function(E){var A;D.Event._Mark.call(this,E);if((A=this.Iw
)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"};D.Ep={
EX:B.vw,B1:B.vw,Cm:0,Bw:0,Ck:B.vw,Bk:B.vw,Bi:0,Down:false,CA:false,InitializeHold:
function(O,FL,IG,IH,Cp,Dw,DN,IF){this.Down=true;this.Bi=O;this.Bk=B.aak(FL,Dw);this.
Ck=B.aak(IG,Dw);this.Bw=IH;this.Cm=Cp;this.B1=DN;this.EX=IF;return this;},InitializeUp:
function(O,FL,IG,IH,Cp,Dw,GA,DN,IF){this.Down=false;this.Bi=O;this.Bk=B.aak(FL,Dw
);this.Ck=B.aak(IG,Dw);this.Bw=IH;this.Cm=Cp;this.CA=GA;this.B1=DN;this.EX=IF;return this;
},InitializeDown:function(O,FL,Cp,Dw,GA,DN){this.Down=true;this.Bi=O;this.Bk=B.aak(
FL,Dw);this.Ck=B.aak(FL,Dw);this.Bw=0;this.Cm=Cp;this.CA=GA;this.B1=DN;this.EX=DN;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.Ep;},_className:"Core::CursorEvent"};D.G5={EX:B.vw,B1:B.vw,Cm:0,Bw:0,As:B.vw,Ck:
B.vw,Bk:B.vw,Bi:0,Initialize:function(O,FL,IG,aOffset,IH,Re,Dw,DN,IF){this.Bi=O;
this.Bk=B.aak(FL,Dw);this.Ck=B.aak(IG,Dw);this.As=aOffset;this.Bw=IH;this.Cm=Re;
this.B1=DN;this.EX=IF;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.G5;},_className:"Core::DragEvent"};D.Iq={C6:function(AM,
aClip,aOffset,AA,aBlend){},S:function(C){var A;if(B.z9(C,this.J))return;var FV=[(
A=this.J)[2]-A[0],A[3]-A[1]];var Kg=[C[2]-C[0],C[3]-C[1]];var G1=!B.z8(FV,Kg);var
AU=B.aaj(C.slice(0,2),this.J.slice(0,2));if(!B.z8(AU,AQ)&&!G1){var H=this.U;while(
!!H&&!((H.F&0x200)===0x200)){if(((H.F&0x400)===0x400)){var tmp=((H.F&0x100)===0x100
);H.G_(AU,tmp);}H=H.U;}}if((G1&&(FV[0]>0))&&(FV[1]>0)){var Aa=this.J;var H=this.
U;while(!!H&&!((H.F&0x200)===0x200)){if(((H.F&0x400)===0x400)){if(!!H.AE&&(H.AE.
FW!==this))H.AE=null;if(!H.AE&&(H.CE!==0x14))H.HK(Aa,this);}H=H.U;}}D.Bt.S.call(
this,C);if(!!this.G&&G1){this.F=this.F|0x1000;if(!((this.G.F&0x2000)===0x2000)){
this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.Ce],this);}}},_Init:function(aArg){D.Bt.
_Init.call(this,aArg);this.__proto__=D.Iq;this.F=0x203;},_className:"Core::Outline"
};D.Bu={Ln:null,Ii:null,Ih:null,DX:null,DY:null,Bs:null,Ku:0,Ab:0,Bi:0,Am:0,Cm:0
,Bw:0,As:B.vw,Ck:B.vw,Bk:B.vw,Is:8,E1:0,MY:1,Down:false,DI:false,CA:false,L1:false
,I0:0,C6:function(AM,aClip,aOffset,AA,aBlend){},Bb:function(An){var A;var N=(D.Ep.
isPrototypeOf(An)?An:null);var Aq=(D.G5.isPrototypeOf(An)?An:null);var Ke=this.DI;
var DT;var Dg;var Jg;var Cd;var IU;if(!N&&!Aq)return null;DT=(!!N&&N.Down)&&!N.Bw;
Dg=(!!N&&N.Down)&&(N.Bw>0);Jg=(!!N&&N.Down)&&(N.Bw>this.I0);Cd=!!N&&!N.Down;IU=!
!Aq;if(DT)this.I0=((A=(N.CA?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if((((this.E1&0x20)===
0x20)&&(this.Ab>0))&&(this.Ab<33554432)){var Bf=(D.HX.isPrototypeOf(An)?An:null);
if(((!!Bf&&Bf.Down)&&(Bf.Iw!==this))&&B.vt(this.GetExtent(),this.G.MW(Bf.B1))){this.
Ku=0x20;this.Ab=this.Ab|67108864;return null;}}if(DT){var GQ=0;var Eg;this.Ab=this.
Ab|(1<<N.Bi);for(Eg=this.Ab&4095;Eg>0;Eg=Eg>>1)if(!!(Eg&1))GQ=GQ+1;if(GQ===1)this.
Ab=(this.Ab|16777216)|(4096<<N.Bi);}if(Cd&&(this.Ab<16777216)){var CQ=this.Gj();
var By=null;if(!!CQ){var Mo=(!!this.Af?this.Af:this.G);By=CQ.DU(B.aam(JN,N.B1),N.
Bi,N.Cm,null,Mo,0x0);}if(!!By){var i;for(i=0;i<10;i++)if(!!(this.Ab&(1<<i)))By.BY.
Bb(B._NewObject(D.Ep,0).InitializeDown(i,N.Bk,N.Cm,AQ,true,N.B1));for(i=0;i<10;i++
)if(!!(this.Ab&(1<<i)))By.BY.Bb(B._NewObject(D.Ep,0).InitializeUp(i,N.Bk,N.Bk,0,
N.Cm,AQ,false,N.B1,N.B1));}}if(Cd)this.Ab=(this.Ab&~(1<<N.Bi))|33554432;if(Jg&&(
this.Ab<16777216))this.Ab=this.Ab|67108864;if(Cd&&N.CA)this.Ab=this.Ab|67108864;
if(Cd&&!(this.Ab&4095))this.Ku=0x0;if(Cd&&!(this.Ab&16777215))this.Ab=0;if(Dg&&(
this.Ab>=67108864)){var CQ=this.Gj();if(!!CQ)CQ.LD(null,null,this,this.Ku);}if((
Dg&&!!(this.Ab&16777216))&&!!(this.Ab&33554432)){Dg=false;Cd=true;}if(!!N&&!(this.
Ab&(4096<<N.Bi)))return this;if(!!Aq&&!(this.Ab&(4096<<Aq.Bi)))return this;if(Cd&&
!(this.Ab&16777216))return this;if(((DT||IU)||Dg)&&((this.Ab<16777216)||(this.Ab>=
33554432)))return this;if(Cd)this.Ab=this.Ab&3758100479;if(Cd&&!(this.Ab&16777215
))this.Ab=0;if(!!N){this.Down=DT||Dg;this.DI=this.K5(N.Bk);this.Ck=N.Ck;this.Bk=
N.Bk;this.As=AQ;this.Bw=N.Bw;this.Cm=N.Cm;this.CA=N.CA;this.Bi=N.Bi;this.Am=N.Am;
if(N.Down&&!N.Bw)Ke=false;}if(!!Aq){this.Down=true;this.DI=this.K5(Aq.Bk);this.Ck=
Aq.Ck;this.Bk=Aq.Bk;this.As=Aq.As;this.Bw=Aq.Bw;this.Cm=Aq.Cm;this.Bi=Aq.Bi;this.
CA=false;this.Am=Aq.Am;}var L0=this.Down;if(!!Aq)(A=this.Ln)?A[1].call(A[0],this
):null;if((!!N&&this.Down)&&!this.Bw)(A=this.Bs)?A[1].call(A[0],this):null;if((!
!N&&this.Down)&&(this.Bw>0))(A=this.DX)?A[1].call(A[0],this):null;if((this.Down&&
this.DI)&&!Ke){this.L1=true;(A=this.Ih)?A[1].call(A[0],this):null;}if(this.L1&&(((
L0&&!this.DI)&&Ke)||((!L0&&this.DI)&&Ke))){this.L1=false;(A=this.Ii)?A[1].call(A[
0],this):null;}if(!!N&&!L0)(A=this.DY)?A[1].call(A[0],this):null;if(!!this.E1){var
FZ=0x0;if(((((this.E1&0x10)===0x10)&&!!N)&&N.Down)&&(N.Bw>=1000))FZ=0x10;if((((this.
E1&0x1)===0x1)&&!!Aq)&&((Aq.B1[1]-Aq.EX[1])<=-this.Is))FZ=0x1;if((((this.E1&0x2)===
0x2)&&!!Aq)&&((Aq.B1[1]-Aq.EX[1])>=this.Is))FZ=0x2;if((((this.E1&0x4)===0x4)&&!!
Aq)&&((Aq.B1[0]-Aq.EX[0])<=-this.Is))FZ=0x4;if((((this.E1&0x8)===0x8)&&!!Aq)&&((
Aq.B1[0]-Aq.EX[0])>=this.Is))FZ=0x8;if(!!FZ){var CQ=this.Gj();if(!!CQ){this.Ku=FZ;
CQ.LD(null,this,this,FZ);}}}return this;},DU:function(Ai,O,Cp,D3,D7,D6){var A;if(
!!D3&&(D3!==this))return null;if((Cp<1)||(Cp>this.MY))return null;if(this.Ab>=33554432
)return null;if((this.Ab>=16777216)&&!(this.Ab&(4096<<O)))return null;if(!!(D6&this.
E1))return null;if(this.OA()){var Aj=B.kz(Ai,this.GetExtent());if(!((Aj[0]>=Aj[2
])||(Aj[1]>=Aj[3]))){var CI=B.zT(Ai);var AU=AQ;if(CI[0]<Aj[0])AU=[Aj[0]-CI[0],AU[
1]];if(CI[0]>=Aj[2])AU=[(Aj[2]-CI[0])-1,AU[1]];if(CI[1]<Aj[1])AU=[AU[0],Aj[1]-CI[
1]];if(CI[1]>=Aj[3])AU=[AU[0],(Aj[3]-CI[1])-1];return B._NewObject(D.HY,0).Initialize(
this,AU);}}else{var A1=B.aan(9,B.vw,null);var i;A1.Set(0,B.zT(Ai));A1.Set(1,A1.Get(
0));A1.Set(2,A1.Get(0));A1.Set(3,A1.Get(0));A1.Set(4,A1.Get(0));A1.Set(1,[Ai[0],
A1.Get(1)[1]]);A1.Set(2,[A1.Get(2)[0],Ai[1]]);A1.Set(3,[Ai[2],A1.Get(3)[1]]);A1.
Set(4,[A1.Get(4)[0],Ai[3]]);A1.Set(5,Ai.slice(0,2));A1.Set(6,[Ai[2],Ai[1]]);A1.Set(
7,[Ai[0],Ai[3]]);A1.Set(8,Ai.slice(2,4));for(i=0;i<9;i=i+1)if(this.K5(A1.Get(i))
)return B._NewObject(D.HY,0).Initialize(this,B.aaj(A1.Get(i),A1.Get(0)));}return null;
},M7:function(C){if(C<1)C=1;this.Is=C;},JH:function(C){if(C<1)C=1;this.MY=C;},A0:
function(C){if(C)this.AV(0x10,0x0);else this.AV(0x0,0x10);},_Init:function(aArg){
D.D2._Init.call(this,aArg);this.__proto__=D.Bu;this.F=0x11B;},_Mark:function(E){
var A;D.D2._Mark.call(this,E);if((A=this.Ln)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Ii)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ih)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.DX)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);if((A=this.DY)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.
Bs)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::SimpleTouchHandler"
};D.C9={timer:null,Km:null,HO:null,Ab:0,JY:0,Eh:5000,G0:0,Kd:B.vw,GH:0,EH:0,Az:0
,Gc:0,HR:0,GG:0,EG:0,Ay:0,Gb:0,Ga:0,Ck:B.vw,MC:B.vw,BD:B.vw,BE:B.vw,As:B.vw,MF:0.5
,JL:true,Hh:false,DE:false,DF:false,JX:false,I0:0,C6:function(AM,aClip,aOffset,AA
,aBlend){},Bb:function(An){var A;var N=(D.Ep.isPrototypeOf(An)?An:null);var Aq=(
D.G5.isPrototypeOf(An)?An:null);var Bf=(D.HX.isPrototypeOf(An)?An:null);var DT;var
Dg;var Jg;var Cd;var IU;DT=(!!N&&N.Down)&&!N.Bw;Dg=(!!N&&N.Down)&&(N.Bw>0);Jg=(!
!N&&N.Down)&&(N.Bw>this.I0);Cd=!!N&&!N.Down;IU=!!Aq;if(DT)this.I0=((A=(N.CA?0:50
))&0x80)?A|0xFFFFFF00:A&0xFF;if(DT){var GQ=0;var Eg;this.Ab=this.Ab|(1<<N.Bi);for(
Eg=this.Ab&4095;Eg>0;Eg=Eg>>1)if(!!(Eg&1))GQ=GQ+1;if(GQ===1)this.Ab=(this.Ab|16777216
)|(4096<<N.Bi);}if(Cd&&(this.Ab<16777216)){var CQ=this.Gj();var By=null;if(!!CQ){
var Mo=(!!this.Af?this.Af:this.G);By=CQ.DU(B.aam(JN,N.B1),N.Bi,N.Cm,null,Mo,0x0);
}if(!!By){var i;for(i=0;i<10;i++)if(!!(this.Ab&(1<<i)))By.BY.Bb(B._NewObject(D.Ep
,0).InitializeDown(i,N.Bk,N.Cm,AQ,true,N.B1));for(i=0;i<10;i++)if(!!(this.Ab&(1<<
i)))By.BY.Bb(B._NewObject(D.Ep,0).InitializeUp(i,N.Bk,N.Bk,0,N.Cm,AQ,false,N.B1,
N.B1));}}if(Cd)this.Ab=(this.Ab&~(1<<N.Bi))|33554432;if(Jg&&(this.Ab<16777216))this.
Ab=this.Ab|67108864;if(Cd&&N.CA)this.Ab=this.Ab|67108864;if(Cd&&!(this.Ab&16777215
))this.Ab=0;if(Dg&&(this.Ab>=67108864)){var CQ=this.Gj();if(!!CQ)CQ.LD(null,null
,this,0x0);}if((Dg&&!!(this.Ab&16777216))&&!!(this.Ab&33554432)){Dg=false;Cd=true;
}if(!!N&&!(this.Ab&(4096<<N.Bi)))return this;if(!!Aq&&!(this.Ab&(4096<<Aq.Bi)))return this;
if(Cd&&!(this.Ab&16777216))return this;if(((DT||IU)||Dg)&&((this.Ab<16777216)||(
this.Ab>=33554432)))return this;if(Cd)this.Ab=this.Ab&3758100479;if(Cd&&!(this.Ab&
16777215))this.Ab=0;if(!!Bf&&(Bf.Iw===this))return null;if((!!Bf&&Bf.Down)&&(this.
JX||!this.Hh))return null;if((!!Bf&&Bf.Down)&&!B.vt(this.J,this.G.MW(Bf.B1)))return null;
if((!!Bf&&!Bf.Down)&&(!this.JX||(this.JY!==Bf.Bi)))return null;if((!N&&!Aq)&&!Bf
)return null;if(!!N){this.JX=DT||Dg;this.JY=N.Bi;this.Ck=N.Ck;}if(!!Aq)this.JY=Aq.
Bi;if(!!Bf){this.JX=Bf.Down;this.JY=Bf.Bi;}if(!!Bf&&Bf.Down){this.Mq();this.Ay=(((
Bf.Am-this.Ga)*0.001)*this.EG)+this.Ay;this.Az=(((Bf.Am-this.HR)*0.001)*this.EH)+
this.Az;if(this.DE)this.Ay=0;if(this.DF)this.Az=0;this.EG=0;this.EH=0;this.DE=false;
this.DF=false;this.Kd=this.As;this.G0=Bf.Am;return this;}if(DT){this.Mq();this.Ay=(((
N.Am-this.Ga)*0.001)*this.EG)+this.Ay;this.Az=(((N.Am-this.HR)*0.001)*this.EH)+this.
Az;if(this.DE||!this.Hh)this.Ay=0;if(this.DF||!this.Hh)this.Az=0;this.EG=0;this.
EH=0;this.DE=false;this.DF=false;if(!this.Hh){this.Hh=true;(A=this.Km)?A[1].call(
A[0],this):null;}this.Kd=this.As;this.G0=N.Am;}if(!!Aq){var BI=B.aaj(Aq.Bk,Aq.Ck
);var Ao=this.As;if(this.JL)Ao=[this.Kd[0]+BI[0],Ao[1]];Ao=[Ao[0],this.Kd[1]+BI[
1]];if(Ao[0]<this.BE[0])Ao=[this.BE[0]+(((Ao[0]-this.BE[0])/2)|0),Ao[1]];else if(
Ao[0]>this.BD[0])Ao=[this.BD[0]+(((Ao[0]-this.BD[0])/2)|0),Ao[1]];if(Ao[1]<this.
BE[1])Ao=[Ao[0],this.BE[1]+(((Ao[1]-this.BE[1])/2)|0)];else if(Ao[1]>this.BD[1])
Ao=[Ao[0],this.BD[1]+(((Ao[1]-this.BD[1])/2)|0)];if(!B.z8(Ao,this.As)){this.MC=B.
aaj(Ao,this.As);this.As=Ao;(A=this.HO)?A[1].call(A[0],this):null;}}if((!!Bf&&!Bf.
Down)&&((Bf.Am-this.G0)>=200)){this.Ay=0;this.Az=0;}if(Dg&&((N.Am-this.G0)>=200)
){this.Ay=0;this.Az=0;}if(!!Aq&&(Aq.Am>this.G0)){var BI=Aq.As;var NM=1000/(Aq.Am-
this.G0);var Fl=0;var Fm;if(this.JL)Fl=BI[0]*NM;Fm=BI[1]*NM;if((Fl*this.Ay)<0)this.
Ay=0;if((Fm*this.Az)<0)this.Az=0;this.Ay=(this.Ay+Fl)*0.5;this.Az=(this.Az+Fm)*0.5;
this.G0=Aq.Am;}if(!Cd&&!Bf)return this;if(!!N&&N.CA){this.Ay=0;this.Az=0;}if((this.
As[0]<=this.BE[0])||(this.As[0]>=this.BD[0]))this.Ay=0;else if(!this.Ay){var AI=
this.As[0];var A$=this.BE[0];var Ba=this.BD[0];if(AI<A$)Ba=this.BE[0];else if(AI>
Ba)A$=this.BD[0];else{A$=AI;Ba=AI;}if((A$-AI)<=(AI-Ba))AI=A$;else AI=Ba;if(AI!==
this.As[0]){var Ca=AI-this.As[0];if(Ca>0)this.Ay=Math.sqrt((Ca*2)*this.Eh)+20;if(
Ca<0)this.Ay=-Math.sqrt((-Ca*2)*this.Eh)-20;this.EG=(400-(this.Ay*this.Ay))/(2*Ca
);this.GG=AI;}}else{var R6=this.Ay*this.Ay;var Ca=R6/(2*this.Eh);var AI=this.As[
0];if(this.Ay>0)AI=AI+(Ca|0);if(this.Ay<0)AI=AI-(Ca|0);if(AI>this.BD[0])AI=this.
BD[0];else if(AI<this.BE[0])AI=this.BE[0];var Oc=AI;var A$=this.BE[0];var Ba=this.
BD[0];if(AI<A$)Ba=this.BE[0];else if(AI>Ba)A$=this.BD[0];else{A$=AI;Ba=AI;}if(this.
Ay>0){if(Ba<=this.As[0])AI=A$;else if((AI-Ba)<(A$-AI))AI=Ba;else AI=A$;}else if(
A$>=this.As[0])AI=Ba;else if((AI-Ba)>(A$-AI))AI=A$;else AI=Ba;if(AI!==this.As[0]
){Ca=AI-this.As[0];if(AI!==Oc){var Ft=AI-Oc;if(Ft>0)this.Ay=this.Ay+Math.sqrt((Ft
*2)*this.Eh);if(Ft<0)this.Ay=this.Ay-Math.sqrt((-Ft*2)*this.Eh);}if(this.Ay>0)this.
Ay=this.Ay+20;if(this.Ay<0)this.Ay=this.Ay-20;this.EG=(400-(this.Ay*this.Ay))/(2
*Ca);this.GG=AI;}else this.Ay=0;}if((this.As[1]<=this.BE[1])||(this.As[1]>=this.
BD[1]))this.Az=0;else if(!this.Az){var AJ=this.As[1];var A$=this.BE[1];var Ba=this.
BD[1];if(AJ<A$)Ba=this.BE[1];else if(AJ>Ba)A$=this.BD[1];else{A$=AJ;Ba=AJ;}if((A$-
AJ)<=(AJ-Ba))AJ=A$;else AJ=Ba;if(AJ!==this.As[1]){var Ca=AJ-this.As[1];if(Ca>0)this.
Az=Math.sqrt((Ca*2)*this.Eh)+20;if(Ca<0)this.Az=-Math.sqrt((-Ca*2)*this.Eh)-20;this.
EH=(400-(this.Az*this.Az))/(2*Ca);this.GH=AJ;}}else{var R7=this.Az*this.Az;var Ca=
R7/(2*this.Eh);var AJ=this.As[1];if(this.Az>0)AJ=AJ+(Ca|0);if(this.Az<0)AJ=AJ-(Ca|
0);if(AJ>this.BD[1])AJ=this.BD[1];else if(AJ<this.BE[1])AJ=this.BE[1];var Od=AJ;
var A$=this.BE[1];var Ba=this.BD[1];if(AJ<A$)Ba=this.BE[1];else if(AJ>Ba)A$=this.
BD[1];else{A$=AJ;Ba=AJ;}if(this.Az>0){if(Ba<=this.As[1])AJ=A$;else if((AJ-Ba)<(A$-
AJ))AJ=Ba;else AJ=A$;}else if(A$>=this.As[1])AJ=Ba;else if((AJ-Ba)>(A$-AJ))AJ=A$;
else AJ=Ba;if(AJ!==this.As[1]){Ca=AJ-this.As[1];if(AJ!==Od){var Ft=AJ-Od;if(Ft>0
)this.Az=this.Az+Math.sqrt((Ft*2)*this.Eh);if(Ft<0)this.Az=this.Az-Math.sqrt((-Ft
*2)*this.Eh);}if(this.Az>0)this.Az=this.Az+20;if(this.Az<0)this.Az=this.Az-20;this.
EH=(400-(this.Az*this.Az))/(2*Ca);this.GH=AJ;}else this.Az=0;}if(!!N)this.Ga=N.Am;
if(!!Bf)this.Ga=Bf.Am;this.HR=this.Ga;this.Gb=this.As[0];this.Gc=this.As[1];this.
R8();return this;},DU:function(Ai,O,Cp,D3,D7,D6){var A;if(!!D3&&(D3!==this))return null;
if(this.Ab>=33554432)return null;if((this.Ab>=16777216)&&!(this.Ab&(4096<<O)))return null;
if(!this.JL&&!!(D6&0xC))return null;var Aj=B.kz(Ai,this.J);if(!((Aj[0]>=Aj[2])||(
Aj[1]>=Aj[3]))){var CI=B.zT(Ai);var AU=AQ;if(CI[0]<Aj[0])AU=[Aj[0]-CI[0],AU[1]];
if(CI[0]>=Aj[2])AU=[(Aj[2]-CI[0])-1,AU[1]];if(CI[1]<Aj[1])AU=[AU[0],Aj[1]-CI[1]];
if(CI[1]>=Aj[3])AU=[AU[0],(Aj[3]-CI[1])-1];return B._NewObject(D.HY,0).Initialize(
this,AU);}return null;},Mq:function(){if(!!this.timer){B.zl([this,this.Cu],this.
timer,0);this.timer=null;}},R8:function(){this.timer=B._GetAutoObject(B.abl.Fz);
B.y_([this,this.Cu],this.timer,0);},Cu:function(T){var A;if(!this.timer)return;var
HS=(this.timer.Am-this.Ga)*0.001;var HT=(this.timer.Am-this.HR)*0.001;var R_=HS*
HS;var R$=HT*HT;var Fl=(this.EG*HS)+this.Ay;var Fm=(this.EH*HT)+this.Az;var Ao=[((((
this.EG*0.5)*R_)+(this.Ay*HS))+this.Gb)|0,((((this.EH*0.5)*R$)+(this.Az*HT))+this.
Gc)|0];if(this.DE&&(HS>=0.5)){Ao=[this.GG,Ao[1]];this.Ay=0;this.EG=0;this.Gb=Ao[
0];this.DE=false;}else if(this.DE){var FQ=1-Math.pow(1-(HS/0.5),5);Ao=[(this.Gb+((
this.GG-this.Gb)*FQ))|0,Ao[1]];}if(this.DF&&(HT>=0.5)){Ao=[Ao[0],this.GH];this.Az=
0;this.EH=0;this.Gc=Ao[1];this.DF=false;}else if(this.DF){var FQ=1-Math.pow(1-(HT
/0.5),5);Ao=[Ao[0],(this.Gc+((this.GH-this.Gc)*FQ))|0];}if(((this.Ay>0)&&(Fl<0))||((
this.Ay<0)&&(Fl>0))){Fl=0;Ao=[this.As[0],Ao[1]];}if(((this.Az>0)&&(Fm<0))||((this.
Az<0)&&(Fm>0))){Fm=0;Ao=[Ao[0],this.As[1]];}if(!this.DE&&(Ao[0]<this.BE[0])){this.
Gb=Ao[0];this.GG=this.BE[0];this.Ga=this.timer.Am;this.DE=true;}else if(!this.DE&&(
Ao[0]>this.BD[0])){this.Gb=Ao[0];this.GG=this.BD[0];this.Ga=this.timer.Am;this.DE=
true;}if(!this.DF&&(Ao[1]<this.BE[1])){this.Gc=Ao[1];this.GH=this.BE[1];this.HR=
this.timer.Am;this.DF=true;}else if(!this.DF&&(Ao[1]>this.BD[1])){this.Gc=Ao[1];
this.GH=this.BD[1];this.HR=this.timer.Am;this.DF=true;}if(((!this.DE&&!!this.Ay)&&(
Fl>-20))&&(Fl<20)){Ao=[this.GG,Ao[1]];this.Ay=0;this.EG=0;this.Gb=Ao[0];}if(((!this.
DF&&!!this.Az)&&(Fm>-20))&&(Fm<20)){Ao=[Ao[0],this.GH];this.Az=0;this.EH=0;this.
Gc=Ao[1];}if(!B.z8(Ao,this.As)){this.MC=B.aaj(Ao,this.As);this.As=Ao;(A=this.HO)?
A[1].call(A[0],this):null;}if(((!this.Ay&&!this.Az)&&!this.DE)&&!this.DF){this.Mq(
);this.Hh=false;}},Pf:function(C){if(C<0)C=0;if(C>1)C=1;if(C===this.MF)return;this.
MF=C;if(C<(1e-007))C=1e-007;this.Eh=C*10000;},_Init:function(aArg){D.Bt._Init.call(
this,aArg);this.__proto__=D.C9;this.F=0x11B;},_Mark:function(E){var A;D.Bt._Mark.
call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Km)&&((
A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.HO)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);},_className:"Core::SlideTouchHandler"};D.Du={U:null,DY:null,Bs:null
,DX:null,GZ:0,Am:0,M$:0,Cw:148,AZ:0,AF:0,AW:true,Down:false,JJ:false,BC:function(
aArg){var A;var AB=(D.M.isPrototypeOf(A=this.I)?A:null);if(!AB)throw new Error(LL
);this.U=AB.Kf;AB.Kf=this;},Bb:function(An){var A;if(!!An&&An.OD(this.Cw)){this.
Down=An.Down;this.AZ=An.AZ;this.AF=An.AF;this.Am=An.Am;if(An.Down){this.M$=this.
GZ;this.JJ=this.GZ>0;if(this.JJ)(A=this.DX)?A[1].call(A[0],this):null;else(A=this.
Bs)?A[1].call(A[0],this):null;this.GZ=this.GZ+1;return true;}if(!An.Down){this.JJ=
this.GZ>1;this.M$=this.GZ-1;this.GZ=0;(A=this.DY)?A[1].call(A[0],this):null;return true;
}}return false;},_Init:function(aArg){this.__proto__=D.Du;this.BC(aArg);B.hJ++;}
,_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
E){var A;if((A=this.U)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.DY)&&((A=A[
0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Bs)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);if((A=this.DX)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.
I)&&(A._cycle!=E))A._Mark(A._cycle=E);},I:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};D.HY={BY:null,HZ:0,As:B.vw,Initialize:function(P,aOffset
){this.BY=P;this.As=aOffset;this.HZ=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=D.HY;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.BY)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.I)&&(A._cycle!=E))A._Mark(
A._cycle=E);},I:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};D.G8={
FW:null,BK:B.vx,Aa:B.vx,isEmpty:false,_Init:function(aArg){this.__proto__=D.G8;B.
hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.FW)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.I
)&&(A._cycle!=E))A._Mark(A._cycle=E);},I:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};D.Jz={Fo:B.vw,Fn:B.vw,_Init:function(aArg){D.G8._Init.call(
this,aArg);this.__proto__=D.Jz;},_className:"Core::LayoutLineContext"};D.JA={Jb:
B.vw,Ja:B.vw,Fo:B.vw,Fn:B.vw,_Init:function(aArg){D.G8._Init.call(this,aArg);this.
__proto__=D.JA;},_className:"Core::LayoutQuadContext"};D.KL={AB:null,U:null,CY:null
,C4:null,B6:null,GX:null,_Init:function(aArg){this.__proto__=D.KL;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.AB)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.U)&&(A._cycle!=E)
)A._Mark(A._cycle=E);if((A=this.CY)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
C4)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B6)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.GX)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.I)&&(A._cycle!=E
))A._Mark(A._cycle=E);},I:null,_cycle:0,_observers:null,_className:"Core::DialogContext"
};D.Nc={CW:null,AY:null,AH:null,NO:false,Rs:function(){if(!this.CW)return;var Dl=
this.CW;this.CW.Di=null;this.CW=null;B.ow([this,this.Mi],this);Dl.M0(this);},RK:
function(T){if(!!this.CW)return;if(!this.AH)return;this.CW=this.AH;this.AH=this.
AH.U;if(!!this.AH)this.AH.Af=null;else this.AY=null;this.CW.U=null;this.NO=true;
this.CW.Ip(this);this.NO=false;},RS:function(T){B.ow([this,this.RK],this);},RR:function(
T){B.ow([this,this.RS],this);},Mi:function(T){B.ow([this,this.RR],this);},Oq:function(
Bm){if(!Bm||!Bm.Di)return;if(Bm.Di!==this)throw new Error(Hv);var Oi=false;if(this.
CW===Bm){this.CW=null;Oi=true;B.ow([this,this.Mi],this);}else{if(!!Bm.U)Bm.U.Af=
Bm.Af;else this.AY=Bm.Af;if(!!Bm.Af)Bm.Af.U=Bm.U;else this.AH=Bm.U;Bm.Af=null;Bm.
U=null;}Bm.Di=null;if(Oi)Bm.MZ(this);},P4:function(Bm,Ri){if(!Bm)return;if(!!Bm.
Di)throw new Error(LM);Bm.Di=this;if(Ri){Bm.U=this.AH;if(!!this.AH)this.AH.Af=Bm;
else this.AY=Bm;this.AH=Bm;}else{Bm.Af=this.AY;if(!!this.AY)this.AY.U=Bm;else this.
AH=Bm;this.AY=Bm;}if(!this.CW)B.ow([this,this.Mi],this);},_Init:function(aArg){this.
__proto__=D.Nc;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.CW)&&(A._cycle!=E))A._Mark(A._cycle=E);if((
A=this.AY)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.AH)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.I)&&(A._cycle!=E))A._Mark(A._cycle=E);},I:null,_cycle:0,_observers:
null,_className:"Core::TaskQueue"};D.Ix={Di:null,Af:null,U:null,M0:function(IJ){
},MZ:function(IJ){},Ip:function(IJ){this.MA();},Gg:function(){if(!!this.Di&&(this.
Di.CW===this))this.Di.Rs();},MA:function(){if(!!this.Di)this.Di.Oq(this);},K4:function(
){return!!this.Di&&(this.Di.CW===this);},_Init:function(aArg){this.__proto__=D.Ix;
B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.Di)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Af
)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.U)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.I)&&(A._cycle!=E))A._Mark(A._cycle=E);},I:null,_cycle:0,_observers:
null,_className:"Core::Task"};D.E0={resource:null,Dr:function(){this.resource=null;
},BC:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=D.E0;
this.BC(aArg);B.hJ++;},_Done:function(){this.Dr();this.__proto__=null;B.hJ--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.I)&&(A._cycle!=E))A._Mark(A._cycle=
E);},I:null,_cycle:0,_observers:null,_className:"Core::Resource"};D.Timer={Gp:null
,timer:null,Am:0,Period:1000,HW:0,AW:false,Dr:function(){var tmp=this.timer;if(!
!tmp)tmp.DestroyTimer();this.timer=null;},Kn:function(aBegin,aPeriod){if(aBegin<
0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>
0)))tmp=B.zk(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin
,aPeriod);}this.timer=tmp;},Hc:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.AW)this.Kn(this.HW,C);},Gm:function(C){if(C<0)C=0;if(C===this.
HW)return;this.HW=C;if(this.AW)this.Kn(C,this.Period);},A0:function(C){if(C===this.
AW)return;this.AW=C;if(C)this.Kn(this.HW,this.Period);else this.Kn(0,0);this.Am=
this.Jv();},Jv:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs
)|0;return ticksCount;},Trigger:function(){var A;this.Am=this.Jv();if(!this.Period
)this.A0(false);(A=this.Gp)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=D.Timer;B.hJ++;},_Done:function(){this.Dr();this.__proto__=null;B.hJ--;
},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Gp)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.I)&&(A._cycle!=E))A._Mark(A._cycle=E);},I:null
,_cycle:0,_observers:null,_className:"Core::Timer"};D.Gq={FB:null,Cy:null,N3:function(
T){var A;(A=this.FB)?A[1].call(A[0],this):null;},Hb:function(C){if(B.z_(this.Cy,
C))return;if(!!this.Cy)B.zn([this,this.N3],this.Cy,0);this.Cy=C;if(!!this.Cy)B.za([
this,this.N3],this.Cy,0);},_Init:function(aArg){this.__proto__=D.Gq;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.FB)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Cy)&&((A=A[
0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.I)&&(A._cycle!=E))A._Mark(A._cycle=
E);},I:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};D.Th={
DL:0x1,Sn:0x2,Sy:0x4,Tf:0x8,AW:0x10,S9:0x20,Sz:0x40,SL:0x80,Sx:0x100,SF:0x200,Sv:
0x400,SW:0x800,Nd:0x1000,Tg:0x2000,SU:0x4000,SV:0x8000,St:0x10000,ST:0x20000,S6:
0x40000};D.CE={SX:0x1,SY:0x2,Sj:0x4,Sk:0x8,Sl:0x10,Si:0x20};D.SB={SO:0,Tc:1,Sq:2
,SG:3,S0:4,Td:5,Te:6,Sr:7,Ss:8,SI:9,SH:10,S2:11,S1:12};D.KeyCode={NoKey:0,Ok:1,Exit:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};D.SZ={Tn:0x1,Tk:0x2,Tl:0x4,Tm:0x8,SJ:
0x10,SA:0x20};
D._Init=function(){D.G9.__proto__=D.BY;D.D2.__proto__=D.BY;D.Bt.__proto__=D.BY;D.
M.__proto__=D.Bt;D.Root.__proto__=D.M;D.KeyEvent.__proto__=D.Event;D.HX.__proto__=
D.Event;D.Ep.__proto__=D.Event;D.G5.__proto__=D.Event;D.Iq.__proto__=D.Bt;D.Bu.__proto__=
D.D2;D.C9.__proto__=D.Bt;D.Jz.__proto__=D.G8;D.JA.__proto__=D.G8;};D._ReInit=function(
){};D.Co=function(E){};return D;})();

/* Embedded Wizard */