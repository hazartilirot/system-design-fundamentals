const database = {
  'index.html': '<html>Hello World!</html>'
}

export default {
  get: (key, callback) => {
      setTimeout(() =>
          callback(database[key]),
       3000) 
    }
}
