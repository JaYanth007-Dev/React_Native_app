import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors';

const GuessLogItem = ({roundNumber,guess}) => {
  return (
    <View style={style.listItems}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const style = StyleSheet.create({
    listItems: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.primaryYellow,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3,
        shadowOffset:{width:0,height:0}
        
    }
})