import { Octokit } from "@octokit/rest"

const octokit = new Octokit({
    auth: process.env.REACT_APP_ACCESS_TOKEN
})

const githubAPI = {
    async searchOrganizations(input) {
        return input && octokit.request('GET /search/users', {
            q: `type:org ${input}`,
            per_page: 10,
            page: 1,
        })
    },

    // order = "asc" || "desc"
    // sort = 'stars' || 'forks' || 'help-wanted-issues'
    async searchRepositories({
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

        return await octokit.request('GET /search/repositories', {
            q: `org:${org} ${name}${stars ? stars : ''}`,
            sort,
            order,
            page,
            per_page: 10,
        })
    },

    async getIssues({ org, repo, state }) {
        return await octokit.request('GET /search/issues', {
            q: `repo:${repo} state:${state}`,
            per_page: 100,
            page: 1,
        })
    }
}

export default githubAPI