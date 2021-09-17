({
    init : function(component, event, helper) {
        //umożliwienie przejście do rekordu sobject określonego przez recordID w tym przypadku przypisuje s object do zmiennej
        //sprawdza czy ta zmienna jet true i przypisuje do componenctu display button true i pozwala na wyświetlenie 
        //danych obsługiwanych w metodzie niżej 
        var redirectToSObjectPageEvent = $A.get("e.force:navigateToSObject");
        if(redirectToSObjectPageEvent){
            component.set("v.displaybutton",true);
        }  
    },
   
    onFullDetails : function(component, event, helper) {
        var redirectToSObjectPageEvent = $A.get("e.force:navigateToSObject");
        //przypisanie do zmiennej obiektu boat
        var boatrecord = component.get("v.boat");
        //sprawdzenie jeśli łódź true czyli została wybrana i jednocześnie guzik full detail kliknięty(obsługa wyżej)
        //to przypisanie parametrów zawierających rekordID łodzi i odpalenie funkcji, który będzie wyświeltany jako slajd
        //czyli ostatecznie przekierowanie do domyślnej strony szczegółów łodzi
        if(boatrecord){
            redirectToSObjectPageEvent.setParams({
                "recordId" : boat.Id
            });
            redirectToSObjectPageEvent.fire();
        }
    }
})