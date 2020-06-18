$(document).ready(function() { 

	console.log("user_profile_settings script is working");

	//by defaulf we show meditations page:

	//NEED TO ASYNC THIS SEQUENCE
	$('.individual_meditation_recording_player_9809403065').hide();
	hide_headspace_page();

	hide_settings_page ();
	
	show_meditations_page();

	//show_meditation_recording_player();

	// function exec() {

	// };

// function show_meditation_recording_player() {
// 	hide_meditations_page();
// 	$('.individual_meditation_recording_player_9809403065').show();
// 	$('#playback_instruction').show();
// 	$('html').addClass('individual_meditation_recording_player_background');
// 	$('body').addClass('individual_meditation_recording_player_body');

// 	$('#bottom_fixed_nav_bar_9809403065').hide();

// 	//search chrome.storage variable to determine how many minutes user sets as their default meditation period
// 	chrome.storage.sync.get('stored_medi_duration', function(data) {
// 		console.log(" the latest stored medi duration before we open the meditation window is " + data.stored_medi_duration);
// 		//medi_frequency = parseInt(data.stored_medi_frequency, 10);

// 		if (data.stored_medi_duration == "1") {
// 			document.getElementById("meditation_session_length_option_1").classList.add("meditation_session_length_option_chosen");
// 			document.getElementById("meditation_session_length_option_3").classList.remove("meditation_session_length_option_chosen");
// 			document.getElementById("meditation_session_length_option_5").classList.remove("meditation_session_length_option_chosen");
// 		}
// 		else if (data.stored_medi_duration == "3") {
// 			document.getElementById("meditation_session_length_option_1").classList.remove("meditation_session_length_option_chosen");
// 			document.getElementById("meditation_session_length_option_3").classList.add("meditation_session_length_option_chosen");
// 			document.getElementById("meditation_session_length_option_5").classList.remove("meditation_session_length_option_chosen");
// 		}
// 		else {
// 			document.getElementById("meditation_session_length_option_1").classList.remove("meditation_session_length_option_chosen");
// 			document.getElementById("meditation_session_length_option_3").classList.remove("meditation_session_length_option_chosen");
// 			document.getElementById("meditation_session_length_option_5").classList.add("meditation_session_length_option_chosen");
// 		}
// 	});

// };



function hide_headspace_page() {
	;
};

function hide_settings_page () {
		$('html').removeClass();
		$('body').removeClass('settings_page_body');
		
		$(".user_profile_id_9809403065").hide();
		$(".user_profile_section_show_9809403065").hide();
		
		$(".settings_box_size_9809403065").hide()
};

function hide_meditations_page () {
		$('html').removeClass();
		$('body').removeClass('meditations_page_body');

		$('.recommended_meditation_recording_9809403065').hide()
		$('.recording_lists_9809403065').hide();
		//we should NOT need this bevause by default the below class is hidden
		// $('individual_meditation_recording_player_9809403065').hide();
};

function show_meditations_page() {
	hide_settings_page();
	hide_headspace_page();
	$('html').addClass('meditations_page_background');
	$('body').addClass('meditations_page_body');
	$(".recommended_meditation_recording_9809403065").show();
	$('.recording_lists_9809403065').show();
};


function show_settings_page() {
	hide_headspace_page();
	hide_meditations_page();

	$('html').addClass('settings_page_background');
	$('body').addClass('settings_page_body');

	$(".user_profile_id_9809403065").show();
	$(".user_profile_section_show_9809403065").show();
	
	// $(".user_profile_menu_show_9809403065").show();
	$(".settings_box_size_9809403065").show();
	

	//by default show the 'my stats' section
	$('#settings_options_9809403065').hide();
		$('#nudge_options_9809403065').hide();
		$('#my_stats_details_9809403065').show();
		//highlight the color of the title 'my stats' while graying out 'schedule' and 'nudge'
		$('#settings_my_stats_text_9809403065').css("color", "#5c84f1");
		$('#settings_my_stats_9809403065').css("border-bottom", " 4px solid #5c84f1");

		$('#settings_scheduled_meditation_text_9809403065').css("color", "#a5abb8");
		$('#settings_scheduled_meditation_9809403065').css("border-bottom", "0px");

		$('#settings_nudge_text_9809403065').css("color", "#a5abb8");
		$('#settings_nudge_9809403065').css("border-bottom", "");
};

///////////////fixed bottom bar nav allows us to switch bewteen pages//////////

//clicking meditations page shows recommended meditations and other recordings while hiding other pages:
$('#meditations_page_9809403065').on('click', function(event) {

	hide_settings_page (); 
	show_meditations_page();

	//change color and font size of the nav bar tab
	$('#front_page_9809403065').css('color', '#a5abb8');
	$('#settings_9809403065').css('color', '#a5abb8');
	$('#meditations_page_9809403065').css('color', 'rgb(22,27,37)');

	$('#front_page_9809403065').css('font-size', '1.3rem');
	$('#settings_9809403065').css('font-size', '1.3rem');
	$('#meditations_page_9809403065').css('font-size', '1.42rem');

});

//clicking user icon shows user profile menu and section and hides other pages

$('#settings_9809403065').on('click', function(event) {

	hide_meditations_page (); 
	show_settings_page();

	//change color of the nav bar tab
	$('#meditations_page_9809403065').css('color', '#a5abb8');
	$('#front_page_9809403065').css('color', '#a5abb8');
	$('#settings_9809403065').css('color', 'rgb(22,27,37)');

	$('#front_page_9809403065').css('font-size', '1.3rem');
	$('#settings_9809403065').css('font-size', '1.42rem');
	$('#meditations_page_9809403065').css('font-size', '1.3rem');


});

/////////////////////////////////////////////////////////////////////////////




//========USER INTERACTION WITH THE 3 PAGES: MY STATS * SETTINGS * NUDGE======
//change color of the title of each parts MY STATS * SETTINGS * NUDGE when they are clicked

	//clicking 'my stats' 
	$('#settings_my_stats_text_9809403065').on('click', function (event) {
		$('#settings_options_9809403065').hide();
		$('#nudge_options_9809403065').hide();
		$('#my_stats_details_9809403065').show();
		//highlight the color of the title 'my stats' while graying out 'schedule' and 'nudge'
		$('#settings_my_stats_text_9809403065').css("color", "#5c84f1");
		$('#settings_my_stats_9809403065').css("border-bottom", " 4px solid #5c84f1");

		$('#settings_scheduled_meditation_text_9809403065').css("color", "#a5abb8");
		$('#settings_scheduled_meditation_9809403065').css("border-bottom", "0px");

		$('#settings_nudge_text_9809403065').css("color", "#a5abb8");
		$('#settings_nudge_9809403065').css("border-bottom", "");
	});

	//clicking 'schedule'
	$('#settings_scheduled_meditation_text_9809403065').on('click', function (event) {
		$('#nudge_options_9809403065').hide();
		$('#my_stats_details_9809403065').hide();
		$('#settings_options_9809403065').show();

		$('#settings_scheduled_meditation_text_9809403065').css("color", "#5c84f1");
		$('#settings_scheduled_meditation_9809403065').css("border-bottom", " 4px solid #5c84f1");

		$('#settings_my_stats_text_9809403065').css("color", "#a5abb8");
		$('#settings_my_stats_9809403065').css("border-bottom", "");

		$('#settings_nudge_text_9809403065').css("color", "#a5abb8");
		$('#settings_nudge_9809403065').css("border-bottom", "");


		//console.log('HI HI HI HI');
	});


	//clicking 'nudge' reveal setting options
	$('#settings_nudge_9809403065').on('click', function (event) {
		$('#settings_options_9809403065').hide();
		$('#nudge_options_9809403065').show();
		$('#my_stats_details_9809403065').hide();

		$('#settings_nudge_text_9809403065').css("color", "#5c84f1");
		$('#settings_nudge_9809403065').css("border-bottom", " 4px solid #5c84f1");

		$('#settings_my_stats_text_9809403065').css("color", "#a5abb8");
		$('#settings_my_stats_9809403065').css("border-bottom", "");

		$('#settings_scheduled_meditation_text_9809403065').css("color", "#a5abb8");
		$('#settings_scheduled_meditation_9809403065').css("border-bottom", "0px");
	});

//===========================================================================//





//=======SAVING ON/OFF STATE AND SETTINGS OF SCHEDULED MEDITATION=============


	$('#settings_options_save_9809403065').on('click', function (event) {
		
		console.log(" scheduled meditation settings saved");


		//see if checkbox got checked
		var scheduled_meditation_checkbox = $('#scheduled_meditation_checkbox_9809403065').prop("checked");
		//if checkbox is checked, and current status of scheduled meditation is off, then send a mesage to background.js script teling it to turn scheduled meditation on
		if (scheduled_meditation_checkbox) {

			chrome.storage.sync.get(['stored_scheduled_meditation_checkbox'], function(data){
			    //console.log('stored_scheduled_meditation_checkbox is ' + data.stored_scheduled_meditation_checkbox);
			    if (data.stored_scheduled_meditation_checkbox == false) {
			    	chrome.runtime.sendMessage({message: "turn on scheduled meditation"}, function(r) {});
			    }
			});
		}
		//else, if checkbox is not checked, and current status of scheduled meditation is on, then send a mesage to background script teling it to turn scheduled meditation off
		else {
			chrome.storage.sync.get(['stored_scheduled_meditation_checkbox'], function(data){
			   // console.log('stored_scheduled_meditation_checkbox is ' + data.stored_scheduled_meditation_checkbox);
			    if (data.stored_scheduled_meditation_checkbox == true) {
			    	chrome.runtime.sendMessage({message:  "turn off scheduled meditation"}, function(r) {});
			    }
			});
		}
		
		// in either scenario, update stored_scheduled_meditation_checkbox 
		chrome.storage.sync.set({stored_scheduled_meditation_checkbox: scheduled_meditation_checkbox }, 
			function() {console.log('scheduled meditation?  ' + scheduled_meditation_checkbox );
		});


		var work_start_time, work_end_time;

		// function storeWorkStartTime(callback) {
			//calculate the time for work and and start time  
			var work_start_time = $('#work_start_time_9809403065').prop('value');
			var work_start_time_am_pm = $('#work_start_time_am_pm_9809403065').prop('value');
			//console.log('work_start_time_am_pm is ' + $('#work_start_time_am_pm_9809403065').prop('value'));
			work_start_time = parseInt(work_start_time,10);
			work_start_time_am_pm  = parseInt(work_start_time_am_pm ,10);
			work_start_time = (work_start_time + work_start_time_am_pm);
			if (work_start_time == 12) {work_start_time = 0;}
			if (work_start_time == 24) {work_start_time = 12;}
			//console.log('work start time entered is ' + work_start_time);

			//callback();
		// };

		// function storeWorkEndTime (callback) {
			var work_end_time = $('#work_end_time_9809403065').prop('value');
			var work_end_time_am_pm = $('#work_end_time_am_pm_9809403065').prop('value');
			//console.log('work_end_time_am_pm is ' + work_end_time_am_pm);
			work_end_time = parseInt(work_end_time,10);
			work_end_time_am_pm = parseInt(work_end_time_am_pm,10);
			work_end_time = (work_end_time + work_end_time_am_pm);
			if (work_end_time == 12) {work_end_time = 0;}
			if (work_end_time == 24) {work_end_time = 12;}
			//console.log('work end time is ' + work_end_time);

		// 	callback();
		// }
		
		// storeWorkStartTime( function() {
			chrome.storage.sync.set({stored_work_start_time: work_start_time}, function() {	
				// console.log('work start time entered is ' + work_start_time);

				//confirm user input is properly stored
				chrome.storage.sync.get(['stored_work_start_time'], function(data) {
				          console.log('stored_work_start_time is ' + data.stored_work_start_time);
				});
			});
		// });

		// storeWorkEndTime( function() {
			chrome.storage.sync.set({stored_work_end_time: work_end_time}, function() {	
				//console.log('work end time entered is ' + work_end_time);
				//confirm user input is properly stored
				chrome.storage.sync.get(['stored_work_end_time'], function(data) {
				          console.log('stored_work_end_time is ' + data.stored_work_end_time);
				});
			});
		// });
		
		var medi_duration = $('#medi_duration_9809403065').prop('value');
		var medi_frequency = $('#medi_frequency_9809403065').prop('value');
		//var active_medi_date =$('#active_medi_date_9809403065').prop('value');

		chrome.storage.sync.set({stored_work_end_time: work_end_time}, 
			function() {
			console.log('work end time is ' + work_end_time);
		});

		chrome.storage.sync.set({stored_medi_duration: medi_duration}, 
			function() {
		console.log('the duration of each mediation period is ' + medi_duration);
		});

		chrome.storage.sync.set({stored_medi_frequency: medi_frequency}, 
			function() {
		console.log('the frequency of each mediation period is ' + medi_frequency);
		});

		// chrome.storage.sync.set({stored_active_medi_date: active_medi_date}, 
		// 	function() {
		// //console.log('days of the week the extension is active: ' + active_medi_date);
		// });
	});

//=======SAVING SETTINGS FOR NUDGE: DISTRACTING SITES=====================


	$('#nudge_options_save_9809403065').on('click', function (event) {
		
		console.log("nudge settings saved");

		var nudge_checkbox = $('#nudge_checkbox_9809403065').prop("checked");
		//if checkbox is checked, and current status of nudge is off, change the chrome.storage value for nudge to nudge to on.  nudge_content script will read this value and enable/disable nudge accordingly
		if (nudge_checkbox) {
			chrome.storage.sync.get(['stored_nudge_checkbox'], function(data){
			    console.log('stored_nudge_checkbox is ' + data.stored_nudge_checkbox);
			    if (data.stored_nudge_checkbox == false) {
			    	chrome.runtime.sendMessage({message: "turn on: nudge"}, function(r) {});
			    }
			});
		}
		//else, if checkbox is not checked, and current status is on, then send a mesage to background script teling it to turn nudge off
		else {
			chrome.storage.sync.get(['stored_nudge_checkbox'], function(data){
			    console.log('stored_nudge_checkbox is ' + data.stored_nudge_checkbox);
			    if (data.stored_nudge_checkbox == true) {
			    	chrome.runtime.sendMessage({message: "turn off: nudge"}, function(r) {});
			    }
			});
		}
		
		// in either scenario, update stored_scheduled_meditation_checkbox 
		chrome.storage.sync.set({stored_nudge_checkbox: nudge_checkbox}, 
			function() {console.log(' nudge on? ' + nudge_checkbox );
		});

		//resolve and store nudge end and start times
		var nudge_start_time = $('#nudge_start_time_9809403065').prop('value');
		var nudge_start_time_am_pm = $('#nudge_start_time_am_pm_9809403065').prop('value');
		//console.log('nudge_start_time_am_pm is ' + $('#nudge_start_time_am_pm_9809403065').prop('value'));
		nudge_start_time = parseInt(nudge_start_time,10);
		nudge_start_time_am_pm  = parseInt(nudge_start_time_am_pm ,10);
		nudge_start_time = (nudge_start_time+ nudge_start_time_am_pm);
		if (nudge_start_time == 12) {nudge_start_time = 0;}
		if (nudge_start_time == 24) {nudge_start_time = 12;}
		

		var nudge_end_time = $('#nudge_end_time_9809403065').prop('value');
		var nudge_end_time_am_pm = $('#nudge_end_time_am_pm_9809403065').prop('value');
		//console.log('nudge_end_time_am_pm is ' + $('#nudge_end_time_am_pm_9809403065').prop('value'));
		nudge_end_time = parseInt(nudge_end_time,10);
		nudge_end_time_am_pm  = parseInt(nudge_end_time_am_pm ,10);
		nudge_end_time = (nudge_end_time + nudge_end_time_am_pm);
		if (nudge_end_time == 12) {nudge_end_time = 0;}
		if (nudge_end_time == 24) {nudge_end_time = 12;}

		chrome.storage.sync.set({stored_nudge_start_time: nudge_start_time}, function() {	
			//console.log('nudge start time entered is ' + nudge_start_time);
			//confirm user input is properly stored
			chrome.storage.sync.get(['stored_nudge_start_time'], function(data){
			        console.log('stored_nudge_start_time is ' + data.stored_nudge_start_time);
			});

		});


		chrome.storage.sync.set({stored_nudge_end_time: nudge_end_time}, function() {	
			//console.log('nudge end time entered is ' + nudge_end_time);
			//confirm user input is properly stored
			chrome.storage.sync.get(['stored_nudge_end_time'], function(data){
			        console.log('stored_nudge_end_time is ' + data.stored_nudge_end_time);
			});

		});



	
	});

});




