$(document).ready(()=>{     //when writing an arrow function inside document.ready, there is no need to add a name for arrow function. 

    let myText = $('.btnButton').text(); //.text() is used to get text and .html() is used to get the html.
    console.log(myText)           //.paragraph above is class... #idValue can be used for ID

    let myText2 = $('.paragraph #newElement').text();       // to use both ID and class.
    console.log(myText2);

    let myImageSource = $('.my-image').attr("src");     //to get the source of the my-image class. single quote or double quote, it is optional.
    console.log(myImageSource);

    let newParagraph = `This is a new paragraph for the example. 
    This is a mutliline paragraph. It has been made so to use the ES6 features.
    This paragraph replaced the older paragraph.`

    $('#newElement').text(newParagraph);        // .text() property can be used to get the text and change the text of html elements.

    $('.my-image').attr("src","image2.jpg")     //replace image.

    /**
     * To replace image on click of button
     * 
     * $('.btnButton').click(function(){
     *      $('.my-image').attr("src","image2.jpg")
     * })
     */

    
    
    $('.paragraph').append("This is an appended text."); //append is used to add text at the end. 

    $('.paragraph').prepend("This is an appended text."); //prepend is used to add text at the beginning.

  //   $('.paragraph').after("This is an after text."); //after is used to add text after the element. 

  //   $('.paragraph').before("This is a before text."); //prepend is used to add text before the element.

    $('#newElement').remove();  // to remove the element.

    $('.btnButton').empty(); //to empty the element and retain it

}) //end document ready