    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(drawChart2);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Month', 'Incidents', {role: 'style'}],
            ['JAN',  3, 'white'],
            ['FEB',  0, 'white'],
            ['MAR',  1, 'white'],
            ['APR',  1, 'white'],
            ['MAY',  0, 'white'],
            ['JUN',  0, 'white'],
            ['JUL',  0, 'white'],
            ['AUG',  0, 'white'],
            ['SEPT', 0, 'white'],
            ['OCT',  1, 'white'],
            ['NOV',  0, 'white'],
            ['DEC',  2, 'white']
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

        var options = {
            title: "Daily Earnings",
            titlePosition: 'none',
            backgroundColor: '#ffc107',
            bar: {groupWidth: "60%"},
            legend: { position: "bottom" },
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chart-earnings'));

        chart.draw(data, options);
      }

    function drawChart2()
    {
        var data = google.visualization.arrayToDataTable([
            ['Hour', 'Speed'],
            ['5AM',  72],
            ['6AM',  76],
            ['7AM',  50],
            ['8AM',  25],
            ['9AM',  26],
            ['10AM',  52],
            ['11AM',  60],
            ['12NN',  63],
            ['1PM',  65],
            ['2PM',  75],
            ['3PM',  57],
            ['4PM',  47],
            ['5PM',  24],
            ['6PM',  32],
            ['7PM',  57]
        ]);

        var options = {
            title: 'Average Speed (Per hour on all routes)',
            titlePosition: 'none',
            curveType: 'function',
            legend: { position: 'bottom' },
            hAxis: {
                gridlines: {
                    count: -1,
                    color: '#000'
                }
            },
            vAxis: {
                minValue: 10,
                viewWindow: {
                    min: 0,
                    max: 80
                },
                gridlines: {
                    count: 6,
                    color: "#000"
                }
            },
            chartArea: { 
                width: '87%',
                stroke: '#fff'
            },
            series: {
              0: {
                  color: "#fff",
                  lineWidth: 5,
                  minValue: 0
              }  
            },
            backgroundColor: '#ffc107'
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart-speed'));

        chart.draw(data, options);
    }

// linechart version
//var data = google.visualization.arrayToDataTable([
//            ['Day', 'Earnings'],
//            [1,  47],
//            [2,  203],
//            [3,  100],
//            [4,  94],
//            [5,  110],
//            [6,  113],
//            [7,  116],
//            [8,  130],
//            [9,  90],
//            [10,  91],
//            [11,  110],
//            [12,  120],
//            [13,  82],
//            [15,  95],
//            [16,  150],
//            [17,  100],
//            [18,  80],
//            [19,  87],
//            [20,  133],
//            [21,  70],
//            [22,  80],
//            [23,  120],
//            [24,  93],
//            [25,  100],
//            [26,  110],
//            [27,  140],
//            [28,  84],
//            [29,  104],
//            [30,  131],
//            [31,  90]
//        ]);
//
//        var options = {
//            title: 'Average Speed (Per hour on all routes)',
//            titlePosition: 'none',
//            curveType: 'function',
//            legend: { position: 'bottom' },
//            hAxis: {
//                gridlines: {
//                    count: -1,
//                    color: '#000'
//                }
//            },
//            vAxis: {
//                gridlines: {
//                    count: 6,
//                    color: "#000"
//                }
//            },
//            chartArea: { 
//                width: '87%',
//                stroke: '#fff'
//            },
//            series: {
//              0: {
//                  color: "#fff",
//                  lineWidth: 5,
//                  minValue: 0
//              }  
//            },
//            backgroundColor: '#ffc107'
//        };
//
//        var chart = new google.visualization.LineChart(document.getElementById('chart-earnings'));
// bar version
//
//var data = google.visualization.arrayToDataTable([
//            ['Day', 'Earnings', {role: 'style'}],
//            [1,  47, 'white'],
//            [2,  203, 'white'],
//            [3,  100, 'white'],
//            [4,  94, 'white'],
//            [5,  110, 'white'],
//            [6,  113, 'white'],
//            [7,  116, 'white'],
//            [8,  130, 'white'],
//            [9,  90, 'white'],
//            [10,  91, 'white'],
//            [11,  110, 'white'],
//            [12,  120, 'white'],
//            [13,  82, 'white'],
//            [14,  85, 'white'],
//            [15,  95, 'white'],
//            [16,  150, 'white'],
//            [17,  100, 'white'],
//            [18,  80, 'white'],
//            [19,  87, 'white'],
//            [20,  133, 'white'],
//            [21,  70, 'white'],
//            [22,  80, 'white'],
//            [23,  120, 'white'],
//            [24,  93, 'white'],
//            [25,  100, 'white'],
//            [26,  110, 'white'],
//            [27,  140, 'white'],
//            [28,  84, 'white'],
//            [29,  104, 'white'],
//            [30,  131, 'white'],
//            [31,  90, 'white']
//        ]);
//
//        var view = new google.visualization.DataView(data);
//        view.setColumns([0, 1,
//                       { calc: "stringify",
//                         sourceColumn: 1,
//                         type: "string",
//                         role: "annotation" },
//                       2]);
//
//        var options = {
//            title: "Daily Earnings",
//            titlePosition: 'none',
//            backgroundColor: '#ffc107',
//            bar: {groupWidth: "60%"},
//            legend: { position: "bottom" },
//        };
//
//        var chart = new google.visualization.ColumnChart(document.getElementById('chart-earnings'));