const mergeArrays = (...arrs) => arrs.reduce((acc, curr) => acc.concat(...curr), [])

export default mergeArrays
