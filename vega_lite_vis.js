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

    