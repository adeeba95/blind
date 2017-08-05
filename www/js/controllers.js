

app.controller('SpeechListenCtrl', function($rootScope, $scope, Pubnub) {
  $scope.theText = "Listener";
  $scope.sayIt = function () {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance($scope.theText));
  };
});

app.controller('SpeechDonorCtrl', function($rootScope, $scope, Pubnub) {
  $scope.theText = "Donor";
  $scope.sayIt = function () {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance($scope.theText));
  };
});

app.controller('SpeechAdminCtrl', function($rootScope, $scope, Pubnub) {
  $scope.theText = "Administration";
  $scope.sayIt = function () {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance($scope.theText));
  };
});

app.controller('ListenCtrl', function($scope,firebaseService){
  console.log('ListenCtrl loaded');

    console.log(firebaseService.all);

  $scope.all_data = firebaseService.all;
});

app.controller('SpeechListBookCtrl', function($rootScope, $scope, Pubnub) {
  $scope.theText = "Administration";
  $scope.sayIt = function () {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance($scope.theText));
  };
});

app.controller('Chapter1Ctrl', function($rootScope, $scope, Pubnub) {
  $scope.theText = "Chapter 1";
  $scope.sayIt = function () {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance($scope.theText));
  };
});

app.controller('Chapter2Ctrl', function($rootScope, $scope, Pubnub) {
  $scope.theText = "Chapter 2";
  $scope.sayIt = function () {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance($scope.theText));
  };
});

app.controller('Chapter3Ctrl', function($rootScope, $scope, Pubnub) {
  $scope.theText = "Chapter 3";
  $scope.sayIt = function () {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance($scope.theText));
  };
});

app.controller('PlayerCtrl', function($scope,ngAudio){
  console.log('PlayerCtrl loaded'); 
  $scope.audio = ngAudio.load('songs/chapter-1.mp3');
});

app.controller('Player1Ctrl', function($scope,ngAudio){
  console.log('Player1Ctrl loaded'); 
  $scope.audio = ngAudio.load('songs/Boom.mp3');
});

app.controller('Player2Ctrl', function($scope,ngAudio){
  console.log('Player2Ctrl loaded'); 
  $scope.audio = ngAudio.load('songs/Funny.mp3');
});

app.controller('PlayCtrl', function($rootScope, $scope, Pubnub) {
  $scope.theText = "Play or pause the audio";
  $scope.sayIt = function () {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance($scope.theText));
  };
});

app.controller('StopCtrl', function($rootScope, $scope, Pubnub) {
  $scope.theText = "Stop the audio";
  $scope.sayIt = function () {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance($scope.theText));
  };
});

app.controller('DonorCtrl', function($scope,firebaseService){
  console.log('DonorCtrl loaded');
  console.log(firebaseService.all);

  $scope.all_data = firebaseService.all;
  $scope.data = {
    speechText: ''
  };
  $scope.speakText = function() {
    TTS.speak({
           text: $scope.data.speechText,
           locale: 'es-ES',
           rate: 0.75
       }, function () {
           console.log('Data sent');
       }, function (reason) {
           // Handle the error case
       });
  };

});

app.controller('ListDonorCtrl', function($scope){
  console.log('ListDonorCtrl loaded');
  // var id=$stateParams.id;
  // $scope.data= firebaseService.get(id);
});

app.controller('ListListenCtrl', function($scope){
  console.log('ListListenCtrl loaded');
  // var id=$stateParams.id;
  // $scope.ntahmende= firebaseService.get(id).chapter;
  // console.log($scope.ntahmende);
});

app.controller('RecordCtrl', function($scope){

  console.log('RecordCtrl loaded');
});

app.controller('AdminCtrl', function($scope,firebaseService){
  console.log('AdminCtrl loaded');

  console.log(firebaseService.all);

  $scope.all_data = firebaseService.all;


  //  $scope.groups = [];
  // for (var l=0; l<10; l++) {
  //   $scope.groups[l] = {
  //     name: l,
  //     items: []
  //   };
  //   for (var k=0; k<3; k++) {
  //     $scope.groups[l].items.push(l + '-' + k);
  //   }
  // }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  // $scope.toggleGroup = function(group) {
  //   if ($scope.isGroupShown(group)) {
  //     $scope.shownGroup = null;
  //   } else {
  //     $scope.shownGroup = group;
  //   }
  // };
  // $scope.isGroupShown = function(group) {
  //   return $scope.shownGroup === group;
  // };
});

app.controller('VerifyCtrl', function($scope){
  console.log('VerifyCtrl loaded');
});

// app.controller('AddCtrl', function($scope,firebaseService){
//   console.log('AddCtrl loaded');

//   //on click add
//   $scope.add = function(newItem){

//   }
// });

app.controller('AddCtrl', function($scope,$firebaseArray, $state , firebaseService){
  $scope.saveTitle = function(){
    $scope.newTitle = firebaseService.all;
    $scope.newTitle.$add({
      title: $scope.title.title,
      chapter: $scope.title.chapter,
      publisher: $scope.title.publisher,
      author: $scope.title.author
    });
    $state.go('donor');
  }
});