import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/Colors'

const Card = ({children}) => {
  return (
      <View style={style.card}>{ children}</View>
  )
}

export default Card


const style = StyleSheet.create({
  card: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
  },
});