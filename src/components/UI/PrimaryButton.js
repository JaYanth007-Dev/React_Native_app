import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'
const PrimaryButton = ({ children ,onPress}) => {

  return (
    <View style={style.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [style.buttonInnerContainer,style.pressed] : style.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600}}
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}



export default PrimaryButton;

const style = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow:'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity:0.75
  }
});