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
);if(EmWiApp.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);EmWiApp.Graphics=(function(){var B=EmWiApp;var C={};
var AD=[0,0];var A0="Can not resize explicitly attached graphics engine bitmaps";
var AT=[0,0,0,0];var DG="No graphics engine bitmap attached to this canvas";var DV=
"The canvas is already initialized with a graphics engine bitmap";var G2="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
C.Canvas={AE:null,GI:B.vx,D_:0,Hb:false,DO:function(){if(this.Hb)this.DetachBitmap(
);},Bd:function(aArg){this.FT=true;},KL:function(E){if((E[0]<=0)||(E[1]<=0))E=AD;
if(B.z8(E,this.FrameSize))return;if(this.Hb)throw new Error(A0);this.FrameSize=E;
this.Da=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.
bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B.qQ(B.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=AD;this.FrameDelay=
0;this.NoOfFrames=1;}this.GI=[].concat(AD,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.D_;for(this.D_=this.NoOfFrames-1;this.D_>=0;this.D_--)this.IO(this.GI,this.
GI,0x00000000,0x00000000,0x00000000,0x00000000,false);this.D_=dstFrameNr;}}if(!(((
A=this.GI)[0]>=A[2])||(A[1]>=A[3])))this.GI=AT;},DetachBitmap:function(){if(!this.
Hb)throw new Error(DG);this.bitmap=null;this.Hb=false;this.FrameSize=AD;this.FrameDelay=
0;this.NoOfFrames=1;this.Da=false;return this;},AttachBitmap:function(aBitmap){if(
!!this.bitmap)throw new Error(DV);if(!aBitmap)return this;this.bitmap=aBitmap;this.
Hb=true;var noOfFrames=1;var frameSize=AD;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;
frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Da=(this.FrameDelay>0)&&(
this.NoOfFrames>1);return this;},Kw:function(aClip,JC,aString,aOffset,aCount,aDstRect
,aSrcPos,aMinWidth,JE,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap
)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!JC||!JC.font)||((
aOffset>0)&&(aOffset>=aString.length)))return;var orient=0;if(JE===1)orient=90;else
if(JE===2)orient=180;else if(JE===3)orient=270;var dstFrameNo=this.D_;var dstBitmap=
this.bitmap;var srcFont=JC.font;{B.qT(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},LT:function(aClip,aBitmap,aFrameNr,aDstRect,Gi,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!Gi)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.D_;var srcRect=[
].concat(AD,aBitmap.FrameSize);var left=((Gi&0x1)===0x1);var top=((Gi&0x2)===0x2
);var right=((Gi&0x4)===0x4);var bottom=((Gi&0x8)===0x8);var interior=((Gi&0x10)===
0x10);{B.zp(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,
top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Mt:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){
B.aa8("%s",G2);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.D_;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top
,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend,aFilter);}},LR:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,
aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.D_;{B.gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},IO:function(aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var dstBitmap=this.bitmap;var dstFrameNo=this.D_;{B.jn(dstBitmap,dstFrameNo,aClip
,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},_Init:function(aArg){B.
abh.Ag._Init.call(this,aArg);this.__proto__=C.Canvas;this.Bd(aArg);},_Done:function(
){this.DO();this.__proto__=B.abh.Ag;B.abh.Ag._Done.call(this);},_Mark:function(D
){var A;B.abh.Ag._Mark.call(this,D);if((A=this.AE)&&(A._cycle!=D))A._Mark(A._cycle=
D);},_className:"Graphics::Canvas"};C.OF={Left:0x1,Mw:0x2,Right:0x4,LP:0x8,OW:0x10
};
C._Init=function(){C.Canvas.__proto__=B.abh.Ag;};C._ReInit=function(){};C.Bs=function(
D){};return C;})();

/* Embedded Wizard */