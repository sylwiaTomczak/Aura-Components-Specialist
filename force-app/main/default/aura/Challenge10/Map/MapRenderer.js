({
    rerender: function (component) {
        var nodes = this.superRerender();
        var location = component.get('v.location');
        //pobranie przekazanej lokacji lodzi i sprawdzenie w ifie czy lokacja jest uzupelnianiona 
        if (!location) {
        } else {
           //jeśli jeszcze nie jest
            if (!window.L) {
                return nodes;
            }
            //zaladowanie ponownie mapy jeśli jeszcze nie byłą
            if (!component.map) {
                var mapElement = component.find("map").getElement();
                component.map = L.map(mapElement, {zoomControl: true}).setView([42.356045, -71.085650], 13);
                component.map.scrollWheelZoom.disable();
                window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles © Esri'}).addTo(component.map);
            }
            //jeśli wszytskie parametry położenia łodzi są uzupełnione to przypisanie do zmiennej i przekazanie dalej
            //i przypisanie do mapy
            if (location && location.lat && location.long) {
                var latLng = [location.lat, location.long];
                if (component.marker) {
                    component.marker.setLatLng(latLng);
                } else {
                    component.marker = window.L.marker(latLng);
                    component.marker.addTo(component.map);
                }
                component.map.setView(latLng);
            }
            return nodes;
        }
    }
})