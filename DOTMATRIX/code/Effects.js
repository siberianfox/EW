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
);if(EmWiApp.abl)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
abl=(function(){var B=EmWiApp;var C={};
var A7="Trying to remove a fader from a task, which is actually running";var AW="The fader doesn\'t belong to this task";
var Dh="Trying to add a fader to a task, which is actually running";var Di="The fader belongs already to a task";
C.K7={timer:null,Nj:null,N$:0,H$:0,KA:0.001,D2:0,AX:0,A9:0,Et:0,DM:1000,A$:false,
CN:function(M){var A;if(!this.timer)return;if(!this.H$){this.H$=1;this.N$=this.H$;
this.A9=this.timer.Au;this.AX=0;this.D2=-1;}var C9;if((this.H$>0)&&(this.N$>0))C9=
this.U$();else if((this.H$<0)&&(this.N$<0))C9=this.Vc();else if(this.H$>0)C9=this.
Va();else C9=this.Vb();if(C9){this.AB(false);(A=this.Nj)?A[1].call(A[0],this):null;
}},Ml:function(Ub){this.OL(Ub);},Vc:function(){var Ad=(this.timer.Au-this.A9)|0;
if(Ad<0)Ad=-Ad;var Dq=this.DM;var Bn=this.DM;var C9=false;var Bk=this.D2;if(!this.
AX&&(Ad>=Dq)){this.AX=1;Ad=Ad-Dq;this.A9=this.A9+Dq;}if((this.AX>0)&&(Ad>=Bn)){var
BF=(Ad/Bn)|0;this.AX=this.AX+BF;Ad=Ad-(BF*Bn);this.A9=this.A9+(BF*Bn);}if((this.
AX>2)&&!this.Et)this.AX=1;if((this.AX>=this.Et)&&(this.Et>0)){C9=true;Bk=0;}else
if(Ad>=0)Bk=1-(Ad*this.KA);else if(Bk>=0)Bk=0;if(Bk!==this.D2){this.D2=Bk;this.Ml(
Bk);}return C9;},Vb:function(){var Ad=(this.A9-this.timer.Au)|0;var Dq=this.DM;var
Bn=this.DM;var C9=false;var Bk=this.D2;if((this.AX>1)&&(Ad<0)){var BF=(((-Ad+Bn)-
1)/Bn)|0;if((this.AX-BF)<=0)BF=this.AX-1;this.AX=this.AX-BF;Ad=Ad+(BF*Bn);this.A9=
this.A9+(BF*Bn);}if(((this.AX===1)&&(Ad<0))&&(this.Et>0)){this.AX=0;Ad=Ad+Dq;this.
A9=this.A9+Dq;}if(((this.AX===1)&&(Ad<0))&&!this.Et){var BF=(((-Ad+Bn)-1)/Bn)|0;
Ad=Ad+(BF*Bn);this.A9=this.A9+(BF*Bn);}if(Ad<0){C9=true;Bk=1;}else if(Ad>=0)Bk=1-(
Ad*this.KA);else if(Bk>=0)Bk=1;if(Bk!==this.D2){this.D2=Bk;this.Ml(Bk);}return C9;
},Va:function(){var Ad=(this.A9-this.timer.Au)|0;var Dq=this.DM;var Bn=this.DM;var
C9=false;var Bk=this.D2;if((this.AX>1)&&(Ad<0)){var BF=(((-Ad+Bn)-1)/Bn)|0;if((this.
AX-BF)<=0)BF=this.AX-1;this.AX=this.AX-BF;Ad=Ad+(BF*Bn);this.A9=this.A9+(BF*Bn);
}if(((this.AX===1)&&(Ad<0))&&(this.Et>0)){this.AX=0;Ad=Ad+Dq;this.A9=this.A9+Dq;
}if(((this.AX===1)&&(Ad<0))&&!this.Et){var BF=(((-Ad+Bn)-1)/Bn)|0;Ad=Ad+(BF*Bn);
this.A9=this.A9+(BF*Bn);}if(Ad<0){C9=true;Bk=0;}else if(Ad>=0)Bk=Ad*this.KA;else
if(Bk>=0)Bk=0;if(Bk!==this.D2){this.D2=Bk;this.Ml(Bk);}return C9;},U$:function(){
var Ad=(this.timer.Au-this.A9)|0;if(Ad<0)Ad=-Ad;var Dq=this.DM;var Bn=this.DM;var
C9=false;var Bk=this.D2;if(!this.AX&&(Ad>=Dq)){this.AX=1;Ad=Ad-Dq;this.A9=this.A9+
Dq;}if((this.AX>0)&&(Ad>=Bn)){var BF=(Ad/Bn)|0;this.AX=this.AX+BF;Ad=Ad-(BF*Bn);
this.A9=this.A9+(BF*Bn);}if((this.AX>2)&&!this.Et)this.AX=1;if((this.AX>=this.Et
)&&(this.Et>0)){C9=true;Bk=1;}else if(Ad>=0)Bk=Ad*this.KA;else if(Bk>=0)Bk=1;if(
Bk!==this.D2){this.D2=Bk;this.Ml(Bk);}return C9;},Sj:function(E){if(E<0)E=0;this.
Et=E;},Nv:function(E){if(E<15)E=15;this.DM=E;this.KA=1/E;},AB:function(E){if(this.
A$===E)return;this.A$=E;if(!E&&!!this.timer){B.zl([this,this.CN],this.timer,0);this.
timer=null;}if(E){this.timer=B._GetAutoObject(C.GB);B.y_([this,this.CN],this.timer
,0);this.H$=0;B.ow([this,this.CN],this);}},OL:function(PX){},_Init:function(aArg
){this.__proto__=C.K7;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Nj)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(
A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.DC={CQ:null,IX:0,Ka:255,OL:function(PX){var As;this.IX=Math.round(this.Ka*PX
)|0;if(!!this.CQ)(As=this.CQ,As[2].call(As[0],this.IX));},_Init:function(aArg){C.
K7._Init.call(this,aArg);this.__proto__=C.DC;},_Mark:function(D){var A;C.K7._Mark.
call(this,D);if((A=this.CQ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Effects::Int32Effect"};C.ON={timer:null,CQ:null,AX:0,A9:0,DM:1000,MT:1000,A$:false
,PE:false,Ka:true,CN:function(M){var As;if(!this.timer)return;if(this.AX<0){this.
A9=this.timer.Au;this.AX=0;}var Ad=(this.timer.Au-this.A9)|0;var Dq=this.DM;var Bn=
this.MT+this.DM;var N9=0;var EN=this.AX;if(!EN&&(Ad>=Dq)){EN=1;Ad=Ad-Dq;}if((EN>
0)&&(Ad>=Bn)){var BF=(Ad/Bn)|0;Ad=Ad-(BF*Bn);EN=EN+BF;}if(EN>2)EN=1;if(EN!==this.
AX){this.A9=this.timer.Au-(((A=Ad)<0)?A+0x100000000:A);this.AX=EN;}if(EN>0)N9=this.
MT;if(!!this.CQ){if(Ad>=N9)(As=this.CQ,As[2].call(As[0],this.PE));if((Ad<N9)&&(EN>
0))(As=this.CQ,As[2].call(As[0],this.Ka));}},Nv:function(E){if(E<100)E=100;this.
DM=E;},R1:function(E){if(E<0)E=0;this.MT=E;},AB:function(E){if(this.A$===E)return;
this.A$=E;if(!E&&!!this.timer){B.zl([this,this.CN],this.timer,0);this.timer=null;
}if(E){this.timer=B._GetAutoObject(C.GB);B.y_([this,this.CN],this.timer,0);this.
AX=-1;}},_Init:function(aArg){this.__proto__=C.ON;B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.CQ)&&((A=A[0])._cycle!=D))A.
_Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:
0,_observers:null,_className:"Effects::BoolEffect"};C.MQ={CU:null,Am:null,Ab:null
,H:null,R:null,Ma:null,Or:null,Nt:null,Ed:true,A$:true,PD:true,OK:false,OM:true,
NG:true,NF:true,Gu:function(){if(!!this.CU)this.CU.Gu();},O9:function(){return true;
},Pe:function(){},Iw:function(){this.Gu();},_Init:function(aArg){this.__proto__=
C.MQ;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.CU)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Am)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ab)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.R)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Ma)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.Or)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Nt)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=
D);},G:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.IY={Pw:B.vw,
P5:false,O9:function(){return this.P5;},Pe:function(){if(!this.Ed&&!!this.R.H)this.
R.AC(false);if((!this.Ed&&this.NF)&&!!this.R.H)this.R.H.Hn(this.R);if(!this.A$)this.
R.AB(false);},Iw:function(){if(this.A$)this.R.AB(true);if((this.Ed||this.OK)&&!this.
R.H){this.R.AC(false);this.H.N(this.R,0);}if(this.Ed&&this.NG)this.R.H.J7(this.R
);if(this.Ed&&this.OM)this.R.H.Ea(this.R);if(this.Ed&&!this.PD)this.R.L(B.aaM(this.
R.O,this.Pw));if(this.Ed){this.R.J2(255);this.R.AC(true);}if(!this.Ed&&(this.H.CZ===
this.R))this.H.Ea(null);this.P5=true;this.Gu();},_Init:function(aArg){C.MQ._Init.
call(this,aArg);this.__proto__=C.IY;},_className:"Effects::VisibilityFader"};C.Lx={
Gx:function(){return null;},Gw:function(){return null;},K6:function(){return this.
Gx();},K5:function(){return this.Gw();},_Init:function(aArg){this.__proto__=C.Lx;
B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:
0,_observers:null,_className:"Effects::Transition"};C.NJ={Gx:function(){var An=B.
_NewObject(C.IY,0);An.Ed=true;An.A$=true;An.OM=false;An.NG=true;An.PD=false;An.Nt=[
this,this.US];return An;},Gw:function(){var An=B._NewObject(C.IY,0);An.Ed=false;
An.A$=false;An.NF=true;return An;},K6:function(){var An=C.Lx.K6.call(this);An.NG=
false;An.A$=true;return An;},K5:function(){var An=B._NewObject(C.IY,0);An.Ed=false;
An.A$=true;An.OK=true;An.NF=false;return An;},US:function(M){var A;var An=(C.IY.
isPrototypeOf(M)?M:null);var Ah=[0,0,(A=An.H.O)[2]-A[0],A[3]-A[1]];var B_=[(A=An.
R.O)[2]-A[0],A[3]-A[1]];var pos=Ah.slice(0,2);pos=[(Ah[0]+(((Ah[2]-Ah[0])/2)|0))-((
B_[0]/2)|0),pos[1]];pos=[pos[0],(Ah[1]+(((Ah[3]-Ah[1])/2)|0))-((B_[1]/2)|0)];An.
Pw=pos;},_Init:function(aArg){C.Lx._Init.call(this,aArg);this.__proto__=C.NJ;},_className:
"Effects::ShowHideTransition"};C.MB={Trigger:function(){B.Core.Timer.Trigger.call(
this);B.vv(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this,aArg);this.
__proto__=C.MB;},_className:"Effects::EffectTimerClass"};C.GB={_Init:function(){
C.MB._Init.call(this,0);this.Fb(15);this.AB(true);},_variants:function(){return this;
},_this:null};C.K8={Ba:null,AJ:null,Pd:function(I$){var An=this.AJ;while(!!An){An.
Pe();An.R.F=An.R.F&~0x40000;An=An.Ab;}An=this.AJ;while(!!An){B.ow(An.Or,An);An=An.
Ab;}},Pc:function(I$){var An=this.AJ;while(!!An){B.ow(An.Ma,An);An=An.Ab;}this.AJ=
null;this.Ba=null;},Iw:function(I$){var A;if(!this.AJ)this.Gu();var An=this.AJ;while(
!!An){An.R.F=(An.R.F|0x40000)&~0x20000;An.R.H5=null;An=An.Ab;}An=this.AJ;while(!
!An){(A=An.Nt)?A[1].call(A[0],An):null;An.Iw();An=An.Ab;}},Gu:function(){var An=
this.AJ;while(!!An&&An.O9())An=An.Ab;if(!An)B.Core.GN.Gu.call(this);},St:function(
A6){if(!A6)return;if(this.MU())throw new Error(A7);if(A6.CU!==this)throw new Error(
AW);if(!!A6.Ab)A6.Ab.Am=A6.Am;else this.Ba=A6.Am;if(!!A6.Am)A6.Am.Ab=A6.Ab;else this.
AJ=A6.Ab;A6.CU=null;A6.Ab=null;A6.Am=null;if(!!A6.R)A6.R.H5=null;B.ow(A6.Ma,A6);
if(!this.AJ)this.OO();},OJ:function(A6){if(!A6)return;if(this.MU())throw new Error(
Dh);if(!!A6.CU)throw new Error(Di);A6.Am=this.Ba;A6.Ab=null;if(!!this.Ba)this.Ba.
Ab=A6;else this.AJ=A6;this.Ba=A6;A6.CU=this;},_Init:function(aArg){B.Core.GN._Init.
call(this,aArg);this.__proto__=C.K8;},_Mark:function(D){var A;B.Core.GN._Mark.call(
this,D);if((A=this.Ba)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AJ)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Effects::FaderTask"};C.J_={_Init:function(
){C.NJ._Init.call(this,0);},_variants:function(){return this;},_this:null};
C._Init=function(){C.DC.__proto__=C.K7;C.IY.__proto__=C.MQ;C.NJ.__proto__=C.Lx;C.
MB.__proto__=B.Core.Timer;C.K8.__proto__=B.Core.GN;};C._ReInit=function(){var A;
if((A=C.GB._this))A._ReInit();if((A=C.J_._this))A._ReInit();};C.CH=function(D){var
A;if((A=C.GB._this)&&(A._cycle!=D))A._Done(C.GB._this=null);if((A=C.J_._this)&&(
A._cycle!=D))A._Done(C.J_._this=null);};return C;})();

/* Embedded Wizard */