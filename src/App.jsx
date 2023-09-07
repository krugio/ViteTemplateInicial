import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from 'react-query'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import AppRoutes from './routes/AppRoutes';
export const queryClient = new QueryClient();
let persistor = persistStore(store)
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <AppRoutes />
        </PersistGate>

      </Provider>
    </QueryClientProvider>
  )
}

export default App