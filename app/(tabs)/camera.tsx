import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>CameraScreen</Text>
      <View style={styles.preview}>
        <Text>Preview Vedio</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome name="video-camera" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome name="photo" size={30} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.btn, { width: 220 }]}>
        <FontAwesome name="upload" size={30} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  btn: {
    width: 100,
    height: 50,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
  },

  preview: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10,
  },
})
