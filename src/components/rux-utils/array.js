export default class {
    test(arr, key) {
        return arr.find((a) => {
            if (a.children && a.children.length > 0) {
                return a.key === key ? true : findKeyInArray(a.children, key)
            } else {
                return a.key === key
            }
        })
        return a
    }
}
