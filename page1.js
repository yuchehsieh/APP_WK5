// Import libraries for making a component
import React from 'react';
import { View, Image } from 'react-native';

// Make a component
const Page1 = () => {
  const { viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Image 
    source={require('./src/Asset/logo_twitch.png')} 
    style={{ width: 210, height: 100 }}
    />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#6441A5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 667,
    width: 375,
    paddingTop: 15,
  },
 
};

// Make the component available to other parts of the app
export default Page1;