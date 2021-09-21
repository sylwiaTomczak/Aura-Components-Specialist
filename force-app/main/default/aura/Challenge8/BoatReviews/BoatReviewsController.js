({
    //odwołanie się z funkcją do helpera
	doInit : function(component, event, helper) {
		helper.onInit(component, event, helper);
	},
    
    //funckja przejścia po kliknięciu do informacji o osobie, która wystawiła receznje 
    onUserInfoClick : function(component, event, helper) {
        //pobranie i przypisanie do zmiennej atrybutu uder id
        var userId = event.target.getAttribute("data-userid");
        //wykorzystana wcześniej funckja przejścia po kliknię do rekordu sObject
        var redirectEvent = $A.get("e.force:navigateToSObject");

        //if true przypisanie do zmiennej parametrów user id do recordu i odpalenie funkcji 
        if(redirectEvent){
            redirectEvent.setParams({ "recordId": userid});
            redirectEvent.fire();
        }
    }
})