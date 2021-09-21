public class BoatReviews {
    
    //widocznosc w komponentach lightning
    @AuraEnabled

    //pobranie wszytskich id boatów, któe były recenzowane
    public static List<BoatReview__c> getAll(Id boatId){
        //pobranie wszytskich danych o łodzi, która ma recenzje i umieszczenie ich w tablicy- 
        //tych wszzytskich recenzji o jednej lodzi
        List<BoatReview__c> boatReviews = [SELECT Id, Boat__c, Name, Comment__c, Rating__c, LastModifiedDate, CreatedDate, CreatedBy.Id, CreatedBy.Name, 
                        CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName FROM BoatReview__c WHERE Boat__c =: boatId];
        
        system.debug('SSSS - SSSS - BoatReviews__ '+ boatReviews);
        
        return boatReviews;
    }

}