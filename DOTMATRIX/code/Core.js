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
* Profile  : Prototype
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.Core)throw new Error("The unit file 'Core.js' included twice!");EmWiApp.
Core=(function(){var A=EmWiApp;var D={};
var Af=[0,0];var AB=[0,0,0,0];var BZ="The view does not belong to this group";var
Cv="No view to restack";var CM="View is not in this group";var C6="No view to remove";
var D6="No view to add";var Gb="View already in a group";var Gc="Recursive invalidate during active update cycle.";
var D7=[-8,-8,9,9];var Gd=[0,0,1,1];var IN="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
D.A_={Ap:null,Ag:null,G:null,Aq:null,E:0x103,BY:0x14,Ej:function(S,EX){},IB:function(
C){var B;var Ck=C^this.BY;if(!Ck)return;this.BY=C;if(!!this.Aq&&!((this.E&0x400)===
0x400)){this.G.E=this.G.E|0x5000;A.ow([B=this.G,B.Bb],this);this.G.Ah([0,0,(B=this.
G.P)[2]-B[0],B[3]-B[1]]);}if(!!this.Aq&&((this.E&0x400)===0x400)){this.Aq.Df.E=this.
Aq.Df.E|0x1000;this.G.E=this.G.E|0x4000;A.ow([B=this.G,B.Bb],this);}},FH:function(
){var Q=this.G;while(!!Q){var CY=(D.Root.isPrototypeOf(Q)?Q:null);if(!!CY)return CY;
Q=Q.G;}return null;},BK:function(Ao,aClip,aOffset,Am,aBlend){},AD:function(Ac){return null;
},Ct:function(U,K,Bd,CO,Ci,CP){return null;},DN:function(U){return U;},ED:function(
S,BI){return Af;},FS:function(aOffset,EW){},GetExtent:function(){return AB;},BD:
function(Cw,C8){var B;if(((this.E&0x200)===0x200))Cw=Cw&~0x400;var GA=(this.E&~C8
)|Cw;var Db=GA^this.E;this.E=GA;if(!!this.G&&!!(Db&0x14)){var Hl=((this.E&0x14)===
0x14);if(Hl&&!this.G.BL)this.G.Ds(this);if(!Hl&&(this.G.BL===this))this.G.Ds(this.
G.GT(this,0x14));}if(!!this.G&&!!(Db&0x403))this.G.Ah(this.GetExtent());if(((!!this.
Aq&&!!this.G)&&((GA&0x400)===0x400))&&((Db&0x1)===0x1)){this.E=this.E|0x800;this.
G.E=this.G.E|0x4000;A.ow([B=this.G,B.Bb],this);}if(!!this.G&&((Db&0x400)===0x400
)){this.Aq=null;this.E=this.E|0x800;this.G.E=this.G.E|0x4000;A.ow([B=this.G,B.Bb
],this);}},_Init:function(aArg){this.__proto__=D.A_;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(F){var B;if((B=this.
Ap)&&(B._cycle!=F))B._Mark(B._cycle=F);if((B=this.Ag)&&(B._cycle!=F))B._Mark(B._cycle=
F);if((B=this.G)&&(B._cycle!=F))B._Mark(B._cycle=F);if((B=this.Aq)&&(B._cycle!=F
))B._Mark(B._cycle=F);if((B=this.As)&&(B._cycle!=F))B._Mark(B._cycle=F);},As:null
,_cycle:0,_observers:null,_className:"Core::View"};D.B8={AY:A.vw,A9:A.vw,AX:A.vw
,A8:A.vw,Ej:function(S,EX){var T=A._NewObject(D.EN,0);this.Aq=null;T.Bq=this.GetExtent(
);T.An=S;T.Df=EX;T.Eq=this.A8;T.Er=this.AX;T.Es=this.A9;T.Et=this.AY;this.Aq=T;}
,ED:function(S,BI){var B;var AN=this.BY;var T=(D.EN.isPrototypeOf(B=this.Aq)?B:null
);var L=T.Bq[0];var M=T.Bq[1];var N=T.Bq[2];var O=T.Bq[3];var Bp=[S[2]-S[0],S[3]-
S[1]];var Aw=N-L;var Ak=O-M;if(!BI){var BU=[(B=T.An)[2]-B[0],B[3]-B[1]];L=L-T.An[
0];M=M-T.An[1];if(BU[0]!==Bp[0]){var Bf=((AN&0x4)===0x4);var Bg=((AN&0x8)===0x8);
var Cd=((AN&0x1)===0x1);if(!Bf&&(Cd||!Bg))L=((L*Bp[0])/BU[0])|0;if(!Bg&&(Cd||!Bf
)){N=N-T.An[0];N=((N*Bp[0])/BU[0])|0;N=N-Bp[0];}else N=N-T.An[2];L=L+S[0];N=N+S[
2];if(!Cd){if(Bf&&!Bg)N=L+Aw;else if(!Bf&&Bg)L=N-Aw;else{L=L+((((N-L)-Aw)/2)|0);
N=L+Aw;}}}else{N=N-T.An[2];L=L+S[0];N=N+S[2];}if(BU[1]!==Bp[1]){var Bh=((AN&0x10
)===0x10);var Be=((AN&0x20)===0x20);var Ce=((AN&0x2)===0x2);if(!Bh&&(Ce||!Be))M=((
M*Bp[1])/BU[1])|0;if(!Be&&(Ce||!Bh)){O=O-T.An[1];O=((O*Bp[1])/BU[1])|0;O=O-Bp[1];
}else O=O-T.An[3];M=M+S[1];O=O+S[3];if(!Ce){if(Bh&&!Be)O=M+Ak;else if(!Bh&&Be)M=
O-Ak;else{M=M+((((O-M)-Ak)/2)|0);O=M+Ak;}}}else{O=O-T.An[3];M=M+S[1];O=O+S[3];}}
else{switch(BI){case 3:{L=S[0];N=L+Aw;}break;case 4:{N=S[2];L=N-Aw;}break;case 1:{
M=S[1];O=M+Ak;}break;case 2:{O=S[3];M=O-Ak;}break;default:;}if((BI===3)||(BI===4
)){var Bh=((AN&0x10)===0x10);var Be=((AN&0x20)===0x20);var Ce=((AN&0x2)===0x2);if(
Ce){M=S[1];O=S[3];}else if(Bh&&!Be){M=S[1];O=M+Ak;}else if(Be&&!Bh){O=S[3];M=O-Ak;
}else{M=S[1]+((((S[3]-S[1])-Ak)/2)|0);O=M+Ak;}}if((BI===1)||(BI===2)){var Bf=((AN&
0x4)===0x4);var Bg=((AN&0x8)===0x8);var Cd=((AN&0x1)===0x1);if(Cd){L=S[0];N=S[2];
}else if(Bf&&!Bg){L=S[0];N=L+Aw;}else if(Bg&&!Bf){N=S[2];L=N-Aw;}else{L=S[0]+((((
S[2]-S[0])-Aw)/2)|0);N=L+Aw;}}}T.isEmpty=(L>=N)||(M>=O);Aw=(N-L)-1;Ak=(O-M)-1;var
CA=T.Bq[0];var CB=T.Bq[1];var Cm=(T.Bq[2]-CA)-1;var Cl=(T.Bq[3]-CB)-1;if(!Cm)Cm=
1;if(!Cl)Cl=1;if(((this.E&0x100)===0x100)){this.A8=[L+((((T.Eq[0]-CA)*Aw)/Cm)|0)
,M+((((T.Eq[1]-CB)*Ak)/Cl)|0)];this.AX=[L+((((T.Er[0]-CA)*Aw)/Cm)|0),M+((((T.Er[
1]-CB)*Ak)/Cl)|0)];this.A9=[L+((((T.Es[0]-CA)*Aw)/Cm)|0),M+((((T.Es[1]-CB)*Ak)/Cl
)|0)];this.AY=[L+((((T.Et[0]-CA)*Aw)/Cm)|0),M+((((T.Et[1]-CB)*Ak)/Cl)|0)];}else{
this.Dt([L+((((T.Eq[0]-CA)*Aw)/Cm)|0),M+((((T.Eq[1]-CB)*Ak)/Cl)|0)]);this.Du([L+((((
T.Er[0]-CA)*Aw)/Cm)|0),M+((((T.Er[1]-CB)*Ak)/Cl)|0)]);this.Dv([L+((((T.Es[0]-CA)
*Aw)/Cm)|0),M+((((T.Es[1]-CB)*Ak)/Cl)|0)]);this.Dw([L+((((T.Et[0]-CA)*Aw)/Cm)|0)
,M+((((T.Et[1]-CB)*Ak)/Cl)|0)]);this.Aq=T;}return[Aw+1,Ak+1];},FS:function(aOffset
,EW){if(EW){this.A8=A.aak(this.A8,aOffset);this.AX=A.aak(this.AX,aOffset);this.A9=
A.aak(this.A9,aOffset);this.AY=A.aak(this.AY,aOffset);}else{this.Dt(A.aak(this.A8
,aOffset));this.Du(A.aak(this.AX,aOffset));this.Dv(A.aak(this.A9,aOffset));this.
Dw(A.aak(this.AY,aOffset));}},GetExtent:function(){if(!!this.Aq&&this.Aq.isEmpty
)return AB;var L=this.A8[0];var M=this.A8[1];var N=this.A9[0];var O=this.A9[1];if((((
this.AY[0]!==L)||(this.AX[1]!==M))||(this.AX[0]!==N))||(this.AY[1]!==O)){if(this.
AX[0]<L)L=this.AX[0];if(this.A9[0]<L)L=this.A9[0];if(this.AY[0]<L)L=this.AY[0];if(
this.AX[1]<M)M=this.AX[1];if(this.A9[1]<M)M=this.A9[1];if(this.AY[1]<M)M=this.AY[
1];if(this.A8[0]>N)N=this.A8[0];if(this.AX[0]>N)N=this.AX[0];if(this.AY[0]>N)N=this.
AY[0];if(this.A8[1]>O)O=this.A8[1];if(this.AX[1]>O)O=this.AX[1];if(this.AY[1]>O)
O=this.AY[1];}else{var tmp;if(N<L){tmp=L;L=N;N=tmp;}if(O<M){tmp=M;M=O;O=tmp;}}return[
L,M,N+1,O+1];},Dw:function(C){var B;if(A.z8(C,this.AY))return;if(!!this.G&&((this.
E&0x1)===0x1))this.G.Ah(this.GetExtent());this.Aq=null;this.AY=C;if(!!this.G&&((
this.E&0x1)===0x1))this.G.Ah(this.GetExtent());if((!!this.G&&((this.E&0x400)===0x400
))&&!((this.G.E&0x2000)===0x2000)){this.E=this.E|0x800;this.G.E=this.G.E|0x4000;
A.ow([B=this.G,B.Bb],this);}},Dv:function(C){var B;if(A.z8(C,this.A9))return;if(
!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.GetExtent());this.Aq=null;this.A9=
C;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.GetExtent());if((!!this.G&&((
this.E&0x400)===0x400))&&!((this.G.E&0x2000)===0x2000)){this.E=this.E|0x800;this.
G.E=this.G.E|0x4000;A.ow([B=this.G,B.Bb],this);}},Du:function(C){var B;if(A.z8(C
,this.AX))return;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.GetExtent());this.
Aq=null;this.AX=C;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.GetExtent());
if((!!this.G&&((this.E&0x400)===0x400))&&!((this.G.E&0x2000)===0x2000)){this.E=this.
E|0x800;this.G.E=this.G.E|0x4000;A.ow([B=this.G,B.Bb],this);}},Dt:function(C){var
B;if(A.z8(C,this.A8))return;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.GetExtent(
));this.Aq=null;this.A8=C;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.GetExtent(
));if((!!this.G&&((this.E&0x400)===0x400))&&!((this.G.E&0x2000)===0x2000)){this.
E=this.E|0x800;this.G.E=this.G.E|0x4000;A.ow([B=this.G,B.Bb],this);}},FJ:function(
C9){var Ar=A.aan(4,A.vw,null);var I=0;var Av=3;var Gu=false;var Gv=false;Ar.Set(
0,this.A8);Ar.Set(1,this.AX);Ar.Set(2,this.A9);Ar.Set(3,this.AY);while(I<4){var HQ=
Ar.Get(I)[0];var Fr=Ar.Get(I)[1];var Jn=Ar.Get(Av)[0];var GL=Ar.Get(Av)[1];if(((
Fr>C9[1])!==(GL>C9[1]))||((Fr<C9[1])!==(GL<C9[1]))){var HR=((((Jn-HQ)*(C9[1]-Fr)
)/(GL-Fr))|0)+HQ;if(C9[0]>HR)Gu=!Gu;if(C9[0]<HR)Gv=!Gv;}Av=I;I=I+1;}return Gu||Gv;
},H2:function(){return((((this.A8[0]===this.AY[0])&&(this.AX[0]===this.A9[0]))&&(
this.A8[1]===this.AX[1]))&&(this.A9[1]===this.AY[1]))||((((this.A8[0]===this.AX[
0])&&(this.A9[0]===this.AY[0]))&&(this.A8[1]===this.AY[1]))&&(this.AX[1]===this.
A9[1]));},_Init:function(aArg){D.A_._Init.call(this,aArg);this.__proto__=D.B8;},
_className:"Core::QuadView"};D.AP={P:A.vx,Ej:function(S,EX){var T=A._NewObject(D.
EM,0);T.Bq=this.P;T.An=S;T.Df=EX;this.Aq=T;},ED:function(S,BI){var B;var AN=this.
BY;var T=this.Aq;var L=T.Bq[0];var M=T.Bq[1];var N=T.Bq[2];var O=T.Bq[3];var Bp=[
S[2]-S[0],S[3]-S[1]];var Aw=N-L;var Ak=O-M;if(!BI){var BU=[(B=T.An)[2]-B[0],B[3]-
B[1]];L=L-T.An[0];M=M-T.An[1];if(BU[0]!==Bp[0]){var Bf=((AN&0x4)===0x4);var Bg=((
AN&0x8)===0x8);var Cd=((AN&0x1)===0x1);if(!Bf&&(Cd||!Bg))L=((L*Bp[0])/BU[0])|0;if(
!Bg&&(Cd||!Bf)){N=N-T.An[0];N=((N*Bp[0])/BU[0])|0;N=N-Bp[0];}else N=N-T.An[2];L=
L+S[0];N=N+S[2];if(!Cd){if(Bf&&!Bg)N=L+Aw;else if(!Bf&&Bg)L=N-Aw;else{L=L+((((N-
L)-Aw)/2)|0);N=L+Aw;}}}else{N=N-T.An[2];L=L+S[0];N=N+S[2];}if(BU[1]!==Bp[1]){var
Bh=((AN&0x10)===0x10);var Be=((AN&0x20)===0x20);var Ce=((AN&0x2)===0x2);if(!Bh&&(
Ce||!Be))M=((M*Bp[1])/BU[1])|0;if(!Be&&(Ce||!Bh)){O=O-T.An[1];O=((O*Bp[1])/BU[1]
)|0;O=O-Bp[1];}else O=O-T.An[3];M=M+S[1];O=O+S[3];if(!Ce){if(Bh&&!Be)O=M+Ak;else
if(!Bh&&Be)M=O-Ak;else{M=M+((((O-M)-Ak)/2)|0);O=M+Ak;}}}else{O=O-T.An[3];M=M+S[1
];O=O+S[3];}}else{switch(BI){case 3:{L=S[0];N=L+Aw;}break;case 4:{N=S[2];L=N-Aw;
}break;case 1:{M=S[1];O=M+Ak;}break;case 2:{O=S[3];M=O-Ak;}break;default:;}if((BI===
3)||(BI===4)){var Bh=((AN&0x10)===0x10);var Be=((AN&0x20)===0x20);var Ce=((AN&0x2
)===0x2);if(Ce){M=S[1];O=S[3];}else if(Bh&&!Be){M=S[1];O=M+Ak;}else if(Be&&!Bh){
O=S[3];M=O-Ak;}else{M=S[1]+((((S[3]-S[1])-Ak)/2)|0);O=M+Ak;}}if((BI===1)||(BI===
2)){var Bf=((AN&0x4)===0x4);var Bg=((AN&0x8)===0x8);var Cd=((AN&0x1)===0x1);if(Cd
){L=S[0];N=S[2];}else if(Bf&&!Bg){L=S[0];N=L+Aw;}else if(Bg&&!Bf){N=S[2];L=N-Aw;
}else{L=S[0]+((((S[2]-S[0])-Aw)/2)|0);N=L+Aw;}}}T.isEmpty=(L>=N)||(M>=O);if(((this.
E&0x100)===0x100))this.P=[L,M,N,O];else{this.AO([L,M,N,O]);this.Aq=T;}return[N-L
,O-M];},FS:function(aOffset,EW){if(EW)this.P=A.aam(this.P,aOffset);else this.AO(
A.aam(this.P,aOffset));},GetExtent:function(){return this.P;},AO:function(C){var
B;if(A.z9(C,this.P))return;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.P);this.
Aq=null;this.P=C;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.P);if((!!this.
G&&((this.E&0x400)===0x400))&&!((this.G.E&0x2000)===0x2000)){this.E=this.E|0x800;
this.G.E=this.G.E|0x4000;A.ow([B=this.G,B.Bb],this);}},_Init:function(aArg){D.A_.
_Init.call(this,aArg);this.__proto__=D.AP;},_className:"Core::RectView"};D.Ab={B$:
null,BG:null,Fg:null,Ax:null,BL:null,Bn:function(aArg){this.CJ();},BK:function(Ao
,aClip,aOffset,Am,aBlend){var B;Am=((Am+1)*255)>>8;aBlend=aBlend&&((this.E&0x2)===
0x2);if(!this.Ax||(Ao.Co===this))this.Hk(Ao,aClip,A.aak(aOffset,this.P.slice(0,2
)),Am,aBlend);else{var AG=255|(255<<8)|(255<<16)|((Am&0xFF)<<24);this.Ax.Update(
);Ao.GQ(aClip,this.Ax,0,A.aam(this.P,aOffset),Af,AG,AG,AG,AG,aBlend);}},Ct:function(
U,K,Bd,CO,Ci,CP){var B;var H=this.BG;var Dd=null;var V=AB;var Bz=null;if(((B=A.kz(
U,this.P))[0]>=B[2])||(B[1]>=B[3]))return null;U=A.aal(U,this.P.slice(0,2));if(!
!Ci){H=Ci;while(!!H&&(H.G!==this))H=H.G;}while(!!H){if(((H.E&0x400)===0x400)&&!Bz
){Bz=H.Ag;while(!!Bz&&!((Bz.E&0x200)===0x200))Bz=Bz.Ag;if(!!Bz)V=A.kz(U,Bz.GetExtent(
));else V=AB;}if(Bz===H){Bz=null;V=AB;}if((((((H.E&0x8)===0x8)&&((H.E&0x10)===0x10
))&&!((H.E&0x40000)===0x40000))&&!((H.E&0x20000)===0x20000))&&(!((H.E&0x10000)===
0x10000)||(null===H))){var Bq=H.GetExtent();var E_=CO;var Da=null;if(E_===H)E_=null;
if(((H.E&0x400)===0x400)){if(!(((B=A.kz(Bq,V))[0]>=B[2])||(B[1]>=B[3])))Da=H.Ct(
V,K,Bd,E_,Ci,CP);}else if(!(((B=A.kz(Bq,U))[0]>=B[2])||(B[1]>=B[3]))||(CO===H))Da=
H.Ct(U,K,Bd,E_,Ci,CP);H=H.Ag;if(!!Da){if(!Dd||((Da.DO<Dd.DO)&&(Da.DO>=0)))Dd=Da;
if(!Da.DO)H=null;}}else H=H.Ag;Ci=null;}return Dd;},DN:function(U){var B;var Ha;
var H=this.B$;var Ec=AB;var Ep=true;var result=(U=Ha=A.aal(U,this.P.slice(0,2)),
Ha);while(!!H){if(((H.E&0x200)===0x200)){var Eo=(D.D3.isPrototypeOf(H)?H:null);Ec=
A.kz(U,Eo.P);Ep=((Eo.E&0x1)===0x1);}if(((H.E&0x1)===0x1)){if(((H.E&0x400)===0x400
)){if(Ep){var V=A.kz(H.GetExtent(),Ec);if(!((V[0]>=V[2])||(V[1]>=V[3])))result=A.
vS(result,H.DN(V));}}else{var V=A.kz(H.GetExtent(),U);if(!((V[0]>=V[2])||(V[1]>=
V[3])))result=A.vS(result,H.DN(V));}}H=H.Ap;}return A.kz(A.aam(result,this.P.slice(
0,2)),this.P);},BD:function(Cw,C8){var B;var I_=this.E;D.AP.BD.call(this,Cw,C8);
var Db=this.E^I_;if(!!this.BL&&((Db&0x40)===0x40)){if(((this.E&0x40)===0x40))this.
BL.BD(0x40,0x0);else this.BL.BD(0x0,0x40);}if(!!Db){this.E=this.E|0x8000;A.ow([this
,this.Bb],this);}},AO:function(C){var B;if(A.z9(C,this.P))return;var CV=[(B=this.
P)[2]-B[0],B[3]-B[1]];var Fh=[C[2]-C[0],C[3]-C[1]];var Di=!A.z8(CV,Fh);if(Di&&!!
this.Ax){this.Ax.D1(Fh);A.vv(this,0);A.vv(this.Ax,0);}D.AP.AO.call(this,C);if((Di&&(
CV[0]>0))&&(CV[1]>0)){var An=[].concat(Af,CV);var H=this.B$;while(!!H){if((!H.Aq&&(
H.BY!==0x14))&&!((H.E&0x400)===0x400))H.Ej(An,null);H=H.Ap;}}if(Di){this.E=this.
E|0x5000;A.ow([this,this.Bb],this);}},HH:function(Ac){var Hz=(D.KeyEvent.isPrototypeOf(
Ac)?Ac:null);var B2=this.Fg;if(!Hz)return null;while(!!B2&&(!B2.BW||!B2.AD(Hz)))
B2=B2.Ap;return B2;},Jk:function(AJ){if(!!this.Ax){this.Ax.Co=this;var V=A.aal(this.
DN(A.aam(this.Ax.BM,this.P.slice(0,2))),this.P.slice(0,2));this.Ax.EI(V,V,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.Hk(this.Ax,V,Af,255,true);this.Ax.
Co=null;}},Hk:function(Ao,aClip,aOffset,Am,aBlend){var B;var H=this.B$;var Ec=AB;
var Ep=true;this.HZ(Ao,aClip,aOffset,Am,aBlend);while(!!H){if(((H.E&0x200)===0x200
)){var Eo=(D.D3.isPrototypeOf(H)?H:null);Ec=A.kz(aClip,A.aam(Eo.P,aOffset));Ep=((
Eo.E&0x1)===0x1);}if(((H.E&0x1)===0x1)){if(((H.E&0x400)===0x400)){if(Ep){var V=A.
kz(A.aam(H.GetExtent(),aOffset),Ec);if(!((V[0]>=V[2])||(V[1]>=V[3])))H.BK(Ao,V,aOffset
,Am,aBlend);}}else{var V=A.kz(A.aam(H.GetExtent(),aOffset),aClip);if(!((V[0]>=V[
2])||(V[1]>=V[3])))H.BK(Ao,V,aOffset,Am,aBlend);}}H=H.Ap;}this.H1(Ao,aClip,aOffset
,Am,aBlend);},Jg:function(){var B;var Gs=((this.E&0x1000)===0x1000);var CC=[0,0,(
B=this.P)[2]-B[0],B[3]-B[1]];var Cn=false;var DH=AB;var Gq=AB;var H=this.BG;var Bz=
null;while(!!H){if(((H.E&0x800)===0x800)){Cn=true;H.E=H.E&~0x800;}if(Cn&&((H.E&0x200
)===0x200))Cn=false;H=H.Ag;}Cn=false;H=this.B$;if(Gs){this.E=this.E&~0x1000;Gs=!((
CC[0]>=CC[2])||(CC[1]>=CC[3]));}this.E=this.E|0x2000;while(!!H){if(((H.E&0x400)===
0x400)){if(!!H.Aq&&(H.Aq.Df!==Bz))H.Aq=null;if((!H.Aq&&Cn)&&(H.BY!==0x14))H.Ej(Gq
,Bz);}if(!!H.Aq){if(Gs&&!((H.E&0x400)===0x400))H.ED(CC,0);if(Cn&&((H.E&0x400)===
0x400))H.ED(Gq,0);}if(((H.E&0x200)===0x200)){Cn=((H.E&0x1000)===0x1000);Bz=(D.D3.
isPrototypeOf(H)?H:null);if(Cn){H.E=H.E&~0x1000;DH=Bz.P;Gq=DH;Cn=!((DH[0]>=DH[2]
)||(DH[1]>=DH[3]));}if(Cn)this.Ah(Bz.P);}H=H.Ap;}this.E=this.E&~0x2000;this.G_([
CC[2]-CC[0],CC[3]-CC[1]]);},Bb:function(AJ){var B;var Jm=((this.E&0x1000)===0x1000
);if(((this.E&0x4000)===0x4000)){this.E=this.E&~0x4000;this.Jg();}if(((this.E&0x8000
)===0x8000)||Jm){this.E=this.E&~0x8000;this.Ga(this.E);}},Ds:function(C){var B;if(
!!C&&(C.G!==this))throw new Error(BZ);if(!!C&&!((C.E&0x14)===0x14))C=null;if(!!C&&((
C.E&0x10000)===0x10000))C=null;if(C===this.BL)return;if(!!this.BL)this.BL.BD(0x0
,0x60);this.BL=C;if(!!C){if(((this.E&0x40)===0x40))C.BD(0x60,0x0);else C.BD(0x20
,0x0);}},FX:function(C){var B;if(!!this.Ax===C)return;if(C){this.Ax=A._NewObject(
A.Graphics.Canvas,0);this.Ax.D1([(B=this.P)[2]-B[0],B[3]-B[1]]);this.Ax.EQ=[this
,this.Jk];}else{this.Ax.EQ=null;this.Ax.D1(Af);this.Ax=null;}if(!!this.G&&((this.
E&0x1)===0x1))this.G.Ah(this.P);A.vv(this,0);},H1:function(Ao,aClip,aOffset,Am,aBlend
){},HZ:function(Ao,aClip,aOffset,Am,aBlend){},GetMinimalSize:function(){return Af;
},DispatchEvent:function(Ac){var B;var H=this.BL;var Q=(D.Ab.isPrototypeOf(H)?H:
null);var AC=null;if(!!H&&((((H.E&0x10000)===0x10000)||((H.E&0x40000)===0x40000)
)||((H.E&0x20000)===0x20000))){H=null;Q=null;}if(!!Q)AC=Q.DispatchEvent(Ac);else
if(!!H)AC=H.AD(Ac);if(!AC)AC=this.AD(Ac);if(!AC)AC=this.HH(Ac);return AC;},BroadcastEventAtPosition:
function(Ac,He,aFilter){var B;var H=this.BG;var AC=null;while(!!H&&!AC){if((!aFilter||((
B=aFilter)&&((H.E&B)===B)))&&A.vt(H.GetExtent(),He)){var Q=(D.Ab.isPrototypeOf(H
)?H:null);if(!!Q)AC=Q.BroadcastEventAtPosition(Ac,A.aaj(He,Q.P.slice(0,2)),aFilter
);else AC=H.AD(Ac);}H=H.Ag;}if(!AC)AC=this.AD(Ac);return AC;},BroadcastEvent:function(
Ac,aFilter){var B;var H=this.BG;var AC=null;while(!!H&&!AC){if(!aFilter||((B=aFilter
)&&((H.E&B)===B))){var Q=(D.Ab.isPrototypeOf(H)?H:null);if(!!Q)AC=Q.BroadcastEvent(
Ac,aFilter);else AC=H.AD(Ac);}H=H.Ag;}if(!AC)AC=this.AD(Ac);if(!AC)AC=this.HH(Ac
);return AC;},G_:function(aSize){},Ga:function(EZ){},CJ:function(){this.E=this.E|
0x8000;A.ow([this,this.Bb],this);},Ah:function(U){var B;var Q=this;while(!!Q&&!((
U[0]>=U[2])||(U[1]>=U[3]))){var DD=Q.Ax;if(!Q.G&&(Q!==this)){Q.Ah(U);return;}if(
!!DD){var I8=DD.BM;DD.BM=A.vS(DD.BM,U);if(!A.z9(I8,DD.BM)){A.vv(Q,0);A.vv(DD,0);
}}if(!((Q.E&0x1)===0x1))return;U=A.kz(A.aam(U,Q.P.slice(0,2)),Q.P);Q=Q.G;}},GT:function(
J,aFilter){var B;if(!J||(J.G!==this))return null;var CU=J.Ap;var CX=J.Ag;var En=
0x10000;if(((aFilter&0x10000)===0x10000))En=0x0;while(!!CU||!!CX){if((!!CU&&(!aFilter||((
B=aFilter)&&((CU.E&B)===B))))&&(!En||!((B=En)&&((CU.E&B)===B))))return CU;if((!!
CX&&(!aFilter||((B=aFilter)&&((CX.E&B)===B))))&&(!En||!((B=En)&&((CX.E&B)===B)))
)return CX;if(!!CU)CU=CU.Ap;if(!!CX)CX=CX.Ag;}return null;},G9:function(J){var B;
if(!J)throw new Error(Cv);if(J.G!==this)throw new Error(CM);if(!J.Ap)return;var DC=
this.BG;if(((DC===J)||!DC)||(DC.Ap===J))return;if(((J.E&0x401)===0x401)){if(!!J.
Ag&&!!J.Aq)J.Ag.E=J.Ag.E|0x800;J.E=J.E|0x800;this.E=this.E|0x4000;A.ow([this,this.
Bb],this);}if(((J.E&0x200)===0x200)){if(!!J.Ag)J.Ag.E=J.Ag.E|0x800;this.E=this.E|
0x4000;A.ow([this,this.Bb],this);}if(!!J.Ag)J.Ag.Ap=J.Ap;else this.B$=J.Ap;J.Ap.
Ag=J.Ag;J.Ag=DC;J.Ap=DC.Ap;DC.Ap=J;if(!!J.Ap)J.Ap.Ag=J;else this.BG=J;if(((J.E&0x1
)===0x1))this.Ah(J.GetExtent());},G7:function(J){var B;if(!J)throw new Error(C6);
if(J.G!==this)throw new Error(CM);if((((J.E&0x401)===0x401)&&!!J.Ag)&&!!J.Aq){J.
Ag.E=J.Ag.E|0x800;this.E=this.E|0x4000;A.ow([this,this.Bb],this);}if(((J.E&0x200
)===0x200)){if(!!J.Ag)J.Ag.E=J.Ag.E|0x800;this.E=this.E|0x4000;A.ow([this,this.Bb
],this);}J.Aq=null;if(this.BL===J)this.Ds(this.GT(J,0x14));if(!!J.Ag)J.Ag.Ap=J.Ap;
if(!!J.Ap)J.Ap.Ag=J.Ag;if(this.B$===J)this.B$=J.Ap;if(this.BG===J)this.BG=J.Ag;J.
G=null;J.Ap=null;J.Ag=null;if(((J.E&0x1)===0x1))this.Ah(J.GetExtent());},Cr:function(
J,DB){var B;if(!J)throw new Error(D6);if(!!J.G)throw new Error(Gb);var Cx=null;if((
DB<0)&&!!this.BG){Cx=this.BG;DB=DB+1;}while(((DB<0)&&!!Cx)&&!!Cx.Ag){Cx=Cx.Ag;DB=
DB+1;}if(!Cx){J.G=this;J.Ag=this.BG;if(!!this.BG)this.BG.Ap=J;if(!this.B$)this.B$=
J;this.BG=J;}else{J.G=this;J.Ag=Cx.Ag;J.Ap=Cx;Cx.Ag=J;if(!!J.Ag)J.Ag.Ap=J;else this.
B$=J;}if(((J.E&0x1)===0x1))this.Ah(J.GetExtent());if(((!this.BL&&((J.E&0x4)===0x4
))&&((J.E&0x10)===0x10))&&!((J.E&0x10000)===0x10000))this.Ds(J);if(((J.E&0x401)===
0x401)){J.E=J.E|0x800;this.E=this.E|0x4000;A.ow([this,this.Bb],this);}if(((J.E&0x200
)===0x200)){J.E=J.E|0x800;this.E=this.E|0x4000;A.ow([this,this.Bb],this);}},_Init:
function(aArg){D.AP._Init.call(this,aArg);this.__proto__=D.Ab;this.E=0x1F;this.Bn(
aArg);},_Mark:function(F){var B;D.AP._Mark.call(this,F);if((B=this.B$)&&(B._cycle
!=F))B._Mark(B._cycle=F);if((B=this.BG)&&(B._cycle!=F))B._Mark(B._cycle=F);if((B=
this.Fg)&&(B._cycle!=F))B._Mark(B._cycle=F);if((B=this.Ax)&&(B._cycle!=F))B._Mark(
B._cycle=F);if((B=this.BL)&&(B._cycle!=F))B._Mark(B._cycle=F);},_className:"Core::Group"
};D.Root={BB:null,Ai:A.aan(10,null,null),DE:null,Cz:null,EA:0,Ay:0,A2:A.aan(10,0
,null),E8:A.aan(10,A.vx,null),BS:A.aan(10,0,null),Cj:A.aan(10,A.vw,null),DG:A.aan(
10,0,null),Cy:A.aan(10,A.vw,null),BR:A.aan(10,A.vw,null),By:A.aan(10,A.vw,null),
B_:A.aan(10,A.vw,null),Ad:0,Fc:0,Fb:0,Ba:A.aan(4,0,null),AI:A.aan(4,A.vx,null),AH:
0,El:0,DK:0,Gt:true,Bn:function(aArg){if(!!!this.As){var obj=this;A.aaG(obj);}},
FH:function(){return this;},BK:function(Ao,aClip,aOffset,Am,aBlend){var fullScreenUpdate=
false;fullScreenUpdate=A.mr;if(!fullScreenUpdate)Ao.EI(aClip,A.aam(A.aam(aClip,aOffset
),this.P.slice(0,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);D.Ab.BK.
call(this,Ao,aClip,aOffset,Am,aBlend);},BD:function(Cw,C8){var B;D.Ab.BD.call(this
,Cw,C8);if(!this.G&&(((Cw&0x1)===0x1)||((C8&0x1)===0x1)))this.Ah([0,0,(B=this.P)[
2]-B[0],B[3]-B[1]]);if(!this.G&&(((Cw&0x2)===0x2)||((C8&0x2)===0x2)))this.Ah([0,
0,(B=this.P)[2]-B[0],B[3]-B[1]]);},Ds:function(C){if((C!==null)||!C)D.Ab.Ds.call(
this,C);},FX:function(C){var B;var I7=this.Ax;D.Ab.FX.call(this,C);if(((I7!==this.
Ax)&&!this.G)&&((this.E&0x1)===0x1))this.Ah([0,0,(B=this.P)[2]-B[0],B[3]-B[1]]);
},DispatchEvent:function(Ac){if(!!Ac){Ac.DX=!!this.Ay;if(!!this.Ay)Ac.AE=this.Ay;
}var AC;AC=D.Ab.DispatchEvent.call(this,Ac);this.Ay=0;return AC;},BroadcastEvent:
function(Ac,aFilter){if(!!Ac){Ac.DX=!!this.Ay;if(!!this.Ay)Ac.AE=this.Ay;}var AC=
D.Ab.BroadcastEvent.call(this,Ac,aFilter);this.Ay=0;return AC;},Ah:function(U){var
B;if(this.EA>0)throw new Error(Gc);if(!!this.Ax&&!this.G){if(((B=this.Ax.BM)[0]>=
B[2])||(B[1]>=B[3])){A.vv(this,0);A.vv(this.Ax,0);}this.Ax.BM=A.vS(this.Ax.BM,U);
}var fullScreenUpdate=false;fullScreenUpdate=A.mr;if(fullScreenUpdate)U=[0,0,(B=
this.P)[2]-B[0],B[3]-B[1]];if(!!this.G){D.Ab.Ah.call(this,U);return;}U=A.kz(A.aam(
U,this.P.slice(0,2)),this.P);if((U[0]>=U[2])||(U[1]>=U[3]))return;var I;for(I=0;
I<this.AH;I=I+1)if(!(((B=A.kz(this.AI.Get(I),U))[0]>=B[2])||(B[1]>=B[3]))){this.
AI.Set(I,A.vS(this.AI.Get(I),U));this.Ba.Set(I,A.zS(this.AI.Get(I)));return;}if(
this.AH<3){this.AI.Set(this.AH,U);this.Ba.Set(this.AH,A.zS(U));this.AH=this.AH+1;
return;}var Av;var BA;var Ek=0;var Em=0;var Hf=2147483647;this.AI.Set(this.AH,U);
this.Ba.Set(this.AH,A.zS(U));for(Av=0;Av<=this.AH;Av=Av+1)for(BA=Av+1;BA<=this.AH;
BA=BA+1){var Fq=A.zS(A.vS(this.AI.Get(Av),this.AI.Get(BA)));var HG=((Fq<<8)/(this.
Ba.Get(Av)+this.Ba.Get(BA)))|0;if(HG<Hf){Hf=HG;Ek=Av;Em=BA;}}this.AI.Set(Ek,A.vS(
this.AI.Get(Ek),this.AI.Get(Em)));this.Ba.Set(Ek,A.zS(this.AI.Get(Ek)));if(Em!==
this.AH){this.AI.Set(Em,this.AI.Get(this.AH));this.Ba.Set(Em,this.Ba.Get(this.AH
));}},I2:function(){var A3=A._NewObject(D.DP,0);A3.DX=!!this.Ay;if(!!this.Ay)A3.
AE=this.Ay;return A3;},C$:function(){var A3=A._NewObject(D.C2,0);A3.DX=!!this.Ay;
if(!!this.Ay)A3.AE=this.Ay;return A3;},DF:function(){var A3=A._NewObject(D.Fv,0);
A3.DX=!!this.Ay;if(!!this.Ay)A3.AE=this.Ay;return A3;},I3:function(AJ){var I;var
Dd=false;for(I=0;I<10;I=I+1)if(!!this.Ai.Get(I)){var Az=this.By.Get(I);var Q=this.
Ai.Get(I).G;while(!!Q&&(Q!==this)){Az=A.aaj(Az,Q.P.slice(0,2));Q=Q.G;}if(!Q&&(this.
Ai.Get(I)!==this)){var tmp=this.Ai.Get(I);this.Ad=I;this.Ai.Set(I,null);tmp.AD(this.
C$().InitializeUp(I,this.Cy.Get(I),this.Cj.Get(I),this.BS.Get(I),this.A2.Get(I)+
1,this.BR.Get(I),false,this.By.Get(I),this.B_.Get(I)));this.BroadcastEvent(this.
DF().InitializeUp(I,this.A2.Get(I)+1,false,tmp,this.By.Get(I)),0x18);}else{this.
BS.Set(I,(this.Cz.AE-this.DG.Get(I))|0);if(this.BS.Get(I)<10)this.BS.Set(I,10);this.
Ad=I;this.Ai.Get(I).AD(this.C$().InitializeHold(I,Az,this.Cj.Get(I),this.BS.Get(
I),this.A2.Get(I)+1,this.BR.Get(I),this.By.Get(I),this.B_.Get(I)));Dd=true;}}if(
!Dd)this.Cz.BN(false);},GetFPS:function(){var ticksCount=0;var Hm=0;ticksCount=((
new Date).getTime()-A.vs)|0;if(!!this.Fc&&(ticksCount>this.Fc))Hm=((this.Fb*1000
)/((ticksCount-this.Fc)|0))|0;this.Fb=0;this.Fc=ticksCount;return Hm;},Update:function(
){var B;if(!this.DE)this.DE=A._NewObject(A.Graphics.Canvas,0);this.DE.D1([(B=this.
P)[2]-B[0],B[3]-B[1]]);this.DE.Update();return this.UpdateGE20(this.DE);},UpdateGE20:
function(Ao){if(!this.BeginUpdate())return AB;var Cq=this.UpdateCanvas(Ao,Af);this.
EndUpdate();return Cq;},EndUpdate:function(){if(this.AH>0){this.Fb=this.Fb+1;this.
AH=0;}},UpdateCanvas:function(Ao,aOffset){var B;var Cq=AB;var IX=[].concat(aOffset
,A.aak(Ao.FrameSize,aOffset));var I;var Av=this.AH;this.EA=this.EA+1;Ao.Co=this;
for(I=0;(I<Av)&&(I<4);I=I+1)if(this.Ba.Get(I)>0){this.BK(Ao,A.aal(this.AI.Get(I)
,aOffset),[-aOffset[0],-aOffset[1]],255,true);Cq=A.vS(Cq,A.kz(IX,this.AI.Get(I))
);}else Av=Av+1;Ao.Co=null;this.EA=this.EA-1;if(!((Cq[0]>=Cq[2])||(Cq[1]>=Cq[3])
))return A.aal(Cq,aOffset);else return Cq;},GetUpdateRegion:function(EY){var I;var
Av=this.AH;if(EY<0)return AB;for(I=0;(I<Av)&&(I<4);I=I+1)if(!this.Ba.Get(I)){Av=
Av+1;EY=EY+1;}else if(I===EY)return this.AI.Get(I);return AB;},BeginUpdate:function(
){var B;var I;if(!!this.AH&&!A.z9(this.AI.Get(0),[0,0,(B=this.P)[2]-B[0],B[3]-B[
1]])){var HP=A.aan(3,A.vx,null);var HO=this.AH;for(I=0;I<HO;I++)HP.Set(I,this.AI.
Get(I));for(I=0;I<HO;I++){var HI=A.aam(HP.Get(I),this.P.slice(0,2));var HJ=this.
DN(HI);if(!A.z9(HI,HJ))this.Ah(A.aal(HJ,this.P.slice(0,2)));}}var Av;var BA;for(
Av=0;Av<(this.AH-1);Av++)if(this.Ba.Get(Av)>0)for(BA=Av+1;BA<this.AH;BA++)if(this.
Ba.Get(BA)>0){var Fq=A.zS(A.vS(this.AI.Get(Av),this.AI.Get(BA)));if(((Fq-this.Ba.
Get(Av))-this.Ba.Get(BA))<0){this.AI.Set(Av,A.vS(this.AI.Get(Av),this.AI.Get(BA)
));this.Ba.Set(Av,Fq);this.Ba.Set(BA,0);}}for(I=this.AH-1;I>=0;I--)if(!this.Ba.Get(
I))this.AH=this.AH-1;return this.AH;},DoesNeedUpdate:function(){if(this.AH>0)return true;
return false;},Initialize:function(aSize){this.AO([].concat(Af,aSize));if(this.Gt
)this.E=this.E|0x60;else this.E=this.E|0x20;this.Ah(this.P);return this;},SetRootFocus:
function(Gf){if(Gf===this.Gt)return false;this.Gt=Gf;if(!Gf)this.BD(0x0,0x40);else
this.BD(0x40,0x0);return true;},SetUserInputTimestamp:function(IP){this.Ay=IP;},
DriveKeyboardHitting:function(AK,D9,B0){var B;var GF=!!this.BB;if(!!this.BB&&((!
B0||(this.El!==AK))||(this.DK!==D9))){var A3=null;var H=(D.A_.isPrototypeOf(B=this.
BB)?B:null);var B2=(D.DY.isPrototypeOf(B=this.BB)?B:null);if(!!this.El)A3=A._NewObject(
D.KeyEvent,0).Initialize(this.El,false);if(this.DK!==0x00)A3=A._NewObject(D.KeyEvent
,0).Initialize2(this.DK,false);if(!!B2)B2.AD(A3);else if(!!H)H.AD(A3);this.El=0;
this.DK=0x00;this.BB=null;}if(!!this.BB){var A3=null;var H=(D.A_.isPrototypeOf(B=
this.BB)?B:null);var B2=(D.DY.isPrototypeOf(B=this.BB)?B:null);if(!!AK)A3=A._NewObject(
D.KeyEvent,0).Initialize(AK,true);if(this.DK!==0x00)A3=A._NewObject(D.KeyEvent,0
).Initialize2(D9,true);if(!!B2)B2.AD(A3);else if(!!H)H.AD(A3);}if(!this.BB&&B0){
if(!!AK)this.BB=this.DispatchEvent(A._NewObject(D.KeyEvent,0).Initialize(AK,true
));if(D9!==0x00)this.BB=this.DispatchEvent(A._NewObject(D.KeyEvent,0).Initialize2(
D9,true));if(!(D.DY.isPrototypeOf(B=this.BB)?B:null)&&!(D.A_.isPrototypeOf(B=this.
BB)?B:null))this.BB=null;this.El=AK;this.DK=D9;GF=GF||!!this.BB;}this.Ay=0;return GF;
},DriveCursorMovement:function(AL){return this.DriveMultiTouchMovement(this.Ad,AL
);},DriveMultiTouchMovement:function(K,AL){if((K<0)||(K>9)){this.Ay=0;return false;
}var AZ=A.aaj(AL,this.By.Get(K));this.By.Set(K,AL);if(!this.Ai.Get(K)||A.z8(AZ,Af
)){this.Ay=0;return false;}var Az=AL;var Q=this.Ai.Get(K).G;while(!!Q&&(Q!==this
)){Az=A.aaj(Az,Q.P.slice(0,2));Q=Q.G;}if(!Q&&(this.Ai.Get(K)!==this)){var tmp=this.
Ai.Get(K);this.Ad=K;this.Ai.Set(K,null);tmp.AD(this.C$().InitializeUp(K,this.Cy.
Get(K),this.Cj.Get(K),this.BS.Get(K),this.A2.Get(K)+1,this.BR.Get(K),false,this.
By.Get(K),this.B_.Get(K)));this.BroadcastEvent(this.DF().InitializeUp(K,this.A2.
Get(K)+1,false,tmp,AL),0x18);}else{this.Cy.Set(K,Az);this.Ad=K;this.Ai.Get(K).AD(
this.I2().Initialize(K,Az,this.Cj.Get(K),AZ,this.BS.Get(K),this.A2.Get(K)+1,this.
BR.Get(K),AL,this.B_.Get(K)));}this.Ay=0;return true;},DriveCursorHitting:function(
B0,K,AL){return this.DriveMultiTouchHitting(B0,K,AL);},DriveMultiTouchHitting:function(
B0,K,AL){if((K<0)||(K>9)){this.Ay=0;return false;}var ticksCount=this.Ay;if(!ticksCount
)ticksCount=((new Date).getTime()-A.vs)|0;var Ji=this.Ay;this.DriveMultiTouchMovement(
K,AL);AL=this.By.Get(K);this.Ay=Ji;if(B0)this.B_.Set(K,AL);if(B0&&!this.Ai.Get(K
)){var A4;var Az=AL;if(A.vt(this.E8.Get(K),AL)&&((ticksCount-this.DG.Get(K))<=250
))this.A2.Set(K,this.A2.Get(K)+1);else this.A2.Set(K,0);this.E8.Set(K,A.aam(D7,AL
));this.DG.Set(K,ticksCount);A4=this.Ct(A.aam(D7,AL),K,this.A2.Get(K)+1,null,null
,0x0);if(!!A4){this.BroadcastEvent(this.DF().InitializeDown(K,this.A2.Get(K)+1,false
,A4.A_,AL),0x18);this.Ai.Set(K,A4.A_);this.BR.Set(K,A4.B7);}else{this.Ai.Set(K,null
);this.BR.Set(K,Af);this.Ay=0;return false;}var Q=A4.A_.G;while(!!Q&&(Q!==this)){
Az=A.aaj(Az,Q.P.slice(0,2));Q=Q.G;}this.Cj.Set(K,Az);this.Cy.Set(K,Az);this.BS.Set(
K,0);this.Cz.BN(true);this.Ad=K;this.Ai.Get(K).AD(this.C$().InitializeDown(K,Az,
this.A2.Get(K)+1,this.BR.Get(K),false,AL));this.Ay=0;return true;}if(!B0&&!!this.
Ai.Get(K)){var Az=AL;var Q=this.Ai.Get(K).G;while(!!Q&&(Q!==this)){Az=A.aaj(Az,Q.
P.slice(0,2));Q=Q.G;}if(!Q)Az=this.Cy.Get(K);this.Ad=K;var tmp=this.Ai.Get(K);this.
Ai.Set(K,null);tmp.AD(this.C$().InitializeUp(K,Az,this.Cj.Get(K),this.BS.Get(K),
this.A2.Get(K)+1,this.BR.Get(K),false,AL,this.B_.Get(K)));this.BroadcastEvent(this.
DF().InitializeUp(K,this.A2.Get(K)+1,false,tmp,AL),0x18);this.Ay=0;return true;}
this.Ay=0;return false;},IJ:function(Ch,Hd,Ci,CP){if(Ch===this)Ch=null;if(!this.
Ai.Get(this.Ad))return;var A4;A4=this.Ct(A.aam(D7,this.By.Get(this.Ad)),this.Ad,
1,Ch,Ci,CP);if(!!A4&&(this.Ai.Get(this.Ad)!==A4.A_))this.GR(A4.A_,A4.B7);if(!A4&&(
this.Ai.Get(this.Ad)!==Hd))this.GR(Hd,Af);},GR:function(Ch,BO){if(!this.Ai.Get(this.
Ad)||(this.Ai.Get(this.Ad)===Ch))return;var tmp=this.Ai.Get(this.Ad);this.Ai.Set(
this.Ad,null);tmp.AD(this.C$().InitializeUp(this.Ad,this.Cy.Get(this.Ad),this.Cj.
Get(this.Ad),this.BS.Get(this.Ad),this.A2.Get(this.Ad)+1,this.BR.Get(this.Ad),true
,this.By.Get(this.Ad),this.B_.Get(this.Ad)));this.BroadcastEvent(this.DF().InitializeUp(
this.Ad,this.A2.Get(this.Ad)+1,true,tmp,this.By.Get(this.Ad)),0x18);var Az=this.
By.Get(this.Ad);var Q=null;if(!!Ch)Q=Ch.G;while(!!Q&&(Q!==this)){Az=A.aaj(Az,Q.P.
slice(0,2));Q=Q.G;}if(!Q&&(Ch!==this)){this.Ai.Set(this.Ad,null);return;}this.BroadcastEvent(
this.DF().InitializeDown(this.Ad,this.A2.Get(this.Ad)+1,true,Ch,this.By.Get(this.
Ad)),0x18);var ticksCount=0;ticksCount=((new Date).getTime()-A.vs)|0;this.Ai.Set(
this.Ad,Ch);this.BR.Set(this.Ad,BO);this.Cj.Set(this.Ad,Az);this.Cy.Set(this.Ad,
Az);this.A2.Set(this.Ad,0);this.BS.Set(this.Ad,0);this.DG.Set(this.Ad,ticksCount
);this.B_.Set(this.Ad,this.By.Get(this.Ad));this.Ai.Get(this.Ad).AD(this.C$().InitializeDown(
this.Ad,Az,this.A2.Get(this.Ad)+1,this.BR.Get(this.Ad),true,this.B_.Get(this.Ad)
));},_Init:function(aArg){D.Ab._Init.call(this,aArg);D.Timer._Init.call(this.Cz={
As:this},0);(this.Ai=[]).__proto__=D.Root.Ai;(this.A2=[]).__proto__=D.Root.A2;(this.
E8=[]).__proto__=D.Root.E8;(this.BS=[]).__proto__=D.Root.BS;(this.Cj=[]).__proto__=
D.Root.Cj;(this.DG=[]).__proto__=D.Root.DG;(this.Cy=[]).__proto__=D.Root.Cy;(this.
BR=[]).__proto__=D.Root.BR;(this.By=[]).__proto__=D.Root.By;(this.B_=[]).__proto__=
D.Root.B_;(this.Ba=[]).__proto__=D.Root.Ba;(this.AI=[]).__proto__=D.Root.AI;this.
__proto__=D.Root;this.E=0x7F;this.Cz.ER(10);this.Cz.D2=[this,this.I3];this.Bn(aArg
);},_Done:function(){this.__proto__=D.Ab;this.Cz._Done();D.Ab._Done.call(this);}
,_ReInit:function(){D.Ab._ReInit.call(this);this.Cz._ReInit();},_Mark:function(F
){var B;D.Ab._Mark.call(this,F);if((B=this.BB)&&(B._cycle!=F))B._Mark(B._cycle=F
);A.aaf(this.Ai,F);if((B=this.DE)&&(B._cycle!=F))B._Mark(B._cycle=F);if((B=this.
Cz)._cycle!=F)B._Mark(B._cycle=F);},_className:"Core::Root"};D.Event={AE:0,DX:false
,Bn:function(aArg){this.AE=this.EK();},EK:function(){var ticksCount=0;ticksCount=((
new Date).getTime()-A.vs)|0;return ticksCount;},_Init:function(aArg){this.__proto__=
D.Event;this.Bn(aArg);A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(F){var B;if((B=this.As)&&(B._cycle!=F))B._Mark(B._cycle=
F);},As:null,_cycle:0,_observers:null,_className:"Core::Event"};D.KeyEvent={AF:0
,Aj:0,Down:false,Initialize2:function(AK,B0){this.AF=0;this.Aj=AK;this.Down=B0;if((
AK>=0x30)&&(AK<=0x39))this.AF=(10+AK)-48;if((AK>=0x41)&&(AK<=0x5A))this.AF=(105+
AK)-65;if((AK>=0x61)&&(AK<=0x7A))this.AF=(105+AK)-97;if(AK===0x20)this.AF=131;if(
!this.AF)switch(AK){case 0x2B:this.AF=132;break;case 0x2D:this.AF=133;break;case
0x2A:this.AF=134;break;case 0x2F:this.AF=135;break;case 0x3D:this.AF=136;break;case
0x2E:this.AF=137;break;case 0x2C:this.AF=138;break;case 0x3A:this.AF=139;break;case
0x3B:this.AF=140;break;default:;}return this;},Initialize:function(AK,B0){this.AF=
AK;this.Down=B0;this.Aj=0x00;var Gm=AK-10;var Gl=AK-105;if((Gm>=0)&&(Gm<=9))this.
Aj=(48+Gm)&0xFFFF;if((Gl>=0)&&(Gl<=25))this.Aj=(65+Gl)&0xFFFF;if(AK===131)this.Aj=
0x20;if(this.Aj===0x00)switch(AK){case 132:this.Aj=0x2B;break;case 133:this.Aj=0x2D;
break;case 134:this.Aj=0x2A;break;case 135:this.Aj=0x2F;break;case 136:this.Aj=0x3D;
break;case 137:this.Aj=0x2E;break;case 138:this.Aj=0x2C;break;case 139:this.Aj=0x3A;
break;case 140:this.Aj=0x3B;break;default:;}return this;},H4:function(Hc){switch(
Hc){case 141:return((this.Aj>=0x41)&&(this.Aj<=0x5A))||((this.Aj>=0x61)&&(this.Aj<=
0x7A));case 142:return(((this.Aj>=0x41)&&(this.Aj<=0x5A))||((this.Aj>=0x61)&&(this.
Aj<=0x7A)))||((this.Aj>=0x30)&&(this.Aj<=0x39));case 143:return(this.Aj>=0x30)&&(
this.Aj<=0x39);case 144:return(((this.Aj>=0x41)&&(this.Aj<=0x46))||((this.Aj>=0x61
)&&(this.Aj<=0x66)))||((this.Aj>=0x30)&&(this.Aj<=0x39));case 145:return this.Aj
!==0x00;case 146:return(this.Aj===0x00)&&!!this.AF;case 147:return(((this.AF===6
)||(this.AF===7))||(this.AF===4))||(this.AF===5);case 148:return(this.Aj!==0x00)||
!!this.AF;default:;}return Hc===this.AF;},_Init:function(aArg){D.Event._Init.call(
this,aArg);this.__proto__=D.KeyEvent;},_className:"Core::KeyEvent"};D.Fv={F$:null
,BX:A.vw,Bw:0,A7:0,Down:false,BV:false,InitializeUp:function(K,Bd,C7,Gh,B1){this.
Down=false;this.A7=K;this.Bw=Bd;this.BX=B1;this.F$=Gh;this.BV=C7;return this;},InitializeDown:
function(K,Bd,C7,Gh,B1){this.Down=true;this.A7=K;this.Bw=Bd;this.BX=B1;this.F$=Gh;
this.BV=C7;return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.
__proto__=D.Fv;},_Mark:function(F){var B;D.Event._Mark.call(this,F);if((B=this.F$
)&&(B._cycle!=F))B._Mark(B._cycle=F);},_className:"Core::CursorGrabEvent"};D.C2={
DW:A.vw,BX:A.vw,Bw:0,Bl:0,BH:A.vw,A0:A.vw,A7:0,Down:false,BV:false,InitializeHold:
function(K,CN,D$,Ea,Bd,BO,B1,D_){this.Down=true;this.A7=K;this.A0=A.aak(CN,BO);this.
BH=A.aak(D$,BO);this.Bl=Ea;this.Bw=Bd;this.BX=B1;this.DW=D_;return this;},InitializeUp:
function(K,CN,D$,Ea,Bd,BO,C7,B1,D_){this.Down=false;this.A7=K;this.A0=A.aak(CN,BO
);this.BH=A.aak(D$,BO);this.Bl=Ea;this.Bw=Bd;this.BV=C7;this.BX=B1;this.DW=D_;return this;
},InitializeDown:function(K,CN,Bd,BO,C7,B1){this.Down=true;this.A7=K;this.A0=A.aak(
CN,BO);this.BH=A.aak(CN,BO);this.Bl=0;this.Bw=Bd;this.BV=C7;this.BX=B1;this.DW=B1;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.C2;},_className:"Core::CursorEvent"};D.DP={DW:A.vw,BX:A.vw,Bw:0,Bl:0,B7:A.vw,BH:
A.vw,A0:A.vw,A7:0,Initialize:function(K,CN,D$,aOffset,Ea,IO,BO,B1,D_){this.A7=K;
this.A0=A.aak(CN,BO);this.BH=A.aak(D$,BO);this.B7=aOffset;this.Bl=Ea;this.Bw=IO;
this.BX=B1;this.DW=D_;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.DP;},_className:"Core::DragEvent"};D.D3={BK:function(Ao,
aClip,aOffset,Am,aBlend){},AO:function(C){var B;if(A.z9(C,this.P))return;var CV=[(
B=this.P)[2]-B[0],B[3]-B[1]];var Fh=[C[2]-C[0],C[3]-C[1]];var Di=!A.z8(CV,Fh);var
AZ=A.aaj(C.slice(0,2),this.P.slice(0,2));if(!A.z8(AZ,Af)&&!Di){var H=this.Ap;while(
!!H&&!((H.E&0x200)===0x200)){if(((H.E&0x400)===0x400)){var tmp=((H.E&0x100)===0x100
);H.FS(AZ,tmp);}H=H.Ap;}}if((Di&&(CV[0]>0))&&(CV[1]>0)){var An=this.P;var H=this.
Ap;while(!!H&&!((H.E&0x200)===0x200)){if(((H.E&0x400)===0x400)){if(!!H.Aq&&(H.Aq.
Df!==this))H.Aq=null;if(!H.Aq&&(H.BY!==0x14))H.Ej(An,this);}H=H.Ap;}}D.AP.AO.call(
this,C);if(!!this.G&&Di){this.E=this.E|0x1000;if(!((this.G.E&0x2000)===0x2000)){
this.G.E=this.G.E|0x4000;A.ow([B=this.G,B.Bb],this);}}},_Init:function(aArg){D.AP.
_Init.call(this,aArg);this.__proto__=D.D3;this.E=0x203;},_className:"Core::Outline"
};D.F_={FU:null,FT:null,C4:null,C3:null,At:0,A7:0,AE:0,Bw:0,Bl:0,B7:A.vw,BH:A.vw
,A0:A.vw,IK:8,G2:1,Down:false,CI:false,BV:false,Gp:false,HA:0,BK:function(Ao,aClip
,aOffset,Am,aBlend){},AD:function(Ac){var B;var X=(D.C2.isPrototypeOf(Ac)?Ac:null
);var AM=(D.DP.isPrototypeOf(Ac)?Ac:null);var Fd=this.CI;var Eu;var DJ;var HN;var
CF;var Hj;if(!X&&!AM)return null;Eu=(!!X&&X.Down)&&!X.Bl;DJ=(!!X&&X.Down)&&(X.Bl>
0);HN=(!!X&&X.Down)&&(X.Bl>this.HA);CF=!!X&&!X.Down;Hj=!!AM;if(Eu)this.HA=((B=(X.
BV?0:50))&0x80)?B|0xFFFFFF00:B&0xFF;if(Eu){var GB=0;var Ei;this.At=this.At|(1<<X.
A7);for(Ei=this.At&4095;Ei>0;Ei=Ei>>1)if(!!(Ei&1))GB=GB+1;if(GB===1)this.At=(this.
At|16777216)|(4096<<X.A7);}if(CF&&(this.At<16777216)){var CY=this.FH();var A4=null;
if(!!CY){var Jj=(!!this.Ag?this.Ag:this.G);A4=CY.Ct(A.aam(Gd,X.BX),X.A7,X.Bw,null
,Jj,0x0);}if(!!A4){var I;for(I=0;I<10;I++)if(!!(this.At&(1<<I)))A4.A_.AD(A._NewObject(
D.C2,0).InitializeDown(I,X.A0,X.Bw,Af,true,X.BX));for(I=0;I<10;I++)if(!!(this.At&(
1<<I)))A4.A_.AD(A._NewObject(D.C2,0).InitializeUp(I,X.A0,X.A0,0,X.Bw,Af,false,X.
BX,X.BX));}}if(CF)this.At=(this.At&~(1<<X.A7))|33554432;if(HN&&(this.At<16777216
))this.At=this.At|67108864;if(CF&&X.BV)this.At=this.At|67108864;if(CF&&!(this.At&
16777215))this.At=0;if(DJ&&(this.At>=67108864)){var CY=this.FH();if(!!CY)CY.IJ(null
,null,this,0x0);}if((DJ&&!!(this.At&16777216))&&!!(this.At&33554432)){DJ=false;CF=
true;}if(!!X&&!(this.At&(4096<<X.A7)))return this;if(!!AM&&!(this.At&(4096<<AM.A7
)))return this;if(CF&&!(this.At&16777216))return this;if(((Eu||Hj)||DJ)&&((this.
At<16777216)||(this.At>=33554432)))return this;if(CF)this.At=this.At&3758100479;
if(CF&&!(this.At&16777215))this.At=0;if(!!X){this.Down=Eu||DJ;this.CI=this.FJ(X.
A0);this.BH=X.BH;this.A0=X.A0;this.B7=Af;this.Bl=X.Bl;this.Bw=X.Bw;this.BV=X.BV;
this.A7=X.A7;this.AE=X.AE;if(X.Down&&!X.Bl)Fd=false;}if(!!AM){this.Down=true;this.
CI=this.FJ(AM.A0);this.BH=AM.BH;this.A0=AM.A0;this.B7=AM.B7;this.Bl=AM.Bl;this.Bw=
AM.Bw;this.A7=AM.A7;this.BV=false;this.AE=AM.AE;}var Go=this.Down;if((!!X&&this.
Down)&&!this.Bl)(B=this.C3)?B[1].call(B[0],this):null;if((this.Down&&this.CI)&&!
Fd){this.Gp=true;(B=this.FT)?B[1].call(B[0],this):null;}if(this.Gp&&(((Go&&!this.
CI)&&Fd)||((!Go&&this.CI)&&Fd))){this.Gp=false;(B=this.FU)?B[1].call(B[0],this):
null;}if(!!X&&!Go)(B=this.C4)?B[1].call(B[0],this):null;return this;},Ct:function(
U,K,Bd,CO,Ci,CP){var B;if(!!CO&&(CO!==this))return null;if((Bd<1)||(Bd>this.G2))
return null;if(this.At>=33554432)return null;if((this.At>=16777216)&&!(this.At&(
4096<<K)))return null;if(this.H2()){var BC=A.kz(U,this.GetExtent());if(!((BC[0]>=
BC[2])||(BC[1]>=BC[3]))){var CR=A.zT(U);var AZ=Af;if(CR[0]<BC[0])AZ=[BC[0]-CR[0]
,AZ[1]];if(CR[0]>=BC[2])AZ=[(BC[2]-CR[0])-1,AZ[1]];if(CR[1]<BC[1])AZ=[AZ[0],BC[1
]-CR[1]];if(CR[1]>=BC[3])AZ=[AZ[0],(BC[3]-CR[1])-1];return A._NewObject(D.EG,0).
Initialize(this,AZ);}}else{var Ar=A.aan(9,A.vw,null);var I;Ar.Set(0,A.zT(U));Ar.
Set(1,Ar.Get(0));Ar.Set(2,Ar.Get(0));Ar.Set(3,Ar.Get(0));Ar.Set(4,Ar.Get(0));Ar.
Set(1,[U[0],Ar.Get(1)[1]]);Ar.Set(2,[Ar.Get(2)[0],U[1]]);Ar.Set(3,[U[2],Ar.Get(3
)[1]]);Ar.Set(4,[Ar.Get(4)[0],U[3]]);Ar.Set(5,U.slice(0,2));Ar.Set(6,[U[2],U[1]]
);Ar.Set(7,[U[0],U[3]]);Ar.Set(8,U.slice(2,4));for(I=0;I<9;I=I+1)if(this.FJ(Ar.Get(
I)))return A._NewObject(D.EG,0).Initialize(this,A.aaj(Ar.Get(I),Ar.Get(0)));}return null;
},IE:function(C){if(C<1)C=1;this.IK=C;},IC:function(C){if(C<1)C=1;this.G2=C;},BN:
function(C){if(C)this.BD(0x10,0x0);else this.BD(0x0,0x10);},_Init:function(aArg){
D.B8._Init.call(this,aArg);this.__proto__=D.F_;this.E=0x11B;},_Mark:function(F){
var B;D.B8._Mark.call(this,F);if((B=this.FU)&&((B=B[0])._cycle!=F))B._Mark(B._cycle=
F);if((B=this.FT)&&((B=B[0])._cycle!=F))B._Mark(B._cycle=F);if((B=this.C4)&&((B=
B[0])._cycle!=F))B._Mark(B._cycle=F);if((B=this.C3)&&((B=B[0])._cycle!=F))B._Mark(
B._cycle=F);},_className:"Core::SimpleTouchHandler"};D.DY={Ap:null,C4:null,C3:null
,Dg:0,AE:0,G8:0,Dp:148,AF:0,Aj:0,BW:true,Down:false,F0:false,Bn:function(aArg){var
B;var Co=(D.Ab.isPrototypeOf(B=this.As)?B:null);if(!Co)throw new Error(IN);this.
Ap=Co.Fg;Co.Fg=this;},AD:function(Ac){var B;if(!!Ac&&Ac.H4(this.Dp)){this.Down=Ac.
Down;this.AF=Ac.AF;this.Aj=Ac.Aj;this.AE=Ac.AE;if(Ac.Down){this.G8=this.Dg;this.
F0=this.Dg>0;if(!this.F0)(B=this.C3)?B[1].call(B[0],this):null;this.Dg=this.Dg+1;
return true;}if(!Ac.Down){this.F0=this.Dg>1;this.G8=this.Dg-1;this.Dg=0;(B=this.
C4)?B[1].call(B[0],this):null;return true;}}return false;},_Init:function(aArg){
this.__proto__=D.DY;this.Bn(aArg);A.hJ++;},_Done:function(){this.__proto__=null;
A.hJ--;},_ReInit:function(){},_Mark:function(F){var B;if((B=this.Ap)&&(B._cycle!=
F))B._Mark(B._cycle=F);if((B=this.C4)&&((B=B[0])._cycle!=F))B._Mark(B._cycle=F);
if((B=this.C3)&&((B=B[0])._cycle!=F))B._Mark(B._cycle=F);if((B=this.As)&&(B._cycle
!=F))B._Mark(B._cycle=F);},As:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};D.EG={A_:null,DO:0,B7:A.vw,Initialize:function(J,aOffset){this.A_=J;this.B7=aOffset;
this.DO=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=D.EG;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;}
,_ReInit:function(){},_Mark:function(F){var B;if((B=this.A_)&&(B._cycle!=F))B._Mark(
B._cycle=F);if((B=this.As)&&(B._cycle!=F))B._Mark(B._cycle=F);},As:null,_cycle:0
,_observers:null,_className:"Core::CursorHit"};D.EM={Df:null,Bq:A.vx,An:A.vx,isEmpty:
false,_Init:function(aArg){this.__proto__=D.EM;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(F){var B;if((B=this.Df)&&(B._cycle
!=F))B._Mark(B._cycle=F);if((B=this.As)&&(B._cycle!=F))B._Mark(B._cycle=F);},As:
null,_cycle:0,_observers:null,_className:"Core::LayoutContext"};D.EN={Et:A.vw,Es:
A.vw,Er:A.vw,Eq:A.vw,_Init:function(aArg){D.EM._Init.call(this,aArg);this.__proto__=
D.EN;},_className:"Core::LayoutQuadContext"};D.Cu={resource:null,B5:function(){this.
resource=null;},Bn:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=D.Cu;this.Bn(aArg);A.hJ++;},_Done:function(){this.B5();this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(F){var B;if((B=this.As)&&(B._cycle
!=F))B._Mark(B._cycle=F);},As:null,_cycle:0,_observers:null,_className:"Core::Resource"
};D.Timer={D2:null,timer:null,AE:0,Period:1000,EE:0,BW:false,B5:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},Fm:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=A.zk(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},ER:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.BW)this.Fm(this.EE,C);},FW:function(C){if(C<0)C=0;if(C===this.
EE)return;this.EE=C;if(this.BW)this.Fm(C,this.Period);},BN:function(C){if(C===this.
BW)return;this.BW=C;if(C)this.Fm(this.EE,this.Period);else this.Fm(0,0);this.AE=
this.EK();},EK:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.vs
)|0;return ticksCount;},Trigger:function(){var B;this.AE=this.EK();if(!this.Period
)this.BN(false);(B=this.D2)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=D.Timer;A.hJ++;},_Done:function(){this.B5();this.__proto__=null;A.hJ--;
},_ReInit:function(){},_Mark:function(F){var B;if((B=this.D2)&&((B=B[0])._cycle!=
F))B._Mark(B._cycle=F);if((B=this.As)&&(B._cycle!=F))B._Mark(B._cycle=F);},As:null
,_cycle:0,_observers:null,_className:"Core::Timer"};D.Kh={Ki:0x1,Jw:0x2,JF:0x4,Kf:
0x8,BW:0x10,J_:0x20,JG:0x40,JQ:0x80,JE:0x100,JL:0x200,JD:0x400,JX:0x800,G_:0x1000
,Kg:0x2000,JV:0x4000,JW:0x8000,JB:0x10000,JU:0x20000,J7:0x40000};D.BY={JY:0x1,JZ:
0x2,Js:0x4,Jt:0x8,Ju:0x10,Jr:0x20};D.JI={JR:0,Kc:1,Jy:2,JM:3,J1:4,Kd:5,Ke:6,Jz:7
,JA:8,JO:9,JN:10,J3:11,J2:12};D.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,
Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:12,Key3:13,Key4:14,Key5:
15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:21,Blue:22,Yellow:23,White:24,Magenta:
25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:
37,Display:38,SkipPrev:39,SkipNext:40,Home:41,End:42,Insert:43,Delete:44,Clear:45
,VolumeUp:46,VolumeDown:47,Show:48,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:
54,Fwd:55,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62
,TV:63,DVD:64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:
73,Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:
82,Mode:83,Mute:84,User0:85,User1:86,User2:87,User3:88,User4:89,User5:90,User6:91
,User7:92,User8:93,User9:94,User10:95,User11:96,User12:97,User13:98,User14:99,User15:
100,User16:101,User17:102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:
108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:
117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:
126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134
,Divide:135,Equals:136,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141
,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:
146,CursorKeys:147,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:
153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159
,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:
166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172
,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:
179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185
,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:
192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199
,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205
,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210
,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:
216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:
221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:
226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:
231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:
236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:
241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:
246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:
251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:
256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:
261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:
266,CtrlShiftPageUp:267,CtrlShiftPageDown:268,CtrlShiftBackspace:269,CtrlShiftInsert:
270,CtrlShiftDelete:271,CtrlShiftHome:272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:
275,AltF2:276,AltF3:277,AltF4:278,AltF5:279,AltF6:280,AltF7:281,AltF8:282,AltF9:
283,AltF10:284,AltEnter:285,AltEscape:286,AltUp:287,AltDown:288,AltLeft:289,AltRight:
290,AltPageUp:291,AltPageDown:292,AltBackspace:293,AltInsert:294,AltDelete:295,AltHome:
296,AltEnd:297,AltTab:298,AltShiftF1:299,AltShiftF2:300,AltShiftF3:301,AltShiftF4:
302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:
308,AltShiftEnter:309,AltShiftEscape:310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:
313,AltShiftRight:314,AltShiftPageUp:315,AltShiftPageDown:316,AltShiftBackspace:
317,AltShiftInsert:318,AltShiftDelete:319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:
322,ShiftF1:323,ShiftF2:324,ShiftF3:325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:
329,ShiftF8:330,ShiftF9:331,ShiftF10:332,ShiftEnter:333,ShiftEscape:334,ShiftUp:
335,ShiftDown:336,ShiftLeft:337,ShiftRight:338,ShiftPageUp:339,ShiftPageDown:340
,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:343,ShiftHome:344,ShiftEnd:345,ShiftTab:
346};D.J0={Km:0x1,Kj:0x2,Kk:0x4,Kl:0x8,JP:0x10,JH:0x20};
D._Init=function(){D.B8.__proto__=D.A_;D.AP.__proto__=D.A_;D.Ab.__proto__=D.AP;D.
Root.__proto__=D.Ab;D.KeyEvent.__proto__=D.Event;D.Fv.__proto__=D.Event;D.C2.__proto__=
D.Event;D.DP.__proto__=D.Event;D.D3.__proto__=D.AP;D.F_.__proto__=D.B8;D.EN.__proto__=
D.EM;};D._ReInit=function(){};D.A1=function(F){};return D;})();

/* Embedded Wizard */