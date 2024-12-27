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
);if(EmWiApp.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);EmWiApp.Graphics=(function(){var B=EmWiApp;var C={};
var A7=[0,0];var AW="Can not resize explicitly attached graphics engine bitmaps";
var Dh=[0,0,0,0];var Di="No graphics engine bitmap attached to this canvas";var Fn=
"The canvas is already initialized with a graphics engine bitmap";var EF="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Fo="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var HF="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Kf=[1,1];var I3=[2,2];
C.Canvas={AQ:null,Lk:null,DQ:B.vx,DO:0,Kq:false,DN:function(){if(this.Kq)this.DetachBitmap(
);},AO:function(aArg){this.D_=true;},J0:function(E){if((E[0]<=0)||(E[1]<=0))E=A7;
if(B.z8(E,this.FrameSize))return;if(this.Kq)throw new Error(AW);this.FrameSize=E;
this.DI=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.
bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B.qQ(B.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=A7;this.FrameDelay=
0;this.NoOfFrames=1;}this.DQ=[].concat(A7,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.DO;for(this.DO=this.NoOfFrames-1;this.DO>=0;this.DO--)this.K_(this.DQ,this.
DQ,0x00000000,0x00000000,0x00000000,0x00000000,false);this.DO=dstFrameNr;}}if(!(((
A=this.DQ)[0]>=A[2])||(A[1]>=A[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(A=this.Lk)?A[1].call(A[0],this):null;this.DQ=Dh;}},DetachBitmap:function(){
if(!this.Kq)throw new Error(Di);this.bitmap=null;this.Kq=false;this.FrameSize=A7;
this.FrameDelay=0;this.NoOfFrames=1;this.DI=false;return this;},AttachBitmap:function(
aBitmap){if(!!this.bitmap)throw new Error(Fn);if(!aBitmap)return this;this.bitmap=
aBitmap;this.Kq=true;var noOfFrames=1;var frameSize=A7;var frameDelay=0;{noOfFrames=
aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.
NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.DI=(
this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},ON:function(aClip,NT,aString
,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,NV,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=
0;if((!NT||!NT.font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=
0;if(NV===1)orient=90;else if(NV===2)orient=180;else if(NV===3)orient=270;var dstFrameNo=
this.DO;var dstBitmap=this.bitmap;var srcFont=NT.font;{B.qT(dstBitmap,srcFont,aString
,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Q0:function(aClip,aBitmap,aFrameNr,aDstRect,I8,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.Update();if(!this.
bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!I8)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;
var dstFrameNo=this.DO;var srcRect=[].concat(A7,aBitmap.FrameSize);var left=((I8&
0x1)===0x1);var top=((I8&0x2)===0x2);var right=((I8&0x4)===0x4);var bottom=((I8&
0x8)===0x8);var interior=((I8&0x10)===0x10);{B.zp(dstBitmap,srcBitmap,dstFrameNo
,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Sr:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1
,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1
,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){B.aa8("%s",EF);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.DO;{B.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Sq:function(aClip,aBitmap
,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){
if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){B.aa8("%s"
,Fo);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.DO;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},OL:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.DO;{B.
gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},K_:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.DO;{B.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Q3:function(aClip,aDstPos1,aDstPos2,Ua,Ub
,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var
FF=Ua;var FG=Ub;var E2=aDstPos1;var E3=aDstPos2;if(B.z8(E2,E3))return;if(FF<=1)FF=
1;if(FG<=1)FG=1;var Gh=FF/2;var Gi=FG/2;var HP=E2[0];var HQ=E2[1];var HR=E3[0];var
HS=E3[1];var C7=HR-HP;var C8=HS-HQ;var B0=Math.sqrt((C7*C7)+(C8*C8));if(((FF>4096
)||(FG>4096))||(B0>4096)){B.aa8("%s",HF);return;}C7=C7/B0;C8=C8/B0;var x1=HP+(C8
*Gh);var y1=HQ-(C7*Gh);var x2=HR+(C8*Gi);var y2=HS-(C7*Gi);var x3=HR-(C8*Gi);var
y3=HS+(C7*Gi);var x4=HP-(C8*Gh);var y4=HQ+(C7*Gh);var QD=B.zW(B.abi.I0);var srcRect=[
].concat(Kf,B.aaj(QD.FrameSize,I3));var dstBitmap=this.bitmap;var dstFrameNo=this.
DO;var srcBitmap=QD.bitmap;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0
,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2,aColor1,aBlend,false
);}},Q2:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend){if(!this.bitmap
)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.
DO;{B.zr(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend);}}
,_Init:function(aArg){B.abi.Ab._Init.call(this,aArg);this.__proto__=C.Canvas;this.
AO(aArg);},_Done:function(){this.DN();this.__proto__=B.abi.Ab;B.abi.Ab._Done.call(
this);},_Mark:function(D){var A;B.abi.Ab._Mark.call(this,D);if((A=this.AQ)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Lk)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);},_className:"Graphics::Canvas"};C.PB={Q_:1,Q$:0,Ra:0,Rb:0,Rc:1,Rd:0,Li:0,Lj:0
,Re:1,O7:0,Ke:0,Ut:true,K5:function(aX,Uc){var Vn=((aX*this.Li)+(Uc*this.Lj))+this.
O7;this.Ke=Vn;return true;},QX:function(LF,LI,LG,LJ,NY,NZ,LH,LK){var Ku=LG-NY;var
Kw=LJ-NZ;var Kv=LH-NY;var Kx=LK-NZ;var KY=((LF-LG)+NY)-LH;var KZ=((LI-LJ)+NZ)-LK;
var HL=(Ku*Kx)-(Kw*Kv);if(!HL)return null;this.Li=((KY*Kx)-(KZ*Kv))/HL;this.Lj=((
Ku*KZ)-(Kw*KY))/HL;this.Re=0;this.O7=1;this.Q_=(LG-LF)+(this.Li*LG);this.Q$=(LH-
LF)+(this.Lj*LH);this.Ra=LF;this.Rb=(LJ-LI)+(this.Li*LJ);this.Rc=(LK-LI)+(this.Lj
*LK);this.Rd=LI;this.Ut=false;return this;},_Init:function(aArg){this.__proto__=
C.PB;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null
,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};C.VE={Left:0x1,Wq:0x2
,Right:0x4,Vw:0x8,VQ:0x10};
C._Init=function(){C.Canvas.__proto__=B.abi.Ab;};C._ReInit=function(){};C.CH=function(
D){};return C;})();

/* Embedded Wizard */