import {
  MDXEditor,
  listsPlugin,
  quotePlugin,
  headingsPlugin,
  linkPlugin,
  linkDialogPlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";
import "./dark-editor.css";
import { basicDark } from "cm6-theme-basic-dark";

const initialMarkdown = `
In Javascript,
"let' and 'const' are both used for variable
declaration, but they have some key differences:

Answer.tsx:114
1. **'let'**: Variables declared with 'let' can be reassigned a
new value. This means
that you can assign a new value to a variable declared with 'let' at any time.

Example:
\`\`\`tsx
let x = 10;
x. = 20: 11 Works fine
\`\`\`
`;

export default function App() {
  return (
    <div>
      <MDXEditor
        className="dark-theme dark-editor"
        markdown={initialMarkdown}
        plugins={[
          listsPlugin(),
          quotePlugin(),
          headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
          linkPlugin(),
          linkDialogPlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),
          codeMirrorPlugin({
            codeBlockLanguages: {
              js: "JavaScript",
              css: "CSS",
              txt: "text",
              tsx: "TypeScript",
            },
            codeMirrorExtensions: [basicDark],
          }),
        ]}
      />
    </div>
  );
}
