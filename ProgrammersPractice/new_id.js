function solution(new_id) {
    const New_id=[];
    const New_id1=[];
    new_id=new_id.toLowerCase();
     const regExp = /[ \{\}\[\]\/?,;:|\)*~`!^\+┼<>@\#$%&\ '\"\\(\=]/gi;
     new_id = new_id.replace(regExp,'');
    new_id=new_id.replace(/\.{2,}/gi, ".");
    new_id = new_id.replace(/^\./,'').replace(/\.$/,'');
    if(new_id.length===0){new_id='a'}
    if(new_id.lengtha>=16){
        new_id=new_id.slice(0,15)
    }
    while(new_id.length<=2){
        new_id = new_id + new_id.charAt(new_id.length-1)
    }
    new_id = new_id.replace(/^\./,'').replace(/\.$/,'');
    
    console.log(new_id)
return new_id;

}

new_id = ""