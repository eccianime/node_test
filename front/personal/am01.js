am4core.ready(function() {

	am4core.useTheme(am4themes_animated);

	var chart = am4core.create("corona-01", am4charts.XYChart3D);

	chart.data = [];

	let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
	categoryAxis.dataFields.category = "state";
	categoryAxis.renderer.labels.template.rotation = 270;
	categoryAxis.renderer.labels.template.hideOversized = false;
	categoryAxis.renderer.minGridDistance = 20;
	categoryAxis.renderer.labels.template.horizontalCenter = "right";
	categoryAxis.renderer.labels.template.verticalCenter = "middle";
	categoryAxis.tooltip.label.rotation = 270;
	categoryAxis.tooltip.label.horizontalCenter = "right";
	categoryAxis.tooltip.label.verticalCenter = "middle";

	let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
	valueAxis.title.fontWeight = "bold";

	var series = chart.series.push(new am4charts.ColumnSeries3D());
	series.dataFields.valueY = "cases";
	series.dataFields.categoryX = "state";
	series.name = "cases";
	series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
	series.columns.template.fillOpacity = .8;

	var columnTemplate = series.columns.template;
	columnTemplate.strokeWidth = 2;
	columnTemplate.strokeOpacity = 1;
	columnTemplate.stroke = am4core.color("#FFFFFF");

	columnTemplate.adapter.add("fill", function(fill, target) {
	  return chart.colors.getIndex(target.dataItem.index);
	})

	columnTemplate.adapter.add("stroke", function(stroke, target) {
	  return chart.colors.getIndex(target.dataItem.index);
	})

	chart.cursor = new am4charts.XYCursor();
	chart.cursor.lineX.strokeOpacity = 0;
	chart.cursor.lineY.strokeOpacity = 0;

}); 