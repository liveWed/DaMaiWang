<template>

    <div>
        <liebiaotouVue />
        <lbqiehuanVue />
        
        <footers />
    </div>
</template>
<script>
import liebiaotouVue from '../components/liebiaotou.vue';
import lbqiehuanVue from '../components/lbqiehuan.vue';
import Headers from '../components/Headers.vue';
import footers from '../components/footers.vue';
export default {
    data() {
        return {
            
        }
    },
    components:{
        liebiaotouVue,
        lbqiehuanVue,
        Headers,
        footers
    }
}
</script>