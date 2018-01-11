app.controller('FetchDataController', function ($scope, $http, DataService) {
    $scope.pro1 = '';
    $scope.pro2 = '';
    $scope.data = {
        pro1: {
            name: '',
            avatar: '',
            following: 0,
            followers: 0,
            stars: 0,
            repos: 0,
            forks: 0
        },
        pro2: {
            name: '',
            avatar: '',
            following: 0,
            followers: 0,
            stars: 0,
            repos: 0,
            forks: 0
        }
    }
    $scope.getData = function(){
        $http.get('https://api.github.com/users/'+$scope.pro1).success(function(data){
        $scope.data.pro1.name = data.name;
        $scope.data.pro1.avatar = data.avatar_url;
        $scope.data.pro1.following = data.following;
        $scope.data.pro1.followers = data.followers;
        $http.get('https://api.github.com/users/'+$scope.pro1+'/starred').success(function(starred){
            $scope.data.pro1.stars = starred.length;
            $http.get(data.repos_url).success(function(repos){
                $scope.data.pro1.repos = repos.length;
                repos.forEach(function(e){
                    $scope.data.pro1.forks += e.forks;
                    DataService.setPro1($scope.data.pro1);
                })
            })
        })
        
    })
    $http.get('https://api.github.com/users/'+$scope.pro2).success(function(data){
    $scope.data.pro2.name = data.name;
    $scope.data.pro2.avatar = data.avatar_url;
    $scope.data.pro2.following = data.following;
    $scope.data.pro2.followers = data.followers;
    $http.get('https://api.github.com/users/'+$scope.pro2+'/starred').success(function(starred){
        $scope.data.pro2.stars = starred.length;
        $http.get(data.repos_url).success(function(repos){
            $scope.data.pro2.repos = repos.length;
            repos.forEach(function(e){
                $scope.data.pro2.forks += e.forks;
                DataService.setPro2($scope.data.pro2);
            })
        })
    })
    
})
}
});

app.controller('DataController', function ($scope, DataService) {

    $scope.data = DataService.getData();
    // $scope.data = {
    //     pro1: {
    //         name: DataService.getData().pro1.name,
    //         avatar: DataService.getData().pro1.avatar,
    //         following: DataService.getData().pro1.following,
    //         followers: DataService.getData().pro1.followers,
    //         stars: DataService.getData().pro1.stars,
    //         repos: DataService.getData().pro1.repos,
    //         forks: DataService.getData().pro1.forks
    //     },
    //     pro2: {
    //         name: DataService.getData().pro2.name,
    //         avatar: DataService.getData().pro2.avatar,
    //         following: DataService.getData().pro2.following,
    //         followers: DataService.getData().pro2.followers,
    //         stars: DataService.getData().pro2.stars,
    //         repos: DataService.getData().pro2.repos,
    //         forks: DataService.getData().pro2.forks
    //     }
    // }
});