import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React, { useRef, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

import {
  CameraView,
  CameraType,
  useCameraPermissions,
  CameraMode,
} from 'expo-camera'

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back')
  const [permission, requestPermission] = useCameraPermissions()
  const cameraRef = useRef(null)

  const [recode, setRecode] = useState(false)

  if (!permission) {
    return <View></View>
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'))
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  const toggleCameraRecode = async () => {
    if (cameraRef) {
      if (!recode) {
        setRecode(true)
        console.log(recode)
        try {
          const data = await cameraRef.current.recordAsync()
          console.log(data)
        } catch (e) {
          console.log(e)
        }
      } else {
        setRecode(false)
        console.log(recode)
        try {
          const data = await cameraRef.current.stopRecording()
          console.log(data)
        } catch (e) {
          console.log(e)
        }
      }
    }
    // if (cameraRef) {
    //   try {
    //     const data = await cameraRef.current.recordAsync()
    //     console.log(data)
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  }

  const openCamera = () => {
    return (
      <CameraView
        style={styles.camera}
        facing={facing}
        mode="video"
        ref={cameraRef}
      >
        <View
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 30,
          }}
        >
          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginTop: 80,
            }}
          >
            <TouchableOpacity
              style={{
                width: 45,
                height: 45,
                borderWidth: 3,
                borderColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
              }}
              onPress={toggleCameraFacing}
            >
              <FontAwesome name="undo" size={30} color={'white'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                width: 60,
                height: 60,
                borderWidth: 3,
                borderColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
              }}
              onPress={toggleCameraRecode}
            >
              <FontAwesome name="circle" size={45} color={'red'} />
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    )
  }

  return (
    <View style={styles.container}>
      {/* <Text style={{ color: 'white' }}>CameraScreen</Text>
      <View style={styles.preview}>
        <Text>Preview Vedio</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            openCamera()
            console.log('done')
          }}
        >
          <FontAwesome name="video-camera" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome name="photo" size={30} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.btn, { width: 220 }]}>
        <FontAwesome name="upload" size={30} />
      </TouchableOpacity> */}
      {openCamera()}
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

  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    width: '100%',
    height: '100%',
  },
})
