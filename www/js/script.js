// var app = angular.module('noteit', ['ionic']);

// app.controller('expandCollapseCtrl', function ($scope) {
//         $scope.active = true;
//         $scope.active1 = true;
        
// });

<div class="row">
          <div class="col">
            // <!--<div class="panel panel-default" ng-controller="expandCollapseCtrl">
            //   <div class="panel panel-default">
            //     <div class="panel-heading collapsed" data-toggle="collapse" data-target="#collapseList">
            //       <h3 class="panel-title">
            //         Collapsible List Group
            //       </h3>
            //     </div>
            //     <ul id="collapseList" class="list-group collapse">
            //        <li class="list-group-item">Bootply</li>
            //        <li class="list-group-item">Triveo</li>
            //        <li class="list-group-item">Behance</li>
            //     </ul>-->
                  <div class="panel panel-default" id="accordion" >
                    <div role="tab" id="headingOne">
                         <a role="button" href="javascript:;" data-toggle="collapse" data-parent="#accordion" 
                            data-target="#collapseList" aria-expanded="false" aria-controls="collapseList">
                              Click me
                          </a>
                    </div>
                    // <!-- <div id="collapseOne" class="panel-collapse collapse" role="tabpanel"
                    //    aria-labelledby="headingOne">
                    //       Data
                    // </div> -->
                    <ul id="collapseList" class="list-group collapse">
                       <li class="list-group-item">Bootply</li>
                       <li class="list-group-item">Triveo</li>
                       <li class="list-group-item">Behance</li>
                    </ul>  
                  </div>
              </div>
             </div>