function solution(new_id) {
    let count=0
    for (let i=1; i<8 ;i++ ){
        if(i===1){
            new_id=new_id.toLowerCase()
        }
        if(i===2){
            new_id=new_id.replace(/[^a-z/-/_/.]/g,'')
            console.log(new_id)
        }
        if(i===3){
            
            new_id=new_id.replace(/\.{2,}/gi, ".");
         
        }
        if(i===4){
            if(new_id.charAt(0)==='.')
             new_id=new_id.replace(new_id.charAt(0),'')
            else if(new_id.charAt(-1)==='.')
             new_id=new_id.replace(new_id.charAt(-1),'')
        }
    }
    return new_id ;
}