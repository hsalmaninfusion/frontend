

export const equalizeHeight = {
    directive($timeout) {
        return {
                restrict: 'A',
                controller: function($scope){          
                var elements = [];
                this.addElement = function(element){    
                    elements.push(element);
              }
            
                // resize elements once the last element is found
                this.resize = function(){
                    $timeout(function(){      
                        // find the tallest
                        var tallest = 0, height;
                        angular.forEach(elements, function(el){
                            height = el[0].offsetHeight;
                    
                            if(height > tallest)
                                tallest = height;              
                        });
              
                        // resize
                        angular.forEach(elements, function(el){
                            el[0].style.height = tallest + 'px';
                        });
           
                    }, 0);
               };
            }
         };
    }
};

export const equalizeContainerHeight = {
    directive($timeout) {
        return {
                restrict: 'A',
                require: '^^equalizeHeight',
                link: function(scope, element, attrs, ctrl_for){
                        // add element to list of elements
                    ctrl_for.addElement(element);
                    if(scope.$last)
                        ctrl_for.resize();
                    }
                };
    }
};

