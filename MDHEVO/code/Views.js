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
uO=(function(){var A=EmWiApp;var D={};
var BR=[1,1];var A1=[0,0];var An=[0,0,0,0];var Dy="\uFEFF";var EF="The Slide Touch Handler:";
var G7="is already connected with a view.";var G8="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var GB="No matrix to perform 3D transformation";var HH="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
D.Q={DP:null,NW:1,NV:1,Bo:0xFFFFFFFF,Fi:function(Bz,aClip,aOffset,AY,aBlend){var B;
var Ld=this.NV;var Le=this.NW;var Kj=A.tV(this.BO,aOffset);var Kk=A.tV(this.BP,aOffset
);var HK;var HL;var Bl=this.Bo;if(A.tH(Kj,Kk))return;aBlend=aBlend&&((this.O&0x2
)===0x2);AY=AY+1;HK=HL=Bl;if(AY<256){HK=(HK&0x00FFFFFF)|((((AY*((HK>>24)&0xFF))>>
8)&0xFF)<<24);HL=(HL&0x00FFFFFF)|((((AY*((HL>>24)&0xFF))>>8)&0xFF)<<24);}if((Ld===
1)&&(Le===1))Bz.AjC(aClip,Kj,Kk,HK,HL,aBlend);else Bz.AjD(aClip,Kj,Kk,Ld,Le,HK,HL
,aBlend);},GetExtent:function(){var Ld=this.NV;var Le=this.NW;var Kj=this.BO;var
Kk=this.BP;if(((Ld===1)&&(Le===1))||A.tH(Kj,Kk))return A.Core.QA.GetExtent.call(
this);var Ms=Ld/2.000000;var Mt=Le/2.000000;var Pt=Kj[0];var Pu=Kj[1];var Pv=Kk[
0];var Pw=Kk[1];var FY=Pv-Pt;var FZ=Pw-Pu;var DN=Math.sqrt((FY*FY)+(FZ*FZ));FY=FY
/DN;FZ=FZ/DN;var AhU=Pt+(FZ*Ms);var AhV=Pu-(FY*Ms);var Xs=Pv+(FZ*Mt);var Xt=Pw-(
FY*Mt);var Xu=Pv-(FZ*Mt);var Xv=Pw+(FY*Mt);var Xw=Pt-(FZ*Ms);var Xx=Pu+(FY*Ms);var
left=AhU;var right=AhU;var top=AhV;var bottom=AhV;if(Xs<left)left=Xs;if(Xu<left)
left=Xu;if(Xw<left)left=Xw;if(Xs>right)right=Xs;if(Xu>right)right=Xu;if(Xw>right
)right=Xw;if(Xt<top)top=Xt;if(Xv<top)top=Xv;if(Xx<top)top=Xx;if(Xt>bottom)bottom=
Xt;if(Xv>bottom)bottom=Xv;if(Xx>bottom)bottom=Xx;var Ag=[left|0,top|0,right|0,bottom|
0];Ag=[].concat(Ag.slice(0,2),A.tV(Ag.slice(2,4),BR));return Ag;},E2:function(P){
var B;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent());},AkV:function(
E){var B;if(E<1)E=1;if(E===this.NW)return;if(!!this.L&&((this.O&0x1)===0x1))this.
L.Av(this.GetExtent());this.NW=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.
GetExtent());if(((E!==1)||(this.NV!==1))&&!this.DP){this.DP=A.tv(A.uQ.Rv);if(this.
DP.Hv)A.sL([this,this.E2],this.DP,0);}if(((E===1)&&(this.NV===1))&&!!this.DP){if(
this.DP.Hv)A.sY([this,this.E2],this.DP,0);this.DP=null;}},AkU:function(E){var B;
if(E<1)E=1;if(E===this.NV)return;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.
GetExtent());this.NV=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent(
));if(((E!==1)||(this.NW!==1))&&!this.DP){this.DP=A.tv(A.uQ.Rv);if(this.DP.Hv)A.
sL([this,this.E2],this.DP,0);}if(((E===1)&&(this.NW===1))&&!!this.DP){if(this.DP.
Hv)A.sY([this,this.E2],this.DP,0);this.DP=null;}},G0:function(E){var B;if(E<1)E=
1;if((E===this.NV)&&(E===this.NW))return;if(!!this.L&&((this.O&0x1)===0x1))this.
L.Av(this.GetExtent());this.NV=E;this.NW=E;if(!!this.L&&((this.O&0x1)===0x1))this.
L.Av(this.GetExtent());if((E!==1)&&!this.DP){this.DP=A.tv(A.uQ.Rv);if(this.DP.Hv
)A.sL([this,this.E2],this.DP,0);}if((E===1)&&!!this.DP){if(this.DP.Hv)A.sY([this
,this.E2],this.DP,0);this.DP=null;}},Ah:function(E){var B;if(E===this.Bo)return;
this.Bo=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent());},BH:function(
E){if(E)this.Bn(0x400,0x0);else this.Bn(0x0,0x400);},KD:function(){var B;return((
this.O&0x1)===0x1);},Ab:function(E){if(E)this.Bn(0x1,0x0);else this.Bn(0x0,0x1);
},_Init:function(aArg){A.Core.QA._Init.call(this,aArg);this.__proto__=D.Q;},_Mark:
function(C){var B;A.Core.QA._Mark.call(this,C);if((B=this.DP)&&(B._cycle!=C))B._Mark(
B._cycle=C);},_className:"Views::Line"};D.U={Bo:0xFFFFFFFF,Fi:function(Bz,aClip,
aOffset,AY,aBlend){var B;var Bb;var Bg;var Be;var Bf;var Bl=this.Bo;aBlend=aBlend&&((
this.O&0x2)===0x2);AY=AY+1;Bb=Bg=Be=Bf=Bl;if(AY<256){Bb=(Bb&0x00FFFFFF)|((((AY*((
Bb>>24)&0xFF))>>8)&0xFF)<<24);Bg=(Bg&0x00FFFFFF)|((((AY*((Bg>>24)&0xFF))>>8)&0xFF
)<<24);Be=(Be&0x00FFFFFF)|((((AY*((Be>>24)&0xFF))>>8)&0xFF)<<24);Bf=(Bf&0x00FFFFFF
)|((((AY*((Bf>>24)&0xFF))>>8)&0xFF)<<24);}Bz.Vt(aClip,A.tX(this.X,aOffset),Bb,Bg
,Bf,Be,aBlend);},Ah:function(E){var B;if(E===this.Bo)return;this.Bo=E;if(!!this.
L&&((this.O&0x1)===0x1))this.L.Av(this.X);},Ab:function(E){if(E)this.Bn(0x1,0x0);
else this.Bn(0x0,0x1);},_Init:function(aArg){A.Core.Cq._Init.call(this,aArg);this.
__proto__=D.U;},_className:"Views::Rectangle"};D.Jo={Width:1,Fi:function(Bz,aClip
,aOffset,AY,aBlend){var B;var Bb;var Bg;var Be;var Bf;aBlend=aBlend&&((this.O&0x2
)===0x2);AY=AY+1;Bb=Bg=Be=Bf=0xFFFFFFFF;if(AY<256){Bb=(Bb&0x00FFFFFF)|((((AY*255
)>>8)&0xFF)<<24);Bg=(Bg&0x00FFFFFF)|((((AY*255)>>8)&0xFF)<<24);Be=(Be&0x00FFFFFF
)|((((AY*255)>>8)&0xFF)<<24);Bf=(Bf&0x00FFFFFF)|((((AY*255)>>8)&0xFF)<<24);}Bz.AjA(
aClip,A.tX(this.X,aOffset),this.Width,Bb,Bg,Bf,Be,aBlend);},G0:function(E){var B;
if(E<0)E=0;if(E===this.Width)return;this.Width=E;if(!!this.L&&((this.O&0x1)===0x1
))this.L.Av(this.X);},_Init:function(aArg){A.Core.Cq._Init.call(this,aArg);this.
__proto__=D.Jo;},_className:"Views::Border"};D.Qm={timer:null,W:null,CB:-1,Bo:0xFFFFFFFF
,Sx:0x1F,Hq:0,BL:0,OP:A.qK,FE:false,Fi:function(Bz,aClip,aOffset,AY,aBlend){var B;
var Cz=this.Hq;if(this.CB>=0)Cz=this.CB;if(!this.W||(Cz>=this.W.NoOfFrames))return;
this.W.Update();var Bb;var Bg;var Bf;var Be;var Bl=this.Bo;var Ed=(((AY+1)*255)>>
8)+1;var Fb=this.Sx;var Ag=A.tX(this.X,aOffset);var Yj=A.tU([Ag[2]-Ag[0],Ag[3]-Ag[
1]],this.OP);aBlend=aBlend&&((this.O&0x2)===0x2);Bb=Bg=Be=Bf=Bl;if(Ed<256){Bb=(Bb&
0x00FFFFFF)|((((((Bb>>24)&0xFF)*Ed)>>8)&0xFF)<<24);Bg=(Bg&0x00FFFFFF)|((((((Bg>>
24)&0xFF)*Ed)>>8)&0xFF)<<24);Bf=(Bf&0x00FFFFFF)|((((((Bf>>24)&0xFF)*Ed)>>8)&0xFF
)<<24);Be=(Be&0x00FFFFFF)|((((((Be>>24)&0xFF)*Ed)>>8)&0xFF)<<24);}if(((this.OP[0
]>0)&&(Yj[0]>0))&&!((Fb&0x5)===0x5)){var Eq=((this.W.FrameSize[0]/3)|0)-Yj[0];if(((
Fb&0x1)===0x1)){if(aClip[2]>Ag[2])aClip=A.uo(aClip,Ag[2]);if(Eq>0)Ag=A.uo(Ag,Ag[
2]+Eq);Fb=Fb|0x4;}else if(((Fb&0x4)===0x4)){if(aClip[0]<Ag[0])aClip=[].concat(Ag[
0],aClip.slice(1,4));if(Eq>0)Ag=[].concat(Ag[0]-Eq,Ag.slice(1,4));Fb=Fb|0x1;}else{
if(aClip[0]<Ag[0])aClip=[].concat(Ag[0],aClip.slice(1,4));if(aClip[2]>Ag[2])aClip=
A.uo(aClip,Ag[2]);if(Eq>0){Ag=[].concat(Ag[0]-((Eq/2)|0),Ag.slice(1,4));Ag=A.uo(
Ag,(Ag[2]+Eq)-((Eq/2)|0));}Fb=Fb|0x5;}}if(((this.OP[1]>0)&&(Yj[1]>0))&&!((Fb&0xA
)===0xA)){var Eq=((this.W.FrameSize[1]/3)|0)-Yj[1];if(((Fb&0x2)===0x2)){if(aClip[
3]>Ag[3])aClip=[].concat(aClip.slice(0,3),Ag[3]);if(Eq>0)Ag=[].concat(Ag.slice(0
,3),Ag[3]+Eq);Fb=Fb|0x8;}else if(((Fb&0x8)===0x8)){if(aClip[1]<Ag[1])aClip=A.uq(
aClip,Ag[1]);if(Eq>0)Ag=A.uq(Ag,Ag[1]-Eq);Fb=Fb|0x2;}else{if(aClip[1]<Ag[1])aClip=
A.uq(aClip,Ag[1]);if(aClip[3]>Ag[3])aClip=[].concat(aClip.slice(0,3),Ag[3]);if(Eq>
0){Ag=A.uq(Ag,Ag[1]-((Eq/2)|0));Ag=[].concat(Ag.slice(0,3),(Ag[3]+Eq)-((Eq/2)|0)
);}Fb=Fb|0xA;}}Bz.Ajz(aClip,this.W,Cz,Ag,Fb,Bb,Bg,Bf,Be,aBlend);},E2:function(P){
var B;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.X);},D3:function(P){var B;
var Cz=this.CB;var E3=0;if(!!this.W)E3=this.W.NoOfFrames*this.W.FrameDelay;if((!
!this.timer&&(this.CB<0))&&(E3>0))this.BL=this.timer.AZ-(this.Hq*this.W.FrameDelay
);if(!!this.timer&&(E3>0)){var AF=(this.timer.AZ-this.BL)|0;Cz=(AF/this.W.FrameDelay
)|0;if(AF>=E3){Cz=Cz%this.W.NoOfFrames;this.BL=this.timer.AZ-(AF%E3);}}if(((Cz!==
this.CB)&&!!this.L)&&((this.O&0x1)===0x1))this.L.Av(this.X);this.CB=Cz;if(!E3&&!
!this.timer){A.sY([this,this.D3],this.timer,0);this.timer=null;}},Ah:function(E){
var B;if(E===this.Bo)return;this.Bo=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(
this.X);},Fl:function(E){var B;if(this.FE===E)return;this.FE=E;this.CB=-1;if(!E&&
!!this.timer){A.sY([this,this.D3],this.timer,0);this.timer=null;}if(E){this.timer=
A._GetAutoObject(A.uX.Lv);A.sL([this,this.D3],this.timer,0);A.lz([this,this.D3],
this);}if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.X);},Agi:function(E){var
B;if(E===this.Sx)return;this.Sx=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.
X);},GY:function(E){var B;if(E<0)E=0;if((E===this.Hq)&&(this.CB===-1))return;this.
Hq=E;if(!this.timer)this.CB=-1;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.
X);},V:function(E){var B;if(E===this.W)return;if(!!this.W&&this.W.Hv)A.sY([this,
this.E2],this.W,0);this.W=E;this.CB=-1;if(!!E&&E.Hv)A.sL([this,this.E2],E,0);if(
this.FE){this.Fl(false);this.Fl(true);}if(!!this.L&&((this.O&0x1)===0x1))this.L.
Av(this.X);},Ab:function(E){if(E)this.Bn(0x1,0x0);else this.Bn(0x0,0x1);},Agt:function(
E){var B;if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(A.tH(E,this.OP))return;this.
OP=E;if((!!this.L&&((this.O&0x1)===0x1))&&!((this.Sx&0xF)===0xF))this.L.Av(this.
X);},_Init:function(aArg){A.Core.Cq._Init.call(this,aArg);this.__proto__=D.Qm;},
_Mark:function(C){var B;A.Core.Cq._Mark.call(this,C);if((B=this.timer)&&(B._cycle
!=C))B._Mark(B._cycle=C);if((B=this.W)&&(B._cycle!=C))B._Mark(B._cycle=C);},_className:
"Views::Frame"};D.K={timer:null,W:null,BL:0,CB:0,Bo:0xFFFFFFFF,Fg:0x12,Hq:0,Ib:255
,DG:0,FE:false,U7:false,Fi:function(Bz,aClip,aOffset,AY,aBlend){var B;var Cz=this.
Hq;if(this.CB>=0)Cz=this.CB;if(!this.W||(Cz>=this.W.NoOfFrames))return;this.W.Update(
);var Y=this.Ku();var Dp=this.W.FrameSize;var orient=this.DG;if((Y[0]>=Y[2])||(Y[
1]>=Y[3]))return;var Bb;var Bg;var Bf;var Be;var Bl=this.Bo;var Ed=(((AY+1)*this.
Ib)>>8)+1;aBlend=aBlend&&((this.O&0x2)===0x2);Bb=Bg=Be=Bf=Bl;if(Ed<256){Bb=(Bb&0x00FFFFFF
)|((((((Bb>>24)&0xFF)*Ed)>>8)&0xFF)<<24);Bg=(Bg&0x00FFFFFF)|((((((Bg>>24)&0xFF)*
Ed)>>8)&0xFF)<<24);Bf=(Bf&0x00FFFFFF)|((((((Bf>>24)&0xFF)*Ed)>>8)&0xFF)<<24);Be=(
Be&0x00FFFFFF)|((((((Be>>24)&0xFF)*Ed)>>8)&0xFF)<<24);}if(A.tH([Y[2]-Y[0],Y[3]-Y[
1]],Dp)&&!orient)Bz.Ae7(aClip,this.W,Cz,A.tX(this.X,aOffset),A.tU(this.X.slice(0
,2),Y.slice(0,2)),Bb,Bg,Bf,Be,aBlend);else if(!orient)Bz.Alk(aClip,this.W,Cz,A.tX(
Y,aOffset),[].concat(A1,Dp),Bb,Bg,Bf,Be,aBlend,true);else{var left=Y[0]+aOffset[
0];var top=Y[1]+aOffset[1];var right=Y[2]+aOffset[0];var bottom=Y[3]+aOffset[1];
if(orient===1)Bz.Tv(aClip,this.W,Cz,left,bottom,1.000000,left,top,1.000000,right
,top,1.000000,right,bottom,1.000000,[].concat(A1,Dp),Be,Bb,Bg,Bf,aBlend,true);else
if(orient===2)Bz.Tv(aClip,this.W,Cz,right,bottom,1.000000,left,bottom,1.000000,left
,top,1.000000,right,top,1.000000,[].concat(A1,Dp),Bf,Be,Bb,Bg,aBlend,true);else if(
orient===3)Bz.Tv(aClip,this.W,Cz,right,top,1.000000,right,bottom,1.000000,left,bottom
,1.000000,left,top,1.000000,[].concat(A1,Dp),Bg,Bf,Be,Bb,aBlend,true);}},E2:function(
P){var B;if(((this.U7&&!!this.W)&&(this.W.FrameSize[0]>0))&&(this.W.FrameSize[1]>
0))this.H(this.Ku());if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.X);},D3:function(
P){var B;var Cz=this.CB;var E3=0;if(!!this.W)E3=this.W.NoOfFrames*this.W.FrameDelay;
if((!!this.timer&&(this.CB<0))&&(E3>0))this.BL=this.timer.AZ-(this.Hq*this.W.FrameDelay
);if(!!this.timer&&(E3>0)){var AF=(this.timer.AZ-this.BL)|0;Cz=(AF/this.W.FrameDelay
)|0;if(AF>=E3){Cz=Cz%this.W.NoOfFrames;this.BL=this.timer.AZ-(AF%E3);}}if(((Cz!==
this.CB)&&!!this.L)&&((this.O&0x1)===0x1))this.L.Av(this.X);this.CB=Cz;if(!E3&&!
!this.timer){A.sY([this,this.D3],this.timer,0);this.timer=null;}},I3:function(E){
var B;if(E===this.DG)return;this.DG=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(
this.X);},CQ:function(E){if(E===this.U7)return;this.U7=E;if(((E&&!!this.W)&&(this.
W.FrameSize[0]>0))&&(this.W.FrameSize[1]>0))this.H(this.Ku());},Ah:function(E){var
B;if(E===this.Bo)return;this.Bo=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.
X);},Fl:function(E){var B;if(this.FE===E)return;this.FE=E;this.CB=-1;if(!E&&!!this.
timer){A.sY([this,this.D3],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(
A.uX.Lv);A.sL([this,this.D3],this.timer,0);A.lz([this,this.D3],this);}if(!!this.
L&&((this.O&0x1)===0x1))this.L.Av(this.X);},Az:function(E){var B;if(E===this.Fg)
return;this.Fg=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.X);},GY:function(
E){var B;if(E<0)E=0;if((E===this.Hq)&&(this.CB===-1))return;this.Hq=E;if(!this.timer
)this.CB=-1;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.X);},V:function(E){
var B;if(E===this.W)return;if(!!this.W&&this.W.Hv)A.sY([this,this.E2],this.W,0);
this.W=E;this.CB=-1;if(!!E&&E.Hv)A.sL([this,this.E2],E,0);if(this.FE){this.Fl(false
);this.Fl(true);}if(((this.U7&&!!E)&&(E.FrameSize[0]>0))&&(E.FrameSize[1]>0))this.
H(this.Ku());if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.X);},LO:function(E
){var B;if(E>255)E=255;if(E<0)E=0;if(E===this.Ib)return;this.Ib=E;if(!!this.L&&((
this.O&0x1)===0x1))this.L.Av(this.X);},Ab:function(E){if(E)this.Bn(0x1,0x0);else
this.Bn(0x0,0x1);},Ku:function(){var B;if(!this.W)return An;var orient=this.DG;var
A4=this.Fg;var Dp=this.W.FrameSize;var AC=this.X;var width=AC[2]-AC[0];var height=
AC[3]-AC[1];if(!Dp[0]||!Dp[1])return An;if((orient===1)||(orient===3)){width=height;
height=AC[2]-AC[0];}var BV=[0,0,width,height];var AD=BV;if(((A4&0x40)===0x40)){var
AeN=((((BV[2]-BV[0])<<16)+((Dp[0]/2)|0))/Dp[0])|0;var UR=((((BV[3]-BV[1])<<16)+((
Dp[1]/2)|0))/Dp[1])|0;var MG=AeN;if(UR>MG)MG=UR;AD=A.um(AD,((Dp[0]*MG)+32768)>>16
);AD=A.uj(AD,((Dp[1]*MG)+32768)>>16);}else if(((A4&0x80)===0x80)){var AeN=((((BV[
2]-BV[0])<<16)+((Dp[0]/2)|0))/Dp[0])|0;var UR=((((BV[3]-BV[1])<<16)+((Dp[1]/2)|0
))/Dp[1])|0;var MG=AeN;if(UR<MG)MG=UR;AD=A.um(AD,((Dp[0]*MG)+32768)>>16);AD=A.uj(
AD,((Dp[1]*MG)+32768)>>16);}else if(!((A4&0x100)===0x100))AD=A.ul(AD,Dp);if((AD[
2]-AD[0])!==(BV[2]-BV[0])){if(((A4&0x4)===0x4))AD=A.un(AD,BV[2]-(AD[2]-AD[0]));else
if(((A4&0x2)===0x2))AD=A.un(AD,(BV[0]+(((BV[2]-BV[0])/2)|0))-(((AD[2]-AD[0])/2)|
0));}if((AD[3]-AD[1])!==(BV[3]-BV[1])){if(((A4&0x20)===0x20))AD=A.up(AD,BV[3]-(AD[
3]-AD[1]));else if(((A4&0x10)===0x10))AD=A.up(AD,(BV[1]+(((BV[3]-BV[1])/2)|0))-(((
AD[3]-AD[1])/2)|0));}if(!orient)AD=A.tX(AD,AC.slice(0,2));else if(orient===1){var
Oo=[AC[0]+AD[1],AC[3]-AD[2]];AD=[].concat(Oo,A.tV(Oo,[AD[3]-AD[1],AD[2]-AD[0]]));
}else if(orient===2){var Oo=[AC[2]-AD[2],AC[3]-AD[3]];AD=[].concat(Oo,A.tV(Oo,[AD[
2]-AD[0],AD[3]-AD[1]]));}else if(orient===3){var Oo=[AC[2]-AD[3],AC[1]+AD[0]];AD=[
].concat(Oo,A.tV(Oo,[AD[3]-AD[1],AD[2]-AD[0]]));}return AD;},_Init:function(aArg
){A.Core.Cq._Init.call(this,aArg);this.__proto__=D.K;},_Mark:function(C){var B;A.
Core.Cq._Mark.call(this,C);if((B=this.timer)&&(B._cycle!=C))B._Mark(B._cycle=C);
if((B=this.W)&&(B._cycle!=C))B._Mark(B._cycle=C);},_className:"Views::Image"};D.
Text={ED:null,A$:null,Fp:null,A2:A.hr,String:A.hr,Fa:null,Oy:A.qK,Bp:A.qK,Fg:0x12
,Bo:0xFFFFFFFF,O9:false,Lw:false,YP:false,Ee:false,GQ:function(){if(!!this.Fa){this.
Ad6(this.Fa);this.Fa=null;}},Fi:function(Bz,aClip,aOffset,AY,aBlend){var B;if((this.
A2===A.hr)||!this.A$)return;var A4=this.Fg;var font=this.A$;var BV=A.tX(this.X,aOffset
);var Bb;var Bg;var Bf;var Be;var col=this.Bo;var Ed=(((AY+1)*255)>>8)+1;var Eu=
this.A2.charCodeAt(0)||0;var Y=A.tX(this.Ku(),aOffset);var EN=[BV[0]-Y[0],(BV[1]-
Y[1])-font.Ascent];if(Eu<1)return;Bb=Bg=Be=Bf=col;if(Ed<256){Bb=(Bb&0x00FFFFFF)|((((((
Bb>>24)&0xFF)*Ed)>>8)&0xFF)<<24);Bg=(Bg&0x00FFFFFF)|((((((Bg>>24)&0xFF)*Ed)>>8)&
0xFF)<<24);Bf=(Bf&0x00FFFFFF)|((((((Bf>>24)&0xFF)*Ed)>>8)&0xFF)<<24);Be=(Be&0x00FFFFFF
)|((((((Be>>24)&0xFF)*Ed)>>8)&0xFF)<<24);}if(((A4&0x80)===0x80)){if(this.SU())A4=(
A4&~0x80)|0x4;else A4=(A4&~0x80)|0x1;}if((Eu===1)&&!((A4&0x40)===0x40)){Bz.Afc(aClip
,font,this.A2,2,(this.A2.charCodeAt(1)||0)-1,BV,EN,0,0,Bb,Bg,Bf,Be,true);return;
}var leading=font.Leading;var MF=(font.Ascent+font.Descent)+leading;var An8=aClip[
1]-Y[1];var An9=aClip[3]-Y[1];var AdZ=Y[2]-Y[0];var IR=0;var R=1;var Bl=this.A2.
charCodeAt(1)||0;while(((IR+MF)<An8)&&(Bl>0)){R=R+Bl;IR=IR+MF;Bl=this.A2.charCodeAt(
R)||0;}while((IR<An9)&&(Bl>0)){var PF=A.tU(EN,[0,IR]);var Ou=0;var Fz=false;if(((((
A4&0x40)===0x40)&&((this.A2.charCodeAt((R+Bl)-1)||0)!==0x0A))&&((this.A2.charCodeAt(
R+1)||0)!==0x0A))&&((this.A2.charCodeAt(R+Bl)||0)!==0x00))Fz=true;if(Fz&&!!(A4&0x6
)){var Ye=R+Bl;var AhS=this.A2.indexOf(String.fromCharCode(0x20),R+1);var AhT=this.
A2.indexOf(String.fromCharCode(0xA0),R+1);if(((AhS<0)||(AhS>=Ye))&&((AhT<0)||(AhT>=
Ye)))Fz=false;}if(Fz)Ou=AdZ;else if(((A4&0x4)===0x4))PF=[(PF[0]-AdZ)+font.Ly(this.
A2,R+1,Bl-1),PF[1]];else if(((A4&0x2)===0x2))PF=[(PF[0]-((AdZ/2)|0))+((font.Ly(this.
A2,R+1,Bl-1)/2)|0),PF[1]];Bz.Afc(aClip,font,this.A2,R+1,Bl-1,BV,PF,Ou,0,Bb,Bg,Bf
,Be,true);R=R+Bl;IR=IR+MF;Bl=this.A2.charCodeAt(R)||0;}},H:function(E){var B;if(
A.tI(E,this.X))return;var Ai0;Ai0=((B=this.X)[2]-B[0])!==(E[2]-E[0]);if(((Ai0&&this.
O9)&&this.Ee)&&!((this.O&0x2000)===0x2000)){this.A2=A.hr;this.Ee=false;A.lz([this
,this.Oq],this);}if(((this.Lw&&this.Ee)&&!A.tH([(B=this.X)[2]-B[0],B[3]-B[1]],[E[
2]-E[0],E[3]-E[1]]))&&!((this.O&0x2000)===0x2000)){this.A2=A.hr;this.Ee=false;A.
lz([this,this.Oq],this);}A.Core.Cq.H.call(this,E);A.lz([this,this.XY],this);},An3:
function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=A.sR(aBidi
,aRowStart,aRowEnd,aIndex);return aIndex;},An2:function(aBidi,aRowStart,aRowEnd,
aIndex){if(!aBidi)return aIndex;aIndex=A.sQ(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;
},Ad6:function(aBidi){if(!aBidi)return;A.nq(aBidi);},An$:function(aSize){var bidi=
null;bidi=A.qx(aSize);return bidi;},XY:function(P){A.lz(this.Fp,this);},Oq:function(
P){A.lz([this,this.ME],this);},Aez:function(P){this.Fo(this.ED.Ba);},AeA:function(
P){var B;var Y=this.Ku();var My=this.X.slice(0,2);if(Y[0]>My[0])Y=[].concat(My[0
],Y.slice(1,4));if(Y[1]>My[1])Y=A.uq(Y,My[1]);var BT=A.tU(Y.slice(0,2),this.X.slice(
0,2));var Kf=A.tU([(B=this.X)[2]-B[0],B[3]-B[1]],[Y[2]-Y[0],Y[3]-Y[1]]);if(Kf[0]>
0)Kf=[0,Kf[1]];if(Kf[1]>0)Kf=[Kf[0],0];this.ED.Ba=this.Bp;this.ED.Dw=A.tU(A.tV(this.
Bp,Kf),BT);this.ED.Dv=A.tU(this.Bp,BT);},ME:function(P){var B;if(this.Ee)return;
var width=(B=this.X)[2]-B[0];var height=(B=this.X)[3]-B[1];var K9=-1;var font=this.
A$;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.O9){K9=width;if(
K9<0)K9=1;}if(!!this.Fa){this.Ad6(this.Fa);this.Fa=null;}this.Ee=true;if((this.String
!==A.hr)&&!!font){var length=this.String.length;if(this.YP)this.Fa=this.An$(length
);this.A2=font.Ak7(this.String,0,K9,length,this.Fa);if(!!this.Fa&&!this.AjN()){this.
Ad6(this.Fa);this.Fa=null;}}else this.A2=A.hr;this.Oy=A1;if((this.Lw&&(this.A2!==
A.hr))&&!!font){var A4=this.Fg;var leading=font.Leading;var CW=this.A2;var Yh=this.
SU();if(((A4&0x80)===0x80)){if(Yh)A4=(A4&~0x80)|0x4;else A4=(A4&~0x80)|0x1;}var X3=(
font.Ascent+font.Descent)+leading;var Eu=CW.charCodeAt(0)||0;var Ob=((height+leading
)/X3)|0;var Ad3=false;var XB=false;if(Ob<=0)Ob=1;if(Eu>Ob){var B7=0;var UQ=0;var
Yf=Eu-1;var DZ;var EZ=CW.length;var tmp=A.hr;if(((A4&0x20)===0x20))UQ=Eu-Ob;else
if(((A4&0x10)===0x10)){UQ=((Eu-Ob)/2)|0;Yf=(UQ+Ob)-1;}else Yf=Ob-1;Ad3=UQ>0;XB=Yf<(
Eu-1);for(DZ=1;B7<UQ;B7=B7+1)DZ=DZ+(CW.charCodeAt(DZ)||0);if(XB)for(EZ=DZ;B7<Yf;
B7=B7+1)EZ=EZ+(CW.charCodeAt(EZ)||0);if(Ad3){var DN=CW.charCodeAt(DZ)||0;tmp=(Dy+
A.uw(CW,DZ,DN))+Dy;tmp=A.ur(tmp,0,(DN+2)&0xFFFF);DZ=DZ+DN;if((tmp.charCodeAt(DN)||
0)===0x0A){tmp=A.ur(tmp,DN,0xFEFF);tmp=A.ur(tmp,DN+1,0x0A);}if((tmp.charCodeAt(2
)||0)===0x0A){tmp=A.ur(tmp,2,0xFEFF);tmp=A.ur(tmp,1,0x0A);}else tmp=A.ur(tmp,1,0xFEFF
);}tmp=tmp+A.uw(CW,DZ,EZ-DZ);if(XB&&(EZ>=DZ)){var DN=CW.charCodeAt(EZ)||0;var Gk=(
Dy+A.uw(CW,EZ,DN))+Dy;Gk=A.ur(Gk,0,(DN+2)&0xFFFF);Gk=A.ur(Gk,1,0xFEFF);if((Gk.charCodeAt(
DN)||0)===0x0A){Gk=A.ur(Gk,DN,0xFEFF);Gk=A.ur(Gk,DN+1,0x0A);}if((Gk.charCodeAt(2
)||0)===0x0A){Gk=A.ur(Gk,2,0xFEFF);Gk=A.ur(Gk,1,0x0A);}else Gk=A.ur(Gk,1,0xFEFF);
tmp=tmp+Gk;}CW=String.fromCharCode(Ob&0xFFFF)+tmp;}var B7=0;var Ax=1;var Aej=width;
Eu=CW.charCodeAt(0)||0;for(;B7<Eu;B7=B7+1){var Os=Ad3&&!B7;var Ot=XB&&(B7===(Eu-
1));var IE=false;var IF=false;var Se=Yh;if((Yh&&Os)&&!Ot){Os=false;Ot=true;}else
if((Yh&&Ot)&&!Os){Ot=false;Os=true;}var IQ=Ax+1;var DN=CW.charCodeAt(Ax)||0;var DZ=
IQ;var EZ=(IQ+DN)-2;var Ad$=-1;var Aea=-1;if(!this.O9&&(font.Ly(CW,IQ,DN-1)>Aej)
){if(((A4&0x4)===0x4))IE=true;else if(((A4&0x2)===0x2)){IE=true;IF=true;}else IF=
true;}if((CW.charCodeAt(DZ)||0)===0x0A)DZ=DZ+1;if((CW.charCodeAt(EZ)||0)===0x0A)
EZ=EZ-1;while(IE&&((CW.charCodeAt(DZ)||0)===0xFEFF))DZ=DZ+1;while(IF&&((CW.charCodeAt(
EZ)||0)===0xFEFF))EZ=EZ-1;IE=IE&&!Ot;IF=IF&&!Os;while((((IE||IF)||Os)||Ot)&&(DZ<
EZ)){if((IE&&(Se||!IF))||Os){if(Ad$>0)CW=A.ur(CW,Ad$,0xFEFF);CW=A.ur(CW,DZ,0x2026
);Ad$=DZ;DZ=DZ+1;Se=!Se;Os=false;if(font.Ly(CW,IQ,DN-1)<=Aej){IE=false;IF=false;
}else IE=IE||!IF;}if((IF&&(!Se||!IE))||Ot){if(Aea>0)CW=A.ur(CW,Aea,0xFEFF);CW=A.
ur(CW,EZ,0x2026);Aea=EZ;EZ=EZ-1;Se=!Se;Ot=false;if(font.Ly(CW,IQ,DN-1)<=Aej){IE=
false;IF=false;}else IF=IF||!IE;}}Ax=Ax+DN;}this.Oy=[font.Afj(CW),((CW.charCodeAt(
0)||0)*X3)-leading];this.A2=CW;}if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.
X);A.lz([this,this.XY],this);},Agl:function(E){if(E===this.YP)return;this.YP=E;this.
A2=A.hr;this.Ee=false;A.lz([this,this.Oq],this);},Agk:function(E){if(E===this.Lw
)return;this.Lw=E;if((this.O9||E)||!!this.Fp)this.O=this.O&~0x100;else this.O=this.
O|0x100;this.A2=A.hr;this.Ee=false;A.lz([this,this.Oq],this);},AkM:function(E){if(
A.tK(E,this.Fp))return;this.Fp=E;if((this.O9||!!E)||this.Lw)this.O=this.O&~0x100;
else this.O=this.O|0x100;},AaZ:function(E){if(E===this.ED)return;if(!!E&&!!E.MC){
A.uF("%s%$%*%s",EF,E,G7);throw new Error(G8);}if(!!this.ED){this.ED.Sd=null;this.
ED.MC=null;}this.ED=E;if(!!E){E.Sd=[this,this.AeA];E.MC=[this,this.Aez];}},Wk:function(
E){if(E===this.O9)return;this.O9=E;if(this.Ee){this.A2=A.hr;this.Ee=false;A.lz([
this,this.Oq],this);}if((E||this.Lw)||!!this.Fp)this.O=this.O&~0x100;else this.O=
this.O|0x100;},Fo:function(E){var B;if(A.tH(E,this.Bp))return;this.Bp=E;if(!!this.
L&&((this.O&0x1)===0x1))this.L.Av(this.X);if(this.Ee)A.lz([this,this.XY],this);}
,Az:function(E){var B;if(E===this.Fg)return;this.Fg=E;if(!!this.L&&((this.O&0x1)===
0x1))this.L.Av(this.X);if(this.Lw){this.A2=A.hr;this.Ee=false;A.lz([this,this.Oq
],this);}if(this.Ee)A.lz([this,this.XY],this);},S:function(E){if(E===this.String
)return;this.String=E;this.A2=A.hr;this.Ee=false;A.lz([this,this.Oq],this);},Ae:
function(E){if(E===this.A$)return;this.A$=E;this.A2=A.hr;this.Ee=false;A.lz([this
,this.Oq],this);},Ah:function(E){var B;if(E===this.Bo)return;this.Bo=E;if(!!this.
L&&((this.O&0x1)===0x1))this.L.Av(this.X);},BH:function(E){if(E)this.Bn(0x400,0x0
);else this.Bn(0x0,0x400);},Ab:function(E){if(E)this.Bn(0x1,0x0);else this.Bn(0x0
,0x1);},SU:function(){if(!this.Ee)this.ME(this);if(!this.Fa)return false;var result=
false;var bidi=this.Fa;result=A.qw(bidi);return result;},AjN:function(){if(!this.
Ee)this.ME(this);if(!this.Fa)return false;var result=false;var bidi=this.Fa;result=
A.sP(bidi);return result;},Ahd:function(aIndex){if(((this.String===A.hr)||!this.
A$)||this.Lw)return A1;if(!this.Ee)this.ME(this);if(aIndex<0)aIndex=0;var Aoi=(this.
A2.charCodeAt(0)||0)-1;var Ew=this.A2.charCodeAt(1)||0;var Ax=1;var MK=2;var B7=
0;var col=-1;var Ea=true;aIndex=aIndex+2;while((B7<Aoi)&&((Ax+Ew)<=aIndex)){Ax=Ax+
Ew;B7=B7+1;MK=MK+1;aIndex=aIndex+1;Ew=this.A2.charCodeAt(Ax)||0;}if(aIndex>(Ax+Ew
))aIndex=Ax+Ew;if(!!this.Fa)aIndex=(Ax+this.An2(this.Fa,(Ax+1)-MK,(Ax+Ew)-MK,(aIndex-
Ax)-1))+1;for(;aIndex>Ax;Ax=Ax+1){var DK=this.A2.charCodeAt(Ax+1)||0;if(Ea)col=col+
1;Ea=(DK!==0xFEFF)&&(DK!==0x0A);}return[col,B7];},S$:function(Uf){if(((this.String===
A.hr)||!this.A$)||this.Lw)return 0;if(!this.Ee)this.ME(this);var B7=Uf[1];var col=
Uf[0];var Ax=1;var MK=2;var Eu=this.A2.charCodeAt(0)||0;var Ew=this.A2.charCodeAt(
1)||0;if(B7>=Eu){B7=Eu-1;col=this.A2.length;}if(B7<0){B7=0;col=0;}if(col<0)col=0;
while((B7>0)&&(Ew>0)){Ax=Ax+Ew;B7=B7-1;MK=MK+1;Ew=this.A2.charCodeAt(Ax)||0;}var
IJ=Ax;var Yg=(Ax-MK)+1;var Ye=(Yg+Ew)-1;var UK=false;while((col>=0)&&(Ew>1)){var
DK=this.A2.charCodeAt(Ax+1)||0;Ax=Ax+1;Ew=Ew-1;UK=(DK===0xFEFF)||(DK===0x0A);if(
!UK){col=col-1;IJ=Ax;}}if((!UK&&(col>=0))&&((this.A2.charCodeAt(Ax+1)||0)===0x00
))UK=true;if(UK)IJ=IJ+1;IJ=IJ-MK;if(!!this.Fa)IJ=Yg+this.An3(this.Fa,Yg,Ye,IJ-Yg
);return IJ;},Wm:function(EX){var B;if((this.String===A.hr)||!this.A$)return A1;
if(!this.Ee)this.ME(this);var Y=this.Ku();if((Y[0]>=Y[2])||(Y[1]>=Y[3]))return A1;
var font=this.A$;var A4=this.Fg;var Eu=this.A2.charCodeAt(0)||0;var leading=font.
Leading;if(EX[1]<Y[1])EX=[EX[0],Y[1]];if(EX[1]>=Y[3])EX=[EX[0],Y[3]-1];var MF=(font.
Ascent+font.Descent)+leading;var B7=((EX[1]-Y[1])/MF)|0;var E4=this.Za(B7);var Ew=
E4.length;var Fz=false;if(((A4&0x80)===0x80)){if(this.SU())A4=(A4&~0x80)|0x4;else
A4=(A4&~0x80)|0x1;}if(((A4&0x40)===0x40)&&(B7<(Eu-1)))Fz=true;if((Fz&&(E4.indexOf(
String.fromCharCode(0x20),0)<0))&&(E4.indexOf(String.fromCharCode(0xA0),0)<0))Fz=
false;if(Fz){var Ax=1;var PQ=B7;while(PQ>0){Ax=Ax+(this.A2.charCodeAt(Ax)||0);PQ=
PQ-1;}if(((this.A2.charCodeAt(Ax+1)||0)===0x0A)||((this.A2.charCodeAt((Ax+(this.
A2.charCodeAt(Ax)||0))-1)||0)===0x0A))Fz=false;}var Ou=0;var Hh=0;if(Fz)Ou=Y[2]-
Y[0];else if(((A4&0x4)===0x4))Hh=(Y[2]-Y[0])-font.Ly(E4,0,Ew);else if(((A4&0x2)===
0x2))Hh=(((Y[2]-Y[0])/2)|0)-((font.Ly(E4,0,Ew)/2)|0);var col=font.AjK(E4,0,Ew,(EX[
0]-Y[0])-Hh,Ou);if(col<0)col=0;return[col,B7];},AbW:function(Uf){var B;if((this.
String===A.hr)||!this.A$)return A1;if(!this.Ee)this.ME(this);var Eu=this.A2.charCodeAt(
0)||0;var font=this.A$;var A4=this.Fg;var B7=Uf[1];var col=Uf[0];if(B7>=Eu){B7=Eu-
1;col=this.A2.length;}if(B7<0){B7=0;col=0;}var E4=this.Za(B7);var Ew=E4.length;var
Y=this.Ku();var Fz=false;var leading=font.Leading;if(((A4&0x80)===0x80)){if(this.
SU())A4=(A4&~0x80)|0x4;else A4=(A4&~0x80)|0x1;}if(((A4&0x40)===0x40)&&(B7<(Eu-1)
))Fz=true;if((Fz&&(E4.indexOf(String.fromCharCode(0x20),0)<0))&&(E4.indexOf(String.
fromCharCode(0xA0),0)<0))Fz=false;if(Fz){var Ax=1;var PQ=B7;while(PQ>0){Ax=Ax+(this.
A2.charCodeAt(Ax)||0);PQ=PQ-1;}if(((this.A2.charCodeAt(Ax+1)||0)===0x0A)||((this.
A2.charCodeAt((Ax+(this.A2.charCodeAt(Ax)||0))-1)||0)===0x0A))Fz=false;}var IR=(
Y[1]+(B7*((font.Ascent+font.Descent)+leading)))+font.Ascent;var Ou=0;var Hh=Y[0];
if(Fz)Ou=Y[2]-Y[0];else if(((A4&0x4)===0x4))Hh=Y[2]-font.Ly(E4,0,Ew);else if(((A4&
0x2)===0x2))Hh=(Hh+(((Y[2]-Y[0])/2)|0))-((font.Ly(E4,0,Ew)/2)|0);var pos=font.AjJ(
E4,0,Ew,col,Ou);if(pos<0)pos=0;return[Hh+pos,IR];},Za:function(Ue){if((this.String===
A.hr)||!this.A$)return A.hr;if(!this.Ee)this.ME(this);var Eu=this.A2.charCodeAt(
0)||0;var Ax=1;if((!this.A$||(Ue<0))||(Ue>=Eu))return A.hr;while(Ue>0){Ax=Ax+(this.
A2.charCodeAt(Ax)||0);Ue=Ue-1;}var IQ=Ax;var R1=Ax+(this.A2.charCodeAt(Ax)||0);var
DK=0x00;do{IQ=IQ+1;DK=this.A2.charCodeAt(IQ)||0;}while(((DK===0xFEFF)||(DK===0x0A
))&&(IQ<=R1));do{R1=R1-1;DK=this.A2.charCodeAt(R1)||0;}while(((DK===0xFEFF)||(DK===
0x0A))&&(IQ<=R1));var E4=A.uw(this.A2,IQ,(R1-IQ)+1);var PA;for(PA=E4.indexOf(String.
fromCharCode(0xFEFF),0);PA>=0;PA=E4.indexOf(String.fromCharCode(0xFEFF),PA+1)){var
IJ=PA+1;while((E4.charCodeAt(IJ)||0)===0xFEFF)IJ=IJ+1;E4=A.uB(E4,PA,IJ-PA);}return E4;
},Ku:function(){var B;if((this.String===A.hr)||!this.A$)return An;if(!this.Ee)this.
ME(this);if(this.A2===A.hr)return An;var leading=this.A$.Leading;var X3=(this.A$.
Ascent+this.A$.Descent)+this.A$.Leading;if(A.tH(this.Oy,A1))this.Oy=[this.A$.Afj(
this.A2),this.Oy[1]];this.Oy=[this.Oy[0],((this.A2.charCodeAt(0)||0)*X3)-leading
];var A4=this.Fg;var AC=this.X;var width=AC[2]-AC[0];var height=AC[3]-AC[1];var BV=[
0,0,width,height];var AD=[].concat(BV.slice(0,2),A.tV(BV.slice(0,2),this.Oy));if(((
A4&0x80)===0x80)){if(this.SU())A4=(A4&~0x80)|0x4;else A4=(A4&~0x80)|0x1;}if(((A4&
0x40)===0x40)){var K9;K9=width;if(K9<0)K9=0;if(K9>(AD[2]-AD[0]))AD=A.um(AD,K9);}
if((AD[2]-AD[0])!==(BV[2]-BV[0])){if(((A4&0x4)===0x4))AD=A.un(AD,BV[2]-(AD[2]-AD[
0]));else if(((A4&0x2)===0x2))AD=A.un(AD,(BV[0]+(((BV[2]-BV[0])/2)|0))-(((AD[2]-
AD[0])/2)|0));}if((AD[3]-AD[1])!==(BV[3]-BV[1])){if(((A4&0x20)===0x20))AD=A.up(AD
,BV[3]-(AD[3]-AD[1]));else if(((A4&0x10)===0x10))AD=A.up(AD,(BV[1]+(((BV[3]-BV[1
])/2)|0))-(((AD[3]-AD[1])/2)|0));}AD=A.tX(AD,AC.slice(0,2));return A.tX(AD,this.
Bp);},_Init:function(aArg){A.Core.Cq._Init.call(this,aArg);this.__proto__=D.Text;
},_Done:function(){this.GQ();this.__proto__=A.Core.Cq;A.Core.Cq._Done.call(this);
},_Mark:function(C){var B;A.Core.Cq._Mark.call(this,C);if((B=this.ED)&&(B._cycle
!=C))B._Mark(B._cycle=C);if((B=this.A$)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=
this.Fp)&&((B=B[0])._cycle!=C))B._Mark(B._cycle=C);},_className:"Views::Text"};D.
Ix={Bi:null,Mn:0,Mm:0,D_:A.qK,Aj:A.tY(4,3,0,null),Te:A.qK,JR:A.qL,Et:0,HQ:0,Wo:true
,Fn:function(E){if(A.tH(E,this.Dj))return;A.Core.I4.Fn.call(this,E);this.Aj.Set(
3,0,E[0]);this.Aj.Set(3,1,E[1]);this.Aj.Set(3,2,1.000000);this.Et=0x45;this.Bi=null;
A.lz([this,this.N6],this);},E8:function(E){if(A.tH(E,this.DV))return;A.Core.I4.E8.
call(this,E);this.Aj.Set(2,0,E[0]);this.Aj.Set(2,1,E[1]);this.Aj.Set(2,2,1.000000
);this.Et=0x45;this.Bi=null;A.lz([this,this.N6],this);},AP:function(E){if(A.tH(E
,this.BP))return;A.Core.I4.AP.call(this,E);this.Aj.Set(1,0,E[0]);this.Aj.Set(1,1
,E[1]);this.Aj.Set(1,2,1.000000);this.Et=0x45;this.Bi=null;A.lz([this,this.N6],this
);},AR:function(E){if(A.tH(E,this.BO))return;A.Core.I4.AR.call(this,E);this.Aj.Set(
0,0,E[0]);this.Aj.Set(0,1,E[1]);this.Aj.Set(0,2,1.000000);this.Et=0x45;this.Bi=null;
A.lz([this,this.N6],this);},XA:function(){return;},AeT:function(P){var B;if(this.
Et===0x00)return;if(this.Et===0x45){var E1=A._NewObject(A.Graphics.Tw,0);E1=E1.Aju(
this.Aj.Get(0,0),this.Aj.Get(0,1),this.Aj.Get(1,0),this.Aj.Get(1,1),this.Aj.Get(
2,0),this.Aj.Get(2,1),this.Aj.Get(3,0),this.Aj.Get(3,1));if(!!E1){E1.U8(0.000000
,0.000000);this.Aj.Set(0,2,E1.HG*240.000000);E1.U8(1.000000,0.000000);this.Aj.Set(
1,2,E1.HG*240.000000);E1.U8(1.000000,1.000000);this.Aj.Set(2,2,E1.HG*240.000000);
E1.U8(0.000000,1.000000);this.Aj.Set(3,2,E1.HG*240.000000);}this.XA();}if((((this.
Et===0x4D)&&!!this.Bi)&&!!this.D_[0])&&!!this.D_[1]){var HT=A.tF(this.JR,[].concat(
A1,this.D_));var HS=this.Te;var Oa=HT[0]-HS[0];var Ag=HT[2]-HS[0];var Dq=HT[1]-HS[
1];var ID=HT[3]-HS[1];this.Bi.NE(Oa,Dq);this.Aj.Set(0,0,this.Bi.L8+this.Mm);this.
Aj.Set(0,1,this.Bi.L9+this.Mn);this.Aj.Set(0,2,this.Bi.HG);this.Bi.NE(Ag,Dq);this.
Aj.Set(1,0,this.Bi.L8+this.Mm);this.Aj.Set(1,1,this.Bi.L9+this.Mn);this.Aj.Set(1
,2,this.Bi.HG);this.Bi.NE(Ag,ID);this.Aj.Set(2,0,this.Bi.L8+this.Mm);this.Aj.Set(
2,1,this.Bi.L9+this.Mn);this.Aj.Set(2,2,this.Bi.HG);this.Bi.NE(Oa,ID);this.Aj.Set(
3,0,this.Bi.L8+this.Mm);this.Aj.Set(3,1,this.Bi.L9+this.Mn);this.Aj.Set(3,2,this.
Bi.HG);if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent());this.BO=[(this.
Aj.Get(0,0)+0.500000)|0,(this.Aj.Get(0,1)+0.500000)|0];this.BP=[(this.Aj.Get(1,0
)+0.500000)|0,(this.Aj.Get(1,1)+0.500000)|0];this.DV=[(this.Aj.Get(2,0)+0.500000
)|0,(this.Aj.Get(2,1)+0.500000)|0];this.Dj=[(this.Aj.Get(3,0)+0.500000)|0,(this.
Aj.Get(3,1)+0.500000)|0];this.XA();}this.HQ=this.Et;this.Et=0x00;if(!!this.L&&((
this.O&0x1)===0x1))this.L.Av(this.GetExtent());},N6:function(C8){this.AeT(C8);},
AkN:function(E){var B;if(E===this.Wo)return;this.Wo=E;if(!!this.L&&((this.O&0x1)===
0x1))this.L.Av(this.GetExtent());},OT:function(E){if(A.tH(E,this.Te))return;this.
Te=E;if((this.HQ!==0x45)&&(this.Et===0x00)){this.Et=this.HQ;A.lz([this,this.N6],
this);}},AgD:function(E){var B;if(A.tI(E,this.JR))return;this.JR=E;if((((this.HQ===
0x45)&&(this.Et===0x00))&&!!this.L)&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent(
));if((this.HQ!==0x45)&&(this.Et===0x00)){this.Et=this.HQ;A.lz([this,this.N6],this
);}},WS:function(Mc,DY){var B;if(!DY)throw new Error(GB);if(!this.Bi)this.Bi=A._NewObject(
A.Graphics.Tw,0);this.Bi.Ajj(DY);this.Mm=Mc[0];this.Mn=Mc[1];this.HQ=0x4D;this.Et=
0x00;if(!this.D_[0]||!this.D_[1])return;var HT=A.tF(this.JR,[].concat(A1,this.D_
));var HS=this.Te;var Oa=HT[0]-HS[0];var Ag=HT[2]-HS[0];var Dq=HT[1]-HS[1];var ID=
HT[3]-HS[1];this.Bi.NE(Oa,Dq);this.Aj.Set(0,0,this.Bi.L8+this.Mm);this.Aj.Set(0,
1,this.Bi.L9+this.Mn);this.Aj.Set(0,2,this.Bi.HG);this.Bi.NE(Ag,Dq);this.Aj.Set(
1,0,this.Bi.L8+this.Mm);this.Aj.Set(1,1,this.Bi.L9+this.Mn);this.Aj.Set(1,2,this.
Bi.HG);this.Bi.NE(Ag,ID);this.Aj.Set(2,0,this.Bi.L8+this.Mm);this.Aj.Set(2,1,this.
Bi.L9+this.Mn);this.Aj.Set(2,2,this.Bi.HG);this.Bi.NE(Oa,ID);this.Aj.Set(3,0,this.
Bi.L8+this.Mm);this.Aj.Set(3,1,this.Bi.L9+this.Mn);this.Aj.Set(3,2,this.Bi.HG);if(
!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent());this.BO=[(this.Aj.Get(
0,0)+0.500000)|0,(this.Aj.Get(0,1)+0.500000)|0];this.BP=[(this.Aj.Get(1,0)+0.500000
)|0,(this.Aj.Get(1,1)+0.500000)|0];this.DV=[(this.Aj.Get(2,0)+0.500000)|0,(this.
Aj.Get(2,1)+0.500000)|0];this.Dj=[(this.Aj.Get(3,0)+0.500000)|0,(this.Aj.Get(3,1
)+0.500000)|0];if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent());this.
XA();},FP:function(Mc,Xa,Xh,Xi){var B;if(!this.D_[0]||!this.D_[1])return;var HT=
A.tF(this.JR,[].concat(A1,this.D_));var HS=this.Te;var Oa=(HT[0]-HS[0])*Xh;var Ag=(
HT[2]-HS[0])*Xh;var Dq=(HT[1]-HS[1])*Xi;var ID=(HT[3]-HS[1])*Xi;var XC=Math.cos(
Xa*A.iq);var Yl=Math.sin(Xa*A.iq);var Aio=Oa*XC;var Aip=Oa*Yl;var AiX=Ag*XC;var AiY=
Ag*Yl;var Ai3=Dq*XC;var Ai4=Dq*Yl;var AhP=ID*XC;var AhQ=ID*Yl;var RY=Mc[0];var XG=
Mc[1];this.Aj.Set(0,0,(RY+Aio)+Ai4);this.Aj.Set(0,1,(XG-Aip)+Ai3);this.Aj.Set(1,
0,(RY+AiX)+Ai4);this.Aj.Set(1,1,(XG-AiY)+Ai3);this.Aj.Set(2,0,(RY+AiX)+AhQ);this.
Aj.Set(2,1,(XG-AiY)+AhP);this.Aj.Set(3,0,(RY+Aio)+AhQ);this.Aj.Set(3,1,(XG-Aip)+
AhP);this.Aj.Set(0,2,1.000000);this.Aj.Set(1,2,1.000000);this.Aj.Set(2,2,1.000000
);this.Aj.Set(3,2,1.000000);if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent(
));this.BO=[(this.Aj.Get(0,0)+0.500000)|0,(this.Aj.Get(0,1)+0.500000)|0];this.BP=[(
this.Aj.Get(1,0)+0.500000)|0,(this.Aj.Get(1,1)+0.500000)|0];this.DV=[(this.Aj.Get(
2,0)+0.500000)|0,(this.Aj.Get(2,1)+0.500000)|0];this.Dj=[(this.Aj.Get(3,0)+0.500000
)|0,(this.Aj.Get(3,1)+0.500000)|0];this.HQ=0x45;this.Et=0x00;this.Bi=null;if(!!this.
L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent());this.XA();},_Init:function(aArg
){A.Core.I4._Init.call(this,aArg);(this.Aj=[]).__proto__=D.Ix.Aj;this.__proto__=
D.Ix;this.O=0x3;},_Mark:function(C){var B;A.Core.I4._Mark.call(this,C);if((B=this.
Bi)&&(B._cycle!=C))B._Mark(B._cycle=C);},_className:"Views::WarpView"};D.WT={timer:
null,W:null,BL:0,CB:0,Bo:0xFFFFFFFF,Hq:0,FE:false,Fi:function(Bz,aClip,aOffset,AY
,aBlend){var B;var Cz=this.Hq;if(this.CB>=0)Cz=this.CB;if(!this.W||(Cz>=this.W.NoOfFrames
))return;this.W.Update();var HK;var HL;var Pj;var Pk;var Bl=this.Bo;var Ed=(((AY+
1)*255)>>8)+1;var Ga=aOffset[0];var Gb=aOffset[1];var Y=A.tF(this.JR,[].concat(A1
,this.D_));aBlend=aBlend&&((this.O&0x2)===0x2);HK=HL=Pj=Pk=Bl;if(Ed<256){HK=(HK&
0x00FFFFFF)|((((((HK>>24)&0xFF)*Ed)>>8)&0xFF)<<24);HL=(HL&0x00FFFFFF)|((((((HL>>
24)&0xFF)*Ed)>>8)&0xFF)<<24);Pj=(Pj&0x00FFFFFF)|((((((Pj>>24)&0xFF)*Ed)>>8)&0xFF
)<<24);Pk=(Pk&0x00FFFFFF)|((((((Pk>>24)&0xFF)*Ed)>>8)&0xFF)<<24);}aClip=A.tF(aClip
,A.tX(An,aOffset));Bz.Tv(aClip,this.W,Cz,this.Aj.Get(0,0)+Ga,this.Aj.Get(0,1)+Gb
,this.Aj.Get(0,2),this.Aj.Get(1,0)+Ga,this.Aj.Get(1,1)+Gb,this.Aj.Get(1,2),this.
Aj.Get(2,0)+Ga,this.Aj.Get(2,1)+Gb,this.Aj.Get(2,2),this.Aj.Get(3,0)+Ga,this.Aj.
Get(3,1)+Gb,this.Aj.Get(3,2),Y,HK,HL,Pj,Pk,aBlend,this.Wo);},E2:function(P){var B;
var UI=this.D_;if(!!this.W)this.D_=this.W.FrameSize;else this.D_=A1;if(((A.tH(UI
,this.D_)||((this.HQ===0x45)&&(this.Et===0x00)))&&!!this.L)&&((this.O&0x1)===0x1
))this.L.Av(this.GetExtent());if(((this.HQ!==0x45)&&(this.Et===0x00))&&!A.tH(UI,
this.D_)){this.Et=this.HQ;A.lz([this,this.N6],this);}},D3:function(P){var B;var Cz=
this.CB;var E3=0;if(!!this.W)E3=this.W.NoOfFrames*this.W.FrameDelay;if((!!this.timer&&(
this.CB<0))&&(E3>0))this.BL=this.timer.AZ-(this.Hq*this.W.FrameDelay);if(!!this.
timer&&(E3>0)){var AF=(this.timer.AZ-this.BL)|0;Cz=(AF/this.W.FrameDelay)|0;if(AF>=
E3){Cz=Cz%this.W.NoOfFrames;this.BL=this.timer.AZ-(AF%E3);}}if(((Cz!==this.CB)&&
!!this.L)&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent());this.CB=Cz;if(!E3&&!
!this.timer){A.sY([this,this.D3],this.timer,0);this.timer=null;}},Fl:function(E){
var B;if(this.FE===E)return;this.FE=E;this.CB=-1;if(!E&&!!this.timer){A.sY([this
,this.D3],this.timer,0);this.timer=null;}if(E){this.timer=A._GetAutoObject(A.uX.
Lv);A.sL([this,this.D3],this.timer,0);A.lz([this,this.D3],this);}if(!!this.L&&((
this.O&0x1)===0x1))this.L.Av(this.GetExtent());},Ah:function(E){var B;if(E===this.
Bo)return;this.Bo=E;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent()
);},GY:function(E){var B;if(E<0)E=0;if((E===this.Hq)&&(this.CB===-1))return;this.
Hq=E;if(!this.timer)this.CB=-1;if(!!this.L&&((this.O&0x1)===0x1))this.L.Av(this.
GetExtent());},V:function(E){if(E===this.W)return;if(!!this.W&&this.W.Hv)A.sY([this
,this.E2],this.W,0);this.W=E;this.CB=-1;if(!!E&&E.Hv)A.sL([this,this.E2],E,0);if(
this.FE){this.Fl(false);this.Fl(true);}this.E2(this);},_Init:function(aArg){D.Ix.
_Init.call(this,aArg);this.__proto__=D.WT;},_Mark:function(C){var B;D.Ix._Mark.call(
this,C);if((B=this.timer)&&(B._cycle!=C))B._Mark(B._cycle=C);if((B=this.W)&&(B._cycle
!=C))B._Mark(B._cycle=C);},_className:"Views::WarpImage"};D.D9={BS:null,bitmap:null
,J:null,Ah_:1.000000,Ah$:0,Aia:0,Aib:0,Aic:1.000000,Aid:0,Aie:0,Aif:0,Aig:1.000000
,Ib:255,Uu:false,Fi:function(Bz,aClip,aOffset,AY,aBlend){var B;if(!this.bitmap)return;
this.bitmap.Update();var Ga=aOffset[0];var Gb=aOffset[1];var Y=A.tF(this.JR,[].concat(
A1,this.D_));aBlend=aBlend&&((this.O&0x2)===0x2);AY=AY+1;var Aiv;var Aiw;var Aix;
var Aiy;var AoC=this.Ib;Aiv=Aiw=Aix=Aiy=AoC;var HK=255|(255<<8)|(255<<16)|((((AY
*Aiv)>>8)&0xFF)<<24);var HL=255|(255<<8)|(255<<16)|((((AY*Aiw)>>8)&0xFF)<<24);var
Pj=255|(255<<8)|(255<<16)|((((AY*Aix)>>8)&0xFF)<<24);var Pk=255|(255<<8)|(255<<16
)|((((AY*Aiy)>>8)&0xFF)<<24);aClip=A.tF(aClip,A.tX(An,aOffset));Bz.Tv(aClip,this.
bitmap,0,this.Aj.Get(0,0)+Ga,this.Aj.Get(0,1)+Gb,this.Aj.Get(0,2),this.Aj.Get(1,
0)+Ga,this.Aj.Get(1,1)+Gb,this.Aj.Get(1,2),this.Aj.Get(2,0)+Ga,this.Aj.Get(2,1)+
Gb,this.Aj.Get(2,2),this.Aj.Get(3,0)+Ga,this.Aj.Get(3,1)+Gb,this.Aj.Get(3,2),Y,HK
,HL,Pj,Pk,aBlend,this.Wo);},Df:function(A0){if(!this.J||!this.BS)return null;var
AK=(A.Core.Qa.isPrototypeOf(A0)?A0:null);var B1=(A.Core.Qd.isPrototypeOf(A0)?A0:
null);if(!AK&&!B1)return null;var BT=A1;var AL=this.BS.L;while(!!AL&&(AL!==this.
J)){BT=A.tU(BT,AL.X.slice(0,2));AL=AL.L;}var Ac=this.BS;if(!!AK&&!AK.Down)this.BS=
null;if(!!AK){AK.DR=A.tV(this.R7(AK.DR),BT);AK.EQ=A.tV(this.R7(AK.EQ),BT);return Ac.
Df(AK);}if(!!B1){var AoF=A.tV(this.R7(A.tU(B1.DR,B1.Ba)),BT);B1.DR=A.tV(this.R7(
B1.DR),BT);B1.EQ=A.tV(this.R7(B1.EQ),BT);B1.Ba=A.tU(B1.DR,AoF);return Ac.Df(B1);
}return D.Ix.Df.call(this,A0);},Ls:function(A9,Au,E$,J2,K1){var B;if(!this.J||!((
this.J.O&0x18)===0x18))return null;var pos=A.ts(A9);pos=this.R7(pos);var HU=A.tF(
this.JR,[].concat(A1,this.D_));if(!A.qH(HU,pos))return null;var GG=this.J.Ls(A.tX(
A.tX([0,0,A9[2]-A9[0],A9[3]-A9[1]],pos),this.J.X.slice(0,2)),Au,E$,J2,K1);if(!!GG
)this.BS=GG.Bk;else this.BS=null;if(!!this.BS)return A._NewObject(A.Core.Su,0).Initialize(
this,A1);return null;},AeT:function(P){D.Ix.AeT.call(this,P);this.Uu=false;},WS:
function(Mc,DY){D.Ix.WS.call(this,Mc,DY);this.Uu=false;},FP:function(Mc,Xa,Xh,Xi
){D.Ix.FP.call(this,Mc,Xa,Xh,Xi);this.Uu=false;},Apx:function(){var x1=this.Aj.Get(
0,0);var y1=this.Aj.Get(0,1);var x2=this.Aj.Get(1,0);var y2=this.Aj.Get(1,1);var
x3=this.Aj.Get(2,0);var y3=this.Aj.Get(2,1);var x4=this.Aj.Get(3,0);var y4=this.
Aj.Get(3,1);var Uk=x2-x3;var Um=y2-y3;var Ul=x4-x3;var Un=y4-y3;var UW=((x1-x2)+
x3)-x4;var UX=((y1-y2)+y3)-y4;var Po=(Uk*Un)-(Um*Ul);if(Po===0.000000)return;var
R4=((UW*Un)-(UX*Ul))/Po;var AI=((Uk*UX)-(Um*UW))/Po;var W$=(x2-x1)+(R4*x2);var ID=(
x4-x1)+(AI*x4);var Bl=x1;var Eq=(y2-y1)+(R4*y2);var XH=(y4-y1)+(AI*y4);var Do=y1;
this.Ah_=XH-(Do*AI);this.Ah$=(Bl*AI)-ID;this.Aia=(ID*Do)-(Bl*XH);this.Aib=(Do*R4
)-Eq;this.Aic=W$-(Bl*R4);this.Aid=(Bl*Eq)-(W$*Do);this.Aie=(Eq*AI)-(XH*R4);this.
Aif=(ID*R4)-(W$*AI);this.Aig=(W$*XH)-(ID*Eq);this.Uu=true;},R7:function(DJ){var B;
if(!this.Uu)this.Apx();var AeW=DJ[0];var AeX=DJ[1];var U3=((AeW*this.Ah_)+(AeX*this.
Ah$))+this.Aia;var U4=((AeW*this.Aib)+(AeX*this.Aic))+this.Aid;var AeG=((AeW*this.
Aie)+(AeX*this.Aif))+this.Aig;if(AeG!==0.000000){U3=U3/AeG;U4=U4/AeG;}var HU=A.tF(
this.JR,[].concat(A1,this.D_));U3=U3*(HU[2]-HU[0]);U4=U4*(HU[3]-HU[1]);return A.
tV([U3|0,U4|0],HU.slice(0,2));},E2:function(P){var B;var UI=this.D_;if(!!this.J)
this.bitmap=this.J.CU;else this.bitmap=null;if(!!this.bitmap)this.D_=this.bitmap.
FrameSize;else this.D_=A1;if(((A.tH(UI,this.D_)||((this.HQ===0x45)&&(this.Et===0x00
)))&&!!this.L)&&((this.O&0x1)===0x1))this.L.Av(this.GetExtent());if(((this.HQ!==
0x45)&&(this.Et===0x00))&&!A.tH(UI,this.D_)){this.Et=this.HQ;A.lz([this,this.N6]
,this);}},LO:function(E){var B;if(E===this.Ib)return;this.Ib=E;if(!!this.L&&((this.
O&0x1)===0x1))this.L.Av(this.GetExtent());},QN:function(E){if(E===this.J)return;
if(!!E&&(E===this.L))throw new Error(HH);if(!!this.J){A.sY([this,this.E2],this.J
,0);this.bitmap=null;}this.J=E;if(!!E){A.sL([this,this.E2],E,0);this.bitmap=E.CU;
}this.E2(this);},_Init:function(aArg){D.Ix._Init.call(this,aArg);this.__proto__=
D.D9;},_Mark:function(C){var B;D.Ix._Mark.call(this,C);if((B=this.BS)&&(B._cycle
!=C))B._Mark(B._cycle=C);if((B=this.bitmap)&&(B._cycle!=C))B._Mark(B._cycle=C);if((
B=this.J)&&(B._cycle!=C))B._Mark(B._cycle=C);},_className:"Views::WarpGroup"};D.
M9={ET:null,Va:0xFFFFFFFF,Vb:0xFFFFFFFF,Vd:0xFFFFFFFF,Vc:0xFFFFFFFF,Bo:0xFFFFFFFF
,Ba:A.qK,Vu:0,GQ:function(){this.Aoc();},Fi:function(Bz,aClip,aOffset,AY,aBlend){
if(!this.ET)return;var Bb=this.Vc;var Bg=this.Vd;var Be=this.Va;var Bf=this.Vb;var
Bl=this.Bo;AY=AY+1;if((((Bb===Bg)&&(Be===Bf))&&(Bb===Be))&&(Bb===0xFFFFFFFF))Bb=
Bg=Be=Bf=Bl;else if(Bl!==0xFFFFFFFF){Bb=(Bb&0x00FFFFFF)|((((((Bb>>24)&0xFF)*(((Bl>>
24)&0xFF)+1))>>8)&0xFF)<<24);Bb=(Bb&0xFFFFFF00)|((((Bb&0xFF)*((Bl&0xFF)+1))>>8)&
0xFF);Bb=(Bb&0xFFFF00FF)|((((((Bb>>8)&0xFF)*(((Bl>>8)&0xFF)+1))>>8)&0xFF)<<8);Bb=(
Bb&0xFF00FFFF)|((((((Bb>>16)&0xFF)*(((Bl>>16)&0xFF)+1))>>8)&0xFF)<<16);Bg=(Bg&0x00FFFFFF
)|((((((Bg>>24)&0xFF)*(((Bl>>24)&0xFF)+1))>>8)&0xFF)<<24);Bg=(Bg&0xFFFFFF00)|((((
Bg&0xFF)*((Bl&0xFF)+1))>>8)&0xFF);Bg=(Bg&0xFFFF00FF)|((((((Bg>>8)&0xFF)*(((Bl>>8
)&0xFF)+1))>>8)&0xFF)<<8);Bg=(Bg&0xFF00FFFF)|((((((Bg>>16)&0xFF)*(((Bl>>16)&0xFF
)+1))>>8)&0xFF)<<16);Be=(Be&0x00FFFFFF)|((((((Be>>24)&0xFF)*(((Bl>>24)&0xFF)+1))>>
8)&0xFF)<<24);Be=(Be&0xFFFFFF00)|((((Be&0xFF)*((Bl&0xFF)+1))>>8)&0xFF);Be=(Be&0xFFFF00FF
)|((((((Be>>8)&0xFF)*(((Bl>>8)&0xFF)+1))>>8)&0xFF)<<8);Be=(Be&0xFF00FFFF)|((((((
Be>>16)&0xFF)*(((Bl>>16)&0xFF)+1))>>8)&0xFF)<<16);Bf=(Bf&0x00FFFFFF)|((((((Bf>>24
)&0xFF)*(((Bl>>24)&0xFF)+1))>>8)&0xFF)<<24);Bf=(Bf&0xFFFFFF00)|((((Bf&0xFF)*((Bl&
0xFF)+1))>>8)&0xFF);Bf=(Bf&0xFFFF00FF)|((((((Bf>>8)&0xFF)*(((Bl>>8)&0xFF)+1))>>8
)&0xFF)<<8);Bf=(Bf&0xFF00FFFF)|((((((Bf>>16)&0xFF)*(((Bl>>16)&0xFF)+1))>>8)&0xFF
)<<16);}if(AY<256){Bb=(Bb&0x00FFFFFF)|((((AY*((Bb>>24)&0xFF))>>8)&0xFF)<<24);Bg=(
Bg&0x00FFFFFF)|((((AY*((Bg>>24)&0xFF))>>8)&0xFF)<<24);Be=(Be&0x00FFFFFF)|((((AY*((
Be>>24)&0xFF))>>8)&0xFF)<<24);Bf=(Bf&0x00FFFFFF)|((((AY*((Bf>>24)&0xFF))>>8)&0xFF
)<<24);}Bz.M9(aClip,this.ET,A.tX(this.X,aOffset),false,this.Ba,Bb,Bg,Bf,Be,true,
true,this.Vu);},Aoc:function(){return;},OA:function(P){var B;if(!!this.L&&((this.
O&0x1)===0x1))this.L.Av(this.X);},Nt:function(E){var B;if(E===this.Va)return;this.
Va=E;if((!!this.L&&((this.O&0x1)===0x1))&&!!this.ET)this.L.Av(this.X);},Nu:function(
E){var B;if(E===this.Vb)return;this.Vb=E;if((!!this.L&&((this.O&0x1)===0x1))&&!!
this.ET)this.L.Av(this.X);},Nw:function(E){var B;if(E===this.Vd)return;this.Vd=E;
if((!!this.L&&((this.O&0x1)===0x1))&&!!this.ET)this.L.Av(this.X);},Nv:function(E
){var B;if(E===this.Vc)return;this.Vc=E;if((!!this.L&&((this.O&0x1)===0x1))&&!!this.
ET)this.L.Av(this.X);},Ah:function(E){var B;if(E===this.Bo)return;this.Bo=E;if((
!!this.L&&((this.O&0x1)===0x1))&&!!this.ET)this.L.Av(this.X);},Wb:function(E){var
B;if(A.tH(E,this.Ba))return;this.Ba=E;if((!!this.L&&((this.O&0x1)===0x1))&&!!this.
ET)this.L.Av(this.X);},V8:function(E){var B;if(E===this.Vu)return;this.Vu=E;if((
!!this.L&&((this.O&0x1)===0x1))&&!!this.ET)this.L.Av(this.X);},Wc:function(E){var
B;if(E===this.ET)return;if(!!this.ET)A.sY([this,this.OA],this.ET,0);this.ET=E;if(
!!this.ET)A.sL([this,this.OA],this.ET,0);if(!!this.L&&((this.O&0x1)===0x1))this.
L.Av(this.X);},_Init:function(aArg){A.Core.Cq._Init.call(this,aArg);this.__proto__=
D.M9;},_Done:function(){this.GQ();this.__proto__=A.Core.Cq;A.Core.Cq._Done.call(
this);},_Mark:function(C){var B;A.Core.Cq._Mark.call(this,C);if((B=this.ET)&&(B.
_cycle!=C))B._Mark(B._cycle=C);},_className:"Views::FillPath"};D.AqC={Aje:0x1,Ajd:
0x2,Ajf:0x4,Aji:0x8,Ajh:0x10,Ajg:0x20,Arq:0x40,Arr:0x80,Arz:0x100};D.ArE={Aje:0x1
,Ajd:0x2,Ajf:0x4,Aji:0x8,Ajh:0x10,Ajg:0x20,ApF:0x40,ApE:0x80};D.DG={AfC:0,Aro:1,
Arm:2,Arn:3};
D._Init=function(){D.Q.__proto__=A.Core.QA;D.U.__proto__=A.Core.Cq;D.Jo.__proto__=
A.Core.Cq;D.Qm.__proto__=A.Core.Cq;D.K.__proto__=A.Core.Cq;D.Text.__proto__=A.Core.
Cq;D.Ix.__proto__=A.Core.I4;D.WT.__proto__=D.Ix;D.D9.__proto__=D.Ix;D.M9.__proto__=
A.Core.Cq;};D._ReInit=function(){};D.Cx=function(C){};return D;})();

/* Embedded Wizard */