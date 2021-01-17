import React from 'react';
import './ChampionPanel.css';

export default function _ChampionPanel() {
  return (
    <div className="champion-panel">
      <div className="champion-panel__name"></div>
      <div className="champion-panel__moves"></div>
      <div className="champion-panel__eq"></div>
      <div className="champion-panel__bpIcon"></div>
      <div className="champion-panel__charIcon"></div>
      <div className="champion-panel__equipment"></div>
      <div className="champion-panel__hp"></div>
      <div className="champion-panel__stats"></div>
    </div>
  );
}
