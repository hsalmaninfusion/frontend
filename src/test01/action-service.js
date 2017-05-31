
export const actionService = {
    service($http) {

        var url = '/test01/data.json';

        this.getActions = function () {
            return $http.get(url);
        };
    }
};



