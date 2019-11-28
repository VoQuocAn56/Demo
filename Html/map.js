
var user = [
    {
        id:1,
        name:"A"     
    },
    {
        id:2,
        name:"B"
    }
];

var element = user.map((user,index)=> {
    console.log("value: " + user.name +" "+ "key: " + user.id);
})

