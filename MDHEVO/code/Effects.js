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
* Version  : 11.00
* Profile  : WebGL
* Platform : Tara.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.uX)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
uX=(function(){var B=EmWiApp;var D={};
var BN=[0,0,100,100];var AZ="Trying to remove a fader from a task, which is actually running";
var Ao="The fader doesn\'t belong to this task";var CW="Trying to add a fader to a task, which is actually running";
var Fz="The fader belongs already to a task";
D.DF={EN:null,timer:null,Q7:null,YQ:null,YP:null,OH:0,Mj:0,LS:0,JI:0,Tx:0.001000,
Im:0,BU:0,BE:0,Jb:0,HB:1000,Of:0,B7:false,ZY:false,AcV:false,Ahm:false,DS:function(
P){var A;if(!this.timer)return;if(!this.Mj){if(this.ZY)this.Mj=-1;else this.Mj=1;
this.OH=this.Mj;this.BE=this.timer.AV;this.BU=0;this.Im=-1.000000;}var FE;if((this.
Mj>0)&&(this.OH>0))FE=this.Ani();else if((this.Mj<0)&&(this.OH<0))FE=this.Anl();
else if(this.Mj>0)FE=this.Anj();else FE=this.Ank();if(FE){this.Aw(false);(A=this.
Q7)?A[1].call(A[0],this):null;(A=this.YQ)?A[1].call(A[0],this):null;}},WZ:function(
Y){var A;if(!this.EN&&(((this.Of===19)||(this.Of===20))||(this.Of===21))){var O6=
0.500000;var Aa;this.EN=B._NewObject(D.VD,0);this.EN.Fi.Set(0,1.000000);this.EN.
Np.Set(0,1.000000);for(Aa=1;Aa<4;Aa=Aa+1){this.EN.Fi.Set(Aa,this.EN.Fi.Get(Aa-1)
*0.707107);this.EN.Np.Set(Aa,this.EN.Np.Get(Aa-1)*0.500000);O6=O6+this.EN.Fi.Get(
Aa);}var Amj=1.000000/O6;this.EN.Fi.Set(0,0.500000);O6=0.000000;for(Aa=0;Aa<4;Aa=
Aa+1){this.EN.Fi.Set(Aa,this.EN.Fi.Get(Aa)*Amj);O6=O6+this.EN.Fi.Get(Aa);}this.EN.
Fi.Set(4,this.EN.Fi.Get(4)+(1.000000-O6));}switch(this.Of){case 1:Y=Math.pow(Y,3.000000
);break;case 2:{Y=1.000000-Y;Y=1.000000-Math.pow(Y,3.000000);}break;case 3:{Y=Y*
2.000000;if(Y<1.000000)Y=Math.pow(Y,3.000000)/2.000000;else{Y=2.000000-Y;Y=(2.000000-
Math.pow(Y,3.000000))*0.500000;}}break;case 4:Y=(Math.pow(2.718000,3.000000*Y)-1.000000
)/19.079288;break;case 5:{Y=1.000000-Y;Y=1.000000-((Math.pow(2.718000,3.000000*Y
)-1.000000)/19.079288);}break;case 6:{Y=Y*2.000000;if(Y<1.000000)Y=((Math.pow(2.718000
,3.000000*Y)-1.000000)/19.079288)/2.000000;else{Y=2.000000-Y;Y=(2.000000-((Math.
pow(2.718000,3.000000*Y)-1.000000)/19.079288))*0.500000;}}break;case 7:Y=1.000000-
Math.cos((Y*90.000000)*B.iq);break;case 8:Y=Math.sin((Y*90.000000)*B.iq);break;case
9:{Y=Y*2.000000;if(Y<1.000000){Y=1.000000-Math.cos((Y*90.000000)*B.iq);Y=Y*0.500000;
}else{Y=2.000000-Y;Y=1.000000-Math.cos((Y*90.000000)*B.iq);Y=(2.000000-Y)*0.500000;
}}break;case 10:Y=1.000000-Math.sqrt(1.000000-(Y*Y));break;case 11:{Y=1.000000-Y;
Y=Math.sqrt(1.000000-(Y*Y));}break;case 12:{Y=Y*2.000000;if(Y<1.000000){Y=1.000000-
Math.sqrt(1.000000-(Y*Y));Y=Y*0.500000;}else{Y=2.000000-Y;Y=1.000000-Math.sqrt(1.000000-(
Y*Y));Y=(2.000000-Y)*0.500000;}}break;case 13:Y=((Y*Y)*Y)-((Y*0.500000)*Math.sin((
Y*180.000000)*B.iq));break;case 14:{Y=1.000000-Y;Y=((Y*Y)*Y)-((Y*0.500000)*Math.
sin((Y*180.000000)*B.iq));Y=1.000000-Y;}break;case 15:{Y=Y*2.000000;if(Y<1.000000
){Y=((Y*Y)*Y)-((Y*0.500000)*Math.sin((Y*180.000000)*B.iq));Y=Y*0.500000;}else{Y=
2.000000-Y;Y=((Y*Y)*Y)-((Y*0.500000)*Math.sin((Y*180.000000)*B.iq));Y=(2.000000-
Y)*0.500000;}}break;case 16:Y=((Y*Y)*Y)*Math.sin(((Y*90.000000)*13.000000)*B.iq);
break;case 17:{Y=1.000000-Y;Y=1.000000-(((Y*Y)*Y)*Math.sin(((Y*90.000000)*13.000000
)*B.iq));}break;case 18:{Y=Y*2.000000;if(Y<1.000000){Y=((Y*Y)*Y)*Math.sin(((Y*90.000000
)*13.000000)*B.iq);Y=Y*0.500000;}else{Y=2.000000-Y;Y=((Y*Y)*Y)*Math.sin(((Y*90.000000
)*13.000000)*B.iq);Y=(2.000000-Y)*0.500000;}}break;case 19:{var JM=this.EN;var Aa=
0;var J3=0.000000;var FP=JM.Fi.Get(0);var Dg=1.000000-Y;while(Dg>FP){Aa=Aa+1;J3=
FP;FP=FP+JM.Fi.Get(Aa);}Y=(Dg-J3)/(FP-J3);if(!Aa)Y=1.000000-(Y*Y);else{Y=(2.000000
*Y)-1.000000;Y=JM.Np.Get(Aa)*(1.000000-(Y*Y));}}break;case 20:{var JM=this.EN;var
Aa=0;var J3=0.000000;var FP=JM.Fi.Get(0);while(Y>FP){Aa=Aa+1;J3=FP;FP=FP+JM.Fi.Get(
Aa);}Y=(Y-J3)/(FP-J3);if(!Aa)Y=Y*Y;else{Y=(2.000000*Y)-1.000000;Y=1.000000-(JM.Np.
Get(Aa)*(1.000000-(Y*Y)));}}break;case 21:{var JM=this.EN;var Aa=0;var J3=0.000000;
var FP=JM.Fi.Get(0);var De=Y*2.000000;var Dg=De-1.000000;if(De<1.000000)Dg=-Dg;while(
Dg>FP){Aa=Aa+1;J3=FP;FP=FP+JM.Fi.Get(Aa);}Dg=(Dg-J3)/(FP-J3);if(!Aa)Dg=Dg*Dg;else{
Dg=(2.000000*Dg)-1.000000;Dg=1.000000-(JM.Np.Get(Aa)*(1.000000-(Dg*Dg)));}if(De<
1.000000)Y=0.500000*(1.000000-Dg);else Y=0.500000*(1.000000+Dg);}break;default:if(
this.AcV){var De=Y;var TL=1.000000-De;Y=((TL*De)*(this.JI+1.000000))+(De*De);}else
if(this.Ahm){var De=Y;var TL=1.000000-De;var Age=De*De;var AmE=TL*TL;Y=(((AmE*De
)*(this.JI+1.000000))+((TL*Age)*(this.LS+2.000000)))+(Age*De);}}this.Ub(Y);(A=this.
YP)?A[1].call(A[0],this):null;},Anl:function(){var AC=(this.timer.AV-this.BE)|0;
if(AC<0)AC=-AC;var Ge=this.HB;var CB=this.HB;var FE=false;var Cy=this.Im;if(!this.
BU&&(AC>=Ge)){this.BU=1;AC=AC-Ge;this.BE=this.BE+Ge;}if((this.BU>0)&&(AC>=CB)){var
C2=(AC/CB)|0;this.BU=this.BU+C2;AC=AC-(C2*CB);this.BE=this.BE+(C2*CB);}if((this.
BU>2)&&!this.Jb)this.BU=1;if((this.BU>=this.Jb)&&(this.Jb>0)){FE=true;Cy=0.000000;
}else if(AC>=0)Cy=1.000000-(AC*this.Tx);else if(Cy>=0.000000)Cy=0.000000;if(Cy!==
this.Im){this.Im=Cy;this.WZ(Cy);}return FE;},Ank:function(){var AC=(this.BE-this.
timer.AV)|0;var Ge=this.HB;var CB=this.HB;var FE=false;var Cy=this.Im;if((this.BU>
1)&&(AC<0)){var C2=(((-AC+CB)-1)/CB)|0;if((this.BU-C2)<=0)C2=this.BU-1;this.BU=this.
BU-C2;AC=AC+(C2*CB);this.BE=this.BE+(C2*CB);}if(((this.BU===1)&&(AC<0))&&(this.Jb>
0)){this.BU=0;AC=AC+Ge;this.BE=this.BE+Ge;}if(((this.BU===1)&&(AC<0))&&!this.Jb){
var C2=(((-AC+CB)-1)/CB)|0;AC=AC+(C2*CB);this.BE=this.BE+(C2*CB);}if(AC<0){FE=true;
Cy=1.000000;}else if(AC>=0)Cy=1.000000-(AC*this.Tx);else if(Cy>=0.000000)Cy=1.000000;
if(Cy!==this.Im){this.Im=Cy;this.WZ(Cy);}return FE;},Anj:function(){var AC=(this.
BE-this.timer.AV)|0;var Ge=this.HB;var CB=this.HB;var FE=false;var Cy=this.Im;if((
this.BU>1)&&(AC<0)){var C2=(((-AC+CB)-1)/CB)|0;if((this.BU-C2)<=0)C2=this.BU-1;this.
BU=this.BU-C2;AC=AC+(C2*CB);this.BE=this.BE+(C2*CB);}if(((this.BU===1)&&(AC<0))&&(
this.Jb>0)){this.BU=0;AC=AC+Ge;this.BE=this.BE+Ge;}if(((this.BU===1)&&(AC<0))&&!
this.Jb){var C2=(((-AC+CB)-1)/CB)|0;AC=AC+(C2*CB);this.BE=this.BE+(C2*CB);}if(AC<
0){FE=true;Cy=0.000000;}else if(AC>=0)Cy=AC*this.Tx;else if(Cy>=0.000000)Cy=0.000000;
if(Cy!==this.Im){this.Im=Cy;this.WZ(Cy);}return FE;},Ani:function(){var AC=(this.
timer.AV-this.BE)|0;if(AC<0)AC=-AC;var Ge=this.HB;var CB=this.HB;var FE=false;var
Cy=this.Im;if(!this.BU&&(AC>=Ge)){this.BU=1;AC=AC-Ge;this.BE=this.BE+Ge;}if((this.
BU>0)&&(AC>=CB)){var C2=(AC/CB)|0;this.BU=this.BU+C2;AC=AC-(C2*CB);this.BE=this.
BE+(C2*CB);}if((this.BU>2)&&!this.Jb)this.BU=1;if((this.BU>=this.Jb)&&(this.Jb>0
)){FE=true;Cy=1.000000;}else if(AC>=0)Cy=AC*this.Tx;else if(Cy>=0.000000)Cy=1.000000;
if(Cy!==this.Im){this.Im=Cy;this.WZ(Cy);}return FE;},Ai5:function(E){if(this.ZY===
E)return;this.ZY=E;if(!this.B7||!this.Mj)return;if(E)this.OH=-1;else this.OH=1;this.
BE=(this.timer.RL()*2)-this.BE;},P0:function(E){if(this.Of===E)return;this.Of=E;
this.EN=null;switch(E){case 24:{this.JI=-1.100000;this.LS=1.100000;}break;case 22:{
this.JI=-1.000000;this.LS=-2.000000;}break;case 23:{this.JI=2.000000;this.LS=1.000000;
}break;case 25:{this.JI=1.100000;this.LS=-1.100000;}break;case 0:{this.JI=0.000000;
this.LS=0.000000;}break;default:{this.JI=0.000000;this.LS=0.000000;}}this.AcV=(this.
JI===this.LS)&&(this.JI!==0.000000);this.Ahm=!this.AcV&&(this.JI!==this.LS);},Zt:
function(E){if(E<0)E=0;this.Jb=E;},R7:function(E){if(E<15)E=15;this.HB=E;this.Tx=
1.000000/E;},Aw:function(E){if(this.B7===E)return;this.B7=E;if(!E&&!!this.timer){
B.sY([this,this.DS],this.timer,0);this.timer=null;}if(E){this.timer=B._GetAutoObject(
D.K_);B.sL([this,this.DS],this.timer,0);this.Mj=0;B.lz([this,this.DS],this);}},Ub:
function(LK){},_Init:function(aArg){this.__proto__=D.DF;B.gx++;},_Done:function(
){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(C){var A;if((
A=this.EN)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.timer)&&(A._cycle!=C))A.
_Mark(A._cycle=C);if((A=this.Q7)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=
this.YQ)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.YP)&&((A=A[0])._cycle
!=C))A._Mark(A._cycle=C);if((A=this.G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:null
,_cycle:0,_observers:null,_className:"Effects::Effect"};D.Adu={Dl:null,G$:0,Fy:255
,Fx:0,Ub:function(LK){var Ch;this.G$=this.Fx+(Math.round((this.Fy-this.Fx)*LK)|0
);if(!!this.Dl)(Ch=this.Dl,Ch[2].call(Ch[0],this.G$));},_Init:function(aArg){D.DF.
_Init.call(this,aArg);this.__proto__=D.Adu;},_Mark:function(C){var A;D.DF._Mark.
call(this,C);if((A=this.Dl)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);},_className:
"Effects::Int32Effect"};D.ZU={Dl:null,G$:B.qL,Fy:BN,Fx:B.qL,Ub:function(LK){var Ch;
var x1=this.Fx[0];var y1=this.Fx[1];var x2=this.Fx[2];var y2=this.Fx[3];x1=x1+(Math.
round((this.Fy[0]-x1)*LK)|0);y1=y1+(Math.round((this.Fy[1]-y1)*LK)|0);x2=x2+(Math.
round((this.Fy[2]-x2)*LK)|0);y2=y2+(Math.round((this.Fy[3]-y2)*LK)|0);this.G$=[x1
,y1,x2,y2];if(!!this.Dl)(Ch=this.Dl,Ch[2].call(Ch[0],this.G$));},_Init:function(
aArg){D.DF._Init.call(this,aArg);this.__proto__=D.ZU;},_Mark:function(C){var A;D.
DF._Mark.call(this,C);if((A=this.Dl)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);}
,_className:"Effects::RectEffect"};D.CU={G$:0,Fy:1.000000,Fx:0,Ub:function(LK){this.
G$=this.Fx+((this.Fy-this.Fx)*LK);},_Init:function(aArg){D.DF._Init.call(this,aArg
);this.__proto__=D.CU;},_className:"Effects::FloatEffect"};D.Ac2={timer:null,Dl:
null,BU:0,BE:0,HB:1000,X9:1000,B7:false,Fx:false,Fy:true,DS:function(P){var Ch;if(
!this.timer)return;if(this.BU<0){this.BE=this.timer.AV;this.BU=0;}var AC=(this.timer.
AV-this.BE)|0;var Ge=this.HB;var CB=this.X9+this.HB;var Ab6=0;var JF=this.BU;if(
!JF&&(AC>=Ge)){JF=1;AC=AC-Ge;}if((JF>0)&&(AC>=CB)){var C2=(AC/CB)|0;AC=AC-(C2*CB
);JF=JF+C2;}if(JF>2)JF=1;if(JF!==this.BU){this.BE=this.timer.AV-(((A=AC)<0)?A+0x100000000:
A);this.BU=JF;}if(JF>0)Ab6=this.X9;if(!!this.Dl){if(AC>=Ab6)(Ch=this.Dl,Ch[2].call(
Ch[0],this.Fx));if((AC<Ab6)&&(JF>0))(Ch=this.Dl,Ch[2].call(Ch[0],this.Fy));}},R7:
function(E){if(E<100)E=100;this.HB=E;},AiQ:function(E){if(E<0)E=0;this.X9=E;},Aw:
function(E){if(this.B7===E)return;this.B7=E;if(!E&&!!this.timer){B.sY([this,this.
DS],this.timer,0);this.timer=null;}if(E){this.timer=B._GetAutoObject(D.K_);B.sL([
this,this.DS],this.timer,0);this.BU=-1;}},_Init:function(aArg){this.__proto__=D.
Ac2;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){},
_Mark:function(C){var A;if((A=this.timer)&&(A._cycle!=C))A._Mark(A._cycle=C);if((
A=this.Dl)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.G)&&(A._cycle!=C
))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"
};D.XL={Fj:null,Al:null,Ai:null,L:null,J:null,NB:null,Aco:null,Y2:null,IO:true,B7:
true,AfF:true,Ac0:false,Ac1:true,ZW:true,ZV:true,Mr:function(){if(!!this.Fj)this.
Fj.Mr();},Adv:function(){return true;},HL:function(){},Jf:function(){this.Mr();}
,_Init:function(aArg){this.__proto__=D.XL;B.gx++;},_Done:function(){this.__proto__=
null;B.gx--;},_ReInit:function(){},_Mark:function(C){var A;if((A=this.Fj)&&(A._cycle
!=C))A._Mark(A._cycle=C);if((A=this.Al)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=
this.Ai)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.L)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.J)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.NB)&&((A=
A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.Aco)&&((A=A[0])._cycle!=C))A._Mark(
A._cycle=C);if((A=this.Y2)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.
G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};D.Qv={Afl:B.qK,Agg:false,Adv:function(){return this.Agg;},HL:function(
){if(!this.IO&&!!this.J.L)this.J.Ah(false);if((!this.IO&&this.ZV)&&!!this.J.L)this.
J.L.EA(this.J);if(!this.B7)this.J.Aw(false);},Jf:function(){if(this.B7)this.J.Aw(
true);if((this.IO||this.Ac0)&&!this.J.L){this.J.Ah(false);this.L.I(this.J,0);}if(
this.IO&&this.ZW)this.J.L.E8(this.J);if(this.IO&&this.Ac1)this.J.L.Ad(this.J);if(
this.IO&&!this.AfF)this.J.H(B.uk(this.J.S,this.Afl));if(this.IO){this.J.Ll(255);
this.J.Ah(true);}if(!this.IO&&(this.L.BY===this.J))this.L.Ad(null);this.Agg=true;
this.Mr();},_Init:function(aArg){D.XL._Init.call(this,aArg);this.__proto__=D.Qv;
},_className:"Effects::VisibilityFader"};D.VI={Mt:function(){return null;},Ms:function(
){return null;},Ur:function(){return this.Mt();},Uq:function(){return this.Ms();
},_Init:function(aArg){this.__proto__=D.VI;B.gx++;},_Done:function(){this.__proto__=
null;B.gx--;},_ReInit:function(){},_Mark:function(C){var A;if((A=this.G)&&(A._cycle
!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};D.Aac={Mt:function(){var AL=B._NewObject(D.Qv,0);AL.IO=true;AL.B7=true;AL.Ac1=
false;AL.ZW=true;AL.AfF=false;AL.Y2=[this,this.AmY];return AL;},Ms:function(){var
AL=B._NewObject(D.Qv,0);AL.IO=false;AL.B7=false;AL.ZV=true;return AL;},Ur:function(
){var AL=D.VI.Ur.call(this);AL.ZW=false;AL.B7=true;return AL;},Uq:function(){var
AL=B._NewObject(D.Qv,0);AL.IO=false;AL.B7=true;AL.Ac0=true;AL.ZV=false;return AL;
},AmY:function(P){var A;var AL=(D.Qv.isPrototypeOf(P)?P:null);var Ax=[0,0,(A=AL.
L.S)[2]-A[0],A[3]-A[1]];var Df=[(A=AL.J.S)[2]-A[0],A[3]-A[1]];var pos=Ax.slice(0
,2);pos=[(Ax[0]+(((Ax[2]-Ax[0])/2)|0))-((Df[0]/2)|0),pos[1]];pos=[pos[0],(Ax[1]+(((
Ax[3]-Ax[1])/2)|0))-((Df[1]/2)|0)];AL.Afl=pos;},_Init:function(aArg){D.VI._Init.
call(this,aArg);this.__proto__=D.Aac;},_className:"Effects::ShowHideTransition"};
D.Of={AoF:0,AoW:1,AoY:2,AoX:3,Aoh:4,Aoj:5,Aoi:6,Apf:7,Aph:8,Apg:9,An0:10,An2:11,
An1:12,AnP:13,AnR:14,AnQ:15,Aoa:16,Aoc:17,Aob:18,AnW:19,AnY:20,AnX:21,An$:22,Aok:
23,An_:24,Aol:25,An5:26};D.Xr={Trigger:function(){B.Core.Timer.Trigger.call(this
);B.qJ(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=
D.Xr;},_className:"Effects::EffectTimerClass"};D.K_={_Init:function(){D.Xr._Init.
call(this,0);this.DI(15);this.Aw(true);},_variants:function(){return this;},_this:
null};D.VD={Fi:B.tY(12,0,null),Np:B.tY(12,0,null),_Init:function(aArg){(this.Fi=[
]).__proto__=D.VD.Fi;(this.Np=[]).__proto__=D.VD.Np;this.__proto__=D.VD;B.gx++;}
,_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(
C){var A;if((A=this.G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:
null,_className:"Effects::TimingList"};D.Uy={A2:null,A6:null,AdG:function(QM){var
AL=this.A6;while(!!AL){AL.HL();AL.J.M=AL.J.M&~0x40000;AL=AL.Ai;}AL=this.A6;while(
!!AL){B.lz(AL.Aco,AL);AL=AL.Ai;}},AdE:function(QM){var AL=this.A6;while(!!AL){B.
lz(AL.NB,AL);AL=AL.Ai;}this.A6=null;this.A2=null;},Jf:function(QM){var A;if(!this.
A6)this.Mr();var AL=this.A6;while(!!AL){AL.J.M=(AL.J.M|0x40000)&~0x20000;AL.J.O1=
null;AL=AL.Ai;}AL=this.A6;while(!!AL){(A=AL.Y2)?A[1].call(A[0],AL):null;AL.Jf();
AL=AL.Ai;}},Mr:function(){var AL=this.A6;while(!!AL&&AL.Adv())AL=AL.Ai;if(!AL)B.
Core.M1.Mr.call(this);},Ajs:function(B2){if(!B2)return;if(this.X_())throw new Error(
AZ);if(B2.Fj!==this)throw new Error(Ao);if(!!B2.Ai)B2.Ai.Al=B2.Al;else this.A2=B2.
Al;if(!!B2.Al)B2.Al.Ai=B2.Ai;else this.A6=B2.Ai;B2.Fj=null;B2.Ai=null;B2.Al=null;
if(!!B2.J)B2.J.O1=null;B.lz(B2.NB,B2);if(!this.A6)this.It();},AcZ:function(B2){if(
!B2)return;if(this.X_())throw new Error(CW);if(!!B2.Fj)throw new Error(Fz);B2.Al=
this.A2;B2.Ai=null;if(!!this.A2)this.A2.Ai=B2;else this.A6=B2;this.A2=B2;B2.Fj=this;
},_Init:function(aArg){B.Core.M1._Init.call(this,aArg);this.__proto__=D.Uy;},_Mark:
function(C){var A;B.Core.M1._Mark.call(this,C);if((A=this.A2)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.A6)&&(A._cycle!=C))A._Mark(A._cycle=C);},_className:"Effects::FaderTask"
};D.Si={_Init:function(){D.Aac._Init.call(this,0);},_variants:function(){return this;
},_this:null};
D._Init=function(){D.Adu.__proto__=D.DF;D.ZU.__proto__=D.DF;D.CU.__proto__=D.DF;D.
Qv.__proto__=D.XL;D.Aac.__proto__=D.VI;D.Xr.__proto__=B.Core.Timer;D.Uy.__proto__=
B.Core.M1;};D._ReInit=function(){var A;if((A=D.K_._this))A._ReInit();if((A=D.Si.
_this))A._ReInit();};D.Cl=function(C){var A;if((A=D.K_._this)&&(A._cycle!=C))A._Done(
D.K_._this=null);if((A=D.Si._this)&&(A._cycle!=C))A._Done(D.Si._this=null);};return D;
})();

/* Embedded Wizard */