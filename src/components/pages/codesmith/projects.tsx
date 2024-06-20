import { TitleDescriptionCard } from "@/components/atoms/title-description-container";
import { getGithubRepos } from "@/libs/api/github";
import { HoverGrid } from "./github-hover-card";
import { Suspense } from "react";

async function GithubProjects() {
    const projects = await getGithubRepos();
    return <HoverGrid items={projects} />;
}

export default function Projects() {
    return (
        <TitleDescriptionCard title="Projects">
            <Suspense>
                <GithubProjects />
            </Suspense>
        </TitleDescriptionCard>
    );
}
