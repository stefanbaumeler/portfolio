import { TBlogText } from '~/schema'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import { createHighlighter } from 'shiki'

type Props = {
    item: TBlogText
}

const highlighter = await createHighlighter({
    themes: ['github-light', 'github-dark'],
    langs: ['javascript', 'scss', 'json', 'typescript', 'tsx', 'html', 'yml', 'yaml', 'bash', 'dockerfile', 'nginx']
})

const marked = new Marked(markedHighlight({
    langPrefix: 'content__code content__code--',
    highlight: (code, lang) => {
        return highlighter.codeToHtml(code, {
            lang,
            themes: {
                light: 'github-light',
                dark: 'github-dark'
            },
            defaultColor: 'light-dark()'
        })
    }
}))

export const BlogText = ({ item }: Props) => {
    return <div
        className="content__text"
        dangerouslySetInnerHTML={{
            __html: marked.parse(item.text)
        }}
    />
}
