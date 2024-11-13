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
);if(EmWiApp.Application)throw new Error("The unit file 'Application.js' included twice!"
);EmWiApp.Application=(function(){var B=EmWiApp;var C={};
var AD="left";var A0="right";var AT=[0,0,240,240];var DG=[83,203,158,217];var DV=[
1,0,241,240];
C.IF={K_:null,Ab:null,Dh:null,Cp:null,Timer:null,BI:null,CT:null,FP:null,EP:null,
Index:2,Bd:function(aArg){this.I$(B._NewObject(B.abj.Jg,0),null,null,null,null,null
,null,null,null,false);this.Cp.Fm(B._NewObject(B.abj.HH,0));this.CT.FW(2);},Left:
function(An){this.KM(this.Index+1);B.aa8("%s",AD);},Right:function(An){this.KM(this.
Index-1);B.aa8("%s",A0);},KM:function(E){if(this.Index===E)return;if(E>3)E=3;if(
E<0)E=0;this.Index=E;switch(E){case 0:{this.Cp.Fm(B._NewObject(B.abj.IL,0));this.
CT.FW(0);}break;case 1:{this.Cp.Fm(B._NewObject(B.abj.HW,0));this.CT.FW(1);}break;
case 2:{this.Cp.Fm(B._NewObject(B.abj.HH,0));this.CT.FW(2);}break;case 3:{this.Cp.
Fm(B._NewObject(B.abj.Je,0));this.CT.FW(3);}break;default:;}},Mv:function(An){var
A_;(A_=B._GetAutoObject(C.Device),A_.GP(A_.EA-1));},Ir:function(An){if(B._GetAutoObject(
C.Device).F_){if(this.Timer.BH===false)this.Timer.BK(true);}else this.Timer.BK(false
);},NK:function(An){if(!B._GetAutoObject(C.Device).GH)this.EP.Fm(B._NewObject(B.
abj.IQ,0));else{this.EP.Fm(null);B._GetAutoObject(C.Device).FX(false);}},_Init:function(
aArg){B.Core.Root._Init.call(this,aArg);B.abg.Ab._Init.call(this.Ab={Q:this},0);
B.Core.Dh._Init.call(this.Dh={Q:this},0);C.Cp._Init.call(this.Cp={Q:this},0);B.Core.
Timer._Init.call(this.Timer={Q:this},0);B.Core.BI._Init.call(this.BI={Q:this},0);
B.abj.CT._Init.call(this.CT={Q:this},0);B.Core.BI._Init.call(this.FP={Q:this},0);
C.Cp._Init.call(this.EP={Q:this},0);this.__proto__=C.IF;var A;this.Z(AT);this.Ab.
Z(AT);this.Ab.Ao(0xFF000000);this.Dh.Z(AT);this.Dh.BN=0x3;this.Cp.Z(AT);this.Cp.
L6(true);this.CT.Z(DG);this.EP.Z(DV);this.At(this.Ab,0);this.At(this.Dh,0);this.
At(this.Cp,0);this.At(this.CT,0);this.At(this.EP,0);this.Dh.I4=[this,this.Right];
this.Dh.I3=[this,this.Left];this.K_=B._GetAutoObject(C.Device);this.Timer.Fn=[this
,this.Mv];this.BI.Eb=[this,this.Ir];this.BI.EV([A=B._GetAutoObject(C.Device),A.I0
,A.FX]);this.FP.Eb=[this,this.NK];this.FP.EV([A=B._GetAutoObject(C.Device),A.KE,
A.KN]);this.Bd(aArg);},_Done:function(){this.__proto__=B.Core.Root;this.Ab._Done(
);this.Dh._Done();this.Cp._Done();this.Timer._Done();this.BI._Done();this.CT._Done(
);this.FP._Done();this.EP._Done();B.Core.Root._Done.call(this);},_ReInit:function(
){B.Core.Root._ReInit.call(this);this.Ab._ReInit();this.Dh._ReInit();this.Cp._ReInit(
);this.Timer._ReInit();this.BI._ReInit();this.CT._ReInit();this.FP._ReInit();this.
EP._ReInit();},_Mark:function(D){var A;B.Core.Root._Mark.call(this,D);if((A=this.
K_)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ab)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.Dh)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Cp)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.Timer)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BI)._cycle
!=D)A._Mark(A._cycle=D);if((A=this.CT)._cycle!=D)A._Mark(A._cycle=D);if((A=this.
FP)._cycle!=D)A._Mark(A._cycle=D);if((A=this.EP)._cycle!=D)A._Mark(A._cycle=D);}
,_className:"Application::Application"};C.Cp={H0:null,Fm:function(E){if(this.H0===
E)return;if(!E)this.IH(this.H0,null,null,null,null,null,false);this.H0=E;if(!!E)
this.Jh(E,null,null,null,null,null,null,null,null,null,false);},_Init:function(aArg
){B.Core.K._Init.call(this,aArg);this.__proto__=C.Cp;this.Z(AT);},_Mark:function(
D){var A;B.Core.K._Mark.call(this,D);if((A=this.H0)&&(A._cycle!=D))A._Mark(A._cycle=
D);},_className:"Application::Container"};C.Ff={GT:0,GL:25,Gy:0,Gg:2000,EA:300,Ga:
60,G1:0,GH:true,F_:false,F$:1,UpdatePIR:function(C8){if(C8!==this.GT){this.GT=C8;
B.aat([this,this.L4,this.Mj],0);}},KF:function(){return this.F$;},HT:function(E){
if(this.F$===E)return;if(E>6)E=6;if(E<0)E=0;this.F$=E;B.aat([this,this.KF,this.HT
],0);},I0:function(){return this.F_;},FX:function(E){if(this.F_===E)return;this.
F_=E;B.aat([this,this.I0,this.FX],0);},UpdateMotorTemp:function(C8){if(C8!==this.
GL){this.GL=C8;B.aat([this,this.L3,this.Mh],0);}},UpdateActualSpeed:function(C8){
if(C8!==this.Gy){this.Gy=C8;B.aat([this,this.L1,this.L5],0);}},UpdateWeightValue:
function(C8){if(C8!==this.Gg){this.Gg=C8;B.aat([this,this.KJ,this.KS],0);}},KI:function(
){return this.G1;},HV:function(E){if(this.G1===E)return;this.G1=E;B.aat([this,this.
KI,this.HV],0);},KH:function(){return this.EA;},GP:function(E){if(this.EA===E)return;
this.EA=E;B.aat([this,this.KH,this.GP],0);},KG:function(){return this.Ga;},HU:function(
E){if(this.Ga===E)return;this.Ga=E;B.aat([this,this.KG,this.HU],0);},UpdateInterlock:
function(C8){if(C8!==this.GH){this.GH=C8;B.aat([this,this.KE,this.KN],0);}},L4:function(
){return this.GT;},Mj:function(E){this.GT=E;},L3:function(){return this.GL;},Mh:
function(E){this.GL=E;},L1:function(){return this.Gy;},L5:function(E){this.Gy=E;
},KJ:function(){return this.Gg;},KS:function(E){this.Gg=E;},KE:function(){return this.
GH;},KN:function(E){this.GH=E;},_Init:function(aArg){B.abm.Ff._Init.call(this,aArg
);this.__proto__=C.Ff;},_className:"Application::DeviceClass"};C.Device={_Init:function(
){C.Ff._Init.call(this,0);},_variants:function(){return this;},_this:null};
C._Init=function(){C.IF.__proto__=B.Core.Root;C.Cp.__proto__=B.Core.K;C.Ff.__proto__=
B.abm.Ff;};C._ReInit=function(){var A;if((A=C.Device._this))A._ReInit();};C.Bs=function(
D){var A;if((A=C.Device._this)&&(A._cycle!=D))A._Done(C.Device._this=null);};return C;
})();

/* Embedded Wizard */