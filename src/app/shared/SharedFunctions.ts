
export class SharedFunctions {
  static openMail(event?: Event) {
    event?.preventDefault();
    const user = 'andreas.dahm';
    const domain = 'gmail.com';
    globalThis.location.href = `mailto:${user}@${domain}`;
  }

}
