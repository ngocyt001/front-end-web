
// // Thiết bị thứ năm
// //Bấm nút hoặc chạm để bật tắt
var toggle = false;
var btn5 = document.document.querySelectorAll('[id=btn5]');
// console.log(btn5)
// function chngimg5(){
//     if (toggle === true)  {
//         document.getElementById('dec5').src  = 'images/device-off-5.png';
//         // document.getElementById('btn5').className  = 'fas fa-dot-circle';

//     } else {
//        document.getElementById('dec5').src = 'images/device-5.png';
//     //    document.getElementById('btn5').className  = 'fas fa-times';

//     }
//     toggle = !toggle; 
// }

var stateAir =false;
var valueAir="OFF";
function WriteDataToFirebase(air){
    firebase.database().ref("Device-status").set({
        MayLanh:air
    });
}

var AirStt = firebase.database().ref('Device-status').child('May Lanh');
AirStt.on('value', snap =>{
    if(snap.val()=="ON"){
        stateAir=true;
        valueAir="ON";
    }else if(snap.val()=="OFF"){
        stateAir=false;
        valueAir="OFF";
    }
});

function chngimg5(){
    stateAir=!stateAir;
    if (stateAir){
        valueAir="ON";
        document.getElementById("dec5").setAttribute("src","./images/device-5.png");
    }else{
        valueAir="OFF";
        document.getElementById("dec5").setAttribute("src","./images/device-off-5.png");
    }
    WriteDataToFirebase(valueAir);
}

// var nhietDo = document.getElementById('nhietdo');
// var dbRef = firebase.database().ref().child('Nhiet do');
// var doAm = document.getElementById('doam');
// var dbRef2 = firebase.database().ref().child('Do am');
// dbRef.on('value', snap => nhietDo.innerText = snap.val());
// dbRef2.on('value', snap => doAm.innerText = snap.val());

// let incTemp = document.getElementById('incTemp');
// let decTemp = document.getElementById('decTemp');
// let incSpeed = document.getElementById('incSpeed');
// let decSpeed = document.getElementById('decSpeed');
// var nhietDo = document.getElementById('nhietdo')
// let countValue;

// window.onload = function(){

//     const dbRef = ref(db);

//     get(child(dbRef,'Parameter')).then((snapshot) => {
//         countValue = Number(snapshot.val());
//         nhietDo.innerHTML = countValue;
//         BtnsEnable();
//     });
 
// }

// var CountRef = firebase.database().ref('Parameter');
// CountRef.on('value', (snapshot) => {
//   const data = snapshot.val();
//   nhietDo.innerHTML = data;
//   updateCount(postElement, data);
//   BtnsEnable();
// });
// // ------------increment & decrement----------------------//

// function IncDecounter() {
//     BtnsDisable();

    // const dbRef = ref(db);


    // get(child(dbRef,'Parameter')).then((snapshot) => {
    //     countValue = Number(snapshot.val());

    //     if(this.id == 'incTemp') countValue++;
    //     else countValue--;

    //     update(ref(db,"/", {nhietDo: countValue}))

    //     nhietDo.innerHTML = countValue;
    //     BtnsEnable();
    // });


//     const dbRef = firebase.database().ref('Parameter');
//     dbRef.child("Temp").get().then((snapshot) => {
//     if (snapshot.Incounter()) {
//         data++;
//         console.log(snapshot.val());
//     } else {
//         data--;
//         console.log("No data available");
//     }
//     }).catch((error) => {
//     console.error(error);
//     });
    
// }


// // ------------Functions--------------------------------//


// function BtnsEnable(){
//     incTemp.disabled = false;
//     decTemp.disabled = false;
//     incSpeed.disabled = false;
//     decSpeed.disabled = false;
// }

// function BtnsDisable(){
//     incTemp.disabled = true;
//     decTemp.disabled = true;
//     incSpeed.disabled = true;
//     decSpeed.disabled = true;
// }



// var valueTemp = 18;
// var valueSpeed = 20;
// function TempSpeed(Temp, Speed){
//     firebase.database().ref("Parameter").set({
//         Nhietdo: Temp,
//         Tocdoquat: Speed
//     });
// }

// var countT = firebase.database().ref('Parameter').child('Nhietdo');
// countT.on('value', snap =>{
//     if(this.id == 'incTemp') countT++;
//     else countT--;
// });

// var countS = firebase.database().ref('Parameter').child('Tocdoquat');
// countS.on('value', snap =>{
//     if(this.id == 'incSpeed') countS++;
//     else countS--;
// });


// function Incounter(){

//     TempSpeed(countT, countS);
// }


// incTemp.addEventListener('click', Incounter);
// decTemp.addEventListener('click', Incounter);

// var stateLamp =false;
// var valueLamp;

// function Den(lamp){
//     firebase.database().ref("D305").setValue({
//         Den:lamp,
//     });
// };

// var dbRefLamp = firebase.database().ref('D305').child('Den');
// dbRefLamp.on('value', snap =>{
//     // if(snap.val()=="ON"){
//     //     stateLamp=true;
        
//     // }else if(snap.val()=="OFF"){
//     //     stateLamp=false;
//     //     valueLamp = valueLamp + 2;
//     // }
//     snap.val()++
// });

// function Incounter(){
// //    stateLamp=!stateLamp;
// //     if(stateLamp){
// //         valueLamp="ON";
// //     }else{
// //         valueLamp="OFF";
// //     } 
//     Den(valueLamp);
// };

// var valueTemp = firebase.database().ref().child('Nhiet do');
// valueTemp.on('value', snap =>{
//     console.log("Nhiet do :  "+snap.val());
//     document.getElementById("nhietdo").innerHTML = snap.val()+" C";
// });
// var valueHumid = firebase.database().ref().child('Do am');
// valueHumid.on('value', snap =>{
//     console.log("Do am :  "+snap.val());
//     document.getElementById("doam").innerHTML = snap.val()+" %";
// });


function incrementValue()
{
    var value = parseInt(document.getElementById('numberT').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberT').value = value;
}

function decrementValue()
{
    var value = parseInt(document.getElementById('numberT').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numberT').value = value;
}

function incrementValueS()
{
    var value = parseInt(document.getElementById('numberS').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberS').value = value;
}

function decrementValueS()
{
    var value = parseInt(document.getElementById('numberS').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numberS').value = value;
}





