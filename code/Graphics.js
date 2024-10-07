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
);EmWiApp.Graphics=(function(){var B=EmWiApp;var D={};
var BN=[0,0];var AZ="Can not resize explicitly attached graphics engine bitmaps";
var Ao=[0,0,0,0];var CW="No graphics engine bitmap attached to this canvas";var Fz=
"The canvas is already initialized with a graphics engine bitmap";var He="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Cw="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var H_="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Hf=[1,1];var Hg=[2,2];
D.Canvas={UW:null,E3:B.qL,Gn:0,Tm:false,Gm:function(){if(this.Tm)this.DetachBitmap(
);},At:function(aArg){this.GX=true;},PX:function(E){if((E[0]<=0)||(E[1]<=0))E=BN;
if(B.tH(E,this.FrameSize))return;if(this.Tm)throw new Error(AZ);this.FrameSize=E;
this.Fk=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B.s9(handle);this.
bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(
this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B.nm(B.ci,frameSize,frameDelay
,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=BN;this.FrameDelay=
0;this.NoOfFrames=1;}this.E3=[].concat(BN,this.FrameSize);if(!!this.bitmap){var dstFrameNr=
this.Gn;for(this.Gn=this.NoOfFrames-1;this.Gn>=0;this.Gn--)this.Uz(this.E3,this.
E3,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Gn=dstFrameNr;}}if(!(((
A=this.E3)[0]>=A[2])||(A[1]>=A[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[1
]>0))(A=this.UW)?A[1].call(A[0],this):null;this.E3=Ao;}},DetachBitmap:function(){
if(!this.Tm)throw new Error(CW);this.bitmap=null;this.Tm=false;this.FrameSize=BN;
this.FrameDelay=0;this.NoOfFrames=1;this.Fk=false;return this;},AttachBitmap:function(
aBitmap){if(!!this.bitmap)throw new Error(Fz);if(!aBitmap)return this;this.bitmap=
aBitmap;this.Tm=true;var noOfFrames=1;var frameSize=BN;var frameDelay=0;{noOfFrames=
aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;}this.
NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Fk=(
this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Adb:function(aClip,AbT,aString
,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,AbV,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<0)aOffset=
0;if((!AbT||!AbT.font)||((aOffset>0)&&(aOffset>=aString.length)))return;var orient=
0;if(AbV===1)orient=90;else if(AbV===2)orient=180;else if(AbV===3)orient=270;var
dstFrameNo=this.Gn;var dstBitmap=this.bitmap;var srcFont=AbT.font;{B.np(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},AhN:function(aClip,aBitmap,aFrameNr
,aDstRect,QJ,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.
Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!QJ)||(aFrameNr<
0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.Gn;var srcRect=[].concat(BN,aBitmap.FrameSize
);var left=((QJ&0x1)===0x1);var top=((QJ&0x2)===0x2);var right=((QJ&0x4)===0x4);
var bottom=((QJ&0x8)===0x8);var interior=((QJ&0x10)===0x10);{B.s2(dstBitmap,srcBitmap
,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},SB:function(aClip,aBitmap,aFrameNr,aDstX1
,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect
,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;var y1=aDstY1;var y2=aDstY2;if(aDstX2<
x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;
if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1
)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;
if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096.000000)||((x2-x1)<-4096.000000))||((y2-
y1)>4096.000000))||((y2-y1)<-4096.000000)){B.uF("%s",He);return;}var dstBitmap=this.
bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Gn;{B.uG(dstBitmap,srcBitmap
,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3
,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter
);}},Ajw:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((
!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;
var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[
3];if(((((right-left)>4096.000000)||((right-left)<-4096.000000))||((bottom-top)>
4096.000000))||((bottom-top)<-4096.000000)){B.uF("%s",Cw);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Gn;{B.uG(dstBitmap,
srcBitmap,dstFrameNo,aFrameNr,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom
,1,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter);}},Ac7:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Gn;{B.fJ(dstBitmap,srcBitmap,dstFrameNr
,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},
Mx:function(aClip,AbW,aDstRect,aFlipY,aOffset,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend,aAntialiased,AlZ){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(
!AbW||!AbW.path)return;var nonZeroWinding=AlZ===1;var dstBitmap=this.bitmap;var dstFrameNo=
this.Gn;var path=AbW.path;{B.s5(dstBitmap,path,dstFrameNo,aClip,aDstRect,aFlipY,
aOffset,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aAntialiased,nonZeroWinding);
}},AhO:function(aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Gn;{B.s3(dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Uz:function(aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var dstBitmap=this.bitmap;var dstFrameNo=this.Gn;{B.hs(dstBitmap,dstFrameNo,aClip
,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},AhR:function(aClip,aDstPos1
,aDstPos2,Al2,Al3,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;var KW=Al2;var KX=Al3;var JR=aDstPos1;var JS=aDstPos2;if(B.tH(JR,JS
))return;if(KW<=1)KW=1;if(KX<=1)KX=1;var LZ=KW/2.000000;var L0=KX/2.000000;var OL=
JR[0];var OM=JR[1];var ON=JS[0];var OO=JS[1];var FC=ON-OL;var FD=OO-OM;var Dz=Math.
sqrt((FC*FC)+(FD*FD));if(((KW>4096)||(KX>4096))||(Dz>4096.000000)){B.uF("%s",H_);
return;}FC=FC/Dz;FD=FD/Dz;var x1=OL+(FD*LZ);var y1=OM-(FC*LZ);var x2=ON+(FD*L0);
var y2=OO-(FC*L0);var x3=ON-(FD*L0);var y3=OO+(FC*L0);var x4=OL-(FD*LZ);var y4=OM+(
FC*LZ);var Ag6=B.tv(B.uQ.Qx);var srcRect=[].concat(Hf,B.tU(Ag6.FrameSize,Hg));var
dstBitmap=this.bitmap;var dstFrameNo=this.Gn;var srcBitmap=Ag6.bitmap;{B.uG(dstBitmap
,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect,aColor1
,aColor2,aColor2,aColor1,aBlend,false);}},AhQ:function(aClip,aDstPos1,aDstPos2,aColor1
,aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.Gn;{B.s4(dstBitmap,dstFrameNo,aClip,aDstPos1,aDstPos2
,aColor1,aColor2,aBlend);}},_Init:function(aArg){B.uQ.R._Init.call(this,aArg);this.
__proto__=D.Canvas;this.At(aArg);},_Done:function(){this.Gm();this.__proto__=B.uQ.
R;B.uQ.R._Done.call(this);},_Mark:function(C){var A;B.uQ.R._Mark.call(this,C);if((
A=this.UW)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);},_className:"Graphics::Canvas"
};D.SC={Lf:1.000000,Lg:0,MN:0,PP:0,Lh:0,Li:1.000000,MO:0,PQ:0,IB:0,IC:0,MP:1.000000
,NZ:0,Kg:0,Kh:0,MQ:0,N0:1.000000,Hd:0,LE:0,LD:0,Xx:0,Tz:true,Ud:function(aX,aY){
var Ml=((aX*this.IB)+(aY*this.IC))+this.NZ;var AM=((aX*this.Kg)+(aY*this.Kh))+this.
N0;if((AM!==0.000000)&&(AM!==1.000000))Ml=Ml/AM;this.Hd=Ml;return true;},MY:function(
aX,aY){var QW=this.Xx;if(QW<0.000000)return false;var GI=((aX*this.Lf)+(aY*this.
Lg))+this.PP;var Ir=((aX*this.Lh)+(aY*this.Li))+this.PQ;var Ml=((aX*this.IB)+(aY
*this.IC))+this.NZ;var AM=((aX*this.Kg)+(aY*this.Kh))+this.N0;var TW=1.000000;if((
AM!==0.000000)&&(AM!==1.000000)){GI=GI/AM;Ir=Ir/AM;Ml=Ml/AM;}if(QW!==-Ml)TW=1.000000
/(Ml+QW);if(QW!==0.000000)TW=TW*QW;this.LD=GI*TW;this.LE=Ir*TW;this.Hd=Ml+QW;return true;
},Vn:function(AfU,AfV,AfW){var T0=Math.sin(AfU*B.iq);var To=Math.cos(AfU*B.iq);var
T1=Math.sin(AfV*B.iq);var Tp=Math.cos(AfV*B.iq);var T2=Math.sin(AfW*B.iq);var Wj=
Math.cos(AfW*B.iq);var WJ=Tp*Wj;var WM=T2;var WP=-T1*Wj;var WK=((-To*Tp)*T2)+(T0
*T1);var WN=To*Wj;var WQ=((To*T1)*T2)+(T0*Tp);var WL=((T0*Tp)*T2)+(To*T1);var WO=-
T0*Wj;var WR=((-T0*T1)*T2)+(To*Tp);var Amn=((this.Lf*WJ)+(this.Lg*WM))+(this.MN*
WP);var Amq=((this.Lh*WJ)+(this.Li*WM))+(this.MO*WP);var Amt=((this.IB*WJ)+(this.
IC*WM))+(this.MP*WP);var Amw=((this.Kg*WJ)+(this.Kh*WM))+(this.MQ*WP);var Amo=((
this.Lf*WK)+(this.Lg*WN))+(this.MN*WQ);var Amr=((this.Lh*WK)+(this.Li*WN))+(this.
MO*WQ);var Amu=((this.IB*WK)+(this.IC*WN))+(this.MP*WQ);var Amx=((this.Kg*WK)+(this.
Kh*WN))+(this.MQ*WQ);var Amp=((this.Lf*WL)+(this.Lg*WO))+(this.MN*WR);var Ams=((
this.Lh*WL)+(this.Li*WO))+(this.MO*WR);var Amv=((this.IB*WL)+(this.IC*WO))+(this.
MP*WR);var Amy=((this.Kg*WL)+(this.Kh*WO))+(this.MQ*WR);this.Lf=Amn;this.Lg=Amo;
this.MN=Amp;this.Lh=Amq;this.Li=Amr;this.MO=Ams;this.IB=Amt;this.IC=Amu;this.MP=
Amv;this.Kg=Amw;this.Kh=Amx;this.MQ=Amy;this.Tz=false;return this;},AfC:function(
VT,VU,VV){this.PP=((this.PP+(this.Lf*VT))+(this.Lg*VU))+(this.MN*VV);this.PQ=((this.
PQ+(this.Lh*VT))+(this.Li*VU))+(this.MO*VV);this.NZ=((this.NZ+(this.IB*VT))+(this.
IC*VU))+(this.MP*VV);this.N0=((this.N0+(this.Kg*VT))+(this.Kh*VU))+(this.MQ*VV);
this.Tz=false;return this;},AhI:function(V1,V4,V2,V5,AbZ,Ab0,V3,V6){var Tq=V2-AbZ;
var Ts=V5-Ab0;var Tr=V3-AbZ;var Tt=V6-Ab0;var T4=((V1-V2)+AbZ)-V3;var T5=((V4-V5
)+Ab0)-V6;var OG=(Tq*Tt)-(Ts*Tr);if(OG===0.000000)return null;this.IB=((T4*Tt)-(
T5*Tr))/OG;this.IC=((Tq*T5)-(Ts*T4))/OG;this.MP=0.000000;this.NZ=1.000000;this.Lf=(
V2-V1)+(this.IB*V2);this.Lg=(V3-V1)+(this.IC*V3);this.MN=0.000000;this.PP=V1;this.
Lh=(V5-V4)+(this.IB*V5);this.Li=(V6-V4)+(this.IC*V6);this.MO=0.000000;this.PQ=V4;
this.Kg=0.000000;this.Kh=0.000000;this.MQ=0.000000;this.N0=1.000000;this.Tz=false;
return this;},Ahx:function(DN){if(!DN)return this;this.Lf=DN.Lf;this.Lg=DN.Lg;this.
MN=DN.MN;this.PP=DN.PP;this.Lh=DN.Lh;this.Li=DN.Li;this.MO=DN.MO;this.PQ=DN.PQ;this.
IB=DN.IB;this.IC=DN.IC;this.MP=DN.MP;this.NZ=DN.NZ;this.Kg=DN.Kg;this.Kh=DN.Kh;this.
MQ=DN.MQ;this.N0=DN.N0;this.Tz=DN.Tz;this.Xx=DN.Xx;return this;},_Init:function(
aArg){this.__proto__=D.SC;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;}
,_ReInit:function(){},_Mark:function(C){var A;if((A=this.G)&&(A._cycle!=C))A._Mark(
A._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"};
D.Ez={path:null,Gm:function(){if(!this.path)return;var handle=this.path;B.ln(handle
);this.path=null;},TR:function(P){B.qJ(this,0);},Td:function(DB){this.TR(DB);},BQ:
function(aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
){B.lz([this,this.Td],this);var handle=this.path;var result=0;{result=B.qv(handle
,aSubPathNo,aCenterX,aCenterY,aRadiusX,aRadiusY,aStartAngle,aEndAngle,aNoOfEdges
);}return result;},Iu:function(aSubPathNo){B.lz([this,this.Td],this);var handle=
this.path;B.nl(handle,aSubPathNo);},K1:function(aSubPathNo,aX,aY){B.lz([this,this.
Td],this);var handle=this.path;B.ng(handle,aSubPathNo,aX,aY);},Dh:function(aSubPathNo
,aMaxNoOfEdges){if(!this.path&&!aSubPathNo)this.Afx(1);B.lz([this,this.Td],this);
var handle=this.path;var result=false;result=B.is(handle,aSubPathNo,aMaxNoOfEdges
);return result;},AhX:function(){if(!this.path)return 1;var handle=this.path;var
result=0;result=B.th(handle);return result;},Afx:function(aMaxNoOfSubPaths){if(aMaxNoOfSubPaths<
1)aMaxNoOfSubPaths=1;if(!!this.path&&(this.AhX()===aMaxNoOfSubPaths))return true;
var handle=this.path;{B.ln(handle);handle=B.nn(aMaxNoOfSubPaths);}this.path=handle;
B.lz([this,this.Td],this);return!!this.path;},_Init:function(aArg){this.__proto__=
D.Ez;B.gx++;},_Done:function(){this.Gm();this.__proto__=null;B.gx--;},_ReInit:function(
){},_Mark:function(C){var A;if((A=this.G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:
null,_cycle:0,_observers:null,_className:"Graphics::Path"};D.Rw={Left:0x1,App:0x2
,Right:0x4,AnS:0x8,Aox:0x10};D.UA={Aof:0,AoL:1};D.AnO={AnN:0,Apc:1,AoQ:2,AoR:3,AoT:
4,AoS:5};D.O_={Eu:360.000000,AQ:0,Ef:0,D5:0,Ce:0,Ck:0,Cc:0,NP:function(P){var BZ=
this.Eu-this.AQ;var BB;if((BZ>=360.000000)||(BZ<=-360.000000))BZ=360.000000;this.
Afx(2);{var Ac=this.Ck;if(this.Ce>Ac)Ac=this.Ce;if(BZ===360.000000)BB=Ac|0;else BB=((
BZ*Ac)/360.000000)|0;if(BB<0)BB=-BB;BB=BB+1;}if((((BZ===0.000000)||(this.Ck===0.000000
))||(this.Ce===0.000000))||(((((this.Cc===2)||(this.Cc===3))||(this.Cc===4))||(this.
Cc===5))&&((this.D5>=this.Ck)||(this.Ef>=this.Ce)))){this.Dh(0,0);this.Dh(1,0);return;
}if((BZ===360.000000)&&((((((this.Cc!==2)&&(this.Cc!==3))&&(this.Cc!==4))&&(this.
Cc!==5))||(this.D5===0.000000))||(this.Ef===0.000000))){this.Dh(0,BB+1);this.Dh(
1,0);this.BQ(0,0.000000,0.000000,this.Ck,this.Ce,0.000000,360.000000,BB);this.Iu(
0);return;}if((((BZ===360.000000)&&((((this.Cc===2)||(this.Cc===3))||(this.Cc===
4))||(this.Cc===5)))&&(this.D5>0.000000))&&(this.Ef>0.000000)){this.Dh(0,BB+1);this.
Dh(1,BB+1);this.BQ(0,0.000000,0.000000,this.Ck,this.Ce,0.000000,360.000000,BB);this.
BQ(1,0.000000,0.000000,this.D5,this.Ef,360.000000,0.000000,BB);this.Iu(0);this.Iu(
1);return;}if(!this.Cc){this.Dh(0,BB+1);this.Dh(1,0);this.BQ(0,0.000000,0.000000
,this.Ck,this.Ce,this.AQ,this.AQ+BZ,BB);return;}if(this.Cc===1){this.Dh(0,BB+1);
this.Dh(1,0);this.BQ(0,0.000000,0.000000,this.Ck,this.Ce,this.AQ,this.AQ+BZ,BB);
this.Iu(0);return;}if((this.Cc===2)&&((this.D5===0.000000)||(this.Ef===0.000000)
)){this.Dh(0,BB+1);this.Dh(1,0);this.K1(0,0.000000,0.000000);this.BQ(0,0.000000,
0.000000,this.Ck,this.Ce,this.AQ,this.AQ+BZ,BB);this.Iu(0);return;}if((this.Cc===
4)&&((this.D5===0.000000)||(this.Ef===0.000000))){var EY=this.Ck*Math.cos(this.AQ
*B.iq);var EZ=this.Ce*Math.sin(this.AQ*B.iq);var DZ=Math.sqrt((EY*EY)+(EZ*EZ));var
GC=((DZ*0.250000)|0)+3;this.Dh(0,(BB+GC)+2);this.Dh(1,0);this.K1(0,0.000000,0.000000
);if(BZ>=0.000000)this.BQ(0,EY/2.000000,EZ/2.000000,DZ/2.000000,DZ/2.000000,this.
AQ+180.000000,this.AQ+360.000000,GC);else this.BQ(0,EY/2.000000,EZ/2.000000,DZ/2.000000
,DZ/2.000000,this.AQ+180.000000,this.AQ,GC);this.BQ(0,0.000000,0.000000,this.Ck,
this.Ce,this.AQ,this.AQ+BZ,BB);this.Iu(0);return;}if((this.Cc===5)&&((this.D5===
0.000000)||(this.Ef===0.000000))){var Dd=this.AQ+BZ;var EY=this.Ck*Math.cos(Dd*B.
iq);var EZ=this.Ce*Math.sin(Dd*B.iq);var DZ=Math.sqrt((EY*EY)+(EZ*EZ));var GC=((
DZ*0.250000)|0)+3;this.Dh(0,(BB+GC)+2);this.Dh(1,0);this.K1(0,0.000000,0.000000);
this.BQ(0,0.000000,0.000000,this.Ck,this.Ce,this.AQ,this.AQ+BZ,BB);if(BZ>=0.000000
)this.BQ(0,EY/2.000000,EZ/2.000000,DZ/2.000000,DZ/2.000000,Dd,Dd+180.000000,GC);
else this.BQ(0,EY/2.000000,EZ/2.000000,DZ/2.000000,DZ/2.000000,Dd,Dd-180.000000,
GC);this.Iu(0);return;}if((this.Cc===3)&&((this.D5===0.000000)||(this.Ef===0.000000
))){var Mh=this.Ck*Math.cos(this.AQ*B.iq);var Mi=this.Ce*Math.sin(this.AQ*B.iq);
var JU=Math.sqrt((Mh*Mh)+(Mi*Mi));var Dd=this.AQ+BZ;var LV=this.Ck*Math.cos(Dd*B.
iq);var LW=this.Ce*Math.sin(Dd*B.iq);var JJ=Math.sqrt((LV*LV)+(LW*LW));var OU=((
JU*0.250000)|0)+3;var OT=((JJ*0.250000)|0)+3;this.Dh(0,((BB+OU)+OT)+10);this.Dh(
1,0);this.K1(0,0.000000,0.000000);if(BZ>=0.000000){this.BQ(0,Mh/2.000000,Mi/2.000000
,JU/2.000000,JU/2.000000,this.AQ+180.000000,this.AQ+360.000000,OU);this.BQ(0,0.000000
,0.000000,this.Ck,this.Ce,this.AQ,this.AQ+BZ,BB);this.BQ(0,LV/2.000000,LW/2.000000
,JJ/2.000000,JJ/2.000000,Dd,Dd+180.000000,OT);}else{this.BQ(0,Mh/2.000000,Mi/2.000000
,JU/2.000000,JU/2.000000,this.AQ+180.000000,this.AQ,OU);this.BQ(0,0.000000,0.000000
,this.Ck,this.Ce,this.AQ,this.AQ+BZ,BB);this.BQ(0,LV/2.000000,LW/2.000000,JJ/2.000000
,JJ/2.000000,Dd,Dd-180.000000,OT);}this.Iu(0);return;}if(this.Cc===2){this.Dh(0,(
BB*2)+1);this.Dh(1,0);this.BQ(0,0.000000,0.000000,this.Ck,this.Ce,this.AQ,this.AQ+
BZ,BB);this.BQ(0,0.000000,0.000000,this.D5,this.Ef,this.Eu,this.Eu-BZ,BB);this.Iu(
0);return;}if(this.Cc===4){var sin=Math.sin(this.AQ*B.iq);var cos=Math.cos(this.
AQ*B.iq);var Ik=this.D5*cos;var Il=this.Ef*sin;var EY=this.Ck*cos;var EZ=this.Ce
*sin;var DZ=Math.sqrt(((EY-Ik)*(EY-Ik))+((EZ-Il)*(EZ-Il)));var GC=((DZ*0.250000)|
0)+3;this.Dh(0,((BB*2)+GC)+2);this.Dh(1,0);if(BZ>=0.000000){this.BQ(0,0.000000,0.000000
,this.Ck,this.Ce,this.AQ,this.AQ+BZ,BB);this.BQ(0,0.000000,0.000000,this.D5,this.
Ef,this.Eu,this.Eu-BZ,BB);this.BQ(0,Ik+((EY-Ik)/2.000000),Il+((EZ-Il)/2.000000),
DZ/2.000000,DZ/2.000000,this.AQ+180.000000,this.AQ+360.000000,GC);}else{this.BQ(
0,0.000000,0.000000,this.Ck,this.Ce,this.AQ,this.AQ+BZ,BB);this.BQ(0,0.000000,0.000000
,this.D5,this.Ef,this.Eu,this.Eu-BZ,BB);this.BQ(0,Ik+((EY-Ik)/2.000000),Il+((EZ-
Il)/2.000000),DZ/2.000000,DZ/2.000000,this.AQ+180.000000,this.AQ,GC);}this.Iu(0);
return;}if(this.Cc===5){var Dd=this.AQ+BZ;var sin=Math.sin(Dd*B.iq);var cos=Math.
cos(Dd*B.iq);var Ik=this.D5*cos;var Il=this.Ef*sin;var EY=this.Ck*cos;var EZ=this.
Ce*sin;var DZ=Math.sqrt(((EY-Ik)*(EY-Ik))+((EZ-Il)*(EZ-Il)));var GC=((DZ*0.250000
)|0)+3;this.Dh(0,((BB*2)+GC)+2);this.Dh(1,0);if(BZ>=0.000000){this.BQ(0,0.000000
,0.000000,this.Ck,this.Ce,this.AQ,this.AQ+BZ,BB);this.BQ(0,Ik+((EY-Ik)/2.000000)
,Il+((EZ-Il)/2.000000),DZ/2.000000,DZ/2.000000,Dd,Dd+180.000000,GC);this.BQ(0,0.000000
,0.000000,this.D5,this.Ef,this.Eu,this.Eu-BZ,BB);}else{this.BQ(0,0.000000,0.000000
,this.Ck,this.Ce,this.AQ,this.AQ+BZ,BB);this.BQ(0,Ik+((EY-Ik)/2.000000),Il+((EZ-
Il)/2.000000),DZ/2.000000,DZ/2.000000,Dd,Dd-180.000000,GC);this.BQ(0,0.000000,0.000000
,this.D5,this.Ef,this.Eu,this.Eu-BZ,BB);}this.Iu(0);return;}if(this.Cc===3){var Dd=
this.AQ+BZ;var Ahe=Math.sin(this.AQ*B.iq);var Ahd=Math.cos(this.AQ*B.iq);var Agd=
Math.sin(Dd*B.iq);var Agb=Math.cos(Dd*B.iq);var Q_=this.D5*Ahd;var Q$=this.Ef*Ahe;
var Mh=this.Ck*Ahd;var Mi=this.Ce*Ahe;var QT=this.D5*Agb;var QU=this.Ef*Agd;var LV=
this.Ck*Agb;var LW=this.Ce*Agd;var JU=Math.sqrt(((Mh-Q_)*(Mh-Q_))+((Mi-Q$)*(Mi-Q$
)));var JJ=Math.sqrt(((LV-QT)*(LV-QT))+((LW-QU)*(LW-QU)));var OU=((JU*0.250000)|
0)+3;var OT=((JJ*0.250000)|0)+3;this.Dh(0,(((BB*2)+OU)+OT)+4);this.Dh(1,0);if(BZ>=
0.000000){this.BQ(0,0.000000,0.000000,this.Ck,this.Ce,this.AQ,this.AQ+BZ,BB);this.
BQ(0,QT+((LV-QT)/2.000000),QU+((LW-QU)/2.000000),JJ/2.000000,JJ/2.000000,Dd,Dd+180.000000
,OT);this.BQ(0,0.000000,0.000000,this.D5,this.Ef,this.Eu,this.Eu-BZ,BB);this.BQ(
0,Q_+((Mh-Q_)/2.000000),Q$+((Mi-Q$)/2.000000),JU/2.000000,JU/2.000000,this.AQ+180.000000
,this.AQ+360.000000,OU);}else{this.BQ(0,0.000000,0.000000,this.Ck,this.Ce,this.AQ
,this.AQ+BZ,BB);this.BQ(0,QT+((LV-QT)/2.000000),QU+((LW-QU)/2.000000),JJ/2.000000
,JJ/2.000000,Dd,Dd-180.000000,OT);this.BQ(0,0.000000,0.000000,this.D5,this.Ef,this.
Eu,this.Eu-BZ,BB);this.BQ(0,Q_+((Mh-Q_)/2.000000),Q$+((Mi-Q$)/2.000000),JU/2.000000
,JU/2.000000,this.AQ+180.000000,this.AQ,OU);}this.Iu(0);return;}},U3:function(E){
if(E===this.Eu)return;this.Eu=E;if((this.Ck>0.000000)&&(this.Ce>0.000000))B.lz([
this,this.NP],this);},Vd:function(E){if(E===this.AQ)return;this.AQ=E;if((this.Ck>
0.000000)&&(this.Ce>0.000000))B.lz([this,this.NP],this);},UX:function(){return this.
D5;},U9:function(E){if((E===this.D5)&&(E===this.Ef))return;this.D5=E;this.Ef=E;if((((
this.AQ!==this.Eu)&&(this.Ck>0.000000))&&(this.Ce>0.000000))&&((((this.Cc===2)||(
this.Cc===4))||(this.Cc===5))||(this.Cc===3)))B.lz([this,this.NP],this);},Vc:function(
E){if((E===this.Ck)&&(E===this.Ce))return;this.Ck=E;this.Ce=E;if(this.AQ!==this.
Eu)B.lz([this,this.NP],this);},Ey:function(E){if(E===this.Cc)return;this.Cc=E;if(((
this.AQ!==this.Eu)&&(this.Ck>0.000000))&&(this.Ce>0.000000))B.lz([this,this.NP],
this);},_Init:function(aArg){D.Ez._Init.call(this,aArg);this.__proto__=D.O_;},_className:
"Graphics::ArcPath"};
D._Init=function(){D.Canvas.__proto__=B.uQ.R;D.O_.__proto__=D.Ez;};D._ReInit=function(
){};D.Cl=function(C){};return D;})();

/* Embedded Wizard */