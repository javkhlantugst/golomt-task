class Bank extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({ mode: 'open'});

        this.shadowRoot.innerHTML = `
        <style>
        /* dashboard-nii baruun tal bank hoorondiin heseg */
        .form{
            height: 85vh;
            width: 40vw;
            padding: 1rem 2rem 0rem 2rem;
            background-color: #cfe0ee;
            border-radius: 2rem;
        }
    
        div{
            padding: 0.7rem 0rem 0.8rem 0rem;
        }
    
        /* garchignuud */
        #sh-dans, #h-bank, #h-dans, #a-ner, #g-dun, #walyut, #g-utga{
            color: var(--main-color);
            font-size: 14px;
            font-weight: bolder;
            margin: 0.1rem 0rem ;
            padding-left: 0.2rem;

        }
    
        /* jisheenuudiin heseg  */
        #dans, #ner, #dun, #utga{
            color: rgb(144, 143, 143);
            font-size: 11px;
            font-style: italic;
            padding: 0.2rem 0rem 0rem 0.2rem;
            margin: 0;
        }
    
        h2{
            text-align: center;
            margin: 1rem 0rem;
            color: #062745;
        }
    
        button{
            width: 100%;
            height: 2.5rem;
            border: none;
            background-color: var(--main-color);
            color: white;
            font-size: 15px;
            font-weight: bolder;
            border-radius: 1rem;
            margin-top: 1rem;
        }
    
        button:hover{
            background-color: var(--main-bg-color);
            border: 3px solid var(--main-color);
            color: var(--main-color);
        }
        
        /* bugluh hesguudiin css */
        .avah-dans, .avah-ner, .g-dun, .g-utga{
            input
            {
                width: 100%;
                height: 1.5rem;
                border: none;
                border-radius: 0.5rem;
                font-size: 16px;
                padding: 0rem 0rem 0rem 0.5rem;
            }
        }
        
        /* songoh hesgiin css */
        select{
            background-color: white;
            color: #4a5b6b;
            width: 100%;
            height: 1.5rem;
            border: none;
            font-weight: bolder;
            font-size: 13px;
        }
        </style> 
        
        <!-- Bank hoorondiin guilgee -->
        <div class="form">
        
        <h2>Банк хоорондын гүйлгээ</h2>

        <form action="" id="bankForm">

        <!-- Shiljuulegch dans -->
        <div>
            <p id="sh-dans">Шилжүүлэгч данс</p>
            <select name="dans" id="dans">
                <option value="Харилцах-1825143898">Харилцах-1825143898</option>
                <option value="Харилцах-18251527892">Харилцах-1825152789</option>
            </select>
        </div>

        <!-- Huleen avah bank songoh -->
        <div>
            <p id="h-bank">Хүлээн авах банк</p>

            <select name="bank" id="bank">
                <option value="Khan Bank">Khan Bank</option>
                <option value="Xac Bank">Xac Bank</option>
                <option value="TDB Bank">TDB Bank</option>
                <option value="M Bank">M Bank</option>
                <option value="Capitron Bank">Capitron Bank</option>
            </select>
        </div>

        <!-- Huleen avah dans -->
        <div class="avah-dans">
            <p id="h-dans">Хүлээн авах данс</p>
            <input type="text" name="huleen-avah-dans">
            <p id="dans">e.g 1825143898</p>
        </div>

        <!-- Huleen avagchiin ner -->
        <div class="avah-ner">
            <p id="a-ner">Хүлээн авагчийн нэр</p>
            <input type="name" name="name">
            <p id="ner">e.g Батболд</p>
        </div>

        <!-- Guilgeenii dun -->
        <div class="g-dun">
            <p id="g-dun">Гүйлгээний дүн</p>
            <input type="number" name="guilgee">
            <p id="dun">e.g 1'000'000</p>
        </div>

        <!-- Walyut -->
        <div>
            <p id="walyut">Валют</p>
            
            <select name="val" id="val">
                <option value="MNT">MNT</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CNY">CNY</option>
                <option value="RUB">RUB</option>
            </select>
        </div>

        <!-- Guilgeenii utga -->
        <div class="g-utga">
            <p id="g-utga">Гүйлгээний утга</p>
            <input type="text" name="utga">
            <p id="utga">e.g Орлого</p>
        </div>

        <!-- Submit button -->
        <button type="submit">Гүйлгээ хийх</button>
    
        </form>

        </div>
        `;
    }

    connectedCallback()
    {
        const bankForm = this.shadowRoot.getElementById('bankForm');

        bankForm.addEventListener('submit', async (event) => {

            event.preventDefault();

            const shiljuulsen_dans = bankForm.querySelector('select[name="dans"]').value;
            const huleen_avsan_bank = bankForm.querySelector('select[name="bank"]').value;
            const huleen_avsan_dans = bankForm.querySelector('input[name="huleen-avah-dans"]').value;
            const huleen_avagchiin_ner = bankForm.querySelector('input[name="name"]').value;
            const guilgeenii_dun = bankForm.querySelector('input[name="guilgee"]').value;
            const valyut = bankForm.querySelector('select[name="val"]').value;
            const guilgeenii_utga = bankForm.querySelector('input[name="utga"]').value;

            try {
                const response = await fetch('http://localhost:3000/shiljuuleg',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        shiljuulsen_dans: shiljuulsen_dans,
                        huleen_avsan_bank: huleen_avsan_bank,
                        huleen_avsan_dans: huleen_avsan_dans,
                        huleen_avagchiin_ner: huleen_avagchiin_ner,
                        guilgeenii_dun: guilgeenii_dun,
                        valyut: valyut,
                        guilgeenii_utga: guilgeenii_utga,

                    }),
                });

                const data = await response.json();
                console.log(data);
            } 
            catch (error) 
            {
                console.error(error);
            }
        })
    }
}
window.customElements.define('bank-hoorond-comp', Bank)