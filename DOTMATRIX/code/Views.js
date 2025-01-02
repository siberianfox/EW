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
);if(EmWiApp.abh)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
abh=(function(){var B=EmWiApp;var C={};
var A9=[1,1];var Bc=[0,0];var DJ=[0,0,0,0];var DK="\uFEFF";var Fy="The Slide Touch Handler:";
var E8="is already connected with a view.";var Fz="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var If="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.Bf={Ci:null,Id:1,Ic:1,Dd:0xFFFFFFFF,DX:function(Bd,aClip,aOffset,A1,aBlend){var
A;var G0=this.Ic;var G1=this.Id;var FW=B.aak(this.Ba,aOffset);var FX=B.aak(this.
Bb,aOffset);var DL;var DM;var BL=this.Dd;if(B.z8(FW,FX))return;aBlend=aBlend&&((
this.I&0x2)===0x2);A1=A1+1;DL=DM=BL;if(A1<256){DL=(DL&0x00FFFFFF)|((((A1*((DL>>24
)&0xFF))>>8)&0xFF)<<24);DM=(DM&0x00FFFFFF)|((((A1*((DM>>24)&0xFF))>>8)&0xFF)<<24
);}if((G0===1)&&(G1===1))Bd.Uc(aClip,FW,FX,DL,DM,aBlend);else Bd.Ud(aClip,FW,FX,
G0,G1,DL,DM,aBlend);},GetExtent:function(){var G0=this.Ic;var G1=this.Id;var FW=
this.Ba;var FX=this.Bb;if(((G0===1)&&(G1===1))||B.z8(FW,FX))return B.Core.JW.GetExtent.
call(this);var HF=G0/2;var HG=G1/2;var Jl=FW[0];var Jm=FW[1];var Jn=FX[0];var Jo=
FX[1];var Dw=Jn-Jl;var Dx=Jo-Jm;var Cg=Math.sqrt((Dw*Dw)+(Dx*Dx));Dw=Dw/Cg;Dx=Dx
/Cg;var SQ=Jl+(Dx*HF);var SR=Jm-(Dw*HF);var NB=Jn+(Dx*HG);var NC=Jo-(Dw*HG);var ND=
Jn-(Dx*HG);var NE=Jo+(Dw*HG);var NF=Jl-(Dx*HF);var NG=Jm+(Dw*HF);var left=SQ;var
right=SQ;var top=SR;var bottom=SR;if(NB<left)left=NB;if(ND<left)left=ND;if(NF<left
)left=NF;if(NB>right)right=NB;if(ND>right)right=ND;if(NF>right)right=NF;if(NC<top
)top=NC;if(NE<top)top=NE;if(NG<top)top=NG;if(NC>bottom)bottom=NC;if(NE>bottom)bottom=
NE;if(NG>bottom)bottom=NG;var Az=[left|0,top|0,right|0,bottom|0];Az=[].concat(Az.
slice(0,2),B.aak(Az.slice(2,4),A9));return Az;},DT:function(M){var A;if(!!this.L&&((
this.I&0x1)===0x1))this.L.AA(this.GetExtent());},Vy:function(E){var A;if(E<1)E=1;
if(E===this.Id)return;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent(
));this.Id=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent());if(((
E!==1)||(this.Ic!==1))&&!this.Ci){this.Ci=B.zW(B.abi.Kg);if(this.Ci.EW)B.y_([this
,this.DT],this.Ci,0);}if(((E===1)&&(this.Ic===1))&&!!this.Ci){if(this.Ci.EW)B.zl([
this,this.DT],this.Ci,0);this.Ci=null;}},J5:function(E){var A;if(E<1)E=1;if(E===
this.Ic)return;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent());this.
Ic=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent());if(((E!==1)||(
this.Id!==1))&&!this.Ci){this.Ci=B.zW(B.abi.Kg);if(this.Ci.EW)B.y_([this,this.DT
],this.Ci,0);}if(((E===1)&&(this.Id===1))&&!!this.Ci){if(this.Ci.EW)B.zl([this,this.
DT],this.Ci,0);this.Ci=null;}},Lu:function(E){var A;if(E<1)E=1;if((E===this.Ic)&&(
E===this.Id))return;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent()
);this.Ic=E;this.Id=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent(
));if((E!==1)&&!this.Ci){this.Ci=B.zW(B.abi.Kg);if(this.Ci.EW)B.y_([this,this.DT
],this.Ci,0);}if((E===1)&&!!this.Ci){if(this.Ci.EW)B.zl([this,this.DT],this.Ci,0
);this.Ci=null;}},AH:function(E){var A;if(E===this.Dd)return;this.Dd=E;if(!!this.
L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent());},PA:function(){var A;return((
this.I&0x1)===0x1);},U:function(E){if(E)this.Bm(0x1,0x0);else this.Bm(0x0,0x1);}
,_Init:function(aArg){B.Core.JW._Init.call(this,aArg);this.__proto__=C.Bf;},_Mark:
function(D){var A;B.Core.JW._Mark.call(this,D);if((A=this.Ci)&&(A._cycle!=D))A._Mark(
A._cycle=D);},_className:"Views::Line"};C.AB={Dd:0xFFFFFFFF,DX:function(Bd,aClip
,aOffset,A1,aBlend){var A;var Cp;var Cq;var Cn;var Co;var BL=this.Dd;aBlend=aBlend&&((
this.I&0x2)===0x2);A1=A1+1;Cp=Cq=Cn=Co=BL;if(A1<256){Cp=(Cp&0x00FFFFFF)|((((A1*((
Cp>>24)&0xFF))>>8)&0xFF)<<24);Cq=(Cq&0x00FFFFFF)|((((A1*((Cq>>24)&0xFF))>>8)&0xFF
)<<24);Cn=(Cn&0x00FFFFFF)|((((A1*((Cn>>24)&0xFF))>>8)&0xFF)<<24);Co=(Co&0x00FFFFFF
)|((((A1*((Co>>24)&0xFF))>>8)&0xFF)<<24);}Bd.MC(aClip,B.aam(this.R,aOffset),Cp,Cq
,Co,Cn,aBlend);},AH:function(E){var A;if(E===this.Dd)return;this.Dd=E;if(!!this.
L&&((this.I&0x1)===0x1))this.L.AA(this.R);},_Init:function(aArg){B.Core.B1._Init.
call(this,aArg);this.__proto__=C.AB;},_className:"Views::Rectangle"};C.MD={timer:
null,W:null,C9:-1,Dd:0xFFFFFFFF,ME:0,Bi:0,Ei:false,DX:function(Bd,aClip,aOffset,
A1,aBlend){var A;var CX=this.ME;if(this.C9>=0)CX=this.C9;if(!this.W||(CX>=this.W.
NoOfFrames))return;this.W.Update();var Cp;var Cq;var Co;var Cn;var BL=this.Dd;var
Dz=(((A1+1)*255)>>8)+1;var Az=B.aam(this.R,aOffset);aBlend=aBlend&&((this.I&0x2)===
0x2);Cp=Cq=Cn=Co=BL;if(Dz<256){Cp=(Cp&0x00FFFFFF)|((((((Cp>>24)&0xFF)*Dz)>>8)&0xFF
)<<24);Cq=(Cq&0x00FFFFFF)|((((((Cq>>24)&0xFF)*Dz)>>8)&0xFF)<<24);Co=(Co&0x00FFFFFF
)|((((((Co>>24)&0xFF)*Dz)>>8)&0xFF)<<24);Cn=(Cn&0x00FFFFFF)|((((((Cn>>24)&0xFF)*
Dz)>>8)&0xFF)<<24);}Bd.Ua(aClip,this.W,CX,Az,0x1F,Cp,Cq,Co,Cn,aBlend);},DT:function(
M){var A;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);},Dc:function(M){var
A;var CX=this.C9;var EN=0;if(!!this.W)EN=this.W.NoOfFrames*this.W.FrameDelay;if((
!!this.timer&&(this.C9<0))&&(EN>0))this.Bi=this.timer.AE-(this.ME*this.W.FrameDelay
);if(!!this.timer&&(EN>0)){var Am=(this.timer.AE-this.Bi)|0;CX=(Am/this.W.FrameDelay
)|0;if(Am>=EN){CX=CX%this.W.NoOfFrames;this.Bi=this.timer.AE-(Am%EN);}}if(((CX!==
this.C9)&&!!this.L)&&((this.I&0x1)===0x1))this.L.AA(this.R);this.C9=CX;if(!EN&&!
!this.timer){B.zl([this,this.Dc],this.timer,0);this.timer=null;}},AH:function(E){
var A;if(E===this.Dd)return;this.Dd=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(
this.R);},IP:function(E){var A;if(this.Ei===E)return;this.Ei=E;this.C9=-1;if(!E&&
!!this.timer){B.zl([this,this.Dc],this.timer,0);this.timer=null;}if(E){this.timer=
B._GetAutoObject(B.abl.HY);B.y_([this,this.Dc],this.timer,0);B.ow([this,this.Dc]
,this);}if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);},RU:function(E){var
A;if(E<0)E=0;if((E===this.ME)&&(this.C9===-1))return;this.ME=E;if(!this.timer)this.
C9=-1;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);},N:function(E){var A;
if(E===this.W)return;if(!!this.W&&this.W.EW)B.zl([this,this.DT],this.W,0);this.W=
E;this.C9=-1;if(!!E&&E.EW)B.y_([this,this.DT],E,0);if(this.Ei){this.IP(false);this.
IP(true);}if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);},_Init:function(aArg
){B.Core.B1._Init.call(this,aArg);this.__proto__=C.MD;},_Mark:function(D){var A;
B.Core.B1._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D
);if((A=this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"};
C.F={timer:null,W:null,Bi:0,C9:0,DE:0x12,Ei:false,Mu:false,DX:function(Bd,aClip,
aOffset,A1,aBlend){var A;var CX=0;if(this.C9>=0)CX=this.C9;if(!this.W||(CX>=this.
W.NoOfFrames))return;this.W.Update();var X=this.Gj();var Ct=this.W.FrameSize;if((
X[0]>=X[2])||(X[1]>=X[3]))return;var Cp;var Cq;var Co;var Cn;var Dz=(((A1+1)*255
)>>8)+1;aBlend=aBlend&&((this.I&0x2)===0x2);Cp=Cq=Cn=Co=0xFFFFFFFF;if(Dz<256){Cp=(
Cp&0x00FFFFFF)|((((255*Dz)>>8)&0xFF)<<24);Cq=(Cq&0x00FFFFFF)|((((255*Dz)>>8)&0xFF
)<<24);Co=(Co&0x00FFFFFF)|((((255*Dz)>>8)&0xFF)<<24);Cn=(Cn&0x00FFFFFF)|((((255*
Dz)>>8)&0xFF)<<24);}if(B.z8([X[2]-X[0],X[3]-X[1]],Ct))Bd.Ro(aClip,this.W,CX,B.aam(
this.R,aOffset),B.aaj(this.R.slice(0,2),X.slice(0,2)),Cp,Cq,Co,Cn,aBlend);else Bd.
VE(aClip,this.W,CX,B.aam(X,aOffset),[].concat(Bc,Ct),Cp,Cq,Co,Cn,aBlend,true);},
DT:function(M){var A;if(((this.Mu&&!!this.W)&&(this.W.FrameSize[0]>0))&&(this.W.
FrameSize[1]>0))this.H(this.Gj());if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.
R);},Dc:function(M){var A;var CX=this.C9;var EN=0;if(!!this.W)EN=this.W.NoOfFrames
*this.W.FrameDelay;if((!!this.timer&&(this.C9<0))&&(EN>0))this.Bi=this.timer.AE;
if(!!this.timer&&(EN>0)){var Am=(this.timer.AE-this.Bi)|0;CX=(Am/this.W.FrameDelay
)|0;if(Am>=EN){CX=CX%this.W.NoOfFrames;this.Bi=this.timer.AE-(Am%EN);}}if(((CX!==
this.C9)&&!!this.L)&&((this.I&0x1)===0x1))this.L.AA(this.R);this.C9=CX;if(!EN&&!
!this.timer){B.zl([this,this.Dc],this.timer,0);this.timer=null;}},Ag:function(E){
if(E===this.Mu)return;this.Mu=E;if(((E&&!!this.W)&&(this.W.FrameSize[0]>0))&&(this.
W.FrameSize[1]>0))this.H(this.Gj());},IP:function(E){var A;if(this.Ei===E)return;
this.Ei=E;this.C9=-1;if(!E&&!!this.timer){B.zl([this,this.Dc],this.timer,0);this.
timer=null;}if(E){this.timer=B._GetAutoObject(B.abl.HY);B.y_([this,this.Dc],this.
timer,0);B.ow([this,this.Dc],this);}if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(
this.R);},De:function(E){var A;if(E===this.DE)return;this.DE=E;if(!!this.L&&((this.
I&0x1)===0x1))this.L.AA(this.R);},N:function(E){var A;if(E===this.W)return;if(!!
this.W&&this.W.EW)B.zl([this,this.DT],this.W,0);this.W=E;this.C9=-1;if(!!E&&E.EW
)B.y_([this,this.DT],E,0);if(this.Ei){this.IP(false);this.IP(true);}if(((this.Mu&&
!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.H(this.Gj());if(!!this.L&&((this.
I&0x1)===0x1))this.L.AA(this.R);},U:function(E){if(E)this.Bm(0x1,0x0);else this.
Bm(0x0,0x1);},Gj:function(){var A;if(!this.W)return DJ;var An=this.DE;var Ct=this.
W.FrameSize;var Ap=this.R;var width=Ap[2]-Ap[0];var height=Ap[3]-Ap[1];if(!Ct[0]||
!Ct[1])return DJ;var AP=[0,0,width,height];var As=AP;if(((An&0x40)===0x40)){var Q9=((((
AP[2]-AP[0])<<16)+((Ct[0]/2)|0))/Ct[0])|0;var Mm=((((AP[3]-AP[1])<<16)+((Ct[1]/2
)|0))/Ct[1])|0;var HP=Q9;if(Mm>HP)HP=Mm;As=B.aaO(As,((Ct[0]*HP)+32768)>>16);As=B.
aaL(As,((Ct[1]*HP)+32768)>>16);}else if(((An&0x80)===0x80)){var Q9=((((AP[2]-AP[
0])<<16)+((Ct[0]/2)|0))/Ct[0])|0;var Mm=((((AP[3]-AP[1])<<16)+((Ct[1]/2)|0))/Ct[
1])|0;var HP=Q9;if(Mm<HP)HP=Mm;As=B.aaO(As,((Ct[0]*HP)+32768)>>16);As=B.aaL(As,((
Ct[1]*HP)+32768)>>16);}else if(!((An&0x100)===0x100))As=B.aaN(As,Ct);if((As[2]-As[
0])!==(AP[2]-AP[0])){if(((An&0x4)===0x4))As=B.aaP(As,AP[2]-(As[2]-As[0]));else if(((
An&0x2)===0x2))As=B.aaP(As,(AP[0]+(((AP[2]-AP[0])/2)|0))-(((As[2]-As[0])/2)|0));
}if((As[3]-As[1])!==(AP[3]-AP[1])){if(((An&0x20)===0x20))As=B.aaR(As,AP[3]-(As[3
]-As[1]));else if(((An&0x10)===0x10))As=B.aaR(As,(AP[1]+(((AP[3]-AP[1])/2)|0))-(((
As[3]-As[1])/2)|0));}As=B.aam(As,Ap.slice(0,2));return As;},_Init:function(aArg){
B.Core.B1._Init.call(this,aArg);this.__proto__=C.F;},_Mark:function(D){var A;B.Core.
B1._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"};C.Text={
GE:null,A5:null,J7:null,AC:B.jm,String:B.jm,C_:null,Iz:B.vw,Hh:B.vw,DE:0x12,Dd:0xFFFFFFFF
,Ja:false,G7:false,OE:false,Cx:false,Eo:function(){if(!!this.C_){this.QK(this.C_
);this.C_=null;}},DX:function(Bd,aClip,aOffset,A1,aBlend){var A;if((this.AC===B.
jm)||!this.A5)return;var An=this.DE;var font=this.A5;var AP=B.aam(this.R,aOffset
);var Cp;var Cq;var Co;var Cn;var col=this.Dd;var Dz=(((A1+1)*255)>>8)+1;var Cz=
this.AC.charCodeAt(0)||0;var X=B.aam(this.Gj(),aOffset);var GY=[AP[0]-X[0],(AP[1
]-X[1])-font.Ascent];if(Cz<1)return;Cp=Cq=Cn=Co=col;if(Dz<256){Cp=(Cp&0x00FFFFFF
)|((((((Cp>>24)&0xFF)*Dz)>>8)&0xFF)<<24);Cq=(Cq&0x00FFFFFF)|((((((Cq>>24)&0xFF)*
Dz)>>8)&0xFF)<<24);Co=(Co&0x00FFFFFF)|((((((Co>>24)&0xFF)*Dz)>>8)&0xFF)<<24);Cn=(
Cn&0x00FFFFFF)|((((((Cn>>24)&0xFF)*Dz)>>8)&0xFF)<<24);}if(((An&0x80)===0x80)){if(
this.K8())An=(An&~0x80)|0x4;else An=(An&~0x80)|0x1;}if((Cz===1)&&!((An&0x40)===0x40
)){Bd.Rr(aClip,font,this.AC,2,(this.AC.charCodeAt(1)||0)-1,AP,GY,0,0,Cp,Cq,Co,Cn
,true);return;}var leading=font.Leading;var HO=(font.Ascent+font.Descent)+leading;
var Zb=aClip[1]-X[1];var Zc=aClip[3]-X[1];var Qx=X[2]-X[0];var y=0;var i=1;var BL=
this.AC.charCodeAt(1)||0;while(((y+HO)<Zb)&&(BL>0)){i=i+BL;y=y+HO;BL=this.AC.charCodeAt(
i)||0;}while((y<Zc)&&(BL>0)){var Ju=B.aaj(GY,[0,y]);var Iv=0;var Dg=false;if(((((
An&0x40)===0x40)&&((this.AC.charCodeAt((i+BL)-1)||0)!==0x0A))&&((this.AC.charCodeAt(
i+1)||0)!==0x0A))&&((this.AC.charCodeAt(i+BL)||0)!==0x00))Dg=true;if(Dg&&!!(An&0x6
)){var Oa=i+BL;var SO=this.AC.indexOf(String.fromCharCode(0x20),i+1);var SP=this.
AC.indexOf(String.fromCharCode(0xA0),i+1);if(((SO<0)||(SO>=Oa))&&((SP<0)||(SP>=Oa
)))Dg=false;}if(Dg)Iv=Qx;else if(((An&0x4)===0x4))Ju=[(Ju[0]-Qx)+font.G8(this.AC
,i+1,BL-1),Ju[1]];else if(((An&0x2)===0x2))Ju=[(Ju[0]-((Qx/2)|0))+((font.G8(this.
AC,i+1,BL-1)/2)|0),Ju[1]];Bd.Rr(aClip,font,this.AC,i+1,BL-1,AP,Ju,Iv,0,Cp,Cq,Co,
Cn,true);i=i+BL;y=y+HO;BL=this.AC.charCodeAt(i)||0;}},H:function(E){var A;if(B.z9(
E,this.R))return;var TU;TU=((A=this.R)[2]-A[0])!==(E[2]-E[0]);if(((TU&&this.Ja)&&
this.Cx)&&!((this.I&0x2000)===0x2000)){this.AC=B.jm;this.Cx=false;B.ow([this,this.
Iq],this);}if(((this.G7&&this.Cx)&&!B.z8([(A=this.R)[2]-A[0],A[3]-A[1]],[E[2]-E[
0],E[3]-E[1]]))&&!((this.I&0x2000)===0x2000)){this.AC=B.jm;this.Cx=false;B.ow([this
,this.Iq],this);}B.Core.B1.H.call(this,E);B.ow([this,this.N8],this);},Y8:function(
aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=B.ze(aBidi,aRowStart
,aRowEnd,aIndex);return aIndex;},Y7:function(aBidi,aRowStart,aRowEnd,aIndex){if(
!aBidi)return aIndex;aIndex=B.zd(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;}
,QK:function(aBidi){if(!aBidi)return;B.qU(aBidi);},Ze:function(aSize){var bidi=null;
bidi=B.vj(aSize);return bidi;},N8:function(M){B.ow(this.J7,this);},Iq:function(M
){B.ow([this,this.HN],this);},Aab:function(M){this.J3(this.GE.AN);},Aac:function(
M){var A;var X=this.Gj();var N7=this.R.slice(0,2);if(X[0]>N7[0])X=[].concat(N7[0
],X.slice(1,4));if(X[1]>N7[1])X=B.aaS(X,N7[1]);var Bl=B.aaj(X.slice(0,2),this.R.
slice(0,2));var Js=B.aaj([(A=this.R)[2]-A[0],A[3]-A[1]],[X[2]-X[0],X[3]-X[1]]);if(
Js[0]>0)Js=[0,Js[1]];if(Js[1]>0)Js=[Js[0],0];this.GE.AN=this.Hh;this.GE.B$=B.aaj(
B.aak(this.Hh,Js),Bl);this.GE.B_=B.aaj(this.Hh,Bl);},HN:function(M){var A;if(this.
Cx)return;var width=(A=this.R)[2]-A[0];var height=(A=this.R)[3]-A[1];var GX=-1;var
font=this.A5;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Ja){
GX=width;if(GX<0)GX=1;}if(!!this.C_){this.QK(this.C_);this.C_=null;}this.Cx=true;
if((this.String!==B.jm)&&!!font){var length=this.String.length;if(this.OE)this.C_=
this.Ze(length);this.AC=font.VA(this.String,0,GX,length,this.C_);if(!!this.C_&&!
this.Ui()){this.QK(this.C_);this.C_=null;}}else this.AC=B.jm;this.Iz=Bc;if((this.
G7&&(this.AC!==B.jm))&&!!font){var An=this.DE;var leading=font.Leading;var BP=this.
AC;var Od=this.K8();if(((An&0x80)===0x80)){if(Od)An=(An&~0x80)|0x4;else An=(An&~
0x80)|0x1;}var N$=(font.Ascent+font.Descent)+leading;var Cz=BP.charCodeAt(0)||0;
var Il=((height+leading)/N$)|0;var QA=false;var NH=false;if(Il<=0)Il=1;if(Cz>Il){
var Be=0;var Ml=0;var Ob=Cz-1;var Cr;var CZ=BP.length;var tmp=B.jm;if(!!(An&0x110
)&&!!(An&0x28))An&=~0x110;if(!!(An&0x110))An&=~0x28;if(((An&0x20)===0x20))Ml=Cz-
Il;else if(((An&0x10)===0x10)||((An&0x100)===0x100)){Ml=((Cz-Il)/2)|0;Ob=(Ml+Il)-
1;}else Ob=Il-1;QA=Ml>0;NH=Ob<(Cz-1);for(Cr=1;Be<Ml;Be=Be+1)Cr=Cr+(BP.charCodeAt(
Cr)||0);if(NH)for(CZ=Cr;Be<Ob;Be=Be+1)CZ=CZ+(BP.charCodeAt(CZ)||0);if(QA){var Cg=
BP.charCodeAt(Cr)||0;tmp=(DK+B.aaY(BP,Cr,Cg))+DK;tmp=B.aaT(tmp,0,(Cg+2)&0xFFFF);
Cr=Cr+Cg;if((tmp.charCodeAt(Cg)||0)===0x0A){tmp=B.aaT(tmp,Cg,0xFEFF);tmp=B.aaT(tmp
,Cg+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.aaT(tmp,2,0xFEFF);tmp=B.aaT(
tmp,1,0x0A);}else tmp=B.aaT(tmp,1,0xFEFF);}tmp=tmp+B.aaY(BP,Cr,CZ-Cr);if(NH&&(CZ>=
Cr)){var Cg=BP.charCodeAt(CZ)||0;var DD=(DK+B.aaY(BP,CZ,Cg))+DK;DD=B.aaT(DD,0,(Cg+
2)&0xFFFF);DD=B.aaT(DD,1,0xFEFF);if((DD.charCodeAt(Cg)||0)===0x0A){DD=B.aaT(DD,Cg
,0xFEFF);DD=B.aaT(DD,Cg+1,0x0A);}if((DD.charCodeAt(2)||0)===0x0A){DD=B.aaT(DD,2,
0xFEFF);DD=B.aaT(DD,1,0x0A);}else DD=B.aaT(DD,1,0xFEFF);tmp=tmp+DD;}BP=String.fromCharCode(
Il&0xFFFF)+tmp;}var Be=0;var Ak=1;var QT=width;Cz=BP.charCodeAt(0)||0;for(;Be<Cz;
Be=Be+1){var It=QA&&!Be;var Iu=NH&&(Be===(Cz-1));var EE=false;var EF=false;var KI=
Od;if((Od&&It)&&!Iu){It=false;Iu=true;}else if((Od&&Iu)&&!It){Iu=false;It=true;}
var EO=Ak+1;var Cg=BP.charCodeAt(Ak)||0;var Cr=EO;var CZ=(EO+Cg)-2;var QQ=-1;var
QR=-1;if(!this.Ja&&(font.G8(BP,EO,Cg-1)>QT)){var Je=An;if(((Je&0x2)===0x2)&&!!(Je&
0x5))Je&=~0x2;if(((Je&0x2)===0x2))Je&=~0x5;if(((Je&0x4)===0x4))EE=true;else if(((
Je&0x2)===0x2)){EE=true;EF=true;}else EF=true;}if((BP.charCodeAt(Cr)||0)===0x0A)
Cr=Cr+1;if((BP.charCodeAt(CZ)||0)===0x0A)CZ=CZ-1;while(EE&&((BP.charCodeAt(Cr)||
0)===0xFEFF))Cr=Cr+1;while(EF&&((BP.charCodeAt(CZ)||0)===0xFEFF))CZ=CZ-1;EE=EE&&
!Iu;EF=EF&&!It;while((((EE||EF)||It)||Iu)&&(Cr<CZ)){if((EE&&(KI||!EF))||It){if(QQ>
0)BP=B.aaT(BP,QQ,0xFEFF);BP=B.aaT(BP,Cr,0x2026);QQ=Cr;Cr=Cr+1;KI=!KI;It=false;if(
font.G8(BP,EO,Cg-1)<=QT){EE=false;EF=false;}else EE=EE||!EF;}if((EF&&(!KI||!EE))||
Iu){if(QR>0)BP=B.aaT(BP,QR,0xFEFF);BP=B.aaT(BP,CZ,0x2026);QR=CZ;CZ=CZ-1;KI=!KI;Iu=
false;if(font.G8(BP,EO,Cg-1)<=QT){EE=false;EF=false;}else EF=EF||!EE;}}Ak=Ak+Cg;
}this.Iz=[font.Ru(BP),((BP.charCodeAt(0)||0)*N$)-leading];this.AC=BP;}if(!!this.
L&&((this.I&0x1)===0x1))this.L.AA(this.R);B.ow([this,this.N8],this);},RT:function(
E){if(E===this.OE)return;this.OE=E;this.AC=B.jm;this.Cx=false;B.ow([this,this.Iq
],this);},RS:function(E){if(E===this.G7)return;this.G7=E;if((this.Ja||E)||!!this.
J7)this.I=this.I&~0x100;else this.I=this.I|0x100;this.AC=B.jm;this.Cx=false;B.ow([
this,this.Iq],this);},Vw:function(E){if(B.z$(E,this.J7))return;this.J7=E;if((this.
Ja||!!E)||this.G7)this.I=this.I&~0x100;else this.I=this.I|0x100;},Vx:function(E){
if(E===this.GE)return;if(!!E&&!!E.KH){B.aa8("%s%*%s",Fy,E,E8);throw new Error(Fz
);}if(!!this.GE){this.GE.N9=null;this.GE.KH=null;}this.GE=E;if(!!E){E.N9=[this,this.
Aac];E.KH=[this,this.Aab];}},PN:function(E){if(E===this.Ja)return;this.Ja=E;if(this.
Cx){this.AC=B.jm;this.Cx=false;B.ow([this,this.Iq],this);}if((E||this.G7)||!!this.
J7)this.I=this.I&~0x100;else this.I=this.I|0x100;},J3:function(E){var A;if(B.z8(
E,this.Hh))return;this.Hh=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);
if(this.Cx)B.ow([this,this.N8],this);},De:function(E){var A;if(E===this.DE)return;
this.DE=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);if(this.G7){this.AC=
B.jm;this.Cx=false;B.ow([this,this.Iq],this);}if(this.Cx)B.ow([this,this.N8],this
);},Ah:function(E){if(E===this.String)return;this.String=E;this.AC=B.jm;this.Cx=
false;B.ow([this,this.Iq],this);},Bq:function(E){if(E===this.A5)return;this.A5=E;
this.AC=B.jm;this.Cx=false;B.ow([this,this.Iq],this);},AH:function(E){var A;if(E===
this.Dd)return;this.Dd=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);},K8:
function(){if(!this.Cx)this.HN(this);if(!this.C_)return false;var result=false;var
bidi=this.C_;result=B.vi(bidi);return result;},Ui:function(){if(!this.Cx)this.HN(
this);if(!this.C_)return false;var result=false;var bidi=this.C_;result=B.zc(bidi
);return result;},R4:function(aIndex){if(((this.String===B.jm)||!this.A5)||this.
G7)return Bc;if(!this.Cx)this.HN(this);if(aIndex<0)aIndex=0;var Zn=(this.AC.charCodeAt(
0)||0)-1;var CB=this.AC.charCodeAt(1)||0;var Ak=1;var HQ=2;var Be=0;var col=-1;var
GQ=true;aIndex=aIndex+2;while((Be<Zn)&&((Ak+CB)<=aIndex)){Ak=Ak+CB;Be=Be+1;HQ=HQ+
1;aIndex=aIndex+1;CB=this.AC.charCodeAt(Ak)||0;}if(aIndex>(Ak+CB))aIndex=Ak+CB;if(
!!this.C_)aIndex=(Ak+this.Y7(this.C_,(Ak+1)-HQ,(Ak+CB)-HQ,(aIndex-Ak)-1))+1;for(;
aIndex>Ak;Ak=Ak+1){var Bh=this.AC.charCodeAt(Ak+1)||0;if(GQ)col=col+1;GQ=(Bh!==0xFEFF
)&&(Bh!==0x0A);}return[col,Be];},LA:function(LO){if(((this.String===B.jm)||!this.
A5)||this.G7)return 0;if(!this.Cx)this.HN(this);var Be=LO[1];var col=LO[0];var Ak=
1;var HQ=2;var Cz=this.AC.charCodeAt(0)||0;var CB=this.AC.charCodeAt(1)||0;if(Be>=
Cz){Be=Cz-1;col=this.AC.length;}if(Be<0){Be=0;col=0;}if(col<0)col=0;while((Be>0)&&(
CB>0)){Ak=Ak+CB;Be=Be-1;HQ=HQ+1;CB=this.AC.charCodeAt(Ak)||0;}var EJ=Ak;var Oc=(
Ak-HQ)+1;var Oa=(Oc+CB)-1;var Mi=false;while((col>=0)&&(CB>1)){var Bh=this.AC.charCodeAt(
Ak+1)||0;Ak=Ak+1;CB=CB-1;Mi=(Bh===0xFEFF)||(Bh===0x0A);if(!Mi){col=col-1;EJ=Ak;}
}if((!Mi&&(col>=0))&&((this.AC.charCodeAt(Ak+1)||0)===0x00))Mi=true;if(Mi)EJ=EJ+
1;EJ=EJ-HQ;if(!!this.C_)EJ=Oc+this.Y8(this.C_,Oc,Oa,EJ-Oc);return EJ;},M_:function(
CW){var A;if((this.String===B.jm)||!this.A5)return Bc;if(!this.Cx)this.HN(this);
var X=this.Gj();if((X[0]>=X[2])||(X[1]>=X[3]))return Bc;var font=this.A5;var An=
this.DE;var Cz=this.AC.charCodeAt(0)||0;var leading=font.Leading;if(CW[1]<X[1])CW=[
CW[0],X[1]];if(CW[1]>=X[3])CW=[CW[0],X[3]-1];var HO=(font.Ascent+font.Descent)+leading;
var Be=((CW[1]-X[1])/HO)|0;var C1=this.OU(Be);var CB=C1.length;var Dg=false;if(((
An&0x80)===0x80)){if(this.K8())An=(An&~0x80)|0x4;else An=(An&~0x80)|0x1;}if(((An&
0x40)===0x40)&&(Be<(Cz-1)))Dg=true;if((Dg&&(C1.indexOf(String.fromCharCode(0x20)
,0)<0))&&(C1.indexOf(String.fromCharCode(0xA0),0)<0))Dg=false;if(Dg){var Ak=1;var
JJ=Be;while(JJ>0){Ak=Ak+(this.AC.charCodeAt(Ak)||0);JJ=JJ-1;}if(((this.AC.charCodeAt(
Ak+1)||0)===0x0A)||((this.AC.charCodeAt((Ak+(this.AC.charCodeAt(Ak)||0))-1)||0)===
0x0A))Dg=false;}var Iv=0;var x=0;if(Dg)Iv=X[2]-X[0];else if(((An&0x4)===0x4))x=(
X[2]-X[0])-font.G8(C1,0,CB);else if(((An&0x2)===0x2))x=(((X[2]-X[0])/2)|0)-((font.
G8(C1,0,CB)/2)|0);var col=font.Uf(C1,0,CB,(CW[0]-X[0])-x,Iv);if(col<0)col=0;return[
col,Be];},PY:function(LO){var A;if((this.String===B.jm)||!this.A5)return Bc;if(!
this.Cx)this.HN(this);var Cz=this.AC.charCodeAt(0)||0;var font=this.A5;var An=this.
DE;var Be=LO[1];var col=LO[0];if(Be>=Cz){Be=Cz-1;col=this.AC.length;}if(Be<0){Be=
0;col=0;}var C1=this.OU(Be);var CB=C1.length;var X=this.Gj();var Dg=false;var leading=
font.Leading;if(((An&0x80)===0x80)){if(this.K8())An=(An&~0x80)|0x4;else An=(An&~
0x80)|0x1;}if(((An&0x40)===0x40)&&(Be<(Cz-1)))Dg=true;if((Dg&&(C1.indexOf(String.
fromCharCode(0x20),0)<0))&&(C1.indexOf(String.fromCharCode(0xA0),0)<0))Dg=false;
if(Dg){var Ak=1;var JJ=Be;while(JJ>0){Ak=Ak+(this.AC.charCodeAt(Ak)||0);JJ=JJ-1;
}if(((this.AC.charCodeAt(Ak+1)||0)===0x0A)||((this.AC.charCodeAt((Ak+(this.AC.charCodeAt(
Ak)||0))-1)||0)===0x0A))Dg=false;}var y=(X[1]+(Be*((font.Ascent+font.Descent)+leading
)))+font.Ascent;var Iv=0;var x=X[0];if(Dg)Iv=X[2]-X[0];else if(((An&0x4)===0x4))
x=X[2]-font.G8(C1,0,CB);else if(((An&0x2)===0x2))x=(x+(((X[2]-X[0])/2)|0))-((font.
G8(C1,0,CB)/2)|0);var pos=font.Ue(C1,0,CB,col,Iv);if(pos<0)pos=0;return[x+pos,y];
},OU:function(LN){if((this.String===B.jm)||!this.A5)return B.jm;if(!this.Cx)this.
HN(this);var Cz=this.AC.charCodeAt(0)||0;var Ak=1;if((!this.A5||(LN<0))||(LN>=Cz
))return B.jm;while(LN>0){Ak=Ak+(this.AC.charCodeAt(Ak)||0);LN=LN-1;}var EO=Ak;var
Kz=Ak+(this.AC.charCodeAt(Ak)||0);var Bh=0x00;do{EO=EO+1;Bh=this.AC.charCodeAt(EO
)||0;}while(((Bh===0xFEFF)||(Bh===0x0A))&&(EO<=Kz));do{Kz=Kz-1;Bh=this.AC.charCodeAt(
Kz)||0;}while(((Bh===0xFEFF)||(Bh===0x0A))&&(EO<=Kz));var C1=B.aaY(this.AC,EO,(Kz-
EO)+1);var Jp;for(Jp=C1.indexOf(String.fromCharCode(0xFEFF),0);Jp>=0;Jp=C1.indexOf(
String.fromCharCode(0xFEFF),Jp+1)){var EJ=Jp+1;while((C1.charCodeAt(EJ)||0)===0xFEFF
)EJ=EJ+1;C1=B.aa3(C1,Jp,EJ-Jp);}return C1;},Gj:function(){var A;if((this.String===
B.jm)||!this.A5)return DJ;if(!this.Cx)this.HN(this);if(this.AC===B.jm)return DJ;
var leading=this.A5.Leading;var N$=(this.A5.Ascent+this.A5.Descent)+this.A5.Leading;
if(B.z8(this.Iz,Bc))this.Iz=[this.A5.Ru(this.AC),this.Iz[1]];this.Iz=[this.Iz[0]
,((this.AC.charCodeAt(0)||0)*N$)-leading];var An=this.DE;var Ap=this.R;var width=
Ap[2]-Ap[0];var height=Ap[3]-Ap[1];var AP=[0,0,width,height];var As=[].concat(AP.
slice(0,2),B.aak(AP.slice(0,2),this.Iz));if(((An&0x80)===0x80)){if(this.K8())An=(
An&~0x80)|0x4;else An=(An&~0x80)|0x1;}if(((An&0x40)===0x40)){var GX;GX=width;if(
GX<0)GX=0;if(GX>(As[2]-As[0]))As=B.aaO(As,GX);}if((!!(An&0x110)&&!!(An&0x28))&&((
As[3]-As[1])>(AP[3]-AP[1])))An&=~0x110;if(!!(An&0x110))An&=~0x28;if((((An&0x2)===
0x2)&&!!(An&0x5))&&((As[2]-As[0])>(AP[2]-AP[0])))An&=~0x2;if(((An&0x2)===0x2))An&=
~0x5;if((As[2]-As[0])!==(AP[2]-AP[0])){if(((An&0x4)===0x4))As=B.aaP(As,AP[2]-(As[
2]-As[0]));else if(((An&0x2)===0x2))As=B.aaP(As,(AP[0]+(((AP[2]-AP[0])/2)|0))-(((
As[2]-As[0])/2)|0));}if((As[3]-As[1])!==(AP[3]-AP[1])){if(((An&0x20)===0x20))As=
B.aaR(As,AP[3]-(As[3]-As[1]));else if(((An&0x100)===0x100))As=B.aaR(As,((AP[1]+(((
AP[3]-AP[1])/2)|0))-(((As[3]-As[1])/2)|0))+(((this.A5.Descent-this.A5.Ascent)/2)|
0));else if(((An&0x10)===0x10))As=B.aaR(As,(AP[1]+(((AP[3]-AP[1])/2)|0))-(((As[3
]-As[1])/2)|0));}As=B.aam(As,Ap.slice(0,2));return B.aam(As,this.Hh);},_Init:function(
aArg){B.Core.B1._Init.call(this,aArg);this.__proto__=C.Text;},_Done:function(){this.
Eo();this.__proto__=B.Core.B1;B.Core.B1._Done.call(this);},_Mark:function(D){var
A;B.Core.B1._Mark.call(this,D);if((A=this.GE)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.A5)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J7)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::Text"};C.H$={Ih:B.vw,AU:B.aan(4,3,
0,null),IV:B.vx,Ef:0,Jv:0,PR:true,Gt:function(E){if(B.z8(E,this.Cl))return;B.Core.
Fs.Gt.call(this,E);this.AU.Set(3,0,E[0]);this.AU.Set(3,1,E[1]);this.AU.Set(3,2,1
);this.Ef=0x45;B.ow([this,this.Ko],this);},Fr:function(E){if(B.z8(E,this.CF))return;
B.Core.Fs.Fr.call(this,E);this.AU.Set(2,0,E[0]);this.AU.Set(2,1,E[1]);this.AU.Set(
2,2,1);this.Ef=0x45;B.ow([this,this.Ko],this);},BJ:function(E){if(B.z8(E,this.Bb
))return;B.Core.Fs.BJ.call(this,E);this.AU.Set(1,0,E[0]);this.AU.Set(1,1,E[1]);this.
AU.Set(1,2,1);this.Ef=0x45;B.ow([this,this.Ko],this);},BT:function(E){if(B.z8(E,
this.Ba))return;B.Core.Fs.BT.call(this,E);this.AU.Set(0,0,E[0]);this.AU.Set(0,1,
E[1]);this.AU.Set(0,2,1);this.Ef=0x45;B.ow([this,this.Ko],this);},Y$:function(){
return;},Rb:function(M){var A;if(this.Ef===0x00)return;if(this.Ef===0x45){var Ch=
B._NewObject(B.Graphics.R9,0);Ch=Ch.T_(this.AU.Get(0,0),this.AU.Get(0,1),this.AU.
Get(1,0),this.AU.Get(1,1),this.AU.Get(2,0),this.AU.Get(2,1),this.AU.Get(3,0),this.
AU.Get(3,1));if(!!Ch){Ch.Mw(0,0);this.AU.Set(0,2,Ch.LF*240);Ch.Mw(1,0);this.AU.Set(
1,2,Ch.LF*240);Ch.Mw(1,1);this.AU.Set(2,2,Ch.LF*240);Ch.Mw(0,1);this.AU.Set(3,2,
Ch.LF*240);}this.Y$();}this.Jv=this.Ef;this.Ef=0x00;if(!!this.L&&((this.I&0x1)===
0x1))this.L.AA(this.GetExtent());},Ko:function(D8){this.Rb(D8);},RW:function(E){
var A;if(E===this.PR)return;this.PR=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(
this.GetExtent());},RY:function(E){var A;if(B.z9(E,this.IV))return;this.IV=E;if((((
this.Jv===0x45)&&(this.Ef===0x00))&&!!this.L)&&((this.I&0x1)===0x1))this.L.AA(this.
GetExtent());if((this.Jv!==0x45)&&(this.Ef===0x00)){this.Ef=this.Jv;B.ow([this,this.
Ko],this);}},_Init:function(aArg){B.Core.Fs._Init.call(this,aArg);(this.AU=[]).__proto__=
C.H$.AU;this.__proto__=C.H$;this.I=0x3;},_className:"Views::WarpView"};C.DI={A7:
null,bitmap:null,O:null,SX:1,SY:0,SZ:0,S0:0,S1:1,S2:0,S3:0,S4:0,S5:1,Hc:255,QP:false
,DX:function(Bd,aClip,aOffset,A1,aBlend){var A;if(!this.bitmap)return;this.bitmap.
Update();var Fe=aOffset[0];var Ff=aOffset[1];var X=B.z6(this.IV,[].concat(Bc,this.
Ih));aBlend=aBlend&&((this.I&0x2)===0x2);A1=A1+1;var S_;var S$;var Ta;var Tb;var
Zq=this.Hc;S_=S$=Ta=Tb=Zq;var DL=255|(255<<8)|(255<<16)|((((A1*S_)>>8)&0xFF)<<24
);var DM=255|(255<<8)|(255<<16)|((((A1*S$)>>8)&0xFF)<<24);var Y9=255|(255<<8)|(255<<
16)|((((A1*Ta)>>8)&0xFF)<<24);var Y_=255|(255<<8)|(255<<16)|((((A1*Tb)>>8)&0xFF)<<
24);aClip=B.z6(aClip,B.aam(DJ,aOffset));Bd.VH(aClip,this.bitmap,0,this.AU.Get(0,
0)+Fe,this.AU.Get(0,1)+Ff,this.AU.Get(0,2),this.AU.Get(1,0)+Fe,this.AU.Get(1,1)+
Ff,this.AU.Get(1,2),this.AU.Get(2,0)+Fe,this.AU.Get(2,1)+Ff,this.AU.Get(2,2),this.
AU.Get(3,0)+Fe,this.AU.Get(3,1)+Ff,this.AU.Get(3,2),X,DL,DM,Y9,Y_,aBlend,this.PR
);},BI:function(AF){if(!this.O||!this.A7)return null;var Ab=(B.Core.Gf.isPrototypeOf(
AF)?AF:null);var AJ=(B.Core.JR.isPrototypeOf(AF)?AF:null);if(!Ab&&!AJ)return null;
var Bl=Bc;var Ar=this.A7.L;while(!!Ar&&(Ar!==this.O)){Bl=B.aaj(Bl,Ar.R.slice(0,2
));Ar=Ar.L;}var P=this.A7;if(!!Ab&&!Ab.Down)this.A7=null;if(!!Ab){Ab.BU=B.aak(this.
KE(Ab.BU),Bl);Ab.C3=B.aak(this.KE(Ab.C3),Bl);return P.BI(Ab);}if(!!AJ){var Zt=B.
aak(this.KE(B.aaj(AJ.BU,AJ.AN)),Bl);AJ.BU=B.aak(this.KE(AJ.BU),Bl);AJ.C3=B.aak(this.
KE(AJ.C3),Bl);AJ.AN=B.aaj(AJ.BU,Zt);return P.BI(AJ);}return C.H$.BI.call(this,AF
);},Fl:function(Ay,Ac,C8,FA,FE,FD){var A;if(!this.O||!((this.O.I&0x18)===0x18))return null;
var pos=B.zT(Ay);pos=this.KE(pos);var Eg=B.z6(this.IV,[].concat(Bc,this.Ih));if(
!B.vt(Eg,pos))return null;var B6=this.O.Fl(B.aam(B.aam([0,0,Ay[2]-Ay[0],Ay[3]-Ay[
1]],pos),this.O.R.slice(0,2)),Ac,C8,FA,null,FD);if(!!B6)this.A7=B6.Cu;else this.
A7=null;if(!!this.A7)return B._NewObject(B.Core.KT,0).Initialize(this,Bc);return null;
},Rb:function(M){C.H$.Rb.call(this,M);this.QP=false;},Aav:function(){var x1=this.
AU.Get(0,0);var y1=this.AU.Get(0,1);var x2=this.AU.Get(1,0);var y2=this.AU.Get(1
,1);var x3=this.AU.Get(2,0);var y3=this.AU.Get(2,1);var x4=this.AU.Get(3,0);var y4=
this.AU.Get(3,1);var LT=x2-x3;var LV=y2-y3;var LU=x4-x3;var LW=y4-y3;var Mn=((x1-
x2)+x3)-x4;var Mo=((y1-y2)+y3)-y4;var Jh=(LT*LW)-(LV*LU);if(!Jh)return;var KB=((
Mn*LW)-(Mo*LU))/Jh;var h=((LT*Mo)-(LV*Mn))/Jh;var Nq=(x2-x1)+(KB*x2);var NA=(x4-
x1)+(h*x4);var BL=x1;var NJ=(y2-y1)+(KB*y2);var FO=(y4-y1)+(h*y4);var Ik=y1;this.
SX=FO-(Ik*h);this.SY=(BL*h)-NA;this.SZ=(NA*Ik)-(BL*FO);this.S0=(Ik*KB)-NJ;this.S1=
Nq-(BL*KB);this.S2=(BL*NJ)-(Nq*Ik);this.S3=(NJ*h)-(FO*KB);this.S4=(NA*KB)-(Nq*h);
this.S5=(Nq*FO)-(NA*NJ);this.QP=true;},KE:function(Cc){var A;if(!this.QP)this.Aav(
);var Rh=Cc[0];var Ri=Cc[1];var Mr=((Rh*this.SX)+(Ri*this.SY))+this.SZ;var Ms=((
Rh*this.S0)+(Ri*this.S1))+this.S2;var Q8=((Rh*this.S3)+(Ri*this.S4))+this.S5;if(
!!Q8){Mr=Mr/Q8;Ms=Ms/Q8;}var Eg=B.z6(this.IV,[].concat(Bc,this.Ih));Mr=Mr*(Eg[2]-
Eg[0]);Ms=Ms*(Eg[3]-Eg[1]);return B.aak([Mr|0,Ms|0],Eg.slice(0,2));},DT:function(
M){var A;var Tc=this.Ih;if(!!this.O)this.bitmap=this.O.BK;else this.bitmap=null;
if(!!this.bitmap)this.Ih=this.bitmap.FrameSize;else this.Ih=Bc;if(((B.z8(Tc,this.
Ih)||((this.Jv===0x45)&&(this.Ef===0x00)))&&!!this.L)&&((this.I&0x1)===0x1))this.
L.AA(this.GetExtent());if(((this.Jv!==0x45)&&(this.Ef===0x00))&&!B.z8(Tc,this.Ih
)){this.Ef=this.Jv;B.ow([this,this.Ko],this);}},Lr:function(E){var A;if(E===this.
Hc)return;this.Hc=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent()
);},RV:function(E){if(E===this.O)return;if(!!E&&(E===this.L))throw new Error(If);
if(!!this.O){B.zl([this,this.DT],this.O,0);this.bitmap=null;}this.O=E;if(!!E){B.
y_([this,this.DT],E,0);this.bitmap=E.BK;}this.DT(this);},_Init:function(aArg){C.
H$._Init.call(this,aArg);this.__proto__=C.DI;},_Mark:function(D){var A;C.H$._Mark.
call(this,D);if((A=this.A7)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.bitmap
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(A._cycle=
D);},_className:"Views::WarpGroup"};C.Aa2={T4:0x1,T3:0x2,T5:0x4,T8:0x8,T7:0x10,T6:
0x20,Abt:0x40,Abu:0x80,AbA:0x100};C.AbI={T4:0x1,T3:0x2,T5:0x4,T8:0x8,T7:0x10,T6:
0x20,AaB:0x40,AaA:0x80,AaG:0x100};C.Abc={Abb:0,Abr:1,Abp:2,Abq:3};
C._Init=function(){C.Bf.__proto__=B.Core.JW;C.AB.__proto__=B.Core.B1;C.MD.__proto__=
B.Core.B1;C.F.__proto__=B.Core.B1;C.Text.__proto__=B.Core.B1;C.H$.__proto__=B.Core.
Fs;C.DI.__proto__=C.H$;};C._ReInit=function(){};C.C7=function(D){};return C;})();

/* Embedded Wizard */