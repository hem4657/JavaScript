let nameObj = {"name": "hemant", "age": "21", "height": "7.0", "blodgroup": "O+"};
console.log(nameObj);
console.log(nameObj.name);

// let jsObj = JSON.parse(nameObj);
// console.log(jsObj.name);

let person = {name: "Kurshed", age: 25};
let jsonString = JSON.stringify(person);
console.log(jsonString);

let data = {
    name : "hemant",
    projects: [
        {title: "my name is hemant", tech: ["HTML", "CSS", "REACT", "JAVASCRIPT", "PYTHON"]},
        {title: "my frind is kuldeep", tech: ["REACT", "NODEJS"]},
    ]
};

console.log(data.projects[1].title);