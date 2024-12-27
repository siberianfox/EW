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
var A7=[1,1];var AW=[0,0];var Dh=[0,0,0,0];var Di="\uFEFF";var Fn="The Slide Touch Handler:";
var EF="is already connected with a view.";var Fo="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var HE="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.Ce={B1:null,GQ:1,GP:1,CO:0xFFFFFFFF,Ds:function(A4,aClip,aOffset,AN,aBlend){var
A;var FF=this.GP;var FG=this.GQ;var E2=B.aak(this.A1,aOffset);var E3=B.aak(this.
A2,aOffset);var GU;var GV;var BE=this.CO;if(B.z8(E2,E3))return;aBlend=aBlend&&((
this.F&0x2)===0x2);AN=AN+1;GU=GV=BE;if(AN<256){GU=(GU&0x00FFFFFF)|((((AN*((GU>>24
)&0xFF))>>8)&0xFF)<<24);GV=(GV&0x00FFFFFF)|((((AN*((GV>>24)&0xFF))>>8)&0xFF)<<24
);}if((FF===1)&&(FG===1))A4.Q6(aClip,E2,E3,GU,GV,aBlend);else A4.Q7(aClip,E2,E3,
FF,FG,GU,GV,aBlend);},GetExtent:function(){var FF=this.GP;var FG=this.GQ;var E2=
this.A1;var E3=this.A2;if(((FF===1)&&(FG===1))||B.z8(E2,E3))return B.Core.Ip.GetExtent.
call(this);var Gh=FF/2;var Gi=FG/2;var HO=E2[0];var HP=E2[1];var HQ=E3[0];var HR=
E3[1];var C7=HQ-HO;var C8=HR-HP;var B0=Math.sqrt((C7*C7)+(C8*C8));C7=C7/B0;C8=C8
/B0;var P1=HO+(C8*Gh);var P2=HP-(C7*Gh);var LN=HQ+(C8*Gi);var LO=HR-(C7*Gi);var LP=
HQ-(C8*Gi);var LQ=HR+(C7*Gi);var LR=HO-(C8*Gh);var LS=HP+(C7*Gh);var left=P1;var
right=P1;var top=P2;var bottom=P2;if(LN<left)left=LN;if(LP<left)left=LP;if(LR<left
)left=LR;if(LN>right)right=LN;if(LP>right)right=LP;if(LR>right)right=LR;if(LO<top
)top=LO;if(LQ<top)top=LQ;if(LS<top)top=LS;if(LO>bottom)bottom=LO;if(LQ>bottom)bottom=
LQ;if(LS>bottom)bottom=LS;var Aq=[left|0,top|0,right|0,bottom|0];Aq=[].concat(Aq.
slice(0,2),B.aak(Aq.slice(2,4),A7));return Aq;},Dp:function(M){var A;if(!!this.H&&((
this.F&0x1)===0x1))this.H.Ar(this.GetExtent());},Sn:function(E){var A;if(E<1)E=1;
if(E===this.GQ)return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent(
));this.GQ=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());if(((
E!==1)||(this.GP!==1))&&!this.B1){this.B1=B.zW(B.abi.IZ);if(this.B1.D_)B.y_([this
,this.Dp],this.B1,0);}if(((E===1)&&(this.GP===1))&&!!this.B1){if(this.B1.D_)B.zl([
this,this.Dp],this.B1,0);this.B1=null;}},Pv:function(E){var A;if(E<1)E=1;if(E===
this.GP)return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());this.
GP=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());if(((E!==1)||(
this.GQ!==1))&&!this.B1){this.B1=B.zW(B.abi.IZ);if(this.B1.D_)B.y_([this,this.Dp
],this.B1,0);}if(((E===1)&&(this.GQ===1))&&!!this.B1){if(this.B1.D_)B.zl([this,this.
Dp],this.B1,0);this.B1=null;}},Sm:function(E){var A;if(E<1)E=1;if((E===this.GP)&&(
E===this.GQ))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent()
);this.GP=E;this.GQ=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent(
));if((E!==1)&&!this.B1){this.B1=B.zW(B.abi.IZ);if(this.B1.D_)B.y_([this,this.Dp
],this.B1,0);}if((E===1)&&!!this.B1){if(this.B1.D_)B.zl([this,this.Dp],this.B1,0
);this.B1=null;}},A0:function(E){var A;if(E===this.CO)return;this.CO=E;if(!!this.
H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());},Rl:function(){var A;return((
this.F&0x1)===0x1);},AC:function(E){if(E)this.Bc(0x1,0x0);else this.Bc(0x0,0x1);
},_Init:function(aArg){B.Core.Ip._Init.call(this,aArg);this.__proto__=C.Ce;},_Mark:
function(D){var A;B.Core.Ip._Mark.call(this,D);if((A=this.B1)&&(A._cycle!=D))A._Mark(
A._cycle=D);},_className:"Views::Line"};C.AF={CO:0xFFFFFFFF,Ds:function(A4,aClip
,aOffset,AN,aBlend){var A;var B6;var B7;var B4;var B5;var BE=this.CO;aBlend=aBlend&&((
this.F&0x2)===0x2);AN=AN+1;B6=B7=B4=B5=BE;if(AN<256){B6=(B6&0x00FFFFFF)|((((AN*((
B6>>24)&0xFF))>>8)&0xFF)<<24);B7=(B7&0x00FFFFFF)|((((AN*((B7>>24)&0xFF))>>8)&0xFF
)<<24);B4=(B4&0x00FFFFFF)|((((AN*((B4>>24)&0xFF))>>8)&0xFF)<<24);B5=(B5&0x00FFFFFF
)|((((AN*((B5>>24)&0xFF))>>8)&0xFF)<<24);}A4.K9(aClip,B.aam(this.O,aOffset),B6,B7
,B5,B4,aBlend);},A0:function(E){var A;if(E===this.CO)return;this.CO=E;if(!!this.
H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},_Init:function(aArg){B.Core.BI._Init.
call(this,aArg);this.__proto__=C.AF;},_className:"Views::Rectangle"};C.K_={timer:
null,Z:null,CJ:-1,CO:0xFFFFFFFF,K$:0,A9:0,DI:false,Ds:function(A4,aClip,aOffset,
AN,aBlend){var A;var Cz=this.K$;if(this.CJ>=0)Cz=this.CJ;if(!this.Z||(Cz>=this.Z.
NoOfFrames))return;this.Z.Update();var B6;var B7;var B5;var B4;var BE=this.CO;var
C$=(((AN+1)*255)>>8)+1;var Aq=B.aam(this.O,aOffset);aBlend=aBlend&&((this.F&0x2)===
0x2);B6=B7=B4=B5=BE;if(C$<256){B6=(B6&0x00FFFFFF)|((((((B6>>24)&0xFF)*C$)>>8)&0xFF
)<<24);B7=(B7&0x00FFFFFF)|((((((B7>>24)&0xFF)*C$)>>8)&0xFF)<<24);B5=(B5&0x00FFFFFF
)|((((((B5>>24)&0xFF)*C$)>>8)&0xFF)<<24);B4=(B4&0x00FFFFFF)|((((((B4>>24)&0xFF)*
C$)>>8)&0xFF)<<24);}A4.Q4(aClip,this.Z,Cz,Aq,0x1F,B6,B7,B5,B4,aBlend);},Dp:function(
M){var A;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},CN:function(M){var
A;var Cz=this.CJ;var D5=0;if(!!this.Z)D5=this.Z.NoOfFrames*this.Z.FrameDelay;if((
!!this.timer&&(this.CJ<0))&&(D5>0))this.A9=this.timer.Au-(this.K$*this.Z.FrameDelay
);if(!!this.timer&&(D5>0)){var Ad=(this.timer.Au-this.A9)|0;Cz=(Ad/this.Z.FrameDelay
)|0;if(Ad>=D5){Cz=Cz%this.Z.NoOfFrames;this.A9=this.timer.Au-(Ad%D5);}}if(((Cz!==
this.CJ)&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ar(this.O);this.CJ=Cz;if(!D5&&!
!this.timer){B.zl([this,this.CN],this.timer,0);this.timer=null;}},A0:function(E){
var A;if(E===this.CO)return;this.CO=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(
this.O);},Hl:function(E){var A;if(this.DI===E)return;this.DI=E;this.CJ=-1;if(!E&&
!!this.timer){B.zl([this,this.CN],this.timer,0);this.timer=null;}if(E){this.timer=
B._GetAutoObject(B.abl.GB);B.y_([this,this.CN],this.timer,0);B.ow([this,this.CN]
,this);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},Pn:function(E){var
A;if(E<0)E=0;if((E===this.K$)&&(this.CJ===-1))return;this.K$=E;if(!this.timer)this.
CJ=-1;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},X:function(E){var A;
if(E===this.Z)return;if(!!this.Z&&this.Z.D_)B.zl([this,this.Dp],this.Z,0);this.Z=
E;this.CJ=-1;if(!!E&&E.D_)B.y_([this,this.Dp],E,0);if(this.DI){this.Hl(false);this.
Hl(true);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},_Init:function(aArg
){B.Core.BI._Init.call(this,aArg);this.__proto__=C.K_;},_Mark:function(D){var A;
B.Core.BI._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D
);if((A=this.Z)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"};
C.J={timer:null,Z:null,A9:0,CJ:0,De:0x12,DI:false,K3:false,Ds:function(A4,aClip,
aOffset,AN,aBlend){var A;var Cz=0;if(this.CJ>=0)Cz=this.CJ;if(!this.Z||(Cz>=this.
Z.NoOfFrames))return;this.Z.Update();var P=this.E9();var B_=this.Z.FrameSize;if((
P[0]>=P[2])||(P[1]>=P[3]))return;var B6;var B7;var B5;var B4;var C$=(((AN+1)*255
)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);B6=B7=B4=B5=0xFFFFFFFF;if(C$<256){B6=(
B6&0x00FFFFFF)|((((255*C$)>>8)&0xFF)<<24);B7=(B7&0x00FFFFFF)|((((255*C$)>>8)&0xFF
)<<24);B5=(B5&0x00FFFFFF)|((((255*C$)>>8)&0xFF)<<24);B4=(B4&0x00FFFFFF)|((((255*
C$)>>8)&0xFF)<<24);}if(B.z8([P[2]-P[0],P[3]-P[1]],B_))A4.OP(aClip,this.Z,Cz,B.aam(
this.O,aOffset),B.aaj(this.O.slice(0,2),P.slice(0,2)),B6,B7,B5,B4,aBlend);else A4.
Su(aClip,this.Z,Cz,B.aam(P,aOffset),[].concat(AW,B_),B6,B7,B5,B4,aBlend,true);},
Dp:function(M){var A;if(((this.K3&&!!this.Z)&&(this.Z.FrameSize[0]>0))&&(this.Z.
FrameSize[1]>0))this.L(this.E9());if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.
O);},CN:function(M){var A;var Cz=this.CJ;var D5=0;if(!!this.Z)D5=this.Z.NoOfFrames
*this.Z.FrameDelay;if((!!this.timer&&(this.CJ<0))&&(D5>0))this.A9=this.timer.Au;
if(!!this.timer&&(D5>0)){var Ad=(this.timer.Au-this.A9)|0;Cz=(Ad/this.Z.FrameDelay
)|0;if(Ad>=D5){Cz=Cz%this.Z.NoOfFrames;this.A9=this.timer.Au-(Ad%D5);}}if(((Cz!==
this.CJ)&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ar(this.O);this.CJ=Cz;if(!D5&&!
!this.timer){B.zl([this,this.CN],this.timer,0);this.timer=null;}},Bd:function(E){
if(E===this.K3)return;this.K3=E;if(((E&&!!this.Z)&&(this.Z.FrameSize[0]>0))&&(this.
Z.FrameSize[1]>0))this.L(this.E9());},Hl:function(E){var A;if(this.DI===E)return;
this.DI=E;this.CJ=-1;if(!E&&!!this.timer){B.zl([this,this.CN],this.timer,0);this.
timer=null;}if(E){this.timer=B._GetAutoObject(B.abl.GB);B.y_([this,this.CN],this.
timer,0);B.ow([this,this.CN],this);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(
this.O);},Df:function(E){var A;if(E===this.De)return;this.De=E;if(!!this.H&&((this.
F&0x1)===0x1))this.H.Ar(this.O);},X:function(E){var A;if(E===this.Z)return;if(!!
this.Z&&this.Z.D_)B.zl([this,this.Dp],this.Z,0);this.Z=E;this.CJ=-1;if(!!E&&E.D_
)B.y_([this,this.Dp],E,0);if(this.DI){this.Hl(false);this.Hl(true);}if(((this.K3&&
!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.L(this.E9());if(!!this.H&&((this.
F&0x1)===0x1))this.H.Ar(this.O);},AC:function(E){if(E)this.Bc(0x1,0x0);else this.
Bc(0x0,0x1);},E9:function(){var A;if(!this.Z)return Dh;var Ae=this.De;var B_=this.
Z.FrameSize;var Ah=this.O;var width=Ah[2]-Ah[0];var height=Ah[3]-Ah[1];if(!B_[0]||
!B_[1])return Dh;var AG=[0,0,width,height];var Ak=AG;if(((Ae&0x40)===0x40)){var OB=((((
AG[2]-AG[0])<<16)+((B_[0]/2)|0))/B_[0])|0;var KW=((((AG[3]-AG[1])<<16)+((B_[1]/2
)|0))/B_[1])|0;var Gq=OB;if(KW>Gq)Gq=KW;Ak=B.aaO(Ak,((B_[0]*Gq)+32768)>>16);Ak=B.
aaL(Ak,((B_[1]*Gq)+32768)>>16);}else if(((Ae&0x80)===0x80)){var OB=((((AG[2]-AG[
0])<<16)+((B_[0]/2)|0))/B_[0])|0;var KW=((((AG[3]-AG[1])<<16)+((B_[1]/2)|0))/B_[
1])|0;var Gq=OB;if(KW<Gq)Gq=KW;Ak=B.aaO(Ak,((B_[0]*Gq)+32768)>>16);Ak=B.aaL(Ak,((
B_[1]*Gq)+32768)>>16);}else if(!((Ae&0x100)===0x100))Ak=B.aaN(Ak,B_);if((Ak[2]-Ak[
0])!==(AG[2]-AG[0])){if(((Ae&0x4)===0x4))Ak=B.aaP(Ak,AG[2]-(Ak[2]-Ak[0]));else if(((
Ae&0x2)===0x2))Ak=B.aaP(Ak,(AG[0]+(((AG[2]-AG[0])/2)|0))-(((Ak[2]-Ak[0])/2)|0));
}if((Ak[3]-Ak[1])!==(AG[3]-AG[1])){if(((Ae&0x20)===0x20))Ak=B.aaR(Ak,AG[3]-(Ak[3
]-Ak[1]));else if(((Ae&0x10)===0x10))Ak=B.aaR(Ak,(AG[1]+(((AG[3]-AG[1])/2)|0))-(((
Ak[3]-Ak[1])/2)|0));}Ak=B.aam(Ak,Ah.slice(0,2));return Ak;},_Init:function(aArg){
B.Core.BI._Init.call(this,aArg);this.__proto__=C.J;},_Mark:function(D){var A;B.Core.
BI._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Z)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"};C.Text={
Fi:null,AS:null,Ix:null,At:B.jm,String:B.jm,CK:null,Hc:B.vw,FU:B.vw,De:0x12,CO:0xFFFFFFFF
,HD:false,FL:false,MC:false,Cc:false,DN:function(){if(!!this.CK){this.Od(this.CK
);this.CK=null;}},Ds:function(A4,aClip,aOffset,AN,aBlend){var A;if((this.At===B.
jm)||!this.AS)return;var Ae=this.De;var font=this.AS;var AG=B.aam(this.O,aOffset
);var B6;var B7;var B5;var B4;var col=this.CO;var C$=(((AN+1)*255)>>8)+1;var Cg=
this.At.charCodeAt(0)||0;var P=B.aam(this.E9(),aOffset);var FE=[AG[0]-P[0],(AG[1
]-P[1])-font.Ascent];if(Cg<1)return;B6=B7=B4=B5=col;if(C$<256){B6=(B6&0x00FFFFFF
)|((((((B6>>24)&0xFF)*C$)>>8)&0xFF)<<24);B7=(B7&0x00FFFFFF)|((((((B7>>24)&0xFF)*
C$)>>8)&0xFF)<<24);B5=(B5&0x00FFFFFF)|((((((B5>>24)&0xFF)*C$)>>8)&0xFF)<<24);B4=(
B4&0x00FFFFFF)|((((((B4>>24)&0xFF)*C$)>>8)&0xFF)<<24);}if(((Ae&0x80)===0x80)){if(
this.JN())Ae=(Ae&~0x80)|0x4;else Ae=(Ae&~0x80)|0x1;}if((Cg===1)&&!((Ae&0x40)===0x40
)){A4.OR(aClip,font,this.At,2,(this.At.charCodeAt(1)||0)-1,AG,FE,0,0,B6,B7,B5,B4
,true);return;}var leading=font.Leading;var Gp=(font.Ascent+font.Descent)+leading;
var Un=aClip[1]-P[1];var Uo=aClip[3]-P[1];var N5=P[2]-P[0];var y=0;var i=1;var BE=
this.At.charCodeAt(1)||0;while(((y+Gp)<Un)&&(BE>0)){i=i+BE;y=y+Gp;BE=this.At.charCodeAt(
i)||0;}while((y<Uo)&&(BE>0)){var HW=B.aaj(FE,[0,y]);var G_=0;var CS=false;if(((((
Ae&0x40)===0x40)&&((this.At.charCodeAt((i+BE)-1)||0)!==0x0A))&&((this.At.charCodeAt(
i+1)||0)!==0x0A))&&((this.At.charCodeAt(i+BE)||0)!==0x00))CS=true;if(CS&&!!(Ae&0x6
)){var Mh=i+BE;var PZ=this.At.indexOf(String.fromCharCode(0x20),i+1);var P0=this.
At.indexOf(String.fromCharCode(0xA0),i+1);if(((PZ<0)||(PZ>=Mh))&&((P0<0)||(P0>=Mh
)))CS=false;}if(CS)G_=N5;else if(((Ae&0x4)===0x4))HW=[(HW[0]-N5)+font.FM(this.At
,i+1,BE-1),HW[1]];else if(((Ae&0x2)===0x2))HW=[(HW[0]-((N5/2)|0))+((font.FM(this.
At,i+1,BE-1)/2)|0),HW[1]];A4.OR(aClip,font,this.At,i+1,BE-1,AG,HW,G_,0,B6,B7,B5,
B4,true);i=i+BE;y=y+Gp;BE=this.At.charCodeAt(i)||0;}},L:function(E){var A;if(B.z9(
E,this.O))return;var QM;QM=((A=this.O)[2]-A[0])!==(E[2]-E[0]);if(((QM&&this.HD)&&
this.Cc)&&!((this.F&0x2000)===0x2000)){this.At=B.jm;this.Cc=false;B.ow([this,this.
G5],this);}if(((this.FL&&this.Cc)&&!B.z8([(A=this.O)[2]-A[0],A[3]-A[1]],[E[2]-E[
0],E[3]-E[1]]))&&!((this.F&0x2000)===0x2000)){this.At=B.jm;this.Cc=false;B.ow([this
,this.G5],this);}B.Core.BI.L.call(this,E);B.ow([this,this.Md],this);},Ui:function(
aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=B.ze(aBidi,aRowStart
,aRowEnd,aIndex);return aIndex;},Uh:function(aBidi,aRowStart,aRowEnd,aIndex){if(
!aBidi)return aIndex;aIndex=B.zd(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;}
,Od:function(aBidi){if(!aBidi)return;B.qU(aBidi);},Ur:function(aSize){var bidi=null;
bidi=B.vj(aSize);return bidi;},Md:function(M){B.ow(this.Ix,this);},G5:function(M
){B.ow([this,this.Go],this);},U5:function(M){this.Iu(this.Fi.AE);},U6:function(M
){var A;var P=this.E9();var Mc=this.O.slice(0,2);if(P[0]>Mc[0])P=[].concat(Mc[0]
,P.slice(1,4));if(P[1]>Mc[1])P=B.aaS(P,Mc[1]);var Bb=B.aaj(P.slice(0,2),this.O.slice(
0,2));var HU=B.aaj([(A=this.O)[2]-A[0],A[3]-A[1]],[P[2]-P[0],P[3]-P[1]]);if(HU[0
]>0)HU=[0,HU[1]];if(HU[1]>0)HU=[HU[0],0];this.Fi.AE=this.FU;this.Fi.BT=B.aaj(B.aak(
this.FU,HU),Bb);this.Fi.BS=B.aaj(this.FU,Bb);},Go:function(M){var A;if(this.Cc)return;
var width=(A=this.O)[2]-A[0];var height=(A=this.O)[3]-A[1];var FD=-1;var font=this.
AS;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.HD){FD=width;if(
FD<0)FD=1;}if(!!this.CK){this.Od(this.CK);this.CK=null;}this.Cc=true;if((this.String
!==B.jm)&&!!font){var length=this.String.length;if(this.MC)this.CK=this.Ur(length
);this.At=font.Sp(this.String,0,FD,length,this.CK);if(!!this.CK&&!this.Ra()){this.
Od(this.CK);this.CK=null;}}else this.At=B.jm;this.Hc=AW;if((this.FL&&(this.At!==
B.jm))&&!!font){var Ae=this.De;var leading=font.Leading;var By=this.At;var Mk=this.
JN();if(((Ae&0x80)===0x80)){if(Mk)Ae=(Ae&~0x80)|0x4;else Ae=(Ae&~0x80)|0x1;}var Mg=(
font.Ascent+font.Descent)+leading;var Cg=By.charCodeAt(0)||0;var GZ=((height+leading
)/Mg)|0;var N8=false;var LT=false;if(GZ<=0)GZ=1;if(Cg>GZ){var A5=0;var KV=0;var Mi=
Cg-1;var B8;var CA=By.length;var tmp=B.jm;if(!!(Ae&0x110)&&!!(Ae&0x28))Ae&=~0x110;
if(!!(Ae&0x110))Ae&=~0x28;if(((Ae&0x20)===0x20))KV=Cg-GZ;else if(((Ae&0x10)===0x10
)||((Ae&0x100)===0x100)){KV=((Cg-GZ)/2)|0;Mi=(KV+GZ)-1;}else Mi=GZ-1;N8=KV>0;LT=
Mi<(Cg-1);for(B8=1;A5<KV;A5=A5+1)B8=B8+(By.charCodeAt(B8)||0);if(LT)for(CA=B8;A5<
Mi;A5=A5+1)CA=CA+(By.charCodeAt(CA)||0);if(N8){var B0=By.charCodeAt(B8)||0;tmp=(
Di+B.aaY(By,B8,B0))+Di;tmp=B.aaT(tmp,0,(B0+2)&0xFFFF);B8=B8+B0;if((tmp.charCodeAt(
B0)||0)===0x0A){tmp=B.aaT(tmp,B0,0xFEFF);tmp=B.aaT(tmp,B0+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.aaT(tmp,2,0xFEFF);tmp=B.aaT(tmp,1,0x0A);}else tmp=B.aaT(tmp
,1,0xFEFF);}tmp=tmp+B.aaY(By,B8,CA-B8);if(LT&&(CA>=B8)){var B0=By.charCodeAt(CA)||
0;var Dd=(Di+B.aaY(By,CA,B0))+Di;Dd=B.aaT(Dd,0,(B0+2)&0xFFFF);Dd=B.aaT(Dd,1,0xFEFF
);if((Dd.charCodeAt(B0)||0)===0x0A){Dd=B.aaT(Dd,B0,0xFEFF);Dd=B.aaT(Dd,B0+1,0x0A
);}if((Dd.charCodeAt(2)||0)===0x0A){Dd=B.aaT(Dd,2,0xFEFF);Dd=B.aaT(Dd,1,0x0A);}else
Dd=B.aaT(Dd,1,0xFEFF);tmp=tmp+Dd;}By=String.fromCharCode(GZ&0xFFFF)+tmp;}var A5=
0;var Ac=1;var Oo=width;Cg=By.charCodeAt(0)||0;for(;A5<Cg;A5=A5+1){var G8=N8&&!A5;
var G9=LT&&(A5===(Cg-1));var DW=false;var DX=false;var Jo=Mk;if((Mk&&G8)&&!G9){G8=
false;G9=true;}else if((Mk&&G9)&&!G8){G9=false;G8=true;}var D6=Ac+1;var B0=By.charCodeAt(
Ac)||0;var B8=D6;var CA=(D6+B0)-2;var Oj=-1;var Ol=-1;if(!this.HD&&(font.FM(By,D6
,B0-1)>Oo)){var HH=Ae;if(((HH&0x2)===0x2)&&!!(HH&0x5))HH&=~0x2;if(((HH&0x2)===0x2
))HH&=~0x5;if(((HH&0x4)===0x4))DW=true;else if(((HH&0x2)===0x2)){DW=true;DX=true;
}else DX=true;}if((By.charCodeAt(B8)||0)===0x0A)B8=B8+1;if((By.charCodeAt(CA)||0
)===0x0A)CA=CA-1;while(DW&&((By.charCodeAt(B8)||0)===0xFEFF))B8=B8+1;while(DX&&((
By.charCodeAt(CA)||0)===0xFEFF))CA=CA-1;DW=DW&&!G9;DX=DX&&!G8;while((((DW||DX)||
G8)||G9)&&(B8<CA)){if((DW&&(Jo||!DX))||G8){if(Oj>0)By=B.aaT(By,Oj,0xFEFF);By=B.aaT(
By,B8,0x2026);Oj=B8;B8=B8+1;Jo=!Jo;G8=false;if(font.FM(By,D6,B0-1)<=Oo){DW=false;
DX=false;}else DW=DW||!DX;}if((DX&&(!Jo||!DW))||G9){if(Ol>0)By=B.aaT(By,Ol,0xFEFF
);By=B.aaT(By,CA,0x2026);Ol=CA;CA=CA-1;Jo=!Jo;G9=false;if(font.FM(By,D6,B0-1)<=Oo
){DW=false;DX=false;}else DX=DX||!DW;}}Ac=Ac+B0;}this.Hc=[font.OU(By),((By.charCodeAt(
0)||0)*Mg)-leading];this.At=By;}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.
O);B.ow([this,this.Md],this);},Pm:function(E){if(E===this.MC)return;this.MC=E;this.
At=B.jm;this.Cc=false;B.ow([this,this.G5],this);},Pl:function(E){if(E===this.FL)
return;this.FL=E;if((this.HD||E)||!!this.Ix)this.F=this.F&~0x100;else this.F=this.
F|0x100;this.At=B.jm;this.Cc=false;B.ow([this,this.G5],this);},Sk:function(E){if(
B.z$(E,this.Ix))return;this.Ix=E;if((this.HD||!!E)||this.FL)this.F=this.F&~0x100;
else this.F=this.F|0x100;},Sl:function(E){if(E===this.Fi)return;if(!!E&&!!E.Jn){
B.aa8("%s%*%s",Fn,E,EF);throw new Error(Fo);}if(!!this.Fi){this.Fi.Me=null;this.
Fi.Jn=null;}this.Fi=E;if(!!E){E.Me=[this,this.U6];E.Jn=[this,this.U5];}},NB:function(
E){if(E===this.HD)return;this.HD=E;if(this.Cc){this.At=B.jm;this.Cc=false;B.ow([
this,this.G5],this);}if((E||this.FL)||!!this.Ix)this.F=this.F&~0x100;else this.F=
this.F|0x100;},Iu:function(E){var A;if(B.z8(E,this.FU))return;this.FU=E;if(!!this.
H&&((this.F&0x1)===0x1))this.H.Ar(this.O);if(this.Cc)B.ow([this,this.Md],this);}
,Df:function(E){var A;if(E===this.De)return;this.De=E;if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ar(this.O);if(this.FL){this.At=B.jm;this.Cc=false;B.ow([this,this.G5
],this);}if(this.Cc)B.ow([this,this.Md],this);},AV:function(E){if(E===this.String
)return;this.String=E;this.At=B.jm;this.Cc=false;B.ow([this,this.G5],this);},Cj:
function(E){if(E===this.AS)return;this.AS=E;this.At=B.jm;this.Cc=false;B.ow([this
,this.G5],this);},A0:function(E){var A;if(E===this.CO)return;this.CO=E;if(!!this.
H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},JN:function(){if(!this.Cc)this.Go(this
);if(!this.CK)return false;var result=false;var bidi=this.CK;result=B.vi(bidi);return result;
},Ra:function(){if(!this.Cc)this.Go(this);if(!this.CK)return false;var result=false;
var bidi=this.CK;result=B.zc(bidi);return result;},Pz:function(aIndex){if(((this.
String===B.jm)||!this.AS)||this.FL)return AW;if(!this.Cc)this.Go(this);if(aIndex<
0)aIndex=0;var Uz=(this.At.charCodeAt(0)||0)-1;var Ci=this.At.charCodeAt(1)||0;var
Ac=1;var Gr=2;var A5=0;var col=-1;var Fw=true;aIndex=aIndex+2;while((A5<Uz)&&((Ac+
Ci)<=aIndex)){Ac=Ac+Ci;A5=A5+1;Gr=Gr+1;aIndex=aIndex+1;Ci=this.At.charCodeAt(Ac)||
0;}if(aIndex>(Ac+Ci))aIndex=Ac+Ci;if(!!this.CK)aIndex=(Ac+this.Uh(this.CK,(Ac+1)-
Gr,(Ac+Ci)-Gr,(aIndex-Ac)-1))+1;for(;aIndex>Ac;Ac=Ac+1){var A8=this.At.charCodeAt(
Ac+1)||0;if(Fw)col=col+1;Fw=(A8!==0xFEFF)&&(A8!==0x0A);}return[col,A5];},J9:function(
Ko){if(((this.String===B.jm)||!this.AS)||this.FL)return 0;if(!this.Cc)this.Go(this
);var A5=Ko[1];var col=Ko[0];var Ac=1;var Gr=2;var Cg=this.At.charCodeAt(0)||0;var
Ci=this.At.charCodeAt(1)||0;if(A5>=Cg){A5=Cg-1;col=this.At.length;}if(A5<0){A5=0;
col=0;}if(col<0)col=0;while((A5>0)&&(Ci>0)){Ac=Ac+Ci;A5=A5-1;Gr=Gr+1;Ci=this.At.
charCodeAt(Ac)||0;}var D1=Ac;var Mj=(Ac-Gr)+1;var Mh=(Mj+Ci)-1;var KS=false;while((
col>=0)&&(Ci>1)){var A8=this.At.charCodeAt(Ac+1)||0;Ac=Ac+1;Ci=Ci-1;KS=(A8===0xFEFF
)||(A8===0x0A);if(!KS){col=col-1;D1=Ac;}}if((!KS&&(col>=0))&&((this.At.charCodeAt(
Ac+1)||0)===0x00))KS=true;if(KS)D1=D1+1;D1=D1-Gr;if(!!this.CK)D1=Mj+this.Ui(this.
CK,Mj,Mh,D1-Mj);return D1;},Lr:function(Cy){var A;if((this.String===B.jm)||!this.
AS)return AW;if(!this.Cc)this.Go(this);var P=this.E9();if((P[0]>=P[2])||(P[1]>=P[
3]))return AW;var font=this.AS;var Ae=this.De;var Cg=this.At.charCodeAt(0)||0;var
leading=font.Leading;if(Cy[1]<P[1])Cy=[Cy[0],P[1]];if(Cy[1]>=P[3])Cy=[Cy[0],P[3]-
1];var Gp=(font.Ascent+font.Descent)+leading;var A5=((Cy[1]-P[1])/Gp)|0;var CB=this.
MR(A5);var Ci=CB.length;var CS=false;if(((Ae&0x80)===0x80)){if(this.JN())Ae=(Ae&
~0x80)|0x4;else Ae=(Ae&~0x80)|0x1;}if(((Ae&0x40)===0x40)&&(A5<(Cg-1)))CS=true;if((
CS&&(CB.indexOf(String.fromCharCode(0x20),0)<0))&&(CB.indexOf(String.fromCharCode(
0xA0),0)<0))CS=false;if(CS){var Ac=1;var H_=A5;while(H_>0){Ac=Ac+(this.At.charCodeAt(
Ac)||0);H_=H_-1;}if(((this.At.charCodeAt(Ac+1)||0)===0x0A)||((this.At.charCodeAt((
Ac+(this.At.charCodeAt(Ac)||0))-1)||0)===0x0A))CS=false;}var G_=0;var x=0;if(CS)
G_=P[2]-P[0];else if(((Ae&0x4)===0x4))x=(P[2]-P[0])-font.FM(CB,0,Ci);else if(((Ae&
0x2)===0x2))x=(((P[2]-P[0])/2)|0)-((font.FM(CB,0,Ci)/2)|0);var col=font.Q9(CB,0,
Ci,(Cy[0]-P[0])-x,G_);if(col<0)col=0;return[col,A5];},NI:function(Ko){var A;if((
this.String===B.jm)||!this.AS)return AW;if(!this.Cc)this.Go(this);var Cg=this.At.
charCodeAt(0)||0;var font=this.AS;var Ae=this.De;var A5=Ko[1];var col=Ko[0];if(A5>=
Cg){A5=Cg-1;col=this.At.length;}if(A5<0){A5=0;col=0;}var CB=this.MR(A5);var Ci=CB.
length;var P=this.E9();var CS=false;var leading=font.Leading;if(((Ae&0x80)===0x80
)){if(this.JN())Ae=(Ae&~0x80)|0x4;else Ae=(Ae&~0x80)|0x1;}if(((Ae&0x40)===0x40)&&(
A5<(Cg-1)))CS=true;if((CS&&(CB.indexOf(String.fromCharCode(0x20),0)<0))&&(CB.indexOf(
String.fromCharCode(0xA0),0)<0))CS=false;if(CS){var Ac=1;var H_=A5;while(H_>0){Ac=
Ac+(this.At.charCodeAt(Ac)||0);H_=H_-1;}if(((this.At.charCodeAt(Ac+1)||0)===0x0A
)||((this.At.charCodeAt((Ac+(this.At.charCodeAt(Ac)||0))-1)||0)===0x0A))CS=false;
}var y=(P[1]+(A5*((font.Ascent+font.Descent)+leading)))+font.Ascent;var G_=0;var
x=P[0];if(CS)G_=P[2]-P[0];else if(((Ae&0x4)===0x4))x=P[2]-font.FM(CB,0,Ci);else if(((
Ae&0x2)===0x2))x=(x+(((P[2]-P[0])/2)|0))-((font.FM(CB,0,Ci)/2)|0);var pos=font.Q8(
CB,0,Ci,col,G_);if(pos<0)pos=0;return[x+pos,y];},MR:function(Kn){if((this.String===
B.jm)||!this.AS)return B.jm;if(!this.Cc)this.Go(this);var Cg=this.At.charCodeAt(
0)||0;var Ac=1;if((!this.AS||(Kn<0))||(Kn>=Cg))return B.jm;while(Kn>0){Ac=Ac+(this.
At.charCodeAt(Ac)||0);Kn=Kn-1;}var D6=Ac;var Jg=Ac+(this.At.charCodeAt(Ac)||0);var
A8=0x00;do{D6=D6+1;A8=this.At.charCodeAt(D6)||0;}while(((A8===0xFEFF)||(A8===0x0A
))&&(D6<=Jg));do{Jg=Jg-1;A8=this.At.charCodeAt(Jg)||0;}while(((A8===0xFEFF)||(A8===
0x0A))&&(D6<=Jg));var CB=B.aaY(this.At,D6,(Jg-D6)+1);var HS;for(HS=CB.indexOf(String.
fromCharCode(0xFEFF),0);HS>=0;HS=CB.indexOf(String.fromCharCode(0xFEFF),HS+1)){var
D1=HS+1;while((CB.charCodeAt(D1)||0)===0xFEFF)D1=D1+1;CB=B.aa3(CB,HS,D1-HS);}return CB;
},E9:function(){var A;if((this.String===B.jm)||!this.AS)return Dh;if(!this.Cc)this.
Go(this);if(this.At===B.jm)return Dh;var leading=this.AS.Leading;var Mg=(this.AS.
Ascent+this.AS.Descent)+this.AS.Leading;if(B.z8(this.Hc,AW))this.Hc=[this.AS.OU(
this.At),this.Hc[1]];this.Hc=[this.Hc[0],((this.At.charCodeAt(0)||0)*Mg)-leading
];var Ae=this.De;var Ah=this.O;var width=Ah[2]-Ah[0];var height=Ah[3]-Ah[1];var AG=[
0,0,width,height];var Ak=[].concat(AG.slice(0,2),B.aak(AG.slice(0,2),this.Hc));if(((
Ae&0x80)===0x80)){if(this.JN())Ae=(Ae&~0x80)|0x4;else Ae=(Ae&~0x80)|0x1;}if(((Ae&
0x40)===0x40)){var FD;FD=width;if(FD<0)FD=0;if(FD>(Ak[2]-Ak[0]))Ak=B.aaO(Ak,FD);
}if((!!(Ae&0x110)&&!!(Ae&0x28))&&((Ak[3]-Ak[1])>(AG[3]-AG[1])))Ae&=~0x110;if(!!(
Ae&0x110))Ae&=~0x28;if((((Ae&0x2)===0x2)&&!!(Ae&0x5))&&((Ak[2]-Ak[0])>(AG[2]-AG[
0])))Ae&=~0x2;if(((Ae&0x2)===0x2))Ae&=~0x5;if((Ak[2]-Ak[0])!==(AG[2]-AG[0])){if(((
Ae&0x4)===0x4))Ak=B.aaP(Ak,AG[2]-(Ak[2]-Ak[0]));else if(((Ae&0x2)===0x2))Ak=B.aaP(
Ak,(AG[0]+(((AG[2]-AG[0])/2)|0))-(((Ak[2]-Ak[0])/2)|0));}if((Ak[3]-Ak[1])!==(AG[
3]-AG[1])){if(((Ae&0x20)===0x20))Ak=B.aaR(Ak,AG[3]-(Ak[3]-Ak[1]));else if(((Ae&0x100
)===0x100))Ak=B.aaR(Ak,((AG[1]+(((AG[3]-AG[1])/2)|0))-(((Ak[3]-Ak[1])/2)|0))+(((
this.AS.Descent-this.AS.Ascent)/2)|0));else if(((Ae&0x10)===0x10))Ak=B.aaR(Ak,(AG[
1]+(((AG[3]-AG[1])/2)|0))-(((Ak[3]-Ak[1])/2)|0));}Ak=B.aam(Ak,Ah.slice(0,2));return B.
aam(Ak,this.FU);},_Init:function(aArg){B.Core.BI._Init.call(this,aArg);this.__proto__=
C.Text;},_Done:function(){this.DN();this.__proto__=B.Core.BI;B.Core.BI._Done.call(
this);},_Mark:function(D){var A;B.Core.BI._Mark.call(this,D);if((A=this.Fi)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.AS)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Ix)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Text"
};C.GO={GT:B.vw,AI:B.aan(4,3,0,null),Hp:B.vx,DG:0,HX:0,ND:true,Fc:function(E){if(
B.z8(E,this.B2))return;B.Core.ED.Fc.call(this,E);this.AI.Set(3,0,E[0]);this.AI.Set(
3,1,E[1]);this.AI.Set(3,2,1);this.DG=0x45;B.ow([this,this.I6],this);},Ez:function(
E){if(B.z8(E,this.Ck))return;B.Core.ED.Ez.call(this,E);this.AI.Set(2,0,E[0]);this.
AI.Set(2,1,E[1]);this.AI.Set(2,2,1);this.DG=0x45;B.ow([this,this.I6],this);},B$:
function(E){if(B.z8(E,this.A2))return;B.Core.ED.B$.call(this,E);this.AI.Set(1,0,
E[0]);this.AI.Set(1,1,E[1]);this.AI.Set(1,2,1);this.DG=0x45;B.ow([this,this.I6],
this);},Cf:function(E){if(B.z8(E,this.A1))return;B.Core.ED.Cf.call(this,E);this.
AI.Set(0,0,E[0]);this.AI.Set(0,1,E[1]);this.AI.Set(0,2,1);this.DG=0x45;B.ow([this
,this.I6],this);},Ul:function(){return;},OF:function(M){var A;if(this.DG===0x00)
return;if(this.DG===0x45){var EY=B._NewObject(B.Graphics.PF,0);EY=EY.Q1(this.AI.
Get(0,0),this.AI.Get(0,1),this.AI.Get(1,0),this.AI.Get(1,1),this.AI.Get(2,0),this.
AI.Get(2,1),this.AI.Get(3,0),this.AI.Get(3,1));if(!!EY){EY.K4(0,0);this.AI.Set(0
,2,EY.Kd*240);EY.K4(1,0);this.AI.Set(1,2,EY.Kd*240);EY.K4(1,1);this.AI.Set(2,2,EY.
Kd*240);EY.K4(0,1);this.AI.Set(3,2,EY.Kd*240);}this.Ul();}this.HX=this.DG;this.DG=
0x00;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());},I6:function(
Vd){this.OF(Vd);},Pp:function(E){var A;if(E===this.ND)return;this.ND=E;if(!!this.
H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());},Pr:function(E){var A;if(B.
z9(E,this.Hp))return;this.Hp=E;if((((this.HX===0x45)&&(this.DG===0x00))&&!!this.
H)&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());if((this.HX!==0x45)&&(this.
DG===0x00)){this.DG=this.HX;B.ow([this,this.I6],this);}},_Init:function(aArg){B.
Core.ED._Init.call(this,aArg);(this.AI=[]).__proto__=C.GO.AI;this.__proto__=C.GO;
this.F=0x3;},_className:"Views::WarpView"};C.Dg={AT:null,bitmap:null,R:null,P8:1
,P9:0,P_:0,P$:0,Qa:1,Qb:0,Qc:0,Qd:0,Qe:1,FP:255,Oi:false,Ds:function(A4,aClip,aOffset
,AN,aBlend){var A;if(!this.bitmap)return;this.bitmap.Update();var Ek=aOffset[0];
var El=aOffset[1];var P=B.z6(this.Hp,[].concat(AW,this.GT));aBlend=aBlend&&((this.
F&0x2)===0x2);AN=AN+1;var Qj;var Qk;var Ql;var Qm;var UB=this.FP;Qj=Qk=Ql=Qm=UB;
var GU=255|(255<<8)|(255<<16)|((((AN*Qj)>>8)&0xFF)<<24);var GV=255|(255<<8)|(255<<
16)|((((AN*Qk)>>8)&0xFF)<<24);var Uj=255|(255<<8)|(255<<16)|((((AN*Ql)>>8)&0xFF)<<
24);var Uk=255|(255<<8)|(255<<16)|((((AN*Qm)>>8)&0xFF)<<24);aClip=B.z6(aClip,B.aam(
Dh,aOffset));A4.Sv(aClip,this.bitmap,0,this.AI.Get(0,0)+Ek,this.AI.Get(0,1)+El,this.
AI.Get(0,2),this.AI.Get(1,0)+Ek,this.AI.Get(1,1)+El,this.AI.Get(1,2),this.AI.Get(
2,0)+Ek,this.AI.Get(2,1)+El,this.AI.Get(2,2),this.AI.Get(3,0)+Ek,this.AI.Get(3,1
)+El,this.AI.Get(3,2),P,GU,GV,Uj,Uk,aBlend,this.ND);},Bs:function(Av){if(!this.R||
!this.AT)return null;var T=(B.Core.E8.isPrototypeOf(Av)?Av:null);var Ax=(B.Core.
Ik.isPrototypeOf(Av)?Av:null);if(!T&&!Ax)return null;var Bb=AW;var Aj=this.AT.H;
while(!!Aj&&(Aj!==this.R)){Bb=B.aaj(Bb,Aj.O.slice(0,2));Aj=Aj.H;}var I=this.AT;if(
!!T&&!T.Down)this.AT=null;if(!!T){T.BC=B.aak(this.Jl(T.BC),Bb);T.CE=B.aak(this.Jl(
T.CE),Bb);return I.Bs(T);}if(!!Ax){var UE=B.aak(this.Jl(B.aaj(Ax.BC,Ax.AE)),Bb);
Ax.BC=B.aak(this.Jl(Ax.BC),Bb);Ax.CE=B.aak(this.Jl(Ax.CE),Bb);Ax.AE=B.aaj(Ax.BC,
UE);return I.Bs(Ax);}return C.GO.Bs.call(this,Av);},Ep:function(Ap,V,CI,EH,EL,EK
){var A;if(!this.R||!((this.R.F&0x18)===0x18))return null;var pos=B.zT(Ap);pos=this.
Jl(pos);var DH=B.z6(this.Hp,[].concat(AW,this.GT));if(!B.vt(DH,pos))return null;
var BO=this.R.Ep(B.aam(B.aam([0,0,Ap[2]-Ap[0],Ap[3]-Ap[1]],pos),this.R.O.slice(0
,2)),V,CI,EH,null,EK);if(!!BO)this.AT=BO.Ca;else this.AT=null;if(!!this.AT)return B.
_NewObject(B.Core.Jy,0).Initialize(this,AW);return null;},OF:function(M){C.GO.OF.
call(this,M);this.Oi=false;},Vn:function(){var x1=this.AI.Get(0,0);var y1=this.AI.
Get(0,1);var x2=this.AI.Get(1,0);var y2=this.AI.Get(1,1);var x3=this.AI.Get(2,0);
var y3=this.AI.Get(2,1);var x4=this.AI.Get(3,0);var y4=this.AI.Get(3,1);var Kt=x2-
x3;var Kv=y2-y3;var Ku=x4-x3;var Kw=y4-y3;var KX=((x1-x2)+x3)-x4;var KY=((y1-y2)+
y3)-y4;var HK=(Kt*Kw)-(Kv*Ku);if(!HK)return;var Ji=((KX*Kw)-(KY*Ku))/HK;var h=((
Kt*KY)-(Kv*KX))/HK;var LC=(x2-x1)+(Ji*x2);var LM=(x4-x1)+(h*x4);var BE=x1;var LV=(
y2-y1)+(Ji*y2);var L4=(y4-y1)+(h*y4);var GX=y1;this.P8=L4-(GX*h);this.P9=(BE*h)-
LM;this.P_=(LM*GX)-(BE*L4);this.P$=(GX*Ji)-LV;this.Qa=LC-(BE*Ji);this.Qb=(BE*LV)-(
LC*GX);this.Qc=(LV*h)-(L4*Ji);this.Qd=(LM*Ji)-(LC*h);this.Qe=(LC*L4)-(LM*LV);this.
Oi=true;},Jl:function(BW){var A;if(!this.Oi)this.Vn();var OH=BW[0];var OI=BW[1];
var K1=((OH*this.P8)+(OI*this.P9))+this.P_;var K2=((OH*this.P$)+(OI*this.Qa))+this.
Qb;var OA=((OH*this.Qc)+(OI*this.Qd))+this.Qe;if(!!OA){K1=K1/OA;K2=K2/OA;}var DH=
B.z6(this.Hp,[].concat(AW,this.GT));K1=K1*(DH[2]-DH[0]);K2=K2*(DH[3]-DH[1]);return B.
aak([K1|0,K2|0],DH.slice(0,2));},Dp:function(M){var A;var Qn=this.GT;if(!!this.R
)this.bitmap=this.R.Bu;else this.bitmap=null;if(!!this.bitmap)this.GT=this.bitmap.
FrameSize;else this.GT=AW;if(((B.z8(Qn,this.GT)||((this.HX===0x45)&&(this.DG===0x00
)))&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());if(((this.HX!==
0x45)&&(this.DG===0x00))&&!B.z8(Qn,this.GT)){this.DG=this.HX;B.ow([this,this.I6]
,this);}},J2:function(E){var A;if(E===this.FP)return;this.FP=E;if(!!this.H&&((this.
F&0x1)===0x1))this.H.Ar(this.GetExtent());},Po:function(E){if(E===this.R)return;
if(!!E&&(E===this.H))throw new Error(HE);if(!!this.R){B.zl([this,this.Dp],this.R
,0);this.bitmap=null;}this.R=E;if(!!E){B.y_([this,this.Dp],E,0);this.bitmap=E.Bu;
}this.Dp(this);},_Init:function(aArg){C.GO._Init.call(this,aArg);this.__proto__=
C.Dg;},_Mark:function(D){var A;C.GO._Mark.call(this,D);if((A=this.AT)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.bitmap)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.R)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpGroup"};C.
VT={QV:0x1,QU:0x2,QW:0x4,QZ:0x8,QY:0x10,QX:0x20,Wk:0x40,Wl:0x80,Ws:0x100};C.Wt={
QV:0x1,QU:0x2,QW:0x4,QZ:0x8,QY:0x10,QX:0x20,Vt:0x40,Vs:0x80,Vy:0x100};C.V5={V4:0
,Wi:1,Wg:2,Wh:3};
C._Init=function(){C.Ce.__proto__=B.Core.Ip;C.AF.__proto__=B.Core.BI;C.K_.__proto__=
B.Core.BI;C.J.__proto__=B.Core.BI;C.Text.__proto__=B.Core.BI;C.GO.__proto__=B.Core.
ED;C.Dg.__proto__=C.GO;};C._ReInit=function(){};C.CH=function(D){};return C;})();

/* Embedded Wizard */