function solution(arr){
    let scores = {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0
    }
    let drawCards = []
    let rounds = 0
    arr = [...arr, ...arr, ...arr, ...arr]
    // console.log(arr.length)
    while(rounds * 4 < 52){
        if(arr.length >= 4){
            for(i = 0; i < 4; i++){
                let randNum = arr[Math.floor(Math.random() * arr.length)]
                drawCards[i] = randNum
                let index = arr.indexOf(randNum)
                arr.splice(index, 1)
            }
            // remove duplicate cards to find out draw or win
            // if unique array length is less than 4, there must be duplicate cards and considered draw
            // score won't be increased
            let uniqueDraw = [...new Set(drawCards)]
            if(uniqueDraw.length == 4){
                let maxNum = Math.max(...drawCards)
                let maxIndex = drawCards.indexOf(maxNum)
                scores[maxIndex + 1] = scores[maxIndex + 1] + 1
            }
            
        }
        rounds += 1
    }
    let keysSorted = Object.keys(scores).sort(function(a,b){return scores[b]-scores[a]})
    
    let rank = 1
    for(i = 0; i < keysSorted.length; i++){
        if(i > 0 && scores[keysSorted[i-1]] !== scores[keysSorted[i]]){
            rank += 1
        }
        console.log(`player ${keysSorted[i]} won No. ${rank} rank with the points of ${scores[keysSorted[i]]}`)
    }
    console.log('No. of rounds', rounds)

}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13])