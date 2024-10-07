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
);if(EmWiApp.abl)throw new Error("The unit file 'Screen.js' included twice!");EmWiApp.
abl=(function(){var A=EmWiApp;var D={};
var Af=[0,0,16,16];var AB=[0,0,15,15];
D.Bu={B9:null,Timer:null,Bm:null,ET:function(AJ){if(this.Bm.Z===A.zW(A.Image.Dn))
this.Bm.C5(A.zW(A.Image.EH));else this.Bm.C5(A.zW(A.Image.Dn));},_Init:function(
aArg){A.Core.Ab._Init.call(this,aArg);A.abh.B9._Init.call(this.B9={As:this},0);A.
Core.Timer._Init.call(this.Timer={As:this},0);A.abh.Bm._Init.call(this.Bm={As:this
},0);this.__proto__=D.Bu;this.AO(Af);this.B9.AO(Af);this.B9.D0(0xFFFFFFFF);this.
Timer.ER(1000);this.Timer.BN(true);this.Bm.AO(AB);this.Bm.FV(0x92);this.Cr(this.
B9,0);this.Cr(this.Bm,0);this.Timer.D2=[this,this.ET];this.Bm.C5(A.zW(A.Image.Dn
));},_Done:function(){this.__proto__=A.Core.Ab;this.B9._Done();this.Timer._Done(
);this.Bm._Done();A.Core.Ab._Done.call(this);},_ReInit:function(){A.Core.Ab._ReInit.
call(this);this.B9._ReInit();this.Timer._ReInit();this.Bm._ReInit();},_Mark:function(
F){var B;A.Core.Ab._Mark.call(this,F);if((B=this.B9)._cycle!=F)B._Mark(B._cycle=
F);if((B=this.Timer)._cycle!=F)B._Mark(B._cycle=F);if((B=this.Bm)._cycle!=F)B._Mark(
B._cycle=F);},_className:"Screen::wind"};
D._Init=function(){D.Bu.__proto__=A.Core.Ab;};D._ReInit=function(){};D.A1=function(
F){};return D;})();

/* Embedded Wizard */