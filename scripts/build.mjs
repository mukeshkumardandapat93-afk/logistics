import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const projectRoot = new URL('../', import.meta.url);
const output = new URL('dist/', projectRoot);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL('logistics/', projectRoot), output, { recursive: true });
await cp(new URL('index.html', projectRoot), new URL('index.html', output));

console.log(`Static site prepared in ${fileURLToPath(output)}`);
