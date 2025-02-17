import { fabric } from 'fabric'
import { AnimationType } from '../common/interfaces'
// @ts-ignore
export class FrameObject extends fabric.Rect {
  static type = 'Frame'
  initialize(options: FrameOptions) {
    super.initialize({
      ...options,
      selectable: false,
      hasControls: false,
      lockMovementY: true,
      lockMovementX: true,
      strokeWidth: 0,
      padding: 0,
      evented: false
    })
    return this
  }

  toObject(propertiesToInclude: string[] = []) {
    return super.toObject(propertiesToInclude)
  }
  toJSON(propertiesToInclude: string[] = []) {
    return super.toObject(propertiesToInclude)
  }

  static fromObject(options: FrameOptions, callback) {
    return callback && callback(new fabric.Frame(options))
  }
}

fabric.Frame = fabric.util.createClass(FrameObject, {
  type: FrameObject.type
})
fabric.Frame.fromObject = FrameObject.fromObject

export interface FrameOptions extends fabric.IRectOptions {
  id: string
  version: string,
  objects: Object[],
  name: string
  description?: string,
  width: number,
  height: number,
  fill: string,
  hoverCursor: string,
  absolutePositioned: boolean,
}

declare module 'fabric' {
  namespace fabric {
    class Frame extends FrameObject {
      constructor(options: FrameOptions)
    }
    interface Object {
      id: string
      name: string
      locked: boolean
      animation: AnimationType
    }
  }
}
