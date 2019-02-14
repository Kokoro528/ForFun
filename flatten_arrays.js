function flatten(nestedArray) {
    // Your code here
  
    
  let flattenHelper = (acc, obj) => {
    if (Array.isArray(obj)) {
      return [...acc, ...(obj.reduce(flattenHelper,[]))];
    }
    else {
      return [...acc, obj];
    }
  }
  return nestedArray.reduce(flattenHelper, []);
  
}
