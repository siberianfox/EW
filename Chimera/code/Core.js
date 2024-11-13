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
);if(EmWiApp.Core)throw new Error("The unit file 'Core.js' included twice!");EmWiApp.
Core=(function(){var B=EmWiApp;var C={};
var AD=[0,0];var A0=[0,0,0,0];var AT="The view does not belong to this group";var
DG="The dialog component is already presented";var DV="The dialog component is actually not presented";
var G2="No fader to perform the fade-in/out operation";var Ji="Trying to use the same fader twice";
var Jj="Trying to fade-in/out a group which belongs to another owner";var Jk="No view to restack";
var H8="View is not in this group";var H9="No view to remove";var Jl="No view to add";
var Jm="View already in a group";var Jn="Recursive invalidate during active update cycle.";
var G3=[-8,-8,9,9];var Jo="The method SwitchToDialog() is not available in Core::VerticalList.";
var Jp="The method DismissDialog() is not available in Core::VerticalList.";var Jq=
"The method PresentDialog() is not available in Core::VerticalList.";var Jr="The method FadeGroup() is not available in Core::VerticalList.";
var Js="The method RestackTop() is not available in Core::VerticalList.";var Jt=
"The method Remove() is not available in Core::VerticalList.";var Ju="The method Add() is not available in Core::VerticalList.";
var Jv="The Slide Touch Handler:";var Jw="is already connected with a view.";var
Jx="The Slide Touch Handler is already connected with a view to scroll "+"its content.";
var Jy=[0,0,170,120];var G4=[0,0,1,1];var Jz="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var JA="Trying to cancel a task not belonging to this queue!";
var JB="Trying to enqueue a task twice!";
C.AO={O:null,U:null,I:null,AM:null,F:0x103,DB:0x14,Hg:function(Ac,H$){},I7:function(
E){var A;var CH=E^this.DB;if(!CH)return;this.DB=E;if(!!this.AM&&!((this.F&0x400)===
0x400)){this.I.F=this.I.F|0x5000;B.ow([A=this.I,A.B9],this);this.I.Au([0,0,(A=this.
I.M)[2]-A[0],A[3]-A[1]]);}if(!!this.AM&&((this.F&0x400)===0x400)){this.AM.FC.F=this.
AM.FC.F|0x1000;this.I.F=this.I.F|0x4000;B.ow([A=this.I,A.B9],this);}},Ev:function(
){var Ah=this.I;while(!!Ah){var Bo=(C.Root.isPrototypeOf(Ah)?Ah:null);if(!!Bo)return Bo;
Ah=Ah.I;}return null;},C0:function(AU,aClip,aOffset,A1,aBlend){},Bc:function(Ai){
return null;},DN:function(Ak,R,Cc,DH,DZ,Ei){return null;},HD:function(Ak){return Ak;
},HE:function(Ac,C7){return AD;},HS:function(aOffset,H_){},GetExtent:function(){
return A0;},AR:function(EB,Fq){var A;if(((this.F&0x200)===0x200))EB=EB&~0x400;var
J7=(this.F&~Fq)|EB;var EZ=J7^this.F;this.F=J7;if(!!this.I&&!!(EZ&0x14)){var Lc=((
this.F&0x14)===0x14);if(Lc&&!this.I.B$)this.I.CU(this);if(!Lc&&(this.I.B$===this
))this.I.CU(this.I.IP(this,0x14));}if(!!this.I&&!!(EZ&0x403))this.I.Au(this.GetExtent(
));if(((!!this.AM&&!!this.I)&&((J7&0x400)===0x400))&&((EZ&0x1)===0x1)){this.F=this.
F|0x800;this.I.F=this.I.F|0x4000;B.ow([A=this.I,A.B9],this);}if(!!this.I&&((EZ&0x400
)===0x400)){this.AM=null;this.F=this.F|0x800;this.I.F=this.I.F|0x4000;B.ow([A=this.
I,A.B9],this);}},_Init:function(aArg){this.__proto__=C.AO;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.O)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.U)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AM)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);
},Q:null,_cycle:0,_observers:null,_className:"Core::View"};C.GU={BM:B.vw,Cb:B.vw
,BL:B.vw,Ca:B.vw,Hg:function(Ac,H$){var Ad=B._NewObject(C.HR,0);this.AM=null;Ad.
Ct=this.GetExtent();Ad.AA=Ac;Ad.FC=H$;Ad.Hs=this.Ca;Ad.Ht=this.BL;Ad.Hu=this.Cb;
Ad.Hv=this.BM;this.AM=Ad;},HE:function(Ac,C7){var A;var BA=this.DB;var Ad=(C.HR.
isPrototypeOf(A=this.AM)?A:null);var V=Ad.Ct[0];var W=Ad.Ct[1];var X=Ad.Ct[2];var
Y=Ad.Ct[3];var Cs=[Ac[2]-Ac[0],Ac[3]-Ac[1]];var A8=X-V;var AQ=Y-W;if(!C7){var Dx=[(
A=Ad.AA)[2]-A[0],A[3]-A[1]];V=V-Ad.AA[0];W=W-Ad.AA[1];if(Dx[0]!==Cs[0]){var Ce=((
BA&0x4)===0x4);var Cf=((BA&0x8)===0x8);var D7=((BA&0x1)===0x1);if(!Ce&&(D7||!Cf)
)V=((V*Cs[0])/Dx[0])|0;if(!Cf&&(D7||!Ce)){X=X-Ad.AA[0];X=((X*Cs[0])/Dx[0])|0;X=X-
Cs[0];}else X=X-Ad.AA[2];V=V+Ac[0];X=X+Ac[2];if(!D7){if(Ce&&!Cf)X=V+A8;else if(!
Ce&&Cf)V=X-A8;else{V=V+((((X-V)-A8)/2)|0);X=V+A8;}}}else{X=X-Ad.AA[2];V=V+Ac[0];
X=X+Ac[2];}if(Dx[1]!==Cs[1]){var Cg=((BA&0x10)===0x10);var Cd=((BA&0x20)===0x20);
var D8=((BA&0x2)===0x2);if(!Cg&&(D8||!Cd))W=((W*Cs[1])/Dx[1])|0;if(!Cd&&(D8||!Cg
)){Y=Y-Ad.AA[1];Y=((Y*Cs[1])/Dx[1])|0;Y=Y-Cs[1];}else Y=Y-Ad.AA[3];W=W+Ac[1];Y=Y+
Ac[3];if(!D8){if(Cg&&!Cd)Y=W+AQ;else if(!Cg&&Cd)W=Y-AQ;else{W=W+((((Y-W)-AQ)/2)|
0);Y=W+AQ;}}}else{Y=Y-Ad.AA[3];W=W+Ac[1];Y=Y+Ac[3];}}else{switch(C7){case 3:{V=Ac[
0];X=V+A8;}break;case 4:{X=Ac[2];V=X-A8;}break;case 1:{W=Ac[1];Y=W+AQ;}break;case
2:{Y=Ac[3];W=Y-AQ;}break;default:;}if((C7===3)||(C7===4)){var Cg=((BA&0x10)===0x10
);var Cd=((BA&0x20)===0x20);var D8=((BA&0x2)===0x2);if(D8){W=Ac[1];Y=Ac[3];}else
if(Cg&&!Cd){W=Ac[1];Y=W+AQ;}else if(Cd&&!Cg){Y=Ac[3];W=Y-AQ;}else{W=Ac[1]+((((Ac[
3]-Ac[1])-AQ)/2)|0);Y=W+AQ;}}if((C7===1)||(C7===2)){var Ce=((BA&0x4)===0x4);var Cf=((
BA&0x8)===0x8);var D7=((BA&0x1)===0x1);if(D7){V=Ac[0];X=Ac[2];}else if(Ce&&!Cf){
V=Ac[0];X=V+A8;}else if(Cf&&!Ce){X=Ac[2];V=X-A8;}else{V=Ac[0]+((((Ac[2]-Ac[0])-A8
)/2)|0);X=V+A8;}}}Ad.isEmpty=(V>=X)||(W>=Y);A8=(X-V)-1;AQ=(Y-W)-1;var EG=Ad.Ct[0
];var EH=Ad.Ct[1];var Eo=(Ad.Ct[2]-EG)-1;var En=(Ad.Ct[3]-EH)-1;if(!Eo)Eo=1;if(!
En)En=1;if(((this.F&0x100)===0x100)){this.Ca=[V+((((Ad.Hs[0]-EG)*A8)/Eo)|0),W+((((
Ad.Hs[1]-EH)*AQ)/En)|0)];this.BL=[V+((((Ad.Ht[0]-EG)*A8)/Eo)|0),W+((((Ad.Ht[1]-EH
)*AQ)/En)|0)];this.Cb=[V+((((Ad.Hu[0]-EG)*A8)/Eo)|0),W+((((Ad.Hu[1]-EH)*AQ)/En)|
0)];this.BM=[V+((((Ad.Hv[0]-EG)*A8)/Eo)|0),W+((((Ad.Hv[1]-EH)*AQ)/En)|0)];}else{
this.Fi([V+((((Ad.Hs[0]-EG)*A8)/Eo)|0),W+((((Ad.Hs[1]-EH)*AQ)/En)|0)]);this.Fj([
V+((((Ad.Ht[0]-EG)*A8)/Eo)|0),W+((((Ad.Ht[1]-EH)*AQ)/En)|0)]);this.Fk([V+((((Ad.
Hu[0]-EG)*A8)/Eo)|0),W+((((Ad.Hu[1]-EH)*AQ)/En)|0)]);this.Fl([V+((((Ad.Hv[0]-EG)
*A8)/Eo)|0),W+((((Ad.Hv[1]-EH)*AQ)/En)|0)]);this.AM=Ad;}return[A8+1,AQ+1];},HS:function(
aOffset,H_){if(H_){this.Ca=B.aak(this.Ca,aOffset);this.BL=B.aak(this.BL,aOffset);
this.Cb=B.aak(this.Cb,aOffset);this.BM=B.aak(this.BM,aOffset);}else{this.Fi(B.aak(
this.Ca,aOffset));this.Fj(B.aak(this.BL,aOffset));this.Fk(B.aak(this.Cb,aOffset)
);this.Fl(B.aak(this.BM,aOffset));}},GetExtent:function(){if(!!this.AM&&this.AM.
isEmpty)return A0;var V=this.Ca[0];var W=this.Ca[1];var X=this.Cb[0];var Y=this.
Cb[1];if((((this.BM[0]!==V)||(this.BL[1]!==W))||(this.BL[0]!==X))||(this.BM[1]!==
Y)){if(this.BL[0]<V)V=this.BL[0];if(this.Cb[0]<V)V=this.Cb[0];if(this.BM[0]<V)V=
this.BM[0];if(this.BL[1]<W)W=this.BL[1];if(this.Cb[1]<W)W=this.Cb[1];if(this.BM[
1]<W)W=this.BM[1];if(this.Ca[0]>X)X=this.Ca[0];if(this.BL[0]>X)X=this.BL[0];if(this.
BM[0]>X)X=this.BM[0];if(this.Ca[1]>Y)Y=this.Ca[1];if(this.BL[1]>Y)Y=this.BL[1];if(
this.BM[1]>Y)Y=this.BM[1];}else{var tmp;if(X<V){tmp=V;V=X;X=tmp;}if(Y<W){tmp=W;W=
Y;Y=tmp;}}return[V,W,X+1,Y+1];},Fl:function(E){var A;if(B.z8(E,this.BM))return;if(
!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.GetExtent());this.AM=null;this.BM=
E;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.GetExtent());if((!!this.I&&((
this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
I.F=this.I.F|0x4000;B.ow([A=this.I,A.B9],this);}},Fk:function(E){var A;if(B.z8(E
,this.Cb))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.GetExtent());this.
AM=null;this.Cb=E;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.GetExtent());
if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.F=this.
F|0x800;this.I.F=this.I.F|0x4000;B.ow([A=this.I,A.B9],this);}},Fj:function(E){var
A;if(B.z8(E,this.BL))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.GetExtent(
));this.AM=null;this.BL=E;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.GetExtent(
));if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.I.F=this.I.F|0x4000;B.ow([A=this.I,A.B9],this);}},Fi:function(
E){var A;if(B.z8(E,this.Ca))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.
GetExtent());this.AM=null;this.Ca=E;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(
this.GetExtent());if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000)===
0x2000)){this.F=this.F|0x800;this.I.F=this.I.F|0x4000;B.ow([A=this.I,A.B9],this);
}},IT:function(DY){var AW=B.aan(4,B.vw,null);var G=0;var A5=3;var JU=false;var JV=
false;AW.Set(0,this.Ca);AW.Set(1,this.BL);AW.Set(2,this.Cb);AW.Set(3,this.BM);while(
G<4){var LG=AW.Get(G)[0];var IE=AW.Get(G)[1];var Od=AW.Get(A5)[0];var Ko=AW.Get(
A5)[1];if(((IE>DY[1])!==(Ko>DY[1]))||((IE<DY[1])!==(Ko<DY[1]))){var LI=((((Od-LG
)*(DY[1]-IE))/(Ko-IE))|0)+LG;if(DY[0]>LI)JU=!JU;if(DY[0]<LI)JV=!JV;}A5=G;G=G+1;}
return JU||JV;},LW:function(){return((((this.Ca[0]===this.BM[0])&&(this.BL[0]===
this.Cb[0]))&&(this.Ca[1]===this.BL[1]))&&(this.Cb[1]===this.BM[1]))||((((this.Ca[
0]===this.BL[0])&&(this.Cb[0]===this.BM[0]))&&(this.Ca[1]===this.BM[1]))&&(this.
BL[1]===this.Cb[1]));},_Init:function(aArg){C.AO._Init.call(this,aArg);this.__proto__=
C.GU;},_className:"Core::QuadView"};C.A9={M:B.vx,Hg:function(Ac,H$){var Ad=B._NewObject(
C.HQ,0);Ad.Ct=this.M;Ad.AA=Ac;Ad.FC=H$;this.AM=Ad;},HE:function(Ac,C7){var A;var
BA=this.DB;var Ad=this.AM;var V=Ad.Ct[0];var W=Ad.Ct[1];var X=Ad.Ct[2];var Y=Ad.
Ct[3];var Cs=[Ac[2]-Ac[0],Ac[3]-Ac[1]];var A8=X-V;var AQ=Y-W;if(!C7){var Dx=[(A=
Ad.AA)[2]-A[0],A[3]-A[1]];V=V-Ad.AA[0];W=W-Ad.AA[1];if(Dx[0]!==Cs[0]){var Ce=((BA&
0x4)===0x4);var Cf=((BA&0x8)===0x8);var D7=((BA&0x1)===0x1);if(!Ce&&(D7||!Cf))V=((
V*Cs[0])/Dx[0])|0;if(!Cf&&(D7||!Ce)){X=X-Ad.AA[0];X=((X*Cs[0])/Dx[0])|0;X=X-Cs[0
];}else X=X-Ad.AA[2];V=V+Ac[0];X=X+Ac[2];if(!D7){if(Ce&&!Cf)X=V+A8;else if(!Ce&&
Cf)V=X-A8;else{V=V+((((X-V)-A8)/2)|0);X=V+A8;}}}else{X=X-Ad.AA[2];V=V+Ac[0];X=X+
Ac[2];}if(Dx[1]!==Cs[1]){var Cg=((BA&0x10)===0x10);var Cd=((BA&0x20)===0x20);var
D8=((BA&0x2)===0x2);if(!Cg&&(D8||!Cd))W=((W*Cs[1])/Dx[1])|0;if(!Cd&&(D8||!Cg)){Y=
Y-Ad.AA[1];Y=((Y*Cs[1])/Dx[1])|0;Y=Y-Cs[1];}else Y=Y-Ad.AA[3];W=W+Ac[1];Y=Y+Ac[3
];if(!D8){if(Cg&&!Cd)Y=W+AQ;else if(!Cg&&Cd)W=Y-AQ;else{W=W+((((Y-W)-AQ)/2)|0);Y=
W+AQ;}}}else{Y=Y-Ad.AA[3];W=W+Ac[1];Y=Y+Ac[3];}}else{switch(C7){case 3:{V=Ac[0];
X=V+A8;}break;case 4:{X=Ac[2];V=X-A8;}break;case 1:{W=Ac[1];Y=W+AQ;}break;case 2:{
Y=Ac[3];W=Y-AQ;}break;default:;}if((C7===3)||(C7===4)){var Cg=((BA&0x10)===0x10);
var Cd=((BA&0x20)===0x20);var D8=((BA&0x2)===0x2);if(D8){W=Ac[1];Y=Ac[3];}else if(
Cg&&!Cd){W=Ac[1];Y=W+AQ;}else if(Cd&&!Cg){Y=Ac[3];W=Y-AQ;}else{W=Ac[1]+((((Ac[3]-
Ac[1])-AQ)/2)|0);Y=W+AQ;}}if((C7===1)||(C7===2)){var Ce=((BA&0x4)===0x4);var Cf=((
BA&0x8)===0x8);var D7=((BA&0x1)===0x1);if(D7){V=Ac[0];X=Ac[2];}else if(Ce&&!Cf){
V=Ac[0];X=V+A8;}else if(Cf&&!Ce){X=Ac[2];V=X-A8;}else{V=Ac[0]+((((Ac[2]-Ac[0])-A8
)/2)|0);X=V+A8;}}}Ad.isEmpty=(V>=X)||(W>=Y);if(((this.F&0x100)===0x100))this.M=[
V,W,X,Y];else{this.Z([V,W,X,Y]);this.AM=Ad;}return[X-V,Y-W];},HS:function(aOffset
,H_){if(H_)this.M=B.aam(this.M,aOffset);else this.Z(B.aam(this.M,aOffset));},GetExtent:
function(){return this.M;},Z:function(E){var A;if(B.z9(E,this.M))return;if(!!this.
I&&((this.F&0x1)===0x1))this.I.Au(this.M);this.AM=null;this.M=E;if(!!this.I&&((this.
F&0x1)===0x1))this.I.Au(this.M);if((!!this.I&&((this.F&0x400)===0x400))&&!((this.
I.F&0x2000)===0x2000)){this.F=this.F|0x800;this.I.F=this.I.F|0x4000;B.ow([A=this.
I,A.B9],this);}},Nc:function(Oc){this.Z(Oc);},L2:function(){return this.M;},_Init:
function(aArg){C.AO._Init.call(this,aArg);this.__proto__=C.A9;},_className:"Core::RectView"
};C.K={Aq:null,AB:null,Ip:null,Ba:null,Dr:null,FE:null,B$:null,GR:255,Bd:function(
aArg){this.Dc();},C0:function(AU,aClip,aOffset,A1,aBlend){var A;A1=((A1+1)*this.
GR)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.Nq(AU,aClip,B.aak(aOffset,this.M.
slice(0,2)),A1,aBlend);},DN:function(Ak,R,Cc,DH,DZ,Ei){var A;var J=this.AB;var Fy=
null;var T=A0;var CM=null;var J3=!!this.Dr&&(!!this.Dr.CF||!!this.Dr.Aq);if(((A=
B.kz(Ak,this.M))[0]>=A[2])||(A[1]>=A[3]))return null;Ak=B.aal(Ak,this.M.slice(0,
2));if(!!DZ){J=DZ;while(!!J&&(J.I!==this))J=J.I;}while(!!J){if(((J.F&0x400)===0x400
)&&!CM){CM=J.U;while(!!CM&&!((CM.F&0x200)===0x200))CM=CM.U;if(!!CM)T=B.kz(Ak,CM.
GetExtent());else T=A0;}if(CM===J){CM=null;T=A0;}if((((((J.F&0x8)===0x8)&&((J.F&
0x10)===0x10))&&!((J.F&0x40000)===0x40000))&&!((J.F&0x20000)===0x20000))&&(!((J.
F&0x10000)===0x10000)||((this.Ba.AE===J)&&!J3))){var Ct=J.GetExtent();var Ii=DH;
var Fv=null;if(Ii===J)Ii=null;if(((J.F&0x400)===0x400)){if(!(((A=B.kz(Ct,T))[0]>=
A[2])||(A[1]>=A[3])))Fv=J.DN(T,R,Cc,Ii,DZ,Ei);}else if(!(((A=B.kz(Ct,Ak))[0]>=A[
2])||(A[1]>=A[3]))||(DH===J))Fv=J.DN(Ak,R,Cc,Ii,DZ,Ei);J=J.U;if(!!Fv){if(!Fy||((
Fv.GA<Fy.GA)&&(Fv.GA>=0)))Fy=Fv;if(!Fv.GA)J=null;}}else J=J.U;DZ=null;}return Fy;
},HD:function(Ak){var A;var A_;var J=this.Aq;var Hc=A0;var Hr=true;var result=(Ak=
A_=B.aal(Ak,this.M.slice(0,2)),A_);while(!!J){if(((J.F&0x200)===0x200)){var Hq=(
C.GS.isPrototypeOf(J)?J:null);Hc=B.kz(Ak,Hq.M);Hr=((Hq.F&0x1)===0x1);}if(((J.F&0x1
)===0x1)){if(((J.F&0x400)===0x400)){if(Hr){var T=B.kz(J.GetExtent(),Hc);if(!((T[
0]>=T[2])||(T[1]>=T[3])))result=B.vS(result,J.HD(T));}}else{var T=B.kz(J.GetExtent(
),Ak);if(!((T[0]>=T[2])||(T[1]>=T[3])))result=B.vS(result,J.HD(T));}}J=J.O;}return B.
kz(B.aam(result,this.M.slice(0,2)),this.M);},AR:function(EB,Fq){var A;var NC=this.
F;C.A9.AR.call(this,EB,Fq);var EZ=this.F^NC;if(!!this.B$&&((EZ&0x40)===0x40)){if(((
this.F&0x40)===0x40))this.B$.AR(0x40,0x0);else this.B$.AR(0x0,0x40);}if(!!this.Ba&&((
EZ&0x40)===0x40)){if(((this.F&0x40)===0x40)&&((this.Ba.AE.F&0x14)===0x14))this.Ba.
AE.AR(0x40,0x0);else this.Ba.AE.AR(0x0,0x40);}if(!!EZ){this.F=this.F|0x8000;B.ow([
this,this.B9],this);}},Z:function(E){var A;if(B.z9(E,this.M))return;var E6=[(A=this.
M)[2]-A[0],A[3]-A[1]];var J6=[E[2]-E[0],E[3]-E[1]];var Gt=!B.z8(E6,J6);C.A9.Z.call(
this,E);if((Gt&&(E6[0]>0))&&(E6[1]>0)){var AA=[].concat(AD,E6);var J=this.Aq;while(
!!J){if((!J.AM&&(J.DB!==0x14))&&!((J.F&0x400)===0x400))J.Hg(AA,null);J=J.O;}}if(
Gt){this.F=this.F|0x5000;B.ow([this,this.B9],this);}},Lr:function(Ai){var Lg=(C.
KeyEvent.isPrototypeOf(Ai)?Ai:null);var DL=this.Ip;if(!Lg)return null;while(!!DL&&(
!DL.BH||!DL.Bc(Lg)))DL=DL.O;return DL;},Nq:function(AU,aClip,aOffset,A1,aBlend){
var A;var J=this.Aq;var Hc=A0;var Hr=true;this.LS(AU,aClip,aOffset,A1,aBlend);while(
!!J){if(((J.F&0x200)===0x200)){var Hq=(C.GS.isPrototypeOf(J)?J:null);Hc=B.kz(aClip
,B.aam(Hq.M,aOffset));Hr=((Hq.F&0x1)===0x1);}if(((J.F&0x1)===0x1)){if(((J.F&0x400
)===0x400)){if(Hr){var T=B.kz(B.aam(J.GetExtent(),aOffset),Hc);if(!((T[0]>=T[2])||(
T[1]>=T[3])))J.C0(AU,T,aOffset,A1,aBlend);}}else{var T=B.kz(B.aam(J.GetExtent(),
aOffset),aClip);if(!((T[0]>=T[2])||(T[1]>=T[3])))J.C0(AU,T,aOffset,A1,aBlend);}}
J=J.O;}this.LU(AU,aClip,aOffset,A1,aBlend);},N2:function(){var A;var JQ=((this.F&
0x1000)===0x1000);var EI=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];var Ep=false;var Go=
A0;var JO=A0;var J=this.AB;var CM=null;while(!!J){if(((J.F&0x800)===0x800)){Ep=true;
J.F=J.F&~0x800;}if(Ep&&((J.F&0x200)===0x200))Ep=false;J=J.U;}Ep=false;J=this.Aq;
if(JQ){this.F=this.F&~0x1000;JQ=!((EI[0]>=EI[2])||(EI[1]>=EI[3]));}this.F=this.F|
0x2000;while(!!J){if(((J.F&0x400)===0x400)){if(!!J.AM&&(J.AM.FC!==CM))J.AM=null;
if((!J.AM&&Ep)&&(J.DB!==0x14))J.Hg(JO,CM);}if(!!J.AM){if(JQ&&!((J.F&0x400)===0x400
))J.HE(EI,0);if(Ep&&((J.F&0x400)===0x400))J.HE(JO,0);}if(((J.F&0x200)===0x200)){
Ep=((J.F&0x1000)===0x1000);CM=(C.GS.isPrototypeOf(J)?J:null);if(Ep){J.F=J.F&~0x1000;
Go=CM.M;JO=Go;Ep=!((Go[0]>=Go[2])||(Go[1]>=Go[3]));}if(Ep)this.Au(CM.M);}J=J.O;}
this.F=this.F&~0x2000;this.KW([EI[2]-EI[0],EI[3]-EI[1]]);},B9:function(An){var A;
var Ob=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~
0x4000;this.N2();}if(((this.F&0x8000)===0x8000)||Ob){this.F=this.F&~0x8000;this.
H4(this.F);}},CU:function(E){var A;if(!!E&&(E.I!==this))throw new Error(AT);if(!
!E&&!((E.F&0x14)===0x14))E=null;if(!!E&&((E.F&0x10000)===0x10000))E=null;if(E===
this.B$)return;if(!!this.B$)this.B$.AR(0x0,0x60);this.B$=E;if(!!E){if(((this.F&0x40
)===0x40))E.AR(0x60,0x0);else E.AR(0x20,0x0);}},BK:function(E){if(E)this.AR(0x10
,0x0);else this.AR(0x0,0x10);},I8:function(E){var A;if(E>255)E=255;if(E<0)E=0;if(
E===this.GR)return;this.GR=E;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.M);
},L6:function(E){if(E)this.AR(0x2,0x0);else this.AR(0x0,0x2);},EW:function(E){if(
E)this.AR(0x1,0x0);else this.AR(0x0,0x1);},LU:function(AU,aClip,aOffset,A1,aBlend
){},LS:function(AU,aClip,aOffset,A1,aBlend){},GetMinimalSize:function(){return AD;
},Jh:function(Bh,Cq,DW,Dk,Dm,Fs,CV,Dl,B5,B3,B4){var A;if(!this.Ba){this.I$(Bh,Cq
,DW,Dk,Dm,null,null,B5,B3,B4);return;}var E5=this.Ba;var BF=E5.O;if(((Bh.F&0x10000
)===0x10000)&&(this.Ba.AE!==Bh))throw new Error(DG);var D4=B._NewObject(C.IG,0);
var CI=E5.CI;var CR=null;var BP=null;if(!!BF){CR=BF.CR;BP=BF.BP;}if(!!BF&&!!E5.FD
)CR=E5.FD;if(!!BF&&!!CV)BP=CV;if(!!Fs)CI=Fs;if(!Cq)Cq=B._GetAutoObject(B.abk.GX);
if(!DW)DW=Cq;if(!Dm)Dm=Dk;if(!Dk)Dk=Dm;D4.CI=DW;D4.BP=Dk;D4.CR=Dm;D4.FD=Dl;D4.AE=
Bh;D4.O=this.Ba.O;this.Ba.O=null;this.Ba=D4;if(this.B$===Bh)this.CU(null);E5.AE.
AR(0x0,0x10040);if(((this.F&0x40)===0x40)&&((Bh.F&0x4)===0x4))Bh.AR(0x10040,0x0);
else Bh.AR(0x10000,0x0);if(!!BP){this.B_(BF.AE,BP.HI(),null,null,B4);this.B_(E5.
AE,CI.EQ(),null,null,true);this.B_(D4.AE,Cq.ER(),B5,B3,true);}else if(!!CR){this.
B_(BF.AE,CR.HJ(),null,null,B4);this.B_(E5.AE,CI.EQ(),null,null,true);this.B_(D4.
AE,Cq.ER(),B5,B3,true);}else if(!!CI){this.B_(E5.AE,CI.EQ(),null,null,B4);this.B_(
D4.AE,Cq.ER(),B5,B3,true);}else this.B_(D4.AE,Cq.ER(),B5,B3,B4);},IH:function(Bh
,Fs,CV,Dl,B5,B3,B4){var A;if(!this.Ba)return;if(!Bh)return;var Bz=this.Ba;var BF=
this.Ba.O;var Gr=null;while((!!Bz&&(Bz.AE!==Bh))&&!!Bz.O){Gr=Bz;Bz=BF;BF=Bz.O;}if(
!Bz||(Bz.AE!==Bh))throw new Error(DV);if(!Gr){this.Ba=BF;Bz.O=null;}else{Gr.O=BF;
Bz.O=null;}Bz.AE.AR(0x0,0x10040);if(((((this.F&0x40)===0x40)&&!!BF)&&!Gr)&&((BF.
AE.F&0x4)===0x4))BF.AE.AR(0x40,0x0);var CI=Bz.CI;var CR=null;var BP=null;if(!!BF
)CR=BF.CR;if(!!BF&&!!Bz.FD)CR=Bz.FD;if(!!BF&&!!Dl)CR=Dl;if(!!Gr&&!!BF)BP=BF.BP;if((
!!Gr&&!!BF)&&!!CV)BP=CV;if(!!Fs)CI=Fs;if(!!BP){this.B_(BF.AE,BP.HI(),null,null,B4
);this.B_(Bz.AE,CI.EQ(),B5,B3,true);}else if(!!CR){this.B_(BF.AE,CR.HJ(),null,null
,B4);this.B_(Bz.AE,CI.EQ(),B5,B3,true);}else this.B_(Bz.AE,CI.EQ(),B5,B3,B4);},I$:
function(Bh,Cq,DW,Dk,Dm,CV,Dl,B5,B3,B4){var A;if(!Bh)return;if(!!this.Ba&&(this.
Ba.AE===Bh)){this.Jh(Bh,Cq,DW,Dk,Dm,null,CV,Dl,B5,B3,B4);return;}if(((Bh.F&0x10000
)===0x10000))throw new Error(DG);var Bz=B._NewObject(C.IG,0);if(!!this.Ba&&!this.
Ba.BP){if(!Dl)Dl=CV;if(!CV)CV=Dl;}var BP=null;if(!!this.Ba)BP=this.Ba.BP;if(!!this.
Ba&&!!CV)BP=CV;if(!Cq)Cq=B._GetAutoObject(B.abk.GX);if(!DW)DW=Cq;if(!Dm)Dm=Dk;if(
!Dk)Dk=Dm;Bz.CI=DW;Bz.BP=Dk;Bz.CR=Dm;Bz.FD=Dl;if(this.B$===Bh)this.CU(null);if(!
!this.Ba)this.Ba.AE.AR(0x0,0x40);if(((this.F&0x40)===0x40)&&((Bh.F&0x4)===0x4))Bh.
AR(0x10040,0x0);else Bh.AR(0x10000,0x0);Bz.AE=Bh;Bz.O=this.Ba;this.Ba=Bz;if(!!BP
){this.B_(this.Ba.O.AE,BP.HI(),null,null,B4);this.B_(Bh,Cq.ER(),B5,B3,true);}else
this.B_(Bh,Cq.ER(),B5,B3,B4);},IV:function(DY){var tmp=this;while(!!tmp){DY=B.aaj(
DY,tmp.M.slice(0,2));tmp=tmp.I;}return DY;},DispatchEvent:function(Ai){var A;var
J=this.B$;var Ah=(C.K.isPrototypeOf(J)?J:null);var A4=null;var J3=!!this.Dr&&(!!
this.Dr.CF||!!this.Dr.Aq);if(!!J&&((((J.F&0x10000)===0x10000)||((J.F&0x40000)===
0x40000))||((J.F&0x20000)===0x20000))){J=null;Ah=null;}if(!!this.Ba&&!J3)A4=this.
Ba.AE.DispatchEvent(Ai);if(!A4&&!!Ah)A4=Ah.DispatchEvent(Ai);else if(!A4&&!!J)A4=
J.Bc(Ai);if(!A4)A4=this.Bc(Ai);if(!A4)A4=this.Lr(Ai);return A4;},BroadcastEventAtPosition:
function(Ai,K3,aFilter){var A;var J=this.AB;var A4=null;while(!!J&&!A4){if((!aFilter||((
A=aFilter)&&((J.F&A)===A)))&&B.vt(J.GetExtent(),K3)){var Ah=(C.K.isPrototypeOf(J
)?J:null);if(!!Ah)A4=Ah.BroadcastEventAtPosition(Ai,B.aaj(K3,Ah.M.slice(0,2)),aFilter
);else A4=J.Bc(Ai);}J=J.U;}if(!A4)A4=this.Bc(Ai);return A4;},BroadcastEvent:function(
Ai,aFilter){var A;var J=this.AB;var A4=null;while(!!J&&!A4){if(!aFilter||((A=aFilter
)&&((J.F&A)===A))){var Ah=(C.K.isPrototypeOf(J)?J:null);if(!!Ah)A4=Ah.BroadcastEvent(
Ai,aFilter);else A4=J.Bc(Ai);}J=J.U;}if(!A4)A4=this.Bc(Ai);if(!A4)A4=this.Lr(Ai);
return A4;},KW:function(aSize){},H4:function(Ha){},Dc:function(){this.F=this.F|0x8000;
B.ow([this,this.B9],this);},Au:function(Ak){var A;var Ah=this;while(!!Ah&&!((Ak[
0]>=Ak[2])||(Ak[1]>=Ak[3]))){if(!Ah.I&&(Ah!==this)){Ah.Au(Ak);return;}if(!((Ah.F&
0x1)===0x1))return;Ak=B.kz(B.aam(Ak,Ah.M.slice(0,2)),Ah.M);Ah=Ah.I;}},IP:function(
P,aFilter){var A;if(!P||(P.I!==this))return null;var E3=P.O;var E8=P.U;var Hm=0x10000;
if(((aFilter&0x10000)===0x10000))Hm=0x0;while(!!E3||!!E8){if((!!E3&&(!aFilter||((
A=aFilter)&&((E3.F&A)===A))))&&(!Hm||!((A=Hm)&&((E3.F&A)===A))))return E3;if((!!
E8&&(!aFilter||((A=aFilter)&&((E8.F&A)===A))))&&(!Hm||!((A=Hm)&&((E8.F&A)===A)))
)return E8;if(!!E3)E3=E3.O;if(!!E8)E8=E8.U;}return null;},B_:function(DX,AI,B5,B3
,B4){var A;if(!DX)return;if(!AI)throw new Error(G2);if((!!AI.K||!!AI.I)||!!AI.C$
)throw new Error(Ji);if(!!DX.I&&(DX.I!==this))throw new Error(Jj);if(!this.Dr)this.
Dr=B._NewObject(C.KV,0);AI.I=this;AI.K=DX;AI.Iq=B3;AI.J8=B5;if(!!DX.FE)DX.FE.C$.
Ms(DX.FE);DX.FE=AI;DX.F=DX.F|0x20000;if((B4&&!!this.Dr.AB)&&!this.Dr.AB.IS())(B.
abk.HM.isPrototypeOf(A=this.Dr.AB)?A:null).Kp(AI);else{var C$=B._NewObject(B.abk.
HM,0);C$.Kp(AI);this.Dr.Mu(C$,false);}},HZ:function(P){var A;if(!P)throw new Error(
Jk);if(P.I!==this)throw new Error(H8);if(!P.O)return;var Gj=this.AB;if(((Gj===P)||
!Gj)||(Gj.O===P))return;if(((P.F&0x401)===0x401)){if(!!P.U&&!!P.AM)P.U.F=P.U.F|0x800;
P.F=P.F|0x800;this.F=this.F|0x4000;B.ow([this,this.B9],this);}if(((P.F&0x200)===
0x200)){if(!!P.U)P.U.F=P.U.F|0x800;this.F=this.F|0x4000;B.ow([this,this.B9],this
);}if(!!P.U)P.U.O=P.O;else this.Aq=P.O;P.O.U=P.U;P.U=Gj;P.O=Gj.O;Gj.O=P;if(!!P.O
)P.O.U=P;else this.AB=P;if(((P.F&0x1)===0x1))this.Au(P.GetExtent());},HY:function(
P){var A;if(!P)throw new Error(H9);if(P.I!==this)throw new Error(H8);if((((P.F&0x401
)===0x401)&&!!P.U)&&!!P.AM){P.U.F=P.U.F|0x800;this.F=this.F|0x4000;B.ow([this,this.
B9],this);}if(((P.F&0x200)===0x200)){if(!!P.U)P.U.F=P.U.F|0x800;this.F=this.F|0x4000;
B.ow([this,this.B9],this);}P.AM=null;if(this.B$===P)this.CU(this.IP(P,0x14));if(
!!P.U)P.U.O=P.O;if(!!P.O)P.O.U=P.U;if(this.Aq===P)this.Aq=P.O;if(this.AB===P)this.
AB=P.U;P.I=null;P.O=null;P.U=null;if(((P.F&0x1)===0x1))this.Au(P.GetExtent());},
At:function(P,Fr){var A;if(!P)throw new Error(Jl);if(!!P.I)throw new Error(Jm);var
EC=null;if((Fr<0)&&!!this.AB){EC=this.AB;Fr=Fr+1;}while(((Fr<0)&&!!EC)&&!!EC.U){
EC=EC.U;Fr=Fr+1;}if(!EC){P.I=this;P.U=this.AB;if(!!this.AB)this.AB.O=P;if(!this.
Aq)this.Aq=P;this.AB=P;}else{P.I=this;P.U=EC.U;P.O=EC;EC.U=P;if(!!P.U)P.U.O=P;else
this.Aq=P;}if(((P.F&0x1)===0x1))this.Au(P.GetExtent());if(((!this.B$&&((P.F&0x4)===
0x4))&&((P.F&0x10)===0x10))&&!((P.F&0x10000)===0x10000))this.CU(P);if(((P.F&0x401
)===0x401)){P.F=P.F|0x800;this.F=this.F|0x4000;B.ow([this,this.B9],this);}if(((P.
F&0x200)===0x200)){P.F=P.F|0x800;this.F=this.F|0x4000;B.ow([this,this.B9],this);
}},_Init:function(aArg){C.A9._Init.call(this,aArg);this.__proto__=C.K;this.F=0x1F;
this.Bd(aArg);},_Mark:function(D){var A;C.A9._Mark.call(this,D);if((A=this.Aq)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AB)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Ip)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ba)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Dr)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
FE)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.B$)&&(A._cycle!=D))A._Mark(A._cycle=
D);},_className:"Core::Group"};C.Root={CQ:null,AV:B.aan(10,null,null),Gl:null,EE:
null,HC:0,A$:0,BS:B.aan(10,0,null),Ih:B.aan(10,B.vx,null),Dq:B.aan(10,0,null),El:
B.aan(10,B.vw,null),Gn:B.aan(10,0,null),ED:B.aan(10,B.vw,null),Dp:B.aan(10,B.vw,
null),CG:B.aan(10,B.vw,null),D0:B.aan(10,B.vw,null),Aw:0,Ik:0,Ij:0,B8:B.aan(4,0,
null),Bn:B.aan(4,B.vx,null),Bm:0,Hj:0,Gp:0,JR:true,Bd:function(aArg){if(!!!this.
Q){var obj=this;B.aaG(obj);}},Ev:function(){return this;},C0:function(AU,aClip,aOffset
,A1,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.mr;if(!fullScreenUpdate
)AU.IO(aClip,B.aam(B.aam(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000
,0x00000000,0x00000000,false);C.K.C0.call(this,AU,aClip,aOffset,A1,aBlend);},AR:
function(EB,Fq){var A;C.K.AR.call(this,EB,Fq);if(!this.I&&(((EB&0x1)===0x1)||((Fq&
0x1)===0x1)))this.Au([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);if(!this.I&&(((EB&0x2)===
0x2)||((Fq&0x2)===0x2)))this.Au([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},CU:function(
E){if((E!==null)||!E)C.K.CU.call(this,E);},I8:function(E){var A;var ND=this.GR;C.
K.I8.call(this,E);if(((ND!==this.GR)&&!this.I)&&((this.F&0x1)===0x1))this.Au([0,
0,(A=this.M)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(Ai){if(!!Ai){Ai.GJ=!!this.
A$;if(!!this.A$)Ai.Ap=this.A$;}var A4;A4=C.K.DispatchEvent.call(this,Ai);this.A$=
0;return A4;},BroadcastEvent:function(Ai,aFilter){if(!!Ai){Ai.GJ=!!this.A$;if(!!
this.A$)Ai.Ap=this.A$;}var A4=C.K.BroadcastEvent.call(this,Ai,aFilter);this.A$=0;
return A4;},Au:function(Ak){var A;if(this.HC>0)throw new Error(Jn);var fullScreenUpdate=
false;fullScreenUpdate=B.mr;if(fullScreenUpdate)Ak=[0,0,(A=this.M)[2]-A[0],A[3]-
A[1]];if(!!this.I){C.K.Au.call(this,Ak);return;}Ak=B.kz(B.aam(Ak,this.M.slice(0,
2)),this.M);if((Ak[0]>=Ak[2])||(Ak[1]>=Ak[3]))return;var G;for(G=0;G<this.Bm;G=G+
1)if(!(((A=B.kz(this.Bn.Get(G),Ak))[0]>=A[2])||(A[1]>=A[3]))){this.Bn.Set(G,B.vS(
this.Bn.Get(G),Ak));this.B8.Set(G,B.zS(this.Bn.Get(G)));return;}if(this.Bm<3){this.
Bn.Set(this.Bm,Ak);this.B8.Set(this.Bm,B.zS(Ak));this.Bm=this.Bm+1;return;}var A5;
var CP;var Hi=0;var Hk=0;var K4=2147483647;this.Bn.Set(this.Bm,Ak);this.B8.Set(this.
Bm,B.zS(Ak));for(A5=0;A5<=this.Bm;A5=A5+1)for(CP=A5+1;CP<=this.Bm;CP=CP+1){var ID=
B.zS(B.vS(this.Bn.Get(A5),this.Bn.Get(CP)));var Lp=((ID<<8)/(this.B8.Get(A5)+this.
B8.Get(CP)))|0;if(Lp<K4){K4=Lp;Hi=A5;Hk=CP;}}this.Bn.Set(Hi,B.vS(this.Bn.Get(Hi)
,this.Bn.Get(Hk)));this.B8.Set(Hi,B.zS(this.Bn.Get(Hi)));if(Hk!==this.Bm){this.Bn.
Set(Hk,this.Bn.Get(this.Bm));this.B8.Set(Hk,this.B8.Get(this.Bm));}},No:function(
){var BU=B._NewObject(C.FM,0);BU.GJ=!!this.A$;if(!!this.A$)BU.Ap=this.A$;return BU;
},Fu:function(){var BU=B._NewObject(C.Dz,0);BU.GJ=!!this.A$;if(!!this.A$)BU.Ap=this.
A$;return BU;},Gm:function(){var BU=B._NewObject(C.FL,0);BU.GJ=!!this.A$;if(!!this.
A$)BU.Ap=this.A$;return BU;},Np:function(An){var G;var Fy=false;for(G=0;G<10;G=G+
1)if(!!this.AV.Get(G)){var AC=this.CG.Get(G);var Ah=this.AV.Get(G).I;while(!!Ah&&(
Ah!==this)){AC=B.aaj(AC,Ah.M.slice(0,2));Ah=Ah.I;}if(!Ah&&(this.AV.Get(G)!==this
)){var tmp=this.AV.Get(G);this.Aw=G;this.AV.Set(G,null);tmp.Bc(this.Fu().InitializeUp(
G,this.ED.Get(G),this.El.Get(G),this.Dq.Get(G),this.BS.Get(G)+1,this.Dp.Get(G),false
,this.CG.Get(G),this.D0.Get(G)));this.BroadcastEvent(this.Gm().InitializeUp(G,this.
BS.Get(G)+1,false,tmp,this.CG.Get(G)),0x18);}else{this.Dq.Set(G,(this.EE.Ap-this.
Gn.Get(G))|0);if(this.Dq.Get(G)<10)this.Dq.Set(G,10);this.Aw=G;this.AV.Get(G).Bc(
this.Fu().InitializeHold(G,AC,this.El.Get(G),this.Dq.Get(G),this.BS.Get(G)+1,this.
Dp.Get(G),this.CG.Get(G),this.D0.Get(G)));Fy=true;}}if(!Fy)this.EE.BK(false);},GetFPS:
function(){var ticksCount=0;var Ld=0;ticksCount=((new Date).getTime()-B.vs)|0;if(
!!this.Ik&&(ticksCount>this.Ik))Ld=((this.Ij*1000)/((ticksCount-this.Ik)|0))|0;this.
Ij=0;this.Ik=ticksCount;return Ld;},Update:function(){var A;if(!this.Gl)this.Gl=
B._NewObject(B.Graphics.Canvas,0);this.Gl.KL([(A=this.M)[2]-A[0],A[3]-A[1]]);this.
Gl.Update();return this.UpdateGE20(this.Gl);},UpdateGE20:function(AU){if(!this.BeginUpdate(
))return A0;var Es=this.UpdateCanvas(AU,AD);this.EndUpdate();return Es;},EndUpdate:
function(){if(this.Bm>0){this.Ij=this.Ij+1;this.Bm=0;}},UpdateCanvas:function(AU
,aOffset){var A;var Es=A0;var Ni=[].concat(aOffset,B.aak(AU.FrameSize,aOffset));
var G;var A5=this.Bm;this.HC=this.HC+1;AU.AE=this;for(G=0;(G<A5)&&(G<4);G=G+1)if(
this.B8.Get(G)>0){this.C0(AU,B.aal(this.Bn.Get(G),aOffset),[-aOffset[0],-aOffset[
1]],255,true);Es=B.vS(Es,B.kz(Ni,this.Bn.Get(G)));}else A5=A5+1;AU.AE=null;this.
HC=this.HC-1;if(!((Es[0]>=Es[2])||(Es[1]>=Es[3])))return B.aal(Es,aOffset);else return Es;
},GetUpdateRegion:function(Ia){var G;var A5=this.Bm;if(Ia<0)return A0;for(G=0;(G<
A5)&&(G<4);G=G+1)if(!this.B8.Get(G)){A5=A5+1;Ia=Ia+1;}else if(G===Ia)return this.
Bn.Get(G);return A0;},BeginUpdate:function(){var A;var G;if(!!this.Bm&&!B.z9(this.
Bn.Get(0),[0,0,(A=this.M)[2]-A[0],A[3]-A[1]])){var LB=B.aan(3,B.vx,null);var LA=
this.Bm;for(G=0;G<LA;G++)LB.Set(G,this.Bn.Get(G));for(G=0;G<LA;G++){var Ls=B.aam(
LB.Get(G),this.M.slice(0,2));var Lt=this.HD(Ls);if(!B.z9(Ls,Lt))this.Au(B.aal(Lt
,this.M.slice(0,2)));}}var A5;var CP;for(A5=0;A5<(this.Bm-1);A5++)if(this.B8.Get(
A5)>0)for(CP=A5+1;CP<this.Bm;CP++)if(this.B8.Get(CP)>0){var ID=B.zS(B.vS(this.Bn.
Get(A5),this.Bn.Get(CP)));if(((ID-this.B8.Get(A5))-this.B8.Get(CP))<0){this.Bn.Set(
A5,B.vS(this.Bn.Get(A5),this.Bn.Get(CP)));this.B8.Set(A5,ID);this.B8.Set(CP,0);}
}for(G=this.Bm-1;G>=0;G--)if(!this.B8.Get(G))this.Bm=this.Bm-1;return this.Bm;},
DoesNeedUpdate:function(){if(this.Bm>0)return true;return false;},Initialize:function(
aSize){this.Z([].concat(AD,aSize));if(this.JR)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Au(this.M);return this;},SetRootFocus:function(JD){if(JD===this.JR)return false;
this.JR=JD;if(!JD)this.AR(0x0,0x40);else this.AR(0x40,0x0);return true;},SetUserInputTimestamp:
function(Ng){this.A$=Ng;},DriveKeyboardHitting:function(Bt,G6,DI){var A;var Kc=!
!this.CQ;if(!!this.CQ&&((!DI||(this.Hj!==Bt))||(this.Gp!==G6))){var BU=null;var J=(
C.AO.isPrototypeOf(A=this.CQ)?A:null);var DL=(C.ET.isPrototypeOf(A=this.CQ)?A:null
);if(!!this.Hj)BU=B._NewObject(C.KeyEvent,0).Initialize(this.Hj,false);if(this.Gp
!==0x00)BU=B._NewObject(C.KeyEvent,0).Initialize2(this.Gp,false);if(!!DL)DL.Bc(BU
);else if(!!J)J.Bc(BU);this.Hj=0;this.Gp=0x00;this.CQ=null;}if(!!this.CQ){var BU=
null;var J=(C.AO.isPrototypeOf(A=this.CQ)?A:null);var DL=(C.ET.isPrototypeOf(A=this.
CQ)?A:null);if(!!Bt)BU=B._NewObject(C.KeyEvent,0).Initialize(Bt,true);if(this.Gp
!==0x00)BU=B._NewObject(C.KeyEvent,0).Initialize2(G6,true);if(!!DL)DL.Bc(BU);else
if(!!J)J.Bc(BU);}if(!this.CQ&&DI){if(!!Bt)this.CQ=this.DispatchEvent(B._NewObject(
C.KeyEvent,0).Initialize(Bt,true));if(G6!==0x00)this.CQ=this.DispatchEvent(B._NewObject(
C.KeyEvent,0).Initialize2(G6,true));if(!(C.ET.isPrototypeOf(A=this.CQ)?A:null)&&
!(C.AO.isPrototypeOf(A=this.CQ)?A:null))this.CQ=null;this.Hj=Bt;this.Gp=G6;Kc=Kc||
!!this.CQ;}this.A$=0;return Kc;},DriveCursorMovement:function(BD){return this.DriveMultiTouchMovement(
this.Aw,BD);},DriveMultiTouchMovement:function(R,BD){if((R<0)||(R>9)){this.A$=0;
return false;}var AJ=B.aaj(BD,this.CG.Get(R));this.CG.Set(R,BD);if(!this.AV.Get(
R)||B.z8(AJ,AD)){this.A$=0;return false;}var AC=BD;var Ah=this.AV.Get(R).I;while(
!!Ah&&(Ah!==this)){AC=B.aaj(AC,Ah.M.slice(0,2));Ah=Ah.I;}if(!Ah&&(this.AV.Get(R)
!==this)){var tmp=this.AV.Get(R);this.Aw=R;this.AV.Set(R,null);tmp.Bc(this.Fu().
InitializeUp(R,this.ED.Get(R),this.El.Get(R),this.Dq.Get(R),this.BS.Get(R)+1,this.
Dp.Get(R),false,this.CG.Get(R),this.D0.Get(R)));this.BroadcastEvent(this.Gm().InitializeUp(
R,this.BS.Get(R)+1,false,tmp,BD),0x18);}else{this.ED.Set(R,AC);this.Aw=R;this.AV.
Get(R).Bc(this.No().Initialize(R,AC,this.El.Get(R),AJ,this.Dq.Get(R),this.BS.Get(
R)+1,this.Dp.Get(R),BD,this.D0.Get(R)));}this.A$=0;return true;},DriveCursorHitting:
function(DI,R,BD){return this.DriveMultiTouchHitting(DI,R,BD);},DriveMultiTouchHitting:
function(DI,R,BD){if((R<0)||(R>9)){this.A$=0;return false;}var ticksCount=this.A$;
if(!ticksCount)ticksCount=((new Date).getTime()-B.vs)|0;var N7=this.A$;this.DriveMultiTouchMovement(
R,BD);BD=this.CG.Get(R);this.A$=N7;if(DI)this.D0.Set(R,BD);if(DI&&!this.AV.Get(R
)){var Bf;var AC=BD;if(B.vt(this.Ih.Get(R),BD)&&((ticksCount-this.Gn.Get(R))<=250
))this.BS.Set(R,this.BS.Get(R)+1);else this.BS.Set(R,0);this.Ih.Set(R,B.aam(G3,BD
));this.Gn.Set(R,ticksCount);Bf=this.DN(B.aam(G3,BD),R,this.BS.Get(R)+1,null,null
,0x0);if(!!Bf){this.BroadcastEvent(this.Gm().InitializeDown(R,this.BS.Get(R)+1,false
,Bf.AO,BD),0x18);this.AV.Set(R,Bf.AO);this.Dp.Set(R,Bf.Av);}else{this.AV.Set(R,null
);this.Dp.Set(R,AD);this.A$=0;return false;}var Ah=Bf.AO.I;while(!!Ah&&(Ah!==this
)){AC=B.aaj(AC,Ah.M.slice(0,2));Ah=Ah.I;}this.El.Set(R,AC);this.ED.Set(R,AC);this.
Dq.Set(R,0);this.EE.BK(true);this.Aw=R;this.AV.Get(R).Bc(this.Fu().InitializeDown(
R,AC,this.BS.Get(R)+1,this.Dp.Get(R),false,BD));this.A$=0;return true;}if(!DI&&!
!this.AV.Get(R)){var AC=BD;var Ah=this.AV.Get(R).I;while(!!Ah&&(Ah!==this)){AC=B.
aaj(AC,Ah.M.slice(0,2));Ah=Ah.I;}if(!Ah)AC=this.ED.Get(R);this.Aw=R;var tmp=this.
AV.Get(R);this.AV.Set(R,null);tmp.Bc(this.Fu().InitializeUp(R,AC,this.El.Get(R),
this.Dq.Get(R),this.BS.Get(R)+1,this.Dp.Get(R),false,BD,this.D0.Get(R)));this.BroadcastEvent(
this.Gm().InitializeUp(R,this.BS.Get(R)+1,false,tmp,BD),0x18);this.A$=0;return true;
}this.A$=0;return false;},GV:function(Eh,K2,DZ,Ei){if(Eh===this)Eh=null;if(!this.
AV.Get(this.Aw))return;var Bf;Bf=this.DN(B.aam(G3,this.CG.Get(this.Aw)),this.Aw,
1,Eh,DZ,Ei);if(!!Bf&&(this.AV.Get(this.Aw)!==Bf.AO))this.Ku(Bf.AO,Bf.Av);if(!Bf&&(
this.AV.Get(this.Aw)!==K2))this.Ku(K2,AD);},Ku:function(Eh,Dj){if(!this.AV.Get(this.
Aw)||(this.AV.Get(this.Aw)===Eh))return;var tmp=this.AV.Get(this.Aw);this.AV.Set(
this.Aw,null);tmp.Bc(this.Fu().InitializeUp(this.Aw,this.ED.Get(this.Aw),this.El.
Get(this.Aw),this.Dq.Get(this.Aw),this.BS.Get(this.Aw)+1,this.Dp.Get(this.Aw),true
,this.CG.Get(this.Aw),this.D0.Get(this.Aw)));this.BroadcastEvent(this.Gm().InitializeUp(
this.Aw,this.BS.Get(this.Aw)+1,true,tmp,this.CG.Get(this.Aw)),0x18);var AC=this.
CG.Get(this.Aw);var Ah=null;if(!!Eh)Ah=Eh.I;while(!!Ah&&(Ah!==this)){AC=B.aaj(AC
,Ah.M.slice(0,2));Ah=Ah.I;}if(!Ah&&(Eh!==this)){this.AV.Set(this.Aw,null);return;
}this.BroadcastEvent(this.Gm().InitializeDown(this.Aw,this.BS.Get(this.Aw)+1,true
,Eh,this.CG.Get(this.Aw)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.vs)|0;this.AV.Set(this.Aw,Eh);this.Dp.Set(this.Aw,Dj);this.El.Set(this.Aw,AC
);this.ED.Set(this.Aw,AC);this.BS.Set(this.Aw,0);this.Dq.Set(this.Aw,0);this.Gn.
Set(this.Aw,ticksCount);this.D0.Set(this.Aw,this.CG.Get(this.Aw));this.AV.Get(this.
Aw).Bc(this.Fu().InitializeDown(this.Aw,AC,this.BS.Get(this.Aw)+1,this.Dp.Get(this.
Aw),true,this.D0.Get(this.Aw)));},_Init:function(aArg){C.K._Init.call(this,aArg);
C.Timer._Init.call(this.EE={Q:this},0);(this.AV=[]).__proto__=C.Root.AV;(this.BS=[
]).__proto__=C.Root.BS;(this.Ih=[]).__proto__=C.Root.Ih;(this.Dq=[]).__proto__=C.
Root.Dq;(this.El=[]).__proto__=C.Root.El;(this.Gn=[]).__proto__=C.Root.Gn;(this.
ED=[]).__proto__=C.Root.ED;(this.Dp=[]).__proto__=C.Root.Dp;(this.CG=[]).__proto__=
C.Root.CG;(this.D0=[]).__proto__=C.Root.D0;(this.B8=[]).__proto__=C.Root.B8;(this.
Bn=[]).__proto__=C.Root.Bn;this.__proto__=C.Root;this.F=0x7F;this.EE.GO(10);this.
EE.Fn=[this,this.Np];this.Bd(aArg);},_Done:function(){this.__proto__=C.K;this.EE.
_Done();C.K._Done.call(this);},_ReInit:function(){C.K._ReInit.call(this);this.EE.
_ReInit();},_Mark:function(D){var A;C.K._Mark.call(this,D);if((A=this.CQ)&&(A._cycle
!=D))A._Mark(A._cycle=D);B.aaf(this.AV,D);if((A=this.Gl)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.EE)._cycle!=D)A._Mark(A._cycle=D);},_className:"Core::Root"
};C.Event={Ap:0,GJ:false,Bd:function(aArg){this.Ap=this.HO();},HO:function(){var
ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;},_Init:
function(aArg){this.__proto__=C.Event;this.Bd(aArg);B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
Q)&&(A._cycle!=D))A._Mark(A._cycle=D);},Q:null,_cycle:0,_observers:null,_className:
"Core::Event"};C.KeyEvent={Bi:0,AH:0,Down:false,Initialize2:function(Bt,DI){this.
Bi=0;this.AH=Bt;this.Down=DI;if((Bt>=0x30)&&(Bt<=0x39))this.Bi=(10+Bt)-48;if((Bt>=
0x41)&&(Bt<=0x5A))this.Bi=(105+Bt)-65;if((Bt>=0x61)&&(Bt<=0x7A))this.Bi=(105+Bt)-
97;if(Bt===0x20)this.Bi=131;if(!this.Bi)switch(Bt){case 0x2B:this.Bi=132;break;case
0x2D:this.Bi=133;break;case 0x2A:this.Bi=134;break;case 0x2F:this.Bi=135;break;case
0x3D:this.Bi=136;break;case 0x2E:this.Bi=137;break;case 0x2C:this.Bi=138;break;case
0x3A:this.Bi=139;break;case 0x3B:this.Bi=140;break;default:;}return this;},Initialize:
function(Bt,DI){this.Bi=Bt;this.Down=DI;this.AH=0x00;var JI=Bt-10;var JH=Bt-105;
if((JI>=0)&&(JI<=9))this.AH=(48+JI)&0xFFFF;if((JH>=0)&&(JH<=25))this.AH=(65+JH)&
0xFFFF;if(Bt===131)this.AH=0x20;if(this.AH===0x00)switch(Bt){case 132:this.AH=0x2B;
break;case 133:this.AH=0x2D;break;case 134:this.AH=0x2A;break;case 135:this.AH=0x2F;
break;case 136:this.AH=0x3D;break;case 137:this.AH=0x2E;break;case 138:this.AH=0x2C;
break;case 139:this.AH=0x3A;break;case 140:this.AH=0x3B;break;default:;}return this;
},LZ:function(K1){switch(K1){case 141:return((this.AH>=0x41)&&(this.AH<=0x5A))||((
this.AH>=0x61)&&(this.AH<=0x7A));case 142:return(((this.AH>=0x41)&&(this.AH<=0x5A
))||((this.AH>=0x61)&&(this.AH<=0x7A)))||((this.AH>=0x30)&&(this.AH<=0x39));case
143:return(this.AH>=0x30)&&(this.AH<=0x39);case 144:return(((this.AH>=0x41)&&(this.
AH<=0x46))||((this.AH>=0x61)&&(this.AH<=0x66)))||((this.AH>=0x30)&&(this.AH<=0x39
));case 145:return this.AH!==0x00;case 146:return(this.AH===0x00)&&!!this.Bi;case
147:return(((this.Bi===6)||(this.Bi===7))||(this.Bi===4))||(this.Bi===5);case 148:
return(this.AH!==0x00)||!!this.Bi;default:;}return K1===this.Bi;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.FL={Gc:null,AZ:B.vw,BO:0,AN:0,Down:false,BG:false,InitializeUp:function(R,Cc
,Fp,JF,DK){this.Down=false;this.AN=R;this.BO=Cc;this.AZ=DK;this.Gc=JF;this.BG=Fp;
return this;},InitializeDown:function(R,Cc,Fp,JF,DK){this.Down=true;this.AN=R;this.
BO=Cc;this.AZ=DK;this.Gc=JF;this.BG=Fp;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.FL;},_Mark:function(D){var A;C.Event._Mark.
call(this,D);if((A=this.Gc)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};C.Dz={Db:B.vw,AZ:B.vw,BO:0,Bp:0,BR:B.vw,Bj:B.vw,AN:0,Down:false,BG:false,InitializeHold:
function(R,EX,G8,G9,Cc,Dj,DK,G7){this.Down=true;this.AN=R;this.Bj=B.aak(EX,Dj);this.
BR=B.aak(G8,Dj);this.Bp=G9;this.BO=Cc;this.AZ=DK;this.Db=G7;return this;},InitializeUp:
function(R,EX,G8,G9,Cc,Dj,Fp,DK,G7){this.Down=false;this.AN=R;this.Bj=B.aak(EX,Dj
);this.BR=B.aak(G8,Dj);this.Bp=G9;this.BO=Cc;this.BG=Fp;this.AZ=DK;this.Db=G7;return this;
},InitializeDown:function(R,EX,Cc,Dj,Fp,DK){this.Down=true;this.AN=R;this.Bj=B.aak(
EX,Dj);this.BR=B.aak(EX,Dj);this.Bp=0;this.BO=Cc;this.BG=Fp;this.AZ=DK;this.Db=DK;
return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Dz;},_className:"Core::CursorEvent"};C.FM={Db:B.vw,AZ:B.vw,BO:0,Bp:0,Av:B.vw,BR:
B.vw,Bj:B.vw,AN:0,Initialize:function(R,EX,G8,aOffset,G9,Nf,Dj,DK,G7){this.AN=R;
this.Bj=B.aak(EX,Dj);this.BR=B.aak(G8,Dj);this.Av=aOffset;this.Bp=G9;this.BO=Nf;
this.AZ=DK;this.Db=G7;return this;},_Init:function(aArg){C.Event._Init.call(this
,aArg);this.__proto__=C.FM;},_className:"Core::DragEvent"};C.GS={C0:function(AU,
aClip,aOffset,A1,aBlend){},Z:function(E){var A;if(B.z9(E,this.M))return;var E6=[(
A=this.M)[2]-A[0],A[3]-A[1]];var J6=[E[2]-E[0],E[3]-E[1]];var Gt=!B.z8(E6,J6);var
AJ=B.aaj(E.slice(0,2),this.M.slice(0,2));if(!B.z8(AJ,AD)&&!Gt){var J=this.O;while(
!!J&&!((J.F&0x200)===0x200)){if(((J.F&0x400)===0x400)){var tmp=((J.F&0x100)===0x100
);J.HS(AJ,tmp);}J=J.O;}}if((Gt&&(E6[0]>0))&&(E6[1]>0)){var AA=this.M;var J=this.
O;while(!!J&&!((J.F&0x200)===0x200)){if(((J.F&0x400)===0x400)){if(!!J.AM&&(J.AM.
FC!==this))J.AM=null;if(!J.AM&&(J.DB!==0x14))J.Hg(AA,this);}J=J.O;}}C.A9.Z.call(
this,E);if(!!this.I&&Gt){this.F=this.F|0x1000;if(!((this.I.F&0x2000)===0x2000)){
this.I.F=this.I.F|0x4000;B.ow([A=this.I,A.B9],this);}}},_Init:function(aArg){C.A9.
_Init.call(this,aArg);this.__proto__=C.GS;this.F=0x203;},_className:"Core::Outline"
};C.AK={CO:null,AO:null,Ee:null,DT:null,FA:-1,Fz:0,Dy:-1,CZ:0,In:8,EJ:0,C3:0,H5:
B.vw,Ex:-1,CE:0,D$:24,DC:0,FQ:null,Li:false,Jh:function(Bh,Cq,DW,Dk,Dm,Fs,CV,Dl,
B5,B3,B4){throw new Error(Jo);},IH:function(Bh,Fs,CV,Dl,B5,B3,B4){throw new Error(
Jp);},I$:function(Bh,Cq,DW,Dk,Dm,CV,Dl,B5,B3,B4){throw new Error(Jq);},DispatchEvent:
function(Ai){var result;result=C.K.DispatchEvent.call(this,Ai);return result;},H4:
function(Ha){var A;if(!this.FQ)return;this.Li=true;var B7=this.Lq(0-this.CE,1);var
Cz=this.Lq((((A=this.M)[3]-A[1])-this.CE)-1,2);var Ig=Cz-B7;if(Ig<1)Ig=1;var Id=(
Ig/2)|0;var Ie=(Ig/3)|0;if(!Id)Id=1;if(!Ie)Ie=1;if(B7<this.CZ){B7=B7-Id;Cz=Cz+Ie;
}else if(Cz>this.Dy){B7=B7-Ie;Cz=Cz+Id;}else{B7=this.CZ;Cz=this.Dy;}if(B7>=this.
DC){B7=0;Cz=-1;}else if(Cz<0){B7=0;Cz=-1;}if(Cz>=this.DC)Cz=this.DC-1;if(B7<0)B7=
0;var Ix=this.CZ;var Iy=this.Dy;var J1=0;var J2=-1;if(B7>Ix)Ix=B7;if(Cz<Iy)Iy=Cz;
if(Ix<=Iy){while((this.Dy<Cz)&&(this.CZ<Ix)){this.Iu();this.K8();}while((this.CZ>
B7)&&(this.Dy>Iy)){this.Lu();this.K7();}}else{this.Dy=(this.Dy-this.CZ)+B7;this.
CZ=B7;J1=this.CZ;J2=this.Dy;}while(this.CZ<B7)this.Iu();while(this.Dy>Cz)this.Lu(
);while(this.CZ>B7)this.K7();while(this.Dy<Cz)this.K8();var S=this.Aq;var CN=this.
CZ;var AC=[0,this.CE+this.Eq(CN,0)];var AQ=(A=this.M)[3]-A[1];var La=null;var LC=(
A=this.M)[2]-A[0];while(!!S){var E0=CN;var Hw=((E0>=this.Fz)&&(E0<=this.FA))||((
CN>=J1)&&(CN<=J2));var JN=S.GetExtent();var E4=B.aaj(AC,JN.slice(0,2));if(Hw)this.
C3=this.D$;else this.C3=JN[3]-JN[1];var JZ=AC[1];var J0=AC[1]+this.C3;if(!B.z8(E4
,AD))S.HS(E4,true);if((Hw&&(JZ<AQ))&&(J0>0)){this.AO=S;this.Ex=E0;this.H5=[LC,this.
C3];(A=this.DT)?A[1].call(A[0],this):null;}S=S.O;CN+=1;AC=[AC[0],AC[1]+this.C3];
}CN=this.CZ;S=this.Aq;AC=[0,this.CE+this.Eq(CN,0)];while(!!S){var E0=CN;var Hw=((
E0>=this.Fz)&&(E0<=this.FA))||((CN>=J1)&&(CN<=J2));if(Hw)this.C3=this.D$;else this.
C3=(A=S.GetExtent())[3]-A[1];var JZ=AC[1];var J0=AC[1]+this.C3;if(Hw&&!((JZ<AQ)&&(
J0>0))){this.AO=S;this.Ex=E0;this.H5=[LC,this.C3];(A=this.DT)?A[1].call(A[0],this
):null;}if(E0===-1)La=S;S=S.O;CN+=1;AC=[AC[0],AC[1]+this.C3];}this.Fz=0;this.FA=-
1;this.AO=null;this.Ex=-1;this.CU(La);this.Li=false;},IP:function(P,aFilter){return null;
},B_:function(DX,AI,B5,B3,B4){throw new Error(Jr);},HZ:function(P){throw new Error(
Js);},HY:function(P){throw new Error(Jt);},At:function(P,Fr){throw new Error(Ju);
},Eq:function(Ne,Nd){return Ne*this.D$;},Lq:function(BD,Nd){return(BD/this.D$)|0;
},Lu:function(){var S=this.AB;if(!S)return null;if(S===this.B$)this.CU(null);this.
Dy=this.Dy-1;if(!!S.U)S.U.O=null;else this.Aq=null;this.AB=S.U;S.U=null;S.I=null;
S.AM=null;if(this.EJ<this.In){if(!!this.CO)this.CO.U=S;S.O=this.CO;this.CO=S;this.
EJ++;}return S;},K8:function(){var A;var S=this.CO;var Hh=this.FQ;var LF=++this.
Dy;while(!!S&&(((A=S)?A.__proto__:null)!==Hh))S=S.O;if(!!S){if(!!S.O)S.O.U=S.U;if(
!!S.U)S.U.O=S.O;if(this.CO===S)this.CO=S.O;S.O=null;S.U=null;this.EJ--;}else{S=(
C.AO.isPrototypeOf(A=B._NewObject(Hh,0))?A:null);S.I7(0x1D);if(!!this.EJ)this.In++;
}this.C3=this.D$;this.Ex=LF;this.H5=[(A=this.M)[2]-A[0],this.C3];this.AO=S;(A=this.
DT)?A[1].call(A[0],this):null;this.AO=null;this.Ex=-1;if(!!this.AB)this.AB.O=S;S.
I=this;S.U=this.AB;this.AB=S;if(!this.Aq)this.Aq=S;if(LF===-1)this.CU(S);return S;
},Iu:function(){var S=this.Aq;if(!S)return null;if(S===this.B$)this.CU(null);this.
CZ=this.CZ+1;if(!!S.O)S.O.U=null;else this.AB=null;this.Aq=S.O;S.O=null;S.I=null;
S.AM=null;if(this.EJ<this.In){if(!!this.CO)this.CO.U=S;S.O=this.CO;this.CO=S;this.
EJ++;}return S;},K7:function(){var A;var S=this.CO;var Hh=this.FQ;var LE=--this.
CZ;while(!!S&&(((A=S)?A.__proto__:null)!==Hh))S=S.O;if(!!S){if(!!S.O)S.O.U=S.U;if(
!!S.U)S.U.O=S.O;if(this.CO===S)this.CO=S.O;S.O=null;S.U=null;this.EJ--;}else{S=(
C.AO.isPrototypeOf(A=B._NewObject(Hh,0))?A:null);S.I7(0x1D);if(!!this.EJ)this.In++;
}this.C3=this.D$;this.Ex=LE;this.H5=[(A=this.M)[2]-A[0],this.C3];this.AO=S;(A=this.
DT)?A[1].call(A[0],this):null;this.AO=null;this.Ex=-1;if(!!this.Aq)this.Aq.U=S;S.
I=this;S.O=this.Aq;this.Aq=S;if(!this.AB)this.AB=S;if(LE===-1)this.CU(S);return S;
},NS:function(An){this.Ml(this.Ee.Av[1]);},NU:function(An){var A;{var T=this.LV(
0,this.DC-1);var Is=this.M.slice(0,2);if(T[0]>Is[0])T=[].concat(Is[0],T.slice(1,
4));if(T[1]>Is[1])T=B.aaS(T,Is[1]);var AJ=T[1]-this.M[1];var J5=((A=this.M)[3]-A[
1])-(T[3]-T[1]);if(J5>0)J5=0;this.Ee.Av=[0,this.CE];this.Ee.Br=[0,(this.CE+J5)-AJ
];this.Ee.Bq=[0,this.CE-AJ];}},Mm:function(E){if(E===this.Ee)return;if(!!E&&!!E.
Gs){B.aa8("%s%*%s",Jv,E,Jw);throw new Error(Jx);}if(!!this.Ee){this.Ee.It=null;this.
Ee.Gs=null;}this.Ee=E;if(!!E){E.It=[this,this.NU];E.Gs=[this,this.NS];}},Ml:function(
E){var A;if(E===this.CE)return;this.CE=E;this.Dc();this.Au([0,0,(A=this.M)[2]-A[
0],A[3]-A[1]]);},KP:function(E){var A;if(E<1)E=1;if(E===this.D$)return;this.D$=E;
while(!!this.Iu());this.Dc();this.Au([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},KR:function(
E){var A;if(E<0)E=0;if(E===this.DC)return;var T=[0,0,(A=this.M)[2]-A[0],A[3]-A[1
]];if(E>this.DC){T=[].concat(T.slice(0,3),this.CE+this.Eq(E,3));T=B.aaS(T,this.CE+
this.Eq(this.DC,3));}else{T=B.aaS(T,this.CE+this.Eq(E,3));T=[].concat(T.slice(0,
3),this.CE+this.Eq(this.DC,3));}this.DC=E;this.Dc();this.Au(T);},KO:function(E){
var A;if(E===this.FQ)return;this.FQ=E;while(!!this.Iu());this.CO=null;this.EJ=0;
this.Dc();this.Au([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},LV:function(DJ,Eg){if(DJ<
0)DJ=0;if(Eg>=this.DC)Eg=this.DC-1;if(DJ>Eg)return A0;var T=this.M;var E4=this.CE;
T=[].concat(T.slice(0,3),(T[1]+E4)+this.Eq(Eg+1,0));T=B.aaS(T,(T[1]+E4)+this.Eq(
DJ,0));return T;},LX:function(DJ,Eg){var A;if(DJ<0)DJ=0;if(DJ>Eg)return;if(this.
Fz>this.FA){this.Fz=DJ;this.FA=Eg;}else{if(DJ<this.Fz)this.Fz=DJ;if(Eg>this.FA)this.
FA=Eg;}var T=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];T=B.aaS(T,this.CE+this.Eq(DJ,0));
T=[].concat(T.slice(0,3),this.CE+this.Eq(Eg+1,0));this.Dc();this.Au(T);},_Init:function(
aArg){C.K._Init.call(this,aArg);this.__proto__=C.AK;this.Z(Jy);this.FQ=B.abg.Text;
},_Mark:function(D){var A;C.K._Mark.call(this,D);if((A=this.CO)&&(A._cycle!=D))A.
_Mark(A._cycle=D);if((A=this.AO)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ee
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.DT)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);},_className:"Core::VerticalList"};C.AS={I2:null,IY:null,DU:null,Ec:
null,EO:0,N:0,AN:0,Ap:0,BO:0,Bp:0,Av:B.vw,BR:B.vw,Bj:B.vw,GW:8,BN:0,KA:1,Down:false
,DR:false,BG:false,JM:false,E2:0,C0:function(AU,aClip,aOffset,A1,aBlend){},Bc:function(
Ai){var A;var L=(C.Dz.isPrototypeOf(Ai)?Ai:null);var Aj=(C.FM.isPrototypeOf(Ai)?
Ai:null);var Im=this.DR;var BZ;var BV;var Fd;var AX;var C9;if(!L&&!Aj)return null;
BZ=(!!L&&L.Down)&&!L.Bp;BV=(!!L&&L.Down)&&(L.Bp>0);Fd=(!!L&&L.Down)&&(L.Bp>this.
E2);AX=!!L&&!L.Down;C9=!!Aj;if(BZ)this.E2=((A=(L.BG?0:50))&0x80)?A|0xFFFFFF00:A&
0xFF;if((((this.BN&0x20)===0x20)&&(this.N>0))&&(this.N<33554432)){var AP=(C.FL.isPrototypeOf(
Ai)?Ai:null);if(((!!AP&&AP.Down)&&(AP.Gc!==this))&&B.vt(this.GetExtent(),this.I.
IV(AP.AZ))){this.EO=0x20;this.N=this.N|67108864;return null;}}if(BZ){var D5=0;var
Cu;this.N=this.N|(1<<L.AN);for(Cu=this.N&4095;Cu>0;Cu=Cu>>1)if(!!(Cu&1))D5=D5+1;
if(D5===1)this.N=(this.N|16777216)|(4096<<L.AN);}if(AX&&(this.N<16777216)){var Bo=
this.Ev();var Bf=null;if(!!Bo){var HA=(!!this.U?this.U:this.I);Bf=Bo.DN(B.aam(G4
,L.AZ),L.AN,L.BO,null,HA,0x0);}if(!!Bf){var G;for(G=0;G<10;G++)if(!!(this.N&(1<<
G)))Bf.AO.Bc(B._NewObject(C.Dz,0).InitializeDown(G,L.Bj,L.BO,AD,true,L.AZ));for(
G=0;G<10;G++)if(!!(this.N&(1<<G)))Bf.AO.Bc(B._NewObject(C.Dz,0).InitializeUp(G,L.
Bj,L.Bj,0,L.BO,AD,false,L.AZ,L.AZ));}}if(AX)this.N=(this.N&~(1<<L.AN))|33554432;
if(Fd&&(this.N<16777216))this.N=this.N|67108864;if(AX&&L.BG)this.N=this.N|67108864;
if(AX&&!(this.N&4095))this.EO=0x0;if(AX&&!(this.N&16777215))this.N=0;if(BV&&(this.
N>=67108864)){var Bo=this.Ev();if(!!Bo)Bo.GV(null,null,this,this.EO);}if((BV&&!!(
this.N&16777216))&&!!(this.N&33554432)){BV=false;AX=true;}if(!!L&&!(this.N&(4096<<
L.AN)))return this;if(!!Aj&&!(this.N&(4096<<Aj.AN)))return this;if(AX&&!(this.N&
16777216))return this;if(((BZ||C9)||BV)&&((this.N<16777216)||(this.N>=33554432))
)return this;if(AX)this.N=this.N&3758100479;if(AX&&!(this.N&16777215))this.N=0;if(
!!L){this.Down=BZ||BV;this.DR=this.IT(L.Bj);this.BR=L.BR;this.Bj=L.Bj;this.Av=AD;
this.Bp=L.Bp;this.BO=L.BO;this.BG=L.BG;this.AN=L.AN;this.Ap=L.Ap;if(L.Down&&!L.Bp
)Im=false;}if(!!Aj){this.Down=true;this.DR=this.IT(Aj.Bj);this.BR=Aj.BR;this.Bj=
Aj.Bj;this.Av=Aj.Av;this.Bp=Aj.Bp;this.BO=Aj.BO;this.AN=Aj.AN;this.BG=false;this.
Ap=Aj.Ap;}var JL=this.Down;if((!!L&&this.Down)&&!this.Bp)(A=this.Ec)?A[1].call(A[
0],this):null;if((this.Down&&this.DR)&&!Im){this.JM=true;(A=this.IY)?A[1].call(A[
0],this):null;}if(this.JM&&(((JL&&!this.DR)&&Im)||((!JL&&this.DR)&&Im))){this.JM=
false;(A=this.I2)?A[1].call(A[0],this):null;}if(!!L&&!JL)(A=this.DU)?A[1].call(A[
0],this):null;if(!!this.BN){var Cw=0x0;if(((((this.BN&0x10)===0x10)&&!!L)&&L.Down
)&&(L.Bp>=1000))Cw=0x10;if((((this.BN&0x1)===0x1)&&!!Aj)&&((Aj.AZ[1]-Aj.Db[1])<=-
this.GW))Cw=0x1;if((((this.BN&0x2)===0x2)&&!!Aj)&&((Aj.AZ[1]-Aj.Db[1])>=this.GW)
)Cw=0x2;if((((this.BN&0x4)===0x4)&&!!Aj)&&((Aj.AZ[0]-Aj.Db[0])<=-this.GW))Cw=0x4;
if((((this.BN&0x8)===0x8)&&!!Aj)&&((Aj.AZ[0]-Aj.Db[0])>=this.GW))Cw=0x8;if(!!Cw){
var Bo=this.Ev();if(!!Bo){this.EO=Cw;Bo.GV(null,this,this,Cw);}}}return this;},DN:
function(Ak,R,Cc,DH,DZ,Ei){var A;if(!!DH&&(DH!==this))return null;if((Cc<1)||(Cc>
this.KA))return null;if(this.N>=33554432)return null;if((this.N>=16777216)&&!(this.
N&(4096<<R)))return null;if(!!(Ei&this.BN))return null;if(this.LW()){var Ax=B.kz(
Ak,this.GetExtent());if(!((Ax[0]>=Ax[2])||(Ax[1]>=Ax[3]))){var Bl=B.zT(Ak);var AJ=
AD;if(Bl[0]<Ax[0])AJ=[Ax[0]-Bl[0],AJ[1]];if(Bl[0]>=Ax[2])AJ=[(Ax[2]-Bl[0])-1,AJ[
1]];if(Bl[1]<Ax[1])AJ=[AJ[0],Ax[1]-Bl[1]];if(Bl[1]>=Ax[3])AJ=[AJ[0],(Ax[3]-Bl[1]
)-1];return B._NewObject(C.Gz,0).Initialize(this,AJ);}}else{var AW=B.aan(9,B.vw,
null);var G;AW.Set(0,B.zT(Ak));AW.Set(1,AW.Get(0));AW.Set(2,AW.Get(0));AW.Set(3,
AW.Get(0));AW.Set(4,AW.Get(0));AW.Set(1,[Ak[0],AW.Get(1)[1]]);AW.Set(2,[AW.Get(2
)[0],Ak[1]]);AW.Set(3,[Ak[2],AW.Get(3)[1]]);AW.Set(4,[AW.Get(4)[0],Ak[3]]);AW.Set(
5,Ak.slice(0,2));AW.Set(6,[Ak[2],Ak[1]]);AW.Set(7,[Ak[0],Ak[3]]);AW.Set(8,Ak.slice(
2,4));for(G=0;G<9;G=G+1)if(this.IT(AW.Get(G)))return B._NewObject(C.Gz,0).Initialize(
this,B.aaj(AW.Get(G),AW.Get(0)));}return null;},Mk:function(E){if(E<1)E=1;this.GW=
E;},Mg:function(E){if(E<1)E=1;this.KA=E;},BK:function(E){if(E)this.AR(0x10,0x0);
else this.AR(0x0,0x10);},_Init:function(aArg){C.GU._Init.call(this,aArg);this.__proto__=
C.AS;this.F=0x11B;},_Mark:function(D){var A;C.GU._Mark.call(this,D);if((A=this.I2
)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.IY)&&((A=A[0])._cycle!=D)
)A._Mark(A._cycle=D);if((A=this.DU)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Ec)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.Dh={I4:null,I3:null,EO:0,N:0,BR:B.vw,BN:0,GB:0,Down:false,DR:false,BG:false,
E2:0,C0:function(AU,aClip,aOffset,A1,aBlend){},Bc:function(Ai){var A;var L=(C.Dz.
isPrototypeOf(Ai)?Ai:null);var Aj=(C.FM.isPrototypeOf(Ai)?Ai:null);var BZ;var BV;
var Fd;var AX;var C9;if((((this.BN&0x20)===0x20)&&(this.N>0))&&(this.N<33554432)
){var AP=(C.FL.isPrototypeOf(Ai)?Ai:null);if(((!!AP&&AP.Down)&&(AP.Gc!==this))&&
B.vt(this.M,this.I.IV(AP.AZ))){this.EO=0x20;this.N=this.N|67108864;return null;}
}if(!L&&!Aj)return null;BZ=(!!L&&L.Down)&&!L.Bp;BV=(!!L&&L.Down)&&(L.Bp>0);Fd=(!
!L&&L.Down)&&(L.Bp>this.E2);AX=!!L&&!L.Down;C9=!!Aj;if(BZ)this.E2=((A=(L.BG?0:50
))&0x80)?A|0xFFFFFF00:A&0xFF;if(BZ){var D5=0;var Cu;this.N=this.N|(1<<L.AN);for(
Cu=this.N&4095;Cu>0;Cu=Cu>>1)if(!!(Cu&1))D5=D5+1;if(D5===1)this.N=(this.N|16777216
)|(4096<<L.AN);}if(AX&&(this.N<16777216)){var Bo=this.Ev();var Bf=null;if(!!Bo){
var HA=(!!this.U?this.U:this.I);Bf=Bo.DN(B.aam(G4,L.AZ),L.AN,L.BO,null,HA,0x0);}
if(!!Bf){var G;for(G=0;G<10;G++)if(!!(this.N&(1<<G)))Bf.AO.Bc(B._NewObject(C.Dz,
0).InitializeDown(G,L.Bj,L.BO,AD,true,L.AZ));for(G=0;G<10;G++)if(!!(this.N&(1<<G
)))Bf.AO.Bc(B._NewObject(C.Dz,0).InitializeUp(G,L.Bj,L.Bj,0,L.BO,AD,false,L.AZ,L.
AZ));}}if(AX)this.N=(this.N&~(1<<L.AN))|33554432;if(Fd&&(this.N<16777216))this.N=
this.N|67108864;if(AX&&L.BG)this.N=this.N|67108864;if(AX&&!(this.N&4095))this.EO=
0x0;if(AX&&!(this.N&16777215))this.N=0;if(BV&&(this.N>=67108864)){var Bo=this.Ev(
);if(!!Bo)Bo.GV(null,null,this,this.EO);}if((BV&&!!(this.N&16777216))&&!!(this.N&
33554432)){BV=false;AX=true;}if(!!L&&!(this.N&(4096<<L.AN)))return this;if(!!Aj&&
!(this.N&(4096<<Aj.AN)))return this;if(AX&&!(this.N&16777216))return this;if(((BZ||
C9)||BV)&&((this.N<16777216)||(this.N>=33554432)))return this;if(AX)this.N=this.
N&3758100479;if(AX&&!(this.N&16777215))this.N=0;if(BZ||AX){this.DR=B.vt(this.M,L.
Bj);this.BG=L.BG;this.BR=L.BR;this.Down=BZ;}if(C9){this.DR=B.vt(this.M,Aj.Bj);this.
BR=Aj.BR;this.Down=true;}if(BZ)this.GB=0;var Em=this.GB;if(C9){var He=Aj.Bj[0]-Aj.
BR[0];var Hf=Aj.Bj[1]-Aj.BR[1];var Lj=((((A=this.M)[2]-A[0])*25)/100)|0;var Lh=((((
A=this.M)[3]-A[1])*25)/100)|0;var Ax=0;if((((He>=Lj)||(He<=-Lj))||(Hf>=Lh))||(Hf<=-
Lh))Ax=Math.sqrt((He*He)+(Hf*Hf));if(Ax>=8){var Ch=(Math.acos(He/Ax)*B.qW)|0;if(
Hf>0)Ch=360-Ch;if((Ch<=22)||(Ch>=338))Em=7;if((Ch>=68)&&(Ch<=112))Em=4;if((Ch>=158
)&&(Ch<=202))Em=2;if((Ch>=248)&&(Ch<=292))Em=5;if((Ch>22)&&(Ch<68))Em=6;if((Ch>112
)&&(Ch<158))Em=1;if((Ch>202)&&(Ch<248))Em=3;if((Ch>292)&&(Ch<338))Em=8;}}if(!this.
GB){this.GB=Em;switch(Em){case 5:break;case 2:(A=this.I3)?A[1].call(A[0],this):null;
break;case 7:(A=this.I4)?A[1].call(A[0],this):null;break;case 4:break;case 3:break;
case 8:break;case 1:break;case 6:break;default:;}}if(!!this.BN){var Cw=0x0;if((BV&&((
this.BN&0x10)===0x10))&&(L.Bp>=1000))Cw=0x10;if((C9&&((this.BN&0x1)===0x1))&&((Aj.
AZ[1]-Aj.Db[1])<=-8))Cw=0x1;if((C9&&((this.BN&0x2)===0x2))&&((Aj.AZ[1]-Aj.Db[1])>=
8))Cw=0x2;if((C9&&((this.BN&0x4)===0x4))&&((Aj.AZ[0]-Aj.Db[0])<=-8))Cw=0x4;if((C9&&((
this.BN&0x8)===0x8))&&((Aj.AZ[0]-Aj.Db[0])>=8))Cw=0x8;if(!!Cw){var Bo=this.Ev();
if(!!Bo){this.EO=Cw;Bo.GV(null,this,this,Cw);}}}return this;},DN:function(Ak,R,Cc
,DH,DZ,Ei){var A;if(!!DH&&(DH!==this))return null;if(this.N>=33554432)return null;
if((this.N>=16777216)&&!(this.N&(4096<<R)))return null;if(!!(Ei&this.BN))return null;
var Ax=B.kz(Ak,this.M);if(!((Ax[0]>=Ax[2])||(Ax[1]>=Ax[3]))){var Bl=B.zT(Ak);var
AJ=AD;if(Bl[0]<Ax[0])AJ=[Ax[0]-Bl[0],AJ[1]];if(Bl[0]>=Ax[2])AJ=[(Ax[2]-Bl[0])-1,
AJ[1]];if(Bl[1]<Ax[1])AJ=[AJ[0],Ax[1]-Bl[1]];if(Bl[1]>=Ax[3])AJ=[AJ[0],(Ax[3]-Bl[
1])-1];return B._NewObject(C.Gz,0).Initialize(this,AJ);}return null;},_Init:function(
aArg){C.A9._Init.call(this,aArg);this.__proto__=C.Dh;this.F=0x11B;},_Mark:function(
D){var A;C.A9._Mark.call(this,D);if((A=this.I4)&&((A=A[0])._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.I3)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::WipeTouchHandler"};C.DE={timer:null,It:null,Gs:null,N:0,Ic:0,D2:5000,FH:0
,Il:B.vw,Fx:0,Ek:0,Az:0,Fb:0,Gv:0,Fw:0,Ej:0,Ay:0,Fa:0,E$:0,BR:B.vw,Kv:B.vw,Bq:B.
vw,Br:B.vw,Av:B.vw,Kx:0.5,Gb:false,Dt:false,Du:false,Ib:false,E2:0,C0:function(AU
,aClip,aOffset,A1,aBlend){},Bc:function(Ai){var A;var L=(C.Dz.isPrototypeOf(Ai)?
Ai:null);var Aj=(C.FM.isPrototypeOf(Ai)?Ai:null);var AP=(C.FL.isPrototypeOf(Ai)?
Ai:null);var BZ;var BV;var Fd;var AX;var C9;BZ=(!!L&&L.Down)&&!L.Bp;BV=(!!L&&L.Down
)&&(L.Bp>0);Fd=(!!L&&L.Down)&&(L.Bp>this.E2);AX=!!L&&!L.Down;C9=!!Aj;if(BZ)this.
E2=((A=(L.BG?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if(BZ){var D5=0;var Cu;this.N=this.
N|(1<<L.AN);for(Cu=this.N&4095;Cu>0;Cu=Cu>>1)if(!!(Cu&1))D5=D5+1;if(D5===1)this.
N=(this.N|16777216)|(4096<<L.AN);}if(AX&&(this.N<16777216)){var Bo=this.Ev();var
Bf=null;if(!!Bo){var HA=(!!this.U?this.U:this.I);Bf=Bo.DN(B.aam(G4,L.AZ),L.AN,L.
BO,null,HA,0x0);}if(!!Bf){var G;for(G=0;G<10;G++)if(!!(this.N&(1<<G)))Bf.AO.Bc(B.
_NewObject(C.Dz,0).InitializeDown(G,L.Bj,L.BO,AD,true,L.AZ));for(G=0;G<10;G++)if(
!!(this.N&(1<<G)))Bf.AO.Bc(B._NewObject(C.Dz,0).InitializeUp(G,L.Bj,L.Bj,0,L.BO,
AD,false,L.AZ,L.AZ));}}if(AX)this.N=(this.N&~(1<<L.AN))|33554432;if(Fd&&(this.N<
16777216))this.N=this.N|67108864;if(AX&&L.BG)this.N=this.N|67108864;if(AX&&!(this.
N&16777215))this.N=0;if(BV&&(this.N>=67108864)){var Bo=this.Ev();if(!!Bo)Bo.GV(null
,null,this,0x0);}if((BV&&!!(this.N&16777216))&&!!(this.N&33554432)){BV=false;AX=
true;}if(!!L&&!(this.N&(4096<<L.AN)))return this;if(!!Aj&&!(this.N&(4096<<Aj.AN)
))return this;if(AX&&!(this.N&16777216))return this;if(((BZ||C9)||BV)&&((this.N<
16777216)||(this.N>=33554432)))return this;if(AX)this.N=this.N&3758100479;if(AX&&
!(this.N&16777215))this.N=0;if(!!AP&&(AP.Gc===this))return null;if((!!AP&&AP.Down
)&&(this.Ib||!this.Gb))return null;if((!!AP&&AP.Down)&&!B.vt(this.M,this.I.IV(AP.
AZ)))return null;if((!!AP&&!AP.Down)&&(!this.Ib||(this.Ic!==AP.AN)))return null;
if((!L&&!Aj)&&!AP)return null;if(!!L){this.Ib=BZ||BV;this.Ic=L.AN;this.BR=L.BR;}
if(!!Aj)this.Ic=Aj.AN;if(!!AP){this.Ib=AP.Down;this.Ic=AP.AN;}if(!!AP&&AP.Down){
this.Kk();this.Ay=(((AP.Ap-this.E$)*0.001)*this.Ej)+this.Ay;this.Az=(((AP.Ap-this.
Gv)*0.001)*this.Ek)+this.Az;if(this.Dt)this.Ay=0;if(this.Du)this.Az=0;this.Ej=0;
this.Ek=0;this.Dt=false;this.Du=false;this.Il=this.Av;this.FH=AP.Ap;return this;
}if(BZ){this.Kk();this.Ay=(((L.Ap-this.E$)*0.001)*this.Ej)+this.Ay;this.Az=(((L.
Ap-this.Gv)*0.001)*this.Ek)+this.Az;if(this.Dt||!this.Gb)this.Ay=0;if(this.Du||!
this.Gb)this.Az=0;this.Ej=0;this.Ek=0;this.Dt=false;this.Du=false;if(!this.Gb){this.
Gb=true;(A=this.It)?A[1].call(A[0],this):null;}this.Il=this.Av;this.FH=L.Ap;}if(
!!Aj){var CH=B.aaj(Aj.Bj,Aj.BR);var Am=this.Av;Am=[this.Il[0]+CH[0],Am[1]];Am=[Am[
0],this.Il[1]+CH[1]];if(Am[0]<this.Br[0])Am=[this.Br[0]+(((Am[0]-this.Br[0])/2)|
0),Am[1]];else if(Am[0]>this.Bq[0])Am=[this.Bq[0]+(((Am[0]-this.Bq[0])/2)|0),Am[
1]];if(Am[1]<this.Br[1])Am=[Am[0],this.Br[1]+(((Am[1]-this.Br[1])/2)|0)];else if(
Am[1]>this.Bq[1])Am=[Am[0],this.Bq[1]+(((Am[1]-this.Bq[1])/2)|0)];if(!B.z8(Am,this.
Av)){this.Kv=B.aaj(Am,this.Av);this.Av=Am;(A=this.Gs)?A[1].call(A[0],this):null;
}}if((!!AP&&!AP.Down)&&((AP.Ap-this.FH)>=200)){this.Ay=0;this.Az=0;}if(BV&&((L.Ap-
this.FH)>=200)){this.Ay=0;this.Az=0;}if(!!Aj&&(Aj.Ap>this.FH)){var CH=Aj.Av;var Le=
1000/(Aj.Ap-this.FH);var EK;var EL;EK=CH[0]*Le;EL=CH[1]*Le;if((EK*this.Ay)<0)this.
Ay=0;if((EL*this.Az)<0)this.Az=0;this.Ay=(this.Ay+EK)*0.5;this.Az=(this.Az+EL)*0.5;
this.FH=Aj.Ap;}if(!AX&&!AP)return this;if(!!L&&L.BG){this.Ay=0;this.Az=0;}if((this.
Av[0]<=this.Br[0])||(this.Av[0]>=this.Bq[0]))this.Ay=0;else if(!this.Ay){var AF=
this.Av[0];var A6=this.Br[0];var A7=this.Bq[0];if(AF<A6)A7=this.Br[0];else if(AF>
A7)A6=this.Bq[0];else{A6=AF;A7=AF;}if((A6-AF)<=(AF-A7))AF=A6;else AF=A7;if(AF!==
this.Av[0]){var BT=AF-this.Av[0];if(BT>0)this.Ay=Math.sqrt((BT*2)*this.D2)+20;if(
BT<0)this.Ay=-Math.sqrt((-BT*2)*this.D2)-20;this.Ej=(400-(this.Ay*this.Ay))/(2*BT
);this.Fw=AF;}}else{var N8=this.Ay*this.Ay;var BT=N8/(2*this.D2);var AF=this.Av[
0];if(this.Ay>0)AF=AF+(BT|0);if(this.Ay<0)AF=AF-(BT|0);if(AF>this.Bq[0])AF=this.
Bq[0];else if(AF<this.Br[0])AF=this.Br[0];var Ly=AF;var A6=this.Br[0];var A7=this.
Bq[0];if(AF<A6)A7=this.Br[0];else if(AF>A7)A6=this.Bq[0];else{A6=AF;A7=AF;}if(this.
Ay>0){if(A7<=this.Av[0])AF=A6;else if((AF-A7)<(A6-AF))AF=A7;else AF=A6;}else if(
A6>=this.Av[0])AF=A7;else if((AF-A7)>(A6-AF))AF=A6;else AF=A7;if(AF!==this.Av[0]
){BT=AF-this.Av[0];if(AF!==Ly){var EN=AF-Ly;if(EN>0)this.Ay=this.Ay+Math.sqrt((EN
*2)*this.D2);if(EN<0)this.Ay=this.Ay-Math.sqrt((-EN*2)*this.D2);}if(this.Ay>0)this.
Ay=this.Ay+20;if(this.Ay<0)this.Ay=this.Ay-20;this.Ej=(400-(this.Ay*this.Ay))/(2
*BT);this.Fw=AF;}else this.Ay=0;}if((this.Av[1]<=this.Br[1])||(this.Av[1]>=this.
Bq[1]))this.Az=0;else if(!this.Az){var AG=this.Av[1];var A6=this.Br[1];var A7=this.
Bq[1];if(AG<A6)A7=this.Br[1];else if(AG>A7)A6=this.Bq[1];else{A6=AG;A7=AG;}if((A6-
AG)<=(AG-A7))AG=A6;else AG=A7;if(AG!==this.Av[1]){var BT=AG-this.Av[1];if(BT>0)this.
Az=Math.sqrt((BT*2)*this.D2)+20;if(BT<0)this.Az=-Math.sqrt((-BT*2)*this.D2)-20;this.
Ek=(400-(this.Az*this.Az))/(2*BT);this.Fx=AG;}}else{var N9=this.Az*this.Az;var BT=
N9/(2*this.D2);var AG=this.Av[1];if(this.Az>0)AG=AG+(BT|0);if(this.Az<0)AG=AG-(BT|
0);if(AG>this.Bq[1])AG=this.Bq[1];else if(AG<this.Br[1])AG=this.Br[1];var Lz=AG;
var A6=this.Br[1];var A7=this.Bq[1];if(AG<A6)A7=this.Br[1];else if(AG>A7)A6=this.
Bq[1];else{A6=AG;A7=AG;}if(this.Az>0){if(A7<=this.Av[1])AG=A6;else if((AG-A7)<(A6-
AG))AG=A7;else AG=A6;}else if(A6>=this.Av[1])AG=A7;else if((AG-A7)>(A6-AG))AG=A6;
else AG=A7;if(AG!==this.Av[1]){BT=AG-this.Av[1];if(AG!==Lz){var EN=AG-Lz;if(EN>0
)this.Az=this.Az+Math.sqrt((EN*2)*this.D2);if(EN<0)this.Az=this.Az-Math.sqrt((-EN
*2)*this.D2);}if(this.Az>0)this.Az=this.Az+20;if(this.Az<0)this.Az=this.Az-20;this.
Ek=(400-(this.Az*this.Az))/(2*BT);this.Fx=AG;}else this.Az=0;}if(!!L)this.E$=L.Ap;
if(!!AP)this.E$=AP.Ap;this.Gv=this.E$;this.Fa=this.Av[0];this.Fb=this.Av[1];this.
N_();return this;},DN:function(Ak,R,Cc,DH,DZ,Ei){var A;if(!!DH&&(DH!==this))return null;
if(this.N>=33554432)return null;if((this.N>=16777216)&&!(this.N&(4096<<R)))return null;
var Ax=B.kz(Ak,this.M);if(!((Ax[0]>=Ax[2])||(Ax[1]>=Ax[3]))){var Bl=B.zT(Ak);var
AJ=AD;if(Bl[0]<Ax[0])AJ=[Ax[0]-Bl[0],AJ[1]];if(Bl[0]>=Ax[2])AJ=[(Ax[2]-Bl[0])-1,
AJ[1]];if(Bl[1]<Ax[1])AJ=[AJ[0],Ax[1]-Bl[1]];if(Bl[1]>=Ax[3])AJ=[AJ[0],(Ax[3]-Bl[
1])-1];return B._NewObject(C.Gz,0).Initialize(this,AJ);}return null;},Kk:function(
){if(!!this.timer){B.zl([this,this.CS],this.timer,0);this.timer=null;}},N_:function(
){this.timer=B._GetAutoObject(B.abk.Fg);B.y_([this,this.CS],this.timer,0);},CS:function(
An){var A;if(!this.timer)return;var Gw=(this.timer.Ap-this.E$)*0.001;var Gx=(this.
timer.Ap-this.Gv)*0.001;var N$=Gw*Gw;var Oa=Gx*Gx;var EK=(this.Ej*Gw)+this.Ay;var
EL=(this.Ek*Gx)+this.Az;var Am=[((((this.Ej*0.5)*N$)+(this.Ay*Gw))+this.Fa)|0,((((
this.Ek*0.5)*Oa)+(this.Az*Gx))+this.Fb)|0];if(this.Dt&&(Gw>=0.5)){Am=[this.Fw,Am[
1]];this.Ay=0;this.Ej=0;this.Fa=Am[0];this.Dt=false;}else if(this.Dt){var Cj=1-Math.
pow(1-(Gw/0.5),5);Am=[(this.Fa+((this.Fw-this.Fa)*Cj))|0,Am[1]];}if(this.Du&&(Gx>=
0.5)){Am=[Am[0],this.Fx];this.Az=0;this.Ek=0;this.Fb=Am[1];this.Du=false;}else if(
this.Du){var Cj=1-Math.pow(1-(Gx/0.5),5);Am=[Am[0],(this.Fb+((this.Fx-this.Fb)*Cj
))|0];}if(((this.Ay>0)&&(EK<0))||((this.Ay<0)&&(EK>0))){EK=0;Am=[this.Av[0],Am[1
]];}if(((this.Az>0)&&(EL<0))||((this.Az<0)&&(EL>0))){EL=0;Am=[Am[0],this.Av[1]];
}if(!this.Dt&&(Am[0]<this.Br[0])){this.Fa=Am[0];this.Fw=this.Br[0];this.E$=this.
timer.Ap;this.Dt=true;}else if(!this.Dt&&(Am[0]>this.Bq[0])){this.Fa=Am[0];this.
Fw=this.Bq[0];this.E$=this.timer.Ap;this.Dt=true;}if(!this.Du&&(Am[1]<this.Br[1]
)){this.Fb=Am[1];this.Fx=this.Br[1];this.Gv=this.timer.Ap;this.Du=true;}else if(
!this.Du&&(Am[1]>this.Bq[1])){this.Fb=Am[1];this.Fx=this.Bq[1];this.Gv=this.timer.
Ap;this.Du=true;}if(((!this.Dt&&!!this.Ay)&&(EK>-20))&&(EK<20)){Am=[this.Fw,Am[1
]];this.Ay=0;this.Ej=0;this.Fa=Am[0];}if(((!this.Du&&!!this.Az)&&(EL>-20))&&(EL<
20)){Am=[Am[0],this.Fx];this.Az=0;this.Ek=0;this.Fb=Am[1];}if(!B.z8(Am,this.Av)){
this.Kv=B.aaj(Am,this.Av);this.Av=Am;(A=this.Gs)?A[1].call(A[0],this):null;}if(((
!this.Ay&&!this.Az)&&!this.Dt)&&!this.Du){this.Kk();this.Gb=false;}},Md:function(
E){if(E<0)E=0;if(E>1)E=1;if(E===this.Kx)return;this.Kx=E;if(E<(1e-007))E=1e-007;
this.D2=E*10000;},_Init:function(aArg){C.A9._Init.call(this,aArg);this.__proto__=
C.DE;this.F=0x11B;},_Mark:function(D){var A;C.A9._Mark.call(this,D);if((A=this.timer
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.It)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Gs)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::SlideTouchHandler"};C.ET={O:null,DU:null,Ec:null,FF:0,Ap:0,KU:0,Eu:148,Bi:
0,AH:0,BH:true,Down:false,Jb:false,Bd:function(aArg){var A;var AE=(C.K.isPrototypeOf(
A=this.Q)?A:null);if(!AE)throw new Error(Jz);this.O=AE.Ip;AE.Ip=this;},Bc:function(
Ai){var A;if(!!Ai&&Ai.LZ(this.Eu)){this.Down=Ai.Down;this.Bi=Ai.Bi;this.AH=Ai.AH;
this.Ap=Ai.Ap;if(Ai.Down){this.KU=this.FF;this.Jb=this.FF>0;if(!this.Jb)(A=this.
Ec)?A[1].call(A[0],this):null;this.FF=this.FF+1;return true;}if(!Ai.Down){this.Jb=
this.FF>1;this.KU=this.FF-1;this.FF=0;(A=this.DU)?A[1].call(A[0],this):null;return true;
}}return false;},_Init:function(aArg){this.__proto__=C.ET;this.Bd(aArg);B.hJ++;}
,_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.O)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.DU)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ec)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);},Q:null,_cycle:0,_observers:
null,_className:"Core::KeyPressHandler"};C.Gz={AO:null,GA:0,Av:B.vw,Initialize:function(
P,aOffset){this.AO=P;this.Av=aOffset;this.GA=(aOffset[0]*aOffset[0])+(aOffset[1]
*aOffset[1]);return this;},_Init:function(aArg){this.__proto__=C.Gz;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.AO)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Q)&&(A._cycle!=D)
)A._Mark(A._cycle=D);},Q:null,_cycle:0,_observers:null,_className:"Core::CursorHit"
};C.HQ={FC:null,Ct:B.vx,AA:B.vx,isEmpty:false,_Init:function(aArg){this.__proto__=
C.HQ;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.FC)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);},Q:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};C.HR={Hv:B.vw,Hu:B.vw,Ht:B.vw,Hs:B.vw,_Init:function(aArg
){C.HQ._Init.call(this,aArg);this.__proto__=C.HR;},_className:"Core::LayoutQuadContext"
};C.IG={AE:null,O:null,CI:null,CR:null,BP:null,FD:null,_Init:function(aArg){this.
__proto__=C.IG;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.AE)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.O)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.CI)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.CR)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.BP)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.FD)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);},Q:null,_cycle:0,_observers:null
,_className:"Core::DialogContext"};C.KV={CF:null,AB:null,Aq:null,Lf:false,Nm:function(
){if(!this.CF)return;var C$=this.CF;this.CF.C_=null;this.CF=null;B.ow([this,this.
J_],this);C$.KC(this);},NF:function(An){if(!!this.CF)return;if(!this.Aq)return;this.
CF=this.Aq;this.Aq=this.Aq.O;if(!!this.Aq)this.Aq.U=null;else this.AB=null;this.
CF.O=null;this.Lf=true;this.CF.GQ(this);this.Lf=false;},NN:function(An){B.ow([this
,this.NF],this);},NM:function(An){B.ow([this,this.NN],this);},J_:function(An){B.
ow([this,this.NM],this);},LQ:function(Be){if(!Be||!Be.C_)return;if(Be.C_!==this)
throw new Error(JA);var LH=false;if(this.CF===Be){this.CF=null;LH=true;B.ow([this
,this.J_],this);}else{if(!!Be.O)Be.O.U=Be.U;else this.AB=Be.U;if(!!Be.U)Be.U.O=Be.
O;else this.Aq=Be.O;Be.U=null;Be.O=null;}Be.C_=null;if(LH)Be.KB(this);},Mu:function(
Be,Nh){if(!Be)return;if(!!Be.C_)throw new Error(JB);Be.C_=this;if(Nh){Be.O=this.
Aq;if(!!this.Aq)this.Aq.U=Be;else this.AB=Be;this.Aq=Be;}else{Be.U=this.AB;if(!!
this.AB)this.AB.O=Be;else this.Aq=Be;this.AB=Be;}if(!this.CF)B.ow([this,this.J_]
,this);},_Init:function(aArg){this.__proto__=C.KV;B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
CF)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AB)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Aq)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Q)&&(A._cycle!=D
))A._Mark(A._cycle=D);},Q:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"
};C.GY={C_:null,U:null,O:null,KC:function(G$){},KB:function(G$){},GQ:function(G$
){this.Kt();},Fe:function(){if(!!this.C_&&(this.C_.CF===this))this.C_.Nm();},Kt:
function(){if(!!this.C_)this.C_.LQ(this);},IS:function(){return!!this.C_&&(this.
C_.CF===this);},_Init:function(aArg){this.__proto__=C.GY;B.hJ++;},_Done:function(
){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.C_)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.U)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Q)&&(A._cycle
!=D))A._Mark(A._cycle=D);},Q:null,_cycle:0,_observers:null,_className:"Core::Task"
};C.Ez={resource:null,DO:function(){this.resource=null;},Bd:function(aArg){this.
resource=aArg;},_Init:function(aArg){this.__proto__=C.Ez;this.Bd(aArg);B.hJ++;},
_Done:function(){this.DO();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);},Q:null,_cycle:
0,_observers:null,_className:"Core::Resource"};C.Timer={Fn:null,timer:null,Ap:0,
Period:1000,HG:0,BH:false,DO:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer(
);this.timer=null;},Iw:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<
0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.zk(this,
this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=
tmp;},GO:function(E){if(E<0)E=0;if(E===this.Period)return;this.Period=E;if(this.
BH)this.Iw(this.HG,E);},I5:function(E){if(E<0)E=0;if(E===this.HG)return;this.HG=
E;if(this.BH)this.Iw(E,this.Period);},BK:function(E){if(E===this.BH)return;this.
BH=E;if(E)this.Iw(this.HG,this.Period);else this.Iw(0,0);this.Ap=this.HO();},HO:
function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.vs)|0;return ticksCount;
},Trigger:function(){var A;this.Ap=this.HO();if(!this.Period)this.BK(false);(A=this.
Fn)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=C.Timer;B.hJ++;
},_Done:function(){this.DO();this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.Fn)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);},Q:null,_cycle:0,_observers:null,_className:
"Core::Timer"};C.BI={Eb:null,DD:null,Ir:function(An){var A;(A=this.Eb)?A[1].call(
A[0],this):null;},EV:function(E){if(B.z_(this.DD,E))return;if(!!this.DD)B.zn([this
,this.Ir],this.DD,0);this.DD=E;if(!!this.DD)B.za([this,this.Ir],this.DD,0);},_Init:
function(aArg){this.__proto__=C.BI;B.hJ++;},_Done:function(){this.__proto__=null;
B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Eb)&&((A=A[0]).
_cycle!=D))A._Mark(A._cycle=D);if((A=this.DD)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);},Q:null,_cycle:0,_observers:
null,_className:"Core::PropertyObserver"};C.PB={DF:0x1,Om:0x2,OQ:0x4,Pz:0x8,BH:0x10
,Po:0x20,OR:0x40,O4:0x80,OP:0x100,OX:0x200,OJ:0x400,Pb:0x800,KW:0x1000,PA:0x2000
,O8:0x4000,O9:0x8000,OC:0x10000,O7:0x20000,Pl:0x40000};C.DB={Pc:0x1,Pd:0x2,Oh:0x4
,Oi:0x8,Oj:0x10,Og:0x20};C.OT={L0:0,Pw:1,Os:2,OY:3,Pf:4,Px:5,Py:6,Ot:7,Ou:8,O0:9
,OZ:10,Ph:11,Pg:12};C.GB={L0:0,Pu:1,Left:2,Oq:3,Mw:4,LP:5,Pv:6,Right:7,Or:8};C.KeyCode={
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.Pe={PF:0x1,PC:0x2,PD:0x4,PE:0x8,O2:
0x10,OS:0x20};
C._Init=function(){C.GU.__proto__=C.AO;C.A9.__proto__=C.AO;C.K.__proto__=C.A9;C.Root.
__proto__=C.K;C.KeyEvent.__proto__=C.Event;C.FL.__proto__=C.Event;C.Dz.__proto__=
C.Event;C.FM.__proto__=C.Event;C.GS.__proto__=C.A9;C.AK.__proto__=C.K;C.AS.__proto__=
C.GU;C.Dh.__proto__=C.A9;C.DE.__proto__=C.A9;C.HR.__proto__=C.HQ;};C._ReInit=function(
){};C.Bs=function(D){};return C;})();

/* Embedded Wizard */