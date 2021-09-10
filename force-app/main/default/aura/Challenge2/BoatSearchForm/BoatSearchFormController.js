({
    //implementowanie akcji z BoatSearchForm z- {!c.}
    doInit:function(component, event, helper) {
        //odwołanie się do metody helpera
        helper.LoadBoatTypes(component, event);
        //przypisanie do zmiennej wybranej opcji z BoatSearchForm lub helpera 
        var seb = component.get("v.selectedBoatType");
        //log w konsoli jaka łodź wybrana 
        console.log("Selected boat: " +seb);
        //jeśli wybrana to sprawdzenie czy true
        // w if jeśli wybrana to set guzik new na true 
        var isEnabled=$A.get("e.force:createRecord");
        if(isEnabled) {
            component.set("v.newButton", true);
        }
    },

    //implementowanie akcji z BoatSearchForm z- {!c.}
    boatTypeChange:function(component, event, helper){
        //przypisanie do zmiennej jaka łodź jest wybrana poprzez pobranie wybranej wartości
        component.set("v.selectedBoatType", component.find("BoatTypes").get("v.value"));
    },

    //implementowanie akcji z BoatSearchForm z- {!c.}
    createBoat:function(component, event) {

        //tworzenie zmiennej przechpwującej Id wybranej łodzi
        var boatTypeId=component.get("v.selectedBoatType");
        //tworzenie rekordu z dwoma parametrami 
        var createRecordEvent=$A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName":"Boat__c",
            "defaultFieldValues":{'BoatType__c':boatTypeId}
        });
        //log w konsoli z id boata i wywołanie akcji
        console.log("boatTypeId" + boatTypeId);
        createRecordFire.fire();
    },
})
