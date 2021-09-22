({

    //przekazanie funkcji do helpera
    doInit: function(component, event, helper) {
        helper.onInit(component);  
    },
   
   onSave:function(component, event, helper) {

    //przypisanie do komponentu winiku funkcji saveResult
        component.find("service").saveRecord(function(saveResult) {

            //sprawdzenie w zależności od wyniku
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                //jeśli rekord jest pomyślnie zapisany to przypisanie do zmiennej tymczasowej tymczasowy komunikat,
                //który jest wyświetlany
                var resultsToast = $A.get("e.force:showToast");
                if(resultsToast == undefined){
                    alert("The record was saved.");
                }else{
                    //w przeciwnym razie wyświetlany komunikat, e record już jest zapisany
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                    });
                    //uruchomienie i wywołanie funkcji z helpera- on resetuje i pozwala dodać nową recenzje
                    //, pobranie eventu przez component i uruchomienie
                    resultsToast.fire();
                    helper.onInit(component); 
                    component.getEvent('BoatReviewAdded').fire();
                }
                //w przypadku kiedy formularz jest nie kompletny wyświetla info
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("Device doesn't support drafts.");
                //w przypadku problemu z zapisem info plus pobranie errora przy probie zapisu
            } else if (saveResult.state === "ERROR") {
\                console.log('Problem saving contact, error: ' +
                            JSON.stringify(saveResult.error));
            } else {
                //zabezpieczenie tez przed inny problemem, który może wystąpić 
                console.log('Unknown problem, state: ' + saveResult.state +
                            ', error: ' + JSON.stringify(saveResult.error));
            }
        });     
    },

    //komunikat wyskakujący lub aler
   onRecordUpdated: function(component, event, helper){
    },
})