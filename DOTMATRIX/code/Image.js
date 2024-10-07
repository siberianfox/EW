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
);if(EmWiApp.Image)throw new Error("The unit file 'Image.js' included twice!");EmWiApp.
Image=(function(){var A=EmWiApp;var D={};

D.Dn={_class:function(){return A.abg.Z;},0:{FileName:"./res/ImageDotMatrix_15x15_Sun2.png"
,Format:A.cC,NoOfFrames:1,FrameSize:[15,15],FrameDelay:0,_this:null}};D.EH={_class:
function(){return A.abg.Z;},0:{FileName:"./res/ImageDotMatrix_15x15_Wind3.png",Format:
A.cC,NoOfFrames:1,FrameSize:[15,15],FrameDelay:0,_this:null}};
D._Init=function(){};D._ReInit=function(){};D.A1=function(F){var B;if((B=D.Dn[0].
_this)&&(B._cycle!=F))B._Done(D.Dn[0]._this=null);if((B=D.EH[0]._this)&&(B._cycle
!=F))B._Done(D.EH[0]._this=null);};return D;})();

/* Embedded Wizard */