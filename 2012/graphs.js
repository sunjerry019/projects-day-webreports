var curgraph;

$(".graphs:not(#g1)").fadeOut(100, function()
{
    curgraph = 1;
});

function changeGraph()
{
    //var gindex = parseInt($("#selectgraphs").attr("selectedIndex")) + 1;
    var gindex = document.getElementById("selectgraphs").selectedIndex + 1;
    if(curgraph != gindex) {
        $("#g" + curgraph).fadeOut(200, function() {
            $("#g" + gindex).fadeIn(200, function() {
                curgraph = gindex;
            });
        });
    }
}


//PUT JQPLOT SCRIPT HERE
$.jqplot.config.enablePlugins = true;
/*[[[0, 14], [20, 22.4], [40, 21.4], [60, 21]]]*/
$.jqplot('ecolilime', [[[0, 140], [20, 224], [40, 214], [60, 210]]], {
    title: "<i>E.coli</i> + lime",
    axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
        xaxis: {
            label: "Time",
            pad: 0,
            tickOptions: {
                formatString: "%d min"   // format string to use with the axis tick formatter
            }
        },
        yaxis: {
            label: "x10^7 CFU/ml"
        }
    },
    highlighter: {
        show: true,
        sizeAdjust: 7.5
    },
    cursor: {
        show: false
    }
});
$.jqplot('ecoligarlic', [[[0, 7], [20, 17], [40, 90], [60, 75]]], {
    title: "<i>E.coli</i> + garlic",
    axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
        xaxis: {
            label: "Time",
            pad: 0,
            tickOptions: {
                formatString: "%d min"   // format string to use with the axis tick formatter
            }
        },
        yaxis: {
            label: "x10^7 CFU/ml"
        }
    },
    highlighter: {
        show: true,
        sizeAdjust: 7.5
    },
    cursor: {
        show: false
    }
});
$.jqplot('ecolionion', [[[0, 209], [20, 146], [40, 301], [60, 123]]], {
    title: "<i>E.coli</i> + onion",
    axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
        xaxis: {
            label: "Time",
            pad: 0,
            tickOptions: {
                formatString: "%d min"   // format string to use with the axis tick formatter
            }
        },
        yaxis: {
            label: "x10^7 CFU/ml"
        }
    },
    highlighter: {
        show: true,
        sizeAdjust: 7.5
    },
    cursor: {
        show: false
    }
});
$.jqplot('ecolicoffeegrounds', [[[0, 532], [20, 352], [40, 120], [60, 506]]], {
    title: "<i>E.coli</i> + coffee grounds",
    axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
        xaxis: {
            label: "Time",
            pad: 0,
            tickOptions: {
                formatString: "%d min"   // format string to use with the axis tick formatter
            }
        },
        yaxis: {
            label: "x10^7 CFU/ml"
        }
    },
    highlighter: {
        show: true,
        sizeAdjust: 7.5
    },
    cursor: {
        show: false
    }
});
$.jqplot('ecoligarliclime', [[[0, 7.866666667], [20, 9.433333333], [40, 26.5], [60, 21.4]]], {
    title: "<i>E.coli</i> + garlic and lime",
    axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
        xaxis: {
            label: "Time",
            pad: 0,
            tickOptions: {
                formatString: "%d min"   // format string to use with the axis tick formatter
            }
        },
        yaxis: {
            label: "x10^7 CFU/ml"
        }
    },
    highlighter: {
        show: true,
        sizeAdjust: 7.5
    },
    cursor: {
        show: false
    }
});
$.jqplot('ecoligarliconion', [[[0, 95.6], [20, 58.13333333], [40, 68.96666667], [60, 57.66666667]]], {
    title: "<i>E.coli</i> + garlic and onion",
    axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
        xaxis: {
            label: "Time",
            pad: 0,
            tickOptions: {
                formatString: "%d min"   // format string to use with the axis tick formatter
            }
        },
        yaxis: {
            label: "x10^7 CFU/ml"
        }
    },
    highlighter: {
        show: true,
        sizeAdjust: 7.5
    },
    cursor: {
        show: false
    },
    series: [
        {
            label:"Attempt1"
        },
        {
            label:"Attempt2"
        },
        {
            label:"Attempt3"
        }
    ],
    legend: {
        show: true,
        location: 'se'     // compass direction, nw, n, ne, e, se, s, sw, w.
    }
});
//M LUTEUS
//[[[0, 22.9], [20, 15.3], [40, 16.13333333], [60, 20.56666667]]]
$.jqplot('mluteuslime', [[[0, 22.9], [20, 15.3], [40, 16.13333333], [60, 20.56666667]],[[0, 27.85681349,27.85681349,17.94318651,17.94318651], [20, 18.75108679,18.75108679,11.84891321,11.84891321], [40, 20.08062495,20.08062495,12.18604172,12.18604172], [60, 21.90499066,21.90499066,19.22834267,19.22834267]]], {
    title: "<i>M.luteus</i> + lime",
    axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    series: [{
        renderer:$.jqplot.LineRenderer
    },
    {
        renderer:$.jqplot.OHLCRenderer, 
        rendererOptions:{
            errorBar:true
        }
    }],
    axes: {
        xaxis: {
            label: "Time",
            pad: 1,
            tickOptions: {
                formatString: "%d min"   // format string to use with the axis tick formatter
            }
        },
        yaxis: {
            label: "x10^7 CFU/ml"
        }
    },
    highlighter: {
        show: true,
        sizeAdjust: 7.5
    },
    cursor: {
        show: false
    }
});
$.jqplot('mluteusgarlic', [[[0, 38.55], [20, 15.5], [40, 14], [60, 12.25]]], {
    title: "<i>M.luteus</i> + garlic",
    axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
        xaxis: {
            label: "Time",
            pad: 0,
            tickOptions: {
                formatString: "%d min"   // format string to use with the axis tick formatter
            }
        },
        yaxis: {
            label: "x10^7 CFU/ml"
        }
    },
    highlighter: {
        show: true,
        sizeAdjust: 7.5
    },
    cursor: {
        show: false
    }
});
$.jqplot('mluteusonion', [[[0, 30.93333333], [20, 29.53333333], [40, 40.3], [60, 41.96666667]]], {
    title: "<i>M.luteus</i> + onion",
    axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
        xaxis: {
            label: "Time",
            pad: 0,
            tickOptions: {
                formatString: "%d min"   // format string to use with the axis tick formatter
            }
        },
        yaxis: {
            label: "x10^7 CFU/ml"
        }
    },
    highlighter: {
        show: true,
        sizeAdjust: 7.5
    },
    cursor: {
        show: false
    }
});
$.jqplot('mluteuscoffeegrounds', [[[0, 33.6], [20, 33.4], [40, 26.05], [60, 23.05]]], {
    title: "<i>M.luteus</i> + coffee grounds",
    axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
        xaxis: {
            label: "Time",
            pad: 0,
            tickOptions: {
                formatString: "%d min"   // format string to use with the axis tick formatter
            }
        },
        yaxis: {
            label: "x10^7 CFU/ml"
        }
    },
    highlighter: {
        show: true,
        sizeAdjust: 7.5
    },
    cursor: {
        show: false
    }
});
$.jqplot('mluteusgarliclime', [[[0, 11.33333333], [20, 33.86666667], [40, 19.96666667], [60, 20.33333333]]], {
    title: "<i>M.luteus</i> + garlic and lime",
    axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
        xaxis: {
            label: "Time",
            pad: 0,
            tickOptions: {
                formatString: "%d min"   // format string to use with the axis tick formatter
            }
        },
        yaxis: {
            label: "x10^7 CFU/ml"
        }
    },
    highlighter: {
        show: true,
        sizeAdjust: 7.5
    },
    cursor: {
        show: false
    }
});
/*$.jqplot('mluteusgarliconion', [[[0, 144.1], [20, 27.8], [40, 26], [60, 35]]], {
    title: "<i>E.coli</i> + garlic and onion",
    axesDefaults: {
        labelRenderer: $.jqplot.CanvasAxisLabelRenderer
    },
    axes: {
        xaxis: {
            label: "Time",
            pad: 0,
            tickOptions: {
                formatString: "%d min"   // format string to use with the axis tick formatter
            }
        },
        yaxis: {
            label: "x10^7 CFU/ml"
        }
    },
    highlighter: {
        show: true,
        sizeAdjust: 7.5
    },
    cursor: {
        show: false
    },
    series: [
        {
            label:"Attempt1"
        },
        {
            label:"Attempt2"
        },
        {
            label:"Attempt3"
        }
    ],
    legend: {
        show: true,
        location: 'se'     // compass direction, nw, n, ne, e, se, s, sw, w.
    }
});*/