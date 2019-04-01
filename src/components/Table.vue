<template>
<div>
          <table>
          <tr>
              <th>Cost per Usage [Token/km]</th>
              <th>Tokens per EUR</th>
            </tr>
            <tr>
              <td id="cost_per_usage"></td>
              <td id="token_per_eur"></td>
            </tr>
      </table>
</div>
</template>
<script>
import myScript from ''

export default {

  created: function () {
    // `this` points to the vm instance
    console.log('a is: ')
  }
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

td{
    height: 100px;
}

div{
    padding: 40px;
}
</style>
