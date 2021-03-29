<template>
  <canvas id="myChart"/>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import Chart from "chart.js";
import testData from "./data";

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    type ResultDTO = { values: number[], labels: string[] }
    const result: ResultDTO = {values: [], labels: []}

    testData.forEach(v => {
      result.values.push(v.temperature)
      result.labels.push(new Date(v.date).toLocaleString())
    })

    onMounted(() => {
      new Chart(document.getElementById("myChart") as any, {
        type: 'line',
        data: {
          labels: result.labels,
          datasets: [{
            data: result.values,
            label: "kamm.io",
            borderColor: "#c45850",
            fill: false
          }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Temperature x Datetime'
          }
        }
      });
    })
    return {}
  }
})
</script>

