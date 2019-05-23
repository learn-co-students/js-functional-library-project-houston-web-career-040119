const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      let keys = Object.keys(collection)
      for (let i = 0; i< keys.length; i++)
        callback(collection[keys[i]],keys[i],collection)
      return collection
    },

    map: function(collection,callback) {
      let copyCol =  collection.slice ? collection.slice() : Object.assign({}, collection)
      
      let keys = Object.keys(copyCol)
      for (let i = 0; i< keys.length; i++)
        copyCol[keys[i]] = callback(collection[keys[i]],keys[i],collection)
      console.log(collection)
      console.log(copyCol)
      return collection.slice ? copyCol : Object.values(copyCol)
    },

    reduce: function(collection,callback,acc) {
      let acc1;
      let i = 0
      let keys = Object.keys(collection)
      if ((typeof(acc) === "number") || (typeof(acc) === "string"))
         acc1 = acc
      else if ( typeof(acc) === "object")
         acc1 = acc.slice ? acc.slice() : Object.assign({},acc)
      else if (keys.length > 0){
        acc1 = collection[keys[0]]
        i = 1
      } else {
        acc1 = 0
      }
    
      for (; i< keys.length; i++)
        acc1 = callback(acc1,collection[keys[i]],collection)
      return acc1
    },
    

    find: function(collection,predicate){
      let keys = Object.keys(collection)
        for (let i = 0; i< keys.length; i++)
          if (predicate(collection[keys[i]]))
            return collection[keys[i]]
    },

    filter: function(collection,predicate){
      let arr = []
      let keys = Object.keys(collection)
      for (let i = 0; i< keys.length; i++)
        if (predicate(collection[keys[i]]))
          arr.push(collection[keys[i]])
      return arr
    },
    size: function(collection){
      let sz = 0;
      for(let elem in collection) {
        sz++;
      }
      return sz;
    },

    first: function(array, n){
      if (!n){
        return array[0]}
      else { return array.slice(0,n) }
    },

    last: function(array, n){
      if (!n){
        return array[array.length-1]}
      else {return array.slice(array.length-n)}
    },

    compact: function(array){
      let arr = []
      for (let i = 0; i< array.length; i++)
        if (!!array[i])
          arr.push(array[i])
      return arr
    },

    sortBy: function(array,callback) {
      function sort(arr) {
        let newArr = arr.slice();
        for(let j = 0; j < arr.length; j++) {
          for(let i=0; i<arr.length-1; i++) {
            if(newArr[i] > newArr[i+1]) {
              let tmp = newArr[i];
              newArr[i]=newArr[i+1];
              newArr[i+1]=tmp;
            }
          }
        }
        return newArr;
      }
    
      let inverseObj = {}
      for( let i = 0; i < array.length; i++) {
        if(inverseObj[callback(array[i])]) {
          inverseObj[callback(array[i])].push(array[i])
        } else {
          inverseObj[callback(array[i])] = [array[i]]
        }
      }

      let keys = Object.keys(inverseObj);
      for(let i = 0; i < keys.length; i++){
        if( !Number.isNaN(parseFloat(keys[i])) ) {
          keys[i] = parseFloat(keys[i])
        }
      }
      keys = sort(keys);
      let results = []
      for(let i = 0; i < keys.length; i++) {
        for(let j = 0; j < inverseObj[keys[i]].length; j++) {
          results.push(inverseObj[keys[i]][j]);
        }
      }
      return results
    },

    uniq: function(array,isSorted,callback){
        if (!callback)
        callback = a=>a
        let results = []
        for(let i=0;i<array.length; i++){
          let present = false
          for (let j=0;j<results.length;j++){
            if (callback(results[j]) === callback(array[i]))
              present = true
          }
          if (!present)
          results.push(array[i])
        }
        return results
    },

      keys: function(object){
        let results = []
        for(let key in object) {
          results.push(key)
        }
        return results
      },

      values: function(object){
        let results = []
        let keys = Object.keys(object)
        for (let i = 0; i< keys.length; i++)
           results.push(object[keys[i]])
          return results
      },

    functions: function(object) {
        let results = []
        let keys = Object.keys(object)
        for (let i = 0; i<keys.length;i++)
          if (typeof(object[keys[i]]) === "function")
            results.push(keys[i])
        results = results.sort()
        return results
    },

    flatten: function(arr,dontRecurse) {
      function flattenHelper(arr) {
        let results = []
        for(let i = 0; i < arr.length; i++) {
          if(typeof(arr[i]) === "object") {
            let newArr = flattenHelper(arr[i])
            for(let j = 0; j < newArr.length; j++) {
              results.push(newArr[j])
            }
          } else {
            results.push(arr[i])
          }
        }
        return results;
      }
      if(!dontRecurse) {
        return flattenHelper(arr);
      }
      let results = []
      for(let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) === "object") {
          for(let j = 0; j < arr[i].length; j++) {
            results.push(arr[i][j])
          }
        } else {
          results.push(arr[i])
        }
      }
      return results;

    }


  }
})()

fi.libraryMethod()
