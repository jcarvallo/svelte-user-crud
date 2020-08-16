<script lang="ts">
  import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
  } from "sveltestrap";

  export let handleEditar;
  export let handleEliminar;
  export let user;

  let isOpen = false;
</script>

<Dropdown {isOpen} toggle={() => (isOpen = !isOpen)} size="sm">
  <DropdownToggle caret color="info">Acciones</DropdownToggle>
  <DropdownMenu>
    <DropdownItem on:click={() => handleEditar(user)}>Editar</DropdownItem>
    <DropdownItem on:click={() => handleEliminar(user._id)}>
      Eliminar
    </DropdownItem>
  </DropdownMenu>
</Dropdown>
