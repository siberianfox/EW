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
);if(EmWiApp.abg)throw new Error("The unit file 'Resources.js' included twice!");
EmWiApp.abg=(function(){var B=EmWiApp;var C={};
var AF=[0,0];var AB="The property \'FrameSize\' is READ ONLY.";
C.At={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.vw,DO:false,Dk:false,CC:function(
){if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.bitmap=null;this.
FrameSize=AF;this.FrameDelay=0;this.NoOfFrames=1;this.Dk=false;},Bz:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=AF;var frameDelay=
0;{var bmp=B.aac(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.DO=true;this.Dk=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Fp:function(D){throw new Error(
AB);},Update:function(){},_Init:function(aArg){B.Core.Do._Init.call(this,aArg);this.
__proto__=C.At;this.Bz(aArg);},_Done:function(){this.CC();this.__proto__=B.Core.
Do;B.Core.Do._Done.call(this);},_className:"Resources::Bitmap"};C.G8={_class:function(
){return C.Ak;},0:{Data:function(){return B.abm;},Cache:[],_this:null}};C.Ak={font:
null,Leading:0,Descent:0,Ascent:0,CC:function(){this.Kt();},Bz:function(aArg){this.
Kw(aArg);},Kt:function(){if(!this.font)return;var handle=this.font;B.zy(handle);
this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},Kw:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=B.aae(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},Jg:function(aString,aOffset,aCount,aColumn,aMinWidth
){if(aOffset<0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>aString.
length))aOffset=aString.length;var handle=this.font;var pos=0;pos=B.zQ(handle,aString
,aOffset,aCount,aColumn,aMinWidth);return pos;},Jh:function(aString,aOffset,aCount
,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;if((aOffset>0)&&(aOffset>
aString.length))aOffset=aString.length;var handle=this.font;var col=0;col=B.z0(handle
,aString,aOffset,aCount,aX,aMinWidth);return col;},Jf:function(aFlowString){if(!
this.font)return 0;var handle=this.font;var advance=0;advance=B.zG(handle,aFlowString
);return advance;},JG:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<
0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return B.jm;
var handle=this.font;var result=B.jm;result=B.aaz(handle,aString,aOffset,aWidth,
aMaxNoOfRows,aBidi);return result;},EM:function(aString,aOffset,aCount){if(aOffset<
0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var
handle=this.font;var advance=0;advance=B.ms(handle,aString,aOffset,aCount);return advance;
},_Init:function(aArg){B.Core.Do._Init.call(this,aArg);this.__proto__=C.Ak;this.
Bz(aArg);},_Done:function(){this.CC();this.__proto__=B.Core.Do;B.Core.Do._Done.call(
this);},_className:"Resources::Font"};C.CZ={_class:function(){return C.Ak;},0:{Data:
function(){return B.abo;},Cache:[],_this:null}};C.Fl={_class:function(){return C.
Ak;},0:{Data:function(){return B.abn;},Cache:[],_this:null}};C.Fu={_class:function(
){return C.At;},0:{FileName:"./res/ResourcesWhiteBitmapStripe.png",Format:B.jt,NoOfFrames:
1,FrameSize:[256,4],FrameDelay:0,_this:null}};
C._Init=function(){C.At.__proto__=B.Core.Do;C.Ak.__proto__=B.Core.Do;};C._ReInit=
function(){};C.BM=function(E){var A;if((A=C.G8[0]._this)&&(A._cycle!=E))A._Done(
C.G8[0]._this=null);if((A=C.CZ[0]._this)&&(A._cycle!=E))A._Done(C.CZ[0]._this=null
);if((A=C.Fl[0]._this)&&(A._cycle!=E))A._Done(C.Fl[0]._this=null);if((A=C.Fu[0].
_this)&&(A._cycle!=E))A._Done(C.Fu[0]._this=null);};return C;})();

/* Embedded Wizard */