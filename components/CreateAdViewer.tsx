import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

import { SwiperFlatList } from 'react-native-swiper-flatlist'
const { width } = Dimensions.get('window')

import axios from 'axios'

export default function CreateAdViewer() {
  const [ad, setAd] = useState<any[]>([])
  const [load, setLoad] = useState(false)

  // Flask 로 만든 로컬 서버에 접속해서 Ads 확인하고 카드를 만들기 위한 데이터 추출.
  const load_ads = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/ads')
      for (let i = 0; i < response.data.length; i++) {
        setAd(prev => [
          ...prev,
          [response.data[i].title, response.data[i].color],
        ])
      }
      setLoad(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!load) {
      load_ads()
    }
  }, [])

  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={3}
      autoplayLoop
      showPagination
      paginationStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      paginationStyleItemActive={{
        width: 10,
        height: 3,
      }}
      paginationStyleItemInactive={{
        width: 10,
        height: 3,
      }}
      data={ad}
      renderItem={({ item }) => (
        <View style={[styles.child, { backgroundColor: item[1] }]}>
          <Text style={{ fontSize: 30, fontWeight: 700, textAlign: 'center' }}>
            {item[0]}
          </Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  child: { display: 'flex', justifyContent: 'center', width },
})
