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
);EmWiApp.Graphics=(function(){var B=EmWiApp;var D={};
var AQ=[0,0];var AO="Can not resize explicitly attached graphics engine bitmaps";
var CU=[0,0,0,0];var CV="No graphics engine bitmap attached to this canvas";var EA=
"The canvas is already initialized with a graphics engine bitmap";var EB="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var EC="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Gz="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var IA=[1,1];var Hu=[2,2];
D.Canvas={AB:null,JD:null,Dt:B.vx,Ds:0,IM:false,Dr:function(){if(this.IM)this.DetachBitmap(
);},BC:function(aArg){this.DJ=true;},Im:function(C){if((C[0]<=0)||(C[1]<=0))C=AQ;
if(B.z8(C,this.FrameSize))return;if(this.IM)throw new Error(AO);this.FrameSize=C;
this.Dm=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.
bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B.qQ(B.cC,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=AQ;this.FrameDelay=
0;this.NoOfFrames=1;}this.Dt=[].concat(AQ,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.Ds;for(this.Ds=this.NoOfFrames-1;this.Ds>=0;this.Ds--)this.Js(this.Dt,this.
Dt,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Ds=dstFrameNr;}}if(!(((
A=this.Dt)[0]>=A[2])||(A[1]>=A[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(A=this.JD)?A[1].call(A[0],this):null;this.Dt=CU;}},DetachBitmap:function(){
if(!this.IM)throw new Error(CV);this.bitmap=null;this.IM=false;this.FrameSize=AQ;
this.FrameDelay=0;this.NoOfFrames=1;this.Dm=false;return this;},AttachBitmap:function(
aBitmap){if(!!this.bitmap)throw new Error(EA);if(!aBitmap)return this;this.bitmap=
aBitmap;this.IM=true;var noOfFrames=1;var frameSize=AQ;var frameDelay=0;{noOfFrames=
aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.
NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Dm=(
this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},MD:function(aClip,LN,aString
,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,LP,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=
0;if((!LN||!LN.font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=
0;if(LP===1)orient=90;else if(LP===2)orient=180;else if(LP===3)orient=270;var dstFrameNo=
this.Ds;var dstBitmap=this.bitmap;var srcFont=LN.font;{B.qT(dstBitmap,srcFont,aString
,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Ou:function(aClip,aBitmap,aFrameNr,aDstRect,Hy,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.Update();if(!this.
bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!Hy)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;
var dstFrameNo=this.Ds;var srcRect=[].concat(AQ,aBitmap.FrameSize);var left=((Hy&
0x1)===0x1);var top=((Hy&0x2)===0x2);var right=((Hy&0x4)===0x4);var bottom=((Hy&
0x8)===0x8);var interior=((Hy&0x10)===0x10);{B.zp(dstBitmap,srcBitmap,dstFrameNo
,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},P6:function(aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1
,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1
,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((x2-x1)<-4096))||((y2-y1)>4096))||((
y2-y1)<-4096)){B.aa8("%s",EB);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.Ds;{B.aa9(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4
,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},P3:function(aClip,aBitmap
,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){
if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=
aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096
)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){B.aa8("%s"
,EC);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=
this.Ds;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top
,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter);}},MB:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Ds;{B.
gn(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Js:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.Ds;{B.jn(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Ox:function(aClip,aDstPos1,aDstPos2,Rg,Rh
,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var
ER=Rg;var ES=Rh;var El=aDstPos1;var Em=aDstPos2;if(B.z8(El,Em))return;if(ER<=1)ER=
1;if(ES<=1)ES=1;var Fi=ER/2;var Fj=ES/2;var GJ=El[0];var GK=El[1];var GL=Em[0];var
GM=Em[1];var CJ=GL-GJ;var CK=GM-GK;var BL=Math.sqrt((CJ*CJ)+(CK*CK));if(((ER>4096
)||(ES>4096))||(BL>4096)){B.aa8("%s",Gz);return;}CJ=CJ/BL;CK=CK/BL;var x1=GJ+(CK
*Fi);var y1=GK-(CJ*Fi);var x2=GL+(CK*Fj);var y2=GM-(CJ*Fj);var x3=GL-(CK*Fj);var
y3=GM+(CJ*Fj);var x4=GJ-(CK*Fi);var y4=GK+(CJ*Fi);var N8=B.zW(B.abg.Ht);var srcRect=[
].concat(IA,B.aaj(N8.FrameSize,Hu));var dstBitmap=this.bitmap;var dstFrameNo=this.
Ds;var srcBitmap=N8.bitmap;{B.aa9(dstBitmap,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0
,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2,aColor1,aBlend,false
);}},Ow:function(aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend){if(!this.bitmap
)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.
Ds;{B.zr(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend);}}
,_Init:function(aArg){B.abg.Ac._Init.call(this,aArg);this.__proto__=D.Canvas;this.
BC(aArg);},_Done:function(){this.Dr();this.__proto__=B.abg.Ac;B.abg.Ac._Done.call(
this);},_Mark:function(E){var A;B.abg.Ac._Mark.call(this,E);if((A=this.AB)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.JD)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E
);},_className:"Graphics::Canvas"};D.Nh={OE:1,OF:0,OG:0,OH:0,OI:1,OJ:0,JB:0,JC:0
,OK:1,MX:0,Iz:0,Rz:true,Jn:function(aX,Rj){var Sf=((aX*this.JB)+(Rj*this.JC))+this.
MX;this.Iz=Sf;return true;},Or:function(JR,JU,JS,JV,LR,LS,JT,JW){var IQ=JS-LR;var
IS=JV-LS;var IR=JT-LR;var IT=JW-LS;var Je=((JR-JS)+LR)-JT;var Jf=((JU-JV)+LS)-JW;
var GF=(IQ*IT)-(IS*IR);if(!GF)return null;this.JB=((Je*IT)-(Jf*IR))/GF;this.JC=((
IQ*Jf)-(IS*Je))/GF;this.OK=0;this.MX=1;this.OE=(JS-JR)+(this.JB*JS);this.OF=(JT-
JR)+(this.JC*JT);this.OG=JR;this.OH=(JV-JU)+(this.JB*JV);this.OI=(JW-JU)+(this.JC
*JW);this.OJ=JU;this.Rz=false;return this;},_Init:function(aArg){this.__proto__=
D.Nh;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.I)&&(A._cycle!=E))A._Mark(A._cycle=E);},I:null
,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};D.Su={Left:0x1,Tb:0x2
,Right:0x4,Sp:0x8,SE:0x10};
D._Init=function(){D.Canvas.__proto__=B.abg.Ac;};D._ReInit=function(){};D.Co=function(
E){};return D;})();

/* Embedded Wizard */