/*Given a string, return the length of the largest "chunk" in the string. A chunk is a run of adjacent chars that are the same.  
maxChunk("chaloopa") → 2
maxChunk("abcdddBBBBxyzzz") → 4
maxChunk("") → 0 */




var str = 'abczzdddBBBBxayzz'
var c=[];
var out = '';
for(var i = 0; i<str.length; i++){
    if (str[i] === str[i+1]){ 
        c.push(str[i])
        // console.log(c)
    }else{
        if(i >0 && c.includes(str[i-1])){
            c.push(str[i-1])
        }
        if(out.length < c.length){
            out = c.join('');
        }
        c = [];
    }
}
console.log(out);
var kkk =out.length
console.log(kkk)
