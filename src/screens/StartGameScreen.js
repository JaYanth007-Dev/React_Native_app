import React from 'react'
import {TextInput,Text, View, StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
    return (
      <View style={style.inputContainer}>
            <TextInput style={style.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
            />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    );

}

export default StartGameScreen;


const style = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4,
  },
  numberInput: {
    height: 70,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
});