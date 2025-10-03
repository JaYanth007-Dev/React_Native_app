import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground} from 'react-native';
import StartGameScreen from './src/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './src/screens/GameScreen';
import { SafeAreaView } from "react-native-safe-area-context"
import Colors from './src/constants/Colors';
import GameOverScreen from './src/screens/GameOverScreen';
import {useFonts} from "expo-font"
export default function App() {
  const [userValue, setUserValue] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds,setGuessRounds] = useState(0);
  
  const pickedValueHandler = (pickedValue) => {
    setUserValue(pickedValue)
    setGameIsOver(false);
  }

  const gameOverHandler = (noOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(noOfRounds);
  }

  const startNewGameHandler = () => {
    setUserValue(null);
    setGuessRounds(0);

  }

  let screen = <StartGameScreen handlePickedValue={pickedValueHandler} />
  
  if (userValue) {
    screen = <GameScreen userNumber={userValue} onGameOver={ gameOverHandler} />
   
  }

  if (gameIsOver && userValue) {
    screen=<GameOverScreen userNumber={userValue} roundsNUmber={guessRounds} onStartNewGame={startNewGameHandler} />
  }


  return (
    <>
      <StatusBar style='light'/>
      <LinearGradient
        colors={[Colors.primary700, Colors.primaryYellow]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./src/assets/dices.jpg")}
          resizeMode="cover"
          style={styles.imgBackground}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  imgBackground: {
    flex:1
  }
});
