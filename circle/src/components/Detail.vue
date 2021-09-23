<template>
    <div>
        <Navbar></Navbar>
        <div class="post">
            <div class="container">
                <div class="user">
                <img v-if="hasPicture" :src="detail.Profile.profile_image_url" alt="">
                <img v-if="!hasPicture" src="../assets/blank-profile.jpg" alt="">
                <p>{{detail.Profile.User.username}}</p>
            </div>
            <div class="image-post">
                <img :src="detail.image_url" alt="">
  
            </div>
            <div class="comment">
                <i class="far fa-heart"> {{detail.favourites_count}}</i>
                <p>
                    {{detail.text}}
                </p>
            </div>
            
            </div>
            
        </div>

    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    name: "Detail",
    components: {
        Navbar
    },
    computed: {
        detail(){
            return this.$store.state.detailPost
        },
        hasPicture(){
		  	return this.$store.state.hasPicture
	    }
    }
}
</script>
    
<style lang="scss" scoped>
.post {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;

}
    .user {
        padding-left: 1rem;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: start;
        
        img {
            margin-right: 10px;
            width: 30px;
            border-radius: 50%;

        }
    }
    .comment {
        padding-left: 1rem;
    }
    .image-post {

        img {
            border-radius: 20px;
        }
    }
</style>