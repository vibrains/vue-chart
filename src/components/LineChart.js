import {Line} from 'vue-chartjs'

export default Line.extend({
  data () {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(248, 150, 40, 0.2)');
    this.gradient.addColorStop(0.5, 'rgba(255, 202, 87, 0.5)');
    this.gradient.addColorStop(1, 'rgba(179, 7,56, 0.5)');
    
    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)');
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)');

    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
      {
        label: 'Data One',
        borderColor: '#FC2525',
        pointBackgroundColor: '#f89628',
        borderWidth: 2,
        pointBorderColor: '#f89628',
        backgroundColor: this.gradient,
        data: [80, 39, 10, 40, 39, 80, 40, 50, 20, 10, 30, 75]
      },{
        label: 'Data Two',
        borderColor: '#05CBE1',
        pointBackgroundColor: 'white',
        pointBorderColor: 'white',
        borderWidth: 2,
        backgroundColor: this.gradient2,
        data: [55, 55, 32, 10, 12, 30, 80, 20, 40, 33, 90, 100]
      }
      ]
    },


    {responsive: true, maintainAspectRatio: false})

  }
})

