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
Core=(function(){var B=EmWiApp;var D={};
var BN=[0,0];var AZ=[0,0,0,0];var Ao="The view does not belong to this group";var
CW="The dialog component is already presented";var Fz="The dialog component is actually not presented";
var He="No fader to perform the fade-in/out operation";var Cw="Trying to use the same fader twice";
var H_="Trying to fade-in/out a group which belongs to another owner";var Hf="No view to restack";
var Hg="View is not in this group";var Jx="No view to remove";var FA="No view to add";
var Fc="View already in a group";var Fd="Recursive invalidate during active update cycle.";
var LF=[-8,-8,9,9];var Om="The method RestackTop() is not available in Core::VerticalList.";
var Gt="The method Restack() is not available in Core::VerticalList.";var Oo="The method Remove() is not available in Core::VerticalList.";
var Op="The method Add() is not available in Core::VerticalList.";var Oq="The Slide Touch Handler:";
var LG="is already connected with a view.";var Ni="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Nj=[0,0,170,120];var Or="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var Jy="Trying to cancel a task not belonging to this queue!";
var Gu="Trying to enqueue a task twice!";
D.Bo={Ai:null,Al:null,L:null,Bu:null,M:0x103,G8:0,Dq:0x14,QZ:function(An,QL){},Ai6:
function(E){if(this.G8===E)return;this.G8=E;if(!!this.L){var Me=this.Ai;var AB=0;
while(!!Me&&(E>Me.G8)){Me=Me.Ai;AB=AB+1;}Me=this.Al;while(!!Me&&(E<Me.G8)){Me=Me.
Al;AB=AB-1;}if(!!AB)this.L.Aft(this,AB);}},GZ:function(E){var A;var AB=E^this.Dq;
if(!AB)return;this.Dq=E;if(!!this.Bu&&!((this.M&0x400)===0x400)){this.L.M=this.L.
M|0x5000;B.lz([A=this.L,A.D3],this);this.L.As([0,0,(A=this.L.S)[2]-A[0],A[3]-A[1
]]);}if(!!this.Bu&&((this.M&0x400)===0x400)){this.Bu.NE.M=this.Bu.NE.M|0x1000;this.
L.M=this.L.M|0x4000;B.lz([A=this.L,A.D3],this);}},HD:function(){var AG=this.L;while(
!!AG){var TX=(D.Root.isPrototypeOf(AG)?AG:null);if(!!TX)return TX;AG=AG.L;}return null;
},E2:function(Bs,aClip,aOffset,AR,aBlend){},C7:function(AW){return null;},K7:function(
A5,Aq,EU,JA,KJ){return null;},Rl:function(An,Em){return BN;},MR:function(aOffset
,QK){},GetExtent:function(){return AZ;},Bh:function(LL,Oz){var A;if(((this.M&0x200
)===0x200))LL=LL&~0x400;var Acm=(this.M&~Oz)|LL;var Nq=Acm^this.M;this.M=Acm;if(
!!this.L&&!!(Nq&0x14)){var Agh=((this.M&0x14)===0x14);if(Agh&&!this.L.BY)this.L.
Ad(this);if(!Agh&&(this.L.BY===this))this.L.Ad(this.L.XN(this,0x14));}if(!!this.
L&&!!(Nq&0x403))this.L.As(this.GetExtent());if(((!!this.Bu&&!!this.L)&&((Acm&0x400
)===0x400))&&((Nq&0x1)===0x1)){this.M=this.M|0x800;this.L.M=this.L.M|0x4000;B.lz([
A=this.L,A.D3],this);}if(!!this.L&&((Nq&0x400)===0x400)){this.Bu=null;this.M=this.
M|0x800;this.L.M=this.L.M|0x4000;B.lz([A=this.L,A.D3],this);}},_Init:function(aArg
){this.__proto__=D.Bo;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:
function(){},_Mark:function(C){var A;if((A=this.Ai)&&(A._cycle!=C))A._Mark(A._cycle=
C);if((A=this.Al)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.L)&&(A._cycle!=C
))A._Mark(A._cycle=C);if((A=this.Bu)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.
G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:null,_className:
"Core::View"};D.PK={BG:B.qK,BF:B.qK,QZ:function(An,QL){var Am=B._NewObject(D.UN,
0);this.Bu=null;Am.Dy=this.getExtent();Am.Ax=An;Am.NE=QL;Am.L7=this.BF;Am.L8=this.
BG;this.Bu=Am;},Rl:function(An,Em){var A;var Bt=this.Dq;var Am=(D.UN.isPrototypeOf(
A=this.Bu)?A:null);var x1=Am.Dy[0];var y1=Am.Dy[1];var x2=Am.Dy[2];var y2=Am.Dy[
3];var Dm=[An[2]-An[0],An[3]-An[1]];var AM=x2-x1;var AD=y2-y1;var tmp;if(!Em){var
EM=[(A=Am.Ax)[2]-A[0],A[3]-A[1]];x1=x1-Am.Ax[0];y1=y1-Am.Ax[1];if(EM[0]!==Dm[0]){
var B4=((Bt&0x4)===0x4);var B5=((Bt&0x8)===0x8);var FN=((Bt&0x1)===0x1);if(!B4&&(
FN||!B5))x1=((x1*Dm[0])/EM[0])|0;if(!B5&&(FN||!B4)){x2=x2-Am.Ax[0];x2=((x2*Dm[0]
)/EM[0])|0;x2=x2-Dm[0];}else x2=x2-Am.Ax[2];x1=x1+An[0];x2=x2+An[2];if(!FN){if(B4&&
!B5)x2=x1+AM;else if(!B4&&B5)x1=x2-AM;else{x1=x1+((((x2-x1)-AM)/2)|0);x2=x1+AM;}
}}else{x2=x2-Am.Ax[2];x1=x1+An[0];x2=x2+An[2];}if(EM[1]!==Dm[1]){var B6=((Bt&0x10
)===0x10);var B3=((Bt&0x20)===0x20);var FO=((Bt&0x2)===0x2);if(!B6&&(FO||!B3))y1=((
y1*Dm[1])/EM[1])|0;if(!B3&&(FO||!B6)){y2=y2-Am.Ax[1];y2=((y2*Dm[1])/EM[1])|0;y2=
y2-Dm[1];}else y2=y2-Am.Ax[3];y1=y1+An[1];y2=y2+An[3];if(!FO){if(B6&&!B3)y2=y1+AD;
else if(!B6&&B3)y1=y2-AD;else{y1=y1+((((y2-y1)-AD)/2)|0);y2=y1+AD;}}}else{y2=y2-
Am.Ax[3];y1=y1+An[1];y2=y2+An[3];}}else{switch(Em){case 3:{x1=An[0];x2=x1+AM;}break;
case 4:{x2=An[2];x1=x2-AM;}break;case 1:{y1=An[1];y2=y1+AD;}break;case 2:{y2=An[
3];y1=y2-AD;}break;default:;}if((Em===3)||(Em===4)){var B6=((Bt&0x10)===0x10);var
B3=((Bt&0x20)===0x20);var FO=((Bt&0x2)===0x2);if(FO){y1=An[1];y2=An[3];}else if(
B6&&!B3){y1=An[1];y2=y1+AD;}else if(B3&&!B6){y2=An[3];y1=y2-AD;}else{y1=An[1]+((((
An[3]-An[1])-AD)/2)|0);y2=y1+AD;}}if((Em===1)||(Em===2)){var B4=((Bt&0x4)===0x4);
var B5=((Bt&0x8)===0x8);var FN=((Bt&0x1)===0x1);if(FN){x1=An[0];x2=An[2];}else if(
B4&&!B5){x1=An[0];x2=x1+AM;}else if(B5&&!B4){x2=An[2];x1=x2-AM;}else{x1=An[0]+((((
An[2]-An[0])-AM)/2)|0);x2=x1+AM;}}}Am.isEmpty=(x1>=x2)||(y1>=y2);AM=x2-x1;AD=y2-
y1;if(Am.L8[0]<Am.L7[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(Am.L8[1]<Am.L7[1]){tmp=y1;y1=
y2-1;y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.M&0x100)===0x100
)){this.BF=[x1,y1];this.BG=[x2,y2];}else{this.AS([x1,y1]);this.AP([x2,y2]);this.
Bu=Am;}return[AM,AD];},MR:function(aOffset,QK){if(QK){this.BF=B.tV(this.BF,aOffset
);this.BG=B.tV(this.BG,aOffset);}else{this.AS(B.tV(this.BF,aOffset));this.AP(B.tV(
this.BG,aOffset));}},GetExtent:function(){if(!!this.Bu&&this.Bu.isEmpty)return AZ;
return this.getExtent();},getExtent:function(){var x1=this.BF[0];var y1=this.BF[
1];var x2=this.BG[0];var y2=this.BG[1];var AM=x2-x1;var AD=y2-y1;var tmp;if(AM<0
)AM=-AM;if(AD<0)AD=-AD;if(AM>=AD){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(AD>=AM){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},AP:function(E){var A;if(B.tH(E,this.BG
))return;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent());this.Bu=null;
this.BG=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent());if((!!this.
L&&((this.M&0x400)===0x400))&&!((this.L.M&0x2000)===0x2000)){this.M=this.M|0x800;
this.L.M=this.L.M|0x4000;B.lz([A=this.L,A.D3],this);}},AS:function(E){var A;if(B.
tH(E,this.BF))return;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent(
));this.Bu=null;this.BF=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent(
));if((!!this.L&&((this.M&0x400)===0x400))&&!((this.L.M&0x2000)===0x2000)){this.
M=this.M|0x800;this.L.M=this.L.M|0x4000;B.lz([A=this.L,A.D3],this);}},_Init:function(
aArg){D.Bo._Init.call(this,aArg);this.__proto__=D.PK;},_className:"Core::LineView"
};D.II={C$:B.qK,DJ:B.qK,BG:B.qK,BF:B.qK,QZ:function(An,QL){var Am=B._NewObject(D.
UO,0);this.Bu=null;Am.Dy=this.GetExtent();Am.Ax=An;Am.NE=QL;Am.L7=this.BF;Am.L8=
this.BG;Am.TT=this.DJ;Am.TU=this.C$;this.Bu=Am;},Rl:function(An,Em){var A;var Bt=
this.Dq;var Am=(D.UO.isPrototypeOf(A=this.Bu)?A:null);var x1=Am.Dy[0];var y1=Am.
Dy[1];var x2=Am.Dy[2];var y2=Am.Dy[3];var Dm=[An[2]-An[0],An[3]-An[1]];var AM=x2-
x1;var AD=y2-y1;if(!Em){var EM=[(A=Am.Ax)[2]-A[0],A[3]-A[1]];x1=x1-Am.Ax[0];y1=y1-
Am.Ax[1];if(EM[0]!==Dm[0]){var B4=((Bt&0x4)===0x4);var B5=((Bt&0x8)===0x8);var FN=((
Bt&0x1)===0x1);if(!B4&&(FN||!B5))x1=((x1*Dm[0])/EM[0])|0;if(!B5&&(FN||!B4)){x2=x2-
Am.Ax[0];x2=((x2*Dm[0])/EM[0])|0;x2=x2-Dm[0];}else x2=x2-Am.Ax[2];x1=x1+An[0];x2=
x2+An[2];if(!FN){if(B4&&!B5)x2=x1+AM;else if(!B4&&B5)x1=x2-AM;else{x1=x1+((((x2-
x1)-AM)/2)|0);x2=x1+AM;}}}else{x2=x2-Am.Ax[2];x1=x1+An[0];x2=x2+An[2];}if(EM[1]!==
Dm[1]){var B6=((Bt&0x10)===0x10);var B3=((Bt&0x20)===0x20);var FO=((Bt&0x2)===0x2
);if(!B6&&(FO||!B3))y1=((y1*Dm[1])/EM[1])|0;if(!B3&&(FO||!B6)){y2=y2-Am.Ax[1];y2=((
y2*Dm[1])/EM[1])|0;y2=y2-Dm[1];}else y2=y2-Am.Ax[3];y1=y1+An[1];y2=y2+An[3];if(!
FO){if(B6&&!B3)y2=y1+AD;else if(!B6&&B3)y1=y2-AD;else{y1=y1+((((y2-y1)-AD)/2)|0);
y2=y1+AD;}}}else{y2=y2-Am.Ax[3];y1=y1+An[1];y2=y2+An[3];}}else{switch(Em){case 3:{
x1=An[0];x2=x1+AM;}break;case 4:{x2=An[2];x1=x2-AM;}break;case 1:{y1=An[1];y2=y1+
AD;}break;case 2:{y2=An[3];y1=y2-AD;}break;default:;}if((Em===3)||(Em===4)){var B6=((
Bt&0x10)===0x10);var B3=((Bt&0x20)===0x20);var FO=((Bt&0x2)===0x2);if(FO){y1=An[
1];y2=An[3];}else if(B6&&!B3){y1=An[1];y2=y1+AD;}else if(B3&&!B6){y2=An[3];y1=y2-
AD;}else{y1=An[1]+((((An[3]-An[1])-AD)/2)|0);y2=y1+AD;}}if((Em===1)||(Em===2)){var
B4=((Bt&0x4)===0x4);var B5=((Bt&0x8)===0x8);var FN=((Bt&0x1)===0x1);if(FN){x1=An[
0];x2=An[2];}else if(B4&&!B5){x1=An[0];x2=x1+AM;}else if(B5&&!B4){x2=An[2];x1=x2-
AM;}else{x1=An[0]+((((An[2]-An[0])-AM)/2)|0);x2=x1+AM;}}}Am.isEmpty=(x1>=x2)||(y1>=
y2);AM=(x2-x1)-1;AD=(y2-y1)-1;var LX=Am.Dy[0];var LY=Am.Dy[1];var KO=(Am.Dy[2]-LX
)-1;var KN=(Am.Dy[3]-LY)-1;if(!KO)KO=1;if(!KN)KN=1;if(((this.M&0x100)===0x100)){
this.BF=[x1+((((Am.L7[0]-LX)*AM)/KO)|0),y1+((((Am.L7[1]-LY)*AD)/KN)|0)];this.BG=[
x1+((((Am.L8[0]-LX)*AM)/KO)|0),y1+((((Am.L8[1]-LY)*AD)/KN)|0)];this.DJ=[x1+((((Am.
TT[0]-LX)*AM)/KO)|0),y1+((((Am.TT[1]-LY)*AD)/KN)|0)];this.C$=[x1+((((Am.TU[0]-LX
)*AM)/KO)|0),y1+((((Am.TU[1]-LY)*AD)/KN)|0)];}else{this.AS([x1+((((Am.L7[0]-LX)*
AM)/KO)|0),y1+((((Am.L7[1]-LY)*AD)/KN)|0)]);this.AP([x1+((((Am.L8[0]-LX)*AM)/KO)|
0),y1+((((Am.L8[1]-LY)*AD)/KN)|0)]);this.EQ([x1+((((Am.TT[0]-LX)*AM)/KO)|0),y1+((((
Am.TT[1]-LY)*AD)/KN)|0)]);this.E6([x1+((((Am.TU[0]-LX)*AM)/KO)|0),y1+((((Am.TU[1
]-LY)*AD)/KN)|0)]);this.Bu=Am;}return[AM+1,AD+1];},MR:function(aOffset,QK){if(QK
){this.BF=B.tV(this.BF,aOffset);this.BG=B.tV(this.BG,aOffset);this.DJ=B.tV(this.
DJ,aOffset);this.C$=B.tV(this.C$,aOffset);}else{this.AS(B.tV(this.BF,aOffset));this.
AP(B.tV(this.BG,aOffset));this.EQ(B.tV(this.DJ,aOffset));this.E6(B.tV(this.C$,aOffset
));}},GetExtent:function(){if(!!this.Bu&&this.Bu.isEmpty)return AZ;var x1=this.BF[
0];var y1=this.BF[1];var x2=this.DJ[0];var y2=this.DJ[1];if((((this.C$[0]!==x1)||(
this.BG[1]!==y1))||(this.BG[0]!==x2))||(this.C$[1]!==y2)){if(this.BG[0]<x1)x1=this.
BG[0];if(this.DJ[0]<x1)x1=this.DJ[0];if(this.C$[0]<x1)x1=this.C$[0];if(this.BG[1
]<y1)y1=this.BG[1];if(this.DJ[1]<y1)y1=this.DJ[1];if(this.C$[1]<y1)y1=this.C$[1];
if(this.BF[0]>x2)x2=this.BF[0];if(this.BG[0]>x2)x2=this.BG[0];if(this.C$[0]>x2)x2=
this.C$[0];if(this.BF[1]>y2)y2=this.BF[1];if(this.BG[1]>y2)y2=this.BG[1];if(this.
C$[1]>y2)y2=this.C$[1];}else{var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},E6:function(E){var A;if(B.tH(E,this.
C$))return;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent());this.Bu=
null;this.C$=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent());if((
!!this.L&&((this.M&0x400)===0x400))&&!((this.L.M&0x2000)===0x2000)){this.M=this.
M|0x800;this.L.M=this.L.M|0x4000;B.lz([A=this.L,A.D3],this);}},EQ:function(E){var
A;if(B.tH(E,this.DJ))return;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent(
));this.Bu=null;this.DJ=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent(
));if((!!this.L&&((this.M&0x400)===0x400))&&!((this.L.M&0x2000)===0x2000)){this.
M=this.M|0x800;this.L.M=this.L.M|0x4000;B.lz([A=this.L,A.D3],this);}},AP:function(
E){var A;if(B.tH(E,this.BG))return;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.
GetExtent());this.Bu=null;this.BG=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(
this.GetExtent());if((!!this.L&&((this.M&0x400)===0x400))&&!((this.L.M&0x2000)===
0x2000)){this.M=this.M|0x800;this.L.M=this.L.M|0x4000;B.lz([A=this.L,A.D3],this);
}},AS:function(E){var A;if(B.tH(E,this.BF))return;if(!!this.L&&((this.M&0x1)===0x1
))this.L.As(this.GetExtent());this.Bu=null;this.BF=E;if(!!this.L&&((this.M&0x1)===
0x1))this.L.As(this.GetExtent());if((!!this.L&&((this.M&0x400)===0x400))&&!((this.
L.M&0x2000)===0x2000)){this.M=this.M|0x800;this.L.M=this.L.M|0x4000;B.lz([A=this.
L,A.D3],this);}},X$:function(EE){var Cp=B.tY(4,B.qK,null);var Aa=0;var Cs=3;var Aca=
false;var Acb=false;Cp.Set(0,this.BF);Cp.Set(1,this.BG);Cp.Set(2,this.DJ);Cp.Set(
3,this.C$);while(Aa<4){var Ahp=Cp.Get(Aa)[0];var W5=Cp.Get(Aa)[1];var AnE=Cp.Get(
Cs)[0];var AcW=Cp.Get(Cs)[1];if(((W5>EE[1])!==(AcW>EE[1]))||((W5<EE[1])!==(AcW<EE[
1]))){var GI=((((AnE-Ahp)*(EE[1]-W5))/(AcW-W5))|0)+Ahp;if(EE[0]>GI)Aca=!Aca;if(EE[
0]<GI)Acb=!Acb;}Cs=Aa;Aa=Aa+1;}return Aca||Acb;},Ah1:function(){return((((this.BF[
0]===this.C$[0])&&(this.BG[0]===this.DJ[0]))&&(this.BF[1]===this.BG[1]))&&(this.
DJ[1]===this.C$[1]))||((((this.BF[0]===this.BG[0])&&(this.DJ[0]===this.C$[0]))&&(
this.BF[1]===this.C$[1]))&&(this.BG[1]===this.DJ[1]));},_Init:function(aArg){D.Bo.
_Init.call(this,aArg);this.__proto__=D.II;},_className:"Core::QuadView"};D.Cf={S:
B.qL,QZ:function(An,QL){var Am=B._NewObject(D.PJ,0);Am.Dy=this.S;Am.Ax=An;Am.NE=
QL;this.Bu=Am;},Rl:function(An,Em){var A;var Bt=this.Dq;var Am=this.Bu;var x1=Am.
Dy[0];var y1=Am.Dy[1];var x2=Am.Dy[2];var y2=Am.Dy[3];var Dm=[An[2]-An[0],An[3]-
An[1]];var AM=x2-x1;var AD=y2-y1;if(!Em){var EM=[(A=Am.Ax)[2]-A[0],A[3]-A[1]];x1=
x1-Am.Ax[0];y1=y1-Am.Ax[1];if(EM[0]!==Dm[0]){var B4=((Bt&0x4)===0x4);var B5=((Bt&
0x8)===0x8);var FN=((Bt&0x1)===0x1);if(!B4&&(FN||!B5))x1=((x1*Dm[0])/EM[0])|0;if(
!B5&&(FN||!B4)){x2=x2-Am.Ax[0];x2=((x2*Dm[0])/EM[0])|0;x2=x2-Dm[0];}else x2=x2-Am.
Ax[2];x1=x1+An[0];x2=x2+An[2];if(!FN){if(B4&&!B5)x2=x1+AM;else if(!B4&&B5)x1=x2-
AM;else{x1=x1+((((x2-x1)-AM)/2)|0);x2=x1+AM;}}}else{x2=x2-Am.Ax[2];x1=x1+An[0];x2=
x2+An[2];}if(EM[1]!==Dm[1]){var B6=((Bt&0x10)===0x10);var B3=((Bt&0x20)===0x20);
var FO=((Bt&0x2)===0x2);if(!B6&&(FO||!B3))y1=((y1*Dm[1])/EM[1])|0;if(!B3&&(FO||!
B6)){y2=y2-Am.Ax[1];y2=((y2*Dm[1])/EM[1])|0;y2=y2-Dm[1];}else y2=y2-Am.Ax[3];y1=
y1+An[1];y2=y2+An[3];if(!FO){if(B6&&!B3)y2=y1+AD;else if(!B6&&B3)y1=y2-AD;else{y1=
y1+((((y2-y1)-AD)/2)|0);y2=y1+AD;}}}else{y2=y2-Am.Ax[3];y1=y1+An[1];y2=y2+An[3];
}}else{switch(Em){case 3:{x1=An[0];x2=x1+AM;}break;case 4:{x2=An[2];x1=x2-AM;}break;
case 1:{y1=An[1];y2=y1+AD;}break;case 2:{y2=An[3];y1=y2-AD;}break;default:;}if((
Em===3)||(Em===4)){var B6=((Bt&0x10)===0x10);var B3=((Bt&0x20)===0x20);var FO=((
Bt&0x2)===0x2);if(FO){y1=An[1];y2=An[3];}else if(B6&&!B3){y1=An[1];y2=y1+AD;}else
if(B3&&!B6){y2=An[3];y1=y2-AD;}else{y1=An[1]+((((An[3]-An[1])-AD)/2)|0);y2=y1+AD;
}}if((Em===1)||(Em===2)){var B4=((Bt&0x4)===0x4);var B5=((Bt&0x8)===0x8);var FN=((
Bt&0x1)===0x1);if(FN){x1=An[0];x2=An[2];}else if(B4&&!B5){x1=An[0];x2=x1+AM;}else
if(B5&&!B4){x2=An[2];x1=x2-AM;}else{x1=An[0]+((((An[2]-An[0])-AM)/2)|0);x2=x1+AM;
}}}Am.isEmpty=(x1>=x2)||(y1>=y2);if(((this.M&0x100)===0x100))this.S=[x1,y1,x2,y2
];else{this.H([x1,y1,x2,y2]);this.Bu=Am;}return[x2-x1,y2-y1];},MR:function(aOffset
,QK){if(QK)this.S=B.tX(this.S,aOffset);else this.H(B.tX(this.S,aOffset));},GetExtent:
function(){return this.S;},H:function(E){var A;if(B.tI(E,this.S))return;if(!!this.
L&&((this.M&0x1)===0x1))this.L.As(this.S);this.Bu=null;this.S=E;if(!!this.L&&((this.
M&0x1)===0x1))this.L.As(this.S);if((!!this.L&&((this.M&0x400)===0x400))&&!((this.
L.M&0x2000)===0x2000)){this.M=this.M|0x800;this.L.M=this.L.M|0x4000;B.lz([A=this.
L,A.D3],this);}},AlV:function(Hu){this.H(Hu);},Aic:function(){return this.S;},_Init:
function(aArg){D.Bo._Init.call(this,aArg);this.__proto__=D.Cf;},_className:"Core::RectView"
};D.J={A6:null,A2:null,Wt:null,CM:null,Cx:null,Ii:null,O1:null,BY:null,HO:255,At:
function(aArg){this.AO();},E2:function(Bs,aClip,aOffset,AR,aBlend){var A;AR=((AR+
1)*this.HO)>>8;aBlend=aBlend&&((this.M&0x2)===0x2);if(!this.CM)this.Aga(Bs,aClip
,B.tV(aOffset,this.S.slice(0,2)),AR,aBlend);else{var Bi=255|(255<<8)|(255<<16)|((
AR&0xFF)<<24);this.CM.Update();Bs.Ac7(aClip,this.CM,0,B.tX(this.S,aOffset),BN,Bi
,Bi,Bi,Bi,aBlend);}},K7:function(A5,Aq,EU,JA,KJ){var A;var Ab=this.A2;var OK=null;
var X=AZ;var FF=null;var Acj=!!this.Ii&&(!!this.Ii.F$||!!this.Ii.A6);if(((A=B.it(
A5,this.S))[0]>=A[2])||(A[1]>=A[3]))return null;A5=B.tW(A5,this.S.slice(0,2));while(
!!Ab){if(((Ab.M&0x400)===0x400)&&!FF){FF=Ab.Al;while(!!FF&&!((FF.M&0x200)===0x200
))FF=FF.Al;if(!!FF)X=B.it(A5,FF.GetExtent());else X=AZ;}if(FF===Ab){FF=null;X=AZ;
}if((((((Ab.M&0x8)===0x8)&&((Ab.M&0x10)===0x10))&&!((Ab.M&0x40000)===0x40000))&&
!((Ab.M&0x20000)===0x20000))&&(!((Ab.M&0x10000)===0x10000)||((this.Cx.Cb===Ab)&&
!Acj))){var Dy=Ab.GetExtent();var Wl=JA;var OF=null;if(Wl===Ab)Wl=null;if(((Ab.M&
0x400)===0x400)){if(!(((A=B.it(Dy,X))[0]>=A[2])||(A[1]>=A[3])))OF=Ab.K7(X,Aq,EU,
Wl,KJ);}else if(!(((A=B.it(Dy,A5))[0]>=A[2])||(A[1]>=A[3]))||(JA===Ab))OF=Ab.K7(
A5,Aq,EU,Wl,KJ);Ab=Ab.Al;if(!!OF){if(!OK||((OF.Rv<OK.Rv)&&(OF.Rv>=0)))OK=OF;if(!
OF.Rv)Ab=null;}}else Ab=Ab.Al;}return OK;},Bh:function(LL,Oz){var A;var AmJ=this.
M;D.Cf.Bh.call(this,LL,Oz);var Nq=this.M^AmJ;if(!!this.BY&&((Nq&0x40)===0x40)){if(((
this.M&0x40)===0x40))this.BY.Bh(0x40,0x0);else this.BY.Bh(0x0,0x40);}if(!!this.Cx&&((
Nq&0x40)===0x40)){if(((this.M&0x40)===0x40)&&((this.Cx.Cb.M&0x14)===0x14))this.Cx.
Cb.Bh(0x40,0x0);else this.Cx.Cb.Bh(0x0,0x40);}if(!!Nq){this.M=this.M|0x8000;B.lz([
this,this.D3],this);}},H:function(E){var A;if(B.tI(E,this.S))return;var NA=[(A=this.
S)[2]-A[0],A[3]-A[1]];var Ww=[E[2]-E[0],E[3]-E[1]];var O4=!B.tH(NA,Ww);if(O4&&!!
this.CM){this.CM.PX(Ww);B.qJ(this,0);B.qJ(this.CM,0);}D.Cf.H.call(this,E);if((O4&&(
NA[0]>0))&&(NA[1]>0)){var Ax=[].concat(BN,NA);var Ab=this.A6;while(!!Ab){if((!Ab.
Bu&&(Ab.Dq!==0x14))&&!((Ab.M&0x400)===0x400))Ab.QZ(Ax,null);Ab=Ab.Ai;}}if(O4){this.
M=this.M|0x5000;B.lz([this,this.D3],this);}},Ag_:function(AW){var Agx=(D.KeyEvent.
isPrototypeOf(AW)?AW:null);var IT=this.Wt;if(!Agx)return null;while(!!IT&&(!IT.B7||
!IT.C7(Agx)))IT=IT.Ai;return IT;},Anz:function(P){if(!!this.CM){this.CM.Uz(this.
CM.E3,this.CM.E3,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Aga(this.
CM,this.CM.E3,BN,255,true);}},Aga:function(Bs,aClip,aOffset,AR,aBlend){var A;var
Ab=this.A6;var Af8=AZ;var Ag8=true;this.AhM(Bs,aClip,aOffset,AR,aBlend);while(!!
Ab){if(((Ab.M&0x200)===0x200)){var Ag7=(D.DV.isPrototypeOf(Ab)?Ab:null);Af8=B.it(
aClip,B.tX(Ag7.S,aOffset));Ag8=((Ag7.M&0x1)===0x1);}if(((Ab.M&0x1)===0x1)){if(((
Ab.M&0x400)===0x400)){if(Ag8){var X=B.it(B.tX(Ab.GetExtent(),aOffset),Af8);if(!((
X[0]>=X[2])||(X[1]>=X[3])))Ab.E2(Bs,X,aOffset,AR,aBlend);}}else{var X=B.it(B.tX(
Ab.GetExtent(),aOffset),aClip);if(!((X[0]>=X[2])||(X[1]>=X[3])))Ab.E2(Bs,X,aOffset
,AR,aBlend);}}Ab=Ab.Ai;}this.AhP(Bs,aClip,aOffset,AR,aBlend);},Anf:function(){var
A;var Ab9=((this.M&0x1000)===0x1000);var L1=[0,0,(A=this.S)[2]-A[0],A[3]-A[1]];var
KP=false;var QX=AZ;var Ab7=AZ;var Ab=this.A2;var FF=null;while(!!Ab){if(((Ab.M&0x800
)===0x800)){KP=true;Ab.M=Ab.M&~0x800;}if(KP&&((Ab.M&0x200)===0x200))KP=false;Ab=
Ab.Al;}KP=false;Ab=this.A6;if(Ab9){this.M=this.M&~0x1000;Ab9=!((L1[0]>=L1[2])||(
L1[1]>=L1[3]));}this.M=this.M|0x2000;while(!!Ab){if(((Ab.M&0x400)===0x400)){if(!
!Ab.Bu&&(Ab.Bu.NE!==FF))Ab.Bu=null;if((!Ab.Bu&&KP)&&(Ab.Dq!==0x14))Ab.QZ(Ab7,FF);
}if(!!Ab.Bu){if(Ab9&&!((Ab.M&0x400)===0x400))Ab.Rl(L1,0);if(KP&&((Ab.M&0x400)===
0x400))Ab.Rl(Ab7,0);}if(((Ab.M&0x200)===0x200)){KP=((Ab.M&0x1000)===0x1000);FF=(
D.DV.isPrototypeOf(Ab)?Ab:null);if(KP){Ab.M=Ab.M&~0x1000;QX=B.tX(FF.S,FF.Bq);Ab7=
QX;KP=!((QX[0]>=QX[2])||(QX[1]>=QX[3]));}if(KP)this.As(FF.S);}Ab=Ab.Ai;}this.M=this.
M&~0x2000;this.AaI([L1[2]-L1[0],L1[3]-L1[1]]);},D3:function(P){var A;var AnB=((this.
M&0x1000)===0x1000);if(((this.M&0x4000)===0x4000)){this.M=this.M&~0x4000;this.Anf(
);}if(((this.M&0x8000)===0x8000)||AnB){this.M=this.M&~0x8000;this.BJ(this.M);}},
Ad:function(E){var A;if(!!E&&(E.L!==this))throw new Error(Ao);if(!!E&&!((E.M&0x14
)===0x14))E=null;if(!!E&&((E.M&0x10000)===0x10000))E=null;if(E===this.BY)return;
if(!!this.BY)this.BY.Bh(0x0,0x60);this.BY=E;if(!!E){if(((this.M&0x40)===0x40))E.
Bh(0x60,0x0);else E.Bh(0x20,0x0);}},Lk:function(E){var A;if(!!this.CM===E)return;
if(E){this.CM=B._NewObject(B.Graphics.Canvas,0);this.CM.PX([(A=this.S)[2]-A[0],A[
3]-A[1]]);this.CM.UW=[this,this.Anz];}else{this.CM.UW=null;this.CM.PX(BN);this.CM=
null;}if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.S);B.qJ(this,0);},Aw:function(
E){if(E)this.Bh(0x10,0x0);else this.Bh(0x0,0x10);},Ll:function(E){var A;if(E>255
)E=255;if(E<0)E=0;if(E===this.HO)return;this.HO=E;if(!!this.L&&((this.M&0x1)===0x1
))this.L.As(this.S);},AU:function(E){if(E)this.Bh(0x400,0x0);else this.Bh(0x0,0x400
);},Y5:function(E){if(E)this.Bh(0x2,0x0);else this.Bh(0x0,0x2);},Kl:function(){var
A;return((this.M&0x1)===0x1);},Ah:function(E){if(E)this.Bh(0x1,0x0);else this.Bh(
0x0,0x1);},AhP:function(Bs,aClip,aOffset,AR,aBlend){},AhM:function(Bs,aClip,aOffset
,AR,aBlend){},GetMinimalSize:function(){return BN;},AhG:function(){var CX=this.Cx;
var EW=0;while(!!CX){EW=EW+1;CX=CX.Ai;}return EW;},Vz:function(DM,Gz,LI,JB,JC,Tj
,IS,KI,Gx,Gv,Gw){var A;if(!this.Cx){this.DK(DM,Gz,LI,JB,JC,null,null,Gx,Gv,Gw);return;
}var Nz=this.Cx;var DP=Nz.Ai;if(((DM.M&0x10000)===0x10000)&&(this.Cx.Cb!==DM))throw new
Error(CW);var JP=B._NewObject(D.Xm,0);var Gb=Nz.Gb;var Gf=null;var Eb=null;if(!!
DP){Gf=DP.Gf;Eb=DP.Eb;}if(!!DP&&!!Nz.O0)Gf=Nz.O0;if(!!DP&&!!IS)Eb=IS;if(!!Tj)Gb=
Tj;if(!Gz)Gz=B._GetAutoObject(B.uX.Si);if(!LI)LI=Gz;if(!JC)JC=JB;if(!JB)JB=JC;JP.
Gb=LI;JP.Eb=JB;JP.Gf=JC;JP.O0=KI;JP.Cb=DM;JP.Ai=this.Cx.Ai;this.Cx.Ai=null;this.
Cx=JP;if(this.BY===DM)this.Ad(null);Nz.Cb.Bh(0x0,0x10040);if(((this.M&0x40)===0x40
)&&((DM.M&0x4)===0x4))DM.Bh(0x10040,0x0);else DM.Bh(0x10000,0x0);if(!!Eb){this.Fm(
DP.Cb,Eb.Uq(),null,null,Gw);this.Fm(Nz.Cb,Gb.Ms(),null,null,true);this.Fm(JP.Cb,
Gz.Mt(),Gx,Gv,true);}else if(!!Gf){this.Fm(DP.Cb,Gf.Ur(),null,null,Gw);this.Fm(Nz.
Cb,Gb.Ms(),null,null,true);this.Fm(JP.Cb,Gz.Mt(),Gx,Gv,true);}else if(!!Gb){this.
Fm(Nz.Cb,Gb.Ms(),null,null,Gw);this.Fm(JP.Cb,Gz.Mt(),Gx,Gv,true);}else this.Fm(JP.
Cb,Gz.Mt(),Gx,Gv,Gw);},CQ:function(DM,Tj,IS,KI,Gx,Gv,Gw){var A;if(!this.Cx)return;
if(!DM)return;var CX=this.Cx;var DP=this.Cx.Ai;var Q6=null;while((!!CX&&(CX.Cb!==
DM))&&!!CX.Ai){Q6=CX;CX=DP;DP=CX.Ai;}if(!CX||(CX.Cb!==DM))throw new Error(Fz);if(
!Q6){this.Cx=DP;CX.Ai=null;}else{Q6.Ai=DP;CX.Ai=null;}CX.Cb.Bh(0x0,0x10040);if(((((
this.M&0x40)===0x40)&&!!DP)&&!Q6)&&((DP.Cb.M&0x4)===0x4))DP.Cb.Bh(0x40,0x0);var Gb=
CX.Gb;var Gf=null;var Eb=null;if(!!DP)Gf=DP.Gf;if(!!DP&&!!CX.O0)Gf=CX.O0;if(!!DP&&
!!KI)Gf=KI;if(!!Q6&&!!DP)Eb=DP.Eb;if((!!Q6&&!!DP)&&!!IS)Eb=IS;if(!!Tj)Gb=Tj;if(!
!Eb){this.Fm(DP.Cb,Eb.Uq(),null,null,Gw);this.Fm(CX.Cb,Gb.Ms(),Gx,Gv,true);}else
if(!!Gf){this.Fm(DP.Cb,Gf.Ur(),null,null,Gw);this.Fm(CX.Cb,Gb.Ms(),Gx,Gv,true);}
else this.Fm(CX.Cb,Gb.Ms(),Gx,Gv,Gw);},DK:function(DM,Gz,LI,JB,JC,IS,KI,Gx,Gv,Gw
){var A;if(!DM)return;if(!!this.Cx&&(this.Cx.Cb===DM)){this.Vz(DM,Gz,LI,JB,JC,null
,IS,KI,Gx,Gv,Gw);return;}if(((DM.M&0x10000)===0x10000))throw new Error(CW);var CX=
B._NewObject(D.Xm,0);if(!!this.Cx&&!this.Cx.Eb){if(!KI)KI=IS;if(!IS)IS=KI;}var Eb=
null;if(!!this.Cx)Eb=this.Cx.Eb;if(!!this.Cx&&!!IS)Eb=IS;if(!Gz)Gz=B._GetAutoObject(
B.uX.Si);if(!LI)LI=Gz;if(!JC)JC=JB;if(!JB)JB=JC;CX.Gb=LI;CX.Eb=JB;CX.Gf=JC;CX.O0=
KI;if(this.BY===DM)this.Ad(null);if(!!this.Cx)this.Cx.Cb.Bh(0x0,0x40);if(((this.
M&0x40)===0x40)&&((DM.M&0x4)===0x4))DM.Bh(0x10040,0x0);else DM.Bh(0x10000,0x0);CX.
Cb=DM;CX.Ai=this.Cx;this.Cx=CX;if(!!Eb){this.Fm(this.Cx.Ai.Cb,Eb.Uq(),null,null,
Gw);this.Fm(DM,Gz.Mt(),Gx,Gv,true);}else this.Fm(DM,Gz.Mt(),Gx,Gv,Gw);},YK:function(
){var A;if(((this.M&0x40)===0x40))return;if(((this.M&0x80)===0x80))return;if(((this.
M&0x10000)===0x10000)){if(!!this.L)this.L.YK();return;}if(!!this.L&&(this.L.BY!==
this))this.L.Ad(this);if(!!this.L)this.L.YK();},Ah2:function(AN){var A;return(A=
AN)&&((this.M&A)===A);},Ah7:function(EE){var tmp=this;while(!!tmp){EE=B.tU(EE,tmp.
S.slice(0,2));tmp=tmp.L;}return EE;},DispatchEvent:function(AW){var A;var Ab=this.
BY;var AG=(D.J.isPrototypeOf(Ab)?Ab:null);var CA=null;var Acj=!!this.Ii&&(!!this.
Ii.F$||!!this.Ii.A6);if(!!Ab&&((((Ab.M&0x10000)===0x10000)||((Ab.M&0x40000)===0x40000
))||((Ab.M&0x20000)===0x20000))){Ab=null;AG=null;}if(!!this.Cx&&!Acj)CA=this.Cx.
Cb.DispatchEvent(AW);if(!CA&&!!AG)CA=AG.DispatchEvent(AW);else if(!CA&&!!Ab)CA=Ab.
C7(AW);if(!CA)CA=this.C7(AW);if(!CA)CA=this.Ag_(AW);return CA;},BroadcastEventAtPosition:
function(AW,AfZ,aFilter){var A;var Ab=this.A2;var CA=null;while(!!Ab&&!CA){if((!
aFilter||((A=aFilter)&&((Ab.M&A)===A)))&&B.qH(Ab.GetExtent(),AfZ)){var AG=(D.J.isPrototypeOf(
Ab)?Ab:null);if(!!AG)CA=AG.BroadcastEventAtPosition(AW,B.tU(AfZ,AG.S.slice(0,2))
,aFilter);else CA=Ab.C7(AW);}Ab=Ab.Al;}if(!CA)CA=this.C7(AW);return CA;},BroadcastEvent:
function(AW,aFilter){var A;var Ab=this.A2;var CA=null;while(!!Ab&&!CA){if(!aFilter||((
A=aFilter)&&((Ab.M&A)===A))){var AG=(D.J.isPrototypeOf(Ab)?Ab:null);if(!!AG)CA=AG.
BroadcastEvent(AW,aFilter);else CA=Ab.C7(AW);}Ab=Ab.Al;}if(!CA)CA=this.C7(AW);if(
!CA)CA=this.Ag_(AW);return CA;},AaI:function(aSize){},BJ:function(AN){},AO:function(
){this.M=this.M|0x8000;B.lz([this,this.D3],this);},As:function(A5){var A;var AG=
this;while(!!AG&&!((A5[0]>=A5[2])||(A5[1]>=A5[3]))){var QN=AG.CM;if(!AG.L&&(AG!==
this)){AG.As(A5);return;}if(!!QN){var AmH=QN.E3;QN.E3=B.q5(QN.E3,A5);if(!B.tI(AmH
,QN.E3)){B.qJ(AG,0);B.qJ(QN,0);}}if(!((AG.M&0x1)===0x1))return;A5=B.it(B.tX(A5,AG.
S.slice(0,2)),AG.S);AG=AG.L;}},XN:function(Z,aFilter){var A;if(!Z||(Z.L!==this))
return null;var Ny=Z.Ai;var NG=Z.Al;var TM=0x10000;if(((aFilter&0x10000)===0x10000
))TM=0x0;while(!!Ny||!!NG){if((!!Ny&&(!aFilter||((A=aFilter)&&((Ny.M&A)===A))))&&(
!TM||!((A=TM)&&((Ny.M&A)===A))))return Ny;if((!!NG&&(!aFilter||((A=aFilter)&&((NG.
M&A)===A))))&&(!TM||!((A=TM)&&((NG.M&A)===A))))return NG;if(!!Ny)Ny=Ny.Ai;if(!!NG
)NG=NG.Al;}return null;},Fm:function(KG,B2,Gx,Gv,Gw){var A;if(!KG)return;if(!B2)
throw new Error(He);if((!!B2.J||!!B2.L)||!!B2.Fj)throw new Error(Cw);if(!!KG.L&&(
KG.L!==this))throw new Error(H_);if(!this.Ii)this.Ii=B._NewObject(D.Aak,0);B2.L=
this;B2.J=KG;B2.NB=Gv;B2.Aco=Gx;if(!!KG.O1)KG.O1.Fj.Ajs(KG.O1);KG.O1=B2;KG.M=KG.
M|0x20000;if((Gw&&!!this.Ii.A2)&&!this.Ii.A2.X_())(B.uX.Uy.isPrototypeOf(A=this.
Ii.A2)?A:null).AcZ(B2);else{var Fj=B._NewObject(B.uX.Uy,0);Fj.AcZ(B2);this.Ii.Afu(
Fj,false);}},E8:function(Z){var A;if(!Z)throw new Error(Hf);if(Z.L!==this)throw new
Error(Hg);if(!Z.Ai)return;var EF=this.A2;var Md=Z.G8;while(!!EF&&(EF.G8>Md))EF=EF.
Al;if(((EF===Z)||!EF)||(EF.Ai===Z))return;if(((Z.M&0x401)===0x401)){if(!!Z.Al&&!
!Z.Bu)Z.Al.M=Z.Al.M|0x800;Z.M=Z.M|0x800;this.M=this.M|0x4000;B.lz([this,this.D3]
,this);}if(((Z.M&0x200)===0x200)){if(!!Z.Al)Z.Al.M=Z.Al.M|0x800;this.M=this.M|0x4000;
B.lz([this,this.D3],this);}if(!!Z.Al)Z.Al.Ai=Z.Ai;else this.A6=Z.Ai;Z.Ai.Al=Z.Al;
Z.Al=EF;Z.Ai=EF.Ai;EF.Ai=Z;if(!!Z.Ai)Z.Ai.Al=Z;else this.A2=Z;if(((Z.M&0x1)===0x1
))this.As(Z.GetExtent());},Aft:function(Z,Gy){var A;if(!Z)throw new Error(Hf);if(
Z.L!==this)throw new Error(Hg);var EF=Z;var Dc=Z;var Md=Z.G8;while(((Gy>0)&&!!EF.
Ai)&&(EF.Ai.G8<=Md)){EF=EF.Ai;Gy=Gy-1;}while(((Gy<0)&&!!Dc.Al)&&(Dc.Al.G8>=Md)){
Dc=Dc.Al;Gy=Gy+1;}if((EF===Z)&&(Dc===Z))return;if(((Z.M&0x401)===0x401)){if(!!Z.
Al&&!!Z.Bu)Z.Al.M=Z.Al.M|0x800;Z.M=Z.M|0x800;this.M=this.M|0x4000;B.lz([this,this.
D3],this);}if(((Z.M&0x200)===0x200)){if(!!Z.Al)Z.Al.M=Z.Al.M|0x800;Z.M=Z.M|0x800;
this.M=this.M|0x4000;B.lz([this,this.D3],this);}if(!!Z.Al)Z.Al.Ai=Z.Ai;if(!!Z.Ai
)Z.Ai.Al=Z.Al;if(this.A6===Z)this.A6=Z.Ai;if(this.A2===Z)this.A2=Z.Al;if(EF!==Z){
Z.Ai=EF.Ai;Z.Al=EF;EF.Ai=Z;if(!!Z.Ai)Z.Ai.Al=Z;}if(Dc!==Z){Z.Ai=Dc;Z.Al=Dc.Al;Dc.
Al=Z;if(!!Z.Al)Z.Al.Ai=Z;}if(!Z.Ai)this.A2=Z;if(!Z.Al)this.A6=Z;if(((Z.M&0x1)===
0x1))this.As(Z.GetExtent());},EA:function(Z){var A;if(!Z)throw new Error(Jx);if(
Z.L!==this)throw new Error(Hg);if((((Z.M&0x401)===0x401)&&!!Z.Al)&&!!Z.Bu){Z.Al.
M=Z.Al.M|0x800;this.M=this.M|0x4000;B.lz([this,this.D3],this);}if(((Z.M&0x200)===
0x200)){if(!!Z.Al)Z.Al.M=Z.Al.M|0x800;this.M=this.M|0x4000;B.lz([this,this.D3],this
);}Z.Bu=null;if(this.BY===Z)this.Ad(this.XN(Z,0x14));if(!!Z.Al)Z.Al.Ai=Z.Ai;if(!
!Z.Ai)Z.Ai.Al=Z.Al;if(this.A6===Z)this.A6=Z.Ai;if(this.A2===Z)this.A2=Z.Al;Z.L=null;
Z.Ai=null;Z.Al=null;if(((Z.M&0x1)===0x1))this.As(Z.GetExtent());},I:function(Z,Gy
){var A;if(!Z)throw new Error(FA);if(!!Z.L)throw new Error(Fc);var Dc=null;var Md=
Z.G8;if(((Gy<0)&&!!this.A2)&&(this.A2.G8>=Md)){Dc=this.A2;Gy=Gy+1;}while((((Gy<0
)&&!!Dc)&&!!Dc.Al)&&(Dc.Al.G8>=Md)){Dc=Dc.Al;Gy=Gy+1;}if((!Dc&&!!this.A2)&&(this.
A2.G8>Md))Dc=this.A2;while((!!Dc&&!!Dc.Al)&&(Dc.Al.G8>Md))Dc=Dc.Al;if(!Dc){Z.L=this;
Z.Al=this.A2;if(!!this.A2)this.A2.Ai=Z;if(!this.A6)this.A6=Z;this.A2=Z;}else{Z.L=
this;Z.Al=Dc.Al;Z.Ai=Dc;Dc.Al=Z;if(!!Z.Al)Z.Al.Ai=Z;else this.A6=Z;}if(((Z.M&0x1
)===0x1))this.As(Z.GetExtent());if(((!this.BY&&((Z.M&0x4)===0x4))&&((Z.M&0x10)===
0x10))&&!((Z.M&0x10000)===0x10000))this.Ad(Z);if(((Z.M&0x401)===0x401)){Z.M=Z.M|
0x800;this.M=this.M|0x4000;B.lz([this,this.D3],this);}if(((Z.M&0x200)===0x200)){
Z.M=Z.M|0x800;this.M=this.M|0x4000;B.lz([this,this.D3],this);}},_Init:function(aArg
){D.Cf._Init.call(this,aArg);this.__proto__=D.J;this.M=0x1F;this.At(aArg);},_Mark:
function(C){var A;D.Cf._Mark.call(this,C);if((A=this.A6)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.A2)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.Wt)&&(A.
_cycle!=C))A._Mark(A._cycle=C);if((A=this.CM)&&(A._cycle!=C))A._Mark(A._cycle=C);
if((A=this.Cx)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.Ii)&&(A._cycle!=C))
A._Mark(A._cycle=C);if((A=this.O1)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.
BY)&&(A._cycle!=C))A._Mark(A._cycle=C);},_className:"Core::Group"};D.Root={Gd:null
,BK:B.tY(10,null,null),QO:null,LR:null,T_:0,CN:0,Eo:B.tY(10,0,null),Wk:B.tY(10,B.
qL,null),Ih:B.tY(10,0,null),KM:B.tY(10,B.qK,null),QQ:B.tY(10,0,null),LQ:B.tY(10,
B.qK,null),Ig:B.tY(10,B.qK,null),Ga:B.tY(10,B.qK,null),JH:B.tY(10,B.qK,null),Bp:
0,Wp:0,Wo:0,E0:B.tY(4,0,null),DR:B.tY(4,B.qL,null),DQ:0,TC:0,Q0:0,Ab_:true,HD:function(
){return this;},E2:function(Bs,aClip,aOffset,AR,aBlend){var fullScreenUpdate=false;
fullScreenUpdate=B.jO;if(!fullScreenUpdate)Bs.Uz(aClip,B.tX(B.tX(aClip,aOffset),
this.S.slice(0,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);D.J.E2.call(
this,Bs,aClip,aOffset,AR,aBlend);},Bh:function(LL,Oz){var A;D.J.Bh.call(this,LL,
Oz);if(!this.L&&(((LL&0x1)===0x1)||((Oz&0x1)===0x1)))this.As([0,0,(A=this.S)[2]-
A[0],A[3]-A[1]]);if(!this.L&&(((LL&0x2)===0x2)||((Oz&0x2)===0x2)))this.As([0,0,(
A=this.S)[2]-A[0],A[3]-A[1]]);},Ad:function(E){if((E!==null)||!E)D.J.Ad.call(this
,E);},Lk:function(E){var A;var AmG=this.CM;D.J.Lk.call(this,E);if(((AmG!==this.CM
)&&!this.L)&&((this.M&0x1)===0x1))this.As([0,0,(A=this.S)[2]-A[0],A[3]-A[1]]);},
Ll:function(E){var A;var Hq=this.HO;D.J.Ll.call(this,E);if(((Hq!==this.HO)&&!this.
L)&&((this.M&0x1)===0x1))this.As([0,0,(A=this.S)[2]-A[0],A[3]-A[1]]);},DispatchEvent:
function(AW){if(!!AW){AW.RS=!!this.CN;if(!!this.CN)AW.AV=this.CN;}var CA;CA=D.J.
DispatchEvent.call(this,AW);this.CN=0;return CA;},BroadcastEvent:function(AW,aFilter
){if(!!AW){AW.RS=!!this.CN;if(!!this.CN)AW.AV=this.CN;}var CA=D.J.BroadcastEvent.
call(this,AW,aFilter);this.CN=0;return CA;},As:function(A5){var A;if(this.T_>0)throw new
Error(Fd);if(!!this.CM&&!this.L){if(((A=this.CM.E3)[0]>=A[2])||(A[1]>=A[3])){B.qJ(
this,0);B.qJ(this.CM,0);}this.CM.E3=B.q5(this.CM.E3,A5);}var fullScreenUpdate=false;
fullScreenUpdate=B.jO;if(fullScreenUpdate)A5=[0,0,(A=this.S)[2]-A[0],A[3]-A[1]];
if(!!this.L){D.J.As.call(this,A5);return;}A5=B.it(B.tX(A5,this.S.slice(0,2)),this.
S);if((A5[0]>=A5[2])||(A5[1]>=A5[3]))return;var Aa;for(Aa=0;Aa<this.DQ;Aa=Aa+1)if(
!(((A=B.it(this.DR.Get(Aa),A5))[0]>=A[2])||(A[1]>=A[3]))){this.DR.Set(Aa,B.q5(this.
DR.Get(Aa),A5));this.E0.Set(Aa,B.tr(this.DR.Get(Aa)));return;}if(this.DQ<3){this.
DR.Set(this.DQ,A5);this.E0.Set(this.DQ,B.tr(A5));this.DQ=this.DQ+1;return;}var Cs;
var FG;var TB=0;var TD=0;var Af3=2147483647;this.DR.Set(this.DQ,A5);this.E0.Set(
this.DQ,B.tr(A5));for(Cs=0;Cs<=this.DQ;Cs=Cs+1)for(FG=Cs+1;FG<=this.DQ;FG=FG+1){
var W3=B.tr(B.q5(this.DR.Get(Cs),this.DR.Get(FG)));var Ag9=((W3<<8)/(this.E0.Get(
Cs)+this.E0.Get(FG)))|0;if(Ag9<Af3){Af3=Ag9;TB=Cs;TD=FG;}}this.DR.Set(TB,B.q5(this.
DR.Get(TB),this.DR.Get(TD)));this.E0.Set(TB,B.tr(this.DR.Get(TB)));if(TD!==this.
DQ){this.DR.Set(TD,this.DR.Get(this.DQ));this.E0.Set(TD,this.E0.Get(this.DQ));}}
,Amd:function(){var Eq=B._NewObject(D.Ps,0);Eq.RS=!!this.CN;if(!!this.CN)Eq.AV=this.
CN;return Eq;},OE:function(){var Eq=B._NewObject(D.Pp,0);Eq.RS=!!this.CN;if(!!this.
CN)Eq.AV=this.CN;return Eq;},QP:function(){var Eq=B._NewObject(D.Us,0);Eq.RS=!!this.
CN;if(!!this.CN)Eq.AV=this.CN;return Eq;},Ame:function(P){var Aa;var OK=false;for(
Aa=0;Aa<10;Aa=Aa+1)if(!!this.BK.Get(Aa)){var pos=this.Ga.Get(Aa);var AG=this.BK.
Get(Aa).L;while(!!AG&&(AG!==this)){pos=B.tU(pos,AG.S.slice(0,2));AG=AG.L;}if(!AG&&(
this.BK.Get(Aa)!==this)){var tmp=this.BK.Get(Aa);this.Bp=Aa;this.BK.Set(Aa,null);
tmp.C7(this.OE().InitializeUp(Aa,this.LQ.Get(Aa),this.KM.Get(Aa),this.Ih.Get(Aa)
,this.Eo.Get(Aa)+1,this.Ig.Get(Aa),false,this.Ga.Get(Aa),this.JH.Get(Aa)));this.
BroadcastEvent(this.QP().InitializeUp(Aa,this.Eo.Get(Aa)+1,false,tmp,this.Ga.Get(
Aa)),0x18);}else{this.Ih.Set(Aa,(this.LR.AV-this.QQ.Get(Aa))|0);if(this.Ih.Get(Aa
)<10)this.Ih.Set(Aa,10);this.Bp=Aa;this.BK.Get(Aa).C7(this.OE().InitializeHold(Aa
,pos,this.KM.Get(Aa),this.Ih.Get(Aa),this.Eo.Get(Aa)+1,this.Ig.Get(Aa),this.Ga.Get(
Aa),this.JH.Get(Aa)));OK=true;}}if(!OK)this.LR.Aw(false);},GetFPS:function(){var
ticksCount=0;var Agi=0;ticksCount=((new Date).getTime()-B.qG)|0;if(!!this.Wp&&(ticksCount>
this.Wp))Agi=((this.Wo*1000)/((ticksCount-this.Wp)|0))|0;this.Wo=0;this.Wp=ticksCount;
return Agi;},Update:function(){var A;if(!this.QO)this.QO=B._NewObject(B.Graphics.
Canvas,0);this.QO.PX([(A=this.S)[2]-A[0],A[3]-A[1]]);this.QO.Update();return this.
UpdateGE20(this.QO);},UpdateGE20:function(Bs){if(!this.BeginUpdate())return AZ;var
KY=this.UpdateCanvas(Bs,BN);this.EndUpdate();return KY;},EndUpdate:function(){if(
this.DQ>0){this.Wo=this.Wo+1;this.DQ=0;}},UpdateCanvas:function(Bs,aOffset){var A;
var KY=AZ;var Al8=[].concat(aOffset,B.tV(Bs.FrameSize,aOffset));var Aa;var Cs=this.
DQ;this.T_=this.T_+1;for(Aa=0;(Aa<Cs)&&(Aa<4);Aa=Aa+1)if(this.E0.Get(Aa)>0){this.
E2(Bs,B.tW(this.DR.Get(Aa),aOffset),[-aOffset[0],-aOffset[1]],255,true);KY=B.q5(
KY,B.it(Al8,this.DR.Get(Aa)));}else Cs=Cs+1;this.T_=this.T_-1;if(!((KY[0]>=KY[2]
)||(KY[1]>=KY[3])))return B.tW(KY,aOffset);else return KY;},GetUpdateRegion:function(
VY){var Aa;var Cs=this.DQ;if(VY<0)return AZ;for(Aa=0;(Aa<Cs)&&(Aa<4);Aa=Aa+1)if(
!this.E0.Get(Aa)){Cs=Cs+1;VY=VY+1;}else if(Aa===VY)return this.DR.Get(Aa);return AZ;
},BeginUpdate:function(){var Aa;var Cs;var FG;for(Cs=0;Cs<(this.DQ-1);Cs=Cs+1)if(
this.E0.Get(Cs)>0)for(FG=Cs+1;FG<this.DQ;FG=FG+1)if(this.E0.Get(FG)>0){var W3=B.
tr(B.q5(this.DR.Get(Cs),this.DR.Get(FG)));if(((W3-this.E0.Get(Cs))-this.E0.Get(FG
))<0){this.DR.Set(Cs,B.q5(this.DR.Get(Cs),this.DR.Get(FG)));this.E0.Set(Cs,W3);this.
E0.Set(FG,0);}}for(Aa=this.DQ-1;Aa>=0;Aa=Aa-1)if(!this.E0.Get(Aa))this.DQ=this.DQ-
1;return this.DQ;},DoesNeedUpdate:function(){if(this.DQ>0)return true;return false;
},Initialize:function(aSize){this.H([].concat(BN,aSize));if(this.Ab_)this.M=this.
M|0x60;else this.M=this.M|0x20;this.As(this.S);return this;},SetRootFocus:function(
AbU){if(AbU===this.Ab_)return false;this.Ab_=AbU;if(!AbU)this.Bh(0x0,0x40);else this.
Bh(0x40,0x0);return true;},SetUserInputTimestamp:function(Al1){this.CN=Al1;},DriveKeyboardHitting:
function(Du,Tf,IP){var A;var AcG=!!this.Gd;if(!!this.Gd&&((!IP||(this.TC!==Du))||(
this.Q0!==Tf))){var Eq=null;var Ab=(D.Bo.isPrototypeOf(A=this.Gd)?A:null);var IT=(
D.Bc.isPrototypeOf(A=this.Gd)?A:null);if(!!this.TC)Eq=B._NewObject(D.KeyEvent,0).
Initialize(this.TC,false);if(this.Q0!==0x00)Eq=B._NewObject(D.KeyEvent,0).Initialize2(
this.Q0,false);if(!!IT)IT.C7(Eq);else if(!!Ab)Ab.C7(Eq);this.TC=0;this.Q0=0x00;this.
Gd=null;}if(!!this.Gd){var Eq=null;var Ab=(D.Bo.isPrototypeOf(A=this.Gd)?A:null);
var IT=(D.Bc.isPrototypeOf(A=this.Gd)?A:null);if(!!Du)Eq=B._NewObject(D.KeyEvent
,0).Initialize(Du,true);if(this.Q0!==0x00)Eq=B._NewObject(D.KeyEvent,0).Initialize2(
Tf,true);if(!!IT)IT.C7(Eq);else if(!!Ab)Ab.C7(Eq);}if(!this.Gd&&IP){if(!!Du)this.
Gd=this.DispatchEvent(B._NewObject(D.KeyEvent,0).Initialize(Du,true));if(Tf!==0x00
)this.Gd=this.DispatchEvent(B._NewObject(D.KeyEvent,0).Initialize2(Tf,true));if(
!(D.Bc.isPrototypeOf(A=this.Gd)?A:null)&&!(D.Bo.isPrototypeOf(A=this.Gd)?A:null)
)this.Gd=null;this.TC=Du;this.Q0=Tf;AcG=AcG||!!this.Gd;}this.CN=0;return AcG;},DriveCursorMovement:
function(Dv){return this.DriveMultiTouchMovement(this.Bp,Dv);},DriveMultiTouchMovement:
function(Aq,Dv){if((Aq<0)||(Aq>9)){this.CN=0;return false;}var BL=B.tU(Dv,this.Ga.
Get(Aq));this.Ga.Set(Aq,Dv);if(!this.BK.Get(Aq)||B.tH(BL,BN)){this.CN=0;return false;
}var pos=Dv;var AG=this.BK.Get(Aq).L;while(!!AG&&(AG!==this)){pos=B.tU(pos,AG.S.
slice(0,2));AG=AG.L;}if(!AG&&(this.BK.Get(Aq)!==this)){var tmp=this.BK.Get(Aq);this.
Bp=Aq;this.BK.Set(Aq,null);tmp.C7(this.OE().InitializeUp(Aq,this.LQ.Get(Aq),this.
KM.Get(Aq),this.Ih.Get(Aq),this.Eo.Get(Aq)+1,this.Ig.Get(Aq),false,this.Ga.Get(Aq
),this.JH.Get(Aq)));this.BroadcastEvent(this.QP().InitializeUp(Aq,this.Eo.Get(Aq
)+1,false,tmp,Dv),0x18);}else{this.LQ.Set(Aq,pos);this.Bp=Aq;this.BK.Get(Aq).C7(
this.Amd().Initialize(Aq,pos,this.KM.Get(Aq),BL,this.Ih.Get(Aq),this.Eo.Get(Aq)+
1,this.Ig.Get(Aq),Dv,this.JH.Get(Aq)));}this.CN=0;return true;},DriveCursorHitting:
function(IP,Aq,Dv){return this.DriveMultiTouchHitting(IP,Aq,Dv);},DriveMultiTouchHitting:
function(IP,Aq,Dv){if((Aq<0)||(Aq>9)){this.CN=0;return false;}var ticksCount=this.
CN;if(!ticksCount)ticksCount=((new Date).getTime()-B.qG)|0;var Anm=this.CN;this.
DriveMultiTouchMovement(Aq,Dv);Dv=this.Ga.Get(Aq);this.CN=Anm;if(IP)this.JH.Set(
Aq,Dv);if(IP&&!this.BK.Get(Aq)){var Gc;var pos=Dv;if(B.qH(this.Wk.Get(Aq),Dv)&&((
ticksCount-this.QQ.Get(Aq))<=250))this.Eo.Set(Aq,this.Eo.Get(Aq)+1);else this.Eo.
Set(Aq,0);this.Wk.Set(Aq,B.tX(LF,Dv));this.QQ.Set(Aq,ticksCount);Gc=this.K7(B.tX(
LF,Dv),Aq,this.Eo.Get(Aq)+1,null,0x0);if(!!Gc){this.BroadcastEvent(this.QP().InitializeDown(
Aq,this.Eo.Get(Aq)+1,false,Gc.Bo,Dv),0x18);this.BK.Set(Aq,Gc.Bo);this.Ig.Set(Aq,
Gc.A9);}else{this.BK.Set(Aq,null);this.Ig.Set(Aq,BN);this.CN=0;return false;}var
AG=Gc.Bo.L;while(!!AG&&(AG!==this)){pos=B.tU(pos,AG.S.slice(0,2));AG=AG.L;}this.
KM.Set(Aq,pos);this.LQ.Set(Aq,pos);this.Ih.Set(Aq,0);this.LR.Aw(true);this.Bp=Aq;
this.BK.Get(Aq).C7(this.OE().InitializeDown(Aq,pos,this.Eo.Get(Aq)+1,this.Ig.Get(
Aq),false,Dv));this.CN=0;return true;}if(!IP&&!!this.BK.Get(Aq)){var pos=Dv;var AG=
this.BK.Get(Aq).L;while(!!AG&&(AG!==this)){pos=B.tU(pos,AG.S.slice(0,2));AG=AG.L;
}if(!AG)pos=this.LQ.Get(Aq);this.Bp=Aq;var tmp=this.BK.Get(Aq);this.BK.Set(Aq,null
);tmp.C7(this.OE().InitializeUp(Aq,pos,this.KM.Get(Aq),this.Ih.Get(Aq),this.Eo.Get(
Aq)+1,this.Ig.Get(Aq),false,Dv,this.JH.Get(Aq)));this.BroadcastEvent(this.QP().InitializeUp(
Aq,this.Eo.Get(Aq)+1,false,tmp,Dv),0x18);this.CN=0;return true;}this.CN=0;return false;
},ZX:function(IR,VW,KJ){if(IR===this)IR=null;if(!this.BK.Get(this.Bp))return;var
Gc;Gc=this.K7(B.tX(LF,this.Ga.Get(this.Bp)),this.Bp,1,IR,KJ);if(!!Gc&&(this.BK.Get(
this.Bp)!==Gc.Bo))this.Xk(Gc.Bo,Gc.A9);if(!Gc&&(this.BK.Get(this.Bp)!==VW))this.
Xk(VW,BN);},Ajt:function(IR,VW){this.ZX(IR,VW,0x0);},Xk:function(IR,Ib){if(!this.
BK.Get(this.Bp)||(this.BK.Get(this.Bp)===IR))return;var tmp=this.BK.Get(this.Bp);
this.BK.Set(this.Bp,null);tmp.C7(this.OE().InitializeUp(this.Bp,this.LQ.Get(this.
Bp),this.KM.Get(this.Bp),this.Ih.Get(this.Bp),this.Eo.Get(this.Bp)+1,this.Ig.Get(
this.Bp),true,this.Ga.Get(this.Bp),this.JH.Get(this.Bp)));this.BroadcastEvent(this.
QP().InitializeUp(this.Bp,this.Eo.Get(this.Bp)+1,true,tmp,this.Ga.Get(this.Bp)),
0x18);var pos=this.Ga.Get(this.Bp);var AG=null;if(!!IR)AG=IR.L;while(!!AG&&(AG!==
this)){pos=B.tU(pos,AG.S.slice(0,2));AG=AG.L;}if(!AG&&(IR!==this)){this.BK.Set(this.
Bp,null);return;}this.BroadcastEvent(this.QP().InitializeDown(this.Bp,this.Eo.Get(
this.Bp)+1,true,IR,this.Ga.Get(this.Bp)),0x18);var ticksCount=0;ticksCount=((new
Date).getTime()-B.qG)|0;this.BK.Set(this.Bp,IR);this.Ig.Set(this.Bp,Ib);this.KM.
Set(this.Bp,pos);this.LQ.Set(this.Bp,pos);this.Eo.Set(this.Bp,0);this.Ih.Set(this.
Bp,0);this.QQ.Set(this.Bp,ticksCount);this.JH.Set(this.Bp,this.Ga.Get(this.Bp));
this.BK.Get(this.Bp).C7(this.OE().InitializeDown(this.Bp,pos,this.Eo.Get(this.Bp
)+1,this.Ig.Get(this.Bp),true,this.JH.Get(this.Bp)));},_Init:function(aArg){D.J.
_Init.call(this,aArg);D.Timer._Init.call(this.LR={G:this},0);(this.BK=[]).__proto__=
D.Root.BK;(this.Eo=[]).__proto__=D.Root.Eo;(this.Wk=[]).__proto__=D.Root.Wk;(this.
Ih=[]).__proto__=D.Root.Ih;(this.KM=[]).__proto__=D.Root.KM;(this.QQ=[]).__proto__=
D.Root.QQ;(this.LQ=[]).__proto__=D.Root.LQ;(this.Ig=[]).__proto__=D.Root.Ig;(this.
Ga=[]).__proto__=D.Root.Ga;(this.JH=[]).__proto__=D.Root.JH;(this.E0=[]).__proto__=
D.Root.E0;(this.DR=[]).__proto__=D.Root.DR;this.__proto__=D.Root;this.M=0x7F;this.
LR.DI(50);this.LR.Ds=[this,this.Ame];},_Done:function(){this.__proto__=D.J;this.
LR._Done();D.J._Done.call(this);},_ReInit:function(){D.J._ReInit.call(this);this.
LR._ReInit();},_Mark:function(C){var A;D.J._Mark.call(this,C);if((A=this.Gd)&&(A.
_cycle!=C))A._Mark(A._cycle=C);B.tQ(this.BK,C);if((A=this.QO)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.LR)._cycle!=C)A._Mark(A._cycle=C);},_className:"Core::Root"
};D.Event={AV:0,RS:false,At:function(aArg){this.AV=this.RL();},RL:function(){var
ticksCount=0;ticksCount=((new Date).getTime()-B.qG)|0;return ticksCount;},_Init:
function(aArg){this.__proto__=D.Event;this.At(aArg);B.gx++;},_Done:function(){this.
__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(C){var A;if((A=this.
G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:null,_className:
"Core::Event"};D.KeyEvent={AA:0,BR:0,Down:false,Initialize2:function(Du,IP){this.
AA=0;this.BR=Du;this.Down=IP;if((Du>=0x30)&&(Du<=0x39))this.AA=(10+Du)-48;if((Du>=
0x41)&&(Du<=0x5A))this.AA=(105+Du)-65;if((Du>=0x61)&&(Du<=0x7A))this.AA=(105+Du)-
97;if(Du===0x20)this.AA=131;if(!this.AA)switch(Du){case 0x2B:this.AA=132;break;case
0x2D:this.AA=133;break;case 0x2A:this.AA=134;break;case 0x2F:this.AA=135;break;case
0x3D:this.AA=136;break;case 0x2E:this.AA=137;break;case 0x2C:this.AA=138;break;case
0x3A:this.AA=139;break;case 0x3B:this.AA=140;break;default:;}return this;},Initialize:
function(Du,IP){this.AA=Du;this.Down=IP;this.BR=0x00;var Ab4=Du-10;var Ab3=Du-105;
if((Ab4>=0)&&(Ab4<=9))this.BR=(48+Ab4)&0xFFFF;if((Ab3>=0)&&(Ab3<=25))this.BR=(65+
Ab3)&0xFFFF;if(Du===131)this.BR=0x20;if(this.BR===0x00)switch(Du){case 132:this.
BR=0x2B;break;case 133:this.BR=0x2D;break;case 134:this.BR=0x2A;break;case 135:this.
BR=0x2F;break;case 136:this.BR=0x3D;break;case 137:this.BR=0x2E;break;case 138:this.
BR=0x2C;break;case 139:this.BR=0x3A;break;case 140:this.BR=0x3B;break;default:;}
return this;},Ah4:function(AfX){switch(AfX){case 141:return((this.BR>=0x41)&&(this.
BR<=0x5A))||((this.BR>=0x61)&&(this.BR<=0x7A));case 142:return(((this.BR>=0x41)&&(
this.BR<=0x5A))||((this.BR>=0x61)&&(this.BR<=0x7A)))||((this.BR>=0x30)&&(this.BR<=
0x39));case 143:return(this.BR>=0x30)&&(this.BR<=0x39);case 144:return(((this.BR>=
0x41)&&(this.BR<=0x46))||((this.BR>=0x61)&&(this.BR<=0x66)))||((this.BR>=0x30)&&(
this.BR<=0x39));case 145:return this.BR!==0x00;case 146:return(this.BR===0x00)&&
!!this.AA;case 147:return(((this.AA===6)||(this.AA===7))||(this.AA===4))||(this.
AA===5);case 148:return(this.BR!==0x00)||!!this.AA;default:;}return AfX===this.AA;
},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;}
,_className:"Core::KeyEvent"};D.Us={VB:null,Lb:B.qK,HV:0,C6:0,Down:false,GK:false
,InitializeUp:function(Aq,EU,Oy,AbX,IQ){this.Down=false;this.C6=Aq;this.HV=EU;this.
Lb=IQ;this.VB=AbX;this.GK=Oy;return this;},InitializeDown:function(Aq,EU,Oy,AbX,
IQ){this.Down=true;this.C6=Aq;this.HV=EU;this.Lb=IQ;this.VB=AbX;this.GK=Oy;return this;
},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=D.Us;},_Mark:
function(C){var A;D.Event._Mark.call(this,C);if((A=this.VB)&&(A._cycle!=C))A._Mark(
A._cycle=C);},_className:"Core::CursorGrabEvent"};D.Pp={RM:B.qK,Lb:B.qK,HV:0,DG:
0,Ev:B.qK,DE:B.qK,C6:0,Down:false,GK:false,InitializeHold:function(Aq,No,Th,Ti,EU
,Ib,IQ,Tg){this.Down=true;this.C6=Aq;this.DE=B.tV(No,Ib);this.Ev=B.tV(Th,Ib);this.
DG=Ti;this.HV=EU;this.Lb=IQ;this.RM=Tg;return this;},InitializeUp:function(Aq,No
,Th,Ti,EU,Ib,Oy,IQ,Tg){this.Down=false;this.C6=Aq;this.DE=B.tV(No,Ib);this.Ev=B.
tV(Th,Ib);this.DG=Ti;this.HV=EU;this.GK=Oy;this.Lb=IQ;this.RM=Tg;return this;},InitializeDown:
function(Aq,No,EU,Ib,Oy,IQ){this.Down=true;this.C6=Aq;this.DE=B.tV(No,Ib);this.Ev=
B.tV(No,Ib);this.DG=0;this.HV=EU;this.GK=Oy;this.Lb=IQ;this.RM=IQ;return this;},
_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=D.Pp;},_className:
"Core::CursorEvent"};D.Ps={RM:B.qK,Lb:B.qK,HV:0,DG:0,A9:B.qK,Ev:B.qK,DE:B.qK,C6:
0,Initialize:function(Aq,No,Th,aOffset,Ti,Al0,Ib,IQ,Tg){this.C6=Aq;this.DE=B.tV(
No,Ib);this.Ev=B.tV(Th,Ib);this.A9=aOffset;this.DG=Ti;this.HV=Al0;this.Lb=IQ;this.
RM=Tg;return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.Ps;},_className:"Core::DragEvent"};D.DV={Bq:B.qK,E2:function(Bs,aClip,aOffset,
AR,aBlend){},H:function(E){var A;if(B.tI(E,this.S))return;var NA=[(A=this.S)[2]-
A[0],A[3]-A[1]];var Ww=[E[2]-E[0],E[3]-E[1]];var O4=!B.tH(NA,Ww);var BL=B.tU(E.slice(
0,2),this.S.slice(0,2));if(!B.tH(BL,BN)&&!O4){var Ab=this.Ai;while(!!Ab&&!((Ab.M&
0x200)===0x200)){if(((Ab.M&0x400)===0x400)){var tmp=((Ab.M&0x100)===0x100);Ab.MR(
BL,tmp);}Ab=Ab.Ai;}}if((O4&&(NA[0]>0))&&(NA[1]>0)){var Ax=B.tX(this.S,this.Bq);var
Ab=this.Ai;while(!!Ab&&!((Ab.M&0x200)===0x200)){if(((Ab.M&0x400)===0x400)){if(!!
Ab.Bu&&(Ab.Bu.NE!==this))Ab.Bu=null;if(!Ab.Bu&&(Ab.Dq!==0x14))Ab.QZ(Ax,this);}Ab=
Ab.Ai;}}D.Cf.H.call(this,E);if(!!this.L&&O4){this.M=this.M|0x1000;if(!((this.L.M&
0x2000)===0x2000)){this.L.M=this.L.M|0x4000;B.lz([A=this.L,A.D3],this);}}},C_:function(
E){var A;var BL=B.tU(E,this.Bq);if(B.tH(BL,BN))return;this.Bq=E;var Ab=this.Ai;while(
!!Ab&&!((Ab.M&0x200)===0x200)){if(((Ab.M&0x400)===0x400)){var tmp=((Ab.M&0x100)===
0x100);Ab.MR(BL,tmp);}Ab=Ab.Ai;}if(!!this.L)this.L.As(this.S);},_Init:function(aArg
){D.Cf._Init.call(this,aArg);this.__proto__=D.DV;this.M=0x203;},_className:"Core::Outline"
};D.A4={Ns:B.tY(8,null,null),D2:null,Bo:null,Ek:null,Wx:null,IE:null,OR:-1,OQ:0,
GH:-1,FR:0,EH:0,Kf:-1,Bq:0,Fu:-1,Eg:24,DT:0,NX:null,AgA:false,DispatchEvent:function(
AW){var A;var result=null;if(((this.Fu>=0)&&(this.Fu<this.DT))&&!this.BY){this.Kf=
this.Fu;this.Bo=(D.Bo.isPrototypeOf(A=B._NewObject(this.NX,0))?A:null);if(!!this.
A2)this.A2.Ai=this.Bo;else this.A6=this.Bo;this.Bo.Al=this.A2;this.A2=this.Bo;this.
Bo.L=this;(A=this.IE)?A[1].call(A[0],this):null;var AG=(D.J.isPrototypeOf(A=this.
Bo)?A:null);if(!!AG)result=AG.DispatchEvent(AW);else result=this.Bo.C7(AW);if(!!
this.Bo.Al)this.Bo.Al.Ai=null;else this.A6=null;this.A2=this.Bo.Al;this.Bo.Al=null;
this.Bo.L=null;this.Bo=null;}if(!result)result=D.J.DispatchEvent.call(this,AW);return result;
},BJ:function(AN){var A;if(!this.NX)return;this.AgA=true;var Fe=((0-this.Bq)/this.
Eg)|0;var Gg=(((((A=this.S)[3]-A[1])-this.Bq)-1)/this.Eg)|0;var EW=(((((A=this.S
)[3]-A[1])+this.Eg)-1)/this.Eg)|0;if(EW<1)EW=1;var We=(EW/2)|0;var Wf=(EW/3)|0;if(
!We)We=1;if(!Wf)Wf=1;if(Fe<this.FR){Fe=Fe-We;Gg=Gg+Wf;}else if(Gg>this.GH){Fe=Fe-
Wf;Gg=Gg+We;}else{Fe=this.FR;Gg=this.GH;}if(Fe>=this.DT){Fe=0;Gg=-1;}else if(Gg<
0){Fe=0;Gg=-1;}if(Gg>=this.DT)Gg=this.DT-1;if(Fe<0)Fe=0;var WG=this.FR;var WH=this.
GH;var Ach=0;var Aci=-1;if(Fe>WG)WG=Fe;if(Gg<WH)WH=Gg;if(WG<=WH){while((this.GH<
Gg)&&(this.FR<WG)){this.WE();this.Af_();}while((this.FR>Fe)&&(this.GH>WH)){this.
Ahb();this.Af9();}}else{this.GH=(this.GH-this.FR)+Fe;this.FR=Fe;Ach=this.FR;Aci=
this.GH;}while(this.FR<Fe)this.WE();while(this.GH>Gg)this.Ahb();while(this.FR>Fe
)this.Af9();while(this.GH<Gg)this.Af_();var AY=this.A6;var Av=this.FR;var pos=[0
,this.Bq+(Av*this.Eg)];var AD=(A=this.S)[3]-A[1];var Agt=this.Eg;var Agf=null;while(
!!AY){var Er=B.tU(pos,AY.GetExtent().slice(0,2));var Ace=pos[1];var Acf=pos[1]+Agt;
var Nr=Av;if(!B.tH(Er,BN))AY.MR(Er,true);if(((((Nr>=this.OQ)&&(Nr<=this.OR))||((
Av>=Ach)&&(Av<=Aci)))&&(Ace<AD))&&(Acf>0)){this.Bo=AY;this.Kf=Nr;(A=this.IE)?A[1
].call(A[0],this):null;}AY=AY.Ai;Av=Av+1;pos=[pos[0],pos[1]+this.Eg];}Av=this.FR;
AY=this.A6;pos=[0,this.Bq+(Av*this.Eg)];while(!!AY){var Ace=pos[1];var Acf=pos[1
]+Agt;var Nr=Av;if((((Nr>=this.OQ)&&(Nr<=this.OR))||((Av>=Ach)&&(Av<=Aci)))&&!((
Ace<AD)&&(Acf>0))){this.Bo=AY;this.Kf=Nr;(A=this.IE)?A[1].call(A[0],this):null;}
if(Nr===this.Fu)Agf=AY;AY=AY.Ai;Av=Av+1;pos=[pos[0],pos[1]+this.Eg];}this.OQ=0;this.
OR=-1;this.Bo=null;this.Kf=-1;this.Ad(Agf);this.AgA=false;},XN:function(Z,aFilter
){return null;},E8:function(Z){throw new Error(Om);},Aft:function(Z,Gy){throw new
Error(Gt);},EA:function(Z){throw new Error(Oo);},I:function(Z,Gy){throw new Error(
Op);},Ahb:function(){var AY=this.A2;if(!AY)return null;if(AY===this.BY)this.Ad(null
);this.GH=this.GH-1;if(!!AY.Al)AY.Al.Ai=null;else this.A6=null;this.A2=AY.Al;AY.
Al=null;AY.L=null;AY.Bu=null;if(this.EH<8){this.Ns.Set(this.EH,AY);this.EH=this.
EH+1;}return AY;},Af_:function(){var A;var AY=null;if(!this.EH){AY=(D.Bo.isPrototypeOf(
A=B._NewObject(this.NX,0))?A:null);AY.GZ(0x1D);}else{this.EH=this.EH-1;AY=this.Ns.
Get(this.EH);}this.GH=this.GH+1;var Aho=this.GH;this.Kf=Aho;this.Bo=AY;(A=this.IE
)?A[1].call(A[0],this):null;this.Bo=null;this.Kf=-1;if(!!this.A2)this.A2.Ai=AY;AY.
L=this;AY.Al=this.A2;this.A2=AY;if(!this.A6)this.A6=AY;if(Aho===this.Fu)this.Ad(
AY);return AY;},Al_:function(){while(this.EH>0){this.EH=this.EH-1;this.Ns.Set(this.
EH,null);}},WE:function(){var AY=this.A6;if(!AY)return null;if(AY===this.BY)this.
Ad(null);this.FR=this.FR+1;if(!!AY.Ai)AY.Ai.Al=null;else this.A2=null;this.A6=AY.
Ai;AY.Ai=null;AY.L=null;AY.Bu=null;if(this.EH<8){this.Ns.Set(this.EH,AY);this.EH=
this.EH+1;}return AY;},Af9:function(){var A;var AY=null;if(!this.EH){AY=(D.Bo.isPrototypeOf(
A=B._NewObject(this.NX,0))?A:null);AY.GZ(0x1D);}else{this.EH=this.EH-1;AY=this.Ns.
Get(this.EH);}this.FR=this.FR-1;var Ahn=this.FR;this.Kf=Ahn;this.Bo=AY;(A=this.IE
)?A[1].call(A[0],this):null;this.Bo=null;this.Kf=-1;if(!!this.A6)this.A6.Al=AY;AY.
L=this;AY.Ai=this.A6;this.A6=AY;if(!this.A2)this.A2=AY;if(Ahn===this.Fu)this.Ad(
AY);return AY;},AmV:function(P){var A;this.D2.Dl=null;this.D2.Q7=null;this.D2=null;(
A=this.Wx)?A[1].call(A[0],this):null;},Acz:function(P){this.C_(this.Ek.A9[1]);},
AcA:function(P){var A;if(!!this.D2){this.D2.Aw(false);this.D2.Dl=null;this.D2.Q7=
null;this.D2=null;}{var X=this.Adi(0,this.DT-1);var L5=this.S.slice(0,2);if(X[0]>
L5[0])X=[].concat(L5[0],X.slice(1,4));if(X[1]>L5[1])X=B.uq(X,L5[1]);var BL=X[1]-
this.S[1];var JO=((A=this.S)[3]-A[1])-(X[3]-X[1]);if(JO>0)JO=0;this.Ek.A9=[0,this.
Bq];this.Ek.Dj=[0,(this.Bq+JO)-BL];this.Ek.Di=[0,this.Bq-BL];}},Zx:function(E){if(
E===this.Ek)return;if(!!E&&!!E.L9){B.uF("%s%$%*%s",Oq,E,LG);throw new Error(Ni);
}if(!!this.Ek){this.Ek.Q8=null;this.Ek.L9=null;}this.Ek=E;if(!!E){E.Q8=[this,this.
AcA];E.L9=[this,this.Acz];}},C_:function(E){var A;if(E===this.Bq)return;this.Bq=
E;this.AO();this.As([0,0,(A=this.S)[2]-A[0],A[3]-A[1]]);},IG:function(E){if(E<0)
E=-1;if(E===this.Fu)return;this.Fu=E;this.AO();},Aej:function(E){var A;if(E<1)E=
1;if(E===this.Eg)return;this.Eg=E;while(!!this.WE());this.AO();this.As([0,0,(A=this.
S)[2]-A[0],A[3]-A[1]]);},Aev:function(E){var A;if(E<0)E=0;if(E===this.DT)return;
var X=[0,0,(A=this.S)[2]-A[0],A[3]-A[1]];if(E>this.DT){X=B.uq(X,this.Bq+(this.DT
*this.Eg));X=[].concat(X.slice(0,3),this.Bq+(E*this.Eg));}else{X=B.uq(X,this.Bq+(
E*this.Eg));X=[].concat(X.slice(0,3),this.Bq+(this.DT*this.Eg));}this.DT=E;this.
AO();this.As(X);},Aei:function(E){var A;if(E===this.NX)return;this.NX=E;while(!!
this.WE());this.Al_();this.AO();this.As([0,0,(A=this.S)[2]-A[0],A[3]-A[1]]);},Ry:
function(VX,AfY,AlX,OA){var A;if((VX<0)||(VX>=this.DT))return;var Ac=this.Adi(VX
,VX);var Ax=this.S;var Tw=B.it(Ac,Ax);if((!AfY&&!((Tw[0]>=Tw[2])||(Tw[1]>=Tw[3])
))||(AfY&&B.tI(Tw,Ac))){(OA)?OA[1].call(OA[0],this):null;return;}var Er=0;if(Ac[
3]>Ax[3])Er=Ac[3]-Ax[3];if(Er>(Ac[1]-Ax[1]))Er=Ac[1]-Ax[1];if(!!this.D2){this.D2.
Aw(false);this.D2.Dl=null;this.D2.Q7=null;this.Wx=null;}this.D2=AlX;if(!this.D2){
this.C_(this.Bq-Er);(OA)?OA[1].call(OA[0],this):null;}else{this.D2.Aw(false);this.
D2.Zt(1);this.D2.Dl=[this,this.Aie,this.C_];this.D2.Fx=this.Bq;this.D2.Fy=this.Bq-
Er;this.D2.Q7=[this,this.AmV];this.D2.Ai5(false);this.D2.Aw(true);this.Wx=OA;}},
Adi:function(Ia,KH){if(Ia<0)Ia=0;if(KH>=this.DT)KH=this.DT-1;if(Ia>KH)return AZ;
var X=this.S;var Er=this.Bq;X=B.uq(X,(X[1]+Er)+(Ia*this.Eg));X=[].concat(X.slice(
0,3),X[1]+(((KH-Ia)+1)*this.Eg));return X;},UH:function(Ia,KH){var A;if(Ia<0)Ia=
0;if(Ia>KH)return;if(this.OQ>this.OR){this.OQ=Ia;this.OR=KH;}else{if(Ia<this.OQ)
this.OQ=Ia;if(KH>this.OR)this.OR=KH;}var X=[0,0,(A=this.S)[2]-A[0],A[3]-A[1]];X=
B.uq(X,this.Bq+(Ia*this.Eg));X=[].concat(X.slice(0,3),this.Bq+((KH+1)*this.Eg));
this.AO();this.As(X);},Aie:function(){return this.Bq;},_Init:function(aArg){D.J.
_Init.call(this,aArg);(this.Ns=[]).__proto__=D.A4.Ns;this.__proto__=D.A4;this.H(
Nj);this.NX=B.uO.Text;},_Mark:function(C){var A;D.J._Mark.call(this,C);B.tQ(this.
Ns,C);if((A=this.D2)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.Bo)&&(A._cycle
!=C))A._Mark(A._cycle=C);if((A=this.Ek)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=
this.Wx)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.IE)&&((A=A[0])._cycle
!=C))A._Mark(A._cycle=C);},_className:"Core::VerticalList"};D.BH={UV:null,U0:null
,Gp:null,ID:null,C9:null,Az:null,AK:0,C6:0,AV:0,HV:0,DG:0,A9:B.qK,Ev:B.qK,DE:B.qK
,Aju:8,Adz:1,Down:false,Ke:false,GK:false,E2:function(Bs,aClip,aOffset,AR,aBlend
){},C7:function(AW){var A;var AF=(D.Pp.isPrototypeOf(AW)?AW:null);var BV=(D.Ps.isPrototypeOf(
AW)?AW:null);var Wr=this.Ke;var KT;var Hk;var T8;var Fh;var Tu;if(!AF&&!BV)return null;
KT=(!!AF&&AF.Down)&&!AF.DG;Hk=(!!AF&&AF.Down)&&(AF.DG>0);T8=(!!AF&&AF.Down)&&(AF.
DG>50);Fh=!!AF&&!AF.Down;Tu=!!BV;if(KT){var OV=0;var JK;this.AK=this.AK|(1<<AF.C6
);for(JK=this.AK&4095;JK>0;JK=JK>>1)if(!!(JK&1))OV=OV+1;if(OV===1)this.AK=(this.
AK|16777216)|(4096<<AF.C6);}if(Fh)this.AK=(this.AK&~(1<<AF.C6))|33554432;if(T8&&(
this.AK<16777216))this.AK=this.AK|67108864;if(Fh&&AF.GK)this.AK=this.AK|67108864;
if(Fh&&!(this.AK&16777215))this.AK=0;if(Hk&&(this.AK>=67108864))this.HD().ZX(null
,null,0x0);if((Hk&&!!(this.AK&16777216))&&!!(this.AK&33554432)){Hk=false;Fh=true;
}if(!!AF&&!(this.AK&(4096<<AF.C6)))return this;if(!!BV&&!(this.AK&(4096<<BV.C6))
)return this;if(Fh&&!(this.AK&16777216))return this;if(((KT||Tu)||Hk)&&((this.AK<
16777216)||(this.AK>=33554432)))return this;if(Fh)this.AK=this.AK&3758100479;if(
Fh&&!(this.AK&16777215))this.AK=0;if(!!AF){this.Down=KT||Hk;this.Ke=this.X$(AF.DE
);this.Ev=AF.Ev;this.DE=AF.DE;this.A9=BN;this.DG=AF.DG;this.HV=AF.HV;this.GK=AF.
GK;this.C6=AF.C6;this.AV=AF.AV;if(AF.Down&&!AF.DG)Wr=false;}if(!!BV){this.Down=true;
this.Ke=this.X$(BV.DE);this.Ev=BV.Ev;this.DE=BV.DE;this.A9=BV.A9;this.DG=BV.DG;this.
HV=BV.HV;this.C6=BV.C6;this.GK=false;this.AV=BV.AV;(A=this.UV)?A[1].call(A[0],this
):null;}if((!!AF&&this.Down)&&!this.DG)(A=this.Az)?A[1].call(A[0],this):null;if((
!!AF&&this.Down)&&(this.DG>0))(A=this.ID)?A[1].call(A[0],this):null;if((this.Down&&
this.Ke)&&!Wr)(A=this.Gp)?A[1].call(A[0],this):null;if(((this.Down&&!this.Ke)&&Wr
)||((!this.Down&&this.Ke)&&Wr))(A=this.U0)?A[1].call(A[0],this):null;if(!!AF&&!this.
Down)(A=this.C9)?A[1].call(A[0],this):null;return this;},K7:function(A5,Aq,EU,JA
,KJ){var A;if(!!JA&&(JA!==this))return null;if((EU<1)||(EU>this.Adz))return null;
if(this.AK>=33554432)return null;if((this.AK>=16777216)&&!(this.AK&(4096<<Aq)))return null;
if(this.Ah1()){var Ac=B.it(A5,this.GetExtent());if(!((Ac[0]>=Ac[2])||(Ac[1]>=Ac[
3]))){var FB=B.ts(A5);var BL=BN;if(FB[0]<Ac[0])BL=[Ac[0]-FB[0],BL[1]];if(FB[0]>=
Ac[2])BL=[(Ac[2]-FB[0])-1,BL[1]];if(FB[1]<Ac[1])BL=[BL[0],Ac[1]-FB[1]];if(FB[1]>=
Ac[3])BL=[BL[0],(Ac[3]-FB[1])-1];return B._NewObject(D.Rt,0).Initialize(this,BL);
}}else{var Cp=B.tY(9,B.qK,null);var Aa;Cp.Set(0,B.ts(A5));Cp.Set(1,Cp.Get(0));Cp.
Set(2,Cp.Get(0));Cp.Set(3,Cp.Get(0));Cp.Set(4,Cp.Get(0));Cp.Set(1,[A5[0],Cp.Get(
1)[1]]);Cp.Set(2,[Cp.Get(2)[0],A5[1]]);Cp.Set(3,[A5[2],Cp.Get(3)[1]]);Cp.Set(4,[
Cp.Get(4)[0],A5[3]]);Cp.Set(5,A5.slice(0,2));Cp.Set(6,[A5[2],A5[1]]);Cp.Set(7,[A5[
0],A5[3]]);Cp.Set(8,A5.slice(2,4));for(Aa=0;Aa<9;Aa=Aa+1)if(this.X$(Cp.Get(Aa)))
return B._NewObject(D.Rt,0).Initialize(this,B.tU(Cp.Get(Aa),Cp.Get(0)));}return null;
},Zv:function(E){if(E<1)E=1;this.Aju=E;},U_:function(E){if(E<1)E=1;this.Adz=E;},
Aw:function(E){if(E)this.Bh(0x10,0x0);else this.Bh(0x0,0x10);},_Init:function(aArg
){D.II._Init.call(this,aArg);this.__proto__=D.BH;this.M=0x11B;},_Mark:function(C
){var A;D.II._Mark.call(this,C);if((A=this.UV)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=
C);if((A=this.U0)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.Gp)&&((A=
A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.ID)&&((A=A[0])._cycle!=C))A._Mark(
A._cycle=C);if((A=this.C9)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.
Az)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);},_className:"Core::SimpleTouchHandler"
};D.Gr={timer:null,Q8:null,L9:null,AK:0,V7:0,JL:5000.000000,O3:0,Wq:B.qK,OJ:0,KL:
0,Bx:0,NM:0,Rb:0,OI:0,KK:0,Bw:0,NL:0,NK:0,Ev:B.qK,Ac_:B.qK,Di:B.qK,Dj:B.qK,A9:B.
qK,Adf:0.500000,Vt:true,Qj:false,In:false,Io:false,LM:false,E2:function(Bs,aClip
,aOffset,AR,aBlend){},C7:function(AW){var A;var AF=(D.Pp.isPrototypeOf(AW)?AW:null
);var BV=(D.Ps.isPrototypeOf(AW)?AW:null);var Dx=(D.Us.isPrototypeOf(AW)?AW:null
);var KT;var Hk;var T8;var Fh;var Tu;KT=(!!AF&&AF.Down)&&!AF.DG;Hk=(!!AF&&AF.Down
)&&(AF.DG>0);T8=(!!AF&&AF.Down)&&(AF.DG>50);Fh=!!AF&&!AF.Down;Tu=!!BV;if(KT){var
OV=0;var JK;this.AK=this.AK|(1<<AF.C6);for(JK=this.AK&4095;JK>0;JK=JK>>1)if(!!(JK&
1))OV=OV+1;if(OV===1)this.AK=(this.AK|16777216)|(4096<<AF.C6);}if(Fh)this.AK=(this.
AK&~(1<<AF.C6))|33554432;if(T8&&(this.AK<16777216))this.AK=this.AK|67108864;if(Fh&&
AF.GK)this.AK=this.AK|67108864;if(Fh&&!(this.AK&16777215))this.AK=0;if(Hk&&(this.
AK>=67108864))this.HD().ZX(null,null,0x0);if((Hk&&!!(this.AK&16777216))&&!!(this.
AK&33554432)){Hk=false;Fh=true;}if(!!AF&&!(this.AK&(4096<<AF.C6)))return this;if(
!!BV&&!(this.AK&(4096<<BV.C6)))return this;if(Fh&&!(this.AK&16777216))return this;
if(((KT||Tu)||Hk)&&((this.AK<16777216)||(this.AK>=33554432)))return this;if(Fh)this.
AK=this.AK&3758100479;if(Fh&&!(this.AK&16777215))this.AK=0;if(!!Dx&&(Dx.VB===this
))return null;if((!!Dx&&Dx.Down)&&(this.LM||!this.Qj))return null;if((!!Dx&&Dx.Down
)&&!B.qH(this.S,this.L.Ah7(Dx.Lb)))return null;if((!!Dx&&!Dx.Down)&&(!this.LM||(
this.V7!==Dx.C6)))return null;if((!AF&&!BV)&&!Dx)return null;if(!!AF){this.LM=KT||
Hk;this.V7=AF.C6;this.Ev=AF.Ev;}if(!!BV)this.V7=BV.C6;if(!!Dx){this.LM=Dx.Down;this.
V7=Dx.C6;}if(!!Dx&&Dx.Down){this.AcQ();this.Bw=(((Dx.AV-this.NK)*0.001000)*this.
KK)+this.Bw;this.Bx=(((Dx.AV-this.Rb)*0.001000)*this.KL)+this.Bx;if(this.In)this.
Bw=0.000000;if(this.Io)this.Bx=0.000000;this.KK=0.000000;this.KL=0.000000;this.In=
false;this.Io=false;this.Wq=this.A9;this.O3=Dx.AV;return this;}if(KT){this.AcQ();
this.Bw=(((AF.AV-this.NK)*0.001000)*this.KK)+this.Bw;this.Bx=(((AF.AV-this.Rb)*0.001000
)*this.KL)+this.Bx;if(this.In||!this.Qj)this.Bw=0.000000;if(this.Io||!this.Qj)this.
Bx=0.000000;this.KK=0.000000;this.KL=0.000000;this.In=false;this.Io=false;if(!this.
Qj){this.Qj=true;(A=this.Q8)?A[1].call(A[0],this):null;}this.Wq=this.A9;this.O3=
AF.AV;}if(!!BV){var AB=B.tU(BV.DE,BV.Ev);var A7=this.A9;if(this.Vt)A7=[this.Wq[0
]+AB[0],A7[1]];A7=[A7[0],this.Wq[1]+AB[1]];if(A7[0]<this.Dj[0])A7=[this.Dj[0]+(((
A7[0]-this.Dj[0])/2)|0),A7[1]];else if(A7[0]>this.Di[0])A7=[this.Di[0]+(((A7[0]-
this.Di[0])/2)|0),A7[1]];if(A7[1]<this.Dj[1])A7=[A7[0],this.Dj[1]+(((A7[1]-this.
Dj[1])/2)|0)];else if(A7[1]>this.Di[1])A7=[A7[0],this.Di[1]+(((A7[1]-this.Di[1])
/2)|0)];if(!B.tH(A7,this.A9)){this.Ac_=B.tU(A7,this.A9);this.A9=A7;(A=this.L9)?A[
1].call(A[0],this):null;}}if((!!Dx&&!Dx.Down)&&((Dx.AV-this.O3)>=200)){this.Bw=0.000000;
this.Bx=0.000000;}if(Hk&&((AF.AV-this.O3)>=200)){this.Bw=0.000000;this.Bx=0.000000;
}if(!!BV&&(BV.AV>this.O3)){var AB=BV.A9;var Agu=1000.000000/(BV.AV-this.O3);var L2=
0.000000;var L3;if(this.Vt)L2=AB[0]*Agu;L3=AB[1]*Agu;if((L2*this.Bw)<0.000000)this.
Bw=0.000000;if((L3*this.Bx)<0.000000)this.Bx=0.000000;this.Bw=(this.Bw+L2)*0.500000;
this.Bx=(this.Bx+L3)*0.500000;this.O3=BV.AV;}if(!Fh&&!Dx)return this;if(!!AF&&AF.
GK){this.Bw=0.000000;this.Bx=0.000000;}if((this.A9[0]<=this.Dj[0])||(this.A9[0]>=
this.Di[0]))this.Bw=0.000000;else if(this.Bw===0.000000){var BW=this.A9[0];var CD=
this.Dj[0];var CE=this.Di[0];if(BW<CD)CE=this.Dj[0];else if(BW>CE)CD=this.Di[0];
else{CD=BW;CE=BW;}if((CD-BW)<=(BW-CE))BW=CD;else BW=CE;if(BW!==this.A9[0]){var Ep=
BW-this.A9[0];if(Ep>0.000000)this.Bw=Math.sqrt((Ep*2.000000)*this.JL)+20.000000;
if(Ep<0.000000)this.Bw=-Math.sqrt((-Ep*2.000000)*this.JL)-20.000000;this.KK=(400.000000-(
this.Bw*this.Bw))/(2.000000*Ep);this.OI=BW;}}else{var Ano=this.Bw*this.Bw;var Ep=
Ano/(2.000000*this.JL);var BW=this.A9[0];if(this.Bw>0.000000)BW=BW+(Ep|0);if(this.
Bw<0.000000)BW=BW-(Ep|0);if(BW>this.Di[0])BW=this.Di[0];else if(BW<this.Dj[0])BW=
this.Dj[0];var Ahh=BW;var CD=this.Dj[0];var CE=this.Di[0];if(BW<CD)CE=this.Dj[0];
else if(BW>CE)CD=this.Di[0];else{CD=BW;CE=BW;}if(this.Bw>0.000000){if(CE<=this.A9[
0])BW=CD;else if((BW-CE)<(CD-BW))BW=CE;else BW=CD;}else if(CD>=this.A9[0])BW=CE;
else if((BW-CE)>(CD-BW))BW=CD;else BW=CE;if(BW!==this.A9[0]){Ep=BW-this.A9[0];if(
BW!==Ahh){var Mg=BW-Ahh;if(Mg>0.000000)this.Bw=this.Bw+Math.sqrt((Mg*2.000000)*this.
JL);if(Mg<0.000000)this.Bw=this.Bw-Math.sqrt((-Mg*2.000000)*this.JL);}if(this.Bw>
0.000000)this.Bw=this.Bw+20.000000;if(this.Bw<0.000000)this.Bw=this.Bw-20.000000;
this.KK=(400.000000-(this.Bw*this.Bw))/(2.000000*Ep);this.OI=BW;}else this.Bw=0.000000;
}if((this.A9[1]<=this.Dj[1])||(this.A9[1]>=this.Di[1]))this.Bx=0.000000;else if(
this.Bx===0.000000){var BX=this.A9[1];var CD=this.Dj[1];var CE=this.Di[1];if(BX<
CD)CE=this.Dj[1];else if(BX>CE)CD=this.Di[1];else{CD=BX;CE=BX;}if((CD-BX)<=(BX-CE
))BX=CD;else BX=CE;if(BX!==this.A9[1]){var Ep=BX-this.A9[1];if(Ep>0.000000)this.
Bx=Math.sqrt((Ep*2.000000)*this.JL)+20.000000;if(Ep<0.000000)this.Bx=-Math.sqrt((-
Ep*2.000000)*this.JL)-20.000000;this.KL=(400.000000-(this.Bx*this.Bx))/(2.000000
*Ep);this.OJ=BX;}}else{var Anp=this.Bx*this.Bx;var Ep=Anp/(2.000000*this.JL);var
BX=this.A9[1];if(this.Bx>0.000000)BX=BX+(Ep|0);if(this.Bx<0.000000)BX=BX-(Ep|0);
if(BX>this.Di[1])BX=this.Di[1];else if(BX<this.Dj[1])BX=this.Dj[1];var Ahi=BX;var
CD=this.Dj[1];var CE=this.Di[1];if(BX<CD)CE=this.Dj[1];else if(BX>CE)CD=this.Di[
1];else{CD=BX;CE=BX;}if(this.Bx>0.000000){if(CE<=this.A9[1])BX=CD;else if((BX-CE
)<(CD-BX))BX=CE;else BX=CD;}else if(CD>=this.A9[1])BX=CE;else if((BX-CE)>(CD-BX)
)BX=CD;else BX=CE;if(BX!==this.A9[1]){Ep=BX-this.A9[1];if(BX!==Ahi){var Mg=BX-Ahi;
if(Mg>0.000000)this.Bx=this.Bx+Math.sqrt((Mg*2.000000)*this.JL);if(Mg<0.000000)this.
Bx=this.Bx-Math.sqrt((-Mg*2.000000)*this.JL);}if(this.Bx>0.000000)this.Bx=this.Bx+
20.000000;if(this.Bx<0.000000)this.Bx=this.Bx-20.000000;this.KL=(400.000000-(this.
Bx*this.Bx))/(2.000000*Ep);this.OJ=BX;}else this.Bx=0.000000;}if(!!AF)this.NK=AF.
AV;if(!!Dx)this.NK=Dx.AV;this.Rb=this.NK;this.NL=this.A9[0];this.NM=this.A9[1];this.
Anq();return this;},K7:function(A5,Aq,EU,JA,KJ){var A;if(!!JA&&(JA!==this))return null;
if(this.AK>=33554432)return null;if((this.AK>=16777216)&&!(this.AK&(4096<<Aq)))return null;
if(!this.Vt&&!!(KJ&0xC))return null;var Ac=B.it(A5,this.S);if(!((Ac[0]>=Ac[2])||(
Ac[1]>=Ac[3]))){var FB=B.ts(A5);var BL=BN;if(FB[0]<Ac[0])BL=[Ac[0]-FB[0],BL[1]];
if(FB[0]>=Ac[2])BL=[(Ac[2]-FB[0])-1,BL[1]];if(FB[1]<Ac[1])BL=[BL[0],Ac[1]-FB[1]];
if(FB[1]>=Ac[3])BL=[BL[0],(Ac[3]-FB[1])-1];return B._NewObject(D.Rt,0).Initialize(
this,BL);}return null;},AcQ:function(){if(!!this.timer){B.sY([this,this.DS],this.
timer,0);this.timer=null;}},Anq:function(){this.timer=B._GetAutoObject(B.uX.K_);
B.sL([this,this.DS],this.timer,0);},DS:function(P){var A;if(!this.timer)return;var
Re=(this.timer.AV-this.NK)*0.001000;var Rf=(this.timer.AV-this.Rb)*0.001000;var Anv=
Re*Re;var Anw=Rf*Rf;var L2=(this.KK*Re)+this.Bw;var L3=(this.KL*Rf)+this.Bx;var A7=[((((
this.KK*0.500000)*Anv)+(this.Bw*Re))+this.NL)|0,((((this.KL*0.500000)*Anw)+(this.
Bx*Rf))+this.NM)|0];if(this.In&&(Re>=0.500000)){A7=[this.OI,A7[1]];this.Bw=0.000000;
this.KK=0.000000;this.NL=A7[0];this.In=false;}else if(this.In){var De=1.000000-Math.
pow(1.000000-(Re/0.500000),5.000000);A7=[(this.NL+((this.OI-this.NL)*De))|0,A7[1
]];}if(this.Io&&(Rf>=0.500000)){A7=[A7[0],this.OJ];this.Bx=0.000000;this.KL=0.000000;
this.NM=A7[1];this.Io=false;}else if(this.Io){var De=1.000000-Math.pow(1.000000-(
Rf/0.500000),5.000000);A7=[A7[0],(this.NM+((this.OJ-this.NM)*De))|0];}if(((this.
Bw>0.000000)&&(L2<0.000000))||((this.Bw<0.000000)&&(L2>0.000000))){L2=0.000000;A7=[
this.A9[0],A7[1]];}if(((this.Bx>0.000000)&&(L3<0.000000))||((this.Bx<0.000000)&&(
L3>0.000000))){L3=0.000000;A7=[A7[0],this.A9[1]];}if(!this.In&&(A7[0]<this.Dj[0]
)){this.NL=A7[0];this.OI=this.Dj[0];this.NK=this.timer.AV;this.In=true;}else if(
!this.In&&(A7[0]>this.Di[0])){this.NL=A7[0];this.OI=this.Di[0];this.NK=this.timer.
AV;this.In=true;}if(!this.Io&&(A7[1]<this.Dj[1])){this.NM=A7[1];this.OJ=this.Dj[
1];this.Rb=this.timer.AV;this.Io=true;}else if(!this.Io&&(A7[1]>this.Di[1])){this.
NM=A7[1];this.OJ=this.Di[1];this.Rb=this.timer.AV;this.Io=true;}if(((!this.In&&(
this.Bw!==0.000000))&&(L2>-20.000000))&&(L2<20.000000)){A7=[this.OI,A7[1]];this.
Bw=0.000000;this.KK=0.000000;this.NL=A7[0];}if(((!this.Io&&(this.Bx!==0.000000))&&(
L3>-20.000000))&&(L3<20.000000)){A7=[A7[0],this.OJ];this.Bx=0.000000;this.KL=0.000000;
this.NM=A7[1];}if(!B.tH(A7,this.A9)){this.Ac_=B.tU(A7,this.A9);this.A9=A7;(A=this.
L9)?A[1].call(A[0],this):null;}if((((this.Bw===0.000000)&&(this.Bx===0.000000))&&
!this.In)&&!this.Io){this.AcQ();this.Qj=false;}},AiF:function(E){if(E<0.000000)E=
0.000000;if(E>1.000000)E=1.000000;if(E===this.Adf)return;this.Adf=E;if(E<0.000000
)E=0.000000;this.JL=E*10000.000000;},_Init:function(aArg){D.Cf._Init.call(this,aArg
);this.__proto__=D.Gr;this.M=0x11B;},_Mark:function(C){var A;D.Cf._Mark.call(this
,C);if((A=this.timer)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.Q8)&&((A=A[0
])._cycle!=C))A._Mark(A._cycle=C);if((A=this.L9)&&((A=A[0])._cycle!=C))A._Mark(A.
_cycle=C);},_className:"Core::SlideTouchHandler"};D.Bc={Ai:null,C9:null,Az:null,
ID:null,O2:0,AV:0,Afs:0,By:148,AA:0,BR:0,B7:true,Down:false,Vl:false,GR:false,At:
function(aArg){var A;var Cb=(D.J.isPrototypeOf(A=this.G)?A:null);if(!Cb)throw new
Error(Or);this.Ai=Cb.Wt;Cb.Wt=this;},C7:function(AW){var A;if(!!AW&&AW.Ah4(this.
By)){this.Down=AW.Down;this.AA=AW.AA;this.BR=AW.BR;this.AV=AW.AV;this.GR=false;if(
AW.Down){this.Afs=this.O2;this.Vl=this.O2>0;if(this.Vl)(A=this.ID)?A[1].call(A[0
],this):null;else(A=this.Az)?A[1].call(A[0],this):null;if(!this.GR)this.O2=this.
O2+1;return!this.GR;}if(!AW.Down){this.Vl=this.O2>1;this.Afs=this.O2-1;this.O2=0;(
A=this.C9)?A[1].call(A[0],this):null;return!this.GR;}}return false;},_Init:function(
aArg){this.__proto__=D.Bc;this.At(aArg);B.gx++;},_Done:function(){this.__proto__=
null;B.gx--;},_ReInit:function(){},_Mark:function(C){var A;if((A=this.Ai)&&(A._cycle
!=C))A._Mark(A._cycle=C);if((A=this.C9)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C
);if((A=this.Az)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.ID)&&((A=A[
0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.G)&&(A._cycle!=C))A._Mark(A._cycle=
C);},G:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};D.Rt={Bo:
null,Rv:0,A9:B.qK,Initialize:function(Z,aOffset){this.Bo=Z;this.A9=aOffset;this.
Rv=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=D.Rt;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;}
,_ReInit:function(){},_Mark:function(C){var A;if((A=this.Bo)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};D.PJ={NE:null,Dy:B.qL,Ax:B.qL,isEmpty:false,_Init:
function(aArg){this.__proto__=D.PJ;B.gx++;},_Done:function(){this.__proto__=null;
B.gx--;},_ReInit:function(){},_Mark:function(C){var A;if((A=this.NE)&&(A._cycle!=
C))A._Mark(A._cycle=C);if((A=this.G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};D.UN={L8:B.qK,L7:B.qK
,_Init:function(aArg){D.PJ._Init.call(this,aArg);this.__proto__=D.UN;},_className:
"Core::LayoutLineContext"};D.UO={TU:B.qK,TT:B.qK,L8:B.qK,L7:B.qK,_Init:function(
aArg){D.PJ._Init.call(this,aArg);this.__proto__=D.UO;},_className:"Core::LayoutQuadContext"
};D.Xm={Cb:null,Ai:null,Gb:null,Gf:null,Eb:null,O0:null,_Init:function(aArg){this.
__proto__=D.Xm;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(
){},_Mark:function(C){var A;if((A=this.Cb)&&(A._cycle!=C))A._Mark(A._cycle=C);if((
A=this.Ai)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.Gb)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.Gf)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.Eb)&&(A.
_cycle!=C))A._Mark(A._cycle=C);if((A=this.O0)&&(A._cycle!=C))A._Mark(A._cycle=C);
if((A=this.G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:null
,_className:"Core::DialogContext"};D.Aak={F$:null,A2:null,A6:null,Agv:false,Amb:
function(){if(!this.F$)return;var Fj=this.F$;this.F$.Fg=null;this.F$=null;B.lz([
this,this.Acx],this);Fj.AdG(this);},AmR:function(P){if(!!this.F$)return;if(!this.
A6)return;this.F$=this.A6;this.A6=this.A6.Ai;if(!!this.A6)this.A6.Al=null;else this.
A2=null;this.F$.Ai=null;this.Agv=true;this.F$.Jf(this);this.Agv=false;},Am4:function(
P){B.lz([this,this.AmR],this);},Am3:function(P){B.lz([this,this.Am4],this);},Acx:
function(P){B.lz([this,this.Am3],this);},AhE:function(C1){if(!C1||!C1.Fg)return;
if(C1.Fg!==this)throw new Error(Jy);var Ahq=false;if(this.F$===C1){this.F$=null;
Ahq=true;B.lz([this,this.Acx],this);}else{if(!!C1.Ai)C1.Ai.Al=C1.Al;else this.A2=
C1.Al;if(!!C1.Al)C1.Al.Ai=C1.Ai;else this.A6=C1.Ai;C1.Al=null;C1.Ai=null;}C1.Fg=
null;if(Ahq)C1.AdE(this);},Afu:function(C1,AbY){if(!C1)return;if(!!C1.Fg)throw new
Error(Gu);C1.Fg=this;if(AbY){C1.Ai=this.A6;if(!!this.A6)this.A6.Al=C1;else this.
A2=C1;this.A6=C1;}else{C1.Al=this.A2;if(!!this.A2)this.A2.Ai=C1;else this.A6=C1;
this.A2=C1;}if(!this.F$)B.lz([this,this.Acx],this);},_Init:function(aArg){this.__proto__=
D.Aak;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){
},_Mark:function(C){var A;if((A=this.F$)&&(A._cycle!=C))A._Mark(A._cycle=C);if((
A=this.A2)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.A6)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:
null,_className:"Core::TaskQueue"};D.M1={Fg:null,Al:null,Ai:null,AdG:function(QM
){},AdE:function(QM){},Jf:function(QM){this.It();},Mr:function(){if(!!this.Fg&&(
this.Fg.F$===this))this.Fg.Amb();},It:function(){if(!!this.Fg)this.Fg.AhE(this);
},X_:function(){return!!this.Fg&&(this.Fg.F$===this);},_Init:function(aArg){this.
__proto__=D.M1;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(
){},_Mark:function(C){var A;if((A=this.Fg)&&(A._cycle!=C))A._Mark(A._cycle=C);if((
A=this.Al)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.Ai)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:
null,_className:"Core::Task"};D.Aaj={Am:null,Rc:null,Jf:function(QM){this.Rc.Am=
this.Am;B.qJ(this.Rc,0);B.lz([this,this.AmQ],this);},AmQ:function(P){this.Rc.Am=
null;this.Rc=null;this.Am=null;this.Mr();},_Init:function(aArg){D.M1._Init.call(
this,aArg);this.__proto__=D.Aaj;},_Mark:function(C){var A;D.M1._Mark.call(this,C
);if((A=this.Am)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.Rc)&&(A._cycle!=C
))A._Mark(A._cycle=C);},_className:"Core::SystemEventTask"};D.VA={_Init:function(
){D.Aak._Init.call(this,0);},_variants:function(){return this;},_this:null};D.Lp={
resource:null,Gm:function(){this.resource=null;},At:function(aArg){this.resource=
aArg;},_Init:function(aArg){this.__proto__=D.Lp;this.At(aArg);B.gx++;},_Done:function(
){this.Gm();this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(C){
var A;if((A=this.G)&&(A._cycle!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:
null,_className:"Core::Resource"};D.Timer={Ds:null,timer:null,AV:0,Period:1000,K1:
0,B7:false,Gm:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=
null;},WF:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var
tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.sX(this,this.Trigger);if(
!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=tmp;},DI:function(
E){if(E<0)E=0;if(E===this.Period)return;this.Period=E;if(this.B7)this.WF(this.K1
,E);},Lj:function(E){if(E<0)E=0;if(E===this.K1)return;this.K1=E;if(this.B7)this.
WF(E,this.Period);},Aw:function(E){if(E===this.B7)return;this.B7=E;if(E)this.WF(
this.K1,this.Period);else this.WF(0,0);this.AV=this.RL();},RL:function(){var ticksCount=
0;ticksCount=((new Date).getTime()-B.qG)|0;return ticksCount;},Trigger:function(
){var A;this.AV=this.RL();if(!this.Period)this.Aw(false);(A=this.Ds)?A[1].call(A[
0],this):null;},_Init:function(aArg){this.__proto__=D.Timer;B.gx++;},_Done:function(
){this.Gm();this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(C){
var A;if((A=this.Ds)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.G)&&(A.
_cycle!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Core::Timer"
};D.IK={Am:null,Fg:null,Trigger:function(AlY,AbY){var Fj=B._NewObject(D.Aaj,0);Fj.
Rc=this;Fj.Am=AlY;this.Fg.Afu(Fj,AbY);},_Init:function(aArg){this.__proto__=D.IK;
this.Fg=B._GetAutoObject(D.VA);B.gx++;},_Done:function(){this.__proto__=null;B.gx--;
},_ReInit:function(){},_Mark:function(C){var A;if((A=this.Am)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.Fg)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.G)&&(A.
_cycle!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Core::SystemEvent"
};D.IL={Xh:null,Event:null,AH:null,FJ:function(P){var A;if(!this.Event)return;this.
Xh=this.Event.Am;(A=this.AH)?A[1].call(A[0],this):null;this.Xh=null;},Je:function(
E){if(this.Event===E)return;if(!!this.Event)B.sY([this,this.FJ],this.Event,0);this.
Event=E;if(!!this.Event)B.sL([this,this.FJ],this.Event,0);},_Init:function(aArg){
this.__proto__=D.IL;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:
function(){},_Mark:function(C){var A;if((A=this.Xh)&&(A._cycle!=C))A._Mark(A._cycle=
C);if((A=this.Event)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.AH)&&((A=A[0]
)._cycle!=C))A._Mark(A._cycle=C);if((A=this.G)&&(A._cycle!=C))A._Mark(A._cycle=C
);},G:null,_cycle:0,_observers:null,_className:"Core::SystemEventHandler"};D.AI={
AH:null,Dl:null,FJ:function(P){var A;(A=this.AH)?A[1].call(A[0],this):null;},A3:
function(E){if(B.tJ(this.Dl,E))return;if(!!this.Dl)B.s0([this,this.FJ],this.Dl,0
);this.Dl=E;if(!!this.Dl)B.sN([this,this.FJ],this.Dl,0);},_Init:function(aArg){this.
__proto__=D.AI;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(
){},_Mark:function(C){var A;if((A=this.AH)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=
C);if((A=this.Dl)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C);if((A=this.G)&&(A._cycle
!=C))A._Mark(A._cycle=C);},G:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"
};D.Apy={IO:0x1,AnM:0x2,Aoo:0x4,Apt:0x8,B7:0x10,Apd:0x20,My:0x40,AoK:0x80,Aom:0x100
,Aoy:0x200,Aod:0x400,Ao0:0x800,AaI:0x1000,Apw:0x2000,AoO:0x4000,AoP:0x8000,An6:0x10000
,AoN:0x20000,Ao$:0x40000};D.Dq={Ao1:0x1,Ao2:0x2,AnJ:0x4,AnK:0x8,AnL:0x10,AnI:0x20
};D.Aoq={AoM:0,Apq:1,AnT:2,AoC:3,Ao4:4,Apr:5,Aps:6,AnU:7,AnV:8,AoE:9,AoD:10,Ao6:
11,Ao5:12};D.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:
8,PageDown:9,Key0:10,Key1:11,Key2:12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:
18,Key9:19,Red:20,Green:21,Blue:22,Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:
28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:37,Display:
38,SkipPrev:39,SkipNext:40,Home:41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:
46,VolumeDown:47,Show:48,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55
,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:
64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,
Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:
82,Mode:83,Mute:84,User0:85,User1:86,User2:87,User3:88,User4:89,User5:90,User6:91
,User7:92,User8:93,User9:94,User10:95,User11:96,User12:97,User13:98,User14:99,User15:
100,User16:101,User17:102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:
108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:
117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:
126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134
,Divide:135,Equals:136,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141
,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:
146,CursorKeys:147,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:
153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159
,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:
166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172
,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:
179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185
,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:
192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199
,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205
,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210
,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:
216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:
221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:
226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:
231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:
236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:
241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:
246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:
251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:
256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:
261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:
266,CtrlShiftPageUp:267,CtrlShiftPageDown:268,CtrlShiftBackspace:269,CtrlShiftInsert:
270,CtrlShiftDelete:271,CtrlShiftHome:272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:
275,AltF2:276,AltF3:277,AltF4:278,AltF5:279,AltF6:280,AltF7:281,AltF8:282,AltF9:
283,AltF10:284,AltEnter:285,AltEscape:286,AltUp:287,AltDown:288,AltLeft:289,AltRight:
290,AltPageUp:291,AltPageDown:292,AltBackspace:293,AltInsert:294,AltDelete:295,AltHome:
296,AltEnd:297,AltTab:298,AltShiftF1:299,AltShiftF2:300,AltShiftF3:301,AltShiftF4:
302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:
308,AltShiftEnter:309,AltShiftEscape:310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:
313,AltShiftRight:314,AltShiftPageUp:315,AltShiftPageDown:316,AltShiftBackspace:
317,AltShiftInsert:318,AltShiftDelete:319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:
322,ShiftF1:323,ShiftF2:324,ShiftF3:325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:
329,ShiftF8:330,ShiftF9:331,ShiftF10:332,ShiftEnter:333,ShiftEscape:334,ShiftUp:
335,ShiftDown:336,ShiftLeft:337,ShiftRight:338,ShiftPageUp:339,ShiftPageDown:340
,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:343,ShiftHome:344,ShiftEnd:345,ShiftTab:
346};D.Ao3={ApE:0x1,ApB:0x2,ApC:0x4,ApD:0x8,AoG:0x10,Aop:0x20};
D._Init=function(){D.PK.__proto__=D.Bo;D.II.__proto__=D.Bo;D.Cf.__proto__=D.Bo;D.
J.__proto__=D.Cf;D.Root.__proto__=D.J;D.KeyEvent.__proto__=D.Event;D.Us.__proto__=
D.Event;D.Pp.__proto__=D.Event;D.Ps.__proto__=D.Event;D.DV.__proto__=D.Cf;D.A4.__proto__=
D.J;D.BH.__proto__=D.II;D.Gr.__proto__=D.Cf;D.UN.__proto__=D.PJ;D.UO.__proto__=D.
PJ;D.Aaj.__proto__=D.M1;};D._ReInit=function(){var A;if((A=D.VA._this))A._ReInit(
);};D.Cl=function(C){var A;if((A=D.VA._this)&&(A._cycle!=C))A._Done(D.VA._this=null
);};return D;})();

/* Embedded Wizard */