import ArrayBufferConverter, {getBuffer} from '../arrayBufferTwo';

test('buffer converter', () => {
    const buffer = getBuffer();
    const arr = new ArrayBufferConverter();
    arr.load(buffer);
    const received = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    
    expect(received).toEqual(arr.toString());
})