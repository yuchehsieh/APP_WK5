// Import libraries for making a component
import React from 'react';
import { View, Image, Text, } from 'react-native';

// Make a component
const Page1 = () => {
  const { viewStyle, searchbar, mainblock, word, mainblock2, mainblock3, bottombar, games, gametext, channelstext, } = styles;

  return (
    <View>

      <View style={viewStyle}>
        <View style={searchbar}>

            <Image 
            source={require('./src/Asset/icon_search.png')}
            style={{ width: 18, height: 18, marginLeft: -10, marginTop: 2.5 }}
            />

           <Text style={word} >Search</Text>
        </View> 
         <Image 
           source={require('./src/Asset/btn_cast.png')}
           style={{ width: 33, height: 33 }}
         />
      </View>  
    <View style={mainblock}>
        <Image 
        source={require('./src/Asset/img_leagueoflegends.png')}
        style={{ width: 180, height: 180, marginRight: 2.5 }}
        />
        <Image 
        source={require('./src/Asset/img_counterstrike.png')}
        style={{ width: 180, height: 180, marginLeft: 2.5 }}
        />
    </View>   
    <View style={mainblock2}>
        <Image 
        source={require('./src/Asset/img_hearthstone.png')}
        style={{ width: 180, height: 180, marginRight: 2.5 }}
        />
        <Image 
        source={require('./src/Asset/img_dota2.png')}
        style={{ width: 180, height: 180, marginLeft: 2.5 }}
        />
     </View>
     <View style={mainblock3}>
        <Image 
        source={require('./src/Asset/img_h1z1.png')}
        style={{ width: 180, height: 180, marginRight: 2.5 }}
        /> 
        <Image 
        source={require('./src/Asset/img_destiny.png')}
        style={{ width: 180, height: 180, marginLeft: 2.5 }}
        /> 
     </View> 
    <View style={bottombar} >
      <View style={games}>
         <Image 
        source={require('./src/Asset/btn_games_selected.png')}
        style={{ width: 50, height: 50 }}
         /> 
        <Text style={gametext}>Games</Text>
      </View>
      <View style={games}>
        <Image 
        source={require('./src/Asset/btn_channels.png')}
        style={{ width: 50, height: 50 }}
         /> 
        <Text style={channelstext}>Channels</Text>
      </View>
      <View style={games}>
         <Image 
        source={require('./src/Asset/btn_following.png')}
        style={{ width: 50, height: 50 }}
         />
        <Text style={channelstext}>Following</Text>
      </View>
      <View style={games}>
         <Image 
        source={require('./src/Asset/btn_me.png')}
        style={{ width: 50, height: 50 }}
         />
        <Text style={channelstext}>Me</Text>  
      </View>

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
      searchbar: {
      width: 320,
      height: 30,
      backgroundColor: '#311F53',
      flexDirection: 'row',
      boardRadius: 5,
      paddingLeft: 19,
      paddingTop: 5,
      borderRadius: 5,
    },
    word: {
      color: '#B9A3E3',
      marginTop: 2,
    },
    mainblock: {
      paddingTop: 5,
      paddingLeft: 5,
      flexDirection: 'row',
    },
    mainblock2: {
      paddingTop: 5,
      paddingLeft: 5,
      flexDirection: 'row',
    },
    mainblock3: {
      paddingTop: 5,
      paddingLeft: 5,
      flexDirection: 'row',
    },
    bottombar: {
      flexDirection: 'row',
    },
    games: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gametext: {
      color: '#6441A5',
      textAlign: 'center',
      marginTop: -15,
      fontSize: 10,
    },
    channelstext: {
      color: '#BBBBBB',
      textAlign: 'center',
      marginTop: -15,
      fontSize: 10,
    },
};

// Make the component available to other parts of the app
export default Page1;
