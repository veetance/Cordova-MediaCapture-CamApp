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
        $(".instructions").hide();
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




// .CamcaptureData and .shell hight is the same as its width - **for some reason in the css it is not working whn i used aspect-ratio: 1/1;** 

$('.shell_span2').css('height', $('.shell_span2').width());
$('.shell_span1').css('height', $('.shell_span1').width());
$('.CamcaptureData').css('height', $('.CamcaptureData').width());


// the hight of CamcaptureData is reduced by 50%, if the hight is 50%, the hight is set to 100%  

function ExpandIMG() {
    

    if ($('.CamcaptureData').height() == $('.CamcaptureData').width()) {
        $('.CamcaptureData').animate({ height: $('.CamcaptureData').width() / 2 }, 400, 'swing');
        $('html, body').animate({ scrollTop: $('.CamcaptureData').offset().top }, 450, 'swing');
    } else {
        $('.CamcaptureData').animate({ height: $('.CamcaptureData').width() }, 400, 'swing');
        $('html, body').animate({ scrollTop: $('.CamcaptureData').offset().top }, 450, 'swing');
    }
}

$('.info-button').on('click', ExpandIMG);


//rotate animation toggle,.info-button is touched or pressed the class .rotate is added to .arrow_up and when .info-button is touched or pressed again the class .rotate is removed from .info-button.


function rotateArrow() {

    $('.arrow_up').toggleClass('rotate');
}

$('.info-button').on('click', rotateArrow);


// array of maximum 72 imgs, grab the images from the img folder and add them to array GalleryImages

var GalleryImages = [];
for (var i = 1; i < 73; i++) {
    GalleryImages.push('img/Galleree/art-0' + i + '.png');
}

// console.log(GalleryImages);

// function populateGallery is called when the page is loaded, it loops through the array GalleryImages and adds random 12 images to .shell background

function populateGallery() {

    for (var i = 0; i < 12; i++) {
        var random = Math.floor(Math.random() * GalleryImages.length);
        $('.shell').eq(i).css('background-image', 'url(' + GalleryImages[random] + ')');
        GalleryImages.splice(random, 1);
    }
}

$(document).ready(function () {
    populateGallery();
});


$('.nav-bar_logo').on('click', function () {
    location.reload();
});


// the background image url of .CamcaptureData is changed to the background-img url of the .shell that was clicked

$('.shell').on('click', function () {
    $('.CamcaptureData').css('background-image', $(this).css('background-image'));

    if ($('.CamcaptureData').height() == $('.CamcaptureData').width() / 2) {
        $('.CamcaptureData').css('height', $('.CamcaptureData').width());
    }

    $(".instructions").hide();
});











   

