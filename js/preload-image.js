$(function(){
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img />').attr('src',this).appendTo('body').css('display','none');
        // $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

preload([
    '/img/bg-sea.jpg',
    '/img/bg-purple.jpg',
    '/img/bg-trees.jpg'
]);



});

