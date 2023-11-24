<template>
  <div>
    <h1 class="text-3xl font-bold underline text-green-800">Flower Shop</h1>
    <div class="flex items-center gap-10">
      <!-- Formulario para agregar flores -->
      <form class="flex flex-col">
        <label for="name">Name</label>
        <input name="name" v-model="name" />

        <label for="bloom">Bloom</label>
        <input name="bloom" v-model="bloom" />

        <label for="lifetime">Lifetime</label>
        <input name="lifetime" v-model="lifetime" />

        <button class="mt-4" @click.prevent="postFlower">Add Flower</button>
      </form>

      <!-- Lista de flores -->
      <ul class="flex flex-col gap-5">
        <li
          class="flex items-center gap-5 justify-between"
          v-for="flower in flowers"
          :key="flower.id"
        >
          <p @click.prevent="getFlower(flower.id)">{{ flower.name }}</p>
          <div class="flex gap-4">
            <button
              class="bg-green-500 hover:bg-green-400 text-xs"
              @click.prevent="updateFlower(flower.id)"
            >
              Update
            </button>
            <button
              class="bg-red-500 hover:bg-red-400 text-xs"
              @click.prevent="deleteFlower(flower.id)"
            >
              X
            </button>
          </div>
        </li>
      </ul>

      <!-- Detalles de la flor seleccionada -->
      <div class="flex flex-col bg-white rounded-lg text-black px-4 py-4" v-if="flower">
        <h2>{{ flower.name }}</h2>
        <p>Bloom: {{ flower.bloom }}</p>
        <p>Lifetime: {{ flower.lifetime }}</p>
      </div>

      <button @click.prevent="getFlowers">Get Flowers</button>
    </div>
  </div>
</template>

<script>
export default :{
  name: "App",
  data() {
    return {
      flowers: [],
      flower: "",
      name: "",
      bloom: "",
      lifetime: "",
    };
  }},
  methods: {
    async getFlowers() {
      const response = await fetch("http://localhost:8888/api/flowers");
      const data = await response.json();
      this.flowers = data.data;
    },
    async getFlower(id) {
      const response = await fetch(`http://localhost:8888/api/flowers/${id}`);
      const data = await response.json();
      this.flower = data.data[0];
    },
    async postFlower() {
      const newFlower = {
        name: this.name,
        bloom: this.bloom,
        lifetime: this.lifetime,

      this:name = "",
      this:bloom = "",
      this:lifetime = "",

      const :response = await fetch("http://localhost:8888/api/flowers", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newFlower),
      }),

      const : data = await response.json(),
      this:getFlowers(),
    },
    async ,updateFlower ()=>{
      const updateFlower ={
        name:any,
        bloom : any,
        lifetime:any,
      },
      

      this. name = "",
      this.bloom = "",
      this.lifetime = "",
     try :{

      const response = await fetch(`http://localhost:5500/api/flowers/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(updatedFlower),
      });

      const: data = await response.json();
      this.getFlowers();
    },
    const async : deleteFlower(id:any) =>
      try {
        const response = await fetch(`http://localhost:8888/api/flowers/${id}`, {
          method: "DELETE",
        });

        const :dataFlower = await response.json();
        this.getFlowers();
      } catch (err) {
        console.log("deleteFlower failed", err);
      }
    },
  },
},
</script>

<style></style>
