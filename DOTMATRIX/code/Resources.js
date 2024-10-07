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
* Profile  : Prototype
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.abg)throw new Error("The unit file 'Resources.js' included twice!");
EmWiApp.abg=(function(){var A=EmWiApp;var D={};
var Af=[0,0];var AB="The property \'FrameSize\' is READ ONLY.";
D.Z={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.vw,Dq:false,BJ:false,B5:function(
){if(!this.bitmap)return;var handle=this.bitmap;A.zx(handle);this.bitmap=null;this.
FrameSize=Af;this.FrameDelay=0;this.NoOfFrames=1;this.BJ=false;},Bn:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Af;var frameDelay=
0;{var bmp=A.aac(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Dq=true;this.BJ=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},D1:function(C){throw new Error(
AB);},Update:function(){},_Init:function(aArg){A.Core.Cu._Init.call(this,aArg);this.
__proto__=D.Z;this.Bn(aArg);},_Done:function(){this.B5();this.__proto__=A.Core.Cu;
A.Core.Cu._Done.call(this);},_className:"Resources::Bitmap"};D.Bc={font:null,Leading:
0,Descent:0,Ascent:0,B5:function(){this.I4();},Bn:function(aArg){this.I6(aArg);}
,I4:function(){if(!this.font)return;var handle=this.font;A.zy(handle);this.font=
null;this.Ascent=0;this.Descent=0;this.Leading=0;},I6:function(aFontResource){if(
!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=0;{
var font=A.aae(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;leading=
font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=descent;
this.Leading=leading;},GU:function(aFlowString){if(!this.font)return 0;var handle=
this.font;var advance=0;advance=A.zG(handle,aFlowString);return advance;},II:function(
aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((
aOffset>0)&&(aOffset>=aString.length)))return A.jm;var handle=this.font;var result=
A.jm;result=A.aaz(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;
},DV:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
A.ms(handle,aString,aOffset,aCount);return advance;},_Init:function(aArg){A.Core.
Cu._Init.call(this,aArg);this.__proto__=D.Bc;this.Bn(aArg);},_Done:function(){this.
B5();this.__proto__=A.Core.Cu;A.Core.Cu._Done.call(this);},_className:"Resources::Font"
};D.FE={_class:function(){return D.Bc;},0:{Data:function(){return A.abm;},Cache:[
],_this:null}};
D._Init=function(){D.Z.__proto__=A.Core.Cu;D.Bc.__proto__=A.Core.Cu;};D._ReInit=function(
){};D.A1=function(F){var B;if((B=D.FE[0]._this)&&(B._cycle!=F))B._Done(D.FE[0]._this=
null);};return D;})();

/* Embedded Wizard */