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
);if(EmWiApp.uU)throw new Error("The unit file 'Screens.js' included twice!");EmWiApp.
uU=(function(){var B=EmWiApp;var C={};
var AA="EEPROM_Motor";var A0="EEPROM_Wait";var B8="EEPROM_Test";var BW="Motor";var
D3="Test";var E3="Wait";var Ch=[0,0,240,320];var E4=[0,42,240,160];var Ey=[0,0,240
,30];var E5="Settings";var FO=[43,267,197,309];var GO="Exit";var GP=[34,34];var GQ=[
5,168,111,199];var E6="AC Relay";var GR=[5,208,111,238];var GS="Meter Relay";var
E7=[23,23];var GT=[160,174,177,192];var GU=[160,214,177,232];var FP=[0,0,240,40];
var GV=[6,0,79,27];var Jl="Text";var Jm=[199,0,240,27];var Jn=[101,0,142,27];var
Jo=[142,-1,196,27];var Jp="123";var Jq=[229,30];var Jr=[6,30];var Js=[0,5,16,21];
var H2="AC power is lost during test";var Jt="Can\'t get the cross zero signal";
var Ju="AC still exist, relay broken???";var Jv=[0,78,240,227];var Mb=[3,81,237,
224];var Mc=[70,84,170,114];var Md="Error";var Me=[20,131,226,200];var Mf=[70,185
,170,215];var Mg="Press to exit";
C.HZ={Aw:null,Bg:null,AC:null,Dr:null,X:null,Af:null,Ei:null,Ej:null,W:null,Br:null
,D2:null,ID:B.tY(3,B.hr,{0:AA,1:A0,2:B8}),Bz:function(aArg){this.Bp(this.Bg);},DV:
function(Ak){var A;var Dm=this.Bg.DR;var Cy=(C.Ij.isPrototypeOf(A=this.Bg.Ao)?A:
null);if(!Cy)return;Cy.IC=this.ID.Get(Dm);switch(Dm){case 0:{Cy.Jg(BW);Cy.D1=[A=
B._GetAutoObject(B.Application.Device),A.Gw,A.GB];Cy.Ev.Er([A=B._GetAutoObject(B.
Application.Device),A.Gw,A.GB]);Cy.Jc();}break;case 2:{Cy.Jg(D3);Cy.D1=[A=B._GetAutoObject(
B.Application.Device),A.Gx,A.GD];Cy.Ev.Er([A=B._GetAutoObject(B.Application.Device
),A.Gx,A.GD]);Cy.Jc();}break;case 1:{Cy.Jg(E3);Cy.D1=[A=B._GetAutoObject(B.Application.
Device),A.Gy,A.GF];Cy.Ev.Er([A=B._GetAutoObject(B.Application.Device),A.Gy,A.GF]
);Cy.Jc();}break;default:;}},LL:function(Ak){if(!!this.G)this.G.Ke(this,null,null
,null,null,null,false);},LP:function(Ak){var Dm=this.Bg.DY;if(this.Af.AF===5)Dm=
Dm-1;if(this.Af.AF===4)Dm=Dm+1;if(Dm<0)return;else if(Dm>=this.Bg.Dg){Dm=this.Bg.
Dg;this.Bp(this.Dr);}else this.Bp(this.Bg);this.Bg.Kw(Dm);},_Init:function(aArg){
B.Core.O._Init.call(this,aArg);B.uO.Aw._Init.call(this.Aw={L:this},0);B.Core.Bg.
_Init.call(this.Bg={L:this},0);B.uO.Text._Init.call(this.AC={L:this},0);B.uQ.E0.
_Init.call(this.Dr={L:this},0);B.uQ.FD._Init.call(this.X={L:this},0);B.Core.DS._Init.
call(this.Af={L:this},0);B.uQ.E0._Init.call(this.Ei={L:this},0);B.uQ.E0._Init.call(
this.Ej={L:this},0);B.uQ.FD._Init.call(this.W={L:this},0);B.uO.Be._Init.call(this.
Br={L:this},0);B.uO.Be._Init.call(this.D2={L:this},0);(this.ID=[]).__proto__=C.HZ.
ID;this.__proto__=C.HZ;this.S(Ch);this.Aw.S(Ch);this.Aw.An(0xFFD1E0DF);this.Bg.S(
E4);this.Bg.Kw(0);this.Bg.LV(40);this.Bg.LX(3);this.Bg.LU(C.Ij);this.AC.S(Ey);this.
AC.Bq(E5);this.AC.An(0xFF000000);this.Dr.S(FO);this.Dr.DW(GO);this.X.HK(131);this.
X.HL(0xFFFFFFFF);this.X.HO(0xFF04D101);this.X.HN(0xFFABABA8);this.X.HM(0xFF706E6C
);this.X.HQ(6);this.X.HT(6);this.X.HS(6);this.X.HR(6);this.X.HJ(0xAAABABA8);this.
X.HI(0xFF706E6C);this.X.HE(6);this.X.HH(6);this.X.HG(6);this.X.HF(6);this.X.HA(3
);this.X.HD(2);this.X.HC(0);this.X.HB(1);this.X.HU(GP);this.Ei.S(GQ);this.Ei.DW(
E6);this.Ej.S(GR);this.Ej.DW(GS);this.W.HK(131);this.W.HL(0xFFFFFFFF);this.W.HO(
0xFF04D101);this.W.HN(0xFFABABA8);this.W.HM(0xFF706E6C);this.W.HQ(4);this.W.HT(4
);this.W.HS(4);this.W.HR(4);this.W.HJ(0xAAABABA8);this.W.HI(0xFF706E6C);this.W.HE(
4);this.W.HH(4);this.W.HG(4);this.W.HF(4);this.W.HA(3);this.W.HD(2);this.W.HC(0);
this.W.HB(1);this.W.HU(E7);this.Br.S(GT);this.Br.An(B.uR.Red);this.Br.Cu(0x92);this.
D2.S(GU);this.D2.An(B.uR.Red);this.D2.Cu(0x92);this.Ai(this.Aw,0);this.Ai(this.Bg
,0);this.Ai(this.AC,0);this.Ai(this.Dr,0);this.Ai(this.Ei,0);this.Ai(this.Ej,0);
this.Ai(this.Br,0);this.Ai(this.D2,0);this.Bg.DV=[this,this.DV];this.AC.CG(B.tv(
B.Application.Fw));this.Dr.DU=[this,this.LL];this.Dr.Gz(this.X);this.X.HP(B.tv(B.
uP.Ek));this.X.Hw(B.tv(B.uQ.Dw));this.X.Hz(B.tv(B.uQ.Dw));this.X.Hy(B.tv(B.uQ.Dw
));this.X.Hx(B.tv(B.uQ.Dw));this.Af.Dh=[this,this.LP];this.Ei.Gz(this.W);this.Ej.
Gz(this.W);this.W.HP(B.tv(B.uP.Dd));this.W.Hw(B.tv(B.uQ.Dx));this.W.Hz(B.tv(B.uQ.
Dx));this.W.Hy(B.tv(B.uQ.Dx));this.W.Hx(B.tv(B.uQ.Dx));this.Br.Cg(B.tv(B.uS.EB));
this.D2.Cg(B.tv(B.uS.EB));this.Bz(aArg);},_Done:function(){this.__proto__=B.Core.
O;this.Aw._Done();this.Bg._Done();this.AC._Done();this.Dr._Done();this.X._Done();
this.Af._Done();this.Ei._Done();this.Ej._Done();this.W._Done();this.Br._Done();this.
D2._Done();B.Core.O._Done.call(this);},_ReInit:function(){B.Core.O._ReInit.call(
this);this.Aw._ReInit();this.Bg._ReInit();this.AC._ReInit();this.Dr._ReInit();this.
X._ReInit();this.Af._ReInit();this.Ei._ReInit();this.Ej._ReInit();this.W._ReInit(
);this.Br._ReInit();this.D2._ReInit();},_Mark:function(E){var A;B.Core.O._Mark.call(
this,E);if((A=this.Aw)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bg)._cycle!=E)A.
_Mark(A._cycle=E);if((A=this.AC)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Dr)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.X)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Af
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ei)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Ej)._cycle!=E)A._Mark(A._cycle=E);if((A=this.W)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Br)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D2)._cycle!=E)A._Mark(
A._cycle=E);},_className:"Screens::SettingMenu"};C.Ij={D1:null,Aw:null,AC:null,Da:
null,De:null,CK:null,Cf:null,Di:null,Af:null,Ev:null,IC:B.hr,Gb:false,GL:function(
Fa){var A;if(((Fa&0x40)===0x40)){this.Di.CH(true);this.AC.S(B.un(this.AC.Q,20));
}else{this.Di.CH(false);this.AC.S(B.un(this.AC.Q,6));}if(this.Gb){this.De.CH(true
);this.Da.CH(true);}else{this.De.CH(false);this.Da.CH(false);}},Jg:function(M2){
this.AC.Bq(M2);},Jj:function(Ak){var A;var Bh;if(this.Af.AF===131){this.L2(!this.
Gb);if(!this.Gb&&(this.IC!==B.hr))B._GetAutoObject(B.Application.Device).Ma(this.
IC,(Bh=this.D1,Bh[1].call(Bh[0])));return;}if(this.Gb){if(this.Af.AF===4)(Bh=this.
D1,Bh[2].call(Bh[0],(Bh[1].call(Bh[0])+1)&0xFFFF));else if(this.Af.AF===5){if((Bh=
this.D1,Bh[1].call(Bh[0]))>0)(Bh=this.D1,Bh[2].call(Bh[0],(Bh[1].call(Bh[0])-1)&
0xFFFF));}else this.Af.Fr=true;}else this.Af.Fr=true;},L2:function(D){if(this.Gb===
D)return;this.Gb=D;this.CD();},La:function(Ak){var Bh;this.CK.Bq(B.t1((Bh=this.D1
,Bh[1].call(Bh[0])),0,0));},Jc:function(){this.La(this);},_Init:function(aArg){B.
Core.O._Init.call(this,aArg);B.uO.Aw._Init.call(this.Aw={L:this},0);B.uO.Text._Init.
call(this.AC={L:this},0);B.uO.Be._Init.call(this.Da={L:this},0);B.uO.Be._Init.call(
this.De={L:this},0);B.uO.Text._Init.call(this.CK={L:this},0);B.uO.Cf._Init.call(
this.Cf={L:this},0);B.uO.Be._Init.call(this.Di={L:this},0);B.Core.DS._Init.call(
this.Af={L:this},0);B.Core.EZ._Init.call(this.Ev={L:this},0);this.__proto__=C.Ij;
this.S(FP);this.Aw.S(FP);this.Aw.An(0xFFD1E0DF);this.AC.S(GV);this.AC.Cu(0x11);this.
AC.Bq(Jl);this.AC.An(0xFF000000);this.Da.S(Jm);this.Da.An(0xFF17BE09);this.Da.CH(
false);this.De.S(Jn);this.De.An(0xFF060ED6);this.De.CH(false);this.CK.S(Jo);this.
CK.Bq(Jp);this.CK.An(0xFF000000);this.Cf.EX(Jq);this.Cf.EW(Jr);this.Cf.L0(2);this.
Cf.LZ(2);this.Cf.Jb(2);this.Cf.An(0xFF000000);this.Di.S(Js);this.Di.LQ(true);this.
Di.CH(false);this.Ai(this.Aw,0);this.Ai(this.AC,0);this.Ai(this.Da,0);this.Ai(this.
De,0);this.Ai(this.CK,0);this.Ai(this.Cf,0);this.Ai(this.Di,0);this.AC.CG(B.tv(B.
uP.Ek));this.Da.Cg(B.tv(B.uS.Ai));this.De.Cg(B.tv(B.uS.Minus));this.CK.CG(B.tv(B.
uP.Ek));this.Di.Cg(B.tv(B.uS.IO));this.Af.Dh=[this,this.Jj];this.Ev.Eq=[this,this.
La];},_Done:function(){this.__proto__=B.Core.O;this.Aw._Done();this.AC._Done();this.
Da._Done();this.De._Done();this.CK._Done();this.Cf._Done();this.Di._Done();this.
Af._Done();this.Ev._Done();B.Core.O._Done.call(this);},_ReInit:function(){B.Core.
O._ReInit.call(this);this.Aw._ReInit();this.AC._ReInit();this.Da._ReInit();this.
De._ReInit();this.CK._ReInit();this.Cf._ReInit();this.Di._ReInit();this.Af._ReInit(
);this.Ev._ReInit();},_Mark:function(E){var A;B.Core.O._Mark.call(this,E);if((A=
this.D1)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Aw)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.AC)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Da)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.De)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CK
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cf)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Di)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Af)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Ev)._cycle!=E)A._Mark(A._cycle=E);},_className:"Screens::list"};C.
CL={E1:null,CY:null,Aw:null,Text:null,C1:null,Eu:null,Af:null,Bz:function(aArg){
var A;this.K8(this);B.sN([this,this.K8],[A=B._GetAutoObject(B.Application.Device
),A.Ht,A.Hv],0);},K8:function(Ak){if(B._GetAutoObject(B.Application.Device).Error===
1)this.C1.Bq(H2);else if(B._GetAutoObject(B.Application.Device).Error===2)this.C1.
Bq(Jt);else if(B._GetAutoObject(B.Application.Device).Error===3)this.C1.Bq(Ju);}
,Jj:function(Ak){B._GetAutoObject(B.Application.Device).UpdateError(0);},_Init:function(
aArg){B.Core.O._Init.call(this,aArg);B.uO.Aw._Init.call(this.E1={L:this},0);B.uO.
CY._Init.call(this.CY={L:this},0);B.uO.Aw._Init.call(this.Aw={L:this},0);B.uO.Text.
_Init.call(this.Text={L:this},0);B.uO.Text._Init.call(this.C1={L:this},0);B.uO.Text.
_Init.call(this.Eu={L:this},0);B.Core.DS._Init.call(this.Af={L:this},0);this.__proto__=
C.CL;this.S(Ch);this.E1.S(Ch);this.E1.An(0xD2BAB8AF);this.CY.S(Jv);this.CY.Jb(3);
this.CY.An(0xFFF7FFF5);this.Aw.S(Mb);this.Aw.An(0xEE0000FF);this.Text.S(Mc);this.
Text.Bq(Md);this.C1.S(Me);this.C1.Cu(0x9);this.C1.Bq(H2);this.Eu.S(Mf);this.Eu.Bq(
Mg);this.Ai(this.E1,0);this.Ai(this.CY,0);this.Ai(this.Aw,0);this.Ai(this.Text,0
);this.Ai(this.C1,0);this.Ai(this.Eu,0);this.Text.CG(B.tv(B.uP.Ek));this.C1.CG(B.
tv(B.uP.Dd));this.Eu.CG(B.tv(B.uP.Dd));this.Af.Dh=[this,this.Jj];this.Bz(aArg);}
,_Done:function(){this.__proto__=B.Core.O;this.E1._Done();this.CY._Done();this.Aw.
_Done();this.Text._Done();this.C1._Done();this.Eu._Done();this.Af._Done();B.Core.
O._Done.call(this);},_ReInit:function(){B.Core.O._ReInit.call(this);this.E1._ReInit(
);this.CY._ReInit();this.Aw._ReInit();this.Text._ReInit();this.C1._ReInit();this.
Eu._ReInit();this.Af._ReInit();},_Mark:function(E){var A;B.Core.O._Mark.call(this
,E);if((A=this.E1)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CY)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Aw)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Text)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.C1)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
Eu)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Af)._cycle!=E)A._Mark(A._cycle=E);}
,_className:"Screens::Warning"};
C._Init=function(){C.HZ.__proto__=B.Core.O;C.Ij.__proto__=B.Core.O;C.CL.__proto__=
B.Core.O;};C._ReInit=function(){};C.Bs=function(E){};return C;})();

/* Embedded Wizard */