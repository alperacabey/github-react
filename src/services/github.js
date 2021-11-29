import { Octokit } from "@octokit/rest"
const { RequestError } = require("@octokit/request-error")

const octokit = new Octokit({
    auth: process.env.REACT_APP_ACCESS_TOKEN
})

const githubAPI = {
    async searchOrganizations(input) {
        try {
            return input && octokit.request('GET /search/users', {
                q: `type:org ${input}`,
                per_page: 10,
                page: 1,
            })
        } catch (e) {
            new RequestError(e)
        }
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

        try {
            return await octokit.request('GET /search/repositories', {
                q: `org:${org} ${name}${stars ? stars : ''}`,
                sort,
                order,
                page,
                per_page: 10,
            })
        } catch (e) {
            new RequestError(e)
        }
    },

    async getIssues({ org, repo, state }) {
        try {
            return await octokit.request('GET /search/issues', {
                q: `repo:${repo} state:${state}`,
                per_page: 100,
                page: 1,
            })
        } catch (e) {
            new RequestError(e)
        }
    }
}

export default githubAPI