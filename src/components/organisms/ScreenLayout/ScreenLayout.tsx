import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from 'context';
import styled from 'styled-components';
import Board from 'molecules/Board';
import ChampionPanel from 'molecules/ChampionPanel';

const terrainMatrix = [
    [0, 1, 0, 2, 1, 3, 7, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 2, 0, 6, 4, 2, 1, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 2, 4, 5, 2, 6, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 0, 2, 1, 3, 7, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 2, 0, 6, 4, 2, 1, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 2, 4, 5, 2, 6, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 3, 6, 3, 2, 2, 8, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 0, 2, 1, 3, 7, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 2, 0, 6, 4, 2, 1, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 2, 4, 5, 2, 6, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 0, 2, 1, 3, 7, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 2, 0, 6, 4, 2, 1, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 2, 4, 5, 2, 6, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 3, 6, 3, 2, 2, 8, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 3, 6, 3, 2, 2, 8, 0, 1, 0, 2, 1, 3, 7, 8],
  ],
  overlayMatrix = [
    [0, 1, 0, 2, 1, 3, 7, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 2, 0, 6, 4, 2, 1, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 2, 4, 5, 2, 6, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 0, 2, 1, 3, 7, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 2, 0, 6, 4, 2, 1, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 2, 4, 5, 2, 6, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 3, 6, 3, 2, 2, 8, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 0, 2, 1, 3, 7, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 2, 0, 6, 4, 2, 1, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 2, 4, 5, 2, 6, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 0, 2, 1, 3, 7, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 2, 0, 6, 4, 2, 1, 0, 1, 0, 2, 1, 3, 7, 8],
    [0, 1, 2, 4, 5, 2, 6, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 3, 6, 3, 2, 2, 8, 0, 1, 0, 2, 1, 3, 7, 8],
    [1, 3, 6, 3, 2, 2, 8, 0, 1, 0, 2, 1, 3, 7, 8],
  ],
  startCoords = [7, 14];

export default function ScreenLayout() {
  const { screen } = useContext(GlobalContext),
    [a, setA] = useState<number>(0),
    size = terrainMatrix.length;

  useEffect(() => {
    if (!screen || !screen.aspect || !screen.dimensions) return;
    var _a = 0;
    if (['landscape', 'square'].includes(screen.aspect))
      _a = Math.floor((screen.dimensions[1] * 0.9) / size);
    if (screen.aspect === 'portrait' || _a * size > screen.dimensions[0] * 0.6)
      _a = (screen.dimensions[0] * 0.6) / size;
    setA(_a);
  }, [screen, size]);

  return (
    <_ScreenLayout {...{ a, size }}>
      <div></div>
      <div></div>
      <Board
        {...{
          terrainMatrix,
          overlayMatrix,
          startCoords: [startCoords[0], startCoords[1]],
          a,
          size,
        }}
      />
      <ChampionPanel />
    </_ScreenLayout>
  );
}

const _ScreenLayout = styled.div<{
  a: number;
  size: number;
}>`
  --size: calc(${({ a, size }) => a * size}px + 4vw);

  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;

  grid-template:
    'badGood badGood badGood' 3%
    'dialog board championPanel' auto
    / auto var(--size) auto;

  > div:nth-child(1) {
    grid-area: badGood;
    border: 1px solid red;
    box-sizing: border-box;
  }
  > div:nth-child(2) {
    grid-area: dialog;
    border: 1px solid red;
    box-sizing: border-box;
  }
  > div:nth-child(3) {
    grid-area: board;
    place-self: center;
  }
  > div:nth-child(4) {
    grid-area: championPanel;
  }
`;
