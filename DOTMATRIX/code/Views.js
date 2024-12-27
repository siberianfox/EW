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
"its content.";var HF="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.Ce={B1:null,GQ:1,GP:1,CO:0xFFFFFFFF,Ds:function(A4,aClip,aOffset,AN,aBlend){var
A;var FF=this.GP;var FG=this.GQ;var E2=B.aak(this.A1,aOffset);var E3=B.aak(this.
A2,aOffset);var GU;var GV;var BE=this.CO;if(B.z8(E2,E3))return;aBlend=aBlend&&((
this.F&0x2)===0x2);AN=AN+1;GU=GV=BE;if(AN<256){GU=(GU&0x00FFFFFF)|((((AN*((GU>>24
)&0xFF))>>8)&0xFF)<<24);GV=(GV&0x00FFFFFF)|((((AN*((GV>>24)&0xFF))>>8)&0xFF)<<24
);}if((FF===1)&&(FG===1))A4.Q2(aClip,E2,E3,GU,GV,aBlend);else A4.Q3(aClip,E2,E3,
FF,FG,GU,GV,aBlend);},GetExtent:function(){var FF=this.GP;var FG=this.GQ;var E2=
this.A1;var E3=this.A2;if(((FF===1)&&(FG===1))||B.z8(E2,E3))return B.Core.Iq.GetExtent.
call(this);var Gh=FF/2;var Gi=FG/2;var HP=E2[0];var HQ=E2[1];var HR=E3[0];var HS=
E3[1];var C7=HR-HP;var C8=HS-HQ;var B0=Math.sqrt((C7*C7)+(C8*C8));C7=C7/B0;C8=C8
/B0;var PX=HP+(C8*Gh);var PY=HQ-(C7*Gh);var LO=HR+(C8*Gi);var LP=HS-(C7*Gi);var LQ=
HR-(C8*Gi);var LR=HS+(C7*Gi);var LS=HP-(C8*Gh);var LT=HQ+(C7*Gh);var left=PX;var
right=PX;var top=PY;var bottom=PY;if(LO<left)left=LO;if(LQ<left)left=LQ;if(LS<left
)left=LS;if(LO>right)right=LO;if(LQ>right)right=LQ;if(LS>right)right=LS;if(LP<top
)top=LP;if(LR<top)top=LR;if(LT<top)top=LT;if(LP>bottom)bottom=LP;if(LR>bottom)bottom=
LR;if(LT>bottom)bottom=LT;var Aq=[left|0,top|0,right|0,bottom|0];Aq=[].concat(Aq.
slice(0,2),B.aak(Aq.slice(2,4),A7));return Aq;},Dp:function(M){var A;if(!!this.H&&((
this.F&0x1)===0x1))this.H.Ar(this.GetExtent());},Sj:function(E){var A;if(E<1)E=1;
if(E===this.GQ)return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent(
));this.GQ=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());if(((
E!==1)||(this.GP!==1))&&!this.B1){this.B1=B.zW(B.abi.I0);if(this.B1.D_)B.y_([this
,this.Dp],this.B1,0);}if(((E===1)&&(this.GP===1))&&!!this.B1){if(this.B1.D_)B.zl([
this,this.Dp],this.B1,0);this.B1=null;}},Pr:function(E){var A;if(E<1)E=1;if(E===
this.GP)return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());this.
GP=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());if(((E!==1)||(
this.GQ!==1))&&!this.B1){this.B1=B.zW(B.abi.I0);if(this.B1.D_)B.y_([this,this.Dp
],this.B1,0);}if(((E===1)&&(this.GQ===1))&&!!this.B1){if(this.B1.D_)B.zl([this,this.
Dp],this.B1,0);this.B1=null;}},Si:function(E){var A;if(E<1)E=1;if((E===this.GP)&&(
E===this.GQ))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent()
);this.GP=E;this.GQ=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent(
));if((E!==1)&&!this.B1){this.B1=B.zW(B.abi.I0);if(this.B1.D_)B.y_([this,this.Dp
],this.B1,0);}if((E===1)&&!!this.B1){if(this.B1.D_)B.zl([this,this.Dp],this.B1,0
);this.B1=null;}},A0:function(E){var A;if(E===this.CO)return;this.CO=E;if(!!this.
H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());},Rh:function(){var A;return((
this.F&0x1)===0x1);},AC:function(E){if(E)this.Bc(0x1,0x0);else this.Bc(0x0,0x1);
},_Init:function(aArg){B.Core.Iq._Init.call(this,aArg);this.__proto__=C.Ce;},_Mark:
function(D){var A;B.Core.Iq._Mark.call(this,D);if((A=this.B1)&&(A._cycle!=D))A._Mark(
A._cycle=D);},_className:"Views::Line"};C.AF={CO:0xFFFFFFFF,Ds:function(A4,aClip
,aOffset,AN,aBlend){var A;var B6;var B7;var B4;var B5;var BE=this.CO;aBlend=aBlend&&((
this.F&0x2)===0x2);AN=AN+1;B6=B7=B4=B5=BE;if(AN<256){B6=(B6&0x00FFFFFF)|((((AN*((
B6>>24)&0xFF))>>8)&0xFF)<<24);B7=(B7&0x00FFFFFF)|((((AN*((B7>>24)&0xFF))>>8)&0xFF
)<<24);B4=(B4&0x00FFFFFF)|((((AN*((B4>>24)&0xFF))>>8)&0xFF)<<24);B5=(B5&0x00FFFFFF
)|((((AN*((B5>>24)&0xFF))>>8)&0xFF)<<24);}A4.K_(aClip,B.aam(this.O,aOffset),B6,B7
,B5,B4,aBlend);},A0:function(E){var A;if(E===this.CO)return;this.CO=E;if(!!this.
H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},_Init:function(aArg){B.Core.BI._Init.
call(this,aArg);this.__proto__=C.AF;},_className:"Views::Rectangle"};C.K$={timer:
null,Ab:null,CJ:-1,CO:0xFFFFFFFF,La:0,A9:0,DI:false,Ds:function(A4,aClip,aOffset
,AN,aBlend){var A;var Cz=this.La;if(this.CJ>=0)Cz=this.CJ;if(!this.Ab||(Cz>=this.
Ab.NoOfFrames))return;this.Ab.Update();var B6;var B7;var B5;var B4;var BE=this.CO;
var C$=(((AN+1)*255)>>8)+1;var Aq=B.aam(this.O,aOffset);aBlend=aBlend&&((this.F&
0x2)===0x2);B6=B7=B4=B5=BE;if(C$<256){B6=(B6&0x00FFFFFF)|((((((B6>>24)&0xFF)*C$)>>
8)&0xFF)<<24);B7=(B7&0x00FFFFFF)|((((((B7>>24)&0xFF)*C$)>>8)&0xFF)<<24);B5=(B5&0x00FFFFFF
)|((((((B5>>24)&0xFF)*C$)>>8)&0xFF)<<24);B4=(B4&0x00FFFFFF)|((((((B4>>24)&0xFF)*
C$)>>8)&0xFF)<<24);}A4.Q0(aClip,this.Ab,Cz,Aq,0x1F,B6,B7,B5,B4,aBlend);},Dp:function(
M){var A;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},CN:function(M){var
A;var Cz=this.CJ;var D5=0;if(!!this.Ab)D5=this.Ab.NoOfFrames*this.Ab.FrameDelay;
if((!!this.timer&&(this.CJ<0))&&(D5>0))this.A9=this.timer.Au-(this.La*this.Ab.FrameDelay
);if(!!this.timer&&(D5>0)){var Ad=(this.timer.Au-this.A9)|0;Cz=(Ad/this.Ab.FrameDelay
)|0;if(Ad>=D5){Cz=Cz%this.Ab.NoOfFrames;this.A9=this.timer.Au-(Ad%D5);}}if(((Cz!==
this.CJ)&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ar(this.O);this.CJ=Cz;if(!D5&&!
!this.timer){B.zl([this,this.CN],this.timer,0);this.timer=null;}},A0:function(E){
var A;if(E===this.CO)return;this.CO=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(
this.O);},Hm:function(E){var A;if(this.DI===E)return;this.DI=E;this.CJ=-1;if(!E&&
!!this.timer){B.zl([this,this.CN],this.timer,0);this.timer=null;}if(E){this.timer=
B._GetAutoObject(B.abl.GB);B.y_([this,this.CN],this.timer,0);B.ow([this,this.CN]
,this);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},Pj:function(E){var
A;if(E<0)E=0;if((E===this.La)&&(this.CJ===-1))return;this.La=E;if(!this.timer)this.
CJ=-1;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},X:function(E){var A;
if(E===this.Ab)return;if(!!this.Ab&&this.Ab.D_)B.zl([this,this.Dp],this.Ab,0);this.
Ab=E;this.CJ=-1;if(!!E&&E.D_)B.y_([this,this.Dp],E,0);if(this.DI){this.Hm(false);
this.Hm(true);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},_Init:function(
aArg){B.Core.BI._Init.call(this,aArg);this.__proto__=C.K$;},_Mark:function(D){var
A;B.Core.BI._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Ab)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"
};C.J={timer:null,Ab:null,A9:0,CJ:0,De:0x12,DI:false,K4:false,Ds:function(A4,aClip
,aOffset,AN,aBlend){var A;var Cz=0;if(this.CJ>=0)Cz=this.CJ;if(!this.Ab||(Cz>=this.
Ab.NoOfFrames))return;this.Ab.Update();var P=this.E9();var B_=this.Ab.FrameSize;
if((P[0]>=P[2])||(P[1]>=P[3]))return;var B6;var B7;var B5;var B4;var C$=(((AN+1)
*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);B6=B7=B4=B5=0xFFFFFFFF;if(C$<256
){B6=(B6&0x00FFFFFF)|((((255*C$)>>8)&0xFF)<<24);B7=(B7&0x00FFFFFF)|((((255*C$)>>
8)&0xFF)<<24);B5=(B5&0x00FFFFFF)|((((255*C$)>>8)&0xFF)<<24);B4=(B4&0x00FFFFFF)|((((
255*C$)>>8)&0xFF)<<24);}if(B.z8([P[2]-P[0],P[3]-P[1]],B_))A4.OL(aClip,this.Ab,Cz
,B.aam(this.O,aOffset),B.aaj(this.O.slice(0,2),P.slice(0,2)),B6,B7,B5,B4,aBlend);
else A4.Sq(aClip,this.Ab,Cz,B.aam(P,aOffset),[].concat(AW,B_),B6,B7,B5,B4,aBlend
,true);},Dp:function(M){var A;if(((this.K4&&!!this.Ab)&&(this.Ab.FrameSize[0]>0)
)&&(this.Ab.FrameSize[1]>0))this.L(this.E9());if(!!this.H&&((this.F&0x1)===0x1))
this.H.Ar(this.O);},CN:function(M){var A;var Cz=this.CJ;var D5=0;if(!!this.Ab)D5=
this.Ab.NoOfFrames*this.Ab.FrameDelay;if((!!this.timer&&(this.CJ<0))&&(D5>0))this.
A9=this.timer.Au;if(!!this.timer&&(D5>0)){var Ad=(this.timer.Au-this.A9)|0;Cz=(Ad
/this.Ab.FrameDelay)|0;if(Ad>=D5){Cz=Cz%this.Ab.NoOfFrames;this.A9=this.timer.Au-(
Ad%D5);}}if(((Cz!==this.CJ)&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ar(this.O);this.
CJ=Cz;if(!D5&&!!this.timer){B.zl([this,this.CN],this.timer,0);this.timer=null;}}
,Bd:function(E){if(E===this.K4)return;this.K4=E;if(((E&&!!this.Ab)&&(this.Ab.FrameSize[
0]>0))&&(this.Ab.FrameSize[1]>0))this.L(this.E9());},Hm:function(E){var A;if(this.
DI===E)return;this.DI=E;this.CJ=-1;if(!E&&!!this.timer){B.zl([this,this.CN],this.
timer,0);this.timer=null;}if(E){this.timer=B._GetAutoObject(B.abl.GB);B.y_([this
,this.CN],this.timer,0);B.ow([this,this.CN],this);}if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ar(this.O);},Df:function(E){var A;if(E===this.De)return;this.De=E;if(
!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},X:function(E){var A;if(E===this.
Ab)return;if(!!this.Ab&&this.Ab.D_)B.zl([this,this.Dp],this.Ab,0);this.Ab=E;this.
CJ=-1;if(!!E&&E.D_)B.y_([this,this.Dp],E,0);if(this.DI){this.Hm(false);this.Hm(true
);}if(((this.K4&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.L(this.E9());
if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);},AC:function(E){if(E)this.Bc(
0x1,0x0);else this.Bc(0x0,0x1);},E9:function(){var A;if(!this.Ab)return Dh;var Ae=
this.De;var B_=this.Ab.FrameSize;var Ah=this.O;var width=Ah[2]-Ah[0];var height=
Ah[3]-Ah[1];if(!B_[0]||!B_[1])return Dh;var AG=[0,0,width,height];var Ak=AG;if(((
Ae&0x40)===0x40)){var Ox=((((AG[2]-AG[0])<<16)+((B_[0]/2)|0))/B_[0])|0;var KX=((((
AG[3]-AG[1])<<16)+((B_[1]/2)|0))/B_[1])|0;var Gq=Ox;if(KX>Gq)Gq=KX;Ak=B.aaO(Ak,((
B_[0]*Gq)+32768)>>16);Ak=B.aaL(Ak,((B_[1]*Gq)+32768)>>16);}else if(((Ae&0x80)===
0x80)){var Ox=((((AG[2]-AG[0])<<16)+((B_[0]/2)|0))/B_[0])|0;var KX=((((AG[3]-AG[
1])<<16)+((B_[1]/2)|0))/B_[1])|0;var Gq=Ox;if(KX<Gq)Gq=KX;Ak=B.aaO(Ak,((B_[0]*Gq
)+32768)>>16);Ak=B.aaL(Ak,((B_[1]*Gq)+32768)>>16);}else if(!((Ae&0x100)===0x100)
)Ak=B.aaN(Ak,B_);if((Ak[2]-Ak[0])!==(AG[2]-AG[0])){if(((Ae&0x4)===0x4))Ak=B.aaP(
Ak,AG[2]-(Ak[2]-Ak[0]));else if(((Ae&0x2)===0x2))Ak=B.aaP(Ak,(AG[0]+(((AG[2]-AG[
0])/2)|0))-(((Ak[2]-Ak[0])/2)|0));}if((Ak[3]-Ak[1])!==(AG[3]-AG[1])){if(((Ae&0x20
)===0x20))Ak=B.aaR(Ak,AG[3]-(Ak[3]-Ak[1]));else if(((Ae&0x10)===0x10))Ak=B.aaR(Ak
,(AG[1]+(((AG[3]-AG[1])/2)|0))-(((Ak[3]-Ak[1])/2)|0));}Ak=B.aam(Ak,Ah.slice(0,2)
);return Ak;},_Init:function(aArg){B.Core.BI._Init.call(this,aArg);this.__proto__=
C.J;},_Mark:function(D){var A;B.Core.BI._Mark.call(this,D);if((A=this.timer)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.Ab)&&(A._cycle!=D))A._Mark(A._cycle=D);
},_className:"Views::Image"};C.Text={Fi:null,AS:null,Iy:null,At:B.jm,String:B.jm
,CK:null,Hc:B.vw,FU:B.vw,De:0x12,CO:0xFFFFFFFF,HE:false,FL:false,My:false,Cc:false
,DN:function(){if(!!this.CK){this.N$(this.CK);this.CK=null;}},Ds:function(A4,aClip
,aOffset,AN,aBlend){var A;if((this.At===B.jm)||!this.AS)return;var Ae=this.De;var
font=this.AS;var AG=B.aam(this.O,aOffset);var B6;var B7;var B5;var B4;var col=this.
CO;var C$=(((AN+1)*255)>>8)+1;var Cg=this.At.charCodeAt(0)||0;var P=B.aam(this.E9(
),aOffset);var FE=[AG[0]-P[0],(AG[1]-P[1])-font.Ascent];if(Cg<1)return;B6=B7=B4=
B5=col;if(C$<256){B6=(B6&0x00FFFFFF)|((((((B6>>24)&0xFF)*C$)>>8)&0xFF)<<24);B7=(
B7&0x00FFFFFF)|((((((B7>>24)&0xFF)*C$)>>8)&0xFF)<<24);B5=(B5&0x00FFFFFF)|((((((B5>>
24)&0xFF)*C$)>>8)&0xFF)<<24);B4=(B4&0x00FFFFFF)|((((((B4>>24)&0xFF)*C$)>>8)&0xFF
)<<24);}if(((Ae&0x80)===0x80)){if(this.JO())Ae=(Ae&~0x80)|0x4;else Ae=(Ae&~0x80)|
0x1;}if((Cg===1)&&!((Ae&0x40)===0x40)){A4.ON(aClip,font,this.At,2,(this.At.charCodeAt(
1)||0)-1,AG,FE,0,0,B6,B7,B5,B4,true);return;}var leading=font.Leading;var Gp=(font.
Ascent+font.Descent)+leading;var Uj=aClip[1]-P[1];var Uk=aClip[3]-P[1];var N1=P[
2]-P[0];var y=0;var i=1;var BE=this.At.charCodeAt(1)||0;while(((y+Gp)<Uj)&&(BE>0
)){i=i+BE;y=y+Gp;BE=this.At.charCodeAt(i)||0;}while((y<Uk)&&(BE>0)){var HX=B.aaj(
FE,[0,y]);var G_=0;var CS=false;if(((((Ae&0x40)===0x40)&&((this.At.charCodeAt((i+
BE)-1)||0)!==0x0A))&&((this.At.charCodeAt(i+1)||0)!==0x0A))&&((this.At.charCodeAt(
i+BE)||0)!==0x00))CS=true;if(CS&&!!(Ae&0x6)){var Mi=i+BE;var PV=this.At.indexOf(
String.fromCharCode(0x20),i+1);var PW=this.At.indexOf(String.fromCharCode(0xA0),
i+1);if(((PV<0)||(PV>=Mi))&&((PW<0)||(PW>=Mi)))CS=false;}if(CS)G_=N1;else if(((Ae&
0x4)===0x4))HX=[(HX[0]-N1)+font.FM(this.At,i+1,BE-1),HX[1]];else if(((Ae&0x2)===
0x2))HX=[(HX[0]-((N1/2)|0))+((font.FM(this.At,i+1,BE-1)/2)|0),HX[1]];A4.ON(aClip
,font,this.At,i+1,BE-1,AG,HX,G_,0,B6,B7,B5,B4,true);i=i+BE;y=y+Gp;BE=this.At.charCodeAt(
i)||0;}},L:function(E){var A;if(B.z9(E,this.O))return;var QI;QI=((A=this.O)[2]-A[
0])!==(E[2]-E[0]);if(((QI&&this.HE)&&this.Cc)&&!((this.F&0x2000)===0x2000)){this.
At=B.jm;this.Cc=false;B.ow([this,this.G5],this);}if(((this.FL&&this.Cc)&&!B.z8([(
A=this.O)[2]-A[0],A[3]-A[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.F&0x2000)===0x2000
)){this.At=B.jm;this.Cc=false;B.ow([this,this.G5],this);}B.Core.BI.L.call(this,E
);B.ow([this,this.Me],this);},Ue:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi
)return aIndex;aIndex=B.ze(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},Ud:function(
aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=B.zd(aBidi,aRowStart
,aRowEnd,aIndex);return aIndex;},N$:function(aBidi){if(!aBidi)return;B.qU(aBidi);
},Um:function(aSize){var bidi=null;bidi=B.vj(aSize);return bidi;},Me:function(M){
B.ow(this.Iy,this);},G5:function(M){B.ow([this,this.Go],this);},U1:function(M){this.
Iv(this.Fi.AE);},U2:function(M){var A;var P=this.E9();var Md=this.O.slice(0,2);if(
P[0]>Md[0])P=[].concat(Md[0],P.slice(1,4));if(P[1]>Md[1])P=B.aaS(P,Md[1]);var Bb=
B.aaj(P.slice(0,2),this.O.slice(0,2));var HV=B.aaj([(A=this.O)[2]-A[0],A[3]-A[1]
],[P[2]-P[0],P[3]-P[1]]);if(HV[0]>0)HV=[0,HV[1]];if(HV[1]>0)HV=[HV[0],0];this.Fi.
AE=this.FU;this.Fi.BT=B.aaj(B.aak(this.FU,HV),Bb);this.Fi.BS=B.aaj(this.FU,Bb);}
,Go:function(M){var A;if(this.Cc)return;var width=(A=this.O)[2]-A[0];var height=(
A=this.O)[3]-A[1];var FD=-1;var font=this.AS;if((!!font&&!!!font.Ascent)&&!!!font.
Descent)font=null;if(this.HE){FD=width;if(FD<0)FD=1;}if(!!this.CK){this.N$(this.
CK);this.CK=null;}this.Cc=true;if((this.String!==B.jm)&&!!font){var length=this.
String.length;if(this.My)this.CK=this.Um(length);this.At=font.Sl(this.String,0,FD
,length,this.CK);if(!!this.CK&&!this.Q8()){this.N$(this.CK);this.CK=null;}}else this.
At=B.jm;this.Hc=AW;if((this.FL&&(this.At!==B.jm))&&!!font){var Ae=this.De;var leading=
font.Leading;var By=this.At;var Ml=this.JO();if(((Ae&0x80)===0x80)){if(Ml)Ae=(Ae&
~0x80)|0x4;else Ae=(Ae&~0x80)|0x1;}var Mh=(font.Ascent+font.Descent)+leading;var
Cg=By.charCodeAt(0)||0;var GZ=((height+leading)/Mh)|0;var N4=false;var LU=false;
if(GZ<=0)GZ=1;if(Cg>GZ){var A5=0;var KW=0;var Mj=Cg-1;var B8;var CA=By.length;var
tmp=B.jm;if(!!(Ae&0x110)&&!!(Ae&0x28))Ae&=~0x110;if(!!(Ae&0x110))Ae&=~0x28;if(((
Ae&0x20)===0x20))KW=Cg-GZ;else if(((Ae&0x10)===0x10)||((Ae&0x100)===0x100)){KW=((
Cg-GZ)/2)|0;Mj=(KW+GZ)-1;}else Mj=GZ-1;N4=KW>0;LU=Mj<(Cg-1);for(B8=1;A5<KW;A5=A5+
1)B8=B8+(By.charCodeAt(B8)||0);if(LU)for(CA=B8;A5<Mj;A5=A5+1)CA=CA+(By.charCodeAt(
CA)||0);if(N4){var B0=By.charCodeAt(B8)||0;tmp=(Di+B.aaY(By,B8,B0))+Di;tmp=B.aaT(
tmp,0,(B0+2)&0xFFFF);B8=B8+B0;if((tmp.charCodeAt(B0)||0)===0x0A){tmp=B.aaT(tmp,B0
,0xFEFF);tmp=B.aaT(tmp,B0+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.aaT(tmp
,2,0xFEFF);tmp=B.aaT(tmp,1,0x0A);}else tmp=B.aaT(tmp,1,0xFEFF);}tmp=tmp+B.aaY(By
,B8,CA-B8);if(LU&&(CA>=B8)){var B0=By.charCodeAt(CA)||0;var Dd=(Di+B.aaY(By,CA,B0
))+Di;Dd=B.aaT(Dd,0,(B0+2)&0xFFFF);Dd=B.aaT(Dd,1,0xFEFF);if((Dd.charCodeAt(B0)||
0)===0x0A){Dd=B.aaT(Dd,B0,0xFEFF);Dd=B.aaT(Dd,B0+1,0x0A);}if((Dd.charCodeAt(2)||
0)===0x0A){Dd=B.aaT(Dd,2,0xFEFF);Dd=B.aaT(Dd,1,0x0A);}else Dd=B.aaT(Dd,1,0xFEFF);
tmp=tmp+Dd;}By=String.fromCharCode(GZ&0xFFFF)+tmp;}var A5=0;var Ac=1;var Oj=width;
Cg=By.charCodeAt(0)||0;for(;A5<Cg;A5=A5+1){var G8=N4&&!A5;var G9=LU&&(A5===(Cg-1
));var DW=false;var DX=false;var Jp=Ml;if((Ml&&G8)&&!G9){G8=false;G9=true;}else if((
Ml&&G9)&&!G8){G9=false;G8=true;}var D6=Ac+1;var B0=By.charCodeAt(Ac)||0;var B8=D6;
var CA=(D6+B0)-2;var Of=-1;var Og=-1;if(!this.HE&&(font.FM(By,D6,B0-1)>Oj)){var HI=
Ae;if(((HI&0x2)===0x2)&&!!(HI&0x5))HI&=~0x2;if(((HI&0x2)===0x2))HI&=~0x5;if(((HI&
0x4)===0x4))DW=true;else if(((HI&0x2)===0x2)){DW=true;DX=true;}else DX=true;}if((
By.charCodeAt(B8)||0)===0x0A)B8=B8+1;if((By.charCodeAt(CA)||0)===0x0A)CA=CA-1;while(
DW&&((By.charCodeAt(B8)||0)===0xFEFF))B8=B8+1;while(DX&&((By.charCodeAt(CA)||0)===
0xFEFF))CA=CA-1;DW=DW&&!G9;DX=DX&&!G8;while((((DW||DX)||G8)||G9)&&(B8<CA)){if((DW&&(
Jp||!DX))||G8){if(Of>0)By=B.aaT(By,Of,0xFEFF);By=B.aaT(By,B8,0x2026);Of=B8;B8=B8+
1;Jp=!Jp;G8=false;if(font.FM(By,D6,B0-1)<=Oj){DW=false;DX=false;}else DW=DW||!DX;
}if((DX&&(!Jp||!DW))||G9){if(Og>0)By=B.aaT(By,Og,0xFEFF);By=B.aaT(By,CA,0x2026);
Og=CA;CA=CA-1;Jp=!Jp;G9=false;if(font.FM(By,D6,B0-1)<=Oj){DW=false;DX=false;}else
DX=DX||!DW;}}Ac=Ac+B0;}this.Hc=[font.OQ(By),((By.charCodeAt(0)||0)*Mh)-leading];
this.At=By;}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.O);B.ow([this,this.
Me],this);},Pi:function(E){if(E===this.My)return;this.My=E;this.At=B.jm;this.Cc=
false;B.ow([this,this.G5],this);},Ph:function(E){if(E===this.FL)return;this.FL=E;
if((this.HE||E)||!!this.Iy)this.F=this.F&~0x100;else this.F=this.F|0x100;this.At=
B.jm;this.Cc=false;B.ow([this,this.G5],this);},Sg:function(E){if(B.z$(E,this.Iy)
)return;this.Iy=E;if((this.HE||!!E)||this.FL)this.F=this.F&~0x100;else this.F=this.
F|0x100;},Sh:function(E){if(E===this.Fi)return;if(!!E&&!!E.Jo){B.aa8("%s%*%s",Fn
,E,EF);throw new Error(Fo);}if(!!this.Fi){this.Fi.Mf=null;this.Fi.Jo=null;}this.
Fi=E;if(!!E){E.Mf=[this,this.U2];E.Jo=[this,this.U1];}},Nx:function(E){if(E===this.
HE)return;this.HE=E;if(this.Cc){this.At=B.jm;this.Cc=false;B.ow([this,this.G5],this
);}if((E||this.FL)||!!this.Iy)this.F=this.F&~0x100;else this.F=this.F|0x100;},Iv:
function(E){var A;if(B.z8(E,this.FU))return;this.FU=E;if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ar(this.O);if(this.Cc)B.ow([this,this.Me],this);},Df:function(E){var
A;if(E===this.De)return;this.De=E;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.
O);if(this.FL){this.At=B.jm;this.Cc=false;B.ow([this,this.G5],this);}if(this.Cc)
B.ow([this,this.Me],this);},AV:function(E){if(E===this.String)return;this.String=
E;this.At=B.jm;this.Cc=false;B.ow([this,this.G5],this);},Cj:function(E){if(E===this.
AS)return;this.AS=E;this.At=B.jm;this.Cc=false;B.ow([this,this.G5],this);},A0:function(
E){var A;if(E===this.CO)return;this.CO=E;if(!!this.H&&((this.F&0x1)===0x1))this.
H.Ar(this.O);},JO:function(){if(!this.Cc)this.Go(this);if(!this.CK)return false;
var result=false;var bidi=this.CK;result=B.vi(bidi);return result;},Q8:function(
){if(!this.Cc)this.Go(this);if(!this.CK)return false;var result=false;var bidi=this.
CK;result=B.zc(bidi);return result;},Pv:function(aIndex){if(((this.String===B.jm
)||!this.AS)||this.FL)return AW;if(!this.Cc)this.Go(this);if(aIndex<0)aIndex=0;var
Uv=(this.At.charCodeAt(0)||0)-1;var Ci=this.At.charCodeAt(1)||0;var Ac=1;var Gr=
2;var A5=0;var col=-1;var Fw=true;aIndex=aIndex+2;while((A5<Uv)&&((Ac+Ci)<=aIndex
)){Ac=Ac+Ci;A5=A5+1;Gr=Gr+1;aIndex=aIndex+1;Ci=this.At.charCodeAt(Ac)||0;}if(aIndex>(
Ac+Ci))aIndex=Ac+Ci;if(!!this.CK)aIndex=(Ac+this.Ud(this.CK,(Ac+1)-Gr,(Ac+Ci)-Gr
,(aIndex-Ac)-1))+1;for(;aIndex>Ac;Ac=Ac+1){var A8=this.At.charCodeAt(Ac+1)||0;if(
Fw)col=col+1;Fw=(A8!==0xFEFF)&&(A8!==0x0A);}return[col,A5];},J_:function(Kp){if(((
this.String===B.jm)||!this.AS)||this.FL)return 0;if(!this.Cc)this.Go(this);var A5=
Kp[1];var col=Kp[0];var Ac=1;var Gr=2;var Cg=this.At.charCodeAt(0)||0;var Ci=this.
At.charCodeAt(1)||0;if(A5>=Cg){A5=Cg-1;col=this.At.length;}if(A5<0){A5=0;col=0;}
if(col<0)col=0;while((A5>0)&&(Ci>0)){Ac=Ac+Ci;A5=A5-1;Gr=Gr+1;Ci=this.At.charCodeAt(
Ac)||0;}var D1=Ac;var Mk=(Ac-Gr)+1;var Mi=(Mk+Ci)-1;var KT=false;while((col>=0)&&(
Ci>1)){var A8=this.At.charCodeAt(Ac+1)||0;Ac=Ac+1;Ci=Ci-1;KT=(A8===0xFEFF)||(A8===
0x0A);if(!KT){col=col-1;D1=Ac;}}if((!KT&&(col>=0))&&((this.At.charCodeAt(Ac+1)||
0)===0x00))KT=true;if(KT)D1=D1+1;D1=D1-Gr;if(!!this.CK)D1=Mk+this.Ue(this.CK,Mk,
Mi,D1-Mk);return D1;},Ls:function(Cy){var A;if((this.String===B.jm)||!this.AS)return AW;
if(!this.Cc)this.Go(this);var P=this.E9();if((P[0]>=P[2])||(P[1]>=P[3]))return AW;
var font=this.AS;var Ae=this.De;var Cg=this.At.charCodeAt(0)||0;var leading=font.
Leading;if(Cy[1]<P[1])Cy=[Cy[0],P[1]];if(Cy[1]>=P[3])Cy=[Cy[0],P[3]-1];var Gp=(font.
Ascent+font.Descent)+leading;var A5=((Cy[1]-P[1])/Gp)|0;var CB=this.MN(A5);var Ci=
CB.length;var CS=false;if(((Ae&0x80)===0x80)){if(this.JO())Ae=(Ae&~0x80)|0x4;else
Ae=(Ae&~0x80)|0x1;}if(((Ae&0x40)===0x40)&&(A5<(Cg-1)))CS=true;if((CS&&(CB.indexOf(
String.fromCharCode(0x20),0)<0))&&(CB.indexOf(String.fromCharCode(0xA0),0)<0))CS=
false;if(CS){var Ac=1;var H$=A5;while(H$>0){Ac=Ac+(this.At.charCodeAt(Ac)||0);H$=
H$-1;}if(((this.At.charCodeAt(Ac+1)||0)===0x0A)||((this.At.charCodeAt((Ac+(this.
At.charCodeAt(Ac)||0))-1)||0)===0x0A))CS=false;}var G_=0;var x=0;if(CS)G_=P[2]-P[
0];else if(((Ae&0x4)===0x4))x=(P[2]-P[0])-font.FM(CB,0,Ci);else if(((Ae&0x2)===0x2
))x=(((P[2]-P[0])/2)|0)-((font.FM(CB,0,Ci)/2)|0);var col=font.Q5(CB,0,Ci,(Cy[0]-
P[0])-x,G_);if(col<0)col=0;return[col,A5];},NE:function(Kp){var A;if((this.String===
B.jm)||!this.AS)return AW;if(!this.Cc)this.Go(this);var Cg=this.At.charCodeAt(0)||
0;var font=this.AS;var Ae=this.De;var A5=Kp[1];var col=Kp[0];if(A5>=Cg){A5=Cg-1;
col=this.At.length;}if(A5<0){A5=0;col=0;}var CB=this.MN(A5);var Ci=CB.length;var
P=this.E9();var CS=false;var leading=font.Leading;if(((Ae&0x80)===0x80)){if(this.
JO())Ae=(Ae&~0x80)|0x4;else Ae=(Ae&~0x80)|0x1;}if(((Ae&0x40)===0x40)&&(A5<(Cg-1)
))CS=true;if((CS&&(CB.indexOf(String.fromCharCode(0x20),0)<0))&&(CB.indexOf(String.
fromCharCode(0xA0),0)<0))CS=false;if(CS){var Ac=1;var H$=A5;while(H$>0){Ac=Ac+(this.
At.charCodeAt(Ac)||0);H$=H$-1;}if(((this.At.charCodeAt(Ac+1)||0)===0x0A)||((this.
At.charCodeAt((Ac+(this.At.charCodeAt(Ac)||0))-1)||0)===0x0A))CS=false;}var y=(P[
1]+(A5*((font.Ascent+font.Descent)+leading)))+font.Ascent;var G_=0;var x=P[0];if(
CS)G_=P[2]-P[0];else if(((Ae&0x4)===0x4))x=P[2]-font.FM(CB,0,Ci);else if(((Ae&0x2
)===0x2))x=(x+(((P[2]-P[0])/2)|0))-((font.FM(CB,0,Ci)/2)|0);var pos=font.Q4(CB,0
,Ci,col,G_);if(pos<0)pos=0;return[x+pos,y];},MN:function(Ko){if((this.String===B.
jm)||!this.AS)return B.jm;if(!this.Cc)this.Go(this);var Cg=this.At.charCodeAt(0)||
0;var Ac=1;if((!this.AS||(Ko<0))||(Ko>=Cg))return B.jm;while(Ko>0){Ac=Ac+(this.At.
charCodeAt(Ac)||0);Ko=Ko-1;}var D6=Ac;var Jh=Ac+(this.At.charCodeAt(Ac)||0);var A8=
0x00;do{D6=D6+1;A8=this.At.charCodeAt(D6)||0;}while(((A8===0xFEFF)||(A8===0x0A))&&(
D6<=Jh));do{Jh=Jh-1;A8=this.At.charCodeAt(Jh)||0;}while(((A8===0xFEFF)||(A8===0x0A
))&&(D6<=Jh));var CB=B.aaY(this.At,D6,(Jh-D6)+1);var HT;for(HT=CB.indexOf(String.
fromCharCode(0xFEFF),0);HT>=0;HT=CB.indexOf(String.fromCharCode(0xFEFF),HT+1)){var
D1=HT+1;while((CB.charCodeAt(D1)||0)===0xFEFF)D1=D1+1;CB=B.aa3(CB,HT,D1-HT);}return CB;
},E9:function(){var A;if((this.String===B.jm)||!this.AS)return Dh;if(!this.Cc)this.
Go(this);if(this.At===B.jm)return Dh;var leading=this.AS.Leading;var Mh=(this.AS.
Ascent+this.AS.Descent)+this.AS.Leading;if(B.z8(this.Hc,AW))this.Hc=[this.AS.OQ(
this.At),this.Hc[1]];this.Hc=[this.Hc[0],((this.At.charCodeAt(0)||0)*Mh)-leading
];var Ae=this.De;var Ah=this.O;var width=Ah[2]-Ah[0];var height=Ah[3]-Ah[1];var AG=[
0,0,width,height];var Ak=[].concat(AG.slice(0,2),B.aak(AG.slice(0,2),this.Hc));if(((
Ae&0x80)===0x80)){if(this.JO())Ae=(Ae&~0x80)|0x4;else Ae=(Ae&~0x80)|0x1;}if(((Ae&
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
if((A=this.Iy)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Text"
};C.GO={GT:B.vw,AI:B.aan(4,3,0,null),Hq:B.vx,DG:0,HY:0,Nz:true,Fc:function(E){if(
B.z8(E,this.B2))return;B.Core.ED.Fc.call(this,E);this.AI.Set(3,0,E[0]);this.AI.Set(
3,1,E[1]);this.AI.Set(3,2,1);this.DG=0x45;B.ow([this,this.I7],this);},Ez:function(
E){if(B.z8(E,this.Ck))return;B.Core.ED.Ez.call(this,E);this.AI.Set(2,0,E[0]);this.
AI.Set(2,1,E[1]);this.AI.Set(2,2,1);this.DG=0x45;B.ow([this,this.I7],this);},B$:
function(E){if(B.z8(E,this.A2))return;B.Core.ED.B$.call(this,E);this.AI.Set(1,0,
E[0]);this.AI.Set(1,1,E[1]);this.AI.Set(1,2,1);this.DG=0x45;B.ow([this,this.I7],
this);},Cf:function(E){if(B.z8(E,this.A1))return;B.Core.ED.Cf.call(this,E);this.
AI.Set(0,0,E[0]);this.AI.Set(0,1,E[1]);this.AI.Set(0,2,1);this.DG=0x45;B.ow([this
,this.I7],this);},Uh:function(){return;},OB:function(M){var A;if(this.DG===0x00)
return;if(this.DG===0x45){var EY=B._NewObject(B.Graphics.PB,0);EY=EY.QX(this.AI.
Get(0,0),this.AI.Get(0,1),this.AI.Get(1,0),this.AI.Get(1,1),this.AI.Get(2,0),this.
AI.Get(2,1),this.AI.Get(3,0),this.AI.Get(3,1));if(!!EY){EY.K5(0,0);this.AI.Set(0
,2,EY.Ke*240);EY.K5(1,0);this.AI.Set(1,2,EY.Ke*240);EY.K5(1,1);this.AI.Set(2,2,EY.
Ke*240);EY.K5(0,1);this.AI.Set(3,2,EY.Ke*240);}this.Uh();}this.HY=this.DG;this.DG=
0x00;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());},I7:function(
U$){this.OB(U$);},Pl:function(E){var A;if(E===this.Nz)return;this.Nz=E;if(!!this.
H&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());},Pn:function(E){var A;if(B.
z9(E,this.Hq))return;this.Hq=E;if((((this.HY===0x45)&&(this.DG===0x00))&&!!this.
H)&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());if((this.HY!==0x45)&&(this.
DG===0x00)){this.DG=this.HY;B.ow([this,this.I7],this);}},_Init:function(aArg){B.
Core.ED._Init.call(this,aArg);(this.AI=[]).__proto__=C.GO.AI;this.__proto__=C.GO;
this.F=0x3;},_className:"Views::WarpView"};C.Dg={AT:null,bitmap:null,R:null,P4:1
,P5:0,P6:0,P7:0,P8:1,P9:0,P_:0,P$:0,Qa:1,FP:255,Oe:false,Ds:function(A4,aClip,aOffset
,AN,aBlend){var A;if(!this.bitmap)return;this.bitmap.Update();var Ek=aOffset[0];
var El=aOffset[1];var P=B.z6(this.Hq,[].concat(AW,this.GT));aBlend=aBlend&&((this.
F&0x2)===0x2);AN=AN+1;var Qf;var Qg;var Qh;var Qi;var Ux=this.FP;Qf=Qg=Qh=Qi=Ux;
var GU=255|(255<<8)|(255<<16)|((((AN*Qf)>>8)&0xFF)<<24);var GV=255|(255<<8)|(255<<
16)|((((AN*Qg)>>8)&0xFF)<<24);var Uf=255|(255<<8)|(255<<16)|((((AN*Qh)>>8)&0xFF)<<
24);var Ug=255|(255<<8)|(255<<16)|((((AN*Qi)>>8)&0xFF)<<24);aClip=B.z6(aClip,B.aam(
Dh,aOffset));A4.Sr(aClip,this.bitmap,0,this.AI.Get(0,0)+Ek,this.AI.Get(0,1)+El,this.
AI.Get(0,2),this.AI.Get(1,0)+Ek,this.AI.Get(1,1)+El,this.AI.Get(1,2),this.AI.Get(
2,0)+Ek,this.AI.Get(2,1)+El,this.AI.Get(2,2),this.AI.Get(3,0)+Ek,this.AI.Get(3,1
)+El,this.AI.Get(3,2),P,GU,GV,Uf,Ug,aBlend,this.Nz);},Bs:function(Av){if(!this.R||
!this.AT)return null;var T=(B.Core.E8.isPrototypeOf(Av)?Av:null);var Ax=(B.Core.
Il.isPrototypeOf(Av)?Av:null);if(!T&&!Ax)return null;var Bb=AW;var Aj=this.AT.H;
while(!!Aj&&(Aj!==this.R)){Bb=B.aaj(Bb,Aj.O.slice(0,2));Aj=Aj.H;}var I=this.AT;if(
!!T&&!T.Down)this.AT=null;if(!!T){T.BC=B.aak(this.Jm(T.BC),Bb);T.CE=B.aak(this.Jm(
T.CE),Bb);return I.Bs(T);}if(!!Ax){var UA=B.aak(this.Jm(B.aaj(Ax.BC,Ax.AE)),Bb);
Ax.BC=B.aak(this.Jm(Ax.BC),Bb);Ax.CE=B.aak(this.Jm(Ax.CE),Bb);Ax.AE=B.aaj(Ax.BC,
UA);return I.Bs(Ax);}return C.GO.Bs.call(this,Av);},Ep:function(Ap,V,CI,EH,EL,EK
){var A;if(!this.R||!((this.R.F&0x18)===0x18))return null;var pos=B.zT(Ap);pos=this.
Jm(pos);var DH=B.z6(this.Hq,[].concat(AW,this.GT));if(!B.vt(DH,pos))return null;
var BO=this.R.Ep(B.aam(B.aam([0,0,Ap[2]-Ap[0],Ap[3]-Ap[1]],pos),this.R.O.slice(0
,2)),V,CI,EH,null,EK);if(!!BO)this.AT=BO.Ca;else this.AT=null;if(!!this.AT)return B.
_NewObject(B.Core.Jz,0).Initialize(this,AW);return null;},OB:function(M){C.GO.OB.
call(this,M);this.Oe=false;},Vj:function(){var x1=this.AI.Get(0,0);var y1=this.AI.
Get(0,1);var x2=this.AI.Get(1,0);var y2=this.AI.Get(1,1);var x3=this.AI.Get(2,0);
var y3=this.AI.Get(2,1);var x4=this.AI.Get(3,0);var y4=this.AI.Get(3,1);var Ku=x2-
x3;var Kw=y2-y3;var Kv=x4-x3;var Kx=y4-y3;var KY=((x1-x2)+x3)-x4;var KZ=((y1-y2)+
y3)-y4;var HL=(Ku*Kx)-(Kw*Kv);if(!HL)return;var Jj=((KY*Kx)-(KZ*Kv))/HL;var h=((
Ku*KZ)-(Kw*KY))/HL;var LD=(x2-x1)+(Jj*x2);var LN=(x4-x1)+(h*x4);var BE=x1;var LW=(
y2-y1)+(Jj*y2);var L5=(y4-y1)+(h*y4);var GX=y1;this.P4=L5-(GX*h);this.P5=(BE*h)-
LN;this.P6=(LN*GX)-(BE*L5);this.P7=(GX*Jj)-LW;this.P8=LD-(BE*Jj);this.P9=(BE*LW)-(
LD*GX);this.P_=(LW*h)-(L5*Jj);this.P$=(LN*Jj)-(LD*h);this.Qa=(LD*L5)-(LN*LW);this.
Oe=true;},Jm:function(BW){var A;if(!this.Oe)this.Vj();var OD=BW[0];var OE=BW[1];
var K2=((OD*this.P4)+(OE*this.P5))+this.P6;var K3=((OD*this.P7)+(OE*this.P8))+this.
P9;var Ow=((OD*this.P_)+(OE*this.P$))+this.Qa;if(!!Ow){K2=K2/Ow;K3=K3/Ow;}var DH=
B.z6(this.Hq,[].concat(AW,this.GT));K2=K2*(DH[2]-DH[0]);K3=K3*(DH[3]-DH[1]);return B.
aak([K2|0,K3|0],DH.slice(0,2));},Dp:function(M){var A;var Qj=this.GT;if(!!this.R
)this.bitmap=this.R.Bu;else this.bitmap=null;if(!!this.bitmap)this.GT=this.bitmap.
FrameSize;else this.GT=AW;if(((B.z8(Qj,this.GT)||((this.HY===0x45)&&(this.DG===0x00
)))&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ar(this.GetExtent());if(((this.HY!==
0x45)&&(this.DG===0x00))&&!B.z8(Qj,this.GT)){this.DG=this.HY;B.ow([this,this.I7]
,this);}},J3:function(E){var A;if(E===this.FP)return;this.FP=E;if(!!this.H&&((this.
F&0x1)===0x1))this.H.Ar(this.GetExtent());},Pk:function(E){if(E===this.R)return;
if(!!E&&(E===this.H))throw new Error(HF);if(!!this.R){B.zl([this,this.Dp],this.R
,0);this.bitmap=null;}this.R=E;if(!!E){B.y_([this,this.Dp],E,0);this.bitmap=E.Bu;
}this.Dp(this);},_Init:function(aArg){C.GO._Init.call(this,aArg);this.__proto__=
C.Dg;},_Mark:function(D){var A;C.GO._Mark.call(this,D);if((A=this.AT)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.bitmap)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.R)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpGroup"};C.
VP={QR:0x1,QQ:0x2,QS:0x4,QV:0x8,QU:0x10,QT:0x20,Wg:0x40,Wh:0x80,Wo:0x100};C.Wp={
QR:0x1,QQ:0x2,QS:0x4,QV:0x8,QU:0x10,QT:0x20,Vp:0x40,Vo:0x80,Vu:0x100};C.V1={V0:0
,We:1,Wc:2,Wd:3};
C._Init=function(){C.Ce.__proto__=B.Core.Iq;C.AF.__proto__=B.Core.BI;C.K$.__proto__=
B.Core.BI;C.J.__proto__=B.Core.BI;C.Text.__proto__=B.Core.BI;C.GO.__proto__=B.Core.
ED;C.Dg.__proto__=C.GO;};C._ReInit=function(){};C.CH=function(D){};return C;})();

/* Embedded Wizard */