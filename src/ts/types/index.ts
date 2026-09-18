/**
 * TypeScript Type Definitions for Vanilla Web Showcase
 */

export type ThemeMode = 'dark' | 'light';

export interface CounterState {
  count: number;
  min: number;
  max: number;
  step: number;
  history: number[];
}

export interface FeatureItem {
  title: string;
  category: string;
  description: string;
  badge: string;
  iconSvg: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}
