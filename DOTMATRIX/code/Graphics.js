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
);if(EmWiApp.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);EmWiApp.Graphics=(function(){var A=EmWiApp;var D={};
var Af=[0,0];var AB="Can not resize explicitly attached graphics engine bitmaps";
var BZ=[0,0,0,0];var Cv="No graphics engine bitmap attached to this canvas";var CM=
"The canvas is already initialized with a graphics engine bitmap";var C6="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var D6="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
D.Canvas={Co:null,EQ:null,BM:A.vx,B6:0,Eb:false,B5:function(){if(this.Eb)this.DetachBitmap(
);},Bn:function(aArg){this.Dq=true;},D1:function(C){if((C[0]<=0)||(C[1]<=0))C=Af;
if(A.z8(C,this.FrameSize))return;if(this.Eb)throw new Error(AB);this.FrameSize=C;
this.BJ=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle);this.
bitmap=null;},Update:function(){var B;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=A.qQ(A.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=Af;this.FrameDelay=
0;this.NoOfFrames=1;}this.BM=[].concat(Af,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.B6;for(this.B6=this.NoOfFrames-1;this.B6>=0;this.B6--)this.EI(this.BM,this.
BM,0x00000000,0x00000000,0x00000000,0x00000000,false);this.B6=dstFrameNr;}}if(!(((
B=this.BM)[0]>=B[2])||(B[1]>=B[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(B=this.EQ)?B[1].call(B[0],this):null;this.BM=BZ;}},DetachBitmap:function(){
if(!this.Eb)throw new Error(Cv);this.bitmap=null;this.Eb=false;this.FrameSize=Af;
this.FrameDelay=0;this.NoOfFrames=1;this.BJ=false;return this;},AttachBitmap:function(
aBitmap){if(!!this.bitmap)throw new Error(CM);if(!aBitmap)return this;this.bitmap=
aBitmap;this.Eb=true;var noOfFrames=1;var frameSize=Af;var frameDelay=0;{noOfFrames=
aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.
NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.BJ=(
this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},GS:function(aClip,Ge,aString
,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,Gg,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=
0;if((!Ge||!Ge.font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=
0;if(Gg===1)orient=90;else if(Gg===2)orient=180;else if(Gg===3)orient=270;var dstFrameNo=
this.B6;var dstBitmap=this.bitmap;var srcFont=Ge.font;{A.qT(dstBitmap,srcFont,aString
,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},H0:function(aClip,aBitmap,aFrameNr,aDstRect,DA,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){var B;if(!this.bitmap)this.Update();if(!this.
bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!DA)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;
var dstFrameNo=this.B6;var srcRect=[].concat(Af,aBitmap.FrameSize);var left=((DA&
0x1)===0x1);var top=((DA&0x2)===0x2);var right=((DA&0x4)===0x4);var bottom=((DA&
0x8)===0x8);var interior=((DA&0x10)===0x10);{A.zp(dstBitmap,srcBitmap,dstFrameNo
,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},IM:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1
,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1
,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var L=aDstX1;var N=aDstX2;var M=aDstY1;var O=aDstY2;if(aDstX2<
L)L=aDstX2;if(aDstX3<L)L=aDstX3;if(aDstX4<L)L=aDstX4;if(aDstX2>N)N=aDstX2;if(aDstX3>
N)N=aDstX3;if(aDstX4>N)N=aDstX4;if(aDstY2<M)M=aDstY2;if(aDstY3<M)M=aDstY3;if(aDstY4<
M)M=aDstY4;if(aDstY2>O)O=aDstY2;if(aDstY3>O)O=aDstY3;if(aDstY4>O)O=aDstY4;if(((((
N-L)>4096)||((N-L)<-4096))||((O-M)>4096))||((O-M)<-4096)){A.aa8("%s",C6);return;
}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.B6;{
A.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,
aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2
,aColor3,aColor4,aBlend,aFilter);}},IL:function(aClip,aBitmap,aFrameNr,aDstRect,
aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=aDstRect[0];var
right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096)||((right-left)<-
4096))||((bottom-top)>4096))||((bottom-top)<-4096)){A.aa8("%s",D6);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.B6;{A.aa9(dstBitmap
,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top,1,right,bottom,1,left,
bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter);}},GQ:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.B6;{A.gn(dstBitmap,srcBitmap,dstFrameNr
,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},
EI:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.
bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=
this.B6;{A.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend);}},_Init:function(aArg){A.abg.Z._Init.call(this,aArg);this.__proto__=D.
Canvas;this.Bn(aArg);},_Done:function(){this.B5();this.__proto__=A.abg.Z;A.abg.Z.
_Done.call(this);},_Mark:function(F){var B;A.abg.Z._Mark.call(this,F);if((B=this.
Co)&&(B._cycle!=F))B._Mark(B._cycle=F);if((B=this.EQ)&&((B=B[0])._cycle!=F))B._Mark(
B._cycle=F);},_className:"Graphics::Canvas"};D.G$={H5:1,H6:0,H7:0,H8:0,H9:1,H_:0
,EO:0,EP:0,H$:1,G1:0,D5:0,I5:true,EF:function(IQ,IR){var Jo=((IQ*this.EO)+(IR*this.
EP))+this.G1;this.D5=Jo;return true;},HY:function(E0,E3,E1,E4,Gi,Gj,E2,E5){var Ee=
E1-Gi;var Eg=E4-Gj;var Ef=E2-Gi;var Eh=E5-Gj;var Ey=((E0-E1)+Gi)-E2;var Ez=((E3-
E4)+Gj)-E5;var Dc=(Ee*Eh)-(Eg*Ef);if(!Dc)return null;this.EO=((Ey*Eh)-(Ez*Ef))/Dc;
this.EP=((Ee*Ez)-(Eg*Ey))/Dc;this.H$=0;this.G1=1;this.H5=(E1-E0)+(this.EO*E1);this.
H6=(E2-E0)+(this.EP*E2);this.H7=E0;this.H8=(E4-E3)+(this.EO*E4);this.H9=(E5-E3)+(
this.EP*E5);this.H_=E3;this.I5=false;return this;},_Init:function(aArg){this.__proto__=
D.G$;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){}
,_Mark:function(F){var B;if((B=this.As)&&(B._cycle!=F))B._Mark(B._cycle=F);},As:
null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};D.JC={Left:0x1,
Kb:0x2,Right:0x4,Jx:0x8,JK:0x10};
D._Init=function(){D.Canvas.__proto__=A.abg.Z;};D._ReInit=function(){};D.A1=function(
F){};return D;})();

/* Embedded Wizard */