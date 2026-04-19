switch_btn();

function switch_btn()
{
    var btn_sign = document.getElementById("sign-btn");
    var btn_log = document.getElementById("log-btn");

    var sign = document.getElementById("sign");
    var log = document.getElementById("log");

    btn_sign.addEventListener('click', ()=>{
        sign.style.display = 'block';
        log.style.display = 'none';

        btn_sign.style.display = 'none';
        btn_log.style.display = 'flex';

    })

    btn_log.addEventListener('click', ()=>{
        log.style.display = 'block';
        sign.style.display = 'none';

        btn_log.style.display = 'none';
        btn_sign.style.display = 'flex';

    })
}