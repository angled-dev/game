import { createContext } from 'react';
import type { screen } from './useScreen';
import type { player } from './usePlayer';

interface GlobalContextProps {
  screen: screen;
  player: player;
}

const GlobalContext = createContext<Partial<GlobalContextProps>>({});

export default GlobalContext;
export { default as useScreen } from './useScreen';
export { default as usePlayer } from './usePlayer';
