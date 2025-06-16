import type { EChartsOption } from "echarts"
import * as echarts from "echarts"
import { TOKEN } from "src/shared/constants"

const rawData = [
	[100, 302, 301, 334, 390, 330, 320],
	[320, 132, 101, 134, 90, 230, 210],
	[220, 182, 191, 234, 290, 330, 310],
	[150, 212, 201, 154, 190, 330, 410],
	[820, 832, 901, 934, 1290, 1330, 1320],
]

const totalData: number[] = []
for (let i = 0; i < rawData[0].length; ++i) {
	let sum = 0
	for (let j = 0; j < rawData.length; ++j) {
		sum += rawData[j][i]
	}
	totalData.push(sum)
}
const grid = {
	left: "3%",
	right: "4%",
	bottom: "10%",
	top: "4%",
	containLabel: true,
}

const series: EChartsOption["series"] = [
	"Direct",
	"Mail Ad",
	"Affiliate Ad",
	"Video Ad",
	"Search Engine",
].map((name, sid) => {
	return {
		name,
		type: "bar",
		stack: "total",
		barWidth: "40%",
		// label: {
		// 	show: true,
		// 	formatter: (params) => Math.round(Number(params?.value) * 1000) / 10 + "%",
		// },
		data: rawData[sid],
	}
})

export const optionData: EChartsOption = {
	tooltip: {
		trigger: "item",
		// valueFormatter: (value) => `${Math.round(Number(value) * 100) / 100}`,
	},
	legend: {
		bottom: 0,
	},
	grid,
	yAxis: {
		type: "value",
	},
	xAxis: {
		type: "category",
		data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	},
	series,
}

const data = [140, 232, 101, 264, 90, 340, 250]

export const optionSecondData: EChartsOption = {
	color: [TOKEN.purple],
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "line",
		},
	},
	grid: {
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		containLabel: false,
	},
	xAxis: [
		{
			type: "category",
			boundaryGap: false,
			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			show: false,
		},
	],
	yAxis: [
		{
			type: "value",
			show: false,
		},
	],
	series: [
		{
			name: "Ticket",
			type: "line",
			stack: "Total",
			smooth: true,
			lineStyle: {
				width: 1,
			},
			showSymbol: false,
			areaStyle: {
				opacity: 0.5,
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					{
						offset: 0,
						color: TOKEN.purple6,
					},
					{
						offset: 1,
						color: TOKEN.purple2,
					},
				]),
			},
			emphasis: {
				focus: "series",
			},
			data,
		},
	],
}
