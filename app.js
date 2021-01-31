
//// Câu 1a

// let n = Number(prompt("nhập vào số nguyên dương từ 4 đến 20"));
// let inputNumber = Number(prompt("kiểm tra số n"));

// function findOppostieNumber(n, inputNumber){
//     if( 4 <= n && n <= 20 && n%2 == 0){
//         let outputNumber;
//         if (inputNumber < n/2){
//             outputNumber = n/2 +inputNumber;
//             console.log(outputNumber);
//         }else{
//             outputNumber = inputNumber - n/2;
//             console.log(outputNumber);
//         }
//     }else{
//         alert(`nhap lai n`);
//     }
// }
// findOppostieNumber(n, inputNumber);



/// Câu 1b



let str1 = prompt("Enter string1");
let str2 = prompt("Enter string2");
let newStr = "";
if (str1.length >= str2.length){
    for (i = 0; i < str2.length; i++){
        newStr += str1[i] + str2[i];
    }
    for (let i = str2.length; i <str1.length; i++){
        newStr += str1[i];
    }
    console.log(newStr);
}else{
    for (i = 0; i<str1.length; i++){
        newStr += str1[i] + str2[i];
    }
    for (let i = str1.length; i<str2.length; i++){
        newStr += str2[i];
    }
    console.log(newStr);
}

