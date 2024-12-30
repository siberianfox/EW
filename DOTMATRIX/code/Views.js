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
var A6=[1,1];var A2=[0,0];var Dm=[0,0,0,0];var Dn="\uFEFF";var ER="The Slide Touch Handler:";
var FB="is already connected with a view.";var FC="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var HZ="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.Bg={B5:null,G1:1,G0:1,CV:0xFFFFFFFF,Dz:function(A4,aClip,aOffset,AP,aBlend){var
A;var FS=this.G0;var FT=this.G1;var Fb=B.aak(this.A0,aOffset);var Fc=B.aak(this.
A1,aOffset);var G5;var G6;var By=this.CV;if(B.z8(Fb,Fc))return;aBlend=aBlend&&((
this.G&0x2)===0x2);AP=AP+1;G5=G6=By;if(AP<256){G5=(G5&0x00FFFFFF)|((((AP*((G5>>24
)&0xFF))>>8)&0xFF)<<24);G6=(G6&0x00FFFFFF)|((((AP*((G6>>24)&0xFF))>>8)&0xFF)<<24
);}if((FS===1)&&(FT===1))A4.R7(aClip,Fb,Fc,G5,G6,aBlend);else A4.R8(aClip,Fb,Fc,
FS,FT,G5,G6,aBlend);},GetExtent:function(){var FS=this.G0;var FT=this.G1;var Fb=
this.A0;var Fc=this.A1;if(((FS===1)&&(FT===1))||B.z8(Fb,Fc))return B.Core.IP.GetExtent.
call(this);var Gv=FS/2;var Gw=FT/2;var H9=Fb[0];var H_=Fb[1];var H$=Fc[0];var Ia=
Fc[1];var C$=H$-H9;var Da=Ia-H_;var B4=Math.sqrt((C$*C$)+(Da*Da));C$=C$/B4;Da=Da
/B4;var QV=H9+(Da*Gv);var QW=H_-(C$*Gv);var Mj=H$+(Da*Gw);var Mk=Ia-(C$*Gw);var Ml=
H$-(Da*Gw);var Mm=Ia+(C$*Gw);var Mn=H9-(Da*Gv);var Mo=H_+(C$*Gv);var left=QV;var
right=QV;var top=QW;var bottom=QW;if(Mj<left)left=Mj;if(Ml<left)left=Ml;if(Mn<left
)left=Mn;if(Mj>right)right=Mj;if(Ml>right)right=Ml;if(Mn>right)right=Mn;if(Mk<top
)top=Mk;if(Mm<top)top=Mm;if(Mo<top)top=Mo;if(Mk>bottom)bottom=Mk;if(Mm>bottom)bottom=
Mm;if(Mo>bottom)bottom=Mo;var As=[left|0,top|0,right|0,bottom|0];As=[].concat(As.
slice(0,2),B.aak(As.slice(2,4),A6));return As;},Du:function(N){var A;if(!!this.I&&((
this.G&0x1)===0x1))this.I.At(this.GetExtent());},Tn:function(E){var A;if(E<1)E=1;
if(E===this.G1)return;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.GetExtent(
));this.G1=E;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.GetExtent());if(((
E!==1)||(this.G0!==1))&&!this.B5){this.B5=B.zW(B.abi.I8);if(this.B5.En)B.y_([this
,this.Du],this.B5,0);}if(((E===1)&&(this.G0===1))&&!!this.B5){if(this.B5.En)B.zl([
this,this.Du],this.B5,0);this.B5=null;}},Qm:function(E){var A;if(E<1)E=1;if(E===
this.G0)return;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.GetExtent());this.
G0=E;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.GetExtent());if(((E!==1)||(
this.G1!==1))&&!this.B5){this.B5=B.zW(B.abi.I8);if(this.B5.En)B.y_([this,this.Du
],this.B5,0);}if(((E===1)&&(this.G1===1))&&!!this.B5){if(this.B5.En)B.zl([this,this.
Du],this.B5,0);this.B5=null;}},Tm:function(E){var A;if(E<1)E=1;if((E===this.G0)&&(
E===this.G1))return;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.GetExtent()
);this.G0=E;this.G1=E;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.GetExtent(
));if((E!==1)&&!this.B5){this.B5=B.zW(B.abi.I8);if(this.B5.En)B.y_([this,this.Du
],this.B5,0);}if((E===1)&&!!this.B5){if(this.B5.En)B.zl([this,this.Du],this.B5,0
);this.B5=null;}},AV:function(E){var A;if(E===this.CV)return;this.CV=E;if(!!this.
I&&((this.G&0x1)===0x1))this.I.At(this.GetExtent());},N5:function(){var A;return((
this.G&0x1)===0x1);},AQ:function(E){if(E)this.Bd(0x1,0x0);else this.Bd(0x0,0x1);
},_Init:function(aArg){B.Core.IP._Init.call(this,aArg);this.__proto__=C.Bg;},_Mark:
function(D){var A;B.Core.IP._Mark.call(this,D);if((A=this.B5)&&(A._cycle!=D))A._Mark(
A._cycle=D);},_className:"Views::Line"};C.AH={CV:0xFFFFFFFF,Dz:function(A4,aClip
,aOffset,AP,aBlend){var A;var B$;var Ca;var B9;var B_;var By=this.CV;aBlend=aBlend&&((
this.G&0x2)===0x2);AP=AP+1;B$=Ca=B9=B_=By;if(AP<256){B$=(B$&0x00FFFFFF)|((((AP*((
B$>>24)&0xFF))>>8)&0xFF)<<24);Ca=(Ca&0x00FFFFFF)|((((AP*((Ca>>24)&0xFF))>>8)&0xFF
)<<24);B9=(B9&0x00FFFFFF)|((((AP*((B9>>24)&0xFF))>>8)&0xFF)<<24);B_=(B_&0x00FFFFFF
)|((((AP*((B_>>24)&0xFF))>>8)&0xFF)<<24);}A4.Lx(aClip,B.aam(this.R,aOffset),B$,Ca
,B_,B9,aBlend);},AV:function(E){var A;if(E===this.CV)return;this.CV=E;if(!!this.
I&&((this.G&0x1)===0x1))this.I.At(this.R);},_Init:function(aArg){B.Core.BL._Init.
call(this,aArg);this.__proto__=C.AH;},_className:"Views::Rectangle"};C.Ly={timer:
null,V:null,CQ:-1,CV:0xFFFFFFFF,Lz:0,A_:0,DQ:false,Dz:function(A4,aClip,aOffset,
AP,aBlend){var A;var CE=this.Lz;if(this.CQ>=0)CE=this.CQ;if(!this.V||(CE>=this.V.
NoOfFrames))return;this.V.Update();var B$;var Ca;var B_;var B9;var By=this.CV;var
Dc=(((AP+1)*255)>>8)+1;var As=B.aam(this.R,aOffset);aBlend=aBlend&&((this.G&0x2)===
0x2);B$=Ca=B9=B_=By;if(Dc<256){B$=(B$&0x00FFFFFF)|((((((B$>>24)&0xFF)*Dc)>>8)&0xFF
)<<24);Ca=(Ca&0x00FFFFFF)|((((((Ca>>24)&0xFF)*Dc)>>8)&0xFF)<<24);B_=(B_&0x00FFFFFF
)|((((((B_>>24)&0xFF)*Dc)>>8)&0xFF)<<24);B9=(B9&0x00FFFFFF)|((((((B9>>24)&0xFF)*
Dc)>>8)&0xFF)<<24);}A4.R5(aClip,this.V,CE,As,0x1F,B$,Ca,B_,B9,aBlend);},Du:function(
N){var A;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.R);},CU:function(N){var
A;var CE=this.CQ;var Eg=0;if(!!this.V)Eg=this.V.NoOfFrames*this.V.FrameDelay;if((
!!this.timer&&(this.CQ<0))&&(Eg>0))this.A_=this.timer.Ax-(this.Lz*this.V.FrameDelay
);if(!!this.timer&&(Eg>0)){var Af=(this.timer.Ax-this.A_)|0;CE=(Af/this.V.FrameDelay
)|0;if(Af>=Eg){CE=CE%this.V.NoOfFrames;this.A_=this.timer.Ax-(Af%Eg);}}if(((CE!==
this.CQ)&&!!this.I)&&((this.G&0x1)===0x1))this.I.At(this.R);this.CQ=CE;if(!Eg&&!
!this.timer){B.zl([this,this.CU],this.timer,0);this.timer=null;}},AV:function(E){
var A;if(E===this.CV)return;this.CV=E;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(
this.R);},HA:function(E){var A;if(this.DQ===E)return;this.DQ=E;this.CQ=-1;if(!E&&
!!this.timer){B.zl([this,this.CU],this.timer,0);this.timer=null;}if(E){this.timer=
B._GetAutoObject(B.abl.GO);B.y_([this,this.CU],this.timer,0);B.ow([this,this.CU]
,this);}if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.R);},Qf:function(E){var
A;if(E<0)E=0;if((E===this.Lz)&&(this.CQ===-1))return;this.Lz=E;if(!this.timer)this.
CQ=-1;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.R);},Q:function(E){var A;
if(E===this.V)return;if(!!this.V&&this.V.En)B.zl([this,this.Du],this.V,0);this.V=
E;this.CQ=-1;if(!!E&&E.En)B.y_([this,this.Du],E,0);if(this.DQ){this.HA(false);this.
HA(true);}if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.R);},_Init:function(aArg
){B.Core.BL._Init.call(this,aArg);this.__proto__=C.Ly;},_Mark:function(D){var A;
B.Core.BL._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D
);if((A=this.V)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"};
C.F={timer:null,V:null,A_:0,CQ:0,Dh:0x12,DQ:false,Lr:false,Dz:function(A4,aClip,
aOffset,AP,aBlend){var A;var CE=0;if(this.CQ>=0)CE=this.CQ;if(!this.V||(CE>=this.
V.NoOfFrames))return;this.V.Update();var S=this.Fj();var Cd=this.V.FrameSize;if((
S[0]>=S[2])||(S[1]>=S[3]))return;var B$;var Ca;var B_;var B9;var Dc=(((AP+1)*255
)>>8)+1;aBlend=aBlend&&((this.G&0x2)===0x2);B$=Ca=B9=B_=0xFFFFFFFF;if(Dc<256){B$=(
B$&0x00FFFFFF)|((((255*Dc)>>8)&0xFF)<<24);Ca=(Ca&0x00FFFFFF)|((((255*Dc)>>8)&0xFF
)<<24);B_=(B_&0x00FFFFFF)|((((255*Dc)>>8)&0xFF)<<24);B9=(B9&0x00FFFFFF)|((((255*
Dc)>>8)&0xFF)<<24);}if(B.z8([S[2]-S[0],S[3]-S[1]],Cd))A4.PH(aClip,this.V,CE,B.aam(
this.R,aOffset),B.aaj(this.R.slice(0,2),S.slice(0,2)),B$,Ca,B_,B9,aBlend);else A4.
Tu(aClip,this.V,CE,B.aam(S,aOffset),[].concat(A2,Cd),B$,Ca,B_,B9,aBlend,true);},
Du:function(N){var A;if(((this.Lr&&!!this.V)&&(this.V.FrameSize[0]>0))&&(this.V.
FrameSize[1]>0))this.K(this.Fj());if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.
R);},CU:function(N){var A;var CE=this.CQ;var Eg=0;if(!!this.V)Eg=this.V.NoOfFrames
*this.V.FrameDelay;if((!!this.timer&&(this.CQ<0))&&(Eg>0))this.A_=this.timer.Ax;
if(!!this.timer&&(Eg>0)){var Af=(this.timer.Ax-this.A_)|0;CE=(Af/this.V.FrameDelay
)|0;if(Af>=Eg){CE=CE%this.V.NoOfFrames;this.A_=this.timer.Ax-(Af%Eg);}}if(((CE!==
this.CQ)&&!!this.I)&&((this.G&0x1)===0x1))this.I.At(this.R);this.CQ=CE;if(!Eg&&!
!this.timer){B.zl([this,this.CU],this.timer,0);this.timer=null;}},Ao:function(E){
if(E===this.Lr)return;this.Lr=E;if(((E&&!!this.V)&&(this.V.FrameSize[0]>0))&&(this.
V.FrameSize[1]>0))this.K(this.Fj());},HA:function(E){var A;if(this.DQ===E)return;
this.DQ=E;this.CQ=-1;if(!E&&!!this.timer){B.zl([this,this.CU],this.timer,0);this.
timer=null;}if(E){this.timer=B._GetAutoObject(B.abl.GO);B.y_([this,this.CU],this.
timer,0);B.ow([this,this.CU],this);}if(!!this.I&&((this.G&0x1)===0x1))this.I.At(
this.R);},Dj:function(E){var A;if(E===this.Dh)return;this.Dh=E;if(!!this.I&&((this.
G&0x1)===0x1))this.I.At(this.R);},Q:function(E){var A;if(E===this.V)return;if(!!
this.V&&this.V.En)B.zl([this,this.Du],this.V,0);this.V=E;this.CQ=-1;if(!!E&&E.En
)B.y_([this,this.Du],E,0);if(this.DQ){this.HA(false);this.HA(true);}if(((this.Lr&&
!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.K(this.Fj());if(!!this.I&&((this.
G&0x1)===0x1))this.I.At(this.R);},AQ:function(E){if(E)this.Bd(0x1,0x0);else this.
Bd(0x0,0x1);},Fj:function(){var A;if(!this.V)return Dm;var Ah=this.Dh;var Cd=this.
V.FrameSize;var Aj=this.R;var width=Aj[2]-Aj[0];var height=Aj[3]-Aj[1];if(!Cd[0]||
!Cd[1])return Dm;var AF=[0,0,width,height];var Am=AF;if(((Ah&0x40)===0x40)){var Pq=((((
AF[2]-AF[0])<<16)+((Cd[0]/2)|0))/Cd[0])|0;var Lj=((((AF[3]-AF[1])<<16)+((Cd[1]/2
)|0))/Cd[1])|0;var GE=Pq;if(Lj>GE)GE=Lj;Am=B.aaO(Am,((Cd[0]*GE)+32768)>>16);Am=B.
aaL(Am,((Cd[1]*GE)+32768)>>16);}else if(((Ah&0x80)===0x80)){var Pq=((((AF[2]-AF[
0])<<16)+((Cd[0]/2)|0))/Cd[0])|0;var Lj=((((AF[3]-AF[1])<<16)+((Cd[1]/2)|0))/Cd[
1])|0;var GE=Pq;if(Lj<GE)GE=Lj;Am=B.aaO(Am,((Cd[0]*GE)+32768)>>16);Am=B.aaL(Am,((
Cd[1]*GE)+32768)>>16);}else if(!((Ah&0x100)===0x100))Am=B.aaN(Am,Cd);if((Am[2]-Am[
0])!==(AF[2]-AF[0])){if(((Ah&0x4)===0x4))Am=B.aaP(Am,AF[2]-(Am[2]-Am[0]));else if(((
Ah&0x2)===0x2))Am=B.aaP(Am,(AF[0]+(((AF[2]-AF[0])/2)|0))-(((Am[2]-Am[0])/2)|0));
}if((Am[3]-Am[1])!==(AF[3]-AF[1])){if(((Ah&0x20)===0x20))Am=B.aaR(Am,AF[3]-(Am[3
]-Am[1]));else if(((Ah&0x10)===0x10))Am=B.aaR(Am,(AF[1]+(((AF[3]-AF[1])/2)|0))-(((
Am[3]-Am[1])/2)|0));}Am=B.aam(Am,Aj.slice(0,2));return Am;},_Init:function(aArg){
B.Core.BL._Init.call(this,aArg);this.__proto__=C.F;},_Mark:function(D){var A;B.Core.
BL._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.V)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"};C.Text={
Fv:null,AT:null,IZ:null,Aw:B.jm,String:B.jm,CR:null,Ho:B.vw,Ge:B.vw,Dh:0x12,CV:0xFFFFFFFF
,HY:false,FZ:false,M$:false,Ch:false,DU:function(){if(!!this.CR){this.O4(this.CR
);this.CR=null;}},Dz:function(A4,aClip,aOffset,AP,aBlend){var A;if((this.Aw===B.
jm)||!this.AT)return;var Ah=this.Dh;var font=this.AT;var AF=B.aam(this.R,aOffset
);var B$;var Ca;var B_;var B9;var col=this.CV;var Dc=(((AP+1)*255)>>8)+1;var Ck=
this.Aw.charCodeAt(0)||0;var S=B.aam(this.Fj(),aOffset);var FR=[AF[0]-S[0],(AF[1
]-S[1])-font.Ascent];if(Ck<1)return;B$=Ca=B9=B_=col;if(Dc<256){B$=(B$&0x00FFFFFF
)|((((((B$>>24)&0xFF)*Dc)>>8)&0xFF)<<24);Ca=(Ca&0x00FFFFFF)|((((((Ca>>24)&0xFF)*
Dc)>>8)&0xFF)<<24);B_=(B_&0x00FFFFFF)|((((((B_>>24)&0xFF)*Dc)>>8)&0xFF)<<24);B9=(
B9&0x00FFFFFF)|((((((B9>>24)&0xFF)*Dc)>>8)&0xFF)<<24);}if(((Ah&0x80)===0x80)){if(
this.JW())Ah=(Ah&~0x80)|0x4;else Ah=(Ah&~0x80)|0x1;}if((Ck===1)&&!((Ah&0x40)===0x40
)){A4.PK(aClip,font,this.Aw,2,(this.Aw.charCodeAt(1)||0)-1,AF,FR,0,0,B$,Ca,B_,B9
,true);return;}var leading=font.Leading;var GD=(font.Ascent+font.Descent)+leading;
var VL=aClip[1]-S[1];var VM=aClip[3]-S[1];var OS=S[2]-S[0];var y=0;var i=1;var By=
this.Aw.charCodeAt(1)||0;while(((y+GD)<VL)&&(By>0)){i=i+By;y=y+GD;By=this.Aw.charCodeAt(
i)||0;}while((y<VM)&&(By>0)){var Ig=B.aaj(FR,[0,y]);var Hk=0;var CY=false;if(((((
Ah&0x40)===0x40)&&((this.Aw.charCodeAt((i+By)-1)||0)!==0x0A))&&((this.Aw.charCodeAt(
i+1)||0)!==0x0A))&&((this.Aw.charCodeAt(i+By)||0)!==0x00))CY=true;if(CY&&!!(Ah&0x6
)){var MO=i+By;var QT=this.Aw.indexOf(String.fromCharCode(0x20),i+1);var QU=this.
Aw.indexOf(String.fromCharCode(0xA0),i+1);if(((QT<0)||(QT>=MO))&&((QU<0)||(QU>=MO
)))CY=false;}if(CY)Hk=OS;else if(((Ah&0x4)===0x4))Ig=[(Ig[0]-OS)+font.F0(this.Aw
,i+1,By-1),Ig[1]];else if(((Ah&0x2)===0x2))Ig=[(Ig[0]-((OS/2)|0))+((font.F0(this.
Aw,i+1,By-1)/2)|0),Ig[1]];A4.PK(aClip,font,this.Aw,i+1,By-1,AF,Ig,Hk,0,B$,Ca,B_,
B9,true);i=i+By;y=y+GD;By=this.Aw.charCodeAt(i)||0;}},K:function(E){var A;if(B.z9(
E,this.R))return;var RN;RN=((A=this.R)[2]-A[0])!==(E[2]-E[0]);if(((RN&&this.HY)&&
this.Ch)&&!((this.G&0x2000)===0x2000)){this.Aw=B.jm;this.Ch=false;B.ow([this,this.
Hf],this);}if(((this.FZ&&this.Ch)&&!B.z8([(A=this.R)[2]-A[0],A[3]-A[1]],[E[2]-E[
0],E[3]-E[1]]))&&!((this.G&0x2000)===0x2000)){this.Aw=B.jm;this.Ch=false;B.ow([this
,this.Hf],this);}B.Core.BL.K.call(this,E);B.ow([this,this.MK],this);},VG:function(
aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=B.ze(aBidi,aRowStart
,aRowEnd,aIndex);return aIndex;},VF:function(aBidi,aRowStart,aRowEnd,aIndex){if(
!aBidi)return aIndex;aIndex=B.zd(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;}
,O4:function(aBidi){if(!aBidi)return;B.qU(aBidi);},VO:function(aSize){var bidi=null;
bidi=B.vj(aSize);return bidi;},MK:function(N){B.ow(this.IZ,this);},Hf:function(N
){B.ow([this,this.GC],this);},Wz:function(N){this.IW(this.Fv.AE);},WA:function(N
){var A;var S=this.Fj();var MJ=this.R.slice(0,2);if(S[0]>MJ[0])S=[].concat(MJ[0]
,S.slice(1,4));if(S[1]>MJ[1])S=B.aaS(S,MJ[1]);var Bc=B.aaj(S.slice(0,2),this.R.slice(
0,2));var Ie=B.aaj([(A=this.R)[2]-A[0],A[3]-A[1]],[S[2]-S[0],S[3]-S[1]]);if(Ie[0
]>0)Ie=[0,Ie[1]];if(Ie[1]>0)Ie=[Ie[0],0];this.Fv.AE=this.Ge;this.Fv.BX=B.aaj(B.aak(
this.Ge,Ie),Bc);this.Fv.BW=B.aaj(this.Ge,Bc);},GC:function(N){var A;if(this.Ch)return;
var width=(A=this.R)[2]-A[0];var height=(A=this.R)[3]-A[1];var FQ=-1;var font=this.
AT;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.HY){FQ=width;if(
FQ<0)FQ=1;}if(!!this.CR){this.O4(this.CR);this.CR=null;}this.Ch=true;if((this.String
!==B.jm)&&!!font){var length=this.String.length;if(this.M$)this.CR=this.VO(length
);this.Aw=font.Tp(this.String,0,FQ,length,this.CR);if(!!this.CR&&!this.Sb()){this.
O4(this.CR);this.CR=null;}}else this.Aw=B.jm;this.Ho=A2;if((this.FZ&&(this.Aw!==
B.jm))&&!!font){var Ah=this.Dh;var leading=font.Leading;var BC=this.Aw;var MR=this.
JW();if(((Ah&0x80)===0x80)){if(MR)Ah=(Ah&~0x80)|0x4;else Ah=(Ah&~0x80)|0x1;}var MN=(
font.Ascent+font.Descent)+leading;var Ck=BC.charCodeAt(0)||0;var G$=((height+leading
)/MN)|0;var OV=false;var Mp=false;if(G$<=0)G$=1;if(Ck>G$){var A5=0;var Li=0;var MP=
Ck-1;var Cb;var CF=BC.length;var tmp=B.jm;if(!!(Ah&0x110)&&!!(Ah&0x28))Ah&=~0x110;
if(!!(Ah&0x110))Ah&=~0x28;if(((Ah&0x20)===0x20))Li=Ck-G$;else if(((Ah&0x10)===0x10
)||((Ah&0x100)===0x100)){Li=((Ck-G$)/2)|0;MP=(Li+G$)-1;}else MP=G$-1;OV=Li>0;Mp=
MP<(Ck-1);for(Cb=1;A5<Li;A5=A5+1)Cb=Cb+(BC.charCodeAt(Cb)||0);if(Mp)for(CF=Cb;A5<
MP;A5=A5+1)CF=CF+(BC.charCodeAt(CF)||0);if(OV){var B4=BC.charCodeAt(Cb)||0;tmp=(
Dn+B.aaY(BC,Cb,B4))+Dn;tmp=B.aaT(tmp,0,(B4+2)&0xFFFF);Cb=Cb+B4;if((tmp.charCodeAt(
B4)||0)===0x0A){tmp=B.aaT(tmp,B4,0xFEFF);tmp=B.aaT(tmp,B4+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.aaT(tmp,2,0xFEFF);tmp=B.aaT(tmp,1,0x0A);}else tmp=B.aaT(tmp
,1,0xFEFF);}tmp=tmp+B.aaY(BC,Cb,CF-Cb);if(Mp&&(CF>=Cb)){var B4=BC.charCodeAt(CF)||
0;var Dg=(Dn+B.aaY(BC,CF,B4))+Dn;Dg=B.aaT(Dg,0,(B4+2)&0xFFFF);Dg=B.aaT(Dg,1,0xFEFF
);if((Dg.charCodeAt(B4)||0)===0x0A){Dg=B.aaT(Dg,B4,0xFEFF);Dg=B.aaT(Dg,B4+1,0x0A
);}if((Dg.charCodeAt(2)||0)===0x0A){Dg=B.aaT(Dg,2,0xFEFF);Dg=B.aaT(Dg,1,0x0A);}else
Dg=B.aaT(Dg,1,0xFEFF);tmp=tmp+Dg;}BC=String.fromCharCode(G$&0xFFFF)+tmp;}var A5=
0;var Ae=1;var Pb=width;Ck=BC.charCodeAt(0)||0;for(;A5<Ck;A5=A5+1){var Hi=OV&&!A5;
var Hj=Mp&&(A5===(Ck-1));var D9=false;var D_=false;var Jv=MR;if((MR&&Hi)&&!Hj){Hi=
false;Hj=true;}else if((MR&&Hj)&&!Hi){Hj=false;Hi=true;}var Eh=Ae+1;var B4=BC.charCodeAt(
Ae)||0;var Cb=Eh;var CF=(Eh+B4)-2;var O_=-1;var O$=-1;if(!this.HY&&(font.F0(BC,Eh
,B4-1)>Pb)){var H2=Ah;if(((H2&0x2)===0x2)&&!!(H2&0x5))H2&=~0x2;if(((H2&0x2)===0x2
))H2&=~0x5;if(((H2&0x4)===0x4))D9=true;else if(((H2&0x2)===0x2)){D9=true;D_=true;
}else D_=true;}if((BC.charCodeAt(Cb)||0)===0x0A)Cb=Cb+1;if((BC.charCodeAt(CF)||0
)===0x0A)CF=CF-1;while(D9&&((BC.charCodeAt(Cb)||0)===0xFEFF))Cb=Cb+1;while(D_&&((
BC.charCodeAt(CF)||0)===0xFEFF))CF=CF-1;D9=D9&&!Hj;D_=D_&&!Hi;while((((D9||D_)||
Hi)||Hj)&&(Cb<CF)){if((D9&&(Jv||!D_))||Hi){if(O_>0)BC=B.aaT(BC,O_,0xFEFF);BC=B.aaT(
BC,Cb,0x2026);O_=Cb;Cb=Cb+1;Jv=!Jv;Hi=false;if(font.F0(BC,Eh,B4-1)<=Pb){D9=false;
D_=false;}else D9=D9||!D_;}if((D_&&(!Jv||!D9))||Hj){if(O$>0)BC=B.aaT(BC,O$,0xFEFF
);BC=B.aaT(BC,CF,0x2026);O$=CF;CF=CF-1;Jv=!Jv;Hj=false;if(font.F0(BC,Eh,B4-1)<=Pb
){D9=false;D_=false;}else D_=D_||!D9;}}Ae=Ae+B4;}this.Ho=[font.PN(BC),((BC.charCodeAt(
0)||0)*MN)-leading];this.Aw=BC;}if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.
R);B.ow([this,this.MK],this);},Qe:function(E){if(E===this.M$)return;this.M$=E;this.
Aw=B.jm;this.Ch=false;B.ow([this,this.Hf],this);},Qd:function(E){if(E===this.FZ)
return;this.FZ=E;if((this.HY||E)||!!this.IZ)this.G=this.G&~0x100;else this.G=this.
G|0x100;this.Aw=B.jm;this.Ch=false;B.ow([this,this.Hf],this);},Tk:function(E){if(
B.z$(E,this.IZ))return;this.IZ=E;if((this.HY||!!E)||this.FZ)this.G=this.G&~0x100;
else this.G=this.G|0x100;},Tl:function(E){if(E===this.Fv)return;if(!!E&&!!E.Ju){
B.aa8("%s%*%s",ER,E,FB);throw new Error(FC);}if(!!this.Fv){this.Fv.ML=null;this.
Fv.Ju=null;}this.Fv=E;if(!!E){E.ML=[this,this.WA];E.Ju=[this,this.Wz];}},Oe:function(
E){if(E===this.HY)return;this.HY=E;if(this.Ch){this.Aw=B.jm;this.Ch=false;B.ow([
this,this.Hf],this);}if((E||this.FZ)||!!this.IZ)this.G=this.G&~0x100;else this.G=
this.G|0x100;},IW:function(E){var A;if(B.z8(E,this.Ge))return;this.Ge=E;if(!!this.
I&&((this.G&0x1)===0x1))this.I.At(this.R);if(this.Ch)B.ow([this,this.MK],this);}
,Dj:function(E){var A;if(E===this.Dh)return;this.Dh=E;if(!!this.I&&((this.G&0x1)===
0x1))this.I.At(this.R);if(this.FZ){this.Aw=B.jm;this.Ch=false;B.ow([this,this.Hf
],this);}if(this.Ch)B.ow([this,this.MK],this);},AW:function(E){if(E===this.String
)return;this.String=E;this.Aw=B.jm;this.Ch=false;B.ow([this,this.Hf],this);},Cn:
function(E){if(E===this.AT)return;this.AT=E;this.Aw=B.jm;this.Ch=false;B.ow([this
,this.Hf],this);},AV:function(E){var A;if(E===this.CV)return;this.CV=E;if(!!this.
I&&((this.G&0x1)===0x1))this.I.At(this.R);},JW:function(){if(!this.Ch)this.GC(this
);if(!this.CR)return false;var result=false;var bidi=this.CR;result=B.vi(bidi);return result;
},Sb:function(){if(!this.Ch)this.GC(this);if(!this.CR)return false;var result=false;
var bidi=this.CR;result=B.zc(bidi);return result;},Qr:function(aIndex){if(((this.
String===B.jm)||!this.AT)||this.FZ)return A2;if(!this.Ch)this.GC(this);if(aIndex<
0)aIndex=0;var VW=(this.Aw.charCodeAt(0)||0)-1;var Cm=this.Aw.charCodeAt(1)||0;var
Ae=1;var GF=2;var A5=0;var col=-1;var FJ=true;aIndex=aIndex+2;while((A5<VW)&&((Ae+
Cm)<=aIndex)){Ae=Ae+Cm;A5=A5+1;GF=GF+1;aIndex=aIndex+1;Cm=this.Aw.charCodeAt(Ae)||
0;}if(aIndex>(Ae+Cm))aIndex=Ae+Cm;if(!!this.CR)aIndex=(Ae+this.VF(this.CR,(Ae+1)-
GF,(Ae+Cm)-GF,(aIndex-Ae)-1))+1;for(;aIndex>Ae;Ae=Ae+1){var A9=this.Aw.charCodeAt(
Ae+1)||0;if(FJ)col=col+1;FJ=(A9!==0xFEFF)&&(A9!==0x0A);}return[col,A5];},Ku:function(
KM){if(((this.String===B.jm)||!this.AT)||this.FZ)return 0;if(!this.Ch)this.GC(this
);var A5=KM[1];var col=KM[0];var Ae=1;var GF=2;var Ck=this.Aw.charCodeAt(0)||0;var
Cm=this.Aw.charCodeAt(1)||0;if(A5>=Ck){A5=Ck-1;col=this.Aw.length;}if(A5<0){A5=0;
col=0;}if(col<0)col=0;while((A5>0)&&(Cm>0)){Ae=Ae+Cm;A5=A5-1;GF=GF+1;Cm=this.Aw.
charCodeAt(Ae)||0;}var Ec=Ae;var MQ=(Ae-GF)+1;var MO=(MQ+Cm)-1;var Lf=false;while((
col>=0)&&(Cm>1)){var A9=this.Aw.charCodeAt(Ae+1)||0;Ae=Ae+1;Cm=Cm-1;Lf=(A9===0xFEFF
)||(A9===0x0A);if(!Lf){col=col-1;Ec=Ae;}}if((!Lf&&(col>=0))&&((this.Aw.charCodeAt(
Ae+1)||0)===0x00))Lf=true;if(Lf)Ec=Ec+1;Ec=Ec-GF;if(!!this.CR)Ec=MQ+this.VG(this.
CR,MQ,MO,Ec-MQ);return Ec;},LW:function(CD){var A;if((this.String===B.jm)||!this.
AT)return A2;if(!this.Ch)this.GC(this);var S=this.Fj();if((S[0]>=S[2])||(S[1]>=S[
3]))return A2;var font=this.AT;var Ah=this.Dh;var Ck=this.Aw.charCodeAt(0)||0;var
leading=font.Leading;if(CD[1]<S[1])CD=[CD[0],S[1]];if(CD[1]>=S[3])CD=[CD[0],S[3]-
1];var GD=(font.Ascent+font.Descent)+leading;var A5=((CD[1]-S[1])/GD)|0;var CG=this.
No(A5);var Cm=CG.length;var CY=false;if(((Ah&0x80)===0x80)){if(this.JW())Ah=(Ah&
~0x80)|0x4;else Ah=(Ah&~0x80)|0x1;}if(((Ah&0x40)===0x40)&&(A5<(Ck-1)))CY=true;if((
CY&&(CG.indexOf(String.fromCharCode(0x20),0)<0))&&(CG.indexOf(String.fromCharCode(
0xA0),0)<0))CY=false;if(CY){var Ae=1;var Iv=A5;while(Iv>0){Ae=Ae+(this.Aw.charCodeAt(
Ae)||0);Iv=Iv-1;}if(((this.Aw.charCodeAt(Ae+1)||0)===0x0A)||((this.Aw.charCodeAt((
Ae+(this.Aw.charCodeAt(Ae)||0))-1)||0)===0x0A))CY=false;}var Hk=0;var x=0;if(CY)
Hk=S[2]-S[0];else if(((Ah&0x4)===0x4))x=(S[2]-S[0])-font.F0(CG,0,Cm);else if(((Ah&
0x2)===0x2))x=(((S[2]-S[0])/2)|0)-((font.F0(CG,0,Cm)/2)|0);var col=font.R_(CG,0,
Cm,(CD[0]-S[0])-x,Hk);if(col<0)col=0;return[col,A5];},Oo:function(KM){var A;if((
this.String===B.jm)||!this.AT)return A2;if(!this.Ch)this.GC(this);var Ck=this.Aw.
charCodeAt(0)||0;var font=this.AT;var Ah=this.Dh;var A5=KM[1];var col=KM[0];if(A5>=
Ck){A5=Ck-1;col=this.Aw.length;}if(A5<0){A5=0;col=0;}var CG=this.No(A5);var Cm=CG.
length;var S=this.Fj();var CY=false;var leading=font.Leading;if(((Ah&0x80)===0x80
)){if(this.JW())Ah=(Ah&~0x80)|0x4;else Ah=(Ah&~0x80)|0x1;}if(((Ah&0x40)===0x40)&&(
A5<(Ck-1)))CY=true;if((CY&&(CG.indexOf(String.fromCharCode(0x20),0)<0))&&(CG.indexOf(
String.fromCharCode(0xA0),0)<0))CY=false;if(CY){var Ae=1;var Iv=A5;while(Iv>0){Ae=
Ae+(this.Aw.charCodeAt(Ae)||0);Iv=Iv-1;}if(((this.Aw.charCodeAt(Ae+1)||0)===0x0A
)||((this.Aw.charCodeAt((Ae+(this.Aw.charCodeAt(Ae)||0))-1)||0)===0x0A))CY=false;
}var y=(S[1]+(A5*((font.Ascent+font.Descent)+leading)))+font.Ascent;var Hk=0;var
x=S[0];if(CY)Hk=S[2]-S[0];else if(((Ah&0x4)===0x4))x=S[2]-font.F0(CG,0,Cm);else if(((
Ah&0x2)===0x2))x=(x+(((S[2]-S[0])/2)|0))-((font.F0(CG,0,Cm)/2)|0);var pos=font.R9(
CG,0,Cm,col,Hk);if(pos<0)pos=0;return[x+pos,y];},No:function(KL){if((this.String===
B.jm)||!this.AT)return B.jm;if(!this.Ch)this.GC(this);var Ck=this.Aw.charCodeAt(
0)||0;var Ae=1;if((!this.AT||(KL<0))||(KL>=Ck))return B.jm;while(KL>0){Ae=Ae+(this.
Aw.charCodeAt(Ae)||0);KL=KL-1;}var Eh=Ae;var Jn=Ae+(this.Aw.charCodeAt(Ae)||0);var
A9=0x00;do{Eh=Eh+1;A9=this.Aw.charCodeAt(Eh)||0;}while(((A9===0xFEFF)||(A9===0x0A
))&&(Eh<=Jn));do{Jn=Jn-1;A9=this.Aw.charCodeAt(Jn)||0;}while(((A9===0xFEFF)||(A9===
0x0A))&&(Eh<=Jn));var CG=B.aaY(this.Aw,Eh,(Jn-Eh)+1);var Ib;for(Ib=CG.indexOf(String.
fromCharCode(0xFEFF),0);Ib>=0;Ib=CG.indexOf(String.fromCharCode(0xFEFF),Ib+1)){var
Ec=Ib+1;while((CG.charCodeAt(Ec)||0)===0xFEFF)Ec=Ec+1;CG=B.aa3(CG,Ib,Ec-Ib);}return CG;
},Fj:function(){var A;if((this.String===B.jm)||!this.AT)return Dm;if(!this.Ch)this.
GC(this);if(this.Aw===B.jm)return Dm;var leading=this.AT.Leading;var MN=(this.AT.
Ascent+this.AT.Descent)+this.AT.Leading;if(B.z8(this.Ho,A2))this.Ho=[this.AT.PN(
this.Aw),this.Ho[1]];this.Ho=[this.Ho[0],((this.Aw.charCodeAt(0)||0)*MN)-leading
];var Ah=this.Dh;var Aj=this.R;var width=Aj[2]-Aj[0];var height=Aj[3]-Aj[1];var AF=[
0,0,width,height];var Am=[].concat(AF.slice(0,2),B.aak(AF.slice(0,2),this.Ho));if(((
Ah&0x80)===0x80)){if(this.JW())Ah=(Ah&~0x80)|0x4;else Ah=(Ah&~0x80)|0x1;}if(((Ah&
0x40)===0x40)){var FQ;FQ=width;if(FQ<0)FQ=0;if(FQ>(Am[2]-Am[0]))Am=B.aaO(Am,FQ);
}if((!!(Ah&0x110)&&!!(Ah&0x28))&&((Am[3]-Am[1])>(AF[3]-AF[1])))Ah&=~0x110;if(!!(
Ah&0x110))Ah&=~0x28;if((((Ah&0x2)===0x2)&&!!(Ah&0x5))&&((Am[2]-Am[0])>(AF[2]-AF[
0])))Ah&=~0x2;if(((Ah&0x2)===0x2))Ah&=~0x5;if((Am[2]-Am[0])!==(AF[2]-AF[0])){if(((
Ah&0x4)===0x4))Am=B.aaP(Am,AF[2]-(Am[2]-Am[0]));else if(((Ah&0x2)===0x2))Am=B.aaP(
Am,(AF[0]+(((AF[2]-AF[0])/2)|0))-(((Am[2]-Am[0])/2)|0));}if((Am[3]-Am[1])!==(AF[
3]-AF[1])){if(((Ah&0x20)===0x20))Am=B.aaR(Am,AF[3]-(Am[3]-Am[1]));else if(((Ah&0x100
)===0x100))Am=B.aaR(Am,((AF[1]+(((AF[3]-AF[1])/2)|0))-(((Am[3]-Am[1])/2)|0))+(((
this.AT.Descent-this.AT.Ascent)/2)|0));else if(((Ah&0x10)===0x10))Am=B.aaR(Am,(AF[
1]+(((AF[3]-AF[1])/2)|0))-(((Am[3]-Am[1])/2)|0));}Am=B.aam(Am,Aj.slice(0,2));return B.
aam(Am,this.Ge);},_Init:function(aArg){B.Core.BL._Init.call(this,aArg);this.__proto__=
C.Text;},_Done:function(){this.DU();this.__proto__=B.Core.BL;B.Core.BL._Done.call(
this);},_Mark:function(D){var A;B.Core.BL._Mark.call(this,D);if((A=this.Fv)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.AT)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.IZ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Text"
};C.GZ={G4:B.vw,AJ:B.aan(4,3,0,null),HG:B.vx,DO:0,Ih:0,Oh:true,Fo:function(E){if(
B.z8(E,this.B7))return;B.Core.EO.Fo.call(this,E);this.AJ.Set(3,0,E[0]);this.AJ.Set(
3,1,E[1]);this.AJ.Set(3,2,1);this.DO=0x45;B.ow([this,this.Jc],this);},EN:function(
E){if(B.z8(E,this.Co))return;B.Core.EO.EN.call(this,E);this.AJ.Set(2,0,E[0]);this.
AJ.Set(2,1,E[1]);this.AJ.Set(2,2,1);this.DO=0x45;B.ow([this,this.Jc],this);},B6:
function(E){if(B.z8(E,this.A1))return;B.Core.EO.B6.call(this,E);this.AJ.Set(1,0,
E[0]);this.AJ.Set(1,1,E[1]);this.AJ.Set(1,2,1);this.DO=0x45;B.ow([this,this.Jc],
this);},Ce:function(E){if(B.z8(E,this.A0))return;B.Core.EO.Ce.call(this,E);this.
AJ.Set(0,0,E[0]);this.AJ.Set(0,1,E[1]);this.AJ.Set(0,2,1);this.DO=0x45;B.ow([this
,this.Jc],this);},VJ:function(){return;},Pu:function(N){var A;if(this.DO===0x00)
return;if(this.DO===0x45){var E9=B._NewObject(B.Graphics.Qy,0);E9=E9.R2(this.AJ.
Get(0,0),this.AJ.Get(0,1),this.AJ.Get(1,0),this.AJ.Get(1,1),this.AJ.Get(2,0),this.
AJ.Get(2,1),this.AJ.Get(3,0),this.AJ.Get(3,1));if(!!E9){E9.Ls(0,0);this.AJ.Set(0
,2,E9.KB*240);E9.Ls(1,0);this.AJ.Set(1,2,E9.KB*240);E9.Ls(1,1);this.AJ.Set(2,2,E9.
KB*240);E9.Ls(0,1);this.AJ.Set(3,2,E9.KB*240);}this.VJ();}this.Ih=this.DO;this.DO=
0x00;if(!!this.I&&((this.G&0x1)===0x1))this.I.At(this.GetExtent());},Jc:function(
WJ){this.Pu(WJ);},Qh:function(E){var A;if(E===this.Oh)return;this.Oh=E;if(!!this.
I&&((this.G&0x1)===0x1))this.I.At(this.GetExtent());},Qj:function(E){var A;if(B.
z9(E,this.HG))return;this.HG=E;if((((this.Ih===0x45)&&(this.DO===0x00))&&!!this.
I)&&((this.G&0x1)===0x1))this.I.At(this.GetExtent());if((this.Ih!==0x45)&&(this.
DO===0x00)){this.DO=this.Ih;B.ow([this,this.Jc],this);}},_Init:function(aArg){B.
Core.EO._Init.call(this,aArg);(this.AJ=[]).__proto__=C.GZ.AJ;this.__proto__=C.GZ;
this.G=0x3;},_className:"Views::WarpView"};C.Dl={AU:null,bitmap:null,P:null,Q2:1
,Q3:0,Q4:0,Q5:0,Q6:1,Q7:0,Q8:0,Q9:0,Q_:1,F$:255,O9:false,Dz:function(A4,aClip,aOffset
,AP,aBlend){var A;if(!this.bitmap)return;this.bitmap.Update();var EC=aOffset[0];
var ED=aOffset[1];var S=B.z6(this.HG,[].concat(A2,this.G4));aBlend=aBlend&&((this.
G&0x2)===0x2);AP=AP+1;var Rd;var Re;var Rf;var Rg;var VY=this.F$;Rd=Re=Rf=Rg=VY;
var G5=255|(255<<8)|(255<<16)|((((AP*Rd)>>8)&0xFF)<<24);var G6=255|(255<<8)|(255<<
16)|((((AP*Re)>>8)&0xFF)<<24);var VH=255|(255<<8)|(255<<16)|((((AP*Rf)>>8)&0xFF)<<
24);var VI=255|(255<<8)|(255<<16)|((((AP*Rg)>>8)&0xFF)<<24);aClip=B.z6(aClip,B.aam(
Dm,aOffset));A4.Tw(aClip,this.bitmap,0,this.AJ.Get(0,0)+EC,this.AJ.Get(0,1)+ED,this.
AJ.Get(0,2),this.AJ.Get(1,0)+EC,this.AJ.Get(1,1)+ED,this.AJ.Get(1,2),this.AJ.Get(
2,0)+EC,this.AJ.Get(2,1)+ED,this.AJ.Get(2,2),this.AJ.Get(3,0)+EC,this.AJ.Get(3,1
)+ED,this.AJ.Get(3,2),S,G5,G6,VH,VI,aBlend,this.Oh);},Bv:function(Ay){if(!this.P||
!this.AU)return null;var W=(B.Core.Fi.isPrototypeOf(Ay)?Ay:null);var AB=(B.Core.
II.isPrototypeOf(Ay)?Ay:null);if(!W&&!AB)return null;var Bc=A2;var Al=this.AU.I;
while(!!Al&&(Al!==this.P)){Bc=B.aaj(Bc,Al.R.slice(0,2));Al=Al.I;}var L=this.AU;if(
!!W&&!W.Down)this.AU=null;if(!!W){W.BF=B.aak(this.Js(W.BF),Bc);W.CK=B.aak(this.Js(
W.CK),Bc);return L.Bv(W);}if(!!AB){var V1=B.aak(this.Js(B.aaj(AB.BF,AB.AE)),Bc);
AB.BF=B.aak(this.Js(AB.BF),Bc);AB.CK=B.aak(this.Js(AB.CK),Bc);AB.AE=B.aaj(AB.BF,
V1);return L.Bv(AB);}return C.GZ.Bv.call(this,Ay);},EI:function(Ar,X,CP,ES,EW,EV
){var A;if(!this.P||!((this.P.G&0x18)===0x18))return null;var pos=B.zT(Ar);pos=this.
Js(pos);var DP=B.z6(this.HG,[].concat(A2,this.G4));if(!B.vt(DP,pos))return null;
var BS=this.P.EI(B.aam(B.aam([0,0,Ar[2]-Ar[0],Ar[3]-Ar[1]],pos),this.P.R.slice(0
,2)),X,CP,ES,null,EV);if(!!BS)this.AU=BS.Cf;else this.AU=null;if(!!this.AU)return B.
_NewObject(B.Core.JG,0).Initialize(this,A2);return null;},Pu:function(N){C.GZ.Pu.
call(this,N);this.O9=false;},WT:function(){var x1=this.AJ.Get(0,0);var y1=this.AJ.
Get(0,1);var x2=this.AJ.Get(1,0);var y2=this.AJ.Get(1,1);var x3=this.AJ.Get(2,0);
var y3=this.AJ.Get(2,1);var x4=this.AJ.Get(3,0);var y4=this.AJ.Get(3,1);var KR=x2-
x3;var KT=y2-y3;var KS=x4-x3;var KU=y4-y3;var Lk=((x1-x2)+x3)-x4;var Ll=((y1-y2)+
y3)-y4;var H5=(KR*KU)-(KT*KS);if(!H5)return;var Jp=((Lk*KU)-(Ll*KS))/H5;var h=((
KR*Ll)-(KT*Lk))/H5;var L_=(x2-x1)+(Jp*x2);var Mi=(x4-x1)+(h*x4);var By=x1;var Mr=(
y2-y1)+(Jp*y2);var E6=(y4-y1)+(h*y4);var G9=y1;this.Q2=E6-(G9*h);this.Q3=(By*h)-
Mi;this.Q4=(Mi*G9)-(By*E6);this.Q5=(G9*Jp)-Mr;this.Q6=L_-(By*Jp);this.Q7=(By*Mr)-(
L_*G9);this.Q8=(Mr*h)-(E6*Jp);this.Q9=(Mi*Jp)-(L_*h);this.Q_=(L_*E6)-(Mi*Mr);this.
O9=true;},Js:function(B0){var A;if(!this.O9)this.WT();var PA=B0[0];var PB=B0[1];
var Lo=((PA*this.Q2)+(PB*this.Q3))+this.Q4;var Lp=((PA*this.Q5)+(PB*this.Q6))+this.
Q7;var Pp=((PA*this.Q8)+(PB*this.Q9))+this.Q_;if(!!Pp){Lo=Lo/Pp;Lp=Lp/Pp;}var DP=
B.z6(this.HG,[].concat(A2,this.G4));Lo=Lo*(DP[2]-DP[0]);Lp=Lp*(DP[3]-DP[1]);return B.
aak([Lo|0,Lp|0],DP.slice(0,2));},Du:function(N){var A;var Rh=this.G4;if(!!this.P
)this.bitmap=this.P.Bx;else this.bitmap=null;if(!!this.bitmap)this.G4=this.bitmap.
FrameSize;else this.G4=A2;if(((B.z8(Rh,this.G4)||((this.Ih===0x45)&&(this.DO===0x00
)))&&!!this.I)&&((this.G&0x1)===0x1))this.I.At(this.GetExtent());if(((this.Ih!==
0x45)&&(this.DO===0x00))&&!B.z8(Rh,this.G4)){this.DO=this.Ih;B.ow([this,this.Jc]
,this);}},Kc:function(E){var A;if(E===this.F$)return;this.F$=E;if(!!this.I&&((this.
G&0x1)===0x1))this.I.At(this.GetExtent());},Qg:function(E){if(E===this.P)return;
if(!!E&&(E===this.I))throw new Error(HZ);if(!!this.P){B.zl([this,this.Du],this.P
,0);this.bitmap=null;}this.P=E;if(!!E){B.y_([this,this.Du],E,0);this.bitmap=E.Bx;
}this.Du(this);},_Init:function(aArg){C.GZ._Init.call(this,aArg);this.__proto__=
C.Dl;},_Mark:function(D){var A;C.GZ._Mark.call(this,D);if((A=this.AU)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.bitmap)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.P)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpGroup"};C.
Xn={RW:0x1,RV:0x2,RX:0x4,R0:0x8,RZ:0x10,RY:0x20,XQ:0x40,XR:0x80,XX:0x100};C.XY={
RW:0x1,RV:0x2,RX:0x4,R0:0x8,RZ:0x10,RY:0x20,WZ:0x40,WY:0x80,W4:0x100};C.Xz={Xy:0
,XO:1,XM:2,XN:3};
C._Init=function(){C.Bg.__proto__=B.Core.IP;C.AH.__proto__=B.Core.BL;C.Ly.__proto__=
B.Core.BL;C.F.__proto__=B.Core.BL;C.Text.__proto__=B.Core.BL;C.GZ.__proto__=B.Core.
EO;C.Dl.__proto__=C.GZ;};C._ReInit=function(){};C.CO=function(D){};return C;})();

/* Embedded Wizard */