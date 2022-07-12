// obbject to json ==stringify
let json=JSON.stringify(true);
console.log(json); 

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump: () => {
        console.log(`${rabbit.name} can jump!`);
    },
};
//함수, 심볼은 json에서 제외

json = JSON.stringify(rabbit);
console.log(json);

json=JSON.stringify(rabbit, ['name','color']);
console.log(json);


json = JSON.stringify(rabbit,(key,value)=>{
    console.log(`key: ${key},value: ${value}`);
    return key === 'name' ? 'ellie': value;
});
//콜백함수

console.log(json);


//JSON to Object  == parse
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();