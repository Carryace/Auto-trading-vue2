<template>
  <section class="w-1/5 pr-3">
    <h1 class="text-xl font-bold">
      Watchers & Operators Explorer
    </h1>
    <p class="mt-3 mb-3">
      Please select watcher or operator to view the stock charting analysis
    </p>
    <div class="mt-3">
      <div class="font-bold text-base">
        <span
          class="cursor-pointer"
          @click="toggleWatcherFolder"
        >
          <font-awesome-icon
            :icon="folderIcon"
            class="mr-1 text-blue-500 text-xl"
          />
          Watchers
        </span>
      </div>
      <ul
        v-if="watcherFolderOpen"
        class="border-dashed border-l-2 border-gray-500 ml-2 mt-1"
      >
        <li
          v-for="watcher in watcherList"
          :key="watcher.watcher_name"
          class="text-sm pl-1 pt-1"
        >
          &nbsp;--- 
          <span
            class="cursor-pointer hover:text-blue-600"
            :class="watcherClass(watcher)"
            @click="selectWatcher(watcher)"
          >
            {{ watcher.watcher_name }}
          </span>
        </li>
      </ul>
      <div class="font-bold text-base mt-1">
        <span class="cursor-pointer">
          <font-awesome-icon
            :icon="['fas', 'folder']"
            class="mr-1 text-blue-500 text-xl"
          />
          Operators
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { store } from '../../store';

export default {
  data() {
    return {
      watcherFolderOpen: false,
      selectedWatcher: null,
    };
  },
  computed: {
    folderIcon(){
      return this.watcherFolderOpen ? ['fas', 'folder-open'] : ['fas', 'folder'];
    },
    ...mapState({
      watcherList: state => state.watchers.watcherList,
    })
  },
  methods: {
    watcherClass(watcher) {
      if (this.selectedWatcher) {
        return this.selectedWatcher.watcher_name === watcher.watcher_name
        ? 'text-blue-600 font-bold'
        : 'text-black';
      }
      return 'text-black';
    },
    toggleWatcherFolder() {
      this.watcherFolderOpen = !this.watcherFolderOpen;
    },
    selectWatcher(watcher) {
      this.selectedWatcher = watcher;
      store.dispatch('selectWatcher', watcher);
    }
  },
}
</script>