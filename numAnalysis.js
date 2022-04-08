
function numAnalysis(){
    var result = new FormData();
    result.append('data',document.getElementById('number').value);
    var data = result.get('data');
    var value=active();
    if(value==='divisible'){
        var allDivide=[];
        for(var i = 1; i <= data; i++){
            if(data % i === 0){
                allDivide.push(i);
            }
        }
        alert("Your number's factors are: " + allDivide);
    }else if(value==='primeFactor'){
        var factorForm = {};
        
        for(var i = 2; i <= data; i++){
            var iCheck = [];
            for(var a = 1; a<=i; a++){
                if(i%a === 0){
                    iCheck.push(a);
                }
            }
            if(iCheck[0]===1&&iCheck[1]===i){
                factorForm[i]=0;
                for(var x=i; data%x===0; data/=x){
                    factorForm[x]+=1;
                }
            }
        }
        var outputString = 'Prime factor form is:';
        var repeat=false;
        for(var key in factorForm){
            if(factorForm[key]!==0){
            if(repeat){outputString+=" * ";}
            outputString += key + "^" + factorForm[key];
            repeat=true;
        }
        }
        alert(outputString);
    }else if(value==='findRoot'){
        var answer='';
        for(var i = 2; i <= data; i++){
            for(var a = 2; Math.pow(i,a) <= data; a++){
                if(Math.pow(i,a) == data){
                    answer += i + '^' + a + ', ';
                }
            }
        }
        alert(answer);
    }else if(value==='LCD'){
        var frac={
            'f1':{
                'num': undefined,
                'denom': undefined
            },
            'f2':{
                'num':undefined,
                'denom':undefined
            },
            id:{
                'a':false,
                'b':false,
                'c':false
            }
        } 
        var a=''; b=''; c=''; d='';
        for(var i = 0; i<data.length; i++){
            if(frac.id.a !== true){
                if(data[i]==='/'){
                    frac.id.a = true;
                }else{
                    a+=data[i];
                }
            }else{frac.f1.num=a;}
            if(frac.id.a&&frac.id.b!==true){
                if(data[i]===':'){
                    frac.id.b=true;
                }else if(data[i]!=='/'){
                    b+=data[i];
                }
            }else{frac.f1.denom=b;}
            if(frac.id.a&&frac.id.b&&frac.id.c!==true){
                if(data[i]==='/'){
                    frac.id.c=true;
                }else if(data[i]!==':'){
                    c+=data[i];
                }
            }else{frac.f2.num=c;}
            if(frac.id.a&&frac.id.b&&frac.id.c){
                if(data[i]!=='/'){
                d+=data[i];
                frac.f2.denom=d;
                }
            }
        }
        var solved=false;
        var x=[]; y=[];
        var z=[];
        for(var i=1; solved!==true; i++){
            x.push(frac.f1.denom*i);
            y.push(frac.f2.denom*i);
            for(var xVal=0; xVal<x.length; xVal++){
                for(var yVal=0; yVal<y.length; yVal++){
                    if(x[xVal]===y[yVal]){
                        z.push(x[xVal]);
                        z.push(xVal+1);
                        z.push(yVal+1);
                        solved=true;
                    }
                }
            }
        }
        alert('your new fractions are: '+(z[1] * frac.f1.num)+'/'+z[0]+' and '+(z[2] * frac.f2.num)+'/'+z[0]);
    }else if(value==="simplify"){
        var a=''; b=''; c='';
        var checks={
            'beta':false,
            'gamma':false,
        }
        for(var i = 0; i<data.length; i++){
            if(data[i]===','){checks.beta=true;}
            if(data[i]==='('){checks.gamma=true;}
            if(data[i]!==','&&data[i]!=='('&&data[i]!==')'){
                if(checks.gamma){
                    c+=data[i];
                }else if(checks.beta){
                    b+=data[i];
                }else{
                    a+=data[i];
                }
            }

        }
        for(var i = 2; i<=c; i++){
            while(c%Math.pow(i,b)===0&&c>1){
                a*=i;
                c/=Math.pow(i,b);
            }
        }
        alert(a + "*" + b + "√(" + c + ")");
    }else if(value==='radExp'){
        var a=''; b=''; c=''; d='';
        var checks={
            'alpha':false,
            'beta':false,
            'gamma':false,
        }
        for(var i = 0; i<data.length; i++){
            if(data[i]===','){checks.alpha=true;}
            if(data[i]==='('){checks.beta=true;}
            if(data[i]==='^'){checks.gamma=true;}
            if(data[i]!==','&&data[i]!=='('&&data[i]!==')'&&data[i]!=='^'){
                if(checks.gamma){
                    d+=data[i];
                }else if(checks.beta){
                    c+=data[i];
                }else if(checks.alpha){
                    b+=data[i];
                }else{a+=data[i];}
            }
        }
        alert((Math.pow(a,b)*c) + "^" + '(' + d + '/' + b + ')')
    }

   
    
}
function active(){
    var isChecked={
        'divisible': "e.g. 100",
        'primeFactor': "e.g. 100",
        'findRoot': "e.g. 100",
        'LCD': "give two fractions as a/b:c/d", 
        'simplify': "coefficient, radical(radicand)",
        'radExp':"coefficient, radical(radicand^power)",
    }
    for(var key in isChecked){
        if(document.getElementById(key).checked){
            document.getElementById('number').placeholder=isChecked[key];
            return key;
        }
    }

}
