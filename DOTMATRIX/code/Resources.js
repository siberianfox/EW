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
);if(EmWiApp.abi)throw new Error("The unit file 'Resources.js' included twice!");
EmWiApp.abi=(function(){var B=EmWiApp;var C={};
var A9=[0,0];var Bc="The property \'FrameSize\' is READ ONLY.";
C.W={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.vw,EX:false,Ej:false,Ep:function(
){if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.bitmap=null;this.
FrameSize=A9;this.FrameDelay=0;this.NoOfFrames=1;this.Ej=false;},Ai:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=A9;var frameDelay=
0;{var bmp=B.aac(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.EX=true;this.Ej=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Lo:function(E){throw new Error(
Bc);},Update:function(){},_Init:function(aArg){B.Core.Hf._Init.call(this,aArg);this.
__proto__=C.W;this.Ai(aArg);},_Done:function(){this.Ep();this.__proto__=B.Core.Hf;
B.Core.Hf._Done.call(this);},_className:"Resources::Bitmap"};C.A5={font:null,Leading:
0,Descent:0,Ascent:0,Ep:function(){this.Zl();},Ai:function(aArg){this.Zq(aArg);}
,Zl:function(){if(!this.font)return;var handle=this.font;B.zy(handle);this.font=
null;this.Ascent=0;this.Descent=0;this.Leading=0;},Zq:function(aFontResource){if(
!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=0;{
var font=B.aae(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;leading=
font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=descent;
this.Leading=leading;},Ue:function(aString,aOffset,aCount,aColumn,aMinWidth){if(
aOffset<0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>aString.length
))aOffset=aString.length;var handle=this.font;var pos=0;pos=B.zQ(handle,aString,
aOffset,aCount,aColumn,aMinWidth);return pos;},Uf:function(aString,aOffset,aCount
,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>
aString.length))aOffset=aString.length;var handle=this.font;var col=0;col=B.z0(handle
,aString,aOffset,aCount,aX,aMinWidth);return col;},Rt:function(aFlowString){if(!
this.font)return 0;var handle=this.font;var advance=0;advance=B.zG(handle,aFlowString
);return advance;},VA:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<
0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return B.jm;
var handle=this.font;var result=B.jm;result=B.aaz(handle,aString,aOffset,aWidth,
aMaxNoOfRows,aBidi);return result;},G9:function(aString,aOffset,aCount){if(aOffset<
0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var
handle=this.font;var advance=0;advance=B.ms(handle,aString,aOffset,aCount);return advance;
},_Init:function(aArg){B.Core.Hf._Init.call(this,aArg);this.__proto__=C.A5;this.
Ai(aArg);},_Done:function(){this.Ep();this.__proto__=B.Core.Hf;B.Core.Hf._Done.call(
this);},_className:"Resources::Font"};C.Bs={_class:function(){return C.A5;},0:{Data:
function(){return B.abo;},Cache:[],_this:null}};C.IH={_class:function(){return C.
A5;},0:{Data:function(){return B.abn;},Cache:[],_this:null}};C.Kh={_class:function(
){return C.W;},0:{FileName:"./res/ResourcesWhiteBitmapStripe.png",Format:B.jt,NoOfFrames:
1,FrameSize:[256,4],FrameDelay:0,_this:null}};
C._Init=function(){C.W.__proto__=B.Core.Hf;C.A5.__proto__=B.Core.Hf;};C._ReInit=function(
){};C.C9=function(D){var A;if((A=C.Bs[0]._this)&&(A._cycle!=D))A._Done(C.Bs[0]._this=
null);if((A=C.IH[0]._this)&&(A._cycle!=D))A._Done(C.IH[0]._this=null);if((A=C.Kh[
0]._this)&&(A._cycle!=D))A._Done(C.Kh[0]._this=null);};return C;})();

/* Embedded Wizard */