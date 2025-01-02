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
var DJ="Trying to add a fader to a task, which is actually running";var DK="The fader belongs already to a task";
C.MA={timer:null,IN:null,QD:0,JK:0,L1:0.001,EK:0,A2:0,Bi:0,DH:0,El:1000,G_:0,Bn:false
,Dc:function(M){var A;if(!this.timer)return;if(!this.JK){this.JK=1;this.QD=this.
JK;this.Bi=this.timer.AE;this.A2=0;this.EK=-1;}var CL;if((this.JK>0)&&(this.QD>0
))CL=this.Aai();else if((this.JK<0)&&(this.QD<0))CL=this.Aal();else if(this.JK>0
)CL=this.Aaj();else CL=this.Aak();if(CL){this.At(false);(A=this.IN)?A[1].call(A[
0],this):null;}},Oe:function(Y1){this.Rl(Y1);},Aal:function(){var Am=(this.timer.
AE-this.Bi)|0;if(Am<0)Am=-Am;var C$=this.G_;var DU=this.G_+this.El;var BF=this.El;
var CL=false;var BC=this.EK;if(!this.A2&&(Am>=DU)){this.A2=1;Am=Am-DU;this.Bi=this.
Bi+DU;}if((this.A2>0)&&(Am>=BF)){var BW=(Am/BF)|0;this.A2=this.A2+BW;Am=Am-(BW*BF
);this.Bi=this.Bi+(BW*BF);}if((this.A2>2)&&!this.DH)this.A2=1;if(this.A2>0)C$=0;
if((this.A2>=this.DH)&&(this.DH>0)){CL=true;BC=0;}else if(Am>=C$)BC=1-((Am-C$)*this.
L1);else if(BC>=0)BC=0;if(BC!==this.EK){this.EK=BC;this.Oe(BC);}return CL;},Aak:
function(){var Am=(this.Bi-this.timer.AE)|0;var C$=this.G_;var DU=this.G_+this.El;
var BF=this.El;var CL=false;var BC=this.EK;if((this.A2>1)&&(Am<0)){var BW=(((-Am+
BF)-1)/BF)|0;if((this.A2-BW)<=0)BW=this.A2-1;this.A2=this.A2-BW;Am=Am+(BW*BF);this.
Bi=this.Bi+(BW*BF);}if(((this.A2===1)&&(Am<0))&&(this.DH>0)){this.A2=0;Am=Am+DU;
this.Bi=this.Bi+DU;}if(((this.A2===1)&&(Am<0))&&!this.DH){var BW=(((-Am+BF)-1)/BF
)|0;Am=Am+(BW*BF);this.Bi=this.Bi+(BW*BF);}if(this.A2>0)C$=0;if(Am<0){CL=true;BC=
1;}else if(Am>=C$)BC=1-((Am-C$)*this.L1);else if(BC>=0)BC=1;if(BC!==this.EK){this.
EK=BC;this.Oe(BC);}return CL;},Aaj:function(){var Am=(this.Bi-this.timer.AE)|0;var
C$=this.G_;var DU=this.G_+this.El;var BF=this.El;var CL=false;var BC=this.EK;if((
this.A2>1)&&(Am<0)){var BW=(((-Am+BF)-1)/BF)|0;if((this.A2-BW)<=0)BW=this.A2-1;this.
A2=this.A2-BW;Am=Am+(BW*BF);this.Bi=this.Bi+(BW*BF);}if(((this.A2===1)&&(Am<0))&&(
this.DH>0)){this.A2=0;Am=Am+DU;this.Bi=this.Bi+DU;}if(((this.A2===1)&&(Am<0))&&!
this.DH){var BW=(((-Am+BF)-1)/BF)|0;Am=Am+(BW*BF);this.Bi=this.Bi+(BW*BF);}if(this.
A2>0)C$=0;if(Am<0){CL=true;BC=0;}else if(Am>=C$)BC=(Am-C$)*this.L1;else if(BC>=0
)BC=0;if(BC!==this.EK){this.EK=BC;this.Oe(BC);}return CL;},Aai:function(){var Am=(
this.timer.AE-this.Bi)|0;if(Am<0)Am=-Am;var C$=this.G_;var DU=this.G_+this.El;var
BF=this.El;var CL=false;var BC=this.EK;if(!this.A2&&(Am>=DU)){this.A2=1;Am=Am-DU;
this.Bi=this.Bi+DU;}if((this.A2>0)&&(Am>=BF)){var BW=(Am/BF)|0;this.A2=this.A2+BW;
Am=Am-(BW*BF);this.Bi=this.Bi+(BW*BF);}if((this.A2>2)&&!this.DH)this.A2=1;if(this.
A2>0)C$=0;if((this.A2>=this.DH)&&(this.DH>0)){CL=true;BC=1;}else if(Am>=C$)BC=(Am-
C$)*this.L1;else if(BC>=0)BC=1;if(BC!==this.EK){this.EK=BC;this.Oe(BC);}return CL;
},PJ:function(E){if(E<0)E=0;this.DH=E;},Lk:function(E){if(E<15)E=15;this.El=E;this.
L1=1/E;},Vb:function(E){if(E<0)E=0;this.G_=E;},At:function(E){if(this.Bn===E)return;
this.Bn=E;if(!E&&!!this.timer){B.zl([this,this.Dc],this.timer,0);this.timer=null;
}if(E){this.timer=B._GetAutoObject(C.HY);B.y_([this,this.Dc],this.timer,0);this.
JK=0;B.ow([this,this.Dc],this);}},Rl:function(SM){},_Init:function(aArg){this.__proto__=
C.MA;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.IN)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D
))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:null,_className:"Effects::Effect"
};C.B9={CT:null,Kd:0,Ke:255,Rl:function(SM){var Af;this.Kd=Math.round(this.Ke*SM
)|0;if(!!this.CT)(Af=this.CT,Af[2].call(Af[0],this.Kd));},_Init:function(aArg){C.
MA._Init.call(this,aArg);this.__proto__=C.B9;},_Mark:function(D){var A;C.MA._Mark.
call(this,D);if((A=this.CT)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Effects::Int32Effect"};C.DW={timer:null,IN:null,CT:null,A2:0,Bi:0,DH:0,El:1000,
OX:1000,Bn:false,R8:false,Ke:true,Dc:function(M){var A;var Af;if(!this.timer)return;
if(this.A2<0){this.Bi=this.timer.AE;this.A2=0;}var Am=(this.timer.AE-this.Bi)|0;
var DU=this.El;var BF=this.OX+this.El;var C$=0;var Fb=this.A2;if(!Fb&&(Am>=DU)){
Fb=1;Am=Am-DU;}if((Fb>0)&&(Am>=BF)){var BW=(Am/BF)|0;Am=Am-(BW*BF);Fb=Fb+BW;}if((
Fb>2)&&!this.DH)Fb=1;if(Fb!==this.A2){this.Bi=this.timer.AE-(((A=Am)<0)?A+0x100000000:
A);this.A2=Fb;}if(Fb>0)C$=this.OX;var CL=(Fb>=this.DH)&&(this.DH>0);if(!!this.CT
){if(!CL&&(Am>=C$))(Af=this.CT,Af[2].call(Af[0],this.R8));if(CL||((Am<C$)&&(Fb>0
)))(Af=this.CT,Af[2].call(Af[0],this.Ke));}if(CL){this.At(false);(A=this.IN)?A[1
].call(A[0],this):null;}},PJ:function(E){if(E<0)E=0;this.DH=E;},Lk:function(E){if(
E<100)E=100;this.El=E;},Vc:function(E){if(E<0)E=0;this.OX=E;},At:function(E){if(
this.Bn===E)return;this.Bn=E;if(!E&&!!this.timer){B.zl([this,this.Dc],this.timer
,0);this.timer=null;}if(E){this.timer=B._GetAutoObject(C.HY);B.y_([this,this.Dc]
,this.timer,0);this.A2=-1;}},VG:function(M){this.At(false);},R3:function(M){if(this.
Bn)this.At(false);this.At(true);},_Init:function(aArg){this.__proto__=C.DW;B.hJ++;
},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.IN)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CT)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Effects::BoolEffect"};C.OS={Di:null,Au:null,Aj:null,L:null,O:null
,N3:null,QX:null,PC:null,E7:true,Bn:true,R7:true,Rk:false,Rm:true,PW:true,PU:true
,HS:function(){if(!!this.Di)this.Di.HS();},RJ:function(){return true;},RQ:function(
){},J6:function(){this.HS();},_Init:function(aArg){this.__proto__=C.OS;B.hJ++;},
_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.Di)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Au)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Aj)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.L)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.O)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.N3)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
QX)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.PC)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null
,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Kf={R0:B.vw,SU:false,RJ:
function(){return this.SU;},RQ:function(){if(!this.E7&&!!this.O.L)this.O.U(false
);if((!this.E7&&this.PU)&&!!this.O.L)this.O.L.H6(this.O);if(!this.Bn)this.O.At(false
);},J6:function(){if(this.Bn)this.O.At(true);if((this.E7||this.Rk)&&!this.O.L){this.
O.U(false);this.L.K(this.O,0);}if(this.E7&&this.PW)this.O.L.Ly(this.O);if(this.E7&&
this.Rm)this.O.L.Df(this.O);if(this.E7&&!this.R7)this.O.H(B.aaM(this.O.R,this.R0
));if(this.E7){this.O.Lr(255);this.O.U(true);}if(!this.E7&&(this.L.Dp===this.O))
this.L.Df(null);this.SU=true;this.HS();},_Init:function(aArg){C.OS._Init.call(this
,aArg);this.__proto__=C.Kf;},_className:"Effects::VisibilityFader"};C.Ne={HV:function(
){return null;},HU:function(){return null;},My:function(){return this.HV();},Mx:
function(){return this.HU();},_Init:function(aArg){this.__proto__=C.Ne;B.hJ++;},
_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);},G:null,_cycle:0,_observers:
null,_className:"Effects::Transition"};C.PZ={HV:function(){var Aw=B._NewObject(C.
Kf,0);Aw.E7=true;Aw.Bn=true;Aw.Rm=false;Aw.PW=true;Aw.R7=false;Aw.PC=[this,this.
ZU];return Aw;},HU:function(){var Aw=B._NewObject(C.Kf,0);Aw.E7=false;Aw.Bn=false;
Aw.PU=true;return Aw;},My:function(){var Aw=C.Ne.My.call(this);Aw.PW=false;Aw.Bn=
true;return Aw;},Mx:function(){var Aw=B._NewObject(C.Kf,0);Aw.E7=false;Aw.Bn=true;
Aw.Rk=true;Aw.PU=false;return Aw;},ZU:function(M){var A;var Aw=(C.Kf.isPrototypeOf(
M)?M:null);var Ap=[0,0,(A=Aw.L.R)[2]-A[0],A[3]-A[1]];var Ct=[(A=Aw.O.R)[2]-A[0],
A[3]-A[1]];var pos=Ap.slice(0,2);pos=[(Ap[0]+(((Ap[2]-Ap[0])/2)|0))-((Ct[0]/2)|0
),pos[1]];pos=[pos[0],(Ap[1]+(((Ap[3]-Ap[1])/2)|0))-((Ct[1]/2)|0)];Aw.R0=pos;},_Init:
function(aArg){C.Ne._Init.call(this,aArg);this.__proto__=C.PZ;},_className:"Effects::ShowHideTransition"
};C.OD={Trigger:function(){B.Core.Timer.Trigger.call(this);B.vv(this,0);},_Init:
function(aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=C.OD;},_className:
"Effects::EffectTimerClass"};C.HY={_Init:function(){C.OD._Init.call(this,0);this.
DY(15);this.At(true);},_variants:function(){return this;},_this:null};C.MB={Bk:null
,AV:null,RP:function(Kt){var Aw=this.AV;while(!!Aw){Aw.RQ();Aw.O.I=Aw.O.I&~0x40000;
Aw=Aw.Aj;}Aw=this.AV;while(!!Aw){B.ow(Aw.QX,Aw);Aw=Aw.Aj;}},RO:function(Kt){var Aw=
this.AV;while(!!Aw){B.ow(Aw.N3,Aw);Aw=Aw.Aj;}this.AV=null;this.Bk=null;},J6:function(
Kt){var A;if(!this.AV)this.HS();var Aw=this.AV;while(!!Aw){Aw.O.I=(Aw.O.I|0x40000
)&~0x20000;Aw.O.JE=null;Aw=Aw.Aj;}Aw=this.AV;while(!!Aw){(A=Aw.PC)?A[1].call(A[0
],Aw):null;Aw.J6();Aw=Aw.Aj;}},HS:function(){var Aw=this.AV;while(!!Aw&&Aw.RJ())
Aw=Aw.Aj;if(!Aw)B.Core.H8.HS.call(this);},VD:function(Bg){if(!Bg)return;if(this.
OY())throw new Error(A9);if(Bg.Di!==this)throw new Error(Bc);if(!!Bg.Aj)Bg.Aj.Au=
Bg.Au;else this.Bk=Bg.Au;if(!!Bg.Au)Bg.Au.Aj=Bg.Aj;else this.AV=Bg.Aj;Bg.Di=null;
Bg.Aj=null;Bg.Au=null;if(!!Bg.O)Bg.O.JE=null;B.ow(Bg.N3,Bg);if(!this.AV)this.Rn(
);},Rj:function(Bg){if(!Bg)return;if(this.OY())throw new Error(DJ);if(!!Bg.Di)throw new
Error(DK);Bg.Au=this.Bk;Bg.Aj=null;if(!!this.Bk)this.Bk.Aj=Bg;else this.AV=Bg;this.
Bk=Bg;Bg.Di=this;},_Init:function(aArg){B.Core.H8._Init.call(this,aArg);this.__proto__=
C.MB;},_Mark:function(D){var A;B.Core.H8._Mark.call(this,D);if((A=this.Bk)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.AV)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Effects::FaderTask"};C.LB={_Init:function(){C.PZ._Init.call(this,0);},_variants:
function(){return this;},_this:null};
C._Init=function(){C.B9.__proto__=C.MA;C.Kf.__proto__=C.OS;C.PZ.__proto__=C.Ne;C.
OD.__proto__=B.Core.Timer;C.MB.__proto__=B.Core.H8;};C._ReInit=function(){var A;
if((A=C.HY._this))A._ReInit();if((A=C.LB._this))A._ReInit();};C.C7=function(D){var
A;if((A=C.HY._this)&&(A._cycle!=D))A._Done(C.HY._this=null);if((A=C.LB._this)&&(
A._cycle!=D))A._Done(C.LB._this=null);};return C;})();

/* Embedded Wizard */