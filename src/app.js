import React from 'react';
import EldritchBlast from './eldritchBlast';
import Invocations from './invocations';
import LevelSelector from './levelSelector';
import RenderIf from './renderIf';
import patrons from './data/patrons';
import pacts from './data/pacts';

const proficiencyBonus = (level) => {
  if (level >= 17) { return 6; }
  else if (level >= 13) { return 5; }
  else if (level >= 9) { return 4; }
  else if (level >= 5) { return 3; }
  else return 2;
};

const App = ({
  model: { activeInvocations, invocations, level, patron, pact },
  onActiveInvocationChange, onPatronChange, onPactChange, onLevelChange,
  version, source }) => (
    <div>
      <section>
        <div>
          <LevelSelector
            label="Level"
            value={level}
            onChange={onLevelChange} />
          <ul>
            <li>Proficiency Bonus: <strong>{ `+${proficiencyBonus(level)}` }</strong></li>
          </ul>
        </div>
        <div>
          <label>Patron: <select onChange={e => onPatronChange(e.target.value)}>
            <option value="">Select...</option>
            { patrons.map(p => <option value={p.name} key={p.name}>{p.value}</option>) }
          </select></label>
        </div>
        <RenderIf condition={() => level >= 3}>
          <div>
            <label>Pact: <select onChange={e => onPactChange(e.target.value)}>
              <option value="">Select...</option>
              { pacts.map(p => <option value={p.name} key={p.name}>{p.value}</option>) }
            </select></label>
          </div>
        </RenderIf>
        <EldritchBlast
          invocations={invocations}
          activeInvocations={activeInvocations}
          level={level} />
        <Invocations
          invocations={invocations}
          activeInvocations={activeInvocations}
          level={level}
          pact={pact}
          patron={patron}
          onChange={onActiveInvocationChange} />
      </section>
      <footer>
        <span className="version">{ `v${version}` }</span>
        <span className="source"><a href={source}>Source</a></span>
      </footer>
  </div>
  );

  export default App;
