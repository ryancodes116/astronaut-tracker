import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from '../styles/Cards.module.css';

import AstroCard from './AstroCard';

const Cards = () => {
  const [astronauts, setAstronauts] = useState([]);

  const getAstronauts = () =>
    axios.get('http://api.open-notify.org/astros.json').then((response) => {
      const { people } = response.data;
      setAstronauts(people);
    });

  useEffect(() => {
    getAstronauts();
  }, []);

  const astros = astronauts.map((astronaut, index) => {
    return (
      <AstroCard key={index} name={astronaut.name} aircraft={astronaut.craft} />
    );
  });

  return <div className={styles.cards}>{astros}</div>;
};

export default Cards;
