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
* Profile  : ESP32_WebGL
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.abh)throw new Error("The unit file 'Resources.js' included twice!");
EmWiApp.abh=(function(){var B=EmWiApp;var C={};
var AD=[0,0];var A0="The property \'FrameSize\' is READ ONLY.";
C.Ag={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.vw,FT:false,Da:false,DO:function(
){if(!this.bitmap)return;var handle=this.bitmap;B.zx(handle);this.bitmap=null;this.
FrameSize=AD;this.FrameDelay=0;this.NoOfFrames=1;this.Da=false;},Bd:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=AD;var frameDelay=
0;{var bmp=B.aac(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.FT=true;this.Da=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},KL:function(E){throw new Error(
A0);},Update:function(){},_Init:function(aArg){B.Core.Ez._Init.call(this,aArg);this.
__proto__=C.Ag;this.Bd(aArg);},_Done:function(){this.DO();this.__proto__=B.Core.
Ez;B.Core.Ez._Done.call(this);},_className:"Resources::Bitmap"};C.BQ={font:null,
Leading:0,Descent:0,Ascent:0,DO:function(){this.Ns();},Bd:function(aArg){this.Nz(
aArg);},Ns:function(){if(!this.font)return;var handle=this.font;B.zy(handle);this.
font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},Nz:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=B.aae(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},Ky:function(aFlowString){if(!this.font)return 0;var
handle=this.font;var advance=0;advance=B.zG(handle,aFlowString);return advance;}
,Mr:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return B.jm;var handle=this.
font;var result=B.jm;result=B.aaz(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi
);return result;},GG:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var handle=this.font;
var advance=0;advance=B.ms(handle,aString,aOffset,aCount);return advance;},_Init:
function(aArg){B.Core.Ez._Init.call(this,aArg);this.__proto__=C.BQ;this.Bd(aArg);
},_Done:function(){this.DO();this.__proto__=B.Core.Ez;B.Core.Ez._Done.call(this);
},_className:"Resources::Font"};
C._Init=function(){C.Ag.__proto__=B.Core.Ez;C.BQ.__proto__=B.Core.Ez;};C._ReInit=
function(){};C.Bs=function(D){};return C;})();

/* Embedded Wizard */