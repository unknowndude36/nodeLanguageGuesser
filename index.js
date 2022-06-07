const texts = process.argv.slice(2);
import { franc, francAll } from "franc";
import langs from "langs";

texts.forEach((text) => {
	try {
		const langCode = franc(text);
		const languageName = langs.where("2", langCode).name;
		console.log(languageName);
	} catch {
		console.log("Could not find any matches...");
	}
});
