function makeStudent(name,rollnum){
    const student= {
       name:name,
       roll_num:rollnum,
       say(){`my name is ${this.name}`}
    };
    return student
}

let s1 = makeStudent('sarthak',12)

console.log(s1.say)