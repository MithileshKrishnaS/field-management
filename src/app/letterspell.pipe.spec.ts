import { LetterspellPipe } from './letterspell.pipe';

describe('LetterspellPipe', () => {
  it('create an instance', () => {
    const pipe = new LetterspellPipe();
    expect(pipe).toBeTruthy();
  });
});
