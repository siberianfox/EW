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
var A7=[0,0];var AW=[0,0,0,0];var Dh="The view does not belong to this group";var
Di="The dialog component is already presented";var Fn="The dialog component is actually not presented";
var EF="No fader to perform the fade-in/out operation";var Fo="Trying to use the same fader twice";
var HE="Trying to fade-in/out a group which belongs to another owner";var Ke="No view to restack";
var I2="View is not in this group";var NP="No view to remove";var NQ="No view to add";
var NR="View already in a group";var NS="Recursive invalidate during active update cycle.";
var Kf=[-8,-8,9,9];var Ly=[0,0,1,1];var NT="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var NU="Trying to cancel a task not belonging to this queue!";
var NV="Trying to enqueue a task twice!";
C.Ca={Ab:null,Am:null,H:null,AR:null,F:0x103,C1:0x14,Jj:function(S,I_){},GG:function(
E){var A;var BX=E^this.C1;if(!BX)return;this.C1=E;if(!!this.AR&&!((this.F&0x400)===
0x400)){this.H.F=this.H.F|0x5000;B.ow([A=this.H,A.Cr],this);this.H.Ar([0,0,(A=this.
H.O)[2]-A[0],A[3]-A[1]]);}if(!!this.AR&&((this.F&0x400)===0x400)){this.AR.G4.F=this.
AR.G4.F|0x1000;this.H.F=this.H.F|0x4000;B.ow([A=this.H,A.Cr],this);}},Hf:function(
){var Aj=this.H;while(!!Aj){var Dc=(C.Root.isPrototypeOf(Aj)?Aj:null);if(!!Dc)return Dc;
Aj=Aj.H;}return null;},Ds:function(A4,aClip,aOffset,AN,aBlend){},Bs:function(Av){
return null;},Ep:function(Ap,V,CI,EH,EL,EK){return null;},Ju:function(Ap){return Ap;
},Jv:function(S,Cl){return A7;},Ir:function(aOffset,I8){},GetExtent:function(){return AW;
},Bc:function(Gb,HG){var A;if(((this.F&0x200)===0x200))Gb=Gb&~0x400;var Oq=(this.
F&~HG)|Gb;var GW=Oq^this.F;this.F=Oq;if(!!this.H&&!!(GW&0x14)){var P6=((this.F&0x14
)===0x14);if(P6&&!this.H.CZ)this.H.Ea(this);if(!P6&&(this.H.CZ===this))this.H.Ea(
this.H.OS(this,0x14));}if(!!this.H&&!!(GW&0x403))this.H.Ar(this.GetExtent());if(((
!!this.AR&&!!this.H)&&((Oq&0x400)===0x400))&&((GW&0x1)===0x1)){this.F=this.F|0x800;
this.H.F=this.H.F|0x4000;B.ow([A=this.H,A.Cr],this);}if(!!this.H&&((GW&0x400)===
0x400)){this.AR=null;this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.ow([A=this.H
,A.Cr],this);}},_Init:function(aArg){this.__proto__=C.Ca;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Ab)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Am)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AR)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);
},G:null,_cycle:0,_observers:null,_className:"Core::View"};C.Ip={A2:B.vw,A1:B.vw
,Jj:function(S,I_){var Q=B._NewObject(C.Le,0);this.AR=null;Q.BZ=this.getExtent();
Q.Ah=S;Q.G4=I_;Q.Gm=this.A1;Q.Gn=this.A2;this.AR=Q;},Jv:function(S,Cl){var A;var
AK=this.C1;var Q=(C.Le.isPrototypeOf(A=this.AR)?A:null);var x1=Q.BZ[0];var y1=Q.
BZ[1];var x2=Q.BZ[2];var y2=Q.BZ[3];var BN=[S[2]-S[0],S[3]-S[1]];var w=x2-x1;var
h=y2-y1;var tmp;if(!Cl){var CC=[(A=Q.Ah)[2]-A[0],A[3]-A[1]];x1=x1-Q.Ah[0];y1=y1-
Q.Ah[1];if(CC[0]!==BN[0]){var Bh=((AK&0x4)===0x4);var Bi=((AK&0x8)===0x8);var Da=((
AK&0x1)===0x1);if(!Bh&&(Da||!Bi))x1=((x1*BN[0])/CC[0])|0;if(!Bi&&(Da||!Bh)){x2=x2-
Q.Ah[0];x2=((x2*BN[0])/CC[0])|0;x2=x2-BN[0];}else x2=x2-Q.Ah[2];x1=x1+S[0];x2=x2+
S[2];if(!Da){if(Bh&&!Bi)x2=x1+w;else if(!Bh&&Bi)x1=x2-w;else{x1=x1+((((x2-x1)-w)
/2)|0);x2=x1+w;}}}else{x2=x2-Q.Ah[2];x1=x1+S[0];x2=x2+S[2];}if(CC[1]!==BN[1]){var
Bj=((AK&0x10)===0x10);var Bg=((AK&0x20)===0x20);var Db=((AK&0x2)===0x2);if(!Bj&&(
Db||!Bg))y1=((y1*BN[1])/CC[1])|0;if(!Bg&&(Db||!Bj)){y2=y2-Q.Ah[1];y2=((y2*BN[1])
/CC[1])|0;y2=y2-BN[1];}else y2=y2-Q.Ah[3];y1=y1+S[1];y2=y2+S[3];if(!Db){if(Bj&&!
Bg)y2=y1+h;else if(!Bj&&Bg)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+h;}}}else{
y2=y2-Q.Ah[3];y1=y1+S[1];y2=y2+S[3];}}else{switch(Cl){case 3:{x1=S[0];x2=x1+w;}break;
case 4:{x2=S[2];x1=x2-w;}break;case 1:{y1=S[1];y2=y1+h;}break;case 2:{y2=S[3];y1=
y2-h;}break;default:;}if((Cl===3)||(Cl===4)){var Bj=((AK&0x10)===0x10);var Bg=((
AK&0x20)===0x20);var Db=((AK&0x2)===0x2);if(Db){y1=S[1];y2=S[3];}else if(Bj&&!Bg
){y1=S[1];y2=y1+h;}else if(Bg&&!Bj){y2=S[3];y1=y2-h;}else{y1=S[1]+((((S[3]-S[1])-
h)/2)|0);y2=y1+h;}}if((Cl===1)||(Cl===2)){var Bh=((AK&0x4)===0x4);var Bi=((AK&0x8
)===0x8);var Da=((AK&0x1)===0x1);if(Da){x1=S[0];x2=S[2];}else if(Bh&&!Bi){x1=S[0
];x2=x1+w;}else if(Bi&&!Bh){x2=S[2];x1=x2-w;}else{x1=S[0]+((((S[2]-S[0])-w)/2)|0
);x2=x1+w;}}}Q.isEmpty=(x1>=x2)||(y1>=y2);w=x2-x1;h=y2-y1;if(Q.Gn[0]<Q.Gm[0]){tmp=
x1;x1=x2-1;x2=tmp-1;}if(Q.Gn[1]<Q.Gm[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1
)x2=x1;if((y2-y1)===1)y2=y1;if(((this.F&0x100)===0x100)){this.A1=[x1,y1];this.A2=[
x2,y2];}else{this.Cf([x1,y1]);this.B$([x2,y2]);this.AR=Q;}return[w,h];},Ir:function(
aOffset,I8){if(I8){this.A1=B.aak(this.A1,aOffset);this.A2=B.aak(this.A2,aOffset);
}else{this.Cf(B.aak(this.A1,aOffset));this.B$(B.aak(this.A2,aOffset));}},GetExtent:
function(){if(!!this.AR&&this.AR.isEmpty)return AW;return this.getExtent();},getExtent:
function(){var x1=this.A1[0];var y1=this.A1[1];var x2=this.A2[0];var y2=this.A2[
1];var w=x2-x1;var h=y2-y1;var tmp;if(w<0)w=-w;if(h<0)h=-h;if(w>=h){if(x2>x1)x2=
x2-1;if(x2<x1)x2=x2+1;}if(h>=w){if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=
x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},B$:function(
E){var A;if(B.z8(E,this.A2))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.
GetExtent());this.AR=null;this.A2=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(
this.GetExtent());if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===
0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.ow([A=this.H,A.Cr],this);
}},Cf:function(E){var A;if(B.z8(E,this.A1))return;if(!!this.H&&((this.F&0x1)===0x1
))this.H.Ar(this.GetExtent());this.AR=null;this.A1=E;if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ar(this.GetExtent());if((!!this.H&&((this.F&0x400)===0x400))&&!((this.
H.F&0x2000)===0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.ow([A=this.
H,A.Cr],this);}},_Init:function(aArg){C.Ca._Init.call(this,aArg);this.__proto__=
C.Ip;},_className:"Core::LineView"};C.ED={B2:B.vw,Ck:B.vw,A2:B.vw,A1:B.vw,Jj:function(
S,I_){var Q=B._NewObject(C.Lf,0);this.AR=null;Q.BZ=this.GetExtent();Q.Ah=S;Q.G4=
I_;Q.Gm=this.A1;Q.Gn=this.A2;Q.KT=this.Ck;Q.KU=this.B2;this.AR=Q;},Jv:function(S
,Cl){var A;var AK=this.C1;var Q=(C.Lf.isPrototypeOf(A=this.AR)?A:null);var x1=Q.
BZ[0];var y1=Q.BZ[1];var x2=Q.BZ[2];var y2=Q.BZ[3];var BN=[S[2]-S[0],S[3]-S[1]];
var w=x2-x1;var h=y2-y1;if(!Cl){var CC=[(A=Q.Ah)[2]-A[0],A[3]-A[1]];x1=x1-Q.Ah[0
];y1=y1-Q.Ah[1];if(CC[0]!==BN[0]){var Bh=((AK&0x4)===0x4);var Bi=((AK&0x8)===0x8
);var Da=((AK&0x1)===0x1);if(!Bh&&(Da||!Bi))x1=((x1*BN[0])/CC[0])|0;if(!Bi&&(Da||
!Bh)){x2=x2-Q.Ah[0];x2=((x2*BN[0])/CC[0])|0;x2=x2-BN[0];}else x2=x2-Q.Ah[2];x1=x1+
S[0];x2=x2+S[2];if(!Da){if(Bh&&!Bi)x2=x1+w;else if(!Bh&&Bi)x1=x2-w;else{x1=x1+((((
x2-x1)-w)/2)|0);x2=x1+w;}}}else{x2=x2-Q.Ah[2];x1=x1+S[0];x2=x2+S[2];}if(CC[1]!==
BN[1]){var Bj=((AK&0x10)===0x10);var Bg=((AK&0x20)===0x20);var Db=((AK&0x2)===0x2
);if(!Bj&&(Db||!Bg))y1=((y1*BN[1])/CC[1])|0;if(!Bg&&(Db||!Bj)){y2=y2-Q.Ah[1];y2=((
y2*BN[1])/CC[1])|0;y2=y2-BN[1];}else y2=y2-Q.Ah[3];y1=y1+S[1];y2=y2+S[3];if(!Db){
if(Bj&&!Bg)y2=y1+h;else if(!Bj&&Bg)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+
h;}}}else{y2=y2-Q.Ah[3];y1=y1+S[1];y2=y2+S[3];}}else{switch(Cl){case 3:{x1=S[0];
x2=x1+w;}break;case 4:{x2=S[2];x1=x2-w;}break;case 1:{y1=S[1];y2=y1+h;}break;case
2:{y2=S[3];y1=y2-h;}break;default:;}if((Cl===3)||(Cl===4)){var Bj=((AK&0x10)===0x10
);var Bg=((AK&0x20)===0x20);var Db=((AK&0x2)===0x2);if(Db){y1=S[1];y2=S[3];}else
if(Bj&&!Bg){y1=S[1];y2=y1+h;}else if(Bg&&!Bj){y2=S[3];y1=y2-h;}else{y1=S[1]+((((
S[3]-S[1])-h)/2)|0);y2=y1+h;}}if((Cl===1)||(Cl===2)){var Bh=((AK&0x4)===0x4);var
Bi=((AK&0x8)===0x8);var Da=((AK&0x1)===0x1);if(Da){x1=S[0];x2=S[2];}else if(Bh&&
!Bi){x1=S[0];x2=x1+w;}else if(Bi&&!Bh){x2=S[2];x1=x2-w;}else{x1=S[0]+((((S[2]-S[
0])-w)/2)|0);x2=x1+w;}}}Q.isEmpty=(x1>=x2)||(y1>=y2);w=(x2-x1)-1;h=(y2-y1)-1;var
Gf=Q.BZ[0];var Gg=Q.BZ[1];var Fz=(Q.BZ[2]-Gf)-1;var Fy=(Q.BZ[3]-Gg)-1;if(!Fz)Fz=
1;if(!Fy)Fy=1;if(((this.F&0x100)===0x100)){this.A1=[x1+((((Q.Gm[0]-Gf)*w)/Fz)|0)
,y1+((((Q.Gm[1]-Gg)*h)/Fy)|0)];this.A2=[x1+((((Q.Gn[0]-Gf)*w)/Fz)|0),y1+((((Q.Gn[
1]-Gg)*h)/Fy)|0)];this.Ck=[x1+((((Q.KT[0]-Gf)*w)/Fz)|0),y1+((((Q.KT[1]-Gg)*h)/Fy
)|0)];this.B2=[x1+((((Q.KU[0]-Gf)*w)/Fz)|0),y1+((((Q.KU[1]-Gg)*h)/Fy)|0)];}else{
this.Cf([x1+((((Q.Gm[0]-Gf)*w)/Fz)|0),y1+((((Q.Gm[1]-Gg)*h)/Fy)|0)]);this.B$([x1+((((
Q.Gn[0]-Gf)*w)/Fz)|0),y1+((((Q.Gn[1]-Gg)*h)/Fy)|0)]);this.Ez([x1+((((Q.KT[0]-Gf)
*w)/Fz)|0),y1+((((Q.KT[1]-Gg)*h)/Fy)|0)]);this.Fc([x1+((((Q.KU[0]-Gf)*w)/Fz)|0),
y1+((((Q.KU[1]-Gg)*h)/Fy)|0)]);this.AR=Q;}return[w+1,h+1];},Ir:function(aOffset,
I8){if(I8){this.A1=B.aak(this.A1,aOffset);this.A2=B.aak(this.A2,aOffset);this.Ck=
B.aak(this.Ck,aOffset);this.B2=B.aak(this.B2,aOffset);}else{this.Cf(B.aak(this.A1
,aOffset));this.B$(B.aak(this.A2,aOffset));this.Ez(B.aak(this.Ck,aOffset));this.
Fc(B.aak(this.B2,aOffset));}},GetExtent:function(){if(!!this.AR&&this.AR.isEmpty
)return AW;var x1=this.A1[0];var y1=this.A1[1];var x2=this.Ck[0];var y2=this.Ck[
1];if((((this.B2[0]!==x1)||(this.A2[1]!==y1))||(this.A2[0]!==x2))||(this.B2[1]!==
y2)){if(this.A2[0]<x1)x1=this.A2[0];if(this.Ck[0]<x1)x1=this.Ck[0];if(this.B2[0]<
x1)x1=this.B2[0];if(this.A2[1]<y1)y1=this.A2[1];if(this.Ck[1]<y1)y1=this.Ck[1];if(
this.B2[1]<y1)y1=this.B2[1];if(this.A1[0]>x2)x2=this.A1[0];if(this.A2[0]>x2)x2=this.
A2[0];if(this.B2[0]>x2)x2=this.B2[0];if(this.A1[1]>y2)y2=this.A1[1];if(this.A2[1
]>y2)y2=this.A2[1];if(this.B2[1]>y2)y2=this.B2[1];}else{var tmp;if(x2<x1){tmp=x1;
x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},Fc:function(
E){var A;if(B.z8(E,this.B2))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.
GetExtent());this.AR=null;this.B2=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(
this.GetExtent());if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===
0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.ow([A=this.H,A.Cr],this);
}},Ez:function(E){var A;if(B.z8(E,this.Ck))return;if(!!this.H&&((this.F&0x1)===0x1
))this.H.Ar(this.GetExtent());this.AR=null;this.Ck=E;if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ar(this.GetExtent());if((!!this.H&&((this.F&0x400)===0x400))&&!((this.
H.F&0x2000)===0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.ow([A=this.
H,A.Cr],this);}},B$:function(E){var A;if(B.z8(E,this.A2))return;if(!!this.H&&((this.
F&0x1)===0x1))this.H.Ar(this.GetExtent());this.AR=null;this.A2=E;if(!!this.H&&((
this.F&0x1)===0x1))this.H.Ar(this.GetExtent());if((!!this.H&&((this.F&0x400)===0x400
))&&!((this.H.F&0x2000)===0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;
B.ow([A=this.H,A.Cr],this);}},Cf:function(E){var A;if(B.z8(E,this.A1))return;if(
!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());this.AR=null;this.A1=
E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());if((!!this.H&&((
this.F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
H.F=this.H.F|0x4000;B.ow([A=this.H,A.Cr],this);}},MV:function(Cy){var Bf=B.aan(4
,B.vw,null);var i=0;var j=3;var Og=false;var Oh=false;Bf.Set(0,this.A1);Bf.Set(1
,this.A2);Bf.Set(2,this.Ck);Bf.Set(3,this.B2);while(i<4){var QS=Bf.Get(i)[0];var
Mp=Bf.Get(i)[1];var Vq=Bf.Get(j)[0];var OG=Bf.Get(j)[1];if(((Mp>Cy[1])!==(OG>Cy[
1]))||((Mp<Cy[1])!==(OG<Cy[1]))){var x=((((Vq-QS)*(Cy[1]-Mp))/(OG-Mp))|0)+QS;if(
Cy[0]>x)Og=!Og;if(Cy[0]<x)Oh=!Oh;}j=i;i=i+1;}return Og||Oh;},Q_:function(){return((((
this.A1[0]===this.B2[0])&&(this.A2[0]===this.Ck[0]))&&(this.A1[1]===this.A2[1]))&&(
this.Ck[1]===this.B2[1]))||((((this.A1[0]===this.A2[0])&&(this.Ck[0]===this.B2[0
]))&&(this.A1[1]===this.B2[1]))&&(this.A2[1]===this.Ck[1]));},_Init:function(aArg
){C.Ca._Init.call(this,aArg);this.__proto__=C.ED;},_className:"Core::QuadView"};
C.BI={O:B.vx,Jj:function(S,I_){var Q=B._NewObject(C.In,0);Q.BZ=this.O;Q.Ah=S;Q.G4=
I_;this.AR=Q;},Jv:function(S,Cl){var A;var AK=this.C1;var Q=this.AR;var x1=Q.BZ[
0];var y1=Q.BZ[1];var x2=Q.BZ[2];var y2=Q.BZ[3];var BN=[S[2]-S[0],S[3]-S[1]];var
w=x2-x1;var h=y2-y1;if(!Cl){var CC=[(A=Q.Ah)[2]-A[0],A[3]-A[1]];x1=x1-Q.Ah[0];y1=
y1-Q.Ah[1];if(CC[0]!==BN[0]){var Bh=((AK&0x4)===0x4);var Bi=((AK&0x8)===0x8);var
Da=((AK&0x1)===0x1);if(!Bh&&(Da||!Bi))x1=((x1*BN[0])/CC[0])|0;if(!Bi&&(Da||!Bh)){
x2=x2-Q.Ah[0];x2=((x2*BN[0])/CC[0])|0;x2=x2-BN[0];}else x2=x2-Q.Ah[2];x1=x1+S[0];
x2=x2+S[2];if(!Da){if(Bh&&!Bi)x2=x1+w;else if(!Bh&&Bi)x1=x2-w;else{x1=x1+((((x2-
x1)-w)/2)|0);x2=x1+w;}}}else{x2=x2-Q.Ah[2];x1=x1+S[0];x2=x2+S[2];}if(CC[1]!==BN[
1]){var Bj=((AK&0x10)===0x10);var Bg=((AK&0x20)===0x20);var Db=((AK&0x2)===0x2);
if(!Bj&&(Db||!Bg))y1=((y1*BN[1])/CC[1])|0;if(!Bg&&(Db||!Bj)){y2=y2-Q.Ah[1];y2=((
y2*BN[1])/CC[1])|0;y2=y2-BN[1];}else y2=y2-Q.Ah[3];y1=y1+S[1];y2=y2+S[3];if(!Db){
if(Bj&&!Bg)y2=y1+h;else if(!Bj&&Bg)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+
h;}}}else{y2=y2-Q.Ah[3];y1=y1+S[1];y2=y2+S[3];}}else{switch(Cl){case 3:{x1=S[0];
x2=x1+w;}break;case 4:{x2=S[2];x1=x2-w;}break;case 1:{y1=S[1];y2=y1+h;}break;case
2:{y2=S[3];y1=y2-h;}break;default:;}if((Cl===3)||(Cl===4)){var Bj=((AK&0x10)===0x10
);var Bg=((AK&0x20)===0x20);var Db=((AK&0x2)===0x2);if(Db){y1=S[1];y2=S[3];}else
if(Bj&&!Bg){y1=S[1];y2=y1+h;}else if(Bg&&!Bj){y2=S[3];y1=y2-h;}else{y1=S[1]+((((
S[3]-S[1])-h)/2)|0);y2=y1+h;}}if((Cl===1)||(Cl===2)){var Bh=((AK&0x4)===0x4);var
Bi=((AK&0x8)===0x8);var Da=((AK&0x1)===0x1);if(Da){x1=S[0];x2=S[2];}else if(Bh&&
!Bi){x1=S[0];x2=x1+w;}else if(Bi&&!Bh){x2=S[2];x1=x2-w;}else{x1=S[0]+((((S[2]-S[
0])-w)/2)|0);x2=x1+w;}}}Q.isEmpty=(x1>=x2)||(y1>=y2);if(((this.F&0x100)===0x100)
)this.O=[x1,y1,x2,y2];else{this.L([x1,y1,x2,y2]);this.AR=Q;}return[x2-x1,y2-y1];
},Ir:function(aOffset,I8){if(I8)this.O=B.aam(this.O,aOffset);else this.L(B.aam(this.
O,aOffset));},GetExtent:function(){return this.O;},L:function(E){var A;if(B.z9(E
,this.O))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);this.AR=null;
this.O=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);if((!!this.H&&((this.
F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.F=this.F|0x800;this.H.F=
this.H.F|0x4000;B.ow([A=this.H,A.Cr],this);}},_Init:function(aArg){C.Ca._Init.call(
this,aArg);this.__proto__=C.BI;},_className:"Core::RectView"};C.R={AJ:null,Ba:null
,L_:null,Bu:null,Bw:null,D0:null,H5:null,CZ:null,FP:255,AO:function(aArg){this.CF(
);},Ds:function(A4,aClip,aOffset,AN,aBlend){var A;AN=((AN+1)*this.FP)>>8;aBlend=
aBlend&&((this.F&0x2)===0x2);if(!this.Bu||(A4.AQ===this))this.P4(A4,aClip,B.aak(
aOffset,this.O.slice(0,2)),AN,aBlend);else{var BE=255|(255<<8)|(255<<16)|((AN&0xFF
)<<24);this.Bu.Update();A4.OP(aClip,this.Bu,0,B.aam(this.O,aOffset),A7,BE,BE,BE,
BE,aBlend);}},Ep:function(Ap,V,CI,EH,EL,EK){var A;var I=this.Ba;var HN=null;var P=
AW;var Dm=null;var On=!!this.D0&&(!!this.D0.Dj||!!this.D0.AJ);if(((A=B.kz(Ap,this.
O))[0]>=A[2])||(A[1]>=A[3]))return null;Ap=B.aal(Ap,this.O.slice(0,2));if(!!EL){
I=EL;while(!!I&&(I.H!==this))I=I.H;}while(!!I){if(((I.F&0x400)===0x400)&&!Dm){Dm=
I.Am;while(!!Dm&&!((Dm.F&0x200)===0x200))Dm=Dm.Am;if(!!Dm)P=B.kz(Ap,Dm.GetExtent(
));else P=AW;}if(Dm===I){Dm=null;P=AW;}if((((((I.F&0x8)===0x8)&&((I.F&0x10)===0x10
))&&!((I.F&0x40000)===0x40000))&&!((I.F&0x20000)===0x20000))&&(!((I.F&0x10000)===
0x10000)||((this.Bw.AQ===I)&&!On))){var BZ=I.GetExtent();var LW=EH;var HJ=null;if(
LW===I)LW=null;if(((I.F&0x400)===0x400)){if(!(((A=B.kz(BZ,P))[0]>=A[2])||(A[1]>=
A[3])))HJ=I.Ep(P,V,CI,LW,EL,EK);}else if(!(((A=B.kz(BZ,Ap))[0]>=A[2])||(A[1]>=A[
3]))||(EH===I))HJ=I.Ep(Ap,V,CI,LW,EL,EK);I=I.Am;if(!!HJ){if(!HN||((HJ.Jz<HN.Jz)&&(
HJ.Jz>=0)))HN=HJ;if(!HJ.Jz)I=null;}}else I=I.Am;EL=null;}return HN;},Ju:function(
Ap){var A;var As;var I=this.AJ;var Kr=AW;var KR=true;var result=(Ap=As=B.aal(Ap,
this.O.slice(0,2)),As);while(!!I){if(((I.F&0x200)===0x200)){var KQ=(C.J3.isPrototypeOf(
I)?I:null);Kr=B.kz(Ap,KQ.O);KR=((KQ.F&0x1)===0x1);}if(((I.F&0x1)===0x1)){if(((I.
F&0x400)===0x400)){if(KR){var P=B.kz(I.GetExtent(),Kr);if(!((P[0]>=P[2])||(P[1]>=
P[3])))result=B.vS(result,I.Ju(P));}}else{var P=B.kz(I.GetExtent(),Ap);if(!((P[0
]>=P[2])||(P[1]>=P[3])))result=B.vS(result,I.Ju(P));}}I=I.Ab;}return B.kz(B.aam(
result,this.O.slice(0,2)),this.O);},Bc:function(Gb,HG){var A;var UF=this.F;C.BI.
Bc.call(this,Gb,HG);var GW=this.F^UF;if(!!this.CZ&&((GW&0x40)===0x40)){if(((this.
F&0x40)===0x40))this.CZ.Bc(0x40,0x0);else this.CZ.Bc(0x0,0x40);}if(!!this.Bw&&((
GW&0x40)===0x40)){if(((this.F&0x40)===0x40)&&((this.Bw.AQ.F&0x14)===0x14))this.Bw.
AQ.Bc(0x40,0x0);else this.Bw.AQ.Bc(0x0,0x40);}if(!!GW){this.F=this.F|0x8000;B.ow([
this,this.Cr],this);}},L:function(E){var A;if(B.z9(E,this.O))return;var G2=[(A=this.
O)[2]-A[0],A[3]-A[1]];var L$=[E[2]-E[0],E[3]-E[1]];var H8=!B.z8(G2,L$);if(H8&&!!
this.Bu){this.Bu.JZ(L$);B.vv(this,0);B.vv(this.Bu,0);}C.BI.L.call(this,E);if((H8&&(
G2[0]>0))&&(G2[1]>0)){var Ah=[].concat(A7,G2);var I=this.AJ;while(!!I){if((!I.AR&&(
I.C1!==0x14))&&!((I.F&0x400)===0x400))I.Jj(Ah,null);I=I.Ab;}}if(H8){this.F=this.
F|0x5000;B.ow([this,this.Cr],this);}},QJ:function(Av){var Qi=(C.KeyEvent.isPrototypeOf(
Av)?Av:null);var Ej=this.L_;if(!Qi)return null;while(!!Ej&&(!Ej.A$||!Ej.Bs(Qi)))
Ej=Ej.Ab;return Ej;},Vm:function(M){if(!!this.Bu){this.Bu.AQ=this;var P=B.aal(this.
Ju(B.aam(this.Bu.DQ,this.O.slice(0,2))),this.O.slice(0,2));this.Bu.K9(P,P,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.P4(this.Bu,P,A7,255,true);this.Bu.
AQ=null;}},P4:function(A4,aClip,aOffset,AN,aBlend){var A;var I=this.AJ;var Kr=AW;
var KR=true;this.Q3(A4,aClip,aOffset,AN,aBlend);while(!!I){if(((I.F&0x200)===0x200
)){var KQ=(C.J3.isPrototypeOf(I)?I:null);Kr=B.kz(aClip,B.aam(KQ.O,aOffset));KR=((
KQ.F&0x1)===0x1);}if(((I.F&0x1)===0x1)){if(((I.F&0x400)===0x400)){if(KR){var P=B.
kz(B.aam(I.GetExtent(),aOffset),Kr);if(!((P[0]>=P[2])||(P[1]>=P[3])))I.Ds(A4,P,aOffset
,AN,aBlend);}}else{var P=B.kz(B.aam(I.GetExtent(),aOffset),aClip);if(!((P[0]>=P[
2])||(P[1]>=P[3])))I.Ds(A4,P,aOffset,AN,aBlend);}}I=I.Ab;}this.Q5(A4,aClip,aOffset
,AN,aBlend);},U9:function(){var A;var Oe=((this.F&0x1000)===0x1000);var Gj=[0,0,(
A=this.O)[2]-A[0],A[3]-A[1]];var FA=false;var Jh=AW;var Oc=AW;var I=this.Ba;var Dm=
null;while(!!I){if(((I.F&0x800)===0x800)){FA=true;I.F=I.F&~0x800;}if(FA&&((I.F&0x200
)===0x200))FA=false;I=I.Am;}FA=false;I=this.AJ;if(Oe){this.F=this.F&~0x1000;Oe=!((
Gj[0]>=Gj[2])||(Gj[1]>=Gj[3]));}this.F=this.F|0x2000;while(!!I){if(((I.F&0x400)===
0x400)){if(!!I.AR&&(I.AR.G4!==Dm))I.AR=null;if((!I.AR&&FA)&&(I.C1!==0x14))I.Jj(Oc
,Dm);}if(!!I.AR){if(Oe&&!((I.F&0x400)===0x400))I.Jv(Gj,0);if(FA&&((I.F&0x400)===
0x400))I.Jv(Oc,0);}if(((I.F&0x200)===0x200)){FA=((I.F&0x1000)===0x1000);Dm=(C.J3.
isPrototypeOf(I)?I:null);if(FA){I.F=I.F&~0x1000;Jh=Dm.O;Oc=Jh;FA=!((Jh[0]>=Jh[2]
)||(Jh[1]>=Jh[3]));}if(FA)this.Ar(Dm.O);}I=I.Ab;}this.F=this.F&~0x2000;this.PB([
Gj[2]-Gj[0],Gj[3]-Gj[1]]);},Cr:function(M){var A;var Vo=((this.F&0x1000)===0x1000
);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.U9();}if(((this.F&0x8000
)===0x8000)||Vo){this.F=this.F&~0x8000;this.F$(this.F);}},Ea:function(E){var A;if(
!!E&&(E.H!==this))throw new Error(Dh);if(!!E&&!((E.F&0x14)===0x14))E=null;if(!!E&&((
E.F&0x10000)===0x10000))E=null;if(E===this.CZ)return;if(!!this.CZ)this.CZ.Bc(0x0
,0x60);this.CZ=E;if(!!E){if(((this.F&0x40)===0x40))E.Bc(0x60,0x0);else E.Bc(0x20
,0x0);}},JW:function(E){var A;if(!!this.Bu===E)return;if(E){this.Bu=B._NewObject(
B.Graphics.Canvas,0);this.Bu.JZ([(A=this.O)[2]-A[0],A[3]-A[1]]);this.Bu.Lj=[this
,this.Vm];}else{this.Bu.Lj=null;this.Bu.JZ(A7);this.Bu=null;}if(!!this.H&&((this.
F&0x1)===0x1))this.H.Ar(this.O);B.vv(this,0);},AB:function(E){if(E)this.Bc(0x10,
0x0);else this.Bc(0x0,0x10);},J2:function(E){var A;if(E>255)E=255;if(E<0)E=0;if(
E===this.FP)return;this.FP=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);
},AC:function(E){if(E)this.Bc(0x1,0x0);else this.Bc(0x0,0x1);},Q5:function(A4,aClip
,aOffset,AN,aBlend){},Q3:function(A4,aClip,aOffset,AN,aBlend){},GetMinimalSize:function(
){return A7;},PA:function(B3,Dy,Ga,EI,EJ,Km,Eg,Ft,Dx,Dv,Dw){var A;if(!this.Bw){this.
Sq(B3,Dy,Ga,EI,EJ,null,null,Dx,Dv,Dw);return;}var G1=this.Bw;var B9=G1.Ab;if(((B3.
F&0x10000)===0x10000)&&(this.Bw.AQ!==B3))throw new Error(Di);var E0=B._NewObject(
C.MA,0);var Dl=G1.Dl;var Dr=null;var Ch=null;if(!!B9){Dr=B9.Dr;Ch=B9.Ch;}if(!!B9&&
!!G1.H4)Dr=G1.H4;if(!!B9&&!!Eg)Ch=Eg;if(!!Km)Dl=Km;if(!Dy)Dy=B._GetAutoObject(B.
abl.J_);if(!Ga)Ga=Dy;if(!EJ)EJ=EI;if(!EI)EI=EJ;E0.Dl=Ga;E0.Ch=EI;E0.Dr=EJ;E0.H4=
Ft;E0.AQ=B3;E0.Ab=this.Bw.Ab;this.Bw.Ab=null;this.Bw=E0;if(this.CZ===B3)this.Ea(
null);G1.AQ.Bc(0x0,0x10040);if(((this.F&0x40)===0x40)&&((B3.F&0x4)===0x4))B3.Bc(
0x10040,0x0);else B3.Bc(0x10000,0x0);if(!!Ch){this.CX(B9.AQ,Ch.K5(),null,null,Dw
);this.CX(G1.AQ,Dl.Gw(),null,null,true);this.CX(E0.AQ,Dy.Gx(),Dx,Dv,true);}else if(
!!Dr){this.CX(B9.AQ,Dr.K6(),null,null,Dw);this.CX(G1.AQ,Dl.Gw(),null,null,true);
this.CX(E0.AQ,Dy.Gx(),Dx,Dv,true);}else if(!!Dl){this.CX(G1.AQ,Dl.Gw(),null,null
,Dw);this.CX(E0.AQ,Dy.Gx(),Dx,Dv,true);}else this.CX(E0.AQ,Dy.Gx(),Dx,Dv,Dw);},Q2:
function(B3,Km,Eg,Ft,Dx,Dv,Dw){var A;if(!this.Bw)return;if(!B3)return;var BY=this.
Bw;var B9=this.Bw.Ab;var Jm=null;while((!!BY&&(BY.AQ!==B3))&&!!BY.Ab){Jm=BY;BY=B9;
B9=BY.Ab;}if(!BY||(BY.AQ!==B3))throw new Error(Fn);if(!Jm){this.Bw=B9;BY.Ab=null;
}else{Jm.Ab=B9;BY.Ab=null;}BY.AQ.Bc(0x0,0x10040);if(((((this.F&0x40)===0x40)&&!!
B9)&&!Jm)&&((B9.AQ.F&0x4)===0x4))B9.AQ.Bc(0x40,0x0);var Dl=BY.Dl;var Dr=null;var
Ch=null;if(!!B9)Dr=B9.Dr;if(!!B9&&!!BY.H4)Dr=BY.H4;if(!!B9&&!!Ft)Dr=Ft;if(!!Jm&&
!!B9)Ch=B9.Ch;if((!!Jm&&!!B9)&&!!Eg)Ch=Eg;if(!!Km)Dl=Km;if(!!Ch){this.CX(B9.AQ,Ch.
K5(),null,null,Dw);this.CX(BY.AQ,Dl.Gw(),Dx,Dv,true);}else if(!!Dr){this.CX(B9.AQ
,Dr.K6(),null,null,Dw);this.CX(BY.AQ,Dl.Gw(),Dx,Dv,true);}else this.CX(BY.AQ,Dl.
Gw(),Dx,Dv,Dw);},Sq:function(B3,Dy,Ga,EI,EJ,Eg,Ft,Dx,Dv,Dw){var A;if(!B3)return;
if(!!this.Bw&&(this.Bw.AQ===B3)){this.PA(B3,Dy,Ga,EI,EJ,null,Eg,Ft,Dx,Dv,Dw);return;
}if(((B3.F&0x10000)===0x10000))throw new Error(Di);var BY=B._NewObject(C.MA,0);if(
!!this.Bw&&!this.Bw.Ch){if(!Ft)Ft=Eg;if(!Eg)Eg=Ft;}var Ch=null;if(!!this.Bw)Ch=this.
Bw.Ch;if(!!this.Bw&&!!Eg)Ch=Eg;if(!Dy)Dy=B._GetAutoObject(B.abl.J_);if(!Ga)Ga=Dy;
if(!EJ)EJ=EI;if(!EI)EI=EJ;BY.Dl=Ga;BY.Ch=EI;BY.Dr=EJ;BY.H4=Ft;if(this.CZ===B3)this.
Ea(null);if(!!this.Bw)this.Bw.AQ.Bc(0x0,0x40);if(((this.F&0x40)===0x40)&&((B3.F&
0x4)===0x4))B3.Bc(0x10040,0x0);else B3.Bc(0x10000,0x0);BY.AQ=B3;BY.Ab=this.Bw;this.
Bw=BY;if(!!Ch){this.CX(this.Bw.Ab.AQ,Ch.K5(),null,null,Dw);this.CX(B3,Dy.Gx(),Dx
,Dv,true);}else this.CX(B3,Dy.Gx(),Dx,Dv,Dw);},Nh:function(){var A;if(((this.F&0x40
)===0x40))return;if(((this.F&0x80)===0x80))return;if(((this.F&0x10000)===0x10000
)){if(!!this.H)this.H.Nh();return;}if(!!this.H&&(this.H.CZ!==this))this.H.Ea(this
);if(!!this.H)this.H.Nh();},Q$:function(C5){var A;return(A=C5)&&((this.F&A)===A);
},O_:function(Cy){var tmp=this;while(!!tmp){Cy=B.aaj(Cy,tmp.O.slice(0,2));tmp=tmp.
H;}return Cy;},DispatchEvent:function(Av){var A;var I=this.CZ;var Aj=(C.R.isPrototypeOf(
I)?I:null);var Bm=null;var On=!!this.D0&&(!!this.D0.Dj||!!this.D0.AJ);if(!!I&&((((
I.F&0x10000)===0x10000)||((I.F&0x40000)===0x40000))||((I.F&0x20000)===0x20000))){
I=null;Aj=null;}if(!!this.Bw&&!On)Bm=this.Bw.AQ.DispatchEvent(Av);if(!Bm&&!!Aj)Bm=
Aj.DispatchEvent(Av);else if(!Bm&&!!I)Bm=I.Bs(Av);if(!Bm)Bm=this.Bs(Av);if(!Bm)Bm=
this.QJ(Av);return Bm;},BroadcastEventAtPosition:function(Av,PW,aFilter){var A;var
I=this.Ba;var Bm=null;while(!!I&&!Bm){if((!aFilter||((A=aFilter)&&((I.F&A)===A))
)&&B.vt(I.GetExtent(),PW)){var Aj=(C.R.isPrototypeOf(I)?I:null);if(!!Aj)Bm=Aj.BroadcastEventAtPosition(
Av,B.aaj(PW,Aj.O.slice(0,2)),aFilter);else Bm=I.Bs(Av);}I=I.Am;}if(!Bm)Bm=this.Bs(
Av);return Bm;},BroadcastEvent:function(Av,aFilter){var A;var I=this.Ba;var Bm=null;
while(!!I&&!Bm){if(!aFilter||((A=aFilter)&&((I.F&A)===A))){var Aj=(C.R.isPrototypeOf(
I)?I:null);if(!!Aj)Bm=Aj.BroadcastEvent(Av,aFilter);else Bm=I.Bs(Av);}I=I.Am;}if(
!Bm)Bm=this.Bs(Av);if(!Bm)Bm=this.QJ(Av);return Bm;},PB:function(aSize){},F$:function(
C5){},CF:function(){this.F=this.F|0x8000;B.ow([this,this.Cr],this);},Ar:function(
Ap){var A;var Aj=this;while(!!Aj&&!((Ap[0]>=Ap[2])||(Ap[1]>=Ap[3]))){var Jb=Aj.Bu;
if(!Aj.H&&(Aj!==this)){Aj.Ar(Ap);return;}if(!!Jb){var UD=Jb.DQ;Jb.DQ=B.vS(Jb.DQ,
Ap);if(!B.z9(UD,Jb.DQ)){B.vv(Aj,0);B.vv(Jb,0);}}if(!((Aj.F&0x1)===0x1))return;Ap=
B.kz(B.aam(Ap,Aj.O.slice(0,2)),Aj.O);Aj=Aj.H;}},OS:function(W,aFilter){var A;if(
!W||(W.H!==this))return null;var G0=W.Ab;var G6=W.Am;var KH=0x10000;if(((aFilter&
0x10000)===0x10000))KH=0x0;while(!!G0||!!G6){if((!!G0&&(!aFilter||((A=aFilter)&&((
G0.F&A)===A))))&&(!KH||!((A=KH)&&((G0.F&A)===A))))return G0;if((!!G6&&(!aFilter||((
A=aFilter)&&((G6.F&A)===A))))&&(!KH||!((A=KH)&&((G6.F&A)===A))))return G6;if(!!G0
)G0=G0.Ab;if(!!G6)G6=G6.Am;}return null;},CX:function(Fr,A6,Dx,Dv,Dw){var A;if(!
Fr)return;if(!A6)throw new Error(EF);if((!!A6.R||!!A6.H)||!!A6.CU)throw new Error(
Fo);if(!!Fr.H&&(Fr.H!==this))throw new Error(HE);if(!this.D0)this.D0=B._NewObject(
C.NM,0);A6.H=this;A6.R=Fr;A6.Ma=Dv;A6.Or=Dx;if(!!Fr.H5)Fr.H5.CU.St(Fr.H5);Fr.H5=
A6;Fr.F=Fr.F|0x20000;if((Dw&&!!this.D0.Ba)&&!this.D0.Ba.MU())(B.abl.K8.isPrototypeOf(
A=this.D0.Ba)?A:null).OJ(A6);else{var CU=B._NewObject(B.abl.K8,0);CU.OJ(A6);this.
D0.Py(CU,false);}},J7:function(W){var A;if(!W)throw new Error(Ke);if(W.H!==this)
throw new Error(I2);if(!W.Ab)return;var Ja=this.Ba;if(((Ja===W)||!Ja)||(Ja.Ab===
W))return;if(((W.F&0x401)===0x401)){if(!!W.Am&&!!W.AR)W.Am.F=W.Am.F|0x800;W.F=W.
F|0x800;this.F=this.F|0x4000;B.ow([this,this.Cr],this);}if(((W.F&0x200)===0x200)
){if(!!W.Am)W.Am.F=W.Am.F|0x800;this.F=this.F|0x4000;B.ow([this,this.Cr],this);}
if(!!W.Am)W.Am.Ab=W.Ab;else this.AJ=W.Ab;W.Ab.Am=W.Am;W.Am=Ja;W.Ab=Ja.Ab;Ja.Ab=W;
if(!!W.Ab)W.Ab.Am=W;else this.Ba=W;if(((W.F&0x1)===0x1))this.Ar(W.GetExtent());}
,Ss:function(){var A;var Ia=AW;while(!!this.AJ){var I=this.AJ;if(((I.F&0x1)===0x1
))Ia=B.vS(Ia,I.GetExtent());this.AJ=this.AJ.Ab;I.AR=null;I.H=null;I.Ab=null;I.Am=
null;}this.AJ=null;this.Ba=null;this.Ea(null);if(!((Ia[0]>=Ia[2])||(Ia[1]>=Ia[3]
)))this.Ar(Ia);},Hn:function(W){var A;if(!W)throw new Error(NP);if(W.H!==this)throw new
Error(I2);if((((W.F&0x401)===0x401)&&!!W.Am)&&!!W.AR){W.Am.F=W.Am.F|0x800;this.F=
this.F|0x4000;B.ow([this,this.Cr],this);}if(((W.F&0x200)===0x200)){if(!!W.Am)W.Am.
F=W.Am.F|0x800;this.F=this.F|0x4000;B.ow([this,this.Cr],this);}W.AR=null;if(this.
CZ===W)this.Ea(this.OS(W,0x14));if(!!W.Am)W.Am.Ab=W.Ab;if(!!W.Ab)W.Ab.Am=W.Am;if(
this.AJ===W)this.AJ=W.Ab;if(this.Ba===W)this.Ba=W.Am;W.H=null;W.Ab=null;W.Am=null;
if(((W.F&0x1)===0x1))this.Ar(W.GetExtent());},N:function(W,I9){var A;if(!W)throw new
Error(NQ);if(!!W.H)throw new Error(NR);var Gc=null;if((I9<0)&&!!this.Ba){Gc=this.
Ba;I9=I9+1;}while(((I9<0)&&!!Gc)&&!!Gc.Am){Gc=Gc.Am;I9=I9+1;}if(!Gc){W.H=this;W.
Am=this.Ba;if(!!this.Ba)this.Ba.Ab=W;if(!this.AJ)this.AJ=W;this.Ba=W;}else{W.H=this;
W.Am=Gc.Am;W.Ab=Gc;Gc.Am=W;if(!!W.Am)W.Am.Ab=W;else this.AJ=W;}if(((W.F&0x1)===0x1
))this.Ar(W.GetExtent());if(((!this.CZ&&((W.F&0x4)===0x4))&&((W.F&0x10)===0x10))&&
!((W.F&0x10000)===0x10000))this.Ea(W);if(((W.F&0x401)===0x401)){W.F=W.F|0x800;this.
F=this.F|0x4000;B.ow([this,this.Cr],this);}if(((W.F&0x200)===0x200)){W.F=W.F|0x800;
this.F=this.F|0x4000;B.ow([this,this.Cr],this);}},_Init:function(aArg){C.BI._Init.
call(this,aArg);this.__proto__=C.R;this.F=0x1F;this.AO(aArg);},_Mark:function(D){
var A;C.BI._Mark.call(this,D);if((A=this.AJ)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Ba)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.L_)&&(A._cycle!=D))
A._Mark(A._cycle=D);if((A=this.Bu)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Bw)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.D0)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.H5)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.CZ)&&(A._cycle!=
D))A._Mark(A._cycle=D);},_className:"Core::Group"};C.Root={Do:null,AT:B.aan(10,null
,null),Jc:null,Ge:null,K0:0,Bv:0,Cm:B.aan(10,0,null),LU:B.aan(10,B.vx,null),DZ:B.
aan(10,0,null),Fx:B.aan(10,B.vw,null),Je:B.aan(10,0,null),Gd:B.aan(10,B.vw,null)
,DY:B.aan(10,B.vw,null),Dk:B.aan(10,B.vw,null),EO:B.aan(10,B.vw,null),AH:0,L7:0,
L6:0,CM:B.aan(4,0,null),BQ:B.aan(4,B.vx,null),BP:0,KC:0,Jk:0,Of:true,AO:function(
aArg){if(!!!this.G){var obj=this;B.aaG(obj);}},Hf:function(){return this;},Ds:function(
A4,aClip,aOffset,AN,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.mr;if(
!fullScreenUpdate)A4.K9(aClip,B.aam(B.aam(aClip,aOffset),this.O.slice(0,2)),0x00000000
,0x00000000,0x00000000,0x00000000,false);C.R.Ds.call(this,A4,aClip,aOffset,AN,aBlend
);},Bc:function(Gb,HG){var A;C.R.Bc.call(this,Gb,HG);if(!this.H&&(((Gb&0x1)===0x1
)||((HG&0x1)===0x1)))this.Ar([0,0,(A=this.O)[2]-A[0],A[3]-A[1]]);if(!this.H&&(((
Gb&0x2)===0x2)||((HG&0x2)===0x2)))this.Ar([0,0,(A=this.O)[2]-A[0],A[3]-A[1]]);},
Ea:function(E){if((E!==null)||!E)C.R.Ea.call(this,E);},JW:function(E){var A;var UC=
this.Bu;C.R.JW.call(this,E);if(((UC!==this.Bu)&&!this.H)&&((this.F&0x1)===0x1))this.
Ar([0,0,(A=this.O)[2]-A[0],A[3]-A[1]]);},J2:function(E){var A;var UG=this.FP;C.R.
J2.call(this,E);if(((UG!==this.FP)&&!this.H)&&((this.F&0x1)===0x1))this.Ar([0,0,(
A=this.O)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(Av){if(!!Av){Av.JO=!!this.
Bv;if(!!this.Bv)Av.Au=this.Bv;}var Bm;Bm=C.R.DispatchEvent.call(this,Av);this.Bv=
0;return Bm;},BroadcastEvent:function(Av,aFilter){if(!!Av){Av.JO=!!this.Bv;if(!!
this.Bv)Av.Au=this.Bv;}var Bm=C.R.BroadcastEvent.call(this,Av,aFilter);this.Bv=0;
return Bm;},Ar:function(Ap){var A;if(this.K0>0)throw new Error(NS);if(!!this.Bu&&
!this.H){if(((A=this.Bu.DQ)[0]>=A[2])||(A[1]>=A[3])){B.vv(this,0);B.vv(this.Bu,0
);}this.Bu.DQ=B.vS(this.Bu.DQ,Ap);}var fullScreenUpdate=false;fullScreenUpdate=B.
mr;if(fullScreenUpdate)Ap=[0,0,(A=this.O)[2]-A[0],A[3]-A[1]];if(!!this.H){C.R.Ar.
call(this,Ap);return;}Ap=B.kz(B.aam(Ap,this.O.slice(0,2)),this.O);if((Ap[0]>=Ap[
2])||(Ap[1]>=Ap[3]))return;var i;for(i=0;i<this.BP;i=i+1)if(!(((A=B.kz(this.BQ.Get(
i),Ap))[0]>=A[2])||(A[1]>=A[3]))){this.BQ.Set(i,B.vS(this.BQ.Get(i),Ap));this.CM.
Set(i,B.zS(this.BQ.Get(i)));return;}if(this.BP<3){this.BQ.Set(this.BP,Ap);this.CM.
Set(this.BP,B.zS(Ap));this.BP=this.BP+1;return;}var j;var Dn;var KB=0;var KD=0;var
PY=2147483647;this.BQ.Set(this.BP,Ap);this.CM.Set(this.BP,B.zS(Ap));for(j=0;j<=this.
BP;j=j+1)for(Dn=j+1;Dn<=this.BP;Dn=Dn+1){var Mn=B.zS(B.vS(this.BQ.Get(j),this.BQ.
Get(Dn)));var QI=((Mn<<8)/(this.CM.Get(j)+this.CM.Get(Dn)))|0;if(QI<PY){PY=QI;KB=
j;KD=Dn;}}this.BQ.Set(KB,B.vS(this.BQ.Get(KB),this.BQ.Get(KD)));this.CM.Set(KB,B.
zS(this.BQ.Get(KB)));if(KD!==this.BP){this.BQ.Set(KD,this.BQ.Get(this.BP));this.
CM.Set(KD,this.CM.Get(this.BP));}},Us:function(){var Co=B._NewObject(C.Ik,0);Co.
JO=!!this.Bv;if(!!this.Bv)Co.Au=this.Bv;return Co;},HI:function(){var Co=B._NewObject(
C.E8,0);Co.JO=!!this.Bv;if(!!this.Bv)Co.Au=this.Bv;return Co;},Jd:function(){var
Co=B._NewObject(C.Jx,0);Co.JO=!!this.Bv;if(!!this.Bv)Co.Au=this.Bv;return Co;},Ut:
function(M){var i;var HN=false;for(i=0;i<10;i=i+1)if(!!this.AT.Get(i)){var pos=this.
Dk.Get(i);var Aj=this.AT.Get(i).H;while(!!Aj&&(Aj!==this)){pos=B.aaj(pos,Aj.O.slice(
0,2));Aj=Aj.H;}if(!Aj&&(this.AT.Get(i)!==this)){var tmp=this.AT.Get(i);this.AH=i;
this.AT.Set(i,null);tmp.Bs(this.HI().InitializeUp(i,this.Gd.Get(i),this.Fx.Get(i
),this.DZ.Get(i),this.Cm.Get(i)+1,this.DY.Get(i),false,this.Dk.Get(i),this.EO.Get(
i)));this.BroadcastEvent(this.Jd().InitializeUp(i,this.Cm.Get(i)+1,false,tmp,this.
Dk.Get(i)),0x18);}else{this.DZ.Set(i,(this.Ge.Au-this.Je.Get(i))|0);if(this.DZ.Get(
i)<10)this.DZ.Set(i,10);this.AH=i;this.AT.Get(i).Bs(this.HI().InitializeHold(i,pos
,this.Fx.Get(i),this.DZ.Get(i),this.Cm.Get(i)+1,this.DY.Get(i),this.Dk.Get(i),this.
EO.Get(i)));HN=true;}}if(!HN)this.Ge.AB(false);},GetFPS:function(){var ticksCount=
0;var P7=0;ticksCount=((new Date).getTime()-B.vs)|0;if(!!this.L7&&(ticksCount>this.
L7))P7=((this.L6*1000)/((ticksCount-this.L7)|0))|0;this.L6=0;this.L7=ticksCount;
return P7;},Update:function(){var A;if(!this.Jc)this.Jc=B._NewObject(B.Graphics.
Canvas,0);this.Jc.JZ([(A=this.O)[2]-A[0],A[3]-A[1]]);this.Jc.Update();return this.
UpdateGE20(this.Jc);},UpdateGE20:function(A4){if(!this.BeginUpdate())return AW;var
FH=this.UpdateCanvas(A4,A7);this.EndUpdate();return FH;},EndUpdate:function(){if(
this.BP>0){this.L6=this.L6+1;this.BP=0;}},UpdateCanvas:function(A4,aOffset){var A;
var FH=AW;var Um=[].concat(aOffset,B.aak(A4.FrameSize,aOffset));var i;var j=this.
BP;this.K0=this.K0+1;A4.AQ=this;for(i=0;(i<j)&&(i<4);i=i+1)if(this.CM.Get(i)>0){
this.Ds(A4,B.aal(this.BQ.Get(i),aOffset),[-aOffset[0],-aOffset[1]],255,true);FH=
B.vS(FH,B.kz(Um,this.BQ.Get(i)));}else j=j+1;A4.AQ=null;this.K0=this.K0-1;if(!((
FH[0]>=FH[2])||(FH[1]>=FH[3])))return B.aal(FH,aOffset);else return FH;},GetUpdateRegion:
function(LD){var i;var j=this.BP;if(LD<0)return AW;for(i=0;(i<j)&&(i<4);i=i+1)if(
!this.CM.Get(i)){j=j+1;LD=LD+1;}else if(i===LD)return this.BQ.Get(i);return AW;}
,BeginUpdate:function(){var A;var i;if(!!this.BP&&!B.z9(this.BQ.Get(0),[0,0,(A=this.
O)[2]-A[0],A[3]-A[1]])){var QQ=B.aan(3,B.vx,null);var QP=this.BP;for(i=0;i<QP;i++
)QQ.Set(i,this.BQ.Get(i));for(i=0;i<QP;i++){var QK=B.aam(QQ.Get(i),this.O.slice(
0,2));var QL=this.Ju(QK);if(!B.z9(QK,QL))this.Ar(B.aal(QL,this.O.slice(0,2)));}}
var j;var Dn;for(j=0;j<(this.BP-1);j++)if(this.CM.Get(j)>0)for(Dn=j+1;Dn<this.BP;
Dn++)if(this.CM.Get(Dn)>0){var Mn=B.zS(B.vS(this.BQ.Get(j),this.BQ.Get(Dn)));if(((
Mn-this.CM.Get(j))-this.CM.Get(Dn))<0){this.BQ.Set(j,B.vS(this.BQ.Get(j),this.BQ.
Get(Dn)));this.CM.Set(j,Mn);this.CM.Set(Dn,0);}}for(i=this.BP-1;i>=0;i--)if(!this.
CM.Get(i))this.BP=this.BP-1;return this.BP;},DoesNeedUpdate:function(){if(this.BP>
0)return true;return false;},Initialize:function(aSize){this.L([].concat(A7,aSize
));if(this.Of)this.F=this.F|0x60;else this.F=this.F|0x20;this.Ar(this.O);return this;
},SetRootFocus:function(NY){if(NY===this.Of)return false;this.Of=NY;if(!NY)this.
Bc(0x0,0x40);else this.Bc(0x40,0x0);return true;},SetUserInputTimestamp:function(
Ud){this.Bv=Ud;},DriveKeyboardHitting:function(BV,Ki,Ee){var A;var Oz=!!this.Do;
if(!!this.Do&&((!Ee||(this.KC!==BV))||(this.Jk!==Ki))){var Co=null;var I=(C.Ca.isPrototypeOf(
A=this.Do)?A:null);var Ej=(C.D9.isPrototypeOf(A=this.Do)?A:null);if(!!this.KC)Co=
B._NewObject(C.KeyEvent,0).Initialize(this.KC,false);if(this.Jk!==0x00)Co=B._NewObject(
C.KeyEvent,0).Initialize2(this.Jk,false);if(!!Ej)Ej.Bs(Co);else if(!!I)I.Bs(Co);
this.KC=0;this.Jk=0x00;this.Do=null;}if(!!this.Do){var Co=null;var I=(C.Ca.isPrototypeOf(
A=this.Do)?A:null);var Ej=(C.D9.isPrototypeOf(A=this.Do)?A:null);if(!!BV)Co=B._NewObject(
C.KeyEvent,0).Initialize(BV,true);if(this.Jk!==0x00)Co=B._NewObject(C.KeyEvent,0
).Initialize2(Ki,true);if(!!Ej)Ej.Bs(Co);else if(!!I)I.Bs(Co);}if(!this.Do&&Ee){
if(!!BV)this.Do=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize(BV,true
));if(Ki!==0x00)this.Do=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize2(
Ki,true));if(!(C.D9.isPrototypeOf(A=this.Do)?A:null)&&!(C.Ca.isPrototypeOf(A=this.
Do)?A:null))this.Do=null;this.KC=BV;this.Jk=Ki;Oz=Oz||!!this.Do;}this.Bv=0;return Oz;
},DriveCursorMovement:function(BW){return this.DriveMultiTouchMovement(this.AH,BW
);},DriveMultiTouchMovement:function(V,BW){if((V<0)||(V>9)){this.Bv=0;return false;
}var Bb=B.aaj(BW,this.Dk.Get(V));this.Dk.Set(V,BW);if(!this.AT.Get(V)||B.z8(Bb,A7
)){this.Bv=0;return false;}var pos=BW;var Aj=this.AT.Get(V).H;while(!!Aj&&(Aj!==
this)){pos=B.aaj(pos,Aj.O.slice(0,2));Aj=Aj.H;}if(!Aj&&(this.AT.Get(V)!==this)){
var tmp=this.AT.Get(V);this.AH=V;this.AT.Set(V,null);tmp.Bs(this.HI().InitializeUp(
V,this.Gd.Get(V),this.Fx.Get(V),this.DZ.Get(V),this.Cm.Get(V)+1,this.DY.Get(V),false
,this.Dk.Get(V),this.EO.Get(V)));this.BroadcastEvent(this.Jd().InitializeUp(V,this.
Cm.Get(V)+1,false,tmp,BW),0x18);}else{this.Gd.Set(V,pos);this.AH=V;this.AT.Get(V
).Bs(this.Us().Initialize(V,pos,this.Fx.Get(V),Bb,this.DZ.Get(V),this.Cm.Get(V)+
1,this.DY.Get(V),BW,this.EO.Get(V)));}this.Bv=0;return true;},DriveCursorHitting:
function(Ee,V,BW){return this.DriveMultiTouchHitting(Ee,V,BW);},DriveMultiTouchHitting:
function(Ee,V,BW){if((V<0)||(V>9)){this.Bv=0;return false;}var ticksCount=this.Bv;
if(!ticksCount)ticksCount=((new Date).getTime()-B.vs)|0;var Ve=this.Bv;this.DriveMultiTouchMovement(
V,BW);BW=this.Dk.Get(V);this.Bv=Ve;if(Ee)this.EO.Set(V,BW);if(Ee&&!this.AT.Get(V
)){var BO;var pos=BW;if(B.vt(this.LU.Get(V),BW)&&((ticksCount-this.Je.Get(V))<=250
))this.Cm.Set(V,this.Cm.Get(V)+1);else this.Cm.Set(V,0);this.LU.Set(V,B.aam(Kf,BW
));this.Je.Set(V,ticksCount);BO=this.Ep(B.aam(Kf,BW),V,this.Cm.Get(V)+1,null,null
,0x0);if(!!BO){this.BroadcastEvent(this.Jd().InitializeDown(V,this.Cm.Get(V)+1,false
,BO.Ca,BW),0x18);this.AT.Set(V,BO.Ca);this.DY.Set(V,BO.AE);}else{this.AT.Set(V,null
);this.DY.Set(V,A7);this.Bv=0;return false;}var Aj=BO.Ca.H;while(!!Aj&&(Aj!==this
)){pos=B.aaj(pos,Aj.O.slice(0,2));Aj=Aj.H;}this.Fx.Set(V,pos);this.Gd.Set(V,pos);
this.DZ.Set(V,0);this.Ge.AB(true);this.AH=V;this.AT.Get(V).Bs(this.HI().InitializeDown(
V,pos,this.Cm.Get(V)+1,this.DY.Get(V),false,BW));this.Bv=0;return true;}if(!Ee&&
!!this.AT.Get(V)){var pos=BW;var Aj=this.AT.Get(V).H;while(!!Aj&&(Aj!==this)){pos=
B.aaj(pos,Aj.O.slice(0,2));Aj=Aj.H;}if(!Aj)pos=this.Gd.Get(V);this.AH=V;var tmp=
this.AT.Get(V);this.AT.Set(V,null);tmp.Bs(this.HI().InitializeUp(V,pos,this.Fx.Get(
V),this.DZ.Get(V),this.Cm.Get(V)+1,this.DY.Get(V),false,BW,this.EO.Get(V)));this.
BroadcastEvent(this.Jd().InitializeUp(V,this.Cm.Get(V)+1,false,tmp,BW),0x18);this.
Bv=0;return true;}this.Bv=0;return false;},NH:function(Fs,PV,EL,EK){if(Fs===this
)Fs=null;if(!this.AT.Get(this.AH))return;var BO;BO=this.Ep(B.aam(Kf,this.Dk.Get(
this.AH)),this.AH,1,Fs,EL,EK);if(!!BO&&(this.AT.Get(this.AH)!==BO.Ca))this.Mz(BO.
Ca,BO.AE);if(!BO&&(this.AT.Get(this.AH)!==PV))this.Mz(PV,A7);},Mz:function(Fs,DV
){if(!this.AT.Get(this.AH)||(this.AT.Get(this.AH)===Fs))return;var tmp=this.AT.Get(
this.AH);this.AT.Set(this.AH,null);tmp.Bs(this.HI().InitializeUp(this.AH,this.Gd.
Get(this.AH),this.Fx.Get(this.AH),this.DZ.Get(this.AH),this.Cm.Get(this.AH)+1,this.
DY.Get(this.AH),true,this.Dk.Get(this.AH),this.EO.Get(this.AH)));this.BroadcastEvent(
this.Jd().InitializeUp(this.AH,this.Cm.Get(this.AH)+1,true,tmp,this.Dk.Get(this.
AH)),0x18);var pos=this.Dk.Get(this.AH);var Aj=null;if(!!Fs)Aj=Fs.H;while(!!Aj&&(
Aj!==this)){pos=B.aaj(pos,Aj.O.slice(0,2));Aj=Aj.H;}if(!Aj&&(Fs!==this)){this.AT.
Set(this.AH,null);return;}this.BroadcastEvent(this.Jd().InitializeDown(this.AH,this.
Cm.Get(this.AH)+1,true,Fs,this.Dk.Get(this.AH)),0x18);var ticksCount=0;ticksCount=((
new Date).getTime()-B.vs)|0;this.AT.Set(this.AH,Fs);this.DY.Set(this.AH,DV);this.
Fx.Set(this.AH,pos);this.Gd.Set(this.AH,pos);this.Cm.Set(this.AH,0);this.DZ.Set(
this.AH,0);this.Je.Set(this.AH,ticksCount);this.EO.Set(this.AH,this.Dk.Get(this.
AH));this.AT.Get(this.AH).Bs(this.HI().InitializeDown(this.AH,pos,this.Cm.Get(this.
AH)+1,this.DY.Get(this.AH),true,this.EO.Get(this.AH)));},_Init:function(aArg){C.
R._Init.call(this,aArg);C.Timer._Init.call(this.Ge={G:this},0);(this.AT=[]).__proto__=
C.Root.AT;(this.Cm=[]).__proto__=C.Root.Cm;(this.LU=[]).__proto__=C.Root.LU;(this.
DZ=[]).__proto__=C.Root.DZ;(this.Fx=[]).__proto__=C.Root.Fx;(this.Je=[]).__proto__=
C.Root.Je;(this.Gd=[]).__proto__=C.Root.Gd;(this.DY=[]).__proto__=C.Root.DY;(this.
Dk=[]).__proto__=C.Root.Dk;(this.EO=[]).__proto__=C.Root.EO;(this.CM=[]).__proto__=
C.Root.CM;(this.BQ=[]).__proto__=C.Root.BQ;this.__proto__=C.Root;this.F=0x7F;this.
Ge.Fb(10);this.Ge.EC=[this,this.Ut];this.AO(aArg);},_Done:function(){this.__proto__=
C.R;this.Ge._Done();C.R._Done.call(this);},_ReInit:function(){C.R._ReInit.call(this
);this.Ge._ReInit();},_Mark:function(D){var A;C.R._Mark.call(this,D);if((A=this.
Do)&&(A._cycle!=D))A._Mark(A._cycle=D);B.aaf(this.AT,D);if((A=this.Jc)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Ge)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Core::Root"};C.Event={Au:0,JO:false,AO:function(aArg){this.Au=this.La();},La:function(
){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;},
_Init:function(aArg){this.__proto__=C.Event;this.AO(aArg);B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:
"Core::Event"};C.KeyEvent={Br:0,AU:0,Down:false,Initialize2:function(BV,Ee){this.
Br=0;this.AU=BV;this.Down=Ee;if((BV>=0x30)&&(BV<=0x39))this.Br=(10+BV)-48;if((BV>=
0x41)&&(BV<=0x5A))this.Br=(105+BV)-65;if((BV>=0x61)&&(BV<=0x7A))this.Br=(105+BV)-
97;if(BV===0x20)this.Br=131;if(!this.Br)switch(BV){case 0x2B:this.Br=132;break;case
0x2D:this.Br=133;break;case 0x2A:this.Br=134;break;case 0x2F:this.Br=135;break;case
0x3D:this.Br=136;break;case 0x2E:this.Br=137;break;case 0x2C:this.Br=138;break;case
0x3A:this.Br=139;break;case 0x3B:this.Br=140;break;default:;}return this;},Initialize:
function(BV,Ee){this.Br=BV;this.Down=Ee;this.AU=0x00;var N7=BV-10;var N6=BV-105;
if((N7>=0)&&(N7<=9))this.AU=(48+N7)&0xFFFF;if((N6>=0)&&(N6<=25))this.AU=(65+N6)&
0xFFFF;if(BV===131)this.AU=0x20;if(this.AU===0x00)switch(BV){case 132:this.AU=0x2B;
break;case 133:this.AU=0x2D;break;case 134:this.AU=0x2A;break;case 135:this.AU=0x2F;
break;case 136:this.AU=0x3D;break;case 137:this.AU=0x2E;break;case 138:this.AU=0x2C;
break;case 139:this.AU=0x3A;break;case 140:this.AU=0x3B;break;default:;}return this;
},Rb:function(PU){switch(PU){case 141:return((this.AU>=0x41)&&(this.AU<=0x5A))||((
this.AU>=0x61)&&(this.AU<=0x7A));case 142:return(((this.AU>=0x41)&&(this.AU<=0x5A
))||((this.AU>=0x61)&&(this.AU<=0x7A)))||((this.AU>=0x30)&&(this.AU<=0x39));case
143:return(this.AU>=0x30)&&(this.AU<=0x39);case 144:return(((this.AU>=0x41)&&(this.
AU<=0x46))||((this.AU>=0x61)&&(this.AU<=0x66)))||((this.AU>=0x30)&&(this.AU<=0x39
));case 145:return this.AU!==0x00;case 146:return(this.AU===0x00)&&!!this.Br;case
147:return(((this.Br===6)||(this.Br===7))||(this.Br===4))||(this.Br===5);case 148:
return(this.AU!==0x00)||!!this.Br;default:;}return PU===this.Br;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.Jx={J$:null,Cd:B.vw,CG:0,BA:0,Down:false,CV:false,InitializeUp:function(V,CI
,HF,N0,Ef){this.Down=false;this.BA=V;this.CG=CI;this.Cd=Ef;this.J$=N0;this.CV=HF;
return this;},InitializeDown:function(V,CI,HF,N0,Ef){this.Down=true;this.BA=V;this.
CG=CI;this.Cd=Ef;this.J$=N0;this.CV=HF;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Jx;},_Mark:function(D){var A;C.Event._Mark.
call(this,D);if((A=this.J$)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};C.E8={FN:B.vw,Cd:B.vw,CG:0,BL:0,CE:B.vw,BC:B.vw,BA:0,Down:false,CV:false,InitializeHold:
function(V,GS,Kk,Kl,CI,DV,Ef,Kj){this.Down=true;this.BA=V;this.BC=B.aak(GS,DV);this.
CE=B.aak(Kk,DV);this.BL=Kl;this.CG=CI;this.Cd=Ef;this.FN=Kj;return this;},InitializeUp:
function(V,GS,Kk,Kl,CI,DV,HF,Ef,Kj){this.Down=false;this.BA=V;this.BC=B.aak(GS,DV
);this.CE=B.aak(Kk,DV);this.BL=Kl;this.CG=CI;this.CV=HF;this.Cd=Ef;this.FN=Kj;return this;
},InitializeDown:function(V,GS,CI,DV,HF,Ef){this.Down=true;this.BA=V;this.BC=B.aak(
GS,DV);this.CE=B.aak(GS,DV);this.BL=0;this.CG=CI;this.CV=HF;this.Cd=Ef;this.FN=Ef;
return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.E8;},_className:"Core::CursorEvent"};C.Ik={FN:B.vw,Cd:B.vw,CG:0,BL:0,AE:B.vw,CE:
B.vw,BC:B.vw,BA:0,Initialize:function(V,GS,Kk,aOffset,Kl,Uc,DV,Ef,Kj){this.BA=V;
this.BC=B.aak(GS,DV);this.CE=B.aak(Kk,DV);this.AE=aOffset;this.BL=Kl;this.CG=Uc;
this.Cd=Ef;this.FN=Kj;return this;},_Init:function(aArg){C.Event._Init.call(this
,aArg);this.__proto__=C.Ik;},_className:"Core::DragEvent"};C.J3={Ds:function(A4,
aClip,aOffset,AN,aBlend){},L:function(E){var A;if(B.z9(E,this.O))return;var G2=[(
A=this.O)[2]-A[0],A[3]-A[1]];var L$=[E[2]-E[0],E[3]-E[1]];var H8=!B.z8(G2,L$);var
Bb=B.aaj(E.slice(0,2),this.O.slice(0,2));if(!B.z8(Bb,A7)&&!H8){var I=this.Ab;while(
!!I&&!((I.F&0x200)===0x200)){if(((I.F&0x400)===0x400)){var tmp=((I.F&0x100)===0x100
);I.Ir(Bb,tmp);}I=I.Ab;}}if((H8&&(G2[0]>0))&&(G2[1]>0)){var Ah=this.O;var I=this.
Ab;while(!!I&&!((I.F&0x200)===0x200)){if(((I.F&0x400)===0x400)){if(!!I.AR&&(I.AR.
G4!==this))I.AR=null;if(!I.AR&&(I.C1!==0x14))I.Jj(Ah,this);}I=I.Ab;}}C.BI.L.call(
this,E);if(!!this.H&&H8){this.F=this.F|0x1000;if(!((this.H.F&0x2000)===0x2000)){
this.H.F=this.H.F|0x4000;B.ow([A=this.H,A.Cr],this);}}},_Init:function(aArg){C.BI.
_Init.call(this,aArg);this.__proto__=C.J3;this.F=0x203;},_className:"Core::Outline"
};C.BJ={Ni:null,JU:null,JS:null,Eu:null,Ev:null,BM:null,Mm:0,Ai:0,BA:0,Au:0,CG:0
,BL:0,AE:B.vw,CE:B.vw,BC:B.vw,J8:8,FT:0,Pb:1,Down:false,D8:false,CV:false,Ob:false
,KE:0,Ds:function(A4,aClip,aOffset,AN,aBlend){},Bs:function(Av){var A;var T=(C.E8.
isPrototypeOf(Av)?Av:null);var Ax=(C.Ik.isPrototypeOf(Av)?Av:null);var L9=this.D8;
var Em;var DF;var KZ;var Cq;var Kx;if(!T&&!Ax)return null;Em=(!!T&&T.Down)&&!T.BL;
DF=(!!T&&T.Down)&&(T.BL>0);KZ=(!!T&&T.Down)&&(T.BL>this.KE);Cq=!!T&&!T.Down;Kx=!
!Ax;if(Em)this.KE=((A=(T.CV?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if((((this.FT&0x20)===
0x20)&&(this.Ai>0))&&(this.Ai<33554432)){var Bx=(C.Jx.isPrototypeOf(Av)?Av:null);
if(((!!Bx&&Bx.Down)&&(Bx.J$!==this))&&B.vt(this.GetExtent(),this.H.O_(Bx.Cd))){this.
Mm=0x20;this.Ai=this.Ai|67108864;return null;}}if(Em){var HV=0;var EW;this.Ai=this.
Ai|(1<<T.BA);for(EW=this.Ai&4095;EW>0;EW=EW>>1)if(!!(EW&1))HV=HV+1;if(HV===1)this.
Ai=(this.Ai|16777216)|(4096<<T.BA);}if(Cq&&(this.Ai<16777216)){var Dc=this.Hf();
var BO=null;if(!!Dc){var OC=(!!this.Am?this.Am:this.H);BO=Dc.Ep(B.aam(Ly,T.Cd),T.
BA,T.CG,null,OC,0x0);}if(!!BO){var i;for(i=0;i<10;i++)if(!!(this.Ai&(1<<i)))BO.Ca.
Bs(B._NewObject(C.E8,0).InitializeDown(i,T.BC,T.CG,A7,true,T.Cd));for(i=0;i<10;i++
)if(!!(this.Ai&(1<<i)))BO.Ca.Bs(B._NewObject(C.E8,0).InitializeUp(i,T.BC,T.BC,0,
T.CG,A7,false,T.Cd,T.Cd));}}if(Cq)this.Ai=(this.Ai&~(1<<T.BA))|33554432;if(KZ&&(
this.Ai<16777216))this.Ai=this.Ai|67108864;if(Cq&&T.CV)this.Ai=this.Ai|67108864;
if(Cq&&!(this.Ai&4095))this.Mm=0x0;if(Cq&&!(this.Ai&16777215))this.Ai=0;if(DF&&(
this.Ai>=67108864)){var Dc=this.Hf();if(!!Dc)Dc.NH(null,null,this,this.Mm);}if((
DF&&!!(this.Ai&16777216))&&!!(this.Ai&33554432)){DF=false;Cq=true;}if(!!T&&!(this.
Ai&(4096<<T.BA)))return this;if(!!Ax&&!(this.Ai&(4096<<Ax.BA)))return this;if(Cq&&
!(this.Ai&16777216))return this;if(((Em||Kx)||DF)&&((this.Ai<16777216)||(this.Ai>=
33554432)))return this;if(Cq)this.Ai=this.Ai&3758100479;if(Cq&&!(this.Ai&16777215
))this.Ai=0;if(!!T){this.Down=Em||DF;this.D8=this.MV(T.BC);this.CE=T.CE;this.BC=
T.BC;this.AE=A7;this.BL=T.BL;this.CG=T.CG;this.CV=T.CV;this.BA=T.BA;this.Au=T.Au;
if(T.Down&&!T.BL)L9=false;}if(!!Ax){this.Down=true;this.D8=this.MV(Ax.BC);this.CE=
Ax.CE;this.BC=Ax.BC;this.AE=Ax.AE;this.BL=Ax.BL;this.CG=Ax.CG;this.BA=Ax.BA;this.
CV=false;this.Au=Ax.Au;}var Oa=this.Down;if(!!Ax)(A=this.Ni)?A[1].call(A[0],this
):null;if((!!T&&this.Down)&&!this.BL)(A=this.BM)?A[1].call(A[0],this):null;if((!
!T&&this.Down)&&(this.BL>0))(A=this.Eu)?A[1].call(A[0],this):null;if((this.Down&&
this.D8)&&!L9){this.Ob=true;(A=this.JS)?A[1].call(A[0],this):null;}if(this.Ob&&(((
Oa&&!this.D8)&&L9)||((!Oa&&this.D8)&&L9))){this.Ob=false;(A=this.JU)?A[1].call(A[
0],this):null;}if(!!T&&!Oa)(A=this.Ev)?A[1].call(A[0],this):null;if(!!this.FT){var
G7=0x0;if(((((this.FT&0x10)===0x10)&&!!T)&&T.Down)&&(T.BL>=1000))G7=0x10;if((((this.
FT&0x1)===0x1)&&!!Ax)&&((Ax.Cd[1]-Ax.FN[1])<=-this.J8))G7=0x1;if((((this.FT&0x2)===
0x2)&&!!Ax)&&((Ax.Cd[1]-Ax.FN[1])>=this.J8))G7=0x2;if((((this.FT&0x4)===0x4)&&!!
Ax)&&((Ax.Cd[0]-Ax.FN[0])<=-this.J8))G7=0x4;if((((this.FT&0x8)===0x8)&&!!Ax)&&((
Ax.Cd[0]-Ax.FN[0])>=this.J8))G7=0x8;if(!!G7){var Dc=this.Hf();if(!!Dc){this.Mm=G7;
Dc.NH(null,this,this,G7);}}}return this;},Ep:function(Ap,V,CI,EH,EL,EK){var A;if(
!!EH&&(EH!==this))return null;if((CI<1)||(CI>this.Pb))return null;if(this.Ai>=33554432
)return null;if((this.Ai>=16777216)&&!(this.Ai&(4096<<V)))return null;if(!!(EK&this.
FT))return null;if(this.Q_()){var Aq=B.kz(Ap,this.GetExtent());if(!((Aq[0]>=Aq[2
])||(Aq[1]>=Aq[3]))){var C6=B.zT(Ap);var Bb=A7;if(C6[0]<Aq[0])Bb=[Aq[0]-C6[0],Bb[
1]];if(C6[0]>=Aq[2])Bb=[(Aq[2]-C6[0])-1,Bb[1]];if(C6[1]<Aq[1])Bb=[Bb[0],Aq[1]-C6[
1]];if(C6[1]>=Aq[3])Bb=[Bb[0],(Aq[3]-C6[1])-1];return B._NewObject(C.Jy,0).Initialize(
this,Bb);}}else{var Bf=B.aan(9,B.vw,null);var i;Bf.Set(0,B.zT(Ap));Bf.Set(1,Bf.Get(
0));Bf.Set(2,Bf.Get(0));Bf.Set(3,Bf.Get(0));Bf.Set(4,Bf.Get(0));Bf.Set(1,[Ap[0],
Bf.Get(1)[1]]);Bf.Set(2,[Bf.Get(2)[0],Ap[1]]);Bf.Set(3,[Ap[2],Bf.Get(3)[1]]);Bf.
Set(4,[Bf.Get(4)[0],Ap[3]]);Bf.Set(5,Ap.slice(0,2));Bf.Set(6,[Ap[2],Ap[1]]);Bf.Set(
7,[Ap[0],Ap[3]]);Bf.Set(8,Ap.slice(2,4));for(i=0;i<9;i=i+1)if(this.MV(Bf.Get(i))
)return B._NewObject(C.Jy,0).Initialize(this,B.aaj(Bf.Get(i),Bf.Get(0)));}return null;
},Pq:function(E){if(E<1)E=1;this.J8=E;},Lo:function(E){if(E<1)E=1;this.Pb=E;},AB:
function(E){if(E)this.Bc(0x10,0x0);else this.Bc(0x0,0x10);},_Init:function(aArg){
C.ED._Init.call(this,aArg);this.__proto__=C.BJ;this.F=0x11B;},_Mark:function(D){
var A;C.ED._Mark.call(this,D);if((A=this.Ni)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=
D);if((A=this.JU)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.JS)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Eu)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ev)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
BM)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.Dt={timer:null,Me:null,Jn:null,Ai:0,LL:0,EX:5000,H7:0,L8:B.vw,HM:0,Fv:0,AM:0
,Hb:0,Jq:0,HL:0,Fu:0,AL:0,Ha:0,G$:0,CE:B.vw,OQ:B.vw,BS:B.vw,BT:B.vw,AE:B.vw,OT:0.5
,Lu:true,IR:false,D3:false,D4:false,LK:false,KE:0,Ds:function(A4,aClip,aOffset,AN
,aBlend){},Bs:function(Av){var A;var T=(C.E8.isPrototypeOf(Av)?Av:null);var Ax=(
C.Ik.isPrototypeOf(Av)?Av:null);var Bx=(C.Jx.isPrototypeOf(Av)?Av:null);var Em;var
DF;var KZ;var Cq;var Kx;Em=(!!T&&T.Down)&&!T.BL;DF=(!!T&&T.Down)&&(T.BL>0);KZ=(!
!T&&T.Down)&&(T.BL>this.KE);Cq=!!T&&!T.Down;Kx=!!Ax;if(Em)this.KE=((A=(T.CV?0:50
))&0x80)?A|0xFFFFFF00:A&0xFF;if(Em){var HV=0;var EW;this.Ai=this.Ai|(1<<T.BA);for(
EW=this.Ai&4095;EW>0;EW=EW>>1)if(!!(EW&1))HV=HV+1;if(HV===1)this.Ai=(this.Ai|16777216
)|(4096<<T.BA);}if(Cq&&(this.Ai<16777216)){var Dc=this.Hf();var BO=null;if(!!Dc){
var OC=(!!this.Am?this.Am:this.H);BO=Dc.Ep(B.aam(Ly,T.Cd),T.BA,T.CG,null,OC,0x0);
}if(!!BO){var i;for(i=0;i<10;i++)if(!!(this.Ai&(1<<i)))BO.Ca.Bs(B._NewObject(C.E8
,0).InitializeDown(i,T.BC,T.CG,A7,true,T.Cd));for(i=0;i<10;i++)if(!!(this.Ai&(1<<
i)))BO.Ca.Bs(B._NewObject(C.E8,0).InitializeUp(i,T.BC,T.BC,0,T.CG,A7,false,T.Cd,
T.Cd));}}if(Cq)this.Ai=(this.Ai&~(1<<T.BA))|33554432;if(KZ&&(this.Ai<16777216))this.
Ai=this.Ai|67108864;if(Cq&&T.CV)this.Ai=this.Ai|67108864;if(Cq&&!(this.Ai&16777215
))this.Ai=0;if(DF&&(this.Ai>=67108864)){var Dc=this.Hf();if(!!Dc)Dc.NH(null,null
,this,0x0);}if((DF&&!!(this.Ai&16777216))&&!!(this.Ai&33554432)){DF=false;Cq=true;
}if(!!T&&!(this.Ai&(4096<<T.BA)))return this;if(!!Ax&&!(this.Ai&(4096<<Ax.BA)))return this;
if(Cq&&!(this.Ai&16777216))return this;if(((Em||Kx)||DF)&&((this.Ai<16777216)||(
this.Ai>=33554432)))return this;if(Cq)this.Ai=this.Ai&3758100479;if(Cq&&!(this.Ai&
16777215))this.Ai=0;if(!!Bx&&(Bx.J$===this))return null;if((!!Bx&&Bx.Down)&&(this.
LK||!this.IR))return null;if((!!Bx&&Bx.Down)&&!B.vt(this.O,this.H.O_(Bx.Cd)))return null;
if((!!Bx&&!Bx.Down)&&(!this.LK||(this.LL!==Bx.BA)))return null;if((!T&&!Ax)&&!Bx
)return null;if(!!T){this.LK=Em||DF;this.LL=T.BA;this.CE=T.CE;}if(!!Ax)this.LL=Ax.
BA;if(!!Bx){this.LK=Bx.Down;this.LL=Bx.BA;}if(!!Bx&&Bx.Down){this.OE();this.AL=(((
Bx.Au-this.G$)*0.001)*this.Fu)+this.AL;this.AM=(((Bx.Au-this.Jq)*0.001)*this.Fv)+
this.AM;if(this.D3)this.AL=0;if(this.D4)this.AM=0;this.Fu=0;this.Fv=0;this.D3=false;
this.D4=false;this.L8=this.AE;this.H7=Bx.Au;return this;}if(Em){this.OE();this.AL=(((
T.Au-this.G$)*0.001)*this.Fu)+this.AL;this.AM=(((T.Au-this.Jq)*0.001)*this.Fv)+this.
AM;if(this.D3||!this.IR)this.AL=0;if(this.D4||!this.IR)this.AM=0;this.Fu=0;this.
Fv=0;this.D3=false;this.D4=false;if(!this.IR){this.IR=true;(A=this.Me)?A[1].call(
A[0],this):null;}this.L8=this.AE;this.H7=T.Au;}if(!!Ax){var BX=B.aaj(Ax.BC,Ax.CE
);var Aw=this.AE;if(this.Lu)Aw=[this.L8[0]+BX[0],Aw[1]];Aw=[Aw[0],this.L8[1]+BX[
1]];if(Aw[0]<this.BT[0])Aw=[this.BT[0]+(((Aw[0]-this.BT[0])/2)|0),Aw[1]];else if(
Aw[0]>this.BS[0])Aw=[this.BS[0]+(((Aw[0]-this.BS[0])/2)|0),Aw[1]];if(Aw[1]<this.
BT[1])Aw=[Aw[0],this.BT[1]+(((Aw[1]-this.BT[1])/2)|0)];else if(Aw[1]>this.BS[1])
Aw=[Aw[0],this.BS[1]+(((Aw[1]-this.BS[1])/2)|0)];if(!B.z8(Aw,this.AE)){this.OQ=B.
aaj(Aw,this.AE);this.AE=Aw;(A=this.Jn)?A[1].call(A[0],this):null;}}if((!!Bx&&!Bx.
Down)&&((Bx.Au-this.H7)>=200)){this.AL=0;this.AM=0;}if(DF&&((T.Au-this.H7)>=200)
){this.AL=0;this.AM=0;}if(!!Ax&&(Ax.Au>this.H7)){var BX=Ax.AE;var Qf=1000/(Ax.Au-
this.H7);var Gk=0;var Gl;if(this.Lu)Gk=BX[0]*Qf;Gl=BX[1]*Qf;if((Gk*this.AL)<0)this.
AL=0;if((Gl*this.AM)<0)this.AM=0;this.AL=(this.AL+Gk)*0.5;this.AM=(this.AM+Gl)*0.5;
this.H7=Ax.Au;}if(!Cq&&!Bx)return this;if(!!T&&T.CV){this.AL=0;this.AM=0;}if((this.
AE[0]<=this.BT[0])||(this.AE[0]>=this.BS[0]))this.AL=0;else if(!this.AL){var AY=
this.AE[0];var Bo=this.BT[0];var Bp=this.BS[0];if(AY<Bo)Bp=this.BT[0];else if(AY>
Bp)Bo=this.BS[0];else{Bo=AY;Bp=AY;}if((Bo-AY)<=(AY-Bp))AY=Bo;else AY=Bp;if(AY!==
this.AE[0]){var Cn=AY-this.AE[0];if(Cn>0)this.AL=Math.sqrt((Cn*2)*this.EX)+20;if(
Cn<0)this.AL=-Math.sqrt((-Cn*2)*this.EX)-20;this.Fu=(400-(this.AL*this.AL))/(2*Cn
);this.HL=AY;}}else{var Vg=this.AL*this.AL;var Cn=Vg/(2*this.EX);var AY=this.AE[
0];if(this.AL>0)AY=AY+(Cn|0);if(this.AL<0)AY=AY-(Cn|0);if(AY>this.BS[0])AY=this.
BS[0];else if(AY<this.BT[0])AY=this.BT[0];var QN=AY;var Bo=this.BT[0];var Bp=this.
BS[0];if(AY<Bo)Bp=this.BT[0];else if(AY>Bp)Bo=this.BS[0];else{Bo=AY;Bp=AY;}if(this.
AL>0){if(Bp<=this.AE[0])AY=Bo;else if((AY-Bp)<(Bo-AY))AY=Bp;else AY=Bo;}else if(
Bo>=this.AE[0])AY=Bp;else if((AY-Bp)>(Bo-AY))AY=Bo;else AY=Bp;if(AY!==this.AE[0]
){Cn=AY-this.AE[0];if(AY!==QN){var Gs=AY-QN;if(Gs>0)this.AL=this.AL+Math.sqrt((Gs
*2)*this.EX);if(Gs<0)this.AL=this.AL-Math.sqrt((-Gs*2)*this.EX);}if(this.AL>0)this.
AL=this.AL+20;if(this.AL<0)this.AL=this.AL-20;this.Fu=(400-(this.AL*this.AL))/(2
*Cn);this.HL=AY;}else this.AL=0;}if((this.AE[1]<=this.BT[1])||(this.AE[1]>=this.
BS[1]))this.AM=0;else if(!this.AM){var AZ=this.AE[1];var Bo=this.BT[1];var Bp=this.
BS[1];if(AZ<Bo)Bp=this.BT[1];else if(AZ>Bp)Bo=this.BS[1];else{Bo=AZ;Bp=AZ;}if((Bo-
AZ)<=(AZ-Bp))AZ=Bo;else AZ=Bp;if(AZ!==this.AE[1]){var Cn=AZ-this.AE[1];if(Cn>0)this.
AM=Math.sqrt((Cn*2)*this.EX)+20;if(Cn<0)this.AM=-Math.sqrt((-Cn*2)*this.EX)-20;this.
Fv=(400-(this.AM*this.AM))/(2*Cn);this.HM=AZ;}}else{var Vh=this.AM*this.AM;var Cn=
Vh/(2*this.EX);var AZ=this.AE[1];if(this.AM>0)AZ=AZ+(Cn|0);if(this.AM<0)AZ=AZ-(Cn|
0);if(AZ>this.BS[1])AZ=this.BS[1];else if(AZ<this.BT[1])AZ=this.BT[1];var QO=AZ;
var Bo=this.BT[1];var Bp=this.BS[1];if(AZ<Bo)Bp=this.BT[1];else if(AZ>Bp)Bo=this.
BS[1];else{Bo=AZ;Bp=AZ;}if(this.AM>0){if(Bp<=this.AE[1])AZ=Bo;else if((AZ-Bp)<(Bo-
AZ))AZ=Bp;else AZ=Bo;}else if(Bo>=this.AE[1])AZ=Bp;else if((AZ-Bp)>(Bo-AZ))AZ=Bo;
else AZ=Bp;if(AZ!==this.AE[1]){Cn=AZ-this.AE[1];if(AZ!==QO){var Gs=AZ-QO;if(Gs>0
)this.AM=this.AM+Math.sqrt((Gs*2)*this.EX);if(Gs<0)this.AM=this.AM-Math.sqrt((-Gs
*2)*this.EX);}if(this.AM>0)this.AM=this.AM+20;if(this.AM<0)this.AM=this.AM-20;this.
Fv=(400-(this.AM*this.AM))/(2*Cn);this.HM=AZ;}else this.AM=0;}if(!!T)this.G$=T.Au;
if(!!Bx)this.G$=Bx.Au;this.Jq=this.G$;this.Ha=this.AE[0];this.Hb=this.AE[1];this.
Vi();return this;},Ep:function(Ap,V,CI,EH,EL,EK){var A;if(!!EH&&(EH!==this))return null;
if(this.Ai>=33554432)return null;if((this.Ai>=16777216)&&!(this.Ai&(4096<<V)))return null;
if(!this.Lu&&!!(EK&0xC))return null;var Aq=B.kz(Ap,this.O);if(!((Aq[0]>=Aq[2])||(
Aq[1]>=Aq[3]))){var C6=B.zT(Ap);var Bb=A7;if(C6[0]<Aq[0])Bb=[Aq[0]-C6[0],Bb[1]];
if(C6[0]>=Aq[2])Bb=[(Aq[2]-C6[0])-1,Bb[1]];if(C6[1]<Aq[1])Bb=[Bb[0],Aq[1]-C6[1]];
if(C6[1]>=Aq[3])Bb=[Bb[0],(Aq[3]-C6[1])-1];return B._NewObject(C.Jy,0).Initialize(
this,Bb);}return null;},OE:function(){if(!!this.timer){B.zl([this,this.CN],this.
timer,0);this.timer=null;}},Vi:function(){this.timer=B._GetAutoObject(B.abl.GB);
B.y_([this,this.CN],this.timer,0);},CN:function(M){var A;if(!this.timer)return;var
Js=(this.timer.Au-this.G$)*0.001;var Jt=(this.timer.Au-this.Jq)*0.001;var Vk=Js*
Js;var Vl=Jt*Jt;var Gk=(this.Fu*Js)+this.AL;var Gl=(this.Fv*Jt)+this.AM;var Aw=[((((
this.Fu*0.5)*Vk)+(this.AL*Js))+this.Ha)|0,((((this.Fv*0.5)*Vl)+(this.AM*Jt))+this.
Hb)|0];if(this.D3&&(Js>=0.5)){Aw=[this.HL,Aw[1]];this.AL=0;this.Fu=0;this.Ha=Aw[
0];this.D3=false;}else if(this.D3){var GX=1-Math.pow(1-(Js/0.5),5);Aw=[(this.Ha+((
this.HL-this.Ha)*GX))|0,Aw[1]];}if(this.D4&&(Jt>=0.5)){Aw=[Aw[0],this.HM];this.AM=
0;this.Fv=0;this.Hb=Aw[1];this.D4=false;}else if(this.D4){var GX=1-Math.pow(1-(Jt
/0.5),5);Aw=[Aw[0],(this.Hb+((this.HM-this.Hb)*GX))|0];}if(((this.AL>0)&&(Gk<0))||((
this.AL<0)&&(Gk>0))){Gk=0;Aw=[this.AE[0],Aw[1]];}if(((this.AM>0)&&(Gl<0))||((this.
AM<0)&&(Gl>0))){Gl=0;Aw=[Aw[0],this.AE[1]];}if(!this.D3&&(Aw[0]<this.BT[0])){this.
Ha=Aw[0];this.HL=this.BT[0];this.G$=this.timer.Au;this.D3=true;}else if(!this.D3&&(
Aw[0]>this.BS[0])){this.Ha=Aw[0];this.HL=this.BS[0];this.G$=this.timer.Au;this.D3=
true;}if(!this.D4&&(Aw[1]<this.BT[1])){this.Hb=Aw[1];this.HM=this.BT[1];this.Jq=
this.timer.Au;this.D4=true;}else if(!this.D4&&(Aw[1]>this.BS[1])){this.Hb=Aw[1];
this.HM=this.BS[1];this.Jq=this.timer.Au;this.D4=true;}if(((!this.D3&&!!this.AL)&&(
Gk>-20))&&(Gk<20)){Aw=[this.HL,Aw[1]];this.AL=0;this.Fu=0;this.Ha=Aw[0];}if(((!this.
D4&&!!this.AM)&&(Gl>-20))&&(Gl<20)){Aw=[Aw[0],this.HM];this.AM=0;this.Fv=0;this.
Hb=Aw[1];}if(!B.z8(Aw,this.AE)){this.OQ=B.aaj(Aw,this.AE);this.AE=Aw;(A=this.Jn)?
A[1].call(A[0],this):null;}if(((!this.AL&&!this.AM)&&!this.D3)&&!this.D4){this.OE(
);this.IR=false;}},RM:function(E){if(E<0)E=0;if(E>1)E=1;if(E===this.OT)return;this.
OT=E;if(E<(1e-007))E=1e-007;this.EX=E*10000;},_Init:function(aArg){C.BI._Init.call(
this,aArg);this.__proto__=C.Dt;this.F=0x11B;},_Mark:function(D){var A;C.BI._Mark.
call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Me)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Jn)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);},_className:"Core::SlideTouchHandler"};C.D9={Ab:null,Ev:null,BM:null
,Eu:null,H6:0,Au:0,Px:0,CY:148,Br:0,AU:0,A$:true,Down:false,Ls:false,AO:function(
aArg){var A;var AQ=(C.R.isPrototypeOf(A=this.G)?A:null);if(!AQ)throw new Error(NT
);this.Ab=AQ.L_;AQ.L_=this;},Bs:function(Av){var A;if(!!Av&&Av.Rb(this.CY)){this.
Down=Av.Down;this.Br=Av.Br;this.AU=Av.AU;this.Au=Av.Au;if(Av.Down){this.Px=this.
H6;this.Ls=this.H6>0;if(this.Ls)(A=this.Eu)?A[1].call(A[0],this):null;else(A=this.
BM)?A[1].call(A[0],this):null;this.H6=this.H6+1;return true;}if(!Av.Down){this.Ls=
this.H6>1;this.Px=this.H6-1;this.H6=0;(A=this.Ev)?A[1].call(A[0],this):null;return true;
}}return false;},_Init:function(aArg){this.__proto__=C.D9;this.AO(aArg);B.hJ++;}
,_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.Ab)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ev)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.BM)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Eu)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};C.Jy={Ca:null,Jz:0,AE:B.vw,Initialize:function(W,aOffset
){this.Ca=W;this.AE=aOffset;this.Jz=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=C.Jy;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Ca)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(
A._cycle=D);},G:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.In={
G4:null,BZ:B.vx,Ah:B.vx,isEmpty:false,_Init:function(aArg){this.__proto__=C.In;B.
hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.G4)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.G
)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};C.Le={Gn:B.vw,Gm:B.vw,_Init:function(aArg){C.In._Init.call(
this,aArg);this.__proto__=C.Le;},_className:"Core::LayoutLineContext"};C.Lf={KU:
B.vw,KT:B.vw,Gn:B.vw,Gm:B.vw,_Init:function(aArg){C.In._Init.call(this,aArg);this.
__proto__=C.Lf;},_className:"Core::LayoutQuadContext"};C.MA={AQ:null,Ab:null,Dl:
null,Dr:null,Ch:null,H4:null,_Init:function(aArg){this.__proto__=C.MA;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.AQ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ab)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.Dl)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Dr)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ch)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.H4)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D
))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:"Core::DialogContext"
};C.NM={Dj:null,Ba:null,AJ:null,Qh:false,Uq:function(){if(!this.Dj)return;var CU=
this.Dj;this.Dj.CT=null;this.Dj=null;B.ow([this,this.Ou],this);CU.Pd(this);},UM:
function(M){if(!!this.Dj)return;if(!this.AJ)return;this.Dj=this.AJ;this.AJ=this.
AJ.Ab;if(!!this.AJ)this.AJ.Am=null;else this.Ba=null;this.Dj.Ab=null;this.Qh=true;
this.Dj.Iw(this);this.Qh=false;},UX:function(M){B.ow([this,this.UM],this);},UW:function(
M){B.ow([this,this.UX],this);},Ou:function(M){B.ow([this,this.UW],this);},Q0:function(
BD){if(!BD||!BD.CT)return;if(BD.CT!==this)throw new Error(NU);var QT=false;if(this.
Dj===BD){this.Dj=null;QT=true;B.ow([this,this.Ou],this);}else{if(!!BD.Ab)BD.Ab.Am=
BD.Am;else this.Ba=BD.Am;if(!!BD.Am)BD.Am.Ab=BD.Ab;else this.AJ=BD.Ab;BD.Am=null;
BD.Ab=null;}BD.CT=null;if(QT)BD.Pc(this);},Py:function(BD,N1){if(!BD)return;if(!
!BD.CT)throw new Error(NV);BD.CT=this;if(N1){BD.Ab=this.AJ;if(!!this.AJ)this.AJ.
Am=BD;else this.Ba=BD;this.AJ=BD;}else{BD.Am=this.Ba;if(!!this.Ba)this.Ba.Ab=BD;
else this.AJ=BD;this.Ba=BD;}if(!this.Dj)B.ow([this,this.Ou],this);},_Init:function(
aArg){this.__proto__=C.NM;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.Dj)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ba)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AJ)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);
},G:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.GN={CT:null,Am:
null,Ab:null,Pd:function(I$){},Pc:function(I$){},Iw:function(I$){this.OO();},Gu:
function(){if(!!this.CT&&(this.CT.Dj===this))this.CT.Uq();},OO:function(){if(!!this.
CT)this.CT.Q0(this);},MU:function(){return!!this.CT&&(this.CT.Dj===this);},_Init:
function(aArg){this.__proto__=C.GN;B.hJ++;},_Done:function(){this.__proto__=null;
B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.CT)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Am)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Ab)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=
D);},G:null,_cycle:0,_observers:null,_className:"Core::Task"};C.NL={Q:null,Jr:null
,Iw:function(I$){this.Jr.Q=this.Q;B.vv(this.Jr,0);B.ow([this,this.UK],this);},UK:
function(M){this.Jr.Q=null;this.Jr=null;this.Q=null;this.Gu();},_Init:function(aArg
){C.GN._Init.call(this,aArg);this.__proto__=C.NL;},_Mark:function(D){var A;C.GN.
_Mark.call(this,D);if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Jr
)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SystemEventTask"};C.Lw={
_Init:function(){C.NM._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.FS={resource:null,DN:function(){this.resource=null;},AO:function(aArg){this.
resource=aArg;},_Init:function(aArg){this.__proto__=C.FS;this.AO(aArg);B.hJ++;},
_Done:function(){this.DN();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:
0,_observers:null,_className:"Core::Resource"};C.Timer={EC:null,timer:null,Au:0,
Period:1000,Jw:0,A$:false,DN:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer(
);this.timer=null;},Mf:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<
0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.zk(this,
this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=
tmp;},Fb:function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=E;if(this.
A$)this.Mf(this.Jw,E);},Hm:function(E){if(E<0)E=0;if(E===this.Jw)return;this.Jw=
E;if(this.A$)this.Mf(E,this.Period);},AB:function(E){if(E===this.A$)return;this.
A$=E;if(E)this.Mf(this.Jw,this.Period);else this.Mf(0,0);this.Au=this.La();},La:
function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;
},Trigger:function(){var A;this.Au=this.La();if(!this.Period)this.AB(false);(A=this.
EC)?A[1].call(A[0],this):null;},Lv:function(M){this.AB(false);},StartTimer:function(
M){if(this.A$)this.AB(false);this.AB(true);},_Init:function(aArg){this.__proto__=
C.Timer;B.hJ++;},_Done:function(){this.DN();this.__proto__=null;B.hJ--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.EC)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Core::Timer"};C.Du={Q:null,CT:null,Trigger:function(Ua,N1){var CU=
B._NewObject(C.NL,0);CU.Jr=this;CU.Q=Ua;this.CT.Py(CU,N1);},_Init:function(aArg){
this.__proto__=C.Du;this.CT=B._GetAutoObject(C.Lw);B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
Q)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.CT)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Core::SystemEvent"};C.CR={My:null,Event:null,Az:null,KL:function(
M){var A;if(!this.Event)return;this.My=this.Event.Q;(A=this.Az)?A[1].call(A[0],this
):null;this.My=null;},C3:function(E){if(this.Event===E)return;if(!!this.Event)B.
zl([this,this.KL],this.Event,0);this.Event=E;if(!!this.Event)B.y_([this,this.KL]
,this.Event,0);},_Init:function(aArg){this.__proto__=C.CR;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.My)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Event)&&(A._cycle!=D))A.
_Mark(A._cycle=D);if((A=this.Az)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=
this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.Bt={Az:null,CQ:null,KL:function(M){var A;(A=this.Az
)?A[1].call(A[0],this):null;},BB:function(E){if(B.z_(this.CQ,E))return;if(!!this.
CQ)B.zn([this,this.KL],this.CQ,0);this.CQ=E;if(!!this.CQ)B.za([this,this.KL],this.
CQ,0);},_Init:function(aArg){this.__proto__=C.Bt;B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
Az)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CQ)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null
,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};C.WA={Ed:0x1,Vz:0x2
,VM:0x4,Wy:0x8,A$:0x10,Wm:0x20,VN:0x40,V0:0x80,VL:0x100,VV:0x200,VJ:0x400,V$:0x800
,PB:0x1000,Wz:0x2000,V9:0x4000,V_:0x8000,VG:0x10000,V8:0x20000,Wj:0x40000};C.C1={
Wa:0x1,Wb:0x2,Vv:0x4,Vw:0x8,Vx:0x10,Vu:0x20};C.VP={V3:0,Wv:1,VB:2,VW:3,Wd:4,Ww:5
,Wx:6,VC:7,VD:8,VY:9,VX:10,Wf:11,We:12};C.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:
4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:12,Key3:13,Key4:
14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:21,Blue:22,Yellow:23,White:
24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:34,F10:35,ChannelUp:
36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:40,Home:41,End:42,Insert:43,Delete:
44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48,Hide:49,Play:50,Pause:51,Record:52
,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:59,Repeat:60,Eject:
61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:70,Clock:71,Timer:
72,Navigation:73,Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:78,Info:79,Power:80
,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,User1:86,User2:87,User3:88,User4:89,
User5:90,User6:91,User7:92,User8:93,User9:94,User10:95,User11:96,User12:97,User13:
98,User14:99,User15:100,User16:101,User17:102,User18:103,User19:104,KeyA:105,KeyB:
106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:
115,KeyL:116,KeyM:117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:
124,KeyU:125,KeyV:126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:
133,Multiply:134,Divide:135,Equals:136,Period:137,Comma:138,Colon:139,Semicolon:
140,AlphaKeys:141,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:144,CharacterKeys:
145,ControlKeys:146,CursorKeys:147,AnyKey:148,Enter:149,Escape:150,Backspace:151
,Tab:152,CtrlKeyA:153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:
158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164
,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:
171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177
,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,
CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:189,CtrlF1:
190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196,CtrlF8:197
,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:203,CtrlLeft:
204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208,CtrlInsert:209
,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:214,CtrlShiftKeyB:
215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:219,CtrlShiftKeyG:
220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:224,CtrlShiftKeyL:
225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:229,CtrlShiftKeyQ:
230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:234,CtrlShiftKeyV:
235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:239,CtrlShiftSpace:
240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:244,CtrlShiftKey4:
245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:249,CtrlShiftKey9:
250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:254,CtrlShiftF5:
255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:259,CtrlShiftF10:
260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:264,CtrlShiftLeft:
265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:268,CtrlShiftBackspace:
269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:272,CtrlShiftEnd:273,CtrlShiftTab:
274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:279,AltF6:280,AltF7:281,AltF8:
282,AltF9:283,AltF10:284,AltEnter:285,AltEscape:286,AltUp:287,AltDown:288,AltLeft:
289,AltRight:290,AltPageUp:291,AltPageDown:292,AltBackspace:293,AltInsert:294,AltDelete:
295,AltHome:296,AltEnd:297,AltTab:298,AltShiftF1:299,AltShiftF2:300,AltShiftF3:301
,AltShiftF4:302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:305,AltShiftF8:306,AltShiftF9:
307,AltShiftF10:308,AltShiftEnter:309,AltShiftEscape:310,AltShiftUp:311,AltShiftDown:
312,AltShiftLeft:313,AltShiftRight:314,AltShiftPageUp:315,AltShiftPageDown:316,AltShiftBackspace:
317,AltShiftInsert:318,AltShiftDelete:319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:
322,ShiftF1:323,ShiftF2:324,ShiftF3:325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:
329,ShiftF8:330,ShiftF9:331,ShiftF10:332,ShiftEnter:333,ShiftEscape:334,ShiftUp:
335,ShiftDown:336,ShiftLeft:337,ShiftRight:338,ShiftPageUp:339,ShiftPageDown:340
,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:343,ShiftHome:344,ShiftEnd:345,ShiftTab:
346};C.Wc={WH:0x1,WE:0x2,WF:0x4,WG:0x8,VZ:0x10,VO:0x20};
C._Init=function(){C.Ip.__proto__=C.Ca;C.ED.__proto__=C.Ca;C.BI.__proto__=C.Ca;C.
R.__proto__=C.BI;C.Root.__proto__=C.R;C.KeyEvent.__proto__=C.Event;C.Jx.__proto__=
C.Event;C.E8.__proto__=C.Event;C.Ik.__proto__=C.Event;C.J3.__proto__=C.BI;C.BJ.__proto__=
C.ED;C.Dt.__proto__=C.BI;C.Le.__proto__=C.In;C.Lf.__proto__=C.In;C.NL.__proto__=
C.GN;};C._ReInit=function(){var A;if((A=C.Lw._this))A._ReInit();};C.CH=function(
D){var A;if((A=C.Lw._this)&&(A._cycle!=D))A._Done(C.Lw._this=null);};return C;})(
);

/* Embedded Wizard */