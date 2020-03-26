am4core.ready(function() {
	am4core.useTheme(am4themes_animated);
	var chart = am4core.create("corona-02", am4charts.XYChart);
	chart.data = [];

	var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
	var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

	var lineSeries = chart.series.push(new am4charts.LineSeries());
	lineSeries.dataFields.valueY = "cases";
	lineSeries.dataFields.dateX = "date";
	lineSeries.name = "Cases";
	lineSeries.strokeWidth = 3;

	var bullet = lineSeries.bullets.push(new am4charts.Bullet());
	var image = bullet.createChild(am4core.Image);
	image.href = "https://www.amcharts.com/lib/images/star.svg";
	image.width = 0;
	image.height = 0;
	image.horizontalCenter = "middle";
	image.verticalCenter = "middle";

});