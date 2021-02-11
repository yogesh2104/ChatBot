var username = ''

function send_message(message) {
    var prevSms = $('.containers').html();
    if (prevSms.length > 8) {
        prevSms = prevSms + '<br>'
    }
    $('.containers').html(prevSms + '<span class="cureent_sms">' + '<span class="bot">Chatbot: </span>' + message + '</span>');

    $('.cureent_sms').hide();
    $('.cureent_sms').delay(50).fadeIn();
    $('.cureent_sms').removeClass("current_sms");
}

function get_username() {
    send_message('Hi, friend what is your name....?');
}

function ai(message) {
    if (username.length < 3) {
        username = message;
        send_message('Hi, nice to meet you ' + username + ', Should you have any question you can ask me ');
    }
    if ((message.indexOf('how are you') >= 0) || (message.indexOf('about you') >= 0)) {
        send_message('Am okey, thanks for ask ' + '<i>' + username + '</i>');
    }
    if ((message.indexOf('what is your name') >= 0) || (message.indexOf('name') >= 0)) {
        send_message('My name in ChatBox.. am here to chat with you..');
    }
    if ((message.indexOf('sex') >= 0) || (message.indexOf('love') >= 0)) {
        send_message('Am sorry i can not tell you about that.');
    }
    if (message.indexOf('time') >= 0) {
        var date = new Date();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        send_message('Current time is: ' + hour + ':' + minutes);
    }
    if ((message.indexOf('Online Examination System') >= 0) || (message.indexOf('online examination system') >= 0)) {
        send_message('Online examination system is a web-based examination system where examinations are given online. Either through the internet or intranet using computer system.');
    }
    if ((message.indexOf('Examination') >= 0) || (message.indexOf('examination') >= 0)) {
        send_message('Online examination system is a web-based examination system where examinations are given online. Either through the internet or intranet using computer system.');
    }
    if ((message.indexOf('advantage') >= 0) || (message.indexOf('Advantages') >= 0)) {
        send_message('An online examination system has plenty of advantages<br> 1) It saves paper.<br> 2) It saves time.<br> 3) It saves you money. <br> 4) Its more secure.');
    }
    if ((message.indexOf('disadvantage') >= 0) || (message.indexOf('Disadvantages') >= 0)) {
        send_message('u have to keep in mind that your students will take the exam on their own device in their own time with nobody to check up on them, so you have to alter your questions to provide for this situation. You have to ask questions which are not easily to be retrieved from books or the internet. Or you can add a timer to each question so their is no time to search for the answer. ');
    }
    if ((message.indexOf('Why') >= 0) || (message.indexOf('Why use an online examination system?') >= 0)) {
        send_message('There are lots of reasons you want to use an online exam system, but the main reason is the overwelming advantages you get form using such an online exam system instead of the good old fashioned paper exam.');
    }
    if ((message.indexOf('objective') >= 0) || (message.indexOf('Objectives of online examination system') >= 0)) {
        send_message('Objectives of online examination 1) User-friendly system <br> 2) Responsive design <br> 3) Offering several types of questions <br> 4) Auto exam publish<br> 5) Automatically checked answers <br> 6) Reports and performance analysis');
    }
    if ((message.indexOf('old') >= 0) || (message.indexOf('your age') >= 0)) {
        send_message('I do not know how old i am.. am sorry..!!');
    }
    if (message.indexOf('^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$')) {
        $(text - sms).keyup(function(e) {
            if (e.keycode == 13) {
                var result = eval($(this).val());
                send_message($(this).val(result));
            }
        });

    }
}
$(function() {
    get_username();

    $('#text-sms').keypress(function(event) {
        if (event.which == 13) {
            if ($('#enter').prop('checked')) {
                $('#send-button').click();
                event.preventDefault();
            }
        }
    });
    $('#send-button').click(function() {
        var username = '<span class="username">You: </span>'
        var sms = $('#text-sms').val();
        $('#text-sms').val('');
        var prevSms = $('.containers').html();
        if (prevSms.length > 8) {
            prevSms = prevSms + '<br>'
        }
        $('.containers').html(prevSms + username + sms);

        $('.containers').scrollTop($('.containers').prop('scrollHeight'));

        ai(sms);
    });
});

function closeform() {
    document.getElementById("hide").style.visibility = "visible";
    document.getElementById("myform").style.display = "none";
}

function openform() {
    document.getElementById("hide").style.visibility = "hidden";
    document.getElementById("myform").style.display = "block";
}