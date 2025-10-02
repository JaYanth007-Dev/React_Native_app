import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'

const GameScreen = () => {
  return (
    <View style={style.screen}>
      <Text>GameScreen</Text>
    </View>
  );
}

export default GameScreen

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding:12
    }
})