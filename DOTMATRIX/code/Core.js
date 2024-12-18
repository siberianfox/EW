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
Core=(function(){var A=EmWiApp;var C={};
var Ae=[0,0];var At=[0,0,0,0];var B4="The view does not belong to this group";var
CP="No view to add";var CQ="View already in a group";var CR="Recursive invalidate during active update cycle.";
var Co=[-8,-8,9,9];var Ei="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
C.AV={AL:null,AM:null,H:null,AJ:null,D:0x103,Bi:function(Af,aClip,aOffset,Ac,aBlend
){},Az:function(V){return null;},Ck:function(S,I,AY,CU,B7,CY){return null;},Cy:function(
S){return S;},Dm:function(Ab,A1){return Ae;},Eb:function(aOffset,DD){},GetExtent:
function(){return At;},Be:function(BD,B6){var B;if(((this.D&0x200)===0x200))BD=BD&
~0x400;var Ew=(this.D&~B6)|BD;var Ca=Ew^this.D;this.D=Ew;if(!!this.H&&!!(Ca&0x14
)){var E4=((this.D&0x14)===0x14);if(E4&&!this.H.A$)this.H.CH(this);if(!E4&&(this.
H.A$===this))this.H.CH(this.H.Fu(this,0x14));}if(!!this.H&&!!(Ca&0x403))this.H.Z(
this.GetExtent());if(((!!this.AJ&&!!this.H)&&((Ew&0x400)===0x400))&&((Ca&0x1)===
0x1)){this.D=this.D|0x800;this.H.D=this.H.D|0x4000;A.ow([B=this.H,B.A_],this);}if(
!!this.H&&((Ca&0x400)===0x400)){this.AJ=null;this.D=this.D|0x800;this.H.D=this.H.
D|0x4000;A.ow([B=this.H,B.A_],this);}},_Init:function(aArg){this.__proto__=C.AV;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(E){var B;if((B=this.AL)&&(B._cycle!=E))B._Mark(B._cycle=E);if((B=this.AM
)&&(B._cycle!=E))B._Mark(B._cycle=E);if((B=this.H)&&(B._cycle!=E))B._Mark(B._cycle=
E);if((B=this.AJ)&&(B._cycle!=E))B._Mark(B._cycle=E);if((B=this.Aa)&&(B._cycle!=
E))B._Mark(B._cycle=E);},Aa:null,_cycle:0,_observers:null,_className:"Core::View"
};C.BO={AP:A.vw,A6:A.vw,AO:A.vw,A5:A.vw,Dm:function(Ab,A1){var B;var C1=(C.Ea.isPrototypeOf(
B=this.AJ)?B:null);var K=0;var L=0;var T=0;var U=0;var C8=[Ab[2]-Ab[0],Ab[3]-Ab[
1]];var w;var h;if(!A1){if(!!C8[0]){K=Ab[0];T=K;}else{K=Ab[0];T=Ab[2];}if(!!C8[1
]){L=Ab[1];U=L;}else{L=Ab[1];U=Ab[3];}}else{switch(A1){case 3:{K=Ab[0];T=K;}break;
case 4:{T=Ab[2];K=T;}break;case 1:{L=Ab[1];U=L;}break;case 2:{U=Ab[3];L=U;}break;
default:;}if((A1===3)||(A1===4)){L=Ab[1];U=L;}if((A1===1)||(A1===2)){K=Ab[0];T=K;
}}C1.isEmpty=(K>=T)||(L>=U);w=(T-K)-1;h=(U-L)-1;if(((this.D&0x100)===0x100)){this.
A5=[K,L];this.AO=[K,L];this.A6=[K,L];this.AP=[K,L];}else{this.CJ([K,L]);this.CK([
K,L]);this.CL([K,L]);this.CM([K,L]);this.AJ=C1;}return[w+1,h+1];},Eb:function(aOffset
,DD){if(DD){this.A5=A.aak(this.A5,aOffset);this.AO=A.aak(this.AO,aOffset);this.A6=
A.aak(this.A6,aOffset);this.AP=A.aak(this.AP,aOffset);}else{this.CJ(A.aak(this.A5
,aOffset));this.CK(A.aak(this.AO,aOffset));this.CL(A.aak(this.A6,aOffset));this.
CM(A.aak(this.AP,aOffset));}},GetExtent:function(){if(!!this.AJ&&this.AJ.isEmpty
)return At;var K=this.A5[0];var L=this.A5[1];var T=this.A6[0];var U=this.A6[1];if((((
this.AP[0]!==K)||(this.AO[1]!==L))||(this.AO[0]!==T))||(this.AP[1]!==U)){if(this.
AO[0]<K)K=this.AO[0];if(this.A6[0]<K)K=this.A6[0];if(this.AP[0]<K)K=this.AP[0];if(
this.AO[1]<L)L=this.AO[1];if(this.A6[1]<L)L=this.A6[1];if(this.AP[1]<L)L=this.AP[
1];if(this.A5[0]>T)T=this.A5[0];if(this.AO[0]>T)T=this.AO[0];if(this.AP[0]>T)T=this.
AP[0];if(this.A5[1]>U)U=this.A5[1];if(this.AO[1]>U)U=this.AO[1];if(this.AP[1]>U)
U=this.AP[1];}else{var tmp;if(T<K){tmp=K;K=T;T=tmp;}if(U<L){tmp=L;L=U;U=tmp;}}return[
K,L,T+1,U+1];},CM:function(F){var B;if(A.z8(F,this.AP))return;if(!!this.H&&((this.
D&0x1)===0x1))this.H.Z(this.GetExtent());this.AJ=null;this.AP=F;if(!!this.H&&((this.
D&0x1)===0x1))this.H.Z(this.GetExtent());if((!!this.H&&((this.D&0x400)===0x400))&&
!((this.H.D&0x2000)===0x2000)){this.D=this.D|0x800;this.H.D=this.H.D|0x4000;A.ow([
B=this.H,B.A_],this);}},CL:function(F){var B;if(A.z8(F,this.A6))return;if(!!this.
H&&((this.D&0x1)===0x1))this.H.Z(this.GetExtent());this.AJ=null;this.A6=F;if(!!this.
H&&((this.D&0x1)===0x1))this.H.Z(this.GetExtent());if((!!this.H&&((this.D&0x400)===
0x400))&&!((this.H.D&0x2000)===0x2000)){this.D=this.D|0x800;this.H.D=this.H.D|0x4000;
A.ow([B=this.H,B.A_],this);}},CK:function(F){var B;if(A.z8(F,this.AO))return;if(
!!this.H&&((this.D&0x1)===0x1))this.H.Z(this.GetExtent());this.AJ=null;this.AO=F;
if(!!this.H&&((this.D&0x1)===0x1))this.H.Z(this.GetExtent());if((!!this.H&&((this.
D&0x400)===0x400))&&!((this.H.D&0x2000)===0x2000)){this.D=this.D|0x800;this.H.D=
this.H.D|0x4000;A.ow([B=this.H,B.A_],this);}},CJ:function(F){var B;if(A.z8(F,this.
A5))return;if(!!this.H&&((this.D&0x1)===0x1))this.H.Z(this.GetExtent());this.AJ=
null;this.A5=F;if(!!this.H&&((this.D&0x1)===0x1))this.H.Z(this.GetExtent());if((
!!this.H&&((this.D&0x400)===0x400))&&!((this.H.D&0x2000)===0x2000)){this.D=this.
D|0x800;this.H.D=this.H.D|0x4000;A.ow([B=this.H,B.A_],this);}},_Init:function(aArg
){C.AV._Init.call(this,aArg);this.__proto__=C.BO;},_className:"Core::QuadView"};
C.AB={J:A.vx,Dm:function(Ab,A1){var B;var C1=this.AJ;var K=0;var L=0;var T=0;var
U=0;var C8=[Ab[2]-Ab[0],Ab[3]-Ab[1]];if(!A1){if(!!C8[0]){K=Ab[0];T=K;}else{K=Ab[
0];T=Ab[2];}if(!!C8[1]){L=Ab[1];U=L;}else{L=Ab[1];U=Ab[3];}}else{switch(A1){case
3:{K=Ab[0];T=K;}break;case 4:{T=Ab[2];K=T;}break;case 1:{L=Ab[1];U=L;}break;case
2:{U=Ab[3];L=U;}break;default:;}if((A1===3)||(A1===4)){L=Ab[1];U=L;}if((A1===1)||(
A1===2)){K=Ab[0];T=K;}}C1.isEmpty=(K>=T)||(L>=U);if(((this.D&0x100)===0x100))this.
J=[K,L,T,U];else{this.Am([K,L,T,U]);this.AJ=C1;}return[T-K,U-L];},Eb:function(aOffset
,DD){if(DD)this.J=A.aam(this.J,aOffset);else this.Am(A.aam(this.J,aOffset));},GetExtent:
function(){return this.J;},Am:function(F){var B;if(A.z9(F,this.J))return;if(!!this.
H&&((this.D&0x1)===0x1))this.H.Z(this.J);this.AJ=null;this.J=F;if(!!this.H&&((this.
D&0x1)===0x1))this.H.Z(this.J);if((!!this.H&&((this.D&0x400)===0x400))&&!((this.
H.D&0x2000)===0x2000)){this.D=this.D|0x800;this.H.D=this.H.D|0x4000;A.ow([B=this.
H,B.A_],this);}},_Init:function(aArg){C.AV._Init.call(this,aArg);this.__proto__=
C.AB;},_className:"Core::RectView"};C.R={BW:null,Bp:null,DX:null,Ah:null,A$:null
,AE:function(aArg){this.Fx();},Bi:function(Af,aClip,aOffset,Ac,aBlend){var B;Ac=((
Ac+1)*255)>>8;aBlend=aBlend&&((this.D&0x2)===0x2);if(!this.Ah||(Af.Bx===this))this.
E2(Af,aClip,A.aak(aOffset,this.J.slice(0,2)),Ac,aBlend);else{var AA=255|(255<<8)|(
255<<16)|((Ac&0xFF)<<24);this.Ah.Update();Af.EJ(aClip,this.Ah,0,A.aam(this.J,aOffset
),Ae,AA,AA,AA,AA,aBlend);}},Ck:function(S,I,AY,CU,B7,CY){var B;var G=this.Bp;var
Cc=null;var N=At;var AZ=null;if(((B=A.kz(S,this.J))[0]>=B[2])||(B[1]>=B[3]))return null;
S=A.aal(S,this.J.slice(0,2));if(!!B7){G=B7;while(!!G&&(G.H!==this))G=G.H;}while(
!!G){if(((G.D&0x400)===0x400)&&!AZ){AZ=G.AM;while(!!AZ&&!((AZ.D&0x200)===0x200))
AZ=AZ.AM;if(!!AZ)N=A.kz(S,AZ.GetExtent());else N=At;}if(AZ===G){AZ=null;N=At;}if((((((
G.D&0x8)===0x8)&&((G.D&0x10)===0x10))&&!((G.D&0x40000)===0x40000))&&!((G.D&0x20000
)===0x20000))&&(!((G.D&0x10000)===0x10000)||(null===G))){var E3=G.GetExtent();var
DQ=CU;var B$=null;if(DQ===G)DQ=null;if(((G.D&0x400)===0x400)){if(!(((B=A.kz(E3,N
))[0]>=B[2])||(B[1]>=B[3])))B$=G.Ck(N,I,AY,DQ,B7,CY);}else if(!(((B=A.kz(E3,S))[
0]>=B[2])||(B[1]>=B[3]))||(CU===G))B$=G.Ck(S,I,AY,DQ,B7,CY);G=G.AM;if(!!B$){if(!
Cc||((B$.CB<Cc.CB)&&(B$.CB>=0)))Cc=B$;if(!B$.CB)G=null;}}else G=G.AM;B7=null;}return Cc;
},Cy:function(S){var B;var A0;var G=this.BW;var C0=At;var De=true;var result=(S=
A0=A.aal(S,this.J.slice(0,2)),A0);while(!!G){if(((G.D&0x200)===0x200)){var Dd=(C.
CN.isPrototypeOf(G)?G:null);C0=A.kz(S,Dd.J);De=((Dd.D&0x1)===0x1);}if(((G.D&0x1)===
0x1)){if(((G.D&0x400)===0x400)){if(De){var N=A.kz(G.GetExtent(),C0);if(!((N[0]>=
N[2])||(N[1]>=N[3])))result=A.vS(result,G.Cy(N));}}else{var N=A.kz(G.GetExtent()
,S);if(!((N[0]>=N[2])||(N[1]>=N[3])))result=A.vS(result,G.Cy(N));}}G=G.AL;}return A.
kz(A.aam(result,this.J.slice(0,2)),this.J);},Be:function(BD,B6){var B;var Gt=this.
D;C.AB.Be.call(this,BD,B6);var Ca=this.D^Gt;if(!!this.A$&&((Ca&0x40)===0x40)){if(((
this.D&0x40)===0x40))this.A$.Be(0x40,0x0);else this.A$.Be(0x0,0x40);}if(!!Ca){this.
D=this.D|0x8000;A.ow([this,this.A_],this);}},Am:function(F){var B;if(A.z9(F,this.
J))return;var Cd=[(B=this.J)[2]-B[0],B[3]-B[1]];var DY=[F[2]-F[0],F[3]-F[1]];var
Cg=!A.z8(Cd,DY);if(Cg&&!!this.Ah){this.Ah.CI(DY);A.vv(this,0);A.vv(this.Ah,0);}C.
AB.Am.call(this,F);if((Cg&&(Cd[0]>0))&&(Cd[1]>0)){var G=this.BW;while(!!G)G=G.AL;
}if(Cg){this.D=this.D|0x5000;A.ow([this,this.A_],this);}},Fl:function(V){var Fe=(
C.KeyEvent.isPrototypeOf(V)?V:null);var Bo=this.DX;if(!Fe)return null;while(!!Bo&&
!Bo.Az(Fe))Bo=Bo.AL;return Bo;},GC:function(A9){if(!!this.Ah){this.Ah.Bx=this;var
N=A.aal(this.Cy(A.aam(this.Ah.A4,this.J.slice(0,2))),this.J.slice(0,2));this.Ah.
Ds(N,N,0x00000000,0x00000000,0x00000000,0x00000000,false);this.E2(this.Ah,N,Ae,255
,true);this.Ah.Bx=null;}},E2:function(Af,aClip,aOffset,Ac,aBlend){var B;var G=this.
BW;var C0=At;var De=true;this.Fs(Af,aClip,aOffset,Ac,aBlend);while(!!G){if(((G.D&
0x200)===0x200)){var Dd=(C.CN.isPrototypeOf(G)?G:null);C0=A.kz(aClip,A.aam(Dd.J,
aOffset));De=((Dd.D&0x1)===0x1);}if(((G.D&0x1)===0x1)){if(((G.D&0x400)===0x400)){
if(De){var N=A.kz(A.aam(G.GetExtent(),aOffset),C0);if(!((N[0]>=N[2])||(N[1]>=N[3
])))G.Bi(Af,N,aOffset,Ac,aBlend);}}else{var N=A.kz(A.aam(G.GetExtent(),aOffset),
aClip);if(!((N[0]>=N[2])||(N[1]>=N[3])))G.Bi(Af,N,aOffset,Ac,aBlend);}}G=G.AL;}this.
Ft(Af,aClip,aOffset,Ac,aBlend);},Gu:function(){var B;var Et=((this.D&0x1000)===0x1000
);var BI=[0,0,(B=this.J)[2]-B[0],B[3]-B[1]];var BH=false;var Cs=At;var E5=At;var
G=this.Bp;var AZ=null;while(!!G){if(((G.D&0x800)===0x800)){BH=true;G.D=G.D&~0x800;
}if(BH&&((G.D&0x200)===0x200))BH=false;G=G.AM;}BH=false;G=this.BW;if(Et){this.D=
this.D&~0x1000;Et=!((BI[0]>=BI[2])||(BI[1]>=BI[3]));}this.D=this.D|0x2000;while(
!!G){if(((G.D&0x400)===0x400)&&(!!G.AJ&&(null!==AZ)))G.AJ=null;if(!!G.AJ){if(Et&&
!((G.D&0x400)===0x400))G.Dm(BI,0);if(BH&&((G.D&0x400)===0x400))G.Dm(E5,0);}if(((
G.D&0x200)===0x200)){BH=((G.D&0x1000)===0x1000);AZ=(C.CN.isPrototypeOf(G)?G:null
);if(BH){G.D=G.D&~0x1000;Cs=AZ.J;E5=Cs;BH=!((Cs[0]>=Cs[2])||(Cs[1]>=Cs[3]));}if(
BH)this.Z(AZ.J);}G=G.AL;}this.D=this.D&~0x2000;this.ER([BI[2]-BI[0],BI[3]-BI[1]]
);},A_:function(A9){var B;var GE=((this.D&0x1000)===0x1000);if(((this.D&0x4000)===
0x4000)){this.D=this.D&~0x4000;this.Gu();}if(((this.D&0x8000)===0x8000)||GE){this.
D=this.D&~0x8000;this.FQ(this.D);}},CH:function(F){var B;if(!!F&&(F.H!==this))throw new
Error(B4);if(!!F&&!((F.D&0x14)===0x14))F=null;if(!!F&&((F.D&0x10000)===0x10000))
F=null;if(F===this.A$)return;if(!!this.A$)this.A$.Be(0x0,0x60);this.A$=F;if(!!F){
if(((this.D&0x40)===0x40))F.Be(0x60,0x0);else F.Be(0x20,0x0);}},Ed:function(F){var
B;if(!!this.Ah===F)return;if(F){this.Ah=A._NewObject(A.Graphics.Canvas,0);this.Ah.
CI([(B=this.J)[2]-B[0],B[3]-B[1]]);this.Ah.Dy=[this,this.GC];}else{this.Ah.Dy=null;
this.Ah.CI(Ae);this.Ah=null;}if(!!this.H&&((this.D&0x1)===0x1))this.H.Z(this.J);
A.vv(this,0);},Ft:function(Af,aClip,aOffset,Ac,aBlend){},Fs:function(Af,aClip,aOffset
,Ac,aBlend){},GetMinimalSize:function(){return Ae;},DispatchEvent:function(V){var
B;var G=this.A$;var M=(C.R.isPrototypeOf(G)?G:null);var Al=null;if(!!G&&((((G.D&
0x10000)===0x10000)||((G.D&0x40000)===0x40000))||((G.D&0x20000)===0x20000))){G=null;
M=null;}if(!!M)Al=M.DispatchEvent(V);else if(!!G)Al=G.Az(V);if(!Al)Al=this.Az(V);
if(!Al)Al=this.Fl(V);return Al;},BroadcastEventAtPosition:function(V,EY,aFilter){
var B;var G=this.Bp;var Al=null;while(!!G&&!Al){if((!aFilter||((B=aFilter)&&((G.
D&B)===B)))&&A.vt(G.GetExtent(),EY)){var M=(C.R.isPrototypeOf(G)?G:null);if(!!M)
Al=M.BroadcastEventAtPosition(V,A.aaj(EY,M.J.slice(0,2)),aFilter);else Al=G.Az(V
);}G=G.AM;}if(!Al)Al=this.Az(V);return Al;},BroadcastEvent:function(V,aFilter){var
B;var G=this.Bp;var Al=null;while(!!G&&!Al){if(!aFilter||((B=aFilter)&&((G.D&B)===
B))){var M=(C.R.isPrototypeOf(G)?G:null);if(!!M)Al=M.BroadcastEvent(V,aFilter);else
Al=G.Az(V);}G=G.AM;}if(!Al)Al=this.Az(V);if(!Al)Al=this.Fl(V);return Al;},ER:function(
E0){},FQ:function(Hw){},Fx:function(){this.D=this.D|0x8000;A.ow([this,this.A_],this
);},Z:function(S){var B;var M=this;while(!!M&&!((S[0]>=S[2])||(S[1]>=S[3]))){var
Cq=M.Ah;if(!M.H&&(M!==this)){M.Z(S);return;}if(!!Cq){var Gr=Cq.A4;Cq.A4=A.vS(Cq.
A4,S);if(!A.z9(Gr,Cq.A4)){A.vv(M,0);A.vv(Cq,0);}}if(!((M.D&0x1)===0x1))return;S=
A.kz(A.aam(S,M.J.slice(0,2)),M.J);M=M.H;}},Fu:function(Ad,aFilter){var B;if(!Ad||(
Ad.H!==this))return null;var BX=Ad.AL;var BY=Ad.AM;var Dc=0x10000;if(((aFilter&0x10000
)===0x10000))Dc=0x0;while(!!BX||!!BY){if((!!BX&&(!aFilter||((B=aFilter)&&((BX.D&
B)===B))))&&(!Dc||!((B=Dc)&&((BX.D&B)===B))))return BX;if((!!BY&&(!aFilter||((B=
aFilter)&&((BY.D&B)===B))))&&(!Dc||!((B=Dc)&&((BY.D&B)===B))))return BY;if(!!BX)
BX=BX.AL;if(!!BY)BY=BY.AM;}return null;},A3:function(Ad,Cp){var B;if(!Ad)throw new
Error(CP);if(!!Ad.H)throw new Error(CQ);var BE=null;if((Cp<0)&&!!this.Bp){BE=this.
Bp;Cp=Cp+1;}while(((Cp<0)&&!!BE)&&!!BE.AM){BE=BE.AM;Cp=Cp+1;}if(!BE){Ad.H=this;Ad.
AM=this.Bp;if(!!this.Bp)this.Bp.AL=Ad;if(!this.BW)this.BW=Ad;this.Bp=Ad;}else{Ad.
H=this;Ad.AM=BE.AM;Ad.AL=BE;BE.AM=Ad;if(!!Ad.AM)Ad.AM.AL=Ad;else this.BW=Ad;}if(((
Ad.D&0x1)===0x1))this.Z(Ad.GetExtent());if(((!this.A$&&((Ad.D&0x4)===0x4))&&((Ad.
D&0x10)===0x10))&&!((Ad.D&0x10000)===0x10000))this.CH(Ad);if(((Ad.D&0x401)===0x401
)){Ad.D=Ad.D|0x800;this.D=this.D|0x4000;A.ow([this,this.A_],this);}if(((Ad.D&0x200
)===0x200)){Ad.D=Ad.D|0x800;this.D=this.D|0x4000;A.ow([this,this.A_],this);}},_Init:
function(aArg){C.AB._Init.call(this,aArg);this.__proto__=C.R;this.D=0x1F;this.AE(
aArg);},_Mark:function(E){var B;C.AB._Mark.call(this,E);if((B=this.BW)&&(B._cycle
!=E))B._Mark(B._cycle=E);if((B=this.Bp)&&(B._cycle!=E))B._Mark(B._cycle=E);if((B=
this.DX)&&(B._cycle!=E))B._Mark(B._cycle=E);if((B=this.Ah)&&(B._cycle!=E))B._Mark(
B._cycle=E);if((B=this.A$)&&(B._cycle!=E))B._Mark(B._cycle=E);},_className:"Core::Group"
};C.Root={AU:null,Ag:A.aan(10,null,null),Cr:null,BF:null,Dj:0,Ai:0,AR:A.aan(10,0
,null),DO:A.aan(10,A.vx,null),Bl:A.aan(10,0,null),BV:A.aan(10,A.vw,null),C3:A.aan(
10,0,null),B9:A.aan(10,A.vw,null),Bu:A.aan(10,A.vw,null),Bv:A.aan(10,A.vw,null),
BU:A.aan(10,A.vw,null),B_:0,DW:0,DV:0,AK:A.aan(4,0,null),As:A.aan(4,A.vx,null),Ar:
0,Da:0,Cu:0,Eu:true,AE:function(aArg){if(!!!this.Aa){var obj=this;A.aaG(obj);}},
Bi:function(Af,aClip,aOffset,Ac,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
A.mr;if(!fullScreenUpdate)Af.Ds(aClip,A.aam(A.aam(aClip,aOffset),this.J.slice(0,
2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.R.Bi.call(this,Af,aClip
,aOffset,Ac,aBlend);},Be:function(BD,B6){var B;C.R.Be.call(this,BD,B6);if(!this.
H&&(((BD&0x1)===0x1)||((B6&0x1)===0x1)))this.Z([0,0,(B=this.J)[2]-B[0],B[3]-B[1]
]);if(!this.H&&(((BD&0x2)===0x2)||((B6&0x2)===0x2)))this.Z([0,0,(B=this.J)[2]-B[
0],B[3]-B[1]]);},CH:function(F){if((F!==null)||!F)C.R.CH.call(this,F);},Ed:function(
F){var B;var Gq=this.Ah;C.R.Ed.call(this,F);if(((Gq!==this.Ah)&&!this.H)&&((this.
D&0x1)===0x1))this.Z([0,0,(B=this.J)[2]-B[0],B[3]-B[1]]);},DispatchEvent:function(
V){if(!!V){V.CF=!!this.Ai;if(!!this.Ai)V.AC=this.Ai;}var Al;Al=C.R.DispatchEvent.
call(this,V);this.Ai=0;return Al;},BroadcastEvent:function(V,aFilter){if(!!V){V.
CF=!!this.Ai;if(!!this.Ai)V.AC=this.Ai;}var Al=C.R.BroadcastEvent.call(this,V,aFilter
);this.Ai=0;return Al;},Z:function(S){var B;if(this.Dj>0)throw new Error(CR);if(
!!this.Ah&&!this.H){if(((B=this.Ah.A4)[0]>=B[2])||(B[1]>=B[3])){A.vv(this,0);A.vv(
this.Ah,0);}this.Ah.A4=A.vS(this.Ah.A4,S);}var fullScreenUpdate=false;fullScreenUpdate=
A.mr;if(fullScreenUpdate)S=[0,0,(B=this.J)[2]-B[0],B[3]-B[1]];if(!!this.H){C.R.Z.
call(this,S);return;}S=A.kz(A.aam(S,this.J.slice(0,2)),this.J);if((S[0]>=S[2])||(
S[1]>=S[3]))return;var i;for(i=0;i<this.Ar;i=i+1)if(!(((B=A.kz(this.As.Get(i),S)
)[0]>=B[2])||(B[1]>=B[3]))){this.As.Set(i,A.vS(this.As.Get(i),S));this.AK.Set(i,
A.zS(this.As.Get(i)));return;}if(this.Ar<3){this.As.Set(this.Ar,S);this.AK.Set(this.
Ar,A.zS(S));this.Ar=this.Ar+1;return;}var j;var AT;var C$=0;var Db=0;var E1=2147483647;
this.As.Set(this.Ar,S);this.AK.Set(this.Ar,A.zS(S));for(j=0;j<=this.Ar;j=j+1)for(
AT=j+1;AT<=this.Ar;AT=AT+1){var D4=A.zS(A.vS(this.As.Get(j),this.As.Get(AT)));var
Fi=((D4<<8)/(this.AK.Get(j)+this.AK.Get(AT)))|0;if(Fi<E1){E1=Fi;C$=j;Db=AT;}}this.
As.Set(C$,A.vS(this.As.Get(C$),this.As.Get(Db)));this.AK.Set(C$,A.zS(this.As.Get(
C$)));if(Db!==this.Ar){this.As.Set(Db,this.As.Get(this.Ar));this.AK.Set(Db,this.
AK.Get(this.Ar));}},Gl:function(){var AD=A._NewObject(C.Dq,0);AD.CF=!!this.Ai;if(
!!this.Ai)AD.AC=this.Ai;return AD;},C2:function(){var AD=A._NewObject(C.Dp,0);AD.
CF=!!this.Ai;if(!!this.Ai)AD.AC=this.Ai;return AD;},DN:function(){var AD=A._NewObject(
C.D8,0);AD.CF=!!this.Ai;if(!!this.Ai)AD.AC=this.Ai;return AD;},Gm:function(A9){var
i;var Cc=false;for(i=0;i<10;i=i+1)if(!!this.Ag.Get(i)){var Ay=this.Bv.Get(i);var
M=this.Ag.Get(i).H;while(!!M&&(M!==this)){Ay=A.aaj(Ay,M.J.slice(0,2));M=M.H;}if(
!M&&(this.Ag.Get(i)!==this)){var tmp=this.Ag.Get(i);this.B_=i;this.Ag.Set(i,null
);tmp.Az(this.C2().InitializeUp(i,this.B9.Get(i),this.BV.Get(i),this.Bl.Get(i),this.
AR.Get(i)+1,this.Bu.Get(i),false,this.Bv.Get(i),this.BU.Get(i)));this.BroadcastEvent(
this.DN().InitializeUp(i,this.AR.Get(i)+1,false,tmp,this.Bv.Get(i)),0x18);}else{
this.Bl.Set(i,(this.BF.AC-this.C3.Get(i))|0);if(this.Bl.Get(i)<10)this.Bl.Set(i,
10);this.B_=i;this.Ag.Get(i).Az(this.C2().InitializeHold(i,Ay,this.BV.Get(i),this.
Bl.Get(i),this.AR.Get(i)+1,this.Bu.Get(i),this.Bv.Get(i),this.BU.Get(i)));Cc=true;
}}if(!Cc)this.BF.BN(false);},GetFPS:function(){var ticksCount=0;var E6=0;ticksCount=((
new Date).getTime()-A.vs)|0;if(!!this.DW&&(ticksCount>this.DW))E6=((this.DV*1000
)/((ticksCount-this.DW)|0))|0;this.DV=0;this.DW=ticksCount;return E6;},Update:function(
){var B;if(!this.Cr)this.Cr=A._NewObject(A.Graphics.Canvas,0);this.Cr.CI([(B=this.
J)[2]-B[0],B[3]-B[1]]);this.Cr.Update();return this.UpdateGE20(this.Cr);},UpdateGE20:
function(Af){if(!this.BeginUpdate())return At;var By=this.UpdateCanvas(Af,Ae);this.
EndUpdate();return By;},EndUpdate:function(){if(this.Ar>0){this.DV=this.DV+1;this.
Ar=0;}},UpdateCanvas:function(Af,aOffset){var B;var By=At;var Gh=[].concat(aOffset
,A.aak(Af.FrameSize,aOffset));var i;var j=this.Ar;this.Dj=this.Dj+1;Af.Bx=this;for(
i=0;(i<j)&&(i<4);i=i+1)if(this.AK.Get(i)>0){this.Bi(Af,A.aal(this.As.Get(i),aOffset
),[-aOffset[0],-aOffset[1]],255,true);By=A.vS(By,A.kz(Gh,this.As.Get(i)));}else j=
j+1;Af.Bx=null;this.Dj=this.Dj-1;if(!((By[0]>=By[2])||(By[1]>=By[3])))return A.aal(
By,aOffset);else return By;},GetUpdateRegion:function(DE){var i;var j=this.Ar;if(
DE<0)return At;for(i=0;(i<j)&&(i<4);i=i+1)if(!this.AK.Get(i)){j=j+1;DE=DE+1;}else
if(i===DE)return this.As.Get(i);return At;},BeginUpdate:function(){var B;var i;if(
!!this.Ar&&!A.z9(this.As.Get(0),[0,0,(B=this.J)[2]-B[0],B[3]-B[1]])){var Fq=A.aan(
3,A.vx,null);var Fp=this.Ar;for(i=0;i<Fp;i++)Fq.Set(i,this.As.Get(i));for(i=0;i<
Fp;i++){var Fm=A.aam(Fq.Get(i),this.J.slice(0,2));var Fn=this.Cy(Fm);if(!A.z9(Fm
,Fn))this.Z(A.aal(Fn,this.J.slice(0,2)));}}var j;var AT;for(j=0;j<(this.Ar-1);j++
)if(this.AK.Get(j)>0)for(AT=j+1;AT<this.Ar;AT++)if(this.AK.Get(AT)>0){var D4=A.zS(
A.vS(this.As.Get(j),this.As.Get(AT)));if(((D4-this.AK.Get(j))-this.AK.Get(AT))<0
){this.As.Set(j,A.vS(this.As.Get(j),this.As.Get(AT)));this.AK.Set(j,D4);this.AK.
Set(AT,0);}}for(i=this.Ar-1;i>=0;i--)if(!this.AK.Get(i))this.Ar=this.Ar-1;return this.
Ar;},DoesNeedUpdate:function(){if(this.Ar>0)return true;return false;},Initialize:
function(E0){this.Am([].concat(Ae,E0));if(this.Eu)this.D=this.D|0x60;else this.D=
this.D|0x20;this.Z(this.J);return this;},SetRootFocus:function(Ek){if(Ek===this.
Eu)return false;this.Eu=Ek;if(!Ek)this.Be(0x0,0x40);else this.Be(0x40,0x0);return true;
},SetUserInputTimestamp:function(F_){this.Ai=F_;},DriveKeyboardHitting:function(
Au,CT,Bb){var B;var Ey=!!this.AU;if(!!this.AU&&((!Bb||(this.Da!==Au))||(this.Cu!==
CT))){var AD=null;var G=(C.AV.isPrototypeOf(B=this.AU)?B:null);var Bo=(C.Du.isPrototypeOf(
B=this.AU)?B:null);if(!!this.Da)AD=A._NewObject(C.KeyEvent,0).Initialize(this.Da
,false);if(this.Cu!==0x00)AD=A._NewObject(C.KeyEvent,0).Initialize2(this.Cu,false
);if(!!Bo)Bo.Az(AD);else if(!!G)G.Az(AD);this.Da=0;this.Cu=0x00;this.AU=null;}if(
!!this.AU){var AD=null;var G=(C.AV.isPrototypeOf(B=this.AU)?B:null);var Bo=(C.Du.
isPrototypeOf(B=this.AU)?B:null);if(!!Au)AD=A._NewObject(C.KeyEvent,0).Initialize(
Au,true);if(this.Cu!==0x00)AD=A._NewObject(C.KeyEvent,0).Initialize2(CT,true);if(
!!Bo)Bo.Az(AD);else if(!!G)G.Az(AD);}if(!this.AU&&Bb){if(!!Au)this.AU=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize(Au,true));if(CT!==0x00)this.AU=this.DispatchEvent(
A._NewObject(C.KeyEvent,0).Initialize2(CT,true));if(!(C.Du.isPrototypeOf(B=this.
AU)?B:null)&&!(C.AV.isPrototypeOf(B=this.AU)?B:null))this.AU=null;this.Da=Au;this.
Cu=CT;Ey=Ey||!!this.AU;}this.Ai=0;return Ey;},DriveCursorMovement:function(Av){return this.
DriveMultiTouchMovement(this.B_,Av);},DriveMultiTouchMovement:function(I,Av){if((
I<0)||(I>9)){this.Ai=0;return false;}var A8=A.aaj(Av,this.Bv.Get(I));this.Bv.Set(
I,Av);if(!this.Ag.Get(I)||A.z8(A8,Ae)){this.Ai=0;return false;}var Ay=Av;var M=this.
Ag.Get(I).H;while(!!M&&(M!==this)){Ay=A.aaj(Ay,M.J.slice(0,2));M=M.H;}if(!M&&(this.
Ag.Get(I)!==this)){var tmp=this.Ag.Get(I);this.B_=I;this.Ag.Set(I,null);tmp.Az(this.
C2().InitializeUp(I,this.B9.Get(I),this.BV.Get(I),this.Bl.Get(I),this.AR.Get(I)+
1,this.Bu.Get(I),false,this.Bv.Get(I),this.BU.Get(I)));this.BroadcastEvent(this.
DN().InitializeUp(I,this.AR.Get(I)+1,false,tmp,Av),0x18);}else{this.B9.Set(I,Ay);
this.B_=I;this.Ag.Get(I).Az(this.Gl().Initialize(I,Ay,this.BV.Get(I),A8,this.Bl.
Get(I),this.AR.Get(I)+1,this.Bu.Get(I),Av,this.BU.Get(I)));}this.Ai=0;return true;
},DriveCursorHitting:function(Bb,I,Av){return this.DriveMultiTouchHitting(Bb,I,Av
);},DriveMultiTouchHitting:function(Bb,I,Av){if((I<0)||(I>9)){this.Ai=0;return false;
}var ticksCount=this.Ai;if(!ticksCount)ticksCount=((new Date).getTime()-A.vs)|0;
var GB=this.Ai;this.DriveMultiTouchMovement(I,Av);Av=this.Bv.Get(I);this.Ai=GB;if(
Bb)this.BU.Set(I,Av);if(Bb&&!this.Ag.Get(I)){var BJ;var Ay=Av;if(A.vt(this.DO.Get(
I),Av)&&((ticksCount-this.C3.Get(I))<=250))this.AR.Set(I,this.AR.Get(I)+1);else this.
AR.Set(I,0);this.DO.Set(I,A.aam(Co,Av));this.C3.Set(I,ticksCount);BJ=this.Ck(A.aam(
Co,Av),I,this.AR.Get(I)+1,null,null,0x0);if(!!BJ){this.BroadcastEvent(this.DN().
InitializeDown(I,this.AR.Get(I)+1,false,BJ.AV,Av),0x18);this.Ag.Set(I,BJ.AV);this.
Bu.Set(I,BJ.Cm);}else{this.Ag.Set(I,null);this.Bu.Set(I,Ae);this.Ai=0;return false;
}var M=BJ.AV.H;while(!!M&&(M!==this)){Ay=A.aaj(Ay,M.J.slice(0,2));M=M.H;}this.BV.
Set(I,Ay);this.B9.Set(I,Ay);this.Bl.Set(I,0);this.BF.BN(true);this.B_=I;this.Ag.
Get(I).Az(this.C2().InitializeDown(I,Ay,this.AR.Get(I)+1,this.Bu.Get(I),false,Av
));this.Ai=0;return true;}if(!Bb&&!!this.Ag.Get(I)){var Ay=Av;var M=this.Ag.Get(
I).H;while(!!M&&(M!==this)){Ay=A.aaj(Ay,M.J.slice(0,2));M=M.H;}if(!M)Ay=this.B9.
Get(I);this.B_=I;var tmp=this.Ag.Get(I);this.Ag.Set(I,null);tmp.Az(this.C2().InitializeUp(
I,Ay,this.BV.Get(I),this.Bl.Get(I),this.AR.Get(I)+1,this.Bu.Get(I),false,Av,this.
BU.Get(I)));this.BroadcastEvent(this.DN().InitializeUp(I,this.AR.Get(I)+1,false,
tmp,Av),0x18);this.Ai=0;return true;}this.Ai=0;return false;},_Init:function(aArg
){C.R._Init.call(this,aArg);C.Timer._Init.call(this.BF={Aa:this},0);(this.Ag=[]).
__proto__=C.Root.Ag;(this.AR=[]).__proto__=C.Root.AR;(this.DO=[]).__proto__=C.Root.
DO;(this.Bl=[]).__proto__=C.Root.Bl;(this.BV=[]).__proto__=C.Root.BV;(this.C3=[]
).__proto__=C.Root.C3;(this.B9=[]).__proto__=C.Root.B9;(this.Bu=[]).__proto__=C.
Root.Bu;(this.Bv=[]).__proto__=C.Root.Bv;(this.BU=[]).__proto__=C.Root.BU;(this.
AK=[]).__proto__=C.Root.AK;(this.As=[]).__proto__=C.Root.As;this.__proto__=C.Root;
this.D=0x7F;this.BF.Ee(10);this.BF.DA=[this,this.Gm];this.AE(aArg);},_Done:function(
){this.__proto__=C.R;this.BF._Done();C.R._Done.call(this);},_ReInit:function(){C.
R._ReInit.call(this);this.BF._ReInit();},_Mark:function(E){var B;C.R._Mark.call(
this,E);if((B=this.AU)&&(B._cycle!=E))B._Mark(B._cycle=E);A.aaf(this.Ag,E);if((B=
this.Cr)&&(B._cycle!=E))B._Mark(B._cycle=E);if((B=this.BF)._cycle!=E)B._Mark(B._cycle=
E);},_className:"Core::Root"};C.Event={AC:0,CF:false,AE:function(aArg){this.AC=this.
Dt();},Dt:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.vs)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=C.Event;this.AE(aArg);A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(E){var B;if((
B=this.Aa)&&(B._cycle!=E))B._Mark(B._cycle=E);},Aa:null,_cycle:0,_observers:null
,_className:"Core::Event"};C.KeyEvent={Ap:0,W:0,Down:false,Initialize2:function(
Au,Bb){this.Ap=0;this.W=Au;this.Down=Bb;if((Au>=0x30)&&(Au<=0x39))this.Ap=(10+Au
)-48;if((Au>=0x41)&&(Au<=0x5A))this.Ap=(105+Au)-65;if((Au>=0x61)&&(Au<=0x7A))this.
Ap=(105+Au)-97;if(Au===0x20)this.Ap=131;if(!this.Ap)switch(Au){case 0x2B:this.Ap=
132;break;case 0x2D:this.Ap=133;break;case 0x2A:this.Ap=134;break;case 0x2F:this.
Ap=135;break;case 0x3D:this.Ap=136;break;case 0x2E:this.Ap=137;break;case 0x2C:this.
Ap=138;break;case 0x3A:this.Ap=139;break;case 0x3B:this.Ap=140;break;default:;}return this;
},Initialize:function(Au,Bb){this.Ap=Au;this.Down=Bb;this.W=0x00;var Er=Au-10;var
Eq=Au-105;if((Er>=0)&&(Er<=9))this.W=(48+Er)&0xFFFF;if((Eq>=0)&&(Eq<=25))this.W=(
65+Eq)&0xFFFF;if(Au===131)this.W=0x20;if(this.W===0x00)switch(Au){case 132:this.
W=0x2B;break;case 133:this.W=0x2D;break;case 134:this.W=0x2A;break;case 135:this.
W=0x2F;break;case 136:this.W=0x3D;break;case 137:this.W=0x2E;break;case 138:this.
W=0x2C;break;case 139:this.W=0x3A;break;case 140:this.W=0x3B;break;default:;}return this;
},Fy:function(EX){switch(EX){case 141:return((this.W>=0x41)&&(this.W<=0x5A))||((
this.W>=0x61)&&(this.W<=0x7A));case 142:return(((this.W>=0x41)&&(this.W<=0x5A))||((
this.W>=0x61)&&(this.W<=0x7A)))||((this.W>=0x30)&&(this.W<=0x39));case 143:return(
this.W>=0x30)&&(this.W<=0x39);case 144:return(((this.W>=0x41)&&(this.W<=0x46))||((
this.W>=0x61)&&(this.W<=0x66)))||((this.W>=0x30)&&(this.W<=0x39));case 145:return this.
W!==0x00;case 146:return(this.W===0x00)&&!!this.Ap;case 147:return(((this.Ap===6
)||(this.Ap===7))||(this.Ap===4))||(this.Ap===5);case 148:return(this.W!==0x00)||
!!this.Ap;default:;}return EX===this.Ap;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.D8={Eh:null
,BM:A.vw,BP:0,BL:0,Down:false,CA:false,InitializeUp:function(I,AY,B5,Em,Bc){this.
Down=false;this.BL=I;this.BP=AY;this.BM=Bc;this.Eh=Em;this.CA=B5;return this;},InitializeDown:
function(I,AY,B5,Em,Bc){this.Down=true;this.BL=I;this.BP=AY;this.BM=Bc;this.Eh=Em;
this.CA=B5;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.
__proto__=C.D8;},_Mark:function(E){var B;C.Event._Mark.call(this,E);if((B=this.Eh
)&&(B._cycle!=E))B._Mark(B._cycle=E);},_className:"Core::CursorGrabEvent"};C.Dp={
CD:A.vw,BM:A.vw,BP:0,CE:0,BA:A.vw,Bg:A.vw,BL:0,Down:false,CA:false,InitializeHold:
function(I,BR,CW,CX,AY,Bj,Bc,CV){this.Down=true;this.BL=I;this.Bg=A.aak(BR,Bj);this.
BA=A.aak(CW,Bj);this.CE=CX;this.BP=AY;this.BM=Bc;this.CD=CV;return this;},InitializeUp:
function(I,BR,CW,CX,AY,Bj,B5,Bc,CV){this.Down=false;this.BL=I;this.Bg=A.aak(BR,Bj
);this.BA=A.aak(CW,Bj);this.CE=CX;this.BP=AY;this.CA=B5;this.BM=Bc;this.CD=CV;return this;
},InitializeDown:function(I,BR,AY,Bj,B5,Bc){this.Down=true;this.BL=I;this.Bg=A.aak(
BR,Bj);this.BA=A.aak(BR,Bj);this.CE=0;this.BP=AY;this.CA=B5;this.BM=Bc;this.CD=Bc;
return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Dp;},_className:"Core::CursorEvent"};C.Dq={CD:A.vw,BM:A.vw,BP:0,CE:0,Cm:A.vw,BA:
A.vw,Bg:A.vw,BL:0,Initialize:function(I,BR,CW,aOffset,CX,F0,Bj,Bc,CV){this.BL=I;
this.Bg=A.aak(BR,Bj);this.BA=A.aak(CW,Bj);this.Cm=aOffset;this.CE=CX;this.BP=F0;
this.BM=Bc;this.CD=CV;return this;},_Init:function(aArg){C.Event._Init.call(this
,aArg);this.__proto__=C.Dq;},_className:"Core::DragEvent"};C.CN={Bi:function(Af,
aClip,aOffset,Ac,aBlend){},Am:function(F){var B;if(A.z9(F,this.J))return;var Cd=[(
B=this.J)[2]-B[0],B[3]-B[1]];var DY=[F[2]-F[0],F[3]-F[1]];var Cg=!A.z8(Cd,DY);var
A8=A.aaj(F.slice(0,2),this.J.slice(0,2));if(!A.z8(A8,Ae)&&!Cg){var G=this.AL;while(
!!G&&!((G.D&0x200)===0x200)){if(((G.D&0x400)===0x400)){var tmp=((G.D&0x100)===0x100
);G.Eb(A8,tmp);}G=G.AL;}}if((Cg&&(Cd[0]>0))&&(Cd[1]>0)){var G=this.AL;while(!!G&&
!((G.D&0x200)===0x200)){if(((G.D&0x400)===0x400)&&(!!G.AJ&&(null!==this)))G.AJ=null;
G=G.AL;}}C.AB.Am.call(this,F);if(!!this.H&&Cg){this.D=this.D|0x1000;if(!((this.H.
D&0x2000)===0x2000)){this.H.D=this.H.D|0x4000;A.ow([B=this.H,B.A_],this);}}},_Init:
function(aArg){C.AB._Init.call(this,aArg);this.__proto__=C.CN;this.D=0x203;},_className:
"Core::Outline"};C.Du={AL:null,Cf:0,AC:0,EQ:0,Ap:0,W:0,Down:false,EP:false,AE:function(
aArg){var B;var Bx=(C.R.isPrototypeOf(B=this.Aa)?B:null);if(!Bx)throw new Error(
Ei);this.AL=Bx.DX;Bx.DX=this;},Az:function(V){if(!!V&&V.Fy(148)){this.Down=V.Down;
this.Ap=V.Ap;this.W=V.W;this.AC=V.AC;if(V.Down){this.EQ=this.Cf;this.EP=this.Cf>
0;this.Cf=this.Cf+1;return true;}if(!V.Down){this.EP=this.Cf>1;this.EQ=this.Cf-1;
this.Cf=0;return true;}}return false;},_Init:function(aArg){this.__proto__=C.Du;
this.AE(aArg);A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(E){var B;if((B=this.AL)&&(B._cycle!=E))B._Mark(B._cycle=E);if((
B=this.Aa)&&(B._cycle!=E))B._Mark(B._cycle=E);},Aa:null,_cycle:0,_observers:null
,_className:"Core::KeyPressHandler"};C.EK={AV:null,CB:0,Cm:A.vw,Initialize:function(
Ad,aOffset){this.AV=Ad;this.Cm=aOffset;this.CB=(aOffset[0]*aOffset[0])+(aOffset[
1]*aOffset[1]);return this;},_Init:function(aArg){this.__proto__=C.EK;A.hJ++;},_Done:
function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(E){var
B;if((B=this.AV)&&(B._cycle!=E))B._Mark(B._cycle=E);if((B=this.Aa)&&(B._cycle!=E
))B._Mark(B._cycle=E);},Aa:null,_cycle:0,_observers:null,_className:"Core::CursorHit"
};C.D$={isEmpty:false,_Init:function(aArg){this.__proto__=C.D$;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(E){var B;if((
B=this.Aa)&&(B._cycle!=E))B._Mark(B._cycle=E);},Aa:null,_cycle:0,_observers:null
,_className:"Core::LayoutContext"};C.Ea={_Init:function(aArg){C.D$._Init.call(this
,aArg);this.__proto__=C.Ea;},_className:"Core::LayoutQuadContext"};C.BC={resource:
null,Bh:function(){this.resource=null;},AE:function(aArg){this.resource=aArg;},_Init:
function(aArg){this.__proto__=C.BC;this.AE(aArg);A.hJ++;},_Done:function(){this.
Bh();this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(E){var B;if((
B=this.Aa)&&(B._cycle!=E))B._Mark(B._cycle=E);},Aa:null,_cycle:0,_observers:null
,_className:"Core::Resource"};C.Timer={DA:null,timer:null,AC:0,Period:1000,B2:false
,Bh:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},
EA:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=
this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=A.zk(this,this.Trigger);if(!!tmp
){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=tmp;},Ee:function(
F){if(F<0)F=0;if(F===this.Period)return;this.Period=F;if(this.B2)this.EA(0,F);},
BN:function(F){if(F===this.B2)return;this.B2=F;if(F)this.EA(0,this.Period);else this.
EA(0,0);this.AC=this.Dt();},Dt:function(){var ticksCount=0;ticksCount=((new Date
).getTime()-A.vs)|0;return ticksCount;},Trigger:function(){var B;this.AC=this.Dt(
);if(!this.Period)this.BN(false);(B=this.DA)?B[1].call(B[0],this):null;},_Init:function(
aArg){this.__proto__=C.Timer;A.hJ++;},_Done:function(){this.Bh();this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(E){var B;if((B=this.DA)&&((B=B[
0])._cycle!=E))B._Mark(B._cycle=E);if((B=this.Aa)&&(B._cycle!=E))B._Mark(B._cycle=
E);},Aa:null,_cycle:0,_observers:null,_className:"Core::Timer"};C.Hq={Hr:0x1,GM:
0x2,GT:0x4,Ho:0x8,B2:0x10,Hj:0x20,GU:0x40,G3:0x80,GS:0x100,GY:0x200,GR:0x400,G_:
0x800,ER:0x1000,Hp:0x2000,G8:0x4000,G9:0x8000,GQ:0x10000,G7:0x20000,Hg:0x40000};
C.GW={G4:0,Hl:1,GN:2,GZ:3,Ha:4,Hm:5,Hn:6,GO:7,GP:8,G1:9,G0:10,Hc:11,Hb:12};C.KeyCode={
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.G$={Hv:0x1,Hs:0x2,Ht:0x4,Hu:0x8,G2:
0x10,GV:0x20};
C._Init=function(){C.BO.__proto__=C.AV;C.AB.__proto__=C.AV;C.R.__proto__=C.AB;C.Root.
__proto__=C.R;C.KeyEvent.__proto__=C.Event;C.D8.__proto__=C.Event;C.Dp.__proto__=
C.Event;C.Dq.__proto__=C.Event;C.CN.__proto__=C.AB;C.Ea.__proto__=C.D$;};C._ReInit=
function(){};C.AX=function(E){};return C;})();

/* Embedded Wizard */