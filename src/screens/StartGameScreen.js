import React from 'react'
import {TextInput,Text, View, StyleSheet} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = ({ handlePickedValue }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
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

  return (
    <View style={style.inputContainer}>
      <TextInput style={style.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
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
    </View>
  );

}

export default StartGameScreen;


const style = StyleSheet.create({
  inputContainer: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#3b021f",
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
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
