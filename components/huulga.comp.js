class Huulga extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <!-- Google icon -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,700,0,0" />
        <style>
        /* huulganii heseg */
        .huulga{
            background-color: #cfe0ee;
            width: 45vw;
            height: 70vh;
            padding: 2rem 3rem;
            border-radius: 2rem;

            p{
                margin:0;
            }
        
            ul{
                margin-top: 2rem;
                list-style-type: none;
                padding: 0;
            }
            
            li{
                border-top: 1px solid var(--main-bg-color);
                width: 100%;
                height: 3rem;
            }
        
            section{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: 900;
            }
        
            /* plus minus icon */
            span{
                height: 3rem;
                width: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size:x-large;
            }
        
            #plus-icn{
                color: rgba(1, 144, 1, 0.6);
            }
        
            #minus-icn{
                color: rgba(170, 0, 0, 0.6);
            }
        }
        
        /* baruun taliin mungun dungiin heseg */
        .mungu{
            text-align: center;
            .uld{
                font-size: 11px;
                color: rgb(120, 118, 118);
                font-style: italic;
                font-weight: 300;
            }
        }
        
        /* guilgeenii utganii heseg */
        .gu-utga{
            text-align: center;
        
            .gu-garchig{
                font-size: 11.5px;
                color: rgb(120, 118, 118);
                font-weight: 300;
            }
        
        }
        </style>

         <!-- huulganii heseg -->
            <div class="huulga">
                <h2>Гүйлгээний мэдээлэл</h2>

                <ul id ="huulgaList">
                </ul>
            </div>
        `;
    }

    //
    async connectedCallback() 
    {
        try 
        {
            const response = await fetch('http://localhost:3000/huulga');
            const data = await response.json();

            this.renderHuulga(data);
        } 
        catch (error) 
        {
            console.error(error);
        }
    }

    //
    renderHuulga(data) 
    {
        const huulgaList = this.shadowRoot.getElementById('huulgaList');

        data.forEach(item => {

            const li = document.createElement('li');

            //
            li.innerHTML = `
                <section>
                    <!-- icon -->
                    <span class="material-symbols-outlined" id="minus-icn">do_not_disturb_on</span>

                    <div class="gu-utga">
                        <p class="gu-garchig">Гүйлгээний утга</p>
                        <p>${item.guilgeenii_utga}</p>
                    </div>

                    <p>Зарлага</p>

                    <div class="mungu">
                        <p>${item.guilgeenii_dun}</p>
                        <p class="uld">Үлдэгдэл: ***** </p>
                    </div>
                </section>
            `;
            huulgaList.appendChild(li);
        });
    }
}
window.customElements.define('huulga-comp', Huulga);