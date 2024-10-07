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
#include "_ResourcesBitmap.h"
#include "Resources.h"

/* Strings for the language 'Default'. */
EW_CONST_STRING_PRAGMA static const unsigned short _StringsDefault0[] =
{
  0xFFFF, 0xFFFF, 0xC557, 0x0054, 0x0068, 0x0065, 0x0020, 0x0070, 0x0072, 0x006F,
  0x0070, 0x0065, 0x0072, 0x0074, 0x0079, 0x0020, 0x0027, 0x0046, 0x0072, 0x0061,
  0x006D, 0x0065, 0x0053, 0x0069, 0x007A, 0x0065, 0x0027, 0x0020, 0x0069, 0x0073,
  0x0020, 0x0052, 0x0045, 0x0041, 0x0044, 0x0020, 0x004F, 0x004E, 0x004C, 0x0059,
  0x002E, 0x0000
};

/* Constant values used in this 'C' module only. */
static const XPoint _Const0000 = { 0, 0 };
static const XStringRes _Const0001 = { _StringsDefault0, 0x0003 };

/* Initializer for the class 'Resources::Bitmap' */
void ResourcesBitmap__Init( ResourcesBitmap _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreResource__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ResourcesBitmap );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ResourcesBitmap );

  /* ... and initialize objects, variables, properties, etc. */
  _this->NoOfFrames = 1;

  /* Call the user defined constructor */
  ResourcesBitmap_Init( _this, aArg );
}

/* Re-Initializer for the class 'Resources::Bitmap' */
void ResourcesBitmap__ReInit( ResourcesBitmap _this )
{
  /* At first re-initialize the super class ... */
  CoreResource__ReInit( &_this->_.Super );
}

/* Finalizer method for the class 'Resources::Bitmap' */
void ResourcesBitmap__Done( ResourcesBitmap _this )
{
  /* Call the user defined destructor of the class */
  ResourcesBitmap_Done( _this );

  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreResource );

  /* Don't forget to deinitialize the super class ... */
  CoreResource__Done( &_this->_.Super );
}

/* 'C' function for method : 'Resources::Bitmap.Done()' */
void ResourcesBitmap_Done( ResourcesBitmap _this )
{
  XHandle handle;

  if ( _this->bitmap == 0 )
    return;

  handle = _this->bitmap;
  EwFreeBitmap((XBitmap*)handle );
  _this->bitmap = 0;
  _this->FrameSize = _Const0000;
  _this->FrameDelay = 0;
  _this->NoOfFrames = 1;
  _this->Animated = 0;
}

/* 'C' function for method : 'Resources::Bitmap.Init()' */
void ResourcesBitmap_Init( ResourcesBitmap _this, XHandle aArg )
{
  XHandle handle;
  XInt32 noOfFrames;
  XPoint frameSize;
  XInt32 frameDelay;

  if ( aArg == 0 )
    return;

  handle = 0;
  noOfFrames = 1;
  frameSize = _Const0000;
  frameDelay = 0;
  {
    /* aArg is a pointer to the memory where the bitmap resource is stored. */
    XBitmap* bmp = EwLoadBitmap((const XBmpRes*)aArg );

    /* After the bitmap has been loaded get the size of the bitmap and store it
       in the following variables. */
    if ( bmp )
    {
      noOfFrames = bmp->NoOfVirtFrames;
      frameSize  = bmp->FrameSize;
      frameDelay = bmp->FrameDelay;
    }

    handle = (XHandle)(void*)bmp;
  }
  _this->bitmap = handle;
  _this->NoOfFrames = noOfFrames;
  _this->FrameSize = frameSize;
  _this->FrameDelay = frameDelay;
  _this->Animated = (XBool)((( _this->bitmap != 0 ) && ( _this->FrameDelay > 0 )) 
  && ( _this->NoOfFrames > 1 ));
}

/* 'C' function for method : 'Resources::Bitmap.OnSetFrameSize()' */
void ResourcesBitmap_OnSetFrameSize( ResourcesBitmap _this, XPoint value )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );
  EW_UNUSED_ARG( value );

  {
    EwThrow( EwLoadString( &_Const0001 ));
    return;
  }
}

/* Wrapper function for the virtual method : 'Resources::Bitmap.OnSetFrameSize()' */
void ResourcesBitmap__OnSetFrameSize( void* _this, XPoint value )
{
  ((ResourcesBitmap)_this)->_.VMT->OnSetFrameSize((ResourcesBitmap)_this, value );
}

/* 'C' function for method : 'Resources::Bitmap.Update()' */
void ResourcesBitmap_Update( ResourcesBitmap _this )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );
}

/* Wrapper function for the virtual method : 'Resources::Bitmap.Update()' */
void ResourcesBitmap__Update( void* _this )
{
  ((ResourcesBitmap)_this)->_.VMT->Update((ResourcesBitmap)_this );
}

/* Variants derived from the class : 'Resources::Bitmap' */
EW_DEFINE_CLASS_VARIANTS( ResourcesBitmap )
EW_END_OF_CLASS_VARIANTS( ResourcesBitmap )

/* Virtual Method Table (VMT) for the class : 'Resources::Bitmap' */
EW_DEFINE_CLASS( ResourcesBitmap, CoreResource, _.VMT, _.VMT, _.VMT, _.VMT, _.VMT, 
                 _.VMT, "Resources::Bitmap" )
  ResourcesBitmap_OnSetFrameSize,
  ResourcesBitmap_Update,
EW_END_OF_CLASS( ResourcesBitmap )

/* Embedded Wizard */
