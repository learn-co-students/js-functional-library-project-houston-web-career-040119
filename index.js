const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      for (const key in collection){
          callback(collection[key])
      }
      return collection
    },

    map: function(collection,callback) {
      let arr = []
      for (const key in collection){
        arr.push(callback(collection[key]))
      }
      return arr

    },

    reduce: function(collection,callback,acc) {
      let total = acc ? acc : collection[0]
      for (const i in collection){
        if (!(i == 0 && !acc)) {
          total = callback(total,collection[i],collection)
        }
      }
      return total
    },

    find: function(collection,predicate) {
      for (const i in collection) {
        if (predicate( collection[i] )) {
          return collection[i]
        }
      }
      // return undefined
    },

    filter: function(collection,predicate) {
      let arr = []
      for (const i in collection) {
        if (predicate( collection[i] )) {
          arr.push(collection[i])
        }
      }
      return arr
    },

    size: function(array) {
      let x = 0
      for (const i in array){
        x = x+1
      }
      return x
    },

    first: function(array,n) {
      return n ? array.slice(0,n) : array[0]
    },

    last: function(array,n) {
      return n ? array.slice(-1 * n) : array.slice(-1)[0]
    },

    compact: function(array) {
      let newArr = []
      for (const i in array) {
        array[i] ? newArr.push(array[i]) : 0
      }
      return newArr
    },

    sortBy: function(array,callback) {
      let newArr = [...array]
      return newArr.sort((a,b) => {return callback(a) - callback(b)} )
    },

    unpack: function(receiver, arr) {
      for (let val of arr){
        receiver.push(val)
      }
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)){
        return newArr.push(collection)
      }
      if (shallow) {
        for (let val of collection) {
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
        }
      }
      else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
      },

    uniqSorted: function(collection, callback) {
      const sorted = [collection[0]]
      for (let i = 1; i < collection.length; i++) {
        if (sorted[i-1] !== collection[i])
          sorted.push(collection[i])
      }
      return sorted
    },

    uniq: function(collection, sorted, callback) {
      if (sorted) {
        return fi.uniqSorted(collection, callback)
      } else if (!callback) {
        return Array.from(new Set(collection))
      } else {
        let modVals = new Set()
        let uniqVals = new Set()
        for (let val of collection) {
          let modVal = callback(val)
          if (!modVals.has(modVal)) {
            modVals.add(modVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object){
      let arr = []
      for (const key in object) {
        arr.push(key)
      }
      return arr
    },

    values: function(object){
      let arr = []
      for (const key in object) {
        arr.push(object[key])
      }
      return arr
    },

    functions: function(object){
      let arr = []
      for (const key in object) {
        typeof object[key] === "function" ? arr.push(key) : null
      }
      return arr
    }


  }
})()

fi.libraryMethod()
