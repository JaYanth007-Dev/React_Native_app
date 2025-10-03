import React from 'react'
import { StyleSheet, View,Dimensions } from 'react-native'
import Colors from '../../constants/Colors'

const Card = ({children}) => {
  return (
      <View style={style.card}>{ children}</View>
  )
}

export default Card

const deviceWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  card: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
  },
});