<template>
    <body class="login-body">
        <div class="login-container" :class="{'signup-mode' : signuppage.mode}">

            <!-- <div class="blurred-backdrop" v-show="signup" @click="signup = false"></div> -->

            <div class="login-details">
                
                <div class="login-text">
                        <div class="onyx-logo hidden">
                            <img src="https://onyxtrade.in/img/loader.969f5ec2.gif">
                        </div>
                
                        Login <div>
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </div>
                        
                </div>
          
                    <div class="email- input-box">
                        <div class="text">
                           Enter Email
                        </div>
                        <input type="email" placeholder="Enter Your Email">
                        <div class="bborder"></div>
                        <div v-show="false" class="error-handle">Please write valid email address</div>
                    </div>

                    <div class="password-box input-box">
                        <div class="text">
                           Enter Password
                        </div>
                        <input type="password" v-model="loginpage.password" placeholder="Enter Your Password">
                        <div class="bborder"></div>
                        <password-meter :password="loginpage.password" />
                    </div>

                    <!-- ---- SIGN IN BUTTON ---- -->

                    <button :disabled="false" class="signin-btn btn">Sign in</button>

                    <!-- ---- SIGN UP BUTTON ---- -->

                    <button :disabled="false" class="signup-btn btn" @click="signuppage.mode = true">Sign up</button>
                     

                    <div class="exchange-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,10a1,1,0,0,0-1-1H5.41l2.3-2.29A1,1,0,0,0,6.29,5.29l-4,4a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,11H17A1,1,0,0,0,18,10Zm3.92,3.62A1,1,0,0,0,21,13H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.92,13.62Z"/></svg>
                    </div>

            
                    <div class="google-signin">
                       Sign in with <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z"/></svg>
                    </div>
                </div>


            <!-- ---------- SIGN UP PAGE ------------  -->
    

            <div class="signup-details" :class="{'verification' : signuppage.verify}">
                

                <div class="signup-text">
                    <div class="onyx-logo hidden">
                        <img src="../assets/loader.gif">
                    </div>
                    Sign Up <div>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>


                    <div v-show="!signuppage.verify" class="email-box">
                        <div>
                            Enter Email
                        </div>
                        <input type="email" placeholder="Enter Your Email">
                        <div class="bborder"></div>
                        <div v-show="false" class="error-handle">Please write valid email address</div>
                    </div>

                    <div v-show="!signuppage.verify" class="password-box">
                        <div>
                            Enter Password
                        </div>
                        <input type="password" v-model="signuppage.password" placeholder="Enter Your Password">
                        <div class="bborder"></div>
                        <password-meter :password="signuppage.password" />
                    </div>

                    <div v-show="!signuppage.verify" class="confirm-password-box password-box input-box">
                        <div class="text">
                            Confirm Password
                        </div>
                        <input type="password" v-model="signuppage.confirmpassword" placeholder="Confirm Your Password">
                        <div class="bborder"></div>
                        <password-meter :password="signuppage.confirmpassword" />
                    </div>
                        
                        
                    <button v-show="!signuppage.verify" :disabled="false" class="signup-btn btn" @click="signuppage.verify=true">Sign up</button>


                    <!-- ----------- PC SIGN IN BUTTON -----------  -->

                    <button :disabled="false" class="pc signin-btn btn" @click="signuppage.mode = false">Sign in</button>

                    <!-- ----------- MOBILE GOOGLE SIGN UP BUTTON -----------  -->

                    <div v-show="!signuppage.verify" class="hidden google-signin mobile">
                        Sign up with <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z"/></svg>
                    </div>     


                <!-- ----------------- VERIFICATION PAGE ---------------  -->

                <div v-show="signuppage.verify" class="verify-cover">
                    <div class="text-cover">
                        <div class="back-btn" @click="signuppage.verify=false">
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/></svg>
                            
                        </div>
                    <div class="text">Verification !</div>
                        
                    </div>
                    <div class="google-signin">
                    Please verify yourself with <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z"/></svg>
                    </div>

                    <div class="warning-text">
                        Make sure to login with same email you provided in signup ...
                    </div>
               
                </div>

                    

                <div class="exchange-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,10a1,1,0,0,0-1-1H5.41l2.3-2.29A1,1,0,0,0,6.29,5.29l-4,4a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,11H17A1,1,0,0,0,18,10Zm3.92,3.62A1,1,0,0,0,21,13H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.92,13.62Z"/></svg>
                </div>

                <!-- ------------ PC GOOGLE SIGNIN BUTTON ------------ -->
                <div class="pc google-signin">
                   Sign up with <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z"/></svg>
                </div>

                <!-- ---------- MOBILE SIGNIN BUTTON ----------- -->

                <button :disabled="false" class="hidden signin-btn btn mobile" @click="signuppage.mode = false">Sign in</button>

            </div>


            

            <div class="img-div">
                <!-- <div class="theme-switcher">
                    <div class="circle">
                        
                    </div>
                </div> -->
                
                <img src="https://onyxtrade.in/img/loader.969f5ec2.gif">
            </div>
        </div>

    </body>    
