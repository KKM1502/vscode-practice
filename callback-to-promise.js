class UserStorage{
    loginUser(id,password){
        return new Promise((resolve,reject)=>{
            setTimeout(() => { setTimeout(()=>{
                if(
                    (id==='ellie'&&password==='dream')||
                    (id==='gyeong112'&&password==='ajtwoddl')
                ){
                    resolve(id);}
               else{
                reject(new Error('not found'));
             }
        
                
            }, 2000);
        })
      });
    }
    getRoles(user){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(user==='ellie'){
                    resolve({name: 'gyeong112',role:'admin'});
                }
                else{
                    reject(new Eror('no access'));
                }
            },1000)
        })
    
    }
}
const userStorage=new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id,password)
.then(userStorage.getRoles)
.then(user=>alert(
    `Welcome ${user.name}, you have a ${user.role} role`
))
.catch(console.log);
