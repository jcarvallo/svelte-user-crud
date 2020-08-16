<script>
     import { NavbarBrand, Navbar} from 'sveltestrap';
</script>

<style>
    :global(.navbar){
      margin-bottom: 30px;
    }
</style>

<Navbar color="light" light expand="md">
  <NavbarBrand href="/">Svelte User CRUD</NavbarBrand>
</Navbar>