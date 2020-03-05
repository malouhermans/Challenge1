// Functie om het hamburger menu te laten bewegen
$('.navTrigger').click(function () {
$(this).toggleClass('active');
    
console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});


      // Voorraden chart
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart1);

      function drawChart1() {

        var data = google.visualization.arrayToDataTable([
          ['Effort', 'Amount given'],
          ['Food', 65],
          ['Used capacity', 35],
        ]);

        var options = {
          backgroundColor: 'transparent',
          title: 'Food capacity usage',
          titleTextStyle: {color: 'white'},
          colors: ['darkgreen','#D14256'],
          pieSliceText: 'none',
          pieHole: 0.6,
          pieSliceBorderColor : "transparent", 
          slices: {  1: {offset: 0.05}},
          legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }








      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {

        var data = google.visualization.arrayToDataTable([
          ['Effort', 'Amount given'],
          ['Water', 70],
          ['Used capacity', 30],
        ]);

        var options = {
          backgroundColor: 'transparent',
          title: 'Water capacity usage',
          titleTextStyle: {color: 'white'},
          colors: ['darkblue','#D14256'],
          pieSliceText: 'none',
          pieHole: 0.6,
          pieSliceBorderColor : "transparent", 
          slices: {  1: {offset: 0.05}},
          legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single1'));
        chart.draw(data, options);
      }





//line chart


      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart3);

      function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Time', 'Distance'],
          ['1 Hour', 1500],
          ['2 Hours',  2000],
          ['3 Hours',  3000],
          ['4 Hours',  3500]
        ]);

        var options = {
          backgroundColor: 'transparent',
          colors: ['darkblue'],
          vAxis:{
          baselineColor: 'white',
          gridlineColor: 'white',
          textStyle:{color: 'white'}
        },
          hAxis:{textStyle:{color:'white'}, titleTextStyle: {color:'white'}},
          curveType: 'function',
          legend: { position: 'bottom', textStyle: {color: 'white'} }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }


      am4core.ready(function() {


      // Speed chart
      // Themes begin
      am4core.useTheme(am4themes_dataviz);
      am4core.useTheme(am4themes_animated);
      // Themes end

      // create chart
      var chart = am4core.create("chartdiv", am4charts.GaugeChart);
        chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

        chart.innerRadius = -25;

      var axis = chart.xAxes.push(new am4charts.ValueAxis());
        axis.min = 0;
        axis.max = 4000;
        axis.strictMinMax = true;
        axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
        axis.renderer.grid.template.strokeOpacity = 0.3;

      var colorSet = new am4core.ColorSet();

      var range0 = axis.axisRanges.create();
        range0.value = 0;
        range0.endValue = 1000;
        range0.axisFill.fillOpacity = 1;
        range0.axisFill.fill = colorSet.getIndex(0);
        range0.axisFill.zIndex = - 1;

      var range1 = axis.axisRanges.create();
        range1.value = 1000;
        range1.endValue = 2000;
        range1.axisFill.fillOpacity = 1;
        range1.axisFill.fill = colorSet.getIndex(1);
        range1.axisFill.zIndex = -1;

      var range2 = axis.axisRanges.create();
        range2.value = 3000;
        range2.endValue = 4000;
        range2.axisFill.fillOpacity = 1;
        range2.axisFill.fill = colorSet.getIndex(2);
        range2.axisFill.zIndex = -1;

      var hand = chart.hands.push(new am4charts.ClockHand(3));

        // using chart.setTimeout method as the timeout will be disposed together with a chart
        chart.setTimeout(randomValue, 2000);

      function randomValue() {
        hand.showValue(Math.random() * 1500, 1000, am4core.ease.cubicOut);
        chart.setTimeout(randomValue, 2000);
      }

      });



