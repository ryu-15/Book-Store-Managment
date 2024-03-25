import filesystem from "fs";
import {newBook} from "../constants";
import BookInterface from "../models/Book";

const writeObjectInto = (path: string, data: string) => {
    filesystem.writeFile(path, data, 'utf8', (error) => {
        if (error) {
            throw new Error("Error while writing file");
        }
    });
}
export default writeObjectInto;