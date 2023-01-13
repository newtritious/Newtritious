import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <Hero />
    </ChakraProvider>
  );
}

export default App;
