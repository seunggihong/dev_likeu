import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import CreateAdViewer from '@/components/CreateAdViewer'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ color: 'white' }}>HomeScreen : Dev Main Branch</Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            width: '100%',
            height: 120,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <CreateAdViewer />
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            width: '100%',
            height: 300,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Text>Chart</Text>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            width: '100%',
            height: 300,
            marginTop: 20,
            marginBottom: 100,
          }}
        >
          <Text>Popular Player</Text>
        </View>
      </ScrollView>
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
    marginTop: 60,
  },

  text: { textAlign: 'center' },
})
