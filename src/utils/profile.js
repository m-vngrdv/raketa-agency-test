import _ from 'lodash'
export function isChanged(obj, copiedObj, keys) {
  if (!_.isEmpty(copiedObj)) {
    let a = _.pick(obj, keys),
      b = _.pick(copiedObj, keys)

    return !_.isEqual(a, b)
  } else return false
}

export function restoreChangedData(obj, copiedObj, keys) {
  keys.forEach(key => {
    if (copiedObj[key] !== obj[key]) copiedObj[key] = obj[key]
  })
}
