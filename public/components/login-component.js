class Login extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
             <style>
             .login-div{
                background-color: #0160b3;
                width: 300px;
                padding: 3rem 2rem 4rem;
                border-radius: 1rem 1rem 0rem 0rem;
                color: white;
            }
            
            form{
                text-align: center;
            
                & img{
                    height: 5rem;
                    margin-bottom: 0.5rem;
                }
            
                & div{
                    margin: 1.5rem 0rem;
                }
            
                & input{
                    width: 90%;
                    height: 2rem;
                    border-radius: 0.5rem;
                    border: none;
                    padding-left: 1rem;
                    font-size: 12.5px;
                }
            
                & button{
                    color: #0160b3;
                    background-color: white;
                    width: 90%;
                    height: 2.2rem;
                    margin-top: 1rem;
                    font-size: 16px;
                    font-weight: bolder;
                    border: none;
                    border-radius: 0.8rem;
                    cursor: pointer;
                }
            
                & button:hover{
                    background-color: #f7f00c;
                }
            }
            </style>
            
            <!-- Login heseg -->
            <div class="login-div">
                <form action="" id = "loginForm">
                    <!-- Logo -->
                    <img src="assets/logo.jpg" alt="Logo">

                    <!-- Email -->
                    <div>
                        <input name="username" type="name" placeholder="Enter Username">
                    </div>
        
                    <!-- Password -->
                    <div>
                        <input name="password" type="password" placeholder="Enter Password">
                    </div>
        
                    <!-- Login button -->
                   <button name="submit-button" type="submit">Log In</button>
                </form>
            </div>
        `;
    }

    connectedCallback()
    {
        const loginForm = this.shadowRoot.getElementById('loginForm');

        loginForm.addEventListener('submit', async (event) => {

            event.preventDefault();

            const username = loginForm.querySelector('input[name="username"]').value;
            const password = loginForm.querySelector('input[name="password"]').value;

            try {
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    }),
                });

                const data = await response.json();

                //
                if (response.status === 200) 
                {
                    console.log(data);
                    window.location.href = '/dashboard.html';
                }
                else 
                {
                    console.error(data.error);
                    alert(data.error); 
                }

            } 
            catch (error) 
            {
                console.error(error);
                alert('An error occurred. Please try again later.');
            }
        });
    }
}
window.customElements.define('login-comp', Login);