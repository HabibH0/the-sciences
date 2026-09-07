// Ported from Mīzān src/content/arabic.ts by scripts/import-mizan.mjs.
export function arabicTypography() {
    return (tree)=>{
        function visit(node) {
            if (!node.children || [
                'code',
                'inlineCode',
                'arabic'
            ].includes(node.type)) return;
            node.children = node.children.flatMap((child)=>{
                if (child.type !== 'text' || !child.value) {
                    visit(child);
                    return [
                        child
                    ];
                }
                return child.value.split(/([\p{Script=Arabic}\u064b-\u065f]+(?:[ \u00a0]+[\p{Script=Arabic}\u064b-\u065f]+)*)/gu).filter(Boolean).map((value)=>/\p{Script=Arabic}/u.test(value) ? {
                        type: 'arabic',
                        data: {
                            hName: 'bdi',
                            hProperties: {
                                lang: 'ar',
                                dir: 'rtl'
                            }
                        },
                        children: [
                            {
                                type: 'text',
                                value
                            }
                        ]
                    } : {
                        type: 'text',
                        value
                    });
            });
        }
        visit(tree);
    };
}
