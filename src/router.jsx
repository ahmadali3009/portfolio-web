import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProjectDetail from "./components/ProjectDetail";
import { PROJECTS_EN, PROJECTS_AR } from "./constants";

// Combine all projects for routing
const allProjects = [...PROJECTS_EN];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectDetail />,
    loader: ({ params }) => {
      const project = allProjects.find((p, index) => index === parseInt(params.projectId));
      if (!project) {
        throw new Response("Project not found", { status: 404 });
      }
      return project;
    },
  },
]);

export default router;