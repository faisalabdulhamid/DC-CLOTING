import VueCharts from 'vue-chartjs'

export default {
  props: {
    data: {
      required: true
    },
    soal:{
      required: true
    }
  },
  extends: VueCharts.Pie,
  mounted () {
    let color = ['#f87979', '#4286f4', '#46ce2b', '#c6275c', '#f442df', '#e8f441']
    let label = []
    let nilai = []
    let color_data = []
    this.data.forEach((val, key) => {
      label.push(val.label)
      nilai.push(val.nilai)
      color_data.push(color[key])
    })
    
    this.renderChart({
      labels: label,
      datasets: [
        {
          label: this.soal,
          backgroundColor:  color_data,
          data: nilai
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  },
  created (){
    console.log(this.data)
  }
}