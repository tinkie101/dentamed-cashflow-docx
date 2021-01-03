const express = require("express");
const DocxGenerator = require("./DocxGenerator");
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(bodyParser.json());

app.listen(3000, () => {
	console.log("Docx server running on port 3000");
});

app.post("/generateDocx", async (req, res) => {
	let docxGenerator = new DocxGenerator();
	let docxFile = await docxGenerator.generateDocx(req.body.date, req.body.entries);

	res.end(docxFile);
});
