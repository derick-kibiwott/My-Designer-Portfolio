import React from "react";
import { TriangleAlert } from "lucide-react";
import LinkButton from "@/components/ui/LinkButton";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen padding-x">
      <div className="px-6 py-4 bg-surface-low shadow-sm rounded-lg space-y-l2 max-w-xl">
        <div className="flex flex-col md:flex-row space-x-l1 items-center">
          <div className="p-2 bg-yellow-500 rounded-full">
            <TriangleAlert className="text-white" size={48} />
          </div>
          <p className="secondary-text text-2xl text-center">
            Sorry there are no projects to display yet
          </p>
        </div>
        <p className="paragraph secondary-text w-full opacity-80">
          I’m currently building my portfolio and haven’t taken on any client
          projects just yet. To get started, I’m offering free design work to my
          first 5 clients.
        </p>
        <div className="flex space-x-l1 flex-col md:flex-row space-y-l1">
          <LinkButton className="w-full md:w-auto md:my-0" link="/contact">
            Get Started
          </LinkButton>
          <LinkButton
            variant="outlined"
            className="w-full md:w-auto md:my-0"
            link="/"
          >
            Back to Home
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Projects;
