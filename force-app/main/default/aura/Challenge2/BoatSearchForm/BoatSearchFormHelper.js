({
      //załadowanie typów łodzi i przypisanie wybranej do zmiennej 
      LoadBoatTypes : function(component, event) {
          //załądowane są z z metody klasy apexowej BoatTypeController
        var action=component.get("c.getBoatType");

       //przekazanie akcji ze strony serwera do klienta czyli typu wybranej lodzi do response i 
       //pobranie statusu czy się udało i jesli tak to set wybrany typ łodzi
       //jeśli nie to log i przekazanie state
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state==='SUCCESS'){
                component.set("v.BoatTypes", response.getReturnValue());
            } else{
                console.log("Fail with state: " +state);
            }
        });
        //dodaje akcje po stronie serwera do kolejki
        $A.enqueueAction(action);
    },
})
