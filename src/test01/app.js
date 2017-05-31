
import './app.scss';

export const test01 = {
    template: require('./app.html'),
    controller($scope, actionService) {

        var actionAlignCss = "col-md-offset-2 col-sm-offset-2 col-lg-offset-2" ;
        var oneActionAlignCenterCss  =  "col-md-offset-4 col-sm-offset-4 col-lg-offset-4" ; 
        
        $scope.data = [] ;

        $scope.applyColumnClasses = function(index)
        {
            if ($scope.data.length == 1)
            {
                return  oneActionAlignCenterCss ;
            }
            //append the class that align all the columns to the left if count is  5
            else if ($scope.data.length == 5)
            {
                 return actionAlignCss + "  action-left-align" ;
            }
            else
            {              
                if ( index % 2 == 0) 
                      return actionAlignCss  ;               
            }
        }

        
        var init = function()
        {
            //we can use the success and error functions (to catch any exceptions)
            actionService.getActions().then((response) =>
            {
                   $scope.data = response.data ;
            });
        }

        init();

    }
};


