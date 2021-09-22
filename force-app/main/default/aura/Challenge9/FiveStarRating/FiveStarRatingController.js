({

    afterScriptsLoaded : function(component, event, helper) {
        //przypisanie elemetnu po zaladowaniu ocen
        var domEl = component.find("ratingarea").getElement();
        //pobranie wartosci
        var currentRating = component.get("v.value"); 
        //haczyk tylko do odczytu wcześniej ustawiony na false
        var readOnly = component.get("v.readonly"); 
        //ustawienie domyślnej maksymalnej wartosci oceny 
        var maxRating = 5;
        
        //info zwrtona o ilosci gwiazdek 
        var callback = function(rating) {
            component.set('v.value', rating);
        }
        
        //przypisanie wartosci do componentu 
        component.ratingObj = rating(domEl, currentRating, maxRating, callback, readOnly); 
    },
    
    onValueChange: function(component,event,helper) {
        //sprawdzenie czy component ma wartosci i jesli tak pobranie value 
        if (component.ratingObj) {
            var value = component.get('v.value');
            component.ratingObj.setRating(value,false);
        }
    }
})