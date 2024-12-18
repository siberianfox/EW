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
var AF=[0,0];var AB="Can not resize explicitly attached graphics engine bitmaps";
var CI=[0,0,0,0];var Ed="No graphics engine bitmap attached to this canvas";var Ee=
"The canvas is already initialized with a graphics engine bitmap";var Ef="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Eg="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Fx="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Eh=[1,1];var EW=[2,2];
C.Canvas={Dd:null,Gq:null,Ce:B.vx,Cp:0,FH:false,CC:function(){if(this.FH)this.DetachBitmap(
);},Bz:function(aArg){this.DO=true;},Fp:function(D){if((D[0]<=0)||(D[1]<=0))D=AF;
if(B.z8(D,this.FrameSize))return;if(this.FH)throw new Error(AB);this.FrameSize=D;
this.Dk=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.
bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B.qQ(B.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=AF;this.FrameDelay=
0;this.NoOfFrames=1;}this.Ce=[].concat(AF,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.Cp;for(this.Cp=this.NoOfFrames-1;this.Cp>=0;this.Cp--)this.Gj(this.Ce,this.
Ce,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Cp=dstFrameNr;}}if(!(((
A=this.Ce)[0]>=A[2])||(A[1]>=A[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(A=this.Gq)?A[1].call(A[0],this):null;this.Ce=CI;}},DetachBitmap:function(){
if(!this.FH)throw new Error(Ed);this.bitmap=null;this.FH=false;this.FrameSize=AF;
this.FrameDelay=0;this.NoOfFrames=1;this.Dk=false;return this;},AttachBitmap:function(
aBitmap){if(!!this.bitmap)throw new Error(Ee);if(!aBitmap)return this;this.bitmap=
aBitmap;this.FH=true;var noOfFrames=1;var frameSize=AF;var frameDelay=0;{noOfFrames=
aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.
NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Dk=(
this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},H2:function(aClip,Hs,aString
,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,Hu,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=
0;if((!Hs||!Hs.font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=
0;if(Hu===1)orient=90;else if(Hu===2)orient=180;else if(Hu===3)orient=270;var dstFrameNo=
this.Cp;var dstBitmap=this.bitmap;var srcFont=Hs.font;{B.qT(dstBitmap,srcFont,aString
,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},JK:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1
,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1
,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){B.aa8("%s",Ef);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Cp;{B.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},JI:function(aClip,aBitmap
,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){
if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){B.aa8("%s"
,Eg);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Cp;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},H0:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Cp;{B.
gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Gj:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.Cp;{B.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Je:function(aClip,aDstPos1,aDstPos2,Kh,Ki
,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var
Dh=Kh;var Di=Ki;var CW=aDstPos1;var CX=aDstPos2;if(B.z8(CW,CX))return;if(Dh<=1)Dh=
1;if(Di<=1)Di=1;var DD=Dh/2;var DE=Di/2;var Es=CW[0];var Et=CW[1];var Eu=CX[0];var
Ev=CX[1];var BO=Eu-Es;var BP=Ev-Et;var E_=Math.sqrt((BO*BO)+(BP*BP));if(((Dh>4096
)||(Di>4096))||(E_>4096)){B.aa8("%s",Fx);return;}BO=BO/E_;BP=BP/E_;var x1=Es+(BP
*DD);var y1=Et-(BO*DD);var x2=Eu+(BP*DE);var y2=Ev-(BO*DE);var x3=Eu-(BP*DE);var
y3=Ev+(BO*DE);var x4=Es-(BP*DD);var y4=Et+(BO*DD);var IT=B.zW(B.abg.Fu);var srcRect=[
].concat(Eh,B.aaj(IT.FrameSize,EW));var dstBitmap=this.bitmap;var dstFrameNo=this.
Cp;var srcBitmap=IT.bitmap;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0
,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2,aColor1,aBlend,false
);}},Jd:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend){if(!this.bitmap
)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.
Cp;{B.zr(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend);}}
,_Init:function(aArg){B.abg.At._Init.call(this,aArg);this.__proto__=C.Canvas;this.
Bz(aArg);},_Done:function(){this.CC();this.__proto__=B.abg.At;B.abg.At._Done.call(
this);},_Mark:function(E){var A;B.abg.At._Mark.call(this,E);if((A=this.Dd)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.Gq)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E
);},_className:"Graphics::Canvas"};C.Ig={Jn:1,Jo:0,Jp:0,Jq:0,Jr:1,Js:0,Go:0,Gp:0
,Jt:1,H5:0,Fw:0,Ku:true,Gg:function(aX,Kj){var K0=((aX*this.Go)+(Kj*this.Gp))+this.
H5;this.Fw=K0;return true;},Ja:function(Gy,GB,Gz,GC,Hw,Hx,GA,GD){var FK=Gz-Hw;var
FM=GC-Hx;var FL=GA-Hw;var FN=GD-Hx;var F$=((Gy-Gz)+Hw)-GA;var Ga=((GB-GC)+Hx)-GD;
var Eo=(FK*FN)-(FM*FL);if(!Eo)return null;this.Go=((F$*FN)-(Ga*FL))/Eo;this.Gp=((
FK*Ga)-(FM*F$))/Eo;this.Jt=0;this.H5=1;this.Jn=(Gz-Gy)+(this.Go*Gz);this.Jo=(GA-
Gy)+(this.Gp*GA);this.Jp=Gy;this.Jq=(GC-GB)+(this.Go*GC);this.Jr=(GD-GB)+(this.Gp
*GD);this.Js=GB;this.Ku=false;return this;},_Init:function(aArg){this.__proto__=
C.Ig;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.X)&&(A._cycle!=E))A._Mark(A._cycle=E);},X:null
,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};
C._Init=function(){C.Canvas.__proto__=B.abg.At;};C._ReInit=function(){};C.BM=function(
E){};return C;})();

/* Embedded Wizard */