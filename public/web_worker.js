self.onmessage = function (event) {
    var answer = event.data
    var answer_for_webworker = 0
    
    
    for(let i = answer; i < 1000000000; i++){
    answer_for_webworker += i 
    }
    this.postMessage(answer_for_webworker)
}

