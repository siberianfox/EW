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
EmWiApp.abg=(function(){var A=EmWiApp;var C={};
var Ae=[0,0];var At="The property \'FrameSize\' is READ ONLY.";
C.Y={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.vw,Dx:false,Bz:false,Bh:function(
){if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle);this.bitmap=null;this.
FrameSize=Ae;this.FrameDelay=0;this.NoOfFrames=1;this.Bz=false;},AE:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Ae;var frameDelay=
0;{var bmp=A.aac(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Dx=true;this.Bz=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},CI:function(F){throw new Error(
At);},Update:function(){},_Init:function(aArg){A.Core.BC._Init.call(this,aArg);this.
__proto__=C.Y;this.AE(aArg);},_Done:function(){this.Bh();this.__proto__=A.Core.BC;
A.Core.BC._Done.call(this);},_className:"Resources::Bitmap"};C.D9={_class:function(
){return C.AQ;},0:{Data:function(){return A.abl;},Cache:[],_this:null}};C.AQ={font:
null,Leading:0,Descent:0,Ascent:0,Bh:function(){this.Gn();},AE:function(aArg){this.
Gp(aArg);},Gn:function(){if(!this.font)return;var handle=this.font;A.zy(handle);
this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},Gp:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=A.aae(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},Fv:function(aFlowString){if(!this.font)return 0;var
handle=this.font;var advance=0;advance=A.zG(handle,aFlowString);return advance;}
,FM:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return A.jm;var handle=this.
font;var result=A.jm;result=A.aaz(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi
);return result;},Fw:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var handle=this.font;
var advance=0;advance=A.ms(handle,aString,aOffset,aCount);return advance;},_Init:
function(aArg){A.Core.BC._Init.call(this,aArg);this.__proto__=C.AQ;this.AE(aArg);
},_Done:function(){this.Bh();this.__proto__=A.Core.BC;A.Core.BC._Done.call(this);
},_className:"Resources::Font"};
C._Init=function(){C.Y.__proto__=A.Core.BC;C.AQ.__proto__=A.Core.BC;};C._ReInit=function(
){};C.AX=function(E){var B;if((B=C.D9[0]._this)&&(B._cycle!=E))B._Done(C.D9[0]._this=
null);};return C;})();

/* Embedded Wizard */