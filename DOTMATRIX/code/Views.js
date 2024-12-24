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
abh=(function(){var B=EmWiApp;var D={};
var AQ=[1,1];var AO=[0,0];var CU=[0,0,0,0];var CV="\uFEFF";var EA="The Slide Touch Handler:";
var EB="is already connected with a view.";var EC="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Gz="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
D.B2={BM:null,FJ:1,FI:1,Cv:0xFFFFFFFF,C6:function(AM,aClip,aOffset,AA,aBlend){var
A;var ER=this.FI;var ES=this.FJ;var El=B.aak(this.AK,aOffset);var Em=B.aak(this.
AL,aOffset);var FN;var FO;var Bn=this.Cv;if(B.z8(El,Em))return;aBlend=aBlend&&((
this.F&0x2)===0x2);AA=AA+1;FN=FO=Bn;if(AA<256){FN=(FN&0x00FFFFFF)|((((AA*((FN>>24
)&0xFF))>>8)&0xFF)<<24);FO=(FO&0x00FFFFFF)|((((AA*((FO>>24)&0xFF))>>8)&0xFF)<<24
);}if((ER===1)&&(ES===1))AM.Ow(aClip,El,Em,FN,FO,aBlend);else AM.Ox(aClip,El,Em,
ER,ES,FN,FO,aBlend);},GetExtent:function(){var ER=this.FI;var ES=this.FJ;var El=
this.AK;var Em=this.AL;if(((ER===1)&&(ES===1))||B.z8(El,Em))return B.Core.G9.GetExtent.
call(this);var Fi=ER/2;var Fj=ES/2;var GJ=El[0];var GK=El[1];var GL=Em[0];var GM=
Em[1];var CJ=GL-GJ;var CK=GM-GK;var BL=Math.sqrt((CJ*CJ)+(CK*CK));CJ=CJ/BL;CK=CK
/BL;var Nw=GJ+(CK*Fi);var Nx=GK-(CJ*Fi);var J0=GL+(CK*Fj);var J1=GM-(CJ*Fj);var J2=
GL-(CK*Fj);var J3=GM+(CJ*Fj);var J4=GJ-(CK*Fi);var J5=GK+(CJ*Fi);var left=Nw;var
right=Nw;var top=Nx;var bottom=Nx;if(J0<left)left=J0;if(J2<left)left=J2;if(J4<left
)left=J4;if(J0>right)right=J0;if(J2>right)right=J2;if(J4>right)right=J4;if(J1<top
)top=J1;if(J3<top)top=J3;if(J5<top)top=J5;if(J1>bottom)bottom=J1;if(J3>bottom)bottom=
J3;if(J5>bottom)bottom=J5;var Aj=[left|0,top|0,right|0,bottom|0];Aj=[].concat(Aj.
slice(0,2),B.aak(Aj.slice(2,4),AQ));return Aj;},C2:function(T){var A;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ak(this.GetExtent());},PT:function(C){var A;if(C<1)C=1;
if(C===this.FJ)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.GetExtent(
));this.FJ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.GetExtent());if(((
C!==1)||(this.FI!==1))&&!this.BM){this.BM=B.zW(B.abg.Ht);if(this.BM.DJ)B.y_([this
,this.C2],this.BM,0);}if(((C===1)&&(this.FI===1))&&!!this.BM){if(this.BM.DJ)B.zl([
this,this.C2],this.BM,0);this.BM=null;}},M9:function(C){var A;if(C<1)C=1;if(C===
this.FI)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.GetExtent());this.
FI=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.GetExtent());if(((C!==1)||(
this.FJ!==1))&&!this.BM){this.BM=B.zW(B.abg.Ht);if(this.BM.DJ)B.y_([this,this.C2
],this.BM,0);}if(((C===1)&&(this.FJ===1))&&!!this.BM){if(this.BM.DJ)B.zl([this,this.
C2],this.BM,0);this.BM=null;}},PS:function(C){var A;if(C<1)C=1;if((C===this.FI)&&(
C===this.FJ))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.GetExtent()
);this.FI=C;this.FJ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.GetExtent(
));if((C!==1)&&!this.BM){this.BM=B.zW(B.abg.Ht);if(this.BM.DJ)B.y_([this,this.C2
],this.BM,0);}if((C===1)&&!!this.BM){if(this.BM.DJ)B.zl([this,this.C2],this.BM,0
);this.BM=null;}},AX:function(C){var A;if(C===this.Cv)return;this.Cv=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ak(this.GetExtent());},ON:function(){var A;return((
this.F&0x1)===0x1);},A6:function(C){if(C)this.AV(0x1,0x0);else this.AV(0x0,0x1);
},_Init:function(aArg){B.Core.G9._Init.call(this,aArg);this.__proto__=D.B2;},_Mark:
function(E){var A;B.Core.G9._Mark.call(this,E);if((A=this.BM)&&(A._cycle!=E))A._Mark(
A._cycle=E);},_className:"Views::Line"};D.Au={Cv:0xFFFFFFFF,C6:function(AM,aClip
,aOffset,AA,aBlend){var A;var BR;var BS;var BP;var BQ;var Bn=this.Cv;aBlend=aBlend&&((
this.F&0x2)===0x2);AA=AA+1;BR=BS=BP=BQ=Bn;if(AA<256){BR=(BR&0x00FFFFFF)|((((AA*((
BR>>24)&0xFF))>>8)&0xFF)<<24);BS=(BS&0x00FFFFFF)|((((AA*((BS>>24)&0xFF))>>8)&0xFF
)<<24);BP=(BP&0x00FFFFFF)|((((AA*((BP>>24)&0xFF))>>8)&0xFF)<<24);BQ=(BQ&0x00FFFFFF
)|((((AA*((BQ>>24)&0xFF))>>8)&0xFF)<<24);}AM.Js(aClip,B.aam(this.J,aOffset),BR,BS
,BQ,BP,aBlend);},AX:function(C){var A;if(C===this.Cv)return;this.Cv=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ak(this.J);},_Init:function(aArg){B.Core.Bt._Init.
call(this,aArg);this.__proto__=D.Au;},_className:"Views::Rectangle"};D.Jt={timer:
null,Ac:null,Cq:-1,Cv:0xFFFFFFFF,Ju:0,AS:0,Dm:false,C6:function(AM,aClip,aOffset
,AA,aBlend){var A;var Cg=this.Ju;if(this.Cq>=0)Cg=this.Cq;if(!this.Ac||(Cg>=this.
Ac.NoOfFrames))return;this.Ac.Update();var BR;var BS;var BQ;var BP;var Bn=this.Cv;
var CN=(((AA+1)*255)>>8)+1;var Aj=B.aam(this.J,aOffset);aBlend=aBlend&&((this.F&
0x2)===0x2);BR=BS=BP=BQ=Bn;if(CN<256){BR=(BR&0x00FFFFFF)|((((((BR>>24)&0xFF)*CN)>>
8)&0xFF)<<24);BS=(BS&0x00FFFFFF)|((((((BS>>24)&0xFF)*CN)>>8)&0xFF)<<24);BQ=(BQ&0x00FFFFFF
)|((((((BQ>>24)&0xFF)*CN)>>8)&0xFF)<<24);BP=(BP&0x00FFFFFF)|((((((BP>>24)&0xFF)*
CN)>>8)&0xFF)<<24);}AM.Ou(aClip,this.Ac,Cg,Aj,0x1F,BR,BS,BQ,BP,aBlend);},C2:function(
T){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.J);},Cu:function(T){var
A;var Cg=this.Cq;var DG=0;if(!!this.Ac)DG=this.Ac.NoOfFrames*this.Ac.FrameDelay;
if((!!this.timer&&(this.Cq<0))&&(DG>0))this.AS=this.timer.Am-(this.Ju*this.Ac.FrameDelay
);if(!!this.timer&&(DG>0)){var X=(this.timer.Am-this.AS)|0;Cg=(X/this.Ac.FrameDelay
)|0;if(X>=DG){Cg=Cg%this.Ac.NoOfFrames;this.AS=this.timer.Am-(X%DG);}}if(((Cg!==
this.Cq)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ak(this.J);this.Cq=Cg;if(!DG&&!
!this.timer){B.zl([this,this.Cu],this.timer,0);this.timer=null;}},AX:function(C){
var A;if(C===this.Cv)return;this.Cv=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(
this.J);},Gl:function(C){var A;if(this.Dm===C)return;this.Dm=C;this.Cq=-1;if(!C&&
!!this.timer){B.zl([this,this.Cu],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(B.abl.Fz);B.y_([this,this.Cu],this.timer,0);B.ow([this,this.Cu]
,this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.J);},M4:function(C){var
A;if(C<0)C=0;if((C===this.Ju)&&(this.Cq===-1))return;this.Ju=C;if(!this.timer)this.
Cq=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.J);},BW:function(C){var A;
if(C===this.Ac)return;if(!!this.Ac&&this.Ac.DJ)B.zl([this,this.C2],this.Ac,0);this.
Ac=C;this.Cq=-1;if(!!C&&C.DJ)B.y_([this,this.C2],C,0);if(this.Dm){this.Gl(false);
this.Gl(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.J);},_Init:function(
aArg){B.Core.Bt._Init.call(this,aArg);this.__proto__=D.Jt;},_Mark:function(E){var
A;B.Core.Bt._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Ac)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Frame"
};D.Br={timer:null,Ac:null,AS:0,Cq:0,CS:0x12,Dm:false,Jl:false,C6:function(AM,aClip
,aOffset,AA,aBlend){var A;var Cg=0;if(this.Cq>=0)Cg=this.Cq;if(!this.Ac||(Cg>=this.
Ac.NoOfFrames))return;this.Ac.Update();var K=this.Eq();var BV=this.Ac.FrameSize;
if((K[0]>=K[2])||(K[1]>=K[3]))return;var BR;var BS;var BQ;var BP;var CN=(((AA+1)
*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);BR=BS=BP=BQ=0xFFFFFFFF;if(CN<256
){BR=(BR&0x00FFFFFF)|((((255*CN)>>8)&0xFF)<<24);BS=(BS&0x00FFFFFF)|((((255*CN)>>
8)&0xFF)<<24);BQ=(BQ&0x00FFFFFF)|((((255*CN)>>8)&0xFF)<<24);BP=(BP&0x00FFFFFF)|((((
255*CN)>>8)&0xFF)<<24);}if(B.z8([K[2]-K[0],K[3]-K[1]],BV))AM.MB(aClip,this.Ac,Cg
,B.aam(this.J,aOffset),B.aaj(this.J.slice(0,2),K.slice(0,2)),BR,BS,BQ,BP,aBlend);
else AM.P3(aClip,this.Ac,Cg,B.aam(K,aOffset),[].concat(AO,BV),BR,BS,BQ,BP,aBlend
,true);},C2:function(T){var A;if(((this.Jl&&!!this.Ac)&&(this.Ac.FrameSize[0]>0)
)&&(this.Ac.FrameSize[1]>0))this.S(this.Eq());if(!!this.G&&((this.F&0x1)===0x1))
this.G.Ak(this.J);},Cu:function(T){var A;var Cg=this.Cq;var DG=0;if(!!this.Ac)DG=
this.Ac.NoOfFrames*this.Ac.FrameDelay;if((!!this.timer&&(this.Cq<0))&&(DG>0))this.
AS=this.timer.Am;if(!!this.timer&&(DG>0)){var X=(this.timer.Am-this.AS)|0;Cg=(X/
this.Ac.FrameDelay)|0;if(X>=DG){Cg=Cg%this.Ac.NoOfFrames;this.AS=this.timer.Am-(
X%DG);}}if(((Cg!==this.Cq)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ak(this.J);this.
Cq=Cg;if(!DG&&!!this.timer){B.zl([this,this.Cu],this.timer,0);this.timer=null;}}
,Ik:function(C){if(C===this.Jl)return;this.Jl=C;if(((C&&!!this.Ac)&&(this.Ac.FrameSize[
0]>0))&&(this.Ac.FrameSize[1]>0))this.S(this.Eq());},Gl:function(C){var A;if(this.
Dm===C)return;this.Dm=C;this.Cq=-1;if(!C&&!!this.timer){B.zl([this,this.Cu],this.
timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.abl.Fz);B.y_([this
,this.Cu],this.timer,0);B.ow([this,this.Cu],this);}if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ak(this.J);},C8:function(C){var A;if(C===this.CS)return;this.CS=C;if(
!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.J);},BW:function(C){var A;if(C===this.
Ac)return;if(!!this.Ac&&this.Ac.DJ)B.zl([this,this.C2],this.Ac,0);this.Ac=C;this.
Cq=-1;if(!!C&&C.DJ)B.y_([this,this.C2],C,0);if(this.Dm){this.Gl(false);this.Gl(true
);}if(((this.Jl&&!!C)&&(C.FrameSize[0]>0))&&(C.FrameSize[1]>0))this.S(this.Eq());
if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.J);},A6:function(C){if(C)this.AV(
0x1,0x0);else this.AV(0x0,0x1);},Eq:function(){var A;if(!this.Ac)return CU;var Y=
this.CS;var BV=this.Ac.FrameSize;var Aa=this.J;var width=Aa[2]-Aa[0];var height=
Aa[3]-Aa[1];if(!BV[0]||!BV[1])return CU;var At=[0,0,width,height];var Ae=At;if(((
Y&0x40)===0x40)){var Mn=((((At[2]-At[0])<<16)+((BV[0]/2)|0))/BV[0])|0;var Jd=((((
At[3]-At[1])<<16)+((BV[1]/2)|0))/BV[1])|0;var Fr=Mn;if(Jd>Fr)Fr=Jd;Ae=B.aaO(Ae,((
BV[0]*Fr)+32768)>>16);Ae=B.aaL(Ae,((BV[1]*Fr)+32768)>>16);}else if(((Y&0x80)===0x80
)){var Mn=((((At[2]-At[0])<<16)+((BV[0]/2)|0))/BV[0])|0;var Jd=((((At[3]-At[1])<<
16)+((BV[1]/2)|0))/BV[1])|0;var Fr=Mn;if(Jd<Fr)Fr=Jd;Ae=B.aaO(Ae,((BV[0]*Fr)+32768
)>>16);Ae=B.aaL(Ae,((BV[1]*Fr)+32768)>>16);}else if(!((Y&0x100)===0x100))Ae=B.aaN(
Ae,BV);if((Ae[2]-Ae[0])!==(At[2]-At[0])){if(((Y&0x4)===0x4))Ae=B.aaP(Ae,At[2]-(Ae[
2]-Ae[0]));else if(((Y&0x2)===0x2))Ae=B.aaP(Ae,(At[0]+(((At[2]-At[0])/2)|0))-(((
Ae[2]-Ae[0])/2)|0));}if((Ae[3]-Ae[1])!==(At[3]-At[1])){if(((Y&0x20)===0x20))Ae=B.
aaR(Ae,At[3]-(Ae[3]-Ae[1]));else if(((Y&0x10)===0x10))Ae=B.aaR(Ae,(At[1]+(((At[3
]-At[1])/2)|0))-(((Ae[3]-Ae[1])/2)|0));}Ae=B.aam(Ae,Aa.slice(0,2));return Ae;},_Init:
function(aArg){B.Core.Bt._Init.call(this,aArg);this.__proto__=D.Br;},_Mark:function(
E){var A;B.Core.Bt._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A.
_cycle=E);if((A=this.Ac)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Image"
};D.Text={Ey:null,AC:null,He:null,Al:B.jm,String:B.jm,Cr:null,Gd:B.vw,E2:B.vw,CS:
0x12,Cv:0xFFFFFFFF,Gy:false,EV:false,KN:false,B0:false,Dr:function(){if(!!this.Cr
){this.L4(this.Cr);this.Cr=null;}},C6:function(AM,aClip,aOffset,AA,aBlend){var A;
if((this.Al===B.jm)||!this.AC)return;var Y=this.CS;var font=this.AC;var At=B.aam(
this.J,aOffset);var BR;var BS;var BQ;var BP;var col=this.Cv;var CN=(((AA+1)*255)>>
8)+1;var B5=this.Al.charCodeAt(0)||0;var K=B.aam(this.Eq(),aOffset);var EQ=[At[0
]-K[0],(At[1]-K[1])-font.Ascent];if(B5<1)return;BR=BS=BP=BQ=col;if(CN<256){BR=(BR&
0x00FFFFFF)|((((((BR>>24)&0xFF)*CN)>>8)&0xFF)<<24);BS=(BS&0x00FFFFFF)|((((((BS>>
24)&0xFF)*CN)>>8)&0xFF)<<24);BQ=(BQ&0x00FFFFFF)|((((((BQ>>24)&0xFF)*CN)>>8)&0xFF
)<<24);BP=(BP&0x00FFFFFF)|((((((BP>>24)&0xFF)*CN)>>8)&0xFF)<<24);}if(((Y&0x80)===
0x80)){if(this.Ic())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|0x1;}if((B5===1)&&!((Y&0x40
)===0x40)){AM.MD(aClip,font,this.Al,2,(this.Al.charCodeAt(1)||0)-1,At,EQ,0,0,BR,
BS,BQ,BP,true);return;}var leading=font.Leading;var Fq=(font.Ascent+font.Descent
)+leading;var Rq=aClip[1]-K[1];var Rr=aClip[3]-K[1];var LT=K[2]-K[0];var y=0;var
i=1;var Bn=this.Al.charCodeAt(1)||0;while(((y+Fq)<Rq)&&(Bn>0)){i=i+Bn;y=y+Fq;Bn=
this.Al.charCodeAt(i)||0;}while((y<Rr)&&(Bn>0)){var GR=B.aaj(EQ,[0,y]);var F$=0;
var Cz=false;if(((((Y&0x40)===0x40)&&((this.Al.charCodeAt((i+Bn)-1)||0)!==0x0A))&&((
this.Al.charCodeAt(i+1)||0)!==0x0A))&&((this.Al.charCodeAt(i+Bn)||0)!==0x00))Cz=
true;if(Cz&&!!(Y&0x6)){var Kp=i+Bn;var Nu=this.Al.indexOf(String.fromCharCode(0x20
),i+1);var Nv=this.Al.indexOf(String.fromCharCode(0xA0),i+1);if(((Nu<0)||(Nu>=Kp
))&&((Nv<0)||(Nv>=Kp)))Cz=false;}if(Cz)F$=LT;else if(((Y&0x4)===0x4))GR=[(GR[0]-
LT)+font.EW(this.Al,i+1,Bn-1),GR[1]];else if(((Y&0x2)===0x2))GR=[(GR[0]-((LT/2)|
0))+((font.EW(this.Al,i+1,Bn-1)/2)|0),GR[1]];AM.MD(aClip,font,this.Al,i+1,Bn-1,At
,GR,F$,0,BR,BS,BQ,BP,true);i=i+Bn;y=y+Fq;Bn=this.Al.charCodeAt(i)||0;}},S:function(
C){var A;if(B.z9(C,this.J))return;var Ob;Ob=((A=this.J)[2]-A[0])!==(C[2]-C[0]);if(((
Ob&&this.Gy)&&this.B0)&&!((this.F&0x2000)===0x2000)){this.Al=B.jm;this.B0=false;
B.ow([this,this.FX],this);}if(((this.EV&&this.B0)&&!B.z8([(A=this.J)[2]-A[0],A[3
]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000)){this.Al=B.jm;this.
B0=false;B.ow([this,this.FX],this);}B.Core.Bt.S.call(this,C);B.ow([this,this.Kl]
,this);},Rl:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=
B.ze(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},Rk:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=B.zd(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},L4:function(aBidi){if(!aBidi)return;B.qU(aBidi);},Rt:function(
aSize){var bidi=null;bidi=B.vj(aSize);return bidi;},Kl:function(T){B.ow(this.He,
this);},FX:function(T){B.ow([this,this.Fp],this);},RT:function(T){this.Hd(this.Ey.
As);},RU:function(T){var A;var K=this.Eq();var Kk=this.J.slice(0,2);if(K[0]>Kk[0
])K=[].concat(Kk[0],K.slice(1,4));if(K[1]>Kk[1])K=B.aaS(K,Kk[1]);var AU=B.aaj(K.
slice(0,2),this.J.slice(0,2));var GP=B.aaj([(A=this.J)[2]-A[0],A[3]-A[1]],[K[2]-
K[0],K[3]-K[1]]);if(GP[0]>0)GP=[0,GP[1]];if(GP[1]>0)GP=[GP[0],0];this.Ey.As=this.
E2;this.Ey.BE=B.aaj(B.aak(this.E2,GP),AU);this.Ey.BD=B.aaj(this.E2,AU);},Fp:function(
T){var A;if(this.B0)return;var width=(A=this.J)[2]-A[0];var height=(A=this.J)[3]-
A[1];var EP=-1;var font=this.AC;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=
null;if(this.Gy){EP=width;if(EP<0)EP=1;}if(!!this.Cr){this.L4(this.Cr);this.Cr=null;
}this.B0=true;if((this.String!==B.jm)&&!!font){var length=this.String.length;if(
this.KN)this.Cr=this.Rt(length);this.Al=font.PZ(this.String,0,EP,length,this.Cr);
if(!!this.Cr&&!this.OC()){this.L4(this.Cr);this.Cr=null;}}else this.Al=B.jm;this.
Gd=AO;if((this.EV&&(this.Al!==B.jm))&&!!font){var Y=this.CS;var leading=font.Leading;
var Bg=this.Al;var Ks=this.Ic();if(((Y&0x80)===0x80)){if(Ks)Y=(Y&~0x80)|0x4;else
Y=(Y&~0x80)|0x1;}var Ko=(font.Ascent+font.Descent)+leading;var B5=Bg.charCodeAt(
0)||0;var FS=((height+leading)/Ko)|0;var LX=false;var J6=false;if(FS<=0)FS=1;if(
B5>FS){var AN=0;var Jc=0;var Kq=B5-1;var BT;var Ch=Bg.length;var tmp=B.jm;if(!!(
Y&0x110)&&!!(Y&0x28))Y&=~0x110;if(!!(Y&0x110))Y&=~0x28;if(((Y&0x20)===0x20))Jc=B5-
FS;else if(((Y&0x10)===0x10)||((Y&0x100)===0x100)){Jc=((B5-FS)/2)|0;Kq=(Jc+FS)-1;
}else Kq=FS-1;LX=Jc>0;J6=Kq<(B5-1);for(BT=1;AN<Jc;AN=AN+1)BT=BT+(Bg.charCodeAt(BT
)||0);if(J6)for(Ch=BT;AN<Kq;AN=AN+1)Ch=Ch+(Bg.charCodeAt(Ch)||0);if(LX){var BL=Bg.
charCodeAt(BT)||0;tmp=(CV+B.aaY(Bg,BT,BL))+CV;tmp=B.aaT(tmp,0,(BL+2)&0xFFFF);BT=
BT+BL;if((tmp.charCodeAt(BL)||0)===0x0A){tmp=B.aaT(tmp,BL,0xFEFF);tmp=B.aaT(tmp,
BL+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.aaT(tmp,2,0xFEFF);tmp=B.aaT(
tmp,1,0x0A);}else tmp=B.aaT(tmp,1,0xFEFF);}tmp=tmp+B.aaY(Bg,BT,Ch-BT);if(J6&&(Ch>=
BT)){var BL=Bg.charCodeAt(Ch)||0;var CR=(CV+B.aaY(Bg,Ch,BL))+CV;CR=B.aaT(CR,0,(BL+
2)&0xFFFF);CR=B.aaT(CR,1,0xFEFF);if((CR.charCodeAt(BL)||0)===0x0A){CR=B.aaT(CR,BL
,0xFEFF);CR=B.aaT(CR,BL+1,0x0A);}if((CR.charCodeAt(2)||0)===0x0A){CR=B.aaT(CR,2,
0xFEFF);CR=B.aaT(CR,1,0x0A);}else CR=B.aaT(CR,1,0xFEFF);tmp=tmp+CR;}Bg=String.fromCharCode(
FS&0xFFFF)+tmp;}var AN=0;var V=1;var Mc=width;B5=Bg.charCodeAt(0)||0;for(;AN<B5;
AN=AN+1){var F0=LX&&!AN;var F_=J6&&(AN===(B5-1));var Dx=false;var Dy=false;var HP=
Ks;if((Ks&&F0)&&!F_){F0=false;F_=true;}else if((Ks&&F_)&&!F0){F_=false;F0=true;}
var DH=V+1;var BL=Bg.charCodeAt(V)||0;var BT=DH;var Ch=(DH+BL)-2;var L_=-1;var L$=-
1;if(!this.Gy&&(font.EW(Bg,DH,BL-1)>Mc)){var GC=Y;if(((GC&0x2)===0x2)&&!!(GC&0x5
))GC&=~0x2;if(((GC&0x2)===0x2))GC&=~0x5;if(((GC&0x4)===0x4))Dx=true;else if(((GC&
0x2)===0x2)){Dx=true;Dy=true;}else Dy=true;}if((Bg.charCodeAt(BT)||0)===0x0A)BT=
BT+1;if((Bg.charCodeAt(Ch)||0)===0x0A)Ch=Ch-1;while(Dx&&((Bg.charCodeAt(BT)||0)===
0xFEFF))BT=BT+1;while(Dy&&((Bg.charCodeAt(Ch)||0)===0xFEFF))Ch=Ch-1;Dx=Dx&&!F_;Dy=
Dy&&!F0;while((((Dx||Dy)||F0)||F_)&&(BT<Ch)){if((Dx&&(HP||!Dy))||F0){if(L_>0)Bg=
B.aaT(Bg,L_,0xFEFF);Bg=B.aaT(Bg,BT,0x2026);L_=BT;BT=BT+1;HP=!HP;F0=false;if(font.
EW(Bg,DH,BL-1)<=Mc){Dx=false;Dy=false;}else Dx=Dx||!Dy;}if((Dy&&(!HP||!Dx))||F_){
if(L$>0)Bg=B.aaT(Bg,L$,0xFEFF);Bg=B.aaT(Bg,Ch,0x2026);L$=Ch;Ch=Ch-1;HP=!HP;F_=false;
if(font.EW(Bg,DH,BL-1)<=Mc){Dx=false;Dy=false;}else Dy=Dy||!Dx;}}V=V+BL;}this.Gd=[
font.MG(Bg),((Bg.charCodeAt(0)||0)*Ko)-leading];this.Al=Bg;}if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ak(this.J);B.ow([this,this.Kl],this);},M3:function(C){if(C===
this.KN)return;this.KN=C;this.Al=B.jm;this.B0=false;B.ow([this,this.FX],this);},
M2:function(C){if(C===this.EV)return;this.EV=C;if((this.Gy||C)||!!this.He)this.F=
this.F&~0x100;else this.F=this.F|0x100;this.Al=B.jm;this.B0=false;B.ow([this,this.
FX],this);},PQ:function(C){if(B.z$(C,this.He))return;this.He=C;if((this.Gy||!!C)||
this.EV)this.F=this.F&~0x100;else this.F=this.F|0x100;},PR:function(C){if(C===this.
Ey)return;if(!!C&&!!C.HO){B.aa8("%s%*%s",EA,C,EB);throw new Error(EC);}if(!!this.
Ey){this.Ey.Km=null;this.Ey.HO=null;}this.Ey=C;if(!!C){C.Km=[this,this.RU];C.HO=[
this,this.RT];}},Lx:function(C){if(C===this.Gy)return;this.Gy=C;if(this.B0){this.
Al=B.jm;this.B0=false;B.ow([this,this.FX],this);}if((C||this.EV)||!!this.He)this.
F=this.F&~0x100;else this.F=this.F|0x100;},Hd:function(C){var A;if(B.z8(C,this.E2
))return;this.E2=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.J);if(this.B0
)B.ow([this,this.Kl],this);},C8:function(C){var A;if(C===this.CS)return;this.CS=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.J);if(this.EV){this.Al=B.jm;this.
B0=false;B.ow([this,this.FX],this);}if(this.B0)B.ow([this,this.Kl],this);},B8:function(
C){if(C===this.String)return;this.String=C;this.Al=B.jm;this.B0=false;B.ow([this
,this.FX],this);},Cx:function(C){if(C===this.AC)return;this.AC=C;this.Al=B.jm;this.
B0=false;B.ow([this,this.FX],this);},AX:function(C){var A;if(C===this.Cv)return;
this.Cv=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.J);},Ic:function(){if(
!this.B0)this.Fp(this);if(!this.Cr)return false;var result=false;var bidi=this.Cr;
result=B.vi(bidi);return result;},OC:function(){if(!this.B0)this.Fp(this);if(!this.
Cr)return false;var result=false;var bidi=this.Cr;result=B.zc(bidi);return result;
},Na:function(aIndex){if(((this.String===B.jm)||!this.AC)||this.EV)return AO;if(
!this.B0)this.Fp(this);if(aIndex<0)aIndex=0;var RB=(this.Al.charCodeAt(0)||0)-1;
var B7=this.Al.charCodeAt(1)||0;var V=1;var Fs=2;var AN=0;var col=-1;var EI=true;
aIndex=aIndex+2;while((AN<RB)&&((V+B7)<=aIndex)){V=V+B7;AN=AN+1;Fs=Fs+1;aIndex=aIndex+
1;B7=this.Al.charCodeAt(V)||0;}if(aIndex>(V+B7))aIndex=V+B7;if(!!this.Cr)aIndex=(
V+this.Rk(this.Cr,(V+1)-Fs,(V+B7)-Fs,(aIndex-V)-1))+1;for(;aIndex>V;V=V+1){var AR=
this.Al.charCodeAt(V+1)||0;if(EI)col=col+1;EI=(AR!==0xFEFF)&&(AR!==0x0A);}return[
col,AN];},It:function(IL){if(((this.String===B.jm)||!this.AC)||this.EV)return 0;
if(!this.B0)this.Fp(this);var AN=IL[1];var col=IL[0];var V=1;var Fs=2;var B5=this.
Al.charCodeAt(0)||0;var B7=this.Al.charCodeAt(1)||0;if(AN>=B5){AN=B5-1;col=this.
Al.length;}if(AN<0){AN=0;col=0;}if(col<0)col=0;while((AN>0)&&(B7>0)){V=V+B7;AN=AN-
1;Fs=Fs+1;B7=this.Al.charCodeAt(V)||0;}var DC=V;var Kr=(V-Fs)+1;var Kp=(Kr+B7)-1;
var I$=false;while((col>=0)&&(B7>1)){var AR=this.Al.charCodeAt(V+1)||0;V=V+1;B7=
B7-1;I$=(AR===0xFEFF)||(AR===0x0A);if(!I$){col=col-1;DC=V;}}if((!I$&&(col>=0))&&((
this.Al.charCodeAt(V+1)||0)===0x00))I$=true;if(I$)DC=DC+1;DC=DC-Fs;if(!!this.Cr)
DC=Kr+this.Rl(this.Cr,Kr,Kp,DC-Kr);return DC;},JI:function(Cf){var A;if((this.String===
B.jm)||!this.AC)return AO;if(!this.B0)this.Fp(this);var K=this.Eq();if((K[0]>=K[
2])||(K[1]>=K[3]))return AO;var font=this.AC;var Y=this.CS;var B5=this.Al.charCodeAt(
0)||0;var leading=font.Leading;if(Cf[1]<K[1])Cf=[Cf[0],K[1]];if(Cf[1]>=K[3])Cf=[
Cf[0],K[3]-1];var Fq=(font.Ascent+font.Descent)+leading;var AN=((Cf[1]-K[1])/Fq)|
0;var Ci=this.K2(AN);var B7=Ci.length;var Cz=false;if(((Y&0x80)===0x80)){if(this.
Ic())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|0x1;}if(((Y&0x40)===0x40)&&(AN<(B5-1)))Cz=
true;if((Cz&&(Ci.indexOf(String.fromCharCode(0x20),0)<0))&&(Ci.indexOf(String.fromCharCode(
0xA0),0)<0))Cz=false;if(Cz){var V=1;var G3=AN;while(G3>0){V=V+(this.Al.charCodeAt(
V)||0);G3=G3-1;}if(((this.Al.charCodeAt(V+1)||0)===0x0A)||((this.Al.charCodeAt((
V+(this.Al.charCodeAt(V)||0))-1)||0)===0x0A))Cz=false;}var F$=0;var x=0;if(Cz)F$=
K[2]-K[0];else if(((Y&0x4)===0x4))x=(K[2]-K[0])-font.EW(Ci,0,B7);else if(((Y&0x2
)===0x2))x=(((K[2]-K[0])/2)|0)-((font.EW(Ci,0,B7)/2)|0);var col=font.Oz(Ci,0,B7,(
Cf[0]-K[0])-x,F$);if(col<0)col=0;return[col,AN];},LE:function(IL){var A;if((this.
String===B.jm)||!this.AC)return AO;if(!this.B0)this.Fp(this);var B5=this.Al.charCodeAt(
0)||0;var font=this.AC;var Y=this.CS;var AN=IL[1];var col=IL[0];if(AN>=B5){AN=B5-
1;col=this.Al.length;}if(AN<0){AN=0;col=0;}var Ci=this.K2(AN);var B7=Ci.length;var
K=this.Eq();var Cz=false;var leading=font.Leading;if(((Y&0x80)===0x80)){if(this.
Ic())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|0x1;}if(((Y&0x40)===0x40)&&(AN<(B5-1)))Cz=
true;if((Cz&&(Ci.indexOf(String.fromCharCode(0x20),0)<0))&&(Ci.indexOf(String.fromCharCode(
0xA0),0)<0))Cz=false;if(Cz){var V=1;var G3=AN;while(G3>0){V=V+(this.Al.charCodeAt(
V)||0);G3=G3-1;}if(((this.Al.charCodeAt(V+1)||0)===0x0A)||((this.Al.charCodeAt((
V+(this.Al.charCodeAt(V)||0))-1)||0)===0x0A))Cz=false;}var y=(K[1]+(AN*((font.Ascent+
font.Descent)+leading)))+font.Ascent;var F$=0;var x=K[0];if(Cz)F$=K[2]-K[0];else
if(((Y&0x4)===0x4))x=K[2]-font.EW(Ci,0,B7);else if(((Y&0x2)===0x2))x=(x+(((K[2]-
K[0])/2)|0))-((font.EW(Ci,0,B7)/2)|0);var pos=font.Oy(Ci,0,B7,col,F$);if(pos<0)pos=
0;return[x+pos,y];},K2:function(IK){if((this.String===B.jm)||!this.AC)return B.jm;
if(!this.B0)this.Fp(this);var B5=this.Al.charCodeAt(0)||0;var V=1;if((!this.AC||(
IK<0))||(IK>=B5))return B.jm;while(IK>0){V=V+(this.Al.charCodeAt(V)||0);IK=IK-1;
}var DH=V;var HH=V+(this.Al.charCodeAt(V)||0);var AR=0x00;do{DH=DH+1;AR=this.Al.
charCodeAt(DH)||0;}while(((AR===0xFEFF)||(AR===0x0A))&&(DH<=HH));do{HH=HH-1;AR=this.
Al.charCodeAt(HH)||0;}while(((AR===0xFEFF)||(AR===0x0A))&&(DH<=HH));var Ci=B.aaY(
this.Al,DH,(HH-DH)+1);var GN;for(GN=Ci.indexOf(String.fromCharCode(0xFEFF),0);GN>=
0;GN=Ci.indexOf(String.fromCharCode(0xFEFF),GN+1)){var DC=GN+1;while((Ci.charCodeAt(
DC)||0)===0xFEFF)DC=DC+1;Ci=B.aa3(Ci,GN,DC-GN);}return Ci;},Eq:function(){var A;
if((this.String===B.jm)||!this.AC)return CU;if(!this.B0)this.Fp(this);if(this.Al===
B.jm)return CU;var leading=this.AC.Leading;var Ko=(this.AC.Ascent+this.AC.Descent
)+this.AC.Leading;if(B.z8(this.Gd,AO))this.Gd=[this.AC.MG(this.Al),this.Gd[1]];this.
Gd=[this.Gd[0],((this.Al.charCodeAt(0)||0)*Ko)-leading];var Y=this.CS;var Aa=this.
J;var width=Aa[2]-Aa[0];var height=Aa[3]-Aa[1];var At=[0,0,width,height];var Ae=[
].concat(At.slice(0,2),B.aak(At.slice(0,2),this.Gd));if(((Y&0x80)===0x80)){if(this.
Ic())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|0x1;}if(((Y&0x40)===0x40)){var EP;EP=width;
if(EP<0)EP=0;if(EP>(Ae[2]-Ae[0]))Ae=B.aaO(Ae,EP);}if((!!(Y&0x110)&&!!(Y&0x28))&&((
Ae[3]-Ae[1])>(At[3]-At[1])))Y&=~0x110;if(!!(Y&0x110))Y&=~0x28;if((((Y&0x2)===0x2
)&&!!(Y&0x5))&&((Ae[2]-Ae[0])>(At[2]-At[0])))Y&=~0x2;if(((Y&0x2)===0x2))Y&=~0x5;
if((Ae[2]-Ae[0])!==(At[2]-At[0])){if(((Y&0x4)===0x4))Ae=B.aaP(Ae,At[2]-(Ae[2]-Ae[
0]));else if(((Y&0x2)===0x2))Ae=B.aaP(Ae,(At[0]+(((At[2]-At[0])/2)|0))-(((Ae[2]-
Ae[0])/2)|0));}if((Ae[3]-Ae[1])!==(At[3]-At[1])){if(((Y&0x20)===0x20))Ae=B.aaR(Ae
,At[3]-(Ae[3]-Ae[1]));else if(((Y&0x100)===0x100))Ae=B.aaR(Ae,((At[1]+(((At[3]-At[
1])/2)|0))-(((Ae[3]-Ae[1])/2)|0))+(((this.AC.Descent-this.AC.Ascent)/2)|0));else
if(((Y&0x10)===0x10))Ae=B.aaR(Ae,(At[1]+(((At[3]-At[1])/2)|0))-(((Ae[3]-Ae[1])/2
)|0));}Ae=B.aam(Ae,Aa.slice(0,2));return B.aam(Ae,this.E2);},_Init:function(aArg
){B.Core.Bt._Init.call(this,aArg);this.__proto__=D.Text;},_Done:function(){this.
Dr();this.__proto__=B.Core.Bt;B.Core.Bt._Done.call(this);},_Mark:function(E){var
A;B.Core.Bt._Mark.call(this,E);if((A=this.Ey)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.AC)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.He)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);},_className:"Views::Text"};D.FH={FM:B.vw,Aw:B.aan(4,3,
0,null),Gs:B.vx,Dh:0,GS:0,Lz:true,Es:function(C){if(B.z8(C,this.BN))return;B.Core.
D2.Es.call(this,C);this.Aw.Set(3,0,C[0]);this.Aw.Set(3,1,C[1]);this.Aw.Set(3,2,1
);this.Dh=0x45;B.ow([this,this.Hx],this);},D0:function(C){if(B.z8(C,this.B9))return;
B.Core.D2.D0.call(this,C);this.Aw.Set(2,0,C[0]);this.Aw.Set(2,1,C[1]);this.Aw.Set(
2,2,1);this.Dh=0x45;B.ow([this,this.Hx],this);},BX:function(C){if(B.z8(C,this.AL
))return;B.Core.D2.BX.call(this,C);this.Aw.Set(1,0,C[0]);this.Aw.Set(1,1,C[1]);this.
Aw.Set(1,2,1);this.Dh=0x45;B.ow([this,this.Hx],this);},B3:function(C){if(B.z8(C,
this.AK))return;B.Core.D2.B3.call(this,C);this.Aw.Set(0,0,C[0]);this.Aw.Set(0,1,
C[1]);this.Aw.Set(0,2,1);this.Dh=0x45;B.ow([this,this.Hx],this);},Ro:function(){
return;},Mr:function(T){var A;if(this.Dh===0x00)return;if(this.Dh===0x45){var Ei=
B._NewObject(B.Graphics.Nh,0);Ei=Ei.Or(this.Aw.Get(0,0),this.Aw.Get(0,1),this.Aw.
Get(1,0),this.Aw.Get(1,1),this.Aw.Get(2,0),this.Aw.Get(2,1),this.Aw.Get(3,0),this.
Aw.Get(3,1));if(!!Ei){Ei.Jn(0,0);this.Aw.Set(0,2,Ei.Iz*240);Ei.Jn(1,0);this.Aw.Set(
1,2,Ei.Iz*240);Ei.Jn(1,1);this.Aw.Set(2,2,Ei.Iz*240);Ei.Jn(0,1);this.Aw.Set(3,2,
Ei.Iz*240);}this.Ro();}this.GS=this.Dh;this.Dh=0x00;if(!!this.G&&((this.F&0x1)===
0x1))this.G.Ak(this.GetExtent());},Hx:function(R3){this.Mr(R3);},M6:function(C){
var A;if(C===this.Lz)return;this.Lz=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(
this.GetExtent());},M8:function(C){var A;if(B.z9(C,this.Gs))return;this.Gs=C;if((((
this.GS===0x45)&&(this.Dh===0x00))&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ak(this.
GetExtent());if((this.GS!==0x45)&&(this.Dh===0x00)){this.Dh=this.GS;B.ow([this,this.
Hx],this);}},_Init:function(aArg){B.Core.D2._Init.call(this,aArg);(this.Aw=[]).__proto__=
D.FH.Aw;this.__proto__=D.FH;this.F=0x3;},_className:"Views::WarpView"};D.CT={AD:
null,bitmap:null,M:null,ND:1,NE:0,NF:0,NG:0,NH:1,NI:0,NJ:0,NK:0,NL:1,EY:255,L9:false
,C6:function(AM,aClip,aOffset,AA,aBlend){var A;if(!this.bitmap)return;this.bitmap.
Update();var DR=aOffset[0];var DS=aOffset[1];var K=B.z6(this.Gs,[].concat(AO,this.
FM));aBlend=aBlend&&((this.F&0x2)===0x2);AA=AA+1;var NS;var NT;var NU;var NV;var
RD=this.EY;NS=NT=NU=NV=RD;var FN=255|(255<<8)|(255<<16)|((((AA*NS)>>8)&0xFF)<<24
);var FO=255|(255<<8)|(255<<16)|((((AA*NT)>>8)&0xFF)<<24);var Rm=255|(255<<8)|(255<<
16)|((((AA*NU)>>8)&0xFF)<<24);var Rn=255|(255<<8)|(255<<16)|((((AA*NV)>>8)&0xFF)<<
24);aClip=B.z6(aClip,B.aam(CU,aOffset));AM.P6(aClip,this.bitmap,0,this.Aw.Get(0,
0)+DR,this.Aw.Get(0,1)+DS,this.Aw.Get(0,2),this.Aw.Get(1,0)+DR,this.Aw.Get(1,1)+
DS,this.Aw.Get(1,2),this.Aw.Get(2,0)+DR,this.Aw.Get(2,1)+DS,this.Aw.Get(2,2),this.
Aw.Get(3,0)+DR,this.Aw.Get(3,1)+DS,this.Aw.Get(3,2),K,FN,FO,Rm,Rn,aBlend,this.Lz
);},Bb:function(An){if(!this.M||!this.AD)return null;var N=(B.Core.Ep.isPrototypeOf(
An)?An:null);var Aq=(B.Core.G5.isPrototypeOf(An)?An:null);if(!N&&!Aq)return null;
var AU=AO;var Ad=this.AD.G;while(!!Ad&&(Ad!==this.M)){AU=B.aaj(AU,Ad.J.slice(0,2
));Ad=Ad.G;}var H=this.AD;if(!!N&&!N.Down)this.AD=null;if(!!N){N.Bk=B.aak(this.HM(
N.Bk),AU);N.Ck=B.aak(this.HM(N.Ck),AU);return H.Bb(N);}if(!!Aq){var RG=B.aak(this.
HM(B.aaj(Aq.Bk,Aq.As)),AU);Aq.Bk=B.aak(this.HM(Aq.Bk),AU);Aq.Ck=B.aak(this.HM(Aq.
Ck),AU);Aq.As=B.aaj(Aq.Bk,RG);return H.Bb(Aq);}return D.FH.Bb.call(this,An);},DU:
function(Ai,O,Cp,D3,D7,D6){var A;if(!this.M||!((this.M.F&0x18)===0x18))return null;
var pos=B.zT(Ai);pos=this.HM(pos);var Dk=B.z6(this.Gs,[].concat(AO,this.FM));if(
!B.vt(Dk,pos))return null;var By=this.M.DU(B.aam(B.aam([0,0,Ai[2]-Ai[0],Ai[3]-Ai[
1]],pos),this.M.J.slice(0,2)),O,Cp,D3,null,D6);if(!!By)this.AD=By.BY;else this.AD=
null;if(!!this.AD)return B._NewObject(B.Core.HY,0).Initialize(this,AO);return null;
},Mr:function(T){D.FH.Mr.call(this,T);this.L9=false;},Sb:function(){var x1=this.
Aw.Get(0,0);var y1=this.Aw.Get(0,1);var x2=this.Aw.Get(1,0);var y2=this.Aw.Get(1
,1);var x3=this.Aw.Get(2,0);var y3=this.Aw.Get(2,1);var x4=this.Aw.Get(3,0);var y4=
this.Aw.Get(3,1);var IQ=x2-x3;var IS=y2-y3;var IR=x4-x3;var IT=y4-y3;var Je=((x1-
x2)+x3)-x4;var Jf=((y1-y2)+y3)-y4;var GF=(IQ*IT)-(IS*IR);if(!GF)return;var HJ=((
Je*IT)-(Jf*IR))/GF;var h=((IQ*Jf)-(IS*Je))/GF;var JP=(x2-x1)+(HJ*x2);var JZ=(x4-
x1)+(h*x4);var Bn=x1;var J8=(y2-y1)+(HJ*y2);var Ka=(y4-y1)+(h*y4);var FQ=y1;this.
ND=Ka-(FQ*h);this.NE=(Bn*h)-JZ;this.NF=(JZ*FQ)-(Bn*Ka);this.NG=(FQ*HJ)-J8;this.NH=
JP-(Bn*HJ);this.NI=(Bn*J8)-(JP*FQ);this.NJ=(J8*h)-(Ka*HJ);this.NK=(JZ*HJ)-(JP*h);
this.NL=(JP*Ka)-(JZ*J8);this.L9=true;},HM:function(BH){var A;if(!this.L9)this.Sb(
);var Mt=BH[0];var Mu=BH[1];var Ji=((Mt*this.ND)+(Mu*this.NE))+this.NF;var Jj=((
Mt*this.NG)+(Mu*this.NH))+this.NI;var Mm=((Mt*this.NJ)+(Mu*this.NK))+this.NL;if(
!!Mm){Ji=Ji/Mm;Jj=Jj/Mm;}var Dk=B.z6(this.Gs,[].concat(AO,this.FM));Ji=Ji*(Dk[2]-
Dk[0]);Jj=Jj*(Dk[3]-Dk[1]);return B.aak([Ji|0,Jj|0],Dk.slice(0,2));},C2:function(
T){var A;var NW=this.FM;if(!!this.M)this.bitmap=this.M.Bc;else this.bitmap=null;
if(!!this.bitmap)this.FM=this.bitmap.FrameSize;else this.FM=AO;if(((B.z8(NW,this.
FM)||((this.GS===0x45)&&(this.Dh===0x00)))&&!!this.G)&&((this.F&0x1)===0x1))this.
G.Ak(this.GetExtent());if(((this.GS!==0x45)&&(this.Dh===0x00))&&!B.z8(NW,this.FM
)){this.Dh=this.GS;B.ow([this,this.Hx],this);}},In:function(C){var A;if(C===this.
EY)return;this.EY=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ak(this.GetExtent()
);},M5:function(C){if(C===this.M)return;if(!!C&&(C===this.G))throw new Error(Gz);
if(!!this.M){B.zl([this,this.C2],this.M,0);this.bitmap=null;}this.M=C;if(!!C){B.
y_([this,this.C2],C,0);this.bitmap=C.Bc;}this.C2(this);},_Init:function(aArg){D.
FH._Init.call(this,aArg);this.__proto__=D.CT;},_Mark:function(E){var A;D.FH._Mark.
call(this,E);if((A=this.AD)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.bitmap
)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.M)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Views::WarpGroup"};D.SD={Ol:0x1,Oj:0x2,Om:0x4,Op:0x8,Oo:0x10,On:
0x20,S7:0x40,S8:0x80,S$:0x100};D.Ta={Ol:0x1,Oj:0x2,Om:0x4,Op:0x8,Oo:0x10,On:0x20
,Sh:0x40,Sg:0x80,Sm:0x100};D.SR={SP:0,S5:1,S3:2,S4:3};
D._Init=function(){D.B2.__proto__=B.Core.G9;D.Au.__proto__=B.Core.Bt;D.Jt.__proto__=
B.Core.Bt;D.Br.__proto__=B.Core.Bt;D.Text.__proto__=B.Core.Bt;D.FH.__proto__=B.Core.
D2;D.CT.__proto__=D.FH;};D._ReInit=function(){};D.Co=function(E){};return D;})();

/* Embedded Wizard */