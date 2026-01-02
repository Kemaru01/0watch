import { createRoot } from "react-dom/client";

import { 
  createRouter, RouterProvider 
} from "@tanstack/react-router";

import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "./queryClient";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  basepath: import.meta.env.BASE_PATH ?? "/",
  defaultPendingComponent: () => <h1>it's Loading ...</h1>
})

function App(): React.ReactNode {
  return (
    <QueryClientProvider
      client={queryClient}>
        <RouterProvider 
          router={router} />
    </QueryClientProvider>
  )
}

createRoot(document.getElementById("root")!)
  .render(<App />)