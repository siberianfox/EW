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
#include "_BrickGameDataClass.h"
#include "BrickGame.h"

/* Initializer for the class 'BrickGame::DataClass' */
void BrickGameDataClass__Init( BrickGameDataClass _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  TemplatesDeviceClass__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( BrickGameDataClass );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( BrickGameDataClass );

  /* ... and initialize objects, variables, properties, etc. */
}

/* Re-Initializer for the class 'BrickGame::DataClass' */
void BrickGameDataClass__ReInit( BrickGameDataClass _this )
{
  /* At first re-initialize the super class ... */
  TemplatesDeviceClass__ReInit( &_this->_.Super );
}

/* Finalizer method for the class 'BrickGame::DataClass' */
void BrickGameDataClass__Done( BrickGameDataClass _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( TemplatesDeviceClass );

  /* Don't forget to deinitialize the super class ... */
  TemplatesDeviceClass__Done( &_this->_.Super );
}

/* Variants derived from the class : 'BrickGame::DataClass' */
EW_DEFINE_CLASS_VARIANTS( BrickGameDataClass )
EW_END_OF_CLASS_VARIANTS( BrickGameDataClass )

/* Virtual Method Table (VMT) for the class : 'BrickGame::DataClass' */
EW_DEFINE_CLASS( BrickGameDataClass, TemplatesDeviceClass, _.VMT, _.VMT, _.VMT, 
                 _.VMT, _.VMT, _.VMT, "BrickGame::DataClass" )
EW_END_OF_CLASS( BrickGameDataClass )

/* User defined auto object: 'BrickGame::Data' */
EW_DEFINE_AUTOOBJECT( BrickGameData, BrickGameDataClass )

/* Initializer for the auto object 'BrickGame::Data' */
void BrickGameData__Init( BrickGameDataClass _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'BrickGame::Data' */
EW_DEFINE_AUTOOBJECT_VARIANTS( BrickGameData )
EW_END_OF_AUTOOBJECT_VARIANTS( BrickGameData )

/* Embedded Wizard */
