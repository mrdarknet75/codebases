const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createAsyncActions (base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE].forEach(type => (res[type] = `${base}_${type}`))
  return res
}

// Server Actions
export const API_GET_CONFIG = createAsyncActions('API_GET_CONFIG')
export const API_GET_ACCOUNT = createAsyncActions('API_GET_ACCOUNT')
export const API_GET_ACCOUNT_PERMISSIONS = createAsyncActions('API_GET_ACCOUNT_PERMISSIONS')
export const LOAD_TEMP_IMAGE = createAsyncActions('LOAD_TEMP_IMAGE')
export const API_DELETE_ICON = createAsyncActions('DELETE_ICON')
export const API_GET_SAMPLE_PROJECTS = createAsyncActions('GET_SAMPLE_PROJECTS')
export const API_COPY_SAMPLE_PROTOTYPE = createAsyncActions('COPY_SAMPLE_PROTOTYPE')
export const API_COPY_SAMPLE_BOARD = createAsyncActions('COPY_SAMPLE_BOARD')
export const API_LEAVE_SPACE = createAsyncActions('LEAVE_SPACE')
export const API_LOAD_RECENT_DOCUMENTS = createAsyncActions('LOAD_RECENT_DOCUMENTS')
export const API_ARCHIVE_DOCUMENT = createAsyncActions('ARCHIVE_DOCUMENT')
export const API_ACTIVATE_DOCUMENT = createAsyncActions('ACTIVATE_DOCUMENT')
export const API_DELETE_DOCUMENT = createAsyncActions('DELETE_DOCUMENT')
export const API_JOIN_DOCUMENT = createAsyncActions('JOIN_DOCUMENT')
export const API_CREATE_DOCUMENT = createAsyncActions('CREATE_DOCUMENT')
export const API_CREATE_SPACE = createAsyncActions('CREATE_SPACE')
export const API_UPDATE_SPACE = createAsyncActions('UPDATE_SPACE')
export const API_DELETE_PROJECT = createAsyncActions('DELETE_PROJECT')
export const API_DELETE_SPACE = createAsyncActions('DELETE_SPACE')
export const API_GET_ARCHIVED_SPACE_DOCUMENTS = createAsyncActions('GET_ARCHIVED_SPACE_DOCUMENTS')
export const API_GET_PROJECTS = createAsyncActions('API_GET_PROJECTS')
export const API_GET_PROJECTS_DETAIL = createAsyncActions('API_GET_PROJECTS_DETAIL')
export const API_GET_RECENTS = createAsyncActions('GET_RECENTS')
export const API_GET_PROJECT = createAsyncActions('GET_PROJECT')
export const API_GET_SPACE = createAsyncActions('GET_SPACE')
export const API_GET_SPACE_V2 = createAsyncActions('GET_SPACE_V2')
export const API_GET_SPACES_RESOURCE = createAsyncActions('GET_SPACES_RESOURCE')
export const API_GET_SPACES_SEARCH_RESOURCE = createAsyncActions('API_GET_SPACES_SEARCH_RESOURCE')
export const API_GET_SPACE_MEMBERS_DETAIL = createAsyncActions('GET_SPACE_MEMBERS_DETAIL')
export const API_GET_SPACES_DETAIL = createAsyncActions('GET_SPACES_DETAIL')
export const API_GET_SUBSCRIPTION = createAsyncActions('GET_SUBSCRIPTION')
export const API_ADD_DOCUMENT_TO_CONTAINER = createAsyncActions('ADD_DOCUMENT_TO_CONTAINER')
export const API_ADD_DOCUMENTS_TO_SPACE = createAsyncActions('ADD_DOCUMENTS_TO_SPACE')
export const API_REMOVE_DOCUMENT_FROM_SPACE = createAsyncActions('API_REMOVE_DOCUMENT_FROM_SPACE')
export const API_MOVE_DOCUMENT_TO_SPACE = createAsyncActions('API_MOVE_DOCUMENT_TO_SPACE')
export const API_REMOVE_DOCUMENT_AND_CREATE_SPACE = createAsyncActions('API_REMOVE_DOCUMENT_AND_CREATE_SPACE')
export const API_SET_ACCESS_MANAGEMENT = createAsyncActions('API_SET_ACCESS_MANAGEMENT')
export const API_UPDATE_DESCRIPTION = createAsyncActions('API_UPDATE_DESCRIPTION')
export const API_UPDATE_PROJECT = createAsyncActions('UPDATE_PROJECT')
export const UPLOAD_ICON = {
  REQUEST_UPLOAD: 'UPLOAD_ICON_REQUEST_UPLOAD',
  REQUEST_UPLOAD_SUCCESS: 'UPLOAD_ICON_REQUEST_UPLOAD_SUCCESS',
  REQUEST_UPLOAD_FAILURE: 'UPLOAD_ICON_REQUEST_UPLOAD_FAILURE',

  PUT_FILE: 'UPLOAD_ICON_PUT_FILE',
  PUT_FILE_SUCCESS: 'UPLOAD_ICON_PUT_FILE_SUCCESS',
  PUT_FILE_FAILURE: 'UPLOAD_ICON_PUT_FILE_FAILURE'
}
export const API_GET_DOCUMENT_METADATA = {
  REQUEST: 'API_GET_DOCUMENT_METADATA_REQUEST',
  THUMBNAILS_SUCCESS: 'API_GET_DOCUMENT_METADATA_THUMBNAILS_SUCCESS',
  THUMBNAILS_FAILURE: 'API_GET_DOCUMENT_METADATA_THUMBNAILS_FAILURE',
  PERMISSIONS_SUCCESS: 'API_GET_DOCUMENT_METADATA_PERMISSIONS_SUCCESS',
  PERMISSIONS_FAILURE: 'API_GET_DOCUMENT_METADATA_PERMISSIONS_FAILURE',
  FREEHAND_METADATA_SUCCESS: 'API_GET_DOCUMENT_METADATA_FREEHAND_META_DATA_SUCCESS',
  FREEHAND_METADATA_FAILURE: 'API_GET_DOCUMENT_METADATA_FREEHAND_META_DATA_FAILURE'
}
export const API_GET_FREEHAND_METADATA = {
  REQUEST: 'API_GET_FREEHAND_METADATA_REQUEST'
}
export const API_GET_INITIAL_DOCUMENTS = createAsyncActions('API_GET_INITIAL_DOCUMENTS')
export const API_MOVE_DOCUMENTS_TO_CONTAINER = createAsyncActions('API_MOVE_DOCUMENTS_TO_CONTAINER')

