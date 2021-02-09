// callback, callback hell, promise, async/await (ES8)

// callback =>

// function passed as a argument in other function called as callback function
// function that call inside other function that runs after the excution of outer function


// const one = (cb) => {
    
//     console.log('one')
//     cb()

// }

// const two = () => {
//     console.log(obj.title)
// }

// one(two);

// api => id, 2 => username, 3 => title , body 

// 3 callbacks within function

const getValue = () => {
    
    setTimeout(() => {
        var idArr = [1,2,3,4,5];
        console.log(idArr);

        // get the username based on id
        setTimeout((id) => {
            if(id[1] == 2){
                var username = 'Divyansh';
                console.log(username);
            }
            
            setTimeout((user) => {
                if(user == 'Divyansh'){
                    var postObj = {
                        title: 'Post title',
                        body: 'Post body'
                    }
                    console.log(postObj);
                    
                }
            }, 2000, username);

        }, 2000, idArr);

    }, 2000);
}

getValue();

// const getData = () => {

//     setTimeout(() => {
//         // we are getting this array from some api as response
//         let arr1 = [10,20,30,40];
//         console.log(arr1);
//         // now i want to send any array value in other callback function
        // setTimeout((arr1) => { // pass an argument
            // for now i'm multiplying the passed number with 2
            // let mulNum = arr1[0] * 2;
            // console.log(mulNum)
            // setTimeout((mulNum) => {
//                 // saving the vlaue in db for now we save in array
//                 let result = [mulNum];
//                 console.log(result)
            // }, 2000, mulNum);

        // }, 2000, arr1);


//     }, 2000);
// }

// // callback
// // one(two);

export {one, two, getData}