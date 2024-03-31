export function buildOptions(categories?: string[]) {
  return {
    chart: {
      id: 'simple-bar',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: '#ffffff',
        },
      },
      categories,
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: (value: number) => Math.round(value).toString(),
      },
    },
  };
}
