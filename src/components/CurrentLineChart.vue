<template>
 <!-- <div class="small" style="width:100%"> -->
    <line-chart :chart-data="datacollection" style="width: 500px; "></line-chart>
   <!-- <button @click="fillData()">Randomize</button>-->
  <!--  <p>{{wiresharkdata}} </p>-->
 <!-- </div> -->
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null,
        steve: 8,
        wiresharkdata:[0.1,0.2,8,2,4,3]
      }
    },
    mounted () {
    this.fillData()
       
    this.ready();
  
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [1,2,3,4,5,6],
          
          datasets: [
            {
              label: ['Data One','d2','d3','d4'],
              backgroundColor: 'blue',
              data: this.wiresharkdata
            }, 
          ]
        }
      },
    
      getRandomInt () {
       // return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      return this.wiresharkdata;
      },
      ready() {
      var channel = this.$pusher.subscribe("last_usage");
      channel.bind("new_value", (log) => {
      //  this.wiresharkdata = [7,6,5,4,3,2]
      this.wiresharkdata.shift();
      this.wiresharkdata.push ( log.usages[0].current);
      this.fillData();
      });
    }

    }
  }








  
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>