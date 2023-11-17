<template>
  <h1 class="text-3xl font-bold underline text-blue-800">Hello world!</h1>
  <div class="flex items-center gap-10">
    <!-- form : post -->
    <form class="flex flex-col">
      <label for="name">Name</label>
      <input name="name" v-model="name" />
      <label for="price">Price</label>
      <input name="price" v-model="price" />
      <label for="description">Description</label>
      <input name="description" v-model="description" />
      <label for="room">Room</label>
      <input name="room" v-model="room" />
      <button class="mt-4" @click.prevent="postProduct">Add product</button>
    </form>

    <!-- ------- -->
    <ul class="flex flex-col gap-5">
      <li
        class="flex items-center gap-5 justify-between"
        v-for="product in products"
        :key="product.id"
      >
        <p @click.prevent="getProduct(product.id)">{{ product.name }}</p>
        <div class="flex gap-4">
          <button
            class="bg-blue-500 hover:bg-blue-400 text-xs"
            @click.prevent="updateProduct(product.id)"
          >
            update
          </button>
          <button
            class="bg-red-500 hover:bg-red-400 text-xs"
            @click.prevent="deleteProduct(product.id)"
          >
            X
          </button>
        </div>
      </li>
    </ul>
    <div class="flex flex-col bg-white rounded-lg text-black px-4 py-4" v-if="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p>
      <p>{{ product.description }}</p>
    </div>
    <button @click.prevent="getProducts">get products</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      products: [],
      product: "",
      name: "",
      price: "",
      description: "",
      room: "",
    };
  },
  methods: {
    async getProducts() {
      const response = await fetch("http://localhost:8888/api/home-products");
      const data = await response.json();
      return (this.products = data.data);
    },
    async getProduct(id) {
      const response = await fetch(
        `http://localhost:8888/api/home-products/${id}`
      );
      const data = await response.json();
      return (this.product = data.data[0]);
    },
    async postProduct() {
      const newProduct = {
        name: this.name,
        price: this.price,
        description: this.description,
        room: this.room,
      };
      this.name = "",
      this.price = "",
      this.description = "",
      this.room = ""
      
      const response = await fetch("http://localhost:8888/api/home-products", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      return this.getProducts();
    },
    async updateProduct(id) {
      const newProduct = {
        name: this.name,
        price: this.price,
        description: this.description,
        room: this.room,
      };
      this.name = "",
      this.price = "",
      this.description = "",
      this.room = ""
      const response = await fetch(
        `http://localhost:8888/api/home-products/${id}`,
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(newProduct),
        }
      );
      const data = await response.json();
      return this.getProducts();
    },

    async deleteProduct(id) {
      try{
        const response = await fetch(
        `http://localhost:8888/api/home-products/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      return this.getProducts();

      }catch(err){
        console.log(err, "deletProduct failed")
      }
    },
  },
};
</script>

<style></style>
