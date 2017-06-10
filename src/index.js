import React from 'react';
import { render } from 'react-dom';
import App from './app';
import invocations from './data/invocations';
import './style.scss';
import { version, repository } from '../package.json';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 1,
      pact: null,
      patron: null,
      eldritch: false,
      invocations: invocations,
      activeInvocations: invocations.reduce((map, obj) => {
        map[obj.id] = false;
        return map;
      }, {})
    };
    this.onChange = this.onChange.bind(this);
    this.onActiveInvocationChange = this.onActiveInvocationChange.bind(this);
  }

  render() {
    return <App
      model={this.state}
      onPactChange={ (v) => this.onChange(v, 'pact') }
      onPatronChange={ (v) => this.onChange(v, 'patron') }
      onLevelChange={ (v) => this.onChange(v, 'level') }
      onEldritchChange={ (checked) => this.onChange(checked, 'eldritch') }
      onActiveInvocationChange={this.onActiveInvocationChange}
      version={version}
      source={repository.url} />;
  }

  onChange(value, prop) {
    const nextState = this.state;
    nextState[prop] = value;
    this.setState(nextState);
  }

  onActiveInvocationChange(id, checked) {
    const nextState = this.state;
    nextState.activeInvocations[id] = checked;
    this.setState(nextState);
  }
}

const loader = document.getElementById('loader');
loader.parentNode.removeChild(loader);

render(
  <Container />,
  document.getElementById('root')
);
