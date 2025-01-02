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
var A9=[0,0];var Bc=[0,0,0,0];var DJ="The view does not belong to this group";var
DK="The dialog component is already presented";var Fy="The dialog component is actually not presented";
var E8="No fader to perform the fade-in/out operation";var Fz="Trying to use the same fader twice";
var If="Trying to fade-in/out a group which belongs to another owner";var Kk="No view to restack";
var Jb="View is not in this group";var Qa="No view to remove";var Qb="No view to add";
var Qc="View already in a group";var Qd="Recursive invalidate during active update cycle.";
var Kl=[-8,-8,9,9];var Ng=[0,0,1,1];var Qe="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var Qf="Trying to cancel a task not belonging to this queue!";
var Nh="Trying to enqueue a task twice!";
C.Cu={Aj:null,Au:null,L:null,A4:null,I:0x103,Ds:0x14,KC:function(Z,Ks){},Gs:function(
E){var A;var Cd=E^this.Ds;if(!Cd)return;this.Ds=E;if(!!this.A4&&!((this.I&0x400)===
0x400)){this.L.I=this.L.I|0x5000;B.ow([A=this.L,A.CP],this);this.L.AA([0,0,(A=this.
L.R)[2]-A[0],A[3]-A[1]]);}if(!!this.A4&&((this.I&0x400)===0x400)){this.A4.Ip.I=this.
A4.Ip.I|0x1000;this.L.I=this.L.I|0x4000;B.ow([A=this.L,A.CP],this);}},IH:function(
){var Ar=this.L;while(!!Ar){var DC=(C.Root.isPrototypeOf(Ar)?Ar:null);if(!!DC)return DC;
Ar=Ar.L;}return null;},DX:function(Bd,aClip,aOffset,A1,aBlend){},BI:function(AF){
return null;},Fl:function(Ay,Ac,C8,FA,FE,FD){return null;},KQ:function(Ay){return Ay;
},KR:function(Z,CI){return A9;},JY:function(aOffset,Kq){},GetExtent:function(){return Bc;
},Bm:function(Hz,Jd){var A;if(((this.I&0x200)===0x200))Hz=Hz&~0x400;var QU=(this.
I&~Jd)|Hz;var Ij=QU^this.I;this.I=QU;if(!!this.L&&!!(Ij&0x14)){var SV=((this.I&0x14
)===0x14);if(SV&&!this.L.Dp)this.L.Df(this);if(!SV&&(this.L.Dp===this))this.L.Df(
this.L.Rs(this,0x14));}if(!!this.L&&!!(Ij&0x403))this.L.AA(this.GetExtent());if(((
!!this.A4&&!!this.L)&&((QU&0x400)===0x400))&&((Ij&0x1)===0x1)){this.I=this.I|0x800;
this.L.I=this.L.I|0x4000;B.ow([A=this.L,A.CP],this);}if(!!this.L&&((Ij&0x400)===
0x400)){this.A4=null;this.I=this.I|0x800;this.L.I=this.L.I|0x4000;B.ow([A=this.L
,A.CP],this);}},_Init:function(aArg){this.__proto__=C.Cu;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Aj)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Au)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.L)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.A4)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);
},G:null,_cycle:0,_observers:null,_className:"Core::View"};C.JW={Bb:B.vw,Ba:B.vw
,KC:function(Z,Ks){var Y=B._NewObject(C.MK,0);this.A4=null;Y.Cf=this.getExtent();
Y.Ap=Z;Y.Ip=Ks;Y.HL=this.Ba;Y.HM=this.Bb;this.A4=Y;},KR:function(Z,CI){var A;var
AW=this.Ds;var Y=(C.MK.isPrototypeOf(A=this.A4)?A:null);var x1=Y.Cf[0];var y1=Y.
Cf[1];var x2=Y.Cf[2];var y2=Y.Cf[3];var B5=[Z[2]-Z[0],Z[3]-Z[1]];var w=x2-x1;var
h=y2-y1;var tmp;if(!CI){var C2=[(A=Y.Ap)[2]-A[0],A[3]-A[1]];x1=x1-Y.Ap[0];y1=y1-
Y.Ap[1];if(C2[0]!==B5[0]){var Bx=((AW&0x4)===0x4);var By=((AW&0x8)===0x8);var DA=((
AW&0x1)===0x1);if(!Bx&&(DA||!By))x1=((x1*B5[0])/C2[0])|0;if(!By&&(DA||!Bx)){x2=x2-
Y.Ap[0];x2=((x2*B5[0])/C2[0])|0;x2=x2-B5[0];}else x2=x2-Y.Ap[2];x1=x1+Z[0];x2=x2+
Z[2];if(!DA){if(Bx&&!By)x2=x1+w;else if(!Bx&&By)x1=x2-w;else{x1=x1+((((x2-x1)-w)
/2)|0);x2=x1+w;}}}else{x2=x2-Y.Ap[2];x1=x1+Z[0];x2=x2+Z[2];}if(C2[1]!==B5[1]){var
Bz=((AW&0x10)===0x10);var Bw=((AW&0x20)===0x20);var DB=((AW&0x2)===0x2);if(!Bz&&(
DB||!Bw))y1=((y1*B5[1])/C2[1])|0;if(!Bw&&(DB||!Bz)){y2=y2-Y.Ap[1];y2=((y2*B5[1])
/C2[1])|0;y2=y2-B5[1];}else y2=y2-Y.Ap[3];y1=y1+Z[1];y2=y2+Z[3];if(!DB){if(Bz&&!
Bw)y2=y1+h;else if(!Bz&&Bw)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+h;}}}else{
y2=y2-Y.Ap[3];y1=y1+Z[1];y2=y2+Z[3];}}else{switch(CI){case 3:{x1=Z[0];x2=x1+w;}break;
case 4:{x2=Z[2];x1=x2-w;}break;case 1:{y1=Z[1];y2=y1+h;}break;case 2:{y2=Z[3];y1=
y2-h;}break;default:;}if((CI===3)||(CI===4)){var Bz=((AW&0x10)===0x10);var Bw=((
AW&0x20)===0x20);var DB=((AW&0x2)===0x2);if(DB){y1=Z[1];y2=Z[3];}else if(Bz&&!Bw
){y1=Z[1];y2=y1+h;}else if(Bw&&!Bz){y2=Z[3];y1=y2-h;}else{y1=Z[1]+((((Z[3]-Z[1])-
h)/2)|0);y2=y1+h;}}if((CI===1)||(CI===2)){var Bx=((AW&0x4)===0x4);var By=((AW&0x8
)===0x8);var DA=((AW&0x1)===0x1);if(DA){x1=Z[0];x2=Z[2];}else if(Bx&&!By){x1=Z[0
];x2=x1+w;}else if(By&&!Bx){x2=Z[2];x1=x2-w;}else{x1=Z[0]+((((Z[2]-Z[0])-w)/2)|0
);x2=x1+w;}}}Y.isEmpty=(x1>=x2)||(y1>=y2);w=x2-x1;h=y2-y1;if(Y.HM[0]<Y.HL[0]){tmp=
x1;x1=x2-1;x2=tmp-1;}if(Y.HM[1]<Y.HL[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1
)x2=x1;if((y2-y1)===1)y2=y1;if(((this.I&0x100)===0x100)){this.Ba=[x1,y1];this.Bb=[
x2,y2];}else{this.BT([x1,y1]);this.BJ([x2,y2]);this.A4=Y;}return[w,h];},JY:function(
aOffset,Kq){if(Kq){this.Ba=B.aak(this.Ba,aOffset);this.Bb=B.aak(this.Bb,aOffset);
}else{this.BT(B.aak(this.Ba,aOffset));this.BJ(B.aak(this.Bb,aOffset));}},GetExtent:
function(){if(!!this.A4&&this.A4.isEmpty)return Bc;return this.getExtent();},getExtent:
function(){var x1=this.Ba[0];var y1=this.Ba[1];var x2=this.Bb[0];var y2=this.Bb[
1];var w=x2-x1;var h=y2-y1;var tmp;if(w<0)w=-w;if(h<0)h=-h;if(w>=h){if(x2>x1)x2=
x2-1;if(x2<x1)x2=x2+1;}if(h>=w){if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=
x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},BJ:function(
E){var A;if(B.z8(E,this.Bb))return;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.
GetExtent());this.A4=null;this.Bb=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(
this.GetExtent());if((!!this.L&&((this.I&0x400)===0x400))&&!((this.L.I&0x2000)===
0x2000)){this.I=this.I|0x800;this.L.I=this.L.I|0x4000;B.ow([A=this.L,A.CP],this);
}},BT:function(E){var A;if(B.z8(E,this.Ba))return;if(!!this.L&&((this.I&0x1)===0x1
))this.L.AA(this.GetExtent());this.A4=null;this.Ba=E;if(!!this.L&&((this.I&0x1)===
0x1))this.L.AA(this.GetExtent());if((!!this.L&&((this.I&0x400)===0x400))&&!((this.
L.I&0x2000)===0x2000)){this.I=this.I|0x800;this.L.I=this.L.I|0x4000;B.ow([A=this.
L,A.CP],this);}},_Init:function(aArg){C.Cu._Init.call(this,aArg);this.__proto__=
C.JW;},_className:"Core::LineView"};C.Fs={Cl:B.vw,CF:B.vw,Bb:B.vw,Ba:B.vw,KC:function(
Z,Ks){var Y=B._NewObject(C.ML,0);this.A4=null;Y.Cf=this.GetExtent();Y.Ap=Z;Y.Ip=
Ks;Y.HL=this.Ba;Y.HM=this.Bb;Y.Mj=this.CF;Y.Mk=this.Cl;this.A4=Y;},KR:function(Z
,CI){var A;var AW=this.Ds;var Y=(C.ML.isPrototypeOf(A=this.A4)?A:null);var x1=Y.
Cf[0];var y1=Y.Cf[1];var x2=Y.Cf[2];var y2=Y.Cf[3];var B5=[Z[2]-Z[0],Z[3]-Z[1]];
var w=x2-x1;var h=y2-y1;if(!CI){var C2=[(A=Y.Ap)[2]-A[0],A[3]-A[1]];x1=x1-Y.Ap[0
];y1=y1-Y.Ap[1];if(C2[0]!==B5[0]){var Bx=((AW&0x4)===0x4);var By=((AW&0x8)===0x8
);var DA=((AW&0x1)===0x1);if(!Bx&&(DA||!By))x1=((x1*B5[0])/C2[0])|0;if(!By&&(DA||
!Bx)){x2=x2-Y.Ap[0];x2=((x2*B5[0])/C2[0])|0;x2=x2-B5[0];}else x2=x2-Y.Ap[2];x1=x1+
Z[0];x2=x2+Z[2];if(!DA){if(Bx&&!By)x2=x1+w;else if(!Bx&&By)x1=x2-w;else{x1=x1+((((
x2-x1)-w)/2)|0);x2=x1+w;}}}else{x2=x2-Y.Ap[2];x1=x1+Z[0];x2=x2+Z[2];}if(C2[1]!==
B5[1]){var Bz=((AW&0x10)===0x10);var Bw=((AW&0x20)===0x20);var DB=((AW&0x2)===0x2
);if(!Bz&&(DB||!Bw))y1=((y1*B5[1])/C2[1])|0;if(!Bw&&(DB||!Bz)){y2=y2-Y.Ap[1];y2=((
y2*B5[1])/C2[1])|0;y2=y2-B5[1];}else y2=y2-Y.Ap[3];y1=y1+Z[1];y2=y2+Z[3];if(!DB){
if(Bz&&!Bw)y2=y1+h;else if(!Bz&&Bw)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+
h;}}}else{y2=y2-Y.Ap[3];y1=y1+Z[1];y2=y2+Z[3];}}else{switch(CI){case 3:{x1=Z[0];
x2=x1+w;}break;case 4:{x2=Z[2];x1=x2-w;}break;case 1:{y1=Z[1];y2=y1+h;}break;case
2:{y2=Z[3];y1=y2-h;}break;default:;}if((CI===3)||(CI===4)){var Bz=((AW&0x10)===0x10
);var Bw=((AW&0x20)===0x20);var DB=((AW&0x2)===0x2);if(DB){y1=Z[1];y2=Z[3];}else
if(Bz&&!Bw){y1=Z[1];y2=y1+h;}else if(Bw&&!Bz){y2=Z[3];y1=y2-h;}else{y1=Z[1]+((((
Z[3]-Z[1])-h)/2)|0);y2=y1+h;}}if((CI===1)||(CI===2)){var Bx=((AW&0x4)===0x4);var
By=((AW&0x8)===0x8);var DA=((AW&0x1)===0x1);if(DA){x1=Z[0];x2=Z[2];}else if(Bx&&
!By){x1=Z[0];x2=x1+w;}else if(By&&!Bx){x2=Z[2];x1=x2-w;}else{x1=Z[0]+((((Z[2]-Z[
0])-w)/2)|0);x2=x1+w;}}}Y.isEmpty=(x1>=x2)||(y1>=y2);w=(x2-x1)-1;h=(y2-y1)-1;var
HD=Y.Cf[0];var HE=Y.Cf[1];var GT=(Y.Cf[2]-HD)-1;var GS=(Y.Cf[3]-HE)-1;if(!GT)GT=
1;if(!GS)GS=1;if(((this.I&0x100)===0x100)){this.Ba=[x1+((((Y.HL[0]-HD)*w)/GT)|0)
,y1+((((Y.HL[1]-HE)*h)/GS)|0)];this.Bb=[x1+((((Y.HM[0]-HD)*w)/GT)|0),y1+((((Y.HM[
1]-HE)*h)/GS)|0)];this.CF=[x1+((((Y.Mj[0]-HD)*w)/GT)|0),y1+((((Y.Mj[1]-HE)*h)/GS
)|0)];this.Cl=[x1+((((Y.Mk[0]-HD)*w)/GT)|0),y1+((((Y.Mk[1]-HE)*h)/GS)|0)];}else{
this.BT([x1+((((Y.HL[0]-HD)*w)/GT)|0),y1+((((Y.HL[1]-HE)*h)/GS)|0)]);this.BJ([x1+((((
Y.HM[0]-HD)*w)/GT)|0),y1+((((Y.HM[1]-HE)*h)/GS)|0)]);this.Fr([x1+((((Y.Mj[0]-HD)
*w)/GT)|0),y1+((((Y.Mj[1]-HE)*h)/GS)|0)]);this.Gt([x1+((((Y.Mk[0]-HD)*w)/GT)|0),
y1+((((Y.Mk[1]-HE)*h)/GS)|0)]);this.A4=Y;}return[w+1,h+1];},JY:function(aOffset,
Kq){if(Kq){this.Ba=B.aak(this.Ba,aOffset);this.Bb=B.aak(this.Bb,aOffset);this.CF=
B.aak(this.CF,aOffset);this.Cl=B.aak(this.Cl,aOffset);}else{this.BT(B.aak(this.Ba
,aOffset));this.BJ(B.aak(this.Bb,aOffset));this.Fr(B.aak(this.CF,aOffset));this.
Gt(B.aak(this.Cl,aOffset));}},GetExtent:function(){if(!!this.A4&&this.A4.isEmpty
)return Bc;var x1=this.Ba[0];var y1=this.Ba[1];var x2=this.CF[0];var y2=this.CF[
1];if((((this.Cl[0]!==x1)||(this.Bb[1]!==y1))||(this.Bb[0]!==x2))||(this.Cl[1]!==
y2)){if(this.Bb[0]<x1)x1=this.Bb[0];if(this.CF[0]<x1)x1=this.CF[0];if(this.Cl[0]<
x1)x1=this.Cl[0];if(this.Bb[1]<y1)y1=this.Bb[1];if(this.CF[1]<y1)y1=this.CF[1];if(
this.Cl[1]<y1)y1=this.Cl[1];if(this.Ba[0]>x2)x2=this.Ba[0];if(this.Bb[0]>x2)x2=this.
Bb[0];if(this.Cl[0]>x2)x2=this.Cl[0];if(this.Ba[1]>y2)y2=this.Ba[1];if(this.Bb[1
]>y2)y2=this.Bb[1];if(this.Cl[1]>y2)y2=this.Cl[1];}else{var tmp;if(x2<x1){tmp=x1;
x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},Gt:function(
E){var A;if(B.z8(E,this.Cl))return;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.
GetExtent());this.A4=null;this.Cl=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(
this.GetExtent());if((!!this.L&&((this.I&0x400)===0x400))&&!((this.L.I&0x2000)===
0x2000)){this.I=this.I|0x800;this.L.I=this.L.I|0x4000;B.ow([A=this.L,A.CP],this);
}},Fr:function(E){var A;if(B.z8(E,this.CF))return;if(!!this.L&&((this.I&0x1)===0x1
))this.L.AA(this.GetExtent());this.A4=null;this.CF=E;if(!!this.L&&((this.I&0x1)===
0x1))this.L.AA(this.GetExtent());if((!!this.L&&((this.I&0x400)===0x400))&&!((this.
L.I&0x2000)===0x2000)){this.I=this.I|0x800;this.L.I=this.L.I|0x4000;B.ow([A=this.
L,A.CP],this);}},BJ:function(E){var A;if(B.z8(E,this.Bb))return;if(!!this.L&&((this.
I&0x1)===0x1))this.L.AA(this.GetExtent());this.A4=null;this.Bb=E;if(!!this.L&&((
this.I&0x1)===0x1))this.L.AA(this.GetExtent());if((!!this.L&&((this.I&0x400)===0x400
))&&!((this.L.I&0x2000)===0x2000)){this.I=this.I|0x800;this.L.I=this.L.I|0x4000;
B.ow([A=this.L,A.CP],this);}},BT:function(E){var A;if(B.z8(E,this.Ba))return;if(
!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent());this.A4=null;this.Ba=
E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent());if((!!this.L&&((
this.I&0x400)===0x400))&&!((this.L.I&0x2000)===0x2000)){this.I=this.I|0x800;this.
L.I=this.L.I|0x4000;B.ow([A=this.L,A.CP],this);}},OZ:function(CW){var Bu=B.aan(4
,B.vw,null);var i=0;var j=3;var QN=false;var QO=false;Bu.Set(0,this.Ba);Bu.Set(1
,this.Bb);Bu.Set(2,this.CF);Bu.Set(3,this.Cl);while(i<4){var T1=Bu.Get(i)[0];var
Oj=Bu.Get(i)[1];var Aay=Bu.Get(j)[0];var Rc=Bu.Get(j)[1];if(((Oj>CW[1])!==(Rc>CW[
1]))||((Oj<CW[1])!==(Rc<CW[1]))){var x=((((Aay-T1)*(CW[1]-Oj))/(Rc-Oj))|0)+T1;if(
CW[0]>x)QN=!QN;if(CW[0]<x)QO=!QO;}j=i;i=i+1;}return QN||QO;},Ug:function(){return((((
this.Ba[0]===this.Cl[0])&&(this.Bb[0]===this.CF[0]))&&(this.Ba[1]===this.Bb[1]))&&(
this.CF[1]===this.Cl[1]))||((((this.Ba[0]===this.Bb[0])&&(this.CF[0]===this.Cl[0
]))&&(this.Ba[1]===this.Cl[1]))&&(this.Bb[1]===this.CF[1]));},_Init:function(aArg
){C.Cu._Init.call(this,aArg);this.__proto__=C.Fs;},_className:"Core::QuadView"};
C.B1={R:B.vx,KC:function(Z,Ks){var Y=B._NewObject(C.JU,0);Y.Cf=this.R;Y.Ap=Z;Y.Ip=
Ks;this.A4=Y;},KR:function(Z,CI){var A;var AW=this.Ds;var Y=this.A4;var x1=Y.Cf[
0];var y1=Y.Cf[1];var x2=Y.Cf[2];var y2=Y.Cf[3];var B5=[Z[2]-Z[0],Z[3]-Z[1]];var
w=x2-x1;var h=y2-y1;if(!CI){var C2=[(A=Y.Ap)[2]-A[0],A[3]-A[1]];x1=x1-Y.Ap[0];y1=
y1-Y.Ap[1];if(C2[0]!==B5[0]){var Bx=((AW&0x4)===0x4);var By=((AW&0x8)===0x8);var
DA=((AW&0x1)===0x1);if(!Bx&&(DA||!By))x1=((x1*B5[0])/C2[0])|0;if(!By&&(DA||!Bx)){
x2=x2-Y.Ap[0];x2=((x2*B5[0])/C2[0])|0;x2=x2-B5[0];}else x2=x2-Y.Ap[2];x1=x1+Z[0];
x2=x2+Z[2];if(!DA){if(Bx&&!By)x2=x1+w;else if(!Bx&&By)x1=x2-w;else{x1=x1+((((x2-
x1)-w)/2)|0);x2=x1+w;}}}else{x2=x2-Y.Ap[2];x1=x1+Z[0];x2=x2+Z[2];}if(C2[1]!==B5[
1]){var Bz=((AW&0x10)===0x10);var Bw=((AW&0x20)===0x20);var DB=((AW&0x2)===0x2);
if(!Bz&&(DB||!Bw))y1=((y1*B5[1])/C2[1])|0;if(!Bw&&(DB||!Bz)){y2=y2-Y.Ap[1];y2=((
y2*B5[1])/C2[1])|0;y2=y2-B5[1];}else y2=y2-Y.Ap[3];y1=y1+Z[1];y2=y2+Z[3];if(!DB){
if(Bz&&!Bw)y2=y1+h;else if(!Bz&&Bw)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+
h;}}}else{y2=y2-Y.Ap[3];y1=y1+Z[1];y2=y2+Z[3];}}else{switch(CI){case 3:{x1=Z[0];
x2=x1+w;}break;case 4:{x2=Z[2];x1=x2-w;}break;case 1:{y1=Z[1];y2=y1+h;}break;case
2:{y2=Z[3];y1=y2-h;}break;default:;}if((CI===3)||(CI===4)){var Bz=((AW&0x10)===0x10
);var Bw=((AW&0x20)===0x20);var DB=((AW&0x2)===0x2);if(DB){y1=Z[1];y2=Z[3];}else
if(Bz&&!Bw){y1=Z[1];y2=y1+h;}else if(Bw&&!Bz){y2=Z[3];y1=y2-h;}else{y1=Z[1]+((((
Z[3]-Z[1])-h)/2)|0);y2=y1+h;}}if((CI===1)||(CI===2)){var Bx=((AW&0x4)===0x4);var
By=((AW&0x8)===0x8);var DA=((AW&0x1)===0x1);if(DA){x1=Z[0];x2=Z[2];}else if(Bx&&
!By){x1=Z[0];x2=x1+w;}else if(By&&!Bx){x2=Z[2];x1=x2-w;}else{x1=Z[0]+((((Z[2]-Z[
0])-w)/2)|0);x2=x1+w;}}}Y.isEmpty=(x1>=x2)||(y1>=y2);if(((this.I&0x100)===0x100)
)this.R=[x1,y1,x2,y2];else{this.H([x1,y1,x2,y2]);this.A4=Y;}return[x2-x1,y2-y1];
},JY:function(aOffset,Kq){if(Kq)this.R=B.aam(this.R,aOffset);else this.H(B.aam(this.
R,aOffset));},GetExtent:function(){return this.R;},H:function(E){var A;if(B.z9(E
,this.R))return;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);this.A4=null;
this.R=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);if((!!this.L&&((this.
I&0x400)===0x400))&&!((this.L.I&0x2000)===0x2000)){this.I=this.I|0x800;this.L.I=
this.L.I|0x4000;B.ow([A=this.L,A.CP],this);}},_Init:function(aArg){C.Cu._Init.call(
this,aArg);this.__proto__=C.B1;},_className:"Core::RectView"};C.O={AV:null,Bk:null
,NZ:null,BK:null,BN:null,EI:null,JE:null,Dp:null,Hc:255,Ai:function(aArg){this.C4(
);},DX:function(Bd,aClip,aOffset,A1,aBlend){var A;A1=((A1+1)*this.Hc)>>8;aBlend=
aBlend&&((this.I&0x2)===0x2);if(!this.BK||(Bd.A3===this))this.ST(Bd,aClip,B.aak(
aOffset,this.R.slice(0,2)),A1,aBlend);else{var BL=255|(255<<8)|(255<<16)|((A1&0xFF
)<<24);this.BK.Update();Bd.Ro(aClip,this.BK,0,B.aam(this.R,aOffset),A9,BL,BL,BL,
BL,aBlend);}},Fl:function(Ay,Ac,C8,FA,FE,FD){var A;var P=this.Bk;var Jk=null;var
X=Bc;var DQ=null;var Jr=!!this.EI&&(!!this.EI.DN||!!this.EI.AV);if(((A=B.kz(Ay,this.
R))[0]>=A[2])||(A[1]>=A[3]))return null;Ay=B.aal(Ay,this.R.slice(0,2));if(!!FE){
P=FE;while(!!P&&(P.L!==this))P=P.L;}while(!!P){if(((P.I&0x400)===0x400)&&!DQ){DQ=
P.Au;while(!!DQ&&!((DQ.I&0x200)===0x200))DQ=DQ.Au;if(!!DQ)X=B.kz(Ay,DQ.GetExtent(
));else X=Bc;}if(DQ===P){DQ=null;X=Bc;}if((((((P.I&0x8)===0x8)&&((P.I&0x10)===0x10
))&&!((P.I&0x40000)===0x40000))&&!((P.I&0x20000)===0x20000))&&(!((P.I&0x10000)===
0x10000)||((this.BN.A3===P)&&!Jr))){var Cf=P.GetExtent();var NK=FA;var Jg=null;if(
NK===P)NK=null;if(((P.I&0x400)===0x400)){if(!(((A=B.kz(Cf,X))[0]>=A[2])||(A[1]>=
A[3])))Jg=P.Fl(X,Ac,C8,NK,FE,FD);}else if(!(((A=B.kz(Cf,Ay))[0]>=A[2])||(A[1]>=A[
3]))||(FA===P))Jg=P.Fl(Ay,Ac,C8,NK,FE,FD);P=P.Au;if(!!Jg){if(!Jk||((Jg.KU<Jk.KU)&&(
Jg.KU>=0)))Jk=Jg;if(!Jg.KU)P=null;}}else P=P.Au;FE=null;}return Jk;},KQ:function(
Ay){var A;var Af;var P=this.AV;var LR=Bc;var Mh=true;var result=(Ay=Af=B.aal(Ay,
this.R.slice(0,2)),Af);while(!!P){if(((P.I&0x200)===0x200)){var Mg=(C.Lv.isPrototypeOf(
P)?P:null);LR=B.kz(Ay,Mg.R);Mh=((Mg.I&0x1)===0x1);}if(((P.I&0x1)===0x1)){if(((P.
I&0x400)===0x400)){if(Mh){var X=B.kz(P.GetExtent(),LR);if(!((X[0]>=X[2])||(X[1]>=
X[3])))result=B.vS(result,P.KQ(X));}}else{var X=B.kz(P.GetExtent(),Ay);if(!((X[0
]>=X[2])||(X[1]>=X[3])))result=B.vS(result,P.KQ(X));}}P=P.Aj;}return B.kz(B.aam(
result,this.R.slice(0,2)),this.R);},Bm:function(Hz,Jd){var A;var Zu=this.I;C.B1.
Bm.call(this,Hz,Jd);var Ij=this.I^Zu;if(!!this.Dp&&((Ij&0x40)===0x40)){if(((this.
I&0x40)===0x40))this.Dp.Bm(0x40,0x0);else this.Dp.Bm(0x0,0x40);}if(!!this.BN&&((
Ij&0x40)===0x40)){if(((this.I&0x40)===0x40)&&((this.BN.A3.I&0x14)===0x14))this.BN.
A3.Bm(0x40,0x0);else this.BN.A3.Bm(0x0,0x40);}if(!!Ij){this.I=this.I|0x8000;B.ow([
this,this.CP],this);}},H:function(E){var A;if(B.z9(E,this.R))return;var Io=[(A=this.
R)[2]-A[0],A[3]-A[1]];var N1=[E[2]-E[0],E[3]-E[1]];var JH=!B.z8(Io,N1);if(JH&&!!
this.BK){this.BK.Ln(N1);B.vv(this,0);B.vv(this.BK,0);}C.B1.H.call(this,E);if((JH&&(
Io[0]>0))&&(Io[1]>0)){var Ap=[].concat(A9,Io);var P=this.AV;while(!!P){if((!P.A4&&(
P.Ds!==0x14))&&!((P.I&0x400)===0x400))P.KC(Ap,null);P=P.Aj;}}if(JH){this.I=this.
I|0x5000;B.ow([this,this.CP],this);}},TR:function(AF){var S9=(C.KeyEvent.isPrototypeOf(
AF)?AF:null);var Fd=this.NZ;if(!S9)return null;while(!!Fd&&(!Fd.Bn||!Fd.BI(S9)))
Fd=Fd.Aj;return Fd;},Aau:function(M){if(!!this.BK){this.BK.A3=this;var X=B.aal(this.
KQ(B.aam(this.BK.Er,this.R.slice(0,2))),this.R.slice(0,2));this.BK.MC(X,X,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.ST(this.BK,X,A9,255,true);this.BK.
A3=null;}},ST:function(Bd,aClip,aOffset,A1,aBlend){var A;var P=this.AV;var LR=Bc;
var Mh=true;this.T$(Bd,aClip,aOffset,A1,aBlend);while(!!P){if(((P.I&0x200)===0x200
)){var Mg=(C.Lv.isPrototypeOf(P)?P:null);LR=B.kz(aClip,B.aam(Mg.R,aOffset));Mh=((
Mg.I&0x1)===0x1);}if(((P.I&0x1)===0x1)){if(((P.I&0x400)===0x400)){if(Mh){var X=B.
kz(B.aam(P.GetExtent(),aOffset),LR);if(!((X[0]>=X[2])||(X[1]>=X[3])))P.DX(Bd,X,aOffset
,A1,aBlend);}}else{var X=B.kz(B.aam(P.GetExtent(),aOffset),aClip);if(!((X[0]>=X[
2])||(X[1]>=X[3])))P.DX(Bd,X,aOffset,A1,aBlend);}}P=P.Aj;}this.Ub(Bd,aClip,aOffset
,A1,aBlend);},Aag:function(){var A;var QL=((this.I&0x1000)===0x1000);var HH=[0,0
,(A=this.R)[2]-A[0],A[3]-A[1]];var GU=false;var KA=Bc;var QJ=Bc;var P=this.Bk;var
DQ=null;while(!!P){if(((P.I&0x800)===0x800)){GU=true;P.I=P.I&~0x800;}if(GU&&((P.
I&0x200)===0x200))GU=false;P=P.Au;}GU=false;P=this.AV;if(QL){this.I=this.I&~0x1000;
QL=!((HH[0]>=HH[2])||(HH[1]>=HH[3]));}this.I=this.I|0x2000;while(!!P){if(((P.I&0x400
)===0x400)){if(!!P.A4&&(P.A4.Ip!==DQ))P.A4=null;if((!P.A4&&GU)&&(P.Ds!==0x14))P.
KC(QJ,DQ);}if(!!P.A4){if(QL&&!((P.I&0x400)===0x400))P.KR(HH,0);if(GU&&((P.I&0x400
)===0x400))P.KR(QJ,0);}if(((P.I&0x200)===0x200)){GU=((P.I&0x1000)===0x1000);DQ=(
C.Lv.isPrototypeOf(P)?P:null);if(GU){P.I=P.I&~0x1000;KA=DQ.R;QJ=KA;GU=!((KA[0]>=
KA[2])||(KA[1]>=KA[3]));}if(GU)this.AA(DQ.R);}P=P.Aj;}this.I=this.I&~0x2000;this.
R6([HH[2]-HH[0],HH[3]-HH[1]]);},CP:function(M){var A;var Aaw=((this.I&0x1000)===
0x1000);if(((this.I&0x4000)===0x4000)){this.I=this.I&~0x4000;this.Aag();}if(((this.
I&0x8000)===0x8000)||Aaw){this.I=this.I&~0x8000;this.Hx(this.I);}},Df:function(E
){var A;if(!!E&&(E.L!==this))throw new Error(DJ);if(!!E&&!((E.I&0x14)===0x14))E=
null;if(!!E&&((E.I&0x10000)===0x10000))E=null;if(E===this.Dp)return;if(!!this.Dp
)this.Dp.Bm(0x0,0x60);this.Dp=E;if(!!E){if(((this.I&0x40)===0x40))E.Bm(0x60,0x0);
else E.Bm(0x20,0x0);}},Li:function(E){var A;if(!!this.BK===E)return;if(E){this.BK=
B._NewObject(B.Graphics.Canvas,0);this.BK.Ln([(A=this.R)[2]-A[0],A[3]-A[1]]);this.
BK.MQ=[this,this.Aau];}else{this.BK.MQ=null;this.BK.Ln(A9);this.BK=null;}if(!!this.
L&&((this.I&0x1)===0x1))this.L.AA(this.R);B.vv(this,0);},At:function(E){if(E)this.
Bm(0x10,0x0);else this.Bm(0x0,0x10);},Lr:function(E){var A;if(E>255)E=255;if(E<0
)E=0;if(E===this.Hc)return;this.Hc=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(
this.R);},PA:function(){var A;return((this.I&0x1)===0x1);},U:function(E){if(E)this.
Bm(0x1,0x0);else this.Bm(0x0,0x1);},Ub:function(Bd,aClip,aOffset,A1,aBlend){},T$:
function(Bd,aClip,aOffset,A1,aBlend){},GetMinimalSize:function(){return A9;},P1:
function(Cm,D5,Hy,FB,FC,LM,Fa,GN,D4,D2,D3){var A;if(!this.BN){this.VB(Cm,D5,Hy,FB
,FC,null,null,D4,D2,D3);return;}var In=this.BN;var Cs=In.Aj;if(((Cm.I&0x10000)===
0x10000)&&(this.BN.A3!==Cm))throw new Error(DK);var FS=B._NewObject(C.OC,0);var DP=
In.DP;var DV=null;var CA=null;if(!!Cs){DV=Cs.DV;CA=Cs.CA;}if(!!Cs&&!!In.JD)DV=In.
JD;if(!!Cs&&!!Fa)CA=Fa;if(!!LM)DP=LM;if(!D5)D5=B._GetAutoObject(B.abl.LB);if(!Hy
)Hy=D5;if(!FC)FC=FB;if(!FB)FB=FC;FS.DP=Hy;FS.CA=FB;FS.DV=FC;FS.JD=GN;FS.A3=Cm;FS.
Aj=this.BN.Aj;this.BN.Aj=null;this.BN=FS;if(this.Dp===Cm)this.Df(null);In.A3.Bm(
0x0,0x10040);if(((this.I&0x40)===0x40)&&((Cm.I&0x4)===0x4))Cm.Bm(0x10040,0x0);else
Cm.Bm(0x10000,0x0);if(!!CA){this.Do(Cs.A3,CA.Mx(),null,null,D3);this.Do(In.A3,DP.
HU(),null,null,true);this.Do(FS.A3,D5.HV(),D4,D2,true);}else if(!!DV){this.Do(Cs.
A3,DV.My(),null,null,D3);this.Do(In.A3,DP.HU(),null,null,true);this.Do(FS.A3,D5.
HV(),D4,D2,true);}else if(!!DP){this.Do(In.A3,DP.HU(),null,null,D3);this.Do(FS.A3
,D5.HV(),D4,D2,true);}else this.Do(FS.A3,D5.HV(),D4,D2,D3);},Rq:function(Cm,LM,Fa
,GN,D4,D2,D3){var A;if(!this.BN)return;if(!Cm)return;var Ce=this.BN;var Cs=this.
BN.Aj;var KG=null;while((!!Ce&&(Ce.A3!==Cm))&&!!Ce.Aj){KG=Ce;Ce=Cs;Cs=Ce.Aj;}if(
!Ce||(Ce.A3!==Cm))throw new Error(Fy);if(!KG){this.BN=Cs;Ce.Aj=null;}else{KG.Aj=
Cs;Ce.Aj=null;}Ce.A3.Bm(0x0,0x10040);if(((((this.I&0x40)===0x40)&&!!Cs)&&!KG)&&((
Cs.A3.I&0x4)===0x4))Cs.A3.Bm(0x40,0x0);var DP=Ce.DP;var DV=null;var CA=null;if(!
!Cs)DV=Cs.DV;if(!!Cs&&!!Ce.JD)DV=Ce.JD;if(!!Cs&&!!GN)DV=GN;if(!!KG&&!!Cs)CA=Cs.CA;
if((!!KG&&!!Cs)&&!!Fa)CA=Fa;if(!!LM)DP=LM;if(!!CA){this.Do(Cs.A3,CA.Mx(),null,null
,D3);this.Do(Ce.A3,DP.HU(),D4,D2,true);}else if(!!DV){this.Do(Cs.A3,DV.My(),null
,null,D3);this.Do(Ce.A3,DP.HU(),D4,D2,true);}else this.Do(Ce.A3,DP.HU(),D4,D2,D3
);},VB:function(Cm,D5,Hy,FB,FC,Fa,GN,D4,D2,D3){var A;if(!Cm)return;if(!!this.BN&&(
this.BN.A3===Cm)){this.P1(Cm,D5,Hy,FB,FC,null,Fa,GN,D4,D2,D3);return;}if(((Cm.I&
0x10000)===0x10000))throw new Error(DK);var Ce=B._NewObject(C.OC,0);if(!!this.BN&&
!this.BN.CA){if(!GN)GN=Fa;if(!Fa)Fa=GN;}var CA=null;if(!!this.BN)CA=this.BN.CA;if(
!!this.BN&&!!Fa)CA=Fa;if(!D5)D5=B._GetAutoObject(B.abl.LB);if(!Hy)Hy=D5;if(!FC)FC=
FB;if(!FB)FB=FC;Ce.DP=Hy;Ce.CA=FB;Ce.DV=FC;Ce.JD=GN;if(this.Dp===Cm)this.Df(null
);if(!!this.BN)this.BN.A3.Bm(0x0,0x40);if(((this.I&0x40)===0x40)&&((Cm.I&0x4)===
0x4))Cm.Bm(0x10040,0x0);else Cm.Bm(0x10000,0x0);Ce.A3=Cm;Ce.Aj=this.BN;this.BN=Ce;
if(!!CA){this.Do(this.BN.Aj.A3,CA.Mx(),null,null,D3);this.Do(Cm,D5.HV(),D4,D2,true
);}else this.Do(Cm,D5.HV(),D4,D2,D3);},Pm:function(){var A;if(((this.I&0x40)===0x40
))return;if(((this.I&0x80)===0x80))return;if(((this.I&0x10000)===0x10000)){if(!!
this.L)this.L.Pm();return;}if(!!this.L&&(this.L.Dp!==this))this.L.Df(this);if(!!
this.L)this.L.Pm();},Uh:function(Du){var A;return(A=Du)&&((this.I&A)===A);},RK:function(
CW){var tmp=this;while(!!tmp){CW=B.aaj(CW,tmp.R.slice(0,2));tmp=tmp.L;}return CW;
},DispatchEvent:function(AF){var A;var P=this.Dp;var Ar=(C.O.isPrototypeOf(P)?P:
null);var BE=null;var Jr=!!this.EI&&(!!this.EI.DN||!!this.EI.AV);if(!!P&&((((P.I&
0x10000)===0x10000)||((P.I&0x40000)===0x40000))||((P.I&0x20000)===0x20000))){P=null;
Ar=null;}if(!!this.BN&&!Jr)BE=this.BN.A3.DispatchEvent(AF);if(!BE&&!!Ar)BE=Ar.DispatchEvent(
AF);else if(!BE&&!!P)BE=P.BI(AF);if(!BE)BE=this.BI(AF);if(!BE)BE=this.TR(AF);return BE;
},BroadcastEventAtPosition:function(AF,SL,aFilter){var A;var P=this.Bk;var BE=null;
while(!!P&&!BE){if((!aFilter||((A=aFilter)&&((P.I&A)===A)))&&B.vt(P.GetExtent(),
SL)){var Ar=(C.O.isPrototypeOf(P)?P:null);if(!!Ar)BE=Ar.BroadcastEventAtPosition(
AF,B.aaj(SL,Ar.R.slice(0,2)),aFilter);else BE=P.BI(AF);}P=P.Au;}if(!BE)BE=this.BI(
AF);return BE;},BroadcastEvent:function(AF,aFilter){var A;var P=this.Bk;var BE=null;
while(!!P&&!BE){if(!aFilter||((A=aFilter)&&((P.I&A)===A))){var Ar=(C.O.isPrototypeOf(
P)?P:null);if(!!Ar)BE=Ar.BroadcastEvent(AF,aFilter);else BE=P.BI(AF);}P=P.Au;}if(
!BE)BE=this.BI(AF);if(!BE)BE=this.TR(AF);return BE;},R6:function(aSize){},Hx:function(
Du){},C4:function(){this.I=this.I|0x8000;B.ow([this,this.CP],this);},AA:function(
Ay){var A;var Ar=this;while(!!Ar&&!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))){var Kv=Ar.BK;
if(!Ar.L&&(Ar!==this)){Ar.AA(Ay);return;}if(!!Kv){var Zs=Kv.Er;Kv.Er=B.vS(Kv.Er,
Ay);if(!B.z9(Zs,Kv.Er)){B.vv(Ar,0);B.vv(Kv,0);}}if(!((Ar.I&0x1)===0x1))return;Ay=
B.kz(B.aam(Ay,Ar.R.slice(0,2)),Ar.R);Ar=Ar.L;}},Rs:function(Ad,aFilter){var A;if(
!Ad||(Ad.L!==this))return null;var Im=Ad.Aj;var Ir=Ad.Au;var L8=0x10000;if(((aFilter&
0x10000)===0x10000))L8=0x0;while(!!Im||!!Ir){if((!!Im&&(!aFilter||((A=aFilter)&&((
Im.I&A)===A))))&&(!L8||!((A=L8)&&((Im.I&A)===A))))return Im;if((!!Ir&&(!aFilter||((
A=aFilter)&&((Ir.I&A)===A))))&&(!L8||!((A=L8)&&((Ir.I&A)===A))))return Ir;if(!!Im
)Im=Im.Aj;if(!!Ir)Ir=Ir.Au;}return null;},Do:function(GL,Bg,D4,D2,D3){var A;if(!
GL)return;if(!Bg)throw new Error(E8);if((!!Bg.O||!!Bg.L)||!!Bg.Di)throw new Error(
Fz);if(!!GL.L&&(GL.L!==this))throw new Error(If);if(!this.EI)this.EI=B._NewObject(
C.P3,0);Bg.L=this;Bg.O=GL;Bg.N3=D2;Bg.QX=D4;if(!!GL.JE)GL.JE.Di.VD(GL.JE);GL.JE=
Bg;GL.I=GL.I|0x20000;if((D3&&!!this.EI.Bk)&&!this.EI.Bk.OY())(B.abl.MB.isPrototypeOf(
A=this.EI.Bk)?A:null).Rj(Bg);else{var Di=B._NewObject(B.abl.MB,0);Di.Rj(Bg);this.
EI.R2(Di,false);}},Ly:function(Ad){var A;if(!Ad)throw new Error(Kk);if(Ad.L!==this
)throw new Error(Jb);if(!Ad.Aj)return;var Ku=this.Bk;if(((Ku===Ad)||!Ku)||(Ku.Aj===
Ad))return;if(((Ad.I&0x401)===0x401)){if(!!Ad.Au&&!!Ad.A4)Ad.Au.I=Ad.Au.I|0x800;
Ad.I=Ad.I|0x800;this.I=this.I|0x4000;B.ow([this,this.CP],this);}if(((Ad.I&0x200)===
0x200)){if(!!Ad.Au)Ad.Au.I=Ad.Au.I|0x800;this.I=this.I|0x4000;B.ow([this,this.CP
],this);}if(!!Ad.Au)Ad.Au.Aj=Ad.Aj;else this.AV=Ad.Aj;Ad.Aj.Au=Ad.Au;Ad.Au=Ku;Ad.
Aj=Ku.Aj;Ku.Aj=Ad;if(!!Ad.Aj)Ad.Aj.Au=Ad;else this.Bk=Ad;if(((Ad.I&0x1)===0x1))this.
AA(Ad.GetExtent());},Lx:function(){var A;var JL=Bc;while(!!this.AV){var P=this.AV;
if(((P.I&0x1)===0x1))JL=B.vS(JL,P.GetExtent());this.AV=this.AV.Aj;P.A4=null;P.L=
null;P.Aj=null;P.Au=null;}this.AV=null;this.Bk=null;this.Df(null);if(!((JL[0]>=JL[
2])||(JL[1]>=JL[3])))this.AA(JL);},H6:function(Ad){var A;if(!Ad)throw new Error(
Qa);if(Ad.L!==this)throw new Error(Jb);if((((Ad.I&0x401)===0x401)&&!!Ad.Au)&&!!Ad.
A4){Ad.Au.I=Ad.Au.I|0x800;this.I=this.I|0x4000;B.ow([this,this.CP],this);}if(((Ad.
I&0x200)===0x200)){if(!!Ad.Au)Ad.Au.I=Ad.Au.I|0x800;this.I=this.I|0x4000;B.ow([this
,this.CP],this);}Ad.A4=null;if(this.Dp===Ad)this.Df(this.Rs(Ad,0x14));if(!!Ad.Au
)Ad.Au.Aj=Ad.Aj;if(!!Ad.Aj)Ad.Aj.Au=Ad.Au;if(this.AV===Ad)this.AV=Ad.Aj;if(this.
Bk===Ad)this.Bk=Ad.Au;Ad.L=null;Ad.Aj=null;Ad.Au=null;if(((Ad.I&0x1)===0x1))this.
AA(Ad.GetExtent());},K:function(Ad,Kr){var A;if(!Ad)throw new Error(Qb);if(!!Ad.
L)throw new Error(Qc);var HA=null;if((Kr<0)&&!!this.Bk){HA=this.Bk;Kr=Kr+1;}while(((
Kr<0)&&!!HA)&&!!HA.Au){HA=HA.Au;Kr=Kr+1;}if(!HA){Ad.L=this;Ad.Au=this.Bk;if(!!this.
Bk)this.Bk.Aj=Ad;if(!this.AV)this.AV=Ad;this.Bk=Ad;}else{Ad.L=this;Ad.Au=HA.Au;Ad.
Aj=HA;HA.Au=Ad;if(!!Ad.Au)Ad.Au.Aj=Ad;else this.AV=Ad;}if(((Ad.I&0x1)===0x1))this.
AA(Ad.GetExtent());if(((!this.Dp&&((Ad.I&0x4)===0x4))&&((Ad.I&0x10)===0x10))&&!((
Ad.I&0x10000)===0x10000))this.Df(Ad);if(((Ad.I&0x401)===0x401)){Ad.I=Ad.I|0x800;
this.I=this.I|0x4000;B.ow([this,this.CP],this);}if(((Ad.I&0x200)===0x200)){Ad.I=
Ad.I|0x800;this.I=this.I|0x4000;B.ow([this,this.CP],this);}},_Init:function(aArg
){C.B1._Init.call(this,aArg);this.__proto__=C.O;this.I=0x1F;this.Ai(aArg);},_Mark:
function(D){var A;C.B1._Mark.call(this,D);if((A=this.AV)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Bk)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.NZ)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.BK)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.BN)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.EI)&&(A._cycle!=D))
A._Mark(A._cycle=D);if((A=this.JE)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Dp)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::Group"};C.Root={DS:null
,A7:B.aan(10,null,null),Kw:null,HC:null,Mq:0,BM:0,CJ:B.aan(10,0,null),NI:B.aan(10
,B.vx,null),EH:B.aan(10,0,null),GR:B.aan(10,B.vw,null),Ky:B.aan(10,0,null),HB:B.
aan(10,B.vw,null),EG:B.aan(10,B.vw,null),DO:B.aan(10,B.vw,null),FG:B.aan(10,B.vw
,null),AT:0,NW:0,NV:0,Db:B.aan(4,0,null),B8:B.aan(4,B.vx,null),B7:0,L3:0,KD:0,QM:
true,Ai:function(aArg){if(!!!this.G){var obj=this;B.aaG(obj);}},IH:function(){return this;
},DX:function(Bd,aClip,aOffset,A1,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
B.mr;if(!fullScreenUpdate)Bd.MC(aClip,B.aam(B.aam(aClip,aOffset),this.R.slice(0,
2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.O.DX.call(this,Bd,aClip
,aOffset,A1,aBlend);},Bm:function(Hz,Jd){var A;C.O.Bm.call(this,Hz,Jd);if(!this.
L&&(((Hz&0x1)===0x1)||((Jd&0x1)===0x1)))this.AA([0,0,(A=this.R)[2]-A[0],A[3]-A[1
]]);if(!this.L&&(((Hz&0x2)===0x2)||((Jd&0x2)===0x2)))this.AA([0,0,(A=this.R)[2]-
A[0],A[3]-A[1]]);},Df:function(E){if((E!==null)||!E)C.O.Df.call(this,E);},Li:function(
E){var A;var Zr=this.BK;C.O.Li.call(this,E);if(((Zr!==this.BK)&&!this.L)&&((this.
I&0x1)===0x1))this.AA([0,0,(A=this.R)[2]-A[0],A[3]-A[1]]);},Lr:function(E){var A;
var Zv=this.Hc;C.O.Lr.call(this,E);if(((Zv!==this.Hc)&&!this.L)&&((this.I&0x1)===
0x1))this.AA([0,0,(A=this.R)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(AF){if(
!!AF){AF.K9=!!this.BM;if(!!this.BM)AF.AE=this.BM;}var BE;BE=C.O.DispatchEvent.call(
this,AF);this.BM=0;return BE;},BroadcastEvent:function(AF,aFilter){if(!!AF){AF.K9=
!!this.BM;if(!!this.BM)AF.AE=this.BM;}var BE=C.O.BroadcastEvent.call(this,AF,aFilter
);this.BM=0;return BE;},AA:function(Ay){var A;if(this.Mq>0)throw new Error(Qd);if(
!!this.BK&&!this.L){if(((A=this.BK.Er)[0]>=A[2])||(A[1]>=A[3])){B.vv(this,0);B.vv(
this.BK,0);}this.BK.Er=B.vS(this.BK.Er,Ay);}var fullScreenUpdate=false;fullScreenUpdate=
B.mr;if(fullScreenUpdate)Ay=[0,0,(A=this.R)[2]-A[0],A[3]-A[1]];if(!!this.L){C.O.
AA.call(this,Ay);return;}Ay=B.kz(B.aam(Ay,this.R.slice(0,2)),this.R);if((Ay[0]>=
Ay[2])||(Ay[1]>=Ay[3]))return;var i;for(i=0;i<this.B7;i=i+1)if(!(((A=B.kz(this.B8.
Get(i),Ay))[0]>=A[2])||(A[1]>=A[3]))){this.B8.Set(i,B.vS(this.B8.Get(i),Ay));this.
Db.Set(i,B.zS(this.B8.Get(i)));return;}if(this.B7<3){this.B8.Set(this.B7,Ay);this.
Db.Set(this.B7,B.zS(Ay));this.B7=this.B7+1;return;}var j;var DR;var L2=0;var L4=
0;var SN=2147483647;this.B8.Set(this.B7,Ay);this.Db.Set(this.B7,B.zS(Ay));for(j=
0;j<=this.B7;j=j+1)for(DR=j+1;DR<=this.B7;DR=DR+1){var Og=B.zS(B.vS(this.B8.Get(
j),this.B8.Get(DR)));var TQ=((Og<<8)/(this.Db.Get(j)+this.Db.Get(DR)))|0;if(TQ<SN
){SN=TQ;L2=j;L4=DR;}}this.B8.Set(L2,B.vS(this.B8.Get(L2),this.B8.Get(L4)));this.
Db.Set(L2,B.zS(this.B8.Get(L2)));if(L4!==this.B7){this.B8.Set(L4,this.B8.Get(this.
B7));this.Db.Set(L4,this.Db.Get(this.B7));}},Zf:function(){var CM=B._NewObject(C.
JR,0);CM.K9=!!this.BM;if(!!this.BM)CM.AE=this.BM;return CM;},Jf:function(){var CM=
B._NewObject(C.Gf,0);CM.K9=!!this.BM;if(!!this.BM)CM.AE=this.BM;return CM;},Kx:function(
){var CM=B._NewObject(C.KS,0);CM.K9=!!this.BM;if(!!this.BM)CM.AE=this.BM;return CM;
},Zg:function(M){var i;var Jk=false;for(i=0;i<10;i=i+1)if(!!this.A7.Get(i)){var pos=
this.DO.Get(i);var Ar=this.A7.Get(i).L;while(!!Ar&&(Ar!==this)){pos=B.aaj(pos,Ar.
R.slice(0,2));Ar=Ar.L;}if(!Ar&&(this.A7.Get(i)!==this)){var tmp=this.A7.Get(i);this.
AT=i;this.A7.Set(i,null);tmp.BI(this.Jf().InitializeUp(i,this.HB.Get(i),this.GR.
Get(i),this.EH.Get(i),this.CJ.Get(i)+1,this.EG.Get(i),false,this.DO.Get(i),this.
FG.Get(i)));this.BroadcastEvent(this.Kx().InitializeUp(i,this.CJ.Get(i)+1,false,
tmp,this.DO.Get(i)),0x18);}else{this.EH.Set(i,(this.HC.AE-this.Ky.Get(i))|0);if(
this.EH.Get(i)<10)this.EH.Set(i,10);this.AT=i;this.A7.Get(i).BI(this.Jf().InitializeHold(
i,pos,this.GR.Get(i),this.EH.Get(i),this.CJ.Get(i)+1,this.EG.Get(i),this.DO.Get(
i),this.FG.Get(i)));Jk=true;}}if(!Jk)this.HC.At(false);},GetFPS:function(){var ticksCount=
0;var SW=0;ticksCount=((new Date).getTime()-B.vs)|0;if(!!this.NW&&(ticksCount>this.
NW))SW=((this.NV*1000)/((ticksCount-this.NW)|0))|0;this.NV=0;this.NW=ticksCount;
return SW;},Update:function(){var A;if(!this.Kw)this.Kw=B._NewObject(B.Graphics.
Canvas,0);this.Kw.Ln([(A=this.R)[2]-A[0],A[3]-A[1]]);this.Kw.Update();return this.
UpdateGE20(this.Kw);},UpdateGE20:function(Bd){if(!this.BeginUpdate())return Bc;var
G2=this.UpdateCanvas(Bd,A9);this.EndUpdate();return G2;},EndUpdate:function(){if(
this.B7>0){this.NV=this.NV+1;this.B7=0;}},UpdateCanvas:function(Bd,aOffset){var A;
var G2=Bc;var Za=[].concat(aOffset,B.aak(Bd.FrameSize,aOffset));var i;var j=this.
B7;this.Mq=this.Mq+1;Bd.A3=this;for(i=0;(i<j)&&(i<4);i=i+1)if(this.Db.Get(i)>0){
this.DX(Bd,B.aal(this.B8.Get(i),aOffset),[-aOffset[0],-aOffset[1]],255,true);G2=
B.vS(G2,B.kz(Za,this.B8.Get(i)));}else j=j+1;Bd.A3=null;this.Mq=this.Mq-1;if(!((
G2[0]>=G2[2])||(G2[1]>=G2[3])))return B.aal(G2,aOffset);else return G2;},GetUpdateRegion:
function(Nr){var i;var j=this.B7;if(Nr<0)return Bc;for(i=0;(i<j)&&(i<4);i=i+1)if(
!this.Db.Get(i)){j=j+1;Nr=Nr+1;}else if(i===Nr)return this.B8.Get(i);return Bc;}
,BeginUpdate:function(){var A;var i;if(!!this.B7&&!B.z9(this.B8.Get(0),[0,0,(A=this.
R)[2]-A[0],A[3]-A[1]])){var TZ=B.aan(3,B.vx,null);var TY=this.B7;for(i=0;i<TY;i++
)TZ.Set(i,this.B8.Get(i));for(i=0;i<TY;i++){var TS=B.aam(TZ.Get(i),this.R.slice(
0,2));var TT=this.KQ(TS);if(!B.z9(TS,TT))this.AA(B.aal(TT,this.R.slice(0,2)));}}
var j;var DR;for(j=0;j<(this.B7-1);j++)if(this.Db.Get(j)>0)for(DR=j+1;DR<this.B7;
DR++)if(this.Db.Get(DR)>0){var Og=B.zS(B.vS(this.B8.Get(j),this.B8.Get(DR)));if(((
Og-this.Db.Get(j))-this.Db.Get(DR))<0){this.B8.Set(j,B.vS(this.B8.Get(j),this.B8.
Get(DR)));this.Db.Set(j,Og);this.Db.Set(DR,0);}}for(i=this.B7-1;i>=0;i--)if(!this.
Db.Get(i))this.B7=this.B7-1;return this.B7;},DoesNeedUpdate:function(){if(this.B7>
0)return true;return false;},Initialize:function(aSize){this.H([].concat(A9,aSize
));if(this.QM)this.I=this.I|0x60;else this.I=this.I|0x20;this.AA(this.R);return this;
},SetRootFocus:function(Qq){if(Qq===this.QM)return false;this.QM=Qq;if(!Qq)this.
Bm(0x0,0x40);else this.Bm(0x40,0x0);return true;},SetUserInputTimestamp:function(
Y3){this.BM=Y3;},DriveKeyboardHitting:function(Cb,LI,E_){var A;var Q7=!!this.DS;
if(!!this.DS&&((!E_||(this.L3!==Cb))||(this.KD!==LI))){var CM=null;var P=(C.Cu.isPrototypeOf(
A=this.DS)?A:null);var Fd=(C.Cj.isPrototypeOf(A=this.DS)?A:null);if(!!this.L3)CM=
B._NewObject(C.KeyEvent,0).Initialize(this.L3,false);if(this.KD!==0x00)CM=B._NewObject(
C.KeyEvent,0).Initialize2(this.KD,false);if(!!Fd)Fd.BI(CM);else if(!!P)P.BI(CM);
this.L3=0;this.KD=0x00;this.DS=null;}if(!!this.DS){var CM=null;var P=(C.Cu.isPrototypeOf(
A=this.DS)?A:null);var Fd=(C.Cj.isPrototypeOf(A=this.DS)?A:null);if(!!Cb)CM=B._NewObject(
C.KeyEvent,0).Initialize(Cb,true);if(this.KD!==0x00)CM=B._NewObject(C.KeyEvent,0
).Initialize2(LI,true);if(!!Fd)Fd.BI(CM);else if(!!P)P.BI(CM);}if(!this.DS&&E_){
if(!!Cb)this.DS=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize(Cb,true
));if(LI!==0x00)this.DS=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize2(
LI,true));if(!(C.Cj.isPrototypeOf(A=this.DS)?A:null)&&!(C.Cu.isPrototypeOf(A=this.
DS)?A:null))this.DS=null;this.L3=Cb;this.KD=LI;Q7=Q7||!!this.DS;}this.BM=0;return Q7;
},DriveCursorMovement:function(Cc){return this.DriveMultiTouchMovement(this.AT,Cc
);},DriveMultiTouchMovement:function(Ac,Cc){if((Ac<0)||(Ac>9)){this.BM=0;return false;
}var Bl=B.aaj(Cc,this.DO.Get(Ac));this.DO.Set(Ac,Cc);if(!this.A7.Get(Ac)||B.z8(Bl
,A9)){this.BM=0;return false;}var pos=Cc;var Ar=this.A7.Get(Ac).L;while(!!Ar&&(Ar
!==this)){pos=B.aaj(pos,Ar.R.slice(0,2));Ar=Ar.L;}if(!Ar&&(this.A7.Get(Ac)!==this
)){var tmp=this.A7.Get(Ac);this.AT=Ac;this.A7.Set(Ac,null);tmp.BI(this.Jf().InitializeUp(
Ac,this.HB.Get(Ac),this.GR.Get(Ac),this.EH.Get(Ac),this.CJ.Get(Ac)+1,this.EG.Get(
Ac),false,this.DO.Get(Ac),this.FG.Get(Ac)));this.BroadcastEvent(this.Kx().InitializeUp(
Ac,this.CJ.Get(Ac)+1,false,tmp,Cc),0x18);}else{this.HB.Set(Ac,pos);this.AT=Ac;this.
A7.Get(Ac).BI(this.Zf().Initialize(Ac,pos,this.GR.Get(Ac),Bl,this.EH.Get(Ac),this.
CJ.Get(Ac)+1,this.EG.Get(Ac),Cc,this.FG.Get(Ac)));}this.BM=0;return true;},DriveCursorHitting:
function(E_,Ac,Cc){return this.DriveMultiTouchHitting(E_,Ac,Cc);},DriveMultiTouchHitting:
function(E_,Ac,Cc){if((Ac<0)||(Ac>9)){this.BM=0;return false;}var ticksCount=this.
BM;if(!ticksCount)ticksCount=((new Date).getTime()-B.vs)|0;var Aam=this.BM;this.
DriveMultiTouchMovement(Ac,Cc);Cc=this.DO.Get(Ac);this.BM=Aam;if(E_)this.FG.Set(
Ac,Cc);if(E_&&!this.A7.Get(Ac)){var B6;var pos=Cc;if(B.vt(this.NI.Get(Ac),Cc)&&((
ticksCount-this.Ky.Get(Ac))<=250))this.CJ.Set(Ac,this.CJ.Get(Ac)+1);else this.CJ.
Set(Ac,0);this.NI.Set(Ac,B.aam(Kl,Cc));this.Ky.Set(Ac,ticksCount);B6=this.Fl(B.aam(
Kl,Cc),Ac,this.CJ.Get(Ac)+1,null,null,0x0);if(!!B6){this.BroadcastEvent(this.Kx(
).InitializeDown(Ac,this.CJ.Get(Ac)+1,false,B6.Cu,Cc),0x18);this.A7.Set(Ac,B6.Cu
);this.EG.Set(Ac,B6.AN);}else{this.A7.Set(Ac,null);this.EG.Set(Ac,A9);this.BM=0;
return false;}var Ar=B6.Cu.L;while(!!Ar&&(Ar!==this)){pos=B.aaj(pos,Ar.R.slice(0
,2));Ar=Ar.L;}this.GR.Set(Ac,pos);this.HB.Set(Ac,pos);this.EH.Set(Ac,0);this.HC.
At(true);this.AT=Ac;this.A7.Get(Ac).BI(this.Jf().InitializeDown(Ac,pos,this.CJ.Get(
Ac)+1,this.EG.Get(Ac),false,Cc));this.BM=0;return true;}if(!E_&&!!this.A7.Get(Ac
)){var pos=Cc;var Ar=this.A7.Get(Ac).L;while(!!Ar&&(Ar!==this)){pos=B.aaj(pos,Ar.
R.slice(0,2));Ar=Ar.L;}if(!Ar)pos=this.HB.Get(Ac);this.AT=Ac;var tmp=this.A7.Get(
Ac);this.A7.Set(Ac,null);tmp.BI(this.Jf().InitializeUp(Ac,pos,this.GR.Get(Ac),this.
EH.Get(Ac),this.CJ.Get(Ac)+1,this.EG.Get(Ac),false,Cc,this.FG.Get(Ac)));this.BroadcastEvent(
this.Kx().InitializeUp(Ac,this.CJ.Get(Ac)+1,false,tmp,Cc),0x18);this.BM=0;return true;
}this.BM=0;return false;},PX:function(GM,SK,FE,FD){if(GM===this)GM=null;if(!this.
A7.Get(this.AT))return;var B6;B6=this.Fl(B.aam(Kl,this.DO.Get(this.AT)),this.AT,
1,GM,FE,FD);if(!!B6&&(this.A7.Get(this.AT)!==B6.Cu))this.OA(B6.Cu,B6.AN);if(!B6&&(
this.A7.Get(this.AT)!==SK))this.OA(SK,A9);},OA:function(GM,ED){if(!this.A7.Get(this.
AT)||(this.A7.Get(this.AT)===GM))return;var tmp=this.A7.Get(this.AT);this.A7.Set(
this.AT,null);tmp.BI(this.Jf().InitializeUp(this.AT,this.HB.Get(this.AT),this.GR.
Get(this.AT),this.EH.Get(this.AT),this.CJ.Get(this.AT)+1,this.EG.Get(this.AT),true
,this.DO.Get(this.AT),this.FG.Get(this.AT)));this.BroadcastEvent(this.Kx().InitializeUp(
this.AT,this.CJ.Get(this.AT)+1,true,tmp,this.DO.Get(this.AT)),0x18);var pos=this.
DO.Get(this.AT);var Ar=null;if(!!GM)Ar=GM.L;while(!!Ar&&(Ar!==this)){pos=B.aaj(pos
,Ar.R.slice(0,2));Ar=Ar.L;}if(!Ar&&(GM!==this)){this.A7.Set(this.AT,null);return;
}this.BroadcastEvent(this.Kx().InitializeDown(this.AT,this.CJ.Get(this.AT)+1,true
,GM,this.DO.Get(this.AT)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.vs)|0;this.A7.Set(this.AT,GM);this.EG.Set(this.AT,ED);this.GR.Set(this.AT,pos
);this.HB.Set(this.AT,pos);this.CJ.Set(this.AT,0);this.EH.Set(this.AT,0);this.Ky.
Set(this.AT,ticksCount);this.FG.Set(this.AT,this.DO.Get(this.AT));this.A7.Get(this.
AT).BI(this.Jf().InitializeDown(this.AT,pos,this.CJ.Get(this.AT)+1,this.EG.Get(this.
AT),true,this.FG.Get(this.AT)));},_Init:function(aArg){C.O._Init.call(this,aArg);
C.Timer._Init.call(this.HC={G:this},0);(this.A7=[]).__proto__=C.Root.A7;(this.CJ=[
]).__proto__=C.Root.CJ;(this.NI=[]).__proto__=C.Root.NI;(this.EH=[]).__proto__=C.
Root.EH;(this.GR=[]).__proto__=C.Root.GR;(this.Ky=[]).__proto__=C.Root.Ky;(this.
HB=[]).__proto__=C.Root.HB;(this.EG=[]).__proto__=C.Root.EG;(this.DO=[]).__proto__=
C.Root.DO;(this.FG=[]).__proto__=C.Root.FG;(this.Db=[]).__proto__=C.Root.Db;(this.
B8=[]).__proto__=C.Root.B8;this.__proto__=C.Root;this.I=0x7F;this.HC.DY(10);this.
HC.CE=[this,this.Zg];this.Ai(aArg);},_Done:function(){this.__proto__=C.O;this.HC.
_Done();C.O._Done.call(this);},_ReInit:function(){C.O._ReInit.call(this);this.HC.
_ReInit();},_Mark:function(D){var A;C.O._Mark.call(this,D);if((A=this.DS)&&(A._cycle
!=D))A._Mark(A._cycle=D);B.aaf(this.A7,D);if((A=this.Kw)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.HC)._cycle!=D)A._Mark(A._cycle=D);},_className:"Core::Root"
};C.Event={AE:0,K9:false,Ai:function(aArg){this.AE=this.MF();},MF:function(){var
ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;},_Init:
function(aArg){this.__proto__=C.Event;this.Ai(aArg);B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:
"Core::Event"};C.KeyEvent={BA:0,AD:0,Down:false,Initialize2:function(Cb,E_){this.
BA=0;this.AD=Cb;this.Down=E_;if((Cb>=0x30)&&(Cb<=0x39))this.BA=(10+Cb)-48;if((Cb>=
0x41)&&(Cb<=0x5A))this.BA=(105+Cb)-65;if((Cb>=0x61)&&(Cb<=0x7A))this.BA=(105+Cb)-
97;if(Cb===0x20)this.BA=131;if(!this.BA)switch(Cb){case 0x2B:this.BA=132;break;case
0x2D:this.BA=133;break;case 0x2A:this.BA=134;break;case 0x2F:this.BA=135;break;case
0x3D:this.BA=136;break;case 0x2E:this.BA=137;break;case 0x2C:this.BA=138;break;case
0x3A:this.BA=139;break;case 0x3B:this.BA=140;break;default:;}return this;},Initialize:
function(Cb,E_){this.BA=Cb;this.Down=E_;this.AD=0x00;var Qz=Cb-10;var Qy=Cb-105;
if((Qz>=0)&&(Qz<=9))this.AD=(48+Qz)&0xFFFF;if((Qy>=0)&&(Qy<=25))this.AD=(65+Qy)&
0xFFFF;if(Cb===131)this.AD=0x20;if(this.AD===0x00)switch(Cb){case 132:this.AD=0x2B;
break;case 133:this.AD=0x2D;break;case 134:this.AD=0x2A;break;case 135:this.AD=0x2F;
break;case 136:this.AD=0x3D;break;case 137:this.AD=0x2E;break;case 138:this.AD=0x2C;
break;case 139:this.AD=0x3A;break;case 140:this.AD=0x3B;break;default:;}return this;
},Uj:function(SJ){switch(SJ){case 141:return((this.AD>=0x41)&&(this.AD<=0x5A))||((
this.AD>=0x61)&&(this.AD<=0x7A));case 142:return(((this.AD>=0x41)&&(this.AD<=0x5A
))||((this.AD>=0x61)&&(this.AD<=0x7A)))||((this.AD>=0x30)&&(this.AD<=0x39));case
143:return(this.AD>=0x30)&&(this.AD<=0x39);case 144:return(((this.AD>=0x41)&&(this.
AD<=0x46))||((this.AD>=0x61)&&(this.AD<=0x66)))||((this.AD>=0x30)&&(this.AD<=0x39
));case 145:return this.AD!==0x00;case 146:return(this.AD===0x00)&&!!this.BA;case
147:return(((this.BA===6)||(this.BA===7))||(this.BA===4))||(this.BA===5);case 148:
return(this.AD!==0x00)||!!this.BA;default:;}return SJ===this.BA;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.KS={LD:null,Cy:B.vw,CV:0,BR:0,Down:false,Dl:false,InitializeUp:function(Ac,C8
,Jc,Qs,E$){this.Down=false;this.BR=Ac;this.CV=C8;this.Cy=E$;this.LD=Qs;this.Dl=Jc;
return this;},InitializeDown:function(Ac,C8,Jc,Qs,E$){this.Down=true;this.BR=Ac;
this.CV=C8;this.Cy=E$;this.LD=Qs;this.Dl=Jc;return this;},_Init:function(aArg){C.
Event._Init.call(this,aArg);this.__proto__=C.KS;},_Mark:function(D){var A;C.Event.
_Mark.call(this,D);if((A=this.LD)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::CursorGrabEvent"};C.Gf={G9:B.vw,Cy:B.vw,CV:0,B0:0,C3:B.vw,BU:B.vw,BR:0,Down:
false,Dl:false,InitializeHold:function(Ac,Ig,LK,LL,C8,ED,E$,LJ){this.Down=true;this.
BR=Ac;this.BU=B.aak(Ig,ED);this.C3=B.aak(LK,ED);this.B0=LL;this.CV=C8;this.Cy=E$;
this.G9=LJ;return this;},InitializeUp:function(Ac,Ig,LK,LL,C8,ED,Jc,E$,LJ){this.
Down=false;this.BR=Ac;this.BU=B.aak(Ig,ED);this.C3=B.aak(LK,ED);this.B0=LL;this.
CV=C8;this.Dl=Jc;this.Cy=E$;this.G9=LJ;return this;},InitializeDown:function(Ac,
Ig,C8,ED,Jc,E$){this.Down=true;this.BR=Ac;this.BU=B.aak(Ig,ED);this.C3=B.aak(Ig,
ED);this.B0=0;this.CV=C8;this.Dl=Jc;this.Cy=E$;this.G9=E$;return this;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.Gf;},_className:"Core::CursorEvent"
};C.JR={G9:B.vw,Cy:B.vw,CV:0,B0:0,AN:B.vw,C3:B.vw,BU:B.vw,BR:0,Initialize:function(
Ac,Ig,LK,aOffset,LL,Y2,ED,E$,LJ){this.BR=Ac;this.BU=B.aak(Ig,ED);this.C3=B.aak(LK
,ED);this.AN=aOffset;this.B0=LL;this.CV=Y2;this.Cy=E$;this.G9=LJ;return this;},_Init:
function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.JR;},_className:"Core::DragEvent"
};C.Lv={DX:function(Bd,aClip,aOffset,A1,aBlend){},H:function(E){var A;if(B.z9(E,
this.R))return;var Io=[(A=this.R)[2]-A[0],A[3]-A[1]];var N1=[E[2]-E[0],E[3]-E[1]
];var JH=!B.z8(Io,N1);var Bl=B.aaj(E.slice(0,2),this.R.slice(0,2));if(!B.z8(Bl,A9
)&&!JH){var P=this.Aj;while(!!P&&!((P.I&0x200)===0x200)){if(((P.I&0x400)===0x400
)){var tmp=((P.I&0x100)===0x100);P.JY(Bl,tmp);}P=P.Aj;}}if((JH&&(Io[0]>0))&&(Io[
1]>0)){var Ap=this.R;var P=this.Aj;while(!!P&&!((P.I&0x200)===0x200)){if(((P.I&0x400
)===0x400)){if(!!P.A4&&(P.A4.Ip!==this))P.A4=null;if(!P.A4&&(P.Ds!==0x14))P.KC(Ap
,this);}P=P.Aj;}}C.B1.H.call(this,E);if(!!this.L&&JH){this.I=this.I|0x1000;if(!((
this.L.I&0x2000)===0x2000)){this.L.I=this.L.I|0x4000;B.ow([A=this.L,A.CP],this);
}}},_Init:function(aArg){C.B1._Init.call(this,aArg);this.__proto__=C.Lv;this.I=0x203;
},_className:"Core::Outline"};C.B2={Po:null,Lg:null,Lc:null,EY:null,Ck:null,BS:null
,Of:0,Aq:0,BR:0,AE:0,CV:0,B0:0,AN:B.vw,C3:B.vw,BU:B.vw,Lz:8,Hf:0,RN:1,Down:false
,EU:false,Dl:false,QH:false,L5:0,DX:function(Bd,aClip,aOffset,A1,aBlend){},BI:function(
AF){var A;var Ab=(C.Gf.isPrototypeOf(AF)?AF:null);var AJ=(C.JR.isPrototypeOf(AF)?
AF:null);var NY=this.EU;var Fg;var Ee;var Mp;var CO;var LX;if(!Ab&&!AJ)return null;
Fg=(!!Ab&&Ab.Down)&&!Ab.B0;Ee=(!!Ab&&Ab.Down)&&(Ab.B0>0);Mp=(!!Ab&&Ab.Down)&&(Ab.
B0>this.L5);CO=!!Ab&&!Ab.Down;LX=!!AJ;if(Fg)this.L5=((A=(Ab.Dl?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if((((this.Hf&0x20)===0x20)&&(this.Aq>0))&&(this.Aq<33554432)){var BO=(C.
KS.isPrototypeOf(AF)?AF:null);if(((!!BO&&BO.Down)&&(BO.LD!==this))&&B.vt(this.GetExtent(
),this.L.RK(BO.Cy))){this.Of=0x20;this.Aq=this.Aq|67108864;return null;}}if(Fg){
var Jt=0;var FP;this.Aq=this.Aq|(1<<Ab.BR);for(FP=this.Aq&4095;FP>0;FP=FP>>1)if(
!!(FP&1))Jt=Jt+1;if(Jt===1)this.Aq=(this.Aq|16777216)|(4096<<Ab.BR);}if(CO&&(this.
Aq<16777216)){var DC=this.IH();var B6=null;if(!!DC){var Q_=(!!this.Au?this.Au:this.
L);B6=DC.Fl(B.aam(Ng,Ab.Cy),Ab.BR,Ab.CV,null,Q_,0x0);}if(!!B6){var i;for(i=0;i<10;
i++)if(!!(this.Aq&(1<<i)))B6.Cu.BI(B._NewObject(C.Gf,0).InitializeDown(i,Ab.BU,Ab.
CV,A9,true,Ab.Cy));for(i=0;i<10;i++)if(!!(this.Aq&(1<<i)))B6.Cu.BI(B._NewObject(
C.Gf,0).InitializeUp(i,Ab.BU,Ab.BU,0,Ab.CV,A9,false,Ab.Cy,Ab.Cy));}}if(CO)this.Aq=(
this.Aq&~(1<<Ab.BR))|33554432;if(Mp&&(this.Aq<16777216))this.Aq=this.Aq|67108864;
if(CO&&Ab.Dl)this.Aq=this.Aq|67108864;if(CO&&!(this.Aq&4095))this.Of=0x0;if(CO&&
!(this.Aq&16777215))this.Aq=0;if(Ee&&(this.Aq>=67108864)){var DC=this.IH();if(!!
DC)DC.PX(null,null,this,this.Of);}if((Ee&&!!(this.Aq&16777216))&&!!(this.Aq&33554432
)){Ee=false;CO=true;}if(!!Ab&&!(this.Aq&(4096<<Ab.BR)))return this;if(!!AJ&&!(this.
Aq&(4096<<AJ.BR)))return this;if(CO&&!(this.Aq&16777216))return this;if(((Fg||LX
)||Ee)&&((this.Aq<16777216)||(this.Aq>=33554432)))return this;if(CO)this.Aq=this.
Aq&3758100479;if(CO&&!(this.Aq&16777215))this.Aq=0;if(!!Ab){this.Down=Fg||Ee;this.
EU=this.OZ(Ab.BU);this.C3=Ab.C3;this.BU=Ab.BU;this.AN=A9;this.B0=Ab.B0;this.CV=Ab.
CV;this.Dl=Ab.Dl;this.BR=Ab.BR;this.AE=Ab.AE;if(Ab.Down&&!Ab.B0)NY=false;}if(!!AJ
){this.Down=true;this.EU=this.OZ(AJ.BU);this.C3=AJ.C3;this.BU=AJ.BU;this.AN=AJ.AN;
this.B0=AJ.B0;this.CV=AJ.CV;this.BR=AJ.BR;this.Dl=false;this.AE=AJ.AE;}var QF=this.
Down;if(!!AJ)(A=this.Po)?A[1].call(A[0],this):null;if((!!Ab&&this.Down)&&!this.B0
)(A=this.BS)?A[1].call(A[0],this):null;if((!!Ab&&this.Down)&&(this.B0>0))(A=this.
EY)?A[1].call(A[0],this):null;if((this.Down&&this.EU)&&!NY){this.QH=true;(A=this.
Lc)?A[1].call(A[0],this):null;}if(this.QH&&(((QF&&!this.EU)&&NY)||((!QF&&this.EU
)&&NY))){this.QH=false;(A=this.Lg)?A[1].call(A[0],this):null;}if(!!Ab&&!QF)(A=this.
Ck)?A[1].call(A[0],this):null;if(!!this.Hf){var Is=0x0;if(((((this.Hf&0x10)===0x10
)&&!!Ab)&&Ab.Down)&&(Ab.B0>=1000))Is=0x10;if((((this.Hf&0x1)===0x1)&&!!AJ)&&((AJ.
Cy[1]-AJ.G9[1])<=-this.Lz))Is=0x1;if((((this.Hf&0x2)===0x2)&&!!AJ)&&((AJ.Cy[1]-AJ.
G9[1])>=this.Lz))Is=0x2;if((((this.Hf&0x4)===0x4)&&!!AJ)&&((AJ.Cy[0]-AJ.G9[0])<=-
this.Lz))Is=0x4;if((((this.Hf&0x8)===0x8)&&!!AJ)&&((AJ.Cy[0]-AJ.G9[0])>=this.Lz)
)Is=0x8;if(!!Is){var DC=this.IH();if(!!DC){this.Of=Is;DC.PX(null,this,this,Is);}
}}return this;},Fl:function(Ay,Ac,C8,FA,FE,FD){var A;if(!!FA&&(FA!==this))return null;
if((C8<1)||(C8>this.RN))return null;if(this.Aq>=33554432)return null;if((this.Aq>=
16777216)&&!(this.Aq&(4096<<Ac)))return null;if(!!(FD&this.Hf))return null;if(this.
Ug()){var Az=B.kz(Ay,this.GetExtent());if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var
Dv=B.zT(Ay);var Bl=A9;if(Dv[0]<Az[0])Bl=[Az[0]-Dv[0],Bl[1]];if(Dv[0]>=Az[2])Bl=[(
Az[2]-Dv[0])-1,Bl[1]];if(Dv[1]<Az[1])Bl=[Bl[0],Az[1]-Dv[1]];if(Dv[1]>=Az[3])Bl=[
Bl[0],(Az[3]-Dv[1])-1];return B._NewObject(C.KT,0).Initialize(this,Bl);}}else{var
Bu=B.aan(9,B.vw,null);var i;Bu.Set(0,B.zT(Ay));Bu.Set(1,Bu.Get(0));Bu.Set(2,Bu.Get(
0));Bu.Set(3,Bu.Get(0));Bu.Set(4,Bu.Get(0));Bu.Set(1,[Ay[0],Bu.Get(1)[1]]);Bu.Set(
2,[Bu.Get(2)[0],Ay[1]]);Bu.Set(3,[Ay[2],Bu.Get(3)[1]]);Bu.Set(4,[Bu.Get(4)[0],Ay[
3]]);Bu.Set(5,Ay.slice(0,2));Bu.Set(6,[Ay[2],Ay[1]]);Bu.Set(7,[Ay[0],Ay[3]]);Bu.
Set(8,Ay.slice(2,4));for(i=0;i<9;i=i+1)if(this.OZ(Bu.Get(i)))return B._NewObject(
C.KT,0).Initialize(this,B.aaj(Bu.Get(i),Bu.Get(0)));}return null;},RX:function(E
){if(E<1)E=1;this.Lz=E;},M5:function(E){if(E<1)E=1;this.RN=E;},At:function(E){if(
E)this.Bm(0x10,0x0);else this.Bm(0x0,0x10);},_Init:function(aArg){C.Fs._Init.call(
this,aArg);this.__proto__=C.B2;this.I=0x11B;},_Mark:function(D){var A;C.Fs._Mark.
call(this,D);if((A=this.Po)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Lg)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Lc)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.EY)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Ck)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.BS)&&((A=A[0
])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"};C.D1={
timer:null,N9:null,KH:null,Aq:0,Nz:0,FQ:5000,JG:0,NX:B.vw,Jj:0,GP:0,AY:0,Iy:0,KL:
0,Ji:0,GO:0,AX:0,Ix:0,Iw:0,C3:B.vw,Rp:B.vw,B_:B.vw,B$:B.vw,AN:B.vw,Rt:0.5,Nb:true
,Ka:false,EL:false,EM:false,Ny:false,L5:0,DX:function(Bd,aClip,aOffset,A1,aBlend
){},BI:function(AF){var A;var Ab=(C.Gf.isPrototypeOf(AF)?AF:null);var AJ=(C.JR.isPrototypeOf(
AF)?AF:null);var BO=(C.KS.isPrototypeOf(AF)?AF:null);var Fg;var Ee;var Mp;var CO;
var LX;Fg=(!!Ab&&Ab.Down)&&!Ab.B0;Ee=(!!Ab&&Ab.Down)&&(Ab.B0>0);Mp=(!!Ab&&Ab.Down
)&&(Ab.B0>this.L5);CO=!!Ab&&!Ab.Down;LX=!!AJ;if(Fg)this.L5=((A=(Ab.Dl?0:50))&0x80
)?A|0xFFFFFF00:A&0xFF;if(Fg){var Jt=0;var FP;this.Aq=this.Aq|(1<<Ab.BR);for(FP=this.
Aq&4095;FP>0;FP=FP>>1)if(!!(FP&1))Jt=Jt+1;if(Jt===1)this.Aq=(this.Aq|16777216)|(
4096<<Ab.BR);}if(CO&&(this.Aq<16777216)){var DC=this.IH();var B6=null;if(!!DC){var
Q_=(!!this.Au?this.Au:this.L);B6=DC.Fl(B.aam(Ng,Ab.Cy),Ab.BR,Ab.CV,null,Q_,0x0);
}if(!!B6){var i;for(i=0;i<10;i++)if(!!(this.Aq&(1<<i)))B6.Cu.BI(B._NewObject(C.Gf
,0).InitializeDown(i,Ab.BU,Ab.CV,A9,true,Ab.Cy));for(i=0;i<10;i++)if(!!(this.Aq&(
1<<i)))B6.Cu.BI(B._NewObject(C.Gf,0).InitializeUp(i,Ab.BU,Ab.BU,0,Ab.CV,A9,false
,Ab.Cy,Ab.Cy));}}if(CO)this.Aq=(this.Aq&~(1<<Ab.BR))|33554432;if(Mp&&(this.Aq<16777216
))this.Aq=this.Aq|67108864;if(CO&&Ab.Dl)this.Aq=this.Aq|67108864;if(CO&&!(this.Aq&
16777215))this.Aq=0;if(Ee&&(this.Aq>=67108864)){var DC=this.IH();if(!!DC)DC.PX(null
,null,this,0x0);}if((Ee&&!!(this.Aq&16777216))&&!!(this.Aq&33554432)){Ee=false;CO=
true;}if(!!Ab&&!(this.Aq&(4096<<Ab.BR)))return this;if(!!AJ&&!(this.Aq&(4096<<AJ.
BR)))return this;if(CO&&!(this.Aq&16777216))return this;if(((Fg||LX)||Ee)&&((this.
Aq<16777216)||(this.Aq>=33554432)))return this;if(CO)this.Aq=this.Aq&3758100479;
if(CO&&!(this.Aq&16777215))this.Aq=0;if(!!BO&&(BO.LD===this))return null;if((!!BO&&
BO.Down)&&(this.Ny||!this.Ka))return null;if((!!BO&&BO.Down)&&!B.vt(this.R,this.
L.RK(BO.Cy)))return null;if((!!BO&&!BO.Down)&&(!this.Ny||(this.Nz!==BO.BR)))return null;
if((!Ab&&!AJ)&&!BO)return null;if(!!Ab){this.Ny=Fg||Ee;this.Nz=Ab.BR;this.C3=Ab.
C3;}if(!!AJ)this.Nz=AJ.BR;if(!!BO){this.Ny=BO.Down;this.Nz=BO.BR;}if(!!BO&&BO.Down
){this.Ra();this.AX=(((BO.AE-this.Iw)*0.001)*this.GO)+this.AX;this.AY=(((BO.AE-this.
KL)*0.001)*this.GP)+this.AY;if(this.EL)this.AX=0;if(this.EM)this.AY=0;this.GO=0;
this.GP=0;this.EL=false;this.EM=false;this.NX=this.AN;this.JG=BO.AE;return this;
}if(Fg){this.Ra();this.AX=(((Ab.AE-this.Iw)*0.001)*this.GO)+this.AX;this.AY=(((Ab.
AE-this.KL)*0.001)*this.GP)+this.AY;if(this.EL||!this.Ka)this.AX=0;if(this.EM||!
this.Ka)this.AY=0;this.GO=0;this.GP=0;this.EL=false;this.EM=false;if(!this.Ka){this.
Ka=true;(A=this.N9)?A[1].call(A[0],this):null;}this.NX=this.AN;this.JG=Ab.AE;}if(
!!AJ){var Cd=B.aaj(AJ.BU,AJ.C3);var AI=this.AN;if(this.Nb)AI=[this.NX[0]+Cd[0],AI[
1]];AI=[AI[0],this.NX[1]+Cd[1]];if(AI[0]<this.B$[0])AI=[this.B$[0]+(((AI[0]-this.
B$[0])/2)|0),AI[1]];else if(AI[0]>this.B_[0])AI=[this.B_[0]+(((AI[0]-this.B_[0])
/2)|0),AI[1]];if(AI[1]<this.B$[1])AI=[AI[0],this.B$[1]+(((AI[1]-this.B$[1])/2)|0
)];else if(AI[1]>this.B_[1])AI=[AI[0],this.B_[1]+(((AI[1]-this.B_[1])/2)|0)];if(
!B.z8(AI,this.AN)){this.Rp=B.aaj(AI,this.AN);this.AN=AI;(A=this.KH)?A[1].call(A[
0],this):null;}}if((!!BO&&!BO.Down)&&((BO.AE-this.JG)>=200)){this.AX=0;this.AY=0;
}if(Ee&&((Ab.AE-this.JG)>=200)){this.AX=0;this.AY=0;}if(!!AJ&&(AJ.AE>this.JG)){var
Cd=AJ.AN;var S6=1000/(AJ.AE-this.JG);var HI=0;var HJ;if(this.Nb)HI=Cd[0]*S6;HJ=Cd[
1]*S6;if((HI*this.AX)<0)this.AX=0;if((HJ*this.AY)<0)this.AY=0;this.AX=(this.AX+HI
)*0.5;this.AY=(this.AY+HJ)*0.5;this.JG=AJ.AE;}if(!CO&&!BO)return this;if(!!Ab&&Ab.
Dl){this.AX=0;this.AY=0;}if((this.AN[0]<=this.B$[0])||(this.AN[0]>=this.B_[0]))this.
AX=0;else if(!this.AX){var A_=this.AN[0];var BG=this.B$[0];var BH=this.B_[0];if(
A_<BG)BH=this.B$[0];else if(A_>BH)BG=this.B_[0];else{BG=A_;BH=A_;}if((BG-A_)<=(A_-
BH))A_=BG;else A_=BH;if(A_!==this.AN[0]){var CK=A_-this.AN[0];if(CK>0)this.AX=Math.
sqrt((CK*2)*this.FQ)+20;if(CK<0)this.AX=-Math.sqrt((-CK*2)*this.FQ)-20;this.GO=(
400-(this.AX*this.AX))/(2*CK);this.Ji=A_;}}else{var Aao=this.AX*this.AX;var CK=Aao
/(2*this.FQ);var A_=this.AN[0];if(this.AX>0)A_=A_+(CK|0);if(this.AX<0)A_=A_-(CK|
0);if(A_>this.B_[0])A_=this.B_[0];else if(A_<this.B$[0])A_=this.B$[0];var TW=A_;
var BG=this.B$[0];var BH=this.B_[0];if(A_<BG)BH=this.B$[0];else if(A_>BH)BG=this.
B_[0];else{BG=A_;BH=A_;}if(this.AX>0){if(BH<=this.AN[0])A_=BG;else if((A_-BH)<(BG-
A_))A_=BH;else A_=BG;}else if(BG>=this.AN[0])A_=BH;else if((A_-BH)>(BG-A_))A_=BG;
else A_=BH;if(A_!==this.AN[0]){CK=A_-this.AN[0];if(A_!==TW){var HR=A_-TW;if(HR>0
)this.AX=this.AX+Math.sqrt((HR*2)*this.FQ);if(HR<0)this.AX=this.AX-Math.sqrt((-HR
*2)*this.FQ);}if(this.AX>0)this.AX=this.AX+20;if(this.AX<0)this.AX=this.AX-20;this.
GO=(400-(this.AX*this.AX))/(2*CK);this.Ji=A_;}else this.AX=0;}if((this.AN[1]<=this.
B$[1])||(this.AN[1]>=this.B_[1]))this.AY=0;else if(!this.AY){var A$=this.AN[1];var
BG=this.B$[1];var BH=this.B_[1];if(A$<BG)BH=this.B$[1];else if(A$>BH)BG=this.B_[
1];else{BG=A$;BH=A$;}if((BG-A$)<=(A$-BH))A$=BG;else A$=BH;if(A$!==this.AN[1]){var
CK=A$-this.AN[1];if(CK>0)this.AY=Math.sqrt((CK*2)*this.FQ)+20;if(CK<0)this.AY=-Math.
sqrt((-CK*2)*this.FQ)-20;this.GP=(400-(this.AY*this.AY))/(2*CK);this.Jj=A$;}}else{
var Aap=this.AY*this.AY;var CK=Aap/(2*this.FQ);var A$=this.AN[1];if(this.AY>0)A$=
A$+(CK|0);if(this.AY<0)A$=A$-(CK|0);if(A$>this.B_[1])A$=this.B_[1];else if(A$<this.
B$[1])A$=this.B$[1];var TX=A$;var BG=this.B$[1];var BH=this.B_[1];if(A$<BG)BH=this.
B$[1];else if(A$>BH)BG=this.B_[1];else{BG=A$;BH=A$;}if(this.AY>0){if(BH<=this.AN[
1])A$=BG;else if((A$-BH)<(BG-A$))A$=BH;else A$=BG;}else if(BG>=this.AN[1])A$=BH;
else if((A$-BH)>(BG-A$))A$=BG;else A$=BH;if(A$!==this.AN[1]){CK=A$-this.AN[1];if(
A$!==TX){var HR=A$-TX;if(HR>0)this.AY=this.AY+Math.sqrt((HR*2)*this.FQ);if(HR<0)
this.AY=this.AY-Math.sqrt((-HR*2)*this.FQ);}if(this.AY>0)this.AY=this.AY+20;if(this.
AY<0)this.AY=this.AY-20;this.GP=(400-(this.AY*this.AY))/(2*CK);this.Jj=A$;}else this.
AY=0;}if(!!Ab)this.Iw=Ab.AE;if(!!BO)this.Iw=BO.AE;this.KL=this.Iw;this.Ix=this.AN[
0];this.Iy=this.AN[1];this.Aaq();return this;},Fl:function(Ay,Ac,C8,FA,FE,FD){var
A;if(!!FA&&(FA!==this))return null;if(this.Aq>=33554432)return null;if((this.Aq>=
16777216)&&!(this.Aq&(4096<<Ac)))return null;if(!this.Nb&&!!(FD&0xC))return null;
var Az=B.kz(Ay,this.R);if(!((Az[0]>=Az[2])||(Az[1]>=Az[3]))){var Dv=B.zT(Ay);var
Bl=A9;if(Dv[0]<Az[0])Bl=[Az[0]-Dv[0],Bl[1]];if(Dv[0]>=Az[2])Bl=[(Az[2]-Dv[0])-1,
Bl[1]];if(Dv[1]<Az[1])Bl=[Bl[0],Az[1]-Dv[1]];if(Dv[1]>=Az[3])Bl=[Bl[0],(Az[3]-Dv[
1])-1];return B._NewObject(C.KT,0).Initialize(this,Bl);}return null;},Ra:function(
){if(!!this.timer){B.zl([this,this.Dc],this.timer,0);this.timer=null;}},Aaq:function(
){this.timer=B._GetAutoObject(B.abl.HY);B.y_([this,this.Dc],this.timer,0);},Dc:function(
M){var A;if(!this.timer)return;var KN=(this.timer.AE-this.Iw)*0.001;var KO=(this.
timer.AE-this.KL)*0.001;var Aas=KN*KN;var Aat=KO*KO;var HI=(this.GO*KN)+this.AX;
var HJ=(this.GP*KO)+this.AY;var AI=[((((this.GO*0.5)*Aas)+(this.AX*KN))+this.Ix)|
0,((((this.GP*0.5)*Aat)+(this.AY*KO))+this.Iy)|0];if(this.EL&&(KN>=0.5)){AI=[this.
Ji,AI[1]];this.AX=0;this.GO=0;this.Ix=AI[0];this.EL=false;}else if(this.EL){var Ik=
1-Math.pow(1-(KN/0.5),5);AI=[(this.Ix+((this.Ji-this.Ix)*Ik))|0,AI[1]];}if(this.
EM&&(KO>=0.5)){AI=[AI[0],this.Jj];this.AY=0;this.GP=0;this.Iy=AI[1];this.EM=false;
}else if(this.EM){var Ik=1-Math.pow(1-(KO/0.5),5);AI=[AI[0],(this.Iy+((this.Jj-this.
Iy)*Ik))|0];}if(((this.AX>0)&&(HI<0))||((this.AX<0)&&(HI>0))){HI=0;AI=[this.AN[0
],AI[1]];}if(((this.AY>0)&&(HJ<0))||((this.AY<0)&&(HJ>0))){HJ=0;AI=[AI[0],this.AN[
1]];}if(!this.EL&&(AI[0]<this.B$[0])){this.Ix=AI[0];this.Ji=this.B$[0];this.Iw=this.
timer.AE;this.EL=true;}else if(!this.EL&&(AI[0]>this.B_[0])){this.Ix=AI[0];this.
Ji=this.B_[0];this.Iw=this.timer.AE;this.EL=true;}if(!this.EM&&(AI[1]<this.B$[1]
)){this.Iy=AI[1];this.Jj=this.B$[1];this.KL=this.timer.AE;this.EM=true;}else if(
!this.EM&&(AI[1]>this.B_[1])){this.Iy=AI[1];this.Jj=this.B_[1];this.KL=this.timer.
AE;this.EM=true;}if(((!this.EL&&!!this.AX)&&(HI>-20))&&(HI<20)){AI=[this.Ji,AI[1
]];this.AX=0;this.GO=0;this.Ix=AI[0];}if(((!this.EM&&!!this.AY)&&(HJ>-20))&&(HJ<
20)){AI=[AI[0],this.Jj];this.AY=0;this.GP=0;this.Iy=AI[1];}if(!B.z8(AI,this.AN)){
this.Rp=B.aaj(AI,this.AN);this.AN=AI;(A=this.KH)?A[1].call(A[0],this):null;}if(((
!this.AX&&!this.AY)&&!this.EL)&&!this.EM){this.Ra();this.Ka=false;}},UY:function(
E){if(E<0)E=0;if(E>1)E=1;if(E===this.Rt)return;this.Rt=E;if(E<(1e-007))E=1e-007;
this.FQ=E*10000;},_Init:function(aArg){C.B1._Init.call(this,aArg);this.__proto__=
C.D1;this.I=0x11B;},_Mark:function(D){var A;C.B1._Mark.call(this,D);if((A=this.timer
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.N9)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.KH)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::SlideTouchHandler"};C.Cj={Aj:null,Ck:null,BS:null,EY:null,JF:0,AE:0,R1:0,
CD:148,BA:0,AD:0,Bn:true,Down:false,PV:false,Dn:false,Ai:function(aArg){var A;var
A3=(C.O.isPrototypeOf(A=this.G)?A:null);if(!A3)throw new Error(Qe);this.Aj=A3.NZ;
A3.NZ=this;},BI:function(AF){var A;if(!!AF&&AF.Uj(this.CD)){this.Down=AF.Down;this.
BA=AF.BA;this.AD=AF.AD;this.AE=AF.AE;this.Dn=false;if(AF.Down){this.R1=this.JF;this.
PV=this.JF>0;if(this.PV)(A=this.EY)?A[1].call(A[0],this):null;else(A=this.BS)?A[
1].call(A[0],this):null;if(!this.Dn)this.JF=this.JF+1;return!this.Dn;}if(!AF.Down
){this.PV=this.JF>1;this.R1=this.JF-1;this.JF=0;(A=this.Ck)?A[1].call(A[0],this):
null;return!this.Dn;}}return false;},_Init:function(aArg){this.__proto__=C.Cj;this.
Ai(aArg);B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.Aj)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Ck)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.BS)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.EY)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Core::KeyPressHandler"};C.KT={Cu:null,KU:0,AN:B.vw,Initialize:function(
Ad,aOffset){this.Cu=Ad;this.AN=aOffset;this.KU=(aOffset[0]*aOffset[0])+(aOffset[
1]*aOffset[1]);return this;},_Init:function(aArg){this.__proto__=C.KT;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.Cu)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D)
)A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:"Core::CursorHit"
};C.JU={Ip:null,Cf:B.vx,Ap:B.vx,isEmpty:false,_Init:function(aArg){this.__proto__=
C.JU;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.Ip)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};C.MK={HM:B.vw,HL:B.vw,_Init:function(aArg){C.JU._Init.call(
this,aArg);this.__proto__=C.MK;},_className:"Core::LayoutLineContext"};C.ML={Mk:
B.vw,Mj:B.vw,HM:B.vw,HL:B.vw,_Init:function(aArg){C.JU._Init.call(this,aArg);this.
__proto__=C.ML;},_className:"Core::LayoutQuadContext"};C.OC={A3:null,Aj:null,DP:
null,DV:null,CA:null,JD:null,_Init:function(aArg){this.__proto__=C.OC;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.A3)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Aj)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.DP)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
DV)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.CA)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.JD)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D
))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:"Core::DialogContext"
};C.P3={DN:null,Bk:null,AV:null,S8:false,Zd:function(){if(!this.DN)return;var Di=
this.DN;this.DN.Dh=null;this.DN=null;B.ow([this,this.Q1],this);Di.RP(this);},ZM:
function(M){if(!!this.DN)return;if(!this.AV)return;this.DN=this.AV;this.AV=this.
AV.Aj;if(!!this.AV)this.AV.Au=null;else this.Bk=null;this.DN.Aj=null;this.S8=true;
this.DN.J6(this);this.S8=false;},Z0:function(M){B.ow([this,this.ZM],this);},ZZ:function(
M){B.ow([this,this.Z0],this);},Q1:function(M){B.ow([this,this.ZZ],this);},T9:function(
BV){if(!BV||!BV.Dh)return;if(BV.Dh!==this)throw new Error(Qf);var T2=false;if(this.
DN===BV){this.DN=null;T2=true;B.ow([this,this.Q1],this);}else{if(!!BV.Aj)BV.Aj.Au=
BV.Au;else this.Bk=BV.Au;if(!!BV.Au)BV.Au.Aj=BV.Aj;else this.AV=BV.Aj;BV.Au=null;
BV.Aj=null;}BV.Dh=null;if(T2)BV.RO(this);},R2:function(BV,Qt){if(!BV)return;if(!
!BV.Dh)throw new Error(Nh);BV.Dh=this;if(Qt){BV.Aj=this.AV;if(!!this.AV)this.AV.
Au=BV;else this.Bk=BV;this.AV=BV;}else{BV.Au=this.Bk;if(!!this.Bk)this.Bk.Aj=BV;
else this.AV=BV;this.Bk=BV;}if(!this.DN)B.ow([this,this.Q1],this);},_Init:function(
aArg){this.__proto__=C.P3;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.DN)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Bk)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AV)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);
},G:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.H8={Dh:null,Au:
null,Aj:null,RP:function(Kt){},RO:function(Kt){},J6:function(Kt){this.Rn();},HS:
function(){if(!!this.Dh&&(this.Dh.DN===this))this.Dh.Zd();},Rn:function(){if(!!this.
Dh)this.Dh.T9(this);},OY:function(){return!!this.Dh&&(this.Dh.DN===this);},_Init:
function(aArg){this.__proto__=C.H8;B.hJ++;},_Done:function(){this.__proto__=null;
B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Dh)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Au)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Aj)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=
D);},G:null,_cycle:0,_observers:null,_className:"Core::Task"};C.P2={Y:null,KM:null
,J6:function(Kt){this.KM.Y=this.Y;B.vv(this.KM,0);B.ow([this,this.ZK],this);},ZK:
function(M){this.KM.Y=null;this.KM=null;this.Y=null;this.HS();},_Init:function(aArg
){C.H8._Init.call(this,aArg);this.__proto__=C.P2;},_Mark:function(D){var A;C.H8.
_Mark.call(this,D);if((A=this.Y)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.KM
)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SystemEventTask"};C.Nd={
_Init:function(){C.P3._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.He={resource:null,Eo:function(){this.resource=null;},Ai:function(aArg){this.
resource=aArg;},_Init:function(aArg){this.__proto__=C.He;this.Ai(aArg);B.hJ++;},
_Done:function(){this.Eo();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:
0,_observers:null,_className:"Core::Resource"};C.Timer={CE:null,timer:null,AE:0,
Period:1000,Mv:0,Bn:false,Eo:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer(
);this.timer=null;},N_:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<
0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.zk(this,
this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=
tmp;},DY:function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=E;if(this.
Bn)this.N_(this.Mv,E);},EZ:function(E){if(E<0)E=0;if(E===this.Mv)return;this.Mv=
E;if(this.Bn)this.N_(E,this.Period);},At:function(E){if(E===this.Bn)return;this.
Bn=E;if(E)this.N_(this.Mv,this.Period);else this.N_(0,0);this.AE=this.MF();},MF:
function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;
},Trigger:function(){var A;this.AE=this.MF();if(!this.Period)this.At(false);(A=this.
CE)?A[1].call(A[0],this):null;},LC:function(M){this.At(false);},StartTimer:function(
M){if(this.Bn)this.At(false);this.At(true);},_Init:function(aArg){this.__proto__=
C.Timer;B.hJ++;},_Done:function(){this.Eo();this.__proto__=null;B.hJ--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.CE)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Core::Timer"};C.R5={Y:null,Dh:null,Trigger:function(Y0,Qt){var Di=
B._NewObject(C.P2,0);Di.KM=this;Di.Y=Y0;this.Dh.R2(Di,Qt);},_Init:function(aArg){
this.__proto__=C.R5;this.Dh=B._GetAutoObject(C.Nd);B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
Y)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Dh)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Core::SystemEvent"};C.Nc={Oy:null,Event:null,A8:null,Jx:function(
M){var A;if(!this.Event)return;this.Oy=this.Event.Y;(A=this.A8)?A[1].call(A[0],this
):null;this.Oy=null;},PF:function(E){if(this.Event===E)return;if(!!this.Event)B.
zl([this,this.Jx],this.Event,0);this.Event=E;if(!!this.Event)B.y_([this,this.Jx]
,this.Event,0);},_Init:function(aArg){this.__proto__=C.Nc;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Oy)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Event)&&(A._cycle!=D))A.
_Mark(A._cycle=D);if((A=this.A8)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=
this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.Br={A8:null,CT:null,Jx:function(M){var A;(A=this.A8
)?A[1].call(A[0],this):null;},Bs:function(E){if(B.z_(this.CT,E))return;if(!!this.
CT)B.zn([this,this.Jx],this.CT,0);this.CT=E;if(!!this.CT)B.za([this,this.Jx],this.
CT,0);},_Init:function(aArg){this.__proto__=C.Br;B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
A8)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CT)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null
,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};C.AbP={E7:0x1,AaH:
0x2,AaV:0x4,AbN:0x8,Bn:0x10,Abv:0x20,AaW:0x40,Aa9:0x80,AaU:0x100,Aa4:0x200,AaS:0x400
,Abi:0x800,R6:0x1000,AbO:0x2000,Abg:0x4000,Abh:0x8000,AaP:0x10000,Abf:0x20000,Abs:
0x40000};C.Ds={Abj:0x1,Abk:0x2,AaD:0x4,AaE:0x8,AaF:0x10,AaC:0x20};C.AaY={Aba:0,AbK:
1,AaJ:2,Aa5:3,Abm:4,AbL:5,AbM:6,AaK:7,AaL:8,Aa7:9,Aa6:10,Abo:11,Abn:12};C.KeyCode={
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.Abl={AbW:0x1,AbT:0x2,AbU:0x4,AbV:
0x8,Aa8:0x10,AaX:0x20};
C._Init=function(){C.JW.__proto__=C.Cu;C.Fs.__proto__=C.Cu;C.B1.__proto__=C.Cu;C.
O.__proto__=C.B1;C.Root.__proto__=C.O;C.KeyEvent.__proto__=C.Event;C.KS.__proto__=
C.Event;C.Gf.__proto__=C.Event;C.JR.__proto__=C.Event;C.Lv.__proto__=C.B1;C.B2.__proto__=
C.Fs;C.D1.__proto__=C.B1;C.MK.__proto__=C.JU;C.ML.__proto__=C.JU;C.P2.__proto__=
C.H8;};C._ReInit=function(){var A;if((A=C.Nd._this))A._ReInit();};C.C7=function(
D){var A;if((A=C.Nd._this)&&(A._cycle!=D))A._Done(C.Nd._this=null);};return C;})(
);

/* Embedded Wizard */