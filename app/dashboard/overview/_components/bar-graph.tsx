'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
  { date: '2024-04-01', buyOrders: 2220, sellOrders: 1500 },
  { date: '2024-04-02', buyOrders: 970, sellOrders: 1800 },
  { date: '2024-04-03', buyOrders: 1670, sellOrders: 1200 },
  { date: '2024-04-04', buyOrders: 2420, sellOrders: 2600 },
  { date: '2024-04-05', buyOrders: 3730, sellOrders: 2900 },
  { date: '2024-04-06', buyOrders: 3010, sellOrders: 3400 },
  { date: '2024-04-07', buyOrders: 2450, sellOrders: 1800 },
  { date: '2024-04-08', buyOrders: 4090, sellOrders: 3200 },
  { date: '2024-04-09', buyOrders: 590, sellOrders: 1100 },
  { date: '2024-04-10', buyOrders: 2610, sellOrders: 1900 },
  { date: '2024-04-11', buyOrders: 3270, sellOrders: 3500 },
  { date: '2024-04-12', buyOrders: 2920, sellOrders: 2100 },
  { date: '2024-04-13', buyOrders: 3420, sellOrders: 3800 },
  { date: '2024-04-14', buyOrders: 1370, sellOrders: 2200 },
  { date: '2024-04-15', buyOrders: 1200, sellOrders: 1700 },
  { date: '2024-04-16', buyOrders: 1380, sellOrders: 1900 },
  { date: '2024-04-17', buyOrders: 4460, sellOrders: 3600 },
  { date: '2024-04-18', buyOrders: 3640, sellOrders: 4100 },
  { date: '2024-04-19', buyOrders: 2430, sellOrders: 1800 },
  { date: '2024-04-20', buyOrders: 890, sellOrders: 1500 },
  { date: '2024-04-21', buyOrders: 1370, sellOrders: 2000 },
  { date: '2024-04-22', buyOrders: 2240, sellOrders: 1700 },
  { date: '2024-04-23', buyOrders: 1380, sellOrders: 2300 },
  { date: '2024-04-24', buyOrders: 3870, sellOrders: 2900 },
  { date: '2024-04-25', buyOrders: 2150, sellOrders: 2500 },
  { date: '2024-04-26', buyOrders: 750, sellOrders: 1300 },
  { date: '2024-04-27', buyOrders: 3830, sellOrders: 4200 },
  { date: '2024-04-28', buyOrders: 1220, sellOrders: 1800 },
  { date: '2024-04-29', buyOrders: 3150, sellOrders: 2400 },
  { date: '2024-04-30', buyOrders: 4540, sellOrders: 3800 },
  { date: '2024-05-01', buyOrders: 1650, sellOrders: 2200 },
  { date: '2024-05-02', buyOrders: 2930, sellOrders: 3100 },
  { date: '2024-05-03', buyOrders: 2470, sellOrders: 1900 },
  { date: '2024-05-04', buyOrders: 3850, sellOrders: 4200 },
  { date: '2024-05-05', buyOrders: 4810, sellOrders: 3900 },
  { date: '2024-05-06', buyOrders: 4980, sellOrders: 5200 },
  { date: '2024-05-07', buyOrders: 3880, sellOrders: 3000 },
  { date: '2024-05-08', buyOrders: 1490, sellOrders: 2100 },
  { date: '2024-05-09', buyOrders: 2270, sellOrders: 1800 },
  { date: '2024-05-10', buyOrders: 2930, sellOrders: 3300 },
  { date: '2024-05-11', buyOrders: 3350, sellOrders: 2700 },
  { date: '2024-05-12', buyOrders: 1970, sellOrders: 2400 },
  { date: '2024-05-13', buyOrders: 1970, sellOrders: 1600 },
  { date: '2024-05-14', buyOrders: 4480, sellOrders: 4900 },
  { date: '2024-05-15', buyOrders: 4730, sellOrders: 3800 },
  { date: '2024-05-16', buyOrders: 3380, sellOrders: 4000 },
  { date: '2024-05-17', buyOrders: 4990, sellOrders: 4200 },
  { date: '2024-05-18', buyOrders: 3150, sellOrders: 3500 },
  { date: '2024-05-19', buyOrders: 2350, sellOrders: 1800 },
  { date: '2024-05-20', buyOrders: 1770, sellOrders: 2300 },
  { date: '2024-05-21', buyOrders: 820, sellOrders: 1400 },
  { date: '2024-05-22', buyOrders: 810, sellOrders: 1200 },
  { date: '2024-05-23', buyOrders: 2520, sellOrders: 2900 },
  { date: '2024-05-24', buyOrders: 2940, sellOrders: 2200 },
  { date: '2024-05-25', buyOrders: 2010, sellOrders: 2500 },
  { date: '2024-05-26', buyOrders: 2130, sellOrders: 1700 },
  { date: '2024-05-27', buyOrders: 4200, sellOrders: 4600 },
  { date: '2024-05-28', buyOrders: 2330, sellOrders: 1900 },
  { date: '2024-05-29', buyOrders: 780, sellOrders: 1300 },
  { date: '2024-05-30', buyOrders: 3400, sellOrders: 2800 },
  { date: '2024-05-31', buyOrders: 1780, sellOrders: 2300 },
  { date: '2024-06-01', buyOrders: 1780, sellOrders: 2000 },
  { date: '2024-06-02', buyOrders: 4700, sellOrders: 4100 },
  { date: '2024-06-03', buyOrders: 1030, sellOrders: 1600 },
  { date: '2024-06-04', buyOrders: 4390, sellOrders: 3800 },
  { date: '2024-06-05', buyOrders: 880, sellOrders: 1400 },
  { date: '2024-06-06', buyOrders: 2940, sellOrders: 2500 },
  { date: '2024-06-07', buyOrders: 3230, sellOrders: 3700 },
  { date: '2024-06-08', buyOrders: 3850, sellOrders: 3200 },
  { date: '2024-06-09', buyOrders: 4380, sellOrders: 4800 },
  { date: '2024-06-10', buyOrders: 1550, sellOrders: 2000 },
  { date: '2024-06-11', buyOrders: 920, sellOrders: 1500 },
  { date: '2024-06-12', buyOrders: 4920, sellOrders: 4200 },
  { date: '2024-06-13', buyOrders: 810, sellOrders: 1300 },
  { date: '2024-06-14', buyOrders: 4260, sellOrders: 3800 },
  { date: '2024-06-15', buyOrders: 3070, sellOrders: 3500 },
  { date: '2024-06-16', buyOrders: 3710, sellOrders: 3100 },
  { date: '2024-06-17', buyOrders: 4750, sellOrders: 5200 },
  { date: '2024-06-18', buyOrders: 1070, sellOrders: 1700 },
  { date: '2024-06-19', buyOrders: 3410, sellOrders: 2900 },
  { date: '2024-06-20', buyOrders: 4080, sellOrders: 4500 },
  { date: '2024-06-21', buyOrders: 1690, sellOrders: 2100 },
  { date: '2024-06-22', buyOrders: 3170, sellOrders: 2700 },
  { date: '2024-06-23', buyOrders: 4800, sellOrders: 5300 },
  { date: '2024-06-24', buyOrders: 1320, sellOrders: 1800 },
  { date: '2024-06-25', buyOrders: 1410, sellOrders: 1900 },
  { date: '2024-06-26', buyOrders: 4340, sellOrders: 3800 },
  { date: '2024-06-27', buyOrders: 4480, sellOrders: 4900 },
  { date: '2024-06-28', buyOrders: 1490, sellOrders: 2000 },
  { date: '2024-06-29', buyOrders: 1030, sellOrders: 1600 },
  { date: '2024-06-30', buyOrders: 4460, sellOrders: 4000 }
];

const chartConfig = {
  buyOrders: {
    label: 'Buy Orders',
    color: 'hsl(var(--chart-1))'
  },
  sellOrders: {
    label: 'Sell Orders',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('buyOrders');

  const total = React.useMemo(
    () => ({
      buyOrders: chartData.reduce((acc, curr) => acc + curr.buyOrders, 0),
      sellOrders: chartData.reduce((acc, curr) => acc + curr.sellOrders, 0)
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Orders</CardTitle>
          <CardDescription>
            Showing biggest transactions in the last 3 month
          </CardDescription>
        </div>
        <div className="flex">
          {['buyOrders', 'sellOrders'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[chart].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
