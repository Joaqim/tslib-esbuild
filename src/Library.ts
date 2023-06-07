export interface LibraryClass {
  sayHello: () => void;
  add: (a: number, b: number) => number;
}

class Library implements LibraryClass {
  /**
   * Logs a greeting message to the console.
   *
   * @return {void} Does not return anything.
   */
  // eslint-disable-next-line class-methods-use-this
  public sayHello(): void {
    // eslint-disable-next-line no-console
    console.log("Hello World!");
  }

  /**
   * Add two numbers together and return result
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  public add = (a: number, b: number): number => a + b;
}

export default Library;
