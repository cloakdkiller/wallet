<script>
    import whitelabel from '../../../whitelabel.json'

	//Components
    import { NavLogo, NavControls }  from '../Router.svelte'
</script>

<style>
.nav{
    display: flex;
    flex-direction: row;
    position: fixed;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    right: 0;
    height: 97px;
    background-color: var(--bg-primary);
    z-index: 25;
    border-bottom: 1px solid var(--divider-light);
}
.spacer{
    flex-grow: 1;
}
</style>

<div class="nav text-primary">
    <NavLogo />
    <div class="spacer" />
    {#if whitelabel.nav.showNetworkBox}
        <NavControls />
    {/if}
</div>
