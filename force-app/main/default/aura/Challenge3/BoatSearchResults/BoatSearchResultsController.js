({
    doInit : function(component, event, helper) {  
    },
   
    //metoda doSearch pobierająca argument
    doSearch : function(component, event, helper) {
        var params = event.getParam('arguments');
        //pobiera (params) i przypisuje wartośc v.boatTypeId z tego co zostało pobrane 
        //przekazanie tego przypisania do metody helpera jako parametr 
        component.set("v.boatTypeId", params.boatTypeId);
                   helper.onSearch(component);
    },
})
