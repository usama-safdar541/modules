<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAdress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailNumber '

  // ],


  // props as objects for validation

  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAdress: {
      type: String,
      required: false,
      // default : 'false',
      // validator : function(value){
      //   return value === '1' || value ==='0';
      // }
    }

  },
  // emits: {
  //   ['toggle-favourite']
  // },
  //emit syntax 

  // emits{
  //   'toggle-favourite' :function (id){

  //     if (id){
  //       return true;
  //     }else{
  //       //for catching error
  //       console.warn('id is missing')
  //     }
  //   }
  // }
  data() {
    return {
      detailsAreVisible: false, 
    
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
      // this.phoneNumber;   //props date
    }
  }
};
</script>