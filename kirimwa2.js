$(document).on('submit','form', function(e){
    e.preventDefault();
    var input_blanter = document.getElementById('nomor');
    
    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6285298999962',
        walink2 = 'Halo',
        text_no = 'Isi semua Formulir lalu klik Submit.';
    
    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
    }
    
    if("" != input_blanter.value){
    
     /* Call Input Form */
    var input_name1 = $("#nama").val(),
        input_domisili = $("#domisili").val(),
        input_number1 = $("#nomor").val(),
        input_email = $("#email").val();
        
    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
        '*Nama* : ' + input_name1 + '%0A' +
        '*Domisili* : ' + input_domisili + '%0A' +
        '*Nomor HP* : ' + input_number1 + '%0A' +
        '*Email* : ' + input_email + '%0A';
    
    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');
    
    } else {
        document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
    }
    });