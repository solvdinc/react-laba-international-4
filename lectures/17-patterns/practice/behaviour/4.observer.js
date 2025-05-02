class AutoNews {
  constructor() {
    this.news = '';
    this.actions = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach(subs => subs.inform(this.news));
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer));
  }
}

class Misha {
  inform(message) {
    console.log(`Misha has been informed about: ${message}`);
  }
}

class Dima {
  inform(message) {
    console.log(`Dima has been informed about: ${message}`);
  }
}

const autoNews = new AutoNews();
autoNews.register(new Misha());
autoNews.register(new Dima());

autoNews.setNews('I love patterns');
autoNews.setNews('I love football');
