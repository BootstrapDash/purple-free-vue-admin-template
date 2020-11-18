import {
  ModelManager
} from './model-manager'
import {
  TimeMachine
} from './time-machine'

const createDefaultTimeMachine = function (opts) {
  return new TimeMachine(opts)
}

export class ImmutableModelManager extends ModelManager {
  constructor(opts = {}) {
    super(opts)
    this.timeOut = opts.timeOut || 800
    let createTimeMachine = opts.createTimeMachine || createDefaultTimeMachine
    this.timeMachine = createTimeMachine(Object.assign(opts, {
      model: this.model,
      modelRef: this.modelRef
    }))
  }

  get clazzName() {
    return this.constructor.name || 'ImmutableModelManager'
  }

  get model() {
    return this.timeMachine ? this.timeMachine.model : this._model
  }

  get history() {
    return this.timeMachine.history
  }

  get timeIndex() {
    return this.timeMachine.timeIndex
  }

  /**
   * Travel to specific point in action history stack
   * @param {*} index
   */
  timeTravel(index) {
    return this.timeMachine.timeTravel(index)
  }

  /**
   * Undo previous action from history
   */
  undo() {
    // this.log('UNDO', this.timeMachine)
    this.timeMachine.undo()
    return this
  }

  /**
   * Redo undone action
   */
  redo() {
    // this.log('REDO', this.timeMachine)
    this.timeMachine.redo()
    return this
  }

  addToHistory(model) {
    this.timeMachine.addToHistory(model)
    return this
  }

  // override with Immutable
  createModel(model) {
    return model || []
  }

  // TODO: add to history!?
  createFor(opts = {}) {
    return new ImmutableModelManager(opts)
  }

  isEmpty() {
    return this.model.length === 0
  }

  get first() {
    return this.at(0)
  }

  get last() {
    return this.at(this.model.length - 1)
  }

  actionUpdateModel(newModel) {
    setTimeout(() => {
      this.addToHistory(newModel)
    }, this.timeOut || 800)
  }

  /**
   * Removes item at index
   * @param {*} index
   */
  removeAt(index) {
    if (this.copy) return
    this.log('removeAt', {
      model: this.model,
      index
    })
    // create new model with self excluded
    const before = this.model.slice(0, index)
    const exclAfter = this.model.slice(index + 1)

    this.log('removeAt: concat', before, exclAfter)
    const newModel = this.createModel().concat(before, exclAfter)

    this.actionUpdateModel(newModel)
    return newModel
  }

  /**
   * Inserts a dropModel at specific index
   * NOTE: Copy needs to insert the copied item only, no remove or move involved
   * @param {*} index
   * @param {*} dropModel
   */
  insertAt(index, insertModel) {
    this.log('insertAt', {
      model: this.model,
      index,
      insertModel
    })

    // create new model with new inserted

    // Slice off the items BEFORE the insertion index
    const itemsBefore = this.sliceBefore(index)

    // Slice off the items ATER the insertion index
    const itemsAfter = this._sliceAfter(index)

    this.log('insertAt: concat', {
      itemsBefore,
      insertModel,
      itemsAfter
    })

    const newModel = this._createNewModelFromInsert(itemsBefore, insertModel, itemsAfter)

    this.log({
      newModel
    })

    this.actionUpdateModel(newModel)
    return newModel
  }

  _createNewModelFromInsert(itemsBefore, insertItem, itemsAfter) {
    return this.createModel().concat(itemsBefore, insertItem, itemsAfter)
  }

  /**
   * Slice off the items before the insertion index
   * @param {*} index
   */
  _sliceBefore(index) {
    return this.model.slice(0, index)
  }

  /**
   * Slice off the items after the insertion index
   * @param {*} index
   */
  _sliceAfter(index) {
    this.model.slice(index)
  }




  /**
   * Moves item from one index to another
   * NOTE: If we are doing a copy, we should never perform a move (ie. a remove and insert)
   * @param {*} param0
   */
  move({
    dragIndex,
    dropIndex
  }) {
    if (this.copy) return
    this.log('move', {
      model: this.model,
      dragIndex,
      dropIndex
    })
    this.timeMachine.undo()
    return this
  }
}
