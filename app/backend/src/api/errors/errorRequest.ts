export default class errorRequest extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'IdNotFoundError';
    this.stack = '404';
  }
}
