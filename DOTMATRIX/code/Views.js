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
abh=(function(){var B=EmWiApp;var C={};
var AF=[1,1];var AB=[0,0];var CI=[0,0,0,0];var Ed="The Slide Touch Handler:";var Ee=
"is already connected with a view.";var Ef="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Eg="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
C.Hc={BU:null,EV:1,EU:1,B2:0xFFFFFFFF,B6:function(Ay,aClip,aOffset,Am,aBlend){var
A;var Dh=this.EU;var Di=this.EV;var CW=B.aak(this.Au,aOffset);var CX=B.aak(this.
Av,aOffset);var DU;var DV;var AU=this.B2;if(B.z8(CW,CX))return;aBlend=aBlend&&((
this.F&0x2)===0x2);Am=Am+1;DU=DV=AU;if(Am<256){DU=(DU&0x00FFFFFF)|((((Am*((DU>>24
)&0xFF))>>8)&0xFF)<<24);DV=(DV&0x00FFFFFF)|((((Am*((DV>>24)&0xFF))>>8)&0xFF)<<24
);}if((Dh===1)&&(Di===1))Ay.Jd(aClip,CW,CX,DU,DV,aBlend);else Ay.Je(aClip,CW,CX,
Dh,Di,DU,DV,aBlend);},GetExtent:function(){var Dh=this.EU;var Di=this.EV;var CW=
this.Au;var CX=this.Av;if(((Dh===1)&&(Di===1))||B.z8(CW,CX))return B.Core.EP.GetExtent.
call(this);var DD=Dh/2;var DE=Di/2;var Es=CW[0];var Et=CW[1];var Eu=CX[0];var Ev=
CX[1];var BO=Eu-Es;var BP=Ev-Et;var E_=Math.sqrt((BO*BO)+(BP*BP));BO=BO/E_;BP=BP
/E_;var Is=Es+(BP*DD);var It=Et-(BO*DD);var GH=Eu+(BP*DE);var GI=Ev-(BO*DE);var GJ=
Eu-(BP*DE);var GK=Ev+(BO*DE);var GL=Es-(BP*DD);var GM=Et+(BO*DD);var left=Is;var
right=Is;var top=It;var bottom=It;if(GH<left)left=GH;if(GJ<left)left=GJ;if(GL<left
)left=GL;if(GH>right)right=GH;if(GJ>right)right=GJ;if(GL>right)right=GL;if(GI<top
)top=GI;if(GK<top)top=GK;if(GM<top)top=GM;if(GI>bottom)bottom=GI;if(GK>bottom)bottom=
GK;if(GM>bottom)bottom=GM;var AN=[left|0,top|0,right|0,bottom|0];AN=[].concat(AN.
slice(0,2),B.aak(AN.slice(2,4),AF));return AN;},CU:function(AO){var A;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());},JD:function(D){var A;if(D<
1)D=1;if(D===this.EV)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent(
));this.EV=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());if(((
D!==1)||(this.EU!==1))&&!this.BU){this.BU=B.zW(B.abg.Fu);if(this.BU.DO)B.y_([this
,this.CU],this.BU,0);}if(((D===1)&&(this.EU===1))&&!!this.BU){if(this.BU.DO)B.zl([
this,this.CU],this.BU,0);this.BU=null;}},JC:function(D){var A;if(D<1)D=1;if(D===
this.EU)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());this.
EU=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());if(((D!==1)||(
this.EV!==1))&&!this.BU){this.BU=B.zW(B.abg.Fu);if(this.BU.DO)B.y_([this,this.CU
],this.BU,0);}if(((D===1)&&(this.EV===1))&&!!this.BU){if(this.BU.DO)B.zl([this,this.
CU],this.BU,0);this.BU=null;}},B3:function(D){var A;if(D===this.B2)return;this.B2=
D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());},Ju:function(){
var A;return((this.F&0x1)===0x1);},Hk:function(D){if(D)this.Cd(0x1,0x0);else this.
Cd(0x0,0x1);},_Init:function(aArg){B.Core.EP._Init.call(this,aArg);this.__proto__=
C.Hc;},_Mark:function(E){var A;B.Core.EP._Mark.call(this,E);if((A=this.BU)&&(A._cycle
!=E))A._Mark(A._cycle=E);},_className:"Views::Line"};C.Aw={B2:0xFFFFFFFF,B6:function(
Ay,aClip,aOffset,Am,aBlend){var A;var BF;var BG;var BD;var BE;var AU=this.B2;aBlend=
aBlend&&((this.F&0x2)===0x2);Am=Am+1;BF=BG=BD=BE=AU;if(Am<256){BF=(BF&0x00FFFFFF
)|((((Am*((BF>>24)&0xFF))>>8)&0xFF)<<24);BG=(BG&0x00FFFFFF)|((((Am*((BG>>24)&0xFF
))>>8)&0xFF)<<24);BD=(BD&0x00FFFFFF)|((((Am*((BD>>24)&0xFF))>>8)&0xFF)<<24);BE=(
BE&0x00FFFFFF)|((((Am*((BE>>24)&0xFF))>>8)&0xFF)<<24);}Ay.Gj(aClip,B.aam(this.M,
aOffset),BF,BG,BE,BD,aBlend);},B3:function(D){var A;if(D===this.B2)return;this.B2=
D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.M);},_Init:function(aArg){B.Core.
Bb._Init.call(this,aArg);this.__proto__=C.Aw;},_className:"Views::Rectangle"};C.
A0={timer:null,At:null,AS:0,DS:0,B2:0xFFFFFFFF,B1:0x12,Dk:false,Gf:false,B6:function(
Ay,aClip,aOffset,Am,aBlend){var A;var Dc=0;if(this.DS>=0)Dc=this.DS;if(!this.At||(
Dc>=this.At.NoOfFrames))return;this.At.Update();var N=this.C0();var Br=this.At.FrameSize;
if((N[0]>=N[2])||(N[1]>=N[3]))return;var BF;var BG;var BE;var BD;var AU=this.B2;
var CV=(((Am+1)*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);BF=BG=BD=BE=AU;if(
CV<256){BF=(BF&0x00FFFFFF)|((((((BF>>24)&0xFF)*CV)>>8)&0xFF)<<24);BG=(BG&0x00FFFFFF
)|((((((BG>>24)&0xFF)*CV)>>8)&0xFF)<<24);BE=(BE&0x00FFFFFF)|((((((BE>>24)&0xFF)*
CV)>>8)&0xFF)<<24);BD=(BD&0x00FFFFFF)|((((((BD>>24)&0xFF)*CV)>>8)&0xFF)<<24);}if(
B.z8([N[2]-N[0],N[3]-N[1]],Br))Ay.H0(aClip,this.At,Dc,B.aam(this.M,aOffset),B.aaj(
this.M.slice(0,2),N.slice(0,2)),BF,BG,BE,BD,aBlend);else Ay.JI(aClip,this.At,Dc,
B.aam(N,aOffset),[].concat(AB,Br),BF,BG,BE,BD,aBlend,true);},CU:function(AO){var
A;if(((this.Gf&&!!this.At)&&(this.At.FrameSize[0]>0))&&(this.At.FrameSize[1]>0))
this.Al(this.C0());if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.M);},Cc:function(
AO){var A;var Dc=this.DS;var Fa=0;if(!!this.At)Fa=this.At.NoOfFrames*this.At.FrameDelay;
if((!!this.timer&&(this.DS<0))&&(Fa>0))this.AS=this.timer.Ad;if(!!this.timer&&(Fa>
0)){var S=(this.timer.Ad-this.AS)|0;Dc=(S/this.At.FrameDelay)|0;if(S>=Fa){Dc=Dc%
this.At.NoOfFrames;this.AS=this.timer.Ad-(S%Fa);}}if(((Dc!==this.DS)&&!!this.G)&&((
this.F&0x1)===0x1))this.G.Ab(this.M);this.DS=Dc;if(!Fa&&!!this.timer){B.zl([this
,this.Cc],this.timer,0);this.timer=null;}},Hg:function(D){if(D===this.Gf)return;
this.Gf=D;if(((D&&!!this.At)&&(this.At.FrameSize[0]>0))&&(this.At.FrameSize[1]>0
))this.Al(this.C0());},B3:function(D){var A;if(D===this.B2)return;this.B2=D;if(!
!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.M);},H7:function(D){var A;if(this.Dk===
D)return;this.Dk=D;this.DS=-1;if(!D&&!!this.timer){B.zl([this,this.Cc],this.timer
,0);this.timer=null;}if(D){this.timer=B._GetAutoObject(B.abk.D9);B.y_([this,this.
Cc],this.timer,0);B.ow([this,this.Cc],this);}if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ab(this.M);},Cr:function(D){var A;if(D===this.B1)return;this.B1=D;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ab(this.M);},D$:function(D){var A;if(D===this.At)return;
if(!!this.At&&this.At.DO)B.zl([this,this.CU],this.At,0);this.At=D;this.DS=-1;if(
!!D&&D.DO)B.y_([this,this.CU],D,0);if(this.Dk){this.H7(false);this.H7(true);}if(((
this.Gf&&!!D)&&(D.FrameSize[0]>0))&&(D.FrameSize[1]>0))this.Al(this.C0());if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ab(this.M);},C0:function(){var A;if(!this.At)return CI;
var W=this.B1;var Br=this.At.FrameSize;var U=this.M;var width=U[2]-U[0];var height=
U[3]-U[1];if(!Br[0]||!Br[1])return CI;var Ae=[0,0,width,height];var P=Ae;if(((W&
0x40)===0x40)){var HR=((((Ae[2]-Ae[0])<<16)+((Br[0]/2)|0))/Br[0])|0;var F_=((((Ae[
3]-Ae[1])<<16)+((Br[1]/2)|0))/Br[1])|0;var DL=HR;if(F_>DL)DL=F_;P=B.aaO(P,((Br[0
]*DL)+32768)>>16);P=B.aaL(P,((Br[1]*DL)+32768)>>16);}else if(((W&0x80)===0x80)){
var HR=((((Ae[2]-Ae[0])<<16)+((Br[0]/2)|0))/Br[0])|0;var F_=((((Ae[3]-Ae[1])<<16
)+((Br[1]/2)|0))/Br[1])|0;var DL=HR;if(F_<DL)DL=F_;P=B.aaO(P,((Br[0]*DL)+32768)>>
16);P=B.aaL(P,((Br[1]*DL)+32768)>>16);}else if(!((W&0x100)===0x100))P=B.aaN(P,Br
);if((P[2]-P[0])!==(Ae[2]-Ae[0])){if(((W&0x4)===0x4))P=B.aaP(P,Ae[2]-(P[2]-P[0])
);else if(((W&0x2)===0x2))P=B.aaP(P,(Ae[0]+(((Ae[2]-Ae[0])/2)|0))-(((P[2]-P[0])/
2)|0));}if((P[3]-P[1])!==(Ae[3]-Ae[1])){if(((W&0x20)===0x20))P=B.aaR(P,Ae[3]-(P[
3]-P[1]));else if(((W&0x10)===0x10))P=B.aaR(P,(Ae[1]+(((Ae[3]-Ae[1])/2)|0))-(((P[
3]-P[1])/2)|0));}P=B.aam(P,U.slice(0,2));return P;},_Init:function(aArg){B.Core.
Bb._Init.call(this,aArg);this.__proto__=C.A0;},_Mark:function(E){var A;B.Core.Bb.
_Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
At)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};C.Text={C2:null
,Ak:null,Fq:null,Aa:B.jm,String:B.jm,EH:B.vw,Dp:B.vw,B1:0x12,B2:0xFFFFFFFF,Fv:false
,BR:false,CC:function(){},B6:function(Ay,aClip,aOffset,Am,aBlend){var A;if((this.
Aa===B.jm)||!this.Ak)return;var W=this.B1;var font=this.Ak;var Ae=B.aam(this.M,aOffset
);var BF;var BG;var BE;var BD;var col=this.B2;var CV=(((Am+1)*255)>>8)+1;var Cm=
this.Aa.charCodeAt(0)||0;var N=B.aam(this.C0(),aOffset);var Df=[Ae[0]-N[0],(Ae[1
]-N[1])-font.Ascent];if(Cm<1)return;BF=BG=BD=BE=col;if(CV<256){BF=(BF&0x00FFFFFF
)|((((((BF>>24)&0xFF)*CV)>>8)&0xFF)<<24);BG=(BG&0x00FFFFFF)|((((((BG>>24)&0xFF)*
CV)>>8)&0xFF)<<24);BE=(BE&0x00FFFFFF)|((((((BE>>24)&0xFF)*CV)>>8)&0xFF)<<24);BD=(
BD&0x00FFFFFF)|((((((BD>>24)&0xFF)*CV)>>8)&0xFF)<<24);}if(((W&0x80)===0x80)){if(
this.Gl())W=(W&~0x80)|0x4;else W=(W&~0x80)|0x1;}if((Cm===1)&&!((W&0x40)===0x40)){
Ay.H2(aClip,font,this.Aa,2,(this.Aa.charCodeAt(1)||0)-1,Ae,Df,0,0,BF,BG,BE,BD,true
);return;}var leading=font.Leading;var DK=(font.Ascent+font.Descent)+leading;var
Ko=aClip[1]-N[1];var Kp=aClip[3]-N[1];var Hz=N[2]-N[0];var y=0;var i=1;var AU=this.
Aa.charCodeAt(1)||0;while(((y+DK)<Ko)&&(AU>0)){i=i+AU;y=y+DK;AU=this.Aa.charCodeAt(
i)||0;}while((y<Kp)&&(AU>0)){var Ez=B.aaj(Df,[0,y]);var D2=0;var BJ=false;if(((((
W&0x40)===0x40)&&((this.Aa.charCodeAt((i+AU)-1)||0)!==0x0A))&&((this.Aa.charCodeAt(
i+1)||0)!==0x0A))&&((this.Aa.charCodeAt(i+AU)||0)!==0x00))BJ=true;if(BJ&&!!(W&0x6
)){var IZ=i+AU;var Iq=this.Aa.indexOf(String.fromCharCode(0x20),i+1);var Ir=this.
Aa.indexOf(String.fromCharCode(0xA0),i+1);if(((Iq<0)||(Iq>=IZ))&&((Ir<0)||(Ir>=IZ
)))BJ=false;}if(BJ)D2=Hz;else if(((W&0x4)===0x4))Ez=[(Ez[0]-Hz)+font.EM(this.Aa,
i+1,AU-1),Ez[1]];else if(((W&0x2)===0x2))Ez=[(Ez[0]-((Hz/2)|0))+((font.EM(this.Aa
,i+1,AU-1)/2)|0),Ez[1]];Ay.H2(aClip,font,this.Aa,i+1,AU-1,Ae,Ez,D2,0,BF,BG,BE,BD
,true);i=i+AU;y=y+DK;AU=this.Aa.charCodeAt(i)||0;}},Al:function(D){var A;if(B.z9(
D,this.M))return;var IY;IY=((A=this.M)[2]-A[0])!==(D[2]-D[0]);if(((IY&&this.Fv)&&
this.BR)&&!((this.F&0x2000)===0x2000)){this.Aa=B.jm;this.BR=false;B.ow([this,this.
G1],this);}B.Core.Bb.Al.call(this,D);B.ow([this,this.G0],this);},G0:function(AO){
B.ow(this.Fq,this);},G1:function(AO){B.ow([this,this.D1],this);},KF:function(AO){
this.ER(this.C2.Ac);},KG:function(AO){var A;var N=this.C0();var GZ=this.M.slice(
0,2);if(N[0]>GZ[0])N=[].concat(GZ[0],N.slice(1,4));if(N[1]>GZ[1])N=B.aaS(N,GZ[1]
);var AA=B.aaj(N.slice(0,2),this.M.slice(0,2));var Ex=B.aaj([(A=this.M)[2]-A[0],
A[3]-A[1]],[N[2]-N[0],N[3]-N[1]]);if(Ex[0]>0)Ex=[0,Ex[1]];if(Ex[1]>0)Ex=[Ex[0],0
];this.C2.Ac=this.Dp;this.C2.A7=B.aaj(B.aak(this.Dp,Ex),AA);this.C2.A6=B.aaj(this.
Dp,AA);},D1:function(AO){var A;if(this.BR)return;var width=(A=this.M)[2]-A[0];var
De=-1;var font=this.Ak;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(
this.Fv){De=width;if(De<0)De=1;}this.BR=true;if((this.String!==B.jm)&&!!font){var
length=this.String.length;this.Aa=font.JG(this.String,0,De,length,null);}else this.
Aa=B.jm;this.EH=AB;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.M);B.ow([this
,this.G0],this);},Jz:function(D){if(B.z$(D,this.Fq))return;this.Fq=D;if(this.Fv||
!!D)this.F=this.F&~0x100;else this.F=this.F|0x100;},JB:function(D){if(D===this.C2
)return;if(!!D&&!!D.Fb){B.aa8("%s%*%s",Ed,D,Ee);throw new Error(Ef);}if(!!this.C2
){this.C2.G2=null;this.C2.Fb=null;}this.C2=D;if(!!D){D.G2=[this,this.KG];D.Fb=[this
,this.KF];}},JE:function(D){if(D===this.Fv)return;this.Fv=D;if(this.BR){this.Aa=
B.jm;this.BR=false;B.ow([this,this.G1],this);}if(D||!!this.Fq)this.F=this.F&~0x100;
else this.F=this.F|0x100;},ER:function(D){var A;if(B.z8(D,this.Dp))return;this.Dp=
D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.M);if(this.BR)B.ow([this,this.
G0],this);},Cr:function(D){var A;if(D===this.B1)return;this.B1=D;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ab(this.M);if(this.BR)B.ow([this,this.G0],this);},BL:function(
D){if(D===this.String)return;this.String=D;this.Aa=B.jm;this.BR=false;B.ow([this
,this.G1],this);},Cg:function(D){if(D===this.Ak)return;this.Ak=D;this.Aa=B.jm;this.
BR=false;B.ow([this,this.G1],this);},B3:function(D){var A;if(D===this.B2)return;
this.B2=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.M);},Gl:function(){if(
!this.BR)this.D1(this);return false;},Ic:function(C3){if((this.String===B.jm)||!
this.Ak)return AB;if(!this.BR)this.D1(this);if(C3<0)C3=0;var Kv=(this.Aa.charCodeAt(
0)||0)-1;var Bv=this.Aa.charCodeAt(1)||0;var V=1;var Fc=2;var A5=0;var col=-1;var
C8=true;C3=C3+2;while((A5<Kv)&&((V+Bv)<=C3)){V=V+Bv;A5=A5+1;Fc=Fc+1;C3=C3+1;Bv=this.
Aa.charCodeAt(V)||0;}if(C3>(V+Bv))C3=V+Bv;for(;C3>V;V=V+1){var Az=this.Aa.charCodeAt(
V+1)||0;if(C8)col=col+1;C8=(Az!==0xFEFF)&&(Az!==0x0A);}return[col,A5];},Fs:function(
FF){if((this.String===B.jm)||!this.Ak)return 0;if(!this.BR)this.D1(this);var A5=
FF[1];var col=FF[0];var V=1;var Fc=2;var Cm=this.Aa.charCodeAt(0)||0;var Bv=this.
Aa.charCodeAt(1)||0;if(A5>=Cm){A5=Cm-1;col=this.Aa.length;}if(A5<0){A5=0;col=0;}
if(col<0)col=0;while((A5>0)&&(Bv>0)){V=V+Bv;A5=A5-1;Fc=Fc+1;Bv=this.Aa.charCodeAt(
V)||0;}var CR=V;var FY=false;while((col>=0)&&(Bv>1)){var Az=this.Aa.charCodeAt(V+
1)||0;V=V+1;Bv=Bv-1;FY=(Az===0xFEFF)||(Az===0x0A);if(!FY){col=col-1;CR=V;}}if((!
FY&&(col>=0))&&((this.Aa.charCodeAt(V+1)||0)===0x00))FY=true;if(FY)CR=CR+1;CR=CR-
Fc;return CR;},Gs:function(Bt){var A;if((this.String===B.jm)||!this.Ak)return AB;
if(!this.BR)this.D1(this);var N=this.C0();if((N[0]>=N[2])||(N[1]>=N[3]))return AB;
var font=this.Ak;var W=this.B1;var Cm=this.Aa.charCodeAt(0)||0;var leading=font.
Leading;if(Bt[1]<N[1])Bt=[Bt[0],N[1]];if(Bt[1]>=N[3])Bt=[Bt[0],N[3]-1];var DK=(font.
Ascent+font.Descent)+leading;var A5=((Bt[1]-N[1])/DK)|0;var Bw=this.G$(A5);var Bv=
Bw.length;var BJ=false;if(((W&0x80)===0x80)){if(this.Gl())W=(W&~0x80)|0x4;else W=(
W&~0x80)|0x1;}if(((W&0x40)===0x40)&&(A5<(Cm-1)))BJ=true;if((BJ&&(Bw.indexOf(String.
fromCharCode(0x20),0)<0))&&(Bw.indexOf(String.fromCharCode(0xA0),0)<0))BJ=false;
if(BJ){var V=1;var EE=A5;while(EE>0){V=V+(this.Aa.charCodeAt(V)||0);EE=EE-1;}if(((
this.Aa.charCodeAt(V+1)||0)===0x0A)||((this.Aa.charCodeAt((V+(this.Aa.charCodeAt(
V)||0))-1)||0)===0x0A))BJ=false;}var D2=0;var x=0;if(BJ)D2=N[2]-N[0];else if(((W&
0x4)===0x4))x=(N[2]-N[0])-font.EM(Bw,0,Bv);else if(((W&0x2)===0x2))x=(((N[2]-N[0
])/2)|0)-((font.EM(Bw,0,Bv)/2)|0);var col=font.Jh(Bw,0,Bv,(Bt[0]-N[0])-x,D2);if(
col<0)col=0;return[col,A5];},Hp:function(FF){var A;if((this.String===B.jm)||!this.
Ak)return AB;if(!this.BR)this.D1(this);var Cm=this.Aa.charCodeAt(0)||0;var font=
this.Ak;var W=this.B1;var A5=FF[1];var col=FF[0];if(A5>=Cm){A5=Cm-1;col=this.Aa.
length;}if(A5<0){A5=0;col=0;}var Bw=this.G$(A5);var Bv=Bw.length;var N=this.C0();
var BJ=false;var leading=font.Leading;if(((W&0x80)===0x80)){if(this.Gl())W=(W&~0x80
)|0x4;else W=(W&~0x80)|0x1;}if(((W&0x40)===0x40)&&(A5<(Cm-1)))BJ=true;if((BJ&&(Bw.
indexOf(String.fromCharCode(0x20),0)<0))&&(Bw.indexOf(String.fromCharCode(0xA0),
0)<0))BJ=false;if(BJ){var V=1;var EE=A5;while(EE>0){V=V+(this.Aa.charCodeAt(V)||
0);EE=EE-1;}if(((this.Aa.charCodeAt(V+1)||0)===0x0A)||((this.Aa.charCodeAt((V+(this.
Aa.charCodeAt(V)||0))-1)||0)===0x0A))BJ=false;}var y=(N[1]+(A5*((font.Ascent+font.
Descent)+leading)))+font.Ascent;var D2=0;var x=N[0];if(BJ)D2=N[2]-N[0];else if(((
W&0x4)===0x4))x=N[2]-font.EM(Bw,0,Bv);else if(((W&0x2)===0x2))x=(x+(((N[2]-N[0])
/2)|0))-((font.EM(Bw,0,Bv)/2)|0);var pos=font.Jg(Bw,0,Bv,col,D2);if(pos<0)pos=0;
return[x+pos,y];},G$:function(FE){if((this.String===B.jm)||!this.Ak)return B.jm;
if(!this.BR)this.D1(this);var Cm=this.Aa.charCodeAt(0)||0;var V=1;if((!this.Ak||(
FE<0))||(FE>=Cm))return B.jm;while(FE>0){V=V+(this.Aa.charCodeAt(V)||0);FE=FE-1;
}var EF=V;var E5=V+(this.Aa.charCodeAt(V)||0);var Az=0x00;do{EF=EF+1;Az=this.Aa.
charCodeAt(EF)||0;}while(((Az===0xFEFF)||(Az===0x0A))&&(EF<=E5));do{E5=E5-1;Az=this.
Aa.charCodeAt(E5)||0;}while(((Az===0xFEFF)||(Az===0x0A))&&(EF<=E5));var Bw=B.aaY(
this.Aa,EF,(E5-EF)+1);var Ew;for(Ew=Bw.indexOf(String.fromCharCode(0xFEFF),0);Ew>=
0;Ew=Bw.indexOf(String.fromCharCode(0xFEFF),Ew+1)){var CR=Ew+1;while((Bw.charCodeAt(
CR)||0)===0xFEFF)CR=CR+1;Bw=B.aa3(Bw,Ew,CR-Ew);}return Bw;},C0:function(){var A;
if((this.String===B.jm)||!this.Ak)return CI;if(!this.BR)this.D1(this);if(this.Aa===
B.jm)return CI;var leading=this.Ak.Leading;var KI=(this.Ak.Ascent+this.Ak.Descent
)+this.Ak.Leading;if(B.z8(this.EH,AB))this.EH=[this.Ak.Jf(this.Aa),this.EH[1]];this.
EH=[this.EH[0],((this.Aa.charCodeAt(0)||0)*KI)-leading];var W=this.B1;var U=this.
M;var width=U[2]-U[0];var height=U[3]-U[1];var Ae=[0,0,width,height];var P=[].concat(
Ae.slice(0,2),B.aak(Ae.slice(0,2),this.EH));if(((W&0x80)===0x80)){if(this.Gl())W=(
W&~0x80)|0x4;else W=(W&~0x80)|0x1;}if(((W&0x40)===0x40)){var De;De=width;if(De<0
)De=0;if(De>(P[2]-P[0]))P=B.aaO(P,De);}if((!!(W&0x110)&&!!(W&0x28))&&((P[3]-P[1]
)>(Ae[3]-Ae[1])))W&=~0x110;if(!!(W&0x110))W&=~0x28;if((((W&0x2)===0x2)&&!!(W&0x5
))&&((P[2]-P[0])>(Ae[2]-Ae[0])))W&=~0x2;if(((W&0x2)===0x2))W&=~0x5;if((P[2]-P[0]
)!==(Ae[2]-Ae[0])){if(((W&0x4)===0x4))P=B.aaP(P,Ae[2]-(P[2]-P[0]));else if(((W&0x2
)===0x2))P=B.aaP(P,(Ae[0]+(((Ae[2]-Ae[0])/2)|0))-(((P[2]-P[0])/2)|0));}if((P[3]-
P[1])!==(Ae[3]-Ae[1])){if(((W&0x20)===0x20))P=B.aaR(P,Ae[3]-(P[3]-P[1]));else if(((
W&0x100)===0x100))P=B.aaR(P,((Ae[1]+(((Ae[3]-Ae[1])/2)|0))-(((P[3]-P[1])/2)|0))+(((
this.Ak.Descent-this.Ak.Ascent)/2)|0));else if(((W&0x10)===0x10))P=B.aaR(P,(Ae[1
]+(((Ae[3]-Ae[1])/2)|0))-(((P[3]-P[1])/2)|0));}P=B.aam(P,U.slice(0,2));return B.
aam(P,this.Dp);},_Init:function(aArg){B.Core.Bb._Init.call(this,aArg);this.__proto__=
C.Text;},_Done:function(){this.CC();this.__proto__=B.Core.Bb;B.Core.Bb._Done.call(
this);},_Mark:function(E){var A;B.Core.Bb._Mark.call(this,E);if((A=this.C2)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Fq)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Text"
};C.DQ={DT:B.vw,Ah:B.aan(4,3,0,null),Ec:B.vx,B$:0,EA:0,Hm:true,Eb:function(D){if(
B.z8(D,this.Ba))return;B.Core.CH.Eb.call(this,D);this.Ah.Set(3,0,D[0]);this.Ah.Set(
3,1,D[1]);this.Ah.Set(3,2,1);this.B$=0x45;B.ow([this,this.EX],this);},DP:function(
D){if(B.z8(D,this.Bl))return;B.Core.CH.DP.call(this,D);this.Ah.Set(2,0,D[0]);this.
Ah.Set(2,1,D[1]);this.Ah.Set(2,2,1);this.B$=0x45;B.ow([this,this.EX],this);},Cs:
function(D){if(B.z8(D,this.Av))return;B.Core.CH.Cs.call(this,D);this.Ah.Set(1,0,
D[0]);this.Ah.Set(1,1,D[1]);this.Ah.Set(1,2,1);this.B$=0x45;B.ow([this,this.EX],
this);},CG:function(D){if(B.z8(D,this.Au))return;B.Core.CH.CG.call(this,D);this.
Ah.Set(0,0,D[0]);this.Ah.Set(0,1,D[1]);this.Ah.Set(0,2,1);this.B$=0x45;B.ow([this
,this.EX],this);},Km:function(){return;},HU:function(AO){var A;if(this.B$===0x00
)return;if(this.B$===0x45){var CS=B._NewObject(B.Graphics.Ig,0);CS=CS.Ja(this.Ah.
Get(0,0),this.Ah.Get(0,1),this.Ah.Get(1,0),this.Ah.Get(1,1),this.Ah.Get(2,0),this.
Ah.Get(2,1),this.Ah.Get(3,0),this.Ah.Get(3,1));if(!!CS){CS.Gg(0,0);this.Ah.Set(0
,2,CS.Fw*240);CS.Gg(1,0);this.Ah.Set(1,2,CS.Fw*240);CS.Gg(1,1);this.Ah.Set(2,2,CS.
Fw*240);CS.Gg(0,1);this.Ah.Set(3,2,CS.Fw*240);}this.Km();}this.EA=this.B$;this.B$=
0x00;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());},EX:function(
KO){this.HU(KO);},H9:function(D){var A;if(D===this.Hm)return;this.Hm=D;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());},H_:function(D){var A;if(B.
z9(D,this.Ec))return;this.Ec=D;if((((this.EA===0x45)&&(this.B$===0x00))&&!!this.
G)&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());if((this.EA!==0x45)&&(this.
B$===0x00)){this.B$=this.EA;B.ow([this,this.EX],this);}},_Init:function(aArg){B.
Core.CH._Init.call(this,aArg);(this.Ah=[]).__proto__=C.DQ.Ah;this.__proto__=C.DQ;
this.F=0x3;},_className:"Views::WarpView"};C.BV={An:null,bitmap:null,Af:null,Ix:
1,Iy:0,Iz:0,IA:0,IB:1,IC:0,ID:0,IE:0,IF:1,Hl:255,HL:false,B6:function(Ay,aClip,aOffset
,Am,aBlend){var A;if(!this.bitmap)return;this.bitmap.Update();var Cw=aOffset[0];
var Cx=aOffset[1];var N=B.z6(this.Ec,[].concat(AB,this.DT));aBlend=aBlend&&((this.
F&0x2)===0x2);Am=Am+1;var II;var IJ;var IK;var IL;var Kx=this.Hl;II=IJ=IK=IL=Kx;
var DU=255|(255<<8)|(255<<16)|((((Am*II)>>8)&0xFF)<<24);var DV=255|(255<<8)|(255<<
16)|((((Am*IJ)>>8)&0xFF)<<24);var Kk=255|(255<<8)|(255<<16)|((((Am*IK)>>8)&0xFF)<<
24);var Kl=255|(255<<8)|(255<<16)|((((Am*IL)>>8)&0xFF)<<24);aClip=B.z6(aClip,B.aam(
CI,aOffset));Ay.JK(aClip,this.bitmap,0,this.Ah.Get(0,0)+Cw,this.Ah.Get(0,1)+Cx,this.
Ah.Get(0,2),this.Ah.Get(1,0)+Cw,this.Ah.Get(1,1)+Cx,this.Ah.Get(1,2),this.Ah.Get(
2,0)+Cw,this.Ah.Get(2,1)+Cx,this.Ah.Get(2,2),this.Ah.Get(3,0)+Cw,this.Ah.Get(3,1
)+Cx,this.Ah.Get(3,2),N,DU,DV,Kk,Kl,aBlend,this.Hm);},AK:function(Z){if(!this.Af||
!this.An)return null;var K=(B.Core.CY.isPrototypeOf(Z)?Z:null);var Ao=(B.Core.EJ.
isPrototypeOf(Z)?Z:null);if(!K&&!Ao)return null;var AA=AB;var O=this.An.G;while(
!!O&&(O!==this.Af)){AA=B.aaj(AA,O.M.slice(0,2));O=O.G;}var H=this.An;if(!!K&&!K.
Down)this.An=null;if(!!K){K.AT=B.aak(this.E$(K.AT),AA);K.By=B.aak(this.E$(K.By),
AA);return H.AK(K);}if(!!Ao){var KA=B.aak(this.E$(B.aaj(Ao.AT,Ao.Ac)),AA);Ao.AT=
B.aak(this.E$(Ao.AT),AA);Ao.By=B.aak(this.E$(Ao.By),AA);Ao.Ac=B.aaj(Ao.AT,KA);return H.
AK(Ao);}return C.DQ.AK.call(this,Z);},Cz:function(T,J,BC,CJ,CK,C5){var A;if(!this.
Af||!((this.Af.F&0x18)===0x18))return null;var pos=B.zT(T);pos=this.E$(pos);var Cb=
B.z6(this.Ec,[].concat(AB,this.DT));if(!B.vt(Cb,pos))return null;var A2=this.Af.
Cz(B.aam(B.aam([0,0,T[2]-T[0],T[3]-T[1]],pos),this.Af.M.slice(0,2)),J,BC,CJ,null
,C5);if(!!A2)this.An=A2.Be;else this.An=null;if(!!this.An)return B._NewObject(B.
Core.Fj,0).Initialize(this,AB);return null;},HU:function(AO){C.DQ.HU.call(this,AO
);this.HL=false;},KW:function(){var x1=this.Ah.Get(0,0);var y1=this.Ah.Get(0,1);
var x2=this.Ah.Get(1,0);var y2=this.Ah.Get(1,1);var x3=this.Ah.Get(2,0);var y3=this.
Ah.Get(2,1);var x4=this.Ah.Get(3,0);var y4=this.Ah.Get(3,1);var FK=x2-x3;var FM=
y2-y3;var FL=x4-x3;var FN=y4-y3;var F$=((x1-x2)+x3)-x4;var Ga=((y1-y2)+y3)-y4;var
Eo=(FK*FN)-(FM*FL);if(!Eo)return;var E7=((F$*FN)-(Ga*FL))/Eo;var h=((FK*Ga)-(FM*
F$))/Eo;var Gw=(x2-x1)+(E7*x2);var GG=(x4-x1)+(h*x4);var AU=x1;var GO=(y2-y1)+(E7
*y2);var GS=(y4-y1)+(h*y4);var DW=y1;this.Ix=GS-(DW*h);this.Iy=(AU*h)-GG;this.Iz=(
GG*DW)-(AU*GS);this.IA=(DW*E7)-GO;this.IB=Gw-(AU*E7);this.IC=(AU*GO)-(Gw*DW);this.
ID=(GO*h)-(GS*E7);this.IE=(GG*E7)-(Gw*h);this.IF=(Gw*GS)-(GG*GO);this.HL=true;},
E$:function(A9){var A;if(!this.HL)this.KW();var HW=A9[0];var HX=A9[1];var Gd=((HW
*this.Ix)+(HX*this.Iy))+this.Iz;var Ge=((HW*this.IA)+(HX*this.IB))+this.IC;var HP=((
HW*this.ID)+(HX*this.IE))+this.IF;if(!!HP){Gd=Gd/HP;Ge=Ge/HP;}var Cb=B.z6(this.Ec
,[].concat(AB,this.DT));Gd=Gd*(Cb[2]-Cb[0]);Ge=Ge*(Cb[3]-Cb[1]);return B.aak([Gd|
0,Ge|0],Cb.slice(0,2));},CU:function(AO){var A;var IM=this.DT;if(!!this.Af)this.
bitmap=this.Af.AL;else this.bitmap=null;if(!!this.bitmap)this.DT=this.bitmap.FrameSize;
else this.DT=AB;if(((B.z8(IM,this.DT)||((this.EA===0x45)&&(this.B$===0x00)))&&!!
this.G)&&((this.F&0x1)===0x1))this.G.Ab(this.GetExtent());if(((this.EA!==0x45)&&(
this.B$===0x00))&&!B.z8(IM,this.DT)){this.B$=this.EA;B.ow([this,this.EX],this);}
},JA:function(D){var A;if(D===this.Hl)return;this.Hl=D;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ab(this.GetExtent());},H8:function(D){if(D===this.Af)return;if(!
!D&&(D===this.G))throw new Error(Eg);if(!!this.Af){B.zl([this,this.CU],this.Af,0
);this.bitmap=null;}this.Af=D;if(!!D){B.y_([this,this.CU],D,0);this.bitmap=D.AL;
}this.CU(this);},_Init:function(aArg){C.DQ._Init.call(this,aArg);this.__proto__=
C.BV;},_Mark:function(E){var A;C.DQ._Mark.call(this,E);if((A=this.An)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.bitmap)&&(A._cycle!=E))A._Mark(A._cycle=E);if((
A=this.Af)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::WarpGroup"};C.
Lh={I7:0x1,I6:0x2,I8:0x4,I$:0x8,I_:0x10,I9:0x20,LF:0x40,LG:0x80,LI:0x100};C.LJ={
I7:0x1,I6:0x2,I8:0x4,I$:0x8,I_:0x10,I9:0x20,K2:0x40,K1:0x80,K7:0x100};C.Lq={Lp:0
,LD:1,LB:2,LC:3};
C._Init=function(){C.Hc.__proto__=B.Core.EP;C.Aw.__proto__=B.Core.Bb;C.A0.__proto__=
B.Core.Bb;C.Text.__proto__=B.Core.Bb;C.DQ.__proto__=B.Core.CH;C.BV.__proto__=C.DQ;
};C._ReInit=function(){};C.BM=function(E){};return C;})();

/* Embedded Wizard */