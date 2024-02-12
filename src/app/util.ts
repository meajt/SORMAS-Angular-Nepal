
 export function createUuid(): string {
    return (
        generateRandomString(6) +
        '-' +
        generateRandomString(6) +
        '-' +
        generateRandomString(6) +
        '-' +
        generateRandomString(7)
      );
}

function generateRandomString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

