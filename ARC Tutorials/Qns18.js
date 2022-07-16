//Filter the given object based on certain conditions and return the corresponding object?
// conditions : 
/* 
 age >= 15 ; roll <= 200 ; marks >= 80
*/

var obj = {
    'Students': [{
            "name": "Raj",
             "Age":"15",
            "RollNumber": "123",
            "Marks": "99",
              
        }, {
            "name": "Aman",
             "Age":"14",
            "RollNumber": "223",
            "Marks": "69",
           },
           {
            "name": "Vivek",
             "Age":"13",
            "RollNumber": "253",
            "Marks": "89",
           },
        ]
};
  
let filter_obj = obj.Students.filter((ele)=>{
    return ele.Age >= 15 && ele.RollNumber <= 200 && ele.Marks >= 80
})

console.log(filter_obj)