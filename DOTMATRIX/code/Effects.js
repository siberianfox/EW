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
abl=(function(){var B=EmWiApp;var D={};
var AQ="Trying to remove a fader from a task, which is actually running";var AO="The fader doesn\'t belong to this task";
var CU="Trying to add a fader to a task, which is actually running";var CV="The fader belongs already to a task";
D.Jq={timer:null,JE:null,LZ:0,G4:0,IW:0.001,DD:0,AG:0,AS:0,DW:0,Dq:1000,AW:false,
Cu:function(T){var A;if(!this.timer)return;if(!this.G4){this.G4=1;this.LZ=this.G4;
this.AS=this.timer.Am;this.AG=0;this.DD=-1;}var CL;if((this.G4>0)&&(this.LZ>0))CL=
this.RZ();else if((this.G4<0)&&(this.LZ<0))CL=this.R2();else if(this.G4>0)CL=this.
R0();else CL=this.R1();if(CL){this.A0(false);(A=this.JE)?A[1].call(A[0],this):null;
}},Kt:function(Rd){this.Mx(Rd);},R2:function(){var X=(this.timer.Am-this.AS)|0;if(
X<0)X=-X;var C3=this.Dq;var A_=this.Dq;var CL=false;var A7=this.DD;if(!this.AG&&(
X>=C3)){this.AG=1;X=X-C3;this.AS=this.AS+C3;}if((this.AG>0)&&(X>=A_)){var Bo=(X/
A_)|0;this.AG=this.AG+Bo;X=X-(Bo*A_);this.AS=this.AS+(Bo*A_);}if((this.AG>2)&&!this.
DW)this.AG=1;if((this.AG>=this.DW)&&(this.DW>0)){CL=true;A7=0;}else if(X>=0)A7=1-(
X*this.IW);else if(A7>=0)A7=0;if(A7!==this.DD){this.DD=A7;this.Kt(A7);}return CL;
},R1:function(){var X=(this.AS-this.timer.Am)|0;var C3=this.Dq;var A_=this.Dq;var
CL=false;var A7=this.DD;if((this.AG>1)&&(X<0)){var Bo=(((-X+A_)-1)/A_)|0;if((this.
AG-Bo)<=0)Bo=this.AG-1;this.AG=this.AG-Bo;X=X+(Bo*A_);this.AS=this.AS+(Bo*A_);}if(((
this.AG===1)&&(X<0))&&(this.DW>0)){this.AG=0;X=X+C3;this.AS=this.AS+C3;}if(((this.
AG===1)&&(X<0))&&!this.DW){var Bo=(((-X+A_)-1)/A_)|0;X=X+(Bo*A_);this.AS=this.AS+(
Bo*A_);}if(X<0){CL=true;A7=1;}else if(X>=0)A7=1-(X*this.IW);else if(A7>=0)A7=1;if(
A7!==this.DD){this.DD=A7;this.Kt(A7);}return CL;},R0:function(){var X=(this.AS-this.
timer.Am)|0;var C3=this.Dq;var A_=this.Dq;var CL=false;var A7=this.DD;if((this.AG>
1)&&(X<0)){var Bo=(((-X+A_)-1)/A_)|0;if((this.AG-Bo)<=0)Bo=this.AG-1;this.AG=this.
AG-Bo;X=X+(Bo*A_);this.AS=this.AS+(Bo*A_);}if(((this.AG===1)&&(X<0))&&(this.DW>0
)){this.AG=0;X=X+C3;this.AS=this.AS+C3;}if(((this.AG===1)&&(X<0))&&!this.DW){var
Bo=(((-X+A_)-1)/A_)|0;X=X+(Bo*A_);this.AS=this.AS+(Bo*A_);}if(X<0){CL=true;A7=0;
}else if(X>=0)A7=X*this.IW;else if(A7>=0)A7=0;if(A7!==this.DD){this.DD=A7;this.Kt(
A7);}return CL;},RZ:function(){var X=(this.timer.Am-this.AS)|0;if(X<0)X=-X;var C3=
this.Dq;var A_=this.Dq;var CL=false;var A7=this.DD;if(!this.AG&&(X>=C3)){this.AG=
1;X=X-C3;this.AS=this.AS+C3;}if((this.AG>0)&&(X>=A_)){var Bo=(X/A_)|0;this.AG=this.
AG+Bo;X=X-(Bo*A_);this.AS=this.AS+(Bo*A_);}if((this.AG>2)&&!this.DW)this.AG=1;if((
this.AG>=this.DW)&&(this.DW>0)){CL=true;A7=1;}else if(X>=0)A7=X*this.IW;else if(
A7>=0)A7=1;if(A7!==this.DD){this.DD=A7;this.Kt(A7);}return CL;},PP:function(C){if(
C<0)C=0;this.DW=C;},Ls:function(C){if(C<15)C=15;this.Dq=C;this.IW=1/C;},A0:function(
C){if(this.AW===C)return;this.AW=C;if(!C&&!!this.timer){B.zl([this,this.Cu],this.
timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(D.Fz);B.y_([this,this.
Cu],this.timer,0);this.G4=0;B.ow([this,this.Cu],this);}},Mx:function(Ns){},_Init:
function(aArg){this.__proto__=D.Jq;B.hJ++;},_Done:function(){this.__proto__=null;
B.hJ--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.timer)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.JE)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E
);if((A=this.I)&&(A._cycle!=E))A._Mark(A._cycle=E);},I:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};D.C7={Cy:null,Nf:0,Iy:255,Mx:function(Ns){var
Bl;this.Nf=Math.round(this.Iy*Ns)|0;if(!!this.Cy)(Bl=this.Cy,Bl[2].call(Bl[0],this.
Nf));},_Init:function(aArg){D.Jq._Init.call(this,aArg);this.__proto__=D.C7;},_Mark:
function(E){var A;D.Jq._Mark.call(this,E);if((A=this.Cy)&&((A=A[0])._cycle!=E))A.
_Mark(A._cycle=E);},_className:"Effects::Int32Effect"};D.Mz={timer:null,Cy:null,
AG:0,AS:0,Dq:1000,K3:1000,AW:false,Ng:false,Iy:true,Cu:function(T){var Bl;if(!this.
timer)return;if(this.AG<0){this.AS=this.timer.Am;this.AG=0;}var X=(this.timer.Am-
this.AS)|0;var C3=this.Dq;var A_=this.K3+this.Dq;var LY=0;var D9=this.AG;if(!D9&&(
X>=C3)){D9=1;X=X-C3;}if((D9>0)&&(X>=A_)){var Bo=(X/A_)|0;X=X-(Bo*A_);D9=D9+Bo;}if(
D9>2)D9=1;if(D9!==this.AG){this.AS=this.timer.Am-(((A=X)<0)?A+0x100000000:A);this.
AG=D9;}if(D9>0)LY=this.K3;if(!!this.Cy){if(X>=LY)(Bl=this.Cy,Bl[2].call(Bl[0],this.
Ng));if((X<LY)&&(D9>0))(Bl=this.Cy,Bl[2].call(Bl[0],this.Iy));}},Ls:function(C){
if(C<100)C=100;this.Dq=C;},Pu:function(C){if(C<0)C=0;this.K3=C;},A0:function(C){
if(this.AW===C)return;this.AW=C;if(!C&&!!this.timer){B.zl([this,this.Cu],this.timer
,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(D.Fz);B.y_([this,this.Cu]
,this.timer,0);this.AG=-1;}},_Init:function(aArg){this.__proto__=D.Mz;B.hJ++;},_Done:
function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Cy)&&((A=A[0]).
_cycle!=E))A._Mark(A._cycle=E);if((A=this.I)&&(A._cycle!=E))A._Mark(A._cycle=E);
},I:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};D.K1={Dl:null
,Af:null,U:null,G:null,M:null,Ki:null,Me:null,Lq:null,DL:true,AW:true,Ne:true,Mw:
false,My:true,LC:true,LB:true,Gg:function(){if(!!this.Dl)this.Dl.Gg();},MV:function(
){return true;},M1:function(){},Ip:function(){this.Gg();},_Init:function(aArg){this.
__proto__=D.K1;B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.Dl)&&(A._cycle!=E))A._Mark(A._cycle=E);if((
A=this.Af)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.U)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.M)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.Ki)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E
);if((A=this.Me)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Lq)&&((A=A[
0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.I)&&(A._cycle!=E))A._Mark(A._cycle=
E);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"};D.Hs={M_:B.vw,
NA:false,MV:function(){return this.NA;},M1:function(){if(!this.DL&&!!this.M.G)this.
M.A6(false);if((!this.DL&&this.LB)&&!!this.M.G)this.M.G.Gr(this.M);if(!this.AW)this.
M.A0(false);},Ip:function(){if(this.AW)this.M.A0(true);if((this.DL||this.Mw)&&!this.
M.G){this.M.A6(false);this.G.W(this.M,0);}if(this.DL&&this.LC)this.M.G.Ir(this.M
);if(this.DL&&this.My)this.M.G.DZ(this.M);if(this.DL&&!this.Ne)this.M.S(B.aaM(this.
M.J,this.M_));if(this.DL){this.M.In(255);this.M.A6(true);}if(!this.DL&&(this.G.CC===
this.M))this.G.DZ(null);this.NA=true;this.Gg();},_Init:function(aArg){D.K1._Init.
call(this,aArg);this.__proto__=D.Hs;},_className:"Effects::VisibilityFader"};D.JM={
Fx:function(){return null;},Fw:function(){return null;},Jp:function(){return this.
Fx();},Jo:function(){return this.Fw();},_Init:function(aArg){this.__proto__=D.JM;
B.hJ++;},_Done:function(){this.__proto__=null;B.hJ--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.I)&&(A._cycle!=E))A._Mark(A._cycle=E);},I:null,_cycle:
0,_observers:null,_className:"Effects::Transition"};D.LF={Fx:function(){var Ag=B.
_NewObject(D.Hs,0);Ag.DL=true;Ag.AW=true;Ag.My=false;Ag.LC=true;Ag.Ne=false;Ag.Lq=[
this,this.RO];return Ag;},Fw:function(){var Ag=B._NewObject(D.Hs,0);Ag.DL=false;
Ag.AW=false;Ag.LB=true;return Ag;},Jp:function(){var Ag=D.JM.Jp.call(this);Ag.LC=
false;Ag.AW=true;return Ag;},Jo:function(){var Ag=B._NewObject(D.Hs,0);Ag.DL=false;
Ag.AW=true;Ag.Mw=true;Ag.LB=false;return Ag;},RO:function(T){var A;var Ag=(D.Hs.
isPrototypeOf(T)?T:null);var Aa=[0,0,(A=Ag.G.J)[2]-A[0],A[3]-A[1]];var BV=[(A=Ag.
M.J)[2]-A[0],A[3]-A[1]];var pos=Aa.slice(0,2);pos=[(Aa[0]+(((Aa[2]-Aa[0])/2)|0))-((
BV[0]/2)|0),pos[1]];pos=[pos[0],(Aa[1]+(((Aa[3]-Aa[1])/2)|0))-((BV[1]/2)|0)];Ag.
M_=pos;},_Init:function(aArg){D.JM._Init.call(this,aArg);this.__proto__=D.LF;},_className:
"Effects::ShowHideTransition"};D.KM={Trigger:function(){B.Core.Timer.Trigger.call(
this);B.vv(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this,aArg);this.
__proto__=D.KM;},_className:"Effects::EffectTimerClass"};D.Fz={_Init:function(){
D.KM._Init.call(this,0);this.Hc(15);this.A0(true);},_variants:function(){return this;
},_this:null};D.Jr={AY:null,AH:null,M0:function(IJ){var Ag=this.AH;while(!!Ag){Ag.
M1();Ag.M.F=Ag.M.F&~0x40000;Ag=Ag.U;}Ag=this.AH;while(!!Ag){B.ow(Ag.Me,Ag);Ag=Ag.
U;}},MZ:function(IJ){var Ag=this.AH;while(!!Ag){B.ow(Ag.Ki,Ag);Ag=Ag.U;}this.AH=
null;this.AY=null;},Ip:function(IJ){var A;if(!this.AH)this.Gg();var Ag=this.AH;while(
!!Ag){Ag.M.F=(Ag.M.F|0x40000)&~0x20000;Ag.M.GY=null;Ag=Ag.U;}Ag=this.AH;while(!!
Ag){(A=Ag.Lq)?A[1].call(A[0],Ag):null;Ag.Ip();Ag=Ag.U;}},Gg:function(){var Ag=this.
AH;while(!!Ag&&Ag.MV())Ag=Ag.U;if(!Ag)B.Core.Ix.Gg.call(this);},P2:function(AP){
if(!AP)return;if(this.K4())throw new Error(AQ);if(AP.Dl!==this)throw new Error(AO
);if(!!AP.U)AP.U.Af=AP.Af;else this.AY=AP.Af;if(!!AP.Af)AP.Af.U=AP.U;else this.AH=
AP.U;AP.Dl=null;AP.U=null;AP.Af=null;if(!!AP.M)AP.M.GY=null;B.ow(AP.Ki,AP);if(!this.
AH)this.MA();},Mv:function(AP){if(!AP)return;if(this.K4())throw new Error(CU);if(
!!AP.Dl)throw new Error(CV);AP.Af=this.AY;AP.U=null;if(!!this.AY)this.AY.U=AP;else
this.AH=AP;this.AY=AP;AP.Dl=this;},_Init:function(aArg){B.Core.Ix._Init.call(this
,aArg);this.__proto__=D.Jr;},_Mark:function(E){var A;B.Core.Ix._Mark.call(this,E
);if((A=this.AY)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.AH)&&(A._cycle!=E
))A._Mark(A._cycle=E);},_className:"Effects::FaderTask"};D.Iu={_Init:function(){
D.LF._Init.call(this,0);},_variants:function(){return this;},_this:null};
D._Init=function(){D.C7.__proto__=D.Jq;D.Hs.__proto__=D.K1;D.LF.__proto__=D.JM;D.
KM.__proto__=B.Core.Timer;D.Jr.__proto__=B.Core.Ix;};D._ReInit=function(){var A;
if((A=D.Fz._this))A._ReInit();if((A=D.Iu._this))A._ReInit();};D.Co=function(E){var
A;if((A=D.Fz._this)&&(A._cycle!=E))A._Done(D.Fz._this=null);if((A=D.Iu._this)&&(
A._cycle!=E))A._Done(D.Iu._this=null);};return D;})();

/* Embedded Wizard */