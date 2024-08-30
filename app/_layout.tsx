import { Stack } from 'expo-router'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import { useColorScheme } from '@/hooks/useColorScheme'
import { useState } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import axios from 'axios'

export default function RootLayout() {
  const colorScheme = useColorScheme()

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  // 인증 확인
  const [auth, setAuth] = useState(false)

  // Flask 로 만든 로컬 서버에 접속해서 User 확인하고 로그인 가능하게 하는 Function
  const authentication = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/users')
      let i = 0
      for (i; i < response.data.user.length; i++) {
        if (
          id === response.data.user[i].userID &&
          pw === response.data.user[i].password
        ) {
          setAuth(true)
          alert(`Wellcome ${response.data.user[i].name}`)
          break
        }
      }
      if (i === response.data.user.length) {
        alert(`retry plz`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DarkTheme}>
      {auth ? (
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
            getId={({ params }) => params?.id}
          />
        </Stack>
      ) : (
        <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding' })}>
          <View style={styles.contianer}>
            <Text style={[styles.txt, { fontSize: 30 }]}>LIKE U</Text>
            <View style={styles.input_view}>
              <FontAwesome
                name="user"
                color={'white'}
                size={25}
                style={{ margin: 10 }}
              />
              <TextInput
                style={styles.input_txt}
                value={id}
                placeholder="ID"
                onChangeText={e => {
                  setId(e)
                }}
                keyboardType="email-address"
                selectionColor={'white'}
              />
              <TouchableOpacity
                onPress={() => {
                  setId('')
                }}
                style={{ margin: 10 }}
              >
                <FontAwesome name="times-circle" color={'white'} size={20} />
              </TouchableOpacity>
            </View>
            <View style={styles.input_view}>
              <FontAwesome
                name="lock"
                color={'white'}
                size={25}
                style={{ margin: 10 }}
              />
              <TextInput
                style={styles.input_txt}
                value={pw}
                placeholder="Password"
                onChangeText={e => {
                  setPw(e)
                }}
                secureTextEntry={true}
                selectionColor={'white'}
              />
              <TouchableOpacity
                onPress={() => {
                  setPw('')
                }}
                style={{ margin: 10 }}
              >
                <FontAwesome name="times-circle" color={'white'} size={20} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.login_btn}
              onPress={() => {
                Keyboard.dismiss()
                authentication()
              }}
            >
              <Text style={[styles.txt, { fontWeight: 600 }]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.login_btn,
                { backgroundColor: 'white', flexDirection: 'row' },
              ]}
              onPress={() => {
                Keyboard.dismiss()
              }}
            >
              <Text style={{ fontSize: 20, color: '#4285F4', fontWeight: 600 }}>
                G
              </Text>
              <Text style={{ fontSize: 20, color: '#DB4437', fontWeight: 600 }}>
                o
              </Text>
              <Text style={{ fontSize: 20, color: '#F4B400', fontWeight: 600 }}>
                o
              </Text>
              <Text style={{ fontSize: 20, color: '#4285F4', fontWeight: 600 }}>
                g
              </Text>
              <Text style={{ fontSize: 20, color: '#0F9D58', fontWeight: 600 }}>
                l
              </Text>
              <Text style={{ fontSize: 20, color: '#DB4437', fontWeight: 600 }}>
                e
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    color: 'white',
    fontSize: 20,
  },

  login_btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F88600',
    width: 280,
    height: 40,
    margin: 10,
    borderRadius: 10,
  },

  input_txt: {
    width: 200,
    height: 50,
    color: 'white',
    margin: 10,
    fontSize: 17,
  },

  input_view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 10,
    margin: 10,
  },
})
