import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

/**
 * TODO:分离至vite-utils
 * @returns 
 */
async function autoCreateVueRoutes(): Promise<RouteRecordRaw[]> {
  const files = await import.meta.glob("../views/**/index.vue", {
    eager: false
  })
  const routes = []
  for (const k in files) {
    const relpath = k.replace("../views", "").replace("/index.vue", "")
    routes.push({
      path: relpath.toLowerCase() == "/index" ? "/" : relpath.toLowerCase(),
      name: relpath.replace("/", ""),
      component: files[k],
    })
  }
  console.log(routes)
  return routes
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: await autoCreateVueRoutes()
})

export default router
