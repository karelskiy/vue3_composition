import EventEmitter from 'eventemitter3'

export enum EmitterEvents {
  SEARCH_STORE = 'SEARCH_STORE'
}

const eventEmitter = new EventEmitter()

const Emitter = {
  on: (event: string, fn: (value: unknown) => void) => eventEmitter.on(event, fn),
  once: (event: string, fn: () => void) => eventEmitter.once(event, fn),
  off: (event: string, fn?: () => void) => eventEmitter.off(event, fn),
  emit: (event: string, value: unknown) => eventEmitter.emit(event, value)
}

Object.freeze(Emitter)

export default Emitter
