export default class ErrorRequest extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'IdNotFoundError';
    this.stack = '404';
  }
}
