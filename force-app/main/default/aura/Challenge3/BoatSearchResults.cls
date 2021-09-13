public with sharing class BoatSearchResults {

    //widocznośc w lightning componentach
    @AuraEnabled
    //zwraca listę typów łodzi
    public static List<BoatType__c> getBoatType() {
        //select po id i namach typów łodzi
        return [SELECT id, Name FROM BoatType__c];    
    }

    //metoda zwraca lustę łodzi, przyjmuje w parametrze id typów łodzi jako String
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {

        //sprawdzenie jeśli id boatów jest nulem lub lista jest pista to
        //zwraca id, name typ łodzim contatct i zdjęcie z obiektu łódź
        // w przeciwnym razie zwróci to samo z tego samego obiektu, ale jesli typ ldozi pokrywa się z id lodzi w zwróconej liście
        if(boatTypeId==null|| boatTypeId==''){
             return [SELECT id,Name,BoatType__c,Contact__c,Picture__c FROM Boat__c];  
         }else {
             return [SELECT id,Name,BoatType__c,Contact__c,Picture__c FROM Boat__c WHERE BoatType__c=:boatTypeId];       
         }
   
    }
}