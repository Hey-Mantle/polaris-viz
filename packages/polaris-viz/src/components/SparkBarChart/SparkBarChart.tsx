import {
  DEFAULT_CHART_PROPS,
  ChartState,
  usePolarisVizContext,
} from '@shopify/polaris-viz-core';
import type {
  Dimensions,
  ChartProps,
  TargetLine,
} from '@shopify/polaris-viz-core';

import {ChartContainer} from '../ChartContainer';
import {ChartSkeleton} from '../';

import {Chart} from './Chart';

export type SparkBarChartProps = {
  targetLine?: TargetLine;
  accessibilityLabel?: string;
  dimensions?: Dimensions;
} & ChartProps;

export function SparkBarChart(props: SparkBarChartProps) {
  const {defaultTheme} = usePolarisVizContext();

  const {
    data,
    accessibilityLabel,
    isAnimated,
    onError,
    targetLine,
    theme = defaultTheme,
    state,
    errorText,
  } = {
    ...DEFAULT_CHART_PROPS,
    ...props,
  };
  return (
    <ChartContainer
      data={data}
      theme={theme}
      sparkChart
      isAnimated={isAnimated}
      onError={onError}
    >
      {state !== ChartState.Success ? (
        <ChartSkeleton
          type="Spark"
          state={state}
          errorText={errorText}
          theme={theme}
        />
      ) : (
        <Chart
          data={data}
          targetLine={targetLine}
          accessibilityLabel={accessibilityLabel}
          theme={theme}
        />
      )}
    </ChartContainer>
  );
}
