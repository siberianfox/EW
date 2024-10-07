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
);if(EmWiApp.Core)throw new Error("The unit file 'Core.js' included twice!");EmWiApp.
Core=(function(){var A=EmWiApp;var D={};
var BR=[0,0];var A1=[0,0,0,0];var An="The view does not belong to this group";var
Dy="The dialog component is already presented";var EF="The dialog component is actually not presented";
var G7="No fader to perform the fade-in/out operation";var G8="Trying to use the same fader twice";
var GB="Trying to fade-in/out a group which belongs to another owner";var HH="No view to restack";
var G9="View is not in this group";var KW="No view to remove";var FU="No view to add";
var EG="View already in a group";var Fx="Recursive invalidate during active update cycle.";
var L_=[-8,-8,9,9];var O_="The method RestackTop() is not available in Core::VerticalList.";
var GC="The method Restack() is not available in Core::VerticalList.";var Ja="The method Remove() is not available in Core::VerticalList.";
var O$="The method Add() is not available in Core::VerticalList.";var Pa="The Slide Touch Handler:";
var N0="is already connected with a view.";var Ep="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var L$=[0,0,170,120];var N1="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var FV="Trying to cancel a task not belonging to this queue!";
var KX="Trying to enqueue a task twice!";
D.Bk={Al:null,Ar:null,L:null,BB:null,O:0x103,HA:0,DD:0x14,R5:function(At,RR){},AkP:
function(E){if(this.HA===E)return;this.HA=E;if(!!this.L){var MJ=this.Al;var AE=0;
while(!!MJ&&(E>MJ.HA)){MJ=MJ.Al;AE=AE+1;}MJ=this.Ar;while(!!MJ&&(E<MJ.HA)){MJ=MJ.
Ar;AE=AE-1;}if(!!AE)this.L.Ag6(this,AE);}},Hw:function(E){var B;var AE=E^this.DD;
if(!AE)return;this.DD=E;if(!!this.BB&&!((this.O&0x400)===0x400)){this.L.O=this.L.
O|0x5000;A.lz([B=this.L,B.D4],this);this.L.Av([0,0,(B=this.L.X)[2]-B[0],B[3]-B[1
]]);}if(!!this.BB&&((this.O&0x400)===0x400)){this.BB.Op.O=this.BB.Op.O|0x1000;this.
L.O=this.L.O|0x4000;A.lz([B=this.L,B.D4],this);}},GT:function(){var AL=this.L;while(
!!AL){var UP=(D.Root.isPrototypeOf(AL)?AL:null);if(!!UP)return UP;AL=AL.L;}return null;
},Fi:function(Bz,aClip,aOffset,AY,aBlend){},Df:function(A0){return null;},Ls:function(
A9,Au,E$,J2,K1){return null;},So:function(At,EH){return BR;},Nr:function(aOffset
,RQ){},GetExtent:function(){return A1;},Bn:function(Me,Pg){var B;if(((this.O&0x200
)===0x200))Me=Me&~0x400;var Aem=(this.O&~Pg)|Me;var N9=Aem^this.O;this.O=Aem;if(
!!this.L&&!!(N9&0x14)){var Ah7=((this.O&0x14)===0x14);if(Ah7&&!this.L.BK)this.L.
Af(this);if(!Ah7&&(this.L.BK===this))this.L.Af(this.L.Y_(this,0x14));}if(!!this.
L&&!!(N9&0x403))this.L.Av(this.GetExtent());if(((!!this.BB&&!!this.L)&&((Aem&0x400
)===0x400))&&((N9&0x1)===0x1)){this.O=this.O|0x800;this.L.O=this.L.O|0x4000;A.lz([
B=this.L,B.D4],this);}if(!!this.L&&((N9&0x400)===0x400)){this.BB=null;this.O=this.
O|0x800;this.L.O=this.L.O|0x4000;A.lz([B=this.L,B.D4],this);}},_Init:function(aArg
){this.__proto__=D.Bk;A.gx++;},_Done:function(){this.__proto__=null;A.gx--;},_ReInit:
function(){},_Mark:function(C){var B;if((B=this.Al)&&(B._cycle!=C))B._Mark(B._cycle=
C);if((B=this.Ar)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.L)&&(B._cycle!=C
))B._Mark(B._cycle=C);if((B=this.BB)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.
G)&&(B._cycle!=C))B._Mark(B._cycle=C);},G:null,_cycle:0,_observers:null,_className:
"Core::View"};D.QA={BP:A.qK,BO:A.qK,R5:function(At,RR){var As=A._NewObject(D.VJ,
0);this.BB=null;As.DM=this.getExtent();As.AC=At;As.Op=RR;As.MA=this.BO;As.MB=this.
BP;this.BB=As;},So:function(At,EH){var B;var BA=this.DD;var As=(D.VJ.isPrototypeOf(
B=this.BB)?B:null);var x1=As.DM[0];var y1=As.DM[1];var x2=As.DM[2];var y2=As.DM[
3];var Dz=[At[2]-At[0],At[3]-At[1]];var AV=x2-x1;var AI=y2-y1;var tmp;if(!EH){var
E5=[(B=As.AC)[2]-B[0],B[3]-B[1]];x1=x1-As.AC[0];y1=y1-As.AC[1];if(E5[0]!==Dz[0]){
var Cd=((BA&0x4)===0x4);var Ce=((BA&0x8)===0x8);var Gh=((BA&0x1)===0x1);if(!Cd&&(
Gh||!Ce))x1=((x1*Dz[0])/E5[0])|0;if(!Ce&&(Gh||!Cd)){x2=x2-As.AC[0];x2=((x2*Dz[0]
)/E5[0])|0;x2=x2-Dz[0];}else x2=x2-As.AC[2];x1=x1+At[0];x2=x2+At[2];if(!Gh){if(Cd&&
!Ce)x2=x1+AV;else if(!Cd&&Ce)x1=x2-AV;else{x1=x1+((((x2-x1)-AV)/2)|0);x2=x1+AV;}
}}else{x2=x2-As.AC[2];x1=x1+At[0];x2=x2+At[2];}if(E5[1]!==Dz[1]){var Cf=((BA&0x10
)===0x10);var Cc=((BA&0x20)===0x20);var Gi=((BA&0x2)===0x2);if(!Cf&&(Gi||!Cc))y1=((
y1*Dz[1])/E5[1])|0;if(!Cc&&(Gi||!Cf)){y2=y2-As.AC[1];y2=((y2*Dz[1])/E5[1])|0;y2=
y2-Dz[1];}else y2=y2-As.AC[3];y1=y1+At[1];y2=y2+At[3];if(!Gi){if(Cf&&!Cc)y2=y1+AI;
else if(!Cf&&Cc)y1=y2-AI;else{y1=y1+((((y2-y1)-AI)/2)|0);y2=y1+AI;}}}else{y2=y2-
As.AC[3];y1=y1+At[1];y2=y2+At[3];}}else{switch(EH){case 3:{x1=At[0];x2=x1+AV;}break;
case 4:{x2=At[2];x1=x2-AV;}break;case 1:{y1=At[1];y2=y1+AI;}break;case 2:{y2=At[
3];y1=y2-AI;}break;default:;}if((EH===3)||(EH===4)){var Cf=((BA&0x10)===0x10);var
Cc=((BA&0x20)===0x20);var Gi=((BA&0x2)===0x2);if(Gi){y1=At[1];y2=At[3];}else if(
Cf&&!Cc){y1=At[1];y2=y1+AI;}else if(Cc&&!Cf){y2=At[3];y1=y2-AI;}else{y1=At[1]+((((
At[3]-At[1])-AI)/2)|0);y2=y1+AI;}}if((EH===1)||(EH===2)){var Cd=((BA&0x4)===0x4);
var Ce=((BA&0x8)===0x8);var Gh=((BA&0x1)===0x1);if(Gh){x1=At[0];x2=At[2];}else if(
Cd&&!Ce){x1=At[0];x2=x1+AV;}else if(Ce&&!Cd){x2=At[2];x1=x2-AV;}else{x1=At[0]+((((
At[2]-At[0])-AV)/2)|0);x2=x1+AV;}}}As.isEmpty=(x1>=x2)||(y1>=y2);AV=x2-x1;AI=y2-
y1;if(As.MB[0]<As.MA[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(As.MB[1]<As.MA[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.O&0x100)===0x100
)){this.BO=[x1,y1];this.BP=[x2,y2];}else{this.AR([x1,y1]);this.AP([x2,y2]);this.
BB=As;}return[AV,AI];},Nr:function(aOffset,RQ){if(RQ){this.BO=A.tV(this.BO,aOffset
);this.BP=A.tV(this.BP,aOffset);}else{this.AR(A.tV(this.BO,aOffset));this.AP(A.tV(
this.BP,aOffset));}},GetExtent:function(){if(!!this.BB&&this.BB.isEmpty)return A1;
return this.getExtent();},getExtent:function(){var x1=this.BO[0];var y1=this.BO[
1];var x2=this.BP[0];var y2=this.BP[1];var AV=x2-x1;var AI=y2-y1;var tmp;if(AV<0
)AV=-AV;if(AI<0)AI=-AI;if(AV>=AI){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(AI>=AV){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},AP:function(E){var B;if(A.tH(E,this.BP
))return;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent());this.BB=null;
this.BP=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent());if((!!this.
L&&((this.O&0x400)===0x400))&&!((this.L.O&0x2000)===0x2000)){this.O=this.O|0x800;
this.L.O=this.L.O|0x4000;A.lz([B=this.L,B.D4],this);}},AR:function(E){var B;if(A.
tH(E,this.BO))return;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent(
));this.BB=null;this.BO=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent(
));if((!!this.L&&((this.O&0x400)===0x400))&&!((this.L.O&0x2000)===0x2000)){this.
O=this.O|0x800;this.L.O=this.L.O|0x4000;A.lz([B=this.L,B.D4],this);}},_Init:function(
aArg){D.Bk._Init.call(this,aArg);this.__proto__=D.QA;},_className:"Core::LineView"
};D.I4={Dj:A.qK,DV:A.qK,BP:A.qK,BO:A.qK,R5:function(At,RR){var As=A._NewObject(D.
VK,0);this.BB=null;As.DM=this.GetExtent();As.AC=At;As.Op=RR;As.MA=this.BO;As.MB=
this.BP;As.UM=this.DV;As.UN=this.Dj;this.BB=As;},So:function(At,EH){var B;var BA=
this.DD;var As=(D.VK.isPrototypeOf(B=this.BB)?B:null);var x1=As.DM[0];var y1=As.
DM[1];var x2=As.DM[2];var y2=As.DM[3];var Dz=[At[2]-At[0],At[3]-At[1]];var AV=x2-
x1;var AI=y2-y1;if(!EH){var E5=[(B=As.AC)[2]-B[0],B[3]-B[1]];x1=x1-As.AC[0];y1=y1-
As.AC[1];if(E5[0]!==Dz[0]){var Cd=((BA&0x4)===0x4);var Ce=((BA&0x8)===0x8);var Gh=((
BA&0x1)===0x1);if(!Cd&&(Gh||!Ce))x1=((x1*Dz[0])/E5[0])|0;if(!Ce&&(Gh||!Cd)){x2=x2-
As.AC[0];x2=((x2*Dz[0])/E5[0])|0;x2=x2-Dz[0];}else x2=x2-As.AC[2];x1=x1+At[0];x2=
x2+At[2];if(!Gh){if(Cd&&!Ce)x2=x1+AV;else if(!Cd&&Ce)x1=x2-AV;else{x1=x1+((((x2-
x1)-AV)/2)|0);x2=x1+AV;}}}else{x2=x2-As.AC[2];x1=x1+At[0];x2=x2+At[2];}if(E5[1]!==
Dz[1]){var Cf=((BA&0x10)===0x10);var Cc=((BA&0x20)===0x20);var Gi=((BA&0x2)===0x2
);if(!Cf&&(Gi||!Cc))y1=((y1*Dz[1])/E5[1])|0;if(!Cc&&(Gi||!Cf)){y2=y2-As.AC[1];y2=((
y2*Dz[1])/E5[1])|0;y2=y2-Dz[1];}else y2=y2-As.AC[3];y1=y1+At[1];y2=y2+At[3];if(!
Gi){if(Cf&&!Cc)y2=y1+AI;else if(!Cf&&Cc)y1=y2-AI;else{y1=y1+((((y2-y1)-AI)/2)|0);
y2=y1+AI;}}}else{y2=y2-As.AC[3];y1=y1+At[1];y2=y2+At[3];}}else{switch(EH){case 3:{
x1=At[0];x2=x1+AV;}break;case 4:{x2=At[2];x1=x2-AV;}break;case 1:{y1=At[1];y2=y1+
AI;}break;case 2:{y2=At[3];y1=y2-AI;}break;default:;}if((EH===3)||(EH===4)){var Cf=((
BA&0x10)===0x10);var Cc=((BA&0x20)===0x20);var Gi=((BA&0x2)===0x2);if(Gi){y1=At[
1];y2=At[3];}else if(Cf&&!Cc){y1=At[1];y2=y1+AI;}else if(Cc&&!Cf){y2=At[3];y1=y2-
AI;}else{y1=At[1]+((((At[3]-At[1])-AI)/2)|0);y2=y1+AI;}}if((EH===1)||(EH===2)){var
Cd=((BA&0x4)===0x4);var Ce=((BA&0x8)===0x8);var Gh=((BA&0x1)===0x1);if(Gh){x1=At[
0];x2=At[2];}else if(Cd&&!Ce){x1=At[0];x2=x1+AV;}else if(Ce&&!Cd){x2=At[2];x1=x2-
AV;}else{x1=At[0]+((((At[2]-At[0])-AV)/2)|0);x2=x1+AV;}}}As.isEmpty=(x1>=x2)||(y1>=
y2);AV=(x2-x1)-1;AI=(y2-y1)-1;var Mq=As.DM[0];var Mr=As.DM[1];var K6=(As.DM[2]-Mq
)-1;var K5=(As.DM[3]-Mr)-1;if(!K6)K6=1;if(!K5)K5=1;if(((this.O&0x100)===0x100)){
this.BO=[x1+((((As.MA[0]-Mq)*AV)/K6)|0),y1+((((As.MA[1]-Mr)*AI)/K5)|0)];this.BP=[
x1+((((As.MB[0]-Mq)*AV)/K6)|0),y1+((((As.MB[1]-Mr)*AI)/K5)|0)];this.DV=[x1+((((As.
UM[0]-Mq)*AV)/K6)|0),y1+((((As.UM[1]-Mr)*AI)/K5)|0)];this.Dj=[x1+((((As.UN[0]-Mq
)*AV)/K6)|0),y1+((((As.UN[1]-Mr)*AI)/K5)|0)];}else{this.AR([x1+((((As.MA[0]-Mq)*
AV)/K6)|0),y1+((((As.MA[1]-Mr)*AI)/K5)|0)]);this.AP([x1+((((As.MB[0]-Mq)*AV)/K6)|
0),y1+((((As.MB[1]-Mr)*AI)/K5)|0)]);this.E8([x1+((((As.UM[0]-Mq)*AV)/K6)|0),y1+((((
As.UM[1]-Mr)*AI)/K5)|0)]);this.Fn([x1+((((As.UN[0]-Mq)*AV)/K6)|0),y1+((((As.UN[1
]-Mr)*AI)/K5)|0)]);this.BB=As;}return[AV+1,AI+1];},Nr:function(aOffset,RQ){if(RQ
){this.BO=A.tV(this.BO,aOffset);this.BP=A.tV(this.BP,aOffset);this.DV=A.tV(this.
DV,aOffset);this.Dj=A.tV(this.Dj,aOffset);}else{this.AR(A.tV(this.BO,aOffset));this.
AP(A.tV(this.BP,aOffset));this.E8(A.tV(this.DV,aOffset));this.Fn(A.tV(this.Dj,aOffset
));}},GetExtent:function(){if(!!this.BB&&this.BB.isEmpty)return A1;var x1=this.BO[
0];var y1=this.BO[1];var x2=this.DV[0];var y2=this.DV[1];if((((this.Dj[0]!==x1)||(
this.BP[1]!==y1))||(this.BP[0]!==x2))||(this.Dj[1]!==y2)){if(this.BP[0]<x1)x1=this.
BP[0];if(this.DV[0]<x1)x1=this.DV[0];if(this.Dj[0]<x1)x1=this.Dj[0];if(this.BP[1
]<y1)y1=this.BP[1];if(this.DV[1]<y1)y1=this.DV[1];if(this.Dj[1]<y1)y1=this.Dj[1];
if(this.BO[0]>x2)x2=this.BO[0];if(this.BP[0]>x2)x2=this.BP[0];if(this.Dj[0]>x2)x2=
this.Dj[0];if(this.BO[1]>y2)y2=this.BO[1];if(this.BP[1]>y2)y2=this.BP[1];if(this.
Dj[1]>y2)y2=this.Dj[1];}else{var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},Fn:function(E){var B;if(A.tH(E,this.
Dj))return;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent());this.BB=
null;this.Dj=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent());if((
!!this.L&&((this.O&0x400)===0x400))&&!((this.L.O&0x2000)===0x2000)){this.O=this.
O|0x800;this.L.O=this.L.O|0x4000;A.lz([B=this.L,B.D4],this);}},E8:function(E){var
B;if(A.tH(E,this.DV))return;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent(
));this.BB=null;this.DV=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent(
));if((!!this.L&&((this.O&0x400)===0x400))&&!((this.L.O&0x2000)===0x2000)){this.
O=this.O|0x800;this.L.O=this.L.O|0x4000;A.lz([B=this.L,B.D4],this);}},AP:function(
E){var B;if(A.tH(E,this.BP))return;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.
GetExtent());this.BB=null;this.BP=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(
this.GetExtent());if((!!this.L&&((this.O&0x400)===0x400))&&!((this.L.O&0x2000)===
0x2000)){this.O=this.O|0x800;this.L.O=this.L.O|0x4000;A.lz([B=this.L,B.D4],this);
}},AR:function(E){var B;if(A.tH(E,this.BO))return;if(!!this.L&&((this.O&0x1)===0x1
))this.L.Av(this.GetExtent());this.BB=null;this.BO=E;if(!!this.L&&((this.O&0x1)===
0x1))this.L.Av(this.GetExtent());if((!!this.L&&((this.O&0x400)===0x400))&&!((this.
L.O&0x2000)===0x2000)){this.O=this.O|0x800;this.L.O=this.L.O|0x4000;A.lz([B=this.
L,B.D4],this);}},Zv:function(EX){var CA=A.tY(4,A.qK,null);var R=0;var CC=3;var Ad9=
false;var Ad_=false;CA.Set(0,this.BO);CA.Set(1,this.BP);CA.Set(2,this.DV);CA.Set(
3,this.Dj);while(R<4){var Ajb=CA.Get(R)[0];var Yp=CA.Get(R)[1];var ApB=CA.Get(CC
)[0];var AeV=CA.Get(CC)[1];if(((Yp>EX[1])!==(AeV>EX[1]))||((Yp<EX[1])!==(AeV<EX[
1]))){var Hh=((((ApB-Ajb)*(EX[1]-Yp))/(AeV-Yp))|0)+Ajb;if(EX[0]>Hh)Ad9=!Ad9;if(EX[
0]<Hh)Ad_=!Ad_;}CC=R;R=R+1;}return Ad9||Ad_;},AjL:function(){return((((this.BO[0
]===this.Dj[0])&&(this.BP[0]===this.DV[0]))&&(this.BO[1]===this.BP[1]))&&(this.DV[
1]===this.Dj[1]))||((((this.BO[0]===this.BP[0])&&(this.DV[0]===this.Dj[0]))&&(this.
BO[1]===this.Dj[1]))&&(this.BP[1]===this.DV[1]));},_Init:function(aArg){D.Bk._Init.
call(this,aArg);this.__proto__=D.I4;},_className:"Core::QuadView"};D.Cq={X:A.qL,
R5:function(At,RR){var As=A._NewObject(D.Qz,0);As.DM=this.X;As.AC=At;As.Op=RR;this.
BB=As;},So:function(At,EH){var B;var BA=this.DD;var As=this.BB;var x1=As.DM[0];var
y1=As.DM[1];var x2=As.DM[2];var y2=As.DM[3];var Dz=[At[2]-At[0],At[3]-At[1]];var
AV=x2-x1;var AI=y2-y1;if(!EH){var E5=[(B=As.AC)[2]-B[0],B[3]-B[1]];x1=x1-As.AC[0
];y1=y1-As.AC[1];if(E5[0]!==Dz[0]){var Cd=((BA&0x4)===0x4);var Ce=((BA&0x8)===0x8
);var Gh=((BA&0x1)===0x1);if(!Cd&&(Gh||!Ce))x1=((x1*Dz[0])/E5[0])|0;if(!Ce&&(Gh||
!Cd)){x2=x2-As.AC[0];x2=((x2*Dz[0])/E5[0])|0;x2=x2-Dz[0];}else x2=x2-As.AC[2];x1=
x1+At[0];x2=x2+At[2];if(!Gh){if(Cd&&!Ce)x2=x1+AV;else if(!Cd&&Ce)x1=x2-AV;else{x1=
x1+((((x2-x1)-AV)/2)|0);x2=x1+AV;}}}else{x2=x2-As.AC[2];x1=x1+At[0];x2=x2+At[2];
}if(E5[1]!==Dz[1]){var Cf=((BA&0x10)===0x10);var Cc=((BA&0x20)===0x20);var Gi=((
BA&0x2)===0x2);if(!Cf&&(Gi||!Cc))y1=((y1*Dz[1])/E5[1])|0;if(!Cc&&(Gi||!Cf)){y2=y2-
As.AC[1];y2=((y2*Dz[1])/E5[1])|0;y2=y2-Dz[1];}else y2=y2-As.AC[3];y1=y1+At[1];y2=
y2+At[3];if(!Gi){if(Cf&&!Cc)y2=y1+AI;else if(!Cf&&Cc)y1=y2-AI;else{y1=y1+((((y2-
y1)-AI)/2)|0);y2=y1+AI;}}}else{y2=y2-As.AC[3];y1=y1+At[1];y2=y2+At[3];}}else{switch(
EH){case 3:{x1=At[0];x2=x1+AV;}break;case 4:{x2=At[2];x1=x2-AV;}break;case 1:{y1=
At[1];y2=y1+AI;}break;case 2:{y2=At[3];y1=y2-AI;}break;default:;}if((EH===3)||(EH===
4)){var Cf=((BA&0x10)===0x10);var Cc=((BA&0x20)===0x20);var Gi=((BA&0x2)===0x2);
if(Gi){y1=At[1];y2=At[3];}else if(Cf&&!Cc){y1=At[1];y2=y1+AI;}else if(Cc&&!Cf){y2=
At[3];y1=y2-AI;}else{y1=At[1]+((((At[3]-At[1])-AI)/2)|0);y2=y1+AI;}}if((EH===1)||(
EH===2)){var Cd=((BA&0x4)===0x4);var Ce=((BA&0x8)===0x8);var Gh=((BA&0x1)===0x1);
if(Gh){x1=At[0];x2=At[2];}else if(Cd&&!Ce){x1=At[0];x2=x1+AV;}else if(Ce&&!Cd){x2=
At[2];x1=x2-AV;}else{x1=At[0]+((((At[2]-At[0])-AV)/2)|0);x2=x1+AV;}}}As.isEmpty=(
x1>=x2)||(y1>=y2);if(((this.O&0x100)===0x100))this.X=[x1,y1,x2,y2];else{this.H([
x1,y1,x2,y2]);this.BB=As;}return[x2-x1,y2-y1];},Nr:function(aOffset,RQ){if(RQ)this.
X=A.tX(this.X,aOffset);else this.H(A.tX(this.X,aOffset));},GetExtent:function(){
return this.X;},H:function(E){var B;if(A.tI(E,this.X))return;if(!!this.L&&((this.
O&0x1)===0x1))this.L.Av(this.X);this.BB=null;this.X=E;if(!!this.L&&((this.O&0x1)===
0x1))this.L.Av(this.X);if((!!this.L&&((this.O&0x400)===0x400))&&!((this.L.O&0x2000
)===0x2000)){this.O=this.O|0x800;this.L.O=this.L.O|0x4000;A.lz([B=this.L,B.D4],this
);}},AnP:function(HV){this.H(HV);},AjW:function(){return this.X;},_Init:function(
aArg){D.Bk._Init.call(this,aArg);this.__proto__=D.Cq;},_className:"Core::RectView"
};D.J={A5:null,A8:null,XO:null,CU:null,CF:null,II:null,PM:null,BK:null,Ib:255,Ap:
function(aArg){this.AW();},Fi:function(Bz,aClip,aOffset,AY,aBlend){var B;AY=((AY+
1)*this.Ib)>>8;aBlend=aBlend&&((this.O&0x2)===0x2);if(!this.CU)this.Ah0(Bz,aClip
,A.tV(aOffset,this.X.slice(0,2)),AY,aBlend);else{var Bl=255|(255<<8)|(255<<16)|((
AY&0xFF)<<24);this.CU.Update();Bz.Ae7(aClip,this.CU,0,A.tX(this.X,aOffset),BR,Bl
,Bl,Bl,Bl,aBlend);}},Ls:function(A9,Au,E$,J2,K1){var B;var Ac=this.A8;var Ps=null;
var Y=A1;var F_=null;var Aei=!!this.II&&(!!this.II.GD||!!this.II.A5);if(((B=A.it(
A9,this.X))[0]>=B[2])||(B[1]>=B[3]))return null;A9=A.tW(A9,this.X.slice(0,2));while(
!!Ac){if(((Ac.O&0x400)===0x400)&&!F_){F_=Ac.Ar;while(!!F_&&!((F_.O&0x200)===0x200
))F_=F_.Ar;if(!!F_)Y=A.it(A9,F_.GetExtent());else Y=A1;}if(F_===Ac){F_=null;Y=A1;
}if((((((Ac.O&0x8)===0x8)&&((Ac.O&0x10)===0x10))&&!((Ac.O&0x40000)===0x40000))&&
!((Ac.O&0x20000)===0x20000))&&(!((Ac.O&0x10000)===0x10000)||((this.CF.Cl===Ac)&&
!Aei))){var DM=Ac.GetExtent();var XF=J2;var Pn=null;if(XF===Ac)XF=null;if(((Ac.O&
0x400)===0x400)){if(!(((B=A.it(DM,Y))[0]>=B[2])||(B[1]>=B[3])))Pn=Ac.Ls(Y,Au,E$,
XF,K1);}else if(!(((B=A.it(DM,A9))[0]>=B[2])||(B[1]>=B[3]))||(J2===Ac))Pn=Ac.Ls(
A9,Au,E$,XF,K1);Ac=Ac.Ar;if(!!Pn){if(!Ps||((Pn.Sw<Ps.Sw)&&(Pn.Sw>=0)))Ps=Pn;if(!
Pn.Sw)Ac=null;}}else Ac=Ac.Ar;}return Ps;},Bn:function(Me,Pg){var B;var AoG=this.
O;D.Cq.Bn.call(this,Me,Pg);var N9=this.O^AoG;if(!!this.BK&&((N9&0x40)===0x40)){if(((
this.O&0x40)===0x40))this.BK.Bn(0x40,0x0);else this.BK.Bn(0x0,0x40);}if(!!this.CF&&((
N9&0x40)===0x40)){if(((this.O&0x40)===0x40)&&((this.CF.Cl.O&0x14)===0x14))this.CF.
Cl.Bn(0x40,0x0);else this.CF.Cl.Bn(0x0,0x40);}if(!!N9){this.O=this.O|0x8000;A.lz([
this,this.D4],this);}},H:function(E){var B;if(A.tI(E,this.X))return;var Oh=[(B=this.
X)[2]-B[0],B[3]-B[1]];var XQ=[E[2]-E[0],E[3]-E[1]];var PP=!A.tH(Oh,XQ);if(PP&&!!
this.CU){this.CU.QM(XQ);A.qJ(this,0);A.qJ(this.CU,0);}D.Cq.H.call(this,E);if((PP&&(
Oh[0]>0))&&(Oh[1]>0)){var AC=[].concat(BR,Oh);var Ac=this.A5;while(!!Ac){if((!Ac.
BB&&(Ac.DD!==0x14))&&!((Ac.O&0x400)===0x400))Ac.R5(AC,null);Ac=Ac.Al;}}if(PP){this.
O=this.O|0x5000;A.lz([this,this.D4],this);}},AiW:function(A0){var Ain=(D.KeyEvent.
isPrototypeOf(A0)?A0:null);var Jg=this.XO;if(!Ain)return null;while(!!Jg&&(!Jg.Cg||
!Jg.Df(Ain)))Jg=Jg.Al;return Jg;},Apw:function(P){if(!!this.CU){this.CU.Vt(this.
CU.Fj,this.CU.Fj,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Ah0(this.
CU,this.CU.Fj,BR,255,true);}},Ah0:function(Bz,aClip,aOffset,AY,aBlend){var B;var
Ac=this.A5;var AhW=A1;var AiU=true;this.Ajy(Bz,aClip,aOffset,AY,aBlend);while(!!
Ac){if(((Ac.O&0x200)===0x200)){var AiT=(D.Fq.isPrototypeOf(Ac)?Ac:null);AhW=A.it(
aClip,A.tX(AiT.X,aOffset));AiU=((AiT.O&0x1)===0x1);}if(((Ac.O&0x1)===0x1)){if(((
Ac.O&0x400)===0x400)){if(AiU){var Y=A.it(A.tX(Ac.GetExtent(),aOffset),AhW);if(!((
Y[0]>=Y[2])||(Y[1]>=Y[3])))Ac.Fi(Bz,Y,aOffset,AY,aBlend);}}else{var Y=A.it(A.tX(
Ac.GetExtent(),aOffset),aClip);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])))Ac.Fi(Bz,Y,aOffset
,AY,aBlend);}}Ac=Ac.Al;}this.AjB(Bz,aClip,aOffset,AY,aBlend);},Apa:function(){var
B;var Ad7=((this.O&0x1000)===0x1000);var Mu=[0,0,(B=this.X)[2]-B[0],B[3]-B[1]];var
K7=false;var R3=A1;var Ad5=A1;var Ac=this.A8;var F_=null;while(!!Ac){if(((Ac.O&0x800
)===0x800)){K7=true;Ac.O=Ac.O&~0x800;}if(K7&&((Ac.O&0x200)===0x200))K7=false;Ac=
Ac.Ar;}K7=false;Ac=this.A5;if(Ad7){this.O=this.O&~0x1000;Ad7=!((Mu[0]>=Mu[2])||(
Mu[1]>=Mu[3]));}this.O=this.O|0x2000;while(!!Ac){if(((Ac.O&0x400)===0x400)){if(!
!Ac.BB&&(Ac.BB.Op!==F_))Ac.BB=null;if((!Ac.BB&&K7)&&(Ac.DD!==0x14))Ac.R5(Ad5,F_);
}if(!!Ac.BB){if(Ad7&&!((Ac.O&0x400)===0x400))Ac.So(Mu,0);if(K7&&((Ac.O&0x400)===
0x400))Ac.So(Ad5,0);}if(((Ac.O&0x200)===0x200)){K7=((Ac.O&0x1000)===0x1000);F_=(
D.Fq.isPrototypeOf(Ac)?Ac:null);if(K7){Ac.O=Ac.O&~0x1000;R3=A.tX(F_.X,F_.Bp);Ad5=
R3;K7=!((R3[0]>=R3[2])||(R3[1]>=R3[3]));}if(K7)this.Av(F_.X);}Ac=Ac.Al;}this.O=this.
O&~0x2000;this.WR([Mu[2]-Mu[0],Mu[3]-Mu[1]]);},D4:function(P){var B;var Apy=((this.
O&0x1000)===0x1000);if(((this.O&0x4000)===0x4000)){this.O=this.O&~0x4000;this.Apa(
);}if(((this.O&0x8000)===0x8000)||Apy){this.O=this.O&~0x8000;this.Bq(this.O);}},
Af:function(E){var B;if(!!E&&(E.L!==this))throw new Error(An);if(!!E&&!((E.O&0x14
)===0x14))E=null;if(!!E&&((E.O&0x10000)===0x10000))E=null;if(E===this.BK)return;
if(!!this.BK)this.BK.Bn(0x0,0x60);this.BK=E;if(!!E){if(((this.O&0x40)===0x40))E.
Bn(0x60,0x0);else E.Bn(0x20,0x0);}},LN:function(E){var B;if(!!this.CU===E)return;
if(E){this.CU=A._NewObject(A.Graphics.Canvas,0);this.CU.QM([(B=this.X)[2]-B[0],B[
3]-B[1]]);this.CU.VV=[this,this.Apw];}else{this.CU.VV=null;this.CU.QM(BR);this.CU=
null;}if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.X);A.qJ(this,0);},Aw:function(
E){if(E)this.Bn(0x10,0x0);else this.Bn(0x0,0x10);},LO:function(E){var B;if(E>255
)E=255;if(E<0)E=0;if(E===this.Ib)return;this.Ib=E;if(!!this.L&&((this.O&0x1)===0x1
))this.L.Av(this.X);},Aj7:function(E){if(E)this.Bn(0x2,0x0);else this.Bn(0x0,0x2
);},KD:function(){var B;return((this.O&0x1)===0x1);},Ab:function(E){if(E)this.Bn(
0x1,0x0);else this.Bn(0x0,0x1);},AjB:function(Bz,aClip,aOffset,AY,aBlend){},Ajy:
function(Bz,aClip,aOffset,AY,aBlend){},GetMinimalSize:function(){return BR;},Ajs:
function(){var C6=this.CF;var Ea=0;while(!!C6){Ea=Ea+1;C6=C6.Al;}return Ea;},WG:
function(DX,Hc,Mb,J3,J4,Ud,Jf,K0,Ha,G_,G$){var B;if(!this.CF){this.C9(DX,Hc,Mb,J3
,J4,null,null,Ha,G_,G$);return;}var Og=this.CF;var D0=Og.Al;if(((DX.O&0x10000)===
0x10000)&&(this.CF.Cl!==DX))throw new Error(Dy);var Kg=A._NewObject(D.YJ,0);var GF=
Og.GF;var GJ=null;var Ev=null;if(!!D0){GJ=D0.GJ;Ev=D0.Ev;}if(!!D0&&!!Og.PL)GJ=Og.
PL;if(!!D0&&!!Jf)Ev=Jf;if(!!Ud)GF=Ud;if(!Hc)Hc=A._GetAutoObject(A.uX.Tc);if(!Mb)
Mb=Hc;if(!J4)J4=J3;if(!J3)J3=J4;Kg.GF=Mb;Kg.Ev=J3;Kg.GJ=J4;Kg.PL=K0;Kg.Cl=DX;Kg.
Al=this.CF.Al;this.CF.Al=null;this.CF=Kg;if(this.BK===DX)this.Af(null);Og.Cl.Bn(
0x0,0x10040);if(((this.O&0x40)===0x40)&&((DX.O&0x4)===0x4))DX.Bn(0x10040,0x0);else
DX.Bn(0x10000,0x0);if(!!Ev){this.FH(D0.Cl,Ev.Vg(),null,null,G$);this.FH(Og.Cl,GF.
M3(),null,null,true);this.FH(Kg.Cl,Hc.M4(),Ha,G_,true);}else if(!!GJ){this.FH(D0.
Cl,GJ.Vh(),null,null,G$);this.FH(Og.Cl,GF.M3(),null,null,true);this.FH(Kg.Cl,Hc.
M4(),Ha,G_,true);}else if(!!GF){this.FH(Og.Cl,GF.M3(),null,null,G$);this.FH(Kg.Cl
,Hc.M4(),Ha,G_,true);}else this.FH(Kg.Cl,Hc.M4(),Ha,G_,G$);},Ct:function(DX,Ud,Jf
,K0,Ha,G_,G$){var B;if(!this.CF)return;if(!DX)return;var C6=this.CF;var D0=this.
CF.Al;var Sb=null;while((!!C6&&(C6.Cl!==DX))&&!!C6.Al){Sb=C6;C6=D0;D0=C6.Al;}if(
!C6||(C6.Cl!==DX))throw new Error(EF);if(!Sb){this.CF=D0;C6.Al=null;}else{Sb.Al=
D0;C6.Al=null;}C6.Cl.Bn(0x0,0x10040);if(((((this.O&0x40)===0x40)&&!!D0)&&!Sb)&&((
D0.Cl.O&0x4)===0x4))D0.Cl.Bn(0x40,0x0);var GF=C6.GF;var GJ=null;var Ev=null;if(!
!D0)GJ=D0.GJ;if(!!D0&&!!C6.PL)GJ=C6.PL;if(!!D0&&!!K0)GJ=K0;if(!!Sb&&!!D0)Ev=D0.Ev;
if((!!Sb&&!!D0)&&!!Jf)Ev=Jf;if(!!Ud)GF=Ud;if(!!Ev){this.FH(D0.Cl,Ev.Vg(),null,null
,G$);this.FH(C6.Cl,GF.M3(),Ha,G_,true);}else if(!!GJ){this.FH(D0.Cl,GJ.Vh(),null
,null,G$);this.FH(C6.Cl,GF.M3(),Ha,G_,true);}else this.FH(C6.Cl,GF.M3(),Ha,G_,G$
);},C9:function(DX,Hc,Mb,J3,J4,Jf,K0,Ha,G_,G$){var B;if(!DX)return;if(!!this.CF&&(
this.CF.Cl===DX)){this.WG(DX,Hc,Mb,J3,J4,null,Jf,K0,Ha,G_,G$);return;}if(((DX.O&
0x10000)===0x10000))throw new Error(Dy);var C6=A._NewObject(D.YJ,0);if(!!this.CF&&
!this.CF.Ev){if(!K0)K0=Jf;if(!Jf)Jf=K0;}var Ev=null;if(!!this.CF)Ev=this.CF.Ev;if(
!!this.CF&&!!Jf)Ev=Jf;if(!Hc)Hc=A._GetAutoObject(A.uX.Tc);if(!Mb)Mb=Hc;if(!J4)J4=
J3;if(!J3)J3=J4;C6.GF=Mb;C6.Ev=J3;C6.GJ=J4;C6.PL=K0;if(this.BK===DX)this.Af(null
);if(!!this.CF)this.CF.Cl.Bn(0x0,0x40);if(((this.O&0x40)===0x40)&&((DX.O&0x4)===
0x4))DX.Bn(0x10040,0x0);else DX.Bn(0x10000,0x0);C6.Cl=DX;C6.Al=this.CF;this.CF=C6;
if(!!Ev){this.FH(this.CF.Al.Cl,Ev.Vg(),null,null,G$);this.FH(DX,Hc.M4(),Ha,G_,true
);}else this.FH(DX,Hc.M4(),Ha,G_,G$);},Z7:function(){var B;if(((this.O&0x40)===0x40
))return;if(((this.O&0x80)===0x80))return;if(((this.O&0x10000)===0x10000)){if(!!
this.L)this.L.Z7();return;}if(!!this.L&&(this.L.BK!==this))this.L.Af(this);if(!!
this.L)this.L.Z7();},AjM:function(AH){var B;return(B=AH)&&((this.O&B)===B);},AjR:
function(EX){var tmp=this;while(!!tmp){EX=A.tU(EX,tmp.X.slice(0,2));tmp=tmp.L;}return EX;
},DispatchEvent:function(A0){var B;var Ac=this.BK;var AL=(D.J.isPrototypeOf(Ac)?
Ac:null);var CI=null;var Aei=!!this.II&&(!!this.II.GD||!!this.II.A5);if(!!Ac&&((((
Ac.O&0x10000)===0x10000)||((Ac.O&0x40000)===0x40000))||((Ac.O&0x20000)===0x20000
))){Ac=null;AL=null;}if(!!this.CF&&!Aei)CI=this.CF.Cl.DispatchEvent(A0);if(!CI&&
!!AL)CI=AL.DispatchEvent(A0);else if(!CI&&!!Ac)CI=Ac.Df(A0);if(!CI)CI=this.Df(A0
);if(!CI)CI=this.AiW(A0);return CI;},BroadcastEventAtPosition:function(A0,AhN,aFilter
){var B;var Ac=this.A8;var CI=null;while(!!Ac&&!CI){if((!aFilter||((B=aFilter)&&((
Ac.O&B)===B)))&&A.qH(Ac.GetExtent(),AhN)){var AL=(D.J.isPrototypeOf(Ac)?Ac:null);
if(!!AL)CI=AL.BroadcastEventAtPosition(A0,A.tU(AhN,AL.X.slice(0,2)),aFilter);else
CI=Ac.Df(A0);}Ac=Ac.Ar;}if(!CI)CI=this.Df(A0);return CI;},BroadcastEvent:function(
A0,aFilter){var B;var Ac=this.A8;var CI=null;while(!!Ac&&!CI){if(!aFilter||((B=aFilter
)&&((Ac.O&B)===B))){var AL=(D.J.isPrototypeOf(Ac)?Ac:null);if(!!AL)CI=AL.BroadcastEvent(
A0,aFilter);else CI=Ac.Df(A0);}Ac=Ac.Ar;}if(!CI)CI=this.Df(A0);if(!CI)CI=this.AiW(
A0);return CI;},WR:function(aSize){},Bq:function(AH){},Zt:function(){this.O=this.
O|0x4000;A.lz([this,this.D4],this);},AW:function(){this.O=this.O|0x8000;A.lz([this
,this.D4],this);},Av:function(A9){var B;var AL=this;while(!!AL&&!((A9[0]>=A9[2])||(
A9[1]>=A9[3]))){var RT=AL.CU;if(!AL.L&&(AL!==this)){AL.Av(A9);return;}if(!!RT){var
AoE=RT.Fj;RT.Fj=A.q5(RT.Fj,A9);if(!A.tI(AoE,RT.Fj)){A.qJ(AL,0);A.qJ(RT,0);}}if(!((
AL.O&0x1)===0x1))return;A9=A.it(A.tX(A9,AL.X.slice(0,2)),AL.X);AL=AL.L;}},Ae8:function(
){var Ac=this.A5;var Ea=0;while(!!Ac){Ea=Ea+1;Ac=Ac.Al;}return Ea;},Afg:function(
Aa,aFilter){var B;if(!!Aa&&(Aa.L!==this))return null;var Ac=this.A5;var Mx=0x10000;
if(((aFilter&0x10000)===0x10000))Mx=0x0;if(!!Aa)Ac=Aa.Al;while(!!Ac){if((!aFilter||((
B=aFilter)&&((Ac.O&B)===B)))&&(!Mx||!((B=Mx)&&((Ac.O&B)===B))))return Ac;Ac=Ac.Al;
}return null;},Y_:function(Aa,aFilter){var B;if(!Aa||(Aa.L!==this))return null;var
Of=Aa.Al;var Or=Aa.Ar;var Mx=0x10000;if(((aFilter&0x10000)===0x10000))Mx=0x0;while(
!!Of||!!Or){if((!!Of&&(!aFilter||((B=aFilter)&&((Of.O&B)===B))))&&(!Mx||!((B=Mx)&&((
Of.O&B)===B))))return Of;if((!!Or&&(!aFilter||((B=aFilter)&&((Or.O&B)===B))))&&(
!Mx||!((B=Mx)&&((Or.O&B)===B))))return Or;if(!!Of)Of=Of.Al;if(!!Or)Or=Or.Ar;}return null;
},FH:function(KY,Cb,Ha,G_,G$){var B;if(!KY)return;if(!Cb)throw new Error(G7);if((
!!Cb.J||!!Cb.L)||!!Cb.FD)throw new Error(G8);if(!!KY.L&&(KY.L!==this))throw new Error(
GB);if(!this.II)this.II=A._NewObject(D.Acd,0);Cb.L=this;Cb.J=KY;Cb.Oi=G_;Cb.Aep=
Ha;if(!!KY.PM)KY.PM.FD.Alf(KY.PM);KY.PM=Cb;KY.O=KY.O|0x20000;if((G$&&!!this.II.A8
)&&!this.II.A8.Zu())(A.uX.Vs.isPrototypeOf(B=this.II.A8)?B:null).AeY(Cb);else{var
FD=A._NewObject(A.uX.Vs,0);FD.AeY(Cb);this.II.Ag8(FD,false);}},Fr:function(Aa){var
B;if(!Aa)throw new Error(HH);if(Aa.L!==this)throw new Error(G9);if(!Aa.Al)return;
var EY=this.A8;var MI=Aa.HA;while(!!EY&&(EY.HA>MI))EY=EY.Ar;if(((EY===Aa)||!EY)||(
EY.Al===Aa))return;if(((Aa.O&0x401)===0x401)){if(!!Aa.Ar&&!!Aa.BB)Aa.Ar.O=Aa.Ar.
O|0x800;Aa.O=Aa.O|0x800;this.O=this.O|0x4000;A.lz([this,this.D4],this);}if(((Aa.
O&0x200)===0x200)){if(!!Aa.Ar)Aa.Ar.O=Aa.Ar.O|0x800;this.O=this.O|0x4000;A.lz([this
,this.D4],this);}if(!!Aa.Ar)Aa.Ar.Al=Aa.Al;else this.A5=Aa.Al;Aa.Al.Ar=Aa.Ar;Aa.
Ar=EY;Aa.Al=EY.Al;EY.Al=Aa;if(!!Aa.Al)Aa.Al.Ar=Aa;else this.A8=Aa;if(((Aa.O&0x1)===
0x1))this.Av(Aa.GetExtent());},Ag6:function(Aa,Hb){var B;if(!Aa)throw new Error(
HH);if(Aa.L!==this)throw new Error(G9);var EY=Aa;var Dm=Aa;var MI=Aa.HA;while(((
Hb>0)&&!!EY.Al)&&(EY.Al.HA<=MI)){EY=EY.Al;Hb=Hb-1;}while(((Hb<0)&&!!Dm.Ar)&&(Dm.
Ar.HA>=MI)){Dm=Dm.Ar;Hb=Hb+1;}if((EY===Aa)&&(Dm===Aa))return;if(((Aa.O&0x401)===
0x401)){if(!!Aa.Ar&&!!Aa.BB)Aa.Ar.O=Aa.Ar.O|0x800;Aa.O=Aa.O|0x800;this.O=this.O|
0x4000;A.lz([this,this.D4],this);}if(((Aa.O&0x200)===0x200)){if(!!Aa.Ar)Aa.Ar.O=
Aa.Ar.O|0x800;Aa.O=Aa.O|0x800;this.O=this.O|0x4000;A.lz([this,this.D4],this);}if(
!!Aa.Ar)Aa.Ar.Al=Aa.Al;if(!!Aa.Al)Aa.Al.Ar=Aa.Ar;if(this.A5===Aa)this.A5=Aa.Al;if(
this.A8===Aa)this.A8=Aa.Ar;if(EY!==Aa){Aa.Al=EY.Al;Aa.Ar=EY;EY.Al=Aa;if(!!Aa.Al)
Aa.Al.Ar=Aa;}if(Dm!==Aa){Aa.Al=Dm;Aa.Ar=Dm.Ar;Dm.Ar=Aa;if(!!Aa.Ar)Aa.Ar.Al=Aa;}if(
!Aa.Al)this.A8=Aa;if(!Aa.Ar)this.A5=Aa;if(((Aa.O&0x1)===0x1))this.Av(Aa.GetExtent(
));},EC:function(Aa){var B;if(!Aa)throw new Error(KW);if(Aa.L!==this)throw new Error(
G9);if((((Aa.O&0x401)===0x401)&&!!Aa.Ar)&&!!Aa.BB){Aa.Ar.O=Aa.Ar.O|0x800;this.O=
this.O|0x4000;A.lz([this,this.D4],this);}if(((Aa.O&0x200)===0x200)){if(!!Aa.Ar)Aa.
Ar.O=Aa.Ar.O|0x800;this.O=this.O|0x4000;A.lz([this,this.D4],this);}Aa.BB=null;if(
this.BK===Aa)this.Af(this.Y_(Aa,0x14));if(!!Aa.Ar)Aa.Ar.Al=Aa.Al;if(!!Aa.Al)Aa.Al.
Ar=Aa.Ar;if(this.A5===Aa)this.A5=Aa.Al;if(this.A8===Aa)this.A8=Aa.Ar;Aa.L=null;Aa.
Al=null;Aa.Ar=null;if(((Aa.O&0x1)===0x1))this.Av(Aa.GetExtent());},I:function(Aa
,Hb){var B;if(!Aa)throw new Error(FU);if(!!Aa.L)throw new Error(EG);var Dm=null;
var MI=Aa.HA;if(((Hb<0)&&!!this.A8)&&(this.A8.HA>=MI)){Dm=this.A8;Hb=Hb+1;}while((((
Hb<0)&&!!Dm)&&!!Dm.Ar)&&(Dm.Ar.HA>=MI)){Dm=Dm.Ar;Hb=Hb+1;}if((!Dm&&!!this.A8)&&(
this.A8.HA>MI))Dm=this.A8;while((!!Dm&&!!Dm.Ar)&&(Dm.Ar.HA>MI))Dm=Dm.Ar;if(!Dm){
Aa.L=this;Aa.Ar=this.A8;if(!!this.A8)this.A8.Al=Aa;if(!this.A5)this.A5=Aa;this.A8=
Aa;}else{Aa.L=this;Aa.Ar=Dm.Ar;Aa.Al=Dm;Dm.Ar=Aa;if(!!Aa.Ar)Aa.Ar.Al=Aa;else this.
A5=Aa;}if(((Aa.O&0x1)===0x1))this.Av(Aa.GetExtent());if(((!this.BK&&((Aa.O&0x4)===
0x4))&&((Aa.O&0x10)===0x10))&&!((Aa.O&0x10000)===0x10000))this.Af(Aa);if(((Aa.O&
0x401)===0x401)){Aa.O=Aa.O|0x800;this.O=this.O|0x4000;A.lz([this,this.D4],this);
}if(((Aa.O&0x200)===0x200)){Aa.O=Aa.O|0x800;this.O=this.O|0x4000;A.lz([this,this.
D4],this);}},_Init:function(aArg){D.Cq._Init.call(this,aArg);this.__proto__=D.J;
this.O=0x1F;this.Ap(aArg);},_Mark:function(C){var B;D.Cq._Mark.call(this,C);if((
B=this.A5)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.A8)&&(B._cycle!=C))B._Mark(
B._cycle=C);if((B=this.XO)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.CU)&&(B.
_cycle!=C))B._Mark(B._cycle=C);if((B=this.CF)&&(B._cycle!=C))B._Mark(B._cycle=C);
if((B=this.II)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.PM)&&(B._cycle!=C))
B._Mark(B._cycle=C);if((B=this.BK)&&(B._cycle!=C))B._Mark(B._cycle=C);},_className:
"Core::Group"};D.Root={GH:null,BS:A.tY(10,null,null),RU:null,Mk:null,U2:0,CV:0,EJ:
A.tY(10,0,null),XE:A.tY(10,A.qL,null),IH:A.tY(10,0,null),K4:A.tY(10,A.qK,null),RW:
A.tY(10,0,null),Mj:A.tY(10,A.qK,null),IG:A.tY(10,A.qK,null),GE:A.tY(10,A.qK,null
),J9:A.tY(10,A.qK,null),By:0,XJ:0,XI:0,Ff:A.tY(4,0,null),D2:A.tY(4,A.qL,null),D1:
0,Ux:0,R6:0,Ad8:true,GT:function(){return this;},Fi:function(Bz,aClip,aOffset,AY
,aBlend){var fullScreenUpdate=false;fullScreenUpdate=A.jO;if(!fullScreenUpdate)Bz.
Vt(aClip,A.tX(A.tX(aClip,aOffset),this.X.slice(0,2)),0x00000000,0x00000000,0x00000000
,0x00000000,false);D.J.Fi.call(this,Bz,aClip,aOffset,AY,aBlend);},Bn:function(Me
,Pg){var B;D.J.Bn.call(this,Me,Pg);if(!this.L&&(((Me&0x1)===0x1)||((Pg&0x1)===0x1
)))this.Av([0,0,(B=this.X)[2]-B[0],B[3]-B[1]]);if(!this.L&&(((Me&0x2)===0x2)||((
Pg&0x2)===0x2)))this.Av([0,0,(B=this.X)[2]-B[0],B[3]-B[1]]);},Af:function(E){if((
E!==null)||!E)D.J.Af.call(this,E);},LN:function(E){var B;var AoD=this.CU;D.J.LN.
call(this,E);if(((AoD!==this.CU)&&!this.L)&&((this.O&0x1)===0x1))this.Av([0,0,(B=
this.X)[2]-B[0],B[3]-B[1]]);},LO:function(E){var B;var HR=this.Ib;D.J.LO.call(this
,E);if(((HR!==this.Ib)&&!this.L)&&((this.O&0x1)===0x1))this.Av([0,0,(B=this.X)[2
]-B[0],B[3]-B[1]]);},DispatchEvent:function(A0){if(!!A0){A0.SV=!!this.CV;if(!!this.
CV)A0.AZ=this.CV;}var CI;CI=D.J.DispatchEvent.call(this,A0);this.CV=0;return CI;
},BroadcastEvent:function(A0,aFilter){if(!!A0){A0.SV=!!this.CV;if(!!this.CV)A0.AZ=
this.CV;}var CI=D.J.BroadcastEvent.call(this,A0,aFilter);this.CV=0;return CI;},Av:
function(A9){var B;if(this.U2>0)throw new Error(Fx);if(!!this.CU&&!this.L){if(((
B=this.CU.Fj)[0]>=B[2])||(B[1]>=B[3])){A.qJ(this,0);A.qJ(this.CU,0);}this.CU.Fj=
A.q5(this.CU.Fj,A9);}var fullScreenUpdate=false;fullScreenUpdate=A.jO;if(fullScreenUpdate
)A9=[0,0,(B=this.X)[2]-B[0],B[3]-B[1]];if(!!this.L){D.J.Av.call(this,A9);return;
}A9=A.it(A.tX(A9,this.X.slice(0,2)),this.X);if((A9[0]>=A9[2])||(A9[1]>=A9[3]))return;
var R;for(R=0;R<this.D1;R=R+1)if(!(((B=A.it(this.D2.Get(R),A9))[0]>=B[2])||(B[1]>=
B[3]))){this.D2.Set(R,A.q5(this.D2.Get(R),A9));this.Ff.Set(R,A.tr(this.D2.Get(R)
));return;}if(this.D1<3){this.D2.Set(this.D1,A9);this.Ff.Set(this.D1,A.tr(A9));this.
D1=this.D1+1;return;}var CC;var F$;var Uw=0;var Uy=0;var AhR=2147483647;this.D2.
Set(this.D1,A9);this.Ff.Set(this.D1,A.tr(A9));for(CC=0;CC<=this.D1;CC=CC+1)for(F$=
CC+1;F$<=this.D1;F$=F$+1){var Yn=A.tr(A.q5(this.D2.Get(CC),this.D2.Get(F$)));var
AiV=((Yn<<8)/(this.Ff.Get(CC)+this.Ff.Get(F$)))|0;if(AiV<AhR){AhR=AiV;Uw=CC;Uy=F$;
}}this.D2.Set(Uw,A.q5(this.D2.Get(Uw),this.D2.Get(Uy)));this.Ff.Set(Uw,A.tr(this.
D2.Get(Uw)));if(Uy!==this.D1){this.D2.Set(Uy,this.D2.Get(this.D1));this.Ff.Set(Uy
,this.Ff.Get(this.D1));}},Aoa:function(){var EL=A._NewObject(D.Qd,0);EL.SV=!!this.
CV;if(!!this.CV)EL.AZ=this.CV;return EL;},Pm:function(){var EL=A._NewObject(D.Qa
,0);EL.SV=!!this.CV;if(!!this.CV)EL.AZ=this.CV;return EL;},RV:function(){var EL=
A._NewObject(D.Vi,0);EL.SV=!!this.CV;if(!!this.CV)EL.AZ=this.CV;return EL;},Aob:
function(P){var R;var Ps=false;for(R=0;R<10;R=R+1)if(!!this.BS.Get(R)){var pos=this.
GE.Get(R);var AL=this.BS.Get(R).L;while(!!AL&&(AL!==this)){pos=A.tU(pos,AL.X.slice(
0,2));AL=AL.L;}if(!AL&&(this.BS.Get(R)!==this)){var tmp=this.BS.Get(R);this.By=R;
this.BS.Set(R,null);tmp.Df(this.Pm().InitializeUp(R,this.Mj.Get(R),this.K4.Get(R
),this.IH.Get(R),this.EJ.Get(R)+1,this.IG.Get(R),false,this.GE.Get(R),this.J9.Get(
R)));this.BroadcastEvent(this.RV().InitializeUp(R,this.EJ.Get(R)+1,false,tmp,this.
GE.Get(R)),0x18);}else{this.IH.Set(R,(this.Mk.AZ-this.RW.Get(R))|0);if(this.IH.Get(
R)<10)this.IH.Set(R,10);this.By=R;this.BS.Get(R).Df(this.Pm().InitializeHold(R,pos
,this.K4.Get(R),this.IH.Get(R),this.EJ.Get(R)+1,this.IG.Get(R),this.GE.Get(R),this.
J9.Get(R)));Ps=true;}}if(!Ps)this.Mk.Aw(false);},GetFPS:function(){var ticksCount=
0;var Ah8=0;ticksCount=((new Date).getTime()-A.qG)|0;if(!!this.XJ&&(ticksCount>this.
XJ))Ah8=((this.XI*1000)/((ticksCount-this.XJ)|0))|0;this.XI=0;this.XJ=ticksCount;
return Ah8;},Update:function(){var B;if(!this.RU)this.RU=A._NewObject(A.Graphics.
Canvas,0);this.RU.QM([(B=this.X)[2]-B[0],B[3]-B[1]]);this.RU.Update();return this.
UpdateGE20(this.RU);},UpdateGE20:function(Bz){if(!this.BeginUpdate())return A1;var
Lf=this.UpdateCanvas(Bz,BR);this.EndUpdate();return Lf;},EndUpdate:function(){if(
this.D1>0){this.XI=this.XI+1;this.D1=0;}},UpdateCanvas:function(Bz,aOffset){var B;
var Lf=A1;var An5=[].concat(aOffset,A.tV(Bz.FrameSize,aOffset));var R;var CC=this.
D1;this.U2=this.U2+1;for(R=0;(R<CC)&&(R<4);R=R+1)if(this.Ff.Get(R)>0){this.Fi(Bz
,A.tW(this.D2.Get(R),aOffset),[-aOffset[0],-aOffset[1]],255,true);Lf=A.q5(Lf,A.it(
An5,this.D2.Get(R)));}else CC=CC+1;this.U2=this.U2-1;if(!((Lf[0]>=Lf[2])||(Lf[1]>=
Lf[3])))return A.tW(Lf,aOffset);else return Lf;},GetUpdateRegion:function(Xg){var
R;var CC=this.D1;if(Xg<0)return A1;for(R=0;(R<CC)&&(R<4);R=R+1)if(!this.Ff.Get(R
)){CC=CC+1;Xg=Xg+1;}else if(R===Xg)return this.D2.Get(R);return A1;},BeginUpdate:
function(){var R;var CC;var F$;for(CC=0;CC<(this.D1-1);CC=CC+1)if(this.Ff.Get(CC
)>0)for(F$=CC+1;F$<this.D1;F$=F$+1)if(this.Ff.Get(F$)>0){var Yn=A.tr(A.q5(this.D2.
Get(CC),this.D2.Get(F$)));if(((Yn-this.Ff.Get(CC))-this.Ff.Get(F$))<0){this.D2.Set(
CC,A.q5(this.D2.Get(CC),this.D2.Get(F$)));this.Ff.Set(CC,Yn);this.Ff.Set(F$,0);}
}for(R=this.D1-1;R>=0;R=R-1)if(!this.Ff.Get(R))this.D1=this.D1-1;return this.D1;
},DoesNeedUpdate:function(){if(this.D1>0)return true;return false;},Initialize:function(
aSize){this.H([].concat(BR,aSize));if(this.Ad8)this.O=this.O|0x60;else this.O=this.
O|0x20;this.Av(this.X);return this;},SetRootFocus:function(AdS){if(AdS===this.Ad8
)return false;this.Ad8=AdS;if(!AdS)this.Bn(0x0,0x40);else this.Bn(0x40,0x0);return true;
},SetUserInputTimestamp:function(AnX){this.CV=AnX;},DriveKeyboardHitting:function(
DI,T$,Jc){var B;var AeF=!!this.GH;if(!!this.GH&&((!Jc||(this.Ux!==DI))||(this.R6
!==T$))){var EL=null;var Ac=(D.Bk.isPrototypeOf(B=this.GH)?B:null);var Jg=(D.A3.
isPrototypeOf(B=this.GH)?B:null);if(!!this.Ux)EL=A._NewObject(D.KeyEvent,0).Initialize(
this.Ux,false);if(this.R6!==0x00)EL=A._NewObject(D.KeyEvent,0).Initialize2(this.
R6,false);if(!!Jg)Jg.Df(EL);else if(!!Ac)Ac.Df(EL);this.Ux=0;this.R6=0x00;this.GH=
null;}if(!!this.GH){var EL=null;var Ac=(D.Bk.isPrototypeOf(B=this.GH)?B:null);var
Jg=(D.A3.isPrototypeOf(B=this.GH)?B:null);if(!!DI)EL=A._NewObject(D.KeyEvent,0).
Initialize(DI,true);if(this.R6!==0x00)EL=A._NewObject(D.KeyEvent,0).Initialize2(
T$,true);if(!!Jg)Jg.Df(EL);else if(!!Ac)Ac.Df(EL);}if(!this.GH&&Jc){if(!!DI)this.
GH=this.DispatchEvent(A._NewObject(D.KeyEvent,0).Initialize(DI,true));if(T$!==0x00
)this.GH=this.DispatchEvent(A._NewObject(D.KeyEvent,0).Initialize2(T$,true));if(
!(D.A3.isPrototypeOf(B=this.GH)?B:null)&&!(D.Bk.isPrototypeOf(B=this.GH)?B:null)
)this.GH=null;this.Ux=DI;this.R6=T$;AeF=AeF||!!this.GH;}this.CV=0;return AeF;},DriveCursorMovement:
function(DJ){return this.DriveMultiTouchMovement(this.By,DJ);},DriveMultiTouchMovement:
function(Au,DJ){if((Au<0)||(Au>9)){this.CV=0;return false;}var BT=A.tU(DJ,this.GE.
Get(Au));this.GE.Set(Au,DJ);if(!this.BS.Get(Au)||A.tH(BT,BR)){this.CV=0;return false;
}var pos=DJ;var AL=this.BS.Get(Au).L;while(!!AL&&(AL!==this)){pos=A.tU(pos,AL.X.
slice(0,2));AL=AL.L;}if(!AL&&(this.BS.Get(Au)!==this)){var tmp=this.BS.Get(Au);this.
By=Au;this.BS.Set(Au,null);tmp.Df(this.Pm().InitializeUp(Au,this.Mj.Get(Au),this.
K4.Get(Au),this.IH.Get(Au),this.EJ.Get(Au)+1,this.IG.Get(Au),false,this.GE.Get(Au
),this.J9.Get(Au)));this.BroadcastEvent(this.RV().InitializeUp(Au,this.EJ.Get(Au
)+1,false,tmp,DJ),0x18);}else{this.Mj.Set(Au,pos);this.By=Au;this.BS.Get(Au).Df(
this.Aoa().Initialize(Au,pos,this.K4.Get(Au),BT,this.IH.Get(Au),this.EJ.Get(Au)+
1,this.IG.Get(Au),DJ,this.J9.Get(Au)));}this.CV=0;return true;},DriveCursorHitting:
function(Jc,Au,DJ){return this.DriveMultiTouchHitting(Jc,Au,DJ);},DriveMultiTouchHitting:
function(Jc,Au,DJ){if((Au<0)||(Au>9)){this.CV=0;return false;}var ticksCount=this.
CV;if(!ticksCount)ticksCount=((new Date).getTime()-A.qG)|0;var Apj=this.CV;this.
DriveMultiTouchMovement(Au,DJ);DJ=this.GE.Get(Au);this.CV=Apj;if(Jc)this.J9.Set(
Au,DJ);if(Jc&&!this.BS.Get(Au)){var GG;var pos=DJ;if(A.qH(this.XE.Get(Au),DJ)&&((
ticksCount-this.RW.Get(Au))<=250))this.EJ.Set(Au,this.EJ.Get(Au)+1);else this.EJ.
Set(Au,0);this.XE.Set(Au,A.tX(L_,DJ));this.RW.Set(Au,ticksCount);GG=this.Ls(A.tX(
L_,DJ),Au,this.EJ.Get(Au)+1,null,0x0);if(!!GG){this.BroadcastEvent(this.RV().InitializeDown(
Au,this.EJ.Get(Au)+1,false,GG.Bk,DJ),0x18);this.BS.Set(Au,GG.Bk);this.IG.Set(Au,
GG.Ba);}else{this.BS.Set(Au,null);this.IG.Set(Au,BR);this.CV=0;return false;}var
AL=GG.Bk.L;while(!!AL&&(AL!==this)){pos=A.tU(pos,AL.X.slice(0,2));AL=AL.L;}this.
K4.Set(Au,pos);this.Mj.Set(Au,pos);this.IH.Set(Au,0);this.Mk.Aw(true);this.By=Au;
this.BS.Get(Au).Df(this.Pm().InitializeDown(Au,pos,this.EJ.Get(Au)+1,this.IG.Get(
Au),false,DJ));this.CV=0;return true;}if(!Jc&&!!this.BS.Get(Au)){var pos=DJ;var AL=
this.BS.Get(Au).L;while(!!AL&&(AL!==this)){pos=A.tU(pos,AL.X.slice(0,2));AL=AL.L;
}if(!AL)pos=this.Mj.Get(Au);this.By=Au;var tmp=this.BS.Get(Au);this.BS.Set(Au,null
);tmp.Df(this.Pm().InitializeUp(Au,pos,this.K4.Get(Au),this.IH.Get(Au),this.EJ.Get(
Au)+1,this.IG.Get(Au),false,DJ,this.J9.Get(Au)));this.BroadcastEvent(this.RV().InitializeUp(
Au,this.EJ.Get(Au)+1,false,tmp,DJ),0x18);this.CV=0;return true;}this.CV=0;return false;
},AbS:function(Je,Xe,K1){if(Je===this)Je=null;if(!this.BS.Get(this.By))return;var
GG;GG=this.Ls(A.tX(L_,this.GE.Get(this.By)),this.By,1,Je,K1);if(!!GG&&(this.BS.Get(
this.By)!==GG.Bk))this.YH(GG.Bk,GG.Ba);if(!GG&&(this.BS.Get(this.By)!==Xe))this.
YH(Xe,BR);},Alg:function(Je,Xe){this.AbS(Je,Xe,0x0);},YH:function(Je,IB){if(!this.
BS.Get(this.By)||(this.BS.Get(this.By)===Je))return;var tmp=this.BS.Get(this.By);
this.BS.Set(this.By,null);tmp.Df(this.Pm().InitializeUp(this.By,this.Mj.Get(this.
By),this.K4.Get(this.By),this.IH.Get(this.By),this.EJ.Get(this.By)+1,this.IG.Get(
this.By),true,this.GE.Get(this.By),this.J9.Get(this.By)));this.BroadcastEvent(this.
RV().InitializeUp(this.By,this.EJ.Get(this.By)+1,true,tmp,this.GE.Get(this.By)),
0x18);var pos=this.GE.Get(this.By);var AL=null;if(!!Je)AL=Je.L;while(!!AL&&(AL!==
this)){pos=A.tU(pos,AL.X.slice(0,2));AL=AL.L;}if(!AL&&(Je!==this)){this.BS.Set(this.
By,null);return;}this.BroadcastEvent(this.RV().InitializeDown(this.By,this.EJ.Get(
this.By)+1,true,Je,this.GE.Get(this.By)),0x18);var ticksCount=0;ticksCount=((new
Date).getTime()-A.qG)|0;this.BS.Set(this.By,Je);this.IG.Set(this.By,IB);this.K4.
Set(this.By,pos);this.Mj.Set(this.By,pos);this.EJ.Set(this.By,0);this.IH.Set(this.
By,0);this.RW.Set(this.By,ticksCount);this.J9.Set(this.By,this.GE.Get(this.By));
this.BS.Get(this.By).Df(this.Pm().InitializeDown(this.By,pos,this.EJ.Get(this.By
)+1,this.IG.Get(this.By),true,this.J9.Get(this.By)));},_Init:function(aArg){D.J.
_Init.call(this,aArg);D.Timer._Init.call(this.Mk={G:this},0);(this.BS=[]).__proto__=
D.Root.BS;(this.EJ=[]).__proto__=D.Root.EJ;(this.XE=[]).__proto__=D.Root.XE;(this.
IH=[]).__proto__=D.Root.IH;(this.K4=[]).__proto__=D.Root.K4;(this.RW=[]).__proto__=
D.Root.RW;(this.Mj=[]).__proto__=D.Root.Mj;(this.IG=[]).__proto__=D.Root.IG;(this.
GE=[]).__proto__=D.Root.GE;(this.J9=[]).__proto__=D.Root.J9;(this.Ff=[]).__proto__=
D.Root.Ff;(this.D2=[]).__proto__=D.Root.D2;this.__proto__=D.Root;this.O=0x7F;this.
Mk.C3(50);this.Mk.C4=[this,this.Aob];},_Done:function(){this.__proto__=D.J;this.
Mk._Done();D.J._Done.call(this);},_ReInit:function(){D.J._ReInit.call(this);this.
Mk._ReInit();},_Mark:function(C){var B;D.J._Mark.call(this,C);if((B=this.GH)&&(B.
_cycle!=C))B._Mark(B._cycle=C);A.tQ(this.BS,C);if((B=this.RU)&&(B._cycle!=C))B._Mark(
B._cycle=C);if((B=this.Mk)._cycle!=C)B._Mark(B._cycle=C);},_className:"Core::Root"
};D.Event={AZ:0,SV:false,Ap:function(aArg){this.AZ=this.SL();},SL:function(){var
ticksCount=0;ticksCount=((new Date).getTime()-A.qG)|0;return ticksCount;},_Init:
function(aArg){this.__proto__=D.Event;this.Ap(aArg);A.gx++;},_Done:function(){this.
__proto__=null;A.gx--;},_ReInit:function(){},_Mark:function(C){var B;if((B=this.
G)&&(B._cycle!=C))B._Mark(B._cycle=C);},G:null,_cycle:0,_observers:null,_className:
"Core::Event"};D.KeyEvent={AA:0,BX:0,Down:false,Initialize2:function(DI,Jc){this.
AA=0;this.BX=DI;this.Down=Jc;if((DI>=0x30)&&(DI<=0x39))this.AA=(10+DI)-48;if((DI>=
0x41)&&(DI<=0x5A))this.AA=(105+DI)-65;if((DI>=0x61)&&(DI<=0x7A))this.AA=(105+DI)-
97;if(DI===0x20)this.AA=131;if(!this.AA)switch(DI){case 0x2B:this.AA=132;break;case
0x2D:this.AA=133;break;case 0x2A:this.AA=134;break;case 0x2F:this.AA=135;break;case
0x3D:this.AA=136;break;case 0x2E:this.AA=137;break;case 0x2C:this.AA=138;break;case
0x3A:this.AA=139;break;case 0x3B:this.AA=140;break;default:;}return this;},Initialize:
function(DI,Jc){this.AA=DI;this.Down=Jc;this.BX=0x00;var Ad2=DI-10;var Ad1=DI-105;
if((Ad2>=0)&&(Ad2<=9))this.BX=(48+Ad2)&0xFFFF;if((Ad1>=0)&&(Ad1<=25))this.BX=(65+
Ad1)&0xFFFF;if(DI===131)this.BX=0x20;if(this.BX===0x00)switch(DI){case 132:this.
BX=0x2B;break;case 133:this.BX=0x2D;break;case 134:this.BX=0x2A;break;case 135:this.
BX=0x2F;break;case 136:this.BX=0x3D;break;case 137:this.BX=0x2E;break;case 138:this.
BX=0x2C;break;case 139:this.BX=0x3A;break;case 140:this.BX=0x3B;break;default:;}
return this;},AjO:function(AhL){switch(AhL){case 141:return((this.BX>=0x41)&&(this.
BX<=0x5A))||((this.BX>=0x61)&&(this.BX<=0x7A));case 142:return(((this.BX>=0x41)&&(
this.BX<=0x5A))||((this.BX>=0x61)&&(this.BX<=0x7A)))||((this.BX>=0x30)&&(this.BX<=
0x39));case 143:return(this.BX>=0x30)&&(this.BX<=0x39);case 144:return(((this.BX>=
0x41)&&(this.BX<=0x46))||((this.BX>=0x61)&&(this.BX<=0x66)))||((this.BX>=0x30)&&(
this.BX<=0x39));case 145:return this.BX!==0x00;case 146:return(this.BX===0x00)&&
!!this.AA;case 147:return(((this.AA===6)||(this.AA===7))||(this.AA===4))||(this.
AA===5);case 148:return(this.BX!==0x00)||!!this.AA;default:;}return AhL===this.AA;
},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;}
,_className:"Core::KeyEvent"};D.Vi={WI:null,Lz:A.qK,Ij:0,De:0,Down:false,Hi:false
,InitializeUp:function(Au,E$,Pf,AdV,Jd){this.Down=false;this.De=Au;this.Ij=E$;this.
Lz=Jd;this.WI=AdV;this.Hi=Pf;return this;},InitializeDown:function(Au,E$,Pf,AdV,
Jd){this.Down=true;this.De=Au;this.Ij=E$;this.Lz=Jd;this.WI=AdV;this.Hi=Pf;return this;
},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=D.Vi;},_Mark:
function(C){var B;D.Event._Mark.call(this,C);if((B=this.WI)&&(B._cycle!=C))B._Mark(
B._cycle=C);},_className:"Core::CursorGrabEvent"};D.Qa={SM:A.qK,Lz:A.qK,Ij:0,DT:
0,EQ:A.qK,DR:A.qK,De:0,Down:false,Hi:false,InitializeHold:function(Au,N7,Ub,Uc,E$
,IB,Jd,Ua){this.Down=true;this.De=Au;this.DR=A.tV(N7,IB);this.EQ=A.tV(Ub,IB);this.
DT=Uc;this.Ij=E$;this.Lz=Jd;this.SM=Ua;return this;},InitializeUp:function(Au,N7
,Ub,Uc,E$,IB,Pf,Jd,Ua){this.Down=false;this.De=Au;this.DR=A.tV(N7,IB);this.EQ=A.
tV(Ub,IB);this.DT=Uc;this.Ij=E$;this.Hi=Pf;this.Lz=Jd;this.SM=Ua;return this;},InitializeDown:
function(Au,N7,E$,IB,Pf,Jd){this.Down=true;this.De=Au;this.DR=A.tV(N7,IB);this.EQ=
A.tV(N7,IB);this.DT=0;this.Ij=E$;this.Hi=Pf;this.Lz=Jd;this.SM=Jd;return this;},
_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=D.Qa;},_className:
"Core::CursorEvent"};D.Qd={SM:A.qK,Lz:A.qK,Ij:0,DT:0,Ba:A.qK,EQ:A.qK,DR:A.qK,De:
0,Initialize:function(Au,N7,Ub,aOffset,Uc,AnW,IB,Jd,Ua){this.De=Au;this.DR=A.tV(
N7,IB);this.EQ=A.tV(Ub,IB);this.Ba=aOffset;this.DT=Uc;this.Ij=AnW;this.Lz=Jd;this.
SM=Ua;return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.Qd;},_className:"Core::DragEvent"};D.Fq={Bp:A.qK,Fi:function(Bz,aClip,aOffset,
AY,aBlend){},H:function(E){var B;if(A.tI(E,this.X))return;var Oh=[(B=this.X)[2]-
B[0],B[3]-B[1]];var XQ=[E[2]-E[0],E[3]-E[1]];var PP=!A.tH(Oh,XQ);var BT=A.tU(E.slice(
0,2),this.X.slice(0,2));if(!A.tH(BT,BR)&&!PP){var Ac=this.Al;while(!!Ac&&!((Ac.O&
0x200)===0x200)){if(((Ac.O&0x400)===0x400)){var tmp=((Ac.O&0x100)===0x100);Ac.Nr(
BT,tmp);}Ac=Ac.Al;}}if((PP&&(Oh[0]>0))&&(Oh[1]>0)){var AC=A.tX(this.X,this.Bp);var
Ac=this.Al;while(!!Ac&&!((Ac.O&0x200)===0x200)){if(((Ac.O&0x400)===0x400)){if(!!
Ac.BB&&(Ac.BB.Op!==this))Ac.BB=null;if(!Ac.BB&&(Ac.DD!==0x14))Ac.R5(AC,this);}Ac=
Ac.Al;}}D.Cq.H.call(this,E);if(!!this.L&&PP){this.O=this.O|0x1000;if(!((this.L.O&
0x2000)===0x2000)){this.L.O=this.L.O|0x4000;A.lz([B=this.L,B.D4],this);}}},Fo:function(
E){var B;var BT=A.tU(E,this.Bp);if(A.tH(BT,BR))return;this.Bp=E;var Ac=this.Al;while(
!!Ac&&!((Ac.O&0x200)===0x200)){if(((Ac.O&0x400)===0x400)){var tmp=((Ac.O&0x100)===
0x100);Ac.Nr(BT,tmp);}Ac=Ac.Al;}if(!!this.L)this.L.Av(this.X);},_Init:function(aArg
){D.Cq._Init.call(this,aArg);this.__proto__=D.Fq;this.O=0x203;},_className:"Core::Outline"
};D.Aq={N$:A.tY(8,null,null),Ef:null,Bk:null,ED:null,XR:null,EB:null,Pz:-1,Py:0,
Hg:-1,Gl:0,E0:0,H1:-1,Bp:0,CT:-1,D5:24,Dg:0,Ky:null,Aiq:false,DispatchEvent:function(
A0){var B;var result=null;if(((this.CT>=0)&&(this.CT<this.Dg))&&!this.BK){this.H1=
this.CT;this.Bk=(D.Bk.isPrototypeOf(B=A._NewObject(this.Ky,0))?B:null);if(!!this.
A8)this.A8.Al=this.Bk;else this.A5=this.Bk;this.Bk.Ar=this.A8;this.A8=this.Bk;this.
Bk.L=this;(B=this.EB)?B[1].call(B[0],this):null;var AL=(D.J.isPrototypeOf(B=this.
Bk)?B:null);if(!!AL)result=AL.DispatchEvent(A0);else result=this.Bk.Df(A0);if(!!
this.Bk.Ar)this.Bk.Ar.Al=null;else this.A5=null;this.A8=this.Bk.Ar;this.Bk.Ar=null;
this.Bk.L=null;this.Bk=null;}if(!result)result=D.J.DispatchEvent.call(this,A0);return result;
},Bq:function(AH){var B;if(!this.Ky)return;this.Aiq=true;var Fy=((0-this.Bp)/this.
D5)|0;var GK=(((((B=this.X)[3]-B[1])-this.Bp)-1)/this.D5)|0;var Ea=(((((B=this.X
)[3]-B[1])+this.D5)-1)/this.D5)|0;if(Ea<1)Ea=1;var Xy=(Ea/2)|0;var Xz=(Ea/3)|0;if(
!Xy)Xy=1;if(!Xz)Xz=1;if(Fy<this.Gl){Fy=Fy-Xy;GK=GK+Xz;}else if(GK>this.Hg){Fy=Fy-
Xz;GK=GK+Xy;}else{Fy=this.Gl;GK=this.Hg;}if(Fy>=this.Dg){Fy=0;GK=-1;}else if(GK<
0){Fy=0;GK=-1;}if(GK>=this.Dg)GK=this.Dg-1;if(Fy<0)Fy=0;var X1=this.Gl;var X2=this.
Hg;var Aeg=0;var Aeh=-1;if(Fy>X1)X1=Fy;if(GK<X2)X2=GK;if(X1<=X2){while((this.Hg<
GK)&&(this.Gl<X1)){this.XZ();this.AhY();}while((this.Gl>Fy)&&(this.Hg>X2)){this.
AiZ();this.AhX();}}else{this.Hg=(this.Hg-this.Gl)+Fy;this.Gl=Fy;Aeg=this.Gl;Aeh=
this.Hg;}while(this.Gl<Fy)this.XZ();while(this.Hg>GK)this.AiZ();while(this.Gl>Fy
)this.AhX();while(this.Hg<GK)this.AhY();var AU=this.A5;var Ax=this.Gl;var pos=[0
,this.Bp+(Ax*this.D5)];var AI=(B=this.X)[3]-B[1];var Aih=this.D5;var Ah5=null;while(
!!AU){var EN=A.tU(pos,AU.GetExtent().slice(0,2));var Aed=pos[1];var Aee=pos[1]+Aih;
var N_=Ax;if(!A.tH(EN,BR))AU.Nr(EN,true);if(((((N_>=this.Py)&&(N_<=this.Pz))||((
Ax>=Aeg)&&(Ax<=Aeh)))&&(Aed<AI))&&(Aee>0)){this.Bk=AU;this.H1=N_;(B=this.EB)?B[1
].call(B[0],this):null;}AU=AU.Al;Ax=Ax+1;pos=[pos[0],pos[1]+this.D5];}Ax=this.Gl;
AU=this.A5;pos=[0,this.Bp+(Ax*this.D5)];while(!!AU){var Aed=pos[1];var Aee=pos[1
]+Aih;var N_=Ax;if((((N_>=this.Py)&&(N_<=this.Pz))||((Ax>=Aeg)&&(Ax<=Aeh)))&&!((
Aed<AI)&&(Aee>0))){this.Bk=AU;this.H1=N_;(B=this.EB)?B[1].call(B[0],this):null;}
if(N_===this.CT)Ah5=AU;AU=AU.Al;Ax=Ax+1;pos=[pos[0],pos[1]+this.D5];}this.Py=0;this.
Pz=-1;this.Bk=null;this.H1=-1;this.Af(Ah5);this.Aiq=false;},Ae8:function(){return 0;
},Afg:function(Aa,aFilter){return null;},Y_:function(Aa,aFilter){return null;},Fr:
function(Aa){throw new Error(O_);},Ag6:function(Aa,Hb){throw new Error(GC);},EC:
function(Aa){throw new Error(Ja);},I:function(Aa,Hb){throw new Error(O$);},AiZ:function(
){var AU=this.A8;if(!AU)return null;if(AU===this.BK)this.Af(null);this.Hg=this.Hg-
1;if(!!AU.Ar)AU.Ar.Al=null;else this.A5=null;this.A8=AU.Ar;AU.Ar=null;AU.L=null;
AU.BB=null;if(this.E0<8){this.N$.Set(this.E0,AU);this.E0=this.E0+1;}return AU;},
AhY:function(){var B;var AU=null;if(!this.E0){AU=(D.Bk.isPrototypeOf(B=A._NewObject(
this.Ky,0))?B:null);AU.Hw(0x1D);}else{this.E0=this.E0-1;AU=this.N$.Get(this.E0);
}this.Hg=this.Hg+1;var Aja=this.Hg;this.H1=Aja;this.Bk=AU;(B=this.EB)?B[1].call(
B[0],this):null;this.Bk=null;this.H1=-1;if(!!this.A8)this.A8.Al=AU;AU.L=this;AU.
Ar=this.A8;this.A8=AU;if(!this.A5)this.A5=AU;if(Aja===this.CT)this.Af(AU);return AU;
},An7:function(){while(this.E0>0){this.E0=this.E0-1;this.N$.Set(this.E0,null);}}
,XZ:function(){var AU=this.A5;if(!AU)return null;if(AU===this.BK)this.Af(null);this.
Gl=this.Gl+1;if(!!AU.Al)AU.Al.Ar=null;else this.A8=null;this.A5=AU.Al;AU.Al=null;
AU.L=null;AU.BB=null;if(this.E0<8){this.N$.Set(this.E0,AU);this.E0=this.E0+1;}return AU;
},AhX:function(){var B;var AU=null;if(!this.E0){AU=(D.Bk.isPrototypeOf(B=A._NewObject(
this.Ky,0))?B:null);AU.Hw(0x1D);}else{this.E0=this.E0-1;AU=this.N$.Get(this.E0);
}this.Gl=this.Gl-1;var Ai$=this.Gl;this.H1=Ai$;this.Bk=AU;(B=this.EB)?B[1].call(
B[0],this):null;this.Bk=null;this.H1=-1;if(!!this.A5)this.A5.Ar=AU;AU.L=this;AU.
Al=this.A5;this.A5=AU;if(!this.A8)this.A8=AU;if(Ai$===this.CT)this.Af(AU);return AU;
},AoQ:function(P){var B;this.Ef.Dx=null;this.Ef.Sc=null;this.Ef=null;(B=this.XR)?
B[1].call(B[0],this):null;},Aez:function(P){this.Fo(this.ED.Ba[1]);},AeA:function(
P){var B;if(!!this.Ef){this.Ef.Aw(false);this.Ef.Dx=null;this.Ef.Sc=null;this.Ef=
null;}{var Y=this.Afk(0,this.Dg-1);var My=this.X.slice(0,2);if(Y[0]>My[0])Y=[].concat(
My[0],Y.slice(1,4));if(Y[1]>My[1])Y=A.uq(Y,My[1]);var BT=Y[1]-this.X[1];var Kf=((
B=this.X)[3]-B[1])-(Y[3]-Y[1]);if(Kf>0)Kf=0;this.ED.Ba=[0,this.Bp];this.ED.Dw=[0
,(this.Bp+Kf)-BT];this.ED.Dv=[0,this.Bp-BT];}},AaZ:function(E){if(E===this.ED)return;
if(!!E&&!!E.MC){A.uF("%s%$%*%s",Pa,E,N0);throw new Error(Ep);}if(!!this.ED){this.
ED.Sd=null;this.ED.MC=null;}this.ED=E;if(!!E){E.Sd=[this,this.AeA];E.MC=[this,this.
Aez];}},Fo:function(E){var B;if(E===this.Bp)return;this.Bp=E;this.AW();this.Av([
0,0,(B=this.X)[2]-B[0],B[3]-B[1]]);},DF:function(E){if(E<0)E=-1;if(E===this.CT)return;
this.CT=E;this.AW();},V_:function(E){var B;if(E<1)E=1;if(E===this.D5)return;this.
D5=E;while(!!this.XZ());this.AW();this.Av([0,0,(B=this.X)[2]-B[0],B[3]-B[1]]);},
QQ:function(E){var B;if(E<0)E=0;if(E===this.Dg)return;var Y=[0,0,(B=this.X)[2]-B[
0],B[3]-B[1]];if(E>this.Dg){Y=A.uq(Y,this.Bp+(this.Dg*this.D5));Y=[].concat(Y.slice(
0,3),this.Bp+(E*this.D5));}else{Y=A.uq(Y,this.Bp+(E*this.D5));Y=[].concat(Y.slice(
0,3),this.Bp+(this.Dg*this.D5));}this.Dg=E;this.AW();this.Av(Y);},BU:function(E){
var B;if(E===this.Ky)return;this.Ky=E;while(!!this.XZ());this.An7();this.AW();this.
Av([0,0,(B=this.X)[2]-B[0],B[3]-B[1]]);},Qh:function(Xf,AhM,AnT,Ph){var B;if((Xf<
0)||(Xf>=this.Dg))return;var Ag=this.Afk(Xf,Xf);var AC=this.X;var Us=A.it(Ag,AC);
if((!AhM&&!((Us[0]>=Us[2])||(Us[1]>=Us[3])))||(AhM&&A.tI(Us,Ag))){(Ph)?Ph[1].call(
Ph[0],this):null;return;}var EN=0;if(Ag[3]>AC[3])EN=Ag[3]-AC[3];if(EN>(Ag[1]-AC[
1]))EN=Ag[1]-AC[1];if(!!this.Ef){this.Ef.Aw(false);this.Ef.Dx=null;this.Ef.Sc=null;
this.XR=null;}this.Ef=AnT;if(!this.Ef){this.Fo(this.Bp-EN);(Ph)?Ph[1].call(Ph[0]
,this):null;}else{this.Ef.Aw(false);this.Ef.AaV(1);this.Ef.Dx=[this,this.AjX,this.
Fo];this.Ef.FS=this.Bp;this.Ef.FT=this.Bp-EN;this.Ef.Sc=[this,this.AoQ];this.Ef.
AkO(false);this.Ef.Aw(true);this.XR=Ph;}},Afk:function(IA,KZ){if(IA<0)IA=0;if(KZ>=
this.Dg)KZ=this.Dg-1;if(IA>KZ)return A1;var Y=this.X;var EN=this.Bp;Y=A.uq(Y,(Y[
1]+EN)+(IA*this.D5));Y=[].concat(Y.slice(0,3),Y[1]+(((KZ-IA)+1)*this.D5));return Y;
},OJ:function(IA,KZ){var B;if(IA<0)IA=0;if(IA>KZ)return;if(this.Py>this.Pz){this.
Py=IA;this.Pz=KZ;}else{if(IA<this.Py)this.Py=IA;if(KZ>this.Pz)this.Pz=KZ;}var Y=[
0,0,(B=this.X)[2]-B[0],B[3]-B[1]];Y=A.uq(Y,this.Bp+(IA*this.D5));Y=[].concat(Y.slice(
0,3),this.Bp+((KZ+1)*this.D5));this.AW();this.Av(Y);},AjX:function(){return this.
Bp;},_Init:function(aArg){D.J._Init.call(this,aArg);(this.N$=[]).__proto__=D.Aq.
N$;this.__proto__=D.Aq;this.H(L$);this.Ky=A.uO.Text;},_Mark:function(C){var B;D.
J._Mark.call(this,C);A.tQ(this.N$,C);if((B=this.Ef)&&(B._cycle!=C))B._Mark(B._cycle=
C);if((B=this.Bk)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.ED)&&(B._cycle!=
C))B._Mark(B._cycle=C);if((B=this.XR)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);
if((B=this.EB)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);},_className:"Core::VerticalList"
};D.BQ={VU:null,V0:null,GX:null,I1:null,Di:null,Ay:null,AG:0,De:0,AZ:0,Ij:0,DT:0
,Ba:A.qK,EQ:A.qK,DR:A.qK,Alh:8,AfB:1,Down:false,Kx:false,Hi:false,Fi:function(Bz
,aClip,aOffset,AY,aBlend){},Df:function(A0){var B;var AK=(D.Qa.isPrototypeOf(A0)?
A0:null);var B1=(D.Qd.isPrototypeOf(A0)?A0:null);var XM=this.Kx;var K$;var HM;var
U0;var FB;var Uo;if(!AK&&!B1)return null;K$=(!!AK&&AK.Down)&&!AK.DT;HM=(!!AK&&AK.
Down)&&(AK.DT>0);U0=(!!AK&&AK.Down)&&(AK.DT>50);FB=!!AK&&!AK.Down;Uo=!!B1;if(K$){
var PE=0;var Ka;this.AG=this.AG|(1<<AK.De);for(Ka=this.AG&4095;Ka>0;Ka=Ka>>1)if(
!!(Ka&1))PE=PE+1;if(PE===1)this.AG=(this.AG|16777216)|(4096<<AK.De);}if(FB)this.
AG=(this.AG&~(1<<AK.De))|33554432;if(U0&&(this.AG<16777216))this.AG=this.AG|67108864;
if(FB&&AK.Hi)this.AG=this.AG|67108864;if(FB&&!(this.AG&16777215))this.AG=0;if(HM&&(
this.AG>=67108864))this.GT().AbS(null,null,0x0);if((HM&&!!(this.AG&16777216))&&!
!(this.AG&33554432)){HM=false;FB=true;}if(!!AK&&!(this.AG&(4096<<AK.De)))return this;
if(!!B1&&!(this.AG&(4096<<B1.De)))return this;if(FB&&!(this.AG&16777216))return this;
if(((K$||Uo)||HM)&&((this.AG<16777216)||(this.AG>=33554432)))return this;if(FB)this.
AG=this.AG&3758100479;if(FB&&!(this.AG&16777215))this.AG=0;if(!!AK){this.Down=K$||
HM;this.Kx=this.Zv(AK.DR);this.EQ=AK.EQ;this.DR=AK.DR;this.Ba=BR;this.DT=AK.DT;this.
Ij=AK.Ij;this.Hi=AK.Hi;this.De=AK.De;this.AZ=AK.AZ;if(AK.Down&&!AK.DT)XM=false;}
if(!!B1){this.Down=true;this.Kx=this.Zv(B1.DR);this.EQ=B1.EQ;this.DR=B1.DR;this.
Ba=B1.Ba;this.DT=B1.DT;this.Ij=B1.Ij;this.De=B1.De;this.Hi=false;this.AZ=B1.AZ;(
B=this.VU)?B[1].call(B[0],this):null;}if((!!AK&&this.Down)&&!this.DT)(B=this.Ay)?
B[1].call(B[0],this):null;if((!!AK&&this.Down)&&(this.DT>0))(B=this.I1)?B[1].call(
B[0],this):null;if((this.Down&&this.Kx)&&!XM)(B=this.GX)?B[1].call(B[0],this):null;
if(((this.Down&&!this.Kx)&&XM)||((!this.Down&&this.Kx)&&XM))(B=this.V0)?B[1].call(
B[0],this):null;if(!!AK&&!this.Down)(B=this.Di)?B[1].call(B[0],this):null;return this;
},Ls:function(A9,Au,E$,J2,K1){var B;if(!!J2&&(J2!==this))return null;if((E$<1)||(
E$>this.AfB))return null;if(this.AG>=33554432)return null;if((this.AG>=16777216)&&
!(this.AG&(4096<<Au)))return null;if(this.AjL()){var Ag=A.it(A9,this.GetExtent()
);if(!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))){var FX=A.ts(A9);var BT=BR;if(FX[0]<Ag[0]
)BT=[Ag[0]-FX[0],BT[1]];if(FX[0]>=Ag[2])BT=[(Ag[2]-FX[0])-1,BT[1]];if(FX[1]<Ag[1
])BT=[BT[0],Ag[1]-FX[1]];if(FX[1]>=Ag[3])BT=[BT[0],(Ag[3]-FX[1])-1];return A._NewObject(
D.Su,0).Initialize(this,BT);}}else{var CA=A.tY(9,A.qK,null);var R;CA.Set(0,A.ts(
A9));CA.Set(1,CA.Get(0));CA.Set(2,CA.Get(0));CA.Set(3,CA.Get(0));CA.Set(4,CA.Get(
0));CA.Set(1,[A9[0],CA.Get(1)[1]]);CA.Set(2,[CA.Get(2)[0],A9[1]]);CA.Set(3,[A9[2
],CA.Get(3)[1]]);CA.Set(4,[CA.Get(4)[0],A9[3]]);CA.Set(5,A9.slice(0,2));CA.Set(6
,[A9[2],A9[1]]);CA.Set(7,[A9[0],A9[3]]);CA.Set(8,A9.slice(2,4));for(R=0;R<9;R=R+
1)if(this.Zv(CA.Get(R)))return A._NewObject(D.Su,0).Initialize(this,A.tU(CA.Get(
R),CA.Get(0)));}return null;},AaX:function(E){if(E<1)E=1;this.Alh=E;},V$:function(
E){if(E<1)E=1;this.AfB=E;},Aw:function(E){if(E)this.Bn(0x10,0x0);else this.Bn(0x0
,0x10);},_Init:function(aArg){D.I4._Init.call(this,aArg);this.__proto__=D.BQ;this.
O=0x11B;},_Mark:function(C){var B;D.I4._Mark.call(this,C);if((B=this.VU)&&((B=B[
0])._cycle!=C))B._Mark(B._cycle=C);if((B=this.V0)&&((B=B[0])._cycle!=C))B._Mark(
B._cycle=C);if((B=this.GX)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);if((B=this.
I1)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);if((B=this.Di)&&((B=B[0])._cycle!=
C))B._Mark(B._cycle=C);if((B=this.Ay)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);
},_className:"Core::SimpleTouchHandler"};D.G2={timer:null,Sd:null,MC:null,AG:0,Xp:
0,Kb:5000.000000,PO:0,XL:A.qK,Pr:0,K3:0,BE:0,Ox:0,Si:0,Pq:0,K2:0,BD:0,Ow:0,Ov:0,
EQ:A.qK,Ae$:A.qK,Dv:A.qK,Dw:A.qK,Ba:A.qK,Afh:0.500000,WC:true,Rf:false,IN:false,
IO:false,Mf:false,Fi:function(Bz,aClip,aOffset,AY,aBlend){},Df:function(A0){var B;
var AK=(D.Qa.isPrototypeOf(A0)?A0:null);var B1=(D.Qd.isPrototypeOf(A0)?A0:null);
var DL=(D.Vi.isPrototypeOf(A0)?A0:null);var K$;var HM;var U0;var FB;var Uo;K$=(!
!AK&&AK.Down)&&!AK.DT;HM=(!!AK&&AK.Down)&&(AK.DT>0);U0=(!!AK&&AK.Down)&&(AK.DT>50
);FB=!!AK&&!AK.Down;Uo=!!B1;if(K$){var PE=0;var Ka;this.AG=this.AG|(1<<AK.De);for(
Ka=this.AG&4095;Ka>0;Ka=Ka>>1)if(!!(Ka&1))PE=PE+1;if(PE===1)this.AG=(this.AG|16777216
)|(4096<<AK.De);}if(FB)this.AG=(this.AG&~(1<<AK.De))|33554432;if(U0&&(this.AG<16777216
))this.AG=this.AG|67108864;if(FB&&AK.Hi)this.AG=this.AG|67108864;if(FB&&!(this.AG&
16777215))this.AG=0;if(HM&&(this.AG>=67108864))this.GT().AbS(null,null,0x0);if((
HM&&!!(this.AG&16777216))&&!!(this.AG&33554432)){HM=false;FB=true;}if(!!AK&&!(this.
AG&(4096<<AK.De)))return this;if(!!B1&&!(this.AG&(4096<<B1.De)))return this;if(FB&&
!(this.AG&16777216))return this;if(((K$||Uo)||HM)&&((this.AG<16777216)||(this.AG>=
33554432)))return this;if(FB)this.AG=this.AG&3758100479;if(FB&&!(this.AG&16777215
))this.AG=0;if(!!DL&&(DL.WI===this))return null;if((!!DL&&DL.Down)&&(this.Mf||!this.
Rf))return null;if((!!DL&&DL.Down)&&!A.qH(this.X,this.L.AjR(DL.Lz)))return null;
if((!!DL&&!DL.Down)&&(!this.Mf||(this.Xp!==DL.De)))return null;if((!AK&&!B1)&&!DL
)return null;if(!!AK){this.Mf=K$||HM;this.Xp=AK.De;this.EQ=AK.EQ;}if(!!B1)this.Xp=
B1.De;if(!!DL){this.Mf=DL.Down;this.Xp=DL.De;}if(!!DL&&DL.Down){this.AeQ();this.
BD=(((DL.AZ-this.Ov)*0.001000)*this.K2)+this.BD;this.BE=(((DL.AZ-this.Si)*0.001000
)*this.K3)+this.BE;if(this.IN)this.BD=0.000000;if(this.IO)this.BE=0.000000;this.
K2=0.000000;this.K3=0.000000;this.IN=false;this.IO=false;this.XL=this.Ba;this.PO=
DL.AZ;return this;}if(K$){this.AeQ();this.BD=(((AK.AZ-this.Ov)*0.001000)*this.K2
)+this.BD;this.BE=(((AK.AZ-this.Si)*0.001000)*this.K3)+this.BE;if(this.IN||!this.
Rf)this.BD=0.000000;if(this.IO||!this.Rf)this.BE=0.000000;this.K2=0.000000;this.
K3=0.000000;this.IN=false;this.IO=false;if(!this.Rf){this.Rf=true;(B=this.Sd)?B[
1].call(B[0],this):null;}this.XL=this.Ba;this.PO=AK.AZ;}if(!!B1){var AE=A.tU(B1.
DR,B1.EQ);var A_=this.Ba;if(this.WC)A_=[this.XL[0]+AE[0],A_[1]];A_=[A_[0],this.XL[
1]+AE[1]];if(A_[0]<this.Dw[0])A_=[this.Dw[0]+(((A_[0]-this.Dw[0])/2)|0),A_[1]];else
if(A_[0]>this.Dv[0])A_=[this.Dv[0]+(((A_[0]-this.Dv[0])/2)|0),A_[1]];if(A_[1]<this.
Dw[1])A_=[A_[0],this.Dw[1]+(((A_[1]-this.Dw[1])/2)|0)];else if(A_[1]>this.Dv[1])
A_=[A_[0],this.Dv[1]+(((A_[1]-this.Dv[1])/2)|0)];if(!A.tH(A_,this.Ba)){this.Ae$=
A.tU(A_,this.Ba);this.Ba=A_;(B=this.MC)?B[1].call(B[0],this):null;}}if((!!DL&&!DL.
Down)&&((DL.AZ-this.PO)>=200)){this.BD=0.000000;this.BE=0.000000;}if(HM&&((AK.AZ-
this.PO)>=200)){this.BD=0.000000;this.BE=0.000000;}if(!!B1&&(B1.AZ>this.PO)){var
AE=B1.Ba;var Aii=1000.000000/(B1.AZ-this.PO);var Mv=0.000000;var Mw;if(this.WC)Mv=
AE[0]*Aii;Mw=AE[1]*Aii;if((Mv*this.BD)<0.000000)this.BD=0.000000;if((Mw*this.BE)<
0.000000)this.BE=0.000000;this.BD=(this.BD+Mv)*0.500000;this.BE=(this.BE+Mw)*0.500000;
this.PO=B1.AZ;}if(!FB&&!DL)return this;if(!!AK&&AK.Hi){this.BD=0.000000;this.BE=
0.000000;}if((this.Ba[0]<=this.Dw[0])||(this.Ba[0]>=this.Dv[0]))this.BD=0.000000;
else if(this.BD===0.000000){var B2=this.Ba[0];var CL=this.Dw[0];var CM=this.Dv[0
];if(B2<CL)CM=this.Dw[0];else if(B2>CM)CL=this.Dv[0];else{CL=B2;CM=B2;}if((CL-B2
)<=(B2-CM))B2=CL;else B2=CM;if(B2!==this.Ba[0]){var EK=B2-this.Ba[0];if(EK>0.000000
)this.BD=Math.sqrt((EK*2.000000)*this.Kb)+20.000000;if(EK<0.000000)this.BD=-Math.
sqrt((-EK*2.000000)*this.Kb)-20.000000;this.K2=(400.000000-(this.BD*this.BD))/(2.000000
*EK);this.Pq=B2;}}else{var Apl=this.BD*this.BD;var EK=Apl/(2.000000*this.Kb);var
B2=this.Ba[0];if(this.BD>0.000000)B2=B2+(EK|0);if(this.BD<0.000000)B2=B2-(EK|0);
if(B2>this.Dv[0])B2=this.Dv[0];else if(B2<this.Dw[0])B2=this.Dw[0];var Ai5=B2;var
CL=this.Dw[0];var CM=this.Dv[0];if(B2<CL)CM=this.Dw[0];else if(B2>CM)CL=this.Dv[
0];else{CL=B2;CM=B2;}if(this.BD>0.000000){if(CM<=this.Ba[0])B2=CL;else if((B2-CM
)<(CL-B2))B2=CM;else B2=CL;}else if(CL>=this.Ba[0])B2=CM;else if((B2-CM)>(CL-B2)
)B2=CL;else B2=CM;if(B2!==this.Ba[0]){EK=B2-this.Ba[0];if(B2!==Ai5){var ML=B2-Ai5;
if(ML>0.000000)this.BD=this.BD+Math.sqrt((ML*2.000000)*this.Kb);if(ML<0.000000)this.
BD=this.BD-Math.sqrt((-ML*2.000000)*this.Kb);}if(this.BD>0.000000)this.BD=this.BD+
20.000000;if(this.BD<0.000000)this.BD=this.BD-20.000000;this.K2=(400.000000-(this.
BD*this.BD))/(2.000000*EK);this.Pq=B2;}else this.BD=0.000000;}if((this.Ba[1]<=this.
Dw[1])||(this.Ba[1]>=this.Dv[1]))this.BE=0.000000;else if(this.BE===0.000000){var
B3=this.Ba[1];var CL=this.Dw[1];var CM=this.Dv[1];if(B3<CL)CM=this.Dw[1];else if(
B3>CM)CL=this.Dv[1];else{CL=B3;CM=B3;}if((CL-B3)<=(B3-CM))B3=CL;else B3=CM;if(B3
!==this.Ba[1]){var EK=B3-this.Ba[1];if(EK>0.000000)this.BE=Math.sqrt((EK*2.000000
)*this.Kb)+20.000000;if(EK<0.000000)this.BE=-Math.sqrt((-EK*2.000000)*this.Kb)-20.000000;
this.K3=(400.000000-(this.BE*this.BE))/(2.000000*EK);this.Pr=B3;}}else{var Apm=this.
BE*this.BE;var EK=Apm/(2.000000*this.Kb);var B3=this.Ba[1];if(this.BE>0.000000)B3=
B3+(EK|0);if(this.BE<0.000000)B3=B3-(EK|0);if(B3>this.Dv[1])B3=this.Dv[1];else if(
B3<this.Dw[1])B3=this.Dw[1];var Ai6=B3;var CL=this.Dw[1];var CM=this.Dv[1];if(B3<
CL)CM=this.Dw[1];else if(B3>CM)CL=this.Dv[1];else{CL=B3;CM=B3;}if(this.BE>0.000000
){if(CM<=this.Ba[1])B3=CL;else if((B3-CM)<(CL-B3))B3=CM;else B3=CL;}else if(CL>=
this.Ba[1])B3=CM;else if((B3-CM)>(CL-B3))B3=CL;else B3=CM;if(B3!==this.Ba[1]){EK=
B3-this.Ba[1];if(B3!==Ai6){var ML=B3-Ai6;if(ML>0.000000)this.BE=this.BE+Math.sqrt((
ML*2.000000)*this.Kb);if(ML<0.000000)this.BE=this.BE-Math.sqrt((-ML*2.000000)*this.
Kb);}if(this.BE>0.000000)this.BE=this.BE+20.000000;if(this.BE<0.000000)this.BE=this.
BE-20.000000;this.K3=(400.000000-(this.BE*this.BE))/(2.000000*EK);this.Pr=B3;}else
this.BE=0.000000;}if(!!AK)this.Ov=AK.AZ;if(!!DL)this.Ov=DL.AZ;this.Si=this.Ov;this.
Ow=this.Ba[0];this.Ox=this.Ba[1];this.Apn();return this;},Ls:function(A9,Au,E$,J2
,K1){var B;if(!!J2&&(J2!==this))return null;if(this.AG>=33554432)return null;if((
this.AG>=16777216)&&!(this.AG&(4096<<Au)))return null;if(!this.WC&&!!(K1&0xC))return null;
var Ag=A.it(A9,this.X);if(!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))){var FX=A.ts(A9);var
BT=BR;if(FX[0]<Ag[0])BT=[Ag[0]-FX[0],BT[1]];if(FX[0]>=Ag[2])BT=[(Ag[2]-FX[0])-1,
BT[1]];if(FX[1]<Ag[1])BT=[BT[0],Ag[1]-FX[1]];if(FX[1]>=Ag[3])BT=[BT[0],(Ag[3]-FX[
1])-1];return A._NewObject(D.Su,0).Initialize(this,BT);}return null;},AeQ:function(
){if(!!this.timer){A.sY([this,this.D3],this.timer,0);this.timer=null;}},Apn:function(
){this.timer=A._GetAutoObject(A.uX.Lv);A.sL([this,this.D3],this.timer,0);},D3:function(
P){var B;if(!this.timer)return;var Sl=(this.timer.AZ-this.Ov)*0.001000;var Sm=(this.
timer.AZ-this.Si)*0.001000;var Aps=Sl*Sl;var Apt=Sm*Sm;var Mv=(this.K2*Sl)+this.
BD;var Mw=(this.K3*Sm)+this.BE;var A_=[((((this.K2*0.500000)*Aps)+(this.BD*Sl))+
this.Ow)|0,((((this.K3*0.500000)*Apt)+(this.BE*Sm))+this.Ox)|0];if(this.IN&&(Sl>=
0.500000)){A_=[this.Pq,A_[1]];this.BD=0.000000;this.K2=0.000000;this.Ow=A_[0];this.
IN=false;}else if(this.IN){var Do=1.000000-Math.pow(1.000000-(Sl/0.500000),5.000000
);A_=[(this.Ow+((this.Pq-this.Ow)*Do))|0,A_[1]];}if(this.IO&&(Sm>=0.500000)){A_=[
A_[0],this.Pr];this.BE=0.000000;this.K3=0.000000;this.Ox=A_[1];this.IO=false;}else
if(this.IO){var Do=1.000000-Math.pow(1.000000-(Sm/0.500000),5.000000);A_=[A_[0],(
this.Ox+((this.Pr-this.Ox)*Do))|0];}if(((this.BD>0.000000)&&(Mv<0.000000))||((this.
BD<0.000000)&&(Mv>0.000000))){Mv=0.000000;A_=[this.Ba[0],A_[1]];}if(((this.BE>0.000000
)&&(Mw<0.000000))||((this.BE<0.000000)&&(Mw>0.000000))){Mw=0.000000;A_=[A_[0],this.
Ba[1]];}if(!this.IN&&(A_[0]<this.Dw[0])){this.Ow=A_[0];this.Pq=this.Dw[0];this.Ov=
this.timer.AZ;this.IN=true;}else if(!this.IN&&(A_[0]>this.Dv[0])){this.Ow=A_[0];
this.Pq=this.Dv[0];this.Ov=this.timer.AZ;this.IN=true;}if(!this.IO&&(A_[1]<this.
Dw[1])){this.Ox=A_[1];this.Pr=this.Dw[1];this.Si=this.timer.AZ;this.IO=true;}else
if(!this.IO&&(A_[1]>this.Dv[1])){this.Ox=A_[1];this.Pr=this.Dv[1];this.Si=this.timer.
AZ;this.IO=true;}if(((!this.IN&&(this.BD!==0.000000))&&(Mv>-20.000000))&&(Mv<20.000000
)){A_=[this.Pq,A_[1]];this.BD=0.000000;this.K2=0.000000;this.Ow=A_[0];}if(((!this.
IO&&(this.BE!==0.000000))&&(Mw>-20.000000))&&(Mw<20.000000)){A_=[A_[0],this.Pr];
this.BE=0.000000;this.K3=0.000000;this.Ox=A_[1];}if(!A.tH(A_,this.Ba)){this.Ae$=
A.tU(A_,this.Ba);this.Ba=A_;(B=this.MC)?B[1].call(B[0],this):null;}if((((this.BD===
0.000000)&&(this.BE===0.000000))&&!this.IN)&&!this.IO){this.AeQ();this.Rf=false;
}},Ako:function(E){if(E<0.000000)E=0.000000;if(E>1.000000)E=1.000000;if(E===this.
Afh)return;this.Afh=E;if(E<0.000000)E=0.000000;this.Kb=E*10000.000000;},_Init:function(
aArg){D.Cq._Init.call(this,aArg);this.__proto__=D.G2;this.O=0x11B;},_Mark:function(
C){var B;D.Cq._Mark.call(this,C);if((B=this.timer)&&(B._cycle!=C))B._Mark(B._cycle=
C);if((B=this.Sd)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);if((B=this.MC)&&((B=
B[0])._cycle!=C))B._Mark(B._cycle=C);},_className:"Core::SlideTouchHandler"};D.A3={
Al:null,Di:null,Ay:null,I1:null,PN:0,AZ:0,Ag5:0,BF:148,AA:0,BX:0,Cg:true,Down:false
,Wt:false,Go:false,Ap:function(aArg){var B;var Cl=(D.J.isPrototypeOf(B=this.G)?B:
null);if(!Cl)throw new Error(N1);this.Al=Cl.XO;Cl.XO=this;},Df:function(A0){var B;
if(!!A0&&A0.AjO(this.BF)){this.Down=A0.Down;this.AA=A0.AA;this.BX=A0.BX;this.AZ=
A0.AZ;this.Go=false;if(A0.Down){this.Ag5=this.PN;this.Wt=this.PN>0;if(this.Wt)(B=
this.I1)?B[1].call(B[0],this):null;else(B=this.Ay)?B[1].call(B[0],this):null;if(
!this.Go)this.PN=this.PN+1;return!this.Go;}if(!A0.Down){this.Wt=this.PN>1;this.Ag5=
this.PN-1;this.PN=0;(B=this.Di)?B[1].call(B[0],this):null;return!this.Go;}}return false;
},_Init:function(aArg){this.__proto__=D.A3;this.Ap(aArg);A.gx++;},_Done:function(
){this.__proto__=null;A.gx--;},_ReInit:function(){},_Mark:function(C){var B;if((
B=this.Al)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.Di)&&((B=B[0])._cycle!=
C))B._Mark(B._cycle=C);if((B=this.Ay)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);
if((B=this.I1)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);if((B=this.G)&&(B._cycle
!=C))B._Mark(B._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};D.Su={Bk:null,Sw:0,Ba:A.qK,Initialize:function(Aa,aOffset){this.Bk=Aa;this.Ba=
aOffset;this.Sw=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:
function(aArg){this.__proto__=D.Su;A.gx++;},_Done:function(){this.__proto__=null;
A.gx--;},_ReInit:function(){},_Mark:function(C){var B;if((B=this.Bk)&&(B._cycle!=
C))B._Mark(B._cycle=C);if((B=this.G)&&(B._cycle!=C))B._Mark(B._cycle=C);},G:null
,_cycle:0,_observers:null,_className:"Core::CursorHit"};D.Qz={Op:null,DM:A.qL,AC:
A.qL,isEmpty:false,_Init:function(aArg){this.__proto__=D.Qz;A.gx++;},_Done:function(
){this.__proto__=null;A.gx--;},_ReInit:function(){},_Mark:function(C){var B;if((
B=this.Op)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.G)&&(B._cycle!=C))B._Mark(
B._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Core::LayoutContext"};
D.VJ={MB:A.qK,MA:A.qK,_Init:function(aArg){D.Qz._Init.call(this,aArg);this.__proto__=
D.VJ;},_className:"Core::LayoutLineContext"};D.VK={UN:A.qK,UM:A.qK,MB:A.qK,MA:A.
qK,_Init:function(aArg){D.Qz._Init.call(this,aArg);this.__proto__=D.VK;},_className:
"Core::LayoutQuadContext"};D.YJ={Cl:null,Al:null,GF:null,GJ:null,Ev:null,PL:null
,_Init:function(aArg){this.__proto__=D.YJ;A.gx++;},_Done:function(){this.__proto__=
null;A.gx--;},_ReInit:function(){},_Mark:function(C){var B;if((B=this.Cl)&&(B._cycle
!=C))B._Mark(B._cycle=C);if((B=this.Al)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=
this.GF)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.GJ)&&(B._cycle!=C))B._Mark(
B._cycle=C);if((B=this.Ev)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.PL)&&(B.
_cycle!=C))B._Mark(B._cycle=C);if((B=this.G)&&(B._cycle!=C))B._Mark(B._cycle=C);
},G:null,_cycle:0,_observers:null,_className:"Core::DialogContext"};D.Acd={GD:null
,A8:null,A5:null,Aij:false,An_:function(){if(!this.GD)return;var FD=this.GD;this.
GD.FA=null;this.GD=null;A.lz([this,this.Aex],this);FD.AfI(this);},AoN:function(P
){if(!!this.GD)return;if(!this.A5)return;this.GD=this.A5;this.A5=this.A5.Al;if(!
!this.A5)this.A5.Ar=null;else this.A8=null;this.GD.Al=null;this.Aij=true;this.GD.
JH(this);this.Aij=false;},Ao1:function(P){A.lz([this,this.AoN],this);},Ao0:function(
P){A.lz([this,this.Ao1],this);},Aex:function(P){A.lz([this,this.Ao0],this);},Ajq:
function(C_){if(!C_||!C_.FA)return;if(C_.FA!==this)throw new Error(FV);var Ajc=false;
if(this.GD===C_){this.GD=null;Ajc=true;A.lz([this,this.Aex],this);}else{if(!!C_.
Al)C_.Al.Ar=C_.Ar;else this.A8=C_.Ar;if(!!C_.Ar)C_.Ar.Al=C_.Al;else this.A5=C_.Al;
C_.Ar=null;C_.Al=null;}C_.FA=null;if(Ajc)C_.AfG(this);},Ag8:function(C_,AdW){if(
!C_)return;if(!!C_.FA)throw new Error(KX);C_.FA=this;if(AdW){C_.Al=this.A5;if(!!
this.A5)this.A5.Ar=C_;else this.A8=C_;this.A5=C_;}else{C_.Ar=this.A8;if(!!this.A8
)this.A8.Al=C_;else this.A5=C_;this.A8=C_;}if(!this.GD)A.lz([this,this.Aex],this
);},_Init:function(aArg){this.__proto__=D.Acd;A.gx++;},_Done:function(){this.__proto__=
null;A.gx--;},_ReInit:function(){},_Mark:function(C){var B;if((B=this.GD)&&(B._cycle
!=C))B._Mark(B._cycle=C);if((B=this.A8)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=
this.A5)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.G)&&(B._cycle!=C))B._Mark(
B._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"};D.NH={
FA:null,Ar:null,Al:null,AfI:function(RS){},AfG:function(RS){},JH:function(RS){this.
IT();},M2:function(){if(!!this.FA&&(this.FA.GD===this))this.FA.An_();},IT:function(
){if(!!this.FA)this.FA.Ajq(this);},Zu:function(){return!!this.FA&&(this.FA.GD===
this);},_Init:function(aArg){this.__proto__=D.NH;A.gx++;},_Done:function(){this.
__proto__=null;A.gx--;},_ReInit:function(){},_Mark:function(C){var B;if((B=this.
FA)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.Ar)&&(B._cycle!=C))B._Mark(B._cycle=
C);if((B=this.Al)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.G)&&(B._cycle!=C
))B._Mark(B._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Core::Task"};
D.Acc={As:null,Sj:null,JH:function(RS){this.Sj.As=this.As;A.qJ(this.Sj,0);A.lz([
this,this.AoM],this);},AoM:function(P){this.Sj.As=null;this.Sj=null;this.As=null;
this.M2();},_Init:function(aArg){D.NH._Init.call(this,aArg);this.__proto__=D.Acc;
},_Mark:function(C){var B;D.NH._Mark.call(this,C);if((B=this.As)&&(B._cycle!=C))
B._Mark(B._cycle=C);if((B=this.Sj)&&(B._cycle!=C))B._Mark(B._cycle=C);},_className:
"Core::SystemEventTask"};D.WH={_Init:function(){D.Acd._Init.call(this,0);},_variants:
function(){return this;},_this:null};D.LU={resource:null,GQ:function(){this.resource=
null;},Ap:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=
D.LU;this.Ap(aArg);A.gx++;},_Done:function(){this.GQ();this.__proto__=null;A.gx--;
},_ReInit:function(){},_Mark:function(C){var B;if((B=this.G)&&(B._cycle!=C))B._Mark(
B._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Core::Resource"};D.Timer={
C4:null,timer:null,AZ:0,Period:1000,Lj:0,Cg:false,GQ:function(){var tmp=this.timer;
if(!!tmp)tmp.DestroyTimer();this.timer=null;},X0:function(aBegin,aPeriod){if(aBegin<
0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>
0)))tmp=A.sX(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin
,aPeriod);}this.timer=tmp;},C3:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.Cg)this.X0(this.Lj,E);},LM:function(E){if(E<0)E=0;if(E===this.
Lj)return;this.Lj=E;if(this.Cg)this.X0(E,this.Period);},Aw:function(E){if(E===this.
Cg)return;this.Cg=E;if(E)this.X0(this.Lj,this.Period);else this.X0(0,0);this.AZ=
this.SL();},SL:function(){var ticksCount=0;ticksCount=((new Date).getTime()-A.qG
)|0;return ticksCount;},Trigger:function(){var B;this.AZ=this.SL();if(!this.Period
)this.Aw(false);(B=this.C4)?B[1].call(B[0],this):null;},_Init:function(aArg){this.
__proto__=D.Timer;A.gx++;},_Done:function(){this.GQ();this.__proto__=null;A.gx--;
},_ReInit:function(){},_Mark:function(C){var B;if((B=this.C4)&&((B=B[0])._cycle!=
C))B._Mark(B._cycle=C);if((B=this.G)&&(B._cycle!=C))B._Mark(B._cycle=C);},G:null
,_cycle:0,_observers:null,_className:"Core::Timer"};D.Ik={As:null,FA:null,Trigger:
function(AnU,AdW){var FD=A._NewObject(D.Acc,0);FD.Sj=this;FD.As=AnU;this.FA.Ag8(
FD,AdW);},_Init:function(aArg){this.__proto__=D.Ik;this.FA=A._GetAutoObject(D.WH
);A.gx++;},_Done:function(){this.__proto__=null;A.gx--;},_ReInit:function(){},_Mark:
function(C){var B;if((B=this.As)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.FA
)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.G)&&(B._cycle!=C))B._Mark(B._cycle=
C);},G:null,_cycle:0,_observers:null,_className:"Core::SystemEvent"};D.Il={YD:null
,Event:null,AN:null,Ec:function(P){var B;if(!this.Event)return;this.YD=this.Event.
As;(B=this.AN)?B[1].call(B[0],this):null;this.YD=null;},I2:function(E){if(this.Event===
E)return;if(!!this.Event)A.sY([this,this.Ec],this.Event,0);this.Event=E;if(!!this.
Event)A.sL([this,this.Ec],this.Event,0);},_Init:function(aArg){this.__proto__=D.
Il;A.gx++;},_Done:function(){this.__proto__=null;A.gx--;},_ReInit:function(){},_Mark:
function(C){var B;if((B=this.YD)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.Event
)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.AN)&&((B=B[0])._cycle!=C))B._Mark(
B._cycle=C);if((B=this.G)&&(B._cycle!=C))B._Mark(B._cycle=C);},G:null,_cycle:0,_observers:
null,_className:"Core::SystemEventHandler"};D.AS={AN:null,Dx:null,Ec:function(P){
var B;(B=this.AN)?B[1].call(B[0],this):null;},Bc:function(E){if(A.tJ(this.Dx,E))
return;if(!!this.Dx)A.s0([this,this.Ec],this.Dx,0);this.Dx=E;if(!!this.Dx)A.sN([
this,this.Ec],this.Dx,0);},_Init:function(aArg){this.__proto__=D.AS;A.gx++;},_Done:
function(){this.__proto__=null;A.gx--;},_ReInit:function(){},_Mark:function(C){var
B;if((B=this.AN)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);if((B=this.Dx)&&((B=B[
0])._cycle!=C))B._Mark(B._cycle=C);if((B=this.G)&&(B._cycle!=C))B._Mark(B._cycle=
C);},G:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};D.ArO={
I_:0x1,ApK:0x2,Aqs:0x4,ArJ:0x8,Cg:0x10,Art:0x20,Jx:0x40,AqV:0x80,Aqq:0x100,AqE:0x200
,Aqg:0x400,Ard:0x800,WR:0x1000,ArM:0x2000,Aq0:0x4000,Aq1:0x8000,Ap9:0x10000,AqZ:
0x20000,Arp:0x40000};D.DD={Are:0x1,Arf:0x2,ApH:0x4,ApI:0x8,ApJ:0x10,ApG:0x20};D.
Aqu={AqX:0,ArG:1,ApV:2,AqL:3,Arh:4,ArH:5,ArI:6,ApW:7,ApX:8,AqN:9,AqM:10,Arj:11,Ari:
12};D.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:
9,Key0:10,Key1:11,Key2:12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19
,Red:20,Green:21,Blue:22,Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:
30,F6:31,F7:32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:
39,SkipNext:40,Home:41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:
47,Show:48,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:
57,SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:
67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:
76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,
User1:86,User2:87,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94
,User10:95,User11:96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:
102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,
KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119
,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128
,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136
,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142
,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:146,CursorKeys:147
,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154
,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:
161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167
,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:
174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180
,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:
187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:
194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:
201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:
207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:
213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:
218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:
223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:
228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:
233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:
238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:
243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:
248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:
253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:
258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:
263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:
268,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:
272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
279,AltF6:280,AltF7:281,AltF8:282,AltF9:283,AltF10:284,AltEnter:285,AltEscape:286
,AltUp:287,AltDown:288,AltLeft:289,AltRight:290,AltPageUp:291,AltPageDown:292,AltBackspace:
293,AltInsert:294,AltDelete:295,AltHome:296,AltEnd:297,AltTab:298,AltShiftF1:299
,AltShiftF2:300,AltShiftF3:301,AltShiftF4:302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:
305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:308,AltShiftEnter:309,AltShiftEscape:
310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:313,AltShiftRight:314,AltShiftPageUp:
315,AltShiftPageDown:316,AltShiftBackspace:317,AltShiftInsert:318,AltShiftDelete:
319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:322,ShiftF1:323,ShiftF2:324,ShiftF3:
325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:329,ShiftF8:330,ShiftF9:331,ShiftF10:
332,ShiftEnter:333,ShiftEscape:334,ShiftUp:335,ShiftDown:336,ShiftLeft:337,ShiftRight:
338,ShiftPageUp:339,ShiftPageDown:340,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};D.Arg={ArV:0x1,ArS:0x2,ArT:0x4,ArU:
0x8,AqP:0x10,Aqt:0x20};
D._Init=function(){D.QA.__proto__=D.Bk;D.I4.__proto__=D.Bk;D.Cq.__proto__=D.Bk;D.
J.__proto__=D.Cq;D.Root.__proto__=D.J;D.KeyEvent.__proto__=D.Event;D.Vi.__proto__=
D.Event;D.Qa.__proto__=D.Event;D.Qd.__proto__=D.Event;D.Fq.__proto__=D.Cq;D.Aq.__proto__=
D.J;D.BQ.__proto__=D.I4;D.G2.__proto__=D.Cq;D.VJ.__proto__=D.Qz;D.VK.__proto__=D.
Qz;D.Acc.__proto__=D.NH;};D._ReInit=function(){var B;if((B=D.WH._this))B._ReInit(
);};D.Cx=function(C){var B;if((B=D.WH._this)&&(B._cycle!=C))B._Done(D.WH._this=null
);};return D;})();

/* Embedded Wizard */