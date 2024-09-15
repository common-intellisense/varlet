import directives from '../directives.json'
import { getComponentMap, getPropsMap } from './mapping'

export function varlet2() {
  return {
    uiName: 'varlet2',
    map: getPropsMap(),
    lib: 'varlet2',
    prefix: 'var',
  }
}

export function varlet2Components(isZh: boolean) {
  return {
    map: getComponentMap(isZh),
    isSeperatorByHyphen: true,
    prefix: 'var',
    lib: 'varlet',
    directives: directives.varlet2,
  }
}
