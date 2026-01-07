import React from 'react';
import { ScrollView } from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import { CounterProvider } from './context/CounterContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ContextDemo from './context/ContextDemo';
import ReduxDemo from './redux/ReduxDemo';
/**
 * Learning Topic 11: State Management (Context API & Redux Toolkit)
 *
 * 1️⃣ Context API:
 * - Built-in React feature for sharing state between components without prop drilling.
 * - Useful for small to medium apps or specific features where global state is limited.
 * - Example: In an e-commerce app, a CartProvider can hold the cart state (items added by the user).
 *   Any component inside the provider, like ProductBox or CartSummary, can access and update the cart without passing props manually.
 * - Prop Drilling Example:
 *   function App() {
 *     const user = { name: 'Kunal' };
 *     return <Parent user={user} />;
 *   }
 *
 *   function Parent({ user }: { user: { name: string } }) {
 *     return <Child user={user} />;
 *   }
 *
 *   function Child({ user }: { user: { name: string } }) {
 *     return <Text>Hello, {user.name}!</Text>;
 *   }
 *   // Here, Parent doesn’t need `user` but must pass it to Child — this is prop drilling.
 *
 * - Advantages: Simple, no extra dependencies, easy to set up.
 * - Limitations: Can become messy if app has complex or deeply nested state.
 * - Why needed: Avoids prop drilling when multiple components need access to the same state, keeps state logic centralized for small features.
 *
 * 2️⃣ Redux Toolkit:
 * - Official Redux library for predictable, centralized state management.
 * - Suitable for medium to large apps with complex state interactions.
 * - Uses slices, actions, and reducers to manage state in a structured way.
 * - Example: Counter slice manages increment, decrement, reset actions, accessible globally.
 * - Advantages: Predictable state, dev tools integration, scalable architecture.
 * - Limitations: Slightly more setup and boilerplate compared to Context API.
 *
 * Why we are using them:
 * - Both provide ways to manage global/shared state in React Native apps.
 * - Context API is lightweight for simple cases.
 * - Redux Toolkit is robust for larger apps or when multiple components need consistent state updates.
 */

export default function LearningTopic11() {
  return (
    <BaseScreen title="Learning Topic 11">
      <ScrollView>
        <CounterProvider>
          <ContextDemo />
        </CounterProvider>
        <Provider store={store}>
          <ReduxDemo />
        </Provider>
      </ScrollView>
    </BaseScreen>
  );
}
