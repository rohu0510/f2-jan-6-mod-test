/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map(person=>{
    if(person.profession === "developer"){
      console.log(person.name);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach(person=>{
    if(person.profession === "developer"){
      console.log(person.name);
    }
  });
}

function addData() {
  let newData = {id: 4, name: "susan", age: "20", profession: "intern"};
  arr.push(newData);
  console.log(arr);
}

function removeAdmin() {
  let removedAdminArray = arr.filter(person => person.profession !== "admin");
  console.log(removedAdminArray);
}

function concatenateArray() {
  let arr2 = [
    { id: 4, name: "Rohit", age: "22", profession: "sr. developer" },
    { id: 5, name: "Rahul", age: "18", profession: "jr. developer" },
    { id: 6, name: "Rashmi", age: "16", profession: "intern" }
  ];
  let newArray = arr.concat(arr2);
  console.log(newArray);
}
