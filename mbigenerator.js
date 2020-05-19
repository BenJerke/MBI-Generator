//I got the format from this page on the CMS site, make sure it's up to date:
//https://www.cms.gov/Medicare/New-Medicare-Card/Understanding-the-MBI-with-Format.pdf

//generate each character
function c () {
   const num = Math.floor(Math.random() * 8 + 1)
return num.toString();
};

function a () {
    const allowedChars = ["A","C","D","E","F","G","H","J","K","M","N","P","Q","R","T","U","V","W","X","Y"];
    const randNum = Math.floor(Math.random() * 19);
    return allowedChars[randNum];
};

function n (){
    const num = Math.floor(Math.random() * 9)
    return num.toString();
};

function an () {
const letter = a();
const number = n();
const charType = Math.round(Math.random());
console.log(charType);
if (charType === 1) {
    return letter;
}
else return number.toString();
};

//stick 'em together
function buildMbi () {
               
    const mbiCom = [c(), a(), an(), n(),"-", a(), an(), n(),"-", a(), a(), n(), n()]

    const mbi = mbiCom.join("")
    return mbi

};

//wire HTML
$( document ).ready(function() {
    $("#button").click( function () {
        $("#disp").text(buildMbi())
    });
});

