export default class {
    static id() {
        return 'rid-' + Math.random().toString(36).substr(2, 9)
    }
}
