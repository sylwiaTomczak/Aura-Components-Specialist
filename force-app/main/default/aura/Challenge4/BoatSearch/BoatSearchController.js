({
    onFormSubmit : function(component, event, helper) {  
        //uzyskanie atrubutu przekazanego do zdarzenia   
        var formData =event.getParam("formData");
        //zmienna tymczasowa z przekazanym componentem 
        var boatSearchResultsCmp = component.find("boatSearchResultsCmp");
        //sprawdzenie jeśli if jest true to searchuje po zmiennej z wybranymi boat id - celu zażadzania listą łodzi
        if(boatSearchResultsCmp){
            boatSearchResultsCmp.search(formData.boatTypeId);
        }
    }
})
