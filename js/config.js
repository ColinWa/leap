/*global app */
'use strict';
app
.constant('appConfig', {
  municloudapiEndPoint: 'http://munipoiapp.herokuapp.com/api/',
  nearbysearchapiEndPoint : 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=',
  poiapiEndPoint : 'http://munipoiapp.herokuapp.com/api/pois',
  googledirectionapiEndPoint : 'http://maps.google.com/maps?saddr=',
  
  emmclinicapiEndPoint : 'http://196.15.242.146:5555/rest/EMMLocation/resources/getClinicData',
  emmvoterspersondetailsapiEndPoint : 'http://196.15.242.146:5555/rest/EMMPerson/resources/getVotersPersonDetails/',
  emmmetersapiEndPoint : 'http://196.15.242.146:5555/rest/EMMSuprema/resources/getMeterDetails/64010',
  emmcasehistoryapiEndPoint : 'http://196.15.242.146:5555/rest/EMMMobiApp/resource/getCaseHistory/{',
  emmvotingstatsapiEndPoint : 'http://196.15.242.146:5555/rest/EMMPerson/resources/getLatestResultIn',
  emmcreateincidentapiEndPoint : 'http://196.15.242.146:5555/rest/EMMMobiApp/resource/createIncidentReport/',
  emmcomplainsapiEndPoint : 'http://196.15.242.146:5555/rest/EMMMobiApp/resource/complaints/',
  emmregistercustomerapiEndPoint : 'http://196.15.242.146:5555/rest/EMMPerson/resources/customer/{',
  emmloginapiEndPoint : 'http://196.15.242.146:5555/rest/EMMPerson/resources/customerLogIn/{',
  emmpasswordrecoveryapiEndPoint : 'http://196.15.242.146:5555/rest/EMMPerson/resources/recoverPassword/{',
  emmretrievecomplaintapiEndPoint : 'http://196.15.242.146:5555/rest/EMMMobiApp/resource/retrieveComplaint',
    
  notificationapiEndPoint : 'https://onesignal.com/api/v1/notifications'

  
})
.value('curSymbol', {
	symbol: 'R'
});