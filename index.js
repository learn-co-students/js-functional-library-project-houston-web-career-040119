

const fi = (function() {
  return {
    // libraryMethod: function() {
    //   return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    // },

    each: function(collection, callback) {
      for(const index in collection) {
        callback(collection[index], index, collection)
      }   
      return collection
    },

    map: function(collection, callback) {
      let newArray = []
      for (const index in collection) {
        if (collection.constructor == Array) {
          newArray.push(callback(collection[index]))
        } else {
          newArray.push(callback(collection[index], index)) 
        } 
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      let total
      if (acc == undefined){
        total = collection[0]
        for (let element of collection.slice(1)) {
          total = callback(total, element, collection)
        }
        // console.log(total)
      } else {
        total = acc
        for (let element of collection) {
          total = callback(total, element, collection)
        }
      }
      return total
    },

    find: function(collection, predicate) {
      for (let element of collection) {
        if (predicate(element)) {
          return element
        }
      }
    },
    filter: function(collection, predicate) {
      let arr = []
      for (let element of collection) {
        if (predicate(element)) {
          arr.push(element)
        }
      }
      return arr
    },
    size: function(collection) {
      let size = 0
      for (let element in collection) {
        size++
      }
      return size
    },
    first: function(collection, n) {
      if (!!n) {
        return collection.slice(0, n)
      } else {
        return collection[0]
      }
    }, 
    last: function(collection, n) {
      if (!!n) {
        return collection.slice(-n)
      } else {
        return collection[collection.length - 1]
      }
    }, 
    compact: function(array) {
      let newArr = []
      for (let element of array) {
        if (!!element) {
          newArr.push(element)
        }
      }
      return newArr
    }, 
    sortBy: function(array, callback) {
      let arr = [...array]
      return arr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },
    uniq: function(array, isSorted, callback) {
      let newArr = []
      let resultArr = []
      for (let element of array) {
        if (callback == undefined) {
          if (!newArr.includes(element)) {
            newArr.push(element)
          }
        } 
        else if (!resultArr.includes(callback(element))) {
          resultArr.push(callback(element))
          newArr.push(element)
        }
      }
      return newArr
    },
    keys: function(object) {
      let newArr = []
      for (let key in object) {
        newArr.push(key)
      }
      return newArr
    },
    values: function(object) {
      let newArr = []
      for (let key in object) {
        newArr.push(object[key])
      }
      return newArr
    },
    functions: function(object) {
      let newA=[]
      for(const keys in object){
        if(object[keys]){
        newA.push(keys)
        }
      }
      return((newA).sort())
    },
    giveMeMore: function() {
      return false
    },
    flatten: function find(array, isTrue) {
        let current = array
        let next = []
        let result = []
        if (isTrue) {
          for (let element of array) {
            if (Array.isArray(element)) {
              for (let number of element) {
                result.push(number)
              }
            } else {
              result.push(element)
            }
          }
        } else {
          while (current || current === 0) {
            if (Array.isArray(current)) {
              for (let i = 0; i < current.length; i++) {
                next.push(current[i])
              }
            } else {
              result.push(current)
            }
            current = next.shift()
          }
        }
        return result.sort()
    }
  }
})()

const testArr = [1, 2, 3, 4]
const callback = (acc, val, collection) => (acc + (val * 3))
// fi.libraryMethod()
const testObject = {
  a: "",
  z: () => null,
  p: "",
  c: () => null,
  k: () => null,
}
debugger