<template>
    <header id="header-inner">
      <div class="container">
        <nav id="nav-bar" class="nav-bar">
            <h2 class="logo"><a href="">Circle</a></h2>
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
    </header>
</template>

<script>
export default {
    name: "Navbar",
        computed:{
      profile(){
        return this.$store.state.myProfile
      },
	  profilePicture(){
		  return this.$store.state.default_picture
	  },
	  hasPicture(){
		  	return this.$store.state.hasPicture

	  }
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
	  }
    },
}
</script>

<style lang="scss" scoped>
    $bg-image: url("../assets/bali_waterfall.jpeg");

    #header {

  &-home {
    background: $bg-image no-repeat center right / cover;
    height: 100vh;
    color: #fff;

    // header content
    .header-content {
      text-align: center;
      padding-top: 20%;

      h1 {
        font-size: 4rem;
        line-height: 1.2;
      }
    }
  }
  //  header inner
  &-inner {
    background: $bg-image no-repeat 20% 30% / cover;
    height: 5.5rem;
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
    		.container {
			background-color: rgba($color: #000000, $alpha: 0.4);
			height: 100%;
		}
</style>