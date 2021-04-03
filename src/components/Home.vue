<template>
  <form @change="updateChart()">
    <div>
      <label for="begin">Begin: </label>
      <input v-model="period.begin" id="begin" type="datetime-local" step="1">

      &nbsp;

      <label for="end">End: </label>
      <input v-model="period.end" id="end" type="datetime-local" step="1">
    </div>
  </form>

  <canvas height="100" id="chart"/>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import Chart from "chart.js";
import axios from "axios";

type Temperature = { date: string, id: number, temperature: number }
type Temperatures = Temperature[]
type TemperaturesDTO = { values: number[], labels: string[] }
type Period = { begin: string, end: string }

export default defineComponent({
  name: 'Home',
  setup() {
    let chart: Chart;

    const buildPeriod = (): Period => {
      const end = new Date();
      const begin = new Date();
      begin.setMinutes(begin.getMinutes() - 5);

      return {
        begin: begin.toISOString().substring(0, 19),
        end: end.toISOString().substring(0, 19)
      }
    }

    const buildChart = (): Chart => {
      return new Chart("chart", {
        type: 'line',
        data: {
          labels: [],
          datasets: [{data: [], label: "kamm.io", borderColor: "#c45850", fill: false}]
        },
        options: {
          title: {display: true, text: 'Temperature x Datetime'}
        }
      });
    }

    const addData = (chart: Chart, data: TemperaturesDTO) => {
      chart.data.labels?.push(...data.labels);
      chart.data.datasets?.forEach((dataset) => dataset.data?.push(...data.values as any));
      chart.update();
    }

    const removeData = (chart: Chart) => {
      chart.data.labels?.pop();
      chart.data.datasets?.forEach((dataset) => dataset.data?.pop());
      chart.update();
    }

    const updateChart = async () => {
      const response = await axios.get('http://kamm.io/monitor/api/temperature');
      const temperatures: Temperatures = response.data.data

      const result: TemperaturesDTO = {values: [], labels: []}

      temperatures.forEach(v => {
        result.values.push(v.temperature)
        result.labels.push(new Date(v.date).toLocaleString())
      })

      removeData(chart)
      addData(chart, result)
    }

    const period = ref(buildPeriod())

    const onMountedDo = () => {
      chart = buildChart();
      updateChart()
    }

    onMounted(onMountedDo)

    return {period, updateChart}
  }
})
</script>

