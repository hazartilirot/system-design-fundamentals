export default {
  database: {
    ['index.html']: '<html>Hello World</html>'
  },
  get: (key, callback) => 
    setTimeout(() => callback(this.database[key]), 1000)
}