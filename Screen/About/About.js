import React from 'react';
import {View, Text} from 'react-native';

export default function About() {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'monospace',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 10,
        }}>
        About Apps
      </Text>
      <Text style={{fontFamily: 'monospace', textAlign: 'center', padding: 10}}>
        This app was create from yesterday night with much love and less effort.
        hope you like it.
      </Text>
    </View>
  );
}
