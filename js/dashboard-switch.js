dashboard_switch();

function dashboard_switch()
{
    var g_btn = document.getElementById("g-btn");
    var h_btn = document.getElementById("h-btn");

    var bank = document.getElementById("b_ank");
    var huulga = document.getElementById("h_uulga");

    g_btn.addEventListener('click', ()=>{
        bank.style.display = 'block';
        huulga.style.display = 'none';
    })

    h_btn.addEventListener('click', ()=>{
        huulga.style.display = 'block';
        bank.style.display = 'none';
    })
}