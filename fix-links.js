import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'src');

function fixLinks(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            fixLinks(fullPath);
        } else if (fullPath.endsWith('.astro') || fullPath.endsWith('.tsx') || fullPath.endsWith('.mdx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Replace href="/" with href="/WebsitePOT/"
            // and href="/anything" with href="/WebsitePOT/anything"
            // Make sure not to replace href="//" (external schemeless links)
            
            // This regex finds href="/ followed by anything that is NOT a slash
            const originalContent = content;
            content = content.replace(/href="\/(?!\/)/g, 'href="/WebsitePOT/');
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated links in: ${fullPath}`);
            }
        }
    }
}

fixLinks(directoryPath);
console.log("All links fixed to use the /WebsitePOT/ subfolder!");
