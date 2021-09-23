<template>
  <div>
      <header>
        <div class="header-background">
            <div class="header-container">
                <nav id="nav-bar" class="nav-bar">
                    <h2 class="logo"><a @click.prevent="logo" href="">Circle</a></h2>
                    <ul>
                        <li><a @click.prevent="profiles" href=""><i class="fas fa-th-large"></i></a></li>
                        <li><a href="#"><i class="far fa-paper-plane"></i></a></li>
                        <li @click.prevent="search" ><a href="#"><i class="fas fa-search"></i></a></li>
                        <li @click.prevent="logOut" ><a href="#"><i class="fas fa-sign-out-alt"></i></a></li>
                        <li @click.prevent="mainProfile" ><a href="" class="current"><img v-if="hasPicture" :src="profile.profile_image_url" alt="">
                        <img v-if="!hasPicture" src="../assets/blank-profile.jpg" alt=""></a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="double">
            <div class="profile item1">
                <div class="profile-1">
                    <div class="profilepic">
                        <img v-if="hasPicture" :src="profile.profile_image_url" alt="">
                        <img v-if="!hasPicture" src="../assets/blank-profile.jpg" alt="">
                    </div>
                    <div class="profile-name">
                        <div class="button-flex">
                            <div class="flex">
                                <div>
                                    <span class="name">{{profile.User.fullName}}</span>
                                </div>
                                
                            </div>
                            <div class="button">
                                <a @click.prevent="edit" href="#" class="button "><i class="fas fa-cog"></i> Edit Profile</a>
                            </div>
                        </div>
                        <p class="id">@{{profile.User.username}}</p>
                        <div class="location">
                            <i class="fas fa-map-marker-alt"></i>
                            <p class="id flag">{{profile.User.location}}</p>
                        </div>
                    </div>
                </div>
                <div class="bio">
                    <p>{{profile.description}}</p>
                </div>
                <div class="post-status">
                    <ul>
                        <li><a href="" class="current"><i class="fas fa-th"></i> POSTS</a></li>
                    </ul>
                </div>
                <div class="grid">
                    <div class="grid-container">

							<PostCard v-for="post in profile.Posts" :key="post.id" :post="post"></PostCard>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </div>
</template>

<script>
import PostCard from '../components/PostCard.vue'

export default {
    name: "MainProfile",
    computed:{
      profile(){
        return this.$store.state.myProfile
      },
	  profilePicture(){
		  return this.$store.state.default_picture
	  },
	  hasPicture(){
		  	return this.$store.state.hasPicture

	  },
	  
    },
    created(){
      this.$store.dispatch('fetchProfile')
      .then(({data})=>{
        this.$store.commit("SET_MYPROFILE",data)
		if(data.profile_image_url){
		this.$store.commit("SET_HASPICTURE", true)
		} else{
			this.$store.commit("SET_HASPICTURE", false)
		}
      })
      .catch((err)=> {
        console.log(err);
      })
    },
    methods: {
      logOut() {
        localStorage.clear()
        this.$router.push('/login-register')
      },
	  profiles(){
		  this.$router.push('/explore')
	  },
	  mainProfile(){
		  this.$router.push('/')
	  },
	  edit(){
		  this.$router.push("/edit")
	  },
	  search(){
		  this.$router.push('/search')
	  },
	  logo(){
		  this.$router.push('/')
	  }
    },
	components: {
		PostCard
	}
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
					border: none;
					border-radius: 50%;
				
					width: 10rem;
					height: 10rem;
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

		.post4 {
			margin-top: -80px;
		}
	}
</style>