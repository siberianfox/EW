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
EmWiApp.uQ=(function(){var B=EmWiApp;var D={};
var BN=[0,0];var AZ="The property \'FrameSize\' is READ ONLY.";
D.R={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.qK,GX:false,Fk:false,Gm:function(
){if(!this.bitmap)return;var handle=this.bitmap;B.s9(handle);this.bitmap=null;this.
FrameSize=BN;this.FrameDelay=0;this.NoOfFrames=1;this.Fk=false;},At:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=BN;var frameDelay=
0;{var bmp=B.tN(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.GX=true;this.Fk=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},PX:function(E){throw new Error(
AZ);},Update:function(){},_Init:function(aArg){B.Core.Lp._Init.call(this,aArg);this.
__proto__=D.R;this.At(aArg);},_Done:function(){this.Gm();this.__proto__=B.Core.Lp;
B.Core.Lp._Done.call(this);},_className:"Resources::Bitmap"};D.Uu={_class:function(
){return D.R;},0:{FileName:"./res/ResourcesDefaultBitmap.png",Format:B.ci,NoOfFrames:
1,FrameSize:[48,48],FrameDelay:0,_this:null}};D.A8={font:null,Leading:0,Descent:
0,Ascent:0,Gm:function(){this.Amh();},At:function(aArg){this.Amm(aArg);},Amh:function(
){if(!this.font)return;var handle=this.font;B.s_(handle);this.font=null;this.Ascent=
0;this.Descent=0;this.Leading=0;},Amm:function(aFontResource){if(!aFontResource)
return;var handle=null;var ascent=0;var descent=0;var leading=0;{var font=B.tP(aFontResource
);if(font){ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=
font;}this.font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;
},AhZ:function(aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;
if(!this.font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.
length;var handle=this.font;var pos=0;pos=B.tp(handle,aString,aOffset,aCount,aColumn
,aMinWidth);return pos;},Ah0:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<
0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=
aString.length;var handle=this.font;var col=0;col=B.tz(handle,aString,aOffset,aCount
,aX,aMinWidth);return col;},Adh:function(aFlowString){if(!this.font)return 0;var
handle=this.font;var advance=0;advance=B.tf(handle,aFlowString);return advance;}
,Ajo:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;
if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return B.hr;var handle=this.
font;var result=B.hr;result=B.t_(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi
);return result;},La:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var handle=this.font;
var advance=0;advance=B.jP(handle,aString,aOffset,aCount);return advance;},_Init:
function(aArg){B.Core.Lp._Init.call(this,aArg);this.__proto__=D.A8;this.At(aArg);
},_Done:function(){this.Gm();this.__proto__=B.Core.Lp;B.Core.Lp._Done.call(this);
},_className:"Resources::Font"};D.XO={_class:function(){return D.A8;},0:{Data:function(
){return B.u$;},Cache:[],_this:null}};D.Pz={_class:function(){return D.A8;},0:{Data:
function(){return B.u_;},Cache:[],_this:null}};D.Qx={_class:function(){return D.
R;},0:{FileName:"./res/ResourcesWhiteBitmapStripe.png",Format:B.ly,NoOfFrames:1,
FrameSize:[256,4],FrameDelay:0,_this:null}};
D._Init=function(){D.R.__proto__=B.Core.Lp;D.A8.__proto__=B.Core.Lp;};D._ReInit=function(
){};D.Cl=function(C){var A;if((A=D.Uu[0]._this)&&(A._cycle!=C))A._Done(D.Uu[0]._this=
null);if((A=D.XO[0]._this)&&(A._cycle!=C))A._Done(D.XO[0]._this=null);if((A=D.Pz[
0]._this)&&(A._cycle!=C))A._Done(D.Pz[0]._this=null);if((A=D.Qx[0]._this)&&(A._cycle
!=C))A._Done(D.Qx[0]._this=null);};return D;})();

/* Embedded Wizard */