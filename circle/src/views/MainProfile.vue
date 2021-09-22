<template>
  <div>
      <header>
        <div class="header-background">
            <div class="header-container">
                <nav id="nav-bar" class="nav-bar">
                    <h2 class="logo"><a href="">Circle</a></h2>
                    <ul>
                        <li><a href=""><i class="fas fa-th-large"></i></a></li>
                        <li><a href="#"><i class="far fa-paper-plane"></i></a></li>
                        <li><a href="#"><i class="fas fa-search"></i></a></li>
                        <li><a href="#"><i class="fas fa-sign-out-alt"></i></a></li>
                        <li><a href="" class="current"><img src="../assets/rheina.jpeg" alt=""></a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="double">
            <div class="profile item1">
                <div class="profile-1">
                    <div class="profilepic">
                        <img src="../assets/rheina.jpeg" alt="">
                    </div>
                    <div class="profile-name">
                        <div class="button-flex">
                            <div class="flex">
                                <div>
                                    <span class="name">Rheina Tamara, <span id="age">19</span></span>
                                </div>
                                
                            </div>
                            <div class="button">
                                <a href="#" class="button "><i class="fas fa-cog"></i> Edit Profile</a>
                            </div>
                        </div>
                        <p class="id">@warmstares</p>
                        <div class="location">
                            <i class="fas fa-map-marker-alt"></i>
                            <p class="id flag"> Bekasi, Indonesia</p>
                        </div>
                    </div>
                </div>
                <div class="bio">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium illo voluptas officia exercitationem officiis ipsum iure nulla aliquam quidem?</p>
                    <p class="date"><i class="far fa-calendar-alt"></i> Joined December 2020</p>
                </div>
                <div class="post-status">
                    <ul>
                        <li><a href="" class="current"><i class="fas fa-th"></i> POSTS</a></li>
                        <li><a href=""><i class="fas fa-comment-dots"></i> STATUS</a></li>
                    </ul>
                </div>
                <div class="grid">
                    <div class="grid-container">
                        <div class="post-container">
                            <div class="post"><a href=""><img src="" alt=""></a>
                                <div class="emoji-container">
                                    <a href="#" class="emoji"><i class="fa fa-heart"> 999</i></a>
                                    <a href="#" class="emoji"><i class="fas fa-comment"> 999</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </div>
</template>

<script>
export default {
    name: "MainProfile"
}
</script>

<style lang="scss" scoped>
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
  .header {
    font-family: 'Dosis', sans-serif;
	  line-height: 1.6;
		&-background {
			background: url(../assets/bali_waterfall.jpeg) no-repeat center center/cover;
			max-width: 100%;
			height: 65vh;
		}
		&-container {
			background-color: rgba($color: #000000, $alpha: 0.4);
			height: 100%;
		}
	}
  	.nav-bar {
		display: flex;
		color: #fff;
		justify-content: space-between;
		padding: 2rem 5rem;
		margin: 0 6rem;

		ul {
			display: flex;
			flex-direction: row;
			// padding-right: 4rem;
			justify-content: center;
			align-items: center;

			li {
				// display: flex;

				padding-left: 2rem;
				a {
					width: 20px;
					height: 20px;
				}
			}
			.current {
				width: 20px;
				height: 20px;

				img {
					position: relative;
				}
			}
		}
		img {
			width: 1.8rem;
			border-radius: 50%;
			margin-top: 8px;
		}
		a {
			font-size: 1.5rem;
			color: #fff;
		}

		.logo {
			a {
				font-family: 'Pacifico', cursive;
				font-size: 1.9rem;
			}
		}
    
	}
.profile {
		.profile-1 {
			// display: flex;
			display: flex;
			flex-direction: row;
			.profile-name {
				padding-left: 1rem;
				font-size: 1.2rem;
				padding-top: 1rem;

				.name {
					font-weight: bold;
				}
				.id {
					color: #8c8c8c;
					font-size: 0.9rem;
				}
				.location {
					display: flex;
					font-size: 0.9rem;
					i {
						display: flex;
						justify-content: center;
						align-items: center;
						padding-right: 0.2rem;
						color: #8c8c8c;
					}
				}
			}
			.profilepic {
				margin-left: 4rem;
				img {
					width: 12rem;
					border-radius: 50%;
					border: 5px solid #fff;
					position: relative;
					top: -70px;
				}
			}
			.profile-name {
				margin-top: 0.3rem;

				img {
					display: flex;
					width: 1.5rem;
				}
			}
			.flex {
				display: flex;
				align-items: center;
				text-align: center;
				justify-content: center;
				.name {
					padding-right: 5px;
					p {
						font-weight: bolder;
					}
				}
			}
			.button-flex {
				display: flex;
				flex-direction: row;
				align-items: center;

				// justify-content: space-between;
				.button {
					margin-left: 7.3rem;

					a {
						border: $primary-color solid 2px;
						padding: 0.3rem 0.8rem;
						color: $primary-color;
						border-radius: $main-border-radius;
						font-weight: bolder;
					}
				}
			}
		}
		.date {
			color: #8c8c8c;
			padding-top: 10px;
		}
		.bio {
			padding-left: 100px;
			margin-top: -50px;
			margin-bottom: 2rem;
		}
	}
	.double {
		display: grid;
		grid-template-columns: 58% 42%;
		margin-left: 5rem;
		background-color: #fff;
	}
	.post-status {
		border-bottom: 1px solid #8c8c8c;
		margin-left: 6.4rem;
		margin-right: 0.5rem;
		margin-bottom: 2rem;

		ul {
			display: flex;
			justify-content: center;
			li {
				padding: 1rem 5rem;
				a {
					color: #8c8c8c;
					font-weight: 600;
				}
			}
		}
		.current {
			color: $primary-color;
			padding-bottom: 1.1rem;
			border-bottom: 2px solid $primary-color;
		}
	}
	.grid {
		margin-left: 6rem;

		img {
			width: 13rem;
			border-radius: $main-border-radius;
		}
	}
	.grid-container {
		display: grid;
		grid-template-columns: repeat(3, 0.9fr);
		grid-gap: 1rem;
		width: 100%;
		margin: auto;
		justify-content: center;
		.post {
			position: relative;
			&:after {
				content: '';
				position: absolute;
				width: 95%;
				height: 97%;
				top: 0;
				left: 0;
				background: rgba(0, 0, 0, 0.5);
				opacity: 0;
				border-radius: $main-border-radius;
				transition: all 0.5s;
				-webkit-transition: all 0.5s;
			}
			&:hover:after {
				opacity: 1;
			}

			.emoji-container {
				position: absolute;
				top: 42%;
				left: 20%;
				overflow: hidden;
				opacity: 0;
				transition: .4s;
				z-index: 10;

				a {
					padding: 0 10px;
					color: #fff;
				}
			}
			&:hover {
				.emoji-container {
					opacity: 1;
				}
			}
		}

		.post4 {
			margin-top: -80px;
		}
	}
</style>