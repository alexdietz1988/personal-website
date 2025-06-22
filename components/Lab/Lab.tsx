import { Pie, PieChart } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'A simple pie chart';

const chartData = [
  { category: 'work', amount: 1, fill: 'orange' },
  {
    category: 'relationships',
    amount: 1,
    fill: 'red',
  },
  {
    category: 'health',
    amount: 1,
    fill: 'green',
  },
];

const chartConfig = {
  visitors: {
    label: 'Category',
  },
  work: {
    label: 'Work',
  },
  relationships: {
    label: 'Relationships',
  },
  health: {
    label: 'Health',
  },
} satisfies ChartConfig;

const ChartPieSimple = () => {
  return (
    <ChartContainer config={chartConfig}>
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Pie data={chartData} dataKey="amount" nameKey="category" />
      </PieChart>
    </ChartContainer>
  );
};

const Lab = () => <ChartPieSimple />;

export default Lab;
