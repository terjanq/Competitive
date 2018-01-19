/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let dict1 = new Array(26);
    let dict2 = new Array(26);
    
    for(let i=0; i<s.length; i++){
        let sch = s[i], tch = t[i];
        let ds = toInt(sch);
        let dt = toInt(tch);
        if(dict1[ds] !== undefined && tch !== dict1[ds])
            return false;
        else
          if(dict2[dt] !== undefined && dict2[dt] !== sch) 
              return false;
          else{
              dict1[ds] = tch;
              dict2[dt] = sch;
          }
    }
    
    function toInt(a){
        const cA = "a".charCodeAt(0);
        return a.charCodeAt(0) - cA;
    }
    
    
    return true;
    
};