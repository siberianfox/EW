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

#ifndef Views_H
#define Views_H

#ifdef __cplusplus
  extern "C"
  {
#endif

#include "ewrte.h"
#if ( EW_RTE_VERSION >> 16 ) != 12
  #error Wrong version of Embedded Wizard Runtime Environment.
#endif

#include "ewgfx.h"
#if ( EW_GFX_VERSION >> 16 ) != 12
  #error Wrong version of Embedded Wizard Graphics Engine.
#endif

#include "_ViewsImage.h"
#include "_ViewsRectangle.h"

/* The definition Views::ImageAlignment determines the set of constraints to apply 
   on a bitmap if its size differ from the size of the view where the bitmap is 
   shown. Depending on the active constraints a bitmap can be aligned or stretched 
   within the view's area. */
typedef XSet ViewsImageAlignment;

#define ViewsImageAlignmentAlignHorzLeft                    0x00000001
#define ViewsImageAlignmentAlignHorzCenter                  0x00000002
#define ViewsImageAlignmentAlignHorzRight                   0x00000004
#define ViewsImageAlignmentAlignVertTop                     0x00000008
#define ViewsImageAlignmentAlignVertCenter                  0x00000010
#define ViewsImageAlignmentAlignVertBottom                  0x00000020
#define ViewsImageAlignmentScaleToFill                      0x00000040
#define ViewsImageAlignmentScaleToFit                       0x00000080
#define ViewsImageAlignmentStretchToFill                    0x00000100

#ifdef __cplusplus
  }
#endif

#endif /* Views_H */

/* Embedded Wizard */
