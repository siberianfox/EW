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
);EmWiApp.kh=(function(){var A=EmWiApp;var C={};
var Ae=[0,0,800,580];var At=[0,550,15,580];var B4=[548,0,800,580];var CP=[579,64,
774,517];var CQ=[20,541];var CR=[228,541];var Co=[228,121];var Ei=[20,121];var FS=[
305,122,515,542];var FT=[375,9,446,73];var FU=[383,14,438,69];var EV=[0,0,15,30];
var FV=[1,2,13,14];var FW=[2,16,12,25];var FX="0";var FY=[0,0,13,13];var EW=[0,0
,210,420];
C.D7={B0:null,Bd:null,Ak:null,Aq:null,AW:null,A2:null,Timer:null,Cn:null,BB:null,
AE:function(aArg){},FP:function(A9){var dots=A.aan(450,false,null);{var gl=A.ai;
var x=0;var y=0;var w=15;var h=30;var pixels=new Uint8Array(w*h*4);gl.readPixels(
x,y,w,h,gl.RGBA,gl.UNSIGNED_BYTE,pixels);for(var i=0;i<30;i++){for(var j=0;j<15;
j++){var pixel_index=(i*15+j)*4;if((pixels[pixel_index]>200)&&(pixels[pixel_index+
1]>200)&&(pixels[pixel_index+2]>200)){dots[(29-i)*15+j]=false;}else{dots[(29-i)*
15+j]=true;}}}}var i;for(i=0;i<450;i++)this.A2.C9.Set(i,dots.Get(i));this.A2.FN(
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);A.abh.Ak._Init.call(this.
B0={Aa:this},0);C.Bd._Init.call(this.Bd={Aa:this},0);A.abh.Ak._Init.call(this.Ak={
Aa:this},0);A.abh.Aq._Init.call(this.Aq={Aa:this},0);A.abh.AW._Init.call(this.AW={
Aa:this},0);C.A2._Init.call(this.A2={Aa:this},0);A.Core.Timer._Init.call(this.Timer={
Aa:this},0);A.abh.Ak._Init.call(this.Cn={Aa:this},0);A.abh.Aq._Init.call(this.BB={
Aa:this},0);this.__proto__=C.D7;this.Am(Ae);this.B0.Am(Ae);this.B0.CG(0xFF000000
);this.Bd.Am(At);this.Bd.Ed(true);this.Ak.Am(B4);this.Aq.Am(CP);this.Aq.Ec(true);
this.Aq.Dz(0x52);this.AW.CM(CQ);this.AW.CL(CR);this.AW.CK(Co);this.AW.CJ(Ei);this.
AW.FK(false);this.A2.Am(FS);this.Timer.Ee(100);this.Timer.BN(true);this.Cn.Am(FT
);this.BB.Am(FU);this.BB.Ec(true);this.BB.Dz(0x92);this.A3(this.B0,0);this.A3(this.
Bd,0);this.A3(this.Ak,0);this.A3(this.Aq,0);this.A3(this.AW,0);this.A3(this.A2,0
);this.A3(this.Cn,0);this.A3(this.BB,0);this.Aq.B3(A.zW(A.abi.Eg));this.AW.FJ(this.
Bd);this.Timer.DA=[this,this.FP];this.BB.B3(A.zW(A.abi.Ex));this.AE(aArg);},_Done:
function(){this.__proto__=A.Core.Root;this.B0._Done();this.Bd._Done();this.Ak._Done(
);this.Aq._Done();this.AW._Done();this.A2._Done();this.Timer._Done();this.Cn._Done(
);this.BB._Done();A.Core.Root._Done.call(this);},_ReInit:function(){A.Core.Root.
_ReInit.call(this);this.B0._ReInit();this.Bd._ReInit();this.Ak._ReInit();this.Aq.
_ReInit();this.AW._ReInit();this.A2._ReInit();this.Timer._ReInit();this.Cn._ReInit(
);this.BB._ReInit();},_Mark:function(E){var B;A.Core.Root._Mark.call(this,E);if((
B=this.B0)._cycle!=E)B._Mark(B._cycle=E);if((B=this.Bd)._cycle!=E)B._Mark(B._cycle=
E);if((B=this.Ak)._cycle!=E)B._Mark(B._cycle=E);if((B=this.Aq)._cycle!=E)B._Mark(
B._cycle=E);if((B=this.AW)._cycle!=E)B._Mark(B._cycle=E);if((B=this.A2)._cycle!=
E)B._Mark(B._cycle=E);if((B=this.Timer)._cycle!=E)B._Mark(B._cycle=E);if((B=this.
Cn)._cycle!=E)B._Mark(B._cycle=E);if((B=this.BB)._cycle!=E)B._Mark(B._cycle=E);}
,_className:"Application::Application"};C.Bd={Ak:null,Aq:null,Text:null,Ba:null,
DM:0,FL:function(F){if(this.DM===F)return;this.DM=F;this.Text.EO(this.DM.toFixed(
));},FG:function(){return this.DM;},_Init:function(aArg){A.Core.R._Init.call(this
,aArg);A.abh.Ak._Init.call(this.Ak={Aa:this},0);A.abh.Aq._Init.call(this.Aq={Aa:
this},0);A.abh.Text._Init.call(this.Text={Aa:this},0);A.abj.Ba._Init.call(this.Ba={
Aa:this},0);this.__proto__=C.Bd;this.Am(EV);this.Ak.Am(EV);this.Aq.Am(FV);this.Aq.
Ec(false);this.Aq.CG(0xFF3B45D1);this.Text.Am(FW);this.Text.EO(FX);this.Text.CG(
0xFF000000);this.Ba.FH(99000);this.Ba.BN(true);this.Ba.ET=99;this.A3(this.Ak,0);
this.A3(this.Aq,0);this.A3(this.Text,0);this.Aq.B3(A.zW(A.abi.Ep));this.Text.FI(
A.zW(A.abg.D9));this.Ba.DB=[this,this.FG,this.FL];},_Done:function(){this.__proto__=
A.Core.R;this.Ak._Done();this.Aq._Done();this.Text._Done();this.Ba._Done();A.Core.
R._Done.call(this);},_ReInit:function(){A.Core.R._ReInit.call(this);this.Ak._ReInit(
);this.Aq._ReInit();this.Text._ReInit();this.Ba._ReInit();},_Mark:function(E){var
B;A.Core.R._Mark.call(this,E);if((B=this.Ak)._cycle!=E)B._Mark(B._cycle=E);if((B=
this.Aq)._cycle!=E)B._Mark(B._cycle=E);if((B=this.Text)._cycle!=E)B._Mark(B._cycle=
E);if((B=this.Ba)._cycle!=E)B._Mark(B._cycle=E);},_className:"Application::dot_matrix_emulation"
};C.A2={dots:A.aan(450,null,null),Ak:null,C9:A.aan(450,false,null),AE:function(aArg
){var B;var A0;var i;var j;for(i=0;i<30;(A0=i+1,i=A0&0xFFFF))for(j=0;j<15;(A0=j+
1,j=A0&0xFFFF)){var G=A._NewObject(A.abh.Aq,0);G.Am(A.aam(FY,[j*14,i*14]));G.Dz(
G.Cz|0x80);G.Dz(G.Cz|0x100);if(this.C9.Get((i*15)+j))G.B3(A.zW(A.abi.DS));else G.
B3(A.zW(A.abi.DR));this.A3(G,0);this.dots.Set((i*15)+j,G);}},FN:function(){var A0;
var i;for(i=0;i<450;(A0=i+1,i=A0&0xFFFF))if(this.C9.Get(i))this.dots.Get(i).B3(A.
zW(A.abi.DS));else this.dots.Get(i).B3(A.zW(A.abi.DR));},_Init:function(aArg){A.
Core.R._Init.call(this,aArg);A.abh.Ak._Init.call(this.Ak={Aa:this},0);(this.dots=[
]).__proto__=C.A2.dots;(this.C9=[]).__proto__=C.A2.C9;this.__proto__=C.A2;this.Am(
EW);this.Ak.Am(EW);this.A3(this.Ak,0);this.AE(aArg);},_Done:function(){this.__proto__=
A.Core.R;this.Ak._Done();A.Core.R._Done.call(this);},_ReInit:function(){A.Core.R.
_ReInit.call(this);this.Ak._ReInit();},_Mark:function(E){var B;A.Core.R._Mark.call(
this,E);A.aaf(this.dots,E);if((B=this.Ak)._cycle!=E)B._Mark(B._cycle=E);},_className:
"Application::hardware_emulation"};
C._Init=function(){C.D7.__proto__=A.Core.Root;C.Bd.__proto__=A.Core.R;C.A2.__proto__=
A.Core.R;};C._ReInit=function(){};C.AX=function(E){};return C;})();

/* Embedded Wizard */