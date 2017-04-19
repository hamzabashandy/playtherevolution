L.mapbox.accessToken = 'pk.eyJ1IjoiZW5qYWxvdCIsImEiOiJjaWhtdmxhNTIwb25zdHBsejk0NGdhODJhIn0.2-F2hS_oTZenAWc0BMf_uw'
    
    //Setup our Leaflet map using Mapbox.js
    var map = L.mapbox.map('map', 'mapbox.dark', {maxZoom: 18, minZoom: 14})
    .setView([30.043467, 31.232311], 15);
    
    function project(latlng){
      var array = [+latlng.lat, +latlng.lon]
      var point = map.latLngToLayerPoint(L.latLng(latlng));

      return point;
    }
    
    // Setup our svg layer that we can manipulate with d3
    var svg = d3.select(map.getPanes().overlayPane)
      .append("svg");
    var g = svg.append("g").attr("class", "leaflet-zoom-hide");
    
    d3.csv("csv/dots.csv", function(err, data) {
      //console.log("data:", data)
 
      var dots = g.selectAll("circle").data(data)
      
      dots.enter()
        .append("circle")
      
      function update() {
        // We need to reposition our SVG and our containing group when the map
        // repositions via zoom or pan
        // https://github.com/zetter/voronoi-maps/blob/master/lib/voronoi_map.js
        var bounds = map.getBounds();
        var topLeft = map.latLngToLayerPoint(bounds.getNorthWest())
        var bottomRight = map.latLngToLayerPoint(bounds.getSouthEast())
        console.log(bounds, topLeft, bottomRight)
        svg.style("width", map.getSize().x + "px")
          .style("height", map.getSize().y + "px")
          .style("left", topLeft.x + "px")
          .style("top", topLeft.y + "px")
          .style("fill", "CC1417");
        g.attr("transform", "translate(" + -topLeft.x + "," + -topLeft.y + ")");

        dots.attr({
          cx: function(d) { return project(d).x },
          cy: function(d) { return project(d).y },
          r: 8
        })
          .attr("opacity", .8)
      
      }
      update();
      
      map.on("viewreset", function() {
        update();
      })
      map.on("move", update)

    })