let LineChartData = [];
let LineChartLables = [];

ShowPieChart(22);
let PieChartContainerSize = document.getElementById("PieChartContainer").offsetWidth;
function ShowPieChart(Complete) {
    $('.chart').easyPieChart({
        barColor: 'blue',
        size: (document.getElementById("PieChartContainer").offsetWidth) / 1.1,
        lineWidth: '24',
        trackColor:'#f7f7f7',
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


function LoadLineChart() {
    var ctx = $('#LineChart');
    var linechart = new Chart(ctx, {
        type: 'line',
        lineColor: "red",
        data: {
            labels: LineChartLables,
            datasets: [
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
                    label: 'Current Mileage',
                    data: LineChartData
                }
            ]
        }
    })

}

function test() {
    LineChartData.push(6);
    var today = new Date();
    LineChartLables.push(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
    LoadLineChart();
}

$(document).ready(function () {
    LoadLineChart();
});