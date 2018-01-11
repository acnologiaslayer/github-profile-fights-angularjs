app.service('DataService', function () {
    var data = {};
    return {
        getData: function () {
            return data;
        },
        setPro1: function (datum) {
            data.pro1 = {       
                name: datum.name,
                avatar: datum.avatar,
                following: datum.following,
                followers: datum.followers,
                stars: datum.stars,
                repos: datum.repos,
                forks: datum.forks,
                points: datum.followers * 3 + datum.forks * 3 + datum.stars + datum.repos * 5 - datum.following * 2
            }
        },
        setPro2: function (datum) {
            data.pro2 = {       
                name: datum.name,
                avatar: datum.avatar,
                following: datum.following,
                followers: datum.followers,
                stars: datum.stars,
                repos: datum.repos,
                forks: datum.forks,
                points: datum.followers * 3 + datum.forks * 3 + datum.stars + datum.repos * 5 - datum.following * 2
            }
        }
    }
})