// //////////////////////////////////////////////////////////////////////////
// //////////////////////INDIVIDUAL MEDITATION RECORDING SUBPAGE//////////////


// //assumption: 
// // settigns and headsapce page are hidden.  
// // meditations page is shown
// // individual_meditation_recording_player_9809403065 is hidden by default


// function show_meditation_recording_player() {
// 	hide_meditations_page();
// 	$('.individual_meditation_recording_player_9809403065').show();
// 	$('html').addClass('individual_meditation_recording_player_background');
// 	$('body').addClass('individual_meditation_recording_player_body');

// 	$('#bottom_fixed_nav_bar_9809403065').hide();
// }

// function hide_meditation_recording_player() {
// 	// stop the media player
// 	$('html').removeClass('individual_meditation_recording_player_background');
// 	$('body').removeClass('individual_meditation_recording_player_body');

// 	$('.individual_meditation_recording_player_9809403065').hide();

// 	//reshow the fixed bottom nav bar
// 	$('#bottom_fixed_nav_bar_9809403065').show();
// }



//  // when user click either an element of class 'recommended_meditation_recording_9809403065' of of class 'recording_track_a_of_list_a_980940306', open the individual_meditation_recording_player_9809403065 AND play the meditation recording

// var inside_meditation_session = false;
// var recording_is_playing = false;
// var chosen_recording = 0;

