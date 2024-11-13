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
);if(EmWiApp.uP)throw new Error("The unit file 'Resources.js' included twice!");
EmWiApp.uP=(function(){var B=EmWiApp;var C={};
var AA=[0,0];var A0="The property \'FrameSize\' is READ ONLY.";
C.Z={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.qK,C2:false,CB:false,Dc:function(
){if(!this.bitmap)return;var handle=this.bitmap;B.s9(handle);this.bitmap=null;this.
FrameSize=AA;this.FrameDelay=0;this.NoOfFrames=1;this.CB=false;},Bz:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=AA;var frameDelay=
0;{var bmp=B.tN(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.C2=true;this.CB=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Kv:function(D){throw new Error(
A0);},Update:function(){},_Init:function(aArg){B.Core.DX._Init.call(this,aArg);this.
__proto__=C.Z;this.Bz(aArg);},_Done:function(){this.Dc();this.__proto__=B.Core.DX;
B.Core.DX._Done.call(this);},_className:"Resources::Bitmap"};C.BM={font:null,Leading:
0,Descent:0,Ascent:0,Dc:function(){this.Mx();},Bz:function(aArg){this.My(aArg);}
,Mx:function(){if(!this.font)return;var handle=this.font;B.s_(handle);this.font=
null;this.Ascent=0;this.Descent=0;this.Leading=0;},My:function(aFontResource){if(
!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=0;{
var font=B.tP(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;leading=
font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=descent;
this.Leading=leading;},Kg:function(aFlowString){if(!this.font)return 0;var handle=
this.font;var advance=0;advance=B.tf(handle,aFlowString);return advance;},L5:function(
aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((
aOffset>0)&&(aOffset>=aString.length)))return B.hr;var handle=this.font;var result=
B.hr;result=B.t_(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;
},Go:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
B.jP(handle,aString,aOffset,aCount);return advance;},_Init:function(aArg){B.Core.
DX._Init.call(this,aArg);this.__proto__=C.BM;this.Bz(aArg);},_Done:function(){this.
Dc();this.__proto__=B.Core.DX;B.Core.DX._Done.call(this);},_className:"Resources::Font"
};C.Dd={_class:function(){return C.BM;},0:{Data:function(){return B.u0;},Cache:[
],_this:null}};C.Ek={_class:function(){return C.BM;},0:{Data:function(){return B.
uZ;},Cache:[],_this:null}};C.FK={_class:function(){return C.Z;},0:{FileName:"./res/ResourcesWhiteBitmapStripe.png"
,Format:B.ly,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:null}};
C._Init=function(){C.Z.__proto__=B.Core.DX;C.BM.__proto__=B.Core.DX;};C._ReInit=function(
){};C.Bs=function(E){var A;if((A=C.Dd[0]._this)&&(A._cycle!=E))A._Done(C.Dd[0]._this=
null);if((A=C.Ek[0]._this)&&(A._cycle!=E))A._Done(C.Ek[0]._this=null);if((A=C.FK[
0]._this)&&(A._cycle!=E))A._Done(C.FK[0]._this=null);};return C;})();

/* Embedded Wizard */