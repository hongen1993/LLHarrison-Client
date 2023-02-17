import InitAxios from './initAxios.service'

class PropertyAPI extends InitAxios {
  constructor() {
    super('property')
  }

  getProperties(page) {
    return this.axios
      .get(`/all?limit=9&offset=${page}`)
      .then((response) => response.data)
      .catch((err) => console.error(err))
  }
  getSixProperties(page) {
    return this.axios
      .get(`/all?limit=6&offset=${page}`)
      .then((response) => response.data)
      .catch((err) => console.error(err))
  }
  getCategoriesProp() {
    return this.axios
      .get(`/all`)
      .then((response) => response.data)
      .catch((err) => console.error(err))
  }
  getPropertyById(id) {
    return this.axios
      .get(`/${id}`)
      .then((response) => response.data)
      .catch((err) => console.error(err))
  }

  createProperty(body) {
    return this.axios
      .post('/new', body)
      .then((response) => response.data)
      .catch((err) => console.error(err))
  }

  updatePropertyById(id, body) {
    return this.axios
      .put(`/edit/${id}`, body)
      .then((response) => response.data)
      .catch((err) => console.error(err))
  }

  deletePropertyById(id) {
    return this.axios
      .delete(`/${id}`)
      .then((response) => response.data)
      .catch((err) => console.error(err))
  }
}

export default new PropertyAPI();