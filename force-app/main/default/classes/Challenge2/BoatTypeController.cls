public  class BoatTypeController {
    //adnotacja umożliwia obsługę metod i właściwości apex w lightning componentach
    @AuraEnabled
    //zwróci liste typów łodzi po id i nazwie 
    public static List<BoatType__c> BoatTypeController() {
        return [SELECT ID, Name FROM BoatType__c ORDER BY Name];

    }
}
