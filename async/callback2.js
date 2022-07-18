class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(()=>{
            if(
                (id==='ellie'&&password==='dream')||
                (id==='gyeong112'&&password==='ajtwoddl')
            ){
                onSuccess(id);}
           else{
            onError(new Error('not found'));
         }
    
      },2000);
    }
    getRoles(user,onSuccess,onError){
        setTimeout(()=>{
            if(user==='ellie'){
                onSuccess({name: 'ellie',role:'admin'});
            }
            else{
                onError(new Eror('no access'));
            }
        },1000)
    }
}
const userStorage=new UserStorage();
const id = promt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user=>{
        userStorage.getRoles(
            user,
            userWithRoles=>{
            alert(`Welcome ${user.name}, you have a ${userWithRoles.roole} role`);
        },
        error =>{
            console.log(error);
        }
    )
});