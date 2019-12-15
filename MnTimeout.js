(function () { "use strict";


var MnTimeout = window["MnTimeout"] = function(iTimeDuration, cbFunc, iCheckInterval){
    if(iTimeDuration != null) this.iTimeDuration = iTimeDuration;
    if(cbFunc != null) this.cbTimeout = cbFunc;
    if(iCheckInterval != null) this.iCheckInterval = iCheckInterval;
    this.test = "Test";
    this.tsStarted = false;
    this.idInterval = false;
    this.cbInterval = false;
    console.log("Constuctor called.");
}

MnTimeout.prototype = {
    setIntervalCallBack: function(cbFunc){
        this.cbInterval = cbFunc;
    }
    ,start: function(){
        if(!this.iTimeDuration) return false;
        if(!this.cbTimeout) return false;
        this.tsStarted = Date.now();
        var me = this;
        this.idInterval = setInterval(function(){me.checkElapsed(me)}, this.iCheckInterval);
        console.log("start called.");
        return true;

    }
    ,checkElapsed: function(me){
        if(Date.now() - me.tsStarted > me.iTimeDuration){
            clearInterval(me.idInterval);
            console.log("checkElapsed stopped.");
            me.cbTimeout();
        }
        if(me.cbInterval) me.cbInterval();
        console.log("checkElapsed called.");
    }
    ,stop: function(){
        clearInterval(this.idInterval);
        console.log("stop called");

    }
    ,renew: function(){
        this.tsStarted = Date.now();
        console.log("renew called")
    }
}

})()