"use strict"

// ---------------------------1st-----------------------------------
// var s=0;
// let y=numbersSum([1,2,"45","34",NaN,5])
// function numbersSum(x)
// {
//     for(let i=0;i<x.length;i++)
//     {
//         if(x[i] && typeof(x[i])=="number") 
//         s+=x[i]
//     }
// }
// console.log(s)





// let x=([1,2,"34","45"])
// let n=0;
// for(let i=0;i<x.length;i++)
// {
//      if(typeof(x[i])=="number") {
//         n+=x[i]
//      }
//  }
//  console.log(n)
//-------------------------------2nd---------------------------------------------

// let x=([32,1,15,340,892,60]);
// let y=x[0];
// let z=x[1];

// for(i=0;i<x.length;i++)
// {
//     if(x[i]>y)
//     {
//         z=y;
//         y=x[i]
//     }
//     else if(x[i]>z && x[i]!=y)
//     {
//         z=x[i];
//     }
// }
// console.log(z +" is a second largest value")

//----------------------------3rd--------------------------------------

// let numbers={1:"one",2:"two",3:"three"}
// console.log(numbers)
// let n=numbers[1]+" "+numbers[2] +" "+numbers[3]
// console.log(n)
// let arr=Object.entries(numbers)
//  arr=n
// console.log(arr)

// for(i=0;i<numbers.length;i++)
// {
//     console.log(numbers.values)
// }

//------------------------------4th---------------------------------------------

console.log("Given array: [1, 7, 2, 8, 3, 4, 5, 0, 9]")
var Arr = ascDecNone([1, 7, 2, 8, 3, 4, 5, 0, 9],"Asc");

function ascDecNone(Arr,type)
{
    var x=0;
    if(type=="Asc")
    { 
        for (var i = 1; i < Arr.length; i++)
        {   
            for (var j = 0; j < i; j++)
            {
                if (Arr[i] < Arr[j]) 
                {
                    x = Arr[i];
                    Arr[i] = Arr[j];
                    Arr[j] = x;
                }
             }
         }
    }


    else if(type=="Des")
    {
        for (var i = 1; i < Arr.length; i++)
        {   
            for (var j = 0; j < i; j++)
            {
                if (Arr[i] > Arr[j]) 
                {
                    x = Arr[i];
                    Arr[i] = Arr[j];
                    Arr[j] = x;
                }
            }
        }
    }
    console.log(Arr)
}

//-----------------------------------5th------------------------------------------

// var arr=Duplicate([1,2,1,2])

// function Duplicate(arr)
// {
//     let new_arr=[]
//     for(var i=0;i<arr.length;i++)
//     {
//         console.log(new_arr.indexOf(arr[i])==-1)
//         if(new_arr.indexOf(arr[i])==-1)
//         {
//             new_arr[i]=arr[i]
//         }
//     }
//     return new_arr    
// }

// console.log(arr)

//---------------------------------------------------------------------------------