</template>
<script>
    import { ref , reactive } from 'vue';
    import { defineComponent } from 'vue';
    import PasswordMeter from 'vue-simple-password-meter';
    // import dragVerify from 'vue-drag-verify'

    
        export default defineComponent({
                    components: {
                        PasswordMeter,
                        // dragVerify
                    },
                    setup(){
                        const loginpage = reactive({
                            password : ref(''),
                        });
                        const signuppage = reactive({
                            password : ref(''),
                            confirmpassword : ref(''),
                            verify : false,
                            mode : false,
                            signup: false,
                        });
                        return {
                            loginpage,signuppage
                        }
                    }
                    
                });
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
body{
  font-family: "Lato", sans-serif;
  background: rgb(38 38 38);
}

.login-body{
  background: url(https://i.ibb.co/dGzyN5r/Black-abstract-modern-background-vector-illustration.jpg) no-repeat center center/cover;    
    color: white;
}

.blurred-backdrop{
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgb(0 0 0/0.3);
    backdrop-filter: blur(6px);
    z-index: 10;
}

.login-container{
    height: 468px;
    background: rgb(25 25 25);
    width: 800px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 15px;
    display: grid;
    grid-template-columns: 50% 50%;
    box-shadow: 0 0 15px rgb(0 0 0/0.6);
}

.login-container input{
    background: transparent;
    border-bottom: 1px solid rgb(250 250 250/0.3);
    position: relative;
    width: 100%;
    padding: 3px 0;
}

.login-container input::placeholder{
    color: transparent;
}

.bborder{
    position: absolute;
    bottom: 0px;
    height: 1px;
    width: 0;
    background: #ff2d2d;
}

.password-box .bborder{
    bottom: 13px;
}

.login-container > div input:focus-within + .bborder{
    width: 100%;
    transition: width 0.3s;
}

.input-box{
    position: relative;
}

.email-box , .password-box{
    position: relative;
}

.buttons-group{
    width: min-content;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    margin-top: 15px;
}

.btn{
    background: #ff4243;
    width: 90%;
    border-radius: 5px;
    padding: 4px 0 8px 0;
    text-align: center;
    font-weight: 600;   
    cursor: pointer;
    border: 1px solid #ff2d2d;
}

.login-container .btn:nth-of-type(2){
    justify-self: end;
}

.login-details .signup-btn , .signup-details .signin-btn{
    border: 1px solid rgb(250 250 250/0.5);
    /*margin-left: 25px;*/
    color: rgb(250 250 250/0.9);
    background: rgb(250 250 250/0.1);
}

.login-details .signup-btn:hover , .signup-details .signin-btn:hover , .google-signin:hover{
    background: rgb(250 250 250/0.2);
}

.exchange-svg svg{
    height: 25px;
    margin: 0 auto;
    fill: rgb(250 250 250/0.9);
}

.login-details , .signup-details{
    padding: 25px 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-right: 100px;
}

.login-details > div , .signup-details > div{
    grid-column: 1 / span 3;
}

.google-signin img{
    height: 200px;
}

.google-signin{
    height: 40px;
    width: 100%;
    white-space: nowrap;
    background: rgb(250 250 250/0.1);
    border: 1px solid rgb(250 250 250/0.5);
    padding-bottom: 2px;
    border-radius: 5px;
    font-size: 18px;
    display: grid;
    place-items: center;
    cursor: pointer;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.google-signin:active{
    transform: scale(0.95);
}
.google-signin svg{
    width: 20px;
    fill: #ff4243;
    filter: drop-shadow(0 0 50px #ff4243);
    margin-left: 8px;
    margin-top: 2px;
}

.img-div{
    position: absolute;
    height: 106%;
    right: -10px;
    top: -3%;
    width: 50%;
    background: rgb(38 38 38);
    box-shadow: 0px 0 15px rgb(0 0 0/0.5);
    border-radius: 15px;
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    transition: transform 0.5s ease;

}

.img-div img{
    margin: auto;
}

.theme-switcher{
    display: block;
    width: 60px;
    height: 30px;
    border: 1px solid rgb(250 250 250/0.3);
    border-radius: 25px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    position: absolute;
}
.theme-switcher .circle{
    position: relative;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: white;
    left: 3px;
}

.login-text , .signup-text{
    font-size: 36px;
    font-weight: 800;
    color: whitesmoke;
    letter-spacing: 1px;
    color: rgb(250 250 250/0.8);
    display: flex;
    font-family: 'Roboto', sans-serif;
    display: flex;      
}

.signup-text{
    position: relative;
    bottom: 10px;
}

.login-text img , .signup-text img{
    height: 40px;
    position: relative;
    top: 6px;
    right: 8px;
}

.login-text span , .signup-text span{
    animation: dot 3s infinite;
    opacity: 0;
}

@keyframes dot{
    50%{
        opacity: 1;
    }
}

.login-text > div , .signup-text > div{
    margin-left: 10px;
}

.login-text span:nth-child(2) , .signup-text span:nth-child(2){
    animation-delay: 1s;
}

.login-text span:nth-child(3) , .signup-text span:nth-child(3){
    animation-delay: 2s;
}

.signup-mode .img-div{
    transform: translateX(-105%);
}

.login-container .btn:disabled{
    cursor: not-allowed;
}

.error-handle{
    white-space: nowrap;
    position: absolute;
    color: #ff4243;
    font-size: 14px;
}

.po-password-strength-bar {
    border-radius: 2px;
    transition: all 0.2s linear;
    height: 5px;
    margin-top: 8px;
}

.po-password-strength-bar.risky {
    background-color: #ff4243;
    width: 20%;
}

.po-password-strength-bar.guessable {
    background-color: #fb964d;
    width: 40%;
}

.po-password-strength-bar.weak {
    background-color: #fdd244;
    width: 60%;
}

.po-password-strength-bar.safe {
    background-color: #b0dc53;
    width: 80%;
}

.po-password-strength-bar.secure {
    background-color: #35cc62;
    width: 100%;
}

.verify-cover{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 11;
}

.verify-cover .text-cover{
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.5px;
}
.verify-cover .warning-text{
    color: #ff4243;
    font-size: 18px;
}
.back-btn{
    background: #ff4243;
    border-radius: 6px;
    margin-right: 20px;
}
.verify-cover .text-cover svg{
    height: 30px;
    border-radius: 6px;
}
.email-box{
    margin-bottom: 13px;
}

@media screen and (max-width: 750px){
    .login-body{
        font-family: 'Josefin Sans', sans-serif !important;
    }
    .img-div , .bborder , .signup-details .pc{
        display: none;
    }
    .signup-details .mobile{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .onyx-logo{
        top: 5px !important;
    }
    .btn , .google-signin{
        padding: 6px 0 !important;
    }
    .google-signin svg{
        margin-bottom: 4px;
    }
    .back-btn{
        padding: 5px;
        position: relative;
        top: -3px;
    }
    .verify-cover .text-cover svg{
        height: 35px;
        width: 35px;
        position: relative;
        right: 1px;
    }


    .login-text , .signup-text{
        color: white;
        font-size: 40px;
        font-family: 'Josefin Sans', sans-serif !important;
    }
    .login-container{
        height: 100%;
        width: 100%;
        background: #262626;
        border-radius: 0;
        font-size: 17px;
        position: relative;
        top: 0;
        left: 0;
        transform: unset;
        z-index: 1;
        overflow: hidden ;
    }
    .login-container .btn{
        grid-column: 1 / span 3;
        width: 100%;
        height: 55px;
        font-size: 20px;
        letter-spacing: 0.5px;
    }
    .onyx-logo{
        display: unset !important;
        transform: scale(2.2);
        z-index: -1;
        position: relative;
        top: 8px;
    }
    .login-details , .signup-details{
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 20px 40px;
        background: #262626;
    }

    .exchange-svg svg{
        height: 40px;
    }

    .login-container input::placeholder{
        color: rgb(250 250 250/0.5);
    }

    .email-password .text{
        font-size: 20px;
    }

    .google-signin{
        height: 60px;
        padding: 6px 0 10px 0;
        font-size: 20px;
        letter-spacing: 0.5px;
    }

    .google-signin svg{
        width: 25px;
        margin-top: 0;
    }

    .login-container input{
        border: 1px solid rgb(250 250 250/0.3);
        border-radius: 6px;
        padding: 12px 16px;
        margin-top: 12px;
    }

    .login-container input:focus-within{
        border: 1px solid #ff2d2d;
    }

    .login-container input:focus-within::placeholder{
        color: transparent !important;
    }

    .login-details{
        transform: translateX(0);
        transition: transform 0.4s;
    }

    .verification{
        grid-template-rows: 20% 60% 10% 10%;
    }

    .signup-details{
        transform: translateX(100%);
        transition: transform 0.4s;
    }

    .signup-mode .signup-details{
        transform: translateX(0);
    }

    .signup-mode .login-details{
        transform: translateX(-100%);
    }

    .verify-cover{
        transition: transform 0.4s;
    }
}
</style>