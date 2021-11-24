import getTimeFromUnix from '../../utils/getTimeFromUnix';

test('returns from now string from unix timestamp', () => {
    const unixTs = Math.round(new Date().getTime() / 1000);
    const timeFromUnix = getTimeFromUnix(unixTs);
    const expectedOutput = ['a few seconds ago', 'in a few seconds'];
    expect(expectedOutput).toContain(timeFromUnix);
});
