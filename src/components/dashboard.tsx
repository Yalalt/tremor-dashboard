'use client';

import { Card, Grid, Tab, TabGroup, TabList, TabPanel, TabPanels, Text, Title } from '@tremor/react';
import KpiCardGrid from './kpiCardGrid';
import ChartView from './chartView';
import SalesPeopleTable from './salesPeopleTable';
import GraphChart from './graphChart';
import DonutSales from './donutSales';

export default function Dashboard() {
  return (
    <div className='p-12'>
      <Title>Tremor Dashboard</Title>
      <Text className='text-semibold'><span className='text-lg font-bold text-teal-500'>Made in next js using Tremor, headlessui react.</span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className='mt-6'>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
          <Tab>Revenue</Tab>
          <Tab>Donut Sales</Tab>
        </TabList>
        <TabPanels>
          {/* Overview */}
          <TabPanel>
            {/* CHART VIEW 3 BOX */}
            <KpiCardGrid />
            <div className='mt-6'>
              <Card>
                <ChartView />
              </Card>
            </div>
          </TabPanel>
          {/* DETAILS */}
          <TabPanel>
            <div className='mt-6'>
              <Card>
                {/* TABLE */}
                <SalesPeopleTable />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className='mt-6'>
              <GraphChart />
            </div>
          </TabPanel>
          <TabPanel>
            <div className='mt-6'>
              <DonutSales />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
