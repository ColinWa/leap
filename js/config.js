/*global app */
'use strict';
app
.constant('appConfig', {
  municloudapiEndPoint: 'http://munipoiapp.herokuapp.com/api/',
  nearbysearchapiEndPoint : 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=',
  poiapiEndPoint : 'http://munipoiapp.herokuapp.com/api/pois',
  googledirectionapiEndPoint : 'http://maps.google.com/maps?saddr=',
  
  emmclinicapiEndPoint : 'http://wmdev.ekurhuleni.gov.za:5555/rest/EMMLocation/resources/getClinicData',
  emmvoterspersondetailsapiEndPoint : 'http://wmdev.ekurhuleni.gov.za:5555/rest/EMMPerson/resources/getVotersPersonDetails/',
  emmmetersapiEndPoint : 'http://wmdev.ekurhuleni.gov.za:5555/rest/EMMSuprema/resources/getMeterDetails/64010',
  emmcasehistoryapiEndPoint : 'http://wmdev.ekurhuleni.gov.za:5555/rest/EMMMobiApp/resource/getCaseHistory/{',
  emmvotingstatsapiEndPoint : 'http://wmdev.ekurhuleni.gov.za:5555/rest/EMMPerson/resources/getLatestResultIn',
  emmcreateincidentapiEndPoint : 'http://wmdev.ekurhuleni.gov.za:5555/rest/EMMMobiApp/resource/createIncidentReport/',
  emmcomplainsapiEndPoint : 'http://wmdev.ekurhuleni.gov.za:5555/rest/EMMMobiApp/resource/complaints/',
  emmregistercustomerapiEndPoint : 'http://wmdev.ekurhuleni.gov.za:5555/rest/EMMPerson/resources/customer/{',
  emmloginapiEndPoint : 'http://wmdev.ekurhuleni.gov.za:5555/rest/EMMPerson/resources/customerLogIn/{',
  emmpasswordrecoveryapiEndPoint : 'http://wmdev.ekurhuleni.gov.za:5555/rest/EMMPerson/resources/recoverPassword/{',
  emmretrievecomplaintapiEndPoint : 'http://wmdev.ekurhuleni.gov.za:5555/rest/EMMMobiApp/resource/retrieveComplaint',
  emmsupremaEndPoint : 'http://wmdev.ekurhuleni.gov.za:5555/rest/EMMSuprema/resources/getPrepaidVending/',
    
  notificationapiEndPoint : 'https://onesignal.com/api/v1/notifications'

  
})
.value('curSymbol', {
	symbol: 'R'
});
