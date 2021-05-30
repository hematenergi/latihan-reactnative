import React, {Component, Profiler} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

// functional component
const App = () => {
  return <SampleComponent />;
};

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#ff6b6b'}} />
      <Text>dany</Text>
      <Text>arkham</Text>
      <Text>bekasi</Text>
      <Dany />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Dany = () => {
  return <Text>dany arkham</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'http://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

//class component

class BoxGreen extends Component {
  render() {
    return (
      <Image
        source={{uri: 'http://placeimg.com/100/50/nature'}}
        style={{width: 100, height: 50}}
      />
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'http://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>ini adalah hewan</Text>
      </View>
    );
  }
}

export default App;
