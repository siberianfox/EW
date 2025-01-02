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
var A9=[0,0];var Bc="Can not resize explicitly attached graphics engine bitmaps";
var DJ=[0,0,0,0];var DK="No graphics engine bitmap attached to this canvas";var Fy=
"The canvas is already initialized with a graphics engine bitmap";var E8="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Fz="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var If="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Kk=[1,1];var Jb=[2,2];
C.Canvas={A3:null,MQ:null,Er:B.vx,Ep:0,LP:false,Eo:function(){if(this.LP)this.DetachBitmap(
);},Ai:function(aArg){this.EW=true;},Ln:function(E){if((E[0]<=0)||(E[1]<=0))E=A9;
if(B.z8(E,this.FrameSize))return;if(this.LP)throw new Error(Bc);this.FrameSize=E;
this.Ei=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.
bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B.qQ(B.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=A9;this.FrameDelay=
0;this.NoOfFrames=1;}this.Er=[].concat(A9,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.Ep;for(this.Ep=this.NoOfFrames-1;this.Ep>=0;this.Ep--)this.MC(this.Er,this.
Er,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Ep=dstFrameNr;}}if(!(((
A=this.Er)[0]>=A[2])||(A[1]>=A[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(A=this.MQ)?A[1].call(A[0],this):null;this.Er=DJ;}},DetachBitmap:function(){
if(!this.LP)throw new Error(DK);this.bitmap=null;this.LP=false;this.FrameSize=A9;
this.FrameDelay=0;this.NoOfFrames=1;this.Ei=false;return this;},AttachBitmap:function(
aBitmap){if(!!this.bitmap)throw new Error(Fy);if(!aBitmap)return this;this.bitmap=
aBitmap;this.LP=true;var noOfFrames=1;var frameSize=A9;var frameDelay=0;{noOfFrames=
aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.
NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Ei=(
this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Rr:function(aClip,Qp,aString
,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,Qr,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=
0;if((!Qp||!Qp.font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=
0;if(Qr===1)orient=90;else if(Qr===2)orient=180;else if(Qr===3)orient=270;var dstFrameNo=
this.Ep;var dstBitmap=this.bitmap;var srcFont=Qp.font;{B.qT(dstBitmap,srcFont,aString
,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Ua:function(aClip,aBitmap,aFrameNr,aDstRect,Kp,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.Update();if(!this.
bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!Kp)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;
var dstFrameNo=this.Ep;var srcRect=[].concat(A9,aBitmap.FrameSize);var left=((Kp&
0x1)===0x1);var top=((Kp&0x2)===0x2);var right=((Kp&0x4)===0x4);var bottom=((Kp&
0x8)===0x8);var interior=((Kp&0x10)===0x10);{B.zp(dstBitmap,srcBitmap,dstFrameNo
,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},VH:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1
,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1
,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){B.aa8("%s",E8);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Ep;{B.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},VE:function(aClip,aBitmap
,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){
if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){B.aa8("%s"
,Fz);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Ep;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},Ro:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Ep;{B.
gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},MC:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.Ep;{B.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Ud:function(aClip,aDstPos1,aDstPos2,Y4,Y5
,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var
G0=Y4;var G1=Y5;var FW=aDstPos1;var FX=aDstPos2;if(B.z8(FW,FX))return;if(G0<=1)G0=
1;if(G1<=1)G1=1;var HF=G0/2;var HG=G1/2;var Jl=FW[0];var Jm=FW[1];var Jn=FX[0];var
Jo=FX[1];var Dw=Jn-Jl;var Dx=Jo-Jm;var Cg=Math.sqrt((Dw*Dw)+(Dx*Dx));if(((G0>4096
)||(G1>4096))||(Cg>4096)){B.aa8("%s",If);return;}Dw=Dw/Cg;Dx=Dx/Cg;var x1=Jl+(Dx
*HF);var y1=Jm-(Dw*HF);var x2=Jn+(Dx*HG);var y2=Jo-(Dw*HG);var x3=Jn-(Dx*HG);var
y3=Jo+(Dw*HG);var x4=Jl-(Dx*HF);var y4=Jm+(Dw*HF);var TP=B.zW(B.abi.Kg);var srcRect=[
].concat(Kk,B.aaj(TP.FrameSize,Jb));var dstBitmap=this.bitmap;var dstFrameNo=this.
Ep;var srcBitmap=TP.bitmap;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0
,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2,aColor1,aBlend,false
);}},Uc:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend){if(!this.bitmap
)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.
Ep;{B.zr(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend);}}
,_Init:function(aArg){B.abi.W._Init.call(this,aArg);this.__proto__=C.Canvas;this.
Ai(aArg);},_Done:function(){this.Eo();this.__proto__=B.abi.W;B.abi.W._Done.call(
this);},_Mark:function(D){var A;B.abi.W._Mark.call(this,D);if((A=this.A3)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.MQ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);},_className:"Graphics::Canvas"};C.R9={Uk:1,Ul:0,Um:0,Un:0,Uo:1,Uq:0,MN:0,MO:0
,Ur:1,RL:0,LF:0,Zl:true,Mw:function(aX,Y6){var Aaz=((aX*this.MN)+(Y6*this.MO))+this.
RL;this.LF=Aaz;return true;},T_:function(Ns,Nv,Nt,Nw,Qu,Qv,Nu,Nx){var LT=Nt-Qu;var
LV=Nw-Qv;var LU=Nu-Qu;var LW=Nx-Qv;var Mn=((Ns-Nt)+Qu)-Nu;var Mo=((Nv-Nw)+Qv)-Nx;
var Jh=(LT*LW)-(LV*LU);if(!Jh)return null;this.MN=((Mn*LW)-(Mo*LU))/Jh;this.MO=((
LT*Mo)-(LV*Mn))/Jh;this.Ur=0;this.RL=1;this.Uk=(Nt-Ns)+(this.MN*Nt);this.Ul=(Nu-
Ns)+(this.MO*Nu);this.Um=Ns;this.Un=(Nw-Nv)+(this.MN*Nw);this.Uo=(Nx-Nv)+(this.MO
*Nx);this.Uq=Nv;this.Zl=false;return this;},_Init:function(aArg){this.__proto__=
C.R9;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null
,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};C.AaR={Left:0x1,AbJ:
0x2,Right:0x4,AaI:0x8,Aa3:0x10};
C._Init=function(){C.Canvas.__proto__=B.abi.W;};C._ReInit=function(){};C.C7=function(
D){};return C;})();

/* Embedded Wizard */