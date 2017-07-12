// Add Note
app.controller('LoginCtrl', function($scope){
  console.log('LoginCtrl loaded');
});

app.controller('SignupCtrl', function($scope){
  console.log('SignupCtrl loaded');
});

app.controller('ListenCtrl', function($scope){
  console.log('ListenCtrl loaded');
});

app.controller('expandCollapseCtrl', function ($scope) {
        $scope.active = true;
        $scope.active1 = true;
        
});

app.controller('MyCtrl', function($scope) {
  $scope.groups = [];
  for (var i=0; i<10; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
});

app.controller('PlayerCtrl', function($scope){
  console.log('PlayerCtrl loaded');
});

app.controller('DonorCtrl', function($scope){
  console.log('DonorCtrl loaded');
});

app.controller('ListCtrl', function($scope){
  console.log('ListCtrl loaded');
});

app.controller('RecordCtrl', function($scope){
  console.log('RecordCtrl loaded');
});

app.controller('AdminCtrl', function($scope){
  console.log('AdminCtrl loaded');

   $scope.groups = [];
  for (var l=0; l<10; l++) {
    $scope.groups[l] = {
      name: l,
      items: []
    };
    for (var k=0; k<3; k++) {
      $scope.groups[l].items.push(l + '-' + k);
    }
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
});

app.controller('VerifyCtrl', function($scope){
  console.log('VerifyCtrl loaded');
});