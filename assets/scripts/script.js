//Portfolio Page generation on menu click
$('#portfolio').click(function(){
    $('#mainContainer').empty();
    $('#home').attr('class', 'item');
    $('#portfolio').attr('class', 'active item');
    $('#contact').attr('class', 'item');
    //portfolio image array
    var myProjects = [{
            name: 'Food App',
            image: 'assets/images/annie-spratt-01Wa3tPoQQ8-unsplash.jpg',
        },
        {
            name: 'Project Two',
            image: 'assets/images/jasgleidy-duarte-3ZIgcJNSoQg-unsplash.jpg',
        },
        {
            name: 'Project Three',
            image: 'assets/images/laura-goodsell-DBcWaU5_AtE-unsplash.jpg',
        },
        {
            name: 'Project Four',
            image: 'assets/images/leandro-soengas-LwjdoCFew0w-unsplash.jpg',
        },
        {
            name: 'Project Five',
            image: 'assets/images/mana5280-dQ_RwYKmbrU-unsplash.jpg',
        },
        {
            name: 'Project Six',
            image: 'assets/images/marcella-marcella-hn6CC9aosEk-unsplash.jpg',
        },
    ]
    //build portfolio page
    var portfolioContainer = $('<div>').attr('class', 'container').appendTo('#mainContainer');
    $('<h1>').attr('class', 'ui header').text('Portfolio').appendTo(portfolioContainer);
    var mainCardContainer = $('<div>').attr('class', 'ui three column stackable grid').appendTo(portfolioContainer);
    for(var i = 0; i < myProjects.length; i++){
    var cardColumn = $('<div>').attr('class', 'column').appendTo(mainCardContainer);
    var card = $('<div>').attr('class', 'ui fluid card').appendTo(cardColumn);
    var imageContainer = $('<div>').attr('class', 'centered column').appendTo(card);
    $('<img>').attr('src', myProjects[i].image).css('width', '100%').appendTo(imageContainer);
    var titleContainer = $('<div>').attr('class', 'content').appendTo(card);
    $('<a>').attr('class', 'header').text(myProjects[i].name).appendTo(titleContainer);
    };
});

//Contact Page Generation on menu click
$('#contact').click(function(){
    $('#mainContainer').empty();
    $('#home').attr('class', 'item');
    $('#portfolio').attr('class', 'item');
    $('#contact').attr('class', 'active item');
    //build contact page
    var contactContainer = $('<div>').attr('class', 'sixteen wide column').appendTo('#mainContainer');
    $('<h1>').attr('class', 'ui header').text('Say Hello').appendTo(contactContainer);
    var formContainer = $('<div>').attr('class', 'ui form').appendTo(contactContainer);
    var myFormName = $('<div>').attr('class', 'field').appendTo(formContainer);
    $('<label>').text('Name').appendTo(myFormName);
    $('<input>').attr('type','text').appendTo(myFormName);
    var emailContainer = $('<div>').attr('class', 'field').appendTo(formContainer);
    $('<label>').text('Email').appendTo(emailContainer);
    $('<input>').attr({type:'email', placeholder: 'youremail@esp.com'}).appendTo(emailContainer);
    var textContainer = $('<div>').attr('class', 'field').appendTo(formContainer);
    $('<label>').text('Message').appendTo(textContainer);
    $('<textarea>').appendTo(textContainer);
    var buttonContainer = $('<div>').appendTo(formContainer);
    $('<div>').attr('class', 'ui submit button').text('Post Your Note').appendTo(buttonContainer);
});