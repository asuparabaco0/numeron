const check = document.getElementById('numCheck');
const answer = document.getElementById('answerNum');
// let myAnswer = 222;
let cp = 111;
let first = 1;
let second = 1;
let third = 1;

let min = 102;
let max = 987;
//cp3ケタの数を作る
while (first === second || second === third || first === third) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    //各桁
    first = Math.floor(random / 1) % 10;
    second = Math.floor(random / 10) % 10;
    third = Math.floor(random / 100);
    cpNum = String(random);
    //配列
    let cp = [first, second, third];
    console.log(cp);
};
//1,10,100(cpNum)
const diSecond = second * 10;
const diThird = third * 100;

check.addEventListener('click', function () {
    //自分の回答を桁ごとに分ける
    const myAnswer = answer.value;
    const myFirst = Math.floor(myAnswer / 1) % 10;
    const mySecond = Math.floor(myAnswer / 10) % 10;
    const myThird = Math.floor(myAnswer / 100);
    // console.log(myFirst, mySecond, myThird);
    const myDiSe = mySecond * 10;
    const myDiTh = myThird * 100;
    let my = [myFirst, mySecond, myThird]
    console.log(my)
    
    //各桁を比較、条件分岐
        if (checkNum = myAnswer.match(/^\d{3}$/)){
            
            if(myFirst!==mySecond && mySecond!==myThird && myThird!==myFirst){
                let a = 0;
                let b = 0;  
                let eat;
                let bite;
                while(a<myAnswer.length){
                    a++
                    while(b<cpNum.length){
                        b++
                        if(my[a]===cp[b]){
                                eat = eat++;
                            } else if(myFirst === second){
                                bite = bite++;
                            } else if(myFirst === third){
                                bite = bite++;
                            } else if (mySecond === first){
                                bite = bite++;
                            } else if(mySecond === third){
                                bite = bite++;
                            } else if(myThird === first){
                                bite = bite++;
                            } else if (myThird === second){
                                bite = bite++;
                            }
                        }
                };
                alert(`${a}EAT, ${b}BITE`);
                if(eat === 3){
                    alert(`3EAT`);
                    alert(`正解です!`);
                }
            }else{
                alert('各桁の数が異なる数字を入力してください');
            }
            
        } else {
            alert('3文字で入力してください');
        }
        
    });
