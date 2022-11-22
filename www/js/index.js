// make sure .CamcaptureData and .shell  hight is the same as their width of the image optimised for mobile.. for some reason in the css it is not working whan i use aspect-ratio: 1/1; 

$('.shell_span2').css('height', $('.shell_span2').width());
$('.shell_span1').css('height', $('.shell_span1').width());
$('.CamcaptureData').css('height', $('.CamcaptureData').width());


// function ExpandIMG, on the touch or press of .info-button the hight of CamcaptureData is reduced by 50% with smooth animation and smooth scroll, if the hight is 50% the hight is set to 100% with smooth animation and smooth scroll 

function ExpandIMG() {

    if ($('.CamcaptureData').height() == $('.CamcaptureData').width()) {
        $('.CamcaptureData').animate({ height: $('.CamcaptureData').width() / 2 }, 400, 'swing');
        $('html, body').animate({ scrollTop: $('.CamcaptureData').offset().top }, 450, 'swing');
    } else {
        $('.CamcaptureData').animate({ height: $('.CamcaptureData').width() }, 500, 'swing');
        $('html, body').animate({ scrollTop: $('.CamcaptureData').offset().top }, 500, 'swing');
    }
}

// call the function on the touch or press of .info-button

$('.info-button').on('click', ExpandIMG);





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

            // change the img url of .CamcaptureData to myNewImage using css background-image property 

            $('.CamcaptureData').css('background-image', 'url(' + myNewImage + ')');
            
        }, onError);

    };
    
    function onError(message) {
        alert("Photo not taken because" + message)
    };
 

};

// 



   

