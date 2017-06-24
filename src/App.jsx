import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import WelcomePage from './components/WelcomePage/WelcomePage';

import store from './stores/ui-store';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <DevTools />
        <WelcomePage store={store}/>
      </div>
    );
  }
};

export default App;
