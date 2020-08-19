const url = `http://localhost:4000/api/v1`

class GifModel {
  static all = () => {
    return fetch(`${url}/mygifs`)
      .then(res => res.json())
  }
}

export default GifModel