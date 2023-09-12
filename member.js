function skillmember(){
    return{
        restrict:'E',
        templateUrl: 'Modules/skils/views/member.html',
        controller: 'skillsMemberController',
        controllerAs: 'Vm',
        bindToController: 'true',
        scope: {
            member: 'm'
        }

    };
}