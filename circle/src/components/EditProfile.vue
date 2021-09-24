<template>
<div>
    <Navbar></Navbar>
              <h1>Edit Profile</h1>
    <form v-on:submit.prevent="editPost">
        <div class="form-group">
            <label for="text"></label>
            <input v-model="description" type="text" name="description" id="description" placeholder="description"/>
          </div>
          <div class="form-group">
              <label for="profile_image_url"></label>           
              <input  @change="previewFiles($event)"  ref="image" type="file"  name="profile_image_url" >
              <img  :src="displayImage" id="output" style="padding-top: 10px; width: 150px;" />
          </div>
          <input type="submit" value="Edit Profile"/>
    </form>
</div>
    
</template>
<script>
import Navbar from'../components/Navbar.vue'
export default {
    name: "EditProfile",
    components: {
        Navbar
    },
    data(){
      return {
        description: '',
        displayImage: '',  
      }
    },
    methods : {
             previewFiles(event){
            this.displayImage = URL.createObjectURL(event.target.files[0])
        },
        editPost(){
          const payload = {
                description: this.description,

                profile_image_url: this.$refs.image.files[0],
            }
            this.$store.dispatch("editPost",payload)
            .then(()=> {
              this.$router.push('/')
            })
            .catch((err)=> {
              console.log(err.response);
            })
        }
    }
}
</script>

<style>

</style>