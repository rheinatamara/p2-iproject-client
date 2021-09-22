<template>
      <header>
        <div class="header-container">
            <nav id="nav-bar" class="nav-bar">
                <h2 class="logo">Circle</h2>
                <ul>
                    <!-- <li><a href="index.html" class="current">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#contact">CONTACT</a></li> -->
                </ul>
            </nav>
            <div class="header-content">
                <h2>Create your own <span>Circle</span></h2>
                <button id="btn-modal">Create an Account</button>
            </div>
        </div>
            <div id="modal" class="modal">
                <div id="container" class="container">
                    <div class="form-container sign-in-container">
                        <form id="signInForm">
                            <h1 class="center">Sign in</h1>
                                <div class="social-container center">
                                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                                    <a href="#" class="social"><i class="fab fa-twitter"></i></a>
                                </div>
                                <span class="center">or use your account</span>
                                <div class="form-input">
                                    <input type="email" placeholder="Email" id="signInEmail"/>
                                    <div class="password-box">
                                        <input type="password" placeholder="Password" id="password1" />
                                        <i class="far fa-eye" id="togglePassword"></i>
                                    </div>
                                </div>
                                <button id="btn-fill">Sign In</button>
                                <a href="#" class="center">Forgot your password?</a>
                        </form>
                    </div>
                    <div class="form-container sign-up-container">
                        <form>
                            <h1 class="center">Create an Account</h1>
                            <div class="social-container center">
                                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                                <a href="#" class="social"><i class="fab fa-twitter"></i></a>
                            </div>
                            <span class="center">It's fast and free</span>
                            <div class="name">  
                                <input type="text" placeholder="First Name" id="signUpFirstName">
                                <input type="text" placeholder="Last Name" id="signUpLastName">
                            </div>
                            
                            <div class="other">
                                <input type="email" placeholder="Email or Phone Number" id="signUpEmail">
                                <div class="password-box">
                                    <input type="password" placeholder="Password" id="password2"/>
                                    <i class="far fa-eye" id="togglePassword2"></i>
                                </div>
                                
                            </div>
                                <!-- <h3>Gender</h3>
                            <div class="gender center">
                                <input type="radio" id="male" name="gender" value="male" class="gender">
                                <label for="male">Male</label>
                                <input type="radio" id="female" name="gender" value="female" class="gender">
                                <label for="female">Female</label>
                                <input type="radio" id="other" name="gender" value="other" class="gender">
                                <label for="other">Other</label>
                            </div> -->
                            <span class="text">By clicking Sign Up, you agree to our  <a href="#"> Terms</a> and <a href="#"> Conditions</a></span>
                            <button id="btn-fill">Sign Up</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start creating your <span>circle!</span></p>
                                <button class="btn-ghost" id="signUp">Sign Up</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with your <span>circle</span> please login with your personal info</p>
                                <button class="btn-ghost" id="signIn">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </header>
</template>

<script>
export default {
    name: "LandingPage",
    mounted(){
        // modal

        const modal = document.querySelector('#modal');
        const modalBtn = document.querySelector('#btn-modal')
        const signUpButton = document.querySelector('#signUp');
        const signInButton = document.querySelector('#signIn');
        const container = document.querySelector('#container');
        const togglePassword = document.querySelector('#togglePassword');
        const togglePassword2 = document.querySelector('#togglePassword2');
        const password = document.querySelector('#password1');
        const password2 = document.querySelector('#password2');


        modalBtn.addEventListener('click', openModal);

        function openModal(){
            modal.style.display = 'block'
        }
        signInButton.addEventListener('click', function() {
	    container.classList.add('right-panel-active');
        });
        signUpButton.addEventListener('click', function() {
            container.classList.remove('right-panel-active');
        });
        window.addEventListener('click', clickOutside);
            function clickOutside(e) {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        }
        togglePassword.addEventListener('click', function() {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
        });

        togglePassword2.addEventListener('click', function() {
            const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
            password2.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });


    }

}

  

  


</script>

<style lang="scss">


