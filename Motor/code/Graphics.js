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
* Profile  : ESP32_WebGL
* Platform : Tara.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);EmWiApp.Graphics=(function(){var B=EmWiApp;var C={};
var AA=[0,0];var A0="Can not resize explicitly attached graphics engine bitmaps";
var B8=[0,0,0,0];var BW="No graphics engine bitmap attached to this canvas";var D3=
"The canvas is already initialized with a graphics engine bitmap";var E3="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Ch="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var E4=[1,1];var Ey=[2,2];
C.Canvas={Gr:B.qL,CC:0,G2:false,Dc:function(){if(this.G2)this.DetachBitmap();},Bz:
function(aArg){this.C2=true;},Kv:function(D){if((D[0]<=0)||(D[1]<=0))D=AA;if(B.tH(
D,this.FrameSize))return;if(this.G2)throw new Error(A0);this.FrameSize=D;this.CB=(((
this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(this.NoOfFrames>
1);if(!this.bitmap)return;var handle=this.bitmap;B.s9(handle);this.bitmap=null;}
,Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(this.FrameSize[
1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;var frameDelay=
this.FrameDelay;var handle=null;{handle=B.nm(B.ci,frameSize,frameDelay,noOfFrames
);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=AA;this.FrameDelay=0;this.
NoOfFrames=1;}this.Gr=[].concat(AA,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.CC;for(this.CC=this.NoOfFrames-1;this.CC>=0;this.CC--)this.IL(this.Gr,this.
Gr,0x00000000,0x00000000,0x00000000,0x00000000,false);this.CC=dstFrameNr;}}if(!(((
A=this.Gr)[0]>=A[2])||(A[1]>=A[3])))this.Gr=B8;},DetachBitmap:function(){if(!this.
G2)throw new Error(BW);this.bitmap=null;this.G2=false;this.FrameSize=AA;this.FrameDelay=
0;this.NoOfFrames=1;this.CB=false;return this;},AttachBitmap:function(aBitmap){if(
!!this.bitmap)throw new Error(D3);if(!aBitmap)return this;this.bitmap=aBitmap;this.
G2=true;var noOfFrames=1;var frameSize=AA;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;
frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.CB=(this.FrameDelay>0)&&(
this.NoOfFrames>1);return this;},Kf:function(aClip,Jw,aString,aOffset,aCount,aDstRect
,aSrcPos,aMinWidth,Jy,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap
)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!Jw||!Jw.font)||((
aOffset>0)&&(aOffset>=aString.length)))return;var orient=0;if(Jy===1)orient=90;else
if(Jy===2)orient=180;else if(Jy===3)orient=270;var dstFrameNo=this.CC;var dstBitmap=
this.bitmap;var srcFont=Jw.font;{B.np(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},LC:function(aClip,aBitmap,aFrameNr,aDstRect,FR,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!FR)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.CC;var srcRect=[
].concat(AA,aBitmap.FrameSize);var left=((FR&0x1)===0x1);var top=((FR&0x2)===0x2
);var right=((FR&0x4)===0x4);var bottom=((FR&0x8)===0x8);var interior=((FR&0x10)===
0x10);{B.s2(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,
top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},L9:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096.000000)||((right-left)<-4096.000000))||((bottom-top)>4096.000000))||((
bottom-top)<-4096.000000)){B.uF("%s",E3);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.CC;{B.uG(dstBitmap,srcBitmap,dstFrameNo,aFrameNr
,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter);}},LA:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;
var dstFrameNr=this.CC;{B.fJ(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect
,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},LD:function(aClip,aDstRect
,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.CC;{B.s3(
dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend);}},IL:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.CC;{B.hs(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},LG:function(aClip,aDstPos1,aDstPos2,Mk,Ml,aColor1,
aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var DM=Mk;var
DN=Ml;var Dp=aDstPos1;var Dq=aDstPos2;if(B.tH(Dp,Dq))return;if(DM<=1)DM=1;if(DN<=
1)DN=1;var D$=DM/2.000000;var Ea=DN/2.000000;var Fe=Dp[0];var Ff=Dp[1];var Fg=Dq[
0];var Fh=Dq[1];var BX=Fg-Fe;var BY=Fh-Ff;var Bb=Math.sqrt((BX*BX)+(BY*BY));if(((
DM>4096)||(DN>4096))||(Bb>4096.000000)){B.uF("%s",Ch);return;}BX=BX/Bb;BY=BY/Bb;
var x1=Fe+(BY*D$);var y1=Ff-(BX*D$);var x2=Fg+(BY*Ea);var y2=Fh-(BX*Ea);var x3=Fg-(
BY*Ea);var y3=Fh+(BX*Ea);var x4=Fe-(BY*D$);var y4=Ff+(BX*D$);var Lc=B.tv(B.uP.FK
);var srcRect=[].concat(E4,B.tU(Lc.FrameSize,Ey));var dstBitmap=this.bitmap;var dstFrameNo=
this.CC;var srcBitmap=Lc.bitmap;{B.uG(dstBitmap,srcBitmap,dstFrameNo,0,aClip,x1,
y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2,aColor1,aBlend
,false);}},LF:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=
this.CC;{B.s4(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend
);}},_Init:function(aArg){B.uP.Z._Init.call(this,aArg);this.__proto__=C.Canvas;this.
Bz(aArg);},_Done:function(){this.Dc();this.__proto__=B.uP.Z;B.uP.Z._Done.call(this
);},_className:"Graphics::Canvas"};C.Ni={Left:0x1,NX:0x2,Right:0x4,Nc:0x8,Nr:0x10
};
C._Init=function(){C.Canvas.__proto__=B.uP.Z;};C._ReInit=function(){};C.Bs=function(
E){};return C;})();

/* Embedded Wizard */