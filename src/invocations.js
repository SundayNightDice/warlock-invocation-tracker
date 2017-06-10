import React from 'react';
import Checkbox from './checkbox';
import RenderIf from './renderIf';

const invocationsKnown = (level) => {
  if (level === 20) { return 8; }
  else if (level >= 15) { return 7; }
  else if (level >= 12) { return 6; }
  else if (level >= 9) { return 5; }
  else if (level >= 7) { return 4; }
  else if (level >= 5) { return 3; }
  else if (level >= 2) { return 2; }
  else return 0;
};

const Invocations = ({ activeInvocations, invocations, level, patron, pact, onChange }) => {
  const totalSelected = Object.keys(activeInvocations)
    .filter(x => activeInvocations[x])
    .length;
  const totalInvocations = invocationsKnown(level);
  return (
    <RenderIf condition={() => totalInvocations}>
      <div>
        <h2>Invocations Available</h2>
        <span>Invocations Known: <strong>{ totalInvocations }</strong></span>
        <ul>
          {
            invocations
              .filter(i => {
                const correctLevel = i.hasOwnProperty('minLevel') ? level >= i.minLevel : true;
                const correctPact = i.hasOwnProperty('pact') ? i.pact === (pact || '') : true;
                const correctPatron = i.hasOwnProperty('patron') ? i.patorn === (patron || '') : true;

                return correctLevel && correctPact && correctPatron;
              })
              .map(i =>
                <li key={i.id}>
                  <Checkbox
                    label={i.name}
                    value={activeInvocations[i.id]}
                    disabled={activeInvocations[i.id] ? false : totalSelected === totalInvocations}
                    onChange={checked => onChange(i.id, checked)} />
                </li>
              )
          }
        </ul>
      </div>
    </RenderIf>
  );
}

export default Invocations;
