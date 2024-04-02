import {createContext} from 'react';

export const CanvasContext = createContext({
  addEllipse: () => {},
  addLine: () => {},
});
