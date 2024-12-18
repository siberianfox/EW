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
);if(EmWiApp.kh)throw new Error("The unit file 'Application.js' included twice!"
);EmWiApp.kh=(function(){var B=EmWiApp;var C={};
var AF=[0,0,900,580];var AB=[0,0,800,580];var CI=[0,550,15,580];var Ed=[548,0,900
,580];var Ee=[555,64,750,517];var Ef=[20,541];var Eg=[228,541];var Fx=[228,121];
var Eh=[20,121];var EW=[305,122,515,542];var Hr=[375,9,446,73];var JL=[383,14,438
,69];var JM=[674,9,774,39];var JN="Simulation";var JO=[755,80,810,106];var JP="Temp";
var JQ=[811,80,864,106];var Gv="25";var JR=[755,110,810,136];var JS="PM2.5";var JT=[
811,110,864,136];var JU=[755,141,810,167];var JV="AQI";var JW=[811,141,864,167];
var JX=[755,173,810,199];var JY="VOC";var JZ=[811,173,864,199];var Ih=[0,0,15,30
];var J0=[1,2,13,14];var J1=[2,16,12,25];var J2="0";var J3=[0,0,13,13];var Ii=[0
,0,210,420];var J4="Text";var Fy=[0,0];var J5=[20,20];var J6=[-10,-10];var Fz="%";
var J7="\n";var J8=[0,0,161,121];var Ij=[0,0,160,120];var J9=[0,120];var J_=[160
,120];var J$=[160,0];var Ka=[2,2,157,117];var Kb="Text\n";var Kc=[50,70];var Kd=[
50,50];
C.G7={D6:null,Cv:null,Aw:null,A0:null,BV:null,B9:null,Timer:null,ES:null,Dl:null,
Text:null,Dq:null,BB:null,Dr:null,Du:null,Ds:null,Dv:null,Dt:null,Dw:null,Bz:function(
aArg){},JJ:function(AO){var dots=B.aan(450,false,null);{var gl=B.ai;var x=0;var y=
0;var w=15;var h=30;var pixels=new Uint8Array(w*h*4);gl.readPixels(x,y,w,h,gl.RGBA
,gl.UNSIGNED_BYTE,pixels);for(var i=0;i<30;i++){for(var j=0;j<15;j++){var pixel_index=(
i*15+j)*4;if((pixels[pixel_index]>200)&&(pixels[pixel_index+1]>200)&&(pixels[pixel_index+
2]>200)){dots[(29-i)*15+j]=false;}else{dots[(29-i)*15+j]=true;}}}}var i;for(i=0;
i<450;i++)this.B9.FP.Set(i,dots.Get(i));this.B9.JH();},_Init:function(aArg){B.Core.
Root._Init.call(this,aArg);B.abh.Aw._Init.call(this.D6={X:this},0);C.Cv._Init.call(
this.Cv={X:this},0);B.abh.Aw._Init.call(this.Aw={X:this},0);B.abh.A0._Init.call(
this.A0={X:this},0);B.abh.BV._Init.call(this.BV={X:this},0);C.B9._Init.call(this.
B9={X:this},0);B.Core.Timer._Init.call(this.Timer={X:this},0);B.abh.Aw._Init.call(
this.ES={X:this},0);B.abh.A0._Init.call(this.Dl={X:this},0);B.abh.Text._Init.call(
this.Text={X:this},0);B.abh.Text._Init.call(this.Dq={X:this},0);C.EI._Init.call(
this.BB={X:this},0);B.abh.Text._Init.call(this.Dr={X:this},0);C.EI._Init.call(this.
Du={X:this},0);B.abh.Text._Init.call(this.Ds={X:this},0);C.EI._Init.call(this.Dv={
X:this},0);B.abh.Text._Init.call(this.Dt={X:this},0);C.EI._Init.call(this.Dw={X:
this},0);this.__proto__=C.G7;this.Al(AF);this.D6.Al(AB);this.D6.B3(0xFF000000);this.
Cv.Al(CI);this.Cv.Fo(true);this.Aw.Al(Ed);this.A0.Al(Ee);this.A0.Hg(true);this.A0.
Cr(0x52);this.BV.Eb(Ef);this.BV.DP(Eg);this.BV.Cs(Fx);this.BV.CG(Eh);this.BV.H9(
false);this.B9.Al(EW);this.Timer.Hj(100);this.Timer.Cf(true);this.ES.Al(Hr);this.
Dl.Al(JL);this.Dl.Hg(true);this.Dl.Cr(0x92);this.Text.Al(JM);this.Text.BL(JN);this.
Text.B3(0xFF000000);this.Dq.Al(JO);this.Dq.BL(JP);this.Dq.B3(0xFF000000);this.BB.
Al(JQ);this.BB.Cr(0x33);this.BB.BL(Gv);this.Dr.Al(JR);this.Dr.BL(JS);this.Dr.B3(
0xFF000000);this.Du.Al(JT);this.Du.Cr(0x33);this.Du.BL(Gv);this.Ds.Al(JU);this.Ds.
BL(JV);this.Ds.B3(0xFF000000);this.Dv.Al(JW);this.Dv.Cr(0x33);this.Dv.BL(Gv);this.
Dt.Al(JX);this.Dt.BL(JY);this.Dt.B3(0xFF000000);this.Dw.Al(JZ);this.Dw.Cr(0x33);
this.Dw.BL(Gv);this.AP(this.D6,0);this.AP(this.Cv,0);this.AP(this.Aw,0);this.AP(
this.A0,0);this.AP(this.BV,0);this.AP(this.B9,0);this.AP(this.ES,0);this.AP(this.
Dl,0);this.AP(this.Text,0);this.AP(this.Dq,0);this.AP(this.BB,0);this.AP(this.Dr
,0);this.AP(this.Du,0);this.AP(this.Ds,0);this.AP(this.Dv,0);this.AP(this.Dt,0);
this.AP(this.Dw,0);this.A0.D$(B.zW(B.abj.Hn));this.BV.H8(this.Cv);this.Timer.Gr=[
this,this.JJ];this.Dl.D$(B.zW(B.abj.HN));this.Text.Cg(B.zW(B.abg.Fl));this.Dq.Cg(
B.zW(B.abg.CZ));this.BB.Cg(B.zW(B.abg.CZ));this.Dr.Cg(B.zW(B.abg.CZ));this.Du.Cg(
B.zW(B.abg.CZ));this.Ds.Cg(B.zW(B.abg.CZ));this.Dv.Cg(B.zW(B.abg.CZ));this.Dt.Cg(
B.zW(B.abg.CZ));this.Dw.Cg(B.zW(B.abg.CZ));this.Bz(aArg);},_Done:function(){this.
__proto__=B.Core.Root;this.D6._Done();this.Cv._Done();this.Aw._Done();this.A0._Done(
);this.BV._Done();this.B9._Done();this.Timer._Done();this.ES._Done();this.Dl._Done(
);this.Text._Done();this.Dq._Done();this.BB._Done();this.Dr._Done();this.Du._Done(
);this.Ds._Done();this.Dv._Done();this.Dt._Done();this.Dw._Done();B.Core.Root._Done.
call(this);},_ReInit:function(){B.Core.Root._ReInit.call(this);this.D6._ReInit();
this.Cv._ReInit();this.Aw._ReInit();this.A0._ReInit();this.BV._ReInit();this.B9.
_ReInit();this.Timer._ReInit();this.ES._ReInit();this.Dl._ReInit();this.Text._ReInit(
);this.Dq._ReInit();this.BB._ReInit();this.Dr._ReInit();this.Du._ReInit();this.Ds.
_ReInit();this.Dv._ReInit();this.Dt._ReInit();this.Dw._ReInit();},_Mark:function(
E){var A;B.Core.Root._Mark.call(this,E);if((A=this.D6)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Cv)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Aw)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.A0)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BV)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.B9)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Timer
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.ES)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Dl)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Text)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Dq)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BB)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Dr)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Du)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Ds)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Dv
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Dt)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Dw)._cycle!=E)A._Mark(A._cycle=E);},_className:"Application::Application"
};C.Cv={Aw:null,A0:null,Text:null,Cq:null,BW:0,JF:function(D){if(this.BW===D)return;
this.BW=D;this.Text.BL(this.BW.toFixed());},Jv:function(){return this.BW;},_Init:
function(aArg){B.Core.Af._Init.call(this,aArg);B.abh.Aw._Init.call(this.Aw={X:this
},0);B.abh.A0._Init.call(this.A0={X:this},0);B.abh.Text._Init.call(this.Text={X:
this},0);B.abk.Cq._Init.call(this.Cq={X:this},0);this.__proto__=C.Cv;this.Al(Ih);
this.Aw.Al(Ih);this.A0.Al(J0);this.A0.Hg(false);this.A0.B3(0xFF3B45D1);this.Text.
Al(J1);this.Text.BL(J2);this.Text.B3(0xFF000000);this.Cq.Hh(99000);this.Cq.Cf(true
);this.Cq.Ft=99;this.AP(this.Aw,0);this.AP(this.A0,0);this.AP(this.Text,0);this.
A0.D$(B.zW(B.abj.Hy));this.Text.Cg(B.zW(B.abg.G8));this.Cq.C1=[this,this.Jv,this.
JF];},_Done:function(){this.__proto__=B.Core.Af;this.Aw._Done();this.A0._Done();
this.Text._Done();this.Cq._Done();B.Core.Af._Done.call(this);},_ReInit:function(
){B.Core.Af._ReInit.call(this);this.Aw._ReInit();this.A0._ReInit();this.Text._ReInit(
);this.Cq._ReInit();},_Mark:function(E){var A;B.Core.Af._Mark.call(this,E);if((A=
this.Aw)._cycle!=E)A._Mark(A._cycle=E);if((A=this.A0)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Text)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cq)._cycle!=E)A._Mark(
A._cycle=E);},_className:"Application::dot_matrix_emulation"};C.B9={dots:B.aan(450
,null,null),Aw:null,FP:B.aan(450,false,null),Bz:function(aArg){var A;var Bm;var i;
var j;for(i=0;i<30;(Bm=i+1,i=Bm&0xFFFF))for(j=0;j<15;(Bm=j+1,j=Bm&0xFFFF)){var H=
B._NewObject(B.abh.A0,0);H.Al(B.aam(J3,[j*14,i*14]));H.Cr(H.B1|0x80);H.Cr(H.B1|0x100
);if(this.FP.Get((i*15)+j))H.D$(B.zW(B.abj.GR));else H.D$(B.zW(B.abj.GQ));this.AP(
H,0);this.dots.Set((i*15)+j,H);}},JH:function(){var Bm;var i;for(i=0;i<450;(Bm=i+
1,i=Bm&0xFFFF))if(this.FP.Get(i))this.dots.Get(i).D$(B.zW(B.abj.GR));else this.dots.
Get(i).D$(B.zW(B.abj.GQ));},_Init:function(aArg){B.Core.Af._Init.call(this,aArg);
B.abh.Aw._Init.call(this.Aw={X:this},0);(this.dots=[]).__proto__=C.B9.dots;(this.
FP=[]).__proto__=C.B9.FP;this.__proto__=C.B9;this.Al(Ii);this.Aw.Al(Ii);this.AP(
this.Aw,0);this.Bz(aArg);},_Done:function(){this.__proto__=B.Core.Af;this.Aw._Done(
);B.Core.Af._Done.call(this);},_ReInit:function(){B.Core.Af._ReInit.call(this);this.
Aw._ReInit();},_Mark:function(E){var A;B.Core.Af._Mark.call(this,E);B.aaf(this.dots
,E);if((A=this.Aw)._cycle!=E)A._Mark(A._cycle=E);},_className:"Application::hardware_emulation"
};C.EI={CT:null,AX:null,Ak:null,Aw:null,B8:null,CA:null,D7:null,D8:null,D_:null,
DN:null,B4:null,Bc:null,Text:null,AZ:null,String:J4,Bj:0,B1:0x11,CL:false,Hq:function(
FG){var A;B.abi.BB.Hq.call(this,FG);if(((FG&0x40)===0x40))this.B8.Cf(true);else{
this.B8.Cf(false);this.AZ.Hk(false);}},I4:function(AO){var A;if(!this.AX)return;
var Cb=this.AX.Ec;var A$=this.AX.GetExtent();var U=this.M;var FI=this.AZ.Au;var Fd=
FI[0]-(((Cb[2]-Cb[0])/2)|0);if(Fd<0)Fd=0;if((Fd+(Cb[2]-Cb[0]))>(U[2]-U[0]))Fd=(U[
2]-U[0])-(Cb[2]-Cb[0]);this.AX.H_(B.aaM(this.AX.Ec,[Fd,FI[1]]));var Ks=(U[0]+FI[
0])-((FI[0]-Fd)*2);var Df=[Ks-A$[0],(U[1]+FI[1])-A$[3]];this.AX.EQ(Df,false);this.
CT.EQ(Df,false);},KY:function(AO){var A;var U=this.Text.M;var Cw=0;var Cx=0;if(this.
AZ.Au[0]<U[0])Cw=U[0]-this.AZ.Au[0];if(this.AZ.Au[0]>U[2])Cw=U[2]-this.AZ.Au[0];
if(this.AZ.Au[1]<U[1])Cx=U[1]-this.AZ.Au[1];if(this.AZ.Av[1]>U[3])Cx=U[3]-this.AZ.
Av[1];if(!!Cw||!!Cx)this.Text.ER(B.aak(this.Text.Dp,[Cw,Cx]));Cw=this.Text.Dp[0];
Cx=this.Text.Dp[1];var Br=[(A=this.Text.C0())[2]-A[0],A[3]-A[1]];if(Br[0]<=((A=this.
Text.M)[2]-A[0]))Cw=0;if(Br[1]<=((A=this.Text.M)[3]-A[1]))Cx=0;this.Text.ER([Cw,
Cx]);},G5:function(AO){if(!this.Ak)return;var KJ=this.Text.Ic(this.Bj);var pos=this.
Text.Hp(KJ);this.AZ.CG(B.aaj(pos,[0,this.Ak.Ascent]));this.AZ.Cs(B.aak(pos,[0,this.
Ak.Descent]));if(this.B8.CD){this.B8.Cf(false);this.B8.Cf(true);}if(this.CL){B.ow([
this,this.KY],this);this.CL=false;}if(!!this.AX)B.ow([this,this.I4],this);},KE:function(
AO){if(!!this.AX){this.G.H$(this.AX);this.G.H$(this.CT);this.AX=null;this.CT=null;
this.Fo(false);}},IR:function(AO){if(!!this.AX){var AY=this.Text.Gs(this.Bc.AT);
var BQ=this.Text.Fs(AY);var Az=this.Text.String.charCodeAt(BQ)||0;if(((Az===0x5E
)||(Az===0x7E))||(Az===0x25))BQ=BQ-1;if(BQ!==this.Bj){this.Bj=BQ;B.ow([this,this.
G5],this);this.CL=true;}}else{var Df=B.aaj(this.Bc.AT,this.Bc.By);if((((Df[0]<-8
)||(Df[0]>8))||(Df[1]<-8))||(Df[1]>8))this.EL().G9(this.B4,Fy);}},KC:function(AO
){var A;if((this.Bc.Bs>=300)&&!this.AX){var height=this.AZ.Av[1]-this.AZ.Au[1];var
width=height*3;if(height>((A=this.M)[3]-A[1]))height=(A=this.M)[3]-A[1];if(width>((
A=this.M)[2]-A[0]))width=(A=this.M)[2]-A[0];this.Fo(true);this.AX=B._NewObject(B.
abh.BV,0);this.CT=B._NewObject(B.abh.Aw,0);this.AX.H8(this);this.AX.H9(true);this.
AX.JA(200);this.AX.H_([0,0,width,height]);this.AX.Cs([width*2,this.AX.Av[1]]);this.
AX.DP([width*2,this.AX.Bl[1]]);this.AX.DP([this.AX.Bl[0],height*2]);this.AX.Eb([
this.AX.Ba[0],height*2]);this.CT.Al(B.aaN(this.CT.M,B.aak([width*2,height*2],J5)
));this.CT.Al(B.aaM(this.CT.M,J6));this.CT.B3(0xCCEEEEEE);this.G.AP(this.CT,0);this.
G.AP(this.AX,0);B.ow([this,this.I4],this);}if(!!this.AX)this.IR(this);},KD:function(
AO){if(!this.Jj(0x40))this.Hd();var AY=this.Text.Gs(this.Bc.AT);var BQ=this.Text.
Fs(AY);var Az=this.Text.String.charCodeAt(BQ)||0;if(((Az===0x5E)||(Az===0x7E))||(
Az===0x25))BQ=BQ-1;if(BQ!==this.Bj){this.Bj=BQ;B.ow([this,this.G5],this);this.CL=
true;}},IO:function(AO){if(!this.Ak)return;var AY=this.Text.Ic(this.Bj);if(this.
CA.AJ===6){AY=[AY[0]-1,AY[1]];if(this.Text.Fs(AY)===this.Bj){AY=[AY[0],AY[1]-1];
AY=[this.Text.G$(AY[1]).length,AY[1]];}}if(this.CA.AJ===7){AY=[AY[0]+1,AY[1]];if(
this.Text.Fs(AY)===this.Bj){AY=[AY[0],AY[1]+1];AY=[0,AY[1]];}}if(this.CA.AJ===4){
var pos=this.Text.Hp(AY);var DK=(this.Ak.Ascent+this.Ak.Descent)+this.Ak.Leading;
AY=this.Text.Gs(B.aaj(pos,[0,DK]));}if(this.CA.AJ===5){var pos=this.Text.Hp(AY);
var DK=(this.Ak.Ascent+this.Ak.Descent)+this.Ak.Leading;AY=this.Text.Gs(B.aak(pos
,[0,DK]));}var BQ=this.Text.Fs(AY);var Az=this.Text.String.charCodeAt(BQ)||0;if(((
Az===0x5E)||(Az===0x7E))||(Az===0x25))BQ=BQ-1;if(BQ!==this.Bj){this.Bj=BQ;B.ow([
this,this.G5],this);this.CL=true;}},IN:function(AO){if(!this.Bj)return;var Az=this.
Text.String.charCodeAt(this.Bj-1)||0;var C8=1;if(((Az===0x5E)||(Az===0x7E))||(Az===
0x25))C8=2;this.Text.BL(B.aa3(this.Text.String,this.Bj-C8,C8));this.Bj=this.Bj-C8;
this.CL=true;},IP:function(AO){if(this.Bj>=(this.Text.String.length-1))return;var
Az=this.Text.String.charCodeAt(this.Bj)||0;var C8=1;if(Az===0x25)C8=2;this.Text.
BL(B.aa3(this.Text.String,this.Bj,C8));this.CL=true;},IS:function(AO){},IQ:function(
AO){var Az=this.DN.Aq;var Bk=String.fromCharCode(Az);if((((Az===0x5E)||(Az===0x7E
))||(Az===0xAD))||(Az===0x25))Bk=Fz+String.fromCharCode(Az);this.Text.BL(B.aaW(this.
Text.String,Bk,this.Bj));this.Bj=this.Bj+Bk.length;this.CL=true;},Cr:function(D){
if(this.B1===D)return;this.B1=D;this.Text.Cr(D);this.CL=true;this.Text.ER(Fy);},
BL:function(D){if(this.String===D)return;this.String=D;var Bk=D;var V=Bk.indexOf(
String.fromCharCode(0x25),0);while(V>=0){Bk=B.aaW(Bk,Fz,V);V=Bk.indexOf(String.fromCharCode(
0x25),V+2);}V=Bk.indexOf(String.fromCharCode(0x5E),0);while(V>=0){Bk=B.aaW(Bk,Fz
,V);V=Bk.indexOf(String.fromCharCode(0x5E),V+2);}V=Bk.indexOf(String.fromCharCode(
0x7E),0);while(V>=0){Bk=B.aaW(Bk,Fz,V);V=Bk.indexOf(String.fromCharCode(0x7E),V+
2);}V=Bk.indexOf(String.fromCharCode(0xAD),0);while(V>=0){Bk=B.aaW(Bk,Fz,V);V=Bk.
indexOf(String.fromCharCode(0xAD),V+2);}if(this.Bj>Bk.length)this.Bj=Bk.length;this.
Text.BL(Bk+J7);this.CL=true;this.Text.ER(Fy);},Cg:function(D){if(this.Ak===D)return;
this.Ak=D;this.Text.Cg(D);this.CL=true;this.Text.ER(Fy);},_Init:function(aArg){B.
abi.BB._Init.call(this,aArg);B.abh.Aw._Init.call(this.Aw={X:this},0);B.abk.HZ._Init.
call(this.B8={X:this},0);B.Core.Dm._Init.call(this.CA={X:this},0);B.Core.Dm._Init.
call(this.D7={X:this},0);B.Core.Dm._Init.call(this.D8={X:this},0);B.Core.Dm._Init.
call(this.D_={X:this},0);B.Core.Dm._Init.call(this.DN={X:this},0);B.Core.B4._Init.
call(this.B4={X:this},0);B.Core.Bc._Init.call(this.Bc={X:this},0);B.abh.Text._Init.
call(this.Text={X:this},0);B.abh.Hc._Init.call(this.AZ={X:this},0);this.__proto__=
C.EI;var A;this.Aw.Al(J8);this.Aw.B3(0xFF000000);this.Al(Ij);this.B8.Ft=false;this.
B8.If=true;this.B8.Hh(500);this.B8.Jx(500);this.CA.EK=147;this.D7.EK=151;this.D8.
EK=44;this.D_.EK=149;this.DN.EK=143;this.B4.Hi(0x3F);this.B4.Al(Ij);this.B4.Gt=false;
this.B4.Jw(0.05);this.Bc.Hi(0x3F);this.Bc.Eb(J9);this.Bc.DP(J_);this.Bc.Cs(J$);this.
Bc.CG(Fy);this.Bc.Jy(3);this.Text.Hi(0x3F);this.Text.Al(Ka);this.Text.JE(true);this.
Text.Cr(0x11);this.Text.BL(Kb);this.Text.B3(0xFFFFFFFF);this.AZ.Cs(Kc);this.AZ.CG(
Kd);this.AZ.JD(2);this.AZ.JC(2);this.AZ.B3(0xFFFFFFFF);this.AZ.Hk(false);this.AP(
this.Aw,0);this.AP(this.B4,0);this.AP(this.Bc,0);this.AP(this.Text,0);this.AP(this.
AZ,0);this.B8.C1=[A=this.AZ,A.Ju,A.Hk];this.CA.CF=[this,this.IO];this.CA.CE=[this
,this.IO];this.D7.CF=[this,this.IN];this.D7.CE=[this,this.IN];this.D8.CF=[this,this.
IP];this.D8.CE=[this,this.IP];this.D_.CF=[this,this.IS];this.D_.CE=[this,this.IS
];this.DN.CF=[this,this.IQ];this.DN.CE=[this,this.IQ];this.Bc.He=[this,this.IR];
this.Bc.CE=[this,this.KC];this.Bc.Hf=[this,this.KE];this.Bc.CF=[this,this.KD];this.
Text.Jz([this,this.G5]);this.Text.JB(this.B4);this.Text.Cg(B.zW(B.abg.Fl));this.
Ak=B.zW(B.abg.Fl);},_Done:function(){this.__proto__=B.abi.BB;this.Aw._Done();this.
B8._Done();this.CA._Done();this.D7._Done();this.D8._Done();this.D_._Done();this.
DN._Done();this.B4._Done();this.Bc._Done();this.Text._Done();this.AZ._Done();B.abi.
BB._Done.call(this);},_ReInit:function(){B.abi.BB._ReInit.call(this);this.Aw._ReInit(
);this.B8._ReInit();this.CA._ReInit();this.D7._ReInit();this.D8._ReInit();this.D_.
_ReInit();this.DN._ReInit();this.B4._ReInit();this.Bc._ReInit();this.Text._ReInit(
);this.AZ._ReInit();},_Mark:function(E){var A;B.abi.BB._Mark.call(this,E);if((A=
this.CT)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.AX)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Aw)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.B8)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
CA)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D7)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.D8)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D_)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.DN)._cycle!=E)A._Mark(A._cycle=E);if((A=this.B4)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Bc)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Text)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.AZ)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Application::DigitEditor"};
C._Init=function(){C.G7.__proto__=B.Core.Root;C.Cv.__proto__=B.Core.Af;C.B9.__proto__=
B.Core.Af;C.EI.__proto__=B.abi.BB;};C._ReInit=function(){};C.BM=function(E){};return C;
})();

/* Embedded Wizard */