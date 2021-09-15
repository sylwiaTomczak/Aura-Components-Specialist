({
    doInit : function(component, event, helper) {  
    },
   
    //metoda doSearch pobierająca argument
    doSearch : function(component, event, helper) {
        var params = event.getParam('arguments');
        //pobiera (params) i przypisuje wartośc v.boatTypeId z tego co zostało pobrane 
        //przekazanie tego przypisania do metody helpera jako parametr 
        component.set("v.boatTypeId", params.boatTypeId);
                   helper.onSearch(component);
    },

    onBoatSelect : function(component, event, helper){
        //pobranie parametru do zmiennej
        var event = event.getParam("boatId");
        //przypisanie do componentu id wybranej lodzi i wywolanie eventu 
        component.set("v.selectedBoatId", event);
    },
})
