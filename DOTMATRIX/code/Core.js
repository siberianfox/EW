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
var AF=[0,0];var AB=[0,0,0,0];var CI="The view does not belong to this group";var
Ed="No view to remove";var Ee="View is not in this group";var Ef="No view to add";
var Eg="View already in a group";var Fx="Recursive invalidate during active update cycle.";
var Eh=[-8,-8,9,9];var EW=[0,0,1,1];var Hr="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
C.Be={Bd:null,AD:null,G:null,Ap:null,F:0x103,Dn:0x14,E8:function(I,E0){},Hi:function(
D){var A;var Em=D^this.Dn;if(!Em)return;this.Dn=D;if(!!this.Ap&&!((this.F&0x400)===
0x400)){this.G.F=this.G.F|0x5000;B.ow([A=this.G,A.BI],this);this.G.Ab([0,0,(A=this.
G.M)[2]-A[0],A[3]-A[1]]);}if(!!this.Ap&&((this.F&0x400)===0x400)){this.Ap.DZ.F=this.
Ap.DZ.F|0x1000;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.BI],this);}},EL:function(
){var O=this.G;while(!!O){var Ca=(C.Root.isPrototypeOf(O)?O:null);if(!!Ca)return Ca;
O=O.G;}return null;},B6:function(Ay,aClip,aOffset,Am,aBlend){},AK:function(Z){return null;
},Cz:function(T,J,BC,CJ,CK,C5){return null;},Fh:function(T){return T;},Fi:function(
I,Bn){return AF;},EQ:function(aOffset,EY){},GetExtent:function(){return AB;},Cd:
function(Dx,Ej){var A;if(((this.F&0x200)===0x200))Dx=Dx&~0x400;var HM=(this.F&~Ej
)|Dx;var En=HM^this.F;this.F=HM;if(!!this.G&&!!(En&0x14)){var Iv=((this.F&0x14)===
0x14);if(Iv&&!this.G.B7)this.G.Ea(this);if(!Iv&&(this.G.B7===this))this.G.Ea(this.
G.H3(this,0x14));}if(!!this.G&&!!(En&0x403))this.G.Ab(this.GetExtent());if(((!!this.
Ap&&!!this.G)&&((HM&0x400)===0x400))&&((En&0x1)===0x1)){this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.ow([A=this.G,A.BI],this);}if(!!this.G&&((En&0x400)===0x400
)){this.Ap=null;this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.BI
],this);}},_Init:function(aArg){this.__proto__=C.Be;B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
Bd)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.AD)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ap)&&(A._cycle!=E
))A._Mark(A._cycle=E);if((A=this.X)&&(A._cycle!=E))A._Mark(A._cycle=E);},X:null,
_cycle:0,_observers:null,_className:"Core::View"};C.EP={Av:B.vw,Au:B.vw,E8:function(
I,E0){var L=B._NewObject(C.Gm,0);this.Ap=null;L.A$=this.getExtent();L.U=I;L.DZ=E0;
L.DI=this.Au;L.DJ=this.Av;this.Ap=L;},Fi:function(I,Bn){var A;var Ax=this.Dn;var
L=(C.Gm.isPrototypeOf(A=this.Ap)?A:null);var x1=L.A$[0];var y1=L.A$[1];var x2=L.
A$[2];var y2=L.A$[3];var A1=[I[2]-I[0],I[3]-I[1]];var w=x2-x1;var h=y2-y1;var tmp;
if(!Bn){var Bx=[(A=L.U)[2]-A[0],A[3]-A[1]];x1=x1-L.U[0];y1=y1-L.U[1];if(Bx[0]!==
A1[0]){var Bg=((Ax&0x4)===0x4);var Bh=((Ax&0x8)===0x8);var BS=((Ax&0x1)===0x1);if(
!Bg&&(BS||!Bh))x1=((x1*A1[0])/Bx[0])|0;if(!Bh&&(BS||!Bg)){x2=x2-L.U[0];x2=((x2*A1[
0])/Bx[0])|0;x2=x2-A1[0];}else x2=x2-L.U[2];x1=x1+I[0];x2=x2+I[2];if(!BS){if(Bg&&
!Bh)x2=x1+w;else if(!Bg&&Bh)x1=x2-w;else{x1=x1+((((x2-x1)-w)/2)|0);x2=x1+w;}}}else{
x2=x2-L.U[2];x1=x1+I[0];x2=x2+I[2];}if(Bx[1]!==A1[1]){var Bi=((Ax&0x10)===0x10);
var Bf=((Ax&0x20)===0x20);var BT=((Ax&0x2)===0x2);if(!Bi&&(BT||!Bf))y1=((y1*A1[1
])/Bx[1])|0;if(!Bf&&(BT||!Bi)){y2=y2-L.U[1];y2=((y2*A1[1])/Bx[1])|0;y2=y2-A1[1];
}else y2=y2-L.U[3];y1=y1+I[1];y2=y2+I[3];if(!BT){if(Bi&&!Bf)y2=y1+h;else if(!Bi&&
Bf)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+h;}}}else{y2=y2-L.U[3];y1=y1+I[1
];y2=y2+I[3];}}else{switch(Bn){case 3:{x1=I[0];x2=x1+w;}break;case 4:{x2=I[2];x1=
x2-w;}break;case 1:{y1=I[1];y2=y1+h;}break;case 2:{y2=I[3];y1=y2-h;}break;default:;
}if((Bn===3)||(Bn===4)){var Bi=((Ax&0x10)===0x10);var Bf=((Ax&0x20)===0x20);var BT=((
Ax&0x2)===0x2);if(BT){y1=I[1];y2=I[3];}else if(Bi&&!Bf){y1=I[1];y2=y1+h;}else if(
Bf&&!Bi){y2=I[3];y1=y2-h;}else{y1=I[1]+((((I[3]-I[1])-h)/2)|0);y2=y1+h;}}if((Bn===
1)||(Bn===2)){var Bg=((Ax&0x4)===0x4);var Bh=((Ax&0x8)===0x8);var BS=((Ax&0x1)===
0x1);if(BS){x1=I[0];x2=I[2];}else if(Bg&&!Bh){x1=I[0];x2=x1+w;}else if(Bh&&!Bg){
x2=I[2];x1=x2-w;}else{x1=I[0]+((((I[2]-I[0])-w)/2)|0);x2=x1+w;}}}L.isEmpty=(x1>=
x2)||(y1>=y2);w=x2-x1;h=y2-y1;if(L.DJ[0]<L.DI[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(L.
DJ[1]<L.DI[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;
if(((this.F&0x100)===0x100)){this.Au=[x1,y1];this.Av=[x2,y2];}else{this.CG([x1,y1
]);this.Cs([x2,y2]);this.Ap=L;}return[w,h];},EQ:function(aOffset,EY){if(EY){this.
Au=B.aak(this.Au,aOffset);this.Av=B.aak(this.Av,aOffset);}else{this.CG(B.aak(this.
Au,aOffset));this.Cs(B.aak(this.Av,aOffset));}},GetExtent:function(){if(!!this.Ap&&
this.Ap.isEmpty)return AB;return this.getExtent();},getExtent:function(){var x1=
this.Au[0];var y1=this.Au[1];var x2=this.Av[0];var y2=this.Av[1];var w=x2-x1;var
h=y2-y1;var tmp;if(w<0)w=-w;if(h<0)h=-h;if(w>=h){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+
1;}if(h>=w){if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(
y2<y1){tmp=y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},Cs:function(D){var A;if(B.
z8(D,this.Av))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent(
));this.Ap=null;this.Av=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.BI],this);}},CG:function(
D){var A;if(B.z8(D,this.Au))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.
GetExtent());this.Ap=null;this.Au=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(
this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===
0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.BI],this);
}},_Init:function(aArg){C.Be._Init.call(this,aArg);this.__proto__=C.EP;},_className:
"Core::LineView"};C.CH={Ba:B.vw,Bl:B.vw,Av:B.vw,Au:B.vw,E8:function(I,E0){var L=
B._NewObject(C.Gn,0);this.Ap=null;L.A$=this.GetExtent();L.U=I;L.DZ=E0;L.DI=this.
Au;L.DJ=this.Av;L.FZ=this.Bl;L.F0=this.Ba;this.Ap=L;},Fi:function(I,Bn){var A;var
Ax=this.Dn;var L=(C.Gn.isPrototypeOf(A=this.Ap)?A:null);var x1=L.A$[0];var y1=L.
A$[1];var x2=L.A$[2];var y2=L.A$[3];var A1=[I[2]-I[0],I[3]-I[1]];var w=x2-x1;var
h=y2-y1;if(!Bn){var Bx=[(A=L.U)[2]-A[0],A[3]-A[1]];x1=x1-L.U[0];y1=y1-L.U[1];if(
Bx[0]!==A1[0]){var Bg=((Ax&0x4)===0x4);var Bh=((Ax&0x8)===0x8);var BS=((Ax&0x1)===
0x1);if(!Bg&&(BS||!Bh))x1=((x1*A1[0])/Bx[0])|0;if(!Bh&&(BS||!Bg)){x2=x2-L.U[0];x2=((
x2*A1[0])/Bx[0])|0;x2=x2-A1[0];}else x2=x2-L.U[2];x1=x1+I[0];x2=x2+I[2];if(!BS){
if(Bg&&!Bh)x2=x1+w;else if(!Bg&&Bh)x1=x2-w;else{x1=x1+((((x2-x1)-w)/2)|0);x2=x1+
w;}}}else{x2=x2-L.U[2];x1=x1+I[0];x2=x2+I[2];}if(Bx[1]!==A1[1]){var Bi=((Ax&0x10
)===0x10);var Bf=((Ax&0x20)===0x20);var BT=((Ax&0x2)===0x2);if(!Bi&&(BT||!Bf))y1=((
y1*A1[1])/Bx[1])|0;if(!Bf&&(BT||!Bi)){y2=y2-L.U[1];y2=((y2*A1[1])/Bx[1])|0;y2=y2-
A1[1];}else y2=y2-L.U[3];y1=y1+I[1];y2=y2+I[3];if(!BT){if(Bi&&!Bf)y2=y1+h;else if(
!Bi&&Bf)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+h;}}}else{y2=y2-L.U[3];y1=y1+
I[1];y2=y2+I[3];}}else{switch(Bn){case 3:{x1=I[0];x2=x1+w;}break;case 4:{x2=I[2];
x1=x2-w;}break;case 1:{y1=I[1];y2=y1+h;}break;case 2:{y2=I[3];y1=y2-h;}break;default:;
}if((Bn===3)||(Bn===4)){var Bi=((Ax&0x10)===0x10);var Bf=((Ax&0x20)===0x20);var BT=((
Ax&0x2)===0x2);if(BT){y1=I[1];y2=I[3];}else if(Bi&&!Bf){y1=I[1];y2=y1+h;}else if(
Bf&&!Bi){y2=I[3];y1=y2-h;}else{y1=I[1]+((((I[3]-I[1])-h)/2)|0);y2=y1+h;}}if((Bn===
1)||(Bn===2)){var Bg=((Ax&0x4)===0x4);var Bh=((Ax&0x8)===0x8);var BS=((Ax&0x1)===
0x1);if(BS){x1=I[0];x2=I[2];}else if(Bg&&!Bh){x1=I[0];x2=x1+w;}else if(Bh&&!Bg){
x2=I[2];x1=x2-w;}else{x1=I[0]+((((I[2]-I[0])-w)/2)|0);x2=x1+w;}}}L.isEmpty=(x1>=
x2)||(y1>=y2);w=(x2-x1)-1;h=(y2-y1)-1;var DB=L.A$[0];var DC=L.A$[1];var C$=(L.A$[
2]-DB)-1;var C_=(L.A$[3]-DC)-1;if(!C$)C$=1;if(!C_)C_=1;if(((this.F&0x100)===0x100
)){this.Au=[x1+((((L.DI[0]-DB)*w)/C$)|0),y1+((((L.DI[1]-DC)*h)/C_)|0)];this.Av=[
x1+((((L.DJ[0]-DB)*w)/C$)|0),y1+((((L.DJ[1]-DC)*h)/C_)|0)];this.Bl=[x1+((((L.FZ[
0]-DB)*w)/C$)|0),y1+((((L.FZ[1]-DC)*h)/C_)|0)];this.Ba=[x1+((((L.F0[0]-DB)*w)/C$
)|0),y1+((((L.F0[1]-DC)*h)/C_)|0)];}else{this.CG([x1+((((L.DI[0]-DB)*w)/C$)|0),y1+((((
L.DI[1]-DC)*h)/C_)|0)]);this.Cs([x1+((((L.DJ[0]-DB)*w)/C$)|0),y1+((((L.DJ[1]-DC)
*h)/C_)|0)]);this.DP([x1+((((L.FZ[0]-DB)*w)/C$)|0),y1+((((L.FZ[1]-DC)*h)/C_)|0)]
);this.Eb([x1+((((L.F0[0]-DB)*w)/C$)|0),y1+((((L.F0[1]-DC)*h)/C_)|0)]);this.Ap=L;
}return[w+1,h+1];},EQ:function(aOffset,EY){if(EY){this.Au=B.aak(this.Au,aOffset);
this.Av=B.aak(this.Av,aOffset);this.Bl=B.aak(this.Bl,aOffset);this.Ba=B.aak(this.
Ba,aOffset);}else{this.CG(B.aak(this.Au,aOffset));this.Cs(B.aak(this.Av,aOffset)
);this.DP(B.aak(this.Bl,aOffset));this.Eb(B.aak(this.Ba,aOffset));}},GetExtent:function(
){if(!!this.Ap&&this.Ap.isEmpty)return AB;var x1=this.Au[0];var y1=this.Au[1];var
x2=this.Bl[0];var y2=this.Bl[1];if((((this.Ba[0]!==x1)||(this.Av[1]!==y1))||(this.
Av[0]!==x2))||(this.Ba[1]!==y2)){if(this.Av[0]<x1)x1=this.Av[0];if(this.Bl[0]<x1
)x1=this.Bl[0];if(this.Ba[0]<x1)x1=this.Ba[0];if(this.Av[1]<y1)y1=this.Av[1];if(
this.Bl[1]<y1)y1=this.Bl[1];if(this.Ba[1]<y1)y1=this.Ba[1];if(this.Au[0]>x2)x2=this.
Au[0];if(this.Av[0]>x2)x2=this.Av[0];if(this.Ba[0]>x2)x2=this.Ba[0];if(this.Au[1
]>y2)y2=this.Au[1];if(this.Av[1]>y2)y2=this.Av[1];if(this.Ba[1]>y2)y2=this.Ba[1];
}else{var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[
x1,y1,x2+1,y2+1];},Eb:function(D){var A;if(B.z8(D,this.Ba))return;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ab(this.GetExtent());this.Ap=null;this.Ba=D;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());if((!!this.G&&((this.F&0x400
)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.
F|0x4000;B.ow([A=this.G,A.BI],this);}},DP:function(D){var A;if(B.z8(D,this.Bl))return;
if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());this.Ap=null;this.
Bl=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());if((!!this.G&&((
this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.ow([A=this.G,A.BI],this);}},Cs:function(D){var A;if(B.z8(D
,this.Av))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());this.
Ap=null;this.Av=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());
if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.BI],this);}},CG:function(D){var
A;if(B.z8(D,this.Au))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent(
));this.Ap=null;this.Au=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.BI],this);}},Hb:function(
Bt){var AE=B.aan(4,B.vw,null);var i=0;var j=3;var HJ=false;var HK=false;AE.Set(0
,this.Au);AE.Set(1,this.Av);AE.Set(2,this.Bl);AE.Set(3,this.Ba);while(i<4){var I5=
AE.Get(i)[0];var G6=AE.Get(i)[1];var KZ=AE.Get(j)[0];var HV=AE.Get(j)[1];if(((G6>
Bt[1])!==(HV>Bt[1]))||((G6<Bt[1])!==(HV<Bt[1]))){var x=((((KZ-I5)*(Bt[1]-G6))/(HV-
G6))|0)+I5;if(Bt[0]>x)HJ=!HJ;if(Bt[0]<x)HK=!HK;}j=i;i=i+1;}return HJ||HK;},Ji:function(
){return((((this.Au[0]===this.Ba[0])&&(this.Av[0]===this.Bl[0]))&&(this.Au[1]===
this.Av[1]))&&(this.Bl[1]===this.Ba[1]))||((((this.Au[0]===this.Av[0])&&(this.Bl[
0]===this.Ba[0]))&&(this.Au[1]===this.Ba[1]))&&(this.Av[1]===this.Bl[1]));},_Init:
function(aArg){C.Be._Init.call(this,aArg);this.__proto__=C.CH;},_className:"Core::QuadView"
};C.Bb={M:B.vx,E8:function(I,E0){var L=B._NewObject(C.EO,0);L.A$=this.M;L.U=I;L.
DZ=E0;this.Ap=L;},Fi:function(I,Bn){var A;var Ax=this.Dn;var L=this.Ap;var x1=L.
A$[0];var y1=L.A$[1];var x2=L.A$[2];var y2=L.A$[3];var A1=[I[2]-I[0],I[3]-I[1]];
var w=x2-x1;var h=y2-y1;if(!Bn){var Bx=[(A=L.U)[2]-A[0],A[3]-A[1]];x1=x1-L.U[0];
y1=y1-L.U[1];if(Bx[0]!==A1[0]){var Bg=((Ax&0x4)===0x4);var Bh=((Ax&0x8)===0x8);var
BS=((Ax&0x1)===0x1);if(!Bg&&(BS||!Bh))x1=((x1*A1[0])/Bx[0])|0;if(!Bh&&(BS||!Bg)){
x2=x2-L.U[0];x2=((x2*A1[0])/Bx[0])|0;x2=x2-A1[0];}else x2=x2-L.U[2];x1=x1+I[0];x2=
x2+I[2];if(!BS){if(Bg&&!Bh)x2=x1+w;else if(!Bg&&Bh)x1=x2-w;else{x1=x1+((((x2-x1)-
w)/2)|0);x2=x1+w;}}}else{x2=x2-L.U[2];x1=x1+I[0];x2=x2+I[2];}if(Bx[1]!==A1[1]){var
Bi=((Ax&0x10)===0x10);var Bf=((Ax&0x20)===0x20);var BT=((Ax&0x2)===0x2);if(!Bi&&(
BT||!Bf))y1=((y1*A1[1])/Bx[1])|0;if(!Bf&&(BT||!Bi)){y2=y2-L.U[1];y2=((y2*A1[1])/
Bx[1])|0;y2=y2-A1[1];}else y2=y2-L.U[3];y1=y1+I[1];y2=y2+I[3];if(!BT){if(Bi&&!Bf
)y2=y1+h;else if(!Bi&&Bf)y1=y2-h;else{y1=y1+((((y2-y1)-h)/2)|0);y2=y1+h;}}}else{
y2=y2-L.U[3];y1=y1+I[1];y2=y2+I[3];}}else{switch(Bn){case 3:{x1=I[0];x2=x1+w;}break;
case 4:{x2=I[2];x1=x2-w;}break;case 1:{y1=I[1];y2=y1+h;}break;case 2:{y2=I[3];y1=
y2-h;}break;default:;}if((Bn===3)||(Bn===4)){var Bi=((Ax&0x10)===0x10);var Bf=((
Ax&0x20)===0x20);var BT=((Ax&0x2)===0x2);if(BT){y1=I[1];y2=I[3];}else if(Bi&&!Bf
){y1=I[1];y2=y1+h;}else if(Bf&&!Bi){y2=I[3];y1=y2-h;}else{y1=I[1]+((((I[3]-I[1])-
h)/2)|0);y2=y1+h;}}if((Bn===1)||(Bn===2)){var Bg=((Ax&0x4)===0x4);var Bh=((Ax&0x8
)===0x8);var BS=((Ax&0x1)===0x1);if(BS){x1=I[0];x2=I[2];}else if(Bg&&!Bh){x1=I[0
];x2=x1+w;}else if(Bh&&!Bg){x2=I[2];x1=x2-w;}else{x1=I[0]+((((I[2]-I[0])-w)/2)|0
);x2=x1+w;}}}L.isEmpty=(x1>=x2)||(y1>=y2);if(((this.F&0x100)===0x100))this.M=[x1
,y1,x2,y2];else{this.Al([x1,y1,x2,y2]);this.Ap=L;}return[x2-x1,y2-y1];},EQ:function(
aOffset,EY){if(EY)this.M=B.aam(this.M,aOffset);else this.Al(B.aam(this.M,aOffset
));},GetExtent:function(){return this.M;},Al:function(D){var A;if(B.z9(D,this.M)
)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.M);this.Ap=null;this.M=
D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.M);if((!!this.G&&((this.F&0x400
)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.
F|0x4000;B.ow([A=this.G,A.BI],this);}},_Init:function(aArg){C.Be._Init.call(this
,aArg);this.__proto__=C.Bb;},_className:"Core::RectView"};C.Af={Da:null,Ck:null,
GX:null,AL:null,B7:null,Bz:function(aArg){this.Jk();},B6:function(Ay,aClip,aOffset
,Am,aBlend){var A;Am=((Am+1)*255)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);if(!this.
AL||(Ay.Dd===this))this.Iu(Ay,aClip,B.aak(aOffset,this.M.slice(0,2)),Am,aBlend);
else{var AU=255|(255<<8)|(255<<16)|((Am&0xFF)<<24);this.AL.Update();Ay.H0(aClip,
this.AL,0,B.aam(this.M,aOffset),AF,AU,AU,AU,AU,aBlend);}},Cz:function(T,J,BC,CJ,
CK,C5){var A;var H=this.Ck;var Er=null;var N=AB;var BY=null;if(((A=B.kz(T,this.M
))[0]>=A[2])||(A[1]>=A[3]))return null;T=B.aal(T,this.M.slice(0,2));if(!!CK){H=CK;
while(!!H&&(H.G!==this))H=H.G;}while(!!H){if(((H.F&0x400)===0x400)&&!BY){BY=H.AD;
while(!!BY&&!((BY.F&0x200)===0x200))BY=BY.AD;if(!!BY)N=B.kz(T,BY.GetExtent());else
N=AB;}if(BY===H){BY=null;N=AB;}if((((((H.F&0x8)===0x8)&&((H.F&0x10)===0x10))&&!((
H.F&0x40000)===0x40000))&&!((H.F&0x20000)===0x20000))&&(!((H.F&0x10000)===0x10000
)||(null===H))){var A$=H.GetExtent();var GP=CJ;var El=null;if(GP===H)GP=null;if(((
H.F&0x400)===0x400)){if(!(((A=B.kz(A$,N))[0]>=A[2])||(A[1]>=A[3])))El=H.Cz(N,J,BC
,GP,CK,C5);}else if(!(((A=B.kz(A$,T))[0]>=A[2])||(A[1]>=A[3]))||(CJ===H))El=H.Cz(
T,J,BC,GP,CK,C5);H=H.AD;if(!!El){if(!Er||((El.Fk<Er.Fk)&&(El.Fk>=0)))Er=El;if(!El.
Fk)H=null;}}else H=H.AD;CK=null;}return Er;},Fh:function(T){var A;var Bm;var H=this.
Da;var FJ=AB;var FX=true;var result=(T=Bm=B.aal(T,this.M.slice(0,2)),Bm);while(!
!H){if(((H.F&0x200)===0x200)){var FW=(C.Fr.isPrototypeOf(H)?H:null);FJ=B.kz(T,FW.
M);FX=((FW.F&0x1)===0x1);}if(((H.F&0x1)===0x1)){if(((H.F&0x400)===0x400)){if(FX){
var N=B.kz(H.GetExtent(),FJ);if(!((N[0]>=N[2])||(N[1]>=N[3])))result=B.vS(result
,H.Fh(N));}}else{var N=B.kz(H.GetExtent(),T);if(!((N[0]>=N[2])||(N[1]>=N[3])))result=
B.vS(result,H.Fh(N));}}H=H.Bd;}return B.kz(B.aam(result,this.M.slice(0,2)),this.
M);},Cd:function(Dx,Ej){var A;var KB=this.F;C.Bb.Cd.call(this,Dx,Ej);var En=this.
F^KB;if(!!this.B7&&((En&0x40)===0x40)){if(((this.F&0x40)===0x40))this.B7.Cd(0x40
,0x0);else this.B7.Cd(0x0,0x40);}if(!!En){this.F=this.F|0x8000;B.ow([this,this.BI
],this);}},Al:function(D){var A;if(B.z9(D,this.M))return;var DY=[(A=this.M)[2]-A[
0],A[3]-A[1]];var GY=[D[2]-D[0],D[3]-D[1]];var ED=!B.z8(DY,GY);if(ED&&!!this.AL){
this.AL.Fp(GY);B.vv(this,0);B.vv(this.AL,0);}C.Bb.Al.call(this,D);if((ED&&(DY[0]>
0))&&(DY[1]>0)){var U=[].concat(AF,DY);var H=this.Da;while(!!H){if((!H.Ap&&(H.Dn
!==0x14))&&!((H.F&0x400)===0x400))H.E8(U,null);H=H.Bd;}}if(ED){this.F=this.F|0x5000;
B.ow([this,this.BI],this);}},IV:function(Z){var IH=(C.KeyEvent.isPrototypeOf(Z)?
Z:null);var CQ=this.GX;if(!IH)return null;while(!!CQ&&!CQ.AK(IH))CQ=CQ.Bd;return CQ;
},KV:function(AO){if(!!this.AL){this.AL.Dd=this;var N=B.aal(this.Fh(B.aam(this.AL.
Ce,this.M.slice(0,2))),this.M.slice(0,2));this.AL.Gj(N,N,0x00000000,0x00000000,0x00000000
,0x00000000,false);this.Iu(this.AL,N,AF,255,true);this.AL.Dd=null;}},Iu:function(
Ay,aClip,aOffset,Am,aBlend){var A;var H=this.Da;var FJ=AB;var FX=true;this.Jb(Ay
,aClip,aOffset,Am,aBlend);while(!!H){if(((H.F&0x200)===0x200)){var FW=(C.Fr.isPrototypeOf(
H)?H:null);FJ=B.kz(aClip,B.aam(FW.M,aOffset));FX=((FW.F&0x1)===0x1);}if(((H.F&0x1
)===0x1)){if(((H.F&0x400)===0x400)){if(FX){var N=B.kz(B.aam(H.GetExtent(),aOffset
),FJ);if(!((N[0]>=N[2])||(N[1]>=N[3])))H.B6(Ay,N,aOffset,Am,aBlend);}}else{var N=
B.kz(B.aam(H.GetExtent(),aOffset),aClip);if(!((N[0]>=N[2])||(N[1]>=N[3])))H.B6(Ay
,N,aOffset,Am,aBlend);}}H=H.Bd;}this.Jc(Ay,aClip,aOffset,Am,aBlend);},KH:function(
){var A;var HH=((this.F&0x1000)===0x1000);var DF=[0,0,(A=this.M)[2]-A[0],A[3]-A[
1]];var Db=false;var E6=AB;var HG=AB;var H=this.Ck;var BY=null;while(!!H){if(((H.
F&0x800)===0x800)){Db=true;H.F=H.F&~0x800;}if(Db&&((H.F&0x200)===0x200))Db=false;
H=H.AD;}Db=false;H=this.Da;if(HH){this.F=this.F&~0x1000;HH=!((DF[0]>=DF[2])||(DF[
1]>=DF[3]));}this.F=this.F|0x2000;while(!!H){if(((H.F&0x400)===0x400)){if(!!H.Ap&&(
H.Ap.DZ!==BY))H.Ap=null;if((!H.Ap&&Db)&&(H.Dn!==0x14))H.E8(HG,BY);}if(!!H.Ap){if(
HH&&!((H.F&0x400)===0x400))H.Fi(DF,0);if(Db&&((H.F&0x400)===0x400))H.Fi(HG,0);}if(((
H.F&0x200)===0x200)){Db=((H.F&0x1000)===0x1000);BY=(C.Fr.isPrototypeOf(H)?H:null
);if(Db){H.F=H.F&~0x1000;E6=BY.M;HG=E6;Db=!((E6[0]>=E6[2])||(E6[1]>=E6[3]));}if(
Db)this.Ab(BY.M);}H=H.Bd;}this.F=this.F&~0x2000;this.Id([DF[2]-DF[0],DF[3]-DF[1]
]);},BI:function(AO){var A;var KX=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===
0x4000)){this.F=this.F&~0x4000;this.KH();}if(((this.F&0x8000)===0x8000)||KX){this.
F=this.F&~0x8000;this.Hq(this.F);}},Ea:function(D){var A;if(!!D&&(D.G!==this))throw new
Error(CI);if(!!D&&!((D.F&0x14)===0x14))D=null;if(!!D&&((D.F&0x10000)===0x10000))
D=null;if(D===this.B7)return;if(!!this.B7)this.B7.Cd(0x0,0x60);this.B7=D;if(!!D){
if(((this.F&0x40)===0x40))D.Cd(0x60,0x0);else D.Cd(0x20,0x0);}},Fo:function(D){var
A;if(!!this.AL===D)return;if(D){this.AL=B._NewObject(B.Graphics.Canvas,0);this.AL.
Fp([(A=this.M)[2]-A[0],A[3]-A[1]]);this.AL.Gq=[this,this.KV];}else{this.AL.Gq=null;
this.AL.Fp(AF);this.AL=null;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.M);
B.vv(this,0);},Jc:function(Ay,aClip,aOffset,Am,aBlend){},Jb:function(Ay,aClip,aOffset
,Am,aBlend){},GetMinimalSize:function(){return AF;},Hd:function(){var A;if(((this.
F&0x40)===0x40))return;if(((this.F&0x80)===0x80))return;if(((this.F&0x10000)===0x10000
)){if(!!this.G)this.G.Hd();return;}if(!!this.G&&(this.G.B7!==this))this.G.Ea(this
);if(!!this.G)this.G.Hd();},Jj:function(FG){var A;return(A=FG)&&((this.F&A)===A);
},Jm:function(Bt){var tmp=this;while(!!tmp){Bt=B.aaj(Bt,tmp.M.slice(0,2));tmp=tmp.
G;}return Bt;},DispatchEvent:function(Z){var A;var H=this.B7;var O=(C.Af.isPrototypeOf(
H)?H:null);var AW=null;if(!!H&&((((H.F&0x10000)===0x10000)||((H.F&0x40000)===0x40000
))||((H.F&0x20000)===0x20000))){H=null;O=null;}if(!!O)AW=O.DispatchEvent(Z);else
if(!!H)AW=H.AK(Z);if(!AW)AW=this.AK(Z);if(!AW)AW=this.IV(Z);return AW;},BroadcastEventAtPosition:
function(Z,Im,aFilter){var A;var H=this.Ck;var AW=null;while(!!H&&!AW){if((!aFilter||((
A=aFilter)&&((H.F&A)===A)))&&B.vt(H.GetExtent(),Im)){var O=(C.Af.isPrototypeOf(H
)?H:null);if(!!O)AW=O.BroadcastEventAtPosition(Z,B.aaj(Im,O.M.slice(0,2)),aFilter
);else AW=H.AK(Z);}H=H.AD;}if(!AW)AW=this.AK(Z);return AW;},BroadcastEvent:function(
Z,aFilter){var A;var H=this.Ck;var AW=null;while(!!H&&!AW){if(!aFilter||((A=aFilter
)&&((H.F&A)===A))){var O=(C.Af.isPrototypeOf(H)?H:null);if(!!O)AW=O.BroadcastEvent(
Z,aFilter);else AW=H.AK(Z);}H=H.AD;}if(!AW)AW=this.AK(Z);if(!AW)AW=this.IV(Z);return AW;
},Id:function(Io){},Hq:function(FG){},Jk:function(){this.F=this.F|0x8000;B.ow([this
,this.BI],this);},Ab:function(T){var A;var O=this;while(!!O&&!((T[0]>=T[2])||(T[
1]>=T[3]))){var E1=O.AL;if(!O.G&&(O!==this)){O.Ab(T);return;}if(!!E1){var Kz=E1.
Ce;E1.Ce=B.vS(E1.Ce,T);if(!B.z9(Kz,E1.Ce)){B.vv(O,0);B.vv(E1,0);}}if(!((O.F&0x1)===
0x1))return;T=B.kz(B.aam(T,O.M.slice(0,2)),O.M);O=O.G;}},H3:function(R,aFilter){
var A;if(!R||(R.G!==this))return null;var DX=R.Bd;var D0=R.AD;var FV=0x10000;if(((
aFilter&0x10000)===0x10000))FV=0x0;while(!!DX||!!D0){if((!!DX&&(!aFilter||((A=aFilter
)&&((DX.F&A)===A))))&&(!FV||!((A=FV)&&((DX.F&A)===A))))return DX;if((!!D0&&(!aFilter||((
A=aFilter)&&((D0.F&A)===A))))&&(!FV||!((A=FV)&&((D0.F&A)===A))))return D0;if(!!DX
)DX=DX.Bd;if(!!D0)D0=D0.AD;}return null;},H$:function(R){var A;if(!R)throw new Error(
Ed);if(R.G!==this)throw new Error(Ee);if((((R.F&0x401)===0x401)&&!!R.AD)&&!!R.Ap
){R.AD.F=R.AD.F|0x800;this.F=this.F|0x4000;B.ow([this,this.BI],this);}if(((R.F&0x200
)===0x200)){if(!!R.AD)R.AD.F=R.AD.F|0x800;this.F=this.F|0x4000;B.ow([this,this.BI
],this);}R.Ap=null;if(this.B7===R)this.Ea(this.H3(R,0x14));if(!!R.AD)R.AD.Bd=R.Bd;
if(!!R.Bd)R.Bd.AD=R.AD;if(this.Da===R)this.Da=R.Bd;if(this.Ck===R)this.Ck=R.AD;R.
G=null;R.Bd=null;R.AD=null;if(((R.F&0x1)===0x1))this.Ab(R.GetExtent());},AP:function(
R,EZ){var A;if(!R)throw new Error(Ef);if(!!R.G)throw new Error(Eg);var Dy=null;if((
EZ<0)&&!!this.Ck){Dy=this.Ck;EZ=EZ+1;}while(((EZ<0)&&!!Dy)&&!!Dy.AD){Dy=Dy.AD;EZ=
EZ+1;}if(!Dy){R.G=this;R.AD=this.Ck;if(!!this.Ck)this.Ck.Bd=R;if(!this.Da)this.Da=
R;this.Ck=R;}else{R.G=this;R.AD=Dy.AD;R.Bd=Dy;Dy.AD=R;if(!!R.AD)R.AD.Bd=R;else this.
Da=R;}if(((R.F&0x1)===0x1))this.Ab(R.GetExtent());if(((!this.B7&&((R.F&0x4)===0x4
))&&((R.F&0x10)===0x10))&&!((R.F&0x10000)===0x10000))this.Ea(R);if(((R.F&0x401)===
0x401)){R.F=R.F|0x800;this.F=this.F|0x4000;B.ow([this,this.BI],this);}if(((R.F&0x200
)===0x200)){R.F=R.F|0x800;this.F=this.F|0x4000;B.ow([this,this.BI],this);}},_Init:
function(aArg){C.Bb._Init.call(this,aArg);this.__proto__=C.Af;this.F=0x1F;this.Bz(
aArg);},_Mark:function(E){var A;C.Bb._Mark.call(this,E);if((A=this.Da)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.Ck)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.GX)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.AL)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.B7)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::Group"
};C.Root={B0:null,An:B.aan(10,null,null),E2:null,DA:null,Gc:0,AM:0,Bo:B.aan(10,0
,null),GN:B.aan(10,B.vx,null),Cj:B.aan(10,0,null),C9:B.aan(10,B.vw,null),E4:B.aan(
10,0,null),Dz:B.aan(10,B.vw,null),Ci:B.aan(10,B.vw,null),BX:B.aan(10,B.vw,null),
CM:B.aan(10,B.vw,null),Ag:0,GU:0,GT:0,BH:B.aan(4,0,null),A4:B.aan(4,B.vx,null),A3:
0,FS:0,E9:0,HI:true,Bz:function(aArg){if(!!!this.X){var obj=this;B.aaG(obj);}},EL:
function(){return this;},B6:function(Ay,aClip,aOffset,Am,aBlend){var fullScreenUpdate=
false;fullScreenUpdate=B.mr;if(!fullScreenUpdate)Ay.Gj(aClip,B.aam(B.aam(aClip,aOffset
),this.M.slice(0,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.Af.B6.
call(this,Ay,aClip,aOffset,Am,aBlend);},Cd:function(Dx,Ej){var A;C.Af.Cd.call(this
,Dx,Ej);if(!this.G&&(((Dx&0x1)===0x1)||((Ej&0x1)===0x1)))this.Ab([0,0,(A=this.M)[
2]-A[0],A[3]-A[1]]);if(!this.G&&(((Dx&0x2)===0x2)||((Ej&0x2)===0x2)))this.Ab([0,
0,(A=this.M)[2]-A[0],A[3]-A[1]]);},Ea:function(D){if((D!==null)||!D)C.Af.Ea.call(
this,D);},Fo:function(D){var A;var Ky=this.AL;C.Af.Fo.call(this,D);if(((Ky!==this.
AL)&&!this.G)&&((this.F&0x1)===0x1))this.Ab([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);
},DispatchEvent:function(Z){if(!!Z){Z.Fn=!!this.AM;if(!!this.AM)Z.Ad=this.AM;}var
AW;AW=C.Af.DispatchEvent.call(this,Z);this.AM=0;return AW;},BroadcastEvent:function(
Z,aFilter){if(!!Z){Z.Fn=!!this.AM;if(!!this.AM)Z.Ad=this.AM;}var AW=C.Af.BroadcastEvent.
call(this,Z,aFilter);this.AM=0;return AW;},Ab:function(T){var A;if(this.Gc>0)throw new
Error(Fx);if(!!this.AL&&!this.G){if(((A=this.AL.Ce)[0]>=A[2])||(A[1]>=A[3])){B.vv(
this,0);B.vv(this.AL,0);}this.AL.Ce=B.vS(this.AL.Ce,T);}var fullScreenUpdate=false;
fullScreenUpdate=B.mr;if(fullScreenUpdate)T=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];if(
!!this.G){C.Af.Ab.call(this,T);return;}T=B.kz(B.aam(T,this.M.slice(0,2)),this.M);
if((T[0]>=T[2])||(T[1]>=T[3]))return;var i;for(i=0;i<this.A3;i=i+1)if(!(((A=B.kz(
this.A4.Get(i),T))[0]>=A[2])||(A[1]>=A[3]))){this.A4.Set(i,B.vS(this.A4.Get(i),T
));this.BH.Set(i,B.zS(this.A4.Get(i)));return;}if(this.A3<3){this.A4.Set(this.A3
,T);this.BH.Set(this.A3,B.zS(T));this.A3=this.A3+1;return;}var j;var BZ;var FR=0;
var FT=0;var Ip=2147483647;this.A4.Set(this.A3,T);this.BH.Set(this.A3,B.zS(T));for(
j=0;j<=this.A3;j=j+1)for(BZ=j+1;BZ<=this.A3;BZ=BZ+1){var G4=B.zS(B.vS(this.A4.Get(
j),this.A4.Get(BZ)));var IU=((G4<<8)/(this.BH.Get(j)+this.BH.Get(BZ)))|0;if(IU<Ip
){Ip=IU;FR=j;FT=BZ;}}this.A4.Set(FR,B.vS(this.A4.Get(FR),this.A4.Get(FT)));this.
BH.Set(FR,B.zS(this.A4.Get(FR)));if(FT!==this.A3){this.A4.Set(FT,this.A4.Get(this.
A3));this.BH.Set(FT,this.BH.Get(this.A3));}},Kq:function(){var Bq=B._NewObject(C.
EJ,0);Bq.Fn=!!this.AM;if(!!this.AM)Bq.Ad=this.AM;return Bq;},Ek:function(){var Bq=
B._NewObject(C.CY,0);Bq.Fn=!!this.AM;if(!!this.AM)Bq.Ad=this.AM;return Bq;},E3:function(
){var Bq=B._NewObject(C.Gh,0);Bq.Fn=!!this.AM;if(!!this.AM)Bq.Ad=this.AM;return Bq;
},Kr:function(AO){var i;var Er=false;for(i=0;i<10;i=i+1)if(!!this.An.Get(i)){var
pos=this.BX.Get(i);var O=this.An.Get(i).G;while(!!O&&(O!==this)){pos=B.aaj(pos,O.
M.slice(0,2));O=O.G;}if(!O&&(this.An.Get(i)!==this)){var tmp=this.An.Get(i);this.
Ag=i;this.An.Set(i,null);tmp.AK(this.Ek().InitializeUp(i,this.Dz.Get(i),this.C9.
Get(i),this.Cj.Get(i),this.Bo.Get(i)+1,this.Ci.Get(i),false,this.BX.Get(i),this.
CM.Get(i)));this.BroadcastEvent(this.E3().InitializeUp(i,this.Bo.Get(i)+1,false,
tmp,this.BX.Get(i)),0x18);}else{this.Cj.Set(i,(this.DA.Ad-this.E4.Get(i))|0);if(
this.Cj.Get(i)<10)this.Cj.Set(i,10);this.Ag=i;this.An.Get(i).AK(this.Ek().InitializeHold(
i,pos,this.C9.Get(i),this.Cj.Get(i),this.Bo.Get(i)+1,this.Ci.Get(i),this.BX.Get(
i),this.CM.Get(i)));Er=true;}}if(!Er)this.DA.Cf(false);},GetFPS:function(){var ticksCount=
0;var Iw=0;ticksCount=((new Date).getTime()-B.vs)|0;if(!!this.GU&&(ticksCount>this.
GU))Iw=((this.GT*1000)/((ticksCount-this.GU)|0))|0;this.GT=0;this.GU=ticksCount;
return Iw;},Update:function(){var A;if(!this.E2)this.E2=B._NewObject(B.Graphics.
Canvas,0);this.E2.Fp([(A=this.M)[2]-A[0],A[3]-A[1]]);this.E2.Update();return this.
UpdateGE20(this.E2);},UpdateGE20:function(Ay){if(!this.BeginUpdate())return AB;var
Dj=this.UpdateCanvas(Ay,AF);this.EndUpdate();return Dj;},EndUpdate:function(){if(
this.A3>0){this.GT=this.GT+1;this.A3=0;}},UpdateCanvas:function(Ay,aOffset){var A;
var Dj=AB;var Kn=[].concat(aOffset,B.aak(Ay.FrameSize,aOffset));var i;var j=this.
A3;this.Gc=this.Gc+1;Ay.Dd=this;for(i=0;(i<j)&&(i<4);i=i+1)if(this.BH.Get(i)>0){
this.B6(Ay,B.aal(this.A4.Get(i),aOffset),[-aOffset[0],-aOffset[1]],255,true);Dj=
B.vS(Dj,B.kz(Kn,this.A4.Get(i)));}else j=j+1;Ay.Dd=null;this.Gc=this.Gc-1;if(!((
Dj[0]>=Dj[2])||(Dj[1]>=Dj[3])))return B.aal(Dj,aOffset);else return Dj;},GetUpdateRegion:
function(Gx){var i;var j=this.A3;if(Gx<0)return AB;for(i=0;(i<j)&&(i<4);i=i+1)if(
!this.BH.Get(i)){j=j+1;Gx=Gx+1;}else if(i===Gx)return this.A4.Get(i);return AB;}
,BeginUpdate:function(){var A;var i;if(!!this.A3&&!B.z9(this.A4.Get(0),[0,0,(A=this.
M)[2]-A[0],A[3]-A[1]])){var I3=B.aan(3,B.vx,null);var I2=this.A3;for(i=0;i<I2;i++
)I3.Set(i,this.A4.Get(i));for(i=0;i<I2;i++){var IW=B.aam(I3.Get(i),this.M.slice(
0,2));var IX=this.Fh(IW);if(!B.z9(IW,IX))this.Ab(B.aal(IX,this.M.slice(0,2)));}}
var j;var BZ;for(j=0;j<(this.A3-1);j++)if(this.BH.Get(j)>0)for(BZ=j+1;BZ<this.A3;
BZ++)if(this.BH.Get(BZ)>0){var G4=B.zS(B.vS(this.A4.Get(j),this.A4.Get(BZ)));if(((
G4-this.BH.Get(j))-this.BH.Get(BZ))<0){this.A4.Set(j,B.vS(this.A4.Get(j),this.A4.
Get(BZ)));this.BH.Set(j,G4);this.BH.Set(BZ,0);}}for(i=this.A3-1;i>=0;i--)if(!this.
BH.Get(i))this.A3=this.A3-1;return this.A3;},DoesNeedUpdate:function(){if(this.A3>
0)return true;return false;},Initialize:function(Io){this.Al([].concat(AF,Io));if(
this.HI)this.F=this.F|0x60;else this.F=this.F|0x20;this.Ab(this.M);return this;}
,SetRootFocus:function(Ht){if(Ht===this.HI)return false;this.HI=Ht;if(!Ht)this.Cd(
0x0,0x40);else this.Cd(0x40,0x0);return true;},SetUserInputTimestamp:function(Kg
){this.AM=Kg;},DriveKeyboardHitting:function(A8,FA,Ct){var A;var HO=!!this.B0;if(
!!this.B0&&((!Ct||(this.FS!==A8))||(this.E9!==FA))){var Bq=null;var H=(C.Be.isPrototypeOf(
A=this.B0)?A:null);var CQ=(C.Dm.isPrototypeOf(A=this.B0)?A:null);if(!!this.FS)Bq=
B._NewObject(C.KeyEvent,0).Initialize(this.FS,false);if(this.E9!==0x00)Bq=B._NewObject(
C.KeyEvent,0).Initialize2(this.E9,false);if(!!CQ)CQ.AK(Bq);else if(!!H)H.AK(Bq);
this.FS=0;this.E9=0x00;this.B0=null;}if(!!this.B0){var Bq=null;var H=(C.Be.isPrototypeOf(
A=this.B0)?A:null);var CQ=(C.Dm.isPrototypeOf(A=this.B0)?A:null);if(!!A8)Bq=B._NewObject(
C.KeyEvent,0).Initialize(A8,true);if(this.E9!==0x00)Bq=B._NewObject(C.KeyEvent,0
).Initialize2(FA,true);if(!!CQ)CQ.AK(Bq);else if(!!H)H.AK(Bq);}if(!this.B0&&Ct){
if(!!A8)this.B0=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize(A8,true
));if(FA!==0x00)this.B0=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize2(
FA,true));if(!(C.Dm.isPrototypeOf(A=this.B0)?A:null)&&!(C.Be.isPrototypeOf(A=this.
B0)?A:null))this.B0=null;this.FS=A8;this.E9=FA;HO=HO||!!this.B0;}this.AM=0;return HO;
},DriveCursorMovement:function(A9){return this.DriveMultiTouchMovement(this.Ag,A9
);},DriveMultiTouchMovement:function(J,A9){if((J<0)||(J>9)){this.AM=0;return false;
}var AA=B.aaj(A9,this.BX.Get(J));this.BX.Set(J,A9);if(!this.An.Get(J)||B.z8(AA,AF
)){this.AM=0;return false;}var pos=A9;var O=this.An.Get(J).G;while(!!O&&(O!==this
)){pos=B.aaj(pos,O.M.slice(0,2));O=O.G;}if(!O&&(this.An.Get(J)!==this)){var tmp=
this.An.Get(J);this.Ag=J;this.An.Set(J,null);tmp.AK(this.Ek().InitializeUp(J,this.
Dz.Get(J),this.C9.Get(J),this.Cj.Get(J),this.Bo.Get(J)+1,this.Ci.Get(J),false,this.
BX.Get(J),this.CM.Get(J)));this.BroadcastEvent(this.E3().InitializeUp(J,this.Bo.
Get(J)+1,false,tmp,A9),0x18);}else{this.Dz.Set(J,pos);this.Ag=J;this.An.Get(J).AK(
this.Kq().Initialize(J,pos,this.C9.Get(J),AA,this.Cj.Get(J),this.Bo.Get(J)+1,this.
Ci.Get(J),A9,this.CM.Get(J)));}this.AM=0;return true;},DriveCursorHitting:function(
Ct,J,A9){return this.DriveMultiTouchHitting(Ct,J,A9);},DriveMultiTouchHitting:function(
Ct,J,A9){if((J<0)||(J>9)){this.AM=0;return false;}var ticksCount=this.AM;if(!ticksCount
)ticksCount=((new Date).getTime()-B.vs)|0;var KP=this.AM;this.DriveMultiTouchMovement(
J,A9);A9=this.BX.Get(J);this.AM=KP;if(Ct)this.CM.Set(J,A9);if(Ct&&!this.An.Get(J
)){var A2;var pos=A9;if(B.vt(this.GN.Get(J),A9)&&((ticksCount-this.E4.Get(J))<=250
))this.Bo.Set(J,this.Bo.Get(J)+1);else this.Bo.Set(J,0);this.GN.Set(J,B.aam(Eh,A9
));this.E4.Set(J,ticksCount);A2=this.Cz(B.aam(Eh,A9),J,this.Bo.Get(J)+1,null,null
,0x0);if(!!A2){this.BroadcastEvent(this.E3().InitializeDown(J,this.Bo.Get(J)+1,false
,A2.Be,A9),0x18);this.An.Set(J,A2.Be);this.Ci.Set(J,A2.Ac);}else{this.An.Set(J,null
);this.Ci.Set(J,AF);this.AM=0;return false;}var O=A2.Be.G;while(!!O&&(O!==this)){
pos=B.aaj(pos,O.M.slice(0,2));O=O.G;}this.C9.Set(J,pos);this.Dz.Set(J,pos);this.
Cj.Set(J,0);this.DA.Cf(true);this.Ag=J;this.An.Get(J).AK(this.Ek().InitializeDown(
J,pos,this.Bo.Get(J)+1,this.Ci.Get(J),false,A9));this.AM=0;return true;}if(!Ct&&
!!this.An.Get(J)){var pos=A9;var O=this.An.Get(J).G;while(!!O&&(O!==this)){pos=B.
aaj(pos,O.M.slice(0,2));O=O.G;}if(!O)pos=this.Dz.Get(J);this.Ag=J;var tmp=this.An.
Get(J);this.An.Set(J,null);tmp.AK(this.Ek().InitializeUp(J,pos,this.C9.Get(J),this.
Cj.Get(J),this.Bo.Get(J)+1,this.Ci.Get(J),false,A9,this.CM.Get(J)));this.BroadcastEvent(
this.E3().InitializeUp(J,this.Bo.Get(J)+1,false,tmp,A9),0x18);this.AM=0;return true;
}this.AM=0;return false;},Ib:function(C4,Il,CK,C5){if(C4===this)C4=null;if(!this.
An.Get(this.Ag))return;var A2;A2=this.Cz(B.aam(Eh,this.BX.Get(this.Ag)),this.Ag,
1,C4,CK,C5);if(!!A2&&(this.An.Get(this.Ag)!==A2.Be))this.G9(A2.Be,A2.Ac);if(!A2&&(
this.An.Get(this.Ag)!==Il))this.G9(Il,AF);},G9:function(C4,Ch){if(!this.An.Get(this.
Ag)||(this.An.Get(this.Ag)===C4))return;var tmp=this.An.Get(this.Ag);this.An.Set(
this.Ag,null);tmp.AK(this.Ek().InitializeUp(this.Ag,this.Dz.Get(this.Ag),this.C9.
Get(this.Ag),this.Cj.Get(this.Ag),this.Bo.Get(this.Ag)+1,this.Ci.Get(this.Ag),true
,this.BX.Get(this.Ag),this.CM.Get(this.Ag)));this.BroadcastEvent(this.E3().InitializeUp(
this.Ag,this.Bo.Get(this.Ag)+1,true,tmp,this.BX.Get(this.Ag)),0x18);var pos=this.
BX.Get(this.Ag);var O=null;if(!!C4)O=C4.G;while(!!O&&(O!==this)){pos=B.aaj(pos,O.
M.slice(0,2));O=O.G;}if(!O&&(C4!==this)){this.An.Set(this.Ag,null);return;}this.
BroadcastEvent(this.E3().InitializeDown(this.Ag,this.Bo.Get(this.Ag)+1,true,C4,this.
BX.Get(this.Ag)),0x18);var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;
this.An.Set(this.Ag,C4);this.Ci.Set(this.Ag,Ch);this.C9.Set(this.Ag,pos);this.Dz.
Set(this.Ag,pos);this.Bo.Set(this.Ag,0);this.Cj.Set(this.Ag,0);this.E4.Set(this.
Ag,ticksCount);this.CM.Set(this.Ag,this.BX.Get(this.Ag));this.An.Get(this.Ag).AK(
this.Ek().InitializeDown(this.Ag,pos,this.Bo.Get(this.Ag)+1,this.Ci.Get(this.Ag)
,true,this.CM.Get(this.Ag)));},_Init:function(aArg){C.Af._Init.call(this,aArg);C.
Timer._Init.call(this.DA={X:this},0);(this.An=[]).__proto__=C.Root.An;(this.Bo=[
]).__proto__=C.Root.Bo;(this.GN=[]).__proto__=C.Root.GN;(this.Cj=[]).__proto__=C.
Root.Cj;(this.C9=[]).__proto__=C.Root.C9;(this.E4=[]).__proto__=C.Root.E4;(this.
Dz=[]).__proto__=C.Root.Dz;(this.Ci=[]).__proto__=C.Root.Ci;(this.BX=[]).__proto__=
C.Root.BX;(this.CM=[]).__proto__=C.Root.CM;(this.BH=[]).__proto__=C.Root.BH;(this.
A4=[]).__proto__=C.Root.A4;this.__proto__=C.Root;this.F=0x7F;this.DA.Hj(10);this.
DA.Gr=[this,this.Kr];this.Bz(aArg);},_Done:function(){this.__proto__=C.Af;this.DA.
_Done();C.Af._Done.call(this);},_ReInit:function(){C.Af._ReInit.call(this);this.
DA._ReInit();},_Mark:function(E){var A;C.Af._Mark.call(this,E);if((A=this.B0)&&(
A._cycle!=E))A._Mark(A._cycle=E);B.aaf(this.An,E);if((A=this.E2)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.DA)._cycle!=E)A._Mark(A._cycle=E);},_className:"Core::Root"
};C.Event={Ad:0,Fn:false,Bz:function(aArg){this.Ad=this.Gk();},Gk:function(){var
ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;},_Init:
function(aArg){this.__proto__=C.Event;this.Bz(aArg);B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
X)&&(A._cycle!=E))A._Mark(A._cycle=E);},X:null,_cycle:0,_observers:null,_className:
"Core::Event"};C.KeyEvent={AJ:0,Aq:0,Down:false,Initialize2:function(A8,Ct){this.
AJ=0;this.Aq=A8;this.Down=Ct;if((A8>=0x30)&&(A8<=0x39))this.AJ=(10+A8)-48;if((A8>=
0x41)&&(A8<=0x5A))this.AJ=(105+A8)-65;if((A8>=0x61)&&(A8<=0x7A))this.AJ=(105+A8)-
97;if(A8===0x20)this.AJ=131;if(!this.AJ)switch(A8){case 0x2B:this.AJ=132;break;case
0x2D:this.AJ=133;break;case 0x2A:this.AJ=134;break;case 0x2F:this.AJ=135;break;case
0x3D:this.AJ=136;break;case 0x2E:this.AJ=137;break;case 0x2C:this.AJ=138;break;case
0x3A:this.AJ=139;break;case 0x3B:this.AJ=140;break;default:;}return this;},Initialize:
function(A8,Ct){this.AJ=A8;this.Down=Ct;this.Aq=0x00;var HB=A8-10;var HA=A8-105;
if((HB>=0)&&(HB<=9))this.Aq=(48+HB)&0xFFFF;if((HA>=0)&&(HA<=25))this.Aq=(65+HA)&
0xFFFF;if(A8===131)this.Aq=0x20;if(this.Aq===0x00)switch(A8){case 132:this.Aq=0x2B;
break;case 133:this.Aq=0x2D;break;case 134:this.Aq=0x2A;break;case 135:this.Aq=0x2F;
break;case 136:this.Aq=0x3D;break;case 137:this.Aq=0x2E;break;case 138:this.Aq=0x2C;
break;case 139:this.Aq=0x3A;break;case 140:this.Aq=0x3B;break;default:;}return this;
},Jl:function(Ik){switch(Ik){case 141:return((this.Aq>=0x41)&&(this.Aq<=0x5A))||((
this.Aq>=0x61)&&(this.Aq<=0x7A));case 142:return(((this.Aq>=0x41)&&(this.Aq<=0x5A
))||((this.Aq>=0x61)&&(this.Aq<=0x7A)))||((this.Aq>=0x30)&&(this.Aq<=0x39));case
143:return(this.Aq>=0x30)&&(this.Aq<=0x39);case 144:return(((this.Aq>=0x41)&&(this.
Aq<=0x46))||((this.Aq>=0x61)&&(this.Aq<=0x66)))||((this.Aq>=0x30)&&(this.Aq<=0x39
));case 145:return this.Aq!==0x00;case 146:return(this.Aq===0x00)&&!!this.AJ;case
147:return(((this.AJ===6)||(this.AJ===7))||(this.AJ===4))||(this.AJ===5);case 148:
return(this.Aq!==0x00)||!!this.AJ;default:;}return Ik===this.AJ;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.Gh={Gu:null,BK:B.vw,BA:0,AQ:0,Down:false,B5:false,InitializeUp:function(J,BC
,Ei,Hv,Cu){this.Down=false;this.AQ=J;this.BA=BC;this.BK=Cu;this.Gu=Hv;this.B5=Ei;
return this;},InitializeDown:function(J,BC,Ei,Hv,Cu){this.Down=true;this.AQ=J;this.
BA=BC;this.BK=Cu;this.Gu=Hv;this.B5=Ei;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.Gh;},_Mark:function(E){var A;C.Event._Mark.
call(this,E);if((A=this.Gu)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};C.CY={Fm:B.vw,BK:B.vw,BA:0,Bs:0,By:B.vw,AT:B.vw,AQ:0,Down:false,B5:false,InitializeHold:
function(J,DR,FC,FD,BC,Ch,Cu,FB){this.Down=true;this.AQ=J;this.AT=B.aak(DR,Ch);this.
By=B.aak(FC,Ch);this.Bs=FD;this.BA=BC;this.BK=Cu;this.Fm=FB;return this;},InitializeUp:
function(J,DR,FC,FD,BC,Ch,Ei,Cu,FB){this.Down=false;this.AQ=J;this.AT=B.aak(DR,Ch
);this.By=B.aak(FC,Ch);this.Bs=FD;this.BA=BC;this.B5=Ei;this.BK=Cu;this.Fm=FB;return this;
},InitializeDown:function(J,DR,BC,Ch,Ei,Cu){this.Down=true;this.AQ=J;this.AT=B.aak(
DR,Ch);this.By=B.aak(DR,Ch);this.Bs=0;this.BA=BC;this.B5=Ei;this.BK=Cu;this.Fm=Cu;
return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.CY;},_className:"Core::CursorEvent"};C.EJ={Fm:B.vw,BK:B.vw,BA:0,Bs:0,Ac:B.vw,By:
B.vw,AT:B.vw,AQ:0,Initialize:function(J,DR,FC,aOffset,FD,Kf,Ch,Cu,FB){this.AQ=J;
this.AT=B.aak(DR,Ch);this.By=B.aak(FC,Ch);this.Ac=aOffset;this.Bs=FD;this.BA=Kf;
this.BK=Cu;this.Fm=FB;return this;},_Init:function(aArg){C.Event._Init.call(this
,aArg);this.__proto__=C.EJ;},_className:"Core::DragEvent"};C.Fr={B6:function(Ay,
aClip,aOffset,Am,aBlend){},Al:function(D){var A;if(B.z9(D,this.M))return;var DY=[(
A=this.M)[2]-A[0],A[3]-A[1]];var GY=[D[2]-D[0],D[3]-D[1]];var ED=!B.z8(DY,GY);var
AA=B.aaj(D.slice(0,2),this.M.slice(0,2));if(!B.z8(AA,AF)&&!ED){var H=this.Bd;while(
!!H&&!((H.F&0x200)===0x200)){if(((H.F&0x400)===0x400)){var tmp=((H.F&0x100)===0x100
);H.EQ(AA,tmp);}H=H.Bd;}}if((ED&&(DY[0]>0))&&(DY[1]>0)){var U=this.M;var H=this.
Bd;while(!!H&&!((H.F&0x200)===0x200)){if(((H.F&0x400)===0x400)){if(!!H.Ap&&(H.Ap.
DZ!==this))H.Ap=null;if(!H.Ap&&(H.Dn!==0x14))H.E8(U,this);}H=H.Bd;}}C.Bb.Al.call(
this,D);if(!!this.G&&ED){this.F=this.F|0x1000;if(!((this.G.F&0x2000)===0x2000)){
this.G.F=this.G.F|0x4000;B.ow([A=this.G,A.BI],this);}}},_Init:function(aArg){C.Bb.
_Init.call(this,aArg);this.__proto__=C.Fr;this.F=0x203;},_className:"Core::Outline"
};C.Bc={He:null,CE:null,Hf:null,CF:null,Q:0,AQ:0,Ad:0,BA:0,Bs:0,Ac:B.vw,By:B.vw,
AT:B.vw,H6:1,Down:false,EN:false,B5:false,HF:false,FU:0,B6:function(Ay,aClip,aOffset
,Am,aBlend){},AK:function(Z){var A;var K=(C.CY.isPrototypeOf(Z)?Z:null);var Ao=(
C.EJ.isPrototypeOf(Z)?Z:null);var GW=this.EN;var Cy;var B_;var Gb;var Bu;var FO;
if(!K&&!Ao)return null;Cy=(!!K&&K.Down)&&!K.Bs;B_=(!!K&&K.Down)&&(K.Bs>0);Gb=(!!
K&&K.Down)&&(K.Bs>this.FU);Bu=!!K&&!K.Down;FO=!!Ao;if(Cy)this.FU=((A=(K.B5?0:50)
)&0x80)?A|0xFFFFFF00:A&0xFF;if(Cy){var Ey=0;var CO;this.Q=this.Q|(1<<K.AQ);for(CO=
this.Q&4095;CO>0;CO=CO>>1)if(!!(CO&1))Ey=Ey+1;if(Ey===1)this.Q=(this.Q|16777216)|(
4096<<K.AQ);}if(Bu&&(this.Q<16777216)){var Ca=this.EL();var A2=null;if(!!Ca){var
HS=(!!this.AD?this.AD:this.G);A2=Ca.Cz(B.aam(EW,K.BK),K.AQ,K.BA,null,HS,0x0);}if(
!!A2){var i;for(i=0;i<10;i++)if(!!(this.Q&(1<<i)))A2.Be.AK(B._NewObject(C.CY,0).
InitializeDown(i,K.AT,K.BA,AF,true,K.BK));for(i=0;i<10;i++)if(!!(this.Q&(1<<i)))
A2.Be.AK(B._NewObject(C.CY,0).InitializeUp(i,K.AT,K.AT,0,K.BA,AF,false,K.BK,K.BK
));}}if(Bu)this.Q=(this.Q&~(1<<K.AQ))|33554432;if(Gb&&(this.Q<16777216))this.Q=this.
Q|67108864;if(Bu&&K.B5)this.Q=this.Q|67108864;if(Bu&&!(this.Q&16777215))this.Q=0;
if(B_&&(this.Q>=67108864)){var Ca=this.EL();if(!!Ca)Ca.Ib(null,null,this,0x0);}if((
B_&&!!(this.Q&16777216))&&!!(this.Q&33554432)){B_=false;Bu=true;}if(!!K&&!(this.
Q&(4096<<K.AQ)))return this;if(!!Ao&&!(this.Q&(4096<<Ao.AQ)))return this;if(Bu&&
!(this.Q&16777216))return this;if(((Cy||FO)||B_)&&((this.Q<16777216)||(this.Q>=33554432
)))return this;if(Bu)this.Q=this.Q&3758100479;if(Bu&&!(this.Q&16777215))this.Q=0;
if(!!K){this.Down=Cy||B_;this.EN=this.Hb(K.AT);this.By=K.By;this.AT=K.AT;this.Ac=
AF;this.Bs=K.Bs;this.BA=K.BA;this.B5=K.B5;this.AQ=K.AQ;this.Ad=K.Ad;if(K.Down&&!
K.Bs)GW=false;}if(!!Ao){this.Down=true;this.EN=this.Hb(Ao.AT);this.By=Ao.By;this.
AT=Ao.AT;this.Ac=Ao.Ac;this.Bs=Ao.Bs;this.BA=Ao.BA;this.AQ=Ao.AQ;this.B5=false;this.
Ad=Ao.Ad;}var HE=this.Down;if(!!Ao)(A=this.He)?A[1].call(A[0],this):null;if((!!K&&
this.Down)&&!this.Bs)(A=this.CF)?A[1].call(A[0],this):null;if((!!K&&this.Down)&&(
this.Bs>0))(A=this.CE)?A[1].call(A[0],this):null;if((this.Down&&this.EN)&&!GW)this.
HF=true;if(this.HF&&(((HE&&!this.EN)&&GW)||((!HE&&this.EN)&&GW)))this.HF=false;if(
!!K&&!HE)(A=this.Hf)?A[1].call(A[0],this):null;return this;},Cz:function(T,J,BC,
CJ,CK,C5){var A;if(!!CJ&&(CJ!==this))return null;if((BC<1)||(BC>this.H6))return null;
if(this.Q>=33554432)return null;if((this.Q>=16777216)&&!(this.Q&(4096<<J)))return null;
if(this.Ji()){var AN=B.kz(T,this.GetExtent());if(!((AN[0]>=AN[2])||(AN[1]>=AN[3]
))){var BN=B.zT(T);var AA=AF;if(BN[0]<AN[0])AA=[AN[0]-BN[0],AA[1]];if(BN[0]>=AN[
2])AA=[(AN[2]-BN[0])-1,AA[1]];if(BN[1]<AN[1])AA=[AA[0],AN[1]-BN[1]];if(BN[1]>=AN[
3])AA=[AA[0],(AN[3]-BN[1])-1];return B._NewObject(C.Fj,0).Initialize(this,AA);}}
else{var AE=B.aan(9,B.vw,null);var i;AE.Set(0,B.zT(T));AE.Set(1,AE.Get(0));AE.Set(
2,AE.Get(0));AE.Set(3,AE.Get(0));AE.Set(4,AE.Get(0));AE.Set(1,[T[0],AE.Get(1)[1]
]);AE.Set(2,[AE.Get(2)[0],T[1]]);AE.Set(3,[T[2],AE.Get(3)[1]]);AE.Set(4,[AE.Get(
4)[0],T[3]]);AE.Set(5,T.slice(0,2));AE.Set(6,[T[2],T[1]]);AE.Set(7,[T[0],T[3]]);
AE.Set(8,T.slice(2,4));for(i=0;i<9;i=i+1)if(this.Hb(AE.Get(i)))return B._NewObject(
C.Fj,0).Initialize(this,B.aaj(AE.Get(i),AE.Get(0)));}return null;},Jy:function(D
){if(D<1)D=1;this.H6=D;},_Init:function(aArg){C.CH._Init.call(this,aArg);this.__proto__=
C.Bc;this.F=0x11B;},_Mark:function(E){var A;C.CH._Mark.call(this,E);if((A=this.He
)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.CE)&&((A=A[0])._cycle!=E)
)A._Mark(A._cycle=E);if((A=this.Hf)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((
A=this.CF)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::SimpleTouchHandler"
};C.B4={timer:null,G2:null,Fb:null,Q:0,GF:0,CP:5000,EC:0,GV:B.vw,Eq:0,C7:0,Aj:0,
D5:0,Fe:0,Ep:0,C6:0,Ai:0,D4:0,D3:0,By:B.vw,H1:B.vw,A6:B.vw,A7:B.vw,Ac:B.vw,H4:0.5
,Gt:true,ET:false,Cn:false,Co:false,GE:false,FU:0,B6:function(Ay,aClip,aOffset,Am
,aBlend){},AK:function(Z){var A;var K=(C.CY.isPrototypeOf(Z)?Z:null);var Ao=(C.EJ.
isPrototypeOf(Z)?Z:null);var A_=(C.Gh.isPrototypeOf(Z)?Z:null);var Cy;var B_;var
Gb;var Bu;var FO;Cy=(!!K&&K.Down)&&!K.Bs;B_=(!!K&&K.Down)&&(K.Bs>0);Gb=(!!K&&K.Down
)&&(K.Bs>this.FU);Bu=!!K&&!K.Down;FO=!!Ao;if(Cy)this.FU=((A=(K.B5?0:50))&0x80)?A|
0xFFFFFF00:A&0xFF;if(Cy){var Ey=0;var CO;this.Q=this.Q|(1<<K.AQ);for(CO=this.Q&4095;
CO>0;CO=CO>>1)if(!!(CO&1))Ey=Ey+1;if(Ey===1)this.Q=(this.Q|16777216)|(4096<<K.AQ
);}if(Bu&&(this.Q<16777216)){var Ca=this.EL();var A2=null;if(!!Ca){var HS=(!!this.
AD?this.AD:this.G);A2=Ca.Cz(B.aam(EW,K.BK),K.AQ,K.BA,null,HS,0x0);}if(!!A2){var i;
for(i=0;i<10;i++)if(!!(this.Q&(1<<i)))A2.Be.AK(B._NewObject(C.CY,0).InitializeDown(
i,K.AT,K.BA,AF,true,K.BK));for(i=0;i<10;i++)if(!!(this.Q&(1<<i)))A2.Be.AK(B._NewObject(
C.CY,0).InitializeUp(i,K.AT,K.AT,0,K.BA,AF,false,K.BK,K.BK));}}if(Bu)this.Q=(this.
Q&~(1<<K.AQ))|33554432;if(Gb&&(this.Q<16777216))this.Q=this.Q|67108864;if(Bu&&K.
B5)this.Q=this.Q|67108864;if(Bu&&!(this.Q&16777215))this.Q=0;if(B_&&(this.Q>=67108864
)){var Ca=this.EL();if(!!Ca)Ca.Ib(null,null,this,0x0);}if((B_&&!!(this.Q&16777216
))&&!!(this.Q&33554432)){B_=false;Bu=true;}if(!!K&&!(this.Q&(4096<<K.AQ)))return this;
if(!!Ao&&!(this.Q&(4096<<Ao.AQ)))return this;if(Bu&&!(this.Q&16777216))return this;
if(((Cy||FO)||B_)&&((this.Q<16777216)||(this.Q>=33554432)))return this;if(Bu)this.
Q=this.Q&3758100479;if(Bu&&!(this.Q&16777215))this.Q=0;if(!!A_&&(A_.Gu===this))return null;
if((!!A_&&A_.Down)&&(this.GE||!this.ET))return null;if((!!A_&&A_.Down)&&!B.vt(this.
M,this.G.Jm(A_.BK)))return null;if((!!A_&&!A_.Down)&&(!this.GE||(this.GF!==A_.AQ
)))return null;if((!K&&!Ao)&&!A_)return null;if(!!K){this.GE=Cy||B_;this.GF=K.AQ;
this.By=K.By;}if(!!Ao)this.GF=Ao.AQ;if(!!A_){this.GE=A_.Down;this.GF=A_.AQ;}if(!
!A_&&A_.Down){this.HT();this.Ai=(((A_.Ad-this.D3)*0.001)*this.C6)+this.Ai;this.Aj=(((
A_.Ad-this.Fe)*0.001)*this.C7)+this.Aj;if(this.Cn)this.Ai=0;if(this.Co)this.Aj=0;
this.C6=0;this.C7=0;this.Cn=false;this.Co=false;this.GV=this.Ac;this.EC=A_.Ad;return this;
}if(Cy){this.HT();this.Ai=(((K.Ad-this.D3)*0.001)*this.C6)+this.Ai;this.Aj=(((K.
Ad-this.Fe)*0.001)*this.C7)+this.Aj;if(this.Cn||!this.ET)this.Ai=0;if(this.Co||!
this.ET)this.Aj=0;this.C6=0;this.C7=0;this.Cn=false;this.Co=false;if(!this.ET){this.
ET=true;(A=this.G2)?A[1].call(A[0],this):null;}this.GV=this.Ac;this.EC=K.Ad;}if(
!!Ao){var Em=B.aaj(Ao.AT,Ao.By);var Y=this.Ac;if(this.Gt)Y=[this.GV[0]+Em[0],Y[1
]];Y=[Y[0],this.GV[1]+Em[1]];if(Y[0]<this.A7[0])Y=[this.A7[0]+(((Y[0]-this.A7[0]
)/2)|0),Y[1]];else if(Y[0]>this.A6[0])Y=[this.A6[0]+(((Y[0]-this.A6[0])/2)|0),Y[
1]];if(Y[1]<this.A7[1])Y=[Y[0],this.A7[1]+(((Y[1]-this.A7[1])/2)|0)];else if(Y[1
]>this.A6[1])Y=[Y[0],this.A6[1]+(((Y[1]-this.A6[1])/2)|0)];if(!B.z8(Y,this.Ac)){
this.H1=B.aaj(Y,this.Ac);this.Ac=Y;(A=this.Fb)?A[1].call(A[0],this):null;}}if((!
!A_&&!A_.Down)&&((A_.Ad-this.EC)>=200)){this.Ai=0;this.Aj=0;}if(B_&&((K.Ad-this.
EC)>=200)){this.Ai=0;this.Aj=0;}if(!!Ao&&(Ao.Ad>this.EC)){var Em=Ao.Ac;var IG=1000
/(Ao.Ad-this.EC);var DG=0;var DH;if(this.Gt)DG=Em[0]*IG;DH=Em[1]*IG;if((DG*this.
Ai)<0)this.Ai=0;if((DH*this.Aj)<0)this.Aj=0;this.Ai=(this.Ai+DG)*0.5;this.Aj=(this.
Aj+DH)*0.5;this.EC=Ao.Ad;}if(!Bu&&!A_)return this;if(!!K&&K.B5){this.Ai=0;this.Aj=
0;}if((this.Ac[0]<=this.A7[0])||(this.Ac[0]>=this.A6[0]))this.Ai=0;else if(!this.
Ai){var Ar=this.Ac[0];var AH=this.A7[0];var AI=this.A6[0];if(Ar<AH)AI=this.A7[0];
else if(Ar>AI)AH=this.A6[0];else{AH=Ar;AI=Ar;}if((AH-Ar)<=(Ar-AI))Ar=AH;else Ar=
AI;if(Ar!==this.Ac[0]){var Bp=Ar-this.Ac[0];if(Bp>0)this.Ai=Math.sqrt((Bp*2)*this.
CP)+20;if(Bp<0)this.Ai=-Math.sqrt((-Bp*2)*this.CP)-20;this.C6=(400-(this.Ai*this.
Ai))/(2*Bp);this.Ep=Ar;}}else{var KQ=this.Ai*this.Ai;var Bp=KQ/(2*this.CP);var Ar=
this.Ac[0];if(this.Ai>0)Ar=Ar+(Bp|0);if(this.Ai<0)Ar=Ar-(Bp|0);if(Ar>this.A6[0])
Ar=this.A6[0];else if(Ar<this.A7[0])Ar=this.A7[0];var I0=Ar;var AH=this.A7[0];var
AI=this.A6[0];if(Ar<AH)AI=this.A7[0];else if(Ar>AI)AH=this.A6[0];else{AH=Ar;AI=Ar;
}if(this.Ai>0){if(AI<=this.Ac[0])Ar=AH;else if((Ar-AI)<(AH-Ar))Ar=AI;else Ar=AH;
}else if(AH>=this.Ac[0])Ar=AI;else if((Ar-AI)>(AH-Ar))Ar=AH;else Ar=AI;if(Ar!==this.
Ac[0]){Bp=Ar-this.Ac[0];if(Ar!==I0){var DM=Ar-I0;if(DM>0)this.Ai=this.Ai+Math.sqrt((
DM*2)*this.CP);if(DM<0)this.Ai=this.Ai-Math.sqrt((-DM*2)*this.CP);}if(this.Ai>0)
this.Ai=this.Ai+20;if(this.Ai<0)this.Ai=this.Ai-20;this.C6=(400-(this.Ai*this.Ai
))/(2*Bp);this.Ep=Ar;}else this.Ai=0;}if((this.Ac[1]<=this.A7[1])||(this.Ac[1]>=
this.A6[1]))this.Aj=0;else if(!this.Aj){var As=this.Ac[1];var AH=this.A7[1];var AI=
this.A6[1];if(As<AH)AI=this.A7[1];else if(As>AI)AH=this.A6[1];else{AH=As;AI=As;}
if((AH-As)<=(As-AI))As=AH;else As=AI;if(As!==this.Ac[1]){var Bp=As-this.Ac[1];if(
Bp>0)this.Aj=Math.sqrt((Bp*2)*this.CP)+20;if(Bp<0)this.Aj=-Math.sqrt((-Bp*2)*this.
CP)-20;this.C7=(400-(this.Aj*this.Aj))/(2*Bp);this.Eq=As;}}else{var KR=this.Aj*this.
Aj;var Bp=KR/(2*this.CP);var As=this.Ac[1];if(this.Aj>0)As=As+(Bp|0);if(this.Aj<
0)As=As-(Bp|0);if(As>this.A6[1])As=this.A6[1];else if(As<this.A7[1])As=this.A7[1
];var I1=As;var AH=this.A7[1];var AI=this.A6[1];if(As<AH)AI=this.A7[1];else if(As>
AI)AH=this.A6[1];else{AH=As;AI=As;}if(this.Aj>0){if(AI<=this.Ac[1])As=AH;else if((
As-AI)<(AH-As))As=AI;else As=AH;}else if(AH>=this.Ac[1])As=AI;else if((As-AI)>(AH-
As))As=AH;else As=AI;if(As!==this.Ac[1]){Bp=As-this.Ac[1];if(As!==I1){var DM=As-
I1;if(DM>0)this.Aj=this.Aj+Math.sqrt((DM*2)*this.CP);if(DM<0)this.Aj=this.Aj-Math.
sqrt((-DM*2)*this.CP);}if(this.Aj>0)this.Aj=this.Aj+20;if(this.Aj<0)this.Aj=this.
Aj-20;this.C7=(400-(this.Aj*this.Aj))/(2*Bp);this.Eq=As;}else this.Aj=0;}if(!!K)
this.D3=K.Ad;if(!!A_)this.D3=A_.Ad;this.Fe=this.D3;this.D4=this.Ac[0];this.D5=this.
Ac[1];this.KS();return this;},Cz:function(T,J,BC,CJ,CK,C5){var A;if(!!CJ&&(CJ!==
this))return null;if(this.Q>=33554432)return null;if((this.Q>=16777216)&&!(this.
Q&(4096<<J)))return null;if(!this.Gt&&!!(C5&0xC))return null;var AN=B.kz(T,this.
M);if(!((AN[0]>=AN[2])||(AN[1]>=AN[3]))){var BN=B.zT(T);var AA=AF;if(BN[0]<AN[0]
)AA=[AN[0]-BN[0],AA[1]];if(BN[0]>=AN[2])AA=[(AN[2]-BN[0])-1,AA[1]];if(BN[1]<AN[1
])AA=[AA[0],AN[1]-BN[1]];if(BN[1]>=AN[3])AA=[AA[0],(AN[3]-BN[1])-1];return B._NewObject(
C.Fj,0).Initialize(this,AA);}return null;},HT:function(){if(!!this.timer){B.zl([
this,this.Cc],this.timer,0);this.timer=null;}},KS:function(){this.timer=B._GetAutoObject(
B.abk.D9);B.y_([this,this.Cc],this.timer,0);},Cc:function(AO){var A;if(!this.timer
)return;var Ff=(this.timer.Ad-this.D3)*0.001;var Fg=(this.timer.Ad-this.Fe)*0.001;
var KT=Ff*Ff;var KU=Fg*Fg;var DG=(this.C6*Ff)+this.Ai;var DH=(this.C7*Fg)+this.Aj;
var Y=[((((this.C6*0.5)*KT)+(this.Ai*Ff))+this.D4)|0,((((this.C7*0.5)*KU)+(this.
Aj*Fg))+this.D5)|0];if(this.Cn&&(Ff>=0.5)){Y=[this.Ep,Y[1]];this.Ai=0;this.C6=0;
this.D4=Y[0];this.Cn=false;}else if(this.Cn){var DW=1-Math.pow(1-(Ff/0.5),5);Y=[(
this.D4+((this.Ep-this.D4)*DW))|0,Y[1]];}if(this.Co&&(Fg>=0.5)){Y=[Y[0],this.Eq];
this.Aj=0;this.C7=0;this.D5=Y[1];this.Co=false;}else if(this.Co){var DW=1-Math.pow(
1-(Fg/0.5),5);Y=[Y[0],(this.D5+((this.Eq-this.D5)*DW))|0];}if(((this.Ai>0)&&(DG<
0))||((this.Ai<0)&&(DG>0))){DG=0;Y=[this.Ac[0],Y[1]];}if(((this.Aj>0)&&(DH<0))||((
this.Aj<0)&&(DH>0))){DH=0;Y=[Y[0],this.Ac[1]];}if(!this.Cn&&(Y[0]<this.A7[0])){this.
D4=Y[0];this.Ep=this.A7[0];this.D3=this.timer.Ad;this.Cn=true;}else if(!this.Cn&&(
Y[0]>this.A6[0])){this.D4=Y[0];this.Ep=this.A6[0];this.D3=this.timer.Ad;this.Cn=
true;}if(!this.Co&&(Y[1]<this.A7[1])){this.D5=Y[1];this.Eq=this.A7[1];this.Fe=this.
timer.Ad;this.Co=true;}else if(!this.Co&&(Y[1]>this.A6[1])){this.D5=Y[1];this.Eq=
this.A6[1];this.Fe=this.timer.Ad;this.Co=true;}if(((!this.Cn&&!!this.Ai)&&(DG>-20
))&&(DG<20)){Y=[this.Ep,Y[1]];this.Ai=0;this.C6=0;this.D4=Y[0];}if(((!this.Co&&!
!this.Aj)&&(DH>-20))&&(DH<20)){Y=[Y[0],this.Eq];this.Aj=0;this.C7=0;this.D5=Y[1];
}if(!B.z8(Y,this.Ac)){this.H1=B.aaj(Y,this.Ac);this.Ac=Y;(A=this.Fb)?A[1].call(A[
0],this):null;}if(((!this.Ai&&!this.Aj)&&!this.Cn)&&!this.Co){this.HT();this.ET=
false;}},Jw:function(D){if(D<0)D=0;if(D>1)D=1;if(D===this.H4)return;this.H4=D;if(
D<(1e-007))D=1e-007;this.CP=D*10000;},_Init:function(aArg){C.Bb._Init.call(this,
aArg);this.__proto__=C.B4;this.F=0x11B;},_Mark:function(E){var A;C.Bb._Mark.call(
this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.G2)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Fb)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);},_className:"Core::SlideTouchHandler"};C.Dm={Bd:null,CF:null,CE:null
,EB:0,Ad:0,Ia:0,EK:148,AJ:0,Aq:0,Down:false,Ho:false,Bz:function(aArg){var A;var
Dd=(C.Af.isPrototypeOf(A=this.X)?A:null);if(!Dd)throw new Error(Hr);this.Bd=Dd.GX;
Dd.GX=this;},AK:function(Z){var A;if(!!Z&&Z.Jl(this.EK)){this.Down=Z.Down;this.AJ=
Z.AJ;this.Aq=Z.Aq;this.Ad=Z.Ad;if(Z.Down){this.Ia=this.EB;this.Ho=this.EB>0;if(this.
Ho)(A=this.CE)?A[1].call(A[0],this):null;else(A=this.CF)?A[1].call(A[0],this):null;
this.EB=this.EB+1;return true;}if(!Z.Down){this.Ho=this.EB>1;this.Ia=this.EB-1;this.
EB=0;return true;}}return false;},_Init:function(aArg){this.__proto__=C.Dm;this.
Bz(aArg);B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.Bd)&&(A._cycle!=E))A._Mark(A._cycle=E);if((
A=this.CF)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.CE)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);if((A=this.X)&&(A._cycle!=E))A._Mark(A._cycle=E);},X:null
,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};C.Fj={Be:null,Fk:0
,Ac:B.vw,Initialize:function(R,aOffset){this.Be=R;this.Ac=aOffset;this.Fk=(aOffset[
0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(aArg){this.__proto__=
C.Fj;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.Be)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.X)&&(A._cycle!=E))A._Mark(A._cycle=E);},X:null,_cycle:0,_observers:null,_className:
"Core::CursorHit"};C.EO={DZ:null,A$:B.vx,U:B.vx,isEmpty:false,_Init:function(aArg
){this.__proto__=C.EO;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.DZ)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.X)&&(A._cycle!=E))A._Mark(A._cycle=E);},X:null,_cycle:0,_observers:
null,_className:"Core::LayoutContext"};C.Gm={DJ:B.vw,DI:B.vw,_Init:function(aArg
){C.EO._Init.call(this,aArg);this.__proto__=C.Gm;},_className:"Core::LayoutLineContext"
};C.Gn={F0:B.vw,FZ:B.vw,DJ:B.vw,DI:B.vw,_Init:function(aArg){C.EO._Init.call(this
,aArg);this.__proto__=C.Gn;},_className:"Core::LayoutQuadContext"};C.Do={resource:
null,CC:function(){this.resource=null;},Bz:function(aArg){this.resource=aArg;},_Init:
function(aArg){this.__proto__=C.Do;this.Bz(aArg);B.hJ++;},_Done:function(){this.
CC();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.X)&&(A._cycle!=E))A._Mark(A._cycle=E);},X:null,_cycle:0,_observers:null,_className:
"Core::Resource"};C.Timer={Gr:null,timer:null,Ad:0,Period:1000,CD:false,CC:function(
){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},HQ:function(aBegin
,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((
aBegin>0)||(aPeriod>0)))tmp=B.zk(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.
StartTimer(aBegin,aPeriod);}this.timer=tmp;},Hj:function(D){if(D<0)D=0;if(D===this.
Period)return;this.Period=D;if(this.CD)this.HQ(0,D);},Cf:function(D){if(D===this.
CD)return;this.CD=D;if(D)this.HQ(0,this.Period);else this.HQ(0,0);this.Ad=this.Gk(
);},Gk:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;
},Trigger:function(){var A;this.Ad=this.Gk();if(!this.Period)this.Cf(false);(A=this.
Gr)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=C.Timer;B.hJ++;
},_Done:function(){this.CC();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.Gr)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=
this.X)&&(A._cycle!=E))A._Mark(A._cycle=E);},X:null,_cycle:0,_observers:null,_className:
"Core::Timer"};C.LP={LQ:0x1,K8:0x2,Ld:0x4,LN:0x8,CD:0x10,LH:0x20,Le:0x40,Ln:0x80
,Lc:0x100,Li:0x200,Lb:0x400,Lu:0x800,Id:0x1000,LO:0x2000,Ls:0x4000,Lt:0x8000,La:
0x10000,Lr:0x20000,LE:0x40000};C.Dn={Lv:0x1,Lw:0x2,K4:0x4,K5:0x8,K6:0x10,K3:0x20
};C.Lg={Lo:0,LK:1,K9:2,Lj:3,Ly:4,LL:5,LM:6,K_:7,K$:8,Ll:9,Lk:10,LA:11,Lz:12};C.KeyCode={
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.Lx={LU:0x1,LR:0x2,LS:0x4,LT:0x8,Lm:
0x10,Lf:0x20};
C._Init=function(){C.EP.__proto__=C.Be;C.CH.__proto__=C.Be;C.Bb.__proto__=C.Be;C.
Af.__proto__=C.Bb;C.Root.__proto__=C.Af;C.KeyEvent.__proto__=C.Event;C.Gh.__proto__=
C.Event;C.CY.__proto__=C.Event;C.EJ.__proto__=C.Event;C.Fr.__proto__=C.Bb;C.Bc.__proto__=
C.CH;C.B4.__proto__=C.Bb;C.Gm.__proto__=C.EO;C.Gn.__proto__=C.EO;};C._ReInit=function(
){};C.BM=function(E){};return C;})();

/* Embedded Wizard */