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
* Profile  : Prototype
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

EmWiCompr_12_05=(function(){var f={};f._SetLanguage=function(mI){if(this.on===mI)
return mI;this.on=mI;var f9=this.jr;while(f9){f9._ReInit();f9=f9._next;}this._ReInit(
);return mI;};f._SetStyles=function(rl){this.aa6=rl;return rl;};f.z2=function(kO
){if(kO._variants)kO=kO._variants();var aM=kO[this.on];if(aM!==undefined)return aM;
else return kO[0];};f._GetAutoObject=function(hK){if(hK._variants)hK=hK._variants(
);if(!hK._this)hK._Init.call(hK._this={});return hK._this;};f.zW=function(dE){if(
dE._variants)dE=dE._variants();var ke=dE[this.on];if(ke===undefined)ke=dE[0];if(
!ke._this)dE._class()._Init.call(ke._this={},ke);return ke._this;};f._NewObject=
function(q6,vU){var g;if(!q6)throw"No class specified to create the object";q6._Init.
call(g={},vU);g._next=this.jr;this.jr=g;return g;};f._LockObject=function(cq){if(
cq)this.ju.push(cq);};f._UnlockObject=function(cq){var sL=this.ju;var g;if(!cq)return;
for(g=sL.length-1;g>=0;g--)if(sL[g]===cq)break;if(g>=0)this.ju.splice(g,1);};f.aaG=
function(cq){this.jk=cq;};f.zz=function(){return this.jk;};f.aaf=function(dB,e5){
var g;for(var d in dB)if(!isNaN(d)&&(g=dB[d])&&(g._cycle!==e5))g._Mark(g._cycle=
e5);};f.aah=function(dB,e5){var g;for(var d in dB)if(!isNaN(d)&&(g=dB[d])&&(g=g[
0])&&(g._cycle!==e5))g._Mark(g._cycle=e5);};f.aag=function(dB,e5){var g;for(var d
in dB)if(!isNaN(d)&&(g=dB[d])&&(g=g[0])&&(g._cycle!==e5))g._Mark(g._cycle=e5);};
f.qX=function(){var cO=(this.qS+=1);var yp=this.hJ;var aJ=null;var ba=null;var g=
null;function n_(re,e5){var ad=re;var sr=0;var g;for(;ad;ad=ad._next){if((g=ad.fu
)&&(g._cycle!==e5)&&(ad[0]._cycle===e5)){g._Mark(g._cycle=e5);ad=re;sr++;}}return sr;
}for(aJ=this.ju.length-1;aJ>=0;aJ--)if((ba=this.ju[aJ])&&(ba._cycle!==cO))ba._Mark(
ba._cycle=cO);n_(this.dO,cO);while((n_(this.eE,cO)>0)&&(n_(this.dO,cO)>0));while((
aJ=this.dO)&&((aJ[0]._cycle!==cO)||((g=aJ.fu)&&(g._cycle!==cO))))this.dO=aJ._next;
while((ba=this.eE)&&((ba[0]._cycle!==cO)||((g=ba.fu)&&(g._cycle!==cO))))this.eE=
ba._next;while(aJ&&(g=aJ._next))if((g.fu&&(g.fu._cycle!==cO))||(g[0]._cycle!==cO
))aJ._next=g._next;else aJ=g;while(ba&&(g=ba._next))if((g.fu&&(g.fu._cycle!==cO)
)||(g[0]._cycle!==cO))ba._next=g._next;else ba=g;while((aJ=this.jr)&&(aJ._cycle!==
cO)){this.jr=aJ._next;if(aJ===this.jk)this.jk=null;aJ._Done();}if(aJ)while(ba=aJ.
_next){if(ba._cycle!==cO){aJ._next=ba._next;if(ba===this.jk)this.jk=null;ba._Done(
);}else aJ=ba;}this.aaD(cO);while((aJ=this.gU)&&(aJ[0]._cycle!==cO))this.gU=aJ._next;
if(aJ)while(ba=aJ._next)if(ba[0]._cycle!==cO)aJ._next=ba._next;else aJ=ba;while((
aJ=this.js)&&(aJ._cycle!==cO))this.js=aJ.kJ;while(aJ){var fQ;while((ba=aJ._observers
)&&(ba[0]._cycle!==cO))aJ._observers=ba._next;if(ba)while(fQ=ba._next)if(fQ[0]._cycle
!==cO)ba._next=fQ._next;else ba=fQ;while((ba=aJ.kJ)&&(ba._cycle!==cO))aJ.kJ=ba.kJ;
aJ=ba;}if(this.cM)console.log("Living objects: "+this.hJ+"("+(this.hJ-yp)+")");};
f.ow=function(bD,k2){if(!bD)return;var ad=this.dO;var f9=bD[0];var lp=bD[1];var g=
null;if(ad&&(ad[0]===f9)&&(ad[1]===lp)){if(!ad.oA)ad.fu=k2;return;}if(ad)while((
g=ad._next)&&((g[0]!==f9)||(g[1]!==lp)))ad=g;if(g&&g.oA)return;if(g){ad._next=g.
_next;g._next=null;}bD._next=this.dO;bD.fu=k2;this.dO=bD;};f.z3=function(bD,k2){
if(!bD)return;var ad=this.eE;var f9=bD[0];var lp=bD[1];var g;if(ad&&(ad[0]===f9)&&(
ad[1]===lp)){if(!ad.oA)ad.fu=k2;return;}if(ad)while((g=ad._next)&&((g[0]!==f9)||(
g[1]!==lp)))ad=g;if(g){ad._next=g._next;g._next=null;}bD._next=this.eE;bD.fu=k2;
this.eE=bD;};f.vK=function(){var j7=[];if(!this.dO){if(this.eE){this.dO=this.eE;
this.eE=null;}return false;}for(;;){var ll=this.dO;var pw=null;var g;while(ll&&(
ll!==j7)){g=ll;ll=ll._next;g._next=pw;pw=g;}j7._next=pw;this.dO=j7;while(g=j7._next
){g.oA=true;g[1].call(g[0],g.fu);j7._next=g._next;}if(this.dO===j7){this.dO=null;
break;}}this.dO=this.eE;this.eE=null;return true;};f.za=function(bD,fv,cD){var ek;
if(!bD||!fv||!(ek=fv[0]))return;var ad=ek._observers;var dI=bD[0];var dJ=bD[1];var
iu=fv[1];while(ad&&((ad[0]!==dI)||(ad[1]!==dJ)||(ad[2]!==cD)||(ad[3]!==iu)))ad=ad.
_next;if(ad)return;ad=[dI,dJ,cD,iu];ad._next=ek._observers;ek._observers=ad;if(!
ek.oz){ek.kJ=this.js;ek.oz=true;this.js=ek;}};f.y_=function(bD,cq,cD){if(!bD||!cq
)return;var ad=cq._observers;var dI=bD[0];var dJ=bD[1];while(ad&&((ad[0]!==dI)||(
ad[1]!==dJ)||(ad[2]!==cD)||ad[3]))ad=ad._next;if(ad)return;ad=[dI,dJ,cD,null];ad.
_next=cq._observers;cq._observers=ad;if(!cq.oz){cq.kJ=this.js;cq.oz=true;this.js=
cq;}};f.y$=function(bD,cD){if(!bD)return;var ad=this.gU;var dI=bD[0];var dJ=bD[1
];while(ad&&((ad[0]!==dI)||(ad[1]!==dJ)||(ad[2]!==cD)))ad=ad._next;if(ad)return;
ad=[dI,dJ,cD];ad._next=this.gU;this.gU=ad;};f.zn=function(bD,fv,cD){var ek;var ad;
if(!bD||!fv||!(ek=fv[0])||!(ad=ek._observers))return;var dI=bD[0];var dJ=bD[1];var
iu=fv[1];var cb;if((ad[0]===dI)&&(ad[1]===dJ)&&(ad[2]===cD)&&(ad[3]===iu)){ek._observers=
ad._next;ad._next=null;return;}while((cb=ad._next)&&((cb[0]!==dI)||(cb[1]!==dJ)||(
cb[2]!==cD)||(cb[3]!==iu)))ad=cb;if(!cb)return;ad._next=cb._next;cb._next=null;};
f.zl=function(bD,cq,cD){var ad;if(!bD||!cq||!(ad=cq._observers))return;var dI=bD[
0];var dJ=bD[1];var cb;if((ad[0]===dI)&&(ad[1]===dJ)&&(ad[2]===cD)&&!ad[3]){cq._observers=
ad._next;ad._next=null;return;}while((cb=ad._next)&&((cb[0]!==dI)||(cb[1]!==dJ)||(
cb[2]!==cD)||cb[3]))ad=cb;if(!cb)return;ad._next=cb._next;cb._next=null;};f.zm=function(
bD,cD){var ad;if(!bD||!(ad=this.gU))return;var dI=bD[0];var dJ=bD[1];var cb;if((
ad[0]===dI)&&(ad[1]===dJ)&&(ad[2]===cD)){this.gU=ad._next;ad._next=null;return;}
while((cb=ad._next)&&((cb[0]!==dI)||(cb[1]!==dJ)||(cb[2]!==cD)))ad=cb;if(!cb)return;
ad._next=cb._next;cb._next=null;};f.aat=function(fv,cD){var ek;var ad;if(!fv||!(
ek=fv[0])||!(ad=ek._observers))return;if(this.cM)console.log("NotifyRefObserver()"
);var iu=fv[1];while(ad){if((ad[2]===cD)&&(ad[3]===iu))this.ow(ad.slice(0,2),null
);ad=ad._next;}};f.vv=function(cq,cD){var ad;if(!cq||!(ad=cq._observers))return;
if(this.cM)console.log("NotifyObjObserver()");while(ad){if((ad[2]===cD)&&!ad[3])
this.ow(ad.slice(0,2),null);ad=ad._next;}};f.aas=function(cD){var ad;if(!(ad=this.
gU))return;if(this.cM)console.log("NotifyObserver()");while(ad){if(ad[2]===cD)this.
ow(ad.slice(0,2),null);ad=ad._next;}};function StartTimer(mB,jF){var lA=this;if((
mB>0)&&(jF>0))this.gR=window.setTimeout(function(){uQ(lA,jF);},mB);else if(mB>0)
this.gR=window.setTimeout(function(){uR(lA);},mB);else if(jF>0)this.gP=window.setInterval(
function(){qr(lA);},jF);}function DestroyTimer(){if(this.gP)window.clearInterval(
this.gP);this.gP=0;if(this.gR)window.clearTimeout(this.gR);this.gR=0;this.kh.hJ--;
this.lQ=null;this.lO=null;this.kh=null;}function ResetTimer(){if(this.gP)window.
clearInterval(this.gP);this.gP=0;if(this.gR)window.clearTimeout(this.gR);this.gR=
0;}function uQ(ef,jF){ef.u0=null;ef.gP=window.setInterval(function(){qr(ef);},jF
);try{ef.lO.call(ef.lQ);ef.kh._RequestUpdate();}catch(bU){console.log("EmWi error: "+
bU+"!");}}function uR(ef){try{ef.u0=null;ef.lO.call(ef.lQ);ef.kh._RequestUpdate(
);}catch(bU){console.log("EmWi error: "+bU+"!");}}function qr(ef){try{ef.lO.call(
ef.lQ);ef.kh._RequestUpdate();}catch(bU){console.log("EmWi error: "+bU+"!");}}f.
zk=function(cq,v8){var lA={DestroyTimer:DestroyTimer,ResetTimer:ResetTimer,StartTimer:
StartTimer,kh:this,lQ:cq,lO:v8,gP:0,gR:0};this.hJ++;return lA;};function ta(){var
hf=this.qd;var f7=hf.length;var ih=0;if(arguments.length!==f7)return this.n3;for(
var d=0;d<f7;d++){var lc=hf[d];var r=arguments[d];if((r<0)||(r>=lc))return this.
n3;ih=(ih*lc)+r;}var aM=this[ih];if(aM===undefined)return this.n3;return aM;};function
tb(){var hf=this.qd;var f7=hf.length;var ih=0;if((arguments.length-1)!==f7)return;
for(var d=0;d<f7;d++){var lc=hf[d];var r=arguments[d];if((r<0)||(r>=lc))return;ih=(
ih*lc)+r;}return this[ih]=arguments[f7];};f.aan=function(){var f7=arguments.length-
2;var wT=arguments[f7];var pl=arguments[f7+1];var hf=[];for(var d=0;d<f7;d++)hf[
d]=arguments[d];var jL=[];jL.qd=hf;jL.n3=wT;if(pl)for(var d in pl)jL[d]=pl[d];jL.
Get=ta;jL.Set=tb;return jL;};f.aa8=function(){function gm(ce,v9){var g=ce.toString(
16).toUpperCase();var sG=v9-g.length;if(sG>0)g=f.mA.slice(0,sG)+g;return g;}var nq=
arguments[0];var cn="EmWi trace: ";var r=0;var cZ=1;while(nq&&(r<nq.length)&&(cZ<
arguments.length)){if(nq[r++]==='%'){if(cZ>1)cn+=", ";switch(nq[r++]){case'i':case
'I':cn+=arguments[cZ].toFixed();break;case'u':case'U':cn+=arguments[cZ].toFixed(
);break;case'f':cn+=arguments[cZ];break;case'e':cn+="enum:0x"+gm(arguments[cZ],8
);break;case't':cn+="set:0x"+gm(arguments[cZ],8);break;case'0':cn+="null";break;
case'b':cn+=arguments[cZ];break;case'h':cn+="handle:"+arguments[cZ];break;case'c':{
var g=arguments[cZ];if((g>=0x20)&&(g<=0x7F))cn+="\'"+String.fromCharCode(g)+"\'";
else cn+="\'\\x"+gm(g,4)+"\'";}break;case'o':{var g=arguments[cZ];var aI=g&0xFF;
var dk=(g>>8)&0xFF;var bm=(g>>16)&0xFF;var b4=(g>>24)&0xFF;cn+="#"+gm(aI,2)+gm(dk
,2)+gm(bm,2)+gm(b4,2);}break;case'p':{var g=arguments[cZ];cn+="<"+g[0]+","+g[1]+
">";}break;case'r':{var g=arguments[cZ];cn+="<"+g[0]+","+g[1]+","+g[2]+","+g[3]+
">";}break;case'l':{cn+="language:0x"+gm(arguments[cZ],8);}break;case'g':{cn+="styles:0x"+
gm(arguments[cZ],8);}break;case'^':{var g=arguments[cZ];if(!g||!g[0])cn+="null";
else cn+="ref:(Object of class '"+g[0]._className+"', OnGet:'"+g[1].name+"', OnSet:'"+
g[2].name+"')";}break;case'*':{var g=arguments[cZ];if(!g||!g._className)cn+="null";
else cn+="Object of class '"+g._className+"'";}break;case'$':{var g=arguments[cZ
];if(!g||!g._className)cn+="null";else cn+=g._className;}break;case'&':{var g=arguments[
cZ];if(!g||!g[0])cn+="null";else cn+="slot:(Object of class '"+g[0]._className+"', SlotProc:'"+
g[1].name+"')";}break;case's':{var g=arguments[cZ];cn+="\""+g+"\"";}break;}cZ++;
}}console.log(cn);};f._RequestUpdate=function(){if(this.kB)return;var fe=this;var
sJ=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||
window.oRequestAnimationFrame||window.msRequestAnimationFrame;function s5(){fe.vH(
);}if(sJ)sJ(s5);else window.setTimeout(s5,15);this.kB=true;};f.qZ=function(){if(
this.kA)return;var fe=this;function yq(){fe.vD();}window.setTimeout(yq,1000);this.
kA=true;};f.vH=function(){if(!this.kB)return;this.kB=false;try{var r_=this.vK();
if(this.hF&&this.cp.DoesNeedUpdate()){var aW=this._NewObject(this.Graphics.Canvas
,0);this.ai.qg=null;this.ai.fp=null;this.ai.kk=null;if(this.mr)this.hF.dd[0].lI=
true;aW.AttachBitmap(this.hF);this.cp.UpdateGE20(aW);aW.DetachBitmap();if(this.hF.
dd[0].lI){this.ai.clear(this.ai.COLOR_BUFFER_BIT);this.hF.dd[0].lI=false;}r_=true;
}if(r_)this.qZ();if(this.dO||this.eE)this._RequestUpdate();}catch(bU){console.log(
"EmWi error: "+bU+"!");}};f.vD=function(){if(!this.kA)return;this.kA=false;this.
qX();};function u1(oL,v){var so=[v.Enter,v.Escape,v.Backspace,v.CtrlShiftPageUp,
v.CtrlShiftPageDown,v.CtrlShiftUp,v.CtrlShiftDown,v.CtrlShiftKeyP,v.CtrlShiftKeyR
,v.CtrlShiftLeft,v.CtrlShiftRight,v.CtrlShiftBackspace,v.CtrlShiftKeyE,v.CtrlShiftKeyT
,v.CtrlShiftKeyN,v.CtrlShiftKeyK,v.CtrlShiftKeyG,v.CtrlShiftKeyU,v.CtrlShiftKeyA
,v.CtrlShiftKeyD,v.CtrlShiftKeyM,v.CtrlShiftKey0,v.CtrlShiftKey1,v.CtrlShiftKey2
,v.CtrlShiftKey3,v.CtrlShiftKey4,v.CtrlShiftKey5,v.CtrlShiftKey6,v.CtrlShiftKey7
,v.CtrlShiftKey8,v.CtrlShiftKey9,v.CtrlKeyM,v.CtrlPageUp,v.CtrlPageDown,v.CtrlInsert
,v.CtrlDelete,v.CtrlKeyP,v.CtrlKeyS,v.CtrlLeft,v.CtrlRight,v.CtrlUp,v.CtrlDown,v.
CtrlKeyH,v.CtrlKeyR,v.CtrlKeyG,v.CtrlKeyB,v.CtrlKeyY,v.CtrlKeyL,v.CtrlKeyN,v.CtrlKeyW
,v.CtrlKeyD,v.CtrlKeyV,v.CtrlKeyE,v.CtrlKeyO,v.CtrlKeyT,v.CtrlKeyQ,v.CtrlKeyA,v.
CtrlKeyC,v.CtrlKeyU,v.CtrlKeyZ,v.CtrlKeyX,v.CtrlKeyI,v.CtrlHome,v.CtrlEnd,v.CtrlKey0
,v.CtrlKey1,v.CtrlKey2,v.CtrlKey3,v.CtrlKey4,v.CtrlKey5,v.CtrlKey6,v.CtrlKey7,v.
CtrlKey8,v.CtrlKey9];var yf=[v.Ok,v.Exit,v.Clear,v.ChannelUp,v.ChannelDown,v.SkipPrev
,v.SkipNext,v.Pause,v.Record,v.SlowRev,v.SlowFwd,v.Eject,v.Repeat,v.Timer,v.Navigation
,v.Karaoke,v.Game,v.Setup,v.Angle,v.Mode,v.Mute,v.User10,v.User11,v.User12,v.User13
,v.User14,v.User15,v.User16,v.User17,v.User18,v.User19,v.Menu,v.VolumeUp,v.VolumeDown
,v.Show,v.Hide,v.Play,v.Stop,v.Rev,v.Fwd,v.SkipBwd,v.SkipFwd,v.Help,v.Red,v.Green
,v.Blue,v.Yellow,v.White,v.Magenta,v.TV,v.DVD,v.VCR,v.EPG,v.OSD,v.Text,v.PIP,v.Audio
,v.Clock,v.Subtitle,v.Zoom,v.Index,v.Info,v.Display,v.Power,v.User0,v.User1,v.User2
,v.User3,v.User4,v.User5,v.User6,v.User7,v.User8,v.User9];var r=so.length-1;while((
r>=0)&&(so[r]!==oL))r--;if(r>=0)oL=yf[r];return oL;}f.vz=function(av){var e=this.
Core.KeyCode;var pm=av.type==="keyup";var keyCode=e.NoKey;var iA=e.NoKey;var charCode=
0;if(((av.type==="keydown")||(av.type==="keypress"))&&this.op){var aQ=this.op.call(
this,av);if(aQ&&aQ.KeyCode)keyCode=aQ.KeyCode;else if(aQ&&aQ.tg)charCode=aQ.tg;}
if((av.type==="keypress")&&!av.ctrlKey&&(av.charCode!==13)&&(av.charCode!==8)&&(
keyCode===e.NoKey)&&!charCode)charCode=av.charCode;else if((av.type==="keydown")&&(
keyCode===e.NoKey)&&!charCode){if(av.ctrlKey&&av.shiftKey&&!av.altKey)switch(av.
keyCode){case 13:keyCode=e.CtrlShiftEnter;break;case 27:keyCode=e.CtrlShiftEscape;
break;case 8:keyCode=e.CtrlShiftBackspace;break;case 9:keyCode=e.CtrlShiftTab;break;
case 40:keyCode=e.CtrlShiftDown;break;case 38:keyCode=e.CtrlShiftUp;break;case 37:
keyCode=e.CtrlShiftLeft;break;case 39:keyCode=e.CtrlShiftRight;break;case 36:keyCode=
e.CtrlShiftHome;break;case 35:keyCode=e.CtrlShiftEnd;break;case 33:keyCode=e.CtrlShiftPageUp;
break;case 34:keyCode=e.CtrlShiftPageDown;break;case 45:keyCode=e.CtrlShiftInsert;
break;case 46:keyCode=e.CtrlShiftDelete;break;case 112:keyCode=e.CtrlShiftF1;break;
case 113:keyCode=e.CtrlShiftF2;break;case 114:keyCode=e.CtrlShiftF3;break;case 115:
keyCode=e.CtrlShiftF4;break;case 116:keyCode=e.CtrlShiftF5;break;case 117:keyCode=
e.CtrlShiftF6;break;case 118:keyCode=e.CtrlShiftF7;break;case 119:keyCode=e.CtrlShiftF8;
break;case 120:keyCode=e.CtrlShiftF9;break;case 121:keyCode=e.CtrlShiftF10;break;
case 32:keyCode=e.CtrlShiftSpace;break;case 48:keyCode=e.CtrlShiftKey0;break;case
49:keyCode=e.CtrlShiftKey1;break;case 50:keyCode=e.CtrlShiftKey2;break;case 51:keyCode=
e.CtrlShiftKey3;break;case 52:keyCode=e.CtrlShiftKey4;break;case 53:keyCode=e.CtrlShiftKey5;
break;case 54:keyCode=e.CtrlShiftKey6;break;case 55:keyCode=e.CtrlShiftKey7;break;
case 56:keyCode=e.CtrlShiftKey8;break;case 57:keyCode=e.CtrlShiftKey9;break;case
96:keyCode=e.CtrlShiftKey0;break;case 97:keyCode=e.CtrlShiftKey1;break;case 98:keyCode=
e.CtrlShiftKey2;break;case 99:keyCode=e.CtrlShiftKey3;break;case 100:keyCode=e.CtrlShiftKey4;
break;case 101:keyCode=e.CtrlShiftKey5;break;case 102:keyCode=e.CtrlShiftKey6;break;
case 103:keyCode=e.CtrlShiftKey7;break;case 104:keyCode=e.CtrlShiftKey8;break;case
105:keyCode=e.CtrlShiftKey9;break;case 65:keyCode=e.CtrlShiftKeyA;break;case 66:
keyCode=e.CtrlShiftKeyB;break;case 67:keyCode=e.CtrlShiftKeyC;break;case 68:keyCode=
e.CtrlShiftKeyD;break;case 69:keyCode=e.CtrlShiftKeyE;break;case 70:keyCode=e.CtrlShiftKeyF;
break;case 71:keyCode=e.CtrlShiftKeyG;break;case 72:keyCode=e.CtrlShiftKeyH;break;
case 73:keyCode=e.CtrlShiftKeyI;break;case 74:keyCode=e.CtrlShiftKeyJ;break;case
75:keyCode=e.CtrlShiftKeyK;break;case 76:keyCode=e.CtrlShiftKeyL;break;case 77:keyCode=
e.CtrlShiftKeyM;break;case 78:keyCode=e.CtrlShiftKeyN;break;case 79:keyCode=e.CtrlShiftKeyO;
break;case 80:keyCode=e.CtrlShiftKeyP;break;case 81:keyCode=e.CtrlShiftKeyQ;break;
case 82:keyCode=e.CtrlShiftKeyR;break;case 83:keyCode=e.CtrlShiftKeyS;break;case
84:keyCode=e.CtrlShiftKeyT;break;case 85:keyCode=e.CtrlShiftKeyU;break;case 86:keyCode=
e.CtrlShiftKeyV;break;case 87:keyCode=e.CtrlShiftKeyW;break;case 88:keyCode=e.CtrlShiftKeyX;
break;case 89:keyCode=e.CtrlShiftKeyY;break;case 90:keyCode=e.CtrlShiftKeyZ;break;
}else if(av.ctrlKey&&!av.shiftKey&&!av.altKey)switch(av.keyCode){case 13:keyCode=
e.CtrlEnter;break;case 27:keyCode=e.CtrlEscape;break;case 8:keyCode=e.CtrlBackspace;
break;case 9:keyCode=e.CtrlTab;break;case 40:keyCode=e.CtrlDown;break;case 38:keyCode=
e.CtrlUp;break;case 37:keyCode=e.CtrlLeft;break;case 39:keyCode=e.CtrlRight;break;
case 36:keyCode=e.CtrlHome;break;case 35:keyCode=e.CtrlEnd;break;case 33:keyCode=
e.CtrlPageUp;break;case 34:keyCode=e.CtrlPageDown;break;case 45:keyCode=e.CtrlInsert;
break;case 46:keyCode=e.CtrlDelete;break;case 112:keyCode=e.CtrlF1;break;case 113:
keyCode=e.CtrlF2;break;case 114:keyCode=e.CtrlF3;break;case 115:keyCode=e.CtrlF4;
break;case 116:keyCode=e.CtrlF5;break;case 117:keyCode=e.CtrlF6;break;case 118:keyCode=
e.CtrlF7;break;case 119:keyCode=e.CtrlF8;break;case 120:keyCode=e.CtrlF9;break;case
121:keyCode=e.CtrlF10;break;case 32:keyCode=e.CtrlSpace;break;case 48:keyCode=e.
CtrlKey0;break;case 49:keyCode=e.CtrlKey1;break;case 50:keyCode=e.CtrlKey2;break;
case 51:keyCode=e.CtrlKey3;break;case 52:keyCode=e.CtrlKey4;break;case 53:keyCode=
e.CtrlKey5;break;case 54:keyCode=e.CtrlKey6;break;case 55:keyCode=e.CtrlKey7;break;
case 56:keyCode=e.CtrlKey8;break;case 57:keyCode=e.CtrlKey9;break;case 96:keyCode=
e.CtrlKey0;break;case 97:keyCode=e.CtrlKey1;break;case 98:keyCode=e.CtrlKey2;break;
case 99:keyCode=e.CtrlKey3;break;case 100:keyCode=e.CtrlKey4;break;case 101:keyCode=
e.CtrlKey5;break;case 102:keyCode=e.CtrlKey6;break;case 103:keyCode=e.CtrlKey7;break;
case 104:keyCode=e.CtrlKey8;break;case 105:keyCode=e.CtrlKey9;break;case 65:keyCode=
e.CtrlKeyA;break;case 66:keyCode=e.CtrlKeyB;break;case 67:keyCode=e.CtrlKeyC;break;
case 68:keyCode=e.CtrlKeyD;break;case 69:keyCode=e.CtrlKeyE;break;case 70:keyCode=
e.CtrlKeyF;break;case 71:keyCode=e.CtrlKeyG;break;case 72:keyCode=e.CtrlKeyH;break;
case 73:keyCode=e.CtrlKeyI;break;case 74:keyCode=e.CtrlKeyJ;break;case 75:keyCode=
e.CtrlKeyK;break;case 76:keyCode=e.CtrlKeyL;break;case 77:keyCode=e.CtrlKeyM;break;
case 78:keyCode=e.CtrlKeyN;break;case 79:keyCode=e.CtrlKeyO;break;case 80:keyCode=
e.CtrlKeyP;break;case 81:keyCode=e.CtrlKeyQ;break;case 82:keyCode=e.CtrlKeyR;break;
case 83:keyCode=e.CtrlKeyS;break;case 84:keyCode=e.CtrlKeyT;break;case 85:keyCode=
e.CtrlKeyU;break;case 86:keyCode=e.CtrlKeyV;break;case 87:keyCode=e.CtrlKeyW;break;
case 88:keyCode=e.CtrlKeyX;break;case 89:keyCode=e.CtrlKeyY;break;case 90:keyCode=
e.CtrlKeyZ;break;}else if(!av.ctrlKey&&!av.shiftKey&&!av.altKey)switch(av.keyCode
){case 13:keyCode=e.Enter;break;case 27:keyCode=e.Escape;break;case 8:keyCode=e.
Backspace;break;case 9:keyCode=e.Tab;break;case 40:keyCode=e.Down;break;case 38:
keyCode=e.Up;break;case 37:keyCode=e.Left;break;case 39:keyCode=e.Right;break;case
36:keyCode=e.Home;break;case 35:keyCode=e.End;break;case 33:keyCode=e.PageUp;break;
case 34:keyCode=e.PageDown;break;case 45:keyCode=e.Insert;break;case 46:keyCode=
e.Delete;break;case 112:keyCode=e.F1;break;case 113:keyCode=e.F2;break;case 114:
keyCode=e.F3;break;case 115:keyCode=e.F4;break;case 116:keyCode=e.F5;break;case 117:
keyCode=e.F6;break;case 118:keyCode=e.F7;break;case 119:keyCode=e.F8;break;case 120:
keyCode=e.F9;break;case 121:keyCode=e.F10;break;}else if(!av.ctrlKey&&!av.shiftKey&&
av.altKey)switch(av.keyCode){case 13:keyCode=e.AltEnter;break;case 27:keyCode=e.
AltEscape;break;case 8:keyCode=e.AltBackspace;break;case 9:keyCode=e.AltTab;break;
case 40:keyCode=e.AltDown;break;case 38:keyCode=e.AltUp;break;case 37:keyCode=e.
AltLeft;break;case 39:keyCode=e.AltRight;break;case 36:keyCode=e.AltHome;break;case
35:keyCode=e.AltEnd;break;case 33:keyCode=e.AltPageUp;break;case 34:keyCode=e.AltPageDown;
break;case 45:keyCode=e.AltInsert;break;case 46:keyCode=e.AltDelete;break;case 112:
keyCode=e.AltF1;break;case 113:keyCode=e.AltF2;break;case 114:keyCode=e.AltF3;break;
case 115:keyCode=e.AltF4;break;case 116:keyCode=e.AltF5;break;case 117:keyCode=e.
AltF6;break;case 118:keyCode=e.AltF7;break;case 119:keyCode=e.AltF8;break;case 120:
keyCode=e.AltF9;break;case 121:keyCode=e.AltF10;break;}else if(!av.ctrlKey&&av.shiftKey&&
av.altKey)switch(av.keyCode){case 13:keyCode=e.AltShiftEnter;break;case 27:keyCode=
e.AltShiftEscape;break;case 8:keyCode=e.AltShiftBackspace;break;case 9:keyCode=e.
AltShiftTab;break;case 40:keyCode=e.AltShiftDown;break;case 38:keyCode=e.AltShiftUp;
break;case 37:keyCode=e.AltShiftLeft;break;case 39:keyCode=e.AltShiftRight;break;
case 36:keyCode=e.AltShiftHome;break;case 35:keyCode=e.AltShiftEnd;break;case 33:
keyCode=e.AltShiftPageUp;break;case 34:keyCode=e.AltShiftPageDown;break;case 45:
keyCode=e.AltShiftInsert;break;case 46:keyCode=e.AltShiftDelete;break;case 112:keyCode=
e.AltShiftF1;break;case 113:keyCode=e.AltShiftF2;break;case 114:keyCode=e.AltShiftF3;
break;case 115:keyCode=e.AltShiftF4;break;case 116:keyCode=e.AltShiftF5;break;case
117:keyCode=e.AltShiftF6;break;case 118:keyCode=e.AltShiftF7;break;case 119:keyCode=
e.AltShiftF8;break;case 120:keyCode=e.AltShiftF9;break;case 121:keyCode=e.AltShiftF10;
break;}else if(!av.ctrlKey&&av.shiftKey&&!av.altKey)switch(av.keyCode){case 13:keyCode=
e.ShiftEnter;break;case 27:keyCode=e.ShiftEscape;break;case 8:keyCode=e.ShiftBackspace;
break;case 9:keyCode=e.ShiftTab;break;case 40:keyCode=e.ShiftDown;break;case 38:
keyCode=e.ShiftUp;break;case 37:keyCode=e.ShiftLeft;break;case 39:keyCode=e.ShiftRight;
break;case 36:keyCode=e.ShiftHome;break;case 35:keyCode=e.ShiftEnd;break;case 33:
keyCode=e.ShiftPageUp;break;case 34:keyCode=e.ShiftPageDown;break;case 45:keyCode=
e.ShiftInsert;break;case 46:keyCode=e.ShiftDelete;break;case 112:keyCode=e.ShiftF1;
break;case 113:keyCode=e.ShiftF2;break;case 114:keyCode=e.ShiftF3;break;case 115:
keyCode=e.ShiftF4;break;case 116:keyCode=e.ShiftF5;break;case 117:keyCode=e.ShiftF6;
break;case 118:keyCode=e.ShiftF7;break;case 119:keyCode=e.ShiftF8;break;case 120:
keyCode=e.ShiftF9;break;case 121:keyCode=e.ShiftF10;break;}iA=u1(keyCode,e);if(iA===
this.eb)keyCode=this.eb;else if(keyCode===this.eb)iA=this.eb;}if((keyCode===e.NoKey
)&&!charCode&&(!pm||((this.eb===e.NoKey)&&!this.fX)))return;try{if((this.eb!==e.
NoKey)&&((keyCode!==this.eb)||pm)){this.cp.DriveKeyboardHitting(this.eb,0,false);
this.eb=e.NoKey;}if(this.fX&&((charCode!==this.fX)||pm)){this.cp.DriveKeyboardHitting(
e.NoKey,this.fX,false);this.fX=0;}if(charCode&&this.cp.DriveKeyboardHitting(e.NoKey
,charCode,true))this.fX=charCode;else if((iA!==keyCode)&&(iA!==e.NoKey)&&this.cp.
DriveKeyboardHitting(iA,0,true))this.eb=iA;else if((keyCode!==e.NoKey)&&this.cp.
DriveKeyboardHitting(keyCode,0,true))this.eb=keyCode;this._RequestUpdate();}catch(
bU){console.log("EmWi error: "+bU+"!");}av.stopPropagation();av.preventDefault();
};f.vy=function(av){var e=this.Core.KeyCode;try{if(this.eb!==e.NoKey){if(this.cp.
DriveKeyboardHitting)this.cp.DriveKeyboardHitting(this.eb,0,false);else{var le=this.
_NewObject(this.Core.KeyEvent,0);le.Initialize(this.eb,false);this.cp.DispatchEvent(
le);}this.eb=e.NoKey;this._RequestUpdate();}if(this.fX){if(this.cp.DriveKeyboardHitting
)this.cp.DriveKeyboardHitting(e.NoKey,this.fX,false);else{var le=this._NewObject(
this.Core.KeyEvent,0);le.Initialize2(this.fX,false);this.cp.DispatchEvent(le);}this.
fX=0;this._RequestUpdate();}}catch(bU){console.log("EmWi error: "+bU+"!");}};function
n6(av,ec){av.stopPropagation();av.preventDefault();var h4=ec.getBoundingClientRect(
);var l=av.clientX-h4.left;var z=av.clientY-h4.top;l=((ec.width*l)/ec.offsetWidth
)|0;z=((ec.height*z)/ec.offsetHeight)|0;return[l,z];};f.vA=function(av){if(this.
hI||av.wo||this.e3)return;this.e2.focus();document.addEventListener("mousemove",
this.jq,true);document.addEventListener("mouseup",this.mw,true);this.hI=true;var
a5=n6(av,this.e2);try{this.cp.DriveCursorHitting(true,0,a5);this._RequestUpdate(
);}catch(bU){console.log("EmWi error: "+bU+"!");}};f.vC=function(av){if(!this.hI||
av.wo)return;document.removeEventListener("mousemove",this.jq,true);document.removeEventListener(
"mouseup",this.mw,true);this.hI=false;var a5=n6(av,this.e2);try{this.cp.DriveCursorHitting(
false,0,a5);this._RequestUpdate();}catch(bU){console.log("EmWi error: "+bU+"!");
}};f.vB=function(av){if(!this.hI)return;var a5=n6(av,this.e2);try{this.cp.DriveCursorMovement(
a5);this._RequestUpdate();}catch(bU){console.log("EmWi error: "+bU+"!");}};function
n8(rm,ec){var h4=ec.getBoundingClientRect();var l=rm.clientX-h4.left;var z=rm.clientY-
h4.top;l=((ec.width*l)/ec.offsetWidth)|0;z=((ec.height*z)/ec.offsetHeight)|0;return[
l,z];}f.vG=function(av){var lB=this.e3;var pN=(new Date()).getTime();if(this.hI||(
this.e3===10))return;for(var d=0;d<av.changedTouches.length;d++){var eA=av.changedTouches[
d];var b8=0;var h4=[eA.screenX-16,eA.screenY-16,eA.screenX+32,eA.screenY+32];while((
b8<10)&&((this.jw[b8]!==undefined)||(this.ox[b8]===undefined)||((pN-this.qY[b8])>
500)||!this.vt(h4,this.ox[b8])))b8++;if(b8==10)for(b8=0;(b8<10)&&(this.jw[b8]!==
undefined);)b8++;if(b8==10)return;this.jw[b8]=eA.identifier;this.e3++;try{this.cp.
DriveMultiTouchHitting(true,b8,n8(eA,this.e2));this._RequestUpdate();}catch(bU){
console.log("EmWi error: "+bU+"!");}}if(lB!==this.e3){this.e2.focus();av.stopPropagation(
);av.preventDefault();}};f.vE=function(av){var lB=this.e3;var pN=(new Date()).getTime(
);if(this.e3===0)return;for(var d=0;d<av.changedTouches.length;d++){var eA=av.changedTouches[
d];var b8=9;while((b8>=0)&&(this.jw[b8]!==eA.identifier))b8--;if(b8>=0){this.ox[
b8]=[eA.screenX,eA.screenY];this.qY[b8]=pN;this.jw[b8]=undefined;this.e3--;try{this.
cp.DriveMultiTouchHitting(false,b8,n8(eA,this.e2));this._RequestUpdate();}catch(
bU){console.log("EmWi error: "+bU+"!");}}}if(lB!==this.e3){av.stopPropagation();
av.preventDefault();}};f.vF=function(av){var lB=this.e3;if(this.e3===0)return;for(
var d=0;d<av.changedTouches.length;d++){var eA=av.changedTouches[d];var b8=9;while((
b8>=0)&&(this.jw[b8]!==eA.identifier))b8--;if(b8>=0){try{this.cp.DriveMultiTouchMovement(
b8,n8(eA,this.e2));this._RequestUpdate();}catch(bU){console.log("EmWi error: "+bU+
"!");}}}if(lB!==this.e3){av.stopPropagation();av.preventDefault();}};f._Init=function(
ec,e8){var fe=this;var aW=document.getElementById(ec);var rv=this.qJ();var b=null;
var aq={};var bitmap={};this.vs=(new Date()).getTime();if(e8&&e8.hasOwnProperty(
"Debug"))this.cM=e8.Debug;if(e8&&e8.hasOwnProperty("FullScreenUpdate"))this.mr=e8.
FullScreenUpdate;if(e8&&e8.hasOwnProperty("Alpha"))this.oj=e8.Alpha;if(e8&&e8.hasOwnProperty(
"OnKeyEvent"))this.op=e8.OnKeyEvent;if(this.cM)console.log("EmWi debug: Initializing application '"+
rv._className+"'.");console.log("EmWi info: Init application for canvas '"+ec+"'. "+
"FullScreenUpdate="+this.mr+", "+"Alpha="+this.oj+", "+"Debug="+this.cM+".");if(
!aW){console.log("EmWi error: Initialization failed. The canvas element '"+ec+"' doesn't exist!"
);return false;}var f1={depth:false,antialias:false,alpha:this.oj,preserveDrawingBuffer:
!this.mr};b=aW.getContext("webgl",f1)||aW.getContext("experimental-webgl",f1);if(
!b){console.log("EmWi error: WebGL context creation failed.");return false;}this.
hH=b.getParameter(b.MAX_TEXTURE_SIZE);if(this.vr>this.hH)this.vr=this.hH;this.vq=(
this.mu/this.hG)|0;b.clearColor(0.0,0.0,0.0,0.0);b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL
,true);b.pixelStorei(b.UNPACK_ALIGNMENT,1);b.blendEquation(b.FUNC_ADD);b.blendFunc(
b.ONE,b.ONE_MINUS_SRC_ALPHA);b.disable(b.BLEND);b.c2=new ArrayBuffer(14*11*4);b.
hx=new Float32Array(b.c2);b.kg=new Uint32Array(b.c2);b.nX=0;b.n0=1;b.nZ=2;b.nW=3;
b.nY=4;b.bindBuffer(b.ARRAY_BUFFER,b.createBuffer());b.bufferData(b.ARRAY_BUFFER
,b.c2,b.STREAM_DRAW);b.vertexAttribPointer(b.nX,2,b.FLOAT,false,11*4,0*4);b.vertexAttribPointer(
b.n0,3,b.FLOAT,false,11*4,2*4);b.vertexAttribPointer(b.nZ,4,b.UNSIGNED_BYTE,true
,11*4,5*4);b.vertexAttribPointer(b.nW,3,b.FLOAT,false,11*4,6*4);b.vertexAttribPointer(
b.nY,2,b.FLOAT,false,11*4,9*4);b.enableVertexAttribArray(b.nX);b.enableVertexAttribArray(
b.n0);b.enableVertexAttribArray(b.nZ);b.enableVertexAttribArray(b.nW);b.enableVertexAttribArray(
b.nY);this.kx=b.createTexture();b.bindTexture(b.TEXTURE_2D,this.kx);b.texParameteri(
b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER
,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(
b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.ALPHA
,this.mu,this.mu,0,b.ALPHA,b.UNSIGNED_BYTE,null);this.jo=new Uint32Array(this.hG
*this.hG/32);aq.Framebuffer=b.getParameter(b.FRAMEBUFFER_BINDING);aq.Format=this.
cC;aq.Width=aW.width;aq.Height=aW.height;aq.jh=aW.width;aq.jg=aW.height;aq.dc=1/
aW.width;aq.db=1/aW.height;aq.fl=2/aW.width;aq.fk=2/aW.height;aq.cL=null;bitmap.
Format=this.cC;bitmap.dd=[aq];bitmap.FrameSize=[aW.width,aW.height];bitmap.FrameDelay=
0;bitmap.NoOfFrames=1;bitmap.cd=[{aP:bitmap.dd[0],aH:[0,0]}];if(!uJ(b)){console.
log("EmWi error: WebGL initialization failed.");return false;}if(this.cM)eX(b);b.
tm=[0,0,0,-1,0,0,0,-1,0,0,0,0,0,0,0,1];this.e2=aW;this.ai=b;this.hF=bitmap;try{this.
cp=this._NewObject(rv,0);this.cp.Initialize(this.aaF);}catch(bU){console.log("EmWi error: "+
bU+"!");this._Done();return false;}function st(av){fe.vA(av);}function yk(av){fe.
vC(av);}function pr(av){fe.vB(av);}function s1(av){fe.vG(av);}function pS(av){fe.
vE(av);}function s0(av){fe.vF(av);}function ny(av){fe.vz(av);}function rx(av){fe.
vy(av);}this.oo=st;this.mw=yk;this.jq=pr;this.q4=s1;this.oy=pS;this.q3=s0;this.mv=
ny;this.zh=rx;aW.addEventListener("mousedown",st,true);aW.addEventListener("mousemove"
,pr,false);aW.addEventListener("mouseout",pr,false);aW.addEventListener("touchstart"
,s1,true);aW.addEventListener("touchend",pS,false);aW.addEventListener("touchcancel"
,pS,false);aW.addEventListener("touchmove",s0,false);aW.addEventListener("keydown"
,ny,true);aW.addEventListener("keyup",ny,false);aW.addEventListener("keypress",ny
,false);aW.addEventListener("blur",rx,false);this._RequestUpdate();this.qZ();this.
_LockObject(this.cp);aW.focus();return true;};f._Done=function(){if(this.cM)console.
log("EmWi debug: De-Initializing application '"+this.qJ()._className+"'.");if(this.
e2&&this.oo){var aW=this.e2;aW.removeEventListener("mousedown",this.oo,true);aW.
removeEventListener("mousemove",this.jq,false);aW.removeEventListener("mouseout"
,this.jq,false);aW.removeEventListener("touchstart",this.q4,true);aW.removeEventListener(
"touchend",this.oy,false);aW.removeEventListener("touchcancel",this.oy,false);aW.
removeEventListener("touchmove",this.q3,false);aW.removeEventListener("keydown",
this.mv,true);aW.removeEventListener("keyup",this.mv,false);aW.removeEventListener(
"keypress",this.mv,false);document.removeEventListener("mousemove",this.jq,true);
document.removeEventListener("mouseup",this.mw,true);delete this.oo;delete this.
mw;delete this.jq;delete this.q4;delete this.oy;delete this.q3;delete this.mv;}if(
this.ai){fo(this.ai,null,false);mj(this.ai,null,false);ea(this.ai,null,null);this.
ai.clear(this.ai.COLOR_BUFFER_BIT);this.ai.flush();this.ai.finish();this.ai.km=null;
this.ai.iK=null;this.ai.iL=null;this.ai.lR=null;this.ai.iM=null;this.ai.lS=null;
this.ai.hB=null;this.ai.lT=null;this.ai.lU=null;this.ai.lV=null;this.ai.lW=null;
this.ai.kn=null;this.ai.ko=null;this.ai.lX=null;this.ai.lY=null;this.ai.d7=null;
this.ai.d8=null;this.ai.d9=null;this.ai.d_=null;this.ai.d$=null;this.ai.iS=null;
this.ai.iU=null;this.ai.iW=null;this.ai.iY=null;this.ai.i0=null;this.ai.i2=null;
this.ai.i3=null;this.ai.i4=null;this.ai.i5=null;this.ai.i6=null;this.ai.i7=null;
this.ai.i8=null;this.ai.i9=null;this.ai.l2=null;this.ai.l4=null;this.ai.i_=null;
this.ai.i$=null;this.ai.ja=null;this.ai.jb=null;this.ai.l9=null;this.ai.l$=null;
this.ai.jc=null;this.ai.jd=null;this.ai.je=null;this.ai.jf=null;this.ai.me=null;
this.ai.mg=null;this.ai.kp=null;this.ai.kq=null;this.ai.kr=null;this.ai.iN=null;
this.ai.iO=null;this.ai.iP=null;this.ai.iQ=null;this.ai.iR=null;this.ai.iT=null;
this.ai.iV=null;this.ai.iX=null;this.ai.iZ=null;this.ai.i1=null;this.ai.lZ=null;
this.ai.l0=null;this.ai.l1=null;this.ai.l3=null;this.ai.l5=null;this.ai.l6=null;
this.ai.l7=null;this.ai.l8=null;this.ai.l_=null;this.ai.ma=null;this.ai.mb=null;
this.ai.mc=null;this.ai.md=null;this.ai.mf=null;this.ai.mh=null;eX(this.ai);}while(
this.gS)oh(this,this.gS);this.kx=null;this.jo=null;this.gS=null;this.mt=null;this.
hF=null;this.ai=null;this.e2=null;this.dO=null;this.eE=null;if(this.cp)this._UnlockObject(
this.cp);this.cp=null;try{this.qX();}catch(bU){console.log("EmWi error: "+bU+"!"
);}if(this.cM)console.log("EmWi debug: "+this.hJ+" objects after the final GC run."
);this.ju=[];this.jr=null;this.hJ=0;this.qS=0;this.kB=false;this.kA=false;this.hI=
false;};f.aam=function(aF,ah){return[aF[0]+ah[0],aF[1]+ah[1],aF[2]+ah[0],aF[3]+ah[
1]];};f.aal=function(aF,ah){return[aF[0]-ah[0],aF[1]-ah[1],aF[2]-ah[0],aF[3]-ah[
1]];};f.kz=function(cX,cY){var cs=cX[0];var cu=cX[1];var ct=cX[2];var cv=cX[3];var
d3=cY[0];var d5=cY[1];var d4=cY[2];var d6=cY[3];if(ct<=cs)cs=ct=0;if(cv<=cu)cu=cv=
0;if(d4<=d3)d3=d4=0;if(d6<=d5)d5=d6=0;if(cs<d3)cs=d3;if(ct>d4)ct=d4;if(cu<d5)cu=
d5;if(cv>d6)cv=d6;if(ct<=cs)cs=ct=0;if(cv<=cu)cu=cv=0;return[cs,cu,ct,cv];};f.z6=
function(cX,cY){var cs=cX[0];var cu=cX[1];var ct=cX[2];var cv=cX[3];var d3=cY[0];
var d5=cY[1];var d4=cY[2];var d6=cY[3];if(ct<=cs)cs=ct=0;if(cv<=cu)cu=cv=0;if(d4<=
d3)d3=d4=0;if(d6<=d5)d5=d6=0;if((cs===ct)||(cu===cv))return cY;if((d3===d4)||(d5===
d6))return cX;if(cs<d3)cs=d3;if(ct>d4)ct=d4;if(cu<d5)cu=d5;if(cv>d6)cv=d6;if(ct<=
cs)cs=ct=0;if(cv<=cu)cu=cv=0;return[cs,cu,ct,cv];};f.vS=function(cX,cY){var cs=cX[
0];var cu=cX[1];var ct=cX[2];var cv=cX[3];var d3=cY[0];var d5=cY[1];var d4=cY[2];
var d6=cY[3];if(ct<=cs)cs=ct=0;if(cv<=cu)cu=cv=0;if(d4<=d3)d3=d4=0;if(d6<=d5)d5=
d6=0;if((cs===ct)||(cu===cv))return cY;if((d3===d4)||(d5===d6))return cX;if(cs>d3
)cs=d3;if(ct<d4)ct=d4;if(cu>d5)cu=d5;if(cv<d6)cv=d6;if(ct<=cs)cs=ct=0;if(cv<=cu)
cu=cv=0;return[cs,cu,ct,cv];};f.z4=function(aF,mE){return[aF[0]-mE[0],aF[1]-mE[1
],aF[2]+mE[0],aF[3]+mE[1]];};f.aaS=function(aF,mS){return[aF[0],mS,aF[2],aF[3]];
};f.aaQ=function(aF,mR){return[aF[0],aF[1],mR,aF[3]];};f.aaP=function(aF,bl){return[
bl,aF[1],bl+aF[2]-aF[0],aF[3]];};f.aaR=function(aF,bA){return[aF[0],bA,aF[2],bA+
aF[3]-aF[1]];};f.aaO=function(aF,wl){return[aF[0],aF[1],aF[0]+wl,aF[3]];};f.aaL=
function(aF,v2){return[aF[0],aF[1],aF[2],aF[1]+v2];};f.aaM=function(aF,mL){return[
mL[0],mL[1],mL[0]+aF[2]-aF[0],mL[1]+aF[3]-aF[1]];};f.aaN=function(aF,bI){return[
aF[0],aF[1],aF[0]+bI[0],aF[1]+bI[1]];};f.z9=function(cX,cY){return(cX[0]===cY[0]
)&&(cX[1]===cY[1])&&(cX[2]===cY[2])&&(cX[3]===cY[3]);};f.vt=function(aF,ds){if((
ds[0]<aF[0])||(ds[0]>=aF[2]))return false;if((ds[1]<aF[1])||(ds[1]>=aF[3]))return false;
return true;};f.zS=function(aF){return(aF[2]-aF[0])*(aF[3]-aF[1]);};f.zT=function(
aF){var l=aF[0];var z=aF[1];return[l+((aF[2]-l)>>1),z+((aF[3]-z)>>1)];};f.zR=function(
aF){return[Math.abs(aF[0]),Math.abs(aF[1]),Math.abs(aF[2]),Math.abs(aF[3])];};f.
zV=function(){var af=arguments.length;var aM=arguments[0];aM=[aM[0],aM[1],aM[2],
aM[3]];for(var d=1;d<af;d++){var g=arguments[d];if(g[0]<aM[0])aM[0]=g[0];if(g[1]<
aM[1])aM[1]=g[1];if(g[2]<aM[2])aM[2]=g[2];if(g[3]<aM[3])aM[3]=g[3];}return aM;};
f.zU=function(){var af=arguments.length;var aM=arguments[0];aM=[aM[0],aM[1],aM[2
],aM[3]];for(var d=1;d<af;d++){var g=arguments[d];if(g[0]>aM[0])aM[0]=g[0];if(g[
1]>aM[1])aM[1]=g[1];if(g[2]>aM[2])aM[2]=g[2];if(g[3]>aM[3])aM[3]=g[3];}return aM;
};f.aak=function(ds,ah){return[ds[0]+ah[0],ds[1]+ah[1]];};f.aaj=function(ds,ah){
return[ds[0]-ah[0],ds[1]-ah[1]];};f.z8=function(ri,rj){return(ri[0]===rj[0])&&(ri[
1]===rj[1]);};f.zN=function(ds){return[Math.abs(ds[0]),Math.abs(ds[1])];};f.zP=function(
){var af=arguments.length;var aM=arguments[0];aM=[aM[0],aM[1]];for(var d=1;d<af;
d++){var g=arguments[d];if(g[0]<aM[0])aM[0]=g[0];if(g[1]<aM[1])aM[1]=g[1];}return aM;
};f.zO=function(){var af=arguments.length;var aM=arguments[0];aM=[aM[0],aM[1]];for(
var d=1;d<af;d++){var g=arguments[d];if(g[0]>aM[0])aM[0]=g[0];if(g[1]>aM[1])aM[1
]=g[1];}return aM;};f.aaA=function(be,bg){var aI=(be&0xFF)+(bg&0xFF);var dk=((be>>
8)&0xFF)+((bg>>8)&0xFF);var bm=((be>>16)&0xFF)+((bg>>16)&0xFF);var b4=((be>>24)&
0xFF)+((bg>>24)&0xFF);if(aI>255)aI=255;if(dk>255)dk=255;if(bm>255)bm=255;if(b4>255
)b4=255;return aI|(dk<<8)|(bm<<16)|(b4<<24);};f.aai=function(be,bg){var aI=(be&0xFF
)-(bg&0xFF);var dk=((be>>8)&0xFF)-((bg>>8)&0xFF);var bm=((be>>16)&0xFF)-((bg>>16
)&0xFF);var b4=((be>>24)&0xFF)-((bg>>24)&0xFF);if(aI<0)aI=0;if(dk<0)dk=0;if(bm<0
)bm=0;if(b4<0)b4=0;return aI|(dk<<8)|(bm<<16)|(b4<<24);};f.zf=function(be,bg){var
aI=(bg&0xFF);var dk=((bg>>8)&0xFF);var bm=((bg>>16)&0xFF);var b4=((bg>>24)&0xFF);
var nz=255-b4;aI=((aI*b4)+((be&0xFF)*nz))/255;dk=((dk*b4)+(((be>>8)&0xFF)*nz))/255;
bm=((bm*b4)+(((be>>16)&0xFF)*nz))/255;b4=255-((nz*(255-((be>>24)&0xFF)))/255);if(
aI>255)aI=255;if(dk>255)dk=255;if(bm>255)bm=255;if(b4>255)b4=255;return aI|(dk<<
8)|(bm<<16)|(b4<<24);};f.zg=function(bc,gV){var aI=(bc&0xFF);var dk=((bc>>8)&0xFF
);var bm=((bc>>16)&0xFF);var b4=((bc>>24)&0xFF);if(gV<0)gV=0;if(gV>255)gV=255;aI=(
aI*gV)/255;dk=(dk*gV)/255;bm=(bm*gV)/255;b4=(b4*gV)/255;return aI|(dk<<8)|(bm<<16
)|(b4<<24);};f.zF=function(){var af=arguments.length;var aM=arguments[0];var c=aM&
0x000000FF;var aZ=aM&0x0000FF00;var iB=aM&0x00FF0000;var iC=(aM>>8)&0x00FF0000;for(
var d=1;d<af;d++){var g=arguments[d];var b_=g&0x000000FF;var bV=g&0x0000FF00;var
ly=g&0x00FF0000;var lz=(g>>8)&0x00FF0000;if(b_<c)c=b_;if(bV<aZ)aZ=bV;if(ly<iB)iB=
ly;if(lz<iC)iC=lz;}return c|aZ|iB|(iC<<8);};f.zE=function(){var af=arguments.length;
var aM=arguments[0];var c=aM&0x000000FF;var aZ=aM&0x0000FF00;var iB=aM&0x00FF0000;
var iC=aM&0xFF000000;for(var d=1;d<af;d++){var g=arguments[d];var b_=g&0x000000FF;
var bV=g&0x0000FF00;var ly=g&0x00FF0000;var lz=g&0xFF000000;if(b_>c)c=b_;if(bV>aZ
)aZ=bV;if(ly>iB)iB=ly;if(lz>iC)iC=lz;}return c|aZ|iB|iC;};f.aar=function(ce,ac,b6
){if((b6!==2)&&(b6!==8)&&(b6!==16))b6=10;if(ac>128)ac=128;var g=ce.toString(b6);
var hz=ac-g.length;if(hz>0)g=f.mA.slice(0,hz)+g;return g;};f.aaq=function(ce,ac,
b6){if((b6!==2)&&(b6!==8)&&(b6!==16))b6=10;var aM=(ce<0)?-ce:ce;if(ac>128)ac=128;
var g=aM.toString(b6);var hz=ac-g.length-((ce<0)?1:0);if(hz>0)g=f.mA.slice(0,hz)+
g;if(ce<0)return"-"+g;else return g;};f.aap=function(ce,ac,kU){if(ac<0)ac=0;if(ac>
32)ac=32;if(kU<0)kU=0;if(kU>32)kU=32;var ls=(ce<0)?"-":"";var g=Math.abs(ce).toFixed(
kU);var hz=ac-g.length-ls.length;if(hz>0)g=f.mA.slice(0,hz)+g;return ls+g;};f.aao=
function(oJ,ac){ac=Math.floor(ac);if(ac<=0)return this.jm;return new Array(ac+1).
join(String.fromCharCode(oJ));};f.aaX=function(k,ac){if(ac<=0)return this.jm;if(
ac>=k.length)return k;return k.slice(0,ac|0);};f.aa4=function(k,ac){if(ac<=0)return this.
jm;if(ac>=k.length)return k;return k.slice(-(ac|0));};f.aaY=function(k,by,ac){var
a6=(by>0)?(by|0):0;var dx=(by+ac)|0;var a1=k.length;if((a6>=a1)||(dx<=0)||(a6>=dx
))return this.jm;if((a6===0)&&(dx>=a1))return k;return k.slice(a6,dx);};f.aaW=function(
jH,k5,by){var sQ=jH.length;var yr=k5.length;if(yr<=0)return jH;if(sQ<=0)return k5;
if(by<0)return k5+jH;if(by>=sQ)return jH+k5;return jH.slice(0,(by|=0))+k5+jH.slice(
by);};f.aa3=function(k,by,ac){var a6=(by>=0)?(by|0):0;var dx=(by+ac)|0;var a1=k.
length;if((a6>=a1)||(dx<=0)||(a6>=dx))return k;return k.slice(0,a6)+k.slice(dx);
};f.vQ=function(k,hQ,b6){if((b6!==2)&&(b6!==8)&&(b6!==16))b6=10;var g=parseInt(k
,b6);if(!isNaN(g))return g;return hQ;};f.aa1=function(k,hQ,b6){if((b6!==2)&&(b6!==
8)&&(b6!==16))b6=10;var g=parseInt(k,b6);if(!isNaN(g)){if(g<0)g+=0x100000000;return g;
}return hQ;};f.aa0=f.vQ;f.aa2=function(k,hQ,b6){if((b6!==2)&&(b6!==8)&&(b6!==16)
)b6=10;var g=parseInt(k,b6);if(!isNaN(g)){if(g<0)g+=0x10000000000000000;return g;
}return hQ;};f.aaZ=function(k,hQ){var g=parseFloat(k);if(!isNaN(g))return g;return hQ;
};f.aaT=function(k,by,oJ){if((by<0)||(by>=k.length))return k;return k.slice(0,by
)+String.fromCharCode(oJ)+k.slice(by+1);};f.z_=function(kV,kW){if(!kV&&!kW)return true;
if(!kV||!kW)return false;return(kV[0]===kW[0])&&(kV[1]===kW[1])&&(kV[2]===kW[2]);
};f.z$=function(mN,mO){if(!mN&&!mO)return true;if(!mN||!mO)return false;return(mN[
0]===mO[0])&&(mN[1]===mO[1]);};f.aaC=function(k6,o1){return(k6+((o1-k6)*Math.random(
)))|0;};f.aaB=function(k6,o1){return k6+((o1-k6)*Math.random());};f.zu=function(
ce){return ce-Math.trunc(ce);};f.aaa=function(bl,bA){return Math.sqrt((bl*bl)+(bA
*bA));};f.aab=function(ds){return Math.sqrt((ds[0]*ds[0])+(ds[1]*ds[1]));};function
eX(a){var ru=false;var sb;while((sb=a.getError())!==a.NO_ERROR){console.log("EmWi error: WebGL error '"+
sb+"' reported.");ru=true;}return ru;}function i(wi,v$){return wi.replace(new RegExp(
"{[0-9A-Za-z]}","g"),function(yg){return v$[yg.substr(1,1)]||"";});}var u_="precision mediump float;\n"+
"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+"\n"+"void main()\n"+
"{\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+"}\n";
var u$="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute lowp    vec4 src_clr;\n"+"varying   lowp    vec4 src_clr_var;\n"+"\n"+
"void main()\n"+"{\n"+"  src_clr_var = vec4( src_clr.rgb * src_clr.a, src_clr.a );\n"+
"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+"}\n";var va=
"precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute highp   vec3 src_pos;\n"+"varying   highp   vec3 src_pos_var;\n"+"\n"+
"void main()\n"+"{\n"+"  src_pos_var = src_pos;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var vb="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute highp   vec3 src_pos;\n"+"attribute lowp    vec4 src_clr;\n"+"varying   highp   vec3 src_pos_var;\n"+
"varying   lowp    vec4 src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  src_clr_var = vec4( src_clr.rgb * src_clr.a, src_clr.a );\n"+
"  src_pos_var = src_pos;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var vc="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute highp   vec3 src_pos;\n"+"varying   highp   vec3 src_pos_var;\n"+"attribute mediump vec3 clr_pos;\n"+
"varying   mediump vec3 clr_pos_var;\n"+"\n"+"void main()\n"+"{\n"+"  src_pos_var = src_pos;\n"+
"  clr_pos_var = clr_pos;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var vd="precision mediump float;\n"+"uniform   highp   mat4  dst_map;\n"+"attribute highp   vec2  dst_pos;\n"+
"attribute highp   vec3  src_pos;\n"+"varying   highp   vec3  src_pos_var;\n"+"uniform   highp   vec2  src_pxl;\n"+
"uniform   highp   vec2  src_step;\n"+"\n"+"void main()\n"+"{\n"+"  src_pos_var = src_pos * vec3( src_pxl, 1.0 );\n"+
"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+"}\n";var ve=
"precision mediump float;\n"+"uniform   highp   mat4  dst_map;\n"+"attribute highp   vec2  dst_pos;\n"+
"attribute highp   vec3  src_pos;\n"+"varying   highp   vec3  src_pos_var;\n"+"uniform   highp   vec2  src_pxl;\n"+
"uniform   highp   vec2  src_step;\n"+"attribute highp   vec2  msk_pos;\n"+"varying   highp   vec2  msk_pos_var;\n"+
"uniform   highp   vec2  msk_pxl;\n"+"\n"+"void main()\n"+"{\n"+"  src_pos_var = src_pos * vec3( src_pxl, 1.0 );\n"+
"  msk_pos_var = msk_pos * msk_pxl;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var tr="precision mediump float;\n"+"void main()\n"+"{\n"+"  gl_FragColor = vec4( 0.0, 0.0, 0.0, 0.0 );\n"+
"}\n";var ts="precision mediump float;\n"+"varying   lowp vec4 src_clr_var;\n"+"\n"+
"void main()\n"+"{\n"+"  gl_FragColor = src_clr_var;\n"+"}\n";var tt="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_pos_var.xy );\n"+
"}\n";var tu="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2DProj( src, src_pos_var );\n"+
"}\n";var tv="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_pos_var.xy ) * src_clr_var.a;\n"+
"}\n";var tw="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2DProj( src, src_pos_var ) * src_clr_var.a;\n"+
"}\n";var tx="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_pos_var.xy ).a * src_clr_var;\n"+
"}\n";var ty="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2DProj( src, src_pos_var ).a * src_clr_var;\n"+
"}\n";var tz="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+
"uniform   highp   vec2      src_ofs;\n"+"varying   highp   vec3      src_pos_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size );\n"+
"}\n";var tA="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+
"uniform   highp   vec2      src_ofs;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size )\n"+
"                            * src_clr_var.a;\n"+"}\n";var tB="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+"uniform   highp   vec2      src_ofs;\n"+
"varying   highp   vec3      src_pos_var;\n"+"varying   lowp    vec4      src_clr_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size ).a\n"+
"                            * src_clr_var;\n"+"}\n";var tC="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   mediump vec3      clr_pos_var;\n"+"uniform   lowp    vec4      clr_tl;\n"+
"uniform   lowp    vec4      clr_tr;\n"+"uniform   lowp    vec4      clr_br;\n"+
"uniform   lowp    vec4      clr_bl;\n"+"\n"+"void main()\n"+"{\n"+"  float clr_l  = mix( clr_tl.a, clr_bl.a, clr_pos_var.y );\n"+
"  float clr_r  = mix( clr_tr.a, clr_br.a, clr_pos_var.y );\n"+"  float clr    = mix( clr_l,    clr_r,    clr_pos_var.x );\n"+
"  gl_FragColor = texture2D( src, src_pos_var.xy ) * clr;\n"+"}\n";var tD="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   mediump vec3      clr_pos_var;\n"+"uniform   lowp    vec4      clr_tl;\n"+
"uniform   lowp    vec4      clr_tr;\n"+"uniform   lowp    vec4      clr_br;\n"+
"uniform   lowp    vec4      clr_bl;\n"+"\n"+"void main()\n"+"{\n"+"  vec4 clr_l   = mix( clr_tl, clr_bl, clr_pos_var.y );\n"+
"  vec4 clr_r   = mix( clr_tr, clr_br, clr_pos_var.y );\n"+"  vec4 clr     = mix( clr_l,  clr_r,  clr_pos_var.x );\n"+
"  gl_FragColor = texture2D( src, src_pos_var.xy ).a * clr;\n"+"}\n";var tE="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   mediump vec3      clr_pos_var;\n"+"uniform   lowp    vec4      clr_tl;\n"+
"uniform   lowp    vec4      clr_tr;\n"+"uniform   lowp    vec4      clr_br;\n"+
"uniform   lowp    vec4      clr_bl;\n"+"\n"+"void main()\n"+"{\n"+"  vec2  clr_pos = clr_pos_var.xy / clr_pos_var.z;\n"+
"  float clr_l   = mix( clr_tl.a, clr_bl.a, clr_pos.y );\n"+"  float clr_r   = mix( clr_tr.a, clr_br.a, clr_pos.y );\n"+
"  float clr     = mix( clr_l,    clr_r,    clr_pos.x );\n"+"  gl_FragColor  = texture2DProj( src, src_pos_var ) * clr;\n"+
"}\n";var tF="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   mediump vec3      clr_pos_var;\n"+"uniform   lowp    vec4      clr_tl;\n"+
"uniform   lowp    vec4      clr_tr;\n"+"uniform   lowp    vec4      clr_br;\n"+
"uniform   lowp    vec4      clr_bl;\n"+"\n"+"void main()\n"+"{\n"+"  vec2 clr_pos = clr_pos_var.xy / clr_pos_var.z;\n"+
"  vec4 clr_l   = mix( clr_tl, clr_bl, clr_pos.y );\n"+"  vec4 clr_r   = mix( clr_tr, clr_br, clr_pos.y );\n"+
"  vec4 clr     = mix( clr_l,  clr_r,  clr_pos.x );\n"+"  gl_FragColor = texture2DProj( src, src_pos_var ).a * clr;\n"+
"}\n";var aR="precision mediump       float;\n"+"uniform lowp  sampler2D src;\n"+
"varying highp vec3      src_pos_var;\n";var a2="uniform highp vec2      src_step;\n";
var dA="uniform lowp  sampler2D msk;\n"+"varying highp vec2      msk_pos_var;\n"+
"uniform       bool      msk_invert;\n";var fT="uniform highp vec2      msk_step;\n";
var bG="uniform lowp  float     opacity;\n";var cy="uniform lowp  vec4      tint;\n"+
"uniform lowp  float     intensity;\n";var co="uniform highp vec2      clamp_tl;\n"+
"uniform highp vec2      clamp_br;\n";var aS="void main()\n"+"{\n";var aT="}\n";
var em="  vec2 {0}_pos_0  = {0}_pos_var.xy;\n"+"  vec2 {0}_pos_1L = {0}_pos_0  - {0}_step;\n"+
"  vec2 {0}_pos_1R = {0}_pos_0  + {0}_step;\n"+"  vec2 {0}_pos_2L = {0}_pos_1L - {0}_step;\n"+
"  vec2 {0}_pos_2R = {0}_pos_1R + {0}_step;\n";var cj=em+"  vec2 {0}_pos_3L = {0}_pos_2L - {0}_step;\n"+
"  vec2 {0}_pos_3R = {0}_pos_2R + {0}_step;\n"+"  vec2 {0}_pos_4L = {0}_pos_3L - {0}_step;\n"+
"  vec2 {0}_pos_4R = {0}_pos_3R + {0}_step;\n";var en=cj+"  vec2 {0}_pos_5L = {0}_pos_4L - {0}_step;\n"+
"  vec2 {0}_pos_5R = {0}_pos_4R + {0}_step;\n"+"  vec2 {0}_pos_6L = {0}_pos_5L - {0}_step;\n"+
"  vec2 {0}_pos_6R = {0}_pos_5R + {0}_step;\n";var eY=en+"  vec2 {0}_pos_7L = {0}_pos_6L - {0}_step;\n"+
"  vec2 {0}_pos_7R = {0}_pos_6R + {0}_step;\n"+"  vec2 {0}_pos_8L = {0}_pos_7L - {0}_step;\n"+
"  vec2 {0}_pos_8R = {0}_pos_7R + {0}_step;\n";var ji="  src_pos_0  = max( src_pos_0,  clamp_tl - src_pos_0  );\n"+
"  src_pos_0  = min( src_pos_0,  clamp_br - src_pos_0  );\n"+"  src_pos_1L = max( src_pos_1L, clamp_tl - src_pos_1L );\n"+
"  src_pos_1L = min( src_pos_1L, clamp_br - src_pos_1L );\n"+"  src_pos_1R = max( src_pos_1R, clamp_tl - src_pos_1R );\n"+
"  src_pos_1R = min( src_pos_1R, clamp_br - src_pos_1R );\n"+"  src_pos_2L = max( src_pos_2L, clamp_tl - src_pos_2L );\n"+
"  src_pos_2L = min( src_pos_2L, clamp_br - src_pos_2L );\n"+"  src_pos_2R = max( src_pos_2R, clamp_tl - src_pos_2R );\n"+
"  src_pos_2R = min( src_pos_2R, clamp_br - src_pos_2R );\n";var fq=ji+"  src_pos_3L = max( src_pos_3L, clamp_tl - src_pos_3L );\n"+
"  src_pos_3L = min( src_pos_3L, clamp_br - src_pos_3L );\n"+"  src_pos_3R = max( src_pos_3R, clamp_tl - src_pos_3R );\n"+
"  src_pos_3R = min( src_pos_3R, clamp_br - src_pos_3R );\n"+"  src_pos_4L = max( src_pos_4L, clamp_tl - src_pos_4L );\n"+
"  src_pos_4L = min( src_pos_4L, clamp_br - src_pos_4L );\n"+"  src_pos_4R = max( src_pos_4R, clamp_tl - src_pos_4R );\n"+
"  src_pos_4R = min( src_pos_4R, clamp_br - src_pos_4R );\n";var jj=fq+"  src_pos_5L = max( src_pos_5L, clamp_tl - src_pos_5L );\n"+
"  src_pos_5L = min( src_pos_5L, clamp_br - src_pos_5L );\n"+"  src_pos_5R = max( src_pos_5R, clamp_tl - src_pos_5R );\n"+
"  src_pos_5R = min( src_pos_5R, clamp_br - src_pos_5R );\n"+"  src_pos_6L = max( src_pos_6L, clamp_tl - src_pos_6L );\n"+
"  src_pos_6L = min( src_pos_6L, clamp_br - src_pos_6L );\n"+"  src_pos_6R = max( src_pos_6R, clamp_tl - src_pos_6R );\n"+
"  src_pos_6R = min( src_pos_6R, clamp_br - src_pos_6R );\n";var ks=jj+"  src_pos_7L = max( src_pos_7L, clamp_tl - src_pos_7L );\n"+
"  src_pos_7L = min( src_pos_7L, clamp_br - src_pos_7L );\n"+"  src_pos_7R = max( src_pos_7R, clamp_tl - src_pos_7R );\n"+
"  src_pos_7R = min( src_pos_7R, clamp_br - src_pos_7R );\n"+"  src_pos_8L = max( src_pos_8L, clamp_tl - src_pos_8L );\n"+
"  src_pos_8L = min( src_pos_8L, clamp_br - src_pos_8L );\n"+"  src_pos_8R = max( src_pos_8R, clamp_tl - src_pos_8R );\n"+
"  src_pos_8R = min( src_pos_8R, clamp_br - src_pos_8R );\n";var hC="  float msk_0 = texture2D( msk, msk_pos_var.xy ).a;\n";
var od="  float msk_0  = texture2D( msk, msk_pos_0  ).a;\n"+"  float msk_1L = texture2D( msk, msk_pos_1L ).a;\n"+
"  float msk_1R = texture2D( msk, msk_pos_1R ).a;\n"+"  float msk_2L = texture2D( msk, msk_pos_2L ).a;\n"+
"  float msk_2R = texture2D( msk, msk_pos_2R ).a;\n";var kt=od+"  float msk_3L = texture2D( msk, msk_pos_3L ).a;\n"+
"  float msk_3R = texture2D( msk, msk_pos_3R ).a;\n"+"  float msk_4L = texture2D( msk, msk_pos_4L ).a;\n"+
"  float msk_4R = texture2D( msk, msk_pos_4R ).a;\n";var oe=kt+"  float msk_5L = texture2D( msk, msk_pos_5L ).a;\n"+
"  float msk_5R = texture2D( msk, msk_pos_5R ).a;\n"+"  float msk_6L = texture2D( msk, msk_pos_6L ).a;\n"+
"  float msk_6R = texture2D( msk, msk_pos_6R ).a;\n";var qx=oe+"  float msk_7L = texture2D( msk, msk_pos_7L ).a;\n"+
"  float msk_7R = texture2D( msk, msk_pos_7R ).a;\n"+"  float msk_8L = texture2D( msk, msk_pos_8L ).a;\n"+
"  float msk_8R = texture2D( msk, msk_pos_8R ).a;\n";var hD="  {0} = ( msk_invert? 1.0 - msk_0 : msk_0 ) * {1};\n";
var of="  if ( msk_invert )\n"+"  {\n"+"    msk_0  = 1.0 - msk_0;\n"+"    msk_1L = 1.0 - msk_1L;\n"+
"    msk_1R = 1.0 - msk_1R;\n"+"    msk_2L = 1.0 - msk_2L;\n"+"    msk_2R = 1.0 - msk_2R;\n";
var ku=of+"    msk_3L = 1.0 - msk_3L;\n"+"    msk_3R = 1.0 - msk_3R;\n"+"    msk_4L = 1.0 - msk_4L;\n"+
"    msk_4R = 1.0 - msk_4R;\n";var og=ku+"    msk_5L = 1.0 - msk_5L;\n"+"    msk_5R = 1.0 - msk_5R;\n"+
"    msk_6L = 1.0 - msk_6L;\n"+"    msk_6R = 1.0 - msk_6R;\n";var qy=og+"    msk_7L = 1.0 - msk_7L;\n"+
"    msk_7R = 1.0 - msk_7R;\n"+"    msk_8L = 1.0 - msk_8L;\n"+"    msk_8R = 1.0 - msk_8R;\n";
var fU="  }\n";var hE="  {0} = texture2D( src, src_pos_var.xy );\n";var fr="  vec4  tmp = (   texture2D( src, src_pos_0  ) {1}    * 0.375  ) +\n"+
"              ((( texture2D( src, src_pos_1L ) {2} ) +\n"+"                ( texture2D( src, src_pos_1R ) {3} )) * 0.25   ) +\n"+
"              ((( texture2D( src, src_pos_2L ) {4} ) +\n"+"                ( texture2D( src, src_pos_2R ) {5} )) * 0.0625 );\n"+
"\n"+"  {0} = tmp;\n";var fs="  vec4  tmp = (   texture2D( src, src_pos_0  ) {1}    * 0.2736 ) +\n"+
"              ((( texture2D( src, src_pos_1L ) {2} ) +\n"+"                ( texture2D( src, src_pos_1R ) {3} )) * 0.2187 ) +\n"+
"              ((( texture2D( src, src_pos_2L ) {4} ) +\n"+"                ( texture2D( src, src_pos_2R ) {5} )) * 0.1093 ) +\n"+
"              ((( texture2D( src, src_pos_3L ) {6} ) +\n"+"                ( texture2D( src, src_pos_3R ) {7} )) * 0.0312 ) +\n"+
"              ((( texture2D( src, src_pos_4L ) {8} ) +\n"+"                ( texture2D( src, src_pos_4R ) {9} )) * 0.0040 );\n"+
"\n"+"  {0} = tmp;\n";var ft="  vec4  tmp = (   texture2D( src, src_pos_0  ) {1}    * 0.1964 ) +\n"+
"              ((( texture2D( src, src_pos_1L ) {2} ) +\n"+"                ( texture2D( src, src_pos_1R ) {3} )) * 0.1747 ) +\n"+
"              ((( texture2D( src, src_pos_2L ) {4} ) +\n"+"                ( texture2D( src, src_pos_2R ) {5} )) * 0.1223 ) +\n"+
"              ((( texture2D( src, src_pos_3L ) {6} ) +\n"+"                ( texture2D( src, src_pos_3R ) {7} )) * 0.0667 ) +\n"+
"              ((( texture2D( src, src_pos_4L ) {8} ) +\n"+"                ( texture2D( src, src_pos_4R ) {9} )) * 0.0278 ) +\n"+
"              ((( texture2D( src, src_pos_5L ) {A} ) +\n"+"                ( texture2D( src, src_pos_5R ) {B} )) * 0.0085 ) +\n"+
"              ((( texture2D( src, src_pos_6L ) {C} ) +\n"+"                ( texture2D( src, src_pos_6R ) {D} )) * 0.0018 );\n"+
"\n"+"  {0} = tmp;\n";var fV="  vec4  tmp = (( texture2D( src, src_pos_0  ) {1} ) +\n"+
"               ( texture2D( src, src_pos_1L ) {2} ) +\n"+"               ( texture2D( src, src_pos_1R ) {3} ) +\n"+
"               ( texture2D( src, src_pos_2L ) {4} ) +\n"+"               ( texture2D( src, src_pos_2R ) {5} ) +\n"+
"               ( texture2D( src, src_pos_3L ) {6} ) +\n"+"               ( texture2D( src, src_pos_3R ) {7} ) +\n"+
"               ( texture2D( src, src_pos_4L ) {8} ) +\n"+"               ( texture2D( src, src_pos_4R ) {9} )) * ( 1.0 / 9.0 );\n"+
"\n"+"  {0} = tmp;\n";var fW="  vec4  tmp = (( texture2D( src, src_pos_0  ) {1} ) +\n"+
"               ( texture2D( src, src_pos_1L ) {2} ) +\n"+"               ( texture2D( src, src_pos_1R ) {3} ) +\n"+
"               ( texture2D( src, src_pos_2L ) {4} ) +\n"+"               ( texture2D( src, src_pos_2R ) {5} ) +\n"+
"               ( texture2D( src, src_pos_3L ) {6} ) +\n"+"               ( texture2D( src, src_pos_3R ) {7} ) +\n"+
"               ( texture2D( src, src_pos_4L ) {8} ) +\n"+"               ( texture2D( src, src_pos_4R ) {9} ) +\n"+
"               ( texture2D( src, src_pos_5L ) {A} ) +\n"+"               ( texture2D( src, src_pos_5R ) {B} ) +\n"+
"               ( texture2D( src, src_pos_6L ) {C} ) +\n"+"               ( texture2D( src, src_pos_6R ) {D} ) +\n"+
"               ( texture2D( src, src_pos_7L ) {E} ) +\n"+"               ( texture2D( src, src_pos_7R ) {F} ) +\n"+
"               ( texture2D( src, src_pos_8L ) {G} ) +\n"+"               ( texture2D( src, src_pos_8R ) {H} )) * ( 1.0 / 17.0 );\n"+
"\n"+"  {0} = tmp;\n";var eZ="  {0} = {1} * opacity;\n";var e0="  float gray   = dot( {1}.rgb, vec3( 0.299, 0.587, 0.114 ));\n"+
"  vec4  color2 = tint * vec4( vec3( gray ), {1}.a );\n"+"  {0} = mix( {1}, color2, intensity ) * opacity;\n";
var e1="  vec4 color2 = {1}.a * tint;\n"+"  {0} = mix( {1}, color2, intensity ) * opacity;\n";
var tG=aR+a2+aS+i(em,{'0':'src'})+i(fr,{'0':'gl_FragColor'})+aT;var tH=aR+a2+co+
aS+i(em,{'0':'src'})+ji+i(fr,{'0':'gl_FragColor'})+aT;var tI=aR+a2+aS+i(cj,{'0':
'src'})+i(fs,{'0':'gl_FragColor'})+aT;var tJ=aR+a2+co+aS+i(cj,{'0':'src'})+fq+i(
fs,{'0':'gl_FragColor'})+aT;var tK=aR+a2+aS+i(en,{'0':'src'})+i(ft,{'0':'gl_FragColor'
})+aT;var tL=aR+a2+co+aS+i(en,{'0':'src'})+jj+i(ft,{'0':'gl_FragColor'})+aT;var tM=
aR+a2+aS+i(cj,{'0':'src'})+i(fV,{'0':'gl_FragColor'})+aT;var tN=aR+a2+co+aS+i(cj
,{'0':'src'})+fq+i(fV,{'0':'gl_FragColor'})+aT;var tO=aR+a2+aS+i(eY,{'0':'src'})+
i(fW,{'0':'gl_FragColor'})+aT;var tP=aR+a2+co+aS+i(eY,{'0':'src'})+ks+i(fW,{'0':
'gl_FragColor'})+aT;var tQ=aR+a2+dA+fT+aS+i(em,{'0':'src'})+i(em,{'0':'msk'})+i(
od)+i(of)+i(fU)+i(fr,{'0':'gl_FragColor','1':'* msk_0','2':'* msk_1L','3':'* msk_1R'
,'4':'* msk_2L','5':'* msk_2R'})+aT;var tR=aR+a2+dA+fT+co+aS+i(em,{'0':'src'})+i(
em,{'0':'msk'})+ji+i(od)+i(of)+i(fU)+i(fr,{'0':'gl_FragColor','1':'* msk_0','2':
'* msk_1L','3':'* msk_1R','4':'* msk_2L','5':'* msk_2R'})+aT;var tS=aR+a2+dA+fT+
aS+i(cj,{'0':'src'})+i(cj,{'0':'msk'})+i(kt)+i(ku)+i(fU)+i(fs,{'0':'gl_FragColor'
,'1':'* msk_0','2':'* msk_1L','3':'* msk_1R','4':'* msk_2L','5':'* msk_2R','6':'* msk_3L'
,'7':'* msk_3R','8':'* msk_4L','9':'* msk_4R'})+aT;var tT=aR+a2+dA+fT+co+aS+i(cj
,{'0':'src'})+i(cj,{'0':'msk'})+fq+i(kt)+i(ku)+i(fU)+i(fs,{'0':'gl_FragColor','1':
'* msk_0','2':'* msk_1L','3':'* msk_1R','4':'* msk_2L','5':'* msk_2R','6':'* msk_3L'
,'7':'* msk_3R','8':'* msk_4L','9':'* msk_4R'})+aT;var tU=aR+a2+dA+fT+aS+i(en,{'0':
'src'})+i(en,{'0':'msk'})+i(oe)+i(og)+i(fU)+i(ft,{'0':'gl_FragColor','1':'* msk_0'
,'2':'* msk_1L','3':'* msk_1R','4':'* msk_2L','5':'* msk_2R','6':'* msk_3L','7':
'* msk_3R','8':'* msk_4L','9':'* msk_4R','A':'* msk_5L','B':'* msk_5R','C':'* msk_6L'
,'D':'* msk_6R'})+aT;var tV=aR+a2+dA+fT+co+aS+i(en,{'0':'src'})+i(en,{'0':'msk'}
)+jj+i(oe)+i(og)+i(fU)+i(ft,{'0':'gl_FragColor','1':'* msk_0','2':'* msk_1L','3':
'* msk_1R','4':'* msk_2L','5':'* msk_2R','6':'* msk_3L','7':'* msk_3R','8':'* msk_4L'
,'9':'* msk_4R','A':'* msk_5L','B':'* msk_5R','C':'* msk_6L','D':'* msk_6R'})+aT;
var tW=aR+a2+dA+fT+aS+i(cj,{'0':'src'})+i(cj,{'0':'msk'})+i(kt)+i(ku)+i(fU)+i(fV
,{'0':'gl_FragColor','1':'* msk_0','2':'* msk_1L','3':'* msk_1R','4':'* msk_2L',
'5':'* msk_2R','6':'* msk_3L','7':'* msk_3R','8':'* msk_4L','9':'* msk_4R'})+aT;
var tX=aR+a2+dA+fT+co+aS+i(cj,{'0':'src'})+i(cj,{'0':'msk'})+fq+i(kt)+i(ku)+i(fU
)+i(fV,{'0':'gl_FragColor','1':'* msk_0','2':'* msk_1L','3':'* msk_1R','4':'* msk_2L'
,'5':'* msk_2R','6':'* msk_3L','7':'* msk_3R','8':'* msk_4L','9':'* msk_4R'})+aT;
var tY=aR+a2+dA+fT+aS+i(eY,{'0':'src'})+i(eY,{'0':'msk'})+i(qx)+i(qy)+i(fU)+i(fW
,{'0':'gl_FragColor','1':'* msk_0','2':'* msk_1L','3':'* msk_1R','4':'* msk_2L',
'5':'* msk_2R','6':'* msk_3L','7':'* msk_3R','8':'* msk_4L','9':'* msk_4R','A':'* msk_5L'
,'B':'* msk_5R','C':'* msk_6L','D':'* msk_6R','E':'* msk_7L','F':'* msk_7R','G':
'* msk_8L','H':'* msk_8R'})+aT;var tZ=aR+a2+dA+fT+co+aS+i(eY,{'0':'src'})+i(eY,{
'0':'msk'})+ks+i(qx)+i(qy)+i(fU)+i(fW,{'0':'gl_FragColor','1':'* msk_0','2':'* msk_1L'
,'3':'* msk_1R','4':'* msk_2L','5':'* msk_2R','6':'* msk_3L','7':'* msk_3R','8':
'* msk_4L','9':'* msk_4R','A':'* msk_5L','B':'* msk_5R','C':'* msk_6L','D':'* msk_6R'
,'E':'* msk_7L','F':'* msk_7R','G':'* msk_8L','H':'* msk_8R'})+aT;var t0=aR+dA+aS+
i(hC)+i(hE,{'0':'vec4 color'})+i(hD,{'0':'gl_FragColor','1':'color'})+aT;var t1=
aR+a2+dA+aS+i(em,{'0':'src'})+i(hC)+i(fr,{'0':'vec4 color'})+i(hD,{'0':'gl_FragColor'
,'1':'color'})+aT;var t2=aR+a2+dA+aS+i(cj,{'0':'src'})+i(hC)+i(fs,{'0':'vec4 color'
})+i(hD,{'0':'gl_FragColor','1':'color'})+aT;var t3=aR+a2+dA+aS+i(en,{'0':'src'}
)+i(hC)+i(ft,{'0':'vec4 color'})+i(hD,{'0':'gl_FragColor','1':'color'})+aT;var t7=
aR+bG+cy+aS+i(hE,{'0':'vec4 color'})+i(e0,{'0':'gl_FragColor','1':'color'})+aT;var
t8=aR+a2+bG+cy+aS+i(em,{'0':'src'})+i(fr,{'0':'vec4 color'})+i(e0,{'0':'gl_FragColor'
,'1':'color'})+aT;var t9=aR+a2+bG+cy+co+aS+i(em,{'0':'src'})+ji+i(fr,{'0':'vec4 color'
})+i(e0,{'0':'gl_FragColor','1':'color'})+aT;var t_=aR+a2+bG+cy+aS+i(cj,{'0':'src'
})+i(fs,{'0':'vec4 color'})+i(e0,{'0':'gl_FragColor','1':'color'})+aT;var t$=aR+
a2+bG+cy+co+aS+i(cj,{'0':'src'})+fq+i(fs,{'0':'vec4 color'})+i(e0,{'0':'gl_FragColor'
,'1':'color'})+aT;var ua=aR+a2+bG+cy+aS+i(en,{'0':'src'})+i(ft,{'0':'vec4 color'
})+i(e0,{'0':'gl_FragColor','1':'color'})+aT;var ub=aR+a2+bG+cy+co+aS+i(en,{'0':
'src'})+jj+i(ft,{'0':'vec4 color'})+i(e0,{'0':'gl_FragColor','1':'color'})+aT;var
uc=aR+a2+bG+cy+aS+i(cj,{'0':'src'})+i(fV,{'0':'vec4 color'})+i(e0,{'0':'gl_FragColor'
,'1':'color'})+aT;var ud=aR+a2+bG+cy+co+aS+i(cj,{'0':'src'})+fq+i(fV,{'0':'vec4 color'
})+i(e0,{'0':'gl_FragColor','1':'color'})+aT;var ue=aR+a2+bG+cy+aS+i(eY,{'0':'src'
})+i(fW,{'0':'vec4 color'})+i(e0,{'0':'gl_FragColor','1':'color'})+aT;var uf=aR+
a2+bG+cy+co+aS+i(eY,{'0':'src'})+ks+i(fW,{'0':'vec4 color'})+i(e0,{'0':'gl_FragColor'
,'1':'color'})+aT;var ug=aR+bG+cy+aS+i(hE,{'0':'vec4 color'})+i(e1,{'0':'gl_FragColor'
,'1':'color'})+aT;var uh=aR+a2+bG+cy+aS+i(em,{'0':'src'})+i(fr,{'0':'vec4 color'
})+i(e1,{'0':'gl_FragColor','1':'color'})+aT;var ui=aR+a2+bG+cy+co+aS+i(em,{'0':
'src'})+ji+i(fr,{'0':'vec4 color'})+i(e1,{'0':'gl_FragColor','1':'color'})+aT;var
uj=aR+a2+bG+cy+aS+i(cj,{'0':'src'})+i(fs,{'0':'vec4 color'})+i(e1,{'0':'gl_FragColor'
,'1':'color'})+aT;var uk=aR+a2+bG+cy+co+aS+i(cj,{'0':'src'})+fq+i(fs,{'0':'vec4 color'
})+i(e1,{'0':'gl_FragColor','1':'color'})+aT;var ul=aR+a2+bG+cy+aS+i(en,{'0':'src'
})+i(ft,{'0':'vec4 color'})+i(e1,{'0':'gl_FragColor','1':'color'})+aT;var um=aR+
a2+bG+cy+co+aS+i(en,{'0':'src'})+jj+i(ft,{'0':'vec4 color'})+i(e1,{'0':'gl_FragColor'
,'1':'color'})+aT;var un=aR+a2+bG+cy+aS+i(cj,{'0':'src'})+i(fV,{'0':'vec4 color'
})+i(e1,{'0':'gl_FragColor','1':'color'})+aT;var uo=aR+a2+bG+cy+co+aS+i(cj,{'0':
'src'})+fq+i(fV,{'0':'vec4 color'})+i(e1,{'0':'gl_FragColor','1':'color'})+aT;var
up=aR+a2+bG+cy+aS+i(eY,{'0':'src'})+i(fW,{'0':'vec4 color'})+i(e1,{'0':'gl_FragColor'
,'1':'color'})+aT;var uq=aR+a2+bG+cy+co+aS+i(eY,{'0':'src'})+ks+i(fW,{'0':'vec4 color'
})+i(e1,{'0':'gl_FragColor','1':'color'})+aT;var ur=aR+bG+aS+i(hE,{'0':'vec4 color'
})+i(eZ,{'0':'gl_FragColor','1':'color'})+aT;var us=aR+a2+bG+aS+i(em,{'0':'src'}
)+i(fr,{'0':'vec4 color'})+i(eZ,{'0':'gl_FragColor','1':'color'})+aT;var ut=aR+a2+
bG+co+aS+i(em,{'0':'src'})+ji+i(fr,{'0':'vec4 color'})+i(eZ,{'0':'gl_FragColor',
'1':'color'})+aT;var uu=aR+a2+bG+aS+i(cj,{'0':'src'})+i(fs,{'0':'vec4 color'})+i(
eZ,{'0':'gl_FragColor','1':'color'})+aT;var uv=aR+a2+bG+co+aS+i(cj,{'0':'src'})+
fq+i(fs,{'0':'vec4 color'})+i(eZ,{'0':'gl_FragColor','1':'color'})+aT;var uw=aR+
a2+bG+aS+i(en,{'0':'src'})+i(ft,{'0':'vec4 color'})+i(eZ,{'0':'gl_FragColor','1':
'color'})+aT;var ux=aR+a2+bG+co+aS+i(en,{'0':'src'})+jj+i(ft,{'0':'vec4 color'})+
i(eZ,{'0':'gl_FragColor','1':'color'})+aT;var uy=aR+a2+bG+aS+i(cj,{'0':'src'})+i(
fV,{'0':'vec4 color'})+i(eZ,{'0':'gl_FragColor','1':'color'})+aT;var uz=aR+a2+bG+
co+aS+i(cj,{'0':'src'})+fq+i(fV,{'0':'vec4 color'})+i(eZ,{'0':'gl_FragColor','1':
'color'})+aT;var uA=aR+a2+bG+aS+i(eY,{'0':'src'})+i(fW,{'0':'vec4 color'})+i(eZ,{
'0':'gl_FragColor','1':'color'})+aT;var uB=aR+a2+bG+co+aS+i(eY,{'0':'src'})+ks+i(
fW,{'0':'vec4 color'})+i(eZ,{'0':'gl_FragColor','1':'color'})+aT;var t4=aR+dA+bG+
cy+aS+i(hC)+i(hE,{'0':'vec4 color'})+i(e0,{'0':'color','1':'color'})+i(hD,{'0':'gl_FragColor'
,'1':'color'})+aT;var t5=aR+dA+bG+cy+aS+i(hC)+i(hE,{'0':'vec4 color'})+i(e1,{'0':
'color','1':'color'})+i(hD,{'0':'gl_FragColor','1':'color'})+aT;var t6=aR+dA+bG+
aS+i(hC)+i(hE,{'0':'vec4 color'})+i(eZ,{'0':'color','1':'color'})+i(hD,{'0':'gl_FragColor'
,'1':'color'})+aT;function uJ(a){var y2=at(a,a.VERTEX_SHADER,u_);var y3=at(a,a.VERTEX_SHADER
,u$);var pU=at(a,a.VERTEX_SHADER,va);var kf=at(a,a.VERTEX_SHADER,vb);var nT=at(a
,a.VERTEX_SHADER,vc);var bk=at(a,a.VERTEX_SHADER,vd);var dK=at(a,a.VERTEX_SHADER
,ve);var wY=at(a,a.FRAGMENT_SHADER,tr);var wZ=at(a,a.FRAGMENT_SHADER,ts);var w0=
at(a,a.FRAGMENT_SHADER,tt);var w1=at(a,a.FRAGMENT_SHADER,tu);var w2=at(a,a.FRAGMENT_SHADER
,tv);var w3=at(a,a.FRAGMENT_SHADER,tw);var w4=at(a,a.FRAGMENT_SHADER,tx);var w5=
at(a,a.FRAGMENT_SHADER,ty);var w6=at(a,a.FRAGMENT_SHADER,tz);var w7=at(a,a.FRAGMENT_SHADER
,tA);var w8=at(a,a.FRAGMENT_SHADER,tB);var w9=at(a,a.FRAGMENT_SHADER,tC);var w_=
at(a,a.FRAGMENT_SHADER,tD);var w$=at(a,a.FRAGMENT_SHADER,tE);var xa=at(a,a.FRAGMENT_SHADER
,tF);var xb=at(a,a.FRAGMENT_SHADER,tG);var xd=at(a,a.FRAGMENT_SHADER,tI);var xf=
at(a,a.FRAGMENT_SHADER,tK);var xh=at(a,a.FRAGMENT_SHADER,tM);var xj=at(a,a.FRAGMENT_SHADER
,tO);var xl=at(a,a.FRAGMENT_SHADER,tQ);var xn=at(a,a.FRAGMENT_SHADER,tS);var xp=
at(a,a.FRAGMENT_SHADER,tU);var xr=at(a,a.FRAGMENT_SHADER,tW);var xt=at(a,a.FRAGMENT_SHADER
,tY);var xv=at(a,a.FRAGMENT_SHADER,t0);var xw=at(a,a.FRAGMENT_SHADER,t1);var xx=
at(a,a.FRAGMENT_SHADER,t2);var xy=at(a,a.FRAGMENT_SHADER,t3);var xC=at(a,a.FRAGMENT_SHADER
,t7);var xD=at(a,a.FRAGMENT_SHADER,t8);var xF=at(a,a.FRAGMENT_SHADER,t_);var xH=
at(a,a.FRAGMENT_SHADER,ua);var xJ=at(a,a.FRAGMENT_SHADER,uc);var xL=at(a,a.FRAGMENT_SHADER
,ue);var xN=at(a,a.FRAGMENT_SHADER,ug);var xO=at(a,a.FRAGMENT_SHADER,uh);var xQ=
at(a,a.FRAGMENT_SHADER,uj);var xS=at(a,a.FRAGMENT_SHADER,ul);var xU=at(a,a.FRAGMENT_SHADER
,un);var xW=at(a,a.FRAGMENT_SHADER,up);var xY=at(a,a.FRAGMENT_SHADER,ur);var xZ=
at(a,a.FRAGMENT_SHADER,us);var x1=at(a,a.FRAGMENT_SHADER,uu);var x3=at(a,a.FRAGMENT_SHADER
,uw);var x5=at(a,a.FRAGMENT_SHADER,uy);var x7=at(a,a.FRAGMENT_SHADER,uA);var xz=
at(a,a.FRAGMENT_SHADER,t4);var xA=at(a,a.FRAGMENT_SHADER,t5);var xB=at(a,a.FRAGMENT_SHADER
,t6);var xc=at(a,a.FRAGMENT_SHADER,tH);var xe=at(a,a.FRAGMENT_SHADER,tJ);var xg=
at(a,a.FRAGMENT_SHADER,tL);var xi=at(a,a.FRAGMENT_SHADER,tN);var xk=at(a,a.FRAGMENT_SHADER
,tP);var xm=at(a,a.FRAGMENT_SHADER,tR);var xo=at(a,a.FRAGMENT_SHADER,tT);var xq=
at(a,a.FRAGMENT_SHADER,tV);var xs=at(a,a.FRAGMENT_SHADER,tX);var xu=at(a,a.FRAGMENT_SHADER
,tZ);var xE=at(a,a.FRAGMENT_SHADER,t9);var xG=at(a,a.FRAGMENT_SHADER,t$);var xI=
at(a,a.FRAGMENT_SHADER,ub);var xK=at(a,a.FRAGMENT_SHADER,ud);var xM=at(a,a.FRAGMENT_SHADER
,uf);var xP=at(a,a.FRAGMENT_SHADER,ui);var xR=at(a,a.FRAGMENT_SHADER,uk);var xT=
at(a,a.FRAGMENT_SHADER,um);var xV=at(a,a.FRAGMENT_SHADER,uo);var xX=at(a,a.FRAGMENT_SHADER
,uq);var x0=at(a,a.FRAGMENT_SHADER,ut);var x2=at(a,a.FRAGMENT_SHADER,uv);var x4=
at(a,a.FRAGMENT_SHADER,ux);var x6=at(a,a.FRAGMENT_SHADER,uz);var x8=at(a,a.FRAGMENT_SHADER
,uB);a.km=aA(a,y2,wY);a.iK=aA(a,y3,wZ);a.iL=aA(a,pU,w0);a.lR=aA(a,pU,w1);a.iM=aA(
a,kf,w2);a.lS=aA(a,kf,w3);a.hB=aA(a,kf,w4);a.lT=aA(a,kf,w5);a.lU=aA(a,pU,w6);a.lV=
aA(a,kf,w7);a.lW=aA(a,kf,w8);a.kn=aA(a,nT,w9);a.ko=aA(a,nT,w_);a.lX=aA(a,nT,w$);
a.lY=aA(a,nT,xa);a.d7=aA(a,bk,xb);a.d8=aA(a,bk,xd);a.d9=aA(a,bk,xf);a.d_=aA(a,bk
,xh);a.d$=aA(a,bk,xj);a.iS=aA(a,dK,xl);a.iU=aA(a,dK,xn);a.iW=aA(a,dK,xp);a.iY=aA(
a,dK,xr);a.i0=aA(a,dK,xt);a.i2=aA(a,dK,xv);a.i3=aA(a,dK,xw);a.i4=aA(a,dK,xx);a.i5=
aA(a,dK,xy);a.i6=aA(a,bk,xC);a.i7=aA(a,bk,xD);a.i8=aA(a,bk,xF);a.i9=aA(a,bk,xH);
a.l2=aA(a,bk,xJ);a.l4=aA(a,bk,xL);a.i_=aA(a,bk,xN);a.i$=aA(a,bk,xO);a.ja=aA(a,bk
,xQ);a.jb=aA(a,bk,xS);a.l9=aA(a,bk,xU);a.l$=aA(a,bk,xW);a.jc=aA(a,bk,xY);a.jd=aA(
a,bk,xZ);a.je=aA(a,bk,x1);a.jf=aA(a,bk,x3);a.me=aA(a,bk,x5);a.mg=aA(a,bk,x7);a.kp=
aA(a,dK,xz);a.kq=aA(a,dK,xA);a.kr=aA(a,dK,xB);a.iN=aA(a,bk,xc);a.iO=aA(a,bk,xe);
a.iP=aA(a,bk,xg);a.iQ=aA(a,bk,xi);a.iR=aA(a,bk,xk);a.iT=aA(a,dK,xm);a.iV=aA(a,dK
,xo);a.iX=aA(a,dK,xq);a.iZ=aA(a,dK,xs);a.i1=aA(a,dK,xu);a.lZ=aA(a,bk,xE);a.l0=aA(
a,bk,xG);a.l1=aA(a,bk,xI);a.l3=aA(a,bk,xK);a.l5=aA(a,bk,xM);a.l6=aA(a,bk,xP);a.l7=
aA(a,bk,xR);a.l8=aA(a,bk,xT);a.l_=aA(a,bk,xV);a.ma=aA(a,bk,xX);a.mb=aA(a,bk,x0);
a.mc=aA(a,bk,x2);a.md=aA(a,bk,x4);a.mf=aA(a,bk,x6);a.mh=aA(a,bk,x8);if(a.km&&a.iK&&
a.iL&&a.lR&&a.iM&&a.lS&&a.hB&&a.lT&&a.lU&&a.lV&&a.lW&&a.kn&&a.ko&&a.lX&&a.lY&&a.
d7&&a.d8&&a.d9&&a.d_&&a.d$&&a.iS&&a.iU&&a.iW&&a.iY&&a.i0&&a.i2&&a.i3&&a.i4&&a.i5&&
a.i6&&a.i7&&a.i8&&a.i9&&a.l2&&a.l4&&a.i_&&a.i$&&a.ja&&a.jb&&a.l9&&a.l$&&a.jc&&a.
jd&&a.je&&a.jf&&a.me&&a.mg&&a.kp&&a.kq&&a.kr&&a.iN&&a.iO&&a.iP&&a.iQ&&a.iR&&a.iT&&
a.iV&&a.iX&&a.iZ&&a.i1&&a.lZ&&a.l0&&a.l1&&a.l3&&a.l5&&a.l6&&a.l7&&a.l8&&a.l_&&a.
ma&&a.mb&&a.mc&&a.md&&a.mf&&a.mh)return true;a.km=null;a.iK=null;a.iL=null;a.lR=
null;a.iM=null;a.lS=null;a.hB=null;a.lT=null;a.lU=null;a.lV=null;a.lW=null;a.kn=
null;a.ko=null;a.lX=null;a.lY=null;a.d7=null;a.d8=null;a.d9=null;a.d_=null;a.d$=
null;a.iS=null;a.iU=null;a.iW=null;a.iY=null;a.i0=null;a.i2=null;a.i3=null;a.i4=
null;a.i5=null;a.i6=null;a.i7=null;a.i8=null;a.i9=null;a.l2=null;a.l4=null;a.i_=
null;a.i$=null;a.ja=null;a.jb=null;a.l9=null;a.l$=null;a.jc=null;a.jd=null;a.je=
null;a.jf=null;a.me=null;a.mg=null;a.kp=null;a.kq=null;a.kr=null;a.iN=null;a.iO=
null;a.iP=null;a.iQ=null;a.iR=null;a.iT=null;a.iV=null;a.iX=null;a.iZ=null;a.i1=
null;a.lZ=null;a.l0=null;a.l1=null;a.l3=null;a.l5=null;a.l6=null;a.l7=null;a.l8=
null;a.l_=null;a.ma=null;a.mb=null;a.mc=null;a.md=null;a.mf=null;a.mh=null;return false;
}function at(a,we,wf){var lr=a.createShader(we);a.shaderSource(lr,wf);a.compileShader(
lr);var bx=a.getShaderParameter(lr,a.COMPILE_STATUS);var log=a.getShaderInfoLog(
lr);if(bx&&(log.length>1))console.log("EmWi info: "+log);if(!bx)console.log("EmWi error: "+
log);if(!bx)return null;return lr;}function aA(a,rp,q$){var a9=a.createProgram();
if(!rp||!q$)return null;a.attachShader(a9,rp);a.attachShader(a9,q$);a.bindAttribLocation(
a9,a.nX,"dst_pos");a.bindAttribLocation(a9,a.n0,"src_pos");a.bindAttribLocation(
a9,a.nZ,"src_clr");a.bindAttribLocation(a9,a.nW,"clr_pos");a.bindAttribLocation(
a9,a.nY,"msk_pos");a.linkProgram(a9);var bx=a.getProgramParameter(a9,a.LINK_STATUS
);var log=a.getProgramInfoLog(a9);if(bx&&(log.length>1))console.log("EmWi info: "+
log);if(!bx)console.log("EmWi error: "+log);if(!bx)return null;var yP=a.getUniformLocation(
a9,"dst_map");var s4=a.getUniformLocation(a9,"src");var yV=a.getUniformLocation(
a9,"src_ofs");var yX=a.getUniformLocation(a9,"src_size");var yW=a.getUniformLocation(
a9,"src_pxl");var yY=a.getUniformLocation(a9,"src_step");var yK=a.getUniformLocation(
a9,"clamp_tl");var yJ=a.getUniformLocation(a9,"clamp_br");var yN=a.getUniformLocation(
a9,"clr_tl");var yO=a.getUniformLocation(a9,"clr_tr");var yM=a.getUniformLocation(
a9,"clr_br");var yL=a.getUniformLocation(a9,"clr_bl");var yZ=a.getUniformLocation(
a9,"tint");var yQ=a.getUniformLocation(a9,"intensity");var yU=a.getUniformLocation(
a9,"opacity");var s3=a.getUniformLocation(a9,"msk");var yS=a.getUniformLocation(
a9,"msk_pxl");var yT=a.getUniformLocation(a9,"msk_step");var yR=a.getUniformLocation(
a9,"msk_invert");a.useProgram(a9);if(s4)a.uniform1i(s4,0);if(s3)a.uniform1i(s3,1
);a9.u2=yP;a9.u6=yV;a9.u8=yX;a9.u7=yW;a9.u9=yY;a9.mm=yK;a9.qz=yJ;a9.qC=yN;a9.qD=
yO;a9.qB=yM;a9.qA=yL;a9.qG=yZ;a9.qE=yQ;a9.qF=yU;a9.u4=yS;a9.u5=yT;a9.u3=yR;return a9;
}function ea(a,x,b0){if(x!==a.qg){if(x&&x.cL&&!x.Framebuffer){x.Framebuffer=a.createFramebuffer(
);a.bindFramebuffer(a.FRAMEBUFFER,x.Framebuffer);a.framebufferTexture2D(a.FRAMEBUFFER
,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,x.cL,0);}else if(x)a.bindFramebuffer(a.FRAMEBUFFER
,x?x.Framebuffer:null);if(x)a.viewport(0,0,x.jh,x.jg);a.qg=x;}if(a.gf!==b0){a.useProgram(
b0);a.gf=b0;}if(x&&b0&&((x.fl!==b0.fl)||(x.fk!==b0.fk)||(!!x.cL!==!!b0.cL))){var
im=a.tm;if(x.cL){im[0]=x.fl;im[5]=x.fk;im[7]=-1;}else{im[0]=x.fl;im[5]=-x.fk;im[
7]=1;}a.uniformMatrix4fv(b0.u2,false,im);b0.fl=x.fl;b0.fk=x.fk;b0.cL=!!x.cL;}if(
x&&x.lI){a.clear(a.COLOR_BUFFER_BIT);x.lI=false;}}function fo(a,ap,ep){if(ap!==a.
fp){if(ap)a.bindTexture(a.TEXTURE_2D,ap.cL);a.fp=ap;}if(ap&&(!ap.cw!==!ep)){if(ep
){a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);a.texParameteri(a.
TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);}else{a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER
,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.NEAREST);}ap.cw=
ep;}}function mj(a,b5,ep){a.activeTexture(a.TEXTURE1);if(b5!==a.kk){if(b5)a.bindTexture(
a.TEXTURE_2D,b5.cL);a.kk=b5;}if(b5&&(!b5.cw!==!ep)){if(ep){a.texParameteri(a.TEXTURE_2D
,a.TEXTURE_MIN_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER
,a.LINEAR);}else{a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.
texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.NEAREST);}b5.cw=ep;}a.activeTexture(
a.TEXTURE0);}function bb(be,bg,jD){if(jD<=0)return be;if(jD>=1)return bg;var o6=(
be&0xFF);var o7=((be>>8)&0xFF);var o8=((be>>16)&0xFF);var o9=((be>>24)&0xFF);var
wp=(bg&0xFF);var wq=((bg>>8)&0xFF);var wr=((bg>>16)&0xFF);var ws=((bg>>24)&0xFF);
o6+=(wp-o6)*jD;o7+=(wq-o7)*jD;o8+=(wr-o8)*jD;o9+=(ws-o9)*jD;return o6|(o7<<8)|(o8<<
16)|(o9<<24);}function lM(aL,h1,cW,oY,eJ){for(var d=0;d<(cW-(oY?1:0));d++){var bd=
d;var ca=(d+1)%cW;var nr=aL[bd*11];var pi=aL[ca*11];if(((eJ>nr)&&(eJ<pi))||((eJ<
nr)&&(eJ>pi))){var b2=(eJ-nr)/(pi-nr);var dj=1.0-b2;var fF=(cW-d-1)*11;if(fF>0){
var a6=(d+1)*11;aL.set(aL.subarray(a6,a6+fF),a6+11);}cW++;if(ca)ca++;d++;var n=aL[
bd=bd*11+1];var cG=aL[bd+=1];var b_=aL[bd+=1];var gN=aL[bd+=1];var cF=h1[bd+=1];
var gv=aL[bd+=1];var gw=aL[bd+=1];var gx=aL[bd+=1];var gG=aL[bd+=1];var gH=aL[bd+
1];var u=aL[ca=ca*11+1];var dm=aL[ca+=1];var bV=aL[ca+=1];var lD=aL[ca+=1];var e9=
h1[ca+=1];var k_=aL[ca+=1];var k$=aL[ca+=1];var lb=aL[ca+=1];var lg=aL[ca+=1];var
lh=aL[ca+1];if(n!==u)n=n*dj+u*b2;if(cG!==dm)cG=cG*dj+dm*b2;if(b_!==bV)b_=b_*dj+bV
*b2;if(gN!==lD)gN=gN*dj+lD*b2;if(cF!==e9)cF=bb(cF,e9,b2);if(gv!==k_)gv=gv*dj+k_*
b2;if(gw!==k$)gw=gw*dj+k$*b2;if(gx!==lb)gx=gx*dj+lb*b2;if(gG!==lg)gG=gG*dj+lg*b2;
if(gH!==lh)gH=gH*dj+lh*b2;aL[bd=d*11]=eJ;aL[bd+=1]=n;aL[bd+=1]=cG;aL[bd+=1]=b_;aL[
bd+=1]=gN;h1[bd+=1]=cF;aL[bd+=1]=gv;aL[bd+=1]=gw;aL[bd+=1]=gx;aL[bd+=1]=gG;aL[bd+
1]=gH;}}return cW;}function lL(aL,h1,cW,oY,eJ){for(var d=0;d<(cW-(oY?1:0));d++){
var bd=d;var ca=(d+1)%cW;var ns=aL[bd*11+1];var pj=aL[ca*11+1];if(((eJ>ns)&&(eJ<
pj))||((eJ<ns)&&(eJ>pj))){var b2=(eJ-ns)/(pj-ns);var dj=1.0-b2;var fF=(cW-d-1)*11;
if(fF>0){var a6=(d+1)*11;aL.set(aL.subarray(a6,a6+fF),a6+11);}cW++;if(ca)ca++;d++;
var p=aL[bd*=11];var cG=aL[bd+=2];var b_=aL[bd+=1];var gN=aL[bd+=1];var cF=h1[bd+=
1];var gv=aL[bd+=1];var gw=aL[bd+=1];var gx=aL[bd+=1];var gG=aL[bd+=1];var gH=aL[
bd+1];var w=aL[ca*=11];var dm=aL[ca+=2];var bV=aL[ca+=1];var lD=aL[ca+=1];var e9=
h1[ca+=1];var k_=aL[ca+=1];var k$=aL[ca+=1];var lb=aL[ca+=1];var lg=aL[ca+=1];var
lh=aL[ca+1];if(p!==w)p=p*dj+w*b2;if(cG!==dm)cG=cG*dj+dm*b2;if(b_!==bV)b_=b_*dj+bV
*b2;if(gN!==lD)gN=gN*dj+lD*b2;if(cF!==e9)cF=bb(cF,e9,b2);if(gv!==k_)gv=gv*dj+k_*
b2;if(gw!==k$)gw=gw*dj+k$*b2;if(gx!==lb)gx=gx*dj+lb*b2;if(gG!==lg)gG=gG*dj+lg*b2;
if(gH!==lh)gH=gH*dj+lh*b2;aL[bd=d*11]=p;aL[bd+=1]=eJ;aL[bd+=1]=cG;aL[bd+=1]=b_;aL[
bd+=1]=gN;h1[bd+=1]=cF;aL[bd+=1]=gv;aL[bd+=1]=gw;aL[bd+=1]=gx;aL[bd+=1]=gG;aL[bd+
1]=gH;}}return cW;}function p$(m,cW,v5,wd){for(var d=0;d<cW;d++){var l=m[d*11];if((
l<v5)||(l>wd)){var fF=(cW-d-1)*11;if(fF>0){var a6=(d+1)*11;m.set(m.subarray(a6,a6+
fF),a6-11);}d--;cW--;}}return cW;}function p_(m,cW,wj,vV){for(var d=0;d<cW;d++){
var z=m[d*11+1];if((z<wj)||(z>vV)){var fF=(cW-d-1)*11;if(fF>0){var a6=(d+1)*11;m.
set(m.subarray(a6,a6+fF),a6-11);}d--;cW--;}}return cW;}function ge(bc){var b4=((
bc>>24)&0xFF)/255.0;var o2=b4/255.0;return[((bc>>0)&0xFF)*o2,((bc>>8)&0xFF)*o2,((
bc>>16)&0xFF)*o2,b4];}var n1=[0x00000000,0x00000001,0x00000003,0x00000007,0x0000000F
,0x0000001F,0x0000003F,0x0000007F,0x000000FF,0x000001FF,0x000003FF,0x000007FF,0x00000FFF
,0x00001FFF,0x00003FFF,0x00007FFF,0x0000FFFF,0x0001FFFF,0x0003FFFF,0x0007FFFF,0x000FFFFF
,0x001FFFFF,0x003FFFFF,0x007FFFFF,0x00FFFFFF,0x01FFFFFF,0x03FFFFFF,0x07FFFFFF,0x0FFFFFFF
,0x1FFFFFFF,0x3FFFFFFF,0x7FFFFFFF,0xFFFFFFFF];function tp(aj,hX,g1){var yc=aj.hG-
g1;var il=aj.hG>>5;for(var aI=0;aI<=yc;aI++)for(var al=0;al<il;al++){var af=32-hX;
var gF=n1[hX];var s6=aj.jo[aI*il+al];var fG;do{while(af&&(s6&gF)){gF<<=1;af--;}fG=
!(s6&gF);for(var pD=aI+1;fG&&(pD<(aI+g1));pD++)fG=!(aj.jo[pD*il+al]&gF);if(!fG){
gF<<=1;af--;}}while(!fG&&(af>0));if(fG)return[(al*32)+32-hX-af,aI];}return null;
}function uZ(aj,gp,k0,hX,g1){var gF=n1[hX]<<(gp&0x1F);var al=gp>>5;var il=aj.hG>>
5;for(;g1>0;k0++,g1--)aj.jo[k0*il+al]|=gF;}function uY(aj,gp,k0,hX,g1){var gF=~(
n1[hX]<<(gp&0x1F));var al=gp>>5;var il=aj.hG>>5;for(;g1>0;k0++,g1--)aj.jo[k0*il+
al]&=gF;}function p5(aj,cU){cU.iI=aj.gS;cU.gj=null;if(aj.gS)aj.gS.gj=cU;else aj.
mt=cU;aj.gS=cU;cU.Cache[cU.lK]=cU;}function oh(aj,cU){if(cU.iI)cU.iI.gj=cU.gj;else
aj.mt=cU.gj;if(cU.gj)cU.gj.iI=cU.iI;else aj.gS=cU.iI;cU.iI=null;cU.gj=null;cU.Cache[
cU.lK]=null;}function qi(ed,gs,ac){var nt=0;var min=0;var max=ac-1;var dS=-1;var
a5;while(max>=min){nt=(max+min)>>1;a5=nt*8;dS=ed-gs.charCodeAt(a5);if(!dS)return a5;
if(dS>0)min=nt+1;else if(dS<0)max=nt-1;}return-1;}var iG=[[0x10,0x01],[0x02,0x05
],[0x03,0x04],[0x11,0x12],[0x14,0x18],[0x06,0x09],[0x07,0x08],[0x13,0x16],[0x17,
0x1C],[0x0A,0x0B],[0x1E,0x1F],[0x0C,0x0D],[0x15,0x19],[0x1A,0x0E],[0x1B,0x1D]];function
ti(ap,aU,ah,ac){var h;var r=0;var fN=0;var eM=0;var jW=aU.length;fN=ah>>4;ah&=0xF;
h=ap.charCodeAt(fN++)>>ah;while(ac--){if(h&1)r=iG[r][1];else r=iG[r][0];if(r>15){
r-=16;aU[eM++]=(r&0x01)?0xFF:0x00;if(eM!==jW)aU[eM++]=(r&0x02)?0xFF:0x00;if(eM!==
jW)aU[eM++]=(r&0x04)?0xFF:0x00;if(eM!==jW)aU[eM++]=(r&0x08)?0xFF:0x00;r=0;}if((ah=(
ah+1))&0x0F)h>>=1;else h=ap.charCodeAt(fN++);}}function tj(ap,aU,ah,ac){var s2=[
0x00,0x55,0xAA,0xFF];var h;var r=0;var fN=0;var eM=0;var jW=aU.length;fN=ah>>4;ah&=
0xF;h=ap.charCodeAt(fN++)>>ah;while(ac--){if(h&1)r=iG[r][1];else r=iG[r][0];if(r>
15){r-=16;aU[eM++]=s2[r&0x03];if(eM!==jW)aU[eM++]=s2[r>>2];r=0;}if((ah=(ah+1))&0x0F
)h>>=1;else h=ap.charCodeAt(fN++);}}function tk(ap,aU,ah,ac){var h;var r=0;var fN=
0;var eM=0;var jW=aU.length;fN=ah>>4;ah&=0xF;h=ap.charCodeAt(fN++)>>ah;while(ac--
){if(h&1)r=iG[r][1];else r=iG[r][0];if(r>15){r-=16;aU[eM++]=r|(r<<4);r=0;}if((ah=(
ah+1))&0x0F)h>>=1;else h=ap.charCodeAt(fN++);}}function vf(bH,ac,aG){var eO=0;var
fc=aG;ac-=aG;while(ac--)bH[fc++]^=bH[eO++];}f.qQ=function(mH,ra,vZ,v_){var bitmap={
dd:[],cd:[],bZ:null};var nC=Math.max(v_,1);var width=ra[0];var height=ra[1];var b=
this.ai;if((mH!==f.cC)&&(mH!==f.jt)){console.log("EmWi error: Wrong pixel format of bitmap to create."
);return null;}if((width<=0)||(width>(this.hH-2))||(height<=0)||(height>(this.hH-
2))){console.log("EmWi error: Invalid size of bitmap to create.");return null;}var
hp=((this.hH-1)/(width+1))|0;var pp=((this.hH-1)/(height+1))|0;var j2=hp*pp;var sk=(
nC%j2)||j2;var sl=Math.min(sk,hp);var sm=((sk+hp-1)/hp)|0;var yj=hp*width+hp+1;var
yi=pp*height+pp+1;var ye=sl*width+sl+1;var yd=sm*height+sm+1;var sC=((nC+j2-1)/j2
)|0;for(var d=0;d<sC;d++){b.getError();var iz=yj;var iy=yi;var el=b.createTexture(
);var aq={};if(d===(sC-1)){iz=ye;iy=yd;}b.fp=null;b.kk=null;b.bindTexture(b.TEXTURE_2D
,el);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.texParameteri(
b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S
,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);
if(mH===this.cC)b.texImage2D(b.TEXTURE_2D,0,b.RGBA,iz,iy,0,b.RGBA,b.UNSIGNED_BYTE
,null);else b.texImage2D(b.TEXTURE_2D,0,b.ALPHA,iz,iy,0,b.ALPHA,b.UNSIGNED_BYTE,
null);aq.Format=mH;aq.Width=iz;aq.Height=iy;aq.jh=iz;aq.jg=iy;aq.dc=1/iz;aq.db=1
/iy;aq.fl=2/iz;aq.fk=2/iy;aq.cL=el;aq.Framebuffer=null;bitmap.dd[d]=aq;if(this.cM
)eX(b);}for(var d=0;d<nC;d++){var hl=d%j2;var sE=hl%hp;var sF=(hl/hp)|0;var c0={
};c0.aP=bitmap.dd[(d/j2)|0];c0.aH=[(sE*width)+sE+1,(sF*height)+sF+1];bitmap.cd[d
]=c0;}bitmap.FrameSize=[width,height];bitmap.FrameDelay=vZ;bitmap.NoOfFrames=nC;
return bitmap;};function qq(aj,ck){try{var rS=ck.fn;var fH=ck.Image;var width=fH.
width;var height=fH.height;var ii=ck.FrameSize[0];var jY=ck.FrameSize[1];var sz=(
width/ii)|0;var b=aj.ai;delete ck.fn;delete ck.Image;if(!rS.bitmap)return;if((fH.
width===ii)&&(fH.height===jY)){var c0=ck.cd[0];var el=c0.aP.cL;var bj=c0.aH[0];var
aX=c0.aH[1];b.bindTexture(b.TEXTURE_2D,el);b.fp=null;if(c0.aP.Format===aj.cC)b.texSubImage2D(
b.TEXTURE_2D,0,bj,aX,b.RGBA,b.UNSIGNED_BYTE,fH);else b.texSubImage2D(b.TEXTURE_2D
,0,bj,aX,b.ALPHA,b.UNSIGNED_BYTE,fH);}else{var aW=document.createElement('canvas'
);var pa;aW.width=ii;aW.height=jY;pa=aW.getContext("2d");for(var d=0;d<ck.uX;d++
){var c0=ck.cd[d];var el=c0.aP.cL;var bj=c0.aH[0];var aX=c0.aH[1];var nG=(d/sz)|
0;var o_=d-(nG*sz);var yt=o_*ii;var yu=nG*jY;pa.clearRect(0,0,ii,jY);pa.drawImage(
fH,yt,yu,ii,jY,0,0,ii,jY);b.bindTexture(b.TEXTURE_2D,el);b.fp=null;if(c0.aP.Format===
aj.cC)b.texSubImage2D(b.TEXTURE_2D,0,bj,aX,b.RGBA,b.UNSIGNED_BYTE,aW);else b.texSubImage2D(
b.TEXTURE_2D,0,bj,aX,b.ALPHA,b.UNSIGNED_BYTE,aW);}}aj.vv(rS,0);aj._RequestUpdate(
);}catch(bU){console.log("EmWi error: "+bU+"!");}}function uP(aj,ck){try{var fH=
ck.Image;var height=fH.height;var bitmap=aj.qQ(aj.cC,[fH.width,fH.height],0,1);ck.
dd=bitmap.dd;ck.cd=bitmap.cd;ck.FrameSize=bitmap.FrameSize;ck.fn.FrameSize=bitmap.
FrameSize;qq(aj,ck);}catch(bU){console.log("EmWi error: "+bU+"!");}}f.aac=function(
dE,oK){var pG=this;var bitmap=this.qQ(dE.Format,dE.FrameSize,dE.FrameDelay,dE.NoOfFrames
);if(!bitmap)return;bitmap.uX=bitmap.NoOfFrames;bitmap.fn=oK;bitmap.Image=new Image(
);bitmap.Image.addEventListener('load',function(){qq(pG,bitmap);});bitmap.Image.
src=dE.FileName;if(dE.FrameMapping){bitmap.bZ=dE.FrameMapping;bitmap.NoOfFrames=
bitmap.bZ.length;}return bitmap;};f.zx=function(ck){var b=this.ai;if(!ck)return;
for(var d=0;ck.dd&&(d<ck.dd.length);d++){var aq=ck.dd[d];if(b.fp===aq)fo(b,null,
false);if(b.kk===aq)mj(b,null,false);if(aq.cL)b.deleteTexture(aq.cL);if(aq.Framebuffer
)b.deleteFramebuffer(aq.Framebuffer);}ck.dd=null;ck.cd=null;ck.NoOfFrames=0;};f.
aad=function(rg,oK){var pG=this;var bitmap={dd:[],cd:[]};var aq={};var c0={};aq.
Format=this.cC;aq.Width=1;aq.Height=1;aq.jh=1;aq.jg=1;aq.dc=1;aq.db=1;aq.fl=2;aq.
fk=2;aq.cL=null;aq.Framebuffer=null;c0.aP=aq;c0.aH=[0,0];bitmap.dd[0]=aq;bitmap.
cd[0]=c0;bitmap.FrameSize=[1,1];bitmap.FrameDelay=0;bitmap.NoOfFrames=1;bitmap.fn=
oK;bitmap.Image=new Image();bitmap.Image.addEventListener('load',function(){uP(pG
,bitmap);});bitmap.Image.src=rg;return bitmap;};f.zH=function(rg,dg,aa$,abb,aa_,
jE,abc,abe,abd){return null;};f.aae=function(dE){var h=dE.Data();var am={Cache:dE.
Cache,Ascent:h[0],Descent:h[1],Leading:h[2],oa:h[5],qp:h[4],n9:h[6],oc:h[7],qn:h[
8],uH:h[9]};if(h[3]===2)am.n2=ti;if(h[3]===4)am.n2=tj;if(h[3]===16)am.n2=tk;return am;
};f.zy=function(ar){};f.qV=function(ar,hV){if(!ar){console.log("EmWi error: Invalid font resource."
);return null;}var ab=this.eD(ar,hV);if(!ab)return null;if(ab.qo)return ab;var e_=
this.vq;var nH=((ab.Height+e_-1)/e_)|0;var ne=((ab.Width+e_-1)/e_)|0;var a5=null;
var hv=this.mt;var pc=null;do{if(!(a5=pc=tp(this,ne,nH))){while(hv&&hv.mn)hv=hv.
gj;if(hv){var ab=hv;var nG=(ab.lH/e_)|0;var o_=(ab.lG/e_)|0;var nH=((ab.Height+e_-
1)/e_)|0;var ne=((ab.Width+e_-1)/e_)|0;if(this.cM)console.log("EmWi info: DiscardGlyph( "+
ab.lK+", "+ab.Width+", "+ab.Height+" )");pc=ab;hv=hv.gj;oh(this,ab);uY(this,o_,nG
,ne,nH);}}}while(!a5&&pc);if(!a5)return null;var nw=1/this.mu;ab.lG=a5[0]*e_;ab.
lH=a5[1]*e_;ab.p6=ab.lG*nw;ab.p8=ab.lH*nw;ab.p7=(ab.lG+ab.Width)*nw;ab.p9=(ab.lH+
ab.Height)*nw;ab.qo=true;ab.mn=0;if((ab.Width>0)&&(ab.Height>0)){var sP=ab.Width
*ab.Height;var pB=new Uint8Array(sP);var b=this.ai;ar.n2(ar.oc,pB,ab.oc,ab.uM);vf(
pB,sP,ab.Width);b.bindTexture(b.TEXTURE_2D,this.kx);b.texSubImage2D(b.TEXTURE_2D
,0,ab.lG,ab.lH,ab.Width,ab.Height,b.ALPHA,b.UNSIGNED_BYTE,pB);b.fp=null;}uZ(this
,a5[0],a5[1],ne,nH);if(this.cM)console.log("EmWi info: CreateGlyph( "+ab.lK+", "+
ab.Width+", "+ab.Height+" )");return ab;};f.jp=function(ar,ed){if(!ar){console.log(
"EmWi error: Invalid font resource.");return false;}return qi(ed,ar.n9,ar.qp)>=0;
};f.go=function(ar,ed){if(!ar){console.log("EmWi error: Invalid font resource.");
return false;}var a5=qi(ed,ar.n9,ar.qp);if((a5<0)&&(ed===0x00AD))return this.go(
ar,0x002D);if((a5<0)&&(ed===0x00A0))return this.go(ar,0x0020);if(a5<0)return 0;return a5>>
3;};f.gT=function(){return null;};f.kE=function(rc){};f.q2=function(rc){};f.mz=function(
rc){};f.fY=function(ar,mC,mD,rh,vY,eq,aba){if(rh<=0)return 0;if(vY)rh=1;eq[1]=this.
go(ar,mC.charCodeAt(mD));if(!eq[1]&&(mC.charCodeAt(mD)===0x00A0))eq[1]=this.go(ar
,0x20);else if(!eq[1]&&(mC.charCodeAt(mD)===0x00AD))eq[1]=this.go(ar,0x2D);else if(
!eq[1]&&(mC.charCodeAt(mD)===0x2026)){eq[1]=eq[2]=eq[3]=this.go(ar,0x2E);if(eq[1
]){eq[0]=3;return 1;}}if(eq[1]){eq[0]=1;return 1;}eq[0]=0;return 0;};f.eD=function(
ar,hV){if(!ar){console.log("EmWi error: Invalid font resource.");return null;}if((
hV<0)||(hV>=ar.oa))return null;var ab=ar.Cache[hV];if(ab){oh(this,ab);p5(this,ab
);return ab;}var cA=ar.n9;var a5=hV*8;var y6=cA.charCodeAt(a5+6);var y7=cA.charCodeAt(
a5+7);var y4=cA.charCodeAt(a5+14);var y5=cA.charCodeAt(a5+15);var a6=y7|(y6<<16);
var dx=y5|(y4<<16);ab={Cache:ar.Cache,lK:hV,OriginX:cA.charCodeAt(a5+1)-32768,OriginY:
cA.charCodeAt(a5+2)-32768,Width:cA.charCodeAt(a5+3),Height:cA.charCodeAt(a5+4),Advance:
cA.charCodeAt(a5+5)-32768,oc:a6,uM:dx-a6,qo:false};p5(this,ab);return ab;};f.de=
function(ar,oQ,oR){if(!ar){console.log("EmWi error: Invalid font resource.");return 0;
}if(!ar.qn||(oQ<0)||(oR<0)||(oQ>=ar.oa)||(oR>=ar.oa))return 0;var e=ar.qn;var y0=
ar.uH;var yb=oQ|(oR<<16);var r=0;var min=0;var max=(e.length>>1)-1;var dS=-1;while(
max>=min){r=(max+min)>>1;dS=yb-(e.charCodeAt(r*2)|(e.charCodeAt(r*2+1)<<16));if(
!dS)return y0.charCodeAt(r)-128;if(dS<0)max=r-1;else min=r+1;}return 0;};f.ms=function(
ar,k,ah,ac){var l=0;var a$=0;var a1=k.length;var ax;if(!ar){console.log("EmWi error: Invalid font resource."
);return 0;}if(ac===-1)ac=a1;if(a1<ac)ac=a1;if(ah<0){ac+=ah;ah=0;}if((ah+ac)>a1)
ac=a1-ah;ax=this.gT();while(ac>0){var aw=[];var aa=k.charCodeAt(ah);var a3;var d;
if((aa===0x061C)||(aa===0xFEFF)||((aa>=0x200B)&&(aa<=0x200F))||((aa>=0x202A)&&(aa<=
0x202E))||((aa>=0x2066)&&(aa<=0x2069))){ac--;ah++;continue;}if(aa===0x000A){ac--;
ah++;a$=0;continue;}a3=this.fY(ar,k,ah,Math.min(ac,8),false,aw,ax);if(!a3){aw[0]=
1;aw[1]=0;a3=1;}for(d=0;d<aw[0];d++){var ab=this.eD(ar,aw[d+1]);if(!ab){a$=0;continue;
}l+=this.de(ar,a$,aw[d+1])+ab.Advance;a$=aw[d+1];}ac-=a3;ah+=a3;}return l;};f.z1=
function(ar,k,ah,ac){var f3=[0,0,0,0];var l=0;var a$=0;var a1=k.length;var ax;if(
!ar){console.log("EmWi error: Invalid font resource.");return this.vx;}if(ac===-
1)ac=a1;if(a1<ac)ac=a1;if(ah<0){ac+=ah;ah=0;}if((ah+ac)>a1)ac=a1-ah;ax=this.gT();
while(ac>0){var aw=[];var aa=k.charCodeAt(ah);var a3;var d;if((aa===0x061C)||(aa===
0xFEFF)||((aa>=0x200B)&&(aa<=0x200F))||((aa>=0x202A)&&(aa<=0x202E))||((aa>=0x2066
)&&(aa<=0x2069))){ac--;ah++;continue;}if(aa===0x000A){ac--;ah++;a$=0;continue;}a3=
this.fY(ar,k,ah,Math.min(ac,8),false,aw,ax);if(!a3){aw[0]=1;aw[1]=0;a3=1;}for(d=
0;d<aw[0];d++){var ab=this.eD(ar,aw[d+1]);if(!ab){a$=0;continue;}if(!l)f3[0]=ab.
OriginX;f3[1]=Math.min(f3[1],ab.OriginY);f3[3]=Math.max(f3[3],ab.OriginY+ab.Height
);l+=this.de(ar,a$,aw[d+1]);f3[2]=Math.max(f3[2],l+ab.OriginX+ab.Width);l+=ab.Advance;
if(!(ab.OriginX+ab.Width)&&ab.Advance)f3[2]=Math.max(l,f3[2]);a$=aw[d+1];}ac-=a3;
ah+=a3;}return f3;};f.z0=function(ar,k,ah,ac,bl,es){var fP=0;var fO=0x8000;var rY=
0;var a1=k.length;var a$=0;var ax;if(!ar){console.log("EmWi error: Invalid font resource."
);return 0;}if(ac===-1)ac=a1;if(a1<ac)ac=a1;if(ah<0){ac+=ah;ah=0;}if((ah+ac)>a1)
ac=a1-ah;if(!ac)return 0;if(bl<0)return-1;if(es>0)es-=this.ms(ar,k,ah,ac);if(es>
0){var cc=ah;var af=ac;var fI=0;for(;af;cc++,af--){var aa=k.charCodeAt(cc);if((aa===
32)||(aa===0xA0))fI++;}if(fI)fP=((es<<16)/fI)|0;}ax=this.gT();while(ac>0){var aw=[
];var aa=k.charCodeAt(ah);var jJ=0;var a3;var d;if((aa===0x061C)||(aa===0xFEFF)||((
aa>=0x200B)&&(aa<=0x200F))||((aa>=0x202A)&&(aa<=0x202E))||((aa>=0x2066)&&(aa<=0x2069
))){ac--;ah++;continue;}if(aa===0x000A){ac--;ah++;a$=0;continue;}a3=this.fY(ar,k
,ah,Math.min(ac,8),false,aw,ax);if(!a3){aw[0]=1;aw[1]=0;a3=1;}for(d=0;d<aw[0];d++
){var ab=this.eD(ar,aw[d+1]);if(!ab){a$=0;continue;}jJ+=this.de(ar,a$,aw[d+1]);jJ+=
ab.Advance;a$=aw[d+1];}if(fP&&((aa===0x20)||(aa===0xA0))){fO+=fP;jJ+=fO>>16;fO&=
0xFFFF;}if(bl<((jJ>>1)+1))break;ac-=a3;ah+=a3;rY+=a3;bl-=jJ;}return rY;};f.zQ=function(
ar,k,ah,ac,gp,es){var fP=0;var fO=0x8000;var l=0;var a1=k.length;var a$=0;var ax;
if(!ar){console.log("EmWi error: Invalid font resource.");return 0;}if(ac===-1)ac=
a1;if(a1<ac)ac=a1;if(ah<0){ac+=ah;ah=0;}if((ah+ac)>a1)ac=a1-ah;if(!ac)return 0;if(
gp<0)return-1;if(es>0)es-=this.ms(ar,k,ah,ac);if(es>0){var cc=ah;var af=ac;var fI=
0;for(;af;cc++,af--){var aa=k.charCodeAt(cc);if((aa===32)||(aa===0xA0))fI++;}if(
fI)fP=((es<<16)/fI)|0;}ax=this.gT();while(ac>0){var aw=[];var aa=k.charCodeAt(ah
);var jJ=0;var a3;var d;if((aa===0x061C)||(aa===0xFEFF)||((aa>=0x200B)&&(aa<=0x200F
))||((aa>=0x202A)&&(aa<=0x202E))||((aa>=0x2066)&&(aa<=0x2069))){ac--;ah++;continue;
}if(aa===0x000A){ac--;ah++;a$=0;continue;}a3=this.fY(ar,k,ah,Math.min(ac,8),false
,aw,ax);if(!a3){aw[0]=1;aw[1]=0;a3=1;}if(a3>gp)break;for(d=0;d<aw[0];d++){var ab=
this.eD(ar,aw[d+1]);if(!ab){a$=0;continue;}l+=this.de(ar,a$,aw[d+1]);l+=ab.Advance;
a$=aw[d+1];}if(fP&&((aa===0x20)||(aa===0xA0))){fO+=fP;l+=fO>>16;fO&=0xFFFF;}ac-=
a3;ah+=a3;gp-=a3;}return l;};f.aaz=function(ar,k,ah,aG,rf,au){var pq=(aG<0)?0x7FFFFFFE:
aG;var ss=(rf<0)?0x7FFFFFFF:rf;var lk=Math.max(ah,0);var iw=Math.max(k.length-lk
,0);var pe=iw*2+1;var ae=new Uint16Array(pe+1);var src=ae;var fz=1;var cP=fz+1;var
gJ=pe-iw;var bS=gJ;var cr=0;var eB=false;var a$=0;var dX=-1;var width=0;var af=0;
var aa=0;var r=0;var ax;if(!ar||!iw||!ss)return"";for(r=0;r<iw;r++)ae[r+bS]=k.charCodeAt(
r+lk);ae[pe]=0;for(r=0;r<iw;r++)switch(src[r+bS]){case 0x25:src[bS+r++]=0xFEFF;break;
case 0x5E:src[bS+r]=0x200B;break;case 0x7E:src[bS+r]=0x00AD;break;}if(au&&!this.
qM(au,src,bS,iw,-1))au=null;if(au){this.qO(au,src,bS);this.qN(au,src,bS);this.qL(
au,src,bS,null,[ar]);}var sS=String.fromCharCode.apply(null,src.slice(bS));ax=this.
gT();for(r=0;aa=src[bS];){var a3=1;if(aa!==0xA){var ab;var eg=0;var fx=0;var wM=
bS;if((aa===0x061C)||((aa>=0x200C)&&(aa<=0x200F))||((aa>=0x202A)&&(aa<=0x202E))||((
aa>=0x2066)&&(aa<=0x2069)))aa=0xFEFF;if(eB&&(aa!==0xFEFF)&&(aa!==0x200B)&&(aa!==
0x00AD)&&(aa!==0x20))eB=false;if((aa===0x200B)&&width&&!eB){if(cr&&(ae[cr]===0xAD
))ae[cr]=0xFEFF;cr=cP;eB=true;}if((aa===0x20)&&width){if(cr&&(ae[cr]===0xAD))ae[
cr]=0xFEFF;cr=cP;eB=true;}if((aa===0xAD)&&(!width||eB))aa=0xFEFF;if(aa===0x00AD){
var fb=this.go(ar,0x00AD);var j_=0;if(fb&&(ab=this.eD(ar,fb))!==null){var an=au?
this.jl(au,bS-gJ):0;j_=ab.Advance;if(an===dX)if(an&1)j_+=this.de(ar,fb,a$);else j_+=
this.de(ar,a$,fb);}if(((width+j_)<=pq)&&j_||!cr){if(cr&&(ae[cr]===0xAD))ae[cr]=0xFEFF;
width-=j_;cr=cP;eB=true;}}if(aa===0x200B)aa=0xFEFF;if(aa!=0xFEFF){var aw=[];var dW=
Math.min(iw-(bS-gJ),8);var lo=dX;var is=a$;var an;var d;if(au){an=this.jl(au,bS-
gJ);for(d=1;d<dW;d++)if(an!==this.jl(au,bS-gJ+d))dW=d;}this.q2(ax);a3=this.fY(ar
,sS,bS-gJ,dW,an&1,aw,ax);if(!a3){aw[0]=1;aw[1]=0;a3=1;}for(d=0;d<aw[0];d++){var ab=
this.eD(ar,aw[d+1]);if(ab){eg+=ab.Advance;if(an===dX){if(an&1)eg+=this.de(ar,aw[
d+1],a$);else eg+=this.de(ar,a$,aw[d+1]);}a$=aw[d+1];dX=an;}}fx=eg;if((a3<dW)&&((
pq-width)<(3*fx))){var fw=0;this.mz(ax);this.fY(ar,sS,bS-gJ,a3,an&1,aw,ax);this.
mz(ax);for(d=0;d<aw[0];d++){var ab=this.eD(ar,aw[d+1]);if(ab){fw+=ab.Advance;if(
an===lo){if(an&1)fw+=this.de(ar,aw[d+1],is);else fw+=this.de(ar,is,aw[d+1]);}is=
aw[d+1];lo=an;}}if(fw>fx)fx=fw;}}if(((fx+width)<=pq)||!width){width+=eg;while(a3-->
0)ae[cP++]=src[bS++];}else if(cr){if(ae[cr]===0x20)ae[cr]=0xFEFF;for(bS--,cP--;cP>
cr;bS--,cP--)src[bS]=ae[cP];cr=0;aa=0xA;bS++;cP++;}else{bS=wM;aa=0xA;}if(aa===0xA
){if(src[bS]===0x20){ae[cP++]=0xFEFF;bS++;}while(((aa=src[bS])===0xAD)||(aa===0x061C
)||(aa===0xFEFF)||((aa>=0x200B)&&(aa<=0x200F))||((aa>=0x202A)&&(aa<=0x202E))||((
aa>=0x2066)&&(aa<=0x2069))){ae[cP++]=0xFEFF;bS++;}aa=0xA;}}else{bS++;ae[cP++]=aa;
}if((aa===0xA)&&src[bS]){if(--ss<=0)break;if(cr&&(ae[cr]===0xAD))ae[cr]=0xFEFF;if(
au){var fE=bS-gJ;var gL=fE-(cP-fz)+1;this.ok(au,gL,fE);this.kv(au,gL,fE,ae,fz+1);
}ae[fz]=cP-fz;ae[cP]=0;fz=cP;cP+=1;cr=0;eB=false;width=0;a$=0;dX=-1;af++;this.kE(
ax);}}if(cr&&(ae[cr]===0xAD))ae[cr]=0xFEFF;if((cP-fz)>1){if(au){var fE=bS-gJ;var
gL=fE-(cP-fz)+1;this.ok(au,gL,fE);this.kv(au,gL,fE,ae,fz+1);}ae[fz]=cP-fz;ae[cP]=
0;af++;}ae[0]=af;var sK="";for(r=0;r<cP;r++)sK+=String.fromCharCode(ae[r]);return sK;
};f.zG=function(ar,oO){var a1=oO.length;var r=1;var d2=0;if(!a1)return 0;if(!ar){
console.log("EmWi error: Invalid font resource.");return 0;}while(r<a1){var lk=oO.
charCodeAt(r);var sN=lk-1;var sM=r+1;var pC;if((sM+sN)>a1)return 0;pC=this.ms(ar
,oO,sM,sN);if(pC>d2)d2=pC;r+=lk;}return d2;};f.zi=function(kT,kS,jE){if(kT<0)kT=
0;if(kS<0)kS=0;if(jE<0)jE=0;if(kT>256)kT=256;if(kS>256)kS=256;if(jE>256)jE=256;return{
fS:kT,hA:kS,kl:jE,eV:[],gO:[],iF:[]};};f.zv=function(ao){if(ao){delete ao.eV;delete
ao.gO;delete ao.iF;}};f.aaI=function(ao,oM,bc){if(!ao||(oM<0))return;if(oM<ao.kl
)ao.iF[oM]=bc;};f.aaH=function(ao,oC,ck){if(!ao||(oC<0))return;if(oC<ao.hA)ao.gO[
oC]=ck;};f.aaJ=function(ao,oP,ar){if(!ao||(oP<0))return;if(oP<ao.fS)ao.eV[oP]=ar;
};function gk(k,j,az,ee){var g=0;var al=k.charCodeAt(j);while((al>=0x30)&&(al<=0x39
)){g=(g*10)+(al-0x30);al=k.charCodeAt(++j);}az[ee]=g;return j;}function ob(k,j,wc
,az,ee){j=gk(k,j,az,ee);if(k.charCodeAt(j)===0x25){var f8=az[ee]*wc;az[ee]=(f8/100
)|0;if((f8-(az[ee]*100))>50)az[ee]++;j++;}return j;}function qu(k,j,aG,az){az[0]=
0;az[1]=0;az[2]=0;az[3]=0;j=ob(k,j,aG,az,0);if(k.charCodeAt(j)===0x2C){j=ob(k,j+
1,aG,az,1);if(k.charCodeAt(j)===0x2C){j=gk(k,j+1,az,2);if(k.charCodeAt(j)===0x2C
)j=gk(k,j+1,az,3);}}if(az[0]>aG)az[0]=aG;if(az[1]>(aG-az[0]))az[1]=aG-az[0];return j;
}function uS(k,j,az,ee){var g=0x6C;var cF=k.charCodeAt(j);var e9=cF?k.charCodeAt(
j+1):0;if(((cF===0x6C)||(cF===0x72)||(cF===0x63)||(cF===0x61))&&(e9===0x6A)){g=cF-
0x20;j+=2;}else if((cF===0x6A)&&((e9===0x6C)||(e9===0x72)||(e9===0x63)||(e9===0x61
))){g=e9-0x20;j+=2;}else if((cF===0x6C)||(cF===0x72)||(cF===0x63)||(cF===0x61)){
g=cF;j++;}else if(cF===0x6A){g=0x4C;j++;}az[ee]=g;return j;}function qt(k,j,az,ee
){var g=0x6D;var al=k.charCodeAt(j);if((al===0x74)||(al===0x6D)||(al===0x62)){g=
al;j++;}az[ee]=g;return j;}function uT(k,j,aG,hP){var g=[0,0,0];var al=k.charCodeAt(
j);var d=0;var bE=0;var np=aG;var ld=0;var b4=[0];while((d<3)&&(((al>=0x30)&&(al<=
0x39))||(al===0x2A))){if(al===0x2A){g[d]=-1;ld++;j++;}else{j=ob(k,j,aG,g,d);np=np-
g[d];}if((al=k.charCodeAt(j))===0x2C)al=k.charCodeAt(++j);d++;}if(!d){g[0]=aG;d=
1;}for(;bE<ld;bE++){var d2=(np/ld)|0;if(bE===(ld-1))d2=np-(ld-1)*d2;if(g[0]<0)g[
0]=d2;else if(g[1]<0)g[1]=d2;else if(g[2]<0)g[2]=d2;}for(d=0;d<3;d++){if(g[d]<0)
g[d]=0;if(g[d]>aG)g[d]=aG;aG=aG-g[d];hP[d]=g[d];}return j;}function dM(k,j,rd){return k.
slice(j,j+rd.length)===rd;}function to(k,j){var aa;for(;(aa=k.charCodeAt(j));j++
){if((aa===0x7B)&&(dM(k,j+1,"par")||dM(k,j+1,"lay")||dM(k,j+1,"col")||dM(k,j+1,"end"
)))break;if((aa===0x25)&&(j<(k.length-1)))j++;}return j;}function uU(k,j,oN,kY,kX
,kZ,er){var abf=j;var dY=0;var ev=0;var c8=0;var lC=false;var j1=false;var eh=[0
,0,0];while(j<oN){var aa=k.charCodeAt(j);if(aa===0x7B){if(dM(k,j,"{img")){j=qt(k
,j+4,eh,0);j=gk(k,j,eh,1);if(k.charCodeAt(j)===0x2E){j++;j=gk(k,j,eh,2);}if(k.charCodeAt(
j)===0x7D)j++;if(eh[2]>4095)eh[2]=0;if(eh[1]>255)eh[1]=0;kY[dY]=0xFEFF;kX[dY]=((
eh[0]===0x74)?5:(eh[0]===0x62)?4:3)|(ev<<4)|(eh[1]<<12)|(eh[2]<<20);kZ[dY++]=j1?
er[0]:0;continue;}if(dM(k,j,"{fnt")){j=gk(k,j+4,eh,0);if(k.charCodeAt(j)===0x7D)
j++;c8=eh[0];if(c8>255)c8=0;continue;}if(dM(k,j,"{clr")){j=gk(k,j+4,eh,0);if(k.charCodeAt(
j)===0x7D)j++;ev=eh[0];if(ev>255)ev=0;continue;}if(dM(k,j,"{ul+}")){lC=true;j+=5;
continue;}if(dM(k,j,"{ul-}")){lC=false;j+=5;continue;}if(dM(k,j,"{lnk:")){j+=5;j1=
true;er[0]+=1;while((j<oN)&&((aa=k.charCodeAt(j))!==0x7D)&&(aa!==0x7B))j++;if(k.
charCodeAt(j)===0x7D)j++;continue;}if(dM(k,j,"{lnk}")){j+=5;j1=false;continue;}}
if(aa===0x5E){kY[dY]=0x200B;kX[dY]=(lC?2:1)|(ev<<4)|(c8<<12);kZ[dY++]=j1?er[0]:0;
j++;continue;}if(aa===0x7E){kY[dY]=0xAD;kX[dY]=(lC?2:1)|(ev<<4)|(c8<<12);kZ[dY++
]=j1?er[0]:0;j++;continue;}if(aa===0x25){aa=k.charCodeAt(++j);if(j===oN)break;}kY[
dY]=aa;kX[dY]=(lC?2:1)|(ev<<4)|(c8<<12);kZ[dY++]=j1?er[0]:0;j++;}kY[dY]=0;kX[dY]=
0;kZ[dY]=0;return dY;}function p4(aj,ao,k,j,aG,gr,aU,dg,v3,eH,v4,gZ,er){var z=[0
];var gD=[0];var dn=aU.length;aU.push(0x47,0,0,aG,0,0,0);j=qs(aj,ao,k,j,aG,0x6C,
gr,aU,z,gD,gZ,er);if(aU.length>(dn+7)){aU[dn+4]=z[0];aU[dn+5]=aU.length-dn;}else
aU.splice(dn,aU.length-dn);while(j<k.length){if(dM(k,j,"{par")){var du=[0,0,0,0];
var gt=[-1];var rs=[];var width;var height=[0];j=uS(k,j+4,rs,0);j=qu(k,j,aG,du);
if(k.charCodeAt(j)===0x3A)j=gk(k,j+1,gt,0);if(k.charCodeAt(j)===0x7D)j++;if(gt[0
]!==-1)aU.push(0x52,0,z[0]+gD[0],aG,0,gt[0]);dn=aU.length;width=aG-du[0]-du[1];aU.
push(0x47,0,(z[0]+=gD[0])+du[2],aG,0,0,du[0]);j=qs(aj,ao,k,j,width,rs[0],gr,aU,height
,gD,gZ,er);z[0]+=du[2]+height[0]+du[3];aU[dn+4]=z[0]-du[3];aU[dn+5]=aU.length-dn;
if(gt[0]!==-1)aU[dn-2]=z[0];}else if(dM(k,j,"{lay")){var rZ=[];var height=[0];dn=
aU.length;j=uT(k,j+4,aG,rZ);if(k.charCodeAt(j)===0x7D)j++;aU.push(0x47,0,z[0]+=gD[
0],aG,0,0,0);j=uI(aj,ao,k,j,gr,rZ,aU,height,gD,gZ,er);z[0]+=height[0];aU[dn+4]=z[
0];aU[dn+5]=aU.length-dn;}else break;}dg[v3]=z[0];eH[v4]=gD[0];return j;}function
uI(aj,ao,k,j,gr,hP,aU,dg,eH,gZ,er){var rt=[];var k9=[];var jP=[];var gt=[-1,-1,-
1];var sp=[0,0,0];var d=0;var bE=0;var l=0;var height=0;var pR=0;while((j<k.length
)&&(d<hP.length)){if(dM(k,j,"{col")){var du=[0,0,0,0];var width;j=qt(k,j+4,rt,d);
j=qu(k,j,hP[d],du);if(k.charCodeAt(j)===0x3A)j=gk(k,j+1,gt,d);if(k.charCodeAt(j)===
0x7D)j++;if(gt[d]!==-1)aU.push(0x52,l,0,l+hP[d],0,gt[d]);k9[d]=aU.length;width=hP[
d]-du[0]-du[1];aU.push(0x47,l+du[0],du[2],l+du[0]+width,0,0,0);j=p4(aj,ao,k,j,width
,gr,aU,jP,d,sp,d,gZ,er);jP[d]+=du[2]+du[3];height=Math.max(height,jP[d]);pR=Math.
max(pR,jP[d]+sp[d]);aU[k9[d]+4]=jP[d]-du[3];aU[k9[d]+5]=aU.length-k9[d];l+=hP[d];
d++;}else break;}for(bE=0;bE<d;bE++){var dn=k9[bE];var nD=height-jP[bE];switch(rt[
bE]){case 0x74:nD=0;break;case 0x6D:nD>>=1;break;}aU[dn+2]+=nD;aU[dn+4]+=nD;if(gt[
bE]!==-1)aU[dn-2]=height;}dg[0]=height;eH[0]=pR-height;if(dM(k,j,"{end}"))j+=5;return j;
}function uW(aj,ao,eo,e4,cV,oW,au,az){var m_=String.fromCharCode.apply(null,eo);
var gL=cV;var am=null;var c8=-1;var dL=0;var pZ=0;var s7=0;var pY=0;var pV=0;var
pW=0;var pX=0;var eB=false;var gz=0;var a$=0;var dX=-1;var ax=aj.gT();az[0]=0;az[
1]=0;az[2]=0;az[3]=0;az[4]=0;for(;eo[cV];cV++){var eL=e4[cV];var aQ=eo[cV];var type=
eL&0xF;var fy=0;var pb=0;var r6=0;var r9=0;var nf=0;var ng=0;var nh=0;var a3=0;if(((
type===1)||(type===2))&&(((eL>>12)&0xFF)!==c8)){c8=(eL>>12)&0xFF;am=null;if(ao&&(
c8>=0)&&(c8<ao.fS))am=ao.eV[c8];if(!am){c8=0;am=(ao&&(ao.fS>0))?ao.eV[0]:null;}dX=-
1;a$=0;aj.kE(ax);}if((aQ===0xA)&&am){az[3]=Math.max(az[3],am.Ascent);az[4]=Math.
max(az[4],am.Leading);gz=Math.max(gz,am.Descent);}if(aQ===0xA)break;if((type>=3)&&(
type<=5)){var g8=(eL>>12)&0xFF;var b7=null;if(ao&&(g8>=0)&&(g8<ao.hA))b7=ao.gO[g8
];if(!b7&&ao&&(ao.hA>0))b7=ao.gO[0];if(b7){fy=b7.FrameSize[0];r6=b7.FrameSize[1];
pb=fy;}dX=-1;a$=0;aj.kE(ax);}else{var ab;if((aQ===0x200B)&&(!az[0]||eB))aQ=0xFEFF;
if((aQ===0xAD)&&(!az[0]||eB))aQ=0xFEFF;if((aQ===0x20)&&!az[0])aQ=0xA0;if((aQ===0x20
)||(aQ===0x200B)){if(dL&&(eo[dL]===0xAD))eo[dL]=0xFEFF;dL=cV;pZ=az[0];s7=az[1];pY=
az[2];pV=az[3];pX=az[4];pW=gz;eB=true;}if(aQ===0xAD){var fb=am?aj.go(am,aQ):0;if(
fb&&az[0]&&(ab=aj.eD(am,fb))){var an=au?aj.jl(au,cV):0;fy=ab.Advance;nf=am.Ascent;
ng=am.Descent;nh=am.Leading;if(an===dX)if(an&1)fy+=aj.de(am,fb,a$);else fy+=aj.de(
am,a$,fb);}if(((az[0]+fy)<=oW)&&fy){if(dL&&(eo[dL]===0xAD))eo[dL]=0xFEFF;dL=cV;pZ=
az[0]+fy;pV=Math.max(az[3],nf);pX=Math.max(az[4],nh);pW=Math.max(gz,ng);pY=az[2];
eB=true;}continue;}if((aQ===0x061C)||((aQ>=0x200B)&&(aQ<=0x200F))||((aQ>=0x202A)&&(
aQ<=0x202E))||((aQ>=0x2066)&&(aQ<=0x2069)))aQ=0xFEFF;if(aQ===0xFEFF){eo[cV]=0xFEFF;
continue;}if(dL!==cV)eB=false;if(am){var aw=[];var an=0;var dW=1;var eg=0;var fx=
0;var lo=dX;var is=a$;var d=cV+1;while(eo[d]&&(e4[d]===eL)&&(dW<8)){dW++;d++;}if(
au){an=aj.jl(au,cV);for(d=1;d<dW;d++)if(an!=aj.jl(au,cV+d))dW=d;}aj.q2(ax);a3=aj.
fY(am,m_,cV,dW,an&1,aw,ax);if(!a3){aw[0]=1;aw[1]=0;a3=1;}for(d=0;d<aw[0];d++){var
ab=aj.eD(am,aw[d+1]);if(ab){eg+=ab.Advance;if(an===dX){if(an&1)eg+=aj.de(am,aw[d+
1],a$);else eg+=aj.de(am,a$,aw[d+1]);}a$=aw[d+1];dX=an;}}fx=eg;if((a3<dW)&&((oW-
az[0])<(3*fx))){var fw=0;aj.mz(ax);aj.fY(am,m_,cV,a3,an&1,aw,ax);aj.mz(ax);for(d=
0;d<aw[0];d++){var ab=aj.eD(am,aw[d+1]);if(ab){fw+=ab.Advance;if(an===lo){if(an&
1)fw+=aj.de(am,aw[d+1],is);else fw+=aj.de(am,is,aw[d+1]);}is=aw[d+1];lo=an;}}if(
fw>fx)fx=fw;}fy=eg;pb=fx;nf=am.Ascent;ng=am.Descent;nh=am.Leading;if((aQ===0x20)||(
aQ===0xA0))r9=fy;}}if(((pb+az[0])<=oW)||!az[0]){az[0]+=fy;az[1]=Math.max(az[1],r6
);az[3]=Math.max(az[3],nf);az[4]=Math.max(az[4],nh);gz=Math.max(gz,ng);az[2]+=r9;
cV+=a3-1;continue;}if(dL){az[0]=pZ;az[1]=s7;az[2]=pY;az[3]=pV;az[4]=pX;gz=pW;cV=
dL+1;if(eo[dL]===0x20)eo[dL]=0xFEFF;while((((type=(e4[cV]&0xF))===1)||(type===2)
)&&(((aQ=eo[cV])===0xFEFF)||(aQ===0x200B)||(aQ===0xAD)))cV++;dL=0;}break;}if(dL&&(
eo[dL]===0xAD))eo[dL]=0xFEFF;az[1]=Math.max(az[1],az[3]+gz);az[3]+=(az[1]-az[3]-
gz)>>1;return cV-gL;}function qs(aj,ao,k,j,aG,vT,gr,aU,dg,eH,gZ,er){var fE=to(k,
j);var am=(ao&&(ao.fS>0))?ao.eV[0]:null;var a1=fE-j+1;var eu=new Uint16Array(a1);
var f1=new Uint32Array(a1);var po=new Uint16Array(a1);var dt=null;var ik=false;var
r=0;var c8=0;var ev=0;var gM=0;var gE=0;var sn=[0];var dV=[0,0,0,0,0];a1=uU(k,j,
fE,eu,f1,po,sn);if(a1&&gr)dt=aj.vj(a1);if(dt&&!aj.qM(dt,eu,0,a1,-1)){aj.qU(dt);dt=
null;}if(dt){aj.qO(dt,eu,0);aj.qN(dt,eu,0);aj.qL(dt,eu,0,f1,ao.eV);ik=aj.vi(dt);
if(gZ[0]<0)gZ[0]=ik?1:0;}dg[0]=0;eH[0]=0;while(r<a1){var fd=vT;var l=0;var sq=0;
var gI=0;var nJ=0;var sR=0;var a$=0;var ax=aj.gT();var af=uW(aj,ao,eu,f1,r,aG,dt
,dV);if(dt){aj.ok(dt,r,r+af);aj.kv(dt,r,r+af,eu,r);aj.kv(dt,r,r+af,f1,r);aj.kv(dt
,r,r+af,po,r);}if(fd===0x61)fd=ik?0x72:0x6C;if(fd===0x41)fd=ik?0x52:0x4C;if((fd===
0x4C)||(fd===0x52)||(fd===0x43))if((!eu[r+af]||(eu[r+af]===0xA)||!dV[2])){fd+=0x20;
dV[2]=0;}else fd=0x4C;if(fd===0x72)l+=aG-dV[0];else if(fd===0x63)l+=(aG-dV[0])>>
1;var m_=String.fromCharCode.apply(null,eu);for(;af>=0;af--,r++){var aQ=af?eu[r]:
0;var eL=af?f1[r]:0;var type=eL&0xF;var pv=ev;var hq=c8;var nB=gM;var nA=af?po[r
]:0;var ab;if((type>=1)&&(type<=5))pv=(eL>>4)&0xFF;if((type===1)||(type===2))hq=(
eL>>12)&0xFF;if(type===1)nB=0;if(type===2)nB=1;if(gI&&(((type!==1)&&(type!==2))||(
ev!==pv)||(c8!==hq)||(gM!==nB)||(gE!==nA))){if(nJ&&(fd===0x4C)){var aJ=(nJ*(aG-dV[
0]))+sR;var ba=(aJ/dV[2])|0;sR=aJ-(ba*dV[2]);l+=ba;aU[gI]=0x4A;aU.push(l-aU[gI+1
]);}if(gM){var fb=am?aj.go(am,0x2D):0;if(fb&&((ab=aj.eD(am,fb))!=null))gM=ab.Height;
if(gM<=0)gM=1;aU.push(0x52,aU[gI+1],dg[0]+eH[0]+dV[3]+gM,l,dg[0]+eH[0]+dV[3]+(gM
*2),ev);}gI=0;nJ=0;}if(c8!==hq){am=null;if(ao&&(hq>=0)&&(hq<ao.fS))am=ao.eV[hq];
if(!am)am=(ao&&(ao.fS>0))?ao.eV[0]:null;}if(gE&&(gE!==nA))aU.push(0x41,gE+er[0],
sq,dg[0]+eH[0],l,dg[0]+eH[0]+dV[1],dV[3]);if(gE!==nA)sq=l;if(c8!==hq){a$=0;aj.kE(
ax);}ev=pv;c8=hq;gM=nB;gE=nA;if((type>=3)&&(type<=5)){var g8=(eL>>12)&0xFF;var hl=(
eL>>20)&0xFFF;var b7=null;if(ao&&(g8>=0)&&(g8<ao.hA))b7=ao.gO[g8];if(!b7&&ao&&(ao.
hA>0))b7=ao.gO[0];if(b7&&(hl>=b7.NoOfFrames))hl=0;if(b7){var cc=dV[1]-b7.FrameSize[
1];switch(type){case 3:cc>>=1;break;case 5:cc=0;break;}aU.push(0x49,l,dg[0]+eH[0
]+cc,g8,hl,ev);l+=b7.FrameSize[0];}a$=0;aj.kE(ax);}if(((type===1)||(type===2))&&
am&&(aQ!==0xFEFF)){var aw=[];var dW=1;var d=r+1;var ph=true;var eL=f1[r];var a3=
0;var eg=0;var dG=0;var bE;while(eu[d]&&(f1[d]==eL)&&(dW<8)&&(dW<af)){dW++;d++;}
a3=aj.fY(am,m_,r,dW,false,aw,ax);if(!a3){aw[0]=1;aw[1]=0;a3=1;}for(d=0;d<aw[0];d++
){var ab=aj.eD(am,aw[d+1]);if(ab){eg+=ab.Advance;if(ph){dG=aj.de(am,a$,aw[1]);ph=
false;}else eg+=aj.de(am,a$,aw[d+1]);a$=aw[d+1];}}if(!gI&&!ph){gI=aU.length;aU.push(
0x54,l+dG,dg[0]+eH[0]+dV[3],"",c8,ev);}for(bE=0;(bE<a3)&&gI;bE++)aU[gI+3]+=String.
fromCharCode(eu[r+bE]);l+=eg+dG;r+=a3-1;af-=a3-1;if((aQ===0x20)||(aQ===0xA0))nJ+=
ab.Advance;}}if(eu[r-1]!==0xA)r--;dg[0]+=dV[1]+eH[0];eH[0]=dV[4];}if(dt)aj.qU(dt
);er[0]+=sn[0];return fE;}function th(k,j,mJ){var aa;while((aa=k.charCodeAt(j))){
if((aa===0x7B)&&dM(k,j,"{lnk:")){var gL=j+=5;while(((aa=k.charCodeAt(j)))&&(aa!==
0x7D)&&(aa!==0x7B))j++;mJ.push({lJ:0,ml:0xFFFFFFFE,lP:0,oi:0,mo:0,uL:k.slice(gL,
j)});continue;}if((aa===0x25)&&((j+1)<k.length))j++;j++;}}function qa(mJ,e6,e7,bf
,aK,gX){while(aK<gX){switch(bf[aK]){case 0x47:{var af=bf[aK+5];var l=bf[aK+1]+bf[
aK+6]+e6;var z=bf[aK+2]+e7;qa(mJ,l,z,bf,aK+7,aK+af);aK+=af;}break;case 0x54:aK+=
6;break;case 0x4A:aK+=7;break;case 0x49:aK+=6;break;case 0x52:aK+=6;break;case 0x41:{
var cR=mJ[bf[aK+1]-1];cR.ml=Math.min(cR.ml,aK);cR.lJ=Math.max(cR.lJ,aK+7);cR.oi=
e6;cR.mo=e7;cR.lP++;aK+=7;}break;}}}function qw(c5,fZ,bf,wh,q_){var t=wh;while(t<
q_){switch(bf[t]){case 0x54:t+=6;break;case 0x4A:t+=7;break;case 0x49:t+=6;break;
case 0x52:t+=6;break;case 0x41:{var gE=bf[t+1];if((gE===c5)&&!fZ)return t;if(gE===
c5)fZ--;t+=7;}break;default:t=q_;}}return-1;}function tl(aj,x,ak,ag,c3,e6,e7,ao,
bf,aK,gX,ay,a7){function dN(eG,bl,bA,bc){var jK=eG.s8;var rw=eG.s_;if(bl<0)bl=0;
if(bA<0)bA=0;if(bl>eG.Width)bl=eG.Width;if(bA>eG.Height)bA=eG.Height;if(eG.qm&&bA
)jK+=bA*eG.s9;if(eG.qm&&eG.ql&&bA)rw+=bA*eG.s$;if(eG.ql&&bl)jK+=(rw-jK)*eG.uF*bl;
if(jK>=255)return bc;if(jK<=0)return bc&0xFFFFFF;var wJ=((((bc>>24)&0xFF)*jK/255
)<<24)|(bc&0xFFFFFF);return wJ;}function qe(aj,x,ak,ag,c3,e6,e7,ao,bf,aK,gX,ay,a7
){while(aK<gX){var aa=bf[aK];if((aa===0x47)||(aa===0x52)){var aI=[bf[aK+1]+e6,bf[
aK+2]+e7,bf[aK+3]+e6,bf[aK+4]+e7];switch(aa){case 0x47:{var af=bf[aK+5];if((ag[0
]<ag[2])&&(ag[1]<ag[3]))qe(aj,x,ak,ag,c3,aI[0]+bf[aK+6],aI[1],ao,bf,aK+7,aK+af,ay
,a7);aK+=af;}break;case 0x52:{var bv=bf[aK+5];var p=aI[0]-c3[0];var w=aI[2]-c3[0
];var n=aI[1]-c3[1];var u=aI[3]-c3[1];if((bv>=0)&&(bv<ao.kl))bv=ao.iF[bv];else bv=
0;var h9=dN(a7,p,n,bv);var h_=dN(a7,w,n,bv);var h8=dN(a7,w,u,bv);var h7=dN(a7,p,
u,bv);aj.jn(x,ak,ag,aI,h9,h_,h8,h7,ay);aK+=6;}break;}}else if((aa===0x54)||(aa===
0x49))aK+=6;else if(aa===0x4A)aK+=7;else if(aa===0x41)aK+=7;}}function qf(aj,x,ak
,ag,c3,e6,e7,ao,bf,aK,gX,ay,a7){while(aK<gX){var aa=bf[aK];if((aa===0x47)||(aa===
0x52)){var aI=[bf[aK+1]+e6,bf[aK+2]+e7,bf[aK+3]+e6,bf[aK+4]+e7];switch(aa){case 0x47:{
var af=bf[aK+5];if((ag[0]<ag[2])&&(ag[1]<ag[3]))qf(aj,x,ak,ag,c3,aI[0]+bf[aK+6],
aI[1],ao,bf,aK+7,aK+af,ay,a7);aK+=af;}break;case 0x52:{aK+=6;}break;}}else if((aa===
0x54)||(aa===0x4A)||(aa===0x49)){var a5=[bf[aK+1]+e6,bf[aK+2]+e7];switch(aa){case
0x54:{var am=bf[aK+4];var bv=bf[aK+5];var p=ag[0]-c3[0];var n=ag[1]-c3[1];var w=
ag[2]-c3[0];var u=ag[3]-c3[1];if((bv>=0)&&(bv<ao.kl))bv=ao.iF[bv];else bv=0;if((
am>=0)&&(am<ao.fS))am=ao.eV[am];else am=null;if(!am&&ao.fS)am=ao.eV[0];a5[0]=ag[
0]-a5[0];a5[1]=ag[1]-a5[1];if(am){var h9=dN(a7,p,n,bv);var h_=dN(a7,w,n,bv);var h8=
dN(a7,w,u,bv);var h7=dN(a7,p,u,bv);aj.qT(x,am,bf[aK+3],0,-1,ak,ag,ag,a5,0,0,h9,h_
,h8,h7,ay);}aK+=6;}break;case 0x4A:{var am=bf[aK+4];var bv=bf[aK+5];var p=ag[0]-
c3[0];var n=ag[1]-c3[1];var w=ag[2]-c3[0];var u=ag[3]-c3[1];var width=bf[aK+6];if((
bv>=0)&&(bv<ao.kl))bv=ao.iF[bv];else bv=0;if((am>=0)&&(am<ao.fS))am=ao.eV[am];else
am=null;if(!am&&ao.fS)am=ao.eV[0];a5[0]=ag[0]-a5[0];a5[1]=ag[1]-a5[1];if(am){var
h9=dN(a7,p,n,bv);var h_=dN(a7,w,n,bv);var h8=dN(a7,w,u,bv);var h7=dN(a7,p,u,bv);
aj.qT(x,am,bf[aK+3],0,-1,ak,ag,ag,a5,width,0,h9,h_,h8,h7,ay);}aK+=7;}break;case 0x49:{
var b7=bf[aK+3];var hl=bf[aK+4];var bv=bf[aK+5];if((bv>=0)&&(bv<ao.kl))bv=ao.iF[
bv];else bv=0;if((b7>=0)&&(b7<ao.hA))b7=ao.gO[b7];else b7=null;if(!b7&&ao.hA)b7=
ao.gO[0];if(b7){var p=a5[0]-c3[0];var n=a5[1]-c3[1];var w=p+b7.FrameSize[0];var u=
n+b7.FrameSize[1];var h9=dN(a7,p,n,bv);var h_=dN(a7,w,n,bv);var h8=dN(a7,w,u,bv);
var h7=dN(a7,p,u,bv);var c7=[a5[0],a5[1],a5[0]+b7.FrameSize[0],a5[1]+b7.FrameSize[
1]];aj.gn(x,b7,ak,hl,ag,c7,[0,0],h9,h_,h8,h7,ay);}aK+=6;}break;}}else if(aa===0x41
)aK+=7;}}qe(aj,x,ak,ag,c3,e6,e7,ao,bf,aK,gX,ay,a7);qf(aj,x,ak,ag,c3,e6,e7,ao,bf,
aK,gX,ay,a7);}f.aay=function(ao,k,aG,gr){var rA=[];var g7={};var height=[0];var sA=[
0];var gD=[0];var ik=[-1];if(!ao||!k.length||(aG<=0))return null;p4(this,ao,k,0,
aG,gr,rA,height,0,gD,0,ik,sA);g7.Data=rA;g7.fm=[];g7.uG=ik[0]===1;if(sA){th(k,0,
g7.fm);qa(g7.fm,0,0,g7.Data,0,g7.Data.length);}return g7;};f.zw=function(bp){};f.
zD=function(bp){if(!bp)return this.vw;if(!bp.gl){var h=bp?bp.Data:null;var t=0;var
dx=h?h.length:0;var c1=[0,0,0,0];while(t<dx){var p=h[t+1];var n=h[t+2];var w=h[t+
3];var u=h[t+4];if((p<w)&&(n<u)){if(c1[0]>p)c1[0]=p;if(c1[2]<w)c1[2]=w;if(c1[1]>
n)c1[1]=n;if(c1[3]<u)c1[3]=u;}if(h[t]===0x52)t+=6;else t+=h[t+5];}var d2=c1[2]-c1[
0];var jZ=c1[3]-c1[1];if(d2<0)d2=0;if(jZ<0)jZ=0;bp.gl=[d2,jZ];}return bp.gl;};f.
zK=function(bp){if(!bp)return 0;return bp.fm.length;};f.zB=function(bp,c5){if(!bp
)return this.jm;if((c5<0)||(c5>=bp.fm.length))return this.jm;return bp.fm[c5].uL;
};f.zJ=function(bp,c5){if(!bp)return 0;if((c5<0)||(c5>=bp.fm.length))return 0;return bp.
fm[c5].lP;};f.zC=function(bp,c5,fZ){var cR;var t;var c1=[0,0,0,0];if(!bp)return c1;
if((c5<0)||(c5>=bp.fm.length))return c1;cR=bp.fm[c5];if((fZ<0)||(fZ>=cR.lP))return c1;
t=qw(c5+1,fZ,bp.Data,cR.ml,cR.lJ);if(t>=0){c1[0]=bp.Data[t+2]+cR.oi;c1[1]=bp.Data[
t+3]+cR.mo;c1[2]=bp.Data[t+4]+cR.oi;c1[3]=bp.Data[t+5]+cR.mo;}return c1;};f.zA=function(
bp,c5,fZ){var cR;var t;if(!bp)return 0;if((c5<0)||(c5>=bp.fm.length))return 0;cR=
bp.fm[c5];if((fZ<0)||(fZ>=cR.lP))return 0;t=qw(c5+1,fZ,bp.Data,cR.ml,cR.lJ);if(t>=
0)return cR.mo+bp.Data[t+6];return 0;};f.z7=function(bp){return bp&&bp.uG;};var te=
"\u0000\u0009\u000A\u000B\u000C\u000D\u000E\u001C\u001F\u0020"+"\u0021\u0023\u0026\u0028\u0029\u002A\u002B\u002C\u002D\u002E"+
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
var tf="\x0A\x0C\x0B\x0C\x0D\x0B\x0A\x0B\x0C\x0D\x0E\x06\x0E"+"\x2E\x4E\x0E\x05\x08\x05\x08\x04\x08\x0E\x6E\x0E\x6E"+
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
"\x06\x01\x0E\x01\x8E\x0E\x01\x01";var tc="\u0028\u0029\u0029\u0028\u003C\u003E\u003E\u003C\u005B\u005D"+
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
var td=[0x0621,"\u0000\u0000\u0000",0x0622,"\u0000\u0000\uFE82",0x0623,"\u0000\u0000\uFE84"
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
,0xFEF9,"\u0000\u0000\uFEFA",0xFEFB,"\u0000\u0000\uFEFC"];function uE(ed){var r=
0;var min=0;var h=te;var max=h.length-1;while(max>=min){r=(max+min)>>1;if(ed===h.
charCodeAt(r))break;else if(ed<h.charCodeAt(r))max=r-1;else if((ed>=h.charCodeAt(
r+1)))min=r+1;else break;}return tf.charCodeAt(r);}function qj(ed){var r=0;var min=
0;var h=tc;var max=(h.length>>1)-1;var dS=-1;while(max>=min){r=(max+min)>>1;dS=ed-
h.charCodeAt(r*2);if(!dS)return h.charCodeAt(r*2+1);if(dS<0)max=r-1;else min=r+1;
}return 0;}function n7(ed){var r=0;var min=0;var h=td;var max=(h.length>>1)-1;var
dS=-1;while(max>=min){r=(max+min)>>1;dS=ed-h[r*2];if(!dS)return h[r*2+1];if(dS<0
)max=r-1;else min=r+1;}return"";}function tq(bH,bM,o0){var gC=0;var a8=bH[bM*4];
if(a8!==23)return 0;for(;bM>=o0;bM--){a8=bH[bM*4];if(a8===23)gC--;if(gC&&((a8===
20)||(a8===21)||(a8===22)))if(++gC===0)return bM;}return 0;}function n5(bH,bM,f0
){var gC=0;var a8=bH[bM*4];if((a8!==20)&&(a8!==21)&&(a8!==22))return 0;for(;bM<f0;
bM++){a8=bH[bM*4];if((a8===20)||(a8===21)||(a8===22))gC++;else if(gC&&(a8===23)){
if(gC===1)return bM;if(gC>1)gC--;}}return 0;}function qh(bH,bM,f0){for(;bM<f0;bM++
){var a8=bH[bM*4];if((a8===1)||(a8===2)||(a8===3))return bM;if((a8!==20)&&(a8!==
21)&&(a8!==22))continue;if(!(bM=n5(bH,bM,f0)))bM=f0;}return 0;}function n4(bH,bM
,f0){var an=bH[bM*4+1];if(bM>=f0)return 0;while((bM<f0)&&(bH[bM*4+1]===an))bM++;
return bM-1;}function uV(k3,eK,mM,bH,k,j,v0,v1,rb){var gu=[];var nl=[];var cg=-1;
var af=0;var cc=0;for(;eK<mM;eK++){var aY=k3[eK];while((rb>0)&&((aY+cc)>=v0[v1-cc
])){cc++;rb--;}if(bH[aY*4]!==14)continue;var bx=bH[aY*4+2];if(bx===1){if(cg>=(63-
1))break;nl.push(aY);gu.push(qj(k[j+aY-3+cc]));cg++;}else if(bx===2){var aQ=k[j+
aY-3+cc];var f$=cg;while((f$>0)&&(aQ!==gu[f$])&&((aQ!==0x232A)||(gu[f$]!==0x3009
))&&((aQ!==0x3009)||(gu[f$]!==0x232A)))f$--;if((f$>=0)&&((aQ===gu[f$])||((aQ===0x232A
)&&(gu[f$]===0x3009))||((aQ===0x3009)&&(gu[f$]===0x232A)))){while(cg>f$){bH[nl.pop(
)*4+2]=3;gu.pop();cg--;}gu.pop();nl.pop();cg--;af++;}else bH[aY*4+2]=3;}}while(cg>=
0){bH[nl.pop()*4+2]=3;cg--;}for(;eK<mM;eK++){var aY=k3[eK]*4;if((bH[aY]===14)&&((
bH[aY+2]===1)||(bH[aY+2]===2)))bH[aY+2]=3;}return af;}function tn(k3,eK,mM,bH){var
aY=k3[eK]*4;var af=1;if((bH[aY]!==14)||(bH[aY+2]!==1))return 0;for(eK++;eK<mM;eK++
){var aY=k3[eK]*4;var type=bH[aY];var bx=bH[aY+2];if((type===14)&&(bx===1))af++;
else if((type===14)&&(bx===2))if(!--af)return eK;}return 0;}function uD(bH,bM,o0
,oZ){var an=bH[bM*4+1];var dX=oZ;if(bM>o0)dX=bH[bM*4-3];if(dX>an)an=dX;if(an&1)return 2;
else return 1;}function uC(bH,bM,f0,oZ){var an=bH[bM*4+1];var py=oZ;var type=bH[
bM*4];if((bM<(f0-1))&&(type!==21)&&(type!==20)&&(type!==22))py=bH[bM*4+5];if(py>
an)an=py;if(an&1)return 2;else return 1;}f.vj=function(oV){if(oV<=0)return null;
return{Data:new Uint8Array((oV+4)*4),uK:oV,gl:0,qk:false,iJ:0};};f.qU=function(au
){};f.zc=function(au){return au&&au.qk;};f.vi=function(au){return au&&(au.iJ===1
);};f.jl=function(au,by){if(!au)return 0;if((by<0)||(by>=au.gl))return au.iJ;return au.
Data[by*4+13];};f.qM=function(au,k,j,ac,oB){var h=au?au.Data:null;var yh=au?au.uK:
0;var length=(ac<0)?(k.length-j-1):ac;var fG=oB>0;var r=0;var he=12;if(yh<length
)return false;for(;r<length;r++){var pk=uE(k[j+r]);var type=pk&31;var o5=pk&96;var
ya=pk&128;var bx=0;if(type===24)bx=8;else if(type===25)bx=9;else if(type===26)bx=
10;else if(type===27)bx=11;else if(o5===32)bx=1;else if(o5===64)bx=2;else if(o5===
96)bx=3;else if(type===9)bx=4;else if(type===13)bx=5;else if(type===12)bx=6;else
if(type===11)bx=6;else if((type===21)||(type===20)||(type===22)||(type===23))bx=
7;else if(ya)bx=12;if((type>=24)&&(type<=27))type=3;if(!fG&&((type===3)||(type===
2)||(type===17)||(type===18)||(type===21)))fG=1;h[he++]=type;h[he++]=0;h[he++]=bx;
h[he++]=0;}h[he++]=0;h[he++]=0;h[he++]=0;h[he++]=0;au.gl=length;au.qk=fG;au.iJ=(
oB>0)?1:0;if(!fG)return false;if((oB<0)&&(r=qh(h,3,length+3)))au.iJ=(h[r*4]===1)?
0:1;return true;};f.qO=function(au,k,j){var cB=[];var length=au?au.gl:0;var ir=au?
au.iJ:0;var h=au?au.Data:null;var dy=3+length;var aY=new Uint32Array(length+2);var
cg=0;var iq=0;var j5=0;var pT=0;var ij=0;var t;var b3;cB.push({iH:ir,gQ:0,lN:false
});for(t=3;t<dy;t++){var a8=h[t*4];if(a8===22){var sI=n5(h,t,dy);var g=qh(h,t+1,
sI?sI:dy);if(g&&((h[g*4]===3)||(h[g*4]===2)))a8=21;else a8=20;}if((a8===17)||(a8===
15)||(a8===18)||(a8===16)){var an=cB[cg].iH;var type=0;if((a8===17)||(a8===18))an+=(
an&1)?2:1;else an+=(an&1)?1:2;if(a8===18)type=2;if(a8===16)type=1;if((an<=125)&&
!iq&&!j5){cg++;cB.push({iH:an,gQ:type,lN:false});}if((an>125)&&!iq)j5++;}else if((
a8===21)||(a8===20)){var an=cB[cg].iH;h[t*4+1]=an;if(cB[cg].gQ)h[t*4]=cB[cg].gQ;
if(a8===21)an+=(an&1)?2:1;else an+=(an&1)?1:2;if((an<=125)&&!iq&&!j5){pT++;cg++;
cB.push({iH:an,gQ:0,lN:true});}else iq++;}else if(a8===23){if(iq)iq--;else if(pT
){j5=0;while(!cB[cg].lN){cB.pop();cg--;}cB.pop();cg--;pT--;}h[t*4+1]=cB[cg].iH;if(
cB[cg].gQ)h[t*4]=cB[cg].gQ;}else if(a8===19){if(!iq){if(j5)j5--;else if((cg&&!cB[
cg].lN)){cB.pop();cg--;}}}else if((a8!==11)&&(a8!==10)){h[t*4+1]=cB[cg].iH;if(cB[
cg].gQ)h[t*4]=cB[cg].gQ;}}for(b3=3,t=3;t<dy;t++,b3++){var a8=h[t*4];if((a8===17)||(
a8===15)||(a8===18)||(a8===16)||(a8===19)||(a8===10)){aY[length+2-++ij]=t;b3--;}
else if(b3<t){h[b3*4]=h[t*4];h[b3*4+1]=h[t*4+1];h[b3*4+2]=h[t*4+2];}}dy-=ij;for(
t=3;t<dy;){var a_=0;var f_;var f4;var lt;var jX;var ej;h[4]=0;h[5]=0;h[6]=0;h[8]=
0;h[9]=0;h[10]=0;if((h[t*4]===23)&&tq(h,t,3)){t=n4(h,t,dy)+1;continue;}h[4]=uD(h
,t,3,ir);aY[a_++]=1;jX=n4(h,t,dy);for(;t<=jX;t++)aY[a_++]=t;while(lt=n5(h,jX,dy)
){jX=n4(h,lt,dy);for(;lt<=jX;lt++)aY[a_++]=lt;}h[8]=uC(h,jX,dy,ir);aY[a_++]=2;f_=
a_;for(ej=h[4],a_=1;a_<f_;a_++){var bN=aY[a_];if(h[bN*4]===9){var j6=h[aY[a_-1]*
4];if((j6===21)||(j6===20)||(j6===22)||(j6===23))j6=14;h[bN*4]=j6;}}for(ej=h[4],
a_=1;a_<f_;a_++){var bN=aY[a_];var ni=aY[a_-1];var type=h[bN*4];if((type===1)||(
type===2)||(type===3))ej=type;if((type===4)&&(ej===3))type=h[bN*4]=7;if(type===3
)type=h[bN*4]=2;if((type===4)&&(h[ni*4]===5)&&(h[aY[a_-2]*4]===type))h[ni*4]=type;
if(((type===7)||(type===4))&&(h[ni*4]===8)&&(h[aY[a_-2]*4]===type))h[ni*4]=type;
}for(a_=1;a_<f_;a_++){var bN=aY[a_];var type=h[bN*4];if(type===4){var ez=a_-1;while(
h[aY[ez]*4]===6)h[aY[ez--]*4]=4;}if((type===6)&&(h[aY[a_-1]*4]===4))h[bN*4]=4;}for(
a_=1;a_<f_;a_++){var bN=aY[a_];var type=h[bN*4];if((type===6)||(type===5)||(type===
8))h[bN*4]=14;}for(ej=h[4],a_=1;a_<f_;a_++){var bN=aY[a_];var type=h[bN*4];if((type===
4)&&(ej===1))h[bN*4]=1;if((type===1)||(type===2)||(type===3))ej=type;}if(uV(aY,a_=
1,f_-1,h,k,j,aY,length+1,ij)){var fD=(h[aY[a_]*4+1]&1)?2:1;var ej=h[8];for(;a_<f_;
a_++){var jM=tn(aY,a_,f_,h);var ez=a_+1;var type=h[aY[a_]*4];var lw=0;var ix=0;var
j3=0;if((type===4)||(type===7))type=2;if((type===2)||(type===1))ej=type;if(!jM)continue;
for(;(ez<jM)&&(!lw||!ix);ez++){var nR=h[aY[ez]*4];if(nR===1)lw++;if(nR===2)ix++;
if(nR===7)ix++;if(nR===4)ix++;}if(((fD===1)&&lw)||((fD===2)&&ix)){h[aY[a_]*4]=fD;
h[aY[jM]*4]=fD;j3=fD;ej=fD;}else if((lw||ix)&&(ej!==fD)){h[aY[a_]*4]=ej;h[aY[jM]
*4]=ej;j3=ej;}else if(lw||ix){h[aY[a_]*4]=fD;h[aY[jM]*4]=fD;j3=fD;ej=fD;}if(j3){
for(ez=a_+1;h[aY[ez]*4+2]===4;ez++)h[aY[ez]*4]=j3;for(ez=jM+1;h[aY[ez]*4+2]===4;
ez++)h[aY[ez]*4]=j3;}}}for(f4=0,a_=1;a_<f_;a_++){var bN=aY[a_];var type=h[bN*4];
if(!f4&&((type===11)||(type===12)||(type===13)||(type===14)||(type===22)||(type===
20)||(type===21)||(type===23)))f4=a_;if(f4&&(type!==11)&&(type!==12)&&(type!==13
)&&(type!==14)&&(type!==22)&&(type!==20)&&(type!==21)&&(type!==23)){var hw=h[aY[
f4-1]*4];var nS=type;if((hw===4)||(hw===7))hw=2;if((nS===4)||(nS===7))nS=2;if((hw
!==nS)||((hw!==1)&&(hw!==2)))hw=(h[aY[f4]*4+1]&1)?2:1;for(;f4<a_;f4++)h[aY[f4]*4
]=hw;f4=0;}}}for(t=3;t<dy;t++){var type=h[t*4];if(h[t*4+1]&1)if((type===1)||(type===
4)||(type===7))h[t*4+1]++;else;else if(type===2)h[t*4+1]++;else if((type===4)||(
type===7))h[t*4+1]+=2;}for(t=dy-1,b3=t+ij;ij>0;t--,b3--){if(aY[length+2-ij]===b3
){var an=ir;var aQ=k[j+b3-3];if((t>=3)&&(h[t*4+1]>an))an=h[t*4+1];if((b3<(dy-1))&&(
h[(b3+1)*4+1]>an))an=h[(b3+1)*4+1];if(aQ===0x200D)h[b3*4+2]=11;else if(((aQ<0x0000
)||(aQ>0x0008))&&((aQ<0x000E)||(aQ>0x001B))&&((aQ<0x007F)||(aQ>0x0084))&&((aQ<0x0086
)||(aQ>0x009F))&&(aQ!==0x180E)&&(aQ!==0x200C))h[b3*4+2]=12;else h[b3*4+2]=0;h[b3
*4]=31;h[b3*4+1]=an;t++;ij--;dy++;}else if(b3>t){h[b3*4]=h[t*4];h[b3*4+1]=h[t*4+
1];h[b3*4+2]=h[t*4+2];}}};f.qL=function(au,k,j,e4,gY){var length=au?au.gl:0;var h=
au?au.Data:null;var dy=3+length;var t=3;var b3=3;var an=h[13];for(;(t<=dy);t++){
var hs=0;var bN=0;var io=0;if((an===h[t*4+1])&&(t<dy))continue;for(;(b3<t)||bN||
hs||io;b3++){var ew;var ex;if(b3<t){var bx=h[b3*4+2];if((bx===12)||(bx===4))continue;
hs=bN;bN=io;io=b3;}else{hs=bN;bN=io;io=0;}if(an&1){ew=io;ex=hs;}else{ew=hs;ex=io;
}if(bN&&(h[bN*4+2]===8)){var r=bN-3;var aQ=k[j+r];var e=n7(aQ);var am=e4?gY[(e4[
j+r]>>12)&0xFF]:null;if(!am)am=gY[0];if(e.charCodeAt(2)&&ex&&((h[ex*4+2]===9)||(
h[ex*4+2]===10)||(h[ex*4+2]===11))&&(!am||this.jp(am,e.charCodeAt(2))))k[j+r]=e.
charCodeAt(2);}else if(bN&&(h[bN*4+2]===9)){var r=bN-3;var aQ=k[j+r];var e=n7(aQ
);var am=e4?gY[(e4[j+r]>>12)&0xFF]:null;if(!am)am=gY[0];if(e.charCodeAt(0)&&ew&&((
h[ew*4+2]===8)||(h[ew*4+2]===10)||(h[ew*4+2]===11))&&(!am||this.jp(am,e.charCodeAt(
0))))k[j+r]=e.charCodeAt(0);}else if(bN&&(h[bN*4+2]===10)){var r=bN-3;var aQ=k[j+
r];var e=n7(aQ);var am=e4?gY[(e4[j+r]>>12)&0xFF]:null;if(!am)am=gY[0];if(e.charCodeAt(
1)&&ex&&ew&&((h[ex*4+2]===9)||(h[ex*4+2]===10)||(h[ex*4+2]===11))&&((h[ew*4+2]===
8)||(h[ew*4+2]===10)||(h[ew*4+2]===11))){if(!am||this.jp(am,e.charCodeAt(1)))k[j+
r]=e.charCodeAt(1);}else if(e.charCodeAt(2)&&ex&&((h[ex*4+2]===9)||(h[ex*4+2]===
10)||(h[ex*4+2]===11))){if(!am||this.jp(am,e.charCodeAt(2)))k[j+r]=e.charCodeAt(
2);}else if(e.charCodeAt(0)&&ew&&((h[ew*4+2]===8)||(h[ew*4+2]===10)||(h[ew*4+2]===
11))){if(!am||this.jp(am,e.charCodeAt(0)))k[j+r]=e.charCodeAt(0);}}if(bN&&hs){var
eO=((an&1)?bN:hs)-3;var fc=((an&1)?hs:bN)-3;var rW=k[j+eO];var rX=k[j+fc];var eP=
0;if(rX===0xFEDF)switch(rW){case 0xFE82:eP=0xFEF5;break;case 0xFE84:eP=0xFEF7;break;
case 0xFE88:eP=0xFEF9;break;case 0xFE8E:eP=0xFEFB;break;}if(rX===0xFEE0)switch(rW
){case 0xFE82:eP=0xFEF6;break;case 0xFE84:eP=0xFEF8;break;case 0xFE88:eP=0xFEFA;
break;case 0xFE8E:eP=0xFEFC;break;}if(eP){var am=e4?gY[(e4[j+eO]>>12)&0xFF]:null;
if(!am)am=gY[0];if(am&&!this.jp(am,eP))eP=0;}if(eP){k[j+eO]=eP;k[j+fc]=0xFEFF;}}
}b3=t;an=h[t*4+1];}};f.qN=function(au,k,j){var length=au?au.gl:0;var h=au?au.Data:
null;var gy=3+length;var bQ;if(!h)return;for(bQ=gy-1;bQ>=3;bQ--){var bx=h[bQ*4+2
];if((h[bQ*4+1]&1)&&((bx===1)||(bx===2)||(bx===3))){var sH=qj(k[j+bQ-3]);if(sH)k[
j+bQ-3]=sH;}}};f.ok=function(au,g4,h2){var h=au?au.Data:null;var dT=g4+3;var gy=
h2+3;var ir=au?au.iJ:0;var o3=true;var bQ;if(!h)return;for(bQ=gy-1;bQ>=dT;bQ--){
var bx=h[bQ*4+2];if(bx===6){h[bQ*4+1]=ir;o3=true;}else if(o3&&((bx===5)||(bx===7
)))h[bQ*4+1]=ir;else if(h[bQ*4]!==31)o3=0;}};f.kv=function(au,g4,h2,dB,gW){var cB=[
];var h=au?au.Data:null;var dT=g4+3;var gy=h2+3;var a6=dT;var an=0;var fM=0;var fL=
0;var bQ;if(!h)return;for(bQ=dT;bQ<=gy;bQ++){var la=(bQ<gy)?h[bQ*4+1]:0;while((la>
an)&&(an<(125+2))){cB.push(a6);a6=bQ;an++;}while((la<an)&&(an>0)){var lu=a6;a6=cB.
pop();an--;if((bQ-lu)>1){var sT=lu-dT;var sU=bQ-dT-1;if((sT===fM)&&(sU===fL)){fM=
0;fL=0;continue;}for(;fM<fL;fM++,fL--){var g=dB[fM+gW];dB[fM+gW]=dB[fL+gW];dB[fL+
gW]=g;}fM=sT;fL=sU;}}}for(;fM<fL;fM++,fL--){var g=dB[fM+gW];dB[fM+gW]=dB[fL+gW];
dB[fL+gW]=g;}};f.zd=function(au,g4,h2,by){var cB=[];var h=au?au.Data:null;var dT=
g4+3;var gy=h2+3;var a6=dT;var an=0;var bQ;if(!h)return by;for(bQ=dT;bQ<=gy;bQ++
){var la=(bQ<gy)?h[bQ*4+1]:0;while((la>an)&&(an<(125+2))){cB.push(a6);a6=bQ;an++;
}while((la<an)&&(an>0)){var lu=a6;a6=cB.pop();an--;if((bQ-lu)>1){var eO=lu-dT;var
fc=bQ-dT-1;if((by>=eO)&&(by<=fc))by=fc-(by-eO);}}}return by;};f.ze=function(au,g4
,h2,by){var pL=[];var pg=[];var h=au?au.Data:null;var dT=g4+3;var a6=0;var dx=h2-
g4-1;var an=0;var r=0;if(!h)return by;if(dx>65535)return by;while(a6<dx){var r8=
h[(dT+a6)*4+1];var r7=h[(dT+dx)*4+1];if((r8>an)&&(r7>an)&&(an<(125+2))){pL.push(
a6);pg.push(dx);an++;}if(r8<=an)a6++;if(r7<=an)dx--;}while((r<an)&&(by>=pL[r])&&(
by<=pg[r])){var wn=pL[r];var wm=pg[r];var eO=by;var fc=by;while((eO>wn)&&(h[(dT+
eO-1)*4+1]>r))eO--;while((fc<wm)&&(h[(dT+fc+1)*4+1]>r))fc++;by=fc-(by-eO);r++;}return by;
};f.zb=function(au,wk,v6){var h=au?au.Data:null;var a1=au?au.gl:0;var r=0;while(
r<a1){wk[r]=h[r*4+12];v6[r]=h[r*4+13];r++;}};f.zr=function(x,ak,ag,q8,q9,be,bg,ay
){var b=this.ai;var ae=null;var gA=q8[0];var gB=q8[1];var jU=q9[0];var jV=q9[1];
var bo=jU;var bq=jV;var d2=jU-gA;var jZ=jV-gB;var p,n,w,u;if(x&&(ak>=0)&&(ak<x.NoOfFrames
)){ak=x.bZ?x.bZ[ak]:ak;ae=x.cd[ak];}if(!ae||(ae.aP.Format!==this.cC)){console.log(
"EmWi error: Invalid destination bitmap in the drawing operation.");return;}if(Math.
abs(jU-gA)>Math.abs(jV-gB)){if(bo>gA)bo--;if(bo<gA)bo++;}else{if(bq>gB)bq--;if(bq<
gB)bq++;}p=Math.max(ag[0],Math.min(gA,bo),0);n=Math.max(ag[1],Math.min(gB,bq),0);
w=Math.min(ag[2],Math.max(gA,bo)+1,x.FrameSize[0]);u=Math.min(ag[3],Math.max(gB,
bq)+1,x.FrameSize[1]);if((w<=p)||(u<=n))return;var dv=ae.aH[0];var dw=ae.aH[1];var
c=b.hx;var aZ=b.kg;var af=2;c[0]=gA+dv+0.5;c[1]=gB+dw+0.5;c[11]=jU+dv+0.5;c[12]=
jV+dw+0.5;aZ[5]=be;aZ[16]=bg;if(d2>0)w+=0.5;if(d2<0)p-=0.5;if(jZ>0)u+=0.5;if(jZ<
0)n-=0.5;if((gA<p)||(gA>w)||(gB<n)||(gB>u)||(jU<p)||(jU>w)||(jV<n)||(jV>u)){af=lM(
c,aZ,af,true,p+dv);af=lM(c,aZ,af,true,w+dv);af=p$(c,af,p+dv,w+dv);af=lL(c,aZ,af,
true,n+dw);af=lL(c,aZ,af,true,u+dw);af=p_(c,af,n+dw,u+dw);if(af!==2)return;}ea(b
,ae.aP,b.iK);if(b.ch&&!ay)b.disable(b.BLEND);if(!b.ch&&ay)b.enable(b.BLEND);b.ch=
ay;b.bufferSubData(b.ARRAY_BUFFER,0,b.c2);b.drawArrays(b.LINES,0,af);if(this.cM)
eX(b);};f.jn=function(x,ak,ag,q,aE,aC,aB,aD,ay){var b=this.ai;var ae=null;var p,
n,w,u;if(x&&(ak>=0)&&(ak<x.NoOfFrames)){ak=x.bZ?x.bZ[ak]:ak;ae=x.cd[ak];}if(!ae||(
ae.aP.Format!==this.cC)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}p=Math.max(ag[0],q[0],0);n=Math.max(ag[1],q[1],0);w=Math.min(ag[2],q[2
],x.FrameSize[0]);u=Math.min(ag[3],q[3],x.FrameSize[1]);var clear=!aE&&!aC&&!aD&&
!aB;if((w<=p)||(u<=n)||(clear&&ay))return;if(clear){var c=b.hx;c[0]=c[22]=p+ae.aH[
0];c[1]=c[12]=n+ae.aH[1];c[11]=c[33]=w+ae.aH[0];c[34]=c[23]=u+ae.aH[1];if(b.ch&&
!ay)b.disable(b.BLEND);if(!b.ch&&ay)b.enable(b.BLEND);b.ch=ay;ea(b,ae.aP,clear?b.
km:b.iK);b.bufferSubData(b.ARRAY_BUFFER,0,b.c2);b.drawArrays(b.TRIANGLE_STRIP,0,
4);if(this.cM)eX(b);return;}var hy=(aE!==aD)||(aC!==aB);var hm=(aE!==aC)||(aD!==
aB);var eN=hy||hm;var y1=hy&&((n!==q[1])||(u!==q[3]));var x9=hm&&((p!==q[0])||(w
!==q[2]));if(y1){var b9=1/(q[3]-q[1]);var bF=(n-q[1])*b9;var bm=(q[3]-u)*b9;if(aE
!==aD){var dF=aE;if(bF)aE=bb(dF,aD,bF);if(bm)aD=bb(aD,dF,bm);}if(aC!==aB){var hd=
aC;if(bF)aC=bb(hd,aB,bF);if(bm)aB=bb(aB,hd,bm);}}if(x9){var b9=1/(q[2]-q[0]);var
cQ=(p-q[0])*b9;var aI=(q[2]-w)*b9;if(aE!==aC){var dF=aE;if(cQ)aE=bb(dF,aC,cQ);if(
aI)aC=bb(aC,dF,aI);}if(aD!==aB){var g_=aD;if(cQ)aD=bb(g_,aB,cQ);if(aI)aB=bb(aB,g_
,aI);}}var c=b.hx;var aZ=b.kg;c[0]=c[22]=p+ae.aH[0];c[1]=c[12]=n+ae.aH[1];c[11]=
c[33]=w+ae.aH[0];c[34]=c[23]=u+ae.aH[1];aZ[5]=aE;aZ[16]=aC;aZ[38]=aB;aZ[27]=aD;if(
b.ch&&!ay)b.disable(b.BLEND);if(!b.ch&&ay)b.enable(b.BLEND);b.ch=ay;ea(b,ae.aP,clear?
b.km:b.iK);b.bufferSubData(b.ARRAY_BUFFER,0,b.c2);b.drawArrays(b.TRIANGLE_STRIP,
0,4);if(this.cM)eX(b);};f.zq=function(x,ak,ag,q,gq,aE,aC,aB,aD,ay){if(gq<=0)return;
if(((gq*2)>=(q[2]-q[0]))||((gq*2)>=(q[3]-q[1]))){this.jn(x,ak,ag,q,aE,aC,aB,aD,ay
);return;}var c7=[0,0,0,0];var g9;c7[0]=q[0];c7[1]=q[1];c7[2]=q[2];c7[3]=q[1]+gq;
g9=this.kz(ag,c7);this.jn(x,ak,g9,q,aE,aC,aB,aD,ay);c7[0]=q[0];c7[1]=q[3]-gq;c7[
2]=q[2];c7[3]=q[3];g9=this.kz(ag,c7);this.jn(x,ak,g9,q,aE,aC,aB,aD,ay);c7[0]=q[0
];c7[1]=q[1]+gq;c7[2]=q[0]+gq;c7[3]=q[3]-gq;g9=this.kz(ag,c7);this.jn(x,ak,g9,q,
aE,aC,aB,aD,ay);c7[0]=q[2]-gq;c7[2]=q[2];g9=this.kz(ag,c7);this.jn(x,ak,g9,q,aE,
aC,aB,aD,ay);};f.qR=function(oU){if(oU<1)return null;return{kj:oU,uO:0,uN:0,a0:0
,ci:true,bY:[0,0,0,0],eC:[1.0,0.0,0.0,0.0,1.0,0.0],n$:[],cx:new Array(oU)};};function
mk(k,j){var al=k.charCodeAt(j);while((al===0x20)||(al===0x09)||(al===0x0A)||(al===
0x0D)||(al===0x2C)||(al===0x0C))al=k.charCodeAt(++j);return j;}function bC(di,az
,ee){var eS=di[0];var a6=mk(eS,di[1]);var t=a6;var f8=0.0;var exp=0.1;var af=0;var
ls=1;var al=eS.charCodeAt(t);if((al===0x2B)||(al===0x2D)){ls=(al===0x2D)?-1:1;al=
eS.charCodeAt(++t);}while((al>=0x30)&&(al<=0x39)){f8=f8*10+(al-0x30);al=eS.charCodeAt(++
t);af++;}if(al===0x2E)al=eS.charCodeAt(++t);while((al>=0x30)&&(al<=0x39)){f8+=exp
*(al-0x30);exp*=0.1;al=eS.charCodeAt(++t);af++;}if(!af){di[1]=a6;return false;}if((
al===0x65)||(al===0x45)){var sa=1;var no=0.0;var r$=0;al=eS.charCodeAt(++t);if((
al===0x2B)||(al===0x2D)){sa=(al===0x2D)?-1:1;al=eS.charCodeAt(++t);}while((al>=0x30
)&&(al<=0x39)){no=no*10+(al-0x30);al=eS.charCodeAt(++t);r$++;}if(!r$){di[1]=a6;return false;
}f8=f8*Math.pow(10.0,(sa<0)?-no:no);}di[1]=t;az[ee]=(ls<0)?-f8:f8;return true;}function
qv(di,az,ee){var eS=di[0];var a6=mk(eS,di[1]);var t=a6;var al=eS.charCodeAt(t);if((
al===0x30)||(al==0x31)){az[ee]=(al===0x31);al=eS.charCodeAt(++t);}di[1]=t;return t>
a6;}function gh(m,bn,bz){var o=m.cx[bn];var yo=o.gd-o.a0;if(yo>=bz)return bn;var
px=(bn+1)%2;this.ky(m,px,o.a0+bz+256);this.mp(m,px,m,bn,0,a4);return px;}f.zj=function(
di,jG,k1,kP,jy,kK){var sV=[di,mk(di,0)];var t=[di,sV[1]];var rV=0;var ln=(Math.abs(
jG)+Math.abs(k1))/16;var nE=false;var af=0;var k7=0.0;var bh=0.0;var bi=0.0;var l=[
0.0,0.0,0.0,0.0];var z=[0.0,0.0,0.0,0.0];var k7=[0.0];var b2=[false,false,false];
var al=di.charCodeAt(t[1]);var a4;function fR(rq,mS,mR,rr){return Math.sqrt((rq-
mR)*(rq-mR)+(mS-rr)*(mS-rr));}this.jv=this.vO;this.kF=-1;if(!al){this.jv=this.vM;
return null;}if((al!==0x6D)&&(al!==0x4D)){this.jv=this.q1;this.kF=t[1];return null;
}for(;al;al=di.charCodeAt(++t[1])){al=((al>=0x61)&&(al<=0x7A))?al-0x20:al;if(al===
0x4D){nE=false;af++;}else if(al===0x5A)nE=true;else if(nE&&((al===0x4C)||(al===0x48
)||(al===0x56)||(al===0x43)||(al===0x53)||(al===0x51)||(al===0x54)||(al===0x41))
){af++;nE=false;}}var eQ=this.qR(af);var bB=this.qR(2);var bu=0;if((kP!==0.0)||(
jy!==0.0)||(jG!==1.0)||(jy!==1.0)||(kK!==0.0)){this.q5(eQ,kP,jy);this.q0(eQ,kK);
this.vP(eQ,jG,k1);}this.ky(bB,0,256);for(af=0,t[1]=sV[1];di.charCodeAt(t[1]);af++
){var fJ=0;var bJ=0;var rU=0;this.qK(bB,bu,bh,bi);for(;di.charCodeAt(t[1]);rU++){
fJ=bJ;bJ=di.charCodeAt(t[1]);if(rU&&((bJ===0x6D)||(bJ===0x4D)))break;t[1]++;if((
bJ===0x6D)||(bJ===0x4D)){if(!bC(t,l,1)||!bC(t,z,1))return dz(this);if(bJ===0x4D){
bh=l[1];bi=z[1];}else{bh+=l[1];bi+=z[1];}this.qK(bB,bu,bh,bi);while(bC(t,l,1)){if(
!bC(t,z,1))return dz(this);bu=gh(bB,bu,1);if(bJ===0x4D){bh=l[1];bi=z[1];}else{bh+=
l[1];bi+=z[1];}this.mq(bB,bu,bh,bi);}}else if((bJ===0x6C)||(bJ===0x4C)){if(!bC(t
,l,1))return dz(this);do{if(!bC(t,z,1))return dz(this);bu=gh(bB,bu,1);if(bJ===0x4C
){bh=l[1];bi=z[1];}else{bh+=l[1];bi+=z[1];}this.mq(bB,bu,bh,bi);}while(bC(t,l,1)
);}else if((bJ===0x68)||(bJ===0x48)){if(!bC(t,l,1))return dz(this);do{bu=gh(bB,bu
,1);if(bJ===0x48)bh=l[1];else bh+=l[1];this.mq(bB,bu,bh,bi);}while(bC(t,l,1));}else
if((bJ===0x76)||(bJ===0x56)){if(!bC(t,z,1))return dz(this);do{bu=gh(bB,bu,1);if(
bJ===0x56)bi=z[1];else bi+=z[1];this.mq(bB,bu,bh,bi);}while(bC(t,z,1));}else if((
bJ===0x63)||(bJ==0x43)){if(!bC(t,l,1))return dz(this);do{if(!bC(t,z,1)||!bC(t,l,
2)||!bC(t,z,2)||!bC(t,l,3)||!bC(t,z,3))return dz(this);if(bJ===0x63)l[1]+=bh,z[1
]+=bi,l[2]+=bh,z[2]+=bi,l[3]+=bh,z[3]+=bi;a4=((fR(l[1],z[1],bh,bi)+fR(l[2],z[2],
l[1],z[1])+fR(l[3],z[3],l[2],z[2]))*ln)|0;if(a4<8)a4+=2;bu=gh(bB,bu,a4+1);this.qI(
bB,bu,l[1],z[1],l[2],z[2],l[3],z[3],a4+1);bh=l[3];bi=z[3];}while(bC(t,l,1));}else
if((bJ===0x73)||(bJ===0x53)){l[1]=l[2];z[1]=z[2];if(!bC(t,l,2))return dz(this);do{
if(!bC(t,z,2)||!bC(t,l,3)||!bC(t,z,3))return dz(this);if(bJ===0x73)l[2]+=bh,z[2]+=
bi,l[3]+=bh,z[3]+=bi;if((fJ===0x43)||(fJ===0x63)||(fJ===0x53)||(fJ===0x73)){l[1]=
bh-(l[1]-bh);z[1]=bi-(z[1]-bi);}else l[1]=bh,z[1]=bi;a4=((fR(l[1],z[1],bh,bi)+fR(
l[2],z[2],l[1],z[1])+fR(l[3],z[3],l[2],z[2]))*ln)|0;if(a4<8)a4+=2;bu=gh(bB,bu,a4+
1);this.qI(bB,bu,l[1],z[1],l[2],z[2],l[3],z[3],a4+1);bh=l[3];bi=z[3];p=l[2];n=z[
2];fJ=bJ;}while(bC(t,l,2));}else if((bJ===0x71)||(bJ===0x51)){if(!bC(t,l,1))return dz(
this);do{if(!bC(t,z,1)||!bC(t,l,2)||!bC(t,z,2))return dz(this);if(bJ===0x71)l[1]+=
bh,z[1]+=bi,l[2]+=bh,z[2]+=bi;a4=((fR(l[1],z[1],bh,bi)+fR(l[2],z[2],l[1],z[1]))*
ln)|0;if(a4<8)a4+=2;bu=gh(bB,bu,a4+1);this.qH(bB,bu,l[1],z[1],l[2],z[2],a4+1);bh=
l[2];bi=z[2];}while(bC(t,l,1));}else if((bJ===0x74)||(bJ===0x54)){if(!bC(t,l,2))
return dz(this);do{if(!bC(t,z,2))return dz(this);if(bJ===0x74)l[2]+=bh,z[2]+=bi;
if((fJ===0x51)||(fJ===0x71)||(fJ===0x54)||(fJ===0x74)){l[1]=bh-(l[1]-bh);z[1]=bi-(
z[1]-bi);}else l[1]=bh,z[1]=bi;a4=((fR(l[1],z[1],bh,bi)+fR(l[2],z[2],l[1],z[1]))
*ln)|0;if(a4<8)a4+=2;bu=gh(bB,bu,a4+1);this.qH(bB,bu,l[1],z[1],l[2],z[2],a4+1);bh=
l[2];bi=z[2];fJ=bJ;}while(bC(t,l,2));}else if((bJ===0x61)||(bJ===0x41)){rV=t[1]-
1;if(!bC(t,l,0))return dz(this);do{l[1]=bh;z[1]=bi;if(!bC(t,z,0)||!bC(t,k7,0)||!
qv(t,b2,1)||!qv(t,b2,2)||!bC(t,l,2)||!bC(t,z,2))return dz(this);if(bJ===0x61)l[2
]+=bh,z[2]+=bi;if((l[0]<=0)||(z[0]<=0))return mi(this);var nI=Math.sin(k7[0]*this.
kw);var m1=Math.cos(k7[0]*this.kw);var sf=(l[1]-l[2])/2;var sg=(z[1]-z[2])/2;var
x_=(l[1]+l[2])/2;var x$=(z[1]+z[2])/2;var lE=m1*sf+nI*sg;var lF=m1*sg-nI*sf;var pn=(
lE*lE)/(l[0]*l[0])+(lF*lF)/(z[0]*z[0]);if(pn>1){l[0]=l[0]*Math.sqrt(pn);z[0]=z[0
]*Math.sqrt(pn);}var sO=l[0]*z[0];var pE=l[0]*lF;var pF=z[0]*lE;var pM=pE*pE+pF*
pF;if(pM===0.0)return mi(this);var abs=(sO*sO-pM)/pM;if(abs<0.0)abs=-abs;var m$=
Math.sqrt(abs);if(b2[1]===b2[2])m$=-m$;var nj=m$*pE/z[0];var nk=-m$*pF/l[0];var wN=
m1*nj-nI*nk+x_;var wQ=nI*nj+m1*nk+x$;var iD=(lE-nj)/l[0];var nU=(lE+nj)/l[0];var
iE=(lF-nk)/z[0];var nV=(lF+nk)/z[0];var g=iD*iD+iE*iE;if(g===0.0)return mi(this);
var nM=Math.acos(iD/Math.sqrt(g))*this.qW;if(iE<0.0)nM=-nM;g=(iD*iD+iE*iE)*(nU*nU+
nV*nV);if(g===0.0)return mi(this);var dU=Math.acos((iD*-nU+iE*-nV)/Math.sqrt(g))
*this.qW;if((iD*-nV-iE*-nU)<0)dU=-dU;while(dU>360){dU=dU-360;}while(dU<-360){dU=
dU+360;}if(!b2[2]&&(dU>0))dU=dU-360;if(b2[2]&&(dU<0))dU=dU+360;a4=((l[0]+z[0])*dU
*(3.14/360)*ln)|0;if(a4<0)a4=-a4;if(a4<8)a4+=2;bu=gh(bB,bu,a4+1);this.vL(bB);this.
q5(bB,wN,wQ);this.q0(bB,k7);this.vg(bB,bu,0,0,l[0],z[0],nM,nM+dU,a4+1);this.vJ(bB
);bh=l[2];bi=z[2];}while(bC(t,l,0));}else if((bJ===0x5A)||(bJ==0x7A)){t[1]=mk(di
,t[1]);this.qP(bB,bu);bh=this.vo(bB,bu,0);bi=this.vp(bB,bu,0);break;}else{t[1]--;
return dz(this);}}a4=this.om(bB,bu);this.ky(eQ,af,a4);this.mp(eQ,af,bB,bu,0,a4);
if(this.vu(bB,bu))this.qP(eQ,af);}this.ol(bB);return eQ;function dz(aj){a4=aj.om(
bB,bu);aj.ky(eQ,af,a4);aj.mp(eQ,af,bB,bu,0,a4);aj.jv=aj.q1;aj.kF=t[1];aj.ol(bB);
return eQ;}function mi(aj){a4=aj.om(bB,bu);aj.ky(eQ,af,a4);aj.mp(eQ,af,bB,bu,0,a4
);aj.jv=aj.vN;aj.kF=rV;aj.ol(bB);return eQ;}};f.zY=function(){return this.jv;};f.
zX=function(){return this.kF;};f.ol=function(m){if(m){delete m.cx;delete m.n$;}};
f.zI=function(m){if(!m)return 0;return m.kj;};f.ky=function(m,bn,kR){if(!m||(bn>=
m.kj)||(bn<0))return false;if(kR<=0)kR=0;var o=null;if(kR)o={gd:kR,a0:0,gi:false
,eW:false,dp:false,ci:true,bY:[0,0,0,0],Data:new Float32Array((kR+1)*8)};if(m.cx[
bn])m.ci=false;m.cx[bn]=o;return true;};f.qK=function(m,bn,bl,bA){var o=m?m.cx[bn
]:null;if(!o)return;var s=m.eC;var l=bl;var z=bA;if((s[0]!==1)||(s[1]!==0)||(s[2
]!==0)||(s[3]!==0)||(s[4]!==1)||(s[5]!==0)){l=bl*s[0]+bA*s[1]+s[2];z=bl*s[3]+bA*
s[4]+s[5];}o.dp=false;o.eW=false;o.ci=false;o.a0=0;o.gi=true;o.Data[0]=l;o.Data[
1]=z;m.ci=false;};f.mq=function(m,bn,bl,bA){var o=m?m.cx[bn]:null;if(!o||o.dp||((
o.a0+1)>o.gd))return 0;var s=m.eC;var aV=o.Data;var bR=o.a0*2+2;var l=bl;var z=bA;
o.gi=true;o.eW=true;o.ci=false;m.ci=false;if((s[0]!==1)||(s[1]!==0)||(s[2]!==0)||(
s[3]!==0)||(s[4]!==1)||(s[5]!==0)){l=bl*s[0]+bA*s[1]+s[2];z=bl*s[3]+bA*s[4]+s[5];
}aV[bR]=l;aV[bR+1]=z;return o.a0++;};f.qH=function(m,bn,oH,oI,bl,bA,bz){var o=m?
m.cx[bn]:null;if((bz<=0)||!o||o.dp||((o.a0+bz)>o.gd))return 0;var s=m.eC;var aV=
o.Data;var bR=o.a0*2;var bh=oH;var bi=oI;var l=bl;var z=bA;var ey=1/bz;var bF;var
d;o.gi=true;o.eW=true;o.ci=false;m.ci=false;if((s[0]!==1)||(s[1]!==0)||(s[2]!==0
)||(s[3]!==0)||(s[4]!==1)||(s[5]!==0)){bh=oH*s[0]+oI*s[1]+s[2];bi=oH*s[3]+oI*s[4
]+s[5];l=bl*s[0]+bA*s[1]+s[2];z=bl*s[3]+bA*s[4]+s[5];}var p0=aV[bR++];var p1=aV[
bR++];for(bF=ey,d=1;d<bz;d++,bF+=ey){var hr=1-bF;var lj=hr*hr;var bV=bF*bF;var lf=
2*hr*bF;aV[bR++]=lj*p0+lf*bh+bV*l;aV[bR++]=lj*p1+lf*bi+bV*z;}aV[bR++]=l;aV[bR++]=
z;return(o.a0+=d)-d;};f.qI=function(m,bn,oD,oE,oF,oG,bl,bA,bz){var o=m?m.cx[bn]:
null;if((bz<=0)||!o||o.dp||((o.a0+bz)>o.gd))return 0;var s=m.eC;var aV=o.Data;var
bR=o.a0*2;var r0=oD;var r1=oE;var r2=oF;var r3=oG;var l=bl;var z=bA;var ey=1/bz;
var bF;var d;o.gi=true;o.eW=true;o.ci=false;m.ci=false;if((s[0]!==1)||(s[1]!==0)||(
s[2]!==0)||(s[3]!==0)||(s[4]!==1)||(s[5]!==0)){r0=oD*s[0]+oE*s[1]+s[2];r1=oD*s[3
]+oE*s[4]+s[5];r2=oF*s[0]+oG*s[1]+s[2];r3=oF*s[3]+oG*s[4]+s[5];l=bl*s[0]+bA*s[1]+
s[2];z=bl*s[3]+bA*s[4]+s[5];}var p0=aV[bR++];var p1=aV[bR++];for(bF=ey,d=1;d<bz;
d++,bF+=ey){var hr=1-bF;var bV=bF*bF;var lj=hr*hr;var sc=hr*lj;var lf=3*lj*bF;var
sd=3*hr*bV;var se=bF*bV;aV[bR++]=sc*p0+lf*r0+sd*r2+se*l;aV[bR++]=sc*p1+lf*r1+sd*
r3+se*z;}aV[bR++]=l;aV[bR++]=z;return(o.a0+=d)-d;};f.vg=function(m,bn,vW,vX,wa,wb
,k4,mG,bz){var o=m?m.cx[bn]:null;var a4=bz;if(o&&o.gi)a4++;if((bz<=0)||(k4===mG)||
!o||o.dp||((o.a0+a4)>o.gd))return 0;k4*=this.kw;mG*=this.kw;var s=m.eC;var aV=o.
Data;var bR=o.a0*2+(a4-bz)*2;var ey=(mG-k4)/bz;var d;o.gi=true;o.eW=true;o.ci=false;
m.ci=false;var wU=(s[0]!==1)||(s[1]!==0)||(s[2]!==0)||(s[3]!==0)||(s[4]!==1)||(s[
5]!==0);for(d=0;d<=bz;d++,k4+=ey){var b4=(d===bz)?mG:k4;var l=vW+wa*Math.cos(b4);
var z=vX+wb*Math.sin(b4);if(wU){aV[bR++]=l*s[0]+z*s[1]+s[2];aV[bR++]=l*s[3]+z*s[
4]+s[5];}else{aV[bR++]=l;aV[bR++]=z;}}return(o.a0+=a4)-bz;};f.mp=function(m,bn,rk
,wg,mP,bz){var fA=m?m.cx[bn]:null;var nK=rk?rk.cx[wg]:null;var a4=bz;if(!bz||!fA||
!nK||(mP<0))return 0;if(bz<0)a4=bz=nK.a0-mP;if((mP+a4)>nK.a0)return 0;if(fA.gi)a4++;
if(((fA.a0+a4)>fA.gd)||fA.dp)return 0;fA.gi=true;fA.eW=true;fA.ci=false;m.ci=false;
var s=m.eC;var aV=fA.Data;var ey=nK.Data;var bR=fA.a0*2+(a4-bz)*2;var aI=mP*2;var
d=0;if((s[0]!==1)||(s[1]!==0)||(s[2]!==0)||(s[3]!==0)||(s[4]!==1)||(s[5]!==0))for(;
d<=bz;d++,aI+=2){aV[bR++]=ey[aI]*s[0]+ey[aI+1]*s[1]+s[2];aV[bR++]=ey[aI]*s[3]+ey[
aI+1]*s[4]+s[5];}else for(;d<=bz;d++){aV[bR++]=ey[aI++];aV[bR++]=ey[aI++];}return(
fA.a0+=a4)-bz;};f.qP=function(m,bn){var o=m?m.cx[bn]:null;if(!o||o.dp||!o.eW)return;
o.eW=false;o.dp=true;m.ci=false;var aV=o.Data;var dv=aV[o.a0*2+0]-aV[0];var dw=aV[
o.a0*2+1]-aV[1];if((dv>0.001)||(dv<-0.001)||(dw>0.001)||(dw<-0.001)){o.a0++;aV[o.
a0*2+0]=aV[0];aV[o.a0*2+1]=aV[1];}else{aV[o.a0*2+0]=aV[0];aV[o.a0*2+1]=aV[1];}};
f.aaV=function(m,bn,hY,rn,ro){var o=m?m.cx[bn]:null;if(!o||o.dp||!o.eW)return 0;
if(hY<=0)return 0;if(hY>o.a0)hY=o.a0;o.Data.copyWithin(0,hY*2);if((rn!==0.0)||(ro
!==0.0)){var aV=o.Data;var d;for(d=0;d<aV.length;d+=2){aV[d]+=rn;aV[d+1]+=ro;}}o.
eW=hY<o.a0;o.a0=o.a0-hY;o.ci=false;m.ci=false;return hY;};f.aaU=function(m,bn,et
,bl,bA){var o=m?m.cx[bn]:null;if(!o||(et>o.a0)||(et<0))return;var s=m.eC;var aV=
o.Data;var l=bl;var z=bA;if((s[0]!==1)||(s[1]!==0)||(s[2]!==0)||(s[3]!==0)||(s[4
]!==1)||(s[5]!==0)){l=bl*s[0]+bA*s[1]+s[2];z=bl*s[3]+bA*s[4]+s[5];}aV[et*2+0]=l;
aV[et*2+1]=z;if(!et&&o.dp){aV[o.a0*2+0]=l;aV[o.a0*2+1]=z;}if((et===o.a0)&&o.dp){
aV[0]=l;aV[1]=z;}o.ci=false;m.ci=false;};f.vo=function(m,bn,et){var o=m?m.cx[bn]:
null;if(!o||(et>o.a0)||(et<0))return 0.0;return o.Data[et*2+0];};f.vp=function(m
,bn,et){var o=m?m.cx[bn]:null;if(!o||(et>o.a0)||(et<0))return 0.0;return o.Data[
et*2+1];};f.aaK=function(m,bn,bz){var o=m?m.cx[bn]:null;if(!o||o.dp)return 0;if(
bz<0)bz=0;if(bz>o.gd)bz=o.gd;nm=bz-o.a0;if(!nm)return 0;if(nm>0){var aV=o.Data;var
bR=o.a0*2+2;var d;for(d=0;d<nm;d++){aV[bR++]=0;aV[bR++]=0;}}o.a0=bz;o.gi=bz>0;o.
eW=bz>0;o.ci=false;m.ci=false;return nm;};f.om=function(m,bn){var o=m?m.cx[bn]:null;
return o?o.a0:0;};f.zL=function(m,bn){var o=m?m.cx[bn]:null;if(!o||o.dp)return 0;
return o.gd-o.a0;};f.vu=function(m,bn){var o=m?m.cx[bn]:null;return o?o.dp:false;
};f.zZ=function(m,bn){var o=m?m.cx[bn]:null;this.jx(m);return o?o.bY:[0,0,0,0];};
f.zM=function(m){this.jx(m);return m?m.bY:[0,0,0,0];};f.q5=function(m,kP,jy){if(
!m)return;var s=m.eC;s[2]=s[2]+(s[0]*kP)+(s[1]*jy);s[5]=s[5]+(s[3]*kP)+(s[4]*jy);
};f.vP=function(m,jG,k1){if(!m)return;var s=m.eC;s[0]*=jG;s[1]*=k1;s[3]*=jG;s[4]
*=k1;};f.q0=function(m,kK){if(!m)return;var s=m.eC;var sin=Math.sin(kK*=this.kw);
var cos=Math.cos(kK);var su,sv,sw,sx;su=(s[0]*cos)+(s[1]*sin);sv=(s[0]*-sin)+(s[
1]*cos);sw=(s[3]*cos)+(s[4]*sin);sx=(s[3]*-sin)+(s[4]*cos);s[0]=su;s[1]=sv;s[3]=
sw;s[4]=sx;};f.vL=function(m){if(!m)return;var s=m.eC;m.n$.push([s[0],s[1],s[2],
s[3],s[4],s[5]]);};f.vJ=function(m){if(!m)return;var s=m.eC;var ip=m.n$.pop();if(
ip){s[0]=ip[0];s[1]=ip[1];s[2]=ip[2];s[3]=ip[3];s[4]=ip[4];s[5]=ip[5];}else{s[0]=
1;s[1]=0;s[2]=0;s[3]=0;s[4]=1;s[5]=0;}};f.z5=function(m){if(!m)return;var s=m.eC;
s[0]=1;s[1]=0;s[2]=0;s[3]=0;s[4]=1;s[5]=0;};f.jx=function(m){if(!m||m.ci)return;
var ka=m.cx;var j4=m.kj;var o4=[0,0,0,0];var sB=0;var sy=0;var a4=0;var d;for(d=
0;d<j4;d++){var o=ka[d];if(o&&!o.ci&&o.a0){var aV=o.Data;var bR=2;var p=aV[0];var
n=aV[1];var w=p;var u=n;var af=o.a0;for(;af>0;af--,bR+=2){var l=aV[bR];var z=aV[
bR+1];if(l<p)p=l;if(l>w)w=l;if(z<n)n=z;if(z>u)u=z;}o.bY=[p|0,n|0,(w+1)|0,(u+1)|0
];o.ci=true;}if(o&&o.ci){sB+=o.eW?1:0;sy+=o.dp?1:0;a4+=o.a0;o4=this.vS(o4,o.bY);
}}m.uO=sB;m.uN=sy;m.a0=a4;m.bY=o4;m.ci=true;};f.vm=function(bI,m,eF,ah,kL,oX){var
bj=ah[0];var aX=ah[1];var p,n,w,u;if((bI[0]<=0)||(bI[1]<=0)||!m)return null;this.
jx(m);if(!eF){n=aX+m.bY[1]-1;u=aX+m.bY[3]+1;}else{aX+=bI[1];n=aX-m.bY[3]-1;u=aX-
m.bY[1]+1;}p=bj+m.bY[0]-1;w=bj+m.bY[2]+1;p=Math.max(p,0);n=Math.max(n,0);w=Math.
min(w,bI[0]);u=Math.min(u,bI[1]);var b=this.ai;var aW=document.createElement("canvas"
);var el=b.createTexture();var aq={};var c0={aP:aq,aH:[0,0]};var bitmap={FrameSize:
bI,FrameDelay:0,NoOfFrames:1,dd:[aq],cd:[c0]};aW.width=bI[0];aW.height=bI[1];var
ax=aW.getContext("2d");var ka=m.cx;var j4=m.kj;var d;ax.translate(bj,aX);ax.scale(
1,eF?-1:1);ax.beginPath();for(d=0;d<j4;d++){var o=ka[d];if(o&&o.a0){var h=o.Data;
var pz=o.a0*2+2;var bE;ax.moveTo(h[0],h[1]);for(bE=2;bE<pz;bE+=2)ax.lineTo(h[bE]
,h[bE+1]);if(o.dp)ax.closePath();}}ax.fill(oX?"nonzero":"evenodd");b.fp=null;b.bindTexture(
b.TEXTURE_2D,el);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.
texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D
,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T
,b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,aW);
aq.Format=f.jt;aq.Width=bI[0];aq.Height=bI[1];aq.jh=bI[0];aq.jg=bI[1];aq.dc=1/bI[
0];aq.db=1/bI[1];aq.fl=2/bI[0];aq.fk=2/bI[1];aq.cL=el;aq.Framebuffer=null;return bitmap;
};f.vn=function(bI,m,eF,ah,aG,g6,hW,kL){var d0=g6&0x0000FF;var dZ=g6&0x00FF00;var
ga=g6&0xFF0000;var bj=ah[0];var aX=ah[1];var p,n,w,u;var cm;if((bI[0]<=0)||(bI[1
]<=0)||!m||(aG<=0))return null;if((d0===this.my)&&(aG<4))d0=this.os;if((dZ===this.
mx)&&(aG<4))dZ=this.oq;if((ga===this.ov)&&(aG<3))ga=this.ot;if(ga===this.ou){if(
hW>1)cm=(hW*aG*0.5)|0;else cm=(aG*0.5)|0;}else if((d0===this.kD)||(dZ===this.kC)
)cm=(aG*0.75)|0;else cm=(aG+0.5)|0;this.jx(m);if(!eF){n=aX+m.bY[1]-cm-1;u=aX+m.bY[
3]+cm+1;}else{aX+=bI[1];n=aX-m.bY[3]-cm-1;u=aX-m.bY[1]+cm+1;}p=bj+m.bY[0]-cm-1;w=
bj+m.bY[2]+cm+1;p=Math.max(p,0);n=Math.max(n,0);w=Math.min(w,bI[0]);u=Math.min(u
,bI[1]);var b=this.ai;var aW=document.createElement("canvas");var el=b.createTexture(
);var aq={};var c0={aP:aq,aH:[0,0]};var bitmap={FrameSize:bI,FrameDelay:0,NoOfFrames:
1,dd:[aq],cd:[c0]};aW.width=bI[0];aW.height=bI[1];var ax=aW.getContext("2d");var
ka=m.cx;var j4=m.kj;var d;ax.translate(bj,aX);ax.scale(1,eF?-1:1);ax.beginPath();
for(d=0;d<j4;d++){var o=ka[d];if(o&&o.a0){var h=o.Data;var pz=o.a0*2+2;var bE;ax.
moveTo(h[0],h[1]);for(bE=2;bE<pz;bE+=2)ax.lineTo(h[bE],h[bE+1]);if(o.dp)ax.closePath(
);}}if(aG!==1.0)ax.lineWidth=aG;if(ga===this.ou)ax.miterLimit=hW;else if(ga===this.
ot)ax.lineJoin="bevel";else if(ga===this.ov)ax.lineJoin="round";if((d0===this.my
)&&(dZ===this.mx)){d0=dZ=this.or;ax.lineCap="round";}else if((d0===this.kD)&&(dZ===
this.kC)){d0=dZ=this.or;ax.lineCap="square";}ax.stroke();if((d0!==this.or)||(dZ!==
this.vI)){ax.beginPath();for(d=0;d<j4;d++){var o=ka[d];if(o&&o.a0&&!o.dp){var h=
o.Data;var j9=0;var j8=o.a0*2+1;var fh=h[j9++];var fj=h[j9++];var fi=h[j8--];var
fg=h[j8--];if((d0===this.kD)||(d0===this.os)){var c_,da;do{c_=h[j9++];da=h[j9++];
}while((c_===fh)&&(da===fj)&&(j9<j8));c_=fh-c_;da=fj-da;if(c_||da){var a1=Math.sqrt(
c_*c_+da*da);var eT,eU;eT=c_/a1;c_=eT*aG*0.5;eU=da/a1;da=eU*aG*0.5;if(d0===this.
kD){ax.moveTo(fh+da-eT,fj-c_-eU);ax.lineTo(fh-da-eT,fj+c_-eU);ax.lineTo(fh-da+c_
,fj+c_+da);ax.lineTo(fh+da+c_,fj-c_+da);}else{ax.moveTo(fh+da,fj-c_);ax.lineTo(fh+
da-eT,fj-c_-eU);ax.lineTo(fh-da-eT,fj+c_-eU);ax.lineTo(fh-da,fj+c_);ax.lineTo(fh+
c_,fj+da);}ax.closePath();}}else if(d0===this.my)ax.arc(fh,fj,aG/2,0,2*Math.PI);
if((dZ===this.kC)||(dZ===this.oq)){var c9,c$;do{c$=h[j8--];c9=h[j8--];}while((c9===
fg)&&(c$===fi)&&(j9<j8));c9=fg-c9;c$=fi-c$;if(c9||c$){var a1=Math.sqrt(c9*c9+c$*
c$);var eT,eU;eT=c9/a1;c9=eT*aG*0.5;eU=c$/a1;c$=eU*aG*0.5;if(dZ===this.kC){ax.moveTo(
fg+c$-eT,fi-c9-eU);ax.lineTo(fg-c$-eT,fi+c9-eU);ax.lineTo(fg-c$+c9,fi+c9+c$);ax.
lineTo(fg+c$+c9,fi-c9+c$);}else{ax.moveTo(fg+c$,fi-c9);ax.lineTo(fg+c$-eT,fi-c9-
eU);ax.lineTo(fg-c$-eT,fi+c9-eU);ax.lineTo(fg-c$,fi+c9);ax.lineTo(fg+c9,fi+c$);}
ax.closePath();}}else if(dZ===this.mx)ax.arc(fg,fi,aG/2,0,2*Math.PI);}}ax.fill();
}b.fp=null;b.bindTexture(b.TEXTURE_2D,el);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER
,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(
b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T
,b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,aW);
aq.Format=f.jt;aq.Width=bI[0];aq.Height=bI[1];aq.jh=bI[0];aq.jg=bI[1];aq.dc=1/bI[
0];aq.db=1/bI[1];aq.fl=2/bI[0];aq.fk=2/bI[1];aq.cL=el;aq.Framebuffer=null;return bitmap;
};f.zs=function(x,m,ak,ag,q,eF,ah,aE,aC,aB,aD,ay,kL,oX){var b=this.ai;var ae=null;
var bj=ah[0];var aX=ah[1];var p,n,w,u;if(x&&(ak>=0)&&(ak<x.NoOfFrames)){ak=x.bZ?
x.bZ[ak]:ak;ae=x.cd[ak];}if(!ae||(ae.aP.Format!==this.cC)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!m){console.log("EmWi error: Invalid path object in the drawing operation."
);return;}this.jx(m);if(!eF){aX+=q[1];n=aX+m.bY[1]-1;u=aX+m.bY[3]+1;}else{aX+=q[
3];n=aX-m.bY[3]-1;u=aX-m.bY[1]+1;}bj+=q[0];p=bj+m.bY[0]-1;w=bj+m.bY[2]+1;p=Math.
max(ag[0],q[0],p,0);n=Math.max(ag[1],q[1],n,0);w=Math.min(ag[2],q[2],w,x.FrameSize[
0]);u=Math.min(ag[3],q[3],u,x.FrameSize[1]);bj-=p;if((w<=p)||(u<=n)||!m.a0)return;
if(eF)aX-=u;else aX-=n;var bitmap=this.vm([w-p,u-n],m,eF,[bj,aX],kL,oX);if(!bitmap
)return;this.gn(x,bitmap,ak,0,[p,n,w,u],q,[q[0]-p,q[1]-n],aE,aC,aB,aD,ay);fo(b,null
,false);b.deleteTexture(bitmap.dd[0].cL);};f.aa5=function(x,m,ak,ag,q,eF,ah,aG,g6
,hW,aE,aC,aB,aD,ay,kL){var d0=g6&0x0000FF;var dZ=g6&0x00FF00;var ga=g6&0xFF0000;
var b=this.ai;var ae=null;var bj=ah[0];var aX=ah[1];var p,n,w,u;var cm;if(x&&(ak>=
0)&&(ak<x.NoOfFrames)){ak=x.bZ?x.bZ[ak]:ak;ae=x.cd[ak];}if(!ae||(ae.aP.Format!==
this.cC)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!m){console.log("EmWi error: Invalid path object in the drawing operation."
);return;}this.jx(m);if((d0===this.my)&&(aG<4))d0=this.os;if((dZ===this.mx)&&(aG<
4))dZ=this.oq;if((ga===this.ov)&&(aG<3))ga=this.ot;if(ga===this.ou){if(hW>1)cm=(
hW*aG*0.5)|0;else cm=(aG*0.5)|0;}else if((d0===this.kD)||(dZ===this.kC))cm=(aG*0.75
)|0;else cm=(aG+0.5)|0;if(!eF){aX+=q[1];n=aX+m.bY[1]-cm-1;u=aX+m.bY[3]+cm+1;}else{
aX+=q[3];n=aX-m.bY[3]-cm-1;u=aX-m.bY[1]+cm+1;}bj+=q[0];p=bj+m.bY[0]-cm-1;w=bj+m.
bY[2]+cm+1;p=Math.max(ag[0],q[0],p,0);n=Math.max(ag[1],q[1],n,0);w=Math.min(ag[2
],q[2],w,x.FrameSize[0]);u=Math.min(ag[3],q[3],u,x.FrameSize[1]);bj-=p;if((w<=p)||(
u<=n)||!m.a0||(aG<=0))return;if(eF)aX-=u;else aX-=n;var bitmap=this.vn([w-p,u-n]
,m,eF,[bj,aX],aG,g6,hW,kL);if(!bitmap)return;this.gn(x,bitmap,ak,0,[p,n,w,u],q,[
q[0]-p,q[1]-n],aE,aC,aB,aD,ay);fo(b,null,false);b.deleteTexture(bitmap.dd[0].cL);
};f.gn=function(x,ap,ak,bt,ag,q,cE,aE,aC,aB,aD,ay){var b=this.ai;var ae=null;var
src=null;var p=q[0];var n=q[1];var w=q[2];var u=q[3];var gb=cE[0];var gc=cE[1];if(
x&&(ak>=0)&&(ak<x.NoOfFrames)){ak=x.bZ?x.bZ[ak]:ak;ae=x.cd[ak];}if(ap&&(bt>=0)&&(
bt<ap.NoOfFrames)){bt=ap.bZ?ap.bZ[bt]:bt;src=ap.cd[bt];}if(ap.fn)return;if(!ae||(
ae.aP.Format!==this.cC)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}w=Math.min(w,p+ap.FrameSize[0]-cE[0]);u=Math.min(u,n+ap.FrameSize[1]-cE[
1]);p=Math.max(p,p-cE[0]);n=Math.max(n,n-cE[1]);p=Math.max(ag[0],p,0);n=Math.max(
ag[1],n,0);w=Math.min(ag[2],w,x.FrameSize[0]);u=Math.min(ag[3],u,x.FrameSize[1]);
if((w<=p)||(u<=n))return;var hy=(aE!==aD)||(aC!==aB);var hm=(aE!==aC)||(aD!==aB);
var eN=hy||hm;var ig=eN||(((aE>>24)&0xFF)<255);gb+=p-q[0]+src.aH[0];gc+=n-q[1]+src.
aH[1];var bw=gb*src.aP.dc;var bs=gc*src.aP.db;var bP=(gb+w-p)*src.aP.dc;var bO=(
gc+u-n)*src.aP.db;if(hy&&((n!==q[1])||(u!==q[3]))){var b9=1/(q[3]-q[1]);var bF=(
n-q[1])*b9;var bm=(q[3]-u)*b9;if(aE!==aD){var dF=aE;if(bF)aE=bb(dF,aD,bF);if(bm)
aD=bb(aD,dF,bm);}if(aC!==aB){var hd=aC;if(bF)aC=bb(hd,aB,bF);if(bm)aB=bb(aB,hd,bm
);}}if(hm&&((p!==q[0])||(w!==q[2]))){var b9=1/(q[2]-q[0]);var cQ=(p-q[0])*b9;var
aI=(q[2]-w)*b9;if(aE!==aC){var dF=aE;if(cQ)aE=bb(dF,aC,cQ);if(aI)aC=bb(aC,dF,aI);
}if(aD!==aB){var g_=aD;if(cQ)aD=bb(g_,aB,cQ);if(aI)aB=bb(aB,g_,aI);}}var c=b.hx;
var aZ=b.kg;c[0]=c[22]=p+ae.aH[0];c[1]=c[12]=n+ae.aH[1];c[11]=c[33]=w+ae.aH[0];c[
34]=c[23]=u+ae.aH[1];c[2]=bw;c[3]=bs;c[4]=1;c[13]=bP;c[14]=bs;c[15]=1;c[35]=bP;c[
36]=bO;c[37]=1;c[24]=bw;c[25]=bO;c[26]=1;aZ[5]=aE;aZ[16]=aC;aZ[38]=aB;aZ[27]=aD;
if(src.aP.Format===this.cC)ea(b,ae.aP,ig?b.iM:b.iL);else ea(b,ae.aP,b.hB);fo(b,src.
aP,false);if(b.ch&&!ay)b.disable(b.BLEND);if(!b.ch&&ay)b.enable(b.BLEND);b.ch=ay;
b.bufferSubData(b.ARRAY_BUFFER,0,b.c2);b.drawArrays(b.TRIANGLE_STRIP,0,4);if(this.
cM)eX(b);};f.kI=function(x,ap,ak,bt,ag,q,c6,cE,aE,aC,aB,aD,ay){var b=this.ai;var
ae=null;var src=null;var p=q[0];var n=q[1];var w=q[2];var u=q[3];var ht=c6[0];var
hu=c6[1];var kb=c6[2];var kc=c6[3];if(x&&(ak>=0)&&(ak<x.NoOfFrames)){ak=x.bZ?x.bZ[
ak]:ak;ae=x.cd[ak];}if(ap&&(bt>=0)&&(bt<ap.NoOfFrames)){bt=ap.bZ?ap.bZ[bt]:bt;src=
ap.cd[bt];}if(ap.fn)return;if(!ae||(ae.aP.Format!==this.cC)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}ht=Math.max(ht,0);hu=Math.max(hu,0);kb=Math.min(kb,ap.FrameSize[0]);kc=
Math.min(kc,ap.FrameSize[1]);var lx=kb-ht;var lq=kc-hu;p=Math.max(ag[0],p,0);n=Math.
max(ag[1],n,0);w=Math.min(ag[2],w,x.FrameSize[0]);u=Math.min(ag[3],u,x.FrameSize[
1]);if((w<=p)||(u<=n)||(lx<=0)||(lq<=0))return;var hy=(aE!==aD)||(aC!==aB);var hm=(
aE!==aC)||(aD!==aB);var eN=hy||hm;var ig=eN||(((aE>>24)&0xFF)<255);var nF;if(hy&&((
n!==q[1])||(u!==q[3]))){var b9=1/(q[3]-q[1]);var bF=(n-q[1])*b9;var bm=(q[3]-u)*
b9;if(aE!==aD){var dF=aE;if(bF)aE=bb(dF,aD,bF);if(bm)aD=bb(aD,dF,bm);}if(aC!==aB
){var hd=aC;if(bF)aC=bb(hd,aB,bF);if(bm)aB=bb(aB,hd,bm);}}if(hm&&((p!==q[0])||(w
!==q[2]))){var b9=1/(q[2]-q[0]);var cQ=(p-q[0])*b9;var aI=(q[2]-w)*b9;if(aE!==aC
){var dF=aE;if(cQ)aE=bb(dF,aC,cQ);if(aI)aC=bb(aC,dF,aI);}if(aD!==aB){var g_=aD;if(
cQ)aD=bb(g_,aB,cQ);if(aI)aB=bb(aB,g_,aI);}}var c=b.hx;var aZ=b.kg;if(src.aP.Format===
this.cC)ea(b,ae.aP,nF=(ig?b.lV:b.lU));else ea(b,ae.aP,nF=b.lW);fo(b,src.aP,false
);b.uniform2f(nF.u8,lx*src.aP.dc,lq*src.aP.db);b.uniform2f(nF.u6,(ht+src.aH[0])*
src.aP.dc,(hu+src.aH[1])*src.aP.db);ht=(cE[0]+p-q[0]+lx)/lx;hu=(cE[1]+n-q[1]+lq)
/lq;kb=ht+((w-p)/lx);kc=hu+((u-n)/lq);c[0]=c[22]=p+ae.aH[0];c[1]=c[12]=n+ae.aH[1
];c[11]=c[33]=w+ae.aH[0];c[34]=c[23]=u+ae.aH[1];c[2]=ht;c[3]=hu;c[4]=1;c[13]=kb;
c[14]=hu;c[15]=1;c[35]=kb;c[36]=kc;c[37]=1;c[24]=ht;c[25]=kc;c[26]=1;aZ[5]=aE;aZ[
16]=aC;aZ[38]=aB;aZ[27]=aD;if(b.ch&&!ay)b.disable(b.BLEND);if(!b.ch&&ay)b.enable(
b.BLEND);b.ch=ay;b.bufferSubData(b.ARRAY_BUFFER,0,b.c2);b.drawArrays(b.TRIANGLE_STRIP
,0,4);if(this.cM)eX(b);};f.zp=function(x,ap,ak,bt,ag,q,c6,dC,dD,dQ,dP,q7,aE,aC,aB
,aD,ay){var cc=[0,0];var bK=q[0];var bL=q[1];var bo=q[2];var bq=q[3];var bw=c6[0
];var bs=c6[1];var bP=c6[2];var bO=c6[3];var b$=bo-bK;var b1=bq-bL;var cf=((bP-bw
)/3)|0;var bT=((bO-bs)/3)|0;var ho=(bP-bw-cf*2)|0;var hn=(bO-bs-bT*2)|0;var sD=0;
var pA=0;var hb=aE;var hc=aC;var g$=aD;var ha=aB;var jS=aE;var jT=aC;var jQ=aD;var
jR=aB;var nb=aE;var nd=aC;var na=aD;var nc=aB;if((b$<=0)||(b1<=0)||(ho<=0)||(hn<=
0))return;if(ap&&ap.fn)return;if(dC&&dQ&&dD&&dP&&q7&&(b$===(bP-bw))&&(b1===(bO-bs
))){this.gn(x,ap,ak,bt,ag,q,[bw,bs],aE,aC,aB,aD,ay);return;}if((aE!==aC)||(aB!==
aD)||(aC!==aD)){if(dC){jS=bb(aE,aC,cf/b$);jQ=bb(aD,aB,cf/b$);}if(dQ){jT=bb(aC,aE
,cf/b$);jR=bb(aB,aD,cf/b$);}if(dD){nb=bb(aE,aD,bT/b1);nd=bb(aC,aB,bT/b1);}if(dP){
na=bb(aD,aE,bT/b1);nc=bb(aB,aC,bT/b1);}if(!dC&&!dD)hb=aE;if(dC&&!dD)hb=jS;if(!dC&&
dD)hb=nb;if(!dQ&&!dD)hc=aC;if(dQ&&!dD)hc=jT;if(!dQ&&dD)hc=nd;if(!dC&&!dP)g$=aD;if(
dC&&!dP)g$=jQ;if(!dC&&dP)g$=na;if(!dQ&&!dP)ha=aB;if(dQ&&!dP)ha=jR;if(!dQ&&dP)ha=
nc;if(dC&&dD)hb=bb(jS,jQ,bT/b1);if(dC&&dP)g$=bb(jQ,jS,bT/b1);if(dQ&&dD)hc=bb(jT,
jR,bT/b1);if(dQ&&dP)ha=bb(jR,jT,bT/b1);}if(dQ&&!dC)sD=cf-b$;if(dP&&!dD)pA=bT-b1;
bP=bw+cf;bO=bs+bT;bo=bK+cf;bq=bL+bT;if(dC&&dD)this.gn(x,ap,ak,bt,ag,[bK,bL,bo,bq
],[bw,bs],aE,jS,hb,nb,ay);bK+=b$-cf;bo+=b$-cf;bw+=cf+ho;bP+=cf+ho;if(dQ&&dD)this.
gn(x,ap,ak,bt,ag,[bK,bL,bo,bq],[bw,bs],jT,aC,nd,hc,ay);bL+=b1-bT;bq+=b1-bT;bs+=bT+
hn;bO+=bT+hn;if(dQ&&dP)this.gn(x,ap,ak,bt,ag,[bK,bL,bo,bq],[bw,bs],ha,nc,aB,jR,ay
);bK-=b$-cf;bo-=b$-cf;bw-=cf+ho;bP-=cf+ho;if(dC&&dP)this.gn(x,ap,ak,bt,ag,[bK,bL
,bo,bq],[bw,bs],na,g$,jQ,aD,ay);bL-=b1-bT;bs-=hn;bO-=bT;cc[1]=pA;if(dD)bL+=bT;if(
dP)bq-=bT;if(dC)this.kI(x,ap,ak,bt,ag,[bK,bL,bo,bq],[bw,bs,bP,bO],cc,nb,hb,g$,na
,ay);bK+=b$-cf;bo+=b$-cf;bw+=cf+ho;bP+=cf+ho;if(dQ)this.kI(x,ap,ak,bt,ag,[bK,bL,
bo,bq],[bw,bs,bP,bO],cc,hc,nd,nc,ha,ay);if(dD)bL-=bT;bq=bL+bT;bK-=b$-cf;bw-=ho;bP-=
cf;bs-=bT;bO-=hn;cc[0]=sD;cc[1]=0;if(dC)bK+=cf;if(dQ)bo-=cf;if(dD)this.kI(x,ap,ak
,bt,ag,[bK,bL,bo,bq],[bw,bs,bP,bO],cc,jS,jT,hc,hb,ay);bL+=b1-bT;bq+=b1-bT;bs+=bT+
hn;bO+=bT+hn;if(dP)this.kI(x,ap,ak,bt,ag,[bK,bL,bo,bq],[bw,bs,bP,bO],cc,g$,ha,jR
,jQ,ay);if(dC)bK-=cf;bo=bK+b$;bL-=b1-bT;bs-=hn;bO-=bT;cc[1]=pA;if(dC)bK+=cf;if(dD
)bL+=bT;if(dQ)bo-=cf;if(dP)bq-=bT;if(q7)this.kI(x,ap,ak,bt,ag,[bK,bL,bo,bq],[bw,
bs,bP,bO],cc,hb,hc,ha,g$,ay);};f.aa9=function(x,ap,ak,bt,ag,hR,hT,dr,hS,jB,c4,jz
,hU,cN,jA,jC,df,c6,be,bg,cS,cT,ay,ep){if((hR===jA)&&(hS===jz)&&(hT===jB)&&(hU===
jC)&&(dr===c4)&&(c4===cN)&&(cN===df))this.vk.apply(this,arguments);else this.vl.
apply(this,arguments);};f.vk=function(x,ap,ak,bt,ag,hR,hT,dr,hS,jB,c4,jz,hU,cN,jA
,jC,df,c6,be,bg,cS,cT,ay,ep){var b=this.ai;var ae=null;var src=null;var bK=hR;var
bL=hT;var bo=hS;var bq=hU;var bw=c6[0];var bs=c6[1];var bP=c6[2];var bO=c6[3];var
p=Math.min(bK,bo);var n=Math.min(bL,bq);var w=Math.max(bK,bo);var u=Math.max(bL,
bq);var h6=((be!=cS)||(bg!=cT))&&((be!=bg)||(cS!=cT));if(x&&(ak>=0)&&(ak<x.NoOfFrames
)){ak=x.bZ?x.bZ[ak]:ak;ae=x.cd[ak];}if(ap&&(bt>=0)&&(bt<ap.NoOfFrames)){bt=ap.bZ?
ap.bZ[bt]:bt;src=ap.cd[bt];}if(ap.fn)return;if(!ae||(ae.aP.Format!==this.cC)){console.
log("EmWi error: Invalid destination bitmap in the drawing operation.");return;}
if(!src){console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}bw=Math.max(bw,0);bs=Math.max(bs,0);bP=Math.min(bP,ap.FrameSize[0]);bO=
Math.min(bO,ap.FrameSize[1]);p=Math.max(ag[0],p,0);n=Math.max(ag[1],n,0);w=Math.
min(ag[2],w,x.FrameSize[0]);u=Math.min(ag[3],u,x.FrameSize[1]);if((w<=p)||(u<=n)
)return;if((n>bL)||(u<bL)||(n>bq)||(u<bq)){var b9=1/(bq-bL);var bF,bm;if(b9>0){bF=(
n-bL)*b9;bm=(bq-u)*b9;}else{bF=(u-bL)*b9;bm=(bq-n)*b9;}if(be!==cT){var o$=be;if(
bF)be=bb(be,cT,bF);if(bm)cT=bb(cT,o$,bm);}if(bg!==cS){var wK=bg;if(bF)bg=bb(bg,cS
,bF);if(bm)cS=bb(cS,wK,bm);}var yE=bs;bs=bs+(bO-bs)*bF;bO=bO+(yE-bO)*bm;if(n>bL)
bL=n;else if(u<bL)bL=u;if(n>bq)bq=n;else if(u<bq)bq=u;}if((p>bK)||(w<bK)||(p>bo)||(
w<bo)){var b9=1/(bo-bK);var cQ,aI;if(b9>0){cQ=(p-bK)*b9;aI=(bo-w)*b9;}else{cQ=(w-
bK)*b9;aI=(bo-p)*b9;}if(be!==bg){var o$=be;if(cQ)be=bb(be,bg,cQ);if(aI)bg=bb(bg,
o$,aI);}if(cT!==cS){var wL=cT;if(cQ)cT=bb(cT,cS,cQ);if(aI)cS=bb(cS,wL,aI);}var yD=
bw;bw=bw+(bP-bw)*cQ;bP=bP+(yD-bP)*aI;if(p>bK)bK=p;else if(w<bK)bK=w;if(p>bo)bo=p;
else if(w<bo)bo=w;}bw=(bw+src.aH[0])*src.aP.dc;bs=(bs+src.aH[1])*src.aP.db;bP=(bP+
src.aH[0])*src.aP.dc;bO=(bO+src.aH[1])*src.aP.db;bK+=ae.aH[0];bo+=ae.aH[0];bL+=ae.
aH[1];bq+=ae.aH[1];var ig=(((be&bg&cS&cT)>>24)&0xFF)<255;var c=b.hx;var aZ=b.kg;
c[0]=bK;c[11]=bo;c[1]=bL;c[12]=bL;c[2]=bw;c[13]=bP;c[3]=bs;c[14]=bs;c[4]=1;c[15]=
1;aZ[5]=be;aZ[16]=bg;c[6]=0;c[17]=1;c[7]=0;c[18]=0;c[8]=1;c[19]=1;c[22]=bK;c[33]=
bo;c[23]=bq;c[34]=bq;c[24]=bw;c[35]=bP;c[25]=bO;c[36]=bO;c[26]=1;c[37]=1;aZ[27]=
cT;aZ[38]=cS;c[28]=0;c[39]=1;c[29]=1;c[40]=1;c[30]=1;c[41]=1;if(src.aP.Format===
this.cC)ea(b,ae.aP,ig?(h6?b.kn:b.iM):b.iL);else ea(b,ae.aP,h6?b.ko:b.hB);fo(b,src.
aP,ep);if(b.ch&&!ay)b.disable(b.BLEND);if(!b.ch&&ay)b.enable(b.BLEND);b.ch=ay;if(
h6){b.uniform4fv(b.gf.qC,ge(be));b.uniform4fv(b.gf.qD,ge(bg));b.uniform4fv(b.gf.
qB,ge(cS));b.uniform4fv(b.gf.qA,ge(cT));}b.bufferSubData(b.ARRAY_BUFFER,0,b.c2);
b.drawArrays(b.TRIANGLE_STRIP,0,4);if(this.cM)eX(b);};f.vl=function(x,ap,ak,bt,ag
,hR,hT,dr,hS,jB,c4,jz,hU,cN,jA,jC,df,c6,be,bg,cS,cT,ay,ep){var b=this.ai;var ae=
null;var src=null;var bK=Math.min(hR,hS,jz,jA);var bL=Math.min(hT,jB,hU,jC);var bo=
Math.max(hR,hS,jz,jA);var bq=Math.max(hT,jB,hU,jC);var bw=c6[0];var bs=c6[1];var
bP=c6[2];var bO=c6[3];var p=Math.round(bK);var n=Math.round(bL);var w=Math.round(
bo);var u=Math.round(bq);var wO=p;var wR=n;var wP=w;var wS=u;if(x&&(ak>=0)&&(ak<
x.NoOfFrames)){ak=x.bZ?x.bZ[ak]:ak;ae=x.cd[ak];}if(ap&&(bt>=0)&&(bt<ap.NoOfFrames
)){bt=ap.bZ?ap.bZ[bt]:bt;src=ap.cd[bt];}if(ap.fn)return;if(!ae||(ae.aP.Format!==
this.cC)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}bw=Math.max(bw,0);bs=Math.max(bs,0);bP=Math.min(bP,ap.FrameSize[0]);bO=
Math.min(bO,ap.FrameSize[1]);p=Math.max(ag[0],p,0);n=Math.max(ag[1],n,0);w=Math.
min(ag[2],w,x.FrameSize[0]);u=Math.min(ag[3],u,x.FrameSize[1]);if((w<=p)||(u<=n)
)return;if((dr<=0)&&(c4<=0)&&(cN<=0)&&(df<=0)){dr=-dr;c4=-c4;cN=-cN;df=-df;}if((
dr<0)||(c4<0)||(cN<0)||(df<0)){console.log("Emwi error: Not convex destination polygon to warp bitmap."
);return;}var lm=(dr!==c4)||(cN!==df)||(dr!==cN);var eN=(be!==bg)||(cS!==cT)||(be
!==cT)||(bg!==cS);var ig=eN||(((be>>24)&0xFF)<255);var pH=eN;var h6=eN&&((be!=cS
)||(bg!=cT))&&((be!=bg)||(cS!=cT));if(lm){var f5=dr;if(c4<f5)f5=c4;if(cN<f5)f5=cN;
if(df<f5)f5=df;if(!dr||!c4||!cN||!df){console.log("Emwi error: Not convex destination polygon to warp bitmap."
);return;}dr=f5/dr;c4=f5/c4;cN=f5/cN;df=f5/df;}else{dr=1;c4=1;cN=1;df=1;}bw=(bw+
src.aH[0])*src.aP.dc;bs=(bs+src.aH[1])*src.aP.db;bP=(bP+src.aH[0])*src.aP.dc;bO=(
bO+src.aH[1])*src.aP.db;var c=b.hx;var aZ=b.kg;var dv=ae.aH[0];var dw=ae.aH[1];var
af=4;c[0]=hR+dv;c[11]=hS+dv;c[1]=hT+dw;c[12]=jB+dw;c[2]=bw*dr;c[13]=bP*c4;c[3]=bs
*dr;c[14]=bs*c4;c[4]=dr;c[15]=c4;aZ[5]=be;aZ[16]=bg;c[6]=0;c[17]=c4;c[7]=0;c[18]=
0;c[8]=dr;c[19]=c4;c[33]=jA+dv;c[22]=jz+dv;c[34]=jC+dw;c[23]=hU+dw;c[35]=bw*df;c[
24]=bP*cN;c[36]=bO*df;c[25]=bO*cN;c[37]=df;c[26]=cN;aZ[38]=cT;aZ[27]=cS;c[39]=0;
c[28]=cN;c[40]=df;c[29]=cN;c[41]=df;c[30]=cN;if((p>wO)||(n>wR)||(w<wP)||(u<wS)){
af=lM(c,aZ,af,false,p+dv);af=lM(c,aZ,af,false,w+dv);af=p$(c,af,p+dv,w+dv);af=lL(
c,aZ,af,false,n+dw);af=lL(c,aZ,af,false,u+dw);af=p_(c,af,n+dw,u+dw);if(af<3)return;
}if((src.aP.Format===this.cC)&&!ig)ea(b,ae.aP,lm?b.lR:b.iL);else if(src.aP.Format===
this.cC)ea(b,ae.aP,lm?(pH?b.lX:b.lS):(h6?b.kn:b.iM));else ea(b,ae.aP,lm?(pH?b.lY:
b.lT):(h6?b.ko:b.hB));fo(b,src.aP,ep);if(b.ch&&!ay)b.disable(b.BLEND);if(!b.ch&&
ay)b.enable(b.BLEND);b.ch=ay;switch(af){case 4:{c.set(c.subarray(22,44),33);c.set(
c.subarray(44,55),22);break;}case 5:{c.set(c.subarray(22,55),33);c.set(c.subarray(
55,66),22);break;}case 6:{c.set(c.subarray(22,66),66);c.set(c.subarray(99,110),22
);c.set(c.subarray(66,77),33);c.set(c.subarray(88,99),44);c.set(c.subarray(77,88
),55);break;}case 7:{c.set(c.subarray(22,77),77);c.set(c.subarray(121,132),22);c.
set(c.subarray(77,88),33);c.set(c.subarray(110,121),44);c.set(c.subarray(88,110)
,55);break;}case 8:{c.set(c.subarray(22,88),88);c.set(c.subarray(143,154),22);c.
set(c.subarray(88,99),33);c.set(c.subarray(132,143),44);c.set(c.subarray(99,110)
,55);c.set(c.subarray(121,132),66);c.set(c.subarray(110,121),77);break;}}if(h6||(
pH&&lm)){b.uniform4fv(b.gf.qC,ge(be));b.uniform4fv(b.gf.qD,ge(bg));b.uniform4fv(
b.gf.qB,ge(cS));b.uniform4fv(b.gf.qA,ge(cT));}b.bufferSubData(b.ARRAY_BUFFER,0,b.
c2);b.drawArrays(b.TRIANGLE_STRIP,0,af);if(this.cM)eX(b);};function ki(a,aG,dg){
var el=a.createTexture();var aq={};a.fp=null;a.bindTexture(a.TEXTURE_2D,el);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER
,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texImage2D(a.TEXTURE_2D,0,a.RGBA
,aG,dg,0,a.RGBA,a.UNSIGNED_BYTE,null);aq.Width=aG;aq.Height=dg;aq.jh=aG;aq.jg=dg;
aq.dc=1/aG;aq.db=1/dg;aq.fl=2/aG;aq.fk=2/dg;aq.cL=el;aq.Framebuffer=null;return aq;
}function gg(a,jI){if(a.fp===jI)fo(a,null,false);if(a.kk===jI)mj(a,null,false);if(
jI.cL)a.deleteTexture(jI.cL);if(jI.Framebuffer)a.deleteFramebuffer(jI.Framebuffer
);}function cw(a,x,ap,b5,mF,g5,g0,kN,mQ,cl,bc,v7,b0,a7,ay,ep){var c=a.hx;ea(a,x,
b0);fo(a,ap,ep);c[0]=c[22]=mF[0];c[1]=c[12]=mF[1];c[11]=c[33]=mF[2];c[34]=c[23]=
mF[3];c[2]=g5[0];c[3]=g5[1];c[4]=1;c[13]=g5[2];c[14]=g5[1];c[15]=1;c[35]=g5[2];c[
36]=g5[3];c[37]=1;c[24]=g5[0];c[25]=g5[3];c[26]=1;if(b5){c[9]=g0[0];c[10]=g0[1];
c[20]=g0[2];c[21]=g0[1];c[42]=g0[2];c[43]=g0[3];c[31]=g0[0];c[32]=g0[3];mj(a,b5,
false);a.uniform1i(b0.u3,v7?1:0);a.uniform2f(b0.u4,b5.dc,b5.db);a.uniform2f(b0.u5
,mQ?0:b5.dc,mQ?b5.db:0);}if(kN&&b0.mm){a.uniform2f(b0.mm,2*kN[0]*ap.dc,2*kN[1]*ap.
db);a.uniform2f(b0.qz,2*kN[2]*ap.dc,2*kN[3]*ap.db);}else if(b0.mm){a.uniform2f(b0.
mm,0,0);a.uniform2f(b0.qz,0,0);}a.uniform2f(b0.u7,ap.dc,ap.db);a.uniform2f(b0.u9
,mQ?0:ap.dc,mQ?ap.db:0);if(b0.qG)a.uniform4fv(b0.qG,ge(bc));if(b0.qF)a.uniform1f(
b0.qF,a7/255);if(b0.qE)a.uniform1f(b0.qE,cl);if(!ay&&a.ch)a.disable(a.BLEND);if(
ay&&!a.ch)a.enable(a.BLEND);a.ch=ay;a.bufferSubData(a.ARRAY_BUFFER,0,a.c2);a.drawArrays(
a.TRIANGLE_STRIP,0,4);}function p3(ce,h3){if(ce>=0)return ce-ce%h3;else return ce-(
h3-(-ce%h3));}function p2(ce,h3){if(ce>=0)return ce+h3-(ce%h3);else return ce+-ce
%h3;}f.vh=function(dq){if(dq<=0)return 0;else if(dq<=3)return 2;else if(dq<=6)return 4;
else if(dq<=12)return 8;else if(dq<=20)return 16;else if(dq<=28)return 24;else if(
dq<=40)return 32;else if(dq<=56)return 48;else return 64;};f.zt=function(x,ap,b5
,ak,ag,q,cE,mK,dh,oT,dq,kM,eI,cl,bc,a7,ay){var b=this.ai;var ae=null;var src=null;
var f6=null;if(cl<0)cl=0;if(cl>1)cl=1;if(a7<0)a7=0;if(a7>255)a7=255;var as=this.
vh(dq);eI&=(cl>0)?3:0;if(eI===this.vR){eI=this.kG;bc=0xFFFFFFFF;}var nn=b5!==null;
var pd=as>0;var hg=((eI===this.kH)||(eI===this.kG))&&(cl>0);oT&=pd&&nn;dh&=nn;kM&=
pd;if(x&&(ak>=0)&&(ak<x.NoOfFrames)){ak=x.bZ?x.bZ[ak]:ak;ae=x.cd[ak];}if(ap&&(ap.
NoOfFrames===1))src=ap.cd[0];if(b5&&(b5.NoOfFrames===1))f6=b5.cd[0];if(ap.fn||(b5&&
b5.fn))return;if(!ae||(ae.aP.Format!==this.cC)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}if(b5&&(!f6||(f6.aP.Format!==this.jt))){console.log("EmWi error: Invalid mask bitmap in the drawing operation."
);return;}if((src.aP.Format===this.jt)&&!eI)bc=0xFFFFFFFF;if(src.aP.Format===this.
jt)eI=this.kH;if(ay&&!a7)return;if(ay&&hg&&(cl===1)&&!(bc&0xFF000000))return;if(
!pd&&!nn&&!hg){var al=0x00FFFFFF|(a7<<24);this.gn(x,ap,ak,0,ag,q,cE,al,al,al,al,
ay);return;}var nN=q[0];var nO=q[1];var sW=q[2];var sX=q[3];var nP=nN-cE[0];var nQ=
nO-cE[1];var yH=nP+ap.FrameSize[0];var yI=nQ+ap.FrameSize[1];var sY=b5?nN-mK[0]:
0;var sZ=b5?nO-mK[1]:0;var yF=b5?sY+b5.FrameSize[0]:0;var yG=b5?sZ+b5.FrameSize[
1]:0;var e$=Math.max(ag[0],nN,0);var fa=Math.max(ag[1],nO,0);var fB=Math.min(ag[
2],sW,x.FrameSize[0]);var fC=Math.min(ag[3],sX,x.FrameSize[1]);if(b5&&!dh){var cm=
oT?as:0;e$=Math.max(e$,sY-cm);fa=Math.max(fa,sZ-cm);fB=Math.min(fB,yF+cm);fC=Math.
min(fC,yG+cm);}e$=Math.max(e$,nP-as);fa=Math.max(fa,nQ-as);fB=Math.min(fB,yH+as);
fC=Math.min(fC,yI+as);if((fB<=e$)||(fC<=fa))return;var ib=e$-nP;var id=fa-nQ;var
ic=fB-nP;var ie=fC-nQ;var ry=ib-as;var h5=id-as;var rz=ic+as;var k8=ie+as;var h$=
mK[0]+e$-q[0];var ia=mK[1]+fa-q[1];var jN=h$+(fB-e$);var jO=ia+(fC-fa);var rT=Math.
min(cE[0],0);var r5=Math.min(cE[1],0);var r4=Math.max(cE[0]+(sW-nN),ap.FrameSize[
0]);var rJ=Math.max(cE[1]+(sX-nO),ap.FrameSize[1]);var f2=[rT+1,r5+1,r4-1,rJ-1];
var pf=ae.aP;var ei=src.aP;var dH=f6?f6.aP:null;var br;e$+=ae.aH[0];fa+=ae.aH[1];
fB+=ae.aH[0];fC+=ae.aH[1];ib+=src.aH[0];id+=src.aH[1];ic+=src.aH[0];ie+=src.aH[1
];ry+=src.aH[0];h5+=src.aH[1];rz+=src.aH[0];k8+=src.aH[1];rT+=src.aH[0];r5+=src.
aH[1];r4+=src.aH[0];rJ+=src.aH[1];if(f6){h$+=f6.aH[0];ia+=f6.aH[1];jN+=f6.aH[0];
jO+=f6.aH[1];}if(oT)if(hg&&(eI===this.kG))br=[b.kp,b.iS,b.iU,b.iW,null,null,b.iY
,b.i0,null,null,b.d_,b.d$,null,b.d7,b.d8,b.d9,b.i6,b.i7,b.i8,b.i9,b.iT,b.iV,b.iX
,b.iZ,b.i1];else if(hg&&(eI===this.kH))br=[b.kq,b.iS,b.iU,b.iW,null,null,b.iY,b.
i0,null,null,b.d_,b.d$,null,b.d7,b.d8,b.d9,b.i_,b.i$,b.ja,b.jb,b.iT,b.iV,b.iX,b.
iZ,b.i1];else br=[b.kr,b.iS,b.iU,b.iW,null,null,b.iY,b.i0,null,null,b.d_,b.d$,null
,b.d7,b.d8,b.d9,b.jc,b.jd,b.je,b.jf,b.iT,b.iV,b.iX,b.iZ,b.i1];else if(nn)if(hg&&(
eI===this.kG))br=[b.kp,b.i7,b.i8,b.i9,null,null,b.l2,b.l4,null,null,b.d_,b.d$,null
,b.d7,b.d8,b.d9,b.i2,b.i3,b.i4,b.i5,b.lZ,b.l0,b.l1,b.l3,b.l5];else if(hg&&(eI===
this.kH))br=[b.kq,b.i$,b.ja,b.jb,null,null,b.l9,b.l$,null,null,b.d_,b.d$,null,b.
d7,b.d8,b.d9,b.i2,b.i3,b.i4,b.i5,b.l6,b.l7,b.l8,b.l_,b.ma];else br=[b.kr,b.jd,b.
je,b.jf,null,null,b.me,b.mg,null,null,b.d_,b.d$,null,b.d7,b.d8,b.d9,b.i2,b.i3,b.
i4,b.i5,b.mb,b.mc,b.md,b.mf,b.mh];else if(hg&&(eI===this.kG))br=[b.i6,b.d7,b.d8,
b.d9,null,null,b.d_,b.d$,null,null,b.d_,b.d$,null,b.d7,b.d8,b.d9,b.i6,b.i7,b.i8,
b.i9,b.iN,b.iO,b.iP,b.iQ,b.iR];else if(hg&&(eI===this.kH))br=[b.i_,b.d7,b.d8,b.d9
,null,null,b.d_,b.d$,null,null,b.d_,b.d$,null,b.d7,b.d8,b.d9,b.i_,b.i$,b.ja,b.jb
,b.iN,b.iO,b.iP,b.iQ,b.iR];else br=[b.jc,b.d7,b.d8,b.d9,null,null,b.d_,b.d$,null
,null,b.d_,b.d$,null,b.d7,b.d8,b.d9,b.jc,b.jd,b.je,b.jf,b.iN,b.iO,b.iP,b.iQ,b.iR
];if(dq<=0){var wX=[e$,fa,fB,fC];var ys=[ib,id,ic,ie];var yn=[h$,ia,jN,jO];cw(b,
pf,ei,dH,wX,ys,yn,null,false,cl,bc,dh,br[0],a7,ay,false);}else if(dq<=12){var eR
,dl,fK;if(dq<=3){eR=br[1];dl=br[20];fK=br[17];}else if(dq<=6){eR=br[2];dl=br[21];
fK=br[18];}else{eR=br[3];dl=br[22];fK=br[19];}var d1=ic-ib;var ff=k8-h5;var aO=[
ib,h5,ic,k8];var aN=[h$,ia-(id-h5),jN,jO+(k8-ie)];var bX=[0,0,d1,ff];var wV=[e$,
fa,fB,fC];var yl=[h$,ia,jN,jO];var yC=[0,id-h5,d1,ie-h5];var aJ=ki(b,d1,ff);if(!
aJ)return;if(kM&&(d1>(2*as))&&(ff>(2*as))){var pO=bX[0];var pI=aO[0];var ps=aN[0
];var pP=bX[2];var pJ=aO[2];var pt=aN[2];var pQ=bX[3];var pK=aO[3];var pu=aN[3];
bX[0]+=as;aO[0]+=as;aN[0]+=as;bX[1]+=as;aO[1]+=as;aN[1]+=as;bX[2]-=as;aO[2]-=as;
aN[2]-=as;bX[3]-=as;aO[3]-=as;aN[3]-=as;cw(b,aJ,ei,dH,bX,aO,aN,null,false,cl,bc,
dh,eR,a7,false,false);bX[0]-=as;aO[0]-=as;aN[0]-=as;bX[1]-=as;aO[1]-=as;aN[1]-=as;
bX[2]+=as;aO[2]+=as;aN[2]+=as;bX[3]+=as;aO[3]+=as;aN[3]+=as;bX[2]=bX[0]+as;aO[2]=
aO[0]+as;aN[2]=aN[0]+as;cw(b,aJ,ei,dH,bX,aO,aN,f2,false,cl,bc,dh,dl,a7,false,false
);bX[2]=pP;aO[2]=pJ;aN[2]=pt;bX[0]=bX[2]-as;aO[0]=aO[2]-as;aN[0]=aN[2]-as;cw(b,aJ
,ei,dH,bX,aO,aN,f2,false,cl,bc,dh,dl,a7,false,false);bX[0]=pO;aO[0]=pI;aN[0]=ps;
bX[0]+=as;aO[0]+=as;aN[0]+=as;bX[2]-=as;aO[2]-=as;aN[2]-=as;bX[3]=bX[1]+as;aO[3]=
aO[1]+as;aN[3]=aN[1]+as;cw(b,aJ,ei,dH,bX,aO,aN,f2,false,cl,bc,dh,dl,a7,false,false
);bX[3]=pQ;aO[3]=pK;aN[3]=pu;bX[1]=bX[3]-as;aO[1]=aO[3]-as;aN[1]=aN[3]-as;cw(b,aJ
,ei,dH,bX,aO,aN,f2,false,cl,bc,dh,dl,a7,false,false);}else if(kM)cw(b,aJ,ei,dH,bX
,aO,aN,f2,false,cl,bc,dh,dl,a7,false,false);else cw(b,aJ,ei,dH,bX,aO,aN,null,false
,cl,bc,dh,eR,a7,false,false);cw(b,pf,aJ,dH,wV,yC,yl,null,true,cl,bc,dh,fK,a7,ay,
false);gg(b,aJ);}else{var eR,dl,fK,it;var scale;if(dq<=20){eR=br[6];dl=br[23];fK=
br[10];it=br[14];scale=2;}else if(dq<=28){eR=br[6];dl=br[23];fK=br[10];it=br[15];
scale=3;}else if(dq<=40){eR=br[6];dl=br[23];fK=br[10];it=br[15];scale=4;}else if(
dq<=56){eR=br[7];dl=br[24];fK=br[11];it=br[15];scale=6;}else{eR=br[7];dl=br[24];
fK=br[11];it=br[15];scale=8;}var j$=p3(ry,scale);var gK=p3(h5,scale);var nL=p2(rz
,scale);var iv=p2(k8,scale);var d1=((nL-j$)/scale)|0;var ff=((iv-gK)/scale)|0;var
aO=[j$,gK,nL,iv];var aN=[h$+j$-ib,ia+gK-id,jN+nL-ic,jO+iv-ie];var bW=[0,0,d1,(iv-
gK)];var yv=[0,0,d1,iv-gK];var yw=[0,0,d1,ff];var yx=[0,0,d1,ff];var yy=[0,0,d1,
ff];var yz=[0,0,d1,ff];var yA=[0,0,d1,ff];var yB=[(ib-j$)/scale,(id-gK)/scale,(ic-
j$)/scale,(ie-gK)/scale];var wW=[e$,fa,fB,fC];var ym=[h$,ia,jN,jO];var aJ=ki(b,d1
,iv-gK);var ba=ki(b,d1,ff);var fQ=ki(b,d1,ff);var kd=ki(b,d1,ff);if(!aJ||!ba||!fQ||
!kd){if(aJ)gg(b,aJ);if(ba)gg(b,ba);if(fQ)gg(b,fQ);if(kd)gg(b,kd);return;}if(kM&&((
nL-j$)>(2*as))&&((iv-gK)>(2*as))){var pO=bW[0];var pI=aO[0];var ps=aN[0];var pP=
bW[2];var pJ=aO[2];var pt=aN[2];var pQ=bW[3];var pK=aO[3];var pu=aN[3];var dR=as
*scale;bW[0]+=as;aO[0]+=dR;aN[0]+=dR;bW[1]+=as;aO[1]+=as;aN[1]+=as;bW[2]-=as;aO[
2]-=dR;aN[2]-=dR;bW[3]-=as;aO[3]-=as;aN[3]-=as;cw(b,aJ,ei,dH,bW,aO,aN,null,false
,cl,bc,dh,eR,a7,false,false);bW[0]-=as;aO[0]-=dR;aN[0]-=dR;bW[1]-=as;aO[1]-=as;aN[
1]-=as;bW[2]+=as;aO[2]+=dR;aN[2]+=dR;bW[3]+=as;aO[3]+=as;aN[3]+=as;bW[2]=bW[0]+as;
aO[2]=aO[0]+dR;aN[2]=aN[0]+dR;cw(b,aJ,ei,dH,bW,aO,aN,f2,false,cl,bc,dh,dl,a7,false
,false);bW[2]=pP;aO[2]=pJ;aN[2]=pt;bW[0]=bW[2]-as;aO[0]=aO[2]-dR;aN[0]=aN[2]-dR;
cw(b,aJ,ei,dH,bW,aO,aN,f2,false,cl,bc,dh,dl,a7,false,false);bW[0]=pO;aO[0]=pI;aN[
0]=ps;bW[0]+=as;aO[0]+=dR;aN[0]+=dR;bW[2]-=as;aO[2]-=dR;aN[2]-=dR;bW[3]=bW[1]+as+
2;aO[3]=aO[1]+as+2;aN[3]=aN[1]+as+2;cw(b,aJ,ei,dH,bW,aO,aN,f2,false,cl,bc,dh,dl,
a7,false,false);bW[3]=pQ;aO[3]=pK;aN[3]=pu;bW[1]=bW[3]-as-2;aO[1]=aO[3]-as-2;aN[
1]=aN[3]-as-2;cw(b,aJ,ei,dH,bW,aO,aN,f2,false,cl,bc,dh,dl,a7,false,false);}else if(
kM)cw(b,aJ,ei,dH,bW,aO,aN,f2,false,cl,bc,dh,dl,a7,false,false);else cw(b,aJ,ei,dH
,bW,aO,aN,null,false,cl,bc,dh,eR,a7,false,false);cw(b,ba,aJ,null,yw,yv,null,null
,true,0,0,false,fK,255,false,false);cw(b,fQ,ba,null,yy,yx,null,null,false,0,0,false
,it,255,false,false);cw(b,kd,fQ,null,yA,yz,null,null,true,0,0,false,it,255,false
,false);cw(b,pf,kd,dH,wW,yB,ym,null,false,cl,bc,dh,br[16],a7,ay,true);gg(b,aJ);gg(
b,ba);gg(b,fQ);gg(b,kd);}if(this.cM)eX(b);};function qb(a,gs,oS,kQ,bl,bA,cz,hL,hN
,hM,hO,q,bc){var li=gs.length*6;var c2=new ArrayBuffer(li*11*4);var c=new Float32Array(
c2);var aZ=new Uint32Array(c2);var bj=kQ[0]+q[0];var aX=kQ[1]+q[1];var b$=q[2]-q[
0];var b1=q[3]-q[1];for(var d=0;d<gs.length;d++){var y=d*66;var ab=gs[d];var dG=
oS[d];var p=bl+ab.OriginX+dG;var n=bA+ab.OriginY;var w=p+ab.Width;var u=n+ab.Height;
var cG=ab.p6;var dm=ab.p7;var b_=ab.p8;var bV=ab.p9;if((n<hN)&&(u!==n)){b_+=((hN-
n)/(u-n))*(bV-b_);n=hN;}if((u>hO)&&(u!==n)){bV+=((hO-u)/(u-n))*(bV-b_);u=hO;}if((
p<hL)&&(p!==w)){cG+=((hL-p)/(w-p))*(dm-cG);p=hL;}if((w>hM)&&(p!==w)){dm+=((hM-w)
/(w-p))*(dm-cG);w=hM;}if(p>w)p=w;if(n>u)n=u;if(cz===0){p+=bj;n+=aX;w+=bj;u+=aX;c[
y+0]=p;c[y+11]=w;c[y+1]=n;c[y+12]=n;c[y+22]=p;c[y+33]=p;c[y+23]=u;c[y+34]=u;c[y+
44]=w;c[y+55]=w;c[y+45]=n;c[y+56]=u;}else if(cz===90){var cH=bj+n;var cJ=aX+b1-p;
var cI=bj+u;var cK=aX+b1-w;c[y+0]=cH;c[y+11]=cH;c[y+1]=cJ;c[y+12]=cK;c[y+22]=cI;
c[y+33]=cI;c[y+23]=cJ;c[y+34]=cJ;c[y+44]=cH;c[y+55]=cI;c[y+45]=cK;c[y+56]=cK;}else
if(cz===180){var cH=bj+b$-p;var cJ=aX+b1-n;var cI=bj+b$-w;var cK=aX+b1-u;c[y+0]=
cH;c[y+11]=cI;c[y+1]=cJ;c[y+12]=cJ;c[y+22]=cH;c[y+33]=cH;c[y+23]=cK;c[y+34]=cK;c[
y+44]=cI;c[y+55]=cI;c[y+45]=cJ;c[y+56]=cK;}else if(cz===270){var cH=bj+b$-n;var cJ=
aX+p;var cI=bj+b$-u;var cK=aX+w;c[y+0]=cH;c[y+11]=cH;c[y+1]=cJ;c[y+12]=cK;c[y+22
]=cI;c[y+33]=cI;c[y+23]=cJ;c[y+34]=cJ;c[y+44]=cH;c[y+55]=cI;c[y+45]=cK;c[y+56]=cK;
}c[y+2]=cG;c[y+13]=dm;c[y+3]=b_;c[y+14]=b_;c[y+4]=1;c[y+15]=1;aZ[y+5]=bc;aZ[y+16
]=bc;c[y+24]=cG;c[y+35]=cG;c[y+25]=bV;c[y+36]=bV;c[y+26]=1;c[y+37]=1;aZ[y+27]=bc;
aZ[y+38]=bc;c[y+46]=dm;c[y+57]=dm;c[y+47]=b_;c[y+58]=bV;c[y+48]=1;c[y+59]=1;aZ[y+
49]=bc;aZ[y+60]=bc;bl+=ab.Advance+dG;}a.bufferData(a.ARRAY_BUFFER,c2,a.STREAM_DRAW
);a.drawArrays(a.TRIANGLES,0,li);a.bufferData(a.ARRAY_BUFFER,a.c2,a.STREAM_DRAW);
}function qc(a,gs,oS,kQ,bl,bA,cz,hL,hN,hM,hO,q,aE,aC,aB,aD){var li=gs.length*6;var
c2=new ArrayBuffer(li*11*4);var c=new Float32Array(c2);var aZ=new Uint32Array(c2
);var bj=kQ[0]+q[0];var aX=kQ[1]+q[1];var b$=q[2]-q[0];var b1=q[3]-q[1];var nx=1
/b$;var nu=1/b1;if(cz===90){var g=aE;aE=aD;aD=aB;aB=aC;aC=g;nx=1/b1;nu=1/b$;}else
if(cz===180){var aJ=aE;var ba=aD;aE=aB;aB=aJ;aD=aC;aC=ba;}else if(cz===270){var g=
aE;aE=aC;aC=aB;aB=aD;aD=g;nx=1/b1;nu=1/b$;}var mT=(aE&0xFF);var mU=((aE>>8)&0xFF
);var mV=((aE>>16)&0xFF);var mW=((aE>>24)&0xFF);var mX=(aC&0xFF);var mY=((aC>>8)&
0xFF);var mZ=((aC>>16)&0xFF);var m0=((aC>>24)&0xFF);var rB=(aD&0xFF);var rC=((aD>>
8)&0xFF);var rD=((aD>>16)&0xFF);var rE=((aD>>24)&0xFF);var rF=(aB&0xFF);var rG=((
aB>>8)&0xFF);var rH=((aB>>16)&0xFF);var rI=((aB>>24)&0xFF);for(var d=0;d<gs.length;
d++){var y=d*66;var ab=gs[d];var dG=oS[d];var p=bl+ab.OriginX+dG;var n=bA+ab.OriginY;
var w=p+ab.Width;var u=n+ab.Height;var cG=ab.p6;var dm=ab.p7;var b_=ab.p8;var bV=
ab.p9;if((n<hN)&&(u!==n)){b_+=((hN-n)/(u-n))*(bV-b_);n=hN;}if((u>hO)&&(u!==n)){bV+=((
hO-u)/(u-n))*(bV-b_);u=hO;}if((p<hL)&&(p!==w)){cG+=((hL-p)/(w-p))*(dm-cG);p=hL;}
if((w>hM)&&(p!==w)){dm+=((hM-w)/(w-p))*(dm-cG);w=hM;}if(p>w)p=w;if(n>u)n=u;var hk=
n*nu;var hh=u*nu;var hi=p*nx;var hj=w*nx;var m6=mT+(rB-mT)*hk;var m7=mU+(rC-mU)*
hk;var m8=mV+(rD-mV)*hk;var m9=mW+(rE-mW)*hk;var rO=mX+(rF-mX)*hk;var rP=mY+(rG-
mY)*hk;var rQ=mZ+(rH-mZ)*hk;var rR=m0+(rI-m0)*hk;var m2=mT+(rB-mT)*hh;var m3=mU+(
rC-mU)*hh;var m4=mV+(rD-mV)*hh;var m5=mW+(rE-mW)*hh;var rK=mX+(rF-mX)*hh;var rL=
mY+(rG-mY)*hh;var rM=mZ+(rH-mZ)*hh;var rN=m0+(rI-m0)*hh;var wB=m6+(rO-m6)*hi;var
wC=m7+(rP-m7)*hi;var wD=m8+(rQ-m8)*hi;var wE=m9+(rR-m9)*hi;var wF=m6+(rO-m6)*hj;
var wG=m7+(rP-m7)*hj;var wH=m8+(rQ-m8)*hj;var wI=m9+(rR-m9)*hj;var wt=m2+(rK-m2)
*hi;var wu=m3+(rL-m3)*hi;var wv=m4+(rM-m4)*hi;var ww=m5+(rN-m5)*hi;var wx=m2+(rK-
m2)*hj;var wy=m3+(rL-m3)*hj;var wz=m4+(rM-m4)*hj;var wA=m5+(rN-m5)*hj;aE=wB|(wC<<
8)|(wD<<16)|(wE<<24);aC=wF|(wG<<8)|(wH<<16)|(wI<<24);aB=wx|(wy<<8)|(wz<<16)|(wA<<
24);aD=wt|(wu<<8)|(wv<<16)|(ww<<24);if(cz===0){p+=bj;n+=aX;w+=bj;u+=aX;c[y+0]=p;
c[y+11]=w;c[y+1]=n;c[y+12]=n;c[y+22]=p;c[y+33]=p;c[y+23]=u;c[y+34]=u;c[y+44]=w;c[
y+55]=w;c[y+45]=n;c[y+56]=u;}else if(cz===90){var cH=bj+n;var cJ=aX+b1-p;var cI=
bj+u;var cK=aX+b1-w;c[y+0]=cH;c[y+11]=cH;c[y+1]=cJ;c[y+12]=cK;c[y+22]=cI;c[y+33]=
cI;c[y+23]=cJ;c[y+34]=cJ;c[y+44]=cH;c[y+55]=cI;c[y+45]=cK;c[y+56]=cK;}else if(cz===
180){var cH=bj+b$-p;var cJ=aX+b1-n;var cI=bj+b$-w;var cK=aX+b1-u;c[y+0]=cH;c[y+11
]=cI;c[y+1]=cJ;c[y+12]=cJ;c[y+22]=cH;c[y+33]=cH;c[y+23]=cK;c[y+34]=cK;c[y+44]=cI;
c[y+55]=cI;c[y+45]=cJ;c[y+56]=cK;}else if(cz===270){var cH=bj+b$-n;var cJ=aX+p;var
cI=bj+b$-u;var cK=aX+w;c[y+0]=cH;c[y+11]=cH;c[y+1]=cJ;c[y+12]=cK;c[y+22]=cI;c[y+
33]=cI;c[y+23]=cJ;c[y+34]=cJ;c[y+44]=cH;c[y+55]=cI;c[y+45]=cK;c[y+56]=cK;}c[y+2]=
cG;c[y+13]=dm;c[y+3]=b_;c[y+14]=b_;c[y+4]=1;c[y+15]=1;aZ[y+5]=aE;aZ[y+16]=aC;c[y+
24]=cG;c[y+35]=cG;c[y+25]=bV;c[y+36]=bV;c[y+26]=1;c[y+37]=1;aZ[y+27]=aD;aZ[y+38]=
aD;c[y+46]=dm;c[y+57]=dm;c[y+47]=b_;c[y+58]=bV;c[y+48]=1;c[y+59]=1;aZ[y+49]=aC;aZ[
y+60]=aB;bl+=ab.Advance+dG;}a.bufferData(a.ARRAY_BUFFER,c2,a.STREAM_DRAW);a.drawArrays(
a.TRIANGLES,0,li);a.bufferData(a.ARRAY_BUFFER,a.c2,a.STREAM_DRAW);}f.qT=function(
x,ar,k,ah,ac,ak,ag,q,cE,es,cz,aE,aC,aB,aD,ay){var b=this.ai;var ae=null;var p=q[
0];var n=q[1];var w=q[2];var u=q[3];var gb=-cE[0];var gc=-cE[1];var fP=0;var fO=
0x8000;var a$=0;var a1=k.length;var ax;if(x&&(ak>=0)&&(ak<x.NoOfFrames)){ak=x.bZ?
x.bZ[ak]:ak;ae=x.cd[ak];}if(!ae||(ae.aP.Format!==this.cC)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!ar){console.log("EmWi error: Invalid font in the drawing operation."
);return;}if(ac===-1)ac=a1;if(a1<ac)ac=a1;if(ah<0){ac+=ah;ah=0;}if((ah+ac)>a1)ac=
a1-ah;if(ac<=0)return;if((cz!==90)&&(cz!==180)&&(cz!==270))cz=0;p=Math.max(ag[0]
,p,0);n=Math.max(ag[1],n,0);w=Math.min(ag[2],w,x.FrameSize[0]);u=Math.min(ag[3],
u,x.FrameSize[1]);if(cz===90){var g=n;n=p-q[0];p=q[3]-u;u=w-q[0];w=q[3]-g;}else if(
cz===180){var aJ=p;var ba=n;p=q[2]-w;n=q[3]-u;w=q[2]-aJ;u=q[3]-ba;}else if(cz===
270){var g=p;p=n-q[1];n=q[2]-w;w=u-q[1];u=q[2]-g;}else{p-=q[0];n-=q[1];w-=q[0];u-=
q[1];}n=Math.max(n,gc-ar.Ascent);u=Math.min(u,gc+ar.Descent+1);if((w<=p)||(u<=n)
)return;if(es>0)es-=this.ms(ar,k,ah,ac);if(es>0){var cc=ah;var af=ac;var fI=0;for(;
af;cc++,af--){var aa=k.charCodeAt(cc);if((aa===32)||(aa===0xA0))fI++;}if(fI)fP=((
es<<16)/fI)|0;}var eN=(aE!==aD)||(aC!==aB)||(aE!==aC);ea(b,ae.aP,b.hB);fo(b,null
,false);b.bindTexture(b.TEXTURE_2D,this.kx);if(b.ch&&!ay)b.disable(b.BLEND);if(!
b.ch&&ay)b.enable(b.BLEND);b.ch=ay;var cA=[];var j0=[];var lv=gb;ax=this.gT();while(
ac>0){var aw=[];var aa=k.charCodeAt(ah);var a3;var d,bE;if((aa===0x061C)||(aa===
0xFEFF)||((aa>=0x200B)&&(aa<=0x200F))||((aa>=0x202A)&&(aa<=0x202E))||((aa>=0x2066
)&&(aa<=0x2069))){ac--;ah++;continue;}if(aa===0x000A){ac--;ah++;a$=0;continue;}a3=
this.fY(ar,k,ah,Math.min(ac,8),false,aw,ax);if(!a3){aw[0]=1;aw[1]=0;a3=1;console.
log("EmWi error: No glyph available for the character code: "+k.charCodeAt(ah));
}for(d=0;d<aw[0];d++){var ab=this.qV(ar,aw[d+1]);var dG;if(!ab&&cA.length){if(eN
)qc(b,cA,j0,ae.aH,lv,gc,cz,p,n,w,u,q,aE,aC,aB,aD);else qb(b,cA,j0,ae.aH,lv,gc,cz
,p,n,w,u,q,aE);for(bE=0;bE<cA.length;bE++)cA[bE].mn--;cA=[];j0=[];ab=this.qV(ar,
aw[d+1]);}if(!ab){console.log("EmWi error: Not able to load the glyph: "+aw[d+1]
);return;}dG=this.de(ar,a$,aw[d+1]);if(fP&&((aa===0x20)||(aa===0xA0))){fO+=fP;dG+=
fO>>16;fO&=0xFFFF;}if(((gb+dG+ab.OriginX+ab.Width)<=p)&&!cA.length){gb+=dG+ab.Advance;
a$=aw[d+1];continue;}if((gb+dG+ab.OriginX)>=w){ac=0;break;}if(!cA.length)lv=gb;ab.
mn++;cA.push(ab);j0.push(dG);gb+=dG+ab.Advance;a$=aw[d+1];}ac-=a3;ah+=a3;}if(cA.
length){if(eN)qc(b,cA,j0,ae.aH,lv,gc,cz,p,n,w,u,q,aE,aC,aB,aD);else qb(b,cA,j0,ae.
aH,lv,gc,cz,p,n,w,u,q,aE);for(bE=0;bE<cA.length;bE++)cA[bE].mn--;}if(this.cM)eX(
b);};f.zo=function(x,ao,bp,ak,ag,q,cE,g2,g3,h0,hZ,ay){if(!x||!ao||!bp||(ak<0)||(
ak>=x.NoOfFrames))return;ag=this.kz(ag,q);if((ag[2]<=ag[0])||(ag[3]<=ag[1]))return;
if(g2<0)g2=0;if(g2>255)g2=255;if(g3<0)g3=0;if(g3>255)g3=255;if(hZ<0)hZ=0;if(hZ>255
)hZ=255;if(h0<0)h0=0;if(h0>255)h0=255;var width=q[2]-q[0];var height=q[3]-q[1];var
sh=1;var nv=1;var sj=(g2!==hZ)||(g3!==h0);var si=(g2!==g3)||(hZ!==h0);if(width&&
si)sh/=width;if(height&&sj)nv/=height;var eN={ql:si,qm:sj,uF:sh,y8:nv,Width:width
,Height:height,s8:g2,s9:(hZ-g2)*nv,s_:g3,s$:(h0-g3)*nv};tl(this,x,ak,ag,q,q[0]-cE[
0],q[1]-cE[1],ao,bp.Data,0,bp.Data.length,ay,eN);};f.vw=[0,0];f.vx=[0,0,0,0];f.jm=
"";f.kw=3.1415926535/180;f.qW=180/3.1415926535;f.mA=new Array(129).join('0');f.ju=[
];f.jr=null;f.hJ=0;f.jk=null;f.qS=0;f.dO=null;f.eE=null;f.gU=null;f.js=null;f.qJ=
null;f.y9="";f.cp=null;f.vs=0;f.e2=null;f.ai=null;f.hF=null;f.kB=false;f.kA=false;
f.hI=false;f.e3=0;f.jw=[];f.ox=[];f.qY=[];f.eb=0;f.fX=0;f.op=null;f.mr=false;f.oj=
false;f.cM=false;f.hH=1024;f.mu=1024;f.hG=64;f.kx=null;f.gS=null;f.mt=null;f.jo=
null;f.jv=0;f.kF=-1;f.cC=0;f.jt=1;f.or=0x00000000;f.kD=0x00000001;f.os=0x00000002;
f.my=0x00000003;f.vI=0x00000000;f.kC=0x00000100;f.oq=0x00000200;f.mx=0x00000300;
f.aau=0x00000000;f.aaw=0x00000101;f.aax=0x00000202;f.aav=0x00000303;f.ot=0x00000000;
f.ou=0x00010000;f.ov=0x00020000;f.vO=0;f.vM=1;f.q1=2;f.vN=3;f.aaE=4;f.aa7=0;f.vR=
1;f.kH=2;f.kG=3;return f;})();

/* Embedded Wizard */