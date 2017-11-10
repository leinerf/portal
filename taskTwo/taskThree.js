content = require('./taskTwo');

var conflict = function(eventOne,eventTwo){
    eventOneStart = new Date(eventOne.start);
    eventOneEnd = new Date(eventOne.end);
    eventTwoStart = new Date(eventTwo.start);
    eventTwoEnd = new Date(eventTwo.end);

    if( eventTwoStart <= eventOneStart  && eventTwoEnd >= eventOneEnd){
        return true
    }
    else if ( eventTwoStart <=eventOneStart &&  eventTwoEnd  <= eventOneStart ){
        return true
    }
    else if (eventTwoStart >= eventOneStart && eventTwoEnd >= eventOneEnd ){
        return true
    }
    else if( eventOneStart === eventTwoStart && eventOneEnd == eventTwoEnd){
        return true
    }
    else{
        return false
    }

}

var findConflict = function(oneEvent,eventList){
    result = []
    for(var i = 0; i < eventList.length;i++){
        if(conflict(oneEvent,eventList[i])){
            result.push(eventList[i].event)
        }
    }
    return result
}

var findAllConflict = function(eventList){
    var result = [];
    for(var i = 0; i < eventList.length;i++){
        result.push(findConflict(eventList[i],eventList));
    }
    return result;
}

console.log(findAllConflict(content));