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
);if(EmWiApp.kh)throw new Error("The unit file 'Application.js' included twice!"
);EmWiApp.kh=(function(){var A=EmWiApp;var D={};
var Af=[0,0,16,16];var AB=[0,0,400,400];var BZ=[64,299];var Cv=[334,299];var CM=[
334,29];var C6=[64,29];var D6=[0,413,16,429];var Gb=[81,333,184,367];var Gc="Wind";
var D7=[213,333,316,367];var Gd="SUN";
D.Fu={Bu:null,_Init:function(aArg){A.Core.Root._Init.call(this,aArg);A.abl.Bu._Init.
call(this.Bu={As:this},0);this.__proto__=D.Fu;this.AO(Af);this.Bu.AO(Af);this.Cr(
this.Bu,0);var Hb=this._variants();if(Hb){this.Y={};Hb._Init.call(this,aArg);}},
_Done:function(){if(this.Y)this.Y._Done.call(this);this.__proto__=A.Core.Root;this.
Bu._Done();A.Core.Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.
call(this);this.Bu._ReInit();if(this.Y)this.Y._ReInit.call(this);},_Mark:function(
F){var B;A.Core.Root._Mark.call(this,F);if((B=this.Bu)._cycle!=F)B._Mark(B._cycle=
F);if(this.Y)this.Y._Mark(F);},_variants:function(){return D.G6._variants();},Y:
null,_className:"Application::Application"};D.G6={Bx:null,Cg:null,Cf:null,Bn:function(
aArg){var Y=this.Y;this.Bu.FX(true);Y.Bx.G4(this.Bu);this.Bu.Timer.BN(false);},ET:
function(AJ){var Y=this.Y;if(AJ===Y.Cg)this.Bu.Bm.C5(A.zW(A.Image.EH));else if(AJ===
Y.Cf)this.Bu.Bm.C5(A.zW(A.Image.Dn));},_Init:function(aArg){var Y=this.Y;A.abh.Bx.
_Init.call(Y.Bx={As:this},0);A.abi.ES._Init.call(Y.Cg={As:this},0);A.abi.ES._Init.
call(Y.Cf={As:this},0);Y.__proto__=D.G6;this.AO(AB);Y.Bx.Dw(BZ);Y.Bx.Dv(Cv);Y.Bx.
Du(CM);Y.Bx.Dt(C6);Y.Bx.ID(false);this.Bu.AO(D6);Y.Cg.AO(Gb);Y.Cg.G5(Gc);Y.Cf.AO(
D7);Y.Cf.G5(Gd);this.Cr(Y.Bx,-1);this.Cr(Y.Cg,0);this.Cr(Y.Cf,0);Y.Bx.G4(this.Bu
);Y.Cg.CK=[this,Y.ET];Y.Cg.G3(A._GetAutoObject(A.abi.D4));Y.Cf.CK=[this,Y.ET];Y.
Cf.G3(A._GetAutoObject(A.abi.D4));Y.Bn.call(this,aArg);A.hJ++;},_Done:function(){
var Y=this.Y;Y.__proto__=null;Y.Bx._Done();Y.Cg._Done();Y.Cf._Done();A.hJ--;},_ReInit:
function(){var Y=this.Y;Y.Bx._ReInit();Y.Cg._ReInit();Y.Cf._ReInit();},_Mark:function(
F){var B;if((B=this.Bx)._cycle!=F)B._Mark(B._cycle=F);if((B=this.Cg)._cycle!=F)B.
_Mark(B._cycle=F);if((B=this.Cf)._cycle!=F)B._Mark(B._cycle=F);},_variants:function(
){return this;},_className:"Application::Prototype"};
D._Init=function(){D.Fu.__proto__=A.Core.Root;};D._ReInit=function(){};D.A1=function(
F){};return D;})();

/* Embedded Wizard */