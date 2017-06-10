import React from 'react';

const Effect = ({ effect, invocation }) =>
  <li>
    <span><span className="description">{effect}</span><span className="invocation">{invocation}</span></span>
  </li>;

const PactWeapon = ({ activeInvocations, invocations, level, className }) => (
  <section className={`pactWeapon ${className}`}>
    <header>
      <div className="icon" />
      <h3>Pact Weapon</h3>
    </header>
    <ul>
      {
        invocations
          .filter(i => activeInvocations[i.id] && i.pact === 'blade' && i.effect)
          .map(i => <Effect effect={i.effect} invocation={i.name} />)
      }
    </ul>
  </section>
);

export default PactWeapon;
