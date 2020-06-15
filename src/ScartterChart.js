import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js'
import styled from 'styled-components'

import { scartterOneData } from './chartData'

const Container = styled.canvas`
  max-width: 700px;
  max-height: 700px;
`

const App = () => {
  const chartRef = useRef()

  const loadChart = () => {
    // eslint-disable-next-line no-new
    new Chart(chartRef.current, {
      type: 'scatter',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'React Divisio chart',
            pointBackgroundColor: '#d32f2f',
            borderColor: '#d32f2f',
            pointRadius: 5,
            data: scartterOneData,
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: false,
        },
        steppedLine: true,
        legend: {
          display: true,
          labels: {
            fontColor: 'rgb(255, 99, 132)',
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                borderDash: [5],
                lineWidth: 2,
                tickMarkLength: 2,
              },
              type: 'linear',
              position: 'bottom',
              scaleLabel: {},
              ticks: {
                max: 18,
                min: 0,
                stepSize: 3,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                max: 150,
                min: 0,
                stepSize: 50,
              },
            },
          ],
        },
      },
    })
  }

  useEffect(() => {
    loadChart()
  }, [])

  return <Container ref={chartRef} />
}

export default App
