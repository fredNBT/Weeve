let LineChartData = [3,5,6,8]

ShowPieChart(22);

function ShowPieChart(Complete) {
    $('.chart').easyPieChart({
        barColor: 'blue',
        size: '220',
        lineWidth: '24',
        barColor: function (Complete) {
            var ctx = this.renderer.getCtx();
            var canvas = this.renderer.getCanvas();
            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(1, "darkblue");
            gradient.addColorStop(0, "#4fb5fe");
            // gradient.addColorStop(0, "#ffe57e");
            // gradient.addColorStop(1, "#de5900");
            return gradient;
        }
    });
    $('.chart').data('easyPieChart').update(Complete);
};


var ctx = $('#LineChart');
var linechart = new Chart(ctx, {
    type:'line',
    lineColor: "red",
    

    data: {
       labels:['14:59:30','14:59:45','14:59:30','14:59:30'],
       datasets:[
           {
            borderColor: "#80b6f4",
            pointBorderColor: "#80b6f4",
            pointBackgroundColor: "#80b6f4",
            pointHoverBackgroundColor: "#80b6f4",
            pointHoverBorderColor: "#80b6f4",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 2,
            fill: false,
            borderWidth: 4,
            label:'Current Mileage',
            data:LineChartData
           }
       ]
    }
})

function test(){
    alert("hello")
}