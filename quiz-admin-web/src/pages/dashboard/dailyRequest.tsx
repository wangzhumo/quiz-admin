import ReactEchartsCore from 'echarts-for-react/lib/core'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
// import components, all suffixed with Component
import {
  // GridSimpleComponent,
  GridComponent,
  // PolarComponent,
  // RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  // ToolboxComponent,
  TooltipComponent,
  // AxisPointerComponent,
  // BrushComponent,
  TitleComponent
  // TimelineComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  // LegendComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  // DatasetComponent,
} from 'echarts/components'
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
  CanvasRenderer
  // SVGRenderer,
} from 'echarts/renderers'
import type {
  EChartsInstance,
  EChartsOption
} from 'echarts-for-react/src/types'
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Logger } from "@/utils/logger";

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer
])

function ChartComponent() {
  const base = dayjs(new Date(2024, 6, 18));
  const [timeData  ] = useState(() => {
    const date = [];
    for (let i = 1; i <= 20; i++) {
      const nowDate = base.add(i,'day').format(
        "YYYY/MM/DD"
      )
      date.push(nowDate);
    }
    return date;
  })

  const [dataValue] = useState(() => {
    const data = [Math.random() * 300];
    for (let i = 1; i < 20; i++) {
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    return data;
  })

  const ChartClick = () => {}
  const ChartLegendSelectChanged = () => {}
  const EventsDict = {
    click: ChartClick,
    legendselectchanged: ChartLegendSelectChanged
  }
  const onChartReadyCallback = (instance: EChartsInstance) => {}

  // init
  useEffect(() => {
    Logger.d(dataValue)
    Logger.d(timeData)
  }, [])

  const lineOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      position: (pt: any[]) => {
        return [pt[0], '10%']
      },

    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: timeData
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    series: [
      {
        name: 'request times',
        type: 'line',
        symbol: 'none',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 158, 68)'
            },
            {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }
          ])
        },
        data: dataValue
      }
    ]
  } as EChartsOption

  return (
    <div>
      <ReactEchartsCore
        echarts={echarts}
        option={lineOption}
        notMerge={true}
        lazyUpdate={true}
        onChartReady={onChartReadyCallback}
        onEvents={EventsDict}
      />
    </div>
  )
}

export default ChartComponent
