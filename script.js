        let value= "";
        document.getElementById('screen').innerHTML = value;
            
        let plus = false;
        let minus = false;
        let multi = false;
        let devide = false;

        // var plus = false;
        // var minus = false;
        // var multi = false;
        // var devide = false;

        function fReset(){
            location.reload();
        }

        //function applied when + - * / = button pressed
        function fsign(x){
            if(plus || minus || multi || devide){
                value = calculate(value);
                plus = false;
                minus = false;
                multi = false;
                devide = false;
            }
            if(x == '+'){
                plus = true;
                value = value.concat("+");
            }else if(x == '-'){
                minus = true;
                value = value.concat("-");
            }
            else if(x == 'x'){
                multi = true;
                value = value.concat("x");
            }
            else if(x == '/'){
                devide = true;
                value = value.concat("/");
            }
            document.getElementById('screen').innerHTML = value;
        }
    
    // funcation that actually calculate values
        function calculate(str){
            let ret;
            let arr = [];
            if(plus){
                arr = str.split("+");
                ret = (parseFloat(arr[0]) + parseFloat(arr[1]));
            }else if(minus){
                arr = str.split("-");
                ret = (parseFloat(arr[0]) - parseFloat(arr[1]));
            }else if(multi){
                arr = str.split("x");
                ret = (parseFloat(arr[0]) * parseFloat(arr[1]));
            }else if(devide){
                arr = str.split("/");
                ret = (parseFloat(arr[0]) / parseFloat(arr[1]));
            }
            // isNaN(ret){
            //     location.reload();
            //     return;
            // }
            ret = ret.toFixed(2);
            if((ret.slice(ret.length -3, ret.length)) == ".00"){
                ret = ret.slice(0, ret.length -3);
            }
            return ret;
        }

    // function of keys 0 to 9, . del
        function fKeyDel(){
            value = value.slice(0, value.length -1);
            document.getElementById('screen').innerHTML = value;
        }
        // function fKeyDot(){
        //     value = value.concat(".");
        //     document.getElementById('screen').innerHTML = value;
        // }
        function fKey(x){
            value = value.concat(x);
            document.getElementById('screen').innerHTML = value;
        }