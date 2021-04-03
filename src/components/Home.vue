<template>
  <form @change="buildChart()">
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
type ResultDTO = { values: number[], labels: string[] }
type Period = { begin: string, end: string }

export default defineComponent({
  name: 'Home',
  setup() {
    const buildPeriod = (): Period => {
      const end = new Date();
      const begin = new Date();
      begin.setMinutes(begin.getMinutes() - 5);

      return {
        begin: begin.toISOString().substring(0, 19),
        end: end.toISOString().substring(0, 19)
      }
    }

    const buildChart = async () => {
      const result: ResultDTO = {values: [], labels: []}
      const temperatures: Temperatures = []

      const {data} = await axios.get('http://kamm.io/monitor/api/temperature');
      temperatures.push(...data.data)

      temperatures.forEach(v => {
        result.values.push(v.temperature)
        result.labels.push(new Date(v.date).toLocaleString())
      })

      new Chart(document.getElementById("chart") as any, {
        type: 'line',
        data: {
          labels: result.labels,
          datasets: [{data: result.values, label: "kamm.io", borderColor: "#c45850", fill: false}]
        },
        options: {
          title: {display: true, text: 'Temperature x Datetime'}
        }
      });
    }

    const period = ref(buildPeriod())
    onMounted(() => buildChart())

    return {period, buildChart}
  }
})
</script>

