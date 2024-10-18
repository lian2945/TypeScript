// const person: {
//     name: string;
//     age: number;
//     hobbies: String[];
//     role: [number, String];
// } = {
//     name: "Maximilian",
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const Admin = 0;
// const Read_Only = 1;
// const Author = 2;

enum Role { Admin = 'ADMIN', Read_Only = 100, Author = 200 };

const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.Admin
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, "admin", "user"]

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) Error Code
}

if(person.role == Role.Author) {
    console.log("is author")
}