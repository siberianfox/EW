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
C.MA={timer:null,IO:null,QC:0,JL:0,L1:0.001,EL:0,A2:0,Bi:0,DI:0,Em:1000,G$:0,Bo:false
,De:function(M){var A;if(!this.timer)return;if(!this.JL){this.JL=1;this.QC=this.
JL;this.Bi=this.timer.AF;this.A2=0;this.EL=-1;}var CL;if((this.JL>0)&&(this.QC>0
))CL=this.Aak();else if((this.JL<0)&&(this.QC<0))CL=this.Aan();else if(this.JL>0
)CL=this.Aal();else CL=this.Aam();if(CL){this.Ar(false);(A=this.IO)?A[1].call(A[
0],this):null;}},Od:function(Y3){this.Rk(Y3);},Aan:function(){var Am=(this.timer.
AF-this.Bi)|0;if(Am<0)Am=-Am;var Db=this.G$;var DV=this.G$+this.Em;var BF=this.Em;
var CL=false;var BC=this.EL;if(!this.A2&&(Am>=DV)){this.A2=1;Am=Am-DV;this.Bi=this.
Bi+DV;}if((this.A2>0)&&(Am>=BF)){var BX=(Am/BF)|0;this.A2=this.A2+BX;Am=Am-(BX*BF
);this.Bi=this.Bi+(BX*BF);}if((this.A2>2)&&!this.DI)this.A2=1;if(this.A2>0)Db=0;
if((this.A2>=this.DI)&&(this.DI>0)){CL=true;BC=0;}else if(Am>=Db)BC=1-((Am-Db)*this.
L1);else if(BC>=0)BC=0;if(BC!==this.EL){this.EL=BC;this.Od(BC);}return CL;},Aam:
function(){var Am=(this.Bi-this.timer.AF)|0;var Db=this.G$;var DV=this.G$+this.Em;
var BF=this.Em;var CL=false;var BC=this.EL;if((this.A2>1)&&(Am<0)){var BX=(((-Am+
BF)-1)/BF)|0;if((this.A2-BX)<=0)BX=this.A2-1;this.A2=this.A2-BX;Am=Am+(BX*BF);this.
Bi=this.Bi+(BX*BF);}if(((this.A2===1)&&(Am<0))&&(this.DI>0)){this.A2=0;Am=Am+DV;
this.Bi=this.Bi+DV;}if(((this.A2===1)&&(Am<0))&&!this.DI){var BX=(((-Am+BF)-1)/BF
)|0;Am=Am+(BX*BF);this.Bi=this.Bi+(BX*BF);}if(this.A2>0)Db=0;if(Am<0){CL=true;BC=
1;}else if(Am>=Db)BC=1-((Am-Db)*this.L1);else if(BC>=0)BC=1;if(BC!==this.EL){this.
EL=BC;this.Od(BC);}return CL;},Aal:function(){var Am=(this.Bi-this.timer.AF)|0;var
Db=this.G$;var DV=this.G$+this.Em;var BF=this.Em;var CL=false;var BC=this.EL;if((
this.A2>1)&&(Am<0)){var BX=(((-Am+BF)-1)/BF)|0;if((this.A2-BX)<=0)BX=this.A2-1;this.
A2=this.A2-BX;Am=Am+(BX*BF);this.Bi=this.Bi+(BX*BF);}if(((this.A2===1)&&(Am<0))&&(
this.DI>0)){this.A2=0;Am=Am+DV;this.Bi=this.Bi+DV;}if(((this.A2===1)&&(Am<0))&&!
this.DI){var BX=(((-Am+BF)-1)/BF)|0;Am=Am+(BX*BF);this.Bi=this.Bi+(BX*BF);}if(this.
A2>0)Db=0;if(Am<0){CL=true;BC=0;}else if(Am>=Db)BC=(Am-Db)*this.L1;else if(BC>=0
)BC=0;if(BC!==this.EL){this.EL=BC;this.Od(BC);}return CL;},Aak:function(){var Am=(
this.timer.AF-this.Bi)|0;if(Am<0)Am=-Am;var Db=this.G$;var DV=this.G$+this.Em;var
BF=this.Em;var CL=false;var BC=this.EL;if(!this.A2&&(Am>=DV)){this.A2=1;Am=Am-DV;
this.Bi=this.Bi+DV;}if((this.A2>0)&&(Am>=BF)){var BX=(Am/BF)|0;this.A2=this.A2+BX;
Am=Am-(BX*BF);this.Bi=this.Bi+(BX*BF);}if((this.A2>2)&&!this.DI)this.A2=1;if(this.
A2>0)Db=0;if((this.A2>=this.DI)&&(this.DI>0)){CL=true;BC=1;}else if(Am>=Db)BC=(Am-
Db)*this.L1;else if(BC>=0)BC=1;if(BC!==this.EL){this.EL=BC;this.Od(BC);}return CL;
},PH:function(E){if(E<0)E=0;this.DI=E;},Ll:function(E){if(E<15)E=15;this.Em=E;this.
L1=1/E;},Vb:function(E){if(E<0)E=0;this.G$=E;},Ar:function(E){if(this.Bo===E)return;
this.Bo=E;if(!E&&!!this.timer){B.zl([this,this.De],this.timer,0);this.timer=null;
}if(E){this.timer=B._GetAutoObject(C.HZ);B.y_([this,this.De],this.timer,0);this.
JL=0;B.ow([this,this.De],this);}},Rk:function(SM){},_Init:function(aArg){this.__proto__=
C.MA;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.IO)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D
))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.B_={CT:null,Ke:0,Kf:255,Rk:function(SM){var Ag;this.Ke=Math.round(this.Kf*SM
)|0;if(!!this.CT)(Ag=this.CT,Ag[2].call(Ag[0],this.Ke));},_Init:function(aArg){C.
MA._Init.call(this,aArg);this.__proto__=C.B_;},_Mark:function(D){var A;C.MA._Mark.
call(this,D);if((A=this.CT)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Effects::Int32Effect"};C.DX={timer:null,IO:null,CT:null,A2:0,Bi:0,DI:0,Em:1000,
OW:1000,Bo:false,R7:false,Kf:true,De:function(M){var A;var Ag;if(!this.timer)return;
if(this.A2<0){this.Bi=this.timer.AF;this.A2=0;}var Am=(this.timer.AF-this.Bi)|0;
var DV=this.Em;var BF=this.OW+this.Em;var Db=0;var Fc=this.A2;if(!Fc&&(Am>=DV)){
Fc=1;Am=Am-DV;}if((Fc>0)&&(Am>=BF)){var BX=(Am/BF)|0;Am=Am-(BX*BF);Fc=Fc+BX;}if((
Fc>2)&&!this.DI)Fc=1;if(Fc!==this.A2){this.Bi=this.timer.AF-(((A=Am)<0)?A+0x100000000:
A);this.A2=Fc;}if(Fc>0)Db=this.OW;var CL=(Fc>=this.DI)&&(this.DI>0);if(!!this.CT
){if(!CL&&(Am>=Db))(Ag=this.CT,Ag[2].call(Ag[0],this.R7));if(CL||((Am<Db)&&(Fc>0
)))(Ag=this.CT,Ag[2].call(Ag[0],this.Kf));}if(CL){this.Ar(false);(A=this.IO)?A[1
].call(A[0],this):null;}},PH:function(E){if(E<0)E=0;this.DI=E;},Ll:function(E){if(
E<100)E=100;this.Em=E;},Vc:function(E){if(E<0)E=0;this.OW=E;},Ar:function(E){if(
this.Bo===E)return;this.Bo=E;if(!E&&!!this.timer){B.zl([this,this.De],this.timer
,0);this.timer=null;}if(E){this.timer=B._GetAutoObject(C.HZ);B.y_([this,this.De]
,this.timer,0);this.A2=-1;}},VG:function(M){this.Ar(false);},R2:function(M){if(this.
Bo)this.Ar(false);this.Ar(true);},_Init:function(aArg){this.__proto__=C.DX;B.hJ++;
},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.IO)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CT)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Effects::BoolEffect"};C.OR={Dj:null,Au:null,Aj:null,L:null,O:null
,N2:null,QW:null,PB:null,E8:true,Bo:true,R6:true,Rj:false,Rl:true,PV:true,PT:true
,HT:function(){if(!!this.Dj)this.Dj.HT();},RI:function(){return true;},RP:function(
){},J7:function(){this.HT();},_Init:function(aArg){this.__proto__=C.OR;B.hJ++;},
_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.Dj)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Au)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Aj)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.L)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.N2)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
QW)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.PB)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null
,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Kg={RZ:B.vw,SU:false,RI:
function(){return this.SU;},RP:function(){if(!this.E8&&!!this.O.L)this.O.U(false
);if((!this.E8&&this.PT)&&!!this.O.L)this.O.L.H7(this.O);if(!this.Bo)this.O.Ar(false
);},J7:function(){if(this.Bo)this.O.Ar(true);if((this.E8||this.Rj)&&!this.O.L){this.
O.U(false);this.L.K(this.O,0);}if(this.E8&&this.PV)this.O.L.Lz(this.O);if(this.E8&&
this.Rl)this.O.L.Dg(this.O);if(this.E8&&!this.R6)this.O.H(B.aaM(this.O.R,this.RZ
));if(this.E8){this.O.Ls(255);this.O.U(true);}if(!this.E8&&(this.L.Dq===this.O))
this.L.Dg(null);this.SU=true;this.HT();},_Init:function(aArg){C.OR._Init.call(this
,aArg);this.__proto__=C.Kg;},_className:"Effects::VisibilityFader"};C.Ne={HW:function(
){return null;},HV:function(){return null;},My:function(){return this.HW();},Mx:
function(){return this.HV();},_Init:function(aArg){this.__proto__=C.Ne;B.hJ++;},
_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Effects::Transition"};C.PY={HW:function(){var Aw=B._NewObject(C.
Kg,0);Aw.E8=true;Aw.Bo=true;Aw.Rl=false;Aw.PV=true;Aw.R6=false;Aw.PB=[this,this.
ZW];return Aw;},HV:function(){var Aw=B._NewObject(C.Kg,0);Aw.E8=false;Aw.Bo=false;
Aw.PT=true;return Aw;},My:function(){var Aw=C.Ne.My.call(this);Aw.PV=false;Aw.Bo=
true;return Aw;},Mx:function(){var Aw=B._NewObject(C.Kg,0);Aw.E8=false;Aw.Bo=true;
Aw.Rj=true;Aw.PT=false;return Aw;},ZW:function(M){var A;var Aw=(C.Kg.isPrototypeOf(
M)?M:null);var Ap=[0,0,(A=Aw.L.R)[2]-A[0],A[3]-A[1]];var Ct=[(A=Aw.O.R)[2]-A[0],
A[3]-A[1]];var pos=Ap.slice(0,2);pos=[(Ap[0]+(((Ap[2]-Ap[0])/2)|0))-((Ct[0]/2)|0
),pos[1]];pos=[pos[0],(Ap[1]+(((Ap[3]-Ap[1])/2)|0))-((Ct[1]/2)|0)];Aw.RZ=pos;},_Init:
function(aArg){C.Ne._Init.call(this,aArg);this.__proto__=C.PY;},_className:"Effects::ShowHideTransition"
};C.OC={Trigger:function(){B.Core.Timer.Trigger.call(this);B.vv(this,0);},_Init:
function(aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=C.OC;},_className:
"Effects::EffectTimerClass"};C.HZ={_Init:function(){C.OC._Init.call(this,0);this.
DZ(15);this.Ar(true);},_variants:function(){return this;},_this:null};C.MB={Bl:null
,AV:null,RO:function(Ku){var Aw=this.AV;while(!!Aw){Aw.RP();Aw.O.I=Aw.O.I&~0x40000;
Aw=Aw.Aj;}Aw=this.AV;while(!!Aw){B.ow(Aw.QW,Aw);Aw=Aw.Aj;}},RN:function(Ku){var Aw=
this.AV;while(!!Aw){B.ow(Aw.N2,Aw);Aw=Aw.Aj;}this.AV=null;this.Bl=null;},J7:function(
Ku){var A;if(!this.AV)this.HT();var Aw=this.AV;while(!!Aw){Aw.O.I=(Aw.O.I|0x40000
)&~0x20000;Aw.O.JF=null;Aw=Aw.Aj;}Aw=this.AV;while(!!Aw){(A=Aw.PB)?A[1].call(A[0
],Aw):null;Aw.J7();Aw=Aw.Aj;}},HT:function(){var Aw=this.AV;while(!!Aw&&Aw.RI())
Aw=Aw.Aj;if(!Aw)B.Core.H9.HT.call(this);},VD:function(Bg){if(!Bg)return;if(this.
OX())throw new Error(A9);if(Bg.Dj!==this)throw new Error(Bc);if(!!Bg.Aj)Bg.Aj.Au=
Bg.Au;else this.Bl=Bg.Au;if(!!Bg.Au)Bg.Au.Aj=Bg.Aj;else this.AV=Bg.Aj;Bg.Dj=null;
Bg.Aj=null;Bg.Au=null;if(!!Bg.O)Bg.O.JF=null;B.ow(Bg.N2,Bg);if(!this.AV)this.Rm(
);},Ri:function(Bg){if(!Bg)return;if(this.OX())throw new Error(DK);if(!!Bg.Dj)throw new
Error(DL);Bg.Au=this.Bl;Bg.Aj=null;if(!!this.Bl)this.Bl.Aj=Bg;else this.AV=Bg;this.
Bl=Bg;Bg.Dj=this;},_Init:function(aArg){B.Core.H9._Init.call(this,aArg);this.__proto__=
C.MB;},_Mark:function(D){var A;B.Core.H9._Mark.call(this,D);if((A=this.Bl)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.AV)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Effects::FaderTask"};C.LC={_Init:function(){C.PY._Init.call(this,0);},_variants:
function(){return this;},_this:null};
C._Init=function(){C.B_.__proto__=C.MA;C.Kg.__proto__=C.OR;C.PY.__proto__=C.Ne;C.
OC.__proto__=B.Core.Timer;C.MB.__proto__=B.Core.H9;};C._ReInit=function(){var A;
if((A=C.HZ._this))A._ReInit();if((A=C.LC._this))A._ReInit();};C.C9=function(D){var
A;if((A=C.HZ._this)&&(A._cycle!=D))A._Done(C.HZ._this=null);if((A=C.LC._this)&&(
A._cycle!=D))A._Done(C.LC._this=null);};return C;})();

/* Embedded Wizard */