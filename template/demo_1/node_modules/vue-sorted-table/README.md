# vue-sorted-table
![MIT](https://img.shields.io/github/license/BernhardtD/vue-sorted-table.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/vue-sorted-table.svg?style=flat-square)](https://www.npmjs.com/package/vue-sorted-table)

A basic sorted table for Vue.js

## Installation
Install with NPM:

```bash
npm install --save vue-sorted-table
```

Import globally in app:

```javascript
import SortedTablePlugin from "vue-sorted-table";

Vue.use(SortedTablePlugin);
```

## Examples
### Basic
The basic example shows how to use the `SortedTable` and `SortLink` components:
```html
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
      <tbody slot="body" slot-scope="sort">
        <tr v-for="value in sort.values" :key="value.id">
          <td>{{ value.id }}</td>
          <td>{{ value.name }}</td>
          <td>{{ value.hits }}</td>
        </tr>
      </tbody>
    </sorted-table>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      values: [
        { name: "Plugin Foo", id: 2, hits: 33 },
        { name: "Plugin Bar", id: 1, hits: 42 },
        { name: "Plugin Foo Bar", id: 3, hits: 79 }
      ]
    };
  }
};
</script>
```

The `sorted-table` tag requires a `values` property, which is an array of objects which contain the data:
```html
<sorted-table :values="values">
</sorted-table>
```

The `sort-link` tag adds a link to sort the provided data. In the case the `name` property value is the current
sorting, the component adds a sort icon, depending on the actual order:
```html
<sort-link name="id">ID</sort-link>
```

The sorted data is made accessible as a [scoped slot](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots).
```html
<template #body="sort">
  <tbody>
  </tbody>
</template>
```

Now we can access the slot scope via `sort` and iterate over the sorted values to render the data:
```html
<tr v-for="value in sort.values" :key="value.id">
  <td>{{ value.id }}</td>
  <td>{{ value.name }}</td>
  <td>{{ value.hits }}</td>
</tr>
```

[![Edit vue-sorted-table - basic example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/xp37xr4pwo?module=%2Fsrc%2FApp.vue)

### Advanced
The advanced example is based on the basic example.
It shows how to use the plugin configuration to set global sort icons:

```javascript
Vue.use(SortedTablePlugin, {
  ascIcon: '<i class="material-icons">arrow_drop_up</i>',
  descIcon: '<i class="material-icons">arrow_drop_down</i>'
});
```

[![Edit vue-sorted-table - advanced example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/71v099zz56)

### Nested values
By default, the objects containing the values has to be a flat object.
To support nested objects (`{ name: "Plugin Foo", user: { id: 1, name: "David Campbell" } }`) the plugin
uses [lodash](https://lodash.com).

At first, install lodash:
```bash
npm install --save lodash
```

Import lodash and register Vue prototype:
```javascript
import _ from "lodash";

Vue.prototype.$_ = _;
```

Add sort link using the nested key:
```html
<sort-link name="user.name">Username</sort-link>
```

Extend `v-for` loop to render nested value:
```html
<tr v-for="value in sort.values" :key="value.id">
  <td>{{ value.id }}</td>
  <td>{{ value.name }}</td>
  <td>{{ value.hits }}</td>
  <td>{{ value.user.name }}</td>
</tr>
```

[![Edit vue-sorted-table - nested example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6nljqn2q8r)

### Single File Components
The `SortedTable` and `SortLink` components can be used without registering the plugin.
Import the components, e.g. as part of a singe file component:
```javascript
import { SortedTable, SortLink } from "vue-sorted-table";
```

Register components locally:
```javascript
export default {
  name: "App",
  components: {
    SortedTable,
    SortLink
  },
  data: function() {
    return {
        // ..
    };
  }
};
```

Add sort icons as property of the `SortedTable` tag:
```html
<sorted-table
  :values="values"
  ascIcon="<span> ▲</span>"
  descIcon="<span> ▼</span>"
>
  <!-- .. -->
</sorted-table>
```

[![Edit vue-sorted-table - component example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6139y2xo53?module=%2Fsrc%2FApp.vue)

## Configuration
The plugin configuration allows to set global sort icons, e.g. [Advanced Example](#Advanced)

Option    | Description
----------|----------------------
`ascIcon` | Ascending sort icon.
`descIcon`| Descending sort icon.

## Components
### `SortedTable`
The `SortedTable` is the main component of the plugin. It is intended to be a replacement of the `<table></table>` tag.
So instead using the old table tags, use `<SortedTable></SortedTable>`.

#### Properties
This component has the following properties:

Property   | Required | Default | Description
-----------|----------|---------|--------------------------------------------------------------
`values`   |yes       |null     |Array of objects containing the values which should be sorted.
`dir`      |no        |asc      |Sort direction. Valid values: ("asc"\|"desc")
`sort`     |no        |id       |Default sorting. Could be any valid object key.
`ascIcon`  |no        |         |Ascending icon. Overwrites default or globally set icon.
`descIcon` |no        |         |Descending icon. Overwrites default or globally set icon.
`onSort`   |no        |null     |Alternative function for value sorting.

#### Events
This component emits the following event:

- `sort-table`
  - This event will be emited on each new sort action, e.g. click on sort link.
  - arg0: sort property name, e.g. id
  - arg1: sort direction, e.g. asc

### `SortLink`
This component adds a link to sort the given values. A sort icon is attached automatically to link.

#### Properties
This component has the following properties:

Property | Required | Default | Description
---------|----------|---------|-------------------------------------------------------
`name`   |yes       |         |The object key name on which the values will be sorted.

#### Slots
| Slot    | Description                    |
|---------|--------------------------------|
| Default | Slot to pass link text.        |
| Icon    | Slot to use custom sort icons. |

### Constraint
Currently, the `SortLink` component expects to be a child of the `SortedTable` component.
Adding any other component in between will break the sorting capabilities.
