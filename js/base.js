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

        if (playerOrigin === '*') {
            playerOrigin = event.origin;
        }

        var data = JSON.parse(event.data);

        switch (data.event) {
            case 'ready':
                onReady();
                break;

            case 'finish':
                onFinish();
                break;
        }
    }

    //play the video on button click
	var playbtn = document.getElementsByClassName('play-btn');

    $(playbtn).on('click', function() {
    	post("seekTo", "0");//restart
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

        if (value) {
            data.value = value;
        }

        var message = JSON.stringify(data);

        // console.log("message " + message);
        // console.log("origin " + playerOrigin);

		player[0].contentWindow.postMessage(data, playerOrigin);

    }

    function onReady() {

        status.text('ready');

        post('addEventListener', 'pause');
        post('addEventListener', 'finish');
        post('addEventListener', 'playProgress');
    }

    function onFinish() {

        status.text('finished');
    }
}

function onNavLogoClick(){

	closeMenu();

	$('html, body').animate({scrollTop: 0}, 600);
}


function onAboutClick(){

	closeMenu();

	var about = document.getElementById("about-section");

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
	closeMenu();

	var subscribeModal = document.getElementById("subscribe_modal");
	var subscribeSection = document.getElementById("subscribe_section");
	/* if we're on mobile or a small screen, we want to avoid modals*/

	if (subscribeSection && $(subscribeSection).css('display') != "none") {
		$('html, body').animate({
                        scrollTop: $(subscribeSection).offset().top
                    }, 600);

	} else if(subscribeSection){
		$(subscribeModal).modal('show');
	}
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