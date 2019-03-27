<template>


<div>
     <table>
      <tr>
        <th>Machine ID</th>
        <th>Leaser</th>
        <th>Insurance Policy</th>
        <th>Leaser</th>
        <th>Time Period</th>
        <th>Mileage [km]</th>
        <th>Account balance (tokens)</th>
        <th>SAP</th>
      </tr>
      <tr>
        <td>Peter</td>
        <td>Griffin</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>Lois</td>
        <td>Griffin</td>
        <td>$150</td>
      </tr>
      <tr>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
      </tr>
      <tr>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>$250</td>
      </tr>
    </table>
</div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, td, th {
  border: 1px solid black;
}

table {
  border-collapse: collapse;
  width: 100%;

}

th {
  height: 50px;
  background-color: #DCE1E7;
}

div{
    padding: 40px;
}

</style>
