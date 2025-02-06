console.log('Welcome');
let name = 'arjun'
const a={
    naam : "khuma",
    contact: 98004,
    followeramount: '2k',
    life: 'sick',
    fullname: function add(naam,contact){
        console.log('my name is '+ this.naam+' & my number is '+ this.contact);
    }
}
let b = a.fullname();
// a[hack]='hellyeah'
console.log(b);
// console.log(`item: $${(2035+9553)/100}`);
const student={
     name: 'arjun bam',
    myname:function nameis()
    {
        console.log('My name is '+ this.name);
    }
}
