app.controller('mycontroller',function($scope,server){

    server.ajax('./Data/data.json').then(function(data){
        var userInfo=''
        $scope.userInfo=data.data;
        console.log($scope.userInfo)

    })
})
app.controller('mycontroller1',function($scope){


})
app.controller('mycontroller2',function($scope){


})