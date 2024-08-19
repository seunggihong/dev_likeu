import { StyleSheet, Text, View, ColorValue } from 'react-native'
import React from 'react'

type HeatMapProps = {
  color: ColorValue
  count: number
  data: string
}

const commit_data = [
  { date: '2024-08-01', commit_count: 0 },
  { date: '2024-08-02', commit_count: 1 },
  { date: '2024-08-03', commit_count: 1 },
  { date: '2024-08-04', commit_count: 1 },
  { date: '2024-08-05', commit_count: 0 },
  { date: '2024-08-06', commit_count: 2 },
  { date: '2024-08-07', commit_count: 1 },
  { date: '2024-08-08', commit_count: 2 },
  { date: '2024-08-09', commit_count: 0 },
  { date: '2024-08-10', commit_count: 0 },
  { date: '2024-08-11', commit_count: 1 },
  { date: '2024-08-12', commit_count: 0 },
  { date: '2024-08-13', commit_count: 0 },
  { date: '2024-08-14', commit_count: 1 },
  { date: '2024-08-15', commit_count: 1 },
  { date: '2024-08-16', commit_count: 2 },
  { date: '2024-08-17', commit_count: 0 },
  { date: '2024-08-18', commit_count: 1 },
  { date: '2024-08-19', commit_count: 1 },
  { date: '2024-08-20', commit_count: 0 },
  { date: '2024-08-21', commit_count: 2 },
  { date: '2024-08-22', commit_count: 2 },
  { date: '2024-08-23', commit_count: 1 },
  { date: '2024-08-24', commit_count: 0 },
  { date: '2024-08-25', commit_count: 1 },
  { date: '2024-08-26', commit_count: 0 },
  { date: '2024-08-27', commit_count: 1 },
  { date: '2024-08-28', commit_count: 1 },
  { date: '2024-08-29', commit_count: 0 },
  { date: '2024-08-30', commit_count: 1 },
]

function HeatMap({ color, count, data }: HeatMapProps) {
  const config = [
    {
      backgroundColor: color,
      width: 15,
      height: 15,
      margin: 1,
      opacity: 0.1,
      borderRadius: 30,
    },
    {
      backgroundColor: color,
      width: 15,
      height: 15,
      margin: 1,
      opacity: 0.5,
      borderRadius: 30,
    },
    {
      backgroundColor: color,
      width: 15,
      height: 15,
      margin: 1,
      opacity: 1,
      borderRadius: 30,
    },
  ]

  const createRow = () => {
    for (let index = 0; index < 10; index++) {
      return <View style={config[commit_data[index].commit_count]} />
    }
  }

  return (
    <View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        {createRow()}
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <View style={config[0]} />
        <View style={config[1]} />
        <View style={config[0]} />
        <View style={config[0]} />
        <View style={config[1]} />
        <View style={config[2]} />
        <View style={config[1]} />
        <View style={config[1]} />
        <View style={config[2]} />
        <View style={config[2]} />
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <View style={config[0]} />
        <View style={config[1]} />
        <View style={config[2]} />
        <View style={config[0]} />
        <View style={config[1]} />
        <View style={config[0]} />
        <View style={config[0]} />
        <View style={config[1]} />
        <View style={config[2]} />
        <View style={config[1]} />
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <View style={config[1]} />
        <View style={config[1]} />
        <View style={config[2]} />
        <View style={config[0]} />
        <View style={config[1]} />
        <View style={config[1]} />
        <View style={config[2]} />
        <View style={config[1]} />
        <View style={config[1]} />
        <View style={config[2]} />
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <View style={config[0]} />
        <View style={config[1]} />
        <View style={config[2]} />
        <View style={config[0]} />
        <View style={config[1]} />
        <View style={config[0]} />
        <View style={config[0]} />
        <View style={config[1]} />
        <View style={config[2]} />
        <View style={config[1]} />
      </View>
    </View>
  )
}

export default function CreateHeatmapViewer() {
  return (
    <View style={styles.container}>
      <HeatMap color="#F88600" count={100} data="" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'gray',
    width: '90%',
    height: 220,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
