<script>
  import { onMount } from "svelte";
  import { Button, Card, CardBody } from "sveltestrap";
  import { initialValuesForm, setValuesForm, notifications } from "../../utils";
  import { Table, ModalFormUser, ModalDeleteUser } from "../../components";
  import { serviceUser } from "../../services";

  let actionsGrud = {
    type: "",
    id: "",
    user: initialValuesForm(),
    openForm: false,
    openDelete: false,
    create: (user) => createUser(user),
    update: (id, user) => updateUser(id, user),
    deleteUser: (id) => deleteUser(id),
  };

  let dataUsers = {
    data: [],
    actions: {
      handleCrear: () => {
        actionsGrud = {
          ...actionsGrud,
          user: initialValuesForm(),
          type: "create",
          openForm: true,
          openDelete: false,
        };
      },
      handleEditar: (user) => {
        actionsGrud = {
          ...actionsGrud,
          user: setValuesForm(user),
          type: "update",
          openForm: true,
          openDelete: false,
          id: user._id,
        };
      },
      handleEliminar: (id) => {
        actionsGrud = {
          ...actionsGrud,
          type: "delete",
          id,
          user: initialValuesForm(),
          openForm: false,
          openDelete: true,
        };
      },
    },
  };

  async function getUser() {
    try {
      let result = await serviceUser.getUser();
      dataUsers.data = result;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function createUser(data) {
    try {
      await serviceUser.createUser(data);
      notifications("Usuario creado", "create").show();
      getUser();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateUser(id, data) {
    try {
      await serviceUser.updateUser(id, data);
      notifications("Usuario editado", "update").show();
      getUser();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id) {
    try {
      await serviceUser.deleteUser(id);
      notifications("Usuario elminado", "delete").show();
      getUser();
    } catch (error) {
      console.log(error);
    }
  }

  onMount(async () => getUser());
</script>

<style>
  .button-create {
    text-align: right;
    margin-bottom: 14px;
  }
</style>

<Card>
  <CardBody>
    <div class="button-create">
      <Button color="primary" on:click={dataUsers.actions.handleCrear}>
        Crear
      </Button>
    </div>
    <Table {...dataUsers} />
  </CardBody>
</Card>
<ModalFormUser {...actionsGrud} />
<ModalDeleteUser {...actionsGrud} />
