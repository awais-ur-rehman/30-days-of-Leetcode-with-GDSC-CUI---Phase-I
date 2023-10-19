/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var string ="";
    var temp=s;
    tlength=t.length;
    slength=s.length;
    for (let i = 0; i < tlength; i++){
        for (let j = 0; j < slength; j++){
            if(t[i] !== temp[j]){
                    // string= string+t[i];
                    // s = s.replace(s[j], "");
                    // slength = slength+1;
                    break;
                    // temp = temp.replace(temp[i], "")
                    
                    }
            else{
                string = string + t[i];
                temp = temp.replace(temp[j], "");
                break;
            }
            
        }
        
        
    }
    if (s === string){
        return true;
    }
    else{
        return false;
    }
    
};
var s = "abc";
var t = "ahbgdc";



console.log(isSubsequence(s, t));