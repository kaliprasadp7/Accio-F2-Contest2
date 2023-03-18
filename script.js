setTimeout(function OpeningCeremony() {
    console.log("Let the games begin");
    let score = {
        red: 0,
        blue: 0,
        green: 0,
        yellow: 0
    };
    console.log(score);

    setTimeout(function Race100M(OpeningCeremony) {
        console.log("previous score", score);

        let min = 10, max = 15;
        let timeRed = Math.floor(Math.random() * (max - min + 1) + min);
        let timeBlue = Math.floor(Math.random() * (max - min + 1) + min);
        let timeGreen = Math.floor(Math.random() * (max - min + 1) + min);
        let timeYellow = Math.floor(Math.random() * (max - min + 1) + min);

        let arr = [timeRed, timeBlue, timeGreen, timeYellow];
        console.log(timeRed, timeBlue, timeGreen, timeYellow);
        var mini = Infinity,
            secondMini = Infinity;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < mini) {
                secondMini = mini;
                mini = arr[i];
            } else if (arr[i] < secondMini) {
                secondMini = arr[i];
            }
        }

        if(timeRed==mini || timeRed==secondMini){
            if(timeRed==mini){
                score.red += 50;
            }
            else{
                score.red += 25;
            }
        }
        if(timeBlue==mini || timeBlue==secondMini){
            if(timeBlue==mini){
                score.blue += 50;
            }
            else{
                score.blue += 25;
            }
        }
        if(timeGreen==mini || timeGreen==secondMini){
            if(timeGreen==mini){
                score.green += 50;
            }
            else{
                score.green += 25;
            }
        }
        if(timeYellow==mini || timeYellow==secondMini){
            if(timeYellow==mini){
                score.yellow += 50;
            }
            else{
                score.yellow += 25;
            }
        }

        console.log('Smallest number: ' + mini);
        console.log('Second smallest number: ' + secondMini);
        console.log("updated score in Race100M: ", score);

        setTimeout(function LongJump() {
            console.log("previous score", score);
            var keys = Object.keys(score);
            var randomKey = keys[Math.floor(Math.random() * keys.length)];
            console.log("Random key is:", randomKey);
            score[randomKey] = 150;
            console.log("updated score in LongJump:", score);

            function HighJump() {
                console.log("previous score", score);
                let person = prompt("Please enter your name:", "red");
                if (person == null || person == "") {
                    console.log("Event was cancelled");
                    console.log("Updated score in HighJump:", score);
                } else {
                    score[person] += 100;
                    console.log("Updated score in HighJump:", score);
                }

                setTimeout(function AwardCeremony(){
                        console.log("AwardCeremony", score);
                }, 0);
            }
            HighJump();
        }, 2000);
    }, 3000);
}, 1000);