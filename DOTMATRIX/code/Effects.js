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
C.K8={timer:null,Nf:null,N7:0,Ia:0,KB:0.001,D2:0,AX:0,A9:0,Et:0,DM:1000,A$:false,
CN:function(M){var A;if(!this.timer)return;if(!this.Ia){this.Ia=1;this.N7=this.Ia;
this.A9=this.timer.Au;this.AX=0;this.D2=-1;}var C9;if((this.Ia>0)&&(this.N7>0))C9=
this.U7();else if((this.Ia<0)&&(this.N7<0))C9=this.U_();else if(this.Ia>0)C9=this.
U8();else C9=this.U9();if(C9){this.AB(false);(A=this.Nf)?A[1].call(A[0],this):null;
}},Mm:function(T9){this.OH(T9);},U_:function(){var Ad=(this.timer.Au-this.A9)|0;
if(Ad<0)Ad=-Ad;var Dq=this.DM;var Bn=this.DM;var C9=false;var Bk=this.D2;if(!this.
AX&&(Ad>=Dq)){this.AX=1;Ad=Ad-Dq;this.A9=this.A9+Dq;}if((this.AX>0)&&(Ad>=Bn)){var
BF=(Ad/Bn)|0;this.AX=this.AX+BF;Ad=Ad-(BF*Bn);this.A9=this.A9+(BF*Bn);}if((this.
AX>2)&&!this.Et)this.AX=1;if((this.AX>=this.Et)&&(this.Et>0)){C9=true;Bk=0;}else
if(Ad>=0)Bk=1-(Ad*this.KB);else if(Bk>=0)Bk=0;if(Bk!==this.D2){this.D2=Bk;this.Mm(
Bk);}return C9;},U9:function(){var Ad=(this.A9-this.timer.Au)|0;var Dq=this.DM;var
Bn=this.DM;var C9=false;var Bk=this.D2;if((this.AX>1)&&(Ad<0)){var BF=(((-Ad+Bn)-
1)/Bn)|0;if((this.AX-BF)<=0)BF=this.AX-1;this.AX=this.AX-BF;Ad=Ad+(BF*Bn);this.A9=
this.A9+(BF*Bn);}if(((this.AX===1)&&(Ad<0))&&(this.Et>0)){this.AX=0;Ad=Ad+Dq;this.
A9=this.A9+Dq;}if(((this.AX===1)&&(Ad<0))&&!this.Et){var BF=(((-Ad+Bn)-1)/Bn)|0;
Ad=Ad+(BF*Bn);this.A9=this.A9+(BF*Bn);}if(Ad<0){C9=true;Bk=1;}else if(Ad>=0)Bk=1-(
Ad*this.KB);else if(Bk>=0)Bk=1;if(Bk!==this.D2){this.D2=Bk;this.Mm(Bk);}return C9;
},U8:function(){var Ad=(this.A9-this.timer.Au)|0;var Dq=this.DM;var Bn=this.DM;var
C9=false;var Bk=this.D2;if((this.AX>1)&&(Ad<0)){var BF=(((-Ad+Bn)-1)/Bn)|0;if((this.
AX-BF)<=0)BF=this.AX-1;this.AX=this.AX-BF;Ad=Ad+(BF*Bn);this.A9=this.A9+(BF*Bn);
}if(((this.AX===1)&&(Ad<0))&&(this.Et>0)){this.AX=0;Ad=Ad+Dq;this.A9=this.A9+Dq;
}if(((this.AX===1)&&(Ad<0))&&!this.Et){var BF=(((-Ad+Bn)-1)/Bn)|0;Ad=Ad+(BF*Bn);
this.A9=this.A9+(BF*Bn);}if(Ad<0){C9=true;Bk=0;}else if(Ad>=0)Bk=Ad*this.KB;else
if(Bk>=0)Bk=0;if(Bk!==this.D2){this.D2=Bk;this.Mm(Bk);}return C9;},U7:function(){
var Ad=(this.timer.Au-this.A9)|0;if(Ad<0)Ad=-Ad;var Dq=this.DM;var Bn=this.DM;var
C9=false;var Bk=this.D2;if(!this.AX&&(Ad>=Dq)){this.AX=1;Ad=Ad-Dq;this.A9=this.A9+
Dq;}if((this.AX>0)&&(Ad>=Bn)){var BF=(Ad/Bn)|0;this.AX=this.AX+BF;Ad=Ad-(BF*Bn);
this.A9=this.A9+(BF*Bn);}if((this.AX>2)&&!this.Et)this.AX=1;if((this.AX>=this.Et
)&&(this.Et>0)){C9=true;Bk=1;}else if(Ad>=0)Bk=Ad*this.KB;else if(Bk>=0)Bk=1;if(
Bk!==this.D2){this.D2=Bk;this.Mm(Bk);}return C9;},Sf:function(E){if(E<0)E=0;this.
Et=E;},Nr:function(E){if(E<15)E=15;this.DM=E;this.KB=1/E;},AB:function(E){if(this.
A$===E)return;this.A$=E;if(!E&&!!this.timer){B.zl([this,this.CN],this.timer,0);this.
timer=null;}if(E){this.timer=B._GetAutoObject(C.GB);B.y_([this,this.CN],this.timer
,0);this.Ia=0;B.ow([this,this.CN],this);}},OH:function(PT){},_Init:function(aArg
){this.__proto__=C.K8;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Nf)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(
A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.DC={CQ:null,IY:0,Kb:255,OH:function(PT){var As;this.IY=Math.round(this.Kb*PT
)|0;if(!!this.CQ)(As=this.CQ,As[2].call(As[0],this.IY));},_Init:function(aArg){C.
K8._Init.call(this,aArg);this.__proto__=C.DC;},_Mark:function(D){var A;C.K8._Mark.
call(this,D);if((A=this.CQ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Effects::Int32Effect"};C.OJ={timer:null,CQ:null,AX:0,A9:0,DM:1000,MP:1000,A$:false
,PA:false,Kb:true,CN:function(M){var As;if(!this.timer)return;if(this.AX<0){this.
A9=this.timer.Au;this.AX=0;}var Ad=(this.timer.Au-this.A9)|0;var Dq=this.DM;var Bn=
this.MP+this.DM;var N5=0;var EN=this.AX;if(!EN&&(Ad>=Dq)){EN=1;Ad=Ad-Dq;}if((EN>
0)&&(Ad>=Bn)){var BF=(Ad/Bn)|0;Ad=Ad-(BF*Bn);EN=EN+BF;}if(EN>2)EN=1;if(EN!==this.
AX){this.A9=this.timer.Au-(((A=Ad)<0)?A+0x100000000:A);this.AX=EN;}if(EN>0)N5=this.
MP;if(!!this.CQ){if(Ad>=N5)(As=this.CQ,As[2].call(As[0],this.PA));if((Ad<N5)&&(EN>
0))(As=this.CQ,As[2].call(As[0],this.Kb));}},Nr:function(E){if(E<100)E=100;this.
DM=E;},RX:function(E){if(E<0)E=0;this.MP=E;},AB:function(E){if(this.A$===E)return;
this.A$=E;if(!E&&!!this.timer){B.zl([this,this.CN],this.timer,0);this.timer=null;
}if(E){this.timer=B._GetAutoObject(C.GB);B.y_([this,this.CN],this.timer,0);this.
AX=-1;}},_Init:function(aArg){this.__proto__=C.OJ;B.hJ++;},_Done:function(){this.
__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.CQ)&&((A=A[0])._cycle!=D))A.
_Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:
0,_observers:null,_className:"Effects::BoolEffect"};C.MM={CU:null,Am:null,Aa:null
,H:null,R:null,Mb:null,On:null,Np:null,Ed:true,A$:true,Pz:true,OG:false,OI:true,
NC:true,NB:true,Gu:function(){if(!!this.CU)this.CU.Gu();},O5:function(){return true;
},Pa:function(){},Ix:function(){this.Gu();},_Init:function(aArg){this.__proto__=
C.MM;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.CU)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Am)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Aa)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.R)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Mb)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.On)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Np)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=
D);},G:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.IZ={Ps:B.vw,
P1:false,O5:function(){return this.P1;},Pa:function(){if(!this.Ed&&!!this.R.H)this.
R.AC(false);if((!this.Ed&&this.NB)&&!!this.R.H)this.R.H.Ho(this.R);if(!this.A$)this.
R.AB(false);},Ix:function(){if(this.A$)this.R.AB(true);if((this.Ed||this.OG)&&!this.
R.H){this.R.AC(false);this.H.N(this.R,0);}if(this.Ed&&this.NC)this.R.H.J8(this.R
);if(this.Ed&&this.OI)this.R.H.Ea(this.R);if(this.Ed&&!this.Pz)this.R.L(B.aaM(this.
R.O,this.Ps));if(this.Ed){this.R.J3(255);this.R.AC(true);}if(!this.Ed&&(this.H.CZ===
this.R))this.H.Ea(null);this.P1=true;this.Gu();},_Init:function(aArg){C.MM._Init.
call(this,aArg);this.__proto__=C.IZ;},_className:"Effects::VisibilityFader"};C.Ly={
Gx:function(){return null;},Gw:function(){return null;},K7:function(){return this.
Gx();},K6:function(){return this.Gw();},_Init:function(aArg){this.__proto__=C.Ly;
B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:
0,_observers:null,_className:"Effects::Transition"};C.NF={Gx:function(){var An=B.
_NewObject(C.IZ,0);An.Ed=true;An.A$=true;An.OI=false;An.NC=true;An.Pz=false;An.Np=[
this,this.UO];return An;},Gw:function(){var An=B._NewObject(C.IZ,0);An.Ed=false;
An.A$=false;An.NB=true;return An;},K7:function(){var An=C.Ly.K7.call(this);An.NC=
false;An.A$=true;return An;},K6:function(){var An=B._NewObject(C.IZ,0);An.Ed=false;
An.A$=true;An.OG=true;An.NB=false;return An;},UO:function(M){var A;var An=(C.IZ.
isPrototypeOf(M)?M:null);var Ah=[0,0,(A=An.H.O)[2]-A[0],A[3]-A[1]];var B_=[(A=An.
R.O)[2]-A[0],A[3]-A[1]];var pos=Ah.slice(0,2);pos=[(Ah[0]+(((Ah[2]-Ah[0])/2)|0))-((
B_[0]/2)|0),pos[1]];pos=[pos[0],(Ah[1]+(((Ah[3]-Ah[1])/2)|0))-((B_[1]/2)|0)];An.
Ps=pos;},_Init:function(aArg){C.Ly._Init.call(this,aArg);this.__proto__=C.NF;},_className:
"Effects::ShowHideTransition"};C.Mx={Trigger:function(){B.Core.Timer.Trigger.call(
this);B.vv(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this,aArg);this.
__proto__=C.Mx;},_className:"Effects::EffectTimerClass"};C.GB={_Init:function(){
C.Mx._Init.call(this,0);this.Fb(15);this.AB(true);},_variants:function(){return this;
},_this:null};C.K9={Ba:null,AJ:null,O$:function(Ja){var An=this.AJ;while(!!An){An.
Pa();An.R.F=An.R.F&~0x40000;An=An.Aa;}An=this.AJ;while(!!An){B.ow(An.On,An);An=An.
Aa;}},O_:function(Ja){var An=this.AJ;while(!!An){B.ow(An.Mb,An);An=An.Aa;}this.AJ=
null;this.Ba=null;},Ix:function(Ja){var A;if(!this.AJ)this.Gu();var An=this.AJ;while(
!!An){An.R.F=(An.R.F|0x40000)&~0x20000;An.R.H6=null;An=An.Aa;}An=this.AJ;while(!
!An){(A=An.Np)?A[1].call(A[0],An):null;An.Ix();An=An.Aa;}},Gu:function(){var An=
this.AJ;while(!!An&&An.O5())An=An.Aa;if(!An)B.Core.GN.Gu.call(this);},Sp:function(
A6){if(!A6)return;if(this.MQ())throw new Error(A7);if(A6.CU!==this)throw new Error(
AW);if(!!A6.Aa)A6.Aa.Am=A6.Am;else this.Ba=A6.Am;if(!!A6.Am)A6.Am.Aa=A6.Aa;else this.
AJ=A6.Aa;A6.CU=null;A6.Aa=null;A6.Am=null;if(!!A6.R)A6.R.H6=null;B.ow(A6.Mb,A6);
if(!this.AJ)this.OK();},OF:function(A6){if(!A6)return;if(this.MQ())throw new Error(
Dh);if(!!A6.CU)throw new Error(Di);A6.Am=this.Ba;A6.Aa=null;if(!!this.Ba)this.Ba.
Aa=A6;else this.AJ=A6;this.Ba=A6;A6.CU=this;},_Init:function(aArg){B.Core.GN._Init.
call(this,aArg);this.__proto__=C.K9;},_Mark:function(D){var A;B.Core.GN._Mark.call(
this,D);if((A=this.Ba)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AJ)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Effects::FaderTask"};C.J$={_Init:function(
){C.NF._Init.call(this,0);},_variants:function(){return this;},_this:null};
C._Init=function(){C.DC.__proto__=C.K8;C.IZ.__proto__=C.MM;C.NF.__proto__=C.Ly;C.
Mx.__proto__=B.Core.Timer;C.K9.__proto__=B.Core.GN;};C._ReInit=function(){var A;
if((A=C.GB._this))A._ReInit();if((A=C.J$._this))A._ReInit();};C.CH=function(D){var
A;if((A=C.GB._this)&&(A._cycle!=D))A._Done(C.GB._this=null);if((A=C.J$._this)&&(
A._cycle!=D))A._Done(C.J$._this=null);};return C;})();

/* Embedded Wizard */