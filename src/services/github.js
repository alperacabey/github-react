import { Octokit } from "@octokit/rest";
import env from "react-dotenv";

const octokit = new Octokit({
    auth: env.ACCESS_TOKEN
});

const githubAPI = {
    searchOrganizations(input) {
        return input && octokit.request('GET /search/users', {
            q: `type:org ${input}`,
            per_page: 10,
            page: 1,
        })
    },

    // order = "asc" || "desc"
    // sort = 'stars' || 'forks' || 'help-wanted-issues'
    searchRepositories({
        org = "",
        name = "",
        min = 0,
        max = 0,
        page = 1,
        sort = 'name',
        order = 'asc'
    }) {
        let stars = null
        if (min && max) stars = ` stars:${min}..${max}`
        else if (min) stars = ` stars:>=${min}`
        else if (max) stars = ` stars:<=${max}`
        if (sort === 'stargazers_count') sort = 'stars'
        return octokit.request('GET /search/repositories', {
            q: `org:${org} ${name}${stars ? stars : ''}`,
            sort,
            order,
            page,
            per_page: 10,
        })
    },

    getIssues({ org, repo, state }) {

        return octokit.request('GET /search/issues', {
            q: `repo:${repo} state:${state}`,
            per_page: 100,
            page: 1,
        })
    }
}

export default githubAPI