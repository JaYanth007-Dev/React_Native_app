import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const PrimaryButton = ({ children }) => {
  
  function handleonPress() {
    console.log("Pressed")
  }
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [style.buttonInnerContainer,style.pressed] : style.buttonInnerContainer
        }
        onPress={handleonPress}
        android_ripple={{ color: "#8fdc1ca4" }}
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
    backgroundColor: "#72063c",
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