// Server Actions - from Sidebar
export const API_MOVE_DOCUMENTS_TO_SPACE = createAsyncActions('MOVE_DOCUMENTS_TO_SPACE')
export const API_MOVE_DOCUMENTS_TO_PROJECT = createAsyncActions('MOVE_DOCUMENTS_TO_PROJECT')
export const API_UPDATE_PROJECT_SIDEBAR = createAsyncActions('UPDATE_PROJECT_SIDEBAR')

// View Actions
export const CLEAR_SELECTED_DOCUMENTS = 'CLEAR_SELECTED_DOCUMENTS'
export const CONFIG_LOADED = 'CONFIG_LOADED'
export const DESELECT_DOCUMENTS = 'DESELECT_DOCUMENTS'
export const DOCUMENT_MOVED = 'DOCUMENT_MOVED'
export const END_DOCUMENT_DRAG = 'END_DOCUMENT_DRAG'
export const FILTER_SPACES = 'FILTER_SPACES'
export const GOTO_PAGE = 'GOTO_PAGE'
export const JOINED_SPACE = 'JOINED_SPACE'
export const LOAD_STORED_SORTS = 'LOAD_STORED_SORTS'
export const NAVIGATE_TO_SPACE = 'NAVIGATE_TO_SPACE'
export const PAGE_OPENED = 'PAGE_OPENED'
export const RESET_FILTERS = 'RESET_FILTERS'
export const SELECT_SPACE_RESULT = 'SELECT_SPACE_RESULT'
export const SET_ACTIVE_SELECTED_DOCUMENT = 'SET_ACTIVE_SELECTED_DOCUMENT'
export const SET_BROWSER_INFO = 'SET_BROWSER_INFO'
export const SET_DRAG_SELECTIONS = 'SET_DRAG_SELECTIONS'
export const SET_SHOW_FILTERS = 'SET_SHOW_FILTERS'
export const SET_SHOW_GET_INSPIRED = 'SET_SHOW_GET_INSPIRED'
export const SET_SPACES_SEARCH_RESOURCE_LOADING = 'SET_SPACES_SEARCH_RESOURCE_LOADING'
export const SET_SPACE_TYPE = 'SET_SPACE_TYPE'
export const SET_VIEW_TYPE = 'SET_VIEW_TYPE'
export const SET_PAYWALL = 'SET_PAYWALL'
export const START_DOCUMENT_DRAG = 'START_DOCUMENT_DRAG'
export const TOGGLE_ACCESS_SETTING = 'TOGGLE_ACCESS_SETTING'
export const TOGGLE_ARCHIVE_MODAL = 'TOGGLE_ARCHIVE_MODAL'
export const TOGGLE_DELETE_MODAL = 'TOGGLE_DELETE_MODAL'
export const TOGGLE_TEMPLATE_GALLERY_MODAL = 'TOGGLE_TEMPLATE_GALLERY_MODAL'

