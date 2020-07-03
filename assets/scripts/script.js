//Portfolio Page generation on menu click
$('#portfolio').click(function(){
    //clear all containers
    $('#mainContainer').empty();
    $('#home').attr('class', 'item');
    $('#portfolio').attr('class', 'active item');
    $('#contact').attr('class', 'item');
    //build portfolio page
    buildPortfolioPage(myProjects, projectDetails);
});

//portfolio image array
var myProjects = [
    {
        name: 'Food App',
        image: 'assets/images/ehimetalor-akhere-unuabona-Zh0mYmMBZjQ-unsplash.jpg',
    },
    {
        name: 'Project Two',
        image: 'assets/images/sumat-singh-TUTo_ON2w8o-unsplash.jpg',
    },
    {
        name: 'Project Three',
        image: 'assets/images/freya-ingva-6P9JgFe3f9Q-unsplash.jpg',
    },
    {
        name: 'Project Four',
        image: 'assets/images/leandro-soengas-LwjdoCFew0w-unsplash.jpg',
    },
    {
        name: 'Project Five',
        image: 'assets/images/yin-wong-SMFLG46c5S4-unsplash.jpg',
    },
    {
        name: 'Project Six',
        image: 'assets/images/marcella-marcella-hn6CC9aosEk-unsplash.jpg',
    },
]

//project descriptions array
var projectDetails = [
    {
        name: 'Food App',
        description: 'A recipe search app to put customized menu planning for your next party at the tip of your fingers.',
        image: 'assets/images/ehimetalor-akhere-unuabona-Zh0mYmMBZjQ-unsplash.jpg',
        url: 'https://mackenzieraeclark.github.io/Project1/'
    },
    {
        name: 'Project Two',
        description: 'Coming Soon',
        image: 'assets/images/sumat-singh-TUTo_ON2w8o-unsplash.jpg',
        url: '#'
    },
    {
        name: 'Project Three',
        description: 'Coming Soon',
        image: 'assets/images/freya-ingva-6P9JgFe3f9Q-unsplash.jpg',
        url: '#'
    },
    {
        name: 'Project Four',
        description: 'Coming Soon',
        image: 'assets/images/leandro-soengas-LwjdoCFew0w-unsplash.jpg',
        url: '#'
    },
    {
        name: 'Project Five',
        description: 'Coming Soon',
        image: 'assets/images/yin-wong-SMFLG46c5S4-unsplash.jpg',
        url: '#'
    },
    {
        name: 'Project Six',
        description: 'Coming Soon',
        image: 'assets/images/marcella-marcella-hn6CC9aosEk-unsplash.jpg',
        url: '#'
    }
]

function buildPortfolioPage(){
    //empty containers
    $('#mainContainer').empty();
    $('#home').attr('class', 'item');
    $('#portfolio').attr('class', 'active item');
    $('#contact').attr('class', 'item');
    //build the page
    var portfolioContainer = $('<div>').attr('class', 'container').appendTo('#mainContainer');
    $('<h1>').attr('class', 'ui header').text('Portfolio').appendTo(portfolioContainer);
    var mainCardContainer = $('<div>').attr('class', 'ui three column stackable grid').appendTo(portfolioContainer);
    for(var i = 0; i < myProjects.length; i++){
    var cardColumn = $('<div>').attr('class', 'column').appendTo(mainCardContainer);
    var card = $('<div>').attr('class', 'ui fluid card').appendTo(cardColumn);
    var imageContainer = $('<div>').attr('class', 'centered column').appendTo(card);
    $('<img>').attr('src', myProjects[i].image).css('width', '100%').appendTo(imageContainer);
    var titleContainer = $('<div>').attr('class', 'content').appendTo(card);
    var projectTitle = $('<a>').attr({class: 'header portfolioPage', id: i}).text(myProjects[i].name).appendTo(titleContainer);
    //Create a modal with more information for clicked item
    projectTitle.click(function(){
        var selectedID = $(this).attr('id');
        console.log('Selected id = ', $(this).attr('id'));
        var showMeProject = projectDetails[selectedID];
        console.log('The project title has been clicked. The associated id =', $(this).attr('id'));
        //Initiate modal construction function
        generateProjectModal(showMeProject)
        });
    };
}
//function to generate project detail modal
function generateProjectModal(project){
    //empty previous modal content
    $('.ui.modal').empty();
    console.log('generateProjectModal function has been entered.')
    //set variables
    var appName = project.name;
        console.log('appName = ', appName);
    var pic = project.image;
        console.log('pic = ', pic);
    var summary = project.description;
        console.log('summary = ', summary);
    var link = project.url;
        console.log('link = ', link);
    //build the modal
    var modalContainer = $('<div>').attr('class','ui modal');
    $('#mainContainer').append(modalContainer);
    $('i').attr('class', 'close icon').appendTo(modalContainer);
    $('<div>').attr({class: 'header', id: 'modalHeader'}).text(appName).appendTo(modalContainer);
    var imageContainer = $('<div>').attr('class','image content').appendTo(modalContainer);
    var imageDiv = $('<div>').attr('class', 'ui medium image').appendTo(imageContainer);
    $('<img>').attr('src', pic).appendTo(imageDiv);
    var descriptionContainer = $('<div>').attr('class', 'description').appendTo(imageContainer);
    $('<div>').attr('class', 'ui header').text('Project Summary').appendTo(descriptionContainer);
    $('<p>').text(summary).appendTo(descriptionContainer);
    var buttonContainer = $('<div>').attr('class', 'actions').appendTo(modalContainer);
    var closeButton = $('<div>').attr('class', 'ui black deny button').text('Back').appendTo(buttonContainer);
    closeButton.click(function(){
        $('.ui.modal').modal('hide dimmer');
        buildPortfolioPage();
    })
    var projectLink = $('<div>').attr({class: 'ui positive button', src: link, target: '_blank'}).text('Visit Site').appendTo(buttonContainer);
    projectLink.click(function(){
        event.preventDefault();
        window.location = link;
    })
    $('.ui.modal').modal('show');
};

// ********************* CONTACT PAGE ********************* 
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
    $('<div>').attr('class', 'ui positive button').text('Post Your Note').appendTo(buttonContainer);
});