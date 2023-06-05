<script setup>
import RemoteOneWrap from './RemoteOneWrap.vue';
import RemoteTwoWrap from './RemoteTwoWrap.vue';
import VueRemoteOneWrap from './VueRemoteOneWrap.vue';
import VueRemoteTwoWrap from './VueRemoteTwoWrap.vue';

</script>
<template>
  <div class="vue-host">
    <h1>Vue Host</h1>

    <h2>As vue component</h2>
    <vue-remote-one title="Component"/>
    <hr />
    <vue-remote-two title="Component"/>
    <hr />
    <h2>As bootstrap</h2>
    <Suspense>
      <RemoteOneWrap/>
    </Suspense>
    <hr />
    <Suspense>
      <RemoteTwoWrap/>
    </Suspense>
    <hr />
    <Suspense>
      <VueRemoteOneWrap/>
    </Suspense>
    <hr />
    <Suspense>
      <VueRemoteTwoWrap/>
    </Suspense>
    <hr />
  </div>
</template>

<style scoped>
.vue-host {
  display: grid;
  grid-auto-flow: row;
  background-color: var(--shared-app-bkg, white);
  color: var(--shared-font-color, black);
}

.vue-host button {
  color: var(--shared-button-font, black);
  background-color: var(--shared-button-primary, rgb(91, 188, 91));
}
</style>