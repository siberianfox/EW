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
);if(EmWiApp.abh)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
abh=(function(){var A=EmWiApp;var C={};
var Ae=[0,0];var At=[0,0,0,0];var B4="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.Ak={Bf:0xFFFFFFFF,Bi:function(Af,aClip,aOffset,Ac,aBlend){var B;var AH;var AI;var
AF;var AG;var AA=this.Bf;aBlend=aBlend&&((this.D&0x2)===0x2);Ac=Ac+1;AH=AI=AF=AG=
AA;if(Ac<256){AH=(AH&0x00FFFFFF)|((((Ac*((AH>>24)&0xFF))>>8)&0xFF)<<24);AI=(AI&0x00FFFFFF
)|((((Ac*((AI>>24)&0xFF))>>8)&0xFF)<<24);AF=(AF&0x00FFFFFF)|((((Ac*((AF>>24)&0xFF
))>>8)&0xFF)<<24);AG=(AG&0x00FFFFFF)|((((Ac*((AG>>24)&0xFF))>>8)&0xFF)<<24);}Af.
Ds(aClip,A.aam(this.J,aOffset),AH,AI,AG,AF,aBlend);},CG:function(F){var B;if(F===
this.Bf)return;this.Bf=F;if(!!this.H&&((this.D&0x1)===0x1))this.H.Z(this.J);},_Init:
function(aArg){A.Core.AB._Init.call(this,aArg);this.__proto__=C.Ak;},_className:
"Views::Rectangle"};C.Aq={timer:null,Y:null,Ax:0,BS:0,Bf:0xFFFFFFFF,Cz:0x12,Bz:false
,Dn:false,Bi:function(Af,aClip,aOffset,Ac,aBlend){var B;var Bw=0;if(this.BS>=0)Bw=
this.BS;if(!this.Y||(Bw>=this.Y.NoOfFrames))return;this.Y.Update();var N=this.Cl(
);var AN=this.Y.FrameSize;if((N[0]>=N[2])||(N[1]>=N[3]))return;var AH;var AI;var
AG;var AF;var AA=this.Bf;var Bs=(((Ac+1)*255)>>8)+1;aBlend=aBlend&&((this.D&0x2)===
0x2);AH=AI=AF=AG=AA;if(Bs<256){AH=(AH&0x00FFFFFF)|((((((AH>>24)&0xFF)*Bs)>>8)&0xFF
)<<24);AI=(AI&0x00FFFFFF)|((((((AI>>24)&0xFF)*Bs)>>8)&0xFF)<<24);AG=(AG&0x00FFFFFF
)|((((((AG>>24)&0xFF)*Bs)>>8)&0xFF)<<24);AF=(AF&0x00FFFFFF)|((((((AF>>24)&0xFF)*
Bs)>>8)&0xFF)<<24);}if(A.z8([N[2]-N[0],N[3]-N[1]],AN))Af.EJ(aClip,this.Y,Bw,A.aam(
this.J,aOffset),A.aaj(this.J.slice(0,2),N.slice(0,2)),AH,AI,AG,AF,aBlend);else Af.
FO(aClip,this.Y,Bw,A.aam(N,aOffset),[].concat(Ae,AN),AH,AI,AG,AF,aBlend,true);},
Cw:function(A9){var B;if(((this.Dn&&!!this.Y)&&(this.Y.FrameSize[0]>0))&&(this.Y.
FrameSize[1]>0))this.Am(this.Cl());if(!!this.H&&((this.D&0x1)===0x1))this.H.Z(this.
J);},BZ:function(A9){var B;var Bw=this.BS;var Cx=0;if(!!this.Y)Cx=this.Y.NoOfFrames
*this.Y.FrameDelay;if((!!this.timer&&(this.BS<0))&&(Cx>0))this.Ax=this.timer.AC;
if(!!this.timer&&(Cx>0)){var O=(this.timer.AC-this.Ax)|0;Bw=(O/this.Y.FrameDelay
)|0;if(O>=Cx){Bw=Bw%this.Y.NoOfFrames;this.Ax=this.timer.AC-(O%Cx);}}if(((Bw!==this.
BS)&&!!this.H)&&((this.D&0x1)===0x1))this.H.Z(this.J);this.BS=Bw;if(!Cx&&!!this.
timer){A.zl([this,this.BZ],this.timer,0);this.timer=null;}},Ec:function(F){if(F===
this.Dn)return;this.Dn=F;if(((F&&!!this.Y)&&(this.Y.FrameSize[0]>0))&&(this.Y.FrameSize[
1]>0))this.Am(this.Cl());},CG:function(F){var B;if(F===this.Bf)return;this.Bf=F;
if(!!this.H&&((this.D&0x1)===0x1))this.H.Z(this.J);},EN:function(F){var B;if(this.
Bz===F)return;this.Bz=F;this.BS=-1;if(!F&&!!this.timer){A.zl([this,this.BZ],this.
timer,0);this.timer=null;}if(F){this.timer=A._GetAutoObject(A.abj.CC);A.y_([this
,this.BZ],this.timer,0);A.ow([this,this.BZ],this);}if(!!this.H&&((this.D&0x1)===
0x1))this.H.Z(this.J);},Dz:function(F){var B;if(F===this.Cz)return;this.Cz=F;if(
!!this.H&&((this.D&0x1)===0x1))this.H.Z(this.J);},B3:function(F){var B;if(F===this.
Y)return;if(!!this.Y&&this.Y.Dx)A.zl([this,this.Cw],this.Y,0);this.Y=F;this.BS=-
1;if(!!F&&F.Dx)A.y_([this,this.Cw],F,0);if(this.Bz){this.EN(false);this.EN(true);
}if(((this.Dn&&!!F)&&(F.FrameSize[0]>0))&&(F.FrameSize[1]>0))this.Am(this.Cl());
if(!!this.H&&((this.D&0x1)===0x1))this.H.Z(this.J);},Cl:function(){var B;if(!this.
Y)return At;var B8=this.Cz;var AN=this.Y.FrameSize;var Bk=this.J;var width=Bk[2]-
Bk[0];var height=Bk[3]-Bk[1];if(!AN[0]||!AN[1])return At;var X=[0,0,width,height
];var P=X;if(((B8&0x40)===0x40)){var EC=((((X[2]-X[0])<<16)+((AN[0]/2)|0))/AN[0]
)|0;var Dg=((((X[3]-X[1])<<16)+((AN[1]/2)|0))/AN[1])|0;var BK=EC;if(Dg>BK)BK=Dg;
P=A.aaO(P,((AN[0]*BK)+32768)>>16);P=A.aaL(P,((AN[1]*BK)+32768)>>16);}else if(((B8&
0x80)===0x80)){var EC=((((X[2]-X[0])<<16)+((AN[0]/2)|0))/AN[0])|0;var Dg=((((X[3
]-X[1])<<16)+((AN[1]/2)|0))/AN[1])|0;var BK=EC;if(Dg<BK)BK=Dg;P=A.aaO(P,((AN[0]*
BK)+32768)>>16);P=A.aaL(P,((AN[1]*BK)+32768)>>16);}else if(!((B8&0x100)===0x100)
)P=A.aaN(P,AN);if((P[2]-P[0])!==(X[2]-X[0])){if(((B8&0x4)===0x4))P=A.aaP(P,X[2]-(
P[2]-P[0]));else if(((B8&0x2)===0x2))P=A.aaP(P,(X[0]+(((X[2]-X[0])/2)|0))-(((P[2
]-P[0])/2)|0));}if((P[3]-P[1])!==(X[3]-X[1])){if(((B8&0x20)===0x20))P=A.aaR(P,X[
3]-(P[3]-P[1]));else if(((B8&0x10)===0x10))P=A.aaR(P,(X[1]+(((X[3]-X[1])/2)|0))-(((
P[3]-P[1])/2)|0));}P=A.aam(P,Bk.slice(0,2));return P;},_Init:function(aArg){A.Core.
AB._Init.call(this,aArg);this.__proto__=C.Aq;},_Mark:function(E){var B;A.Core.AB.
_Mark.call(this,E);if((B=this.timer)&&(B._cycle!=E))B._Mark(B._cycle=E);if((B=this.
Y)&&(B._cycle!=E))B._Mark(B._cycle=E);},_className:"Views::Image"};C.Text={AQ:null
,AS:A.jm,String:A.jm,Cj:A.vw,Bf:0xFFFFFFFF,Df:false,Bh:function(){},Bi:function(
Af,aClip,aOffset,Ac,aBlend){var B;if((this.AS===A.jm)||!this.AQ)return;var font=
this.AQ;var X=A.aam(this.J,aOffset);var AH;var AI;var AG;var AF;var Gk=this.Bf;var
Bs=(((Ac+1)*255)>>8)+1;var Ff=this.AS.charCodeAt(0)||0;var N=A.aam(this.Cl(),aOffset
);var Fg=[X[0]-N[0],(X[1]-N[1])-font.Ascent];if(Ff<1)return;AH=AI=AF=AG=Gk;if(Bs<
256){AH=(AH&0x00FFFFFF)|((((((AH>>24)&0xFF)*Bs)>>8)&0xFF)<<24);AI=(AI&0x00FFFFFF
)|((((((AI>>24)&0xFF)*Bs)>>8)&0xFF)<<24);AG=(AG&0x00FFFFFF)|((((((AG>>24)&0xFF)*
Bs)>>8)&0xFF)<<24);AF=(AF&0x00FFFFFF)|((((((AF>>24)&0xFF)*Bs)>>8)&0xFF)<<24);}if(
Ff===1){Af.EL(aClip,font,this.AS,2,(this.AS.charCodeAt(1)||0)-1,X,Fg,0,0,AH,AI,AG
,AF,true);return;}var leading=font.Leading;var EB=(font.Ascent+font.Descent)+leading;
var Gi=aClip[1]-N[1];var Gj=aClip[3]-N[1];var Gb=N[2]-N[0];var y=0;var i=1;var AA=
this.AS.charCodeAt(1)||0;while(((y+EB)<Gi)&&(AA>0)){i=i+AA;y=y+EB;AA=this.AS.charCodeAt(
i)||0;}while((y<Gj)&&(AA>0)){var DZ=A.aaj(Fg,[0,y]);DZ=[(DZ[0]-((Gb/2)|0))+((font.
Fw(this.AS,i+1,AA-1)/2)|0),DZ[1]];Af.EL(aClip,font,this.AS,i+1,AA-1,X,DZ,0,0,AH,
AI,AG,AF,true);i=i+AA;y=y+EB;AA=this.AS.charCodeAt(i)||0;}},Am:function(F){if(A.
z9(F,this.J))return;A.Core.AB.Am.call(this,F);A.ow([this,this.Fj],this);},Fj:function(
A9){},Fk:function(A9){A.ow([this,this.Fo],this);},Fo:function(A9){var B;if(this.
Df)return;var font=this.AQ;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;
this.Df=true;if((this.String!==A.jm)&&!!font){var length=this.String.length;this.
AS=font.FM(this.String,0,-1,length,null);}else this.AS=A.jm;this.Cj=Ae;if(!!this.
H&&((this.D&0x1)===0x1))this.H.Z(this.J);A.ow([this,this.Fj],this);},EO:function(
F){if(F===this.String)return;this.String=F;this.AS=A.jm;this.Df=false;A.ow([this
,this.Fk],this);},FI:function(F){if(F===this.AQ)return;this.AQ=F;this.AS=A.jm;this.
Df=false;A.ow([this,this.Fk],this);},CG:function(F){var B;if(F===this.Bf)return;
this.Bf=F;if(!!this.H&&((this.D&0x1)===0x1))this.H.Z(this.J);},Cl:function(){var
B;if((this.String===A.jm)||!this.AQ)return At;if(!this.Df)this.Fo(this);if(this.
AS===A.jm)return At;var leading=this.AQ.Leading;var Gv=(this.AQ.Ascent+this.AQ.Descent
)+this.AQ.Leading;if(A.z8(this.Cj,Ae))this.Cj=[this.AQ.Fv(this.AS),this.Cj[1]];this.
Cj=[this.Cj[0],((this.AS.charCodeAt(0)||0)*Gv)-leading];var Bk=this.J;var width=
Bk[2]-Bk[0];var height=Bk[3]-Bk[1];var X=[0,0,width,height];var P=[].concat(X.slice(
0,2),A.aak(X.slice(0,2),this.Cj));if((P[2]-P[0])!==(X[2]-X[0]))P=A.aaP(P,(X[0]+(((
X[2]-X[0])/2)|0))-(((P[2]-P[0])/2)|0));if((P[3]-P[1])!==(X[3]-X[1]))P=A.aaR(P,(X[
1]+(((X[3]-X[1])/2)|0))-(((P[3]-P[1])/2)|0));P=A.aam(P,Bk.slice(0,2));return P;}
,_Init:function(aArg){A.Core.AB._Init.call(this,aArg);this.__proto__=C.Text;},_Done:
function(){this.Bh();this.__proto__=A.Core.AB;A.Core.AB._Done.call(this);},_Mark:
function(E){var B;A.Core.AB._Mark.call(this,E);if((B=this.AQ)&&(B._cycle!=E))B._Mark(
B._cycle=E);},_className:"Views::Text"};C.BQ={BT:A.vw,Q:A.aan(4,3,0,null),Br:0,D2:
0,Ef:true,CM:function(F){if(A.z8(F,this.AP))return;A.Core.BO.CM.call(this,F);this.
Q.Set(3,0,F[0]);this.Q.Set(3,1,F[1]);this.Q.Set(3,2,1);this.Br=0x45;A.ow([this,this.
CS],this);},CL:function(F){if(A.z8(F,this.A6))return;A.Core.BO.CL.call(this,F);this.
Q.Set(2,0,F[0]);this.Q.Set(2,1,F[1]);this.Q.Set(2,2,1);this.Br=0x45;A.ow([this,this.
CS],this);},CK:function(F){if(A.z8(F,this.AO))return;A.Core.BO.CK.call(this,F);this.
Q.Set(1,0,F[0]);this.Q.Set(1,1,F[1]);this.Q.Set(1,2,1);this.Br=0x45;A.ow([this,this.
CS],this);},CJ:function(F){if(A.z8(F,this.A5))return;A.Core.BO.CJ.call(this,F);this.
Q.Set(0,0,F[0]);this.Q.Set(0,1,F[1]);this.Q.Set(0,2,1);this.Br=0x45;A.ow([this,this.
CS],this);},Gg:function(){return;},ED:function(A9){var B;if(this.Br===0x00)return;
if(this.Br===0x45){var Bq=A._NewObject(A.Graphics.EU,0);Bq=Bq.Fr(this.Q.Get(0,0)
,this.Q.Get(0,1),this.Q.Get(1,0),this.Q.Get(1,1),this.Q.Get(2,0),this.Q.Get(2,1)
,this.Q.Get(3,0),this.Q.Get(3,1));if(!!Bq){Bq.Do(0,0);this.Q.Set(0,2,Bq.CO*240);
Bq.Do(1,0);this.Q.Set(1,2,Bq.CO*240);Bq.Do(1,1);this.Q.Set(2,2,Bq.CO*240);Bq.Do(
0,1);this.Q.Set(3,2,Bq.CO*240);}this.Gg();}this.D2=this.Br;this.Br=0x00;if(!!this.
H&&((this.D&0x1)===0x1))this.H.Z(this.GetExtent());},CS:function(GA){this.ED(GA);
},FK:function(F){var B;if(F===this.Ef)return;this.Ef=F;if(!!this.H&&((this.D&0x1
)===0x1))this.H.Z(this.GetExtent());},_Init:function(aArg){A.Core.BO._Init.call(
this,aArg);(this.Q=[]).__proto__=C.BQ.Q;this.__proto__=C.BQ;this.D=0x3;},_className:
"Views::WarpView"};C.AW={Ag:null,bitmap:null,R:null,E7:1,E8:0,E9:0,E_:0,E$:1,Fa:
0,Fb:0,Fc:0,Fd:1,Ev:false,Bi:function(Af,aClip,aOffset,Ac,aBlend){var B;if(!this.
bitmap)return;this.bitmap.Update();var D0=aOffset[0];var D1=aOffset[1];var N=[].
concat(Ae,this.BT);aBlend=aBlend&&((this.D&0x2)===0x2);Ac=Ac+1;var Gc=255|(255<<
8)|(255<<16)|((((Ac*255)>>8)&0xFF)<<24);var Gd=255|(255<<8)|(255<<16)|((((Ac*255
)>>8)&0xFF)<<24);var Ge=255|(255<<8)|(255<<16)|((((Ac*255)>>8)&0xFF)<<24);var Gf=
255|(255<<8)|(255<<16)|((((Ac*255)>>8)&0xFF)<<24);aClip=A.z6(aClip,A.aam(At,aOffset
));Af.FR(aClip,this.bitmap,0,this.Q.Get(0,0)+D0,this.Q.Get(0,1)+D1,this.Q.Get(0,
2),this.Q.Get(1,0)+D0,this.Q.Get(1,1)+D1,this.Q.Get(1,2),this.Q.Get(2,0)+D0,this.
Q.Get(2,1)+D1,this.Q.Get(2,2),this.Q.Get(3,0)+D0,this.Q.Get(3,1)+D1,this.Q.Get(3
,2),N,Gc,Gd,Ge,Gf,aBlend,this.Ef);},Az:function(V){if(!this.R||!this.Ag)return null;
var BG=(A.Core.Dp.isPrototypeOf(V)?V:null);var Bn=(A.Core.Dq.isPrototypeOf(V)?V:
null);if(!BG&&!Bn)return null;var A8=Ae;var M=this.Ag.H;while(!!M&&(M!==this.R)){
A8=A.aaj(A8,M.J.slice(0,2));M=M.H;}var G=this.Ag;if(!!BG&&!BG.Down)this.Ag=null;
if(!!BG){BG.Bg=A.aak(this.Cv(BG.Bg),A8);BG.BA=A.aak(this.Cv(BG.BA),A8);return G.
Az(BG);}if(!!Bn){var Gs=A.aak(this.Cv(A.aaj(Bn.Bg,Bn.Cm)),A8);Bn.Bg=A.aak(this.Cv(
Bn.Bg),A8);Bn.BA=A.aak(this.Cv(Bn.BA),A8);Bn.Cm=A.aaj(Bn.Bg,Gs);return G.Az(Bn);
}return C.BQ.Az.call(this,V);},Ck:function(S,I,AY,CU,B7,CY){var B;if(!this.R||!((
this.R.D&0x18)===0x18))return null;var Ay=A.zT(S);Ay=this.Cv(Ay);var Ch=[].concat(
Ae,this.BT);if(!A.vt(Ch,Ay))return null;var BJ=this.R.Ck(A.aam(A.aam([0,0,S[2]-S[
0],S[3]-S[1]],Ay),this.R.J.slice(0,2)),I,AY,CU,null,CY);if(!!BJ)this.Ag=BJ.AV;else
this.Ag=null;if(!!this.Ag)return A._NewObject(A.Core.EK,0).Initialize(this,Ae);return null;
},ED:function(A9){C.BQ.ED.call(this,A9);this.Ev=false;},GD:function(){var K=this.
Q.Get(0,0);var L=this.Q.Get(0,1);var T=this.Q.Get(1,0);var U=this.Q.Get(1,1);var
EE=this.Q.Get(2,0);var EG=this.Q.Get(2,1);var D5=this.Q.Get(3,0);var D6=this.Q.Get(
3,1);var C4=T-EE;var C6=U-EG;var C5=D5-EE;var C7=D6-EG;var Dh=((K-T)+EE)-D5;var Di=((
L-U)+EG)-D6;var Cb=(C4*C7)-(C6*C5);if(!Cb)return;var Ct=((Dh*C7)-(Di*C5))/Cb;var
h=((C4*Di)-(C6*Dh))/Cb;var DC=(T-K)+(Ct*T);var DL=(D5-K)+(h*D5);var AA=K;var DP=(
U-L)+(Ct*U);var DT=(D6-L)+(h*D6);var DU=L;this.E7=DT-(DU*h);this.E8=(AA*h)-DL;this.
E9=(DL*DU)-(AA*DT);this.E_=(DU*Ct)-DP;this.E$=DC-(AA*Ct);this.Fa=(AA*DP)-(DC*DU);
this.Fb=(DP*h)-(DT*Ct);this.Fc=(DL*Ct)-(DC*h);this.Fd=(DC*DT)-(DL*DP);this.Ev=true;
},Cv:function(Av){var B;if(!this.Ev)this.GD();var EF=Av[0];var EH=Av[1];var Dk=((
EF*this.E7)+(EH*this.E8))+this.E9;var Dl=((EF*this.E_)+(EH*this.E$))+this.Fa;var
Ez=((EF*this.Fb)+(EH*this.Fc))+this.Fd;if(!!Ez){Dk=Dk/Ez;Dl=Dl/Ez;}var Ch=[].concat(
Ae,this.BT);Dk=Dk*(Ch[2]-Ch[0]);Dl=Dl*(Ch[3]-Ch[1]);return A.aak([Dk|0,Dl|0],Ch.
slice(0,2));},Cw:function(A9){var B;var Fh=this.BT;if(!!this.R)this.bitmap=this.
R.Ah;else this.bitmap=null;if(!!this.bitmap)this.BT=this.bitmap.FrameSize;else this.
BT=Ae;if(((A.z8(Fh,this.BT)||((this.D2===0x45)&&(this.Br===0x00)))&&!!this.H)&&((
this.D&0x1)===0x1))this.H.Z(this.GetExtent());if(((this.D2!==0x45)&&(this.Br===0x00
))&&!A.z8(Fh,this.BT)){this.Br=this.D2;A.ow([this,this.CS],this);}},FJ:function(
F){if(F===this.R)return;if(!!F&&(F===this.H))throw new Error(B4);if(!!this.R){A.
zl([this,this.Cw],this.R,0);this.bitmap=null;}this.R=F;if(!!F){A.y_([this,this.Cw
],F,0);this.bitmap=F.Ah;}this.Cw(this);},_Init:function(aArg){C.BQ._Init.call(this
,aArg);this.__proto__=C.AW;},_Mark:function(E){var B;C.BQ._Mark.call(this,E);if((
B=this.Ag)&&(B._cycle!=E))B._Mark(B._cycle=E);if((B=this.bitmap)&&(B._cycle!=E))
B._Mark(B._cycle=E);if((B=this.R)&&(B._cycle!=E))B._Mark(B._cycle=E);},_className:
"Views::WarpGroup"};C.GX={GH:0x1,GG:0x2,GI:0x4,GL:0x8,GK:0x10,GJ:0x20,Hh:0x40,Hi:
0x80,Hk:0x100};C.G6={G5:0,Hf:1,Hd:2,He:3};
C._Init=function(){C.Ak.__proto__=A.Core.AB;C.Aq.__proto__=A.Core.AB;C.Text.__proto__=
A.Core.AB;C.BQ.__proto__=A.Core.BO;C.AW.__proto__=C.BQ;};C._ReInit=function(){};
C.AX=function(E){};return C;})();

/* Embedded Wizard */