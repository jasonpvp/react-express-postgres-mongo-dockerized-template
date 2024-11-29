type JSONPrimitive =
  string
  | number
  | boolean

interface JSONObject {
  [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }

type JSONValue =
  JSONPrimitive
  | JSONObject
  | JSONArray;

export interface Item {
  id: number
  title: string
  description?: string
  timestamp: number
  editHistory: ItemEdit[]
  properties: Record<string, JSONPrimitive>
}

export interface ItemEdit {
  edit: Partial<Item>
}