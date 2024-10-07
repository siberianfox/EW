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
);if(EmWiApp.uQ)throw new Error("The unit file 'Resources.js' included twice!");
EmWiApp.uQ=(function(){var A=EmWiApp;var D={};
var BR=[0,0];var A1="The property \'FrameSize\' is READ ONLY.";
D.W={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.qK,Hv:false,FE:false,GQ:function(
){if(!this.bitmap)return;var handle=this.bitmap;A.s9(handle);this.bitmap=null;this.
FrameSize=BR;this.FrameDelay=0;this.NoOfFrames=1;this.FE=false;},Ap:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=BR;var frameDelay=
0;{var bmp=A.tN(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Hv=true;this.FE=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},QM:function(E){throw new Error(
A1);},Update:function(){},_Init:function(aArg){A.Core.LU._Init.call(this,aArg);this.
__proto__=D.W;this.Ap(aArg);},_Done:function(){this.GQ();this.__proto__=A.Core.LU;
A.Core.LU._Done.call(this);},_className:"Resources::Bitmap"};D.Vj={_class:function(
){return D.W;},0:{FileName:"./res/ResourcesDefaultBitmap.png",Format:A.ci,NoOfFrames:
1,FrameSize:[48,48],FrameDelay:0,_this:null}};D.A$={font:null,Leading:0,Descent:
0,Ascent:0,GQ:function(){this.Aoe();},Ap:function(aArg){this.Aoj(aArg);},Aoe:function(
){if(!this.font)return;var handle=this.font;A.s_(handle);this.font=null;this.Ascent=
0;this.Descent=0;this.Leading=0;},Aoj:function(aFontResource){if(!aFontResource)
return;var handle=null;var ascent=0;var descent=0;var leading=0;{var font=A.tP(aFontResource
);if(font){ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=
font;}this.font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;
},AjJ:function(aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;
if(!this.font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.
length;var handle=this.font;var pos=0;pos=A.tp(handle,aString,aOffset,aCount,aColumn
,aMinWidth);return pos;},AjK:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<
0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=
aString.length;var handle=this.font;var col=0;col=A.tz(handle,aString,aOffset,aCount
,aX,aMinWidth);return col;},Afj:function(aFlowString){if(!this.font)return 0;var
handle=this.font;var advance=0;advance=A.tf(handle,aFlowString);return advance;}
,Ak7:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;
if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return A.hr;var handle=this.
font;var result=A.hr;result=A.t_(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi
);return result;},Ly:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var handle=this.font;
var advance=0;advance=A.jP(handle,aString,aOffset,aCount);return advance;},_Init:
function(aArg){A.Core.LU._Init.call(this,aArg);this.__proto__=D.A$;this.Ap(aArg);
},_Done:function(){this.GQ();this.__proto__=A.Core.LU;A.Core.LU._Done.call(this);
},_className:"Resources::Font"};D.Y$={_class:function(){return D.A$;},0:{Data:function(
){return A.u$;},Cache:[],_this:null}};D.Ql={_class:function(){return D.A$;},0:{Data:
function(){return A.u_;},Cache:[],_this:null}};D.Rv={_class:function(){return D.
W;},0:{FileName:"./res/ResourcesWhiteBitmapStripe.png",Format:A.ly,NoOfFrames:1,
FrameSize:[256,4],FrameDelay:0,_this:null}};
D._Init=function(){D.W.__proto__=A.Core.LU;D.A$.__proto__=A.Core.LU;};D._ReInit=function(
){};D.Cx=function(C){var B;if((B=D.Vj[0]._this)&&(B._cycle!=C))B._Done(D.Vj[0]._this=
null);if((B=D.Y$[0]._this)&&(B._cycle!=C))B._Done(D.Y$[0]._this=null);if((B=D.Ql[
0]._this)&&(B._cycle!=C))B._Done(D.Ql[0]._this=null);if((B=D.Rv[0]._this)&&(B._cycle
!=C))B._Done(D.Rv[0]._this=null);};return D;})();

/* Embedded Wizard */