import {OutputTarget} from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        console.log(report);
        const html = `
            <div>
                <h1>Analysis Output</h1>
                <p>${report}</p>
            </div>
        `;

        fs.writeFileSync('report.html', html);
    }
}