/* Khai niem nodejs 
   1 hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. 
   Chương trình được viết bằng JavaScript, sử dụng kỹ thuật điều khiển theo sự kiện, nhập/xuất không đồng bộ để tối thiểu tổng chi phí và tối đa khả năng mở rộng. 
    1 frameworks chay tren server
   /*

////A. Arrow Functions.

//1. Cu phap cua ham thong thuong

//a) cu phap cua ham thong thuong
function fun(a, b) {
    return a + b;
};
//console.log (fun(5,2));

//b) Cu phap trong ES6 (ECMAScript 6)
const fun_2 = (a, b) => {
    return a + b;
};
// console.log(fun_2(5,2));

//2. Cu phap ES6 rut gon (Arrow Function)

//a) 2 tham so
const fun_3 = (a, b) => a + b;
// console.log(fun_3(5,2));

//b) 1 tham so
const fun_4 = x => x+1;
// console.log(fun_4(5));

// 3. Cu phap Arrow function khong co tham so
const fun_5 = () => console.log('Hello!')
// console.log(fun_5());

//4. cu phap Arrow Function va ngu canh this
//// Arrow Function ko co ngu canh rieng this, ma no se ke thua tu ngu canh ben ngoai(lexical this)
function fun_6() {
    this.age = 20;
    setInterval(() => {         //Ham lap lai viec thuc hien 1 doan ma sau 1 thoi gian xac dinh
        this.age++;
        console.log(this.age) // this nay tham chieu toi doi tuong fun_6
    }, 1000);        //1000 giay
}
// let tai = new fun_6();
//// neu su dung ham truyen thong trong setInterval, this tham chieu toi ngu canh cua ham setInterval, ko phai doi tuong fun_6

//5. Luc su dung Arrow Function.

/* 
a) Ly thuyet
- Khi ngu canh this tu ben ngoai.
- khi muon viet ham ngan gon, dac biet voi cac ham callback.
- Arrow function khong the dung nhu phuong thuc cua 1 doi tuong, vi no khong co ngu canh this rieng.
*/

//b) Vi du

////su dung voi mang va cac phuongthuc nhu map, filter, reduce.
const numbers = [1, 2, 3, 4, 5];
// console.log(numbers)

////Tang moi phan tu cua mang len gap doi
const doubled = numbers.map(n => n*2); //map: tao ra 1 mang moi su dung ham callback(goi lai chinh no) len tung phan tu cua mang hoc ma khong thay doi mang goc
// console.log(doubled); 

////B. Template Literals (Template Strings): lam viec voi chuoi 

//1. Chuoi nhieu dong (Multi-line-strings): (ko can \n: Xuong dong)
const chuoi = `This is line 1
This is line 2
This is line 3`;
// console.log(chuoi);

//2. Noi suy bieu thuc:
const name = 'Tai';
const age = 20;
const greetingg = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(greetingg);

//3. Su dung bieu thuc ben trong Temple Literals
const x = 5;
const y = 10;
// console.log(`The sum of ${x} and ${y} is ${x+y}.`);

//4. Goi ham ben trong Temple Literals
function getGreeting(name) {
    return `Hello, ${name}!`; 
}

const greeting = `Greeting: ${getGreeting('Alice')}`;
// console.log(greeting);

//5. Chuoi nhieu dong ket hop noi suy
const item = 'Laptop';
const price = 1200;
const message = `
Thank you for purchasing the ${item}.
Your total is $${price}`;
// console.log(message);

//C. Destructuring (Phan ra)

//a) Destructuring Array: phan ra mang

//1/ Cu phap co ban
const array = [1, 2, 3];
const [a, b, c] = array;
// console.log(a);
// console.log(b);
// console.log(c);

//2. Bo qua phan tu trong mang
const array2 = [1, 2, 3, 4];
const [first, , third] = array2;
// console.log(first);
// console.log(third);

//3. Gan gia tri mac dinh
const array3 = [1];
const [a2, b2 = 10] = array3;  //gan gia tri mac dinh cho phan tu khong ton tai
// console.log(a2); 
// console.log(b2);

//4. Doi cho cac gia tri 
let x2 = 1;
let y2 = 2;
[x2, y2] = [y2, x2];
// console.log(x2);
// console.log(y2);

//5. Su dung voi cac ham tra ve mang
function getCoordinates() {
    return [100, 200];
}

const [x3, y3] = getCoordinates();
// console.log(x3);
// console.log(y3); 

//b) Destructuring Objects: phan ra doi tuong

//1. Cu phap co ban
const person = {
    name2: 'Tai',
    age2: 20,
    address: '123 Nguyen Trai'
};
//Phan ra cac thuoc tinh cua doi tuong
const {name2, age2, address} = person;
// console.log(name2);
// console.log(age2)
// console.log(address);

//2. Doi ten bien khi phan ra
const person2 = {
    name3: 'John',
    age3: 20
};

// Doi ten bien khi phan ra
const {name3: personName, age3: personAge} = person2;
// console.log(personName);
// console.log(personAge);

