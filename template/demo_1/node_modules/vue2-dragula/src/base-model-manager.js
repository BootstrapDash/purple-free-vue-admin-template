export class BaseModelManager {
  constructor(opts = {}) {
    if (Array.isArray(opts)) {
      opts = {
        model: opts
      }
    }
    opts.drake = opts.drake || {}
    this.opts = opts
    this.copy = opts.copy || opts.drake.copy
    this.name = opts.name
    this.drake = opts.drake
    this.logging = opts.logging
    this.logging = opts.logging
    this.modelRef = opts.model || []
  }

  get clazzName() {
    return this.constructor.name || 'BaseModelManager'
  }

  get shouldLog() {
    return this.logging && this.logging.modelManager
  }

  log(event, ...args) {
    if (!this.shouldLog) return
    console.log(`${this.clazzName} [${this.name}] :`, event, ...args)
  }

  notYet(name) {
    this.log(name, 'not yet implemented')
  }

  undo() {
    this.notYet('undo')
  }

  redo() {
    this.notYet('redo')
  }

  at(index) {
    this.notYet('at')
  }

  clear() {
    this.notYet('clear')
  }

  createModel(model) {
    this.notYet('createModel')
  }

  createFor(opts = {}) {
    this.notYet('createFor')
  }

  removeAt(index) {
    this.notYet('removeAt')
  }

  insertAt(index, dropModel) {
    this.notYet('removeAt')
  }

  move({
    dragIndex,
    dropIndex
  }) {
    this.notYet('move')
  }
}
