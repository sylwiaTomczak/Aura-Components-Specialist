({
    //inicjowanie funkcji przekazanej z component
    doInit : function(component, event, helper) {
        //zmienna data pobrana z componentu zmiennej boat
        var data = component.get("v.boat");
        //wyświetlenie loga z data w logach
        console.log("data received " + data);
    },

    onBoatClick : function(component, event, helper) {
        //przypisanie do zmiennej pobranej wartości value
        var data = event.getSource().get("v.value");

        //przypisanie do zmiennej pobranego eventu kliknięcia
        var BoatSelect = component.getEvent("BoatSelect");

        //zmienna z eventem i przypisanie parametrów do id łodzi zmiane jej wartości i odpalenie 
         BoatSelect.setParams({
                    "boatId" : data
         });
         BoatSelect.fire();

    },

})

//
