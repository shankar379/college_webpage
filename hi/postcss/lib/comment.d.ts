import Container from 'postcss/lib/container'
import Node, { NodeProps } from 'postcss/lib/node'

declare namespace Comment {
  export interface CommentRaws extends Record<string, unknown> {
    /**
     * The space symbols before the node.
     */
    before?: string

    /**
     * The space symbols between `/*` and the comment’s text.
     */
    left?: string

    /**
     * The space symbols between the comment’s text.
     */
    right?: string
  }

  export interface CommentProps extends NodeProps {
    /** Information used to generate byte-to-byte equal node string as it was in the origin input. */
    raws?: CommentRaws
    /** Content of the comment. */
    text: string
  }

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  export { Comment_ as default }
}

/**
 * It represents a class that handles
 * [CSS comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
 *
 * ```js
 * Once (root, { Comment }) {
 *   const note = new Comment({ text: 'Note: …' })
 *   root.append(note)
 * }
 * ```
 *
 * Remember that CSS comments inside selectors, at-rule parameters,
 * or declaration values will be stored in the `raws` properties
 * explained above.
 */
declare class Comment_ extends Node {
  parent: Container | undefined
  raws: Comment.CommentRaws
  /**
   * The comment's text.
   */
  text: string

  type: 'comment'

  constructor(defaults?: Comment.CommentProps)
  assign(overrides: Comment.CommentProps | object): this
  clone(overrides?: Partial<Comment.CommentProps>): Comment
  cloneAfter(overrides?: Partial<Comment.CommentProps>): Comment
  cloneBefore(overrides?: Partial<Comment.CommentProps>): Comment
}

declare class Comment extends Comment_ {}

export = Comment
