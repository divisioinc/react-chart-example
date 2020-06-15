import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js'
import styled from 'styled-components'

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
        labels: ["Label 1", "Label 2", "Label 3"],
        datasets: [{
            label: 'React Divisio chart',
            pointBackgroundColor: '#d32f2f',
            borderColor: '#d32f2f',
            pointRadius: 5,
            data: [
              {
                x: 1,
                y: 49
              },
              {
                x: 1,
                y: 51
              },
              {
                x: 1,
                y: 54
              },
              {
                x: 1,
                y: 56
              },
              {
                x: 1,
                y: 58
              },
              {
                x: 1,
                y: 60
              },
              {
                x: 1,
                y: 62
              },
              {
                x: 1,
                y: 64
              },
              {
                x: 1,
                y: 71
              },
              {
                x: 1,
                y: 80
              },




              {
                x: 2,
                y: 49
              },
              {
                x: 2,
                y: 51
              },
              {
                x: 2,
                y: 54
              },
              {
                x: 2,
                y: 56
              },
              {
                x: 2,
                y: 58
              },
              {
                x: 2,
                y: 60
              },
              {
                x: 2,
                y: 62
              },
              {
                x: 2,
                y: 64
              },
              {
                x: 2,
                y: 85
              },

              {
                x: 3,
                y: 49
              },
              {
                x: 3,
                y: 51
              },
              {
                x: 3,
                y: 54
              },
              {
                x: 3,
                y: 56
              },
              {
                x: 3,
                y: 58
              },
              {
                x: 3,
                y: 60
              },
              {
                x: 3,
                y: 62
              },
              {
                x: 3,
                y: 64
              },
              {
                x: 3,
                y: 71
              },
              {
                x: 3,
                y: 74
              },


              {
                x: 3,
                y: 49
              },
              {
                x: 3,
                y: 51
              },
              {
                x: 3,
                y: 54
              },
              {
                x: 3,
                y: 56
              },
              {
                x: 3,
                y: 58
              },
              {
                x: 3,
                y: 60
              },
              {
                x: 3,
                y: 62
              },
              {
                x: 3,
                y: 64
              },
              {
                x: 3,
                y: 71
              },
              {
                x: 3,
                y: 80
              },


              {
                x: 4,
                y: 49
              },
              {
                x: 4,
                y: 51
              },
              {
                x: 4,
                y: 54
              },
              {
                x: 4,
                y: 56
              },
              {
                x: 4,
                y: 58
              },
              {
                x: 4,
                y: 60
              },
              {
                x: 4,
                y: 62
              },
              {
                x: 4,
                y: 64
              },
              {
                x: 4,
                y: 71
              },
              {
                x: 4,
                y: 80
              },
              {
                x: 4,
                y: 82
              },
              {
                x: 4,
                y: 84
              },
              {
                x: 4,
                y: 86
              },
              {
                x: 4,
                y: 88
              },
              {
                x: 4,
                y: 92
              },
              {
                x: 4,
                y: 94
              },
              {
                x: 4,
                y: 100
              },


              {
                x: 5,
                y: 22
              },
              {
                x: 5,
                y: 24
              },
              {
                x: 5,
                y: 26
              },
              {
                x: 5,
                y: 36
              },
              {
                x: 5,
                y: 38
              },
              {
                x: 5,
                y: 42
              },
              {
                x: 5,
                y: 44
              },
              {
                x: 5,
                y: 47
              },
              {
                x: 5,
                y: 50
              },
              {
                x: 5,
                y: 60
              },


              {
                x: 6,
                y: 45
              },
              {
                x: 6,
                y: 51
              },
              {
                x: 6,
                y: 54
              },
              {
                x: 6,
                y: 56
              },
              {
                x: 6,
                y: 58
              },
              {
                x: 6,
                y: 60
              },
              {
                x: 6,
                y: 62
              },
              {
                x: 6,
                y: 64
              },
              {
                x: 6,
                y: 71
              },
              {
                x: 6,
                y: 80
              },


              {
                x: 7,
                y: 80
              },
              {
                x: 7,
                y: 85
              },
              {
                x: 7,
                y: 87
              },
              {
                x: 7,
                y: 89
              },
              {
                x: 7,
                y: 91
              },
              {
                x: 7,
                y: 93
              },
              {
                x: 7,
                y: 95
              },
              {
                x: 7,
                y: 102
              },
              {
                x: 7,
                y: 105
              },
              {
                x: 7,
                y: 107
              },


              {
                x: 8,
                y: 49
              },
              {
                x: 8,
                y: 51
              },
              {
                x: 8,
                y: 54
              },
              {
                x: 8,
                y: 56
              },
              {
                x: 8,
                y: 58
              },
              {
                x: 8,
                y: 60
              },
              {
                x: 8,
                y: 62
              },
              {
                x: 8,
                y: 64
              },
              {
                x: 8,
                y: 71
              },
              {
                x: 8,
                y: 80
              },


              {
                x: 9,
                y: 49
              },
              {
                x: 9,
                y: 51
              },
              {
                x: 9,
                y: 54
              },
              {
                x: 9,
                y: 56
              },
              {
                x: 9,
                y: 58
              },
              {
                x: 9,
                y: 60
              },
              {
                x: 9,
                y: 62
              },
              {
                x: 9,
                y: 64
              },
              {
                x: 9,
                y: 71
              },
              {
                x: 9,
                y: 122
              },


              {
                x: 10,
                y: 49
              },
              {
                x: 10,
                y: 51
              },
              {
                x: 10,
                y: 54
              },
              {
                x: 10,
                y: 56
              },
              {
                x: 10,
                y: 58
              },
              {
                x: 10,
                y: 60
              },
              {
                x: 10,
                y: 62
              },
              {
                x: 10,
                y: 64
              },
              {
                x: 10,
                y: 71
              },
              {
                x: 10,
                y: 80
              },
              {
                x: 12,
                y: 141
              },
            ]
        }]
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
            fontColor: 'rgb(255, 99, 132)'
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              borderDash: [5],
              lineWidth: 2,
              tickMarkLength: 2
            },
            type: 'linear',
            position: 'bottom',
            scaleLabel: {

            },
            ticks: {
              max: 18,
              min: 0,
              stepSize: 3
            }
          }],
          yAxes: [{
            ticks: {
              max: 150,
              min: 0,
              stepSize: 50
            }
          }]
        }
      }
    })
  }

  useEffect(() => {
    loadChart()
  }, [])

  return (
    <Container
      ref={chartRef}
    />
  )
}

export default App
