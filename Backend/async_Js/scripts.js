// --------------------------------------     ASYNC jS ---------------------------------------------------//

//Synchronous refers that code is interpreted line by line
//Async : Whatever code is async, send it to side stack and run next sync code, whenever whole code is executed check whole code is completed and if that is completed fetch it in main stack and run the code

//when u want to do sm as async add async keyword prior to it
async function abcd(){
    var blob = await fetch('any/url/')  //using async bcz it could be possible that fetching data requires time, so whole of the code (sync) could work while on the back such async func could process(can take their time).
    var ans = blob.json(); //convert fetched data into json format for readibility

    console.log(ans);
}
