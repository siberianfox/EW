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
);if(EmWiApp.abl)throw new Error("The file file 'ResourcesDefaultFont.js' included twice!"
);
EmWiApp.abl=[9,3,0,2,96,96,"\
\u0000\u8001\u7FFA\u0005\u0006\u8007\u0000\u0000\u0020\u8000\u8000\u0000\u0000\u8003\u0000\u001C\
\u0021\u8001\u7FF9\u0001\u0007\u8003\u0000\u001C\u0022\u8000\u7FF9\u0003\u0002\u8003\u0000\u0025\
\u0023\u8000\u7FF9\u0004\u0007\u8005\u0000\u002C\u0024\u8000\u7FF9\u0005\u0008\u8005\u0000\u004C\
\u0025\u8001\u7FF9\u0006\u0007\u8008\u0000\u0081\u0026\u8000\u7FF9\u0006\u0007\u8006\u0000\u00B2\
\u0027\u8000\u7FF9\u0001\u0002\u8002\u0000\u00E1\u0028\u8000\u7FF9\u0003\u0009\u8003\u0000\u00E5\
\u0029\u8000\u7FF9\u0003\u0009\u8003\u0000\u00FB\u002A\u8000\u7FF9\u0003\u0003\u8004\u0000\u0117\
\u002B\u8000\u7FFB\u0005\u0005\u8005\u0000\u0125\u002C\u8001\u7FFF\u0001\u0002\u8003\u0000\u013D\
\u002D\u8000\u7FFD\u0002\u0001\u8003\u0000\u0141\u002E\u8001\u7FFF\u0001\u0001\u8003\u0000\u0146\
\u002F\u8000\u7FF9\u0003\u0007\u8003\u0000\u014A\u0030\u8000\u7FF9\u0004\u0007\u8005\u0000\u015F\
\u0031\u8001\u7FF9\u0002\u0007\u8005\u0000\u0172\u0032\u8000\u7FF9\u0004\u0007\u8005\u0000\u017D\
\u0033\u8000\u7FF9\u0004\u0007\u8005\u0000\u019D\u0034\u8000\u7FF9\u0005\u0007\u8005\u0000\u01BE\
\u0035\u8000\u7FF9\u0004\u0007\u8005\u0000\u01E3\u0036\u8000\u7FF9\u0004\u0007\u8005\u0000\u0205\
\u0037\u8000\u7FF9\u0004\u0007\u8005\u0000\u0220\u0038\u8000\u7FF9\u0004\u0007\u8005\u0000\u0237\
\u0039\u8000\u7FF9\u0004\u0007\u8005\u0000\u0252\u003A\u8001\u7FFB\u0001\u0005\u8003\u0000\u026D\
\u003B\u8001\u7FFB\u0001\u0006\u8003\u0000\u0276\u003C\u8001\u7FFA\u0003\u0005\u8005\u0000\u027F\
\u003D\u8000\u7FFB\u0004\u0003\u8005\u0000\u0292\u003E\u8001\u7FFA\u0003\u0005\u8005\u0000\u02A1\
\u003F\u8000\u7FF9\u0005\u0007\u8005\u0000\u02B9\u0040\u8001\u7FF9\u0008\u0009\u8009\u0000\u02DB\
\u0041\u8000\u7FF9\u0007\u0007\u8006\u0000\u032C\u0042\u8001\u7FF9\u0004\u0007\u8006\u0000\u035D\
\u0043\u8001\u7FF9\u0005\u0007\u8007\u0000\u0378\u0044\u8001\u7FF9\u0005\u0007\u8007\u0000\u0398\
\u0045\u8001\u7FF9\u0005\u0007\u8006\u0000\u03B4\u0046\u8001\u7FF9\u0004\u0007\u8006\u0000\u03DD\
\u0047\u8001\u7FF9\u0005\u0007\u8007\u0000\u03F4\u0048\u8001\u7FF9\u0005\u0007\u8007\u0000\u041B\
\u0049\u8001\u7FF9\u0001\u0007\u8003\u0000\u0432\u004A\u8000\u7FF9\u0004\u0007\u8005\u0000\u0437\
\u004B\u8001\u7FF9\u0005\u0007\u8006\u0000\u0448\u004C\u8001\u7FF9\u0004\u0007\u8005\u0000\u0471\
\u004D\u8000\u7FF9\u0007\u0007\u8007\u0000\u047F\u004E\u8001\u7FF9\u0005\u0007\u8007\u0000\u04A4\
\u004F\u8001\u7FF9\u0005\u0007\u8007\u0000\u04C0\u0050\u8001\u7FF9\u0004\u0007\u8006\u0000\u04DD\
\u0051\u8001\u7FF9\u0005\u0007\u8007\u0000\u04F4\u0052\u8001\u7FF9\u0006\u0007\u8007\u0000\u0512\
\u0053\u8001\u7FF9\u0004\u0007\u8006\u0000\u0537\u0054\u8000\u7FF9\u0005\u0007\u8005\u0000\u0558\
\u0055\u8001\u7FF9\u0005\u0007\u8007\u0000\u056D\u0056\u8000\u7FF9\u0007\u0007\u8006\u0000\u0584\
\u0057\u8000\u7FF9\u0009\u0007\u8009\u0000\u05AD\u0058\u8000\u7FF9\u0005\u0007\u8005\u0000\u05DF\
\u0059\u8001\u7FF9\u0005\u0007\u8007\u0000\u0603\u005A\u8000\u7FF9\u0006\u0007\u8006\u0000\u061B\
\u005B\u8001\u7FF9\u0002\u0009\u8003\u0000\u064E\u005C\u8000\u7FF9\u0003\u0007\u8003\u0000\u065C\
\u005D\u8000\u7FF9\u0002\u0009\u8003\u0000\u066D\u005E\u8000\u7FF9\u0003\u0003\u8003\u0000\u0679\
\u005F\u8000\u8001\u0005\u0001\u8005\u0000\u0685\u0060\u8000\u7FF9\u0002\u0002\u8003\u0000\u068E\
\u0061\u8000\u7FFB\u0004\u0005\u8005\u0000\u0695\u0062\u8000\u7FF9\u0004\u0007\u8005\u0000\u06AE\
\u0063\u8000\u7FFB\u0004\u0005\u8005\u0000\u06C4\u0064\u8000\u7FF9\u0004\u0007\u8005\u0000\u06DB\
\u0065\u8000\u7FFB\u0004\u0005\u8005\u0000\u06F1\u0066\u8000\u7FF9\u0003\u0007\u8004\u0000\u070A\
\u0067\u8000\u7FFB\u0004\u0007\u8005\u0000\u071D\u0068\u8000\u7FF9\u0004\u0007\u8005\u0000\u0738\
\u0069\u8000\u7FF9\u0001\u0007\u8002\u0000\u074A\u006A\u7FFF\u7FF9\u0002\u0009\u8002\u0000\u0750\
\u006B\u8000\u7FF9\u0004\u0007\u8005\u0000\u0761\u006C\u8000\u7FF9\u0001\u0007\u8002\u0000\u077C\
\u006D\u8000\u7FFB\u0007\u0005\u8008\u0000\u0781\u006E\u8000\u7FFB\u0004\u0005\u8005\u0000\u079C\
\u006F\u8000\u7FFB\u0004\u0005\u8005\u0000\u07A9\u0070\u8000\u7FFB\u0004\u0007\u8005\u0000\u07BA\
\u0071\u8000\u7FFB\u0004\u0007\u8005\u0000\u07D1\u0072\u8000\u7FFB\u0003\u0005\u8003\u0000\u07E8\
\u0073\u8000\u7FFB\u0004\u0005\u8005\u0000\u07F4\u0074\u7FFF\u7FF9\u0003\u0007\u8003\u0000\u080D\
\u0075\u8000\u7FFB\u0004\u0005\u8005\u0000\u0821\u0076\u8000\u7FFB\u0005\u0005\u8006\u0000\u082F\
\u0077\u8000\u7FFB\u0005\u0005\u8006\u0000\u0845\u0078\u8000\u7FFB\u0004\u0005\u8005\u0000\u085B\
\u0079\u8000\u7FFB\u0005\u0007\u8006\u0000\u086D\u007A\u8000\u7FFB\u0003\u0005\u8004\u0000\u088B\
\u007B\u8000\u7FF9\u0003\u0009\u8003\u0000\u08A0\u007C\u8001\u7FF9\u0001\u0008\u8003\u0000\u08BA\
\u007D\u8000\u7FF9\u0003\u0009\u8003\u0000\u08BF\u007E\u8000\u7FFC\u0004\u0002\u8005\u0000\u08D7\
\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u08E3"
,"\
\u1FF7\u11D8\uF1F3\u9E79\u73E7\uD8E6\u37CF\u7CF6\uBFF2\uDB56\u7A71\u77EC\u56B0\u3B9E\
\u2EA2\u7CE6\u60DF\u7B8F\uECA2\u27F3\u5446\u8747\uE179\u60CC\uD8DE\u7FE6\uD8DE\u6E3B\
\uBF77\u6F31\uFB3A\u1139\uDE77\uB873\u6D77\u7993\uEBDD\uCBCE\u775A\u88C4\u73BA\u7BDE\
\uF7DF\uCE3F\u4E59\uD8B7\uACE3\uD9DF\uED21\uF79E\uDB9E\u7B0E\u38EE\u63BB\u731D\uE73A\
\uC28C\u7759\uE80F\uFF75\u3DC3\uEBD1\u731E\uCE72\uDDA8\u8AF6\u1D60\u8684\u1138\u8C63\
\u31D9\u9C03\u08A8\uC27B\u0F12\u9363\u0CE7\uEBD8\uF34E\uCE70\uFB80\u5EDC\u4D7A\u7993\
\u9D7B\u77B8\u200D\uEC02\u6515\u9877\u2583\uD622\u8136\u8DFE\uC358\uF63A\u358C\uB82C\
\uD7F7\uE631\uC676\u190F\u619B\uBE21\uC6E1\uAEFF\u66B9\u8798\u6F33\u6DF7\uB173\u9DE6\
\uD6E7\uE1FA\uD62C\u61BA\u2C1E\u325F\uEF42\u1DCC\uF8EE\uB00D\uE60E\uAEE5\u99C3\u62CE\
\u6B4D\uEE70\uD73A\u23F3\uAC5E\u8358\u09E3\u78DC\u372F\uE0D6\uB8E8\u9AEF\uFD33\u8542\
\u731F\uDF88\u0004\u0000"
,"\
\u0022\u0001\u0027\u000D\u0031\u000D\u0035\u000D\u0037\u000D\u0038\u000D\u003A\u000D\
\u0053\u000D\u0057\u000D\u0058\u000D\u005A\u000D\u0035\u000E\u0037\u000E\u003A\u000E\
\u0027\u000F\u0031\u000F\u0035\u000F\u0037\u000F\u0038\u000F\u003A\u000F\u0053\u000F\
\u0057\u000F\u0058\u000F\u005A\u000F\u0012\u0012\u0035\u001B\u003A\u001B\u0001\u0022\
\u0027\u0022\u0031\u0022\u0035\u0022\u0037\u0022\u003A\u0022\u0022\u0035\u002D\u0035\
\u0022\u0037\u002D\u0037\u002D\u0038\u0022\u003A\u002D\u003A\u0035\u0042\u0037\u0042\
\u003A\u0042\u0035\u0044\u0035\u0046\u0037\u0046\u003A\u0046\u0035\u0050\u0037\u0050\
\u003A\u0050\u003A\u0051\u003A\u0052\u0035\u0054\u003A\u0056\u003A\u0057\u0035\u0058\
\u0035\u005A"
,"\
\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\
\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\
\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F"
];

/* Embedded Wizard */