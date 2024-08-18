import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native'
import React, { useEffect, useState } from 'react'

import USERDATA from '@/data/user.json'

export default function ProfileScreen() {
  const [userName, setUserName] = useState<String>()
  const [userImage, setUserImage] = useState<String>()

  // Need API Communication function
  const loadUserData = () => {
    setUserName(USERDATA['name'])
    setUserImage(USERDATA['img'])
  }

  useEffect(() => {
    loadUserData()
  }, [userName, userImage])

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
        <View style={styles.profile_view}>
          <TouchableOpacity style={styles.profile_img}>
            <Image
              source={
                userImage
                  ? { uri: String(userImage) }
                  : require('@/assets/images/icon.png')
              }
              style={styles.profile_img}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              margin: 20,
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            {userName ? userName : 'NONE'}
          </Text>
        </View>
        <View style={styles.hitmap_view}>
          <Text>hitmap</Text>
        </View>
        <View style={styles.option_view}>
          <TouchableOpacity style={styles.option_btn}>
            <View>
              <Text>Option1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option_btn}>
            <View>
              <Text>Option2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option_btn}>
            <View>
              <Text>Option3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option_btn}>
            <View>
              <Text>Option4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option_btn}>
            <View>
              <Text>Option5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option_btn}>
            <View>
              <Text>Option6</Text>
            </View>
          </TouchableOpacity>
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
    marginTop: 90,
  },

  profile_view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  profile_img: {
    width: 150,
    height: 150,
    backgroundColor: 'white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 100,
  },

  hitmap_view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: 220,
    backgroundColor: 'white',
  },

  option_view: {
    marginTop: 20,
    width: '100%',
    marginBottom: 80,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  option_btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: 50,
    backgroundColor: 'white',
    marginBottom: 10,

    borderTopWidth: 2,
    borderTopColor: 'gray',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
})
