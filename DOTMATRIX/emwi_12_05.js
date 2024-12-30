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

// When loading this file create the global and unique prototype of the Embedded
// Wizard Runtime Environment object. It serves as the 'base class' for all GUI
// applications. Each GUI application inherites the functionality implemented in
// this file.
EmWi_12_05 = (function()
{
  var emwi = {};

  // ---------------------------------------------------------------------------
  // The function SetLanguage() changes the selected language ID to aLanguage.
  // To select the default language pass 0 (zero) in the argument to this 
  // function.
  //
  // After the language has been selected, the Resource Manager tries to find
  // resource which fit the selected language.  
  // ---------------------------------------------------------------------------
  emwi._SetLanguage = function( aLanguage )
  {
    // Any chages?
    if ( this._Language === aLanguage )
      return aLanguage;

    // Remember the new language and update all objects
    this._Language = aLanguage;

    var obj = this._Objects;
    
    // Force all existing objects to reload resources and constants
    while ( obj )
    {
      obj._ReInit();
      obj = obj._next;
    }

    // ... also all global object
    this._ReInit();

    return aLanguage;
  };
  
  // ---------------------------------------------------------------------------
  // The function SetStyles() changes the set of active styles to the new value
  // aStyles.
  // ---------------------------------------------------------------------------
  emwi._SetStyles = function( aStyles )
  {
    this._Styles = aStyles;
    return aStyles;
  };

  // ---------------------------------------------------------------------------
  // The function GetVariantOf() will be called to determinate a value of a
  // multilingual/multivariant constant depending on the currently selected
  // language and the styles set.
  //
  // If the currently selected language could not be found in the multilingual
  // constant, the function returns the value corresponding to the default 
  // language (LangId == 0). In case of a multivariant constant, the function
  // evaluates the variants in order to find one, which fits the current styles.
  // ---------------------------------------------------------------------------
  emwi._GetVariantOf = function( aConstant )
  {
    // Does the constant exist in several multi-variant representations? 
    // Determine the one which is currently valid.
    if ( aConstant._variants )
      aConstant = aConstant._variants();

    // Verify whether the constant provide a value corresponding to the current
    // language.
    var value = aConstant[ this._Language ];

    // ... if not -> use the value of the default language
    if ( value !== undefined )
      return value;
    else
      return aConstant[0];
  };
  
  // ---------------------------------------------------------------------------
  // The function GetAutoObject() will be called from the automatic generated
  // code in order to access an auto object identified by aAutoObject. The
  // function verifies whether the required object is already instantiated and 
  // if it's true, the existing instance is returned immediately. If no instance
  // of the desired auto object could be found, GetAutoObject() prepares a new
  // object of the associated class and initializes it properly. The created
  // object will remain in memory as long as the object is in use. Objects, 
  // which are not in use any more are automatically reclaimed by the Garbage
  // Collector.
  // ---------------------------------------------------------------------------
  emwi._GetAutoObject = function( aAutoObject )
  {
    // Does the auto object exist in several multi-variant representations? 
    // Determine the one which is currently valid.
    if ( aAutoObject._variants )
      aAutoObject = aAutoObject._variants();
    
    // If there is still no auto object instance available - create the 
    // instance now
    if ( !aAutoObject._this )
      aAutoObject._Init.call( aAutoObject._this = {});
    
    return aAutoObject._this;
  };
  
  // ---------------------------------------------------------------------------
  // The function GetResource() will be called from the automatic generated
  // code in order to load a resource. GetResource() verifies whether the
  // required resource is already loaded and if it's true, the function returns
  // the existing resource object. If the requested resource is not loaded yet,
  // GetResource() creates a new object of the corresponding resource class and
  // initializes it in order to load the resource. The created object remains in
  // memory as long as the object is in use. Objects, which are not in use any
  // more are automatically reclaimed by the Garbage Collector.
  // ---------------------------------------------------------------------------
  emwi._GetResource = function( aResource )
  {
    // Does the resource exist in several multi-variant representations? 
    // Determine the one which is currently valid.
    if ( aResource._variants )
      aResource = aResource._variants();
    
    // Verify whether the resource provides attributes corresponding to the
    // current language.
    var variant = aResource[ this._Language ];

    // ... if not -> use the value of the default language
    if ( variant === undefined )
      variant = aResource[0];

    // If there is still no resource object available -> create the object now
    if ( !variant._this )
      aResource._class()._Init.call( variant._this = {}, variant );
    
    return variant._this;
  };
  
  // ---------------------------------------------------------------------------
  // The function NewObject() will be called from the automatic generated code
  // in order to create a new instance of a Chora class. The class is specified
  // in the parameter aClass. The last parameter aArg contains a value to pass
  // as argument in the _Init() method of the created object.
  // All created objects are managed in an internal list, so Garbage Collector
  // can evaluate all existing objects and discard those which are not in use.
  // ---------------------------------------------------------------------------
  emwi._NewObject = function( aClass, aArg )
  {
    var tmp;

    if ( !aClass )
      throw "No class specified to create the object";

    // Instantiate the object
    aClass._Init.call( tmp = {}, aArg );
    
    // Remember the object so it can be released later. All objects build a
    // chain of objects.
    tmp._next     = this._Objects;
    this._Objects = tmp;

    return tmp;
  };
  
  // ---------------------------------------------------------------------------
  // The function LockObject() adds the given object aObject to the global root
  // set. Objects stored in the root set as well as objects referred indirectly
  // from the root set objects are protected from the garbage colection.
  // ---------------------------------------------------------------------------
  emwi._LockObject = function( aObject )
  {
    if ( aObject )
      this._RootSet.push( aObject );
  };
  
  // ---------------------------------------------------------------------------
  // The function UnlockObject() removes the object aObject from the root set.
  // If there is no other valid reference to the object, the garbage collection
  // will discard it when it runs the next time.
  // ---------------------------------------------------------------------------
  emwi._UnlockObject = function( aObject )
  {
    var rootSet = this._RootSet;
    var tmp;

    if ( !aObject )
      return;

    // Search the root set for the object to unlock
    for ( tmp = rootSet.length - 1; tmp >= 0; tmp-- )
      if ( rootSet[tmp] === aObject )
        break;

    // If it could be found -> remove the object form the list
    if ( tmp >= 0 )
      this._RootSet.splice( tmp, 1 );
  };
  
  // ---------------------------------------------------------------------------
  // The function SetAppRootObject() registers the given object as the so called
  // application root object. It is the first created object/ descending from
  // the class Core::Root.
  // ---------------------------------------------------------------------------
  emwi._SetAppRootObject = function( aObject )
  {
    this._AppRootObject = aObject;
  };

  // ---------------------------------------------------------------------------
  // The function GetAppRootObject() returns a pointer to the root object of 
  // the application. This is the first created object of a class descending
  // from Core::Root.
  // ---------------------------------------------------------------------------
  emwi._GetAppRootObject = function()
  {
    return this._AppRootObject;
  };

  // ---------------------------------------------------------------------------
  // The function MarkObjects() is used during the garbage collection when an
  // array of objects is marked. All objects within this array are signed as
  // reachable thus.
  // ---------------------------------------------------------------------------
  emwi._MarkObjects = function( aArray, aCycle )
  {
    var tmp;

    // Evaluate all entries within the array
    for ( var i in aArray )
      if ( !isNaN(i) && ( tmp = aArray[i]) && ( tmp._cycle !== aCycle ))
        tmp._Mark( tmp._cycle = aCycle );
  };

  // ---------------------------------------------------------------------------
  // The function MarkSlots() is used during the garbage collection when an
  // array of slots is marked. All objects within this array are signed as
  // reachable thus.
  // ---------------------------------------------------------------------------
  emwi._MarkSlots = function( aArray, aCycle )
  {
    var tmp;

    // Evaluate all entries within the array 
    for ( var i in aArray )
      if ( !isNaN(i) && ( tmp = aArray[i]) && ( tmp = tmp[0]) &&
                        ( tmp._cycle !== aCycle ))
        tmp._Mark( tmp._cycle = aCycle );
  };
  
  // ---------------------------------------------------------------------------
  // The function MarkReferences() is used during the garbage collection when an
  // array of property references is marked. All objects within this array are
  // signed as reachable thus.
  // ---------------------------------------------------------------------------
  emwi._MarkReferences = function( aArray, aCycle )
  {
    var tmp;

    // Evaluate all entries within the array 
    for ( var i in aArray )
      if ( !isNaN(i) && ( tmp = aArray[i]) && ( tmp = tmp[0]) &&
                        ( tmp._cycle !== aCycle ))
        tmp._Mark( tmp._cycle = aCycle );
  };
  
  // ---------------------------------------------------------------------------
  // The function ReclaimMemory() implements the Embedded Wizard's own Garbage
  // Collector algorithm. Unlike JavaScript, Chora programming language allows
  // an object to maintain 'weak' references to other objects. Such references
  // are ignored during the garbage collection so the referred object may be
  // discarded. Our Garbage Collector only extends the existing JavaScript GC.
  // The entire process of memory management is still controlled by JavaScript.
  // ---------------------------------------------------------------------------
  emwi._ReclaimMemory = function()
  {
    var cycle = ( this._Cycle += 1 );
    var old   = this._NoOfObjects;
    var tmp1  = null;
    var tmp2  = null;
    var tmp   = null;

    // This function causes all slots registered within the list aList to mark 
    // the sender objects to ensure that they are existing when signals are 
    // delivered. This, however, occurs only when the target object is marked
    // and the sender not. In other words, if the target object is unused,
    // the sender and the signal can be removed. This modification is new to
    // EmWi 8.20. The function returns != 0 if at least one object has been
    // marked. This may cause preceding mark operations to be repeated again.
    function MarkSignals( aList, aCycle )
    {
      var list   = aList;
      var marked = 0;
      var tmp;

      // Evaluate all pending signals
      for ( ; list; list = list._next )
      {
        if (( tmp = list._sender ) && ( tmp._cycle !== aCycle ) &&
            ( list[0]._cycle === aCycle ))
        {
          tmp._Mark( tmp._cycle = aCycle );

          // The mark operation may cause the target objects of the already
          // verified signals being marked. Therefore start the opertion
          // from the begining
          list = aList;
          marked++;
        }
      }

      return marked;
    }

    // First phase -> Detect and mark used objects. (Ignore 'weak' references!)
    
    // Mark objects belonging to the 'root set'
    for ( tmp1 = this._RootSet.length - 1; tmp1 >= 0; tmp1-- )
      if (( tmp2 = this._RootSet[tmp1]) && ( tmp2._cycle !== cycle ))
        tmp2._Mark( tmp2._cycle = cycle );
    
    // Starting with EmWi 8.20 the signals waiting for delivery are not protected
    // from being discarded. If the signal target object is unused, the object and
    // the signal can be removed. However, if the object is used and there is a 
    // sender object associated with the signal, the sender should survive the
    // garbage collection in order to be delivered to the target object. Through
    // interconnections between such sender objects and other objects, the operation
    // may cause other (already evaluated) target objects being marked. Therefore
    // repeat the operation if one sender object has been marked.
    MarkSignals( this._PostSignals, cycle );
    while (( MarkSignals( this._IdleSignals, cycle ) > 0 ) && 
           ( MarkSignals( this._PostSignals, cycle ) > 0 ))
      ;

    // Second phase -> Release objects not marked in the previous phase

    // Any signals referring to unused objects?
    while (( tmp1 = this._PostSignals ) && (( tmp1[0]._cycle !== cycle ) ||
          (( tmp = tmp1._sender ) && ( tmp._cycle !== cycle ))))
      this._PostSignals = tmp1._next;

    // Any signals referring to unused objects?
    while (( tmp2 = this._IdleSignals ) && (( tmp2[0]._cycle !== cycle ) ||
          (( tmp = tmp2._sender ) && ( tmp._cycle !== cycle ))))
      this._IdleSignals = tmp2._next;

    // Any signals referring to unused objects?
    while ( tmp1 && ( tmp = tmp1._next ))
      if (( tmp._sender && ( tmp._sender._cycle !== cycle )) ||
          ( tmp[0]._cycle !== cycle ))
        tmp1._next = tmp._next;
      else
        tmp1 = tmp;

    // Any signals referring to unused objects?
    while ( tmp2 && ( tmp = tmp2._next ))
      if (( tmp._sender && ( tmp._sender._cycle !== cycle )) ||
          ( tmp[0]._cycle !== cycle ))
        tmp2._next = tmp._next;
      else
        tmp2 = tmp;

    // Release all dynamically created objects which are not in use anymore.
    // This loop is optimized to handle with objects lying at the the beginning
    // of the objects list.
    while (( tmp1 = this._Objects ) && ( tmp1._cycle !== cycle ))
    {
      this._Objects = tmp1._next;
      if ( tmp1 === this._AppRootObject )
        this._AppRootObject = null;
      tmp1._Done();
    }
   
    // Continue releasing other objects within the list.
    if ( tmp1 )
      while ( tmp2 = tmp1._next )
      {
        if ( tmp2._cycle !== cycle )
        {
          tmp1._next = tmp2._next;
          if ( tmp2 === this._AppRootObject )
            this._AppRootObject = null;
          tmp2._Done();
        }
        else
          tmp1 = tmp2;
      }

    // Finally release all unused resources and autoobject. This function is
    // generated by the EmWi Code Generator 
    this._Reclaim( cycle );
    
    // Third phase -> Disolve all weak references

    // Disolve all global observer relations with reclaimed objects. First run
    // handles items lying at the beginning of the global observer list only.
    while (( tmp1 = this._Observers ) && ( tmp1[0]._cycle !== cycle ))
      this._Observers = tmp1._next;

    // Continue disolving the observer relations for remaining entries.
    if ( tmp1 )
      while ( tmp2 = tmp1._next )
        if ( tmp2[0]._cycle !== cycle )
          tmp1._next = tmp2._next;
        else
          tmp1 = tmp2;

    // Now evaluate a list of all currently existing observer 'target' objects.
    // Detect objects reclaimed in this garbage collection cycle and remove the
    // objects from the list. First run handles items lying at the beginning of
    // this global list only.     
    while (( tmp1 = this._ObserverTargets ) && ( tmp1._cycle !== cycle ))
      this._ObserverTargets = tmp1._nextObserverTarget;

    // Continue with the remaining observer target objects. Objects those are
    // reclaimed in this garbage collection cycle are simply removed from the
    // list. Objects being still alive need their observer lists to be evaluated
    // in order to detect and remove relations to not other reclaimed objects.
    while ( tmp1 )
    {
      var tmp3;
      
      // Disolve observer relations to reclaimed objects. First run handles
      // items lying at the beginning of the object's observer list
      while (( tmp2 = tmp1._observers ) && ( tmp2[0]._cycle !== cycle ))
        tmp1._observers = tmp2._next;

      // Continue disolving the observer relations for remaining entries
      if ( tmp2 )
        while ( tmp3 = tmp2._next )
          if ( tmp3[0]._cycle !== cycle )
            tmp2._next = tmp3._next;
          else
            tmp2 = tmp3;

      // Remove reclaimed objects from the observer 'target' list
      while (( tmp2 = tmp1._nextObserverTarget ) && ( tmp2._cycle !== cycle ))
        tmp1._nextObserverTarget = tmp2._nextObserverTarget;

      tmp1 = tmp2;
    }

    if ( this._Debug )
      console.log( "Living objects: " + this._NoOfObjects + "(" + 
                   ( this._NoOfObjects - old ) + ")" );
  };

  // ---------------------------------------------------------------------------
  // The function PostSignal() will be called in order to store a signal for a
  // delayed delivery. The affected slot aSlot will receive the signal as soon
  // as possible, but always before the next screen update is performed.
  // ---------------------------------------------------------------------------
  emwi._PostSignal = function( aSlot, aSender )
  {
    // Don't signal 'null' slots
    if ( !aSlot )
      return;

    var list = this._PostSignals;
    var obj  = aSlot[0];
    var proc = aSlot[1];
    var tmp  = null;
    
    // The signal was recently recorded. Nothing to do with it now. 
    if ( list && ( list[0] === obj ) && ( list[1] === proc ))
    {
      // Just update the 'sender' parameter -> but only for signals not
      // already processed
      if ( !list._processed )
        list._sender = aSender;

      return;
    }

    // Step1: Try to find the already registered signal
    if ( list )
      while (( tmp = list._next ) && (( tmp[0] !== obj ) || ( tmp[1] !== proc )))
        list = tmp;

    // If the found signal is already delivered, ignore the new signal.
    // Otherwise endless processing will be possible
    if ( tmp && tmp._processed )
      return;
    
    // Remove the found signal from the list (the signal is moved to the list's
    // beginning later)
    if ( tmp )
    {
      list._next = tmp._next;
      tmp._next  = null;
    }

    // Store the signal at the beginning of the list
    aSlot._next       = this._PostSignals;
    aSlot._sender     = aSender;
    this._PostSignals = aSlot;
  };
  
  // ---------------------------------------------------------------------------
  // The function IdleSignal() will be called in order to store a signal for a
  // delayed delivery. The affected slot aSlot will receive the signal as soon
  // as possible, but always after the next screen update is performed.
  // ---------------------------------------------------------------------------
  emwi._IdleSignal = function( aSlot, aSender )
  {
    // Don't signal 'null' slots
    if ( !aSlot )
      return;

    var list = this._IdleSignals;
    var obj  = aSlot[0];
    var proc = aSlot[1];
    var tmp;
    
    // The signal was recently recorded. Nothing to do with it now. 
    if ( list && ( list[0] === obj ) && ( list[1] === proc ))
    {
      // Just update the 'sender' parameter -> but only for signals not
      // already processed
      if ( !list._processed )
        list._sender = aSender;

      return;
    }

    // Step1: Try to find the already registered signal
    if ( list )
      while (( tmp = list._next ) && (( tmp[0] !== obj ) || ( tmp[1] !== proc )))
        list = tmp;

    // Remove the found signal from the list (the signal is moved to the list's
    // beginning later)
    if ( tmp )
    {
      list._next = tmp._next;
      tmp._next  = null;
    }

    // Store the signal at the beginning of the list
    aSlot._next       = this._IdleSignals;
    aSlot._sender     = aSender;
    this._IdleSignals = aSlot;
  };
  
  // ---------------------------------------------------------------------------
  // The function ProcessSignals() will be called in order to deliver the 
  // signals, which are pending at the moment. The function returns a value, 
  // which indicates whether signals have been delivered or not. If no signals
  // were pending, the function returns false. In the case, at least one signal
  // has been delivered, true is returned.
  // ---------------------------------------------------------------------------
  emwi._ProcessSignals = function()
  {
    var progress = [];

    // No signals to process
    if ( !this._PostSignals )
    {
      // For the next time swap the signal lists
      if ( this._IdleSignals )
      {
        this._PostSignals = this._IdleSignals;
        this._IdleSignals = null;
      }
      return false;
    }
    
    // Repeat until all signals have been processed
    for ( ;; )
    {
      var oldList = this._PostSignals;
      var newList = null;
      var tmp;
      
      // Reorder all registered signals, so the oldest posted signal is the 
      // first one in the list
      while ( oldList && ( oldList !== progress ))
      {
        tmp       = oldList;
        oldList   = oldList._next;
        tmp._next = newList;
        newList   = tmp;
      }

      // Addresses the begining of the list with signals to deliver
      progress._next    = newList;
      this._PostSignals = progress;

      // Process all signals in their reverse order
      while ( tmp = progress._next )
      {
        tmp._processed = true;
        tmp[1].call( tmp[0], tmp._sender );

        // Continue with the next signal      
        progress._next = tmp._next;
      }
      
      // No other signals posted in the meantime 
      if ( this._PostSignals === progress )
      {
        this._PostSignals = null;
        break;
      }
    }
    
    // Next time, when ProcessSignals() is called, the currently pending 'idle' 
    // signals will be delivered.
    this._PostSignals = this._IdleSignals;
    this._IdleSignals = null;
    
    // Signals were processed
    return true;
  };
  
  // ---------------------------------------------------------------------------
  // The function AttachRefObserver() implements the statement 'attachobserver'
  // of the Chora language. The function registers a slot method aSlot with the 
  // property referred by aRef. As soon the property has been triggered by the 
  // function NotifyRefObservers(), all registered slot methods will receive a
  // signal automatically.
  //
  // In order to deregister an observer, the function DetachRefObserver() should
  // be used. Please note, that the Garbage Collector will automatically detach
  // an observer from the property, if the object, the property belongs to or
  // the observer itself is about to be disposed.
  // ---------------------------------------------------------------------------
  emwi._AttachRefObserver = function( aSlot, aRef, aId )
  {
    var target;

    // No slot or target reference to establish an observer relation
    if ( !aSlot || !aRef || !( target = aRef[0]))
      return;

    var list  = target._observers;
    var slot0 = aSlot[0];
    var slot1 = aSlot[1];
    var ref1  = aRef [1];

    // Test whether there is already a similar observer relation registered.
    while ( list && (( list[0] !== slot0 ) || ( list[1] !== slot1 ) ||
                     ( list[2] !== aId   ) || ( list[3] !== ref1 )))
      list = list._next;

    // the observer relation already exists 
    if ( list )
      return;

    // Register a new observer relation in the observer list of the target 
    // object
    list              = [ slot0, slot1, aId, ref1 ];
    list._next        = target._observers;
    target._observers = list;

    // Maintain a list of all objects currently used as observer target. This
    // is essential when GC runs and observer relations need to be disolved
    if ( !target._isObserverTarget )
    {
      target._nextObserverTarget = this._ObserverTargets;
      target._isObserverTarget   = true;
      this._ObserverTargets      = target;
    }
  };
  
  // ---------------------------------------------------------------------------
  // The function AttachObjObserver() implements the statement 'attachobserver'
  // of the Chora language. The function registers a slot method aSlot with the 
  // object aObject. As soon the object has been triggered by the function
  // NotifyObjObservers(), all registered slot methods will receive a signal
  // automatically.
  //
  // In order to deregister an observer, the function DetachObjObserver() should
  // be used. Please note, that the Garbage Collector will automatically detach
  // an observer from the object, if the affected object or the observer itself
  // is about to be disposed.
  // ---------------------------------------------------------------------------
  emwi._AttachObjObserver = function( aSlot, aObject, aId )
  {
    // No slot or target object to establish an observer relation
    if ( !aSlot || !aObject )
      return;

    var list  = aObject._observers;
    var slot0 = aSlot[0];
    var slot1 = aSlot[1];

    // Test whether there is already a similar observer relation registered.
    while ( list && (( list[0] !== slot0 ) || ( list[1] !== slot1 ) ||
                     ( list[2] !== aId   ) ||   list[3]))
      list = list._next;

    // the observer relation already exists 
    if ( list )
      return;

    // Register a new observer relation in the observer list of the target 
    // object
    list               = [ slot0, slot1, aId, null ];
    list._next         = aObject._observers;
    aObject._observers = list;

    // Maintain a list of all objects currently used as observer target. This
    // is essential when GC runs and observer relations need to be disolved
    if ( !aObject._isObserverTarget )
    {
      aObject._nextObserverTarget = this._ObserverTargets;
      aObject._isObserverTarget   = true;
      this._ObserverTargets       = aObject;
    }
  };
  
  // ---------------------------------------------------------------------------
  // The function AttachObserver() implements the statement 'attachobserver' of
  // the Chora language. The function registers a slot method aSlot with the
  // global notifier. As soon the the global notifier has been triggered by the
  // function NotifyObservers(), all registered slot methods will receive a 
  // signal automatically.
  //
  // In order to deregister an observer, the function DetachObserver() should
  // be used. Please note, that the Garbage Collector will automatically detach
  // an observer from the notifier, if the affected observer is about to be 
  // disposed.
  // ---------------------------------------------------------------------------
  emwi._AttachObserver = function( aSlot, aId )
  {
    // No slot to establish an observer relation
    if ( !aSlot )
      return;

    var list  = this._Observers;
    var slot0 = aSlot[0];
    var slot1 = aSlot[1];

    // Test whether there is already a similar observer relation registered.
    while ( list && (( list[0] !== slot0 ) || ( list[1] !== slot1 ) ||
                     ( list[2] !== aId )))
      list = list._next;

    // the observer relation already exists 
    if ( list )
      return;

    // Register a new observer relation in the observer list of the application 
    list            = [ slot0, slot1, aId ];
    list._next      = this._Observers;
    this._Observers = list;
  };
  
  // ---------------------------------------------------------------------------
  // The function DetachRefObserver() implements the statement 'detachobserver'
  // of the Chora language. The function deregisters a slot method aSlot from 
  // the property referred by aRef. This function is the counterpart of the
  // function AttachRefObserver().
  //
  // Please note, that the Garbage Collector will automatically detach an
  // observer from the property, if the object, the property belongs to or the 
  // observer itself is about to be disposed.
  // ---------------------------------------------------------------------------
  emwi._DetachRefObserver = function( aSlot, aRef, aId )
  {
    var target;
    var list;

    // No slot or target reference to disolve an observer relation
    if ( !aSlot || !aRef || !( target = aRef[0]) || !( list = target._observers ))
      return;

    var slot0 = aSlot[0];
    var slot1 = aSlot[1];
    var ref1  = aRef [1];
    var item;
    
    // The affected relation is stored directly at the beginning of the list.
    // Special handling required here.
    if (( list[0] === slot0 ) && ( list[1] === slot1 ) && ( list[2] === aId ) &&
        ( list[3] === ref1  ))
    {
      target._observers = list._next;
      list._next        = null;
      return;
    }

    // Starting with the second list entry - search for the observer relation 
    // to disolve
    while (( item = list._next ) && (( item[0] !== slot0 ) ||
           ( item[1] !== slot1  ) ||  ( item[2] !== aId   ) ||
           ( item[3] !== ref1 )))
      list = item;

    // The observer relation not found 
    if ( !item )
      return;

    // Remove the entry from the list
    list._next = item._next;
    item._next = null;
  };
  
  // ---------------------------------------------------------------------------
  // The function DetachObjObserver() implements the statement 'detachobserver'
  // of the Chora language. The function deregisters a slot method aSlot from 
  // the object aObject. This function is the counterpart of AttachObjObserver().
  //
  // Please note, that the Garbage Collector will automatically detach an 
  // observer from the object, if the affected object or the observer itself is 
  // about to be disposed.
  // ---------------------------------------------------------------------------
  emwi._DetachObjObserver = function( aSlot, aObject, aId )
  {
    var list;

    // No slot or target reference to disolve an observer relation
    if ( !aSlot || !aObject || !( list = aObject._observers ))
      return;

    var slot0 = aSlot[0];
    var slot1 = aSlot[1];
    var item;
    
    // The affected relation is stored directly at the beginning of the list.
    // Special handling required here.
    if (( list[0] === slot0 ) && ( list[1] === slot1 ) && ( list[2] === aId ) &&
          !list[3])
    {
      aObject._observers = list._next;
      list._next         = null;
      return;
    }

    // Starting with the second list entry - search for the observer relation 
    // to disolve
    while (( item = list._next ) && (( item[0] !== slot0 ) ||
           ( item[1] !== slot1 ) ||  ( item[2] !== aId   ) ||
             item[3]))
      list = item;

    // The observer relation not found 
    if ( !item )
      return;

    // Remove the entry from the list
    list._next = item._next;
    item._next = null;
  };
  
  // ---------------------------------------------------------------------------
  // The function DetachObserver() implements the statement 'detachobserver' of
  // the Chora language. The function deregisters a slot method aSlot from the
  // global notifier. This function is the counterpart of AttachObserver().
  //
  // Please note, that the Garbage Collector will automatically detach an 
  // observer from the notifier, if the affected observer itself is about to be 
  // disposed.
  // ---------------------------------------------------------------------------
  emwi._DetachObserver = function( aSlot, aId )
  {
    var list;

    // No slot or target reference to disolve an observer relation
    if ( !aSlot || !( list = this._Observers ))
      return;

    var slot0 = aSlot[0];
    var slot1 = aSlot[1];
    var item;
    
    // The affected relation is stored directly at the beginning of the list.
    // Special handling required here.
    if (( list[0] === slot0 ) && ( list[1] === slot1 ) && ( list[2] === aId ))
    {
      this._Observers = list._next;
      list._next      = null;
      return;
    }

    // Starting with the second list entry - search for the observer relation 
    // to disolve
    while (( item = list._next ) && (( item[0] !== slot0 ) ||
           ( item[1] !== slot1 ) ||  ( item[2] !== aId   )))
      list = item;

    // The observer relation not found 
    if ( !item )
      return;

    // Remove the entry from the list
    list._next = item._next;
    item._next = null;
  };
  
  // ---------------------------------------------------------------------------
  // The function NotifyRefObservers() implements the Chora statement 
  // 'notifyobservers'. The function posts signals for each observer, which has
  // been previously registered with the property referred by aRef.
  //
  // In order to register an observer the function AttachRefObserver() should
  // be used.
  // ---------------------------------------------------------------------------
  emwi._NotifyRefObservers = function( aRef, aId )
  {
    var target;
    var list;

    // No observer specified to notify
    if ( !aRef || !( target = aRef[0]) || !( list = target._observers ))
      return;

    if ( this._Debug )
      console.log( "NotifyRefObserver()" );

    var ref1 = aRef[1];

    // Look for all affected observer relations and notify them
    while ( list )
    {
      // If found - remember the attached observer slot for a signal
      if (( list[2] === aId ) && ( list[3] === ref1 ))
        this._PostSignal( list.slice( 0, 2 ), null );

      // Continue with the next entry
      list = list._next;
    }
  };
  
  // ---------------------------------------------------------------------------
  // The function NotifyObjObservers() implements the Chora statement 
  // 'notifyobservers'. The function posts signals for each observer, which has
  // been previously registered with the given object aObject.
  //
  // In order to register an observer the function AttachObjObserver() should
  // be used.
  // ---------------------------------------------------------------------------
  emwi._NotifyObjObservers = function( aObject, aId )
  {
    var list;

    // No observer specified to notify
    if ( !aObject || !( list = aObject._observers ))
      return;

    if ( this._Debug )
      console.log( "NotifyObjObserver()" );

    // Look for all affected observer relations and notify them
    while ( list )
    {
      // If found - remember the attached observer slot for a signal
      if (( list[2] === aId ) && !list[3])
        this._PostSignal( list.slice( 0, 2 ), null );

      // Continue with the next entry
      list = list._next;
    }
  };
  
  // ---------------------------------------------------------------------------
  // The function NotifyObservers() implements the statement 'notifyobservers'
  // of the Chora language. The function posts signals for each observer, which 
  // has been previously registered with the global notifier.
  //
  // In order to register an observer the function AttachObserver() should be 
  // used.
  // ---------------------------------------------------------------------------
  emwi._NotifyObservers = function( aId )
  {
    var list;

    // No observer specified to notify
    if ( !( list = this._Observers ))
      return;

    if ( this._Debug )
      console.log( "NotifyObserver()" );

    // Look for all affected observer relations and notify them
    while ( list )
    {
      // If found - remember the attached observer slot for a signal
      if ( list[2] === aId )
        this._PostSignal( list.slice( 0, 2 ), null );

      // Continue with the next entry
      list = list._next;
    }
  };
  
  // This function implements the 'StartTimer' method of a timer object. When 
  // called at the runtime, the timer object registers itself as receiver of
  // timeout or interval events proceding from the Browser. The both paramaters
  // specify the delays in milliseconds till the first (aBegin) and following
  // timer expirations.
  function StartTimer( aBegin, aPeriod )
  {
    var timer = this;

    // The caller expects the timer to expire after aBegin milliseconds. 
    // Afterwards the timer should continue expiring every aPeriod milliseconds.
    if (( aBegin > 0 ) && ( aPeriod > 0 ))
      this.TimeoutId = window.setTimeout( function(){ OnTimer1( timer, aPeriod ); }, 
                                          aBegin );

    // The caller expects the timer to expire after aBegin milliseconds. 
    // Afterwards the timer is halted.
    else if ( aBegin > 0 )
      this.TimeoutId = window.setTimeout( function(){ OnTimer2( timer ); }, 
                                          aBegin );

    // The caller expects the timer to expire every aPeriod milliseconds.
    else if ( aPeriod > 0 )
      this.IntervalId = window.setInterval( function(){ OnTimer3( timer ); }, 
                                          aPeriod );
  }

  // This function implements the 'Destroy' method of a timer object. When
  // called at the runtime, the associated Browser timer is halted and the timer
  // object itself is released.
  function DestroyTimer()
  {
    // The timer was setup by setInterval() call
    if ( this.IntervalId )
      window.clearInterval( this.IntervalId );
    this.IntervalId = 0;

    // The timer was setup by seTimeout() call
    if ( this.TimeoutId )
      window.clearTimeout( this.TimeoutId );
    this.TimeoutId = 0;
    
    // One object less
    this.Application._NoOfObjects--;

    // Release all references from the timer object to other objects
    this.Object      = null;
    this.Method      = null;
    this.Application = null;
  }
  
  // This function implements the 'Reset' method of a timer object. When called
  // at the runtime, the associated Browser timer is halted.
  function ResetTimer()
  {
    // The timer was setup by setInterval() call
    if ( this.IntervalId )
      window.clearInterval( this.IntervalId );
    this.IntervalId = 0;

    // The timer was setup by seTimeout() call
    if ( this.TimeoutId )
      window.clearTimeout( this.TimeoutId );
    this.TimeoutId = 0;
  }
  
  // This function is called by the Browser when the timer expires. The function
  // passes the invocation to the GUI application. First expiration of a periodic
  // timer.
  function OnTimer1( aTimer, aPeriod )
  {
    // After the first expiration (after the 'Begin' span) start a periodic.
    aTimer.TimeOutId  = null;
    aTimer.IntervalId = window.setInterval( function(){ OnTimer3( aTimer ); }, 
                                            aPeriod );
    try
    {
      aTimer.Method.call( aTimer.Object );
      aTimer.Application._RequestUpdate();
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" );
    }
  }
  
  // This function is called by the Browser when the timer expires. The function
  // passes the invocation to the GUI application. Single-shot timer case.
  function OnTimer2( aTimer )
  {
    try
    {
      aTimer.TimeOutId  = null;
      aTimer.Method.call( aTimer.Object );
      aTimer.Application._RequestUpdate();
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" );
    }
  }
  
  // This function is called by the Browser when the timer expires. The function
  // passes the invocation to the GUI application. Periodic timer case.
  function OnTimer3( aTimer )
  {
    try
    {
      aTimer.Method.call( aTimer.Object );
      aTimer.Application._RequestUpdate();
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" );
    }
  }
  
  // ---------------------------------------------------------------------------
  // The function CreateTimer() initializes an new timer. The timer is still not
  // initialized to expire. When expired, the timer will call the given method
  // in context of the given object. 
  // ---------------------------------------------------------------------------
  emwi._CreateTimer = function( aObject, aMethod )
  {
    var timer = { DestroyTimer : DestroyTimer,
                  ResetTimer   : ResetTimer,
                  StartTimer   : StartTimer,
                  Application  : this,
                  Object       : aObject,
                  Method       : aMethod,
                  IntervalId   : 0,
                  TimeoutId    : 0 };
    

    // For debugging purpose -> one object more
    this._NoOfObjects++;
    return timer;    
  };
  
  // This function implements the 'Get' method of an array. The method evaluates
  // the given array index (evtl. multidimensional) and determines a flat index
  // within the flat array. With the known index the method retrives the value
  // stored in the array. If there is no value available at the given position,
  // the default value specified for the array is returned.
  function ArrayGetter()
  {
    var dims     = this.Dimensions;
    var noOfDims = dims.length;
    var flatInx  = 0;
    
    // Wrong number of dimensions?
    if ( arguments.length !== noOfDims )
      return this.DefaultValue;

    // Convert the multi-dimensional index into a flat index.
    for ( var i = 0; i < noOfDims; i++ )
    {
      var dim = dims[i];
      var inx = arguments[i];
      
      // A part of the multi-dim. index addresses beyond the array
      if (( inx < 0 ) || ( inx >= dim ))
        return this.DefaultValue;

      flatInx = ( flatInx * dim ) + inx;
    }
    
    // Get the value at the calculated flat index
    var value = this[flatInx];

    // The value doesn't exist? Then use the default value instead
    if ( value === undefined )
      return this.DefaultValue;

    return value;
  };

  // This function implements the 'Set' method of an array. The method evaluates
  // the given array index (evtl. multidimensional) and determines a flat index
  // within the flat array. With the known index, a value is stored in the array.
  function ArraySetter()
  {
    var dims     = this.Dimensions;
    var noOfDims = dims.length;
    var flatInx  = 0;
    
    // Wrong number of dimensions?
    if (( arguments.length - 1 ) !== noOfDims )
      return;

    // Convert the multi-dimensional index into a flat index.
    for ( var i = 0; i < noOfDims; i++ )
    {
      var dim = dims[i];
      var inx = arguments[i];
      
      // A part of the multi-dim. index addresses beyond the array
      if (( inx < 0 ) || ( inx >= dim ))
        return;
        
      flatInx = ( flatInx * dim ) + inx;
    }
    
    // Store the value in the array. The value is passed as last parameter
    return this[ flatInx ] = arguments[ noOfDims ];
  };

  // ---------------------------------------------------------------------------
  // The function NewArray() creates an array object able to handle with more
  // than one dimension. Internally the multi-dimensional space is mapped to
  // the flat space of the JavaScript array. The dimensions of the array to
  // create are passed in the arguments of the function. In the penultimate
  // argument the 'default' value for the array is passed. Using default values
  // reduces the memory footprint of arrays. In the last argument (if not null)
  // a list of values to initialize the array is passed. The values are stored
  // as key-vaue pairs, where the key is the flat index to store the value.
  // ---------------------------------------------------------------------------
  emwi._NewArray = function()
  {
    var noOfDims     = arguments.length - 2;
    var defaultValue = arguments[ noOfDims  ];
    var inits        = arguments[ noOfDims + 1 ];
    var dims         = [];

    // Copy the dimensions of the array 
    for ( var i = 0; i < noOfDims; i++ )
      dims[i] = arguments[i];

    var array = [];
    array.Dimensions   = dims;
    array.DefaultValue = defaultValue;

    // Copy all init value
    if ( inits )
      for ( var i in inits )
        array[i] = inits[i];
    
    // Getter/Setter methods to read/write array entries by using a (mult-dim.)
    // index.
    array.Get = ArrayGetter;
    array.Set = ArraySetter;
    
    return array;
  };
  
  // ---------------------------------------------------------------------------
  // The function Trace() works similary to the printf() function. Trace()
  // expects a format string and one or more additional arguments. The format
  // string contains escape sequences, one for each argument. These sequences
  // describe how the additional arguments should be interpreted and printed out 
  // on the debug console. 
  // Every escape sequence starts with a '%' percent sign followed by a single
  // sign as a command. The following escape sequences are supported:
  // %i - print a signed integer value (int8, int16, int32)
  // %u - print an unsigned integer value (uint8, uint16, uint32)
  // %I - print a signed 64-bit integer value
  // %U - print an unsigned 64-bit integer value
  // %b - print a boolean value (bool)
  // %c - print a character (char)
  // %s - print a string value (string)
  // %f - print a floating point value (float)
  // %o - print a color value (color)
  // %l - print a language id
  // %g - print a styles set value (styles)
  // %e - print an enumeration value (enum)
  // %t - print a set value (set)
  // %p - print a point value (point)
  // %r - print a rectangle value (rect)
  // %^ - print a value of a reference to a property (ref to)
  // %* - print a pointer to an object and the class of the object
  // %$ - print a class
  // %h - print a native handle
  // %0 - print 'null'
  // ---------------------------------------------------------------------------
  emwi._Trace = function()
  {
    // Helper function to convert a number in a hex-notation
    function ToHex( aValue, aNoOfDigits )
    {
      var tmp = aValue.toString( 16 ).toUpperCase();
      var pad = aNoOfDigits - tmp.length;
      
      if ( pad > 0 )
        tmp = emwi._Zeros.slice( 0, pad ) + tmp;

      return tmp;
    }

    var format = arguments[0];
    var text   = "EmWi trace: ";
    var inx    = 0;
    var argNo  = 1;
    
    // Evaluate format escape sequences
    while ( format && ( inx < format.length ) && ( argNo < arguments.length ))
    {
      // Beginning of a escape sequence
      if ( format[ inx++ ] === '%' )
      {
        // Print a comma as delimiter in the trace output
        if ( argNo > 1 )
          text += ", ";

        // Determinate the type of the expression to output on the console 
        switch ( format[ inx++ ])
        {
          case 'i' :
          case 'I' : text += arguments[argNo].toFixed();               break;
          case 'u' :
          case 'U' : text += arguments[argNo].toFixed();               break;
          case 'f' : text += arguments[argNo];                         break;
          case 'e' : text += "enum:0x" + ToHex( arguments[argNo], 8 ); break;
          case 't' : text += "set:0x"  + ToHex( arguments[argNo], 8 ); break;
          case '0' : text += "null";                                   break;
          case 'b' : text += arguments[argNo];                         break;
          case 'h' : text += "handle:" + arguments[argNo];             break;
          case 'c' : // char
          {
            var tmp = arguments[argNo];

            // Is the character 'printable'?
            if (( tmp >= 0x20 ) && ( tmp <= 0x7F ))
              text += "\'" + String.fromCharCode( tmp ) + "\'";
            else 
              text += "\'\\x" + ToHex( tmp, 4 ) + "\'";
          } break;

          case 'o' : // color
          {
            var tmp = arguments[argNo];
            var r   = tmp & 0xFF;
            var g   = ( tmp >> 8  ) & 0xFF;
            var b   = ( tmp >> 16 ) & 0xFF;
            var a   = ( tmp >> 24 ) & 0xFF;

            text += "#" + ToHex( r, 2 ) + ToHex( g, 2 ) + ToHex( b, 2 ) +
                          ToHex( a, 2 );
          } break;

          case 'p' : // point
          {
            var tmp = arguments[argNo];
            text += "<" + tmp[0] + "," + tmp[1] + ">";
          } break;

          case 'r' : // rect
          {
            var tmp = arguments[argNo];
            text += "<" + tmp[0] + "," + tmp[1] + "," + tmp[2] + "," + tmp[3] + ">";
          } break;

          case 'l' : // language
          {
            text += "language:0x" + ToHex( arguments[argNo], 8 );
          } break;

          case 'g' : // styles set
          {
            text += "styles:0x" + ToHex( arguments[argNo], 8 );
          } break;

          case '^' : // ref to
          {
            var tmp = arguments[argNo];

            if ( !tmp || !tmp[0])
              text += "null";
            else
              text += "ref:(Object of class '" + tmp[0]._className +
                      "', OnGet:'" + tmp[1].name + "', OnSet:'" +
                      tmp[2].name + "')";
          } break;

          case '*' : // object
          {
            var tmp = arguments[argNo];

            if ( !tmp || !tmp._className )
              text += "null";
            else
              text += "Object of class '" + tmp._className + "'";
          } break;

          case '$' : // class
          {
            var tmp = arguments[argNo];

            if ( !tmp || !tmp._className )
              text += "null";
            else
              text += tmp._className;
          } break;

          case '&' : // slot
          {
            var tmp = arguments[argNo];

            if ( !tmp || !tmp[0])
              text += "null";
            else
              text += "slot:(Object of class '" + tmp[0]._className +
                      "', SlotProc:'" + tmp[1].name + "')";
          } break;

          case 's' : // string
          {
            var tmp = arguments[argNo];

            text += "\"" + tmp + "\"";
          } break;
        }
        
        // Continue with the next argument
        argNo++;
      }
    }

    console.log( text );
  };
  
  // ---------------------------------------------------------------------------
  // The following function requests an update for the current application
  // instance.
  // ---------------------------------------------------------------------------
  emwi._RequestUpdate = function()
  {
    // Already waiting for the update
    if ( this._NeedsUpdate )
      return;

    var thisApp          = this;
    var requestAnimFrame = window.requestAnimationFrame       || 
                           window.webkitRequestAnimationFrame || 
                           window.mozRequestAnimationFrame    || 
                           window.oRequestAnimationFrame      || 
                           window.msRequestAnimationFrame;

    // Wrapper functions for timer, etc. handler
    function updateHandler() { thisApp._OnUpdate();  }

    // Remember the application for the next screen update
    if ( requestAnimFrame ) requestAnimFrame( updateHandler );
    else                    window.setTimeout( updateHandler, 15 );

    // Remembers that the request is pending
    this._NeedsUpdate = true;
  };
  
  // ---------------------------------------------------------------------------
  // The following function request the garbage collection to run for the next
  // time.
  // ---------------------------------------------------------------------------
  emwi._RequestReclaim = function()
  {
    // Already waiting for the reclaim
    if ( this._NeedsReclaim )
      return;

    var thisApp = this;

    // Wrapper functions for timer, etc. handler
    function reclaimHandler() { thisApp._OnReclaim();  }

    // Remember the application for the next garbage collection run
    window.setTimeout( reclaimHandler, 1000 );

    // Remembers that the request is pending
    this._NeedsReclaim = true;
  };

  // ---------------------------------------------------------------------------
  // The OnUpdate() function is called periodically to perform pending screen
  // updates. If no updates waits for processing, the function does nothing.
  // ---------------------------------------------------------------------------
  emwi._OnUpdate = function()
  {
    // No pending updates?
    if ( !this._NeedsUpdate )
      return;

    this._NeedsUpdate = false;

    try
    {
      // Before screen is drawn, process all pending signals.
      var doReclaim = this._ProcessSignals();

      // Let redraw the dirty area of the screen. Cover the main framebuffer
      // object within a canvas instance, so Mosaic can handle with it.
      if ( this._Framebuffer && this._Application.DoesNeedUpdate())
      {
        var canvas = this._NewObject( this.Graphics.Canvas, 0 );
        
        // Force the WebGL context to be reinitialized with new destination
        // and source bitmaps. Without this workaround Safari looses the last
        // bound texture
        this._Context.DstSurface = null;
        this._Context.SrcSurface = null;
        this._Context.MskSurface = null;
        
        // Request a screen clear in case of full screen update?
        if ( this._FullScreenUpdate )
          this._Framebuffer.Surfaces[0].ClearOnSelect = true;

        canvas.AttachBitmap( this._Framebuffer );
        this._Application.UpdateGE20( canvas );
        canvas.DetachBitmap();

        // Nothing is drawn - the clear operation is still pending.
        if ( this._Framebuffer.Surfaces[0].ClearOnSelect )
        {
          this._Context.clear( this._Context.COLOR_BUFFER_BIT );
          this._Framebuffer.Surfaces[0].ClearOnSelect = false;
        }

        // Should reclaim the memory?
        doReclaim = true;
      }
      
      // Finally free unused memory
      if ( doReclaim )
        this._RequestReclaim();

      // The above operations requested more processing?
      if ( this._PostSignals || this._IdleSignals )
        this._RequestUpdate();
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" );
    }
  };
  
  // ---------------------------------------------------------------------------
  // The OnReclaim() function is called periodically to collect and reclaim
  // unused Chora objects.
  // ---------------------------------------------------------------------------
  emwi._OnReclaim = function()
  {
    // No pending memory reclaims?
    if ( !this._NeedsReclaim )
      return;

    this._NeedsReclaim = false;
    this._ReclaimMemory();
  };
  
  // This helper function verifies, whether the passed universal key code does
  // match a TV key code. If true, the TV code variant is returned. Otherwise 
  // the original key code without being modified. This conversion exists for
  // compatibility with older EmWi version used for the development of TV or
  // set-top boxes.
  function TranslateToTVKeyCode( aCode, aCodes )
  {
    var list1 = [ 
      aCodes.Enter,           aCodes.Escape,             aCodes.Backspace,

      aCodes.CtrlShiftPageUp, aCodes.CtrlShiftPageDown,  aCodes.CtrlShiftUp,
      aCodes.CtrlShiftDown,   aCodes.CtrlShiftKeyP,      aCodes.CtrlShiftKeyR,
      aCodes.CtrlShiftLeft,   aCodes.CtrlShiftRight,     aCodes.CtrlShiftBackspace,
      aCodes.CtrlShiftKeyE,   aCodes.CtrlShiftKeyT,      aCodes.CtrlShiftKeyN,
      aCodes.CtrlShiftKeyK,   aCodes.CtrlShiftKeyG,      aCodes.CtrlShiftKeyU,
      aCodes.CtrlShiftKeyA,   aCodes.CtrlShiftKeyD,      aCodes.CtrlShiftKeyM,
      aCodes.CtrlShiftKey0,   aCodes.CtrlShiftKey1,      aCodes.CtrlShiftKey2,
      aCodes.CtrlShiftKey3,   aCodes.CtrlShiftKey4,      aCodes.CtrlShiftKey5,
      aCodes.CtrlShiftKey6,   aCodes.CtrlShiftKey7,      aCodes.CtrlShiftKey8,
      aCodes.CtrlShiftKey9,

      aCodes.CtrlKeyM,        aCodes.CtrlPageUp,         aCodes.CtrlPageDown,
      aCodes.CtrlInsert,      aCodes.CtrlDelete,         aCodes.CtrlKeyP,
      aCodes.CtrlKeyS,        aCodes.CtrlLeft,           aCodes.CtrlRight,
      aCodes.CtrlUp,          aCodes.CtrlDown,           aCodes.CtrlKeyH,
      aCodes.CtrlKeyR,        aCodes.CtrlKeyG,           aCodes.CtrlKeyB,
      aCodes.CtrlKeyY,        aCodes.CtrlKeyL,           aCodes.CtrlKeyN,
      aCodes.CtrlKeyW,        aCodes.CtrlKeyD,           aCodes.CtrlKeyV,
      aCodes.CtrlKeyE,        aCodes.CtrlKeyO,           aCodes.CtrlKeyT,
      aCodes.CtrlKeyQ,        aCodes.CtrlKeyA,           aCodes.CtrlKeyC,
      aCodes.CtrlKeyU,        aCodes.CtrlKeyZ,           aCodes.CtrlKeyX,
      aCodes.CtrlKeyI,        aCodes.CtrlHome,           aCodes.CtrlEnd,
      aCodes.CtrlKey0,        aCodes.CtrlKey1,           aCodes.CtrlKey2,
      aCodes.CtrlKey3,        aCodes.CtrlKey4,           aCodes.CtrlKey5,
      aCodes.CtrlKey6,        aCodes.CtrlKey7,           aCodes.CtrlKey8,
      aCodes.CtrlKey9 ]; 

    var list2 = [ 
      aCodes.Ok,              aCodes.Exit,               aCodes.Clear, 

      aCodes.ChannelUp,       aCodes.ChannelDown,        aCodes.SkipPrev,
      aCodes.SkipNext,        aCodes.Pause,              aCodes.Record,
      aCodes.SlowRev,         aCodes.SlowFwd,            aCodes.Eject,
      aCodes.Repeat,          aCodes.Timer,              aCodes.Navigation,
      aCodes.Karaoke,         aCodes.Game,               aCodes.Setup,
      aCodes.Angle,           aCodes.Mode,               aCodes.Mute,
      aCodes.User10,          aCodes.User11,             aCodes.User12,
      aCodes.User13,          aCodes.User14,             aCodes.User15,
      aCodes.User16,          aCodes.User17,             aCodes.User18,
      aCodes.User19,

      aCodes.Menu,            aCodes.VolumeUp,           aCodes.VolumeDown,
      aCodes.Show,            aCodes.Hide,               aCodes.Play,
      aCodes.Stop,            aCodes.Rev,                aCodes.Fwd,
      aCodes.SkipBwd,         aCodes.SkipFwd,            aCodes.Help,
      aCodes.Red,             aCodes.Green,              aCodes.Blue,
      aCodes.Yellow,          aCodes.White,              aCodes.Magenta,
      aCodes.TV,              aCodes.DVD,                aCodes.VCR,
      aCodes.EPG,             aCodes.OSD,                aCodes.Text,
      aCodes.PIP,             aCodes.Audio,              aCodes.Clock,
      aCodes.Subtitle,        aCodes.Zoom,               aCodes.Index,
      aCodes.Info,            aCodes.Display,            aCodes.Power,
      aCodes.User0,           aCodes.User1,              aCodes.User2,
      aCodes.User3,           aCodes.User4,              aCodes.User5,
      aCodes.User6,           aCodes.User7,              aCodes.User8,
      aCodes.User9 ];

    var inx = list1.length - 1;

    // Is the passed key code convertible to TV code? Search the list.
    while (( inx >= 0 ) && ( list1[inx] !== aCode ))
      inx--;

    // Found? Then convert to TV code
    if ( inx >= 0 )
      aCode = list2[ inx ];

    return aCode;
  }

  // ---------------------------------------------------------------------------
  // The OnKeyEvent() function is called when the user has pressed a key on the
  // keyboard.
  // ---------------------------------------------------------------------------
  emwi._OnKeyEvent = function( aEvent )
  {
    var codes     = this.Core.KeyCode;
    var keyup     = aEvent.type === "keyup";
    var keyCode   = codes.NoKey;
    var tvKeyCode = codes.NoKey;
    var charCode  = 0;
    
    // A user defined keyboard event conversion function available? The
    // function should return an object with the following layout:
    // { KeyCode:???, CharCode:??? }
    if ((( aEvent.type === "keydown" ) || ( aEvent.type === "keypress" )) &&
           this._OnKeyEventFunc )
    {
      var code = this._OnKeyEventFunc.call( this, aEvent );
      
      // Extract the command/character codes from the returned data object
      if      ( code && code.KeyCode  ) keyCode  = code.KeyCode;
      else if ( code && code.CharCode ) charCode = code.CharCode;
    }
    
    // The browser provides the unicode code of the pressed key?
    if (( aEvent.type === "keypress" ) && !aEvent.ctrlKey &&
        ( aEvent.charCode !== 13 ) && ( aEvent.charCode !== 8 ) &&
        ( keyCode === codes.NoKey ) && !charCode )
      charCode = aEvent.charCode;
    
    // Other key has been pressed
    else if (( aEvent.type === "keydown" ) && ( keyCode === codes.NoKey ) &&
               !charCode )
    {
      // Key pressed together with CTRL+SHIFT
      if ( aEvent.ctrlKey && aEvent.shiftKey && !aEvent.altKey )
        switch ( aEvent.keyCode )
        {
          case 13  : keyCode = codes.CtrlShiftEnter;    break;
          case 27  : keyCode = codes.CtrlShiftEscape;   break;
          case 8   : keyCode = codes.CtrlShiftBackspace;break;
          case 9   : keyCode = codes.CtrlShiftTab;      break;
          case 40  : keyCode = codes.CtrlShiftDown;     break;
          case 38  : keyCode = codes.CtrlShiftUp;       break;
          case 37  : keyCode = codes.CtrlShiftLeft;     break;
          case 39  : keyCode = codes.CtrlShiftRight;    break;
          case 36  : keyCode = codes.CtrlShiftHome;     break;
          case 35  : keyCode = codes.CtrlShiftEnd;      break;
          case 33  : keyCode = codes.CtrlShiftPageUp;   break;
          case 34  : keyCode = codes.CtrlShiftPageDown; break;
          case 45  : keyCode = codes.CtrlShiftInsert;   break;
          case 46  : keyCode = codes.CtrlShiftDelete;   break;
          case 112 : keyCode = codes.CtrlShiftF1;       break;
          case 113 : keyCode = codes.CtrlShiftF2;       break;
          case 114 : keyCode = codes.CtrlShiftF3;       break;
          case 115 : keyCode = codes.CtrlShiftF4;       break;
          case 116 : keyCode = codes.CtrlShiftF5;       break;
          case 117 : keyCode = codes.CtrlShiftF6;       break;
          case 118 : keyCode = codes.CtrlShiftF7;       break;
          case 119 : keyCode = codes.CtrlShiftF8;       break;
          case 120 : keyCode = codes.CtrlShiftF9;       break;
          case 121 : keyCode = codes.CtrlShiftF10;      break;
          case 32  : keyCode = codes.CtrlShiftSpace;    break;
          case 48  : keyCode = codes.CtrlShiftKey0;     break;
          case 49  : keyCode = codes.CtrlShiftKey1;     break;
          case 50  : keyCode = codes.CtrlShiftKey2;     break;
          case 51  : keyCode = codes.CtrlShiftKey3;     break;
          case 52  : keyCode = codes.CtrlShiftKey4;     break;
          case 53  : keyCode = codes.CtrlShiftKey5;     break;
          case 54  : keyCode = codes.CtrlShiftKey6;     break;
          case 55  : keyCode = codes.CtrlShiftKey7;     break;
          case 56  : keyCode = codes.CtrlShiftKey8;     break;
          case 57  : keyCode = codes.CtrlShiftKey9;     break;
          case 96  : keyCode = codes.CtrlShiftKey0;     break;
          case 97  : keyCode = codes.CtrlShiftKey1;     break;
          case 98  : keyCode = codes.CtrlShiftKey2;     break;
          case 99  : keyCode = codes.CtrlShiftKey3;     break;
          case 100 : keyCode = codes.CtrlShiftKey4;     break;
          case 101 : keyCode = codes.CtrlShiftKey5;     break;
          case 102 : keyCode = codes.CtrlShiftKey6;     break;
          case 103 : keyCode = codes.CtrlShiftKey7;     break;
          case 104 : keyCode = codes.CtrlShiftKey8;     break;
          case 105 : keyCode = codes.CtrlShiftKey9;     break;
          case 65  : keyCode = codes.CtrlShiftKeyA;     break;
          case 66  : keyCode = codes.CtrlShiftKeyB;     break;
          case 67  : keyCode = codes.CtrlShiftKeyC;     break;
          case 68  : keyCode = codes.CtrlShiftKeyD;     break;
          case 69  : keyCode = codes.CtrlShiftKeyE;     break;
          case 70  : keyCode = codes.CtrlShiftKeyF;     break;
          case 71  : keyCode = codes.CtrlShiftKeyG;     break;
          case 72  : keyCode = codes.CtrlShiftKeyH;     break;
          case 73  : keyCode = codes.CtrlShiftKeyI;     break;
          case 74  : keyCode = codes.CtrlShiftKeyJ;     break;
          case 75  : keyCode = codes.CtrlShiftKeyK;     break;
          case 76  : keyCode = codes.CtrlShiftKeyL;     break;
          case 77  : keyCode = codes.CtrlShiftKeyM;     break;
          case 78  : keyCode = codes.CtrlShiftKeyN;     break;
          case 79  : keyCode = codes.CtrlShiftKeyO;     break;
          case 80  : keyCode = codes.CtrlShiftKeyP;     break;
          case 81  : keyCode = codes.CtrlShiftKeyQ;     break;
          case 82  : keyCode = codes.CtrlShiftKeyR;     break;
          case 83  : keyCode = codes.CtrlShiftKeyS;     break;
          case 84  : keyCode = codes.CtrlShiftKeyT;     break;
          case 85  : keyCode = codes.CtrlShiftKeyU;     break;
          case 86  : keyCode = codes.CtrlShiftKeyV;     break;
          case 87  : keyCode = codes.CtrlShiftKeyW;     break;
          case 88  : keyCode = codes.CtrlShiftKeyX;     break;
          case 89  : keyCode = codes.CtrlShiftKeyY;     break;
          case 90  : keyCode = codes.CtrlShiftKeyZ;     break;
        }

      // Key pressed together with CTRL. SHIFT is not halted down
      else if ( aEvent.ctrlKey && !aEvent.shiftKey && !aEvent.altKey )
        switch ( aEvent.keyCode )
        {
          case 13  : keyCode = codes.CtrlEnter;    break;
          case 27  : keyCode = codes.CtrlEscape;   break;
          case 8   : keyCode = codes.CtrlBackspace;break;
          case 9   : keyCode = codes.CtrlTab;      break;
          case 40  : keyCode = codes.CtrlDown;     break;
          case 38  : keyCode = codes.CtrlUp;       break;
          case 37  : keyCode = codes.CtrlLeft;     break;
          case 39  : keyCode = codes.CtrlRight;    break;
          case 36  : keyCode = codes.CtrlHome;     break;
          case 35  : keyCode = codes.CtrlEnd;      break;
          case 33  : keyCode = codes.CtrlPageUp;   break;
          case 34  : keyCode = codes.CtrlPageDown; break;
          case 45  : keyCode = codes.CtrlInsert;   break;
          case 46  : keyCode = codes.CtrlDelete;   break;
          case 112 : keyCode = codes.CtrlF1;       break;
          case 113 : keyCode = codes.CtrlF2;       break;
          case 114 : keyCode = codes.CtrlF3;       break;
          case 115 : keyCode = codes.CtrlF4;       break;
          case 116 : keyCode = codes.CtrlF5;       break;
          case 117 : keyCode = codes.CtrlF6;       break;
          case 118 : keyCode = codes.CtrlF7;       break;
          case 119 : keyCode = codes.CtrlF8;       break;
          case 120 : keyCode = codes.CtrlF9;       break;
          case 121 : keyCode = codes.CtrlF10;      break;
          case 32  : keyCode = codes.CtrlSpace;    break;
          case 48  : keyCode = codes.CtrlKey0;     break;
          case 49  : keyCode = codes.CtrlKey1;     break;
          case 50  : keyCode = codes.CtrlKey2;     break;
          case 51  : keyCode = codes.CtrlKey3;     break;
          case 52  : keyCode = codes.CtrlKey4;     break;
          case 53  : keyCode = codes.CtrlKey5;     break;
          case 54  : keyCode = codes.CtrlKey6;     break;
          case 55  : keyCode = codes.CtrlKey7;     break;
          case 56  : keyCode = codes.CtrlKey8;     break;
          case 57  : keyCode = codes.CtrlKey9;     break;
          case 96  : keyCode = codes.CtrlKey0;     break;
          case 97  : keyCode = codes.CtrlKey1;     break;
          case 98  : keyCode = codes.CtrlKey2;     break;
          case 99  : keyCode = codes.CtrlKey3;     break;
          case 100 : keyCode = codes.CtrlKey4;     break;
          case 101 : keyCode = codes.CtrlKey5;     break;
          case 102 : keyCode = codes.CtrlKey6;     break;
          case 103 : keyCode = codes.CtrlKey7;     break;
          case 104 : keyCode = codes.CtrlKey8;     break;
          case 105 : keyCode = codes.CtrlKey9;     break;
          case 65  : keyCode = codes.CtrlKeyA;     break;
          case 66  : keyCode = codes.CtrlKeyB;     break;
          case 67  : keyCode = codes.CtrlKeyC;     break;
          case 68  : keyCode = codes.CtrlKeyD;     break;
          case 69  : keyCode = codes.CtrlKeyE;     break;
          case 70  : keyCode = codes.CtrlKeyF;     break;
          case 71  : keyCode = codes.CtrlKeyG;     break;
          case 72  : keyCode = codes.CtrlKeyH;     break;
          case 73  : keyCode = codes.CtrlKeyI;     break;
          case 74  : keyCode = codes.CtrlKeyJ;     break;
          case 75  : keyCode = codes.CtrlKeyK;     break;
          case 76  : keyCode = codes.CtrlKeyL;     break;
          case 77  : keyCode = codes.CtrlKeyM;     break;
          case 78  : keyCode = codes.CtrlKeyN;     break;
          case 79  : keyCode = codes.CtrlKeyO;     break;
          case 80  : keyCode = codes.CtrlKeyP;     break;
          case 81  : keyCode = codes.CtrlKeyQ;     break;
          case 82  : keyCode = codes.CtrlKeyR;     break;
          case 83  : keyCode = codes.CtrlKeyS;     break;
          case 84  : keyCode = codes.CtrlKeyT;     break;
          case 85  : keyCode = codes.CtrlKeyU;     break;
          case 86  : keyCode = codes.CtrlKeyV;     break;
          case 87  : keyCode = codes.CtrlKeyW;     break;
          case 88  : keyCode = codes.CtrlKeyX;     break;
          case 89  : keyCode = codes.CtrlKeyY;     break;
          case 90  : keyCode = codes.CtrlKeyZ;     break;
        }

      // Key pressed alone without CTRL and SHIFT
      else if ( !aEvent.ctrlKey && !aEvent.shiftKey && !aEvent.altKey )
        switch ( aEvent.keyCode )
        {
          case 13  : keyCode = codes.Enter;    break;
          case 27  : keyCode = codes.Escape;   break;
          case 8   : keyCode = codes.Backspace;break;
          case 9   : keyCode = codes.Tab;      break;
          case 40  : keyCode = codes.Down;     break;
          case 38  : keyCode = codes.Up;       break;
          case 37  : keyCode = codes.Left;     break;
          case 39  : keyCode = codes.Right;    break;
          case 36  : keyCode = codes.Home;     break;
          case 35  : keyCode = codes.End;      break;
          case 33  : keyCode = codes.PageUp;   break;
          case 34  : keyCode = codes.PageDown; break;
          case 45  : keyCode = codes.Insert;   break;
          case 46  : keyCode = codes.Delete;   break;
          case 112 : keyCode = codes.F1;       break;
          case 113 : keyCode = codes.F2;       break;
          case 114 : keyCode = codes.F3;       break;
          case 115 : keyCode = codes.F4;       break;
          case 116 : keyCode = codes.F5;       break;
          case 117 : keyCode = codes.F6;       break;
          case 118 : keyCode = codes.F7;       break;
          case 119 : keyCode = codes.F8;       break;
          case 120 : keyCode = codes.F9;       break;
          case 121 : keyCode = codes.F10;      break;
        }

      // Key pressed alone with ALT key.
      else if ( !aEvent.ctrlKey && !aEvent.shiftKey && aEvent.altKey )
        switch ( aEvent.keyCode )
        {
          case 13  : keyCode = codes.AltEnter;    break;
          case 27  : keyCode = codes.AltEscape;   break;
          case 8   : keyCode = codes.AltBackspace;break;
          case 9   : keyCode = codes.AltTab;      break;
          case 40  : keyCode = codes.AltDown;     break;
          case 38  : keyCode = codes.AltUp;       break;
          case 37  : keyCode = codes.AltLeft;     break;
          case 39  : keyCode = codes.AltRight;    break;
          case 36  : keyCode = codes.AltHome;     break;
          case 35  : keyCode = codes.AltEnd;      break;
          case 33  : keyCode = codes.AltPageUp;   break;
          case 34  : keyCode = codes.AltPageDown; break;
          case 45  : keyCode = codes.AltInsert;   break;
          case 46  : keyCode = codes.AltDelete;   break;
          case 112 : keyCode = codes.AltF1;       break;
          case 113 : keyCode = codes.AltF2;       break;
          case 114 : keyCode = codes.AltF3;       break;
          case 115 : keyCode = codes.AltF4;       break;
          case 116 : keyCode = codes.AltF5;       break;
          case 117 : keyCode = codes.AltF6;       break;
          case 118 : keyCode = codes.AltF7;       break;
          case 119 : keyCode = codes.AltF8;       break;
          case 120 : keyCode = codes.AltF9;       break;
          case 121 : keyCode = codes.AltF10;      break;
        }

      // Key pressed alone with ALT + SHIFT key.
      else if ( !aEvent.ctrlKey && aEvent.shiftKey && aEvent.altKey )
        switch ( aEvent.keyCode )
        {
          case 13  : keyCode = codes.AltShiftEnter;    break;
          case 27  : keyCode = codes.AltShiftEscape;   break;
          case 8   : keyCode = codes.AltShiftBackspace;break;
          case 9   : keyCode = codes.AltShiftTab;      break;
          case 40  : keyCode = codes.AltShiftDown;     break;
          case 38  : keyCode = codes.AltShiftUp;       break;
          case 37  : keyCode = codes.AltShiftLeft;     break;
          case 39  : keyCode = codes.AltShiftRight;    break;
          case 36  : keyCode = codes.AltShiftHome;     break;
          case 35  : keyCode = codes.AltShiftEnd;      break;
          case 33  : keyCode = codes.AltShiftPageUp;   break;
          case 34  : keyCode = codes.AltShiftPageDown; break;
          case 45  : keyCode = codes.AltShiftInsert;   break;
          case 46  : keyCode = codes.AltShiftDelete;   break;
          case 112 : keyCode = codes.AltShiftF1;       break;
          case 113 : keyCode = codes.AltShiftF2;       break;
          case 114 : keyCode = codes.AltShiftF3;       break;
          case 115 : keyCode = codes.AltShiftF4;       break;
          case 116 : keyCode = codes.AltShiftF5;       break;
          case 117 : keyCode = codes.AltShiftF6;       break;
          case 118 : keyCode = codes.AltShiftF7;       break;
          case 119 : keyCode = codes.AltShiftF8;       break;
          case 120 : keyCode = codes.AltShiftF9;       break;
          case 121 : keyCode = codes.AltShiftF10;      break;
        }

      // Key pressed alone with SHIFT key.
      else if ( !aEvent.ctrlKey && aEvent.shiftKey && !aEvent.altKey )
        switch ( aEvent.keyCode )
        {
          case 13  : keyCode = codes.ShiftEnter;     break;
          case 27  : keyCode = codes.ShiftEscape;    break;
          case 8   : keyCode = codes.ShiftBackspace; break;
          case 9   : keyCode = codes.ShiftTab;       break;
          case 40  : keyCode = codes.ShiftDown;      break;
          case 38  : keyCode = codes.ShiftUp;        break;
          case 37  : keyCode = codes.ShiftLeft;      break;
          case 39  : keyCode = codes.ShiftRight;     break;
          case 36  : keyCode = codes.ShiftHome;      break;
          case 35  : keyCode = codes.ShiftEnd;       break;
          case 33  : keyCode = codes.ShiftPageUp;    break;
          case 34  : keyCode = codes.ShiftPageDown;  break;
          case 45  : keyCode = codes.ShiftInsert;    break;
          case 46  : keyCode = codes.ShiftDelete;    break;
          case 112 : keyCode = codes.ShiftF1;        break;
          case 113 : keyCode = codes.ShiftF2;        break;
          case 114 : keyCode = codes.ShiftF3;        break;
          case 115 : keyCode = codes.ShiftF4;        break;
          case 116 : keyCode = codes.ShiftF5;        break;
          case 117 : keyCode = codes.ShiftF6;        break;
          case 118 : keyCode = codes.ShiftF7;        break;
          case 119 : keyCode = codes.ShiftF8;        break;
          case 120 : keyCode = codes.ShiftF9;        break;
          case 121 : keyCode = codes.ShiftF10;       break;
        }

      // Translate the universal key code to the older TV key code schema.
      // This is important to be compatible with older versions.
      tvKeyCode = TranslateToTVKeyCode( keyCode, codes );

      // Does the user holds down the same key, then the previously 
      // performed universal to TV key code translation should be taken in 
      // account
      if      ( tvKeyCode === this._LastKeyCode ) keyCode   = this._LastKeyCode;
      else if ( keyCode   === this._LastKeyCode ) tvKeyCode = this._LastKeyCode;
    }
    
    // No events to feed the application?
    if (( keyCode === codes.NoKey ) && !charCode &&
       ( !keyup || (( this._LastKeyCode === codes.NoKey ) && !this._LastCharCode ))) 
      return;

    try
    {
      // While holding down one key the user presses a second key. In this case
      // simulate the release of the first key before sending the 'down' event for
      // the second key. This is essential for correct working Mosaic. Mosaic
      // expects that for every 'press' event the corresponding 'release' event
      // is delivered.
      if (( this._LastKeyCode !== codes.NoKey ) && 
         (( keyCode !== this._LastKeyCode ) || keyup ))
      {
        this._Application.DriveKeyboardHitting( this._LastKeyCode, 0, false );
        this._LastKeyCode = codes.NoKey;
      }

      // ... the same but the recently pressed key was a character key.
      if ( this._LastCharCode && (( charCode !== this._LastCharCode ) || keyup ))
      {
        this._Application.DriveKeyboardHitting( codes.NoKey, this._LastCharCode, false );
        this._LastCharCode = 0;
      }

      // Report the just pressed character key to the application object
      if ( charCode && this._Application.DriveKeyboardHitting( codes.NoKey, charCode, true ))
        this._LastCharCode = charCode;

      // Try with the translated TV code. This is essential for older applications using 
      // the TV specific key code schema like CTRL+M is 'Menu' key
      else if (( tvKeyCode !== keyCode ) && ( tvKeyCode !== codes.NoKey ) && 
            this._Application.DriveKeyboardHitting( tvKeyCode, 0, true ))
        this._LastKeyCode = tvKeyCode;

      // The application has not processed the TV specific code. Now feed the application
      // with the universal key code
      else if (( keyCode !== codes.NoKey ) && 
                 this._Application.DriveKeyboardHitting( keyCode, 0, true ))
        this._LastKeyCode = keyCode;

      // Run a new update cycle
      this._RequestUpdate();
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" );
    }
    
    // The event is handled by the EmWi app - no other processing required
    aEvent.stopPropagation();
    aEvent.preventDefault();
  };


  // ---------------------------------------------------------------------------
  // The OnBlur() function is called when the canvas element loses the input
  // focus.
  // ---------------------------------------------------------------------------
  emwi._OnBlur = function( aEvent )
  {
    var codes = this.Core.KeyCode;

    try
    {
      // The canvas element loses the focus while the user presses a key. In this
      // case send a 'release' event to the application. It is essential because
      // Mosaic expects, that for each 'down' a 'release' event arrives.
      if ( this._LastKeyCode !== codes.NoKey )
      {
        // Does Mosaic support the new keyboard handling method?
        if ( this._Application.DriveKeyboardHitting )
          this._Application.DriveKeyboardHitting( this._LastKeyCode, 0, false );

        // if not - fall back in the compatibility mode to older Mosaic version
        else
        {
          // Prepare an event object ... 
          var event = this._NewObject( this.Core.KeyEvent, 0 );

          // and pass the event to the application
          event.Initialize( this._LastKeyCode, false );
          this._Application.DispatchEvent( event );
        }

        this._LastKeyCode = codes.NoKey;
        this._RequestUpdate();
      }

      // ... the same but the recently pressed key was a character key.
      if ( this._LastCharCode )
      {
        // Does Mosaic support the new keyboard handling method?
        if ( this._Application.DriveKeyboardHitting )
          this._Application.DriveKeyboardHitting( codes.NoKey, this._LastCharCode, false );

        // if not - fall back in the compatibility mode to older Mosaic version
        else
        {
          // Prepare an event object ... 
          var event = this._NewObject( this.Core.KeyEvent, 0 );

          // and pass the event to the application
          event.Initialize2( this._LastCharCode, false );
          this._Application.DispatchEvent( event );
        }

        this._LastCharCode = 0;
        this._RequestUpdate();
      }
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" );
    }
  };


  // Following helper function extracts from the mouse event the corresponding
  // component coordinates and marks the event as processed.
  function GetMouseEventPosition( aEvent, aCanvas )
  {
    // Limit the events to this canvas element only
    aEvent.stopPropagation();
    aEvent.preventDefault();

    // The mouse remains within the canvas area. Use the provided position
    var area = aCanvas.getBoundingClientRect();
    var x    = aEvent.clientX - area.left;
    var y    = aEvent.clientY - area.top;

    x = (( aCanvas.width  * x ) / aCanvas.offsetWidth  ) | 0;
    y = (( aCanvas.height * y ) / aCanvas.offsetHeight ) | 0;

    return [ x, y ];
  };
  

  // ---------------------------------------------------------------------------
  // The OnMouseDown() function is called when the user has clicked with the
  // mouse inside the canvas area used by the application to show outputs.
  // ---------------------------------------------------------------------------
  emwi._OnMouseDown = function( aEvent )
  {
    // Already processing user inputs. Also ignore other buttons except the
    // left-mouse button.
    if ( this._MouseCaptured || aEvent.button || this._TouchCount )
      return;

    // Ensure that the clicked canvas element has the input focus, so keyboard
    // events may arrive
    this._Canvas.focus();

    // 'capture' all mouse events till the user releases the mouse button
    document.addEventListener( "mousemove", this._MouseMoveHandler, true );
    document.addEventListener( "mouseup",   this._MouseUpHandler,   true );
    this._MouseCaptured = true;
    
    // Get the mouse cordinates in the canvas element
    var pos = GetMouseEventPosition( aEvent, this._Canvas );
    
    // Pass the event to the application
    try
    {
      this._Application.DriveCursorHitting( true, 0, pos );
      this._RequestUpdate();
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" ); 
    }
  };

  // ---------------------------------------------------------------------------
  // The OnMouseUp() function is called when the user has released the mouse
  // button again.
  // ---------------------------------------------------------------------------
  emwi._OnMouseUp = function( aEvent )
  {
    // Only if the user relases the button with it the mouse capture cycle begun
    if ( !this._MouseCaptured || aEvent.button )
      return;

    // Stop receiving mouse events
    document.removeEventListener( "mousemove", this._MouseMoveHandler, true );
    document.removeEventListener( "mouseup",   this._MouseUpHandler,   true );
    this._MouseCaptured = false;
    
    // Get the mouse cordinates in the canvas element
    var pos = GetMouseEventPosition( aEvent, this._Canvas );
    
    // Pass the event to the application
    try
    {
      this._Application.DriveCursorHitting( false, 0, pos );
      this._RequestUpdate();
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" ); 
    }
  };

  // ---------------------------------------------------------------------------
  // The OnMouseMove() function is called when the user has dragged the mouse.
  // ---------------------------------------------------------------------------
  emwi._OnMouseMove = function( aEvent )
  {
    // Only if the user has pressed the mouse button first
    if ( !this._MouseCaptured )
      return;

    // Get the mouse cordinates in the canvas element
    var pos = GetMouseEventPosition( aEvent, this._Canvas );
    
    // Pass the event to the application
    try
    {
      this._Application.DriveCursorMovement( pos );
      this._RequestUpdate();
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" ); 
    }
  };

  // Following helper function extracts from the touch event the corresponding
  // component coordinates.
  function GetTouchEventPosition( aTouch, aCanvas )
  {
    // The touch event remains within the canvas area. Use the provided position.
    var area = aCanvas.getBoundingClientRect();
    var x    = aTouch.clientX - area.left;
    var y    = aTouch.clientY - area.top;

    x = (( aCanvas.width  * x ) / aCanvas.offsetWidth  ) | 0;
    y = (( aCanvas.height * y ) / aCanvas.offsetHeight ) | 0;

    return [ x, y ];
  }

  // ---------------------------------------------------------------------------
  // The OnTouchStart() function is called when the user has touched with the
  // finger inside the canvas area used by the application to show outputs.
  // ---------------------------------------------------------------------------
  emwi._OnTouchStart = function( aEvent )
  {
    var touchCount = this._TouchCount;
    var time       = ( new Date()).getTime();

    // Already processing mouse events or the max. number of 10 touch 
    // interaction has been reached ...
    if ( this._MouseCaptured || ( this._TouchCount === 10 ))
      return; 

    // Process all reported touch events
    for ( var i = 0; i < aEvent.changedTouches.length; i++ )
    {
      var touch  = aEvent.changedTouches[i];
      var finger = 0;
      var area   = [ touch.screenX - 16, touch.screenY - 16,
                     touch.screenX + 32, touch.screenY + 32 ];

      // Find a free entry in the list of active touches corresponding to the
      // recently released finger. Here we compare the positions of released
      // fingers and when the user touches again within the area of such finger
      // we reuse its finger number. This is time limited to 500 ms after release.   
      while (( finger < 10 ) &&
             (
               ( this._TouchIDs[ finger ] !== undefined ) || 
               ( this._ReleasePos[ finger ] === undefined ) ||
               (( time - this._ReleaseTime[ finger ]) > 500 ) ||
              !this._IsPointInRect( area, this._ReleasePos[ finger ])
             ))
        finger++;

      // If no previous finger found, search for any free entry.
      if ( finger == 10 )
        for ( finger = 0; ( finger < 10 ) && ( this._TouchIDs[ finger ] !== undefined ); )
          finger++;

      if ( finger == 10 )
        return;

      this._TouchIDs[ finger ] = touch.identifier;
      this._TouchCount++;
      
      // Pass the event to the application
      try
      {
        this._Application.DriveMultiTouchHitting( true, finger,
          GetTouchEventPosition( touch, this._Canvas ));
        this._RequestUpdate();
      }
      catch ( err )
      {
        console.log( "EmWi error: " + err + "!" ); 
      }
    }

    // At least one touch event has been processed?
    if ( touchCount !== this._TouchCount )
    {
      // Ensure that the touched canvas element has the input focus, so keyboard
      // events may arrive
      this._Canvas.focus();
      aEvent.stopPropagation();
      aEvent.preventDefault();
    }
  };

  // ---------------------------------------------------------------------------
  // The OnTouchEnd() function is called when the user has released the finger
  // again.
  // ---------------------------------------------------------------------------
  emwi._OnTouchEnd = function( aEvent )
  {
    var touchCount = this._TouchCount;
    var time       = ( new Date()).getTime();

    // No active touch interaction to end.
    if ( this._TouchCount === 0 )
      return; 

    // Process all reported touch events
    for ( var i = 0; i < aEvent.changedTouches.length; i++ )
    {
      var touch  = aEvent.changedTouches[i];
      var finger = 9;

      // Find the finger corresponding to the event 
      while (( finger >= 0 ) && ( this._TouchIDs[ finger ] !== touch.identifier ))
        finger--;

      // The finger has been found.
      if ( finger >= 0 )
      {
        this._ReleasePos[ finger ]  = [ touch.screenX, touch.screenY ];
        this._ReleaseTime[ finger ] = time;
        this._TouchIDs[ finger ]    = undefined;
        this._TouchCount--;
      
        // Pass the event to the application
        try
        {
          this._Application.DriveMultiTouchHitting( false, finger,
            GetTouchEventPosition( touch, this._Canvas ));
          this._RequestUpdate();
        }
        catch ( err )
        {
          console.log( "EmWi error: " + err + "!" ); 
        }
      }
    }

    // At least one touch event has been processed?
    if ( touchCount !== this._TouchCount )
    {
      aEvent.stopPropagation();
      aEvent.preventDefault();
    }
  };

  // ---------------------------------------------------------------------------
  // The OnTouchMove() function is called when the user has dragged the finger.
  // ---------------------------------------------------------------------------
  emwi._OnTouchMove = function( aEvent )
  {
    var touchCount = this._TouchCount;

    // No active touch interaction to track.
    if ( this._TouchCount === 0 )
      return; 

    // Process all reported touch events
    for ( var i = 0; i < aEvent.changedTouches.length; i++ )
    {
      var touch  = aEvent.changedTouches[i];
      var finger = 9;

      // Find the finger corresponding to the event 
      while (( finger >= 0 ) && ( this._TouchIDs[ finger ] !== touch.identifier ))
        finger--;

      // The finger has been found.
      if ( finger >= 0 )
      {
        // Pass the event to the application
        try
        {
          this._Application.DriveMultiTouchMovement( finger,
            GetTouchEventPosition( touch, this._Canvas ));
          this._RequestUpdate();
        }
        catch ( err )
        {
          console.log( "EmWi error: " + err + "!" ); 
        }
      }
    }

    // At least one touch event has been processed?
    if ( touchCount !== this._TouchCount )
    {
      aEvent.stopPropagation();
      aEvent.preventDefault();
    }
  };

  // ---------------------------------------------------------------------------
  // The Init() function initializes the EmWi application within the Web-Browser
  // and establishes a connection to the canvas element identified with the name
  // aCanvas. The function returns true if the initialization was successful.
  // The parameter aSettings exists for optional initialization settings. These
  // are passed as values of an object. Following values are possible:
  //
  // - 'FullScreenUpdate' : Determines the application's screen update mode.
  //    If this value is 'true' entire screen is redrawn each time the update
  //    is performed. If this value is 'false' only changed areas are redrawn.
  //    This, however, expects the WebGL implementation to preserve the content
  //    of the framebuffer between two consecutive screen update. Possibly, this
  //    so-called partial update may fail on older Web browsers. The default
  //    value is 'false'.
  //
  // - 'Alpha' : Determines whether the WebGL canvas uses the alpha channel to
  //    store opacity values. If this value is 'true', alpha channel is used and
  //    HTML content can be seen through transparent areas of the WebGL canvas.
  //    If this value is 'false', the WebGL canvas will cover all HTML contents
  //    lying behind it. The default value is 'false'.
  //
  // - 'Debug' : Determines whether additional error state verification should
  //    be performed and controls additional debug log outputs. Per default the
  //    value is 'false'.
  //
  // - 'OnKeyEvent' : Determines a keyboard code translation function. Each time
  //    a keyboard down or press event is received, the assigned function is
  //    called and allows user specific key code conversion. When the function
  //    is called, the key event as it was received from the browser is passed
  //    to this function in its unique parameter. Thereupon the function can
  //    evaluate the events, and decide whether and how the event should be
  //    percepted by the EmWi application. In the return value the function
  //    should return either 'null' or an object containing one of the members:
  //    'KeyCode' or 'CharCode'. The member 'KeyCode' can be initialized with
  //    the a value from the enumration Core::KeyCode. The value 'CharCode' can
  //    be initialized with a unicode character code.
  //    The returned value 'null' means, that no specific conversion was 
  //    performed. Thereupon the runtime environment will perform the default
  //    event conversion.
  // ---------------------------------------------------------------------------
  emwi._Init = function( aCanvas, aSettings )
  {
    var thisApp  = this;
    var canvas   = document.getElementById( aCanvas );
    var appClass = this._ApplicationClass();
    var gl       = null;
    var surface  = {};
    var bitmap   = {};

    // Remember when the application were started
    this._InitTime = ( new Date()).getTime();

    // Load the 'Debug' setting    
    if ( aSettings && aSettings.hasOwnProperty( "Debug" ))
      this._Debug = aSettings.Debug;
    
    // Load the 'FullScreenUpdate' setting    
    if ( aSettings && aSettings.hasOwnProperty( "FullScreenUpdate" ))
      this._FullScreenUpdate = aSettings.FullScreenUpdate;
    
    // Load the 'Alpha' setting    
    if ( aSettings && aSettings.hasOwnProperty( "Alpha" ))
      this._Alpha = aSettings.Alpha;

    // Load the 'OnKeyEvent' setting    
    if ( aSettings && aSettings.hasOwnProperty( "OnKeyEvent" ))
      this._OnKeyEventFunc = aSettings.OnKeyEvent;

    // Trace the initialization
    if ( this._Debug )
      console.log( "EmWi debug: Initializing application '" + 
                   appClass._className + "'." );

    // Output the initialization message
    console.log( "EmWi info: Init application for canvas '" + aCanvas + "'. " +
                 "FullScreenUpdate=" + this._FullScreenUpdate + ", " +
                 "Alpha=" + this._Alpha + ", " +
                 "Debug=" + this._Debug + "." ); 

    // Could find the canvas element? 
    if ( !canvas )
    {
      console.log( "EmWi error: Initialization failed. The canvas element '" +
                   aCanvas + "' doesn't exist!" ); 
      return false;
    }
    
    // Configuration of the context to create
    var attrs = { depth:false, antialias:false, alpha:this._Alpha, 
                  preserveDrawingBuffer:!this._FullScreenUpdate };

    // Create the WebGL context
    gl = canvas.getContext( "webgl", attrs ) ||
         canvas.getContext( "experimental-webgl", attrs );
         
    // Successful?
    if ( !gl )
    {
      console.log( "EmWi error: WebGL context creation failed." );
      return false;
    }

    // Ask the WebGL implementation for the max. allowed surface size    
    this._MaxSurfaceSize = gl.getParameter( gl.MAX_TEXTURE_SIZE );

    // Limit the glyph surface size to the max. supported surface size
    if ( this._GlyphsSurfaceSize > this._MaxSurfaceSize )
      this._GlyphsSurfaceSize = this._MaxSurfaceSize;

    // Calculate the segmentation of the glyph surface. The surface can be
    // divided horizontaly in up to 64 cells (tiles). Vertically the number of
    // cells is limited by the height of the surface only
    this._GlyphSurfaceCellSize = ( this._GlyphSurfaceSize / 
                                   this._GlyphSurfaceCells ) | 0;

    // Default background for the surfaces
    gl.clearColor( 0.0, 0.0, 0.0, 0.0 );

    // CPU memory alignment for texture loading operations
    gl.pixelStorei( gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true );
    gl.pixelStorei( gl.UNPACK_ALIGNMENT, 1 );
  
    // Alpha-blending with premultiplied RGB channels
    gl.blendEquation( gl.FUNC_ADD );
    gl.blendFunc( gl.ONE, gl.ONE_MINUS_SRC_ALPHA );
    gl.disable( gl.BLEND );
    
    // Create the binary buffer where vertex data is stored. The buffer provides
    // space for: 14 vertices á { 10 x float and 1 x uint32 }.
    // The both views allows direct access to the float/color values.
    gl.vertexBuffer = new ArrayBuffer( 14 * 11 * 4 );
    gl.vertexCoords = new Float32Array( gl.vertexBuffer );
    gl.vertexColors = new Uint32Array( gl.vertexBuffer );

    // Unique namens to address vertex attributes within a shader program
    gl.ATTRIB_DST_POS = 0;
    gl.ATTRIB_SRC_POS = 1;
    gl.ATTRIB_SRC_CLR = 2;
    gl.ATTRIB_CLR_POS = 3;
    gl.ATTRIB_MSK_POS = 4;

    // Install and activate the vertex parameter arrays
    gl.bindBuffer( gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData( gl.ARRAY_BUFFER, gl.vertexBuffer, gl.STREAM_DRAW );
    gl.vertexAttribPointer( gl.ATTRIB_DST_POS, 2, gl.FLOAT, false, 11 * 4, 0 * 4 );
    gl.vertexAttribPointer( gl.ATTRIB_SRC_POS, 3, gl.FLOAT, false, 11 * 4, 2 * 4 );
    gl.vertexAttribPointer( gl.ATTRIB_SRC_CLR, 4, gl.UNSIGNED_BYTE, true, 
                                                                   11 * 4, 5 * 4 );
    gl.vertexAttribPointer( gl.ATTRIB_CLR_POS, 3, gl.FLOAT, false, 11 * 4, 6 * 4 );
    gl.vertexAttribPointer( gl.ATTRIB_MSK_POS, 2, gl.FLOAT, false, 11 * 4, 9 * 4 );

    gl.enableVertexAttribArray( gl.ATTRIB_DST_POS );
    gl.enableVertexAttribArray( gl.ATTRIB_SRC_POS );
    gl.enableVertexAttribArray( gl.ATTRIB_SRC_CLR );
    gl.enableVertexAttribArray( gl.ATTRIB_CLR_POS );
    gl.enableVertexAttribArray( gl.ATTRIB_MSK_POS );
    
    // Create and initialize the glyph cache surface
    this._GlyphCacheTexture = gl.createTexture();
    gl.bindTexture( gl.TEXTURE_2D, this._GlyphCacheTexture );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S,     gl.CLAMP_TO_EDGE );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T,     gl.CLAMP_TO_EDGE );

    // Reserve video memory for the glyph cache texture.
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.ALPHA, this._GlyphSurfaceSize, 
                   this._GlyphSurfaceSize, 0, gl.ALPHA, gl.UNSIGNED_BYTE, null );

    // Create and initialize the glyph cache surface allocation map.
    this._GlyphCacheSurfaceMap = new Uint32Array( this._GlyphSurfaceCells *
                                                  this._GlyphSurfaceCells / 32 );

    // Setup the main (framebuffer) destination surface
    surface.Framebuffer   = gl.getParameter( gl.FRAMEBUFFER_BINDING );
    surface.Format        = this._PIXEL_FORMAT_NATIVE;
    surface.Width         = canvas.width;
    surface.Height        = canvas.height;
    surface.RealWidth     = canvas.width;
    surface.RealHeight    = canvas.height;
    surface.InvRealWidth  = 1 / canvas.width;
    surface.InvRealHeight = 1 / canvas.height;
    surface.InvDstWidth   = 2 / canvas.width;
    surface.InvDstHeight  = 2 / canvas.height;
    surface.Texture       = null;
    
    // Setup the main (framebuffer) destination bitmap. It covers the previously 
    // created surface instance
    bitmap.Format     = this._PIXEL_FORMAT_NATIVE;
    bitmap.Surfaces   = [ surface ];
    bitmap.FrameSize  = [ canvas.width, canvas.height ];
    bitmap.FrameDelay = 0;
    bitmap.NoOfFrames = 1;
    bitmap.Frames     = [{ Surface:bitmap.Surfaces[0], Origin:[ 0, 0 ]}];
    
    // Try to compile and link programms
    if ( !MakePrograms( gl ))
    {
      console.log( "EmWi error: WebGL initialization failed." );
      return false;
    }

    // Print evtl. WebGL errors
    if ( this._Debug )
      PrintWebGLErrors( gl );

    // The default settings of the coordinate transformation matrix.
    gl.DstMatrix = [ 0, 0, 0, -1,   0, 0, 0, -1,   0, 0, 0, 0,   0, 0, 0, 1 ];

    // Make the canvas and the GL context visible for the application to create
    this._Canvas      = canvas;
    this._Context     = gl;
    this._Framebuffer = bitmap;

    // Create an instance of the EmWi application
    try
    {
      this._Application = this._NewObject( appClass, 0 );
      this._Application.Initialize( this._ScreenSize );
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" );
      this._Done();
      
      // Initialization failed
      return false;
    }
    
    // Wrapper function for incomming user inputs
    function mouseDownHandler ( aEvent ) { thisApp._OnMouseDown ( aEvent ); }
    function mouseUpHandler   ( aEvent ) { thisApp._OnMouseUp   ( aEvent ); }
    function mouseMoveHandler ( aEvent ) { thisApp._OnMouseMove ( aEvent ); }
    function touchStartHandler( aEvent ) { thisApp._OnTouchStart( aEvent ); }
    function touchEndHandler  ( aEvent ) { thisApp._OnTouchEnd  ( aEvent ); }
    function touchMoveHandler ( aEvent ) { thisApp._OnTouchMove ( aEvent ); }
    function keyHandler       ( aEvent ) { thisApp._OnKeyEvent  ( aEvent ); }
    function blurHandler      ( aEvent ) { thisApp._OnBlur      ( aEvent ); }
    
    // Remember which handler function will be added as event listener to the
    // canvas element. This is essential when the handler are removed again
    // in the _Done() function.
    this._MouseDownHandler  = mouseDownHandler; 
    this._MouseUpHandler    = mouseUpHandler;
    this._MouseMoveHandler  = mouseMoveHandler;
    this._TouchStartHandler = touchStartHandler;
    this._TouchEndHandler   = touchEndHandler;
    this._TouchMoveHandler  = touchMoveHandler;
    this._KeyHandler        = keyHandler;
    this._BlurHandler       = blurHandler;

    // Ensure, that the canvas element can feed the EmWi application with user
    // input events
    canvas.addEventListener( "mousedown",   mouseDownHandler,  true  );
    canvas.addEventListener( "mousemove",   mouseMoveHandler,  false );
    canvas.addEventListener( "mouseout",    mouseMoveHandler,  false );
    canvas.addEventListener( "touchstart",  touchStartHandler, true  );
    canvas.addEventListener( "touchend",    touchEndHandler,   false );
    canvas.addEventListener( "touchcancel", touchEndHandler,   false );
    canvas.addEventListener( "touchmove",   touchMoveHandler,  false );
    canvas.addEventListener( "keydown",     keyHandler,        true  );
    canvas.addEventListener( "keyup",       keyHandler,        false );
    canvas.addEventListener( "keypress",    keyHandler,        false );
    canvas.addEventListener( "blur",        blurHandler,       false );
    
    // Finished. Ensure that the application object is not reclaimed by the
    // garbage collection and request the initial update
    this._RequestUpdate();
    this._RequestReclaim();
    this._LockObject( this._Application );

    // Finally focus the canvas element, so it can receive keyboard inputs
    canvas.focus();
    
    // All ok
    return true;
  };
  
  // ---------------------------------------------------------------------------
  // The Done() function deinitializes the EmWi application, stops all timers
  // and removes all event handlers registered by the associated canvas element.
  // ---------------------------------------------------------------------------
  emwi._Done = function()
  {
    // Trace the deinitialization
    if ( this._Debug )
      console.log( "EmWi debug: De-Initializing application '" + 
                   this._ApplicationClass()._className + "'." );

    // First disable all event sources
    if ( this._Canvas && this._MouseDownHandler )
    {
      var canvas = this._Canvas;

      canvas.removeEventListener( "mousedown",   this._MouseDownHandler,  true  );
      canvas.removeEventListener( "mousemove",   this._MouseMoveHandler,  false );
      canvas.removeEventListener( "mouseout",    this._MouseMoveHandler,  false );
      canvas.removeEventListener( "touchstart",  this._TouchStartHandler, true  );
      canvas.removeEventListener( "touchend",    this._TouchEndHandler,   false );
      canvas.removeEventListener( "touchcancel", this._TouchEndHandler,   false );
      canvas.removeEventListener( "touchmove",   this._TouchMoveHandler,  false );
      canvas.removeEventListener( "keydown",     this._KeyHandler,        true  );
      canvas.removeEventListener( "keyup",       this._KeyHandler,        false );
      canvas.removeEventListener( "keypress",    this._KeyHandler,        false );
      document.removeEventListener( "mousemove", this._MouseMoveHandler,  true  );
      document.removeEventListener( "mouseup",   this._MouseUpHandler,    true  );
      
      // After removing them discard all handler functions
      delete this._MouseDownHandler;
      delete this._MouseUpHandler;
      delete this._MouseMoveHandler;
      delete this._TouchStartHandler;
      delete this._TouchEndHandler;
      delete this._TouchMoveHandler;
      delete this._KeyHandler;
    }

    // Shutdown the WebGL subsystem
    if ( this._Context )
    {
      SelectSrc( this._Context, null, false );
      SelectMsk( this._Context, null, false );
      SelectDst( this._Context, null, null );

      // Clear the canvas area before terminating the deinitialization?
      this._Context.clear( this._Context.COLOR_BUFFER_BIT );

      // Ensure all operations are done
      this._Context.flush();
      this._Context.finish();

      // Destroy the shader programs
      this._Context.Program0   = null;
      this._Context.Program1   = null;
      this._Context.Program2   = null;
      this._Context.Program3   = null;
      this._Context.Program4   = null;
      this._Context.Program5   = null;
      this._Context.Program6   = null;
      this._Context.Program7   = null;
      this._Context.Program8   = null;
      this._Context.Program9   = null;
      this._Context.ProgramA   = null;
      this._Context.ProgramB   = null;
      this._Context.ProgramC   = null;
      this._Context.ProgramD   = null;
      this._Context.ProgramE   = null;
      this._Context.ProgramL1  = null;
      this._Context.ProgramL2  = null;
      this._Context.ProgramL3  = null;
      this._Context.ProgramL7  = null;
      this._Context.ProgramL8  = null;
      this._Context.ProgramM1  = null;
      this._Context.ProgramM2  = null;
      this._Context.ProgramM3  = null;
      this._Context.ProgramM7  = null;
      this._Context.ProgramM8  = null;
      this._Context.ProgramN0  = null;
      this._Context.ProgramN1  = null;
      this._Context.ProgramN2  = null;
      this._Context.ProgramN3  = null;
      this._Context.ProgramR0  = null;
      this._Context.ProgramR1  = null;
      this._Context.ProgramR2  = null;
      this._Context.ProgramR3  = null;
      this._Context.ProgramR7  = null;
      this._Context.ProgramR8  = null;
      this._Context.ProgramS0  = null;
      this._Context.ProgramS1  = null;
      this._Context.ProgramS2  = null;
      this._Context.ProgramS3  = null;
      this._Context.ProgramS7  = null;
      this._Context.ProgramS8  = null;
      this._Context.ProgramU0  = null;
      this._Context.ProgramU1  = null;
      this._Context.ProgramU2  = null;
      this._Context.ProgramU3  = null;
      this._Context.ProgramU7  = null;
      this._Context.ProgramU8  = null;
      this._Context.ProgramNR  = null;
      this._Context.ProgramNS  = null;
      this._Context.ProgramNU  = null;
      this._Context.ProgramL1C = null;
      this._Context.ProgramL2C = null;
      this._Context.ProgramL3C = null;
      this._Context.ProgramL7C = null;
      this._Context.ProgramL8C = null;
      this._Context.ProgramM1C = null;
      this._Context.ProgramM2C = null;
      this._Context.ProgramM3C = null;
      this._Context.ProgramM7C = null;
      this._Context.ProgramM8C = null;
      this._Context.ProgramR1C = null;
      this._Context.ProgramR2C = null;
      this._Context.ProgramR3C = null;
      this._Context.ProgramR7C = null;
      this._Context.ProgramR8C = null;
      this._Context.ProgramS1C = null;
      this._Context.ProgramS2C = null;
      this._Context.ProgramS3C = null;
      this._Context.ProgramS7C = null;
      this._Context.ProgramS8C = null;
      this._Context.ProgramU1C = null;
      this._Context.ProgramU2C = null;
      this._Context.ProgramU3C = null;
      this._Context.ProgramU7C = null;
      this._Context.ProgramU8C = null;

      // Test the WebGL error state
      PrintWebGLErrors( this._Context );
    }

    // Clean up all glyph caches
    while ( this._GlyphCacheHead )
      UncacheGlyph( this, this._GlyphCacheHead );

    // Forget the used canvas element and discard all pending signals
    this._GlyphCacheTexture    = null;
    this._GlyphCacheSurfaceMap = null;
    this._GlyphCacheHead       = null;
    this._GlyphCacheTail       = null;
    this._Framebuffer          = null;
    this._Context              = null;
    this._Canvas               = null;
    this._PostSignals          = null;
    this._IdleSignals          = null;
    
    // Make the application object discardable
    if ( this._Application )
      this._UnlockObject( this._Application );
    this._Application = null;

    // Release all resources
    try
    {
      this._ReclaimMemory();
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" );
    }
    
    // Print some debug information
    if ( this._Debug )
      console.log( "EmWi debug: " + this._NoOfObjects + 
                   " objects after the final GC run." );

    // Restore the default values for internally used variables. Theoretically
    // the EmWi application can be restarted again
    this._RootSet       = [];
    this._Objects       = null;
    this._NoOfObjects   = 0;
    this._Cycle         = 0;
    this._NeedsUpdate   = false;
    this._NeedsReclaim  = false;
    this._MouseCaptured = false;
  };

  // ---------------------------------------------------------------------------
  // The function MoveRectPos() adjusts the position of the rectangle aRect by
  // the specified amount aOffset in the positive direction.
  //
  // MoveRectPos() implements the Chora instant operator: 'rect + point'.
  // ---------------------------------------------------------------------------
  emwi._MoveRectPos = function( aRect, aOffset )
  {
    return [ aRect[0] + aOffset[0], aRect[1] + aOffset[1],
             aRect[2] + aOffset[0], aRect[3] + aOffset[1]];
  };

  // ---------------------------------------------------------------------------
  // The function MoveRectNeg() adjusts the position of the rectangle aRect by
  // the specified amount aOffset in the negative direction.
  //
  // MoveRectNeg() implements the Chora instant operator: 'rect - point'.
  // ---------------------------------------------------------------------------
  emwi._MoveRectNeg = function( aRect, aOffset )
  {
    return [ aRect[0] - aOffset[0], aRect[1] - aOffset[1],
             aRect[2] - aOffset[0], aRect[3] - aOffset[1]];
  };
  
  // ---------------------------------------------------------------------------
  // The function IntersectRect() retrieves a rectangle that represents the 
  // intersecting area of two specified rectangles aRect1 and aRect2.
  //
  // IntersectRect() implements the Chora instant operator: 'rect & rect'.
  // ---------------------------------------------------------------------------
  emwi._IntersectRect = function( aRect1, aRect2 )
  {
    var x11 = aRect1[0];
    var y11 = aRect1[1];
    var x12 = aRect1[2];
    var y12 = aRect1[3];
    var x21 = aRect2[0];
    var y21 = aRect2[1];
    var x22 = aRect2[2];
    var y22 = aRect2[3];

    // Empty rectangle? (rectangle with zero or negative width/height)
    if ( x12 <= x11 ) x11 = x12 = 0;
    if ( y12 <= y11 ) y11 = y12 = 0;
    if ( x22 <= x21 ) x21 = x22 = 0;
    if ( y22 <= y21 ) y21 = y22 = 0;

    if ( x11 < x21 ) x11 = x21;
    if ( x12 > x22 ) x12 = x22;
    if ( y11 < y21 ) y11 = y21;
    if ( y12 > y22 ) y12 = y22;

    // Is the result empty too?
    if ( x12 <= x11 ) x11 = x12 = 0;
    if ( y12 <= y11 ) y11 = y12 = 0;

    return [ x11, y11, x12, y12 ];
  };
  
  // ---------------------------------------------------------------------------
  // The function IntersectRect2() retrieves a rectangle that represents the 
  // intersecting area of two specified rectangles aRect1 and aRect2.
  // Unlike the function IntersectRect(), empty rectangles are ignored. If one
  // of the passed rectangles aRect1 or aRect2 is empty, no intersection is 
  // build and the function returns the other rectangle immediately.
  //
  // IntersectRect2() implements the Chora instant operator: 'rect && rect'.
  // ---------------------------------------------------------------------------
  emwi._IntersectRect2 = function( aRect1, aRect2 )
  {
    var x11 = aRect1[0];
    var y11 = aRect1[1];
    var x12 = aRect1[2];
    var y12 = aRect1[3];
    var x21 = aRect2[0];
    var y21 = aRect2[1];
    var x22 = aRect2[2];
    var y22 = aRect2[3];

    // Empty rectangle? (rectangle with zero or negative width/height)
    if ( x12 <= x11 ) x11 = x12 = 0;
    if ( y12 <= y11 ) y11 = y12 = 0;
    if ( x22 <= x21 ) x21 = x22 = 0;
    if ( y22 <= y21 ) y21 = y22 = 0;

    // If the first rectangle is empty - do not intersect with them!
    if (( x11 === x12 ) || ( y11 === y12 ))
      return aRect2;

    // If the second rectangle is empty - do not intersect with them!
    if (( x21 === x22 ) || ( y21 === y22 ))
      return aRect1;

    if ( x11 < x21 ) x11 = x21;
    if ( x12 > x22 ) x12 = x22;
    if ( y11 < y21 ) y11 = y21;
    if ( y12 > y22 ) y12 = y22;

    // Is the result empty too?
    if ( x12 <= x11 ) x11 = x12 = 0;
    if ( y12 <= y11 ) y11 = y12 = 0;

    return [ x11, y11, x12, y12 ];
  };
  
  // ---------------------------------------------------------------------------
  // The function UnionRect() retrieves a rectangle that represents the smallest
  // rectangle that contains two specified rectangular areas aRect1 and aRect2.
  // If one of the passed rectangles aRect1 or aRect2 is empty, no union is 
  // build and the function returns the other rectangle immediately.
  //
  // UnionRect() implements the Chora instant operator: 'rect | rect'.
  // ---------------------------------------------------------------------------
  emwi._UnionRect = function( aRect1, aRect2 )
  {
    var x11 = aRect1[0];
    var y11 = aRect1[1];
    var x12 = aRect1[2];
    var y12 = aRect1[3];
    var x21 = aRect2[0];
    var y21 = aRect2[1];
    var x22 = aRect2[2];
    var y22 = aRect2[3];

    // Empty rectangle? (rectangle with zero or negative width/height)
    if ( x12 <= x11 ) x11 = x12 = 0;
    if ( y12 <= y11 ) y11 = y12 = 0;
    if ( x22 <= x21 ) x21 = x22 = 0;
    if ( y22 <= y21 ) y21 = y22 = 0;

    // If the first rectangle is empty - do not build an union with them!
    if (( x11 === x12 ) || ( y11 === y12 ))
      return aRect2;

    // If the second rectangle is empty - do not build an union with them!
    if (( x21 === x22 ) || ( y21 === y22 ))
      return aRect1;

    if ( x11 > x21 ) x11 = x21;
    if ( x12 < x22 ) x12 = x22;
    if ( y11 > y21 ) y11 = y21;
    if ( y12 < y22 ) y12 = y22;

    // Is the result empty too?
    if ( x12 <= x11 ) x11 = x12 = 0;
    if ( y12 <= y11 ) y11 = y12 = 0;

    return [ x11, y11, x12, y12 ];
  };
  
  // ---------------------------------------------------------------------------
  // The function InflateRect() inflates the rectangle aRect by moving its sides
  // away from its center. To do this, InflateRect() subtracts units from the
  // top-left point and adds units to the bottom-right point of aRect.
  // InflateRect() implements the Chora instant operator: 'rect * point'.
  // ---------------------------------------------------------------------------
  emwi._InflateRect = function( aRect, aDelta )
  {
    return [ aRect[0] - aDelta[0], aRect[1] - aDelta[1],
             aRect[2] + aDelta[0], aRect[3] + aDelta[1]];
  };

  // ---------------------------------------------------------------------------
  // The function SetRectY1() changes the y1 coordinate of the given rectangle
  // aRect. This corresponds to the write access to the Chora instant property
  // 'rect.y1'.
  // ---------------------------------------------------------------------------
  emwi._SetRectY1 = function( aRect, aY1 )
  {
    return [ aRect[0], aY1, aRect[2], aRect[3]];
  };
  
  // ---------------------------------------------------------------------------
  // The function SetRectX2() changes the x2 coordinate of the given rectangle
  // aRect. This corresponds to the write access to the Chora instant property
  // 'rect.x2'.
  // ---------------------------------------------------------------------------
  emwi._SetRectX2 = function( aRect, aX2 )
  {
    return [ aRect[0], aRect[1], aX2, aRect[3]];
  };
  
  // ---------------------------------------------------------------------------
  // The function SetRectX() changes the origin of the given rectangle aRect.
  // The size of the rectangle, however, remains the same. This corresponds to
  // the write access to the Chora instant property 'rect.x'.
  // ---------------------------------------------------------------------------
  emwi._SetRectX = function( aRect, aX )
  {
    return [ aX, aRect[1], aX + aRect[2] - aRect[0], aRect[3]];
  };
  
  // ---------------------------------------------------------------------------
  // The function SetRectY() changes the origin of the given rectangle aRect.
  // The size of the rectangle, however, remains the same. This corresponds to
  // the write access to the Chora instant property 'rect.y'.
  // ---------------------------------------------------------------------------
  emwi._SetRectY = function( aRect, aY )
  {
    return [ aRect[0], aY, aRect[2], aY + aRect[3] - aRect[1]];
  };
  
  // ---------------------------------------------------------------------------
  // The function SetRectW() changes the size of the given rectangle aRect. The
  // origin of the rectangle, however, remains the same. This corresponds to the
  // write access to the Chora instant property 'rect.w'.
  // ---------------------------------------------------------------------------
  emwi._SetRectW = function( aRect, aW )
  {
    return [ aRect[0], aRect[1], aRect[0] + aW, aRect[3]];
  };
  
  // ---------------------------------------------------------------------------
  // The function SetRectH() changes the size of the given rectangle aRect. The
  // origin of the rectangle, however, remains the same. This corresponds to the
  // write access to the Chora instant property 'rect.h'.
  // ---------------------------------------------------------------------------
  emwi._SetRectH = function( aRect, aH )
  {
    return [ aRect[0], aRect[1], aRect[2], aRect[1] + aH ];
  };
  
  // ---------------------------------------------------------------------------
  // The function SetRectOrigin() changes the origin of the given rectangle
  // aRect. The size of the rectangle, however, remains the same. This
  // corresponds to the write access to the Chora instant property 'rect.origin'.
  // ---------------------------------------------------------------------------
  emwi._SetRectOrigin = function( aRect, aOrigin )
  {
    return [ aOrigin[0], aOrigin[1], aOrigin[0] + aRect[2] - aRect[0],
             aOrigin[1] + aRect[3] - aRect[1]];
  };
  
  // ---------------------------------------------------------------------------
  // The function SetRectSize() changes the size of the given rectangle aRect.
  // The origin of the rectangle, however, remains the same. This corresponds to
  // the write access to the Chora instant property 'rect.size'.
  // ---------------------------------------------------------------------------
  emwi._SetRectSize = function( aRect, aSize )
  {
    return [ aRect[0], aRect[1], aRect[0] + aSize[0], aRect[1] + aSize[1]];
  };
  
  // ---------------------------------------------------------------------------
  // The function IsEqualRect() compares the both given rectangles aRect1 and 
  // aRect2 and returns 'true' if the rectangles are identical. Otherwise the
  // function returns a value == 'false'.
  //
  // IsEqualRect() implements the Chora instant operators: 'rect == rect' and
  // 'rect != rect'.
  // ---------------------------------------------------------------------------
  emwi._IsEqualRect = function( aRect1, aRect2 )
  {
    return ( aRect1[0] === aRect2[0]) && 
           ( aRect1[1] === aRect2[1]) &&
           ( aRect1[2] === aRect2[2]) &&
           ( aRect1[3] === aRect2[3]);
  };
  
  // ---------------------------------------------------------------------------
  // The function IsPointInRect() determines whether the specified point lies 
  // within a rectangle. A point is within a rectangle if it lies on the left or
  // top side or is within all four sides. A point on the right or bottom side 
  // is outside a rectangle.
  //
  // IsPointInRect() implements the Chora instant operator: 'rect == point'.
  // ---------------------------------------------------------------------------
  emwi._IsPointInRect = function( aRect, aPoint )
  {
    if (( aPoint[0] < aRect[0]) || ( aPoint[0] >= aRect[2])) return false;
    if (( aPoint[1] < aRect[1]) || ( aPoint[1] >= aRect[3])) return false;
    
    return true;
  };
 
  // ---------------------------------------------------------------------------
  // The function GetRectArea() calculates the area of the rectangle. The
  // function multiplies the width with the height of the rectangle.
  //
  // GetRectArea() implements the read access to the Chora instant property:
  // 'rect.area'.
  // ---------------------------------------------------------------------------
  emwi._GetRectArea = function( aRect )
  {
    return ( aRect[2] - aRect[0]) * 
           ( aRect[3] - aRect[1]);
  };
  
  // ---------------------------------------------------------------------------
  // The function GetRectCenter() calculates the coordinates of the point in the
  // center of the given rectangle.
  //
  // GetRectCenter() implements the read access to the Chora instant property:
  // 'rect.center'.
  // ---------------------------------------------------------------------------
  emwi._GetRectCenter = function( aRect )
  {
    var x = aRect[0];
    var y = aRect[1];

    return [ x + (( aRect[2] - x ) >> 1 ), y + (( aRect[3] - y ) >> 1 )];
  };

  // ---------------------------------------------------------------------------
  // The function GetRectAbs() implements the Chora rect.abs instant property.
  // ---------------------------------------------------------------------------
  emwi._GetRectAbs = function( aRect )
  {
    return [ Math.abs( aRect[0]), Math.abs( aRect[1]), Math.abs( aRect[2]), 
             Math.abs( aRect[3])];
  };
  
  // ---------------------------------------------------------------------------
  // The function GetRectMin() implements the Chora math_min() function.
  // ---------------------------------------------------------------------------
  emwi._GetRectMin = function()
  {
    var count = arguments.length;
    var value = arguments[0];
    
    value = [ value[0], value[1], value[2], value[3]];

    // Iterate over the passed values
    for ( var i = 1; i < count; i++ )
    {
      var tmp = arguments[i];

      if ( tmp[0] < value[0]) value[0] = tmp[0];
      if ( tmp[1] < value[1]) value[1] = tmp[1];
      if ( tmp[2] < value[2]) value[2] = tmp[2];
      if ( tmp[3] < value[3]) value[3] = tmp[3];
    }
    
    return value;
  };

  // ---------------------------------------------------------------------------
  // The function GetRectMax() implements the Chora math_max() function.
  // ---------------------------------------------------------------------------
  emwi._GetRectMax = function()
  {
    var count = arguments.length;
    var value = arguments[0];
    
    value = [ value[0], value[1], value[2], value[3]];

    // Iterate over the passed values
    for ( var i = 1; i < count; i++ )
    {
      var tmp = arguments[i];

      if ( tmp[0] > value[0]) value[0] = tmp[0];
      if ( tmp[1] > value[1]) value[1] = tmp[1];
      if ( tmp[2] > value[2]) value[2] = tmp[2];
      if ( tmp[3] > value[3]) value[3] = tmp[3];
    }
    
    return value;
  };

  // ---------------------------------------------------------------------------
  // The function MovePointPos() adjusts the position of the point aPoint by the
  // specified amount aOffset in the negative direction.
  //
  // MovePointPos() implements the Chora instant operator: 'point + point'.
  // ---------------------------------------------------------------------------
  emwi._MovePointPos = function( aPoint, aOffset )
  {
    return [ aPoint[0] + aOffset[0], aPoint[1] + aOffset[1]];
  };

  // ---------------------------------------------------------------------------
  // The function MovePointNeg() adjusts the position of the point aPoint by the
  // specified amount aOffset in the negative direction.
  //
  // MovePointNeg() implements the Chora instant operator: 'point - point'.
  // ---------------------------------------------------------------------------
  emwi._MovePointNeg = function( aPoint, aOffset )
  {
    return [ aPoint[0] - aOffset[0], aPoint[1] - aOffset[1]];
  };
  
  // ---------------------------------------------------------------------------
  // The function IsEqualPoint() compares the both given points aPoint1 and 
  // aPoint2 and returns a value 'true' if the points are identical. Otherwise
  // the function returns a value 'false'.
  //
  // IsEqualPoint() implements the Chora instant operators: 'point == point' and
  // 'point != point'.
  // ---------------------------------------------------------------------------
  emwi._IsEqualPoint = function( aPoint1, aPoint2 )
  {
    return ( aPoint1[0] === aPoint2[0]) && 
           ( aPoint1[1] === aPoint2[1]);
  };
  
  // ---------------------------------------------------------------------------
  // The function GetPointAbs() implements the Chora point.abs instant property.
  // ---------------------------------------------------------------------------
  emwi._GetPointAbs = function( aPoint )
  {
    return [ Math.abs( aPoint[0]), Math.abs( aPoint[1])];
  };
  
  // ---------------------------------------------------------------------------
  // The function GetPointMin() implements the Chora math_min() function.
  // ---------------------------------------------------------------------------
  emwi._GetPointMin = function()
  {
    var count = arguments.length;
    var value = arguments[0];

    value = [ value[0], value[1]];
    
    // Iterate over the passed values
    for ( var i = 1; i < count; i++ )
    {
      var tmp = arguments[i];

      if ( tmp[0] < value[0]) value[0] = tmp[0];
      if ( tmp[1] < value[1]) value[1] = tmp[1];
    }
    
    return value;
  };

  // ---------------------------------------------------------------------------
  // The function GetPointMax() implements the Chora math_max() function.
  // ---------------------------------------------------------------------------
  emwi._GetPointMax = function()
  {
    var count = arguments.length;
    var value = arguments[0];

    value = [ value[0], value[1]];
    
    // Iterate over the passed values
    for ( var i = 1; i < count; i++ )
    {
      var tmp = arguments[i];

      if ( tmp[0] > value[0]) value[0] = tmp[0];
      if ( tmp[1] > value[1]) value[1] = tmp[1];
    }
    
    return value;
  };

  // ---------------------------------------------------------------------------
  // The function PlusColor() adds two colors aColor1 + aColor2. The addition
  // will be done for each color component separately. In the case the addition
  // results in a value > 255, PlusColor() adjusts the value automatically to
  // 255.
  //
  // PlusColor() implements the Chora instant operator: 'color + color'
  // ---------------------------------------------------------------------------
  emwi._PlusColor = function( aColor1, aColor2 )
  {
    var r =  ( aColor1         & 0xFF ) +  ( aColor2         & 0xFF );
    var g = (( aColor1 >> 8  ) & 0xFF ) + (( aColor2 >> 8  ) & 0xFF );
    var b = (( aColor1 >> 16 ) & 0xFF ) + (( aColor2 >> 16 ) & 0xFF );
    var a = (( aColor1 >> 24 ) & 0xFF ) + (( aColor2 >> 24 ) & 0xFF );
    
    // Saturation
    if ( r > 255 ) r = 255;
    if ( g > 255 ) g = 255;
    if ( b > 255 ) b = 255;
    if ( a > 255 ) a = 255;

    return r | ( g << 8 ) | ( b << 16 ) | ( a << 24 );
  };
  
  // ---------------------------------------------------------------------------
  // The function MinusColor() subtracts two colors aColor1 - aColor2. The 
  // substraction will be done for each color component separately. In the case
  // the substraction results in a value < 0, MinusColor() adjusts the value
  // automatically to 0 (zero).
  //
  // MinusColor() implements the Chora instant operator: 'color - color'
  // ---------------------------------------------------------------------------
  emwi._MinusColor = function( aColor1, aColor2 )
  {
    var r =  ( aColor1         & 0xFF ) -  ( aColor2         & 0xFF );
    var g = (( aColor1 >> 8  ) & 0xFF ) - (( aColor2 >> 8  ) & 0xFF );
    var b = (( aColor1 >> 16 ) & 0xFF ) - (( aColor2 >> 16 ) & 0xFF );
    var a = (( aColor1 >> 24 ) & 0xFF ) - (( aColor2 >> 24 ) & 0xFF );
    
    // Saturation
    if ( r < 0 ) r = 0;
    if ( g < 0 ) g = 0;
    if ( b < 0 ) b = 0;
    if ( a < 0 ) a = 0;

    return r | ( g << 8 ) | ( b << 16 ) | ( a << 24 );
  };
  
  // ---------------------------------------------------------------------------
  // The function BlendColor() implements an alphablending algorithm to blend
  // one color aColor1 with the second color aColor2. The alpha component of
  // aColor2 decides about the intensity of the alpha blending. If the alpha
  // component of aColor2 is 0 (zero), the function returns an unchanged value
  // aColor1. If the alpha component of aColor2 == 255, the function returns the
  // value aColor2. In all other cases, the function returns a mix-color of the
  // both colors.
  //
  // BlendColor() implements the Chora instant operator: 'color * color'
  // ---------------------------------------------------------------------------
  emwi._BlendColor = function( aColor1, aColor2 )
  {
    var r  =  ( aColor2         & 0xFF );
    var g  = (( aColor2 >> 8  ) & 0xFF );
    var b  = (( aColor2 >> 16 ) & 0xFF );
    var a  = (( aColor2 >> 24 ) & 0xFF );
    var na = 255 - a;

    r = (( r * a ) +  (( aColor1         & 0xFF ) * na )) / 255;
    g = (( g * a ) + ((( aColor1 >>  8 ) & 0xFF ) * na )) / 255;
    b = (( b * a ) + ((( aColor1 >> 16 ) & 0xFF ) * na )) / 255;
    a = 255 - (( na * ( 255 - (( aColor1 >> 24 ) & 0xFF ))) / 255 );

    // Saturation
    if ( r > 255 ) r = 255;
    if ( g > 255 ) g = 255;
    if ( b > 255 ) b = 255;
    if ( a > 255 ) a = 255;

    return r | ( g << 8 ) | ( b << 16 ) | ( a << 24 );
  };
  
  // ---------------------------------------------------------------------------
  // The function BlendColorInt() implements an alphablending algorithm to blend
  // the color aColor with the value aAlpha. This function applies the alpha
  // blending algorithm on all 4 color components of the given color.
  //
  // BlendColorInt() implements the Chora instant operator: 'color * int32',
  // 'int32 * color', 'color * uint32' and 'uint32 * color'.
  // ---------------------------------------------------------------------------
  emwi._BlendColorInt = function( aColor, aAlpha )
  {
    var r =  ( aColor         & 0xFF );
    var g = (( aColor >> 8  ) & 0xFF );
    var b = (( aColor >> 16 ) & 0xFF );
    var a = (( aColor >> 24 ) & 0xFF );

    // Is aAlpha valid?
    if ( aAlpha <   0 ) aAlpha = 0;
    if ( aAlpha > 255 ) aAlpha = 255;

    r = ( r * aAlpha ) / 255;
    g = ( g * aAlpha ) / 255;
    b = ( b * aAlpha ) / 255;
    a = ( a * aAlpha ) / 255;

    return r | ( g << 8 ) | ( b << 16 ) | ( a << 24 );
  };

  // ---------------------------------------------------------------------------
  // The function GetColorMin() implements the Chora math_min() function.
  // ---------------------------------------------------------------------------
  emwi._GetColorMin = function()
  {
    var count = arguments.length;
    var value = arguments[0];
    var v1    = value & 0x000000FF;
    var v2    = value & 0x0000FF00;
    var v3    = value & 0x00FF0000;
    var v4    = ( value >> 8 ) & 0x00FF0000;

    // Iterate over the passed values
    for ( var i = 1; i < count; i++ )
    {
      var tmp = arguments[i];
      var t1  = tmp & 0x000000FF;
      var t2  = tmp & 0x0000FF00;
      var t3  = tmp & 0x00FF0000;
      var t4  = ( tmp >> 8 ) & 0x00FF0000;

      if ( t1 < v1 ) v1 = t1;
      if ( t2 < v2 ) v2 = t2;
      if ( t3 < v3 ) v3 = t3;
      if ( t4 < v4 ) v4 = t4;
    }
    
    return v1 | v2 | v3 | ( v4 << 8 );
  };

  // ---------------------------------------------------------------------------
  // The function GetColorMax() implements the Chora math_max() function.
  // ---------------------------------------------------------------------------
  emwi._GetColorMax = function()
  {
    var count = arguments.length;
    var value = arguments[0];
    var v1    = value & 0x000000FF;
    var v2    = value & 0x0000FF00;
    var v3    = value & 0x00FF0000;
    var v4    = value & 0xFF000000;

    // Iterate over the passed values
    for ( var i = 1; i < count; i++ )
    {
      var tmp = arguments[i];
      var t1  = tmp & 0x000000FF;
      var t2  = tmp & 0x0000FF00;
      var t3  = tmp & 0x00FF0000;
      var t4  = tmp & 0xFF000000;

      if ( t1 > v1 ) v1 = t1;
      if ( t2 > v2 ) v2 = t2;
      if ( t3 > v3 ) v3 = t3;
      if ( t4 > v4 ) v4 = t4;
    }
    
    return v1 | v2 | v3 | v4;
  };

  // ---------------------------------------------------------------------------
  // The function NewStringUInt() converts the given unsigned number aValue in
  // a string and returns the result. The function adds leading zeros '0' until 
  // the resulted string has reached the length given in the aCount argument.
  //
  // NewStringUInt() implements the Chora instant constructor: 
  // 'string(aValue,aNoOfDigits,aRadix)'.
  // ---------------------------------------------------------------------------
  emwi._NewStringUInt = function( aValue, aCount, aRadix )
  {
    if (( aRadix !== 2 ) && ( aRadix !== 8 ) && ( aRadix !== 16 ))
      aRadix = 10;

    // Is aCount valid?
    if ( aCount > 128 ) aCount = 128;

    var tmp   = aValue.toString( aRadix );
    var zeros = aCount - tmp.length;
    
    if ( zeros > 0 )
      tmp = emwi._Zeros.slice( 0, zeros ) + tmp;
    
    return tmp;
  };
  
  // ---------------------------------------------------------------------------
  // The function NewStringInt() converts the given signed number aValue in a 
  // string and returns the result. The function adds leading zeros '0' until
  // the resulted string has reached the length given in the aCount argument.
  // If the number is negative, the function adds '-' minus sign.
  //
  // NewStringInt() implements the Chora instant constructor: 
  // 'string(aValue,aNoOfDigits,aRadix)'.
  // ---------------------------------------------------------------------------
  emwi._NewStringInt = function( aValue, aCount, aRadix )
  {
    if (( aRadix !== 2 ) && ( aRadix !== 8 ) && ( aRadix !== 16 ))
      aRadix = 10;

    var value = ( aValue < 0 )? -aValue : aValue;

    // Is aCount valid?
    if ( aCount > 128 ) aCount = 128;

    var tmp   = value.toString( aRadix );
    var zeros = aCount - tmp.length - (( aValue < 0 )? 1 : 0 );

    if ( zeros > 0 )
      tmp = emwi._Zeros.slice( 0, zeros ) + tmp;
    
    if ( aValue < 0 )
      return "-" + tmp;
    else
      return tmp;
  };
  
  // ---------------------------------------------------------------------------
  // The function NewStringFloat() converts the given floating point number
  // aValue in a string and returns the result. 
  //
  // NewStringFloat() implements the Chora instant constructor: 
  // 'string(aValue,aNoOfDigits,aPrecision)'.
  // ---------------------------------------------------------------------------
  emwi._NewStringFloat = function( aValue, aCount, aPrecision )
  {
    // Is aCount valid?
    if ( aCount < 0  ) aCount = 0;
    if ( aCount > 32 ) aCount = 32;

    // Is aPrecision valid?
    if ( aPrecision < 0  ) aPrecision = 0;
    if ( aPrecision > 32 ) aPrecision = 32;

    var sign  = ( aValue < 0 )? "-" : "";
    var tmp   = Math.abs( aValue ).toFixed( aPrecision );
    var zeros = aCount - tmp.length - sign.length;
    
    if ( zeros > 0 )
      tmp = emwi._Zeros.slice( 0, zeros ) + tmp;
    
    return sign + tmp;
  };
  
  // ---------------------------------------------------------------------------
  // The function NewStringChar() creates a string with the given length aCount
  // and fills the whole string with the character aChar.
  //
  // NewStringChar() implements the Chora instant constructor: 
  // 'string(aChar,aNoOfDigits)'.
  // ---------------------------------------------------------------------------
  emwi._NewStringChar = function( aChar, aCount )
  {
    aCount = Math.floor( aCount );

    if ( aCount <= 0 )
      return this._EmptyString;

    return new Array( aCount + 1 ).join( String.fromCharCode( aChar ));
  };
 
  // ---------------------------------------------------------------------------
  // The function StringLeft() extracts the first (that is, leftmost) aCount
  // characters from the string aString and returns a copy of the extracted 
  // substring. If aCount exceeds the string length, then the entire string is
  // extracted.
  //
  // StringLeft() implements the Chora instant method: 'string.left(aCount)'.
  // ---------------------------------------------------------------------------
  emwi._StringLeft = function( aString, aCount )
  {
    if ( aCount <= 0 )
      return this._EmptyString;

    if ( aCount >= aString.length )
      return aString;

    return aString.slice( 0, aCount | 0 );
  };
  
  // ---------------------------------------------------------------------------
  // The function StringRight() extracts the last (that is, rightmost) aCount 
  // characters from the string aString and returns a copy of the extracted 
  // substring. If aCount exceeds the string length, then the entire string is 
  // extracted. 
  //
  // StringRight() implements the Chora instant method: 'string.right(aCount)'.
  // ---------------------------------------------------------------------------
  emwi._StringRight = function( aString, aCount )
  {
    if ( aCount <= 0 )
      return this._EmptyString;

    if ( aCount >= aString.length )
      return aString;

    return aString.slice( -( aCount | 0 ));
  };
  
  // ---------------------------------------------------------------------------
  // The function StringMiddle() extracts a substring of length aCount 
  // characters from the string aString, starting at position aIndex. The
  // function returns a copy of the extracted substring.
  //
  // StringMiddle() implements the Chora instant method: 
  // 'string.middle(aIndex,aCount)'.
  // ---------------------------------------------------------------------------
  emwi._StringMiddle = function( aString, aIndex, aCount )
  {
    var start = ( aIndex > 0 )? ( aIndex | 0 ) : 0;
    var end   = ( aIndex + aCount ) | 0;
    var len   = aString.length;

    if (( start >= len ) || ( end <= 0 ) || ( start >= end ))
      return this._EmptyString;

    if (( start === 0 ) && ( end >= len ))
      return aString;

    return aString.slice( start, end );
  };
  
  // ---------------------------------------------------------------------------
  // The function StringInsert() inserts the substring aString2 at the given 
  // position aIndex within the string aString1. If aIndex is <= 0 zero, the 
  // insertion will occur before the entire string. If aIndex is > than the 
  // length of the string, the function will concatenate aString1 and aString2
  // together.
  //
  // StringInsert() implements the Chora instant method: 
  // 'string.insert(aString,aIndex)'
  // ---------------------------------------------------------------------------
  emwi._StringInsert = function( aString1, aString2, aIndex )
  {
    var size1 = aString1.length;
    var size2 = aString2.length;

    // Nothing to insert?
    if ( size2 <= 0 ) return aString1;

    // Nothing to insert to?
    if ( size1 <= 0 ) return aString2;

    // Outside the string
    if ( aIndex < 0      ) return aString2 + aString1;
    if ( aIndex >= size1 ) return aString1 + aString2;

    return aString1.slice( 0, ( aIndex |= 0 )) + aString2 + 
           aString1.slice( aIndex );
  };
  
  // ---------------------------------------------------------------------------
  // The function StringRemove() removes up to aCount characters from the string
  // aString starting with the character at position aIndex. 
  //
  // StringRemove() implements the Chora instant method: 
  // 'string.remove(aIndex,aCount)'
  // ---------------------------------------------------------------------------
  emwi._StringRemove = function( aString, aIndex, aCount )
  {
    var start = ( aIndex >= 0 )? ( aIndex | 0 ) : 0;
    var end   = ( aIndex + aCount ) | 0;
    var len   = aString.length;

    // Nothing to remove
    if (( start >= len ) || ( end <= 0 ) || ( start >= end ))
      return aString;

    return aString.slice( 0, start ) + aString.slice( end );
  };
 
  // ---------------------------------------------------------------------------
  // The function StringParseInt32() parses the string interpreting its content
  // as an integral number. The number can be prefixed by an optional +/- sign.
  // Whitespace signs lying at the begin of the string and eventually between 
  // the +/- sign and the first digit/letter are skipped over.
  //
  // The function parses the numbers according to the notation resulting from 
  // the parameter aRadix. In this manner strings with binary, octal, decimal
  // or even hexadecimal notation can be read.
  //
  // Generally the function tries to read as many signs as possible. If the end
  // of the string or an unexpected sign is found, the function stops and 
  // returns the already read number as signed integer value. If the string is
  // invalid (it doesn't contain any expected digit or letter), the value passed
  // in the parameter aDefault is returned instead.
  //
  // StringParseInt32() implements the Chora instant method: 
  // 'string.parse_int32(aDefault,aRadix)'
  // ---------------------------------------------------------------------------
  emwi._StringParseInt32 = function( aString, aDefault, aRadix )
  {
    if (( aRadix !== 2 ) && ( aRadix !== 8 ) && ( aRadix !== 16 ))
      aRadix = 10;

    var tmp = parseInt( aString, aRadix );

    if ( !isNaN( tmp ))
      return tmp;

    return aDefault;
  };
  
  // ---------------------------------------------------------------------------
  // The function StringParseUInt32() parses the string interpreting its content
  // as an integral number. The number can be prefixed by an optional +/- sign.
  // Whitespace signs lying at the begin of the string and eventually between 
  // the +/- sign and the first digit/letter are skipped over.
  //
  // The function parses the numbers according to the notation resulting from 
  // the parameter aRadix. In this manner strings with binary, octal, decimal
  // or even hexadecimal notation can be read.
  //
  // Generally the function tries to read as many signs as possible. If the end
  // of the string or an unexpected sign is found, the function stops and 
  // returns the already read number as unsigned integer value. If the string is
  // invalid (it doesn't contain any expected digit or letter), the value passed
  // in the parameter aDefault is returned instead.
  //
  // StringParseUInt32() implements the Chora instant method: 
  // 'string.parse_int32(aDefault,aRadix)'
  // ---------------------------------------------------------------------------
  emwi._StringParseUInt32 = function( aString, aDefault, aRadix )
  {
    if (( aRadix !== 2 ) && ( aRadix !== 8 ) && ( aRadix !== 16 ))
      aRadix = 10;

    var tmp = parseInt( aString, aRadix );

    if ( !isNaN( tmp ))
    {
      // Convert in 32-bit unsigned integer
      if ( tmp < 0 )
        tmp += 0x100000000;

      return tmp;
    }

    return aDefault;
  };
  
  // ---------------------------------------------------------------------------
  // The function StringParseInt64() parses the string interpreting its content
  // as an integral number. The number can be prefixed by an optional +/- sign.
  // Whitespace signs lying at the begin of the string and eventually between 
  // the +/- sign and the first digit/letter are skipped over.
  //
  // The function parses the numbers according to the notation resulting from 
  // the parameter aRadix. In this manner strings with binary, octal, decimal
  // or even hexadecimal notation can be read.
  //
  // Generally the function tries to read as many signs as possible. If the end
  // of the string or an unexpected sign is found, the function stops and 
  // returns the already read number as signed integer value. If the string is
  // invalid (it doesn't contain any expected digit or letter), the value passed
  // in the parameter aDefault is returned instead.
  //
  // StringParseInt64() implements the Chora instant method: 
  // 'string.parse_int64(aDefault,aRadix)'
  // ---------------------------------------------------------------------------
  emwi._StringParseInt64 = emwi._StringParseInt32;
  
  // ---------------------------------------------------------------------------
  // The function StringParseUInt64() parses the string interpreting its content
  // as an integral number. The number can be prefixed by an optional +/- sign.
  // Whitespace signs lying at the begin of the string and eventually between 
  // the +/- sign and the first digit/letter are skipped over.
  //
  // The function parses the numbers according to the notation resulting from 
  // the parameter aRadix. In this manner strings with binary, octal, decimal
  // or even hexadecimal notation can be read.
  //
  // Generally the function tries to read as many signs as possible. If the end
  // of the string or an unexpected sign is found, the function stops and 
  // returns the already read number as unsigned integer value. If the string is
  // invalid (it doesn't contain any expected digit or letter), the value passed
  // in the parameter aDefault is returned instead.
  //
  // StringParseUInt64() implements the Chora instant method: 
  // 'string.parse_int64(aDefault,aRadix)'
  // ---------------------------------------------------------------------------
  emwi._StringParseUInt64 = function( aString, aDefault, aRadix )
  {
    if (( aRadix !== 2 ) && ( aRadix !== 8 ) && ( aRadix !== 16 ))
      aRadix = 10;

    var tmp = parseInt( aString, aRadix );

    if ( !isNaN( tmp ))
    {
      // Convert in 64-bit unsigned integer
      if ( tmp < 0 )
        tmp += 0x10000000000000000; // ???

      return tmp;
    }

    return aDefault;
  };
  
  // ---------------------------------------------------------------------------
  // The function StringParseFloat() parses the string interpreting its content
  // as a floating point number. The number can be prefixed by an optional +/- 
  // sign. Whitespace signs lying at the begin of the string and eventually 
  // between the +/- sign and the first digit are skipped over. 
  //
  // In the floating point notation the number can consist of an integer and/or
  // a fractional portion. The fractional portion starts with a '.'. Optionally
  // the number can be followed by an exponent portion. The exponent portion
  // starts with the e or E sign followed by an optional +/- sign and an 
  // integral number. The following example shows the complete number with all
  // portions:
  //
  // "123.456e-07"
  //
  // Generally the function tries to read as many signs as possible. If the end
  // of the string or an unexpected sign is found, the function stops and 
  // returns the already read number as floating point value. If the string is
  // invalid (it doesn't contain any expected digit), the value passed in the
  // parameter aDefault is returned instead.
  //
  // StringParseFloat() implements the Chora instant method: 
  // 'string.parse_float(aDefault)'
  // ---------------------------------------------------------------------------
  emwi._StringParseFloat = function( aString, aDefault )
  {
    var tmp = parseFloat( aString );

    if ( !isNaN( tmp ))
      return tmp;

    return aDefault;
  };

  // ---------------------------------------------------------------------------
  // The function SetStringChar() changes the character stored at position 
  // aIndex in the string aString to a new value aChar. The function returns the
  // unmodified string if the desired character position aIndex is not valid.
  //
  // SetStringChar() implements the write access to Chora instant operator: 
  // 'string[aIndex]'
  // ---------------------------------------------------------------------------
  emwi._SetStringChar = function( aString, aIndex, aChar )
  {
    if (( aIndex < 0 ) || ( aIndex >= aString.length ))
      return aString;

    return aString.slice( 0, aIndex ) + String.fromCharCode( aChar ) +
           aString.slice( aIndex + 1 );
  };

  // ---------------------------------------------------------------------------
  // The function IsEqualRef() compares the given references aRef1 and aRef2 and
  // returns a value 'true' if the references are identical. Otherwise the
  // function returns a value 'false'.
  //
  // IsEqualRef() implements the Chora instant operators: 'ref == ref' and
  // 'ref != ref'.
  // ---------------------------------------------------------------------------
  emwi._IsEqualRef = function( aRef1, aRef2 )
  {
    // Comparing two 'null' references
    if ( !aRef1 && !aRef2 )
      return true;

    // One of the references is null
    if ( !aRef1 || !aRef2 )
      return false;

    return ( aRef1[0] === aRef2[0]) && ( aRef1[1] === aRef2[1]) &&
           ( aRef1[2] === aRef2[2]);
  };
  
  // ---------------------------------------------------------------------------
  // The function CompSlot() compares the given slots aSlot1 and aSlot2 and 
  // returns a value 'true' if the slots are identical. Otherwise the function 
  // returns a value 'false'.
  //
  // CompSlot() implements the Chora instant operators: 'slot == slot' and
  // 'slot != slot'.
  // ---------------------------------------------------------------------------
  emwi._IsEqualSlot = function( aSlot1, aSlot2 )
  {
    // Comparing two 'null' slots
    if ( !aSlot1 && !aSlot2 )
      return true;

    // One of the slots is null
    if ( !aSlot1 || !aSlot2 )
      return false;

    return ( aSlot1[0] === aSlot2[0]) && ( aSlot1[1] === aSlot2[1]);
  };

  // ---------------------------------------------------------------------------
  // The function RandInt32() implements the Chora math_rand() function for
  // int32 operands. It calculates the random value in the range aValue1 .. 
  // aValue2.
  // ---------------------------------------------------------------------------
  emwi._RandInt32 = function( aValue1, aValue2 )
  {
    return ( aValue1 + (( aValue2 - aValue1 ) * Math.random())) | 0;
  };
  
  // ---------------------------------------------------------------------------
  // The function RandFloat() implements the Chora math_rand() function for
  // float operands. It calculates the random value in the range aValue1 ..
  // aValue2.
  // ---------------------------------------------------------------------------
  emwi._RandFloat = function( aValue1, aValue2 )
  {
    return aValue1 + (( aValue2 - aValue1 ) * Math.random());
  };
  
  // ---------------------------------------------------------------------------
  // The function Fract() implements the Chora math_fract() function for float
  // operands. It calculates the fraction part of the given value aValue.
  // ---------------------------------------------------------------------------
  emwi._Fract = function( aValue )
  {
    return aValue - Math.trunc( aValue );
  };
  
  // ---------------------------------------------------------------------------
  // The function Length() implements the Chora math_length() function for two
  // float operands. It calculates the length of a vector specified by aX and 
  // aY.
  // ---------------------------------------------------------------------------
  emwi._Length = function( aX, aY )
  {
    return Math.sqrt(( aX * aX ) + ( aY * aY ));
  };
  
  // ---------------------------------------------------------------------------
  // The function LengthPoint() implements the Chora math_length() function for
  // a single point operand. It calculates the length of a vector specified by 
  // aPoint.
  // ---------------------------------------------------------------------------
  emwi._LengthPoint = function( aPoint )
  {
    return Math.sqrt(( aPoint[0] * aPoint[0]) + ( aPoint[1] * aPoint[1]));
  };
  
  // This helper function verifies whether the preceding WebGL operations have
  // left WebGL in an erroneous state. If any, the function prints the reported
  // errors and returns 'true'. If no errors are reported, 'false' is returned.
  function PrintWebGLErrors( aGL )
  {
    var anyErrors = false;
    var error;

    // Repeat until all errors have been evaluated
    while (( error = aGL.getError()) !== aGL.NO_ERROR )
    {
      console.log( "EmWi error: WebGL error '" + error + "' reported." );
      anyErrors = true;
    }
    
    return anyErrors;
  }

  // Following function helps formatting strings from templates containing place
  // holders. A place holder is represented by a text '{X}' where X is a sign.
  // The place-holder names and the corresponding values are found in aParams.
  function FormatTemplate( aTemplate, aParams )
  {
    return aTemplate.replace( new RegExp( "{[0-9A-Za-z]}", "g" ), function( match )
    {
      return aParams[ match.substr( 1, 1 )] || "";
    });
  }

  // Source code of the basic vertex shader to work only with the basic fragment
  // shader. Convert from Embedded Wizard coordinate space to WebGL coordinate
  // space.
  var VertShaderCode0 =
    "precision mediump float;\n" +
    "uniform   highp   mat4 dst_map;\n" +
    "attribute highp   vec2 dst_pos;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n" +
    "}\n";

  // Source code of the first vertex shader to work only with the first fragment
  // shader. Convert from Embedded Wizard coordinate space to WebGL coordinate
  // space.
  var VertShaderCode1 =
    "precision mediump float;\n" +
    "uniform   highp   mat4 dst_map;\n" +
    "attribute highp   vec2 dst_pos;\n" +
    "attribute lowp    vec4 src_clr;\n" +
    "varying   lowp    vec4 src_clr_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  src_clr_var = vec4( src_clr.rgb * src_clr.a, src_clr.a );\n" +
    "  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n" +
    "}\n";

  // Source code of the second vertex shader. Convert from Embedded Wizard
  // coordinate space to WebGL coordinate space
  var VertShaderCode2 =
    "precision mediump float;\n" +
    "uniform   highp   mat4 dst_map;\n" +
    "attribute highp   vec2 dst_pos;\n" +
    "attribute highp   vec3 src_pos;\n" +
    "varying   highp   vec3 src_pos_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  src_pos_var = src_pos;\n" +
    "  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n" +
    "}\n";

  // Source code of the third vertex shader. Convert from Embedded Wizard
  // coordinate space to WebGL coordinate space.
  var VertShaderCode3 =
    "precision mediump float;\n" +
    "uniform   highp   mat4 dst_map;\n" +
    "attribute highp   vec2 dst_pos;\n" +
    "attribute highp   vec3 src_pos;\n" +
    "attribute lowp    vec4 src_clr;\n" +
    "varying   highp   vec3 src_pos_var;\n" +
    "varying   lowp    vec4 src_clr_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  src_clr_var = vec4( src_clr.rgb * src_clr.a, src_clr.a );\n" +
    "  src_pos_var = src_pos;\n" +
    "  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n" +
    "}\n";

  // Source code of the fourth vertex shader. Convert from Embedded Wizard
  // coordinate space to OpenGL coordinate space. This version of the shader
  // additionally takes care of the position within a color gradient map.
  var VertShaderCode4 =
    "precision mediump float;\n" +
    "uniform   highp   mat4 dst_map;\n" +
    "attribute highp   vec2 dst_pos;\n" +
    "attribute highp   vec3 src_pos;\n" +
    "varying   highp   vec3 src_pos_var;\n" +
    "attribute mediump vec3 clr_pos;\n" +
    "varying   mediump vec3 clr_pos_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  src_pos_var = src_pos;\n" +
    "  clr_pos_var = clr_pos;\n" +
    "  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n" +
    "}\n";

  // Source code of the fifth vertex shader. Convert from Embedded Wizard
  // coordinate space to WebGL coordinate space. This shader is used for
  // filter operations.
  var VertShaderCode5 =
    "precision mediump float;\n" +
    "uniform   highp   mat4  dst_map;\n" +
    "attribute highp   vec2  dst_pos;\n" +
    "attribute highp   vec3  src_pos;\n" +
    "varying   highp   vec3  src_pos_var;\n" +
    "uniform   highp   vec2  src_pxl;\n" +
    "uniform   highp   vec2  src_step;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  src_pos_var = src_pos * vec3( src_pxl, 1.0 );\n" +
    "  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n" +
    "}\n";

  // Source code of the sixth vertex shader. Convert from Embedded Wizard
  // coordinate space to WebGL coordinate space by additionally taking
  // mask position in account. This shader is used for filter operations.
  var VertShaderCode6 =
    "precision mediump float;\n" +
    "uniform   highp   mat4  dst_map;\n" +
    "attribute highp   vec2  dst_pos;\n" +
    "attribute highp   vec3  src_pos;\n" +
    "varying   highp   vec3  src_pos_var;\n" +
    "uniform   highp   vec2  src_pxl;\n" +
    "uniform   highp   vec2  src_step;\n" +
    "attribute highp   vec2  msk_pos;\n" +
    "varying   highp   vec2  msk_pos_var;\n" +
    "uniform   highp   vec2  msk_pxl;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  src_pos_var = src_pos * vec3( src_pxl, 1.0 );\n" +
    "  msk_pos_var = msk_pos * msk_pxl;\n" +
    "  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n" +
    "}\n";

  // Source code of the basic fragment shader. Here pure clear operations will
  // be done.
  var FragShaderCode0 =
    "precision mediump float;\n" +
    "void main()\n" +
    "{\n" +
    "  gl_FragColor = vec4( 0.0, 0.0, 0.0, 0.0 );\n" +
    "}\n";
    
  // Source code of the first fragment shader. Here pure fill color operations
  // will be done.
  var FragShaderCode1 =
    "precision mediump float;\n" +
    "varying   lowp vec4 src_clr_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  gl_FragColor = src_clr_var;\n" +
    "}\n";
    
  // Source code of the second fragment shader. Here native texture copy 
  // operations will be done.
  var FragShaderCode2 =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  gl_FragColor = texture2D( src, src_pos_var.xy );\n" +
    "}\n";
    
  // Source code of the third fragment shader. Here native texture copy 
  // operations will be done. The texture coordinates are projective.
  var FragShaderCode3 =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  gl_FragColor = texture2DProj( src, src_pos_var );\n" +
    "}\n";
    
  // Source code of the fourth fragment shader. Here native texture copy
  // operations with opacity modulation will be done.
  var FragShaderCode4 =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "varying   lowp    vec4      src_clr_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  gl_FragColor = texture2D( src, src_pos_var.xy ) * src_clr_var.a;\n" +
    "}\n";
    
  // Source code of the fifth fragment shader. Here native texture copy 
  // operations with opacity modulation will be done. The texture coordinates
  // are projective.
  var FragShaderCode5 =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "varying   lowp    vec4      src_clr_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  gl_FragColor = texture2DProj( src, src_pos_var ) * src_clr_var.a;\n" +
    "}\n";
    
  // Source code of the sixth fragment shader. Here alpha8 texture fragment will
  // be modulated with a solid color value.
  var FragShaderCode6 =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "varying   lowp    vec4      src_clr_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  gl_FragColor = texture2D( src, src_pos_var.xy ).a * src_clr_var;\n" +
    "}\n";

  // Source code of the seventh fragment shader. Here alpha8 texture fragment 
  // will be modulated with a solid color value. Texture coordinates are 
  // projective.
  var FragShaderCode7 =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "varying   lowp    vec4      src_clr_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  gl_FragColor = texture2DProj( src, src_pos_var ).a * src_clr_var;\n" +
    "}\n";
    
  // Source code of the eight fragment shader. This shader is optimized to tile
  // an area with texture copies.
  var FragShaderCode8 =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "uniform   highp   vec2      src_size;\n" +
    "uniform   highp   vec2      src_ofs;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size );\n" +
    "}\n";

  // Source code of the ninth fragment shader. This shader is optimized to tile
  // an area with texture copies with additional opacity modulation.
  var FragShaderCode9 =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "uniform   highp   vec2      src_size;\n" +
    "uniform   highp   vec2      src_ofs;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "varying   lowp    vec4      src_clr_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size )\n" +
    "                            * src_clr_var.a;\n" +
    "}\n";
    
  // Source code of the tenth fragment shader. This shader is optimized to tile
  // an area with alpha8 texture modulated with a solid color value.
  var FragShaderCodeA =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "uniform   highp   vec2      src_size;\n" +
    "uniform   highp   vec2      src_ofs;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "varying   lowp    vec4      src_clr_var;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size ).a\n" +
    "                            * src_clr_var;\n" +
    "}\n";

  // Source code of the eleventh fragment shader. Here native texture copy operations
  // with opacity modulation by a gradient will be done.
  var FragShaderCodeB =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "varying   mediump vec3      clr_pos_var;\n" +
    "uniform   lowp    vec4      clr_tl;\n" +
    "uniform   lowp    vec4      clr_tr;\n" +
    "uniform   lowp    vec4      clr_br;\n" +
    "uniform   lowp    vec4      clr_bl;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  float clr_l  = mix( clr_tl.a, clr_bl.a, clr_pos_var.y );\n" +
    "  float clr_r  = mix( clr_tr.a, clr_br.a, clr_pos_var.y );\n" +
    "  float clr    = mix( clr_l,    clr_r,    clr_pos_var.x );\n" +
    "  gl_FragColor = texture2D( src, src_pos_var.xy ) * clr;\n" +
    "}\n";

  // Source code of the twelfth fragment shader. Here alpha8 texture fragment will
  // be modulated with a color gradient.
  var FragShaderCodeC =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "varying   mediump vec3      clr_pos_var;\n" +
    "uniform   lowp    vec4      clr_tl;\n" +
    "uniform   lowp    vec4      clr_tr;\n" +
    "uniform   lowp    vec4      clr_br;\n" +
    "uniform   lowp    vec4      clr_bl;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  vec4 clr_l   = mix( clr_tl, clr_bl, clr_pos_var.y );\n" +
    "  vec4 clr_r   = mix( clr_tr, clr_br, clr_pos_var.y );\n" +
    "  vec4 clr     = mix( clr_l,  clr_r,  clr_pos_var.x );\n" +
    "  gl_FragColor = texture2D( src, src_pos_var.xy ).a * clr;\n" +
    "}\n";

  // Source code of the thirteenth fragment shader. Here native texture copy 
  // operations with opacity modulation by a gradient will be done. Texture
  // coordinates are projective.
  var FragShaderCodeD =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "varying   mediump vec3      clr_pos_var;\n" +
    "uniform   lowp    vec4      clr_tl;\n" +
    "uniform   lowp    vec4      clr_tr;\n" +
    "uniform   lowp    vec4      clr_br;\n" +
    "uniform   lowp    vec4      clr_bl;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  vec2  clr_pos = clr_pos_var.xy / clr_pos_var.z;\n" +
    "  float clr_l   = mix( clr_tl.a, clr_bl.a, clr_pos.y );\n" +
    "  float clr_r   = mix( clr_tr.a, clr_br.a, clr_pos.y );\n" +
    "  float clr     = mix( clr_l,    clr_r,    clr_pos.x );\n" +
    "  gl_FragColor  = texture2DProj( src, src_pos_var ) * clr;\n" +
    "}\n";

  // Source code of the fourteenth fragment shader. Here alpha8 texture fragment
  // will be modulated with a color gradient. Texture coordinates are projective.
  var FragShaderCodeE =
    "precision mediump float;\n" +
    "uniform   lowp    sampler2D src;\n" +
    "varying   highp   vec3      src_pos_var;\n" +
    "varying   mediump vec3      clr_pos_var;\n" +
    "uniform   lowp    vec4      clr_tl;\n" +
    "uniform   lowp    vec4      clr_tr;\n" +
    "uniform   lowp    vec4      clr_br;\n" +
    "uniform   lowp    vec4      clr_bl;\n" +
    "\n" +
    "void main()\n" +
    "{\n" +
    "  vec2 clr_pos = clr_pos_var.xy / clr_pos_var.z;\n" +
    "  vec4 clr_l   = mix( clr_tl, clr_bl, clr_pos.y );\n" +
    "  vec4 clr_r   = mix( clr_tr, clr_br, clr_pos.y );\n" +
    "  vec4 clr     = mix( clr_l,  clr_r,  clr_pos.x );\n" +
    "  gl_FragColor = texture2DProj( src, src_pos_var ).a * clr;\n" +
    "}\n";

  var TemplateA1 =
    "precision mediump       float;\n" +
    "uniform lowp  sampler2D src;\n" +
    "varying highp vec3      src_pos_var;\n";

  var TemplateA2 =
    "uniform highp vec2      src_step;\n";

  var TemplateA3 =
    "uniform lowp  sampler2D msk;\n" +
    "varying highp vec2      msk_pos_var;\n" +
    "uniform       bool      msk_invert;\n";

  var TemplateA4 =
    "uniform highp vec2      msk_step;\n";

  var TemplateA5 =
    "uniform lowp  float     opacity;\n";

  var TemplateA6 =
    "uniform lowp  vec4      tint;\n" +
    "uniform lowp  float     intensity;\n";

  var TemplateA7 =
    "uniform highp vec2      clamp_tl;\n" +
    "uniform highp vec2      clamp_br;\n";

  var TemplateB1 =
    "void main()\n" +
    "{\n";

  var TemplateB2 =
    "}\n";

  var TemplateD1 =
    "  vec2 {0}_pos_0  = {0}_pos_var.xy;\n" +
    "  vec2 {0}_pos_1L = {0}_pos_0  - {0}_step;\n" +
    "  vec2 {0}_pos_1R = {0}_pos_0  + {0}_step;\n" +
    "  vec2 {0}_pos_2L = {0}_pos_1L - {0}_step;\n" +
    "  vec2 {0}_pos_2R = {0}_pos_1R + {0}_step;\n";

  var TemplateD2 = TemplateD1 +
    "  vec2 {0}_pos_3L = {0}_pos_2L - {0}_step;\n" +
    "  vec2 {0}_pos_3R = {0}_pos_2R + {0}_step;\n" +
    "  vec2 {0}_pos_4L = {0}_pos_3L - {0}_step;\n" +
    "  vec2 {0}_pos_4R = {0}_pos_3R + {0}_step;\n";

  var TemplateD3 = TemplateD2 +
    "  vec2 {0}_pos_5L = {0}_pos_4L - {0}_step;\n" +
    "  vec2 {0}_pos_5R = {0}_pos_4R + {0}_step;\n" +
    "  vec2 {0}_pos_6L = {0}_pos_5L - {0}_step;\n" +
    "  vec2 {0}_pos_6R = {0}_pos_5R + {0}_step;\n";

  var TemplateD4 = TemplateD3 +
    "  vec2 {0}_pos_7L = {0}_pos_6L - {0}_step;\n" +
    "  vec2 {0}_pos_7R = {0}_pos_6R + {0}_step;\n" +
    "  vec2 {0}_pos_8L = {0}_pos_7L - {0}_step;\n" +
    "  vec2 {0}_pos_8R = {0}_pos_7R + {0}_step;\n";

  var TemplateE1 =
    "  src_pos_0  = max( src_pos_0,  clamp_tl - src_pos_0  );\n" +
    "  src_pos_0  = min( src_pos_0,  clamp_br - src_pos_0  );\n" +
    "  src_pos_1L = max( src_pos_1L, clamp_tl - src_pos_1L );\n" +
    "  src_pos_1L = min( src_pos_1L, clamp_br - src_pos_1L );\n" +
    "  src_pos_1R = max( src_pos_1R, clamp_tl - src_pos_1R );\n" +
    "  src_pos_1R = min( src_pos_1R, clamp_br - src_pos_1R );\n" +
    "  src_pos_2L = max( src_pos_2L, clamp_tl - src_pos_2L );\n" +
    "  src_pos_2L = min( src_pos_2L, clamp_br - src_pos_2L );\n" +
    "  src_pos_2R = max( src_pos_2R, clamp_tl - src_pos_2R );\n" +
    "  src_pos_2R = min( src_pos_2R, clamp_br - src_pos_2R );\n";

  var TemplateE2 = TemplateE1 +
    "  src_pos_3L = max( src_pos_3L, clamp_tl - src_pos_3L );\n" +
    "  src_pos_3L = min( src_pos_3L, clamp_br - src_pos_3L );\n" +
    "  src_pos_3R = max( src_pos_3R, clamp_tl - src_pos_3R );\n" +
    "  src_pos_3R = min( src_pos_3R, clamp_br - src_pos_3R );\n" +
    "  src_pos_4L = max( src_pos_4L, clamp_tl - src_pos_4L );\n" +
    "  src_pos_4L = min( src_pos_4L, clamp_br - src_pos_4L );\n" +
    "  src_pos_4R = max( src_pos_4R, clamp_tl - src_pos_4R );\n" +
    "  src_pos_4R = min( src_pos_4R, clamp_br - src_pos_4R );\n";

  var TemplateE3 = TemplateE2 +
    "  src_pos_5L = max( src_pos_5L, clamp_tl - src_pos_5L );\n" +
    "  src_pos_5L = min( src_pos_5L, clamp_br - src_pos_5L );\n" +
    "  src_pos_5R = max( src_pos_5R, clamp_tl - src_pos_5R );\n" +
    "  src_pos_5R = min( src_pos_5R, clamp_br - src_pos_5R );\n" +
    "  src_pos_6L = max( src_pos_6L, clamp_tl - src_pos_6L );\n" +
    "  src_pos_6L = min( src_pos_6L, clamp_br - src_pos_6L );\n" +
    "  src_pos_6R = max( src_pos_6R, clamp_tl - src_pos_6R );\n" +
    "  src_pos_6R = min( src_pos_6R, clamp_br - src_pos_6R );\n";

  var TemplateE4 = TemplateE3 +
    "  src_pos_7L = max( src_pos_7L, clamp_tl - src_pos_7L );\n" +
    "  src_pos_7L = min( src_pos_7L, clamp_br - src_pos_7L );\n" +
    "  src_pos_7R = max( src_pos_7R, clamp_tl - src_pos_7R );\n" +
    "  src_pos_7R = min( src_pos_7R, clamp_br - src_pos_7R );\n" +
    "  src_pos_8L = max( src_pos_8L, clamp_tl - src_pos_8L );\n" +
    "  src_pos_8L = min( src_pos_8L, clamp_br - src_pos_8L );\n" +
    "  src_pos_8R = max( src_pos_8R, clamp_tl - src_pos_8R );\n" +
    "  src_pos_8R = min( src_pos_8R, clamp_br - src_pos_8R );\n";

  var TemplateF0 =
    "  float msk_0 = texture2D( msk, msk_pos_var.xy ).a;\n";

  var TemplateF1 =
    "  float msk_0  = texture2D( msk, msk_pos_0  ).a;\n" +
    "  float msk_1L = texture2D( msk, msk_pos_1L ).a;\n" +
    "  float msk_1R = texture2D( msk, msk_pos_1R ).a;\n" +
    "  float msk_2L = texture2D( msk, msk_pos_2L ).a;\n" +
    "  float msk_2R = texture2D( msk, msk_pos_2R ).a;\n";

  var TemplateF2 = TemplateF1 +
    "  float msk_3L = texture2D( msk, msk_pos_3L ).a;\n" +
    "  float msk_3R = texture2D( msk, msk_pos_3R ).a;\n" +
    "  float msk_4L = texture2D( msk, msk_pos_4L ).a;\n" +
    "  float msk_4R = texture2D( msk, msk_pos_4R ).a;\n";

  var TemplateF3 = TemplateF2 +
    "  float msk_5L = texture2D( msk, msk_pos_5L ).a;\n" +
    "  float msk_5R = texture2D( msk, msk_pos_5R ).a;\n" +
    "  float msk_6L = texture2D( msk, msk_pos_6L ).a;\n" +
    "  float msk_6R = texture2D( msk, msk_pos_6R ).a;\n";

  var TemplateF4 = TemplateF3 +
    "  float msk_7L = texture2D( msk, msk_pos_7L ).a;\n" +
    "  float msk_7R = texture2D( msk, msk_pos_7R ).a;\n" +
    "  float msk_8L = texture2D( msk, msk_pos_8L ).a;\n" +
    "  float msk_8R = texture2D( msk, msk_pos_8R ).a;\n";

  var TemplateG0 =
    "  {0} = ( msk_invert? 1.0 - msk_0 : msk_0 ) * {1};\n";

  var TemplateG1 =
    "  if ( msk_invert )\n" +
    "  {\n" +
    "    msk_0  = 1.0 - msk_0;\n" +
    "    msk_1L = 1.0 - msk_1L;\n" +
    "    msk_1R = 1.0 - msk_1R;\n" +
    "    msk_2L = 1.0 - msk_2L;\n" +
    "    msk_2R = 1.0 - msk_2R;\n";

  var TemplateG2 = TemplateG1 +
    "    msk_3L = 1.0 - msk_3L;\n" +
    "    msk_3R = 1.0 - msk_3R;\n" +
    "    msk_4L = 1.0 - msk_4L;\n" +
    "    msk_4R = 1.0 - msk_4R;\n";

  var TemplateG3 = TemplateG2 +
    "    msk_5L = 1.0 - msk_5L;\n" +
    "    msk_5R = 1.0 - msk_5R;\n" +
    "    msk_6L = 1.0 - msk_6L;\n" +
    "    msk_6R = 1.0 - msk_6R;\n";

  var TemplateG4 = TemplateG3 +
    "    msk_7L = 1.0 - msk_7L;\n" +
    "    msk_7R = 1.0 - msk_7R;\n" +
    "    msk_8L = 1.0 - msk_8L;\n" +
    "    msk_8R = 1.0 - msk_8R;\n";

  var TemplateG5 =
    "  }\n";

  var TemplateI0 =
    "  {0} = texture2D( src, src_pos_var.xy );\n";

  var TemplateI1 =
    "  vec4  tmp = (   texture2D( src, src_pos_0  ) {1}    * 0.375  ) +\n" +
    "              ((( texture2D( src, src_pos_1L ) {2} ) +\n" +
    "                ( texture2D( src, src_pos_1R ) {3} )) * 0.25   ) +\n" +
    "              ((( texture2D( src, src_pos_2L ) {4} ) +\n" +
    "                ( texture2D( src, src_pos_2R ) {5} )) * 0.0625 );\n" +
    "\n" +
    "  {0} = tmp;\n";

  var TemplateI2 =
    "  vec4  tmp = (   texture2D( src, src_pos_0  ) {1}    * 0.2736 ) +\n" +
    "              ((( texture2D( src, src_pos_1L ) {2} ) +\n" +
    "                ( texture2D( src, src_pos_1R ) {3} )) * 0.2187 ) +\n" +
    "              ((( texture2D( src, src_pos_2L ) {4} ) +\n" +
    "                ( texture2D( src, src_pos_2R ) {5} )) * 0.1093 ) +\n" +
    "              ((( texture2D( src, src_pos_3L ) {6} ) +\n" +
    "                ( texture2D( src, src_pos_3R ) {7} )) * 0.0312 ) +\n" +
    "              ((( texture2D( src, src_pos_4L ) {8} ) +\n" +
    "                ( texture2D( src, src_pos_4R ) {9} )) * 0.0040 );\n" +
    "\n" +
    "  {0} = tmp;\n";

  var TemplateI3 =
    "  vec4  tmp = (   texture2D( src, src_pos_0  ) {1}    * 0.1964 ) +\n" +
    "              ((( texture2D( src, src_pos_1L ) {2} ) +\n" +
    "                ( texture2D( src, src_pos_1R ) {3} )) * 0.1747 ) +\n" +
    "              ((( texture2D( src, src_pos_2L ) {4} ) +\n" +
    "                ( texture2D( src, src_pos_2R ) {5} )) * 0.1223 ) +\n" +
    "              ((( texture2D( src, src_pos_3L ) {6} ) +\n" +
    "                ( texture2D( src, src_pos_3R ) {7} )) * 0.0667 ) +\n" +
    "              ((( texture2D( src, src_pos_4L ) {8} ) +\n" +
    "                ( texture2D( src, src_pos_4R ) {9} )) * 0.0278 ) +\n" +
    "              ((( texture2D( src, src_pos_5L ) {A} ) +\n" +
    "                ( texture2D( src, src_pos_5R ) {B} )) * 0.0085 ) +\n" +
    "              ((( texture2D( src, src_pos_6L ) {C} ) +\n" +
    "                ( texture2D( src, src_pos_6R ) {D} )) * 0.0018 );\n" +
    "\n" +
    "  {0} = tmp;\n";

  var TemplateI7 =
    "  vec4  tmp = (( texture2D( src, src_pos_0  ) {1} ) +\n" +
    "               ( texture2D( src, src_pos_1L ) {2} ) +\n" +
    "               ( texture2D( src, src_pos_1R ) {3} ) +\n" +
    "               ( texture2D( src, src_pos_2L ) {4} ) +\n" +
    "               ( texture2D( src, src_pos_2R ) {5} ) +\n" +
    "               ( texture2D( src, src_pos_3L ) {6} ) +\n" +
    "               ( texture2D( src, src_pos_3R ) {7} ) +\n" +
    "               ( texture2D( src, src_pos_4L ) {8} ) +\n" +
    "               ( texture2D( src, src_pos_4R ) {9} )) * ( 1.0 / 9.0 );\n" +
    "\n" +
    "  {0} = tmp;\n";

  var TemplateI8 =
    "  vec4  tmp = (( texture2D( src, src_pos_0  ) {1} ) +\n" +
    "               ( texture2D( src, src_pos_1L ) {2} ) +\n" +
    "               ( texture2D( src, src_pos_1R ) {3} ) +\n" +
    "               ( texture2D( src, src_pos_2L ) {4} ) +\n" +
    "               ( texture2D( src, src_pos_2R ) {5} ) +\n" +
    "               ( texture2D( src, src_pos_3L ) {6} ) +\n" +
    "               ( texture2D( src, src_pos_3R ) {7} ) +\n" +
    "               ( texture2D( src, src_pos_4L ) {8} ) +\n" +
    "               ( texture2D( src, src_pos_4R ) {9} ) +\n" +
    "               ( texture2D( src, src_pos_5L ) {A} ) +\n" +
    "               ( texture2D( src, src_pos_5R ) {B} ) +\n" +
    "               ( texture2D( src, src_pos_6L ) {C} ) +\n" +
    "               ( texture2D( src, src_pos_6R ) {D} ) +\n" +
    "               ( texture2D( src, src_pos_7L ) {E} ) +\n" +
    "               ( texture2D( src, src_pos_7R ) {F} ) +\n" +
    "               ( texture2D( src, src_pos_8L ) {G} ) +\n" +
    "               ( texture2D( src, src_pos_8R ) {H} )) * ( 1.0 / 17.0 );\n" +
    "\n" +
    "  {0} = tmp;\n";

  var TemplateK0 =
    "  {0} = {1} * opacity;\n";

  var TemplateK1 =
    "  float gray   = dot( {1}.rgb, vec3( 0.299, 0.587, 0.114 ));\n" +
    "  vec4  color2 = tint * vec4( vec3( gray ), {1}.a );\n" +
    "  {0} = mix( {1}, color2, intensity ) * opacity;\n";

  var TemplateK2 =
    "  vec4 color2 = {1}.a * tint;\n" +
    "  {0} = mix( {1}, color2, intensity ) * opacity;\n";

  // Source code of the gauss-blur-5 fragment shader.
  var FragShaderCodeL1 =
    TemplateA1 +
    TemplateA2 +
    TemplateB1 +
      FormatTemplate( TemplateD1, { '0' : 'src'          }) +
      FormatTemplate( TemplateI1, { '0' : 'gl_FragColor' }) +
    TemplateB2;

  // Source code of the gauss-blur-5 fragment shader. Unlike the above shader
  // code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeL1C =
    TemplateA1 +
    TemplateA2 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD1, { '0' : 'src'          }) +
      TemplateE1 +
      FormatTemplate( TemplateI1, { '0' : 'gl_FragColor' }) +
    TemplateB2;

  // Source code of the gauss-blur-9 fragment shader.
  var FragShaderCodeL2 =
    TemplateA1 +
    TemplateA2 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'          }) +
      FormatTemplate( TemplateI2, { '0' : 'gl_FragColor' }) +
    TemplateB2;

  // Source code of the gauss-blur-9 fragment shader. Unlike the above shader
  // code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeL2C =
    TemplateA1 +
    TemplateA2 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'          }) +
      TemplateE2 +
      FormatTemplate( TemplateI2, { '0' : 'gl_FragColor' }) +
    TemplateB2;

  // Source code of the gauss-blur-17 fragment shader.
  var FragShaderCodeL3 =
    TemplateA1 +
    TemplateA2 +
    TemplateB1 +
      FormatTemplate( TemplateD3, { '0' : 'src'          }) +
      FormatTemplate( TemplateI3, { '0' : 'gl_FragColor' }) +
    TemplateB2;

  // Source code of the gauss-blur-17 fragment shader. Unlike the above shader
  // code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeL3C =
    TemplateA1 +
    TemplateA2 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD3, { '0' : 'src'          }) +
      TemplateE3 +
      FormatTemplate( TemplateI3, { '0' : 'gl_FragColor' }) +
    TemplateB2;

  // Source code of the box-blur-9 fragment shader.
  var FragShaderCodeL7 =
    TemplateA1 +
    TemplateA2 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'          }) +
      FormatTemplate( TemplateI7, { '0' : 'gl_FragColor' }) +
    TemplateB2;

  // Source code of the box-blur-9 fragment shader. Unlike the above shader
  // code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeL7C =
    TemplateA1 +
    TemplateA2 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'          }) +
      TemplateE2 +
      FormatTemplate( TemplateI7, { '0' : 'gl_FragColor' }) +
    TemplateB2;

  // Source code of the box-blur-17 fragment shader.
  var FragShaderCodeL8 =
    TemplateA1 +
    TemplateA2 +
    TemplateB1 +
      FormatTemplate( TemplateD4, { '0' : 'src'          }) +
      FormatTemplate( TemplateI8, { '0' : 'gl_FragColor' }) +
    TemplateB2;

  // Source code of the box-blur-17 fragment shader. Unlike the above shader
  // code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeL8C =
    TemplateA1 +
    TemplateA2 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD4, { '0' : 'src'          }) +
      TemplateE4 +
      FormatTemplate( TemplateI8, { '0' : 'gl_FragColor' }) +
    TemplateB2;

  // Source code of the gauss-blur-5 fragment shader with mask applied before
  // bluring.
  var FragShaderCodeM1 =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateA4 +
    TemplateB1 +
      FormatTemplate( TemplateD1, { '0' : 'src' }) +
      FormatTemplate( TemplateD1, { '0' : 'msk' }) +
      FormatTemplate( TemplateF1 ) +
      FormatTemplate( TemplateG1 ) +
      FormatTemplate( TemplateG5 ) +
      FormatTemplate( TemplateI1, { '0' : 'gl_FragColor', '1' : '* msk_0',
                                    '2' : '* msk_1L',     '3' : '* msk_1R',
                                    '4' : '* msk_2L',     '5' : '* msk_2R' }) +
    TemplateB2;

  // Source code of the gauss-blur-5 fragment shader with mask applied before
  // bluring. Unlike the above shader code, this version includes the 'clamp
  // to edge' operation.
  var FragShaderCodeM1C =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateA4 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD1, { '0' : 'src' }) +
      FormatTemplate( TemplateD1, { '0' : 'msk' }) +
      TemplateE1 +
      FormatTemplate( TemplateF1 ) +
      FormatTemplate( TemplateG1 ) +
      FormatTemplate( TemplateG5 ) +
      FormatTemplate( TemplateI1, { '0' : 'gl_FragColor', '1' : '* msk_0',
                                    '2' : '* msk_1L',     '3' : '* msk_1R',
                                    '4' : '* msk_2L',     '5' : '* msk_2R' }) +
    TemplateB2;

  // Source code of the gauss-blur-9 fragment shader with mask applied before
  // bluring.
  var FragShaderCodeM2 =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateA4 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src' }) +
      FormatTemplate( TemplateD2, { '0' : 'msk' }) +
      FormatTemplate( TemplateF2 ) +
      FormatTemplate( TemplateG2 ) +
      FormatTemplate( TemplateG5 ) +
      FormatTemplate( TemplateI2, { '0' : 'gl_FragColor', '1' : '* msk_0',
                                    '2' : '* msk_1L',     '3' : '* msk_1R',
                                    '4' : '* msk_2L',     '5' : '* msk_2R',
                                    '6' : '* msk_3L',     '7' : '* msk_3R',
                                    '8' : '* msk_4L',     '9' : '* msk_4R' }) +
    TemplateB2;

  // Source code of the gauss-blur-9 fragment shader with mask applied before
  // bluring. Unlike the above shader code, this version includes the 'clamp
  // to edge' operation.
  var FragShaderCodeM2C =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateA4 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src' }) +
      FormatTemplate( TemplateD2, { '0' : 'msk' }) +
      TemplateE2 +
      FormatTemplate( TemplateF2 ) +
      FormatTemplate( TemplateG2 ) +
      FormatTemplate( TemplateG5 ) +
      FormatTemplate( TemplateI2, { '0' : 'gl_FragColor', '1' : '* msk_0',
                                    '2' : '* msk_1L',     '3' : '* msk_1R',
                                    '4' : '* msk_2L',     '5' : '* msk_2R',
                                    '6' : '* msk_3L',     '7' : '* msk_3R',
                                    '8' : '* msk_4L',     '9' : '* msk_4R' }) +
    TemplateB2;

  // Source code of the gauss-blur-17 fragment shader with mask applied before
  // bluring.
  var FragShaderCodeM3 =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateA4 +
    TemplateB1 +
      FormatTemplate( TemplateD3, { '0' : 'src' }) +
      FormatTemplate( TemplateD3, { '0' : 'msk' }) +
      FormatTemplate( TemplateF3 ) +
      FormatTemplate( TemplateG3 ) +
      FormatTemplate( TemplateG5 ) +
      FormatTemplate( TemplateI3, { '0' : 'gl_FragColor', '1' : '* msk_0',
                                    '2' : '* msk_1L',     '3' : '* msk_1R',
                                    '4' : '* msk_2L',     '5' : '* msk_2R',
                                    '6' : '* msk_3L',     '7' : '* msk_3R',
                                    '8' : '* msk_4L',     '9' : '* msk_4R',
                                    'A' : '* msk_5L',     'B' : '* msk_5R',
                                    'C' : '* msk_6L',     'D' : '* msk_6R' }) +
    TemplateB2;

  // Source code of the gauss-blur-17 fragment shader with mask applied before
  // bluring. Unlike the above shader code, this version includes the 'clamp
  // to edge' operation.
  var FragShaderCodeM3C =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateA4 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD3, { '0' : 'src' }) +
      FormatTemplate( TemplateD3, { '0' : 'msk' }) +
      TemplateE3 +
      FormatTemplate( TemplateF3 ) +
      FormatTemplate( TemplateG3 ) +
      FormatTemplate( TemplateG5 ) +
      FormatTemplate( TemplateI3, { '0' : 'gl_FragColor', '1' : '* msk_0',
                                    '2' : '* msk_1L',     '3' : '* msk_1R',
                                    '4' : '* msk_2L',     '5' : '* msk_2R',
                                    '6' : '* msk_3L',     '7' : '* msk_3R',
                                    '8' : '* msk_4L',     '9' : '* msk_4R',
                                    'A' : '* msk_5L',     'B' : '* msk_5R',
                                    'C' : '* msk_6L',     'D' : '* msk_6R' }) +
    TemplateB2;

  // Source code of the box-blur-9 fragment shader with mask applied before
  // bluring.
  var FragShaderCodeM7 =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateA4 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src' }) +
      FormatTemplate( TemplateD2, { '0' : 'msk' }) +
      FormatTemplate( TemplateF2 ) +
      FormatTemplate( TemplateG2 ) +
      FormatTemplate( TemplateG5 ) +
      FormatTemplate( TemplateI7, { '0' : 'gl_FragColor', '1' : '* msk_0',
                                    '2' : '* msk_1L',     '3' : '* msk_1R',
                                    '4' : '* msk_2L',     '5' : '* msk_2R',
                                    '6' : '* msk_3L',     '7' : '* msk_3R',
                                    '8' : '* msk_4L',     '9' : '* msk_4R' }) +
    TemplateB2;

  // Source code of the box-blur-9 fragment shader with mask applied before
  // bluring. Unlike the above shader code, this version includes the 'clamp
  // to edge' operation.
  var FragShaderCodeM7C =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateA4 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src' }) +
      FormatTemplate( TemplateD2, { '0' : 'msk' }) +
      TemplateE2 +
      FormatTemplate( TemplateF2 ) +
      FormatTemplate( TemplateG2 ) +
      FormatTemplate( TemplateG5 ) +
      FormatTemplate( TemplateI7, { '0' : 'gl_FragColor', '1' : '* msk_0',
                                    '2' : '* msk_1L',     '3' : '* msk_1R',
                                    '4' : '* msk_2L',     '5' : '* msk_2R',
                                    '6' : '* msk_3L',     '7' : '* msk_3R',
                                    '8' : '* msk_4L',     '9' : '* msk_4R' }) +
    TemplateB2;

  // Source code of the box-blur-17 fragment shader with mask applied before
  // bluring.
  var FragShaderCodeM8 =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateA4 +
    TemplateB1 +
      FormatTemplate( TemplateD4, { '0' : 'src' }) +
      FormatTemplate( TemplateD4, { '0' : 'msk' }) +
      FormatTemplate( TemplateF4 ) +
      FormatTemplate( TemplateG4 ) +
      FormatTemplate( TemplateG5 ) +
      FormatTemplate( TemplateI8, { '0' : 'gl_FragColor', '1' : '* msk_0',
                                    '2' : '* msk_1L',     '3' : '* msk_1R',
                                    '4' : '* msk_2L',     '5' : '* msk_2R',
                                    '6' : '* msk_3L',     '7' : '* msk_3R',
                                    '8' : '* msk_4L',     '9' : '* msk_4R',
                                    'A' : '* msk_5L',     'B' : '* msk_5R',
                                    'C' : '* msk_6L',     'D' : '* msk_6R',
                                    'E' : '* msk_7L',     'F' : '* msk_7R',
                                    'G' : '* msk_8L',     'H' : '* msk_8R' }) +
    TemplateB2;

  // Source code of the box-blur-17 fragment shader with mask applied before
  // bluring. Unlike the above shader code, this version includes the 'clamp
  // to edge' operation.
  var FragShaderCodeM8C =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateA4 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD4, { '0' : 'src' }) +
      FormatTemplate( TemplateD4, { '0' : 'msk' }) +
      TemplateE4 +
      FormatTemplate( TemplateF4 ) +
      FormatTemplate( TemplateG4 ) +
      FormatTemplate( TemplateG5 ) +
      FormatTemplate( TemplateI8, { '0' : 'gl_FragColor', '1' : '* msk_0',
                                    '2' : '* msk_1L',     '3' : '* msk_1R',
                                    '4' : '* msk_2L',     '5' : '* msk_2R',
                                    '6' : '* msk_3L',     '7' : '* msk_3R',
                                    '8' : '* msk_4L',     '9' : '* msk_4R',
                                    'A' : '* msk_5L',     'B' : '* msk_5R',
                                    'C' : '* msk_6L',     'D' : '* msk_6R',
                                    'E' : '* msk_7L',     'F' : '* msk_7R',
                                    'G' : '* msk_8L',     'H' : '* msk_8R' }) +
    TemplateB2;

  // Source code of the copy fragment shader with mask applied to the copied
  // pixel.
  var FragShaderCodeN0 =
    TemplateA1 +
    TemplateA3 +
    TemplateB1 +
      FormatTemplate( TemplateF0 ) +
      FormatTemplate( TemplateI0, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateG0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-5 fragment shader with mask applied after
  // bluring.
  var FragShaderCodeN1 =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateB1 +
      FormatTemplate( TemplateD1, { '0' : 'src'   }) +
      FormatTemplate( TemplateF0 ) +
      FormatTemplate( TemplateI1, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateG0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-9 fragment shader with mask applied after
  // bluring.
  var FragShaderCodeN2 =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      FormatTemplate( TemplateF0 ) +
      FormatTemplate( TemplateI2, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateG0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-17 fragment shader with mask applied after
  // bluring.
  var FragShaderCodeN3 =
    TemplateA1 +
    TemplateA2 +
    TemplateA3 +
    TemplateB1 +
      FormatTemplate( TemplateD3, { '0' : 'src'   }) +
      FormatTemplate( TemplateF0 ) +
      FormatTemplate( TemplateI3, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateG0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the fragment shader with color tinting by luminance using
  // values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeR0 =
    TemplateA1 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateI0, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK1, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-5 fragment shader with color tinting by
  // luminance using values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeR1 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateD1, { '0' : 'src'   }) +
      FormatTemplate( TemplateI1, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK1, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-5 fragment shader with color tinting by
  // luminance using values 'tint', 'intensity' and 'opacity'. Unlike the above
  // shader code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeR1C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD1, { '0' : 'src'   }) +
      TemplateE1 +
      FormatTemplate( TemplateI1, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK1, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-9 fragment shader with color tinting by
  // luminance using values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeR2 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      FormatTemplate( TemplateI2, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK1, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-9 fragment shader with color tinting by
  // luminance using values 'tint', 'intensity' and 'opacity'. Unlike the above
  // shader code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeR2C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      TemplateE2 +
      FormatTemplate( TemplateI2, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK1, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-17 fragment shader with color tinting by
  // luminance using values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeR3 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateD3, { '0' : 'src'   }) +
      FormatTemplate( TemplateI3, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK1, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-17 fragment shader with color tinting by
  // luminance using values 'tint', 'intensity' and 'opacity'. Unlike the above
  // shader code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeR3C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD3, { '0' : 'src'   }) +
      TemplateE3 +
      FormatTemplate( TemplateI3, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK1, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the box-blur-9 fragment shader with color tinting by
  // luminance using values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeR7 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      FormatTemplate( TemplateI7, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK1, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the box-blur-9 fragment shader with color tinting by
  // luminance using values 'tint', 'intensity' and 'opacity'. Unlike the above
  // shader code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeR7C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      TemplateE2 +
      FormatTemplate( TemplateI7, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK1, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the box-blur-17 fragment shader with color tinting by
  // luminance using values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeR8 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateD4, { '0' : 'src'   }) +
      FormatTemplate( TemplateI8, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK1, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the box-blur-17 fragment shader with color tinting by
  // luminance using values 'tint', 'intensity' and 'opacity'. Unlike the above
  // shader code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeR8C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD4, { '0' : 'src'   }) +
      TemplateE4 +
      FormatTemplate( TemplateI8, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK1, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the fragment shader with color tinting by alpha using values
  // 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeS0 =
    TemplateA1 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateI0, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK2, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-5 fragment shader with color tinting by alpha
  // using values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeS1 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateD1, { '0' : 'src'   }) +
      FormatTemplate( TemplateI1, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK2, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-5 fragment shader with color tinting by alpha
  // using values 'tint', 'intensity' and 'opacity'. Unlike the above shader
  // code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeS1C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD1, { '0' : 'src'   }) +
      TemplateE1 +
      FormatTemplate( TemplateI1, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK2, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-9 fragment shader with color tinting by alpha
  // using values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeS2 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      FormatTemplate( TemplateI2, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK2, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-9 fragment shader with color tinting by alpha
  // using values 'tint', 'intensity' and 'opacity'. Unlike the above shader
  // code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeS2C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      TemplateE2 +
      FormatTemplate( TemplateI2, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK2, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-17 fragment shader with color tinting by
  // alpha using values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeS3 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateD3, { '0' : 'src'   }) +
      FormatTemplate( TemplateI3, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK2, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-17 fragment shader with color tinting by
  // alpha using values 'tint', 'intensity' and 'opacity'. Unlike the above
  // shader code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeS3C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD3, { '0' : 'src'   }) +
      TemplateE3 +
      FormatTemplate( TemplateI3, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK2, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the box-blur-9 fragment shader with color tinting by alpha
  // using values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeS7 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      FormatTemplate( TemplateI7, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK2, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the box-blur-9 fragment shader with color tinting by alpha
  // using values 'tint', 'intensity' and 'opacity'. Unlike the above shader
  // code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeS7C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      TemplateE2 +
      FormatTemplate( TemplateI7, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK2, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the box-blur-17 fragment shader with color tinting by alpha
  // using values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeS8 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateD4, { '0' : 'src'   }) +
      FormatTemplate( TemplateI8, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK2, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the box-blur-17 fragment shader with color tinting by alpha
  // using values 'tint', 'intensity' and 'opacity'. Unlike the above shader
  // code, this version includes the 'clamp to edge' operation.
  var FragShaderCodeS8C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA6 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD4, { '0' : 'src'   }) +
      TemplateE4 +
      FormatTemplate( TemplateI8, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK2, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the fragment shader to copy texture content with opacity
  // specified in 'opacity'.
  var FragShaderCodeU0 =
    TemplateA1 +
    TemplateA5 +
    TemplateB1 +
      FormatTemplate( TemplateI0, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-5 fragment shader with opacity specified in
  // 'opacity'.
  var FragShaderCodeU1 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateB1 +
      FormatTemplate( TemplateD1, { '0' : 'src'   }) +
      FormatTemplate( TemplateI1, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-5 fragment shader with opacity specified in
  // 'opacity'. Unlike the above shader code, this version includes the 'clamp
  // to edge' operation.
  var FragShaderCodeU1C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD1, { '0' : 'src'   }) +
      TemplateE1 +
      FormatTemplate( TemplateI1, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-9 fragment shader with opacity specified in
  // 'opacity'.
  var FragShaderCodeU2 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      FormatTemplate( TemplateI2, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-9 fragment shader with opacity specified in
  // 'opacity'. Unlike the above shader code, this version includes the 'clamp
  // to edge' operation.
  var FragShaderCodeU2C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      TemplateE2 +
      FormatTemplate( TemplateI2, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-17 fragment shader with opacity specified in
  // 'opacity'.
  var FragShaderCodeU3 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateB1 +
      FormatTemplate( TemplateD3, { '0' : 'src'   }) +
      FormatTemplate( TemplateI3, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the gauss-blur-17 fragment shader with opacity specified in
  // 'opacity'. Unlike the above shader code, this version includes the 'clamp
  // to edge' operation.
  var FragShaderCodeU3C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD3, { '0' : 'src'   }) +
      TemplateE3 +
      FormatTemplate( TemplateI3, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the box-blur-9 fragment shader with opacity specified in
  // 'opacity'.
  var FragShaderCodeU7 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      FormatTemplate( TemplateI7, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the box-blur-9 fragment shader with opacity specified in
  // 'opacity'. Unlike the above shader code, this version includes the 'clamp
  // to edge' operation.
  var FragShaderCodeU7C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD2, { '0' : 'src'   }) +
      TemplateE2 +
      FormatTemplate( TemplateI7, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the box-blur-17 fragment shader with opacity specified in
  // 'opacity'.
  var FragShaderCodeU8 =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateB1 +
      FormatTemplate( TemplateD4, { '0' : 'src'   }) +
      FormatTemplate( TemplateI8, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the box-blur-17 fragment shader with opacity specified in
  // 'opacity'. Unlike the above shader code, this version includes the 'clamp
  // to edge' operation.
  var FragShaderCodeU8C =
    TemplateA1 +
    TemplateA2 +
    TemplateA5 +
    TemplateA7 +
    TemplateB1 +
      FormatTemplate( TemplateD4, { '0' : 'src'   }) +
      TemplateE4 +
      FormatTemplate( TemplateI8, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the fragment shader with masking and color tinting by luminance
  // using values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeNR =
    TemplateA1 +
    TemplateA3 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateF0 ) +
      FormatTemplate( TemplateI0, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK1, { '0' : 'color',        '1' : 'color' }) +
      FormatTemplate( TemplateG0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the fragment shader with masking and color tinting by opacity
  // using values 'tint', 'intensity' and 'opacity'.
  var FragShaderCodeNS =
    TemplateA1 +
    TemplateA3 +
    TemplateA5 +
    TemplateA6 +
    TemplateB1 +
      FormatTemplate( TemplateF0 ) +
      FormatTemplate( TemplateI0, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK2, { '0' : 'color',        '1' : 'color' }) +
      FormatTemplate( TemplateG0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // Source code of the fragment shader with opacity specified in 'tint' and an
  // additional mask.
  var FragShaderCodeNU =
    TemplateA1 +
    TemplateA3 +
    TemplateA5 +
    TemplateB1 +
      FormatTemplate( TemplateF0 ) +
      FormatTemplate( TemplateI0, { '0' : 'vec4 color' }) +
      FormatTemplate( TemplateK0, { '0' : 'color',        '1' : 'color' }) +
      FormatTemplate( TemplateG0, { '0' : 'gl_FragColor', '1' : 'color' }) +
    TemplateB2;

  // The following helper function has the job to compile, link and verify the
  // shader programs. If successful, the function returns 'true'.
  function MakePrograms( aGL )
  {
    var vertShader0   = CompileShader( aGL, aGL.VERTEX_SHADER,   VertShaderCode0   );
    var vertShader1   = CompileShader( aGL, aGL.VERTEX_SHADER,   VertShaderCode1   );
    var vertShader2   = CompileShader( aGL, aGL.VERTEX_SHADER,   VertShaderCode2   );
    var vertShader3   = CompileShader( aGL, aGL.VERTEX_SHADER,   VertShaderCode3   );
    var vertShader4   = CompileShader( aGL, aGL.VERTEX_SHADER,   VertShaderCode4   );
    var vertShader5   = CompileShader( aGL, aGL.VERTEX_SHADER,   VertShaderCode5   );
    var vertShader6   = CompileShader( aGL, aGL.VERTEX_SHADER,   VertShaderCode6   );
    var fragShader0   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCode0   );
    var fragShader1   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCode1   );
    var fragShader2   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCode2   );
    var fragShader3   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCode3   );
    var fragShader4   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCode4   );
    var fragShader5   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCode5   );
    var fragShader6   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCode6   );
    var fragShader7   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCode7   );
    var fragShader8   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCode8   );
    var fragShader9   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCode9   );
    var fragShaderA   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeA   );
    var fragShaderB   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeB   );
    var fragShaderC   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeC   );
    var fragShaderD   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeD   );
    var fragShaderE   = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeE   );
    var fragShaderL1  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeL1  );
    var fragShaderL2  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeL2  );
    var fragShaderL3  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeL3  );
    var fragShaderL7  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeL7  );
    var fragShaderL8  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeL8  );
    var fragShaderM1  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeM1  );
    var fragShaderM2  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeM2  );
    var fragShaderM3  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeM3  );
    var fragShaderM7  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeM7  );
    var fragShaderM8  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeM8  );
    var fragShaderN0  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeN0  );
    var fragShaderN1  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeN1  );
    var fragShaderN2  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeN2  );
    var fragShaderN3  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeN3  );
    var fragShaderR0  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeR0  );
    var fragShaderR1  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeR1  );
    var fragShaderR2  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeR2  );
    var fragShaderR3  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeR3  );
    var fragShaderR7  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeR7  );
    var fragShaderR8  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeR8  );
    var fragShaderS0  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeS0  );
    var fragShaderS1  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeS1  );
    var fragShaderS2  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeS2  );
    var fragShaderS3  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeS3  );
    var fragShaderS7  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeS7  );
    var fragShaderS8  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeS8  );
    var fragShaderU0  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeU0  );
    var fragShaderU1  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeU1  );
    var fragShaderU2  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeU2  );
    var fragShaderU3  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeU3  );
    var fragShaderU7  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeU7  );
    var fragShaderU8  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeU8  );
    var fragShaderNR  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeNR  );
    var fragShaderNS  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeNS  );
    var fragShaderNU  = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeNU  );
    var fragShaderL1C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeL1C );
    var fragShaderL2C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeL2C );
    var fragShaderL3C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeL3C );
    var fragShaderL7C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeL7C );
    var fragShaderL8C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeL8C );
    var fragShaderM1C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeM1C );
    var fragShaderM2C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeM2C );
    var fragShaderM3C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeM3C );
    var fragShaderM7C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeM7C );
    var fragShaderM8C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeM8C );
    var fragShaderR1C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeR1C );
    var fragShaderR2C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeR2C );
    var fragShaderR3C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeR3C );
    var fragShaderR7C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeR7C );
    var fragShaderR8C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeR8C );
    var fragShaderS1C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeS1C );
    var fragShaderS2C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeS2C );
    var fragShaderS3C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeS3C );
    var fragShaderS7C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeS7C );
    var fragShaderS8C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeS8C );
    var fragShaderU1C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeU1C );
    var fragShaderU2C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeU2C );
    var fragShaderU3C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeU3C );
    var fragShaderU7C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeU7C );
    var fragShaderU8C = CompileShader( aGL, aGL.FRAGMENT_SHADER, FragShaderCodeU8C );

    aGL.Program0   = LinkProgram( aGL, vertShader0, fragShader0   );
    aGL.Program1   = LinkProgram( aGL, vertShader1, fragShader1   );
    aGL.Program2   = LinkProgram( aGL, vertShader2, fragShader2   );
    aGL.Program3   = LinkProgram( aGL, vertShader2, fragShader3   );
    aGL.Program4   = LinkProgram( aGL, vertShader3, fragShader4   );
    aGL.Program5   = LinkProgram( aGL, vertShader3, fragShader5   );
    aGL.Program6   = LinkProgram( aGL, vertShader3, fragShader6   );
    aGL.Program7   = LinkProgram( aGL, vertShader3, fragShader7   );
    aGL.Program8   = LinkProgram( aGL, vertShader2, fragShader8   );
    aGL.Program9   = LinkProgram( aGL, vertShader3, fragShader9   );
    aGL.ProgramA   = LinkProgram( aGL, vertShader3, fragShaderA   );
    aGL.ProgramB   = LinkProgram( aGL, vertShader4, fragShaderB   );
    aGL.ProgramC   = LinkProgram( aGL, vertShader4, fragShaderC   );
    aGL.ProgramD   = LinkProgram( aGL, vertShader4, fragShaderD   );
    aGL.ProgramE   = LinkProgram( aGL, vertShader4, fragShaderE   );
    aGL.ProgramL1  = LinkProgram( aGL, vertShader5, fragShaderL1  );
    aGL.ProgramL2  = LinkProgram( aGL, vertShader5, fragShaderL2  );
    aGL.ProgramL3  = LinkProgram( aGL, vertShader5, fragShaderL3  );
    aGL.ProgramL7  = LinkProgram( aGL, vertShader5, fragShaderL7  );
    aGL.ProgramL8  = LinkProgram( aGL, vertShader5, fragShaderL8  );
    aGL.ProgramM1  = LinkProgram( aGL, vertShader6, fragShaderM1  );
    aGL.ProgramM2  = LinkProgram( aGL, vertShader6, fragShaderM2  );
    aGL.ProgramM3  = LinkProgram( aGL, vertShader6, fragShaderM3  );
    aGL.ProgramM7  = LinkProgram( aGL, vertShader6, fragShaderM7  );
    aGL.ProgramM8  = LinkProgram( aGL, vertShader6, fragShaderM8  );
    aGL.ProgramN0  = LinkProgram( aGL, vertShader6, fragShaderN0  );
    aGL.ProgramN1  = LinkProgram( aGL, vertShader6, fragShaderN1  );
    aGL.ProgramN2  = LinkProgram( aGL, vertShader6, fragShaderN2  );
    aGL.ProgramN3  = LinkProgram( aGL, vertShader6, fragShaderN3  );
    aGL.ProgramR0  = LinkProgram( aGL, vertShader5, fragShaderR0  );
    aGL.ProgramR1  = LinkProgram( aGL, vertShader5, fragShaderR1  );
    aGL.ProgramR2  = LinkProgram( aGL, vertShader5, fragShaderR2  );
    aGL.ProgramR3  = LinkProgram( aGL, vertShader5, fragShaderR3  );
    aGL.ProgramR7  = LinkProgram( aGL, vertShader5, fragShaderR7  );
    aGL.ProgramR8  = LinkProgram( aGL, vertShader5, fragShaderR8  );
    aGL.ProgramS0  = LinkProgram( aGL, vertShader5, fragShaderS0  );
    aGL.ProgramS1  = LinkProgram( aGL, vertShader5, fragShaderS1  );
    aGL.ProgramS2  = LinkProgram( aGL, vertShader5, fragShaderS2  );
    aGL.ProgramS3  = LinkProgram( aGL, vertShader5, fragShaderS3  );
    aGL.ProgramS7  = LinkProgram( aGL, vertShader5, fragShaderS7  );
    aGL.ProgramS8  = LinkProgram( aGL, vertShader5, fragShaderS8  );
    aGL.ProgramU0  = LinkProgram( aGL, vertShader5, fragShaderU0  );
    aGL.ProgramU1  = LinkProgram( aGL, vertShader5, fragShaderU1  );
    aGL.ProgramU2  = LinkProgram( aGL, vertShader5, fragShaderU2  );
    aGL.ProgramU3  = LinkProgram( aGL, vertShader5, fragShaderU3  );
    aGL.ProgramU7  = LinkProgram( aGL, vertShader5, fragShaderU7  );
    aGL.ProgramU8  = LinkProgram( aGL, vertShader5, fragShaderU8  );
    aGL.ProgramNR  = LinkProgram( aGL, vertShader6, fragShaderNR  );
    aGL.ProgramNS  = LinkProgram( aGL, vertShader6, fragShaderNS  );
    aGL.ProgramNU  = LinkProgram( aGL, vertShader6, fragShaderNU  );
    aGL.ProgramL1C = LinkProgram( aGL, vertShader5, fragShaderL1C );
    aGL.ProgramL2C = LinkProgram( aGL, vertShader5, fragShaderL2C );
    aGL.ProgramL3C = LinkProgram( aGL, vertShader5, fragShaderL3C );
    aGL.ProgramL7C = LinkProgram( aGL, vertShader5, fragShaderL7C );
    aGL.ProgramL8C = LinkProgram( aGL, vertShader5, fragShaderL8C );
    aGL.ProgramM1C = LinkProgram( aGL, vertShader6, fragShaderM1C );
    aGL.ProgramM2C = LinkProgram( aGL, vertShader6, fragShaderM2C );
    aGL.ProgramM3C = LinkProgram( aGL, vertShader6, fragShaderM3C );
    aGL.ProgramM7C = LinkProgram( aGL, vertShader6, fragShaderM7C );
    aGL.ProgramM8C = LinkProgram( aGL, vertShader6, fragShaderM8C );
    aGL.ProgramR1C = LinkProgram( aGL, vertShader5, fragShaderR1C );
    aGL.ProgramR2C = LinkProgram( aGL, vertShader5, fragShaderR2C );
    aGL.ProgramR3C = LinkProgram( aGL, vertShader5, fragShaderR3C );
    aGL.ProgramR7C = LinkProgram( aGL, vertShader5, fragShaderR7C );
    aGL.ProgramR8C = LinkProgram( aGL, vertShader5, fragShaderR8C );
    aGL.ProgramS1C = LinkProgram( aGL, vertShader5, fragShaderS1C );
    aGL.ProgramS2C = LinkProgram( aGL, vertShader5, fragShaderS2C );
    aGL.ProgramS3C = LinkProgram( aGL, vertShader5, fragShaderS3C );
    aGL.ProgramS7C = LinkProgram( aGL, vertShader5, fragShaderS7C );
    aGL.ProgramS8C = LinkProgram( aGL, vertShader5, fragShaderS8C );
    aGL.ProgramU1C = LinkProgram( aGL, vertShader5, fragShaderU1C );
    aGL.ProgramU2C = LinkProgram( aGL, vertShader5, fragShaderU2C );
    aGL.ProgramU3C = LinkProgram( aGL, vertShader5, fragShaderU3C );
    aGL.ProgramU7C = LinkProgram( aGL, vertShader5, fragShaderU7C );
    aGL.ProgramU8C = LinkProgram( aGL, vertShader5, fragShaderU8C );

    // All ok!
    if ( aGL.Program0   && aGL.Program1   && aGL.Program2   && aGL.Program3   && 
         aGL.Program4   && aGL.Program5   && aGL.Program6   && aGL.Program7   &&
         aGL.Program8   && aGL.Program9   && aGL.ProgramA   && aGL.ProgramB   &&
         aGL.ProgramC   && aGL.ProgramD   && aGL.ProgramE   &&                
         aGL.ProgramL1  && aGL.ProgramL2  && aGL.ProgramL3  && aGL.ProgramL7  &&
         aGL.ProgramL8  && aGL.ProgramM1  && aGL.ProgramM2  && aGL.ProgramM3  &&
         aGL.ProgramM7  && aGL.ProgramM8  && aGL.ProgramN0  && aGL.ProgramN1  &&
         aGL.ProgramN2  && aGL.ProgramN3  && aGL.ProgramR0  && aGL.ProgramR1  &&
         aGL.ProgramR2  && aGL.ProgramR3  && aGL.ProgramR7  && aGL.ProgramR8  &&
         aGL.ProgramS0  && aGL.ProgramS1  && aGL.ProgramS2  && aGL.ProgramS3  &&
         aGL.ProgramS7  && aGL.ProgramS8  && aGL.ProgramU0  && aGL.ProgramU1  &&
         aGL.ProgramU2  && aGL.ProgramU3  && aGL.ProgramU7  && aGL.ProgramU8  &&
         aGL.ProgramNR  && aGL.ProgramNS  && aGL.ProgramNU  &&
         aGL.ProgramL1C && aGL.ProgramL2C && aGL.ProgramL3C && aGL.ProgramL7C &&
         aGL.ProgramL8C && aGL.ProgramM1C && aGL.ProgramM2C && aGL.ProgramM3C &&
         aGL.ProgramM7C && aGL.ProgramM8C && aGL.ProgramR1C && aGL.ProgramR2C &&
         aGL.ProgramR3C && aGL.ProgramR7C && aGL.ProgramR8C && aGL.ProgramS1C &&
         aGL.ProgramS2C && aGL.ProgramS3C && aGL.ProgramS7C && aGL.ProgramS8C &&
         aGL.ProgramU1C && aGL.ProgramU2C && aGL.ProgramU3C && aGL.ProgramU7C &&
         aGL.ProgramU8C )
      return true;

    // Failed - release all created programs
    aGL.Program0   = null;
    aGL.Program1   = null;
    aGL.Program2   = null;
    aGL.Program3   = null;
    aGL.Program4   = null;
    aGL.Program5   = null;
    aGL.Program6   = null;
    aGL.Program7   = null;
    aGL.Program8   = null;
    aGL.Program9   = null;
    aGL.ProgramA   = null;
    aGL.ProgramB   = null;
    aGL.ProgramC   = null;
    aGL.ProgramD   = null;
    aGL.ProgramE   = null;
    aGL.ProgramL1  = null;
    aGL.ProgramL2  = null;
    aGL.ProgramL3  = null;
    aGL.ProgramL7  = null;
    aGL.ProgramL8  = null;
    aGL.ProgramM1  = null;
    aGL.ProgramM2  = null;
    aGL.ProgramM3  = null;
    aGL.ProgramM7  = null;
    aGL.ProgramM8  = null;
    aGL.ProgramN0  = null;
    aGL.ProgramN1  = null;
    aGL.ProgramN2  = null;
    aGL.ProgramN3  = null;
    aGL.ProgramR0  = null;
    aGL.ProgramR1  = null;
    aGL.ProgramR2  = null;
    aGL.ProgramR3  = null;
    aGL.ProgramR7  = null;
    aGL.ProgramR8  = null;
    aGL.ProgramS0  = null;
    aGL.ProgramS1  = null;
    aGL.ProgramS2  = null;
    aGL.ProgramS3  = null;
    aGL.ProgramS7  = null;
    aGL.ProgramS8  = null;
    aGL.ProgramU0  = null;
    aGL.ProgramU1  = null;
    aGL.ProgramU2  = null;
    aGL.ProgramU3  = null;
    aGL.ProgramU7  = null;
    aGL.ProgramU8  = null;
    aGL.ProgramNR  = null;
    aGL.ProgramNS  = null;
    aGL.ProgramNU  = null;
    aGL.ProgramL1C = null;
    aGL.ProgramL2C = null;
    aGL.ProgramL3C = null;
    aGL.ProgramL7C = null;
    aGL.ProgramL8C = null;
    aGL.ProgramM1C = null;
    aGL.ProgramM2C = null;
    aGL.ProgramM3C = null;
    aGL.ProgramM7C = null;
    aGL.ProgramM8C = null;
    aGL.ProgramR1C = null;
    aGL.ProgramR2C = null;
    aGL.ProgramR3C = null;
    aGL.ProgramR7C = null;
    aGL.ProgramR8C = null;
    aGL.ProgramS1C = null;
    aGL.ProgramS2C = null;
    aGL.ProgramS3C = null;
    aGL.ProgramS7C = null;
    aGL.ProgramS8C = null;
    aGL.ProgramU1C = null;
    aGL.ProgramU2C = null;
    aGL.ProgramU3C = null;
    aGL.ProgramU7C = null;
    aGL.ProgramU8C = null;

    return false;
  }

  // The following helper function has the job to compile the given source code
  // to a shader object and if successful return it. In case of an error, the
  // corresponding error message will appear.
  function CompileShader( aGL, aShaderType, aSourceCode )
  {
    var shader = aGL.createShader( aShaderType );

    // Compile the shader
    aGL.shaderSource ( shader, aSourceCode );
    aGL.compileShader( shader );
    
    // Retrive the compilation status and evtl. error/warning message
    var status = aGL.getShaderParameter( shader, aGL.COMPILE_STATUS );
    var log    = aGL.getShaderInfoLog( shader );

    // Compilation were succesful, but a message is left by the shader compiler.
    // Note: info log simetimes is a single 'new-line' character. Thus print
    // the log info if it contains more than 1 sign.
    if ( status && ( log.length > 1 ))
      console.log( "EmWi info: " + log );

    // Compilation failed. Print the error message
    if ( !status )
      console.log( "EmWi error: " + log );

    // If failed - rewind
    if ( !status )
      return null;
    
    return shader;
  }

  // The following helper function has the job to link the both shader objects
  // to a single program. If successful, the function returns the program
  // object.
  function LinkProgram( aGL, aVertShader, aFragShader )
  {
    var program = aGL.createProgram();
    
    // Invalid shader objects ...
    if ( !aVertShader || !aFragShader )
      return null;

    // Attach the compiled shader objects, establish a vertex attribute mapping
    // and link the entire program
    aGL.attachShader( program, aVertShader );
    aGL.attachShader( program, aFragShader );
    aGL.bindAttribLocation( program, aGL.ATTRIB_DST_POS, "dst_pos" );
    aGL.bindAttribLocation( program, aGL.ATTRIB_SRC_POS, "src_pos" );
    aGL.bindAttribLocation( program, aGL.ATTRIB_SRC_CLR, "src_clr" );
    aGL.bindAttribLocation( program, aGL.ATTRIB_CLR_POS, "clr_pos" );
    aGL.bindAttribLocation( program, aGL.ATTRIB_MSK_POS, "msk_pos" );
    aGL.linkProgram( program );

    var status = aGL.getProgramParameter( program, aGL.LINK_STATUS );
    var log    = aGL.getProgramInfoLog( program );

    // Linking were succesful, but a message is left by the shader linker
    // Note: info log simetimes is a single 'new-line' character. Thus print
    // the log info if it contains more than 1 sign.
    if ( status && ( log.length > 1 ))
      console.log( "EmWi info: " + log );

    // Linking failed. Print the error message
    if ( !status )
      console.log( "EmWi error: " + log );

    // If failed - rewind
    if ( !status )
      return null;
    
    // Location of shader variables to access them later
    var uniformDstMap    = aGL.getUniformLocation( program, "dst_map"     );
    var uniformSrc       = aGL.getUniformLocation( program, "src"         );
    var uniformSrcOfs    = aGL.getUniformLocation( program, "src_ofs"     );
    var uniformSrcSize   = aGL.getUniformLocation( program, "src_size"    );
    var uniformSrcPxl    = aGL.getUniformLocation( program, "src_pxl"     );
    var uniformSrcStep   = aGL.getUniformLocation( program, "src_step"    );
    var uniformClampTL   = aGL.getUniformLocation( program, "clamp_tl"    );
    var uniformClampBR   = aGL.getUniformLocation( program, "clamp_br"    );
    var uniformClrTL     = aGL.getUniformLocation( program, "clr_tl"      );
    var uniformClrTR     = aGL.getUniformLocation( program, "clr_tr"      );
    var uniformClrBR     = aGL.getUniformLocation( program, "clr_br"      );
    var uniformClrBL     = aGL.getUniformLocation( program, "clr_bl"      );
    var uniformTint      = aGL.getUniformLocation( program, "tint"        );
    var uniformIntensity = aGL.getUniformLocation( program, "intensity"   );
    var uniformOpacity   = aGL.getUniformLocation( program, "opacity"     );
    var uniformMsk       = aGL.getUniformLocation( program, "msk"         );
    var uniformMskPxl    = aGL.getUniformLocation( program, "msk_pxl"     );
    var uniformMskStep   = aGL.getUniformLocation( program, "msk_step"    );
    var uniformMskInvert = aGL.getUniformLocation( program, "msk_invert"  );

    aGL.useProgram( program );
    
    // Connect the 'src' and 'mask' uniforms to the corresponding texture units
    if ( uniformSrc ) aGL.uniform1i( uniformSrc, 0 );
    if ( uniformMsk ) aGL.uniform1i( uniformMsk, 1 );

    // Remember the position of the diverse uniforms in order to be able to
    // modify them later
    program.UniformDstMap    = uniformDstMap;
    program.UniformSrcOfs    = uniformSrcOfs;
    program.UniformSrcSize   = uniformSrcSize;
    program.UniformSrcPxl    = uniformSrcPxl;
    program.UniformSrcStep   = uniformSrcStep;
    program.UniformClampTL   = uniformClampTL;
    program.UniformClampBR   = uniformClampBR;
    program.UniformClrTL     = uniformClrTL;
    program.UniformClrTR     = uniformClrTR;
    program.UniformClrBR     = uniformClrBR;
    program.UniformClrBL     = uniformClrBL;
    program.UniformTint      = uniformTint;
    program.UniformIntensity = uniformIntensity;
    program.UniformOpacity   = uniformOpacity;
    program.UniformMskPxl    = uniformMskPxl;
    program.UniformMskStep   = uniformMskStep;
    program.UniformMskInvert = uniformMskInvert;
    
    // Successful
    return program;
  }

  // The following helper function binds new destination to the OpenGL context.
  // For the first time, new framebuffer object is created for the surface.
  function SelectDst( aGL, aDst, aProgram )
  {
    // Changing drawing destination
    if ( aDst !== aGL.DstSurface )
    {
      // The destination surface is still missing an own framebuffer object - 
      // prepare new framebuffer and attach the texture to it.
      if ( aDst && aDst.Texture && !aDst.Framebuffer )
      {
        aDst.Framebuffer = aGL.createFramebuffer();
        aGL.bindFramebuffer( aGL.FRAMEBUFFER, aDst.Framebuffer );
        aGL.framebufferTexture2D( aGL.FRAMEBUFFER, aGL.COLOR_ATTACHMENT0, 
                                  aGL.TEXTURE_2D, aDst.Texture, 0 );
      }

      // Bind the new framebuffer as drawing destination
      else if ( aDst )
        aGL.bindFramebuffer( aGL.FRAMEBUFFER, aDst? aDst.Framebuffer : null );

      // Adjust the viewport to the entire destination surface area.
      if ( aDst )
        aGL.viewport( 0, 0, aDst.RealWidth, aDst.RealHeight );

      // Remember the selected destination
      aGL.DstSurface = aDst;
    }

    // Changing shader program
    if ( aGL.CurProgram !== aProgram )
    {
      aGL.useProgram( aProgram );
      aGL.CurProgram = aProgram;
    }
    
    // Does the shader program uniforms need initialization for the destination.
    // This will occure when the destination size is changed, so matrix is 
    // reloaded
    if ( aDst && aProgram && (
       ( aDst.InvDstWidth  !== aProgram.InvDstWidth  ) ||
       ( aDst.InvDstHeight !== aProgram.InvDstHeight ) ||
       ( !!aDst.Texture    !== !!aProgram.Texture )))
    {
      var matrix = aGL.DstMatrix;

      // The vertex shader should convert the destination coordinates to OpenGL
      // coordinate space
      if ( aDst.Texture )
      {
        matrix[0] = aDst.InvDstWidth;
        matrix[5] = aDst.InvDstHeight;
        matrix[7] = -1;
      }
      
      else
      {
        matrix[0] =  aDst.InvDstWidth;
        matrix[5] = -aDst.InvDstHeight;
        matrix[7] =  1;
      }

      // Transfer the matrix to the current WebGL shader program
      aGL.uniformMatrix4fv( aProgram.UniformDstMap, false, matrix );
      
      // To avoid uniform reloading remember the values just stored in the 
      // shader object
      aProgram.InvDstWidth  =   aDst.InvDstWidth;
      aProgram.InvDstHeight =   aDst.InvDstHeight;
      aProgram.Texture      = !!aDst.Texture;
    }

    // In case of fullscreen update start the update with a clear operation
    if ( aDst && aDst.ClearOnSelect )
    {
      aGL.clear( aGL.COLOR_BUFFER_BIT );
      aDst.ClearOnSelect = false;
    }
  }

  // The following helper function binds new source to the WebGL context.
  function SelectSrc( aGL, aSrc, aFilter )
  {
    // Bind the texture of the given source surface
    if ( aSrc !== aGL.SrcSurface )
    {
      if ( aSrc )
        aGL.bindTexture( aGL.TEXTURE_2D, aSrc.Texture );
      aGL.SrcSurface = aSrc;
    }

    // Change the bi-linear filter mode
    if ( aSrc && ( !aSrc.Filter !== !aFilter ))
    {
      if ( aFilter )
      {
        aGL.texParameteri( aGL.TEXTURE_2D, aGL.TEXTURE_MIN_FILTER, aGL.LINEAR );
        aGL.texParameteri( aGL.TEXTURE_2D, aGL.TEXTURE_MAG_FILTER, aGL.LINEAR );
      }
      else
      {
        aGL.texParameteri( aGL.TEXTURE_2D, aGL.TEXTURE_MIN_FILTER, aGL.NEAREST );
        aGL.texParameteri( aGL.TEXTURE_2D, aGL.TEXTURE_MAG_FILTER, aGL.NEAREST );
      }

      aSrc.Filter = aFilter;
    }
  }

  // The following helper function binds new mask to the WebGL context.
  function SelectMsk( aGL, aMask, aFilter )
  {
    // Mask is bound to the second texture unit
    aGL.activeTexture( aGL.TEXTURE1 );

    // Bind the texture of the given mask surface
    if ( aMask !== aGL.MskSurface )
    {
      if ( aMask )
        aGL.bindTexture( aGL.TEXTURE_2D, aMask.Texture );
      aGL.MskSurface = aMask;
    }

    // Change the bi-linear filter mode
    if ( aMask && ( !aMask.Filter !== !aFilter ))
    {
      if ( aFilter )
      {
        aGL.texParameteri( aGL.TEXTURE_2D, aGL.TEXTURE_MIN_FILTER, aGL.LINEAR );
        aGL.texParameteri( aGL.TEXTURE_2D, aGL.TEXTURE_MAG_FILTER, aGL.LINEAR );
      }
      else
      {
        aGL.texParameteri( aGL.TEXTURE_2D, aGL.TEXTURE_MIN_FILTER, aGL.NEAREST );
        aGL.texParameteri( aGL.TEXTURE_2D, aGL.TEXTURE_MAG_FILTER, aGL.NEAREST );
      }

      aMask.Filter = aFilter;
    }

    // All other operations involve the firest texture unit.
    aGL.activeTexture( aGL.TEXTURE0 );
  }

  // The following helper function performs an interpolation between the given 
  // two colors. The interpolation is controlled by the given factor aFactor.
  // If aFactor <= 0, the first color is selected. If aFactor >= 1, the second
  // color is taken. In all other cases a mix-value is used.
  function InterpolateColor( aColor1, aColor2, aFactor )
  {
    if ( aFactor <= 0 ) return aColor1;
    if ( aFactor >= 1 ) return aColor2;
    
    var c10 =  ( aColor1 & 0xFF );
    var c11 = (( aColor1 >> 8   ) & 0xFF );
    var c12 = (( aColor1 >> 16  ) & 0xFF );
    var c13 = (( aColor1 >> 24  ) & 0xFF );

    var c20 =  ( aColor2 & 0xFF );
    var c21 = (( aColor2 >> 8   ) & 0xFF );
    var c22 = (( aColor2 >> 16  ) & 0xFF );
    var c23 = (( aColor2 >> 24  ) & 0xFF );
    
    c10 += ( c20 - c10 ) * aFactor;
    c11 += ( c21 - c11 ) * aFactor;
    c12 += ( c22 - c12 ) * aFactor;
    c13 += ( c23 - c13 ) * aFactor;

    return c10 | ( c11 << 8 ) | ( c12 << 16 ) | ( c13 << 24 );
  }

  // The following function evaluates the given path and searches for segments
  // which do intersect the vertical plane aPlane. If found, the function splits
  // the affected segments. The function returns the resulting number of path
  // corners after the intersection.
  function IntersectPathVertical( aPathF, aPathI, aNoOfCorners, aOpenPath,
    aPlane )
  {
    // Verifies all segments of the path
    for ( var i = 0; i < ( aNoOfCorners - ( aOpenPath? 1 : 0 )); i++ )
    {
      // Get the start and the end index of the current segment
      var i1  = i;
      var i2  = ( i + 1 ) % aNoOfCorners;
      var i1X = aPathF[ i1 * 11 ];
      var i2X = aPathF[ i2 * 11 ];

      // Does the plane intersect the current segment?
      if ((( aPlane > i1X ) && ( aPlane < i2X )) ||
          (( aPlane < i1X ) && ( aPlane > i2X )))
      {
        // Calculate the interpolation factor for the given intersection 
        // position
        var f  = ( aPlane - i1X ) / ( i2X - i1X );
        var fn = 1.0 - f;

        // Vertex buffer areas to move in order to make space for a new vertex
        // at the intersection position
        var entries = ( aNoOfCorners - i - 1 ) * 11;

        // Move the vertex buffer areas and thus make space for a new vertex
        if ( entries > 0 )
        {
          var start = ( i + 1 ) * 11;
          aPathF.set( aPathF.subarray( start, start + entries ), start + 11 );
        }

        // ... adjust the indices 
        aNoOfCorners++;
        if ( i2 ) i2++;
        i++;

        // Obtain the attributes of the vertices to interpolate the values for
        // a new intermediate vertex
        var y1  = aPathF[ i1 =  i1 * 11 + 1 ];
        var s1  = aPathF[ i1 += 1 ];
        var t1  = aPathF[ i1 += 1 ];
        var w1  = aPathF[ i1 += 1 ];
        var c1  = aPathI[ i1 += 1 ];
        var cs1 = aPathF[ i1 += 1 ];
        var ct1 = aPathF[ i1 += 1 ];
        var cw1 = aPathF[ i1 += 1 ];
        var ms1 = aPathF[ i1 += 1 ];
        var mt1 = aPathF[ i1 +  1 ];
        var y2  = aPathF[ i2 =  i2 * 11 + 1 ];
        var s2  = aPathF[ i2 += 1 ];
        var t2  = aPathF[ i2 += 1 ];
        var w2  = aPathF[ i2 += 1 ];
        var c2  = aPathI[ i2 += 1 ];
        var cs2 = aPathF[ i2 += 1 ];
        var ct2 = aPathF[ i2 += 1 ];
        var cw2 = aPathF[ i2 += 1 ];
        var ms2 = aPathF[ i2 += 1 ];
        var mt2 = aPathF[ i2 +  1 ];
        
        // Interpolate the values for an intermediate vertex
        if ( y1  !==  y2 )  y1 = y1  * fn +  y2 * f;
        if ( s1  !==  s2 )  s1 = s1  * fn +  s2 * f;
        if ( t1  !==  t2 )  t1 = t1  * fn +  t2 * f;
        if ( w1  !==  w2 )  w1 = w1  * fn +  w2 * f;
        if ( c1  !==  c2 )  c1 = InterpolateColor( c1, c2, f );
        if ( cs1 !== cs2 ) cs1 = cs1 * fn + cs2 * f;
        if ( ct1 !== ct2 ) ct1 = ct1 * fn + ct2 * f;
        if ( cw1 !== cw2 ) cw1 = cw1 * fn + cw2 * f;
        if ( ms1 !== ms2 ) ms1 = ms1 * fn + ms2 * f;
        if ( mt1 !== mt2 ) mt1 = mt1 * fn + mt2 * f;

        // Store the values of the new intermediate vertex
        aPathF[ i1  = i * 11 ] = aPlane;
        aPathF[ i1 += 1      ] = y1;
        aPathF[ i1 += 1      ] = s1;
        aPathF[ i1 += 1      ] = t1;
        aPathF[ i1 += 1      ] = w1;
        aPathI[ i1 += 1      ] = c1;
        aPathF[ i1 += 1      ] = cs1;
        aPathF[ i1 += 1      ] = ct1;
        aPathF[ i1 += 1      ] = cw1;
        aPathF[ i1 += 1      ] = ms1;
        aPathF[ i1 +  1      ] = mt1;
      }
    }

    return aNoOfCorners;
  }

  // The following function evaluates the given path and searches for segments
  // which do intersect the horizontal plane aPlane. If found, the function 
  // splits the affected segments. The function returns the resulting number of
  // segments in the path after the intersection.
  function IntersectPathHorizontal( aPathF, aPathI, aNoOfCorners, aOpenPath,
    aPlane )
  {
    // Verifies all segments of the path
    for ( var i = 0; i < ( aNoOfCorners - ( aOpenPath? 1 : 0 )); i++ )
    {
      // Get the start and the end index of the current segment
      var i1  = i;
      var i2  = ( i + 1 ) % aNoOfCorners;
      var i1Y = aPathF[ i1 * 11 + 1 ];
      var i2Y = aPathF[ i2 * 11 + 1 ];

      // Does the plane intersect the current segment?
      if ((( aPlane > i1Y ) && ( aPlane < i2Y )) ||
          (( aPlane < i1Y ) && ( aPlane > i2Y )))
      {
        // Calculate the interpolation factor for the given intersection 
        // position
        var f  = ( aPlane - i1Y ) / ( i2Y - i1Y );
        var fn = 1.0 - f;

        // Vertex buffer areas to move in order to make space for a new vertex
        // at the intersection position
        var entries = ( aNoOfCorners - i - 1 ) * 11;

        // Move the vertex buffer areas and thus make space for a new vertex
        if ( entries > 0 )
        {
          var start = ( i + 1 ) * 11;
          aPathF.set( aPathF.subarray( start, start + entries ), start + 11 );
        }

        // ... adjust the indices
        aNoOfCorners++;
        if ( i2 ) i2++;
        i++;

        // Obtain the attributes of the vertices to interpolate the values for
        // a new intermediate vertex
        var x1  = aPathF[ i1 *= 11 ];
        var s1  = aPathF[ i1 +=  2 ];
        var t1  = aPathF[ i1 +=  1 ];
        var w1  = aPathF[ i1 +=  1 ];
        var c1  = aPathI[ i1 +=  1 ];
        var cs1 = aPathF[ i1 +=  1 ];
        var ct1 = aPathF[ i1 +=  1 ];
        var cw1 = aPathF[ i1 +=  1 ];
        var ms1 = aPathF[ i1 +=  1 ];
        var mt1 = aPathF[ i1 +   1 ];
        var x2  = aPathF[ i2 *= 11 ];
        var s2  = aPathF[ i2 +=  2 ];
        var t2  = aPathF[ i2 +=  1 ];
        var w2  = aPathF[ i2 +=  1 ];
        var c2  = aPathI[ i2 +=  1 ];
        var cs2 = aPathF[ i2 +=  1 ];
        var ct2 = aPathF[ i2 +=  1 ];
        var cw2 = aPathF[ i2 +=  1 ];
        var ms2 = aPathF[ i2 +=  1 ];
        var mt2 = aPathF[ i2 +   1 ];

        // Interpolate the values for an intermediate vertex
        if ( x1  !== x2  )  x1 =  x1 * fn +  x2 * f;
        if ( s1  !== s2  )  s1 =  s1 * fn +  s2 * f;
        if ( t1  !== t2  )  t1 =  t1 * fn +  t2 * f;
        if ( w1  !== w2  )  w1 =  w1 * fn +  w2 * f;
        if ( c1  !== c2  )  c1 = InterpolateColor( c1, c2, f );
        if ( cs1 !== cs2 ) cs1 = cs1 * fn + cs2 * f;
        if ( ct1 !== ct2 ) ct1 = ct1 * fn + ct2 * f;
        if ( cw1 !== cw2 ) cw1 = cw1 * fn + cw2 * f;
        if ( ms1 !== ms2 ) ms1 = ms1 * fn + ms2 * f;
        if ( mt1 !== mt2 ) mt1 = mt1 * fn + mt2 * f;

        // Store the values of the new intermediate vertex
        aPathF[ i1  = i * 11 ] = x1;
        aPathF[ i1 += 1      ] = aPlane;
        aPathF[ i1 += 1      ] = s1;
        aPathF[ i1 += 1      ] = t1;
        aPathF[ i1 += 1      ] = w1;
        aPathI[ i1 += 1      ] = c1;
        aPathF[ i1 += 1      ] = cs1;
        aPathF[ i1 += 1      ] = ct1;
        aPathF[ i1 += 1      ] = cw1;
        aPathF[ i1 += 1      ] = ms1;
        aPathF[ i1 +  1      ] = mt1;
      }
    }

    return aNoOfCorners;
  }


  // The following function evaluates the corners of the path and edjects all
  // corners which lie outside the clipping area. The function returns the
  // remaining number of corners within the path.
  function ClipPathVertical( aPath, aNoOfCorners, aLeft, aRight )
  {
    // Verifies all corners of the polygon
    for ( var i = 0; i < aNoOfCorners; i++ )
    {
      var x = aPath[ i * 11 ];

      // Does the corner lies outside the clipping area? --> Reject the
      // corner!
      if (( x < aLeft ) || ( x > aRight ))
      {
        // Vertex buffer areas to move in order to reject the 'i' vertex
        var entries = ( aNoOfCorners - i - 1 ) * 11;

        // Move the vertex buffer areas and thus remove the undesired vertex
        if ( entries > 0 )
        {
          var start = ( i + 1 ) * 11;
          aPath.set( aPath.subarray( start, start + entries ), start - 11 );
        }

        i--;
        aNoOfCorners--;
      }
    }

    return aNoOfCorners;
  }

  // The following function evaluates the corners of the path and edjects all
  // corners which lie outside the clipping area. The function returns the
  // remaining number of corners within the path.
  function ClipPathHorizontal( aPath, aNoOfCorners, aTop, aBottom )
  {
    // Verifies all corners of the polygon
    for ( var i = 0; i < aNoOfCorners; i++ )
    {
      var y = aPath[ i * 11 + 1 ];

      // Does the corner lies outside the clipping area? --> Reject the
      // corner!
      if (( y < aTop ) || ( y > aBottom ))
      {
        // Vertex buffer areas to move in order to reject the 'i' vertex
        var entries = ( aNoOfCorners - i - 1 ) * 11;
        
        // Move the vertex buffer areas and thus remove the undesired vertex
        if ( entries > 0 )
        {
          var start = ( i + 1 ) * 11;
          aPath.set( aPath.subarray( start, start + entries ), start - 11 );
        }

        i--;
        aNoOfCorners--;
      }
    }

    return aNoOfCorners;
  }

  // The following function stores the RGBA color components in the 
  // corresponding entries of an array as normalized values in range
  // 0.0 .. 1.0. The returned colors are already alpha-premultiplied. */
  function ColorToFloatArray( aColor )
  {
    var a   = (( aColor >> 24 ) & 0xFF ) / 255.0;
    var apm = a / 255.0;

    return [(( aColor >>  0 ) & 0xFF ) * apm,
            (( aColor >>  8 ) & 0xFF ) * apm,
            (( aColor >> 16 ) & 0xFF ) * apm,
            a ];
  }

  // Masks for quick evaluation and modification of the glyph cache surface
  // allocation map.
  var ColumnMasks = [
    0x00000000,
    0x00000001, 0x00000003, 0x00000007, 0x0000000F,
    0x0000001F, 0x0000003F, 0x0000007F, 0x000000FF,
    0x000001FF, 0x000003FF, 0x000007FF, 0x00000FFF,
    0x00001FFF, 0x00003FFF, 0x00007FFF, 0x0000FFFF,
    0x0001FFFF, 0x0003FFFF, 0x0007FFFF, 0x000FFFFF,
    0x001FFFFF, 0x003FFFFF, 0x007FFFFF, 0x00FFFFFF,
    0x01FFFFFF, 0x03FFFFFF, 0x07FFFFFF, 0x0FFFFFFF,
    0x1FFFFFFF, 0x3FFFFFFF, 0x7FFFFFFF, 0xFFFFFFFF
  ];

  // The following helper function searches within the glyph cache allocation 
  // map for a free area to accommodate a glyph with the given size. If 
  // successful, the function returns the origin of the area as an array with
  // two entries: column, row. If no area could be found, null is returned. 
  function FindFreeGlyphCacheArea( aThis, aNoOfColumns, aNoOfRows )
  {
    var lastRow = aThis._GlyphSurfaceCells - aNoOfRows;
    var lastCol = aThis._GlyphSurfaceCells >> 5;

    // Repeat until all allocation map rows and columns have been evaluated
    for ( var r = 0; r <= lastRow; r++ )
      for ( var c = 0; c < lastCol; c++ )
      {
        var count = 32 - aNoOfColumns;
        var mask  = ColumnMasks[ aNoOfColumns ];
        var word  = aThis._GlyphCacheSurfaceMap[ r * lastCol + c ];
        var found;

        // Within the row search for a continuous serie of free tiles.
        do
        {
          while ( count && ( word & mask ))
          {
            mask <<= 1;
            count--;
          }

          // Could found a row sequence of free tiles? Then ...
          found = !( word & mask );

          // ... ensure the following rows are also empty to accommodate the
          // entire glyph - search columns-wise
          for ( var rr = r + 1; found && ( rr < ( r + aNoOfRows )); rr++ )
            found = !( aThis._GlyphCacheSurfaceMap[ rr * lastCol + c ] & mask );

          if ( !found )
          {
            mask <<= 1;
            count--;
          }
        }
        while ( !found && ( count > 0 ));

        /* The area could be found */
        if ( found )
          return [( c * 32 ) + 32 - aNoOfColumns - count, r ];
      }

    // The evaluation is done without any success
    return null;
  }

  // The following helper function marks the given area within the glyph cache
  // allocation map as occupied.
  function ReserveGlyphCacheArea( aThis, aColumn, aRow, aNoOfColumns, aNoOfRows )
  {
    var mask    = ColumnMasks[ aNoOfColumns ] << ( aColumn & 0x1F );
    var c       = aColumn >> 5;
    var lastCol = aThis._GlyphSurfaceCells >> 5;

    for ( ; aNoOfRows > 0; aRow++, aNoOfRows-- )
      aThis._GlyphCacheSurfaceMap[ aRow * lastCol + c ] |= mask;
  }

  // The following helper function marks the given area within the glyph cache
  // allocation map as unused.
  function ReleaseGlyphCacheArea( aThis, aColumn, aRow, aNoOfColumns, aNoOfRows )
  {
    var mask    = ~( ColumnMasks[ aNoOfColumns ] << ( aColumn & 0x1F ));
    var c       = aColumn >> 5;
    var lastCol = aThis._GlyphSurfaceCells >> 5;

    for ( ; aNoOfRows > 0; aRow++, aNoOfRows-- )
      aThis._GlyphCacheSurfaceMap[ aRow * lastCol + c ] &= mask;
  }

  // The following helper function stores the passed glyph at the begin of the
  // global glyph cache.
  function CacheGlyph( aThis, aGlyph )
  {
    aGlyph.Older = aThis._GlyphCacheHead;
    aGlyph.Newer = null;

    // Store the glyph in the global cache list
    if ( aThis._GlyphCacheHead ) aThis._GlyphCacheHead.Newer = aGlyph;
    else                         aThis._GlyphCacheTail       = aGlyph;

    aThis._GlyphCacheHead = aGlyph;
    
    // Store the glyph in the associated font's private cache table
    aGlyph.Cache[ aGlyph.GlyphId ] = aGlyph;
  }

  // The following helper function removes the passed glyph from the global 
  // glyph cache.
  function UncacheGlyph( aThis, aGlyph )
  {
    // Break the global cache list and remove the glyph
    if ( aGlyph.Older ) aGlyph.Older.Newer    = aGlyph.Newer;
    else                aThis._GlyphCacheTail = aGlyph.Newer;

    if ( aGlyph.Newer ) aGlyph.Newer.Older    = aGlyph.Older;
    else                aThis._GlyphCacheHead = aGlyph.Older;

    aGlyph.Older = null;
    aGlyph.Newer = null;

    // Remove the glyph from the associated font's private cache table
    aGlyph.Cache[ aGlyph.GlyphId ] = null;
  }

  // The following helper function searches the glyphs array aGlyphs for the 
  // character code aCharCode. If successful, the function returns the position
  // within the aGlyphs string where the desired glyph is defined. If the glyph
  // couldn't be found, -1 is returned;
  function FindGlyph( aCharCode, aGlyphs, aCount )
  {
    var index = 0;
    var min   = 0;
    var max   = aCount - 1;
    var comp  = -1;
    var pos;
    
    /* repeat until the desired glyph resource is found, or the end of the 
       array is reached */
    while( max >= min )
    {
      index = ( max + min ) >> 1;
      pos   = index * 8;
      comp  = aCharCode - aGlyphs.charCodeAt( pos );

      // found?
      if ( !comp )
        return pos;

      // otherwise confine the search to the upper half of the array
      if ( comp > 0 )
        min = index + 1 ;

      // or to the lower half
      else if ( comp < 0 )
        max = index - 1;
    }

    // not found
    return -1;
  }
  
  // A table used as a node tree for the glyph decompression.
  var DecompressTree = [
    [ 0x10, 0x01 ], [ 0x02, 0x05 ], [ 0x03, 0x04 ], [ 0x11, 0x12 ],
    [ 0x14, 0x18 ], [ 0x06, 0x09 ], [ 0x07, 0x08 ], [ 0x13, 0x16 ],
    [ 0x17, 0x1C ], [ 0x0A, 0x0B ], [ 0x1E, 0x1F ], [ 0x0C, 0x0D ],
    [ 0x15, 0x19 ], [ 0x1A, 0x0E ], [ 0x1B, 0x1D ]];

  // The following function decompresses aCount bits from the bit stream aSrc
  // starting at the position aOffset and stores the decompressed data in aDest.
  // The bit stream is provided as a string and aDest is a Uint8Array. This
  // function is intended to decompress monochrome glyphs.
  function Decompress1( aSrc, aDest, aOffset, aCount )
  {
    var data;
    var inx     = 0;
    var srcInx  = 0;
    var dstInx  = 0;
    var dstSize = aDest.length;
    
    // Determinate the index of the data word where the compressed bit-stream
    // begins and calculate the offset to the first data bit within the word.
    srcInx   = aOffset >> 4;
    aOffset &= 0xF;

    // Get the content of this data word and shift it, so the first compressed
    // bit lies at the bit position 0.
    data = aSrc.charCodeAt( srcInx++ ) >> aOffset;

    // Repeat until all compressed bits are evaluated.
    while ( aCount-- )
    {
      // Determinate the next node in the tree.
      if ( data & 1 ) inx = DecompressTree[ inx ][ 1 ];
      else            inx = DecompressTree[ inx ][ 0 ];

      // A leaf node is reached? Store the uncompressed bits and start the
      // next compressed sequence.
      if ( inx > 15 )
      {
        inx -= 16;

        aDest[ dstInx++ ] = ( inx & 0x01 )? 0xFF : 0x00;

        // Is there a space to take one more?
        if ( dstInx !== dstSize )
          aDest[ dstInx++ ] = ( inx & 0x02 )? 0xFF : 0x00;

        // Is there a space to take one more?
        if ( dstInx !== dstSize )
          aDest[ dstInx++ ] = ( inx & 0x04 )? 0xFF : 0x00;

        // Is there a space to take one more?
        if ( dstInx !== dstSize )
          aDest[ dstInx++ ] = ( inx & 0x08 )? 0xFF : 0x00;

        inx = 0;
      }
        
      // Continue with the next bit - if all bits are processed, get the
      // content of the next word.
      if (( aOffset = ( aOffset + 1 )) & 0x0F )
        data >>= 1;
      else
        data = aSrc.charCodeAt( srcInx++ );
    }
  }

  // The following function decompresses aCount bits from the bit stream aSrc
  // starting at the position aOffset and stores the decompressed data in aDest.
  // The bit stream is provided as a string and aDest is a Uint8Array. This
  // function is intended to decompress antialiased glyphs with 4 levels of
  // opacity.
  function Decompress2( aSrc, aDest, aOffset, aCount )
  {
    var trans   = [ 0x00, 0x55, 0xAA, 0xFF ];
    var data;
    var inx     = 0;
    var srcInx  = 0;
    var dstInx  = 0;
    var dstSize = aDest.length;
    
    // Determinate the index of the data word where the compressed bit-stream
    // begins and calculate the offset to the first data bit within the word.
    srcInx   = aOffset >> 4;
    aOffset &= 0xF;

    // Get the content of this data word and shift it, so the first compressed
    // bit lies at the bit position 0.
    data = aSrc.charCodeAt( srcInx++ ) >> aOffset;

    // Repeat until all compressed bits are evaluated.
    while ( aCount-- )
    {
      // Determinate the next node in the tree.
      if ( data & 1 ) inx = DecompressTree[ inx ][ 1 ];
      else            inx = DecompressTree[ inx ][ 0 ];

      // A leaf node is reached? Store the uncompressed bits and start the
      // next compressed sequence.
      if ( inx > 15 )
      {
        inx -= 16;

        aDest[ dstInx++ ] = trans[ inx & 0x03 ];

        /* Is there a space to take one more? */
        if ( dstInx !== dstSize )
          aDest[ dstInx++ ] = trans[ inx >> 2 ];

        inx = 0;
      }
        
      // Continue with the next bit - if all bits are processed, get the
      // content of the next word.
      if (( aOffset = ( aOffset + 1 )) & 0x0F )
        data >>= 1;
      else
        data = aSrc.charCodeAt( srcInx++ );
    }
  }

  // The following function decompresses aCount bits from the bit stream aSrc
  // starting at the position aOffset and stores the decompressed data in aDest.
  // The bit stream is provided as a string and aDest is a Uint8Array. This
  // function is intended to decompress antialiased glyphs with 16 levels of
  // opacity.
  function Decompress4( aSrc, aDest, aOffset, aCount )
  {
    var data;
    var inx     = 0;
    var srcInx  = 0;
    var dstInx  = 0;
    var dstSize = aDest.length;
    
    // Determinate the index of the data word where the compressed bit-stream
    // begins and calculate the offset to the first data bit within the word.
    srcInx   = aOffset >> 4;
    aOffset &= 0xF;

    // Get the content of this data word and shift it, so the first compressed
    // bit lies at the bit position 0.
    data = aSrc.charCodeAt( srcInx++ ) >> aOffset;

    // Repeat until all compressed bits are evaluated.
    while ( aCount-- )
    {
      // Determinate the next node in the tree.
      if ( data & 1 ) inx = DecompressTree[ inx ][ 1 ];
      else            inx = DecompressTree[ inx ][ 0 ];

      // A leaf node is reached? Store the uncompressed bits and start the
      // next compressed sequence.
      if ( inx > 15 )
      {
        inx -= 16;
        aDest[ dstInx++ ] = inx | ( inx << 4 );
        inx = 0;
      }
        
      // Continue with the next bit - if all bits are processed, get the
      // content of the next word.
      if (( aOffset = ( aOffset + 1 )) & 0x0F )
        data >>= 1;
      else
        data = aSrc.charCodeAt( srcInx++ );
    }
  }
 
  // The following helper function combines the pixel of upper rows with the 
  // pixel of the lower rows.
  function XOrRows( aData, aCount, aWidth )
  {
    var inx1 = 0;
    var inx2 = aWidth;

    // start with the second row.
    aCount -= aWidth;

    // repeat until all pixel are evaluated
    while ( aCount-- )
      aData[ inx2++ ] ^= aData[ inx1++ ];
  }

  // ---------------------------------------------------------------------------
  // The function CreateBitmap() creates a new bitmap with the given size and
  // color format. If no more used, the bitmap should be freed by calling the
  // function FreeBitmap().
  //
  // The color format of the bitmap is specified in the parameter aFormat. (See
  // _PIXEL_FORMAT_XXX constants below). The size in pixel of a single frame and
  // the number of bitmap frames are determined by aFrameSize and aNoOfFrames.
  // The parameter aFrameDelay specifies the delay in milliseconds for animated
  // bitmaps. If no animation is specified for the bitmap, the value is 0.
  // ---------------------------------------------------------------------------
  emwi._CreateBitmap = function( aFormat, aFrameSize, aFrameDelay, aNoOfFrames )
  {
    var bitmap     = { Surfaces:[], Frames:[], Mapping: null };
    var noOfFrames = Math.max( aNoOfFrames, 1 );
    var width      = aFrameSize[0];
    var height     = aFrameSize[1];
    var gl         = this._Context;

    // Is the bitmap format valid?
    if (( aFormat !== emwi._PIXEL_FORMAT_NATIVE ) && 
        ( aFormat !== emwi._PIXEL_FORMAT_ALPHA8 ))
    {
      console.log( "EmWi error: Wrong pixel format of bitmap to create." );
      return null;
    }

    // Is the desired FrameSize valid? Respect the maxim. surface size and the
    // 1 pixel wide border around every frame (we use the border to avoid ugly
    // effects when bi-linear filter is applied to scaled or warped bitmaps)
    if (( width  <= 0 ) || ( width  > ( this._MaxSurfaceSize - 2 )) ||
        ( height <= 0 ) || ( height > ( this._MaxSurfaceSize - 2 )))
    {
      console.log( "EmWi error: Invalid size of bitmap to create." );
      return null;
    }

    // How many frames may fit horizontally and vertically within a surface?
    // The same with the last surface, which can result smaller due to less
    // number of frames within it. Take in account the 1 pixel border around
    // each frames.
    var maxNoOfFramesX  = (( this._MaxSurfaceSize - 1 ) / ( width  + 1 )) | 0;
    var maxNoOfFramesY  = (( this._MaxSurfaceSize - 1 ) / ( height + 1 )) | 0;
    var maxNoOfFrames   = maxNoOfFramesX * maxNoOfFramesY;
    var lastNoOfFrames  = ( noOfFrames % maxNoOfFrames ) || maxNoOfFrames;
    var lastNoOfFramesX = Math.min( lastNoOfFrames, maxNoOfFramesX );
    var lastNoOfFramesY = (( lastNoOfFrames + maxNoOfFramesX - 1 ) / 
                             maxNoOfFramesX ) | 0;

    // The resulting surface extension. 
    var maxSurfaceWidth   = maxNoOfFramesX  * width  + maxNoOfFramesX  + 1;
    var maxSurfaceHeight  = maxNoOfFramesY  * height + maxNoOfFramesY  + 1;
    var lastSurfaceWidth  = lastNoOfFramesX * width  + lastNoOfFramesX + 1;
    var lastSurfaceHeight = lastNoOfFramesY * height + lastNoOfFramesY + 1;
    var noOfSurfaces      = (( noOfFrames + maxNoOfFrames - 1 ) /
                               maxNoOfFrames ) | 0;

    // Allocate all surfaces for the bitmap
    for ( var i = 0; i < noOfSurfaces; i++ )
    {
      // First clear any old and pending error flags.
      gl.getError();  
      
      // The size of the surface to get...
      var surfaceWidth  = maxSurfaceWidth;
      var surfaceHeight = maxSurfaceHeight;
      var texture       = gl.createTexture();
      var surface       = {};
      
      // Note, the last surface within the bitmap may differ in its size
      if ( i === ( noOfSurfaces - 1 ))
      {
        surfaceWidth  = lastSurfaceWidth;
        surfaceHeight = lastSurfaceHeight;
      }

      // Configure the texture
      gl.SrcSurface = null;
      gl.MskSurface = null;
      gl.bindTexture( gl.TEXTURE_2D, texture );
      gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
      gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
      gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S,     gl.CLAMP_TO_EDGE );
      gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T,     gl.CLAMP_TO_EDGE );

      // Reserve video memory for the texture.
      if ( aFormat === this._PIXEL_FORMAT_NATIVE )
        gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, surfaceWidth, surfaceHeight,
                         0, gl.RGBA, gl.UNSIGNED_BYTE, null );
      else
        gl.texImage2D( gl.TEXTURE_2D, 0, gl.ALPHA, surfaceWidth, surfaceHeight,
                         0, gl.ALPHA, gl.UNSIGNED_BYTE, null );
      
      // Complete the surface attributes
      surface.Format        = aFormat;
      surface.Width         = surfaceWidth;
      surface.Height        = surfaceHeight;
      surface.RealWidth     = surfaceWidth;
      surface.RealHeight    = surfaceHeight;
      surface.InvRealWidth  = 1 / surfaceWidth;
      surface.InvRealHeight = 1 / surfaceHeight;
      surface.InvDstWidth   = 2 / surfaceWidth;
      surface.InvDstHeight  = 2 / surfaceHeight;
      surface.Texture       = texture;
      surface.Framebuffer   = null;

      // Assign the surface to the bitmap
      bitmap.Surfaces[i] = surface;

      // Print evtl. WebGL errors
      if ( this._Debug )
        PrintWebGLErrors( gl );
    }

    // Build a table describing where bitmap frames are found
    for ( var i = 0; i < noOfFrames; i++ )
    {
      // Determine the frame position within a surface
      var frameNo = i % maxNoOfFrames;
      var originX =   frameNo % maxNoOfFramesX;
      var originY = ( frameNo / maxNoOfFramesX ) | 0;
      var frame   = {};

      // Select the surface where the frame is accomodated and calculate the
      // origin of the frame within the surface.
      frame.Surface = bitmap.Surfaces[( i / maxNoOfFrames ) | 0 ];
      frame.Origin  = [( originX * width  ) + originX + 1,
                       ( originY * height ) + originY + 1 ];

      // Assign the frame to the bitmap
      bitmap.Frames[i] = frame;
    }

    // Store the remaining attributes of the bitmap
    bitmap.FrameSize  = [ width, height ];
    bitmap.FrameDelay = aFrameDelay;
    bitmap.NoOfFrames = noOfFrames;
    
    // Return  the created bitmap
    return bitmap;
  };

  // Completion function called after an image file was loaded. Now the pixel
  // data from the image file can be copied to the WebGL texture.
  function OnLoadImage( aThis, aBitmap )
  {
    try
    {
      var choraObject = aBitmap.Pending;
      var image       = aBitmap.Image;
      var width       = image.width;
      var height      = image.height;
      var frameWidth  = aBitmap.FrameSize[0];
      var frameHeight = aBitmap.FrameSize[1];
      var noOfColumns = ( width  / frameWidth  ) | 0;
      var gl          = aThis._Context;
      
      // This bitmap is complete now
      delete aBitmap.Pending;
      delete aBitmap.Image;
      
      // The chora object was reclaimed before the image file could be loaded.
      // Thus, noting to do here
      if ( !choraObject.bitmap )
        return;

      // The usual case of a single-frame image. Itcan be handled faster
      if (( image.width === frameWidth ) && ( image.height === frameHeight ))
      {
        var frame   = aBitmap.Frames[0];
        var texture = frame.Surface.Texture;
        var dstX    = frame.Origin[0];
        var dstY    = frame.Origin[1];

        // Load the image into the texture memory
        gl.bindTexture( gl.TEXTURE_2D, texture );
        gl.SrcSurface = null;

        if ( frame.Surface.Format === aThis._PIXEL_FORMAT_NATIVE )
          gl.texSubImage2D( gl.TEXTURE_2D, 0, dstX, dstY, gl.RGBA,
                            gl.UNSIGNED_BYTE, image );
        else
          gl.texSubImage2D( gl.TEXTURE_2D, 0, dstX, dstY, gl.ALPHA,
                            gl.UNSIGNED_BYTE, image );
      }
      
      // The source image file contains several frames. The frames need to be
      // copied separately
      else
      {
        // Prepare a temp. image object to store pixel data of a single frame
        var canvas  = document.createElement( 'canvas' );
        var ctx;

        canvas.width  = frameWidth;
        canvas.height = frameHeight;
        ctx           = canvas.getContext( "2d" ); 

        // Transfer all bitmap frames to the corresponding texture areas
        for ( var i = 0; i < aBitmap.RealNoOfFrames; i++ )
        {
          var frame   = aBitmap.Frames[i];
          var texture = frame.Surface.Texture;
          var dstX    = frame.Origin[0];
          var dstY    = frame.Origin[1];
          var row     = ( i / noOfColumns ) | 0;
          var col     = i - ( row * noOfColumns );
          var srcX    = col * frameWidth;
          var srcY    = row * frameHeight;

          ctx.clearRect( 0, 0, frameWidth, frameHeight );
          ctx.drawImage( image, srcX, srcY, frameWidth, frameHeight, 0, 0,
                         frameWidth, frameHeight );

          // Load the image into the texture memory
          gl.bindTexture( gl.TEXTURE_2D, texture );
          gl.SrcSurface = null;

          if ( frame.Surface.Format === aThis._PIXEL_FORMAT_NATIVE )
            gl.texSubImage2D( gl.TEXTURE_2D, 0, dstX, dstY, gl.RGBA,
                              gl.UNSIGNED_BYTE, canvas );
          else
            gl.texSubImage2D( gl.TEXTURE_2D, 0, dstX, dstY, gl.ALPHA,
                              gl.UNSIGNED_BYTE, canvas );
        }
      }
    
      // Notify all Mosaic views depending on this image to redraw their content
      aThis._NotifyObjObservers( choraObject, 0 );
      aThis._RequestUpdate();
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" );
    }
  }

  // Completion function called after an image file was loaded. Now the pixel
  // data from the image file can be copied to the WebGL texture.
  function OnLoadExternImage( aThis, aBitmap )
  {
    try
    {
      // Now the real size of the image is known. Create a texture with the
      // correct size
      var image  = aBitmap.Image;
      var height = image.height;
      var bitmap = aThis._CreateBitmap( aThis._PIXEL_FORMAT_NATIVE,
                      [ image.width, image.height ], 0, 1 );

      // Transfer the texture to the original bitmap object
      aBitmap.Surfaces  = bitmap.Surfaces;
      aBitmap.Frames    = bitmap.Frames;
      aBitmap.FrameSize = bitmap.FrameSize;

      // Also update the image size in the Mosaic object
      aBitmap.Pending.FrameSize = bitmap.FrameSize;
      
      // Continue the loading as if the image were an ordinary bitmap resource
      OnLoadImage( aThis, aBitmap );
    }
    catch ( err )
    {
      console.log( "EmWi error: " + err + "!" );
    }
  }

  // ---------------------------------------------------------------------------
  // The function EwLoadBitmap() creates a new bitmap and loads it with the
  // content of the passed bitmap resource.
  // ---------------------------------------------------------------------------
  emwi._LoadBitmap = function( aResource, aChoraObject )
  {
    // First create a new empty bitmap
    var self   = this;
    var bitmap = this._CreateBitmap( aResource.Format, aResource.FrameSize, 
                                     aResource.FrameDelay, aResource.NoOfFrames );

    // The creation is failed
    if ( !bitmap )
      return;

    // These frames are loaded.
    bitmap.RealNoOfFrames = bitmap.NoOfFrames;
    
    // Chora object to notify as soon as the image file is loaded.
    bitmap.Pending = aChoraObject;
    
    // Start the image file loading
    bitmap.Image = new Image();
    bitmap.Image.addEventListener( 'load', function() { OnLoadImage( self, bitmap ); });
    bitmap.Image.src = aResource.FileName;

    // If the bitmap resources contains frame duplicates - get the mapping table
    // between the original frame numbers and the resulting (existing) frames.
    if ( aResource.FrameMapping )
    {
      bitmap.Mapping    = aResource.FrameMapping;
      bitmap.NoOfFrames = bitmap.Mapping.length;
    }

    return bitmap;
  };
  
  // ---------------------------------------------------------------------------
  // The function FreeBitmap() frees the given bitmap. Bitmaps may be created
  // by using CreateBitmap() or they may be loaded from a bitmap resource by
  // calling the function LoadBitmap().
  // ---------------------------------------------------------------------------
  emwi._FreeBitmap = function( aBitmap )
  {
    var gl = this._Context;

    // Nothing to do
    if ( !aBitmap )
      return;

    // Force WebGL to release the associated resources immediatelly
    for ( var i = 0; aBitmap.Surfaces && ( i < aBitmap.Surfaces.length ); i++ )
    {
      var surface = aBitmap.Surfaces[i];

      // Take care of textures still connected to texture units
      if ( gl.SrcSurface === surface ) SelectSrc( gl, null, false );
      if ( gl.MskSurface === surface ) SelectMsk( gl, null, false );

      if ( surface.Texture     ) gl.deleteTexture( surface.Texture );
      if ( surface.Framebuffer ) gl.deleteFramebuffer( surface.Framebuffer );
    }

    // The bitmap is released
    aBitmap.Surfaces   = null;
    aBitmap.Frames     = null;
    aBitmap.NoOfFrames = 0;
  };

  // ---------------------------------------------------------------------------
  // The function LoadExternBitmap() creates a bitmap object based on image
  // date loaded from the URL specified in aName. The URL can be local within
  // the current webspace.
  // ---------------------------------------------------------------------------
  emwi._LoadExternBitmap = function( aName, aChoraObject )
  {
    // Because the size of the image is unknown at this moment, assume a dummy
    // size of 1x1 pixel.
    var self    = this;
    var bitmap  = { Surfaces:[], Frames:[]};
    var surface = {};    
    var frame   = {};

    surface.Format        = this._PIXEL_FORMAT_NATIVE;
    surface.Width         = 1;
    surface.Height        = 1;
    surface.RealWidth     = 1;
    surface.RealHeight    = 1;
    surface.InvRealWidth  = 1;
    surface.InvRealHeight = 1;
    surface.InvDstWidth   = 2;
    surface.InvDstHeight  = 2;
    surface.Texture       = null;
    surface.Framebuffer   = null;
    
    // Select the surface where the frame is accomodated and calculate the
    // origin of the frame within the surface.
    frame.Surface = surface;
    frame.Origin  = [ 0, 0 ];

    // Assign the frame to the bitmap
    bitmap.Surfaces[0] = surface;
    bitmap.Frames[0]   = frame;

    // Store the remaining attributes of the bitmap
    bitmap.FrameSize  = [ 1, 1 ];
    bitmap.FrameDelay = 0;
    bitmap.NoOfFrames = 1;
    
    // Chora object to notify as soon as the image file is loaded.
    bitmap.Pending = aChoraObject;
    
    // Start the image file loading
    bitmap.Image = new Image();
    bitmap.Image.addEventListener( 'load', function() { OnLoadExternImage( self, bitmap ); });
    bitmap.Image.src = aName;
  
    // Return  the created bitmap
    return bitmap;
  };


  // ---------------------------------------------------------------------------
  // The function GetFontResource() has the job to find or create a resource
  // descriptor matching the attributes specified in the function parameters.
  // The returned resource can thereupon be passed to LoadFont() function in 
  // order to use the font.
  //
  // Since the function expects an integration with a TrueType font engine, the
  // function has no effect on JavScrypt compatible targets. The function always
  // return 0;
  // ---------------------------------------------------------------------------
  emwi._GetFontResource = function( aName, aHeight, aBold, aItalic, 
    aAspectRatio, aNoOfColors, aKerning, aRowDistance, aPopularMode )
  {
    return null;
  };


  // ---------------------------------------------------------------------------
  // The function LoadFont() creates a new font and loads it with the content
  // of the passed font resource.
  // ---------------------------------------------------------------------------
  emwi._LoadFont = function( aResource )
  {
    var data = aResource.Data();

    var font = {
      Cache         : aResource.Cache,
      Ascent        : data[0],
      Descent       : data[1],
      Leading       : data[2],
      NoOfGlyphs    : data[5],
      NoOfCodes     : data[4],
      Glyphs        : data[6],
      Pixel         : data[7],
      KerningCodes  : data[8],
      KerningValues : data[9]
    };
    
    // Depending on the format of the fonr, select the appropriate decompression
    // function.
    if ( data[3] === 2  ) font.DecompressProc = Decompress1;
    if ( data[3] === 4  ) font.DecompressProc = Decompress2;
    if ( data[3] === 16 ) font.DecompressProc = Decompress4;
      
    return font;
  };

  // ---------------------------------------------------------------------------
  // The function FreeFont() frees the given font. Fonts can be loaded from a
  // font resource by calling the function LoadFont().
  // ---------------------------------------------------------------------------
  emwi._FreeFont = function( aFont )
  {
    // Nothing to do
  };
  
  // ---------------------------------------------------------------------------
  // The function GetGlyph() determines the glyph of the given font and ensures
  // that the glyph is available in the glyph cache surface. If successful, the
  // function returns an object containing the glyph metrics and the position
  // within the glyph cache surface where the glyph is available. If the glyph
  // is not available in the cache, the function reserves space in the cache and
  // loads there the glyph pixel data. In the case, the entire cache is occupied
  // and all glyphs are in use, the function fail and returns null. In such case
  // the preceding text operation need to be terminated before new glyphs can be
  // loaded.
  // ---------------------------------------------------------------------------
  emwi._GetGlyph = function( aFont, aGlyphId )
  {
    // No valid font specified
    if ( !aFont )
    {
      console.log( "EmWi error: Invalid font resource." );
      return null;
    }

    var glyph = this._GetGlyphMetrics( aFont, aGlyphId );

    // The glyph does not exist.
    if ( !glyph )
      return null;

    // If the glyph pixel data is already loaded, all ok.
    if ( glyph.Mapped )
      return glyph;

    // Get the glyph metrics and with these metrics calculate the size of the
    // area to alloc within the glyph cache surface.
    var cellSize  = this._GlyphSurfaceCellSize;
    var rows      = (( glyph.Height + cellSize - 1 ) / cellSize ) | 0;
    var cols      = (( glyph.Width  + cellSize - 1 ) / cellSize ) | 0;
    var pos       = null;
    var tail      = this._GlyphCacheTail;
    var discarded = null;

    // Find an empty unused area within the glyph surface. This can cause the 
    // older glyphs to be discarded in order to make space for the new glyph.
    do
    {
      // Search for an area with the desired number or cell rows and columns
      if (!( pos = discarded = FindFreeGlyphCacheArea( this, cols, rows )))
      {
        // No free area found. Search for the oldest unused glyph within the
        // cache
        while ( tail && tail.Usage )
          tail = tail.Newer;

        // Discard the found unused glyph and free its area
        if ( tail )
        {
          // Calculate the origin and the size of the area occupied by the glyph
          var glyph = tail;
          var row   = ( glyph.CacheY / cellSize ) | 0;
          var col   = ( glyph.CacheX / cellSize ) | 0;
          var rows  = (( glyph.Height + cellSize - 1 ) / cellSize ) | 0;
          var cols  = (( glyph.Width  + cellSize - 1 ) / cellSize ) | 0;

          // Track the operations
          if ( this._Debug )
            console.log( "EmWi info: DiscardGlyph( " + glyph.GlyphId + ", " +
                         glyph.Width + ", " + glyph.Height + " )" );

          // The glyph being discarded and the next possible candidate to be
          // discarded
          discarded = glyph;
          tail      = tail.Newer;

          // Remove the glyph from the cache and release the area within the surface
          UncacheGlyph( this, glyph );
          ReleaseGlyphCacheArea( this, col, row, cols, rows );
        }
      }
    }
    while ( !pos && discarded );

    // No free area in the cache found. All existing glyphs are in use
    if ( !pos )
      return null;

    var invSize = 1 / this._GlyphSurfaceSize;

    // Prepare the glyph descriptor. It contains the glyph metrics and the
    // position where the glyph pixel are stored in the surface.
    glyph.CacheX  = pos[0] * cellSize;
    glyph.CacheY  = pos[1] * cellSize;
    glyph.CacheS1 = glyph.CacheX * invSize;
    glyph.CacheT1 = glyph.CacheY * invSize;
    glyph.CacheS2 = ( glyph.CacheX + glyph.Width  ) * invSize;
    glyph.CacheT2 = ( glyph.CacheY + glyph.Height ) * invSize;
    glyph.Mapped  = true;
    glyph.Usage   = 0;
    
    // Prepare a temp. buffer to receive the decompressed glyph pixel
    if (( glyph.Width > 0 ) && ( glyph.Height > 0 ))
    {
      var size  = glyph.Width * glyph.Height;
      var pixel = new Uint8Array( size );
      var gl    = this._Context;
    
      // Decompress the pixel data into the previously created buffer
      aFont.DecompressProc( aFont.Pixel, pixel, glyph.Pixel, glyph.NoOfBits );
      XOrRows( pixel, size, glyph.Width );

      // Transfer the pixel information into the glyph cache surface
      gl.bindTexture( gl.TEXTURE_2D, this._GlyphCacheTexture );
      gl.texSubImage2D( gl.TEXTURE_2D, 0, glyph.CacheX, glyph.CacheY, glyph.Width,
                        glyph.Height, gl.ALPHA, gl.UNSIGNED_BYTE, pixel );
      gl.SrcSurface = null;
    }
    
    // Mark the loaded glyph cache area as used.
    ReserveGlyphCacheArea( this, pos[0], pos[1], cols, rows );

    // Track the operations
    if ( this._Debug )
      console.log( "EmWi info: CreateGlyph( " + glyph.GlyphId + ", " +
                   glyph.Width + ", " + glyph.Height + " )" );

    // Finished return the loaded glyph
    return glyph;    
  };

  // ---------------------------------------------------------------------------
  // The function IsGlyphAvailable() verifies, whether the given glyph is
  // available in the font. If the glyph is available in the font, the function
  // returns true. Otherwise false is returned.
  // ---------------------------------------------------------------------------
  emwi._IsGlyphAvailable = function( aFont, aCharCode )
  {
    // No valid font specified
    if ( !aFont )
    {
      console.log( "EmWi error: Invalid font resource." );
      return false;
    }

    return FindGlyph( aCharCode, aFont.Glyphs, aFont.NoOfCodes ) >= 0;
  };

  // ---------------------------------------------------------------------------
  // The function GetGlyphId() will be called by the Graphics Engine in order
  // to query the glyph id for a given character.
  // ---------------------------------------------------------------------------
  emwi._GetGlyphId = function( aFont, aCharCode )
  {
    // No valid font specified
    if ( !aFont )
    {
      console.log( "EmWi error: Invalid font resource." );
      return false;
    }

    var pos = FindGlyph( aCharCode, aFont.Glyphs, aFont.NoOfCodes );

    // Trying to obtain the soft-hyphen sign 0xAD ... but there is no matching
    // glyph available. As fallback, try to return the glyph for regular hyphen
    // '-' sign. 
    if (( pos < 0 ) && ( aCharCode === 0x00AD ))
      return this._GetGlyphId( aFont, 0x002D );

    // Trying to obtain the non-break space sign 0xA0 ... but there is no 
    // matching glyph available. As fallback, try to return the glyph for 
    // regular space 0x20 sign.
    if (( pos < 0 ) && ( aCharCode === 0x00A0 ))
      return this._GetGlyphId( aFont, 0x0020 );

    // If there is no glyph resource for the desired character.
    if ( pos < 0 )
      return 0;

    // Glyph-Id is the index within the array of glyphs. Each glyph occupies
    // 8 characters within the glyph string.
    return pos >> 3;
  };

  // ---------------------------------------------------------------------------
  // The function InitShaper() is called by the Graphics Engine in order to
  // prepare a context object for the following cluster shaping process. The
  // context is used by the shaper to store state information for the already
  // processed text and depending on it to decide how to shape the following
  // clusters.
  // ---------------------------------------------------------------------------
  emwi._InitShaper = function()
  {
    return null;
  };

  // ---------------------------------------------------------------------------
  // The function ResetShaper() is called by the Graphics Engine in order to
  // restore the default state of the shaper context object.
  // ---------------------------------------------------------------------------
  emwi._ResetShaper = function( aHandle )
  {
  };

  // ---------------------------------------------------------------------------
  // The function SaveShaper() is called by the Graphics Engine in order to
  // store the actual state of the shaper context object temporarily. To restore
  // the state again, the function RestoreShaper() is used.
  // ---------------------------------------------------------------------------
  emwi._SaveShaper = function( aHandle )
  {
  };

  // ---------------------------------------------------------------------------
  // The function RestoreShaper() is called by the Graphics Engine in order
  // to restore the state of the shaper context object stored previously by the
  // invocation of the function SaveShaper().
  //
  // Please note: When calling the function, the actual state of the shaper is
  // saved too. It is as if the saved and actual states were exchanged.
  // ---------------------------------------------------------------------------
  emwi._RestoreShaper = function( aHandle )
  {
  };

  // ---------------------------------------------------------------------------
  // The function ShapeCluster() is called in order to evaluate the text
  // (aCharCodes) looking for the next indivisible unit (cluster) and convert
  // the character codes in corresponding glyph ids. The glyph ids are then
  // returned in the array aGlyphIds. Hereby the first entry in aGlyphIds stores
  // the number of resulting glyphs.
  //
  //  Depending on the text found in aCharCodes and features available in the
  //  font, the function may apply diverse reordering and substitution steps so
  //  the returned glyphs represent the original text formatted correctly. This
  //  functionality is known as 'layout shaping' or 'complex text layout'. For
  //  example, the function may convert a sequence of character codes to a 
  //  unique glyph id representing a ligature of those characters.
  //
  //  The function returns how many character codes from the array aCharCodes
  //  haven been processed. If the function couldn't even process a single
  //  character, the returned value is 0.
  // ---------------------------------------------------------------------------
  emwi._ShapeCluster = function( aFont, aCharCodes, aCharCodesInx, 
    aNoOfCharCodes, aDirection, aGlyphIds, aContext )
  {
    // Nothing to process.
    if ( aNoOfCharCodes <= 0 )
      return 0;

    // Actually we ignore the RTL text cluster shaping treating the character
    // codes stored in this RTL order as isolated units.
    if ( aDirection )
      aNoOfCharCodes = 1;

    // Actually there is no support for complex text layout. We process the 
    // characters isolated ony by one by handling few exception cases.
    aGlyphIds[1] = this._GetGlyphId( aFont, aCharCodes.charCodeAt( aCharCodesInx ));

    // Trying to obtain the non-break space sign 0xA0 ... but there is no matching
    // glyph available. As fallback, try to return the glyph for regular space
    // 0x20 sign.
    if ( !aGlyphIds[1] && ( aCharCodes.charCodeAt( aCharCodesInx ) === 0x00A0 ))
      aGlyphIds[1] = this._GetGlyphId( aFont, 0x20 );

    // Trying to obtain the soft-hyphen sign 0xAD ... but there is no matching
    // glyph available. As fallback, try to return the glyph for regular hyphen
    // '-' sign.
    else if ( !aGlyphIds[1] && ( aCharCodes.charCodeAt( aCharCodesInx ) === 0x00AD ))
      aGlyphIds[1] = this._GetGlyphId( aFont, 0x2D );

    // Trying to obtain the ellipsis sign '...' but there is no matching glyph
    // available in the font. As fallback, try to return 3 regular '.' signs
    // as a single cluster.
    else if ( !aGlyphIds[1] && ( aCharCodes.charCodeAt( aCharCodesInx ) === 0x2026 ))
    {
      // Get the glyph for the '.' sign.
      aGlyphIds[1] = aGlyphIds[2] = aGlyphIds[3] = this._GetGlyphId( aFont, 0x2E );

      /* And return 3 copies of it */
      if ( aGlyphIds[1])
      {
        aGlyphIds[0] = 3;
        return 1;
      }
    }

    // One character processed and converted in glyph
    if ( aGlyphIds[1])
    {
      aGlyphIds[0] = 1;
      return 1;
    }

    // No character processed
    aGlyphIds[0] = 0;
    return 0;
  };

  // ---------------------------------------------------------------------------
  // The function GetGlyphMetrics() determines the glyph metrics of the given
  // font glyph. The function is useful when special application dependent text
  // flow calculations are necessary. The caller can determine the size and the
  // position of each glyph within the text.
  // ---------------------------------------------------------------------------
  emwi._GetGlyphMetrics = function( aFont, aGlyphId )
  {
    // No valid font specified
    if ( !aFont )
    {
      console.log( "EmWi error: Invalid font resource." );
      return null;
    }

    // Is the glyph id valid?
    if (( aGlyphId < 0 ) || ( aGlyphId >= aFont.NoOfGlyphs ))
      return null;

    var glyph = aFont.Cache[ aGlyphId ];

    // If the desired glyph remains in the font's private cache - use it! Move
    // the glyph to the beginning of the glyph list.
    if ( glyph )
    {
      UncacheGlyph( this, glyph );
      CacheGlyph( this, glyph );
      return glyph;
    }

    // Determine the glyph metrics if these are not available in the font
    // cache
    var glyphs = aFont.Glyphs;
    var pos    = aGlyphId * 8;
    var w6     = glyphs.charCodeAt( pos + 6 );
    var w7     = glyphs.charCodeAt( pos + 7 );
    var w14    = glyphs.charCodeAt( pos + 14 );
    var w15    = glyphs.charCodeAt( pos + 15 );
    var start  = w7  | ( w6  << 16 );
    var end    = w15 | ( w14 << 16 );
      
    glyph = {
      Cache    : aFont.Cache,
      GlyphId  : aGlyphId,
      OriginX  : glyphs.charCodeAt( pos + 1 ) - 32768,
      OriginY  : glyphs.charCodeAt( pos + 2 ) - 32768,
      Width    : glyphs.charCodeAt( pos + 3 ),
      Height   : glyphs.charCodeAt( pos + 4 ),
      Advance  : glyphs.charCodeAt( pos + 5 ) - 32768,
      Pixel    : start,
      NoOfBits : end - start,
      Mapped   : false
    };

    // Manage the gklyph within a cache
    CacheGlyph( this, glyph );
    return glyph;
  };
  
  // ---------------------------------------------------------------------------
  // The function GetKerning() determines the kerning to apply between the given
  // glyphs.
  // The function returns the kerning value for the given pair of glyphs or 0
  // if the glyphs are not affected by kerning or at least one of the glyphs is
  // not existing in the font.
  // ---------------------------------------------------------------------------
  emwi._GetKerning = function( aFont, aGlyphId1, aGlyphId2 )
  {
    // No valid font specified
    if ( !aFont )
    {
      console.log( "EmWi error: Invalid font resource." );
      return 0;
    }

    // No kerning information available or nothing to do
    if ( !aFont.KerningCodes || ( aGlyphId1 < 0 ) || ( aGlyphId2 < 0 ) ||
       ( aGlyphId1 >= aFont.NoOfGlyphs ) || ( aGlyphId2 >= aFont.NoOfGlyphs ))
      return 0;

    var codes  = aFont.KerningCodes;
    var values = aFont.KerningValues;
    var key    = aGlyphId1 | ( aGlyphId2 << 16 );
    var inx    = 0;
    var min    = 0;
    var max    = ( codes.length >> 1 ) - 1;
    var comp   = -1;

    // Repeat until the entry affecting the both glyphs is found, or the end 
    // of the array is reached 
    while( max >= min )
    {
      inx  = ( max + min ) >> 1;
      comp = key - ( codes.charCodeAt( inx * 2 ) | 
                   ( codes.charCodeAt( inx * 2 + 1 ) << 16 ));

      if ( !comp     ) return values.charCodeAt( inx ) - 128;
      if (  comp < 0 ) max = inx - 1;
      else             min = inx + 1;
    }

    // No entry fount
    return 0;
  };

  // ---------------------------------------------------------------------------
  // The function GetTextAdvance() calculates the advance of the entire text
  // aString with the font aFont. The value is calculated by the sum of advance
  // values of glyphs to display the text.
  // ---------------------------------------------------------------------------
  emwi._GetTextAdvance = function( aFont, aString, aOffset, aCount )
  {
    var x           = 0;
    var prevGlyphId = 0;
    var len         = aString.length;
    var context;

    if ( !aFont )
    {
      console.log( "EmWi error: Invalid font resource." );
      return 0;
    }
    
    // Evaluate all signs?
    if ( aCount === -1 ) aCount = len;
    if ( len < aCount  ) aCount = len;

    // Limit to available string signs
    if ( aOffset < 0 )             { aCount += aOffset; aOffset = 0; }
    if (( aOffset + aCount ) > len ) aCount = len - aOffset;

    // Prepare an object to store the shaper status
    context = this._InitShaper();

    // Process all characters of the string
    while ( aCount > 0 )
    {
      var glyphIds = [];
      var ch       = aString.charCodeAt( aOffset );
      var noOfChars;
      var i;

      // Following codes represent zero-width signs, partially needed to control
      // the text processing. These signs are never displayed. Skip over the
      // character codes.
      if (( ch === 0x061C ) || ( ch === 0xFEFF )  ||
         (( ch >=  0x200B ) && ( ch <=  0x200F )) ||
         (( ch >=  0x202A ) && ( ch <=  0x202E )) ||
         (( ch >=  0x2066 ) && ( ch <=  0x2069 )))
      {
        aCount--;
        aOffset++;
        continue;
      }

      // Following codes represent signs which are also not visible, but they
      // isolate the adjacent glyphs. Skip over the codes and suppress the
      // kerning for the adjacent glyphs. */
      if ( ch === 0x000A )
      {
        aCount--;
        aOffset++;
        prevGlyphId = 0;
        continue;
      }

      // Shape the next text cluster.
      noOfChars = this._ShapeCluster( aFont, aString, aOffset, 
                                      Math.min( aCount, 8 ), false, glyphIds,
                                      context );

      // No matching glyph for the given cluster. Use the '.notdef' glyph.
      if ( !noOfChars )
      {
        glyphIds[0]  = 1;
        glyphIds[1]  = 0;
        noOfChars    = 1;
      }

      // Now calculate with the metrics of the estimated glyphs.
      for ( i = 0; i < glyphIds[0]; i++ )
      {
        // Get the glyph for the given glyph id.
        var glyph = this._GetGlyphMetrics( aFont, glyphIds[ i + 1 ]);

        // Could not obtain the glyph. The glyph does not exist.
        if ( !glyph )
        {
          prevGlyphId = 0;
          continue;
        }

        // Calculate the advance of the glyph. Also take in account kerning to the
        // preceding glyph */
        x += this._GetKerning( aFont, prevGlyphId, glyphIds[ i + 1 ]) + 
                               glyph.Advance;

        // The code of the glyph to determine the kerning in the next iteration
        prevGlyphId = glyphIds[ i + 1 ];
      }

      // Skip over the processed characters
      aCount  -= noOfChars;
      aOffset += noOfChars;
    }

    return x;
  };
  
  // ---------------------------------------------------------------------------
  // The function GetTextExtent() calculates an area required to draw the text
  // aString with the font aFont. The size of the resulting rectangle determines
  // the space where character glyphs will be drawn. The origin of the rectangle
  // specifies the distance between a print position and the first drawn glyph.
  // The origin of the calculated area can be passed as aSrcPos to the function
  // DrawText(), if seamless text output relative to the top-left corner of
  // the destination area is desired.
  // ---------------------------------------------------------------------------
  emwi._GetTextExtent = function( aFont, aString, aOffset, aCount )
  {
    var extent      = [ 0, 0, 0, 0 ];
    var x           = 0;
    var prevGlyphId = 0;
    var len         = aString.length;
    var context;

    if ( !aFont )
    {
      console.log( "EmWi error: Invalid font resource." );
      return this._NullRect;
    }

    // Evaluate all signs?
    if ( aCount === -1 ) aCount = len;
    if ( len < aCount  ) aCount = len;

    // Limit to available string signs
    if ( aOffset < 0 )             { aCount += aOffset; aOffset = 0; }
    if (( aOffset + aCount ) > len ) aCount = len - aOffset;
    
    // Prepare an object to store the shaper status
    context = this._InitShaper();

    // Process all characters of the string
    while ( aCount > 0 )
    {
      var glyphIds = [];
      var ch       = aString.charCodeAt( aOffset );
      var noOfChars;
      var i;

      // Following codes represent zero-width signs, partially needed to control
      // the text processing. These signs are never displayed. Skip over the
      // character codes.
      if (( ch === 0x061C ) || ( ch === 0xFEFF )  ||
         (( ch >=  0x200B ) && ( ch <=  0x200F )) ||
         (( ch >=  0x202A ) && ( ch <=  0x202E )) ||
         (( ch >=  0x2066 ) && ( ch <=  0x2069 )))
      {
        aCount--;
        aOffset++;
        continue;
      }

      // Following codes represent signs which are also not visible, but they
      // isolate the adjacent glyphs. Skip over the codes and suppress the
      // kerning for the adjacent glyphs. */
      if ( ch === 0x000A )
      {
        aCount--;
        aOffset++;
        prevGlyphId = 0;
        continue;
      }

      // Shape the next text cluster.
      noOfChars = this._ShapeCluster( aFont, aString, aOffset, 
                                      Math.min( aCount, 8 ), false, glyphIds,
                                      context );

      // No matching glyph for the given cluster. Use the '.notdef' glyph.
      if ( !noOfChars )
      {
        glyphIds[0]  = 1;
        glyphIds[1]  = 0;
        noOfChars    = 1;
      }

      // Now calculate with the metrics of the estimated glyphs.
      for ( i = 0; i < glyphIds[0]; i++ )
      {
        // Get the glyph for the given glyph id.
        var glyph = this._GetGlyphMetrics( aFont, glyphIds[ i + 1 ]);

        // Could not obtain the glyph. The glyph does not exist.
        if ( !glyph )
        {
          prevGlyphId = 0;
          continue;
        }

        // Start with the first glyph
        if ( !x )
          extent[0] = glyph.OriginX;

        // Following glyphs only extends the area */
        extent[1] = Math.min( extent[1], glyph.OriginY );
        extent[3] = Math.max( extent[3], glyph.OriginY + glyph.Height );

        // First take in account the eventual kerning between the preceding and
        // the actual glyph
        x += this._GetKerning( aFont, prevGlyphId, glyphIds[ i + 1 ]);

        // Ignore glyphs without content and advance
        extent[2] = Math.max( extent[2], x + glyph.OriginX + glyph.Width );

        // Print position for the next glyph
        x += glyph.Advance;

        // Also take in account white-space glyphs at the end of the text row.
        // They haven't any width but they do occupy space */
        if ( !( glyph.OriginX + glyph.Width ) && glyph.Advance )
          extent[2] = Math.max( x, extent[2]);

        // The code of the glyph to determine the kerning in the next iteration
        prevGlyphId = glyphIds[ i + 1 ];
      }

      // Skip over the processed characters
      aCount  -= noOfChars;
      aOffset += noOfChars;
    }

    return extent;
  };

  // ---------------------------------------------------------------------------
  // The function EwGetTextColumnAtPosition() determines the character number in
  // the given text aString, which corresponds to a glyph enclosing the position
  // aX when aString would be printed by using the font aFont. The algorithm to
  // calculate the position is equal to the used by EwDrawText() to raster the
  // text.
  //
  // The parameter aMinWidth controls optionally the minimum width of the text.
  // If applied, the function assumes all white space characters to be extended
  // in order to stretch the text. By using this parameter justified text output
  // is possible.
  //
  // Returns the number of the character in the string corresponding to a glyph
  // enclosing the position aX. The first character has the number 0, the second
  // 1, and so far. If aX lies on the left of the first character the function
  // returns -1; If aX lies on the right of the last character, the function
  // returns the number of the character following it, which corresponds to the
  // number of characters in aString.
  // ---------------------------------------------------------------------------
  emwi._GetTextColumnAtPosition = function( aFont, aString, aOffset, aCount,
    aX, aMinWidth )
  {
    var stretchFac  = 0;
    var stretchAcc  = 0x8000; // == 0.5 pixel in 16.16 format
    var column      = 0;
    var len         = aString.length;
    var prevGlyphId = 0;
    var context;

    if ( !aFont )
    {
      console.log( "EmWi error: Invalid font resource." );
      return 0;
    }

    // Evaluate all signs?
    if ( aCount === -1 ) aCount = len;
    if ( len < aCount  ) aCount = len;

    // Limit to available string signs
    if ( aOffset < 0 )             { aCount += aOffset; aOffset = 0; }
    if (( aOffset + aCount ) > len ) aCount = len - aOffset;

    // Nothing to do
    if ( !aCount )
      return 0;

    // Addressing a non existing character on the left the text
    if ( aX < 0 )
      return -1;

    // Stretch the text? Calculate the remaining area to stretch the white
    // spaces
    if ( aMinWidth > 0 )
      aMinWidth -= this._GetTextAdvance( aFont, aString, aOffset, aCount );

    // Calculate the factor to stretch a single white space
    if ( aMinWidth > 0 )
    {
      var ofs        = aOffset;
      var count      = aCount;
      var noOfSpaces = 0;

      // Count white spaces incl. the non-breakable space
      for ( ; count; ofs++, count-- )
      {
        var ch = aString.charCodeAt( ofs );
        if (( ch === 32 ) || ( ch === 0xA0 ))
          noOfSpaces++;
      }

      // Factor to stretch a single white space glyph in 16.16 format
      if ( noOfSpaces )
        stretchFac = (( aMinWidth << 16 ) / noOfSpaces ) | 0;
    }

    // Prepare an object to store the shaper status
    context = this._InitShaper();

    // Process all characters of the string - cluster by cluster
    while ( aCount > 0 )
    {
      var glyphIds = [];
      var ch       = aString.charCodeAt( aOffset );
      var advance  = 0;
      var noOfChars;
      var i;

      // Following codes represent zero-width signs, partially needed to control
      // the text processing. These signs are never displayed. Skip over the
      // character codes.
      if (( ch === 0x061C ) || ( ch === 0xFEFF )  ||
         (( ch >=  0x200B ) && ( ch <=  0x200F )) ||
         (( ch >=  0x202A ) && ( ch <=  0x202E )) ||
         (( ch >=  0x2066 ) && ( ch <=  0x2069 )))
      {
        aCount--;
        aOffset++;
        continue;
      }

      // Following codes represent signs which are also not visible, but they
      // isolate the adjacent glyphs. Skip over the codes and suppress the
      // kerning for the adjacent glyphs. */
      if ( ch === 0x000A )
      {
        aCount--;
        aOffset++;
        prevGlyphId = 0;
        continue;
      }

      // Shape the next text cluster.
      noOfChars = this._ShapeCluster( aFont, aString, aOffset, 
                                      Math.min( aCount, 8 ), false, glyphIds,
                                      context );

      // No matching glyph for the given cluster. Use the '.notdef' glyph.
      if ( !noOfChars )
      {
        glyphIds[0]  = 1;
        glyphIds[1]  = 0;
        noOfChars    = 1;
      }

      // Now calculate with the metrics of the estimated glyphs.
      for ( i = 0; i < glyphIds[0]; i++ )
      {
        // Get the glyph for the given glyph id.
        var glyph = this._GetGlyphMetrics( aFont, glyphIds[ i + 1 ]);

        // Could not obtain the glyph. The glyph does not exist.
        if ( !glyph )
        {
          prevGlyphId = 0;
          continue;
        }

        // The area occupied by the glyph
        advance += this._GetKerning( aFont, prevGlyphId, glyphIds[ i + 1 ]);
        advance += glyph.Advance;

        // The code of the glyph to determine the kerning in the next iteration
        prevGlyphId = glyphIds[ i + 1 ];
      }

      // Stretching white spaces? (incl. the non-breakable space)
      if ( stretchFac && (( ch === 0x20 ) || ( ch === 0xA0 )))
      {
        stretchAcc += stretchFac;
        advance    += stretchAcc >> 16;
        stretchAcc &= 0xFFFF;
      }

      // The specified position seems to lie right to the affected cluster or 
      // very close to the next cluster
      if ( aX < (( advance >> 1 ) + 1 ))
        break;

      // Skip over the processed characters
      aCount  -= noOfChars;
      aOffset += noOfChars;
      column  += noOfChars;
      aX      -= advance;
    }

    return column;
  };

  // ---------------------------------------------------------------------------
  // The function EwGetPositionAtTextColumn() determines the start position for
  // the glyph corresponding to the character aColumn within the string aString
  // when aString would be printed by using the font aFont. The algorithm to
  // calculate the position is equal to the used by EwDrawText() to raster the
  // text.
  //
  // The parameter aMinWidth controls optionally the minimum width of the text.
  // If applied, the function assumes all white space characters to be extended
  // in order to stretch the text. By using this parameter justified text output
  // is possible.
  //
  // Returns the position in pixel of the found glyph relative to the left edge
  // of the text row as if it would be rasterized by EwDrawText(). If aColumn
  // is < 0, the function returns -1; If aColumn addresses a character not 
  // existing in the string, the function returns the total length of the string.
  // ---------------------------------------------------------------------------
  emwi._GetPositionAtTextColumn = function( aFont, aString, aOffset, aCount,
    aColumn, aMinWidth )
  {
    var stretchFac  = 0;
    var stretchAcc  = 0x8000; // == 0.5 pixel in 16.16 format
    var x           = 0;
    var len         = aString.length;
    var prevGlyphId = 0;
    var context;

    if ( !aFont )
    {
      console.log( "EmWi error: Invalid font resource." );
      return 0;
    }

    // Evaluate all signs?
    if ( aCount === -1 ) aCount = len;
    if ( len < aCount  ) aCount = len;

    // Limit to available string signs
    if ( aOffset < 0 )             { aCount += aOffset; aOffset = 0; }
    if (( aOffset + aCount ) > len ) aCount = len - aOffset;

    // Nothing to do 
    if ( !aCount )
      return 0;

    // Addressing a non existing character on the left the text
    if ( aColumn < 0 )
      return -1;

    // Stretch the text? Calculate the remaining area to stretch the white
    // spaces
    if ( aMinWidth > 0 )
      aMinWidth -= this._GetTextAdvance( aFont, aString, aOffset, aCount );

    // Calculate the factor to stretch a single white space
    if ( aMinWidth > 0 )
    {
      var ofs        = aOffset;
      var count      = aCount;
      var noOfSpaces = 0;

      // Count white spaces incl. the non-breakable space
      for ( ; count; ofs++, count-- )
      {
        var ch = aString.charCodeAt( ofs );
        if (( ch === 32 ) || ( ch === 0xA0 ))
          noOfSpaces++;
      }

      // Factor to stretch a single white space glyph in 16.16 format
      if ( noOfSpaces )
        stretchFac = (( aMinWidth << 16 ) / noOfSpaces ) | 0;
    }

    // Prepare an object to store the shaper status
    context = this._InitShaper();

    // Process all characters of the string - cluster by cluster
    while ( aCount > 0 )
    {
      var glyphIds = [];
      var ch       = aString.charCodeAt( aOffset );
      var advance  = 0;
      var noOfChars;
      var i;

      // Following codes represent zero-width signs, partially needed to control
      // the text processing. These signs are never displayed. Skip over the
      // character codes.
      if (( ch === 0x061C ) || ( ch === 0xFEFF )  ||
         (( ch >=  0x200B ) && ( ch <=  0x200F )) ||
         (( ch >=  0x202A ) && ( ch <=  0x202E )) ||
         (( ch >=  0x2066 ) && ( ch <=  0x2069 )))
      {
        aCount--;
        aOffset++;
        continue;
      }

      // Following codes represent signs which are also not visible, but they
      // isolate the adjacent glyphs. Skip over the codes and suppress the
      // kerning for the adjacent glyphs. */
      if ( ch === 0x000A )
      {
        aCount--;
        aOffset++;
        prevGlyphId = 0;
        continue;
      }

      // Shape the next text cluster.
      noOfChars = this._ShapeCluster( aFont, aString, aOffset, 
                                      Math.min( aCount, 8 ), false, glyphIds,
                                      context );

      // No matching glyph for the given cluster. Use the '.notdef' glyph.
      if ( !noOfChars )
      {
        glyphIds[0]  = 1;
        glyphIds[1]  = 0;
        noOfChars    = 1;
      }

      // The latest processed cluster contains the specified character.
      if ( noOfChars > aColumn )
        break;

      // Now calculate with the metrics of the estimated glyphs.
      for ( i = 0; i < glyphIds[0]; i++ )
      {
        // Get the glyph for the given glyph id.
        var glyph = this._GetGlyphMetrics( aFont, glyphIds[ i + 1 ]);

        // Could not obtain the glyph. The glyph does not exist.
        if ( !glyph )
        {
          prevGlyphId = 0;
          continue;
        }

        // The area occupied by the glyph
        x += this._GetKerning( aFont, prevGlyphId, glyphIds[ i + 1 ]);
        x += glyph.Advance;

        // The code of the glyph to determine the kerning in the next iteration
        prevGlyphId = glyphIds[ i + 1 ];
      }

      // Stretching white spaces? (incl. the non-breakable space)
      if ( stretchFac && (( ch === 0x20 ) || ( ch === 0xA0 )))
      {
        stretchAcc += stretchFac;
        x          += stretchAcc >> 16;
        stretchAcc &= 0xFFFF;
      }

      // Skip over the processed characters
      aCount  -= noOfChars;
      aOffset += noOfChars;
      aColumn -= noOfChars;
    }

    return x;
  };

  // ---------------------------------------------------------------------------
  // The function ParseFlowString() converts the given source string aString
  // into a new string consisting of an array of wrapped text lines. These lines
  // can then be drawn on the screen by using DrawText() function, so multiline
  // flow text output is possible.
  //
  // The function parses the passed string and tries to wrap it in separate text
  // rows with the specified width aWidth. The function stops if the string has
  // been processed or the resulting set of text rows has reached aMaxNoOfRows.
  //
  // The automatic line wrap is performed primarily between words. Additionally
  // the zero-width-space-sign) and soft-hyphen are possible candidates for the
  // wrap position. These can be specified as special characters '^' or '\x00A0' 
  // (for the zero-width-space) and '~' or '\x00AD' (for soft-hyphen).
  //
  // The both special characters '^' and '~' are usually ignored and they are not
  // displayed until the line wrap took place at its position. Then the '~' sign
  // is converted into the hyphen '-'. The zero-width-space in contrast breaks a
  // row only and remains invisible. These both special characters provide a 
  // flexibel way to output multi-line text.
  //
  // Beside the automatic text wrap, an explicit linefeed is possible when the
  // '\n' sign has been found in the string.
  //
  // In order to be able to output the special characters as regular signs, the
  // character '%' can be applied in front of the affected sign to convert it
  // to a regular sign (e.g. "%~" for the '~' sign or "%%" for the '%' sign).
  // The returned string contains an array of text lines. These are stored in
  // following structure:
  //
  // +-------------+
  // | No of lines |
  // +-------------+------+------+------+------+------+     +------+
  // |    Offset   | Char | Char | Char | Char | Char | ... | Char |
  // +-------------+------+------+------+------+------+     +------+
  // |    Offset   | Char | Char | Char | Char | Char | ... | Char |
  // +-------------+------+------+------+------+------+     +------+
  //  ...
  // +-------------+------+------+------+------+------+     +------+
  // |    Offset   | Char | Char | Char | Char | Char | ... | Char |
  // +-------------+------+------+------+------+------+     +------+
  // |      0      |
  // +-------------+
  //
  // The first character contains the number of lines inside the string. Each
  // line starts with the offset (in character) to the next line, followed by the
  // signs belonging to the line. The lines are not terminated. The entire string
  // is terminated with 0.
  // ---------------------------------------------------------------------------
  emwi._ParseFlowString = function( aFont, aString, aOffset, aWidth, aMaxNoOfRows,
    aBidi )
  {
    // Estimate how much memory is needed for the buffer to store the wrapped
    // string - worst case one character per row
    var maxWidth    = ( aWidth < 0 )? 0x7FFFFFFE : aWidth;
    var maxNoOfRows = ( aMaxNoOfRows < 0 )? 0x7FFFFFFF : aMaxNoOfRows;
    var offset      = Math.max( aOffset, 0 );
    var strLen      = Math.max( aString.length - offset, 0 );
    var dstLen      = strLen * 2 + 1;
    var dst         = new Uint16Array( dstLen + 1 );
    var src         = dst;
    var dstLine     = 1;
    var dstPtr      = dstLine + 1;
    var srcStart    = dstLen - strLen;
    var srcPtr      = srcStart;
    var wrapDstPtr  = 0;
    var wrapActive  = false;
    var prevGlyphId = 0;
    var prevLevel   = -1;
    var width       = 0;
    var count       = 0;
    var ch          = 0;
    var inx         = 0;
    var context;

    // Nothing to do - return empty string
    if ( !aFont || !strLen || !maxNoOfRows )
      return "";

    // Copy the original string to the end of the reserved 'dst' string. The
    // following processing steps will evaluate and modify the signs in this
    // copied string
    for ( inx = 0; inx < strLen; inx++ )
      dst[ inx + srcPtr ] = aString.charCodeAt( inx + offset );

    // Terminate the string
    dst[ dstLen ] = 0;

    // Process the special characters ^, ~ and the escape sequence % 
    for ( inx = 0; inx < strLen; inx++ )
      switch ( src[ inx + srcPtr ])
      {
        case 0x25 : src[ srcPtr + inx++ ] = 0xFEFF; break;
        case 0x5E : src[ srcPtr + inx   ] = 0x200B; break;
        case 0x7E : src[ srcPtr + inx   ] = 0x00AD; break;
      }

    // Should the string be processed with Bidi? 
    if ( aBidi && !this._BidiInit( aBidi, src, srcPtr, strLen, -1 ))
      aBidi = null;

    // Does the string contain bidirectional text?
    if ( aBidi )
    {
      this._BidiProcess     ( aBidi, src, srcPtr ); 
      this._BidiMirrorGlyphs( aBidi, src, srcPtr );
      this._BidiApplyShaping( aBidi, src, srcPtr, null, [ aFont ]);
    }

    // The content of the src array as string.
    var srcStr = String.fromCharCode.apply( null, src.slice( srcPtr ));

    // Prepare an object to store the shaper status
    context = this._InitShaper();

    // Repeat until all signs have been evaluated
    for ( inx = 0; ch = src[ srcPtr ]; )
    {
      var noOfChars = 1;

      // As long as regular signs are found
      if ( ch !== 0xA )
      {
        var glyph;
        var chWidth    = 0;
        var chWidthMax = 0;
        var curSrcPtr  = srcPtr;

        // Replace all BIDI control character codes by zero-width-non-break-space
        if (( ch === 0x061C ) || 
           (( ch >=  0x200C ) && ( ch <= 0x200F )) ||
           (( ch >=  0x202A ) && ( ch <= 0x202E )) ||
           (( ch >=  0x2066 ) && ( ch <= 0x2069 )))
          ch = 0xFEFF;

        // The actial character can't be appended to a wrtapped row.
        // End the wrap active mode. 
        if ( wrapActive && ( ch !== 0xFEFF ) && ( ch !== 0x200B ) && 
           ( ch !== 0x00AD ) && ( ch !== 0x20 ))
          wrapActive = false;

        // Is this a line wrap candidate! Don't wrap at the begin of a line!
        if (( ch === 0x200B ) && width && !wrapActive )
        {
          // Discard the last soft-hyphen wrap candidated
          if ( wrapDstPtr && ( dst[ wrapDstPtr ] === 0xAD ))
            dst[ wrapDstPtr ] = 0xFEFF;

          wrapDstPtr = dstPtr;
          wrapActive = true;
        }

        // Is this a line wrap candidate! Don't wrap at the begin of a line!
        if (( ch === 0x20 ) && width )
        {
          // Discard the last soft-hyphen wrap candidated
          if ( wrapDstPtr && ( dst[ wrapDstPtr ] === 0xAD ))
            dst[ wrapDstPtr ] = 0xFEFF;

          wrapDstPtr = dstPtr;
          wrapActive = true;
        }

        // The soft-hyphen lies at the begin of a text row or it follows another
        // wrap candidate - ignore this hyphen
        if (( ch === 0xAD ) && ( !width || wrapActive ))
          ch = 0xFEFF;

        // Is this a soft-hyphen? This sign does not appear on the screen,
        // unless the silent line wrap is applied - then a '-' minus sign is
        // displayed.
        if ( ch === 0x00AD )
        {
          var glyphId = this._GetGlyphId( aFont, 0x00AD );
          var shWidth = 0;

          // If applied - the soft-hyphen sign should be displayed ... Get the size
          // of the soft-hyphen sign ...
          if ( glyphId && ( glyph = this._GetGlyphMetrics( aFont, glyphId )) !== null )
          {
            var level = aBidi? this._BidiGetCharLevel( aBidi, srcPtr - srcStart ) : 0;

            shWidth = glyph.Advance;

            // Does the actual glyph and the preceding one belong to the same
            // Bidi level run? Then calculate the kerning between them. Otherwise,
            // the glyphs will be separated after reordering of the text row, so no
            // kerning is applicable on them
            if ( level === prevLevel )
              if ( level & 1 ) shWidth += this._GetKerning( aFont, glyphId, prevGlyphId );
              else             shWidth += this._GetKerning( aFont, prevGlyphId, glyphId );
          }

          // ... and check, whether there is space in the current line for this
          // soft-hyphen sign. Please note, if the soft-hyphen is the unique
          // possible wrap position - accept it regardless of the size limitation
          if ((( width + shWidth ) <= maxWidth ) && shWidth || !wrapDstPtr )
          {
            // Discard the last soft-hyphen wrap candidated
            if ( wrapDstPtr && ( dst[ wrapDstPtr ] === 0xAD ))
              dst[ wrapDstPtr ] = 0xFEFF;

            // Avoid that the width of the hyphen is accumulated
            width     -= shWidth;
            wrapDstPtr = dstPtr;
            wrapActive = true;
          }
        }

        // All processed special characters are represented by the zero-width-
        // non-break-space
        if ( ch === 0x200B )
          ch = 0xFEFF;

        // Regular character. Starting with this character try to shape the next
        // cluster. Consider all resulting glyphs as one 'virtual' sign. Calculate
        // the metric of this 'virtual' glyph - Remember the size of the glyph
        // for further processing */
        if ( ch != 0xFEFF )
        {
          var glyphIds     = [];
          var maxNoOfChars = Math.min( strLen - ( srcPtr - srcStart ), 8 );
          var prevLevel2   = prevLevel;
          var prevGlyphId2 = prevGlyphId;
          var level;
          var i;

          // In case of BIDI text limit all characters belonging to a cluster to
          // the same direction level. Borders between adjacent levels separate
          // clusters.
          if ( aBidi )
          {
            level = this._BidiGetCharLevel( aBidi, srcPtr - srcStart );

            // Determine the sequence of characters belonging to the same level.
            for ( i = 1; i < maxNoOfChars; i++ )
              if ( level !== this._BidiGetCharLevel( aBidi, srcPtr - srcStart + i ))
                 maxNoOfChars = i;
          }
        
          // Shape the next text cluster.
          this._SaveShaper( context );
          noOfChars = this._ShapeCluster( aFont, srcStr, srcPtr - srcStart,
                                          maxNoOfChars, level & 1, glyphIds,
                                          context );

          // No matching glyph for the given cluster. Use the '.notdef' glyph.
          if ( !noOfChars )
          {
            glyphIds[0]  = 1;
            glyphIds[1]  = 0;
            noOfChars    = 1;
          }

          // Process the glyphs. Calculate the advance sum for all glyphs.
          for ( i = 0; i < glyphIds[0]; i++ )
          {
            // Get the glyph for the given glyph id.
            var glyph = this._GetGlyphMetrics( aFont, glyphIds[ i + 1 ]);

            // Get the metric of the glyph in question. If the operation fails,
            // ignore the glyph
            if ( glyph )
            {
              chWidth += glyph.Advance;

              // Does the actual glyph and the preceding one belong to the same
              // Bidi level run? Then calculate the kerning between them. Otherwise,
              // the glyphs will be separated after reordering of the text row, so no
              // kerning is applicable on them
              if ( level === prevLevel )
              {
                if ( level & 1 )
                  chWidth += this._GetKerning( aFont, glyphIds[ i + 1 ], prevGlyphId );
                else
                  chWidth += this._GetKerning( aFont, prevGlyphId, glyphIds[ i + 1 ]);
              }
            
              // Track the preceding glyph
              prevGlyphId = glyphIds[ i + 1 ];
              prevLevel   = level;
            }
          }

          // The resulting, max. width of the cluster
          chWidthMax = chWidth;

          // In particular cases, adjacent clusters may produce different glyphs. 
          // Calculate the width of the cluster when it is isolated. Track the max.
          // cluster width. For optimization purpose to avoid the expensive cluster
          // shaping, we check this condition only if there is few space free in
          // the actual text row only.
          if (( noOfChars < maxNoOfChars ) && 
             (( maxWidth - width ) < ( 3 * chWidthMax )))
          {
            var chWidth2 = 0;

            // Shape the next text cluster. Please note: do this relative to
            // the preceding shaper state. Then restore again the latest 
            // state.
            this._RestoreShaper( context );
            this._ShapeCluster( aFont, srcStr, srcPtr - srcStart, noOfChars,
                                level & 1, glyphIds, context );
            this._RestoreShaper( context );

            // Process the glyphs. Calculate the advance sum for all glyphs.
            for ( i = 0; i < glyphIds[0]; i++ )
            {
              // Get the glyph for the given glyph id.
              var glyph = this._GetGlyphMetrics( aFont, glyphIds[ i + 1 ]);

              // Get the metric of the glyph in question. If the operation fails,
              // ignore the glyph
              if ( glyph )
              {
                chWidth2 += glyph.Advance;

                // Does the actual glyph and the preceding one belong to the same
                // Bidi level run? Then calculate the kerning between them. Otherwise,
                // the glyphs will be separated after reordering of the text row, so no
                // kerning is applicable on them
                if ( level === prevLevel2 )
                {
                  if ( level & 1 )
                    chWidth2 += this._GetKerning( aFont, glyphIds[ i + 1 ], prevGlyphId2 );
                  else
                    chWidth2 += this._GetKerning( aFont, prevGlyphId2, glyphIds[ i + 1 ]);
                }
            
                // Track the preceding glyph
                prevGlyphId2 = glyphIds[ i + 1 ];
                prevLevel2   = level;
              }
            }

            // Track the max. width of the cluster
            if ( chWidth2 > chWidthMax )
              chWidthMax = chWidth2;
          }
        }

        // Test, whether the cluster can be displayed within the line. To avoid
        // endless line wrapping, the first cluster is always taken over!
        if ((( chWidthMax + width ) <= maxWidth ) || !width )
        {
          width += chWidth;

          // Copy the just processed characters to the destination line
          while ( noOfChars-- > 0 )
            dst[ dstPtr++ ] = src[ srcPtr++ ];
        }

        // There is not enought space for the sign - skip back to the last wrap
        // canditate - if any!
        else if ( wrapDstPtr )
        {
          /* Breaking a line at blank? Replace it by a zero-width sign */
          if ( dst[ wrapDstPtr ] === 0x20 )
            dst[ wrapDstPtr ] = 0xFEFF;

          // Move back all characters following the wrap position
          for ( srcPtr--, dstPtr--; dstPtr > wrapDstPtr; srcPtr--, dstPtr-- )
            src[ srcPtr ] = dst[ dstPtr ];

          // Force this row to be terminated
          wrapDstPtr = 0;
          ch         = 0xA;
          srcPtr++;
          dstPtr++;
        }

        // No word wrap candidate found - force a wrap before the current cluster
        else
        {
          srcPtr = curSrcPtr;
          ch     = 0xA;
        }

        // At the end of wrapped row skip all blank, zero-width and wrap candidate
        // characters following the wrap position. Append them to the just wrapped
        // row. The next row, if any, should start with a visible character. Note,
        // space is a visible character! If text wrap occured at space position,
        // the affected space character is consumed. Other following spaces are
        // retained
        if ( ch === 0xA )
        {
          if ( src[ srcPtr ] === 0x20 )
          {
            dst[ dstPtr++ ] = 0xFEFF;
            srcPtr++;
          }

          while ((( ch = src[ srcPtr ]) === 0xAD ) ||
                  ( ch === 0x061C ) || ( ch === 0xFEFF )  || 
                 (( ch >=  0x200B ) && ( ch <=  0x200F )) ||
                 (( ch >=  0x202A ) && ( ch <=  0x202E )) ||
                 (( ch >=  0x2066 ) && ( ch <=  0x2069 )))
          {
            dst[ dstPtr++ ] = 0xFEFF;
            srcPtr++;
          }

          ch = 0xA;
        }
      }

      // New line terminated line - store it for justified text
      else
      {
        srcPtr++;
        dst[ dstPtr++ ] = ch;
      }

      // Terminate the text line and prepare the preprocessor for the next text row 
      if (( ch === 0xA ) && src[ srcPtr ])
      {
        // Terminating a text row but there is no space for a further row. Stop.
        if ( --maxNoOfRows <= 0 )
          break;

        // Discard the last soft-hyphen wrap candidated
        if ( wrapDstPtr && ( dst[ wrapDstPtr ] === 0xAD ))
          dst[ wrapDstPtr ] = 0xFEFF;

        // Complete the Bidi-Algorithm on the just estimated row?
        if ( aBidi )
        {
          var endInx   = srcPtr - srcStart;
          var startInx = endInx - ( dstPtr - dstLine ) + 1;

          this._BidiCompleteRow ( aBidi, startInx, endInx );
          this._BidiReorderArray( aBidi, startInx, endInx, dst, dstLine + 1 );
        }

        // Complete the current text line and ...
        dst[ dstLine ] = dstPtr - dstLine;
        dst[ dstPtr  ] = 0;

        // ... continue with the next 
        dstLine     = dstPtr;
        dstPtr     += 1;
        wrapDstPtr  = 0;
        wrapActive  = false;
        width       = 0;
        prevGlyphId = 0;
        prevLevel   = -1;
        count++;

        // Starting with a new row - discard the old shaper context
        this._ResetShaper( context );
      }
    }

    // Discard the last soft-hyphen wrap candidated
    if ( wrapDstPtr && ( dst[ wrapDstPtr ] === 0xAD ))
      dst[ wrapDstPtr ] = 0xFEFF;

    // Terminate the last text line 
    if (( dstPtr - dstLine ) > 1 )
    {
      // Complete the Bidi-Algorithm on the just estimated row?
      if ( aBidi )
      {
        var endInx   = srcPtr - srcStart;
        var startInx = endInx - ( dstPtr - dstLine ) + 1;

        this._BidiCompleteRow ( aBidi, startInx, endInx );
        this._BidiReorderArray( aBidi, startInx, endInx, dst, dstLine + 1 );
      }

      // Complete the current text line and ... 
      dst[ dstLine ] = dstPtr - dstLine;
      dst[ dstPtr  ] = 0;
      count++;
    }

    // Terminate the entire text
    dst[0] = count;

    // Convert back from the buffer to string
    var res = "";

    for ( inx = 0; inx < dstPtr; inx++ )
      res += String.fromCharCode( dst[inx]);

    return res;
  };

  // ---------------------------------------------------------------------------
  // The function GetFlowTextAdvance() calculates the advance of the widest text
  // row in the multi-line text block aFlowString by using the font aFont. The
  // value is calculated by the sum of advance values of all glyphs needed to 
  // display the respective text row and then by selecting the result of the row
  // which is the widest one.
  // ---------------------------------------------------------------------------
  emwi._GetFlowTextAdvance = function( aFont, aFlowString )
  {
    var len = aFlowString.length;
    var inx = 1;
    var w   = 0;

    // Nothing to do
    if ( !len )
      return 0;

    if ( !aFont )
    {
      console.log( "EmWi error: Invalid font resource." );
      return 0;
    }

    // Evaluate all text rows and determine the size of resulting text block
    while ( inx < len )
    {
      var offset = aFlowString.charCodeAt( inx );
      var rowLen = offset - 1;
      var rowInx = inx + 1;
      var rowW;

      // The string is not a valid flow string. Abort.
      if (( rowInx + rowLen ) > len )
        return 0;
    
      // Calculate the advance of the text row
      rowW = this._GetTextAdvance( aFont, aFlowString, rowInx, rowLen );

      // Track the widest row
      if ( rowW > w )
        w = rowW;

      // Skip to the next row
      inx += offset;
    }

    return w;
  };

  // ---------------------------------------------------------------------------
  // The function CreateAttrSet() creates and initializes a new attr. string set.
  // The set is used as a simple container for storing of fonts, bitmaps and 
  // colors. These resources are necessary for parsing and drawing of attributed
  // strings. The size of the set (the max. number of entries, it can store) is
  // passed in the arguments aNoOfFonts, aNoOfBitmaps and aNoOfColors. After
  // creation, the size of the set is fixed and can not be changed any more.
  // All entries of a newly created set are always initialized with 0. To start
  // working with attributed strings, the set should be loaded with necessary 
  // fonts, bitmaps and colors. The functions, defined below allow an access to
  // these entries.
  // ---------------------------------------------------------------------------
  emwi._CreateAttrSet = function( aNoOfFonts, aNoOfBitmaps, aNoOfColors )
  {
    if ( aNoOfFonts   < 0   ) aNoOfFonts   = 0;
    if ( aNoOfBitmaps < 0   ) aNoOfBitmaps = 0;
    if ( aNoOfColors  < 0   ) aNoOfColors  = 0;
    if ( aNoOfFonts   > 256 ) aNoOfFonts   = 256;
    if ( aNoOfBitmaps > 256 ) aNoOfBitmaps = 256;
    if ( aNoOfColors  > 256 ) aNoOfColors  = 256;

    return {
      NoOfFonts   : aNoOfFonts,
      NoOfBitmaps : aNoOfBitmaps,
      NoOfColors  : aNoOfColors,
      Fonts       : [],
      Bitmaps     : [],
      Colors      : []
    };
  };

  // ---------------------------------------------------------------------------
  // The function FreeAttrSet() frees the memory occuped by the set. The
  // function frees the memory only - the corresponding fonts, bitmaps are not
  // affected!
  // ---------------------------------------------------------------------------
  emwi._FreeAttrSet = function( aAttrSet )
  {
    if ( aAttrSet )
    {
      delete aAttrSet.Fonts;
      delete aAttrSet.Bitmaps;
      delete aAttrSet.Colors;
    }
  };
  
  // ---------------------------------------------------------------------------
  // The function SetAttrColor() assigns new color value aColor to the entry
  // aColorNo within the given set aAttrSet.
  // ---------------------------------------------------------------------------
  emwi._SetAttrColor = function( aAttrSet, aColorNo, aColor )
  {
    if ( !aAttrSet || ( aColorNo < 0 ))
      return;

    if ( aColorNo < aAttrSet.NoOfColors )
      aAttrSet.Colors[ aColorNo ] = aColor;
  };
  
  // ---------------------------------------------------------------------------
  // The function SetAttrBitmap() assigns new bitmap aBitmap to the entry 
  // aBitmapNo within the given set aAttrSet.
  // ---------------------------------------------------------------------------
  emwi._SetAttrBitmap = function( aAttrSet, aBitmapNo, aBitmap )
  {
    if ( !aAttrSet || ( aBitmapNo < 0 ))
      return;

    if ( aBitmapNo < aAttrSet.NoOfBitmaps )
      aAttrSet.Bitmaps[ aBitmapNo ] = aBitmap;
  };
  
  // ---------------------------------------------------------------------------
  // The function SetAttrFont() assigns new font aFont to the entry aFontNo
  // within the given set aAttrSet.
  // ---------------------------------------------------------------------------
  emwi._SetAttrFont = function( aAttrSet, aFontNo, aFont )
  {
    if ( !aAttrSet || ( aFontNo < 0 ))
      return;

    if ( aFontNo < aAttrSet.NoOfFonts )
      aAttrSet.Fonts[ aFontNo ] = aFont;
  };


  // This function parses an unsigned number from the given string. The number is
  // returned in the entry aResultInx of the array aResult. If the number could
  // not be read, aResult will be initialized with 0. The function returns the
  // pointer to the next sign.
  function ParseNumber( aString, aStringInx, aResult, aResultInx )
  {
    var tmp = 0;
    var c   = aString.charCodeAt( aStringInx );

    // Repeat until all digits are processed and build the number.
    while (( c >= 0x30 ) && ( c <= 0x39 ))
    {
      tmp = ( tmp * 10 ) + ( c - 0x30 );
      c   = aString.charCodeAt( ++aStringInx );
    }

    // Return the number to the caller
    aResult[ aResultInx ] = tmp;

    return aStringInx;
  }

  // This function parses an unsigned number from the given string. Optionally a
  // percent value of aRange will be calculated, if the number is followed by 
  // the '%' sign.
  function ParseNumber2( aString, aStringInx, aRange, aResult, aResultInx )
  {
    aStringInx = ParseNumber( aString, aStringInx, aResult, aResultInx );

    // Ist this a percent value of aRange value? 
    if ( aString.charCodeAt( aStringInx ) === 0x25 )
    {
      var num = aResult[ aResultInx ] * aRange;

      aResult[ aResultInx ] = ( num / 100 ) | 0;

      if (( num - ( aResult[ aResultInx ] * 100 )) > 50 )
        aResult[ aResultInx ]++;

      // Skip over the '%' sign
      aStringInx++;
    }

    return aStringInx;
  }

  // This function parses up to 4 numbers as 'left,right,top,bottom' borders. The
  // numbers are separated by ',' comma sign. The numbers can be ommited - in this
  // case the corresponding border is initialized with 0. The borders are returned
  // as entries of the array aResult. The order of entries corresponds to left,
  // right,top,bottom. The argument aWidth is necessary if the left or right
  // border uses the percent notation. In this case the corresponding border is
  // initialized with the percent value of aWidth.
  function ParseBorders( aString, aStringInx, aWidth, aResult )
  {
    // Default value, if no borders are specified in the string.
    aResult[0] = 0;
    aResult[1] = 0;
    aResult[2] = 0;
    aResult[3] = 0;

    // Start with the 'left' border. The border can be a percent value of aWidth.
    aStringInx = ParseNumber2( aString, aStringInx, aWidth, aResult, 0 );

    // Is there anything more to parse? The numbers are delimited by the ',' sign.
    if ( aString.charCodeAt( aStringInx ) === 0x2C )
    {
      // Parse the second number as the 'right' border. The border can be a percent
      // value of aWidth.
      aStringInx = ParseNumber2( aString, aStringInx + 1, aWidth, aResult, 1 );

      // Then continue with the 'top' border...
      if ( aString.charCodeAt( aStringInx ) === 0x2C )
      {
        aStringInx = ParseNumber( aString, aStringInx + 1, aResult, 2 );

        // ... and 'bottom' border
        if ( aString.charCodeAt( aStringInx ) === 0x2C )
          aStringInx = ParseNumber( aString, aStringInx + 1, aResult, 3 );
      }
    }

    // Ensure the given width aWidth is not exceeded by the left border
    if ( aResult[0] > aWidth )
      aResult[0] = aWidth;

    // ... and by the right border
    if ( aResult[1] > ( aWidth - aResult[0]))
      aResult[1] = aWidth - aResult[0];

    return aStringInx;
  }

  // This function verifies, whether the next signs in aString define a valid
  // horizontal alignment and returns it in the entry aResultInx of the aResult
  // array. If no alignment is specified the 'Left' alignment is returned.
  function ParseAlignH( aString, aStringInx, aResult, aResultInx )
  {
    var tmp = 0x6C; // Left alignment per default
    var c1  = aString.charCodeAt( aStringInx );
    var c2  = c1? aString.charCodeAt( aStringInx + 1 ) : 0;

    if ((( c1 === 0x6C ) || ( c1 === 0x72 ) || ( c1 === 0x63 ) || ( c1 === 0x61 )) &&
         ( c2 === 0x6A ))
    {
      tmp = c1 - 0x20;
      aStringInx += 2;
    }

    else if (( c1 === 0x6A ) &&
            (( c2 === 0x6C ) || ( c2 === 0x72 ) || ( c2 === 0x63 ) || ( c2 === 0x61 )))
    {
      tmp = c2 - 0x20;
      aStringInx += 2;
    }

    else if (( c1 === 0x6C ) || ( c1 === 0x72 ) || ( c1 === 0x63 ) || ( c1 === 0x61 ))
    {
      tmp = c1;
      aStringInx++;
    }

    else if ( c1 === 0x6A )
    {
      tmp = 0x4C;
      aStringInx++;
    }

    // Return the determinated alignment
    aResult[ aResultInx ] = tmp;

    return aStringInx;
  }

  // This function verifies, whether the next sign in aString defines a valid
  // vertical alignment and returns it in the entry aResultInx of the aResult
  // array. If no alignment is specified the 'Middle' alignment is returned.
  function ParseAlignV( aString, aStringInx, aResult, aResultInx )
  {
    var tmp = 0x6D; // Middle alignment per default
    var c   = aString.charCodeAt( aStringInx );

    // Is this a valid vertical alignment? (Top/Middle/Bottom)
    if (( c === 0x74 ) || ( c === 0x6D ) || ( c === 0x62 ))
    {
      tmp = c;
      aStringInx++;
    }

    // Return the determinated alignment 
    aResult[ aResultInx ] = tmp;

    return aStringInx;
  }

  // This function parses the width of up to 3 layout columns. The width of 
  // these columns is returned as entries of the array aColumns. For each column
  // the function accepts a number or a '*' sign. If the number is specified, 
  // the width of the column is fixed.
  // Columns signed with '*' are elastic - they are stretched in order to 
  // fill the remaining width, not occuped by other columns. The entire width
  // is specified in the aWidth argument.
  function ParseColumns( aString, aStringInx, aWidth, aColumns )
  {
    // 'tmp' will store the width of the layout columns temporary.
    var tmp = [ 0, 0, 0 ];
    var c  = aString.charCodeAt( aStringInx );
    var i  = 0;
    var j  = 0;
    var ew = aWidth;
    var ec = 0;
    var a  = [0];

    // Get the width of up to 3 layout columns. Columns signed with '*' are 
    // elastic.
    while (( i < 3 ) && ((( c >= 0x30 ) && ( c <= 0x39 ))  || ( c === 0x2A )))
    {
      // Is this an elastic column? In this case the width is calculated later.
      if ( c === 0x2A )
      {
        tmp[i] = -1;
        ec++;
        aStringInx++;
      }

      // Otherwise get the exact width of the column in pixel.
      else
      {
        aStringInx = ParseNumber2( aString, aStringInx, aWidth, tmp, i );
        ew         = ew - tmp[i];
      }

      // Skip over the delimiter between the columns.
      if (( c = aString.charCodeAt( aStringInx )) === 0x2C )
        c = aString.charCodeAt( ++aStringInx );

      // Continue with the next column.
      i++;
    }

    // Default layout with a single column?
    if ( !i )
    {
      tmp[0] = aWidth;
      i      = 1;
    }

    // Adapt the width of elastic columns (if any)
    for ( ; j < ec; j++ )
    {
      var w = ( ew / ec ) | 0;

      // The last elastic column will take the remaining width
      if ( j === ( ec - 1 ))
        w = ew - ( ec - 1 ) * w;

      if      ( tmp[0] < 0 ) tmp[0] = w;
      else if ( tmp[1] < 0 ) tmp[1] = w;
      else if ( tmp[2] < 0 ) tmp[2] = w;
    }

    // Store the width of these columns in the aColumns array.
    for ( i = 0; i < 3; i++ )
    {
      // All columns have to have positive width.
      if ( tmp[i] < 0 )
        tmp[i] = 0;

      // Ensure, the entire width is not exceeded.
      if ( tmp[i] > aWidth )
        tmp[i] = aWidth;

      aWidth = aWidth - tmp[i];

      // Store the result for the caller.
      aColumns[i] = tmp[i];
    }

    return aStringInx;
  }

  // This function verifies, whether the string aString contains the given 
  // keyword aKeyword. If true, the function returns a value 'true'
  function IsKeyword( aString, aStringInx, aKeyword )
  {
    return aString.slice( aStringInx, aStringInx + aKeyword.length ) === aKeyword;
  }

  // The function evaluates the given string aString as containing a paragraph
  // and searches for an attribute identifying the end of this paragraph or for
  // the end of the string. Finally returns the index of the character which does
  // not belong to the paragraph.
  function FindEndOfParagraph( aString, aStringInx )
  {
    var ch;

    // Search the string until its end
    for ( ; ( ch = aString.charCodeAt( aStringInx )); aStringInx++ )
    {
      // The attributes {par, {lay, {col and {end terminate the paragraph
      if (( ch === 0x7B ) && ( IsKeyword( aString, aStringInx + 1, "par" ) ||
             IsKeyword( aString, aStringInx + 1, "lay" ) || 
             IsKeyword( aString, aStringInx + 1, "col" ) ||
             IsKeyword( aString, aStringInx + 1, "end" )))
        break;

      // Skip over escape sequences starting with the '%' sign 
      if (( ch === 0x25 ) && ( aStringInx < ( aString.length - 1 )))
        aStringInx++;
    }

    return aStringInx;
  }

  // The function processes the given string aString till the end aEnd as content
  // of a paragraph and stores in aResChars and aResAttrs the resulting character
  // codes with their corresponding attributes. All {clr, {fnt and {ul attributes
  // are evaluated during this phase affecting the attributes of all following
  // characters as these are stored in aResAttrs. If the paragraph contains links
  // {lnk:...}, the link number enclosing the character is stored in aResLinks.
  // If the character is not enclosed in any link, the corresponding link id is 0.
  //
  // If the function encounters the {img attribute, it stores in aResChars the
  // code \xFEFF representing an 'embedded content' and in aResAttrs the numbers
  // of the corresponding bitmap and frame. In aResLinks stores the number of the
  // link enclosing this image or 0 if no link is enclosing the image.
  //
  // The function returns the number of entities resulting in aResChars, 
  // aResAttrs and aResLinks.
  function ParseParagraph( aString, aStringInx, aEndInx, aResChars, aResAttrs,
    aResLinks, aLinkCount )
  {
    var startStringInx = aStringInx;
    var resInx         = 0;
    var colorNo        = 0;
    var fontNo         = 0;
    var ul             = false;
    var linkOn         = false;
    var pars           = [ 0, 0, 0 ];

    // Repeat until the entire content of the paragraph has been processed
    while ( aStringInx < aEndInx )
    {
      var ch = aString.charCodeAt( aStringInx );

      // Is this an attribute?
      if ( ch === 0x7B )
      {
        // Evaluate the image attribute
        if ( IsKeyword( aString, aStringInx, "{img" ))
        {
          // Skip over the alignment and ...
          aStringInx = ParseAlignV( aString, aStringInx + 4, pars, 0 );

          // ... get the index of the bitmap
          aStringInx = ParseNumber( aString, aStringInx, pars, 1 );

          // Frame number specified?
          if ( aString.charCodeAt( aStringInx ) === 0x2E )
          {
            aStringInx++;
            aStringInx = ParseNumber( aString, aStringInx, pars, 2 );
          }

          if ( aString.charCodeAt( aStringInx ) === 0x7D )
            aStringInx++;

          // If the specified numbers are out of range - fall back to default 
          // number 0
          if ( pars[2] > 4095 ) pars[2] = 0;
          if ( pars[1] > 255  ) pars[1] = 0;

          aResChars[ resInx   ] = 0xFEFF;
          aResAttrs[ resInx   ] = (( pars[0] === 0x74 )? 5 : ( pars[0] === 0x62 )? 4 : 3 ) |
                                   ( colorNo << 4 ) | ( pars[1] << 12 ) | ( pars[2] << 20 );
          aResLinks[ resInx++ ] = linkOn? aLinkCount[0] : 0;
          continue;
        }

        // Evaluate the change font attribute
        if ( IsKeyword( aString, aStringInx, "{fnt" ))
        {
          aStringInx = ParseNumber( aString, aStringInx + 4, pars, 0 );

          // Skip over the '}' delimiter at the end of the attribute
          if ( aString.charCodeAt( aStringInx ) === 0x7D )
            aStringInx++;

          fontNo = pars[0];

          // If the specified number is out of range - fall back to default 
          // number 0
          if ( fontNo > 255 ) fontNo = 0;
          continue;
        }

        // Skip over the color selection attribute
        if ( IsKeyword( aString, aStringInx, "{clr" ))
        {
          aStringInx = ParseNumber( aString, aStringInx + 4, pars, 0 );

          // Skip over the '}' delimiter at the end of the attribute
          if ( aString.charCodeAt( aStringInx ) === 0x7D )
            aStringInx++;

          colorNo = pars[0];

          // If the specified number is out of range - fall back to default 
          // number 0
          if ( colorNo > 255 ) colorNo = 0;
          continue;
        }

        // Skip over the underline on attribute 
        if ( IsKeyword( aString, aStringInx, "{ul+}" ))
        {
          ul = true;
          aStringInx += 5;
          continue;
        }

        // Skip over the underline off attribute
        if ( IsKeyword( aString, aStringInx, "{ul-}" ))
        {
          ul = false;
          aStringInx += 5;
          continue;
        }

        // Skip over the link attribute
        if ( IsKeyword( aString, aStringInx, "{lnk:" ))
        {
          aStringInx    += 5;
          linkOn         = true;
          aLinkCount[0] += 1;

          // Skip over the link name
          while (( aStringInx < aEndInx ) && (( ch = aString.charCodeAt( aStringInx )) !== 0x7D ) && 
                 ( ch !== 0x7B ))
            aStringInx++;

          // Skip over the '}' delimiter at the end of the attribute
          if ( aString.charCodeAt( aStringInx ) === 0x7D )
            aStringInx++;

          continue;
        }

        // Skip over the link attribute
        if ( IsKeyword( aString, aStringInx, "{lnk}" ))
        {
          aStringInx += 5;
          linkOn      = false;
          continue;
        }
      }

      // Alias for the non-zero width space character?
      if ( ch === 0x5E )
      {
        aResChars[ resInx   ] = 0x200B;
        aResAttrs[ resInx   ] = ( ul? 2 : 1 ) | ( colorNo << 4 ) | ( fontNo << 12 );
        aResLinks[ resInx++ ] = linkOn? aLinkCount[0] : 0;
        aStringInx++;
        continue;
      }

      // Alias for the soft-hyphen? 
      if ( ch === 0x7E )
      {
        aResChars[ resInx   ] = 0xAD;
        aResAttrs[ resInx   ] = ( ul? 2 : 1 ) | ( colorNo << 4 ) | ( fontNo << 12 );
        aResLinks[ resInx++ ] = linkOn? aLinkCount[0] : 0;
        aStringInx++;
        continue;
      }

      // Starting an escape sequence?
      if ( ch === 0x25 )
      {
        ch = aString.charCodeAt( ++aStringInx );
        if ( aStringInx === aEndInx )
          break;
      }
 
      aResChars[ resInx   ] = ch;
      aResAttrs[ resInx   ] = ( ul? 2 : 1 ) | ( colorNo << 4 ) | ( fontNo << 12 );
      aResLinks[ resInx++ ] = linkOn? aLinkCount[0] : 0;
      aStringInx++;
    }

    // Terminate the parsed string
    aResChars[ resInx ] = 0;
    aResAttrs[ resInx ] = 0;
    aResLinks[ resInx ] = 0;

    return resInx;
  }


  // This function parses the body block in aString and stores the preprocessed
  // attributes in aDest buffer. The function determinates the height occuped by
  // the body and returns it in the entry aHeightInx of the array aHeight.
  function Body( aThis, aAttrSet, aString, aStringInx, aWidth, aEnableBidiText,
    aDest, aHeight, aHeightInx, aLastLeading, aLastLeadingInx, aIsRTL,
    aLinkCount )
  {
    // 'y' stores the vertical offset to the paragraphs
    var y           = [0];
    var lastLeading = [0];
    var tmpInx      = aDest.length;

    // Store the clipping area and width of the paragraph's interior
    aDest.push( 0x47, // 'G'
      0, 0, aWidth,
      0,              // The height is still unknown
      0,              // The length of the paragraph is still unknown
      0               // Additional horizontal offset
    );

    // Try to parse the paragraph's content
    aStringInx = Paragraph( aThis, aAttrSet, aString, aStringInx, aWidth, 0x6C,
                            aEnableBidiText, aDest, y, lastLeading, aIsRTL,
                            aLinkCount );

    // Did the paragraph contain any text/images? Then update the paragraph's
    // height and the offset to the next paragraph in the buffer.
    if ( aDest.length > ( tmpInx + 7 ))
    {
      aDest[ tmpInx + 4 ] = y[0];
      aDest[ tmpInx + 5 ] = aDest.length - tmpInx;
    }

    // Otherwise the paragraph is empty and the group is useless. Restore the
    // buffer state
    else
      aDest.splice( tmpInx, aDest.length - tmpInx );

    // Repeat until the whole source string is evaluated or an unknown attribute 
    // is found.
    while ( aStringInx < aString.length )
    {
      /* Is this a begin of a new paragraph? */
      if ( IsKeyword( aString, aStringInx, "{par" ))
      {
        var borders = [ 0, 0, 0, 0 ];
        var bc      = [ -1 ];
        var alignH  = [];
        var width;
        var height = [0];

        // Get the alignment and the borders of the paragraph
        aStringInx = ParseAlignH ( aString, aStringInx + 4, alignH, 0 );
        aStringInx = ParseBorders( aString, aStringInx, aWidth, borders );

        // Is the paragraph filled with a solid color?
        if ( aString.charCodeAt( aStringInx ) === 0x3A )
          aStringInx = ParseNumber( aString, aStringInx + 1, bc, 0 );

        // Skip over the '}' delimiter at the end of the {par attribute
        if ( aString.charCodeAt( aStringInx ) === 0x7D )
          aStringInx++;

        // Prepare the drawing statement for the filling of the paragraph.
        // The entire column should be filled with the solid color.
        if ( bc[0] !== -1 )
          aDest.push( 0x52, // 'R'
            0,
            y[0] + lastLeading[0],
            aWidth,
            0,              // The height is still unknown 
            bc[0]
          );

        // Remember the start position of the paragraph
        tmpInx = aDest.length;

        // Calculate the width of the paragraph's content. The height is still
        // unknown.
        width = aWidth - borders[0] - borders[1];

        // Store the clipping area and width of the paragraph's interior 
        aDest.push( 0x47, // 'G'
          0,
          ( y[0] += lastLeading[0]) + borders[2],
          aWidth,
          0,             // The height is still unknown
          0,             // The length of the paragraph is still unknown
          borders[0]     // Additional horizontal offset
        );

        // Now, parse the paragraph's content and ...
        aStringInx = Paragraph( aThis, aAttrSet, aString, aStringInx, width,
                                alignH[0], aEnableBidiText, aDest, height, 
                                lastLeading, aIsRTL, aLinkCount );

        // Where does the next paragraph appear?
        y[0] += borders[2] + height[0] + borders[3];

        // Update the paragraph's height and the offset to the next paragraph
        // in the buffer.
        aDest[ tmpInx + 4 ] = y[0] - borders[3];
        aDest[ tmpInx + 5 ] = aDest.length - tmpInx;

        // Don't forget to adjust the rectangle of the filling paragraph
        if ( bc[0] !== -1 )
          aDest[ tmpInx - 2 ] = y[0];
      }

      // Is this a begin of a layout?
      else if ( IsKeyword( aString, aStringInx, "{lay" ))
      {
        var columns = [];
        var height  = [0];

        tmpInx = aDest.length;

        // Get the number and the width of the layout columns.
        aStringInx = ParseColumns( aString, aStringInx + 4, aWidth, columns );

        // Skip over the '}' delimiter at the end of {lay
        if ( aString.charCodeAt( aStringInx ) === 0x7D )
          aStringInx++;

        // Store the origin and the size of the layout's group
        aDest.push( 0x47, // 'G'
          0, y[0] += lastLeading[0], aWidth,
          0,              // The height is still unknown
          0,              // The length of the paragraph is still unknown
          0               // Additional horizontal offset
        );
        
        // Now, parse the layout's content and ...
        aStringInx = Layout( aThis, aAttrSet, aString, aStringInx, 
                             aEnableBidiText, columns, aDest, height, 
                             lastLeading, aIsRTL, aLinkCount );

        // Where does the next paragraph appear?
        y[0] += height[0];

        // ... update the layout's height and the offset to the next paragraph
        // in the buffer. 
        aDest[ tmpInx + 4 ] = y[0];
        aDest[ tmpInx + 5 ] = aDest.length - tmpInx;
      }

      // Neither paragraph nor layout found - return to the caller
      else
        break;
    }

    // Return the entire height of the body to the caller.
    aHeight[ aHeightInx ]           = y[0];
    aLastLeading[ aLastLeadingInx ] = lastLeading[0];

    return aStringInx;
  }

  // This function parses the layout in aString and stores the preprocessed
  // attributes in aDest buffer. The function determinates the height occuped by
  // the layout's body and returns it in the entry #0 of the aHeight array.
  function Layout( aThis, aAttrSet, aString, aStringInx, aEnableBidiText, 
    aColumns, aDest, aHeight, aLastLeading, aIsRTL, aLinkCount )
  {
    var aligns = [];
    var colInx = [];
    var colH   = [];
    var bc     = [ -1, -1, -1 ];
    var ll     = [  0,  0,  0 ];
    var i      = 0;
    var j      = 0;
    var x      = 0;
    var height = 0;
    var total  = 0;

    // Evaluate all columns of the layout.
    while (( aStringInx < aString.length ) && ( i < aColumns.length ))
    {
      // Is this a begin of the next layout's column?
      if ( IsKeyword( aString, aStringInx, "{col" ))
      {
        var borders = [ 0, 0, 0, 0 ];
        var width;

        // Evaluate the vertical alignment and the borders of the column.
        aStringInx = ParseAlignV( aString, aStringInx + 4, aligns, i );
        aStringInx = ParseBorders( aString, aStringInx, aColumns[i], borders );

        // Is the column filled with a solid color?
        if ( aString.charCodeAt( aStringInx ) === 0x3A )
          aStringInx = ParseNumber( aString, aStringInx + 1, bc, i );

        // Skip over the '}' delimiter at the end of the {lay attribute
        if ( aString.charCodeAt( aStringInx ) === 0x7D )
          aStringInx++;

        // Prepare the drawing statement for the filling of the column
        if ( bc[i] !== -1 )
          aDest.push( 0x52, // 'R'
            x,
            0,
            x + aColumns[i],
            0,              // The height is still unknown 
            bc[i]
          );

        // Remember the start position of the column
        colInx[i] = aDest.length;

        // The width of the column's content
        width = aColumns[i] - borders[0] - borders[1];

        // Store the origin and the size of the column's group
        aDest.push( 0x47, // 'G'
          x + borders[0],
          borders[2],
          x + borders[0] + width,
          0,              // The height is still unknown
          0,              // The length of the column is still unknown
          0               // Additional horizontal offset
        );
        
        // Parse the body.
        aStringInx = Body( aThis, aAttrSet, aString, aStringInx, width, 
                           aEnableBidiText, aDest, colH, i, ll, i, aIsRTL,
                           aLinkCount );

        // Remember the height of the highest column. Also do this by taking the
        // remaining leading in acount
        colH[i] += borders[2] + borders[3];
        height   = Math.max( height, colH[i]);
        total    = Math.max( total,  colH[i] + ll[i]);

        // ... update the layout's height and the offset to the next paragraph
        // in the buffer.
        aDest[ colInx[i] + 4 ] = colH[i] - borders[3];
        aDest[ colInx[i] + 5 ] = aDest.length - colInx[i];

        // Where does the next column appear?
        x += aColumns[i];

        // Continue with next column
        i++;
      }

      // Neither paragraph nor layout column found - return to the caller
      else
        break;
    }

    // Now, we know about the height and alignment of all columns. Arrange the 
    // columns depending on their alignment.
    for ( j = 0; j < i; j++ )
    {
      var tmpInx = colInx[j];
      var o      = height - colH[j];

      // calculate the vertical movement of the column 'j'.
      switch ( aligns[j])
      {
        case 0x74 : o   = 0; break;
        case 0x6D : o >>= 1; break;
      }

      // ... and adapt the column's vertical position.
      aDest[ tmpInx + 2 ] += o;
      aDest[ tmpInx + 4 ] += o;

      // Don't forget to adjust the background rectangle if the column is
      // filled
      if ( bc[j] !== -1 )
        aDest[ tmpInx - 2 ] = height;
    }

    // Remember the height of the entire layout.
    aHeight[ 0 ]      = height;
    aLastLeading[ 0 ] = total - height;

    // The layout attribute should be terminated with the {end} keyword.
    if ( IsKeyword( aString, aStringInx, "{end}" ))
      aStringInx += 5;

    return aStringInx;
  }

  // This function evaluates the entities in aChars and aAttrs and searches for 
  // the end of the next row fitting within aMaxWidth. The function determinates
  // the width, the height of the line and returns back the number of processed
  // entities. The determined values width, height, space, baseline and leading
  // are returned as entries of the array aResult. 
  function ProcessAttrTextRow( aThis, aAttrSet, aChars, aAttrs, aInx, aMaxWidth, 
     aBidi, aResult /* aWidth, aHeight, aSpace, aBaseLine, aLeading */ )
  {
    var charsStr     = String.fromCharCode.apply( null, aChars );
    var startInx     = aInx;
    var font         = null;
    var fontNo       = -1;
    var wrapInx      = 0;
    var wrapWidth    = 0;
    var wrapHeight   = 0;
    var wrapSpace    = 0;
    var wrapBaseLine = 0;
    var wrapDescent  = 0;
    var wrapLeading  = 0;
    var wrapActive   = false;
    var descent      = 0;
    var prevGlyphId  = 0;
    var prevLevel    = -1;
    var context      = aThis._InitShaper();

    aResult[0] = 0; // aWidth
    aResult[1] = 0; // aHeight
    aResult[2] = 0; // aSpace
    aResult[3] = 0; // aBaseLine
    aResult[4] = 0; // aLeading

    // Repeat until the entire content of the paragraph is evaluated
    for ( ; aChars[ aInx ]; aInx++ )
    {
      var attr        = aAttrs[ aInx ];
      var code        = aChars[ aInx ];
      var type        = attr & 0xF;
      var curWidth    = 0;
      var curWidthMax = 0;
      var curHeight   = 0;
      var curSpace    = 0;
      var curBaseLine = 0;
      var curDescent  = 0;
      var curLeading  = 0;
      var noOfChars   = 0;

      // Track the font
      if ((( type === 1 ) || ( type === 2 )) && ((( attr >> 12 ) & 0xFF ) !== fontNo ))
      {
        fontNo = ( attr >> 12 ) & 0xFF;
        font   = null;

        // Select the front from the attr set
        if ( aAttrSet && ( fontNo >= 0 ) && ( fontNo < aAttrSet.NoOfFonts ))
          font = aAttrSet.Fonts[ fontNo ];
          
        // If the desired font is not available in the AttrSet -> Use the
        // default font #0
        if ( !font )
        {
          fontNo = 0;
          font   = ( aAttrSet && ( aAttrSet.NoOfFonts > 0 ))? aAttrSet.Fonts[0] : null;
        }

        // No kerning between glyphs from different fonts
        prevLevel   = -1;
        prevGlyphId = 0;

        // Reset the shaper context at span borders
        aThis._ResetShaper( context );
      }

      // The <NewLine> affects the height of the line
      if (( code === 0xA ) && font )
      {
        aResult[3] = Math.max( aResult[3], font.Ascent  );
        aResult[4] = Math.max( aResult[4], font.Leading );
        descent    = Math.max( descent,    font.Descent );
      }

      // <NewLine> sign terminates the line
      if ( code === 0xA )
        break;

      // The actual entity is an image
      if (( type >= 3 ) && ( type <= 5 ))
      {
        var bmpNo = ( attr >> 12 ) & 0xFF;
        var bmp   = null;

        // Select the bitmap from the attr set
        if ( aAttrSet && ( bmpNo >= 0 ) && ( bmpNo < aAttrSet.NoOfBitmaps ))
          bmp = aAttrSet.Bitmaps[ bmpNo ];

        // If the desired bitmap is not available in the AttrSet -> Use the
        // default bitmap #0
        if ( !bmp && aAttrSet && ( aAttrSet.NoOfBitmaps > 0 ))
          bmp = aAttrSet.Bitmaps[0];

        // Get the size of the bitmap
        if ( bmp )
        {
          curWidth    = bmp.FrameSize[0];
          curHeight   = bmp.FrameSize[1];
          curWidthMax = curWidth;
        }

        // No kerning between images and glyphs
        prevLevel   = -1;
        prevGlyphId = 0;

        // Reset the shaper context at borders between images and text
        aThis._ResetShaper( context );
      }

      // ... or it is an ordinary glyph or special character
      else
      {
        var glyph;

        // Is this a line wrap candidate! Don't wrap at the begin of a line!
        if (( code === 0x200B ) && ( !aResult[0] || wrapActive ))
          code = 0xFEFF;

        // The soft-hyphen lies at the begin of a text row or it follows another
        // wrap candidate - ignore this hyphen
        if (( code === 0xAD ) && ( !aResult[0] || wrapActive ))
          code = 0xFEFF;

        // Blank at the begin of the row can't cause line wrap
        if (( code === 0x20 ) && !aResult[0])
          code = 0xA0;

        // Is this a line wrap candidate? 
        if (( code === 0x20 ) || ( code === 0x200B ))
        {
          // Forget the preceding wrap candidate if it was soft-hyphen
          if ( wrapInx && ( aChars[ wrapInx ] === 0xAD ))
            aChars[ wrapInx ] = 0xFEFF;

          wrapInx      = aInx;
          wrapWidth    = aResult[0];
          wrapHeight   = aResult[1];
          wrapSpace    = aResult[2];
          wrapBaseLine = aResult[3];
          wrapLeading  = aResult[4];
          wrapDescent  = descent;
          wrapActive   = true;
        }

        // Is this a soft-hyphen? This sign does not appear on the screen unless
        // line wrap is applied at its position -> then a '-' minus sign is 
        // shown.
        if ( code === 0xAD )
        {
          var glyphId = font? aThis._GetGlyphId( font, code ) : 0;

          // If applied - the '-' minus sign should be displayed ... Get the size
          // of the '-' minus sign ... 
          if ( glyphId && aResult[0] && ( glyph = aThis._GetGlyphMetrics( font, glyphId )))
          {
            var level = aBidi? aThis._BidiGetCharLevel( aBidi, aInx ) : 0;

            curWidth    = glyph.Advance;
            curBaseLine = font.Ascent;
            curDescent  = font.Descent;
            curLeading  = font.Leading;

            // Does the actual character and the preceding one belong to the same
            // Bidi level run? Then calculate the kerning between them. Otherwise,
            // the glyphs will be separated after reordering of the text row, so no
            // kerning is applicable on them 
            if ( level === prevLevel )
              if ( level & 1 )
                curWidth += aThis._GetKerning( font, glyphId, prevGlyphId );
              else
                curWidth += aThis._GetKerning( font, prevGlyphId, glyphId );
          }

          // ... and check, whether there is space in the current line for this '-' 
          // sign
          if ((( aResult[0] + curWidth ) <= aMaxWidth ) && curWidth )
          {
            // Forget the preceding wrap candidate if it was soft-hyphen
            if ( wrapInx && ( aChars[ wrapInx ] === 0xAD ))
              aChars[ wrapInx ] = 0xFEFF;

            wrapInx      = aInx;
            wrapWidth    = aResult[0] + curWidth;
            wrapBaseLine = Math.max( aResult[3], curBaseLine );
            wrapLeading  = Math.max( aResult[4], curLeading );
            wrapDescent  = Math.max( descent,    curDescent );
            wrapSpace    = aResult[2];
            wrapActive   = true;
          }

          // As described above, soft-hyphen is ignored.
          continue;
        }

        // Replace all BIDI control character codes by zero-width-non-break-space
        if (( code === 0x061C ) ||
           (( code >=  0x200B ) && ( code <= 0x200F )) ||
           (( code >=  0x202A ) && ( code <= 0x202E )) ||
           (( code >=  0x2066 ) && ( code <= 0x2069 )))
          code = 0xFEFF;

        // The preceding steps have eventually eliminated the glyph (it is zero-
        // width sign now). Zero-width signs should not have impact on the text
        // row dimension 
        if ( code === 0xFEFF )
        {
          aChars[ aInx ] = 0xFEFF;
          continue;
        }

        // A visible character has been found - end the wrap mode
        if ( wrapInx !== aInx )
          wrapActive = false;

        // Regular character. Starting with this character try to shape the next
        // cluster. Consider all resulting glyphs as one 'virtual' sign. Calculate
        // the metric of this 'virtual' glyph - Remember the size of the glyph for
        // further processing
        if ( font )
        {
          var glyphIds     = [];
          var level        = 0;
          var maxNoOfChars = 1;
          var chWidth      = 0;
          var chWidthMax   = 0;
          var prevLevel2   = prevLevel;
          var prevGlyphId2 = prevGlyphId;
          var i            = aInx + 1;

          // Estimate the maximum number of characters to consider as belonging
          // to the same cluster. For optimization purpose we limit to max. 8
          // characters.
          while ( aChars[i] && ( aAttrs[i] === attr ) && ( maxNoOfChars < 8 ))
          {
            maxNoOfChars++;
            i++;
          }

          // In case of BIDI text limit all characters belonging to a cluster to
          // the same direction level. Borders between adjacent levels separate
          // clusters.
          if ( aBidi )
          {
            level = aThis._BidiGetCharLevel( aBidi, aInx );

            // Determine the sequence of characters belonging to the same level.
            for ( i = 1; i < maxNoOfChars; i++ )
              if ( level != aThis._BidiGetCharLevel( aBidi, aInx + i ))
                 maxNoOfChars = i;
          }

          // Shape the next text cluster.
          aThis._SaveShaper( context );
          noOfChars = aThis._ShapeCluster( font, charsStr, aInx, maxNoOfChars, 
                                           level & 1, glyphIds, context );

          // No matching glyph for the given cluster. Use the '.notdef' glyph.
          if ( !noOfChars )
          {
            glyphIds[0]  = 1;
            glyphIds[1]  = 0;
            noOfChars    = 1;
          }

          // Process the glyphs. Calculate the advance sum for all glyphs.
          for ( i = 0; i < glyphIds[0]; i++ )
          {
            // Get the glyph for the given glyph id.
            var glyph = aThis._GetGlyphMetrics( font, glyphIds[ i + 1 ]);

            // Get the metric of the glyph in question. If the operation fails,
            // ignore the glyph
            if ( glyph )
            {
              chWidth += glyph.Advance;

              // Does the actual glyph and the preceding one belong to the same
              // Bidi level run? Then calculate the kerning between them. Otherwise,
              // the glyphs will be separated after reordering of the text row, so no
              // kerning is applicable on them
              if ( level === prevLevel )
              {
                if ( level & 1 )
                  chWidth += aThis._GetKerning( font, glyphIds[ i + 1 ], prevGlyphId );
                else
                  chWidth += aThis._GetKerning( font, prevGlyphId, glyphIds[ i + 1 ]);
              }
            
              // Track the preceding glyph
              prevGlyphId = glyphIds[ i + 1 ];
              prevLevel   = level;
            }
          }

          // The resulting, max. width of the cluster
          chWidthMax = chWidth;

          // In particular cases, adjacent clusters may produce different glyphs. 
          // Calculate the width of the cluster when it is isolated. Track the max.
          // cluster width. For optimization purpose to avoid the expensive cluster
          // shaping, we check this condition only if there is few space free in
          // the actual text row only.
          if (( noOfChars < maxNoOfChars ) && 
             (( aMaxWidth - aResult[0] ) < ( 3 * chWidthMax )))
          {
            var chWidth2 = 0;

            // Shape the next text cluster. Please note: do this relative to
            // the preceding shaper state. Then restore again the latest 
            // state.
            aThis._RestoreShaper( context );
            aThis._ShapeCluster( font, charsStr, aInx, noOfChars, level & 1, 
                                 glyphIds, context );
            aThis._RestoreShaper( context );

            // Process the glyphs. Calculate the advance sum for all glyphs.
            for ( i = 0; i < glyphIds[0]; i++ )
            {
              // Get the glyph for the given glyph id.
              var glyph = aThis._GetGlyphMetrics( font, glyphIds[ i + 1 ]);

              // Get the metric of the glyph in question. If the operation fails,
              // ignore the glyph
              if ( glyph )
              {
                chWidth2 += glyph.Advance;

                // Does the actual glyph and the preceding one belong to the same
                // Bidi level run? Then calculate the kerning between them. Otherwise,
                // the glyphs will be separated after reordering of the text row, so no
                // kerning is applicable on them
                if ( level === prevLevel2 )
                {
                  if ( level & 1 )
                    chWidth2 += aThis._GetKerning( font, glyphIds[ i + 1 ], prevGlyphId2 );
                  else
                    chWidth2 += aThis._GetKerning( font, prevGlyphId2, glyphIds[ i + 1 ]);
                }
            
                // Track the preceding glyph
                prevGlyphId2 = glyphIds[ i + 1 ];
                prevLevel2   = level;
              }
            }

            // Track the max. width of the cluster
            if ( chWidth2 > chWidthMax )
              chWidthMax = chWidth2;
          }

          curWidth    = chWidth;
          curWidthMax = chWidthMax;
          curBaseLine = font.Ascent;
          curDescent  = font.Descent;
          curLeading  = font.Leading;

          // Count the width of all blank signs - for justified text only 
          if (( code === 0x20 ) || ( code === 0xA0 ))
            curSpace = curWidth;
        }
      }

      // Test, whether the sign or the image can be displayed within the line.
      // To avoid endless line wrapping, the first sign is always taken over!
      if ((( curWidthMax + aResult[0]) <= aMaxWidth ) || !aResult[0])
      {
        aResult[0] += curWidth;
        aResult[1]  = Math.max( aResult[1], curHeight );
        aResult[3]  = Math.max( aResult[3], curBaseLine );
        aResult[4]  = Math.max( aResult[4], curLeading );
        descent     = Math.max( descent,    curDescent );
        aResult[2] += curSpace;
        aInx       += noOfChars - 1;
        continue;
      }

      // There is not enought space for the sign - skip back to the last wrap
      // canditate - if any!
      if ( wrapInx )
      {
        aResult[0] = wrapWidth;
        aResult[1] = wrapHeight;
        aResult[2] = wrapSpace;
        aResult[3] = wrapBaseLine;
        aResult[4] = wrapLeading;
        descent    = wrapDescent;
        aInx       = wrapInx + 1;

        // Breaking a line at blank? Replace it by a zero-width sign
        if ( aChars[ wrapInx ] === 0x20 )
          aChars[ wrapInx ] = 0xFEFF;

        // Any zero-width glyphs following the wrap position? Then append them to the actual row.
        while (((( type = ( aAttrs[aInx] & 0xF )) === 1 ) || ( type === 2 )) &&
               ((( code = aChars[aInx]) === 0xFEFF ) || ( code === 0x200B ) || ( code === 0xAD )))
          aInx++;

        // The wrap position is processed
        wrapInx = 0;
      }

      // The line is completed
      break;
    }

    // Forget the preceding wrap candidate if it was soft-hyphen
    if ( wrapInx && ( aChars[ wrapInx ] === 0xAD ))
      aChars[ wrapInx ] = 0xFEFF;

    // Adapt the height of the text line to the heighest font/image. Adjust the
    // baseline to the center of the line
    aResult[1]  = Math.max( aResult[1], aResult[3] + descent );
    aResult[3] += ( aResult[1] - aResult[3] - descent ) >> 1;

    return aInx - startInx;
  }

  // The function converts the given string into a sequence of drawing statements
  // and stores them into aDest buffer.
  function Paragraph( aThis, aAttrSet, aString, aStringInx, aWidth, aAlignH,
    aEnableBidiText, aDest, aHeight, aLastLeading, aIsRTL, aLinkCount )
  {
    var endInx    = FindEndOfParagraph( aString, aStringInx );
    var font      = ( aAttrSet && ( aAttrSet.NoOfFonts > 0 ))? aAttrSet.Fonts[0] : null;
    var len       = endInx - aStringInx + 1;
    var chars     = new Uint16Array( len );
    var attrs     = new Uint32Array( len );
    var links     = new Uint16Array( len );
    var bidi      = null;
    var isRTL     = false;
    var inx       = 0;
    var fontNo    = 0;
    var colorNo   = 0;
    var ulOn      = 0;
    var linkId    = 0;
    var linkCount = [ 0 ];
    var line      = [ 0, 0, 0, 0, 0 ]; /* lineWidth, lineHeight, lineSpace, 
                                          lineBase, lineLeading; */

    // The entire paragraph content is evaluated now. For every entity create
    // an entry in chars/attrs arrays containing information about this entry
    // (glyph, image, ...) and its atributes. The resulting 'attributed string'
    // is terminated with 0 (zero) sign.
    len = ParseParagraph( aString, aStringInx, endInx, chars, attrs, links, 
                          linkCount );

    // If the text should be processed by the Bidi algorithm - create a new
    // Bidi context large enough for all characters from the paragraph
    if ( len && aEnableBidiText )
      bidi = aThis._CreateBidi( len );

    // Load the Bidi context with the characters. If the Bidi decides that there
    // is nothing to do with the text - release the context again
    if ( bidi && !aThis._BidiInit( bidi, chars, 0, len, -1 ))
    {
      aThis._FreeBidi( bidi );
      bidi = null;
    }

    // Apply the Bidi algorithm on the text
    if ( bidi )
    {
      aThis._BidiProcess     ( bidi, chars, 0 );
      aThis._BidiMirrorGlyphs( bidi, chars, 0 );
      aThis._BidiApplyShaping( bidi, chars, 0, attrs, aAttrSet.Fonts );

      // Estimate the base direction of this paragraph
      isRTL = aThis._BidiIsRTL( bidi );

      // Track the base direction of the first processed paragraph
      if ( aIsRTL[0] < 0 )
        aIsRTL[0] = isRTL? 1 : 0;
    }

    aHeight[0]      = 0;
    aLastLeading[0] = 0;

    // Repeat until the entire paragraph's content is evaluated
    while ( inx < len )
    {
      var lineAlign   = aAlignH;
      var x           = 0;
      var lnkRegX     = 0;
      var spanInx     = 0;
      var spanSpace   = 0;
      var spanErr     = 0;
      var prevGlyphId = 0;
      var context     = aThis._InitShaper();

      // First step: Wrap the next text line. Get its width, height, etc.
      // How many entities from 'chars' 'attrs' do belong to this row?
      var count = ProcessAttrTextRow( aThis, aAttrSet, chars, attrs, inx, aWidth, bidi, line );

      // Complete the Bidi-Algorithm on the just estimated row? 
      if ( bidi )
      {
        aThis._BidiCompleteRow ( bidi, inx, inx + count );
        aThis._BidiReorderArray( bidi, inx, inx + count, chars, inx );
        aThis._BidiReorderArray( bidi, inx, inx + count, attrs, inx );
        aThis._BidiReorderArray( bidi, inx, inx + count, links, inx );
      }

      // Should the alignment of the paragraph be derived from its base direction?
      if ( lineAlign === 0x61 ) lineAlign = isRTL? 0x72 : 0x6C;
      if ( lineAlign === 0x41 ) lineAlign = isRTL? 0x52 : 0x4C;

      // Is this the last row of a justified paragraph? Or the row does not contain
      // any space characters? Then don't stretch it. 
      if (( lineAlign === 0x4C ) || ( lineAlign === 0x52 ) || ( lineAlign === 0x43 ))
        if (( !chars[ inx + count ] || ( chars[ inx + count ] === 0xA ) || !line[2]))
        {
          lineAlign += 0x20;
          line[2]    = 0;
        }

        // If the row should be stretched - the right/left/center alignment does
        // not matter. Assume left - justified alignment
        else
          lineAlign = 0x4C;

      // Adjust the horizontal offset for right or center aligned text line
      if      ( lineAlign === 0x72 ) x +=   aWidth - line[0];
      else if ( lineAlign === 0x63 ) x += ( aWidth - line[0]) >> 1;

      // The copy of 'chars' array as JavaScript 'String'
      var charsStr = String.fromCharCode.apply( null, chars );

      // Second step: generate drawing statements for the text line
      for ( ; count >= 0; count--, inx++ )
      {
        var code       = count? chars[ inx ] : 0;
        var attr       = count? attrs[ inx ] : 0;
        var type       = attr & 0xF;
        var newColorNo = colorNo;
        var newFontNo  = fontNo;
        var newUlOn    = ulOn;
        var newLinkId  = count? links[ inx ] : 0;
        var glyph;

        // Track the currently used color
        if (( type >= 1 ) && ( type <= 5 ))
          newColorNo = ( attr >> 4 ) & 0xFF;

        // Track the currently used font
        if (( type === 1 ) || ( type === 2 ))
          newFontNo = ( attr >> 12 ) & 0xFF;

        // Track the currently used underlined mode
        if ( type === 1 ) newUlOn = 0;
        if ( type === 2 ) newUlOn = 1;

        // Terminating the latest span.
        if ( spanInx && ((( type !== 1 ) && ( type !== 2 )) ||
           ( colorNo !== newColorNo ) || ( fontNo !== newFontNo ) || 
           ( ulOn !== newUlOn ) || ( linkId !== newLinkId )))
        {
          // Justified text lines are stretched in order to fill the entire
          // paragraph's width. Calculate the width of the stretched text
          if ( spanSpace && ( lineAlign === 0x4C ))
          {
            var tmp1 = ( spanSpace * ( aWidth - line[0])) + spanErr;
            var tmp2 = ( tmp1 / line[2]) | 0;
            spanErr  = tmp1 - ( tmp2 * line[2]);
            x       += tmp2;

            // Change to 'justified' drawing statement and remember the desired
            // width of the stretched text
            aDest[ spanInx ] = 0x4A;
            aDest.push( x - aDest[ spanInx + 1 ]);
          }

          // If the text is underlined - Draw a thin rectangle below the base 
          // line. The thickness of the underline depends on the height of the '-'
          // minus sign
          if ( ulOn )
          {
            var glyphId = font? aThis._GetGlyphId( font, 0x2D ) : 0;

            // The thickness of the underline depends on the height of the '-'
            // minus sign
            if ( glyphId && (( glyph = aThis._GetGlyphMetrics( font, glyphId )) != null ))
              ulOn = glyph.Height;

            // The underline is at least 1 pixel thick
            if ( ulOn <= 0 )
              ulOn = 1;

            aDest.push( 0x52, // 'R'
              aDest[ spanInx + 1 ],
              aHeight[0] + aLastLeading[0] + line[3] + ulOn,
              x,
              aHeight[0] + aLastLeading[0] + line[3] + ( ulOn * 2 ),
              colorNo
            );
          }

          // The drawing statement is terminated now
          spanInx   = 0;
          spanSpace = 0;
        }

        // New font wants to be selected
        if ( fontNo !== newFontNo )
        {
          font = null;

          // Select the front from the attr set
          if ( aAttrSet && ( newFontNo >= 0 ) && ( newFontNo < aAttrSet.NoOfFonts ))
            font = aAttrSet.Fonts[ newFontNo ];
          
          // If the desired font is not available in the AttrSet -> Use the
          // default font #0
          if ( !font )
            font = ( aAttrSet && ( aAttrSet.NoOfFonts > 0 ))? aAttrSet.Fonts[0] : null;
        }

        // Terminating a span enclosed within a link? */
        if ( linkId && ( linkId !== newLinkId ))
          aDest.push( 0x41, // 'A'
            linkId + aLinkCount[0],
            lnkRegX,  // Left upper corner
            aHeight[0] + aLastLeading[0],
            x,        // Right bottom corner
            aHeight[0] + aLastLeading[0] + line[1],
            line[3]
          );

        // Track the origin of the span enclosed in the link
        if ( linkId !== newLinkId )
          lnkRegX = x;

        // No kerning between glyphs belonging to different fonts 
        if ( fontNo !== newFontNo )
        {
          prevGlyphId = 0;

          // Reset the shaper at span borders
          aThis._ResetShaper( context );
        }

        // The parameters valid from now
        colorNo = newColorNo;
        fontNo  = newFontNo;
        ulOn    = newUlOn;
        linkId  = newLinkId;

        // Actual entity represents an image
        if (( type >= 3 ) && ( type <= 5 ))
        {
          var bmpNo   = ( attr >> 12 ) & 0xFF;
          var frameNo = ( attr >> 20 ) & 0xFFF;
          var bmp     = null;

          // Select the bitmap from the attr set
          if ( aAttrSet && ( bmpNo >= 0 ) && ( bmpNo < aAttrSet.NoOfBitmaps ))
            bmp = aAttrSet.Bitmaps[ bmpNo ];

          // If the desired bitmap is not available in the AttrSet -> Use the
          // default bitmap #0
          if ( !bmp && aAttrSet && ( aAttrSet.NoOfBitmaps > 0 ))
            bmp = aAttrSet.Bitmaps[0];

          // Don't display invalid frames
          if ( bmp && ( frameNo >= bmp.NoOfFrames ))
            frameNo = 0;

          // Store a single drawing image statement
          if ( bmp )
          {
            var ofs = line[1] - bmp.FrameSize[1];

            // calculate the vertical offset of the image - according to its
            // alignment
            switch ( type )
            {
              case 3 : ofs >>= 1; break;
              case 5 : ofs   = 0; break;
            }

            // Prepare the statement
            aDest.push( 0x49, // 'I'
              x,
              aHeight[0] + aLastLeading[0] + ofs,
              bmpNo,
              frameNo,
              colorNo
            );

            // Get the position of the next sign/image
            x += bmp.FrameSize[0];
          }

          // No kerning between image and glyph
          prevGlyphId = 0;

          // Reset the shaper at borders between images and text
          aThis._ResetShaper( context );
        }

        // Regular character. Starting with this character try to shape the next
        // cluster. Consider all resulting glyphs as one 'virtual' sign.
        // Calculate the metric of this 'virtual' glyph - Remember the size of
        // the glyph for further processing.
        if ((( type === 1 ) || ( type === 2 )) && font && ( code !== 0xFEFF ))
        {
          var glyphIds     = [];
          var maxNoOfChars = 1;
          var i            = inx + 1;
          var first        = true;
          var attr         = attrs[ inx ];
          var noOfChars    = 0;
          var chWidth      = 0;
          var kern         = 0;
          var j;

          // Estimate the maximum number of characters to consider as belonging
          // to the same cluster. For optimization purpose we limit to max. 8
          // characters.
          while ( chars[i] && ( attrs[i] == attr ) && 
                ( maxNoOfChars < 8 ) && ( maxNoOfChars < count ))
          {
            maxNoOfChars++;
            i++;
          }

          // Shape the next text cluster.
          noOfChars = aThis._ShapeCluster( font, charsStr, inx, maxNoOfChars, 
                                           false, glyphIds, context );

          // No matching glyph for the given cluster. Use the '.notdef' glyph.
          if ( !noOfChars )
          {
            glyphIds[0]  = 1;
            glyphIds[1]  = 0;
            noOfChars    = 1;
          }

          // Process the glyphs. Calculate the advance sum for all glyphs.
          for ( i = 0; i < glyphIds[0]; i++ )
          {
            // Get the glyph for the given glyph id.
            var glyph = aThis._GetGlyphMetrics( font, glyphIds[ i + 1 ]);

            // Get the metric of the glyph in question. If the operation fails,
            // ignore the glyph
            if ( glyph )
            {
              chWidth += glyph.Advance;

              // Accumulate the kerning between the glyphs. For the first glyph
              // store the kerning to the preceding glyph separately. It will 
              // be used when initializing a new span.
              if ( first )
              {
                kern  = aThis._GetKerning( font, prevGlyphId, glyphIds[1]);
                first = false;
              }
              else
                chWidth += aThis._GetKerning( font, prevGlyphId, glyphIds[ i + 1 ]);

              // Track the preceding glyph
              prevGlyphId = glyphIds[ i + 1 ];
            }
          }

          // Ensure, there is an opened text drawing statement to take the
          // sign
          if ( !spanInx && !first )
          {
            // Remember the start position of the drawings statement
            spanInx = aDest.length;

            // Prepare the horizontal origin of the drawing statement.
            aDest.push( 0x54 /* 'T' */,
              x + kern,
              aHeight[0] + aLastLeading[0] + line[3],
              "",
              fontNo,
              colorNo
            );
          }

          // Take over the character codes belonging to the actually processed
          // cluster
          for ( j = 0; ( j < noOfChars ) && spanInx; j++ )
            aDest[ spanInx + 3 ] += String.fromCharCode( chars[ inx + j ]);

          // Position for the next character to process. Note: 'inx' increases
          // in the for loop. Thus 1 less.
          x     += chWidth   + kern;
          inx   += noOfChars - 1;
          count -= noOfChars - 1;

          // Accumulate the width of all blanks within the current span
          if (( code === 0x20 ) || ( code === 0xA0 ))
            spanSpace += glyph.Advance;
        }
      }

      // 'inx' is one iteration too advanced. Restore it. 
      if ( chars[ inx - 1 ] !== 0xA )
        inx--;
    
      // Add the text line to the paragraph - the paragraph becomes heigher
      aHeight[0]      += line[1] + aLastLeading[0];
      aLastLeading[0]  = line[4];
    }

    if ( bidi )
      aThis._FreeBidi( bidi );

    // Accumulate the links found in this paragraph */
    aLinkCount[0] += linkCount[0];

    return endInx;
  }

  // The following function parses the string aString for {lnk:... attributes
  // and stores for every found valid attribute an entry in aLinks array.
  function CollectLinks( aString, aStringInx, aLinks )
  {
    var ch;

    // Repeat until the entire content of the string has been processed
    while (( ch = aString.charCodeAt( aStringInx )))
    {
      // Is this an attribute?
      if (( ch === 0x7B ) && IsKeyword( aString, aStringInx, "{lnk:" ))
      {
        var startInx = aStringInx += 5;

        // Skip over the link name
        while ((( ch = aString.charCodeAt( aStringInx ))) && ( ch !== 0x7D ) && 
                ( ch !== 0x7B ))
          aStringInx++;

        aLinks.push({
          EndPtr      : 0,
          StartPtr    : 0xFFFFFFFE,
          NoOfRegions : 0,
          X           : 0,
          Y           : 0,
          Name        : aString.slice( startInx, aStringInx )
        });

        continue;
      }

      // Starting an escape sequence?
      if (( ch === 0x25 ) && (( aStringInx + 1 ) < aString.length ))
        aStringInx++;

      aStringInx++;
    }
  }

  // This function searches recursively the memory area aBuffer for link region
  // statements and if found updates the corresponding link entries in aLinks.
  function CollectLinkRegions( aLinks, aOfsX, aOfsY, aBuffer, aPtr, aEnd )
  {
    // Repeat until all drawing statements are evaluated
    while ( aPtr < aEnd )
    {
      // Search for links region only - skip over all other statements
      switch ( aBuffer[ aPtr ])
      {
        // The content of a group is processed recursively 
        case 0x47 : /* 'G' */
        {
          var count = aBuffer[ aPtr + 5 ];
          var x     = aBuffer[ aPtr + 1 ] + aBuffer[ aPtr + 6 ] + aOfsX;
          var y     = aBuffer[ aPtr + 2 ] + aOfsY;

          // This recursion is important for the X,Y offset calculation
          CollectLinkRegions( aLinks, x, y, aBuffer, aPtr + 7, aPtr + count );
          aPtr += count;
        } break;

        // Skip over text/image/rectangle ...
        case 0x54 /* 'T' */ : aPtr += 6; break;
        case 0x4A /* 'J' */ : aPtr += 7; break;
        case 0x49 /* 'I' */ : aPtr += 6; break;
        case 0x52 /* 'R' */ : aPtr += 6; break;

        // Link region found - update the corresponding link entry
        case 0x41 : /* 'A' */
        {
          var link = aLinks[ aBuffer[ aPtr + 1 ] - 1 ];

          link.StartPtr = Math.min( link.StartPtr, aPtr );
          link.EndPtr   = Math.max( link.EndPtr,   aPtr + 7 );
          link.X        = aOfsX;
          link.Y        = aOfsY;
          link.NoOfRegions++;

          // Skip over the region 
          aPtr += 7;
        } break;
      }
    }
  }

  // This function searches in the drawing statements for the link region 
  // statement with the number aRegionNo
  function SkipToRegion( aLinkNo, aRegionNo, aBuffer, aStartPtr, aEndPtr )
  {
    var ptr = aStartPtr;

    // Repeat until the desired region is found or the end of attributed string
    // is reached
    while ( ptr < aEndPtr )
    {
      // Search for regions only - skip over all other statements 
      switch ( aBuffer[ ptr ])
      {
        case 0x54 /* 'T' */ : ptr += 6; break;
        case 0x4A /* 'J' */ : ptr += 7; break;
        case 0x49 /* 'I' */ : ptr += 6; break;
        case 0x52 /* 'R' */ : ptr += 6; break;

        // Region statament found - is this the desired region?
        case 0x41 /* 'A' */ :
        {
          var linkId = aBuffer[ ptr + 1 ];

          if (( linkId === aLinkNo ) && !aRegionNo )
            return ptr;

          if ( linkId === aLinkNo )
            aRegionNo--;

          // No - then search for the next region
          ptr += 7;
        }
        break;

        // End of paragraph reached - a link may not cross over the paragraph
        default :
          ptr = aEndPtr;
      }
    }

    // Not found
    return -1;
  }

  // This function executes the drawing statements from aPtr memory area and 
  // draws the content of the attributed string into the aDst bitmap at the 
  //position aOffset.
  function DrawAttrText( aThis, aDst, aDstFrameNo, aClipRect, aDstPos, aOfsX,
    aOfsY, aAttrSet, aBuffer, aPtr, aEnd, aBlend, aOpacity )
  {
    // The function GetOpacityFromGradient() has the job to interpolate the 
    // opacity value for the given position within a color gradient and to 
    // modulate the given aColor vaue with the calculated opacity.
    function OpacityFromGradient( aGradient, aX, aY, aColor )
    {
      var al = aGradient.A0;
      var ar = aGradient.A2;

      // Limit the coordinates to the gradient area
      if ( aX < 0 ) aX = 0;
      if ( aY < 0 ) aY = 0;
      if ( aX > aGradient.Width  ) aX = aGradient.Width;
      if ( aY > aGradient.Height ) aY = aGradient.Height;

      // Interpolate the gradient values vertically
      if ( aGradient.IsVertical && aY )
        al += aY * aGradient.A1;

      // Avoid unnecessary calculations for vertical only gradients
      if ( aGradient.IsVertical && aGradient.IsHorizontal && aY )
        ar += aY * aGradient.A3;

      // Interpolate the gradient values horizontally
      if ( aGradient.IsHorizontal && aX )
        al += ( ar - al ) * aGradient.InvWidth * aX;

      if ( al >= 255 ) return aColor;
      if ( al <= 0   ) return aColor & 0xFFFFFF;

      // Return the modulated color value
      var clr2 = (((( aColor >> 24 ) & 0xFF ) * al / 255 ) << 24 ) |
                    ( aColor & 0xFFFFFF );

      return clr2;
    }

    function DrawBackground( aThis, aDst, aDstFrameNo, aClipRect, aDstPos, aOfsX,
      aOfsY, aAttrSet, aBuffer, aPtr, aEnd, aBlend, aOpacity )
    {
      // Repeat until all drawing statements are evaluated.
      while ( aPtr < aEnd )
      {
        var ch = aBuffer[ aPtr ];

        // Is this a 'rectangle' or 'group' drawing statement?
        if (( ch === 0x47 /* 'G' */ ) || ( ch === 0x52 /* 'R' */ ))
        {
          // Get the clipping area of the drawing statement
          var r    = [ aBuffer[ aPtr + 1 ] + aOfsX, aBuffer[ aPtr + 2 ] + aOfsY,
                       aBuffer[ aPtr + 3 ] + aOfsX, aBuffer[ aPtr + 4 ] + aOfsY ];

          // Does the statement lie within the clipping area?
          switch ( ch )
          {
            // Draw a nested group of drawing statements recursively
            case 0x47 /* 'G' */ :
            {
              var count = aBuffer[ aPtr + 5 ];

              if (( aClipRect[0] < aClipRect[2]) && ( aClipRect[1] < aClipRect[3]))
                DrawBackground( aThis, aDst, aDstFrameNo, aClipRect, aDstPos, r[0] + 
                  aBuffer[ aPtr + 6 ], r[1], aAttrSet, aBuffer, aPtr + 7,
                  aPtr + count, aBlend, aOpacity );

              aPtr += count;
            } break;

            // Draw filled rectangle
            case 0x52 /* 'R' */ :
            {
              var color  = aBuffer[ aPtr + 5 ];
              var x1     = r[0] - aDstPos[0];
              var x2     = r[2] - aDstPos[0];
              var y1     = r[1] - aDstPos[1];
              var y2     = r[3] - aDstPos[1];
            
              if (( color >= 0 ) && ( color < aAttrSet.NoOfColors ))
                color = aAttrSet.Colors[ color ];
              else
                color = 0;

              var clrTL = OpacityFromGradient( aOpacity, x1, y1, color );
              var clrTR = OpacityFromGradient( aOpacity, x2, y1, color );
              var clrBR = OpacityFromGradient( aOpacity, x2, y2, color );
              var clrBL = OpacityFromGradient( aOpacity, x1, y2, color );

              aThis._FillRectangle( aDst,aDstFrameNo, aClipRect, r, clrTL, clrTR, clrBR,
                clrBL, aBlend );

              aPtr += 6;
            } break;
          }
        }

        // Otherwise this is an ordinary drawing statement.
        else if (( ch === 0x54 /* 'T' */ ) || ( ch === 0x49 /* 'I' */ ))
          aPtr += 6;

        else if ( ch === 0x4A /* 'J' */ ) aPtr += 7;
        else if ( ch === 0x41 /* 'A' */ ) aPtr += 7;
      }
    }

    function DrawContent( aThis, aDst, aDstFrameNo, aClipRect, aDstPos, aOfsX,
      aOfsY, aAttrSet, aBuffer, aPtr, aEnd, aBlend, aOpacity )
    {
      // Repeat until all drawing statements are evaluated.
      while ( aPtr < aEnd )
      {
        var ch = aBuffer[ aPtr ];

        // Is this a 'rectangle' or 'group' drawing statement?
        if (( ch === 0x47 /* 'G' */ ) || ( ch === 0x52 /* 'R' */ ))
        {
          // Get the clipping area of the drawing statement
          var r    = [ aBuffer[ aPtr + 1 ] + aOfsX, aBuffer[ aPtr + 2 ] + aOfsY,
                       aBuffer[ aPtr + 3 ] + aOfsX, aBuffer[ aPtr + 4 ] + aOfsY ];

          // Does the statement lie within the clipping area?
          switch ( ch )
          {
            // Draw a nested group of drawing statements recursively
            case 0x47 /* 'G' */ :
            {
              var count = aBuffer[ aPtr + 5 ];

              if (( aClipRect[0] < aClipRect[2]) && ( aClipRect[1] < aClipRect[3]))
                DrawContent( aThis, aDst, aDstFrameNo, aClipRect, aDstPos, r[0] + 
                  aBuffer[ aPtr + 6 ], r[1], aAttrSet, aBuffer, aPtr + 7,
                  aPtr + count, aBlend, aOpacity );

              aPtr += count;
            } break;

            // Draw filled rectangle
            case 0x52 /* 'R' */ :
            {
              aPtr += 6;
            } break;
          }
        }

        // Otherwise this is an ordinary drawing statement.
        else if (( ch === 0x54 /* 'T' */ ) || ( ch === 0x4A /* 'J' */ ) ||
                 ( ch === 0x49 /* 'I' */ ))
        {
          // Get the origin position for the following drawing statement
          var pos = [ aBuffer[ aPtr + 1 ] + aOfsX, aBuffer[ aPtr + 2 ] + aOfsY ];

          // What kind of drawing should be done?
          switch ( ch )
          {
            /* Draw left aligned text */
            case 0x54 /* 'T' */ :
            {
              var font  = aBuffer[ aPtr + 4 ];
              var color = aBuffer[ aPtr + 5 ];
              var x1    = aClipRect[0] - aDstPos[0];
              var y1    = aClipRect[1] - aDstPos[1];
              var x2    = aClipRect[2] - aDstPos[0];
              var y2    = aClipRect[3] - aDstPos[1];

              if (( color >= 0 ) && ( color < aAttrSet.NoOfColors ))
                color = aAttrSet.Colors[ color ];
              else
                color = 0;

              if (( font >= 0 ) && ( font < aAttrSet.NoOfFonts ))
                font = aAttrSet.Fonts[ font ];
              else
                font = null;

              // If the desired font is not available in the AttrSet -> Use the
              // default font #0
              if ( !font && aAttrSet.NoOfFonts )
                font = aAttrSet.Fonts[ 0 ];

              // Text drawing position relative to the origin of the destination 
              // area
              pos[0] = aClipRect[0] - pos[0];
              pos[1] = aClipRect[1] - pos[1];

              if ( font )
              {
                var clrTL = OpacityFromGradient( aOpacity, x1, y1, color );
                var clrTR = OpacityFromGradient( aOpacity, x2, y1, color );
                var clrBR = OpacityFromGradient( aOpacity, x2, y2, color );
                var clrBL = OpacityFromGradient( aOpacity, x1, y2, color );

                aThis._DrawText( aDst, font, aBuffer[ aPtr + 3 ], 0, -1, 
                  aDstFrameNo, aClipRect, aClipRect, pos, 0, 0,
                  clrTL, clrTR, clrBR, clrBL, aBlend );
              }

              aPtr += 6;
            } break;

            // Draw justified text
            case 0x4A /* 'J' */ :
            {
              var font   = aBuffer[ aPtr + 4 ];
              var color  = aBuffer[ aPtr + 5 ];
              var x1     = aClipRect[0] - aDstPos[0];
              var y1     = aClipRect[1] - aDstPos[1];
              var x2     = aClipRect[2] - aDstPos[0];
              var y2     = aClipRect[3] - aDstPos[1];
              var width  = aBuffer[ aPtr + 6 ];

              if (( color >= 0 ) && ( color < aAttrSet.NoOfColors ))
                color = aAttrSet.Colors[ color ];
              else
                color = 0;

              if (( font >= 0 ) && ( font < aAttrSet.NoOfFonts ))
                font = aAttrSet.Fonts[ font ];
              else
                font = null;

              // If the desired font is not available in the AttrSet -> Use the
              // default font #0
              if ( !font && aAttrSet.NoOfFonts )
                font = aAttrSet.Fonts[ 0 ];

              // Text drawing position relative to the origin of the destination 
              // area
              pos[0] = aClipRect[0] - pos[0];
              pos[1] = aClipRect[1] - pos[1];

              if ( font )
              {
                var clrTL = OpacityFromGradient( aOpacity, x1, y1, color );
                var clrTR = OpacityFromGradient( aOpacity, x2, y1, color );
                var clrBR = OpacityFromGradient( aOpacity, x2, y2, color );
                var clrBL = OpacityFromGradient( aOpacity, x1, y2, color );

                aThis._DrawText( aDst, font, aBuffer[ aPtr + 3 ], 0, -1, 
                  aDstFrameNo, aClipRect, aClipRect, pos, width, 0,
                  clrTL, clrTR, clrBR, clrBL, aBlend );
              }

              aPtr += 7;
            } break;

            // Draw an image
            case 0x49 /* 'I' */ :
            {
              var bmp     = aBuffer[ aPtr + 3 ];
              var frameNo = aBuffer[ aPtr + 4 ];
              var color   = aBuffer[ aPtr + 5 ];

              if (( color >= 0 ) && ( color < aAttrSet.NoOfColors ))
                color = aAttrSet.Colors[ color ];
              else
                color = 0;

              if (( bmp >= 0 ) && ( bmp < aAttrSet.NoOfBitmaps ))
                bmp = aAttrSet.Bitmaps[ bmp ];
              else
                bmp = null;

              // If the desired bitmap is not available in the AttrSet -> Use the
              // default bitmap #0
              if ( !bmp && aAttrSet.NoOfBitmaps )
                bmp = aAttrSet.Bitmaps[ 0 ];

              if ( bmp )
              {
                var x1    = pos[0] - aDstPos[0];
                var y1    = pos[1] - aDstPos[1];
                var x2    = x1 + bmp.FrameSize[0];
                var y2    = y1 + bmp.FrameSize[1];
                var clrTL = OpacityFromGradient( aOpacity, x1, y1, color );
                var clrTR = OpacityFromGradient( aOpacity, x2, y1, color );
                var clrBR = OpacityFromGradient( aOpacity, x2, y2, color );
                var clrBL = OpacityFromGradient( aOpacity, x1, y2, color );

                // Image should use the current text color for image opacity and 
                // alpha8 bitmaps used as image source
                var dstRect = [ pos[0], pos[1], pos[0] + bmp.FrameSize[0], 
                                pos[1] + bmp.FrameSize[1]];

                aThis._CopyBitmap( aDst, bmp, aDstFrameNo, frameNo, aClipRect, 
                  dstRect, [0,0], clrTL, clrTR, clrBR, clrBL, aBlend );
              }

              aPtr += 6;
            } break;
          }
        }

        // or a link statement - the links are not drawn - skip over!
        else if ( ch === 0x41 /* A */ )
          aPtr += 7;
      }
    }

    DrawBackground( aThis, aDst, aDstFrameNo, aClipRect, aDstPos, aOfsX,
      aOfsY, aAttrSet, aBuffer, aPtr, aEnd, aBlend, aOpacity );

    DrawContent( aThis, aDst, aDstFrameNo, aClipRect, aDstPos, aOfsX,
      aOfsY, aAttrSet, aBuffer, aPtr, aEnd, aBlend, aOpacity );
  }

  // ---------------------------------------------------------------------------
  // The function ParseAttrString() converts the given source string aString
  // into a list of drawing statements. Unlike simple text drawing operations,
  // attributed strings may appear with multiple fonts, colors and images - like
  // HTML.
  // The appearance of the string is determinated by the used attributes and by 
  // the passed aAttrSet container. The attributes describe what to do with the
  // text, which font/color should be used or what images should be displayed
  // together with the text. The attributes are always enclosed in '{ .... }'
  // braces. For example, the attribute for color selection looks like this:
  // "The text with other {clr1}text color{clr0}."
  // The attribute {clr1} forces the Graphics Engine to draw the following text
  // with the color number 1. The value of the desired color is stored in the
  // aAttrSet container. In the same manner a font selection can be applied or
  // an image can be displayed together with the text. The attributed strings 
  // use a small but very powerfull set of attributes. They control the entire
  // layout and the appearance of the displayed text.
  // The function ParseAttrString() returns an array containing the preprocessed
  // drawing statements. These statements can then be executed very fast by the
  // DrawAttrText() function. In this manner the parsing of the string is done
  // only once - the text can be displayed several times.
  // ---------------------------------------------------------------------------
  emwi._ParseAttrString = function( aAttrSet, aString, aWidth, aEnableBidiText )
  {
    var buffer      = [];
    var attrString  = {};
    var height      = [0];
    var noOfLinks   = [0];
    var lastLeading = [0];
    var isRTL       = [-1];

    // Anything to do?
    if ( !aAttrSet || !aString.length || ( aWidth <= 0 ))
      return null;

    // Start the parsing - the resulting attributed string is stored in the
    // temporary buffer
    Body( this, aAttrSet, aString, 0, aWidth, aEnableBidiText, buffer, height, 0,
          lastLeading, 0, isRTL, noOfLinks );

    attrString.Data  = buffer;
    attrString.Links = [];
    attrString.IsRTL = isRTL[0] === 1;

    // Build a list with all links (attribute {lnk:...) existing in the string
    if ( noOfLinks )
    {
      CollectLinks( aString, 0, attrString.Links );
      CollectLinkRegions( attrString.Links, 0, 0, attrString.Data, 0, 
                          attrString.Data.length );
    }

    return attrString;
  };

  // ---------------------------------------------------------------------------
  // The function FreeAttrString() releases the memory area reserved by the
  // function ParseAttrString() for drawing statements.
  // ---------------------------------------------------------------------------
  emwi._FreeAttrString = function( aAttrString )
  {
  };
  
  // ---------------------------------------------------------------------------
  // The function GetAttrTextSize() calculates the rectangular area necessary
  // to draw the given attributed string. The rectangular area is calculated by
  // building an union of all drawing statements of the attributed string.
  // ---------------------------------------------------------------------------
  emwi._GetAttrTextSize = function( aAttrString )
  {
    // No data to evaluate
    if ( !aAttrString )
      return this._NullPoint;

    // The size is still unknown
    if ( !aAttrString.Size )
    {
      var data = aAttrString? aAttrString.Data : null;
      var ptr  = 0;
      var end  = data? data.length : 0;
      var rect = [ 0, 0, 0, 0 ];

      // Repeat until all drawing statements are evaluated. This function evaluates
      // only 'rectangle' and 'group' drawing statement. All other statements are
      // already nested within the groups
      while ( ptr < end )
      {
        // Get the rect. area of the current drawing statement
        var x1 = data[ ptr + 1 ];
        var y1 = data[ ptr + 2 ];
        var x2 = data[ ptr + 3 ];
        var y2 = data[ ptr + 4 ];

        // ... and build an union with this area
        if (( x1 < x2 ) && ( y1 < y2 ))
        {
          if ( rect[0] > x1 ) rect[0] = x1;
          if ( rect[2] < x2 ) rect[2] = x2;
          if ( rect[1] > y1 ) rect[1] = y1;
          if ( rect[3] < y2 ) rect[3] = y2;
        }

        // Continue with the next drawing group/rect statement 
        if ( data[ ptr ] === 0x52 /* 'R' */ ) ptr += 6;
        else                                  ptr += data[ ptr + 5 ];
      }

      var w = rect[2] - rect[0];
      var h = rect[3] - rect[1];
      
      if ( w < 0 ) w = 0;
      if ( h < 0 ) h = 0;

      aAttrString.Size = [ w, h ];
    }

    // Return the calculated size
    return aAttrString.Size;
  };
  
  // ---------------------------------------------------------------------------
  // The function GetNoOfAttrLinks() returns the total number of links stored
  // within the given attributed string aAttrString.
  // ---------------------------------------------------------------------------
  emwi._GetNoOfAttrLinks = function( aAttrString )
  {
    if ( !aAttrString )
      return 0;

    return aAttrString.Links.length;
  };

  // ---------------------------------------------------------------------------
  // The function GetAttrLinkName() returns the name of a link, which is stored
  // within the given attributed string aAttrString. The number of the desired
  // link is passed in the argument aLinkNo. The first link has the number 0,
  // the second 1, ...
  // The total number of available links can be determinated by the call to the
  // function GetNoOfAttrLinks().
  // ---------------------------------------------------------------------------
  emwi._GetAttrLinkName = function( aAttrString, aLinkNo )
  {
    if ( !aAttrString )
      return this._EmptyString;

    // Is the link number valid?
    if (( aLinkNo < 0 ) || ( aLinkNo >= aAttrString.Links.length ))
      return this._EmptyString;

    // Return the string
    return aAttrString.Links[ aLinkNo ].Name;
  };
  
  // ---------------------------------------------------------------------------
  // The function GetNoOfAttrLinkRegions() returns the number of rectangular 
  // text areas enclosed by the given link aLinkNo within the attributed string
  // aAttrString. 
  // Due to the line wrap, the text enclosed by a single link can be wrapped in
  // several text lines, so the link area may become a very complex polygon. To
  // describe this polygon, it is divided in several rectangular areas, one for
  // each text line enclosed by the link. To get the origin and the size of an
  // area, the function GetAttrLinkRect() should be used.
  // The regions are very useful, if a selection frame or an other kind of 
  // decoration should be drawn together with the link. 
  // ---------------------------------------------------------------------------
  emwi._GetNoOfAttrLinkRegions = function( aAttrString, aLinkNo )
  {
    if ( !aAttrString )
      return 0;

    // Is the link number valid?
    if (( aLinkNo < 0 ) || ( aLinkNo >= aAttrString.Links.length ))
      return 0;

    // Return the string
    return aAttrString.Links[ aLinkNo ].NoOfRegions;
  };

  // ---------------------------------------------------------------------------
  // The function GetAttrLinkRect() returns the origin and the size of an area
  // occuped by the link aLinkNo within the attributed string aAttrString.
  // Due to the line wrap, the text enclosed by a single link can be wrapped in 
  // several text lines, so the link area may become a very complex polygon. To
  // describe this polygon, it is divided in several rectangular areas, one for
  // each text line enclosed by the link. The number of the desired rectangular
  // area should be passed in the argument aRegionNo. The first region has the 
  // number 0, the second 1, ...
  // The total number of available regions can be determinated by the call to the
  // function GetNoOfAttrLinkRegions().
  // ---------------------------------------------------------------------------
  emwi._GetAttrLinkRect = function( aAttrString, aLinkNo, aRegionNo )
  {
    var link;
    var ptr;
    var rect = [ 0, 0, 0, 0 ];

    if ( !aAttrString )
      return rect;

    // Is the link number valid?
    if (( aLinkNo < 0 ) || ( aLinkNo >= aAttrString.Links.length ))
      return rect;

    link = aAttrString.Links[ aLinkNo ];

    // Is the region number valid?
    if (( aRegionNo < 0 ) || ( aRegionNo >= link.NoOfRegions ))
      return rect;

    // Find the desired link region
    ptr = SkipToRegion( aLinkNo + 1, aRegionNo, aAttrString.Data, link.StartPtr,
                        link.EndPtr );

    // Return the rect. area
    if ( ptr >= 0 )
    {
      rect[0] = aAttrString.Data[ ptr + 2 ] + link.X;
      rect[1] = aAttrString.Data[ ptr + 3 ] + link.Y;
      rect[2] = aAttrString.Data[ ptr + 4 ] + link.X;
      rect[3] = aAttrString.Data[ ptr + 5 ] + link.Y;
    }

    return rect;
  };
  
  // ---------------------------------------------------------------------------
  // The function GetAttrLinkBaseline() returns the vertical offset to the base
  // line of the text enclosed by the link aLinkNo within the attributed string 
  // aAttrString. The base line is used for vertical text alignment.
  // Due to the line wrap, the text enclosed by a single link can be wrapped in 
  // several text lines. For each text line a different base line may be used.
  // This function provides you with an access to this base line offset for each
  // text region enclosed by the link. The number of the desired region should be
  // passed in the argument aRegionNo. The first region has the number 0, the 
  // second 1, ...
  // The total number of available regions can be determinated by the call to the
  // function GetNoOfAttrLinkRegions().
  // ---------------------------------------------------------------------------
  emwi._GetAttrLinkBaseline = function( aAttrString, aLinkNo, aRegionNo )
  {
    var link;
    var ptr;

    if ( !aAttrString )
      return 0;

    // Is the link number valid?
    if (( aLinkNo < 0 ) || ( aLinkNo >= aAttrString.Links.length ))
      return 0;

    link = aAttrString.Links[ aLinkNo ];

    // Is the region number valid?
    if (( aRegionNo < 0 ) || ( aRegionNo >= link.NoOfRegions ))
      return 0;

    // Find the desired link region
    ptr = SkipToRegion( aLinkNo + 1, aRegionNo, aAttrString.Data, link.StartPtr, 
                        link.EndPtr );

    // Return the rect. area
    if ( ptr >= 0 )
      return link.Y + aAttrString.Data[ ptr + 6 ];

    return 0;
  };

  // ---------------------------------------------------------------------------
  // The function IsAttrTextRTL() returns the basic paragraph direction 
  // resulting from the very first processed paragraph in the attributed string.
  // ---------------------------------------------------------------------------
  emwi._IsAttrTextRTL = function( aAttrString )
  {
    return aAttrString && aAttrString.IsRTL;
  };

  // The following constant data array contains Unicode character codes in sorted
  // order extracted from the Unicode database. Every consecutive two entries in
  // that array determine a range of Unicode charcaters <from>-<to> having equal
  // BidiClass+BracketType properties. This array is used to find entries for a 
  // given Unicode character code.
  var BidiSortedCodes =
    "\u0000\u0009\u000A\u000B\u000C\u000D\u000E\u001C\u001F\u0020"+
    "\u0021\u0023\u0026\u0028\u0029\u002A\u002B\u002C\u002D\u002E"+
    "\u0030\u003A\u003B\u003C\u003D\u003E\u003F\u0041\u005B\u005C"+
    "\u005D\u005E\u0061\u007B\u007C\u007D\u007E\u007F\u0085\u0086"+
    "\u00A0\u00A1\u00A2\u00A6\u00AA\u00AB\u00AC\u00AD\u00AE\u00B0"+
    "\u00B2\u00B4\u00B5\u00B6\u00B9\u00BA\u00BB\u00BC\u00C0\u00D7"+
    "\u00D8\u00F7\u00F8\u02B9\u02BB\u02C2\u02D0\u02D2\u02E0\u02E5"+
    "\u02EE\u02EF\u0300\u0370\u0374\u0376\u037E\u037F\u0384\u0386"+
    "\u0387\u0388\u03F6\u03F7\u0483\u048A\u058A\u058B\u058D\u058F"+
    "\u0590\u0591\u05BE\u05BF\u05C0\u05C1\u05C3\u05C4\u05C6\u05C7"+
    "\u05C8\u0600\u0606\u0608\u0609\u060B\u060C\u060D\u060E\u0610"+
    "\u061B\u061C\u061D\u0620\u0621\u0622\u0626\u0627\u0628\u0629"+
    "\u062A\u062F\u0633\u0640\u0641\u0648\u0649\u064B\u0660\u066A"+
    "\u066B\u066D\u066E\u0670\u0671\u0674\u0675\u0678\u0688\u069A"+
    "\u06C0\u06C1\u06C3\u06CC\u06CD\u06CE\u06CF\u06D0\u06D2\u06D4"+
    "\u06D5\u06D6\u06DD\u06DE\u06DF\u06E5\u06E7\u06E9\u06EA\u06EE"+
    "\u06F0\u06FA\u06FD\u06FF\u0700\u070F\u0710\u0711\u0712\u0715"+
    "\u071A\u071E\u071F\u0728\u0729\u072A\u072B\u072C\u072D\u072F"+
    "\u0730\u074B\u074D\u074E\u0759\u075C\u076B\u076D\u0771\u0772"+
    "\u0773\u0775\u0778\u077A\u0780\u07A6\u07B1\u07C0\u07EB\u07F4"+
    "\u07F6\u07FA\u0816\u081A\u081B\u0824\u0825\u0828\u0829\u082E"+
    "\u0859\u085C\u0860\u0861\u0862\u0866\u0867\u0868\u0869\u086B"+
    "\u0870\u08A0\u08AA\u08AD\u08AE\u08AF\u08B1\u08B3\u08B5\u08B6"+
    "\u08B9\u08BA\u08BE\u08D4\u08E2\u08E3\u0903\u093A\u093B\u093C"+
    "\u093D\u0941\u0949\u094D\u094E\u0951\u0958\u0962\u0964\u0981"+
    "\u0982\u09BC\u09BD\u09C1\u09C5\u09CD\u09CE\u09E2\u09E4\u09F2"+
    "\u09F4\u09FB\u09FC\u0A01\u0A03\u0A3C\u0A3D\u0A41\u0A43\u0A47"+
    "\u0A49\u0A4B\u0A4E\u0A51\u0A52\u0A70\u0A72\u0A75\u0A76\u0A81"+
    "\u0A83\u0ABC\u0ABD\u0AC1\u0AC6\u0AC7\u0AC9\u0ACD\u0ACE\u0AE2"+
    "\u0AE4\u0AF1\u0AF2\u0AFA\u0B00\u0B01\u0B02\u0B3C\u0B3D\u0B3F"+
    "\u0B40\u0B41\u0B45\u0B4D\u0B4E\u0B56\u0B57\u0B62\u0B64\u0B82"+
    "\u0B83\u0BC0\u0BC1\u0BCD\u0BCE\u0BF3\u0BF9\u0BFA\u0BFB\u0C00"+
    "\u0C01\u0C3E\u0C41\u0C46\u0C49\u0C4A\u0C4E\u0C55\u0C57\u0C62"+
    "\u0C64\u0C78\u0C7F\u0C81\u0C82\u0CBC\u0CBD\u0CBF\u0CC0\u0CC6"+
    "\u0CC7\u0CCC\u0CCE\u0CE2\u0CE4\u0D00\u0D02\u0D3B\u0D3D\u0D41"+
    "\u0D45\u0D4D\u0D4E\u0D62\u0D64\u0DCA\u0DCB\u0DD2\u0DD5\u0DD6"+
    "\u0DD7\u0E31\u0E32\u0E34\u0E3B\u0E3F\u0E40\u0E47\u0E4F\u0EB1"+
    "\u0EB2\u0EB4\u0EBA\u0EBB\u0EBD\u0EC8\u0ECE\u0F18\u0F1A\u0F35"+
    "\u0F36\u0F37\u0F38\u0F39\u0F3A\u0F3B\u0F3C\u0F3D\u0F3E\u0F71"+
    "\u0F7F\u0F80\u0F85\u0F86\u0F88\u0F8D\u0F98\u0F99\u0FBD\u0FC6"+
    "\u0FC7\u102D\u1031\u1032\u1038\u1039\u103B\u103D\u103F\u1058"+
    "\u105A\u105E\u1061\u1071\u1075\u1082\u1083\u1085\u1087\u108D"+
    "\u108E\u109D\u109E\u135D\u1360\u1390\u139A\u1400\u1401\u1680"+
    "\u1681\u169B\u169C\u169D\u1712\u1715\u1732\u1735\u1752\u1754"+
    "\u1772\u1774\u17B4\u17B6\u17B7\u17BE\u17C6\u17C7\u17C9\u17D4"+
    "\u17DB\u17DC\u17DD\u17DE\u17F0\u17FA\u1800\u180B\u180E\u180F"+
    "\u1885\u1887\u18A9\u18AA\u1920\u1923\u1927\u1929\u1932\u1933"+
    "\u1939\u193C\u1940\u1941\u1944\u1946\u19DE\u1A00\u1A17\u1A19"+
    "\u1A1B\u1A1C\u1A56\u1A57\u1A58\u1A5F\u1A60\u1A61\u1A62\u1A63"+
    "\u1A65\u1A6D\u1A73\u1A7D\u1A7F\u1A80\u1AB0\u1ABF\u1B00\u1B04"+
    "\u1B34\u1B35\u1B36\u1B3B\u1B3C\u1B3D\u1B42\u1B43\u1B6B\u1B74"+
    "\u1B80\u1B82\u1BA2\u1BA6\u1BA8\u1BAA\u1BAB\u1BAE\u1BE6\u1BE7"+
    "\u1BE8\u1BEA\u1BED\u1BEE\u1BEF\u1BF2\u1C2C\u1C34\u1C36\u1C38"+
    "\u1CD0\u1CD3\u1CD4\u1CE1\u1CE2\u1CE9\u1CED\u1CEE\u1CF4\u1CF5"+
    "\u1CF8\u1CFA\u1DC0\u1DFA\u1DFB\u1E00\u1FBD\u1FBE\u1FBF\u1FC2"+
    "\u1FCD\u1FD0\u1FDD\u1FE0\u1FED\u1FF0\u1FFD\u1FFF\u2000\u200B"+
    "\u200C\u200D\u200E\u200F\u2010\u2028\u2029\u202A\u202B\u202C"+
    "\u202D\u202E\u202F\u2030\u2035\u2039\u203B\u2044\u2045\u2046"+
    "\u2047\u205F\u2060\u2065\u2066\u2067\u2068\u2069\u206A\u2070"+
    "\u2071\u2074\u207A\u207C\u207D\u207E\u207F\u2080\u208A\u208C"+
    "\u208D\u208E\u208F\u20A0\u20D0\u20F1\u2100\u2102\u2103\u2107"+
    "\u2108\u210A\u2114\u2115\u2116\u2119\u211E\u2124\u2125\u2126"+
    "\u2127\u2128\u2129\u212A\u212E\u212F\u213A\u213C\u2140\u2145"+
    "\u214A\u214E\u2150\u2160\u2189\u218C\u2190\u2208\u220E\u2212"+
    "\u2213\u2214\u2215\u2216\u223C\u223E\u2243\u2244\u2252\u2256"+
    "\u2264\u226C\u226E\u228C\u228F\u2293\u2298\u2299\u22A2\u22A4"+
    "\u22A6\u22A7\u22A8\u22AA\u22AB\u22AC\u22B0\u22B8\u22C9\u22CE"+
    "\u22D0\u22D2\u22D6\u22EE\u22F0\u22F5\u22F6\u22F8\u22FA\u22FF"+
    "\u2308\u2309\u230A\u230B\u230C\u2329\u232A\u232B\u2336\u237B"+
    "\u2395\u2396\u2427\u2440\u244B\u2460\u2488\u249C\u24EA\u26AC"+
    "\u26AD\u2768\u2769\u276A\u276B\u276C\u276D\u276E\u276F\u2770"+
    "\u2771\u2772\u2773\u2774\u2775\u2776\u27C3\u27C5\u27C6\u27C7"+
    "\u27C8\u27CA\u27CB\u27CC\u27CD\u27CE\u27D5\u27D7\u27DD\u27DF"+
    "\u27E2\u27E6\u27E7\u27E8\u27E9\u27EA\u27EB\u27EC\u27ED\u27EE"+
    "\u27EF\u27F0\u2800\u2900\u2983\u2984\u2985\u2986\u2987\u2988"+
    "\u2989\u298A\u298B\u298C\u298D\u298E\u298F\u2990\u2991\u2992"+
    "\u2993\u2994\u2995\u2996\u2997\u2998\u2999\u29B8\u29B9\u29C0"+
    "\u29C2\u29C4\u29C6\u29CF\u29D3\u29D4\u29D6\u29D8\u29D9\u29DA"+
    "\u29DB\u29DC\u29F5\u29F6\u29F8\u29FA\u29FC\u29FD\u29FE\u2A2B"+
    "\u2A2F\u2A34\u2A36\u2A3C\u2A3E\u2A64\u2A66\u2A79\u2A7B\u2A7D"+
    "\u2A85\u2A8B\u2A8D\u2A91\u2A9D\u2AA1\u2AA3\u2AA6\u2AAE\u2AAF"+
    "\u2AB1\u2AB3\u2AB5\u2ABB\u2AC7\u2ACD\u2AD7\u2ADE\u2ADF\u2AE3"+
    "\u2AE6\u2AEC\u2AEE\u2AF7\u2AFB\u2B74\u2B76\u2B96\u2B98\u2BBA"+
    "\u2BBD\u2BC9\u2BCA\u2BD3\u2BEC\u2BF0\u2CE5\u2CEB\u2CEF\u2CF2"+
    "\u2CF9\u2D00\u2D7F\u2D80\u2DE0\u2E00\u2E02\u2E06\u2E09\u2E0B"+
    "\u2E0C\u2E0E\u2E1C\u2E1E\u2E20\u2E22\u2E23\u2E24\u2E25\u2E26"+
    "\u2E27\u2E28\u2E29\u2E2A\u2E4A\u2E80\u2E9A\u2E9B\u2EF4\u2F00"+
    "\u2FD6\u2FF0\u2FFC\u3000\u3001\u3005\u3008\u3009\u300A\u300B"+
    "\u300C\u300D\u300E\u300F\u3010\u3011\u3012\u3014\u3015\u3016"+
    "\u3017\u3018\u3019\u301A\u301B\u301C\u3021\u302A\u302E\u3030"+
    "\u3031\u3036\u3038\u303D\u3040\u3099\u309B\u309D\u30A0\u30A1"+
    "\u30FB\u30FC\u31C0\u31E4\u321D\u321F\u3250\u3260\u327C\u327F"+
    "\u32B1\u32C0\u32CC\u32D0\u3377\u337B\u33DE\u33E0\u33FF\u3400"+
    "\u4DC0\u4E00\uA490\uA4C7\uA60D\uA610\uA66F\uA673\uA674\uA67E"+
    "\uA680\uA69E\uA6A0\uA6F0\uA6F2\uA700\uA722\uA788\uA789\uA802"+
    "\uA803\uA806\uA807\uA80B\uA80C\uA825\uA827\uA828\uA82C\uA838"+
    "\uA83A\uA874\uA878\uA8C4\uA8C6\uA8E0\uA8F2\uA926\uA92E\uA947"+
    "\uA952\uA980\uA983\uA9B3\uA9B4\uA9B6\uA9BA\uA9BC\uA9BD\uA9E5"+
    "\uA9E6\uAA29\uAA2F\uAA31\uAA33\uAA35\uAA37\uAA43\uAA44\uAA4C"+
    "\uAA4D\uAA7C\uAA7D\uAAB0\uAAB1\uAAB2\uAAB5\uAAB7\uAAB9\uAABE"+
    "\uAAC0\uAAC1\uAAC2\uAAEC\uAAEE\uAAF6\uAAF7\uABE5\uABE6\uABE8"+
    "\uABE9\uABED\uABEE\uFB1D\uFB1E\uFB1F\uFB29\uFB2A\uFB50\uFD3E"+
    "\uFD40\uFDD0\uFDF0\uFDFD\uFDFE\uFE00\uFE10\uFE1A\uFE20\uFE30"+
    "\uFE50\uFE51\uFE52\uFE53\uFE54\uFE55\uFE56\uFE59\uFE5A\uFE5B"+
    "\uFE5C\uFE5D\uFE5E\uFE5F\uFE60\uFE62\uFE64\uFE66\uFE67\uFE68"+
    "\uFE69\uFE6B\uFE6C\uFE70\uFEFF\uFF00\uFF01\uFF03\uFF06\uFF08"+
    "\uFF09\uFF0A\uFF0B\uFF0C\uFF0D\uFF0E\uFF10\uFF1A\uFF1B\uFF1C"+
    "\uFF1D\uFF1E\uFF1F\uFF21\uFF3B\uFF3C\uFF3D\uFF3E\uFF41\uFF5B"+
    "\uFF5C\uFF5D\uFF5E\uFF5F\uFF60\uFF61\uFF62\uFF63\uFF64\uFF66"+
    "\uFFE0\uFFE2\uFFE5\uFFE7\uFFE8\uFFEF\uFFF9\uFFFC\uFFFE\uFFFF";

  // The following constant data array contains the values BidiClass+BracketPair
  // for Unicode character ranges from the corresponding entry in the above array
  // SortedCodes[]. The values are composed from BIDI_TYPE_XXX, BRACKET_TYPE_XXX, 
  // MIRROR_GLYPH, JOIN_TYPE_XXX.
  var BidiUnicodeData =
    "\x0A\x0C\x0B\x0C\x0D\x0B\x0A\x0B\x0C\x0D\x0E\x06\x0E"+
    "\x2E\x4E\x0E\x05\x08\x05\x08\x04\x08\x0E\x6E\x0E\x6E"+
    "\x0E\x01\x2E\x0E\x4E\x0E\x01\x2E\x0E\x4E\x0E\x0A\x0B"+
    "\x0A\x08\x0E\x06\x0E\x01\x6E\x0E\x8A\x0E\x06\x04\x0E"+
    "\x01\x0E\x04\x01\x6E\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+
    "\x0E\x01\x0E\x01\x0E\x01\x0E\x89\x01\x0E\x01\x0E\x01"+
    "\x0E\x01\x0E\x01\x0E\x01\x89\x01\x0E\x01\x0E\x06\x02"+
    "\x89\x02\x89\x02\x89\x02\x89\x02\x89\x02\x07\x0E\x03"+
    "\x06\x03\x08\x03\x0E\x89\x03\x83\x03\x1A\x03\x18\x1A"+
    "\x18\x1A\x18\x1A\x18\x1A\x1B\x1A\x18\x1A\x89\x07\x06"+
    "\x07\x03\x1A\x89\x18\x03\x18\x1A\x18\x1A\x18\x1A\x18"+
    "\x1A\x18\x1A\x18\x1A\x18\x03\x18\x89\x07\x0E\x89\x03"+
    "\x89\x0E\x89\x18\x04\x1A\x03\x1A\x03\x83\x18\x89\x1A"+
    "\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x18\x89\x03"+
    "\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x03"+
    "\x89\x03\x02\x89\x02\x0E\x02\x89\x02\x89\x02\x89\x02"+
    "\x89\x02\x89\x02\x1A\x03\x1A\x03\x18\x1A\x18\x03\x02"+
    "\x1A\x18\x03\x18\x1A\x18\x1A\x03\x1A\x18\x1A\x03\x89"+
    "\x07\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x06"+
    "\x01\x06\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
    "\x01\x89\x01\x89\x01\x06\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
    "\x01\x89\x01\x0E\x06\x0E\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x89\x01\x0E\x01\x89\x01\x89\x01\x81"+
    "\x01\x81\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
    "\x01\x06\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x89\x01\x89\x2E\x4E\x2E\x4E\x01\x89"+
    "\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
    "\x01\x89\x01\x89\x01\x89\x01\x89\x01\x0E\x01\x0E\x01"+
    "\x0D\x01\x2E\x4E\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x89\x01\x89\x01\x06\x01\x89\x01\x0E"+
    "\x01\x0E\x89\x0A\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x0E\x01\x0E\x01\x0E\x01\x89\x01\x89"+
    "\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
    "\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
    "\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
    "\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0D"+
    "\x8A\x0A\x8A\x81\x82\x0E\x0D\x0B\x8F\x91\x93\x90\x92"+
    "\x08\x06\x0E\x6E\x0E\x08\x2E\x4E\x0E\x0D\x8A\x01\x14"+
    "\x15\x16\x17\x8A\x04\x01\x04\x05\x0E\x2E\x4E\x01\x04"+
    "\x05\x0E\x2E\x4E\x01\x06\x89\x01\x0E\x01\x0E\x01\x0E"+
    "\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+
    "\x06\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E"+
    "\x6E\x0E\x05\x06\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E"+
    "\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E"+
    "\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E"+
    "\x6E\x0E\x6E\x0E\x2E\x4E\x2E\x4E\x0E\x2E\x4E\x0E\x01"+
    "\x0E\x01\x0E\x01\x0E\x01\x0E\x04\x01\x0E\x01\x0E\x2E"+
    "\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E"+
    "\x0E\x6E\x2E\x4E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E"+
    "\x6E\x0E\x6E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E"+
    "\x0E\x01\x0E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E"+
    "\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x0E"+
    "\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x2E\x4E\x2E"+
    "\x4E\x0E\x6E\x0E\x6E\x0E\x2E\x4E\x0E\x6E\x0E\x6E\x0E"+
    "\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E"+
    "\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E"+
    "\x6E\x0E\x6E\x0E\x6E\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+
    "\x0E\x01\x0E\x01\x0E\x01\x89\x01\x0E\x01\x89\x01\x89"+
    "\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x2E\x4E\x2E"+
    "\x4E\x2E\x4E\x2E\x4E\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+
    "\x0E\x01\x0D\x0E\x01\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E"+
    "\x2E\x4E\x0E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x0E\x01"+
    "\x89\x01\x0E\x01\x0E\x01\x0E\x01\x89\x0E\x01\x0E\x01"+
    "\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E"+
    "\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+
    "\x89\x0E\x89\x0E\x01\x89\x01\x89\x01\x0E\x01\x0E\x01"+
    "\x89\x01\x89\x01\x89\x01\x89\x01\x0E\x01\x06\x01\x0E"+
    "\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
    "\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
    "\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x02"+
    "\x89\x02\x05\x02\x03\x0E\x03\x01\x03\x0E\x03\x89\x0E"+
    "\x01\x89\x0E\x08\x0E\x08\x01\x0E\x08\x0E\x2E\x4E\x2E"+
    "\x4E\x2E\x4E\x06\x0E\x05\x6E\x0E\x01\x0E\x06\x0E\x01"+
    "\x03\x8A\x01\x0E\x06\x0E\x2E\x4E\x0E\x05\x08\x05\x08"+
    "\x04\x08\x0E\x6E\x0E\x6E\x0E\x01\x2E\x0E\x4E\x0E\x01"+
    "\x2E\x0E\x4E\x0E\x2E\x4E\x0E\x2E\x4E\x0E\x01\x06\x0E"+
    "\x06\x01\x0E\x01\x8E\x0E\x01\x01";

  // The following constant data array contains Unicode character codes in sorted
  // order extracted from the Unicode database. Every consecutive two entries in
  // that array determine the code of a bracket character and its corresponding
  // counterpart (eg. open-close or close-open).
  var BidiMirrorGlyphs =
    "\u0028\u0029\u0029\u0028\u003C\u003E\u003E\u003C\u005B\u005D"+
    "\u005D\u005B\u007B\u007D\u007D\u007B\u00AB\u00BB\u00BB\u00AB"+
    "\u0F3A\u0F3B\u0F3B\u0F3A\u0F3C\u0F3D\u0F3D\u0F3C\u169B\u169C"+
    "\u169C\u169B\u2039\u203A\u203A\u2039\u2045\u2046\u2046\u2045"+
    "\u207D\u207E\u207E\u207D\u208D\u208E\u208E\u208D\u2208\u220B"+
    "\u2209\u220C\u220A\u220D\u220B\u2208\u220C\u2209\u220D\u220A"+
    "\u2215\u29F5\u223C\u223D\u223D\u223C\u2243\u22CD\u2252\u2253"+
    "\u2253\u2252\u2254\u2255\u2255\u2254\u2264\u2265\u2265\u2264"+
    "\u2266\u2267\u2267\u2266\u2268\u2269\u2269\u2268\u226A\u226B"+
    "\u226B\u226A\u226E\u226F\u226F\u226E\u2270\u2271\u2271\u2270"+
    "\u2272\u2273\u2273\u2272\u2274\u2275\u2275\u2274\u2276\u2277"+
    "\u2277\u2276\u2278\u2279\u2279\u2278\u227A\u227B\u227B\u227A"+
    "\u227C\u227D\u227D\u227C\u227E\u227F\u227F\u227E\u2280\u2281"+
    "\u2281\u2280\u2282\u2283\u2283\u2282\u2284\u2285\u2285\u2284"+
    "\u2286\u2287\u2287\u2286\u2288\u2289\u2289\u2288\u228A\u228B"+
    "\u228B\u228A\u228F\u2290\u2290\u228F\u2291\u2292\u2292\u2291"+
    "\u2298\u29B8\u22A2\u22A3\u22A3\u22A2\u22A6\u2ADE\u22A8\u2AE4"+
    "\u22A9\u2AE3\u22AB\u2AE5\u22B0\u22B1\u22B1\u22B0\u22B2\u22B3"+
    "\u22B3\u22B2\u22B4\u22B5\u22B5\u22B4\u22B6\u22B7\u22B7\u22B6"+
    "\u22C9\u22CA\u22CA\u22C9\u22CB\u22CC\u22CC\u22CB\u22CD\u2243"+
    "\u22D0\u22D1\u22D1\u22D0\u22D6\u22D7\u22D7\u22D6\u22D8\u22D9"+
    "\u22D9\u22D8\u22DA\u22DB\u22DB\u22DA\u22DC\u22DD\u22DD\u22DC"+
    "\u22DE\u22DF\u22DF\u22DE\u22E0\u22E1\u22E1\u22E0\u22E2\u22E3"+
    "\u22E3\u22E2\u22E4\u22E5\u22E5\u22E4\u22E6\u22E7\u22E7\u22E6"+
    "\u22E8\u22E9\u22E9\u22E8\u22EA\u22EB\u22EB\u22EA\u22EC\u22ED"+
    "\u22ED\u22EC\u22F0\u22F1\u22F1\u22F0\u22F2\u22FA\u22F3\u22FB"+
    "\u22F4\u22FC\u22F6\u22FD\u22F7\u22FE\u22FA\u22F2\u22FB\u22F3"+
    "\u22FC\u22F4\u22FD\u22F6\u22FE\u22F7\u2308\u2309\u2309\u2308"+
    "\u230A\u230B\u230B\u230A\u2329\u232A\u232A\u2329\u2768\u2769"+
    "\u2769\u2768\u276A\u276B\u276B\u276A\u276C\u276D\u276D\u276C"+
    "\u276E\u276F\u276F\u276E\u2770\u2771\u2771\u2770\u2772\u2773"+
    "\u2773\u2772\u2774\u2775\u2775\u2774\u27C3\u27C4\u27C4\u27C3"+
    "\u27C5\u27C6\u27C6\u27C5\u27C8\u27C9\u27C9\u27C8\u27CB\u27CD"+
    "\u27CD\u27CB\u27D5\u27D6\u27D6\u27D5\u27DD\u27DE\u27DE\u27DD"+
    "\u27E2\u27E3\u27E3\u27E2\u27E4\u27E5\u27E5\u27E4\u27E6\u27E7"+
    "\u27E7\u27E6\u27E8\u27E9\u27E9\u27E8\u27EA\u27EB\u27EB\u27EA"+
    "\u27EC\u27ED\u27ED\u27EC\u27EE\u27EF\u27EF\u27EE\u2983\u2984"+
    "\u2984\u2983\u2985\u2986\u2986\u2985\u2987\u2988\u2988\u2987"+
    "\u2989\u298A\u298A\u2989\u298B\u298C\u298C\u298B\u298D\u2990"+
    "\u298E\u298F\u298F\u298E\u2990\u298D\u2991\u2992\u2992\u2991"+
    "\u2993\u2994\u2994\u2993\u2995\u2996\u2996\u2995\u2997\u2998"+
    "\u2998\u2997\u29B8\u2298\u29C0\u29C1\u29C1\u29C0\u29C4\u29C5"+
    "\u29C5\u29C4\u29CF\u29D0\u29D0\u29CF\u29D1\u29D2\u29D2\u29D1"+
    "\u29D4\u29D5\u29D5\u29D4\u29D8\u29D9\u29D9\u29D8\u29DA\u29DB"+
    "\u29DB\u29DA\u29F5\u2215\u29F8\u29F9\u29F9\u29F8\u29FC\u29FD"+
    "\u29FD\u29FC\u2A2B\u2A2C\u2A2C\u2A2B\u2A2D\u2A2E\u2A2E\u2A2D"+
    "\u2A34\u2A35\u2A35\u2A34\u2A3C\u2A3D\u2A3D\u2A3C\u2A64\u2A65"+
    "\u2A65\u2A64\u2A79\u2A7A\u2A7A\u2A79\u2A7D\u2A7E\u2A7E\u2A7D"+
    "\u2A7F\u2A80\u2A80\u2A7F\u2A81\u2A82\u2A82\u2A81\u2A83\u2A84"+
    "\u2A84\u2A83\u2A8B\u2A8C\u2A8C\u2A8B\u2A91\u2A92\u2A92\u2A91"+
    "\u2A93\u2A94\u2A94\u2A93\u2A95\u2A96\u2A96\u2A95\u2A97\u2A98"+
    "\u2A98\u2A97\u2A99\u2A9A\u2A9A\u2A99\u2A9B\u2A9C\u2A9C\u2A9B"+
    "\u2AA1\u2AA2\u2AA2\u2AA1\u2AA6\u2AA7\u2AA7\u2AA6\u2AA8\u2AA9"+
    "\u2AA9\u2AA8\u2AAA\u2AAB\u2AAB\u2AAA\u2AAC\u2AAD\u2AAD\u2AAC"+
    "\u2AAF\u2AB0\u2AB0\u2AAF\u2AB3\u2AB4\u2AB4\u2AB3\u2ABB\u2ABC"+
    "\u2ABC\u2ABB\u2ABD\u2ABE\u2ABE\u2ABD\u2ABF\u2AC0\u2AC0\u2ABF"+
    "\u2AC1\u2AC2\u2AC2\u2AC1\u2AC3\u2AC4\u2AC4\u2AC3\u2AC5\u2AC6"+
    "\u2AC6\u2AC5\u2ACD\u2ACE\u2ACE\u2ACD\u2ACF\u2AD0\u2AD0\u2ACF"+
    "\u2AD1\u2AD2\u2AD2\u2AD1\u2AD3\u2AD4\u2AD4\u2AD3\u2AD5\u2AD6"+
    "\u2AD6\u2AD5\u2ADE\u22A6\u2AE3\u22A9\u2AE4\u22A8\u2AE5\u22AB"+
    "\u2AEC\u2AED\u2AED\u2AEC\u2AF7\u2AF8\u2AF8\u2AF7\u2AF9\u2AFA"+
    "\u2AFA\u2AF9\u2E02\u2E03\u2E03\u2E02\u2E04\u2E05\u2E05\u2E04"+
    "\u2E09\u2E0A\u2E0A\u2E09\u2E0C\u2E0D\u2E0D\u2E0C\u2E1C\u2E1D"+
    "\u2E1D\u2E1C\u2E20\u2E21\u2E21\u2E20\u2E22\u2E23\u2E23\u2E22"+
    "\u2E24\u2E25\u2E25\u2E24\u2E26\u2E27\u2E27\u2E26\u2E28\u2E29"+
    "\u2E29\u2E28\u3008\u3009\u3009\u3008\u300A\u300B\u300B\u300A"+
    "\u300C\u300D\u300D\u300C\u300E\u300F\u300F\u300E\u3010\u3011"+
    "\u3011\u3010\u3014\u3015\u3015\u3014\u3016\u3017\u3017\u3016"+
    "\u3018\u3019\u3019\u3018\u301A\u301B\u301B\u301A\uFE59\uFE5A"+
    "\uFE5A\uFE59\uFE5B\uFE5C\uFE5C\uFE5B\uFE5D\uFE5E\uFE5E\uFE5D"+
    "\uFE64\uFE65\uFE65\uFE64\uFF08\uFF09\uFF09\uFF08\uFF1C\uFF1E"+
    "\uFF1E\uFF1C\uFF3B\uFF3D\uFF3D\uFF3B\uFF5B\uFF5D\uFF5D\uFF5B"+
    "\uFF5F\uFF60\uFF60\uFF5F\uFF62\uFF63\uFF63\uFF62";

  // The following constant data array contains Unicode character codes in sorted
  // order extracted from the Unicode database. Every consecutive two entries in
  // that array determine the code of an Arabic letter with its three presentation
  // codes for the initial, medial and final shaping variant.
  var BidiShapingGlyphs = [
    0x0621, "\u0000\u0000\u0000", 0x0622, "\u0000\u0000\uFE82",
    0x0623, "\u0000\u0000\uFE84", 0x0624, "\u0000\u0000\uFE86",
    0x0625, "\u0000\u0000\uFE88", 0x0626, "\uFE8B\uFE8C\uFE8A",
    0x0627, "\u0000\u0000\uFE8E", 0x0628, "\uFE91\uFE92\uFE90",
    0x0629, "\u0000\u0000\uFE94", 0x062A, "\uFE97\uFE98\uFE96",
    0x062B, "\uFE9B\uFE9C\uFE9A", 0x062C, "\uFE9F\uFEA0\uFE9E",
    0x062D, "\uFEA3\uFEA4\uFEA2", 0x062E, "\uFEA7\uFEA8\uFEA6",
    0x062F, "\u0000\u0000\uFEAA", 0x0630, "\u0000\u0000\uFEAC",
    0x0631, "\u0000\u0000\uFEAE", 0x0632, "\u0000\u0000\uFEB0",
    0x0633, "\uFEB3\uFEB4\uFEB2", 0x0634, "\uFEB7\uFEB8\uFEB6",
    0x0635, "\uFEBB\uFEBC\uFEBA", 0x0636, "\uFEBF\uFEC0\uFEBE",
    0x0637, "\uFEC3\uFEC4\uFEC2", 0x0638, "\uFEC7\uFEC8\uFEC6",
    0x0639, "\uFECB\uFECC\uFECA", 0x063A, "\uFECF\uFED0\uFECE",
    0x0641, "\uFED3\uFED4\uFED2", 0x0642, "\uFED7\uFED8\uFED6",
    0x0643, "\uFEDB\uFEDC\uFEDA", 0x0644, "\uFEDF\uFEE0\uFEDE",
    0x0645, "\uFEE3\uFEE4\uFEE2", 0x0646, "\uFEE7\uFEE8\uFEE6",
    0x0647, "\uFEEB\uFEEC\uFEEA", 0x0648, "\u0000\u0000\uFEEE",
    0x0649, "\uFBE8\uFBE9\uFEF0", 0x064A, "\uFEF3\uFEF4\uFEF2",
    0x0671, "\u0000\u0000\uFB51", 0x0677, "\u0000\u0000\u0000",
    0x0679, "\uFB68\uFB69\uFB67", 0x067A, "\uFB60\uFB61\uFB5F",
    0x067B, "\uFB54\uFB55\uFB53", 0x067E, "\uFB58\uFB59\uFB57",
    0x067F, "\uFB64\uFB65\uFB63", 0x0680, "\uFB5C\uFB5D\uFB5B",
    0x0683, "\uFB78\uFB79\uFB77", 0x0684, "\uFB74\uFB75\uFB73",
    0x0686, "\uFB7C\uFB7D\uFB7B", 0x0687, "\uFB80\uFB81\uFB7F",
    0x0688, "\u0000\u0000\uFB89", 0x068C, "\u0000\u0000\uFB85",
    0x068D, "\u0000\u0000\uFB83", 0x068E, "\u0000\u0000\uFB87",
    0x0691, "\u0000\u0000\uFB8D", 0x0698, "\u0000\u0000\uFB8B",
    0x06A4, "\uFB6C\uFB6D\uFB6B", 0x06A6, "\uFB70\uFB71\uFB6F",
    0x06A9, "\uFB90\uFB91\uFB8F", 0x06AD, "\uFBD5\uFBD6\uFBD4",
    0x06AF, "\uFB94\uFB95\uFB93", 0x06B1, "\uFB9C\uFB9D\uFB9B",
    0x06B3, "\uFB98\uFB99\uFB97", 0x06BA, "\u0000\u0000\uFB9F",
    0x06BB, "\uFBA2\uFBA3\uFBA1", 0x06BE, "\uFBAC\uFBAD\uFBAB",
    0x06C0, "\u0000\u0000\uFBA5", 0x06C1, "\uFBA8\uFBA9\uFBA7",
    0x06C5, "\u0000\u0000\uFBE1", 0x06C6, "\u0000\u0000\uFBDA",
    0x06C7, "\u0000\u0000\uFBD8", 0x06C8, "\u0000\u0000\uFBDC",
    0x06C9, "\u0000\u0000\uFBE3", 0x06CB, "\u0000\u0000\uFBDF",
    0x06CC, "\uFBFE\uFBFF\uFBFD", 0x06D0, "\uFBE6\uFBE7\uFBE5",
    0x06D2, "\u0000\u0000\uFBAF", 0x06D3, "\u0000\u0000\uFBB1",
    0xFEF5, "\u0000\u0000\uFEF6", 0xFEF7, "\u0000\u0000\uFEF8",
    0xFEF9, "\u0000\u0000\uFEFA", 0xFEFB, "\u0000\u0000\uFEFC" ];

  // The following internal function determines for the given Unicode character
  // aCharCode its BidiClass, BracketType, JoiningType properties, etc.
  function GetUnicodeInfo( aCharCode )
  {
    var inx  = 0;
    var min  = 0;
    var data = BidiSortedCodes;
    var max  = data.length - 1;
  
    // Repeat until the range including the requested code is found, or the end
    // of the array is reached
    while( max >= min )
    {
      inx = ( max + min ) >> 1;

      if      (  aCharCode === data.charCodeAt( inx ))      break;
      else if (  aCharCode <   data.charCodeAt( inx ))      max = inx - 1;
      else if (( aCharCode >=  data.charCodeAt( inx + 1 ))) min = inx + 1;
      else                                                  break;
    }

    // Found 
    return BidiUnicodeData.charCodeAt( inx );
  } 

  // The following internal function determines for the given Unicode character
  // aCharCode its counterpart mirror glyph. If aCharCode has not a mirrored
  // counterpart, function returns 0.
  function GetMirrorGlyph( aCharCode )
  {
    var inx  = 0;
    var min  = 0;
    var data = BidiMirrorGlyphs;
    var max  = ( data.length >> 1 ) - 1;
    var comp = -1;
  
    // Repeat until the requested code is found, or the end of the array is reached
    while( max >= min )
    {
      inx  = ( max + min ) >> 1;
      comp = aCharCode - data.charCodeAt( inx * 2 );

      if ( !comp     ) return data.charCodeAt( inx * 2 + 1 ); 
      if (  comp < 0 ) max = inx - 1;
      else             min = inx + 1;
    }

    // Not found
    return 0;
  } 

  // The following internal function determines for the given Unicode character
  // aCharCode whether it has different shaping presentations. If successful, the
  // funtion returns a pointer to a const array with 4 glyph codes corresponding
  // to the 4 possible variants [ <isolated>, <initial>, <medial>, <final> ]. The
  // array may contain 0 values for glyph variants which are not available. If
  // aCharCode has not the specified variant, function returns 0.
  function GetShapingGlyphs( aCharCode )
  {
    var inx  = 0;
    var min  = 0;
    var data = BidiShapingGlyphs;
    var max  = ( data.length >> 1 ) - 1;
    var comp = -1;
  
    // Repeat until the requested code is found, or the end of the array is reached
    while( max >= min )
    {
      inx  = ( max + min ) >> 1;
      comp = aCharCode - data[ inx * 2 ]; 

      if ( !comp     ) return data[ inx * 2 + 1 ]; 
      if (  comp < 0 ) max = inx - 1;
      else             min = inx + 1;
    }

    // Not found
    return "";
  } 

  // The following function searches backwards within the array aData for a RLI,
  // LRI or FSI matching the PDI found at the actual aDataInx position. The 
  // function returns the index to the found RLI, LRI or FSI or 0 if it has not
  // been found. The search operation stops by reaching aStartInx.
  function FindIsolateInitiator( aData, aDataInx, aStartInx )
  {
    var isolates = 0;
    var bidiType = aData[ aDataInx * 4 ];
  
    // There is no PDI at the actual position ...
    if ( bidiType !== 23 )
      return 0;

    // Scan the bidi types
    for ( ; aDataInx >= aStartInx; aDataInx-- )
    {
      bidiType = aData[ aDataInx * 4 ];

      // Isolate initiator?
      if ( bidiType === 23 )
        isolates--;

      // The end of the isolate
      if ( isolates && (( bidiType === 20 ) || ( bidiType === 21 ) || ( bidiType === 22 )))
        if ( ++isolates === 0 )
          return aDataInx;
    }

    // Not found
    return 0;
  }

  // The following function searches within the array aData for a PDI matching
  // the RLI, LRI or FSI found at the actual aDataInx position. The function
  // returns the index to the found PDI or 0 if no corresponding PDI has been
  // found. The search operation stops before reaching aStopInx.
  function FindIsolateTerminator( aData, aDataInx, aStopInx )
  {
    var isolates = 0;
    var bidiType = aData[ aDataInx * 4 ];

    // There is no RLI, LRI nor FSI at the actual position ...
    if (( bidiType !== 20 ) && ( bidiType !== 21 ) && ( bidiType !== 22 ))
      return 0;
  
    // Scan the bidi types
    for ( ; aDataInx < aStopInx; aDataInx++ )
    {
      bidiType = aData[ aDataInx * 4 ];

      // Isolate initiator?
      if (( bidiType === 20 ) || ( bidiType === 21 ) || ( bidiType === 22 ))
        isolates++;
    
      // The end of the isolate
      else if ( isolates && ( bidiType === 23 ))
      {
        if ( isolates === 1 )
          return aDataInx;

        if ( isolates > 1 )
          isolates--;
      }
    }

    // Not found
    return 0;
  }

  // The following function searches within the array aData for the first strong
  // BidiType L, R or AL. Characters enclosed between LRI, RLI, FSI and PDI are
  // not taken in account. The function returns an index to found character or
  // 0 if no character has been found. The search operation stops before reaching
  // aStopInx.
  function FindFirstStrongChar( aData, aDataInx, aStopInx )
  {
    // Scan the bidi types 
    for ( ; aDataInx < aStopInx; aDataInx++ )
    {
      var bidiType = aData[ aDataInx * 4 ];

      // Found a strong character? 
      if (( bidiType === 1 ) || ( bidiType === 2 ) || ( bidiType === 3 ))
        return aDataInx;

      // Other non isolate initiator character?
      if (( bidiType !== 20 ) && ( bidiType !== 21 ) && ( bidiType !== 22 ))
        continue;

      // Search for the PDI corresponding to the found isolate initiator
      if ( !( aDataInx = FindIsolateTerminator( aData, aDataInx, aStopInx )))
        aDataInx = aStopInx;
    } 

    // Not found
    return 0;
  }

  // The following function searches within aData for the end of the level-run
  // starting at aDataInx. The level-run is a sequence of characters with the 
  // same level. The function returns a pointer to the last character belonging
  // to the level-run. The search operation stops before reaching aStopInx.
  // (Definition BD7).
  function FindEndOfLevelRun( aData, aDataInx, aStopInx )
  {
    var level = aData[ aDataInx * 4 + 1 ];
  
    if ( aDataInx >= aStopInx )
      return 0;

    while (( aDataInx < aStopInx ) && ( aData[ aDataInx * 4 + 1 ] === level ))
      aDataInx++;

    return aDataInx - 1;
  }

  // The following function searches the given isolating run sequence aSeqData
  // for nested bracket pairs. Brackets, which have no valid counterpart are 
  // marked as invalid by setting their state to MIRROR. The function returns 
  // != 0 if there is at least one valid bracket pair in the sequence.
  function PreprocessBrackets( aSeqData, aSeqDataInx, aSeqStopInx, aData,
    aString, aStringInx, aGaps, aGapsInx, aGapCount )
  {
    var codeStack = [];
    var dataStack = [];
    var stackInx  = -1;
    var count     = 0;
    var ofs       = 0;   

    // Process all characters within the sequence
    for ( ; aSeqDataInx < aSeqStopInx; aSeqDataInx++ )
    {
      var seqData = aSeqData[ aSeqDataInx ];

      while (( aGapCount > 0 ) && (( seqData + ofs ) >= aGaps[ aGapsInx - ofs ]))
      {
        ofs++;
        aGapCount--;
      }

      if ( aData[ seqData * 4 ] !== 14 )
        continue;
    
      var status = aData[ seqData * 4 + 2 ];

      // An opening paired bracket
      if ( status === 1 )
      {
        // Stack capacity enhausted (Definition BD16)
        if ( stackInx >= ( 63 - 1 ))
          break;

        // Store the found opening bracket on the stack 
        dataStack.push( seqData ); 
        codeStack.push( GetMirrorGlyph( aString[ aStringInx + seqData - 3 + ofs ]));  
        stackInx++;
      }
    
      // A closing paired bracket
      else if ( status === 2 )
      {
        var code      = aString[ aStringInx + seqData - 3 + ofs ];
        var stackInx2 = stackInx;
      
        // Searches the stack for an open bracket corresponding to the actual
        // close bracket. Note the special case of the canonical equivalences 
        // for U+2329 and U+232A according to BIDI reference implementation. 
        // This aspect is not mentioned in the specification!
        while (( stackInx2 > 0 ) && ( code !== codeStack[ stackInx2 ]) && 
              (( code !== 0x232A ) || ( codeStack[ stackInx2 ] !== 0x3009 )) && 
              (( code !== 0x3009 ) || ( codeStack[ stackInx2 ] !== 0x232A )))
          stackInx2--; 
      
        // Found? Note the special case of the canonical equivalences for U+2329
        // and U+232A according to BIDI reference implementation. This aspect is
        // not mentioned in the specification!
        if (( stackInx2 >= 0 ) && (( code === codeStack[ stackInx2 ]) || 
              (( code === 0x232A ) && ( codeStack[ stackInx2 ] === 0x3009 )) || 
              (( code === 0x3009 ) && ( codeStack[ stackInx2 ] === 0x232A ))))
        {
          // All skipped over opening brackets are marked as not valid. Remove
          // the corresponding entries from the stack 
          while ( stackInx > stackInx2 )
          {
            aData[ dataStack.pop() * 4 + 2 ] = 3;
            codeStack.pop();
            stackInx--;
          }

          // Remove the entry corresponding to the processed closing bracket 
          codeStack.pop();
          dataStack.pop();
          stackInx--;
          count++;
        }

        // No corresponding opening bracket found. Just mark this closing bracket
        // as not valid 
        else      
          aData[ seqData * 4 + 2 ] = 3;
      }
    }

    // All not closed opening brackets are marked as not valid.
    while ( stackInx >= 0 )
    {
      aData[ dataStack.pop() * 4 + 2 ] = 3;
      stackInx--;
    }

    // If the stack is full, invalidate all brackets remaining in the sequence
    for ( ; aSeqDataInx < aSeqStopInx; aSeqDataInx++ )
    {
      var seqData = aSeqData[ aSeqDataInx ] * 4;

      if (( aData[ seqData ] === 14 ) && 
          (( aData[ seqData + 2 ] === 1 ) || ( aData[ seqData + 2 ] === 2 )))
        aData[ seqData + 2 ] = 3;
    }

    return count;
  }

  // The following function searches the given isolating run sequence aSeqData
  // for a closing bracket corresponding to the opening bracket at the actual
  // position aSeqDataInx.
  function FindClosingBracket( aSeqData, aSeqDataInx, aSeqStopInx, aData )
  {
    var seqData = aSeqData[ aSeqDataInx ] * 4;
    var count   = 1;

    // Only if the character at the actual position is a valid opening bracket
    if (( aData[ seqData ] !== 14 ) || ( aData[ seqData + 2 ] !== 1 ))
      return 0;

    for ( aSeqDataInx++; aSeqDataInx < aSeqStopInx; aSeqDataInx++ )
    {
      var seqData = aSeqData[ aSeqDataInx ] * 4;
      var type    = aData[ seqData ];
      var status  = aData[ seqData + 2 ];

      // Count opening brackets 
      if (( type === 14 ) && ( status === 1 ))
        count++;
    
      // Count closing brackets
      else if (( type === 14 ) && ( status === 2 ))
        if ( !--count )
          return aSeqDataInx;
    }

    /* Not found */
    return 0;
  }

  // The following function determines the SOS (start of sequence) type for the
  // sequence starting with the character aDataInx.
  function GetSOSType( aData, aDataInx, aStartInx, aParagraphLevel )
  {
    var level     = aData[ aDataInx * 4 + 1 ];
    var prevLevel = aParagraphLevel;

    if ( aDataInx > aStartInx )
      prevLevel = aData[ aDataInx * 4 - 3 ];

    if ( prevLevel > level )
      level = prevLevel;

    if ( level & 1 ) return 2;
    else             return 1;
  }

  // The following function determines the EOS (end of sequence) type for the
  // sequence ending with the character aDataInx.
  function GetEOSType( aData, aDataInx, aStopInx, aParagraphLevel )
  {
    var level     = aData[ aDataInx * 4 + 1 ];
    var nextLevel = aParagraphLevel;
    var type      = aData[ aDataInx * 4 ];

    if (( aDataInx < ( aStopInx - 1 )) && ( type !== 21 ) && ( type !== 20 ) && ( type !== 22 ))
      nextLevel = aData[ aDataInx * 4 + 5 ];

    if ( nextLevel > level )
      level = nextLevel;

    if ( level & 1 ) return 2;
    else             return 1;
  }

  // ---------------------------------------------------------------------------
  // The function CreateBidi() creates a new Bidi-Context able to manage Bidi
  // information for at the least as many characters as specified in parameter
  // aMaxSize.
  //
  // The Bidi-information in the context is not initialized. Use the function
  // BidiInit() for this purpose. If the returned Bidi-Context is not needed
  // anymore, it has to be released by using the function EwFreeBidi().
  // ---------------------------------------------------------------------------
  emwi._CreateBidi = function( aMaxSize )
  {
    // No content intended to store in this context
    if ( aMaxSize <= 0 )
      return null;

    // Unlike the ANSI C version, in JavaScript we store every BidiData entry as 
    // a set of 4 bytes. The byte #0 -> Type, #1 -> Level, #2 -> State, #3 -> free.
    // Note, the first initial BidiData entry is not used. It represents NULL.
    // The second and third entries are used to store estimated sos and eos values
    // of an isolating run sequence.
    return {
      Data           : new Uint8Array(( aMaxSize + 4 ) * 4 ),
      MaxSize        : aMaxSize,
      Size           : 0,
      IsBidi         : false,
      ParagraphLevel : 0
    };
  };
  
  // ---------------------------------------------------------------------------
  // The function FreeBidi() frees all resources associated with the given
  // Bidi-Context aBidi again.
  // ---------------------------------------------------------------------------
  emwi._FreeBidi = function( aBidi )
  {
  };
  
  // ---------------------------------------------------------------------------
  // The function BidiIsNeeded() returns != 0 if further Bidi processing is
  // required. If the original text does not contain any RTL signs nor Bidi
  // control signs, the function returns 0.
  // ---------------------------------------------------------------------------
  emwi._BidiIsNeeded = function( aBidi )
  {
    return aBidi && aBidi.IsBidi;
  };
  
  // ---------------------------------------------------------------------------
  // The function BidiIsRTL() returns the basic paragraph direction stored in
  // the given Bidi-Context.
  // ---------------------------------------------------------------------------
  emwi._BidiIsRTL = function( aBidi )
  {
    return aBidi && ( aBidi.ParagraphLevel === 1 );
  };

  // ---------------------------------------------------------------------------
  // The function BidiGetCharLevel() returns the embedding level corresponding
  // to the character with the specified number.
  // ---------------------------------------------------------------------------
  emwi._BidiGetCharLevel = function( aBidi, aIndex )
  {
    if ( !aBidi )
      return 0;

    if (( aIndex < 0 ) || ( aIndex >= aBidi.Size )) 
      return aBidi.ParagraphLevel;

    return aBidi.Data[ aIndex * 4 + 13 ];
  };

  // ---------------------------------------------------------------------------
  // The function BidiInit() evaluates the characters in aString and stores in
  // the Bidi-Context aBidi for every evaluated character the corresponding Bidi
  // type. Finally the function determines the paragraph's base direction and
  // stores it also in the context.
  //
  // Please note, before invoking this function you should create a new Bidi 
  // context with enough capacity so all string characters can be stored in it.
  // If the passed context is invalid or too small, the function fails.
  // ---------------------------------------------------------------------------
  emwi._BidiInit = function( aBidi, aString, aStringInx, aCount,
    aBaseDirection )
  {
    var data    = aBidi? aBidi.Data : null;
    var maxSize = aBidi? aBidi.MaxSize : 0;
    var length  = ( aCount < 0 )? ( aString.length - aStringInx - 1 ) : aCount;
    var found   = aBaseDirection > 0;
    var inx     = 0;
    var dataInx = 12;

    // Invalid context or it is too small for the given string
    if ( maxSize < length )
      return false;

    // Initialize the array with BidiClass, BracketType, JoiningType information
    // for the corresponding characters
    for ( ; inx < length; inx++ )
    {
      var info      = GetUnicodeInfo( aString[ aStringInx + inx ]);
      var type      = info & 31;
      var bracket   = info & 96;
      var joinTypeT = info & 128;
      var status    = 0;

      if      ( type    === 24 ) status = 8;
      else if ( type    === 25 ) status = 9; 
      else if ( type    === 26 ) status = 10; 
      else if ( type    === 27 ) status = 11;
      else if ( bracket === 32 ) status = 1;
      else if ( bracket === 64 ) status = 2;
      else if ( bracket === 96 ) status = 3;
      else if ( type    === 9  ) status = 4;
      else if ( type    === 13 ) status = 5;
      else if ( type    === 12 ) status = 6;
      else if ( type    === 11 ) status = 6;
      else if (( type   === 21 ) || ( type === 20 ) ||
               ( type   === 22 ) || ( type === 23 ))
        status = 7;
      else if ( joinTypeT ) status = 12;

      if (( type >= 24 ) && ( type <= 27 ))
        type = 3;    

      /* Did found any character which indicates the necesity to run BIDI? */
      if ( !found && (( type === 3 ) || ( type === 2 ) ||
          ( type === 17 ) || ( type === 18 ) || ( type === 21 )))
        found = 1;

      data[ dataInx++ ] = type;
      data[ dataInx++ ] = 0;
      data[ dataInx++ ] = status;
      data[ dataInx++ ] = 0;
    }
  
    // Terminate the array with an empty data entry. It is used as stop sign.
    data[ dataInx++ ] = 0;
    data[ dataInx++ ] = 0;
    data[ dataInx++ ] = 0;
    data[ dataInx++ ] = 0;

    /* Complete the initialization of the BIDI context structure */
    aBidi.Size           = length;
    aBidi.IsBidi         = found;
    aBidi.ParagraphLevel = ( aBaseDirection > 0 )? 1 : 0;

    /* The string does not contain any characters needing the BIDI process */
    if ( !found )
      return false;

    /* Determine the default paragraph level of the text */
    if (( aBaseDirection < 0 ) && ( inx = FindFirstStrongChar( data, 3, length + 3 )))
      aBidi.ParagraphLevel = ( data[ inx * 4 ] === 1 )? 0 : 1;

    return true;
  };

  // ---------------------------------------------------------------------------
  // The function BidiProcess() performs the main part of the Bidi-Algorithm
  // deriving from the characters in the given string aString and their Bidi-
  // Types provided in aBidi the corresponding direction levels. Finally the
  // estimated levels are stored in aBidi for every character in aString.
  // ---------------------------------------------------------------------------
  emwi._BidiProcess = function( aBidi, aString, aStringInx )
  {
    var stack              = [];
    var length             = aBidi? aBidi.Size : 0;
    var paragraphLevel     = aBidi? aBidi.ParagraphLevel : 0;
    var data               = aBidi? aBidi.Data : null;
    var stopInx            = 3 + length;
    var seqData            = new Uint32Array( length + 2 );
    var stackInx           = 0;
    var overflowIsolates   = 0;
    var overflowEmbeddings = 0;
    var validIsolates      = 0;
    var gapCount           = 0;
    var ptr;
    var ptr2;
  
    // Initialization (rule X1). stackInx refers to the entry on top of 
    // the stack - it is thus >= 0 if stack contains entries and -1 if it is 
    // empty.
    stack.push({ Level : paragraphLevel, Override : 0, Isolate : false });
  
    // Process explicit embeddings (rule X1 (X2..X8))
    for ( ptr = 3; ptr < stopInx; ptr++ )
    {
      var bidiType = data[ ptr * 4 ];
    
      // Rule X5c
      if ( bidiType === 22 )
      {
        var pdi = FindIsolateTerminator( data, ptr, stopInx );
        var tmp = FindFirstStrongChar( data, ptr + 1, pdi? pdi : stopInx );
      
        if ( tmp && (( data[ tmp * 4 ] === 3 ) || ( data[ tmp * 4 ] === 2 )))
          bidiType = 21;
        else
          bidiType = 20;
      }

      // Rule X2..X5 
      if (( bidiType === 17 ) || ( bidiType === 15 ) ||
          ( bidiType === 18 ) || ( bidiType === 16 )) 
      {
        var level = stack[ stackInx ].Level;
        var type  = 0;
      
        if (( bidiType === 17 ) || ( bidiType === 18 ))
          level += ( level & 1 )? 2 : 1;
        else
          level += ( level & 1 )? 1 : 2;
      
        if ( bidiType === 18 ) type = 2;
        if ( bidiType === 16 ) type = 1;

        if (( level <= 125 ) && !overflowIsolates && !overflowEmbeddings )
        {
          stackInx++;
          stack.push({ Level : level, Override : type, Isolate : false });
        }
      
        if (( level > 125 ) && !overflowIsolates )
          overflowEmbeddings++; 
      }

      // Rule X5a and X5b (also 5c) 
      else if (( bidiType === 21 ) || ( bidiType === 20 ))
      {
        var level = stack[ stackInx ].Level;
      
        data[ ptr * 4 + 1 ] = level;
      
        if ( stack[ stackInx ].Override )
          data[ ptr * 4 ] = stack[ stackInx ].Override;

        if ( bidiType === 21 ) level += ( level & 1 )? 2 : 1;
        else                              level += ( level & 1 )? 1 : 2;

        if (( level <= 125 ) && !overflowIsolates && !overflowEmbeddings )
        {
          validIsolates++;
          stackInx++;
          stack.push({ Level : level, Override : 0, Isolate : true });
        }
      
        else
          overflowIsolates++;
      }
    
      // Rule X6a
      else if ( bidiType === 23 )
      {
        if ( overflowIsolates )
          overflowIsolates--;
      
        else if ( validIsolates )
        {
          overflowEmbeddings = 0;
        
          while ( !stack[ stackInx ].Isolate )
          {
            stack.pop();
            stackInx--;
          }

          stack.pop();
          stackInx--;
          validIsolates--;
        }

        data[ ptr * 4 + 1 ] = stack[ stackInx ].Level;

        if ( stack[ stackInx ].Override )
          data[ ptr * 4 ] = stack[ stackInx ].Override; 
      }
    
      // Rule X7
      else if ( bidiType === 19 )
      {
        if ( !overflowIsolates )
        {
          if ( overflowEmbeddings )
            overflowEmbeddings--;
          
          else if (( stackInx && !stack[ stackInx ].Isolate ))
          {
            stack.pop();
            stackInx--;
          }
        }
      }

      // Rule X6
      else if (( bidiType !== 11 ) && ( bidiType !== 10 )) 
      {
        data[ ptr * 4 + 1 ] = stack[ stackInx ].Level;
      
        if ( stack[ stackInx ].Override )
          data[ ptr * 4 ] = stack[ stackInx ].Override; 
      }
    }

    // Remove signs (rule X9)
    for ( ptr2 = 3, ptr = 3; ptr < stopInx; ptr++, ptr2++ )
    {
      var bidiType = data[ ptr * 4 ];

      // Remove the followjng signs from the text temporarily. To restore them
      // later record the position of every affected sign.
      if (( bidiType === 17 ) || ( bidiType === 15 ) || ( bidiType === 18 ) ||
          ( bidiType === 16 ) || ( bidiType === 19 ) || ( bidiType === 10 ))
      {
        seqData[ length + 2 - ++gapCount ] = ptr;
        ptr2--;
      }

      else if ( ptr2 < ptr )
      {
        data[ ptr2 * 4     ] = data[ ptr * 4     ];
        data[ ptr2 * 4 + 1 ] = data[ ptr * 4 + 1 ];
        data[ ptr2 * 4 + 2 ] = data[ ptr * 4 + 2 ];
      }
    }

    // The preceding X9 rule has removed signs from the text.
    stopInx -= gapCount;
  
    // Process all level runs belonging to the same isolating run sequence 
    // (rules W1 .. W7, N0 .. N2).
    for ( ptr = 3; ptr < stopInx; )
    {
      var seqPtr = 0;
      var seqStop;
      var firstNI;
      var solr;
      var eolr;
      var strongType;

      data[4] = 0; data[5] = 0; data[6 ] = 0; // stores sos -> index 1
      data[8] = 0; data[9] = 0; data[10] = 0; // stores eos -> index 2
    
      // Does the level-run belong to a previously processed isolating run 
      // sequence? Then ignore it. (Definition BD13)
      if (( data[ ptr * 4 ] === 23 ) && FindIsolateInitiator( data, ptr, 3 ))
      {
        ptr = FindEndOfLevelRun( data, ptr, stopInx ) + 1;
        continue;
      }

      // Begin of a new isolating run sequence
      data[4] = GetSOSType( data, ptr, 3, paragraphLevel );
      seqData[ seqPtr++ ] = 1; // Refers the sos entry at the begin of data

      eolr = FindEndOfLevelRun( data, ptr, stopInx );

      // Accumulare all characters belonging to the first level-run
      for ( ; ptr <= eolr; ptr++ )
        seqData[ seqPtr++ ] = ptr;

      // Search for the next following level-run belonging to the same isolating
      // run sequence (Rule X10)
      while ( solr = FindIsolateTerminator( data, eolr, stopInx ))
      {
        eolr = FindEndOfLevelRun( data, solr, stopInx );
      
        // Accumulare all characters belonging to this level-run 
        for ( ; solr <= eolr; solr++ )
          seqData[ seqPtr++ ] = solr;
      }

      // End of the sequence
      data[8] = GetEOSType( data, eolr, stopInx, paragraphLevel );
      seqData[ seqPtr++ ] = 2; // Refers to the eos entry at begin of data

      // The determines end of the isolating run sequence without the EOS
      seqStop = seqPtr;

      // Rule W1 
      for ( strongType = data[4], seqPtr = 1; seqPtr < seqStop; seqPtr++ )
      {
        var cur = seqData[ seqPtr ];

        // Rule W1
        if ( data[ cur * 4 ] === 9 )
        {
          var prevType = data[ seqData[ seqPtr - 1 ] * 4 ];

          if (( prevType === 21 ) || ( prevType === 20 ) ||
              ( prevType === 22 ) || ( prevType === 23 ))
            prevType = 14;

          data[ cur * 4 ] = prevType;
        }
      }

      // Rule W2 .. W4
      for ( strongType = data[4], seqPtr = 1; seqPtr < seqStop; seqPtr++ )
      {
        var cur  = seqData[ seqPtr ];
        var curP = seqData[ seqPtr - 1 ];
        var type = data[ cur * 4 ];

        // Track the latest strong type
        if (( type === 1  ) || ( type === 2 ) || ( type === 3 ))
          strongType = type; 

        // Rule W2
        if (( type === 4 ) && ( strongType === 3 ))
          type = data[ cur * 4 ] = 7;

        // Rule W3
        if ( type === 3 )
          type = data[ cur * 4 ] = 2;

        // Rule W4
        if (( type === 4 ) && ( data[ curP * 4 ] === 5 ) && 
            ( data[ seqData[ seqPtr - 2 ] * 4 ] === type ))   
          data[ curP * 4 ] = type;
      
        // Rule W4
        if ((( type === 7 ) || ( type === 4 )) && ( data[ curP * 4 ] === 8 ) && 
             ( data[ seqData[ seqPtr - 2 ] * 4 ] === type ))   
          data[ curP * 4 ] = type;
      }

      // Rule W5
      for ( seqPtr = 1; seqPtr < seqStop; seqPtr++ )
      {
        var cur  = seqData[ seqPtr ];
        var type = data[ cur * 4 ];

        // Rule W5
        if ( type === 4 )
        {
          var seqPtr2 = seqPtr - 1;

          while ( data[ seqData[ seqPtr2 ] * 4 ] === 6 )
            data[ seqData[ seqPtr2-- ] * 4 ] = 4;
        }
      
        // Rule W5
        if (( type === 6 ) && ( data[ seqData[ seqPtr - 1 ] * 4 ] === 4 ))
          data[ cur * 4 ] = 4;
      }

      // Rule W6
      for ( seqPtr = 1; seqPtr < seqStop; seqPtr++ )
      {
        var cur  = seqData[ seqPtr ];
        var type = data[ cur * 4 ];

        // Rule W6
        if (( type === 6 ) || ( type === 5 ) || ( type === 8 ))
          data[ cur * 4 ] = 14;
      }

      // Rule W7
      for ( strongType = data[4], seqPtr = 1; seqPtr < seqStop; seqPtr++ )
      {
        var cur  = seqData[ seqPtr ];
        var type = data[ cur * 4 ];

        // Rule W7
        if (( type === 4 ) && ( strongType === 1 ))
          data[ cur * 4 ] = 1;

        // Track the latest strong type
        if (( type === 1  ) || ( type === 2 ) || ( type === 3 ))
          strongType = type; 
      }

      // Rule N0 -> Search and process the bracket pairs
      if ( PreprocessBrackets( seqData, seqPtr = 1, seqStop - 1, data, aString,
                               aStringInx, seqData, length + 1, gapCount ))
      {
        var embedType  = ( data[ seqData[ seqPtr ] * 4 + 1 ] & 1 )? 2 : 1;
        var strongType = data[8];

        // Evaluate bracktet pair individually
        for ( ; seqPtr < seqStop; seqPtr++ )
        {
          var close   = FindClosingBracket( seqData, seqPtr, seqStop, data );
          var seqPtr2 = seqPtr + 1;
          var type    = data[ seqData[ seqPtr ] * 4 ];
          var strongL = 0;  
          var strongR = 0;
          var newType = 0;  

          if (( type === 4 ) || ( type === 7 ))
            type = 2;
          
          // Track the preceding string type
          if (( type === 2 ) || ( type === 1 ))
            strongType = type; 

          // No bracket pair starting at the actual position 
          if ( !close )
            continue;

          // Between the both brackets search for strong signs 
          for ( ; ( seqPtr2 < close ) && ( !strongL || !strongR ); seqPtr2++ )
          {
            var type2 = data[ seqData[ seqPtr2 ] * 4 ];
          
            if ( type2 === 1 ) strongL++; 
            if ( type2 === 2 ) strongR++; 
            if ( type2 === 7 ) strongR++; 
            if ( type2 === 4 ) strongR++; 
          }

          // Rule N0b: Strong type matching the actual embedding direction found
          if ((( embedType === 1 ) && strongL ) || (( embedType === 2 ) && strongR ))
          {
            data[ seqData[ seqPtr ] * 4 ] = embedType;
            data[ seqData[ close  ] * 4 ] = embedType;
            newType                       = embedType;
            strongType                    = embedType;
          }
        
          // Rule N0c1: Opposite strong type found with established context
          else if (( strongL || strongR ) && ( strongType !== embedType ))
          {
            data[ seqData[ seqPtr ] * 4 ] = strongType;
            data[ seqData[ close  ] * 4 ] = strongType;
            newType                       = strongType;
          }
        
          // Rule N0c2
          else if ( strongL || strongR )
          {
            data[ seqData[ seqPtr ] * 4 ] = embedType;
            data[ seqData[ close  ] * 4 ] = embedType;
            newType                       = embedType;
            strongType                    = embedType;
          }

          // Adapt the NSMs modified in W1 according to the note in N0
          if ( newType )
          {
            for ( seqPtr2 = seqPtr + 1; data[ seqData[ seqPtr2 ] * 4 + 2 ] === 4;
                  seqPtr2++ )
              data[ seqData[ seqPtr2 ] * 4 ] = newType;

            for ( seqPtr2 = close + 1; data[ seqData[ seqPtr2 ] * 4 + 2 ] === 4;
                  seqPtr2++ )
              data[ seqData[ seqPtr2 ] * 4 ] = newType;
          }
        }
      }

      // Rules N1 and N2
      for ( firstNI = 0, seqPtr = 1; seqPtr < seqStop; seqPtr++ )
      {
        var cur  = seqData[ seqPtr ];
        var type = data[ cur * 4 ];

        // Start of the NI sequence
        if ( !firstNI && 
           (( type === 11 ) || ( type === 12 ) || ( type === 13 ) || ( type === 14 ) ||
            ( type === 22 ) || ( type === 20 ) || ( type === 21 ) || ( type === 23 )))
          firstNI = seqPtr;

        // End of the NI sequence
        if ( firstNI && 
            ( type !== 11 ) && ( type !== 12 ) && ( type !== 13 ) && ( type !== 14 ) &&
            ( type !== 22 ) && ( type !== 20 ) && ( type !== 21 ) && ( type !== 23 ))
        {
          var typeStart = data[ seqData[ firstNI - 1 ] * 4 ];
          var typeEnd   = type;
        
          if (( typeStart === 4 ) || ( typeStart === 7 ))
            typeStart = 2;

          if (( typeEnd === 4 ) || ( typeEnd === 7 ))
            typeEnd = 2;

          if (( typeStart !== typeEnd ) || (( typeStart !== 1 ) && ( typeStart !== 2 )))
            typeStart = ( data[ seqData[ firstNI ] * 4 + 1 ] & 1 )? 2 : 1;

          for ( ; firstNI < seqPtr; firstNI++ )
            data[ seqData[ firstNI ] * 4 ] = typeStart;

          firstNI = 0;
        }
      }
    }

    // Process implicit levels (rule I1 and I2)
    for ( ptr = 3; ptr < stopInx; ptr++ )
    {
      var type  = data[ ptr * 4 ];

      // Rule I2
      if ( data[ ptr * 4 + 1 ] & 1 )
        if (( type === 1 ) || ( type === 4 ) || ( type === 7 ))
          data[ ptr * 4 + 1 ]++;
        else
          ;

      // Rule I1
      else if ( type === 2 )
        data[ ptr * 4 + 1 ]++;
      
      // Rule I1
      else if (( type === 4 ) || ( type === 7 ))
        data[ ptr * 4 + 1 ] += 2;
    }
  
    // Fill the gaps of the previously (rule X9) removed signs by an zero width
    // glyph. This is necessary to ensure that the mapping between the indices
    // in the original text and the processed text does still correspond
    for ( ptr = stopInx - 1, ptr2 = ptr + gapCount; gapCount > 0; ptr--, ptr2-- )
    {
      if ( seqData[ length + 2 - gapCount ] === ptr2 )
      {
        var level = paragraphLevel;
        var code  = aString[ aStringInx + ptr2 - 3 ];  

        if (( ptr >= 3 ) && ( data[ ptr * 4 + 1 ] > level ))
          level = data[ ptr * 4 + 1 ];
        
        if (( ptr2 < ( stopInx - 1 )) && ( data[( ptr2 + 1 ) * 4 + 1 ] > level )) 
          level = data[( ptr2 + 1 ) * 4 + 1 ];

        // The restored gaps were originally BNs or RLE, LRE, RLO, LRO, PDF marks.
        // While all RLE..PDF marks have in the Arabic Shaping algorithm a
        // transparent joining type characteristic, some BNs have not it. Thus
        // we have to examine the code (and so the type) of the character in order
        // to decide whether it should become the transparent joining type or
        // the 'join causing' (C) type.
        if ( code === 0x200D )
          data[ ptr2 * 4 + 2 ] = 11;
        else if ((( code <   0x0000 ) || ( code >   0x0008 )) &&
                 (( code <   0x000E ) || ( code >   0x001B )) &&
                 (( code <   0x007F ) || ( code >   0x0084 )) &&
                 (( code <   0x0086 ) || ( code >   0x009F )) &&
                 (  code !== 0x180E ) && ( code !== 0x200C ))
          data[ ptr2 * 4 + 2 ] = 12;
        else
          data[ ptr2 * 4 + 2 ] = 0;
       
        data[ ptr2 * 4     ] = 31;
        data[ ptr2 * 4 + 1 ] = level;
      
        ptr++;
        gapCount--;
        stopInx++;
      }

      else if ( ptr2 > ptr )
      {
        data[ ptr2 * 4     ] = data[ ptr * 4     ];
        data[ ptr2 * 4 + 1 ] = data[ ptr * 4 + 1 ];
        data[ ptr2 * 4 + 2 ] = data[ ptr * 4 + 2 ];
      }
    }
  };

  // ---------------------------------------------------------------------------
  // The function BidiApplyShaping() performs the part of the Bidi-Algorithm 
  // needed to handle the special case of Arabic glyphs and mandatory ligatures.
  // The function evaluates the characters in the string aString and adapts all
  // found Arabic glyphs accordingly.
  // ---------------------------------------------------------------------------
  emwi._BidiApplyShaping = function( aBidi, aString, aStringInx, aAttrs, aFonts )
  {
    var length  = aBidi? aBidi.Size : 0;
    var data    = aBidi? aBidi.Data : null;
    var stopInx = 3 + length;
    var ptr     = 3;
    var ptr2    = 3;
    var level   = data[13];

    // Arabic Shaping (Unicode core documentation chapter 9.2. rules R1-R7)
    for ( ; ( ptr <= stopInx ); ptr++ )
    {
      var prev1 = 0;
      var cur   = 0;
      var next1 = 0;

      // Does the character belong to the actual level run?
      if (( level === data[ ptr * 4 + 1 ]) && ( ptr < stopInx ))
        continue;

      // Inside the level run detect sequences of signs with joining type 
      // different to 'T' (transparent). Investigate every sequence to decide
      // whether it should be replaced by a shaping or ligature variant. Also
      // take in account the mandatory Arabic ligaturs Lam-Alef and replace them
      // by the corresponding ligature glyph
      for ( ; ( ptr2 < ptr ) || cur || prev1 || next1; ptr2++ )
      {
        var left1;
        var right1;

        // Identify non transparent signs and ignore them (Rule R1)
        if ( ptr2 < ptr )
        {
          var status = data[ ptr2 * 4 + 2 ];

          // The actual sign has the joining type 'T' (transparent) - ignore it
          if (( status === 12 ) || ( status === 4 ))
            continue; 

          prev1 = cur;
          cur   = next1;
          next1 = ptr2;
        }
      
        else
        {
          prev1 = cur;
          cur   = next1;
          next1 = 0; 
        }

        // Depending on the display direction determine which is the character
        // on the left and on the right of 'cur' */
        if ( level & 1 ) { left1 = next1; right1 = prev1; }
        else             { left1 = prev1; right1 = next1; }

        // Right joining character. (Rule R2 and R7)
        if ( cur && ( data[ cur * 4 + 2 ] === 8 ))
        {
          var inx   = cur - 3;
          var code  = aString[ aStringInx + inx ];
          var codes = GetShapingGlyphs( code );
          var font  = aAttrs? aFonts[( aAttrs[ aStringInx + inx ] >> 12 ) & 0xFF ] : null;

          if ( !font )
            font = aFonts[0];

          // Is there another right join-causing character on its right? Then
          // replace it by its right-joining presentation variant, if available.
          if ( codes.charCodeAt(2) && right1 && 
             (( data[ right1 * 4 + 2 ] === 9  ) ||
              ( data[ right1 * 4 + 2 ] === 10 ) ||
              ( data[ right1 * 4 + 2 ] === 11 )) &&
             ( !font || this._IsGlyphAvailable( font, codes.charCodeAt(2))))
            aString[ aStringInx + inx ] = codes.charCodeAt(2);
        }

        // Left joining character. (Rule R3 and R7)
        else if ( cur && ( data[ cur * 4 + 2 ] === 9 ))
        {
          var inx   = cur - 3;
          var code  = aString[ aStringInx + inx ];
          var codes = GetShapingGlyphs( code );
          var font  = aAttrs? aFonts[( aAttrs[ aStringInx + inx ] >> 12 ) & 0xFF ] : null;

          if ( !font )
            font = aFonts[0];

          // Is there another right join-causing character on its right? Then
          // replace it by its right-joining presentation variant, if available.
          if ( codes.charCodeAt(0) && left1 && 
             (( data[ left1 * 4 + 2 ] === 8  ) ||
              ( data[ left1 * 4 + 2 ] === 10 ) ||
              ( data[ left1 * 4 + 2 ] === 11 )) &&
             ( !font || this._IsGlyphAvailable( font, codes.charCodeAt(0))))
            aString[ aStringInx + inx ] = codes.charCodeAt(0);
        }

        // Dual joining character. (Rules R4-R7)
        else if ( cur && ( data[ cur * 4 + 2 ] === 10 ))
        {
          var inx   = cur - 3;
          var code  = aString[ aStringInx + inx ];
          var codes = GetShapingGlyphs( code );
          var font  = aAttrs? aFonts[( aAttrs[ aStringInx + inx ] >> 12 ) & 0xFF ] : null;

          if ( !font )
            font = aFonts[0];

          // Are there another right join-causing and left-join causing characters
          // on its right and left? Then replace it by its dual-joining
          // presentation variant, if available. (Rule R4)
          if ( codes.charCodeAt(1) && right1 && left1 && 
             (( data[ right1 * 4 + 2 ] === 9  ) ||
              ( data[ right1 * 4 + 2 ] === 10 ) ||
              ( data[ right1 * 4 + 2 ] === 11 )) &&
             (( data[ left1  * 4 + 2 ] === 8  ) ||
              ( data[ left1  * 4 + 2 ] === 10 ) ||
              ( data[ left1  * 4 + 2 ] === 11 )))
          {
            if ( !font || this._IsGlyphAvailable( font, codes.charCodeAt(1)))
              aString[ aStringInx + inx ] = codes.charCodeAt(1);
          }
        
          // Is there another right join-causing character on its right? Then
          // replace it by its right-joining presentation variant, if available.
          // (Rule R5)
          else if ( codes.charCodeAt(2) && right1 && 
             (( data[ right1 * 4 + 2 ] === 9  ) ||
              ( data[ right1 * 4 + 2 ] === 10 ) ||
              ( data[ right1 * 4 + 2 ] === 11 )))
          {
            if ( !font || this._IsGlyphAvailable( font, codes.charCodeAt(2)))
              aString[ aStringInx + inx ] = codes.charCodeAt(2);
          }
        
          // Is there another left join-causing character on its left? Then
          // replace it by its left-joining presentation variant, if available.
          // (Rule R6)
          else if ( codes.charCodeAt(0) && left1 && 
             (( data[ left1 * 4 + 2 ] === 8  ) ||
              ( data[ left1 * 4 + 2 ] === 10 ) ||
              ( data[ left1 * 4 + 2 ] === 11 )))
          {
            if ( !font || this._IsGlyphAvailable( font, codes.charCodeAt(0)))
              aString[ aStringInx + inx ] = codes.charCodeAt(0);
          }
        }

        // Determine the codes of the both latest adjacent non transparent
        // characters. (Shaping rule L1) */
        if ( cur && prev1 )
        {
          var inx1    = (( level & 1 )? cur : prev1 ) - 3; 
          var inx2    = (( level & 1 )? prev1 : cur ) - 3; 
          var code1   = aString[ aStringInx + inx1 ];
          var code2   = aString[ aStringInx + inx2 ]; 
          var ligCode = 0;

          // Detect whether the actually processed and the preceding glyphs does
          // compose a ligature. Case 1: right-to-left display direction.
          // (Shaping rules R2-R3). Note: we limit to the mandatory LAM-ALEF 
          // Arabic ligatures only.
          if ( code2 === 0xFEDF )
            switch ( code1 )
            {
              case 0xFE82 : ligCode = 0xFEF5; break;
              case 0xFE84 : ligCode = 0xFEF7; break;
              case 0xFE88 : ligCode = 0xFEF9; break;
              case 0xFE8E : ligCode = 0xFEFB; break;
            }

          if ( code2 === 0xFEE0 )
            switch ( code1 )
            {
              case 0xFE82 : ligCode = 0xFEF6; break;
              case 0xFE84 : ligCode = 0xFEF8; break;
              case 0xFE88 : ligCode = 0xFEFA; break;
              case 0xFE8E : ligCode = 0xFEFC; break;
            }


          // Test whether the ligature glyph is available in the font. If not, dont
          // touch the original characters
          if ( ligCode )
          {
            var font = aAttrs? aFonts[( aAttrs[ aStringInx + inx1 ] >> 12 ) & 0xFF ] : null;

            if ( !font )
              font = aFonts[0];

            // Not available? Don't use the ligature 
            if ( font && !this._IsGlyphAvailable( font, ligCode ))
              ligCode = 0;
          }

          // Store the ligature code in the first of the characters (in display 
          // order) while the second character is initialized with <zero-width-
          // space>
          if ( ligCode )
          {
            aString[ aStringInx + inx1 ] = ligCode;
            aString[ aStringInx + inx2 ] = 0xFEFF;
          }
        }
      }

      /* Start of the next level run */
      ptr2  = ptr;
      level = data[ ptr * 4 + 1 ];
    }
  };

  // ---------------------------------------------------------------------------
  // The function BidiMirrorGlyphs() performs the part of the Bidi-Algorithm 
  // responsable for the mirroring of glyphs within level-runs with reversed
  // writing direction. For every character within aString which is signed as
  // RTL the function verifies whether there is mirror version of the sign and
  // replaces it with this version.
  // ---------------------------------------------------------------------------
  emwi._BidiMirrorGlyphs = function( aBidi, aString, aStringInx )
  {
    var length  = aBidi? aBidi.Size : 0;
    var data    = aBidi? aBidi.Data : null;
    var dataEnd = 3 + length;
    var dataPtr;

    // No Bidi context to apply the algorithm
    if ( !data )
      return;

    // Rule L4
    for ( dataPtr = dataEnd - 1; dataPtr >= 3; dataPtr-- )
    {
      var status = data[ dataPtr * 4 + 2 ];

      // Rule L4
      if (( data[ dataPtr * 4 + 1 ] & 1 ) && (( status === 1 ) ||
          ( status === 2 ) || ( status === 3 )))
      {
        var pair = GetMirrorGlyph( aString[ aStringInx + dataPtr - 3 ]);

        if ( pair )
          aString[ aStringInx + dataPtr - 3 ] = pair;  
      }
    }
  };

  // ---------------------------------------------------------------------------
  // The function BidiCompleteRow() performs the part of the Bidi-Algorithm 
  // after text wrap has been applied on a row. Accordingly it runs the final 
  // rules of the Bidi-Algorithm on a single text row only.
  // ---------------------------------------------------------------------------
  emwi._BidiCompleteRow = function( aBidi, aRowStart, aRowEnd )
  {
    var data           = aBidi? aBidi.Data : null;
    var dataStart      = aRowStart + 3;
    var dataEnd        = aRowEnd + 3;
    var paragraphLevel = aBidi? aBidi.ParagraphLevel : 0;
    var applyL1        = true;
    var dataPtr;

    // No Bidi context to apply the algorithm
    if ( !data )
      return;

    // Rule L1
    for ( dataPtr = dataEnd - 1; dataPtr >= dataStart; dataPtr-- )
    {
      var status = data[ dataPtr * 4 + 2 ];

      // Rule L1
      if ( status === 6 )
      {
        data[ dataPtr * 4 + 1 ] = paragraphLevel;
        applyL1 = true;
      }

      else if ( applyL1 && (( status === 5 ) || ( status === 7 )))
        data[ dataPtr * 4 + 1 ] = paragraphLevel;

      // Ignore all marks removed and restored again at the and of the process
      // phase. The algorithm expects these signs to not exist
      else if ( data[ dataPtr * 4 ] !== 31 )
        applyL1 = 0;
    }
  };
  
  // ---------------------------------------------------------------------------
  // The function BidiReorderChars() performs the reordering of the orignal
  // text entities within a text row aArray according to the previously 
  // estimated Bidirun levels. The operation is limited to a single text row.
  // ---------------------------------------------------------------------------
  emwi._BidiReorderArray = function( aBidi, aRowStart, aRowEnd, aArray, 
    aArrayInx )
  {
    var stack        = [];
    var data         = aBidi? aBidi.Data : null;
    var dataStart    = aRowStart + 3;
    var dataEnd      = aRowEnd + 3;
    var start        = dataStart;
    var level        = 0;
    var reorderStart = 0;
    var reorderEnd   = 0;
    var dataPtr;

    // No Bidi context to apply the algorithm
    if ( !data )
      return;

    // Rule L2 
    for ( dataPtr = dataStart; dataPtr <= dataEnd; dataPtr++ )
    {
      var curLevel = ( dataPtr < dataEnd )? data[ dataPtr * 4 + 1 ] : 0;

      // Entering nested level run
      while (( curLevel > level ) && ( level < ( 125 + 2 )))
      {
        stack.push( start );
        start = dataPtr;
        level++;
      }
    
      // Leaving a nested level run.
      while (( curLevel < level ) && ( level > 0 ))
      {
        var start2 = start;

        // ... and remove the entry from the stack
        start = stack.pop();
        level--;

        // Reorder the characters between start und dataPtr 
        if (( dataPtr - start2 ) > 1 )
        {
          var str1 = start2  - dataStart;
          var str2 = dataPtr - dataStart - 1;
        
          // Avoid double reordering of the same character sequence
          if (( str1 === reorderStart ) && ( str2 === reorderEnd ))
          {
            reorderStart = 0;
            reorderEnd   = 0;
            continue;
          }
        
          // Reorder the remembered sequence now.
          for ( ; reorderStart < reorderEnd; reorderStart++, reorderEnd-- )
          {
            var tmp = aArray[ reorderStart + aArrayInx ];
            aArray[ reorderStart + aArrayInx ] = aArray[ reorderEnd + aArrayInx ];
            aArray[ reorderEnd   + aArrayInx ] = tmp;
          }
        
          // Remember the new sequence for later reordering
          reorderStart = str1;
          reorderEnd   = str2;
        }
      }
    }

    // Any outstanding sequence waiting for reordering?
    for ( ; reorderStart < reorderEnd; reorderStart++, reorderEnd-- )
    {
      var tmp = aArray[ reorderStart + aArrayInx ];
      aArray[ reorderStart + aArrayInx ] = aArray[ reorderEnd + aArrayInx ];
      aArray[ reorderEnd   + aArrayInx ] = tmp;
    }
  };

  // ---------------------------------------------------------------------------
  // The function BidiReorderIndex() estimates the resulting index of a given
  // text entity after applying the Bidi reorder algorithm. In other words, it
  // returns the display position of a character within the original text row
  // after the row has been reordered.
  // ---------------------------------------------------------------------------
  emwi._BidiReorderIndex = function( aBidi, aRowStart, aRowEnd, aIndex )
  {
    var stack     = [];
    var data      = aBidi? aBidi.Data : null;
    var dataStart = aRowStart + 3;
    var dataEnd   = aRowEnd   + 3;
    var start     = dataStart;
    var level     = 0;
    var dataPtr;

    // No Bidi context to apply the algorithm
    if ( !data )
      return aIndex;

    // Rule L2 
    for ( dataPtr = dataStart; dataPtr <= dataEnd; dataPtr++ )
    {
      var curLevel = ( dataPtr < dataEnd )? data[ dataPtr * 4 + 1 ] : 0;

      // Entering nested level run
      while (( curLevel > level ) && ( level < ( 125 + 2 )))
      {
        stack.push( start );
        start = dataPtr;
        level++;
      }
    
      // Leaving a nested level run.
      while (( curLevel < level ) && ( level > 0 ))
      {
        var start2 = start;

        // ... and remove the entry from the stack
        start = stack.pop();
        level--;

        // Reorder the characters between start und dataPtr
        if (( dataPtr - start2 ) > 1 )
        {
          var inx1 = start2  - dataStart;
          var inx2 = dataPtr - dataStart - 1;

          if (( aIndex >= inx1 ) && ( aIndex <= inx2 ))
            aIndex = inx2 - ( aIndex - inx1 );
        }
      }
    }

    return aIndex;
  };
  
  // ---------------------------------------------------------------------------
  // The function BidiReverseReorderIndex() estimates the original index of a
  // given text entity before applying the Bidi reorder algorithm. In other 
  // words, it returns the position of the character within the original text
  // row corresponding to the given display position in the reordered row.
  // ---------------------------------------------------------------------------
  emwi._BidiReverseReorderIndex = function( aBidi, aRowStart, aRowEnd, aIndex )
  {
    var starts    = [];
    var ends      = [];
    var data      = aBidi? aBidi.Data : null;
    var dataStart = aRowStart + 3;
    var start     = 0;
    var end       = aRowEnd - aRowStart - 1;
    var level     = 0;
    var inx       = 0;

    // No Bidi context to apply the algorithm
    if ( !data )
      return aIndex;

    // This algorithm is optimized to not to use too much of the CPU stack.
    // This, however, limits a single text row to 65535 characters. In such case
    // return the index without reordering it
    if ( end > 65535 )
      return aIndex;

    // Build up a stack with start/end indices in the text row determining the
    // begin and the end of a particular level
    while ( start < end )
    {
      var curLevelStart = data[( dataStart + start ) * 4 + 1 ];
      var curLevelEnd   = data[( dataStart + end   ) * 4 + 1 ];

      // Entering an area with nested level runs?
      if (( curLevelStart > level ) && ( curLevelEnd > level ) && 
          ( level < ( 125 + 2 )))
      {
        starts.push( start );
        ends.push( end );
        level++;
      }

      // Within the same level run?
      if ( curLevelStart <= level ) start++;
      if ( curLevelEnd   <= level ) end--;
    }

    // Evaluate the estimated areas of level runs and test whether the area
    // affects position of the original index
    while (( inx < level ) && ( aIndex >= starts[inx]) && ( aIndex <= ends[inx]))
    {
      var areaStart = starts[ inx ];
      var areaEnd   = ends[ inx ];
      var inx1      = aIndex;
      var inx2      = aIndex;

      // Estimate the start/end of the level run
      while (( inx1 > areaStart ) && ( data[( dataStart + inx1 - 1 ) * 4 + 1 ] > inx )) inx1--;
      while (( inx2 < areaEnd   ) && ( data[( dataStart + inx2 + 1 ) * 4 + 1 ] > inx )) inx2++;

      // Convert the position with the level run
      aIndex = inx2 - ( aIndex - inx1 );
      inx++;
    }

    return aIndex;
  };

  // ---------------------------------------------------------------------------
  // The function BidiGetTypesAndLevels() exists for test purpose only. The 
  // function copies all estimates Bidi types and levels from aBidi context to
  // the corresponding entries in the both arrays aTypes and aLevels. Note, the
  // arrays have to be large enough!
  // ---------------------------------------------------------------------------
  emwi._BidiGetTypesAndLevels = function( aBidi, aTypes, aLevels )
  {
    var data = aBidi? aBidi.Data : null;
    var len  = aBidi? aBidi.Size : 0;
    var inx  = 0;

    // Iterate through the estimated types/levels and copy them 
    while ( inx < len )
    {
      aTypes[inx]  = data[ inx * 4 + 12 ];
      aLevels[inx] = data[ inx * 4 + 13 ];
      inx++;
    }
  };

  // ---------------------------------------------------------------------------
  // The function DrawLine() draws a line between the coordinates aDstPos1 and
  // aDstPos2 within the destination bitmap aDst. The line will be drawn with a
  // color gradient specified by the both color values aColor1 and aColor2.
  // An additional clipping area aClipRect limits the operation. All pixel lying
  // outside this area will not be drawn. The last aBlend parameter controls the
  // mode how drawn pixel are combined with the pixel already existing in the
  // destination bitmap. If aBlend == true, the drawn pixel are alpha-blended 
  // with the background, otherwise the drawn pixel will overwrite the old 
  // content.
  // ---------------------------------------------------------------------------
  emwi._DrawLine = function( aDst, aDstFrameNo, aClipRect, aDstPos1, aDstPos2,
    aColor1, aColor2, aBlend )
  {
    var gl       = this._Context;
    var dst      = null;
    var dstPos1X = aDstPos1[0];
    var dstPos1Y = aDstPos1[1];
    var dstPos2X = aDstPos2[0];
    var dstPos2Y = aDstPos2[1];
    var dstX2    = dstPos2X;
    var dstY2    = dstPos2Y;
    var w        = dstPos2X - dstPos1X;
    var h        = dstPos2Y - dstPos1Y;
    var x1, y1, x2, y2;

    // Select the destination bitmap frame for this operation
    if ( aDst && ( aDstFrameNo >= 0 ) && ( aDstFrameNo < aDst.NoOfFrames ))
    {
      aDstFrameNo = aDst.Mapping? aDst.Mapping[ aDstFrameNo ] : aDstFrameNo;
      dst = aDst.Frames[ aDstFrameNo ];
    }

    // Only native surfaces are allowed as the destination
    if ( !dst || ( dst.Surface.Format !== this._PIXEL_FORMAT_NATIVE ))
    {
      console.log( "EmWi error: Invalid destination bitmap in the drawing operation." );
      return;
    }

    // The end position refers to the non visible pixel - get the position of
    // the last visible pixel
    if ( Math.abs( dstPos2X - dstPos1X ) > Math.abs( dstPos2Y - dstPos1Y ))
    {
      if ( dstX2 > dstPos1X ) dstX2--;
      if ( dstX2 < dstPos1X ) dstX2++;
    }
    else
    {
      if ( dstY2 > dstPos1Y ) dstY2--;
      if ( dstY2 < dstPos1Y ) dstY2++;
    }

    // Limit the fill area to the frame boundary and to the clipping area
    x1 = Math.max( aClipRect[0], Math.min( dstPos1X, dstX2 ), 0 );
    y1 = Math.max( aClipRect[1], Math.min( dstPos1Y, dstY2 ), 0 );
    x2 = Math.min( aClipRect[2], Math.max( dstPos1X, dstX2 ) + 1,
                                 aDst.FrameSize[0]);
    y2 = Math.min( aClipRect[3], Math.max( dstPos1Y, dstY2 ) + 1,
                                 aDst.FrameSize[1]);

    // Nothing to do?
    if (( x2 <= x1 ) || ( y2 <= y1 ))
      return;

    // Initialize the vertices for the start and end point der line
    var dx    = dst.Origin[0];
    var dy    = dst.Origin[1];
    var v1    = gl.vertexCoords;
    var v2    = gl.vertexColors;
    var count = 2;

    // Complete the vertex settings for this operation
    v1[0 ] = dstPos1X + dx + 0.5; 
    v1[1 ] = dstPos1Y + dy + 0.5;
    v1[11] = dstPos2X + dx + 0.5;
    v1[12] = dstPos2Y + dy + 0.5;
    v2[5 ] = aColor1;
    v2[16] = aColor2;
    
    // The lines are stroked always between the pixel center positions. Adjust 
    // the clipping area to accept the center of the line end position. 
    if ( w > 0 ) x2 += 0.5;
    if ( w < 0 ) x1 -= 0.5;
    if ( h > 0 ) y2 += 0.5;
    if ( h < 0 ) y1 -= 0.5;

    // Is the line affected by clipping? If yes, intersect the line
    if (( dstPos1X < x1 ) || ( dstPos1X > x2 ) || 
        ( dstPos1Y < y1 ) || ( dstPos1Y > y2 ) ||
        ( dstPos2X < x1 ) || ( dstPos2X > x2 ) || 
        ( dstPos2Y < y1 ) || ( dstPos2Y > y2 ))
    {
      count = IntersectPathVertical  ( v1, v2, count, true,  x1 + dx );
      count = IntersectPathVertical  ( v1, v2, count, true,  x2 + dx );
      count = ClipPathVertical       ( v1, count, x1 + dx, x2 + dx );
      count = IntersectPathHorizontal( v1, v2, count, true,  y1 + dy );
      count = IntersectPathHorizontal( v1, v2, count, true,  y2 + dy );
      count = ClipPathHorizontal     ( v1, count, y1 + dy, y2 + dy );

      // Entire line outside the clipping area
      if ( count !== 2 )
        return;
    }
    
    // Determine the drawing destination and activate the adequate shader program
    SelectDst( gl, dst.Surface, gl.Program1 );

    // Determine the alpha-blending mode to apply for this operation
    if (  gl.IsAlphaBlend && !aBlend ) gl.disable( gl.BLEND );
    if ( !gl.IsAlphaBlend &&  aBlend ) gl.enable ( gl.BLEND );
    gl.IsAlphaBlend = aBlend;

    // Transfer the vertex data and initiate the primitive drawing operation
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, gl.vertexBuffer );
    gl.drawArrays( gl.LINES, 0, count );

    // Print evtl. WebGL error messages and terminate
    if ( this._Debug )
      PrintWebGLErrors( gl );
  };
  
  // ---------------------------------------------------------------------------
  // The function FillRectangle() fills the rectangular area aDstRect of the
  // bitmap aDst with a color gradient specified by the four color parameters
  // aColorTL .. aColorBL.
  // An additional clipping area aClipRect limits the operation. All pixel lying
  // outside this area will not be drawn. The last aBlend parameter controls the
  // mode how drawn pixel are combined with the pixel already existing in the
  // destination bitmap. If aBlend == true, the drawn pixel are alpha-blended 
  // with the background, otherwise the drawn pixel will overwrite the old 
  // content.
  // ---------------------------------------------------------------------------
  emwi._FillRectangle = function( aDst, aDstFrameNo, aClipRect, aDstRect,
    aColorTL, aColorTR, aColorBR, aColorBL, aBlend )
  {
    var gl  = this._Context;
    var dst = null;
    var x1, y1, x2, y2;

    // Select the destination bitmap frame for this operation
    if ( aDst && ( aDstFrameNo >= 0 ) && ( aDstFrameNo < aDst.NoOfFrames ))
    {
      aDstFrameNo = aDst.Mapping? aDst.Mapping[ aDstFrameNo ] : aDstFrameNo;
      dst = aDst.Frames[ aDstFrameNo ];
    }

    // Only native surfaces are allowed as the destination
    if ( !dst || ( dst.Surface.Format !== this._PIXEL_FORMAT_NATIVE ))
    {
      console.log( "EmWi error: Invalid destination bitmap in the drawing operation." );
      return;
    }

    // Limit the fill area to the frame boundary and to the clipping area
    x1 = Math.max( aClipRect[0], aDstRect[0], 0 );
    y1 = Math.max( aClipRect[1], aDstRect[1], 0 );
    x2 = Math.min( aClipRect[2], aDstRect[2], aDst.FrameSize[0]);
    y2 = Math.min( aClipRect[3], aDstRect[3], aDst.FrameSize[1]); 

    // Determine the adequate mode to perform the operation
    var clear = !aColorTL && !aColorTR && !aColorBL && !aColorBR;

    // Nothing to do?
    if (( x2 <= x1 ) || ( y2 <= y1 ) || ( clear && aBlend ))
      return;

    // Perform a simple clear operation
    if ( clear )
    {
      var v1 = gl.vertexCoords;

      // Complete the vertex settings for this operation
      v1[0 ] = v1[22] = x1 + dst.Origin[0]; 
      v1[1 ] = v1[12] = y1 + dst.Origin[1];
      v1[11] = v1[33] = x2 + dst.Origin[0];
      v1[34] = v1[23] = y2 + dst.Origin[1];

      // Determine the alpha-blending mode to apply for this operation
      if (  gl.IsAlphaBlend && !aBlend ) gl.disable( gl.BLEND );
      if ( !gl.IsAlphaBlend &&  aBlend ) gl.enable ( gl.BLEND );
      gl.IsAlphaBlend = aBlend;

      // Determine the drawing destination and activate the adequate shader program
      SelectDst( gl, dst.Surface, clear? gl.Program0 : gl.Program1 );

      // Transfer the vertex data and initiate the primitive drawing operation
      gl.bufferSubData( gl.ARRAY_BUFFER, 0, gl.vertexBuffer );
      gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );

      // Print evtl. WebGL error messages and terminate
      if ( this._Debug )
        PrintWebGLErrors( gl );
    
      return;
    }

    // Determine the adequate mode to perform the operation
    var vgradient = ( aColorTL !== aColorBL ) || ( aColorTR !== aColorBR );
    var hgradient = ( aColorTL !== aColorTR ) || ( aColorBL !== aColorBR );
    var gradient  = vgradient || hgradient;

    // Does evtl. clipping affect the gradient filling?
    var vclip = vgradient && (( y1 !== aDstRect[1]) || ( y2 !== aDstRect[3]));
    var hclip = hgradient && (( x1 !== aDstRect[0]) || ( x2 !== aDstRect[2]));

    // Clipping a vertical gradient? The gradient colors at the clipping edges
    // need to be interpolated
    if ( vclip )
    {
      var range = 1 / ( aDstRect[3] - aDstRect[1]);
      var t     = ( y1 -  aDstRect[1]) * range;
      var b     = ( aDstRect[3] - y2 ) * range;
      
      // Left edge of the rectangle ...
      if ( aColorTL !== aColorBL )
      {
        var colorTL = aColorTL;
        if ( t ) aColorTL = InterpolateColor( colorTL,  aColorBL, t );
        if ( b ) aColorBL = InterpolateColor( aColorBL, colorTL,  b );
      }
      
      // Right edge of the rectangle ...
      if ( aColorTR !== aColorBR )
      {
        var colorTR = aColorTR;
        if ( t ) aColorTR = InterpolateColor( colorTR,  aColorBR, t );
        if ( b ) aColorBR = InterpolateColor( aColorBR, colorTR,  b );
      }
    }

    // Clipping a horizontal gradient? The gradient colors at the clipping edges
    // need to be interpolated
    if ( hclip )
    {
      var range = 1 / ( aDstRect[2] - aDstRect[0]);
      var l     = ( x1 -  aDstRect[0]) * range;
      var r     = ( aDstRect[2] - x2 ) * range;
      
      // Upper edge of the rectangle ...
      if ( aColorTL !== aColorTR )
      {
        var colorTL = aColorTL;
        if ( l ) aColorTL = InterpolateColor( colorTL,  aColorTR, l );
        if ( r ) aColorTR = InterpolateColor( aColorTR, colorTL,  r );
      }
      
      // Bottom edge of the rectangle ...
      if ( aColorBL !== aColorBR )
      {
        var colorBL = aColorBL;
        if ( l ) aColorBL = InterpolateColor( colorBL,  aColorBR, l );
        if ( r ) aColorBR = InterpolateColor( aColorBR, colorBL,  r );
      }
    }

    var v1 = gl.vertexCoords;
    var v2 = gl.vertexColors;

    // Complete the vertex settings for this operation
    v1[0 ] = v1[22] = x1 + dst.Origin[0]; 
    v1[1 ] = v1[12] = y1 + dst.Origin[1];
    v1[11] = v1[33] = x2 + dst.Origin[0];
    v1[34] = v1[23] = y2 + dst.Origin[1];
    v2[5 ] = aColorTL;
    v2[16] = aColorTR;
    v2[38] = aColorBR;
    v2[27] = aColorBL;

    // Determine the alpha-blending mode to apply for this operation
    if (  gl.IsAlphaBlend && !aBlend ) gl.disable( gl.BLEND );
    if ( !gl.IsAlphaBlend &&  aBlend ) gl.enable ( gl.BLEND );
    gl.IsAlphaBlend = aBlend;

    // Determine the drawing destination and activate the adequate shader program
    SelectDst( gl, dst.Surface, clear? gl.Program0 : gl.Program1 );

    // Transfer the vertex data and initiate the primitive drawing operation
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, gl.vertexBuffer );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );

    // Print evtl. WebGL error messages and terminate
    if ( this._Debug )
      PrintWebGLErrors( gl );
  };
  
  // ---------------------------------------------------------------------------
  // The function DrawBorder() draws a rectangle border within the area aDstRect
  // of the bitmap aDst with a color gradient specified by the color parameters
  // aColorTL .. aColorBL. The parameter aEdgeWidth determines the width of the
  // border's edge.
  // An additional clipping area aClipRect limits the operation. All pixel lying
  // outside this area will not be drawn. The last aBlend parameter controls the
  // mode how drawn pixel are combined with the pixel already existing in the
  // destination bitmap. If aBlend == true, the drawn pixel are alpha-blended 
  // with the background, otherwise the drawn pixel will overwrite the old 
  // content.
  // ---------------------------------------------------------------------------
  emwi._DrawBorder = function( aDst, aDstFrameNo, aClipRect, aDstRect, 
    aEdgeWidth, aColorTL, aColorTR, aColorBR, aColorBL, aBlend )
  {
    // Nothing to draw
    if ( aEdgeWidth <= 0 )
      return;

    // The edge is so big that the entire aDstRect area appears filled
    if ((( aEdgeWidth * 2 ) >= ( aDstRect[2] - aDstRect[0])) ||
        (( aEdgeWidth * 2 ) >= ( aDstRect[3] - aDstRect[1])))
    {
      this._FillRectangle( aDst, aDstFrameNo, aClipRect, aDstRect, aColorTL,
                           aColorTR, aColorBR, aColorBL, aBlend );
      return;
    }

    var dstRect  = [ 0, 0, 0, 0 ];
    var clipRect;

    // Calculate the area for the upper border edge
    dstRect[0] = aDstRect[0];
    dstRect[1] = aDstRect[1];
    dstRect[2] = aDstRect[2];
    dstRect[3] = aDstRect[1] + aEdgeWidth;
    clipRect = this._IntersectRect( aClipRect, dstRect );

    // Draw the upper edge of the border
    this._FillRectangle( aDst, aDstFrameNo, clipRect, aDstRect, aColorTL,
                     aColorTR, aColorBR, aColorBL, aBlend );

    // Calculate the area for the bottom border edge
    dstRect[0] = aDstRect[0];
    dstRect[1] = aDstRect[3] - aEdgeWidth;
    dstRect[2] = aDstRect[2];
    dstRect[3] = aDstRect[3];
    clipRect = this._IntersectRect( aClipRect, dstRect );

    // Draw the upper edge of the border
    this._FillRectangle( aDst, aDstFrameNo, clipRect, aDstRect, aColorTL,
                     aColorTR, aColorBR, aColorBL, aBlend );

    // Calculate the area for the left border edge
    dstRect[0] = aDstRect[0];
    dstRect[1] = aDstRect[1] + aEdgeWidth;
    dstRect[2] = aDstRect[0] + aEdgeWidth;
    dstRect[3] = aDstRect[3] - aEdgeWidth;
    clipRect = this._IntersectRect( aClipRect, dstRect );

    // Draw the upper edge of the border
    this._FillRectangle( aDst, aDstFrameNo, clipRect, aDstRect, aColorTL,
                     aColorTR, aColorBR, aColorBL, aBlend );

    // Calculate the area for the left border edge
    dstRect[0] = aDstRect[2] - aEdgeWidth;
    dstRect[2] = aDstRect[2];
    clipRect = this._IntersectRect( aClipRect, dstRect );

    // Draw the upper edge of the border
    this._FillRectangle( aDst, aDstFrameNo, clipRect, aDstRect, aColorTL,
                     aColorTR, aColorBR, aColorBL, aBlend );
  };

  // ---------------------------------------------------------------------------
  // The function CreatePath() creates a new path and reserves memory for up
  // aMaxNoOfSubPaths sub-paths. The sub-paths are initially empty. Before data
  // can be stored in a sub-path the function EwInitSubPath() should be called.
  // Once the path is prepared and loaded with coordinate information, the path
  // can be passed to the FillPath() and StrokePath() functions. If not used
  // anymore the path should be freed by using the function FreePath().
  // If successful, the function returns an object representing  the newly
  // created path. Otherwise the function returns null.
  // ---------------------------------------------------------------------------
  emwi._CreatePath = function( aMaxNoOfSubPaths )
  {
    // The parameter is invalid
    if ( aMaxNoOfSubPaths < 1 )
      return null;

    return { 
      MaxNoOfSubPaths : aMaxNoOfSubPaths,
      NoOfOpenedPaths : 0,
      NoOfClosedPaths : 0,
      NoOfEdges       : 0,
      IsValid         : true,
      Bounds          : [ 0, 0, 0, 0 ],
      Matrix          : [ 1.0, 0.0, 0.0, 0.0, 1.0, 0.0 ],
      MatrixStack     : [],
      SubPaths        : new Array( aMaxNoOfSubPaths )
    };
  };

  // This helper function skips over all white-space (and separator)
  // characters found in aSVGString and returns the pointer to the next
  // valid sign.
  function SkipSVGSpace( aString, aStringInx )
  {
    var c = aString.charCodeAt( aStringInx );

    // Skip over leading white-space as well as separator signs
    while (( c === 0x20 ) || ( c === 0x09 ) || ( c === 0x0A ) ||
           ( c === 0x0D ) || ( c === 0x2C ) || ( c === 0x0C ))
      c = aString.charCodeAt( ++aStringInx );

    return aStringInx;
  }

  // This helper function tries to parse a number literal found in the string
  // aSVGString. aSVGString is an array containing in its element [0] the string
  // and in element [1] the position within the string. Eventual leading white-
  // space signs are skipped over. If the function was successful, the number is
  // stored in the element aResultInx of the array aResult and the function
  // returns 'true'.
  function ParseSVGNumber( aSVGString, aResult, aResultInx )
  {
    // Skip over evtl. leading white -space signs
    var string = aSVGString[0]; 
    var start  = SkipSVGSpace( string, aSVGString[1]);
    var ptr    = start;
    var num    = 0.0;
    var exp    = 0.1;
    var count  = 0;
    var sign   = 1;
    var c      = string.charCodeAt( ptr );

    // Evaluate the +/- sign
    if (( c === 0x2B ) || ( c === 0x2D ))
    {
      sign = ( c === 0x2D )? -1 : 1;
      c    = string.charCodeAt( ++ptr );
    }

    // Skip over leading digits
    while (( c >= 0x30  ) && ( c <= 0x39 ))
    {
      num = num * 10 + ( c - 0x30 );
      c   = string.charCodeAt( ++ptr );
      count++;
    }

    // Skip over the period sign
    if ( c === 0x2E ) 
      c = string.charCodeAt( ++ptr );

    // Skip over following digits
    while (( c >= 0x30  ) && ( c <= 0x39 ))
    {
      num += exp * ( c - 0x30 );
      exp *= 0.1;
      c   = string.charCodeAt( ++ptr );
      count++;
    }

    // No valid number found
    if ( !count )
    {
      aSVGString[1] = start;
      return false;
    }

    // scientific notation e^x ?
    if (( c === 0x65 ) || ( c === 0x45 ))
    {
      var eSign  = 1;
      var eNum   = 0.0;
      var eCount = 0;

      // Skip over the 'e' sign
      c = string.charCodeAt( ++ptr );

      // Evaluate the +/- sign
      if (( c === 0x2B ) || ( c === 0x2D ))
      {
        eSign = ( c === 0x2D )? -1 : 1;
        c     = string.charCodeAt( ++ptr );
      }

      // Skip over digits
      while (( c >= 0x30  ) && ( c <= 0x39 ))
      {
        eNum = eNum * 10 + ( c - 0x30 );
        c    = string.charCodeAt( ++ptr );
        eCount++;
      }

      // No valid number found
      if ( !eCount )
      {
        aSVGString[1] = start;
        return false;
      }

      // Calculate the exponent part
      num = num * Math.pow( 10.0, ( eSign < 0 )? -eNum : eNum );
    }

    // Retun the parsed number
    aSVGString[1] = ptr;
    aResult[ aResultInx ] = ( sign < 0 )? -num : num;
    return true;
  }

  // This helper function tries to parse a flag literal (0 or 1) found in the
  // string aSVGString. aSVGString is an array containing in its element [0] 
  // the string and in element [1] the position within the string. Eventual
  // leading white-space signs are skipped over. If the function was successful,
  // the flag is stored in the element aResultInx of the array aResult and the
  // returns 'true'.
  function ParseSVGFlag( aSVGString, aResult, aResultInx )
  {
    // Skip over evtl. leading white -space signs
    var string = aSVGString[0]; 
    var start  = SkipSVGSpace( string, aSVGString[1]);
    var ptr    = start;
    var c      = string.charCodeAt( ptr );

    if (( c === 0x30 ) || ( c == 0x31 ))
    {
      aResult[ aResultInx ] = ( c === 0x31 );
      c = string.charCodeAt( ++ptr );
    }

    aSVGString[1] = ptr;
    
    // Could skip over some data?
    return ptr > start;
  }

  // The following function is used during parsing an SVG string. It verifies,
  // whether the given sub-path has enough space for at least aNoOfEdges new
  // coordinate values. Is this the case, the function does nothing and returns
  // aVubPathNo. If there is not enough space, the function tries to reallocate
  // the already collected sub-path data to the next sub-path by increasing its
  // capacity. The function returns then the index of the new sub-path. 
  function EnlargeSVGBufPath( aPath, aSubPathNo, aNoOfEdges )
  {
    var subPath       = aPath.SubPaths[ aSubPathNo ];
    var noOfFreeEdges = subPath.Capacity - subPath.NoOfEdges;

    // Not necessary to enlarge the buffer?
    if ( noOfFreeEdges >= aNoOfEdges )
       return aSubPathNo;

    var newSubPathNo = ( aSubPathNo + 1 ) % 2;

    // Try to enlarge the buffer
    this._InitSubPath( aPath, newSubPathNo, subPath.NoOfEdges + aNoOfEdges + 256 );
    
    // Transfer the path data to the enlarged sub-path.
    this._AddSubPathCopy( aPath, newSubPathNo, aPath, aSubPathNo, 0, noOfEdges );

    return newSubPathNo;
  }

  // ---------------------------------------------------------------------------
  // The function CreatePathFromSVGString() creates a new path according to SVG
  // path instructions found in the passed aSVGString parameter.
  // If successful, the function returns a pointer to the newly created path.
  // Otherwise the function returns null. If the specified SVG string contains 
  // errors, the function stops and returns the already prepared path without
  // evaluating further SVG data. The success of the operation or error status
  // can be queried by the functions GetSVGParserStatus() and 
  // GetSVGParserErrorPos().
  // The parameter aScaleX and aScaleY specify scaling factors to apply on the
  // original SVG coordinates. The values affect also how smooth curves are
  // composed from line segments. The larger a curve the more segments are used.
  // The parameter aDelaX and aDeltaY provide an additional offset to add to the
  // original SVG coordinates. This results in a translation of the SVG path.
  // The parameter aAngle determines an additional rotation transformation on 
  // the original SVG coordinates. The angle is expressed in degree and measured
  // clockwise relative to the positive X-axis. The rotation is performed around
  // the origin position (X:0, Y:0) of the original SVG coordinates.
  // ---------------------------------------------------------------------------
  emwi._CreatePathFromSVGString = function( aSVGString, aScaleX, aScaleY, 
    aDeltaX, aDeltaY, aAngle )
  {
    var svgString    = [ aSVGString, SkipSVGSpace( aSVGString, 0 )];
    var ptr          = [ aSVGString, svgString[1]];
    var cmdPtr       = 0;
    var pixel2Edges  = ( Math.abs( aScaleX ) + Math.abs( aScaleY )) / 16;
    var pendingZ     = false;
    var count        = 0;
    var angle        = 0.0;
    var cpx          = 0.0;
    var cpy          = 0.0;
    var x            = [ 0.0, 0.0, 0.0, 0.0 ];
    var y            = [ 0.0, 0.0, 0.0, 0.0 ];
    var angle        = [ 0.0 ];
    var f            = [ false, false, false ];
    var c            = aSVGString.charCodeAt( ptr[1]);
    var noOfEdges;

    // Helper function to calculate the distance between two points
    function Distance( aX1, aY1, aX2, aY2 )
    {
      return Math.sqrt(( aX1 - aX2 ) * ( aX1 - aX2 ) + 
                       ( aY1 - aY2 ) * ( aY1 - aY2 ));
    }

    // Reset the error status when parsing a new SVG string 
    this._SVGParserStatus   = this._SVG_PARSER_SUCCESS;
    this._SVGParserErrorPos = -1;

    // Any path data to process? If not, the path is empty. This is legal.
    if ( !c )
    {
      this._SVGParserStatus = this._SVG_PARSER_EMPTY_STRING;
      return null;
    }

    // The path has always to begin with a MOVE command
    if (( c !== 0x6D ) && ( c !== 0x4D ))
    {
      this._SVGParserStatus   = this._SVG_PARSER_SYNTAX_ERROR;
      this._SVGParserErrorPos = ptr[1];
      return null;
    }

    // In the first path scan the SVG string and estimate the number of
    // enclosed sub-paths .
    for ( ; c; c = aSVGString.charCodeAt( ++ptr[1]))
    {
      c = (( c >= 0x61 ) && ( c <= 0x7A ))? c - 0x20 : c;

      if      ( c === 0x4D ) { pendingZ = false; count++; }
      else if ( c === 0x5A )   pendingZ = true;
      else if ( pendingZ && (( c === 0x4C ) || ( c === 0x48 ) || ( c === 0x56 ) || 
              ( c === 0x43 ) || ( c === 0x53 ) || ( c === 0x51 ) || ( c === 0x54 ) ||
              ( c === 0x41 )))
      {
        count++;
        pendingZ = false;
      }
    }

    // Create a new path able to store the given number of sub-paths
    var path = this._CreatePath( count );

    // Also create a 'buffer' path used to store the intermediate path data
    // resulting from the progressive parsing the SVG string. The path will
    // have only 2 sub-path which grow sucessively.
    var bufPath      = this._CreatePath( 2 );
    var bufSubPathNo = 0;

    // Translation and scaling factors to apply on all subsequent line and
    // curve data.
    if (( aDeltaX !== 0.0 ) || ( aDeltaY !== 0.0 ) ||
        ( aScaleX !== 1.0 ) || ( aDeltaY !== 1.0 ) ||
        ( aAngle  !== 0.0 ))
    {
      this._TranslatePathMatrix( path, aDeltaX, aDeltaY );
      this._RotatePathMatrix( path, aAngle );
      this._ScalePathMatrix( path, aScaleX, aScaleY );
    }

    // Reserve memory for the first set of path data 
    this._InitSubPath( bufPath, 0, 256 );

    // Process the SVG string sub-path by sub-path. Evaluate the commands
    // and synthese the adequate Embedded Wizard path object.
    for ( count = 0, ptr[1] = svgString[1]; aSVGString.charCodeAt( ptr[1]);
          count++ )
    {
      var prevCmd = 0;
      var cmd     = 0;
      var cmdNo   = 0;

      // Start position for a new sub-path 
      this._BeginSubPath( bufPath, bufSubPathNo, cpx, cpy );

      // Process the commands 
      for ( ; aSVGString.charCodeAt( ptr[1]); cmdNo++ )
      {
        prevCmd = cmd;
        cmd     = aSVGString.charCodeAt( ptr[1]);

        // Begin of a new sub-path? 
        if ( cmdNo && (( cmd === 0x6D ) || ( cmd === 0x4D )))
          break;

        // Skip over the command
        ptr[1]++;

        // Initiates a new sub-path followed by optional straight line
        // segments.
        if (( cmd === 0x6D ) || ( cmd === 0x4D ))
        {
          if ( !ParseSVGNumber( ptr, x, 1 ) || !ParseSVGNumber( ptr, y, 1 ))
            return SVG_SYNTAX_ERROR( this );

          if ( cmd === 0x4D ) { cpx  = x[1]; cpy  = y[1]; }
          else                { cpx += x[1]; cpy += y[1]; }
          
          // Start position for a new sub-path
          this._BeginSubPath( bufPath, bufSubPathNo, cpx, cpy );

          // Followed by optional line segments?
          while ( ParseSVGNumber( ptr, x, 1 ))
          {
            if ( !ParseSVGNumber( ptr, y, 1 ))
              return SVG_SYNTAX_ERROR( this );

            bufSubPathNo = EnlargeSVGBufPath( bufPath, bufSubPathNo, 1 );

            if ( cmd === 0x4D ) { cpx  = x[1]; cpy  = y[1]; }
            else                { cpx += x[1]; cpy += y[1]; }

            // Append the line segment
            this._AddSubPathLine( bufPath, bufSubPathNo, cpx, cpy );
          }
        }

        // Straight line command
        else if (( cmd === 0x6C ) || ( cmd === 0x4C ))
        {
          if ( !ParseSVGNumber( ptr, x, 1 ))
            return SVG_SYNTAX_ERROR( this );
        
          // Repeat as long as line segments follow
          do
          {
            if ( !ParseSVGNumber( ptr, y, 1 ))
              return SVG_SYNTAX_ERROR( this );
        
            bufSubPathNo = EnlargeSVGBufPath( bufPath, bufSubPathNo, 1 );
            
            if ( cmd === 0x4C ) { cpx  = x[1]; cpy  = y[1]; }
            else                { cpx += x[1]; cpy += y[1]; }

            this._AddSubPathLine( bufPath, bufSubPathNo, cpx, cpy );
          }
          while ( ParseSVGNumber( ptr, x, 1 ));
        }
      
        // Horizontal straight line command 
        else if (( cmd === 0x68 ) || ( cmd === 0x48 ))
        {
          if ( !ParseSVGNumber( ptr, x, 1 ))
            return SVG_SYNTAX_ERROR( this );
        
          // Repeat as long as line segments follow
          do
          {
            bufSubPathNo = EnlargeSVGBufPath( bufPath, bufSubPathNo, 1 );

            if ( cmd === 0x48 ) cpx  = x[1];
            else                cpx += x[1];

            this._AddSubPathLine( bufPath, bufSubPathNo, cpx, cpy );
          }
          while ( ParseSVGNumber( ptr, x, 1 ));
        }

        // Vertical straight line command 
        else if (( cmd === 0x76 ) || ( cmd === 0x56 ))
        {
          if ( !ParseSVGNumber( ptr, y, 1 ))
            return SVG_SYNTAX_ERROR( this );
        
          // Repeat as long as line segments follow
          do
          {
            bufSubPathNo = EnlargeSVGBufPath( bufPath, bufSubPathNo, 1 );

            if ( cmd === 0x56 ) cpy  = y[1];
            else                cpy += y[1];

            this._AddSubPathLine( bufPath, bufSubPathNo, cpx, cpy );
          }
          while ( ParseSVGNumber( ptr, y, 1 ));
        }

        // Curve to sequence 
        else if (( cmd === 0x63 ) || ( cmd == 0x43 ))
        {
          if ( !ParseSVGNumber( ptr, x, 1 ))
            return SVG_SYNTAX_ERROR( this );
        
          // Repeat as long as curve coordinates follow
          do
          {
            if ( !ParseSVGNumber( ptr, y, 1 ) || !ParseSVGNumber( ptr, x, 2 ) ||
                 !ParseSVGNumber( ptr, y, 2 ) || !ParseSVGNumber( ptr, x, 3 ) ||
                 !ParseSVGNumber( ptr, y, 3 ))
              return SVG_SYNTAX_ERROR( this );
        
            if ( cmd === 0x63 )
              x[1] += cpx, y[1] += cpy, x[2] += cpx, y[2] += cpy,
              x[3] += cpx, y[3] += cpy;

            // Estimate the length of the curve in pixel. Knowing this estimate
            // the number of edges assuming an edge is ~ 8 pixel long
            noOfEdges = (( Distance( x[1], y[1], cpx,  cpy ) +
                           Distance( x[2], y[2], x[1], y[1]) +
                           Distance( x[3], y[3], x[2], y[2])) * pixel2Edges ) | 0;

            // Very small shape. Add some edges so that it is more precise
            if ( noOfEdges < 8 )
              noOfEdges += 2;

            bufSubPathNo = EnlargeSVGBufPath( bufPath, bufSubPathNo, noOfEdges + 1 );
            this._AddSubPathBezier3( bufPath, bufSubPathNo, x[1], y[1], 
                                     x[2], y[2], x[3], y[3], noOfEdges + 1 );

            cpx = x[3];
            cpy = y[3];
          }
          while ( ParseSVGNumber( ptr, x, 1 ));
        }

        // Smooth curve to sequence 
        else if (( cmd === 0x73 ) || ( cmd === 0x53 ))
        {
          x[1] = x[2];
          y[1] = y[2];

          if ( !ParseSVGNumber( ptr, x, 2 ))
            return SVG_SYNTAX_ERROR( this );
        
          // Repeat as long as curve coordinates follow
          do
          {
            if ( !ParseSVGNumber( ptr, y, 2 ) || !ParseSVGNumber( ptr, x, 3 ) ||
                 !ParseSVGNumber( ptr, y, 3 ))
              return SVG_SYNTAX_ERROR( this );
        
            if ( cmd === 0x73 )
              x[2] += cpx, y[2] += cpy, x[3] += cpx, y[3] += cpy;

            // Control point 1 is a reflection of control point 2 of the preceding
            // curve 
            if (( prevCmd === 0x43 ) || ( prevCmd === 0x63 ) || 
                ( prevCmd === 0x53 ) || ( prevCmd === 0x73 ))
            {
              x[1] = cpx - ( x[1] - cpx );
              y[1] = cpy - ( y[1] - cpy );
            }

            // No preceding command? The first control point is coincident with the
            // current position
            else
              x[1] = cpx, y[1] = cpy;

            // Estimate the length of the curve in pixel. Knowing this estimate
            // the number of edges assuming an edge is ~ 8 pixel long */
            noOfEdges = (( Distance( x[1], y[1], cpx,  cpy ) +
                           Distance( x[2], y[2], x[1], y[1]) +
                           Distance( x[3], y[3], x[2], y[2])) * pixel2Edges ) | 0;

            // Very small shape. Add some edges so that it is more precise
            if ( noOfEdges < 8 )
              noOfEdges += 2;

            bufSubPathNo = EnlargeSVGBufPath( bufPath, bufSubPathNo, noOfEdges + 1 );
            this._AddSubPathBezier3( bufPath, bufSubPathNo, x[1], y[1], 
                                     x[2], y[2], x[3], y[3], noOfEdges + 1 );

            cpx     = x[3]; cpy = y[3];
            x1      = x[2]; y1  = y[2];
            prevCmd = cmd;
          }
          while ( ParseSVGNumber( ptr, x, 2 ));
        }

        // Quadratic Beziér sequence 
        else if (( cmd === 0x71 ) || ( cmd === 0x51 ))
        {
          if ( !ParseSVGNumber( ptr, x, 1 ))
            return SVG_SYNTAX_ERROR( this );
        
          // Repeat as long as curve coordinates follow 
          do
          {
            if ( !ParseSVGNumber( ptr, y, 1 ) || !ParseSVGNumber( ptr, x, 2 ) ||
                 !ParseSVGNumber( ptr, y, 2 ))
              return SVG_SYNTAX_ERROR( this );

            if ( cmd === 0x71 )
              x[1] += cpx, y[1] += cpy, x[2] += cpx, y[2] += cpy;

            // Estimate the length of the curve in pixel. Knowing this estimate
            // the number of edges assuming an edge is ~ 8 pixel long
            noOfEdges = (( Distance( x[1], y[1], cpx,  cpy ) +
                           Distance( x[2], y[2], x[1], y[1])) * pixel2Edges ) | 0;

            // Very small shape. Add some edges so that it is more precise
            if ( noOfEdges < 8 )
              noOfEdges += 2;

            bufSubPathNo = EnlargeSVGBufPath( bufPath, bufSubPathNo, noOfEdges + 1 );
            this._AddSubPathBezier2( bufPath, bufSubPathNo, x[1], y[1], x[2], y[2],
                                     noOfEdges + 1 );

            cpx = x[2];
            cpy = y[2];
          }
          while ( ParseSVGNumber( ptr, x, 1 ));
        }

        // Smooth quadratic Beziér sequence 
        else if (( cmd === 0x74 ) || ( cmd === 0x54 ))
        {
          if ( !ParseSVGNumber( ptr, x, 2 ))
            return SVG_SYNTAX_ERROR( this );
        
          // Repeat as long as coordinates follow 
          do
          {
            if ( !ParseSVGNumber( ptr, y, 2 ))
              return SVG_SYNTAX_ERROR( this );

            if ( cmd === 0x74 )
              x[2] += cpx, y[2] += cpy;

            // Control point is a reflection of control point of the preceding
            // curve 
            if (( prevCmd === 0x51 ) || ( prevCmd === 0x71 ) || 
                ( prevCmd === 0x54 ) || ( prevCmd === 0x74 ))
            {
              x[1] = cpx - ( x[1] - cpx );
              y[1] = cpy - ( y[1] - cpy );
            }

            // No preceding command? The first control point is coincident with the
            // current position
            else
              x[1] = cpx, y[1] = cpy;

            // Estimate the length of the curve in pixel. Knowing this estimate
            // the number of edges assuming an edge is ~ 8 pixel long 
            noOfEdges = (( Distance( x[1], y[1], cpx, cpy ) +
                           Distance( x[2], y[2], x[1], y[1])) * pixel2Edges ) | 0;

            // Very small shape. Add some edges so that it is more precise
            if ( noOfEdges < 8 )
              noOfEdges += 2;

            bufSubPathNo = EnlargeSVGBufPath( bufPath, bufSubPathNo, noOfEdges + 1 );
            this._AddSubPathBezier2( bufPath, bufSubPathNo, x[1], y[1], x[2], y[2],
                                     noOfEdges + 1 );

            cpx     = x[2];
            cpy     = y[2];
            prevCmd = cmd;
          }
          while ( ParseSVGNumber( ptr, x, 2 ));
        }

        // Elliptical arc sequence
        else if (( cmd === 0x61 ) || ( cmd === 0x41 ))
        {
          // Remember the start position of the command - for error messages
          cmdPtr = ptr[1] - 1;

          if ( !ParseSVGNumber( ptr, x, 0 ))
            return SVG_SYNTAX_ERROR( this );
        
          // Repeat as long as coordinates follow
          do
          {
            x[1] = cpx;
            y[1] = cpy;

            if ( !ParseSVGNumber( ptr, y, 0 ) || !ParseSVGNumber( ptr, angle, 0 ) ||
                 !ParseSVGFlag  ( ptr, f, 1 ) || !ParseSVGFlag  ( ptr, f, 2 ) ||
                 !ParseSVGNumber( ptr, x, 2 ) || !ParseSVGNumber( ptr, y, 2 ))
              return SVG_SYNTAX_ERROR( this );

            if ( cmd === 0x61 )
              x[2] += cpx, y[2] += cpy;

            // radius rx or ry cannot be zero or negative
            if (( x[0] <= 0 ) || ( y[0] <= 0 ))
              return SVG_ARGUMENT_ERROR( this );

            // Conversion from SVG endpoint paremeterization to center parameterization
            // according https://www.w3.org/TR/SVG/implnote.html
            var s_phi = Math.sin( angle[0] * this._Deg2Rad );
            var c_phi = Math.cos( angle[0] * this._Deg2Rad );
            var hd_x  = ( x[1] - x[2]) / 2;
            var hd_y  = ( y[1] - y[2]) / 2;
            var hs_x  = ( x[1] + x[2]) / 2;
            var hs_y  = ( y[1] + y[2]) / 2;

            // equation 5.1
            var x1_ = c_phi * hd_x + s_phi * hd_y;
            var y1_ = c_phi * hd_y - s_phi * hd_x;

            // equation 6.2 and 6.3 - ensure radii are large enough
            var lambda = ( x1_ * x1_ ) / ( x[0] * x[0]) + ( y1_ * y1_ ) / ( y[0] * y[0]);

            if ( lambda > 1 ) 
            {
              x[0] = x[0] * Math.sqrt( lambda );
              y[0] = y[0] * Math.sqrt( lambda );
            }

            // equation 5.2 
            var rxry  = x[0] * y[0];
            var rxy1_ = x[0] * y1_;
            var ryx1_ = y[0] * x1_;
            var sum   = rxy1_ * rxy1_ + ryx1_ * ryx1_;

            if ( sum === 0.0 ) 
              return SVG_ARGUMENT_ERROR( this );

            var abs = ( rxry * rxry - sum ) / sum;
            if ( abs < 0.0 ) abs = -abs;

            var coe = Math.sqrt( abs );
            if ( f[1] === f[2]) coe = -coe;
            var cx_ =  coe * rxy1_ / y[0];
            var cy_ = -coe * ryx1_ / x[0];

            // equation 5.3
            var cx   = c_phi * cx_ - s_phi * cy_ + hs_x;
            var cy   = s_phi * cx_ + c_phi * cy_ + hs_y;
            var xcr1 = ( x1_ - cx_ ) / x[0]; 
            var xcr2 = ( x1_ + cx_ ) / x[0];
            var ycr1 = ( y1_ - cy_ ) / y[0];
            var ycr2 = ( y1_ + cy_ ) / y[0];

            // equation 5.5
            var tmp = xcr1 * xcr1 + ycr1 * ycr1;

            if ( tmp === 0.0 )
              return SVG_ARGUMENT_ERROR( this );

            var startAngle = Math.acos( xcr1 / Math.sqrt( tmp )) * this._Rad2Deg;

            if ( ycr1 < 0.0 )
              startAngle = -startAngle;

            // equation 5.6
            tmp = ( xcr1 * xcr1 + ycr1 * ycr1 ) * ( xcr2 * xcr2 + ycr2 * ycr2 );

            if ( tmp === 0.0 )
              return SVG_ARGUMENT_ERROR( this );

            var deltaAngle = Math.acos(( xcr1 * -xcr2 + ycr1 * -ycr2 ) / 
                             Math.sqrt( tmp )) * this._Rad2Deg;

            if (( xcr1 * -ycr2 - ycr1 * -xcr2 ) < 0 )
              deltaAngle = -deltaAngle;

            while ( deltaAngle >  360 ) { deltaAngle = deltaAngle - 360; }
            while ( deltaAngle < -360 ) { deltaAngle = deltaAngle + 360; }
            if ( !f[2] && ( deltaAngle > 0 )) deltaAngle = deltaAngle - 360;
            if (  f[2] && ( deltaAngle < 0 )) deltaAngle = deltaAngle + 360;

            // Estimate the number of edges to compose the arc of 
            noOfEdges = (( x[0] + y[0]) * deltaAngle * ( 3.14 / 360 ) * 
                           pixel2Edges ) | 0;

            if ( noOfEdges < 0 )
              noOfEdges = -noOfEdges;

            // Very small shape. Add some edges so that it is more precise
            if ( noOfEdges < 8 )
              noOfEdges += 2;

            bufSubPathNo = EnlargeSVGBufPath( bufPath, bufSubPathNo, noOfEdges + 1 );

            // move the coordinate system and rotate it in order to draw the arc 
            this._PushPathMatrix( bufPath );
            this._TranslatePathMatrix( bufPath, cx, cy );                                              
            this._RotatePathMatrix( bufPath, angle );
            this._AddSubPathArc( bufPath, bufSubPathNo, 0, 0, x[0], y[0],
                                 startAngle, startAngle + deltaAngle, noOfEdges + 1 );
            this._PopPathMatrix( bufPath );

            cpx = x[2];
            cpy = y[2];
          }
          while ( ParseSVGNumber( ptr, x, 0));
        }
        
        // Close the sub-path 
        else if (( cmd === 0x5A ) || ( cmd == 0x7A ))
        {
          ptr[1] = SkipSVGSpace( aSVGString, ptr[1]);
          this._CloseSubPath( bufPath, bufSubPathNo );
          cpx = this._GetSubPathNodeX( bufPath, bufSubPathNo, 0 );
          cpy = this._GetSubPathNodeY( bufPath, bufSubPathNo, 0 );
          break;
        }

        // Invalid command 
        else
        {
          ptr[1]--;
          return SVG_SYNTAX_ERROR( this );
        }
      }

      // How many edges do belong to the just processed path?
      noOfEdges = this._GetNoOfSubPathEdges( bufPath, bufSubPathNo );

      // Reserve memory for the path
      this._InitSubPath( path, count, noOfEdges );

      // ... and copy the path
      this._AddSubPathCopy( path, count, bufPath, bufSubPathNo, 0, noOfEdges );

      // Should the path be closed? 
      if ( this._IsSubPathClosed( bufPath, bufSubPathNo ))
        this._CloseSubPath( path, count );
    }

    /* All ok. Release the temporary used path and finished */
    this._FreePath( bufPath );
    return path;

    // The path contains a syntax error 
    function SVG_SYNTAX_ERROR( aThis )
    {
      // How many edges do belong to the just processed path?
      noOfEdges = aThis._GetNoOfSubPathEdges( bufPath, bufSubPathNo );

      // Reserve memory for the path and copy the data 
      aThis._InitSubPath( path, count, noOfEdges );
      aThis._AddSubPathCopy( path, count, bufPath, bufSubPathNo, 0, noOfEdges );
      aThis._SVGParserStatus   = aThis._SVG_PARSER_SYNTAX_ERROR;
      aThis._SVGParserErrorPos = ptr[1];
      aThis._FreePath( bufPath );
      return path;
    }

    // The path contains a syntax error
    function SVG_ARGUMENT_ERROR( aThis )
    {
      // How many edges do belong to the just processed path?
      noOfEdges = aThis._GetNoOfSubPathEdges( bufPath, bufSubPathNo );

      // Reserve memory for the path and copy the data 
      aThis._InitSubPath( path, count, noOfEdges );
      aThis._AddSubPathCopy( path, count, bufPath, bufSubPathNo, 0, noOfEdges );
      aThis._SVGParserStatus   = aThis._SVG_PARSER_INVALID_ARGUMENT;
      aThis._SVGParserErrorPos = cmdPtr;
      aThis._FreePath( bufPath );
      return path;
    }  
  };

  // ---------------------------------------------------------------------------
  // The function GetSVGParserStatus() returns the status resulting from the
  // preceding invocation of the function CreatePathFromSVGString(). Possible
  // values are defined as EW_SVG_PARSER_XXX. constants. 
  // ---------------------------------------------------------------------------
  emwi._GetSVGParserStatus = function()
  {
    return this._SVGParserStatus;
  };

  // ---------------------------------------------------------------------------
  // The function _GetSVGParserErrorPos() returns the position within the SVG
  // string at which the function CreatePathFromSVGString() has encountered an
  // error. To query the error status use the function GetSVGParserStatus().
  // ---------------------------------------------------------------------------
  emwi._GetSVGParserErrorPos = function()
  {
    return this._SVGParserErrorPos;
  };

  // ---------------------------------------------------------------------------
  // The function FreePath() frees the memory occupied by the path and its all
  // sub-paths.
  // ---------------------------------------------------------------------------
  emwi._FreePath = function( aPath )
  {
    if ( aPath )
    {
      delete aPath.SubPaths;
      delete aPath.MatrixStack;
    }
  };

  // ---------------------------------------------------------------------------
  // The function GetMaxNoOfSubPaths() returns how many sub-paths the given
  // path can maximally store. The returned value corresponds to the parameter
  // passed in the invocation of the CreatePath() function.
  // If successful, the function returns the max. number of sub-path the path
  // can store. Otherwise the function returns 0.
  // ---------------------------------------------------------------------------
  emwi._GetMaxNoOfSubPaths = function( aPath )
  {
    if ( !aPath )
      return 0;

    return aPath.MaxNoOfSubPaths;
  };

  // ---------------------------------------------------------------------------
  // The function InitSubPath() prepares a sub-path to be able to store up to
  // aMaxNoOfEdges path edges. With this operation memory for the sub-path data
  // is reserved. Initially the just initialized sub-path is considered as being
  // still empty. To fill the sub-path with edge coordinates use the functions
  // AddSubPathLine(), AddSubPathArc(), etc.
  //
  // If the affected sub-path has been already initialized in the past, the old
  // information is discarded before initializing the new sub-path.
  //
  // If successful, the function returns 'true'. If there is no available memory
  // for the sub-path allocation, 'false' is returned.
  // ---------------------------------------------------------------------------
  emwi._InitSubPath = function( aPath, aSubPathNo, aMaxNoOfEdges )
  {
    // There is no corresponding sub-path
    if ( !aPath || ( aSubPathNo >= aPath.MaxNoOfSubPaths ) || ( aSubPathNo < 0 ))
      return false;

    // Limit the number of edges
    if ( aMaxNoOfEdges <= 0 )
      aMaxNoOfEdges = 0;

    var subPath = null;

    // Create a new sub-path object
    if ( aMaxNoOfEdges )
      subPath =
      {
        Capacity  : aMaxNoOfEdges,
        NoOfEdges : 0,
        HasData   : false,
        IsOpened  : false,
        IsClosed  : false,
        IsValid   : true,
        Bounds    : [ 0, 0, 0, 0 ],
        Data      : new Float32Array(( aMaxNoOfEdges + 1 ) * 8 )
      };

    // After this operation the path needs eventually an update
    if ( aPath.SubPaths[ aSubPathNo ])
      aPath.IsValid = false;

    // Store the new sub-path object
    aPath.SubPaths[ aSubPathNo ] = subPath;

    return true;
  };

  // ---------------------------------------------------------------------------
  // The function BeginSubPath() sets the start position for the sub-path. The
  // affected sub-path has to be initialized previously by calling the function
  // InitSubPath(). Beginning with the position, the path can be filled with
  // edges by calling functions like AddSubPathLine(), AddSubPathBezier2(), etc.
  //
  // Every sub-path contains exact one begin position. Calling this function for
  // a sub-path being already filled with edge coordinates will clear the actual
  // sub-path coordinate data and sets the new begin position.
  // ---------------------------------------------------------------------------
  emwi._BeginSubPath = function( aPath, aSubPathNo, aX, aY )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;

    // There is no corresponding sub-path
    if ( !subPath )
      return;

    var m = aPath.Matrix;
    var x = aX;
    var y = aY;

    // Transform the positions?
    if (( m[0] !== 1 ) || ( m[1] !== 0 ) || ( m[2] !== 0 ) ||
        ( m[3] !== 0 ) || ( m[4] !== 1 ) || ( m[5] !== 0 ))
    {
      x = aX * m[0] + aY * m[1] + m[2];
      y = aX * m[3] + aY * m[4] + m[5];
    }

    // Initialize the path as if it were empty
    subPath.IsClosed  = false;
    subPath.IsOpened  = false;
    subPath.IsValid   = false;
    subPath.NoOfEdges = 0;
    subPath.HasData   = true;
    subPath.Data[0]   = x;
    subPath.Data[1]   = y;
    aPath.IsValid     = false;
  };

  // ---------------------------------------------------------------------------
  // The function AddSubPathLine() appends at the actual position in the sub-
  // path a new straight line segment consisting of one edge. Then the sub-path
  // actual position is moved to the end of the just added line.
  //
  // The actual position results from the end position of the preceding sub-path
  // segment or it is the value specified in BeginSubPath() invocation. If the
  // sub-path is empty and no start position has been specified in the preceding
  // BeginSubPath() invocation, the function assumes the start position is X=0,
  // Y=0.
  //
  // Returns the index of the node within the sub-path where the end position
  // of the new line segment has bee stored. Knowing this index, the position
  // can be modified later by using the function SetSubPathNode().
  //
  // If the sub-path has not been initialized previously by calling the function
  // InitSubPath(), the sub-path has been closed by CloseSubPath() or the entire
  // memory reserved for the sub-path is already occupied by other path 
  // information, the function fails and returns 0.
  // ---------------------------------------------------------------------------
  emwi._AddSubPathLine = function( aPath, aSubPathNo, aX, aY )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;

    // There is no corresponding sub-path, it is closed or there is no free
    // space in the sub-path for new edges
    if ( !subPath || subPath.IsClosed || 
       (( subPath.NoOfEdges + 1 ) > subPath.Capacity ))
      return 0;

    var m = aPath.Matrix;
    var d = subPath.Data;
    var q = subPath.NoOfEdges * 2 + 2; 
    var x = aX;
    var y = aY;

    // Till now, the sub-path was empty. Now it contains data
    subPath.HasData  = true;
    subPath.IsOpened = true;
    subPath.IsValid  = false;
    aPath.IsValid    = false;

    // Transform the positions?
    if (( m[0] !== 1 ) || ( m[1] !== 0 ) || ( m[2] !== 0 ) ||
        ( m[3] !== 0 ) || ( m[4] !== 1 ) || ( m[5] !== 0 ))
    {
      x = aX * m[0] + aY * m[1] + m[2];
      y = aX * m[3] + aY * m[4] + m[5];
    }

    // Store the end position of the line segment
    d[q]   = x;
    d[q+1] = y;
    
    return subPath.NoOfEdges++;
  };

  // ---------------------------------------------------------------------------
  // The function AddSubPathBezier2() appends at the actual position in the
  // sub-path a new quadratic Bézier curve composed of exact aNoOfEdges straight
  // line segments. Then the sub-path actual position is moved to the end of the
  // just added curve.
  //
  // The actual position results from the end position of the preceding sub-path
  // segment or it is the value specified in BeginSubPath() invocation. If the
  // sub-path is empty and no start position has been specified in the preceding
  // BeginSubPath() invocation, the function assumes the start position is X=0,
  // Y=0.
  //
  // Returns the index of the node within the sub-path where the position of the
  // first Bézier line segment has bee stored. Knowing this index and the number
  // of segments the Bézier curve is composed of (aNoOfEdges), the position of
  // every Bézier line segment can be modified later. See SetSubPathNode().
  //
  // If the sub-path has not been initialized previously by calling the function
  // InitSubPath(), the sub-path has been closed by CloseSubPath() or there is
  // no sufficient memory in the sub-path for the new Bézier curve segments, the
  // function fails and returns 0.
  // ---------------------------------------------------------------------------
  emwi._AddSubPathBezier2 = function( aPath, aSubPathNo, aCPX, aCPY, aX, aY,
    aNoOfEdges )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;

    // There is no corresponding sub-path, it is closed or there is no free
    // space in the sub-path for new edges
    if (( aNoOfEdges <= 0 ) || !subPath || subPath.IsClosed || 
       (( subPath.NoOfEdges + aNoOfEdges ) > subPath.Capacity ))
      return 0;

    var m   = aPath.Matrix;
    var d   = subPath.Data;
    var q   = subPath.NoOfEdges * 2; 
    var cpx = aCPX;
    var cpy = aCPY;
    var x   = aX;
    var y   = aY;
    var s   = 1 / aNoOfEdges;
    var t;
    var i;

    // Till now, the sub-path was empty. Now it contains data
    subPath.HasData  = true;
    subPath.IsOpened = true;
    subPath.IsValid  = false;
    aPath.IsValid    = false;

    // Transform the positions?
    if (( m[0] !== 1 ) || ( m[1] !== 0 ) || ( m[2] !== 0 ) ||
        ( m[3] !== 0 ) || ( m[4] !== 1 ) || ( m[5] !== 0 ))
    {
      cpx = aCPX * m[0] + aCPY * m[1] + m[2];
      cpy = aCPX * m[3] + aCPY * m[4] + m[5];
      x   = aX   * m[0] + aY   * m[1] + m[2];
      y   = aX   * m[3] + aY   * m[4] + m[5];
    }

    var x0 = d[q++];
    var y0 = d[q++];

    // Calculate aNoOfEdges smaples of the Bézier curve and store these in the
    // sub-path
    for ( t = s, i = 1; i < aNoOfEdges; i++, t += s )
    {
      var nt  = 1  - t;
      var nt2 = nt * nt;
      var t2  = t  * t;
      var f2  = 2  * nt * t;
    
      d[q++] = nt2 * x0 + f2 * cpx + t2 * x;
      d[q++] = nt2 * y0 + f2 * cpy + t2 * y;
    }

    // Store the end position of the Bézier curve
    d[q++] = x;
    d[q++] = y;

    return ( subPath.NoOfEdges += i ) - i;
  };

  // ---------------------------------------------------------------------------
  // The function AddSubPathBezier3() appends at the actual position in the
  // sub-path a new cubic Bézier curve composed of exact aNoOfEdges straight
  // line segments. Then the sub-path actual position is moved to the end of
  // the just added curve.
  //
  // The actual position results from the end position of the preceding sub-path
  // segment or it is the value specified in BeginSubPath() invocation. If the
  // sub-path is empty and no start position has been specified in the preceding
  // BeginSubPath() invocation, the function assumes the start position is X=0,
  // Y=0.
  //
  // Returns the index of the node within the sub-path where the position of the
  // first Bézier line segment has bee stored. Knowing this index and the number
  // of segments the Bézier curve is composed of (aNoOfEdges), the position of
  // every Bézier line segment can be modified later. See SetSubPathNode().
  //
  // If the sub-path has not been initialized previously by calling the function
  // InitSubPath(), the sub-path has been closed by CloseSubPath() or there is
  // no sufficient memory in the sub-path for the new Bézier curve segments, the
  // function fails and returns 0.
  // ---------------------------------------------------------------------------
  emwi._AddSubPathBezier3 = function( aPath, aSubPathNo, aCP1X, aCP1Y, aCP2X,
    aCP2Y, aX, aY, aNoOfEdges )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;

    // There is no corresponding sub-path, it is closed or there is no free
    // space in the sub-path for new edges
    if (( aNoOfEdges <= 0 ) || !subPath || subPath.IsClosed || 
       (( subPath.NoOfEdges + aNoOfEdges ) > subPath.Capacity ))
      return 0;

    var m    = aPath.Matrix;
    var d    = subPath.Data;
    var q    = subPath.NoOfEdges * 2; 
    var cp1x = aCP1X;
    var cp1y = aCP1Y;
    var cp2x = aCP2X;
    var cp2y = aCP2Y;
    var x    = aX;
    var y    = aY;
    var s    = 1 / aNoOfEdges;
    var t;
    var i;

    // Till now, the sub-path was empty. Now it contains data
    subPath.HasData  = true;
    subPath.IsOpened = true;
    subPath.IsValid  = false;
    aPath.IsValid    = false;

    // Transform the positions?
    if (( m[0] !== 1 ) || ( m[1] !== 0 ) || ( m[2] !== 0 ) ||
        ( m[3] !== 0 ) || ( m[4] !== 1 ) || ( m[5] !== 0 ))
    {
      cp1x = aCP1X * m[0] + aCP1Y * m[1] + m[2];
      cp1y = aCP1X * m[3] + aCP1Y * m[4] + m[5];
      cp2x = aCP2X * m[0] + aCP2Y * m[1] + m[2];
      cp2y = aCP2X * m[3] + aCP2Y * m[4] + m[5];
      x    = aX    * m[0] + aY    * m[1] + m[2];
      y    = aX    * m[3] + aY    * m[4] + m[5];
    }

    var x0 = d[q++];
    var y0 = d[q++];

    // Calculate aNoOfEdges smaples of the Bézier curve and store these in the
    // sub-path
    for ( t = s, i = 1; i < aNoOfEdges; i++, t += s )
    {
      var nt  = 1  - t;
      var t2  = t  * t;
      var nt2 = nt * nt;
      var f1  = nt * nt2;
      var f2  = 3  * nt2 * t; 
      var f3  = 3  * nt  * t2;
      var f4  = t  * t2;

      d[q++] = f1 * x0 + f2 * cp1x + f3 * cp2x + f4 * x;
      d[q++] = f1 * y0 + f2 * cp1y + f3 * cp2y + f4 * y;
    }

    // Store the end position of the Bézier curve
    d[q++] = x;
    d[q++] = y;

    return ( subPath.NoOfEdges += i ) - i;
  };

  // ---------------------------------------------------------------------------
  // The function AddSubPathArc() adds to the sub-path a new arc curve composed
  // of exact aNoOfEdges straight line segments. If the sub-path contains 
  // already any segment information, the start of the arc curve is connected
  // with the end of the last segment by an additional straight line.
  //
  // Similarly, if start position for the sub-path has been specified by using
  // BeginSubPath(), an additional line segment is added to connect the curve
  // with the specified sub-path start position.
  //
  // After the curve is stored in the path, the sub-path actual position is 
  // moved to refer to the end position of the arc.
  //
  // Returns the index of the node within the sub-path where the start position
  // of the first arc line segment has bee stored. Knowing this index and the 
  // number of segments the arc curve is composed of (aNoOfEdges), the position 
  // of every arc line segment can be modified later. See SetSubPathNode().
  //
  // If the sub-path has not been initialized previously by calling the function
  // InitSubPath(), the sub-path has been closed by CloseSubPath() or there is
  // no sufficient memory in the sub-path for the new arc curve segments, the
  // function fails and returns 0.
  // ---------------------------------------------------------------------------
  emwi._AddSubPathArc = function( aPath, aSubPathNo, aCenterX, aCenterY, 
    aRadiusX, aRadiusY, aStartAngle, aEndAngle, aNoOfEdges )
  {
    var subPath   = aPath? aPath.SubPaths[ aSubPathNo ] : null;
    var noOfEdges = aNoOfEdges;

    // If the path contains already data, an additional edge is needed to 
    // connect the end position of the last segment with the first position
    // of the arc
    if ( subPath && subPath.HasData )
      noOfEdges++;

    // There is no corresponding sub-path, it is closed or there is no free
    // space in the sub-path for new edges
    if (( aNoOfEdges <= 0 ) || ( aStartAngle === aEndAngle ) || !subPath ||
          subPath.IsClosed || (( subPath.NoOfEdges + noOfEdges ) > subPath.Capacity ))
      return 0;

    // Convert degree to rad
    aStartAngle *= this._Deg2Rad;
    aEndAngle   *= this._Deg2Rad;

    var m = aPath.Matrix;
    var d = subPath.Data;
    var q = subPath.NoOfEdges * 2 + ( noOfEdges - aNoOfEdges ) * 2; 
    var s = ( aEndAngle - aStartAngle ) / aNoOfEdges;
    var i;

    // Till now, the sub-path was empty. Now it contains data
    subPath.HasData  = true;
    subPath.IsOpened = true;
    subPath.IsValid  = false;
    aPath.IsValid    = false;

    // If the matrix is not an identity matrix - an additional transformation
    // will be applied
    var doTransform = ( m[0] !== 1 ) || ( m[1] !== 0 ) || ( m[2] !== 0 ) ||
                      ( m[3] !== 0 ) || ( m[4] !== 1 ) || ( m[5] !== 0 );

    // Sample the arc curve and calculate the position for every edge
    for ( i = 0; i <= aNoOfEdges; i++, aStartAngle += s )
    {
      var a = ( i === aNoOfEdges )? aEndAngle : aStartAngle;
      var x = aCenterX + aRadiusX * Math.cos( a );
      var y = aCenterY + aRadiusY * Math.sin( a );

      // Transform the positions?
      if ( doTransform )
      {
        d[q++] = x * m[0] + y * m[1] + m[2];
        d[q++] = x * m[3] + y * m[4] + m[5];
      }
      else
      {
        d[q++] = x;
        d[q++] = y;
      }
    }

    return ( subPath.NoOfEdges += noOfEdges ) - aNoOfEdges;
  };

  // ---------------------------------------------------------------------------
  // The function AddSubPathCopy() adds to the sub-path a copy of another sub-
  // path. In this manner contents from different paths can be combined together
  // without the necessity to re-calculate them again.
  //
  // If the destination sub-path contains already any segment information, the
  // start of the copied source sub-path is connected with the end of the last
  // segment by an additional straight line.
  //
  // Similarly, if start position for the sub-path has been specified by using
  // BeginSubPath(), an additional line segment is added to connect it with
  // the copied sub-path.
  //
  // If the transformation matrix of the destination path has been configured,
  // the copied source coordinates are transformed by using the matrix. (See
  // TranslatePath(), ScalePath(), etc.)
  //
  // After the copy is stored in the path, the sub-path actual position is moved
  // to refer to the end position of the copied sub-path.
  //
  // Returns the index of the node within the destination sub-path where the
  // start position of the first copied segment has bee stored. Knowing this
  // index and the number of copied segments the, the position of every segment
  // can be modified later. See SetSubPathNode().
  //
  // If the sub-path has not been initialized previously by calling the function
  // InitSubPath(), the sub-path has been closed by CloseSubPath(), there is no
  // sufficient memory in the destination sub-path for the complete copy of the
  // source sub-path or the source sub-path does not exist, the function fails
  // and returns 0.
  // ---------------------------------------------------------------------------
  emwi._AddSubPathCopy = function( aPath, aSubPathNo, aSrcPath, aSrcSubPathNo,
    aSrcNodeNo, aNoOfEdges )
  {
    var dstSubPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;
    var srcSubPath = aSrcPath? aSrcPath.SubPaths[ aSrcSubPathNo ] : null;
    var noOfEdges  = aNoOfEdges;

    // Nothing to copy or the area intended to copy is invalid 
    if ( !aNoOfEdges || !dstSubPath || !srcSubPath || ( aSrcNodeNo < 0 ))
      return 0;

    // Should copy until the end of the source sub-path?
    if ( aNoOfEdges < 0 )
      noOfEdges = aNoOfEdges = srcSubPath.NoOfEdges - aSrcNodeNo;

    // There is no sufficient nodes in the source path to copy
    if (( aSrcNodeNo + noOfEdges ) > srcSubPath.NoOfEdges )
      return 0;

    // If the path contains already data, an additional edge is needed to 
    // connect the end position of the last segment with the first position
    // of the arc
    if ( dstSubPath.HasData )
      noOfEdges++;

    // The path is closed or there is no free space in the sub-path for new edges
    if ((( dstSubPath.NoOfEdges + noOfEdges ) > dstSubPath.Capacity ) ||
           dstSubPath.IsClosed )
      return 0;

    // Till now, the sub-path was empty. Now it contains data
    dstSubPath.HasData  = true;
    dstSubPath.IsOpened = true;
    dstSubPath.IsValid  = false;
    aPath.IsValid       = false;

    var m = aPath.Matrix;
    var d = dstSubPath.Data;
    var s = srcSubPath.Data;
    var q = dstSubPath.NoOfEdges * 2 + ( noOfEdges - aNoOfEdges ) * 2; 
    var r = aSrcNodeNo * 2; 
    var i = 0;

    // If the matrix is not an identity matrix - an additional transformation
    // will be applied
    if (( m[0] !== 1 ) || ( m[1] !== 0 ) || ( m[2] !== 0 ) ||
        ( m[3] !== 0 ) || ( m[4] !== 1 ) || ( m[5] !== 0 ))
      for ( ; i <= aNoOfEdges; i++, r += 2 )
      {
        d[q++] = s[r] * m[0] + s[r+1] * m[1] + m[2];
        d[q++] = s[r] * m[3] + s[r+1] * m[4] + m[5];
      }

    // Just copy without the transformation
    else
      for ( ; i <= aNoOfEdges; i++ )
      {
        d[q++] = s[r++];
        d[q++] = s[r++];
      }

    return ( dstSubPath.NoOfEdges += noOfEdges ) - aNoOfEdges;
  };

  // ---------------------------------------------------------------------------
  // The function CloseSubPath() marks the affected sub-path as closed. The
  // function verifies whether the first and last position of the path are equal
  // and if this is not the case, adds an additional line segment to the path in
  // order to close it.
  //
  // Once the function is called, no additional path information can be added to
  // the affected path unless it is initialized again by using InitSubPath() or
  // cleared by using BeginSubPath().
  // ---------------------------------------------------------------------------
  emwi._CloseSubPath = function( aPath, aSubPathNo )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;

    // The sub-path is not initialized, it is already closed or the path is 
    // empty
    if ( !subPath || subPath.IsClosed || !subPath.IsOpened )
      return;

    // With this operation the sub-path changes from opened to closed
    subPath.IsOpened = false;
    subPath.IsClosed = true;
    aPath.IsValid    = false;

    var d  = subPath.Data;
    var dx = d[ subPath.NoOfEdges * 2 + 0 ] - d[0];
    var dy = d[ subPath.NoOfEdges * 2 + 1 ] - d[1];


    // If the first and the last sub-path positions are different, connect them
    // with an addiiotnal line segment
    if (( dx > 0.001 ) || ( dx < -0.001 ) || ( dy > 0.001 ) || ( dy < -0.001 ))
    {
      subPath.NoOfEdges++;
      d[ subPath.NoOfEdges * 2 + 0 ] = d[0];
      d[ subPath.NoOfEdges * 2 + 1 ] = d[1];
    }

    // The both position are (very) close 
    else
    {
      d[ subPath.NoOfEdges * 2 + 0 ] = d[0];
      d[ subPath.NoOfEdges * 2 + 1 ] = d[1];
    }
  };

  // ---------------------------------------------------------------------------
  // The function ShiftSubPathNodes() removes from the sub-path the specified
  // number of leading coordinate values. This results in the sub-path content
  // being shifted and the number of sub-path edges being reduced by the given
  // aNoOfNodes parameter. Thereupon new edge data can be appended to the path,
  // e.g. by using the function AddSubPathLine().
  //
  // Applying the function on a sub-path closed by a preceding CloseSubPath()
  // is not possible and causes the function to return without any modification
  // on the sub-path data.
  //
  // Moreover, the operation is limited to leave at least one node in the path.
  // In other words, it is not possible to clear the path completely. Use the
  // functions BeginSubPath() or InitSubPath() in such application cases.
  //
  // The function returns the number of nodes removed from the sub-path or 0 if
  // the sub-path doesn't exist, is not initialized (see InitSubPath()), is 
  // empty or it has been closed by preceding CloseSubPath() invocation.
  // ---------------------------------------------------------------------------
  emwi._ShiftSubPathNodes = function( aPath, aSubPathNo, aNoOfNodes, aTranslateX,
    aTranslateY )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;

    // The sub-path is not initialized, it is already closed or the path is 
    // empty
    if ( !subPath || subPath.IsClosed || !subPath.IsOpened )
      return 0;

    // There is nothing to remove
    if ( aNoOfNodes <= 0 )
      return 0;

    // Limit the max. number of nodes to remove from the sub-path
    if ( aNoOfNodes > subPath.NoOfEdges )
      aNoOfNodes = subPath.NoOfEdges;

    // Move the nodes in the path
    subPath.Data.copyWithin( 0, aNoOfNodes * 2 );

    // Then apply the horizontal translation to all remaining coordinates
    if (( aTranslateX !== 0.0 ) || ( aTranslateY !== 0.0 ))
    {
      var d = subPath.Data;
      var i;

      for ( i = 0; i < d.length; i += 2 )
      {
        d[i]   += aTranslateX;
        d[i+1] += aTranslateY;
      }
    }

    // Update the path state
    subPath.IsOpened  = aNoOfNodes < subPath.NoOfEdges;
    subPath.NoOfEdges = subPath.NoOfEdges - aNoOfNodes;
    subPath.IsValid   = false;
    aPath.IsValid     = false;

    return aNoOfNodes;
  };

  // ---------------------------------------------------------------------------
  // The function SetSubPathNode() modifies the X,Y coordinate of the given
  // node within the path. In this manner it is not necessary to re-initialize
  // and re-calculate the complete path if only few path corners do move.
  //
  // Trying to modify a not existing node is ignored.
  // ---------------------------------------------------------------------------
  emwi._SetSubPathNode = function( aPath, aSubPathNo, aNodeNo, aX, aY )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;

    // The sub-path is not initialized or there is no corresponding node
    if ( !subPath || ( aNodeNo > subPath.NoOfEdges ) || ( aNodeNo < 0 ))
      return;

    var m = aPath.Matrix;
    var d = subPath.Data;
    var x = aX;
    var y = aY;

    // Transform the positions?
    if (( m[0] !== 1 ) || ( m[1] !== 0 ) || ( m[2] !== 0 ) ||
        ( m[3] !== 0 ) || ( m[4] !== 1 ) || ( m[5] !== 0 ))
    {
      x = aX * m[0] + aY * m[1] + m[2];
      y = aX * m[3] + aY * m[4] + m[5];
    }

    // Store the new position in the corresponding node
    d[ aNodeNo * 2 + 0 ] = x;
    d[ aNodeNo * 2 + 1 ] = y;

    // Modifying the first node of a closed path affects also the last node
    if ( !aNodeNo && subPath.IsClosed )
    {
      d[ subPath.NoOfEdges * 2 + 0 ] = x;
      d[ subPath.NoOfEdges * 2 + 1 ] = y;
    }

    // Modifying the last node of a closed path affects also the first node
    if (( aNodeNo === subPath.NoOfEdges ) && subPath.IsClosed )
    {
      d[0] = x;
      d[1] = y;
    }

    // After this operation the path needs an update
    subPath.IsValid = false;
    aPath.IsValid   = false;
  };

  // ---------------------------------------------------------------------------
  // The function GetSubPathNodeX() returns the X coordinate stored in the node
  // aNodeNo of the sub-path aSubPathNo. If the given sub-path or node do not
  // exost, 0.0 is returned.
  // ---------------------------------------------------------------------------
  emwi._GetSubPathNodeX = function( aPath, aSubPathNo, aNodeNo )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;

    // The sub-path is not initialized or there is no corresponding node
    if ( !subPath || ( aNodeNo > subPath.NoOfEdges ) || ( aNodeNo < 0 ))
      return 0.0;

    return subPath.Data[ aNodeNo * 2 + 0 ];
  };

  // ---------------------------------------------------------------------------
  // The function GetSubPathNodeY() returns the Y coordinate stored in the node
  // aNodeNo of the sub-path aSubPathNo. If the given sub-path or node do not
  // exost, 0.0 is returned.
  // ---------------------------------------------------------------------------
  emwi._GetSubPathNodeY = function( aPath, aSubPathNo, aNodeNo )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;

    // The sub-path is not initialized or there is no corresponding node
    if ( !subPath || ( aNodeNo > subPath.NoOfEdges ) || ( aNodeNo < 0 ))
      return 0.0;

    return subPath.Data[ aNodeNo * 2 + 1 ];
  };

  // ---------------------------------------------------------------------------
  // The function SetNoOfSubPathEdges() provides a convenient way to change the
  // number of edges (straight line segments) the affected sub-path uses 
  // actually to store its coordinates. In this manner, the sub-path can be 
  // truncated or enhanced by new nodes.
  //
  // In case the sub-path grows, the new appended nodes are pre-initialized with
  // the coordinates X=0, Y=0. Also, please note the maximum capacity (maximum
  // number of edges) the sub-path is able to store. This value is determined in
  // the invocation of the InitSubPath() function.
  // ---------------------------------------------------------------------------
  emwi._SetNoOfSubPathEdges = function( aPath, aSubPathNo, aNoOfEdges )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;

    // There is no corresponding sub-path or it is closed
    if ( !subPath || subPath.IsClosed )
      return 0;

    // Limit the specified number of edges to the capacity of the sub-path
    if ( aNoOfEdges < 0                ) aNoOfEdges = 0;
    if ( aNoOfEdges > subPath.Capacity ) aNoOfEdges = subPath.Capacity;

    // The alternation of the sub-path
    delta =  aNoOfEdges - subPath.NoOfEdges;

    // No changes in the sub-path
    if ( !delta )
      return 0;

    // Enlarge the sub-path? Fill the new entries with zero
    if ( delta > 0 )
    {
      var d = subPath.Data;
      var q = subPath.NoOfEdges * 2 + 2; 
      var i;
      for ( i = 0; i < delta; i++ ) { d[q++] = 0; d[q++] = 0; }
    }

    // Adapt the state information related to the path 
    subPath.NoOfEdges = aNoOfEdges;
    subPath.HasData   = aNoOfEdges > 0;
    subPath.IsOpened  = aNoOfEdges > 0;
    subPath.IsValid   = false;
    aPath.IsValid     = false;

    return delta;
  };

  // ---------------------------------------------------------------------------
  // The function GetNoOfSubPathEdges() returns how many edges (straight line
  // segments) the affected sub-path actually store.
  //
  // Returns the number of edges existing actually in the sub-path or 0 if the
  // sub-path doesn't exist, is not initialized (see InitSubPath()) or is empty.
  // ---------------------------------------------------------------------------
  emwi._GetNoOfSubPathEdges = function( aPath, aSubPathNo )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;
    return subPath? subPath.NoOfEdges : 0;
  };

  // ---------------------------------------------------------------------------
  // The function GetNoOfFreeSubPathEdges() returns how many edges (straight
  // line segments) can still be added to the affected sub-path.
  //
  // Returns the number of edges the sub-path can additionally accomodate or 0
  // if the sub-path doesn't exist, is not initialized (see InitSubPath()), is
  // closed (see CloseSubPath()) or is full.
  // ---------------------------------------------------------------------------
  emwi._GetNoOfFreeSubPathEdges = function( aPath, aSubPathNo )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;

    if ( !subPath || subPath.IsClosed )
      return 0;

    return subPath.Capacity - subPath.NoOfEdges;
  };

  // ---------------------------------------------------------------------------
  // The function IsSubPathClosed() returns 'true' if the affected sub-path has
  // been closed by calling the function CloseSubPath(). Once closed, no new
  // path segments can be added to the sub-path.
  // ---------------------------------------------------------------------------
  emwi._IsSubPathClosed = function( aPath, aSubPathNo )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;
    return subPath? subPath.IsClosed : false;
  };

  // ---------------------------------------------------------------------------
  // The function GetSubPathBounds() returns the rectangular area enclosing all
  // nodes of the affected sub-path. The position and the size of the area are
  // rounded to the near integer value.
  // ---------------------------------------------------------------------------
  emwi._GetSubPathBounds = function( aPath, aSubPathNo )
  {
    var subPath = aPath? aPath.SubPaths[ aSubPathNo ] : null;

    // Eventually update internal path information if the path data has been
    // modified in the past
    this._UpdatePath( aPath );

    return subPath? subPath.Bounds : [0,0,0,0];
  };

  // ---------------------------------------------------------------------------
  // The function GetPathBounds() returns the rectangular area enclosing all
  // nodes of all sub-paths of the path. The position and the size of the area
  // are rounded to the near integer value.
  // ---------------------------------------------------------------------------
  emwi._GetPathBounds = function( aPath )
  {
    // Eventually update internal path information if the path data has been
    // modified in the past
    this._UpdatePath( aPath );

    return aPath? aPath.Bounds : [0,0,0,0];
  };

  // ---------------------------------------------------------------------------
  // The function TranslatePathMatrix() applies the given displacement to the
  // path matrix. This corresponds to the translation of the origin of the path
  // coordinate system by the given values in the X- and Y-direction.
  //
  // The modification of the path matrix affects the position of line segments
  // added later to the sub-paths of the path.
  // ---------------------------------------------------------------------------
  emwi._TranslatePathMatrix = function( aPath, aDeltaX, aDeltaY )
  {
    // No valid path
    if ( !aPath )
      return;

    var m = aPath.Matrix;

    // Multiply the existing matrix with a new matrix describing the translation
    m[2] = m[2] + ( m[0] * aDeltaX ) + ( m[1] * aDeltaY );
    m[5] = m[5] + ( m[3] * aDeltaX ) + ( m[4] * aDeltaY );
  };

  // ---------------------------------------------------------------------------
  // The function ScalePathMatrix() applies the given factors to the path
  // matrix. This corresponds to the scaling of the path coordinate system by
  // the given values in the X- and Y-direction.
  //
  // The modification of the path matrix affects the position of line segments
  // added later to the sub-paths of the path.
  // ---------------------------------------------------------------------------
  emwi._ScalePathMatrix = function( aPath, aScaleX, aScaleY )
  {
    // No valid path
    if ( !aPath )
      return;

    var m = aPath.Matrix;

    // Multiply the existing matrix with a new matrix describing the scale 
    // operation
    m[0] *= aScaleX; m[1] *= aScaleY;
    m[3] *= aScaleX; m[4] *= aScaleY;
  };

  // ---------------------------------------------------------------------------
  // The function RotatePathMatrix() applies the given angle to the path matrix.
  // This corresponds to the rotation of the path coordinate system around its
  // origin position.
  //
  // The modification of the path matrix affects the position of line segments
  // added later to the sub-paths of the path.
  // ---------------------------------------------------------------------------
  emwi._RotatePathMatrix = function( aPath, aAngle )
  {
    // No valid path
    if ( !aPath )
      return;

    var m   = aPath.Matrix;
    var sin = Math.sin( aAngle *= this._Deg2Rad );
    var cos = Math.cos( aAngle );
    var nm0, nm1, nm3, nm4;

    // Multiply the existing matrix with a new matrix describing the rotation
    nm0 = ( m[0] *  cos ) + ( m[1] * sin );
    nm1 = ( m[0] * -sin ) + ( m[1] * cos );
    nm3 = ( m[3] *  cos ) + ( m[4] * sin );
    nm4 = ( m[3] * -sin ) + ( m[4] * cos );

    // Store the resulting matrix
    m[0] = nm0; m[1] = nm1;
    m[3] = nm3; m[4] = nm4;
  };

  // ---------------------------------------------------------------------------
  // The function PushPathMatrix() stores the current state of the path matrix
  // on its internal stack. This is very useful during creation of complex 
  // paths.
  //
  // To restore the matrix again use the function PopPathMatrix().
  // ---------------------------------------------------------------------------
  emwi._PushPathMatrix = function( aPath )
  {
    // No valid path
    if ( !aPath )
      return;

    var m = aPath.Matrix;
    aPath.MatrixStack.push([ m[0], m[1], m[2], m[3], m[4], m[5]]);
  };

  // ---------------------------------------------------------------------------
  // The function PopPathMatrix() restores the current state of the path matrix
  // from its internal stack. The matrix has to be stored by the preceding call
  // to the PushPathMatrix() function.
  //
  // If the stack is already empty, the identity matrix is loaded.
  // ---------------------------------------------------------------------------
  emwi._PopPathMatrix = function( aPath )
  {
    // No valid path
    if ( !aPath )
      return;

    var m  = aPath.Matrix;
    var nm = aPath.MatrixStack.pop();
    
    // If there is matrix stored on the stack - load it back again
    if ( nm )
    {
      m[0] = nm[0]; m[1] = nm[1]; m[2] = nm[2];
      m[3] = nm[3]; m[4] = nm[4]; m[5] = nm[5];
    }

    // Otherwise load the identity matrix
    else
    {
      m[0] = 1; m[1] = 0; m[2] = 0;
      m[3] = 0; m[4] = 1; m[5] = 0;
    }
  };

  // ---------------------------------------------------------------------------
  // The function InitPathMatrix() loads the identity matrix in the path.
  // ---------------------------------------------------------------------------
  emwi._InitPathMatrix = function( aPath )
  {
    // No valid path
    if ( !aPath )
      return;

    var m = aPath.Matrix;

    // Multiply the existing matrix with a new matrix describing the scale 
    // operation
    m[0] = 1; m[1] = 0; m[2] = 0;
    m[3] = 0; m[4] = 1; m[5] = 0;
  };

  // ---------------------------------------------------------------------------
  // This helper function verifies whether the path information is still valid
  // and if this is not the case, updates the path.
  // ---------------------------------------------------------------------------
  emwi._UpdatePath = function( aPath )
  {
    // The path is already up to date or no path to update
    if ( !aPath || aPath.IsValid )
      return;

    var subPaths        = aPath.SubPaths;
    var noOfSubPaths    = aPath.MaxNoOfSubPaths;
    var bounds          = [ 0, 0, 0, 0 ];
    var noOfOpenedPaths = 0;
    var noOfClosedPaths = 0;
    var noOfEdges       = 0;
    var i;

    // Traverse all sub-paths and calculate the rectangular 'bounds' area 
    // enclosing all of them
    for ( i = 0; i < noOfSubPaths; i++ )
    {
      var subPath = subPaths[i];

      // Is this path up to date? If not recalculate its own 'bounds' area
      if ( subPath && !subPath.IsValid && subPath.NoOfEdges )
      {
        var d     = subPath.Data;
        var q     = 2;
        var x1    = d[0];
        var y1    = d[1];
        var x2    = x1;
        var y2    = y1;
        var count = subPath.NoOfEdges;

        // Evaluate all coordinate pairs belonging to the sub-path and get the
        // enclosing rectangular area
        for ( ; count > 0; count--, q += 2 )
        {
          var x = d[q];
          var y = d[q+1];

          if ( x < x1 ) x1 = x;
          if ( x > x2 ) x2 = x;
          if ( y < y1 ) y1 = y;
          if ( y > y2 ) y2 = y;
        }

        // Store the just calculated bounds area in the sub-path
        subPath.Bounds  = [ x1 | 0, y1 | 0, ( x2 + 1 ) | 0, ( y2 + 1 ) | 0 ];
        subPath.IsValid = true;
      }

      // The path counts the state of all embedded sub-paths 
      if ( subPath && subPath.IsValid )
      {
        noOfOpenedPaths += subPath.IsOpened? 1 : 0;
        noOfClosedPaths += subPath.IsClosed? 1 : 0;
        noOfEdges       += subPath.NoOfEdges;

        // Calculate the unin enclosing all sub-paths
        bounds = this._UnionRect( bounds, subPath.Bounds );
      }
    }

    // Store the calculated bounds area
    aPath.NoOfOpenedPaths = noOfOpenedPaths;
    aPath.NoOfClosedPaths = noOfClosedPaths;
    aPath.NoOfEdges       = noOfEdges;
    aPath.Bounds          = bounds;
    aPath.IsValid         = true;
  };

  // ---------------------------------------------------------------------------
  // The function GetBitmapFromFillPath() creates an ALPHA8 bitmap consisting
  // of a single frame in the size aSize and fills within the bitmap a polygon
  // determined by the data stored in aPath. Finally, the function returns the
  // bitmap. Such bitmap can be used in copy operations to speed-up the screen
  // update without the necessity to rasterize the polygon again and again.
  //
  // If aFlipY is 'true', the coordinate system of the path is vertically
  // mirrored and its origin is moved to the bottom-left edge of the bitmap.
  // aOffset adds and additional offset to move the origin of the path
  // coordinate system. Changing this value scrolls the displayed path content.
  //
  // If aAntialiased is 'true', the function applies antialiasing to the pixel.
  // The parameter aNonZeroWinding controls the fill rule to be used by the
  // algorithm. If this parameter is 'false', the even-odd fill rule is used. 
  // If this parameter is 'true', the non-zero winding rule is used.
  // ---------------------------------------------------------------------------
  emwi._GetBitmapFromFillPath = function( aSize, aPath, aFlipY, aOffset, 
    aAntialiased, aNonZeroWinding )
  {
    var dstX = aOffset[0];
    var dstY = aOffset[1];
    var x1, y1, x2, y2;

    // Nothing to do
    if (( aSize[0] <= 0 ) || ( aSize[1] <= 0 ) || !aPath )
      return null;

    // Eventually update internal path information if the path data has been
    // modified in the past
    this._UpdatePath( aPath );

    // Estimate the origin of the path coordinate system and the area occupied 
    // by the drawn polygon. Note, the coordinate system can be mirrored 
    // vertically
    if ( !aFlipY )
    {
      y1    = dstY + aPath.Bounds[1] - 1;
      y2    = dstY + aPath.Bounds[3] + 1;
    }
    else
    {
      dstY += aSize[1];
      y1    = dstY - aPath.Bounds[3] - 1;
      y2    = dstY - aPath.Bounds[1] + 1;
    }

    x1 = dstX + aPath.Bounds[0] - 1;
    x2 = dstX + aPath.Bounds[2] + 1;

    // Limit the area to the destination frame boundary
    x1 = Math.max( x1, 0 );
    y1 = Math.max( y1, 0 );
    x2 = Math.min( x2, aSize[0]);
    y2 = Math.min( y2, aSize[1]);

    // In this version, the path image is rasterized into a HTML Canvas element
    // and then copied intio a WebGL texture. Create a new Canvas element and
    // new texture. Note: Many tests have demonstrated that creating these
    // objects every time is better than reusing existing objects. Evidently,
    // this helps the WebGL/Context2D to manage their video memory better.
    var gl      = this._Context;
    var canvas  = document.createElement( "canvas" );
    var texture = gl.createTexture();
    var surface = {};
    var frame   = { Surface: surface, Origin: [0,0]};
    var bitmap  = { FrameSize: aSize, FrameDelay: 0, NoOfFrames: 1,
                    Surfaces: [ surface ], Frames: [ frame ]};
      
    // Adjust the size of the canvas element
    canvas.width  = aSize[0];
    canvas.height = aSize[1];

    // Prepare for drawing the polygon in Canvas element
    var context      = canvas.getContext( "2d" ); 
    var subPaths     = aPath.SubPaths;
    var noOfSubPaths = aPath.MaxNoOfSubPaths;
    var i;
    
    // Adjust the origin position for the path to draw
    context.translate( dstX, dstY );
    context.scale( 1, aFlipY? -1 : 1 );

    // Start the path data loading 
    context.beginPath();
    
    // Evaluate all sub-path and feed the Context2D with the path data
    for ( i = 0; i < noOfSubPaths; i++ )
    {
      var subPath = subPaths[i];
      
      // Any sub-path data to rasterize?   
      if ( subPath && subPath.NoOfEdges )
      {
        var data      = subPath.Data;
        var noOfNodes = subPath.NoOfEdges * 2 + 2;
        var j;
        
        // The start position of the path
        context.moveTo( data[0], data[1] );
        
        // Add the line segments of the path
        for ( j = 2; j < noOfNodes; j += 2 )
          context.lineTo( data[j], data[j+1]);
        
        // ... and evtl. cose the sub-path
        if ( subPath.IsClosed )
          context.closePath();
      }
    }

    // Rasterize the path
    context.fill( aNonZeroWinding? "nonzero" : "evenodd" );

    // Now, continue with the texture. Configure it
    gl.SrcSurface = null;
    gl.bindTexture( gl.TEXTURE_2D, texture );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S,     gl.CLAMP_TO_EDGE );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T,     gl.CLAMP_TO_EDGE );

    // Copy the image data from the canvas element into the texture 
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas );

    // Prepare a data structure describing a bitmap
    surface.Format        = emwi._PIXEL_FORMAT_ALPHA8;
    surface.Width         = aSize[0];
    surface.Height        = aSize[1];
    surface.RealWidth     = aSize[0];
    surface.RealHeight    = aSize[1];
    surface.InvRealWidth  = 1 / aSize[0];
    surface.InvRealHeight = 1 / aSize[1];
    surface.InvDstWidth   = 2 / aSize[0];
    surface.InvDstHeight  = 2 / aSize[1];
    surface.Texture       = texture;
    surface.Framebuffer   = null;

    return bitmap;
  };

  // ---------------------------------------------------------------------------
  // The function GetBitmapFromStrokePath() creates an ALPHA8 bitmap containing
  // a single frame in the size aSize and strokes within it a path determined by
  // the data stored in aPath. Finally, the function returns the bitmap. Such
  // bitmap can be used in copy operations to speed-up the screen update without
  // the necessity to rasterize the polygon again and again.
  //
  // The parameter aWidth determines the thickness in pixel to stroke the path.
  // The parameter aStyle contains flags specifying how the path caps and join
  // points should appear. See the enumeration _PATH_CAP_XXX and _PATH_JOIN_XXX.
  //
  // If aFlipY is 'true', the coordinate system of the path is vertically
  // mirrored and its origin is moved to the bottom-left edge of the bitmap.
  // aOffset adds and additional offset to move the origin of the path
  // coordinate system. Changing this value scrolls the displayed path content.
  //
  // In case aStyle is configured with _PATH_JOIN_MITER, the parameter 
  // aMiterLimit imposes a limit on the ratio between the miter length and the
  // half of the line thickness aWidth. If the limit is exceeded for a corner,
  // the corner appears as bevel (_PATH_JOIN_BEVEL) instead of miter.
  //
  // If aAntialiased is 'true', the function applies antialiasing to the pixel.
  // ---------------------------------------------------------------------------
  emwi._GetBitmapFromStrokePath = function( aSize, aPath, aFlipY, aOffset, 
    aWidth, aStyle, aMiterLimit, aAntialiased )
  {
    var styleStart = aStyle & 0x0000FF;
    var styleEnd   = aStyle & 0x00FF00;
    var styleJoin  = aStyle & 0xFF0000;
    var dstX       = aOffset[0];
    var dstY       = aOffset[1];
    var x1, y1, x2, y2;
    var margin;

    // Nothing to do
    if (( aSize[0] <= 0 ) || ( aSize[1] <= 0 ) || !aPath || ( aWidth <= 0 ))
      return null;

    // Very thin lines don't need the rounded caps. Use the triangle 
    // instead
    if (( styleStart === this._PATH_CAP_START_ROUND ) && ( aWidth < 4 ))
      styleStart = this._PATH_CAP_START_TRIANGLE;

    if (( styleEnd === this._PATH_CAP_END_ROUND ) && ( aWidth < 4 ))
      styleEnd = this._PATH_CAP_END_TRIANGLE;

    // ... not rounded join points
    if (( styleJoin === this._PATH_JOIN_ROUND ) && ( aWidth < 3 ))
      styleJoin = this._PATH_JOIN_BEVEL;

    // Calculate the max. (worst case) margin around the original path, which
    // completely encloses the resulting polygon
    if ( styleJoin === this._PATH_JOIN_MITER )
    {
      if ( aMiterLimit > 1 ) margin = ( aMiterLimit * aWidth * 0.5 ) | 0;
      else                   margin = ( aWidth * 0.5 ) | 0;
    }
    else if (( styleStart === this._PATH_CAP_START_SQUARE ) ||
             ( styleEnd   === this._PATH_CAP_END_SQUARE  ))
      margin = ( aWidth * 0.75 ) | 0;
    else
      margin = ( aWidth + 0.5 ) | 0;

    // Eventually update internal path information if the path data has been
    // modified in the past
    this._UpdatePath( aPath );

    // Estimate the origin of the path coordinate system and the area occupied 
    // by the drawn polygon. Note, the coordinate system can be mirrored 
    // vertically
    if ( !aFlipY )
    {
      y1    = dstY + aPath.Bounds[1] - margin - 1;
      y2    = dstY + aPath.Bounds[3] + margin + 1;
    }
    else
    {
      dstY += aSize[1];
      y1    = dstY - aPath.Bounds[3] - margin - 1;
      y2    = dstY - aPath.Bounds[1] + margin + 1;
    }

    x1 = dstX + aPath.Bounds[0] - margin - 1;
    x2 = dstX + aPath.Bounds[2] + margin + 1;

    // Limit the area to the destination frame boundary
    x1 = Math.max( x1, 0 );
    y1 = Math.max( y1, 0 );
    x2 = Math.min( x2, aSize[0]);
    y2 = Math.min( y2, aSize[1]);

    // In this version, the path image is rasterized into a HTML Canvas element
    // and then copied intio a WebGL texture. Create a new Canvas element and
    // new texture. Note: Many tests have demonstrated that creating these
    // objects every time is better than reusing existing objects. Evidently,
    // this helps the WebGL/Context2D to manage their video memory better.
    var gl      = this._Context;
    var canvas  = document.createElement( "canvas" );
    var texture = gl.createTexture();
    var surface = {};
    var frame   = { Surface: surface, Origin: [0,0]};
    var bitmap  = { FrameSize: aSize, FrameDelay: 0, NoOfFrames: 1,
                    Surfaces: [ surface ], Frames: [ frame ]};
      
    // Adjust the size of the canvas element
    canvas.width  = aSize[0];
    canvas.height = aSize[1];

    // Prepare for drawing the polygon in Canvas element
    var context      = canvas.getContext( "2d" ); 
    var subPaths     = aPath.SubPaths;
    var noOfSubPaths = aPath.MaxNoOfSubPaths;
    var i;
    
    // Adjust the origin position for the path to draw
    context.translate( dstX, dstY );
    context.scale( 1, aFlipY? -1 : 1 );

    // Start the path data loading 
    context.beginPath();
    
    // Evaluate all sub-path and feed the Context2D with the path data
    for ( i = 0; i < noOfSubPaths; i++ )
    {
      var subPath = subPaths[i];
      
      // Any sub-path data to rasterize?   
      if ( subPath && subPath.NoOfEdges )
      {
        var data      = subPath.Data;
        var noOfNodes = subPath.NoOfEdges * 2 + 2;
        var j;
        
        // The start position of the path
        context.moveTo( data[0], data[1] );
        
        // Add the line segments of the path
        for ( j = 2; j < noOfNodes; j += 2 )
          context.lineTo( data[j], data[j+1]);
        
        // ... and evtl. cose the sub-path
        if ( subPath.IsClosed )
          context.closePath();
      }
    }

    // Determine the style to join line segments
    if ( aWidth !== 1.0 )
      context.lineWidth = aWidth;
    if ( styleJoin === this._PATH_JOIN_MITER )
      context.miterLimit = aMiterLimit;
    else if ( styleJoin === this._PATH_JOIN_BEVEL )
      context.lineJoin = "bevel";
    else if ( styleJoin === this._PATH_JOIN_ROUND )
      context.lineJoin = "round";

    if (( styleStart === this._PATH_CAP_START_ROUND ) &&
        ( styleEnd   === this._PATH_CAP_END_ROUND   ))
    {
      styleStart = styleEnd = this._PATH_CAP_START_FLAT;
      context.lineCap = "round";
    }
    else if (( styleStart === this._PATH_CAP_START_SQUARE ) &&
             ( styleEnd   === this._PATH_CAP_END_SQUARE   ))
    {
      styleStart = styleEnd = this._PATH_CAP_START_FLAT;
      context.lineCap = "square";
    }

    // Rasterize the path
    context.stroke();
    
    // Special styles for the path caps? Then add decorations to the stroked
    // line segments. Since in Embedded Wizard start and end caps can be 
    // specified individually and there is also the triangle style supported
    // we can't use Canvas 2D cap style for this purpose.
    if (( styleStart !== this._PATH_CAP_START_FLAT ) ||
        ( styleEnd   !== this._PATH_CAP_END_FLAT ))
    {
      context.beginPath();

      // Evaluate all sub-path and feed the Context2D with the path data
      for ( i = 0; i < noOfSubPaths; i++ )
      {
        var subPath = subPaths[i];
      
        // Any sub-path data to rasterize?   
        if ( subPath && subPath.NoOfEdges && !subPath.IsClosed )
        {
          var data = subPath.Data;
          var qs   = 0;
          var qe   = subPath.NoOfEdges * 2 + 1;
          var xs1  = data[ qs++ ];
          var ys1  = data[ qs++ ];
          var ye1  = data[ qe-- ];
          var xe1  = data[ qe-- ];

          // Should append a cap at the begin of the path?
          if (( styleStart === this._PATH_CAP_START_SQUARE ) ||
              ( styleStart === this._PATH_CAP_START_TRIANGLE ))
          {
            var xs2, ys2;

            // Skip over zero length segments
            do
              { xs2 = data[ qs++ ]; ys2 = data[ qs++ ]; }
            while (( xs2 === xs1 ) && ( ys2 === ys1 ) && ( qs < qe ));

            xs2 = xs1 - xs2; ys2 = ys1 - ys2;

            // Any segment to stroke?
            if ( xs2 || ys2 )
            {
              var len = Math.sqrt( xs2 * xs2 + ys2 * ys2 );
              var ux, uy;

              ux = xs2 / len; xs2 = ux * aWidth * 0.5; 
              uy = ys2 / len; ys2 = uy * aWidth * 0.5;

              // The path starts with a square cap
              if ( styleStart === this._PATH_CAP_START_SQUARE )
              {
                context.moveTo( xs1 + ys2 - ux, ys1 - xs2 - uy );
                context.lineTo( xs1 - ys2 - ux, ys1 + xs2 - uy );
                context.lineTo( xs1 - ys2 + xs2, ys1 + xs2 + ys2 );
                context.lineTo( xs1 + ys2 + xs2, ys1 - xs2 + ys2 );
              }

              // ... or with a triangle cap
              else
              {
                context.moveTo( xs1 + ys2, ys1 - xs2 );
                context.lineTo( xs1 + ys2 - ux, ys1 - xs2 - uy );
                context.lineTo( xs1 - ys2 - ux, ys1 + xs2 - uy );
                context.lineTo( xs1 - ys2, ys1 + xs2 );
                context.lineTo( xs1 + xs2, ys1 + ys2 );
              }

              context.closePath();
            }
          }
          else if ( styleStart === this._PATH_CAP_START_ROUND )
            context.arc( xs1, ys1, aWidth / 2, 0, 2 * Math.PI );

          // Should append a cap at the end of the path?
          if (( styleEnd === this._PATH_CAP_END_SQUARE ) ||
              ( styleEnd === this._PATH_CAP_END_TRIANGLE ))
          {
            var xe2, ye2;

            // Skip over zero length segments
            do
              { ye2 = data[ qe-- ]; xe2 = data[ qe-- ]; }
            while (( xe2 === xe1 ) && ( ye2 === ye1 ) && ( qs < qe ));

            xe2 = xe1 - xe2; ye2 = ye1 - ye2;
            
            // Any segment to stroke?
            if ( xe2 || ye2 )
            {
              var len = Math.sqrt( xe2 * xe2 + ye2 * ye2 );
              var ux, uy;

              ux = xe2 / len; xe2 = ux * aWidth * 0.5; 
              uy = ye2 / len; ye2 = uy * aWidth * 0.5;
            
              // The path ends with square cap
              if ( styleEnd === this._PATH_CAP_END_SQUARE )
              {
                context.moveTo( xe1 + ye2 - ux, ye1 - xe2 - uy );
                context.lineTo( xe1 - ye2 - ux, ye1 + xe2 - uy );
                context.lineTo( xe1 - ye2 + xe2, ye1 + xe2 + ye2 );
                context.lineTo( xe1 + ye2 + xe2, ye1 - xe2 + ye2 );
              }

              // ... or with the triangle cap
              else
              {
                context.moveTo( xe1 + ye2, ye1 - xe2 );
                context.lineTo( xe1 + ye2 - ux, ye1 - xe2 - uy );
                context.lineTo( xe1 - ye2 - ux, ye1 + xe2 - uy );
                context.lineTo( xe1 - ye2, ye1 + xe2 );
                context.lineTo( xe1 + xe2, ye1 + ye2 );
              }
            
              context.closePath();
            }
          }
          else if ( styleEnd === this._PATH_CAP_END_ROUND )
            context.arc( xe1, ye1, aWidth / 2, 0, 2 * Math.PI );
        }
      }
      
      context.fill();
    }

    // Now, continue with the texture. Configure it
    gl.SrcSurface = null;
    gl.bindTexture( gl.TEXTURE_2D, texture );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S,     gl.CLAMP_TO_EDGE );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T,     gl.CLAMP_TO_EDGE );

    // Copy the image data from the canvas element into the texture 
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas );

    // Prepare a data structure describing a bitmap
    surface.Format        = emwi._PIXEL_FORMAT_ALPHA8;
    surface.Width         = aSize[0];
    surface.Height        = aSize[1];
    surface.RealWidth     = aSize[0];
    surface.RealHeight    = aSize[1];
    surface.InvRealWidth  = 1 / aSize[0];
    surface.InvRealHeight = 1 / aSize[1];
    surface.InvDstWidth   = 2 / aSize[0];
    surface.InvDstHeight  = 2 / aSize[1];
    surface.Texture       = texture;
    surface.Framebuffer   = null;

    return bitmap;
  };

  // ---------------------------------------------------------------------------
  // The function FillPath() fills within the rectangular area aDstRect of the
  // given bitmap aDst a polygon determined by the data stored in aPath. The
  // polygon is filled with a color gradient specified by the four color 
  // parameters aColorTL .. aColorBL.
  //
  // An additional clipping area aClipRect limits the operation. All pixel lying
  // outside this area will not be drawn. The last aBlend parameter controls the
  // mode how drawn pixel are combined with the pixel already existing in the
  // destination bitmap. If aBlend is 'true', the drawn pixel are alpha-blended
  // with the background, otherwise the drawn pixel will overwrite the old 
  // content.
  //
  // If aFlipY is 'true', the coordinate system of the path is vertically
  // mirrored and its origin is moved to the bottom-left edge of aDstRect.
  // aOffset adds and additional offset to move the origin of the path
  // coordinate system. Changing this value scrolls the displayed path content.
  //
  // If aAntialiased is 'true', the function applies antialiasing to the pixel.
  // The parameter aNonZeroWinding controls the fill rule to be used by the
  // algorithm. If this parameter is 'false', the even-odd fill rule is used. 
  // If this parameter is 'true', the non-zero winding rule is used.
  // ---------------------------------------------------------------------------
  emwi._FillPath = function( aDst, aPath, aDstFrameNo, aClipRect, aDstRect, 
    aFlipY, aOffset, aColorTL, aColorTR, aColorBR, aColorBL, aBlend, 
    aAntialiased, aNonZeroWinding )
  {
    var gl   = this._Context;
    var dst  = null;
    var dstX = aOffset[0];
    var dstY = aOffset[1];
    var x1, y1, x2, y2;

    // Select the destination bitmap frame for this operation
    if ( aDst && ( aDstFrameNo >= 0 ) && ( aDstFrameNo < aDst.NoOfFrames ))
    {
      aDstFrameNo = aDst.Mapping? aDst.Mapping[ aDstFrameNo ] : aDstFrameNo;
      dst = aDst.Frames[ aDstFrameNo ];
    }

    // Only native surfaces are allowed as the destination
    if ( !dst || ( dst.Surface.Format !== this._PIXEL_FORMAT_NATIVE ))
    {
      console.log( "EmWi error: Invalid destination bitmap in the drawing operation." );
      return;
    }

    // No existing source frame selected for the drawing operation
    if ( !aPath )
    {
      console.log( "EmWi error: Invalid path object in the drawing operation." );
      return;
    }

    // Eventually update internal path information if the path data has been
    // modified in the past
    this._UpdatePath( aPath );

    // Estimate the origin of the path coordinate system and the area occupied 
    // by the drawn polygon. Note, the coordinate system can be mirrored 
    // vertically
    if ( !aFlipY )
    {
      dstY += aDstRect[1];
      y1    = dstY + aPath.Bounds[1] - 1;
      y2    = dstY + aPath.Bounds[3] + 1;
    }
    else
    {
      dstY +=  aDstRect[3];
      y1    = dstY - aPath.Bounds[3] - 1;
      y2    = dstY - aPath.Bounds[1] + 1;
    }

    dstX += aDstRect[0];
    x1    = dstX + aPath.Bounds[0] - 1;
    x2    = dstX + aPath.Bounds[2] + 1;

    // Limit the area to the destination frame boundary and to the clipping
    // area
    x1    = Math.max( aClipRect[0], aDstRect[0], x1, 0 );
    y1    = Math.max( aClipRect[1], aDstRect[1], y1, 0 );
    x2    = Math.min( aClipRect[2], aDstRect[2], x2, aDst.FrameSize[0]);
    y2    = Math.min( aClipRect[3], aDstRect[3], y2, aDst.FrameSize[1]);
    dstX -= x1;

    // Nothing to do?
    if (( x2 <= x1 ) || ( y2 <= y1 ) || !aPath.NoOfEdges )
      return;

    if ( aFlipY ) dstY -= y2;
    else          dstY -= y1;

    // Draw the path into a temporary bitmap
    var bitmap = this._GetBitmapFromFillPath([ x2 - x1, y2 - y1 ], aPath, 
                                              aFlipY, [ dstX, dstY ], 
                                              aAntialiased, aNonZeroWinding );

    // Failed to create the temporary surface
    if ( !bitmap )
      return;

    // ... and finally display the rasterized image
    this._CopyBitmap( aDst, bitmap, aDstFrameNo, 0, [ x1, y1, x2, y2 ], aDstRect,
                      [ aDstRect[0] - x1, aDstRect[1] - y1 ],
                      aColorTL, aColorTR, aColorBR, aColorBL, aBlend );

    // Take care of textures still connected to texture units
    SelectSrc( gl, null, false );

    // Now release the temporary used texture
    gl.deleteTexture( bitmap.Surfaces[0].Texture );
  };

  // ---------------------------------------------------------------------------
  // The function StrokePath() strokes within the rectangular area aDstRect of
  // the given bitmap aDst a path determined by the data stored in aPath. The
  // path is stroked with line thickness specified in the parameter aWidth and
  // color gradient specified by the four color parameters aColorTL .. aColorBL.
  // With the parameter aStyle the cap and join points of the path are 
  // configured.
  //
  // An additional clipping area aClipRect limits the operation. All pixel lying
  // outside this area will not be drawn. The last aBlend parameter controls the
  // mode how drawn pixel are combined with the pixel already existing in the
  // destination bitmap. If aBlend is 'true', the drawn pixel are alpha-blended
  // with the background, otherwise the drawn pixel will overwrite the old 
  // content.
  //
  // The parameter aWidth deermines the thickness width in pixel to stroke the
  // path. The parameter aStryle contains flags specifying how the path caps and
  // join points should appear. See the enumeration _PATH_CAP_XXX and 
  // _PATH_JOIN_XXX.
  //
  // If aFlipY is 'true', the coordinate system of the path is vertically
  // mirrored and its origin is moved to the bottom-left edge of aDstRect.
  // aOffset adds and additional offset to move the origin of the path
  // coordinate system. Changing this value scrolls the displayed path content.
  //
  // In case aStyle is configured with _PATH_JOIN_MITER, this parameter imposes
  // a limit on the ratio between the miter length and the half of the line
  // thickness aWidth. If the limit is exceeded for a corner, the corner appears
  // as bevel (_PATH_JOIN_BEVEL) instead of miter.
  //
  // If aAntialiased is 'true', the function applies antialiasing to the pixel.
  // ---------------------------------------------------------------------------
  emwi._StrokePath = function( aDst, aPath, aDstFrameNo, aClipRect, aDstRect,
    aFlipY, aOffset, aWidth, aStyle, aMiterLimit, aColorTL, aColorTR, aColorBR,
    aColorBL, aBlend, aAntialiased )
  {
    var styleStart = aStyle & 0x0000FF;
    var styleEnd   = aStyle & 0x00FF00;
    var styleJoin  = aStyle & 0xFF0000;
    var gl         = this._Context;
    var dst        = null;
    var dstX       = aOffset[0];
    var dstY       = aOffset[1];
    var x1, y1, x2, y2;
    var margin;

    // Select the destination bitmap frame for this operation
    if ( aDst && ( aDstFrameNo >= 0 ) && ( aDstFrameNo < aDst.NoOfFrames ))
    {
      aDstFrameNo = aDst.Mapping? aDst.Mapping[ aDstFrameNo ] : aDstFrameNo;
      dst = aDst.Frames[ aDstFrameNo ];
    }

    // Only native surfaces are allowed as the destination
    if ( !dst || ( dst.Surface.Format !== this._PIXEL_FORMAT_NATIVE ))
    {
      console.log( "EmWi error: Invalid destination bitmap in the drawing operation." );
      return;
    }

    // No existing source frame selected for the drawing operation
    if ( !aPath )
    {
      console.log( "EmWi error: Invalid path object in the drawing operation." );
      return;
    }

    // Eventually update internal path information if the path data has been
    // modified in the past
    this._UpdatePath( aPath );

    // Very thin lines don't need the rounded caps. Use the triangle 
    // instead
    if (( styleStart === this._PATH_CAP_START_ROUND ) && ( aWidth < 4 ))
      styleStart = this._PATH_CAP_START_TRIANGLE;

    if (( styleEnd === this._PATH_CAP_END_ROUND ) && ( aWidth < 4 ))
      styleEnd = this._PATH_CAP_END_TRIANGLE;

    // ... not rounded join points
    if (( styleJoin === this._PATH_JOIN_ROUND ) && ( aWidth < 3 ))
      styleJoin = this._PATH_JOIN_BEVEL;

    // Calculate the max. (worst case) margin around the original path, which
    // completely encloses the resulting polygon
    if ( styleJoin === this._PATH_JOIN_MITER )
    {
      if ( aMiterLimit > 1 ) margin = ( aMiterLimit * aWidth * 0.5 ) | 0;
      else                   margin = ( aWidth * 0.5 ) | 0;
    }
    else if (( styleStart === this._PATH_CAP_START_SQUARE ) ||
             ( styleEnd   === this._PATH_CAP_END_SQUARE  ))
      margin = ( aWidth * 0.75 ) | 0;
    else
      margin = ( aWidth + 0.5 ) | 0;

    // Estimate the origin of the path coordinate system and the area occupied 
    // by the drawn polygon. Note, the coordinate system can be mirrored 
    // vertically
    if ( !aFlipY )
    {
      dstY += aDstRect[1];
      y1    = dstY + aPath.Bounds[1] - margin - 1;
      y2    = dstY + aPath.Bounds[3] + margin + 1;
    }
    else
    {
      dstY +=  aDstRect[3];
      y1    = dstY - aPath.Bounds[3] - margin - 1;
      y2    = dstY - aPath.Bounds[1] + margin + 1;
    }

    dstX += aDstRect[0];
    x1    = dstX + aPath.Bounds[0] - margin - 1;
    x2    = dstX + aPath.Bounds[2] + margin + 1;

    // Limit the area to the destination frame boundary and to the clipping
    // area
    x1    = Math.max( aClipRect[0], aDstRect[0], x1, 0 );
    y1    = Math.max( aClipRect[1], aDstRect[1], y1, 0 );
    x2    = Math.min( aClipRect[2], aDstRect[2], x2, aDst.FrameSize[0]);
    y2    = Math.min( aClipRect[3], aDstRect[3], y2, aDst.FrameSize[1]);
    dstX -= x1;

    // Nothing to do?
    if (( x2 <= x1 ) || ( y2 <= y1 ) || !aPath.NoOfEdges || ( aWidth <= 0 ))
      return;

    if ( aFlipY ) dstY -= y2;
    else          dstY -= y1;

    // Draw the path into a temporary bitmap
    var bitmap = this._GetBitmapFromStrokePath([ x2 - x1, y2 - y1 ], aPath, 
                                                aFlipY, [ dstX, dstY ], aWidth,
                                                aStyle, aMiterLimit, aAntialiased );

    // Failed to create the temporary surface
    if ( !bitmap )
      return;

    // ... and finally display the rasterized image
    this._CopyBitmap( aDst, bitmap, aDstFrameNo, 0, [ x1, y1, x2, y2 ], aDstRect,
                      [ aDstRect[0] - x1, aDstRect[1] - y1 ],
                      aColorTL, aColorTR, aColorBR, aColorBL, aBlend );

    // Take care of textures still connected to texture units
    SelectSrc( gl, null, false );

    // Now release the temporary used texture
    gl.deleteTexture( bitmap.Surfaces[0].Texture );
  };

  // ---------------------------------------------------------------------------
  // The function CopyBitmap() copies a rectangular area from the bitmap aSrc
  // to the bitmap aDst. The areas affected by this operation are determined by
  // the both arguments aDstRect and aSrcPos. Optionally the copied pixel can be
  // modulated by a color gradient specified by the four parameters aColorTL ..
  // aColorBL.
  // An additional clipping area aClipRect limits the operation. All pixel lying
  // outside this area will not be drawn. The last aBlend parameter controls the
  // mode how drawn pixel are combined with the pixel already existing in the
  // destination bitmap. If aBlend is 'true', the drawn pixel are alpha-blended
  // with the background, otherwise the drawn pixel will overwrite the old
  // content.
  // ---------------------------------------------------------------------------
  emwi._CopyBitmap = function( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
                         aDstRect, aSrcPos, aColorTL, aColorTR, aColorBR, 
                         aColorBL, aBlend )
  {
    var gl  = this._Context;
    var dst = null;
    var src = null;
    var x1  = aDstRect[0];
    var y1  = aDstRect[1];
    var x2  = aDstRect[2];
    var y2  = aDstRect[3];
    var sx  = aSrcPos[0];
    var sy  = aSrcPos[1];

    // Select the destination bitmap frame for this operation
    if ( aDst && ( aDstFrameNo >= 0 ) && ( aDstFrameNo < aDst.NoOfFrames ))
    {
      aDstFrameNo = aDst.Mapping? aDst.Mapping[ aDstFrameNo ] : aDstFrameNo;
      dst = aDst.Frames[ aDstFrameNo ];
    }

    // Select the source bitmap frame for this operation
    if ( aSrc && ( aSrcFrameNo >= 0 ) && ( aSrcFrameNo < aSrc.NoOfFrames ))
    {
      aSrcFrameNo = aSrc.Mapping? aSrc.Mapping[ aSrcFrameNo ] : aSrcFrameNo;
      src = aSrc.Frames[ aSrcFrameNo ];
    }

    // The source bitmap is still not available. Thus no drawing is possible
    if ( aSrc.Pending )
      return;

    // Only native surfaces are allowed as the destination
    if ( !dst || ( dst.Surface.Format !== this._PIXEL_FORMAT_NATIVE ))
    {
      console.log( "EmWi error: Invalid destination bitmap in the drawing operation." );
      return;
    }

    // No existing source frame selected for the drawing operation
    if ( !src )
    {
      console.log( "EmWi error: Invalid source bitmap in the drawing operation." );
      return;
    }

    // Take in account the source frame boundary
    x2 = Math.min( x2, x1 + aSrc.FrameSize[0] - aSrcPos[0]);
    y2 = Math.min( y2, y1 + aSrc.FrameSize[1] - aSrcPos[1]);
    x1 = Math.max( x1, x1 - aSrcPos[0]);
    y1 = Math.max( y1, y1 - aSrcPos[1]);

    // Limit the area to the destination frame boundary and to the clipping
    // area
    x1 = Math.max( aClipRect[0], x1, 0 );
    y1 = Math.max( aClipRect[1], y1, 0 );
    x2 = Math.min( aClipRect[2], x2, aDst.FrameSize[0]);
    y2 = Math.min( aClipRect[3], y2, aDst.FrameSize[1]);

    // Nothing to do?
    if (( x2 <= x1 ) || ( y2 <= y1 ))
      return;

    // Determine the adequate mode to perform the operation
    var vgradient = ( aColorTL !== aColorBL ) || ( aColorTR !== aColorBR );
    var hgradient = ( aColorTL !== aColorTR ) || ( aColorBL !== aColorBR );
    var gradient  = vgradient || hgradient;
    var fading    =  gradient || ((( aColorTL >> 24 ) & 0xFF ) < 255 );

    // After clipping the source start position can be moved. Additionally take
    // in account the origin position of the source frame
    sx += x1 - aDstRect[0] + src.Origin[0];
    sy += y1 - aDstRect[1] + src.Origin[1];

    // From the given pixel coordinates get the corresponding texture coordinates 
    var srcX1 = sx * src.Surface.InvRealWidth;
    var srcY1 = sy * src.Surface.InvRealHeight;
    var srcX2 = ( sx + x2 - x1 ) * src.Surface.InvRealWidth;
    var srcY2 = ( sy + y2 - y1 ) * src.Surface.InvRealHeight;

    // Clipping a vertical gradient? The gradient colors at the clipping edges
    // need to be interpolated
    if ( vgradient && (( y1 !== aDstRect[1]) || ( y2 !== aDstRect[3])))
    {
      var range = 1 / ( aDstRect[3] - aDstRect[1]);
      var t     = ( y1 -  aDstRect[1]) * range;
      var b     = ( aDstRect[3] - y2 ) * range;
      
      // Left edge of the rectangle ...
      if ( aColorTL !== aColorBL )
      {
        var colorTL = aColorTL;
        if ( t ) aColorTL = InterpolateColor( colorTL,  aColorBL, t );
        if ( b ) aColorBL = InterpolateColor( aColorBL, colorTL,  b );
      }
      
      // Right edge of the rectangle ...
      if ( aColorTR !== aColorBR )
      {
        var colorTR = aColorTR;
        if ( t ) aColorTR = InterpolateColor( colorTR,  aColorBR, t );
        if ( b ) aColorBR = InterpolateColor( aColorBR, colorTR,  b );
      }
    }

    // Clipping a horizontal gradient? The gradient colors at the clipping edges
    // need to be interpolated
    if ( hgradient && (( x1 !== aDstRect[0]) || ( x2 !== aDstRect[2])))
    {
      var range = 1 / ( aDstRect[2] - aDstRect[0]);
      var l     = ( x1 -  aDstRect[0]) * range;
      var r     = ( aDstRect[2] - x2 ) * range;
      
      // Upper edge of the rectangle ...
      if ( aColorTL !== aColorTR )
      {
        var colorTL = aColorTL;
        if ( l ) aColorTL = InterpolateColor( colorTL,  aColorTR, l );
        if ( r ) aColorTR = InterpolateColor( aColorTR, colorTL,  r );
      }
      
      // Bottom edge of the rectangle ...
      if ( aColorBL !== aColorBR )
      {
        var colorBL = aColorBL;
        if ( l ) aColorBL = InterpolateColor( colorBL,  aColorBR, l );
        if ( r ) aColorBR = InterpolateColor( aColorBR, colorBL,  r );
      }
    }

    var v1 = gl.vertexCoords;
    var v2 = gl.vertexColors;

    // Complete the vertex settings for this operation
    v1[0 ] = v1[22] = x1 + dst.Origin[0]; 
    v1[1 ] = v1[12] = y1 + dst.Origin[1];
    v1[11] = v1[33] = x2 + dst.Origin[0];
    v1[34] = v1[23] = y2 + dst.Origin[1];
    v1[2 ] = srcX1; v1[3 ] = srcY1; v1[4 ] = 1;
    v1[13] = srcX2; v1[14] = srcY1; v1[15] = 1;
    v1[35] = srcX2; v1[36] = srcY2; v1[37] = 1;
    v1[24] = srcX1; v1[25] = srcY2; v1[26] = 1;
    v2[5 ] = aColorTL;
    v2[16] = aColorTR;
    v2[38] = aColorBR;
    v2[27] = aColorBL;

    // Determine the drawing destination and best appropriate shader program
    if ( src.Surface.Format === this._PIXEL_FORMAT_NATIVE )
      SelectDst( gl, dst.Surface, fading? gl.Program4 : gl.Program2 );
    else
      SelectDst( gl, dst.Surface, gl.Program6 );

    // Select also the source texture for the following operation
    SelectSrc( gl, src.Surface, false );

    // Determine the alpha-blending mode to apply for this operation
    if (  gl.IsAlphaBlend && !aBlend ) gl.disable( gl.BLEND );
    if ( !gl.IsAlphaBlend &&  aBlend ) gl.enable ( gl.BLEND );
    gl.IsAlphaBlend = aBlend;

    // Transfer the vertex data and initiate the primitive drawing operation
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, gl.vertexBuffer );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );

    // Print evtl. WebGL error messages and terminate
    if ( this._Debug )
      PrintWebGLErrors( gl );
  };

  // ---------------------------------------------------------------------------
  // The function TileBitmap() fills the rectangular area aDstRect of the aDst
  // bitmap with multiple copies of an area aSrcRect from the bitmap aSrc. The
  // copied pixel can optionally be modulated by a color gradient specified by
  // the four color parameters aColorTL .. aColorBL.
  // An additional clipping area aClipRect limits the operation. All pixel lying
  // outside this area will not be drawn. The last aBlend parameter controls the
  // mode how drawn pixel are combined with the pixel already existing in the
  // destination bitmap. If aBlend == true, the drawn pixel are alpha-blended 
  // with the background, otherwise the drawn pixel will overwrite the old 
  // content.
  // ---------------------------------------------------------------------------
  emwi._TileBitmap = function( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
    aDstRect, aSrcRect, aSrcPos, aColorTL, aColorTR, aColorBR, aColorBL,
    aBlend )
  {
    var gl  = this._Context;
    var dst = null;
    var src = null;
    var x1  = aDstRect[0];
    var y1  = aDstRect[1];
    var x2  = aDstRect[2];
    var y2  = aDstRect[3];
    var sx1 = aSrcRect[0];
    var sy1 = aSrcRect[1];
    var sx2 = aSrcRect[2];
    var sy2 = aSrcRect[3];

    // Select the destination bitmap frame for this operation
    if ( aDst && ( aDstFrameNo >= 0 ) && ( aDstFrameNo < aDst.NoOfFrames ))
    {
      aDstFrameNo = aDst.Mapping? aDst.Mapping[ aDstFrameNo ] : aDstFrameNo;
      dst = aDst.Frames[ aDstFrameNo ];
    }

    // Select the source bitmap frame for this operation
    if ( aSrc && ( aSrcFrameNo >= 0 ) && ( aSrcFrameNo < aSrc.NoOfFrames ))
    {
      aSrcFrameNo = aSrc.Mapping? aSrc.Mapping[ aSrcFrameNo ] : aSrcFrameNo;
      src = aSrc.Frames[ aSrcFrameNo ];
    }

    // The source bitmap is still not available. Thus no drawing is possible
    if ( aSrc.Pending )
      return;

    // Only native surfaces are allowed as the destination
    if ( !dst || ( dst.Surface.Format !== this._PIXEL_FORMAT_NATIVE ))
    {
      console.log( "EmWi error: Invalid destination bitmap in the drawing operation." );
      return;
    }

    // No existing source frame selected for the drawing operation
    if ( !src )
    {
      console.log( "EmWi error: Invalid source bitmap in the drawing operation." );
      return;
    }

    // Limit the source area to the source frame boundary
    sx1 = Math.max( sx1, 0 );
    sy1 = Math.max( sy1, 0 );
    sx2 = Math.min( sx2, aSrc.FrameSize[0]);
    sy2 = Math.min( sy2, aSrc.FrameSize[1]);

    // The source area in pixel
    var sw = sx2 - sx1;
    var sh = sy2 - sy1;

    // Limit the area to the destination frame boundary and to the clipping area
    x1 = Math.max( aClipRect[0], x1, 0 );
    y1 = Math.max( aClipRect[1], y1, 0 );
    x2 = Math.min( aClipRect[2], x2, aDst.FrameSize[0]);
    y2 = Math.min( aClipRect[3], y2, aDst.FrameSize[1]);

    // Nothing to do?
    if (( x2 <= x1 ) || ( y2 <= y1 ) || ( sw <= 0 ) || ( sh <= 0 ))
      return;

    // Determine the adequate mode to perform the operation
    var vgradient = ( aColorTL !== aColorBL ) || ( aColorTR !== aColorBR );
    var hgradient = ( aColorTL !== aColorTR ) || ( aColorBL !== aColorBR );
    var gradient  = vgradient || hgradient;
    var fading    =  gradient || ((( aColorTL >> 24 ) & 0xFF ) < 255 );
    var prg;

    // Clipping a vertical gradient? The gradient colors at the clipping edges
    // need to be interpolated
    if ( vgradient && (( y1 !== aDstRect[1]) || ( y2 !== aDstRect[3])))
    {
      var range = 1 / ( aDstRect[3] - aDstRect[1]);
      var t     = ( y1 -  aDstRect[1]) * range;
      var b     = ( aDstRect[3] - y2 ) * range;
      
      // Left edge of the rectangle ...
      if ( aColorTL !== aColorBL )
      {
        var colorTL = aColorTL;
        if ( t ) aColorTL = InterpolateColor( colorTL,  aColorBL, t );
        if ( b ) aColorBL = InterpolateColor( aColorBL, colorTL,  b );
      }
      
      // Right edge of the rectangle ...
      if ( aColorTR !== aColorBR )
      {
        var colorTR = aColorTR;
        if ( t ) aColorTR = InterpolateColor( colorTR,  aColorBR, t );
        if ( b ) aColorBR = InterpolateColor( aColorBR, colorTR,  b );
      }
    }

    // Clipping a horizontal gradient? The gradient colors at the clipping edges
    // need to be interpolated
    if ( hgradient && (( x1 !== aDstRect[0]) || ( x2 !== aDstRect[2])))
    {
      var range = 1 / ( aDstRect[2] - aDstRect[0]);
      var l     = ( x1 -  aDstRect[0]) * range;
      var r     = ( aDstRect[2] - x2 ) * range;
      
      // Upper edge of the rectangle ...
      if ( aColorTL !== aColorTR )
      {
        var colorTL = aColorTL;
        if ( l ) aColorTL = InterpolateColor( colorTL,  aColorTR, l );
        if ( r ) aColorTR = InterpolateColor( aColorTR, colorTL,  r );
      }
      
      // Bottom edge of the rectangle ...
      if ( aColorBL !== aColorBR )
      {
        var colorBL = aColorBL;
        if ( l ) aColorBL = InterpolateColor( colorBL,  aColorBR, l );
        if ( r ) aColorBR = InterpolateColor( aColorBR, colorBL,  r );
      }
    }
    
    var v1 = gl.vertexCoords;
    var v2 = gl.vertexColors;

    // Determine the drawing destination and best appropriate shader program
    if ( src.Surface.Format === this._PIXEL_FORMAT_NATIVE )
      SelectDst( gl, dst.Surface, prg = ( fading? gl.Program9 : gl.Program8 ));
    else
      SelectDst( gl, dst.Surface, prg = gl.ProgramA );

    // Select also the source texture for the following operation
    SelectSrc( gl, src.Surface, false );

    // The origin and the size of the texture area 
    gl.uniform2f( prg.UniformSrcSize, sw * src.Surface.InvRealWidth,
                                      sh * src.Surface.InvRealHeight );
    gl.uniform2f( prg.UniformSrcOfs, ( sx1 + src.Origin[0]) * src.Surface.InvRealWidth,
                                     ( sy1 + src.Origin[1]) * src.Surface.InvRealHeight );

    // The source texture coordinates to fill the destination area. These
    // address only the pixel within the source area by using values in range
    // 0 .. 1 .
    sx1 = ( aSrcPos[0] + x1 - aDstRect[0] + sw ) / sw;
    sy1 = ( aSrcPos[1] + y1 - aDstRect[1] + sh ) / sh;
    sx2 = sx1 + (( x2 - x1 ) / sw );
    sy2 = sy1 + (( y2 - y1 ) / sh );

    // Complete the vertex settings for this operation
    v1[0 ] = v1[22] = x1 + dst.Origin[0]; 
    v1[1 ] = v1[12] = y1 + dst.Origin[1];
    v1[11] = v1[33] = x2 + dst.Origin[0];
    v1[34] = v1[23] = y2 + dst.Origin[1];
    v1[2 ] = sx1; v1[3 ] = sy1; v1[4 ] = 1;
    v1[13] = sx2; v1[14] = sy1; v1[15] = 1;
    v1[35] = sx2; v1[36] = sy2; v1[37] = 1;
    v1[24] = sx1; v1[25] = sy2; v1[26] = 1;
    v2[5 ] = aColorTL;
    v2[16] = aColorTR;
    v2[38] = aColorBR;
    v2[27] = aColorBL;

    // Determine the alpha-blending mode to apply for this operation
    if (  gl.IsAlphaBlend && !aBlend ) gl.disable( gl.BLEND );
    if ( !gl.IsAlphaBlend &&  aBlend ) gl.enable ( gl.BLEND );
    gl.IsAlphaBlend = aBlend;

    // Transfer the vertex data and initiate the primitive drawing operation
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, gl.vertexBuffer );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );

    // Print evtl. WebGL error messages and terminate
    if ( this._Debug )
      PrintWebGLErrors( gl );
  };
  
  // ---------------------------------------------------------------------------
  // The function DrawBitmapFrame() draws a free scalable frame by composing it
  // from up to nine bitmap segments. These segments do correspond to the 4 
  // frame corners, 4 edges and to the frame interior areas. By filling these 
  // areas with repeated copies of the bitmap segments, flexible scalable frame
  // is drawn.
  // The segments come from the source bitmap aSrc, which for this purpose has
  // to be organized as 3 x 3 matrix of equal sized tiles --> the size of the 
  // source area aSrcRect has to a multiple of 3.
  // The resulting size of the drawn frame is specified by aDstRect parameter.
  // The aDrawXXX parameters control which edges are drawn. Optionally the 
  // copied // pixel can be modulated by a color gradient specified by the four
  // parameters aColorTL .. aColorBL.
  // An additional clipping area aClipRect limits the operation. All pixel lying
  // outside this area will not be drawn. The last aBlend parameter controls the
  // mode how drawn pixel are combined with the pixel already existing in the
  // destination bitmap. If aBlend == true, the drawn pixel are alpha-blended 
  // with the background, otherwise the drawn pixel will overwrite the old 
  // content.
  // ---------------------------------------------------------------------------
  emwi._DrawBitmapFrame = function( aDst, aSrc, aDstFrameNo, aSrcFrameNo,
    aClipRect, aDstRect, aSrcRect, aDrawLeftEdge, aDrawTopEdge, aDrawRightEdge,
    aDrawBottomEdge, aDrawInterior, aColorTL, aColorTR, aColorBR, aColorBL,
    aBlend )
  {
    var ofs      = [ 0, 0 ];
    var dstX1    = aDstRect[0];
    var dstY1    = aDstRect[1];
    var dstX2    = aDstRect[2];
    var dstY2    = aDstRect[3];
    var srcX1    = aSrcRect[0];
    var srcY1    = aSrcRect[1];
    var srcX2    = aSrcRect[2];
    var srcY2    = aSrcRect[3];
    var dstW     = dstX2 - dstX1;
    var dstH     = dstY2 - dstY1;
    var bordW    = (( srcX2 - srcX1 ) / 3 ) | 0;
    var bordH    = (( srcY2 - srcY1 ) / 3 ) | 0;
    var interW   = ( srcX2 - srcX1 - bordW * 2 ) | 0;
    var interH   = ( srcY2 - srcY1 - bordH * 2 ) | 0;
    var ofsX     = 0;
    var ofsY     = 0;
    var colorITL = aColorTL;
    var colorITR = aColorTR;
    var colorIBL = aColorBL;
    var colorIBR = aColorBR;
    var colorTTL = aColorTL;
    var colorTTR = aColorTR;
    var colorBBL = aColorBL;
    var colorBBR = aColorBR;
    var colorLTL = aColorTL;
    var colorRTR = aColorTR;
    var colorLBL = aColorBL;
    var colorRBR = aColorBR;

    // Nothing to draw
    if (( dstW <= 0 ) || ( dstH <= 0 ) || ( interW <= 0 ) || ( interH <= 0 ))
      return;

    // The source bitmap is still not available. Thus no drawing is possible
    if ( aSrc && aSrc.Pending )
      return;

    // Special case of the frame having exact the same size as the source area. In such case
    // the operation corresponds to a simple copy of the source area to the destination area.
    if ( aDrawLeftEdge && aDrawRightEdge && aDrawTopEdge && aDrawBottomEdge && aDrawInterior &&
       ( dstW === ( srcX2 - srcX1 )) && ( dstH === ( srcY2 - srcY1 )))
    {
      this._CopyBitmap( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect, aDstRect,
                        [ srcX1, srcY1 ], aColorTL, aColorTR, aColorBR, aColorBL, aBlend );
      return;
    }

    // Draw the frame by using a gradient? Then interpolate the colors for the
    // interior area. Take in account the special cases of ommited edges. In
    // this case the interpolation changes!
    if (( aColorTL !== aColorTR ) || ( aColorBR !== aColorBL ) ||
        ( aColorTR !== aColorBL ))
    {
      if ( aDrawLeftEdge )
      {
        colorTTL = InterpolateColor( aColorTL, aColorTR, bordW / dstW );
        colorBBL = InterpolateColor( aColorBL, aColorBR, bordW / dstW );
      }

      if ( aDrawRightEdge )
      {
        colorTTR = InterpolateColor( aColorTR, aColorTL, bordW / dstW );
        colorBBR = InterpolateColor( aColorBR, aColorBL, bordW / dstW );
      }

      if ( aDrawTopEdge )
      {
        colorLTL = InterpolateColor( aColorTL, aColorBL, bordH / dstH );
        colorRTR = InterpolateColor( aColorTR, aColorBR, bordH / dstH );
      }

      if ( aDrawBottomEdge )
      {
        colorLBL = InterpolateColor( aColorBL, aColorTL, bordH / dstH );
        colorRBR = InterpolateColor( aColorBR, aColorTR, bordH / dstH );
      }

      if ( !aDrawLeftEdge  && !aDrawTopEdge    ) colorITL = aColorTL;
      if (  aDrawLeftEdge  && !aDrawTopEdge    ) colorITL = colorTTL;
      if ( !aDrawLeftEdge  &&  aDrawTopEdge    ) colorITL = colorLTL;
      if ( !aDrawRightEdge && !aDrawTopEdge    ) colorITR = aColorTR;
      if (  aDrawRightEdge && !aDrawTopEdge    ) colorITR = colorTTR;
      if ( !aDrawRightEdge &&  aDrawTopEdge    ) colorITR = colorRTR;
      if ( !aDrawLeftEdge  && !aDrawBottomEdge ) colorIBL = aColorBL;
      if (  aDrawLeftEdge  && !aDrawBottomEdge ) colorIBL = colorBBL;
      if ( !aDrawLeftEdge  &&  aDrawBottomEdge ) colorIBL = colorLBL;
      if ( !aDrawRightEdge && !aDrawBottomEdge ) colorIBR = aColorBR;
      if (  aDrawRightEdge && !aDrawBottomEdge ) colorIBR = colorBBR;
      if ( !aDrawRightEdge &&  aDrawBottomEdge ) colorIBR = colorRBR;

      if ( aDrawLeftEdge && aDrawTopEdge )
        colorITL = InterpolateColor( colorTTL, colorBBL, bordH / dstH );
        
      if ( aDrawLeftEdge && aDrawBottomEdge )
        colorIBL = InterpolateColor( colorBBL, colorTTL, bordH / dstH );
        
      if ( aDrawRightEdge && aDrawTopEdge )
        colorITR = InterpolateColor( colorTTR, colorBBR, bordH / dstH );
        
      if ( aDrawRightEdge && aDrawBottomEdge )
        colorIBR = InterpolateColor( colorBBR, colorTTR, bordH / dstH );
    }

    // If the top or left edges are hidden, the stretchable contents should
    // align to the right/bottom edges.
    if ( aDrawRightEdge  && !aDrawLeftEdge ) ofsX = bordW - dstW;
    if ( aDrawBottomEdge && !aDrawTopEdge  ) ofsY = bordH - dstH;

    // Top-left segment of the source bitmap
    srcX2 = srcX1 + bordW;
    srcY2 = srcY1 + bordH;
    dstX2 = dstX1 + bordW;
    dstY2 = dstY1 + bordH;

    // Start with the top-left corner
    if ( aDrawLeftEdge && aDrawTopEdge )
      this._CopyBitmap( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
        [ dstX1, dstY1, dstX2, dstY2 ], [ srcX1, srcY1 ], aColorTL, colorTTL,
        colorITL, colorLTL, aBlend );

    dstX1 += dstW - bordW;
    dstX2 += dstW - bordW;
    srcX1 += bordW + interW;
    srcX2 += bordW + interW;

    // Draw the top-right corner
    if ( aDrawRightEdge && aDrawTopEdge )
      this._CopyBitmap( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
        [ dstX1, dstY1, dstX2, dstY2 ], [ srcX1, srcY1 ], colorTTR, aColorTR,
        colorRTR, colorITR, aBlend );

    dstY1 += dstH - bordH;
    dstY2 += dstH - bordH;
    srcY1 += bordH + interH;
    srcY2 += bordH + interH;

    // Draw the bottom-right corner
    if ( aDrawRightEdge && aDrawBottomEdge )
      this._CopyBitmap( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
        [ dstX1, dstY1, dstX2, dstY2 ], [ srcX1, srcY1 ], colorIBR, colorRBR,
        aColorBR, colorBBR, aBlend );

    dstX1 -= dstW - bordW;
    dstX2 -= dstW - bordW;
    srcX1 -= bordW + interW;
    srcX2 -= bordW + interW;

    // Draw the bottom-left corner
    if ( aDrawLeftEdge && aDrawBottomEdge )
      this._CopyBitmap( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
        [ dstX1, dstY1, dstX2, dstY2 ], [ srcX1, srcY1 ], colorLBL, colorIBL,
        colorBBL, aColorBL, aBlend );

    dstY1 -= dstH - bordH;
    srcY1 -= interH;
    srcY2 -= bordH;
    ofs[1] = ofsY;

    if ( aDrawTopEdge    ) dstY1 += bordH;
    if ( aDrawBottomEdge ) dstY2 -= bordH;

    // Draw the left edge?
    if ( aDrawLeftEdge )
      this._TileBitmap( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
        [ dstX1, dstY1, dstX2, dstY2 ], [ srcX1, srcY1, srcX2, srcY2 ], ofs,
        colorLTL, colorITL, colorIBL, colorLBL, aBlend );

    dstX1 += dstW - bordW;
    dstX2 += dstW - bordW;
    srcX1 += bordW + interW;
    srcX2 += bordW + interW;

    // Draw the right edge?
    if ( aDrawRightEdge )
      this._TileBitmap( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
        [ dstX1, dstY1, dstX2, dstY2 ], [ srcX1, srcY1, srcX2, srcY2 ], ofs,
        colorITR, colorRTR, colorRBR, colorIBR, aBlend );

    if ( aDrawTopEdge ) dstY1 -= bordH;

    dstY2  = dstY1 + bordH;
    dstX1 -= dstW  - bordW;
    srcX1 -= interW;
    srcX2 -= bordW;
    srcY1 -= bordH;
    srcY2 -= interH;
    ofs[0] = ofsX;
    ofs[1] = 0;

    if ( aDrawLeftEdge  ) dstX1 += bordW;
    if ( aDrawRightEdge ) dstX2 -= bordW;

    // Draw the top edge?
    if ( aDrawTopEdge )
      this._TileBitmap( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
        [ dstX1, dstY1, dstX2, dstY2 ], [ srcX1, srcY1, srcX2, srcY2 ], ofs,
        colorTTL, colorTTR, colorITR, colorITL, aBlend );

    dstY1 += dstH - bordH;
    dstY2 += dstH - bordH;
    srcY1 += bordH + interH;
    srcY2 += bordH + interH;

    // Draw the bottom edge?
    if ( aDrawBottomEdge )
      this._TileBitmap( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
        [ dstX1, dstY1, dstX2, dstY2 ], [ srcX1, srcY1, srcX2, srcY2 ], ofs,
        colorIBL, colorIBR, colorBBR, colorBBL, aBlend );

    if ( aDrawLeftEdge  ) dstX1 -= bordW;

    dstX2  = dstX1 + dstW;
    dstY1 -= dstH - bordH;
    srcY1 -= interH;
    srcY2 -= bordH;
    ofs[1] = ofsY;

    // Coordinates of the interior area. Not drawn edges are filled with the
    // interior area.
    if ( aDrawLeftEdge   ) dstX1 += bordW;
    if ( aDrawTopEdge    ) dstY1 += bordH;
    if ( aDrawRightEdge  ) dstX2 -= bordW;
    if ( aDrawBottomEdge ) dstY2 -= bordH;

    // Fill the interior area?
    if ( aDrawInterior )
      this._TileBitmap( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
        [ dstX1, dstY1, dstX2, dstY2 ], [ srcX1, srcY1, srcX2, srcY2 ], ofs,
        colorITL, colorITR, colorIBR, colorIBL, aBlend );
  };
  
  // ---------------------------------------------------------------------------
  // The function WarpBitmap() performs the projection of a rectangular source
  // bitmap area on a 4 corner polygon within the destination bitmap. The kind
  // of transformation is predetermined by the given polygon coordinates. That
  // way scaling, rotating, mirroring and even 3D perspective warp effects can
  // be performed. In case of a perspective correct projection, the coefficients
  // aW1 .. aW4 controls the perspective warp.
  // Please note that only convex polygons can be drawn with this technique.
  // Drawing non convex polygons can produce unexpected outputs depending on the
  // underlying graphics subsystem or the 3D hardware engine.
  // When performing the projection, the function assumes that the 4 corners of
  // of the source bitmap area are mapped to the four corners of the destination
  // polygon. The top-left source corner corresponds to the first polygon corner
  // The top-right to the second, bottom-right to the third and the bottom-left
  // to the fourth.
  // The copied pixel can optionally be modulated by a color gradient specified
  // by the four color parameters aColor1 .. aColor4.
  // An additional clipping area aClipRect limits the operation. All pixel lying
  // outside this area will not be drawn. The last aBlend parameter controls the
  // mode how drawn pixel are combined with the pixel already existing in the
  // destination bitmap. If aBlend == true, the drawn pixel are alpha-blended 
  // with the background, otherwise the drawn pixel will overwrite the old 
  // content.
  // ---------------------------------------------------------------------------
  emwi._WarpBitmap = function( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
    aDstX1, aDstY1, aDstW1, aDstX2, aDstY2, aDstW2, aDstX3, aDstY3,
    aDstW3, aDstX4, aDstY4, aDstW4, aSrcRect, aColor1, aColor2, aColor3,
    aColor4, aBlend, aFilter )
  {
    if (( aDstX1 === aDstX4 ) && ( aDstX2 === aDstX3 ) &&
        ( aDstY1 === aDstY2 ) && ( aDstY3 === aDstY4 ) &&
        ( aDstW1 === aDstW2 ) && ( aDstW2 === aDstW3 ) &&
        ( aDstW3 === aDstW4 ))
      this._DoScaleBitmap.apply( this, arguments );
    else
      this._DoWarpBitmap.apply( this, arguments );
  };
  
  // This is the WarpBitmap() worker function optimized for scale operations.
  // The parameters are the same as described in the WarpBitmap() function.
  emwi._DoScaleBitmap = function( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
    aDstX1, aDstY1, aDstW1, aDstX2, aDstY2, aDstW2, aDstX3, aDstY3,
    aDstW3, aDstX4, aDstY4, aDstW4, aSrcRect, aColor1, aColor2, aColor3,
    aColor4, aBlend, aFilter )
  {
    var gl     = this._Context;
    var dst    = null;
    var src    = null;
    var dstX1  = aDstX1;
    var dstY1  = aDstY1;
    var dstX2  = aDstX2;
    var dstY2  = aDstY3;
    var srcX1  = aSrcRect[0];
    var srcY1  = aSrcRect[1];
    var srcX2  = aSrcRect[2];
    var srcY2  = aSrcRect[3];
    var x1     = Math.min( dstX1, dstX2 );
    var y1     = Math.min( dstY1, dstY2 );
    var x2     = Math.max( dstX1, dstX2 );
    var y2     = Math.max( dstY1, dstY2 );
    var cgrad  = (( aColor1 != aColor3 ) || ( aColor2 != aColor4 )) &&
                 (( aColor1 != aColor2 ) || ( aColor3 != aColor4 ));
    
    // Select the destination bitmap frame for this operation
    if ( aDst && ( aDstFrameNo >= 0 ) && ( aDstFrameNo < aDst.NoOfFrames ))
    {
      aDstFrameNo = aDst.Mapping? aDst.Mapping[ aDstFrameNo ] : aDstFrameNo;
      dst = aDst.Frames[ aDstFrameNo ];
    }

    // Select the source bitmap frame for this operation
    if ( aSrc && ( aSrcFrameNo >= 0 ) && ( aSrcFrameNo < aSrc.NoOfFrames ))
    {
      aSrcFrameNo = aSrc.Mapping? aSrc.Mapping[ aSrcFrameNo ] : aSrcFrameNo;
      src = aSrc.Frames[ aSrcFrameNo ];
    }

    // The source bitmap is still not available. Thus no drawing is possible
    if ( aSrc.Pending )
      return;

    // Only native surfaces are allowed as the destination
    if ( !dst || ( dst.Surface.Format !== this._PIXEL_FORMAT_NATIVE ))
    {
      console.log( "EmWi error: Invalid destination bitmap in the drawing operation." );
      return;
    }

    // No existing source frame selected for the drawing operation
    if ( !src )
    {
      console.log( "EmWi error: Invalid source bitmap in the drawing operation." );
      return;
    }

    // Take in account the source frame boundary
    srcX1 = Math.max( srcX1, 0 );
    srcY1 = Math.max( srcY1, 0 );
    srcX2 = Math.min( srcX2, aSrc.FrameSize[0]);
    srcY2 = Math.min( srcY2, aSrc.FrameSize[1]);

    // Limit the area to the destination frame boundary and to the clipping
    // area
    x1 = Math.max( aClipRect[0], x1, 0 );
    y1 = Math.max( aClipRect[1], y1, 0 );
    x2 = Math.min( aClipRect[2], x2, aDst.FrameSize[0]);
    y2 = Math.min( aClipRect[3], y2, aDst.FrameSize[1]);

    // Nothing to do?
    if (( x2 <= x1 ) || ( y2 <= y1 ))
      return;

    // Clipping vertically? Interpolate colors and texture coordinates at the
    // intersection position
    if (( y1 > dstY1 ) || ( y2 < dstY1 ) || ( y1 > dstY2 ) || ( y2 < dstY2 ))
    {
      var range = 1 / ( dstY2 - dstY1 );
      var t, b;

      if ( range > 0 ) { t = ( y1 - dstY1 ) * range; b = ( dstY2 - y2 ) * range; }
      else             { t = ( y2 - dstY1 ) * range; b = ( dstY2 - y1 ) * range; }

      // Interpolating colors at the left edge?
      if ( aColor1 !== aColor4 )
      {
        var color1 = aColor1;
        if ( t ) aColor1 = InterpolateColor( aColor1, aColor4, t );
        if ( b ) aColor4 = InterpolateColor( aColor4,  color1, b );
      }
      
      // Interpolating colors at the right edge?
      if ( aColor2 !== aColor3 )
      {
        var color2 = aColor2;
        if ( t ) aColor2 = InterpolateColor( aColor2, aColor3, t );
        if ( b ) aColor3 = InterpolateColor( aColor3,  color2, b );
      }
      
      // Interpolate the texture coordinates
      var tmpY1 = srcY1;
      srcY1 = srcY1 + ( srcY2 - srcY1 ) * t;
      srcY2 = srcY2 + ( tmpY1 - srcY2 ) * b;
      
      // Adjust the destination coordinates
      if ( y1 > dstY1 ) dstY1 = y1; else if ( y2 < dstY1 ) dstY1 = y2;
      if ( y1 > dstY2 ) dstY2 = y1; else if ( y2 < dstY2 ) dstY2 = y2;
    }

    // Clipping horizontally?
    if (( x1 > dstX1 ) || ( x2 < dstX1 ) || ( x1 > dstX2 ) || ( x2 < dstX2 ))
    {
      var range = 1 / ( dstX2 - dstX1 );
      var l, r;

      if ( range > 0 ) { l = ( x1 - dstX1 ) * range; r = ( dstX2 - x2 ) * range; }
      else             { l = ( x2 - dstX1 ) * range; r = ( dstX2 - x1 ) * range; }
      
      // Interpolating colors at the upper edge?
      if ( aColor1 !== aColor2 )
      {
        var color1 = aColor1;
        if ( l ) aColor1 = InterpolateColor( aColor1, aColor2, l );
        if ( r ) aColor2 = InterpolateColor( aColor2,  color1, r );
      }
      
      // Interpolating colors at the bottom edge?
      if ( aColor4 !== aColor3 )
      {
        var color4 = aColor4;
        if ( l ) aColor4 = InterpolateColor( aColor4, aColor3, l );
        if ( r ) aColor3 = InterpolateColor( aColor3,  color4, r );
      }

      // Interpolate the texture coordinates
      var tmpX1 = srcX1;
      srcX1 = srcX1 + ( srcX2 - srcX1 ) * l;
      srcX2 = srcX2 + ( tmpX1 - srcX2 ) * r;

      // Adjust the destination coordinates
      if ( x1 > dstX1 ) dstX1 = x1; else if ( x2 < dstX1 ) dstX1 = x2;
      if ( x1 > dstX2 ) dstX2 = x1; else if ( x2 < dstX2 ) dstX2 = x2;
    }

    // From source bitmap pixel coordinates get the corresponding texture ST
    // coordinates lying in tange 0 .. 1
    srcX1 = ( srcX1 + src.Origin[0]) * src.Surface.InvRealWidth;
    srcY1 = ( srcY1 + src.Origin[1]) * src.Surface.InvRealHeight;
    srcX2 = ( srcX2 + src.Origin[0]) * src.Surface.InvRealWidth;
    srcY2 = ( srcY2 + src.Origin[1]) * src.Surface.InvRealHeight;
    
    // Also map the destination coordinates
    dstX1 += dst.Origin[0];
    dstX2 += dst.Origin[0];
    dstY1 += dst.Origin[1];
    dstY2 += dst.Origin[1];
    
    // Any semi-transparence values specified?
    var fading = ((( aColor1 & aColor2 & aColor3 & aColor4 ) >> 24 ) & 0xFF ) < 255;
    var v1     = gl.vertexCoords;
    var v2     = gl.vertexColors;

    // Complete the vertex settings for this operation
    v1[0 ] = dstX1;            v1[11] = dstX2;
    v1[1 ] = dstY1;            v1[12] = dstY1; 
    v1[2 ] = srcX1;            v1[13] = srcX2;
    v1[3 ] = srcY1;            v1[14] = srcY1;
    v1[4 ] = 1;                v1[15] = 1;
    v2[5 ] = aColor1;          v2[16] = aColor2;
    v1[6 ] = 0;                v1[17] = 1;
    v1[7 ] = 0;                v1[18] = 0;
    v1[8 ] = 1;                v1[19] = 1;

    v1[22] = dstX1;            v1[33] = dstX2;
    v1[23] = dstY2;            v1[34] = dstY2; 
    v1[24] = srcX1;            v1[35] = srcX2;
    v1[25] = srcY2;            v1[36] = srcY2;
    v1[26] = 1;                v1[37] = 1;
    v2[27] = aColor4;          v2[38] = aColor3;
    v1[28] = 0;                v1[39] = 1;
    v1[29] = 1;                v1[40] = 1;
    v1[30] = 1;                v1[41] = 1;

    // Determine the drawing destination and best appropriate shader program
    if ( src.Surface.Format === this._PIXEL_FORMAT_NATIVE )
      SelectDst( gl, dst.Surface, fading? ( cgrad? gl.ProgramB : gl.Program4 ) :
                                            gl.Program2 );
    else
      SelectDst( gl, dst.Surface, cgrad? gl.ProgramC : gl.Program6 );

    // Select also the source texture for the following operation
    SelectSrc( gl, src.Surface, aFilter );

    // Determine the alpha-blending mode to apply for this operation
    if (  gl.IsAlphaBlend && !aBlend ) gl.disable( gl.BLEND );
    if ( !gl.IsAlphaBlend &&  aBlend ) gl.enable ( gl.BLEND );
    gl.IsAlphaBlend = aBlend;

    // Gradients with warp operation are calculated by the fragment shader.
    // This requires the color values to be provided to the GPU.
    if ( cgrad )
    {
      gl.uniform4fv( gl.CurProgram.UniformClrTL, ColorToFloatArray( aColor1 ));
      gl.uniform4fv( gl.CurProgram.UniformClrTR, ColorToFloatArray( aColor2 ));
      gl.uniform4fv( gl.CurProgram.UniformClrBR, ColorToFloatArray( aColor3 ));
      gl.uniform4fv( gl.CurProgram.UniformClrBL, ColorToFloatArray( aColor4 ));
    }

    // Transfer the vertex data and initiate the primitive drawing operation
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, gl.vertexBuffer );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4 );

    // Print evtl. WebGL error messages and terminate
    if ( this._Debug )
      PrintWebGLErrors( gl );
  };

  // This is the worker function optimized for bitmap warp operations.
  emwi._DoWarpBitmap = function( aDst, aSrc, aDstFrameNo, aSrcFrameNo, aClipRect,
    aDstX1, aDstY1, aDstW1, aDstX2, aDstY2, aDstW2, aDstX3, aDstY3,
    aDstW3, aDstX4, aDstY4, aDstW4, aSrcRect, aColor1, aColor2, aColor3,
    aColor4, aBlend, aFilter )
  {
    var gl     = this._Context;
    var dst    = null;
    var src    = null;
    var dstX1  = Math.min( aDstX1, aDstX2, aDstX3, aDstX4 );
    var dstY1  = Math.min( aDstY1, aDstY2, aDstY3, aDstY4 );
    var dstX2  = Math.max( aDstX1, aDstX2, aDstX3, aDstX4 );
    var dstY2  = Math.max( aDstY1, aDstY2, aDstY3, aDstY4 );
    var srcX1  = aSrcRect[0];
    var srcY1  = aSrcRect[1];
    var srcX2  = aSrcRect[2];
    var srcY2  = aSrcRect[3];
    var x1     = Math.round( dstX1 );
    var y1     = Math.round( dstY1 );
    var x2     = Math.round( dstX2 );
    var y2     = Math.round( dstY2 );
    var cx1    = x1;
    var cy1    = y1;
    var cx2    = x2;
    var cy2    = y2;

    // Select the destination bitmap frame for this operation
    if ( aDst && ( aDstFrameNo >= 0 ) && ( aDstFrameNo < aDst.NoOfFrames ))
    {
      aDstFrameNo = aDst.Mapping? aDst.Mapping[ aDstFrameNo ] : aDstFrameNo;
      dst = aDst.Frames[ aDstFrameNo ];
    }

    // Select the source bitmap frame for this operation
    if ( aSrc && ( aSrcFrameNo >= 0 ) && ( aSrcFrameNo < aSrc.NoOfFrames ))
    {
      aSrcFrameNo = aSrc.Mapping? aSrc.Mapping[ aSrcFrameNo ] : aSrcFrameNo;
      src = aSrc.Frames[ aSrcFrameNo ];
    }

    // The source bitmap is still not available. Thus no drawing is possible
    if ( aSrc.Pending )
      return;

    // Only native surfaces are allowed as the destination
    if ( !dst || ( dst.Surface.Format !== this._PIXEL_FORMAT_NATIVE ))
    {
      console.log( "EmWi error: Invalid destination bitmap in the drawing operation." );
      return;
    }

    // No existing source frame selected for the drawing operation
    if ( !src )
    {
      console.log( "EmWi error: Invalid source bitmap in the drawing operation." );
      return;
    }

    // Take in account the source frame boundary
    srcX1 = Math.max( srcX1, 0 );
    srcY1 = Math.max( srcY1, 0 );
    srcX2 = Math.min( srcX2, aSrc.FrameSize[0]);
    srcY2 = Math.min( srcY2, aSrc.FrameSize[1]);

    // Limit the area to the destination frame boundary and to the clipping
    // area
    x1 = Math.max( aClipRect[0], x1, 0 );
    y1 = Math.max( aClipRect[1], y1, 0 );
    x2 = Math.min( aClipRect[2], x2, aDst.FrameSize[0]);
    y2 = Math.min( aClipRect[3], y2, aDst.FrameSize[1]);

    // Nothing to do?
    if (( x2 <= x1 ) || ( y2 <= y1 ))
      return;

    // The 'W' coefficients have always to be positive ...
    if (( aDstW1 <= 0 ) && ( aDstW2 <= 0 ) && ( aDstW3 <= 0 ) && ( aDstW4 <= 0 ))
    {
      aDstW1 = -aDstW1; aDstW2 = -aDstW2;
      aDstW3 = -aDstW3; aDstW4 = -aDstW4;
    }

    // Mixed signs can not be handled
    if (( aDstW1 < 0 ) || ( aDstW2 < 0 ) || ( aDstW3 < 0 ) || ( aDstW4 < 0 ))
    {
      console.log( "Emwi error: Not convex destination polygon to warp bitmap." );
      return;
    }

    // Anylyse the kind of operation to perform
    var persp    = ( aDstW1 !== aDstW2 ) || ( aDstW3 !== aDstW4 ) ||
                   ( aDstW1 !== aDstW3 );
    var gradient = ( aColor1 !== aColor2 ) || ( aColor3 !== aColor4 ) ||
                   ( aColor1 !== aColor4 ) || ( aColor2 !== aColor3 );
    var fading   =  gradient || ((( aColor1 >> 24 ) & 0xFF ) < 255 );
    var sgrad    =  gradient;
    var cgrad    =  gradient &&
                   (( aColor1 != aColor3 ) || ( aColor2 != aColor4 )) &&
                   (( aColor1 != aColor2 ) || ( aColor3 != aColor4 ));

    // For perspective transformation bring the 'W' coefficients in the common
    // range 0.0 .. 1.0
    if ( persp )
    {
      var minW = aDstW1;

      if ( aDstW2 < minW ) minW = aDstW2;
      if ( aDstW3 < minW ) minW = aDstW3;
      if ( aDstW4 < minW ) minW = aDstW4;

      // The shape is not convex
      if ( !aDstW1 || !aDstW2 || !aDstW3 || !aDstW4 )
      {
        console.log( "Emwi error: Not convex destination polygon to warp bitmap." );
        return;
      }

      aDstW1 = minW / aDstW1; aDstW2 = minW / aDstW2;
      aDstW3 = minW / aDstW3; aDstW4 = minW / aDstW4;
    }

    // In case of pure affine transformation reset the 'W' coefficients
    else
    {
      aDstW1 = 1; aDstW2 = 1;
      aDstW3 = 1; aDstW4 = 1;
    }

    // From source bitmap pixel coordinates get the corresponding texture ST
    // coordinates lying in tange 0 .. 1
    srcX1 = ( srcX1 + src.Origin[0]) * src.Surface.InvRealWidth;
    srcY1 = ( srcY1 + src.Origin[1]) * src.Surface.InvRealHeight;
    srcX2 = ( srcX2 + src.Origin[0]) * src.Surface.InvRealWidth;
    srcY2 = ( srcY2 + src.Origin[1]) * src.Surface.InvRealHeight;
    
    var v1    = gl.vertexCoords;
    var v2    = gl.vertexColors;
    var dx    = dst.Origin[0];
    var dy    = dst.Origin[1];
    var count = 4;

    // Complete the vertex settings for this operation
    v1[0 ] = aDstX1 + dx;      v1[11] = aDstX2 + dx;
    v1[1 ] = aDstY1 + dy;      v1[12] = aDstY2 + dy; 
    v1[2 ] = srcX1 * aDstW1;   v1[13] = srcX2 * aDstW2;
    v1[3 ] = srcY1 * aDstW1;   v1[14] = srcY1 * aDstW2;
    v1[4 ] = aDstW1;           v1[15] = aDstW2;
    v2[5 ] = aColor1;          v2[16] = aColor2;
    v1[6 ] = 0;                v1[17] = aDstW2;
    v1[7 ] = 0;                v1[18] = 0;
    v1[8 ] = aDstW1;           v1[19] = aDstW2;

    v1[33] = aDstX4 + dx;      v1[22] = aDstX3 + dx;
    v1[34] = aDstY4 + dy;      v1[23] = aDstY3 + dy; 
    v1[35] = srcX1 * aDstW4;   v1[24] = srcX2 * aDstW3;
    v1[36] = srcY2 * aDstW4;   v1[25] = srcY2 * aDstW3;
    v1[37] = aDstW4;           v1[26] = aDstW3;
    v2[38] = aColor4;          v2[27] = aColor3;
    v1[39] = 0;                v1[28] = aDstW3;
    v1[40] = aDstW4;           v1[29] = aDstW3;
    v1[41] = aDstW4;           v1[30] = aDstW3;

    // Clip the quad path to the given clipping area
    if (( x1 > cx1 ) || ( y1 > cy1 ) || ( x2 < cx2 ) || ( y2 < cy2 ))
    {
      count = IntersectPathVertical  ( v1, v2, count, false, x1 + dx );
      count = IntersectPathVertical  ( v1, v2, count, false, x2 + dx );
      count = ClipPathVertical       ( v1, count, x1 + dx, x2 + dx);
      count = IntersectPathHorizontal( v1, v2, count, false, y1 + dy );
      count = IntersectPathHorizontal( v1, v2, count, false, y2 + dy );
      count = ClipPathHorizontal     ( v1, count, y1 + dy, y2 + dy );

      // The entire quad outside the clipping area
      if ( count < 3 )
        return;
    }

    // Determine the drawing destination and best appropriate shader program
    if (( src.Surface.Format === this._PIXEL_FORMAT_NATIVE ) && !fading )
      SelectDst( gl, dst.Surface, persp? gl.Program3 : gl.Program2 );
    else if ( src.Surface.Format === this._PIXEL_FORMAT_NATIVE )
      SelectDst( gl, dst.Surface, persp? ( sgrad? gl.ProgramD : gl.Program5 ) : 
                                         ( cgrad? gl.ProgramB : gl.Program4 ));
    else
      SelectDst( gl, dst.Surface, persp? ( sgrad? gl.ProgramE : gl.Program7 ) : 
                                         ( cgrad? gl.ProgramC : gl.Program6 ));

    // Select also the source texture for the following operation
    SelectSrc( gl, src.Surface, aFilter );

    // Determine the alpha-blending mode to apply for this operation
    if (  gl.IsAlphaBlend && !aBlend ) gl.disable( gl.BLEND );
    if ( !gl.IsAlphaBlend &&  aBlend ) gl.enable ( gl.BLEND );
    gl.IsAlphaBlend = aBlend;

    // Workaround for Internet Explorer 11. Change the order of vertices so the
    // function TRIANGLE_STRIP can be used instead of the non supported
    // TRINAGLE_FAN.
    switch ( count )
    {
      case 4 : { v1.set( v1.subarray(  22,  44 ), 33 );
                 v1.set( v1.subarray(  44,  55 ), 22 );
               break; }
      case 5 : { v1.set( v1.subarray(  22,  55 ), 33 );
                 v1.set( v1.subarray(  55,  66 ), 22 );
               break; }
      case 6 : { v1.set( v1.subarray(  22,  66 ), 66 );
                 v1.set( v1.subarray(  99, 110 ), 22 );
                 v1.set( v1.subarray(  66,  77 ), 33 );
                 v1.set( v1.subarray(  88,  99 ), 44 );
                 v1.set( v1.subarray(  77,  88 ), 55 );
               break; }
      case 7 : { v1.set( v1.subarray(  22,  77 ), 77 );
                 v1.set( v1.subarray( 121, 132 ), 22 );
                 v1.set( v1.subarray(  77,  88 ), 33 );
                 v1.set( v1.subarray( 110, 121 ), 44 );
                 v1.set( v1.subarray(  88, 110 ), 55 );
               break; }
      case 8 : { v1.set( v1.subarray(  22,  88 ), 88 );
                 v1.set( v1.subarray( 143, 154 ), 22 );
                 v1.set( v1.subarray(  88,  99 ), 33 );
                 v1.set( v1.subarray( 132, 143 ), 44 );
                 v1.set( v1.subarray(  99, 110 ), 55 );
                 v1.set( v1.subarray( 121, 132 ), 66 );
                 v1.set( v1.subarray( 110, 121 ), 77 );
               break; }
    }

    // Gradients with warp operation are calculated by the fragment shader.
    // This requires the color values to be provided to the GPU.
    if ( cgrad || ( sgrad && persp ))
    {
      gl.uniform4fv( gl.CurProgram.UniformClrTL, ColorToFloatArray( aColor1 ));
      gl.uniform4fv( gl.CurProgram.UniformClrTR, ColorToFloatArray( aColor2 ));
      gl.uniform4fv( gl.CurProgram.UniformClrBR, ColorToFloatArray( aColor3 ));
      gl.uniform4fv( gl.CurProgram.UniformClrBL, ColorToFloatArray( aColor4 ));
    }

    // Transfer the vertex data and initiate the primitive drawing operation
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, gl.vertexBuffer );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, count );

    // Print evtl. WebGL error messages and terminate
    if ( this._Debug )
      PrintWebGLErrors( gl );
  };

  // This helper function creates a new temporary surface with the given size.
  function CreateTmpSurface( aGL, aWidth, aHeight )
  {
    var texture = aGL.createTexture();
    var surface = {};
      
    // Configure the texture
    aGL.SrcSurface = null;
    aGL.bindTexture( aGL.TEXTURE_2D, texture );
    aGL.texParameteri( aGL.TEXTURE_2D, aGL.TEXTURE_MIN_FILTER, aGL.NEAREST );
    aGL.texParameteri( aGL.TEXTURE_2D, aGL.TEXTURE_MAG_FILTER, aGL.NEAREST );
    aGL.texParameteri( aGL.TEXTURE_2D, aGL.TEXTURE_WRAP_S,     aGL.CLAMP_TO_EDGE );
    aGL.texParameteri( aGL.TEXTURE_2D, aGL.TEXTURE_WRAP_T,     aGL.CLAMP_TO_EDGE );

    // Reserve video memory for the texture.
    aGL.texImage2D( aGL.TEXTURE_2D, 0, aGL.RGBA, aWidth, aHeight, 0, aGL.RGBA,
                    aGL.UNSIGNED_BYTE, null );
      
    // Complete the surface attributes
    surface.Width         = aWidth;
    surface.Height        = aHeight;
    surface.RealWidth     = aWidth;
    surface.RealHeight    = aHeight;
    surface.InvRealWidth  = 1 / aWidth;
    surface.InvRealHeight = 1 / aHeight;
    surface.InvDstWidth   = 2 / aWidth;
    surface.InvDstHeight  = 2 / aHeight;
    surface.Texture       = texture;
    surface.Framebuffer   = null;

    return surface;
  }

  // This helper function releases a temporarily used surface.
  function DeleteTmpSurface( aGL, aSurface )
  {
    // Take care of textures still connected to texture units
    if ( aGL.SrcSurface === aSurface ) SelectSrc( aGL, null, false );
    if ( aGL.MskSurface === aSurface ) SelectMsk( aGL, null, false );

    if ( aSurface.Texture     ) aGL.deleteTexture( aSurface.Texture );
    if ( aSurface.Framebuffer ) aGL.deleteFramebuffer( aSurface.Framebuffer );
  }

  // This helper function performs a filter operation from the area aSrcR of aSrc
  // surface to the area aDstR in the surface aDst by using the specified shader
  // program aProgram. Depending on the program, further operations are possible:
  // If the program evaluates a mask, the corresponding ALPHA8 surface is passed
  // in the parameter aMask and the position of the mask within the destination
  // is specified in the parameter aMaskR. With the parameter aMaskInvert, the 
  // mask effect is inverted. The parameter aVertDir determines the direction to 
  // perform filter calculation (if it is relevant).
  //
  // Depending on the shader program the parameters aIntensity and aColor are 
  // used to control the tining of the resulting outputs. The final parameters 
  // aOpacity, aBlend and aFilter control the blending mode and the bi-linear
  // filter. The parameter aDstR, aSrcR, aMaskR and aClampR are expected to be
  // arrays with x1,y1,x2,y2 coordinates describing the corresponding area.
  function Filter( aGL, aDst, aSrc, aMask, aDstR, aSrcR, aMaskR, aClampR,
    aVertDir, aIntensity, aColor, aMaskInvert, aProgram, aOpacity, aBlend,
    aFilter )
  {
    var v1 = aGL.vertexCoords;

    // Determine the drawing destination and the appropriate shader program
    SelectDst( aGL, aDst, aProgram );

    // Select also the source texture for the following operation
    SelectSrc( aGL, aSrc, aFilter );

    // Complete the vertex settings for this operation
    v1[0 ] = v1[22] = aDstR[0]; v1[1 ] = v1[12]           = aDstR[1];
    v1[11] = v1[33] = aDstR[2]; v1[34] = v1[23]           = aDstR[3];
    v1[2 ]          = aSrcR[0]; v1[3 ] = aSrcR[1]; v1[4 ] = 1;
    v1[13]          = aSrcR[2]; v1[14] = aSrcR[1]; v1[15] = 1;
    v1[35]          = aSrcR[2]; v1[36] = aSrcR[3]; v1[37] = 1;
    v1[24]          = aSrcR[0]; v1[25] = aSrcR[3]; v1[26] = 1;

    // Mask provided?
    if ( aMask )
    {
      // Store in vertex buffer the mask coordinates
      v1[9 ] = aMaskR[0]; v1[10] = aMaskR[1];
      v1[20] = aMaskR[2]; v1[21] = aMaskR[1];
      v1[42] = aMaskR[2]; v1[43] = aMaskR[3];
      v1[31] = aMaskR[0]; v1[32] = aMaskR[3];

      // Select the mask texture for the following operation
      SelectMsk( aGL, aMask, false );

      // Configuration of the mask.
      aGL.uniform1i( aProgram.UniformMskInvert, aMaskInvert? 1 : 0 );

      // The size of a single pixel in texture coordinates
      aGL.uniform2f( aProgram.UniformMskPxl, aMask.InvRealWidth, 
                                             aMask.InvRealHeight );

      // The direction in which to perform the filter calculation
      aGL.uniform2f( aProgram.UniformMskStep, aVertDir? 0 : aMask.InvRealWidth,
                                              aVertDir? aMask.InvRealHeight : 0 );
    }

    // The top-left and bottom-right clamping borders of the affected texture
    // area
    if ( aClampR && aProgram.UniformClampTL )
    {
      aGL.uniform2f( aProgram.UniformClampTL, 2 * aClampR[0] * aSrc.InvRealWidth,
                                              2 * aClampR[1] * aSrc.InvRealHeight );
      aGL.uniform2f( aProgram.UniformClampBR, 2 * aClampR[2] * aSrc.InvRealWidth,
                                              2 * aClampR[3] * aSrc.InvRealHeight );
    }
    else if ( aProgram.UniformClampTL )
    {
      aGL.uniform2f( aProgram.UniformClampTL, 0, 0 );
      aGL.uniform2f( aProgram.UniformClampBR, 0, 0 );
    }

    // The size of a single pixel in texture coordinates
    aGL.uniform2f( aProgram.UniformSrcPxl, aSrc.InvRealWidth, 
                                           aSrc.InvRealHeight );

    // The direction in which to perform the filter calculation
    aGL.uniform2f( aProgram.UniformSrcStep, aVertDir? 0 : aSrc.InvRealWidth,
                                            aVertDir? aSrc.InvRealHeight : 0 );

    if ( aProgram.UniformTint )
      aGL.uniform4fv( aProgram.UniformTint, ColorToFloatArray( aColor ));

    if ( aProgram.UniformOpacity )
      aGL.uniform1f( aProgram.UniformOpacity, aOpacity / 255 );

    // Parameter for the RGB to gray-scale conversion
    if ( aProgram.UniformIntensity )
      aGL.uniform1f( aProgram.UniformIntensity, aIntensity );

    // Determine the alpha-blending mode to apply for this operation
    if ( !aBlend &&  aGL.IsAlphaBlend ) aGL.disable( aGL.BLEND );
    if (  aBlend && !aGL.IsAlphaBlend ) aGL.enable( aGL.BLEND );
    aGL.IsAlphaBlend = aBlend;

    // Transfer the vertex data and initiate the primitive drawing operation
    aGL.bufferSubData( aGL.ARRAY_BUFFER, 0, aGL.vertexBuffer );
    aGL.drawArrays( aGL.TRIANGLE_STRIP, 0, 4 );
  }

  // Helper function to adjust the given position aValue to the next smaller 
  // position modulo aScale.
  function AdjustToScaleFactorMin( aValue, aScale )
  {
    if ( aValue >= 0 ) return aValue - aValue % aScale;
    else               return aValue - ( aScale - ( -aValue % aScale ));
  }

  // Helper function to adjust the given position aValue to the next greater 
  // position modulo aScale.
  function AdjustToScaleFactorMax( aValue, aScale )
  {
    if ( aValue >= 0 ) return aValue +  aScale - ( aValue % aScale );
    else               return aValue + -aValue % aScale; 
  }

  // ---------------------------------------------------------------------------
  // The function AdjustFilterBlurRadius() estimates the resulting radius for
  // a blur filter operation. Since the blur algorithm supports few discrete
  // blur radius values only, the function permits the pre-selection of the
  // best matching radius.
  // ---------------------------------------------------------------------------
  emwi._AdjustFilterBlurRadius = function( aBlurRadius )
  {
    if      ( aBlurRadius <=  0 ) return 0;
    else if ( aBlurRadius <=  3 ) return 2;
    else if ( aBlurRadius <=  6 ) return 4;
    else if ( aBlurRadius <= 12 ) return 8;
    else if ( aBlurRadius <= 20 ) return 16;
    else if ( aBlurRadius <= 28 ) return 24;
    else if ( aBlurRadius <= 40 ) return 32;
    else if ( aBlurRadius <= 56 ) return 48;
    else                          return 64;
  };

  // ---------------------------------------------------------------------------
  // The function FilterBitmap() copies a rectangular area from the bitmap aSrc
  // to the bitmap aDst by applying one or multiple filters. The destination
  // area affected by this operation is determined by the parameters aDstRect.
  // The parameter aSrcPos determines the position within the source bitmap to
  // map to the top-left corner of the aDstRect area. This function implements
  // following three filter categories. Multiple filter categories can be used
  // together to create more sophisticated effects:
  //
  // 1 Mask: The parameter aMask can provide an optional ALPHA8 bitmap to use as
  //   mask for the filter operation. If aMask is 'null', no masking is applied.
  //   The position in the mask bitmap to map to the top-left corner of the area
  //   aDstRect is determined by the parameter aMaskPos. The values from the
  //   mask bitmap are used to modulate the opacity of the resulting pixel. The
  //   area outside the mask bitmap is considered as transparent. With the
  //   parameter aMaskInverted the opacity resulting from the mask is inverted.
  //
  // 2 Blur: This filter is controlled by the parameter aBlurRadius. If this
  //   value is <= 0, the blur is disabled. The parameter aBlurClampToEdges
  //   controls the blur effect at the edges of the source bitmap. Providing
  //   'true' in this parameter prevents the edges from being transparent when
  //   the bitmap is aligned at edges of the aDstRect area. The blur effect may
  //   be limited to few discrete blur radius values. To query the supported
  //   values use the function AdjustFilterBlurRadius().
  //
  //   Please note: If used together with 'Mask' filter, the order in which blur
  //   and mask operations are performed is significant. Per default the mask
  //   affects the pixel 'after' all preceding filter operations are done. By
  //   using the parameter aMaskBeforeBlur the order of the operations can be
  //   reversed.
  //
  // 3 Tint: This filter calculates from the original color value a new color
  //   value, which then is mixed with the original color value according to the
  //   parameter aIntensity. aIntensity lies in range 0.0 .. 1.0. The 'Tint'
  //   filter is controlled by the parameter aMode, which can be one of:
  //
  //   - _TINT_MODE_GRAYSCALE : This mode converts the RGB colors to grayscale
  //     values. The original RGB colors resulting from the source image are
  //     converted to grayscale values according to their luminance. The opacity
  //     information is taken over without any modifications. Following are the
  //     corresponding equations:
  //
  //       new_color.rgb = luminance( org_color.rgb )
  //       new_color.a   = org_color.a
  //   
  //   - _TINT_MODE_TINT_BY_OPACITY : This mode modulates a color value found
  //     in the parameter aColor with opacity (the alpha value) of the original
  //     color. The RGB information of the original color is ignored. Following
  //     is the corresponding equation:
  //
  //       new_color = org_color.alpha * aColor 
  //   
  //   - _TINT_MODE_TINT_BY_LUMINANCE : This mode calculates from the original
  //     color value its luminance and uses it to modulate the RGB components
  //     of the color value specified in the parameter aColor. The opacity of
  //     the original color value modulates the opacity aColor. Following are
  //     the corresponding equations:
  //
  //       new_color.rgb = luminance( org_color.rgb ) * aColor.rgb
  //       new_color.a   = org_color.a                * aColor.a
  //
  // The colors resulting from all above mentioned filter operations are finally
  // modulated by the opacity value specified in the parameter aOpacity. This
  // value lies in range 0 .. 255. In this way, the effect of all active filters
  // can be faded-in/out.
  //
  // An additional clipping area aClipRect limits the operation. All pixel lying
  // outside this area will not be drawn. The last parameter aBlend controls the
  // mode how resulting pixel affect the pixel already existing in the drawing
  // destination bitmap. If aBlend is 'true', the resulting pixel are alpha-
  // blended with the background, otherwise the drawn pixel will overwrite the
  // old content.
  //
  // Please note, the function does not support multi-frame bitmaps for source
  // and mask. Only single frame bitmaps are allowed. The mask bitmap, may
  // contain ALPHA8 format only.
  // ---------------------------------------------------------------------------
  emwi._FilterBitmap = function( aDst, aSrc, aMask, aDstFrameNo, aClipRect,
    aDstRect, aSrcPos, aMaskPos, aMaskInverted, aMaskBeforeBlur, aBlurRadius,
    aBlurClampToEdges, aMode, aIntensity, aColor, aOpacity, aBlend )
  {
    var gl  = this._Context;
    var dst = null;
    var src = null;
    var msk = null;

    // Take in account the possible limitations
    if ( aIntensity  <   0 ) aIntensity = 0;
    if ( aIntensity  >   1 ) aIntensity = 1;
    if ( aOpacity    <   0 ) aOpacity   = 0;
    if ( aOpacity    > 255 ) aOpacity   = 255;

    // The here implemented blur algorithm supports few discrete radius values. 
    // Thus adjust the blur radius so that it corresponds to the area really 
    // affected by the blur.
    var blur = this._AdjustFilterBlurRadius( aBlurRadius );

    // Avoid tinting mode if it is not necessary
    aMode &= ( aIntensity > 0 )? 3 : 0;

    // _GRAYSCALE mode is just a special case of the _TINT_BY_LUMINACE mode
    // modulating white color.
    if ( aMode === this._TINT_MODE_GRAYSCALE )
    {
      aMode  = this._TINT_MODE_TINT_BY_LUMINANCE;
      aColor = 0xFFFFFFFF;
    }

    // Determine the filter options to apply. Exclude invalid combinations.
    var doMask  = aMask !== null;
    var doBlur  = blur > 0;
    var doColor = (( aMode === this._TINT_MODE_TINT_BY_OPACITY   ) || 
                   ( aMode === this._TINT_MODE_TINT_BY_LUMINANCE )) &&
                   ( aIntensity > 0 );

    // Verify parameters which depend on each other.
    aMaskBeforeBlur   &= doBlur && doMask;
    aMaskInverted     &= doMask;
    aBlurClampToEdges &= doBlur;

    // Select the destination bitmap frame for this operation
    if ( aDst && ( aDstFrameNo >= 0 ) && ( aDstFrameNo < aDst.NoOfFrames ))
    {
      aDstFrameNo = aDst.Mapping? aDst.Mapping[ aDstFrameNo ] : aDstFrameNo;
      dst = aDst.Frames[ aDstFrameNo ];
    }

    // Select the source bitmap frame for this operation. Only single-frame bitmaps
    // are allowed.
    if ( aSrc && ( aSrc.NoOfFrames === 1 ))
      src = aSrc.Frames[0];

    // Select the mask bitmap frame for this operation. Only single-frame bitmaps
    // are allowed.
    if ( aMask && ( aMask.NoOfFrames === 1 ))
      msk = aMask.Frames[0];

    // The source or the mask bitmap is still not available. Thus no drawing is
    // possible
    if ( aSrc.Pending || ( aMask && aMask.Pending ))
      return;

    // Only native surfaces are allowed as the destination
    if ( !dst || ( dst.Surface.Format !== this._PIXEL_FORMAT_NATIVE ))
    {
      console.log( "EmWi error: Invalid destination bitmap in the drawing operation." );
      return;
    }

    // Only single-frame surfaces are allowed as the source
    if ( !src )
    {
      console.log( "EmWi error: Invalid source bitmap in the drawing operation." );
      return;
    }

    // Only alpha8, single-frame surfaces are allowed as the mask
    if ( aMask && ( !msk || ( msk.Surface.Format !== this._PIXEL_FORMAT_ALPHA8 )))
    {
      console.log( "EmWi error: Invalid mask bitmap in the drawing operation." );
      return;
    }

    // Using ALPHA8 source enforces the 'tint by opacity' mode with white
    // color.
    if (( src.Surface.Format === this._PIXEL_FORMAT_ALPHA8 ) && !aMode )
      aColor = 0xFFFFFFFF;

    // Using ALPHA8 source enforces the 'tint by opacity' mode
    if ( src.Surface.Format === this._PIXEL_FORMAT_ALPHA8 )
      aMode = this._TINT_MODE_TINT_BY_OPACITY;

    // The operation will have no effect. All results will be transparent and 
    // alpha-blending is enbabled.
    if ( aBlend && !aOpacity )
      return;

    // The operation will have no effect. All results will be transparent and 
    // alpha-blending is enbabled.
    if ( aBlend && doColor && ( aIntensity === 1 ) && !( aColor & 0xFF000000 ))
      return;

    // No filter to apply. Just copy the source bitmap.
    if ( !doBlur && !doMask && !doColor )
    {
      var c = 0x00FFFFFF | ( aOpacity << 24 );
      this._CopyBitmap( aDst, aSrc, aDstFrameNo, 0, aClipRect, aDstRect, aSrcPos,
                        c, c, c, c, aBlend );
      return;
    }

    // The destination, the source bitmap and the mask bitmap areas expressed in one
    // and the same coordinate system.
    var tdx1 = aDstRect[0];
    var tdy1 = aDstRect[1];
    var tdx2 = aDstRect[2];
    var tdy2 = aDstRect[3];
    var tsx1 = tdx1 - aSrcPos[0];
    var tsy1 = tdy1 - aSrcPos[1];
    var tsx2 = tsx1 + aSrc.FrameSize[0];
    var tsy2 = tsy1 + aSrc.FrameSize[1];
    var tmx1 = aMask? tdx1 - aMaskPos[0]        : 0;
    var tmy1 = aMask? tdy1 - aMaskPos[1]        : 0;
    var tmx2 = aMask? tmx1 + aMask.FrameSize[0] : 0;
    var tmy2 = aMask? tmy1 + aMask.FrameSize[1] : 0;

    // Limit the drawing area to the destination frame boundary and the specified
    // clipping area.
    var dx1 = Math.max( aClipRect[0], tdx1, 0 );
    var dy1 = Math.max( aClipRect[1], tdy1, 0 );
    var dx2 = Math.min( aClipRect[2], tdx2, aDst.FrameSize[0]);
    var dy2 = Math.min( aClipRect[3], tdy2, aDst.FrameSize[1]);

    // Limit the drawing area to the mask bitmap, if any
    if ( aMask && !aMaskInverted )
    {
      var margin = aMaskBeforeBlur? blur : 0;
      dx1 = Math.max( dx1, tmx1 - margin );
      dy1 = Math.max( dy1, tmy1 - margin );
      dx2 = Math.min( dx2, tmx2 + margin );
      dy2 = Math.min( dy2, tmy2 + margin );
    }

    // Also take in account the source frame boundary. Note, the edges of the source
    // may appear blurred. Thus, enhance the area by the blur radius.
    dx1 = Math.max( dx1, tsx1 - blur );
    dy1 = Math.max( dy1, tsy1 - blur );
    dx2 = Math.min( dx2, tsx2 + blur );
    dy2 = Math.min( dy2, tsy2 + blur );

    // Nothing to do?
    if (( dx2 <= dx1 ) || ( dy2 <= dy1 ))
      return;

    // Coordinates in source surface at the edges of the drawing area
    var csx1 = dx1 - tsx1;
    var csy1 = dy1 - tsy1;
    var csx2 = dx2 - tsx1;
    var csy2 = dy2 - tsy1;

    // Since the blur is used, we need more of the source surface to process.
    // The algorithm will read the source pixel beyond the edges of the drawing
    // destination.
    var bsx1 = csx1 - blur;
    var bsy1 = csy1 - blur;
    var bsx2 = csx2 + blur;
    var bsy2 = csy2 + blur;

    // Coordinates in mask surface at the edges of the drawing area
    var cmx1 = aMaskPos[0] + dx1 - aDstRect[0];
    var cmy1 = aMaskPos[1] + dy1 - aDstRect[1];
    var cmx2 = cmx1 + ( dx2 - dx1 );
    var cmy2 = cmy1 + ( dy2 - dy1 );

    // Clamping in coordinates of the source surface for the left/top/right/
    // bottom edges. Avoid clamping within the source surface area.
    var cl   = Math.min( aSrcPos[0], 0 );
    var ct   = Math.min( aSrcPos[1], 0 );
    var cr   = Math.max( aSrcPos[0] + ( tdx2 - tdx1 ), aSrc.FrameSize[0]);
    var cb   = Math.max( aSrcPos[1] + ( tdy2 - tdy1 ), aSrc.FrameSize[1]);
    var cmpR = [ cl + 1, ct + 1, cr - 1, cb - 1 ];

    // The surfaces involved in the operation.
    var dstS = dst.Surface;
    var srcS = src.Surface;
    var mskS = msk? msk.Surface : null;
    var progs;

    // Till now we calculated with logical (frame) coordinates. Take in account
    // the real origin position where the frames start within the surfaces.
    dx1  += dst.Origin[0]; dy1  += dst.Origin[1];
    dx2  += dst.Origin[0]; dy2  += dst.Origin[1];
    csx1 += src.Origin[0]; csy1 += src.Origin[1];
    csx2 += src.Origin[0]; csy2 += src.Origin[1];
    bsx1 += src.Origin[0]; bsy1 += src.Origin[1];
    bsx2 += src.Origin[0]; bsy2 += src.Origin[1];
    cl   += src.Origin[0]; ct   += src.Origin[1];
    cr   += src.Origin[0]; cb   += src.Origin[1];

    // Same with the mask coordinates if mask is used
    if ( msk )
    {
      cmx1 += msk.Origin[0]; cmy1 += msk.Origin[1];
      cmx2 += msk.Origin[0]; cmy2 += msk.Origin[1];
    }

    // Depending on the desired filter configuration select a set of appropriate
    // shader programs - regardless of the bluring. The programs can then be used
    // depending on the blur radius and the diverse filter stages. Each program
    // name consists of two letters/digits according to the following convention:
    //
    // L - No mask is used.
    // M - Masking before bluring.
    // N - Masking after bluring.
    // S - Tinting by opacity.
    // R - Tinting by luminance.
    // U - Modulating final opacity.
    // 0 - No blur.
    // 1 - Gaussian Blur with Tap-5.
    // 2 - Gaussian Blur with Tap-9,
    // 3 - Gaussian Blur with Tap-17.
    // 7 - Box      Blur with Tap-9
    // 8 - Box      Blur with Tap-17
    //
    if ( aMaskBeforeBlur )
      if ( doColor && ( aMode === this._TINT_MODE_TINT_BY_LUMINANCE ))
        progs = [ gl.ProgramNR,  gl.ProgramM1,  gl.ProgramM2,  gl.ProgramM3,
                  null,          null,          gl.ProgramM7,  gl.ProgramM8,
                  null,          null,          gl.ProgramL7,  gl.ProgramL8,
                  null,          gl.ProgramL1,  gl.ProgramL2,  gl.ProgramL3,
                  gl.ProgramR0,  gl.ProgramR1,  gl.ProgramR2,  gl.ProgramR3,
                  gl.ProgramM1C, gl.ProgramM2C, gl.ProgramM3C, gl.ProgramM7C,
                  gl.ProgramM8C ];
      else if ( doColor && ( aMode === this._TINT_MODE_TINT_BY_OPACITY ))
        progs = [ gl.ProgramNS,  gl.ProgramM1,  gl.ProgramM2,  gl.ProgramM3,
                  null,          null,          gl.ProgramM7,  gl.ProgramM8,
                  null,          null,          gl.ProgramL7,  gl.ProgramL8,
                  null,          gl.ProgramL1,  gl.ProgramL2,  gl.ProgramL3,
                  gl.ProgramS0,  gl.ProgramS1,  gl.ProgramS2,  gl.ProgramS3,
                  gl.ProgramM1C, gl.ProgramM2C, gl.ProgramM3C, gl.ProgramM7C,
                  gl.ProgramM8C ];
      else
        progs = [ gl.ProgramNU,  gl.ProgramM1,  gl.ProgramM2,  gl.ProgramM3,
                  null,          null,          gl.ProgramM7,  gl.ProgramM8,
                  null,          null,          gl.ProgramL7,  gl.ProgramL8,
                  null,          gl.ProgramL1,  gl.ProgramL2,  gl.ProgramL3,
                  gl.ProgramU0,  gl.ProgramU1,  gl.ProgramU2,  gl.ProgramU3,
                  gl.ProgramM1C, gl.ProgramM2C, gl.ProgramM3C, gl.ProgramM7C,
                  gl.ProgramM8C ];
    else if ( doMask )
      if ( doColor && ( aMode === this._TINT_MODE_TINT_BY_LUMINANCE ))
        progs = [ gl.ProgramNR,  gl.ProgramR1,  gl.ProgramR2,  gl.ProgramR3,
                  null,          null,          gl.ProgramR7,  gl.ProgramR8,
                  null,          null,          gl.ProgramL7,  gl.ProgramL8,
                  null,          gl.ProgramL1,  gl.ProgramL2,  gl.ProgramL3,
                  gl.ProgramN0,  gl.ProgramN1,  gl.ProgramN2,  gl.ProgramN3,
                  gl.ProgramR1C, gl.ProgramR2C, gl.ProgramR3C, gl.ProgramR7C,
                  gl.ProgramR8C ];
      else if ( doColor && ( aMode === this._TINT_MODE_TINT_BY_OPACITY ))
        progs = [ gl.ProgramNS,  gl.ProgramS1,  gl.ProgramS2,  gl.ProgramS3,
                  null,          null,          gl.ProgramS7,  gl.ProgramS8,
                  null,          null,          gl.ProgramL7,  gl.ProgramL8,
                  null,          gl.ProgramL1,  gl.ProgramL2,  gl.ProgramL3,
                  gl.ProgramN0,  gl.ProgramN1,  gl.ProgramN2,  gl.ProgramN3,
                  gl.ProgramS1C, gl.ProgramS2C, gl.ProgramS3C, gl.ProgramS7C,
                  gl.ProgramS8C ];
      else
        progs = [ gl.ProgramNU,  gl.ProgramU1,  gl.ProgramU2,  gl.ProgramU3,
                  null,          null,          gl.ProgramU7,  gl.ProgramU8,
                  null,          null,          gl.ProgramL7,  gl.ProgramL8,
                  null,          gl.ProgramL1,  gl.ProgramL2,  gl.ProgramL3,
                  gl.ProgramN0,  gl.ProgramN1,  gl.ProgramN2,  gl.ProgramN3,
                  gl.ProgramU1C, gl.ProgramU2C, gl.ProgramU3C, gl.ProgramU7C,
                  gl.ProgramU8C ];
    else
      if ( doColor && ( aMode === this._TINT_MODE_TINT_BY_LUMINANCE ))
        progs = [ gl.ProgramR0,  gl.ProgramL1,  gl.ProgramL2,  gl.ProgramL3,
                  null,          null,          gl.ProgramL7,  gl.ProgramL8,
                  null,          null,          gl.ProgramL7,  gl.ProgramL8,
                  null,          gl.ProgramL1,  gl.ProgramL2,  gl.ProgramL3,
                  gl.ProgramR0,  gl.ProgramR1,  gl.ProgramR2,  gl.ProgramR3,
                  gl.ProgramL1C, gl.ProgramL2C, gl.ProgramL3C, gl.ProgramL7C,
                  gl.ProgramL8C ];
      else if ( doColor && ( aMode === this._TINT_MODE_TINT_BY_OPACITY ))
        progs = [ gl.ProgramS0,  gl.ProgramL1,  gl.ProgramL2,  gl.ProgramL3, 
                  null,          null,          gl.ProgramL7,  gl.ProgramL8, 
                  null,          null,          gl.ProgramL7,  gl.ProgramL8, 
                  null,          gl.ProgramL1,  gl.ProgramL2,  gl.ProgramL3,
                  gl.ProgramS0,  gl.ProgramS1,  gl.ProgramS2,  gl.ProgramS3,
                  gl.ProgramL1C, gl.ProgramL2C, gl.ProgramL3C, gl.ProgramL7C,
                  gl.ProgramL8C ];
      else
        progs = [ gl.ProgramU0,  gl.ProgramL1,  gl.ProgramL2,  gl.ProgramL3, 
                  null,          null,          gl.ProgramL7,  gl.ProgramL8, 
                  null,          null,          gl.ProgramL7,  gl.ProgramL8, 
                  null,          gl.ProgramL1,  gl.ProgramL2,  gl.ProgramL3,
                  gl.ProgramU0,  gl.ProgramU1,  gl.ProgramU2,  gl.ProgramU3,
                  gl.ProgramL1C, gl.ProgramL2C, gl.ProgramL3C, gl.ProgramL7C,
                  gl.ProgramL8C ];

    // Apply a post-filter without preceding blur?
    if ( aBlurRadius <= 0 )
    {
      var dstR = [  dx1,  dy1,  dx2,  dy2 ];
      var srcR = [ csx1, csy1, csx2, csy2 ];
      var mskR = [ cmx1, cmy1, cmx2, cmy2 ];

      Filter( gl, dstS, srcS, mskS, dstR, srcR, mskR, null, false, aIntensity, 
              aColor, aMaskInverted, progs[0], aOpacity, aBlend, false );
    }

    // Gaussian blur with small blur radius. No scaling is needed.
    else if ( aBlurRadius <= 12 )
    {
      var progA, progB, progC;
      
      // Depending on the blur radius, select the appropriate shader programs
      if       ( aBlurRadius <= 3 ) { progA = progs[1]; progB = progs[20]; progC = progs[17]; }
      else if  ( aBlurRadius <= 6 ) { progA = progs[2]; progB = progs[21]; progC = progs[18]; } 
      else                          { progA = progs[3]; progB = progs[22]; progC = progs[19]; }

      // The size of an intermediate surface used to store the source surface
      // content after the first blur (row-wise) pass.
      var   tmpW   = csx2 - csx1;
      var   tmpH   = bsy2 - bsy1;

      // Areas within the source, mask and the intermediate surfaces to address
      // during the first transfer pass. Note: we address more rows above/below
      // the original source area because those are involved when bluring columns
      // during the second pass. The intermediate surface serves as the drawing
      // destination.
      var srcA = [ csx1, bsy1, csx2, bsy2 ];
      var mskA = [ cmx1, cmy1 - ( csy1 - bsy1 ), cmx2, cmy2 + ( bsy2 - csy2 )];
      var tmpA = [ 0, 0, tmpW, tmpH ];

      // Areas within the destination, mask and the intermediate surfaces to
      // address during the second pass. Here the intermediate surface is blurred
      // column-wise.
      var dstB = [  dx1,  dy1,  dx2,  dy2 ];
      var mskB = [ cmx1, cmy1, cmx2, cmy2 ];
      var tmpB = [ 0, csy1 - bsy1, tmpW, csy2 - bsy1 ];

      // Please note: in the following code the blur filter is performed in two
      // passes. First horizontally. Then vertically. For this purpose a temporary
      // surface is needed. Create an intermediate surface to store the blurred
      // pixel rows.
      var tmp1 = CreateTmpSurface( gl, tmpW, tmpH );

      // Failed to create the temporary surface
      if ( !tmp1 )
        return;

      // 'Clamp to edges' mode is computing intensive. If possible the inner area
      // not affected by the clamping can be processed separately. Split the
      // operation in up to five separate transfers. Only the transfers affecting
      // the edges requires 'clamp to edges' mode. Note, if the area is small,
      // the optimization is ignored.
      if ( aBlurClampToEdges && ( tmpW > ( 2 * blur )) && ( tmpH > ( 2 * blur )))
      {
        var tmpA0 = tmpA[0]; var srcA0 = srcA[0]; var mskA0 = mskA[0];
        var tmpA2 = tmpA[2]; var srcA2 = srcA[2]; var mskA2 = mskA[2];
        var tmpA3 = tmpA[3]; var srcA3 = srcA[3]; var mskA3 = mskA[3];

        // The inner area is far away from the edges - so it is not affected by
        // clamping.
        tmpA[0] += blur; srcA[0] += blur; mskA[0] += blur;
        tmpA[1] += blur; srcA[1] += blur; mskA[1] += blur;
        tmpA[2] -= blur; srcA[2] -= blur; mskA[2] -= blur;
        tmpA[3] -= blur; srcA[3] -= blur; mskA[3] -= blur;

        Filter( gl, tmp1, srcS, mskS, tmpA, srcA, mskA, null, false, aIntensity,
                aColor, aMaskInverted, progA, aOpacity, false, false );

        tmpA[0] -= blur; srcA[0] -= blur; mskA[0] -= blur;
        tmpA[1] -= blur; srcA[1] -= blur; mskA[1] -= blur;
        tmpA[2] += blur; srcA[2] += blur; mskA[2] += blur;
        tmpA[3] += blur; srcA[3] += blur; mskA[3] += blur;

        // The area at the left edge with clamping
        tmpA[2] = tmpA[0] + blur; srcA[2] = srcA[0] + blur; mskA[2] = mskA[0] + blur;
        Filter( gl, tmp1, srcS, mskS, tmpA, srcA, mskA, cmpR, false, aIntensity,
                aColor, aMaskInverted, progB, aOpacity, false, false );
        tmpA[2] = tmpA2; srcA[2] = srcA2; mskA[2] = mskA2;

        // The area at the right edge with clamping
        tmpA[0] = tmpA[2] - blur; srcA[0] = srcA[2] - blur; mskA[0] = mskA[2] - blur;
        Filter( gl, tmp1, srcS, mskS, tmpA, srcA, mskA, cmpR, false, aIntensity,
                aColor, aMaskInverted, progB, aOpacity, false, false );
        tmpA[0] = tmpA0; srcA[0] = srcA0; mskA[0] = mskA0;

        // For the areas at the top/bottom edges avoid interferences with the
        // already processed left/right edges
        tmpA[0] += blur; srcA[0] += blur; mskA[0] += blur;
        tmpA[2] -= blur; srcA[2] -= blur; mskA[2] -= blur;

        // The area at the top edge with clamping
        tmpA[3] = tmpA[1] + blur; srcA[3] = srcA[1] + blur; mskA[3] = mskA[1] + blur;
        Filter( gl, tmp1, srcS, mskS, tmpA, srcA, mskA, cmpR, false, aIntensity,
                aColor, aMaskInverted, progB, aOpacity, false, false );
        tmpA[3] = tmpA3; srcA[3] = srcA3; mskA[3] = mskA3;

        // The area at the bottom edge with clamping
        tmpA[1] = tmpA[3] - blur; srcA[1] = srcA[3] - blur; mskA[1] = mskA[3] - blur;
        Filter( gl, tmp1, srcS, mskS, tmpA, srcA, mskA, cmpR, false, aIntensity,
                aColor, aMaskInverted, progB, aOpacity, false, false );
      }

      // The affected area is very small so there are no needs to optimize the
      // 'clamp to edges' operation
      else if ( aBlurClampToEdges )
        Filter( gl, tmp1, srcS, mskS, tmpA, srcA, mskA, cmpR, false, aIntensity,
                aColor, aMaskInverted, progB, aOpacity, false, false );

      // No clamping desired
      else
        Filter( gl, tmp1, srcS, mskS, tmpA, srcA, mskA, null, false, aIntensity,
                aColor, aMaskInverted, progA, aOpacity, false, false );

      // Perform the second pass.
      Filter( gl, dstS, tmp1, mskS, dstB, tmpB, mskB, null, true, aIntensity,
              aColor, aMaskInverted, progC, aOpacity, aBlend, false );

      // Cleanup
      DeleteTmpSurface( gl, tmp1 );
    }

    // Gaussian blur with large blur radius. Additional scaling step using box 
    // blur is applied to a smaller temporary surface. Then Gaussian blur is
    // applied on the down-scaled image. Finally the results are up-scaled back
    // to the original size.
    else
    {
      var progA, progB, progC, progD;
      var scale;

      // Depending on the blur radius, select the appropriate shader programs and scaling factors.
      if       ( aBlurRadius <= 20 ) { progA = progs[6]; progB = progs[23]; progC = progs[10]; progD = progs[14]; scale = 2; }
      else if  ( aBlurRadius <= 28 ) { progA = progs[6]; progB = progs[23]; progC = progs[10]; progD = progs[15]; scale = 3; }
      else if  ( aBlurRadius <= 40 ) { progA = progs[6]; progB = progs[23]; progC = progs[10]; progD = progs[15]; scale = 4; }
      else if  ( aBlurRadius <= 56 ) { progA = progs[7]; progB = progs[24]; progC = progs[11]; progD = progs[15]; scale = 6; }
      else                           { progA = progs[7]; progB = progs[24]; progC = progs[11]; progD = progs[15]; scale = 8; }

      // Coordinaten in the affected source surface area adjusted at positions
      // modulo the scaling factors.
      var   ssx1   = AdjustToScaleFactorMin( bsx1, scale );
      var   ssy1   = AdjustToScaleFactorMin( bsy1, scale );
      var   ssx2   = AdjustToScaleFactorMax( bsx2, scale );
      var   ssy2   = AdjustToScaleFactorMax( bsy2, scale );

      // The size of an intermediate surface used to store the down-scalled
      // source surface content.
      var   tmpW   = (( ssx2 - ssx1 ) / scale ) | 0;
      var   tmpH   = (( ssy2 - ssy1 ) / scale ) | 0;
    
      // Areas within the source, mask and the first intermediate surfaces to
      // address during the first transfer pass. Here, the source contents are
      // scaled-down horizontally.
      var   srcA   = [ ssx1, ssy1, ssx2, ssy2 ];
      var   mskA   = [ cmx1 + ssx1 - csx1, cmy1 + ssy1 - csy1, 
                       cmx2 + ssx2 - csx2, cmy2 + ssy2 - csy2 ];
      var   tmp1A  = [ 0, 0, tmpW, ( ssy2 - ssy1 )];
    
      // Areas within the first and second intermediate surfaces to address
      // during the second transfer pass. Here, the previously horizontally
      // scaled-down source contents are scaled-down vertically.
      var   tmp1B  = [ 0, 0, tmpW, ssy2 - ssy1 ];
      var   tmp2B  = [ 0, 0, tmpW, tmpH ];

      // Areas within the second and third intermediate surfaces to address
      // during the third transfer pass. Here, the previously scaled-down
      // source contents are blurred horizontally (row-wise).
      var   tmp2C  = [ 0, 0, tmpW, tmpH ];
      var   tmp3C  = [ 0, 0, tmpW, tmpH ];

      // Areas within the third and fourth intermediate surfaces to address
      // during the fourth transfer pass. Here, the previously row-wise blurred
      // source contents are blurred vertically (column-wise).
      var   tmp3D  = [ 0, 0, tmpW, tmpH ];
      var   tmp4D  = [ 0, 0, tmpW, tmpH ];

      // Areas within the fourth intermediate surface and the destination surface
      // to address during the last transfer pass. Here, the previously scaled-
      // down and blurred source contents are scaled-up again directly into the
      // destination area.
      var   tmp4E  = [( csx1 - ssx1 ) / scale, ( csy1 - ssy1 ) / scale,
                      ( csx2 - ssx1 ) / scale, ( csy2 - ssy1 ) / scale ];
      var   dstE   = [  dx1,  dy1,  dx2,  dy2 ];
      var   mskE   = [ cmx1, cmy1, cmx2, cmy2 ];

      // Please note: in the following code the blur filter is performed in 
      // several passes:
      // 1: scale-down horizontally.
      // 2: scale-down vertically.
      // 3: Blur horizontally the down-scaled content.
      // 4: Blur vertically the down-scaled content.
      // 5: Finally scale-up the blurred content.
      // Create intermediate surfaces to store the intermediate contents.
      var tmp1 = CreateTmpSurface( gl, tmpW, ssy2 - ssy1 );
      var tmp2 = CreateTmpSurface( gl, tmpW, tmpH );
      var tmp3 = CreateTmpSurface( gl, tmpW, tmpH );
      var tmp4 = CreateTmpSurface( gl, tmpW, tmpH );

      // Failed to create one of the temporary surfaces
      if ( !tmp1 || !tmp2 || !tmp3 || !tmp4 )
      {
        if ( tmp1 ) DeleteTmpSurface( gl, tmp1 );
        if ( tmp2 ) DeleteTmpSurface( gl, tmp2 );
        if ( tmp3 ) DeleteTmpSurface( gl, tmp3 );
        if ( tmp4 ) DeleteTmpSurface( gl, tmp4 );
        return;
      }

      // 'Clamp to edges' mode is computing intensive. If possible the inner area
      // not affected by the clamping can be processed separately. The edges
      // are excluded in such case
      if ( aBlurClampToEdges && (( ssx2 - ssx1 ) > ( 2 * blur )) &&
                                (( ssy2 - ssy1 ) > ( 2 * blur )))
      {
        var tmpA0 = tmp1A[0]; var srcA0 = srcA[0]; var mskA0 = mskA[0];
        var tmpA2 = tmp1A[2]; var srcA2 = srcA[2]; var mskA2 = mskA[2];
        var tmpA3 = tmp1A[3]; var srcA3 = srcA[3]; var mskA3 = mskA[3];
        var blur2 = blur * scale;

        // The inner area is far away from the edges - so it is not affected by
        // clamping.
        tmp1A[0] += blur; srcA[0] += blur2; mskA[0] += blur2;
        tmp1A[1] += blur; srcA[1] += blur;  mskA[1] += blur;
        tmp1A[2] -= blur; srcA[2] -= blur2; mskA[2] -= blur2;
        tmp1A[3] -= blur; srcA[3] -= blur;  mskA[3] -= blur;

        Filter( gl, tmp1, srcS, mskS, tmp1A, srcA, mskA, null, false, aIntensity,
                aColor, aMaskInverted, progA, aOpacity, false, false );

        tmp1A[0] -= blur; srcA[0] -= blur2; mskA[0] -= blur2;
        tmp1A[1] -= blur; srcA[1] -= blur;  mskA[1] -= blur;
        tmp1A[2] += blur; srcA[2] += blur2; mskA[2] += blur2;
        tmp1A[3] += blur; srcA[3] += blur;  mskA[3] += blur;

        // The area at the left edge with clamping
        tmp1A[2] = tmp1A[0] + blur; srcA[2] = srcA[0] + blur2;
        mskA[2]  = mskA[0]  + blur2;
        Filter( gl, tmp1, srcS, mskS, tmp1A, srcA, mskA, cmpR, false, aIntensity,
                aColor, aMaskInverted, progB, aOpacity, false, false );
        tmp1A[2] = tmpA2; srcA[2] = srcA2; mskA[2] = mskA2;

        // The area at the right edge with clamping
        tmp1A[0] = tmp1A[2] - blur; srcA[0] = srcA[2] - blur2;
        mskA[0]  = mskA[2]  - blur2;
        Filter( gl, tmp1, srcS, mskS, tmp1A, srcA, mskA, cmpR, false, aIntensity,
                aColor, aMaskInverted, progB, aOpacity, false, false );
        tmp1A[0] = tmpA0; srcA[0] = srcA0; mskA[0] = mskA0;

        // For the areas at the top/bottom edges avoid interferences with the
        // already processed left/right edges
        tmp1A[0] += blur; srcA[0] += blur2; mskA[0] += blur2;
        tmp1A[2] -= blur; srcA[2] -= blur2; mskA[2] -= blur2;

        // The area at the top edge with clamping. The additional 2 pixel are
        // not clear why they are needed. However, without them there are ugly
        // artifacts on the screen
        tmp1A[3] = tmp1A[1] + blur + 2; srcA[3] = srcA[1] + blur + 2;
        mskA[3]  = mskA[1]  + blur + 2;
        Filter( gl, tmp1, srcS, mskS, tmp1A, srcA, mskA, cmpR, false, aIntensity,
                aColor, aMaskInverted, progB, aOpacity, false, false );
        tmp1A[3] = tmpA3; srcA[3] = srcA3; mskA[3] = mskA3;

        // The area at the bottom edge with clamping. The additional 2 pixel are
        // not clear why they are needed. However, without them there are ugly
        // artifacts on the screen
        tmp1A[1] = tmp1A[3] - blur - 2; srcA[1] = srcA[3] - blur - 2; 
        mskA[1]  = mskA[3]  - blur - 2;
        Filter( gl, tmp1, srcS, mskS, tmp1A, srcA, mskA, cmpR, false, aIntensity,
                aColor, aMaskInverted, progB, aOpacity, false, false );
      }

      // The affected area is very small so there are no needs to optimize the
      // 'clamp to edges' operation
      else if ( aBlurClampToEdges )
        Filter( gl, tmp1, srcS, mskS, tmp1A, srcA, mskA, cmpR, false, aIntensity,
                aColor, aMaskInverted, progB, aOpacity, false, false );

      // No clamping desired
      else
        Filter( gl, tmp1, srcS, mskS, tmp1A, srcA, mskA, null, false, aIntensity,
                aColor, aMaskInverted, progA, aOpacity, false, false );

      // Performed the remaining 4 passes:
      // 2: scale-down vertically.
      // 3: Blur horizontally the down-scaled content.
      // 4: Blur vertically the down-scaled content.
      // 5: Finally scale-up the blurred content.
      Filter( gl, tmp2, tmp1, null, tmp2B, tmp1B, null, null, true, 0, 0, false,
              progC, 255, false, false );
      Filter( gl, tmp3, tmp2, null, tmp3C, tmp2C, null, null, false, 0, 0, false,
              progD, 255, false, false );
      Filter( gl, tmp4, tmp3, null, tmp4D, tmp3D, null, null, true, 0, 0, false,
              progD, 255, false, false );
      Filter( gl, dstS, tmp4, mskS, dstE, tmp4E, mskE, null, false, aIntensity,
              aColor, aMaskInverted, progs[16], aOpacity, aBlend, true );

      // Cleanup
      DeleteTmpSurface( gl, tmp1 );
      DeleteTmpSurface( gl, tmp2 );
      DeleteTmpSurface( gl, tmp3 );
      DeleteTmpSurface( gl, tmp4 );
    }

    // Print evtl. WebGL error messages and terminate
    if ( this._Debug )
      PrintWebGLErrors( gl );
  };

  // This helper function draws all glyphs stored in the aGlyphs array starting
  // at the position aX, aY within the current drawing destination of aGL. The
  // clipping coordinates are used to limit the drawing area.
  function CopyGlyphs1( aGL, aGlyphs, aKerns, aDstOrigin, aX, aY, aOrientation, 
    aClipX1, aClipY1, aClipX2, aClipY2, aDstRect, aColor )
  {
    var noOfVertices = aGlyphs.length * 6;
    var vertexBuffer = new ArrayBuffer( noOfVertices * 11 * 4 );
    var v1           = new Float32Array( vertexBuffer );
    var v2           = new Uint32Array( vertexBuffer );
    var dstX         = aDstOrigin[0] + aDstRect[0];
    var dstY         = aDstOrigin[1] + aDstRect[1];
    var dstW         = aDstRect[2]   - aDstRect[0];
    var dstH         = aDstRect[3]   - aDstRect[1];

    // Initialize the vertices. For each glyph 6 vertices are used
    for ( var i = 0; i < aGlyphs.length; i++ )
    {
      var ii    = i * 66;
      var glyph = aGlyphs[i];
      var kern  = aKerns[i];
      var x1    = aX + glyph.OriginX + kern;
      var y1    = aY + glyph.OriginY;
      var x2    = x1 + glyph.Width;
      var y2    = y1 + glyph.Height;
      var s1    = glyph.CacheS1;
      var s2    = glyph.CacheS2;
      var t1    = glyph.CacheT1;
      var t2    = glyph.CacheT2;
      
      // Clip the glyph vertically?
      if (( y1 < aClipY1 ) && ( y2 !== y1 ))
      {
        t1 += (( aClipY1 - y1 ) / ( y2 - y1 )) * ( t2 - t1 );
        y1  = aClipY1;
      }

      if (( y2 > aClipY2 ) && ( y2 !== y1 ))
      {
        t2 += (( aClipY2 - y2 ) / ( y2 - y1 )) * ( t2 - t1 );
        y2  = aClipY2;
      }
      
      // Clip the glyph horizontally?
      if (( x1 < aClipX1 ) && ( x1 !== x2 ))
      {
        s1 += (( aClipX1 - x1 ) / ( x2 - x1 )) * ( s2 - s1 );
        x1  = aClipX1;
      }
      
      if (( x2 > aClipX2 ) && ( x1 !== x2 ))
      {
        s2 += (( aClipX2 - x2 ) / ( x2 - x1 )) * ( s2 - s1 );
        x2  = aClipX2;
      }

      // The entire glyph is lies outside the clipping area      
      if ( x1 > x2 ) x1 = x2;
      if ( y1 > y2 ) y1 = y2;

      if ( aOrientation === 0 )
      {
        x1 += dstX; y1 += dstY;
        x2 += dstX; y2 += dstY;

        v1[ ii + 0  ] = x1;  v1[ ii + 11 ] = x2;
        v1[ ii + 1  ] = y1;  v1[ ii + 12 ] = y1;
        v1[ ii + 22 ] = x1;  v1[ ii + 33 ] = x1;
        v1[ ii + 23 ] = y2;  v1[ ii + 34 ] = y2;
        v1[ ii + 44 ] = x2;  v1[ ii + 55 ] = x2;
        v1[ ii + 45 ] = y1;  v1[ ii + 56 ] = y2;
      }

      else if ( aOrientation === 90 )
      {
        var xx1 = dstX + y1;
        var yy1 = dstY + dstH - x1;
        var xx2 = dstX + y2;
        var yy2 = dstY + dstH - x2;

        v1[ ii + 0  ] = xx1;  v1[ ii + 11 ] = xx1;
        v1[ ii + 1  ] = yy1;  v1[ ii + 12 ] = yy2;
        v1[ ii + 22 ] = xx2;  v1[ ii + 33 ] = xx2;
        v1[ ii + 23 ] = yy1;  v1[ ii + 34 ] = yy1;
        v1[ ii + 44 ] = xx1;  v1[ ii + 55 ] = xx2;
        v1[ ii + 45 ] = yy2;  v1[ ii + 56 ] = yy2;
      }

      else if ( aOrientation === 180 )
      {
        var xx1 = dstX + dstW - x1;
        var yy1 = dstY + dstH - y1;
        var xx2 = dstX + dstW - x2;
        var yy2 = dstY + dstH - y2;

        v1[ ii + 0  ] = xx1;  v1[ ii + 11 ] = xx2;
        v1[ ii + 1  ] = yy1;  v1[ ii + 12 ] = yy1;
        v1[ ii + 22 ] = xx1;  v1[ ii + 33 ] = xx1;
        v1[ ii + 23 ] = yy2;  v1[ ii + 34 ] = yy2;
        v1[ ii + 44 ] = xx2;  v1[ ii + 55 ] = xx2;
        v1[ ii + 45 ] = yy1;  v1[ ii + 56 ] = yy2;
      }

      else if ( aOrientation === 270 )
      {
        var xx1 = dstX + dstW - y1;
        var yy1 = dstY + x1;
        var xx2 = dstX + dstW - y2;
        var yy2 = dstY + x2;

        v1[ ii + 0  ] = xx1;  v1[ ii + 11 ] = xx1;
        v1[ ii + 1  ] = yy1;  v1[ ii + 12 ] = yy2;
        v1[ ii + 22 ] = xx2;  v1[ ii + 33 ] = xx2;
        v1[ ii + 23 ] = yy1;  v1[ ii + 34 ] = yy1;
        v1[ ii + 44 ] = xx1;  v1[ ii + 55 ] = xx2;
        v1[ ii + 45 ] = yy2;  v1[ ii + 56 ] = yy2;
      }

      v1[ ii + 2  ] = s1;      v1[ ii + 13 ] = s2;
      v1[ ii + 3  ] = t1;      v1[ ii + 14 ] = t1;
      v1[ ii + 4  ] = 1;       v1[ ii + 15 ] = 1;
      v2[ ii + 5  ] = aColor;  v2[ ii + 16 ] = aColor;
      v1[ ii + 24 ] = s1;      v1[ ii + 35 ] = s1;
      v1[ ii + 25 ] = t2;      v1[ ii + 36 ] = t2;
      v1[ ii + 26 ] = 1;       v1[ ii + 37 ] = 1;
      v2[ ii + 27 ] = aColor;  v2[ ii + 38 ] = aColor;
      v1[ ii + 46 ] = s2;      v1[ ii + 57 ] = s2;
      v1[ ii + 47 ] = t1;      v1[ ii + 58 ] = t2;
      v1[ ii + 48 ] = 1;       v1[ ii + 59 ] = 1;
      v2[ ii + 49 ] = aColor;  v2[ ii + 60 ] = aColor;

      // Position for the next following glyph
      aX += glyph.Advance + kern;
    }

    // Install and activate the temporar vertex parameter array. Draw all
    // glyphs
    aGL.bufferData( aGL.ARRAY_BUFFER, vertexBuffer, aGL.STREAM_DRAW );
    aGL.drawArrays( aGL.TRIANGLES, 0, noOfVertices );

    // Restore the default vertex buffer
    aGL.bufferData( aGL.ARRAY_BUFFER, aGL.vertexBuffer, aGL.STREAM_DRAW );
  }

  // This helper function draws all glyphs stored in the aGlyphs array starting
  // at the position aX, aY within the current drawing destination of aGL. The
  // clipping coordinates are used to limit the drawing area. Unlike the above
  // function all glyphs are drawn with a color gradient determined by the four
  // colors corresponding to the four corners of aDstRect.
  function CopyGlyphs2( aGL, aGlyphs, aKerns, aDstOrigin, aX, aY, aOrientation,
    aClipX1,aClipY1, aClipX2, aClipY2, aDstRect, aColorTL, aColorTR, aColorBR,
    aColorBL )
  {
    var noOfVertices = aGlyphs.length * 6;
    var vertexBuffer = new ArrayBuffer( noOfVertices * 11 * 4 );
    var v1           = new Float32Array( vertexBuffer );
    var v2           = new Uint32Array( vertexBuffer );
    var dstX         = aDstOrigin[0] + aDstRect[0];
    var dstY         = aDstOrigin[1] + aDstRect[1];
    var dstW         = aDstRect[2]   - aDstRect[0];
    var dstH         = aDstRect[3]   - aDstRect[1];
    var invW         = 1 / dstW;
    var invH         = 1 / dstH;

    if ( aOrientation === 90 )
    {
      var tmp  = aColorTL;
      aColorTL = aColorBL; aColorBL = aColorBR;
      aColorBR = aColorTR; aColorTR = tmp;
      invW     = 1 / dstH;
      invH     = 1 / dstW;
    }

    else if ( aOrientation === 180 )
    {
      var tmp1 = aColorTL;
      var tmp2 = aColorBL;
      aColorTL = aColorBR; aColorBR = tmp1;
      aColorBL = aColorTR; aColorTR = tmp2;
    }

    else if ( aOrientation === 270 )
    {
      var tmp  = aColorTL;
      aColorTL = aColorTR;
      aColorTR = aColorBR;
      aColorBR = aColorBL;
      aColorBL = tmp;
      invW     = 1 / dstH;
      invH     = 1 / dstW;
    }

    var cTL0 =  ( aColorTL & 0xFF );
    var cTL1 = (( aColorTL >> 8   ) & 0xFF );
    var cTL2 = (( aColorTL >> 16  ) & 0xFF );
    var cTL3 = (( aColorTL >> 24  ) & 0xFF );
    var cTR0 =  ( aColorTR & 0xFF );
    var cTR1 = (( aColorTR >> 8   ) & 0xFF );
    var cTR2 = (( aColorTR >> 16  ) & 0xFF );
    var cTR3 = (( aColorTR >> 24  ) & 0xFF );
    var cBL0 =  ( aColorBL & 0xFF );
    var cBL1 = (( aColorBL >> 8   ) & 0xFF );
    var cBL2 = (( aColorBL >> 16  ) & 0xFF );
    var cBL3 = (( aColorBL >> 24  ) & 0xFF );
    var cBR0 =  ( aColorBR & 0xFF );
    var cBR1 = (( aColorBR >> 8   ) & 0xFF );
    var cBR2 = (( aColorBR >> 16  ) & 0xFF );
    var cBR3 = (( aColorBR >> 24  ) & 0xFF );

    // Initialize the vertices. For each glyph 6 vertices are used
    for ( var i = 0; i < aGlyphs.length; i++ )
    {
      var ii    = i * 66;
      var glyph = aGlyphs[i];
      var kern  = aKerns[i];
      var x1    = aX + glyph.OriginX + kern;
      var y1    = aY + glyph.OriginY;
      var x2    = x1 + glyph.Width;
      var y2    = y1 + glyph.Height;
      var s1    = glyph.CacheS1;
      var s2    = glyph.CacheS2;
      var t1    = glyph.CacheT1;
      var t2    = glyph.CacheT2;
      
      // Clip the glyph vertically?
      if (( y1 < aClipY1 ) && ( y2 !== y1 ))
      {
        t1 += (( aClipY1 - y1 ) / ( y2 - y1 )) * ( t2 - t1 );
        y1  = aClipY1;
      }

      if (( y2 > aClipY2 ) && ( y2 !== y1 ))
      {
        t2 += (( aClipY2 - y2 ) / ( y2 - y1 )) * ( t2 - t1 );
        y2  = aClipY2;
      }
      
      // Clip the glyph horizontally?
      if (( x1 < aClipX1 ) && ( x1 !== x2 ))
      {
        s1 += (( aClipX1 - x1 ) / ( x2 - x1 )) * ( s2 - s1 );
        x1  = aClipX1;
      }
      
      if (( x2 > aClipX2 ) && ( x1 !== x2 ))
      {
        s2 += (( aClipX2 - x2 ) / ( x2 - x1 )) * ( s2 - s1 );
        x2  = aClipX2;
      }

      // The entire glyph is lies outside the clipping area      
      if ( x1 > x2 ) x1 = x2;
      if ( y1 > y2 ) y1 = y2;

      // Interpolate the colors for the four glyph corner
      var fT     = y1 * invH;
      var fB     = y2 * invH;
      var fL     = x1 * invW;
      var fR     = x2 * invW;
      var ccTL0  = cTL0  + ( cBL0  - cTL0  ) * fT;
      var ccTL1  = cTL1  + ( cBL1  - cTL1  ) * fT;
      var ccTL2  = cTL2  + ( cBL2  - cTL2  ) * fT;
      var ccTL3  = cTL3  + ( cBL3  - cTL3  ) * fT;
      var ccTR0  = cTR0  + ( cBR0  - cTR0  ) * fT;
      var ccTR1  = cTR1  + ( cBR1  - cTR1  ) * fT;
      var ccTR2  = cTR2  + ( cBR2  - cTR2  ) * fT;
      var ccTR3  = cTR3  + ( cBR3  - cTR3  ) * fT;
      var ccBL0  = cTL0  + ( cBL0  - cTL0  ) * fB;
      var ccBL1  = cTL1  + ( cBL1  - cTL1  ) * fB;
      var ccBL2  = cTL2  + ( cBL2  - cTL2  ) * fB;
      var ccBL3  = cTL3  + ( cBL3  - cTL3  ) * fB;
      var ccBR0  = cTR0  + ( cBR0  - cTR0  ) * fB;
      var ccBR1  = cTR1  + ( cBR1  - cTR1  ) * fB;
      var ccBR2  = cTR2  + ( cBR2  - cTR2  ) * fB;
      var ccBR3  = cTR3  + ( cBR3  - cTR3  ) * fB;
      var cccTL0 = ccTL0 + ( ccTR0 - ccTL0 ) * fL;
      var cccTL1 = ccTL1 + ( ccTR1 - ccTL1 ) * fL;
      var cccTL2 = ccTL2 + ( ccTR2 - ccTL2 ) * fL;
      var cccTL3 = ccTL3 + ( ccTR3 - ccTL3 ) * fL;
      var cccTR0 = ccTL0 + ( ccTR0 - ccTL0 ) * fR;
      var cccTR1 = ccTL1 + ( ccTR1 - ccTL1 ) * fR;
      var cccTR2 = ccTL2 + ( ccTR2 - ccTL2 ) * fR;
      var cccTR3 = ccTL3 + ( ccTR3 - ccTL3 ) * fR;
      var cccBL0 = ccBL0 + ( ccBR0 - ccBL0 ) * fL;
      var cccBL1 = ccBL1 + ( ccBR1 - ccBL1 ) * fL;
      var cccBL2 = ccBL2 + ( ccBR2 - ccBL2 ) * fL;
      var cccBL3 = ccBL3 + ( ccBR3 - ccBL3 ) * fL;
      var cccBR0 = ccBL0 + ( ccBR0 - ccBL0 ) * fR;
      var cccBR1 = ccBL1 + ( ccBR1 - ccBL1 ) * fR;
      var cccBR2 = ccBL2 + ( ccBR2 - ccBL2 ) * fR;
      var cccBR3 = ccBL3 + ( ccBR3 - ccBL3 ) * fR;
      
      // The resulting interpolated colors
      aColorTL = cccTL0 | ( cccTL1 << 8 ) | ( cccTL2 << 16 ) | ( cccTL3 << 24 );
      aColorTR = cccTR0 | ( cccTR1 << 8 ) | ( cccTR2 << 16 ) | ( cccTR3 << 24 );
      aColorBR = cccBR0 | ( cccBR1 << 8 ) | ( cccBR2 << 16 ) | ( cccBR3 << 24 );
      aColorBL = cccBL0 | ( cccBL1 << 8 ) | ( cccBL2 << 16 ) | ( cccBL3 << 24 );

      if ( aOrientation === 0 )
      {
        x1 += dstX; y1 += dstY;
        x2 += dstX; y2 += dstY;

        v1[ ii + 0  ] = x1;  v1[ ii + 11 ] = x2;
        v1[ ii + 1  ] = y1;  v1[ ii + 12 ] = y1;
        v1[ ii + 22 ] = x1;  v1[ ii + 33 ] = x1;
        v1[ ii + 23 ] = y2;  v1[ ii + 34 ] = y2;
        v1[ ii + 44 ] = x2;  v1[ ii + 55 ] = x2;
        v1[ ii + 45 ] = y1;  v1[ ii + 56 ] = y2;
      }

      else if ( aOrientation === 90 )
      {
        var xx1 = dstX + y1;
        var yy1 = dstY + dstH - x1;
        var xx2 = dstX + y2;
        var yy2 = dstY + dstH - x2;

        v1[ ii + 0  ] = xx1;  v1[ ii + 11 ] = xx1;
        v1[ ii + 1  ] = yy1;  v1[ ii + 12 ] = yy2;
        v1[ ii + 22 ] = xx2;  v1[ ii + 33 ] = xx2;
        v1[ ii + 23 ] = yy1;  v1[ ii + 34 ] = yy1;
        v1[ ii + 44 ] = xx1;  v1[ ii + 55 ] = xx2;
        v1[ ii + 45 ] = yy2;  v1[ ii + 56 ] = yy2;
      }

      else if ( aOrientation === 180 )
      {
        var xx1 = dstX + dstW - x1;
        var yy1 = dstY + dstH - y1;
        var xx2 = dstX + dstW - x2;
        var yy2 = dstY + dstH - y2;

        v1[ ii + 0  ] = xx1;  v1[ ii + 11 ] = xx2;
        v1[ ii + 1  ] = yy1;  v1[ ii + 12 ] = yy1;
        v1[ ii + 22 ] = xx1;  v1[ ii + 33 ] = xx1;
        v1[ ii + 23 ] = yy2;  v1[ ii + 34 ] = yy2;
        v1[ ii + 44 ] = xx2;  v1[ ii + 55 ] = xx2;
        v1[ ii + 45 ] = yy1;  v1[ ii + 56 ] = yy2;
      }

      else if ( aOrientation === 270 )
      {
        var xx1 = dstX + dstW - y1;
        var yy1 = dstY + x1;
        var xx2 = dstX + dstW - y2;
        var yy2 = dstY + x2;

        v1[ ii + 0  ] = xx1;  v1[ ii + 11 ] = xx1;
        v1[ ii + 1  ] = yy1;  v1[ ii + 12 ] = yy2;
        v1[ ii + 22 ] = xx2;  v1[ ii + 33 ] = xx2;
        v1[ ii + 23 ] = yy1;  v1[ ii + 34 ] = yy1;
        v1[ ii + 44 ] = xx1;  v1[ ii + 55 ] = xx2;
        v1[ ii + 45 ] = yy2;  v1[ ii + 56 ] = yy2;
      }

      v1[ ii + 2  ] = s1;        v1[ ii + 13 ] = s2;
      v1[ ii + 3  ] = t1;        v1[ ii + 14 ] = t1;
      v1[ ii + 4  ] = 1;         v1[ ii + 15 ] = 1;
      v2[ ii + 5  ] = aColorTL;  v2[ ii + 16 ] = aColorTR;
      v1[ ii + 24 ] = s1;        v1[ ii + 35 ] = s1;
      v1[ ii + 25 ] = t2;        v1[ ii + 36 ] = t2;
      v1[ ii + 26 ] = 1;         v1[ ii + 37 ] = 1;
      v2[ ii + 27 ] = aColorBL;  v2[ ii + 38 ] = aColorBL;
      v1[ ii + 46 ] = s2;        v1[ ii + 57 ] = s2;
      v1[ ii + 47 ] = t1;        v1[ ii + 58 ] = t2;
      v1[ ii + 48 ] = 1;         v1[ ii + 59 ] = 1;
      v2[ ii + 49 ] = aColorTR;  v2[ ii + 60 ] = aColorBR;

      // Position for the next following glyph
      aX += glyph.Advance + kern;
    }

    // Install and activate the temporar vertex parameter array. Draw all
    // glyphs
    aGL.bufferData( aGL.ARRAY_BUFFER, vertexBuffer, aGL.STREAM_DRAW );
    aGL.drawArrays( aGL.TRIANGLES, 0, noOfVertices );

    // Restore the default vertex buffer
    aGL.bufferData( aGL.ARRAY_BUFFER, aGL.vertexBuffer, aGL.STREAM_DRAW );
  }

  // ---------------------------------------------------------------------------
  // The function DrawText() prints a single text row within the destination
  // bitmap aDst. The font and the characters to draw are specified in aFont and
  // aString. The area, where the text will be drawn is defined by aDstRect and
  // by aSrcPos. The copied pixel are modulated by a color gradient specified by
  // the four color parameters aColorTL .. aColorBL.
  // The parameter aMinWidth controls optionally the minimum width of the text
  // to draw. If applied, the function extends white space characters in order
  // to stretch the text. By using this parameter justified text output is
  // possible.
  // An additional clipping area aClipRect limits the operation. All pixel lying
  // outside this area will not be drawn. The last aBlend parameter controls the
  // mode how drawn pixel are combined with the pixel already existing in the
  // destination bitmap. If aBlend == true, the drawn pixel are alpha-blended 
  // with the background, otherwise the drawn pixel will overwrite the old 
  // content.
  // ---------------------------------------------------------------------------
  emwi._DrawText = function( aDst, aFont, aString, aOffset, aCount,
    aDstFrameNo, aClipRect, aDstRect, aSrcPos, aMinWidth, aOrientation, 
    aColorTL, aColorTR, aColorBR, aColorBL, aBlend )
  {
    var gl          = this._Context;
    var dst         = null;
    var x1          = aDstRect[0];
    var y1          = aDstRect[1];
    var x2          = aDstRect[2];
    var y2          = aDstRect[3];
    var sx          = -aSrcPos[0];
    var sy          = -aSrcPos[1];
    var stretchFac  = 0;
    var stretchAcc  = 0x8000; // == 0.5 pixel in 16.16 format
    var prevGlyphId = 0;
    var len         = aString.length;
    var context;

    // Select the destination bitmap frame for this operation
    if ( aDst && ( aDstFrameNo >= 0 ) && ( aDstFrameNo < aDst.NoOfFrames ))
    {
      aDstFrameNo = aDst.Mapping? aDst.Mapping[ aDstFrameNo ] : aDstFrameNo;
      dst = aDst.Frames[ aDstFrameNo ];
    }

    // Only native surfaces are allowed as the destination
    if ( !dst || ( dst.Surface.Format !== this._PIXEL_FORMAT_NATIVE ))
    {
      console.log( "EmWi error: Invalid destination bitmap in the drawing operation." );
      return;
    }

    // No font specified
    if ( !aFont )
    {
      console.log( "EmWi error: Invalid font in the drawing operation." );
      return;
    }

    // Evaluate all signs?
    if ( aCount === -1 ) aCount = len;
    if ( len < aCount  ) aCount = len;

    // Limit to available string signs
    if ( aOffset < 0 )             { aCount += aOffset; aOffset = 0; }
    if (( aOffset + aCount ) > len ) aCount = len - aOffset;

    // Nothing to do
    if ( aCount <= 0 )
      return;

    // Verify the passed orientation value
    if (( aOrientation !== 90 ) && ( aOrientation !== 180 ) && ( aOrientation !== 270 ))
      aOrientation = 0;

    // Limit the area to the destination frame boundary and to the clipping
    // area
    x1 = Math.max( aClipRect[0], x1, 0 );
    y1 = Math.max( aClipRect[1], y1, 0 );
    x2 = Math.min( aClipRect[2], x2, aDst.FrameSize[0]);
    y2 = Math.min( aClipRect[3], y2, aDst.FrameSize[1]);

    // Convert the clipping area to a non rotate coorfinate space relative
    // to the origin corner of the rotated text
    if ( aOrientation === 90 )
    {
      var tmp = y1;
      y1 = x1 - aDstRect[0];
      x1 = aDstRect[3] - y2;
      y2 = x2 - aDstRect[0];
      x2 = aDstRect[3] - tmp;
    }
    else if ( aOrientation === 180 )
    {
      var tmp1 = x1;
      var tmp2 = y1;
      x1 = aDstRect[2] - x2;
      y1 = aDstRect[3] - y2;
      x2 = aDstRect[2] - tmp1;
      y2 = aDstRect[3] - tmp2;
    }
    else if ( aOrientation === 270 )
    {
      var tmp = x1;
      x1 = y1 - aDstRect[1];
      y1 = aDstRect[2] - x2;
      x2 = y2 - aDstRect[1];
      y2 = aDstRect[2] - tmp;
    }
    else
    {
      x1 -= aDstRect[0]; y1 -= aDstRect[1];
      x2 -= aDstRect[0]; y2 -= aDstRect[1];
    }

    // Limit the clipping area to the upper/lower row boundary
    y1 = Math.max( y1, sy - aFont.Ascent      );
    y2 = Math.min( y2, sy + aFont.Descent + 1 );

    // Nothing to do?
    if (( x2 <= x1 ) || ( y2 <= y1 ))
      return;

    // Stretch the text? Calculate the remaining area to stretch the white
    // spaces
    if ( aMinWidth > 0 )
      aMinWidth -= this._GetTextAdvance( aFont, aString, aOffset, aCount );

    // Calculate the factor to stretch a single white space
    if ( aMinWidth > 0 )
    {
      var ofs        = aOffset;
      var count      = aCount;
      var noOfSpaces = 0;

      // Count white spaces incl. the non-breakable space
      for ( ; count; ofs++, count-- )
      {
        var ch = aString.charCodeAt( ofs );
        if (( ch === 32 ) || ( ch === 0xA0 ))
          noOfSpaces++;
      }

      // Factor to stretch a single white space glyph in 16.16 format
      if ( noOfSpaces )
        stretchFac = (( aMinWidth << 16 ) / noOfSpaces ) | 0;
    }

    // Determine the adequate mode to perform the operation
    var gradient = ( aColorTL !== aColorBL ) || ( aColorTR !== aColorBR ) ||
                   ( aColorTL !== aColorTR );
    
    // Select the drawing destination
    SelectDst( gl, dst.Surface, gl.Program6 );
    SelectSrc( gl, null, false );
    
    // Select the glyph cache surface as the drawing source 
    gl.bindTexture( gl.TEXTURE_2D, this._GlyphCacheTexture );

    // Determine the alpha-blending mode to apply for this operation
    if (  gl.IsAlphaBlend && !aBlend ) gl.disable( gl.BLEND );
    if ( !gl.IsAlphaBlend &&  aBlend ) gl.enable ( gl.BLEND );
    gl.IsAlphaBlend = aBlend;

    // An array containing all glyphs to show on the screen
    var glyphs = [];
    var kerns  = [];
    var startX = sx;

    // Prepare an object to store the shaper status
    context = this._InitShaper();

    // Process all characters of the string - cluster by cluster
    while ( aCount > 0 )
    {
      var glyphIds = [];
      var ch       = aString.charCodeAt( aOffset );
      var noOfChars;
      var i, j;

      // Following codes represent zero-width signs, partially needed to control
      // the text processing. These signs are never displayed. Skip over the
      // character codes.
      if (( ch === 0x061C ) || ( ch === 0xFEFF )  ||
         (( ch >=  0x200B ) && ( ch <=  0x200F )) ||
         (( ch >=  0x202A ) && ( ch <=  0x202E )) ||
         (( ch >=  0x2066 ) && ( ch <=  0x2069 )))
      {
        aCount--;
        aOffset++;
        continue;
      }

      // Following codes represent signs which are also not visible, but they
      // isolate the adjacent glyphs. Skip over the codes and suppress the
      // kerning for the adjacent glyphs. */
      if ( ch === 0x000A )
      {
        aCount--;
        aOffset++;
        prevGlyphId = 0;
        continue;
      }

      // Shape the next text cluster. The function will process at least one
      // character. 'noOfChars' is thus > 0
      noOfChars = this._ShapeCluster( aFont, aString, aOffset, 
                                      Math.min( aCount, 8 ), false, glyphIds,
                                      context );

      // No matching glyph for the given cluster. Use the '.notdef' glyph.
      if ( !noOfChars )
      {
        glyphIds[0]  = 1;
        glyphIds[1]  = 0;
        noOfChars    = 1;
        console.log( "EmWi error: No glyph available for the character code: " + 
                     aString.charCodeAt( aOffset ));
      }

      // Now calculate with the metrics of the estimated glyphs.
      for ( i = 0; i < glyphIds[0]; i++ )
      {
        // Get the glyph for the given glyph id.
        var glyph = this._GetGlyph( aFont, glyphIds[ i + 1 ]);
        var kern;

        // Was not able to get the glyph and there is already some text drawing
        // instruction prepared? Complete it now, so the glyph cache is empty
        // again.
        if ( !glyph && glyphs.length )
        {
          // Print the prepared list of glyphs starting at the position startX,sy
          // into the current drawing destination. Take in account the additional
          // clipping.
          if ( gradient )
            CopyGlyphs2( gl, glyphs, kerns, dst.Origin, startX, sy, 
                         aOrientation, x1, y1, x2, y2, aDstRect, aColorTL, 
                         aColorTR, aColorBR, aColorBL );
          else
            CopyGlyphs1( gl, glyphs, kerns, dst.Origin, startX, sy, 
                         aOrientation, x1, y1, x2, y2, aDstRect, aColorTL );

          // Release the glyphs
          for ( j = 0; j < glyphs.length; j++ )
            glyphs[j].Usage--;

          // Start with a new drawing transaction
          glyphs = [];
          kerns  = [];

          // Try again to obtain the glyp
          glyph = this._GetGlyph( aFont, glyphIds[ i + 1 ]);
        }

        // The glyph is not found and the font doesn't provide the default glyph
        if ( !glyph )
        {
          console.log( "EmWi error: Not able to load the glyph: " + glyphIds[ i + 1 ]);
          return;
        }

        // Estimate the kerning between the current and the preceding glyphs.
        kern = this._GetKerning( aFont, prevGlyphId, glyphIds[ i + 1 ]);

        // Stretching white spaces? (incl. the non-breakable space). The value
        // to stretch is simply stored as kerning to the next following glyph.
        if ( stretchFac && (( ch === 0x20 ) || ( ch === 0xA0 )))
        {
          stretchAcc += stretchFac;
          kern       += stretchAcc >> 16;
          stretchAcc &= 0xFFFF;
        }

        // Does the glyph lie on the left of the clipping area? Then skip over the
        // glyph.
        if ((( sx + kern + glyph.OriginX + glyph.Width ) <= x1 ) && !glyphs.length )
        {
          sx         += kern + glyph.Advance;
          prevGlyphId = glyphIds[ i + 1 ];
          continue;
        }

        // Does the glyph lie on the right of the clipping area? Then there are
        // no more glyphs to process. Stop.
        if (( sx + kern + glyph.OriginX ) >= x2 )
        {
          aCount = 0;
          break;
        }

        // Remember the position where the first visible glyph begins.
        if ( !glyphs.length )
          startX = sx;

        // Mark the glyph as used and store the glyph in the drawing transaction
        glyph.Usage++;
        glyphs.push( glyph );
        kerns.push( kern );

        // Calculate the position where to draw the next following glyph
        sx += kern + glyph.Advance;

        // The code of the glyph to determine the kerning in the next iteration
        prevGlyphId = glyphIds[ i + 1 ];
      }

      // Skip over the processed characters
      aCount  -= noOfChars;
      aOffset += noOfChars;
    }

    // Complete the last glyph sequence, if any.
    if ( glyphs.length )
    {
      // Print the prepared list of glyphs starting at the position startX,sy
      // into the current drawing destination. Take in account the additional
      // clipping.
      if ( gradient )
        CopyGlyphs2( gl, glyphs, kerns, dst.Origin, startX, sy,
                     aOrientation, x1, y1, x2, y2, aDstRect, aColorTL,
                     aColorTR, aColorBR, aColorBL );
      else
        CopyGlyphs1( gl, glyphs, kerns, dst.Origin, startX, sy,
                     aOrientation, x1, y1, x2, y2, aDstRect, aColorTL );

      // Release the glyphs
      for ( j = 0; j < glyphs.length; j++ )
        glyphs[j].Usage--;
    }

    // Print evtl. WebGL error messages and terminate
    if ( this._Debug )
      PrintWebGLErrors( gl );
  };
  
  // ---------------------------------------------------------------------------
  // The function DrawAttrText() executes the drawing statements from the
  // attributed string aAttrString and draws the text and images into the aDst
  // bitmap at the origin (aDstX, aDstY). The drawing area is clipped by the 
  // aClipping rectangle. The necessary fonts, bitmaps and colors are passed in
  // the aAttrSet container.
  // ---------------------------------------------------------------------------
  emwi._DrawAttrText = function( aDst, aAttrSet, aAttrString, aDstFrameNo,
    aClipRect, aDstRect, aSrcPos, aOpacityTL, aOpacityTR, aOpacityBR, aOpacityBL,
    aBlend )
  {
    // Nothing to do
    if ( !aDst || !aAttrSet || !aAttrString || ( aDstFrameNo < 0 ) ||
         ( aDstFrameNo >= aDst.NoOfFrames ))
      return;

    // Limit the drawing area to the specified coordinates.
    aClipRect = this._IntersectRect( aClipRect, aDstRect );
    
    // No area to draw
    if (( aClipRect[2] <= aClipRect[0]) || ( aClipRect[3] <= aClipRect[1]))
      return;

    // Ensure the opacity values are valid
    if ( aOpacityTL < 0 ) aOpacityTL = 0; if ( aOpacityTL > 255 ) aOpacityTL = 255;
    if ( aOpacityTR < 0 ) aOpacityTR = 0; if ( aOpacityTR > 255 ) aOpacityTR = 255;
    if ( aOpacityBL < 0 ) aOpacityBL = 0; if ( aOpacityBL > 255 ) aOpacityBL = 255;
    if ( aOpacityBR < 0 ) aOpacityBR = 0; if ( aOpacityBR > 255 ) aOpacityBR = 255;

    // Prepare for the opacity gradient calculations
    var width        = aDstRect[2] - aDstRect[0];
    var height       = aDstRect[3] - aDstRect[1];
    var invWidth     = 1;
    var invHeight    = 1;
    var isVertical   = ( aOpacityTL !== aOpacityBL ) || ( aOpacityTR !== aOpacityBR );
    var isHorizontal = ( aOpacityTL !== aOpacityTR ) || ( aOpacityBL !== aOpacityBR );

    // For the slope calculation - get the 1/width and 1/height reciprocal 
    // values
    if ( width  && isHorizontal ) invWidth  /= width;
    if ( height && isVertical   ) invHeight /= height;

    // Store the opacity gradient in a structure
    var gradient = {
      IsHorizontal : isHorizontal,
      IsVertical   : isVertical,
      InvWidth     : invWidth,
      InvHeight    : invHeight,
      Width        : width,
      Height       : height,

      // Calculate the components for the alpha channel
      A0 :   aOpacityTL,
      A1 : ( aOpacityBL - aOpacityTL ) * invHeight,
      A2 :   aOpacityTR,
      A3 : ( aOpacityBR - aOpacityTR ) * invHeight
    };

    // Execute the drawing statements
    DrawAttrText( this, aDst, aDstFrameNo, aClipRect, aDstRect, 
      aDstRect[0] - aSrcPos[0], aDstRect[1] - aSrcPos[1], aAttrSet,
      aAttrString.Data, 0, aAttrString.Data.length, aBlend, gradient );
  };

  // ---------------------------------------------------------------------------
  // General purpose constants and internal variables used in the generated GUI
  // application.
  // ---------------------------------------------------------------------------
  emwi._NullPoint = [ 0, 0 ];
  emwi._NullRect = [ 0, 0, 0, 0 ];
  emwi._EmptyString = "";
  emwi._Deg2Rad = 3.1415926535 / 180;
  emwi._Rad2Deg = 180 / 3.1415926535;
  emwi._Zeros = new Array(129).join( '0' );
  
  // RootSet contains a list with currently locked objects. Locked objects 
  // belong to the root set -> so the objects and all depending objects will 
  // keep alive and they will not be disposed by the Garbage Collector.
  emwi._RootSet = [];

  // Objects points to the chain of existing objects. All existing objects will 
  // be stored in this chain.
  emwi._Objects = null;

  // No of object currently existing within the application. This value exists
  // for debugging purpose only.
  emwi._NoOfObjects = 0;

  // AppRootObject points to the root object (the application object).
  emwi._AppRootObject = null;

  // The 'Cycle' value will be used by the Garbage Collector to count garbage 
  // collections. Each time the Garbage Collector starts to collect garbage the 
  // Cycle will be increased, so the Garbage Collector can distinguish between
  // objects marked in the current and objects marked in the previous garbage
  // collection runs.
  emwi._Cycle = 0;

  // The both variables manage lists of pending signals. New signals are added
  // to a list by using the PostSignal() and IdleSignal() functions. The signals
  // are delivered when the ProcessSignals() function is called.
  emwi._PostSignals = null;
  emwi._IdleSignals = null;
  
  // List managing global observers (observers not specifying any particular
  // object nor property reference)
  emwi._Observers = null;
  
  // List managing all objects potentially used as targets for observers.
  emwi._ObserverTargets = null;

  // The class and the title of the application.
  emwi._ApplicationClass = null;
  emwi._ApplicationTitle = "";

  // The following variable stores the one and unique application instance. This
  // is usually an object of the class Core::Root (or derived from Core::Root).
  emwi._Application = null;
  
  // Start time of the application expressed in milliseconds since 1.1.1970.
  emwi._InitTime = 0;

  // Refers to the object representing the HTML canvas element used to show the
  // GUI application. The context refers to the currently used WebGL context
  // of canvas. Framebuffer is the emwi internal surface covering the main 
  // framebuffer.
  emwi._Canvas      = null;
  emwi._Context     = null;
  emwi._Framebuffer = null;
  
  // Flag indicating whether there is any modification made in the application
  // so screen update may be required.
  emwi._NeedsUpdate = false;

  // Flag indicating whether Garbage Collector run is required.
  emwi._NeedsReclaim = false;

  // Flag indicating whether the user currently holds the mouse button pressed
  // after clicking within the canvas element associated to this GUI app.
  emwi._MouseCaptured = false;

  // Counter of actually active touch interactions
  emwi._TouchCount    = 0;

  // The ids for the touch interactions. (if the touch interaction is active,
  // the corresponding value is 'undefined') 
  emwi._TouchIDs      = [];

  // Position and time when a touch interaction ended stored individually for
  // each finger.
  emwi._ReleasePos    = [];
  emwi._ReleaseTime   = [];

  // Saves the code of the recently pressed command or character key.
  emwi._LastKeyCode  = 0;
  emwi._LastCharCode = 0;

  // Optional user defined conversion function for all incoming keyboard events.
  emwi._OnKeyEventFunc = null;

  // The following variable controls how screen update is performed. If this
  // variable is 'true', the entire screen is redrawn by each update. Otherwise
  // only changed areas are redrawn.
  emwi._FullScreenUpdate = false;

  // The following variable controls whether the canvas is transparent or not.
  emwi._Alpha = false;

  // Switch controlling the debug behaviour of the application. If true, the
  // application performs additional verifications or debug outputs are made.
  emwi._Debug = false;

  // Variables describing the max. allowed and supported surface size by the
  // WebGL subsystem. During the initialization the real values are determined
  // by the WebGL API.
  emwi._MaxSurfaceSize = 1024;
  
  // The desired size of the glyph surface in pixel as well as the number of
  // allocation cells to divide the surface vertically and horizontally.
  emwi._GlyphSurfaceSize  = 1024;
  emwi._GlyphSurfaceCells = 64;
  emwi._GlyphCacheTexture = null;

  // The newest and the oldest glyph within the glyph cache. All glyphs in the
  // cache build a kind of chain.
  emwi._GlyphCacheHead    = null;
  emwi._GlyphCacheTail    = null;

  // Glyph cache surface allocation map as a 2-dimensional bitfield:
  // Bit '1' does correspond to an occupied surface cell.
  // Bit '0' does correspond to an unused surface cell.
  emwi._GlyphCacheSurfaceMap = null;

  // The following both variables store the status of the last invocation of the
  // function CreatePathFromSVGString() and the position of the error in the
  // processed SVG string.
  emwi._SVGParserStatus   =  0;
  emwi._SVGParserErrorPos = -1;

  // The following enumeration defines the 3 fundamental surface formats. They
  // are needed amongst other things to specify the desired pixel format, when
  // creating new surfaces.
  emwi._PIXEL_FORMAT_NATIVE = 0; // Native 32-bit RGBA surface
  emwi._PIXEL_FORMAT_ALPHA8 = 1; // 8-bit alpha-only surface

  // The following enumerations define the possible styles used when stroking
  // paths. The enumeration _PATH_CAP_XXX controls the appearance of the ends
  // of a stroken path. The enumeration _PATH_JOIN_XXX controls how the join
  // points between two edges of the path should be connected.
  emwi._PATH_CAP_START_FLAT     = 0x00000000;
  emwi._PATH_CAP_START_SQUARE   = 0x00000001;
  emwi._PATH_CAP_START_TRIANGLE = 0x00000002;
  emwi._PATH_CAP_START_ROUND    = 0x00000003;
  emwi._PATH_CAP_END_FLAT       = 0x00000000;
  emwi._PATH_CAP_END_SQUARE     = 0x00000100;
  emwi._PATH_CAP_END_TRIANGLE   = 0x00000200;
  emwi._PATH_CAP_END_ROUND      = 0x00000300;
  emwi._PATH_CAP_FLAT           = 0x00000000;
  emwi._PATH_CAP_SQUARE         = 0x00000101;
  emwi._PATH_CAP_TRIANGLE       = 0x00000202;
  emwi._PATH_CAP_ROUND          = 0x00000303;
  emwi._PATH_JOIN_BEVEL         = 0x00000000;
  emwi._PATH_JOIN_MITER         = 0x00010000;
  emwi._PATH_JOIN_ROUND         = 0x00020000;

  // The following enumerations define the possible status values after parsing
  // an SVG string.
  emwi._SVG_PARSER_SUCCESS           = 0;
  emwi._SVG_PARSER_EMPTY_STRING      = 1;
  emwi._SVG_PARSER_SYNTAX_ERROR      = 2;
  emwi._SVG_PARSER_INVALID_ARGUMENT  = 3;
  emwi._SVG_PARSER_OUT_OF_MEMORY     = 4;

  // The following enumeration defines the possible filter modes for the function
  // FilterBitmap():
  emwi._TINT_MODE_NONE              = 0;
  emwi._TINT_MODE_GRAYSCALE         = 1;
  emwi._TINT_MODE_TINT_BY_OPACITY   = 2;
  emwi._TINT_MODE_TINT_BY_LUMINANCE = 3;

  return emwi;
})();
 
/* Embedded Wizard */