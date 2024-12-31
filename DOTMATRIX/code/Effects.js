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
var A9="Trying to remove a fader from a task, which is actually running";var Bc="The fader doesn\'t belong to this task";
var DK="Trying to add a fader to a task, which is actually running";var DL="The fader belongs already to a task";
C.MB={timer:null,IO:null,QE:0,JL:0,L2:0.001,EL:0,A2:0,Bi:0,DI:0,Em:1000,G$:0,Bo:false
,De:function(M){var A;if(!this.timer)return;if(!this.JL){this.JL=1;this.QE=this.
JL;this.Bi=this.timer.AF;this.A2=0;this.EL=-1;}var CL;if((this.JL>0)&&(this.QE>0
))CL=this.Aam();else if((this.JL<0)&&(this.QE<0))CL=this.Aap();else if(this.JL>0
)CL=this.Aan();else CL=this.Aao();if(CL){this.Ar(false);(A=this.IO)?A[1].call(A[
0],this):null;}},Of:function(Y5){this.Rm(Y5);},Aap:function(){var Am=(this.timer.
AF-this.Bi)|0;if(Am<0)Am=-Am;var Db=this.G$;var DV=this.G$+this.Em;var BF=this.Em;
var CL=false;var BC=this.EL;if(!this.A2&&(Am>=DV)){this.A2=1;Am=Am-DV;this.Bi=this.
Bi+DV;}if((this.A2>0)&&(Am>=BF)){var BW=(Am/BF)|0;this.A2=this.A2+BW;Am=Am-(BW*BF
);this.Bi=this.Bi+(BW*BF);}if((this.A2>2)&&!this.DI)this.A2=1;if(this.A2>0)Db=0;
if((this.A2>=this.DI)&&(this.DI>0)){CL=true;BC=0;}else if(Am>=Db)BC=1-((Am-Db)*this.
L2);else if(BC>=0)BC=0;if(BC!==this.EL){this.EL=BC;this.Of(BC);}return CL;},Aao:
function(){var Am=(this.Bi-this.timer.AF)|0;var Db=this.G$;var DV=this.G$+this.Em;
var BF=this.Em;var CL=false;var BC=this.EL;if((this.A2>1)&&(Am<0)){var BW=(((-Am+
BF)-1)/BF)|0;if((this.A2-BW)<=0)BW=this.A2-1;this.A2=this.A2-BW;Am=Am+(BW*BF);this.
Bi=this.Bi+(BW*BF);}if(((this.A2===1)&&(Am<0))&&(this.DI>0)){this.A2=0;Am=Am+DV;
this.Bi=this.Bi+DV;}if(((this.A2===1)&&(Am<0))&&!this.DI){var BW=(((-Am+BF)-1)/BF
)|0;Am=Am+(BW*BF);this.Bi=this.Bi+(BW*BF);}if(this.A2>0)Db=0;if(Am<0){CL=true;BC=
1;}else if(Am>=Db)BC=1-((Am-Db)*this.L2);else if(BC>=0)BC=1;if(BC!==this.EL){this.
EL=BC;this.Of(BC);}return CL;},Aan:function(){var Am=(this.Bi-this.timer.AF)|0;var
Db=this.G$;var DV=this.G$+this.Em;var BF=this.Em;var CL=false;var BC=this.EL;if((
this.A2>1)&&(Am<0)){var BW=(((-Am+BF)-1)/BF)|0;if((this.A2-BW)<=0)BW=this.A2-1;this.
A2=this.A2-BW;Am=Am+(BW*BF);this.Bi=this.Bi+(BW*BF);}if(((this.A2===1)&&(Am<0))&&(
this.DI>0)){this.A2=0;Am=Am+DV;this.Bi=this.Bi+DV;}if(((this.A2===1)&&(Am<0))&&!
this.DI){var BW=(((-Am+BF)-1)/BF)|0;Am=Am+(BW*BF);this.Bi=this.Bi+(BW*BF);}if(this.
A2>0)Db=0;if(Am<0){CL=true;BC=0;}else if(Am>=Db)BC=(Am-Db)*this.L2;else if(BC>=0
)BC=0;if(BC!==this.EL){this.EL=BC;this.Of(BC);}return CL;},Aam:function(){var Am=(
this.timer.AF-this.Bi)|0;if(Am<0)Am=-Am;var Db=this.G$;var DV=this.G$+this.Em;var
BF=this.Em;var CL=false;var BC=this.EL;if(!this.A2&&(Am>=DV)){this.A2=1;Am=Am-DV;
this.Bi=this.Bi+DV;}if((this.A2>0)&&(Am>=BF)){var BW=(Am/BF)|0;this.A2=this.A2+BW;
Am=Am-(BW*BF);this.Bi=this.Bi+(BW*BF);}if((this.A2>2)&&!this.DI)this.A2=1;if(this.
A2>0)Db=0;if((this.A2>=this.DI)&&(this.DI>0)){CL=true;BC=1;}else if(Am>=Db)BC=(Am-
Db)*this.L2;else if(BC>=0)BC=1;if(BC!==this.EL){this.EL=BC;this.Of(BC);}return CL;
},PK:function(E){if(E<0)E=0;this.DI=E;},Ll:function(E){if(E<15)E=15;this.Em=E;this.
L2=1/E;},Vd:function(E){if(E<0)E=0;this.G$=E;},Ar:function(E){if(this.Bo===E)return;
this.Bo=E;if(!E&&!!this.timer){B.zl([this,this.De],this.timer,0);this.timer=null;
}if(E){this.timer=B._GetAutoObject(C.HZ);B.y_([this,this.De],this.timer,0);this.
JL=0;B.ow([this,this.De],this);}},Rm:function(SO){},_Init:function(aArg){this.__proto__=
C.MB;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.IO)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D
))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.B9={CT:null,Ke:0,Kf:255,Rm:function(SO){var Ag;this.Ke=Math.round(this.Kf*SO
)|0;if(!!this.CT)(Ag=this.CT,Ag[2].call(Ag[0],this.Ke));},_Init:function(aArg){C.
MB._Init.call(this,aArg);this.__proto__=C.B9;},_Mark:function(D){var A;C.MB._Mark.
call(this,D);if((A=this.CT)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Effects::Int32Effect"};C.DX={timer:null,IO:null,CT:null,A2:0,Bi:0,DI:0,Em:1000,
OY:1000,Bo:false,R9:false,Kf:true,De:function(M){var A;var Ag;if(!this.timer)return;
if(this.A2<0){this.Bi=this.timer.AF;this.A2=0;}var Am=(this.timer.AF-this.Bi)|0;
var DV=this.Em;var BF=this.OY+this.Em;var Db=0;var Fc=this.A2;if(!Fc&&(Am>=DV)){
Fc=1;Am=Am-DV;}if((Fc>0)&&(Am>=BF)){var BW=(Am/BF)|0;Am=Am-(BW*BF);Fc=Fc+BW;}if((
Fc>2)&&!this.DI)Fc=1;if(Fc!==this.A2){this.Bi=this.timer.AF-(((A=Am)<0)?A+0x100000000:
A);this.A2=Fc;}if(Fc>0)Db=this.OY;var CL=(Fc>=this.DI)&&(this.DI>0);if(!!this.CT
){if(!CL&&(Am>=Db))(Ag=this.CT,Ag[2].call(Ag[0],this.R9));if(CL||((Am<Db)&&(Fc>0
)))(Ag=this.CT,Ag[2].call(Ag[0],this.Kf));}if(CL){this.Ar(false);(A=this.IO)?A[1
].call(A[0],this):null;}},PK:function(E){if(E<0)E=0;this.DI=E;},Ll:function(E){if(
E<100)E=100;this.Em=E;},Ve:function(E){if(E<0)E=0;this.OY=E;},Ar:function(E){if(
this.Bo===E)return;this.Bo=E;if(!E&&!!this.timer){B.zl([this,this.De],this.timer
,0);this.timer=null;}if(E){this.timer=B._GetAutoObject(C.HZ);B.y_([this,this.De]
,this.timer,0);this.A2=-1;}},VI:function(M){this.Ar(false);},R4:function(M){if(this.
Bo)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=C.DX;B.hJ++;
},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.IO)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CT)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Effects::BoolEffect"};C.OT={Dj:null,Au:null,Aj:null,L:null,O:null
,N4:null,QY:null,PD:null,E8:true,Bo:true,R8:true,Rl:false,Rn:true,PX:true,PV:true
,HT:function(){if(!!this.Dj)this.Dj.HT();},RK:function(){return true;},RR:function(
){},J7:function(){this.HT();},_Init:function(aArg){this.__proto__=C.OT;B.hJ++;},
_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.Dj)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Au)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Aj)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.L)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.N4)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
QY)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.PD)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null
,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Kg={R1:B.vw,SW:false,RK:
function(){return this.SW;},RR:function(){if(!this.E8&&!!this.O.L)this.O.U(false
);if((!this.E8&&this.PV)&&!!this.O.L)this.O.L.H7(this.O);if(!this.Bo)this.O.Ar(false
);},J7:function(){if(this.Bo)this.O.Ar(true);if((this.E8||this.Rl)&&!this.O.L){this.
O.U(false);this.L.K(this.O,0);}if(this.E8&&this.PX)this.O.L.Lz(this.O);if(this.E8&&
this.Rn)this.O.L.Dg(this.O);if(this.E8&&!this.R8)this.O.H(B.aaM(this.O.R,this.R1
));if(this.E8){this.O.Ls(255);this.O.U(true);}if(!this.E8&&(this.L.Dq===this.O))
this.L.Dg(null);this.SW=true;this.HT();},_Init:function(aArg){C.OT._Init.call(this
,aArg);this.__proto__=C.Kg;},_className:"Effects::VisibilityFader"};C.Nf={HW:function(
){return null;},HV:function(){return null;},Mz:function(){return this.HW();},My:
function(){return this.HV();},_Init:function(aArg){this.__proto__=C.Nf;B.hJ++;},
_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Effects::Transition"};C.P0={HW:function(){var Aw=B._NewObject(C.
Kg,0);Aw.E8=true;Aw.Bo=true;Aw.Rn=false;Aw.PX=true;Aw.R8=false;Aw.PD=[this,this.
ZY];return Aw;},HV:function(){var Aw=B._NewObject(C.Kg,0);Aw.E8=false;Aw.Bo=false;
Aw.PV=true;return Aw;},Mz:function(){var Aw=C.Nf.Mz.call(this);Aw.PX=false;Aw.Bo=
true;return Aw;},My:function(){var Aw=B._NewObject(C.Kg,0);Aw.E8=false;Aw.Bo=true;
Aw.Rl=true;Aw.PV=false;return Aw;},ZY:function(M){var A;var Aw=(C.Kg.isPrototypeOf(
M)?M:null);var Ap=[0,0,(A=Aw.L.R)[2]-A[0],A[3]-A[1]];var Ct=[(A=Aw.O.R)[2]-A[0],
A[3]-A[1]];var pos=Ap.slice(0,2);pos=[(Ap[0]+(((Ap[2]-Ap[0])/2)|0))-((Ct[0]/2)|0
),pos[1]];pos=[pos[0],(Ap[1]+(((Ap[3]-Ap[1])/2)|0))-((Ct[1]/2)|0)];Aw.R1=pos;},_Init:
function(aArg){C.Nf._Init.call(this,aArg);this.__proto__=C.P0;},_className:"Effects::ShowHideTransition"
};C.OE={Trigger:function(){B.Core.Timer.Trigger.call(this);B.vv(this,0);},_Init:
function(aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=C.OE;},_className:
"Effects::EffectTimerClass"};C.HZ={_Init:function(){C.OE._Init.call(this,0);this.
DZ(15);this.Ar(true);},_variants:function(){return this;},_this:null};C.MC={Bl:null
,AV:null,RQ:function(Ku){var Aw=this.AV;while(!!Aw){Aw.RR();Aw.O.I=Aw.O.I&~0x40000;
Aw=Aw.Aj;}Aw=this.AV;while(!!Aw){B.ow(Aw.QY,Aw);Aw=Aw.Aj;}},RP:function(Ku){var Aw=
this.AV;while(!!Aw){B.ow(Aw.N4,Aw);Aw=Aw.Aj;}this.AV=null;this.Bl=null;},J7:function(
Ku){var A;if(!this.AV)this.HT();var Aw=this.AV;while(!!Aw){Aw.O.I=(Aw.O.I|0x40000
)&~0x20000;Aw.O.JF=null;Aw=Aw.Aj;}Aw=this.AV;while(!!Aw){(A=Aw.PD)?A[1].call(A[0
],Aw):null;Aw.J7();Aw=Aw.Aj;}},HT:function(){var Aw=this.AV;while(!!Aw&&Aw.RK())
Aw=Aw.Aj;if(!Aw)B.Core.H9.HT.call(this);},VF:function(Bg){if(!Bg)return;if(this.
OZ())throw new Error(A9);if(Bg.Dj!==this)throw new Error(Bc);if(!!Bg.Aj)Bg.Aj.Au=
Bg.Au;else this.Bl=Bg.Au;if(!!Bg.Au)Bg.Au.Aj=Bg.Aj;else this.AV=Bg.Aj;Bg.Dj=null;
Bg.Aj=null;Bg.Au=null;if(!!Bg.O)Bg.O.JF=null;B.ow(Bg.N4,Bg);if(!this.AV)this.Ro(
);},Rk:function(Bg){if(!Bg)return;if(this.OZ())throw new Error(DK);if(!!Bg.Dj)throw new
Error(DL);Bg.Au=this.Bl;Bg.Aj=null;if(!!this.Bl)this.Bl.Aj=Bg;else this.AV=Bg;this.
Bl=Bg;Bg.Dj=this;},_Init:function(aArg){B.Core.H9._Init.call(this,aArg);this.__proto__=
C.MC;},_Mark:function(D){var A;B.Core.H9._Mark.call(this,D);if((A=this.Bl)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.AV)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Effects::FaderTask"};C.LC={_Init:function(){C.P0._Init.call(this,0);},_variants:
function(){return this;},_this:null};
C._Init=function(){C.B9.__proto__=C.MB;C.Kg.__proto__=C.OT;C.P0.__proto__=C.Nf;C.
OE.__proto__=B.Core.Timer;C.MC.__proto__=B.Core.H9;};C._ReInit=function(){var A;
if((A=C.HZ._this))A._ReInit();if((A=C.LC._this))A._ReInit();};C.C9=function(D){var
A;if((A=C.HZ._this)&&(A._cycle!=D))A._Done(C.HZ._this=null);if((A=C.LC._this)&&(
A._cycle!=D))A._Done(C.LC._this=null);};return C;})();

/* Embedded Wizard */