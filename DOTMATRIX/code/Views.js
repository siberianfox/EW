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
);if(EmWiApp.abh)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
abh=(function(){var A=EmWiApp;var D={};
var Af=[0,0];var AB=[0,0,0,0];var BZ="\uFEFF";var Cv="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
D.B9={B4:0xFFFFFFFF,BK:function(Ao,aClip,aOffset,Am,aBlend){var B;var AT;var AU;var
AR;var AS;var AG=this.B4;aBlend=aBlend&&((this.E&0x2)===0x2);Am=Am+1;AT=AU=AR=AS=
AG;if(Am<256){AT=(AT&0x00FFFFFF)|((((Am*((AT>>24)&0xFF))>>8)&0xFF)<<24);AU=(AU&0x00FFFFFF
)|((((Am*((AU>>24)&0xFF))>>8)&0xFF)<<24);AR=(AR&0x00FFFFFF)|((((Am*((AR>>24)&0xFF
))>>8)&0xFF)<<24);AS=(AS&0x00FFFFFF)|((((Am*((AS>>24)&0xFF))>>8)&0xFF)<<24);}Ao.
EI(aClip,A.aam(this.P,aOffset),AT,AU,AS,AR,aBlend);},D0:function(C){var B;if(C===
this.B4)return;this.B4=C;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.P);},_Init:
function(aArg){A.Core.AP._Init.call(this,aArg);this.__proto__=D.B9;},_className:
"Views::Rectangle"};D.FF={timer:null,Z:null,A$:-1,B4:0xFFFFFFFF,EJ:0,Dk:0,BJ:false
,BK:function(Ao,aClip,aOffset,Am,aBlend){var B;var A5=this.EJ;if(this.A$>=0)A5=this.
A$;if(!this.Z||(A5>=this.Z.NoOfFrames))return;this.Z.Update();var AT;var AU;var AS;
var AR;var AG=this.B4;var Br=(((Am+1)*255)>>8)+1;var BC=A.aam(this.P,aOffset);aBlend=
aBlend&&((this.E&0x2)===0x2);AT=AU=AR=AS=AG;if(Br<256){AT=(AT&0x00FFFFFF)|((((((
AT>>24)&0xFF)*Br)>>8)&0xFF)<<24);AU=(AU&0x00FFFFFF)|((((((AU>>24)&0xFF)*Br)>>8)&
0xFF)<<24);AS=(AS&0x00FFFFFF)|((((((AS>>24)&0xFF)*Br)>>8)&0xFF)<<24);AR=(AR&0x00FFFFFF
)|((((((AR>>24)&0xFF)*Br)>>8)&0xFF)<<24);}Ao.H0(aClip,this.Z,A5,BC,0x1F,AT,AU,AS
,AR,aBlend);},CE:function(AJ){var B;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(
this.P);},CH:function(AJ){var B;var A5=this.A$;var BT=0;if(!!this.Z)BT=this.Z.NoOfFrames
*this.Z.FrameDelay;if((!!this.timer&&(this.A$<0))&&(BT>0))this.Dk=this.timer.AE-(
this.EJ*this.Z.FrameDelay);if(!!this.timer&&(BT>0)){var Dl=(this.timer.AE-this.Dk
)|0;A5=(Dl/this.Z.FrameDelay)|0;if(Dl>=BT){A5=A5%this.Z.NoOfFrames;this.Dk=this.
timer.AE-(Dl%BT);}}if(((A5!==this.A$)&&!!this.G)&&((this.E&0x1)===0x1))this.G.Ah(
this.P);this.A$=A5;if(!BT&&!!this.timer){A.zl([this,this.CH],this.timer,0);this.
timer=null;}},D0:function(C){var B;if(C===this.B4)return;this.B4=C;if(!!this.G&&((
this.E&0x1)===0x1))this.G.Ah(this.P);},Dr:function(C){var B;if(this.BJ===C)return;
this.BJ=C;this.A$=-1;if(!C&&!!this.timer){A.zl([this,this.CH],this.timer,0);this.
timer=null;}if(C){this.timer=A._GetAutoObject(A.abj.DQ);A.y_([this,this.CH],this.
timer,0);A.ow([this,this.CH],this);}if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(
this.P);},Il:function(C){var B;if(C<0)C=0;if((C===this.EJ)&&(this.A$===-1))return;
this.EJ=C;if(!this.timer)this.A$=-1;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(
this.P);},C5:function(C){var B;if(C===this.Z)return;if(!!this.Z&&this.Z.Dq)A.zl([
this,this.CE],this.Z,0);this.Z=C;this.A$=-1;if(!!C&&C.Dq)A.y_([this,this.CE],C,0
);if(this.BJ){this.Dr(false);this.Dr(true);}if(!!this.G&&((this.E&0x1)===0x1))this.
G.Ah(this.P);},_Init:function(aArg){A.Core.AP._Init.call(this,aArg);this.__proto__=
D.FF;},_Mark:function(F){var B;A.Core.AP._Mark.call(this,F);if((B=this.timer)&&(
B._cycle!=F))B._Mark(B._cycle=F);if((B=this.Z)&&(B._cycle!=F))B._Mark(B._cycle=F
);},_className:"Views::Frame"};D.Bm={timer:null,Z:null,Dk:0,A$:0,Cs:0x12,BJ:false
,BK:function(Ao,aClip,aOffset,Am,aBlend){var B;var A5=0;if(this.A$>=0)A5=this.A$;
if(!this.Z||(A5>=this.Z.NoOfFrames))return;this.Z.Update();var V=this.FG();var Bj=
this.Z.FrameSize;if((V[0]>=V[2])||(V[1]>=V[3]))return;var AT;var AU;var AS;var AR;
var Br=(((Am+1)*255)>>8)+1;aBlend=aBlend&&((this.E&0x2)===0x2);AT=AU=AR=AS=0xFFFFFFFF;
if(Br<256){AT=(AT&0x00FFFFFF)|((((255*Br)>>8)&0xFF)<<24);AU=(AU&0x00FFFFFF)|((((
255*Br)>>8)&0xFF)<<24);AS=(AS&0x00FFFFFF)|((((255*Br)>>8)&0xFF)<<24);AR=(AR&0x00FFFFFF
)|((((255*Br)>>8)&0xFF)<<24);}if(A.z8([V[2]-V[0],V[3]-V[1]],Bj))Ao.GQ(aClip,this.
Z,A5,A.aam(this.P,aOffset),A.aaj(this.P.slice(0,2),V.slice(0,2)),AT,AU,AS,AR,aBlend
);else Ao.IL(aClip,this.Z,A5,A.aam(V,aOffset),[].concat(Af,Bj),AT,AU,AS,AR,aBlend
,true);},CE:function(AJ){var B;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.
P);},CH:function(AJ){var B;var A5=this.A$;var BT=0;if(!!this.Z)BT=this.Z.NoOfFrames
*this.Z.FrameDelay;if((!!this.timer&&(this.A$<0))&&(BT>0))this.Dk=this.timer.AE;
if(!!this.timer&&(BT>0)){var Dl=(this.timer.AE-this.Dk)|0;A5=(Dl/this.Z.FrameDelay
)|0;if(Dl>=BT){A5=A5%this.Z.NoOfFrames;this.Dk=this.timer.AE-(Dl%BT);}}if(((A5!==
this.A$)&&!!this.G)&&((this.E&0x1)===0x1))this.G.Ah(this.P);this.A$=A5;if(!BT&&!
!this.timer){A.zl([this,this.CH],this.timer,0);this.timer=null;}},Dr:function(C){
var B;if(this.BJ===C)return;this.BJ=C;this.A$=-1;if(!C&&!!this.timer){A.zl([this
,this.CH],this.timer,0);this.timer=null;}if(C){this.timer=A._GetAutoObject(A.abj.
DQ);A.y_([this,this.CH],this.timer,0);A.ow([this,this.CH],this);}if(!!this.G&&((
this.E&0x1)===0x1))this.G.Ah(this.P);},FV:function(C){var B;if(C===this.Cs)return;
this.Cs=C;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.P);},C5:function(C){var
B;if(C===this.Z)return;if(!!this.Z&&this.Z.Dq)A.zl([this,this.CE],this.Z,0);this.
Z=C;this.A$=-1;if(!!C&&C.Dq)A.y_([this,this.CE],C,0);if(this.BJ){this.Dr(false);
this.Dr(true);}if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.P);},FG:function(
){var B;if(!this.Z)return AB;var W=this.Cs;var Bj=this.Z.FrameSize;var An=this.P;
var width=An[2]-An[0];var height=An[3]-An[1];if(!Bj[0]||!Bj[1])return AB;var Aa=[
0,0,width,height];var R=Aa;if(((W&0x40)===0x40)){var GJ=((((Aa[2]-Aa[0])<<16)+((
Bj[0]/2)|0))/Bj[0])|0;var Ew=((((Aa[3]-Aa[1])<<16)+((Bj[1]/2)|0))/Bj[1])|0;var CG=
GJ;if(Ew>CG)CG=Ew;R=A.aaO(R,((Bj[0]*CG)+32768)>>16);R=A.aaL(R,((Bj[1]*CG)+32768)>>
16);}else if(((W&0x80)===0x80)){var GJ=((((Aa[2]-Aa[0])<<16)+((Bj[0]/2)|0))/Bj[0
])|0;var Ew=((((Aa[3]-Aa[1])<<16)+((Bj[1]/2)|0))/Bj[1])|0;var CG=GJ;if(Ew<CG)CG=
Ew;R=A.aaO(R,((Bj[0]*CG)+32768)>>16);R=A.aaL(R,((Bj[1]*CG)+32768)>>16);}else if(
!((W&0x100)===0x100))R=A.aaN(R,Bj);if((R[2]-R[0])!==(Aa[2]-Aa[0])){if(((W&0x4)===
0x4))R=A.aaP(R,Aa[2]-(R[2]-R[0]));else if(((W&0x2)===0x2))R=A.aaP(R,(Aa[0]+(((Aa[
2]-Aa[0])/2)|0))-(((R[2]-R[0])/2)|0));}if((R[3]-R[1])!==(Aa[3]-Aa[1])){if(((W&0x20
)===0x20))R=A.aaR(R,Aa[3]-(R[3]-R[1]));else if(((W&0x10)===0x10))R=A.aaR(R,(Aa[1
]+(((Aa[3]-Aa[1])/2)|0))-(((R[3]-R[1])/2)|0));}R=A.aam(R,An.slice(0,2));return R;
},_Init:function(aArg){A.Core.AP._Init.call(this,aArg);this.__proto__=D.Bm;},_Mark:
function(F){var B;A.Core.AP._Mark.call(this,F);if((B=this.timer)&&(B._cycle!=F))
B._Mark(B._cycle=F);if((B=this.Z)&&(B._cycle!=F))B._Mark(B._cycle=F);},_className:
"Views::Image"};D.Text={Bc:null,Au:A.jm,String:A.jm,BE:null,C1:A.vw,Cs:0x12,B4:0xFFFFFFFF
,Dz:false,Do:false,Fz:false,Bs:false,B5:function(){if(!!this.BE){this.Gr(this.BE
);this.BE=null;}},BK:function(Ao,aClip,aOffset,Am,aBlend){var B;if((this.Au===A.
jm)||!this.Bc)return;var W=this.Cs;var font=this.Bc;var Aa=A.aam(this.P,aOffset);
var AT;var AU;var AS;var AR;var I0=this.B4;var Br=(((Am+1)*255)>>8)+1;var Cc=this.
Au.charCodeAt(0)||0;var V=A.aam(this.FG(),aOffset);var HD=[Aa[0]-V[0],(Aa[1]-V[1
])-font.Ascent];if(Cc<1)return;AT=AU=AR=AS=I0;if(Br<256){AT=(AT&0x00FFFFFF)|((((((
AT>>24)&0xFF)*Br)>>8)&0xFF)<<24);AU=(AU&0x00FFFFFF)|((((((AU>>24)&0xFF)*Br)>>8)&
0xFF)<<24);AS=(AS&0x00FFFFFF)|((((((AS>>24)&0xFF)*Br)>>8)&0xFF)<<24);AR=(AR&0x00FFFFFF
)|((((((AR>>24)&0xFF)*Br)>>8)&0xFF)<<24);}if(((W&0x80)===0x80)){if(this.FI())W=(
W&~0x80)|0x4;else W=(W&~0x80)|0x1;}if((Cc===1)&&!((W&0x40)===0x40)){Ao.GS(aClip,
font,this.Au,2,(this.Au.charCodeAt(1)||0)-1,Aa,HD,0,0,AT,AU,AS,AR,true);return;}
var leading=font.Leading;var GI=(font.Ascent+font.Descent)+leading;var IY=aClip[
1]-V[1];var IZ=aClip[3]-V[1];var Gk=V[2]-V[0];var Dm=0;var I=1;var AG=this.Au.charCodeAt(
1)||0;while(((Dm+GI)<IY)&&(AG>0)){I=I+AG;Dm=Dm+GI;AG=this.Au.charCodeAt(I)||0;}while((
Dm<IZ)&&(AG>0)){var De=A.aaj(HD,[0,Dm]);var HM=0;var Ff=false;if(((((W&0x40)===0x40
)&&((this.Au.charCodeAt((I+AG)-1)||0)!==0x0A))&&((this.Au.charCodeAt(I+1)||0)!==
0x0A))&&((this.Au.charCodeAt(I+AG)||0)!==0x00))Ff=true;if(Ff&&!!(W&0x6)){var HL=
I+AG;var Hg=this.Au.indexOf(String.fromCharCode(0x20),I+1);var Hh=this.Au.indexOf(
String.fromCharCode(0xA0),I+1);if(((Hg<0)||(Hg>=HL))&&((Hh<0)||(Hh>=HL)))Ff=false;
}if(Ff)HM=Gk;else if(((W&0x4)===0x4))De=[(De[0]-Gk)+font.DV(this.Au,I+1,AG-1),De[
1]];else if(((W&0x2)===0x2))De=[(De[0]-((Gk/2)|0))+((font.DV(this.Au,I+1,AG-1)/2
)|0),De[1]];Ao.GS(aClip,font,this.Au,I+1,AG-1,Aa,De,HM,0,AT,AU,AS,AR,true);I=I+AG;
Dm=Dm+GI;AG=this.Au.charCodeAt(I)||0;}},AO:function(C){var B;if(A.z9(C,this.P))return;
var HK;HK=((B=this.P)[2]-B[0])!==(C[2]-C[0]);if(((HK&&this.Dz)&&this.Bs)&&!((this.
E&0x2000)===0x2000)){this.Au=A.jm;this.Bs=false;A.ow([this,this.CW],this);}if(((
this.Do&&this.Bs)&&!A.z8([(B=this.P)[2]-B[0],B[3]-B[1]],[C[2]-C[0],C[3]-C[1]]))&&
!((this.E&0x2000)===0x2000)){this.Au=A.jm;this.Bs=false;A.ow([this,this.CW],this
);}A.Core.AP.AO.call(this,C);A.ow([this,this.GE],this);},Gr:function(aBidi){if(!
aBidi)return;A.qU(aBidi);},I1:function(aSize){var bidi=null;bidi=A.vj(aSize);return bidi;
},GE:function(AJ){},CW:function(AJ){A.ow([this,this.Fl],this);},Fl:function(AJ){
var B;if(this.Bs)return;var width=(B=this.P)[2]-B[0];var height=(B=this.P)[3]-B[
1];var Cp=-1;var font=this.Bc;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=
null;if(this.Dz){Cp=width;if(Cp<0)Cp=1;}if(!!this.BE){this.Gr(this.BE);this.BE=null;
}this.Bs=true;if((this.String!==A.jm)&&!!font){var length=this.String.length;if(
this.Fz)this.BE=this.I1(length);this.Au=font.II(this.String,0,Cp,length,this.BE);
if(!!this.BE&&!this.H3()){this.Gr(this.BE);this.BE=null;}}else this.Au=A.jm;this.
C1=Af;if((this.Do&&(this.Au!==A.jm))&&!!font){var W=this.Cs;var leading=font.Leading;
var AA=this.Au;var Fp=this.FI();if(((W&0x80)===0x80)){if(Fp)W=(W&~0x80)|0x4;else
W=(W&~0x80)|0x1;}var Fn=(font.Ascent+font.Descent)+leading;var Cc=AA.charCodeAt(
0)||0;var CT=((height+leading)/Fn)|0;var Gn=false;var E7=false;if(CT<=0)CT=1;if(
Cc>CT){var B3=0;var Ev=0;var Fo=Cc-1;var AV;var A6=AA.length;var tmp=A.jm;if(!!(
W&0x110)&&!!(W&0x28))W&=~0x110;if(!!(W&0x110))W&=~0x28;if(((W&0x20)===0x20))Ev=Cc-
CT;else if(((W&0x10)===0x10)||((W&0x100)===0x100)){Ev=((Cc-CT)/2)|0;Fo=(Ev+CT)-1;
}else Fo=CT-1;Gn=Ev>0;E7=Fo<(Cc-1);for(AV=1;B3<Ev;B3=B3+1)AV=AV+(AA.charCodeAt(AV
)||0);if(E7)for(A6=AV;B3<Fo;B3=B3+1)A6=A6+(AA.charCodeAt(A6)||0);if(Gn){var Bi=AA.
charCodeAt(AV)||0;tmp=(BZ+A.aaY(AA,AV,Bi))+BZ;tmp=A.aaT(tmp,0,(Bi+2)&0xFFFF);AV=
AV+Bi;if((tmp.charCodeAt(Bi)||0)===0x0A){tmp=A.aaT(tmp,Bi,0xFEFF);tmp=A.aaT(tmp,
Bi+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=A.aaT(tmp,2,0xFEFF);tmp=A.aaT(
tmp,1,0x0A);}else tmp=A.aaT(tmp,1,0xFEFF);}tmp=tmp+A.aaY(AA,AV,A6-AV);if(E7&&(A6>=
AV)){var Bi=AA.charCodeAt(A6)||0;var Bt=(BZ+A.aaY(AA,A6,Bi))+BZ;Bt=A.aaT(Bt,0,(Bi+
2)&0xFFFF);Bt=A.aaT(Bt,1,0xFEFF);if((Bt.charCodeAt(Bi)||0)===0x0A){Bt=A.aaT(Bt,Bi
,0xFEFF);Bt=A.aaT(Bt,Bi+1,0x0A);}if((Bt.charCodeAt(2)||0)===0x0A){Bt=A.aaT(Bt,2,
0xFEFF);Bt=A.aaT(Bt,1,0x0A);}else Bt=A.aaT(Bt,1,0xFEFF);tmp=tmp+Bt;}AA=String.fromCharCode(
CT&0xFFFF)+tmp;}var B3=0;var Fe=1;var Gz=width;Cc=AA.charCodeAt(0)||0;for(;B3<Cc;
B3=B3+1){var CZ=Gn&&!B3;var C0=E7&&(B3===(Cc-1));var BP=false;var BQ=false;var DM=
Fp;if((Fp&&CZ)&&!C0){CZ=false;C0=true;}else if((Fp&&C0)&&!CZ){C0=false;CZ=true;}
var Ex=Fe+1;var Bi=AA.charCodeAt(Fe)||0;var AV=Ex;var A6=(Ex+Bi)-2;var Gx=-1;var
Gy=-1;if(!this.Dz&&(font.DV(AA,Ex,Bi-1)>Gz)){var C_=W;if(((C_&0x2)===0x2)&&!!(C_&
0x5))C_&=~0x2;if(((C_&0x2)===0x2))C_&=~0x5;if(((C_&0x4)===0x4))BP=true;else if(((
C_&0x2)===0x2)){BP=true;BQ=true;}else BQ=true;}if((AA.charCodeAt(AV)||0)===0x0A)
AV=AV+1;if((AA.charCodeAt(A6)||0)===0x0A)A6=A6-1;while(BP&&((AA.charCodeAt(AV)||
0)===0xFEFF))AV=AV+1;while(BQ&&((AA.charCodeAt(A6)||0)===0xFEFF))A6=A6-1;BP=BP&&
!C0;BQ=BQ&&!CZ;while((((BP||BQ)||CZ)||C0)&&(AV<A6)){if((BP&&(DM||!BQ))||CZ){if(Gx>
0)AA=A.aaT(AA,Gx,0xFEFF);AA=A.aaT(AA,AV,0x2026);Gx=AV;AV=AV+1;DM=!DM;CZ=false;if(
font.DV(AA,Ex,Bi-1)<=Gz){BP=false;BQ=false;}else BP=BP||!BQ;}if((BQ&&(!DM||!BP))||
C0){if(Gy>0)AA=A.aaT(AA,Gy,0xFEFF);AA=A.aaT(AA,A6,0x2026);Gy=A6;A6=A6-1;DM=!DM;C0=
false;if(font.DV(AA,Ex,Bi-1)<=Gz){BP=false;BQ=false;}else BQ=BQ||!BP;}}Fe=Fe+Bi;
}this.C1=[font.GU(AA),((AA.charCodeAt(0)||0)*Fn)-leading];this.Au=AA;}if(!!this.
G&&((this.E&0x1)===0x1))this.G.Ah(this.P);A.ow([this,this.GE],this);},Ib:function(
C){if(C===this.Fz)return;this.Fz=C;this.Au=A.jm;this.Bs=false;A.ow([this,this.CW
],this);},Ia:function(C){if(C===this.Do)return;this.Do=C;if(this.Dz||C)this.E=this.
E&~0x100;else this.E=this.E|0x100;this.Au=A.jm;this.Bs=false;A.ow([this,this.CW]
,this);},IH:function(C){if(C===this.Dz)return;this.Dz=C;if(this.Bs){this.Au=A.jm;
this.Bs=false;A.ow([this,this.CW],this);}if(C||this.Do)this.E=this.E&~0x100;else
this.E=this.E|0x100;},FV:function(C){var B;if(C===this.Cs)return;this.Cs=C;if(!!
this.G&&((this.E&0x1)===0x1))this.G.Ah(this.P);if(this.Do){this.Au=A.jm;this.Bs=
false;A.ow([this,this.CW],this);}if(this.Bs)A.ow([this,this.GE],this);},IF:function(
C){if(C===this.String)return;this.String=C;this.Au=A.jm;this.Bs=false;A.ow([this
,this.CW],this);},Ik:function(C){if(C===this.Bc)return;this.Bc=C;this.Au=A.jm;this.
Bs=false;A.ow([this,this.CW],this);},D0:function(C){var B;if(C===this.B4)return;
this.B4=C;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ah(this.P);},FI:function(){if(
!this.Bs)this.Fl(this);if(!this.BE)return false;var result=false;var bidi=this.BE;
result=A.vi(bidi);return result;},H3:function(){if(!this.Bs)this.Fl(this);if(!this.
BE)return false;var result=false;var bidi=this.BE;result=A.zc(bidi);return result;
},FG:function(){var B;if((this.String===A.jm)||!this.Bc)return AB;if(!this.Bs)this.
Fl(this);if(this.Au===A.jm)return AB;var leading=this.Bc.Leading;var Fn=(this.Bc.
Ascent+this.Bc.Descent)+this.Bc.Leading;if(A.z8(this.C1,Af))this.C1=[this.Bc.GU(
this.Au),this.C1[1]];this.C1=[this.C1[0],((this.Au.charCodeAt(0)||0)*Fn)-leading
];var W=this.Cs;var An=this.P;var width=An[2]-An[0];var height=An[3]-An[1];var Aa=[
0,0,width,height];var R=[].concat(Aa.slice(0,2),A.aak(Aa.slice(0,2),this.C1));if(((
W&0x80)===0x80)){if(this.FI())W=(W&~0x80)|0x4;else W=(W&~0x80)|0x1;}if(((W&0x40)===
0x40)){var Cp;Cp=width;if(Cp<0)Cp=0;if(Cp>(R[2]-R[0]))R=A.aaO(R,Cp);}if((!!(W&0x110
)&&!!(W&0x28))&&((R[3]-R[1])>(Aa[3]-Aa[1])))W&=~0x110;if(!!(W&0x110))W&=~0x28;if((((
W&0x2)===0x2)&&!!(W&0x5))&&((R[2]-R[0])>(Aa[2]-Aa[0])))W&=~0x2;if(((W&0x2)===0x2
))W&=~0x5;if((R[2]-R[0])!==(Aa[2]-Aa[0])){if(((W&0x4)===0x4))R=A.aaP(R,Aa[2]-(R[
2]-R[0]));else if(((W&0x2)===0x2))R=A.aaP(R,(Aa[0]+(((Aa[2]-Aa[0])/2)|0))-(((R[2
]-R[0])/2)|0));}if((R[3]-R[1])!==(Aa[3]-Aa[1])){if(((W&0x20)===0x20))R=A.aaR(R,Aa[
3]-(R[3]-R[1]));else if(((W&0x100)===0x100))R=A.aaR(R,((Aa[1]+(((Aa[3]-Aa[1])/2)|
0))-(((R[3]-R[1])/2)|0))+(((this.Bc.Descent-this.Bc.Ascent)/2)|0));else if(((W&0x10
)===0x10))R=A.aaR(R,(Aa[1]+(((Aa[3]-Aa[1])/2)|0))-(((R[3]-R[1])/2)|0));}R=A.aam(
R,An.slice(0,2));return R;},_Init:function(aArg){A.Core.AP._Init.call(this,aArg);
this.__proto__=D.Text;},_Done:function(){this.B5();this.__proto__=A.Core.AP;A.Core.
AP._Done.call(this);},_Mark:function(F){var B;A.Core.AP._Mark.call(this,F);if((B=
this.Bc)&&(B._cycle!=F))B._Mark(B._cycle=F);},_className:"Views::Text"};D.CL={CQ:
A.vw,Ae:A.aan(4,3,0,null),Cb:0,Fk:0,FZ:true,Dw:function(C){if(A.z8(C,this.AY))return;
A.Core.B8.Dw.call(this,C);this.Ae.Set(3,0,C[0]);this.Ae.Set(3,1,C[1]);this.Ae.Set(
3,2,1);this.Cb=0x45;A.ow([this,this.D8],this);},Dv:function(C){if(A.z8(C,this.A9
))return;A.Core.B8.Dv.call(this,C);this.Ae.Set(2,0,C[0]);this.Ae.Set(2,1,C[1]);this.
Ae.Set(2,2,1);this.Cb=0x45;A.ow([this,this.D8],this);},Du:function(C){if(A.z8(C,
this.AX))return;A.Core.B8.Du.call(this,C);this.Ae.Set(1,0,C[0]);this.Ae.Set(1,1,
C[1]);this.Ae.Set(1,2,1);this.Cb=0x45;A.ow([this,this.D8],this);},Dt:function(C){
if(A.z8(C,this.A8))return;A.Core.B8.Dt.call(this,C);this.Ae.Set(0,0,C[0]);this.Ae.
Set(0,1,C[1]);this.Ae.Set(0,2,1);this.Cb=0x45;A.ow([this,this.D8],this);},IW:function(
){return;},GK:function(AJ){var B;if(this.Cb===0x00)return;if(this.Cb===0x45){var
Ca=A._NewObject(A.Graphics.G$,0);Ca=Ca.HY(this.Ae.Get(0,0),this.Ae.Get(0,1),this.
Ae.Get(1,0),this.Ae.Get(1,1),this.Ae.Get(2,0),this.Ae.Get(2,1),this.Ae.Get(3,0),
this.Ae.Get(3,1));if(!!Ca){Ca.EF(0,0);this.Ae.Set(0,2,Ca.D5*240);Ca.EF(1,0);this.
Ae.Set(1,2,Ca.D5*240);Ca.EF(1,1);this.Ae.Set(2,2,Ca.D5*240);Ca.EF(0,1);this.Ae.Set(
3,2,Ca.D5*240);}this.IW();}this.Fk=this.Cb;this.Cb=0x00;if(!!this.G&&((this.E&0x1
)===0x1))this.G.Ah(this.GetExtent());},D8:function(Jh){this.GK(Jh);},ID:function(
C){var B;if(C===this.FZ)return;this.FZ=C;if(!!this.G&&((this.E&0x1)===0x1))this.
G.Ah(this.GetExtent());},_Init:function(aArg){A.Core.B8._Init.call(this,aArg);(this.
Ae=[]).__proto__=D.CL.Ae;this.__proto__=D.CL;this.E=0x3;},_className:"Views::WarpView"
};D.Bx={Ai:null,bitmap:null,Ab:null,Hn:1,Ho:0,Hp:0,Hq:0,Hr:1,Hs:0,Ht:0,Hu:0,Hv:1
,Gw:false,BK:function(Ao,aClip,aOffset,Am,aBlend){var B;if(!this.bitmap)return;this.
bitmap.Update();var Fi=aOffset[0];var Fj=aOffset[1];var V=[].concat(Af,this.CQ);
aBlend=aBlend&&((this.E&0x2)===0x2);Am=Am+1;var IS=255|(255<<8)|(255<<16)|((((Am
*255)>>8)&0xFF)<<24);var IT=255|(255<<8)|(255<<16)|((((Am*255)>>8)&0xFF)<<24);var
IU=255|(255<<8)|(255<<16)|((((Am*255)>>8)&0xFF)<<24);var IV=255|(255<<8)|(255<<16
)|((((Am*255)>>8)&0xFF)<<24);aClip=A.z6(aClip,A.aam(AB,aOffset));Ao.IM(aClip,this.
bitmap,0,this.Ae.Get(0,0)+Fi,this.Ae.Get(0,1)+Fj,this.Ae.Get(0,2),this.Ae.Get(1,
0)+Fi,this.Ae.Get(1,1)+Fj,this.Ae.Get(1,2),this.Ae.Get(2,0)+Fi,this.Ae.Get(2,1)+
Fj,this.Ae.Get(2,2),this.Ae.Get(3,0)+Fi,this.Ae.Get(3,1)+Fj,this.Ae.Get(3,2),V,IS
,IT,IU,IV,aBlend,this.FZ);},AD:function(Ac){if(!this.Ab||!this.Ai)return null;var
X=(A.Core.C2.isPrototypeOf(Ac)?Ac:null);var AM=(A.Core.DP.isPrototypeOf(Ac)?Ac:null
);if(!X&&!AM)return null;var AZ=Af;var Q=this.Ai.G;while(!!Q&&(Q!==this.Ab)){AZ=
A.aaj(AZ,Q.P.slice(0,2));Q=Q.G;}var H=this.Ai;if(!!X&&!X.Down)this.Ai=null;if(!!
X){X.A0=A.aak(this.DL(X.A0),AZ);X.BH=A.aak(this.DL(X.BH),AZ);return H.AD(X);}if(
!!AM){var I9=A.aak(this.DL(A.aaj(AM.A0,AM.B7)),AZ);AM.A0=A.aak(this.DL(AM.A0),AZ
);AM.BH=A.aak(this.DL(AM.BH),AZ);AM.B7=A.aaj(AM.A0,I9);return H.AD(AM);}return D.
CL.AD.call(this,Ac);},Ct:function(U,K,Bd,CO,Ci,CP){var B;if(!this.Ab||!((this.Ab.
E&0x18)===0x18))return null;var Az=A.zT(U);Az=this.DL(Az);var Dj=[].concat(Af,this.
CQ);if(!A.vt(Dj,Az))return null;var A4=this.Ab.Ct(A.aam(A.aam([0,0,U[2]-U[0],U[3
]-U[1]],Az),this.Ab.P.slice(0,2)),K,Bd,CO,null,CP);if(!!A4)this.Ai=A4.A_;else this.
Ai=null;if(!!this.Ai)return A._NewObject(A.Core.EG,0).Initialize(this,Af);return null;
},GK:function(AJ){D.CL.GK.call(this,AJ);this.Gw=false;},Jl:function(){var L=this.
Ae.Get(0,0);var M=this.Ae.Get(0,1);var N=this.Ae.Get(1,0);var O=this.Ae.Get(1,1);
var GM=this.Ae.Get(2,0);var GO=this.Ae.Get(2,1);var Fs=this.Ae.Get(3,0);var Ft=this.
Ae.Get(3,1);var Ee=N-GM;var Eg=O-GO;var Ef=Fs-GM;var Eh=Ft-GO;var Ey=((L-N)+GM)-
Fs;var Ez=((M-O)+GO)-Ft;var Dc=(Ee*Eh)-(Eg*Ef);if(!Dc)return;var DI=((Ey*Eh)-(Ez
*Ef))/Dc;var Ak=((Ee*Ez)-(Eg*Ey))/Dc;var EV=(N-L)+(DI*N);var E6=(Fs-L)+(Ak*Fs);var
AG=L;var E9=(O-M)+(DI*O);var E$=(Ft-M)+(Ak*Ft);var Fa=M;this.Hn=E$-(Fa*Ak);this.
Ho=(AG*Ak)-E6;this.Hp=(E6*Fa)-(AG*E$);this.Hq=(Fa*DI)-E9;this.Hr=EV-(AG*DI);this.
Hs=(AG*E9)-(EV*Fa);this.Ht=(E9*Ak)-(E$*DI);this.Hu=(E6*DI)-(EV*Ak);this.Hv=(EV*E$
)-(E6*E9);this.Gw=true;},DL:function(AL){var B;if(!this.Gw)this.Jl();var GN=AL[0
];var GP=AL[1];var EB=((GN*this.Hn)+(GP*this.Ho))+this.Hp;var EC=((GN*this.Hq)+(
GP*this.Hr))+this.Hs;var GG=((GN*this.Ht)+(GP*this.Hu))+this.Hv;if(!!GG){EB=EB/GG;
EC=EC/GG;}var Dj=[].concat(Af,this.CQ);EB=EB*(Dj[2]-Dj[0]);EC=EC*(Dj[3]-Dj[1]);return A.
aak([EB|0,EC|0],Dj.slice(0,2));},CE:function(AJ){var B;var HE=this.CQ;if(!!this.
Ab)this.bitmap=this.Ab.Ax;else this.bitmap=null;if(!!this.bitmap)this.CQ=this.bitmap.
FrameSize;else this.CQ=Af;if(((A.z8(HE,this.CQ)||((this.Fk===0x45)&&(this.Cb===0x00
)))&&!!this.G)&&((this.E&0x1)===0x1))this.G.Ah(this.GetExtent());if(((this.Fk!==
0x45)&&(this.Cb===0x00))&&!A.z8(HE,this.CQ)){this.Cb=this.Fk;A.ow([this,this.D8]
,this);}},G4:function(C){if(C===this.Ab)return;if(!!C&&(C===this.G))throw new Error(
Cv);if(!!this.Ab){A.zl([this,this.CE],this.Ab,0);this.bitmap=null;}this.Ab=C;if(
!!C){A.y_([this,this.CE],C,0);this.bitmap=C.Ax;}this.CE(this);},_Init:function(aArg
){D.CL._Init.call(this,aArg);this.__proto__=D.Bx;},_Mark:function(F){var B;D.CL.
_Mark.call(this,F);if((B=this.Ai)&&(B._cycle!=F))B._Mark(B._cycle=F);if((B=this.
bitmap)&&(B._cycle!=F))B._Mark(B._cycle=F);if((B=this.Ab)&&(B._cycle!=F))B._Mark(
B._cycle=F);},_className:"Views::WarpGroup"};D.JJ={HT:0x1,HS:0x2,HU:0x4,HX:0x8,HW:
0x10,HV:0x20,J8:0x40,J9:0x80,J$:0x100};D.Ka={HT:0x1,HS:0x2,HU:0x4,HX:0x8,HW:0x10
,HV:0x20,Jq:0x40,Jp:0x80,Jv:0x100};D.JT={JS:0,J6:1,J4:2,J5:3};
D._Init=function(){D.B9.__proto__=A.Core.AP;D.FF.__proto__=A.Core.AP;D.Bm.__proto__=
A.Core.AP;D.Text.__proto__=A.Core.AP;D.CL.__proto__=A.Core.B8;D.Bx.__proto__=D.CL;
};D._ReInit=function(){};D.A1=function(F){};return D;})();

/* Embedded Wizard */