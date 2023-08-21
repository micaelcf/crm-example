//@ts-nocheck
import type { ApexOptions } from 'apexcharts';

export const charts: ApexOptions[] = [
	{
		chart: {
			height: '100%',
			maxWidth: '100%',
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			dropShadow: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		tooltip: {
			enabled: true,
			x: {
				show: false
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: '#1C64F2',
				gradientToColors: ['#1C64F2']
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 6
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: 0
			}
		},
		series: [
			{
				name: 'New users',
				data: [6500, 6418, 6456, 6526, 6356, 6456],
				color: '#1A56DB'
			}
		],
		xaxis: {
			categories: [
				'01 February',
				'02 February',
				'03 February',
				'04 February',
				'05 February',
				'06 February',
				'07 February'
			],
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: false
		}
	},
	{
		chart: {
			height: '100%',
			maxWidth: '100%',
			type: 'line',
			fontFamily: 'Inter, sans-serif',
			dropShadow: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		tooltip: {
			enabled: true,
			x: {
				show: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 6,
			curve: 'smooth'
		},
		grid: {
			show: true,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: -26
			}
		},
		series: [
			{
				name: 'Clicks',
				data: [6500, 6418, 6456, 6526, 6356, 6456],
				color: '#1A56DB'
			},
			{
				name: 'CPC',
				data: [6456, 6356, 6526, 6332, 6418, 6500],
				color: '#7E3AF2'
			}
		],
		legend: {
			show: false
		},
		xaxis: {
			categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
			labels: {
				show: true,
				style: {
					fontFamily: 'Inter, sans-serif',
					cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
				}
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: false
		}
	},
	{
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: 'Organic',
				color: '#1A56DB',
				data: [
					{ x: 'Mon', y: 231 },
					{ x: 'Tue', y: 122 },
					{ x: 'Wed', y: 63 },
					{ x: 'Thu', y: 421 },
					{ x: 'Fri', y: 122 },
					{ x: 'Sat', y: 323 },
					{ x: 'Sun', y: 111 }
				]
			},
			{
				name: 'Social media',
				color: '#FDBA8C',
				data: [
					{ x: 'Mon', y: 232 },
					{ x: 'Tue', y: 113 },
					{ x: 'Wed', y: 341 },
					{ x: 'Thu', y: 224 },
					{ x: 'Fri', y: 522 },
					{ x: 'Sat', y: 411 },
					{ x: 'Sun', y: 243 }
				]
			}
		],
		chart: {
			type: 'bar',
			height: '320px',
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '70%',
				borderRadiusApplication: 'end',
				borderRadius: 8
			}
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontFamily: 'Inter, sans-serif'
			}
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1
				}
			}
		},
		stroke: {
			show: true,
			width: 0,
			colors: ['transparent']
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: -14
			}
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
		xaxis: {
			floating: false,
			labels: {
				show: true,
				style: {
					fontFamily: 'Inter, sans-serif',
					cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
				}
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: false
		},
		fill: {
			opacity: 1
		}
	},
	{
		series: [
			{
				name: 'Income',
				color: '#31C48D',
				data: ['1420', '1620', '1820', '1420', '1650', '2120']
			},
			{
				name: 'Expense',
				data: ['788', '810', '866', '788', '1100', '1200'],
				color: '#F05252'
			}
		],
		chart: {
			sparkline: {
				enabled: false
			},
			type: 'bar',
			width: '100%',
			height: 400,
			toolbar: {
				show: false
			}
		},
		fill: {
			opacity: 1
		},
		plotOptions: {
			bar: {
				horizontal: true,
				columnWidth: '100%',
				borderRadiusApplication: 'end',
				borderRadius: 6,
				dataLabels: {
					position: 'top'
				}
			}
		},
		legend: {
			show: true,
			position: 'bottom'
		},
		dataLabels: {
			enabled: false
		},
		tooltip: {
			shared: true,
			intersect: false,
			formatter: function (value: string | number) {
				return '$' + value;
			}
		},
		xaxis: {
			labels: {
				show: true,
				style: {
					fontFamily: 'Inter, sans-serif',
					cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
				},
				formatter: function (value: string | number) {
					return '$' + value;
				}
			},
			categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			}
		},
		yaxis: {
			labels: {
				show: true,
				style: {
					fontFamily: 'Inter, sans-serif',
					cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
				}
			}
		},
		grid: {
			show: true,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: -20
			}
		}
	},
	{
		series: [52.8, 26.8, 20.4],
		colors: ['#1C64F2', '#16BDCA', '#9061F9'],
		chart: {
			height: 420,
			width: '100%',
			type: 'pie'
		},
		stroke: {
			colors: ['white'],
			lineCap: ''
		},
		plotOptions: {
			pie: {
				labels: {
					show: true
				},
				size: '100%',
				dataLabels: {
					offset: -25
				}
			}
		},
		labels: ['Direct', 'Organic search', 'Referrals'],
		dataLabels: {
			enabled: true,
			style: {
				fontFamily: 'Inter, sans-serif'
			}
		},
		legend: {
			position: 'bottom',
			fontFamily: 'Inter, sans-serif'
		},
		yaxis: {
			labels: {
				formatter: function (value: string | number) {
					return value + '%';
				}
			}
		},
		xaxis: {
			labels: {
				formatter: function (value: string | number) {
					return value + '%';
				}
			},
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			}
		}
	},
	{
		series: [35.1, 23.5, 2.4, 5.4],
		colors: ['#1C64F2', '#16BDCA', '#FDBA8C', '#E74694'],
		chart: {
			height: 320,
			width: '100%',
			type: 'donut'
		},
		stroke: {
			colors: ['transparent'],
			lineCap: ''
		},
		plotOptions: {
			pie: {
				donut: {
					labels: {
						show: true,
						name: {
							show: true,
							fontFamily: 'Inter, sans-serif',
							offsetY: 20
						},
						total: {
							showAlways: true,
							show: true,
							label: 'Unique visitors',
							fontFamily: 'Inter, sans-serif',
							formatter: function (w: any) {
								const sum = w.globals.seriesTotals.reduce((a: any, b: any) => {
									return a + b;
								}, 0);
								return `${sum}k`;
							}
						},
						value: {
							show: true,
							fontFamily: 'Inter, sans-serif',
							offsetY: -20,
							formatter: function (value: string | number) {
								return value + 'k';
							}
						}
					},
					size: '80%'
				}
			}
		},
		grid: {
			padding: {
				top: -2
			}
		},
		labels: ['Direct', 'Sponsor', 'Affiliate', 'Email marketing'],
		dataLabels: {
			enabled: false
		},
		legend: {
			position: 'bottom',
			fontFamily: 'Inter, sans-serif'
		},
		yaxis: {
			labels: {
				formatter: function (value: string | number) {
					return value + 'k';
				}
			}
		},
		xaxis: {
			labels: {
				formatter: function (value: string | number) {
					return value + 'k';
				}
			},
			axisTicks: {
				show: false
			},
			axisBorder: {
				show: false
			}
		}
	},
	{
		series: [90, 85, 70],
		colors: ['#1C64F2', '#16BDCA', '#FDBA8C'],
		chart: {
			height: '380px',
			width: '100%',
			type: 'radialBar',
			sparkline: {
				enabled: true
			}
		},
		plotOptions: {
			radialBar: {
				track: {
					background: '#E5E7EB'
				},
				dataLabels: {
					show: false
				},
				hollow: {
					margin: 0,
					size: '32%'
				}
			}
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: -23,
				bottom: -20
			}
		},
		labels: ['Done', 'In progress', 'To do'],
		legend: {
			show: true,
			position: 'bottom',
			fontFamily: 'Inter, sans-serif'
		},
		tooltip: {
			enabled: true,
			x: {
				show: false
			}
		},
		yaxis: {
			show: false,
			labels: {
				formatter: function (value: string | number) {
					return value + '%';
				}
			}
		}
	}
];
