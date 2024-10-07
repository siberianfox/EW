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
* Platform : Espressif.ESP32.RGB565
*
*******************************************************************************/

#include "ewlocale.h"
#include "_CoreTimer.h"
#include "_CoreView.h"
#include "_ResourcesBitmap.h"
#include "_Screenwind.h"
#include "_ViewsImage.h"
#include "_ViewsRectangle.h"
#include "Image.h"
#include "Screen.h"
#include "Views.h"

/* Constant values used in this 'C' module only. */
static const XRect _Const0000 = {{ 0, 0 }, { 16, 16 }};
static const XColor _Const0001 = { 0xFF, 0xFF, 0xFF, 0xFF };
static const XRect _Const0002 = {{ 0, 0 }, { 15, 15 }};

/* Initializer for the class 'Screen::wind' */
void Screenwind__Init( Screenwind _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( Screenwind );

  /* ... then construct all embedded objects */
  ViewsRectangle__Init( &_this->Rectangle, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->Timer, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->Image, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( Screenwind );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_this->Rectangle, _Const0000 );
  ViewsRectangle_OnSetColor( &_this->Rectangle, _Const0001 );
  CoreTimer_OnSetPeriod( &_this->Timer, 1000 );
  CoreTimer_OnSetEnabled( &_this->Timer, 1 );
  CoreRectView__OnSetBounds( &_this->Image, _Const0002 );
  ViewsImage_OnSetAlignment( &_this->Image, ViewsImageAlignmentAlignHorzCenter | 
  ViewsImageAlignmentAlignVertCenter | ViewsImageAlignmentScaleToFit );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Rectangle ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Image ), 0 );
  _this->Timer.OnTrigger = EwNewSlot( _this, Screenwind_Slot );
  ViewsImage_OnSetBitmap( &_this->Image, EwLoadResource( &ImageDotMatrix_15x15_Sun2, 
  ResourcesBitmap ));
}

/* Re-Initializer for the class 'Screen::wind' */
void Screenwind__ReInit( Screenwind _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsRectangle__ReInit( &_this->Rectangle );
  CoreTimer__ReInit( &_this->Timer );
  ViewsImage__ReInit( &_this->Image );
}

/* Finalizer method for the class 'Screen::wind' */
void Screenwind__Done( Screenwind _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsRectangle__Done( &_this->Rectangle );
  CoreTimer__Done( &_this->Timer );
  ViewsImage__Done( &_this->Image );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* 'C' function for method : 'Screen::wind.Slot()' */
void Screenwind_Slot( Screenwind _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->Image.Bitmap == EwLoadResource( &ImageDotMatrix_15x15_Sun2, ResourcesBitmap ))
    ViewsImage_OnSetBitmap( &_this->Image, EwLoadResource( &ImageDotMatrix_15x15_Wind3, 
    ResourcesBitmap ));
  else
    ViewsImage_OnSetBitmap( &_this->Image, EwLoadResource( &ImageDotMatrix_15x15_Sun2, 
    ResourcesBitmap ));
}

/* Variants derived from the class : 'Screen::wind' */
EW_DEFINE_CLASS_VARIANTS( Screenwind )
EW_END_OF_CLASS_VARIANTS( Screenwind )

/* Virtual Method Table (VMT) for the class : 'Screen::wind' */
EW_DEFINE_CLASS( Screenwind, CoreGroup, Rectangle, _.VMT, _.VMT, _.VMT, _.VMT, _.VMT, 
                 "Screen::wind" )
  CoreGroup_Draw,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( Screenwind )

/* Embedded Wizard */
