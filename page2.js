// Import libraries for making a component
import React from 'react';
import { View, Image, Text } from 'react-native';


//Make a component
const Page2 = () => {
  const { viewStyle, navbar, textStyle, livestyle, livetext, recentstyle, recenttext, mainblock } = styles;

  return (
    <View>
       <View style={viewStyle}>       
        <Image
        source={require('./src/Asset/btn_back.png')}
        style={{ width: 33, height: 33 }}
        />
        <Text style={textStyle}>Hearthstone</Text>
        <Image
        source={require('./src/Asset/btn_like.png')}
        style={{ width: 33, height: 33 }}
        />
      </View> 
    <View style={navbar}>
      <View style={livestyle}>
        <Text style={livetext}>LIVE</Text>
      </View>
      <View style={recentstyle}>
        <Text style={recenttext}>RECENT</Text>
      </View>
    </View>
      <View style={mainblock}>
        <Image 
        source={require('./src/Asset/img_firebat.png')}
        style={{ width: 365, height: 200, marginTop: 5.5, }}
        />
        <Image 
        source={require('./src/Asset/img_forsen.png')}
        style={{ width: 365, height: 200, marginTop: 5.5, }}
        />
        <Image 
        source={require('./src/Asset/img_kolento.png')}
        style={{ width: 365, height: 144, marginTop: 5.5, }}
        />
      </View>
    </View>
    );
};

const styles = {
  viewStyle: {
    backgroundColor: '#6441A5',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    width: 375,
    paddingTop: 15,
    flexDirection: 'row',
    paddingLeft: 8.5,
    paddingRight: 8.5,
  },
  textStyle: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  navbar: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 44,
    width: 375,
  },
  livestyle: {
    flex: 1,
    borderBottomWidth: 5, 
    borderBottomColor: '#6441A5'
  },
  recentstyle: {
    flex: 1,
  },
  livetext: {
    textAlign: 'center',
    color: '#6441A5',
    fontsize: 13,
    margin: 15,
  },
  recenttext: {
     textAlign: 'center',
     margin: 15,
     color: '#BBBBBB',
     fontsize: 13,
  },
  mainblock:  {
     paddingLeft: 5,
     paddingRight: 5,
     
  }

};

// Make the component available to other parts of the app
export default Page2;
