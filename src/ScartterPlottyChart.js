/* global Plotly:true */
import React from 'react'
import createPlotlyComponent from 'react-plotly.js/factory'
import styled from 'styled-components'

import { scartterTwoData } from './chartData'

const Plot = createPlotlyComponent(Plotly)

const Container = styled(Plot)`
  width: 900px;
`

const ScartterPlottyChart = () => (
  <Container
    data={scartterTwoData}
    useResizeHandler
    layout={{
      width: undefined,
      height: undefined,
      font: {
        family: 'Source Sans Pro, sans-serif',
        size: 12,
        color: '#5d5d5d',
      },
      showlegend: false,
      legend: {
        x: 1,
        xanchor: 'right',
        y: 1,
      },
      xaxis: {
        range: [0, 16],
      },
      yaxis: {
        range: [0, 150],
      },
      hovermode: 'closest',
    }}
  />
)

export default ScartterPlottyChart
