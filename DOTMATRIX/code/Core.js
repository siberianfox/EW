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
var A6=[0,0];var A2=[0,0,0,0];var Dm="The view does not belong to this group";var
Dn="The dialog component is already presented";var ER="The dialog component is actually not presented";
var FB="No fader to perform the fade-in/out operation";var FC="Trying to use the same fader twice";
var HZ="Trying to fade-in/out a group which belongs to another owner";var KC="No view to restack";
var I$="View is not in this group";var Oz="No view to remove";var OA="No view to add";
var OB="View already in a group";var OC="Recursive invalidate during active update cycle.";
var KD=[-8,-8,9,9];var L3=[0,0,1,1];var OD="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var OE="Trying to cancel a task not belonging to this queue!";
var OF="Trying to enqueue a task twice!";
C.Cf={Ac:null,An:null,I:null,AS:null,G:0x103,C7:0x14,Jq:function(U,Jg){},GT:function(
E){var A;var B1=E^this.C7;if(!B1)return;this.C7=E;if(!!this.AS&&!((this.G&0x400)===
0x400)){this.I.G=this.I.G|0x5000;B.ow([A=this.I,A.Cw],this);this.I.At([0,0,(A=this.
I.R)[2]-A[0],A[3]-A[1]]);}if(!!this.AS&&((this.G&0x400)===0x400)){this.AS.He.G=this.
AS.He.G|0x1000;this.I.G=this.I.G|0x4000;B.ow([A=this.I,A.Cw],this);}},Hu:function(
){var Al=this.I;while(!!Al){var Df=(C.Root.isPrototypeOf(Al)?Al:null);if(!!Df)return Df;
Al=Al.I;}return null;},Dz:function(A4,aClip,aOffset,AP,aBlend){},Bv:function(Ay){
return null;},EI:function(Ar,X,CP,ES,EW,EV){return null;},JC:function(Ar){return Ar;
},JD:function(U,Cp){return A6;},IR:function(aOffset,Je){},GetExtent:function(){return A2;
},Bd:function(Gp,H1){var A;if(((this.G&0x200)===0x200))Gp=Gp&~0x400;var Pd=(this.
G&~H1)|Gp;var G8=Pd^this.G;this.G=Pd;if(!!this.I&&!!(G8&0x14)){var Q0=((this.G&0x14
)===0x14);if(Q0&&!this.I.C4)this.I.CX(this);if(!Q0&&(this.I.C4===this))this.I.CX(
this.I.PL(this,0x14));}if(!!this.I&&!!(G8&0x403))this.I.At(this.GetExtent());if(((
!!this.AS&&!!this.I)&&((Pd&0x400)===0x400))&&((G8&0x1)===0x1)){this.G=this.G|0x800;
this.I.G=this.I.G|0x4000;B.ow([A=this.I,A.Cw],this);}if(!!this.I&&((G8&0x400)===
0x400)){this.AS=null;this.G=this.G|0x800;this.I.G=this.I.G|0x4000;B.ow([A=this.I
,A.Cw],this);}},_Init:function(aArg){this.__proto__=C.Cf;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.An)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AS)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);
},H:null,_cycle:0,_observers:null,_className:"Core::View"};C.IP={A1:B.vw,A0:B.vw
,Jq:function(U,Jg){var T=B._NewObject(C.LE,0);this.AS=null;T.B3=this.getExtent();
T.Aj=U;T.He=Jg;T.GA=this.A0;T.GB=this.A1;this.AS=T;},JD:function(U,Cp){var A;var
AL=this.C7;var T=(C.LE.isPrototypeOf(A=this.AS)?A:null);var x1=T.B3[0];var y1=T.
B3[1];var x2=T.B3[2];var y2=T.B3[3];var BR=[U[2]-U[0],U[3]-U[1]];var w=x2-x1;var
h=y2-y1;var tmp;if(!Cp){var CH=[(A=T.Aj)[2]-A[0],A[3]-A[1]];x1=x1-T.Aj[0];y1=y1-
T.Aj[1];if(CH[0]!==BR[0]){var Bj=((AL&0x4)===0x4);var Bk=((AL&0x8)===0x8);var Dd=((
AL&0x1)===0x1);if(!Bj&&(Dd||!Bk))x1=((x1*BR[0])/CH[0])|0;if(!Bk&&(Dd||!Bj)){x2=x2-
T.Aj[0];x2=((x2*BR[0])/CH[0])|0;x2=x2-BR[0];}else x2=x2-T.Aj[2];x1=x1+U[0];x2=x2+
U[2];if(!Dd){if(Bj&&!Bk)x2=x1+w;else if(!Bj&&Bk)x1=x2-w;else{x1=x1+((((x2-x1)-w)
/2)|0);x2=x1+w;}}}else{x2=x2-T.Aj[2];x1=x1+U[0];x2=x2+U[2];}if(CH[1]!==BR[1]){var
Bl=((AL&0x10)===0x10);var Bi=((AL&0x20)===0x20);var De=((AL&0x2)===0x2);if(!Bl&&(
De||!Bi))y1=((y1*BR[1])/CH[1])|0;if(!Bi&&(De||!Bl)){y2=y2-T.Aj[1];y2=((y2*BR[1])
/CH[1])|0;y2=y2-BR[1];}else y2=y2-T.Aj[3];y1=y1+U[1];y2=y2+U[3];if(!De){if(Bl&&!
Bi)y2=y1+h;else if(!Bl&&Bi)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+h;}}}else{
y2=y2-T.Aj[3];y1=y1+U[1];y2=y2+U[3];}}else{switch(Cp){case 3:{x1=U[0];x2=x1+w;}break;
case 4:{x2=U[2];x1=x2-w;}break;case 1:{y1=U[1];y2=y1+h;}break;case 2:{y2=U[3];y1=
y2-h;}break;default:;}if((Cp===3)||(Cp===4)){var Bl=((AL&0x10)===0x10);var Bi=((
AL&0x20)===0x20);var De=((AL&0x2)===0x2);if(De){y1=U[1];y2=U[3];}else if(Bl&&!Bi
){y1=U[1];y2=y1+h;}else if(Bi&&!Bl){y2=U[3];y1=y2-h;}else{y1=U[1]+((((U[3]-U[1])-
h)/2)|0);y2=y1+h;}}if((Cp===1)||(Cp===2)){var Bj=((AL&0x4)===0x4);var Bk=((AL&0x8
)===0x8);var Dd=((AL&0x1)===0x1);if(Dd){x1=U[0];x2=U[2];}else if(Bj&&!Bk){x1=U[0
];x2=x1+w;}else if(Bk&&!Bj){x2=U[2];x1=x2-w;}else{x1=U[0]+((((U[2]-U[0])-w)/2)|0
);x2=x1+w;}}}T.isEmpty=(x1>=x2)||(y1>=y2);w=x2-x1;h=y2-y1;if(T.GB[0]<T.GA[0]){tmp=
x1;x1=x2-1;x2=tmp-1;}if(T.GB[1]<T.GA[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1
)x2=x1;if((y2-y1)===1)y2=y1;if(((this.G&0x100)===0x100)){this.A0=[x1,y1];this.A1=[
x2,y2];}else{this.Ce([x1,y1]);this.B6([x2,y2]);this.AS=T;}return[w,h];},IR:function(
aOffset,Je){if(Je){this.A0=B.aak(this.A0,aOffset);this.A1=B.aak(this.A1,aOffset);
}else{this.Ce(B.aak(this.A0,aOffset));this.B6(B.aak(this.A1,aOffset));}},GetExtent:
function(){if(!!this.AS&&this.AS.isEmpty)return A2;return this.getExtent();},getExtent:
function(){var x1=this.A0[0];var y1=this.A0[1];var x2=this.A1[0];var y2=this.A1[
1];var w=x2-x1;var h=y2-y1;var tmp;if(w<0)w=-w;if(h<0)h=-h;if(w>=h){if(x2>x1)x2=
x2-1;if(x2<x1)x2=x2+1;}if(h>=w){if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=
x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},B6:function(
E){var A;if(B.z8(E,this.A1))return;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.
GetExtent());this.AS=null;this.A1=E;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(
this.GetExtent());if((!!this.I&&((this.G&0x400)===0x400))&&!((this.I.G&0x2000)===
0x2000)){this.G=this.G|0x800;this.I.G=this.I.G|0x4000;B.ow([A=this.I,A.Cw],this);
}},Ce:function(E){var A;if(B.z8(E,this.A0))return;if(!!this.I&&((this.G&0x1)===0x1
))this.I.At(this.GetExtent());this.AS=null;this.A0=E;if(!!this.I&&((this.G&0x1)===
0x1))this.I.At(this.GetExtent());if((!!this.I&&((this.G&0x400)===0x400))&&!((this.
I.G&0x2000)===0x2000)){this.G=this.G|0x800;this.I.G=this.I.G|0x4000;B.ow([A=this.
I,A.Cw],this);}},_Init:function(aArg){C.Cf._Init.call(this,aArg);this.__proto__=
C.IP;},_className:"Core::LineView"};C.EO={B7:B.vw,Co:B.vw,A1:B.vw,A0:B.vw,Jq:function(
U,Jg){var T=B._NewObject(C.LF,0);this.AS=null;T.B3=this.GetExtent();T.Aj=U;T.He=
Jg;T.GA=this.A0;T.GB=this.A1;T.Lg=this.Co;T.Lh=this.B7;this.AS=T;},JD:function(U
,Cp){var A;var AL=this.C7;var T=(C.LF.isPrototypeOf(A=this.AS)?A:null);var x1=T.
B3[0];var y1=T.B3[1];var x2=T.B3[2];var y2=T.B3[3];var BR=[U[2]-U[0],U[3]-U[1]];
var w=x2-x1;var h=y2-y1;if(!Cp){var CH=[(A=T.Aj)[2]-A[0],A[3]-A[1]];x1=x1-T.Aj[0
];y1=y1-T.Aj[1];if(CH[0]!==BR[0]){var Bj=((AL&0x4)===0x4);var Bk=((AL&0x8)===0x8
);var Dd=((AL&0x1)===0x1);if(!Bj&&(Dd||!Bk))x1=((x1*BR[0])/CH[0])|0;if(!Bk&&(Dd||
!Bj)){x2=x2-T.Aj[0];x2=((x2*BR[0])/CH[0])|0;x2=x2-BR[0];}else x2=x2-T.Aj[2];x1=x1+
U[0];x2=x2+U[2];if(!Dd){if(Bj&&!Bk)x2=x1+w;else if(!Bj&&Bk)x1=x2-w;else{x1=x1+((((
x2-x1)-w)/2)|0);x2=x1+w;}}}else{x2=x2-T.Aj[2];x1=x1+U[0];x2=x2+U[2];}if(CH[1]!==
BR[1]){var Bl=((AL&0x10)===0x10);var Bi=((AL&0x20)===0x20);var De=((AL&0x2)===0x2
);if(!Bl&&(De||!Bi))y1=((y1*BR[1])/CH[1])|0;if(!Bi&&(De||!Bl)){y2=y2-T.Aj[1];y2=((
y2*BR[1])/CH[1])|0;y2=y2-BR[1];}else y2=y2-T.Aj[3];y1=y1+U[1];y2=y2+U[3];if(!De){
if(Bl&&!Bi)y2=y1+h;else if(!Bl&&Bi)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+
h;}}}else{y2=y2-T.Aj[3];y1=y1+U[1];y2=y2+U[3];}}else{switch(Cp){case 3:{x1=U[0];
x2=x1+w;}break;case 4:{x2=U[2];x1=x2-w;}break;case 1:{y1=U[1];y2=y1+h;}break;case
2:{y2=U[3];y1=y2-h;}break;default:;}if((Cp===3)||(Cp===4)){var Bl=((AL&0x10)===0x10
);var Bi=((AL&0x20)===0x20);var De=((AL&0x2)===0x2);if(De){y1=U[1];y2=U[3];}else
if(Bl&&!Bi){y1=U[1];y2=y1+h;}else if(Bi&&!Bl){y2=U[3];y1=y2-h;}else{y1=U[1]+((((
U[3]-U[1])-h)/2)|0);y2=y1+h;}}if((Cp===1)||(Cp===2)){var Bj=((AL&0x4)===0x4);var
Bk=((AL&0x8)===0x8);var Dd=((AL&0x1)===0x1);if(Dd){x1=U[0];x2=U[2];}else if(Bj&&
!Bk){x1=U[0];x2=x1+w;}else if(Bk&&!Bj){x2=U[2];x1=x2-w;}else{x1=U[0]+((((U[2]-U[
0])-w)/2)|0);x2=x1+w;}}}T.isEmpty=(x1>=x2)||(y1>=y2);w=(x2-x1)-1;h=(y2-y1)-1;var
Gt=T.B3[0];var Gu=T.B3[1];var FM=(T.B3[2]-Gt)-1;var FL=(T.B3[3]-Gu)-1;if(!FM)FM=
1;if(!FL)FL=1;if(((this.G&0x100)===0x100)){this.A0=[x1+((((T.GA[0]-Gt)*w)/FM)|0)
,y1+((((T.GA[1]-Gu)*h)/FL)|0)];this.A1=[x1+((((T.GB[0]-Gt)*w)/FM)|0),y1+((((T.GB[
1]-Gu)*h)/FL)|0)];this.Co=[x1+((((T.Lg[0]-Gt)*w)/FM)|0),y1+((((T.Lg[1]-Gu)*h)/FL
)|0)];this.B7=[x1+((((T.Lh[0]-Gt)*w)/FM)|0),y1+((((T.Lh[1]-Gu)*h)/FL)|0)];}else{
this.Ce([x1+((((T.GA[0]-Gt)*w)/FM)|0),y1+((((T.GA[1]-Gu)*h)/FL)|0)]);this.B6([x1+((((
T.GB[0]-Gt)*w)/FM)|0),y1+((((T.GB[1]-Gu)*h)/FL)|0)]);this.EN([x1+((((T.Lg[0]-Gt)
*w)/FM)|0),y1+((((T.Lg[1]-Gu)*h)/FL)|0)]);this.Fo([x1+((((T.Lh[0]-Gt)*w)/FM)|0),
y1+((((T.Lh[1]-Gu)*h)/FL)|0)]);this.AS=T;}return[w+1,h+1];},IR:function(aOffset,
Je){if(Je){this.A0=B.aak(this.A0,aOffset);this.A1=B.aak(this.A1,aOffset);this.Co=
B.aak(this.Co,aOffset);this.B7=B.aak(this.B7,aOffset);}else{this.Ce(B.aak(this.A0
,aOffset));this.B6(B.aak(this.A1,aOffset));this.EN(B.aak(this.Co,aOffset));this.
Fo(B.aak(this.B7,aOffset));}},GetExtent:function(){if(!!this.AS&&this.AS.isEmpty
)return A2;var x1=this.A0[0];var y1=this.A0[1];var x2=this.Co[0];var y2=this.Co[
1];if((((this.B7[0]!==x1)||(this.A1[1]!==y1))||(this.A1[0]!==x2))||(this.B7[1]!==
y2)){if(this.A1[0]<x1)x1=this.A1[0];if(this.Co[0]<x1)x1=this.Co[0];if(this.B7[0]<
x1)x1=this.B7[0];if(this.A1[1]<y1)y1=this.A1[1];if(this.Co[1]<y1)y1=this.Co[1];if(
this.B7[1]<y1)y1=this.B7[1];if(this.A0[0]>x2)x2=this.A0[0];if(this.A1[0]>x2)x2=this.
A1[0];if(this.B7[0]>x2)x2=this.B7[0];if(this.A0[1]>y2)y2=this.A0[1];if(this.A1[1
]>y2)y2=this.A1[1];if(this.B7[1]>y2)y2=this.B7[1];}else{var tmp;if(x2<x1){tmp=x1;
x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},Fo:function(
E){var A;if(B.z8(E,this.B7))return;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.
GetExtent());this.AS=null;this.B7=E;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(
this.GetExtent());if((!!this.I&&((this.G&0x400)===0x400))&&!((this.I.G&0x2000)===
0x2000)){this.G=this.G|0x800;this.I.G=this.I.G|0x4000;B.ow([A=this.I,A.Cw],this);
}},EN:function(E){var A;if(B.z8(E,this.Co))return;if(!!this.I&&((this.G&0x1)===0x1
))this.I.At(this.GetExtent());this.AS=null;this.Co=E;if(!!this.I&&((this.G&0x1)===
0x1))this.I.At(this.GetExtent());if((!!this.I&&((this.G&0x400)===0x400))&&!((this.
I.G&0x2000)===0x2000)){this.G=this.G|0x800;this.I.G=this.I.G|0x4000;B.ow([A=this.
I,A.Cw],this);}},B6:function(E){var A;if(B.z8(E,this.A1))return;if(!!this.I&&((this.
G&0x1)===0x1))this.I.At(this.GetExtent());this.AS=null;this.A1=E;if(!!this.I&&((
this.G&0x1)===0x1))this.I.At(this.GetExtent());if((!!this.I&&((this.G&0x400)===0x400
))&&!((this.I.G&0x2000)===0x2000)){this.G=this.G|0x800;this.I.G=this.I.G|0x4000;
B.ow([A=this.I,A.Cw],this);}},Ce:function(E){var A;if(B.z8(E,this.A0))return;if(
!!this.I&&((this.G&0x1)===0x1))this.I.At(this.GetExtent());this.AS=null;this.A0=
E;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.GetExtent());if((!!this.I&&((
this.G&0x400)===0x400))&&!((this.I.G&0x2000)===0x2000)){this.G=this.G|0x800;this.
I.G=this.I.G|0x4000;B.ow([A=this.I,A.Cw],this);}},Nt:function(CD){var Bf=B.aan(4
,B.vw,null);var i=0;var j=3;var O7=false;var O8=false;Bf.Set(0,this.A0);Bf.Set(1
,this.A1);Bf.Set(2,this.Co);Bf.Set(3,this.B7);while(i<4){var RT=Bf.Get(i)[0];var
MW=Bf.Get(i)[1];var WW=Bf.Get(j)[0];var Pv=Bf.Get(j)[1];if(((MW>CD[1])!==(Pv>CD[
1]))||((MW<CD[1])!==(Pv<CD[1]))){var x=((((WW-RT)*(CD[1]-MW))/(Pv-MW))|0)+RT;if(
CD[0]>x)O7=!O7;if(CD[0]<x)O8=!O8;}j=i;i=i+1;}return O7||O8;},R$:function(){return((((
this.A0[0]===this.B7[0])&&(this.A1[0]===this.Co[0]))&&(this.A0[1]===this.A1[1]))&&(
this.Co[1]===this.B7[1]))||((((this.A0[0]===this.A1[0])&&(this.Co[0]===this.B7[0
]))&&(this.A0[1]===this.B7[1]))&&(this.A1[1]===this.Co[1]));},_Init:function(aArg
){C.Cf._Init.call(this,aArg);this.__proto__=C.EO;},_className:"Core::QuadView"};
C.BL={R:B.vx,Jq:function(U,Jg){var T=B._NewObject(C.IN,0);T.B3=this.R;T.Aj=U;T.He=
Jg;this.AS=T;},JD:function(U,Cp){var A;var AL=this.C7;var T=this.AS;var x1=T.B3[
0];var y1=T.B3[1];var x2=T.B3[2];var y2=T.B3[3];var BR=[U[2]-U[0],U[3]-U[1]];var
w=x2-x1;var h=y2-y1;if(!Cp){var CH=[(A=T.Aj)[2]-A[0],A[3]-A[1]];x1=x1-T.Aj[0];y1=
y1-T.Aj[1];if(CH[0]!==BR[0]){var Bj=((AL&0x4)===0x4);var Bk=((AL&0x8)===0x8);var
Dd=((AL&0x1)===0x1);if(!Bj&&(Dd||!Bk))x1=((x1*BR[0])/CH[0])|0;if(!Bk&&(Dd||!Bj)){
x2=x2-T.Aj[0];x2=((x2*BR[0])/CH[0])|0;x2=x2-BR[0];}else x2=x2-T.Aj[2];x1=x1+U[0];
x2=x2+U[2];if(!Dd){if(Bj&&!Bk)x2=x1+w;else if(!Bj&&Bk)x1=x2-w;else{x1=x1+((((x2-
x1)-w)/2)|0);x2=x1+w;}}}else{x2=x2-T.Aj[2];x1=x1+U[0];x2=x2+U[2];}if(CH[1]!==BR[
1]){var Bl=((AL&0x10)===0x10);var Bi=((AL&0x20)===0x20);var De=((AL&0x2)===0x2);
if(!Bl&&(De||!Bi))y1=((y1*BR[1])/CH[1])|0;if(!Bi&&(De||!Bl)){y2=y2-T.Aj[1];y2=((
y2*BR[1])/CH[1])|0;y2=y2-BR[1];}else y2=y2-T.Aj[3];y1=y1+U[1];y2=y2+U[3];if(!De){
if(Bl&&!Bi)y2=y1+h;else if(!Bl&&Bi)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+
h;}}}else{y2=y2-T.Aj[3];y1=y1+U[1];y2=y2+U[3];}}else{switch(Cp){case 3:{x1=U[0];
x2=x1+w;}break;case 4:{x2=U[2];x1=x2-w;}break;case 1:{y1=U[1];y2=y1+h;}break;case
2:{y2=U[3];y1=y2-h;}break;default:;}if((Cp===3)||(Cp===4)){var Bl=((AL&0x10)===0x10
);var Bi=((AL&0x20)===0x20);var De=((AL&0x2)===0x2);if(De){y1=U[1];y2=U[3];}else
if(Bl&&!Bi){y1=U[1];y2=y1+h;}else if(Bi&&!Bl){y2=U[3];y1=y2-h;}else{y1=U[1]+((((
U[3]-U[1])-h)/2)|0);y2=y1+h;}}if((Cp===1)||(Cp===2)){var Bj=((AL&0x4)===0x4);var
Bk=((AL&0x8)===0x8);var Dd=((AL&0x1)===0x1);if(Dd){x1=U[0];x2=U[2];}else if(Bj&&
!Bk){x1=U[0];x2=x1+w;}else if(Bk&&!Bj){x2=U[2];x1=x2-w;}else{x1=U[0]+((((U[2]-U[
0])-w)/2)|0);x2=x1+w;}}}T.isEmpty=(x1>=x2)||(y1>=y2);if(((this.G&0x100)===0x100)
)this.R=[x1,y1,x2,y2];else{this.K([x1,y1,x2,y2]);this.AS=T;}return[x2-x1,y2-y1];
},IR:function(aOffset,Je){if(Je)this.R=B.aam(this.R,aOffset);else this.K(B.aam(this.
R,aOffset));},GetExtent:function(){return this.R;},K:function(E){var A;if(B.z9(E
,this.R))return;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.R);this.AS=null;
this.R=E;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.R);if((!!this.I&&((this.
G&0x400)===0x400))&&!((this.I.G&0x2000)===0x2000)){this.G=this.G|0x800;this.I.G=
this.I.G|0x4000;B.ow([A=this.I,A.Cw],this);}},_Init:function(aArg){C.Cf._Init.call(
this,aArg);this.__proto__=C.BL;},_className:"Core::RectView"};C.P={AK:null,Bb:null
,MF:null,Bx:null,BA:null,Eb:null,Iq:null,C4:null,F$:255,AG:function(aArg){this.CL(
);},Dz:function(A4,aClip,aOffset,AP,aBlend){var A;AP=((AP+1)*this.F$)>>8;aBlend=
aBlend&&((this.G&0x2)===0x2);if(!this.Bx||(A4.AR===this))this.QY(A4,aClip,B.aak(
aOffset,this.R.slice(0,2)),AP,aBlend);else{var By=255|(255<<8)|(255<<16)|((AP&0xFF
)<<24);this.Bx.Update();A4.PH(aClip,this.Bx,0,B.aam(this.R,aOffset),A6,By,By,By,
By,aBlend);}},EI:function(Ar,X,CP,ES,EW,EV){var A;var L=this.Bb;var H8=null;var S=
A2;var Dr=null;var Id=!!this.Eb&&(!!this.Eb.Do||!!this.Eb.AK);if(((A=B.kz(Ar,this.
R))[0]>=A[2])||(A[1]>=A[3]))return null;Ar=B.aal(Ar,this.R.slice(0,2));if(!!EW){
L=EW;while(!!L&&(L.I!==this))L=L.I;}while(!!L){if(((L.G&0x400)===0x400)&&!Dr){Dr=
L.An;while(!!Dr&&!((Dr.G&0x200)===0x200))Dr=Dr.An;if(!!Dr)S=B.kz(Ar,Dr.GetExtent(
));else S=A2;}if(Dr===L){Dr=null;S=A2;}if((((((L.G&0x8)===0x8)&&((L.G&0x10)===0x10
))&&!((L.G&0x40000)===0x40000))&&!((L.G&0x20000)===0x20000))&&(!((L.G&0x10000)===
0x10000)||((this.BA.AR===L)&&!Id))){var B3=L.GetExtent();var Ms=ES;var H4=null;if(
Ms===L)Ms=null;if(((L.G&0x400)===0x400)){if(!(((A=B.kz(B3,S))[0]>=A[2])||(A[1]>=
A[3])))H4=L.EI(S,X,CP,Ms,EW,EV);}else if(!(((A=B.kz(B3,Ar))[0]>=A[2])||(A[1]>=A[
3]))||(ES===L))H4=L.EI(Ar,X,CP,Ms,EW,EV);L=L.An;if(!!H4){if(!H8||((H4.JH<H8.JH)&&(
H4.JH>=0)))H8=H4;if(!H4.JH)L=null;}}else L=L.An;EW=null;}return H8;},JC:function(
Ar){var A;var Au;var L=this.AK;var KP=A2;var Le=true;var result=(Ar=Au=B.aal(Ar,
this.R.slice(0,2)),Au);while(!!L){if(((L.G&0x200)===0x200)){var Ld=(C.Kd.isPrototypeOf(
L)?L:null);KP=B.kz(Ar,Ld.R);Le=((Ld.G&0x1)===0x1);}if(((L.G&0x1)===0x1)){if(((L.
G&0x400)===0x400)){if(Le){var S=B.kz(L.GetExtent(),KP);if(!((S[0]>=S[2])||(S[1]>=
S[3])))result=B.vS(result,L.JC(S));}}else{var S=B.kz(L.GetExtent(),Ar);if(!((S[0
]>=S[2])||(S[1]>=S[3])))result=B.vS(result,L.JC(S));}}L=L.Ac;}return B.kz(B.aam(
result,this.R.slice(0,2)),this.R);},Bd:function(Gp,H1){var A;var V2=this.G;C.BL.
Bd.call(this,Gp,H1);var G8=this.G^V2;if(!!this.C4&&((G8&0x40)===0x40)){if(((this.
G&0x40)===0x40))this.C4.Bd(0x40,0x0);else this.C4.Bd(0x0,0x40);}if(!!this.BA&&((
G8&0x40)===0x40)){if(((this.G&0x40)===0x40)&&((this.BA.AR.G&0x14)===0x14))this.BA.
AR.Bd(0x40,0x0);else this.BA.AR.Bd(0x0,0x40);}if(!!G8){this.G=this.G|0x8000;B.ow([
this,this.Cw],this);}},K:function(E){var A;if(B.z9(E,this.R))return;var Hc=[(A=this.
R)[2]-A[0],A[3]-A[1]];var MG=[E[2]-E[0],E[3]-E[1]];var It=!B.z8(Hc,MG);if(It&&!!
this.Bx){this.Bx.J$(MG);B.vv(this,0);B.vv(this.Bx,0);}C.BL.K.call(this,E);if((It&&(
Hc[0]>0))&&(Hc[1]>0)){var Aj=[].concat(A6,Hc);var L=this.AK;while(!!L){if((!L.AS&&(
L.C7!==0x14))&&!((L.G&0x400)===0x400))L.Jq(Aj,null);L=L.Ac;}}if(It){this.G=this.
G|0x5000;B.ow([this,this.Cw],this);}},RK:function(Ay){var Rc=(C.KeyEvent.isPrototypeOf(
Ay)?Ay:null);var EB=this.MF;if(!Rc)return null;while(!!EB&&(!EB.A8||!EB.Bv(Rc)))
EB=EB.Ac;return EB;},WS:function(N){if(!!this.Bx){this.Bx.AR=this;var S=B.aal(this.
JC(B.aam(this.Bx.DX,this.R.slice(0,2))),this.R.slice(0,2));this.Bx.Lx(S,S,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.QY(this.Bx,S,A6,255,true);this.Bx.
AR=null;}},QY:function(A4,aClip,aOffset,AP,aBlend){var A;var L=this.AK;var KP=A2;
var Le=true;this.R4(A4,aClip,aOffset,AP,aBlend);while(!!L){if(((L.G&0x200)===0x200
)){var Ld=(C.Kd.isPrototypeOf(L)?L:null);KP=B.kz(aClip,B.aam(Ld.R,aOffset));Le=((
Ld.G&0x1)===0x1);}if(((L.G&0x1)===0x1)){if(((L.G&0x400)===0x400)){if(Le){var S=B.
kz(B.aam(L.GetExtent(),aOffset),KP);if(!((S[0]>=S[2])||(S[1]>=S[3])))L.Dz(A4,S,aOffset
,AP,aBlend);}}else{var S=B.kz(B.aam(L.GetExtent(),aOffset),aClip);if(!((S[0]>=S[
2])||(S[1]>=S[3])))L.Dz(A4,S,aOffset,AP,aBlend);}}L=L.Ac;}this.R6(A4,aClip,aOffset
,AP,aBlend);},WD:function(){var A;var O5=((this.G&0x1000)===0x1000);var Gx=[0,0,(
A=this.R)[2]-A[0],A[3]-A[1]];var FN=false;var Jo=A2;var O3=A2;var L=this.Bb;var Dr=
null;while(!!L){if(((L.G&0x800)===0x800)){FN=true;L.G=L.G&~0x800;}if(FN&&((L.G&0x200
)===0x200))FN=false;L=L.An;}FN=false;L=this.AK;if(O5){this.G=this.G&~0x1000;O5=!((
Gx[0]>=Gx[2])||(Gx[1]>=Gx[3]));}this.G=this.G|0x2000;while(!!L){if(((L.G&0x400)===
0x400)){if(!!L.AS&&(L.AS.He!==Dr))L.AS=null;if((!L.AS&&FN)&&(L.C7!==0x14))L.Jq(O3
,Dr);}if(!!L.AS){if(O5&&!((L.G&0x400)===0x400))L.JD(Gx,0);if(FN&&((L.G&0x400)===
0x400))L.JD(O3,0);}if(((L.G&0x200)===0x200)){FN=((L.G&0x1000)===0x1000);Dr=(C.Kd.
isPrototypeOf(L)?L:null);if(FN){L.G=L.G&~0x1000;Jo=Dr.R;O3=Jo;FN=!((Jo[0]>=Jo[2]
)||(Jo[1]>=Jo[3]));}if(FN)this.At(Dr.R);}L=L.Ac;}this.G=this.G&~0x2000;this.Qu([
Gx[2]-Gx[0],Gx[3]-Gx[1]]);},Cw:function(N){var A;var WU=((this.G&0x1000)===0x1000
);if(((this.G&0x4000)===0x4000)){this.G=this.G&~0x4000;this.WD();}if(((this.G&0x8000
)===0x8000)||WU){this.G=this.G&~0x8000;this.Gn(this.G);}},CX:function(E){var A;if(
!!E&&(E.I!==this))throw new Error(Dm);if(!!E&&!((E.G&0x14)===0x14))E=null;if(!!E&&((
E.G&0x10000)===0x10000))E=null;if(E===this.C4)return;if(!!this.C4)this.C4.Bd(0x0
,0x60);this.C4=E;if(!!E){if(((this.G&0x40)===0x40))E.Bd(0x60,0x0);else E.Bd(0x20
,0x0);}},J7:function(E){var A;if(!!this.Bx===E)return;if(E){this.Bx=B._NewObject(
B.Graphics.Canvas,0);this.Bx.J$([(A=this.R)[2]-A[0],A[3]-A[1]]);this.Bx.LK=[this
,this.WS];}else{this.Bx.LK=null;this.Bx.J$(A6);this.Bx=null;}if(!!this.I&&((this.
G&0x1)===0x1))this.I.At(this.R);B.vv(this,0);},Av:function(E){if(E)this.Bd(0x10,
0x0);else this.Bd(0x0,0x10);},Kc:function(E){var A;if(E>255)E=255;if(E<0)E=0;if(
E===this.F$)return;this.F$=E;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.R);
},N5:function(){var A;return((this.G&0x1)===0x1);},AQ:function(E){if(E)this.Bd(0x1
,0x0);else this.Bd(0x0,0x1);},R6:function(A4,aClip,aOffset,AP,aBlend){},R4:function(
A4,aClip,aOffset,AP,aBlend){},GetMinimalSize:function(){return A6;},Qs:function(
B8,DF,Go,ET,EU,KK,Ez,FG,DE,DC,DD){var A;if(!this.BA){this.Tq(B8,DF,Go,ET,EU,null
,null,DE,DC,DD);return;}var Hb=this.BA;var Cc=Hb.Ac;if(((B8.G&0x10000)===0x10000
)&&(this.BA.AR!==B8))throw new Error(Dn);var E$=B._NewObject(C.M9,0);var Dq=Hb.Dq;
var Dw=null;var Cl=null;if(!!Cc){Dw=Cc.Dw;Cl=Cc.Cl;}if(!!Cc&&!!Hb.Ip)Dw=Hb.Ip;if(
!!Cc&&!!Ez)Cl=Ez;if(!!KK)Dq=KK;if(!DF)DF=B._GetAutoObject(B.abl.Kv);if(!Go)Go=DF;
if(!EU)EU=ET;if(!ET)ET=EU;E$.Dq=Go;E$.Cl=ET;E$.Dw=EU;E$.Ip=FG;E$.AR=B8;E$.Ac=this.
BA.Ac;this.BA.Ac=null;this.BA=E$;if(this.C4===B8)this.CX(null);Hb.AR.Bd(0x0,0x10040
);if(((this.G&0x40)===0x40)&&((B8.G&0x4)===0x4))B8.Bd(0x10040,0x0);else B8.Bd(0x10000
,0x0);if(!!Cl){this.C3(Cc.AR,Cl.Lt(),null,null,DD);this.C3(Hb.AR,Dq.GJ(),null,null
,true);this.C3(E$.AR,DF.GK(),DE,DC,true);}else if(!!Dw){this.C3(Cc.AR,Dw.Lu(),null
,null,DD);this.C3(Hb.AR,Dq.GJ(),null,null,true);this.C3(E$.AR,DF.GK(),DE,DC,true
);}else if(!!Dq){this.C3(Hb.AR,Dq.GJ(),null,null,DD);this.C3(E$.AR,DF.GK(),DE,DC
,true);}else this.C3(E$.AR,DF.GK(),DE,DC,DD);},R3:function(B8,KK,Ez,FG,DE,DC,DD){
var A;if(!this.BA)return;if(!B8)return;var B2=this.BA;var Cc=this.BA.Ac;var Jt=null;
while((!!B2&&(B2.AR!==B8))&&!!B2.Ac){Jt=B2;B2=Cc;Cc=B2.Ac;}if(!B2||(B2.AR!==B8))
throw new Error(ER);if(!Jt){this.BA=Cc;B2.Ac=null;}else{Jt.Ac=Cc;B2.Ac=null;}B2.
AR.Bd(0x0,0x10040);if(((((this.G&0x40)===0x40)&&!!Cc)&&!Jt)&&((Cc.AR.G&0x4)===0x4
))Cc.AR.Bd(0x40,0x0);var Dq=B2.Dq;var Dw=null;var Cl=null;if(!!Cc)Dw=Cc.Dw;if(!!
Cc&&!!B2.Ip)Dw=B2.Ip;if(!!Cc&&!!FG)Dw=FG;if(!!Jt&&!!Cc)Cl=Cc.Cl;if((!!Jt&&!!Cc)&&
!!Ez)Cl=Ez;if(!!KK)Dq=KK;if(!!Cl){this.C3(Cc.AR,Cl.Lt(),null,null,DD);this.C3(B2.
AR,Dq.GJ(),DE,DC,true);}else if(!!Dw){this.C3(Cc.AR,Dw.Lu(),null,null,DD);this.C3(
B2.AR,Dq.GJ(),DE,DC,true);}else this.C3(B2.AR,Dq.GJ(),DE,DC,DD);},Tq:function(B8
,DF,Go,ET,EU,Ez,FG,DE,DC,DD){var A;if(!B8)return;if(!!this.BA&&(this.BA.AR===B8)
){this.Qs(B8,DF,Go,ET,EU,null,Ez,FG,DE,DC,DD);return;}if(((B8.G&0x10000)===0x10000
))throw new Error(Dn);var B2=B._NewObject(C.M9,0);if(!!this.BA&&!this.BA.Cl){if(
!FG)FG=Ez;if(!Ez)Ez=FG;}var Cl=null;if(!!this.BA)Cl=this.BA.Cl;if(!!this.BA&&!!Ez
)Cl=Ez;if(!DF)DF=B._GetAutoObject(B.abl.Kv);if(!Go)Go=DF;if(!EU)EU=ET;if(!ET)ET=
EU;B2.Dq=Go;B2.Cl=ET;B2.Dw=EU;B2.Ip=FG;if(this.C4===B8)this.CX(null);if(!!this.BA
)this.BA.AR.Bd(0x0,0x40);if(((this.G&0x40)===0x40)&&((B8.G&0x4)===0x4))B8.Bd(0x10040
,0x0);else B8.Bd(0x10000,0x0);B2.AR=B8;B2.Ac=this.BA;this.BA=B2;if(!!Cl){this.C3(
this.BA.Ac.AR,Cl.Lt(),null,null,DD);this.C3(B8,DF.GK(),DE,DC,true);}else this.C3(
B8,DF.GK(),DE,DC,DD);},NT:function(){var A;if(((this.G&0x40)===0x40))return;if(((
this.G&0x80)===0x80))return;if(((this.G&0x10000)===0x10000)){if(!!this.I)this.I.
NT();return;}if(!!this.I&&(this.I.C4!==this))this.I.CX(this);if(!!this.I)this.I.
NT();},Sa:function(C9){var A;return(A=C9)&&((this.G&A)===A);},P3:function(CD){var
tmp=this;while(!!tmp){CD=B.aaj(CD,tmp.R.slice(0,2));tmp=tmp.I;}return CD;},DispatchEvent:
function(Ay){var A;var L=this.C4;var Al=(C.P.isPrototypeOf(L)?L:null);var Bq=null;
var Id=!!this.Eb&&(!!this.Eb.Do||!!this.Eb.AK);if(!!L&&((((L.G&0x10000)===0x10000
)||((L.G&0x40000)===0x40000))||((L.G&0x20000)===0x20000))){L=null;Al=null;}if(!!
this.BA&&!Id)Bq=this.BA.AR.DispatchEvent(Ay);if(!Bq&&!!Al)Bq=Al.DispatchEvent(Ay
);else if(!Bq&&!!L)Bq=L.Bv(Ay);if(!Bq)Bq=this.Bv(Ay);if(!Bq)Bq=this.RK(Ay);return Bq;
},BroadcastEventAtPosition:function(Ay,QQ,aFilter){var A;var L=this.Bb;var Bq=null;
while(!!L&&!Bq){if((!aFilter||((A=aFilter)&&((L.G&A)===A)))&&B.vt(L.GetExtent(),
QQ)){var Al=(C.P.isPrototypeOf(L)?L:null);if(!!Al)Bq=Al.BroadcastEventAtPosition(
Ay,B.aaj(QQ,Al.R.slice(0,2)),aFilter);else Bq=L.Bv(Ay);}L=L.An;}if(!Bq)Bq=this.Bv(
Ay);return Bq;},BroadcastEvent:function(Ay,aFilter){var A;var L=this.Bb;var Bq=null;
while(!!L&&!Bq){if(!aFilter||((A=aFilter)&&((L.G&A)===A))){var Al=(C.P.isPrototypeOf(
L)?L:null);if(!!Al)Bq=Al.BroadcastEvent(Ay,aFilter);else Bq=L.Bv(Ay);}L=L.An;}if(
!Bq)Bq=this.Bv(Ay);if(!Bq)Bq=this.RK(Ay);return Bq;},Qu:function(aSize){},Gn:function(
C9){},CL:function(){this.G=this.G|0x8000;B.ow([this,this.Cw],this);},At:function(
Ar){var A;var Al=this;while(!!Al&&!((Ar[0]>=Ar[2])||(Ar[1]>=Ar[3]))){var Jj=Al.Bx;
if(!Al.I&&(Al!==this)){Al.At(Ar);return;}if(!!Jj){var V0=Jj.DX;Jj.DX=B.vS(Jj.DX,
Ar);if(!B.z9(V0,Jj.DX)){B.vv(Al,0);B.vv(Jj,0);}}if(!((Al.G&0x1)===0x1))return;Ar=
B.kz(B.aam(Ar,Al.R.slice(0,2)),Al.R);Al=Al.I;}},PL:function(Y,aFilter){var A;if(
!Y||(Y.I!==this))return null;var Ha=Y.Ac;var Hg=Y.An;var K5=0x10000;if(((aFilter&
0x10000)===0x10000))K5=0x0;while(!!Ha||!!Hg){if((!!Ha&&(!aFilter||((A=aFilter)&&((
Ha.G&A)===A))))&&(!K5||!((A=K5)&&((Ha.G&A)===A))))return Ha;if((!!Hg&&(!aFilter||((
A=aFilter)&&((Hg.G&A)===A))))&&(!K5||!((A=K5)&&((Hg.G&A)===A))))return Hg;if(!!Ha
)Ha=Ha.Ac;if(!!Hg)Hg=Hg.An;}return null;},C3:function(FE,A7,DE,DC,DD){var A;if(!
FE)return;if(!A7)throw new Error(FB);if((!!A7.P||!!A7.I)||!!A7.C0)throw new Error(
FC);if(!!FE.I&&(FE.I!==this))throw new Error(HZ);if(!this.Eb)this.Eb=B._NewObject(
C.Os,0);A7.I=this;A7.P=FE;A7.MH=DC;A7.Pf=DE;if(!!FE.Iq)FE.Iq.C0.Tt(FE.Iq);FE.Iq=
A7;FE.G=FE.G|0x20000;if((DD&&!!this.Eb.Bb)&&!this.Eb.Bb.Ns())(B.abl.Lw.isPrototypeOf(
A=this.Eb.Bb)?A:null).PC(A7);else{var C0=B._NewObject(B.abl.Lw,0);C0.PC(A7);this.
Eb.Qp(C0,false);}},Ks:function(Y){var A;if(!Y)throw new Error(KC);if(Y.I!==this)
throw new Error(I$);if(!Y.Ac)return;var Ji=this.Bb;if(((Ji===Y)||!Ji)||(Ji.Ac===
Y))return;if(((Y.G&0x401)===0x401)){if(!!Y.An&&!!Y.AS)Y.An.G=Y.An.G|0x800;Y.G=Y.
G|0x800;this.G=this.G|0x4000;B.ow([this,this.Cw],this);}if(((Y.G&0x200)===0x200)
){if(!!Y.An)Y.An.G=Y.An.G|0x800;this.G=this.G|0x4000;B.ow([this,this.Cw],this);}
if(!!Y.An)Y.An.Ac=Y.Ac;else this.AK=Y.Ac;Y.Ac.An=Y.An;Y.An=Ji;Y.Ac=Ji.Ac;Ji.Ac=Y;
if(!!Y.Ac)Y.Ac.An=Y;else this.Bb=Y;if(((Y.G&0x1)===0x1))this.At(Y.GetExtent());}
,Ts:function(){var A;var Ix=A2;while(!!this.AK){var L=this.AK;if(((L.G&0x1)===0x1
))Ix=B.vS(Ix,L.GetExtent());this.AK=this.AK.Ac;L.AS=null;L.I=null;L.Ac=null;L.An=
null;}this.AK=null;this.Bb=null;this.CX(null);if(!((Ix[0]>=Ix[2])||(Ix[1]>=Ix[3]
)))this.At(Ix);},GW:function(Y){var A;if(!Y)throw new Error(Oz);if(Y.I!==this)throw new
Error(I$);if((((Y.G&0x401)===0x401)&&!!Y.An)&&!!Y.AS){Y.An.G=Y.An.G|0x800;this.G=
this.G|0x4000;B.ow([this,this.Cw],this);}if(((Y.G&0x200)===0x200)){if(!!Y.An)Y.An.
G=Y.An.G|0x800;this.G=this.G|0x4000;B.ow([this,this.Cw],this);}Y.AS=null;if(this.
C4===Y)this.CX(this.PL(Y,0x14));if(!!Y.An)Y.An.Ac=Y.Ac;if(!!Y.Ac)Y.Ac.An=Y.An;if(
this.AK===Y)this.AK=Y.Ac;if(this.Bb===Y)this.Bb=Y.An;Y.I=null;Y.Ac=null;Y.An=null;
if(((Y.G&0x1)===0x1))this.At(Y.GetExtent());},M:function(Y,Jf){var A;if(!Y)throw new
Error(OA);if(!!Y.I)throw new Error(OB);var Gq=null;if((Jf<0)&&!!this.Bb){Gq=this.
Bb;Jf=Jf+1;}while(((Jf<0)&&!!Gq)&&!!Gq.An){Gq=Gq.An;Jf=Jf+1;}if(!Gq){Y.I=this;Y.
An=this.Bb;if(!!this.Bb)this.Bb.Ac=Y;if(!this.AK)this.AK=Y;this.Bb=Y;}else{Y.I=this;
Y.An=Gq.An;Y.Ac=Gq;Gq.An=Y;if(!!Y.An)Y.An.Ac=Y;else this.AK=Y;}if(((Y.G&0x1)===0x1
))this.At(Y.GetExtent());if(((!this.C4&&((Y.G&0x4)===0x4))&&((Y.G&0x10)===0x10))&&
!((Y.G&0x10000)===0x10000))this.CX(Y);if(((Y.G&0x401)===0x401)){Y.G=Y.G|0x800;this.
G=this.G|0x4000;B.ow([this,this.Cw],this);}if(((Y.G&0x200)===0x200)){Y.G=Y.G|0x800;
this.G=this.G|0x4000;B.ow([this,this.Cw],this);}},_Init:function(aArg){C.BL._Init.
call(this,aArg);this.__proto__=C.P;this.G=0x1F;this.AG(aArg);},_Mark:function(D){
var A;C.BL._Mark.call(this,D);if((A=this.AK)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Bb)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.MF)&&(A._cycle!=D))
A._Mark(A._cycle=D);if((A=this.Bx)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
BA)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Eb)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Iq)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.C4)&&(A._cycle!=
D))A._Mark(A._cycle=D);},_className:"Core::Group"};C.Root={Dt:null,AU:B.aan(10,null
,null),Jk:null,Gs:null,Ln:0,Bz:0,Cq:B.aan(10,0,null),Mq:B.aan(10,B.vx,null),Ea:B.
aan(10,0,null),FK:B.aan(10,B.vw,null),Jm:B.aan(10,0,null),Gr:B.aan(10,B.vw,null)
,D$:B.aan(10,B.vw,null),Dp:B.aan(10,B.vw,null),EY:B.aan(10,B.vw,null),AI:0,MC:0,
MB:0,CT:B.aan(4,0,null),BU:B.aan(4,B.vx,null),BT:0,K0:0,Jr:0,O6:true,AG:function(
aArg){if(!!!this.H){var obj=this;B.aaG(obj);}},Hu:function(){return this;},Dz:function(
A4,aClip,aOffset,AP,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.mr;if(
!fullScreenUpdate)A4.Lx(aClip,B.aam(B.aam(aClip,aOffset),this.R.slice(0,2)),0x00000000
,0x00000000,0x00000000,0x00000000,false);C.P.Dz.call(this,A4,aClip,aOffset,AP,aBlend
);},Bd:function(Gp,H1){var A;C.P.Bd.call(this,Gp,H1);if(!this.I&&(((Gp&0x1)===0x1
)||((H1&0x1)===0x1)))this.At([0,0,(A=this.R)[2]-A[0],A[3]-A[1]]);if(!this.I&&(((
Gp&0x2)===0x2)||((H1&0x2)===0x2)))this.At([0,0,(A=this.R)[2]-A[0],A[3]-A[1]]);},
CX:function(E){if((E!==null)||!E)C.P.CX.call(this,E);},J7:function(E){var A;var VZ=
this.Bx;C.P.J7.call(this,E);if(((VZ!==this.Bx)&&!this.I)&&((this.G&0x1)===0x1))this.
At([0,0,(A=this.R)[2]-A[0],A[3]-A[1]]);},Kc:function(E){var A;var V3=this.F$;C.P.
Kc.call(this,E);if(((V3!==this.F$)&&!this.I)&&((this.G&0x1)===0x1))this.At([0,0,(
A=this.R)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(Ay){if(!!Ay){Ay.JX=!!this.
Bz;if(!!this.Bz)Ay.Ax=this.Bz;}var Bq;Bq=C.P.DispatchEvent.call(this,Ay);this.Bz=
0;return Bq;},BroadcastEvent:function(Ay,aFilter){if(!!Ay){Ay.JX=!!this.Bz;if(!!
this.Bz)Ay.Ax=this.Bz;}var Bq=C.P.BroadcastEvent.call(this,Ay,aFilter);this.Bz=0;
return Bq;},At:function(Ar){var A;if(this.Ln>0)throw new Error(OC);if(!!this.Bx&&
!this.I){if(((A=this.Bx.DX)[0]>=A[2])||(A[1]>=A[3])){B.vv(this,0);B.vv(this.Bx,0
);}this.Bx.DX=B.vS(this.Bx.DX,Ar);}var fullScreenUpdate=false;fullScreenUpdate=B.
mr;if(fullScreenUpdate)Ar=[0,0,(A=this.R)[2]-A[0],A[3]-A[1]];if(!!this.I){C.P.At.
call(this,Ar);return;}Ar=B.kz(B.aam(Ar,this.R.slice(0,2)),this.R);if((Ar[0]>=Ar[
2])||(Ar[1]>=Ar[3]))return;var i;for(i=0;i<this.BT;i=i+1)if(!(((A=B.kz(this.BU.Get(
i),Ar))[0]>=A[2])||(A[1]>=A[3]))){this.BU.Set(i,B.vS(this.BU.Get(i),Ar));this.CT.
Set(i,B.zS(this.BU.Get(i)));return;}if(this.BT<3){this.BU.Set(this.BT,Ar);this.CT.
Set(this.BT,B.zS(Ar));this.BT=this.BT+1;return;}var j;var Ds;var KZ=0;var K1=0;var
QS=2147483647;this.BU.Set(this.BT,Ar);this.CT.Set(this.BT,B.zS(Ar));for(j=0;j<=this.
BT;j=j+1)for(Ds=j+1;Ds<=this.BT;Ds=Ds+1){var MU=B.zS(B.vS(this.BU.Get(j),this.BU.
Get(Ds)));var RJ=((MU<<8)/(this.CT.Get(j)+this.CT.Get(Ds)))|0;if(RJ<QS){QS=RJ;KZ=
j;K1=Ds;}}this.BU.Set(KZ,B.vS(this.BU.Get(KZ),this.BU.Get(K1)));this.CT.Set(KZ,B.
zS(this.BU.Get(KZ)));if(K1!==this.BT){this.BU.Set(K1,this.BU.Get(this.BT));this.
CT.Set(K1,this.CT.Get(this.BT));}},VP:function(){var Ct=B._NewObject(C.II,0);Ct.
JX=!!this.Bz;if(!!this.Bz)Ct.Ax=this.Bz;return Ct;},H3:function(){var Ct=B._NewObject(
C.Fi,0);Ct.JX=!!this.Bz;if(!!this.Bz)Ct.Ax=this.Bz;return Ct;},Jl:function(){var
Ct=B._NewObject(C.JF,0);Ct.JX=!!this.Bz;if(!!this.Bz)Ct.Ax=this.Bz;return Ct;},VQ:
function(N){var i;var H8=false;for(i=0;i<10;i=i+1)if(!!this.AU.Get(i)){var pos=this.
Dp.Get(i);var Al=this.AU.Get(i).I;while(!!Al&&(Al!==this)){pos=B.aaj(pos,Al.R.slice(
0,2));Al=Al.I;}if(!Al&&(this.AU.Get(i)!==this)){var tmp=this.AU.Get(i);this.AI=i;
this.AU.Set(i,null);tmp.Bv(this.H3().InitializeUp(i,this.Gr.Get(i),this.FK.Get(i
),this.Ea.Get(i),this.Cq.Get(i)+1,this.D$.Get(i),false,this.Dp.Get(i),this.EY.Get(
i)));this.BroadcastEvent(this.Jl().InitializeUp(i,this.Cq.Get(i)+1,false,tmp,this.
Dp.Get(i)),0x18);}else{this.Ea.Set(i,(this.Gs.Ax-this.Jm.Get(i))|0);if(this.Ea.Get(
i)<10)this.Ea.Set(i,10);this.AI=i;this.AU.Get(i).Bv(this.H3().InitializeHold(i,pos
,this.FK.Get(i),this.Ea.Get(i),this.Cq.Get(i)+1,this.D$.Get(i),this.Dp.Get(i),this.
EY.Get(i)));H8=true;}}if(!H8)this.Gs.Av(false);},GetFPS:function(){var ticksCount=
0;var Q1=0;ticksCount=((new Date).getTime()-B.vs)|0;if(!!this.MC&&(ticksCount>this.
MC))Q1=((this.MB*1000)/((ticksCount-this.MC)|0))|0;this.MB=0;this.MC=ticksCount;
return Q1;},Update:function(){var A;if(!this.Jk)this.Jk=B._NewObject(B.Graphics.
Canvas,0);this.Jk.J$([(A=this.R)[2]-A[0],A[3]-A[1]]);this.Jk.Update();return this.
UpdateGE20(this.Jk);},UpdateGE20:function(A4){if(!this.BeginUpdate())return A2;var
FU=this.UpdateCanvas(A4,A6);this.EndUpdate();return FU;},EndUpdate:function(){if(
this.BT>0){this.MB=this.MB+1;this.BT=0;}},UpdateCanvas:function(A4,aOffset){var A;
var FU=A2;var VK=[].concat(aOffset,B.aak(A4.FrameSize,aOffset));var i;var j=this.
BT;this.Ln=this.Ln+1;A4.AR=this;for(i=0;(i<j)&&(i<4);i=i+1)if(this.CT.Get(i)>0){
this.Dz(A4,B.aal(this.BU.Get(i),aOffset),[-aOffset[0],-aOffset[1]],255,true);FU=
B.vS(FU,B.kz(VK,this.BU.Get(i)));}else j=j+1;A4.AR=null;this.Ln=this.Ln-1;if(!((
FU[0]>=FU[2])||(FU[1]>=FU[3])))return B.aal(FU,aOffset);else return FU;},GetUpdateRegion:
function(L$){var i;var j=this.BT;if(L$<0)return A2;for(i=0;(i<j)&&(i<4);i=i+1)if(
!this.CT.Get(i)){j=j+1;L$=L$+1;}else if(i===L$)return this.BU.Get(i);return A2;}
,BeginUpdate:function(){var A;var i;if(!!this.BT&&!B.z9(this.BU.Get(0),[0,0,(A=this.
R)[2]-A[0],A[3]-A[1]])){var RR=B.aan(3,B.vx,null);var RQ=this.BT;for(i=0;i<RQ;i++
)RR.Set(i,this.BU.Get(i));for(i=0;i<RQ;i++){var RL=B.aam(RR.Get(i),this.R.slice(
0,2));var RM=this.JC(RL);if(!B.z9(RL,RM))this.At(B.aal(RM,this.R.slice(0,2)));}}
var j;var Ds;for(j=0;j<(this.BT-1);j++)if(this.CT.Get(j)>0)for(Ds=j+1;Ds<this.BT;
Ds++)if(this.CT.Get(Ds)>0){var MU=B.zS(B.vS(this.BU.Get(j),this.BU.Get(Ds)));if(((
MU-this.CT.Get(j))-this.CT.Get(Ds))<0){this.BU.Set(j,B.vS(this.BU.Get(j),this.BU.
Get(Ds)));this.CT.Set(j,MU);this.CT.Set(Ds,0);}}for(i=this.BT-1;i>=0;i--)if(!this.
CT.Get(i))this.BT=this.BT-1;return this.BT;},DoesNeedUpdate:function(){if(this.BT>
0)return true;return false;},Initialize:function(aSize){this.K([].concat(A6,aSize
));if(this.O6)this.G=this.G|0x60;else this.G=this.G|0x20;this.At(this.R);return this;
},SetRootFocus:function(OL){if(OL===this.O6)return false;this.O6=OL;if(!OL)this.
Bd(0x0,0x40);else this.Bd(0x40,0x0);return true;},SetUserInputTimestamp:function(
VB){this.Bz=VB;},DriveKeyboardHitting:function(BZ,KG,Ex){var A;var Po=!!this.Dt;
if(!!this.Dt&&((!Ex||(this.K0!==BZ))||(this.Jr!==KG))){var Ct=null;var L=(C.Cf.isPrototypeOf(
A=this.Dt)?A:null);var EB=(C.CM.isPrototypeOf(A=this.Dt)?A:null);if(!!this.K0)Ct=
B._NewObject(C.KeyEvent,0).Initialize(this.K0,false);if(this.Jr!==0x00)Ct=B._NewObject(
C.KeyEvent,0).Initialize2(this.Jr,false);if(!!EB)EB.Bv(Ct);else if(!!L)L.Bv(Ct);
this.K0=0;this.Jr=0x00;this.Dt=null;}if(!!this.Dt){var Ct=null;var L=(C.Cf.isPrototypeOf(
A=this.Dt)?A:null);var EB=(C.CM.isPrototypeOf(A=this.Dt)?A:null);if(!!BZ)Ct=B._NewObject(
C.KeyEvent,0).Initialize(BZ,true);if(this.Jr!==0x00)Ct=B._NewObject(C.KeyEvent,0
).Initialize2(KG,true);if(!!EB)EB.Bv(Ct);else if(!!L)L.Bv(Ct);}if(!this.Dt&&Ex){
if(!!BZ)this.Dt=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize(BZ,true
));if(KG!==0x00)this.Dt=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize2(
KG,true));if(!(C.CM.isPrototypeOf(A=this.Dt)?A:null)&&!(C.Cf.isPrototypeOf(A=this.
Dt)?A:null))this.Dt=null;this.K0=BZ;this.Jr=KG;Po=Po||!!this.Dt;}this.Bz=0;return Po;
},DriveCursorMovement:function(B0){return this.DriveMultiTouchMovement(this.AI,B0
);},DriveMultiTouchMovement:function(X,B0){if((X<0)||(X>9)){this.Bz=0;return false;
}var Bc=B.aaj(B0,this.Dp.Get(X));this.Dp.Set(X,B0);if(!this.AU.Get(X)||B.z8(Bc,A6
)){this.Bz=0;return false;}var pos=B0;var Al=this.AU.Get(X).I;while(!!Al&&(Al!==
this)){pos=B.aaj(pos,Al.R.slice(0,2));Al=Al.I;}if(!Al&&(this.AU.Get(X)!==this)){
var tmp=this.AU.Get(X);this.AI=X;this.AU.Set(X,null);tmp.Bv(this.H3().InitializeUp(
X,this.Gr.Get(X),this.FK.Get(X),this.Ea.Get(X),this.Cq.Get(X)+1,this.D$.Get(X),false
,this.Dp.Get(X),this.EY.Get(X)));this.BroadcastEvent(this.Jl().InitializeUp(X,this.
Cq.Get(X)+1,false,tmp,B0),0x18);}else{this.Gr.Set(X,pos);this.AI=X;this.AU.Get(X
).Bv(this.VP().Initialize(X,pos,this.FK.Get(X),Bc,this.Ea.Get(X),this.Cq.Get(X)+
1,this.D$.Get(X),B0,this.EY.Get(X)));}this.Bz=0;return true;},DriveCursorHitting:
function(Ex,X,B0){return this.DriveMultiTouchHitting(Ex,X,B0);},DriveMultiTouchHitting:
function(Ex,X,B0){if((X<0)||(X>9)){this.Bz=0;return false;}var ticksCount=this.Bz;
if(!ticksCount)ticksCount=((new Date).getTime()-B.vs)|0;var WK=this.Bz;this.DriveMultiTouchMovement(
X,B0);B0=this.Dp.Get(X);this.Bz=WK;if(Ex)this.EY.Set(X,B0);if(Ex&&!this.AU.Get(X
)){var BS;var pos=B0;if(B.vt(this.Mq.Get(X),B0)&&((ticksCount-this.Jm.Get(X))<=250
))this.Cq.Set(X,this.Cq.Get(X)+1);else this.Cq.Set(X,0);this.Mq.Set(X,B.aam(KD,B0
));this.Jm.Set(X,ticksCount);BS=this.EI(B.aam(KD,B0),X,this.Cq.Get(X)+1,null,null
,0x0);if(!!BS){this.BroadcastEvent(this.Jl().InitializeDown(X,this.Cq.Get(X)+1,false
,BS.Cf,B0),0x18);this.AU.Set(X,BS.Cf);this.D$.Set(X,BS.AE);}else{this.AU.Set(X,null
);this.D$.Set(X,A6);this.Bz=0;return false;}var Al=BS.Cf.I;while(!!Al&&(Al!==this
)){pos=B.aaj(pos,Al.R.slice(0,2));Al=Al.I;}this.FK.Set(X,pos);this.Gr.Set(X,pos);
this.Ea.Set(X,0);this.Gs.Av(true);this.AI=X;this.AU.Get(X).Bv(this.H3().InitializeDown(
X,pos,this.Cq.Get(X)+1,this.D$.Get(X),false,B0));this.Bz=0;return true;}if(!Ex&&
!!this.AU.Get(X)){var pos=B0;var Al=this.AU.Get(X).I;while(!!Al&&(Al!==this)){pos=
B.aaj(pos,Al.R.slice(0,2));Al=Al.I;}if(!Al)pos=this.Gr.Get(X);this.AI=X;var tmp=
this.AU.Get(X);this.AU.Set(X,null);tmp.Bv(this.H3().InitializeUp(X,pos,this.FK.Get(
X),this.Ea.Get(X),this.Cq.Get(X)+1,this.D$.Get(X),false,B0,this.EY.Get(X)));this.
BroadcastEvent(this.Jl().InitializeUp(X,this.Cq.Get(X)+1,false,tmp,B0),0x18);this.
Bz=0;return true;}this.Bz=0;return false;},On:function(FF,QP,EW,EV){if(FF===this
)FF=null;if(!this.AU.Get(this.AI))return;var BS;BS=this.EI(B.aam(KD,this.Dp.Get(
this.AI)),this.AI,1,FF,EW,EV);if(!!BS&&(this.AU.Get(this.AI)!==BS.Cf))this.M8(BS.
Cf,BS.AE);if(!BS&&(this.AU.Get(this.AI)!==QP))this.M8(QP,A6);},M8:function(FF,D8
){if(!this.AU.Get(this.AI)||(this.AU.Get(this.AI)===FF))return;var tmp=this.AU.Get(
this.AI);this.AU.Set(this.AI,null);tmp.Bv(this.H3().InitializeUp(this.AI,this.Gr.
Get(this.AI),this.FK.Get(this.AI),this.Ea.Get(this.AI),this.Cq.Get(this.AI)+1,this.
D$.Get(this.AI),true,this.Dp.Get(this.AI),this.EY.Get(this.AI)));this.BroadcastEvent(
this.Jl().InitializeUp(this.AI,this.Cq.Get(this.AI)+1,true,tmp,this.Dp.Get(this.
AI)),0x18);var pos=this.Dp.Get(this.AI);var Al=null;if(!!FF)Al=FF.I;while(!!Al&&(
Al!==this)){pos=B.aaj(pos,Al.R.slice(0,2));Al=Al.I;}if(!Al&&(FF!==this)){this.AU.
Set(this.AI,null);return;}this.BroadcastEvent(this.Jl().InitializeDown(this.AI,this.
Cq.Get(this.AI)+1,true,FF,this.Dp.Get(this.AI)),0x18);var ticksCount=0;ticksCount=((
new Date).getTime()-B.vs)|0;this.AU.Set(this.AI,FF);this.D$.Set(this.AI,D8);this.
FK.Set(this.AI,pos);this.Gr.Set(this.AI,pos);this.Cq.Set(this.AI,0);this.Ea.Set(
this.AI,0);this.Jm.Set(this.AI,ticksCount);this.EY.Set(this.AI,this.Dp.Get(this.
AI));this.AU.Get(this.AI).Bv(this.H3().InitializeDown(this.AI,pos,this.Cq.Get(this.
AI)+1,this.D$.Get(this.AI),true,this.EY.Get(this.AI)));},_Init:function(aArg){C.
P._Init.call(this,aArg);C.Timer._Init.call(this.Gs={H:this},0);(this.AU=[]).__proto__=
C.Root.AU;(this.Cq=[]).__proto__=C.Root.Cq;(this.Mq=[]).__proto__=C.Root.Mq;(this.
Ea=[]).__proto__=C.Root.Ea;(this.FK=[]).__proto__=C.Root.FK;(this.Jm=[]).__proto__=
C.Root.Jm;(this.Gr=[]).__proto__=C.Root.Gr;(this.D$=[]).__proto__=C.Root.D$;(this.
Dp=[]).__proto__=C.Root.Dp;(this.EY=[]).__proto__=C.Root.EY;(this.CT=[]).__proto__=
C.Root.CT;(this.BU=[]).__proto__=C.Root.BU;this.__proto__=C.Root;this.G=0x7F;this.
Gs.Eq(10);this.Gs.D2=[this,this.VQ];this.AG(aArg);},_Done:function(){this.__proto__=
C.P;this.Gs._Done();C.P._Done.call(this);},_ReInit:function(){C.P._ReInit.call(this
);this.Gs._ReInit();},_Mark:function(D){var A;C.P._Mark.call(this,D);if((A=this.
Dt)&&(A._cycle!=D))A._Mark(A._cycle=D);B.aaf(this.AU,D);if((A=this.Jk)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Gs)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Core::Root"};C.Event={Ax:0,JX:false,AG:function(aArg){this.Ax=this.LA();},LA:function(
){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;},
_Init:function(aArg){this.__proto__=C.Event;this.AG(aArg);B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:null,_className:
"Core::Event"};C.KeyEvent={Bm:0,AD:0,Down:false,Initialize2:function(BZ,Ex){this.
Bm=0;this.AD=BZ;this.Down=Ex;if((BZ>=0x30)&&(BZ<=0x39))this.Bm=(10+BZ)-48;if((BZ>=
0x41)&&(BZ<=0x5A))this.Bm=(105+BZ)-65;if((BZ>=0x61)&&(BZ<=0x7A))this.Bm=(105+BZ)-
97;if(BZ===0x20)this.Bm=131;if(!this.Bm)switch(BZ){case 0x2B:this.Bm=132;break;case
0x2D:this.Bm=133;break;case 0x2A:this.Bm=134;break;case 0x2F:this.Bm=135;break;case
0x3D:this.Bm=136;break;case 0x2E:this.Bm=137;break;case 0x2C:this.Bm=138;break;case
0x3A:this.Bm=139;break;case 0x3B:this.Bm=140;break;default:;}return this;},Initialize:
function(BZ,Ex){this.Bm=BZ;this.Down=Ex;this.AD=0x00;var OU=BZ-10;var OT=BZ-105;
if((OU>=0)&&(OU<=9))this.AD=(48+OU)&0xFFFF;if((OT>=0)&&(OT<=25))this.AD=(65+OT)&
0xFFFF;if(BZ===131)this.AD=0x20;if(this.AD===0x00)switch(BZ){case 132:this.AD=0x2B;
break;case 133:this.AD=0x2D;break;case 134:this.AD=0x2A;break;case 135:this.AD=0x2F;
break;case 136:this.AD=0x3D;break;case 137:this.AD=0x2E;break;case 138:this.AD=0x2C;
break;case 139:this.AD=0x3A;break;case 140:this.AD=0x3B;break;default:;}return this;
},Sc:function(QO){switch(QO){case 141:return((this.AD>=0x41)&&(this.AD<=0x5A))||((
this.AD>=0x61)&&(this.AD<=0x7A));case 142:return(((this.AD>=0x41)&&(this.AD<=0x5A
))||((this.AD>=0x61)&&(this.AD<=0x7A)))||((this.AD>=0x30)&&(this.AD<=0x39));case
143:return(this.AD>=0x30)&&(this.AD<=0x39);case 144:return(((this.AD>=0x41)&&(this.
AD<=0x46))||((this.AD>=0x61)&&(this.AD<=0x66)))||((this.AD>=0x30)&&(this.AD<=0x39
));case 145:return this.AD!==0x00;case 146:return(this.AD===0x00)&&!!this.Bm;case
147:return(((this.Bm===6)||(this.Bm===7))||(this.Bm===4))||(this.Bm===5);case 148:
return(this.AD!==0x00)||!!this.Bm;default:;}return QO===this.Bm;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.JF={Kx:null,Cj:B.vw,CB:0,BE:0,Down:false,C1:false,InitializeUp:function(X,CP
,H0,ON,Ey){this.Down=false;this.BE=X;this.CB=CP;this.Cj=Ey;this.Kx=ON;this.C1=H0;
return this;},InitializeDown:function(X,CP,H0,ON,Ey){this.Down=true;this.BE=X;this.
CB=CP;this.Cj=Ey;this.Kx=ON;this.C1=H0;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.JF;},_Mark:function(D){var A;C.Event._Mark.
call(this,D);if((A=this.Kx)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};C.Fi={F_:B.vw,Cj:B.vw,CB:0,BO:0,CK:B.vw,BF:B.vw,BE:0,Down:false,C1:false,InitializeHold:
function(X,G3,KI,KJ,CP,D8,Ey,KH){this.Down=true;this.BE=X;this.BF=B.aak(G3,D8);this.
CK=B.aak(KI,D8);this.BO=KJ;this.CB=CP;this.Cj=Ey;this.F_=KH;return this;},InitializeUp:
function(X,G3,KI,KJ,CP,D8,H0,Ey,KH){this.Down=false;this.BE=X;this.BF=B.aak(G3,D8
);this.CK=B.aak(KI,D8);this.BO=KJ;this.CB=CP;this.C1=H0;this.Cj=Ey;this.F_=KH;return this;
},InitializeDown:function(X,G3,CP,D8,H0,Ey){this.Down=true;this.BE=X;this.BF=B.aak(
G3,D8);this.CK=B.aak(G3,D8);this.BO=0;this.CB=CP;this.C1=H0;this.Cj=Ey;this.F_=Ey;
return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Fi;},_className:"Core::CursorEvent"};C.II={F_:B.vw,Cj:B.vw,CB:0,BO:0,AE:B.vw,CK:
B.vw,BF:B.vw,BE:0,Initialize:function(X,G3,KI,aOffset,KJ,VA,D8,Ey,KH){this.BE=X;
this.BF=B.aak(G3,D8);this.CK=B.aak(KI,D8);this.AE=aOffset;this.BO=KJ;this.CB=VA;
this.Cj=Ey;this.F_=KH;return this;},_Init:function(aArg){C.Event._Init.call(this
,aArg);this.__proto__=C.II;},_className:"Core::DragEvent"};C.Kd={Dz:function(A4,
aClip,aOffset,AP,aBlend){},K:function(E){var A;if(B.z9(E,this.R))return;var Hc=[(
A=this.R)[2]-A[0],A[3]-A[1]];var MG=[E[2]-E[0],E[3]-E[1]];var It=!B.z8(Hc,MG);var
Bc=B.aaj(E.slice(0,2),this.R.slice(0,2));if(!B.z8(Bc,A6)&&!It){var L=this.Ac;while(
!!L&&!((L.G&0x200)===0x200)){if(((L.G&0x400)===0x400)){var tmp=((L.G&0x100)===0x100
);L.IR(Bc,tmp);}L=L.Ac;}}if((It&&(Hc[0]>0))&&(Hc[1]>0)){var Aj=this.R;var L=this.
Ac;while(!!L&&!((L.G&0x200)===0x200)){if(((L.G&0x400)===0x400)){if(!!L.AS&&(L.AS.
He!==this))L.AS=null;if(!L.AS&&(L.C7!==0x14))L.Jq(Aj,this);}L=L.Ac;}}C.BL.K.call(
this,E);if(!!this.I&&It){this.G=this.G|0x1000;if(!((this.I.G&0x2000)===0x2000)){
this.I.G=this.I.G|0x4000;B.ow([A=this.I,A.Cw],this);}}},_Init:function(aArg){C.BL.
_Init.call(this,aArg);this.__proto__=C.Kd;this.G=0x203;},_className:"Core::Outline"
};C.BM={NU:null,J6:null,J2:null,EL:null,CW:null,BQ:null,MT:0,Ak:0,BE:0,Ax:0,CB:0
,BO:0,AE:B.vw,CK:B.vw,BF:B.vw,Kt:8,Gd:0,P6:1,Down:false,El:false,C1:false,O1:false
,K2:0,Dz:function(A4,aClip,aOffset,AP,aBlend){},Bv:function(Ay){var A;var W=(C.Fi.
isPrototypeOf(Ay)?Ay:null);var AB=(C.II.isPrototypeOf(Ay)?Ay:null);var ME=this.El;
var EE;var DN;var Lm;var Cv;var KV;if(!W&&!AB)return null;EE=(!!W&&W.Down)&&!W.BO;
DN=(!!W&&W.Down)&&(W.BO>0);Lm=(!!W&&W.Down)&&(W.BO>this.K2);Cv=!!W&&!W.Down;KV=!
!AB;if(EE)this.K2=((A=(W.C1?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if((((this.Gd&0x20)===
0x20)&&(this.Ak>0))&&(this.Ak<33554432)){var BB=(C.JF.isPrototypeOf(Ay)?Ay:null);
if(((!!BB&&BB.Down)&&(BB.Kx!==this))&&B.vt(this.GetExtent(),this.I.P3(BB.Cj))){this.
MT=0x20;this.Ak=this.Ak|67108864;return null;}}if(EE){var If=0;var E7;this.Ak=this.
Ak|(1<<W.BE);for(E7=this.Ak&4095;E7>0;E7=E7>>1)if(!!(E7&1))If=If+1;if(If===1)this.
Ak=(this.Ak|16777216)|(4096<<W.BE);}if(Cv&&(this.Ak<16777216)){var Df=this.Hu();
var BS=null;if(!!Df){var Pr=(!!this.An?this.An:this.I);BS=Df.EI(B.aam(L3,W.Cj),W.
BE,W.CB,null,Pr,0x0);}if(!!BS){var i;for(i=0;i<10;i++)if(!!(this.Ak&(1<<i)))BS.Cf.
Bv(B._NewObject(C.Fi,0).InitializeDown(i,W.BF,W.CB,A6,true,W.Cj));for(i=0;i<10;i++
)if(!!(this.Ak&(1<<i)))BS.Cf.Bv(B._NewObject(C.Fi,0).InitializeUp(i,W.BF,W.BF,0,
W.CB,A6,false,W.Cj,W.Cj));}}if(Cv)this.Ak=(this.Ak&~(1<<W.BE))|33554432;if(Lm&&(
this.Ak<16777216))this.Ak=this.Ak|67108864;if(Cv&&W.C1)this.Ak=this.Ak|67108864;
if(Cv&&!(this.Ak&4095))this.MT=0x0;if(Cv&&!(this.Ak&16777215))this.Ak=0;if(DN&&(
this.Ak>=67108864)){var Df=this.Hu();if(!!Df)Df.On(null,null,this,this.MT);}if((
DN&&!!(this.Ak&16777216))&&!!(this.Ak&33554432)){DN=false;Cv=true;}if(!!W&&!(this.
Ak&(4096<<W.BE)))return this;if(!!AB&&!(this.Ak&(4096<<AB.BE)))return this;if(Cv&&
!(this.Ak&16777216))return this;if(((EE||KV)||DN)&&((this.Ak<16777216)||(this.Ak>=
33554432)))return this;if(Cv)this.Ak=this.Ak&3758100479;if(Cv&&!(this.Ak&16777215
))this.Ak=0;if(!!W){this.Down=EE||DN;this.El=this.Nt(W.BF);this.CK=W.CK;this.BF=
W.BF;this.AE=A6;this.BO=W.BO;this.CB=W.CB;this.C1=W.C1;this.BE=W.BE;this.Ax=W.Ax;
if(W.Down&&!W.BO)ME=false;}if(!!AB){this.Down=true;this.El=this.Nt(AB.BF);this.CK=
AB.CK;this.BF=AB.BF;this.AE=AB.AE;this.BO=AB.BO;this.CB=AB.CB;this.BE=AB.BE;this.
C1=false;this.Ax=AB.Ax;}var OZ=this.Down;if(!!AB)(A=this.NU)?A[1].call(A[0],this
):null;if((!!W&&this.Down)&&!this.BO)(A=this.BQ)?A[1].call(A[0],this):null;if((!
!W&&this.Down)&&(this.BO>0))(A=this.EL)?A[1].call(A[0],this):null;if((this.Down&&
this.El)&&!ME){this.O1=true;(A=this.J2)?A[1].call(A[0],this):null;}if(this.O1&&(((
OZ&&!this.El)&&ME)||((!OZ&&this.El)&&ME))){this.O1=false;(A=this.J6)?A[1].call(A[
0],this):null;}if(!!W&&!OZ)(A=this.CW)?A[1].call(A[0],this):null;if(!!this.Gd){var
Hh=0x0;if(((((this.Gd&0x10)===0x10)&&!!W)&&W.Down)&&(W.BO>=1000))Hh=0x10;if((((this.
Gd&0x1)===0x1)&&!!AB)&&((AB.Cj[1]-AB.F_[1])<=-this.Kt))Hh=0x1;if((((this.Gd&0x2)===
0x2)&&!!AB)&&((AB.Cj[1]-AB.F_[1])>=this.Kt))Hh=0x2;if((((this.Gd&0x4)===0x4)&&!!
AB)&&((AB.Cj[0]-AB.F_[0])<=-this.Kt))Hh=0x4;if((((this.Gd&0x8)===0x8)&&!!AB)&&((
AB.Cj[0]-AB.F_[0])>=this.Kt))Hh=0x8;if(!!Hh){var Df=this.Hu();if(!!Df){this.MT=Hh;
Df.On(null,this,this,Hh);}}}return this;},EI:function(Ar,X,CP,ES,EW,EV){var A;if(
!!ES&&(ES!==this))return null;if((CP<1)||(CP>this.P6))return null;if(this.Ak>=33554432
)return null;if((this.Ak>=16777216)&&!(this.Ak&(4096<<X)))return null;if(!!(EV&this.
Gd))return null;if(this.R$()){var As=B.kz(Ar,this.GetExtent());if(!((As[0]>=As[2
])||(As[1]>=As[3]))){var C_=B.zT(Ar);var Bc=A6;if(C_[0]<As[0])Bc=[As[0]-C_[0],Bc[
1]];if(C_[0]>=As[2])Bc=[(As[2]-C_[0])-1,Bc[1]];if(C_[1]<As[1])Bc=[Bc[0],As[1]-C_[
1]];if(C_[1]>=As[3])Bc=[Bc[0],(As[3]-C_[1])-1];return B._NewObject(C.JG,0).Initialize(
this,Bc);}}else{var Bf=B.aan(9,B.vw,null);var i;Bf.Set(0,B.zT(Ar));Bf.Set(1,Bf.Get(
0));Bf.Set(2,Bf.Get(0));Bf.Set(3,Bf.Get(0));Bf.Set(4,Bf.Get(0));Bf.Set(1,[Ar[0],
Bf.Get(1)[1]]);Bf.Set(2,[Bf.Get(2)[0],Ar[1]]);Bf.Set(3,[Ar[2],Bf.Get(3)[1]]);Bf.
Set(4,[Bf.Get(4)[0],Ar[3]]);Bf.Set(5,Ar.slice(0,2));Bf.Set(6,[Ar[2],Ar[1]]);Bf.Set(
7,[Ar[0],Ar[3]]);Bf.Set(8,Ar.slice(2,4));for(i=0;i<9;i=i+1)if(this.Nt(Bf.Get(i))
)return B._NewObject(C.JG,0).Initialize(this,B.aaj(Bf.Get(i),Bf.Get(0)));}return null;
},Qi:function(E){if(E<1)E=1;this.Kt=E;},LQ:function(E){if(E<1)E=1;this.P6=E;},Av:
function(E){if(E)this.Bd(0x10,0x0);else this.Bd(0x0,0x10);},_Init:function(aArg){
C.EO._Init.call(this,aArg);this.__proto__=C.BM;this.G=0x11B;},_Mark:function(D){
var A;C.EO._Mark.call(this,D);if((A=this.NU)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=
D);if((A=this.J6)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.J2)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.EL)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.CW)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
BQ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.DB={timer:null,ML:null,Ju:null,Ak:0,Mh:0,E8:5000,Is:0,MD:B.vw,H7:0,FI:0,AN:0
,Hn:0,Jy:0,H6:0,FH:0,AM:0,Hm:0,Hl:0,CK:B.vw,PJ:B.vw,BW:B.vw,BX:B.vw,AE:B.vw,PM:0.5
,LZ:true,I3:false,Ee:false,Ef:false,Mg:false,K2:0,Dz:function(A4,aClip,aOffset,AP
,aBlend){},Bv:function(Ay){var A;var W=(C.Fi.isPrototypeOf(Ay)?Ay:null);var AB=(
C.II.isPrototypeOf(Ay)?Ay:null);var BB=(C.JF.isPrototypeOf(Ay)?Ay:null);var EE;var
DN;var Lm;var Cv;var KV;EE=(!!W&&W.Down)&&!W.BO;DN=(!!W&&W.Down)&&(W.BO>0);Lm=(!
!W&&W.Down)&&(W.BO>this.K2);Cv=!!W&&!W.Down;KV=!!AB;if(EE)this.K2=((A=(W.C1?0:50
))&0x80)?A|0xFFFFFF00:A&0xFF;if(EE){var If=0;var E7;this.Ak=this.Ak|(1<<W.BE);for(
E7=this.Ak&4095;E7>0;E7=E7>>1)if(!!(E7&1))If=If+1;if(If===1)this.Ak=(this.Ak|16777216
)|(4096<<W.BE);}if(Cv&&(this.Ak<16777216)){var Df=this.Hu();var BS=null;if(!!Df){
var Pr=(!!this.An?this.An:this.I);BS=Df.EI(B.aam(L3,W.Cj),W.BE,W.CB,null,Pr,0x0);
}if(!!BS){var i;for(i=0;i<10;i++)if(!!(this.Ak&(1<<i)))BS.Cf.Bv(B._NewObject(C.Fi
,0).InitializeDown(i,W.BF,W.CB,A6,true,W.Cj));for(i=0;i<10;i++)if(!!(this.Ak&(1<<
i)))BS.Cf.Bv(B._NewObject(C.Fi,0).InitializeUp(i,W.BF,W.BF,0,W.CB,A6,false,W.Cj,
W.Cj));}}if(Cv)this.Ak=(this.Ak&~(1<<W.BE))|33554432;if(Lm&&(this.Ak<16777216))this.
Ak=this.Ak|67108864;if(Cv&&W.C1)this.Ak=this.Ak|67108864;if(Cv&&!(this.Ak&16777215
))this.Ak=0;if(DN&&(this.Ak>=67108864)){var Df=this.Hu();if(!!Df)Df.On(null,null
,this,0x0);}if((DN&&!!(this.Ak&16777216))&&!!(this.Ak&33554432)){DN=false;Cv=true;
}if(!!W&&!(this.Ak&(4096<<W.BE)))return this;if(!!AB&&!(this.Ak&(4096<<AB.BE)))return this;
if(Cv&&!(this.Ak&16777216))return this;if(((EE||KV)||DN)&&((this.Ak<16777216)||(
this.Ak>=33554432)))return this;if(Cv)this.Ak=this.Ak&3758100479;if(Cv&&!(this.Ak&
16777215))this.Ak=0;if(!!BB&&(BB.Kx===this))return null;if((!!BB&&BB.Down)&&(this.
Mg||!this.I3))return null;if((!!BB&&BB.Down)&&!B.vt(this.R,this.I.P3(BB.Cj)))return null;
if((!!BB&&!BB.Down)&&(!this.Mg||(this.Mh!==BB.BE)))return null;if((!W&&!AB)&&!BB
)return null;if(!!W){this.Mg=EE||DN;this.Mh=W.BE;this.CK=W.CK;}if(!!AB)this.Mh=AB.
BE;if(!!BB){this.Mg=BB.Down;this.Mh=BB.BE;}if(!!BB&&BB.Down){this.Pt();this.AM=(((
BB.Ax-this.Hl)*0.001)*this.FH)+this.AM;this.AN=(((BB.Ax-this.Jy)*0.001)*this.FI)+
this.AN;if(this.Ee)this.AM=0;if(this.Ef)this.AN=0;this.FH=0;this.FI=0;this.Ee=false;
this.Ef=false;this.MD=this.AE;this.Is=BB.Ax;return this;}if(EE){this.Pt();this.AM=(((
W.Ax-this.Hl)*0.001)*this.FH)+this.AM;this.AN=(((W.Ax-this.Jy)*0.001)*this.FI)+this.
AN;if(this.Ee||!this.I3)this.AM=0;if(this.Ef||!this.I3)this.AN=0;this.FH=0;this.
FI=0;this.Ee=false;this.Ef=false;if(!this.I3){this.I3=true;(A=this.ML)?A[1].call(
A[0],this):null;}this.MD=this.AE;this.Is=W.Ax;}if(!!AB){var B1=B.aaj(AB.BF,AB.CK
);var AA=this.AE;if(this.LZ)AA=[this.MD[0]+B1[0],AA[1]];AA=[AA[0],this.MD[1]+B1[
1]];if(AA[0]<this.BX[0])AA=[this.BX[0]+(((AA[0]-this.BX[0])/2)|0),AA[1]];else if(
AA[0]>this.BW[0])AA=[this.BW[0]+(((AA[0]-this.BW[0])/2)|0),AA[1]];if(AA[1]<this.
BX[1])AA=[AA[0],this.BX[1]+(((AA[1]-this.BX[1])/2)|0)];else if(AA[1]>this.BW[1])
AA=[AA[0],this.BW[1]+(((AA[1]-this.BW[1])/2)|0)];if(!B.z8(AA,this.AE)){this.PJ=B.
aaj(AA,this.AE);this.AE=AA;(A=this.Ju)?A[1].call(A[0],this):null;}}if((!!BB&&!BB.
Down)&&((BB.Ax-this.Is)>=200)){this.AM=0;this.AN=0;}if(DN&&((W.Ax-this.Is)>=200)
){this.AM=0;this.AN=0;}if(!!AB&&(AB.Ax>this.Is)){var B1=AB.AE;var Q$=1000/(AB.Ax-
this.Is);var Gy=0;var Gz;if(this.LZ)Gy=B1[0]*Q$;Gz=B1[1]*Q$;if((Gy*this.AM)<0)this.
AM=0;if((Gz*this.AN)<0)this.AN=0;this.AM=(this.AM+Gy)*0.5;this.AN=(this.AN+Gz)*0.5;
this.Is=AB.Ax;}if(!Cv&&!BB)return this;if(!!W&&W.C1){this.AM=0;this.AN=0;}if((this.
AE[0]<=this.BX[0])||(this.AE[0]>=this.BW[0]))this.AM=0;else if(!this.AM){var AY=
this.AE[0];var Bs=this.BX[0];var Bt=this.BW[0];if(AY<Bs)Bt=this.BX[0];else if(AY>
Bt)Bs=this.BW[0];else{Bs=AY;Bt=AY;}if((Bs-AY)<=(AY-Bt))AY=Bs;else AY=Bt;if(AY!==
this.AE[0]){var Cr=AY-this.AE[0];if(Cr>0)this.AM=Math.sqrt((Cr*2)*this.E8)+20;if(
Cr<0)this.AM=-Math.sqrt((-Cr*2)*this.E8)-20;this.FH=(400-(this.AM*this.AM))/(2*Cr
);this.H6=AY;}}else{var WM=this.AM*this.AM;var Cr=WM/(2*this.E8);var AY=this.AE[
0];if(this.AM>0)AY=AY+(Cr|0);if(this.AM<0)AY=AY-(Cr|0);if(AY>this.BW[0])AY=this.
BW[0];else if(AY<this.BX[0])AY=this.BX[0];var RO=AY;var Bs=this.BX[0];var Bt=this.
BW[0];if(AY<Bs)Bt=this.BX[0];else if(AY>Bt)Bs=this.BW[0];else{Bs=AY;Bt=AY;}if(this.
AM>0){if(Bt<=this.AE[0])AY=Bs;else if((AY-Bt)<(Bs-AY))AY=Bt;else AY=Bs;}else if(
Bs>=this.AE[0])AY=Bt;else if((AY-Bt)>(Bs-AY))AY=Bs;else AY=Bt;if(AY!==this.AE[0]
){Cr=AY-this.AE[0];if(AY!==RO){var GG=AY-RO;if(GG>0)this.AM=this.AM+Math.sqrt((GG
*2)*this.E8);if(GG<0)this.AM=this.AM-Math.sqrt((-GG*2)*this.E8);}if(this.AM>0)this.
AM=this.AM+20;if(this.AM<0)this.AM=this.AM-20;this.FH=(400-(this.AM*this.AM))/(2
*Cr);this.H6=AY;}else this.AM=0;}if((this.AE[1]<=this.BX[1])||(this.AE[1]>=this.
BW[1]))this.AN=0;else if(!this.AN){var AZ=this.AE[1];var Bs=this.BX[1];var Bt=this.
BW[1];if(AZ<Bs)Bt=this.BX[1];else if(AZ>Bt)Bs=this.BW[1];else{Bs=AZ;Bt=AZ;}if((Bs-
AZ)<=(AZ-Bt))AZ=Bs;else AZ=Bt;if(AZ!==this.AE[1]){var Cr=AZ-this.AE[1];if(Cr>0)this.
AN=Math.sqrt((Cr*2)*this.E8)+20;if(Cr<0)this.AN=-Math.sqrt((-Cr*2)*this.E8)-20;this.
FI=(400-(this.AN*this.AN))/(2*Cr);this.H7=AZ;}}else{var WN=this.AN*this.AN;var Cr=
WN/(2*this.E8);var AZ=this.AE[1];if(this.AN>0)AZ=AZ+(Cr|0);if(this.AN<0)AZ=AZ-(Cr|
0);if(AZ>this.BW[1])AZ=this.BW[1];else if(AZ<this.BX[1])AZ=this.BX[1];var RP=AZ;
var Bs=this.BX[1];var Bt=this.BW[1];if(AZ<Bs)Bt=this.BX[1];else if(AZ>Bt)Bs=this.
BW[1];else{Bs=AZ;Bt=AZ;}if(this.AN>0){if(Bt<=this.AE[1])AZ=Bs;else if((AZ-Bt)<(Bs-
AZ))AZ=Bt;else AZ=Bs;}else if(Bs>=this.AE[1])AZ=Bt;else if((AZ-Bt)>(Bs-AZ))AZ=Bs;
else AZ=Bt;if(AZ!==this.AE[1]){Cr=AZ-this.AE[1];if(AZ!==RP){var GG=AZ-RP;if(GG>0
)this.AN=this.AN+Math.sqrt((GG*2)*this.E8);if(GG<0)this.AN=this.AN-Math.sqrt((-GG
*2)*this.E8);}if(this.AN>0)this.AN=this.AN+20;if(this.AN<0)this.AN=this.AN-20;this.
FI=(400-(this.AN*this.AN))/(2*Cr);this.H7=AZ;}else this.AN=0;}if(!!W)this.Hl=W.Ax;
if(!!BB)this.Hl=BB.Ax;this.Jy=this.Hl;this.Hm=this.AE[0];this.Hn=this.AE[1];this.
WO();return this;},EI:function(Ar,X,CP,ES,EW,EV){var A;if(!!ES&&(ES!==this))return null;
if(this.Ak>=33554432)return null;if((this.Ak>=16777216)&&!(this.Ak&(4096<<X)))return null;
if(!this.LZ&&!!(EV&0xC))return null;var As=B.kz(Ar,this.R);if(!((As[0]>=As[2])||(
As[1]>=As[3]))){var C_=B.zT(Ar);var Bc=A6;if(C_[0]<As[0])Bc=[As[0]-C_[0],Bc[1]];
if(C_[0]>=As[2])Bc=[(As[2]-C_[0])-1,Bc[1]];if(C_[1]<As[1])Bc=[Bc[0],As[1]-C_[1]];
if(C_[1]>=As[3])Bc=[Bc[0],(As[3]-C_[1])-1];return B._NewObject(C.JG,0).Initialize(
this,Bc);}return null;},Pt:function(){if(!!this.timer){B.zl([this,this.CU],this.
timer,0);this.timer=null;}},WO:function(){this.timer=B._GetAutoObject(B.abl.GO);
B.y_([this,this.CU],this.timer,0);},CU:function(N){var A;if(!this.timer)return;var
JA=(this.timer.Ax-this.Hl)*0.001;var JB=(this.timer.Ax-this.Jy)*0.001;var WQ=JA*
JA;var WR=JB*JB;var Gy=(this.FH*JA)+this.AM;var Gz=(this.FI*JB)+this.AN;var AA=[((((
this.FH*0.5)*WQ)+(this.AM*JA))+this.Hm)|0,((((this.FI*0.5)*WR)+(this.AN*JB))+this.
Hn)|0];if(this.Ee&&(JA>=0.5)){AA=[this.H6,AA[1]];this.AM=0;this.FH=0;this.Hm=AA[
0];this.Ee=false;}else if(this.Ee){var G9=1-Math.pow(1-(JA/0.5),5);AA=[(this.Hm+((
this.H6-this.Hm)*G9))|0,AA[1]];}if(this.Ef&&(JB>=0.5)){AA=[AA[0],this.H7];this.AN=
0;this.FI=0;this.Hn=AA[1];this.Ef=false;}else if(this.Ef){var G9=1-Math.pow(1-(JB
/0.5),5);AA=[AA[0],(this.Hn+((this.H7-this.Hn)*G9))|0];}if(((this.AM>0)&&(Gy<0))||((
this.AM<0)&&(Gy>0))){Gy=0;AA=[this.AE[0],AA[1]];}if(((this.AN>0)&&(Gz<0))||((this.
AN<0)&&(Gz>0))){Gz=0;AA=[AA[0],this.AE[1]];}if(!this.Ee&&(AA[0]<this.BX[0])){this.
Hm=AA[0];this.H6=this.BX[0];this.Hl=this.timer.Ax;this.Ee=true;}else if(!this.Ee&&(
AA[0]>this.BW[0])){this.Hm=AA[0];this.H6=this.BW[0];this.Hl=this.timer.Ax;this.Ee=
true;}if(!this.Ef&&(AA[1]<this.BX[1])){this.Hn=AA[1];this.H7=this.BX[1];this.Jy=
this.timer.Ax;this.Ef=true;}else if(!this.Ef&&(AA[1]>this.BW[1])){this.Hn=AA[1];
this.H7=this.BW[1];this.Jy=this.timer.Ax;this.Ef=true;}if(((!this.Ee&&!!this.AM)&&(
Gy>-20))&&(Gy<20)){AA=[this.H6,AA[1]];this.AM=0;this.FH=0;this.Hm=AA[0];}if(((!this.
Ef&&!!this.AN)&&(Gz>-20))&&(Gz<20)){AA=[AA[0],this.H7];this.AN=0;this.FI=0;this.
Hn=AA[1];}if(!B.z8(AA,this.AE)){this.PJ=B.aaj(AA,this.AE);this.AE=AA;(A=this.Ju)?
A[1].call(A[0],this):null;}if(((!this.AM&&!this.AN)&&!this.Ee)&&!this.Ef){this.Pt(
);this.I3=false;}},SN:function(E){if(E<0)E=0;if(E>1)E=1;if(E===this.PM)return;this.
PM=E;if(E<(1e-007))E=1e-007;this.E8=E*10000;},_Init:function(aArg){C.BL._Init.call(
this,aArg);this.__proto__=C.DB;this.G=0x11B;},_Mark:function(D){var A;C.BL._Mark.
call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.ML)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ju)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);},_className:"Core::SlideTouchHandler"};C.CM={Ac:null,CW:null,BQ:null
,EL:null,Ir:0,Ax:0,Qo:0,Ci:148,Bm:0,AD:0,A8:true,Down:false,LX:false,DS:false,AG:
function(aArg){var A;var AR=(C.P.isPrototypeOf(A=this.H)?A:null);if(!AR)throw new
Error(OD);this.Ac=AR.MF;AR.MF=this;},Bv:function(Ay){var A;if(!!Ay&&Ay.Sc(this.Ci
)){this.Down=Ay.Down;this.Bm=Ay.Bm;this.AD=Ay.AD;this.Ax=Ay.Ax;this.DS=false;if(
Ay.Down){this.Qo=this.Ir;this.LX=this.Ir>0;if(this.LX)(A=this.EL)?A[1].call(A[0]
,this):null;else(A=this.BQ)?A[1].call(A[0],this):null;if(!this.DS)this.Ir=this.Ir+
1;return!this.DS;}if(!Ay.Down){this.LX=this.Ir>1;this.Qo=this.Ir-1;this.Ir=0;(A=
this.CW)?A[1].call(A[0],this):null;return!this.DS;}}return false;},_Init:function(
aArg){this.__proto__=C.CM;this.AG(aArg);B.hJ++;},_Done:function(){this.__proto__=
null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Ac)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.CW)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.BQ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.EL)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=
D);},H:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};C.JG={Cf:
null,JH:0,AE:B.vw,Initialize:function(Y,aOffset){this.Cf=Y;this.AE=aOffset;this.
JH=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=C.JG;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.Cf)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};C.IN={He:null,B3:B.vx,Aj:B.vx,isEmpty:false,_Init:
function(aArg){this.__proto__=C.IN;B.hJ++;},_Done:function(){this.__proto__=null;
B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.He)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};C.LE={GB:B.vw,GA:B.vw
,_Init:function(aArg){C.IN._Init.call(this,aArg);this.__proto__=C.LE;},_className:
"Core::LayoutLineContext"};C.LF={Lh:B.vw,Lg:B.vw,GB:B.vw,GA:B.vw,_Init:function(
aArg){C.IN._Init.call(this,aArg);this.__proto__=C.LF;},_className:"Core::LayoutQuadContext"
};C.M9={AR:null,Ac:null,Dq:null,Dw:null,Cl:null,Ip:null,_Init:function(aArg){this.
__proto__=C.M9;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.AR)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Dq)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Dw)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Cl)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.Ip)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:null
,_className:"Core::DialogContext"};C.Os={Do:null,Bb:null,AK:null,Rb:false,VN:function(
){if(!this.Do)return;var C0=this.Do;this.Do.CZ=null;this.Do=null;B.ow([this,this.
Pj],this);C0.P8(this);},Wb:function(N){if(!!this.Do)return;if(!this.AK)return;this.
Do=this.AK;this.AK=this.AK.Ac;if(!!this.AK)this.AK.An=null;else this.Bb=null;this.
Do.Ac=null;this.Rb=true;this.Do.IY(this);this.Rb=false;},Wn:function(N){B.ow([this
,this.Wb],this);},Wm:function(N){B.ow([this,this.Wn],this);},Pj:function(N){B.ow([
this,this.Wm],this);},R1:function(BG){if(!BG||!BG.CZ)return;if(BG.CZ!==this)throw new
Error(OE);var RU=false;if(this.Do===BG){this.Do=null;RU=true;B.ow([this,this.Pj]
,this);}else{if(!!BG.Ac)BG.Ac.An=BG.An;else this.Bb=BG.An;if(!!BG.An)BG.An.Ac=BG.
Ac;else this.AK=BG.Ac;BG.An=null;BG.Ac=null;}BG.CZ=null;if(RU)BG.P7(this);},Qp:function(
BG,OO){if(!BG)return;if(!!BG.CZ)throw new Error(OF);BG.CZ=this;if(OO){BG.Ac=this.
AK;if(!!this.AK)this.AK.An=BG;else this.Bb=BG;this.AK=BG;}else{BG.An=this.Bb;if(
!!this.Bb)this.Bb.Ac=BG;else this.AK=BG;this.Bb=BG;}if(!this.Do)B.ow([this,this.
Pj],this);},_Init:function(aArg){this.__proto__=C.Os;B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
Do)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Bb)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.AK)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle!=D
))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"
};C.GY={CZ:null,An:null,Ac:null,P8:function(Jh){},P7:function(Jh){},IY:function(
Jh){this.PG();},GH:function(){if(!!this.CZ&&(this.CZ.Do===this))this.CZ.VN();},PG:
function(){if(!!this.CZ)this.CZ.R1(this);},Ns:function(){return!!this.CZ&&(this.
CZ.Do===this);},_Init:function(aArg){this.__proto__=C.GY;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.CZ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.An)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Ac)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.H)&&(A.
_cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:null,_className:"Core::Task"
};C.Or={T:null,Jz:null,IY:function(Jh){this.Jz.T=this.T;B.vv(this.Jz,0);B.ow([this
,this.V$],this);},V$:function(N){this.Jz.T=null;this.Jz=null;this.T=null;this.GH(
);},_Init:function(aArg){C.GY._Init.call(this,aArg);this.__proto__=C.Or;},_Mark:
function(D){var A;C.GY._Mark.call(this,D);if((A=this.T)&&(A._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Jz)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SystemEventTask"
};C.L0={_Init:function(){C.Os._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.Gc={resource:null,DU:function(){this.resource=null;},AG:function(
aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=C.Gc;this.AG(aArg
);B.hJ++;},_Done:function(){this.DU();this.__proto__=null;B.hJ--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:
null,_cycle:0,_observers:null,_className:"Core::Resource"};C.Timer={D2:null,timer:
null,Ax:0,Period:1000,JE:0,A8:false,DU:function(){var tmp=this.timer;if(!!tmp)tmp.
DestroyTimer();this.timer=null;},MM:function(aBegin,aPeriod){if(aBegin<0)aBegin=
0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=
B.zk(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod
);}this.timer=tmp;},Eq:function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=
E;if(this.A8)this.MM(this.JE,E);},HC:function(E){if(E<0)E=0;if(E===this.JE)return;
this.JE=E;if(this.A8)this.MM(E,this.Period);},Av:function(E){if(E===this.A8)return;
this.A8=E;if(E)this.MM(this.JE,this.Period);else this.MM(0,0);this.Ax=this.LA();
},LA:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;
},Trigger:function(){var A;this.Ax=this.LA();if(!this.Period)this.Av(false);(A=this.
D2)?A[1].call(A[0],this):null;},Kw:function(N){this.Av(false);},StartTimer:function(
N){if(this.A8)this.Av(false);this.Av(true);},_Init:function(aArg){this.__proto__=
C.Timer;B.hJ++;},_Done:function(){this.DU();this.__proto__=null;B.hJ--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.D2)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:
null,_className:"Core::Timer"};C.Dk={T:null,CZ:null,Trigger:function(Vy,OO){var C0=
B._NewObject(C.Or,0);C0.Jz=this;C0.T=Vy;this.CZ.Qp(C0,OO);},_Init:function(aArg){
this.__proto__=C.Dk;this.CZ=B._GetAutoObject(C.L0);B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
T)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.CZ)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:
null,_className:"Core::SystemEvent"};C.Qt={M6:null,Event:null,Ba:null,K9:function(
N){var A;if(!this.Event)return;this.M6=this.Event.T;(A=this.Ba)?A[1].call(A[0],this
):null;this.M6=null;},Sn:function(E){if(this.Event===E)return;if(!!this.Event)B.
zl([this,this.K9],this.Event,0);this.Event=E;if(!!this.Event)B.y_([this,this.K9]
,this.Event,0);},_Init:function(aArg){this.__proto__=C.Qt;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.M6)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Event)&&(A._cycle!=D))A.
_Mark(A._cycle=D);if((A=this.Ba)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=
this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:null,_className:
"Core::SystemEventHandler"};C.Bn={Ba:null,CN:null,K9:function(N){var A;(A=this.Ba
)?A[1].call(A[0],this):null;},Bw:function(E){if(B.z_(this.CN,E))return;if(!!this.
CN)B.zn([this,this.K9],this.CN,0);this.CN=E;if(!!this.CN)B.za([this,this.K9],this.
CN,0);},_Init:function(aArg){this.__proto__=C.Bn;B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
Ba)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CN)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null
,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};C.X5={Ev:0x1,W5:0x2
,Xg:0x4,X3:0x8,A8:0x10,XS:0x20,Xh:0x40,Xu:0x80,Xf:0x100,Xp:0x200,Xd:0x400,XF:0x800
,Qu:0x1000,X4:0x2000,XD:0x4000,XE:0x8000,Xa:0x10000,XC:0x20000,XP:0x40000};C.C7={
XG:0x1,XH:0x2,W1:0x4,W2:0x8,W3:0x10,W0:0x20};C.Xj={Xx:0,X0:1,W7:2,Xq:3,XJ:4,X1:5
,X2:6,W8:7,W9:8,Xs:9,Xr:10,XL:11,XK:12};C.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:
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
346};C.XI={Ya:0x1,X9:0x2,X_:0x4,X$:0x8,Xt:0x10,Xi:0x20};
C._Init=function(){C.IP.__proto__=C.Cf;C.EO.__proto__=C.Cf;C.BL.__proto__=C.Cf;C.
P.__proto__=C.BL;C.Root.__proto__=C.P;C.KeyEvent.__proto__=C.Event;C.JF.__proto__=
C.Event;C.Fi.__proto__=C.Event;C.II.__proto__=C.Event;C.Kd.__proto__=C.BL;C.BM.__proto__=
C.EO;C.DB.__proto__=C.BL;C.LE.__proto__=C.IN;C.LF.__proto__=C.IN;C.Or.__proto__=
C.GY;};C._ReInit=function(){var A;if((A=C.L0._this))A._ReInit();};C.CO=function(
D){var A;if((A=C.L0._this)&&(A._cycle!=D))A._Done(C.L0._this=null);};return C;})(
);

/* Embedded Wizard */