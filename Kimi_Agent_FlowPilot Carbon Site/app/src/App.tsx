import { ContactModalProvider } from '@/components/ContactModal';
import Home from '@/pages/Home';

export default function App() {
  return (
    <ContactModalProvider>
      <Home />
    </ContactModalProvider>
  );
}
