import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import github from '../services/github'

export const searchOrganizations = createAsyncThunk(
  'organization/fetchList',
  async (input) => {
    const response = await github.searchOrganizations(input)
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
)

const searchRepositoriesAsync = createAsyncThunk(
  'repostory/fetchList',
  async (params) => {
    const response = await github.searchRepositories(params)
    return response.data;
  }
)

export const getIssues = createAsyncThunk(
  'repostory/fetchIssueList',
  async (repositories) => {

    const promiseList = []

    repositories.forEach(repo => {
      ['open', 'closed'].forEach(state => {
        promiseList.push(github.getIssues({ repo: repo.full_name, state }))
      })
    })

    const response = await Promise.all(promiseList)
    // The value we return becomes the `fulfilled` action payload
    return repositories.map((repository, index) => {
      return { repo: repository.name, open_issues: response[index * 2].data.total_count, closed_issues: response[index * 2 + 1].data.total_count }
    })
  }
)

export const initialState = () => ({
  list: [],
  selected: '',
  serviceStatus: 'idle',//'idle' | 'loading' | 'succeeded' | 'failed'
  loadingStack: {},
  repositories: [],
  totalCount: 0
})

export const organizationSlice = createSlice({
  name: 'organization',
  initialState: initialState(),
  reducers: {
    resetOrganization: state => {
      state.selected = ''
      state.serviceStatus = 'idle' //'idle' | 'loading' | 'succeeded' | 'failed'
      state.repositories = []
      state.totalCount = 0
    },
    selectOrganization: (state, action) => {
      state.repositories = []
      state.selected = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      //searchOrganizations
      .addCase(searchOrganizations.pending, (state) => {
        state.loadingStack['searchOrganizations'] = true;
      })
      .addCase(searchOrganizations.fulfilled, (state, action) => {
        state.serviceStatus = 'idle'
        state.list = action.payload.items.map(item => ({ id: item.login, name: item.login }))
        state.loadingStack['searchOrganizations'] = false;
        // state.list = action.payload.items.map(item => ({ id: item.login, name: item.login.charAt(0).toUpperCase() + item.login.slice(1).toLocaleLowerCase() }))
      })
      .addCase(searchOrganizations.rejected, (state) => {
        state.loadingStack['searchOrganizations'] = false;
      })
      //searchRepositoriesAsync
      .addCase(searchRepositoriesAsync.pending, (state) => {
        state.loadingStack['searchRepositories'] = true;
        state.serviceStatus = 'loading'
      })
      .addCase(searchRepositoriesAsync.fulfilled, (state, action) => {
        state.serviceStatus = 'idle'
        state.loadingStack['searchRepositories'] = false;
        state.repositories = action.payload.items;
        state.totalCount = action.payload.total_count;
      })
      // .addCase(searchRepositoriesAsync.rejected, (state) => {
      //   state.loadingStack['searchRepositories'] = false;
      // })
      //getIssues
      .addCase(getIssues.pending, (state) => {
        state.loadingStack['getIssues'] = true;
        state.serviceStatus = 'loading'
      })
      .addCase(getIssues.fulfilled, (state, action) => {
        state.serviceStatus = 'idle'
        state.loadingStack['getIssues'] = false;
      })
      .addCase(searchRepositoriesAsync.rejected, (state) => {
        state.loadingStack['getIssues'] = false;
      })
  },
})

// Action creators are generated for each case reducer function
export const { resetOrganization, receiveOrganizations, selectOrganization } = organizationSlice.actions


export const searchRepositories = (params) => (dispatch, getState) => {
  const org = selectedOrganization(getState())
  if (org) {
    dispatch(searchRepositoriesAsync({ org, ...params }))
  }
};

// Selectors
export const selectedOrganization = (store) => store.organization?.selected;
export const organizationList = (store) => store.organization.list;
export const repositoryList = (store) => store.organization.repositories
export const serviceStatus = (store) => store.organization.serviceStatus
export const loadingStack = (store) => store.organization.loadingStack
export const totalCount = (store) => store.organization.totalCount

export default organizationSlice.reducer