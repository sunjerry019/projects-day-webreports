$(document).ready(function ()
{
    $('#cuabsorbed1_3').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Graph showing the effect of aliveness of <i>Ulva</i> on the concentration of Copper(II) ions absorbed by Ulva in 1.3 ppm Copper(II) solution after 5 days'
        },
        xAxis: {
            categories: ['Live', 'Dead']
        },
        yAxis: {
            title: {
                text: 'Cu<sup>2+</sup> Absorbed in 1.3 ppm Cu<sup>2+</sup> (ppm)'
            }
        },

        labels: {
            items: [{
                html: "p-value: 0.240",
                style: {
                    left: '100px',
	                top: '100px'
                }
            }]
        },

        tooltip: {
            backgroundColor: '#FCFFC5',
            borderColor: 'black',
            borderRadius: 5,
            borderWidth: 1,
            crosshairs: [true, true]
        },

        series: [{
            color: '#70c821',
            type: 'column',
            data: [1.25, 1.26]
        }, {
            type: 'errorbar',
            data: [[0.009569468, 0.009569468], [0.011240516, 0.011240516]]
        }],

        column: {
            pointPadding: 0,
            borderWidth: 0,
            groupPadding: 0,
            shadow: false
        }

    });
});