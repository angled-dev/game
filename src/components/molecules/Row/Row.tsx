import React from 'react';
import './Row.css';

interface RowProps {
  children?: React.ReactNode;
}

function Row({ children }: RowProps) {
  return <div className="row">{children}</div>;
}

export default Row;
