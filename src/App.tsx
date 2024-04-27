import { RouterProvider } from 'react-router-dom';
import { router } from './router';

import { Toaster } from 'react-hot-toast';
import { StageProvider } from './contexts/StageContext';
import { ModalProvider } from './contexts/ModalContext';
import { SelectedPlayerProvider } from './contexts/SelectedPlayerContext';
import { ModalRightProvider } from './contexts/ModaRightContext';

function App() {
  return (
    <ModalProvider>
      <StageProvider>
        <SelectedPlayerProvider>
          <Toaster />
          <ModalRightProvider>
            <RouterProvider router={router} />
          </ModalRightProvider>
        </SelectedPlayerProvider>
      </StageProvider>
    </ModalProvider>
  );
}

export default App;
