import axios from 'axios';

export default class PixabayAPI {
  #params;

  constructor() {
    this.#params = {
      key: '13766037-6b94ce31e5d6d188a57cfe399',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 15,
      page: 0
    };
  }

  get page() {
    return this.#params.page;
  }

  get per_page() {
    return this.#params.per_page;
  }
  
  async searchImg(q = '') {
    if(q) {
      this.#params['q'] = q;
      this.#params.page = 0;
    }

    this.#params.page += 1;
    // console.log(this.#params.page);
    return await axios.get('https://pixabay.com/api/', {
      params: this.#params,
    });
  }
}
