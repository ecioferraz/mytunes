import React from 'react';

import './styles.css';

export default function Loading() {
  return (
    <section className='loading'>
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </section>
  );
}
