import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import dany from '../../src/Assets/Images/dany.jpg';

// functional component
const Home = () => {
  return (
    <View>
      <StylingReactNativeComponent />
    </View>
  );
};

//separate css function
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#341f97',
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 20,
  },
});

// data
const data = {
  jobname: 'React Native Developer',
};
const people = [{nama: 'Dany Arkham', salary: '500 USD'}];

//styling component
const StylingReactNativeComponent = () => {
  return (
    <ScrollView>
      <Text style={styles.text}>Hire, {data.jobname}!</Text>
      <View
        style={{
          width: 250,
          height: 'auto',
          backgroundColor: '#5f27cd',
          borderWidth: 4,
          borderColor: '#222f3e',
          borderRadius: 20,
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
            borderRadius: 20,
            display: 'flex',
            justifyContent: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            fontFamily: 'monospace',
            textAlign: 'center',
            marginTop: 5,
          }}>
          {people[0].nama} / {people[0].salary}
        </Text>
        <Text style={{fontFamily: 'monospace', textAlign: 'center'}}>
          Mobile Homes Developer based on react native framework. can create
          small to medium project with professional and care communication
        </Text>
        <View
          style={{
            margin: 10,
            backgroundColor: '#1dd1a1',
            borderRadius: 10,
          }}>
          {/* <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            HIRE ME!
          </Text> */}
          <Button
            onPress={() => {
              Alert.alert(
                `Spend your ${people[0].salary} to hire ${people[0].nama}. Are you sure?`,
              );
            }}
            title="HIRE ME"
            color="#1dd1a1"
            accessibilityLabel="Tap here to hire the developer"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
