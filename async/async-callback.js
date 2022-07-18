function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

class UserStorage{

    async loginUser(id,password){
        await delay(2000);
        if(
            (id==='gyeong112'&&password==='ajtwoddl')
            ){
            return id;}
        else{
            throw 'not found';
        }   
    }
    async getRoles(user){
        await delay(1000);
            if(user==='gyeong112'){
                return ({name: 'gyeong112',role:'admin'});
            }
            else{
               throw 'no access';
            }
    }
    
}
const userStorage= new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter yousr password');

userStorage.loginUser(id,password)
.then(userStorage.getRoles)
.then(user=>alert(
    `Welcome ${user.name}, you have a ${user.role} role`
))
