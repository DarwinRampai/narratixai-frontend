import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// This would normally be fetched from the API
const generateMockData = (trend: 'upward' | 'downward' | 'stable', days: number) => {
  const data = [];
  let value = trend === 'upward' ? 30 : trend === 'downward' ? 80 : 50;
  
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - days + i + 1);
    
    const randomFactor = Math.random() * 10 - 5;
    
    if (trend === 'upward') {
      value = Math.min(95, value + (Math.random() * 5) + 1 + randomFactor);
    } else if (trend === 'downward') {
      value = Math.max(15, value - (Math.random() * 5) - 1 + randomFactor);
    } else {
      value = Math.max(15, Math.min(85, value + randomFactor));
    }
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: Math.round(value),
    });
  }
  
  return data;
};

export default function PerformanceForecast() {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'quarter'>('week');
  
  // Generate data based on the selected timeframe
  const days = timeframe === 'week' ? 7 : timeframe === 'month' ? 30 : 90;
  const performanceData = generateMockData('upward', days);
  
  // Add forecast data (extend the trend)
  const forecastDays = timeframe === 'week' ? 3 : timeframe === 'month' ? 10 : 30;
  const allData = [...performanceData];
  
  const lastValue = performanceData[performanceData.length - 1].value;
  
  for (let i = 1; i <= forecastDays; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    
    // Forecast algorithm would be more sophisticated in a real app
    const forecastValue = Math.min(
      100, 
      lastValue + Math.round(Math.random() * 4) + (i * 0.5)
    );
    
    allData.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: Math.round(forecastValue),
      forecast: true
    });
  }
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Performance Forecast</CardTitle>
            <CardDescription>
              Engagement predictions based on AI analysis
            </CardDescription>
          </div>
          <Tabs defaultValue="week" value={timeframe} onValueChange={(value) => setTimeframe(value as any)}>
            <TabsList>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="quarter">Quarter</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={allData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.15} />
              <XAxis 
                dataKey="date" 
                tickLine={false}
                axisLine={false}
                minTickGap={15}
                tickMargin={8}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 100]}
                tickMargin={8}
              />
              <Tooltip 
                formatter={(value: number) => [`${value}% Engagement`, 'Performance']}
                labelFormatter={(label) => `Date: ${label}`}
                contentStyle={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
                itemStyle={{ color: '#ffffff' }}
                labelStyle={{ color: '#94a3b8', marginBottom: '8px' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#4f46e5" 
                fillOpacity={1}
                fill="url(#performanceGradient)" 
                strokeWidth={2}
                connectNulls
                activeDot={{ r: 8 }}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
            <span>Historical data</span>
            <div className="h-3 w-3 rounded-full bg-green-500 ml-4"></div>
            <span>AI forecast</span>
          </div>
          <Button variant="outline" size="sm">
            View Full Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}