//3. Gan gia tri mac dinh cho thuoc tinh khong ton tai
const person4 = {
    name4: 'TT'
};
//gan gia tri mac dinh cho thuoc tinh khong ton tai
const {name4, age4 = 25} = person4;
// console.log(name4);
// console.log(age4);

//4. Phan ra doi tuong long nhau
const person5 = {
    name5: 'TTT',
    address5: {
        city: 'Dong Ha',
        country: 'Viet Nam'
    }
};
//Phan ra doi tuong long nhau
const {name5, address5: {city, country}} = person5;
// console.log(name5)
// console.log(city)
// console.log(country)

//5. Phan ra voi cac ham
function printPerson({name, age}) {
    console.log(`Name: ${name}, ${age}`);
}
const person6 = {name: 'Tai', age: 30};
// printPerson(person6)

//6. Phan ra doi tuong ben trong mang
const people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 35}
];
// phan ra doi tuong ben trong mang
const[{name: firstName}, {age: secondAge}] = people;
// console.log(firstName);
// console.log(secondAge);

// D) Promise: xu ly thao tac bat dong bo (asynchronous), khong can callback long nhau (callback hell) 

/*
Cau truc Promise:
1. Pending (dang cho): ban dau khi promise duoc tao, no o trang thai pending.
2. Fulfilled (hoan thanh): Promise duoc hoan thanh va tra ve ket qua.
3. Rejected: Promise bi tu choi va tra ve mot loi.
*/

//a) Tao 1 Promise.
const myPromise = new Promise((resolve, reject) => {
    let success = true; //vi du qua trinh thanh cong
    if (success) {
        resolve('The operation was successful')
    }
    else{
        reject('The operation failed')
    }
});

//b) then, catch, finally

//1. then: phuong thuc nay xu ly ket qua khi promise da hoan thanh(resolved), no nhan 2 doi so: callback (thanh cong) va callback (that bai), callback thu 2 ko bat buoc, tot hon su dung catch)
myPromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error); 
});

//2. Catch: phuong thuc nay xu ly khi promise bi tu choi (rejectted), su dung catch de bat loi va xu ly chung
const failedPromise = new Promise((resolve, reject) => {
    reject('Something went wrong');
});
failedPromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

//3. finally: phuong thuc nay se luon duoc thuc hien bat ke promise thanh cong hay that bai
myPromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error); 
})
.finally(() => {
    console.log('Promise has been processed'); //luon chay
})

//E) Async/Await: giup code bat dong bo, de doc hon, thay su dung Promises hoac callback long nhau, xay dung dua tren Promise va lam cho cac thao tac bat dong bo trong giong nhu dong bo

//a) async function: ket qua luon tra ve promise, hoan thanh (resolve), tu choi (reject)
async function myAsyncFunction() {
    return 'Xin chao, toi la TNTT';
}
myAsyncFunction().then((result) => {
    console.log(result);
});

//b) await: su dung ben trong cac ham duoc khai bao voi async. No tam dung viec thuc thi cua ham cho den khi promise ma no dang doi hoan thanh. Khi promise hoan thanh, await tra ve ket qua cua promise
function asyncOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {       //setTimeout: ham su dung khi co 1 thoi gian nhat dinh
            resolve('Operation complete after 2 seconds');
        }, 2000);
    });
}

async function run() {
    console.log('Start');
    const result = await asyncOperation(); //Doi promise hoan thanh
    console.log(result);
    console.log('End');
}
run()

//c) xu ly loi voi try catch
function asyncOperationWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {       //setTimeout: ham su dung khi co 1 thoi gian nhat dinh
            reject('Something went wrong'); //co j do khong on
        }, 2000);
    });
}
async function runWithErrorHandling() {
    try {
        const result = await asyncOperationWithError();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

runWithErrorHandling();

/*d) uu diem async/await so voi then/catch
- De doc hon
- Tranh callback hell: khong long nhieu then hoac catch
- Xu ly loi de hon: try...catch toan bo
- Promise.all(): chay nhieu promise song song
*/

/* F) Du an NodeJS
    Tao project: init node / npm init -y: mac dinh
    Tao file: touch tenfile.js
*/

/* G) map vs Foreach:
    map: Sử dụng map để tạo ra một mảng các promise từ một mảng ban đầu, Promise.all hoặc Promise.allSettled để đợi tất cả các promise hoàn thành.
    foreach: forEach không trả về mảng mới, khong dễ dàng thu thập các promise từ forEach, neu muon sử dụng forEach với các hàm bất đồng bộ, cần tạo một mảng các promise bên ngoài vòng lặp và sau đó đợi tất cả chúng hoàn thành.
*/

/*H) promise.allsettled and promise.all.
1. Ket qua tat ca thanh cong:
- promise.all: tra ve mang chua cac gia tri thanh cong
- promise.allsettled: tra ve mang chua cac gia tri thanh cong hoac that bai
2. Ket qua khi co 1 promise bi tu choi.
- promise.all: tra ve ngay voi ly do cua promise bi tu choi
- promise.allsettled: cho tat ca promises hoan thanh, ke ca that bai
3. Su dung:
- Tat ca promises thanh cong
- Ket qua cua tat ca promises, bat ke thanh cong hay that bai
*/

