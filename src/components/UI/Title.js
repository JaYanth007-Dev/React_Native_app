import React from 'react'
import { StyleSheet,Text,Platform } from 'react-native'

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
    borderWidth: Platform.select({iso:0,android:2}),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width:300
  },
});