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
);if(EmWiApp.uO)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
uO=(function(){var B=EmWiApp;var D={};
var BN=[1,1];var AZ=[0,0];var Ao=[0,0,0,0];var CW="\uFEFF";var Fz="The Slide Touch Handler:";
var He="is already connected with a view.";var Cw="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var H_="No matrix to perform 3D transformation";var Hf="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
D.T={DC:null,Ne:1,Nd:1,Bj:0xFFFFFFFF,E2:function(Bs,aClip,aOffset,AR,aBlend){var A;
var KW=this.Nd;var KX=this.Ne;var JR=B.tV(this.BF,aOffset);var JS=B.tV(this.BG,aOffset
);var Hi;var Hj;var Bi=this.Bj;if(B.tH(JR,JS))return;aBlend=aBlend&&((this.M&0x2
)===0x2);AR=AR+1;Hi=Hj=Bi;if(AR<256){Hi=(Hi&0x00FFFFFF)|((((AR*((Hi>>24)&0xFF))>>
8)&0xFF)<<24);Hj=(Hj&0x00FFFFFF)|((((AR*((Hj>>24)&0xFF))>>8)&0xFF)<<24);}if((KW===
1)&&(KX===1))Bs.AhQ(aClip,JR,JS,Hi,Hj,aBlend);else Bs.AhR(aClip,JR,JS,KW,KX,Hi,Hj
,aBlend);},GetExtent:function(){var KW=this.Nd;var KX=this.Ne;var JR=this.BF;var
JS=this.BG;if(((KW===1)&&(KX===1))||B.tH(JR,JS))return B.Core.PK.GetExtent.call(
this);var LZ=KW/2.000000;var L0=KX/2.000000;var OL=JR[0];var OM=JR[1];var ON=JS[
0];var OO=JS[1];var FC=ON-OL;var FD=OO-OM;var Dz=Math.sqrt((FC*FC)+(FD*FD));FC=FC
/Dz;FD=FD/Dz;var Af6=OL+(FD*LZ);var Af7=OM-(FC*LZ);var V_=ON+(FD*L0);var V$=OO-(
FC*L0);var Wa=ON-(FD*L0);var Wb=OO+(FC*L0);var Wc=OL-(FD*LZ);var Wd=OM+(FC*LZ);var
left=Af6;var right=Af6;var top=Af7;var bottom=Af7;if(V_<left)left=V_;if(Wa<left)
left=Wa;if(Wc<left)left=Wc;if(V_>right)right=V_;if(Wa>right)right=Wa;if(Wc>right
)right=Wc;if(V$<top)top=V$;if(Wb<top)top=Wb;if(Wd<top)top=Wd;if(V$>bottom)bottom=
V$;if(Wb>bottom)bottom=Wb;if(Wd>bottom)bottom=Wd;var Ac=[left|0,top|0,right|0,bottom|
0];Ac=[].concat(Ac.slice(0,2),B.tV(Ac.slice(2,4),BN));return Ac;},EJ:function(P){
var A;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent());},Ajd:function(
E){var A;if(E<1)E=1;if(E===this.Ne)return;if(!!this.L&&((this.M&0x1)===0x1))this.
L.As(this.GetExtent());this.Ne=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.
GetExtent());if(((E!==1)||(this.Nd!==1))&&!this.DC){this.DC=B.tv(B.uQ.Qx);if(this.
DC.GX)B.sL([this,this.EJ],this.DC,0);}if(((E===1)&&(this.Nd===1))&&!!this.DC){if(
this.DC.GX)B.sY([this,this.EJ],this.DC,0);this.DC=null;}},Ajc:function(E){var A;
if(E<1)E=1;if(E===this.Nd)return;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.
GetExtent());this.Nd=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent(
));if(((E!==1)||(this.Ne!==1))&&!this.DC){this.DC=B.tv(B.uQ.Qx);if(this.DC.GX)B.
sL([this,this.EJ],this.DC,0);}if(((E===1)&&(this.Ne===1))&&!!this.DC){if(this.DC.
GX)B.sY([this,this.EJ],this.DC,0);this.DC=null;}},G1:function(E){var A;if(E<1)E=
1;if((E===this.Nd)&&(E===this.Ne))return;if(!!this.L&&((this.M&0x1)===0x1))this.
L.As(this.GetExtent());this.Nd=E;this.Ne=E;if(!!this.L&&((this.M&0x1)===0x1))this.
L.As(this.GetExtent());if((E!==1)&&!this.DC){this.DC=B.tv(B.uQ.Qx);if(this.DC.GX
)B.sL([this,this.EJ],this.DC,0);}if((E===1)&&!!this.DC){if(this.DC.GX)B.sY([this
,this.EJ],this.DC,0);this.DC=null;}},Aj:function(E){var A;if(E===this.Bj)return;
this.Bj=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent());},AU:function(
E){if(E)this.Bh(0x400,0x0);else this.Bh(0x0,0x400);},Kl:function(){var A;return((
this.M&0x1)===0x1);},Ah:function(E){if(E)this.Bh(0x1,0x0);else this.Bh(0x0,0x1);
},_Init:function(aArg){B.Core.PK._Init.call(this,aArg);this.__proto__=D.T;},_Mark:
function(C){var A;B.Core.PK._Mark.call(this,C);if((A=this.DC)&&(A._cycle!=C))A._Mark(
A._cycle=C);},_className:"Views::Line"};D.W={Bj:0xFFFFFFFF,E2:function(Bs,aClip,
aOffset,AR,aBlend){var A;var A_;var Be;var Bb;var Bd;var Bi=this.Bj;aBlend=aBlend&&((
this.M&0x2)===0x2);AR=AR+1;A_=Be=Bb=Bd=Bi;if(AR<256){A_=(A_&0x00FFFFFF)|((((AR*((
A_>>24)&0xFF))>>8)&0xFF)<<24);Be=(Be&0x00FFFFFF)|((((AR*((Be>>24)&0xFF))>>8)&0xFF
)<<24);Bb=(Bb&0x00FFFFFF)|((((AR*((Bb>>24)&0xFF))>>8)&0xFF)<<24);Bd=(Bd&0x00FFFFFF
)|((((AR*((Bd>>24)&0xFF))>>8)&0xFF)<<24);}Bs.Uz(aClip,B.tX(this.S,aOffset),A_,Be
,Bd,Bb,aBlend);},Aj:function(E){var A;if(E===this.Bj)return;this.Bj=E;if(!!this.
L&&((this.M&0x1)===0x1))this.L.As(this.S);},_Init:function(aArg){B.Core.Cf._Init.
call(this,aArg);this.__proto__=D.W;},_className:"Views::Rectangle"};D.IX={Width:
1,E2:function(Bs,aClip,aOffset,AR,aBlend){var A;var A_;var Be;var Bb;var Bd;aBlend=
aBlend&&((this.M&0x2)===0x2);AR=AR+1;A_=Be=Bb=Bd=0xFFFFFFFF;if(AR<256){A_=(A_&0x00FFFFFF
)|((((AR*255)>>8)&0xFF)<<24);Be=(Be&0x00FFFFFF)|((((AR*255)>>8)&0xFF)<<24);Bb=(Bb&
0x00FFFFFF)|((((AR*255)>>8)&0xFF)<<24);Bd=(Bd&0x00FFFFFF)|((((AR*255)>>8)&0xFF)<<
24);}Bs.AhO(aClip,B.tX(this.S,aOffset),this.Width,A_,Be,Bd,Bb,aBlend);},G1:function(
E){var A;if(E<0)E=0;if(E===this.Width)return;this.Width=E;if(!!this.L&&((this.M&
0x1)===0x1))this.L.As(this.S);},_Init:function(aArg){B.Core.Cf._Init.call(this,aArg
);this.__proto__=D.IX;},_className:"Views::Border"};D.PA={timer:null,R:null,Cq:-
1,Bj:0xFFFFFFFF,Rw:0x1F,GT:0,BE:0,N3:B.qK,Fk:false,E2:function(Bs,aClip,aOffset,
AR,aBlend){var A;var Cn=this.GT;if(this.Cq>=0)Cn=this.Cq;if(!this.R||(Cn>=this.R.
NoOfFrames))return;this.R.Update();var A_;var Be;var Bd;var Bb;var Bi=this.Bj;var
D0=(((AR+1)*255)>>8)+1;var EX=this.Rw;var Ac=B.tX(this.S,aOffset);var W0=B.tU([Ac[
2]-Ac[0],Ac[3]-Ac[1]],this.N3);aBlend=aBlend&&((this.M&0x2)===0x2);A_=Be=Bb=Bd=Bi;
if(D0<256){A_=(A_&0x00FFFFFF)|((((((A_>>24)&0xFF)*D0)>>8)&0xFF)<<24);Be=(Be&0x00FFFFFF
)|((((((Be>>24)&0xFF)*D0)>>8)&0xFF)<<24);Bd=(Bd&0x00FFFFFF)|((((((Bd>>24)&0xFF)*
D0)>>8)&0xFF)<<24);Bb=(Bb&0x00FFFFFF)|((((((Bb>>24)&0xFF)*D0)>>8)&0xFF)<<24);}if(((
this.N3[0]>0)&&(W0[0]>0))&&!((EX&0x5)===0x5)){var D8=((this.R.FrameSize[0]/3)|0)-
W0[0];if(((EX&0x1)===0x1)){if(aClip[2]>Ac[2])aClip=B.uo(aClip,Ac[2]);if(D8>0)Ac=
B.uo(Ac,Ac[2]+D8);EX=EX|0x4;}else if(((EX&0x4)===0x4)){if(aClip[0]<Ac[0])aClip=[
].concat(Ac[0],aClip.slice(1,4));if(D8>0)Ac=[].concat(Ac[0]-D8,Ac.slice(1,4));EX=
EX|0x1;}else{if(aClip[0]<Ac[0])aClip=[].concat(Ac[0],aClip.slice(1,4));if(aClip[
2]>Ac[2])aClip=B.uo(aClip,Ac[2]);if(D8>0){Ac=[].concat(Ac[0]-((D8/2)|0),Ac.slice(
1,4));Ac=B.uo(Ac,(Ac[2]+D8)-((D8/2)|0));}EX=EX|0x5;}}if(((this.N3[1]>0)&&(W0[1]>
0))&&!((EX&0xA)===0xA)){var D8=((this.R.FrameSize[1]/3)|0)-W0[1];if(((EX&0x2)===
0x2)){if(aClip[3]>Ac[3])aClip=[].concat(aClip.slice(0,3),Ac[3]);if(D8>0)Ac=[].concat(
Ac.slice(0,3),Ac[3]+D8);EX=EX|0x8;}else if(((EX&0x8)===0x8)){if(aClip[1]<Ac[1])aClip=
B.uq(aClip,Ac[1]);if(D8>0)Ac=B.uq(Ac,Ac[1]-D8);EX=EX|0x2;}else{if(aClip[1]<Ac[1]
)aClip=B.uq(aClip,Ac[1]);if(aClip[3]>Ac[3])aClip=[].concat(aClip.slice(0,3),Ac[3
]);if(D8>0){Ac=B.uq(Ac,Ac[1]-((D8/2)|0));Ac=[].concat(Ac.slice(0,3),(Ac[3]+D8)-((
D8/2)|0));}EX=EX|0xA;}}Bs.AhN(aClip,this.R,Cn,Ac,EX,A_,Be,Bd,Bb,aBlend);},EJ:function(
P){var A;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.S);},DS:function(P){var
A;var Cn=this.Cq;var EK=0;if(!!this.R)EK=this.R.NoOfFrames*this.R.FrameDelay;if((
!!this.timer&&(this.Cq<0))&&(EK>0))this.BE=this.timer.AV-(this.GT*this.R.FrameDelay
);if(!!this.timer&&(EK>0)){var AC=(this.timer.AV-this.BE)|0;Cn=(AC/this.R.FrameDelay
)|0;if(AC>=EK){Cn=Cn%this.R.NoOfFrames;this.BE=this.timer.AV-(AC%EK);}}if(((Cn!==
this.Cq)&&!!this.L)&&((this.M&0x1)===0x1))this.L.As(this.S);this.Cq=Cn;if(!EK&&!
!this.timer){B.sY([this,this.DS],this.timer,0);this.timer=null;}},Aj:function(E){
var A;if(E===this.Bj)return;this.Bj=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(
this.S);},E5:function(E){var A;if(this.Fk===E)return;this.Fk=E;this.Cq=-1;if(!E&&
!!this.timer){B.sY([this,this.DS],this.timer,0);this.timer=null;}if(E){this.timer=
B._GetAutoObject(B.uX.K_);B.sL([this,this.DS],this.timer,0);B.lz([this,this.DS],
this);}if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.S);},Aeb:function(E){var
A;if(E===this.Rw)return;this.Rw=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.
S);},GY:function(E){var A;if(E<0)E=0;if((E===this.GT)&&(this.Cq===-1))return;this.
GT=E;if(!this.timer)this.Cq=-1;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.
S);},Q:function(E){var A;if(E===this.R)return;if(!!this.R&&this.R.GX)B.sY([this,
this.EJ],this.R,0);this.R=E;this.Cq=-1;if(!!E&&E.GX)B.sL([this,this.EJ],E,0);if(
this.Fk){this.E5(false);this.E5(true);}if(!!this.L&&((this.M&0x1)===0x1))this.L.
As(this.S);},Ah:function(E){if(E)this.Bh(0x1,0x0);else this.Bh(0x0,0x1);},Aeu:function(
E){var A;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(B.tH(E,this.N3))return;this.
N3=E;if((!!this.L&&((this.M&0x1)===0x1))&&!((this.Rw&0xF)===0xF))this.L.As(this.
S);},_Init:function(aArg){B.Core.Cf._Init.call(this,aArg);this.__proto__=D.PA;},
_Mark:function(C){var A;B.Core.Cf._Mark.call(this,C);if((A=this.timer)&&(A._cycle
!=C))A._Mark(A._cycle=C);if((A=this.R)&&(A._cycle!=C))A._Mark(A._cycle=C);},_className:
"Views::Frame"};D.K={timer:null,R:null,BE:0,Cq:0,Bj:0xFFFFFFFF,Es:0x12,GT:0,HO:255
,Dt:0,Fk:false,Uc:false,E2:function(Bs,aClip,aOffset,AR,aBlend){var A;var Cn=this.
GT;if(this.Cq>=0)Cn=this.Cq;if(!this.R||(Cn>=this.R.NoOfFrames))return;this.R.Update(
);var X=this.Kc();var Df=this.R.FrameSize;var orient=this.Dt;if((X[0]>=X[2])||(X[
1]>=X[3]))return;var A_;var Be;var Bd;var Bb;var Bi=this.Bj;var D0=(((AR+1)*this.
HO)>>8)+1;aBlend=aBlend&&((this.M&0x2)===0x2);A_=Be=Bb=Bd=Bi;if(D0<256){A_=(A_&0x00FFFFFF
)|((((((A_>>24)&0xFF)*D0)>>8)&0xFF)<<24);Be=(Be&0x00FFFFFF)|((((((Be>>24)&0xFF)*
D0)>>8)&0xFF)<<24);Bd=(Bd&0x00FFFFFF)|((((((Bd>>24)&0xFF)*D0)>>8)&0xFF)<<24);Bb=(
Bb&0x00FFFFFF)|((((((Bb>>24)&0xFF)*D0)>>8)&0xFF)<<24);}if(B.tH([X[2]-X[0],X[3]-X[
1]],Df)&&!orient)Bs.Ac7(aClip,this.R,Cn,B.tX(this.S,aOffset),B.tU(this.S.slice(0
,2),X.slice(0,2)),A_,Be,Bd,Bb,aBlend);else if(!orient)Bs.Ajw(aClip,this.R,Cn,B.tX(
X,aOffset),[].concat(AZ,Df),A_,Be,Bd,Bb,aBlend,true);else{var left=X[0]+aOffset[
0];var top=X[1]+aOffset[1];var right=X[2]+aOffset[0];var bottom=X[3]+aOffset[1];
if(orient===1)Bs.SB(aClip,this.R,Cn,left,bottom,1.000000,left,top,1.000000,right
,top,1.000000,right,bottom,1.000000,[].concat(AZ,Df),Bb,A_,Be,Bd,aBlend,true);else
if(orient===2)Bs.SB(aClip,this.R,Cn,right,bottom,1.000000,left,bottom,1.000000,left
,top,1.000000,right,top,1.000000,[].concat(AZ,Df),Bd,Bb,A_,Be,aBlend,true);else if(
orient===3)Bs.SB(aClip,this.R,Cn,right,top,1.000000,right,bottom,1.000000,left,bottom
,1.000000,left,top,1.000000,[].concat(AZ,Df),Be,Bd,Bb,A_,aBlend,true);}},EJ:function(
P){var A;if(((this.Uc&&!!this.R)&&(this.R.FrameSize[0]>0))&&(this.R.FrameSize[1]>
0))this.H(this.Kc());if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.S);},DS:function(
P){var A;var Cn=this.Cq;var EK=0;if(!!this.R)EK=this.R.NoOfFrames*this.R.FrameDelay;
if((!!this.timer&&(this.Cq<0))&&(EK>0))this.BE=this.timer.AV-(this.GT*this.R.FrameDelay
);if(!!this.timer&&(EK>0)){var AC=(this.timer.AV-this.BE)|0;Cn=(AC/this.R.FrameDelay
)|0;if(AC>=EK){Cn=Cn%this.R.NoOfFrames;this.BE=this.timer.AV-(AC%EK);}}if(((Cn!==
this.Cq)&&!!this.L)&&((this.M&0x1)===0x1))this.L.As(this.S);this.Cq=Cn;if(!EK&&!
!this.timer){B.sY([this,this.DS],this.timer,0);this.timer=null;}},IF:function(E){
var A;if(E===this.Dt)return;this.Dt=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(
this.S);},B1:function(E){if(E===this.Uc)return;this.Uc=E;if(((E&&!!this.R)&&(this.
R.FrameSize[0]>0))&&(this.R.FrameSize[1]>0))this.H(this.Kc());},Aj:function(E){var
A;if(E===this.Bj)return;this.Bj=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.
S);},E5:function(E){var A;if(this.Fk===E)return;this.Fk=E;this.Cq=-1;if(!E&&!!this.
timer){B.sY([this,this.DS],this.timer,0);this.timer=null;}if(E){this.timer=B._GetAutoObject(
B.uX.K_);B.sL([this,this.DS],this.timer,0);B.lz([this,this.DS],this);}if(!!this.
L&&((this.M&0x1)===0x1))this.L.As(this.S);},Au:function(E){var A;if(E===this.Es)
return;this.Es=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.S);},GY:function(
E){var A;if(E<0)E=0;if((E===this.GT)&&(this.Cq===-1))return;this.GT=E;if(!this.timer
)this.Cq=-1;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.S);},Q:function(E){
var A;if(E===this.R)return;if(!!this.R&&this.R.GX)B.sY([this,this.EJ],this.R,0);
this.R=E;this.Cq=-1;if(!!E&&E.GX)B.sL([this,this.EJ],E,0);if(this.Fk){this.E5(false
);this.E5(true);}if(((this.Uc&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.
H(this.Kc());if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.S);},Ll:function(E
){var A;if(E>255)E=255;if(E<0)E=0;if(E===this.HO)return;this.HO=E;if(!!this.L&&((
this.M&0x1)===0x1))this.L.As(this.S);},AU:function(E){if(E)this.Bh(0x400,0x0);else
this.Bh(0x0,0x400);},Ah:function(E){if(E)this.Bh(0x1,0x0);else this.Bh(0x0,0x1);
},Kc:function(){var A;if(!this.R)return Ao;var orient=this.Dt;var A0=this.Es;var
Df=this.R.FrameSize;var Ax=this.S;var width=Ax[2]-Ax[0];var height=Ax[3]-Ax[1];if(
!Df[0]||!Df[1])return Ao;if((orient===1)||(orient===3)){width=height;height=Ax[2
]-Ax[0];}var BP=[0,0,width,height];var Ay=BP;if(((A0&0x40)===0x40)){var AcO=((((
BP[2]-BP[0])<<16)+((Df[0]/2)|0))/Df[0])|0;var TZ=((((BP[3]-BP[1])<<16)+((Df[1]/2
)|0))/Df[1])|0;var Mb=AcO;if(TZ>Mb)Mb=TZ;Ay=B.um(Ay,((Df[0]*Mb)+32768)>>16);Ay=B.
uj(Ay,((Df[1]*Mb)+32768)>>16);}else if(((A0&0x80)===0x80)){var AcO=((((BP[2]-BP[
0])<<16)+((Df[0]/2)|0))/Df[0])|0;var TZ=((((BP[3]-BP[1])<<16)+((Df[1]/2)|0))/Df[
1])|0;var Mb=AcO;if(TZ<Mb)Mb=TZ;Ay=B.um(Ay,((Df[0]*Mb)+32768)>>16);Ay=B.uj(Ay,((
Df[1]*Mb)+32768)>>16);}else if(!((A0&0x100)===0x100))Ay=B.ul(Ay,Df);if((Ay[2]-Ay[
0])!==(BP[2]-BP[0])){if(((A0&0x4)===0x4))Ay=B.un(Ay,BP[2]-(Ay[2]-Ay[0]));else if(((
A0&0x2)===0x2))Ay=B.un(Ay,(BP[0]+(((BP[2]-BP[0])/2)|0))-(((Ay[2]-Ay[0])/2)|0));}
if((Ay[3]-Ay[1])!==(BP[3]-BP[1])){if(((A0&0x20)===0x20))Ay=B.up(Ay,BP[3]-(Ay[3]-
Ay[1]));else if(((A0&0x10)===0x10))Ay=B.up(Ay,(BP[1]+(((BP[3]-BP[1])/2)|0))-(((Ay[
3]-Ay[1])/2)|0));}if(!orient)Ay=B.tX(Ay,Ax.slice(0,2));else if(orient===1){var ND=[
Ax[0]+Ay[1],Ax[3]-Ay[2]];Ay=[].concat(ND,B.tV(ND,[Ay[3]-Ay[1],Ay[2]-Ay[0]]));}else
if(orient===2){var ND=[Ax[2]-Ay[2],Ax[3]-Ay[3]];Ay=[].concat(ND,B.tV(ND,[Ay[2]-Ay[
0],Ay[3]-Ay[1]]));}else if(orient===3){var ND=[Ax[2]-Ay[3],Ax[1]+Ay[0]];Ay=[].concat(
ND,B.tV(ND,[Ay[3]-Ay[1],Ay[2]-Ay[0]]));}return Ay;},_Init:function(aArg){B.Core.
Cf._Init.call(this,aArg);this.__proto__=D.K;},_Mark:function(C){var A;B.Core.Cf.
_Mark.call(this,C);if((A=this.timer)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.
R)&&(A._cycle!=C))A._Mark(A._cycle=C);},_className:"Views::Image"};D.Text={Ek:null
,A8:null,E7:null,AX:B.hr,String:B.hr,EV:null,NN:B.qK,Bq:B.qK,Es:0x12,Bj:0xFFFFFFFF
,Ol:false,K$:false,Xs:false,D1:false,Gm:function(){if(!!this.EV){this.Ab8(this.EV
);this.EV=null;}},E2:function(Bs,aClip,aOffset,AR,aBlend){var A;if((this.AX===B.
hr)||!this.A8)return;var A0=this.Es;var font=this.A8;var BP=B.tX(this.S,aOffset);
var A_;var Be;var Bd;var Bb;var col=this.Bj;var D0=(((AR+1)*255)>>8)+1;var Ea=this.
AX.charCodeAt(0)||0;var X=B.tX(this.Kc(),aOffset);var Er=[BP[0]-X[0],(BP[1]-X[1]
)-font.Ascent];if(Ea<1)return;A_=Be=Bb=Bd=col;if(D0<256){A_=(A_&0x00FFFFFF)|((((((
A_>>24)&0xFF)*D0)>>8)&0xFF)<<24);Be=(Be&0x00FFFFFF)|((((((Be>>24)&0xFF)*D0)>>8)&
0xFF)<<24);Bd=(Bd&0x00FFFFFF)|((((((Bd>>24)&0xFF)*D0)>>8)&0xFF)<<24);Bb=(Bb&0x00FFFFFF
)|((((((Bb>>24)&0xFF)*D0)>>8)&0xFF)<<24);}if(((A0&0x80)===0x80)){if(this.RR())A0=(
A0&~0x80)|0x4;else A0=(A0&~0x80)|0x1;}if((Ea===1)&&!((A0&0x40)===0x40)){Bs.Adb(aClip
,font,this.AX,2,(this.AX.charCodeAt(1)||0)-1,BP,Er,0,0,A_,Be,Bd,Bb,true);return;
}var leading=font.Leading;var Ma=(font.Ascent+font.Descent)+leading;var Al$=aClip[
1]-X[1];var Ama=aClip[3]-X[1];var Ab1=X[2]-X[0];var Ir=0;var Aa=1;var Bi=this.AX.
charCodeAt(1)||0;while(((Ir+Ma)<Al$)&&(Bi>0)){Aa=Aa+Bi;Ir=Ir+Ma;Bi=this.AX.charCodeAt(
Aa)||0;}while((Ir<Ama)&&(Bi>0)){var OW=B.tU(Er,[0,Ir]);var NJ=0;var Ff=false;if(((((
A0&0x40)===0x40)&&((this.AX.charCodeAt((Aa+Bi)-1)||0)!==0x0A))&&((this.AX.charCodeAt(
Aa+1)||0)!==0x0A))&&((this.AX.charCodeAt(Aa+Bi)||0)!==0x00))Ff=true;if(Ff&&!!(A0&
0x6)){var WV=Aa+Bi;var Af4=this.AX.indexOf(String.fromCharCode(0x20),Aa+1);var Af5=
this.AX.indexOf(String.fromCharCode(0xA0),Aa+1);if(((Af4<0)||(Af4>=WV))&&((Af5<0
)||(Af5>=WV)))Ff=false;}if(Ff)NJ=Ab1;else if(((A0&0x4)===0x4))OW=[(OW[0]-Ab1)+font.
La(this.AX,Aa+1,Bi-1),OW[1]];else if(((A0&0x2)===0x2))OW=[(OW[0]-((Ab1/2)|0))+((
font.La(this.AX,Aa+1,Bi-1)/2)|0),OW[1]];Bs.Adb(aClip,font,this.AX,Aa+1,Bi-1,BP,OW
,NJ,0,A_,Be,Bd,Bb,true);Aa=Aa+Bi;Ir=Ir+Ma;Bi=this.AX.charCodeAt(Aa)||0;}},H:function(
E){var A;if(B.tI(E,this.S))return;var Ahc;Ahc=((A=this.S)[2]-A[0])!==(E[2]-E[0]);
if(((Ahc&&this.Ol)&&this.D1)&&!((this.M&0x2000)===0x2000)){this.AX=B.hr;this.D1=
false;B.lz([this,this.NF],this);}if(((this.K$&&this.D1)&&!B.tH([(A=this.S)[2]-A[
0],A[3]-A[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.M&0x2000)===0x2000)){this.AX=B.hr;
this.D1=false;B.lz([this,this.NF],this);}B.Core.Cf.H.call(this,E);B.lz([this,this.
WD],this);},Al7:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=B.sR(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},Al6:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=B.sQ(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},Ab8:function(aBidi){if(!aBidi)return;B.nq(aBidi);},Amc:function(
aSize){var bidi=null;bidi=B.qx(aSize);return bidi;},WD:function(P){B.lz(this.E7,
this);},NF:function(P){B.lz([this,this.L$],this);},Acz:function(P){this.C_(this.
Ek.A9);},AcA:function(P){var A;var X=this.Kc();var L5=this.S.slice(0,2);if(X[0]>
L5[0])X=[].concat(L5[0],X.slice(1,4));if(X[1]>L5[1])X=B.uq(X,L5[1]);var BL=B.tU(
X.slice(0,2),this.S.slice(0,2));var JO=B.tU([(A=this.S)[2]-A[0],A[3]-A[1]],[X[2]-
X[0],X[3]-X[1]]);if(JO[0]>0)JO=[0,JO[1]];if(JO[1]>0)JO=[JO[0],0];this.Ek.A9=this.
Bq;this.Ek.Dj=B.tU(B.tV(this.Bq,JO),BL);this.Ek.Di=B.tU(this.Bq,BL);},L$:function(
P){var A;if(this.D1)return;var width=(A=this.S)[2]-A[0];var height=(A=this.S)[3]-
A[1];var KR=-1;var font=this.A8;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=
null;if(this.Ol){KR=width;if(KR<0)KR=1;}if(!!this.EV){this.Ab8(this.EV);this.EV=
null;}this.D1=true;if((this.String!==B.hr)&&!!font){var length=this.String.length;
if(this.Xs)this.EV=this.Amc(length);this.AX=font.Ajo(this.String,0,KR,length,this.
EV);if(!!this.EV&&!this.Ah3()){this.Ab8(this.EV);this.EV=null;}}else this.AX=B.hr;
this.NN=AZ;if((this.K$&&(this.AX!==B.hr))&&!!font){var A0=this.Es;var leading=font.
Leading;var CO=this.AX;var WY=this.RR();if(((A0&0x80)===0x80)){if(WY)A0=(A0&~0x80
)|0x4;else A0=(A0&~0x80)|0x1;}var WI=(font.Ascent+font.Descent)+leading;var Ea=CO.
charCodeAt(0)||0;var Nu=((height+leading)/WI)|0;var Ab5=false;var Wh=false;if(Nu<=
0)Nu=1;if(Ea>Nu){var B0=0;var TY=0;var WW=Ea-1;var DO;var EG=CO.length;var tmp=B.
hr;if(((A0&0x20)===0x20))TY=Ea-Nu;else if(((A0&0x10)===0x10)){TY=((Ea-Nu)/2)|0;WW=(
TY+Nu)-1;}else WW=Nu-1;Ab5=TY>0;Wh=WW<(Ea-1);for(DO=1;B0<TY;B0=B0+1)DO=DO+(CO.charCodeAt(
DO)||0);if(Wh)for(EG=DO;B0<WW;B0=B0+1)EG=EG+(CO.charCodeAt(EG)||0);if(Ab5){var Dz=
CO.charCodeAt(DO)||0;tmp=(CW+B.uw(CO,DO,Dz))+CW;tmp=B.ur(tmp,0,(Dz+2)&0xFFFF);DO=
DO+Dz;if((tmp.charCodeAt(Dz)||0)===0x0A){tmp=B.ur(tmp,Dz,0xFEFF);tmp=B.ur(tmp,Dz+
1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.ur(tmp,2,0xFEFF);tmp=B.ur(tmp,1
,0x0A);}else tmp=B.ur(tmp,1,0xFEFF);}tmp=tmp+B.uw(CO,DO,EG-DO);if(Wh&&(EG>=DO)){
var Dz=CO.charCodeAt(EG)||0;var FQ=(CW+B.uw(CO,EG,Dz))+CW;FQ=B.ur(FQ,0,(Dz+2)&0xFFFF
);FQ=B.ur(FQ,1,0xFEFF);if((FQ.charCodeAt(Dz)||0)===0x0A){FQ=B.ur(FQ,Dz,0xFEFF);FQ=
B.ur(FQ,Dz+1,0x0A);}if((FQ.charCodeAt(2)||0)===0x0A){FQ=B.ur(FQ,2,0xFEFF);FQ=B.ur(
FQ,1,0x0A);}else FQ=B.ur(FQ,1,0xFEFF);tmp=tmp+FQ;}CO=String.fromCharCode(Nu&0xFFFF
)+tmp;}var B0=0;var Av=1;var Ack=width;Ea=CO.charCodeAt(0)||0;for(;B0<Ea;B0=B0+1
){var NH=Ab5&&!B0;var NI=Wh&&(B0===(Ea-1));var Ie=false;var If=false;var Q9=WY;if((
WY&&NH)&&!NI){NH=false;NI=true;}else if((WY&&NI)&&!NH){NI=false;NH=true;}var Iq=
Av+1;var Dz=CO.charCodeAt(Av)||0;var DO=Iq;var EG=(Iq+Dz)-2;var Acc=-1;var Acd=-
1;if(!this.Ol&&(font.La(CO,Iq,Dz-1)>Ack)){if(((A0&0x4)===0x4))Ie=true;else if(((
A0&0x2)===0x2)){Ie=true;If=true;}else If=true;}if((CO.charCodeAt(DO)||0)===0x0A)
DO=DO+1;if((CO.charCodeAt(EG)||0)===0x0A)EG=EG-1;while(Ie&&((CO.charCodeAt(DO)||
0)===0xFEFF))DO=DO+1;while(If&&((CO.charCodeAt(EG)||0)===0xFEFF))EG=EG-1;Ie=Ie&&
!NI;If=If&&!NH;while((((Ie||If)||NH)||NI)&&(DO<EG)){if((Ie&&(Q9||!If))||NH){if(Acc>
0)CO=B.ur(CO,Acc,0xFEFF);CO=B.ur(CO,DO,0x2026);Acc=DO;DO=DO+1;Q9=!Q9;NH=false;if(
font.La(CO,Iq,Dz-1)<=Ack){Ie=false;If=false;}else Ie=Ie||!If;}if((If&&(!Q9||!Ie)
)||NI){if(Acd>0)CO=B.ur(CO,Acd,0xFEFF);CO=B.ur(CO,EG,0x2026);Acd=EG;EG=EG-1;Q9=!
Q9;NI=false;if(font.La(CO,Iq,Dz-1)<=Ack){Ie=false;If=false;}else If=If||!Ie;}}Av=
Av+Dz;}this.NN=[font.Adh(CO),((CO.charCodeAt(0)||0)*WI)-leading];this.AX=CO;}if(
!!this.L&&((this.M&0x1)===0x1))this.L.As(this.S);B.lz([this,this.WD],this);},Aee:
function(E){if(E===this.Xs)return;this.Xs=E;this.AX=B.hr;this.D1=false;B.lz([this
,this.NF],this);},Aed:function(E){if(E===this.K$)return;this.K$=E;if((this.Ol||E
)||!!this.E7)this.M=this.M&~0x100;else this.M=this.M|0x100;this.AX=B.hr;this.D1=
false;B.lz([this,this.NF],this);},Ai3:function(E){if(B.tK(E,this.E7))return;this.
E7=E;if((this.Ol||!!E)||this.K$)this.M=this.M&~0x100;else this.M=this.M|0x100;},
Zx:function(E){if(E===this.Ek)return;if(!!E&&!!E.L9){B.uF("%s%$%*%s",Fz,E,He);throw new
Error(Cw);}if(!!this.Ek){this.Ek.Q8=null;this.Ek.L9=null;}this.Ek=E;if(!!E){E.Q8=[
this,this.AcA];E.L9=[this,this.Acz];}},ZG:function(E){if(E===this.Ol)return;this.
Ol=E;if(this.D1){this.AX=B.hr;this.D1=false;B.lz([this,this.NF],this);}if((E||this.
K$)||!!this.E7)this.M=this.M&~0x100;else this.M=this.M|0x100;},C_:function(E){var
A;if(B.tH(E,this.Bq))return;this.Bq=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(
this.S);if(this.D1)B.lz([this,this.WD],this);},Au:function(E){var A;if(E===this.
Es)return;this.Es=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.S);if(this.
K$){this.AX=B.hr;this.D1=false;B.lz([this,this.NF],this);}if(this.D1)B.lz([this,
this.WD],this);},V:function(E){if(E===this.String)return;this.String=E;this.AX=B.
hr;this.D1=false;B.lz([this,this.NF],this);},Af:function(E){if(E===this.A8)return;
this.A8=E;this.AX=B.hr;this.D1=false;B.lz([this,this.NF],this);},Aj:function(E){
var A;if(E===this.Bj)return;this.Bj=E;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(
this.S);},AU:function(E){if(E)this.Bh(0x400,0x0);else this.Bh(0x0,0x400);},Ah:function(
E){if(E)this.Bh(0x1,0x0);else this.Bh(0x0,0x1);},RR:function(){if(!this.D1)this.
L$(this);if(!this.EV)return false;var result=false;var bidi=this.EV;result=B.qw(
bidi);return result;},Ah3:function(){if(!this.D1)this.L$(this);if(!this.EV)return false;
var result=false;var bidi=this.EV;result=B.sP(bidi);return result;},Afz:function(
aIndex){if(((this.String===B.hr)||!this.A8)||this.K$)return AZ;if(!this.D1)this.
L$(this);if(aIndex<0)aIndex=0;var Aml=(this.AX.charCodeAt(0)||0)-1;var Ec=this.AX.
charCodeAt(1)||0;var Av=1;var Mf=2;var B0=0;var col=-1;var EW=true;aIndex=aIndex+
2;while((B0<Aml)&&((Av+Ec)<=aIndex)){Av=Av+Ec;B0=B0+1;Mf=Mf+1;aIndex=aIndex+1;Ec=
this.AX.charCodeAt(Av)||0;}if(aIndex>(Av+Ec))aIndex=Av+Ec;if(!!this.EV)aIndex=(Av+
this.Al6(this.EV,(Av+1)-Mf,(Av+Ec)-Mf,(aIndex-Av)-1))+1;for(;aIndex>Av;Av=Av+1){
var Dw=this.AX.charCodeAt(Av+1)||0;if(EW)col=col+1;EW=(Dw!==0xFEFF)&&(Dw!==0x0A);
}return[col,B0];},Sg:function(Tl){if(((this.String===B.hr)||!this.A8)||this.K$)return 0;
if(!this.D1)this.L$(this);var B0=Tl[1];var col=Tl[0];var Av=1;var Mf=2;var Ea=this.
AX.charCodeAt(0)||0;var Ec=this.AX.charCodeAt(1)||0;if(B0>=Ea){B0=Ea-1;col=this.
AX.length;}if(B0<0){B0=0;col=0;}if(col<0)col=0;while((B0>0)&&(Ec>0)){Av=Av+Ec;B0=
B0-1;Mf=Mf+1;Ec=this.AX.charCodeAt(Av)||0;}var Ij=Av;var WX=(Av-Mf)+1;var WV=(WX+
Ec)-1;var TS=false;while((col>=0)&&(Ec>1)){var Dw=this.AX.charCodeAt(Av+1)||0;Av=
Av+1;Ec=Ec-1;TS=(Dw===0xFEFF)||(Dw===0x0A);if(!TS){col=col-1;Ij=Av;}}if((!TS&&(col>=
0))&&((this.AX.charCodeAt(Av+1)||0)===0x00))TS=true;if(TS)Ij=Ij+1;Ij=Ij-Mf;if(!!
this.EV)Ij=WX+this.Al7(this.EV,WX,WV,Ij-WX);return Ij;},Vh:function(EE){var A;if((
this.String===B.hr)||!this.A8)return AZ;if(!this.D1)this.L$(this);var X=this.Kc(
);if((X[0]>=X[2])||(X[1]>=X[3]))return AZ;var font=this.A8;var A0=this.Es;var Ea=
this.AX.charCodeAt(0)||0;var leading=font.Leading;if(EE[1]<X[1])EE=[EE[0],X[1]];
if(EE[1]>=X[3])EE=[EE[0],X[3]-1];var Ma=(font.Ascent+font.Descent)+leading;var B0=((
EE[1]-X[1])/Ma)|0;var EL=this.XP(B0);var Ec=EL.length;var Ff=false;if(((A0&0x80)===
0x80)){if(this.RR())A0=(A0&~0x80)|0x4;else A0=(A0&~0x80)|0x1;}if(((A0&0x40)===0x40
)&&(B0<(Ea-1)))Ff=true;if((Ff&&(EL.indexOf(String.fromCharCode(0x20),0)<0))&&(EL.
indexOf(String.fromCharCode(0xA0),0)<0))Ff=false;if(Ff){var Av=1;var O5=B0;while(
O5>0){Av=Av+(this.AX.charCodeAt(Av)||0);O5=O5-1;}if(((this.AX.charCodeAt(Av+1)||
0)===0x0A)||((this.AX.charCodeAt((Av+(this.AX.charCodeAt(Av)||0))-1)||0)===0x0A)
)Ff=false;}var NJ=0;var GI=0;if(Ff)NJ=X[2]-X[0];else if(((A0&0x4)===0x4))GI=(X[2
]-X[0])-font.La(EL,0,Ec);else if(((A0&0x2)===0x2))GI=(((X[2]-X[0])/2)|0)-((font.
La(EL,0,Ec)/2)|0);var col=font.Ah0(EL,0,Ec,(EE[0]-X[0])-GI,NJ);if(col<0)col=0;return[
col,B0];},Z1:function(Tl){var A;if((this.String===B.hr)||!this.A8)return AZ;if(!
this.D1)this.L$(this);var Ea=this.AX.charCodeAt(0)||0;var font=this.A8;var A0=this.
Es;var B0=Tl[1];var col=Tl[0];if(B0>=Ea){B0=Ea-1;col=this.AX.length;}if(B0<0){B0=
0;col=0;}var EL=this.XP(B0);var Ec=EL.length;var X=this.Kc();var Ff=false;var leading=
font.Leading;if(((A0&0x80)===0x80)){if(this.RR())A0=(A0&~0x80)|0x4;else A0=(A0&~
0x80)|0x1;}if(((A0&0x40)===0x40)&&(B0<(Ea-1)))Ff=true;if((Ff&&(EL.indexOf(String.
fromCharCode(0x20),0)<0))&&(EL.indexOf(String.fromCharCode(0xA0),0)<0))Ff=false;
if(Ff){var Av=1;var O5=B0;while(O5>0){Av=Av+(this.AX.charCodeAt(Av)||0);O5=O5-1;
}if(((this.AX.charCodeAt(Av+1)||0)===0x0A)||((this.AX.charCodeAt((Av+(this.AX.charCodeAt(
Av)||0))-1)||0)===0x0A))Ff=false;}var Ir=(X[1]+(B0*((font.Ascent+font.Descent)+leading
)))+font.Ascent;var NJ=0;var GI=X[0];if(Ff)NJ=X[2]-X[0];else if(((A0&0x4)===0x4)
)GI=X[2]-font.La(EL,0,Ec);else if(((A0&0x2)===0x2))GI=(GI+(((X[2]-X[0])/2)|0))-((
font.La(EL,0,Ec)/2)|0);var pos=font.AhZ(EL,0,Ec,col,NJ);if(pos<0)pos=0;return[GI+
pos,Ir];},XP:function(Tk){if((this.String===B.hr)||!this.A8)return B.hr;if(!this.
D1)this.L$(this);var Ea=this.AX.charCodeAt(0)||0;var Av=1;if((!this.A8||(Tk<0))||(
Tk>=Ea))return B.hr;while(Tk>0){Av=Av+(this.AX.charCodeAt(Av)||0);Tk=Tk-1;}var Iq=
Av;var QV=Av+(this.AX.charCodeAt(Av)||0);var Dw=0x00;do{Iq=Iq+1;Dw=this.AX.charCodeAt(
Iq)||0;}while(((Dw===0xFEFF)||(Dw===0x0A))&&(Iq<=QV));do{QV=QV-1;Dw=this.AX.charCodeAt(
QV)||0;}while(((Dw===0xFEFF)||(Dw===0x0A))&&(Iq<=QV));var EL=B.uw(this.AX,Iq,(QV-
Iq)+1);var OS;for(OS=EL.indexOf(String.fromCharCode(0xFEFF),0);OS>=0;OS=EL.indexOf(
String.fromCharCode(0xFEFF),OS+1)){var Ij=OS+1;while((EL.charCodeAt(Ij)||0)===0xFEFF
)Ij=Ij+1;EL=B.uB(EL,OS,Ij-OS);}return EL;},Kc:function(){var A;if((this.String===
B.hr)||!this.A8)return Ao;if(!this.D1)this.L$(this);if(this.AX===B.hr)return Ao;
var leading=this.A8.Leading;var WI=(this.A8.Ascent+this.A8.Descent)+this.A8.Leading;
if(B.tH(this.NN,AZ))this.NN=[this.A8.Adh(this.AX),this.NN[1]];this.NN=[this.NN[0
],((this.AX.charCodeAt(0)||0)*WI)-leading];var A0=this.Es;var Ax=this.S;var width=
Ax[2]-Ax[0];var height=Ax[3]-Ax[1];var BP=[0,0,width,height];var Ay=[].concat(BP.
slice(0,2),B.tV(BP.slice(0,2),this.NN));if(((A0&0x80)===0x80)){if(this.RR())A0=(
A0&~0x80)|0x4;else A0=(A0&~0x80)|0x1;}if(((A0&0x40)===0x40)){var KR;KR=width;if(
KR<0)KR=0;if(KR>(Ay[2]-Ay[0]))Ay=B.um(Ay,KR);}if((Ay[2]-Ay[0])!==(BP[2]-BP[0])){
if(((A0&0x4)===0x4))Ay=B.un(Ay,BP[2]-(Ay[2]-Ay[0]));else if(((A0&0x2)===0x2))Ay=
B.un(Ay,(BP[0]+(((BP[2]-BP[0])/2)|0))-(((Ay[2]-Ay[0])/2)|0));}if((Ay[3]-Ay[1])!==(
BP[3]-BP[1])){if(((A0&0x20)===0x20))Ay=B.up(Ay,BP[3]-(Ay[3]-Ay[1]));else if(((A0&
0x10)===0x10))Ay=B.up(Ay,(BP[1]+(((BP[3]-BP[1])/2)|0))-(((Ay[3]-Ay[1])/2)|0));}Ay=
B.tX(Ay,Ax.slice(0,2));return B.tX(Ay,this.Bq);},_Init:function(aArg){B.Core.Cf.
_Init.call(this,aArg);this.__proto__=D.Text;},_Done:function(){this.Gm();this.__proto__=
B.Core.Cf;B.Core.Cf._Done.call(this);},_Mark:function(C){var A;B.Core.Cf._Mark.call(
this,C);if((A=this.Ek)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.A8)&&(A._cycle
!=C))A._Mark(A._cycle=C);if((A=this.E7)&&((A=A[0])._cycle!=C))A._Mark(A._cycle=C
);},_className:"Views::Text"};D.H6={Bg:null,LU:0,LT:0,DX:B.qK,Ag:B.tY(4,3,0,null
),Sj:B.qK,Jn:B.qL,D$:0,Hp:0,Vj:true,E6:function(E){if(B.tH(E,this.C$))return;B.Core.
II.E6.call(this,E);this.Ag.Set(3,0,E[0]);this.Ag.Set(3,1,E[1]);this.Ag.Set(3,2,1.000000
);this.D$=0x45;this.Bg=null;B.lz([this,this.Nn],this);},EQ:function(E){if(B.tH(E
,this.DJ))return;B.Core.II.EQ.call(this,E);this.Ag.Set(2,0,E[0]);this.Ag.Set(2,1
,E[1]);this.Ag.Set(2,2,1.000000);this.D$=0x45;this.Bg=null;B.lz([this,this.Nn],this
);},AP:function(E){if(B.tH(E,this.BG))return;B.Core.II.AP.call(this,E);this.Ag.Set(
1,0,E[0]);this.Ag.Set(1,1,E[1]);this.Ag.Set(1,2,1.000000);this.D$=0x45;this.Bg=null;
B.lz([this,this.Nn],this);},AS:function(E){if(B.tH(E,this.BF))return;B.Core.II.AS.
call(this,E);this.Ag.Set(0,0,E[0]);this.Ag.Set(0,1,E[1]);this.Ag.Set(0,2,1.000000
);this.D$=0x45;this.Bg=null;B.lz([this,this.Nn],this);},Wg:function(){return;},AcU:
function(P){var A;if(this.D$===0x00)return;if(this.D$===0x45){var EI=B._NewObject(
B.Graphics.SC,0);EI=EI.AhI(this.Ag.Get(0,0),this.Ag.Get(0,1),this.Ag.Get(1,0),this.
Ag.Get(1,1),this.Ag.Get(2,0),this.Ag.Get(2,1),this.Ag.Get(3,0),this.Ag.Get(3,1));
if(!!EI){EI.Ud(0.000000,0.000000);this.Ag.Set(0,2,EI.Hd*240.000000);EI.Ud(1.000000
,0.000000);this.Ag.Set(1,2,EI.Hd*240.000000);EI.Ud(1.000000,1.000000);this.Ag.Set(
2,2,EI.Hd*240.000000);EI.Ud(0.000000,1.000000);this.Ag.Set(3,2,EI.Hd*240.000000);
}this.Wg();}if((((this.D$===0x4D)&&!!this.Bg)&&!!this.DX[0])&&!!this.DX[1]){var Hs=
B.tF(this.Jn,[].concat(AZ,this.DX));var Hr=this.Sj;var Nt=Hs[0]-Hr[0];var Ac=Hs[
2]-Hr[0];var Dg=Hs[1]-Hr[1];var Id=Hs[3]-Hr[1];this.Bg.MY(Nt,Dg);this.Ag.Set(0,0
,this.Bg.LD+this.LT);this.Ag.Set(0,1,this.Bg.LE+this.LU);this.Ag.Set(0,2,this.Bg.
Hd);this.Bg.MY(Ac,Dg);this.Ag.Set(1,0,this.Bg.LD+this.LT);this.Ag.Set(1,1,this.Bg.
LE+this.LU);this.Ag.Set(1,2,this.Bg.Hd);this.Bg.MY(Ac,Id);this.Ag.Set(2,0,this.Bg.
LD+this.LT);this.Ag.Set(2,1,this.Bg.LE+this.LU);this.Ag.Set(2,2,this.Bg.Hd);this.
Bg.MY(Nt,Id);this.Ag.Set(3,0,this.Bg.LD+this.LT);this.Ag.Set(3,1,this.Bg.LE+this.
LU);this.Ag.Set(3,2,this.Bg.Hd);if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.
GetExtent());this.BF=[(this.Ag.Get(0,0)+0.500000)|0,(this.Ag.Get(0,1)+0.500000)|
0];this.BG=[(this.Ag.Get(1,0)+0.500000)|0,(this.Ag.Get(1,1)+0.500000)|0];this.DJ=[(
this.Ag.Get(2,0)+0.500000)|0,(this.Ag.Get(2,1)+0.500000)|0];this.C$=[(this.Ag.Get(
3,0)+0.500000)|0,(this.Ag.Get(3,1)+0.500000)|0];this.Wg();}this.Hp=this.D$;this.
D$=0x00;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent());},Nn:function(
DB){this.AcU(DB);},Ai4:function(E){var A;if(E===this.Vj)return;this.Vj=E;if(!!this.
L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent());},N6:function(E){if(B.tH(E,this.
Sj))return;this.Sj=E;if((this.Hp!==0x45)&&(this.D$===0x00)){this.D$=this.Hp;B.lz([
this,this.Nn],this);}},AeC:function(E){var A;if(B.tI(E,this.Jn))return;this.Jn=E;
if((((this.Hp===0x45)&&(this.D$===0x00))&&!!this.L)&&((this.M&0x1)===0x1))this.L.
As(this.GetExtent());if((this.Hp!==0x45)&&(this.D$===0x00)){this.D$=this.Hp;B.lz([
this,this.Nn],this);}},VK:function(LJ,DN){var A;if(!DN)throw new Error(H_);if(!this.
Bg)this.Bg=B._NewObject(B.Graphics.SC,0);this.Bg.Ahx(DN);this.LT=LJ[0];this.LU=LJ[
1];this.Hp=0x4D;this.D$=0x00;if(!this.DX[0]||!this.DX[1])return;var Hs=B.tF(this.
Jn,[].concat(AZ,this.DX));var Hr=this.Sj;var Nt=Hs[0]-Hr[0];var Ac=Hs[2]-Hr[0];var
Dg=Hs[1]-Hr[1];var Id=Hs[3]-Hr[1];this.Bg.MY(Nt,Dg);this.Ag.Set(0,0,this.Bg.LD+this.
LT);this.Ag.Set(0,1,this.Bg.LE+this.LU);this.Ag.Set(0,2,this.Bg.Hd);this.Bg.MY(Ac
,Dg);this.Ag.Set(1,0,this.Bg.LD+this.LT);this.Ag.Set(1,1,this.Bg.LE+this.LU);this.
Ag.Set(1,2,this.Bg.Hd);this.Bg.MY(Ac,Id);this.Ag.Set(2,0,this.Bg.LD+this.LT);this.
Ag.Set(2,1,this.Bg.LE+this.LU);this.Ag.Set(2,2,this.Bg.Hd);this.Bg.MY(Nt,Id);this.
Ag.Set(3,0,this.Bg.LD+this.LT);this.Ag.Set(3,1,this.Bg.LE+this.LU);this.Ag.Set(3
,2,this.Bg.Hd);if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent());this.
BF=[(this.Ag.Get(0,0)+0.500000)|0,(this.Ag.Get(0,1)+0.500000)|0];this.BG=[(this.
Ag.Get(1,0)+0.500000)|0,(this.Ag.Get(1,1)+0.500000)|0];this.DJ=[(this.Ag.Get(2,0
)+0.500000)|0,(this.Ag.Get(2,1)+0.500000)|0];this.C$=[(this.Ag.Get(3,0)+0.500000
)|0,(this.Ag.Get(3,1)+0.500000)|0];if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.
GetExtent());this.Wg();},Ft:function(LJ,VS,VZ,V0){var A;if(!this.DX[0]||!this.DX[
1])return;var Hs=B.tF(this.Jn,[].concat(AZ,this.DX));var Hr=this.Sj;var Nt=(Hs[0
]-Hr[0])*VZ;var Ac=(Hs[2]-Hr[0])*VZ;var Dg=(Hs[1]-Hr[1])*V0;var Id=(Hs[3]-Hr[1])
*V0;var Wi=Math.cos(VS*B.iq);var W2=Math.sin(VS*B.iq);var Agy=Nt*Wi;var Agz=Nt*W2;
var Ag$=Ac*Wi;var Aha=Ac*W2;var Ahf=Dg*Wi;var Ahg=Dg*W2;var Af1=Id*Wi;var Af2=Id
*W2;var QS=LJ[0];var Wm=LJ[1];this.Ag.Set(0,0,(QS+Agy)+Ahg);this.Ag.Set(0,1,(Wm-
Agz)+Ahf);this.Ag.Set(1,0,(QS+Ag$)+Ahg);this.Ag.Set(1,1,(Wm-Aha)+Ahf);this.Ag.Set(
2,0,(QS+Ag$)+Af2);this.Ag.Set(2,1,(Wm-Aha)+Af1);this.Ag.Set(3,0,(QS+Agy)+Af2);this.
Ag.Set(3,1,(Wm-Agz)+Af1);this.Ag.Set(0,2,1.000000);this.Ag.Set(1,2,1.000000);this.
Ag.Set(2,2,1.000000);this.Ag.Set(3,2,1.000000);if(!!this.L&&((this.M&0x1)===0x1)
)this.L.As(this.GetExtent());this.BF=[(this.Ag.Get(0,0)+0.500000)|0,(this.Ag.Get(
0,1)+0.500000)|0];this.BG=[(this.Ag.Get(1,0)+0.500000)|0,(this.Ag.Get(1,1)+0.500000
)|0];this.DJ=[(this.Ag.Get(2,0)+0.500000)|0,(this.Ag.Get(2,1)+0.500000)|0];this.
C$=[(this.Ag.Get(3,0)+0.500000)|0,(this.Ag.Get(3,1)+0.500000)|0];this.Hp=0x45;this.
D$=0x00;this.Bg=null;if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent(
));this.Wg();},_Init:function(aArg){B.Core.II._Init.call(this,aArg);(this.Ag=[]).
__proto__=D.H6.Ag;this.__proto__=D.H6;this.M=0x3;},_Mark:function(C){var A;B.Core.
II._Mark.call(this,C);if((A=this.Bg)&&(A._cycle!=C))A._Mark(A._cycle=C);},_className:
"Views::WarpView"};D.VL={timer:null,R:null,BE:0,Cq:0,Bj:0xFFFFFFFF,GT:0,Fk:false
,E2:function(Bs,aClip,aOffset,AR,aBlend){var A;var Cn=this.GT;if(this.Cq>=0)Cn=this.
Cq;if(!this.R||(Cn>=this.R.NoOfFrames))return;this.R.Update();var Hi;var Hj;var OB;
var OC;var Bi=this.Bj;var D0=(((AR+1)*255)>>8)+1;var FH=aOffset[0];var FI=aOffset[
1];var X=B.tF(this.Jn,[].concat(AZ,this.DX));aBlend=aBlend&&((this.M&0x2)===0x2);
Hi=Hj=OB=OC=Bi;if(D0<256){Hi=(Hi&0x00FFFFFF)|((((((Hi>>24)&0xFF)*D0)>>8)&0xFF)<<
24);Hj=(Hj&0x00FFFFFF)|((((((Hj>>24)&0xFF)*D0)>>8)&0xFF)<<24);OB=(OB&0x00FFFFFF)|((((((
OB>>24)&0xFF)*D0)>>8)&0xFF)<<24);OC=(OC&0x00FFFFFF)|((((((OC>>24)&0xFF)*D0)>>8)&
0xFF)<<24);}aClip=B.tF(aClip,B.tX(Ao,aOffset));Bs.SB(aClip,this.R,Cn,this.Ag.Get(
0,0)+FH,this.Ag.Get(0,1)+FI,this.Ag.Get(0,2),this.Ag.Get(1,0)+FH,this.Ag.Get(1,1
)+FI,this.Ag.Get(1,2),this.Ag.Get(2,0)+FH,this.Ag.Get(2,1)+FI,this.Ag.Get(2,2),this.
Ag.Get(3,0)+FH,this.Ag.Get(3,1)+FI,this.Ag.Get(3,2),X,Hi,Hj,OB,OC,aBlend,this.Vj
);},EJ:function(P){var A;var TN=this.DX;if(!!this.R)this.DX=this.R.FrameSize;else
this.DX=AZ;if(((B.tH(TN,this.DX)||((this.Hp===0x45)&&(this.D$===0x00)))&&!!this.
L)&&((this.M&0x1)===0x1))this.L.As(this.GetExtent());if(((this.Hp!==0x45)&&(this.
D$===0x00))&&!B.tH(TN,this.DX)){this.D$=this.Hp;B.lz([this,this.Nn],this);}},DS:
function(P){var A;var Cn=this.Cq;var EK=0;if(!!this.R)EK=this.R.NoOfFrames*this.
R.FrameDelay;if((!!this.timer&&(this.Cq<0))&&(EK>0))this.BE=this.timer.AV-(this.
GT*this.R.FrameDelay);if(!!this.timer&&(EK>0)){var AC=(this.timer.AV-this.BE)|0;
Cn=(AC/this.R.FrameDelay)|0;if(AC>=EK){Cn=Cn%this.R.NoOfFrames;this.BE=this.timer.
AV-(AC%EK);}}if(((Cn!==this.Cq)&&!!this.L)&&((this.M&0x1)===0x1))this.L.As(this.
GetExtent());this.Cq=Cn;if(!EK&&!!this.timer){B.sY([this,this.DS],this.timer,0);
this.timer=null;}},E5:function(E){var A;if(this.Fk===E)return;this.Fk=E;this.Cq=-
1;if(!E&&!!this.timer){B.sY([this,this.DS],this.timer,0);this.timer=null;}if(E){
this.timer=B._GetAutoObject(B.uX.K_);B.sL([this,this.DS],this.timer,0);B.lz([this
,this.DS],this);}if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent());}
,Aj:function(E){var A;if(E===this.Bj)return;this.Bj=E;if(!!this.L&&((this.M&0x1)===
0x1))this.L.As(this.GetExtent());},GY:function(E){var A;if(E<0)E=0;if((E===this.
GT)&&(this.Cq===-1))return;this.GT=E;if(!this.timer)this.Cq=-1;if(!!this.L&&((this.
M&0x1)===0x1))this.L.As(this.GetExtent());},Q:function(E){if(E===this.R)return;if(
!!this.R&&this.R.GX)B.sY([this,this.EJ],this.R,0);this.R=E;this.Cq=-1;if(!!E&&E.
GX)B.sL([this,this.EJ],E,0);if(this.Fk){this.E5(false);this.E5(true);}this.EJ(this
);},_Init:function(aArg){D.H6._Init.call(this,aArg);this.__proto__=D.VL;},_Mark:
function(C){var A;D.H6._Mark.call(this,C);if((A=this.timer)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.R)&&(A._cycle!=C))A._Mark(A._cycle=C);},_className:"Views::WarpImage"
};D.DW={BK:null,bitmap:null,J:null,Agk:1.000000,Agl:0,Agm:0,Agn:0,Ago:1.000000,Agp:
0,Agq:0,Agr:0,Ags:1.000000,HO:255,Ty:false,E2:function(Bs,aClip,aOffset,AR,aBlend
){var A;if(!this.bitmap)return;this.bitmap.Update();var FH=aOffset[0];var FI=aOffset[
1];var X=B.tF(this.Jn,[].concat(AZ,this.DX));aBlend=aBlend&&((this.M&0x2)===0x2);
AR=AR+1;var AgF;var AgG;var AgH;var AgI;var AmF=this.HO;AgF=AgG=AgH=AgI=AmF;var Hi=
255|(255<<8)|(255<<16)|((((AR*AgF)>>8)&0xFF)<<24);var Hj=255|(255<<8)|(255<<16)|((((
AR*AgG)>>8)&0xFF)<<24);var OB=255|(255<<8)|(255<<16)|((((AR*AgH)>>8)&0xFF)<<24);
var OC=255|(255<<8)|(255<<16)|((((AR*AgI)>>8)&0xFF)<<24);aClip=B.tF(aClip,B.tX(Ao
,aOffset));Bs.SB(aClip,this.bitmap,0,this.Ag.Get(0,0)+FH,this.Ag.Get(0,1)+FI,this.
Ag.Get(0,2),this.Ag.Get(1,0)+FH,this.Ag.Get(1,1)+FI,this.Ag.Get(1,2),this.Ag.Get(
2,0)+FH,this.Ag.Get(2,1)+FI,this.Ag.Get(2,2),this.Ag.Get(3,0)+FH,this.Ag.Get(3,1
)+FI,this.Ag.Get(3,2),X,Hi,Hj,OB,OC,aBlend,this.Vj);},C7:function(AW){if(!this.J||
!this.BK)return null;var AF=(B.Core.Pp.isPrototypeOf(AW)?AW:null);var BV=(B.Core.
Ps.isPrototypeOf(AW)?AW:null);if(!AF&&!BV)return null;var BL=AZ;var AG=this.BK.L;
while(!!AG&&(AG!==this.J)){BL=B.tU(BL,AG.S.slice(0,2));AG=AG.L;}var Ab=this.BK;if(
!!AF&&!AF.Down)this.BK=null;if(!!AF){AF.DE=B.tV(this.Q1(AF.DE),BL);AF.Ev=B.tV(this.
Q1(AF.Ev),BL);return Ab.C7(AF);}if(!!BV){var AmI=B.tV(this.Q1(B.tU(BV.DE,BV.A9))
,BL);BV.DE=B.tV(this.Q1(BV.DE),BL);BV.Ev=B.tV(this.Q1(BV.Ev),BL);BV.A9=B.tU(BV.DE
,AmI);return Ab.C7(BV);}return D.H6.C7.call(this,AW);},K7:function(A5,Aq,EU,JA,KJ
){var A;if(!this.J||!((this.J.M&0x18)===0x18))return null;var pos=B.ts(A5);pos=this.
Q1(pos);var Ht=B.tF(this.Jn,[].concat(AZ,this.DX));if(!B.qH(Ht,pos))return null;
var Gc=this.J.K7(B.tX(B.tX([0,0,A5[2]-A5[0],A5[3]-A5[1]],pos),this.J.S.slice(0,2
)),Aq,EU,JA,KJ);if(!!Gc)this.BK=Gc.Bo;else this.BK=null;if(!!this.BK)return B._NewObject(
B.Core.Rt,0).Initialize(this,AZ);return null;},AcU:function(P){D.H6.AcU.call(this
,P);this.Ty=false;},VK:function(LJ,DN){D.H6.VK.call(this,LJ,DN);this.Ty=false;},
Ft:function(LJ,VS,VZ,V0){D.H6.Ft.call(this,LJ,VS,VZ,V0);this.Ty=false;},AnA:function(
){var x1=this.Ag.Get(0,0);var y1=this.Ag.Get(0,1);var x2=this.Ag.Get(1,0);var y2=
this.Ag.Get(1,1);var x3=this.Ag.Get(2,0);var y3=this.Ag.Get(2,1);var x4=this.Ag.
Get(3,0);var y4=this.Ag.Get(3,1);var Tq=x2-x3;var Ts=y2-y3;var Tr=x4-x3;var Tt=y4-
y3;var T4=((x1-x2)+x3)-x4;var T5=((y1-y2)+y3)-y4;var OG=(Tq*Tt)-(Ts*Tr);if(OG===
0.000000)return;var QY=((T4*Tt)-(T5*Tr))/OG;var AD=((Tq*T5)-(Ts*T4))/OG;var VR=(
x2-x1)+(QY*x2);var Id=(x4-x1)+(AD*x4);var Bi=x1;var D8=(y2-y1)+(QY*y2);var Wn=(y4-
y1)+(AD*y4);var De=y1;this.Agk=Wn-(De*AD);this.Agl=(Bi*AD)-Id;this.Agm=(Id*De)-(
Bi*Wn);this.Agn=(De*QY)-D8;this.Ago=VR-(Bi*QY);this.Agp=(Bi*D8)-(VR*De);this.Agq=(
D8*AD)-(Wn*QY);this.Agr=(Id*QY)-(VR*AD);this.Ags=(VR*Wn)-(Id*D8);this.Ty=true;},
Q1:function(Dv){var A;if(!this.Ty)this.AnA();var AcX=Dv[0];var AcY=Dv[1];var T$=((
AcX*this.Agk)+(AcY*this.Agl))+this.Agm;var Ua=((AcX*this.Agn)+(AcY*this.Ago))+this.
Agp;var AcH=((AcX*this.Agq)+(AcY*this.Agr))+this.Ags;if(AcH!==0.000000){T$=T$/AcH;
Ua=Ua/AcH;}var Ht=B.tF(this.Jn,[].concat(AZ,this.DX));T$=T$*(Ht[2]-Ht[0]);Ua=Ua*(
Ht[3]-Ht[1]);return B.tV([T$|0,Ua|0],Ht.slice(0,2));},EJ:function(P){var A;var TN=
this.DX;if(!!this.J)this.bitmap=this.J.CM;else this.bitmap=null;if(!!this.bitmap
)this.DX=this.bitmap.FrameSize;else this.DX=AZ;if(((B.tH(TN,this.DX)||((this.Hp===
0x45)&&(this.D$===0x00)))&&!!this.L)&&((this.M&0x1)===0x1))this.L.As(this.GetExtent(
));if(((this.Hp!==0x45)&&(this.D$===0x00))&&!B.tH(TN,this.DX)){this.D$=this.Hp;B.
lz([this,this.Nn],this);}},Ll:function(E){var A;if(E===this.HO)return;this.HO=E;
if(!!this.L&&((this.M&0x1)===0x1))this.L.As(this.GetExtent());},PY:function(E){if(
E===this.J)return;if(!!E&&(E===this.L))throw new Error(Hf);if(!!this.J){B.sY([this
,this.EJ],this.J,0);this.bitmap=null;}this.J=E;if(!!E){B.sL([this,this.EJ],E,0);
this.bitmap=E.CM;}this.EJ(this);},_Init:function(aArg){D.H6._Init.call(this,aArg
);this.__proto__=D.DW;},_Mark:function(C){var A;D.H6._Mark.call(this,C);if((A=this.
BK)&&(A._cycle!=C))A._Mark(A._cycle=C);if((A=this.bitmap)&&(A._cycle!=C))A._Mark(
A._cycle=C);if((A=this.J)&&(A._cycle!=C))A._Mark(A._cycle=C);},_className:"Views::WarpGroup"
};D.Mx={Ez:null,Ui:0xFFFFFFFF,Uj:0xFFFFFFFF,Um:0xFFFFFFFF,Ul:0xFFFFFFFF,Bj:0xFFFFFFFF
,A9:B.qK,UA:0,Gm:function(){this.Amf();},E2:function(Bs,aClip,aOffset,AR,aBlend){
if(!this.Ez)return;var A_=this.Ul;var Be=this.Um;var Bb=this.Ui;var Bd=this.Uj;var
Bi=this.Bj;AR=AR+1;if((((A_===Be)&&(Bb===Bd))&&(A_===Bb))&&(A_===0xFFFFFFFF))A_=
Be=Bb=Bd=Bi;else if(Bi!==0xFFFFFFFF){A_=(A_&0x00FFFFFF)|((((((A_>>24)&0xFF)*(((Bi>>
24)&0xFF)+1))>>8)&0xFF)<<24);A_=(A_&0xFFFFFF00)|((((A_&0xFF)*((Bi&0xFF)+1))>>8)&
0xFF);A_=(A_&0xFFFF00FF)|((((((A_>>8)&0xFF)*(((Bi>>8)&0xFF)+1))>>8)&0xFF)<<8);A_=(
A_&0xFF00FFFF)|((((((A_>>16)&0xFF)*(((Bi>>16)&0xFF)+1))>>8)&0xFF)<<16);Be=(Be&0x00FFFFFF
)|((((((Be>>24)&0xFF)*(((Bi>>24)&0xFF)+1))>>8)&0xFF)<<24);Be=(Be&0xFFFFFF00)|((((
Be&0xFF)*((Bi&0xFF)+1))>>8)&0xFF);Be=(Be&0xFFFF00FF)|((((((Be>>8)&0xFF)*(((Bi>>8
)&0xFF)+1))>>8)&0xFF)<<8);Be=(Be&0xFF00FFFF)|((((((Be>>16)&0xFF)*(((Bi>>16)&0xFF
)+1))>>8)&0xFF)<<16);Bb=(Bb&0x00FFFFFF)|((((((Bb>>24)&0xFF)*(((Bi>>24)&0xFF)+1))>>
8)&0xFF)<<24);Bb=(Bb&0xFFFFFF00)|((((Bb&0xFF)*((Bi&0xFF)+1))>>8)&0xFF);Bb=(Bb&0xFFFF00FF
)|((((((Bb>>8)&0xFF)*(((Bi>>8)&0xFF)+1))>>8)&0xFF)<<8);Bb=(Bb&0xFF00FFFF)|((((((
Bb>>16)&0xFF)*(((Bi>>16)&0xFF)+1))>>8)&0xFF)<<16);Bd=(Bd&0x00FFFFFF)|((((((Bd>>24
)&0xFF)*(((Bi>>24)&0xFF)+1))>>8)&0xFF)<<24);Bd=(Bd&0xFFFFFF00)|((((Bd&0xFF)*((Bi&
0xFF)+1))>>8)&0xFF);Bd=(Bd&0xFFFF00FF)|((((((Bd>>8)&0xFF)*(((Bi>>8)&0xFF)+1))>>8
)&0xFF)<<8);Bd=(Bd&0xFF00FFFF)|((((((Bd>>16)&0xFF)*(((Bi>>16)&0xFF)+1))>>8)&0xFF
)<<16);}if(AR<256){A_=(A_&0x00FFFFFF)|((((AR*((A_>>24)&0xFF))>>8)&0xFF)<<24);Be=(
Be&0x00FFFFFF)|((((AR*((Be>>24)&0xFF))>>8)&0xFF)<<24);Bb=(Bb&0x00FFFFFF)|((((AR*((
Bb>>24)&0xFF))>>8)&0xFF)<<24);Bd=(Bd&0x00FFFFFF)|((((AR*((Bd>>24)&0xFF))>>8)&0xFF
)<<24);}Bs.Mx(aClip,this.Ez,B.tX(this.S,aOffset),false,this.A9,A_,Be,Bd,Bb,true,
true,this.UA);},Amf:function(){return;},NP:function(P){var A;if(!!this.L&&((this.
M&0x1)===0x1))this.L.As(this.S);},R3:function(E){var A;if(E===this.Ui)return;this.
Ui=E;if((!!this.L&&((this.M&0x1)===0x1))&&!!this.Ez)this.L.As(this.S);},R4:function(
E){var A;if(E===this.Uj)return;this.Uj=E;if((!!this.L&&((this.M&0x1)===0x1))&&!!
this.Ez)this.L.As(this.S);},R6:function(E){var A;if(E===this.Um)return;this.Um=E;
if((!!this.L&&((this.M&0x1)===0x1))&&!!this.Ez)this.L.As(this.S);},R5:function(E
){var A;if(E===this.Ul)return;this.Ul=E;if((!!this.L&&((this.M&0x1)===0x1))&&!!this.
Ez)this.L.As(this.S);},Aj:function(E){var A;if(E===this.Bj)return;this.Bj=E;if((
!!this.L&&((this.M&0x1)===0x1))&&!!this.Ez)this.L.As(this.S);},Va:function(E){var
A;if(B.tH(E,this.A9))return;this.A9=E;if((!!this.L&&((this.M&0x1)===0x1))&&!!this.
Ez)this.L.As(this.S);},U8:function(E){var A;if(E===this.UA)return;this.UA=E;if((
!!this.L&&((this.M&0x1)===0x1))&&!!this.Ez)this.L.As(this.S);},Vb:function(E){var
A;if(E===this.Ez)return;if(!!this.Ez)B.sY([this,this.NP],this.Ez,0);this.Ez=E;if(
!!this.Ez)B.sL([this,this.NP],this.Ez,0);if(!!this.L&&((this.M&0x1)===0x1))this.
L.As(this.S);},_Init:function(aArg){B.Core.Cf._Init.call(this,aArg);this.__proto__=
D.Mx;},_Done:function(){this.Gm();this.__proto__=B.Core.Cf;B.Core.Cf._Done.call(
this);},_Mark:function(C){var A;B.Core.Cf._Mark.call(this,C);if((A=this.Ez)&&(A.
_cycle!=C))A._Mark(A._cycle=C);},_className:"Views::FillPath"};D.Aow={Ahs:0x1,Ahr:
0x2,Aht:0x4,Ahw:0x8,Ahv:0x10,Ahu:0x20,Apa:0x40,Apb:0x80,Apj:0x100};D.Apo={Ahs:0x1
,Ahr:0x2,Aht:0x4,Ahw:0x8,Ahv:0x10,Ahu:0x20,AnH:0x40,AnG:0x80};D.Dt={AdA:0,Ao_:1,
Ao8:2,Ao9:3};
D._Init=function(){D.T.__proto__=B.Core.PK;D.W.__proto__=B.Core.Cf;D.IX.__proto__=
B.Core.Cf;D.PA.__proto__=B.Core.Cf;D.K.__proto__=B.Core.Cf;D.Text.__proto__=B.Core.
Cf;D.H6.__proto__=B.Core.II;D.VL.__proto__=D.H6;D.DW.__proto__=D.H6;D.Mx.__proto__=
B.Core.Cf;};D._ReInit=function(){};D.Cl=function(C){};return D;})();

/* Embedded Wizard */