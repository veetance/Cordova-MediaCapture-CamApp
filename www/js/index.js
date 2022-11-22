
// //  function hideGallery is a function that hides .gallery on the touch or press of #camBtn using jquery

// function hideGallery() {
//     $('.Gallery').hide();
//     console.log('hideGallery function called');
// }

// // call hideGallery function on click of #camBtn

// $('#camBtn').on('click', hideGallery);


document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    var Options = {
        quality: 80,
        destinationType: Camera.DestinationType.FILE_URI
    };

    function takePic() {

    navigator.camera.getPicture(onSuccess, onError, Options) 
    console.log(Options)

    };

    $('#camBtn').on('click', takePic);

    function onSuccess(imageData) {
        console.log(imageData);
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            
            // do something with URL, assign to src or create an html 
            $(".viewer_image").replaceWith("<img src='" + myNewImage + "'>")
        }, onError);

    };
    
    function onError(message) {
        alert("Photo not taken because" + message)
    };
 

};



   

