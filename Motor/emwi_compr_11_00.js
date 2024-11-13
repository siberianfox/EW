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

EmWiCompr_11_00=(function(){var d={};d._SetLanguage=function(j1){if(this.lp===j1)
return j1;this.lp=j1;var e8=this.hv;while(e8){e8._ReInit();e8=e8._next;}this._ReInit(
);return j1;};d._SetStyles=function(nT){this.uE=nT;return nT;};d.tB=function(iD){
if(iD._variants)iD=iD._variants();var aD=iD[this.lp];if(aD!==undefined)return aD;
else return iD[0];};d._GetAutoObject=function(gy){if(gy._variants)gy=gy._variants(
);if(!gy._this)gy._Init.call(gy._this={});return gy._this;};d.tv=function(c8){if(
c8._variants)c8=c8._variants();var ie=c8[this.lp];if(ie===undefined)ie=c8[0];if(
!ie._this)c8._class()._Init.call(ie._this={},ie);return ie._this;};d._NewObject=
function(nD,q7){var e;if(!nD)throw"No class specified to create the object";nD._Init.
call(e={},q7);e._next=this.hv;this.hv=e;return e;};d._LockObject=function(ca){if(
ca)this.hx.push(ca);};d._UnlockObject=function(ca){var pc=this.hx;var e;if(!ca)return;
for(e=pc.length-1;e>=0;e--)if(pc[e]===ca)break;if(e>=0)this.hx.splice(e,1);};d.tQ=
function(c2,ej){var e;for(var g in c2)if(!isNaN(g)&&(e=c2[g])&&(e._cycle!==ej))e.
_Mark(e._cycle=ej);};d.tS=function(c2,ej){var e;for(var g in c2)if(!isNaN(g)&&(e=
c2[g])&&(e=e[0])&&(e._cycle!==ej))e._Mark(e._cycle=ej);};d.tR=function(c2,ej){var
e;for(var g in c2)if(!isNaN(g)&&(e=c2[g])&&(e=e[0])&&(e._cycle!==ej))e._Mark(e._cycle=
ej);};d.nt=function(){var cl=(this.no+=1);var sr=this.gx;var a2=null;var bf=null;
var e=null;function ld(nM,ej){var ab=nM;var oT=0;var e;for(;ab;ab=ab._next){if((
e=ab.eC)&&(e._cycle!==ej)&&(ab[0]._cycle===ej)){e._Mark(e._cycle=ej);ab=nM;oT++;
}}return oT;}for(a2=this.hx.length-1;a2>=0;a2--)if((bf=this.hx[a2])&&(bf._cycle!==
cl))bf._Mark(bf._cycle=cl);ld(this.df,cl);while((ld(this.dX,cl)>0)&&(ld(this.df,
cl)>0));while((a2=this.df)&&((a2[0]._cycle!==cl)||((e=a2.eC)&&(e._cycle!==cl))))
this.df=a2._next;while((bf=this.dX)&&((bf[0]._cycle!==cl)||((e=bf.eC)&&(e._cycle
!==cl))))this.dX=bf._next;while(a2&&(e=a2._next))if((e.eC&&(e.eC._cycle!==cl))||(
e[0]._cycle!==cl))a2._next=e._next;else a2=e;while(bf&&(e=bf._next))if((e.eC&&(e.
eC._cycle!==cl))||(e[0]._cycle!==cl))bf._next=e._next;else bf=e;while((a2=this.hv
)&&(a2._cycle!==cl)){this.hv=a2._next;a2._Done();}if(a2)while(bf=a2._next){if(bf.
_cycle!==cl){a2._next=bf._next;bf._Done();}else a2=bf;}this.uc(cl);while((a2=this.
fL)&&(a2[0]._cycle!==cl))this.fL=a2._next;if(a2)while(bf=a2._next)if(bf[0]._cycle
!==cl)a2._next=bf._next;else a2=bf;while((a2=this.hw)&&(a2._cycle!==cl))this.hw=
a2.iA;while(a2){var kZ;while((bf=a2._observers)&&(bf[0]._cycle!==cl))a2._observers=
bf._next;if(bf)while(kZ=bf._next)if(kZ[0]._cycle!==cl)bf._next=kZ._next;else bf=
kZ;while((bf=a2.iA)&&(bf._cycle!==cl))a2.iA=bf.iA;a2=bf;}if(this.a_)console.log(
"Living objects: "+this.gx+"("+(this.gx-sr)+")");};d.lz=function(bn,iR){if(!bn)return;
var ab=this.df;var e8=bn[0];var ja=bn[1];var e=null;if(ab&&(ab[0]===e8)&&(ab[1]===
ja)){if(!ab.lD)ab.eC=iR;return;}if(ab)while((e=ab._next)&&((e[0]!==e8)||(e[1]!==
ja)))ab=e;if(e&&e.lD)return;if(e){ab._next=e._next;e._next=null;}bn._next=this.df;
bn.eC=iR;this.df=bn;};d.tC=function(bn,iR){if(!bn)return;var ab=this.dX;var e8=bn[
0];var ja=bn[1];var e;if(ab&&(ab[0]===e8)&&(ab[1]===ja)){if(!ab.lD)ab.eC=iR;return;
}if(ab)while((e=ab._next)&&((e[0]!==e8)||(e[1]!==ja)))ab=e;if(e){ab._next=e._next;
e._next=null;}bn._next=this.dX;bn.eC=iR;this.dX=bn;};d.qY=function(){var h7=[];if(
!this.df){if(this.dX){this.df=this.dX;this.dX=null;}return false;}for(;;){var i_=
this.df;var mn=null;var e;while(i_&&(i_!==h7)){e=i_;i_=i_._next;e._next=mn;mn=e;
}h7._next=mn;this.df=h7;while(e=h7._next){e.lD=true;e[1].call(e[0],e.eC);h7._next=
e._next;}if(this.df===h7){this.df=null;break;}}this.df=this.dX;this.dX=null;return true;
};d.sN=function(bn,eF,b$){var dJ;if(!bn||!eF||!(dJ=eF[0]))return;var ab=dJ._observers;
var da=bn[0];var db=bn[1];var g8=eF[1];while(ab&&((ab[0]!==da)||(ab[1]!==db)||(ab[
2]!==b$)||(ab[3]!==g8)))ab=ab._next;if(ab)return;ab=[da,db,b$,g8];ab._next=dJ._observers;
dJ._observers=ab;if(!dJ.lC){dJ.iA=this.hw;dJ.lC=true;this.hw=dJ;}};d.sL=function(
bn,ca,b$){if(!bn||!ca)return;var ab=ca._observers;var da=bn[0];var db=bn[1];while(
ab&&((ab[0]!==da)||(ab[1]!==db)||(ab[2]!==b$)||ab[3]))ab=ab._next;if(ab)return;ab=[
da,db,b$,null];ab._next=ca._observers;ca._observers=ab;if(!ca.lC){ca.iA=this.hw;
ca.lC=true;this.hw=ca;}};d.sM=function(bn,b$){if(!bn)return;var ab=this.fL;var da=
bn[0];var db=bn[1];while(ab&&((ab[0]!==da)||(ab[1]!==db)||(ab[2]!==b$)))ab=ab._next;
if(ab)return;ab=[da,db,b$];ab._next=this.fL;this.fL=ab;};d.s0=function(bn,eF,b$){
var dJ;var ab;if(!bn||!eF||!(dJ=eF[0])||!(ab=dJ._observers))return;var da=bn[0];
var db=bn[1];var g8=eF[1];var bQ;if((ab[0]===da)&&(ab[1]===db)&&(ab[2]===b$)&&(ab[
3]===g8)){dJ._observers=ab._next;ab._next=null;return;}while((bQ=ab._next)&&((bQ[
0]!==da)||(bQ[1]!==db)||(bQ[2]!==b$)||(bQ[3]!==g8)))ab=bQ;if(!bQ)return;ab._next=
bQ._next;bQ._next=null;};d.sY=function(bn,ca,b$){var ab;if(!bn||!ca||!(ab=ca._observers
))return;var da=bn[0];var db=bn[1];var bQ;if((ab[0]===da)&&(ab[1]===db)&&(ab[2]===
b$)&&!ab[3]){ca._observers=ab._next;ab._next=null;return;}while((bQ=ab._next)&&((
bQ[0]!==da)||(bQ[1]!==db)||(bQ[2]!==b$)||bQ[3]))ab=bQ;if(!bQ)return;ab._next=bQ.
_next;bQ._next=null;};d.sZ=function(bn,b$){var ab;if(!bn||!(ab=this.fL))return;var
da=bn[0];var db=bn[1];var bQ;if((ab[0]===da)&&(ab[1]===db)&&(ab[2]===b$)){this.fL=
ab._next;ab._next=null;return;}while((bQ=ab._next)&&((bQ[0]!==da)||(bQ[1]!==db)||(
bQ[2]!==b$)))ab=bQ;if(!bQ)return;ab._next=bQ._next;bQ._next=null;};d.t4=function(
eF,b$){var dJ;var ab;if(!eF||!(dJ=eF[0])||!(ab=dJ._observers))return;if(this.a_)
console.log("NotifyRefObserver()");var g8=eF[1];while(ab){if((ab[2]===b$)&&(ab[3
]===g8))this.lz(ab.slice(0,2),null);ab=ab._next;}};d.qJ=function(ca,b$){var ab;if(
!ca||!(ab=ca._observers))return;if(this.a_)console.log("NotifyObjObserver()");while(
ab){if((ab[2]===b$)&&!ab[3])this.lz(ab.slice(0,2),null);ab=ab._next;}};d.t3=function(
b$){var ab;if(!(ab=this.fL))return;if(this.a_)console.log("NotifyObserver()");while(
ab){if(ab[2]===b$)this.lz(ab.slice(0,2),null);ab=ab._next;}};function StartTimer(
jX,hI){var jn=this;if((jX>0)&&(hI>0))this.fI=window.setTimeout(function(){qb(jn,
hI);},jX);else if(jX>0)this.fI=window.setTimeout(function(){qc(jn);},jX);else if(
hI>0)this.fE=window.setInterval(function(){m9(jn);},hI);}function DestroyTimer(){
if(this.fE)window.clearInterval(this.fE);this.fE=0;if(this.fI)window.clearTimeout(
this.fI);this.fI=0;this.ii.gx--;this.jC=null;this.jA=null;this.ii=null;}function
ResetTimer(){if(this.fE)window.clearInterval(this.fE);this.fE=0;if(this.fI)window.
clearTimeout(this.fI);this.fI=0;}function qb(dE,hI){dE.ql=null;dE.fE=window.setInterval(
function(){m9(dE);},hI);try{dE.jA.call(dE.jC);dE.ii._RequestUpdate();}catch(bE){
console.log("EmWi error: "+bE+"!");}}function qc(dE){try{dE.ql=null;dE.jA.call(dE.
jC);dE.ii._RequestUpdate();}catch(bE){console.log("EmWi error: "+bE+"!");}}function
m9(dE){try{dE.jA.call(dE.jC);dE.ii._RequestUpdate();}catch(bE){console.log("EmWi error: "+
bE+"!");}}d.sX=function(ca,rh){var jn={DestroyTimer:DestroyTimer,ResetTimer:ResetTimer
,StartTimer:StartTimer,ii:this,jC:ca,jA:rh,fE:0,fI:0};this.gx++;return jn;};function
px(){var f9=this.mX;var e6=f9.length;var gX=0;if(arguments.length!==e6)return this.
k9;for(var g=0;g<e6;g++){var i3=f9[g];var u=arguments[g];if((u<0)||(u>=i3))return this.
k9;gX=(gX*i3)+u;}var aD=this[gX];if(aD===undefined)return this.k9;return aD;};function
py(){var f9=this.mX;var e6=f9.length;var gX=0;if((arguments.length-1)!==e6)return;
for(var g=0;g<e6;g++){var i3=f9[g];var u=arguments[g];if((u<0)||(u>=i3))return;gX=(
gX*i3)+u;}return this[gX]=arguments[e6];};d.tY=function(){var e6=arguments.length-
2;var r2=arguments[e6];var mf=arguments[e6+1];var f9=[];for(var g=0;g<e6;g++)f9[
g]=arguments[g];var hM=[];hM.mX=f9;hM.k9=r2;if(mf)for(var g in mf)hM[g]=mf[g];hM.
Get=px;hM.Set=py;return hM;};d.uF=function(){function fi(dF,ri){var e=dF.toString(
16).toUpperCase();var o9=ri-e.length;if(o9>0)e=d.jW.slice(0,o9)+e;return e;}var kC=
arguments[0];var bZ="EmWi trace: ";var u=0;var ct=1;while(kC&&(u<kC.length)&&(ct<
arguments.length)){if(kC[u++]==='%'){if(ct>1)bZ+=", ";switch(kC[u++]){case'i':case
'I':bZ+=arguments[ct].toFixed();break;case'u':case'U':bZ+=arguments[ct].toFixed(
);break;case'f':bZ+=arguments[ct];break;case'e':bZ+="enum:0x"+fi(arguments[ct],8
);break;case't':bZ+="set:0x"+fi(arguments[ct],8);break;case'0':bZ+="null";break;
case'b':bZ+=arguments[ct];break;case'h':bZ+="handle:"+arguments[ct];break;case'c':{
var e=arguments[ct];if((e>=0x20)&&(e<=0x7F))bZ+="\'"+String.fromCharCode(e)+"\'";
else bZ+="\'\\x"+fi(e,4)+"\'";}break;case'o':{var e=arguments[ct];var az=e&0xFF;
var cL=(e>>8)&0xFF;var a3=(e>>16)&0xFF;var bW=(e>>24)&0xFF;bZ+="#"+fi(az,2)+fi(cL
,2)+fi(a3,2)+fi(bW,2);}break;case'p':{var e=arguments[ct];bZ+="<"+e[0]+","+e[1]+
">";}break;case'r':{var e=arguments[ct];bZ+="<"+e[0]+","+e[1]+","+e[2]+","+e[3]+
">";}break;case'l':{bZ+="language:0x"+fi(arguments[ct],8);}break;case'g':{bZ+="styles:0x"+
fi(arguments[ct],8);}break;case'^':{var e=arguments[ct];if(!e||!e[0])bZ+="null";
else bZ+="ref:(Object of class '"+e[0]._className+"', OnGet:'"+e[1].name+"', OnSet:'"+
e[2].name+"')";}break;case'*':{var e=arguments[ct];if(!e||!e._className)bZ+="null";
else bZ+="Object of class '"+e._className+"'";}break;case'$':{var e=arguments[ct
];if(!e||!e._className)bZ+="null";else bZ+=e._className;}break;case'&':{var e=arguments[
ct];if(!e||!e[0])bZ+="null";else bZ+="slot:(Object of class '"+e[0]._className+"', SlotProc:'"+
e[1].name+"')";}break;case's':{var e=arguments[ct];bZ+="\""+e+"\"";}break;}ct++;
}}console.log(bZ);};d._RequestUpdate=function(){if(this.iv)return;var et=this;var
pa=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||
window.oRequestAnimationFrame||window.msRequestAnimationFrame;function pq(){et.qV(
);}if(pa)pa(pq);else window.setTimeout(pq,15);this.iv=true;};d.nv=function(){if(
this.iu)return;var et=this;function ss(){et.qR();}window.setTimeout(ss,1000);this.
iu=true;};d.qV=function(){if(!this.iv)return;this.iv=false;try{var oA=this.qY();
if(this.gt&&this.b0.DoesNeedUpdate()){var aI=this._NewObject(this.Graphics.Canvas
,0);this.bm.m0=null;this.bm.fH=null;if(this.jO)this.gt.cI[0].jv=true;aI.AttachBitmap(
this.gt);this.b0.UpdateGE20(aI);aI.DetachBitmap();if(this.gt.cI[0].jv){this.bm.clear(
this.bm.COLOR_BUFFER_BIT);this.gt.cI[0].jv=false;}oA=true;}if(oA)this.nv();if(this.
df||this.dX)this._RequestUpdate();}catch(bE){console.log("EmWi error: "+bE+"!");
}};d.qR=function(){if(!this.iu)return;this.iu=false;this.nt();};function qm(lO,w
){var oQ=[w.Enter,w.Escape,w.Backspace,w.CtrlShiftPageUp,w.CtrlShiftPageDown,w.CtrlShiftUp
,w.CtrlShiftDown,w.CtrlShiftKeyP,w.CtrlShiftKeyR,w.CtrlShiftLeft,w.CtrlShiftRight
,w.CtrlShiftBackspace,w.CtrlShiftKeyE,w.CtrlShiftKeyT,w.CtrlShiftKeyN,w.CtrlShiftKeyK
,w.CtrlShiftKeyG,w.CtrlShiftKeyU,w.CtrlShiftKeyA,w.CtrlShiftKeyD,w.CtrlShiftKeyM
,w.CtrlShiftKey0,w.CtrlShiftKey1,w.CtrlShiftKey2,w.CtrlShiftKey3,w.CtrlShiftKey4
,w.CtrlShiftKey5,w.CtrlShiftKey6,w.CtrlShiftKey7,w.CtrlShiftKey8,w.CtrlShiftKey9
,w.CtrlKeyM,w.CtrlPageUp,w.CtrlPageDown,w.CtrlInsert,w.CtrlDelete,w.CtrlKeyP,w.CtrlKeyS
,w.CtrlLeft,w.CtrlRight,w.CtrlUp,w.CtrlDown,w.CtrlKeyH,w.CtrlKeyR,w.CtrlKeyG,w.CtrlKeyB
,w.CtrlKeyY,w.CtrlKeyL,w.CtrlKeyN,w.CtrlKeyW,w.CtrlKeyD,w.CtrlKeyV,w.CtrlKeyE,w.
CtrlKeyO,w.CtrlKeyT,w.CtrlKeyQ,w.CtrlKeyA,w.CtrlKeyC,w.CtrlKeyU,w.CtrlKeyZ,w.CtrlKeyX
,w.CtrlKeyI,w.CtrlHome,w.CtrlEnd,w.CtrlKey0,w.CtrlKey1,w.CtrlKey2,w.CtrlKey3,w.CtrlKey4
,w.CtrlKey5,w.CtrlKey6,w.CtrlKey7,w.CtrlKey8,w.CtrlKey9];var sl=[w.Ok,w.Exit,w.Clear
,w.ChannelUp,w.ChannelDown,w.SkipPrev,w.SkipNext,w.Pause,w.Record,w.SlowRev,w.SlowFwd
,w.Eject,w.Repeat,w.Timer,w.Navigation,w.Karaoke,w.Game,w.Setup,w.Angle,w.Mode,w.
Mute,w.User10,w.User11,w.User12,w.User13,w.User14,w.User15,w.User16,w.User17,w.User18
,w.User19,w.Menu,w.VolumeUp,w.VolumeDown,w.Show,w.Hide,w.Play,w.Stop,w.Rev,w.Fwd
,w.SkipBwd,w.SkipFwd,w.Help,w.Red,w.Green,w.Blue,w.Yellow,w.White,w.Magenta,w.TV
,w.DVD,w.VCR,w.EPG,w.OSD,w.Text,w.PIP,w.Audio,w.Clock,w.Subtitle,w.Zoom,w.Index,
w.Info,w.Display,w.Power,w.User0,w.User1,w.User2,w.User3,w.User4,w.User5,w.User6
,w.User7,w.User8,w.User9];var u=oQ.length-1;while((u>=0)&&(oQ[u]!==lO))u--;if(u>=
0)lO=sl[u];return lO;}d.qN=function(ap){var c=this.Core.KeyCode;var mh=ap.type===
"keyup";var keyCode=c.NoKey;var ha=c.NoKey;var charCode=0;if(((ap.type==="keydown"
)||(ap.type==="keypress"))&&this.lr){var ad=this.lr.call(this,ap);if(ad&&ad.KeyCode
)keyCode=ad.KeyCode;else if(ad&&ad.ea)charCode=ad.ea;}if((ap.type==="keypress")&&
!ap.ctrlKey&&(ap.charCode!==13)&&(ap.charCode!==8)&&(keyCode===c.NoKey)&&!charCode
)charCode=ap.charCode;else if((ap.type==="keydown")&&(keyCode===c.NoKey)&&!charCode
){if(ap.ctrlKey&&ap.shiftKey&&!ap.altKey)switch(ap.keyCode){case 13:keyCode=c.CtrlShiftEnter;
break;case 27:keyCode=c.CtrlShiftEscape;break;case 8:keyCode=c.CtrlShiftBackspace;
break;case 9:keyCode=c.CtrlShiftTab;break;case 40:keyCode=c.CtrlShiftDown;break;
case 38:keyCode=c.CtrlShiftUp;break;case 37:keyCode=c.CtrlShiftLeft;break;case 39:
keyCode=c.CtrlShiftRight;break;case 36:keyCode=c.CtrlShiftHome;break;case 35:keyCode=
c.CtrlShiftEnd;break;case 33:keyCode=c.CtrlShiftPageUp;break;case 34:keyCode=c.CtrlShiftPageDown;
break;case 45:keyCode=c.CtrlShiftInsert;break;case 46:keyCode=c.CtrlShiftDelete;
break;case 112:keyCode=c.CtrlShiftF1;break;case 113:keyCode=c.CtrlShiftF2;break;
case 114:keyCode=c.CtrlShiftF3;break;case 115:keyCode=c.CtrlShiftF4;break;case 116:
keyCode=c.CtrlShiftF5;break;case 117:keyCode=c.CtrlShiftF6;break;case 118:keyCode=
c.CtrlShiftF7;break;case 119:keyCode=c.CtrlShiftF8;break;case 120:keyCode=c.CtrlShiftF9;
break;case 121:keyCode=c.CtrlShiftF10;break;case 32:keyCode=c.CtrlShiftSpace;break;
case 48:keyCode=c.CtrlShiftKey0;break;case 49:keyCode=c.CtrlShiftKey1;break;case
50:keyCode=c.CtrlShiftKey2;break;case 51:keyCode=c.CtrlShiftKey3;break;case 52:keyCode=
c.CtrlShiftKey4;break;case 53:keyCode=c.CtrlShiftKey5;break;case 54:keyCode=c.CtrlShiftKey6;
break;case 55:keyCode=c.CtrlShiftKey7;break;case 56:keyCode=c.CtrlShiftKey8;break;
case 57:keyCode=c.CtrlShiftKey9;break;case 96:keyCode=c.CtrlShiftKey0;break;case
97:keyCode=c.CtrlShiftKey1;break;case 98:keyCode=c.CtrlShiftKey2;break;case 99:keyCode=
c.CtrlShiftKey3;break;case 100:keyCode=c.CtrlShiftKey4;break;case 101:keyCode=c.
CtrlShiftKey5;break;case 102:keyCode=c.CtrlShiftKey6;break;case 103:keyCode=c.CtrlShiftKey7;
break;case 104:keyCode=c.CtrlShiftKey8;break;case 105:keyCode=c.CtrlShiftKey9;break;
case 65:keyCode=c.CtrlShiftKeyA;break;case 66:keyCode=c.CtrlShiftKeyB;break;case
67:keyCode=c.CtrlShiftKeyC;break;case 68:keyCode=c.CtrlShiftKeyD;break;case 69:keyCode=
c.CtrlShiftKeyE;break;case 70:keyCode=c.CtrlShiftKeyF;break;case 71:keyCode=c.CtrlShiftKeyG;
break;case 72:keyCode=c.CtrlShiftKeyH;break;case 73:keyCode=c.CtrlShiftKeyI;break;
case 74:keyCode=c.CtrlShiftKeyJ;break;case 75:keyCode=c.CtrlShiftKeyK;break;case
76:keyCode=c.CtrlShiftKeyL;break;case 77:keyCode=c.CtrlShiftKeyM;break;case 78:keyCode=
c.CtrlShiftKeyN;break;case 79:keyCode=c.CtrlShiftKeyO;break;case 80:keyCode=c.CtrlShiftKeyP;
break;case 81:keyCode=c.CtrlShiftKeyQ;break;case 82:keyCode=c.CtrlShiftKeyR;break;
case 83:keyCode=c.CtrlShiftKeyS;break;case 84:keyCode=c.CtrlShiftKeyT;break;case
85:keyCode=c.CtrlShiftKeyU;break;case 86:keyCode=c.CtrlShiftKeyV;break;case 87:keyCode=
c.CtrlShiftKeyW;break;case 88:keyCode=c.CtrlShiftKeyX;break;case 89:keyCode=c.CtrlShiftKeyY;
break;case 90:keyCode=c.CtrlShiftKeyZ;break;}else if(ap.ctrlKey&&!ap.shiftKey&&!
ap.altKey)switch(ap.keyCode){case 13:keyCode=c.CtrlEnter;break;case 27:keyCode=c.
CtrlEscape;break;case 8:keyCode=c.CtrlBackspace;break;case 9:keyCode=c.CtrlTab;break;
case 40:keyCode=c.CtrlDown;break;case 38:keyCode=c.CtrlUp;break;case 37:keyCode=
c.CtrlLeft;break;case 39:keyCode=c.CtrlRight;break;case 36:keyCode=c.CtrlHome;break;
case 35:keyCode=c.CtrlEnd;break;case 33:keyCode=c.CtrlPageUp;break;case 34:keyCode=
c.CtrlPageDown;break;case 45:keyCode=c.CtrlInsert;break;case 46:keyCode=c.CtrlDelete;
break;case 112:keyCode=c.CtrlF1;break;case 113:keyCode=c.CtrlF2;break;case 114:keyCode=
c.CtrlF3;break;case 115:keyCode=c.CtrlF4;break;case 116:keyCode=c.CtrlF5;break;case
117:keyCode=c.CtrlF6;break;case 118:keyCode=c.CtrlF7;break;case 119:keyCode=c.CtrlF8;
break;case 120:keyCode=c.CtrlF9;break;case 121:keyCode=c.CtrlF10;break;case 32:keyCode=
c.CtrlSpace;break;case 48:keyCode=c.CtrlKey0;break;case 49:keyCode=c.CtrlKey1;break;
case 50:keyCode=c.CtrlKey2;break;case 51:keyCode=c.CtrlKey3;break;case 52:keyCode=
c.CtrlKey4;break;case 53:keyCode=c.CtrlKey5;break;case 54:keyCode=c.CtrlKey6;break;
case 55:keyCode=c.CtrlKey7;break;case 56:keyCode=c.CtrlKey8;break;case 57:keyCode=
c.CtrlKey9;break;case 96:keyCode=c.CtrlKey0;break;case 97:keyCode=c.CtrlKey1;break;
case 98:keyCode=c.CtrlKey2;break;case 99:keyCode=c.CtrlKey3;break;case 100:keyCode=
c.CtrlKey4;break;case 101:keyCode=c.CtrlKey5;break;case 102:keyCode=c.CtrlKey6;break;
case 103:keyCode=c.CtrlKey7;break;case 104:keyCode=c.CtrlKey8;break;case 105:keyCode=
c.CtrlKey9;break;case 65:keyCode=c.CtrlKeyA;break;case 66:keyCode=c.CtrlKeyB;break;
case 67:keyCode=c.CtrlKeyC;break;case 68:keyCode=c.CtrlKeyD;break;case 69:keyCode=
c.CtrlKeyE;break;case 70:keyCode=c.CtrlKeyF;break;case 71:keyCode=c.CtrlKeyG;break;
case 72:keyCode=c.CtrlKeyH;break;case 73:keyCode=c.CtrlKeyI;break;case 74:keyCode=
c.CtrlKeyJ;break;case 75:keyCode=c.CtrlKeyK;break;case 76:keyCode=c.CtrlKeyL;break;
case 77:keyCode=c.CtrlKeyM;break;case 78:keyCode=c.CtrlKeyN;break;case 79:keyCode=
c.CtrlKeyO;break;case 80:keyCode=c.CtrlKeyP;break;case 81:keyCode=c.CtrlKeyQ;break;
case 82:keyCode=c.CtrlKeyR;break;case 83:keyCode=c.CtrlKeyS;break;case 84:keyCode=
c.CtrlKeyT;break;case 85:keyCode=c.CtrlKeyU;break;case 86:keyCode=c.CtrlKeyV;break;
case 87:keyCode=c.CtrlKeyW;break;case 88:keyCode=c.CtrlKeyX;break;case 89:keyCode=
c.CtrlKeyY;break;case 90:keyCode=c.CtrlKeyZ;break;}else if(!ap.ctrlKey&&!ap.shiftKey&&
!ap.altKey)switch(ap.keyCode){case 13:keyCode=c.Enter;break;case 27:keyCode=c.Escape;
break;case 8:keyCode=c.Backspace;break;case 9:keyCode=c.Tab;break;case 40:keyCode=
c.Down;break;case 38:keyCode=c.Up;break;case 37:keyCode=c.Left;break;case 39:keyCode=
c.Right;break;case 36:keyCode=c.Home;break;case 35:keyCode=c.End;break;case 33:keyCode=
c.PageUp;break;case 34:keyCode=c.PageDown;break;case 45:keyCode=c.Insert;break;case
46:keyCode=c.Delete;break;case 112:keyCode=c.F1;break;case 113:keyCode=c.F2;break;
case 114:keyCode=c.F3;break;case 115:keyCode=c.F4;break;case 116:keyCode=c.F5;break;
case 117:keyCode=c.F6;break;case 118:keyCode=c.F7;break;case 119:keyCode=c.F8;break;
case 120:keyCode=c.F9;break;case 121:keyCode=c.F10;break;}else if(!ap.ctrlKey&&!
ap.shiftKey&&ap.altKey)switch(ap.keyCode){case 13:keyCode=c.AltEnter;break;case 27:
keyCode=c.AltEscape;break;case 8:keyCode=c.AltBackspace;break;case 9:keyCode=c.AltTab;
break;case 40:keyCode=c.AltDown;break;case 38:keyCode=c.AltUp;break;case 37:keyCode=
c.AltLeft;break;case 39:keyCode=c.AltRight;break;case 36:keyCode=c.AltHome;break;
case 35:keyCode=c.AltEnd;break;case 33:keyCode=c.AltPageUp;break;case 34:keyCode=
c.AltPageDown;break;case 45:keyCode=c.AltInsert;break;case 46:keyCode=c.AltDelete;
break;case 112:keyCode=c.AltF1;break;case 113:keyCode=c.AltF2;break;case 114:keyCode=
c.AltF3;break;case 115:keyCode=c.AltF4;break;case 116:keyCode=c.AltF5;break;case
117:keyCode=c.AltF6;break;case 118:keyCode=c.AltF7;break;case 119:keyCode=c.AltF8;
break;case 120:keyCode=c.AltF9;break;case 121:keyCode=c.AltF10;break;}else if(!ap.
ctrlKey&&ap.shiftKey&&ap.altKey)switch(ap.keyCode){case 13:keyCode=c.AltShiftEnter;
break;case 27:keyCode=c.AltShiftEscape;break;case 8:keyCode=c.AltShiftBackspace;
break;case 9:keyCode=c.AltShiftTab;break;case 40:keyCode=c.AltShiftDown;break;case
38:keyCode=c.AltShiftUp;break;case 37:keyCode=c.AltShiftLeft;break;case 39:keyCode=
c.AltShiftRight;break;case 36:keyCode=c.AltShiftHome;break;case 35:keyCode=c.AltShiftEnd;
break;case 33:keyCode=c.AltShiftPageUp;break;case 34:keyCode=c.AltShiftPageDown;
break;case 45:keyCode=c.AltShiftInsert;break;case 46:keyCode=c.AltShiftDelete;break;
case 112:keyCode=c.AltShiftF1;break;case 113:keyCode=c.AltShiftF2;break;case 114:
keyCode=c.AltShiftF3;break;case 115:keyCode=c.AltShiftF4;break;case 116:keyCode=
c.AltShiftF5;break;case 117:keyCode=c.AltShiftF6;break;case 118:keyCode=c.AltShiftF7;
break;case 119:keyCode=c.AltShiftF8;break;case 120:keyCode=c.AltShiftF9;break;case
121:keyCode=c.AltShiftF10;break;}else if(!ap.ctrlKey&&ap.shiftKey&&!ap.altKey)switch(
ap.keyCode){case 13:keyCode=c.ShiftEnter;break;case 27:keyCode=c.ShiftEscape;break;
case 8:keyCode=c.ShiftBackspace;break;case 9:keyCode=c.ShiftTab;break;case 40:keyCode=
c.ShiftDown;break;case 38:keyCode=c.ShiftUp;break;case 37:keyCode=c.ShiftLeft;break;
case 39:keyCode=c.ShiftRight;break;case 36:keyCode=c.ShiftHome;break;case 35:keyCode=
c.ShiftEnd;break;case 33:keyCode=c.ShiftPageUp;break;case 34:keyCode=c.ShiftPageDown;
break;case 45:keyCode=c.ShiftInsert;break;case 46:keyCode=c.ShiftDelete;break;case
112:keyCode=c.ShiftF1;break;case 113:keyCode=c.ShiftF2;break;case 114:keyCode=c.
ShiftF3;break;case 115:keyCode=c.ShiftF4;break;case 116:keyCode=c.ShiftF5;break;
case 117:keyCode=c.ShiftF6;break;case 118:keyCode=c.ShiftF7;break;case 119:keyCode=
c.ShiftF8;break;case 120:keyCode=c.ShiftF9;break;case 121:keyCode=c.ShiftF10;break;
}ha=qm(keyCode,c);if(ha===this.dy)keyCode=this.dy;else if(keyCode===this.dy)ha=this.
dy;}if((keyCode===c.NoKey)&&!charCode&&(!mh||((this.dy===c.NoKey)&&!this.eZ)))return;
try{if((this.dy!==c.NoKey)&&((keyCode!==this.dy)||mh)){this.b0.DriveKeyboardHitting(
this.dy,0,false);this.dy=c.NoKey;}if(this.eZ&&((charCode!==this.eZ)||mh)){this.b0.
DriveKeyboardHitting(c.NoKey,this.eZ,false);this.eZ=0;}if(charCode&&this.b0.DriveKeyboardHitting(
c.NoKey,charCode,true))this.eZ=charCode;else if((ha!==keyCode)&&(ha!==c.NoKey)&&
this.b0.DriveKeyboardHitting(ha,0,true))this.dy=ha;else if((keyCode!==c.NoKey)&&
this.b0.DriveKeyboardHitting(keyCode,0,true))this.dy=keyCode;this._RequestUpdate(
);}catch(bE){console.log("EmWi error: "+bE+"!");}ap.stopPropagation();ap.preventDefault(
);};d.qM=function(ap){var c=this.Core.KeyCode;try{if(this.dy!==c.NoKey){if(this.
b0.DriveKeyboardHitting)this.b0.DriveKeyboardHitting(this.dy,0,false);else{var i5=
this._NewObject(this.Core.KeyEvent,0);i5.Initialize(this.dy,false);this.b0.DispatchEvent(
i5);}this.dy=c.NoKey;this._RequestUpdate();}if(this.eZ){if(this.b0.DriveKeyboardHitting
)this.b0.DriveKeyboardHitting(c.NoKey,this.eZ,false);else{var i5=this._NewObject(
this.Core.KeyEvent,0);i5.Initialize2(this.eZ,false);this.b0.DispatchEvent(i5);}this.
eZ=0;this._RequestUpdate();}}catch(bE){console.log("EmWi error: "+bE+"!");}};function
la(ap,dz){ap.stopPropagation();ap.preventDefault();var gR=dz.getBoundingClientRect(
);var m=ap.clientX-gR.left;var y=ap.clientY-gR.top;m=((dz.width*m)/dz.offsetWidth
)|0;y=((dz.height*y)/dz.offsetHeight)|0;return[m,y];};d.qO=function(ap){if(this.
gw||ap.rx||this.eh)return;this.eg.focus();document.addEventListener("mousemove",
this.hu,true);document.addEventListener("mouseup",this.jT,true);this.gw=true;var
ay=la(ap,this.eg);try{this.b0.DriveCursorHitting(true,0,ay);this._RequestUpdate(
);}catch(bE){console.log("EmWi error: "+bE+"!");}};d.qQ=function(ap){if(!this.gw||
ap.rx)return;document.removeEventListener("mousemove",this.hu,true);document.removeEventListener(
"mouseup",this.jT,true);this.gw=false;var ay=la(ap,this.eg);try{this.b0.DriveCursorHitting(
false,0,ay);this._RequestUpdate();}catch(bE){console.log("EmWi error: "+bE+"!");
}};d.qP=function(ap){if(!this.gw)return;var ay=la(ap,this.eg);try{this.b0.DriveCursorMovement(
ay);this._RequestUpdate();}catch(bE){console.log("EmWi error: "+bE+"!");}};function
lc(nU,dz){var gR=dz.getBoundingClientRect();var m=nU.clientX-gR.left;var y=nU.clientY-
gR.top;m=((dz.width*m)/dz.offsetWidth)|0;y=((dz.height*y)/dz.offsetHeight)|0;return[
m,y];}d.qU=function(ap){var jo=this.eh;var mA=(new Date()).getTime();if(this.gw||(
this.eh===10))return;for(var g=0;g<ap.changedTouches.length;g++){var dT=ap.changedTouches[
g];var bL=0;var gR=[dT.screenX-16,dT.screenY-16,dT.screenX+32,dT.screenY+32];while((
bL<10)&&((this.hz[bL]!==undefined)||(this.lA[bL]===undefined)||((mA-this.nu[bL])>
500)||!this.qH(gR,this.lA[bL])))bL++;if(bL==10)for(bL=0;(bL<10)&&(this.hz[bL]!==
undefined);)bL++;if(bL==10)return;this.hz[bL]=dT.identifier;this.eh++;try{this.b0.
DriveMultiTouchHitting(true,bL,lc(dT,this.eg));this._RequestUpdate();}catch(bE){
console.log("EmWi error: "+bE+"!");}}if(jo!==this.eh){this.eg.focus();ap.stopPropagation(
);ap.preventDefault();}};d.qS=function(ap){var jo=this.eh;var mA=(new Date()).getTime(
);if(this.eh===0)return;for(var g=0;g<ap.changedTouches.length;g++){var dT=ap.changedTouches[
g];var bL=9;while((bL>=0)&&(this.hz[bL]!==dT.identifier))bL--;if(bL>=0){this.lA[
bL]=[dT.screenX,dT.screenY];this.nu[bL]=mA;this.hz[bL]=undefined;this.eh--;try{this.
b0.DriveMultiTouchHitting(false,bL,lc(dT,this.eg));this._RequestUpdate();}catch(
bE){console.log("EmWi error: "+bE+"!");}}}if(jo!==this.eh){ap.stopPropagation();
ap.preventDefault();}};d.qT=function(ap){var jo=this.eh;if(this.eh===0)return;for(
var g=0;g<ap.changedTouches.length;g++){var dT=ap.changedTouches[g];var bL=9;while((
bL>=0)&&(this.hz[bL]!==dT.identifier))bL--;if(bL>=0){try{this.b0.DriveMultiTouchMovement(
bL,lc(dT,this.eg));this._RequestUpdate();}catch(bE){console.log("EmWi error: "+bE+
"!");}}}if(jo!==this.eh){ap.stopPropagation();ap.preventDefault();}};d._Init=function(
dz,em){var et=this;var aI=document.getElementById(dz);var n3=this.nf();var a=null;
var ax={};var bitmap={};this.qG=(new Date()).getTime();if(em&&em.hasOwnProperty(
"Debug"))this.a_=em.Debug;if(em&&em.hasOwnProperty("FullScreenUpdate"))this.jO=em.
FullScreenUpdate;if(em&&em.hasOwnProperty("Alpha"))this.ll=em.Alpha;if(em&&em.hasOwnProperty(
"OnKeyEvent"))this.lr=em.OnKeyEvent;if(this.a_)console.log("EmWi debug: Initializing application '"+
n3._className+"'.");console.log("EmWi info: Init application for canvas '"+dz+"'. "+
"FullScreenUpdate="+this.jO+", "+"Alpha="+this.ll+", "+"Debug="+this.a_+".");if(
!aI){console.log("EmWi error: Initialization failed. The canvas element '"+dz+"' doesn't exist!"
);return false;}var fZ={depth:false,antialias:false,alpha:this.ll,preserveDrawingBuffer:
!this.jO};a=aI.getContext("webgl",fZ)||aI.getContext("experimental-webgl",fZ);if(
!a){console.log("EmWi error: WebGL context creation failed.");return false;}this.
gv=a.getParameter(a.MAX_TEXTURE_SIZE);if(this.qF>this.gv)this.qF=this.gv;this.qE=(
this.jR/this.gu)|0;a.clearColor(0.0,0.0,0.0,0.0);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL
,true);a.pixelStorei(a.UNPACK_ALIGNMENT,1);a.blendEquation(a.FUNC_ADD);a.blendFunc(
a.ONE,a.ONE_MINUS_SRC_ALPHA);a.disable(a.BLEND);a.cD=new ArrayBuffer(14*6*4);a.hd=
new Float32Array(a.cD);a.ih=new Uint32Array(a.cD);a.k4=0;a.k6=1;a.k5=2;a.bindBuffer(
a.ARRAY_BUFFER,a.createBuffer());a.bufferData(a.ARRAY_BUFFER,a.cD,a.STREAM_DRAW);
a.vertexAttribPointer(a.k4,2,a.FLOAT,false,6*4,0*4);a.vertexAttribPointer(a.k6,3
,a.FLOAT,false,6*4,2*4);a.vertexAttribPointer(a.k5,4,a.UNSIGNED_BYTE,true,6*4,5*
4);a.enableVertexAttribArray(a.k4);a.enableVertexAttribArray(a.k6);a.enableVertexAttribArray(
a.k5);this.ir=a.createTexture();a.bindTexture(a.TEXTURE_2D,this.ir);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER
,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texImage2D(a.TEXTURE_2D,0,a.ALPHA
,this.jR,this.jR,0,a.ALPHA,a.UNSIGNED_BYTE,null);this.ht=new Uint32Array(this.gu
*this.gu/32);ax.Framebuffer=a.getParameter(a.FRAMEBUFFER_BINDING);ax.Format=this.
ci;ax.Width=aI.width;ax.Height=aI.height;ax.io=aI.width;ax.im=aI.height;ax.ee=1/
aI.width;ax.ed=1/aI.height;ax.eW=2/aI.width;ax.eV=2/aI.height;ax.cP=null;bitmap.
Format=this.ci;bitmap.cI=[ax];bitmap.FrameSize=[aI.width,aI.height];bitmap.FrameDelay=
0;bitmap.NoOfFrames=1;bitmap.b6=[{aM:bitmap.cI[0],aP:[0,0]}];if(!p7(a)){console.
log("EmWi error: WebGL initialization failed.");return false;}if(this.a_)eB(a);a.
pJ=[0,0,0,-1,0,0,0,-1,0,0,0,0,0,0,0,1];this.eg=aI;this.bm=a;this.gt=bitmap;try{this.
b0=this._NewObject(n3,0);this.b0.Initialize(this.ue);}catch(bE){console.log("EmWi error: "+
bE+"!");this._Done();return false;}function oW(ap){et.qO(ap);}function sp(ap){et.
qQ(ap);}function ml(ap){et.qP(ap);}function pn(ap){et.qU(ap);}function mC(ap){et.
qS(ap);}function pm(ap){et.qT(ap);}function kK(ap){et.qN(ap);}function n5(ap){et.
qM(ap);}this.lq=oW;this.jT=sp;this.hu=ml;this.nz=pn;this.lB=mC;this.ny=pm;this.jS=
kK;this.sU=n5;aI.addEventListener("mousedown",oW,true);aI.addEventListener("mousemove"
,ml,false);aI.addEventListener("mouseout",ml,false);aI.addEventListener("touchstart"
,pn,true);aI.addEventListener("touchend",mC,false);aI.addEventListener("touchcancel"
,mC,false);aI.addEventListener("touchmove",pm,false);aI.addEventListener("keydown"
,kK,true);aI.addEventListener("keyup",kK,false);aI.addEventListener("keypress",kK
,false);aI.addEventListener("blur",n5,false);this._RequestUpdate();this.nv();this.
_LockObject(this.b0);aI.focus();return true;};d._Done=function(){if(this.a_)console.
log("EmWi debug: De-Initializing application '"+this.nf()._className+"'.");if(this.
eg&&this.lq){var aI=this.eg;aI.removeEventListener("mousedown",this.lq,true);aI.
removeEventListener("mousemove",this.hu,false);aI.removeEventListener("mouseout"
,this.hu,false);aI.removeEventListener("touchstart",this.nz,true);aI.removeEventListener(
"touchend",this.lB,false);aI.removeEventListener("touchcancel",this.lB,false);aI.
removeEventListener("touchmove",this.ny,false);aI.removeEventListener("keydown",
this.jS,true);aI.removeEventListener("keyup",this.jS,false);aI.removeEventListener(
"keypress",this.jS,false);document.removeEventListener("mousemove",this.hu,true);
document.removeEventListener("mouseup",this.jT,true);delete this.lq;delete this.
jT;delete this.hu;delete this.nz;delete this.lB;delete this.ny;delete this.jS;}if(
this.bm){hp(this.bm,null);dK(this.bm,null,null);this.bm.clear(this.bm.COLOR_BUFFER_BIT
);this.bm.flush();this.bm.finish();this.bm.il=null;this.bm.hm=null;this.bm.hn=null;
this.bm.jE=null;this.bm.ho=null;this.bm.jF=null;this.bm.gs=null;this.bm.jG=null;
eB(this.bm);}while(this.fK)lj(this,this.fK);this.ir=null;this.ht=null;this.fK=null;
this.jQ=null;this.gt=null;this.bm=null;this.eg=null;this.df=null;this.dX=null;if(
this.b0)this._UnlockObject(this.b0);this.b0=null;try{this.nt();}catch(bE){console.
log("EmWi error: "+bE+"!");}if(this.a_)console.log("EmWi debug: "+this.gx+" objects after the final GC run."
);this.hx=[];this.hv=null;this.gx=0;this.no=0;this.iv=false;this.iu=false;this.gw=
false;};d.tX=function(aw,ak){return[aw[0]+ak[0],aw[1]+ak[1],aw[2]+ak[0],aw[3]+ak[
1]];};d.tW=function(aw,ak){return[aw[0]-ak[0],aw[1]-ak[1],aw[2]-ak[0],aw[3]-ak[1
]];};d.it=function(cr,cs){var b2=cr[0];var b4=cr[1];var b3=cr[2];var b5=cr[3];var
dt=cs[0];var dv=cs[1];var du=cs[2];var dw=cs[3];if(b3<=b2)b2=b3=0;if(b5<=b4)b4=b5=
0;if(du<=dt)dt=du=0;if(dw<=dv)dv=dw=0;if(b2<dt)b2=dt;if(b3>du)b3=du;if(b4<dv)b4=
dv;if(b5>dw)b5=dw;if(b3<=b2)b2=b3=0;if(b5<=b4)b4=b5=0;return[b2,b4,b3,b5];};d.tF=
function(cr,cs){var b2=cr[0];var b4=cr[1];var b3=cr[2];var b5=cr[3];var dt=cs[0];
var dv=cs[1];var du=cs[2];var dw=cs[3];if(b3<=b2)b2=b3=0;if(b5<=b4)b4=b5=0;if(du<=
dt)dt=du=0;if(dw<=dv)dv=dw=0;if((b2===b3)||(b4===b5))return cs;if((dt===du)||(dv===
dw))return cr;if(b2<dt)b2=dt;if(b3>du)b3=du;if(b4<dv)b4=dv;if(b5>dw)b5=dw;if(b3<=
b2)b2=b3=0;if(b5<=b4)b4=b5=0;return[b2,b4,b3,b5];};d.q5=function(cr,cs){var b2=cr[
0];var b4=cr[1];var b3=cr[2];var b5=cr[3];var dt=cs[0];var dv=cs[1];var du=cs[2];
var dw=cs[3];if(b3<=b2)b2=b3=0;if(b5<=b4)b4=b5=0;if(du<=dt)dt=du=0;if(dw<=dv)dv=
dw=0;if((b2===b3)||(b4===b5))return cs;if((dt===du)||(dv===dw))return cr;if(b2>dt
)b2=dt;if(b3<du)b3=du;if(b4>dv)b4=dv;if(b5<dw)b5=dw;if(b3<=b2)b2=b3=0;if(b5<=b4)
b4=b5=0;return[b2,b4,b3,b5];};d.tD=function(aw,jY){return[aw[0]-jY[0],aw[1]-jY[1
],aw[2]+jY[0],aw[3]+jY[1]];};d.uq=function(aw,j9){return[aw[0],j9,aw[2],aw[3]];};
d.uo=function(aw,j8){return[aw[0],aw[1],j8,aw[3]];};d.un=function(aw,aY){return[
aY,aw[1],aY+aw[2]-aw[0],aw[3]];};d.up=function(aw,bj){return[aw[0],bj,aw[2],bj+aw[
3]-aw[1]];};d.um=function(aw,ru){return[aw[0],aw[1],aw[0]+ru,aw[3]];};d.uj=function(
aw,rc){return[aw[0],aw[1],aw[2],aw[1]+rc];};d.uk=function(aw,j3){return[j3[0],j3[
1],j3[0]+aw[2]-aw[0],j3[1]+aw[3]-aw[1]];};d.ul=function(aw,br){return[aw[0],aw[1
],aw[0]+br[0],aw[1]+br[1]];};d.tI=function(cr,cs){return(cr[0]===cs[0])&&(cr[1]===
cs[1])&&(cr[2]===cs[2])&&(cr[3]===cs[3]);};d.qH=function(aw,cS){if((cS[0]<aw[0])||(
cS[0]>=aw[2]))return false;if((cS[1]<aw[1])||(cS[1]>=aw[3]))return false;return true;
};d.tr=function(aw){return(aw[2]-aw[0])*(aw[3]-aw[1]);};d.ts=function(aw){var m=
aw[0];var y=aw[1];return[m+((aw[2]-m)>>1),y+((aw[3]-y)>>1)];};d.tq=function(aw){
return[Math.abs(aw[0]),Math.abs(aw[1]),Math.abs(aw[2]),Math.abs(aw[3])];};d.tu=function(
){var ae=arguments.length;var aD=arguments[0];aD=[aD[0],aD[1],aD[2],aD[3]];for(var
g=1;g<ae;g++){var e=arguments[g];if(e[0]<aD[0])aD[0]=e[0];if(e[1]<aD[1])aD[1]=e[
1];if(e[2]<aD[2])aD[2]=e[2];if(e[3]<aD[3])aD[3]=e[3];}return aD;};d.tt=function(
){var ae=arguments.length;var aD=arguments[0];aD=[aD[0],aD[1],aD[2],aD[3]];for(var
g=1;g<ae;g++){var e=arguments[g];if(e[0]>aD[0])aD[0]=e[0];if(e[1]>aD[1])aD[1]=e[
1];if(e[2]>aD[2])aD[2]=e[2];if(e[3]>aD[3])aD[3]=e[3];}return aD;};d.tV=function(
cS,ak){return[cS[0]+ak[0],cS[1]+ak[1]];};d.tU=function(cS,ak){return[cS[0]-ak[0]
,cS[1]-ak[1]];};d.tH=function(nQ,nR){return(nQ[0]===nR[0])&&(nQ[1]===nR[1]);};d.
tm=function(cS){return[Math.abs(cS[0]),Math.abs(cS[1])];};d.to=function(){var ae=
arguments.length;var aD=arguments[0];aD=[aD[0],aD[1]];for(var g=1;g<ae;g++){var e=
arguments[g];if(e[0]<aD[0])aD[0]=e[0];if(e[1]<aD[1])aD[1]=e[1];}return aD;};d.tn=
function(){var ae=arguments.length;var aD=arguments[0];aD=[aD[0],aD[1]];for(var g=
1;g<ae;g++){var e=arguments[g];if(e[0]>aD[0])aD[0]=e[0];if(e[1]>aD[1])aD[1]=e[1];
}return aD;};d.t$=function(a$,bg){var az=(a$&0xFF)+(bg&0xFF);var cL=((a$>>8)&0xFF
)+((bg>>8)&0xFF);var a3=((a$>>16)&0xFF)+((bg>>16)&0xFF);var bW=((a$>>24)&0xFF)+((
bg>>24)&0xFF);if(az>255)az=255;if(cL>255)cL=255;if(a3>255)a3=255;if(bW>255)bW=255;
return az|(cL<<8)|(a3<<16)|(bW<<24);};d.tT=function(a$,bg){var az=(a$&0xFF)-(bg&
0xFF);var cL=((a$>>8)&0xFF)-((bg>>8)&0xFF);var a3=((a$>>16)&0xFF)-((bg>>16)&0xFF
);var bW=((a$>>24)&0xFF)-((bg>>24)&0xFF);if(az<0)az=0;if(cL<0)cL=0;if(a3<0)a3=0;
if(bW<0)bW=0;return az|(cL<<8)|(a3<<16)|(bW<<24);};d.sS=function(a$,bg){var az=(
bg&0xFF);var cL=((bg>>8)&0xFF);var a3=((bg>>16)&0xFF);var bW=((bg>>24)&0xFF);var
kL=255-bW;az=((az*bW)+((a$&0xFF)*kL))/255;cL=((cL*bW)+(((a$>>8)&0xFF)*kL))/255;a3=((
a3*bW)+(((a$>>16)&0xFF)*kL))/255;bW=255-((kL*(255-((a$>>24)&0xFF)))/255);if(az>255
)az=255;if(cL>255)cL=255;if(a3>255)a3=255;if(bW>255)bW=255;return az|(cL<<8)|(a3<<
16)|(bW<<24);};d.sT=function(cQ,fM){var az=(cQ&0xFF);var cL=((cQ>>8)&0xFF);var a3=((
cQ>>16)&0xFF);var bW=((cQ>>24)&0xFF);if(fM<0)fM=0;if(fM>255)fM=255;az=(az*fM)/255;
cL=(cL*fM)/255;a3=(a3*fM)/255;bW=(bW*fM)/255;return az|(cL<<8)|(a3<<16)|(bW<<24);
};d.te=function(){var ae=arguments.length;var aD=arguments[0];var b=aD&0x000000FF;
var aL=aD&0x0000FF00;var hb=aD&0x00FF0000;var hc=(aD>>8)&0x00FF0000;for(var g=1;
g<ae;g++){var e=arguments[g];var bN=e&0x000000FF;var bF=e&0x0000FF00;var jl=e&0x00FF0000;
var jm=(e>>8)&0x00FF0000;if(bN<b)b=bN;if(bF<aL)aL=bF;if(jl<hb)hb=jl;if(jm<hc)hc=
jm;}return b|aL|hb|(hc<<8);};d.td=function(){var ae=arguments.length;var aD=arguments[
0];var b=aD&0x000000FF;var aL=aD&0x0000FF00;var hb=aD&0x00FF0000;var hc=aD&0xFF000000;
for(var g=1;g<ae;g++){var e=arguments[g];var bN=e&0x000000FF;var bF=e&0x0000FF00;
var jl=e&0x00FF0000;var jm=e&0xFF000000;if(bN>b)b=bN;if(bF>aL)aL=bF;if(jl>hb)hb=
jl;if(jm>hc)hc=jm;}return b|aL|hb|hc;};d.t2=function(dF,al,bJ){if((bJ!==2)&&(bJ!==
8)&&(bJ!==16))bJ=10;if(al>128)al=128;var e=dF.toString(bJ);var gq=al-e.length;if(
gq>0)e=d.jW.slice(0,gq)+e;return e;};d.t1=function(dF,al,bJ){if((bJ!==2)&&(bJ!==
8)&&(bJ!==16))bJ=10;var aD=(dF<0)?-dF:dF;if(al>128)al=128;var e=aD.toString(bJ);
var gq=al-e.length-((dF<0)?1:0);if(gq>0)e=d.jW.slice(0,gq)+e;if(dF<0)return"-"+e;
else return e;};d.t0=function(dF,al,iJ){if(al<0)al=0;if(al>32)al=32;if(iJ<0)iJ=0;
if(iJ>32)iJ=32;var jd=(dF<0)?"-":"";var e=Math.abs(dF).toFixed(iJ);var gq=al-e.length-
jd.length;if(gq>0)e=d.jW.slice(0,gq)+e;return jd+e;};d.tZ=function(lM,al){al=Math.
floor(al);if(al<=0)return this.hr;return new Array(al+1).join(String.fromCharCode(
lM));};d.uv=function(k,al){if(al<=0)return this.hr;if(al>=k.length)return k;return k.
slice(0,al|0);};d.uC=function(k,al){if(al<=0)return this.hr;if(al>=k.length)return k;
return k.slice(-(al|0));};d.uw=function(k,bh,al){var aO=(bh>0)?(bh|0):0;var cX=(
bh+al)|0;var bo=k.length;if((aO>=bo)||(cX<=0)||(aO>=cX))return this.hr;if((aO===
0)&&(cX>=bo))return k;return k.slice(aO,cX);};d.uu=function(hK,iV,bh){var ph=hK.
length;var st=iV.length;if(st<=0)return hK;if(ph<=0)return iV;if(bh<0)return iV+
hK;if(bh>=ph)return hK+iV;return hK.slice(0,(bh|=0))+iV+hK.slice(bh);};d.uB=function(
k,bh,al){var aO=(bh>=0)?(bh|0):0;var cX=(bh+al)|0;var bo=k.length;if((aO>=bo)||(
cX<=0)||(aO>=cX))return k;return k.slice(0,aO)+k.slice(cX);};d.q4=function(k,gE,
bJ){if((bJ!==2)&&(bJ!==8)&&(bJ!==16))bJ=10;var e=parseInt(k,bJ);if(!isNaN(e))return e;
return gE;};d.uz=function(k,gE,bJ){if((bJ!==2)&&(bJ!==8)&&(bJ!==16))bJ=10;var e=
parseInt(k,bJ);if(!isNaN(e)){if(e<0)e+=0x100000000;return e;}return gE;};d.uy=d.
q4;d.uA=function(k,gE,bJ){if((bJ!==2)&&(bJ!==8)&&(bJ!==16))bJ=10;var e=parseInt(
k,bJ);if(!isNaN(e)){if(e<0)e+=0x10000000000000000;return e;}return gE;};d.ux=function(
k,gE){var e=parseFloat(k);if(!isNaN(e))return e;return gE;};d.ur=function(k,bh,lM
){if((bh<0)||(bh>=k.length))return k;return k.slice(0,bh)+String.fromCharCode(lM
)+k.slice(bh+1);};d.tJ=function(iK,iL){if(!iK&&!iL)return true;if(!iK||!iL)return false;
return(iK[0]===iL[0])&&(iK[1]===iL[1])&&(iK[2]===iL[2]);};d.tK=function(j5,j6){if(
!j5&&!j6)return true;if(!j5||!j6)return false;return(j5[0]===j6[0])&&(j5[1]===j6[
1]);};d.ub=function(iW,l0){return(iW+((l0-iW)*Math.random()))|0;};d.ua=function(
iW,l0){return iW+((l0-iW)*Math.random());};d.s6=function(dF){return dF-Math.trunc(
dF);};d.tL=function(aY,bj){return Math.sqrt((aY*aY)+(bj*bj));};d.tM=function(cS){
return Math.sqrt((cS[0]*cS[0])+(cS[1]*cS[1]));};function eB(o){var n2=false;var oD;
while((oD=o.getError())!==o.NO_ERROR){console.log("EmWi error: WebGL error '"+oD+
"' reported.");n2=true;}return n2;}var qq="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+
"attribute highp   vec2 dst_pos;\n"+"\n"+"void main()\n"+"{\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var qr="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute lowp    vec4 src_clr;\n"+"varying   lowp    vec4 src_clr_var;\n"+"\n"+
"void main()\n"+"{\n"+"  src_clr_var = vec4( src_clr.rgb * src_clr.a, src_clr.a );\n"+
"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+"}\n";var qs=
"precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute highp   vec3 src_pos;\n"+"varying   highp   vec3 src_pos_var;\n"+"\n"+
"void main()\n"+"{\n"+"  src_pos_var = src_pos;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var qt="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute highp   vec3 src_pos;\n"+"attribute lowp    vec4 src_clr;\n"+"varying   highp   vec3 src_pos_var;\n"+
"varying   lowp    vec4 src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  src_clr_var = vec4( src_clr.rgb * src_clr.a, src_clr.a );\n"+
"  src_pos_var = src_pos;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var pP="precision mediump float;\n"+"void main()\n"+"{\n"+"  gl_FragColor = vec4( 0.0, 0.0, 0.0, 0.0 );\n"+
"}\n";var pQ="precision mediump float;\n"+"varying   lowp vec4 src_clr_var;\n"+"\n"+
"void main()\n"+"{\n"+"  gl_FragColor = src_clr_var;\n"+"}\n";var pR="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_pos_var.xy );\n"+
"}\n";var pS="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2DProj( src, src_pos_var );\n"+
"}\n";var pT="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_pos_var.xy ) * src_clr_var.a;\n"+
"}\n";var pU="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2DProj( src, src_pos_var ) * src_clr_var.a;\n"+
"}\n";var pV="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_pos_var.xy ).a * src_clr_var;\n"+
"}\n";var pW="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2DProj( src, src_pos_var ).a * src_clr_var;\n"+
"}\n";var pX="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+
"uniform   highp   vec2      src_ofs;\n"+"varying   highp   vec3      src_pos_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size );\n"+
"}\n";var pY="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+
"uniform   highp   vec2      src_ofs;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size )\n"+
"                            * src_clr_var.a;\n"+"}\n";var pZ="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+"uniform   highp   vec2      src_ofs;\n"+
"varying   highp   vec3      src_pos_var;\n"+"varying   lowp    vec4      src_clr_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size ).a\n"+
"                            * src_clr_var;\n"+"}\n";function p7(o){var sD=dx(o,
o.VERTEX_SHADER,qq);var sE=dx(o,o.VERTEX_SHADER,qr);var mE=dx(o,o.VERTEX_SHADER,
qs);var ig=dx(o,o.VERTEX_SHADER,qt);var r4=dx(o,o.FRAGMENT_SHADER,pP);var r5=dx(
o,o.FRAGMENT_SHADER,pQ);var r6=dx(o,o.FRAGMENT_SHADER,pR);var r7=dx(o,o.FRAGMENT_SHADER
,pS);var r8=dx(o,o.FRAGMENT_SHADER,pT);var r9=dx(o,o.FRAGMENT_SHADER,pU);var r_=
dx(o,o.FRAGMENT_SHADER,pV);var r$=dx(o,o.FRAGMENT_SHADER,pW);var sa=dx(o,o.FRAGMENT_SHADER
,pX);var sb=dx(o,o.FRAGMENT_SHADER,pY);var sc=dx(o,o.FRAGMENT_SHADER,pZ);o.il=ez(
o,sD,r4);o.hm=ez(o,sE,r5);o.hn=ez(o,mE,r6);o.jE=ez(o,mE,r7);o.ho=ez(o,ig,r8);o.jF=
ez(o,ig,r9);o.gs=ez(o,ig,r_);o.jG=ez(o,ig,r$);o.lg=ez(o,mE,sa);o.lh=ez(o,ig,sb);
o.li=ez(o,ig,sc);if(o.il&&o.hm&&o.hn&&o.jE&&o.ho&&o.jF&&o.gs&&o.jG&&o.lg&&o.lh&&
o.li)return true;o.il=null;o.hm=null;o.hn=null;o.jE=null;o.ho=null;o.jF=null;o.gs=
null;o.jG=null;o.lg=null;o.lh=null;o.li=null;return false;}function dx(o,ro,rp){
var jc=o.createShader(ro);o.shaderSource(jc,rp);o.compileShader(jc);var be=o.getShaderParameter(
jc,o.COMPILE_STATUS);var log=o.getShaderInfoLog(jc);if(be&&log.length)console.log(
"EmWi info: "+log);if(!be)console.log("EmWi error: "+log);if(!be)return null;return jc;
}function ez(o,nX,nI){var c$=o.createProgram();if(!nX||!nI)return null;o.attachShader(
c$,nX);o.attachShader(c$,nI);o.bindAttribLocation(c$,o.k4,"dst_pos");o.bindAttribLocation(
c$,o.k6,"src_pos");o.bindAttribLocation(c$,o.k5,"src_clr");o.linkProgram(c$);var
be=o.getProgramParameter(c$,o.LINK_STATUS);var log=o.getProgramInfoLog(c$);if(be&&
log.length)console.log("EmWi info: "+log);if(!be)console.log("EmWi error: "+log);
if(!be)return null;var sy=o.getUniformLocation(c$,"dst_map");var pp=o.getUniformLocation(
c$,"src");var sz=o.getUniformLocation(c$,"src_ofs");var sA=o.getUniformLocation(
c$,"src_size");o.useProgram(c$);if(pp>=0)o.uniform1i(pp,0);c$.qn=sy;c$.qo=sz;c$.
qp=sA;return c$;}function dK(o,aa,eE){if(aa!==o.m0){if(aa&&aa.cP&&!aa.Framebuffer
){aa.Framebuffer=o.createFramebuffer();o.bindFramebuffer(o.FRAMEBUFFER,aa.Framebuffer
);o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,aa.cP,0);
}else if(aa)o.bindFramebuffer(o.FRAMEBUFFER,aa?aa.Framebuffer:null);if(aa)o.viewport(
0,0,aa.io,aa.im);o.m0=aa;}if(o.pE!==eE){o.useProgram(eE);o.pE=eE;}if(aa&&eE&&((aa.
eW!==eE.eW)||(aa.eV!==eE.eV)||(!!aa.cP!==!!eE.cP))){var g3=o.pJ;if(aa.cP){g3[0]=
aa.eW;g3[5]=aa.eV;g3[7]=-1;}else{g3[0]=aa.eW;g3[5]=-aa.eV;g3[7]=1;}o.uniformMatrix4fv(
eE.qn,false,g3);eE.eW=aa.eW;eE.eV=aa.eV;eE.cP=!!aa.cP;}if(aa&&aa.jv){o.clear(o.COLOR_BUFFER_BIT
);aa.jv=false;}}function hp(o,aC,fP){if(aC!==o.fH){if(aC)o.bindTexture(o.TEXTURE_2D
,aC.cP);o.fH=aC;}if(aC&&(!aC.pK!==!fP)){if(fP){o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER
,o.LINEAR);o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR);}else{o.texParameteri(
o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST);o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER
,o.NEAREST);}aC.pK=fP;}}function aU(a$,bg,hG){if(hG<=0)return a$;if(hG>=1)return bg;
var l4=(a$&0xFF);var l5=((a$>>8)&0xFF);var l6=((a$>>16)&0xFF);var l7=((a$>>24)&0xFF
);var ry=(bg&0xFF);var rz=((bg>>8)&0xFF);var rA=((bg>>16)&0xFF);var rB=((bg>>24)&
0xFF);l4+=(ry-l4)*hG;l5+=(rz-l5)*hG;l6+=(rA-l6)*hG;l7+=(rB-l7)*hG;return l4|(l5<<
8)|(l6<<16)|(l7<<24);}function jy(bw,gO,cq,lX,d2){for(var g=0;g<(cq-(lX?1:0));g++
){var bY=g;var cY=(g+1)%cq;var kD=bw[bY*6];var mc=bw[cY*6];if(((d2>kD)&&(d2<mc))||((
d2<kD)&&(d2>mc))){var cB=(d2-kD)/(mc-kD);var fu=1.0-cB;var eL=(cq-g-1)*6;if(eL>0
){var aO=(g+1)*6;bw.set(bw.subarray(aO,aO+eL),aO+6);}cq++;if(cY)cY++;g++;var j=bw[
bY=bY*6+1];var cd=bw[bY+=1];var bN=bw[bY+=1];var fB=bw[bY+=1];var cb=gO[bY+1];var
q=bw[cY=cY*6+1];var cM=bw[cY+=1];var bF=bw[cY+=1];var jq=bw[cY+=1];var en=gO[cY+
1];if(j!==q)j=j*fu+q*cB;if(cd!==cM)cd=cd*fu+cM*cB;if(bN!==bF)bN=bN*fu+bF*cB;if(fB
!==jq)fB=fB*fu+jq*cB;if(cb!==en)cb=aU(cb,en,cB);bw[bY=g*6]=d2;bw[bY+=1]=j;bw[bY+=
1]=cd;bw[bY+=1]=bN;bw[bY+=1]=fB;gO[bY+1]=cb;}}return cq;}function jx(bw,gO,cq,lX
,d2){for(var g=0;g<(cq-(lX?1:0));g++){var bY=g;var cY=(g+1)%cq;var kE=bw[bY*6+1];
var md=bw[cY*6+1];if(((d2>kE)&&(d2<md))||((d2<kE)&&(d2>md))){var cB=(d2-kE)/(md-
kE);var fu=1.0-cB;var eL=(cq-g-1)*6;if(eL>0){var aO=(g+1)*6;bw.set(bw.subarray(aO
,aO+eL),aO+6);}cq++;if(cY)cY++;g++;var l=bw[bY*=6];var cd=bw[bY+=2];var bN=bw[bY+=
1];var fB=bw[bY+=1];var cb=gO[bY+1];var t=bw[cY*=6];var cM=bw[cY+=2];var bF=bw[cY+=
1];var jq=bw[cY+=1];var en=gO[cY+1];if(l!==t)l=l*fu+t*cB;if(cd!==cM)cd=cd*fu+cM*
cB;if(bN!==bF)bN=bN*fu+bF*cB;if(fB!==jq)fB=fB*fu+jq*cB;if(cb!==en)cb=aU(cb,en,cB
);bw[bY=g*6]=l;bw[bY+=1]=d2;bw[bY+=1]=cd;bw[bY+=1]=bN;bw[bY+=1]=fB;gO[bY+1]=cb;}
}return cq;}function mT(n,cq,rf,rn){for(var g=0;g<cq;g++){var m=n[g*6];if((m<rf)||(
m>rn)){var eL=(cq-g-1)*6;if(eL>0){var aO=(g+1)*6;n.set(n.subarray(aO,aO+eL),aO-6
);}g--;cq--;}}return cq;}function mS(n,cq,rs,q8){for(var g=0;g<cq;g++){var y=n[g
*6+1];if((y<rs)||(y>q8)){var eL=(cq-g-1)*6;if(eL>0){var aO=(g+1)*6;n.set(n.subarray(
aO,aO+eL),aO-6);}g--;cq--;}}return cq;}var k7=[0x00000000,0x00000001,0x00000003,
0x00000007,0x0000000F,0x0000001F,0x0000003F,0x0000007F,0x000000FF,0x000001FF,0x000003FF
,0x000007FF,0x00000FFF,0x00001FFF,0x00003FFF,0x00007FFF,0x0000FFFF,0x0001FFFF,0x0003FFFF
,0x0007FFFF,0x000FFFFF,0x001FFFFF,0x003FFFFF,0x007FFFFF,0x00FFFFFF,0x01FFFFFF,0x03FFFFFF
,0x07FFFFFF,0x0FFFFFFF,0x1FFFFFFF,0x3FFFFFFF,0x7FFFFFFF,0xFFFFFFFF];function pN(
aj,gK,fS){var si=aj.gu-fS;var g1=aj.gu>>5;for(var az=0;az<=si;az++)for(var an=0;
an<g1;an++){var ae=32-gK;var fy=k7[gK];var pr=aj.ht[az*g1+an];var eM;do{while(ae&&(
pr&fy)){fy<<=1;ae--;}eM=!(pr&fy);for(var mu=az+1;eM&&(mu<(az+fS));mu++)eM=!(aj.ht[
mu*g1+an]&fy);if(!eM){fy<<=1;ae--;}}while(!eM&&(ae>0));if(eM)return[(an*32)+32-gK-
ae,az];}return null;}function qk(aj,fj,iP,gK,fS){var fy=k7[gK]<<(fj&0x1F);var an=
fj>>5;var g1=aj.gu>>5;for(;fS>0;iP++,fS--)aj.ht[iP*g1+an]|=fy;}function qj(aj,fj
,iP,gK,fS){var fy=~(k7[gK]<<(fj&0x1F));var an=fj>>5;var g1=aj.gu>>5;for(;fS>0;iP++
,fS--)aj.ht[iP*g1+an]&=fy;}function mN(aj,cp){cp.hk=aj.fK;cp.fe=null;if(aj.fK)aj.
fK.fe=cp;else aj.jQ=cp;aj.fK=cp;cp.Cache[cp.ea]=cp;}function lj(aj,cp){if(cp.hk)
cp.hk.fe=cp.fe;else aj.jQ=cp.fe;if(cp.fe)cp.fe.hk=cp.hk;else aj.fK=cp.hk;cp.hk=null;
cp.fe=null;cp.Cache[cp.ea]=null;}function eb(a7,fm,al){var kF=0;var min=0;var max=
al-1;var di=-1;var ay;while(max>=min){kF=(max+min)>>1;ay=kF*8;di=a7-fm.charCodeAt(
ay);if(!di)return ay;if(di>0)min=kF+1;else if(di<0)max=kF-1;}return-1;}var hh=[[
0x10,0x01],[0x02,0x05],[0x03,0x04],[0x11,0x12],[0x14,0x18],[0x06,0x09],[0x07,0x08
],[0x13,0x16],[0x17,0x1C],[0x0A,0x0B],[0x1E,0x1F],[0x0C,0x0D],[0x15,0x19],[0x1A,
0x0E],[0x1B,0x1D]];function pF(aC,aG,ak,al){var f;var u=0;var eT=0;var d4=0;var hV=
aG.length;eT=ak>>4;ak&=0xF;f=aC.charCodeAt(eT++)>>ak;while(al--){if(f&1)u=hh[u][
1];else u=hh[u][0];if(u>15){u-=16;aG[d4++]=(u&0x01)?0xFF:0x00;if(d4!==hV)aG[d4++
]=(u&0x02)?0xFF:0x00;if(d4!==hV)aG[d4++]=(u&0x04)?0xFF:0x00;if(d4!==hV)aG[d4++]=(
u&0x08)?0xFF:0x00;u=0;}if((ak=(ak+1))&0x0F)f>>=1;else f=aC.charCodeAt(eT++);}}function
pG(aC,aG,ak,al){var po=[0x00,0x55,0xAA,0xFF];var f;var u=0;var eT=0;var d4=0;var
hV=aG.length;eT=ak>>4;ak&=0xF;f=aC.charCodeAt(eT++)>>ak;while(al--){if(f&1)u=hh[
u][1];else u=hh[u][0];if(u>15){u-=16;aG[d4++]=po[u&0x03];if(d4!==hV)aG[d4++]=po[
u>>2];u=0;}if((ak=(ak+1))&0x0F)f>>=1;else f=aC.charCodeAt(eT++);}}function pH(aC
,aG,ak,al){var f;var u=0;var eT=0;var d4=0;var hV=aG.length;eT=ak>>4;ak&=0xF;f=aC.
charCodeAt(eT++)>>ak;while(al--){if(f&1)u=hh[u][1];else u=hh[u][0];if(u>15){u-=16;
aG[d4++]=u|(u<<4);u=0;}if((ak=(ak+1))&0x0F)f>>=1;else f=aC.charCodeAt(eT++);}}function
qu(bq,al,aE){var d5=0;var ep=aE;al-=aE;while(al--)bq[ep++]^=bq[d5++];}d.nm=function(
j0,nJ,q$,rj){var bitmap={cI:[],b6:[],bO:null};var kO=Math.max(rj,1);var width=nJ[
0];var height=nJ[1];var a=this.bm;if((j0!==d.ci)&&(j0!==d.ly)){console.log("EmWi error: Wrong pixel format of bitmap to create."
);return null;}if((width<=0)||(width>(this.gv-2))||(height<=0)||(height>(this.gv-
2))){console.log("EmWi error: Invalid size of bitmap to create.");return null;}var
gg=((this.gv-1)/(width+1))|0;var mk=((this.gv-1)/(height+1))|0;var h2=gg*mk;var oM=(
kO%h2)||h2;var oN=Math.min(oM,gg);var oO=((oM+gg-1)/gg)|0;var so=gg*width+gg+1;var
sn=mk*height+mk+1;var sk=oN*width+oN+1;var sj=oO*height+oO+1;var o5=((kO+h2-1)/h2
)|0;for(var g=0;g<o5;g++){a.getError();var g$=so;var g_=sn;var es=a.createTexture(
);var ax={};if(g===(o5-1)){g$=sk;g_=sj;}a.fH=null;a.bindTexture(a.TEXTURE_2D,es);
a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D
,a.TEXTURE_MAG_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.
CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);if(
j0===this.ci)a.texImage2D(a.TEXTURE_2D,0,a.RGBA,g$,g_,0,a.RGBA,a.UNSIGNED_BYTE,null
);else a.texImage2D(a.TEXTURE_2D,0,a.ALPHA,g$,g_,0,a.ALPHA,a.UNSIGNED_BYTE,null);
ax.Format=j0;ax.Width=g$;ax.Height=g_;ax.io=g$;ax.im=g_;ax.ee=1/g$;ax.ed=1/g_;ax.
eW=2/g$;ax.eV=2/g_;ax.cP=es;ax.Framebuffer=null;bitmap.cI[g]=ax;if(this.a_)eB(a);
}for(var g=0;g<kO;g++){var gc=g%h2;var o7=gc%gg;var o8=(gc/gg)|0;var cu={};cu.aM=
bitmap.cI[(g/h2)|0];cu.aP=[(o7*width)+o7+1,(o8*height)+o8+1];bitmap.b6[g]=cu;}bitmap.
FrameSize=[width,height];bitmap.FrameDelay=q$;bitmap.NoOfFrames=kO;return bitmap;
};function m8(aj,bX){try{var ol=bX.fg;var eO=bX.Image;var width=eO.width;var height=
eO.height;var gY=bX.FrameSize[0];var hX=bX.FrameSize[1];var o2=(width/gY)|0;var a=
aj.bm;delete bX.fg;delete bX.Image;if(!ol.bitmap)return;if((eO.width===gY)&&(eO.
height===hX)){var cu=bX.b6[0];var es=cu.aM.cP;var a1=cu.aP[0];var aJ=cu.aP[1];a.
bindTexture(a.TEXTURE_2D,es);a.fH=null;if(cu.aM.Format===aj.ci)a.texSubImage2D(a.
TEXTURE_2D,0,a1,aJ,a.RGBA,a.UNSIGNED_BYTE,eO);else a.texSubImage2D(a.TEXTURE_2D,
0,a1,aJ,a.ALPHA,a.UNSIGNED_BYTE,eO);}else{var aI=document.createElement('canvas'
);var l_;aI.width=gY;aI.height=hX;l_=aI.getContext("2d");for(var g=0;g<bX.qi;g++
){var cu=bX.b6[g];var es=cu.aM.cP;var a1=cu.aP[0];var aJ=cu.aP[1];var kT=(g/o2)|
0;var l8=g-(kT*o2);var su=l8*gY;var sv=kT*hX;l_.clearRect(0,0,gY,hX);l_.drawImage(
eO,su,sv,gY,hX,0,0,gY,hX);a.bindTexture(a.TEXTURE_2D,es);a.fH=null;if(cu.aM.Format===
aj.ci)a.texSubImage2D(a.TEXTURE_2D,0,a1,aJ,a.RGBA,a.UNSIGNED_BYTE,aI);else a.texSubImage2D(
a.TEXTURE_2D,0,a1,aJ,a.ALPHA,a.UNSIGNED_BYTE,aI);}}aj.qJ(ol,0);aj._RequestUpdate(
);}catch(bE){console.log("EmWi error: "+bE+"!");}}function qa(aj,bX){try{var eO=
bX.Image;var height=eO.height;var bitmap=aj.nm(aj.ci,[eO.width,eO.height],0,1);bX.
cI=bitmap.cI;bX.b6=bitmap.b6;bX.FrameSize=bitmap.FrameSize;bX.fg.FrameSize=bitmap.
FrameSize;m8(aj,bX);}catch(bE){console.log("EmWi error: "+bE+"!");}}d.tN=function(
c8,lN){var mx=this;var bitmap=this.nm(c8.Format,c8.FrameSize,c8.FrameDelay,c8.NoOfFrames
);if(!bitmap)return;bitmap.qi=bitmap.NoOfFrames;bitmap.fg=lN;bitmap.Image=new Image(
);bitmap.Image.addEventListener('load',function(){m8(mx,bitmap);});bitmap.Image.
src=c8.FileName;if(c8.FrameMapping){bitmap.bO=c8.FrameMapping;bitmap.NoOfFrames=
bitmap.bO.length;}return bitmap;};d.s9=function(bX){var a=this.bm;if(!bX)return;
for(var g=0;bX.cI&&(g<bX.cI.length);g++){var ax=bX.cI[g];if(ax.cP)a.deleteTexture(
ax.cP);if(ax.Framebuffer)a.deleteFramebuffer(ax.Framebuffer);}bX.cI=null;bX.b6=null;
bX.NoOfFrames=0;};d.tO=function(nP,lN){var mx=this;var bitmap={cI:[],b6:[]};var ax={
};var cu={};ax.Format=this.ci;ax.Width=1;ax.Height=1;ax.io=1;ax.im=1;ax.ee=1;ax.
ed=1;ax.eW=2;ax.eV=2;ax.cP=null;ax.Framebuffer=null;cu.aM=ax;cu.aP=[0,0];bitmap.
cI[0]=ax;bitmap.b6[0]=cu;bitmap.FrameSize=[1,1];bitmap.FrameDelay=0;bitmap.NoOfFrames=
1;bitmap.fg=lN;bitmap.Image=new Image();bitmap.Image.addEventListener('load',function(
){qa(mx,bitmap);});bitmap.Image.src=nP;return bitmap;};d.tg=function(nP,d0,uI,uJ
,uH,hH,uK,uM,uL){return null;};d.tP=function(c8){var f=c8.Data();var ah={Cache:c8.
Cache,Ascent:f[0],Descent:f[1],Leading:f[2],fF:f[5],ey:f[4],fD:f[6],jD:f[7],m6:f[
8],p5:f[9],hi:null};if(f[3]===2)ah.k8=pF;if(f[3]===4)ah.k8=pG;if(f[3]===16)ah.k8=
pH;return ah;};d.s_=function(ac){};d.nr=function(ac,a7){if(!ac){if(this.a_)console.
log("EmWi error: Invalid font resource.");return null;}var z=ac.Cache[a7];if(z){
lj(this,z);mN(this,z);return z;}if(!(z=this.dW(ac,a7)))return null;var eo=this.qE;
var kU=((z.Height+eo-1)/eo)|0;var ku=((z.Width+eo-1)/eo)|0;var ay=null;var gn=this.
jQ;var l$=null;do{if(!(ay=l$=pN(this,ku,kU))){while(gn&&gn.jK)gn=gn.fe;if(gn){var
z=gn;var kT=(z.ju/eo)|0;var l8=(z.jt/eo)|0;var kU=((z.Height+eo-1)/eo)|0;var ku=((
z.Width+eo-1)/eo)|0;if(this.a_)console.log("EmWi info: DiscardGlyph( "+z.ea+", "+
z.Width+", "+z.Height+" )");l$=z;gn=gn.fe;lj(this,z);qj(this,l8,kT,ku,kU);}}}while(
!ay&&l$);if(!ay)return null;ac.hi=null;var kI=1/this.jR;z.Cache=ac.Cache;z.jt=ay[
0]*eo;z.ju=ay[1]*eo;z.mO=z.jt*kI;z.mQ=z.ju*kI;z.mP=(z.jt+z.Width)*kI;z.mR=(z.ju+
z.Height)*kI;z.jK=0;if((z.Width>0)&&(z.Height>0)){var pg=z.Width*z.Height;var ms=
new Uint8Array(pg);var a=this.bm;ac.k8(ac.jD,ms,z.jD,z.m7);qu(ms,pg,z.Width);a.bindTexture(
a.TEXTURE_2D,this.ir);a.texSubImage2D(a.TEXTURE_2D,0,z.jt,z.ju,z.Width,z.Height,
a.ALPHA,a.UNSIGNED_BYTE,ms);a.fH=null;}qk(this,ay[0],ay[1],ku,kU);mN(this,z);if(
this.a_)console.log("EmWi info: CreateGlyph( "+z.ea+", "+z.Width+", "+z.Height+" )"
);return z;};d.eY=function(ac,a7){if(!ac){if(this.a_)console.log("EmWi error: Invalid font resource."
);return false;}if((a7===0x061C)||(a7===0xFEFF)||((a7>=0x200B)&&(a7<=0x200F))||((
a7>=0x202A)&&(a7<=0x202E))||((a7>=0x2066)&&(a7<=0x2069))||(a7===0xA))return false;
if(ac.Cache[a7])return true;return eb(a7,ac.fD,ac.fF)>=0;};d.dW=function(ac,a7){
if(!ac){if(this.a_)console.log("EmWi error: Invalid font resource.");return null;
}if((a7===0x061C)||((a7>=0x200B)&&(a7<=0x200F))||((a7>=0x202A)&&(a7<=0x202E))||((
a7>=0x2066)&&(a7<=0x2069))||(a7===0xA))a7=0xFEFF;var z=ac.Cache[a7];if(z)return z;
if(!ac.hi||(ac.hi.ea!==a7)){var g2=a7;var aT=ac.fD;var d7=ac.fF;var ay=-1;if(a7!==
0xFEFF)while((ay=eb(g2,aT,d7))<0){if(g2===0xAD)g2=0x002D;else if(g2===0xA0)return this.
dW(ac,0x20);else if(g2===0x0020)g2=ac.ey;else if(g2!==ac.ey)return this.dW(ac,ac.
ey);else break;}if(ay>=0){var sH=aT.charCodeAt(ay+6);var sI=aT.charCodeAt(ay+7);
var sF=aT.charCodeAt(ay+14);var sG=aT.charCodeAt(ay+15);var aO=sI|(sH<<16);var cX=
sG|(sF<<16);ac.hi={ea:a7,OriginX:aT.charCodeAt(ay+1)-32768,OriginY:aT.charCodeAt(
ay+2)-32768,Width:aT.charCodeAt(ay+3),Height:aT.charCodeAt(ay+4),Advance:aT.charCodeAt(
ay+5)-32768,jD:aO,m7:cX-aO};}else ac.hi={ea:a7,OriginX:0,OriginY:0,Width:0,Height:
0,Advance:0,jD:0,m7:0};}return ac.hi;};d.bz=function(ac,nB,nC){if(!ac){if(this.a_
)console.log("EmWi error: Invalid font resource.");return 0;}if(!ac.m6||(!nB&&!nC
))return 0;var c=ac.m6;var sB=ac.p5;var sh=nB|(nC<<16);var u=0;var min=0;var max=(
c.length>>1)-1;var di=-1;while(max>=min){u=(max+min)>>1;di=sh-(c.charCodeAt(u*2)|(
c.charCodeAt(u*2+1)<<16));if(!di)return sB.charCodeAt(u)-128;if(di<0)max=u-1;else
min=u+1;}return 0;};d.jP=function(ac,k,ak,al){var m=0;var aR=0;var bo=k.length;if(
!ac){if(this.a_)console.log("EmWi error: Invalid font resource.");return 0;}if(al===-
1)al=bo;if(ak<0){al+=ak;ak=0;}var aT=ac.fD;var d7=ac.fF;for(;(al>0)&&(ak<bo);ak++
,al--){var h=k.charCodeAt(ak);var aV=1;if((h===0x061C)||(h===0xFEFF)||((h>=0x200B
)&&(h<=0x200F))||((h>=0x202A)&&(h<=0x202E))||((h>=0x2066)&&(h<=0x2069))||(h===0xA
))continue;if((h===0x2026)&&!ac.Cache[h]&&(eb(h,aT,d7)<0)){h=0x2E;aV=3;}for(;;){
var z=ac.Cache[h];if(z&&!z.Advance&&!z.OriginX&&!z.Width)break;if(z){m+=aV*z.Advance+
this.bz(ac,aR,h)+((aV>1)?this.bz(ac,h,h)*(aV-1):0);aR=h;break;}var ay=eb(h,aT,d7
);var fX;if((ay>=0)&&!(fX=(aT.charCodeAt(ay+5)-32768))&&(aT.charCodeAt(ay+1)===32768
)&&(aT.charCodeAt(ay+3)===32768))break;if(ay>=0){m+=aV*fX+this.bz(ac,aR,h)+((aV>
1)?this.bz(ac,h,h)*(aV-1):0);aR=h;break;}if(h===ac.ey)break;if(h===0xAD)h=0x2D;else
if(h===0xA0)h=0x20;else h=ac.ey;}}return m;};d.tA=function(ac,k,ak,al){var e3=[0
,0,0,0];var m=0;var aR=0;var bo=k.length;if(!ac){if(this.a_)console.log("EmWi error: Invalid font resource."
);return this.qL;}if(al===-1)al=bo;if(ak<0){al+=ak;ak=0;}var aT=ac.fD;var d7=ac.
fF;for(;(al>0)&&(ak<bo);ak++,al--){var l,j,t,q,ck;var h=k.charCodeAt(ak);var aV=
1;if((h===0x061C)||(h===0xFEFF)||((h>=0x200B)&&(h<=0x200F))||((h>=0x202A)&&(h<=0x202E
))||((h>=0x2066)&&(h<=0x2069))||(h===0xA))continue;if((h===0x2026)&&!ac.Cache[h]&&(
eb(h,aT,d7)<0)){h=0x2E;aV=3;}for(;;){var z=ac.Cache[h];if(z){l=z.OriginX;j=z.OriginY;
t=z.Width+l;q=z.Height+j;ck=z.Advance;break;}var ay=eb(h,aT,d7);if(ay>=0){l=aT.charCodeAt(
ay+1)-32768;j=aT.charCodeAt(ay+2)-32768;t=aT.charCodeAt(ay+3)+l;q=aT.charCodeAt(
ay+4)+j;ck=aT.charCodeAt(ay+5)-32768;break;}if(h===ac.ey){l=0;j=0;t=0;q=0;ck=0;break;
}if(h===0xAD)h=0x2D;else if(h===0xA0)h=0x20;else h=ac.ey;}if(!l&&!t&&!ck)continue;
if(!m)e3[0]=l;if(j<e3[1])e3[1]=j;if(q>e3[3])e3[3]=q;var mg=this.bz(ac,aR,h);var hZ=(
aV>1)?this.bz(ac,h,h):0;l+=mg;t+=mg+(aV-1)*(ck+hZ);ck=ck*aV+mg+(aV-1)*hZ;if((ck||
l||t)&&((m+t)>e3[2]))e3[2]=m+t;m+=ck;if(!t&&ck&&(m>e3[2]))e3[2]=m;aR=h;}return e3;
};d.tz=function(ac,k,ak,al,aY,dM){var dH=0;var dp=0x8000;var oq=0;var bo=k.length;
var aR=0;if(!ac){if(this.a_)console.log("EmWi error: Invalid font resource.");return 0;
}if(al===-1)al=bo;if(ak<0){al+=ak;ak=0;}var aT=ac.fD;var d7=ac.fF;if(aY<0)return-
1;if(dM>0)dM-=this.jP(ac,k,ak,al);if(dM>0){var bR=ak;var ae=al;var eP=0;for(;ae;
bR++,ae--){var h=k.charCodeAt(bR);if((h===32)||(h===0xA0))eP++;}if(eP)dH=((dM<<16
)/eP)|0;}for(;(al>0)&&(ak<bo);ak++,al--,oq++){var h=k.charCodeAt(ak);var aV=1;var
ck;if((h===0x061C)||(h===0xFEFF)||((h>=0x200B)&&(h<=0x200F))||((h>=0x202A)&&(h<=
0x202E))||((h>=0x2066)&&(h<=0x2069))||(h===0xA))continue;if((h===0x2026)&&!ac.Cache[
h]&&(eb(h,aT,d7)<0)){h=0x2E;aV=3;}for(;;){var z=ac.Cache[h];if(z&&!z.Advance&&!z.
OriginX&&!z.Width)break;if(z){ck=aV*z.Advance+this.bz(ac,aR,h)+((aV>1)?this.bz(ac
,h,h)*(aV-1):0);aR=h;break;}var ay=eb(h,aT,d7);var fX;if((ay>=0)&&!(fX=(aT.charCodeAt(
ay+5)===32768))&&(aT.charCodeAt(ay+1)===32768)&&(aT.charCodeAt(ay+3)===32768))break;
if(ay>=0){ck=aV*fX+this.bz(ac,aR,h)+((aV>1)?this.bz(ac,h,h)*(aV-1):0);aR=h;break;
}if(h===ac.ey){ck=0;break;}if(h===0xAD)h=0x2D;else if(h===0xA0)h=0x20;else h=ac.
ey;}if(dH&&((h===0x20)||(h===0xA0))){dp+=dH;ck+=dp>>16;dp&=0xFFFF;}if(aY<((ck>>1
)+1))break;aY-=ck;}return oq;};d.tp=function(ac,k,ak,al,fj,dM){var dH=0;var dp=0x8000;
var m=0;var bo=k.length;var aR=0;if(!ac){if(this.a_)console.log("EmWi error: Invalid font resource."
);return 0;}if(al===-1)al=bo;if(ak<0){al+=ak;ak=0;}var aT=ac.fD;var d7=ac.fF;if(
fj<0)return-1;if(dM>0)dM-=this.jP(ac,k,ak,al);if(dM>0){var bR=ak;var ae=al;var eP=
0;for(;ae;bR++,ae--){var h=k.charCodeAt(bR);if((h===32)||(h===0xA0))eP++;}if(eP)
dH=((dM<<16)/eP)|0;}for(;(al>0)&&(ak<bo)&&fj;ak++,al--,fj--){var h=k.charCodeAt(
ak);var aV=1;var ck;if((h===0x061C)||(h===0xFEFF)||((h>=0x200B)&&(h<=0x200F))||((
h>=0x202A)&&(h<=0x202E))||((h>=0x2066)&&(h<=0x2069))||(h===0xA))continue;if((h===
0x2026)&&!ac.Cache[h]&&(eb(h,aT,d7)<0)){h=0x2E;aV=3;}if(dH&&((h===0x20)||(h===0xA0
))){dp+=dH;m+=dp>>16;dp&=0xFFFF;}for(;;){var z=ac.Cache[h];if(z&&!z.Advance&&!z.
OriginX&&!z.Width)break;if(z){ck=aV*z.Advance+this.bz(ac,aR,h)+((aV>1)?this.bz(ac
,h,h)*(aV-1):0);aR=h;break;}var ay=eb(h,aT,d7);var fX;if((ay>=0)&&!(fX=(aT.charCodeAt(
ay+5)===32768))&&(aT.charCodeAt(ay+1)===32768)&&(aT.charCodeAt(ay+3)===32768))break;
if(ay>=0){ck=aV*fX+this.bz(ac,aR,h)+((aV>1)?this.bz(ac,h,h)*(aV-1):0);aR=h;break;
}if(h===ac.ey){ck=0;break;}if(h===0xAD)h=0x2D;else if(h===0xA0)h=0x20;else h=ac.
ey;}m+=ck;}return m;};d.t_=function(ac,k,ak,aE,nN,ao){var oV=(aE<0)?0x7FFFFFFE:aE;
var oU=(nN<0)?0x7FFFFFFF:nN;var i9=Math.max(ak,0);var ia=Math.max(k.length-i9,0);
var ma=ia*2+1;var af=new Uint16Array(ma+1);var src=af;var eH=1;var cm=eH+1;var h$=
ma-ia;var bS=h$;var b1=0;var dU=false;var aR=0;var cZ=-1;var width=0;var ae=0;var
h=0;var u=0;if(!ac||!ia||!oU)return"";for(u=0;u<ia;u++)af[u+bS]=k.charCodeAt(u+i9
);af[ma]=0;for(u=0;u<ia;u++)switch(src[u+bS]){case 0x25:src[bS+u++]=0xFEFF;break;
case 0x5E:src[bS+u]=0x200B;break;case 0x7E:src[bS+u]=0x00AD;break;}if(ao&&!this.
ni(ao,src,bS,ia,-1))ao=null;if(ao){this.nk(ao,src,bS);this.nj(ao,src,bS);this.nh(
ao,src,bS,null,[ac]);}for(u=0;h=src[bS];){if(h!==0xA){var z;var fo=0;var rV=bS;if((
h===0x061C)||((h>=0x200C)&&(h<=0x200F))||((h>=0x202A)&&(h<=0x202E))||((h>=0x2066
)&&(h<=0x2069)))h=0xFEFF;if(dU&&(h!==0xFEFF)&&(h!==0x200B)&&(h!==0x00AD)&&(h!==0x20
))dU=false;if((h===0x200B)&&width&&!dU){if(b1&&(af[b1]===0xAD))af[b1]=0xFEFF;b1=
cm;dU=true;}if((h===0x20)&&width){if(b1&&(af[b1]===0xAD))af[b1]=0xFEFF;b1=cm;dU=
true;}if((h===0xAD)&&(!width||dU))h=0xFEFF;if(h===0x00AD){var h_=0;if((z=this.dW(
ac,0x00AD))!==null){var aq=ao?this.hq(ao,bS-h$):0;h_=z.Advance;if(aq===cZ)if(aq&
1)h_+=this.bz(ac,h,aR);else h_+=this.bz(ac,aR,h);}if(((width+h_)<=oV)&&h_||!b1){
if(b1&&(af[b1]===0xAD))af[b1]=0xFEFF;width-=h_;b1=cm;dU=true;}}if(h===0x200B)h=0xFEFF;
if((h===0x2026)&&!this.eY(ac,h)&&(z=this.dW(ac,0x2E))){var aq=ao?this.hq(ao,bS-h$
):0;fo=z.Advance*3;fo+=this.bz(ac,0x2E,0x2E)*2;if(aq===cZ)if(aq&1)fo+=this.bz(ac
,0x2E,aR);else fo+=this.bz(ac,aR,0x2E);aR=0x2E;cZ=aq;}else if((h!==0xFEFF)&&(z=this.
dW(ac,h))){var aq=ao?this.hq(ao,bS-h$):0;fo=z.Advance;if(aq===cZ)if(aq&1)fo+=this.
bz(ac,h,aR);else fo+=this.bz(ac,aR,h);aR=h;cZ=aq;}bS++;if(((fo+width)<=oV)||!width
){width+=fo;af[cm++]=h;}else if(b1){if(af[b1]===0x20)af[b1]=0xFEFF;for(bS-=2,cm--;
cm>b1;bS--,cm--)src[bS]=af[cm];b1=0;h=0xA;bS++;cm++;}else{bS=rV;h=0xA;}if(h===0xA
){if(src[bS]===0x20){af[cm++]=0xFEFF;bS++;}while(((h=src[bS])===0xAD)||(h===0x061C
)||(h===0xFEFF)||((h>=0x200B)&&(h<=0x200F))||((h>=0x202A)&&(h<=0x202E))||((h>=0x2066
)&&(h<=0x2069))){af[cm++]=0xFEFF;bS++;}h=0xA;}}else{bS++;af[cm++]=h;}if((h===0xA
)&&src[bS]){if(--oU<=0)break;if(b1&&(af[b1]===0xAD))af[b1]=0xFEFF;if(ao){var eK=
bS-h$;var fz=eK-(cm-eH)+1;this.lm(ao,fz,eK);this.ip(ao,fz,eK,af,eH+1);}af[eH]=cm-
eH;af[cm]=0;eH=cm;cm+=1;b1=0;dU=false;width=0;aR=0;cZ=-1;ae++;}}if(b1&&(af[b1]===
0xAD))af[b1]=0xFEFF;if((cm-eH)>1){if(ao){var eK=bS-h$;var fz=eK-(cm-eH)+1;this.lm(
ao,fz,eK);this.ip(ao,fz,eK,af,eH+1);}af[eH]=cm-eH;af[cm]=0;ae++;}af[0]=ae;var pb=
"";for(u=0;u<cm;u++)pb+=String.fromCharCode(af[u]);return pb;};d.tf=function(ac,
lR){var bo=lR.length;var u=1;var ds=0;if(!bo)return 0;if(!ac){if(this.a_)console.
log("EmWi error: Invalid font resource.");return 0;}while(u<bo){var i9=lR.charCodeAt(
u);var pe=i9-1;var pd=u+1;var mt;if((pd+pe)>bo)return 0;mt=this.jP(ac,lR,pd,pe);
if(mt>ds)ds=mt;u+=i9;}return ds;};d.sV=function(iI,iH,hH){if(iI<0)iI=0;if(iH<0)iH=
0;if(hH<0)hH=0;if(iI>256)iI=256;if(iH>256)iH=256;if(hH>256)hH=256;return{eX:iI,gr:
iH,ik:hH,ec:[],fC:[],hg:[]};};d.s7=function(am){if(am){delete am.ec;delete am.fC;
delete am.hg;}};d.ug=function(am,lP,cQ){if(!am||(lP<0))return;if(lP<am.ik)am.hg[
lP]=cQ;};d.uf=function(am,lF,bX){if(!am||(lF<0))return;if(lF<am.gr)am.fC[lF]=bX;
};d.uh=function(am,lS,ac){if(!am||(lS<0))return;if(lS<am.eX)am.ec[lS]=ac;};function
ff(k,i,at,dC){var e=0;var an=k.charCodeAt(i);while((an>=0x30)&&(an<=0x39)){e=(e*
10)+(an-0x30);an=k.charCodeAt(++i);}at[dC]=e;return i;}function lf(k,i,rm,at,dC){
i=ff(k,i,at,dC);if(k.charCodeAt(i)===0x25){var e7=at[dC]*rm;at[dC]=(e7/100)|0;if((
e7-(at[dC]*100))>50)at[dC]++;i++;}return i;}function na(k,i,aE,at){at[0]=0;at[1]=
0;at[2]=0;at[3]=0;i=lf(k,i,aE,at,0);if(k.charCodeAt(i)===0x2C){i=lf(k,i+1,aE,at,
1);if(k.charCodeAt(i)===0x2C){i=ff(k,i+1,at,2);if(k.charCodeAt(i)===0x2C)i=ff(k,
i+1,at,3);}}if(at[0]>aE)at[0]=aE;if(at[1]>(aE-at[0]))at[1]=aE-at[0];return i;}function
qd(k,i,at,dC){var e=0x6C;var cb=k.charCodeAt(i);var en=cb?k.charCodeAt(i+1):0;if(((
cb===0x6C)||(cb===0x72)||(cb===0x63)||(cb===0x61))&&(en===0x6A)){e=cb-0x20;i+=2;
}else if((cb===0x6A)&&((en===0x6C)||(en===0x72)||(en===0x63)||(en===0x61))){e=en-
0x20;i+=2;}else if((cb===0x6C)||(cb===0x72)||(cb===0x63)||(cb===0x61)){e=cb;i++;
}else if(cb===0x6A){e=0x4C;i++;}at[dC]=e;return i;}function m$(k,i,at,dC){var e=
0x6D;var an=k.charCodeAt(i);if((an===0x74)||(an===0x6D)||(an===0x62)){e=an;i++;}
at[dC]=e;return i;}function qe(k,i,aE,gD){var e=[0,0,0];var an=k.charCodeAt(i);var
g=0;var cc=0;var kB=aE;var i4=0;var bW=[0];while((g<3)&&(((an>=0x30)&&(an<=0x39)
)||(an===0x2A))){if(an===0x2A){e[g]=-1;i4++;i++;}else{i=lf(k,i,aE,e,g);kB=kB-e[g
];}if((an=k.charCodeAt(i))===0x2C)an=k.charCodeAt(++i);g++;}if(!g){e[0]=aE;g=1;}
for(;cc<i4;cc++){var ds=(kB/i4)|0;if(cc===(i4-1))ds=kB-(i4-1)*ds;if(e[0]<0)e[0]=
ds;else if(e[1]<0)e[1]=ds;else if(e[2]<0)e[2]=ds;}for(g=0;g<3;g++){if(e[g]<0)e[g
]=0;if(e[g]>aE)e[g]=aE;aE=aE-e[g];gD[g]=e[g];}return i;}function dd(k,i,nL){return k.
slice(i,i+nL.length)===nL;}function pM(k,i){var h;for(;(h=k.charCodeAt(i));i++){
if((h===0x7B)&&(dd(k,i+1,"par")||dd(k,i+1,"lay")||dd(k,i+1,"col")||dd(k,i+1,"end"
)))break;if((h===0x25)&&(i<(k.length-1)))i++;}return i;}function qf(k,i,lQ,iN,iM
,iO,dL){var uN=i;var dn=0;var dO=0;var cC=0;var jp=false;var h1=false;var dG=[0,
0,0];while(i<lQ){var h=k.charCodeAt(i);if(h===0x7B){if(dd(k,i,"{img")){i=m$(k,i+
4,dG,0);i=ff(k,i,dG,1);if(k.charCodeAt(i)===0x2E){i++;i=ff(k,i,dG,2);}if(k.charCodeAt(
i)===0x7D)i++;if(dG[2]>4095)dG[2]=0;if(dG[1]>255)dG[1]=0;iN[dn]=0xFEFF;iM[dn]=((
dG[0]===0x74)?5:(dG[0]===0x62)?4:3)|(dO<<4)|(dG[1]<<12)|(dG[2]<<20);iO[dn++]=h1?
dL[0]:0;continue;}if(dd(k,i,"{fnt")){i=ff(k,i+4,dG,0);if(k.charCodeAt(i)===0x7D)
i++;cC=dG[0];if(cC>255)cC=0;continue;}if(dd(k,i,"{clr")){i=ff(k,i+4,dG,0);if(k.charCodeAt(
i)===0x7D)i++;dO=dG[0];if(dO>255)dO=0;continue;}if(dd(k,i,"{ul+}")){jp=true;i+=5;
continue;}if(dd(k,i,"{ul-}")){jp=false;i+=5;continue;}if(dd(k,i,"{lnk:")){i+=5;h1=
true;dL[0]+=1;while((i<lQ)&&((h=k.charCodeAt(i))!==0x7D)&&(h!==0x7B))i++;if(k.charCodeAt(
i)===0x7D)i++;continue;}if(dd(k,i,"{lnk}")){i+=5;h1=false;continue;}}if(h===0x5E
){iN[dn]=0x200B;iM[dn]=(jp?2:1)|(dO<<4)|(cC<<12);iO[dn++]=h1?dL[0]:0;i++;continue;
}if(h===0x7E){iN[dn]=0xAD;iM[dn]=(jp?2:1)|(dO<<4)|(cC<<12);iO[dn++]=h1?dL[0]:0;i++;
continue;}if(h===0x25){h=k.charCodeAt(++i);if(i===lQ)break;}iN[dn]=h;iM[dn]=(jp?
2:1)|(dO<<4)|(cC<<12);iO[dn++]=h1?dL[0]:0;i++;}iN[dn]=0;iM[dn]=0;iO[dn]=0;return dn;
}function mM(aj,am,k,i,aE,fl,aG,d0,rd,d1,re,fR,dL){var y=[0];var fw=[0];var cN=aG.
length;aG.push(0x47,0,0,aE,0,0,0);i=m_(aj,am,k,i,aE,0x6C,fl,aG,y,fw,fR,dL);if(aG.
length>(cN+7)){aG[cN+4]=y[0];aG[cN+5]=aG.length-cN;}else aG.splice(cN,aG.length-
cN);while(i<k.length){if(dd(k,i,"{par")){var cU=[0,0,0,0];var fn=[-1];var n0=[];
var width;var height=[0];i=qd(k,i+4,n0,0);i=na(k,i,aE,cU);if(k.charCodeAt(i)===0x3A
)i=ff(k,i+1,fn,0);if(k.charCodeAt(i)===0x7D)i++;if(fn[0]!==-1)aG.push(0x52,0,y[0
]+fw[0],aE,0,fn[0]);cN=aG.length;width=aE-cU[0]-cU[1];aG.push(0x47,0,(y[0]+=fw[0
])+cU[2],aE,0,0,cU[0]);i=m_(aj,am,k,i,width,n0[0],fl,aG,height,fw,fR,dL);y[0]+=cU[
2]+height[0]+cU[3];aG[cN+4]=y[0]-cU[3];aG[cN+5]=aG.length-cN;if(fn[0]!==-1)aG[cN-
2]=y[0];}else if(dd(k,i,"{lay")){var or=[];var height=[0];cN=aG.length;i=qe(k,i+
4,aE,or);if(k.charCodeAt(i)===0x7D)i++;aG.push(0x47,0,y[0]+=fw[0],aE,0,0,0);i=p6(
aj,am,k,i,fl,or,aG,height,fw,fR,dL);y[0]+=height[0];aG[cN+4]=y[0];aG[cN+5]=aG.length-
cN;}else break;}d0[rd]=y[0];d1[re]=fw[0];return i;}function p6(aj,am,k,i,fl,gD,aG
,d0,d1,fR,dL){var n1=[];var iY=[];var hO=[];var fn=[-1,-1,-1];var oR=[0,0,0];var
g=0;var cc=0;var m=0;var height=0;var mB=0;while((i<k.length)&&(g<gD.length)){if(
dd(k,i,"{col")){var cU=[0,0,0,0];var width;i=m$(k,i+4,n1,g);i=na(k,i,gD[g],cU);if(
k.charCodeAt(i)===0x3A)i=ff(k,i+1,fn,g);if(k.charCodeAt(i)===0x7D)i++;if(fn[g]!==-
1)aG.push(0x52,m,0,m+gD[g],0,fn[g]);iY[g]=aG.length;width=gD[g]-cU[0]-cU[1];aG.push(
0x47,m+cU[0],cU[2],m+cU[0]+width,0,0,0);i=mM(aj,am,k,i,width,fl,aG,hO,g,oR,g,fR,
dL);hO[g]+=cU[2]+cU[3];height=Math.max(height,hO[g]);mB=Math.max(mB,hO[g]+oR[g]);
aG[iY[g]+4]=hO[g]-cU[3];aG[iY[g]+5]=aG.length-iY[g];m+=gD[g];g++;}else break;}for(
cc=0;cc<g;cc++){var cN=iY[cc];var kP=height-hO[cc];switch(n1[cc]){case 0x74:kP=0;
break;case 0x6D:kP>>=1;break;}aG[cN+2]+=kP;aG[cN+4]+=kP;if(fn[cc]!==-1)aG[cN-2]=
height;}d0[0]=height;d1[0]=mB-height;if(dd(k,i,"{end}"))i+=5;return i;}function qh(
aj,am,ei,eD,c7,nO,ao,at){var fz=c7;var ah=null;var cC=-1;var dc=0;var mJ=0;var ps=
0;var mI=0;var mF=0;var mG=0;var mH=0;var dU=false;var fr=0;var aR=0;var cZ=-1;at[
0]=0;at[1]=0;at[2]=0;at[3]=0;at[4]=0;for(;ei[c7];c7++){var e2=eD[c7];var ad=ei[c7
];var type=e2&0xF;var c_=0;var ow=0;var oz=0;var iZ=0;var i0=0;var i1=0;if(((type===
1)||(type===2))&&(((e2>>12)&0xFF)!==cC)){cC=(e2>>12)&0xFF;ah=null;if(am&&(cC>=0)&&(
cC<am.eX))ah=am.ec[cC];if(!ah){cC=0;ah=(am&&(am.eX>0))?am.ec[0]:null;}cZ=-1;aR=0;
}if((ad===0xA)&&ah){at[3]=Math.max(at[3],ah.Ascent);at[4]=Math.max(at[4],ah.Leading
);fr=Math.max(fr,ah.Descent);}if(ad===0xA)break;if((type>=3)&&(type<=5)){var f0=(
e2>>12)&0xFF;var bK=null;if(am&&(f0>=0)&&(f0<am.gr))bK=am.fC[f0];if(!bK&&am&&(am.
gr>0))bK=am.fC[0];if(bK){c_=bK.FrameSize[0];ow=bK.FrameSize[1];}cZ=-1;aR=0;}else{
var z;if((ad===0x200B)&&(!at[0]||dU))ad=0xFEFF;if((ad===0xAD)&&(!at[0]||dU))ad=0xFEFF;
if((ad===0x20)&&!at[0])ad=0xA0;if((ad===0x20)||(ad===0x200B)){if(dc&&(ei[dc]===0xAD
))ei[dc]=0xFEFF;dc=c7;mJ=at[0];ps=at[1];mI=at[2];mF=at[3];mH=at[4];mG=fr;dU=true;
}if(ad===0xAD){if(ah&&at[0]&&(z=aj.dW(ah,0xAD))){var aq=ao?aj.hq(ao,c7):0;c_=z.Advance;
iZ=ah.Ascent;i0=ah.Descent;i1=ah.Leading;if(aq===cZ)if(aq&1)c_+=aj.bz(ah,ad,aR);
else c_+=aj.bz(ah,aR,ad);}if(((at[0]+c_)<=nO)&&c_){if(dc&&(ei[dc]===0xAD))ei[dc]=
0xFEFF;dc=c7;mJ=at[0]+c_;mF=Math.max(at[3],iZ);mH=Math.max(at[4],i1);mG=Math.max(
fr,i0);mI=at[2];dU=true;}continue;}if((ad===0x061C)||((ad>=0x200B)&&(ad<=0x200F)
)||((ad>=0x202A)&&(ad<=0x202E))||((ad>=0x2066)&&(ad<=0x2069)))ad=0xFEFF;if(ad===
0xFEFF){ei[c7]=0xFEFF;continue;}if(dc!==c7)dU=false;if(ah&&(ad===0x2026)&&!ah.Cache[
ad]&&(eb(ad,ah.fD,ah.fF)<0)&&(z=aj.dW(ah,0x2E))){var aq=ao?aj.hq(ao,c7):0;c_=z.Advance
*3;c_+=aj.bz(ah,0x2E,0x2E)*2;iZ=ah.Ascent;i0=ah.Descent;i1=ah.Leading;if(aq===cZ
)if(aq&1)c_+=aj.bz(ah,0x2E,aR);else c_+=aj.bz(ah,aR,0x2E);aR=0x2E;cZ=aq;}else if(
ah&&(z=aj.dW(ah,ad))){var aq=ao?aj.hq(ao,c7):0;c_=z.Advance;iZ=ah.Ascent;i0=ah.Descent;
i1=ah.Leading;if((ad===0x20)||(ad===0xA0))oz=c_;if(aq===cZ)if(aq&1)c_+=aj.bz(ah,
ad,aR);else c_+=aj.bz(ah,aR,ad);aR=ad;cZ=aq;}}if(((c_+at[0])<=nO)||!at[0]){at[0]+=
c_;at[1]=Math.max(at[1],ow);at[3]=Math.max(at[3],iZ);at[4]=Math.max(at[4],i1);fr=
Math.max(fr,i0);at[2]+=oz;continue;}if(dc){at[0]=mJ;at[1]=ps;at[2]=mI;at[3]=mF;at[
4]=mH;fr=mG;c7=dc+1;if(ei[dc]===0x20)ei[dc]=0xFEFF;while((((type=(eD[c7]&0xF))===
1)||(type===2))&&(((ad=ei[c7])===0xFEFF)||(ad===0x200B)||(ad===0xAD)))c7++;dc=0;
}break;}if(dc&&(ei[dc]===0xAD))ei[dc]=0xFEFF;at[1]=Math.max(at[1],at[3]+fr);at[3
]+=(at[1]-at[3]-fr)>>1;return c7-fz;}function m_(aj,am,k,i,aE,q6,fl,aG,d0,d1,fR,
dL){var eK=pM(k,i);var ah=(am&&(am.eX>0))?am.ec[0]:null;var bo=eK-i+1;var eG=new
Uint16Array(bo);var fZ=new Uint32Array(bo);var mj=new Uint16Array(bo);var cT=null;
var g0=false;var u=0;var cC=0;var dO=0;var fA=0;var fx=0;var oP=[0];var dm=[0,0,
0,0,0];bo=qf(k,i,eK,eG,fZ,mj,oP);if(bo&&fl)cT=aj.qx(bo);if(cT&&!aj.ni(cT,eG,0,bo
,-1)){aj.nq(cT);cT=null;}if(cT){aj.nk(cT,eG,0);aj.nj(cT,eG,0);aj.nh(cT,eG,0,fZ,am.
ec);g0=aj.qw(cT);if(fR[0]<0)fR[0]=g0?1:0;}d0[0]=0;d1[0]=0;while(u<bo){var eq=q6;
var m=0;var oS=0;var gk=0;var kW=0;var pi=0;var aR=0;var ae=qh(aj,am,eG,fZ,u,aE,
cT,dm);if(cT){aj.lm(cT,u,u+ae);aj.ip(cT,u,u+ae,eG,u);aj.ip(cT,u,u+ae,fZ,u);aj.ip(
cT,u,u+ae,mj,u);}if(eq===0x61)eq=g0?0x72:0x6C;if(eq===0x41)eq=g0?0x52:0x4C;if((eq===
0x4C)||(eq===0x52)||(eq===0x43))if((!eG[u+ae]||(eG[u+ae]===0xA)||!dm[2])){eq+=0x20;
dm[2]=0;}else eq=0x4C;if(eq===0x72)m+=aE-dm[0];else if(eq===0x63)m+=(aE-dm[0])>>
1;for(;ae>=0;ae--,u++){var ad=ae?eG[u]:0;var e2=ae?fZ[u]:0;var type=e2&0xF;var mm=
dO;var gh=cC;var kN=fA;var kM=ae?mj[u]:0;var z;if((type>=1)&&(type<=5))mm=(e2>>4
)&0xFF;if((type===1)||(type===2))gh=(e2>>12)&0xFF;if(type===1)kN=0;if(type===2)kN=
1;if(gk&&(((type!==1)&&(type!==2))||(dO!==mm)||(cC!==gh)||(fA!==kN)||(fx!==kM))){
if(kW&&(eq===0x4C)){var a2=(kW*(aE-dm[0]))+pi;var bf=(a2/dm[2])|0;pi=a2-(bf*dm[2
]);m+=bf;aG[gk]=0x4A;aG.push(m-aG[gk+1]);}if(fA){if(ah){var z;if(z=aj.dW(ah,0x2D
))fA=z.Height;}if(fA<=0)fA=1;aG.push(0x52,aG[gk+1],d0[0]+d1[0]+dm[3]+fA,m,d0[0]+
d1[0]+dm[3]+(fA*2),dO);}gk=0;kW=0;}if(cC!==gh){ah=null;if(am&&(gh>=0)&&(gh<am.eX
))ah=am.ec[gh];if(!ah)ah=(am&&(am.eX>0))?am.ec[0]:null;}if(fx&&(fx!==kM))aG.push(
0x41,fx+dL[0],oS,d0[0]+d1[0],m,d0[0]+d1[0]+dm[1],dm[3]);if(fx!==kM)oS=m;if(cC!==
gh)aR=0;dO=mm;cC=gh;fA=kN;fx=kM;if((type>=3)&&(type<=5)){var f0=(e2>>12)&0xFF;var
gc=(e2>>20)&0xFFF;var bK=null;if(am&&(f0>=0)&&(f0<am.gr))bK=am.fC[f0];if(!bK&&am&&(
am.gr>0))bK=am.fC[0];if(bK&&(gc>=bK.NoOfFrames))gc=0;if(bK){var bR=dm[1]-bK.FrameSize[
1];switch(type){case 3:bR>>=1;break;case 5:bR=0;break;}aG.push(0x49,m,d0[0]+d1[0
]+bR,f0,gc,dO);m+=bK.FrameSize[0];}aR=0;}if(((type===1)||(type===2))&&ah&&(ad!==
0xFEFF)){var aV=1;if(ah&&(ad===0x2026)&&!ah.Cache[ad]&&(eb(ad,ah.fD,ah.fF)<0)&&(
z=aj.dW(ah,0x2E))){ad=0x2E;aV=3;}if(z=aj.dW(ah,ad)){var dl=aj.bz(ah,aR,ad);if(!gk
){gk=aG.length;aG.push(0x54,m+dl,d0[0]+d1[0]+dm[3],"",cC,dO);}while(aV--){aG[gk+
3]+=String.fromCharCode(ad);m+=z.Advance+dl;if((ad===0x20)||(ad===0xA0))kW+=z.Advance;
if(aV)dl=aj.bz(ah,ad,ad);}aR=ad;}}}if(eG[u-1]!==0xA)u--;d0[0]+=dm[1]+d1[0];d1[0]=
dm[4];}if(cT)aj.nq(cT);dL[0]+=oP[0];return eK;}function pD(k,i,j2){var h;while((
h=k.charCodeAt(i))){if((h===0x7B)&&dd(k,i,"{lnk:")){var fz=i+=5;while(((h=k.charCodeAt(
i)))&&(h!==0x7D)&&(h!==0x7B))i++;j2.push({jw:0,jJ:0xFFFFFFFE,jB:0,lk:0,jL:0,p9:k.
slice(fz,i)});continue;}if((h===0x25)&&((i+1)<k.length))i++;i++;}}function mU(j2
,ek,el,aX,aB,fO){while(aB<fO){switch(aX[aB]){case 0x47:{var ae=aX[aB+5];var m=aX[
aB+1]+aX[aB+6]+ek;var y=aX[aB+2]+el;mU(j2,m,y,aX,aB+7,aB+ae);aB+=ae;}break;case 0x54:
aB+=6;break;case 0x4A:aB+=7;break;case 0x49:aB+=6;break;case 0x52:aB+=6;break;case
0x41:{var co=j2[aX[aB+1]-1];co.jJ=Math.min(co.jJ,aB);co.jw=Math.max(co.jw,aB+7);
co.lk=ek;co.jL=el;co.jB++;aB+=7;}break;}}}function nc(cy,e0,aX,rr,nH){var s=rr;while(
s<nH){switch(aX[s]){case 0x54:s+=6;break;case 0x4A:s+=7;break;case 0x49:s+=6;break;
case 0x52:s+=6;break;case 0x41:{var fx=aX[s+1];if((fx===cy)&&!e0)return s;if(fx===
cy)e0--;s+=7;}break;default:s=nH;}}return-1;}function pI(aj,aa,ai,ag,cx,ek,el,am
,aX,aB,fO,aA,cj){function de(dZ,aY,bj,cQ){var hL=dZ.pt;var n4=dZ.pv;if(aY<0)aY=0;
if(bj<0)bj=0;if(aY>dZ.Width)aY=dZ.Width;if(bj>dZ.Height)bj=dZ.Height;if(dZ.m5&&bj
)hL+=bj*dZ.pu;if(dZ.m5&&dZ.m4&&bj)n4+=bj*dZ.pw;if(dZ.m4&&aY)hL+=(n4-hL)*dZ.p3*aY;
if(hL>=255)return cQ;if(hL<=0)return cQ&0xFFFFFF;var rS=((((cQ>>24)&0xFF)*hL/255
)<<24)|(cQ&0xFFFFFF);return rS;}function mY(aj,aa,ai,ag,cx,ek,el,am,aX,aB,fO,aA,
cj){while(aB<fO){var h=aX[aB];if((h===0x47)||(h===0x52)){var az=[aX[aB+1]+ek,aX[
aB+2]+el,aX[aB+3]+ek,aX[aB+4]+el];switch(h){case 0x47:{var ae=aX[aB+5];if((ag[0]<
ag[2])&&(ag[1]<ag[3]))mY(aj,aa,ai,ag,cx,az[0]+aX[aB+6],az[1],am,aX,aB+7,aB+ae,aA
,cj);aB+=ae;}break;case 0x52:{var bc=aX[aB+5];var l=az[0]-cx[0];var t=az[2]-cx[0
];var j=az[1]-cx[1];var q=az[3]-cx[1];if((bc>=0)&&(bc<am.ik))bc=am.hg[bc];else bc=
0;var gU=de(cj,l,j,bc);var gV=de(cj,t,j,bc);var gT=de(cj,t,q,bc);var gS=de(cj,l,
q,bc);aj.hs(aa,ai,ag,az,gU,gV,gT,gS,aA);aB+=6;}break;}}else if((h===0x54)||(h===
0x49))aB+=6;else if(h===0x4A)aB+=7;else if(h===0x41)aB+=7;}}function mZ(aj,aa,ai
,ag,cx,ek,el,am,aX,aB,fO,aA,cj){while(aB<fO){var h=aX[aB];if((h===0x47)||(h===0x52
)){var az=[aX[aB+1]+ek,aX[aB+2]+el,aX[aB+3]+ek,aX[aB+4]+el];switch(h){case 0x47:{
var ae=aX[aB+5];if((ag[0]<ag[2])&&(ag[1]<ag[3]))mZ(aj,aa,ai,ag,cx,az[0]+aX[aB+6]
,az[1],am,aX,aB+7,aB+ae,aA,cj);aB+=ae;}break;case 0x52:{aB+=6;}break;}}else if((
h===0x54)||(h===0x4A)||(h===0x49)){var ay=[aX[aB+1]+ek,aX[aB+2]+el];switch(h){case
0x54:{var ah=aX[aB+4];var bc=aX[aB+5];var l=ag[0]-cx[0];var j=ag[1]-cx[1];var t=
ag[2]-cx[0];var q=ag[3]-cx[1];if((bc>=0)&&(bc<am.ik))bc=am.hg[bc];else bc=0;if((
ah>=0)&&(ah<am.eX))ah=am.ec[ah];else ah=null;if(!ah&&am.eX)ah=am.ec[0];ay[0]=ag[
0]-ay[0];ay[1]=ag[1]-ay[1];if(ah){var gU=de(cj,l,j,bc);var gV=de(cj,t,j,bc);var gT=
de(cj,t,q,bc);var gS=de(cj,l,q,bc);aj.np(aa,ah,aX[aB+3],0,-1,ai,ag,ag,ay,0,0,gU,
gV,gT,gS,aA);}aB+=6;}break;case 0x4A:{var ah=aX[aB+4];var bc=aX[aB+5];var l=ag[0
]-cx[0];var j=ag[1]-cx[1];var t=ag[2]-cx[0];var q=ag[3]-cx[1];var width=aX[aB+6];
if((bc>=0)&&(bc<am.ik))bc=am.hg[bc];else bc=0;if((ah>=0)&&(ah<am.eX))ah=am.ec[ah
];else ah=null;if(!ah&&am.eX)ah=am.ec[0];ay[0]=ag[0]-ay[0];ay[1]=ag[1]-ay[1];if(
ah){var gU=de(cj,l,j,bc);var gV=de(cj,t,j,bc);var gT=de(cj,t,q,bc);var gS=de(cj,
l,q,bc);aj.np(aa,ah,aX[aB+3],0,-1,ai,ag,ag,ay,width,0,gU,gV,gT,gS,aA);}aB+=7;}break;
case 0x49:{var bK=aX[aB+3];var gc=aX[aB+4];var bc=aX[aB+5];if((bc>=0)&&(bc<am.ik
))bc=am.hg[bc];else bc=0;if((bK>=0)&&(bK<am.gr))bK=am.fC[bK];else bK=null;if(!bK&&
am.gr)bK=am.fC[0];if(bK){var l=ay[0]-cx[0];var j=ay[1]-cx[1];var t=l+bK.FrameSize[
0];var q=j+bK.FrameSize[1];var gU=de(cj,l,j,bc);var gV=de(cj,t,j,bc);var gT=de(cj
,t,q,bc);var gS=de(cj,l,q,bc);var cA=[ay[0],ay[1],ay[0]+bK.FrameSize[0],ay[1]+bK.
FrameSize[1]];aj.fJ(aa,bK,ai,gc,ag,cA,[0,0],gU,gV,gT,gS,aA);}aB+=6;}break;}}else
if(h===0x41)aB+=7;}}mY(aj,aa,ai,ag,cx,ek,el,am,aX,aB,fO,aA,cj);mZ(aj,aa,ai,ag,cx
,ek,el,am,aX,aB,fO,aA,cj);}d.t9=function(am,k,aE,fl){var n6=[];var fY={};var height=[
0];var o3=[0];var fw=[0];var g0=[-1];if(!am||!k.length||(aE<=0))return null;mM(this
,am,k,0,aE,fl,n6,height,0,fw,0,g0,o3);fY.Data=n6;fY.eA=[];fY.p4=g0[0]===1;if(o3){
pD(k,0,fY.eA);mU(fY.eA,0,0,fY.Data,0,fY.Data.length);}return fY;};d.s8=function(
a6){};d.tc=function(a6){if(!a6)return this.qK;if(!a6.fh){var f=a6?a6.Data:null;var
s=0;var cX=f?f.length:0;var cw=[0,0,0,0];while(s<cX){var l=f[s+1];var j=f[s+2];var
t=f[s+3];var q=f[s+4];if((l<t)&&(j<q)){if(cw[0]>l)cw[0]=l;if(cw[2]<t)cw[2]=t;if(
cw[1]>j)cw[1]=j;if(cw[3]<q)cw[3]=q;}if(f[s]===0x52)s+=6;else s+=f[s+5];}var ds=cw[
2]-cw[0];var hY=cw[3]-cw[1];if(ds<0)ds=0;if(hY<0)hY=0;a6.fh=[ds,hY];}return a6.fh;
};d.tj=function(a6){if(!a6)return 0;return a6.eA.length;};d.ta=function(a6,cy){if(
!a6)return this.hr;if((cy<0)||(cy>=a6.eA.length))return this.hr;return a6.eA[cy].
p9;};d.ti=function(a6,cy){if(!a6)return 0;if((cy<0)||(cy>=a6.eA.length))return 0;
return a6.eA[cy].jB;};d.tb=function(a6,cy,e0){var co;var s;var cw=[0,0,0,0];if(!
a6)return cw;if((cy<0)||(cy>=a6.eA.length))return cw;co=a6.eA[cy];if((e0<0)||(e0>=
co.jB))return cw;s=nc(cy+1,e0,a6.Data,co.jJ,co.jw);if(s>=0){cw[0]=a6.Data[s+2]+co.
lk;cw[1]=a6.Data[s+3]+co.jL;cw[2]=a6.Data[s+4]+co.lk;cw[3]=a6.Data[s+5]+co.jL;}return cw;
};d.s$=function(a6,cy,e0){var co;var s;if(!a6)return 0;if((cy<0)||(cy>=a6.eA.length
))return 0;co=a6.eA[cy];if((e0<0)||(e0>=co.jB))return 0;s=nc(cy+1,e0,a6.Data,co.
jJ,co.jw);if(s>=0)return co.jL+a6.Data[s+6];return 0;};d.tG=function(a6){return a6&&
a6.p4;};var pB="\u0000\u0009\u000A\u000B\u000C\u000D\u000E\u001C\u001F\u0020"+"\u0021\u0023\u0026\u0028\u0029\u002A\u002B\u002C\u002D\u002E"+
"\u0030\u003A\u003B\u003C\u003D\u003E\u003F\u0041\u005B\u005C"+"\u005D\u005E\u0061\u007B\u007C\u007D\u007E\u007F\u0085\u0086"+
"\u00A0\u00A1\u00A2\u00A6\u00AA\u00AB\u00AC\u00AD\u00AE\u00B0"+"\u00B2\u00B4\u00B5\u00B6\u00B9\u00BA\u00BB\u00BC\u00C0\u00D7"+
"\u00D8\u00F7\u00F8\u02B9\u02BB\u02C2\u02D0\u02D2\u02E0\u02E5"+"\u02EE\u02EF\u0300\u0370\u0374\u0376\u037E\u037F\u0384\u0386"+
"\u0387\u0388\u03F6\u03F7\u0483\u048A\u058A\u058B\u058D\u058F"+"\u0590\u0591\u05BE\u05BF\u05C0\u05C1\u05C3\u05C4\u05C6\u05C7"+
"\u05C8\u0600\u0606\u0608\u0609\u060B\u060C\u060D\u060E\u0610"+"\u061B\u061C\u061D\u0620\u0621\u0622\u0626\u0627\u0628\u0629"+
"\u062A\u062F\u0633\u0640\u0641\u0648\u0649\u064B\u0660\u066A"+"\u066B\u066D\u066E\u0670\u0671\u0674\u0675\u0678\u0688\u069A"+
"\u06C0\u06C1\u06C3\u06CC\u06CD\u06CE\u06CF\u06D0\u06D2\u06D4"+"\u06D5\u06D6\u06DD\u06DE\u06DF\u06E5\u06E7\u06E9\u06EA\u06EE"+
"\u06F0\u06FA\u06FD\u06FF\u0700\u070F\u0710\u0711\u0712\u0715"+"\u071A\u071E\u071F\u0728\u0729\u072A\u072B\u072C\u072D\u072F"+
"\u0730\u074B\u074D\u074E\u0759\u075C\u076B\u076D\u0771\u0772"+"\u0773\u0775\u0778\u077A\u0780\u07A6\u07B1\u07C0\u07EB\u07F4"+
"\u07F6\u07FA\u0816\u081A\u081B\u0824\u0825\u0828\u0829\u082E"+"\u0859\u085C\u0860\u0861\u0862\u0866\u0867\u0868\u0869\u086B"+
"\u0870\u08A0\u08AA\u08AD\u08AE\u08AF\u08B1\u08B3\u08B5\u08B6"+"\u08B9\u08BA\u08BE\u08D4\u08E2\u08E3\u0903\u093A\u093B\u093C"+
"\u093D\u0941\u0949\u094D\u094E\u0951\u0958\u0962\u0964\u0981"+"\u0982\u09BC\u09BD\u09C1\u09C5\u09CD\u09CE\u09E2\u09E4\u09F2"+
"\u09F4\u09FB\u09FC\u0A01\u0A03\u0A3C\u0A3D\u0A41\u0A43\u0A47"+"\u0A49\u0A4B\u0A4E\u0A51\u0A52\u0A70\u0A72\u0A75\u0A76\u0A81"+
"\u0A83\u0ABC\u0ABD\u0AC1\u0AC6\u0AC7\u0AC9\u0ACD\u0ACE\u0AE2"+"\u0AE4\u0AF1\u0AF2\u0AFA\u0B00\u0B01\u0B02\u0B3C\u0B3D\u0B3F"+
"\u0B40\u0B41\u0B45\u0B4D\u0B4E\u0B56\u0B57\u0B62\u0B64\u0B82"+"\u0B83\u0BC0\u0BC1\u0BCD\u0BCE\u0BF3\u0BF9\u0BFA\u0BFB\u0C00"+
"\u0C01\u0C3E\u0C41\u0C46\u0C49\u0C4A\u0C4E\u0C55\u0C57\u0C62"+"\u0C64\u0C78\u0C7F\u0C81\u0C82\u0CBC\u0CBD\u0CBF\u0CC0\u0CC6"+
"\u0CC7\u0CCC\u0CCE\u0CE2\u0CE4\u0D00\u0D02\u0D3B\u0D3D\u0D41"+"\u0D45\u0D4D\u0D4E\u0D62\u0D64\u0DCA\u0DCB\u0DD2\u0DD5\u0DD6"+
"\u0DD7\u0E31\u0E32\u0E34\u0E3B\u0E3F\u0E40\u0E47\u0E4F\u0EB1"+"\u0EB2\u0EB4\u0EBA\u0EBB\u0EBD\u0EC8\u0ECE\u0F18\u0F1A\u0F35"+
"\u0F36\u0F37\u0F38\u0F39\u0F3A\u0F3B\u0F3C\u0F3D\u0F3E\u0F71"+"\u0F7F\u0F80\u0F85\u0F86\u0F88\u0F8D\u0F98\u0F99\u0FBD\u0FC6"+
"\u0FC7\u102D\u1031\u1032\u1038\u1039\u103B\u103D\u103F\u1058"+"\u105A\u105E\u1061\u1071\u1075\u1082\u1083\u1085\u1087\u108D"+
"\u108E\u109D\u109E\u135D\u1360\u1390\u139A\u1400\u1401\u1680"+"\u1681\u169B\u169C\u169D\u1712\u1715\u1732\u1735\u1752\u1754"+
"\u1772\u1774\u17B4\u17B6\u17B7\u17BE\u17C6\u17C7\u17C9\u17D4"+"\u17DB\u17DC\u17DD\u17DE\u17F0\u17FA\u1800\u180B\u180E\u180F"+
"\u1885\u1887\u18A9\u18AA\u1920\u1923\u1927\u1929\u1932\u1933"+"\u1939\u193C\u1940\u1941\u1944\u1946\u19DE\u1A00\u1A17\u1A19"+
"\u1A1B\u1A1C\u1A56\u1A57\u1A58\u1A5F\u1A60\u1A61\u1A62\u1A63"+"\u1A65\u1A6D\u1A73\u1A7D\u1A7F\u1A80\u1AB0\u1ABF\u1B00\u1B04"+
"\u1B34\u1B35\u1B36\u1B3B\u1B3C\u1B3D\u1B42\u1B43\u1B6B\u1B74"+"\u1B80\u1B82\u1BA2\u1BA6\u1BA8\u1BAA\u1BAB\u1BAE\u1BE6\u1BE7"+
"\u1BE8\u1BEA\u1BED\u1BEE\u1BEF\u1BF2\u1C2C\u1C34\u1C36\u1C38"+"\u1CD0\u1CD3\u1CD4\u1CE1\u1CE2\u1CE9\u1CED\u1CEE\u1CF4\u1CF5"+
"\u1CF8\u1CFA\u1DC0\u1DFA\u1DFB\u1E00\u1FBD\u1FBE\u1FBF\u1FC2"+"\u1FCD\u1FD0\u1FDD\u1FE0\u1FED\u1FF0\u1FFD\u1FFF\u2000\u200B"+
"\u200C\u200D\u200E\u200F\u2010\u2028\u2029\u202A\u202B\u202C"+"\u202D\u202E\u202F\u2030\u2035\u2039\u203B\u2044\u2045\u2046"+
"\u2047\u205F\u2060\u2065\u2066\u2067\u2068\u2069\u206A\u2070"+"\u2071\u2074\u207A\u207C\u207D\u207E\u207F\u2080\u208A\u208C"+
"\u208D\u208E\u208F\u20A0\u20D0\u20F1\u2100\u2102\u2103\u2107"+"\u2108\u210A\u2114\u2115\u2116\u2119\u211E\u2124\u2125\u2126"+
"\u2127\u2128\u2129\u212A\u212E\u212F\u213A\u213C\u2140\u2145"+"\u214A\u214E\u2150\u2160\u2189\u218C\u2190\u2208\u220E\u2212"+
"\u2213\u2214\u2215\u2216\u223C\u223E\u2243\u2244\u2252\u2256"+"\u2264\u226C\u226E\u228C\u228F\u2293\u2298\u2299\u22A2\u22A4"+
"\u22A6\u22A7\u22A8\u22AA\u22AB\u22AC\u22B0\u22B8\u22C9\u22CE"+"\u22D0\u22D2\u22D6\u22EE\u22F0\u22F5\u22F6\u22F8\u22FA\u22FF"+
"\u2308\u2309\u230A\u230B\u230C\u2329\u232A\u232B\u2336\u237B"+"\u2395\u2396\u2427\u2440\u244B\u2460\u2488\u249C\u24EA\u26AC"+
"\u26AD\u2768\u2769\u276A\u276B\u276C\u276D\u276E\u276F\u2770"+"\u2771\u2772\u2773\u2774\u2775\u2776\u27C3\u27C5\u27C6\u27C7"+
"\u27C8\u27CA\u27CB\u27CC\u27CD\u27CE\u27D5\u27D7\u27DD\u27DF"+"\u27E2\u27E6\u27E7\u27E8\u27E9\u27EA\u27EB\u27EC\u27ED\u27EE"+
"\u27EF\u27F0\u2800\u2900\u2983\u2984\u2985\u2986\u2987\u2988"+"\u2989\u298A\u298B\u298C\u298D\u298E\u298F\u2990\u2991\u2992"+
"\u2993\u2994\u2995\u2996\u2997\u2998\u2999\u29B8\u29B9\u29C0"+"\u29C2\u29C4\u29C6\u29CF\u29D3\u29D4\u29D6\u29D8\u29D9\u29DA"+
"\u29DB\u29DC\u29F5\u29F6\u29F8\u29FA\u29FC\u29FD\u29FE\u2A2B"+"\u2A2F\u2A34\u2A36\u2A3C\u2A3E\u2A64\u2A66\u2A79\u2A7B\u2A7D"+
"\u2A85\u2A8B\u2A8D\u2A91\u2A9D\u2AA1\u2AA3\u2AA6\u2AAE\u2AAF"+"\u2AB1\u2AB3\u2AB5\u2ABB\u2AC7\u2ACD\u2AD7\u2ADE\u2ADF\u2AE3"+
"\u2AE6\u2AEC\u2AEE\u2AF7\u2AFB\u2B74\u2B76\u2B96\u2B98\u2BBA"+"\u2BBD\u2BC9\u2BCA\u2BD3\u2BEC\u2BF0\u2CE5\u2CEB\u2CEF\u2CF2"+
"\u2CF9\u2D00\u2D7F\u2D80\u2DE0\u2E00\u2E02\u2E06\u2E09\u2E0B"+"\u2E0C\u2E0E\u2E1C\u2E1E\u2E20\u2E22\u2E23\u2E24\u2E25\u2E26"+
"\u2E27\u2E28\u2E29\u2E2A\u2E4A\u2E80\u2E9A\u2E9B\u2EF4\u2F00"+"\u2FD6\u2FF0\u2FFC\u3000\u3001\u3005\u3008\u3009\u300A\u300B"+
"\u300C\u300D\u300E\u300F\u3010\u3011\u3012\u3014\u3015\u3016"+"\u3017\u3018\u3019\u301A\u301B\u301C\u3021\u302A\u302E\u3030"+
"\u3031\u3036\u3038\u303D\u3040\u3099\u309B\u309D\u30A0\u30A1"+"\u30FB\u30FC\u31C0\u31E4\u321D\u321F\u3250\u3260\u327C\u327F"+
"\u32B1\u32C0\u32CC\u32D0\u3377\u337B\u33DE\u33E0\u33FF\u3400"+"\u4DC0\u4E00\uA490\uA4C7\uA60D\uA610\uA66F\uA673\uA674\uA67E"+
"\uA680\uA69E\uA6A0\uA6F0\uA6F2\uA700\uA722\uA788\uA789\uA802"+"\uA803\uA806\uA807\uA80B\uA80C\uA825\uA827\uA828\uA82C\uA838"+
"\uA83A\uA874\uA878\uA8C4\uA8C6\uA8E0\uA8F2\uA926\uA92E\uA947"+"\uA952\uA980\uA983\uA9B3\uA9B4\uA9B6\uA9BA\uA9BC\uA9BD\uA9E5"+
"\uA9E6\uAA29\uAA2F\uAA31\uAA33\uAA35\uAA37\uAA43\uAA44\uAA4C"+"\uAA4D\uAA7C\uAA7D\uAAB0\uAAB1\uAAB2\uAAB5\uAAB7\uAAB9\uAABE"+
"\uAAC0\uAAC1\uAAC2\uAAEC\uAAEE\uAAF6\uAAF7\uABE5\uABE6\uABE8"+"\uABE9\uABED\uABEE\uFB1D\uFB1E\uFB1F\uFB29\uFB2A\uFB50\uFD3E"+
"\uFD40\uFDD0\uFDF0\uFDFD\uFDFE\uFE00\uFE10\uFE1A\uFE20\uFE30"+"\uFE50\uFE51\uFE52\uFE53\uFE54\uFE55\uFE56\uFE59\uFE5A\uFE5B"+
"\uFE5C\uFE5D\uFE5E\uFE5F\uFE60\uFE62\uFE64\uFE66\uFE67\uFE68"+"\uFE69\uFE6B\uFE6C\uFE70\uFEFF\uFF00\uFF01\uFF03\uFF06\uFF08"+
"\uFF09\uFF0A\uFF0B\uFF0C\uFF0D\uFF0E\uFF10\uFF1A\uFF1B\uFF1C"+"\uFF1D\uFF1E\uFF1F\uFF21\uFF3B\uFF3C\uFF3D\uFF3E\uFF41\uFF5B"+
"\uFF5C\uFF5D\uFF5E\uFF5F\uFF60\uFF61\uFF62\uFF63\uFF64\uFF66"+"\uFFE0\uFFE2\uFFE5\uFFE7\uFFE8\uFFEF\uFFF9\uFFFC\uFFFE\uFFFF";
var pC="\x0A\x0C\x0B\x0C\x0D\x0B\x0A\x0B\x0C\x0D\x0E\x06\x0E"+"\x2E\x4E\x0E\x05\x08\x05\x08\x04\x08\x0E\x6E\x0E\x6E"+
"\x0E\x01\x2E\x0E\x4E\x0E\x01\x2E\x0E\x4E\x0E\x0A\x0B"+"\x0A\x08\x0E\x06\x0E\x01\x6E\x0E\x8A\x0E\x06\x04\x0E"+
"\x01\x0E\x04\x01\x6E\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+"\x0E\x01\x0E\x01\x0E\x01\x0E\x89\x01\x0E\x01\x0E\x01"+
"\x0E\x01\x0E\x01\x0E\x01\x89\x01\x0E\x01\x0E\x06\x02"+"\x89\x02\x89\x02\x89\x02\x89\x02\x89\x02\x07\x0E\x03"+
"\x06\x03\x08\x03\x0E\x89\x03\x83\x03\x1A\x03\x18\x1A"+"\x18\x1A\x18\x1A\x18\x1A\x1B\x1A\x18\x1A\x89\x07\x06"+
"\x07\x03\x1A\x89\x18\x03\x18\x1A\x18\x1A\x18\x1A\x18"+"\x1A\x18\x1A\x18\x1A\x18\x03\x18\x89\x07\x0E\x89\x03"+
"\x89\x0E\x89\x18\x04\x1A\x03\x1A\x03\x83\x18\x89\x1A"+"\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x18\x89\x03"+
"\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x03"+"\x89\x03\x02\x89\x02\x0E\x02\x89\x02\x89\x02\x89\x02"+
"\x89\x02\x89\x02\x1A\x03\x1A\x03\x18\x1A\x18\x03\x02"+"\x1A\x18\x03\x18\x1A\x18\x1A\x03\x1A\x18\x1A\x03\x89"+
"\x07\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x06"+
"\x01\x06\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
"\x01\x89\x01\x89\x01\x06\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
"\x01\x89\x01\x0E\x06\x0E\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x0E\x01\x89\x01\x89\x01\x81"+
"\x01\x81\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
"\x01\x06\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x2E\x4E\x2E\x4E\x01\x89"+
"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x0E\x01\x0E\x01"+"\x0D\x01\x2E\x4E\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
"\x89\x01\x89\x01\x89\x01\x89\x01\x06\x01\x89\x01\x0E"+"\x01\x0E\x89\x0A\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
"\x89\x01\x89\x01\x0E\x01\x0E\x01\x0E\x01\x89\x01\x89"+"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
"\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0D"+"\x8A\x0A\x8A\x81\x82\x0E\x0D\x0B\x8F\x91\x93\x90\x92"+
"\x08\x06\x0E\x6E\x0E\x08\x2E\x4E\x0E\x0D\x8A\x01\x14"+"\x15\x16\x17\x8A\x04\x01\x04\x05\x0E\x2E\x4E\x01\x04"+
"\x05\x0E\x2E\x4E\x01\x06\x89\x01\x0E\x01\x0E\x01\x0E"+"\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+
"\x06\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E"+"\x6E\x0E\x05\x06\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E"+
"\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E"+"\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E"+
"\x6E\x0E\x6E\x0E\x2E\x4E\x2E\x4E\x0E\x2E\x4E\x0E\x01"+"\x0E\x01\x0E\x01\x0E\x01\x0E\x04\x01\x0E\x01\x0E\x2E"+
"\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E"+"\x0E\x6E\x2E\x4E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E"+
"\x6E\x0E\x6E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E"+"\x0E\x01\x0E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E"+
"\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x0E"+"\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x2E\x4E\x2E"+
"\x4E\x0E\x6E\x0E\x6E\x0E\x2E\x4E\x0E\x6E\x0E\x6E\x0E"+"\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E"+
"\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E"+"\x6E\x0E\x6E\x0E\x6E\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+
"\x0E\x01\x0E\x01\x0E\x01\x89\x01\x0E\x01\x89\x01\x89"+"\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x2E\x4E\x2E"+
"\x4E\x2E\x4E\x2E\x4E\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+"\x0E\x01\x0D\x0E\x01\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E"+
"\x2E\x4E\x0E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x0E\x01"+"\x89\x01\x0E\x01\x0E\x01\x0E\x01\x89\x0E\x01\x0E\x01"+
"\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E"+"\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+
"\x89\x0E\x89\x0E\x01\x89\x01\x89\x01\x0E\x01\x0E\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x0E\x01\x06\x01\x0E"+
"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x02"+
"\x89\x02\x05\x02\x03\x0E\x03\x01\x03\x0E\x03\x89\x0E"+"\x01\x89\x0E\x08\x0E\x08\x01\x0E\x08\x0E\x2E\x4E\x2E"+
"\x4E\x2E\x4E\x06\x0E\x05\x6E\x0E\x01\x0E\x06\x0E\x01"+"\x03\x8A\x01\x0E\x06\x0E\x2E\x4E\x0E\x05\x08\x05\x08"+
"\x04\x08\x0E\x6E\x0E\x6E\x0E\x01\x2E\x0E\x4E\x0E\x01"+"\x2E\x0E\x4E\x0E\x2E\x4E\x0E\x2E\x4E\x0E\x01\x06\x0E"+
"\x06\x01\x0E\x01\x8E\x0E\x01\x01";var pz="\u0028\u0029\u0029\u0028\u003C\u003E\u003E\u003C\u005B\u005D"+
"\u005D\u005B\u007B\u007D\u007D\u007B\u00AB\u00BB\u00BB\u00AB"+"\u0F3A\u0F3B\u0F3B\u0F3A\u0F3C\u0F3D\u0F3D\u0F3C\u169B\u169C"+
"\u169C\u169B\u2039\u203A\u203A\u2039\u2045\u2046\u2046\u2045"+"\u207D\u207E\u207E\u207D\u208D\u208E\u208E\u208D\u2208\u220B"+
"\u2209\u220C\u220A\u220D\u220B\u2208\u220C\u2209\u220D\u220A"+"\u2215\u29F5\u223C\u223D\u223D\u223C\u2243\u22CD\u2252\u2253"+
"\u2253\u2252\u2254\u2255\u2255\u2254\u2264\u2265\u2265\u2264"+"\u2266\u2267\u2267\u2266\u2268\u2269\u2269\u2268\u226A\u226B"+
"\u226B\u226A\u226E\u226F\u226F\u226E\u2270\u2271\u2271\u2270"+"\u2272\u2273\u2273\u2272\u2274\u2275\u2275\u2274\u2276\u2277"+
"\u2277\u2276\u2278\u2279\u2279\u2278\u227A\u227B\u227B\u227A"+"\u227C\u227D\u227D\u227C\u227E\u227F\u227F\u227E\u2280\u2281"+
"\u2281\u2280\u2282\u2283\u2283\u2282\u2284\u2285\u2285\u2284"+"\u2286\u2287\u2287\u2286\u2288\u2289\u2289\u2288\u228A\u228B"+
"\u228B\u228A\u228F\u2290\u2290\u228F\u2291\u2292\u2292\u2291"+"\u2298\u29B8\u22A2\u22A3\u22A3\u22A2\u22A6\u2ADE\u22A8\u2AE4"+
"\u22A9\u2AE3\u22AB\u2AE5\u22B0\u22B1\u22B1\u22B0\u22B2\u22B3"+"\u22B3\u22B2\u22B4\u22B5\u22B5\u22B4\u22B6\u22B7\u22B7\u22B6"+
"\u22C9\u22CA\u22CA\u22C9\u22CB\u22CC\u22CC\u22CB\u22CD\u2243"+"\u22D0\u22D1\u22D1\u22D0\u22D6\u22D7\u22D7\u22D6\u22D8\u22D9"+
"\u22D9\u22D8\u22DA\u22DB\u22DB\u22DA\u22DC\u22DD\u22DD\u22DC"+"\u22DE\u22DF\u22DF\u22DE\u22E0\u22E1\u22E1\u22E0\u22E2\u22E3"+
"\u22E3\u22E2\u22E4\u22E5\u22E5\u22E4\u22E6\u22E7\u22E7\u22E6"+"\u22E8\u22E9\u22E9\u22E8\u22EA\u22EB\u22EB\u22EA\u22EC\u22ED"+
"\u22ED\u22EC\u22F0\u22F1\u22F1\u22F0\u22F2\u22FA\u22F3\u22FB"+"\u22F4\u22FC\u22F6\u22FD\u22F7\u22FE\u22FA\u22F2\u22FB\u22F3"+
"\u22FC\u22F4\u22FD\u22F6\u22FE\u22F7\u2308\u2309\u2309\u2308"+"\u230A\u230B\u230B\u230A\u2329\u232A\u232A\u2329\u2768\u2769"+
"\u2769\u2768\u276A\u276B\u276B\u276A\u276C\u276D\u276D\u276C"+"\u276E\u276F\u276F\u276E\u2770\u2771\u2771\u2770\u2772\u2773"+
"\u2773\u2772\u2774\u2775\u2775\u2774\u27C3\u27C4\u27C4\u27C3"+"\u27C5\u27C6\u27C6\u27C5\u27C8\u27C9\u27C9\u27C8\u27CB\u27CD"+
"\u27CD\u27CB\u27D5\u27D6\u27D6\u27D5\u27DD\u27DE\u27DE\u27DD"+"\u27E2\u27E3\u27E3\u27E2\u27E4\u27E5\u27E5\u27E4\u27E6\u27E7"+
"\u27E7\u27E6\u27E8\u27E9\u27E9\u27E8\u27EA\u27EB\u27EB\u27EA"+"\u27EC\u27ED\u27ED\u27EC\u27EE\u27EF\u27EF\u27EE\u2983\u2984"+
"\u2984\u2983\u2985\u2986\u2986\u2985\u2987\u2988\u2988\u2987"+"\u2989\u298A\u298A\u2989\u298B\u298C\u298C\u298B\u298D\u2990"+
"\u298E\u298F\u298F\u298E\u2990\u298D\u2991\u2992\u2992\u2991"+"\u2993\u2994\u2994\u2993\u2995\u2996\u2996\u2995\u2997\u2998"+
"\u2998\u2997\u29B8\u2298\u29C0\u29C1\u29C1\u29C0\u29C4\u29C5"+"\u29C5\u29C4\u29CF\u29D0\u29D0\u29CF\u29D1\u29D2\u29D2\u29D1"+
"\u29D4\u29D5\u29D5\u29D4\u29D8\u29D9\u29D9\u29D8\u29DA\u29DB"+"\u29DB\u29DA\u29F5\u2215\u29F8\u29F9\u29F9\u29F8\u29FC\u29FD"+
"\u29FD\u29FC\u2A2B\u2A2C\u2A2C\u2A2B\u2A2D\u2A2E\u2A2E\u2A2D"+"\u2A34\u2A35\u2A35\u2A34\u2A3C\u2A3D\u2A3D\u2A3C\u2A64\u2A65"+
"\u2A65\u2A64\u2A79\u2A7A\u2A7A\u2A79\u2A7D\u2A7E\u2A7E\u2A7D"+"\u2A7F\u2A80\u2A80\u2A7F\u2A81\u2A82\u2A82\u2A81\u2A83\u2A84"+
"\u2A84\u2A83\u2A8B\u2A8C\u2A8C\u2A8B\u2A91\u2A92\u2A92\u2A91"+"\u2A93\u2A94\u2A94\u2A93\u2A95\u2A96\u2A96\u2A95\u2A97\u2A98"+
"\u2A98\u2A97\u2A99\u2A9A\u2A9A\u2A99\u2A9B\u2A9C\u2A9C\u2A9B"+"\u2AA1\u2AA2\u2AA2\u2AA1\u2AA6\u2AA7\u2AA7\u2AA6\u2AA8\u2AA9"+
"\u2AA9\u2AA8\u2AAA\u2AAB\u2AAB\u2AAA\u2AAC\u2AAD\u2AAD\u2AAC"+"\u2AAF\u2AB0\u2AB0\u2AAF\u2AB3\u2AB4\u2AB4\u2AB3\u2ABB\u2ABC"+
"\u2ABC\u2ABB\u2ABD\u2ABE\u2ABE\u2ABD\u2ABF\u2AC0\u2AC0\u2ABF"+"\u2AC1\u2AC2\u2AC2\u2AC1\u2AC3\u2AC4\u2AC4\u2AC3\u2AC5\u2AC6"+
"\u2AC6\u2AC5\u2ACD\u2ACE\u2ACE\u2ACD\u2ACF\u2AD0\u2AD0\u2ACF"+"\u2AD1\u2AD2\u2AD2\u2AD1\u2AD3\u2AD4\u2AD4\u2AD3\u2AD5\u2AD6"+
"\u2AD6\u2AD5\u2ADE\u22A6\u2AE3\u22A9\u2AE4\u22A8\u2AE5\u22AB"+"\u2AEC\u2AED\u2AED\u2AEC\u2AF7\u2AF8\u2AF8\u2AF7\u2AF9\u2AFA"+
"\u2AFA\u2AF9\u2E02\u2E03\u2E03\u2E02\u2E04\u2E05\u2E05\u2E04"+"\u2E09\u2E0A\u2E0A\u2E09\u2E0C\u2E0D\u2E0D\u2E0C\u2E1C\u2E1D"+
"\u2E1D\u2E1C\u2E20\u2E21\u2E21\u2E20\u2E22\u2E23\u2E23\u2E22"+"\u2E24\u2E25\u2E25\u2E24\u2E26\u2E27\u2E27\u2E26\u2E28\u2E29"+
"\u2E29\u2E28\u3008\u3009\u3009\u3008\u300A\u300B\u300B\u300A"+"\u300C\u300D\u300D\u300C\u300E\u300F\u300F\u300E\u3010\u3011"+
"\u3011\u3010\u3014\u3015\u3015\u3014\u3016\u3017\u3017\u3016"+"\u3018\u3019\u3019\u3018\u301A\u301B\u301B\u301A\uFE59\uFE5A"+
"\uFE5A\uFE59\uFE5B\uFE5C\uFE5C\uFE5B\uFE5D\uFE5E\uFE5E\uFE5D"+"\uFE64\uFE65\uFE65\uFE64\uFF08\uFF09\uFF09\uFF08\uFF1C\uFF1E"+
"\uFF1E\uFF1C\uFF3B\uFF3D\uFF3D\uFF3B\uFF5B\uFF5D\uFF5D\uFF5B"+"\uFF5F\uFF60\uFF60\uFF5F\uFF62\uFF63\uFF63\uFF62";
var pA=[0x0621,"\u0000\u0000\u0000",0x0622,"\u0000\u0000\uFE82",0x0623,"\u0000\u0000\uFE84"
,0x0624,"\u0000\u0000\uFE86",0x0625,"\u0000\u0000\uFE88",0x0626,"\uFE8B\uFE8C\uFE8A"
,0x0627,"\u0000\u0000\uFE8E",0x0628,"\uFE91\uFE92\uFE90",0x0629,"\u0000\u0000\uFE94"
,0x062A,"\uFE97\uFE98\uFE96",0x062B,"\uFE9B\uFE9C\uFE9A",0x062C,"\uFE9F\uFEA0\uFE9E"
,0x062D,"\uFEA3\uFEA4\uFEA2",0x062E,"\uFEA7\uFEA8\uFEA6",0x062F,"\u0000\u0000\uFEAA"
,0x0630,"\u0000\u0000\uFEAC",0x0631,"\u0000\u0000\uFEAE",0x0632,"\u0000\u0000\uFEB0"
,0x0633,"\uFEB3\uFEB4\uFEB2",0x0634,"\uFEB7\uFEB8\uFEB6",0x0635,"\uFEBB\uFEBC\uFEBA"
,0x0636,"\uFEBF\uFEC0\uFEBE",0x0637,"\uFEC3\uFEC4\uFEC2",0x0638,"\uFEC7\uFEC8\uFEC6"
,0x0639,"\uFECB\uFECC\uFECA",0x063A,"\uFECF\uFED0\uFECE",0x0641,"\uFED3\uFED4\uFED2"
,0x0642,"\uFED7\uFED8\uFED6",0x0643,"\uFEDB\uFEDC\uFEDA",0x0644,"\uFEDF\uFEE0\uFEDE"
,0x0645,"\uFEE3\uFEE4\uFEE2",0x0646,"\uFEE7\uFEE8\uFEE6",0x0647,"\uFEEB\uFEEC\uFEEA"
,0x0648,"\u0000\u0000\uFEEE",0x0649,"\uFBE8\uFBE9\uFEF0",0x064A,"\uFEF3\uFEF4\uFEF2"
,0x0671,"\u0000\u0000\uFB51",0x0677,"\u0000\u0000\u0000",0x0679,"\uFB68\uFB69\uFB67"
,0x067A,"\uFB60\uFB61\uFB5F",0x067B,"\uFB54\uFB55\uFB53",0x067E,"\uFB58\uFB59\uFB57"
,0x067F,"\uFB64\uFB65\uFB63",0x0680,"\uFB5C\uFB5D\uFB5B",0x0683,"\uFB78\uFB79\uFB77"
,0x0684,"\uFB74\uFB75\uFB73",0x0686,"\uFB7C\uFB7D\uFB7B",0x0687,"\uFB80\uFB81\uFB7F"
,0x0688,"\u0000\u0000\uFB89",0x068C,"\u0000\u0000\uFB85",0x068D,"\u0000\u0000\uFB83"
,0x068E,"\u0000\u0000\uFB87",0x0691,"\u0000\u0000\uFB8D",0x0698,"\u0000\u0000\uFB8B"
,0x06A4,"\uFB6C\uFB6D\uFB6B",0x06A6,"\uFB70\uFB71\uFB6F",0x06A9,"\uFB90\uFB91\uFB8F"
,0x06AD,"\uFBD5\uFBD6\uFBD4",0x06AF,"\uFB94\uFB95\uFB93",0x06B1,"\uFB9C\uFB9D\uFB9B"
,0x06B3,"\uFB98\uFB99\uFB97",0x06BA,"\u0000\u0000\uFB9F",0x06BB,"\uFBA2\uFBA3\uFBA1"
,0x06BE,"\uFBAC\uFBAD\uFBAB",0x06C0,"\u0000\u0000\uFBA5",0x06C1,"\uFBA8\uFBA9\uFBA7"
,0x06C5,"\u0000\u0000\uFBE1",0x06C6,"\u0000\u0000\uFBDA",0x06C7,"\u0000\u0000\uFBD8"
,0x06C8,"\u0000\u0000\uFBDC",0x06C9,"\u0000\u0000\uFBE3",0x06CB,"\u0000\u0000\uFBDF"
,0x06CC,"\uFBFE\uFBFF\uFBFD",0x06D0,"\uFBE6\uFBE7\uFBE5",0x06D2,"\u0000\u0000\uFBAF"
,0x06D3,"\u0000\u0000\uFBB1",0xFEF5,"\u0000\u0000\uFEF6",0xFEF7,"\u0000\u0000\uFEF8"
,0xFEF9,"\u0000\u0000\uFEFA",0xFEFB,"\u0000\u0000\uFEFC"];function p2(a7){var u=
0;var min=0;var f=pB;var max=f.length-1;while(max>=min){u=(max+min)>>1;if(a7===f.
charCodeAt(u))break;else if(a7<f.charCodeAt(u))max=u-1;else if((a7>=f.charCodeAt(
u+1)))min=u+1;else break;}return pC.charCodeAt(u);}function m2(a7){var u=0;var min=
0;var f=pz;var max=(f.length>>1)-1;var di=-1;while(max>=min){u=(max+min)>>1;di=a7-
f.charCodeAt(u*2);if(!di)return f.charCodeAt(u*2+1);if(di<0)max=u-1;else min=u+1;
}return 0;}function lb(a7){var u=0;var min=0;var f=pA;var max=(f.length>>1)-1;var
di=-1;while(max>=min){u=(max+min)>>1;di=a7-f[u*2];if(!di)return f[u*2+1];if(di<0
)max=u-1;else min=u+1;}return"";}function pO(bq,bv,lZ){var fv=0;var aQ=bq[bv*4];
if(aQ!==23)return 0;for(;bv>=lZ;bv--){aQ=bq[bv*4];if(aQ===23)fv--;if(fv&&((aQ===
20)||(aQ===21)||(aQ===22)))if(++fv===0)return bv;}return 0;}function k$(bq,bv,e1
){var fv=0;var aQ=bq[bv*4];if((aQ!==20)&&(aQ!==21)&&(aQ!==22))return 0;for(;bv<e1;
bv++){aQ=bq[bv*4];if((aQ===20)||(aQ===21)||(aQ===22))fv++;else if(fv&&(aQ===23)){
if(fv===1)return bv;if(fv>1)fv--;}}return 0;}function m1(bq,bv,e1){for(;bv<e1;bv++
){var aQ=bq[bv*4];if((aQ===1)||(aQ===2)||(aQ===3))return bv;if((aQ!==20)&&(aQ!==
21)&&(aQ!==22))continue;if(!(bv=k$(bq,bv,e1)))bv=e1;}return 0;}function k_(bq,bv
,e1){var aq=bq[bv*4+1];if(bv>=e1)return 0;while((bv<e1)&&(bq[bv*4+1]===aq))bv++;
return bv-1;}function qg(iS,d3,j4,bq,k,i,ra,rb,nK){var fp=[];var ky=[];var bU=-1;
var ae=0;var bR=0;for(;d3<j4;d3++){var aK=iS[d3];while((nK>0)&&((aK+bR)>=ra[rb-bR
])){bR++;nK--;}if(bq[aK*4]!==14)continue;var be=bq[aK*4+2];if(be===1){if(bU>=(63-
1))break;ky.push(aK);fp.push(m2(k[i+aK-3+bR]));bU++;}else if(be===2){var ad=k[i+
aK-3+bR];var e_=bU;while((e_>0)&&(ad!==fp[e_])&&((ad!==0x232A)||(fp[e_]!==0x3009
))&&((ad!==0x3009)||(fp[e_]!==0x232A)))e_--;if((e_>=0)&&((ad===fp[e_])||((ad===0x232A
)&&(fp[e_]===0x3009))||((ad===0x3009)&&(fp[e_]===0x232A)))){while(bU>e_){bq[ky.pop(
)*4+2]=3;fp.pop();bU--;}fp.pop();ky.pop();bU--;ae++;}else bq[aK*4+2]=3;}}while(bU>=
0){bq[ky.pop()*4+2]=3;bU--;}for(;d3<j4;d3++){var aK=iS[d3]*4;if((bq[aK]===14)&&((
bq[aK+2]===1)||(bq[aK+2]===2)))bq[aK+2]=3;}return ae;}function pL(iS,d3,j4,bq){var
aK=iS[d3]*4;var ae=1;if((bq[aK]!==14)||(bq[aK+2]!==1))return 0;for(d3++;d3<j4;d3++
){var aK=iS[d3]*4;var type=bq[aK];var be=bq[aK+2];if((type===14)&&(be===1))ae++;
else if((type===14)&&(be===2))if(!--ae)return d3;}return 0;}function p1(bq,bv,lZ
,lY){var aq=bq[bv*4+1];var cZ=lY;if(bv>lZ)cZ=bq[bv*4-3];if(cZ>aq)aq=cZ;if(aq&1)return 2;
else return 1;}function p0(bq,bv,e1,lY){var aq=bq[bv*4+1];var mp=lY;var type=bq[
bv*4];if((bv<(e1-1))&&(type!==21)&&(type!==20)&&(type!==22))mp=bq[bv*4+5];if(mp>
aq)aq=mp;if(aq&1)return 2;else return 1;}d.qx=function(lV){if(lV<=0)return null;
return{Data:new Uint8Array((lV+4)*4),p8:lV,fh:0,m3:false,hl:0};};d.nq=function(ao
){};d.sP=function(ao){return ao&&ao.m3;};d.qw=function(ao){return ao&&(ao.hl===1
);};d.hq=function(ao,bh){if(!ao)return 0;if((bh<0)||(bh>=ao.fh))return ao.hl;return ao.
Data[bh*4+13];};d.ni=function(ao,k,i,al,lE){var f=ao?ao.Data:null;var sm=ao?ao.p8:
0;var length=(al<0)?(k.length-i-1):al;var eM=lE>0;var u=0;var f8=12;if(sm<length
)return false;for(;u<length;u++){var me=p2(k[i+u]);var type=me&31;var l3=me&96;var
sg=me&128;var be=0;if(type===24)be=8;else if(type===25)be=9;else if(type===26)be=
10;else if(type===27)be=11;else if(l3===32)be=1;else if(l3===64)be=2;else if(l3===
96)be=3;else if(type===9)be=4;else if(type===13)be=5;else if(type===12)be=6;else
if(type===11)be=6;else if((type===21)||(type===20)||(type===22)||(type===23))be=
7;else if(sg)be=12;if((type>=24)&&(type<=27))type=3;if(!eM&&((type===3)||(type===
2)||(type===17)||(type===18)||(type===21)))eM=1;f[f8++]=type;f[f8++]=0;f[f8++]=be;
f[f8++]=0;}f[f8++]=0;f[f8++]=0;f[f8++]=0;f[f8++]=0;ao.fh=length;ao.m3=eM;ao.hl=(
lE>0)?1:0;if(!eM)return false;if((lE<0)&&(u=m1(f,3,length+3)))ao.hl=(f[u*4]===1)?
0:1;return true;};d.nk=function(ao,k,i){var b9=[];var length=ao?ao.fh:0;var g7=ao?
ao.hl:0;var f=ao?ao.Data:null;var c0=3+length;var aK=new Uint32Array(length+2);var
bU=0;var g6=0;var h5=0;var mD=0;var gZ=0;var s;var bI;b9.push({hj:g7,fG:0,jz:false
});for(s=3;s<c0;s++){var aQ=f[s*4];if(aQ===22){var o$=k$(f,s,c0);var e=m1(f,s+1,
o$?o$:c0);if(e&&((f[e*4]===3)||(f[e*4]===2)))aQ=21;else aQ=20;}if((aQ===17)||(aQ===
15)||(aQ===18)||(aQ===16)){var aq=b9[bU].hj;var type=0;if((aQ===17)||(aQ===18))aq+=(
aq&1)?2:1;else aq+=(aq&1)?1:2;if(aQ===18)type=2;if(aQ===16)type=1;if((aq<=125)&&
!g6&&!h5){bU++;b9.push({hj:aq,fG:type,jz:false});}if((aq>125)&&!g6)h5++;}else if((
aQ===21)||(aQ===20)){var aq=b9[bU].hj;f[s*4+1]=aq;if(b9[bU].fG)f[s*4]=b9[bU].fG;
if(aQ===21)aq+=(aq&1)?2:1;else aq+=(aq&1)?1:2;if((aq<=125)&&!g6&&!h5){mD++;bU++;
b9.push({hj:aq,fG:0,jz:true});}else g6++;}else if(aQ===23){if(g6)g6--;else if(mD
){h5=0;while(!b9[bU].jz){b9.pop();bU--;}b9.pop();bU--;mD--;}f[s*4+1]=b9[bU].hj;if(
b9[bU].fG)f[s*4]=b9[bU].fG;}else if(aQ===19){if(!g6){if(h5)h5--;else if((bU&&!b9[
bU].jz)){b9.pop();bU--;}}}else if((aQ!==11)&&(aQ!==10)){f[s*4+1]=b9[bU].hj;if(b9[
bU].fG)f[s*4]=b9[bU].fG;}}for(bI=3,s=3;s<c0;s++,bI++){var aQ=f[s*4];if((aQ===17)||(
aQ===15)||(aQ===18)||(aQ===16)||(aQ===19)||(aQ===10)){aK[length+2-++gZ]=s;bI--;}
else if(bI<s){f[bI*4]=f[s*4];f[bI*4+1]=f[s*4+1];f[bI*4+2]=f[s*4+2];}}c0-=gZ;for(
s=3;s<c0;){var aS=0;var e9;var e4;var je;var hW;var dI;f[4]=0;f[5]=0;f[6]=0;f[8]=
0;f[9]=0;f[10]=0;if((f[s*4]===23)&&pO(f,s,3)){s=k_(f,s,c0)+1;continue;}f[4]=p1(f
,s,3,g7);aK[aS++]=1;hW=k_(f,s,c0);for(;s<=hW;s++)aK[aS++]=s;while(je=k$(f,hW,c0)
){hW=k_(f,je,c0);for(;je<=hW;je++)aK[aS++]=je;}f[8]=p0(f,hW,c0,g7);aK[aS++]=2;e9=
aS;for(dI=f[4],aS=1;aS<e9;aS++){var bx=aK[aS];if(f[bx*4]===9){var h6=f[aK[aS-1]*
4];if((h6===21)||(h6===20)||(h6===22)||(h6===23))h6=14;f[bx*4]=h6;}}for(dI=f[4],
aS=1;aS<e9;aS++){var bx=aK[aS];var kv=aK[aS-1];var type=f[bx*4];if((type===1)||(
type===2)||(type===3))dI=type;if((type===4)&&(dI===3))type=f[bx*4]=7;if(type===3
)type=f[bx*4]=2;if((type===4)&&(f[kv*4]===5)&&(f[aK[aS-2]*4]===type))f[kv*4]=type;
if(((type===7)||(type===4))&&(f[kv*4]===8)&&(f[aK[aS-2]*4]===type))f[kv*4]=type;
}for(aS=1;aS<e9;aS++){var bx=aK[aS];var type=f[bx*4];if(type===4){var dS=aS-1;while(
f[aK[dS]*4]===6)f[aK[dS--]*4]=4;}if((type===6)&&(f[aK[aS-1]*4]===4))f[bx*4]=4;}for(
aS=1;aS<e9;aS++){var bx=aK[aS];var type=f[bx*4];if((type===6)||(type===5)||(type===
8))f[bx*4]=14;}for(dI=f[4],aS=1;aS<e9;aS++){var bx=aK[aS];var type=f[bx*4];if((type===
4)&&(dI===1))f[bx*4]=1;if((type===1)||(type===2)||(type===3))dI=type;}if(qg(aK,aS=
1,e9-1,f,k,i,aK,length+1,gZ)){var eJ=(f[aK[aS]*4+1]&1)?2:1;var dI=f[8];for(;aS<e9;
aS++){var hN=pL(aK,aS,e9,f);var dS=aS+1;var type=f[aK[aS]*4];var jj=0;var g9=0;var
h3=0;if((type===4)||(type===7))type=2;if((type===2)||(type===1))dI=type;if(!hN)continue;
for(;(dS<hN)&&(!jj||!g9);dS++){var k0=f[aK[dS]*4];if(k0===1)jj++;if(k0===2)g9++;
if(k0===7)g9++;if(k0===4)g9++;}if(((eJ===1)&&jj)||((eJ===2)&&g9)){f[aK[aS]*4]=eJ;
f[aK[hN]*4]=eJ;h3=eJ;dI=eJ;}else if((jj||g9)&&(dI!==eJ)){f[aK[aS]*4]=dI;f[aK[hN]
*4]=dI;h3=dI;}else if(jj||g9){f[aK[aS]*4]=eJ;f[aK[hN]*4]=eJ;h3=eJ;dI=eJ;}if(h3){
for(dS=aS+1;f[aK[dS]*4+2]===4;dS++)f[aK[dS]*4]=h3;for(dS=hN+1;f[aK[dS]*4+2]===4;
dS++)f[aK[dS]*4]=h3;}}}for(e4=0,aS=1;aS<e9;aS++){var bx=aK[aS];var type=f[bx*4];
if(!e4&&((type===11)||(type===12)||(type===13)||(type===14)||(type===22)||(type===
20)||(type===21)||(type===23)))e4=aS;if(e4&&(type!==11)&&(type!==12)&&(type!==13
)&&(type!==14)&&(type!==22)&&(type!==20)&&(type!==21)&&(type!==23)){var go=f[aK[
e4-1]*4];var k1=type;if((go===4)||(go===7))go=2;if((k1===4)||(k1===7))k1=2;if((go
!==k1)||((go!==1)&&(go!==2)))go=(f[aK[e4]*4+1]&1)?2:1;for(;e4<aS;e4++)f[aK[e4]*4
]=go;e4=0;}}}for(s=3;s<c0;s++){var type=f[s*4];if(f[s*4+1]&1)if((type===1)||(type===
4)||(type===7))f[s*4+1]++;else;else if(type===2)f[s*4+1]++;else if((type===4)||(
type===7))f[s*4+1]+=2;}for(s=c0-1,bI=s+gZ;gZ>0;s--,bI--){if(aK[length+2-gZ]===bI
){var aq=g7;var ad=k[i+bI-3];if((s>=3)&&(f[s*4+1]>aq))aq=f[s*4+1];if((bI<(c0-1))&&(
f[(bI+1)*4+1]>aq))aq=f[(bI+1)*4+1];if(ad===0x200D)f[bI*4+2]=11;else if(((ad<0x0000
)||(ad>0x0008))&&((ad<0x000E)||(ad>0x001B))&&((ad<0x007F)||(ad>0x0084))&&((ad<0x0086
)||(ad>0x009F))&&(ad!==0x180E)&&(ad!==0x200C))f[bI*4+2]=12;else f[bI*4+2]=0;f[bI
*4]=31;f[bI*4+1]=aq;s++;gZ--;c0++;}else if(bI>s){f[bI*4]=f[s*4];f[bI*4+1]=f[s*4+
1];f[bI*4+2]=f[s*4+2];}}};d.nh=function(ao,k,i,eD,fQ){var length=ao?ao.fh:0;var f=
ao?ao.Data:null;var c0=3+length;var s=3;var bI=3;var aq=f[13];for(;(s<=c0);s++){
var gj=0;var bx=0;var g4=0;if((aq===f[s*4+1])&&(s<c0))continue;for(;(bI<s)||bx||
gj||g4;bI++){var dP;var dQ;if(bI<s){var be=f[bI*4+2];if((be===12)||(be===4))continue;
gj=bx;bx=g4;g4=bI;}else{gj=bx;bx=g4;g4=0;}if(aq&1){dP=g4;dQ=gj;}else{dP=gj;dQ=g4;
}if(bx&&(f[bx*4+2]===8)){var u=bx-3;var ad=k[i+u];var c=lb(ad);var ah=eD?fQ[(eD[
i+u]>>12)&0xFF]:null;if(!ah)ah=fQ[0];if(c.charCodeAt(2)&&dQ&&((f[dQ*4+2]===9)||(
f[dQ*4+2]===10)||(f[dQ*4+2]===11))&&(!ah||this.eY(ah,c.charCodeAt(2))))k[i+u]=c.
charCodeAt(2);}else if(bx&&(f[bx*4+2]===9)){var u=bx-3;var ad=k[i+u];var c=lb(ad
);var ah=eD?fQ[(eD[i+u]>>12)&0xFF]:null;if(!ah)ah=fQ[0];if(c.charCodeAt(0)&&dP&&((
f[dP*4+2]===8)||(f[dP*4+2]===10)||(f[dP*4+2]===11))&&(!ah||this.eY(ah,c.charCodeAt(
0))))k[i+u]=c.charCodeAt(0);}else if(bx&&(f[bx*4+2]===10)){var u=bx-3;var ad=k[i+
u];var c=lb(ad);var ah=eD?fQ[(eD[i+u]>>12)&0xFF]:null;if(!ah)ah=fQ[0];if(c.charCodeAt(
1)&&dQ&&dP&&((f[dQ*4+2]===9)||(f[dQ*4+2]===10)||(f[dQ*4+2]===11))&&((f[dP*4+2]===
8)||(f[dP*4+2]===10)||(f[dP*4+2]===11))){if(!ah||this.eY(ah,c.charCodeAt(1)))k[i+
u]=c.charCodeAt(1);}else if(c.charCodeAt(2)&&dQ&&((f[dQ*4+2]===9)||(f[dQ*4+2]===
10)||(f[dQ*4+2]===11))){if(!ah||this.eY(ah,c.charCodeAt(2)))k[i+u]=c.charCodeAt(
2);}else if(c.charCodeAt(0)&&dP&&((f[dP*4+2]===8)||(f[dP*4+2]===10)||(f[dP*4+2]===
11))){if(!ah||this.eY(ah,c.charCodeAt(0)))k[i+u]=c.charCodeAt(0);}}if(bx&&gj){var
d5=((aq&1)?bx:gj)-3;var ep=((aq&1)?gj:bx)-3;var oo=k[i+d5];var op=k[i+ep];var d6=
0;if(op===0xFEDF)switch(oo){case 0xFE82:d6=0xFEF5;break;case 0xFE84:d6=0xFEF7;break;
case 0xFE88:d6=0xFEF9;break;case 0xFE8E:d6=0xFEFB;break;}if(op===0xFEE0)switch(oo
){case 0xFE82:d6=0xFEF6;break;case 0xFE84:d6=0xFEF8;break;case 0xFE88:d6=0xFEFA;
break;case 0xFE8E:d6=0xFEFC;break;}if(d6){var ah=eD?fQ[(eD[i+d5]>>12)&0xFF]:null;
if(!ah)ah=fQ[0];if(ah&&!this.eY(ah,d6))d6=0;}if(d6){k[i+d5]=d6;k[i+ep]=0xFEFF;}}
}bI=s;aq=f[s*4+1];}};d.nj=function(ao,k,i){var length=ao?ao.fh:0;var f=ao?ao.Data:
null;var fq=3+length;var bB;if(!f)return;for(bB=fq-1;bB>=3;bB--){var be=f[bB*4+2
];if((f[bB*4+1]&1)&&((be===1)||(be===2)||(be===3))){var o_=m2(k[i+bB-3]);if(o_)k[
i+bB-3]=o_;}}};d.lm=function(ao,fV,gP){var f=ao?ao.Data:null;var dj=fV+3;var fq=
gP+3;var g7=ao?ao.hl:0;var l1=true;var bB;if(!f)return;for(bB=fq-1;bB>=dj;bB--){
var be=f[bB*4+2];if(be===6){f[bB*4+1]=g7;l1=true;}else if(l1&&((be===5)||(be===7
)))f[bB*4+1]=g7;else if(f[bB*4]!==31)l1=0;}};d.ip=function(ao,fV,gP,c2,fN){var b9=[
];var f=ao?ao.Data:null;var dj=fV+3;var fq=gP+3;var aO=dj;var aq=0;var eS=0;var eR=
0;var bB;if(!f)return;for(bB=dj;bB<=fq;bB++){var i2=(bB<fq)?f[bB*4+1]:0;while((i2>
aq)&&(aq<(125+2))){b9.push(aO);aO=bB;aq++;}while((i2<aq)&&(aq>0)){var jf=aO;aO=b9.
pop();aq--;if((bB-jf)>1){var pj=jf-dj;var pk=bB-dj-1;if((pj===eS)&&(pk===eR)){eS=
0;eR=0;continue;}for(;eS<eR;eS++,eR--){var e=c2[eS+fN];c2[eS+fN]=c2[eR+fN];c2[eR+
fN]=e;}eS=pj;eR=pk;}}}for(;eS<eR;eS++,eR--){var e=c2[eS+fN];c2[eS+fN]=c2[eR+fN];
c2[eR+fN]=e;}};d.sQ=function(ao,fV,gP,bh){var b9=[];var f=ao?ao.Data:null;var dj=
fV+3;var fq=gP+3;var aO=dj;var aq=0;var bB;if(!f)return bh;for(bB=dj;bB<=fq;bB++
){var i2=(bB<fq)?f[bB*4+1]:0;while((i2>aq)&&(aq<(125+2))){b9.push(aO);aO=bB;aq++;
}while((i2<aq)&&(aq>0)){var jf=aO;aO=b9.pop();aq--;if((bB-jf)>1){var d5=jf-dj;var
ep=bB-dj-1;if((bh>=d5)&&(bh<=ep))bh=ep-(bh-d5);}}}return bh;};d.sR=function(ao,fV
,gP,bh){var my=[];var mb=[];var f=ao?ao.Data:null;var dj=fV+3;var aO=0;var cX=gP-
fV-1;var aq=0;var u=0;if(!f)return bh;if(cX>65535)return bh;while(aO<cX){var oy=
f[(dj+aO)*4+1];var ox=f[(dj+cX)*4+1];if((oy>aq)&&(ox>aq)&&(aq<(125+2))){my.push(
aO);mb.push(cX);aq++;}if(oy<=aq)aO++;if(ox<=aq)cX--;}while((u<aq)&&(bh>=my[u])&&(
bh<=mb[u])){var rw=my[u];var rv=mb[u];var d5=bh;var ep=bh;while((d5>rw)&&(f[(dj+
d5-1)*4+1]>u))d5--;while((ep<rv)&&(f[(dj+ep+1)*4+1]>u))ep++;bh=ep-(bh-d5);u++;}return bh;
};d.sO=function(ao,rt,rg){var f=ao?ao.Data:null;var bo=ao?ao.fh:0;var u=0;while(
u<bo){rt[u]=f[u*4+12];rg[u]=f[u*4+13];u++;}};d.s4=function(aa,ai,ag,nF,nG,a$,bg,
aA){var a=this.bm;var af=null;var fs=nF[0];var ft=nF[1];var hT=nG[0];var hU=nG[1
];var a5=hT;var a8=hU;var ds=hT-fs;var hY=hU-ft;var l,j,t,q;if(aa&&(ai>=0)&&(ai<
aa.NoOfFrames)){ai=aa.bO?aa.bO[ai]:ai;af=aa.b6[ai];}if(!af||(af.aM.Format!==this.
ci)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(Math.abs(hT-fs)>Math.abs(hU-ft)){if(a5>fs)a5--;if(a5<fs)a5++;}else{
if(a8>ft)a8--;if(a8<ft)a8++;}l=Math.max(ag[0],Math.min(fs,a5),0);j=Math.max(ag[1
],Math.min(ft,a8),0);t=Math.min(ag[2],Math.max(fs,a5)+1,aa.FrameSize[0]);q=Math.
min(ag[3],Math.max(ft,a8)+1,aa.FrameSize[1]);if((t<=l)||(q<=j))return;var cV=af.
aP[0];var cW=af.aP[1];var b=a.hd;var aL=a.ih;var ae=2;b[0]=fs+cV+0.5;b[1]=ft+cW+
0.5;b[6]=hT+cV+0.5;b[7]=hU+cW+0.5;aL[5]=a$;aL[11]=bg;if(ds>0)t+=0.5;if(ds<0)l-=0.5;
if(hY>0)q+=0.5;if(hY<0)j-=0.5;if((fs<l)||(fs>t)||(ft<j)||(ft>q)||(hT<l)||(hT>t)||(
hU<j)||(hU>q)){ae=jy(b,aL,ae,true,l+cV);ae=jy(b,aL,ae,true,t+cV);ae=mT(b,ae,l+cV
,t+cV);ae=jx(b,aL,ae,true,j+cW);ae=jx(b,aL,ae,true,q+cW);ae=mS(b,ae,j+cW,q+cW);if(
ae!==2)return;}dK(a,af.aM,a.hm);if(a.b_&&!aA)a.disable(a.BLEND);if(!a.b_&&aA)a.enable(
a.BLEND);a.b_=aA;a.bufferSubData(a.ARRAY_BUFFER,0,a.cD);a.drawArrays(a.LINES,0,ae
);if(this.a_)eB(a);};d.hs=function(aa,ai,ag,v,av,as,ar,au,aA){var a=this.bm;var af=
null;var l,j,t,q;if(aa&&(ai>=0)&&(ai<aa.NoOfFrames)){ai=aa.bO?aa.bO[ai]:ai;af=aa.
b6[ai];}if(!af||(af.aM.Format!==this.ci)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}l=Math.max(ag[0],v[0],0);j=Math.max(ag[1],v[1],0);t=Math.min(ag[2],v[2
],aa.FrameSize[0]);q=Math.min(ag[3],v[3],aa.FrameSize[1]);var clear=!av&&!as&&!au&&
!ar;if((t<=l)||(q<=j)||(clear&&aA))return;if(clear){var b=a.hd;b[0]=b[12]=l+af.aP[
0];b[1]=b[7]=j+af.aP[1];b[6]=b[18]=t+af.aP[0];b[19]=b[13]=q+af.aP[1];if(a.b_&&!aA
)a.disable(a.BLEND);if(!a.b_&&aA)a.enable(a.BLEND);a.b_=aA;dK(a,af.aM,clear?a.il:
a.hm);a.bufferSubData(a.ARRAY_BUFFER,0,a.cD);a.drawArrays(a.TRIANGLE_STRIP,0,4);
if(this.a_)eB(a);return;}var gp=(av!==au)||(as!==ar);var gd=(av!==as)||(au!==ar);
var eN=gp||gd;var sC=gp&&((j!==v[1])||(q!==v[3]));var sd=gd&&((l!==v[0])||(t!==v[
2]));if(sC){var bM=1/(v[3]-v[1]);var bp=(j-v[1])*bM;var a3=(v[3]-q)*bM;if(av!==au
){var c9=av;if(bp)av=aU(c9,au,bp);if(a3)au=aU(au,c9,a3);}if(as!==ar){var f7=as;if(
bp)as=aU(f7,ar,bp);if(a3)ar=aU(ar,f7,a3);}}if(sd){var bM=1/(v[2]-v[0]);var cn=(l-
v[0])*bM;var az=(v[2]-t)*bM;if(av!==as){var c9=av;if(cn)av=aU(c9,as,cn);if(az)as=
aU(as,c9,az);}if(au!==ar){var f2=au;if(cn)au=aU(f2,ar,cn);if(az)ar=aU(ar,f2,az);
}}var b=a.hd;var aL=a.ih;b[0]=b[12]=l+af.aP[0];b[1]=b[7]=j+af.aP[1];b[6]=b[18]=t+
af.aP[0];b[19]=b[13]=q+af.aP[1];aL[5]=av;aL[11]=as;aL[23]=ar;aL[17]=au;if(a.b_&&
!aA)a.disable(a.BLEND);if(!a.b_&&aA)a.enable(a.BLEND);a.b_=aA;dK(a,af.aM,clear?a.
il:a.hm);a.bufferSubData(a.ARRAY_BUFFER,0,a.cD);a.drawArrays(a.TRIANGLE_STRIP,0,
4);if(this.a_)eB(a);};d.s3=function(aa,ai,ag,v,fk,av,as,ar,au,aA){if(fk<=0)return;
if(((fk*2)>=(v[2]-v[0]))||((fk*2)>=(v[3]-v[1]))){this.hs(aa,ai,ag,v,av,as,ar,au,
aA);return;}var cA=[0,0,0,0];var f1;cA[0]=v[0];cA[1]=v[1];cA[2]=v[2];cA[3]=v[1]+
fk;f1=this.it(ag,cA);this.hs(aa,ai,f1,v,av,as,ar,au,aA);cA[0]=v[0];cA[1]=v[3]-fk;
cA[2]=v[2];cA[3]=v[3];f1=this.it(ag,cA);this.hs(aa,ai,f1,v,av,as,ar,au,aA);cA[0]=
v[0];cA[1]=v[1]+fk;cA[2]=v[0]+fk;cA[3]=v[3]-fk;f1=this.it(ag,cA);this.hs(aa,ai,f1
,v,av,as,ar,au,aA);cA[0]=v[2]-fk;cA[2]=v[2];f1=this.it(ag,cA);this.hs(aa,ai,f1,v
,av,as,ar,au,aA);};d.nn=function(lU){if(lU<1)return null;return{ij:lU,p$:0,p_:0,
aF:0,bV:true,bG:[0,0,0,0],dV:[1.0,0.0,0.0,0.0,1.0,0.0],le:[],b7:new Array(lU)};};
function jI(k,i){var an=k.charCodeAt(i);while((an===0x20)||(an===0x09)||(an===0x0A
)||(an===0x0D)||(an===0x2C)||(an===0x0C))an=k.charCodeAt(++i);return i;}function
bl(cK,at,dC){var d9=cK[0];var aO=jI(d9,cK[1]);var s=aO;var e7=0.0;var exp=0.1;var
ae=0;var jd=1;var an=d9.charCodeAt(s);if((an===0x2B)||(an===0x2D)){jd=(an===0x2D
)?-1:1;an=d9.charCodeAt(++s);}while((an>=0x30)&&(an<=0x39)){e7=e7*10+(an-0x30);an=
d9.charCodeAt(++s);ae++;}if(an===0x2E)an=d9.charCodeAt(++s);while((an>=0x30)&&(an<=
0x39)){e7+=exp*(an-0x30);exp*=0.1;an=d9.charCodeAt(++s);ae++;}if(!ae){cK[1]=aO;return false;
}if((an===0x65)||(an===0x45)){var oC=1;var kA=0.0;var oB=0;an=d9.charCodeAt(++s);
if((an===0x2B)||(an===0x2D)){oC=(an===0x2D)?-1:1;an=d9.charCodeAt(++s);}while((an>=
0x30)&&(an<=0x39)){kA=kA*10+(an-0x30);an=d9.charCodeAt(++s);oB++;}if(!oB){cK[1]=
aO;return false;}e7=e7*Math.pow(10.0,(oC<0)?-kA:kA);}cK[1]=s;at[dC]=(jd<0)?-e7:e7;
return true;}function nb(cK,at,dC){var d9=cK[0];var aO=jI(d9,cK[1]);var s=aO;var
an=d9.charCodeAt(s);if((an===0x30)||(an==0x31)){at[dC]=(an===0x31);an=d9.charCodeAt(++
s);}cK[1]=s;return s>aO;}function fc(n,a4,bi){var p=n.b7[a4];var sq=p.fb-p.aF;if(
sq>=bi)return a4;var mo=(a4+1)%2;this.is(n,mo,p.aF+bi+256);this.jM(n,mo,n,a4,0,aN
);return mo;}d.sW=function(cK,hJ,iQ,iE,hB,iB){var pl=[cK,jI(cK,0)];var s=[cK,pl[
1]];var on=0;var i$=(Math.abs(hJ)+Math.abs(iQ))/16;var kQ=false;var ae=0;var iX=
0.0;var aZ=0.0;var a0=0.0;var m=[0.0,0.0,0.0,0.0];var y=[0.0,0.0,0.0,0.0];var iX=[
0.0];var cB=[false,false,false];var an=cK.charCodeAt(s[1]);var aN;function eU(nY
,j9,j8,nZ){return Math.sqrt((nY-j8)*(nY-j8)+(j9-nZ)*(j9-nZ));}this.hy=this.q2;this.
iy=-1;if(!an){this.hy=this.q0;return null;}if((an!==0x6D)&&(an!==0x4D)){this.hy=
this.nx;this.iy=s[1];return null;}for(;an;an=cK.charCodeAt(++s[1])){an=((an>=0x61
)&&(an<=0x7A))?an-0x20:an;if(an===0x4D){kQ=false;ae++;}else if(an===0x5A)kQ=true;
else if(kQ&&((an===0x4C)||(an===0x48)||(an===0x56)||(an===0x43)||(an===0x53)||(an===
0x51)||(an===0x54)||(an===0x41))){ae++;kQ=false;}}var d8=this.nn(ae);var bk=this.
nn(2);var bb=0;if((iE!==0.0)||(hB!==0.0)||(hJ!==1.0)||(hB!==1.0)||(iB!==0.0)){this.
nA(d8,iE,hB);this.nw(d8,iB);this.q3(d8,hJ,iQ);}this.is(bk,0,256);for(ae=0,s[1]=pl[
1];cK.charCodeAt(s[1]);ae++){var eQ=0;var bs=0;var om=0;this.ng(bk,bb,aZ,a0);for(;
cK.charCodeAt(s[1]);om++){eQ=bs;bs=cK.charCodeAt(s[1]);if(om&&((bs===0x6D)||(bs===
0x4D)))break;s[1]++;if((bs===0x6D)||(bs===0x4D)){if(!bl(s,m,1)||!bl(s,y,1))return c1(
this);if(bs===0x4D){aZ=m[1];a0=y[1];}else{aZ+=m[1];a0+=y[1];}this.ng(bk,bb,aZ,a0
);while(bl(s,m,1)){if(!bl(s,y,1))return c1(this);bb=fc(bk,bb,1);if(bs===0x4D){aZ=
m[1];a0=y[1];}else{aZ+=m[1];a0+=y[1];}this.jN(bk,bb,aZ,a0);}}else if((bs===0x6C)||(
bs===0x4C)){if(!bl(s,m,1))return c1(this);do{if(!bl(s,y,1))return c1(this);bb=fc(
bk,bb,1);if(bs===0x4C){aZ=m[1];a0=y[1];}else{aZ+=m[1];a0+=y[1];}this.jN(bk,bb,aZ
,a0);}while(bl(s,m,1));}else if((bs===0x68)||(bs===0x48)){if(!bl(s,m,1))return c1(
this);do{bb=fc(bk,bb,1);if(bs===0x48)aZ=m[1];else aZ+=m[1];this.jN(bk,bb,aZ,a0);
}while(bl(s,m,1));}else if((bs===0x76)||(bs===0x56)){if(!bl(s,y,1))return c1(this
);do{bb=fc(bk,bb,1);if(bs===0x56)a0=y[1];else a0+=y[1];this.jN(bk,bb,aZ,a0);}while(
bl(s,y,1));}else if((bs===0x63)||(bs==0x43)){if(!bl(s,m,1))return c1(this);do{if(
!bl(s,y,1)||!bl(s,m,2)||!bl(s,y,2)||!bl(s,m,3)||!bl(s,y,3))return c1(this);if(bs===
0x63)m[1]+=aZ,y[1]+=a0,m[2]+=aZ,y[2]+=a0,m[3]+=aZ,y[3]+=a0;aN=((eU(m[1],y[1],aZ,
a0)+eU(m[2],y[2],m[1],y[1])+eU(m[3],y[3],m[2],y[2]))*i$)|0;if(aN<8)aN+=2;bb=fc(bk
,bb,aN+1);this.ne(bk,bb,m[1],y[1],m[2],y[2],m[3],y[3],aN+1);aZ=m[3];a0=y[3];}while(
bl(s,m,1));}else if((bs===0x73)||(bs===0x53)){m[1]=m[2];y[1]=y[2];if(!bl(s,m,2))
return c1(this);do{if(!bl(s,y,2)||!bl(s,m,3)||!bl(s,y,3))return c1(this);if(bs===
0x73)m[2]+=aZ,y[2]+=a0,m[3]+=aZ,y[3]+=a0;if((eQ===0x43)||(eQ===0x63)||(eQ===0x53
)||(eQ===0x73)){m[1]=aZ-(m[1]-aZ);y[1]=a0-(y[1]-a0);}else m[1]=aZ,y[1]=a0;aN=((eU(
m[1],y[1],aZ,a0)+eU(m[2],y[2],m[1],y[1])+eU(m[3],y[3],m[2],y[2]))*i$)|0;if(aN<8)
aN+=2;bb=fc(bk,bb,aN+1);this.ne(bk,bb,m[1],y[1],m[2],y[2],m[3],y[3],aN+1);aZ=m[3
];a0=y[3];l=m[2];j=y[2];eQ=bs;}while(bl(s,m,2));}else if((bs===0x71)||(bs===0x51
)){if(!bl(s,m,1))return c1(this);do{if(!bl(s,y,1)||!bl(s,m,2)||!bl(s,y,2))return c1(
this);if(bs===0x71)m[1]+=aZ,y[1]+=a0,m[2]+=aZ,y[2]+=a0;aN=((eU(m[1],y[1],aZ,a0)+
eU(m[2],y[2],m[1],y[1]))*i$)|0;if(aN<8)aN+=2;bb=fc(bk,bb,aN+1);this.nd(bk,bb,m[1
],y[1],m[2],y[2],aN+1);aZ=m[2];a0=y[2];}while(bl(s,m,1));}else if((bs===0x74)||(
bs===0x54)){if(!bl(s,m,2))return c1(this);do{if(!bl(s,y,2))return c1(this);if(bs===
0x74)m[2]+=aZ,y[2]+=a0;if((eQ===0x51)||(eQ===0x71)||(eQ===0x54)||(eQ===0x74)){m[
1]=aZ-(m[1]-aZ);y[1]=a0-(y[1]-a0);}else m[1]=aZ,y[1]=a0;aN=((eU(m[1],y[1],aZ,a0)+
eU(m[2],y[2],m[1],y[1]))*i$)|0;if(aN<8)aN+=2;bb=fc(bk,bb,aN+1);this.nd(bk,bb,m[1
],y[1],m[2],y[2],aN+1);aZ=m[2];a0=y[2];eQ=bs;}while(bl(s,m,2));}else if((bs===0x61
)||(bs===0x41)){on=s[1]-1;if(!bl(s,m,0))return c1(this);do{m[1]=aZ;y[1]=a0;if(!bl(
s,y,0)||!bl(s,iX,0)||!nb(s,cB,1)||!nb(s,cB,2)||!bl(s,m,2)||!bl(s,y,2))return c1(
this);if(bs===0x61)m[2]+=aZ,y[2]+=a0;if((m[0]<=0)||(y[0]<=0))return jH(this);var
kV=Math.sin(iX[0]*this.iq);var kg=Math.cos(iX[0]*this.iq);var oH=(m[1]-m[2])/2;var
oI=(y[1]-y[2])/2;var se=(m[1]+m[2])/2;var sf=(y[1]+y[2])/2;var jr=kg*oH+kV*oI;var
js=kg*oI-kV*oH;var mi=(jr*jr)/(m[0]*m[0])+(js*js)/(y[0]*y[0]);if(mi>1){m[0]=m[0]
*Math.sqrt(mi);y[0]=y[0]*Math.sqrt(mi);}var pf=m[0]*y[0];var mv=m[0]*js;var mw=y[
0]*jr;var mz=mv*mv+mw*mw;if(mz===0.0)return jH(this);var abs=(pf*pf-mz)/mz;if(abs<
0.0)abs=-abs;var kp=Math.sqrt(abs);if(cB[1]===cB[2])kp=-kp;var kw=kp*mv/y[0];var
kx=-kp*mw/m[0];var rW=kg*kw-kV*kx+se;var rZ=kV*kw+kg*kx+sf;var he=(jr-kw)/m[0];var
k2=(jr+kw)/m[0];var hf=(js-kx)/y[0];var k3=(js+kx)/y[0];var e=he*he+hf*hf;if(e===
0.0)return jH(this);var kY=Math.acos(he/Math.sqrt(e))*this.ns;if(hf<0.0)kY=-kY;e=(
he*he+hf*hf)*(k2*k2+k3*k3);if(e===0.0)return jH(this);var dk=Math.acos((he*-k2+hf
*-k3)/Math.sqrt(e))*this.ns;if((he*-k3-hf*-k2)<0)dk=-dk;while(dk>360){dk=dk-360;
}while(dk<-360){dk=dk+360;}if(!cB[2]&&(dk>0))dk=dk-360;if(cB[2]&&(dk<0))dk=dk+360;
aN=((m[0]+y[0])*dk*(3.14/360)*i$)|0;if(aN<0)aN=-aN;if(aN<8)aN+=2;bb=fc(bk,bb,aN+
1);this.qZ(bk);this.nA(bk,rW,rZ);this.nw(bk,iX);this.qv(bk,bb,0,0,m[0],y[0],kY,kY+
dk,aN+1);this.qX(bk);aZ=m[2];a0=y[2];}while(bl(s,m,0));}else if((bs===0x5A)||(bs==
0x7A)){s[1]=jI(cK,s[1]);this.nl(bk,bb);aZ=this.qC(bk,bb,0);a0=this.qD(bk,bb,0);break;
}else{s[1]--;return c1(this);}}aN=this.lo(bk,bb);this.is(d8,ae,aN);this.jM(d8,ae
,bk,bb,0,aN);if(this.qI(bk,bb))this.nl(d8,ae);}this.ln(bk);return d8;function c1(
aj){aN=aj.lo(bk,bb);aj.is(d8,ae,aN);aj.jM(d8,ae,bk,bb,0,aN);aj.hy=aj.nx;aj.iy=s[
1];aj.ln(bk);return d8;}function jH(aj){aN=aj.lo(bk,bb);aj.is(d8,ae,aN);aj.jM(d8
,ae,bk,bb,0,aN);aj.hy=aj.q1;aj.iy=on;aj.ln(bk);return d8;}};d.tx=function(){return this.
hy;};d.tw=function(){return this.iy;};d.ln=function(n){if(n){delete n.b7;delete n.
le;}};d.th=function(n){if(!n)return 0;return n.ij;};d.is=function(n,a4,iG){if(!n||(
a4>=n.ij)||(a4<0))return false;if(iG<=0)iG=0;var p=null;if(iG)p={fb:iG,aF:0,fd:false
,ef:false,cO:false,bV:true,bG:[0,0,0,0],Data:new Float32Array((iG+1)*8)};if(n.b7[
a4])n.bV=false;n.b7[a4]=p;return true;};d.ng=function(n,a4,aY,bj){var p=n?n.b7[a4
]:null;if(!p)return;var r=n.dV;var m=aY;var y=bj;if((r[0]!==1)||(r[1]!==0)||(r[2
]!==0)||(r[3]!==0)||(r[4]!==1)||(r[5]!==0)){m=aY*r[0]+bj*r[1]+r[2];y=aY*r[3]+bj*
r[4]+r[5];}p.cO=false;p.ef=false;p.bV=false;p.aF=0;p.fd=true;p.Data[0]=m;p.Data[
1]=y;n.bV=false;};d.jN=function(n,a4,aY,bj){var p=n?n.b7[a4]:null;if(!p||p.cO||((
p.aF+1)>p.fb))return 0;var r=n.dV;var aH=p.Data;var bC=p.aF*2+2;var m=aY;var y=bj;
p.fd=true;p.ef=true;p.bV=false;n.bV=false;if((r[0]!==1)||(r[1]!==0)||(r[2]!==0)||(
r[3]!==0)||(r[4]!==1)||(r[5]!==0)){m=aY*r[0]+bj*r[1]+r[2];y=aY*r[3]+bj*r[4]+r[5];
}aH[bC]=m;aH[bC+1]=y;return p.aF++;};d.nd=function(n,a4,lK,lL,aY,bj,bi){var p=n?
n.b7[a4]:null;if((bi<=0)||!p||p.cO||((p.aF+bi)>p.fb))return 0;var r=n.dV;var aH=
p.Data;var bC=p.aF*2;var aZ=lK;var a0=lL;var m=aY;var y=bj;var dR=1/bi;var bp;var
g;p.fd=true;p.ef=true;p.bV=false;n.bV=false;if((r[0]!==1)||(r[1]!==0)||(r[2]!==0
)||(r[3]!==0)||(r[4]!==1)||(r[5]!==0)){aZ=lK*r[0]+lL*r[1]+r[2];a0=lK*r[3]+lL*r[4
]+r[5];m=aY*r[0]+bj*r[1]+r[2];y=aY*r[3]+bj*r[4]+r[5];}var mK=aH[bC++];var mL=aH[
bC++];for(bp=dR,g=1;g<bi;g++,bp+=dR){var gi=1-bp;var i8=gi*gi;var bF=bp*bp;var i6=
2*gi*bp;aH[bC++]=i8*mK+i6*aZ+bF*m;aH[bC++]=i8*mL+i6*a0+bF*y;}aH[bC++]=m;aH[bC++]=
y;return(p.aF+=g)-g;};d.ne=function(n,a4,lG,lH,lI,lJ,aY,bj,bi){var p=n?n.b7[a4]:
null;if((bi<=0)||!p||p.cO||((p.aF+bi)>p.fb))return 0;var r=n.dV;var aH=p.Data;var
bC=p.aF*2;var os=lG;var ot=lH;var ou=lI;var ov=lJ;var m=aY;var y=bj;var dR=1/bi;
var bp;var g;p.fd=true;p.ef=true;p.bV=false;n.bV=false;if((r[0]!==1)||(r[1]!==0)||(
r[2]!==0)||(r[3]!==0)||(r[4]!==1)||(r[5]!==0)){os=lG*r[0]+lH*r[1]+r[2];ot=lG*r[3
]+lH*r[4]+r[5];ou=lI*r[0]+lJ*r[1]+r[2];ov=lI*r[3]+lJ*r[4]+r[5];m=aY*r[0]+bj*r[1]+
r[2];y=aY*r[3]+bj*r[4]+r[5];}var mK=aH[bC++];var mL=aH[bC++];for(bp=dR,g=1;g<bi;
g++,bp+=dR){var gi=1-bp;var bF=bp*bp;var i8=gi*gi;var oE=gi*i8;var i6=3*i8*bp;var
oF=3*gi*bF;var oG=bp*bF;aH[bC++]=oE*mK+i6*os+oF*ou+oG*m;aH[bC++]=oE*mL+i6*ot+oF*
ov+oG*y;}aH[bC++]=m;aH[bC++]=y;return(p.aF+=g)-g;};d.qv=function(n,a4,q9,q_,rk,rl
,iT,jZ,bi){var p=n?n.b7[a4]:null;var aN=bi;if(p&&p.fd)aN++;if((bi<=0)||(iT===jZ)||
!p||p.cO||((p.aF+aN)>p.fb))return 0;iT*=this.iq;jZ*=this.iq;var r=n.dV;var aH=p.
Data;var bC=p.aF*2+(aN-bi)*2;var dR=(jZ-iT)/bi;var g;p.fd=true;p.ef=true;p.bV=false;
n.bV=false;var r3=(r[0]!==1)||(r[1]!==0)||(r[2]!==0)||(r[3]!==0)||(r[4]!==1)||(r[
5]!==0);for(g=0;g<=bi;g++,iT+=dR){var bW=(g===bi)?jZ:iT;var m=q9+rk*Math.cos(bW);
var y=q_+rl*Math.sin(bW);if(r3){aH[bC++]=m*r[0]+y*r[1]+r[2];aH[bC++]=m*r[3]+y*r[
4]+r[5];}else{aH[bC++]=m;aH[bC++]=y;}}return(p.aF+=aN)-bi;};d.jM=function(n,a4,nS
,rq,j7,bi){var eI=n?n.b7[a4]:null;var kX=nS?nS.b7[rq]:null;var aN=bi;if(!bi||!eI||
!kX||(j7<0))return 0;if(bi<0)aN=bi=kX.aF-j7;if((j7+aN)>kX.aF)return 0;if(eI.fd)aN++;
if(((eI.aF+aN)>eI.fb)||eI.cO)return 0;eI.fd=true;eI.ef=true;eI.bV=false;n.bV=false;
var r=n.dV;var aH=eI.Data;var dR=kX.Data;var bC=eI.aF*2+(aN-bi)*2;var az=j7*2;var
g=0;if((r[0]!==1)||(r[1]!==0)||(r[2]!==0)||(r[3]!==0)||(r[4]!==1)||(r[5]!==0))for(;
g<=bi;g++,az+=2){aH[bC++]=dR[az]*r[0]+dR[az+1]*r[1]+r[2];aH[bC++]=dR[az]*r[3]+dR[
az+1]*r[4]+r[5];}else for(;g<=bi;g++){aH[bC++]=dR[az++];aH[bC++]=dR[az++];}return(
eI.aF+=aN)-bi;};d.nl=function(n,a4){var p=n?n.b7[a4]:null;if(!p||p.cO||!p.ef)return;
p.ef=false;p.cO=true;n.bV=false;var aH=p.Data;var cV=aH[p.aF*2+0]-aH[0];var cW=aH[
p.aF*2+1]-aH[1];if((cV>0.001)||(cV<-0.001)||(cW>0.001)||(cW<-0.001)){p.aF++;aH[p.
aF*2+0]=aH[0];aH[p.aF*2+1]=aH[1];}else{aH[p.aF*2+0]=aH[0];aH[p.aF*2+1]=aH[1];}};
d.ut=function(n,a4,gL,nV,nW){var p=n?n.b7[a4]:null;if(!p||p.cO||!p.ef)return 0;if(
gL<=0)return 0;if(gL>p.aF)gL=p.aF;p.Data.copyWithin(0,gL*2);if((nV!==0.0)||(nW!==
0.0)){var aH=p.Data;var g;for(g=0;g<aH.length;g+=2){aH[g]+=nV;aH[g+1]+=nW;}}p.ef=
gL<p.aF;p.aF=p.aF-gL;p.bV=false;n.bV=false;return gL;};d.us=function(n,a4,dN,aY,
bj){var p=n?n.b7[a4]:null;if(!p||(dN>p.aF)||(dN<0))return;var r=n.dV;var aH=p.Data;
var m=aY;var y=bj;if((r[0]!==1)||(r[1]!==0)||(r[2]!==0)||(r[3]!==0)||(r[4]!==1)||(
r[5]!==0)){m=aY*r[0]+bj*r[1]+r[2];y=aY*r[3]+bj*r[4]+r[5];}aH[dN*2+0]=m;aH[dN*2+1
]=y;if(!dN&&p.cO){aH[p.aF*2+0]=m;aH[p.aF*2+1]=y;}if((dN===p.aF)&&p.cO){aH[0]=m;aH[
1]=y;}p.bV=false;n.bV=false;};d.qC=function(n,a4,dN){var p=n?n.b7[a4]:null;if(!p||(
dN>p.aF)||(dN<0))return 0.0;return p.Data[dN*2+0];};d.qD=function(n,a4,dN){var p=
n?n.b7[a4]:null;if(!p||(dN>p.aF)||(dN<0))return 0.0;return p.Data[dN*2+1];};d.ui=
function(n,a4,bi){var p=n?n.b7[a4]:null;if(!p||p.cO)return 0;if(bi<0)bi=0;if(bi>
p.fb)bi=p.fb;kz=bi-p.aF;if(!kz)return 0;if(kz>0){var aH=p.Data;var bC=p.aF*2+2;var
g;for(g=0;g<kz;g++){aH[bC++]=0;aH[bC++]=0;}}p.aF=bi;p.fd=bi>0;p.ef=bi>0;p.bV=false;
n.bV=false;return kz;};d.lo=function(n,a4){var p=n?n.b7[a4]:null;return p?p.aF:0;
};d.tk=function(n,a4){var p=n?n.b7[a4]:null;if(!p||p.cO)return 0;return p.fb-p.aF;
};d.qI=function(n,a4){var p=n?n.b7[a4]:null;return p?p.cO:false;};d.ty=function(
n,a4){var p=n?n.b7[a4]:null;this.hA(n);return p?p.bG:[0,0,0,0];};d.tl=function(n
){this.hA(n);return n?n.bG:[0,0,0,0];};d.nA=function(n,iE,hB){if(!n)return;var r=
n.dV;r[2]=r[2]+(r[0]*iE)+(r[1]*hB);r[5]=r[5]+(r[3]*iE)+(r[4]*hB);};d.q3=function(
n,hJ,iQ){if(!n)return;var r=n.dV;r[0]*=hJ;r[1]*=iQ;r[3]*=hJ;r[4]*=iQ;};d.nw=function(
n,iB){if(!n)return;var r=n.dV;var sin=Math.sin(iB*=this.iq);var cos=Math.cos(iB);
var oX,oY,oZ,o0;oX=(r[0]*cos)+(r[1]*sin);oY=(r[0]*-sin)+(r[1]*cos);oZ=(r[3]*cos)+(
r[4]*sin);o0=(r[3]*-sin)+(r[4]*cos);r[0]=oX;r[1]=oY;r[3]=oZ;r[4]=o0;};d.qZ=function(
n){if(!n)return;var r=n.dV;n.le.push([r[0],r[1],r[2],r[3],r[4],r[5]]);};d.qX=function(
n){if(!n)return;var r=n.dV;var g5=n.le.pop();if(g5){r[0]=g5[0];r[1]=g5[1];r[2]=g5[
2];r[3]=g5[3];r[4]=g5[4];r[5]=g5[5];}else{r[0]=1;r[1]=0;r[2]=0;r[3]=0;r[4]=1;r[5
]=0;}};d.tE=function(n){if(!n)return;var r=n.dV;r[0]=1;r[1]=0;r[2]=0;r[3]=0;r[4]=
1;r[5]=0;};d.hA=function(n){if(!n||n.bV)return;var ib=n.b7;var h4=n.ij;var l2=[0
,0,0,0];var o4=0;var o1=0;var aN=0;var g;for(g=0;g<h4;g++){var p=ib[g];if(p&&!p.
bV&&p.aF){var aH=p.Data;var bC=2;var l=aH[0];var j=aH[1];var t=l;var q=j;var ae=
p.aF;for(;ae>0;ae--,bC+=2){var m=aH[bC];var y=aH[bC+1];if(m<l)l=m;if(m>t)t=m;if(
y<j)j=y;if(y>q)q=y;}p.bG=[l|0,j|0,(t+1)|0,(q+1)|0];p.bV=true;}if(p&&p.bV){o4+=p.
ef?1:0;o1+=p.cO?1:0;aN+=p.aF;l2=this.q5(l2,p.bG);}}n.p$=o4;n.p_=o1;n.aF=aN;n.bG=
l2;n.bV=true;};d.qA=function(br,n,dY,ak,iC,lW){var a1=ak[0];var aJ=ak[1];var l,j
,t,q;if((br[0]<=0)||(br[1]<=0)||!n)return null;this.hA(n);if(!dY){j=aJ+n.bG[1]-1;
q=aJ+n.bG[3]+1;}else{aJ+=br[1];j=aJ-n.bG[3]-1;q=aJ-n.bG[1]+1;}l=a1+n.bG[0]-1;t=a1+
n.bG[2]+1;l=Math.max(l,0);j=Math.max(j,0);t=Math.min(t,br[0]);q=Math.min(q,br[1]
);if((t<=l)||(q<=j)||!n.aF)return null;var a=this.bm;var aI=document.createElement(
"canvas");var es=a.createTexture();var ax={};var cu={aM:ax,aP:[0,0]};var bitmap={
FrameSize:br,FrameDelay:0,NoOfFrames:1,cI:[ax],b6:[cu]};aI.width=br[0];aI.height=
br[1];var aW=aI.getContext("2d");var ib=n.b7;var h4=n.ij;var g;aW.translate(a1,aJ
);aW.scale(1,dY?-1:1);aW.beginPath();for(g=0;g<h4;g++){var p=ib[g];if(p&&p.aF){var
f=p.Data;var mq=p.aF*2+2;var cc;aW.moveTo(f[0],f[1]);for(cc=2;cc<mq;cc+=2)aW.lineTo(
f[cc],f[cc+1]);if(p.cO)aW.closePath();}}aW.fill(lW?"nonzero":"evenodd");a.fH=null;
a.bindTexture(a.TEXTURE_2D,es);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER
,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.NEAREST);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T
,a.CLAMP_TO_EDGE);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,aI);
ax.Format=d.ly;ax.Width=br[0];ax.Height=br[1];ax.io=br[0];ax.im=br[1];ax.ee=1/br[
0];ax.ed=1/br[1];ax.eW=2/br[0];ax.eV=2/br[1];ax.cP=es;ax.Framebuffer=null;return bitmap;
};d.qB=function(br,n,dY,ak,aE,fW,gJ,iC){var dr=fW&0x0000FF;var dq=fW&0x00FF00;var
e$=fW&0xFF0000;var a1=ak[0];var aJ=ak[1];var l,j,t,q;var cv;if((br[0]<=0)||(br[1
]<=0)||!n||(aE<=0))return null;if((dr===this.jV)&&(aE<4))dr=this.lu;if((dq===this.
jU)&&(aE<4))dq=this.ls;if((e$===this.lx)&&(aE<3))e$=this.lv;if(e$===this.lw){if(
gJ>1)cv=(gJ*aE*0.5)|0;else cv=(aE*0.5)|0;}else if((dr===this.ix)||(dq===this.iw)
)cv=(aE*0.75)|0;else cv=(aE+0.5)|0;this.hA(n);if(!dY){j=aJ+n.bG[1]-cv-1;q=aJ+n.bG[
3]+cv+1;}else{aJ+=br[1];j=aJ-n.bG[3]-cv-1;q=aJ-n.bG[1]+cv+1;}l=a1+n.bG[0]-cv-1;t=
a1+n.bG[2]+cv+1;l=Math.max(l,0);j=Math.max(j,0);t=Math.min(t,br[0]);q=Math.min(q
,br[1]);if((t<=l)||(q<=j)||!n.aF)return;var a=this.bm;var aI=document.createElement(
"canvas");var es=a.createTexture();var ax={};var cu={aM:ax,aP:[0,0]};var bitmap={
FrameSize:br,FrameDelay:0,NoOfFrames:1,cI:[ax],b6:[cu]};aI.width=br[0];aI.height=
br[1];var aW=aI.getContext("2d");var ib=n.b7;var h4=n.ij;var g;aW.translate(a1,aJ
);aW.scale(1,dY?-1:1);aW.beginPath();for(g=0;g<h4;g++){var p=ib[g];if(p&&p.aF){var
f=p.Data;var mq=p.aF*2+2;var cc;aW.moveTo(f[0],f[1]);for(cc=2;cc<mq;cc+=2)aW.lineTo(
f[cc],f[cc+1]);if(p.cO)aW.closePath();}}if(aE!==1.0)aW.lineWidth=aE;if(e$===this.
lw)aW.miterLimit=gJ;else if(e$===this.lv)aW.lineJoin="bevel";else if(e$===this.lx
)aW.lineJoin="round";if((dr===this.jV)&&(dq===this.jU)){dr=dq=this.lt;aW.lineCap=
"round";}else if((dr===this.ix)&&(dq===this.iw)){dr=dq=this.lt;aW.lineCap="square";
}aW.stroke();if((dr!==this.lt)||(dq!==this.qW)){aW.beginPath();for(g=0;g<h4;g++){
var p=ib[g];if(p&&p.aF&&!p.cO){var f=p.Data;var h9=0;var h8=p.aF*2+1;var ev=f[h9++
];var ex=f[h9++];var ew=f[h8--];var eu=f[h8--];if((dr===this.ix)||(dr===this.lu)
){var cF,cH;do{cF=f[h9++];cH=f[h9++];}while((cF===ev)&&(cH===ex)&&(h9<h8));cF=ev-
cF;cH=ex-cH;if(cF||cH){var bo=Math.sqrt(cF*cF+cH*cH);var d_,d$;d_=cF/bo;cF=d_*aE
*0.5;d$=cH/bo;cH=d$*aE*0.5;if(dr===this.ix){aW.moveTo(ev+cH-d_,ex-cF-d$);aW.lineTo(
ev-cH-d_,ex+cF-d$);aW.lineTo(ev-cH+cF,ex+cF+cH);aW.lineTo(ev+cH+cF,ex-cF+cH);}else{
aW.moveTo(ev+cH,ex-cF);aW.lineTo(ev+cH-d_,ex-cF-d$);aW.lineTo(ev-cH-d_,ex+cF-d$);
aW.lineTo(ev-cH,ex+cF);aW.lineTo(ev+cF,ex+cH);}aW.closePath();}}else if(dr===this.
jV)aW.arc(ev,ex,aE/2,0,2*Math.PI);if((dq===this.iw)||(dq===this.ls)){var cE,cG;do{
cG=f[h8--];cE=f[h8--];}while((cE===eu)&&(cG===ew)&&(h9<h8));cE=eu-cE;cG=ew-cG;if(
cE||cG){var bo=Math.sqrt(cE*cE+cG*cG);var d_,d$;d_=cE/bo;cE=d_*aE*0.5;d$=cG/bo;cG=
d$*aE*0.5;if(dq===this.iw){aW.moveTo(eu+cG-d_,ew-cE-d$);aW.lineTo(eu-cG-d_,ew+cE-
d$);aW.lineTo(eu-cG+cE,ew+cE+cG);aW.lineTo(eu+cG+cE,ew-cE+cG);}else{aW.moveTo(eu+
cG,ew-cE);aW.lineTo(eu+cG-d_,ew-cE-d$);aW.lineTo(eu-cG-d_,ew+cE-d$);aW.lineTo(eu-
cG,ew+cE);aW.lineTo(eu+cE,ew+cG);}aW.closePath();}}else if(dq===this.jU)aW.arc(eu
,ew,aE/2,0,2*Math.PI);}}aW.fill();}a.fH=null;a.bindTexture(a.TEXTURE_2D,es);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER
,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texImage2D(a.TEXTURE_2D,0,a.RGBA
,a.RGBA,a.UNSIGNED_BYTE,aI);ax.Format=d.ly;ax.Width=br[0];ax.Height=br[1];ax.io=
br[0];ax.im=br[1];ax.ee=1/br[0];ax.ed=1/br[1];ax.eW=2/br[0];ax.eV=2/br[1];ax.cP=
es;ax.Framebuffer=null;return bitmap;};d.s5=function(aa,n,ai,ag,v,dY,ak,av,as,ar
,au,aA,iC,lW){var a=this.bm;var af=null;var a1=ak[0];var aJ=ak[1];var l,j,t,q;if(
aa&&(ai>=0)&&(ai<aa.NoOfFrames)){ai=aa.bO?aa.bO[ai]:ai;af=aa.b6[ai];}if(!af||(af.
aM.Format!==this.ci)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!n){if(this.a_)console.log("EmWi error: Invalid path object in the drawing operation."
);return;}this.hA(n);if(!dY){aJ+=v[1];j=aJ+n.bG[1]-1;q=aJ+n.bG[3]+1;}else{aJ+=v[
3];j=aJ-n.bG[3]-1;q=aJ-n.bG[1]+1;}a1+=v[0];l=a1+n.bG[0]-1;t=a1+n.bG[2]+1;l=Math.
max(ag[0],v[0],l,0);j=Math.max(ag[1],v[1],j,0);t=Math.min(ag[2],v[2],t,aa.FrameSize[
0]);q=Math.min(ag[3],v[3],q,aa.FrameSize[1]);a1-=l;if((t<=l)||(q<=j)||!n.aF)return;
if(dY)aJ-=q;else aJ-=j;var bitmap=this.qA([t-l,q-j],n,dY,[a1,aJ],iC,lW);if(bitmap===
null)return;this.fJ(aa,bitmap,ai,0,[l,j,t,q],v,[v[0]-l,v[1]-j],av,as,ar,au,aA);a.
deleteTexture(bitmap.cI[0].cP);};d.uD=function(aa,n,ai,ag,v,dY,ak,aE,fW,gJ,av,as
,ar,au,aA,iC){var dr=fW&0x0000FF;var dq=fW&0x00FF00;var e$=fW&0xFF0000;var a=this.
bm;var af=null;var a1=ak[0];var aJ=ak[1];var l,j,t,q;var cv;if(aa&&(ai>=0)&&(ai<
aa.NoOfFrames)){ai=aa.bO?aa.bO[ai]:ai;af=aa.b6[ai];}if(!af||(af.aM.Format!==this.
ci)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!n){if(this.a_)console.log("EmWi error: Invalid path object in the drawing operation."
);return;}this.hA(n);if((dr===this.jV)&&(aE<4))dr=this.lu;if((dq===this.jU)&&(aE<
4))dq=this.ls;if((e$===this.lx)&&(aE<3))e$=this.lv;if(e$===this.lw){if(gJ>1)cv=(
gJ*aE*0.5)|0;else cv=(aE*0.5)|0;}else if((dr===this.ix)||(dq===this.iw))cv=(aE*0.75
)|0;else cv=(aE+0.5)|0;if(!dY){aJ+=v[1];j=aJ+n.bG[1]-cv-1;q=aJ+n.bG[3]+cv+1;}else{
aJ+=v[3];j=aJ-n.bG[3]-cv-1;q=aJ-n.bG[1]+cv+1;}a1+=v[0];l=a1+n.bG[0]-cv-1;t=a1+n.
bG[2]+cv+1;l=Math.max(ag[0],v[0],l,0);j=Math.max(ag[1],v[1],j,0);t=Math.min(ag[2
],v[2],t,aa.FrameSize[0]);q=Math.min(ag[3],v[3],q,aa.FrameSize[1]);a1-=l;if((t<=
l)||(q<=j)||!n.aF||(aE<=0))return;if(dY)aJ-=q;else aJ-=j;var bitmap=this.qB([t-l
,q-j],n,dY,[a1,aJ],aE,fW,gJ,iC);if(bitmap===null)return;this.fJ(aa,bitmap,ai,0,[
l,j,t,q],v,[v[0]-l,v[1]-j],av,as,ar,au,aA);a.deleteTexture(bitmap.cI[0].cP);};d.
fJ=function(aa,aC,ai,ba,ag,v,dD,av,as,ar,au,aA){var a=this.bm;var af=null;var src=
null;var l=v[0];var j=v[1];var t=v[2];var q=v[3];var er=dD[0];var fa=dD[1];if(aa&&(
ai>=0)&&(ai<aa.NoOfFrames)){ai=aa.bO?aa.bO[ai]:ai;af=aa.b6[ai];}if(aC&&(ba>=0)&&(
ba<aC.NoOfFrames)){ba=aC.bO?aC.bO[ba]:ba;src=aC.b6[ba];}if(aC.fg)return;if(!af||(
af.aM.Format!==this.ci)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){if(this.a_)console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}t=Math.min(t,l+aC.FrameSize[0]-dD[0]);q=Math.min(q,j+aC.FrameSize[1]-dD[
1]);l=Math.max(l,l-dD[0]);j=Math.max(j,j-dD[1]);l=Math.max(ag[0],l,0);j=Math.max(
ag[1],j,0);t=Math.min(ag[2],t,aa.FrameSize[0]);q=Math.min(ag[3],q,aa.FrameSize[1
]);if((t<=l)||(q<=j))return;var gp=(av!==au)||(as!==ar);var gd=(av!==as)||(au!==
ar);var eN=gp||gd;var gW=eN||(((av>>24)&0xFF)<255);er+=l-v[0]+src.aP[0];fa+=j-v[
1]+src.aP[1];var bd=er*src.aM.ee;var a9=fa*src.aM.ed;var bA=(er+t-l)*src.aM.ee;var
by=(fa+q-j)*src.aM.ed;if(gp&&((j!==v[1])||(q!==v[3]))){var bM=1/(v[3]-v[1]);var bp=(
j-v[1])*bM;var a3=(v[3]-q)*bM;if(av!==au){var c9=av;if(bp)av=aU(c9,au,bp);if(a3)
au=aU(au,c9,a3);}if(as!==ar){var f7=as;if(bp)as=aU(f7,ar,bp);if(a3)ar=aU(ar,f7,a3
);}}if(gd&&((l!==v[0])||(t!==v[2]))){var bM=1/(v[2]-v[0]);var cn=(l-v[0])*bM;var
az=(v[2]-t)*bM;if(av!==as){var c9=av;if(cn)av=aU(c9,as,cn);if(az)as=aU(as,c9,az);
}if(au!==ar){var f2=au;if(cn)au=aU(f2,ar,cn);if(az)ar=aU(ar,f2,az);}}var b=a.hd;
var aL=a.ih;b[0]=b[12]=l+af.aP[0];b[1]=b[7]=j+af.aP[1];b[6]=b[18]=t+af.aP[0];b[19
]=b[13]=q+af.aP[1];b[2]=bd;b[3]=a9;b[4]=1;b[8]=bA;b[9]=a9;b[10]=1;b[20]=bA;b[21]=
by;b[22]=1;b[14]=bd;b[15]=by;b[16]=1;aL[5]=av;aL[11]=as;aL[23]=ar;aL[17]=au;if(src.
aM.Format===this.ci)dK(a,af.aM,gW?a.ho:a.hn);else dK(a,af.aM,a.gs);hp(a,src.aM,false
);if(a.b_&&!aA)a.disable(a.BLEND);if(!a.b_&&aA)a.enable(a.BLEND);a.b_=aA;a.bufferSubData(
a.ARRAY_BUFFER,0,a.cD);a.drawArrays(a.TRIANGLE_STRIP,0,4);if(this.a_)eB(a);};d.iz=
function(aa,aC,ai,ba,ag,v,cz,dD,av,as,ar,au,aA){var a=this.bm;var af=null;var src=
null;var l=v[0];var j=v[1];var t=v[2];var q=v[3];var gl=cz[0];var gm=cz[1];var ic=
cz[2];var id=cz[3];if(aa&&(ai>=0)&&(ai<aa.NoOfFrames)){ai=aa.bO?aa.bO[ai]:ai;af=
aa.b6[ai];}if(aC&&(ba>=0)&&(ba<aC.NoOfFrames)){ba=aC.bO?aC.bO[ba]:ba;src=aC.b6[ba
];}if(aC.fg)return;if(!af||(af.aM.Format!==this.ci)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){if(this.a_)console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}gl=Math.max(gl,0);gm=Math.max(gm,0);ic=Math.min(ic,aC.FrameSize[0]);id=
Math.min(id,aC.FrameSize[1]);var jk=ic-gl;var jb=id-gm;l=Math.max(ag[0],l,0);j=Math.
max(ag[1],j,0);t=Math.min(ag[2],t,aa.FrameSize[0]);q=Math.min(ag[3],q,aa.FrameSize[
1]);if((t<=l)||(q<=j)||(jk<=0)||(jb<=0))return;var gp=(av!==au)||(as!==ar);var gd=(
av!==as)||(au!==ar);var eN=gp||gd;var gW=eN||(((av>>24)&0xFF)<255);var kS;if(gp&&((
j!==v[1])||(q!==v[3]))){var bM=1/(v[3]-v[1]);var bp=(j-v[1])*bM;var a3=(v[3]-q)*
bM;if(av!==au){var c9=av;if(bp)av=aU(c9,au,bp);if(a3)au=aU(au,c9,a3);}if(as!==ar
){var f7=as;if(bp)as=aU(f7,ar,bp);if(a3)ar=aU(ar,f7,a3);}}if(gd&&((l!==v[0])||(t
!==v[2]))){var bM=1/(v[2]-v[0]);var cn=(l-v[0])*bM;var az=(v[2]-t)*bM;if(av!==as
){var c9=av;if(cn)av=aU(c9,as,cn);if(az)as=aU(as,c9,az);}if(au!==ar){var f2=au;if(
cn)au=aU(f2,ar,cn);if(az)ar=aU(ar,f2,az);}}var b=a.hd;var aL=a.ih;if(src.aM.Format===
this.ci)dK(a,af.aM,kS=(gW?a.lh:a.lg));else dK(a,af.aM,kS=a.li);hp(a,src.aM,false
);a.uniform2f(kS.qp,jk*src.aM.ee,jb*src.aM.ed);a.uniform2f(kS.qo,(gl+src.aP[0])*
src.aM.ee,(gm+src.aP[1])*src.aM.ed);gl=(dD[0]+l-v[0]+jk)/jk;gm=(dD[1]+j-v[1]+jb)
/jb;ic=gl+((t-l)/jk);id=gm+((q-j)/jb);b[0]=b[12]=l+af.aP[0];b[1]=b[7]=j+af.aP[1];
b[6]=b[18]=t+af.aP[0];b[19]=b[13]=q+af.aP[1];b[2]=gl;b[3]=gm;b[4]=1;b[8]=ic;b[9]=
gm;b[10]=1;b[20]=ic;b[21]=id;b[22]=1;b[14]=gl;b[15]=id;b[16]=1;aL[5]=av;aL[11]=as;
aL[23]=ar;aL[17]=au;if(a.b_&&!aA)a.disable(a.BLEND);if(!a.b_&&aA)a.enable(a.BLEND
);a.b_=aA;a.bufferSubData(a.ARRAY_BUFFER,0,a.cD);a.drawArrays(a.TRIANGLE_STRIP,0
,4);if(this.a_)eB(a);};d.s2=function(aa,aC,ai,ba,ag,v,cz,c3,c4,dh,dg,nE,av,as,ar
,au,aA){var bR=[0,0];var bt=v[0];var bu=v[1];var a5=v[2];var a8=v[3];var bd=cz[0
];var a9=cz[1];var bA=cz[2];var by=cz[3];var bP=a5-bt;var bH=a8-bu;var bT=((bA-bd
)/3)|0;var bD=((by-a9)/3)|0;var gf=(bA-bd-bT*2)|0;var ge=(by-a9-bD*2)|0;var o6=0;
var mr=0;var f5=av;var f6=as;var f3=au;var f4=ar;var hR=av;var hS=as;var hP=au;var
hQ=ar;var kr=av;var kt=as;var kq=au;var ks=ar;if((bP<=0)||(bH<=0)||(gf<=0)||(ge<=
0))return;if(aC&&aC.fg)return;if(c3&&dh&&c4&&dg&&nE&&(bP===(bA-bd))&&(bH===(by-a9
))){this.fJ(aa,aC,ai,ba,ag,v,[bd,a9],av,as,ar,au,aA);return;}if((av!==as)||(ar!==
au)||(as!==au)){if(c3){hR=aU(av,as,bT/bP);hP=aU(au,ar,bT/bP);}if(dh){hS=aU(as,av
,bT/bP);hQ=aU(ar,au,bT/bP);}if(c4){kr=aU(av,au,bD/bH);kt=aU(as,ar,bD/bH);}if(dg){
kq=aU(au,av,bD/bH);ks=aU(ar,as,bD/bH);}if(!c3&&!c4)f5=av;if(c3&&!c4)f5=hR;if(!c3&&
c4)f5=kr;if(!dh&&!c4)f6=as;if(dh&&!c4)f6=hS;if(!dh&&c4)f6=kt;if(!c3&&!dg)f3=au;if(
c3&&!dg)f3=hP;if(!c3&&dg)f3=kq;if(!dh&&!dg)f4=ar;if(dh&&!dg)f4=hQ;if(!dh&&dg)f4=
ks;if(c3&&c4)f5=aU(hR,hP,bD/bH);if(c3&&dg)f3=aU(hP,hR,bD/bH);if(dh&&c4)f6=aU(hS,
hQ,bD/bH);if(dh&&dg)f4=aU(hQ,hS,bD/bH);}if(dh&&!c3)o6=bT-bP;if(dg&&!c4)mr=bD-bH;
bA=bd+bT;by=a9+bD;a5=bt+bT;a8=bu+bD;if(c3&&c4)this.fJ(aa,aC,ai,ba,ag,[bt,bu,a5,a8
],[bd,a9],av,hR,f5,kr,aA);bt+=bP-bT;a5+=bP-bT;bd+=bT+gf;bA+=bT+gf;if(dh&&c4)this.
fJ(aa,aC,ai,ba,ag,[bt,bu,a5,a8],[bd,a9],hS,as,kt,f6,aA);bu+=bH-bD;a8+=bH-bD;a9+=
bD+ge;by+=bD+ge;if(dh&&dg)this.fJ(aa,aC,ai,ba,ag,[bt,bu,a5,a8],[bd,a9],f4,ks,ar,
hQ,aA);bt-=bP-bT;a5-=bP-bT;bd-=bT+gf;bA-=bT+gf;if(c3&&dg)this.fJ(aa,aC,ai,ba,ag,[
bt,bu,a5,a8],[bd,a9],kq,f3,hP,au,aA);bu-=bH-bD;a9-=ge;by-=bD;bR[1]=mr;if(c4)bu+=
bD;if(dg)a8-=bD;if(c3)this.iz(aa,aC,ai,ba,ag,[bt,bu,a5,a8],[bd,a9,bA,by],bR,kr,f5
,f3,kq,aA);bt+=bP-bT;a5+=bP-bT;bd+=bT+gf;bA+=bT+gf;if(dh)this.iz(aa,aC,ai,ba,ag,[
bt,bu,a5,a8],[bd,a9,bA,by],bR,f6,kt,ks,f4,aA);if(c4)bu-=bD;a8=bu+bD;bt-=bP-bT;bd-=
gf;bA-=bT;a9-=bD;by-=ge;bR[0]=o6;bR[1]=0;if(c3)bt+=bT;if(dh)a5-=bT;if(c4)this.iz(
aa,aC,ai,ba,ag,[bt,bu,a5,a8],[bd,a9,bA,by],bR,hR,hS,f6,f5,aA);bu+=bH-bD;a8+=bH-bD;
a9+=bD+ge;by+=bD+ge;if(dg)this.iz(aa,aC,ai,ba,ag,[bt,bu,a5,a8],[bd,a9,bA,by],bR,
f3,f4,hQ,hP,aA);if(c3)bt-=bT;a5=bt+bP;bu-=bH-bD;a9-=ge;by-=bD;bR[1]=mr;if(c3)bt+=
bT;if(c4)bu+=bD;if(dh)a5-=bT;if(dg)a8-=bD;if(nE)this.iz(aa,aC,ai,ba,ag,[bt,bu,a5
,a8],[bd,a9,bA,by],bR,f5,f6,f4,f3,aA);};d.uG=function(aa,aC,ai,ba,ag,gF,gH,c5,gG
,hE,cR,hC,gI,cJ,hD,hF,c6,cz,a$,bg,dA,dB,aA,fP){if((gF===hD)&&(gG===hC)&&(gH===hE
)&&(gI===hF)&&(c5===cR)&&(cR===cJ)&&(cJ===c6))this.qy.apply(this,arguments);else
this.qz.apply(this,arguments);};d.qy=function(aa,aC,ai,ba,ag,gF,gH,c5,gG,hE,cR,hC
,gI,cJ,hD,hF,c6,cz,a$,bg,dA,dB,aA,fP){var a=this.bm;var af=null;var src=null;var
bt=gF;var bu=gH;var a5=gG;var a8=gI;var bd=cz[0];var a9=cz[1];var bA=cz[2];var by=
cz[3];var l=Math.min(bt,a5);var j=Math.min(bu,a8);var t=Math.max(bt,a5);var q=Math.
max(bu,a8);if(aa&&(ai>=0)&&(ai<aa.NoOfFrames)){ai=aa.bO?aa.bO[ai]:ai;af=aa.b6[ai
];}if(aC&&(ba>=0)&&(ba<aC.NoOfFrames)){ba=aC.bO?aC.bO[ba]:ba;src=aC.b6[ba];}if(aC.
fg)return;if(!af||(af.aM.Format!==this.ci)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){if(this.a_)console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}bd=Math.max(bd,0);a9=Math.max(a9,0);bA=Math.min(bA,aC.FrameSize[0]);by=
Math.min(by,aC.FrameSize[1]);l=Math.max(ag[0],l,0);j=Math.max(ag[1],j,0);t=Math.
min(ag[2],t,aa.FrameSize[0]);q=Math.min(ag[3],q,aa.FrameSize[1]);if((t<=l)||(q<=
j))return;if((j>bu)||(q<bu)||(j>a8)||(q<a8)){var bM=1/(a8-bu);var bp,a3;if(bM>0){
bp=(j-bu)*bM;a3=(a8-q)*bM;}else{bp=(q-bu)*bM;a3=(a8-j)*bM;}if(a$!==dB){var l9=a$;
if(bp)a$=aU(a$,dB,bp);if(a3)dB=aU(dB,l9,a3);}if(bg!==dA){var rT=bg;if(bp)bg=aU(bg
,dA,bp);if(a3)dA=aU(dA,rT,a3);}var sx=a9;a9=a9+(by-a9)*bp;by=by+(sx-by)*a3;if(j>
bu)bu=j;else if(q<bu)bu=q;if(j>a8)a8=j;else if(q<a8)a8=q;}if((l>bt)||(t<bt)||(l>
a5)||(t<a5)){var bM=1/(a5-bt);var cn,az;if(bM>0){cn=(l-bt)*bM;az=(a5-t)*bM;}else{
cn=(t-bt)*bM;az=(a5-l)*bM;}if(a$!==bg){var l9=a$;if(cn)a$=aU(a$,bg,cn);if(az)bg=
aU(bg,l9,az);}if(dB!==dA){var rU=dB;if(cn)dB=aU(dB,dA,cn);if(az)dA=aU(dA,rU,az);
}var sw=bd;bd=bd+(bA-bd)*cn;bA=bA+(sw-bA)*az;if(l>bt)bt=l;else if(t<bt)bt=t;if(l>
a5)a5=l;else if(t<a5)a5=t;}bd=(bd+src.aP[0])*src.aM.ee;a9=(a9+src.aP[1])*src.aM.
ed;bA=(bA+src.aP[0])*src.aM.ee;by=(by+src.aP[1])*src.aM.ed;bt+=af.aP[0];a5+=af.aP[
0];bu+=af.aP[1];a8+=af.aP[1];var gW=(((a$&bg&dA&dB)>>24)&0xFF)<255;var b=a.hd;var
aL=a.ih;b[0]=bt;b[6]=a5;b[1]=bu;b[7]=bu;b[2]=bd;b[8]=bA;b[3]=a9;b[9]=a9;b[4]=1;b[
10]=1;aL[5]=a$;aL[11]=bg;b[12]=bt;b[18]=a5;b[13]=a8;b[19]=a8;b[14]=bd;b[20]=bA;b[
15]=by;b[21]=by;b[16]=1;b[22]=1;aL[17]=dB;aL[23]=dA;if(src.aM.Format===this.ci)dK(
a,af.aM,gW?a.ho:a.hn);else dK(a,af.aM,a.gs);hp(a,src.aM,fP);if(a.b_&&!aA)a.disable(
a.BLEND);if(!a.b_&&aA)a.enable(a.BLEND);a.b_=aA;a.bufferSubData(a.ARRAY_BUFFER,0
,a.cD);a.drawArrays(a.TRIANGLE_STRIP,0,4);if(this.a_)eB(a);};d.qz=function(aa,aC
,ai,ba,ag,gF,gH,c5,gG,hE,cR,hC,gI,cJ,hD,hF,c6,cz,a$,bg,dA,dB,aA,fP){var a=this.bm;
var af=null;var src=null;var bt=Math.min(gF,gG,hC,hD);var bu=Math.min(gH,hE,gI,hF
);var a5=Math.max(gF,gG,hC,hD);var a8=Math.max(gH,hE,gI,hF);var bd=cz[0];var a9=
cz[1];var bA=cz[2];var by=cz[3];var l=Math.round(bt);var j=Math.round(bu);var t=
Math.round(a5);var q=Math.round(a8);var rX=l;var r0=j;var rY=t;var r1=q;if(aa&&(
ai>=0)&&(ai<aa.NoOfFrames)){ai=aa.bO?aa.bO[ai]:ai;af=aa.b6[ai];}if(aC&&(ba>=0)&&(
ba<aC.NoOfFrames)){ba=aC.bO?aC.bO[ba]:ba;src=aC.b6[ba];}if(aC.fg)return;if(!af||(
af.aM.Format!==this.ci)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){if(this.a_)console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}bd=Math.max(bd,0);a9=Math.max(a9,0);bA=Math.min(bA,aC.FrameSize[0]);by=
Math.min(by,aC.FrameSize[1]);l=Math.max(ag[0],l,0);j=Math.max(ag[1],j,0);t=Math.
min(ag[2],t,aa.FrameSize[0]);q=Math.min(ag[3],q,aa.FrameSize[1]);if((t<=l)||(q<=
j))return;if((c5<=0)&&(cR<=0)&&(cJ<=0)&&(c6<=0)){c5=-c5;cR=-cR;cJ=-cJ;c6=-c6;}if((
c5<0)||(cR<0)||(cJ<0)||(c6<0)){console.log("Emwi error: Not convex destination polygon to warp bitmap."
);return;}var kR=(c5!==cR)||(cJ!==c6)||(c5!==cJ);var eN=(a$!==bg)||(dA!==dB)||(a$
!==dB)||(bg!==dA);var gW=eN||(((a$>>24)&0xFF)<255);if(kR){var e5=c5;if(cR<e5)e5=
cR;if(cJ<e5)e5=cJ;if(c6<e5)e5=c6;if(!c5||!cR||!cJ||!c6){console.log("Emwi error: Not convex destination polygon to warp bitmap."
);return;}c5=e5/c5;cR=e5/cR;cJ=e5/cJ;c6=e5/c6;}else{c5=1;cR=1;cJ=1;c6=1;}bd=(bd+
src.aP[0])*src.aM.ee;a9=(a9+src.aP[1])*src.aM.ed;bA=(bA+src.aP[0])*src.aM.ee;by=(
by+src.aP[1])*src.aM.ed;var b=a.hd;var aL=a.ih;var cV=af.aP[0];var cW=af.aP[1];var
ae=4;b[0]=gF+cV;b[6]=gG+cV;b[1]=gH+cW;b[7]=hE+cW;b[2]=bd*c5;b[8]=bA*cR;b[3]=a9*c5;
b[9]=a9*cR;b[4]=c5;b[10]=cR;aL[5]=a$;aL[11]=bg;b[18]=hD+cV;b[12]=hC+cV;b[19]=hF+
cW;b[13]=gI+cW;b[20]=bd*c6;b[14]=bA*cJ;b[21]=by*c6;b[15]=by*cJ;b[22]=c6;b[16]=cJ;
aL[23]=dB;aL[17]=dA;if((l>rX)||(j>r0)||(t<rY)||(q<r1)){ae=jy(b,aL,ae,false,l+cV);
ae=jy(b,aL,ae,false,t+cV);ae=mT(b,ae,l+cV,t+cV);ae=jx(b,aL,ae,false,j+cW);ae=jx(
b,aL,ae,false,q+cW);ae=mS(b,ae,j+cW,q+cW);if(ae<3)return;}if((src.aM.Format===this.
ci)&&!gW)dK(a,af.aM,kR?a.jE:a.hn);else if(src.aM.Format===this.ci)dK(a,af.aM,kR?
a.jF:a.ho);else dK(a,af.aM,kR?a.jG:a.gs);hp(a,src.aM,fP);if(a.b_&&!aA)a.disable(
a.BLEND);if(!a.b_&&aA)a.enable(a.BLEND);a.b_=aA;switch(ae){case 4:{b.set(b.subarray(
12,24),18);b.set(b.subarray(24,30),12);break;}case 5:{b.set(b.subarray(12,30),18
);b.set(b.subarray(30,36),12);break;}case 6:{b.set(b.subarray(12,36),36);b.set(b.
subarray(54,60),12);b.set(b.subarray(36,42),18);b.set(b.subarray(48,54),24);b.set(
b.subarray(42,48),30);break;}case 7:{b.set(b.subarray(12,42),42);b.set(b.subarray(
66,72),12);b.set(b.subarray(42,48),18);b.set(b.subarray(60,66),24);b.set(b.subarray(
48,60),30);break;}case 8:{b.set(b.subarray(12,48),48);b.set(b.subarray(78,84),12
);b.set(b.subarray(48,54),18);b.set(b.subarray(72,80),24);b.set(b.subarray(54,60
),30);b.set(b.subarray(66,72),36);b.set(b.subarray(60,66),42);break;}}a.bufferSubData(
a.ARRAY_BUFFER,0,a.cD);a.drawArrays(a.TRIANGLE_STRIP,0,ae);if(this.a_)eB(a);};function
mV(o,fm,lT,iF,aY,bj,b8,iU,gQ,gz,gB,gA,gC,v,cQ){var i7=fm.length*6;var cD=new ArrayBuffer(
i7*6*4);var b=new Float32Array(cD);var aL=new Uint32Array(cD);var a1=iF[0]+v[0];
var aJ=iF[1]+v[1];var bP=v[2]-v[0];var bH=v[3]-v[1];for(var g=0;g<fm.length;g++){
var x=g*36;var z=fm[g];var dl=lT[g];var l=aY+z.OriginX+dl;var j=bj+z.OriginY;var
t=l+z.Width;var q=j+z.Height;var cd=z.mO;var cM=z.mP;var bN=z.mQ;var bF=z.mR;if((
j<gB)&&(q!==j)){bN+=((gB-j)/(q-j))*(bF-bN);j=gB;}if((q>gC)&&(q!==j)){bF+=((gC-q)
/(q-j))*(bF-bN);q=gC;}if((l<gz)&&(l!==t)){cd+=((gz-l)/(t-l))*(cM-cd);l=gz;}if((t>
gA)&&(l!==t)){cM+=((gA-t)/(t-l))*(cM-cd);t=gA;}if(l>t)l=t;if(j>q)j=q;if(b8===0){
l+=a1;j+=aJ;t+=a1;q+=aJ;b[x+0]=l;b[x+6]=t;b[x+1]=j;b[x+7]=j;b[x+12]=l;b[x+18]=l;
b[x+13]=q;b[x+19]=q;b[x+24]=t;b[x+30]=t;b[x+25]=j;b[x+31]=q;}else if(b8===90){var
ce=a1+j;var cg=aJ+bH-l;var cf=a1+q;var ch=aJ+bH-t;b[x+0]=ce;b[x+6]=ce;b[x+1]=cg;
b[x+7]=ch;b[x+12]=cf;b[x+18]=cf;b[x+13]=cg;b[x+19]=cg;b[x+24]=ce;b[x+30]=cf;b[x+
25]=ch;b[x+31]=ch;}else if(b8===180){var ce=a1+bP-l;var cg=aJ+bH-j;var cf=a1+bP-
t;var ch=aJ+bH-q;b[x+0]=ce;b[x+6]=cf;b[x+1]=cg;b[x+7]=cg;b[x+12]=ce;b[x+18]=ce;b[
x+13]=ch;b[x+19]=ch;b[x+24]=cf;b[x+30]=cf;b[x+25]=cg;b[x+31]=ch;}else if(b8===270
){var ce=a1+bP-j;var cg=aJ+l;var cf=a1+bP-q;var ch=aJ+t;b[x+0]=ce;b[x+6]=ce;b[x+
1]=cg;b[x+7]=ch;b[x+12]=cf;b[x+18]=cf;b[x+13]=cg;b[x+19]=cg;b[x+24]=ce;b[x+30]=cf;
b[x+25]=ch;b[x+31]=ch;}b[x+2]=cd;b[x+8]=cM;b[x+3]=bN;b[x+9]=bN;b[x+4]=1;b[x+10]=
1;aL[x+5]=cQ;aL[x+11]=cQ;b[x+14]=cd;b[x+20]=cd;b[x+15]=bF;b[x+21]=bF;b[x+16]=1;b[
x+22]=1;aL[x+17]=cQ;aL[x+23]=cQ;b[x+26]=cM;b[x+32]=cM;b[x+27]=bN;b[x+33]=bF;b[x+
28]=1;b[x+34]=1;aL[x+29]=cQ;aL[x+35]=cQ;aY+=z.Advance+dl;if(iU&&((z.ea===0x20)||(
z.ea===0xA0))){gQ+=iU;aY+=gQ>>16;gQ&=0xFFFF;}}o.bufferData(o.ARRAY_BUFFER,cD,o.STREAM_DRAW
);o.drawArrays(o.TRIANGLES,0,i7);o.bufferData(o.ARRAY_BUFFER,o.cD,o.STREAM_DRAW);
}function mW(o,fm,lT,iF,aY,bj,b8,iU,gQ,gz,gB,gA,gC,v,av,as,ar,au){var i7=fm.length
*6;var cD=new ArrayBuffer(i7*6*4);var b=new Float32Array(cD);var aL=new Uint32Array(
cD);var a1=iF[0]+v[0];var aJ=iF[1]+v[1];var bP=v[2]-v[0];var bH=v[3]-v[1];var kJ=
1/bP;var kG=1/bH;if(b8===90){var e=av;av=au;au=ar;ar=as;as=e;kJ=1/bH;kG=1/bP;}else
if(b8===180){var a2=av;var bf=au;av=ar;ar=a2;au=as;as=bf;}else if(b8===270){var e=
av;av=as;as=ar;ar=au;au=e;kJ=1/bH;kG=1/bP;}var j_=(av&0xFF);var j$=((av>>8)&0xFF
);var ka=((av>>16)&0xFF);var kb=((av>>24)&0xFF);var kc=(as&0xFF);var kd=((as>>8)&
0xFF);var ke=((as>>16)&0xFF);var kf=((as>>24)&0xFF);var n7=(au&0xFF);var n8=((au>>
8)&0xFF);var n9=((au>>16)&0xFF);var n_=((au>>24)&0xFF);var n$=(ar&0xFF);var oa=((
ar>>8)&0xFF);var ob=((ar>>16)&0xFF);var oc=((ar>>24)&0xFF);for(var g=0;g<fm.length;
g++){var x=g*36;var z=fm[g];var dl=lT[g];var l=aY+z.OriginX+dl;var j=bj+z.OriginY;
var t=l+z.Width;var q=j+z.Height;var cd=z.mO;var cM=z.mP;var bN=z.mQ;var bF=z.mR;
if((j<gB)&&(q!==j)){bN+=((gB-j)/(q-j))*(bF-bN);j=gB;}if((q>gC)&&(q!==j)){bF+=((gC-
q)/(q-j))*(bF-bN);q=gC;}if((l<gz)&&(l!==t)){cd+=((gz-l)/(t-l))*(cM-cd);l=gz;}if((
t>gA)&&(l!==t)){cM+=((gA-t)/(t-l))*(cM-cd);t=gA;}if(l>t)l=t;if(j>q)j=q;var gb=j*
kG;var f_=q*kG;var f$=l*kJ;var ga=t*kJ;var kl=j_+(n7-j_)*gb;var km=j$+(n8-j$)*gb;
var kn=ka+(n9-ka)*gb;var ko=kb+(n_-kb)*gb;var oh=kc+(n$-kc)*gb;var oi=kd+(oa-kd)
*gb;var oj=ke+(ob-ke)*gb;var ok=kf+(oc-kf)*gb;var kh=j_+(n7-j_)*f_;var ki=j$+(n8-
j$)*f_;var kj=ka+(n9-ka)*f_;var kk=kb+(n_-kb)*f_;var od=kc+(n$-kc)*f_;var oe=kd+(
oa-kd)*f_;var of=ke+(ob-ke)*f_;var og=kf+(oc-kf)*f_;var rK=kl+(oh-kl)*f$;var rL=
km+(oi-km)*f$;var rM=kn+(oj-kn)*f$;var rN=ko+(ok-ko)*f$;var rO=kl+(oh-kl)*ga;var
rP=km+(oi-km)*ga;var rQ=kn+(oj-kn)*ga;var rR=ko+(ok-ko)*ga;var rC=kh+(od-kh)*f$;
var rD=ki+(oe-ki)*f$;var rE=kj+(of-kj)*f$;var rF=kk+(og-kk)*f$;var rG=kh+(od-kh)
*ga;var rH=ki+(oe-ki)*ga;var rI=kj+(of-kj)*ga;var rJ=kk+(og-kk)*ga;av=rK|(rL<<8)|(
rM<<16)|(rN<<24);as=rO|(rP<<8)|(rQ<<16)|(rR<<24);ar=rG|(rH<<8)|(rI<<16)|(rJ<<24);
au=rC|(rD<<8)|(rE<<16)|(rF<<24);if(b8===0){l+=a1;j+=aJ;t+=a1;q+=aJ;b[x+0]=l;b[x+
6]=t;b[x+1]=j;b[x+7]=j;b[x+12]=l;b[x+18]=l;b[x+13]=q;b[x+19]=q;b[x+24]=t;b[x+30]=
t;b[x+25]=j;b[x+31]=q;}else if(b8===90){var ce=a1+j;var cg=aJ+bH-l;var cf=a1+q;var
ch=aJ+bH-t;b[x+0]=ce;b[x+6]=ce;b[x+1]=cg;b[x+7]=ch;b[x+12]=cf;b[x+18]=cf;b[x+13]=
cg;b[x+19]=cg;b[x+24]=ce;b[x+30]=cf;b[x+25]=ch;b[x+31]=ch;}else if(b8===180){var
ce=a1+bP-l;var cg=aJ+bH-j;var cf=a1+bP-t;var ch=aJ+bH-q;b[x+0]=ce;b[x+6]=cf;b[x+
1]=cg;b[x+7]=cg;b[x+12]=ce;b[x+18]=ce;b[x+13]=ch;b[x+19]=ch;b[x+24]=cf;b[x+30]=cf;
b[x+25]=cg;b[x+31]=ch;}else if(b8===270){var ce=a1+bP-j;var cg=aJ+l;var cf=a1+bP-
q;var ch=aJ+t;b[x+0]=ce;b[x+6]=ce;b[x+1]=cg;b[x+7]=ch;b[x+12]=cf;b[x+18]=cf;b[x+
13]=cg;b[x+19]=cg;b[x+24]=ce;b[x+30]=cf;b[x+25]=ch;b[x+31]=ch;}b[x+2]=cd;b[x+8]=
cM;b[x+3]=bN;b[x+9]=bN;b[x+4]=1;b[x+10]=1;aL[x+5]=av;aL[x+11]=as;b[x+14]=cd;b[x+
20]=cd;b[x+15]=bF;b[x+21]=bF;b[x+16]=1;b[x+22]=1;aL[x+17]=au;aL[x+23]=au;b[x+26]=
cM;b[x+32]=cM;b[x+27]=bN;b[x+33]=bF;b[x+28]=1;b[x+34]=1;aL[x+29]=as;aL[x+35]=ar;
aY+=z.Advance+dl;if(iU&&((z.ea===0x20)||(z.ea===0xA0))){gQ+=iU;aY+=gQ>>16;gQ&=0xFFFF;
}}o.bufferData(o.ARRAY_BUFFER,cD,o.STREAM_DRAW);o.drawArrays(o.TRIANGLES,0,i7);o.
bufferData(o.ARRAY_BUFFER,o.cD,o.STREAM_DRAW);}d.np=function(aa,ac,k,ak,al,ai,ag
,v,dD,dM,b8,av,as,ar,au,aA){var a=this.bm;var af=null;var l=v[0];var j=v[1];var t=
v[2];var q=v[3];var er=-dD[0];var fa=-dD[1];var dH=0;var dp=0x8000;var ad=0;var aV=
1;var aR=0;var dl=0;if(aa&&(ai>=0)&&(ai<aa.NoOfFrames)){ai=aa.bO?aa.bO[ai]:ai;af=
aa.b6[ai];}if(!af||(af.aM.Format!==this.ci)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!ac){if(this.a_)console.log("EmWi error: Invalid font in the drawing operation."
);return;}if(al===-1)al=k.length;if(ak<0){al+=ak;ak=0;}al=Math.min(al,k.length-ak
);if((b8!==90)&&(b8!==180)&&(b8!==270))b8=0;l=Math.max(ag[0],l,0);j=Math.max(ag[
1],j,0);t=Math.min(ag[2],t,aa.FrameSize[0]);q=Math.min(ag[3],q,aa.FrameSize[1]);
if(b8===90){var e=j;j=l-v[0];l=v[3]-q;q=t-v[0];t=v[3]-e;}else if(b8===180){var a2=
l;var bf=j;l=v[2]-t;j=v[3]-q;t=v[2]-a2;q=v[3]-bf;}else if(b8===270){var e=l;l=j-
v[1];j=v[2]-t;t=q-v[1];q=v[2]-e;}else{l-=v[0];j-=v[1];t-=v[0];q-=v[1];}j=Math.max(
j,fa-ac.Ascent);q=Math.min(q,fa+ac.Descent+1);if((t<=l)||(q<=j)||(al<=0))return;
if(dM>0)dM-=this.jP(ac,k,ak,al);if(dM>0){var bR=ak;var ae=al;var eP=0;for(;ae;bR++
,ae--){var h=k.charCodeAt(bR);if((h===32)||(h===0xA0))eP++;}if(eP)dH=((dM<<16)/eP
)|0;}while(al&&(ad=k.charCodeAt(ak))){if((ad===0x2026)&&!this.eY(ac,ad)){ad=0x2E;
aV=3;}else aV=1;var z=this.dW(ac,ad);if(!z){if(this.a_)console.log("EmWi error: Default glyph not found in the font."
);return;}if(!z.Advance&&!z.OriginX&&!z.Width){ak++;al--;continue;}var hZ=dl=this.
bz(ac,aR,ad);if(aV>1)hZ+=(aV-1)*this.bz(ac,ad,ad);if((er+hZ+((aV-1)*z.Advance)+z.
OriginX+z.Width)>l)break;if(dH&&((ad===0x20)||(ad===0xA0))){dp+=dH;er+=dp>>16;dp&=
0xFFFF;}er+=hZ+aV*z.Advance;ak++;al--;aR=ad;}if(!al)return;var eN=(av!==au)||(as
!==ar)||(av!==as);dK(a,af.aM,a.gs);hp(a,null,false);a.bindTexture(a.TEXTURE_2D,this.
ir);if(a.b_&&!aA)a.disable(a.BLEND);if(!a.b_&&aA)a.enable(a.BLEND);a.b_=aA;var aT=[
];var h0=[];var ji=er;var jg=dp;var jh=dH;do{var z=this.nr(ac,ad);if(!z){if(eN)mW(
a,aT,h0,af.aP,ji,fa,b8,jh,jg,l,j,t,q,v,av,as,ar,au);else mV(a,aT,h0,af.aP,ji,fa,
b8,jh,jg,l,j,t,q,v,av);for(var g=0;g<aT.length;g++)aT[g].jK--;aT=[];h0=[];ji=er;
jg=dp;jh=dH;z=this.nr(ac,ad);}if(!z){if(this.a_)console.log("EmWi error: Default glyph not found in the font."
);return;}if(!z.Advance&&!z.OriginX&&!z.Width){if(--al>0)ad=k.charCodeAt(++ak);else
ad=0;if((ad===0x2026)&&!this.eY(ac,ad)){ad=0x2E;aV=3;}else aV=1;continue;}dl=this.
bz(ac,aR,ad);if((er+dl+z.OriginX)>=t)break;while(aV-->0){z.jK++;aT.push(z);h0.push(
dl);if(dH&&((ad===0x20)||(ad===0xA0))){dp+=dH;er+=dp>>16;dp&=0xFFFF;}er+=dl+z.Advance;
if(aV>0)dl=this.bz(ac,ad,ad);aR=ad;}if(--al>0)ad=k.charCodeAt(++ak);else ad=0;if((
ad===0x2026)&&!this.eY(ac,ad)){ad=0x2E;aV=3;}else aV=1;}while(al>0);if(eN)mW(a,aT
,h0,af.aP,ji,fa,b8,jh,jg,l,j,t,q,v,av,as,ar,au);else mV(a,aT,h0,af.aP,ji,fa,b8,jh
,jg,l,j,t,q,v,av);for(var g=0;g<aT.length;g++)aT[g].jK--;if(this.a_)eB(a);};d.s1=
function(aa,am,a6,ai,ag,v,dD,fT,fU,gN,gM,aA){if(!aa||!am||!a6||(ai<0)||(ai>=aa.NoOfFrames
))return;ag=this.it(ag,v);if((ag[2]<=ag[0])||(ag[3]<=ag[1]))return;if(fT<0)fT=0;
if(fT>255)fT=255;if(fU<0)fU=0;if(fU>255)fU=255;if(gM<0)gM=0;if(gM>255)gM=255;if(
gN<0)gN=0;if(gN>255)gN=255;var width=v[2]-v[0];var height=v[3]-v[1];var oJ=1;var
kH=1;var oL=(fT!==gM)||(fU!==gN);var oK=(fT!==fU)||(gM!==gN);if(width&&oK)oJ/=width;
if(height&&oL)kH/=height;var eN={m4:oK,m5:oL,p3:oJ,sJ:kH,Width:width,Height:height
,pt:fT,pu:(gM-fT)*kH,pv:fU,pw:(gN-fU)*kH};pI(this,aa,ai,ag,v,v[0]-dD[0],v[1]-dD[
1],am,a6.Data,0,a6.Data.length,aA,eN);};d.qK=[0,0];d.qL=[0,0,0,0];d.hr="";d.iq=3.1415926535
/180;d.ns=180/3.1415926535;d.jW=new Array(129).join('0');d.hx=[];d.hv=null;d.gx=
0;d.no=0;d.df=null;d.dX=null;d.fL=null;d.hw=null;d.nf=null;d.sK="";d.b0=null;d.qG=
0;d.eg=null;d.bm=null;d.gt=null;d.iv=false;d.iu=false;d.gw=false;d.eh=0;d.hz=[];
d.lA=[];d.nu=[];d.dy=0;d.eZ=0;d.lr=null;d.jO=true;d.ll=false;d.a_=false;d.gv=1024;
d.jR=1024;d.gu=64;d.ir=null;d.fK=null;d.jQ=null;d.ht=null;d.hy=0;d.iy=-1;d.ci=0;
d.ly=1;d.lt=0x00000000;d.ix=0x00000001;d.lu=0x00000002;d.jV=0x00000003;d.qW=0x00000000;
d.iw=0x00000100;d.ls=0x00000200;d.jU=0x00000300;d.t5=0x00000000;d.t7=0x00000101;
d.t8=0x00000202;d.t6=0x00000303;d.lv=0x00000000;d.lw=0x00010000;d.lx=0x00020000;
d.q2=0;d.q0=1;d.nx=2;d.q1=3;d.ud=4;return d;})();

/* Embedded Wizard */