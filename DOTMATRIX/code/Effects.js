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
);if(EmWiApp.abj)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
abj=(function(){var A=EmWiApp;var D={};

D.Fy={Trigger:function(){A.Core.Timer.Trigger.call(this);A.vv(this,0);},_Init:function(
aArg){A.Core.Timer._Init.call(this,aArg);this.__proto__=D.Fy;},_className:"Effects::EffectTimerClass"
};D.DQ={_Init:function(){D.Fy._Init.call(this,0);this.ER(15);this.BN(true);},_variants:
function(){return this;},_this:null};
D._Init=function(){D.Fy.__proto__=A.Core.Timer;};D._ReInit=function(){var B;if((B=
D.DQ._this))B._ReInit();};D.A1=function(F){var B;if((B=D.DQ._this)&&(B._cycle!=F
))B._Done(D.DQ._this=null);};return D;})();

/* Embedded Wizard */