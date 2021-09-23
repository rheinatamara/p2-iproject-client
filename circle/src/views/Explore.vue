<template>
<div>
    <Navbar></Navbar>
    
    <div class="addPost">
            <h1>Add post</h1>
            <form v-on:submit.prevent="addPost">
               <div class="form-group">
                    <label for="text"></label>
                    <input v-model="text" type="text" name="text" id="text" placeholder="description"/>
                  </div>
                  <div class="form-group">
                      <label for="imgUrl"></label>           
                      <input  @change="previewFiles($event)"  ref="image" type="file"  name="img_url" >
                      <img  :src="displayImage" id="output" style="padding-top: 10px; width: 150px;" />
                  </div>
                  <input type="submit" value="Add Post"/>
            </form>
    </div>
    <div class="grid">
      <div class="grid-container">
      <ExploreCard v-for="data in explore" :key="data.id" :data="data"></ExploreCard>
    </div>
    </div>

</div>

</template>

<script>
import ExploreCard from '../components/ExploreCard.vue'
import Navbar from '../components/Navbar.vue'
export default {
  
    name: "Explore",
    components: {
      Navbar,
      ExploreCard
    },
    data(){
      return {
        text: '',
        displayImage: '',  
      
      }
    },
    computed: {
      explore(){
        return this.$store.state.allData
      }
    },
    created(){
        this.$store.dispatch("fetchExplore")
        .then(({data})=> {
          this.$store.commit("SET_ALLDATA", data)
          console.log(data);
        })
        .catch((err)=> {
          console.log(err);
        })
   
    },
    methods: {
       previewFiles(event){
            this.displayImage = URL.createObjectURL(event.target.files[0])
        },
        addPost(){
          const payload = {
                text: this.text,

                image_url: this.$refs.image.files[0],
            }
            this.$store.dispatch("addPost",payload)
            .then(({data})=> {
              this.$store.commit("SET_ALLDATA", data)
              this.$router.push('/home')
            })
            .catch((err)=> {
              console.log(err.response);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
  $main-border-radius: 20px;
	.grid-container {
		display: grid;
		grid-template-columns: repeat(3, 0fr);
		grid-gap: 1rem;
		width: 100%;
		margin: auto;
		justify-content: center;

	}
  	.grid {
          margin-top: 2rem;

		margin-left: 2rem;

		img {
			width: 13rem;
			border-radius: $main-border-radius;
		}
	}
  .addPost {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
</style>