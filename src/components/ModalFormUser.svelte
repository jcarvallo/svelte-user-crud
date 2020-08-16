<script>
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
  } from "sveltestrap";

  import { validateForm, formatSaldo } from "../utils";

  export let openForm;
  export let type;
  export let update;
  export let create;
  export let user;
  export let id;

  let required = {};

  let cancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    required = validateForm(user);
    if (!Object.values(required).length > 0) {
      user.saldo = formatSaldo(user.saldo.value);
      if (type === "create") {
        create(user);
      } else {
        update(id, user);
      }
      toggle();
    }
  };

  const toggle = () => {
    required = {};
    openForm = !openForm;
  };
  let color = type === "create" ? "primary" : "success";
</script>

<style>
  span {
    font-size: 13px;
    color: red;
  }
</style>

<Modal isOpen={openForm} {toggle} size="lg">
  <Form on:submit={handleSubmit}>
    <ModalHeader {toggle}>
      {`${type === 'create' ? 'Crear' : 'Editar'} user`}
    </ModalHeader>
    <ModalBody>
      <FormGroup>
        <Label for="exampleEmail">Nombre</Label>
        <Input type="text" name="nombre" id="nombre" bind:value={user.nombre} />
        {#if required.nombre}
          <span>{required.nombre}</span>
        {/if}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Apellido</Label>
        <Input
          type="text"
          name="apellido"
          bind:value={user.apellido}
          id="apellido" />
        {#if required.apellido}
          <span>{required.apellido}</span>
        {/if}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">DNI</Label>
        <Input type="text" name="dni" id="dni" bind:value={user.dni} />
        {#if required.dni}
          <span>{required.dni}</span>
        {/if}
      </FormGroup>
      {#if type === 'create'}
        <FormGroup>
          <Label for="examplePassword">Clave</Label>
          <Input
            type="password"
            name="clave"
            id="clave"
            bind:value={user.clave} />
          {#if required.clave}
            <span>{required.clave}</span>
          {/if}
        </FormGroup>
      {/if}
      <FormGroup>
        <Label for="examplePassword">Cuenta</Label>
        <Input type="text" name="cuenta" id="cuenta" bind:value={user.cuenta} />
        {#if required.cuenta}
          <span>{required.cuenta}</span>
        {/if}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Saldo</Label>
        <Input
          type="text"
          name="saldo"
          id="saldo"
          bind:value={user.saldo.value} />
        {#if required.saldo}
          <span>{required.saldo}</span>
        {/if}
      </FormGroup>
    </ModalBody>
    <ModalFooter>
      <Button 
        id={type} 
        color={`${type === 'create' ? 'primary' : 'success'}`}
      >
        {#if type === 'create'}Crear{:else}Editar{/if}
      </Button>
      <Button id="cancel" color="dark" on:click={cancel}>Cancelar</Button>
    </ModalFooter>
  </Form>
</Modal>
