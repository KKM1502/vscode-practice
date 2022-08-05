class UserStorage{
    loginUser(id,password){
        return new Promise((resolve,reject)=>{
            setTimeout(() => { setTimeout(()=>{
                if(
                    (id==='gyeong112'&&password==='test1234')
                ){
                    resolve(id);}
               else{
                reject(new Error('not found'));
                alert('not found')
             }
        
                
            }, 2000);
        })
      });
    }
    getRoles(user){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(user==='gyeong112'){
                    resolve({name: 'gyeong112',role:'admin'});
                }
                else{
                    reject(new Error('no access'));
                }
            },1000)
        })
    
    }
}   
const userStorage=new UserStorage();


function Login1(self){
if(self.value==="Login"){
    const id = prompt('enter your id');
    const password = prompt('enter your password');
    userStorage.loginUser(id,password)
    .then(userStorage.getRoles)
    .then(user=>alert(
    `Welcome ${user.name}, you have a ${user.role} role`));

    setTimeout(()=>{self.value="Logout";},2000)}
    else if(self.value==="Logout"){
        alert("Logout...")
        self.value="Login";
    }
}