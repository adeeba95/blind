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