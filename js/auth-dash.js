        $(document).ready(function(){
  data = [
  [0, 0, 4],
  [0, 1, 6],
  [0, 2, 5],
  [0, 3, 4],
  [0, 4, 4],
  [0, 5, 5],
  [0, 6, 4],
  [0, 7, 20],
  [0, 8, 35],
  [0, 9, 50],
  [0, 10, 40],
  [0, 11, 30],
  [0, 12, 20],
  [0, 13, 30],
  [0, 14, 10],
  [0, 15, 20],
  [0, 16, 30],
  [0, 17, 40],
  [0, 18, 40],
  [0, 19, 50],
  [0, 20, 40],
  [0, 21, 30],
  [0, 22, 10],
  [0, 23, 6],
  [1, 0, 4],
  [1, 1, 6],
  [1, 2, 10],
  [1, 3, 12],
  [1, 4, 12],
  [1, 5, 15],
  [1, 6, 20],
  [1, 7, 30],
  [1, 8, 40],
  [1, 9, 50],
  [1, 10, 30],
  [1, 11, 40],
  [1, 12, 33],
  [1, 13, 20],
  [1, 14, 38],
  [1, 15, 30],
  [1, 16, 20],
  [1, 17, 25],
  [1, 18, 20],
  [1, 19, 30],
  [1, 20, 40],
  [1, 21, 10],
  [1, 22, 12],
  [1, 23, 15],
  [2, 0, 5],
  [2, 1, 10],
  [2, 2, 6],
  [2, 3, 10],
  [2, 4, 15],
  [2, 5, 20],
  [2, 6, 18],
  [2, 7, 25],
  [2, 8, 34],
  [2, 9, 40],
  [2, 10, 41],
  [2, 11, 25],
  [2, 12, 20],
  [2, 13, 34],
  [2, 14, 30],
  [2, 15, 35],
  [2, 16, 40],
  [2, 17, 45],
  [2, 18, 55],
  [2, 19, 35],
  [2, 20, 25],
  [2, 21, 20],
  [2, 22, 15],
  [2, 23, 10],
  [3, 0, 5],
  [3, 1, 3],
  [3, 2, 4],
  [3, 3, 2],
  [3, 4, 10],
  [3, 5, 12],
  [3, 6, 15],
  [3, 7, 20],
  [3, 8, 45],
  [3, 9, 60],
  [3, 10, 30],
  [3, 11, 32],
  [3, 12, 25],
  [3, 13, 26],
  [3, 14, 28],
  [3, 15, 21],
  [3, 16, 30],
  [3, 17, 35],
  [3, 18, 45],
  [3, 19, 55],
  [3, 20, 40],
  [3, 21, 20],
  [3, 22, 15],
  [3, 23, 3],
  [4, 0, 4],
  [4, 1, 10],
  [4, 2, 12],
  [4, 3, 14],
  [4, 4, 15],
  [4, 5, 15],
  [4, 6, 13],
  [4, 7, 20],
  [4, 8, 35],
  [4, 9, 50],
  [4, 10, 40],
  [4, 11, 30],
  [4, 12, 20],
  [4, 13, 30],
  [4, 14, 10],
  [4, 15, 20],
  [4, 16, 30],
  [4, 17, 40],
  [4, 18, 40],
  [4, 19, 50],
  [4, 20, 40],
  [4, 21, 30],
  [4, 22, 10],
  [4, 23, 6],
  [5, 0, 4],
  [5, 1, 6],
  [5, 2, 10],
  [5, 3, 12],
  [5, 4, 12],
  [5, 5, 15],
  [5, 6, 20],
  [5, 7, 30],
  [5, 8, 40],
  [5, 9, 50],
  [5, 10, 30],
  [5, 11, 40],
  [5, 12, 33],
  [5, 13, 20],
  [5, 14, 38],
  [5, 15, 30],
  [5, 16, 20],
  [5, 17, 25],
  [5, 18, 20],
  [5, 19, 30],
  [5, 20, 40],
  [5, 21, 10],
  [5, 22, 12],
  [5, 23, 15],
  [6, 0, 5],
  [6, 1, 10],
  [6, 2, 6],
  [6, 3, 10],
  [6, 4, 15],
  [6, 5, 20],
  [6, 6, 18],
  [6, 7, 25],
  [6, 8, 34],
  [6, 9, 40],
  [6, 10, 41],
  [6, 11, 25],
  [6, 12, 20],
  [6, 13, 34],
  [6, 14, 30],
  [6, 15, 35],
  [6, 16, 40],
  [6, 17, 45],
  [6, 18, 55],
  [6, 19, 35],
  [6, 20, 25],
  [6, 21, 20],
  [6, 22, 15],
  [6, 23, 10],
];

  var renderChart = function(data) {
    var extent = d3.extent(data,function(d){
      return d[2];
    });
    var days = ['North Avenue', 'Quezon Avenue', 'GMA-Kamuning', 'Araneta Center-Cubao', 'Santolan', 'Ortigas Avenue',
    	 'Shaw Boulevard'];
    var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p'
    	,'10p', '11p'];
    var width = $('#punchcard').width();
    var columnWidth = (width/hours.length)*0.49;

    var chart = d4.baseChart({
      config: {
        axes: {
          y: {
            scale: 'ordinal'
          },
          z: {
            scale: 'sqrt'
          }
        }
      }
    })
      .mixin([{
        'name': 'xAxis',
        'feature': d4.features.xAxis
      }, {
        'name': 'yAxis',
        'feature': d4.features.yAxis
      }, {
        'name': 'circles',
        'feature': d4.features.circleSeries
      }])
      .outerWidth(width)
      .x(function(x) {
        x
          .key(1);
      })
      .y(function(y) {
        y
          .domain([6, 5, 4, 3, 2, 1, 0])
          .key(0);
      })
      .z(function(z) {
        z
          .key(2)
          .domain(extent)
          .range([0, columnWidth]);
      })
      .marginLeft(80)
      .using('circles', function(circles){
        circles
        .r(function(d){
          return this.z(d[this.z.$key]);
        })
        .cx(function(d){
          return this.x(d[this.x.$key]) + columnWidth/2;
        });
      })
      .using('xAxis', function(axis) {
        axis.tickFormat(function(d) {
          return hours[d];
        });
      })
      .using('yAxis', function(axis) {
        axis
          .tickFormat(function(d) {
            return days[d];
          });
      });

    d3.select('#punchcard')
      .datum(data)
      .call(chart);
  };

  	renderChart(data);

});
    
        function getChartData1(){
				var now = moment().endOf('day').toDate();
				var yearAgo = moment().startOf('day').subtract(1, 'year').toDate();
				var chartData = d3.time.days(yearAgo, now).map(function (dateElement) {
				return {
				  date: dateElement,
				  count: (dateElement.getDay() !== 0 && dateElement.getDay() !== 6) ? Math.floor(Math.random() * 20) : Math.floor(Math.random() * 40)
				};
				});
				return chartData;
      	}

      	function getChartData2(){
			var now = moment().endOf('day').toDate();
			var yearAgo = moment().startOf('day').subtract(1, 'year').toDate();
			var chartData = d3.time.days(yearAgo, now).map(function (dateElement) {
			return {
			  date: dateElement,
			  count: (dateElement.getDay() !== 0 && dateElement.getDay() !== 6) ? Math.floor(Math.random() * 60) : Math.floor(Math.random() * 10)
			};
			});
			return chartData;
      	}

		var heatmap = calendarHeatmap()
                      .data(getChartData1())
                      .selector('.container1')
                      .tooltipEnabled(true)
                      .colorRange(['#f4f7f7', '#79a8a9'])
                      .onClick(function (data) {
                        console.log('data', data);
                      });
      	heatmap();  // render the chart

      	var heatmap2 = calendarHeatmap()
                      .data(getChartData2())
                      .selector('.container2')
                      .tooltipEnabled(true)
                      .colorRange(['#ffffff', '#cc0000'])
                      .onClick(function (data) {
                        console.log('data', data);
                      });
      	heatmap2();  // render the chart
      