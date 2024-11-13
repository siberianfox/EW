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
* Profile  : ESP32_WebGL
* Platform : Tara.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.uO)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
uO=(function(){var B=EmWiApp;var C={};
var AA=[1,1];var A0=[0,0];var B8=[0,0,0,0];var BW="\uFEFF";
C.Cf={Bd:null,Ex:1,Ew:1,Bn:0xFFFFFFFF,Cr:function(AE,aClip,aOffset,As,aBlend){var
A;var DM=this.Ew;var DN=this.Ex;var Dp=B.tV(this.AW,aOffset);var Dq=B.tV(this.AD
,aOffset);var FW;var FX;var Bw=this.Bn;if(B.tH(Dp,Dq))return;aBlend=aBlend&&((this.
F&0x2)===0x2);As=As+1;FW=FX=Bw;if(As<256){FW=(FW&0x00FFFFFF)|((((As*((FW>>24)&0xFF
))>>8)&0xFF)<<24);FX=(FX&0x00FFFFFF)|((((As*((FX>>24)&0xFF))>>8)&0xFF)<<24);}if((
DM===1)&&(DN===1))AE.LF(aClip,Dp,Dq,FW,FX,aBlend);else AE.LG(aClip,Dp,Dq,DM,DN,FW
,FX,aBlend);},GetExtent:function(){var DM=this.Ew;var DN=this.Ex;var Dp=this.AW;
var Dq=this.AD;if(((DM===1)&&(DN===1))||B.tH(Dp,Dq))return B.Core.Fz.GetExtent.call(
this);var D$=DM/2.000000;var Ea=DN/2.000000;var Fe=Dp[0];var Ff=Dp[1];var Fg=Dq[
0];var Fh=Dq[1];var BX=Fg-Fe;var BY=Fh-Ff;var Bb=Math.sqrt((BX*BX)+(BY*BY));BX=BX
/Bb;BY=BY/Bb;var KN=Fe+(BY*D$);var KO=Ff-(BX*D$);var H4=Fg+(BY*Ea);var H5=Fh-(BX
*Ea);var H6=Fg-(BY*Ea);var H7=Fh+(BX*Ea);var H8=Fe-(BY*D$);var H9=Ff+(BX*D$);var
left=KN;var right=KN;var top=KO;var bottom=KO;if(H4<left)left=H4;if(H6<left)left=
H6;if(H8<left)left=H8;if(H4>right)right=H4;if(H6>right)right=H6;if(H8>right)right=
H8;if(H5<top)top=H5;if(H7<top)top=H7;if(H9<top)top=H9;if(H5>bottom)bottom=H5;if(
H7>bottom)bottom=H7;if(H9>bottom)bottom=H9;var BD=[left|0,top|0,right|0,bottom|0
];BD=[].concat(BD.slice(0,2),B.tV(BD.slice(2,4),AA));return BD;},C8:function(Ak){
var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());},L0:function(
D){var A;if(D<1)D=1;if(D===this.Ex)return;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ab(this.GetExtent());this.Ex=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.
GetExtent());if(((D!==1)||(this.Ew!==1))&&!this.Bd){this.Bd=B.tv(B.uP.FK);if(this.
Bd.C2)B.sL([this,this.C8],this.Bd,0);}if(((D===1)&&(this.Ew===1))&&!!this.Bd){if(
this.Bd.C2)B.sY([this,this.C8],this.Bd,0);this.Bd=null;}},LZ:function(D){var A;if(
D<1)D=1;if(D===this.Ew)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent(
));this.Ew=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());if(((
D!==1)||(this.Ex!==1))&&!this.Bd){this.Bd=B.tv(B.uP.FK);if(this.Bd.C2)B.sL([this
,this.C8],this.Bd,0);}if(((D===1)&&(this.Ex===1))&&!!this.Bd){if(this.Bd.C2)B.sY([
this,this.C8],this.Bd,0);this.Bd=null;}},Jb:function(D){var A;if(D<1)D=1;if((D===
this.Ew)&&(D===this.Ex))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.
GetExtent());this.Ew=D;this.Ex=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.
GetExtent());if((D!==1)&&!this.Bd){this.Bd=B.tv(B.uP.FK);if(this.Bd.C2)B.sL([this
,this.C8],this.Bd,0);}if((D===1)&&!!this.Bd){if(this.Bd.C2)B.sY([this,this.C8],this.
Bd,0);this.Bd=null;}},An:function(D){var A;if(D===this.Bn)return;this.Bn=D;if(!!
this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());},_Init:function(aArg){
B.Core.Fz._Init.call(this,aArg);this.__proto__=C.Cf;},_Mark:function(E){var A;B.
Core.Fz._Mark.call(this,E);if((A=this.Bd)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:
"Views::Line"};C.Aw={Bn:0xFFFFFFFF,Cr:function(AE,aClip,aOffset,As,aBlend){var A;
var AQ;var AR;var AO;var AP;var Bw=this.Bn;aBlend=aBlend&&((this.F&0x2)===0x2);As=
As+1;AQ=AR=AO=AP=Bw;if(As<256){AQ=(AQ&0x00FFFFFF)|((((As*((AQ>>24)&0xFF))>>8)&0xFF
)<<24);AR=(AR&0x00FFFFFF)|((((As*((AR>>24)&0xFF))>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF
)|((((As*((AO>>24)&0xFF))>>8)&0xFF)<<24);AP=(AP&0x00FFFFFF)|((((As*((AP>>24)&0xFF
))>>8)&0xFF)<<24);}AE.IL(aClip,B.tX(this.Q,aOffset),AQ,AR,AP,AO,aBlend);},An:function(
D){var A;if(D===this.Bn)return;this.Bn=D;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ab(this.Q);},_Init:function(aArg){B.Core.A4._Init.call(this,aArg);this.__proto__=
C.Aw;},_className:"Views::Rectangle"};C.CY={Width:1,Bn:0xFFFFFFFF,Cr:function(AE
,aClip,aOffset,As,aBlend){var A;var AQ;var AR;var AO;var AP;var Bw=this.Bn;aBlend=
aBlend&&((this.F&0x2)===0x2);As=As+1;AQ=AR=AO=AP=Bw;if(As<256){AQ=(AQ&0x00FFFFFF
)|((((As*((AQ>>24)&0xFF))>>8)&0xFF)<<24);AR=(AR&0x00FFFFFF)|((((As*((AR>>24)&0xFF
))>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((As*((AO>>24)&0xFF))>>8)&0xFF)<<24);AP=(
AP&0x00FFFFFF)|((((As*((AP>>24)&0xFF))>>8)&0xFF)<<24);}AE.LD(aClip,B.tX(this.Q,aOffset
),this.Width,AQ,AR,AP,AO,aBlend);},Jb:function(D){var A;if(D<0)D=0;if(D===this.Width
)return;this.Width=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.Q);},An:function(
D){var A;if(D===this.Bn)return;this.Bn=D;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ab(this.Q);},_Init:function(aArg){B.Core.A4._Init.call(this,aArg);this.__proto__=
C.CY;},_className:"Views::Border"};C.IN={timer:null,Z:null,BN:-1,Bn:0xFFFFFFFF,Hn:
0,AJ:0,CB:false,Cr:function(AE,aClip,aOffset,As,aBlend){var A;var BI=this.Hn;if(
this.BN>=0)BI=this.BN;if(!this.Z||(BI>=this.Z.NoOfFrames))return;this.Z.Update();
var AQ;var AR;var AP;var AO;var Bw=this.Bn;var B1=(((As+1)*255)>>8)+1;var BD=B.tX(
this.Q,aOffset);aBlend=aBlend&&((this.F&0x2)===0x2);AQ=AR=AO=AP=Bw;if(B1<256){AQ=(
AQ&0x00FFFFFF)|((((((AQ>>24)&0xFF)*B1)>>8)&0xFF)<<24);AR=(AR&0x00FFFFFF)|((((((AR>>
24)&0xFF)*B1)>>8)&0xFF)<<24);AP=(AP&0x00FFFFFF)|((((((AP>>24)&0xFF)*B1)>>8)&0xFF
)<<24);AO=(AO&0x00FFFFFF)|((((((AO>>24)&0xFF)*B1)>>8)&0xFF)<<24);}AE.LC(aClip,this.
Z,BI,BD,0x1F,AQ,AR,AP,AO,aBlend);},C8:function(Ak){var A;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ab(this.Q);},CX:function(Ak){var A;var BI=this.BN;var CV=0;if(!!
this.Z)CV=this.Z.NoOfFrames*this.Z.FrameDelay;if((!!this.timer&&(this.BN<0))&&(CV>
0))this.AJ=this.timer.AK-(this.Hn*this.Z.FrameDelay);if(!!this.timer&&(CV>0)){var
V=(this.timer.AK-this.AJ)|0;BI=(V/this.Z.FrameDelay)|0;if(V>=CV){BI=BI%this.Z.NoOfFrames;
this.AJ=this.timer.AK-(V%CV);}}if(((BI!==this.BN)&&!!this.G)&&((this.F&0x1)===0x1
))this.G.Ab(this.Q);this.BN=BI;if(!CV&&!!this.timer){B.sY([this,this.CX],this.timer
,0);this.timer=null;}},An:function(D){var A;if(D===this.Bn)return;this.Bn=D;if(!
!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.Q);},FB:function(D){var A;if(this.CB===
D)return;this.CB=D;this.BN=-1;if(!D&&!!this.timer){B.sY([this,this.CX],this.timer
,0);this.timer=null;}if(D){this.timer=B._GetAutoObject(B.uT.Ft);B.sL([this,this.
CX],this.timer,0);B.lz([this,this.CX],this);}if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ab(this.Q);},LT:function(D){var A;if(D<0)D=0;if((D===this.Hn)&&(this.BN===-1))
return;this.Hn=D;if(!this.timer)this.BN=-1;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ab(this.Q);},Cg:function(D){var A;if(D===this.Z)return;if(!!this.Z&&this.Z.C2)
B.sY([this,this.C8],this.Z,0);this.Z=D;this.BN=-1;if(!!D&&D.C2)B.sL([this,this.C8
],D,0);if(this.CB){this.FB(false);this.FB(true);}if(!!this.G&&((this.F&0x1)===0x1
))this.G.Ab(this.Q);},_Init:function(aArg){B.Core.A4._Init.call(this,aArg);this.
__proto__=C.IN;},_Mark:function(E){var A;B.Core.A4._Mark.call(this,E);if((A=this.
timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Z)&&(A._cycle!=E))A._Mark(A.
_cycle=E);},_className:"Views::Frame"};C.Be={timer:null,Z:null,AJ:0,BN:0,Bn:0xFFFFFFFF
,DP:0x12,CB:false,Hf:false,Cr:function(AE,aClip,aOffset,As,aBlend){var A;var BI=
0;if(this.BN>=0)BI=this.BN;if(!this.Z||(BI>=this.Z.NoOfFrames))return;this.Z.Update(
);var Ag=this.Fx();var BE=this.Z.FrameSize;if((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))return;
var AQ;var AR;var AP;var AO;var Bw=this.Bn;var B1=(((As+1)*255)>>8)+1;aBlend=aBlend&&((
this.F&0x2)===0x2);AQ=AR=AO=AP=Bw;if(B1<256){AQ=(AQ&0x00FFFFFF)|((((((AQ>>24)&0xFF
)*B1)>>8)&0xFF)<<24);AR=(AR&0x00FFFFFF)|((((((AR>>24)&0xFF)*B1)>>8)&0xFF)<<24);AP=(
AP&0x00FFFFFF)|((((((AP>>24)&0xFF)*B1)>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((((AO>>
24)&0xFF)*B1)>>8)&0xFF)<<24);}if(B.tH([Ag[2]-Ag[0],Ag[3]-Ag[1]],BE))AE.LA(aClip,
this.Z,BI,B.tX(this.Q,aOffset),B.tU(this.Q.slice(0,2),Ag.slice(0,2)),AQ,AR,AP,AO
,aBlend);else AE.L9(aClip,this.Z,BI,B.tX(Ag,aOffset),[].concat(A0,BE),AQ,AR,AP,AO
,aBlend,true);},C8:function(Ak){var A;if(((this.Hf&&!!this.Z)&&(this.Z.FrameSize[
0]>0))&&(this.Z.FrameSize[1]>0))this.S(this.Fx());if(!!this.G&&((this.F&0x1)===0x1
))this.G.Ab(this.Q);},CX:function(Ak){var A;var BI=this.BN;var CV=0;if(!!this.Z)
CV=this.Z.NoOfFrames*this.Z.FrameDelay;if((!!this.timer&&(this.BN<0))&&(CV>0))this.
AJ=this.timer.AK;if(!!this.timer&&(CV>0)){var V=(this.timer.AK-this.AJ)|0;BI=(V/
this.Z.FrameDelay)|0;if(V>=CV){BI=BI%this.Z.NoOfFrames;this.AJ=this.timer.AK-(V%
CV);}}if(((BI!==this.BN)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ab(this.Q);this.
BN=BI;if(!CV&&!!this.timer){B.sY([this,this.CX],this.timer,0);this.timer=null;}}
,LQ:function(D){if(D===this.Hf)return;this.Hf=D;if(((D&&!!this.Z)&&(this.Z.FrameSize[
0]>0))&&(this.Z.FrameSize[1]>0))this.S(this.Fx());},An:function(D){var A;if(D===
this.Bn)return;this.Bn=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.Q);},FB:
function(D){var A;if(this.CB===D)return;this.CB=D;this.BN=-1;if(!D&&!!this.timer
){B.sY([this,this.CX],this.timer,0);this.timer=null;}if(D){this.timer=B._GetAutoObject(
B.uT.Ft);B.sL([this,this.CX],this.timer,0);B.lz([this,this.CX],this);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ab(this.Q);},Cu:function(D){var A;if(D===this.DP)
return;this.DP=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.Q);},Cg:function(
D){var A;if(D===this.Z)return;if(!!this.Z&&this.Z.C2)B.sY([this,this.C8],this.Z,
0);this.Z=D;this.BN=-1;if(!!D&&D.C2)B.sL([this,this.C8],D,0);if(this.CB){this.FB(
false);this.FB(true);}if(((this.Hf&&!!D)&&(D.FrameSize[0]>0))&&(D.FrameSize[1]>0
))this.S(this.Fx());if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.Q);},CH:function(
D){if(D)this.AM(0x1,0x0);else this.AM(0x0,0x1);},Fx:function(){var A;if(!this.Z)
return B8;var Ax=this.DP;var BE=this.Z.FrameSize;var Ac=this.Q;var width=Ac[2]-Ac[
0];var height=Ac[3]-Ac[1];if(!BE[0]||!BE[1])return B8;var At=[0,0,width,height];
var Y=At;if(((Ax&0x40)===0x40)){var J8=((((At[2]-At[0])<<16)+((BE[0]/2)|0))/BE[0
])|0;var Hc=((((At[3]-At[1])<<16)+((BE[1]/2)|0))/BE[1])|0;var Ef=J8;if(Hc>Ef)Ef=
Hc;Y=B.um(Y,((BE[0]*Ef)+32768)>>16);Y=B.uj(Y,((BE[1]*Ef)+32768)>>16);}else if(((
Ax&0x80)===0x80)){var J8=((((At[2]-At[0])<<16)+((BE[0]/2)|0))/BE[0])|0;var Hc=((((
At[3]-At[1])<<16)+((BE[1]/2)|0))/BE[1])|0;var Ef=J8;if(Hc<Ef)Ef=Hc;Y=B.um(Y,((BE[
0]*Ef)+32768)>>16);Y=B.uj(Y,((BE[1]*Ef)+32768)>>16);}else if(!((Ax&0x100)===0x100
))Y=B.ul(Y,BE);if((Y[2]-Y[0])!==(At[2]-At[0])){if(((Ax&0x4)===0x4))Y=B.un(Y,At[2
]-(Y[2]-Y[0]));else if(((Ax&0x2)===0x2))Y=B.un(Y,(At[0]+(((At[2]-At[0])/2)|0))-(((
Y[2]-Y[0])/2)|0));}if((Y[3]-Y[1])!==(At[3]-At[1])){if(((Ax&0x20)===0x20))Y=B.up(
Y,At[3]-(Y[3]-Y[1]));else if(((Ax&0x10)===0x10))Y=B.up(Y,(At[1]+(((At[3]-At[1])/
2)|0))-(((Y[3]-Y[1])/2)|0));}Y=B.tX(Y,Ac.slice(0,2));return Y;},_Init:function(aArg
){B.Core.A4._Init.call(this,aArg);this.__proto__=C.Be;},_Mark:function(E){var A;
B.Core.A4._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E
);if((A=this.Z)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};
C.Text={BM:null,AT:B.hr,String:B.hr,Cm:null,EQ:B.qK,DP:0x12,Bn:0xFFFFFFFF,FM:false
,Fu:false,IF:false,B2:false,Dc:function(){if(!!this.Cm){this.JG(this.Cm);this.Cm=
null;}},Cr:function(AE,aClip,aOffset,As,aBlend){var A;if((this.AT===B.hr)||!this.
BM)return;var Ax=this.DP;var font=this.BM;var At=B.tX(this.Q,aOffset);var AQ;var
AR;var AP;var AO;var Mr=this.Bn;var B1=(((As+1)*255)>>8)+1;var Do=this.AT.charCodeAt(
0)||0;var Ag=B.tX(this.Fx(),aOffset);var G_=[At[0]-Ag[0],(At[1]-Ag[1])-font.Ascent
];if(Do<1)return;AQ=AR=AO=AP=Mr;if(B1<256){AQ=(AQ&0x00FFFFFF)|((((((AQ>>24)&0xFF
)*B1)>>8)&0xFF)<<24);AR=(AR&0x00FFFFFF)|((((((AR>>24)&0xFF)*B1)>>8)&0xFF)<<24);AP=(
AP&0x00FFFFFF)|((((((AP>>24)&0xFF)*B1)>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((((AO>>
24)&0xFF)*B1)>>8)&0xFF)<<24);}if(((Ax&0x80)===0x80)){if(this.IP())Ax=(Ax&~0x80)|
0x4;else Ax=(Ax&~0x80)|0x1;}if((Do===1)&&!((Ax&0x40)===0x40)){AE.Kf(aClip,font,this.
AT,2,(this.AT.charCodeAt(1)||0)-1,At,G_,0,0,AQ,AR,AP,AO,true);return;}var leading=
font.Leading;var J7=(font.Ascent+font.Descent)+leading;var Mp=aClip[1]-Ag[1];var
Mq=aClip[3]-Ag[1];var JA=Ag[2]-Ag[0];var Fo=0;var K=1;var Bw=this.AT.charCodeAt(
1)||0;while(((Fo+J7)<Mp)&&(Bw>0)){K=K+Bw;Fo=Fo+J7;Bw=this.AT.charCodeAt(K)||0;}while((
Fo<Mq)&&(Bw>0)){var Fi=B.tU(G_,[0,Fo]);var Ll=0;var Ih=false;if(((((Ax&0x40)===0x40
)&&((this.AT.charCodeAt((K+Bw)-1)||0)!==0x0A))&&((this.AT.charCodeAt(K+1)||0)!==
0x0A))&&((this.AT.charCodeAt(K+Bw)||0)!==0x00))Ih=true;if(Ih&&!!(Ax&0x6)){var Lk=
K+Bw;var KL=this.AT.indexOf(String.fromCharCode(0x20),K+1);var KM=this.AT.indexOf(
String.fromCharCode(0xA0),K+1);if(((KL<0)||(KL>=Lk))&&((KM<0)||(KM>=Lk)))Ih=false;
}if(Ih)Ll=JA;else if(((Ax&0x4)===0x4))Fi=[(Fi[0]-JA)+font.Go(this.AT,K+1,Bw-1),Fi[
1]];else if(((Ax&0x2)===0x2))Fi=[(Fi[0]-((JA/2)|0))+((font.Go(this.AT,K+1,Bw-1)/
2)|0),Fi[1]];AE.Kf(aClip,font,this.AT,K+1,Bw-1,At,Fi,Ll,0,AQ,AR,AP,AO,true);K=K+
Bw;Fo=Fo+J7;Bw=this.AT.charCodeAt(K)||0;}},S:function(D){var A;if(B.tI(D,this.Q)
)return;var Li;Li=((A=this.Q)[2]-A[0])!==(D[2]-D[0]);if(((Li&&this.FM)&&this.B2)&&
!((this.F&0x2000)===0x2000)){this.AT=B.hr;this.B2=false;B.lz([this,this.EL],this
);}if(((this.Fu&&this.B2)&&!B.tH([(A=this.Q)[2]-A[0],A[3]-A[1]],[D[2]-D[0],D[3]-
D[1]]))&&!((this.F&0x2000)===0x2000)){this.AT=B.hr;this.B2=false;B.lz([this,this.
EL],this);}B.Core.A4.S.call(this,D);B.lz([this,this.J4],this);},JG:function(aBidi
){if(!aBidi)return;B.nq(aBidi);},Mt:function(aSize){var bidi=null;bidi=B.qx(aSize
);return bidi;},J4:function(Ak){},EL:function(Ak){B.lz([this,this.Io],this);},Io:
function(Ak){var A;if(this.B2)return;var width=(A=this.Q)[2]-A[0];var height=(A=
this.Q)[3]-A[1];var DL=-1;var font=this.BM;if((!!font&&!!!font.Ascent)&&!!!font.
Descent)font=null;if(this.FM){DL=width;if(DL<0)DL=1;}if(!!this.Cm){this.JG(this.
Cm);this.Cm=null;}this.B2=true;if((this.String!==B.hr)&&!!font){var length=this.
String.length;if(this.IF)this.Cm=this.Mt(length);this.AT=font.L5(this.String,0,DL
,length,this.Cm);if(!!this.Cm&&!this.LI()){this.JG(this.Cm);this.Cm=null;}}else this.
AT=B.hr;this.EQ=A0;if((this.Fu&&(this.AT!==B.hr))&&!!font){var Ax=this.DP;var leading=
font.Leading;var AZ=this.AT;var Iu=this.IP();if(((Ax&0x80)===0x80)){if(Iu)Ax=(Ax&
~0x80)|0x4;else Ax=(Ax&~0x80)|0x1;}var Is=(font.Ascent+font.Descent)+leading;var
Do=AZ.charCodeAt(0)||0;var EG=((height+leading)/Is)|0;var JD=false;var Ia=false;
if(EG<=0)EG=1;if(Do>EG){var C9=0;var Hb=0;var It=Do-1;var Bj;var BJ=AZ.length;var
tmp=B.hr;if(((Ax&0x20)===0x20))Hb=Do-EG;else if(((Ax&0x10)===0x10)){Hb=((Do-EG)/
2)|0;It=(Hb+EG)-1;}else It=EG-1;JD=Hb>0;Ia=It<(Do-1);for(Bj=1;C9<Hb;C9=C9+1)Bj=Bj+(
AZ.charCodeAt(Bj)||0);if(Ia)for(BJ=Bj;C9<It;C9=C9+1)BJ=BJ+(AZ.charCodeAt(BJ)||0);
if(JD){var Bb=AZ.charCodeAt(Bj)||0;tmp=(BW+B.uw(AZ,Bj,Bb))+BW;tmp=B.ur(tmp,0,(Bb+
2)&0xFFFF);Bj=Bj+Bb;if((tmp.charCodeAt(Bb)||0)===0x0A){tmp=B.ur(tmp,Bb,0xFEFF);tmp=
B.ur(tmp,Bb+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.ur(tmp,2,0xFEFF);tmp=
B.ur(tmp,1,0x0A);}else tmp=B.ur(tmp,1,0xFEFF);}tmp=tmp+B.uw(AZ,Bj,BJ-Bj);if(Ia&&(
BJ>=Bj)){var Bb=AZ.charCodeAt(BJ)||0;var B5=(BW+B.uw(AZ,BJ,Bb))+BW;B5=B.ur(B5,0,(
Bb+2)&0xFFFF);B5=B.ur(B5,1,0xFEFF);if((B5.charCodeAt(Bb)||0)===0x0A){B5=B.ur(B5,
Bb,0xFEFF);B5=B.ur(B5,Bb+1,0x0A);}if((B5.charCodeAt(2)||0)===0x0A){B5=B.ur(B5,2,
0xFEFF);B5=B.ur(B5,1,0x0A);}else B5=B.ur(B5,1,0xFEFF);tmp=tmp+B5;}AZ=String.fromCharCode(
EG&0xFFFF)+tmp;}var C9=0;var BR=1;var JT=width;Do=AZ.charCodeAt(0)||0;for(;C9<Do;
C9=C9+1){var EO=JD&&!C9;var EP=Ia&&(C9===(Do-1));var CN=false;var CO=false;var Gf=
Iu;if((Iu&&EO)&&!EP){EO=false;EP=true;}else if((Iu&&EP)&&!EO){EP=false;EO=true;}
var Hd=BR+1;var Bb=AZ.charCodeAt(BR)||0;var Bj=Hd;var BJ=(Hd+Bb)-2;var JL=-1;var
JM=-1;if(!this.FM&&(font.Go(AZ,Hd,Bb-1)>JT)){if(((Ax&0x4)===0x4))CN=true;else if(((
Ax&0x2)===0x2)){CN=true;CO=true;}else CO=true;}if((AZ.charCodeAt(Bj)||0)===0x0A)
Bj=Bj+1;if((AZ.charCodeAt(BJ)||0)===0x0A)BJ=BJ-1;while(CN&&((AZ.charCodeAt(Bj)||
0)===0xFEFF))Bj=Bj+1;while(CO&&((AZ.charCodeAt(BJ)||0)===0xFEFF))BJ=BJ-1;CN=CN&&
!EP;CO=CO&&!EO;while((((CN||CO)||EO)||EP)&&(Bj<BJ)){if((CN&&(Gf||!CO))||EO){if(JL>
0)AZ=B.ur(AZ,JL,0xFEFF);AZ=B.ur(AZ,Bj,0x2026);JL=Bj;Bj=Bj+1;Gf=!Gf;EO=false;if(font.
Go(AZ,Hd,Bb-1)<=JT){CN=false;CO=false;}else CN=CN||!CO;}if((CO&&(!Gf||!CN))||EP){
if(JM>0)AZ=B.ur(AZ,JM,0xFEFF);AZ=B.ur(AZ,BJ,0x2026);JM=BJ;BJ=BJ-1;Gf=!Gf;EP=false;
if(font.Go(AZ,Hd,Bb-1)<=JT){CN=false;CO=false;}else CO=CO||!CN;}}BR=BR+Bb;}this.
EQ=[font.Kg(AZ),((AZ.charCodeAt(0)||0)*Is)-leading];this.AT=AZ;}if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ab(this.Q);B.lz([this,this.J4],this);},LS:function(D){if(D===
this.IF)return;this.IF=D;this.AT=B.hr;this.B2=false;B.lz([this,this.EL],this);},
LR:function(D){if(D===this.Fu)return;this.Fu=D;if(this.FM||D)this.F=this.F&~0x100;
else this.F=this.F|0x100;this.AT=B.hr;this.B2=false;B.lz([this,this.EL],this);},
L1:function(D){if(D===this.FM)return;this.FM=D;if(this.B2){this.AT=B.hr;this.B2=
false;B.lz([this,this.EL],this);}if(D||this.Fu)this.F=this.F&~0x100;else this.F=
this.F|0x100;},Cu:function(D){var A;if(D===this.DP)return;this.DP=D;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ab(this.Q);if(this.Fu){this.AT=B.hr;this.B2=false;B.lz([
this,this.EL],this);}if(this.B2)B.lz([this,this.J4],this);},Bq:function(D){if(D===
this.String)return;this.String=D;this.AT=B.hr;this.B2=false;B.lz([this,this.EL],
this);},CG:function(D){if(D===this.BM)return;this.BM=D;this.AT=B.hr;this.B2=false;
B.lz([this,this.EL],this);},An:function(D){var A;if(D===this.Bn)return;this.Bn=D;
if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.Q);},IP:function(){if(!this.B2)
this.Io(this);if(!this.Cm)return false;var result=false;var bidi=this.Cm;result=
B.qw(bidi);return result;},LI:function(){if(!this.B2)this.Io(this);if(!this.Cm)return false;
var result=false;var bidi=this.Cm;result=B.sP(bidi);return result;},Fx:function(
){var A;if((this.String===B.hr)||!this.BM)return B8;if(!this.B2)this.Io(this);if(
this.AT===B.hr)return B8;var leading=this.BM.Leading;var Is=(this.BM.Ascent+this.
BM.Descent)+this.BM.Leading;if(B.tH(this.EQ,A0))this.EQ=[this.BM.Kg(this.AT),this.
EQ[1]];this.EQ=[this.EQ[0],((this.AT.charCodeAt(0)||0)*Is)-leading];var Ax=this.
DP;var Ac=this.Q;var width=Ac[2]-Ac[0];var height=Ac[3]-Ac[1];var At=[0,0,width,
height];var Y=[].concat(At.slice(0,2),B.tV(At.slice(0,2),this.EQ));if(((Ax&0x80)===
0x80)){if(this.IP())Ax=(Ax&~0x80)|0x4;else Ax=(Ax&~0x80)|0x1;}if(((Ax&0x40)===0x40
)){var DL;DL=width;if(DL<0)DL=0;if(DL>(Y[2]-Y[0]))Y=B.um(Y,DL);}if((Y[2]-Y[0])!==(
At[2]-At[0])){if(((Ax&0x4)===0x4))Y=B.un(Y,At[2]-(Y[2]-Y[0]));else if(((Ax&0x2)===
0x2))Y=B.un(Y,(At[0]+(((At[2]-At[0])/2)|0))-(((Y[2]-Y[0])/2)|0));}if((Y[3]-Y[1])
!==(At[3]-At[1])){if(((Ax&0x20)===0x20))Y=B.up(Y,At[3]-(Y[3]-Y[1]));else if(((Ax&
0x10)===0x10))Y=B.up(Y,(At[1]+(((At[3]-At[1])/2)|0))-(((Y[3]-Y[1])/2)|0));}Y=B.tX(
Y,Ac.slice(0,2));return Y;},_Init:function(aArg){B.Core.A4._Init.call(this,aArg);
this.__proto__=C.Text;},_Done:function(){this.Dc();this.__proto__=B.Core.A4;B.Core.
A4._Done.call(this);},_Mark:function(E){var A;B.Core.A4._Mark.call(this,E);if((A=
this.BM)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Text"};C.Nq={Lt:
0x1,Ls:0x2,Lu:0x4,Lx:0x8,Lw:0x10,Lv:0x20,NR:0x40,NS:0x80,NU:0x100};C.NW={Lt:0x1,
Ls:0x2,Lu:0x4,Lx:0x8,Lw:0x10,Lv:0x20,M8:0x40,M7:0x80};C.NC={NB:0,NP:1,NN:2,NO:3};
C._Init=function(){C.Cf.__proto__=B.Core.Fz;C.Aw.__proto__=B.Core.A4;C.CY.__proto__=
B.Core.A4;C.IN.__proto__=B.Core.A4;C.Be.__proto__=B.Core.A4;C.Text.__proto__=B.Core.
A4;};C._ReInit=function(){};C.Bs=function(E){};return C;})();

/* Embedded Wizard */