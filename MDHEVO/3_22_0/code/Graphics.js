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
* Version  : 11.00
* Profile  : WebGL
* Platform : Tara.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);EmWiApp.Graphics=(function(){var A=EmWiApp;var D={};
var BR=[0,0];var A1="Can not resize explicitly attached graphics engine bitmaps";
var An=[0,0,0,0];var Dy="No graphics engine bitmap attached to this canvas";var EF=
"The canvas is already initialized with a graphics engine bitmap";var G7="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var G8="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var GB="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var HH=[1,1];var G9=[2,2];
D.Canvas={VV:null,Fj:A.qL,GR:0,Ug:false,GQ:function(){if(this.Ug)this.DetachBitmap(
);},Ap:function(aArg){this.Hv=true;},QM:function(E){if((E[0]<=0)||(E[1]<=0))E=BR;
if(A.tH(E,this.FrameSize))return;if(this.Ug)throw new Error(A1);this.FrameSize=E;
this.FE=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;A.s9(handle);this.
bitmap=null;},Update:function(){var B;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=A.nm(A.ci,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=BR;this.FrameDelay=
0;this.NoOfFrames=1;}this.Fj=[].concat(BR,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.GR;for(this.GR=this.NoOfFrames-1;this.GR>=0;this.GR--)this.Vt(this.Fj,this.
Fj,0x00000000,0x00000000,0x00000000,0x00000000,false);this.GR=dstFrameNr;}}if(!(((
B=this.Fj)[0]>=B[2])||(B[1]>=B[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(B=this.VV)?B[1].call(B[0],this):null;this.Fj=An;}},DetachBitmap:function(){
if(!this.Ug)throw new Error(Dy);this.bitmap=null;this.Ug=false;this.FrameSize=BR;
this.FrameDelay=0;this.NoOfFrames=1;this.FE=false;return this;},AttachBitmap:function(
aBitmap){if(!!this.bitmap)throw new Error(EF);if(!aBitmap)return this;this.bitmap=
aBitmap;this.Ug=true;var noOfFrames=1;var frameSize=BR;var frameDelay=0;{noOfFrames=
aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.
NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.FE=(
this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Afc:function(aClip,AdR,aString
,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,AdT,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=
0;if((!AdR||!AdR.font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=
0;if(AdT===1)orient=90;else if(AdT===2)orient=180;else if(AdT===3)orient=270;var
dstFrameNo=this.GR;var dstBitmap=this.bitmap;var srcFont=AdR.font;{A.np(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ajz:function(aClip,aBitmap,aFrameNr
,aDstRect,RP,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var B;if(!this.bitmap)this.
Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!RP)||(aFrameNr<
0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.GR;var srcRect=[].concat(BR,aBitmap.FrameSize
);var left=((RP&0x1)===0x1);var top=((RP&0x2)===0x2);var right=((RP&0x4)===0x4);
var bottom=((RP&0x8)===0x8);var interior=((RP&0x10)===0x10);{A.s2(dstBitmap,srcBitmap
,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Tv:function(aClip,aBitmap,aFrameNr,aDstX1
,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect
,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096.000000)||((x2-x1)<-4096.000000))||((y2-
y1)>4096.000000))||((y2-y1)<-4096.000000)){A.uF("%s",G7);return;}var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.GR;{A.uG(dstBitmap,srcBitmap
,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3
,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter
);}},Alk:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((
!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[
3];if(((((right-left)>4096.000000)||((right-left)<-4096.000000))||((bottom-top)>
4096.000000))||((bottom-top)<-4096.000000)){A.uF("%s",G8);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.GR;{A.uG(dstBitmap,
srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom
,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter);}},Ae7:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.GR;{A.fJ(dstBitmap,srcBitmap,dstFrameNr
,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},
M9:function(aClip,AdU,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,AnV){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(
!AdU||!AdU.path)return;var nonZeroWinding=AnV===1;var dstBitmap=this.bitmap;var dstFrameNo=
this.GR;var path=AdU.path;{A.s5(dstBitmap,path,dstFrameNo,aClip,aDstRect,aFlipY,
aOffset,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,nonZeroWinding);
}},AjA:function(aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.GR;{A.s3(dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Vt:function(aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var dstBitmap=this.bitmap;var dstFrameNo=this.GR;{A.hs(dstBitmap,dstFrameNo,aClip
,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},AjD:function(aClip,aDstPos1
,aDstPos2,AnY,AnZ,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;var Ld=AnY;var Le=AnZ;var Kj=aDstPos1;var Kk=aDstPos2;if(A.tH(Kj,Kk
))return;if(Ld<=1)Ld=1;if(Le<=1)Le=1;var Ms=Ld/2.000000;var Mt=Le/2.000000;var Pt=
Kj[0];var Pu=Kj[1];var Pv=Kk[0];var Pw=Kk[1];var FY=Pv-Pt;var FZ=Pw-Pu;var DN=Math.
sqrt((FY*FY)+(FZ*FZ));if(((Ld>4096)||(Le>4096))||(DN>4096.000000)){A.uF("%s",GB);
return;}FY=FY/DN;FZ=FZ/DN;var x1=Pt+(FZ*Ms);var y1=Pu-(FY*Ms);var x2=Pv+(FZ*Mt);
var y2=Pw-(FY*Mt);var x3=Pv-(FZ*Mt);var y3=Pw+(FY*Mt);var x4=Pt-(FZ*Ms);var y4=Pu+(
FY*Ms);var AiS=A.tv(A.uQ.Rv);var srcRect=[].concat(HH,A.tU(AiS.FrameSize,G9));var
dstBitmap=this.bitmap;var dstFrameNo=this.GR;var srcBitmap=AiS.bitmap;{A.uG(dstBitmap
,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1
,aColor2,aColor2,aColor1,aBlend,false);}},AjC:function(aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.GR;{A.s4(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2
,aColor1,aColor2,aBlend);}},_Init:function(aArg){A.uQ.W._Init.call(this,aArg);this.
__proto__=D.Canvas;this.Ap(aArg);},_Done:function(){this.GQ();this.__proto__=A.uQ.
W;A.uQ.W._Done.call(this);},_Mark:function(C){var B;A.uQ.W._Mark.call(this,C);if((
B=this.VV)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);},_className:"Graphics::Canvas"
};D.Tw={LF:1.000000,LG:0,Nm:0,QC:0,LH:0,LI:1.000000,Nn:0,QD:0,IZ:0,I0:0,No:1.000000
,OL:0,Kz:0,KA:0,Np:0,OM:1.000000,HG:0,L9:0,L8:0,YU:0,Uv:true,U8:function(aX,aY){
var MT=((aX*this.IZ)+(aY*this.I0))+this.OL;var AV=((aX*this.Kz)+(aY*this.KA))+this.
OM;if((AV!==0.000000)&&(AV!==1.000000))MT=MT/AV;this.HG=MT;return true;},NE:function(
aX,aY){var R2=this.YU;if(R2<0.000000)return false;var Hh=((aX*this.LF)+(aY*this.
LG))+this.QC;var IR=((aX*this.LH)+(aY*this.LI))+this.QD;var MT=((aX*this.IZ)+(aY
*this.I0))+this.OL;var AV=((aX*this.Kz)+(aY*this.KA))+this.OM;var UO=1.000000;if((
AV!==0.000000)&&(AV!==1.000000)){Hh=Hh/AV;IR=IR/AV;MT=MT/AV;}if(R2!==-MT)UO=1.000000
/(MT+R2);if(R2!==0.000000)UO=UO*R2;this.L8=Hh*UO;this.L9=IR*UO;this.HG=MT+R2;return true;
},Wv:function(AhI,AhJ,AhK){var US=Math.sin(AhI*A.iq);var Ui=Math.cos(AhI*A.iq);var
UT=Math.sin(AhJ*A.iq);var Uj=Math.cos(AhJ*A.iq);var UU=Math.sin(AhK*A.iq);var XD=
Math.cos(AhK*A.iq);var X4=Uj*XD;var X7=UU;var X_=-UT*XD;var X5=((-Ui*Uj)*UU)+(US
*UT);var X8=Ui*XD;var X$=((Ui*UT)*UU)+(US*Uj);var X6=((US*Uj)*UU)+(Ui*UT);var X9=-
US*XD;var Ya=((-US*UT)*UU)+(Ui*Uj);var Aok=((this.LF*X4)+(this.LG*X7))+(this.Nm*
X_);var Aon=((this.LH*X4)+(this.LI*X7))+(this.Nn*X_);var Aoq=((this.IZ*X4)+(this.
I0*X7))+(this.No*X_);var Aot=((this.Kz*X4)+(this.KA*X7))+(this.Np*X_);var Aol=((
this.LF*X5)+(this.LG*X8))+(this.Nm*X$);var Aoo=((this.LH*X5)+(this.LI*X8))+(this.
Nn*X$);var Aor=((this.IZ*X5)+(this.I0*X8))+(this.No*X$);var Aou=((this.Kz*X5)+(this.
KA*X8))+(this.Np*X$);var Aom=((this.LF*X6)+(this.LG*X9))+(this.Nm*Ya);var Aop=((
this.LH*X6)+(this.LI*X9))+(this.Nn*Ya);var Aos=((this.IZ*X6)+(this.I0*X9))+(this.
No*Ya);var Aov=((this.Kz*X6)+(this.KA*X9))+(this.Np*Ya);this.LF=Aok;this.LG=Aol;
this.Nm=Aom;this.LH=Aon;this.LI=Aoo;this.Nn=Aop;this.IZ=Aoq;this.I0=Aor;this.No=
Aos;this.Kz=Aot;this.KA=Aou;this.Np=Aov;this.Uv=false;return this;},Ahi:function(
Xb,Xc,Xd){this.QC=((this.QC+(this.LF*Xb))+(this.LG*Xc))+(this.Nm*Xd);this.QD=((this.
QD+(this.LH*Xb))+(this.LI*Xc))+(this.Nn*Xd);this.OL=((this.OL+(this.IZ*Xb))+(this.
I0*Xc))+(this.No*Xd);this.OM=((this.OM+(this.Kz*Xb))+(this.KA*Xc))+(this.Np*Xd);
this.Uv=false;return this;},Aju:function(Xj,Xm,Xk,Xn,AdX,AdY,Xl,Xo){var Uk=Xk-AdX;
var Um=Xn-AdY;var Ul=Xl-AdX;var Un=Xo-AdY;var UW=((Xj-Xk)+AdX)-Xl;var UX=((Xm-Xn
)+AdY)-Xo;var Po=(Uk*Un)-(Um*Ul);if(Po===0.000000)return null;this.IZ=((UW*Un)-(
UX*Ul))/Po;this.I0=((Uk*UX)-(Um*UW))/Po;this.No=0.000000;this.OL=1.000000;this.LF=(
Xk-Xj)+(this.IZ*Xk);this.LG=(Xl-Xj)+(this.I0*Xl);this.Nm=0.000000;this.QC=Xj;this.
LH=(Xn-Xm)+(this.IZ*Xn);this.LI=(Xo-Xm)+(this.I0*Xo);this.Nn=0.000000;this.QD=Xm;
this.Kz=0.000000;this.KA=0.000000;this.Np=0.000000;this.OM=1.000000;this.Uv=false;
return this;},Ajj:function(DY){if(!DY)return this;this.LF=DY.LF;this.LG=DY.LG;this.
Nm=DY.Nm;this.QC=DY.QC;this.LH=DY.LH;this.LI=DY.LI;this.Nn=DY.Nn;this.QD=DY.QD;this.
IZ=DY.IZ;this.I0=DY.I0;this.No=DY.No;this.OL=DY.OL;this.Kz=DY.Kz;this.KA=DY.KA;this.
Np=DY.Np;this.OM=DY.OM;this.Uv=DY.Uv;this.YU=DY.YU;return this;},_Init:function(
aArg){this.__proto__=D.Tw;A.gx++;},_Done:function(){this.__proto__=null;A.gx--;}
,_ReInit:function(){},_Mark:function(C){var B;if((B=this.G)&&(B._cycle!=C))B._Mark(
B._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};
D.ET={path:null,GQ:function(){if(!this.path)return;var handle=this.path;A.ln(handle
);this.path=null;},Om:function(P){A.qJ(this,0);},T_:function(C8){this.Om(C8);},BW:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){A.lz([this,this.T_],this);var handle=this.path;var result=0;{result=A.qv(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},IU:function(aSubPathNo){A.lz([this,this.T_],this);var handle=
this.path;A.nl(handle,aSubPathNo);},Lj:function(aSubPathNo,aX,aY){A.lz([this,this.
T_],this);var handle=this.path;A.ng(handle,aSubPathNo,aX,aY);},Dt:function(aSubPathNo
,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.Ag$(1);A.lz([this,this.T_],this);
var handle=this.path;var result=false;result=A.is(handle,aSubPathNo,aMaxNoOfEdges
);return result;},AjI:function(){if(!this.path)return 1;var handle=this.path;var
result=0;result=A.th(handle);return result;},Ag$:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.AjI()===aMaxNoOfSubPaths))return true;
var handle=this.path;{A.ln(handle);handle=A.nn(aMaxNoOfSubPaths);}this.path=handle;
A.lz([this,this.T_],this);return!!this.path;},_Init:function(aArg){this.__proto__=
D.ET;A.gx++;},_Done:function(){this.GQ();this.__proto__=null;A.gx--;},_ReInit:function(
){},_Mark:function(C){var B;if((B=this.G)&&(B._cycle!=C))B._Mark(B._cycle=C);},G:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};D.Sx={Left:0x1,ArF:0x2
,Right:0x4,ApU:0x8,AqD:0x10};D.Vu={Aqi:0,AqW:1};D.ApM={ApL:0,Ars:1,Aq3:2,Aq4:3,Aq6:
4,Aq5:5};D.PX={EP:360.000000,AX:0,Ez:0,Ej:0,Cp:0,Cw:0,B$:0,OA:function(P){var B6=
this.EP-this.AX;var BJ;if((B6>=360.000000)||(B6<=-360.000000))B6=360.000000;this.
Ag$(2);{var Ag=this.Cw;if(this.Cp>Ag)Ag=this.Cp;if(B6===360.000000)BJ=Ag|0;else BJ=((
B6*Ag)/360.000000)|0;if(BJ<0)BJ=-BJ;BJ=BJ+1;}if((((B6===0.000000)||(this.Cw===0.000000
))||(this.Cp===0.000000))||(((((this.B$===2)||(this.B$===3))||(this.B$===4))||(this.
B$===5))&&((this.Ej>=this.Cw)||(this.Ez>=this.Cp)))){this.Dt(0,0);this.Dt(1,0);return;
}if((B6===360.000000)&&((((((this.B$!==2)&&(this.B$!==3))&&(this.B$!==4))&&(this.
B$!==5))||(this.Ej===0.000000))||(this.Ez===0.000000))){this.Dt(0,BJ+1);this.Dt(
1,0);this.BW(0,0.000000,0.000000,this.Cw,this.Cp,0.000000,360.000000,BJ);this.IU(
0);return;}if((((B6===360.000000)&&((((this.B$===2)||(this.B$===3))||(this.B$===
4))||(this.B$===5)))&&(this.Ej>0.000000))&&(this.Ez>0.000000)){this.Dt(0,BJ+1);this.
Dt(1,BJ+1);this.BW(0,0.000000,0.000000,this.Cw,this.Cp,0.000000,360.000000,BJ);this.
BW(1,0.000000,0.000000,this.Ej,this.Ez,360.000000,0.000000,BJ);this.IU(0);this.IU(
1);return;}if(!this.B$){this.Dt(0,BJ+1);this.Dt(1,0);this.BW(0,0.000000,0.000000
,this.Cw,this.Cp,this.AX,this.AX+B6,BJ);return;}if(this.B$===1){this.Dt(0,BJ+1);
this.Dt(1,0);this.BW(0,0.000000,0.000000,this.Cw,this.Cp,this.AX,this.AX+B6,BJ);
this.IU(0);return;}if((this.B$===2)&&((this.Ej===0.000000)||(this.Ez===0.000000)
)){this.Dt(0,BJ+1);this.Dt(1,0);this.Lj(0,0.000000,0.000000);this.BW(0,0.000000,
0.000000,this.Cw,this.Cp,this.AX,this.AX+B6,BJ);this.IU(0);return;}if((this.B$===
4)&&((this.Ej===0.000000)||(this.Ez===0.000000))){var Fd=this.Cw*Math.cos(this.AX
*A.iq);var Fe=this.Cp*Math.sin(this.AX*A.iq);var Eb=Math.sqrt((Fd*Fd)+(Fe*Fe));var
Hd=((Eb*0.250000)|0)+3;this.Dt(0,(BJ+Hd)+2);this.Dt(1,0);this.Lj(0,0.000000,0.000000
);if(B6>=0.000000)this.BW(0,Fd/2.000000,Fe/2.000000,Eb/2.000000,Eb/2.000000,this.
AX+180.000000,this.AX+360.000000,Hd);else this.BW(0,Fd/2.000000,Fe/2.000000,Eb/2.000000
,Eb/2.000000,this.AX+180.000000,this.AX,Hd);this.BW(0,0.000000,0.000000,this.Cw,
this.Cp,this.AX,this.AX+B6,BJ);this.IU(0);return;}if((this.B$===5)&&((this.Ej===
0.000000)||(this.Ez===0.000000))){var Dn=this.AX+B6;var Fd=this.Cw*Math.cos(Dn*A.
iq);var Fe=this.Cp*Math.sin(Dn*A.iq);var Eb=Math.sqrt((Fd*Fd)+(Fe*Fe));var Hd=((
Eb*0.250000)|0)+3;this.Dt(0,(BJ+Hd)+2);this.Dt(1,0);this.Lj(0,0.000000,0.000000);
this.BW(0,0.000000,0.000000,this.Cw,this.Cp,this.AX,this.AX+B6,BJ);if(B6>=0.000000
)this.BW(0,Fd/2.000000,Fe/2.000000,Eb/2.000000,Eb/2.000000,Dn,Dn+180.000000,Hd);
else this.BW(0,Fd/2.000000,Fe/2.000000,Eb/2.000000,Eb/2.000000,Dn,Dn-180.000000,
Hd);this.IU(0);return;}if((this.B$===3)&&((this.Ej===0.000000)||(this.Ez===0.000000
))){var MM=this.Cw*Math.cos(this.AX*A.iq);var MN=this.Cp*Math.sin(this.AX*A.iq);
var Km=Math.sqrt((MM*MM)+(MN*MN));var Dn=this.AX+B6;var Mo=this.Cw*Math.cos(Dn*A.
iq);var Mp=this.Cp*Math.sin(Dn*A.iq);var J$=Math.sqrt((Mo*Mo)+(Mp*Mp));var PD=((
Km*0.250000)|0)+3;var PC=((J$*0.250000)|0)+3;this.Dt(0,((BJ+PD)+PC)+10);this.Dt(
1,0);this.Lj(0,0.000000,0.000000);if(B6>=0.000000){this.BW(0,MM/2.000000,MN/2.000000
,Km/2.000000,Km/2.000000,this.AX+180.000000,this.AX+360.000000,PD);this.BW(0,0.000000
,0.000000,this.Cw,this.Cp,this.AX,this.AX+B6,BJ);this.BW(0,Mo/2.000000,Mp/2.000000
,J$/2.000000,J$/2.000000,Dn,Dn+180.000000,PC);}else{this.BW(0,MM/2.000000,MN/2.000000
,Km/2.000000,Km/2.000000,this.AX+180.000000,this.AX,PD);this.BW(0,0.000000,0.000000
,this.Cw,this.Cp,this.AX,this.AX+B6,BJ);this.BW(0,Mo/2.000000,Mp/2.000000,J$/2.000000
,J$/2.000000,Dn,Dn-180.000000,PC);}this.IU(0);return;}if(this.B$===2){this.Dt(0,(
BJ*2)+1);this.Dt(1,0);this.BW(0,0.000000,0.000000,this.Cw,this.Cp,this.AX,this.AX+
B6,BJ);this.BW(0,0.000000,0.000000,this.Ej,this.Ez,this.EP,this.EP-B6,BJ);this.IU(
0);return;}if(this.B$===4){var sin=Math.sin(this.AX*A.iq);var cos=Math.cos(this.
AX*A.iq);var IK=this.Ej*cos;var IL=this.Ez*sin;var Fd=this.Cw*cos;var Fe=this.Cp
*sin;var Eb=Math.sqrt(((Fd-IK)*(Fd-IK))+((Fe-IL)*(Fe-IL)));var Hd=((Eb*0.250000)|
0)+3;this.Dt(0,((BJ*2)+Hd)+2);this.Dt(1,0);if(B6>=0.000000){this.BW(0,0.000000,0.000000
,this.Cw,this.Cp,this.AX,this.AX+B6,BJ);this.BW(0,0.000000,0.000000,this.Ej,this.
Ez,this.EP,this.EP-B6,BJ);this.BW(0,IK+((Fd-IK)/2.000000),IL+((Fe-IL)/2.000000),
Eb/2.000000,Eb/2.000000,this.AX+180.000000,this.AX+360.000000,Hd);}else{this.BW(
0,0.000000,0.000000,this.Cw,this.Cp,this.AX,this.AX+B6,BJ);this.BW(0,0.000000,0.000000
,this.Ej,this.Ez,this.EP,this.EP-B6,BJ);this.BW(0,IK+((Fd-IK)/2.000000),IL+((Fe-
IL)/2.000000),Eb/2.000000,Eb/2.000000,this.AX+180.000000,this.AX,Hd);}this.IU(0);
return;}if(this.B$===5){var Dn=this.AX+B6;var sin=Math.sin(Dn*A.iq);var cos=Math.
cos(Dn*A.iq);var IK=this.Ej*cos;var IL=this.Ez*sin;var Fd=this.Cw*cos;var Fe=this.
Cp*sin;var Eb=Math.sqrt(((Fd-IK)*(Fd-IK))+((Fe-IL)*(Fe-IL)));var Hd=((Eb*0.250000
)|0)+3;this.Dt(0,((BJ*2)+Hd)+2);this.Dt(1,0);if(B6>=0.000000){this.BW(0,0.000000
,0.000000,this.Cw,this.Cp,this.AX,this.AX+B6,BJ);this.BW(0,IK+((Fd-IK)/2.000000)
,IL+((Fe-IL)/2.000000),Eb/2.000000,Eb/2.000000,Dn,Dn+180.000000,Hd);this.BW(0,0.000000
,0.000000,this.Ej,this.Ez,this.EP,this.EP-B6,BJ);}else{this.BW(0,0.000000,0.000000
,this.Cw,this.Cp,this.AX,this.AX+B6,BJ);this.BW(0,IK+((Fd-IK)/2.000000),IL+((Fe-
IL)/2.000000),Eb/2.000000,Eb/2.000000,Dn,Dn-180.000000,Hd);this.BW(0,0.000000,0.000000
,this.Ej,this.Ez,this.EP,this.EP-B6,BJ);}this.IU(0);return;}if(this.B$===3){var Dn=
this.AX+B6;var Ai2=Math.sin(this.AX*A.iq);var Ai1=Math.cos(this.AX*A.iq);var Ah3=
Math.sin(Dn*A.iq);var Ah1=Math.cos(Dn*A.iq);var Sf=this.Ej*Ai1;var Sg=this.Ez*Ai2;
var MM=this.Cw*Ai1;var MN=this.Cp*Ai2;var RZ=this.Ej*Ah1;var R0=this.Ez*Ah3;var Mo=
this.Cw*Ah1;var Mp=this.Cp*Ah3;var Km=Math.sqrt(((MM-Sf)*(MM-Sf))+((MN-Sg)*(MN-Sg
)));var J$=Math.sqrt(((Mo-RZ)*(Mo-RZ))+((Mp-R0)*(Mp-R0)));var PD=((Km*0.250000)|
0)+3;var PC=((J$*0.250000)|0)+3;this.Dt(0,(((BJ*2)+PD)+PC)+4);this.Dt(1,0);if(B6>=
0.000000){this.BW(0,0.000000,0.000000,this.Cw,this.Cp,this.AX,this.AX+B6,BJ);this.
BW(0,RZ+((Mo-RZ)/2.000000),R0+((Mp-R0)/2.000000),J$/2.000000,J$/2.000000,Dn,Dn+180.000000
,PC);this.BW(0,0.000000,0.000000,this.Ej,this.Ez,this.EP,this.EP-B6,BJ);this.BW(
0,Sf+((MM-Sf)/2.000000),Sg+((MN-Sg)/2.000000),Km/2.000000,Km/2.000000,this.AX+180.000000
,this.AX+360.000000,PD);}else{this.BW(0,0.000000,0.000000,this.Cw,this.Cp,this.AX
,this.AX+B6,BJ);this.BW(0,RZ+((Mo-RZ)/2.000000),R0+((Mp-R0)/2.000000),J$/2.000000
,J$/2.000000,Dn,Dn-180.000000,PC);this.BW(0,0.000000,0.000000,this.Ej,this.Ez,this.
EP,this.EP-B6,BJ);this.BW(0,Sf+((MM-Sf)/2.000000),Sg+((MN-Sg)/2.000000),Km/2.000000
,Km/2.000000,this.AX+180.000000,this.AX,PD);}this.IU(0);return;}},V3:function(E){
if(E===this.EP)return;this.EP=E;if((this.Cw>0.000000)&&(this.Cp>0.000000))A.lz([
this,this.OA],this);},We:function(E){if(E===this.AX)return;this.AX=E;if((this.Cw>
0.000000)&&(this.Cp>0.000000))A.lz([this,this.OA],this);},VW:function(){return this.
Ej;},V9:function(E){if((E===this.Ej)&&(E===this.Ez))return;this.Ej=E;this.Ez=E;if((((
this.AX!==this.EP)&&(this.Cw>0.000000))&&(this.Cp>0.000000))&&((((this.B$===2)||(
this.B$===4))||(this.B$===5))||(this.B$===3)))A.lz([this,this.OA],this);},Wd:function(
E){if((E===this.Cw)&&(E===this.Cp))return;this.Cw=E;this.Cp=E;if(this.AX!==this.
EP)A.lz([this,this.OA],this);},DU:function(E){if(E===this.B$)return;this.B$=E;if(((
this.AX!==this.EP)&&(this.Cw>0.000000))&&(this.Cp>0.000000))A.lz([this,this.OA],
this);},_Init:function(aArg){D.ET._Init.call(this,aArg);this.__proto__=D.PX;},_className:
"Graphics::ArcPath"};
D._Init=function(){D.Canvas.__proto__=A.uQ.W;D.PX.__proto__=D.ET;};D._ReInit=function(
){};D.Cx=function(C){};return D;})();

/* Embedded Wizard */