export const TOGGLE_HAS_SEEN_SPACES_CTA = 'TOGGLE_HAS_SEEN_SPACES_CTA'
export const TOGGLE_HAS_SEEN_SPACES_DOCS_CTA = 'TOGGLE_HAS_SEEN_SPACES_DOCS_CTA'
export const TOGGLE_MANAGE_ACCESS_MODAL = 'TOGGLE_MANAGE_ACCESS_MODAL'
export const TOGGLE_MORE_MENU = 'TOGGLE_MORE_MENU'
export const TOGGLE_MOVE_DOCUMENT_MODAL = 'TOGGLE_MOVE_DOCUMENT_MODAL'
export const TOGGLE_SELECT_DOCUMENT = 'TOGGLE_SELECT_DOCUMENT'
export const UPDATE_ACCESS_MANAGEMENT = 'UPDATE_ACCESS_MANAGEMENT'
export const UPDATE_FILTERS = 'UPDATE_FILTERS'
export const UPDATE_SPACE_COLOR = 'UPDATE_SPACE_COLOR'
export const UPDATE_SPACE_TITLE = 'UPDATE_SPACE_TITLE'

// Alerts
export const SHOW_ALERT = 'SHOW_ALERT'

// Error Modal
export const TOGGLE_ERROR_MODAL = 'TOGGLE_ERROR_MODAL'

// Create Modal - View Actions
export const CREATE_MODAL_OPEN = 'CREATE_MODAL_OPEN'
export const CREATE_MODAL_OPEN_ONBOARDING = 'CREATE_MODAL_OPEN_ONBOARDING'
export const CREATE_MODAL_CLOSE = 'CREATE_MODAL_CLOSE'
export const CREATE_MODAL_SUCCESS = 'CREATE_MODAL_SUCCESS'
export const CREATE_MODAL_FAIL = 'CREATE_MODAL_FAIL'
export const CREATE_MODAL_REMOVE_ERROR = 'CREATE_MODAL_REMOVE_ERROR'
export const CREATE_MODAL_RESET = 'CREATE_MODAL_RESET'

// Analytics
export const ANALYTICS_SET_CONTEXT = 'ANALYTICS_SET_CONTEXT'
export const ANALYTICS_TRACK_CREATE_CLICK = 'ANALYTICS_TRACK_CREATE_CLICK'

// Space Details
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const DESCRIPTION_LINK_CLICKED = 'DESCRIPTION_LINK_CLICKED'
export const NAVIGATE_ACTIVE_DOCUMENT = 'NAVIGATE_ACTIVE_DOCUMENT'
export const OPEN_BATCH_ADD_MODAL = 'OPEN_BATCH_ADD_MODAL'
export const OPEN_MIGRATED_DOCS_MODAL = 'OPEN_MIGRATED_DOCS_MODAL'
export const OPEN_MANAGE_ACCESS_MODAL = 'OPEN_MANAGE_ACCESS_MODAL'
export const REMOVE_SELECTED_DOCUMENT = 'REMOVE_SELECTED_DOCUMENT'
export const RESET_SPACE = 'RESET_SPACE'
export const SELECT_ACTIVE_DOCUMENT = 'SELECT_ACTIVE_DOCUMENT'
export const SELECT_LAST_DOCUMENT = 'SELECT_LAST_DOCUMENT'
export const SELECT_SPACE = 'SELECT_SPACE'
export const SET_ACTIVE_DOCUMENT = 'SET_ACTIVE_DOCUMENT'
export const SET_PROJECT_COUNT = 'SET_PROJECT_COUNT'
export const SHOW_PROJECTS_IN_SPACE = 'SHOW_PROJECTS_IN_SPACE'
export const START_DESCRIPTION_EDIT = 'START_DESCRIPTION_EDIT'
export const STOP_DESCRIPTION_EDIT = 'STOP_DESCRIPTION_EDIT'
export const UPDATE_BATCH_FILTER_TEXT = 'UPDATE_BATCH_FILTER_TEXT'

// BrowserMQs

export const CHECK_IF_BROWSER_MQS_CHANGED = 'CHECK_IF_BROWSER_MQS_CHANGED'
export const BROWSER_MQS_CHANGED = 'BROWSER_MQS_CHANGED'

// External actions - from sidebar
export const API_CREATE_SPACE_FROM_SIDEBAR = createAsyncActions('API_CREATE_SPACE')

// External actions - to sidebar
export const SIDEBAR_EXPAND_SPACE = 'SIDEBAR_EXPAND_SPACE'