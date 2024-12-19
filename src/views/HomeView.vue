<script setup>
import {ref} from 'vue'
import Product from '@/components/ProductSimple.vue'

const productsList = ref([
    { id: 1, description: "Quarz Luxe", price: 12, img: "https://i.ibb.co/B4grBGR/quarz-luxe.jpg"},
    { id: 2, description: 'Curren Business', price: 20, img: "https://i.ibb.co/n6GFgv6/curren-business.jpg"},
    { id: 3, description: 'Curren Sport', price: 5, img: "https://i.ibb.co/Y74GB7y/curren-sport.jpg" },
    { id: 4, description: 'Jaragar Racing', price: 8, img: "https://i.ibb.co/XXwP7cb/jaragar-racing.jpg" },
    { id: 5, description: 'Liges Hommes', price: 3, img: "https://i.ibb.co/x5ZnVwj/liges-hommes.jpg"},
    { id: 6, description: 'Maserati Mechanical', price: 65, img: "https://i.ibb.co/NSWnpjS/maserati-mechanical.jpg"},
    { id: 7, description: 'Montre Mecanique', price: 25, img: "https://i.ibb.co/cN8B3rm/montre-mecanique.jpg" },
    { id: 8, description: 'Brand Designer', price: 28, img: 'https://i.ibb.co/Pmtyp6R/brand-designer.jpg'},
    { id: 9, description: 'Relogio Masculino', price: 4, img: "https://i.ibb.co/WnS3d6h/relogio-masculino.jpg"},
    { id: 10, description: 'Tissot Multifunction', price: 29, img: "https://i.ibb.co/FD6wb7p/tissot-multifunction.jpg"},
    { id: 11, description: 'Hip Hop Gold', price: 87, img: "https://i.ibb.co/WvVw5W7/hiphop-gold.jpg"},
    { id: 12, description: 'Mesh Genova', price: 6, img: "https://i.ibb.co/qdHmbWJ/mesh-genova.jpg" }
  ])

  const productsLiked = ref([])

  const productsCart = ref([])

  const addToCart = (produit) => {
    productsCart.value.push({ ...produit})
  }
  const addToLiked = (produit) => {
    let index = (productsLiked.value.findIndex(e => e.id == produit.id))
    if(index < 0 )  {
      productsLiked.value.push({ ...produit})
    }
    else {
      productsLiked.value.splice(index,1)
    }
  }
</script>

<template>
  <main>
  <div class="home-container">
    <h1>Nos produits</h1>
    {{  productsLiked }}
    <div class="card-cart-container">
      <div class="card-container">
        <Product @addToLiked="addToLiked" @addToCart="addToCart" v-for="(produit, id) in productsList" :key="id" :produit="produit"></Product>
      </div>
    </div>
  </div>
  </main>
</template>
