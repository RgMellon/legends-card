import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { StageProvider } from './contexts/StageContext';
import { ModalProvider } from './contexts/ModalContext';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <StageProvider>
          <Toaster />
          <RouterProvider router={router} />
        </StageProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
