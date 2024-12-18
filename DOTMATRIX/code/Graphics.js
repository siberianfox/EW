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
);EmWiApp.Graphics=(function(){var A=EmWiApp;var C={};
var Ae=[0,0];var At="Can not resize explicitly attached graphics engine bitmaps";
var B4=[0,0,0,0];var CP="No graphics engine bitmap attached to this canvas";var CQ=
"The canvas is already initialized with a graphics engine bitmap";var CR="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Co="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
C.Canvas={Bx:null,Dy:null,A4:A.vx,Bt:0,CZ:false,Bh:function(){if(this.CZ)this.DetachBitmap(
);},AE:function(aArg){this.Dx=true;},CI:function(F){if((F[0]<=0)||(F[1]<=0))F=Ae;
if(A.z8(F,this.FrameSize))return;if(this.CZ)throw new Error(At);this.FrameSize=F;
this.Bz=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle);this.
bitmap=null;},Update:function(){var B;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=A.qQ(A.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=Ae;this.FrameDelay=
0;this.NoOfFrames=1;}this.A4=[].concat(Ae,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.Bt;for(this.Bt=this.NoOfFrames-1;this.Bt>=0;this.Bt--)this.Ds(this.A4,this.
A4,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Bt=dstFrameNr;}}if(!(((
B=this.A4)[0]>=B[2])||(B[1]>=B[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(B=this.Dy)?B[1].call(B[0],this):null;this.A4=B4;}},DetachBitmap:function(){
if(!this.CZ)throw new Error(CP);this.bitmap=null;this.CZ=false;this.FrameSize=Ae;
this.FrameDelay=0;this.NoOfFrames=1;this.Bz=false;return this;},AttachBitmap:function(
aBitmap){if(!!this.bitmap)throw new Error(CQ);if(!aBitmap)return this;this.bitmap=
aBitmap;this.CZ=true;var noOfFrames=1;var frameSize=Ae;var frameDelay=0;{noOfFrames=
aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.
NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Bz=(
this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},EL:function(aClip,Ej,aString
,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,El,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=
0;if((!Ej||!Ej.font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=
0;if(El===1)orient=90;else if(El===2)orient=180;else if(El===3)orient=270;var dstFrameNo=
this.Bt;var dstBitmap=this.bitmap;var srcFont=Ej.font;{A.qT(dstBitmap,srcFont,aString
,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},FR:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1
,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1
,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var K=aDstX1;var T=aDstX2;var L=aDstY1;var U=aDstY2;if(aDstX2<
K)K=aDstX2;if(aDstX3<K)K=aDstX3;if(aDstX4<K)K=aDstX4;if(aDstX2>T)T=aDstX2;if(aDstX3>
T)T=aDstX3;if(aDstX4>T)T=aDstX4;if(aDstY2<L)L=aDstY2;if(aDstY3<L)L=aDstY3;if(aDstY4<
L)L=aDstY4;if(aDstY2>U)U=aDstY2;if(aDstY3>U)U=aDstY3;if(aDstY4>U)U=aDstY4;if(((((
T-K)>4096)||((T-K)<-4096))||((U-L)>4096))||((U-L)<-4096)){A.aa8("%s",CR);return;
}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Bt;{
A.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,
aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2
,aColor3,aColor4,aBlend,aFilter);}},FO:function(aClip,aBitmap,aFrameNr,aDstRect,
aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=aDstRect[0];var
right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096)||((right-left)<-
4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.aa8("%s",Co);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Bt;{A.aa9(dstBitmap
,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top,1,right,bottom,1,left,
bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter);}},EJ:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Bt;{A.gn(dstBitmap,srcBitmap,dstFrameNr
,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},
Ds:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=
this.Bt;{A.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend);}},_Init:function(aArg){A.abg.Y._Init.call(this,aArg);this.__proto__=C.
Canvas;this.AE(aArg);},_Done:function(){this.Bh();this.__proto__=A.abg.Y;A.abg.Y.
_Done.call(this);},_Mark:function(E){var B;A.abg.Y._Mark.call(this,E);if((B=this.
Bx)&&(B._cycle!=E))B._Mark(B._cycle=E);if((B=this.Dy)&&((B=B[0])._cycle!=E))B._Mark(
B._cycle=E);},_className:"Graphics::Canvas"};C.EU={Fz:1,FA:0,FB:0,FC:0,FD:1,FE:0
,Dv:0,Dw:0,FF:1,EM:0,CO:0,Go:true,Do:function(F$,Ga){var GF=((F$*this.Dv)+(Ga*this.
Dw))+this.EM;this.CO=GF;return true;},Fr:function(DF,DI,DG,DJ,En,Eo,DH,DK){var C4=
DG-En;var C6=DJ-Eo;var C5=DH-En;var C7=DK-Eo;var Dh=((DF-DG)+En)-DH;var Di=((DI-
DJ)+Eo)-DK;var Cb=(C4*C7)-(C6*C5);if(!Cb)return null;this.Dv=((Dh*C7)-(Di*C5))/Cb;
this.Dw=((C4*Di)-(C6*Dh))/Cb;this.FF=0;this.EM=1;this.Fz=(DG-DF)+(this.Dv*DG);this.
FA=(DH-DF)+(this.Dw*DH);this.FB=DF;this.FC=(DJ-DI)+(this.Dv*DJ);this.FD=(DK-DI)+(
this.Dw*DK);this.FE=DI;this.Go=false;return this;},_Init:function(aArg){this.__proto__=
C.EU;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){}
,_Mark:function(E){var B;if((B=this.Aa)&&(B._cycle!=E))B._Mark(B._cycle=E);},Aa:
null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};
C._Init=function(){C.Canvas.__proto__=A.abg.Y;};C._ReInit=function(){};C.AX=function(
E){};return C;})();

/* Embedded Wizard */