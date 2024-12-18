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
);if(EmWiApp.abk)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
abk=(function(){var B=EmWiApp;var C={};

C.Gi={timer:null,HD:0,EG:0,FQ:0.001,Cl:0,AC:0,AS:0,CB:1000,CD:false,Cc:function(AO
){if(!this.timer)return;if(!this.EG){this.EG=1;this.HD=this.EG;this.AS=this.timer.
Ad;this.AC=0;this.Cl=-1;}var CN;if((this.EG>0)&&(this.HD>0))CN=this.KK();else if((
this.EG<0)&&(this.HD<0))CN=this.KN();else if(this.EG>0)CN=this.KL();else CN=this.
KM();if(CN)this.Cf(false);},G3:function(Ke){this.HY(Ke);},KN:function(){var S=(this.
timer.Ad-this.AS)|0;if(S<0)S=-S;var Dg=this.CB;var AG=this.CB;var AR=this.Cl;if(
!this.AC&&(S>=Dg)){this.AC=1;S=S-Dg;this.AS=this.AS+Dg;}if((this.AC>0)&&(S>=AG)){
var AV=(S/AG)|0;this.AC=this.AC+AV;S=S-(AV*AG);this.AS=this.AS+(AV*AG);}if(this.
AC>2)this.AC=1;if(S>=0)AR=1-(S*this.FQ);else if(AR>=0)AR=0;if(AR!==this.Cl){this.
Cl=AR;this.G3(AR);}return false;},KM:function(){var S=(this.AS-this.timer.Ad)|0;
var AG=this.CB;var CN=false;var AR=this.Cl;if((this.AC>1)&&(S<0)){var AV=(((-S+AG
)-1)/AG)|0;if((this.AC-AV)<=0)AV=this.AC-1;this.AC=this.AC-AV;S=S+(AV*AG);this.AS=
this.AS+(AV*AG);}if((this.AC===1)&&(S<0)){var AV=(((-S+AG)-1)/AG)|0;S=S+(AV*AG);
this.AS=this.AS+(AV*AG);}if(S<0){CN=true;AR=1;}else if(S>=0)AR=1-(S*this.FQ);else
if(AR>=0)AR=1;if(AR!==this.Cl){this.Cl=AR;this.G3(AR);}return CN;},KL:function(){
var S=(this.AS-this.timer.Ad)|0;var AG=this.CB;var CN=false;var AR=this.Cl;if((this.
AC>1)&&(S<0)){var AV=(((-S+AG)-1)/AG)|0;if((this.AC-AV)<=0)AV=this.AC-1;this.AC=
this.AC-AV;S=S+(AV*AG);this.AS=this.AS+(AV*AG);}if((this.AC===1)&&(S<0)){var AV=(((-
S+AG)-1)/AG)|0;S=S+(AV*AG);this.AS=this.AS+(AV*AG);}if(S<0){CN=true;AR=0;}else if(
S>=0)AR=S*this.FQ;else if(AR>=0)AR=0;if(AR!==this.Cl){this.Cl=AR;this.G3(AR);}return CN;
},KK:function(){var S=(this.timer.Ad-this.AS)|0;if(S<0)S=-S;var Dg=this.CB;var AG=
this.CB;var AR=this.Cl;if(!this.AC&&(S>=Dg)){this.AC=1;S=S-Dg;this.AS=this.AS+Dg;
}if((this.AC>0)&&(S>=AG)){var AV=(S/AG)|0;this.AC=this.AC+AV;S=S-(AV*AG);this.AS=
this.AS+(AV*AG);}if(this.AC>2)this.AC=1;if(S>=0)AR=S*this.FQ;else if(AR>=0)AR=1;
if(AR!==this.Cl){this.Cl=AR;this.G3(AR);}return false;},Hh:function(D){if(D<15)D=
15;this.CB=D;this.FQ=1/D;},Cf:function(D){if(this.CD===D)return;this.CD=D;if(!D&&
!!this.timer){B.zl([this,this.Cc],this.timer,0);this.timer=null;}if(D){this.timer=
B._GetAutoObject(C.D9);B.y_([this,this.Cc],this.timer,0);this.EG=0;B.ow([this,this.
Cc],this);}},HY:function(In){},_Init:function(aArg){this.__proto__=C.Gi;B.hJ++;}
,_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
E){var A;if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.X)&&(A.
_cycle!=E))A._Mark(A._cycle=E);},X:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.Cq={C1:null,Ie:0,Ft:255,HY:function(In){var Bm;this.Ie=Math.round(this.Ft*In
)|0;if(!!this.C1)(Bm=this.C1,Bm[2].call(Bm[0],this.Ie));},_Init:function(aArg){C.
Gi._Init.call(this,aArg);this.__proto__=C.Cq;},_Mark:function(E){var A;C.Gi._Mark.
call(this,E);if((A=this.C1)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:
"Effects::Int32Effect"};C.HZ={timer:null,C1:null,AC:0,AS:0,CB:1000,Ha:1000,CD:false
,If:false,Ft:true,Cc:function(AO){var Bm;if(!this.timer)return;if(this.AC<0){this.
AS=this.timer.Ad;this.AC=0;}var S=(this.timer.Ad-this.AS)|0;var Dg=this.CB;var AG=
this.Ha+this.CB;var HC=0;var BW=this.AC;if(!BW&&(S>=Dg)){BW=1;S=S-Dg;}if((BW>0)&&(
S>=AG)){var AV=(S/AG)|0;S=S-(AV*AG);BW=BW+AV;}if(BW>2)BW=1;if(BW!==this.AC){this.
AS=this.timer.Ad-(((A=S)<0)?A+0x100000000:A);this.AC=BW;}if(BW>0)HC=this.Ha;if(!
!this.C1){if(S>=HC)(Bm=this.C1,Bm[2].call(Bm[0],this.If));if((S<HC)&&(BW>0))(Bm=
this.C1,Bm[2].call(Bm[0],this.Ft));}},Hh:function(D){if(D<100)D=100;this.CB=D;},
Jx:function(D){if(D<0)D=0;this.Ha=D;},Cf:function(D){if(this.CD===D)return;this.
CD=D;if(!D&&!!this.timer){B.zl([this,this.Cc],this.timer,0);this.timer=null;}if(
D){this.timer=B._GetAutoObject(C.D9);B.y_([this,this.Cc],this.timer,0);this.AC=-
1;}},_Init:function(aArg){this.__proto__=C.HZ;B.hJ++;},_Done:function(){this.__proto__=
null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.timer)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.C1)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=
E);if((A=this.X)&&(A._cycle!=E))A._Mark(A._cycle=E);},X:null,_cycle:0,_observers:
null,_className:"Effects::BoolEffect"};C.G_={Trigger:function(){B.Core.Timer.Trigger.
call(this);B.vv(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this,aArg
);this.__proto__=C.G_;},_className:"Effects::EffectTimerClass"};C.D9={_Init:function(
){C.G_._Init.call(this,0);this.Hj(15);this.Cf(true);},_variants:function(){return this;
},_this:null};
C._Init=function(){C.Cq.__proto__=C.Gi;C.G_.__proto__=B.Core.Timer;};C._ReInit=function(
){var A;if((A=C.D9._this))A._ReInit();};C.BM=function(E){var A;if((A=C.D9._this)&&(
A._cycle!=E))A._Done(C.D9._this=null);};return C;})();

/* Embedded Wizard */