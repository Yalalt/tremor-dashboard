"use client";

import { Grid } from "@tremor/react";
import KpiCard, { Kpi } from "./kpiCard"

const kpiData: Kpi[] = [
  {
    title: "Sales",
    metric: "$ 12,699",
    progress: 15.9,
    target: "$ 80,000",
    delta: "13.2%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Profit",
    metric: "$ 45,564",
    progress: 36.5,
    target: "$ 125,000",
    delta: "23.9%",
    deltaType: "increase",
  },
  {
    title: "Customers",
    metric: "1,072",
    progress: 53.6,
    target: "2,000",
    delta: "10.1%",
    deltaType: "moderateDecrease",
  },
];

export default function KpiCardGrid() {
  return (
    <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
      {kpiData.map((item) => (
        <KpiCard key={item.title} item={item} />
      ))}
    </Grid>
  );
}