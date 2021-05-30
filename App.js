import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>dany</Text>
      <Text>arkham</Text>
      <Text>trias</Text>
      <Dany />
    </View>
  );
};

const Dany = () => {
  return <Text>dany arkham</Text>;
};

export default App;
