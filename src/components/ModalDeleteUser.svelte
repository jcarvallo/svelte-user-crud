<script>
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
  } from "sveltestrap";

  export let openDelete;
  export let deleteUser;
  export let id;

  const toggle = () => (openDelete = !openDelete);
</script>

<Modal isOpen={openDelete} {toggle} size="md">
  <ModalHeader {toggle}>Eliminar Usuario</ModalHeader>
  <ModalBody>¿Esta seguro de eliminar el usuario?</ModalBody>
  <ModalFooter>
    <Button
      color="danger"
      on:click={() => {
        deleteUser(id);
        toggle();
      }}>
      Eliminar
    </Button>
    <Button color="dark" on:click={toggle}>Cancelar</Button>
  </ModalFooter>
</Modal>
