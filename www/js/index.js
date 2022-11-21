//step 01 options
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    var options = {

        quality:100,
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



