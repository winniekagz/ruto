<template>
    <div class="layout">
        <sidebar>
            <h3>Menu</h3>
            <ul>
                <li :class="{ active: isRouteActive('/') }">
                    <router-link to="/">Home</router-link>
                </li>
                <li :class="{ active: isRouteActive('/about') }">
                    <router-link to="/about">About</router-link>
                </li>
            </ul>
        </sidebar>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
    components: {
        Sidebar: {
            setup(props, { slots }) {
                const route = useRoute()

                function isRouteActive(routePath) {
                    return route.path === routePath
                }

                return () => (
                    <aside>
                        {slots.default && slots.default({ isRouteActive })}
                    </aside>
                )
            }
        }
    }
}
</script>

<style>
.layout {
    display: flex;
    flex-direction: row;
    height: 100%;
}

main {
    flex-grow: 1;
    overflow-y: auto;
}

aside {
    width: 200px;
    padding: 1rem;
    background-color: #f0f0f0;
    border-right: 1px solid #ccc;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

.active {
    font-weight: bold;
}
</style>
