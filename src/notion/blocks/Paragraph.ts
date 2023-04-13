import AbstractBlock from "./AbstractBlock";
import {NotionBlock} from "../NotionTypes";

export type NotionParagraph = Extract<NotionBlock, { type: 'paragraph' }>;

export default class Paragraph extends AbstractBlock {
  constructor(private readonly block: NotionParagraph, children: AbstractBlock[]) {
    super(block, children);
  }

  public toMarkdown(formatter): string {
    return `${formatter.texts(this.block.paragraph.rich_text)}\n`;
  }
}