import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvieder from 'material-ui/styles/MuiThemeProvider';

import AppContainer from './components/individual/AppContainer/AppContainer';
import './index.css';

ReactDOM.render(<MuiThemeProvieder>
                    <AppContainer />
                </MuiThemeProvieder>
, document.getElementById('root'));
registerServiceWorker();
