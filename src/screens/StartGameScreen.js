import React, { useState} from 'react'
import {TextInput, View, StyleSheet, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView} from 'react-native'
import PrimaryButton from '../components/UI/PrimaryButton'
import Colors from '../constants/Colors';
import Title from '../components/UI/Title';
import Card from '../components/UI/Card';
import InstructionText from '../components/UI/InstructionText';

const StartGameScreen = ({ handlePickedValue }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();
  const handleInput = (enteredvalue) => {
    setEnteredNumber(enteredvalue);
  };
  const handleReset = () => {
    setEnteredNumber("");
  };
  const handleSubmit = () => {
    const value = parseInt(enteredNumber);
    if (isNaN(value) || value <= 0 || value > 99) {
      Alert.alert(
        "Invalid Input",
        "Enter the values within the range of 1 to 99",
        [{ text: "Okay", style: "destructive", onPress: handleReset }]
      );
      return;
    }
      handlePickedValue(value);
  };

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={style.screen}>
      <KeyboardAvoidingView style={style.screen} behavior="position">
        <View style={[style.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={style.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              value={enteredNumber}
              onChangeText={handleInput}
              autoCorrect={false}
            />

            <View style={style.buttonsContainer}>
              <View style={style.buttonContainer}>
                <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
              </View>
              <View style={style.buttonContainer}>
                <PrimaryButton onPress={handleSubmit}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );

}

export default StartGameScreen;


const style = StyleSheet.create({
  rootContainer: {
    flex: 2,
    alignItems:"center"
  },
  screen: {
    flex:1
  },
 
  numberInput: {
    height: 70,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.primaryYellow,
    borderBottomWidth: 2,
    color: Colors.primaryYellow,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
