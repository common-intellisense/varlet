import directives from '../directives.json'
import { getComponentMap, getPropsMap } from './mapping'

export function varlet3() {
  return {
    uiName: 'varlet3',
    map: getPropsMap(),
    lib: 'varlet',
  }
}

export function varlet3Components(isZh: boolean) {
  return {
    map: getComponentMap(isZh),
    isSeperatorByHyphen: true,
    prefix: 'var',
    lib: 'varlet',
    directives: directives.varlet3,
  }
}
