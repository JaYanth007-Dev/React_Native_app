import React from 'react'
import { Image, StyleSheet, Text, View,Dimensions, useWindowDimensions, ScrollView } from 'react-native'
import Title from '../components/UI/Title'
import Colors from '../constants/Colors';
import PrimaryButton from '../components/UI/PrimaryButton';

const GameOverScreen = ({roundsNUmber,userNumber,onStartNewGame}) => {
  
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 360)
        imageSize = 150;

    if (height < 400)
        imageSize = 90
    
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        
    }

  
    return (
      <ScrollView style={style.screen}>
        <View style={style.rootContainer}>
          <Title>Game Over</Title>
          <View style={[style.imageContainer,imageStyle]}>
            <Image
              style={style.image}
              source={require("../assets/mountain.jpg")}
            />
          </View>
          <Text style={style.summaryText}>
            Your Phone needed
            <Text style={style.highlight}> {roundsNUmber} </Text>
            rounds to guess the number
            <Text style={style.highlight}> {userNumber}</Text>
          </Text>
          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
      </ScrollView>
    );
}

export default GameOverScreen

// const deviceWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems:"center"
    },
    screen: {
        flex: 1,
    },
    imageContainer: {
        // width: deviceWidth < 380?150:300,
        // height: deviceWidth < 380?150:300,
        // borderRadius: deviceWidth < 380?75:150,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        borderWidth:3,
        margin:36
    },
    image: {
        width: "100%",
        height:"100%"
    },
    summaryText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom:24
    },
    highlight: {
        color: Colors.primary500,
        fontWeight:'bold'
    }
})