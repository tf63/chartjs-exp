import React from 'react'
import { LineChart } from '@/components/LineChart'
import { VerticalBarChart } from '@/components/VerticalBarChart'
import { HorizontalBarChart } from '@/components/HorizontalBarChart'
import { StackedBarChart } from '@/components/StackedBarChart'
import { GroupedBarChart } from '@/components/GroupedBarChart'
import { AreaChart } from '@/components/AreaChart'
import { MultiaxisLineChart } from '@/components/MultiaxisLineChart'
import { PieChart } from '@/components/PieChart'
import { DoughnutChart } from '@/components/DoughnutChart'
import { PolarAreaChart } from '@/components/PolarAreaChart'
import { RadarChart } from '@/components/RadarChart'
import { ScatterChart } from '@/components/ScatterChart'
import { BubbleChart } from '@/components/BubbleChart'
import { MultitypeChart } from '@/components/MultitypeChart'
import { ChartEvents } from '@/components/ChartEvents'
import { ChartRef } from '@/components/ChartRef'
import { GradientChart } from '@/components/GradientChart'

export default function Index() {
    return (
        <>
            <p>Home</p>
            <VerticalBarChart />
            <HorizontalBarChart />
            <StackedBarChart />
            <GroupedBarChart />
            <AreaChart />
            <LineChart />
            <MultiaxisLineChart />
            <PieChart />
            <DoughnutChart />
            <PolarAreaChart />
            <RadarChart />
            <ScatterChart />
            <BubbleChart />
            <MultitypeChart />
            <ChartEvents />
            <ChartRef />
            <GradientChart />
        </>
    )
}
