function generateHashtag (text) {
    let str = text.trim()
    let result = "#";
    if (str!==""){
        result +=str.charAt(0).toUpperCase(); 
        for (let i=1; i<str.length; i++){
                if(str.charAt(i)===" " && str.charAt(i+1)===" "){
                    continue
                }
                else if(str.charAt(i)===" "){
                   result += str.charAt(i+1).toUpperCase();
                   i++;
                   continue;
                }
                result +=str.charAt(i);
        }
        if(result.length<=140){
                return result;
        }
    }
    return false;
}

let answer = generateHashtag("a".repeat(139));