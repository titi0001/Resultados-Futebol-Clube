export default class ErrorRequest extends Error {
  constructor(message: string) {
    super(message);
    if (this.name === 'IdNotFoundError') { this.name = 'IdNotFoundError'; }
    this.stack = '404';
    if (this.name === 'Invalid email or password') { this.name = 'Invalid email or password'; }
    this.stack = '401';
  }
}
