import GlobalContext from 'context';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

interface TileProps {
  code: number;
  coords: [number, number];
  dist: number;
}

function Tile({ code, coords, dist }: TileProps) {
  const { player } = useContext(GlobalContext),
    [color, twinkle] = useState<string | undefined>();

  useEffect(() => {
    if (!color) return;
    setTimeout(() => twinkle(undefined), 150);
  }, [color]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    player && player.stamina.current >= dist
      ? player.moveTo(coords, dist)
      : twinkle('red');
  };

  return (
    <_Tile hasPlayer={dist === 0} color={color} onClick={handleClick}>
      {dist}
    </_Tile>
  );
}

const _Tile = styled.div<{ hasPlayer: Boolean; color?: string }>`
  width: 100%;
  height: 100%;
  border: solid 1px;
  box-sizing: border-box;
  background: ${({ hasPlayer, color }) =>
    color || (hasPlayer ? 'blue' : 'transparent')};
`;

export default Tile;
