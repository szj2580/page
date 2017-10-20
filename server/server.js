app.factory('server',function($http,$q){
    return{
        ajax:function(url){
            var def=$q.defer()
            $http({
                url:url
            }).then(function(data){
                def.resolve(data)
            })
            return def.promise
        }
    }
})