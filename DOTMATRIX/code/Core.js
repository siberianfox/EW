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
Core=(function(){var B=EmWiApp;var C={};
var A9=[0,0];var Bc=[0,0,0,0];var DK="The view does not belong to this group";var
DL="The dialog component is already presented";var FA="The dialog component is actually not presented";
var E9="No fader to perform the fade-in/out operation";var FB="Trying to use the same fader twice";
var Ig="Trying to fade-in/out a group which belongs to another owner";var Kl="No view to restack";
var Jc="View is not in this group";var P$="No view to remove";var Qa="No view to add";
var Qb="View already in a group";var Qc="Recursive invalidate during active update cycle.";
var Km=[-8,-8,9,9];var Ng=[0,0,1,1];var Qd="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var Qe="Trying to cancel a task not belonging to this queue!";
var Nh="Trying to enqueue a task twice!";
C.Cu={Aj:null,Au:null,L:null,A4:null,I:0x103,Dt:0x14,KD:function(Z,Kt){},Gt:function(
E){var A;var Ce=E^this.Dt;if(!Ce)return;this.Dt=E;if(!!this.A4&&!((this.I&0x400)===
0x400)){this.L.I=this.L.I|0x5000;B.ow([A=this.L,A.CP],this);this.L.AA([0,0,(A=this.
L.R)[2]-A[0],A[3]-A[1]]);}if(!!this.A4&&((this.I&0x400)===0x400)){this.A4.Iq.I=this.
A4.Iq.I|0x1000;this.L.I=this.L.I|0x4000;B.ow([A=this.L,A.CP],this);}},II:function(
){var As=this.L;while(!!As){var DD=(C.Root.isPrototypeOf(As)?As:null);if(!!DD)return DD;
As=As.L;}return null;},DY:function(Bd,aClip,aOffset,A1,aBlend){},BI:function(AG){
return null;},Fm:function(Ay,Ac,C_,FC,FG,FF){return null;},KR:function(Ay){return Ay;
},KS:function(Z,CI){return A9;},JZ:function(aOffset,Kr){},GetExtent:function(){return Bc;
},Bn:function(HA,Je){var A;if(((this.I&0x200)===0x200))HA=HA&~0x400;var QT=(this.
I&~Je)|HA;var Ik=QT^this.I;this.I=QT;if(!!this.L&&!!(Ik&0x14)){var SV=((this.I&0x14
)===0x14);if(SV&&!this.L.Dq)this.L.Dg(this);if(!SV&&(this.L.Dq===this))this.L.Dg(
this.L.Rr(this,0x14));}if(!!this.L&&!!(Ik&0x403))this.L.AA(this.GetExtent());if(((
!!this.A4&&!!this.L)&&((QT&0x400)===0x400))&&((Ik&0x1)===0x1)){this.I=this.I|0x800;
this.L.I=this.L.I|0x4000;B.ow([A=this.L,A.CP],this);}if(!!this.L&&((Ik&0x400)===
0x400)){this.A4=null;this.I=this.I|0x800;this.L.I=this.L.I|0x4000;B.ow([A=this.L
,A.CP],this);}},_Init:function(aArg){this.__proto__=C.Cu;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Aj)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Au)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.L)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.A4)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);
},G:null,_cycle:0,_observers:null,_className:"Core::View"};C.JX={Bb:B.vw,Ba:B.vw
,KD:function(Z,Kt){var Y=B._NewObject(C.MK,0);this.A4=null;Y.Cg=this.getExtent();
Y.Ap=Z;Y.Iq=Kt;Y.HM=this.Ba;Y.HN=this.Bb;this.A4=Y;},KS:function(Z,CI){var A;var
AW=this.Dt;var Y=(C.MK.isPrototypeOf(A=this.A4)?A:null);var x1=Y.Cg[0];var y1=Y.
Cg[1];var x2=Y.Cg[2];var y2=Y.Cg[3];var B6=[Z[2]-Z[0],Z[3]-Z[1]];var w=x2-x1;var
h=y2-y1;var tmp;if(!CI){var C3=[(A=Y.Ap)[2]-A[0],A[3]-A[1]];x1=x1-Y.Ap[0];y1=y1-
Y.Ap[1];if(C3[0]!==B6[0]){var By=((AW&0x4)===0x4);var Bz=((AW&0x8)===0x8);var DB=((
AW&0x1)===0x1);if(!By&&(DB||!Bz))x1=((x1*B6[0])/C3[0])|0;if(!Bz&&(DB||!By)){x2=x2-
Y.Ap[0];x2=((x2*B6[0])/C3[0])|0;x2=x2-B6[0];}else x2=x2-Y.Ap[2];x1=x1+Z[0];x2=x2+
Z[2];if(!DB){if(By&&!Bz)x2=x1+w;else if(!By&&Bz)x1=x2-w;else{x1=x1+((((x2-x1)-w)
/2)|0);x2=x1+w;}}}else{x2=x2-Y.Ap[2];x1=x1+Z[0];x2=x2+Z[2];}if(C3[1]!==B6[1]){var
BA=((AW&0x10)===0x10);var Bx=((AW&0x20)===0x20);var DC=((AW&0x2)===0x2);if(!BA&&(
DC||!Bx))y1=((y1*B6[1])/C3[1])|0;if(!Bx&&(DC||!BA)){y2=y2-Y.Ap[1];y2=((y2*B6[1])
/C3[1])|0;y2=y2-B6[1];}else y2=y2-Y.Ap[3];y1=y1+Z[1];y2=y2+Z[3];if(!DC){if(BA&&!
Bx)y2=y1+h;else if(!BA&&Bx)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+h;}}}else{
y2=y2-Y.Ap[3];y1=y1+Z[1];y2=y2+Z[3];}}else{switch(CI){case 3:{x1=Z[0];x2=x1+w;}break;
case 4:{x2=Z[2];x1=x2-w;}break;case 1:{y1=Z[1];y2=y1+h;}break;case 2:{y2=Z[3];y1=
y2-h;}break;default:;}if((CI===3)||(CI===4)){var BA=((AW&0x10)===0x10);var Bx=((
AW&0x20)===0x20);var DC=((AW&0x2)===0x2);if(DC){y1=Z[1];y2=Z[3];}else if(BA&&!Bx
){y1=Z[1];y2=y1+h;}else if(Bx&&!BA){y2=Z[3];y1=y2-h;}else{y1=Z[1]+((((Z[3]-Z[1])-
h)/2)|0);y2=y1+h;}}if((CI===1)||(CI===2)){var By=((AW&0x4)===0x4);var Bz=((AW&0x8
)===0x8);var DB=((AW&0x1)===0x1);if(DB){x1=Z[0];x2=Z[2];}else if(By&&!Bz){x1=Z[0
];x2=x1+w;}else if(Bz&&!By){x2=Z[2];x1=x2-w;}else{x1=Z[0]+((((Z[2]-Z[0])-w)/2)|0
);x2=x1+w;}}}Y.isEmpty=(x1>=x2)||(y1>=y2);w=x2-x1;h=y2-y1;if(Y.HN[0]<Y.HM[0]){tmp=
x1;x1=x2-1;x2=tmp-1;}if(Y.HN[1]<Y.HM[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1
)x2=x1;if((y2-y1)===1)y2=y1;if(((this.I&0x100)===0x100)){this.Ba=[x1,y1];this.Bb=[
x2,y2];}else{this.BU([x1,y1]);this.BJ([x2,y2]);this.A4=Y;}return[w,h];},JZ:function(
aOffset,Kr){if(Kr){this.Ba=B.aak(this.Ba,aOffset);this.Bb=B.aak(this.Bb,aOffset);
}else{this.BU(B.aak(this.Ba,aOffset));this.BJ(B.aak(this.Bb,aOffset));}},GetExtent:
function(){if(!!this.A4&&this.A4.isEmpty)return Bc;return this.getExtent();},getExtent:
function(){var x1=this.Ba[0];var y1=this.Ba[1];var x2=this.Bb[0];var y2=this.Bb[
1];var w=x2-x1;var h=y2-y1;var tmp;if(w<0)w=-w;if(h<0)h=-h;if(w>=h){if(x2>x1)x2=
x2-1;if(x2<x1)x2=x2+1;}if(h>=w){if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=
x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},BJ:function(
E){var A;if(B.z8(E,this.Bb))return;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.
GetExtent());this.A4=null;this.Bb=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(
this.GetExtent());if((!!this.L&&((this.I&0x400)===0x400))&&!((this.L.I&0x2000)===
0x2000)){this.I=this.I|0x800;this.L.I=this.L.I|0x4000;B.ow([A=this.L,A.CP],this);
}},BU:function(E){var A;if(B.z8(E,this.Ba))return;if(!!this.L&&((this.I&0x1)===0x1
))this.L.AA(this.GetExtent());this.A4=null;this.Ba=E;if(!!this.L&&((this.I&0x1)===
0x1))this.L.AA(this.GetExtent());if((!!this.L&&((this.I&0x400)===0x400))&&!((this.
L.I&0x2000)===0x2000)){this.I=this.I|0x800;this.L.I=this.L.I|0x4000;B.ow([A=this.
L,A.CP],this);}},_Init:function(aArg){C.Cu._Init.call(this,aArg);this.__proto__=
C.JX;},_className:"Core::LineView"};C.Fu={Cl:B.vw,CF:B.vw,Bb:B.vw,Ba:B.vw,KD:function(
Z,Kt){var Y=B._NewObject(C.ML,0);this.A4=null;Y.Cg=this.GetExtent();Y.Ap=Z;Y.Iq=
Kt;Y.HM=this.Ba;Y.HN=this.Bb;Y.Mj=this.CF;Y.Mk=this.Cl;this.A4=Y;},KS:function(Z
,CI){var A;var AW=this.Dt;var Y=(C.ML.isPrototypeOf(A=this.A4)?A:null);var x1=Y.
Cg[0];var y1=Y.Cg[1];var x2=Y.Cg[2];var y2=Y.Cg[3];var B6=[Z[2]-Z[0],Z[3]-Z[1]];
var w=x2-x1;var h=y2-y1;if(!CI){var C3=[(A=Y.Ap)[2]-A[0],A[3]-A[1]];x1=x1-Y.Ap[0
];y1=y1-Y.Ap[1];if(C3[0]!==B6[0]){var By=((AW&0x4)===0x4);var Bz=((AW&0x8)===0x8
);var DB=((AW&0x1)===0x1);if(!By&&(DB||!Bz))x1=((x1*B6[0])/C3[0])|0;if(!Bz&&(DB||
!By)){x2=x2-Y.Ap[0];x2=((x2*B6[0])/C3[0])|0;x2=x2-B6[0];}else x2=x2-Y.Ap[2];x1=x1+
Z[0];x2=x2+Z[2];if(!DB){if(By&&!Bz)x2=x1+w;else if(!By&&Bz)x1=x2-w;else{x1=x1+((((
x2-x1)-w)/2)|0);x2=x1+w;}}}else{x2=x2-Y.Ap[2];x1=x1+Z[0];x2=x2+Z[2];}if(C3[1]!==
B6[1]){var BA=((AW&0x10)===0x10);var Bx=((AW&0x20)===0x20);var DC=((AW&0x2)===0x2
);if(!BA&&(DC||!Bx))y1=((y1*B6[1])/C3[1])|0;if(!Bx&&(DC||!BA)){y2=y2-Y.Ap[1];y2=((
y2*B6[1])/C3[1])|0;y2=y2-B6[1];}else y2=y2-Y.Ap[3];y1=y1+Z[1];y2=y2+Z[3];if(!DC){
if(BA&&!Bx)y2=y1+h;else if(!BA&&Bx)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+
h;}}}else{y2=y2-Y.Ap[3];y1=y1+Z[1];y2=y2+Z[3];}}else{switch(CI){case 3:{x1=Z[0];
x2=x1+w;}break;case 4:{x2=Z[2];x1=x2-w;}break;case 1:{y1=Z[1];y2=y1+h;}break;case
2:{y2=Z[3];y1=y2-h;}break;default:;}if((CI===3)||(CI===4)){var BA=((AW&0x10)===0x10
);var Bx=((AW&0x20)===0x20);var DC=((AW&0x2)===0x2);if(DC){y1=Z[1];y2=Z[3];}else
if(BA&&!Bx){y1=Z[1];y2=y1+h;}else if(Bx&&!BA){y2=Z[3];y1=y2-h;}else{y1=Z[1]+((((
Z[3]-Z[1])-h)/2)|0);y2=y1+h;}}if((CI===1)||(CI===2)){var By=((AW&0x4)===0x4);var
Bz=((AW&0x8)===0x8);var DB=((AW&0x1)===0x1);if(DB){x1=Z[0];x2=Z[2];}else if(By&&
!Bz){x1=Z[0];x2=x1+w;}else if(Bz&&!By){x2=Z[2];x1=x2-w;}else{x1=Z[0]+((((Z[2]-Z[
0])-w)/2)|0);x2=x1+w;}}}Y.isEmpty=(x1>=x2)||(y1>=y2);w=(x2-x1)-1;h=(y2-y1)-1;var
HE=Y.Cg[0];var HF=Y.Cg[1];var GU=(Y.Cg[2]-HE)-1;var GT=(Y.Cg[3]-HF)-1;if(!GU)GU=
1;if(!GT)GT=1;if(((this.I&0x100)===0x100)){this.Ba=[x1+((((Y.HM[0]-HE)*w)/GU)|0)
,y1+((((Y.HM[1]-HF)*h)/GT)|0)];this.Bb=[x1+((((Y.HN[0]-HE)*w)/GU)|0),y1+((((Y.HN[
1]-HF)*h)/GT)|0)];this.CF=[x1+((((Y.Mj[0]-HE)*w)/GU)|0),y1+((((Y.Mj[1]-HF)*h)/GT
)|0)];this.Cl=[x1+((((Y.Mk[0]-HE)*w)/GU)|0),y1+((((Y.Mk[1]-HF)*h)/GT)|0)];}else{
this.BU([x1+((((Y.HM[0]-HE)*w)/GU)|0),y1+((((Y.HM[1]-HF)*h)/GT)|0)]);this.BJ([x1+((((
Y.HN[0]-HE)*w)/GU)|0),y1+((((Y.HN[1]-HF)*h)/GT)|0)]);this.Ft([x1+((((Y.Mj[0]-HE)
*w)/GU)|0),y1+((((Y.Mj[1]-HF)*h)/GT)|0)]);this.Gu([x1+((((Y.Mk[0]-HE)*w)/GU)|0),
y1+((((Y.Mk[1]-HF)*h)/GT)|0)]);this.A4=Y;}return[w+1,h+1];},JZ:function(aOffset,
Kr){if(Kr){this.Ba=B.aak(this.Ba,aOffset);this.Bb=B.aak(this.Bb,aOffset);this.CF=
B.aak(this.CF,aOffset);this.Cl=B.aak(this.Cl,aOffset);}else{this.BU(B.aak(this.Ba
,aOffset));this.BJ(B.aak(this.Bb,aOffset));this.Ft(B.aak(this.CF,aOffset));this.
Gu(B.aak(this.Cl,aOffset));}},GetExtent:function(){if(!!this.A4&&this.A4.isEmpty
)return Bc;var x1=this.Ba[0];var y1=this.Ba[1];var x2=this.CF[0];var y2=this.CF[
1];if((((this.Cl[0]!==x1)||(this.Bb[1]!==y1))||(this.Bb[0]!==x2))||(this.Cl[1]!==
y2)){if(this.Bb[0]<x1)x1=this.Bb[0];if(this.CF[0]<x1)x1=this.CF[0];if(this.Cl[0]<
x1)x1=this.Cl[0];if(this.Bb[1]<y1)y1=this.Bb[1];if(this.CF[1]<y1)y1=this.CF[1];if(
this.Cl[1]<y1)y1=this.Cl[1];if(this.Ba[0]>x2)x2=this.Ba[0];if(this.Bb[0]>x2)x2=this.
Bb[0];if(this.Cl[0]>x2)x2=this.Cl[0];if(this.Ba[1]>y2)y2=this.Ba[1];if(this.Bb[1
]>y2)y2=this.Bb[1];if(this.Cl[1]>y2)y2=this.Cl[1];}else{var tmp;if(x2<x1){tmp=x1;
x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},Gu:function(
E){var A;if(B.z8(E,this.Cl))return;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.
GetExtent());this.A4=null;this.Cl=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(
this.GetExtent());if((!!this.L&&((this.I&0x400)===0x400))&&!((this.L.I&0x2000)===
0x2000)){this.I=this.I|0x800;this.L.I=this.L.I|0x4000;B.ow([A=this.L,A.CP],this);
}},Ft:function(E){var A;if(B.z8(E,this.CF))return;if(!!this.L&&((this.I&0x1)===0x1
))this.L.AA(this.GetExtent());this.A4=null;this.CF=E;if(!!this.L&&((this.I&0x1)===
0x1))this.L.AA(this.GetExtent());if((!!this.L&&((this.I&0x400)===0x400))&&!((this.
L.I&0x2000)===0x2000)){this.I=this.I|0x800;this.L.I=this.L.I|0x4000;B.ow([A=this.
L,A.CP],this);}},BJ:function(E){var A;if(B.z8(E,this.Bb))return;if(!!this.L&&((this.
I&0x1)===0x1))this.L.AA(this.GetExtent());this.A4=null;this.Bb=E;if(!!this.L&&((
this.I&0x1)===0x1))this.L.AA(this.GetExtent());if((!!this.L&&((this.I&0x400)===0x400
))&&!((this.L.I&0x2000)===0x2000)){this.I=this.I|0x800;this.L.I=this.L.I|0x4000;
B.ow([A=this.L,A.CP],this);}},BU:function(E){var A;if(B.z8(E,this.Ba))return;if(
!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent());this.A4=null;this.Ba=
E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent());if((!!this.L&&((
this.I&0x400)===0x400))&&!((this.L.I&0x2000)===0x2000)){this.I=this.I|0x800;this.
L.I=this.L.I|0x4000;B.ow([A=this.L,A.CP],this);}},OY:function(CX){var Bv=B.aan(4
,B.vw,null);var i=0;var j=3;var QM=false;var QN=false;Bv.Set(0,this.Ba);Bv.Set(1
,this.Bb);Bv.Set(2,this.CF);Bv.Set(3,this.Cl);while(i<4){var T1=Bv.Get(i)[0];var
Oi=Bv.Get(i)[1];var AaA=Bv.Get(j)[0];var Rb=Bv.Get(j)[1];if(((Oi>CX[1])!==(Rb>CX[
1]))||((Oi<CX[1])!==(Rb<CX[1]))){var x=((((AaA-T1)*(CX[1]-Oi))/(Rb-Oi))|0)+T1;if(
CX[0]>x)QM=!QM;if(CX[0]<x)QN=!QN;}j=i;i=i+1;}return QM||QN;},Ug:function(){return((((
this.Ba[0]===this.Cl[0])&&(this.Bb[0]===this.CF[0]))&&(this.Ba[1]===this.Bb[1]))&&(
this.CF[1]===this.Cl[1]))||((((this.Ba[0]===this.Bb[0])&&(this.CF[0]===this.Cl[0
]))&&(this.Ba[1]===this.Cl[1]))&&(this.Bb[1]===this.CF[1]));},_Init:function(aArg
){C.Cu._Init.call(this,aArg);this.__proto__=C.Fu;},_className:"Core::QuadView"};
C.B2={R:B.vx,KD:function(Z,Kt){var Y=B._NewObject(C.JV,0);Y.Cg=this.R;Y.Ap=Z;Y.Iq=
Kt;this.A4=Y;},KS:function(Z,CI){var A;var AW=this.Dt;var Y=this.A4;var x1=Y.Cg[
0];var y1=Y.Cg[1];var x2=Y.Cg[2];var y2=Y.Cg[3];var B6=[Z[2]-Z[0],Z[3]-Z[1]];var
w=x2-x1;var h=y2-y1;if(!CI){var C3=[(A=Y.Ap)[2]-A[0],A[3]-A[1]];x1=x1-Y.Ap[0];y1=
y1-Y.Ap[1];if(C3[0]!==B6[0]){var By=((AW&0x4)===0x4);var Bz=((AW&0x8)===0x8);var
DB=((AW&0x1)===0x1);if(!By&&(DB||!Bz))x1=((x1*B6[0])/C3[0])|0;if(!Bz&&(DB||!By)){
x2=x2-Y.Ap[0];x2=((x2*B6[0])/C3[0])|0;x2=x2-B6[0];}else x2=x2-Y.Ap[2];x1=x1+Z[0];
x2=x2+Z[2];if(!DB){if(By&&!Bz)x2=x1+w;else if(!By&&Bz)x1=x2-w;else{x1=x1+((((x2-
x1)-w)/2)|0);x2=x1+w;}}}else{x2=x2-Y.Ap[2];x1=x1+Z[0];x2=x2+Z[2];}if(C3[1]!==B6[
1]){var BA=((AW&0x10)===0x10);var Bx=((AW&0x20)===0x20);var DC=((AW&0x2)===0x2);
if(!BA&&(DC||!Bx))y1=((y1*B6[1])/C3[1])|0;if(!Bx&&(DC||!BA)){y2=y2-Y.Ap[1];y2=((
y2*B6[1])/C3[1])|0;y2=y2-B6[1];}else y2=y2-Y.Ap[3];y1=y1+Z[1];y2=y2+Z[3];if(!DC){
if(BA&&!Bx)y2=y1+h;else if(!BA&&Bx)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+
h;}}}else{y2=y2-Y.Ap[3];y1=y1+Z[1];y2=y2+Z[3];}}else{switch(CI){case 3:{x1=Z[0];
x2=x1+w;}break;case 4:{x2=Z[2];x1=x2-w;}break;case 1:{y1=Z[1];y2=y1+h;}break;case
2:{y2=Z[3];y1=y2-h;}break;default:;}if((CI===3)||(CI===4)){var BA=((AW&0x10)===0x10
);var Bx=((AW&0x20)===0x20);var DC=((AW&0x2)===0x2);if(DC){y1=Z[1];y2=Z[3];}else
if(BA&&!Bx){y1=Z[1];y2=y1+h;}else if(Bx&&!BA){y2=Z[3];y1=y2-h;}else{y1=Z[1]+((((
Z[3]-Z[1])-h)/2)|0);y2=y1+h;}}if((CI===1)||(CI===2)){var By=((AW&0x4)===0x4);var
Bz=((AW&0x8)===0x8);var DB=((AW&0x1)===0x1);if(DB){x1=Z[0];x2=Z[2];}else if(By&&
!Bz){x1=Z[0];x2=x1+w;}else if(Bz&&!By){x2=Z[2];x1=x2-w;}else{x1=Z[0]+((((Z[2]-Z[
0])-w)/2)|0);x2=x1+w;}}}Y.isEmpty=(x1>=x2)||(y1>=y2);if(((this.I&0x100)===0x100)
)this.R=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);this.A4=Y;}return[x2-x1,y2-y1];
},JZ:function(aOffset,Kr){if(Kr)this.R=B.aam(this.R,aOffset);else this.H(B.aam(this.
R,aOffset));},GetExtent:function(){return this.R;},H:function(E){var A;if(B.z9(E
,this.R))return;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);this.A4=null;
this.R=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);if((!!this.L&&((this.
I&0x400)===0x400))&&!((this.L.I&0x2000)===0x2000)){this.I=this.I|0x800;this.L.I=
this.L.I|0x4000;B.ow([A=this.L,A.CP],this);}},_Init:function(aArg){C.Cu._Init.call(
this,aArg);this.__proto__=C.B2;},_className:"Core::RectView"};C.O={AV:null,Bl:null
,NZ:null,BK:null,BN:null,EJ:null,JF:null,Dq:null,Hd:255,Ai:function(aArg){this.C5(
);},DY:function(Bd,aClip,aOffset,A1,aBlend){var A;A1=((A1+1)*this.Hd)>>8;aBlend=
aBlend&&((this.I&0x2)===0x2);if(!this.BK||(Bd.A3===this))this.ST(Bd,aClip,B.aak(
aOffset,this.R.slice(0,2)),A1,aBlend);else{var BL=255|(255<<8)|(255<<16)|((A1&0xFF
)<<24);this.BK.Update();Bd.Rn(aClip,this.BK,0,B.aam(this.R,aOffset),A9,BL,BL,BL,
BL,aBlend);}},Fm:function(Ay,Ac,C_,FC,FG,FF){var A;var P=this.Bl;var Jl=null;var
X=Bc;var DR=null;var Js=!!this.EJ&&(!!this.EJ.DO||!!this.EJ.AV);if(((A=B.kz(Ay,this.
R))[0]>=A[2])||(A[1]>=A[3]))return null;Ay=B.aal(Ay,this.R.slice(0,2));if(!!FG){
P=FG;while(!!P&&(P.L!==this))P=P.L;}while(!!P){if(((P.I&0x400)===0x400)&&!DR){DR=
P.Au;while(!!DR&&!((DR.I&0x200)===0x200))DR=DR.Au;if(!!DR)X=B.kz(Ay,DR.GetExtent(
));else X=Bc;}if(DR===P){DR=null;X=Bc;}if((((((P.I&0x8)===0x8)&&((P.I&0x10)===0x10
))&&!((P.I&0x40000)===0x40000))&&!((P.I&0x20000)===0x20000))&&(!((P.I&0x10000)===
0x10000)||((this.BN.A3===P)&&!Js))){var Cg=P.GetExtent();var NK=FC;var Jh=null;if(
NK===P)NK=null;if(((P.I&0x400)===0x400)){if(!(((A=B.kz(Cg,X))[0]>=A[2])||(A[1]>=
A[3])))Jh=P.Fm(X,Ac,C_,NK,FG,FF);}else if(!(((A=B.kz(Cg,Ay))[0]>=A[2])||(A[1]>=A[
3]))||(FC===P))Jh=P.Fm(Ay,Ac,C_,NK,FG,FF);P=P.Au;if(!!Jh){if(!Jl||((Jh.KV<Jl.KV)&&(
Jh.KV>=0)))Jl=Jh;if(!Jh.KV)P=null;}}else P=P.Au;FG=null;}return Jl;},KR:function(
Ay){var A;var Ag;var P=this.AV;var LS=Bc;var Mh=true;var result=(Ay=Ag=B.aal(Ay,
this.R.slice(0,2)),Ag);while(!!P){if(((P.I&0x200)===0x200)){var Mg=(C.Lw.isPrototypeOf(
P)?P:null);LS=B.kz(Ay,Mg.R);Mh=((Mg.I&0x1)===0x1);}if(((P.I&0x1)===0x1)){if(((P.
I&0x400)===0x400)){if(Mh){var X=B.kz(P.GetExtent(),LS);if(!((X[0]>=X[2])||(X[1]>=
X[3])))result=B.vS(result,P.KR(X));}}else{var X=B.kz(P.GetExtent(),Ay);if(!((X[0
]>=X[2])||(X[1]>=X[3])))result=B.vS(result,P.KR(X));}}P=P.Aj;}return B.kz(B.aam(
result,this.R.slice(0,2)),this.R);},Bn:function(HA,Je){var A;var Zw=this.I;C.B2.
Bn.call(this,HA,Je);var Ik=this.I^Zw;if(!!this.Dq&&((Ik&0x40)===0x40)){if(((this.
I&0x40)===0x40))this.Dq.Bn(0x40,0x0);else this.Dq.Bn(0x0,0x40);}if(!!this.BN&&((
Ik&0x40)===0x40)){if(((this.I&0x40)===0x40)&&((this.BN.A3.I&0x14)===0x14))this.BN.
A3.Bn(0x40,0x0);else this.BN.A3.Bn(0x0,0x40);}if(!!Ik){this.I=this.I|0x8000;B.ow([
this,this.CP],this);}},H:function(E){var A;if(B.z9(E,this.R))return;var Ip=[(A=this.
R)[2]-A[0],A[3]-A[1]];var N0=[E[2]-E[0],E[3]-E[1]];var JI=!B.z8(Ip,N0);if(JI&&!!
this.BK){this.BK.Lo(N0);B.vv(this,0);B.vv(this.BK,0);}C.B2.H.call(this,E);if((JI&&(
Ip[0]>0))&&(Ip[1]>0)){var Ap=[].concat(A9,Ip);var P=this.AV;while(!!P){if((!P.A4&&(
P.Dt!==0x14))&&!((P.I&0x400)===0x400))P.KD(Ap,null);P=P.Aj;}}if(JI){this.I=this.
I|0x5000;B.ow([this,this.CP],this);}},TR:function(AG){var S9=(C.KeyEvent.isPrototypeOf(
AG)?AG:null);var Fe=this.NZ;if(!S9)return null;while(!!Fe&&(!Fe.Bo||!Fe.BI(S9)))
Fe=Fe.Aj;return Fe;},Aaw:function(M){if(!!this.BK){this.BK.A3=this;var X=B.aal(this.
KR(B.aam(this.BK.Es,this.R.slice(0,2))),this.R.slice(0,2));this.BK.MC(X,X,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.ST(this.BK,X,A9,255,true);this.BK.
A3=null;}},ST:function(Bd,aClip,aOffset,A1,aBlend){var A;var P=this.AV;var LS=Bc;
var Mh=true;this.T$(Bd,aClip,aOffset,A1,aBlend);while(!!P){if(((P.I&0x200)===0x200
)){var Mg=(C.Lw.isPrototypeOf(P)?P:null);LS=B.kz(aClip,B.aam(Mg.R,aOffset));Mh=((
Mg.I&0x1)===0x1);}if(((P.I&0x1)===0x1)){if(((P.I&0x400)===0x400)){if(Mh){var X=B.
kz(B.aam(P.GetExtent(),aOffset),LS);if(!((X[0]>=X[2])||(X[1]>=X[3])))P.DY(Bd,X,aOffset
,A1,aBlend);}}else{var X=B.kz(B.aam(P.GetExtent(),aOffset),aClip);if(!((X[0]>=X[
2])||(X[1]>=X[3])))P.DY(Bd,X,aOffset,A1,aBlend);}}P=P.Aj;}this.Ub(Bd,aClip,aOffset
,A1,aBlend);},Aai:function(){var A;var QK=((this.I&0x1000)===0x1000);var HI=[0,0
,(A=this.R)[2]-A[0],A[3]-A[1]];var GV=false;var KB=Bc;var QI=Bc;var P=this.Bl;var
DR=null;while(!!P){if(((P.I&0x800)===0x800)){GV=true;P.I=P.I&~0x800;}if(GV&&((P.
I&0x200)===0x200))GV=false;P=P.Au;}GV=false;P=this.AV;if(QK){this.I=this.I&~0x1000;
QK=!((HI[0]>=HI[2])||(HI[1]>=HI[3]));}this.I=this.I|0x2000;while(!!P){if(((P.I&0x400
)===0x400)){if(!!P.A4&&(P.A4.Iq!==DR))P.A4=null;if((!P.A4&&GV)&&(P.Dt!==0x14))P.
KD(QI,DR);}if(!!P.A4){if(QK&&!((P.I&0x400)===0x400))P.KS(HI,0);if(GV&&((P.I&0x400
)===0x400))P.KS(QI,0);}if(((P.I&0x200)===0x200)){GV=((P.I&0x1000)===0x1000);DR=(
C.Lw.isPrototypeOf(P)?P:null);if(GV){P.I=P.I&~0x1000;KB=DR.R;QI=KB;GV=!((KB[0]>=
KB[2])||(KB[1]>=KB[3]));}if(GV)this.AA(DR.R);}P=P.Aj;}this.I=this.I&~0x2000;this.
R5([HI[2]-HI[0],HI[3]-HI[1]]);},CP:function(M){var A;var Aay=((this.I&0x1000)===
0x1000);if(((this.I&0x4000)===0x4000)){this.I=this.I&~0x4000;this.Aai();}if(((this.
I&0x8000)===0x8000)||Aay){this.I=this.I&~0x8000;this.Hy(this.I);}},Dg:function(E
){var A;if(!!E&&(E.L!==this))throw new Error(DK);if(!!E&&!((E.I&0x14)===0x14))E=
null;if(!!E&&((E.I&0x10000)===0x10000))E=null;if(E===this.Dq)return;if(!!this.Dq
)this.Dq.Bn(0x0,0x60);this.Dq=E;if(!!E){if(((this.I&0x40)===0x40))E.Bn(0x60,0x0);
else E.Bn(0x20,0x0);}},Lj:function(E){var A;if(!!this.BK===E)return;if(E){this.BK=
B._NewObject(B.Graphics.Canvas,0);this.BK.Lo([(A=this.R)[2]-A[0],A[3]-A[1]]);this.
BK.MQ=[this,this.Aaw];}else{this.BK.MQ=null;this.BK.Lo(A9);this.BK=null;}if(!!this.
L&&((this.I&0x1)===0x1))this.L.AA(this.R);B.vv(this,0);},Ar:function(E){if(E)this.
Bn(0x10,0x0);else this.Bn(0x0,0x10);},Ls:function(E){var A;if(E>255)E=255;if(E<0
)E=0;if(E===this.Hd)return;this.Hd=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(
this.R);},Pz:function(){var A;return((this.I&0x1)===0x1);},U:function(E){if(E)this.
Bn(0x1,0x0);else this.Bn(0x0,0x1);},Ub:function(Bd,aClip,aOffset,A1,aBlend){},T$:
function(Bd,aClip,aOffset,A1,aBlend){},GetMinimalSize:function(){return A9;},P0:
function(Cm,D6,Hz,FD,FE,LN,Fb,GO,D5,D3,D4){var A;if(!this.BN){this.VB(Cm,D6,Hz,FD
,FE,null,null,D5,D3,D4);return;}var Io=this.BN;var Cs=Io.Aj;if(((Cm.I&0x10000)===
0x10000)&&(this.BN.A3!==Cm))throw new Error(DL);var FU=B._NewObject(C.OB,0);var DQ=
Io.DQ;var DW=null;var CA=null;if(!!Cs){DW=Cs.DW;CA=Cs.CA;}if(!!Cs&&!!Io.JE)DW=Io.
JE;if(!!Cs&&!!Fb)CA=Fb;if(!!LN)DQ=LN;if(!D6)D6=B._GetAutoObject(B.abl.LC);if(!Hz
)Hz=D6;if(!FE)FE=FD;if(!FD)FD=FE;FU.DQ=Hz;FU.CA=FD;FU.DW=FE;FU.JE=GO;FU.A3=Cm;FU.
Aj=this.BN.Aj;this.BN.Aj=null;this.BN=FU;if(this.Dq===Cm)this.Dg(null);Io.A3.Bn(
0x0,0x10040);if(((this.I&0x40)===0x40)&&((Cm.I&0x4)===0x4))Cm.Bn(0x10040,0x0);else
Cm.Bn(0x10000,0x0);if(!!CA){this.Dp(Cs.A3,CA.Mx(),null,null,D4);this.Dp(Io.A3,DQ.
HV(),null,null,true);this.Dp(FU.A3,D6.HW(),D5,D3,true);}else if(!!DW){this.Dp(Cs.
A3,DW.My(),null,null,D4);this.Dp(Io.A3,DQ.HV(),null,null,true);this.Dp(FU.A3,D6.
HW(),D5,D3,true);}else if(!!DQ){this.Dp(Io.A3,DQ.HV(),null,null,D4);this.Dp(FU.A3
,D6.HW(),D5,D3,true);}else this.Dp(FU.A3,D6.HW(),D5,D3,D4);},Rp:function(Cm,LN,Fb
,GO,D5,D3,D4){var A;if(!this.BN)return;if(!Cm)return;var Cf=this.BN;var Cs=this.
BN.Aj;var KH=null;while((!!Cf&&(Cf.A3!==Cm))&&!!Cf.Aj){KH=Cf;Cf=Cs;Cs=Cf.Aj;}if(
!Cf||(Cf.A3!==Cm))throw new Error(FA);if(!KH){this.BN=Cs;Cf.Aj=null;}else{KH.Aj=
Cs;Cf.Aj=null;}Cf.A3.Bn(0x0,0x10040);if(((((this.I&0x40)===0x40)&&!!Cs)&&!KH)&&((
Cs.A3.I&0x4)===0x4))Cs.A3.Bn(0x40,0x0);var DQ=Cf.DQ;var DW=null;var CA=null;if(!
!Cs)DW=Cs.DW;if(!!Cs&&!!Cf.JE)DW=Cf.JE;if(!!Cs&&!!GO)DW=GO;if(!!KH&&!!Cs)CA=Cs.CA;
if((!!KH&&!!Cs)&&!!Fb)CA=Fb;if(!!LN)DQ=LN;if(!!CA){this.Dp(Cs.A3,CA.Mx(),null,null
,D4);this.Dp(Cf.A3,DQ.HV(),D5,D3,true);}else if(!!DW){this.Dp(Cs.A3,DW.My(),null
,null,D4);this.Dp(Cf.A3,DQ.HV(),D5,D3,true);}else this.Dp(Cf.A3,DQ.HV(),D5,D3,D4
);},VB:function(Cm,D6,Hz,FD,FE,Fb,GO,D5,D3,D4){var A;if(!Cm)return;if(!!this.BN&&(
this.BN.A3===Cm)){this.P0(Cm,D6,Hz,FD,FE,null,Fb,GO,D5,D3,D4);return;}if(((Cm.I&
0x10000)===0x10000))throw new Error(DL);var Cf=B._NewObject(C.OB,0);if(!!this.BN&&
!this.BN.CA){if(!GO)GO=Fb;if(!Fb)Fb=GO;}var CA=null;if(!!this.BN)CA=this.BN.CA;if(
!!this.BN&&!!Fb)CA=Fb;if(!D6)D6=B._GetAutoObject(B.abl.LC);if(!Hz)Hz=D6;if(!FE)FE=
FD;if(!FD)FD=FE;Cf.DQ=Hz;Cf.CA=FD;Cf.DW=FE;Cf.JE=GO;if(this.Dq===Cm)this.Dg(null
);if(!!this.BN)this.BN.A3.Bn(0x0,0x40);if(((this.I&0x40)===0x40)&&((Cm.I&0x4)===
0x4))Cm.Bn(0x10040,0x0);else Cm.Bn(0x10000,0x0);Cf.A3=Cm;Cf.Aj=this.BN;this.BN=Cf;
if(!!CA){this.Dp(this.BN.Aj.A3,CA.Mx(),null,null,D4);this.Dp(Cm,D6.HW(),D5,D3,true
);}else this.Dp(Cm,D6.HW(),D5,D3,D4);},Pl:function(){var A;if(((this.I&0x40)===0x40
))return;if(((this.I&0x80)===0x80))return;if(((this.I&0x10000)===0x10000)){if(!!
this.L)this.L.Pl();return;}if(!!this.L&&(this.L.Dq!==this))this.L.Dg(this);if(!!
this.L)this.L.Pl();},Uh:function(Dv){var A;return(A=Dv)&&((this.I&A)===A);},RJ:function(
CX){var tmp=this;while(!!tmp){CX=B.aaj(CX,tmp.R.slice(0,2));tmp=tmp.L;}return CX;
},DispatchEvent:function(AG){var A;var P=this.Dq;var As=(C.O.isPrototypeOf(P)?P:
null);var BE=null;var Js=!!this.EJ&&(!!this.EJ.DO||!!this.EJ.AV);if(!!P&&((((P.I&
0x10000)===0x10000)||((P.I&0x40000)===0x40000))||((P.I&0x20000)===0x20000))){P=null;
As=null;}if(!!this.BN&&!Js)BE=this.BN.A3.DispatchEvent(AG);if(!BE&&!!As)BE=As.DispatchEvent(
AG);else if(!BE&&!!P)BE=P.BI(AG);if(!BE)BE=this.BI(AG);if(!BE)BE=this.TR(AG);return BE;
},BroadcastEventAtPosition:function(AG,SL,aFilter){var A;var P=this.Bl;var BE=null;
while(!!P&&!BE){if((!aFilter||((A=aFilter)&&((P.I&A)===A)))&&B.vt(P.GetExtent(),
SL)){var As=(C.O.isPrototypeOf(P)?P:null);if(!!As)BE=As.BroadcastEventAtPosition(
AG,B.aaj(SL,As.R.slice(0,2)),aFilter);else BE=P.BI(AG);}P=P.Au;}if(!BE)BE=this.BI(
AG);return BE;},BroadcastEvent:function(AG,aFilter){var A;var P=this.Bl;var BE=null;
while(!!P&&!BE){if(!aFilter||((A=aFilter)&&((P.I&A)===A))){var As=(C.O.isPrototypeOf(
P)?P:null);if(!!As)BE=As.BroadcastEvent(AG,aFilter);else BE=P.BI(AG);}P=P.Au;}if(
!BE)BE=this.BI(AG);if(!BE)BE=this.TR(AG);return BE;},R5:function(aSize){},Hy:function(
Dv){},C5:function(){this.I=this.I|0x8000;B.ow([this,this.CP],this);},AA:function(
Ay){var A;var As=this;while(!!As&&!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))){var Kw=As.BK;
if(!As.L&&(As!==this)){As.AA(Ay);return;}if(!!Kw){var Zu=Kw.Es;Kw.Es=B.vS(Kw.Es,
Ay);if(!B.z9(Zu,Kw.Es)){B.vv(As,0);B.vv(Kw,0);}}if(!((As.I&0x1)===0x1))return;Ay=
B.kz(B.aam(Ay,As.R.slice(0,2)),As.R);As=As.L;}},Rr:function(Ad,aFilter){var A;if(
!Ad||(Ad.L!==this))return null;var In=Ad.Aj;var Is=Ad.Au;var L8=0x10000;if(((aFilter&
0x10000)===0x10000))L8=0x0;while(!!In||!!Is){if((!!In&&(!aFilter||((A=aFilter)&&((
In.I&A)===A))))&&(!L8||!((A=L8)&&((In.I&A)===A))))return In;if((!!Is&&(!aFilter||((
A=aFilter)&&((Is.I&A)===A))))&&(!L8||!((A=L8)&&((Is.I&A)===A))))return Is;if(!!In
)In=In.Aj;if(!!Is)Is=Is.Au;}return null;},Dp:function(GM,Bg,D5,D3,D4){var A;if(!
GM)return;if(!Bg)throw new Error(E9);if((!!Bg.O||!!Bg.L)||!!Bg.Dj)throw new Error(
FB);if(!!GM.L&&(GM.L!==this))throw new Error(Ig);if(!this.EJ)this.EJ=B._NewObject(
C.P2,0);Bg.L=this;Bg.O=GM;Bg.N2=D3;Bg.QW=D5;if(!!GM.JF)GM.JF.Dj.VD(GM.JF);GM.JF=
Bg;GM.I=GM.I|0x20000;if((D4&&!!this.EJ.Bl)&&!this.EJ.Bl.OX())(B.abl.MB.isPrototypeOf(
A=this.EJ.Bl)?A:null).Ri(Bg);else{var Dj=B._NewObject(B.abl.MB,0);Dj.Ri(Bg);this.
EJ.R1(Dj,false);}},Lz:function(Ad){var A;if(!Ad)throw new Error(Kl);if(Ad.L!==this
)throw new Error(Jc);if(!Ad.Aj)return;var Kv=this.Bl;if(((Kv===Ad)||!Kv)||(Kv.Aj===
Ad))return;if(((Ad.I&0x401)===0x401)){if(!!Ad.Au&&!!Ad.A4)Ad.Au.I=Ad.Au.I|0x800;
Ad.I=Ad.I|0x800;this.I=this.I|0x4000;B.ow([this,this.CP],this);}if(((Ad.I&0x200)===
0x200)){if(!!Ad.Au)Ad.Au.I=Ad.Au.I|0x800;this.I=this.I|0x4000;B.ow([this,this.CP
],this);}if(!!Ad.Au)Ad.Au.Aj=Ad.Aj;else this.AV=Ad.Aj;Ad.Aj.Au=Ad.Au;Ad.Au=Kv;Ad.
Aj=Kv.Aj;Kv.Aj=Ad;if(!!Ad.Aj)Ad.Aj.Au=Ad;else this.Bl=Ad;if(((Ad.I&0x1)===0x1))this.
AA(Ad.GetExtent());},Ly:function(){var A;var JM=Bc;while(!!this.AV){var P=this.AV;
if(((P.I&0x1)===0x1))JM=B.vS(JM,P.GetExtent());this.AV=this.AV.Aj;P.A4=null;P.L=
null;P.Aj=null;P.Au=null;}this.AV=null;this.Bl=null;this.Dg(null);if(!((JM[0]>=JM[
2])||(JM[1]>=JM[3])))this.AA(JM);},H7:function(Ad){var A;if(!Ad)throw new Error(
P$);if(Ad.L!==this)throw new Error(Jc);if((((Ad.I&0x401)===0x401)&&!!Ad.Au)&&!!Ad.
A4){Ad.Au.I=Ad.Au.I|0x800;this.I=this.I|0x4000;B.ow([this,this.CP],this);}if(((Ad.
I&0x200)===0x200)){if(!!Ad.Au)Ad.Au.I=Ad.Au.I|0x800;this.I=this.I|0x4000;B.ow([this
,this.CP],this);}Ad.A4=null;if(this.Dq===Ad)this.Dg(this.Rr(Ad,0x14));if(!!Ad.Au
)Ad.Au.Aj=Ad.Aj;if(!!Ad.Aj)Ad.Aj.Au=Ad.Au;if(this.AV===Ad)this.AV=Ad.Aj;if(this.
Bl===Ad)this.Bl=Ad.Au;Ad.L=null;Ad.Aj=null;Ad.Au=null;if(((Ad.I&0x1)===0x1))this.
AA(Ad.GetExtent());},K:function(Ad,Ks){var A;if(!Ad)throw new Error(Qa);if(!!Ad.
L)throw new Error(Qb);var HB=null;if((Ks<0)&&!!this.Bl){HB=this.Bl;Ks=Ks+1;}while(((
Ks<0)&&!!HB)&&!!HB.Au){HB=HB.Au;Ks=Ks+1;}if(!HB){Ad.L=this;Ad.Au=this.Bl;if(!!this.
Bl)this.Bl.Aj=Ad;if(!this.AV)this.AV=Ad;this.Bl=Ad;}else{Ad.L=this;Ad.Au=HB.Au;Ad.
Aj=HB;HB.Au=Ad;if(!!Ad.Au)Ad.Au.Aj=Ad;else this.AV=Ad;}if(((Ad.I&0x1)===0x1))this.
AA(Ad.GetExtent());if(((!this.Dq&&((Ad.I&0x4)===0x4))&&((Ad.I&0x10)===0x10))&&!((
Ad.I&0x10000)===0x10000))this.Dg(Ad);if(((Ad.I&0x401)===0x401)){Ad.I=Ad.I|0x800;
this.I=this.I|0x4000;B.ow([this,this.CP],this);}if(((Ad.I&0x200)===0x200)){Ad.I=
Ad.I|0x800;this.I=this.I|0x4000;B.ow([this,this.CP],this);}},_Init:function(aArg
){C.B2._Init.call(this,aArg);this.__proto__=C.O;this.I=0x1F;this.Ai(aArg);},_Mark:
function(D){var A;C.B2._Mark.call(this,D);if((A=this.AV)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Bl)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.NZ)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.BK)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.BN)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.EJ)&&(A._cycle!=D))
A._Mark(A._cycle=D);if((A=this.JF)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Dq)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::Group"};C.Root={DT:null
,A7:B.aan(10,null,null),Kx:null,HD:null,Mq:0,BM:0,CJ:B.aan(10,0,null),NI:B.aan(10
,B.vx,null),EI:B.aan(10,0,null),GS:B.aan(10,B.vw,null),Kz:B.aan(10,0,null),HC:B.
aan(10,B.vw,null),EH:B.aan(10,B.vw,null),DP:B.aan(10,B.vw,null),FI:B.aan(10,B.vw
,null),AT:0,NW:0,NV:0,Dd:B.aan(4,0,null),B9:B.aan(4,B.vx,null),B8:0,L3:0,KE:0,QL:
true,Ai:function(aArg){if(!!!this.G){var obj=this;B.aaG(obj);}},II:function(){return this;
},DY:function(Bd,aClip,aOffset,A1,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
B.mr;if(!fullScreenUpdate)Bd.MC(aClip,B.aam(B.aam(aClip,aOffset),this.R.slice(0,
2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.O.DY.call(this,Bd,aClip
,aOffset,A1,aBlend);},Bn:function(HA,Je){var A;C.O.Bn.call(this,HA,Je);if(!this.
L&&(((HA&0x1)===0x1)||((Je&0x1)===0x1)))this.AA([0,0,(A=this.R)[2]-A[0],A[3]-A[1
]]);if(!this.L&&(((HA&0x2)===0x2)||((Je&0x2)===0x2)))this.AA([0,0,(A=this.R)[2]-
A[0],A[3]-A[1]]);},Dg:function(E){if((E!==null)||!E)C.O.Dg.call(this,E);},Lj:function(
E){var A;var Zt=this.BK;C.O.Lj.call(this,E);if(((Zt!==this.BK)&&!this.L)&&((this.
I&0x1)===0x1))this.AA([0,0,(A=this.R)[2]-A[0],A[3]-A[1]]);},Ls:function(E){var A;
var Zx=this.Hd;C.O.Ls.call(this,E);if(((Zx!==this.Hd)&&!this.L)&&((this.I&0x1)===
0x1))this.AA([0,0,(A=this.R)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(AG){if(
!!AG){AG.K_=!!this.BM;if(!!this.BM)AG.AF=this.BM;}var BE;BE=C.O.DispatchEvent.call(
this,AG);this.BM=0;return BE;},BroadcastEvent:function(AG,aFilter){if(!!AG){AG.K_=
!!this.BM;if(!!this.BM)AG.AF=this.BM;}var BE=C.O.BroadcastEvent.call(this,AG,aFilter
);this.BM=0;return BE;},AA:function(Ay){var A;if(this.Mq>0)throw new Error(Qc);if(
!!this.BK&&!this.L){if(((A=this.BK.Es)[0]>=A[2])||(A[1]>=A[3])){B.vv(this,0);B.vv(
this.BK,0);}this.BK.Es=B.vS(this.BK.Es,Ay);}var fullScreenUpdate=false;fullScreenUpdate=
B.mr;if(fullScreenUpdate)Ay=[0,0,(A=this.R)[2]-A[0],A[3]-A[1]];if(!!this.L){C.O.
AA.call(this,Ay);return;}Ay=B.kz(B.aam(Ay,this.R.slice(0,2)),this.R);if((Ay[0]>=
Ay[2])||(Ay[1]>=Ay[3]))return;var i;for(i=0;i<this.B8;i=i+1)if(!(((A=B.kz(this.B9.
Get(i),Ay))[0]>=A[2])||(A[1]>=A[3]))){this.B9.Set(i,B.vS(this.B9.Get(i),Ay));this.
Dd.Set(i,B.zS(this.B9.Get(i)));return;}if(this.B8<3){this.B9.Set(this.B8,Ay);this.
Dd.Set(this.B8,B.zS(Ay));this.B8=this.B8+1;return;}var j;var DS;var L2=0;var L4=
0;var SN=2147483647;this.B9.Set(this.B8,Ay);this.Dd.Set(this.B8,B.zS(Ay));for(j=
0;j<=this.B8;j=j+1)for(DS=j+1;DS<=this.B8;DS=DS+1){var Of=B.zS(B.vS(this.B9.Get(
j),this.B9.Get(DS)));var TQ=((Of<<8)/(this.Dd.Get(j)+this.Dd.Get(DS)))|0;if(TQ<SN
){SN=TQ;L2=j;L4=DS;}}this.B9.Set(L2,B.vS(this.B9.Get(L2),this.B9.Get(L4)));this.
Dd.Set(L2,B.zS(this.B9.Get(L2)));if(L4!==this.B8){this.B9.Set(L4,this.B9.Get(this.
B8));this.Dd.Set(L4,this.Dd.Get(this.B8));}},Zh:function(){var CM=B._NewObject(C.
JS,0);CM.K_=!!this.BM;if(!!this.BM)CM.AF=this.BM;return CM;},Jg:function(){var CM=
B._NewObject(C.Gh,0);CM.K_=!!this.BM;if(!!this.BM)CM.AF=this.BM;return CM;},Ky:function(
){var CM=B._NewObject(C.KT,0);CM.K_=!!this.BM;if(!!this.BM)CM.AF=this.BM;return CM;
},Zi:function(M){var i;var Jl=false;for(i=0;i<10;i=i+1)if(!!this.A7.Get(i)){var pos=
this.DP.Get(i);var As=this.A7.Get(i).L;while(!!As&&(As!==this)){pos=B.aaj(pos,As.
R.slice(0,2));As=As.L;}if(!As&&(this.A7.Get(i)!==this)){var tmp=this.A7.Get(i);this.
AT=i;this.A7.Set(i,null);tmp.BI(this.Jg().InitializeUp(i,this.HC.Get(i),this.GS.
Get(i),this.EI.Get(i),this.CJ.Get(i)+1,this.EH.Get(i),false,this.DP.Get(i),this.
FI.Get(i)));this.BroadcastEvent(this.Ky().InitializeUp(i,this.CJ.Get(i)+1,false,
tmp,this.DP.Get(i)),0x18);}else{this.EI.Set(i,(this.HD.AF-this.Kz.Get(i))|0);if(
this.EI.Get(i)<10)this.EI.Set(i,10);this.AT=i;this.A7.Get(i).BI(this.Jg().InitializeHold(
i,pos,this.GS.Get(i),this.EI.Get(i),this.CJ.Get(i)+1,this.EH.Get(i),this.DP.Get(
i),this.FI.Get(i)));Jl=true;}}if(!Jl)this.HD.Ar(false);},GetFPS:function(){var ticksCount=
0;var SW=0;ticksCount=((new Date).getTime()-B.vs)|0;if(!!this.NW&&(ticksCount>this.
NW))SW=((this.NV*1000)/((ticksCount-this.NW)|0))|0;this.NV=0;this.NW=ticksCount;
return SW;},Update:function(){var A;if(!this.Kx)this.Kx=B._NewObject(B.Graphics.
Canvas,0);this.Kx.Lo([(A=this.R)[2]-A[0],A[3]-A[1]]);this.Kx.Update();return this.
UpdateGE20(this.Kx);},UpdateGE20:function(Bd){if(!this.BeginUpdate())return Bc;var
G3=this.UpdateCanvas(Bd,A9);this.EndUpdate();return G3;},EndUpdate:function(){if(
this.B8>0){this.NV=this.NV+1;this.B8=0;}},UpdateCanvas:function(Bd,aOffset){var A;
var G3=Bc;var Zc=[].concat(aOffset,B.aak(Bd.FrameSize,aOffset));var i;var j=this.
B8;this.Mq=this.Mq+1;Bd.A3=this;for(i=0;(i<j)&&(i<4);i=i+1)if(this.Dd.Get(i)>0){
this.DY(Bd,B.aal(this.B9.Get(i),aOffset),[-aOffset[0],-aOffset[1]],255,true);G3=
B.vS(G3,B.kz(Zc,this.B9.Get(i)));}else j=j+1;Bd.A3=null;this.Mq=this.Mq-1;if(!((
G3[0]>=G3[2])||(G3[1]>=G3[3])))return B.aal(G3,aOffset);else return G3;},GetUpdateRegion:
function(Nr){var i;var j=this.B8;if(Nr<0)return Bc;for(i=0;(i<j)&&(i<4);i=i+1)if(
!this.Dd.Get(i)){j=j+1;Nr=Nr+1;}else if(i===Nr)return this.B9.Get(i);return Bc;}
,BeginUpdate:function(){var A;var i;if(!!this.B8&&!B.z9(this.B9.Get(0),[0,0,(A=this.
R)[2]-A[0],A[3]-A[1]])){var TZ=B.aan(3,B.vx,null);var TY=this.B8;for(i=0;i<TY;i++
)TZ.Set(i,this.B9.Get(i));for(i=0;i<TY;i++){var TS=B.aam(TZ.Get(i),this.R.slice(
0,2));var TT=this.KR(TS);if(!B.z9(TS,TT))this.AA(B.aal(TT,this.R.slice(0,2)));}}
var j;var DS;for(j=0;j<(this.B8-1);j++)if(this.Dd.Get(j)>0)for(DS=j+1;DS<this.B8;
DS++)if(this.Dd.Get(DS)>0){var Of=B.zS(B.vS(this.B9.Get(j),this.B9.Get(DS)));if(((
Of-this.Dd.Get(j))-this.Dd.Get(DS))<0){this.B9.Set(j,B.vS(this.B9.Get(j),this.B9.
Get(DS)));this.Dd.Set(j,Of);this.Dd.Set(DS,0);}}for(i=this.B8-1;i>=0;i--)if(!this.
Dd.Get(i))this.B8=this.B8-1;return this.B8;},DoesNeedUpdate:function(){if(this.B8>
0)return true;return false;},Initialize:function(aSize){this.H([].concat(A9,aSize
));if(this.QL)this.I=this.I|0x60;else this.I=this.I|0x20;this.AA(this.R);return this;
},SetRootFocus:function(Qp){if(Qp===this.QL)return false;this.QL=Qp;if(!Qp)this.
Bn(0x0,0x40);else this.Bn(0x40,0x0);return true;},SetUserInputTimestamp:function(
Y5){this.BM=Y5;},DriveKeyboardHitting:function(Cc,LJ,E$){var A;var Q6=!!this.DT;
if(!!this.DT&&((!E$||(this.L3!==Cc))||(this.KE!==LJ))){var CM=null;var P=(C.Cu.isPrototypeOf(
A=this.DT)?A:null);var Fe=(C.Cj.isPrototypeOf(A=this.DT)?A:null);if(!!this.L3)CM=
B._NewObject(C.KeyEvent,0).Initialize(this.L3,false);if(this.KE!==0x00)CM=B._NewObject(
C.KeyEvent,0).Initialize2(this.KE,false);if(!!Fe)Fe.BI(CM);else if(!!P)P.BI(CM);
this.L3=0;this.KE=0x00;this.DT=null;}if(!!this.DT){var CM=null;var P=(C.Cu.isPrototypeOf(
A=this.DT)?A:null);var Fe=(C.Cj.isPrototypeOf(A=this.DT)?A:null);if(!!Cc)CM=B._NewObject(
C.KeyEvent,0).Initialize(Cc,true);if(this.KE!==0x00)CM=B._NewObject(C.KeyEvent,0
).Initialize2(LJ,true);if(!!Fe)Fe.BI(CM);else if(!!P)P.BI(CM);}if(!this.DT&&E$){
if(!!Cc)this.DT=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize(Cc,true
));if(LJ!==0x00)this.DT=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize2(
LJ,true));if(!(C.Cj.isPrototypeOf(A=this.DT)?A:null)&&!(C.Cu.isPrototypeOf(A=this.
DT)?A:null))this.DT=null;this.L3=Cc;this.KE=LJ;Q6=Q6||!!this.DT;}this.BM=0;return Q6;
},DriveCursorMovement:function(Cd){return this.DriveMultiTouchMovement(this.AT,Cd
);},DriveMultiTouchMovement:function(Ac,Cd){if((Ac<0)||(Ac>9)){this.BM=0;return false;
}var Bm=B.aaj(Cd,this.DP.Get(Ac));this.DP.Set(Ac,Cd);if(!this.A7.Get(Ac)||B.z8(Bm
,A9)){this.BM=0;return false;}var pos=Cd;var As=this.A7.Get(Ac).L;while(!!As&&(As
!==this)){pos=B.aaj(pos,As.R.slice(0,2));As=As.L;}if(!As&&(this.A7.Get(Ac)!==this
)){var tmp=this.A7.Get(Ac);this.AT=Ac;this.A7.Set(Ac,null);tmp.BI(this.Jg().InitializeUp(
Ac,this.HC.Get(Ac),this.GS.Get(Ac),this.EI.Get(Ac),this.CJ.Get(Ac)+1,this.EH.Get(
Ac),false,this.DP.Get(Ac),this.FI.Get(Ac)));this.BroadcastEvent(this.Ky().InitializeUp(
Ac,this.CJ.Get(Ac)+1,false,tmp,Cd),0x18);}else{this.HC.Set(Ac,pos);this.AT=Ac;this.
A7.Get(Ac).BI(this.Zh().Initialize(Ac,pos,this.GS.Get(Ac),Bm,this.EI.Get(Ac),this.
CJ.Get(Ac)+1,this.EH.Get(Ac),Cd,this.FI.Get(Ac)));}this.BM=0;return true;},DriveCursorHitting:
function(E$,Ac,Cd){return this.DriveMultiTouchHitting(E$,Ac,Cd);},DriveMultiTouchHitting:
function(E$,Ac,Cd){if((Ac<0)||(Ac>9)){this.BM=0;return false;}var ticksCount=this.
BM;if(!ticksCount)ticksCount=((new Date).getTime()-B.vs)|0;var Aao=this.BM;this.
DriveMultiTouchMovement(Ac,Cd);Cd=this.DP.Get(Ac);this.BM=Aao;if(E$)this.FI.Set(
Ac,Cd);if(E$&&!this.A7.Get(Ac)){var B7;var pos=Cd;if(B.vt(this.NI.Get(Ac),Cd)&&((
ticksCount-this.Kz.Get(Ac))<=250))this.CJ.Set(Ac,this.CJ.Get(Ac)+1);else this.CJ.
Set(Ac,0);this.NI.Set(Ac,B.aam(Km,Cd));this.Kz.Set(Ac,ticksCount);B7=this.Fm(B.aam(
Km,Cd),Ac,this.CJ.Get(Ac)+1,null,null,0x0);if(!!B7){this.BroadcastEvent(this.Ky(
).InitializeDown(Ac,this.CJ.Get(Ac)+1,false,B7.Cu,Cd),0x18);this.A7.Set(Ac,B7.Cu
);this.EH.Set(Ac,B7.AN);}else{this.A7.Set(Ac,null);this.EH.Set(Ac,A9);this.BM=0;
return false;}var As=B7.Cu.L;while(!!As&&(As!==this)){pos=B.aaj(pos,As.R.slice(0
,2));As=As.L;}this.GS.Set(Ac,pos);this.HC.Set(Ac,pos);this.EI.Set(Ac,0);this.HD.
Ar(true);this.AT=Ac;this.A7.Get(Ac).BI(this.Jg().InitializeDown(Ac,pos,this.CJ.Get(
Ac)+1,this.EH.Get(Ac),false,Cd));this.BM=0;return true;}if(!E$&&!!this.A7.Get(Ac
)){var pos=Cd;var As=this.A7.Get(Ac).L;while(!!As&&(As!==this)){pos=B.aaj(pos,As.
R.slice(0,2));As=As.L;}if(!As)pos=this.HC.Get(Ac);this.AT=Ac;var tmp=this.A7.Get(
Ac);this.A7.Set(Ac,null);tmp.BI(this.Jg().InitializeUp(Ac,pos,this.GS.Get(Ac),this.
EI.Get(Ac),this.CJ.Get(Ac)+1,this.EH.Get(Ac),false,Cd,this.FI.Get(Ac)));this.BroadcastEvent(
this.Ky().InitializeUp(Ac,this.CJ.Get(Ac)+1,false,tmp,Cd),0x18);this.BM=0;return true;
}this.BM=0;return false;},PW:function(GN,SK,FG,FF){if(GN===this)GN=null;if(!this.
A7.Get(this.AT))return;var B7;B7=this.Fm(B.aam(Km,this.DP.Get(this.AT)),this.AT,
1,GN,FG,FF);if(!!B7&&(this.A7.Get(this.AT)!==B7.Cu))this.Oz(B7.Cu,B7.AN);if(!B7&&(
this.A7.Get(this.AT)!==SK))this.Oz(SK,A9);},Oz:function(GN,EE){if(!this.A7.Get(this.
AT)||(this.A7.Get(this.AT)===GN))return;var tmp=this.A7.Get(this.AT);this.A7.Set(
this.AT,null);tmp.BI(this.Jg().InitializeUp(this.AT,this.HC.Get(this.AT),this.GS.
Get(this.AT),this.EI.Get(this.AT),this.CJ.Get(this.AT)+1,this.EH.Get(this.AT),true
,this.DP.Get(this.AT),this.FI.Get(this.AT)));this.BroadcastEvent(this.Ky().InitializeUp(
this.AT,this.CJ.Get(this.AT)+1,true,tmp,this.DP.Get(this.AT)),0x18);var pos=this.
DP.Get(this.AT);var As=null;if(!!GN)As=GN.L;while(!!As&&(As!==this)){pos=B.aaj(pos
,As.R.slice(0,2));As=As.L;}if(!As&&(GN!==this)){this.A7.Set(this.AT,null);return;
}this.BroadcastEvent(this.Ky().InitializeDown(this.AT,this.CJ.Get(this.AT)+1,true
,GN,this.DP.Get(this.AT)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.vs)|0;this.A7.Set(this.AT,GN);this.EH.Set(this.AT,EE);this.GS.Set(this.AT,pos
);this.HC.Set(this.AT,pos);this.CJ.Set(this.AT,0);this.EI.Set(this.AT,0);this.Kz.
Set(this.AT,ticksCount);this.FI.Set(this.AT,this.DP.Get(this.AT));this.A7.Get(this.
AT).BI(this.Jg().InitializeDown(this.AT,pos,this.CJ.Get(this.AT)+1,this.EH.Get(this.
AT),true,this.FI.Get(this.AT)));},_Init:function(aArg){C.O._Init.call(this,aArg);
C.Timer._Init.call(this.HD={G:this},0);(this.A7=[]).__proto__=C.Root.A7;(this.CJ=[
]).__proto__=C.Root.CJ;(this.NI=[]).__proto__=C.Root.NI;(this.EI=[]).__proto__=C.
Root.EI;(this.GS=[]).__proto__=C.Root.GS;(this.Kz=[]).__proto__=C.Root.Kz;(this.
HC=[]).__proto__=C.Root.HC;(this.EH=[]).__proto__=C.Root.EH;(this.DP=[]).__proto__=
C.Root.DP;(this.FI=[]).__proto__=C.Root.FI;(this.Dd=[]).__proto__=C.Root.Dd;(this.
B9=[]).__proto__=C.Root.B9;this.__proto__=C.Root;this.I=0x7F;this.HD.DZ(10);this.
HD.CE=[this,this.Zi];this.Ai(aArg);},_Done:function(){this.__proto__=C.O;this.HD.
_Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(this);this.HD.
_ReInit();},_Mark:function(D){var A;C.O._Mark.call(this,D);if((A=this.DT)&&(A._cycle
!=D))A._Mark(A._cycle=D);B.aaf(this.A7,D);if((A=this.Kx)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.HD)._cycle!=D)A._Mark(A._cycle=D);},_className:"Core::Root"
};C.Event={AF:0,K_:false,Ai:function(aArg){this.AF=this.MF();},MF:function(){var
ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;},_Init:
function(aArg){this.__proto__=C.Event;this.Ai(aArg);B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:
"Core::Event"};C.KeyEvent={BB:0,AD:0,Down:false,Initialize2:function(Cc,E$){this.
BB=0;this.AD=Cc;this.Down=E$;if((Cc>=0x30)&&(Cc<=0x39))this.BB=(10+Cc)-48;if((Cc>=
0x41)&&(Cc<=0x5A))this.BB=(105+Cc)-65;if((Cc>=0x61)&&(Cc<=0x7A))this.BB=(105+Cc)-
97;if(Cc===0x20)this.BB=131;if(!this.BB)switch(Cc){case 0x2B:this.BB=132;break;case
0x2D:this.BB=133;break;case 0x2A:this.BB=134;break;case 0x2F:this.BB=135;break;case
0x3D:this.BB=136;break;case 0x2E:this.BB=137;break;case 0x2C:this.BB=138;break;case
0x3A:this.BB=139;break;case 0x3B:this.BB=140;break;default:;}return this;},Initialize:
function(Cc,E$){this.BB=Cc;this.Down=E$;this.AD=0x00;var Qy=Cc-10;var Qx=Cc-105;
if((Qy>=0)&&(Qy<=9))this.AD=(48+Qy)&0xFFFF;if((Qx>=0)&&(Qx<=25))this.AD=(65+Qx)&
0xFFFF;if(Cc===131)this.AD=0x20;if(this.AD===0x00)switch(Cc){case 132:this.AD=0x2B;
break;case 133:this.AD=0x2D;break;case 134:this.AD=0x2A;break;case 135:this.AD=0x2F;
break;case 136:this.AD=0x3D;break;case 137:this.AD=0x2E;break;case 138:this.AD=0x2C;
break;case 139:this.AD=0x3A;break;case 140:this.AD=0x3B;break;default:;}return this;
},Uj:function(SJ){switch(SJ){case 141:return((this.AD>=0x41)&&(this.AD<=0x5A))||((
this.AD>=0x61)&&(this.AD<=0x7A));case 142:return(((this.AD>=0x41)&&(this.AD<=0x5A
))||((this.AD>=0x61)&&(this.AD<=0x7A)))||((this.AD>=0x30)&&(this.AD<=0x39));case
143:return(this.AD>=0x30)&&(this.AD<=0x39);case 144:return(((this.AD>=0x41)&&(this.
AD<=0x46))||((this.AD>=0x61)&&(this.AD<=0x66)))||((this.AD>=0x30)&&(this.AD<=0x39
));case 145:return this.AD!==0x00;case 146:return(this.AD===0x00)&&!!this.BB;case
147:return(((this.BB===6)||(this.BB===7))||(this.BB===4))||(this.BB===5);case 148:
return(this.AD!==0x00)||!!this.BB;default:;}return SJ===this.BB;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.KT={LE:null,Cy:B.vw,CV:0,BS:0,Down:false,Dm:false,InitializeUp:function(Ac,C_
,Jd,Qr,Fa){this.Down=false;this.BS=Ac;this.CV=C_;this.Cy=Fa;this.LE=Qr;this.Dm=Jd;
return this;},InitializeDown:function(Ac,C_,Jd,Qr,Fa){this.Down=true;this.BS=Ac;
this.CV=C_;this.Cy=Fa;this.LE=Qr;this.Dm=Jd;return this;},_Init:function(aArg){C.
Event._Init.call(this,aArg);this.__proto__=C.KT;},_Mark:function(D){var A;C.Event.
_Mark.call(this,D);if((A=this.LE)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::CursorGrabEvent"};C.Gh={G_:B.vw,Cy:B.vw,CV:0,B1:0,C4:B.vw,BV:B.vw,BS:0,Down:
false,Dm:false,InitializeHold:function(Ac,Ih,LL,LM,C_,EE,Fa,LK){this.Down=true;this.
BS=Ac;this.BV=B.aak(Ih,EE);this.C4=B.aak(LL,EE);this.B1=LM;this.CV=C_;this.Cy=Fa;
this.G_=LK;return this;},InitializeUp:function(Ac,Ih,LL,LM,C_,EE,Jd,Fa,LK){this.
Down=false;this.BS=Ac;this.BV=B.aak(Ih,EE);this.C4=B.aak(LL,EE);this.B1=LM;this.
CV=C_;this.Dm=Jd;this.Cy=Fa;this.G_=LK;return this;},InitializeDown:function(Ac,
Ih,C_,EE,Jd,Fa){this.Down=true;this.BS=Ac;this.BV=B.aak(Ih,EE);this.C4=B.aak(Ih,
EE);this.B1=0;this.CV=C_;this.Dm=Jd;this.Cy=Fa;this.G_=Fa;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Gh;},_className:"Core::CursorEvent"
};C.JS={G_:B.vw,Cy:B.vw,CV:0,B1:0,AN:B.vw,C4:B.vw,BV:B.vw,BS:0,Initialize:function(
Ac,Ih,LL,aOffset,LM,Y4,EE,Fa,LK){this.BS=Ac;this.BV=B.aak(Ih,EE);this.C4=B.aak(LL
,EE);this.AN=aOffset;this.B1=LM;this.CV=Y4;this.Cy=Fa;this.G_=LK;return this;},_Init:
function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.JS;},_className:"Core::DragEvent"
};C.Lw={DY:function(Bd,aClip,aOffset,A1,aBlend){},H:function(E){var A;if(B.z9(E,
this.R))return;var Ip=[(A=this.R)[2]-A[0],A[3]-A[1]];var N0=[E[2]-E[0],E[3]-E[1]
];var JI=!B.z8(Ip,N0);var Bm=B.aaj(E.slice(0,2),this.R.slice(0,2));if(!B.z8(Bm,A9
)&&!JI){var P=this.Aj;while(!!P&&!((P.I&0x200)===0x200)){if(((P.I&0x400)===0x400
)){var tmp=((P.I&0x100)===0x100);P.JZ(Bm,tmp);}P=P.Aj;}}if((JI&&(Ip[0]>0))&&(Ip[
1]>0)){var Ap=this.R;var P=this.Aj;while(!!P&&!((P.I&0x200)===0x200)){if(((P.I&0x400
)===0x400)){if(!!P.A4&&(P.A4.Iq!==this))P.A4=null;if(!P.A4&&(P.Dt!==0x14))P.KD(Ap
,this);}P=P.Aj;}}C.B2.H.call(this,E);if(!!this.L&&JI){this.I=this.I|0x1000;if(!((
this.L.I&0x2000)===0x2000)){this.L.I=this.L.I|0x4000;B.ow([A=this.L,A.CP],this);
}}},_Init:function(aArg){C.B2._Init.call(this,aArg);this.__proto__=C.Lw;this.I=0x203;
},_className:"Core::Outline"};C.B3={Pn:null,Lh:null,Ld:null,EZ:null,Ck:null,BT:null
,Oe:0,Aq:0,BS:0,AF:0,CV:0,B1:0,AN:B.vw,C4:B.vw,BV:B.vw,LA:8,Hg:0,RM:1,Down:false
,EV:false,Dm:false,QG:false,L5:0,DY:function(Bd,aClip,aOffset,A1,aBlend){},BI:function(
AG){var A;var Ab=(C.Gh.isPrototypeOf(AG)?AG:null);var AJ=(C.JS.isPrototypeOf(AG)?
AG:null);var NY=this.EV;var Fh;var Ef;var Mp;var CO;var LY;if(!Ab&&!AJ)return null;
Fh=(!!Ab&&Ab.Down)&&!Ab.B1;Ef=(!!Ab&&Ab.Down)&&(Ab.B1>0);Mp=(!!Ab&&Ab.Down)&&(Ab.
B1>this.L5);CO=!!Ab&&!Ab.Down;LY=!!AJ;if(Fh)this.L5=((A=(Ab.Dm?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if((((this.Hg&0x20)===0x20)&&(this.Aq>0))&&(this.Aq<33554432)){var BO=(C.
KT.isPrototypeOf(AG)?AG:null);if(((!!BO&&BO.Down)&&(BO.LE!==this))&&B.vt(this.GetExtent(
),this.L.RJ(BO.Cy))){this.Oe=0x20;this.Aq=this.Aq|67108864;return null;}}if(Fh){
var Ju=0;var FR;this.Aq=this.Aq|(1<<Ab.BS);for(FR=this.Aq&4095;FR>0;FR=FR>>1)if(
!!(FR&1))Ju=Ju+1;if(Ju===1)this.Aq=(this.Aq|16777216)|(4096<<Ab.BS);}if(CO&&(this.
Aq<16777216)){var DD=this.II();var B7=null;if(!!DD){var Q9=(!!this.Au?this.Au:this.
L);B7=DD.Fm(B.aam(Ng,Ab.Cy),Ab.BS,Ab.CV,null,Q9,0x0);}if(!!B7){var i;for(i=0;i<10;
i++)if(!!(this.Aq&(1<<i)))B7.Cu.BI(B._NewObject(C.Gh,0).InitializeDown(i,Ab.BV,Ab.
CV,A9,true,Ab.Cy));for(i=0;i<10;i++)if(!!(this.Aq&(1<<i)))B7.Cu.BI(B._NewObject(
C.Gh,0).InitializeUp(i,Ab.BV,Ab.BV,0,Ab.CV,A9,false,Ab.Cy,Ab.Cy));}}if(CO)this.Aq=(
this.Aq&~(1<<Ab.BS))|33554432;if(Mp&&(this.Aq<16777216))this.Aq=this.Aq|67108864;
if(CO&&Ab.Dm)this.Aq=this.Aq|67108864;if(CO&&!(this.Aq&4095))this.Oe=0x0;if(CO&&
!(this.Aq&16777215))this.Aq=0;if(Ef&&(this.Aq>=67108864)){var DD=this.II();if(!!
DD)DD.PW(null,null,this,this.Oe);}if((Ef&&!!(this.Aq&16777216))&&!!(this.Aq&33554432
)){Ef=false;CO=true;}if(!!Ab&&!(this.Aq&(4096<<Ab.BS)))return this;if(!!AJ&&!(this.
Aq&(4096<<AJ.BS)))return this;if(CO&&!(this.Aq&16777216))return this;if(((Fh||LY
)||Ef)&&((this.Aq<16777216)||(this.Aq>=33554432)))return this;if(CO)this.Aq=this.
Aq&3758100479;if(CO&&!(this.Aq&16777215))this.Aq=0;if(!!Ab){this.Down=Fh||Ef;this.
EV=this.OY(Ab.BV);this.C4=Ab.C4;this.BV=Ab.BV;this.AN=A9;this.B1=Ab.B1;this.CV=Ab.
CV;this.Dm=Ab.Dm;this.BS=Ab.BS;this.AF=Ab.AF;if(Ab.Down&&!Ab.B1)NY=false;}if(!!AJ
){this.Down=true;this.EV=this.OY(AJ.BV);this.C4=AJ.C4;this.BV=AJ.BV;this.AN=AJ.AN;
this.B1=AJ.B1;this.CV=AJ.CV;this.BS=AJ.BS;this.Dm=false;this.AF=AJ.AF;}var QE=this.
Down;if(!!AJ)(A=this.Pn)?A[1].call(A[0],this):null;if((!!Ab&&this.Down)&&!this.B1
)(A=this.BT)?A[1].call(A[0],this):null;if((!!Ab&&this.Down)&&(this.B1>0))(A=this.
EZ)?A[1].call(A[0],this):null;if((this.Down&&this.EV)&&!NY){this.QG=true;(A=this.
Ld)?A[1].call(A[0],this):null;}if(this.QG&&(((QE&&!this.EV)&&NY)||((!QE&&this.EV
)&&NY))){this.QG=false;(A=this.Lh)?A[1].call(A[0],this):null;}if(!!Ab&&!QE)(A=this.
Ck)?A[1].call(A[0],this):null;if(!!this.Hg){var It=0x0;if(((((this.Hg&0x10)===0x10
)&&!!Ab)&&Ab.Down)&&(Ab.B1>=1000))It=0x10;if((((this.Hg&0x1)===0x1)&&!!AJ)&&((AJ.
Cy[1]-AJ.G_[1])<=-this.LA))It=0x1;if((((this.Hg&0x2)===0x2)&&!!AJ)&&((AJ.Cy[1]-AJ.
G_[1])>=this.LA))It=0x2;if((((this.Hg&0x4)===0x4)&&!!AJ)&&((AJ.Cy[0]-AJ.G_[0])<=-
this.LA))It=0x4;if((((this.Hg&0x8)===0x8)&&!!AJ)&&((AJ.Cy[0]-AJ.G_[0])>=this.LA)
)It=0x8;if(!!It){var DD=this.II();if(!!DD){this.Oe=It;DD.PW(null,this,this,It);}
}}return this;},Fm:function(Ay,Ac,C_,FC,FG,FF){var A;if(!!FC&&(FC!==this))return null;
if((C_<1)||(C_>this.RM))return null;if(this.Aq>=33554432)return null;if((this.Aq>=
16777216)&&!(this.Aq&(4096<<Ac)))return null;if(!!(FF&this.Hg))return null;if(this.
Ug()){var Az=B.kz(Ay,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var
Dw=B.zT(Ay);var Bm=A9;if(Dw[0]<Az[0])Bm=[Az[0]-Dw[0],Bm[1]];if(Dw[0]>=Az[2])Bm=[(
Az[2]-Dw[0])-1,Bm[1]];if(Dw[1]<Az[1])Bm=[Bm[0],Az[1]-Dw[1]];if(Dw[1]>=Az[3])Bm=[
Bm[0],(Az[3]-Dw[1])-1];return B._NewObject(C.KU,0).Initialize(this,Bm);}}else{var
Bv=B.aan(9,B.vw,null);var i;Bv.Set(0,B.zT(Ay));Bv.Set(1,Bv.Get(0));Bv.Set(2,Bv.Get(
0));Bv.Set(3,Bv.Get(0));Bv.Set(4,Bv.Get(0));Bv.Set(1,[Ay[0],Bv.Get(1)[1]]);Bv.Set(
2,[Bv.Get(2)[0],Ay[1]]);Bv.Set(3,[Ay[2],Bv.Get(3)[1]]);Bv.Set(4,[Bv.Get(4)[0],Ay[
3]]);Bv.Set(5,Ay.slice(0,2));Bv.Set(6,[Ay[2],Ay[1]]);Bv.Set(7,[Ay[0],Ay[3]]);Bv.
Set(8,Ay.slice(2,4));for(i=0;i<9;i=i+1)if(this.OY(Bv.Get(i)))return B._NewObject(
C.KU,0).Initialize(this,B.aaj(Bv.Get(i),Bv.Get(0)));}return null;},RW:function(E
){if(E<1)E=1;this.LA=E;},M5:function(E){if(E<1)E=1;this.RM=E;},Ar:function(E){if(
E)this.Bn(0x10,0x0);else this.Bn(0x0,0x10);},_Init:function(aArg){C.Fu._Init.call(
this,aArg);this.__proto__=C.B3;this.I=0x11B;},_Mark:function(D){var A;C.Fu._Mark.
call(this,D);if((A=this.Pn)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Lh)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ld)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.EZ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Ck)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.BT)&&((A=A[0
])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"};C.D2={
timer:null,N8:null,KI:null,Aq:0,Nz:0,FS:5000,JH:0,NX:B.vw,Jk:0,GQ:0,AY:0,Iz:0,KM:
0,Jj:0,GP:0,AX:0,Iy:0,Ix:0,C4:B.vw,Ro:B.vw,B$:B.vw,Ca:B.vw,AN:B.vw,Rs:0.5,Nb:true
,Kb:false,EM:false,EN:false,Ny:false,L5:0,DY:function(Bd,aClip,aOffset,A1,aBlend
){},BI:function(AG){var A;var Ab=(C.Gh.isPrototypeOf(AG)?AG:null);var AJ=(C.JS.isPrototypeOf(
AG)?AG:null);var BO=(C.KT.isPrototypeOf(AG)?AG:null);var Fh;var Ef;var Mp;var CO;
var LY;Fh=(!!Ab&&Ab.Down)&&!Ab.B1;Ef=(!!Ab&&Ab.Down)&&(Ab.B1>0);Mp=(!!Ab&&Ab.Down
)&&(Ab.B1>this.L5);CO=!!Ab&&!Ab.Down;LY=!!AJ;if(Fh)this.L5=((A=(Ab.Dm?0:50))&0x80
)?A|0xFFFFFF00:A&0xFF;if(Fh){var Ju=0;var FR;this.Aq=this.Aq|(1<<Ab.BS);for(FR=this.
Aq&4095;FR>0;FR=FR>>1)if(!!(FR&1))Ju=Ju+1;if(Ju===1)this.Aq=(this.Aq|16777216)|(
4096<<Ab.BS);}if(CO&&(this.Aq<16777216)){var DD=this.II();var B7=null;if(!!DD){var
Q9=(!!this.Au?this.Au:this.L);B7=DD.Fm(B.aam(Ng,Ab.Cy),Ab.BS,Ab.CV,null,Q9,0x0);
}if(!!B7){var i;for(i=0;i<10;i++)if(!!(this.Aq&(1<<i)))B7.Cu.BI(B._NewObject(C.Gh
,0).InitializeDown(i,Ab.BV,Ab.CV,A9,true,Ab.Cy));for(i=0;i<10;i++)if(!!(this.Aq&(
1<<i)))B7.Cu.BI(B._NewObject(C.Gh,0).InitializeUp(i,Ab.BV,Ab.BV,0,Ab.CV,A9,false
,Ab.Cy,Ab.Cy));}}if(CO)this.Aq=(this.Aq&~(1<<Ab.BS))|33554432;if(Mp&&(this.Aq<16777216
))this.Aq=this.Aq|67108864;if(CO&&Ab.Dm)this.Aq=this.Aq|67108864;if(CO&&!(this.Aq&
16777215))this.Aq=0;if(Ef&&(this.Aq>=67108864)){var DD=this.II();if(!!DD)DD.PW(null
,null,this,0x0);}if((Ef&&!!(this.Aq&16777216))&&!!(this.Aq&33554432)){Ef=false;CO=
true;}if(!!Ab&&!(this.Aq&(4096<<Ab.BS)))return this;if(!!AJ&&!(this.Aq&(4096<<AJ.
BS)))return this;if(CO&&!(this.Aq&16777216))return this;if(((Fh||LY)||Ef)&&((this.
Aq<16777216)||(this.Aq>=33554432)))return this;if(CO)this.Aq=this.Aq&3758100479;
if(CO&&!(this.Aq&16777215))this.Aq=0;if(!!BO&&(BO.LE===this))return null;if((!!BO&&
BO.Down)&&(this.Ny||!this.Kb))return null;if((!!BO&&BO.Down)&&!B.vt(this.R,this.
L.RJ(BO.Cy)))return null;if((!!BO&&!BO.Down)&&(!this.Ny||(this.Nz!==BO.BS)))return null;
if((!Ab&&!AJ)&&!BO)return null;if(!!Ab){this.Ny=Fh||Ef;this.Nz=Ab.BS;this.C4=Ab.
C4;}if(!!AJ)this.Nz=AJ.BS;if(!!BO){this.Ny=BO.Down;this.Nz=BO.BS;}if(!!BO&&BO.Down
){this.Q$();this.AX=(((BO.AF-this.Ix)*0.001)*this.GP)+this.AX;this.AY=(((BO.AF-this.
KM)*0.001)*this.GQ)+this.AY;if(this.EM)this.AX=0;if(this.EN)this.AY=0;this.GP=0;
this.GQ=0;this.EM=false;this.EN=false;this.NX=this.AN;this.JH=BO.AF;return this;
}if(Fh){this.Q$();this.AX=(((Ab.AF-this.Ix)*0.001)*this.GP)+this.AX;this.AY=(((Ab.
AF-this.KM)*0.001)*this.GQ)+this.AY;if(this.EM||!this.Kb)this.AX=0;if(this.EN||!
this.Kb)this.AY=0;this.GP=0;this.GQ=0;this.EM=false;this.EN=false;if(!this.Kb){this.
Kb=true;(A=this.N8)?A[1].call(A[0],this):null;}this.NX=this.AN;this.JH=Ab.AF;}if(
!!AJ){var Ce=B.aaj(AJ.BV,AJ.C4);var AI=this.AN;if(this.Nb)AI=[this.NX[0]+Ce[0],AI[
1]];AI=[AI[0],this.NX[1]+Ce[1]];if(AI[0]<this.Ca[0])AI=[this.Ca[0]+(((AI[0]-this.
Ca[0])/2)|0),AI[1]];else if(AI[0]>this.B$[0])AI=[this.B$[0]+(((AI[0]-this.B$[0])
/2)|0),AI[1]];if(AI[1]<this.Ca[1])AI=[AI[0],this.Ca[1]+(((AI[1]-this.Ca[1])/2)|0
)];else if(AI[1]>this.B$[1])AI=[AI[0],this.B$[1]+(((AI[1]-this.B$[1])/2)|0)];if(
!B.z8(AI,this.AN)){this.Ro=B.aaj(AI,this.AN);this.AN=AI;(A=this.KI)?A[1].call(A[
0],this):null;}}if((!!BO&&!BO.Down)&&((BO.AF-this.JH)>=200)){this.AX=0;this.AY=0;
}if(Ef&&((Ab.AF-this.JH)>=200)){this.AX=0;this.AY=0;}if(!!AJ&&(AJ.AF>this.JH)){var
Ce=AJ.AN;var S6=1000/(AJ.AF-this.JH);var HJ=0;var HK;if(this.Nb)HJ=Ce[0]*S6;HK=Ce[
1]*S6;if((HJ*this.AX)<0)this.AX=0;if((HK*this.AY)<0)this.AY=0;this.AX=(this.AX+HJ
)*0.5;this.AY=(this.AY+HK)*0.5;this.JH=AJ.AF;}if(!CO&&!BO)return this;if(!!Ab&&Ab.
Dm){this.AX=0;this.AY=0;}if((this.AN[0]<=this.Ca[0])||(this.AN[0]>=this.B$[0]))this.
AX=0;else if(!this.AX){var A_=this.AN[0];var BG=this.Ca[0];var BH=this.B$[0];if(
A_<BG)BH=this.Ca[0];else if(A_>BH)BG=this.B$[0];else{BG=A_;BH=A_;}if((BG-A_)<=(A_-
BH))A_=BG;else A_=BH;if(A_!==this.AN[0]){var CK=A_-this.AN[0];if(CK>0)this.AX=Math.
sqrt((CK*2)*this.FS)+20;if(CK<0)this.AX=-Math.sqrt((-CK*2)*this.FS)-20;this.GP=(
400-(this.AX*this.AX))/(2*CK);this.Jj=A_;}}else{var Aaq=this.AX*this.AX;var CK=Aaq
/(2*this.FS);var A_=this.AN[0];if(this.AX>0)A_=A_+(CK|0);if(this.AX<0)A_=A_-(CK|
0);if(A_>this.B$[0])A_=this.B$[0];else if(A_<this.Ca[0])A_=this.Ca[0];var TW=A_;
var BG=this.Ca[0];var BH=this.B$[0];if(A_<BG)BH=this.Ca[0];else if(A_>BH)BG=this.
B$[0];else{BG=A_;BH=A_;}if(this.AX>0){if(BH<=this.AN[0])A_=BG;else if((A_-BH)<(BG-
A_))A_=BH;else A_=BG;}else if(BG>=this.AN[0])A_=BH;else if((A_-BH)>(BG-A_))A_=BG;
else A_=BH;if(A_!==this.AN[0]){CK=A_-this.AN[0];if(A_!==TW){var HS=A_-TW;if(HS>0
)this.AX=this.AX+Math.sqrt((HS*2)*this.FS);if(HS<0)this.AX=this.AX-Math.sqrt((-HS
*2)*this.FS);}if(this.AX>0)this.AX=this.AX+20;if(this.AX<0)this.AX=this.AX-20;this.
GP=(400-(this.AX*this.AX))/(2*CK);this.Jj=A_;}else this.AX=0;}if((this.AN[1]<=this.
Ca[1])||(this.AN[1]>=this.B$[1]))this.AY=0;else if(!this.AY){var A$=this.AN[1];var
BG=this.Ca[1];var BH=this.B$[1];if(A$<BG)BH=this.Ca[1];else if(A$>BH)BG=this.B$[
1];else{BG=A$;BH=A$;}if((BG-A$)<=(A$-BH))A$=BG;else A$=BH;if(A$!==this.AN[1]){var
CK=A$-this.AN[1];if(CK>0)this.AY=Math.sqrt((CK*2)*this.FS)+20;if(CK<0)this.AY=-Math.
sqrt((-CK*2)*this.FS)-20;this.GQ=(400-(this.AY*this.AY))/(2*CK);this.Jk=A$;}}else{
var Aar=this.AY*this.AY;var CK=Aar/(2*this.FS);var A$=this.AN[1];if(this.AY>0)A$=
A$+(CK|0);if(this.AY<0)A$=A$-(CK|0);if(A$>this.B$[1])A$=this.B$[1];else if(A$<this.
Ca[1])A$=this.Ca[1];var TX=A$;var BG=this.Ca[1];var BH=this.B$[1];if(A$<BG)BH=this.
Ca[1];else if(A$>BH)BG=this.B$[1];else{BG=A$;BH=A$;}if(this.AY>0){if(BH<=this.AN[
1])A$=BG;else if((A$-BH)<(BG-A$))A$=BH;else A$=BG;}else if(BG>=this.AN[1])A$=BH;
else if((A$-BH)>(BG-A$))A$=BG;else A$=BH;if(A$!==this.AN[1]){CK=A$-this.AN[1];if(
A$!==TX){var HS=A$-TX;if(HS>0)this.AY=this.AY+Math.sqrt((HS*2)*this.FS);if(HS<0)
this.AY=this.AY-Math.sqrt((-HS*2)*this.FS);}if(this.AY>0)this.AY=this.AY+20;if(this.
AY<0)this.AY=this.AY-20;this.GQ=(400-(this.AY*this.AY))/(2*CK);this.Jk=A$;}else this.
AY=0;}if(!!Ab)this.Ix=Ab.AF;if(!!BO)this.Ix=BO.AF;this.KM=this.Ix;this.Iy=this.AN[
0];this.Iz=this.AN[1];this.Aas();return this;},Fm:function(Ay,Ac,C_,FC,FG,FF){var
A;if(!!FC&&(FC!==this))return null;if(this.Aq>=33554432)return null;if((this.Aq>=
16777216)&&!(this.Aq&(4096<<Ac)))return null;if(!this.Nb&&!!(FF&0xC))return null;
var Az=B.kz(Ay,this.R);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Dw=B.zT(Ay);var
Bm=A9;if(Dw[0]<Az[0])Bm=[Az[0]-Dw[0],Bm[1]];if(Dw[0]>=Az[2])Bm=[(Az[2]-Dw[0])-1,
Bm[1]];if(Dw[1]<Az[1])Bm=[Bm[0],Az[1]-Dw[1]];if(Dw[1]>=Az[3])Bm=[Bm[0],(Az[3]-Dw[
1])-1];return B._NewObject(C.KU,0).Initialize(this,Bm);}return null;},Q$:function(
){if(!!this.timer){B.zl([this,this.De],this.timer,0);this.timer=null;}},Aas:function(
){this.timer=B._GetAutoObject(B.abl.HZ);B.y_([this,this.De],this.timer,0);},De:function(
M){var A;if(!this.timer)return;var KO=(this.timer.AF-this.Ix)*0.001;var KP=(this.
timer.AF-this.KM)*0.001;var Aau=KO*KO;var Aav=KP*KP;var HJ=(this.GP*KO)+this.AX;
var HK=(this.GQ*KP)+this.AY;var AI=[((((this.GP*0.5)*Aau)+(this.AX*KO))+this.Iy)|
0,((((this.GQ*0.5)*Aav)+(this.AY*KP))+this.Iz)|0];if(this.EM&&(KO>=0.5)){AI=[this.
Jj,AI[1]];this.AX=0;this.GP=0;this.Iy=AI[0];this.EM=false;}else if(this.EM){var Il=
1-Math.pow(1-(KO/0.5),5);AI=[(this.Iy+((this.Jj-this.Iy)*Il))|0,AI[1]];}if(this.
EN&&(KP>=0.5)){AI=[AI[0],this.Jk];this.AY=0;this.GQ=0;this.Iz=AI[1];this.EN=false;
}else if(this.EN){var Il=1-Math.pow(1-(KP/0.5),5);AI=[AI[0],(this.Iz+((this.Jk-this.
Iz)*Il))|0];}if(((this.AX>0)&&(HJ<0))||((this.AX<0)&&(HJ>0))){HJ=0;AI=[this.AN[0
],AI[1]];}if(((this.AY>0)&&(HK<0))||((this.AY<0)&&(HK>0))){HK=0;AI=[AI[0],this.AN[
1]];}if(!this.EM&&(AI[0]<this.Ca[0])){this.Iy=AI[0];this.Jj=this.Ca[0];this.Ix=this.
timer.AF;this.EM=true;}else if(!this.EM&&(AI[0]>this.B$[0])){this.Iy=AI[0];this.
Jj=this.B$[0];this.Ix=this.timer.AF;this.EM=true;}if(!this.EN&&(AI[1]<this.Ca[1]
)){this.Iz=AI[1];this.Jk=this.Ca[1];this.KM=this.timer.AF;this.EN=true;}else if(
!this.EN&&(AI[1]>this.B$[1])){this.Iz=AI[1];this.Jk=this.B$[1];this.KM=this.timer.
AF;this.EN=true;}if(((!this.EM&&!!this.AX)&&(HJ>-20))&&(HJ<20)){AI=[this.Jj,AI[1
]];this.AX=0;this.GP=0;this.Iy=AI[0];}if(((!this.EN&&!!this.AY)&&(HK>-20))&&(HK<
20)){AI=[AI[0],this.Jk];this.AY=0;this.GQ=0;this.Iz=AI[1];}if(!B.z8(AI,this.AN)){
this.Ro=B.aaj(AI,this.AN);this.AN=AI;(A=this.KI)?A[1].call(A[0],this):null;}if(((
!this.AX&&!this.AY)&&!this.EM)&&!this.EN){this.Q$();this.Kb=false;}},UY:function(
E){if(E<0)E=0;if(E>1)E=1;if(E===this.Rs)return;this.Rs=E;if(E<(1e-007))E=1e-007;
this.FS=E*10000;},_Init:function(aArg){C.B2._Init.call(this,aArg);this.__proto__=
C.D2;this.I=0x11B;},_Mark:function(D){var A;C.B2._Mark.call(this,D);if((A=this.timer
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.N8)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.KI)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::SlideTouchHandler"};C.Cj={Aj:null,Ck:null,BT:null,EZ:null,JG:0,AF:0,R0:0,
CD:148,BB:0,AD:0,Bo:true,Down:false,PU:false,Do:false,Ai:function(aArg){var A;var
A3=(C.O.isPrototypeOf(A=this.G)?A:null);if(!A3)throw new Error(Qd);this.Aj=A3.NZ;
A3.NZ=this;},BI:function(AG){var A;if(!!AG&&AG.Uj(this.CD)){this.Down=AG.Down;this.
BB=AG.BB;this.AD=AG.AD;this.AF=AG.AF;this.Do=false;if(AG.Down){this.R0=this.JG;this.
PU=this.JG>0;if(this.PU)(A=this.EZ)?A[1].call(A[0],this):null;else(A=this.BT)?A[
1].call(A[0],this):null;if(!this.Do)this.JG=this.JG+1;return!this.Do;}if(!AG.Down
){this.PU=this.JG>1;this.R0=this.JG-1;this.JG=0;(A=this.Ck)?A[1].call(A[0],this):
null;return!this.Do;}}return false;},_Init:function(aArg){this.__proto__=C.Cj;this.
Ai(aArg);B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.Aj)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Ck)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.BT)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.EZ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Core::KeyPressHandler"};C.KU={Cu:null,KV:0,AN:B.vw,Initialize:function(
Ad,aOffset){this.Cu=Ad;this.AN=aOffset;this.KV=(aOffset[0]*aOffset[0])+(aOffset[
1]*aOffset[1]);return this;},_Init:function(aArg){this.__proto__=C.KU;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.Cu)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D)
)A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:"Core::CursorHit"
};C.JV={Iq:null,Cg:B.vx,Ap:B.vx,isEmpty:false,_Init:function(aArg){this.__proto__=
C.JV;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.Iq)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};C.MK={HN:B.vw,HM:B.vw,_Init:function(aArg){C.JV._Init.call(
this,aArg);this.__proto__=C.MK;},_className:"Core::LayoutLineContext"};C.ML={Mk:
B.vw,Mj:B.vw,HN:B.vw,HM:B.vw,_Init:function(aArg){C.JV._Init.call(this,aArg);this.
__proto__=C.ML;},_className:"Core::LayoutQuadContext"};C.OB={A3:null,Aj:null,DQ:
null,DW:null,CA:null,JE:null,_Init:function(aArg){this.__proto__=C.OB;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.A3)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Aj)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.DQ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
DW)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.CA)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.JE)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D
))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:"Core::DialogContext"
};C.P2={DO:null,Bl:null,AV:null,S8:false,Zf:function(){if(!this.DO)return;var Dj=
this.DO;this.DO.Di=null;this.DO=null;B.ow([this,this.Q0],this);Dj.RO(this);},ZO:
function(M){if(!!this.DO)return;if(!this.AV)return;this.DO=this.AV;this.AV=this.
AV.Aj;if(!!this.AV)this.AV.Au=null;else this.Bl=null;this.DO.Aj=null;this.S8=true;
this.DO.J7(this);this.S8=false;},Z2:function(M){B.ow([this,this.ZO],this);},Z1:function(
M){B.ow([this,this.Z2],this);},Q0:function(M){B.ow([this,this.Z1],this);},T9:function(
BW){if(!BW||!BW.Di)return;if(BW.Di!==this)throw new Error(Qe);var T2=false;if(this.
DO===BW){this.DO=null;T2=true;B.ow([this,this.Q0],this);}else{if(!!BW.Aj)BW.Aj.Au=
BW.Au;else this.Bl=BW.Au;if(!!BW.Au)BW.Au.Aj=BW.Aj;else this.AV=BW.Aj;BW.Au=null;
BW.Aj=null;}BW.Di=null;if(T2)BW.RN(this);},R1:function(BW,Qs){if(!BW)return;if(!
!BW.Di)throw new Error(Nh);BW.Di=this;if(Qs){BW.Aj=this.AV;if(!!this.AV)this.AV.
Au=BW;else this.Bl=BW;this.AV=BW;}else{BW.Au=this.Bl;if(!!this.Bl)this.Bl.Aj=BW;
else this.AV=BW;this.Bl=BW;}if(!this.DO)B.ow([this,this.Q0],this);},_Init:function(
aArg){this.__proto__=C.P2;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.DO)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Bl)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AV)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);
},G:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.H9={Di:null,Au:
null,Aj:null,RO:function(Ku){},RN:function(Ku){},J7:function(Ku){this.Rm();},HT:
function(){if(!!this.Di&&(this.Di.DO===this))this.Di.Zf();},Rm:function(){if(!!this.
Di)this.Di.T9(this);},OX:function(){return!!this.Di&&(this.Di.DO===this);},_Init:
function(aArg){this.__proto__=C.H9;B.hJ++;},_Done:function(){this.__proto__=null;
B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Di)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Au)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Aj)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=
D);},G:null,_cycle:0,_observers:null,_className:"Core::Task"};C.P1={Y:null,KN:null
,J7:function(Ku){this.KN.Y=this.Y;B.vv(this.KN,0);B.ow([this,this.ZM],this);},ZM:
function(M){this.KN.Y=null;this.KN=null;this.Y=null;this.HT();},_Init:function(aArg
){C.H9._Init.call(this,aArg);this.__proto__=C.P1;},_Mark:function(D){var A;C.H9.
_Mark.call(this,D);if((A=this.Y)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.KN
)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SystemEventTask"};C.Nd={
_Init:function(){C.P2._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.Hf={resource:null,Ep:function(){this.resource=null;},Ai:function(aArg){this.
resource=aArg;},_Init:function(aArg){this.__proto__=C.Hf;this.Ai(aArg);B.hJ++;},
_Done:function(){this.Ep();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:
0,_observers:null,_className:"Core::Resource"};C.Timer={CE:null,timer:null,AF:0,
Period:1000,Mv:0,Bo:false,Ep:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer(
);this.timer=null;},N9:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<
0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.zk(this,
this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=
tmp;},DZ:function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=E;if(this.
Bo)this.N9(this.Mv,E);},E0:function(E){if(E<0)E=0;if(E===this.Mv)return;this.Mv=
E;if(this.Bo)this.N9(E,this.Period);},Ar:function(E){if(E===this.Bo)return;this.
Bo=E;if(E)this.N9(this.Mv,this.Period);else this.N9(0,0);this.AF=this.MF();},MF:
function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;
},Trigger:function(){var A;this.AF=this.MF();if(!this.Period)this.Ar(false);(A=this.
CE)?A[1].call(A[0],this):null;},LD:function(M){this.Ar(false);},StartTimer:function(
M){if(this.Bo)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=
C.Timer;B.hJ++;},_Done:function(){this.Ep();this.__proto__=null;B.hJ--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.CE)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Core::Timer"};C.R4={Y:null,Di:null,Trigger:function(Y2,Qs){var Dj=
B._NewObject(C.P1,0);Dj.KN=this;Dj.Y=Y2;this.Di.R1(Dj,Qs);},_Init:function(aArg){
this.__proto__=C.R4;this.Di=B._GetAutoObject(C.Nd);B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
Y)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Di)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Core::SystemEvent"};C.Nc={Ox:null,Event:null,A8:null,Jy:function(
M){var A;if(!this.Event)return;this.Ox=this.Event.Y;(A=this.A8)?A[1].call(A[0],this
):null;this.Ox=null;},PE:function(E){if(this.Event===E)return;if(!!this.Event)B.
zl([this,this.Jy],this.Event,0);this.Event=E;if(!!this.Event)B.y_([this,this.Jy]
,this.Event,0);},_Init:function(aArg){this.__proto__=C.Nc;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Ox)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Event)&&(A._cycle!=D))A.
_Mark(A._cycle=D);if((A=this.A8)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=
this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.Br={A8:null,CT:null,Jy:function(M){var A;(A=this.A8
)?A[1].call(A[0],this):null;},Bt:function(E){if(B.z_(this.CT,E))return;if(!!this.
CT)B.zn([this,this.Jy],this.CT,0);this.CT=E;if(!!this.CT)B.za([this,this.Jy],this.
CT,0);},_Init:function(aArg){this.__proto__=C.Br;B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
A8)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CT)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null
,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};C.AbR={E8:0x1,AaJ:
0x2,AaX:0x4,AbP:0x8,Bo:0x10,Abx:0x20,AaY:0x40,Aa$:0x80,AaW:0x100,Aa6:0x200,AaU:0x400
,Abk:0x800,R5:0x1000,AbQ:0x2000,Abi:0x4000,Abj:0x8000,AaR:0x10000,Abh:0x20000,Abu:
0x40000};C.Dt={Abl:0x1,Abm:0x2,AaF:0x4,AaG:0x8,AaH:0x10,AaE:0x20};C.Aa0={Abc:0,AbM:
1,AaL:2,Aa7:3,Abo:4,AbN:5,AbO:6,AaM:7,AaN:8,Aa9:9,Aa8:10,Abq:11,Abp:12};C.KeyCode={
NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10
,Key1:11,Key2:12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,
Green:21,Blue:22,Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:
31,F7:32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:
40,Home:41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48
,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,
SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:
67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:
76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,
User1:86,User2:87,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94
,User10:95,User11:96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:
102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,
KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119
,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128
,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136
,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142
,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:146,CursorKeys:147
,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154
,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:
161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167
,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:
174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180
,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:
187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:
194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:
201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:
207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:
213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:
218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:
223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:
228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:
233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:
238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:
243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:
248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:
253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:
258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:
263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:
268,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:
272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.Abn={AbY:0x1,AbV:0x2,AbW:0x4,AbX:
0x8,Aa_:0x10,AaZ:0x20};
C._Init=function(){C.JX.__proto__=C.Cu;C.Fu.__proto__=C.Cu;C.B2.__proto__=C.Cu;C.
O.__proto__=C.B2;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.KT.__proto__=
C.Event;C.Gh.__proto__=C.Event;C.JS.__proto__=C.Event;C.Lw.__proto__=C.B2;C.B3.__proto__=
C.Fu;C.D2.__proto__=C.B2;C.MK.__proto__=C.JV;C.ML.__proto__=C.JV;C.P1.__proto__=
C.H9;};C._ReInit=function(){var A;if((A=C.Nd._this))A._ReInit();};C.C9=function(
D){var A;if((A=C.Nd._this)&&(A._cycle!=D))A._Done(C.Nd._this=null);};return C;})(
);

/* Embedded Wizard */