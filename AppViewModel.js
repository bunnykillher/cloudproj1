var AppViewModel = function(makeLoginViewVisible) {

    
    var self= this;
    self.userName = ko.observable("");      
	self.userPassword = ko.observable(""); 
	self.isVisible = ko.observable(makeLoginViewVisible); 
    self.makeVisible = function() {
            self.isVisible(true);
            ViewModels.signupVM.isVisible(false);
            ViewModels.loginVM.isVisible(false);
    }
}
var myDataRef = new Firebase('https://cloudassignment1.firebaseio.com/');
    var temp = ["36.8°C", "37.4°C", "39.8°C"];
    var bloodPressure = ["120/80 mmHg", "140/90 mmHg", "90/60 mmHg"]
    var bloodSugarLevel = ["50 mg/dL", "170 mg/dL", "350 mg/dL"]
    var results = ['Your health is good! Keep it up', 'You have a slight fever.', 'Your sugar level is high. You need to watch your diet.']


    function getRandomIntInclusive(min, max) {
      var temp1 = 'Body Temp: ' + temp[Math.floor(Math.random() * (max - min + 1)) + min];
      var bp1 = 'Blood Pressure: ' + bloodPressure[Math.floor(Math.random() * (max - min + 1)) + min];
      var bsl1 = 'Blood Sugar: ' + bloodSugarLevel[Math.floor(Math.random() * (max - min + 1)) + min];
      var results1 = results[Math.floor(Math.random() * (max - min + 1)) + min];
      document.getElementById("temp").innerHTML = temp1;
      document.getElementById("BP").innerHTML = bp1;
      document.getElementById("BSL").innerHTML = bsl1;
      document.getElementById('results').innerHTML = results1;

      myDataRef.push({
        "temp": temp1,
        "bp": bp1,
        "bsl": bsl1,
        "results": results1
      });

    }
