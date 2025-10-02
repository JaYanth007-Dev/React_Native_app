import React from 'react'
import { StyleSheet,Text } from 'react-native'
import Colors from '../../constants/Colors'

const Title = ({children}) => {
  return (
   
      <Text style={style.title}>{ children}</Text>
  )
}

export default Title

const style = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 24,
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});