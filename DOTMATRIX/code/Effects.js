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
);if(EmWiApp.abj)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
abj=(function(){var A=EmWiApp;var C={};

C.Dr={timer:null,Es:0,Ci:0,C_:0.001,A7:0,An:0,Ax:0,B1:1000,B2:false,BZ:function(A9
){if(!this.timer)return;if(!this.Ci){this.Ci=1;this.Es=this.Ci;this.Ax=this.timer.
AC;this.An=0;this.A7=-1;}var Bm;if((this.Ci>0)&&(this.Es>0))Bm=this.Gw();else if((
this.Ci<0)&&(this.Es<0))Bm=this.Gz();else if(this.Ci>0)Bm=this.Gx();else Bm=this.
Gy();if(Bm)this.BN(false);},D3:function(FZ){this.EI(FZ);},Gz:function(){var O=(this.
timer.AC-this.Ax)|0;if(O<0)O=-O;var Ce=this.B1;var Ao=this.B1;var Aj=this.A7;if(
!this.An&&(O>=Ce)){this.An=1;O=O-Ce;this.Ax=this.Ax+Ce;}if((this.An>0)&&(O>=Ao)){
var Aw=(O/Ao)|0;this.An=this.An+Aw;O=O-(Aw*Ao);this.Ax=this.Ax+(Aw*Ao);}if(this.
An>2)this.An=1;if(O>=0)Aj=1-(O*this.C_);else if(Aj>=0)Aj=0;if(Aj!==this.A7){this.
A7=Aj;this.D3(Aj);}return false;},Gy:function(){var O=(this.Ax-this.timer.AC)|0;
var Ao=this.B1;var Bm=false;var Aj=this.A7;if((this.An>1)&&(O<0)){var Aw=(((-O+Ao
)-1)/Ao)|0;if((this.An-Aw)<=0)Aw=this.An-1;this.An=this.An-Aw;O=O+(Aw*Ao);this.Ax=
this.Ax+(Aw*Ao);}if((this.An===1)&&(O<0)){var Aw=(((-O+Ao)-1)/Ao)|0;O=O+(Aw*Ao);
this.Ax=this.Ax+(Aw*Ao);}if(O<0){Bm=true;Aj=1;}else if(O>=0)Aj=1-(O*this.C_);else
if(Aj>=0)Aj=1;if(Aj!==this.A7){this.A7=Aj;this.D3(Aj);}return Bm;},Gx:function(){
var O=(this.Ax-this.timer.AC)|0;var Ao=this.B1;var Bm=false;var Aj=this.A7;if((this.
An>1)&&(O<0)){var Aw=(((-O+Ao)-1)/Ao)|0;if((this.An-Aw)<=0)Aw=this.An-1;this.An=
this.An-Aw;O=O+(Aw*Ao);this.Ax=this.Ax+(Aw*Ao);}if((this.An===1)&&(O<0)){var Aw=(((-
O+Ao)-1)/Ao)|0;O=O+(Aw*Ao);this.Ax=this.Ax+(Aw*Ao);}if(O<0){Bm=true;Aj=0;}else if(
O>=0)Aj=O*this.C_;else if(Aj>=0)Aj=0;if(Aj!==this.A7){this.A7=Aj;this.D3(Aj);}return Bm;
},Gw:function(){var O=(this.timer.AC-this.Ax)|0;if(O<0)O=-O;var Ce=this.B1;var Ao=
this.B1;var Aj=this.A7;if(!this.An&&(O>=Ce)){this.An=1;O=O-Ce;this.Ax=this.Ax+Ce;
}if((this.An>0)&&(O>=Ao)){var Aw=(O/Ao)|0;this.An=this.An+Aw;O=O-(Aw*Ao);this.Ax=
this.Ax+(Aw*Ao);}if(this.An>2)this.An=1;if(O>=0)Aj=O*this.C_;else if(Aj>=0)Aj=1;
if(Aj!==this.A7){this.A7=Aj;this.D3(Aj);}return false;},FH:function(F){if(F<15)F=
15;this.B1=F;this.C_=1/F;},BN:function(F){if(this.B2===F)return;this.B2=F;if(!F&&
!!this.timer){A.zl([this,this.BZ],this.timer,0);this.timer=null;}if(F){this.timer=
A._GetAutoObject(C.CC);A.y_([this,this.BZ],this.timer,0);this.Ci=0;A.ow([this,this.
BZ],this);}},EI:function(EZ){},_Init:function(aArg){this.__proto__=C.Dr;A.hJ++;}
,_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
E){var B;if((B=this.timer)&&(B._cycle!=E))B._Mark(B._cycle=E);if((B=this.Aa)&&(B.
_cycle!=E))B._Mark(B._cycle=E);},Aa:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.Ba={DB:null,ES:0,ET:255,EI:function(EZ){var A0;this.ES=Math.round(this.ET*EZ
)|0;if(!!this.DB)(A0=this.DB,A0[2].call(A0[0],this.ES));},_Init:function(aArg){C.
Dr._Init.call(this,aArg);this.__proto__=C.Ba;},_Mark:function(E){var B;C.Dr._Mark.
call(this,E);if((B=this.DB)&&((B=B[0])._cycle!=E))B._Mark(B._cycle=E);},_className:
"Effects::Int32Effect"};C.D_={Trigger:function(){A.Core.Timer.Trigger.call(this);
A.vv(this,0);},_Init:function(aArg){A.Core.Timer._Init.call(this,aArg);this.__proto__=
C.D_;},_className:"Effects::EffectTimerClass"};C.CC={_Init:function(){C.D_._Init.
call(this,0);this.Ee(15);this.BN(true);},_variants:function(){return this;},_this:
null};
C._Init=function(){C.Ba.__proto__=C.Dr;C.D_.__proto__=A.Core.Timer;};C._ReInit=function(
){var B;if((B=C.CC._this))B._ReInit();};C.AX=function(E){var B;if((B=C.CC._this)&&(
B._cycle!=E))B._Done(C.CC._this=null);};return C;})();

/* Embedded Wizard */