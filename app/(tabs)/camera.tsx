import { View, Text } from 'react-native'
import React from 'react'

export default function CameraScreen() {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Text style={{ color: 'white' }}>CameraScreen</Text>
    </View>
  )
}
