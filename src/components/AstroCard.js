import React from 'react';
import styles from '../styles/AstroCard.module.css';

const AstroCard = ({ name, aircraft }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <h2 className={styles.craft}>Aircraft: {aircraft}</h2>
    </div>
  );
};

export default AstroCard;
