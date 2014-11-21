var theCanvas = document.getElementById("travelChart");

var ctx = theCanvas.getContext("2d");

var data = {
    labels: ["Phenix City", "Atlanta", "Durham", "Pensacola"],
    datasets: [
        {
            label: "Distance travelled",
            fillColor: "rgba(238, 180, 21, 1)",
            strokeColor: "rgb(89, 34, 2)",
            highlightFill: "rgba(118, 101, 55, 1)",
            highlightStroke: "rgba(194, 111, 45, 1)",
			tooltipFillColor: "rgba(89, 34, 2, 1)",
			scaleGridLineWidth: 2,
            data: [242, 314, 706, 25]
        }
    ]
};

var newChart = new Chart(ctx).Bar(data, false, true);

