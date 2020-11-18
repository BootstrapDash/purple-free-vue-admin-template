export class ActionManager {
  constructor(opts = {}) {
    this.name = opts.name || 'default'
    this.logging = opts.logging
    this.observer = {
      undo: function (action) {},
      redo: function (action) {}
    }

    this.actions = {
      // stack of actions to undo
      done: [],
      // stack of actions undone to be redone(via. redo)
      undone: []
    }
  }

  get clazzName() {
    return this.constructor.name || 'ActionManager'
  }

  get shouldLog() {
    return this.logging
  }

  log(event, ...args) {
    if (!this.shouldLog) return
    console.log(`${this.clazzName} [${this.name}] :`, event, ...args)
  }

  clear() {
    this.actions.done = []
    this.actions.undone = []
  }

  // perform undo/redo on model (container)
  doAct(container, action) {
    this.log('doAct', {
      container,
      action
    })
    let actFun = container[action].bind(container)
    // this.log('doAct', actFun, container, action)
    if (!actFun) {
      throw new Error(container, 'missing', action, 'method')
    }
    actFun()
  }

  // if not a copy action, do the action on source container also
  isSourceContainerAction(action) {
    return action !== 'copy'
  }

  isTargetContainerAction(action) {
    return true
  }

  do({
    name,
    container
  }) {
    // this.log(name)
    let cDo = container.do
    let cUndo = container.undo
    if (!cDo.length) {
      // this.log('actions empty', cDo)
      return
    }
    let action = cDo.pop()
    // TODO: use elements, indexes to create visual transition/animation effect
    let {
      models
    } = action
    this.log('do', {
      name,
      action,
      source,
      target
    })

    let {
      source,
      target
    } = models

    // perform one action on source and one on target
    // this could be the cause of the double copy problem
    // since a copy action only takes effect on the target container

    if (this.isSourceContainerAction(action)) {
      this.doAct(source, name)
    }
    if (this.isTargetContainerAction(action)) {
      this.doAct(target, name)
    }

    this.emitAction(name, action)

    cUndo.push(action)
    // this.log('actions undo', cUndo)
  }

  emitAction(name, action) {
    this.log('emitAction', {
      name,
      action
    })
    let fun = this.observer[name]
    if (typeof fun === 'function') fun(action)
  }

  onUndo(fun) {
    this.observer.undo = fun
  }

  onRedo(fun) {
    this.observer.redo = fun
  }

  undo() {
    this.log('UNDO')

    this.do({
      name: 'undo',
      container: {
        do: this.actions.done,
        undo: this.actions.undone
      }
    })
  }

  redo() {
    this.log('REDO')
    this.do({
      name: 'redo',
      container: {
        do: this.actions.undone,
        undo: this.actions.done
      }
    })
  }

  act(action = {}) {
    const {
      name,
      models,
      indexes,
      elements
    } = action
    this.log('act (store action on stack)', {
      name,
      models,
      indexes,
      elements
    })
    this.actions.done.push(action)
  }
}
