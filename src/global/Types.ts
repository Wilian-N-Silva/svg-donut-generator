export interface Gradient {
  offset?: number;
  stopColor: string;
}

export interface DonutProps {
  percentage: number;
  strokeWidth: number;
  gradientRotation: number;
  showCode: boolean;
  gradients: Gradient[];
}
