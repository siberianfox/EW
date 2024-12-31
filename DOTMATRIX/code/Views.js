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
var A9=[1,1];var Bc=[0,0];var DK=[0,0,0,0];var DL="\uFEFF";var FA="The Slide Touch Handler:";
var E9="is already connected with a view.";var FB="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Ig="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.Bf={Ci:null,Ie:1,Id:1,Df:0xFFFFFFFF,DY:function(Bd,aClip,aOffset,A1,aBlend){var
A;var G1=this.Id;var G2=this.Ie;var FY=B.aak(this.Ba,aOffset);var FZ=B.aak(this.
Bb,aOffset);var DM;var DN;var BL=this.Df;if(B.z8(FY,FZ))return;aBlend=aBlend&&((
this.I&0x2)===0x2);A1=A1+1;DM=DN=BL;if(A1<256){DM=(DM&0x00FFFFFF)|((((A1*((DM>>24
)&0xFF))>>8)&0xFF)<<24);DN=(DN&0x00FFFFFF)|((((A1*((DN>>24)&0xFF))>>8)&0xFF)<<24
);}if((G1===1)&&(G2===1))Bd.Ue(aClip,FY,FZ,DM,DN,aBlend);else Bd.Uf(aClip,FY,FZ,
G1,G2,DM,DN,aBlend);},GetExtent:function(){var G1=this.Id;var G2=this.Ie;var FY=
this.Ba;var FZ=this.Bb;if(((G1===1)&&(G2===1))||B.z8(FY,FZ))return B.Core.JX.GetExtent.
call(this);var HG=G1/2;var HH=G2/2;var Jm=FY[0];var Jn=FY[1];var Jo=FZ[0];var Jp=
FZ[1];var Dx=Jo-Jm;var Dy=Jp-Jn;var Cg=Math.sqrt((Dx*Dx)+(Dy*Dy));Dx=Dx/Cg;Dy=Dy
/Cg;var SS=Jm+(Dy*HG);var ST=Jn-(Dx*HG);var NC=Jo+(Dy*HH);var ND=Jp-(Dx*HH);var NE=
Jo-(Dy*HH);var NF=Jp+(Dx*HH);var NG=Jm-(Dy*HG);var NH=Jn+(Dx*HG);var left=SS;var
right=SS;var top=ST;var bottom=ST;if(NC<left)left=NC;if(NE<left)left=NE;if(NG<left
)left=NG;if(NC>right)right=NC;if(NE>right)right=NE;if(NG>right)right=NG;if(ND<top
)top=ND;if(NF<top)top=NF;if(NH<top)top=NH;if(ND>bottom)bottom=ND;if(NF>bottom)bottom=
NF;if(NH>bottom)bottom=NH;var Az=[left|0,top|0,right|0,bottom|0];Az=[].concat(Az.
slice(0,2),B.aak(Az.slice(2,4),A9));return Az;},DU:function(M){var A;if(!!this.L&&((
this.I&0x1)===0x1))this.L.AA(this.GetExtent());},VA:function(E){var A;if(E<1)E=1;
if(E===this.Ie)return;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent(
));this.Ie=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent());if(((
E!==1)||(this.Id!==1))&&!this.Ci){this.Ci=B.zW(B.abi.Kh);if(this.Ci.EX)B.y_([this
,this.DU],this.Ci,0);}if(((E===1)&&(this.Id===1))&&!!this.Ci){if(this.Ci.EX)B.zl([
this,this.DU],this.Ci,0);this.Ci=null;}},J6:function(E){var A;if(E<1)E=1;if(E===
this.Id)return;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent());this.
Id=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent());if(((E!==1)||(
this.Ie!==1))&&!this.Ci){this.Ci=B.zW(B.abi.Kh);if(this.Ci.EX)B.y_([this,this.DU
],this.Ci,0);}if(((E===1)&&(this.Ie===1))&&!!this.Ci){if(this.Ci.EX)B.zl([this,this.
DU],this.Ci,0);this.Ci=null;}},Lv:function(E){var A;if(E<1)E=1;if((E===this.Id)&&(
E===this.Ie))return;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent()
);this.Id=E;this.Ie=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent(
));if((E!==1)&&!this.Ci){this.Ci=B.zW(B.abi.Kh);if(this.Ci.EX)B.y_([this,this.DU
],this.Ci,0);}if((E===1)&&!!this.Ci){if(this.Ci.EX)B.zl([this,this.DU],this.Ci,0
);this.Ci=null;}},AE:function(E){var A;if(E===this.Df)return;this.Df=E;if(!!this.
L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent());},PB:function(){var A;return((
this.I&0x1)===0x1);},U:function(E){if(E)this.Bn(0x1,0x0);else this.Bn(0x0,0x1);}
,_Init:function(aArg){B.Core.JX._Init.call(this,aArg);this.__proto__=C.Bf;},_Mark:
function(D){var A;B.Core.JX._Mark.call(this,D);if((A=this.Ci)&&(A._cycle!=D))A._Mark(
A._cycle=D);},_className:"Views::Line"};C.AB={Df:0xFFFFFFFF,DY:function(Bd,aClip
,aOffset,A1,aBlend){var A;var Cp;var Cq;var Cn;var Co;var BL=this.Df;aBlend=aBlend&&((
this.I&0x2)===0x2);A1=A1+1;Cp=Cq=Cn=Co=BL;if(A1<256){Cp=(Cp&0x00FFFFFF)|((((A1*((
Cp>>24)&0xFF))>>8)&0xFF)<<24);Cq=(Cq&0x00FFFFFF)|((((A1*((Cq>>24)&0xFF))>>8)&0xFF
)<<24);Cn=(Cn&0x00FFFFFF)|((((A1*((Cn>>24)&0xFF))>>8)&0xFF)<<24);Co=(Co&0x00FFFFFF
)|((((A1*((Co>>24)&0xFF))>>8)&0xFF)<<24);}Bd.MD(aClip,B.aam(this.R,aOffset),Cp,Cq
,Co,Cn,aBlend);},AE:function(E){var A;if(E===this.Df)return;this.Df=E;if(!!this.
L&&((this.I&0x1)===0x1))this.L.AA(this.R);},_Init:function(aArg){B.Core.B1._Init.
call(this,aArg);this.__proto__=C.AB;},_className:"Views::Rectangle"};C.ME={timer:
null,W:null,C$:-1,Df:0xFFFFFFFF,MF:0,Bi:0,Ej:false,DY:function(Bd,aClip,aOffset,
A1,aBlend){var A;var CY=this.MF;if(this.C$>=0)CY=this.C$;if(!this.W||(CY>=this.W.
NoOfFrames))return;this.W.Update();var Cp;var Cq;var Co;var Cn;var BL=this.Df;var
DA=(((A1+1)*255)>>8)+1;var Az=B.aam(this.R,aOffset);aBlend=aBlend&&((this.I&0x2)===
0x2);Cp=Cq=Cn=Co=BL;if(DA<256){Cp=(Cp&0x00FFFFFF)|((((((Cp>>24)&0xFF)*DA)>>8)&0xFF
)<<24);Cq=(Cq&0x00FFFFFF)|((((((Cq>>24)&0xFF)*DA)>>8)&0xFF)<<24);Co=(Co&0x00FFFFFF
)|((((((Co>>24)&0xFF)*DA)>>8)&0xFF)<<24);Cn=(Cn&0x00FFFFFF)|((((((Cn>>24)&0xFF)*
DA)>>8)&0xFF)<<24);}Bd.Uc(aClip,this.W,CY,Az,0x1F,Cp,Cq,Co,Cn,aBlend);},DU:function(
M){var A;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);},De:function(M){var
A;var CY=this.C$;var EO=0;if(!!this.W)EO=this.W.NoOfFrames*this.W.FrameDelay;if((
!!this.timer&&(this.C$<0))&&(EO>0))this.Bi=this.timer.AF-(this.MF*this.W.FrameDelay
);if(!!this.timer&&(EO>0)){var Am=(this.timer.AF-this.Bi)|0;CY=(Am/this.W.FrameDelay
)|0;if(Am>=EO){CY=CY%this.W.NoOfFrames;this.Bi=this.timer.AF-(Am%EO);}}if(((CY!==
this.C$)&&!!this.L)&&((this.I&0x1)===0x1))this.L.AA(this.R);this.C$=CY;if(!EO&&!
!this.timer){B.zl([this,this.De],this.timer,0);this.timer=null;}},AE:function(E){
var A;if(E===this.Df)return;this.Df=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(
this.R);},IQ:function(E){var A;if(this.Ej===E)return;this.Ej=E;this.C$=-1;if(!E&&
!!this.timer){B.zl([this,this.De],this.timer,0);this.timer=null;}if(E){this.timer=
B._GetAutoObject(B.abl.HZ);B.y_([this,this.De],this.timer,0);B.ow([this,this.De]
,this);}if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);},RV:function(E){var
A;if(E<0)E=0;if((E===this.MF)&&(this.C$===-1))return;this.MF=E;if(!this.timer)this.
C$=-1;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);},N:function(E){var A;
if(E===this.W)return;if(!!this.W&&this.W.EX)B.zl([this,this.DU],this.W,0);this.W=
E;this.C$=-1;if(!!E&&E.EX)B.y_([this,this.DU],E,0);if(this.Ej){this.IQ(false);this.
IQ(true);}if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);},_Init:function(aArg
){B.Core.B1._Init.call(this,aArg);this.__proto__=C.ME;},_Mark:function(D){var A;
B.Core.B1._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D
);if((A=this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"};
C.F={timer:null,W:null,Bi:0,C$:0,DF:0x12,Ej:false,Mv:false,DY:function(Bd,aClip,
aOffset,A1,aBlend){var A;var CY=0;if(this.C$>=0)CY=this.C$;if(!this.W||(CY>=this.
W.NoOfFrames))return;this.W.Update();var X=this.Gk();var Ct=this.W.FrameSize;if((
X[0]>=X[2])||(X[1]>=X[3]))return;var Cp;var Cq;var Co;var Cn;var DA=(((A1+1)*255
)>>8)+1;aBlend=aBlend&&((this.I&0x2)===0x2);Cp=Cq=Cn=Co=0xFFFFFFFF;if(DA<256){Cp=(
Cp&0x00FFFFFF)|((((255*DA)>>8)&0xFF)<<24);Cq=(Cq&0x00FFFFFF)|((((255*DA)>>8)&0xFF
)<<24);Co=(Co&0x00FFFFFF)|((((255*DA)>>8)&0xFF)<<24);Cn=(Cn&0x00FFFFFF)|((((255*
DA)>>8)&0xFF)<<24);}if(B.z8([X[2]-X[0],X[3]-X[1]],Ct))Bd.Rp(aClip,this.W,CY,B.aam(
this.R,aOffset),B.aaj(this.R.slice(0,2),X.slice(0,2)),Cp,Cq,Co,Cn,aBlend);else Bd.
VG(aClip,this.W,CY,B.aam(X,aOffset),[].concat(Bc,Ct),Cp,Cq,Co,Cn,aBlend,true);},
DU:function(M){var A;if(((this.Mv&&!!this.W)&&(this.W.FrameSize[0]>0))&&(this.W.
FrameSize[1]>0))this.H(this.Gk());if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.
R);},De:function(M){var A;var CY=this.C$;var EO=0;if(!!this.W)EO=this.W.NoOfFrames
*this.W.FrameDelay;if((!!this.timer&&(this.C$<0))&&(EO>0))this.Bi=this.timer.AF;
if(!!this.timer&&(EO>0)){var Am=(this.timer.AF-this.Bi)|0;CY=(Am/this.W.FrameDelay
)|0;if(Am>=EO){CY=CY%this.W.NoOfFrames;this.Bi=this.timer.AF-(Am%EO);}}if(((CY!==
this.C$)&&!!this.L)&&((this.I&0x1)===0x1))this.L.AA(this.R);this.C$=CY;if(!EO&&!
!this.timer){B.zl([this,this.De],this.timer,0);this.timer=null;}},Ah:function(E){
if(E===this.Mv)return;this.Mv=E;if(((E&&!!this.W)&&(this.W.FrameSize[0]>0))&&(this.
W.FrameSize[1]>0))this.H(this.Gk());},IQ:function(E){var A;if(this.Ej===E)return;
this.Ej=E;this.C$=-1;if(!E&&!!this.timer){B.zl([this,this.De],this.timer,0);this.
timer=null;}if(E){this.timer=B._GetAutoObject(B.abl.HZ);B.y_([this,this.De],this.
timer,0);B.ow([this,this.De],this);}if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(
this.R);},C6:function(E){var A;if(E===this.DF)return;this.DF=E;if(!!this.L&&((this.
I&0x1)===0x1))this.L.AA(this.R);},N:function(E){var A;if(E===this.W)return;if(!!
this.W&&this.W.EX)B.zl([this,this.DU],this.W,0);this.W=E;this.C$=-1;if(!!E&&E.EX
)B.y_([this,this.DU],E,0);if(this.Ej){this.IQ(false);this.IQ(true);}if(((this.Mv&&
!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.H(this.Gk());if(!!this.L&&((this.
I&0x1)===0x1))this.L.AA(this.R);},U:function(E){if(E)this.Bn(0x1,0x0);else this.
Bn(0x0,0x1);},Gk:function(){var A;if(!this.W)return DK;var An=this.DF;var Ct=this.
W.FrameSize;var Ap=this.R;var width=Ap[2]-Ap[0];var height=Ap[3]-Ap[1];if(!Ct[0]||
!Ct[1])return DK;var AP=[0,0,width,height];var At=AP;if(((An&0x40)===0x40)){var Q_=((((
AP[2]-AP[0])<<16)+((Ct[0]/2)|0))/Ct[0])|0;var Mn=((((AP[3]-AP[1])<<16)+((Ct[1]/2
)|0))/Ct[1])|0;var HQ=Q_;if(Mn>HQ)HQ=Mn;At=B.aaO(At,((Ct[0]*HQ)+32768)>>16);At=B.
aaL(At,((Ct[1]*HQ)+32768)>>16);}else if(((An&0x80)===0x80)){var Q_=((((AP[2]-AP[
0])<<16)+((Ct[0]/2)|0))/Ct[0])|0;var Mn=((((AP[3]-AP[1])<<16)+((Ct[1]/2)|0))/Ct[
1])|0;var HQ=Q_;if(Mn<HQ)HQ=Mn;At=B.aaO(At,((Ct[0]*HQ)+32768)>>16);At=B.aaL(At,((
Ct[1]*HQ)+32768)>>16);}else if(!((An&0x100)===0x100))At=B.aaN(At,Ct);if((At[2]-At[
0])!==(AP[2]-AP[0])){if(((An&0x4)===0x4))At=B.aaP(At,AP[2]-(At[2]-At[0]));else if(((
An&0x2)===0x2))At=B.aaP(At,(AP[0]+(((AP[2]-AP[0])/2)|0))-(((At[2]-At[0])/2)|0));
}if((At[3]-At[1])!==(AP[3]-AP[1])){if(((An&0x20)===0x20))At=B.aaR(At,AP[3]-(At[3
]-At[1]));else if(((An&0x10)===0x10))At=B.aaR(At,(AP[1]+(((AP[3]-AP[1])/2)|0))-(((
At[3]-At[1])/2)|0));}At=B.aam(At,Ap.slice(0,2));return At;},_Init:function(aArg){
B.Core.B1._Init.call(this,aArg);this.__proto__=C.F;},_Mark:function(D){var A;B.Core.
B1._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"};C.Text={
GF:null,A5:null,J8:null,AC:B.jm,String:B.jm,Da:null,IA:B.vw,Hi:B.vw,DF:0x12,Df:0xFFFFFFFF
,Jb:false,G8:false,OF:false,Cx:false,Ep:function(){if(!!this.Da){this.QL(this.Da
);this.Da=null;}},DY:function(Bd,aClip,aOffset,A1,aBlend){var A;if((this.AC===B.
jm)||!this.A5)return;var An=this.DF;var font=this.A5;var AP=B.aam(this.R,aOffset
);var Cp;var Cq;var Co;var Cn;var col=this.Df;var DA=(((A1+1)*255)>>8)+1;var Cz=
this.AC.charCodeAt(0)||0;var X=B.aam(this.Gk(),aOffset);var GZ=[AP[0]-X[0],(AP[1
]-X[1])-font.Ascent];if(Cz<1)return;Cp=Cq=Cn=Co=col;if(DA<256){Cp=(Cp&0x00FFFFFF
)|((((((Cp>>24)&0xFF)*DA)>>8)&0xFF)<<24);Cq=(Cq&0x00FFFFFF)|((((((Cq>>24)&0xFF)*
DA)>>8)&0xFF)<<24);Co=(Co&0x00FFFFFF)|((((((Co>>24)&0xFF)*DA)>>8)&0xFF)<<24);Cn=(
Cn&0x00FFFFFF)|((((((Cn>>24)&0xFF)*DA)>>8)&0xFF)<<24);}if(((An&0x80)===0x80)){if(
this.K9())An=(An&~0x80)|0x4;else An=(An&~0x80)|0x1;}if((Cz===1)&&!((An&0x40)===0x40
)){Bd.Rs(aClip,font,this.AC,2,(this.AC.charCodeAt(1)||0)-1,AP,GZ,0,0,Cp,Cq,Co,Cn
,true);return;}var leading=font.Leading;var HP=(font.Ascent+font.Descent)+leading;
var Zf=aClip[1]-X[1];var Zg=aClip[3]-X[1];var Qy=X[2]-X[0];var y=0;var i=1;var BL=
this.AC.charCodeAt(1)||0;while(((y+HP)<Zf)&&(BL>0)){i=i+BL;y=y+HP;BL=this.AC.charCodeAt(
i)||0;}while((y<Zg)&&(BL>0)){var Jv=B.aaj(GZ,[0,y]);var Iw=0;var Dh=false;if(((((
An&0x40)===0x40)&&((this.AC.charCodeAt((i+BL)-1)||0)!==0x0A))&&((this.AC.charCodeAt(
i+1)||0)!==0x0A))&&((this.AC.charCodeAt(i+BL)||0)!==0x00))Dh=true;if(Dh&&!!(An&0x6
)){var Ob=i+BL;var SQ=this.AC.indexOf(String.fromCharCode(0x20),i+1);var SR=this.
AC.indexOf(String.fromCharCode(0xA0),i+1);if(((SQ<0)||(SQ>=Ob))&&((SR<0)||(SR>=Ob
)))Dh=false;}if(Dh)Iw=Qy;else if(((An&0x4)===0x4))Jv=[(Jv[0]-Qy)+font.G9(this.AC
,i+1,BL-1),Jv[1]];else if(((An&0x2)===0x2))Jv=[(Jv[0]-((Qy/2)|0))+((font.G9(this.
AC,i+1,BL-1)/2)|0),Jv[1]];Bd.Rs(aClip,font,this.AC,i+1,BL-1,AP,Jv,Iw,0,Cp,Cq,Co,
Cn,true);i=i+BL;y=y+HP;BL=this.AC.charCodeAt(i)||0;}},H:function(E){var A;if(B.z9(
E,this.R))return;var TX;TX=((A=this.R)[2]-A[0])!==(E[2]-E[0]);if(((TX&&this.Jb)&&
this.Cx)&&!((this.I&0x2000)===0x2000)){this.AC=B.jm;this.Cx=false;B.ow([this,this.
Ir],this);}if(((this.G8&&this.Cx)&&!B.z8([(A=this.R)[2]-A[0],A[3]-A[1]],[E[2]-E[
0],E[3]-E[1]]))&&!((this.I&0x2000)===0x2000)){this.AC=B.jm;this.Cx=false;B.ow([this
,this.Ir],this);}B.Core.B1.H.call(this,E);B.ow([this,this.N9],this);},Za:function(
aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=B.ze(aBidi,aRowStart
,aRowEnd,aIndex);return aIndex;},Y$:function(aBidi,aRowStart,aRowEnd,aIndex){if(
!aBidi)return aIndex;aIndex=B.zd(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;}
,QL:function(aBidi){if(!aBidi)return;B.qU(aBidi);},Zi:function(aSize){var bidi=null;
bidi=B.vj(aSize);return bidi;},N9:function(M){B.ow(this.J8,this);},Ir:function(M
){B.ow([this,this.HO],this);},Aaf:function(M){this.J4(this.GF.AN);},Aag:function(
M){var A;var X=this.Gk();var N8=this.R.slice(0,2);if(X[0]>N8[0])X=[].concat(N8[0
],X.slice(1,4));if(X[1]>N8[1])X=B.aaS(X,N8[1]);var Bm=B.aaj(X.slice(0,2),this.R.
slice(0,2));var Jt=B.aaj([(A=this.R)[2]-A[0],A[3]-A[1]],[X[2]-X[0],X[3]-X[1]]);if(
Jt[0]>0)Jt=[0,Jt[1]];if(Jt[1]>0)Jt=[Jt[0],0];this.GF.AN=this.Hi;this.GF.B$=B.aaj(
B.aak(this.Hi,Jt),Bm);this.GF.B_=B.aaj(this.Hi,Bm);},HO:function(M){var A;if(this.
Cx)return;var width=(A=this.R)[2]-A[0];var height=(A=this.R)[3]-A[1];var GY=-1;var
font=this.A5;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Jb){
GY=width;if(GY<0)GY=1;}if(!!this.Da){this.QL(this.Da);this.Da=null;}this.Cx=true;
if((this.String!==B.jm)&&!!font){var length=this.String.length;if(this.OF)this.Da=
this.Zi(length);this.AC=font.VC(this.String,0,GY,length,this.Da);if(!!this.Da&&!
this.Uk()){this.QL(this.Da);this.Da=null;}}else this.AC=B.jm;this.IA=Bc;if((this.
G8&&(this.AC!==B.jm))&&!!font){var An=this.DF;var leading=font.Leading;var BP=this.
AC;var Oe=this.K9();if(((An&0x80)===0x80)){if(Oe)An=(An&~0x80)|0x4;else An=(An&~
0x80)|0x1;}var Oa=(font.Ascent+font.Descent)+leading;var Cz=BP.charCodeAt(0)||0;
var Im=((height+leading)/Oa)|0;var QB=false;var NI=false;if(Im<=0)Im=1;if(Cz>Im){
var Be=0;var Mm=0;var Oc=Cz-1;var Cr;var C0=BP.length;var tmp=B.jm;if(!!(An&0x110
)&&!!(An&0x28))An&=~0x110;if(!!(An&0x110))An&=~0x28;if(((An&0x20)===0x20))Mm=Cz-
Im;else if(((An&0x10)===0x10)||((An&0x100)===0x100)){Mm=((Cz-Im)/2)|0;Oc=(Mm+Im)-
1;}else Oc=Im-1;QB=Mm>0;NI=Oc<(Cz-1);for(Cr=1;Be<Mm;Be=Be+1)Cr=Cr+(BP.charCodeAt(
Cr)||0);if(NI)for(C0=Cr;Be<Oc;Be=Be+1)C0=C0+(BP.charCodeAt(C0)||0);if(QB){var Cg=
BP.charCodeAt(Cr)||0;tmp=(DL+B.aaY(BP,Cr,Cg))+DL;tmp=B.aaT(tmp,0,(Cg+2)&0xFFFF);
Cr=Cr+Cg;if((tmp.charCodeAt(Cg)||0)===0x0A){tmp=B.aaT(tmp,Cg,0xFEFF);tmp=B.aaT(tmp
,Cg+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.aaT(tmp,2,0xFEFF);tmp=B.aaT(
tmp,1,0x0A);}else tmp=B.aaT(tmp,1,0xFEFF);}tmp=tmp+B.aaY(BP,Cr,C0-Cr);if(NI&&(C0>=
Cr)){var Cg=BP.charCodeAt(C0)||0;var DE=(DL+B.aaY(BP,C0,Cg))+DL;DE=B.aaT(DE,0,(Cg+
2)&0xFFFF);DE=B.aaT(DE,1,0xFEFF);if((DE.charCodeAt(Cg)||0)===0x0A){DE=B.aaT(DE,Cg
,0xFEFF);DE=B.aaT(DE,Cg+1,0x0A);}if((DE.charCodeAt(2)||0)===0x0A){DE=B.aaT(DE,2,
0xFEFF);DE=B.aaT(DE,1,0x0A);}else DE=B.aaT(DE,1,0xFEFF);tmp=tmp+DE;}BP=String.fromCharCode(
Im&0xFFFF)+tmp;}var Be=0;var Ak=1;var QU=width;Cz=BP.charCodeAt(0)||0;for(;Be<Cz;
Be=Be+1){var Iu=QB&&!Be;var Iv=NI&&(Be===(Cz-1));var EF=false;var EG=false;var KJ=
Oe;if((Oe&&Iu)&&!Iv){Iu=false;Iv=true;}else if((Oe&&Iv)&&!Iu){Iv=false;Iu=true;}
var EP=Ak+1;var Cg=BP.charCodeAt(Ak)||0;var Cr=EP;var C0=(EP+Cg)-2;var QR=-1;var
QS=-1;if(!this.Jb&&(font.G9(BP,EP,Cg-1)>QU)){var Jf=An;if(((Jf&0x2)===0x2)&&!!(Jf&
0x5))Jf&=~0x2;if(((Jf&0x2)===0x2))Jf&=~0x5;if(((Jf&0x4)===0x4))EF=true;else if(((
Jf&0x2)===0x2)){EF=true;EG=true;}else EG=true;}if((BP.charCodeAt(Cr)||0)===0x0A)
Cr=Cr+1;if((BP.charCodeAt(C0)||0)===0x0A)C0=C0-1;while(EF&&((BP.charCodeAt(Cr)||
0)===0xFEFF))Cr=Cr+1;while(EG&&((BP.charCodeAt(C0)||0)===0xFEFF))C0=C0-1;EF=EF&&
!Iv;EG=EG&&!Iu;while((((EF||EG)||Iu)||Iv)&&(Cr<C0)){if((EF&&(KJ||!EG))||Iu){if(QR>
0)BP=B.aaT(BP,QR,0xFEFF);BP=B.aaT(BP,Cr,0x2026);QR=Cr;Cr=Cr+1;KJ=!KJ;Iu=false;if(
font.G9(BP,EP,Cg-1)<=QU){EF=false;EG=false;}else EF=EF||!EG;}if((EG&&(!KJ||!EF))||
Iv){if(QS>0)BP=B.aaT(BP,QS,0xFEFF);BP=B.aaT(BP,C0,0x2026);QS=C0;C0=C0-1;KJ=!KJ;Iv=
false;if(font.G9(BP,EP,Cg-1)<=QU){EF=false;EG=false;}else EG=EG||!EF;}}Ak=Ak+Cg;
}this.IA=[font.Rv(BP),((BP.charCodeAt(0)||0)*Oa)-leading];this.AC=BP;}if(!!this.
L&&((this.I&0x1)===0x1))this.L.AA(this.R);B.ow([this,this.N9],this);},RU:function(
E){if(E===this.OF)return;this.OF=E;this.AC=B.jm;this.Cx=false;B.ow([this,this.Ir
],this);},RT:function(E){if(E===this.G8)return;this.G8=E;if((this.Jb||E)||!!this.
J8)this.I=this.I&~0x100;else this.I=this.I|0x100;this.AC=B.jm;this.Cx=false;B.ow([
this,this.Ir],this);},Vy:function(E){if(B.z$(E,this.J8))return;this.J8=E;if((this.
Jb||!!E)||this.G8)this.I=this.I&~0x100;else this.I=this.I|0x100;},Vz:function(E){
if(E===this.GF)return;if(!!E&&!!E.KI){B.aa8("%s%*%s",FA,E,E9);throw new Error(FB
);}if(!!this.GF){this.GF.N_=null;this.GF.KI=null;}this.GF=E;if(!!E){E.N_=[this,this.
Aag];E.KI=[this,this.Aaf];}},PO:function(E){if(E===this.Jb)return;this.Jb=E;if(this.
Cx){this.AC=B.jm;this.Cx=false;B.ow([this,this.Ir],this);}if((E||this.G8)||!!this.
J8)this.I=this.I&~0x100;else this.I=this.I|0x100;},J4:function(E){var A;if(B.z8(
E,this.Hi))return;this.Hi=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);
if(this.Cx)B.ow([this,this.N9],this);},C6:function(E){var A;if(E===this.DF)return;
this.DF=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);if(this.G8){this.AC=
B.jm;this.Cx=false;B.ow([this,this.Ir],this);}if(this.Cx)B.ow([this,this.N9],this
);},Af:function(E){if(E===this.String)return;this.String=E;this.AC=B.jm;this.Cx=
false;B.ow([this,this.Ir],this);},Bk:function(E){if(E===this.A5)return;this.A5=E;
this.AC=B.jm;this.Cx=false;B.ow([this,this.Ir],this);},AE:function(E){var A;if(E===
this.Df)return;this.Df=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.R);},K9:
function(){if(!this.Cx)this.HO(this);if(!this.Da)return false;var result=false;var
bidi=this.Da;result=B.vi(bidi);return result;},Uk:function(){if(!this.Cx)this.HO(
this);if(!this.Da)return false;var result=false;var bidi=this.Da;result=B.zc(bidi
);return result;},R5:function(aIndex){if(((this.String===B.jm)||!this.A5)||this.
G8)return Bc;if(!this.Cx)this.HO(this);if(aIndex<0)aIndex=0;var Zr=(this.AC.charCodeAt(
0)||0)-1;var CB=this.AC.charCodeAt(1)||0;var Ak=1;var HR=2;var Be=0;var col=-1;var
GR=true;aIndex=aIndex+2;while((Be<Zr)&&((Ak+CB)<=aIndex)){Ak=Ak+CB;Be=Be+1;HR=HR+
1;aIndex=aIndex+1;CB=this.AC.charCodeAt(Ak)||0;}if(aIndex>(Ak+CB))aIndex=Ak+CB;if(
!!this.Da)aIndex=(Ak+this.Y$(this.Da,(Ak+1)-HR,(Ak+CB)-HR,(aIndex-Ak)-1))+1;for(;
aIndex>Ak;Ak=Ak+1){var Bh=this.AC.charCodeAt(Ak+1)||0;if(GR)col=col+1;GR=(Bh!==0xFEFF
)&&(Bh!==0x0A);}return[col,Be];},LB:function(LP){if(((this.String===B.jm)||!this.
A5)||this.G8)return 0;if(!this.Cx)this.HO(this);var Be=LP[1];var col=LP[0];var Ak=
1;var HR=2;var Cz=this.AC.charCodeAt(0)||0;var CB=this.AC.charCodeAt(1)||0;if(Be>=
Cz){Be=Cz-1;col=this.AC.length;}if(Be<0){Be=0;col=0;}if(col<0)col=0;while((Be>0)&&(
CB>0)){Ak=Ak+CB;Be=Be-1;HR=HR+1;CB=this.AC.charCodeAt(Ak)||0;}var EK=Ak;var Od=(
Ak-HR)+1;var Ob=(Od+CB)-1;var Mj=false;while((col>=0)&&(CB>1)){var Bh=this.AC.charCodeAt(
Ak+1)||0;Ak=Ak+1;CB=CB-1;Mj=(Bh===0xFEFF)||(Bh===0x0A);if(!Mj){col=col-1;EK=Ak;}
}if((!Mj&&(col>=0))&&((this.AC.charCodeAt(Ak+1)||0)===0x00))Mj=true;if(Mj)EK=EK+
1;EK=EK-HR;if(!!this.Da)EK=Od+this.Za(this.Da,Od,Ob,EK-Od);return EK;},M$:function(
CX){var A;if((this.String===B.jm)||!this.A5)return Bc;if(!this.Cx)this.HO(this);
var X=this.Gk();if((X[0]>=X[2])||(X[1]>=X[3]))return Bc;var font=this.A5;var An=
this.DF;var Cz=this.AC.charCodeAt(0)||0;var leading=font.Leading;if(CX[1]<X[1])CX=[
CX[0],X[1]];if(CX[1]>=X[3])CX=[CX[0],X[3]-1];var HP=(font.Ascent+font.Descent)+leading;
var Be=((CX[1]-X[1])/HP)|0;var C2=this.OV(Be);var CB=C2.length;var Dh=false;if(((
An&0x80)===0x80)){if(this.K9())An=(An&~0x80)|0x4;else An=(An&~0x80)|0x1;}if(((An&
0x40)===0x40)&&(Be<(Cz-1)))Dh=true;if((Dh&&(C2.indexOf(String.fromCharCode(0x20)
,0)<0))&&(C2.indexOf(String.fromCharCode(0xA0),0)<0))Dh=false;if(Dh){var Ak=1;var
JK=Be;while(JK>0){Ak=Ak+(this.AC.charCodeAt(Ak)||0);JK=JK-1;}if(((this.AC.charCodeAt(
Ak+1)||0)===0x0A)||((this.AC.charCodeAt((Ak+(this.AC.charCodeAt(Ak)||0))-1)||0)===
0x0A))Dh=false;}var Iw=0;var x=0;if(Dh)Iw=X[2]-X[0];else if(((An&0x4)===0x4))x=(
X[2]-X[0])-font.G9(C2,0,CB);else if(((An&0x2)===0x2))x=(((X[2]-X[0])/2)|0)-((font.
G9(C2,0,CB)/2)|0);var col=font.Uh(C2,0,CB,(CX[0]-X[0])-x,Iw);if(col<0)col=0;return[
col,Be];},PZ:function(LP){var A;if((this.String===B.jm)||!this.A5)return Bc;if(!
this.Cx)this.HO(this);var Cz=this.AC.charCodeAt(0)||0;var font=this.A5;var An=this.
DF;var Be=LP[1];var col=LP[0];if(Be>=Cz){Be=Cz-1;col=this.AC.length;}if(Be<0){Be=
0;col=0;}var C2=this.OV(Be);var CB=C2.length;var X=this.Gk();var Dh=false;var leading=
font.Leading;if(((An&0x80)===0x80)){if(this.K9())An=(An&~0x80)|0x4;else An=(An&~
0x80)|0x1;}if(((An&0x40)===0x40)&&(Be<(Cz-1)))Dh=true;if((Dh&&(C2.indexOf(String.
fromCharCode(0x20),0)<0))&&(C2.indexOf(String.fromCharCode(0xA0),0)<0))Dh=false;
if(Dh){var Ak=1;var JK=Be;while(JK>0){Ak=Ak+(this.AC.charCodeAt(Ak)||0);JK=JK-1;
}if(((this.AC.charCodeAt(Ak+1)||0)===0x0A)||((this.AC.charCodeAt((Ak+(this.AC.charCodeAt(
Ak)||0))-1)||0)===0x0A))Dh=false;}var y=(X[1]+(Be*((font.Ascent+font.Descent)+leading
)))+font.Ascent;var Iw=0;var x=X[0];if(Dh)Iw=X[2]-X[0];else if(((An&0x4)===0x4))
x=X[2]-font.G9(C2,0,CB);else if(((An&0x2)===0x2))x=(x+(((X[2]-X[0])/2)|0))-((font.
G9(C2,0,CB)/2)|0);var pos=font.Ug(C2,0,CB,col,Iw);if(pos<0)pos=0;return[x+pos,y];
},OV:function(LO){if((this.String===B.jm)||!this.A5)return B.jm;if(!this.Cx)this.
HO(this);var Cz=this.AC.charCodeAt(0)||0;var Ak=1;if((!this.A5||(LO<0))||(LO>=Cz
))return B.jm;while(LO>0){Ak=Ak+(this.AC.charCodeAt(Ak)||0);LO=LO-1;}var EP=Ak;var
KA=Ak+(this.AC.charCodeAt(Ak)||0);var Bh=0x00;do{EP=EP+1;Bh=this.AC.charCodeAt(EP
)||0;}while(((Bh===0xFEFF)||(Bh===0x0A))&&(EP<=KA));do{KA=KA-1;Bh=this.AC.charCodeAt(
KA)||0;}while(((Bh===0xFEFF)||(Bh===0x0A))&&(EP<=KA));var C2=B.aaY(this.AC,EP,(KA-
EP)+1);var Jq;for(Jq=C2.indexOf(String.fromCharCode(0xFEFF),0);Jq>=0;Jq=C2.indexOf(
String.fromCharCode(0xFEFF),Jq+1)){var EK=Jq+1;while((C2.charCodeAt(EK)||0)===0xFEFF
)EK=EK+1;C2=B.aa3(C2,Jq,EK-Jq);}return C2;},Gk:function(){var A;if((this.String===
B.jm)||!this.A5)return DK;if(!this.Cx)this.HO(this);if(this.AC===B.jm)return DK;
var leading=this.A5.Leading;var Oa=(this.A5.Ascent+this.A5.Descent)+this.A5.Leading;
if(B.z8(this.IA,Bc))this.IA=[this.A5.Rv(this.AC),this.IA[1]];this.IA=[this.IA[0]
,((this.AC.charCodeAt(0)||0)*Oa)-leading];var An=this.DF;var Ap=this.R;var width=
Ap[2]-Ap[0];var height=Ap[3]-Ap[1];var AP=[0,0,width,height];var At=[].concat(AP.
slice(0,2),B.aak(AP.slice(0,2),this.IA));if(((An&0x80)===0x80)){if(this.K9())An=(
An&~0x80)|0x4;else An=(An&~0x80)|0x1;}if(((An&0x40)===0x40)){var GY;GY=width;if(
GY<0)GY=0;if(GY>(At[2]-At[0]))At=B.aaO(At,GY);}if((!!(An&0x110)&&!!(An&0x28))&&((
At[3]-At[1])>(AP[3]-AP[1])))An&=~0x110;if(!!(An&0x110))An&=~0x28;if((((An&0x2)===
0x2)&&!!(An&0x5))&&((At[2]-At[0])>(AP[2]-AP[0])))An&=~0x2;if(((An&0x2)===0x2))An&=
~0x5;if((At[2]-At[0])!==(AP[2]-AP[0])){if(((An&0x4)===0x4))At=B.aaP(At,AP[2]-(At[
2]-At[0]));else if(((An&0x2)===0x2))At=B.aaP(At,(AP[0]+(((AP[2]-AP[0])/2)|0))-(((
At[2]-At[0])/2)|0));}if((At[3]-At[1])!==(AP[3]-AP[1])){if(((An&0x20)===0x20))At=
B.aaR(At,AP[3]-(At[3]-At[1]));else if(((An&0x100)===0x100))At=B.aaR(At,((AP[1]+(((
AP[3]-AP[1])/2)|0))-(((At[3]-At[1])/2)|0))+(((this.A5.Descent-this.A5.Ascent)/2)|
0));else if(((An&0x10)===0x10))At=B.aaR(At,(AP[1]+(((AP[3]-AP[1])/2)|0))-(((At[3
]-At[1])/2)|0));}At=B.aam(At,Ap.slice(0,2));return B.aam(At,this.Hi);},_Init:function(
aArg){B.Core.B1._Init.call(this,aArg);this.__proto__=C.Text;},_Done:function(){this.
Ep();this.__proto__=B.Core.B1;B.Core.B1._Done.call(this);},_Mark:function(D){var
A;B.Core.B1._Mark.call(this,D);if((A=this.GF)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.A5)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J8)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::Text"};C.Ia={Ii:B.vw,AU:B.aan(4,3,
0,null),IW:B.vx,Eg:0,Jw:0,PS:true,Gu:function(E){if(B.z8(E,this.Cl))return;B.Core.
Fu.Gu.call(this,E);this.AU.Set(3,0,E[0]);this.AU.Set(3,1,E[1]);this.AU.Set(3,2,1
);this.Eg=0x45;B.ow([this,this.Kp],this);},Ft:function(E){if(B.z8(E,this.CF))return;
B.Core.Fu.Ft.call(this,E);this.AU.Set(2,0,E[0]);this.AU.Set(2,1,E[1]);this.AU.Set(
2,2,1);this.Eg=0x45;B.ow([this,this.Kp],this);},BJ:function(E){if(B.z8(E,this.Bb
))return;B.Core.Fu.BJ.call(this,E);this.AU.Set(1,0,E[0]);this.AU.Set(1,1,E[1]);this.
AU.Set(1,2,1);this.Eg=0x45;B.ow([this,this.Kp],this);},BT:function(E){if(B.z8(E,
this.Ba))return;B.Core.Fu.BT.call(this,E);this.AU.Set(0,0,E[0]);this.AU.Set(0,1,
E[1]);this.AU.Set(0,2,1);this.Eg=0x45;B.ow([this,this.Kp],this);},Zd:function(){
return;},Rc:function(M){var A;if(this.Eg===0x00)return;if(this.Eg===0x45){var Ch=
B._NewObject(B.Graphics.R_,0);Ch=Ch.Ua(this.AU.Get(0,0),this.AU.Get(0,1),this.AU.
Get(1,0),this.AU.Get(1,1),this.AU.Get(2,0),this.AU.Get(2,1),this.AU.Get(3,0),this.
AU.Get(3,1));if(!!Ch){Ch.Mx(0,0);this.AU.Set(0,2,Ch.LG*240);Ch.Mx(1,0);this.AU.Set(
1,2,Ch.LG*240);Ch.Mx(1,1);this.AU.Set(2,2,Ch.LG*240);Ch.Mx(0,1);this.AU.Set(3,2,
Ch.LG*240);}this.Zd();}this.Jw=this.Eg;this.Eg=0x00;if(!!this.L&&((this.I&0x1)===
0x1))this.L.AA(this.GetExtent());},Kp:function(D9){this.Rc(D9);},RX:function(E){
var A;if(E===this.PS)return;this.PS=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(
this.GetExtent());},RZ:function(E){var A;if(B.z9(E,this.IW))return;this.IW=E;if((((
this.Jw===0x45)&&(this.Eg===0x00))&&!!this.L)&&((this.I&0x1)===0x1))this.L.AA(this.
GetExtent());if((this.Jw!==0x45)&&(this.Eg===0x00)){this.Eg=this.Jw;B.ow([this,this.
Kp],this);}},_Init:function(aArg){B.Core.Fu._Init.call(this,aArg);(this.AU=[]).__proto__=
C.Ia.AU;this.__proto__=C.Ia;this.I=0x3;},_className:"Views::WarpView"};C.DJ={A7:
null,bitmap:null,O:null,SZ:1,S0:0,S1:0,S2:0,S3:1,S4:0,S5:0,S6:0,S7:1,Hd:255,QQ:false
,DY:function(Bd,aClip,aOffset,A1,aBlend){var A;if(!this.bitmap)return;this.bitmap.
Update();var Ff=aOffset[0];var Fg=aOffset[1];var X=B.z6(this.IW,[].concat(Bc,this.
Ii));aBlend=aBlend&&((this.I&0x2)===0x2);A1=A1+1;var Ta;var Tb;var Tc;var Td;var
Zu=this.Hd;Ta=Tb=Tc=Td=Zu;var DM=255|(255<<8)|(255<<16)|((((A1*Ta)>>8)&0xFF)<<24
);var DN=255|(255<<8)|(255<<16)|((((A1*Tb)>>8)&0xFF)<<24);var Zb=255|(255<<8)|(255<<
16)|((((A1*Tc)>>8)&0xFF)<<24);var Zc=255|(255<<8)|(255<<16)|((((A1*Td)>>8)&0xFF)<<
24);aClip=B.z6(aClip,B.aam(DK,aOffset));Bd.VJ(aClip,this.bitmap,0,this.AU.Get(0,
0)+Ff,this.AU.Get(0,1)+Fg,this.AU.Get(0,2),this.AU.Get(1,0)+Ff,this.AU.Get(1,1)+
Fg,this.AU.Get(1,2),this.AU.Get(2,0)+Ff,this.AU.Get(2,1)+Fg,this.AU.Get(2,2),this.
AU.Get(3,0)+Ff,this.AU.Get(3,1)+Fg,this.AU.Get(3,2),X,DM,DN,Zb,Zc,aBlend,this.PS
);},BI:function(AG){if(!this.O||!this.A7)return null;var Ab=(B.Core.Gh.isPrototypeOf(
AG)?AG:null);var AJ=(B.Core.JS.isPrototypeOf(AG)?AG:null);if(!Ab&&!AJ)return null;
var Bm=Bc;var As=this.A7.L;while(!!As&&(As!==this.O)){Bm=B.aaj(Bm,As.R.slice(0,2
));As=As.L;}var P=this.A7;if(!!Ab&&!Ab.Down)this.A7=null;if(!!Ab){Ab.BU=B.aak(this.
KF(Ab.BU),Bm);Ab.C4=B.aak(this.KF(Ab.C4),Bm);return P.BI(Ab);}if(!!AJ){var Zx=B.
aak(this.KF(B.aaj(AJ.BU,AJ.AN)),Bm);AJ.BU=B.aak(this.KF(AJ.BU),Bm);AJ.C4=B.aak(this.
KF(AJ.C4),Bm);AJ.AN=B.aaj(AJ.BU,Zx);return P.BI(AJ);}return C.Ia.BI.call(this,AG
);},Fm:function(Ay,Ac,C_,FC,FG,FF){var A;if(!this.O||!((this.O.I&0x18)===0x18))return null;
var pos=B.zT(Ay);pos=this.KF(pos);var Eh=B.z6(this.IW,[].concat(Bc,this.Ii));if(
!B.vt(Eh,pos))return null;var B6=this.O.Fm(B.aam(B.aam([0,0,Ay[2]-Ay[0],Ay[3]-Ay[
1]],pos),this.O.R.slice(0,2)),Ac,C_,FC,null,FF);if(!!B6)this.A7=B6.Cu;else this.
A7=null;if(!!this.A7)return B._NewObject(B.Core.KU,0).Initialize(this,Bc);return null;
},Rc:function(M){C.Ia.Rc.call(this,M);this.QQ=false;},Aaz:function(){var x1=this.
AU.Get(0,0);var y1=this.AU.Get(0,1);var x2=this.AU.Get(1,0);var y2=this.AU.Get(1
,1);var x3=this.AU.Get(2,0);var y3=this.AU.Get(2,1);var x4=this.AU.Get(3,0);var y4=
this.AU.Get(3,1);var LU=x2-x3;var LW=y2-y3;var LV=x4-x3;var LX=y4-y3;var Mo=((x1-
x2)+x3)-x4;var Mp=((y1-y2)+y3)-y4;var Ji=(LU*LX)-(LW*LV);if(!Ji)return;var KC=((
Mo*LX)-(Mp*LV))/Ji;var h=((LU*Mp)-(LW*Mo))/Ji;var Nr=(x2-x1)+(KC*x2);var NB=(x4-
x1)+(h*x4);var BL=x1;var NK=(y2-y1)+(KC*y2);var FQ=(y4-y1)+(h*y4);var Il=y1;this.
SZ=FQ-(Il*h);this.S0=(BL*h)-NB;this.S1=(NB*Il)-(BL*FQ);this.S2=(Il*KC)-NK;this.S3=
Nr-(BL*KC);this.S4=(BL*NK)-(Nr*Il);this.S5=(NK*h)-(FQ*KC);this.S6=(NB*KC)-(Nr*h);
this.S7=(Nr*FQ)-(NB*NK);this.QQ=true;},KF:function(Cc){var A;if(!this.QQ)this.Aaz(
);var Ri=Cc[0];var Rj=Cc[1];var Ms=((Ri*this.SZ)+(Rj*this.S0))+this.S1;var Mt=((
Ri*this.S2)+(Rj*this.S3))+this.S4;var Q9=((Ri*this.S5)+(Rj*this.S6))+this.S7;if(
!!Q9){Ms=Ms/Q9;Mt=Mt/Q9;}var Eh=B.z6(this.IW,[].concat(Bc,this.Ii));Ms=Ms*(Eh[2]-
Eh[0]);Mt=Mt*(Eh[3]-Eh[1]);return B.aak([Ms|0,Mt|0],Eh.slice(0,2));},DU:function(
M){var A;var Te=this.Ii;if(!!this.O)this.bitmap=this.O.BK;else this.bitmap=null;
if(!!this.bitmap)this.Ii=this.bitmap.FrameSize;else this.Ii=Bc;if(((B.z8(Te,this.
Ii)||((this.Jw===0x45)&&(this.Eg===0x00)))&&!!this.L)&&((this.I&0x1)===0x1))this.
L.AA(this.GetExtent());if(((this.Jw!==0x45)&&(this.Eg===0x00))&&!B.z8(Te,this.Ii
)){this.Eg=this.Jw;B.ow([this,this.Kp],this);}},Ls:function(E){var A;if(E===this.
Hd)return;this.Hd=E;if(!!this.L&&((this.I&0x1)===0x1))this.L.AA(this.GetExtent()
);},RW:function(E){if(E===this.O)return;if(!!E&&(E===this.L))throw new Error(Ig);
if(!!this.O){B.zl([this,this.DU],this.O,0);this.bitmap=null;}this.O=E;if(!!E){B.
y_([this,this.DU],E,0);this.bitmap=E.BK;}this.DU(this);},_Init:function(aArg){C.
Ia._Init.call(this,aArg);this.__proto__=C.DJ;},_Mark:function(D){var A;C.Ia._Mark.
call(this,D);if((A=this.A7)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.bitmap
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(A._cycle=
D);},_className:"Views::WarpGroup"};C.Aa6={T6:0x1,T5:0x2,T7:0x4,T_:0x8,T9:0x10,T8:
0x20,Abx:0x40,Aby:0x80,AbE:0x100};C.AbM={T6:0x1,T5:0x2,T7:0x4,T_:0x8,T9:0x10,T8:
0x20,AaF:0x40,AaE:0x80,AaK:0x100};C.Abg={Abf:0,Abv:1,Abt:2,Abu:3};
C._Init=function(){C.Bf.__proto__=B.Core.JX;C.AB.__proto__=B.Core.B1;C.ME.__proto__=
B.Core.B1;C.F.__proto__=B.Core.B1;C.Text.__proto__=B.Core.B1;C.Ia.__proto__=B.Core.
Fu;C.DJ.__proto__=C.Ia;};C._ReInit=function(){};C.C9=function(D){};return C;})();

/* Embedded Wizard */