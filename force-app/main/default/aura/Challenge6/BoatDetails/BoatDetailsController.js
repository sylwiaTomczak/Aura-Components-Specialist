({
    //siły funkcyjne Lightning usługa transmisji danych, aby przeładować określony rekord.
    onBoatSelected : function(component, event, helper) {
        //wyświetla w konsoli wprowadzone dane łodzi
        console.log("entered boatdetails");
        //pobranie i przypisanie parametru boat do zmiennej tymczasowej
        var data=event.getParam('boat');
        //przypisanie do componentu zaciągniętego id klucza i wartosci boat id
        component.set("v.id", data.Id);
        //log z danymi otrzymanymi w boat detail i przypisana lodz 
        console.log("data received in boatdetails"+data);
        //uzyskanie id z service żeby przeładować rekod, 
        //przeładowaie usługi lightning po aktualizacji rekordu na serwerze
        component.find("service").reloadRecord();
    },
   
    onRecordUpdated :function(component, event, helper){
        //przeładowanie rekordu
     component.find("service").reloadRecord();  
    }
})
