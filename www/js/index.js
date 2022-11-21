

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    const { resolveLocalFileSystemURI } = getPicture("../img/Galleree/art-o1.png");
    
    var options = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true
    };

     // step 02 create variable camera

     var camera = document.getElementById('camBtn');

     // step 03 create variable image
 
 
     // step 04 create function to take picture
 
     camera.addEventListener('click', function () {
         navigator.camera.getPicture(onSuccess, onFail, options);
     });

       // step 05 create function onSuccess

    function onSuccess(imageData) {
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myimage = fileEntry.toURL();
            $('#viewer_image').attr('src', myimage);
        },onError);
        }
    
        // step 06 create function onFail
    
        function onError(message) {
            alert('oho no! ' + message);
        }

}

     






