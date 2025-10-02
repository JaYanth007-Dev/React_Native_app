import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Title from '../components/UI/Title'
import Colors from '../constants/Colors';
import PrimaryButton from '../components/UI/PrimaryButton';

const GameOverScreen = ({roundsNUmber,userNumber,onStartNewGame}) => {
  return (
    <View style={style.rootContainer}>
      <Title>Game Over</Title>
      <View style={style.imageContainer}>
              <Image style={style.image} source={require("../assets/mountain.jpg")} />
          </View>
          <Text style={style.summaryText}>
              Your Phone needed
              <Text style={style.highlight}> { roundsNUmber} </Text>
              rounds to guess the number
              <Text style={style.highlight}> { userNumber}</Text>
          </Text>
         <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen


const style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems:"center"
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
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