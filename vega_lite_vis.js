var vg_1 = "annual-energy-consumption-by-countries.vg.json";
vegaEmbed("#map", vg_1).then(function(result) {
    }).catch(console.error);

var vg_2 = "access-to-electricity-by-countries.vg.json";
vegaEmbed("#map2", vg_2).then(function(result) {
    }).catch(console.error);

var vg_3 = "energy-consumption-by-source.vg.json"; 
vegaEmbed("#area-chart", vg_3).then(function(result) {
    console.log("Area chart successfully loaded.");
}).catch(console.error);

var vg_4 = "access-to-clean-fuels-vs-gdp-per-capita.json";
vegaEmbed("#scatter-plot", vg_4).then(function(result) {
    console.log("Scatter plot successfully loaded.");
}).catch(console.error);

var vg_5 = "population-using-solid-fuels-for-cooking.json";
vegaEmbed("#slope-chart", vg_5).then(function(result) {
    console.log("Slope chart successfully loaded.");
}).catch(console.error);

var vg_6 = "per-capita-energy-use.json";
vegaEmbed("#bar-chart", vg_6).then(function(result) {
    console.log("Bar chart successfully loaded.");
}).catch(console.error);