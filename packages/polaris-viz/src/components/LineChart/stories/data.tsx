import type {Story} from '@storybook/react';
import type {RenderTooltipContentData} from 'types';

import type {LineChartProps} from '../LineChart';
import {LineChart} from '../LineChart';
import {
  formatLinearXAxisLabel,
  formatLinearYAxisLabel,
} from '../../../storybook/utilities';

export const TOOLTIP_CONTENT = {
  empty: undefined,
  Custom: ({data}: RenderTooltipContentData) => {
    return (
      <div
        style={{
          background: 'black',
          color: 'white',
          padding: '10px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 12,
        }}
      >
        {data[0].data.map(({key, value}) => (
          // eslint-disable-next-line @shopify/jsx-no-hardcoded-content
          <div key={key}>{`${key}: ${formatLinearYAxisLabel(
            Number(value!),
          )}`}</div>
        ))}
      </div>
    );
  },
};

export const Template: Story<LineChartProps> = (args: LineChartProps) => {
  return <LineChart {...args} />;
};

export const DEFAULT_PROPS: Partial<LineChartProps> = {
  xAxisOptions: {
    labelFormatter: formatLinearXAxisLabel,
  },
  yAxisOptions: {
    labelFormatter: formatLinearYAxisLabel,
    useFittedDomain: true,
    shouldRoundUp: false,
  },
  tooltipOptions: {
    titleFormatter: (value) => new Date(value!).toLocaleDateString(),
    valueFormatter: formatLinearYAxisLabel,
  },
};

export const DEFAULT_DATA = [
  {
    name: 'Apr 1 – Apr 14, 2020',
    data: [
      {value: 333, key: '2020-04-01T12:00:00'},
      {value: 797, key: '2020-04-02T12:00:00'},
      {value: 234, key: '2020-04-03T12:00:00'},
      {value: 534, key: '2020-04-04T12:00:00'},
      {value: 232, key: '2020-04-05T12:00:00'},
      {value: 259, key: '2020-04-06T12:00:00'},
      {value: 239, key: '2020-04-07T12:00:00'},
      {value: 708, key: '2020-04-08T12:00:00'},
      {value: 234, key: '2020-04-09T12:00:00'},
      {value: 645, key: '2020-04-10T12:00:00'},
      {value: 543, key: '2020-04-11T12:00:00'},
      {value: 325, key: '2020-04-12T12:00:00'},
      {value: 849, key: '2020-04-13T12:00:00'},
      {value: 429, key: '2020-04-14T12:00:00'},
    ].map(({value, key}) => ({value: value * 400, key})),
  },
  {
    name: 'Previous month',
    data: [
      {value: 709, key: '2020-03-02T12:00:00'},
      {value: 238, key: '2020-03-01T12:00:00'},
      {value: 290, key: '2020-03-03T12:00:00'},
      {value: 400, key: '2020-03-04T12:00:00'},
      {value: 237, key: '2020-03-05T12:00:00'},
      {value: 580, key: '2020-03-07T12:00:00'},
      {value: 272, key: '2020-03-06T12:00:00'},
      {value: 320, key: '2020-03-08T12:00:00'},
      {value: 390, key: '2020-03-09T12:00:00'},
      {value: 433, key: '2020-03-10T12:00:00'},
      {value: 710, key: '2020-03-11T12:00:00'},
      {value: 791, key: '2020-03-12T12:00:00'},
      {value: 623, key: '2020-03-13T12:00:00'},
      {value: 245, key: '2020-03-14T12:00:00'},
    ].map(({value, key}) => ({value: value * 500, key})),
    color: 'red',
    isComparison: true,
  },
];
