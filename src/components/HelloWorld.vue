<template>
  <canvas id="myChart"/>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import Chart from "chart.js";
import {data} from './data'

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const result = {
      values: [],
      labels: []
    }

    data.data.forEach(v => {
      result.values.push(v.temperature)
      result.labels.push(new Date(v.date).toLocaleString())
    })

    result.values.length = 100
    result.labels.length = 100

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

