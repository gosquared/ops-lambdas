const env = process.env;

export function log(...args) {
  if (env.LOGS === 'off') return;

  console.log(...args.map(JSON.stringify));
}
