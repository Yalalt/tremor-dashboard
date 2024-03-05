'use client';

import { BadgeDelta, Card, Flex, Metric, ProgressBar, Text, DeltaType } from '@tremor/react';

export type Kpi = {
    title: string;
    metric: string;
    progress: number;
    target: string;
    delta: string;
    deltaType: DeltaType;
  };

// Single KPI card in the demo dashboard with sample inputs
export default function KpiCard({ item }: { item: Kpi }) {
  
    return (
    <Card key={item.title} className='max-w-lg mx-auto'>
      <Flex alignItems='start'>
        <div className='truncate'>
          <Text>{item.title}</Text>
          <Metric className='truncate'>{item.metric}</Metric>
        </div>
        <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
      </Flex>
      <Flex className='mt-4 space-x-2'>
        <Text className='truncate'>{`${item.progress}% (${item.metric})`}</Text>
        <Text className='truncate'>{item.target}</Text>
      </Flex>
      <ProgressBar value={item.progress} className='mt-2' />
    </Card>
  );
}
