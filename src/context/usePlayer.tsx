import { useState } from 'react';

const dP = {
  coords: [0, 0],
  hp: 100,
  stamina: 20,
  strength: 20,
  range: 20,
  polarity: 50,
};

export interface player {
  coords: [number, number];
  setCoords: (coords: player['coords']) => void;
  hp: { base: number; current: number };
  setHp: (hp: player['hp']) => void;
  stamina: {
    base: number;
    current: number;
  };
  setStamina: (stamina: player['stamina']) => void;
  strength: {
    base: number;
    current: number;
  };
  setStrength: (strength: player['strength']) => void;
  range: {
    base: number;
    current: number;
  };
  setRange: (range: player['range']) => void;
  polarity: {
    base: number;
    current: number;
  };
  setPolarity: (polarity: player['polarity']) => void;
  moveTo: (coords: player['coords'], dist: number) => void;
}

export default function usePlayer(): player {
  const [coords, setCoords] = useState<player['coords']>([
      dP.coords[0],
      dP.coords[1],
    ]),
    [hp, setHp] = useState<player['hp']>({
      base: dP.hp,
      current: dP.hp,
    }),
    [stamina, setStamina] = useState<player['stamina']>({
      base: dP.stamina,
      current: dP.stamina,
    }),
    [strength, setStrength] = useState<player['strength']>({
      base: dP.strength,
      current: dP.strength,
    }),
    [range, setRange] = useState<player['range']>({
      base: dP.range,
      current: dP.range,
    }),
    [polarity, setPolarity] = useState<player['polarity']>({
      base: dP.polarity,
      current: dP.polarity,
    }),
    moveTo: player['moveTo'] = (coords, dist) => {
      setCoords(coords);
      setStamina({ ...stamina, ...{ current: stamina.current - dist } });
    };

  return {
    coords,
    setCoords,
    hp,
    setHp,
    stamina,
    setStamina,
    strength,
    setStrength,
    range,
    setRange,
    polarity,
    setPolarity,
    moveTo,
  };
}
