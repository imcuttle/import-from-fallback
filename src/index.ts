/**
 * Import a module like with `require()` but from some fallback directories
 * @author 余聪
 */
import * as importFrom from 'import-from'

const requireFallbacks = (fallbacks: string[], id: string) => {
  for (const fallback of fallbacks) {
    const result = importFrom.silent(fallback, id)
    if (!!result) {
      return result
    }
  }

  const err = new Error(`Cannot find module '${id}' in \n${fallbacks.map((dir) => `- ${dir}`).join('\n')}`)
  // @ts-ignore
  err.code = 'MODULE_NOT_FOUND'
  throw err
}

export = requireFallbacks
