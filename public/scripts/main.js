// $('<p>').text("Aroooooooooooooooo! At least according to Google, this is the onomatopoeia of the howling of a wolf.")

var wattpadApp = {};

wattpadApp.sortInfo = function() {

    //Global variables
    var apiUrl = "https://api.wattpad.com/v4/stories";
    var apiKey = "BSPmL9HFK4teApVWEMNiO8sBytg6c2R0iVyah56kVBgI";

    //Sort the information based on the user's input and get the information from the Wattpad API

    $('form').on('submit', function(e) {
        e.preventDefault();

        //Variable for the value of the first question input
        var questionOneInput = $('.options-one input[type=radio]:checked').val();

        //Variable for the value of the second question input
        var questionTwoInput = $('.options-two input[type=radio]:checked').val();

        //Variable for the value of the fourth question input
        var questionThreeInput = $('.options-three input[type=radio]:checked').val();

        //If the user selects Goosebumps and the Host OR The Host and Nerd, the category is Science Fiction
        if(questionOneInput == 22 && questionTwoInput == 5 || questionTwoInput == 5 && questionThreeInput == 5 || questionOneInput == 22 && questionThreeInput == 5) {

            $.ajax({
                url: apiUrl,
                format: 'json',
                method: 'GET',
                data: {
                    category: 5
                },
                headers: {
                    Authorization: 'Basic ' + apiKey
                }
            }).then(function(scifiData) {
                console.log(scifiData);

                var scifiArray = scifiData.stories;

                var randomscifiStory = scifiArray[Math.floor(Math.random() * scifiArray.length)];

                var scifiDescs = [
                    $('<p>').text("Futuristic science and technology is your game. It's entirely speculative and most definitely fiction (hence, science fiction), but one can hope that someday it will become reality. Maybe good ol' you will become the trigger to bridging this gap between fiction and truth! So what are you waiting for? Get going! Hold on, read the story that is you first. Then go."),
                    $('<p>').text('"A charming romance intermingled with scientific fact and prophetic vision." A quote by Hugo Gernsback, who first coined the term science fiction. Wouldn\'t you agree? You are, after all, a die-hard scifi fan according to this quiz, the most sophisticated kind of its type. It even knows which story you are!'),
                    $('<p>').text("Science fiction fanatics may say that such stories are complete rational and scientifically established, but last time I checked, humans haven't colonized Mars yet! Are you irritated yet?! Fret not, read your story and you'll be back to being as calm, collectd, and shiny as a brand-new robot.")
                ];

                console.log(randomscifiStory);

                var randomScifiDesc = scifiDescs[Math.floor(Math.random() * scifiDescs.length)];

                //Container for text
                $resultsText = $('<div>').addClass('results-text');
                $resultsText.append(randomScifiDesc);

                //Container for story cover, title, desc, etc.
                $resultsStory = $('<div>').addClass('results-story');

                $resultsTitle = $('<a>').attr({
                    href: randomscifiStory.url,
                    target: "_blank"
                });
                $resultsLink = $('<h3>').text(randomscifiStory.title);
                $resultsLinkOpen = $('<i>').addClass('fa fa-external-link')

                $resultsLink.append($resultsLinkOpen);
                $resultsTitle.append($resultsLink);

                $resultsCover = $('<img>').attr({
                    src: randomscifiStory.cover,
                    alt: "Cover of " + randomscifiStory.title
                });
                $resultsDesc = $('<p>').text(randomscifiStory.description);

                $resultsStory.append($resultsTitle, $resultsCover, $resultsDesc);

                //Heading for "You are..."
                $youAre = $('<h3>').text("You are...");

                //Container for both text and story
                $resultsContainer = $('<div>').addClass('results-container');

                $resultsContainer.append($resultsStory, $resultsText);

                //Button for restart
                $goAgain = $('<button>').addClass('button-again').text('Give me another go!');

                //Append text and story to results
                $('.results .wrapper').append($youAre, $resultsContainer, $goAgain);
            });
        }

        //If statement for the Vampire category input
        else if (questionOneInput == 18 && questionTwoInput == 18 || questionOneInput == 18 && questionThreeInput == 4 || questionTwoInput == 18 && questionThreeInput == 4) {

            //AJAX call for the Vampire category
            $.ajax({
                url: apiUrl,
                format: 'json',
                method: 'GET',
                data: {
                    category: 18
                },
                headers: {
                    Authorization: 'Basic ' + apiKey 
                }
            }).then(function(vampireData) {
                console.log(vampireData)

                var vampireArray = vampireData.stories;

                var randomVampireStory = vampireArray[Math.floor(Math.random() * vampireArray.length)];

                var vampireDescs = [
                    $('<p>').text("As much as you want to deny it (or perhaps you totally embrace it), you're a vampire-nut! Let's be real though, no one is really immune to the immortal, beautiful, and shine-like-porcelain allure of the vampire species. We just can't get enough; heck, if vampires really existed, getting bit doesn't sound like such a bad proposition!"),

                    $('<p>').text('"There are darknesses in life and there are lights, and you are one of the lights, the light of all lights." Do you know who said that? Dracula himself! And do you know why the mention of Dracula is made? Because vampire stories are your thing! Now go and enjoy this story while curled in a dark room, because sunlight. Or perhaps a coffin, because vampire.'),

                    $('<p>').text("No amount of garlic, crucifixes, and, sunlight can shield you when you yourself identifies so strongly with the vampire genre! Whether you grew up with the guidance of Mrs. Jeepers or dove into the charms of Edward Cullen, this is now your Wattpad identity! You may now go and rejoice!")
                ];

                console.log(randomVampireStory);

                var randomVampireDesc = vampireDescs[Math.floor(Math.random() * vampireDescs.length)];

                //Container for text
                $resultsText = $('<div>').addClass('results-text');
                $resultsText.append(randomVampireDesc);

                //Container for story cover, title, desc, etc.
                $resultsStory = $('<div>').addClass('results-story');

                $resultsTitle = $('<a>').attr({
                    href: randomVampireStory.url,
                    target: "_blank"
                });
                $resultsLink = $('<h3>').text(randomVampireStory.title);
                $resultsLinkOpen = $('<i>').addClass('fa fa-external-link')

                $resultsLink.append($resultsLinkOpen);
                $resultsTitle.append($resultsLink);

                $resultsCover = $('<img>').attr({
                    src: randomVampireStory.cover,
                    alt: "Cover of " + randomVampireStory.title
                });
                $resultsDesc = $('<p>').text(randomVampireStory.description);

                $resultsStory.append($resultsTitle, $resultsCover, $resultsDesc);

                //Heading for "You are..."
                $youAre = $('<h3>').text("You are...");

                //Container for both text and story
                $resultsContainer = $('<div>').addClass('results-container');

                $resultsContainer.append($resultsStory, $resultsText);

                //Button for restart
                $goAgain = $('<button>').addClass('button-again').text('Give me another go!');

                //Append text and story to results
                $('.results .wrapper').append($youAre, $resultsContainer, $goAgain);
            });
        }

        //If statement for the Romance category
        else if (questionOneInput == 4 && questionThreeInput == 4 || questionTwoInput == 5 && questionThreeInput == 4 || questionTwoInput == 5 && questionThreeInput == 2) {

            $.ajax({
                url: apiUrl,
                format: 'json',
                method: 'GET',
                data: {
                    category: 4
                },
                headers: {
                    Authorization: 'Basic ' + apiKey
                }
            }).then(function(romanceData) {
                console.log(romanceData);

                var romanceArray = romanceData.stories;

                var randomRomanceStory = romanceArray[Math.floor(Math.random() * romanceArray.length)];

                var romanceDescs = [
                    $('<p>').text('"Romeo/Romea, Romeo/Romea, where art though, Romeo/Romea?"...you thought to yourself, as you stood on your balcony waiting for the love of your life to come and sweep you off your feet! The gender-neutral version of course. Anyone can come sweep you off your feet, just like how anyone can wait for someone to come and sweep them off their feet!'),
                    $('<p>').text("Perhaps you read one too many Nicholas Sparks, or maybe one too many John Green. Doesn't matter, both are solid authors with amazing books, writing for a heartstrings-tugging genre! I mean, who didn't cry while reading A Walk to Remember?! Let's be real. Here is your very own romance story, be sure to enjoy and cherish it."),
                    $('<p>').text('"Love is like the wind, you can\'t see it but you can feel it." As a romance-junkie, do you know where this simple yet elegant quote came from? You\'ll be kept in suspense until you can figure it out, although suspense is clearly not the right genre to be mentioning here. I wish you luck and bid thee farewell.')
                ];

                console.log(randomRomanceStory);

                var randomRomanceDesc = romanceDescs[Math.floor(Math.random() * romanceDescs.length)];

                //Container for text
                $resultsText = $('<div>').addClass('results-text');
                $resultsText.append(randomRomanceDesc);

                //Container for story cover, title, desc, etc.
                $resultsStory = $('<div>').addClass('results-story');

                $resultsTitle = $('<a>').attr({
                    href: randomRomanceStory.url,
                    target: "_blank"
                });
                $resultsLink = $('<h3>').text(randomRomanceStory.title);
                $resultsLinkOpen = $('<i>').addClass('fa fa-external-link');

                $resultsLink.append($resultsLinkOpen);
                $resultsTitle.append($resultsLink);

                $resultsCover = $('<img>').attr({
                    src: randomRomanceStory.cover,
                    alt: "Cover of " + randomRomanceStory.title
                });
                $resultsDesc = $('<p>').text(randomRomanceStory.description);

                $resultsStory.append($resultsTitle, $resultsCover, $resultsDesc);

                //Heading for "You are..."
                $youAre = $('<h3>').text("You are...");

                //Container for both text and story
                $resultsContainer = $('<div>').addClass('results-container');

                $resultsContainer.append($resultsStory, $resultsText);

               //Button for restart
               $goAgain = $('<button>').addClass('button-again').text('Give me another go!');

               //Append text and story to results
               $('.results .wrapper').append($youAre, $resultsContainer, $goAgain);
            });
        }

        //If the user selects they're cheesy, the genre is automatically "Poetry"
        else if (questionTwoInput == 18 && questionThreeInput == 2 || questionOneInput == 4 && questionThreeInput == 2) {

            //AJAX call for the Poetry category 
            var categoryPoetry = $('input[name="cheesy"]:checked').val();

            $.ajax({
                url: apiUrl,
                format: 'json',
                method: 'GET',
                data: {
                    category: 2
                },
                headers: {
                    Authorization: 'Basic ' + apiKey
                }
            }).then(function(poetryData) {
                console.log(poetryData);
                
                var poetryArray = poetryData.stories;

                var randomPoetryStory = poetryArray[Math.floor(Math.random() * poetryArray.length)];

                var poetryDescs = [
                    $('<p>').text("Being a cheeseball trumps everything. Sorry, too soon? Being a cheeseball surpasses everything. That probably doesn't help either. Anyway, to get your cheesy juices flowing, here is an awesome piece of poetry that is just for you, and pretty much is you."),
                    $('<p>').text('The written word has a soft spot in your heart. Especially, haikus, sonnets, limericks, narratives, couplets, and of course, the classic free verse. Can you tell I had to Google "types of poetry"? You couldn\'t, of course. Now, enjoy this wonderful piece of poetry that will certainly call to your inner cheese.'),
                    $('<p>').text('"On a scale of one to ten, you\'re a nine and I\'m the one that needs you". You regret choosing that cheeseball option now, don\'t you? What\'s done is done, and now you have this wonderful piece of poetry ahead of you, go and read it! It is, after all, who you are.')
                ];

                console.log(randomPoetryStory);

                var randomPoetryDesc = poetryDescs[Math.floor(Math.random() * poetryDescs.length)];

                //Container for text
                $resultsText = $('<div>').addClass('results-text');
                $resultsText.append(randomPoetryDesc);

                //Container for story cover, title, desc, etc.
                $resultsStory = $('<div>').addClass('results-story');

                $resultsTitle = $('<a>').attr({
                    href: randomPoetryStory.url,
                    target: "_blank"
                });
                $resultsLink = $('<h3>').text(randomPoetryStory.title);
                $resultsLinkOpen = $('<i>').addClass('fa fa-external-link');

                $resultsLink.append($resultsLinkOpen);
                $resultsTitle.append($resultsLink);

                $resultsTitle.append($resultsLink);

                $resultsCover = $('<img>').attr({
                    src: randomPoetryStory.cover,
                    alt: "Cover of " + randomPoetryStory.title
                });
                $resultsDesc = $('<p>').text(randomPoetryStory.description);

                $resultsStory.append($resultsTitle, $resultsCover, $resultsDesc);

                //Heading for "You are..."
                $youAre = $('<h3>').text("You are...");

                //Container for both text and story
                $resultsContainer = $('<div>').addClass('results-container');

                $resultsContainer.append($resultsStory, $resultsText);

                //Button for restart
                $goAgain = $('<button>').addClass('button-again').text('Give me another go!');

                //Append text and story to results
                $('.results .wrapper').append($youAre, $resultsContainer, $goAgain);               
            });
        }    

        $('header, form, footer').fadeOut(600);
        $('html, body').animate({scrollTop: 0}, 'slow')
    });
    
    $('.results').on('click', 'button', function() {
        location.reload();
        $('html, body').scrollTop(0);
    });
};

wattpadApp.init = function() {
    wattpadApp.sortInfo();
};

$(function() {
    setTimeout(function() {
        $('.loader').fadeOut();
    }, 2500);

    wattpadApp.init();

    //Smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });

    //Enable unclicking a radio button
    $('input[type=radio]').on('click', function() {
        var previousValue = $(this).attr('previousValue');
        var name = $(this).attr('name');

        if (previousValue == 'checked') {
            $(this).removeAttr('checked');
            $(this).attr('previousValue', false);
        } else {
            $('input[name='+name+']:radio').attr('previousValue', false);
            $(this).attr('previousValue', 'checked');
        }
    });

    $('.options-one label').on('click', function() {
        $('body').animate({
                scrollTop: $("#second-q").offset().top - 0
        }, 600);
    })

    $('.options-two label').on('click', function() {
        $('body').animate({
                scrollTop: $("#third-q").offset().top - 0
        }, 600);
    });

    $('.options-three label').on('click', function() {
        $('body').animate({
                scrollTop: $("#submit").offset().top - 0
        }, 600);
    });
});



