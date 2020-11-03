export default mergeArrays = (...arrs) => arrs.reduce((acc, curr) => acc.concat(...curr), [])
