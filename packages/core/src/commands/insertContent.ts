import { ParseOptions } from '@tiptap/pm/model'

import { Content, RawCommands } from '../types.js'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    insertContent: {
      /**
       * Insert a node or string of HTML at the current position.
       */
      insertContent: (
        value: Content,
        options?: {
          parseOptions?: ParseOptions
          updateSelection?: boolean
          throwOnError?: boolean
          applyInputRules?: boolean
          applyPasteRules?: boolean
        },
      ) => ReturnType
    }
  }
}

export const insertContent: RawCommands['insertContent'] = (value, options) => ({ tr, commands }) => {
  return commands.insertContentAt(
    { from: tr.selection.from, to: tr.selection.to },
    value,
    options,
  )
}
