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
);if(EmWiApp.abg)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
abg=(function(){var B=EmWiApp;var C={};
var AD=[0,0];var A0=[0,0,0,0];var AT="\uFEFF";
C.Ab={Bg:0xFFFFFFFF,C0:function(AU,aClip,aOffset,A1,aBlend){var A;var Bw;var Bx;var
Bu;var Bv;var Ci=this.Bg;aBlend=aBlend&&((this.F&0x2)===0x2);A1=A1+1;Bw=Bx=Bu=Bv=
Ci;if(A1<256){Bw=(Bw&0x00FFFFFF)|((((A1*((Bw>>24)&0xFF))>>8)&0xFF)<<24);Bx=(Bx&0x00FFFFFF
)|((((A1*((Bx>>24)&0xFF))>>8)&0xFF)<<24);Bu=(Bu&0x00FFFFFF)|((((A1*((Bu>>24)&0xFF
))>>8)&0xFF)<<24);Bv=(Bv&0x00FFFFFF)|((((A1*((Bv>>24)&0xFF))>>8)&0xFF)<<24);}AU.
IO(aClip,B.aam(this.M,aOffset),Bw,Bx,Bv,Bu,aBlend);},Ao:function(E){var A;if(E===
this.Bg)return;this.Bg=E;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.M);},_Init:
function(aArg){B.Core.A9._Init.call(this,aArg);this.__proto__=C.Ab;},_className:
"Views::Rectangle"};C.B2={timer:null,Ag:null,B6:-1,Bg:0xFFFFFFFF,HN:0,AY:0,Da:false
,C0:function(AU,aClip,aOffset,A1,aBlend){var A;var BX=this.HN;if(this.B6>=0)BX=this.
B6;if(!this.Ag||(BX>=this.Ag.NoOfFrames))return;this.Ag.Update();var Bw;var Bx;var
Bv;var Bu;var Ci=this.Bg;var Cv=(((A1+1)*255)>>8)+1;var Ax=B.aam(this.M,aOffset);
aBlend=aBlend&&((this.F&0x2)===0x2);Bw=Bx=Bu=Bv=Ci;if(Cv<256){Bw=(Bw&0x00FFFFFF)|((((((
Bw>>24)&0xFF)*Cv)>>8)&0xFF)<<24);Bx=(Bx&0x00FFFFFF)|((((((Bx>>24)&0xFF)*Cv)>>8)&
0xFF)<<24);Bv=(Bv&0x00FFFFFF)|((((((Bv>>24)&0xFF)*Cv)>>8)&0xFF)<<24);Bu=(Bu&0x00FFFFFF
)|((((((Bu>>24)&0xFF)*Cv)>>8)&0xFF)<<24);}AU.LT(aClip,this.Ag,BX,Ax,0x1F,Bw,Bx,Bv
,Bu,aBlend);},Hn:function(An){var A;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(
this.M);},CS:function(An){var A;var BX=this.B6;var Dv=0;if(!!this.Ag)Dv=this.Ag.
NoOfFrames*this.Ag.FrameDelay;if((!!this.timer&&(this.B6<0))&&(Dv>0))this.AY=this.
timer.Ap-(this.HN*this.Ag.FrameDelay);if(!!this.timer&&(Dv>0)){var Af=(this.timer.
Ap-this.AY)|0;BX=(Af/this.Ag.FrameDelay)|0;if(Af>=Dv){BX=BX%this.Ag.NoOfFrames;this.
AY=this.timer.Ap-(Af%Dv);}}if(((BX!==this.B6)&&!!this.I)&&((this.F&0x1)===0x1))this.
I.Au(this.M);this.B6=BX;if(!Dv&&!!this.timer){B.zl([this,this.CS],this.timer,0);
this.timer=null;}},Ao:function(E){var A;if(E===this.Bg)return;this.Bg=E;if(!!this.
I&&((this.F&0x1)===0x1))this.I.Au(this.M);},FU:function(E){var A;if(this.Da===E)
return;this.Da=E;this.B6=-1;if(!E&&!!this.timer){B.zl([this,this.CS],this.timer,
0);this.timer=null;}if(E){this.timer=B._GetAutoObject(B.abk.Fg);B.y_([this,this.
CS],this.timer,0);B.ow([this,this.CS],this);}if(!!this.I&&((this.F&0x1)===0x1))this.
I.Au(this.M);},Mc:function(E){var A;if(E<0)E=0;if((E===this.HN)&&(this.B6===-1))
return;this.HN=E;if(!this.timer)this.B6=-1;if(!!this.I&&((this.F&0x1)===0x1))this.
I.Au(this.M);},C1:function(E){var A;if(E===this.Ag)return;if(!!this.Ag&&this.Ag.
FT)B.zl([this,this.Hn],this.Ag,0);this.Ag=E;this.B6=-1;if(!!E&&E.FT)B.y_([this,this.
Hn],E,0);if(this.Da){this.FU(false);this.FU(true);}if(!!this.I&&((this.F&0x1)===
0x1))this.I.Au(this.M);},EW:function(E){if(E)this.AR(0x1,0x0);else this.AR(0x0,0x1
);},_Init:function(aArg){B.Core.A9._Init.call(this,aArg);this.__proto__=C.B2;},_Mark:
function(D){var A;B.Core.A9._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))
A._Mark(A._cycle=D);if((A=this.Ag)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Views::Frame"};C.Ar={timer:null,Ag:null,AY:0,B6:0,Bg:0xFFFFFFFF,Et:0x12,Da:false
,HF:false,C0:function(AU,aClip,aOffset,A1,aBlend){var A;var BX=0;if(this.B6>=0)BX=
this.B6;if(!this.Ag||(BX>=this.Ag.NoOfFrames))return;this.Ag.Update();var T=this.
FO();var BW=this.Ag.FrameSize;if((T[0]>=T[2])||(T[1]>=T[3]))return;var Bw;var Bx;
var Bv;var Bu;var Ci=this.Bg;var Cv=(((A1+1)*255)>>8)+1;aBlend=aBlend&&((this.F&
0x2)===0x2);Bw=Bx=Bu=Bv=Ci;if(Cv<256){Bw=(Bw&0x00FFFFFF)|((((((Bw>>24)&0xFF)*Cv)>>
8)&0xFF)<<24);Bx=(Bx&0x00FFFFFF)|((((((Bx>>24)&0xFF)*Cv)>>8)&0xFF)<<24);Bv=(Bv&0x00FFFFFF
)|((((((Bv>>24)&0xFF)*Cv)>>8)&0xFF)<<24);Bu=(Bu&0x00FFFFFF)|((((((Bu>>24)&0xFF)*
Cv)>>8)&0xFF)<<24);}if(B.z8([T[2]-T[0],T[3]-T[1]],BW))AU.LR(aClip,this.Ag,BX,B.aam(
this.M,aOffset),B.aaj(this.M.slice(0,2),T.slice(0,2)),Bw,Bx,Bv,Bu,aBlend);else AU.
Mt(aClip,this.Ag,BX,B.aam(T,aOffset),[].concat(AD,BW),Bw,Bx,Bv,Bu,aBlend,true);}
,Hn:function(An){var A;if(((this.HF&&!!this.Ag)&&(this.Ag.FrameSize[0]>0))&&(this.
Ag.FrameSize[1]>0))this.Z(this.FO());if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(
this.M);},CS:function(An){var A;var BX=this.B6;var Dv=0;if(!!this.Ag)Dv=this.Ag.
NoOfFrames*this.Ag.FrameDelay;if((!!this.timer&&(this.B6<0))&&(Dv>0))this.AY=this.
timer.Ap;if(!!this.timer&&(Dv>0)){var Af=(this.timer.Ap-this.AY)|0;BX=(Af/this.Ag.
FrameDelay)|0;if(Af>=Dv){BX=BX%this.Ag.NoOfFrames;this.AY=this.timer.Ap-(Af%Dv);
}}if(((BX!==this.B6)&&!!this.I)&&((this.F&0x1)===0x1))this.I.Au(this.M);this.B6=
BX;if(!Dv&&!!this.timer){B.zl([this,this.CS],this.timer,0);this.timer=null;}},FV:
function(E){if(E===this.HF)return;this.HF=E;if(((E&&!!this.Ag)&&(this.Ag.FrameSize[
0]>0))&&(this.Ag.FrameSize[1]>0))this.Z(this.FO());},Ao:function(E){var A;if(E===
this.Bg)return;this.Bg=E;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.M);},FU:
function(E){var A;if(this.Da===E)return;this.Da=E;this.B6=-1;if(!E&&!!this.timer
){B.zl([this,this.CS],this.timer,0);this.timer=null;}if(E){this.timer=B._GetAutoObject(
B.abk.Fg);B.y_([this,this.CS],this.timer,0);B.ow([this,this.CS],this);}if(!!this.
I&&((this.F&0x1)===0x1))this.I.Au(this.M);},GN:function(E){var A;if(E===this.Et)
return;this.Et=E;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.M);},C1:function(
E){var A;if(E===this.Ag)return;if(!!this.Ag&&this.Ag.FT)B.zl([this,this.Hn],this.
Ag,0);this.Ag=E;this.B6=-1;if(!!E&&E.FT)B.y_([this,this.Hn],E,0);if(this.Da){this.
FU(false);this.FU(true);}if(((this.HF&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1
]>0))this.Z(this.FO());if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.M);},FO:
function(){var A;if(!this.Ag)return A0;var Al=this.Et;var BW=this.Ag.FrameSize;var
AA=this.M;var width=AA[2]-AA[0];var height=AA[3]-AA[1];if(!BW[0]||!BW[1])return A0;
var As=[0,0,width,height];var Aa=As;if(((Al&0x40)===0x40)){var Kg=((((As[2]-As[0
])<<16)+((BW[0]/2)|0))/BW[0])|0;var Hy=((((As[3]-As[1])<<16)+((BW[1]/2)|0))/BW[1
])|0;var B0=Kg;if(Hy>B0)B0=Hy;Aa=B.aaO(Aa,((BW[0]*B0)+32768)>>16);Aa=B.aaL(Aa,((
BW[1]*B0)+32768)>>16);}else if(((Al&0x80)===0x80)){var Kg=((((As[2]-As[0])<<16)+((
BW[0]/2)|0))/BW[0])|0;var Hy=((((As[3]-As[1])<<16)+((BW[1]/2)|0))/BW[1])|0;var B0=
Kg;if(Hy<B0)B0=Hy;Aa=B.aaO(Aa,((BW[0]*B0)+32768)>>16);Aa=B.aaL(Aa,((BW[1]*B0)+32768
)>>16);}else if(!((Al&0x100)===0x100))Aa=B.aaN(Aa,BW);if((Aa[2]-Aa[0])!==(As[2]-
As[0])){if(((Al&0x4)===0x4))Aa=B.aaP(Aa,As[2]-(Aa[2]-Aa[0]));else if(((Al&0x2)===
0x2))Aa=B.aaP(Aa,(As[0]+(((As[2]-As[0])/2)|0))-(((Aa[2]-Aa[0])/2)|0));}if((Aa[3]-
Aa[1])!==(As[3]-As[1])){if(((Al&0x20)===0x20))Aa=B.aaR(Aa,As[3]-(Aa[3]-Aa[1]));else
if(((Al&0x10)===0x10))Aa=B.aaR(Aa,(As[1]+(((As[3]-As[1])/2)|0))-(((Aa[3]-Aa[1])/
2)|0));}Aa=B.aam(Aa,AA.slice(0,2));return Aa;},_Init:function(aArg){B.Core.A9._Init.
call(this,aArg);this.__proto__=C.Ar;},_Mark:function(D){var A;B.Core.A9._Mark.call(
this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ag)&&(A.
_cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"};C.Text={BQ:null,A2:B.
jm,String:B.jm,CW:null,Fc:B.vw,Et:0x12,Bg:0xFFFFFFFF,Gh:false,FN:false,IK:false,
Cx:false,DO:function(){if(!!this.CW){this.JP(this.CW);this.CW=null;}},C0:function(
AU,aClip,aOffset,A1,aBlend){var A;if((this.A2===B.jm)||!this.BQ)return;var Al=this.
Et;var font=this.BQ;var As=B.aam(this.M,aOffset);var Bw;var Bx;var Bv;var Bu;var
Nl=this.Bg;var Cv=(((A1+1)*255)>>8)+1;var D6=this.A2.charCodeAt(0)||0;var T=B.aam(
this.FO(),aOffset);var E4=[As[0]-T[0],(As[1]-T[1])-font.Ascent];if(D6<1)return;Bw=
Bx=Bu=Bv=Nl;if(Cv<256){Bw=(Bw&0x00FFFFFF)|((((((Bw>>24)&0xFF)*Cv)>>8)&0xFF)<<24);
Bx=(Bx&0x00FFFFFF)|((((((Bx>>24)&0xFF)*Cv)>>8)&0xFF)<<24);Bv=(Bv&0x00FFFFFF)|((((((
Bv>>24)&0xFF)*Cv)>>8)&0xFF)<<24);Bu=(Bu&0x00FFFFFF)|((((((Bu>>24)&0xFF)*Cv)>>8)&
0xFF)<<24);}if(((Al&0x80)===0x80)){if(this.IR())Al=(Al&~0x80)|0x4;else Al=(Al&~0x80
)|0x1;}if((D6===1)&&!((Al&0x40)===0x40)){AU.Kw(aClip,font,this.A2,2,(this.A2.charCodeAt(
1)||0)-1,As,E4,0,0,Bw,Bx,Bv,Bu,true);return;}var leading=font.Leading;var Kf=(font.
Ascent+font.Descent)+leading;var Nj=aClip[1]-T[1];var Nk=aClip[3]-T[1];var JG=T[
2]-T[0];var FK=0;var G=1;var Ci=this.A2.charCodeAt(1)||0;while(((FK+Kf)<Nj)&&(Ci>
0)){G=G+Ci;FK=FK+Kf;Ci=this.A2.charCodeAt(G)||0;}while((FK<Nk)&&(Ci>0)){var FB=B.
aaj(E4,[0,FK]);var Lx=0;var Io=false;if(((((Al&0x40)===0x40)&&((this.A2.charCodeAt((
G+Ci)-1)||0)!==0x0A))&&((this.A2.charCodeAt(G+1)||0)!==0x0A))&&((this.A2.charCodeAt(
G+Ci)||0)!==0x00))Io=true;if(Io&&!!(Al&0x6)){var Lw=G+Ci;var K5=this.A2.indexOf(
String.fromCharCode(0x20),G+1);var K6=this.A2.indexOf(String.fromCharCode(0xA0),
G+1);if(((K5<0)||(K5>=Lw))&&((K6<0)||(K6>=Lw)))Io=false;}if(Io)Lx=JG;else if(((Al&
0x4)===0x4))FB=[(FB[0]-JG)+font.GG(this.A2,G+1,Ci-1),FB[1]];else if(((Al&0x2)===
0x2))FB=[(FB[0]-((JG/2)|0))+((font.GG(this.A2,G+1,Ci-1)/2)|0),FB[1]];AU.Kw(aClip
,font,this.A2,G+1,Ci-1,As,FB,Lx,0,Bw,Bx,Bv,Bu,true);G=G+Ci;FK=FK+Kf;Ci=this.A2.charCodeAt(
G)||0;}},Z:function(E){var A;if(B.z9(E,this.M))return;var Lv;Lv=((A=this.M)[2]-A[
0])!==(E[2]-E[0]);if(((Lv&&this.Gh)&&this.Cx)&&!((this.F&0x2000)===0x2000)){this.
A2=B.jm;this.Cx=false;B.ow([this,this.E7],this);}if(((this.FN&&this.Cx)&&!B.z8([(
A=this.M)[2]-A[0],A[3]-A[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.F&0x2000)===0x2000
)){this.A2=B.jm;this.Cx=false;B.ow([this,this.E7],this);}B.Core.A9.Z.call(this,E
);B.ow([this,this.Ka],this);},JP:function(aBidi){if(!aBidi)return;B.qU(aBidi);},
Nn:function(aSize){var bidi=null;bidi=B.vj(aSize);return bidi;},Ka:function(An){
},E7:function(An){B.ow([this,this.Iv],this);},Iv:function(An){var A;if(this.Cx)return;
var width=(A=this.M)[2]-A[0];var height=(A=this.M)[3]-A[1];var Er=-1;var font=this.
BQ;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Gh){Er=width;if(
Er<0)Er=1;}if(!!this.CW){this.JP(this.CW);this.CW=null;}this.Cx=true;if((this.String
!==B.jm)&&!!font){var length=this.String.length;if(this.IK)this.CW=this.Nn(length
);this.A2=font.Mr(this.String,0,Er,length,this.CW);if(!!this.CW&&!this.LY()){this.
JP(this.CW);this.CW=null;}}else this.A2=B.jm;this.Fc=AD;if((this.FN&&(this.A2!==
B.jm))&&!!font){var Al=this.Et;var leading=font.Leading;var Bb=this.A2;var IB=this.
IR();if(((Al&0x80)===0x80)){if(IB)Al=(Al&~0x80)|0x4;else Al=(Al&~0x80)|0x1;}var Iz=(
font.Ascent+font.Descent)+leading;var D6=Bb.charCodeAt(0)||0;var E1=((height+leading
)/Iz)|0;var JJ=false;var If=false;if(E1<=0)E1=1;if(D6>E1){var DM=0;var Hx=0;var IA=
D6-1;var BE;var BY=Bb.length;var tmp=B.jm;if(!!(Al&0x110)&&!!(Al&0x28))Al&=~0x110;
if(!!(Al&0x110))Al&=~0x28;if(((Al&0x20)===0x20))Hx=D6-E1;else if(((Al&0x10)===0x10
)||((Al&0x100)===0x100)){Hx=((D6-E1)/2)|0;IA=(Hx+E1)-1;}else IA=E1-1;JJ=Hx>0;If=
IA<(D6-1);for(BE=1;DM<Hx;DM=DM+1)BE=BE+(Bb.charCodeAt(BE)||0);if(If)for(BY=BE;DM<
IA;DM=DM+1)BY=BY+(Bb.charCodeAt(BY)||0);if(JJ){var Cl=Bb.charCodeAt(BE)||0;tmp=(
AT+B.aaY(Bb,BE,Cl))+AT;tmp=B.aaT(tmp,0,(Cl+2)&0xFFFF);BE=BE+Cl;if((tmp.charCodeAt(
Cl)||0)===0x0A){tmp=B.aaT(tmp,Cl,0xFEFF);tmp=B.aaT(tmp,Cl+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.aaT(tmp,2,0xFEFF);tmp=B.aaT(tmp,1,0x0A);}else tmp=B.aaT(tmp
,1,0xFEFF);}tmp=tmp+B.aaY(Bb,BE,BY-BE);if(If&&(BY>=BE)){var Cl=Bb.charCodeAt(BY)||
0;var CA=(AT+B.aaY(Bb,BY,Cl))+AT;CA=B.aaT(CA,0,(Cl+2)&0xFFFF);CA=B.aaT(CA,1,0xFEFF
);if((CA.charCodeAt(Cl)||0)===0x0A){CA=B.aaT(CA,Cl,0xFEFF);CA=B.aaT(CA,Cl+1,0x0A
);}if((CA.charCodeAt(2)||0)===0x0A){CA=B.aaT(CA,2,0xFEFF);CA=B.aaT(CA,1,0x0A);}else
CA=B.aaT(CA,1,0xFEFF);tmp=tmp+CA;}Bb=String.fromCharCode(E1&0xFFFF)+tmp;}var DM=
0;var CN=1;var J4=width;D6=Bb.charCodeAt(0)||0;for(;DM<D6;DM=DM+1){var E9=JJ&&!DM;
var E_=If&&(DM===(D6-1));var Dn=false;var Do=false;var Gu=IB;if((IB&&E9)&&!E_){E9=
false;E_=true;}else if((IB&&E_)&&!E9){E_=false;E9=true;}var Hz=CN+1;var Cl=Bb.charCodeAt(
CN)||0;var BE=Hz;var BY=(Hz+Cl)-2;var JW=-1;var JX=-1;if(!this.Gh&&(font.GG(Bb,Hz
,Cl-1)>J4)){var Ft=Al;if(((Ft&0x2)===0x2)&&!!(Ft&0x5))Ft&=~0x2;if(((Ft&0x2)===0x2
))Ft&=~0x5;if(((Ft&0x4)===0x4))Dn=true;else if(((Ft&0x2)===0x2)){Dn=true;Do=true;
}else Do=true;}if((Bb.charCodeAt(BE)||0)===0x0A)BE=BE+1;if((Bb.charCodeAt(BY)||0
)===0x0A)BY=BY-1;while(Dn&&((Bb.charCodeAt(BE)||0)===0xFEFF))BE=BE+1;while(Do&&((
Bb.charCodeAt(BY)||0)===0xFEFF))BY=BY-1;Dn=Dn&&!E_;Do=Do&&!E9;while((((Dn||Do)||
E9)||E_)&&(BE<BY)){if((Dn&&(Gu||!Do))||E9){if(JW>0)Bb=B.aaT(Bb,JW,0xFEFF);Bb=B.aaT(
Bb,BE,0x2026);JW=BE;BE=BE+1;Gu=!Gu;E9=false;if(font.GG(Bb,Hz,Cl-1)<=J4){Dn=false;
Do=false;}else Dn=Dn||!Do;}if((Do&&(!Gu||!Dn))||E_){if(JX>0)Bb=B.aaT(Bb,JX,0xFEFF
);Bb=B.aaT(Bb,BY,0x2026);JX=BY;BY=BY-1;Gu=!Gu;E_=false;if(font.GG(Bb,Hz,Cl-1)<=J4
){Dn=false;Do=false;}else Do=Do||!Dn;}}CN=CN+Cl;}this.Fc=[font.Ky(Bb),((Bb.charCodeAt(
0)||0)*Iz)-leading];this.A2=Bb;}if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(this.
M);B.ow([this,this.Ka],this);},L8:function(E){if(E===this.IK)return;this.IK=E;this.
A2=B.jm;this.Cx=false;B.ow([this,this.E7],this);},L7:function(E){if(E===this.FN)
return;this.FN=E;if(this.Gh||E)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
A2=B.jm;this.Cx=false;B.ow([this,this.E7],this);},Mq:function(E){if(E===this.Gh)
return;this.Gh=E;if(this.Cx){this.A2=B.jm;this.Cx=false;B.ow([this,this.E7],this
);}if(E||this.FN)this.F=this.F&~0x100;else this.F=this.F|0x100;},GN:function(E){
var A;if(E===this.Et)return;this.Et=E;if(!!this.I&&((this.F&0x1)===0x1))this.I.Au(
this.M);if(this.FN){this.A2=B.jm;this.Cx=false;B.ow([this,this.E7],this);}if(this.
Cx)B.ow([this,this.Ka],this);},Bk:function(E){if(E===this.String)return;this.String=
E;this.A2=B.jm;this.Cx=false;B.ow([this,this.E7],this);},Ed:function(E){if(E===this.
BQ)return;this.BQ=E;this.A2=B.jm;this.Cx=false;B.ow([this,this.E7],this);},Ao:function(
E){var A;if(E===this.Bg)return;this.Bg=E;if(!!this.I&&((this.F&0x1)===0x1))this.
I.Au(this.M);},IR:function(){if(!this.Cx)this.Iv(this);if(!this.CW)return false;
var result=false;var bidi=this.CW;result=B.vi(bidi);return result;},LY:function(
){if(!this.Cx)this.Iv(this);if(!this.CW)return false;var result=false;var bidi=this.
CW;result=B.zc(bidi);return result;},FO:function(){var A;if((this.String===B.jm)||
!this.BQ)return A0;if(!this.Cx)this.Iv(this);if(this.A2===B.jm)return A0;var leading=
this.BQ.Leading;var Iz=(this.BQ.Ascent+this.BQ.Descent)+this.BQ.Leading;if(B.z8(
this.Fc,AD))this.Fc=[this.BQ.Ky(this.A2),this.Fc[1]];this.Fc=[this.Fc[0],((this.
A2.charCodeAt(0)||0)*Iz)-leading];var Al=this.Et;var AA=this.M;var width=AA[2]-AA[
0];var height=AA[3]-AA[1];var As=[0,0,width,height];var Aa=[].concat(As.slice(0,
2),B.aak(As.slice(0,2),this.Fc));if(((Al&0x80)===0x80)){if(this.IR())Al=(Al&~0x80
)|0x4;else Al=(Al&~0x80)|0x1;}if(((Al&0x40)===0x40)){var Er;Er=width;if(Er<0)Er=
0;if(Er>(Aa[2]-Aa[0]))Aa=B.aaO(Aa,Er);}if((!!(Al&0x110)&&!!(Al&0x28))&&((Aa[3]-Aa[
1])>(As[3]-As[1])))Al&=~0x110;if(!!(Al&0x110))Al&=~0x28;if((((Al&0x2)===0x2)&&!!(
Al&0x5))&&((Aa[2]-Aa[0])>(As[2]-As[0])))Al&=~0x2;if(((Al&0x2)===0x2))Al&=~0x5;if((
Aa[2]-Aa[0])!==(As[2]-As[0])){if(((Al&0x4)===0x4))Aa=B.aaP(Aa,As[2]-(Aa[2]-Aa[0]
));else if(((Al&0x2)===0x2))Aa=B.aaP(Aa,(As[0]+(((As[2]-As[0])/2)|0))-(((Aa[2]-Aa[
0])/2)|0));}if((Aa[3]-Aa[1])!==(As[3]-As[1])){if(((Al&0x20)===0x20))Aa=B.aaR(Aa,
As[3]-(Aa[3]-Aa[1]));else if(((Al&0x100)===0x100))Aa=B.aaR(Aa,((As[1]+(((As[3]-As[
1])/2)|0))-(((Aa[3]-Aa[1])/2)|0))+(((this.BQ.Descent-this.BQ.Ascent)/2)|0));else
if(((Al&0x10)===0x10))Aa=B.aaR(Aa,(As[1]+(((As[3]-As[1])/2)|0))-(((Aa[3]-Aa[1])/
2)|0));}Aa=B.aam(Aa,AA.slice(0,2));return Aa;},_Init:function(aArg){B.Core.A9._Init.
call(this,aArg);this.__proto__=C.Text;},_Done:function(){this.DO();this.__proto__=
B.Core.A9;B.Core.A9._Done.call(this);},_Mark:function(D){var A;B.Core.A9._Mark.call(
this,D);if((A=this.BQ)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Text"
};C.OU={LK:0x1,LJ:0x2,LL:0x4,LO:0x8,LN:0x10,LM:0x20,Pm:0x40,Pn:0x80,Ps:0x100};C.
Pt={LK:0x1,LJ:0x2,LL:0x4,LO:0x8,LN:0x10,LM:0x20,Of:0x40,Oe:0x80,Ol:0x100};C.O6={
O5:0,Pk:1,Pi:2,Pj:3};
C._Init=function(){C.Ab.__proto__=B.Core.A9;C.B2.__proto__=B.Core.A9;C.Ar.__proto__=
B.Core.A9;C.Text.__proto__=B.Core.A9;};C._ReInit=function(){};C.Bs=function(D){};
return C;})();

/* Embedded Wizard */