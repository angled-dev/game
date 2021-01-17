import Loading from 'atoms/Loading';
import GlobalContext from 'context';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { calcDist } from 'resources/utils';
import Row from 'molecules/Row';
import Tile from 'molecules/Tile';

interface BoardProps {
  terrainMatrix: number[][];
  overlayMatrix: number[][];
  startCoords: [number, number];
  a: number;
  size: number;
}

export default function Board({
  terrainMatrix,
  overlayMatrix,
  startCoords,
  a,
  size,
}: BoardProps) {
  const { player } = useContext(GlobalContext);

  useEffect(() => {
    player && player.setCoords(startCoords);
  }, []);

  return a && player && player.coords ? (
    <_Board {...{ a, size }}>
      {terrainMatrix.map((val, y) => (
        <Row key={y}>
          {val.map((val, x) => (
            <Tile
              key={x}
              code={val}
              dist={calcDist([x, y], player.coords)}
              coords={[x, y]}
            />
          ))}
        </Row>
      ))}
    </_Board>
  ) : (
    <Loading />
  );
}

const _Board = styled.div<{ a: number; size: number }>`
  display: grid;
  --size: ${({ a, size }) => a * size}px;
  height: var(--size);
  width: var(--size);
`;
