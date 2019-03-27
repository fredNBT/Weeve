<template>
  <div id="app">

  <div id="HeaderBanner">
    <h1>FESTO</h1>
  </div>

  <div id="MenuText">
    <p>Overview</p>
    <p>Admin</p>
    <p>Customer</p>
  </div>

  <div id="Stats">
    <div id="StatsText" style="padding:10px">
       <h3>MACHINE DATA</h3> 
       <p>Tracking, Reporting, Storing</p>
       <h3>FESTO CARTESIAN ROBOT</h3>
       <p>La Rambla 82, 08002 Barcelona Spain</p>
    </div>


   <!-- <div style="test"> hery</div> -->
  </div>

  <div id="Stats2">
    <div>
       <button>Mileage Data </button>
       <div></div>
    </div>
     <CurrentLineChart/>
  </div>

  
  <InfoTable></InfoTable>
   
  </div>
</template>

<script>
 import CurrentLineChart from './components/CurrentLineChart.vue' 
 import InfoTable from  './components/Table.vue' 

export default {
  name: 'app',
  components: {
   CurrentLineChart,
   InfoTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-color: #FCFCFC;
}

#app div{
  padding-top: 20px;
}

#HeaderBanner{
  height: 30vh;
  color:#BEC4D1;
  font-size: 80px;
}

#MenuText{
  height: 10vh;
  display: flex;
  justify-content: center;
}

#MenuText p {
  padding-left: 50px;
  padding-right:50px;
  font-size: 30px;
}

#Stats{
  height: 50vh;
  display: flex;
}

#Stats div{
  width: 45%;
  background-color: white;
  margin: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: lightblue;
  filter: drop-shadow(3px 3px 6px lightblue);
}

#StatsText{
  text-align: left;
}

#StatsText h3{
  color:#BFC5D2;
  margin-top: 50px;
  margin-left: 50px;
}

#StatsText p{
  color:black;
  margin-top: 40px;
   margin-left: 50px;
}

#Stats2{
  height: 50vh;
  display: flex
}

#Stats2 button{
    background-color: #2E5AFF; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  width: 90%;
}

#Stats2 div{

  width: 45%;
  background-color: white;
  margin: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: lightblue;
  filter: drop-shadow(3px 3px 6px lightblue);
}

#InfoTable{
  background-color: yellow;
  height: 40vh;
}

.test{
  background-color: pink;
}


</style>
