import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import dany from './src/Images/dany.jpg';

// functional component
const App = () => {
  return (
    <View>
      {/* <SampleComponent /> */}
      <StylingReactNativeComponent />
    </View>
  );
};

const dataDiri = {
  nama: 'Dany Arkham',
};

//styling component
const StylingReactNativeComponent = () => {
  return (
    <ScrollView>
      <Text style={styles.text}>Hallo, {dataDiri.nama}!</Text>
      <View
        style={{
          width: 345,
          height: 400,
          backgroundColor: '#5f27cd',
          borderWidth: 4,
          borderColor: '#222f3e',
          marginTop: 20,
          marginLeft: 20,
          padding: 20,
        }}>
        <Image
          source={dany}
          style={{
            width: 200,
            height: 200,
            borderWidth: 2,
            borderColor: '#222f3e',
            display: 'flex',
            justifyContent: 'center',
          }}
        />

        <View />
      </View>
    </ScrollView>
  );
};

//styling css component
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#341f97',
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 20,
  },
});

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
