function prepVideo(){

    var player = $('#hype_video_player');

    var playerOrigin = '*';
    var status = $('.status');

    // Listen for messages from the player
    if (window.addEventListener) {
        window.addEventListener('message', onMessageReceived, false);
    }
    else {
        window.attachEvent('onmessage', onMessageReceived, false);
    }

    // Handle messages received from the player
    function onMessageReceived(event) {

    	// console.log("message received " + event);

        // Handle messages from the vimeo player only
        if (!(/^https?:\/\/player.vimeo.com/).test(event.origin)) {
            return false;
        }
<<<<<<< HEAD
        
        if (playerOrigin === '*') {
            playerOrigin = event.origin;
        }
        
        var data = JSON.parse(event.data);
        
=======

        if (playerOrigin === '*') {
            playerOrigin = event.origin;
        }

        var data = JSON.parse(event.data);

>>>>>>> ef2200aa7329e9ad22b736e5fc7c88340a75d5d1
        switch (data.event) {
            case 'ready':
                onReady();
                break;
<<<<<<< HEAD
               
=======

>>>>>>> ef2200aa7329e9ad22b736e5fc7c88340a75d5d1
            case 'finish':
                onFinish();
                break;
        }
    }

    //play the video on button click
	var playbtn = document.getElementsByClassName('play-btn');

    $(playbtn).on('click', function() {
<<<<<<< HEAD
    	post("seekTo", "0");//restart 
=======
    	post("seekTo", "0");//restart
>>>>>>> ef2200aa7329e9ad22b736e5fc7c88340a75d5d1
        post("play");
    });

    console.log("what is this " + $('#video_modal').attr('class'));

    $('#video_modal').on('hide.bs.modal', function () {
    	console.log("stop playing");
    	post("pause");
	});

    // var modalCloseBtn = document.getElementById('video_modal_close_btn');

    // if (modalCloseBtn)
    // {
    // 	$(modalCloseBtn).on('click', function() {
    //     	post("pause");

    //     	console.log("pause video");
    // 	});
    // }

    // Helper function for sending a message to the player
    function post(action, value) {

    	// console.log("post" + action);

        var data = {
          method: action
        };
<<<<<<< HEAD
        
        if (value) {
            data.value = value;
        }
        
=======

        if (value) {
            data.value = value;
        }

>>>>>>> ef2200aa7329e9ad22b736e5fc7c88340a75d5d1
        var message = JSON.stringify(data);

        // console.log("message " + message);
        // console.log("origin " + playerOrigin);

		player[0].contentWindow.postMessage(data, playerOrigin);

    }

    function onReady() {

        status.text('ready');
<<<<<<< HEAD
        
=======

>>>>>>> ef2200aa7329e9ad22b736e5fc7c88340a75d5d1
        post('addEventListener', 'pause');
        post('addEventListener', 'finish');
        post('addEventListener', 'playProgress');
    }

    function onFinish() {

        status.text('finished');
    }
<<<<<<< HEAD
};
=======
}
>>>>>>> ef2200aa7329e9ad22b736e5fc7c88340a75d5d1

function onNavLogoClick(){

	closeMenu();

	$('html, body').animate({scrollTop: 0}, 600);
}


function onAboutClick(){

	closeMenu();

	var about = document.getElementById("about-section");
<<<<<<< HEAD
	
=======

>>>>>>> ef2200aa7329e9ad22b736e5fc7c88340a75d5d1
	$('html, body').animate({
                        scrollTop: $(about).offset().top
                    }, 600);

}


function onTeamClick(){

	closeMenu();

	var team = document.getElementById("team-section");


	$('html, body').animate({
                        scrollTop: $(team).offset().top
                    }, 600);

}


function onSubscribeClick(){
<<<<<<< HEAD

=======
>>>>>>> ef2200aa7329e9ad22b736e5fc7c88340a75d5d1
	closeMenu();

	var subscribeModal = document.getElementById("subscribe_modal");
	var subscribeSection = document.getElementById("subscribe_section");
<<<<<<< HEAD

	/* if we're on mobile or a small screen, we want to avoid modals*/

	if (subscribeSection && $(subscribeSection).css('display') != "none")
	{
=======
	/* if we're on mobile or a small screen, we want to avoid modals*/

	if (subscribeSection && $(subscribeSection).css('display') != "none") {
>>>>>>> ef2200aa7329e9ad22b736e5fc7c88340a75d5d1
		$('html, body').animate({
                        scrollTop: $(subscribeSection).offset().top
                    }, 600);

	} else if(subscribeSection){
<<<<<<< HEAD

		$(subscribeModal).modal('show');
	}

	
=======
		$(subscribeModal).modal('show');
	}
>>>>>>> ef2200aa7329e9ad22b736e5fc7c88340a75d5d1
}


function prepForm(){


}

function closeMenu()
{
	var menu = document.getElementById('nav-collapse');

	if (menu)
	{
		$(menu).collapse('hide');
	}
}


function closeVideoModal(){


}