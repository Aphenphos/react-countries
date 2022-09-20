import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <h1 className="country-name">{name}</h1>
      <img src={`https://flagcdn.com/48x36/${(iso2.toLowerCase())}.png`}></img>
    </div>
  );
}