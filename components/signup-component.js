class Signup extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
             <style>
             .signup-div{
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
            
            <!-- Signup heseg -->
            <div class="signup-div">
                <form action="" id = "signupForm">
                    <!-- Logo -->
                    <img src="assets/logo.jpg" alt="Logo">

                    <!-- Name -->
                    <div>
                        <input name="name" type="name" placeholder="Enter Name">
                    </div>

                    <!-- Phone number -->
                    <div>
                        <input name="phonenumber" type="number" placeholder="Enter Phone Number">
                    </div>
        
                    <!-- Email -->
                    <div>
                        <input name="username" type="name" placeholder="Enter Username">
                    </div>
        
                    <!-- Password -->
                    <div>
                        <input name="password" type="password" placeholder="Enter Password">
                    </div>
        
                    <!-- Login button -->
                   <button name="submit-button" type="submit">Sign Up</button>
                </form>
            </div>
        `;
    }

    connectedCallback()
    {
        const signupForm = this.shadowRoot.getElementById('signupForm');

        signupForm.addEventListener('submit', async (event) => {

            event.preventDefault();

            const name = signupForm.querySelector('input[name="name"]').value;
            const phonenumber = signupForm.querySelector('input[name="phonenumber"]').value;
            const username = signupForm.querySelector('input[name="username"]').value;
            const password = signupForm.querySelector('input[name="password"]').value;

            try {
                const response = await fetch('http://localhost:3000/createuser', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        phonenumber: phonenumber,
                        username: username,
                        password: password,
                    }),
                });

                const data = await response.json();
                console.log(data);

            } 
            catch (error) 
            {
                console.error(error);
            }
        });
    }
}
window.customElements.define('signup-comp', Signup);