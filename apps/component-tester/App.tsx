import { StatusBar } from 'expo-status-bar';
import { EDSProvider } from '@equinor/design-system-mobile-components';
import ButtonsTest from './screens/ButtonsTest';

export default function App() {
  return (
    <EDSProvider colorScheme="light" density="phone">
      <StatusBar style="auto" />
      <ButtonsTest />
    </EDSProvider>
  );
}
