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
var A6=[0,0];var A2="Can not resize explicitly attached graphics engine bitmaps";
var Dm=[0,0,0,0];var Dn="No graphics engine bitmap attached to this canvas";var ER=
"The canvas is already initialized with a graphics engine bitmap";var FB="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var FC="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var HZ="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var KC=[1,1];var I$=[2,2];
C.Canvas={AR:null,LK:null,DX:B.vx,DV:0,KN:false,DU:function(){if(this.KN)this.DetachBitmap(
);},AG:function(aArg){this.En=true;},J$:function(E){if((E[0]<=0)||(E[1]<=0))E=A6;
if(B.z8(E,this.FrameSize))return;if(this.KN)throw new Error(A2);this.FrameSize=E;
this.DQ=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.
bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B.qQ(B.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=A6;this.FrameDelay=
0;this.NoOfFrames=1;}this.DX=[].concat(A6,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.DV;for(this.DV=this.NoOfFrames-1;this.DV>=0;this.DV--)this.Lx(this.DX,this.
DX,0x00000000,0x00000000,0x00000000,0x00000000,false);this.DV=dstFrameNr;}}if(!(((
A=this.DX)[0]>=A[2])||(A[1]>=A[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(A=this.LK)?A[1].call(A[0],this):null;this.DX=Dm;}},DetachBitmap:function(){
if(!this.KN)throw new Error(Dn);this.bitmap=null;this.KN=false;this.FrameSize=A6;
this.FrameDelay=0;this.NoOfFrames=1;this.DQ=false;return this;},AttachBitmap:function(
aBitmap){if(!!this.bitmap)throw new Error(ER);if(!aBitmap)return this;this.bitmap=
aBitmap;this.KN=true;var noOfFrames=1;var frameSize=A6;var frameDelay=0;{noOfFrames=
aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.
NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.DQ=(
this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},PK:function(aClip,OK,aString
,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,OM,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=
0;if((!OK||!OK.font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=
0;if(OM===1)orient=90;else if(OM===2)orient=180;else if(OM===3)orient=270;var dstFrameNo=
this.DV;var dstBitmap=this.bitmap;var srcFont=OK.font;{B.qT(dstBitmap,srcFont,aString
,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},R5:function(aClip,aBitmap,aFrameNr,aDstRect,Jd,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.Update();if(!this.
bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!Jd)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;
var dstFrameNo=this.DV;var srcRect=[].concat(A6,aBitmap.FrameSize);var left=((Jd&
0x1)===0x1);var top=((Jd&0x2)===0x2);var right=((Jd&0x4)===0x4);var bottom=((Jd&
0x8)===0x8);var interior=((Jd&0x10)===0x10);{B.zp(dstBitmap,srcBitmap,dstFrameNo
,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Tw:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1
,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1
,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){B.aa8("%s",FB);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.DV;{B.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Tu:function(aClip,aBitmap
,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){
if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){B.aa8("%s"
,FC);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.DV;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},PH:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.DV;{B.
gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Lx:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.DV;{B.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},R8:function(aClip,aDstPos1,aDstPos2,VC,VD
,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var
FS=VC;var FT=VD;var Fb=aDstPos1;var Fc=aDstPos2;if(B.z8(Fb,Fc))return;if(FS<=1)FS=
1;if(FT<=1)FT=1;var Gv=FS/2;var Gw=FT/2;var H9=Fb[0];var H_=Fb[1];var H$=Fc[0];var
Ia=Fc[1];var C$=H$-H9;var Da=Ia-H_;var B4=Math.sqrt((C$*C$)+(Da*Da));if(((FS>4096
)||(FT>4096))||(B4>4096)){B.aa8("%s",HZ);return;}C$=C$/B4;Da=Da/B4;var x1=H9+(Da
*Gv);var y1=H_-(C$*Gv);var x2=H$+(Da*Gw);var y2=Ia-(C$*Gw);var x3=H$-(Da*Gw);var
y3=Ia+(C$*Gw);var x4=H9-(Da*Gv);var y4=H_+(C$*Gv);var RI=B.zW(B.abi.I8);var srcRect=[
].concat(KC,B.aaj(RI.FrameSize,I$));var dstBitmap=this.bitmap;var dstFrameNo=this.
DV;var srcBitmap=RI.bitmap;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0
,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2,aColor1,aBlend,false
);}},R7:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend){if(!this.bitmap
)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.
DV;{B.zr(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend);}}
,_Init:function(aArg){B.abi.V._Init.call(this,aArg);this.__proto__=C.Canvas;this.
AG(aArg);},_Done:function(){this.DU();this.__proto__=B.abi.V;B.abi.V._Done.call(
this);},_Mark:function(D){var A;B.abi.V._Mark.call(this,D);if((A=this.AR)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.LK)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);},_className:"Graphics::Canvas"};C.Qy={Sd:1,Se:0,Sf:0,Sg:0,Sh:1,Si:0,LH:0,LI:0
,Sj:1,P4:0,KB:0,VU:true,Ls:function(aX,VE){var WX=((aX*this.LH)+(VE*this.LI))+this.
P4;this.KB=WX;return true;},R2:function(Ma,Md,Mb,Me,OP,OQ,Mc,Mf){var KR=Mb-OP;var
KT=Me-OQ;var KS=Mc-OP;var KU=Mf-OQ;var Lk=((Ma-Mb)+OP)-Mc;var Ll=((Md-Me)+OQ)-Mf;
var H5=(KR*KU)-(KT*KS);if(!H5)return null;this.LH=((Lk*KU)-(Ll*KS))/H5;this.LI=((
KR*Ll)-(KT*Lk))/H5;this.Sj=0;this.P4=1;this.Sd=(Mb-Ma)+(this.LH*Mb);this.Se=(Mc-
Ma)+(this.LI*Mc);this.Sf=Ma;this.Sg=(Me-Md)+(this.LH*Me);this.Sh=(Mf-Md)+(this.LI
*Mf);this.Si=Md;this.VU=false;return this;},_Init:function(aArg){this.__proto__=
C.Qy;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null
,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};C.Xc={Left:0x1,XZ:0x2
,Right:0x4,W6:0x8,Xo:0x10};
C._Init=function(){C.Canvas.__proto__=B.abi.V;};C._ReInit=function(){};C.CO=function(
D){};return C;})();

/* Embedded Wizard */