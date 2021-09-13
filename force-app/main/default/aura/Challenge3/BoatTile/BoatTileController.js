({
    //inicjowanie funkcji przekazanej z component
    doInit : function(component, event, helper) {
        //zmienna data pobrana z componentu zmiennej boat
        var data = component.get("v.boat");
        //wyświetlenie loga z data w logach
        console.log("data received " + data);
    }
})
