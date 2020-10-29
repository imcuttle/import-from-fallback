/**
 * Import a module like with `require()` but from some fallback directories
 * @author imcuttle
 */
import * as importFrom from 'import-from'

function importFallbacksInner(fallbacks: string[], id: string, silent: boolean): unknown {
  for (const fallback of fallbacks) {
    const result = importFrom.silent(fallback, id)
    if (!!result) {
      return result
    }
  }

  if (!silent) {
    const err = new Error(`Cannot find module '${id}' in \n${fallbacks.map((dir) => `- ${dir}`).join('\n')}`)
    // @ts-ignore
    err.code = 'MODULE_NOT_FOUND'
    throw err
  }
}

const importFallbacks = (fallbacks: string[], id: string) => importFallbacksInner(fallbacks, id, false)
importFallbacks.silent = (fallbacks: string[], id: string) => importFallbacksInner(fallbacks, id, true)

export = importFallbacks
