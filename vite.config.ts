import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

const resolve = ()=>{
  return {
    "@":path.resolve(__dirname,"src"),
    "@_C":path.resolve(__dirname,"src/components"),
    "@pages":path.resolve(__dirname,"src/components/pages"),
    "@home":path.resolve(__dirname,"src/components/pages/home"),
    "@about":path.resolve(__dirname,"src/components/pages/about"),
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [vue()],
  resolve:{
    alias:resolve()
    // extensions:[".vue"]
  },
})
