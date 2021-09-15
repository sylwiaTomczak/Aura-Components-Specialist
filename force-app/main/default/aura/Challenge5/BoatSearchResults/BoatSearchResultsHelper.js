({
    onSearch : function(component,choosenboat,event,helper) {
       
        //przypisanie do zmiennej pobranej lodzi z klasy apexowej
        var action=component.get("c.getBoats");
        //ustawienie tej zmiennej z lodzią do przekazania parametrów
        action.setParams({"boatTypeId":component.get("v.boatTypeId")});

        //wywołanie zwrotne, zwraca akcje po stronie serwera 
        action.setCallback(this,function(response) {
            var state= response.getState();
            if(state==='SUCCESS'){ 
                //powiadamia użytkownika o zwróconej wartości z serwera, esle log o failu, na koniec wywołanie teh akcji w kolejce
                var temp=response.getReturnValue();
                component.set("v.boats",temp);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);   
    },
})