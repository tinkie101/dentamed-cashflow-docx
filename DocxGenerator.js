const fs = require('fs');
const JSZip = require("jszip");
const docxtemplater = require("docxtemplater");

module.exports = class DocxGenerator {
	async generateDocx(dateString, entries) {
		let template = await this.loadFile();
		let zip = new JSZip(template);
		let document = new docxtemplater().loadZip(zip);

		document.setData({
			date: dateString,
			entries: entries,
		});

		document.render();

		return document.getZip().generate({
			type: "nodebuffer",
			mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		});
	}

	loadFile() {
		return new Promise((resolve, reject) => {
			fs.readFile("./template.docx", null, (error, data) => {
				if(error) {
					reject(error);
				}

				resolve(data.buffer);
			});
		});
	}
};
