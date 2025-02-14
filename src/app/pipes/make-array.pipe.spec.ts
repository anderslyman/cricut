import { MakeArrayPipe } from './make-array.pipe';

describe('MakeArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new MakeArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('creates an array', () => {
    const pipe = new MakeArrayPipe();
    const result = pipe.transform(5);
    
    expect(result.length).toBe(5);
  });
});
