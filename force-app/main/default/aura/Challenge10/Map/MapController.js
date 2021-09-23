({
    //załadowamie do componentu 
    jsLoaded : function(component) {
        component.set("v.jsLoaded", true);
    },

    //pobranie lokacji do zmiennej i pobranie przypisanych parametrów do atrubutów z eventu
    onPlotMapMarker : function(component, event) {
        var location = component.get("v.location");
        var locationData = {
            sObjectId : event.getParam("sObjectId"),
            lat : event.getParam("lat"),
            long : event.getParam("long"),
            label : event.getParam("label")
        };
    //podłączenie lokacji z pobranych parametrów do haczyka 
        component.set("v.location", locationData);
    } 
})