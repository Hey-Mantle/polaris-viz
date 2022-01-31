import type {StackedBarGapDirections} from '../types';
import {STACKED_BAR_GAP} from '../constants';

interface PushGapToArrayProps {
  gaps: StackedBarGapDirections;
  index: number;
  direction: 'positive' | 'negative';
  firstGapValue: number;
}

export function pushGapToArray({
  gaps,
  index,
  direction,
  firstGapValue,
}: PushGapToArrayProps) {
  if (!gaps[direction][gaps[direction].length - 1]) {
    gaps[direction].push({index, gap: firstGapValue});
    return;
  }
  const {gap} = gaps[direction][gaps[direction].length - 1];
  gaps[direction].push({index, gap: gap + STACKED_BAR_GAP});
}
