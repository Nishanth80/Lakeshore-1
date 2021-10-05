import codePush from 'react-native-code-push';

...

const codePushOptions = {
  installMode: codePush.InstallMode.IMMEDIATE,
  deploymentKey: "WQ61IREdjvFUsAkll27d0mqdV_fM30sy2nLAw",
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

export default codePush(codePushOptions)(App);
