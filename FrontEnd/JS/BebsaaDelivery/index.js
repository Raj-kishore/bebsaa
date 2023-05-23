/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import { PersistGate } from 'redux-persist/integration/react';


let { store, persistor } = configureStore()


const ReduxCult = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)


AppRegistry.registerComponent(appName, () => ReduxCult);
