const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, fileContent, (err) => {
		if (err) {
			console.log(err);
		}
	})

}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName, "utf-8", (err, data) => {
		if (err) {
			return err;
		} else {
			return data;
		}
	})
	console.log(data);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent, (err) => {
		if (err) {
			return err;
		} else {
			return;
		}
	})

}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName, (err) => {
		if (err) console.lof(err);
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }