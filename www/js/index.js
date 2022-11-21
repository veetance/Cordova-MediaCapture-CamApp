//step 01 options



document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    const { DestinationType } = require("../../plugins/cordova-plugin-camera/www/CameraConstants");
    const { EncodingType } = require("../../plugins/cordova-plugin-camera/www/CameraConstants");
    const { resolveLocalFileSystemURI, resolveLocalFileSystemURL } = require("../../plugins/cordova-plugin-file/www/resolveLocalFileSystemURI");

    var options = {

        quality:100,
        DestinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        encodingType: Camera.EncodingType.PNG,
        cameraDirection: Camera.Direction.Direction.FRONT
        
    }

    console.log(options);  
}

//step 2 take or grab a photo

$("#camBtn").on("click",takePic);

function takePic() {
navigator.camera.getPicture(onSuccess, onError, options);

}

// step 2 success Function

function onSuccess(imageData) {
    console.log(imageData);
}

// step 3 imageData

// function onSuccess(imageData) {
//     console.log(imageData);
//    $(".viewer_image").append("<img src='"+imageData+"'/>");
// }


// fix of step 3 

function onSuccess(imageData) {
    // console.log(imageData);
    resolveLocalFileSystemURL(imageData, function(fileEntry){
        var myImage = fileEntry.toURL();
        $(".viewer_image").append("<img src='"+myImage+"'/>");
    }, onError);
   
}

// step 4 error function

function onError(message) {
    alert("oh snap");
}


