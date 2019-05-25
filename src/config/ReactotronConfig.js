import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import { NativeModules } from 'react-native';

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .configure({ host: scriptHostname })
    .connect();
  tron.clear();

  console.tron = tron;
}
