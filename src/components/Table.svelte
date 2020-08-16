<script>
  import { Table, Button } from "sveltestrap";
  import { Actions } from "../components";
  export let data;
  export let actions;
</script>

<Table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>DNI</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    {#each data as user}
      <tr>
        <td>{user.nombre}</td>
        <td>{user.apellido}</td>
        <td>{user.dni}</td>
        <td colspan="2">
          <Actions {...actions} {user} />
        </td>
      </tr>
    {:else}
      <tr>
        <td colspan="4">No hay usuarios</td>
      </tr>
    {/each}
  </tbody>
</Table>
