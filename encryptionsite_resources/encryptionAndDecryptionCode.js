
function choices(array){
    var probibility = Math.floor(Math.random()*array.length);
    return array[probibility];
    
}

var theKey = {
    'aA':['2375','7347','6935','9987','2546'],
    'bB':['7501','4299','4849','9142','8271'],
    'cC':['7962','4451','2717','4357','2837'],
    'dD':['5767','4987','3460','8713','4475'],
    'eE':['3891','1859','1966','8947','5220'],
    'fF':['6618','4626','4115','3832','9080'],
    'gG':['1569','5172','6365','6459','0194'],
    'hH':['9842','4829','2116','1238','6267'],
    'iI':['5906','9377','1938','6164','5582'],
    'jJ':['4761','5954','2308','1764','4978'],
    'kK':['3706','8153','6031','4142','7000'],
    'lL':['3114','1684','0905','0069','2183'],
    'mM':['3746','9562','1751','3806','5424'],
    'nN':['3519','4845','0018','2347','5168'],
    'oO':['6510','4526','3471','3356','4616'],
    'pP':['4730','7468','5866','3792','7104'],
    'qQ':['7540','8489','8903','4681','4490'],
    'rR':['5366','4611','5878','2784','2469'],
    'sS':['8710','6949','7652','6592','7879'],
    'tT':['3872','4733','0628','6590','9950'],
    'uU':['6550','7924','8704','9475','4159'],
    'vV':['1156','6342','4385','9576','7524'],
    'wW':['1899','1197','5620','5015','9540'],
    'xX':['3416','7122','2756','6453','5268'],
    'yY':['6477','7893','0796','3712','7634'],
    'zZ':['9656','5070','9278','5433','6863'],
}

function encrypt(){
    var result = new FormData();
    result.append('toEncrypt', document.getElementById('text').value);
    var original = result.get('toEncrypt');
    var change = '' ;
    digits = [];
    var notSolved = true;
    for(var i = 0; i < original.length; i++){
        notSolved = true;
        for(var letter in theKey){
            if(original[i] === letter[0]||original[i] === letter [1]){
                var solve = choices(theKey[letter]);
                digits.push(solve);
                notSolved = false;
            }
        }
        if(notSolved){
            digits.push(original[i]);
        }
    }
    
    for(var i = 0; i < digits.length; i++){
        var trueCode = Math.floor(Math.random()*4);
        if(digits[i].length === 4){
            if (trueCode === 0){
                change += '%';
                change += digits[i][3] + digits[i][2] + digits[i][1] + digits[i][0];
            }else if (trueCode === 1){
                change += '-';
                for(var a = 0; a < digits[i].length; a++){
                    change += Math.abs((digits[i][a]-9));
                }
            }else if (trueCode == 2){
                change += '/'
                var a = digits[i][0];
                var b = digits[i][1];
                var c = digits[i][2];
                var d = digits[i][3];
                change += b;
                change += a;
                change += d;
                change += c;
            }else {
                change += '+';
                change += digits[i];
            }
        }else {change += digits[i];}
    }
    alert (change);
}

function decrypt(){
    var nonsense = new FormData();
    nonsense.append('toDecrypt', document.getElementById('what').value);
    var impossible = nonsense.get('toDecrypt');
    var input = [];
    var output = '';
    
    for (var i = 0; i < impossible.length; i+= 0){
        
        if(impossible[i] === '%'){
            var b1 = '';
            for(var a = i + 4; a > i; a--){
                b1 += impossible[a];
            }
            input.push(b1);
            i += 5;
        } else if(impossible[i] === '-'){
            var b2 = '';
            for(var a = i + 1; a < i + 5; a++){
                b2 += Math.abs((impossible[a]-9));
            }
            input.push(b2);
            i += 5;
        } else if(impossible[i] === '/'){
            var b3 = '';
            b3 += impossible[i + 2];
            b3 += impossible[i + 1];
            b3 += impossible[i + 4];
            b3 += impossible[i + 3];
            input.push(b3);
            i += 5;
        } else if (impossible[i] === '+'){
            var b4 = '';
            for(var a = i + 1; a < i + 5; a++){
                b4+=impossible[a];
            }
            input.push(b4);
            i += 5;
        }else {
            input.push(impossible[i]);
            i++;
        }
    }
    var check = true;
    for(var i = 0; i < input.length; i++){
        check = true;
        for(var x in theKey){
            for(var y = 0; y < theKey[x].length; y++){
                if(theKey[x][y] === input[i]){
                    output += x[0];
                    check = false;
                }
            }
        }
        if(check){
            output += input[i];
        }
    }
    alert (output);
}
