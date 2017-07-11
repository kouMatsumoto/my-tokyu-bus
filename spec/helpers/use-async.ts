/**
 * helper function to use async/await syntax in jasmine.
 *
 * @param asyncFunction
 * @return {(done) => void}
 */
export function useAsync(asyncFunction: () => Promise<void>) {
  return (done: Function) => {
    asyncFunction().then(() => done()).catch((e: Error) => done(e));
  };
}
