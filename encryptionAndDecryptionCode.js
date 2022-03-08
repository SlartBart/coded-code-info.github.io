
function choices(op1, op2, op3, op4, op5){
    var probibility = Math.floor(Math.random()*5);
    if(probibility === 0){
        return op1;
    }else if (probibility === 1){
        return op2;
    }else if (probibility === 2){
        return op3;
    }else if (probibility === 3){
        return op4;
    }else {
        return op5;
    }
}
function encrypt(){
    var result = new FormData();
    result.append('toEncrypt', document.getElementById('text').value);
    var original = result.get('toEncrypt');
    var change = '' ;
    var digits = [];
    for (var i = 0; i < original.length; i++){
        if (original[i] ==='a' || original[i] === 'A'){
            var a = choices('2375','7347','6935','9987','2546');
            digits.push(a);
        }else if (original[i] === 'b' || original[i] === 'B'){
            var b = choices('7501','4299','4849','9142','8271');
            digits.push(b);
        }else if (original[i] === 'c' || original[i] === 'C'){
            var c = choices('7962','4451','2717','4357','2837');
            digits.push(c);
        }else if (original[i] === 'd' || original[i] === 'D'){
            var d = choices('5767','4987','3460','8713','4475');
            digits.push(d);
        }else if (original[i] === 'e' || original[i] === 'E'){
            var e = choices('3891','1859','1966','8947','5220');
            digits.push(e);
        }else if (original[i] === 'f' || original[i] === 'F'){
            var f = choices('6618','4626','4115','3832','9080');
            digits.push(f);
        }else if (original[i] === 'g' || original[i] === 'G'){
            var g = choices('1569','5172','6365','6459','0194');
            digits.push(g);
        }else if (original[i] === 'h' || original[i] === 'H'){
            var h = choices('9842','4829','2116','1238','6267');
            digits.push(h);
        }else if (original[i] === 'i' || original[i] === 'I'){
            var I = choices('5906','9377','1938','6164','5582');
            digits.push(I);
        }else if (original[i] === 'j' || original[i] === 'J'){
            var j = choices('4761','5954','2308','1764','4978');
            digits.push(j);
        }else if (original[i] === 'k' || original[i] === 'K'){
            var k = choices('3706','8153','6031','4142','7000');
            digits.push(k);
        }else if (original[i] === 'l' || original[i] === 'L'){
            var l = choices('3114','1684','0905','0069','2183');
            digits.push(l);
        }else if (original[i] === 'm' || original[i] === 'M'){
            var m = choices('3746','9562','1751','3806','5424');
            digits.push(m);
        }else if (original[i] === 'n' || original[i] === 'N'){
            var n = choices('3519','4845','0018','2347','5168');
            digits.push(n);
        }else if (original[i] === 'o' || original[i] === 'O'){
            var o = choices('6510','4526','3471','3356','4616');
            digits.push(o);
        }else if (original[i] === 'p' || original[i] === 'P'){
            var p = choices('4730','7468','5866','3792','7104');
            digits.push(p);
        }else if (original[i] === 'q' || original[i] === 'Q'){
            var q = choices('7540','8489','8903','4681','4490');
            digits.push(q);
        }else if (original[i] === 'r' || original[i] === 'R'){
            var r = choices('5366','4611','5878','2784','2469');
            digits.push(r);
        }else if (original[i] === 's' || original[i] === 'S'){
            var s = choices('8710','6949','7652','6592','7879');
            digits.push(s);
        }else if (original[i] === 't' || original[i] === 'T'){
            var t = choices('3872','4733','0628','6590','9950');
            digits.push(t);
        }else if (original[i] === 'u' || original[i] === 'U'){
            var u = choices('6550','7924','8704','9475','4159');
            digits.push(u);
        }else if (original[i] === 'v' || original[i] === 'V'){
            var v = choices('1156','6342','4385','9576','7524');
            digits.push(v);
        }else if (original[i] === 'w' || original[i] === 'W'){
            var w = choices('1899','1197','5620','5015','9540');
            digits.push(w);
        }else if (original[i] === 'x' || original[i] === 'X'){
            var x = choices('3416','7122','2756','6453','5268');
            digits.push(x);
        }else if (original[i] === 'y' || original[i] === 'Y'){
            var y = choices('6477','7893','0796','3712','7634');
            digits.push(y);
        }else if (original[i] === 'z' || original[i] === 'Z'){
            var z = choices('9656','5070','9278',/* mom input */'5433',/* pj input */'6863');
            digits.push(z);
        }else { // reminder, should only happen in case of space or punctuation
            digits.push(original[i]) ;

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
    for(var i = 0; i < input.length; i++){
        if(input[i]==='2375'||input[i]==='7347'||input[i]==='6935'||input[i]==='9987'||input[i]==='2546'){
            output += 'a';
        }else if (input[i]==='7501'||input[i]==='4299'||input[i]==='4849'||input[i]==='9142'||input[i]==='8271'){
            output += 'b';
        }else if (input[i]==='7962'||input[i]==='4451'||input[i]==='2717'||input[i]==='4357'||input[i]==='2837'){
            output += 'c';
        }else if (input[i]==='5767'||input[i]==='4987'||input[i]==='3460'||input[i]==='8713'||input[i]==='4475'){
            output += 'd';
        }else if (input[i]==='3891'||input[i]==='1859'||input[i]==='1966'||input[i]==='8947'||input[i]==='5220'){
            output += 'e';
        }else if (input[i]==='6618'||input[i]==='4626'||input[i]==='4115'||input[i]==='3832'||input[i]==='9080'){
            output += 'f';
        }else if (input[i]==='1569'||input[i]==='5172'||input[i]==='6365'||input[i]==='6459'||input[i]==='0194'){
            output += 'g';
        }else if (input[i]==='9842'||input[i]==='4829'||input[i]==='2116'||input[i]==='1238'||input[i]==='6267'){
            output += 'h';
        }else if (input[i]==='5906'||input[i]==='9377'||input[i]==='1938'||input[i]==='6164'||input[i]==='5582'){
            output += 'i';
        }else if (input[i]==='4761'||input[i]==='5954'||input[i]==='2308'||input[i]==='1764'||input[i]==='4978'){
            output += 'j';
        }else if (input[i]==='3706'||input[i]==='8153'||input[i]==='6031'||input[i]==='4142'||input[i]==='7000'){
            output += 'k';
        }else if (input[i]==='3114'||input[i]==='1684'||input[i]==='0905'||input[i]==='0069'||input[i]==='2183'){
            output += 'l';
        }else if (input[i]==='3746'||input[i]==='9562'||input[i]==='1751'||input[i]==='3806'||input[i]==='5424'){
            output += 'm';
        }else if (input[i]==='3519'||input[i]==='4845'||input[i]==='0018'||input[i]==='2347'||input[i]==='5168'){
            output += 'n';
        }else if (input[i]==='6510'||input[i]==='4526'||input[i]==='3471'||input[i]==='3356'||input[i]==='4616'){
            output += 'o';
        }else if (input[i]==='4730'||input[i]==='7468'||input[i]==='5866'||input[i]==='3792'||input[i]==='7104'){
            output += 'p';
        }else if (input[i]==='7540'||input[i]==='8489'||input[i]==='8903'||input[i]==='4681'||input[i]==='4490'){
            output += 'q';
        }else if (input[i]==='5366'||input[i]==='4611'||input[i]==='5878'||input[i]==='2784'||input[i]==='2469'){
            output += 'r';
        }else if (input[i]==='8710'||input[i]==='6949'||input[i]==='7652'||input[i]==='6592'||input[i]==='7879'){
            output += 's';
        }else if (input[i]==='3872'||input[i]==='4733'||input[i]==='0628'||input[i]==='6590'||input[i]==='9950'){
            output += 't';
        }else if (input[i]==='6550'||input[i]==='7924'||input[i]==='8704'||input[i]==='9475'||input[i]==='4159'){
            output += 'u';
        }else if (input[i]==='1156'||input[i]==='0342'||input[i]==='4385'||input[i]==='9576'||input[i]==='7524'){
            output += 'v';
        }else if (input[i]==='1899'||input[i]==='1197'||input[i]==='5620'||input[i]==='5015'||input[i]==='9540'){
            output += 'w';
        }else if (input[i]==='3416'||input[i]==='7122'||input[i]==='2756'||input[i]==='6453'||input[i]==='5268'){
            output += 'x';
        }else if (input[i]==='6477'||input[i]==='7893'||input[i]==='0796'||input[i]==='3712'||input[i]==='7634'){
            output += 'y';
        }else if (input[i]==='9656'||input[i]==='5070'||input[i]==='9278'||input[i]==='5433'||input[i]==='6863'){
            output += 'z';
        }else {
            output += input[i];
            }
    }
    alert (output);
}