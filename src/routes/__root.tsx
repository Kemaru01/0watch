import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => <>
    <header style={{ }}>
      <nav style={{ display: "flex", gap: "10px", fontWeight: "bold" }}>
        <Route.Link href="/home" style={{ textDecoration: "none", border: "1px solid black", color: "black", borderRadius: 1, padding: 5, }}>
          Home 
        </Route.Link>
        <Route.Link href="/about" style={{ textDecoration: "none", border: "1px solid black", color: "black", borderRadius: 1, padding: 5, }}>
          About 
        </Route.Link>
        <Route.Link href="/blogs" style={{ textDecoration: "none", border: "1px solid black", color: "black", borderRadius: 1, padding: 5, }}>
          My Blogs
        </Route.Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
})