<template>
 
    <div class="post-container">
        <a @click.prevent="detail(post.id)" href="#">
        <div class="post"><a href=""><img :src="post.image_url" alt=""></a>
            <div class="emoji-container">
                <a href="#" class="emoji"><i class="fa fa-heart"> {{post.favourites_count}}</i></a>

            </div>
        </div>
        </a>
    </div>
</template>

<script>
export default {
    name:"PostCard",
    props: ["post"],
    methods : {
        detail(id){
            this.$store.dispatch("fetchById", id)
            .then(({data})=> {
                console.log(data);
                this.$store.commit("SET_DETAILPAGE", data)
                this.$router.push({
                name: 'Detail',
                params: {
                    id: id
                }
            })
            
            })
            .catch((err)=> {
                console.log(err);
            })
        }
        
    }
}
</script>

<style lang="scss" scoped>
  $main-color: #f89c4b;
  $dark-color: #333;
  $website-width: 1200px;
  $light-color: #f4f4f4;
  $medium-color: #ccc;
  $primary-color: #ee4c72;
  $window-margin: 1rem 5rem;
  $main-border-radius: 20px;
  $main-gradient: linear-gradient(90deg,$main-color, $primary-color);
		.post {
            
			position: relative;
                &:after {
				content: '';
				position: absolute;
				width: 13rem;
				height: 13rem;
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
            img {
			width: 13rem;
			border-radius: $main-border-radius;
            
		    }
			.emoji-container {
				position: absolute;
				top: 42%;
				left: 39%;
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
</style>