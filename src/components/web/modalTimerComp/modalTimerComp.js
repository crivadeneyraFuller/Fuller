  import pug from './modalTimerComp.pug'
  import * as moment from 'moment';

function Controller(appData, $scope, $rootScope, openApp) {
    const ctrl = this
  
    var date = moment(60 * 3 * 1000);
    var interval;
    var time;

    $scope.countdown_ = '03:00'

    inactivityTime()

    ctrl.$onInit = function(){
        ctrl.openApp = openApp[ctrl.app || appData.appName];
        ctrl.countdown = $scope.countdown_;
    }
    ctrl.ChronometerModal = function () {

        clearInterval(interval); 
        interval = setInterval(() => {
            
            clearTimeout(time);
            date = moment(date.subtract(1, 'seconds'))
            $scope.countdown_ = date.format('mm:ss')
            $scope.$apply();
            if ($scope.countdown_ == "00:00") {

                clearInterval(interval);
                location.href = 'https://portal-bi.fuller.com.mx:9090/#/'

            }
        },1000)
    };
    ctrl.Logout = function(){

        location.href = 'https://portal-bi.fuller.com.mx:9090/#/'

    }
    ctrl.KeepSesion = function(){

        $scope.countdown_ = '03:00'
        date = moment(60 * 3 * 1000);
        inactivityTime()
    }

    function inactivityTime() {
        
        clearInterval(interval); 

        window.onload = resetTimer;
  
        // DOM Events
        document.onmousemove = resetTimer;
        document.onkeypress = resetTimer;
    
        function logout() {
  
             $("#BtnModalChronometer").trigger("click");
            //
        }
    
        function resetTimer() {
            clearTimeout(time);
            time = setTimeout(logout, 420000)
            // 1000 milliseconds = 1 second
            // 420000 milliseconds = 420 second  (7 minutes)
            // 60000 milliseconds = 1 minute
        }
      };
  }
  
  const indicadoresDivisionComp = {
    template: pug,
    controller: ['appData', '$scope', '$rootScope', 'openApp', Controller]
  }
  
  export default indicadoresDivisionComp