@import url('https://fonts.googleapis.com/css2?family=Dosis&family=Pacifico&display=swap');
$main-color: #f89c4b;
$dark-color: #333;
$website-width: 1200px;
$light-color: #f4f4f4;
$medium-color: #ccc;
$primary-color: #ee4c72;
$window-margin: 1rem 5rem;
$main-border-radius: 20px;
$main-gradient: linear-gradient(90deg,$main-color, $primary-color);
%btn-shared {
    display: inline-block;
    transition: all 0.5s;
    border: none;
    font-family: 'Dosis', sans-serif;
    padding: 0.5rem 1.5rem;

    cursor: pointer;
}
#btn, .btn{
    &-main {
        @extend %btn-shared;
        background-image: linear-gradient(90deg,$main-color, $primary-color, $main-color);
        color: #fff;
        border-radius: $main-border-radius;
        font-size: 1.2rem;

        background-position: 0 0;
        background-size: 200%;
        transition: background-position 0.5s;
        &:hover {
            background-position: 100% 0px;
        }
        &:focus {
            outline: none;
        }

    }
    &-modal {
        @extend %btn-shared;
        background-image: linear-gradient(90deg,$main-color, $primary-color, $main-color);
        color: #fff;
        border-radius: $main-border-radius;
        font-size: 1.2rem;

        background-position: 0 0;
        background-size: 200%;
        transition: background-position 0.5s;
        &:hover {
            background-position: 100% 0px;
        }
        &:focus {
            outline: none;
        }
    }
    &-fill {
        @extend %btn-shared;
        background: $primary-color;
        color: #ffff;
        border-radius: $main-border-radius;
        font-size: 1.2rem;
        
    }
    &-ghost {
        @extend %btn-shared;
        background: transparent;
        border: 1px solid #fff;
        border-radius: $main-border-radius;
        font-size: 1.2rem;
        color: #fff;

    }
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
a {
	text-decoration: none;
}
ul {
	list-style: none;
}
body {
	font-family: 'Dosis', sans-serif;
	line-height: 1.6;
	overflow-x: hidden;

	header {
		background: url(../assets/background.jpg) no-repeat center center/cover;
		max-width: 100%;
		height: 100vh;
		position: relative;
		.header {
			&-container {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
				.nav-bar {
					color: #fff;
					margin: $window-margin;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.logo {
						font-family: 'Pacifico', cursive;
						font-size: 1.9rem;
						position: relative;
					}
					ul {
						display: flex;
						flex-direction: row;
						li {
							padding-left: 3rem;
						}
					}
					a {
						color: #fff;
						border-bottom: 3px transparent solid;
						padding-bottom: 0.5rem;
						transition: border-color 0.5s;
						&:hover {
							border-color: $medium-color;
						}
						&.current {
							border-color: $main-color;
						}
					}
				}
			}
			&-content {
				color: #fff;
				text-align: center;
				margin: 19% auto;

				h2 {
					font-size: 3rem;
					padding-bottom: 1.5rem;
				}
				span {
					font-family: 'Pacifico', cursive;
				}
			}
		}
	}
	// modal and form

	.modal {
		display: none;
		z-index: 1;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
		position: fixed;
		background-color: rgba(0, 0, 0, 0.5);
		.container {
			position: relative;
			background-color: #fff;
			margin: 10% auto;
			width: 800px;
			max-width: 100%;
			min-height: 520px;
			box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2), 0 7px 20px rgba(0, 0, 0, 0.17);
			animation-name: modalOpen;
			animation-duration: 1s;
			padding: 10px 20px;

			@keyframes modalOpen {
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			}
		}
		.form-container {
			position: absolute;
			top: 0;
			height: 100%;
			transition: all 0.6s ease-in-out;

			form {
				background: #fff;
				display: flex;
				flex-direction: column;
				padding: 0 50px;
				height: 100%;
				justify-content: center;
			}
			input {
				background: #f2f2f2;
				border: none;
				padding: 12px 15px;
				margin: 8px 0;
				width: 100%;
				border-radius: $main-border-radius;
				&:focus {
					outline: none;
				}
			}
		}
		.social-container {
			margin: 1px 0;
			a {
				color: #333;
				border: 1px solid #ddd;
				border-radius: 50%;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				margin: 0 5px;
				height: 30px;
				width: 30px;
				&:hover {
					background-color: #f4f4f4;
				}
			}
		}
		button {
			transition: transform 80ms ease-in;

			&:active {
				transform: scale(0.95);
			}
			&:focus {
				outline: none;
			}
		}
	}
	.sign-up-container {
		border-radius: $main-border-radius;
		left: 0;
		width: 50%;
		z-index: 3;
		.name {
			display: flex;
			flex-direction: row;
			input:nth-child(1) {
				margin-right: 10px;
			}
		}
		input {
			font-family: 'Dosis', sans-serif;
		}
		h1 {
			font-family: 'Pacifico', cursive;
			font-size: 1.7rem;
		}

		.dateOfBirth {
			padding: 5px 0;
			display: flex;
			justify-content: space-between;
			select {
				padding: 8px 15px;
				border: 1px #ddd solid;
				border-radius: $main-border-radius;

				&:focus {
					outline: none;
				}
			}
		}
		h3 {
			text-align: left;
		}
		.password-box {
			display: flex;
			align-items: center;
			background-color: transparent;
			i {
				margin-left: -30px;
				cursor: pointer;
				font-size: 0.9rem;
			}
		}
		#btn-fill {
			a {
				color: #fff;
			}
		}
	}
	.sign-in-container {
		line-height: 1.7;
		width: 50%;
		z-index: 2;
		left: 0;
		opacity: 0;
		a {
			color: #333;
			padding-top: 0.5rem;
			padding-bottom: 0.4rem;
			font-size: 0.9rem;
			&:hover {
				text-decoration: underline;
			}
		}
		input {
			font-family: 'Dosis', sans-serif;
		}
		.form-input {
			margin-bottom: 10px;
		}
		.social-container a {
			text-decoration: none;
		}
		h1 {
			font-family: 'Pacifico', cursive;
			font-size: 1.7rem;
		}
		.password-box {
			display: flex;
			align-items: center;
			background-color: transparent;
			i {
				margin-left: -30px;
				cursor: pointer;
				font-size: 0.9rem;
			}
		}
	}
	.center {
		display: flex;
		justify-content: center;
		text-align: center;
	}
	.text {
		text-align: center;
		font-size: 0.8rem;
		padding: 0.5rem 0;
		a {
			color: #428bca;
			&:hover {
				text-decoration: underline;
			}
		}
	}

	.overlay-container {
		position: absolute;
		top: 0;
		left: 50%;
		width: 50%;
		height: 100%;
		overflow: hidden;
		transition: transform 0.6s ease-in-out;
		z-index: 100;
		h1 {
			font-family: 'Pacifico', cursive;
			font-size: 1.7rem;
		}
		p {
			padding-top: 0.4rem;
			padding-bottom: 0.6rem;
		}
		.overlay {
			color: #fff;
			background: linear-gradient(90deg, $main-color, $primary-color) no-repeat 0 0 /cover;
			position: relative;
			left: -100%;
			height: 100%;
			width: 200%;
			transform: translateX(0);
			transition: transform 0.6s ease-in-out;
			line-height: 1.6;
			font-size: 1.2rem;
		}
		.overlay-panel {
			position: absolute;
			top: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0 40px;
			height: 100%;
			width: 50%;
			text-align: center;
			transform: translateX(0);
			transition: transform 0.6s ease-in-out;
		}
		.overlay-right {
			right: 0;
			transform: translateX(0);
		}
		.overlay-left {
			transform: translateX(-20%);
		}
	}
}
.container.right-panel-active .sign-up-container {
	transform: translateX(30%);
}
.container.right-panel-active .overlay-container {
	transform: translateX(-100%);
}
.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
}
.container.right-panel-active .overlay {
	transform: translateX(50%);
}
.container.right-panel-active .overlay-left {
	transform: translateX(0);
}
.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}
.section-container {
	margin: 2rem 5rem;
	h2 {
		font-family: 'Pacifico', cursive;
		font-size: 1.7rem;
		margin-bottom: 0.6rem;
	}
	a,
	p {
		color: #7a7a7a;
		font-size: 1.1rem;
	}
	a:hover {
		color: $primary-color;
	}
	line-height: 1.7;
	#about {
		margin-bottom: 2rem;
	}
	.footer {
		display: grid;
		margin-bottom: 2rem;
		grid-template-columns: auto auto auto auto;

		.social {
			ul {
				display: flex;
				li {
					padding-right: 1rem;
				}
			}
		}
	}
	#app {
		display: flex;
		border-bottom: 1px solid #cfcfcf;
		padding-bottom: 1rem;

		img {
			width: 20px;
		}
		ul {
			display: flex;
			align-items: center;
		}
		li {
			border: 1px #cfcfcf solid;
			display: flex;
			align-items: center;
			border-radius: 2rem;
			margin: 0 0.5rem;
			padding: 0.7rem 2rem;
		}
		h2 {
			margin-right: 1rem;
		}
	}
	#contact {
		margin-top: 1rem;
		.upper-text {
			text-align: start;
			margin-bottom: 2rem;
		}
		.contact-container {
			width: 100vw;
			// height: 100vh;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			// grid-gap: 1rem;
			margin-top: 4rem;
		}
	}
	.login-container {
		display: flex;

		text-align: center;
		flex-direction: column;
	}
	form {
		width: 360px;
		h2 {
			font-size: 2.9rem;
			text-transform: uppercase;
		}
	}
	.input-div {
		position: relative;
		display: grid;
		grid-template-columns: 10% 90%;
		margin: 25px 0;
		padding: 5px 0;
		// border-bottom: 2px solid #d9d9d9;
		background-color: #f2f2f2;
		border-radius: $main-border-radius;
	}
	.one {
		margin-top: 0;
	}
	.two {
		margin-bottom: 4px;
	}
	.i {
		display: flex;
		align-items: center;
		justify-content: center;

		i {
			color: #7a7a7a;
		}
	}
	.focus {
		.i i {
			color: $primary-color;
			transition: .3s;
		}
	}
	.image-container {
		display: flex;

		align-items: center;
		margin-right: 20rem;

		img {
			width: 500px;
		}
	}
	form {
		width: 360px;
	}
	.input-div > div {
		position: relative;
		height: 35px;
		h5 {
			position: absolute;
			left: 10px;
			top: 50%;
			transform: translateY(-50%);
			color: #999;
			font-size: 18px;
			transition: .3s;
			// display: none;
			font-family: 'Dosis', sans-serif;
		}
	}
	.input-div:after,
	.input-div:before {
		content: '';
		position: absolute;
	}
	.input1 {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		border: none;
		outline: none;
		background: none;
		padding: 0.5rem 0.7rem;
		font-size: 1rem;
		color: #555;
		font-family: 'Dosis', sans-serif;
	}
	.message {
		margin-top: 1.4rem;
		textarea {
			width: 360px;
			border-radius: $main-border-radius;
			background-color: #f2f2f2;
			border: none;
			font-family: 'Dosis', sans-serif;
			padding: 1rem 1rem;
			font-size: 1rem;
			height: 8rem;
			&:focus {
				outline: none;
			}
		}
	}
	.btn {
		display: inline-block;
		// background-image: linear-gradient(90deg, #f89c4b, #e34067, #f89c4b);
		background-size: 200%;
		background-color: $primary-color;
		background-position: 0 0;
		padding-left: 1.4rem;
		align-items: center;
		width: 100%;
		height: 40px;
		border-radius: $main-border-radius;
		border: none;
		color: #fff;
		cursor: pointer;
		font-size: 1rem;
		margin-top: 1rem;
		font-family: 'Dosis', sans-serif;
		transition: background-position 0.5s;
		// box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
		&:focus {
			outline: none;
		}
	}

	.btn:hover {
		background-position: 100% 0px;
	}
	.input-div.focus div h5 {
		top: -15px;
		font-size: 15px;
	}
	.input-div.focus:after,
	.input-div.focus:before {
		width: 50%;
	}
	
}


</style>