// //space bar only works to pause/resume a recording when we are inside a meditation session:

// 	$('body').keydown(function (event) {
// 		if (inside_meditation_session == true) {
// 			console.log("inside_meditation_session is true.  can play and pause using space bar");
// 			var recording = document.getElementById("zenbellsound");

// 			if (event.which == 32 && recording_is_playing == true ) {
// 				recording.pause();
// 				recording_is_playing = false;
// 			}
// 			else if (event.which == 32 &&  recording_is_playing == false) {
// 				recording.play();
// 				recording_is_playing = true;
// 			}
// 		}; 
// 	});


// // current list of recordings are taken from home.html.  we can change the links there.
// //
// // 	warming up & getting the right mindset
// var warmup_mindset = document.getElementById("runningsound");
// // 	reading documentations
// // 	debugging
// // 	writing code,
// // 	general breathing, 
// // 	general walking, 
// // 	eneral eating.


// // $('#recommended_meditation_recording_link_9809403065').on('click', function(event) {
// // 	hide_meditations_page();
// // 	show_meditation_recording_player();
// // 	var recording = warmup_mindset;
// // 	recording.play();
// // 	recording_is_playing = true;
// // 	inside_meditation_session = true;
// // });

// $('.recording_track_a_of_list_a_9809403065').on('click', function(event) {
// 	hide_meditations_page();
// 	show_meditation_recording_player();
// 	var recording = document.getElementById("zenbellsound");
// 	recording.play();
// 	recording_is_playing = true;
// 	inside_meditation_session = true;
// });

// //WHEN USER CLICKS 'X' BUTTON
// $('#recording_player_close_button_9809403065').on('click', function(event) {
// 	hide_meditation_recording_player();
// 	$('.individual_meditation_recording_player_9809403065').hide();
// 	show_meditations_page();
// 	inside_meditation_session = false;
// 	var recording = document.getElementById("zenbellsound");
// 	recording.pause();
// 	recording.currentTime = 0;

	
// });


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////



