({
	onInit : function(component, event, helper) {
        //pobranie i przypisanie lodzi
        //pobranie i przypisanie z klasy apexowej selecta ppo wszytskich info o lodzi o konkretnym id 
        //przypisaie parametrow id do id lodzi
        //wyswietlenie loga z infomacja o konketnej 
		var boat = component.get("v.boat");
        var action = component.get("c.getAll");
        action.setParams({"boatId": boat.Id});
        console.log('BoatReview.Helper.OnInit: boatId -- '+ boat.Id);
        
        //callback- ywołanie zwrotne, które jest wykonywane po
        // zwraca akcja po stronie serwera
        action.setCallback(this, function(response){
            //pobranie statusu
            var state = response.getState();
            //sprawdzenie i w zależności od statusu
            switch(state){
                case "SUCCESS":
                    //dukces to pobranie zwróconej wartości i wyświetlenie jej w logach, 
                    //przypisaie też dodanej recenzji do konkretnej lodzi przerwanie pętli
                    var boatReviews = response.getReturnValue();
                    console.log('boatReviews---- '+ boatReviews);
                    component.set("v.boatReviews", boatReviews);
                    break;
                    
                    ///w reszcie tylko log z informacją i przerwanie pętli
                case "INCOMPLETE":
                    console.log('INCOMPLETE');
                    break;
                    
                case "ERROR":
                    console.log(response.getError());
                    break;
            }
            
        });
        //odpalenie funkcji 
        $A.enqueueAction(action);
	}
})