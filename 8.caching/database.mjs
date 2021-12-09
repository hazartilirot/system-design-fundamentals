export default {
  database: {
    ['index.html']: '<html>Hello World!</html>'
  },
  get: function(key, callback) {
    setTimeout(() => callback(this.database[key]), 3000);
  },
}