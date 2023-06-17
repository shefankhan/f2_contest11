let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let ansMap = arr.map(mapFunc)

    function mapFunc(z){
        if(z.profession==="developer"){
            console.log(z);;
        }
    }
   
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
             let ansForEach=[];
              arr.forEach(function(value){
                if(value.profession==="developer"){
                     ansForEach.push(value);
                 }
    });
    console.log(ansForEach);

  }
  
  function addData() {
    //Write your code here, just console.log
    let newData= {id:4, name:"jaspreet" , age:"25", profession:"web Developer"};
    arr.push(newData);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    // using filter method
    let filterArray= arr.filter(remove);
    console.log(filterArray);

    function remove(a){
        if(a.profession !="admin"){
            return a;
        }
    }
}
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr =[{id:"5",name:"virat",age:"30", profession:"crickter"},
                 {id:"6", name:"shubh", age:"25",profession:"singer"},
                 {id:"7",name:"vicky",age:"30",profession:"actor"}
                ];


        let concatenatedArray = arr.concat(newArr);
        console.log(concatenatedArray);

  }