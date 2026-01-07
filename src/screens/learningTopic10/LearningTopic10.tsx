import React from 'react';
import BaseScreen from '../../components/BaseScreen';

import UseStateDemo from './components/UseStateDemo';
import UseMemoDemo from './components/UseMemoDemo';
import UseCallbackDemo from './components/UseCallbackDemo';
import UseRefDemo from './components/UseRefDemo';
import CustomHookDemo from './components/CustomHookDemo';

export default function LearningTopic10() {
  return (
    <BaseScreen title="Learning Topic 10">
      <UseStateDemo />
      <UseMemoDemo />
      <UseCallbackDemo />
      <UseRefDemo />
      <CustomHookDemo />
    </BaseScreen>
  );
}

/*
  This screen demonstrates the difference between useState, useMemo, useCallback,
  useRef, and Custom Hooks in React / React Native.

  - useState:
    Used to store and update UI state. Any change in state causes the component
    to re-render.

  - useMemo:
    Used to memoize (cache) the result of an expensive calculation so it only
    re-runs when its dependencies change, improving performance.

  - useCallback:
    Used to memoize functions so that the same function reference is reused
    between renders, preventing unnecessary re-renders of child components.

  - useRef:
    Used to store mutable values or access UI elements without triggering a
    re-render when the value changes.

  - Custom Hooks:
    Used to extract and reuse common logic (state + behavior) across multiple
    components, making the code cleaner, reusable, and easier to maintain.
*/
