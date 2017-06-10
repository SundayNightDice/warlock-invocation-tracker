import React from 'react';

const eldritchBlastBeams = (level) => {
  if (level >= 17) { return 4; }
  else if (level >= 11) { return 3; }
  else if (level >= 5) { return 2; }
  else return 1;
};

const Effect = ({ effect, invocation }) =>
  <li>
    <span><span className="description">{effect}</span><span className="invocation">{invocation}</span></span>
  </li>;

const Pluralized = ({ value, text, plural }) =>
  <p><strong>{value}</strong>{` ${text}${value > 1 ? plural : ''}`}</p>;

const EldritchBlast = ({ activeInvocations, invocations, level }) => (
  <section className="eldritchBlast">
    <header>
      <div className="icon" />
      <h3>Eldritch Blast</h3>
    </header>
    <Pluralized
      value={eldritchBlastBeams(level)}
      text="x 1d10 beam"
      plural="s" />
    <ul>
      {
        invocations
          .filter(i => activeInvocations[i.id] && i.eldritchBlast)
          .map(i => <Effect effect={i.effect} invocation={i.name} />)
      }
    </ul>
  </section>
);

export default EldritchBlast;
