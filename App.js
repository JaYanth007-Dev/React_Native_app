import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground} from 'react-native';
import StartGameScreen from './src/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './src/screens/GameScreen';
export default function App() {
  const [userValue, setUserValue] = useState();
  
  const pickedValueHandler = (pickedValue) => {
    setUserValue(pickedValue)
  }

  let screen = <StartGameScreen handlePickedValue={pickedValueHandler} />
  
  if (userValue) {
    screen = <GameScreen />
    console.log('picked',userValue)
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground source={require("./src/assets/dices.jpg")}
        resizeMode="cover"
        style={styles.imgBackground}
        imageStyle={styles.backgroundImage}
      
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
  backgroundImage: {
    opacity: 0.15,
  },
  imgBackground: {
    flex:1
  }
});
