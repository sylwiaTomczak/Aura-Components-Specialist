({
    onInit: function(component) {
        //przypisanie do komponentu nowego rekordu z nulllowym id z obiektu recenzje 
        component.find("service").getNewRecord(
            "BoatReview__c", 
            null,            
            false,   
            
            //funkcja zwrotna haczyk ze zmiennymi do erroru i i recenzji podstawowej
            $A.getCallback( function() {
                var rec=component.get("v.simpleboatReview");
                var error=component.get("v.recordError");
                //sprawdzenie czy error jest lub rec jest puste jesli tak to error
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }
                else { 
                    //jeśli są pełne to pobranie id boata i przypisani do rekordu i odpalenie nowej recenzji danej lodzi
                    component.set("v.boatReview.Boat__c", component.get("v.boat.Id"));
                    console.log("Record template initialized: " + rec.apiName);
                }
            })
        );
    } 
})