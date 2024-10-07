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
uX=(function(){var A=EmWiApp;var D={};
var BR=[0,0,100,100];var A1="Trying to remove a fader from a task, which is actually running";
var An="The fader doesn\'t belong to this task";var Dy="Trying to add a fader to a task, which is actually running";
var EF="The fader belongs already to a task";
D.DS={E6:null,timer:null,Sc:null,Aab:null,Aaa:null,Pp:0,MO:0,Ml:0,J_:0,Ut:0.001000
,IM:0,B0:0,BL:0,JE:0,HZ:1000,O2:0,Cg:false,AbT:false,AeU:false,Ai_:false,D3:function(
P){var B;if(!this.timer)return;if(!this.MO){if(this.AbT)this.MO=-1;else this.MO=
1;this.Pp=this.MO;this.BL=this.timer.AZ;this.B0=0;this.IM=-1.000000;}var F0;if((
this.MO>0)&&(this.Pp>0))F0=this.Apf();else if((this.MO<0)&&(this.Pp<0))F0=this.Api(
);else if(this.MO>0)F0=this.Apg();else F0=this.Aph();if(F0){this.Aw(false);(B=this.
Sc)?B[1].call(B[0],this):null;(B=this.Aab)?B[1].call(B[0],this):null;}},Yi:function(
Z){var B;if(!this.E6&&(((this.O2===19)||(this.O2===20))||(this.O2===21))){var PR=
0.500000;var R;this.E6=A._NewObject(D.WL,0);this.E6.FC.Set(0,1.000000);this.E6.N8.
Set(0,1.000000);for(R=1;R<4;R=R+1){this.E6.FC.Set(R,this.E6.FC.Get(R-1)*0.707107
);this.E6.N8.Set(R,this.E6.N8.Get(R-1)*0.500000);PR=PR+this.E6.FC.Get(R);}var Aog=
1.000000/PR;this.E6.FC.Set(0,0.500000);PR=0.000000;for(R=0;R<4;R=R+1){this.E6.FC.
Set(R,this.E6.FC.Get(R)*Aog);PR=PR+this.E6.FC.Get(R);}this.E6.FC.Set(4,this.E6.FC.
Get(4)+(1.000000-PR));}switch(this.O2){case 1:Z=Math.pow(Z,3.000000);break;case 2:{
Z=1.000000-Z;Z=1.000000-Math.pow(Z,3.000000);}break;case 3:{Z=Z*2.000000;if(Z<1.000000
)Z=Math.pow(Z,3.000000)/2.000000;else{Z=2.000000-Z;Z=(2.000000-Math.pow(Z,3.000000
))*0.500000;}}break;case 4:Z=(Math.pow(2.718000,3.000000*Z)-1.000000)/19.079288;
break;case 5:{Z=1.000000-Z;Z=1.000000-((Math.pow(2.718000,3.000000*Z)-1.000000)/
19.079288);}break;case 6:{Z=Z*2.000000;if(Z<1.000000)Z=((Math.pow(2.718000,3.000000
*Z)-1.000000)/19.079288)/2.000000;else{Z=2.000000-Z;Z=(2.000000-((Math.pow(2.718000
,3.000000*Z)-1.000000)/19.079288))*0.500000;}}break;case 7:Z=1.000000-Math.cos((
Z*90.000000)*A.iq);break;case 8:Z=Math.sin((Z*90.000000)*A.iq);break;case 9:{Z=Z
*2.000000;if(Z<1.000000){Z=1.000000-Math.cos((Z*90.000000)*A.iq);Z=Z*0.500000;}else{
Z=2.000000-Z;Z=1.000000-Math.cos((Z*90.000000)*A.iq);Z=(2.000000-Z)*0.500000;}}break;
case 10:Z=1.000000-Math.sqrt(1.000000-(Z*Z));break;case 11:{Z=1.000000-Z;Z=Math.
sqrt(1.000000-(Z*Z));}break;case 12:{Z=Z*2.000000;if(Z<1.000000){Z=1.000000-Math.
sqrt(1.000000-(Z*Z));Z=Z*0.500000;}else{Z=2.000000-Z;Z=1.000000-Math.sqrt(1.000000-(
Z*Z));Z=(2.000000-Z)*0.500000;}}break;case 13:Z=((Z*Z)*Z)-((Z*0.500000)*Math.sin((
Z*180.000000)*A.iq));break;case 14:{Z=1.000000-Z;Z=((Z*Z)*Z)-((Z*0.500000)*Math.
sin((Z*180.000000)*A.iq));Z=1.000000-Z;}break;case 15:{Z=Z*2.000000;if(Z<1.000000
){Z=((Z*Z)*Z)-((Z*0.500000)*Math.sin((Z*180.000000)*A.iq));Z=Z*0.500000;}else{Z=
2.000000-Z;Z=((Z*Z)*Z)-((Z*0.500000)*Math.sin((Z*180.000000)*A.iq));Z=(2.000000-
Z)*0.500000;}}break;case 16:Z=((Z*Z)*Z)*Math.sin(((Z*90.000000)*13.000000)*A.iq);
break;case 17:{Z=1.000000-Z;Z=1.000000-(((Z*Z)*Z)*Math.sin(((Z*90.000000)*13.000000
)*A.iq));}break;case 18:{Z=Z*2.000000;if(Z<1.000000){Z=((Z*Z)*Z)*Math.sin(((Z*90.000000
)*13.000000)*A.iq);Z=Z*0.500000;}else{Z=2.000000-Z;Z=((Z*Z)*Z)*Math.sin(((Z*90.000000
)*13.000000)*A.iq);Z=(2.000000-Z)*0.500000;}}break;case 19:{var Kd=this.E6;var R=
0;var Kn=0.000000;var Gj=Kd.FC.Get(0);var Dq=1.000000-Z;while(Dq>Gj){R=R+1;Kn=Gj;
Gj=Gj+Kd.FC.Get(R);}Z=(Dq-Kn)/(Gj-Kn);if(!R)Z=1.000000-(Z*Z);else{Z=(2.000000*Z)-
1.000000;Z=Kd.N8.Get(R)*(1.000000-(Z*Z));}}break;case 20:{var Kd=this.E6;var R=0;
var Kn=0.000000;var Gj=Kd.FC.Get(0);while(Z>Gj){R=R+1;Kn=Gj;Gj=Gj+Kd.FC.Get(R);}
Z=(Z-Kn)/(Gj-Kn);if(!R)Z=Z*Z;else{Z=(2.000000*Z)-1.000000;Z=1.000000-(Kd.N8.Get(
R)*(1.000000-(Z*Z)));}}break;case 21:{var Kd=this.E6;var R=0;var Kn=0.000000;var
Gj=Kd.FC.Get(0);var Do=Z*2.000000;var Dq=Do-1.000000;if(Do<1.000000)Dq=-Dq;while(
Dq>Gj){R=R+1;Kn=Gj;Gj=Gj+Kd.FC.Get(R);}Dq=(Dq-Kn)/(Gj-Kn);if(!R)Dq=Dq*Dq;else{Dq=(
2.000000*Dq)-1.000000;Dq=1.000000-(Kd.N8.Get(R)*(1.000000-(Dq*Dq)));}if(Do<1.000000
)Z=0.500000*(1.000000-Dq);else Z=0.500000*(1.000000+Dq);}break;default:if(this.AeU
){var Do=Z;var UH=1.000000-Do;Z=((UH*Do)*(this.J_+1.000000))+(Do*Do);}else if(this.
Ai_){var Do=Z;var UH=1.000000-Do;var Ah4=Do*Do;var AoB=UH*UH;Z=(((AoB*Do)*(this.
J_+1.000000))+((UH*Ah4)*(this.Ml+2.000000)))+(Ah4*Do);}}this.U5(Z);(B=this.Aaa)?
B[1].call(B[0],this):null;},Api:function(){var AF=(this.timer.AZ-this.BL)|0;if(AF<
0)AF=-AF;var GI=this.HZ;var CJ=this.HZ;var F0=false;var CG=this.IM;if(!this.B0&&(
AF>=GI)){this.B0=1;AF=AF-GI;this.BL=this.BL+GI;}if((this.B0>0)&&(AF>=CJ)){var C$=(
AF/CJ)|0;this.B0=this.B0+C$;AF=AF-(C$*CJ);this.BL=this.BL+(C$*CJ);}if((this.B0>2
)&&!this.JE)this.B0=1;if((this.B0>=this.JE)&&(this.JE>0)){F0=true;CG=0.000000;}else
if(AF>=0)CG=1.000000-(AF*this.Ut);else if(CG>=0.000000)CG=0.000000;if(CG!==this.
IM){this.IM=CG;this.Yi(CG);}return F0;},Aph:function(){var AF=(this.BL-this.timer.
AZ)|0;var GI=this.HZ;var CJ=this.HZ;var F0=false;var CG=this.IM;if((this.B0>1)&&(
AF<0)){var C$=(((-AF+CJ)-1)/CJ)|0;if((this.B0-C$)<=0)C$=this.B0-1;this.B0=this.B0-
C$;AF=AF+(C$*CJ);this.BL=this.BL+(C$*CJ);}if(((this.B0===1)&&(AF<0))&&(this.JE>0
)){this.B0=0;AF=AF+GI;this.BL=this.BL+GI;}if(((this.B0===1)&&(AF<0))&&!this.JE){
var C$=(((-AF+CJ)-1)/CJ)|0;AF=AF+(C$*CJ);this.BL=this.BL+(C$*CJ);}if(AF<0){F0=true;
CG=1.000000;}else if(AF>=0)CG=1.000000-(AF*this.Ut);else if(CG>=0.000000)CG=1.000000;
if(CG!==this.IM){this.IM=CG;this.Yi(CG);}return F0;},Apg:function(){var AF=(this.
BL-this.timer.AZ)|0;var GI=this.HZ;var CJ=this.HZ;var F0=false;var CG=this.IM;if((
this.B0>1)&&(AF<0)){var C$=(((-AF+CJ)-1)/CJ)|0;if((this.B0-C$)<=0)C$=this.B0-1;this.
B0=this.B0-C$;AF=AF+(C$*CJ);this.BL=this.BL+(C$*CJ);}if(((this.B0===1)&&(AF<0))&&(
this.JE>0)){this.B0=0;AF=AF+GI;this.BL=this.BL+GI;}if(((this.B0===1)&&(AF<0))&&!
this.JE){var C$=(((-AF+CJ)-1)/CJ)|0;AF=AF+(C$*CJ);this.BL=this.BL+(C$*CJ);}if(AF<
0){F0=true;CG=0.000000;}else if(AF>=0)CG=AF*this.Ut;else if(CG>=0.000000)CG=0.000000;
if(CG!==this.IM){this.IM=CG;this.Yi(CG);}return F0;},Apf:function(){var AF=(this.
timer.AZ-this.BL)|0;if(AF<0)AF=-AF;var GI=this.HZ;var CJ=this.HZ;var F0=false;var
CG=this.IM;if(!this.B0&&(AF>=GI)){this.B0=1;AF=AF-GI;this.BL=this.BL+GI;}if((this.
B0>0)&&(AF>=CJ)){var C$=(AF/CJ)|0;this.B0=this.B0+C$;AF=AF-(C$*CJ);this.BL=this.
BL+(C$*CJ);}if((this.B0>2)&&!this.JE)this.B0=1;if((this.B0>=this.JE)&&(this.JE>0
)){F0=true;CG=1.000000;}else if(AF>=0)CG=AF*this.Ut;else if(CG>=0.000000)CG=1.000000;
if(CG!==this.IM){this.IM=CG;this.Yi(CG);}return F0;},AkO:function(E){if(this.AbT===
E)return;this.AbT=E;if(!this.Cg||!this.MO)return;if(E)this.Pp=-1;else this.Pp=1;
this.BL=(this.timer.SL()*2)-this.BL;},QS:function(E){if(this.O2===E)return;this.
O2=E;this.E6=null;switch(E){case 24:{this.J_=-1.100000;this.Ml=1.100000;}break;case
22:{this.J_=-1.000000;this.Ml=-2.000000;}break;case 23:{this.J_=2.000000;this.Ml=
1.000000;}break;case 25:{this.J_=1.100000;this.Ml=-1.100000;}break;case 0:{this.
J_=0.000000;this.Ml=0.000000;}break;default:{this.J_=0.000000;this.Ml=0.000000;}
}this.AeU=(this.J_===this.Ml)&&(this.J_!==0.000000);this.Ai_=!this.AeU&&(this.J_
!==this.Ml);},AaV:function(E){if(E<0)E=0;this.JE=E;},S4:function(E){if(E<15)E=15;
this.HZ=E;this.Ut=1.000000/E;},Aw:function(E){if(this.Cg===E)return;this.Cg=E;if(
!E&&!!this.timer){A.sY([this,this.D3],this.timer,0);this.timer=null;}if(E){this.
timer=A._GetAutoObject(D.Lv);A.sL([this,this.D3],this.timer,0);this.MO=0;A.lz([this
,this.D3],this);}},U5:function(Md){},_Init:function(aArg){this.__proto__=D.DS;A.
gx++;},_Done:function(){this.__proto__=null;A.gx--;},_ReInit:function(){},_Mark:
function(C){var B;if((B=this.E6)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.timer
)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.Sc)&&((B=B[0])._cycle!=C))B._Mark(
B._cycle=C);if((B=this.Aab)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);if((B=this.
Aaa)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);if((B=this.G)&&(B._cycle!=C))B._Mark(
B._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Effects::Effect"};D.Afx={
Dx:null,HD:0,FT:255,FS:0,U5:function(Md){var Bd;this.HD=this.FS+(Math.round((this.
FT-this.FS)*Md)|0);if(!!this.Dx)(Bd=this.Dx,Bd[2].call(Bd[0],this.HD));},_Init:function(
aArg){D.DS._Init.call(this,aArg);this.__proto__=D.Afx;},_Mark:function(C){var B;
D.DS._Mark.call(this,C);if((B=this.Dx)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);
},_className:"Effects::Int32Effect"};D.AbP={Dx:null,HD:A.qL,FT:BR,FS:A.qL,U5:function(
Md){var Bd;var x1=this.FS[0];var y1=this.FS[1];var x2=this.FS[2];var y2=this.FS[
3];x1=x1+(Math.round((this.FT[0]-x1)*Md)|0);y1=y1+(Math.round((this.FT[1]-y1)*Md
)|0);x2=x2+(Math.round((this.FT[2]-x2)*Md)|0);y2=y2+(Math.round((this.FT[3]-y2)*
Md)|0);this.HD=[x1,y1,x2,y2];if(!!this.Dx)(Bd=this.Dx,Bd[2].call(Bd[0],this.HD));
},_Init:function(aArg){D.DS._Init.call(this,aArg);this.__proto__=D.AbP;},_Mark:function(
C){var B;D.DS._Mark.call(this,C);if((B=this.Dx)&&((B=B[0])._cycle!=C))B._Mark(B.
_cycle=C);},_className:"Effects::RectEffect"};D.C2={HD:0,FT:1.000000,FS:0,U5:function(
Md){this.HD=this.FS+((this.FT-this.FS)*Md);},_Init:function(aArg){D.DS._Init.call(
this,aArg);this.__proto__=D.C2;},_className:"Effects::FloatEffect"};D.Ae2={timer:
null,Dx:null,B0:0,BL:0,HZ:1000,Zs:1000,Cg:false,FS:false,FT:true,D3:function(P){
var Bd;if(!this.timer)return;if(this.B0<0){this.BL=this.timer.AZ;this.B0=0;}var AF=(
this.timer.AZ-this.BL)|0;var GI=this.HZ;var CJ=this.Zs+this.HZ;var Ad4=0;var J7=
this.B0;if(!J7&&(AF>=GI)){J7=1;AF=AF-GI;}if((J7>0)&&(AF>=CJ)){var C$=(AF/CJ)|0;AF=
AF-(C$*CJ);J7=J7+C$;}if(J7>2)J7=1;if(J7!==this.B0){this.BL=this.timer.AZ-(((B=AF
)<0)?B+0x100000000:B);this.B0=J7;}if(J7>0)Ad4=this.Zs;if(!!this.Dx){if(AF>=Ad4)(
Bd=this.Dx,Bd[2].call(Bd[0],this.FS));if((AF<Ad4)&&(J7>0))(Bd=this.Dx,Bd[2].call(
Bd[0],this.FT));}},S4:function(E){if(E<100)E=100;this.HZ=E;},Akz:function(E){if(
E<0)E=0;this.Zs=E;},Aw:function(E){if(this.Cg===E)return;this.Cg=E;if(!E&&!!this.
timer){A.sY([this,this.D3],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(
D.Lv);A.sL([this,this.D3],this.timer,0);this.B0=-1;}},_Init:function(aArg){this.
__proto__=D.Ae2;A.gx++;},_Done:function(){this.__proto__=null;A.gx--;},_ReInit:function(
){},_Mark:function(C){var B;if((B=this.timer)&&(B._cycle!=C))B._Mark(B._cycle=C);
if((B=this.Dx)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);if((B=this.G)&&(B._cycle
!=C))B._Mark(B._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"
};D.Y8={FD:null,Ar:null,Al:null,L:null,J:null,Oi:null,Aep:null,Aan:null,I_:true,
Cg:true,Ahm:true,AeZ:false,Ae1:true,AbR:true,AbQ:true,M2:function(){if(!!this.FD
)this.FD.M2();},Afy:function(){return true;},H9:function(){},JH:function(){this.
M2();},_Init:function(aArg){this.__proto__=D.Y8;A.gx++;},_Done:function(){this.__proto__=
null;A.gx--;},_ReInit:function(){},_Mark:function(C){var B;if((B=this.FD)&&(B._cycle
!=C))B._Mark(B._cycle=C);if((B=this.Ar)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=
this.Al)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.L)&&(B._cycle!=C))B._Mark(
B._cycle=C);if((B=this.J)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.Oi)&&((B=
B[0])._cycle!=C))B._Mark(B._cycle=C);if((B=this.Aep)&&((B=B[0])._cycle!=C))B._Mark(
B._cycle=C);if((B=this.Aan)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);if((B=this.
G)&&(B._cycle!=C))B._Mark(B._cycle=C);},G:null,_cycle:0,_observers:null,_className:
"Effects::Fader"};D.Rt={AgX:A.qK,Ah6:false,Afy:function(){return this.Ah6;},H9:function(
){if(!this.I_&&!!this.J.L)this.J.Ab(false);if((!this.I_&&this.AbQ)&&!!this.J.L)this.
J.L.EC(this.J);if(!this.Cg)this.J.Aw(false);},JH:function(){if(this.Cg)this.J.Aw(
true);if((this.I_||this.AeZ)&&!this.J.L){this.J.Ab(false);this.L.I(this.J,0);}if(
this.I_&&this.AbR)this.J.L.Fr(this.J);if(this.I_&&this.Ae1)this.J.L.Af(this.J);if(
this.I_&&!this.Ahm)this.J.H(A.uk(this.J.X,this.AgX));if(this.I_){this.J.LO(255);
this.J.Ab(true);}if(!this.I_&&(this.L.BK===this.J))this.L.Af(null);this.Ah6=true;
this.M2();},_Init:function(aArg){D.Y8._Init.call(this,aArg);this.__proto__=D.Rt;
},_className:"Effects::VisibilityFader"};D.WP={M4:function(){return null;},M3:function(
){return null;},Vh:function(){return this.M4();},Vg:function(){return this.M3();
},_Init:function(aArg){this.__proto__=D.WP;A.gx++;},_Done:function(){this.__proto__=
null;A.gx--;},_ReInit:function(){},_Mark:function(C){var B;if((B=this.G)&&(B._cycle
!=C))B._Mark(B._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Effects::Transition"
};D.Ab9={M4:function(){var AT=A._NewObject(D.Rt,0);AT.I_=true;AT.Cg=true;AT.Ae1=
false;AT.AbR=true;AT.Ahm=false;AT.Aan=[this,this.AoT];return AT;},M3:function(){
var AT=A._NewObject(D.Rt,0);AT.I_=false;AT.Cg=false;AT.AbQ=true;return AT;},Vh:function(
){var AT=D.WP.Vh.call(this);AT.AbR=false;AT.Cg=true;return AT;},Vg:function(){var
AT=A._NewObject(D.Rt,0);AT.I_=false;AT.Cg=true;AT.AeZ=true;AT.AbQ=false;return AT;
},AoT:function(P){var B;var AT=(D.Rt.isPrototypeOf(P)?P:null);var AC=[0,0,(B=AT.
L.X)[2]-B[0],B[3]-B[1]];var Dp=[(B=AT.J.X)[2]-B[0],B[3]-B[1]];var pos=AC.slice(0
,2);pos=[(AC[0]+(((AC[2]-AC[0])/2)|0))-((Dp[0]/2)|0),pos[1]];pos=[pos[0],(AC[1]+(((
AC[3]-AC[1])/2)|0))-((Dp[1]/2)|0)];AT.AgX=pos;},_Init:function(aArg){D.WP._Init.
call(this,aArg);this.__proto__=D.Ab9;},_className:"Effects::ShowHideTransition"};
D.O2={AqO:0,Aq9:1,Aq$:2,Aq_:3,Aqk:4,Aqm:5,Aql:6,Arv:7,Arx:8,Arw:9,Ap2:10,Ap4:11,
Ap3:12,ApN:13,ApP:14,ApO:15,Aqd:16,Aqf:17,Aqe:18,ApY:19,Ap0:20,ApZ:21,Aqc:22,Aqo:
23,Aqb:24,Aqp:25,Ap8:26};D.YO={Trigger:function(){A.Core.Timer.Trigger.call(this
);A.qJ(this,0);},_Init:function(aArg){A.Core.Timer._Init.call(this,aArg);this.__proto__=
D.YO;},_className:"Effects::EffectTimerClass"};D.Lv={_Init:function(){D.YO._Init.
call(this,0);this.C3(15);this.Aw(true);},_variants:function(){return this;},_this:
null};D.WL={FC:A.tY(12,0,null),N8:A.tY(12,0,null),_Init:function(aArg){(this.FC=[
]).__proto__=D.WL.FC;(this.N8=[]).__proto__=D.WL.N8;this.__proto__=D.WL;A.gx++;}
,_Done:function(){this.__proto__=null;A.gx--;},_ReInit:function(){},_Mark:function(
C){var B;if((B=this.G)&&(B._cycle!=C))B._Mark(B._cycle=C);},G:null,_cycle:0,_observers:
null,_className:"Effects::TimingList"};D.Vs={A8:null,A5:null,AfI:function(RS){var
AT=this.A5;while(!!AT){AT.H9();AT.J.O=AT.J.O&~0x40000;AT=AT.Al;}AT=this.A5;while(
!!AT){A.lz(AT.Aep,AT);AT=AT.Al;}},AfG:function(RS){var AT=this.A5;while(!!AT){A.
lz(AT.Oi,AT);AT=AT.Al;}this.A5=null;this.A8=null;},JH:function(RS){var B;if(!this.
A5)this.M2();var AT=this.A5;while(!!AT){AT.J.O=(AT.J.O|0x40000)&~0x20000;AT.J.PM=
null;AT=AT.Al;}AT=this.A5;while(!!AT){(B=AT.Aan)?B[1].call(B[0],AT):null;AT.JH();
AT=AT.Al;}},M2:function(){var AT=this.A5;while(!!AT&&AT.Afy())AT=AT.Al;if(!AT)A.
Core.NH.M2.call(this);},Alf:function(Cb){if(!Cb)return;if(this.Zu())throw new Error(
A1);if(Cb.FD!==this)throw new Error(An);if(!!Cb.Al)Cb.Al.Ar=Cb.Ar;else this.A8=Cb.
Ar;if(!!Cb.Ar)Cb.Ar.Al=Cb.Al;else this.A5=Cb.Al;Cb.FD=null;Cb.Al=null;Cb.Ar=null;
if(!!Cb.J)Cb.J.PM=null;A.lz(Cb.Oi,Cb);if(!this.A5)this.IT();},AeY:function(Cb){if(
!Cb)return;if(this.Zu())throw new Error(Dy);if(!!Cb.FD)throw new Error(EF);Cb.Ar=
this.A8;Cb.Al=null;if(!!this.A8)this.A8.Al=Cb;else this.A5=Cb;this.A8=Cb;Cb.FD=this;
},_Init:function(aArg){A.Core.NH._Init.call(this,aArg);this.__proto__=D.Vs;},_Mark:
function(C){var B;A.Core.NH._Mark.call(this,C);if((B=this.A8)&&(B._cycle!=C))B._Mark(
B._cycle=C);if((B=this.A5)&&(B._cycle!=C))B._Mark(B._cycle=C);},_className:"Effects::FaderTask"
};D.Tc={_Init:function(){D.Ab9._Init.call(this,0);},_variants:function(){return this;
},_this:null};
D._Init=function(){D.Afx.__proto__=D.DS;D.AbP.__proto__=D.DS;D.C2.__proto__=D.DS;
D.Rt.__proto__=D.Y8;D.Ab9.__proto__=D.WP;D.YO.__proto__=A.Core.Timer;D.Vs.__proto__=
A.Core.NH;};D._ReInit=function(){var B;if((B=D.Lv._this))B._ReInit();if((B=D.Tc.
_this))B._ReInit();};D.Cx=function(C){var B;if((B=D.Lv._this)&&(B._cycle!=C))B._Done(
D.Lv._this=null);if((B=D.Tc._this)&&(B._cycle!=C))B._Done(D.Tc._this=null);};return D;
})();

/* Embedded Wizard */