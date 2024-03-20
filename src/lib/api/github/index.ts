import { GithubProjectType } from "./type";

export async function getGithubRepos() {
    try {
        const response = await fetch(
            "https://api.github.com/users/souravrax/repos",
            { cache: "force-cache" }
        );
        if (!response.ok) {
            throw Error(
                `${response.statusText}(${response.statusText}): Unable to resolve request`
            );
        }
        const projects: GithubProjectType[] = await response.json();
        projects.sort(
            (a, b) => (b?.stargazers_count ?? 0) - (a?.stargazers_count ?? 0)
        );
        // return projects.filter((project) => !project.fork);
        return projects;
    } catch (error) {
        console.log(error);
        return [];
    }
}
