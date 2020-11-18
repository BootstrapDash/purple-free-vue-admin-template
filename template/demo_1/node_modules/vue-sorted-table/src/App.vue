<template>
  <div id="app">
    <sorted-table :values="values">
      <thead>
        <tr>
          <th scope="col" style="text-align: left; width: 10rem;">
            <sort-link name="id">ID</sort-link>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            <sort-link name="name">Name</sort-link>
          </th>
          <th scope="col" style="text-align: left; width: 10rem;">
            <sort-link name="hits">Hits</sort-link>
          </th>
        </tr>
      </thead>
      <template #body="sort">
        <tbody>
          <tr v-for="value in sort.values" :key="value.id">
            <td>{{ value.id }}</td>
            <td>{{ value.name }}</td>
            <td>{{ value.hits }}</td>
          </tr>
        </tbody>
      </template>
    </sorted-table>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    values: [
      { name: "Plugin Foo", id: 2, hits: 33 },
      { name: "Plugin Bar", id: 1, hits: 42 },
      { name: "Plugin Foo Bar", id: 3, hits: 79 }
    ]
  })
};
</script>
