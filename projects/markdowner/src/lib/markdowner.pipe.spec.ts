import { MarkdownerPipe } from './markdowner.pipe';

describe('MarkdownerPipe', () => {
  it('create an instance', () => {
    const pipe = new MarkdownerPipe();
    expect(pipe).toBeTruthy();
  });
});
