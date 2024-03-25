import filesystem from "fs/promises";

const readObjectListFrom = async <T>(path: string): Promise<T[]> => {
    let objectList: T[] = [];
    const data = await filesystem.readFile(path);
    const processedData = data.toString('utf8');
    for (let element of JSON.parse(processedData) as unknown as T[]) {
        objectList.push(element);
    }
    return objectList;
}

export default readObjectListFrom;
